R50_MODE = false
RAYS = false
NEW_ERA = true
local pogashenie = false

local angle_mirror = Angle(0, 180, 0)

function getSignalTrackRerailTrace(trackID, x, isBack)
    local downVector = Vector(0, 0, -300)
    local pos, dir = Metrostroi.GetTrackPosition(Metrostroi.Paths[trackID], x)
    if not pos or not dir then
        print("Failed to get track position for trackID: ", trackID, " at x: ", x)
        return
    end
    local trace = util.TraceLine({
        start = pos,
        endpos = pos + downVector,
        mask = MASK_NPCWORLDSTATIC
    })

    local length = trace.HitPos:Distance(pos) * 2
    local playerPos = Either(isBack, pos + (dir * length), pos - (dir * length))
    local playerAim = (trace.HitPos - playerPos):GetNormalized()
    local rerailTrace = Metrostroi.RerailGetTrackData(trace.HitPos, playerAim)
    if not rerailTrace then
        print("Failed to rerail trace at position: ", trace.HitPos)
        return
    end
    return rerailTrace
end

function getWallTraceLength(trackID, x, isBack)
    local pos, dir = Metrostroi.GetTrackPosition(Metrostroi.Paths[trackID], x)
    local rightVector = Vector(300, 0, 0)
    local trace = util.TraceLine({
        start = pos + Vector(0, 0, -50),
        endpos = pos + rightVector,
        mask = bit.bor(CONTENTS_SOLID, CONTENTS_MOVEABLE, CONTENTS_MONSTER, CONTENTS_WINDOW, CONTENTS_DEBRIS, CONTENTS_GRATE, CONTENTS_AUX)
    })

    local length = trace.HitPos:Distance(pos)
    print(length)
    PrintTable(trace)
    return length, trace
end

function getSignalTrackPositionAngles(rerailTrace)
    if not rerailTrace then
        print("Rerail trace is nil")
        return
    end

    local position = rerailTrace.centerpos - rerailTrace.up * 9.5
    local angles = (-rerailTrace.right):Angle()
    return position, angles
end

function getAutostopTrackPositionAngles(rerailTrace)
    if not rerailTrace then
        print("Rerail trace is nil")
        return
    end

    local position = rerailTrace.centerpos
    local angles = rerailTrace.right:Angle()
    return position, angles
end

function getAutostopNewEraTrackPositionAngles(rerailTrace)
    if not rerailTrace then
        print("Rerail trace is nil")
        return
    end

    local position = rerailTrace.centerpos - Vector(0, 0, 9.5)
    local angles = rerailTrace.right:Angle()
    return position, angles
end

function getRayTrackPositionAngles(rerailTrace)
    if not rerailTrace then
        print("Rerail trace is nil")
        return
    end

    local position = rerailTrace.centerpos
    local angles = rerailTrace.forward:Angle()
    return position, angles
end

function editParams(options)
	local Params = {}
	Params.SpawnRC = true
	if options.Led then Params.Led = true end 
	if options.DTM then Params.DTM = true end 
	if options.FLeft then Params.FLeft = true end 
	if options.Kanava then Params.Kanava = true end 
	if options.LetterK then Params.LetterK = true end 
	if options.ColorLens then Params.ColorLens = true end 
	if options.FrontArsName then Params.LetterL = options.FrontArsName else Params.LetterL = string.sub(options.Name, 3) end 
	if options.OnPoleZ then Params.OnPoleZ = options.OnPoleZ end 
	if options.Letter then Params.Letter = options.Letter end 
	if options.Types then Params.Types = options.Types end 
	if options.Krons then Params.Krons = options.Krons end 
	if options.Pole then Params.Pole = options.Pole end 
	if options.Left then 
		Params.FLeft = true 
	else
		Params.LetterA = true
	end
	if options.Street then 
		Params.Street = true 
		Params.Shit = true
	end 
	if options.OW then 
		Params.OW = true
		Params.VectorOW = options.OW 
	end 
	return Params
end

function placeSignal(position, angles, options)
    local ent = ents.Create("gmod_track_signal")
    ent:SetPos(position)
    ent:SetAngles(angles)
    ent:Spawn()
    ent.SignalType = options.SignalType ~= 0 and options.SignalType or 8
	ent.RouteNumberSetup = options.RouteNumberSetup
    ent.NonAutoStop = options.NonAutoStop
	ent.RouteNumber = options.RouteNumber
    ent.LensesStr = options.LensesStr
	ent.Params = editParams(options)
	ent.TwoToSix = options.TwoToSix
	ent.Approve0 = options.Approve0
    ent.ARSOnly = options.ARSOnly
    ent.DoubleL = options.DoubleL
	ent.PassOcc = options.PassOcc
    ent.Double = options.Double
    ent.Name = options.Name
    ent.Left = options.Left
	ent.Routes = options.Routes --({
    --    {
    --        NextSignal = "*",
    --        ARSCodes = options.ARSCodes,
    --        Lights = options.Lights,
    --    },
    --})
    if options.r ~= 0 and not options.ARSOnly and pogashenie then
        ent.Routes[1].RezabCommand = "suka"
        ent.Routes[1].RezabEnabled = false
        if not ent.Routes[1].Rezab1 then ent.Routes[1].Rezab1 = "0" end
    end

    if R50_MODE then
        ent.IsolateSwitches = ent.IsolateSwitches or {}
    end

    if R50_MODE then
        ent.IsolateSwitches.FrontArsName = options.FrontArsName
        ent.IsolateSwitches.SlowBlinking = true
    end

    if R50_MODE and options.Invisible then
        ent.IsolateSwitches.Invisible = true
        ent.IsolateSwitches.UnderHeadSign = true
        ent.IsolateSwitches.HeadsHeightOffset = -20
        ent.IsolateSwitches.HeadsXOffset = options.HeadsXOffset
        ent.IsolateSwitches.CenteredArsName = true
    end

    if R50_MODE and options.Back then
        ent.IsolateSwitches.HideDTM = true
    end

    if R50_MODE and options.SignalName then
        ent.IsolateSwitches.SignalName = options.SignalName
    end

    ent.Lenses = string.Explode("-", ent.LensesStr)
    ent:SendUpdate()
