var lines = lines || {};
lines['loopline'] = lines['loopline'] || {};
lines['loopline']['3'] = [
    {
        name: 'Е1',
        tStay: 30,
        arsAllSteps: false,
        arsDrawBreakpoint: 1,
        K: 1.5,
        interval: 30,
        modes: {
            0: 'H',
            150: '0',
            1104: 'T',
        },
        joints: [
            { x: -2, name: '0', limit: 0 },
            { x: 97.9 - 44, name: '1СП', limit: 0, gmod: { DTM: true } },
            //{ x: 97.9, name: '5е', limit: 0 },
            { x: 97.9 + 75, name: '5д', limit: 0, gmod: { DTM: true, Approve0: true, Routes: [{ ARSCodes: "0" }, { Switches: "DEPDIR1+", ARSCodes: "1" }] } },
            { x: 97.9 + 87.5 + 137.5, name: '5г', limit: 40, gmod: { DTM: true, Approve0: true, Routes: [{}, { Switches: "DEPDIR1+", ARSCodes: "1" }] } },
            { x: 97.9 + 87.5 + 187.5 + 100, name: '5в', limit: 40, gmod: { Routes: [{}, { Switches: "DEPDIR1+", ARSCodes: "1" }] } },
            { x: 97.9 + 87.5 + 187.5 + 100 + 662.5 - 187.5 - 287.5, name: '5б', limit: 60, gmod: { Routes: [{}, { Switches: "DEPDIR1+", ARSCodes: "1", Lights: "4" }] } },
            { x: 97.9 + 87.5 + 187.5 + 100 + 662.5 - 187.5 - 125, name: '5а', limit: 60, gmod: { Routes: [{}, { Switches: "DEPDIR1+", ARSCodes: "1" }] } },
            { x: 97.9 + 87.5 + 187.5 + 100 + 662.5 - 187.5, name: '5', limit: 60, later: { 60: 1 }, gmod: { Pole: 1, Routes: [{}, { Switches: "DEPDIR1+", ARSCodes: "1", Lights: "4" }] } },
            { x: 97.9 + 87.5 + 187.5 + 100 + 662.5 + 60, name: '215', limit: 40 },
            { x: 97.9 + 87.5 + 187.5 + 100 + 662.5 + 61 + 10, name: '213г', limit: 0 },
            { x: 97.9 + 87.5 + 187.5 + 100 + 662.5 + 61 + 10 + 100, name: '213в', limit: 0 },
            { x: 97.9 + 87.5 + 187.5 + 100 + 662.5 + 61 + 10 + 100 + 125, name: '213б', limit: 0 },
        ],
        signals: [
            //{ joint: '5е', name: 'Е-1', lenses: 'BGR-w', autostop: 3, guard: 60, service: 50, left: true, g: '5а' },
            { joint: '5б', name: '1', lenses: 'YY-GR', autostop: 3, guard: 60, service: 50, left: true, y: '5', g: "NEXT_yg" },
            { joint: '5', name: 'ПН-3', lenses: 'YYG-RW', autostop: 3, guard: 60, yg: '213в' },
            { joint: '215', name: 'ПН-5', lenses: 'X', autostop: 3 },
        ],
    },
    {
        name: 'ПН5',
        arsDrawBreakpoint: 1,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 40,
        trackLength: 1134,
        modes: {
            0: 'H',
            50: '0',
        },
        joints: [
        ],
        signals: [
        ],
        mks: [
        ],
    },
];