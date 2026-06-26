var lines = lines || {};
lines['sokolka'] = lines['sokolka'] || {};
lines['sokolka']['1'] = [
    {
        name: 'СП',
        arsDrawBreakpoint: 6,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 44,
        modes: {
            0: 'H',
            390: '0',
            1677: 'T',
        },
        joints: [
            { x: 7 + 50, name: '1579', limit: 40, gmod: { TwoToSix: true, Kanava: true } },
            { x: 7 + 50 + 62.5, name: '1611', limit: 40, gmod: { TwoToSix: true, Approve0: true, Routes: [{NextSignal: " "}] } },
            { x: 7 + 50 + 62.5 + 50, name: '1613', limit: 70, gmod: { TwoToSix: true, Routes: [{},{ARSCodes: "0", Switches: "SP_SW_1-"},{NextSignal: "*", ARSCodes: "004", Switches: "SP_SW_3-"}] } },
            { x: 7 + 50 + 62.5 + 50 + 50, name: '1615', limit: 70, gmod: { TwoToSix: true, Routes: [{},{NextSignal: "*", ARSCodes: "0", Switches: "SP_SW_1-"},{NextSignal: "*", ARSCodes: "004", Switches: "SP_SW_3-"}] } },
            { x: 7 + 50 + 62.5 + 50 + 50 + 62.5, name: '1617', limit: 70, gmod: { TwoToSix: true, Routes: [{},{NextSignal: "*", ARSCodes: "004", Switches: "SP_SW_1-"},{NextSignal: "*", ARSCodes: "004", Switches: "SP_SW_3-"}] } },
            { x: 7 + 50 + 62.5 + 50 + 50 + 62.5 + 75, name: '1619', limit: 70, gmod: { TwoToSix: true, Routes: [{},{NextSignal: "*", ARSCodes: "004", Switches: "SP_SW_1-"},{NextSignal: "*", ARSCodes: "004", Switches: "SP_SW_3-"}] } },
            { x: 7 + 50 + 62.5 + 50 + 50 + 62.5 + 75 + 100, name: '1621', limit: 70, later: { 70: 1 }, gmod: { TwoToSix: true } },
            { x: 7 + 50 + 62.5 + 50 + 50 + 62.5 + 75 + 100 + 62.5, name: '1623', limit: 70, later: { 40: 1, 60: 1, 70: 2 }, gmod: { TwoToSix: true, RouteNumber: "1", Routes: [{},{NextSignal: "*", ARSCodes: "004", Switches: "SP_SW_3-"}] } },
            { x: 7 + 50 + 62.5 + 50 + 50 + 62.5 + 75 + 100 + 62.5 + 137.5, name: '1625', limit: 70, later: { 40: 1, 60: 1, 70: 1 }, gmod: { TwoToSix: true } },
            { x: 7 + 50 + 62.5 + 50 + 50 + 62.5 + 75 + 100 + 62.5 + 137.5 + 137.5, name: '1627', limit: 70, later: { 40: 1, 60: 1, 70: 1 }, gmod: { TwoToSix: true } },
            { x: 7 + 50 + 62.5 + 50 + 50 + 62.5 + 75 + 100 + 62.5 + 137.5 + 137.5 + 137.5, name: '1629', limit: 70, later: { 60: 1, 70: 1 }, gmod: { TwoToSix: true } },
            { x: 1709 - 50 - 37.5 - 50 - 50 - 50 - 75 - 100 - 137.5 - 137.5, name: '1659', limit: 70, later: { 40: 1, 60: 1, 70: 2 }, gmod: { TwoToSix: true } },
            { x: 1709 - 50 - 37.5 - 50 - 50 - 50 - 75 - 100 - 137.5, name: '1661', limit: 70, later: { 40: 1, 60: 1, 70: 1 }, gmod: { TwoToSix: true } },
            { x: 1709 - 50 - 37.5 - 50 - 50 - 50 - 75 - 100, name: '1663', limit: 70, later: { 70: 1 }, gmod: { TwoToSix: true } },
            { x: 1709 - 50 - 37.5 - 50 - 50 - 50 - 75, name: '1665', limit: 70, gmod: { TwoToSix: true } },
            { x: 1709 - 50 - 37.5 - 50 - 50 - 50, name: '1667', limit: 70, gmod: { TwoToSix: true } },
            { x: 1709 - 50 - 37.5 - 50 - 50, name: '1669', limit: 70, gmod: { TwoToSix: true } },
            { x: 1709 - 50 - 37.5 - 50, name: '1671', limit: 70, gmod: { TwoToSix: true } },
            { x: 1709 - 50 - 37.5, name: '1673', limit: 70, gmod: { TwoToSix: true, Kanava: true } },
            { x: 1709 - 50, name: '1675', limit: 60, gmod: { TwoToSix: true, Kanava: true } },
            { x: 1696.5, name: '1677', limit: 60, gmod: { TwoToSix: true, Kanava: true } },
            { x: 1696.5 + 50, name: '1679', limit: 60, gmod: { TwoToSix: true, Kanava: true } },
            { x: 1696.5 + 50 + 50, name: '1711', limit: 40, gmod: { TwoToSix: true, Approve0: true, Kanava: true } },
            { x:  1707  + 50 + 50 + 37.5, name: '1713', limit: 0, gmod: { TwoToSix: true } },
            { x:  1707  + 50 + 50 + 37.5 + 50, name: '1715', limit: 0, gmod: { TwoToSix: true } },
            { x:  1707  + 50 + 50 + 37.5 + 50 + 37.5, name: '1717', limit: 0, gmod: { TwoToSix: true } },
            { x:  1707  + 50 + 50 + 37.5 + 50 + 37.5 + 62.5, name: '1719', limit: 0, gmod: { TwoToSix: true } },
        ],
        signals: [
            { joint: '1611', name: 'СП-161М', lenses: 'BWYG-RwM', 
                gmod: { 
                    Routes: [
                        {Lights: "5"}, // остальное в рц
                        {Lights: "5-5-5-1", Switches: "SP_SW_1+", EnRou:true, NextSignal: "*", RouteName: "SP1-1", ARSCodes: "2224", Manual: true},
                        {Lights: "5-5-5-1", Switches: "SP_SW_1+", EnRou:true, NextSignal: "*", RouteName: "SP1-V", ARSCodes: "2224", Manual: true, PRou: "V"}
                    ] 
                } 
            },
            { joint: '1621', name: 'СП-163М', lenses: 'BWYG-RwM', 
                gmod: { 
                    Routes: [
                        {Lights: "5-1", RouteName: "SP163-1", Switches: "SP_SW_3+", EnRou:true},
                        {Lights: "5", ARSCodes: "2", Switches: "SP_SW_3-" },
                        {Lights: "5-5-1", RouteName: "SP163-3", Switches: "SP_SW_3-", NextSignal: "SPFIX1", ARSCodes: "224", Manual: true, EnRou:true}
                    ] 
                } 
            },
        ],
        switches: [
		],
        mks: [
        ],
    },
    {
        name: 'ВГ',
        arsDrawBreakpoint: 10,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 44,
        modes: {
            0: 'H',
            200: '0',
            2814: 'T',
        },
        joints: [
            { x: -10.5 + 50, name: '1679', limit: 0, point: true, gmod: { TwoToSix: true, Kanava: true } },
            { x: -10.5 + 50 + 50, name: '1711', limit: 40, point: true, gmod: { TwoToSix: true, Approve0: true, Kanava: true } },
            { x: 2 + 50 + 50 + 37.5, name: '1713', limit: 40, gmod: { TwoToSix: true, Approve0: true } },
            { x: 2 + 50 + 50 + 37.5 + 50, name: '1715', limit: 60, point: true, gmod: { TwoToSix: true } },
            { x: 2 + 50 + 50 + 37.5 + 50 + 37.5, name: '1717', limit: 60, point: true, gmod: { TwoToSix: true } },
            { x: 2 + 50 + 50 + 37.5 + 50 + 37.5 + 100, name: '1719', limit: 60, point: true, later: { 60: 1 }, gmod: { TwoToSix: true } },
            { x: 2 + 50 + 50 + 37.5 + 50 + 37.5 + 100 + 112.5, name: '1721', limit: 60, point: true, later: { 60: 1 }, gmod: { TwoToSix: true } },
            { x: 2 + 50 + 50 + 37.5 + 50 + 37.5 + 100 + 112.5 + 137.5, name: '1723', limit: 60, point: true, gmod: { TwoToSix: true } },
            { x: 2 + 50 + 50 + 37.5 + 50 + 37.5 + 100 + 112.5 + 137.5 + 137.5, name: '1725', limit: 60, point: true, later: { 60: 1, 70: 1, 80: 2 }, gmod: { TwoToSix: true } },
            { x: 2 + 50 + 50 + 37.5 + 50 + 37.5 + 100 + 112.5 + 137.5 + 137.5 + 137.5, name: '1727', limit: 80, point: true, later: { 40: 1, 60: 1, 70: 1, 80: 2 }, gmod: { TwoToSix: true } },
            { x: 2 + 50 + 50 + 37.5 + 50 + 37.5 + 100 + 112.5 + 137.5 + 137.5 + 137.5 + 137.5, name: '1729', limit: 80, point: true, later: { 40: 1, 60: 1, 70: 1, 80: 2 }, gmod: { TwoToSix: true } },
            { x: 2 + 50 + 50 + 37.5 + 50 + 37.5 + 100 + 112.5 + 137.5 + 137.5 + 137.5 + 137.5 + 137.5, name: '1731', limit: 80, point: true, later: { 40: 1, 60: 1, 70: 1, 80: 2 }, gmod: { TwoToSix: true } },
            { x: 2 + 50 + 50 + 37.5 + 50 + 37.5 + 100 + 112.5 + 137.5 + 137.5 + 137.5 + 137.5 + 137.5 + 137.5, name: '1733', limit: 80, point: true, later: { 40: 1, 60: 1, 70: 1, 80: 2 }, gmod: { TwoToSix: true } },
            { x: 2 + 50 + 50 + 37.5 + 50 + 37.5 + 100 + 112.5 + 137.5 + 137.5 + 137.5 + 137.5 + 137.5 + 137.5 + 137.5, name: '1735', limit: 80, point: true, later: { 40: 1, 60: 1, 70: 1, 80: 2 }, gmod: { TwoToSix: true } },
            //{ x: 3000 - 50 - 37.5 - 50 - 50 - 37.5 - 62.5 - 125 - 125 - 137.5 - 137.5 - 137.5 - 137.5 - 137.5 - 137.5 - 137.5, name: '1747', limit: 80, gmod: { TwoToSix: true } },
            //{ x: 3000 - 50 - 37.5 - 50 - 50 - 37.5 - 62.5 - 125 - 125 - 137.5 - 137.5 - 137.5 - 137.5 - 137.5 - 137.5, name: '1749', limit: 80, gmod: { TwoToSix: true } },
            //{ x: 3000 - 50 - 37.5 - 50 - 50 - 37.5 - 62.5 - 125 - 125 - 137.5 - 137.5 - 137.5 - 137.5 - 137.5, name: '1751', limit: 80, gmod: { TwoToSix: true } },
            //{ x: 3000 - 50 - 37.5 - 50 - 50 - 37.5 - 62.5 - 125 - 125 - 137.5 - 137.5 - 137.5 - 137.5, name: '1753', limit: 80, gmod: { TwoToSix: true } },
            //{ x: 3000 - 50 - 37.5 - 50 - 50 - 37.5 - 62.5 - 125 - 125 - 137.5 - 137.5 - 137.5, name: '1755', limit: 80, gmod: { TwoToSix: true } },
            //{ x: 3000 - 50 - 37.5 - 50 - 50 - 37.5 - 62.5 - 125 - 125 - 137.5 - 137.5, name: '1757', limit: 80, point: true, later: { 40: 1, 60: 1, 70: 1 }, gmod: { TwoToSix: true } },
            //{ x: 3000 - 50 - 37.5 - 50 - 50 - 37.5 - 62.5 - 125 - 125 - 137.5, name: '1759', limit: 80, point: true, later: { 40: 1, 60: 2, 70: 2, 80: 3 }, gmod: { TwoToSix: true } },
            //{ x: 3000 - 50 - 37.5 - 50 - 50 - 37.5 - 62.5 - 125 - 125, name: '1761', limit: 80, point: true, later: { 40: 2, 60: 1, 70: 1, 80: -2 }, gmod: { TwoToSix: true } },
            //{ x: 3000 - 50 - 37.5 - 50 - 50 - 37.5 - 62.5 - 125, name: '1763', limit: 80, point: true, later: { 40: 1 }, gmod: { TwoToSix: true } },
            //{ x: 3000 - 50 - 37.5 - 50 - 50 - 37.5 - 62.5, name: '1765', limit: 80, gmod: { TwoToSix: true } },
            //{ x: 3000 - 50 - 37.5 - 50 - 50 - 37.5, name: '1767', limit: 80, gmod: { TwoToSix: true } },
            //{ x: 3000 - 50 - 37.5 - 50 - 50, name: '1769', limit: 70, gmod: { TwoToSix: true } },
            //{ x: 3000 - 50 - 37.5 - 50, name: '1771', limit: 70, gmod: { TwoToSix: true } },
            //{ x: 3000 - 50 - 37.5, name: '1773', limit: 70, later: { 60: -1 }, gmod: { TwoToSix: true } },
            //{ x: 3000 - 50, name: '1775', limit: 60, gmod: { TwoToSix: true, Kanava: true } },
            { x: 2994 - 62.5 - 62.5 - 75 - 75 - 100 - 125 - 137.5 - 137.5 - 137.5 - 137.5 - 137.5 - 137.5 - 137.5, name: '1751', limit: 80, point: true, later: { 40: 1, 60: 1, 70: 1, 80: 2 }, gmod: { TwoToSix: true } },
            { x: 2994 - 62.5 - 62.5 - 75 - 75 - 100 - 125 - 137.5 - 137.5 - 137.5 - 137.5 - 137.5 - 137.5, name: '1753', limit: 80, point: true, later: { 40: 1, 70: 1, 80: 1 }, gmod: { TwoToSix: true } },
            { x: 2994 - 62.5 - 62.5 - 75 - 75 - 100 - 125 - 137.5 - 137.5 - 137.5 - 137.5 - 137.5, name: '1755', limit: 80, point: true, later: { 60: 1, 70: 1, 80: 2 }, gmod: { TwoToSix: true } },
            { x: 2994 - 62.5 - 62.5 - 75 - 75 - 100 - 125 - 137.5 - 137.5 - 137.5 - 137.5, name: '1757', limit: 80, point: true, later: { 40: 1, 60: 1, 70: 1, 80: 2 }, gmod: { TwoToSix: true } },
            { x: 2994 - 62.5 - 62.5 - 75 - 75 - 100 - 125 - 137.5 - 137.5 - 137.5, name: '1759', limit: 80, point: true, later: { 40: 1, 60: 1, 70: 1, 80: 1 }, gmod: { TwoToSix: true } },
            { x: 2994 - 62.5 - 62.5 - 75 - 75 - 100 - 125 - 137.5 - 137.5, name: '1761', limit: 80, point: true, later: { 70: 1, 80: 1 }, gmod: { TwoToSix: true } },
            { x: 2994 - 62.5 - 62.5 - 75 - 75 - 100 - 125 - 137.5, name: '1763', limit: 80, point: true, later: { 40: 1, 60: 1, 70: 1, 80: 2 }, gmod: { TwoToSix: true } },
            { x: 2994 - 62.5 - 62.5 - 75 - 75 - 100 - 125, name: '1765', limit: 80, point: true, later: { 70: 1, 80: -1 }, gmod: { TwoToSix: true } },
            { x: 2994 - 62.5 - 62.5 - 75 - 75 - 100, name: '1767', limit: 80, point: true, later: { 80: 1 }, gmod: { TwoToSix: true } },
            { x: 2994 - 62.5 - 62.5 - 75 - 75, name: '1769', limit: 80, gmod: { TwoToSix: true } },
            { x: 2994 - 62.5 - 62.5 - 75, name: '1771', limit: 80, point: true, gmod: { TwoToSix: true } },
            { x: 2994 - 62.5 - 62.5, name: '1773', limit: 70, gmod: { TwoToSix: true } },
            { x: 2994 - 62.5, name: '1775', limit: 60, point: true, gmod: { TwoToSix: true, Kanava: true } },
            { x: 2994, name: '1777', limit: 60, point: true, gmod: { TwoToSix: true, Kanava: true } },
            { x: 2994 + 37.5, name: '1779', limit: 60, point: true, gmod: { TwoToSix: true, Kanava: true } },
            { x: 2994 + 37.5 + 50, name: '1811', limit: 40, gmod: { TwoToSix: true, Approve0: true } },
            { x: 2994 + 37.5 + 50 + 50, name: '1813', limit: 0, point: true, gmod: { TwoToSix: true } },
            { x: 2994 + 37.5 + 50 + 50 + 75, name: '1815', limit: 0, point: true, gmod: { TwoToSix: true } },
            { x: 2994 + 37.5 + 50 + 50 + 75 + 50, name: '1817', limit: 0, point: true, gmod: { TwoToSix: true } },
        ],
        signals: [ 
			{ joint: '1713', name: '171М', lenses: 'YGR', gmod: { Routes: [{Lights: " "}]} },
            { joint: '1769', name: 'УН-177', lenses: 'BYGRw', gmod: { Routes: [{Lights: "4-1"}], Pole: 1 } },
            { joint: '1811', name: 'УН-181МГ', lenses: 'BWY-GRW-M' },
            { joint: '1769', name: 'ОП', lenses: 'R', back: true, row:3.5,
                gmod: { 
                    name: 'УНОП', 
                    Letter: "OP",
                    DTM: true, 
                    Pole: 1 
                } 
            },
        ],
        mks: [
        ],
    },
    {
        name: 'УН',
        arsDrawBreakpoint: 1,
        arsAllSteps: false,
        tStay: 30,
        K: 1,
        interval: 44,
        modes: {
            0: 'H',
            300: '0',
            1800: 'H',
            2100: '0',
            2589: 'T',
        },
        joints: [
            { x: -3 + 37.5, name: '1779', limit: 0, point: true, gmod: { TwoToSix: true, Kanava: true } },
            { x: -3 + 37.5 + 50, name: '1811', limit: 40, gmod: { TwoToSix: true, Approve0: true } },
            { x: -3 + 37.5 + 50 + 50, name: '1813', limit: 70, point: true, gmod: { TwoToSix: true, RouteNumber: "1", Routes: [{},{ARSCodes: "4", Switches: "UN_SW_1-"}] } },
            { x: -3 + 37.5 + 50 + 50 + 75, name: '1815', limit: 70, point: true, later: { 70: 1 }, gmod: { TwoToSix: true } },
            { x: -3 + 37.5 + 50 + 50 + 75 + 50, name: '1817', limit: 70, point: true, later: { 70: 1 }, gmod: { TwoToSix: true } },
            { x: -3 + 37.5 + 50 + 50 + 75 + 50 + 87.5, name: '1819', limit: 70, point: true, later: { 60: 1, 70: 1 }, gmod: { TwoToSix: true } },
            { x: -3 + 37.5 + 50 + 50 + 75 + 50 + 87.5 + 100, name: '1821', limit: 70, point: true, later: { 60: 1, 70: 1 }, gmod: { TwoToSix: true } },
            { x: -3 + 37.5 + 50 + 50 + 75 + 50 + 87.5 + 100 + 137.5, name: '1823', limit: 80, point: true, later: { 60: 1, 70: 1, 80: 2 }, gmod: { TwoToSix: true } },
            { x: -3 + 37.5 + 50 + 50 + 75 + 50 + 87.5 + 100 + 137.5 + 137.5, name: '1825', limit: 80, point: true, later: { 80: 1 }, gmod: { TwoToSix: true } },
            { x: -3 + 37.5 + 50 + 50 + 75 + 50 + 87.5 + 100 + 137.5 + 137.5 + 137.5, name: '1827', limit: 80, point: true, later: { 80: 1 }, gmod: { TwoToSix: true } },
            { x: -3 + 37.5 + 50 + 50 + 75 + 50 + 87.5 + 100 + 137.5 + 137.5 + 137.5 + 137.5, name: '1829', limit: 80, point: true, later: { 80: 1 }, gmod: { TwoToSix: true } },
            { x: -3 + 37.5 + 50 + 50 + 75 + 50 + 87.5 + 100 + 137.5 + 137.5 + 137.5 + 137.5 + 137.5, name: '1831', limit: 80, point: true, later: { 80: 1 }, gmod: { TwoToSix: true } },
            { x: -3 + 37.5 + 50 + 50 + 75 + 50 + 87.5 + 100 + 137.5 + 137.5 + 137.5 + 137.5 + 137.5 + 137.5, name: '1833', limit: 80, point: true, later: { 80: 1 }, gmod: { TwoToSix: true } },
            { x: 2653 -6 - 37.5 - 50 - 50 - 50 - 37.5 - 50 - 62.5 - 87.5 - 137.5 - 137.5 - 137.5 - 137.5 - 137.5 - 137.5, name: '1849', limit: 80, point: true, later: { 80: 1 }, gmod: { TwoToSix: true } },
            { x: 2653 -6 - 37.5 - 50 - 50 - 50 - 37.5 - 50 - 62.5 - 87.5 - 137.5 - 137.5 - 137.5 - 137.5 - 137.5, name: '1851', limit: 80, point: true, later: { 70: 1, 80: 1 }, gmod: { TwoToSix: true } },
            { x: 2653 -6 - 37.5 - 50 - 50 - 50 - 37.5 - 50 - 62.5 - 87.5 - 137.5 - 137.5 - 137.5 - 137.5, name: '1853', limit: 80, point: true, later: { 70: 1, 80: 1 }, gmod: { TwoToSix: true } },
            { x: 2653 -6 - 37.5 - 50 - 50 - 50 - 37.5 - 50 - 62.5 - 87.5 - 137.5 - 137.5 - 137.5, name: '1855', limit: 80, point: true, later: { 70: 1 }, gmod: { TwoToSix: true } },
            { x: 2653 -6 - 37.5 - 50 - 50 - 50 - 37.5 - 50 - 62.5 - 87.5 - 137.5 - 137.5, name: '1857', limit: 80, point: true, gmod: { TwoToSix: true } },
            { x: 2653 -6 - 37.5 - 50 - 50 - 50 - 37.5 - 50 - 62.5 - 87.5 - 137.5, name: '1859', limit: 80, point: true, later: { 40: 1, 60: 1, 70: 2, 80: 1 }, gmod: { TwoToSix: true } },
            { x: 2653 -6 - 37.5 - 50 - 50 - 50 - 37.5 - 50 - 62.5 - 87.5, name: '1861', limit: 80, point: true, gmod: { TwoToSix: true } },
            { x: 2653 -6 - 37.5 - 50 - 50 - 50 - 37.5 - 50 - 62.5, name: '1863', limit: 80, point: true, gmod: { TwoToSix: true } },
            { x: 2653 -6 - 37.5 - 50 - 50 - 50 - 37.5 - 50, name: '1865', limit: 70, point: true, gmod: { TwoToSix: true } },
            { x: 2653 -6 - 37.5 - 50 - 50 - 50 - 37.5, name: '1867', limit: 60, point: true, gmod: { TwoToSix: true } },
            { x: 2653 -6 - 37.5 - 50 - 50 - 50, name: '1869', limit: 60, point: true, gmod: { TwoToSix: true } },
            { x: 2653 -6 - 37.5 - 50 - 50, name: '1871', limit: 60, point: true, gmod: { TwoToSix: true } },
            { x: 2653 -6 - 37.5 - 50, name: '1873', limit: 60, gmod: { TwoToSix: true } },
            { x: 2653 -6 - 50, name: '1875', limit: 60, point: true, gmod: { TwoToSix: true, Kanava: true } },
            { x: 2653 -6, name: '1877', limit: 60, point: true, gmod: { TwoToSix: true, Kanava: true } },
            { x: 2653 -6 + 50, name: '1879', limit: 60, point: true, gmod: { TwoToSix: true, Kanava: true } },
            { x: 2653 -6 + 50 + 37.5, name: '1911', limit: 40, gmod: { TwoToSix: true, Approve0: true } },
            { x: 2653 -6 + 50 + 37.5 + 50, name: '1913', limit: 0, point: true, gmod: { TwoToSix: true } },
            { x: 2653 -6 + 50 + 37.5 + 50 + 50, name: '1915', limit: 0, point: true, gmod: { TwoToSix: true } },
            { x: 2653 -6 + 50 + 37.5 + 50 + 50 + 50, name: '1917', limit: 0, point: true, gmod: { TwoToSix: true } },
            { x: 2653 -6 + 50 + 37.5 + 50 + 50 + 50 + 50, name: '1919', limit: 0, point: true, gmod: { TwoToSix: true } },
        ],
        signals: [
            { joint: '1811', name: 'УН-181МГ', lenses: 'BWY-GRW-M',
                gmod: { 
                    Krons: "SRLN", 
                    Types: "8666", 
                    ColorLens: true, 
                    LensesStr: "BWY-K-GRW-M",
                    Routes: [
                        {
                            RouteName: "UN1-1",
                            Lights: "5-53-53-1",
                            Switches: "UN_SW_1+",
                            EnRou: true
                        },
                        { 
                            ARSCodes: "2",
                            Lights: "5",
                            Switches: "UN_SW_1-"
                        },
                        {
                            RouteName: "UN1-3",
                            Lights: "5-5-5-5-1",
                            ARSCodes: "22224",
                            Switches: "UN_SW_1-,UN_SW_3+,UN_SW_5+",
                            NextSignal: "UNFIX9",
                            EnRou: true,
                            Manual: true
                        },
                        {
                            RouteName: "UN1-4",
                            Lights: "5-5-5-5-5-1",
                            ARSCodes: "222224",
                            Switches: "UN_SW_1-,UN_SW_3-,UN_SW_6-",
                            NextSignal: "UNFIX9",
                            EnRou: true,
                            Manual: true
                        },
                        {
                            RouteName: "UN1P",
                            Lights: "5-5-5-5-53",
                            ARSCodes: "22224",
                            Switches: "UN_SW_1+",
                            NextSignal: "FIX",
                            Manual: true
                        }
                    ]
                }
            },
        ],
        mks: [
        ],
    },
    {
        name: 'ПВ',
        arsDrawBreakpoint: 1,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 44,
        modes: {
            0: 'H',
            400: '0',
            1251: 'T',
        },
        joints: [
            { x: 12.5 + 50, name: '1879', limit: 0, point: true, gmod: { TwoToSix: true, Kanava: true } },
            { x: 12.5 + 50 + 37.5, name: '1911', limit: 40, gmod: { TwoToSix: true, Approve0: true } },
            { x: 12.5 + 50 + 37.5 + 50, name: '1913', limit: 70, point: true, gmod: { TwoToSix: true } },
            { x: 12.5 + 50 + 37.5 + 50 + 50, name: '1915', limit: 70, point: true, later: { 70: 1 }, gmod: { TwoToSix: true } },
            { x: 12.5 + 50 + 37.5 + 50 + 50 + 50, name: '1917', limit: 70, point: true, later: { 40: 1, 60: 1, 70: 2 }, gmod: { TwoToSix: true } },
            { x: 12.5 + 50 + 37.5 + 50 + 50 + 50 + 137.5, name: '1919', limit: 70, point: true, later: { 40: 1, 60: 1, 70: 2 }, gmod: { TwoToSix: true } },
            { x: 12.5 + 50 + 37.5 + 50 + 50 + 50 + 137.5 + 137.5, name: '1921', limit: 70, point: true, later: { 40: 1, 60: 1, 70: 1 }, gmod: { TwoToSix: true } },
            { x: 12.5 + 50 + 37.5 + 50 + 50 + 50 + 137.5 + 137.5 + 137.5, name: '1923', limit: 70, point: true, later: { 70: -1 }, gmod: { TwoToSix: true } },
            { x: 12.5 + 50 + 37.5 + 50 + 50 + 50 + 137.5 + 137.5 + 137.5 + 137.5, name: '1925', limit: 70, point: true, gmod: { TwoToSix: true } },
            { x: 1400 - 50 - 37.5 - 62.5 - 75 - 75 - 75 - 100, name: '1963', limit: 70, point: true, gmod: { TwoToSix: true } },
            { x: 1400 - 50 - 37.5 - 62.5 - 75 - 75 - 75, name: '1965', limit: 70, point: true, gmod: { TwoToSix: true } },
            { x: 1400 - 50 - 37.5 - 62.5 - 75 - 75, name: '1967', limit: 70, point: true, later: { 40: 1, 70: -1 }, gmod: { TwoToSix: true } },
            { x: 1400 - 50 - 37.5 - 62.5 - 75, name: '1969', limit: 70, point: true, later: { 70: -1 }, gmod: { TwoToSix: true } },
            { x: 1400 - 50 - 37.5 - 62.5, name: '1971', limit: 70, point: true, gmod: { TwoToSix: true } },
            { x: 1400 - 50 - 37.5, name: '1973', limit: 70, point: true, later: { 70: -1 }, gmod: { TwoToSix: true } },
            { x: 1400 - 50, name: '1975', limit: 60, gmod: { TwoToSix: true, Kanava: true } },
            { x: 1400, name: '1977', limit: 60, point: true, later: { 60: -1 }, gmod: { TwoToSix: true, Kanava: true } },
            { x: 1400 + 50, name: '1979', limit: 60, point: true, gmod: { TwoToSix: true, Kanava: true } },
            { x: 1400 + 50 + 37.5, name: '2011', limit: 40, later: { 40: -1 }, gmod: { TwoToSix: true, Approve0: true, Kanava: true } },
            { x: 1400 + 50 + 37.5 + 50, name: '2013', limit: 40, point: true, gmod: { TwoToSix: true, Routes: [{ARSCodes: "0004" }] } },
            { x: 1400 + 50 + 37.5 + 50 + 50, name: '2015', limit: 40, gmod: { TwoToSix: true, Routes: [{ARSCodes: "2", NextSignal: " "}] } },
        ],
        signals: [
			{ joint: '1911', name: '191', lenses: 'YGR', gmod: { OW: "[5 0 0]", Krons: "L", SignalType: 6, Routes: [{Lights: " "}], FKanava: true } },
			{ joint: '2011', name: '201',  lenses: 'YGR', gmod: { OW: "[4 0 0]", Krons: "L", SignalType: 6, Routes: [{Lights: " "}] } },
            { joint: '2015', name: 'УЗ-207', lenses: 'BWRw', 
                gmod: { 
                    OW: "[1 0 -15]", 
                    Krons: "L", 
                    Routes: [ 
                        {}, 
                        { 
                            RouteName: "UZ1-1", 
                            Lights: "3-3-1", 
                            Manual: true, 
                            ARSCodes: "224", 
                            NextSignal: "*", 
                            Switches: "UZ_SW_3+" 
                        }
                    ] 
                } 
            },
        ],
        mks: [
        ],
    },
    {
        name: 'ЮЗ',
        arsDrawBreakpoint: 6,
        tStay: 25,
        K: 1,
        interval: 44,
        modes: {
            0: 'H',
            45: '0',
        },
        joints: [
        ],
        signals: [
        ],
        mks: [
        ],
    },
];