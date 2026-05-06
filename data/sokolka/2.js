var lines = lines || {};
lines['sokolka'] = lines['sokolka'] || {};
lines['sokolka']['2'] = [
    {
        name: 'ЮЗ',
        arsDrawBreakpoint: 7,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 40,
        modes: {
            0: 'H',
            128: '0',
            845: 'T',
        },
        joints: [
        ],
        signals: [
        ],
    },
    {
        name: 'ПВ',
        arsDrawBreakpoint: 6,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 40,
        modes: {
            0: 'H',
            100: '0',
            684: 'T'
        },
        joints: [
        ],
        signals: [
        ],
    },
    {
        name: 'УН',
        arsDrawBreakpoint: 7,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 40,
        modes: {
            0: 'H',
            40: '0',
            150: 'H',
            230: '0',
            835: 'T',
        },
        joints: [
        ],
        signals: [
            ],
        mks: [
            
        ],
    },
    {
        name: 'ВГ',
        arsDrawBreakpoint: 9,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 40,
        modes: {
            0: 'H',
            300: '0',
            1546: 'T',
        },
        joints: [
            { x: -10, name: '1776', limit: 60, gmod: { TwoToSix: true, Kanava: true, SignalType: 6 } },
            { x: -10 + 37.5, name: '1778', limit: 60, gmod: { TwoToSix: true, Kanava: true, SignalType: 6 } },
            { x: -10 + 37.5 + 37.5, name: '1780', limit: 60, gmod: { TwoToSix: true, Kanava: true, SignalType: 6 } },
            { x: -10 + 37.5 + 37.5 + 50, name: '1612', limit: 40, gmod: { TwoToSix: true, Approve0: true } },
            { x: -10 + 37.5 + 37.5 + 50 + 37.5, name: '1614', limit: 60, gmod: { TwoToSix: true } },
            { x: -10 + 37.5 + 37.5 + 50 + 37.5 + 37.5, name: '1616', limit: 70, gmod: { TwoToSix: true } },
            { x: -10 + 37.5 + 37.5 + 50 + 37.5 + 37.5 + 37.5, name: '1618', limit: 70, gmod: { TwoToSix: true } },
            { x: -10 + 37.5 + 37.5 + 50 + 37.5 + 37.5 + 37.5 + 37.5, name: '1620', limit: 70, gmod: { TwoToSix: true } },
            { x: -10 + 37.5 + 37.5 + 50 + 37.5 + 37.5 + 37.5 + 37.5 + 112.5, name: '1622', limit: 70, gmod: { TwoToSix: true } },
            { x: -10 + 37.5 + 37.5 + 50 + 37.5 + 37.5 + 37.5 + 37.5 + 112.5 + 150, name: '1626', limit: 70, gmod: { TwoToSix: true } },
            { x: -10 + 37.5 + 37.5 + 50 + 37.5 + 37.5 + 37.5 + 37.5 + 112.5 + 150 + 150, name: '1628', limit: 70, gmod: { TwoToSix: true } },
            { x: -10 + 37.5 + 37.5 + 50 + 37.5 + 37.5 + 37.5 + 37.5 + 112.5 + 150 + 150 + 150, name: '1630', limit: 70, gmod: { TwoToSix: true } },
            { x: 1602.5 - 37.5 - 50 - 50 - 37.5 - 37.5 - 50 - 37.5 - 50 - 125 - 150, name: '1658', limit: 70, gmod: { TwoToSix: true } },
            { x: 1602.5 - 37.5 - 50 - 50 - 37.5 - 37.5 - 50 - 37.5 - 50 - 125, name: '1660', limit: 70, later: { 60:1, 70: 1 }, gmod: { TwoToSix: true } },
            { x: 1602.5 - 37.5 - 50 - 50 - 37.5 - 37.5 - 50 - 37.5 - 50, name: '1662', limit: 70, gmod: { TwoToSix: true } },
            { x: 1602.5 - 37.5 - 50 - 50 - 37.5 - 37.5 - 50 - 37.5, name: '1664', limit: 70, gmod: { TwoToSix: true } },
            { x: 1602.5 - 37.5 - 50 - 50 - 37.5 - 37.5 - 50, name: '1666', limit: 70, later: { 40: 1 }, gmod: { TwoToSix: true } },
            { x: 1602.5 - 37.5 - 50 - 50 - 37.5 - 37.5, name: '1668', limit: 70, gmod: { TwoToSix: true } },
            { x: 1602.5 - 37.5 - 50 - 50 - 37.5, name: '1670', limit: 70, gmod: { TwoToSix: true, Routes: [{ NextSignal: "- NONE -", ARSCodes: "2" }] } },
            { x: 1602.5 - 37.5 - 50 - 50, name: '1672', limit: 70, gmod: { TwoToSix: true } },
            { x: 1602.5 - 37.5 - 50, name: '1674', limit: 60, gmod: { TwoToSix: true } },
            { x: 1602.5 - 37.5, name: '1676', limit: 40, gmod: { TwoToSix: true, Kanava: true, SignalType: 6 } },
            { x: 1602.5, name: '1678', limit: 40, gmod: { Kanava: true, SignalType: 6, TwoToSix: true } },
            { x: 1602.5 + 37.5, name: '1680', limit: 40, gmod: { Kanava: true, SignalType: 6 } },
            { x: 1602.5 + 37.5 + 37.5, name: '1512', limit: 40 },
            { x: 1602.5 + 37.5 + 37.5 + 75, name: '1514', limit: 0 },
        ],
        signals: [
            { joint: '1670', name: 'СП-168', lenses: 'BYGRw', gmod: { Pole: 1, Routes: [{ Lights: "4" }, { NextSignal: "*", Lights: "4-4-1", ARSCodes: "22044667", Manual: true, RouteName: "SP2-2" }] } },
        ],
    },
    {
        name: 'СП',
        arsDrawBreakpoint: 7,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 40,
        modes: {
            0: 'H',
            40: '0',
        },
        joints: [
        ],
        signals: [
        ],
        mks: [
        ],
    },
];