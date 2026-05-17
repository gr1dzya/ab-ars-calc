var lines = lines || {};
lines['sokolka'] = lines['sokolka'] || {};
lines['sokolka']['2'] = [
    {
        name: 'ЮЗ',
        arsDrawBreakpoint: 1,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 40,
        modes: {
            0: 'H',
            650: '0',
            1262: 'T',
        },
        joints: [
            { x: -32.5 - 62.5 - 62.5 - 37.5, name: '2072', limit: 40, gmod: { TwoToSix: true } },
            { x: -32.5 - 62.5 - 62.5, name: '2074', limit: 40, gmod: { TwoToSix: true } },
            { x: -32.5 - 62.5, name: '2076', limit: 40, gmod: { TwoToSix: true } },
            { x: -32.5, name: '2078', limit: 40, gmod: { TwoToSix: true, Kanava: true } },
            { x: -32.5 + 62.5, name: '2080', limit: 40, gmod: { TwoToSix: true, Kanava: true } },
            { x: -32.5 + 62.5 + 62.5, name: '1912', limit: 40, gmod: { TwoToSix: true, Approve0: true } },
            { x: -32.5 + 62.5 + 62.5 + 62.5, name: '1914', limit: 60, gmod: { TwoToSix: true } },
            { x: -32.5 + 62.5 + 62.5 + 62.5 + 137.5, name: '1920', limit: 70, gmod: { TwoToSix: true } },
            { x: -32.5 + 62.5 + 62.5 + 62.5 + 137.5 + 137.5, name: '1922', limit: 70, gmod: { TwoToSix: true } },
            { x: -32.5 + 62.5 + 62.5 + 62.5 + 137.5 + 137.5 + 137.5, name: '1924', limit: 70, gmod: { TwoToSix: true } },
            { x: 1417.5 - 50 - 50 - 62.5 - 75 - 100 - 100 - 137.5 - 137.5, name: '1962', limit: 70, gmod: { TwoToSix: true } },
            { x: 1417.5 - 50 - 50 - 62.5 - 75 - 100 - 100 - 137.5, name: '1964', limit: 70, gmod: { TwoToSix: true } },
            { x: 1417.5 - 50 - 50 - 62.5 - 75 - 100 - 100, name: '1966', limit: 70, gmod: { TwoToSix: true } },
            { x: 1417.5 - 50 - 50 - 62.5 - 75 - 100, name: '1968', limit: 70, gmod: { TwoToSix: true } },
            { x: 1417.5 - 50 - 50 - 75 - 75, name: '1970', limit: 70, later:{60:-1}, gmod: { TwoToSix: true } },
            { x: 1417.5 - 50 - 50 - 75, name: '1972', limit: 70, later:{60:-1}, gmod: { TwoToSix: true } },
            { x: 1417.5 - 50 - 50, name: '1974', limit: 70, later:{60:-1}, gmod: { TwoToSix: true } },
            { x: 1417.5 - 50, name: '1976', limit: 60, gmod: { TwoToSix: true, Kanava: true } },
            { x: 1417.5, name: '1978', limit: 60, gmod: { TwoToSix: true, Kanava: true } },
            { x: 1417.5 + 37.5, name: '1980', limit: 60, gmod: { TwoToSix: true, Kanava: true } },
            { x: 1417.5 + 37.5 + 62.5, name: '1812', limit: 40, gmod: { TwoToSix: true, Approve0: true } },
            { x: 1417.5 + 37.5 + 62.5 + 62.5, name: '1814', limit: 0, gmod: { TwoToSix: true } },
            { x: 1417.5 + 37.5 + 62.5 + 62.5 + 62.5, name: '1816', limit: 0, gmod: { TwoToSix: true } },
            { x: 1417.5 + 37.5 + 62.5 + 62.5 + 62.5 + 75, name: '1818', limit: 0, gmod: { TwoToSix: true } }
        ],
        signals: [
			{ joint: '1912', name: '192М', lenses: 'YGR', 
                gmod: { 
                    Routes: [{Lights: " "}], 
                    SignalType: 6, 
                    OW: "[2 0 0]", 
                    FLeft: true 
                } 
            },
        ],
    },
    {
        name: 'ПВ',
        arsDrawBreakpoint: 1,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 40,
        modes: {
            0: 'H',
            350: '0',
            2504: 'T'
        },
        joints: [
            { x: 10.5 + 37.5, name: '1980', limit: 0, gmod: { TwoToSix: true, Kanava: true } },
            { x: 10.5 + 37.5 + 62.5, name: '1812', limit: 40, gmod: { TwoToSix: true, Approve0: true } },
            { x: 10.5 + 37.5 + 62.5 + 62.5, name: '1814', limit: 60, gmod: { TwoToSix: true } },
            { x: 10.5 + 37.5 + 62.5 + 62.5 + 62.5, name: '1816', limit: 60, gmod: { TwoToSix: true } },
            { x: 10.5 + 37.5 + 62.5 + 62.5 + 62.5 + 87.5, name: '1818', limit: 80, gmod: { TwoToSix: true } },
            { x: 10.5 + 37.5 + 62.5 + 62.5 + 62.5 + 87.5 + 137.5, name: '1820', limit: 80, later:{80:-1}, gmod: { TwoToSix: true } },
            { x: 10.5 + 37.5 + 62.5 + 62.5 + 62.5 + 87.5 + 137.5 + 137.5, name: '1822', limit: 80, gmod: { TwoToSix: true } },
            { x: 10.5 + 37.5 + 62.5 + 62.5 + 62.5 + 87.5 + 137.5 + 137.5 + 137.5, name: '1824', limit: 80, gmod: { TwoToSix: true } },
            { x: 10.5 + 37.5 + 62.5 + 62.5 + 62.5 + 87.5 + 137.5 + 137.5 + 137.5 + 137.5, name: '1826', limit: 80, gmod: { TwoToSix: true } },
            { x: 10.5 + 37.5 + 62.5 + 62.5 + 62.5 + 87.5 + 137.5 + 137.5 + 137.5 + 137.5 + 137.5, name: '1828', limit: 80, gmod: { TwoToSix: true } },
            { x: 10.5 + 37.5 + 62.5 + 62.5 + 62.5 + 87.5 + 137.5 + 137.5 + 137.5 + 137.5 + 137.5 + 137.5, name: '1830', limit: 80, gmod: { TwoToSix: true } },
            { x: 2544 - 62.5 - 33.5 - 62.5 - 75 - 87.5 - 112.5 - 137.5 - 137.5 - 137.5 - 137.5 - 137.5 - 137.5, name: '1856', limit: 80, gmod: { TwoToSix: true } },
            { x: 2544 - 62.5 - 33.5 - 62.5 - 75 - 87.5 - 112.5 - 137.5 - 137.5 - 137.5 - 137.5 - 137.5, name: '1858', limit: 80, gmod: { TwoToSix: true } },
            { x: 2544 - 62.5 - 33.5 - 62.5 - 75 - 87.5 - 112.5 - 137.5 - 137.5 - 137.5 - 137.5, name: '1860', limit: 80, gmod: { TwoToSix: true } },
            { x: 2544 - 62.5 - 33.5 - 62.5 - 75 - 87.5 - 112.5 - 137.5 - 137.5 - 137.5, name: '1862', limit: 80, gmod: { TwoToSix: true } },
            { x: 2544 - 62.5 - 33.5 - 62.5 - 75 - 87.5 - 112.5 - 137.5 - 137.5, name: '1864', limit: 80, gmod: { TwoToSix: true } },
            { x: 2544 - 62.5 - 33.5 - 62.5 - 75 - 87.5 - 112.5 - 137.5, name: '1866', limit: 80, gmod: { TwoToSix: true } },
            { x: 2544 - 62.5 - 33.5 - 62.5 - 75 - 87.5 - 112.5, name: '1868', limit: 80, gmod: { TwoToSix: true } },
            { x: 2544 - 62.5 - 33.5 - 62.5 - 75 - 87.5, name: '1870', limit: 80, gmod: { TwoToSix: true } },
            { x: 2544 - 62.5 - 33.5 - 62.5 - 75, name: '1872', limit: 70, gmod: { TwoToSix: true } },
            { x: 2544 - 62.5 - 33.5 - 62.5, name: '1874', limit: 70, gmod: { TwoToSix: true } },
            { x: 2544 - 62.5 - 33.5, name: '1876', limit: 60, gmod: { TwoToSix: true, RouteNumber: "2", Routes: [{},{ARSCodes: "0004", NextSignal: "*", Switches: "UN_SW_2-"}] } },
            { x: 2544 - 37.5, name: '1878', limit: 60, gmod: { TwoToSix: true, Kanava: true, Routes: [{},{ARSCodes: "0004", NextSignal: "*", Switches: "UN_SW_2-"}] } },
            { x: 2544 + 12.5, name: '1880', limit: 60, gmod: { TwoToSix: true, Kanava: true, Routes: [{},{ARSCodes: "0004", NextSignal: "*", Switches: "UN_SW_2-"}] } },
            { x: 2544 + 12.5 + 50, name: '1712', limit: 40, gmod: { TwoToSix: true, Approve0: true } },
            { x: 2544 + 12.5 + 50 + 50, name: '1714', limit: 0, gmod: { TwoToSix: true } },
            { x: 2544 + 12.5 + 50 + 50 + 37.5, name: '1716', limit: 0, gmod: { TwoToSix: true } },
            { x: 2544 + 12.5 + 50 + 50 + 37.5 + 50, name: '1716', limit: 0, gmod: { TwoToSix: true } },
        ],
        signals: [
			{ joint: '1812', name: '182М', lenses: 'YGR', 
                gmod: { 
                    Krons: "L", 
                    SignalType: 6, 
                    Routes: [{Lights: " "}], 
                    OW: "[4 0 0]", 
                    FLeft: true 
                } 
            },
            { joint: '1874', name: 'УН-188', lenses: 'BGRw', 
                gmod: { Pole: 1, Routes: [
                        {Lights: "3-1", Switches: "UN_SW_2+", RouteName: "UN2-2"},
                        {Lights: "3", ARSCodes: "2", Switches: "UN_SW_2-"} 
                    ]
                } 
            },
            { joint: '1876', name: 'Д', lenses: 'BWR-wM', back: true, 
                gmod: { 
                    TwoToSix: true, 
                    Approve0: true,
                    DTM: true,
                    Name: "UND",
                    Letter: "D",
                    Routes: [
                        { Lights: "3" },
                        {
                            RouteName: "UND-3",
                            Lights: "3-3-3-3-3-1",
                            ARSCodes: "222224",
                            Switches: "UN_SW_2-,UN_SW_4-,UN_SW_5-",
                            NextSignal: "UNFIX8",
                            EnRou: true,
                            Manual: true
                        },
                        {
                            RouteName: "UND-4",
                            Lights: "3-3-3-3-1",
                            ARSCodes: "22224",
                            Switches: "UN_SW_2-,UN_SW_4+,UN_SW_6+",
                            NextSignal: "UNFIX8",
                            EnRou: true,
                            Manual: true
                        }
                    ]
                }
            },
        ],
    },
    {
        name: 'УН',
        arsDrawBreakpoint: 1,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 40,
        modes: {
            0: 'H',
            1530: '0',
            2747: 'T',
        },
        joints: [
            { x: 81.5 - 50, name: '1880', limit: 0, gmod: { TwoToSix: true } },
            { x: 81.5, name: '1712', limit: 40, gmod: { TwoToSix: true, Approve0: true } },
            { x: 81.5 + 50, name: '1714', limit: 60, gmod: { TwoToSix: true } },
            { x: 81.5 + 50 + 37.5, name: '1716', limit: 70, gmod: { TwoToSix: true } },
            { x: 81.5 + 50 + 37.5 + 50, name: '1718', limit: 70, gmod: { TwoToSix: true } },
            { x: 81.5 + 50 + 37.5 + 50 + 125, name: '1722', limit: 70, gmod: { TwoToSix: true } },
            { x: 81.5 + 50 + 37.5 + 50 + 125 + 137.5, name: '1724', limit: 70, gmod: { TwoToSix: true } },
            { x: 81.5 + 50 + 37.5 + 50 + 125 + 137.5 + 137.5, name: '1726', limit: 80, gmod: { TwoToSix: true } },
            { x: 81.5 + 50 + 37.5 + 50 + 125 + 137.5 + 137.5 + 137.5, name: '1728', limit: 80, gmod: { TwoToSix: true } },
            { x: 81.5 + 50 + 37.5 + 50 + 125 + 137.5 + 137.5 + 137.5 + 137.5, name: '1730', limit: 80, gmod: { TwoToSix: true } },
            { x: 81.5 + 50 + 37.5 + 50 + 125 + 137.5 + 137.5 + 137.5 + 137.5 + 137.5, name: '1732', limit: 80, gmod: { TwoToSix: true } },
            { x: 81.5 + 50 + 37.5 + 50 + 125 + 137.5 + 137.5 + 137.5 + 137.5 + 137.5 + 137.5, name: '1734', limit: 80, gmod: { TwoToSix: true } },
            { x: 81.5 + 50 + 37.5 + 50 + 125 + 137.5 + 137.5 + 137.5 + 137.5 + 137.5 + 137.5 + 137.5, name: '1736', limit: 80, gmod: { TwoToSix: true } },
            { x: 2769 - 62.5 - 62.5 - 75 - 87.5 - 100 - 125 - 125 - 137.5 - 137.5 - 137.5 - 137.5 - 137.5, name: '1754', limit: 80, gmod: { TwoToSix: true } },
            { x: 2769 - 62.5 - 62.5 - 75 - 87.5 - 100 - 125 - 125 - 137.5 - 137.5 - 137.5 - 137.5, name: '1756', limit: 80, gmod: { TwoToSix: true } },
            { x: 2769 - 62.5 - 62.5 - 75 - 87.5 - 100 - 125 - 125 - 137.5 - 137.5 - 137.5, name: '1758', limit: 80, gmod: { TwoToSix: true } },
            { x: 2769 - 62.5 - 62.5 - 75 - 87.5 - 100 - 125 - 125 - 137.5 - 137.5, name: '1760', limit: 70, gmod: { TwoToSix: true } },
            { x: 2769 - 62.5 - 62.5 - 75 - 87.5 - 100 - 125 - 125 - 137.5, name: '1762', limit: 70, gmod: { TwoToSix: true } },
            { x: 2769 - 62.5 - 62.5 - 75 - 87.5 - 100 - 125 - 125, name: '1764', limit: 70, gmod: { TwoToSix: true } },
            { x: 2769 - 62.5 - 62.5 - 75 - 87.5 - 100 - 125, name: '1766', limit: 70, gmod: { TwoToSix: true } },
            { x: 2769 - 62.5 - 62.5 - 75 - 87.5 - 100, name: '1768', limit: 60, gmod: { TwoToSix: true } },
            { x: 2769 - 62.5 - 62.5 - 75 - 87.5, name: '1770', limit: 60, gmod: { TwoToSix: true } },
            { x: 2769 - 62.5 - 62.5 - 75, name: '1772', limit: 60, later:{60:-1}, gmod: { TwoToSix: true } },
            { x: 2769 - 62.5 - 62.5, name: '1774', limit: 60, gmod: { TwoToSix: true } },
            { x: 2769 - 62.5, name: '1776', limit: 60, gmod: { TwoToSix: true, Kanava: true } },
            { x: 2769, name: '1778', limit: 60, gmod: { TwoToSix: true, Kanava: true } },
            { x: 2769 + 62.5, name: '1780', limit: 60, gmod: { TwoToSix: true, Kanava: true } },
            { x: 2769 + 62.5 + 62.5, name: '1612', limit: 40, gmod: { TwoToSix: true, Approve0: true } },
            { x: 2769 + 62.5 + 62.5 + 62.5, name: '1614', limit: 0, gmod: { TwoToSix: true, Approve0: true } },
            { x: 2769 + 62.5 + 62.5 + 62.5 + 62.5, name: '1616', limit: 0, gmod: { TwoToSix: true, Approve0: true } },
        ],
        signals: [
			{ joint: '1712', name: '172М', lenses: 'YGR', gmod: {Routes: [{Lights: " "}], SignalType: 6} },
        ],
        mks: [
            
        ],
    },
    {
        name: 'ВГ',
        arsDrawBreakpoint: 1,
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
            { x: 115 - 62.5, name: '1780', limit: 0, gmod: { TwoToSix: true, Kanava: true } },
            { x: 115, name: '1612', limit: 40, gmod: { TwoToSix: true, Approve0: true } },
            { x: 115 + 62.5, name: '1614', limit: 60, gmod: { TwoToSix: true } },
            { x: 115 + 62.5 + 137.5, name: '1616', limit: 70, gmod: { TwoToSix: true } },
            { x: 115 + 62.5 + 137.5 + 137.5, name: '1618', limit: 70, gmod: { TwoToSix: true } },
            { x: 115 + 62.5 + 137.5 + 137.5 + 137.5, name: '1620', limit: 70, gmod: { TwoToSix: true } },
            { x: 115 + 62.5 + 137.5 + 137.5 + 137.5 + 137.5, name: '1622', limit: 70, gmod: { TwoToSix: true } },
            { x: 115 + 62.5 + 137.5 + 137.5 + 137.5 + 137.5 + 137.5, name: '1624', limit: 70, gmod: { TwoToSix: true } },
            { x: 1602.5 - 37.5 - 50 - 50 - 50 - 75 - 75 - 125 - 137.5, name: '1664', limit: 70, gmod: { TwoToSix: true } },
            { x: 1602.5 - 37.5 - 50 - 50 - 50 - 75 - 75 - 125, name: '1666', limit: 70, gmod: { TwoToSix: true } },
            { x: 1602.5 - 37.5 - 50 - 50 - 50 - 75 - 75, name: '1668', limit: 70, gmod: { TwoToSix: true } },
            { x: 1602.5 - 37.5 - 50 - 50 - 50 - 75, name: '1670', limit: 70, gmod: { TwoToSix: true } },
            { x: 1602.5 - 37.5 - 50 - 50 - 50, name: '1672', limit: 70, gmod: { TwoToSix: true, Routes: [{ NextSignal: "- NONE -", ARSCodes: "2" }] } },
            { x: 1602.5 - 37.5 - 50 - 50, name: '1674', limit: 70, gmod: { TwoToSix: true } },
            { x: 1602.5 - 37.5 - 50, name: '1676', limit: 60, gmod: { TwoToSix: true } },
            { x: 1590, name: '1678', limit: 60, gmod: { Kanava: true, TwoToSix: true } },
            { x: 1602.5 + 37.5, name: '1680', limit: 40, gmod: { Kanava: true, TwoToSix: true } },
            { x: 1602.5 + 37.5 + 50, name: '1512', limit: 0, gmod: { TwoToSix: true, Routes: [{ARSCodes: "0"}] } },
            { x: 1602.5 + 37.5 + 37.5 + 75, name: '1514', limit: 0 , gmod: { Routes: [{NextSignal: "TC1512"}] }},
        ],
        signals: [
			{ joint: '1612', name: '162М', lenses: 'YGR', gmod: { Routes: [{Lights: " "}]} },
			{ joint: '1512', name: '151', lenses: 'YGR', gmod: { Routes: [{Lights: " "}], SignalType: 6} },
            { joint: '1672', name: 'СП-168', lenses: 'BYGRw', 
                gmod: { 
                    Pole: 1, 
                    Routes: [
                        { Lights: "4" }, 
                        { 
                            NextSignal: "*", 
                            Lights: "4-4-1", 
                            ARSCodes: "22044667", 
                            Manual: true, 
                            RouteName: "SP2-2", 
                            Switches: "SP_SW_2+" 
                        }
                    ] 
                }
            },
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