end

function placeAutostop(position, angles, options)
    local ent = ents.Create("gmod_scb_autostop")
    ent:SetPos(position)
    ent:SetAngles(angles)
    ent:SetName(options.Name or "")
    ent:SetNW2String("Name", options.Name or "")
    ent.config = {
        Type = "electric",
        SignalName = options.SignalName or "",
    }

    ent:Spawn()
end

function placeAutostopNewEra(position, angles, options)
    local ent = ents.Create("gmod_track_autostop")
    ent:SetPos(position)
    ent:SetAngles(angles + angle_mirror)
    ent.SignalLink = options.SignalName or ""
    ent.MaxSpeed = 0
    ent.Type = 1

    ent:Spawn()
end

function placeRay(position, angles, options, trackID, trackX)
    local ent = ents.Create("gmod_vitromod_ray")
    ent:SetPos(position)
    ent:SetAngles(angles)
    ent:SetName(options.Name or "")
    ent:SetNW2String("Name", options.Name or "")
    ent:SetTrackID(trackID)
    ent:SetTrackX(trackX)
    ent:SetAdjacentSignalName(options.AdjacentSignalName or "")
    ent:SetRequiredSpeed(options.RequiredSpeed or 0)
    -- ent:SetNW2String("Name", options.Name or "")
    -- ent.config = {
    --     Type = "ray",
    --     SignalName = options.Name or "",
    -- }
    ent:Spawn()
end

function importSignalData(fileName, trackID, deleteAutostop)
    for k, v in pairs(ents.FindByClass("gmod_scb_autostop")) do
        local signal = v.Signal
        if signal and signal.TrackPosition and signal.TrackPosition.path.id == trackID then v:Remove() end
    end

    if deleteAutostop then
		for k, v in pairs(ents.FindByClass("gmod_track_autostop")) do
			local signal = v.Sig
			if signal and signal.TrackPosition and signal.TrackPosition.path.id == trackID then v:Remove() end
		end
	end

    for k, v in pairs(ents.FindByClass("gmod_track_signal")) do
        if v.TrackPosition and v.TrackPosition.path.id == trackID then v:Remove() end
    end

    for k, v in pairs(ents.FindByClass("gmod_vitromod_ray")) do
        if v.GetTrackID() == trackID then v:Remove() end
    end

    Metrostroi.UpdateSignalEntities()
    Metrostroi.PostSignalInitialize()
    local json = file.Read("metrostroi_data/calc/" .. fileName, "DATA")
    local signals = util.JSONToTable(json)
    for _, signal in pairs(signals) do
        local rerailTrace = getSignalTrackRerailTrace(trackID, signal.x, signal.Back or false)
        if not rerailTrace then
            print("Failed to get rerail trace for signal: ", signal.Name)
            continue
        end

        if signal.IsAutostop then
            if R50_MODE then
                local position, angles = getAutostopTrackPositionAngles(rerailTrace)
                placeAutostop(position, angles, signal)
            elseif NEW_ERA then
                local position, angles = getAutostopNewEraTrackPositionAngles(rerailTrace)
                placeAutostopNewEra(position, angles, signal)
            end
        elseif signal.IsRay then
            if not RAYS then continue end
            local position, angles = getRayTrackPositionAngles(rerailTrace)
            placeRay(position, angles, signal, trackID, signal.x)
        else
            if signal.Invisible and not signal.HeadsXOffset then
                local wallLength, wallTrace = getWallTraceLength(trackID, signal.x, signal.Back or false)
                signal.HeadsXOffset = Either(wallTrace.Hit, wallLength - 154.25, 19)
            end

            local position, angles = getSignalTrackPositionAngles(rerailTrace)
            placeSignal(position, angles, signal)
        end
    end

    Metrostroi.UpdateSignalEntities()
    Metrostroi.PostSignalInitialize()
end

concommand.Add( "metrostroi_signal_import", function(ply, args)
    if IsValid(ply) and not ply:IsAdmin() then return end
    importSignalData(args[1], tonumber(args[2]))
end )

-- importSignalData("signals-imagine-1.json", 9, true)
-- importSignalData("signals-imagine-2.json", 1, true)
-- importSignalData("signals-imagine-1_additional.json", 9, false)
-- importSignalData("signals-imagine-2_additional.json", 1, false)
-- importSignalData("signals-crossline-redux-2.json", 7)
-- importSignalData("signals-crossline-redux-3.json", 4)
-- importSignalData("signals-crossline-redux-4.json", 5)
-- importSignalData("signals-surface-1.json", 7, true)
-- importSignalData("signals-surface-2.json", 8, true)
-- importSignalData("signals-surface-1_additional.json", 7, false)
-- importSignalData("signals-surface-2_additional.json", 8, false)
-- importSignalData("signals-samara-1.json", 1, true)
importSignalData("signals-sokolka-1.json", 1, true)
importSignalData("signals-sokolka-2.json", 2, true)
importSignalData("signals-sokolka-1_additional.json", 1, false)
importSignalData("signals-sokolka-2_additional.json", 2, false)