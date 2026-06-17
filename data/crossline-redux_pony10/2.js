var lines = lines || {};
lines['crossline-redux_pony10'] = lines['crossline-redux_pony10'] || {};
lines['crossline-redux_pony10']['2'] = [
    {
        name: 'Молодёжная',
        arsDrawBreakpoint: 1,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 44,
        modes: {
            0: 'H',
            188: '0',
            760: 'H',
            1300: '0',
            1665: 'T',
        },
        joints: [
        ],
        signals: [
        ],
    },
    {
        name: 'Кировская',
        arsDrawBreakpoint: 6,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 44,
        modes: {
            0: 'H',
            175: '0',
            1400: 'H',
            1600: '0',
            1824: 'T',
        },
        joints: [
        ],
        signals: [
        ],
        mks: [
            { x: 1706.6 - 42, name: '24МК' },
        ],
    },
    {
        name: 'Олимпийская',
        arsDrawBreakpoint: 7,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 44,
        modes: {
            0: 'H',
            475: '0',
            1175: 'H',
            1255: '0',
            1799: 'T',
        },
        joints: [
        ],
        signals: [
        ],
        mks: [
            { x: 1164.6 + 132.7, name: '20МК' },
        ],
    },
    {
        name: 'Пролетарская',
        arsDrawBreakpoint: 6,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 44,
        modes: {
            0: 'H',
            875: '0',
            1350: 'H',
            1420: '0',
            1795: 'T',
        },
        joints: [
        ],
        signals: [
        ],
        mks: [
            { x: 1533.4 - 16, name: '16МК' },
            { x: 695.9 + 30, name: '18МК' },
        ],
    },
    {
        name: 'Речная',
        arsDrawBreakpoint: 5,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 44,
        modes: {
            0: 'H',
            170: '0',
            1486: 'T',
        },
        joints: [
        ],
        signals: [
        ],
        mks: [
            { x: 1454 - 56.2, name: '14МК' }
        ],
    },
    {
        name: 'Октябрьская',
        arsDrawBreakpoint: 1,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 44,
        modes: {
            0: 'H',
            350: '0',
            700: 'H',
            1050: '0',
            1391: 'T',
        },
        joints: [
            { x: 0, name: '132', limit: 0 },
            { x: 0 + 75, name: '130', limit: 60, later: { 40: -1, 60: 2 } },
            { x: 0 + 75 + 50, name: '128', limit: 80, gmod: {Routes: [{ARSCodes: "08"}]} },
            { x: 0 + 75 + 50 + 250, name: '128а', limit: 80, later: { 80: -1 } },
            { x: 0 + 75 + 50 + 250 + 275, name: '128б', limit: 80, later: { 60: 2, 40: 2, 80: 2 } },
            { x: 0 + 75 + 50 + 250 + 275 + 200, name: '126', limit: 80, later: { 70: 2, 40: 2, 60: 2, 80: 1 } },
            { x: 1463 -0.5 - 87.5 - 112.5 - 162.5, name: '126а', limit: 80, gmod: {Routes: [{ARSCodes: "0068"}]} },
            { x: 1463 -0.5 - 87.5 - 112.5, name: '124', limit: 80, gmod: {Routes: [{ARSCodes: "0068"}]} },
            { x: 1463 -0.5 - 75, name: '122', limit: 70, gmod: {Routes: [{ARSCodes: "007"}]} },
            { x: 1463 -0.5 + 75, name: '1120', limit: 40, later: { 40: -1 } },
            { x: 1463 -0.5 + 75 + 50, name: '120', limit: 60 },
        ],
        signals: [
            { joint: '130', name: '128м', lenses: 'YGR', guard: 35, autostop: 1, g: '128б', gmod: {Pole: 1,Led: true} },
            { joint: '128б', name: '126м', lenses: 'YGR', noRY: true, guard: 80, autostop: 3, y: '126а', g: 'NEXT_y', gmod: {Pole: 1,Led: true} },
            { joint: '126а', name: '124', lenses: 'YGR', noRY: true, left: true, guard: 70, autostop: 3, y: '124', g: 'NEXT_y', gmod: {Pole: 1,Led: true} },
            { joint: '124', name: '122', lenses: 'YGR', noRY: true, left: true, guard: 60, autostop: 1, y: '122', g: 'NEXT_g', gmod: {SignalType: 8,Pole: 1} },
            { joint: '122', name: '1120', lenses: 'GR', noRY: true, left: true, guard: 60, autostop: 1, g: '1120', gmod: { SignalType: 8, OW: "[-14 0 0]" } },
            { joint: '1120', name: '120', lenses: 'x', guard: 35, autostop: 1 },
        ],
        mks: [
            { x: 878.5 + 123.2, name: '4МК' }
        ],
    },
    {
        name: 'Нахимовская',
        arsDrawBreakpoint: 7,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 44,
        modes: {
            0: 'H',
            350: '0',
            700: 'H',
            1200: '0',
            1743: 'T',
        },
        joints: [
            { x: -0.5 - 75, name: '122', limit: 0 },
            { x: -0.5 + 75, name: '1120', limit: 60, gmod:{Routes: [{ARSCodes:"00446"}]} }, // 120
            { x: -0.5 + 75 + 50, name: '120', limit: 80, gmod:{Routes:[{ARSCodes:"08"}]} },
            { x: -0.5 + 75 + 50 + 200, name: '120а', limit: 80, gmod:{Routes:[{ARSCodes:"08"}]} },
            { x: -0.5 + 75 + 50 + 200 + 200, name: '120б', limit: 80, gmod:{Routes:[{ARSCodes:"006668"}]} }, // 118
            { x: -0.5 + 75 + 50 + 200 + 200 + 350, name: '118', limit: 80, gmod:{Routes:[{ARSCodes:"0000668"}]} }, // 116
            { x: -0.5 + 75 + 50 + 200 + 200 + 350 + 225, name: '116', limit: 80, gmod:{Routes:[{ARSCodes:"066668"}]} },
            { x: 1843 -6 - 100 - 175 - 300, name: '116а', limit: 80, gmod:{Routes:[{ARSCodes:"000068"}]} }, // 114
            { x: 1843 -6 - 100 - 62.5 - 150 - 125, name: '116б', limit: 80, gmod:{Routes:[{ARSCodes:"06668"}]} }, 
            { x: 1843 -6 - 100 - 62.5 - 150, name: '114', limit: 80, gmod:{Routes:[{ARSCodes:"00068"}]} }, // 112
            { x: 1843 -6 - 100 - 62.5, name: '114а', limit: 70, gmod:{Routes:[{ARSCodes:"0008"}]} }, // 1110
            { x: 1843 -6 - 100, name: '112', limit: 70, gmod:{Routes:[{ARSCodes:"07"}]} },
            { x: 1843 -6 - 37.5, name: '1110', limit: 70, gmod:{Routes:[{ARSCodes:"06"}], Left: true} },
            { x: 1843 -6 + 75, name: '1110а', limit: 60, gmod:{Routes:[{ARSCodes:"06"}]} },
            { x: 1843 -6 + 75 + 50, name: '110', limit: 60, gmod:{Routes:[{ARSCodes:"06"}]} },
        ],
        signals: [
            { joint: '1120', name: '120м', lenses: 'YGR', guard: 35, autostop: 1, y: '120б', g: 'NEXT_y', gmod: {Pole: 1,Led: true} },
            { joint: '120б', name: '118', lenses: 'YGR', noRY: true, guard: 80, autostop: 1, left: true, y: '118', g: 'NEXT_y', gmod: {Pole: 1,Led: true} },
            { joint: '118', name: '116', lenses: 'YGR', noRY: true, guard: 80, autostop: 3, left: true, y: '116б', g: 'NEXT_y', gmod: {Pole: 1,Led: true} },
            { joint: '116а', name: '114', lenses: 'YGR', noRY: true, guard: 80, autostop: 3, left: true, y: '114а', g: 'NEXT_y', gmod: {Pole: 1,Led: true} },
            { joint: '114', name: '112', lenses: 'YGR', noRY: true, guard: 70, autostop: 1, left: true, y: '112', g: 'NEXT_g', gmod: {Pole: 1,Led: true} },
            { joint: '114а', name: '1110', lenses: 'GR', noRY: true, guard: 60, autostop: 1, left: true, g: '1110а', gmod: {SignalType: 8,Pole: 1} },
            { joint: '1110а', name: '110', lenses: 'x', guard: 35, autostop: 1 },
        ],
        mks: [
            { x: 415.5 + 223.3, name: '6МК' }
        ],
    },
    {
        name: 'Проспект Суворова',
        arsDrawBreakpoint: 7,
        arsAllSteps: false,
        tStay: 25,
        K: 1.5,
        interval: 44,
        modes: {
            0: 'H',
            350: '0',
            500: 'H',
            900: '0',
            1200: 'H',
            1300: '0',
            1498: 'T',
        },
        joints: [
            { x: -6 - 37.5, name: '1110', limit: 0, gmod:{Routes:[{ARSCodes:"06"}], Left: true} },
            { x: -6 + 75, name: '1110а', limit: 60, gmod:{Routes:[{ARSCodes:"04446"}]} }, // 110m
            { x: -6 + 75 + 50, name: '110', limit: 80, gmod:{Routes:[{ARSCodes:"08"}]} },
            { x: -6 + 75 + 50 + 300, name: '110а', limit: 80, gmod:{Routes:[{ARSCodes:"08"}]} },
            { x: -6 + 75 + 50 + 300 + 250, name: '110б', limit: 80, gmod:{Routes:[{ARSCodes:"000068"}]} }, // 108
            { x: -6 + 75 + 50 + 300 + 250 + 262.5, name: '108', limit: 80 },
            { x: -6 + 75 + 50 + 300 + 250 + 262.5 + 125, name: '108а', limit: 70 },
            { x: 1602 -8 - 62.5 - 125 - 112.5 - 100, name: '108б', limit: 70 },
            { x: 1602 -8 - 62.5 - 125 - 112.5, name: '106', limit: 70 },
            { x: 1602 -8 - 62.5 - 112.5, name: '1104', limit: 70 },
            { x: 1602 -8 - 62.5, name: '104', limit: 70, later: { 40: 2 } },
            { x: 1602 -8, name: '102', limit: 60 },
            { x: 1602 -8 + 87.5, name: '102а', limit: 40 },
            { x: 1602 -8 + 87.5 + 25, name: '1102', limit: 0 },
            { x: 1602 -8 + 87.5 + 25 + 50, name: '100', limit: 0 },
            { x: 1602 -8 + 87.5 + 25 + 50 + 75, name: '100а', limit: 0 },
            { x: 1602 -8 + 87.5 + 25 + 50 + 75 + 75, name: '1098', limit: 0 },
        ],
        signals: [
            { joint: '1110а', name: '110м', lenses: 'YGR', guard: 35, autostop: 1, g: '110б', gmod: {Pole: 1,Led: true} },
            { joint: '110б', name: '108', lenses: 'YGR', noRY: true, guard: 80, autostop: 1, y: '108б', g: 'NEXT_y', gmod: {Pole: 1,Led: true} },
            { joint: '108а', name: '106', lenses: 'YGR', guard: 70, autostop: 3, y: '106', yg: 'NEXT_y', g: 'NEXT_yg', gmod: {Pole: 1, Krons: "LN", Led: true} },
            { joint: '108б', name: 'ПХ-1104', lenses: 'YYGRw', guard: 70, autostop: 3, shift: 20, y: '1104', yg: 'NEXT_y', g: 'NEXT_yg', gmod: { SignalType: 8, Pole: 1, OW: "[-8 0 0]", Krons: "L"} },
            { joint: '106', name: 'ПХ-104', lenses: 'YGR-I', guard: 70, autostop: 1, shift: 13, y: '104', yg: 'NEXT_y', g: 'NEXT_g', gmod: {Pole: 1, Krons: "LN", Led: true} },
            { joint: '1104', name: 'ПХ-102', lenses: 'YGR-I', guard: 60, autostop: 1, shift: 15, y: '102а', g: 'NEXT_g', gmod: { OW: "[-8 0 0]", Krons: "MN", Led: true  } },
            { joint: '104', name: '1102', lenses: 'GR', guard: 60, noRY: true, autostop: 1, shift: 13, g: '1102', gmod: { SignalType: 8, Krons: "L" } }, //, Double: true, DoubleL: true
            { joint: '102а', name: '100м', lenses: 'x', guard: 35, autostop: 1 },
        ],
        mks: [
            { x: 1047.5 - 23.1, name: '8МК' }
        ],
    },
    {
        name: 'Политехническая',
        arsDrawBreakpoint: 1,
        arsAllSteps: true,
        tStay: 25,
        K: 1.5,
        interval: 44,
        slopesOverride: {
            1898: 0,
        },
        modes: {
            0: 'H',
            250: '0',
            2049: 'T',
        },
        joints: [
            { x: -8, name: '102', limit: 60 },
            { x: -8 + 87.5, name: '102а', limit: 60 },
            { x: -8 + 87.5 + 25, name: '1102', limit: 70 },
            { x: -8 + 87.5 + 25 + 50, name: '100', limit: 70 },
            { x: -8 + 87.5 + 25 + 50 + 75, name: '100а', limit: 80 },
            { x: -8 + 87.5 + 25 + 50 + 75 + 75, name: '100б', limit: 80 },
            { x: -8 + 87.5 + 25 + 50 + 100 + 350 -1, name: '1098', limit: 80 },
            { x: -8 + 87.5 + 25 + 50 + 100 + 350 + 225 -12.5, name: '98', limit: 80 },
            { x: -8 + 87.5 + 25 + 50 + 100 + 350 + 225 + 125 +5, name: '98а', limit: 80 },
            { x: -8 + 87.5 + 25 + 50 + 100 + 350 + 225 + 125 + 275, name: '96', limit: 80 },
            { x: -8 + 87.5 + 25 + 50 + 100 + 350 + 225 + 125 + 275 + 100, name: '1094', limit: 80 },
            { x: -8 + 87.5 + 25 + 50 + 100 + 350 + 225 + 125 + 275 + 100 + 150, name: '1094а', limit: 80 },
            { x: -8 + 87.5 + 25 + 50 + 100 + 350 + 225 + 125 + 275 + 100 + 150 + 137.5, name: '94', limit: 80, later: { 70: -1 } },
            { x: 2175 -8 - 37.5 - 62.5 - 62.5 - 50 - 87.5 - 100 - 75, name: '94а', limit: 80 },
            { x: 2175 -8 - 37.5 - 62.5 - 62.5 - 50 - 87.5 - 100, name: '94б', limit: 80 },
            { x: 2175 -8 - 37.5 - 62.5 - 62.5 - 50 - 87.5, name: '92', limit: 80 },
            { x: 2175 -8 - 37.5 - 62.5 - 62.5 - 50, name: '92а', limit: 80 },
            { x: 2175 -8 - 37.5 - 62.5 - 62.5, name: '90', limit: 70 },
            { x: 2175 -8 - 37.5 - 62.5, name: '1088', limit: 70 },
            { x: 2175 -8 - 37.5, name: '88', limit: 60 },
            { x: 2175 -8, name: '1086', limit: 60, gmod: { Kanava: true } },
            { x: 2175 -8 + 62.5, name: '86', limit: 40, gmod: { Kanava: true } },
            { x: 2175 -8 + 62.5 + 25 + 37.5, name: '1084', limit: 0 },
            { x: 2175 -8 + 62.5 + 25 + 37.5 + 75, name: '84', limit: 0 },
            { x: 2175 -8 + 62.5 + 25 + 37.5 + 75 + 87.5, name: '84а', limit: 0 },
        ],
        signals: [
            { joint: '102а', name: '100м', lenses: 'YGR', guard: 35, autostop: 3, y: '100б', g: 'NEXT_y', gmod: { SignalType: 7, Pole: 3, OnPoleZ: 25 } },
            { joint: '100а', name: '1098', lenses: 'YYGR', guard: 80, autostop: 3, y: '98', yg: 'NEXT_y', g: 'NEXT_yg', gmod: { SignalType: 8, Street: true, Pole: 3 } },
            { joint: '1098', name: '98', lenses: 'YGR', guard: 80, autostop: 3, y: '98а', yg: 'NEXT_y', g: 'NEXT_yg', gmod: { SignalType: 7, Pole: 1, OnPoleZ: 15 } },
            { joint: '98', name: '96м', lenses: 'YGR', guard: 80, autostop: 3, y: '96', yg: 'NEXT_y', g: 'NEXT_yg', gmod: { SignalType: 7, Pole: 3 } },
            { joint: '98а', name: '1094', lenses: 'YYGR', guard: 80, autostop: 3, y: '1094а', yg: 'NEXT_y', g: 'NEXT_yg', gmod: { SignalType: 8, Pole: 1 } },
            { joint: '96', name: '94', lenses: 'YGR', guard: 80, autostop: 3, y: '94б', yg: 'NEXT_y', g: 'NEXT_yg', gmod: { Pole: 1, Led: true } },
            //{ joint: '1094а', name: '1092', lenses: 'YYGR', guard: 80, autostop: 3, y: '1092', yg: 'NEXT_y', g: 'NEXT_yg', gmod: { SignalType: 8, Pole: 1 } },
            //{ joint: '94', name: '92', lenses: 'YGR', guard: 70, autostop: 3, shift: 18, y: '92', yg: 'NEXT_y', g: 'NEXT_yg', gmod: { Pole: 1 } },
            { joint: '94', name: '92', lenses: 'YYGR', guard: 70, autostop: 3, shift: 18, y: '92а', yg: 'NEXT_y', g: 'SECOND_yg', gmod: { SignalType: 8, Pole: 1 } },
            { joint: '94б', name: '90', lenses: 'YGR', guard: 60, autostop: 3, shift: 10, y: '90', yg: 'NEXT_y', g: 'SECOND_yg', gmod: { Pole: 1, Led: true } },
            { joint: '92', name: '1088', lenses: 'YYGR', guard: 60, autostop: 1, shift: 21, y: '1088', yg: 'NEXT_y', g: 'SECOND_yg', gmod: { SignalType: 8, Pole: 1 } },
            { joint: '92а', name: '88', lenses: 'YGR', guard: 60, autostop: 1, shift: 13, y: '88', yg: 'NEXT_y', g: 'NEXT_g', gmod: { Pole: 1, Led: true } },
            { joint: '90', name: '1086', lenses: 'YYGR', guard: 60, autostop: 1, shift: 25, y: '1086', yg: 'NEXT_y', g: 'NEXT_g', gmod: { SignalType: 8, Pole: 1 } },
            { joint: '1088', name: '86', lenses: 'YGR', guard: 60, autostop: 1, shift: 25, y: '86', g: 'NEXT_yg', gmod: { Pole: 1, Led: true } },
            { joint: '88', name: '1084м', lenses: 'YYGR', guard: 60, autostop: 1, shift: 25, yg: '1084', gmod: { SignalType: 8, Kanava: true, OW: "[7 0 -25]" } },
            { joint: '1084', name: '84', lenses: 'x', guard: 35, autostop: 3 },
        ],
        mks: [
            { x: 1304, name: '10МК' },
            { x: 2175 + 95.5 + 64.9, name: '12МК' },
        ],
    },
    {
        name: 'Парк Культуры',
        arsDrawBreakpoint: 8,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 44,
        slopesOverride: {
            0: 0,
        },
        modes: {
            0: 'H',
            220: '0',
            1472: 'T',
        },
        joints: [
            { x: -8, name: '1086', limit: 0, gmod: { Kanava: true } },
            { x: -8 + 62.5, name: '86', limit: 60, gmod: { Kanava: true } },
            { x: -8 + 62.5 + 25 + 37.5, name: '1084', limit: 60 },
            { x: -8 + 62.5 + 25 + 37.5 + 75, name: '84', limit: 70, gmod:{Routes:[{ARSCodes:"08"}]} },
            { x: -8 + 62.5 + 25 + 37.5 + 75 + 87.5, name: '84а', limit: 80, gmod:{Routes:[{ARSCodes:"08"}]} },
            { x: -8 + 62.5 + 25 + 37.5 + 75 + 87.5 + 200, name: '84б', limit: 80, gmod:{Routes:[{ARSCodes:"008"}]} }, // 82
            { x: -8 + 62.5 + 25 + 37.5 + 75 + 87.5 + 200 + 237.5, name: '82', limit: 80, gmod:{Routes:[{ARSCodes:"000068"}]} }, // 80
            { x: -8 + 62.5 + 25 + 37.5 + 75 + 87.5 + 200 + 237.5 + 237.5, name: '80', limit: 80, gmod:{Routes:[{ARSCodes:"08"}]} },
            { x: 1567 - 75 - 100 - 100 - 112.5, name: '80а', limit: 80, gmod:{Routes:[{ARSCodes:"00068"}]} }, // МД-78
            { x: 1567 - 75 - 100 - 100, name: '80б', limit: 80, gmod:{Routes:[{ARSCodes:"00068"}]} }, // МД-76
            { x: 1567 - 62.5 - 100, name: '78', limit: 80 },
            { x: 1567 - 62.5, name: '76', limit: 70 },
            { x: 1567, name: '74', limit: 60, gmod: { Kanava: true } },
            { x: 1567 + 62.5, name: '74а', limit: 40 },
            { x: 1567 + 62.5 + 50, name: '72', limit: 0 },
        ],
        signals: [
            { joint: '1084', name: '84', lenses: 'YGR', guard: 35, autostop: 3, y: '84б', g: 'NEXT_g', gmod: { Pole: 1, Led: true } },
            { joint: '84б', name: '82', lenses: 'GR', noRY: true, guard: 80, autostop: 1, g: '82', gmod: { Pole: 1, Led: true } },
            { joint: '82', name: '80', lenses: 'YGR', noRY: true, guard: 80, autostop: 1, y: '80б', g: 'NEXT_y', gmod: { Pole: 1, Led: true } },
            { joint: '80а', name: 'МД-78', lenses: 'YGR-I', noRY: true, guard: 80, autostop: 3, shift: 15, y: '78', yg: 'NEXT_y', g: 'NEXT_yg', gmod: { Pole: 1, Krons: "LN", Led: true } },
            { joint: '80б', name: 'МД-76', lenses: 'YGR-I', noRY: true, guard: 75, autostop: 1, y: '76', yg: 'NEXT_y', g: 'NEXT_g', gmod: { Pole: 1, Krons: "LN", Led: true } },
            { joint: '78', name: 'МД-74Д', lenses: 'YYGRw', guard: 70, autostop: 1, shift: 18, y: '74', g: 'NEXT_yg', gmod: { Pole: 1, SignalType: 8 } }, 
            { joint: '76', name: 'МД-74', lenses: 'YYGRw', guard: 60, autostop: 1, yg: '74а', gmod: { Pole: 1, SignalType: 8 } },
            { joint: '74а', name: 'МД-72', lenses: 'WY-GRw', guard: 35, autostop: 3, gmod: { Krons: "LNLNLN", LensesStr: "WY-34-GR-I-K-2", Led: true } },
            { joint: '76', name: 'ОП', gmod: { name: 'MDOP', DTM: true, Letter: "OP", Pole: 1 }, lenses: 'ZR', back: true, autostop: 3, row: 4 },
        ],
        mks: [
            { x: 95.5 + 64.9, name: '12МК' },
        ],
    },
    {
        name: 'Международная',
        arsDrawBreakpoint: 7,
        arsAllSteps: true,
        tStay: 25,
        K: 1,
        interval: 44,
        modes: {
            0: 'H',
            45: '0',
            313: 'T',
        },
        joints: [],
        signals: [],
    },
];