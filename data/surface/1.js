var lines = lines || {};
lines['surface'] = lines['surface'] || {};
lines['surface']['1'] = [
    {
        name: 'Ул. Айзека Кляйнера',
        arsDrawBreakpoint: 6,
        arsAllSteps: false,
        tStay: 25,
        K: 1.5,
        interval: 40,
        modes: {
            0: 'H',
            300: '0',
            600: 'H',
            800: '0',
            1104: 'T',
        },
        joints: [
            { x: 0, name: '1811', limit: 0 },
            { x: 0 + 50, name: '1813', limit: 0, gmod: { TwoToSix: true } },
            { x: 0 + 50 + 50, name: '1815', limit: 0, gmod: { TwoToSix: true } },
            { x: 0 + 50 + 50 + 25, name: '1817', limit: 0, gmod: { TwoToSix: true } },
            { x: 0 + 50 + 50 + 25 + 50, name: '1819', limit: 0, gmod: { TwoToSix: true } },
            { x: 0 + 50 + 50 + 25 + 50 + 25, name: '1821', limit: 0, gmod: { TwoToSix: true } },
            { x: 0 + 50 + 50 + 25 + 50 + 25 + 50, name: '1823', limit: 0, gmod: { TwoToSix: true } },
            { x: 1187.5 - 62.5 - 75 - 62.5 - 62.5 - 62.5 - 62.5 - 137.5 - 275, name: '1863', limit: 0 },
            { x: 1187.5 - 62.5 - 75 - 62.5 - 62.5 - 62.5 - 62.5 - 137.5, name: '1865', limit: 0 },
            { x: 1187.5 - 62.5 - 75 - 62.5 - 62.5 - 62.5 - 62.5, name: '1867', limit: 0 },
            { x: 1187.5 - 62.5 - 75 - 62.5 - 62.5 - 62.5, name: '1869', limit: 0 },
            { x: 1187.5 - 62.5 - 75 - 62.5 - 62.5, name: '1871', limit: 0 },
            { x: 1187.5 - 62.5 - 75 - 62.5, name: '1873', limit: 0 },
            { x: 1187.5 - 62.5 - 80, name: '1875', limit: 0 },
            { x: 1187.5 - 62.5, name: '1877', limit: 0 },
            { x: 1187.5, name: '1879', limit: 0 },
            { x: 1187.5 + 62.5, name: '73', limit: 0 },
            { x: 1187.5 + 62.5 + 75, name: '75', limit: 0 },
            { x: 1187.5 + 62.5 + 75 + 75, name: '77', limit: 0 },
        ],
        signals: [
            { joint: '1813', name: '1801', lenses: 'YGR', autostop: 3, noRY: true, guard: 60, y: '1863', g: 'NEXT_y', gmod: { Pole: 3, SignalType: 8, Street: true } },
            { joint: '1863', name: '1803', lenses: 'YGR', autostop: 3, noRY: true, guard: 60, y: '1867', g: 'NEXT_y', gmod: { Pole: 3, SignalType: 8, Street: true } },
            { joint: '1865', name: 'КУ1805', lenses: 'YRGW', autostop: 3, noRY: true, guard: 60, y: '1871', yg: 'NEXT_y', g: 'NEXT_yg', gmod: { Pole: 3, SignalType: 8, Street: true } },
            { joint: '1867', name: 'КУ1807', lenses: 'YRGW', autostop: 3, noRY: true, guard: 60, y: '1873', yg: 'NEXT_y', g: 'SECOND_yg', gmod: { Pole: 3, SignalType: 8, Street: true } },
            { joint: '1869', name: 'КУ1809', lenses: 'YRGW', autostop: 3, noRY: true, guard: 60, y: '1875', yg: 'NEXT_y', g: 'NEXT_g', gmod: { Pole: 3, SignalType: 8, Street: true } },
            { joint: '1871', name: 'КУ1811', lenses: 'YRGW', autostop: 1, noRY: true, guard: 60, y: '1877', yg: 'NEXT_y', g: 'NEXT_g', gmod: { Pole: 3, SignalType: 8, Street: true } },
            { joint: '1873', name: 'КУ1813', lenses: 'YRGW', autostop: 1, noRY: true, guard: 60, y: '1879', g: 'NEXT_g', gmod: { Pole: 3, SignalType: 8, Street: true } },
            { joint: '1875', name: 'КУ1815', lenses: 'BWR-GWM', autostop: 1, noRY: true, guard: 60, g: '73', gmod: { Pole: 3, SignalType: 8, Street: true, Krons: "LL" } },
        ],
        mks: [
        ],
    },
    {
        name: 'Куровская',
        arsDrawBreakpoint: 8,
        arsAllSteps: true,
        tStay: 25,
        interval: 44,
        K: 1.5,
        interval: 40,
        modes: {
            0: 'H',
            300: '0',
            1000: 'H',
            1100: '0',
            1600: 'H',
            1675: '0',
            2000: 'T',
        },
        joints: [
        ],
        signals: [
        ],
        mks: [
        ],
    },
    {
        name: 'Площадь Восстания',
        arsDrawBreakpoint: 9,
        arsAllSteps: true,
        tStay: 25,
        K: 1.5,
        interval: 40,
        modes: {
            0: 'H',
            100: '0',
            550: 'P300',
            1060: '0',
            1160: 'H',
            1260: '0',
            1434: 'T',
        },
        joints: [
        ],
        signals: [
        ],
        mks: [
        ],
    },
    {
        name: 'Индустриальная',
        arsDrawBreakpoint: 8,
        arsAllSteps: false,
        tStay: 25,
        K: 1.5,
        interval: 40,
        modes: {
            0: 'H',
            200: '0',
            1883: 'T',
        },
        joints: [
        ],
        signals: [
        ],
        mks: [
        ],
    },
    {
        name: 'Антиколлаборанистическая',
        arsDrawBreakpoint: 6,
        arsAllSteps: false,
        tStay: 25,
        K: 1.5,
        interval: 40,
        modes: {
            0: 'H',
            150: '0',
            600: 'P210',
            1477: 'T',
        },
        joints: [
        ],
        signals: [
        ],
        mks: [
        ],
    },
    {
        name: 'Артемидовская',
        arsDrawBreakpoint: 5,
        tStay: 25,
        K: 1.5,
        interval: 40,
        modes: {
            0: 'H',
            300: '0',
            800: 'H',
            1090: '0',
            1587: 'T',
        },
        joints: [
        ],
        signals: [
        ],
        mks: [
        ],
    },
    {
        name: 'Советская',
        arsDrawBreakpoint: 6,
        tStay: 25,
        K: 1.5,
        interval: 40,
        modes: {
            0: 'H',
            350: '0',
            1100: 'P300',
            1780: '0',
            1892: 'T',
        },
        joints: [
        ],
        signals: [
        ],
        mks: [
        ],
    },
];