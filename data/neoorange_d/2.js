var lines = lines || {};
lines['neoorange_d'] = lines['neoorange_d'] || {};
lines['neoorange_d']['2'] = [
    {
        name: 'Икарусь',
        arsDrawBreakpoint: 7,
        arsAllSteps: false,
        tStay: 25,
        K: 1.5,
        interval: 40,
        modes: {
            0: 'H',
            140: '0',
            842: 'T'
        },
        joints: [
            { x: 60, name: '415', limit: 60 },
            { x: 60 + 75, name: '413', limit: 70 },    
            { x: 922.5 - 50 - 62.5 - 62.5 - 62.5 - 62.5 - 100 - 100 - 100, name: '413а', limit: 80 },    
            { x: 922.5 - 50 - 62.5 - 62.5 - 62.5 - 62.5 - 100 - 100, name: '413б', limit: 80 },    
            { x: 922.5 - 50 - 62.5 - 62.5 - 62.5 - 62.5 - 100, name: '413в', limit: 80 },    
            { x: 922.5 - 50 - 62.5 - 62.5 - 62.5 - 62.5, name: '413г', limit: 80 },    
            { x: 922.5 - 50 - 62.5 - 62.5 - 62.5, name: '413д', limit: 80 },    
            { x: 922.5 - 50 - 62.5 - 62.5, name: '411', limit: 80 },    
            { x: 922.5 - 50 - 62.5, name: '409', limit: 70 },    
            { x: 922.5 - 50, name: '407', limit: 60 },    
            { x: 922.5 + 12.5, name: '405', limit: 60 },    
            { x: 922.5 + 12.5 + 62.5, name: '403', limit: 70 },    
            { x: 922.5 + 12.5 + 62.5 + 75, name: '401', limit: 80 },    
        ],
        signals: [
            { joint: '415', name: '413M', lenses: 'RYY-GR', autostop: 3, guard: 35, y: '413д', g: 'NEXT_y' },
            { joint: '413в', name: '411', lenses: 'YY-GR', autostop: 3, guard: 60, y: '411', yg: 'NEXT_y', g: 'NEXT_yg', shift: 25 },
            { joint: '413г', name: '409', lenses: 'YY-GR', autostop: 3, guard: 60, y: '409', yg: 'NEXT_y', g: 'NEXT_yg', shift: 6 },
            { joint: '413д', name: '407', lenses: 'YY-GR', autostop: 1, guard: 60, y: '407', yg: 'NEXT_y', g: 'NEXT_g' },
            { joint: '411', name: '405', lenses: 'YY-GR', autostop: 1, guard: 60, y: '405', g: 'NEXT_yg' },
            { joint: '409', name: '403', lenses: 'YY-GR', autostop: 1, guard: 60, yg: '403' },
            { joint: '403', name: '401', lenses: 'ч', autostop: 1, guard: 35 },
            //{ joint: '399', name: '401', lenses: 'YY-GR', autostop: 3, guard: 60, y: '2921', g: 'NEXT_y' },
     
        ],
    },
    {
        name: 'СМРК',
        arsDrawBreakpoint: 6,
        arsAllSteps: false,
        tStay: 25,
        K: 1.5,
        interval: 40,
        modes: {
            0: 'H',
            120: '0',
            673: 'T'
        },
        joints: [
            { x: 60, name: '136', limit: 0 },
            { x: 60 + 75, name: '134', limit: 0 },
            { x: 60 + 75 + 262.5, name: '134а', limit: 0 },
            { x: 60 + 75 + 300 + 25, name: '134б', limit: 0 },
            { x: 60 + 75 + 300 + 25 + 62.5, name: '134в', limit: 0 },
            { x: 60 + 75 + 300 + 25 + 62.5 + 62.5, name: '134г', limit: 0 },
            { x: 60 + 75 + 300 + 25 + 62.5 + 62.5 + 50, name: '132', limit: 0 },
            { x: 60 + 75 + 300 + 25 + 62.5 + 62.5 + 50 + 62.5, name: '130', limit: 0 },
            { x: 60 + 75 + 300 + 25 + 62.5 + 62.5 + 50 + 62.5 + 62.5, name: '128', limit: 0 },
            { x: 60 + 75 + 300 + 25 + 62.5 + 62.5 + 50 + 62.5 + 62.5 + 62.5, name: '126', limit: 0 },
            { x: 60 + 75 + 300 + 25 + 62.5 + 62.5 + 50 + 62.5 + 62.5 + 62.5 + 62.5, name: '124', limit: 0 },
            { x: 60 + 75 + 300 + 25 + 62.5 + 62.5 + 50 + 62.5 + 62.5 + 62.5 + 62.5 + 75, name: '122', limit: 0 },
        ],
        signals: [
            { joint: '136', name: '134', lenses: 'GR', autostop: 3, guard: 35, g: '134г' },
            { joint: '134а', name: '132', lenses: 'YGR', autostop: 3, guard: 60, y: '132', yg: 'NEXT_y', g: 'NEXT_yg', shift: 5 },
            { joint: '134б', name: 'A130', lenses: 'YRGw', autostop: 3, guard: 60, y: '130', yg: 'NEXT_y', g: 'NEXT_yg', shift: 5 },
            { joint: '134в', name: 'А128', lenses: 'YRGw', autostop: 1, guard: 60, y: '128', yg: 'NEXT_y', g: 'NEXT_g' },
            { joint: '134г', name: 'А126', lenses: 'YGRw', autostop: 1, guard: 60, y: '126', g: 'NEXT_g' },
            { joint: '132', name: 'А124', lenses: 'GRw', autostop: 1, guard: 60, g: '124' },
            //{ joint: '130', name: '124', lenses: 'YGR', autostop: 1, guard: 60, g: '124' },
            //{ joint: '128', name: '122', lenses: 'YGR', autostop: 1, guard: 60, g: '122' },
            { joint: '124', name: 'А122', lenses: 'YW-YR-w', autostop: 1, guard: 35 },
        ],
        //mks: [
        //    { x: 1706.6 - 42, name: '24МК' },
        //],
    },
    {
        name: 'Антиколлаборанистическая',
        arsDrawBreakpoint: 7,
        arsAllSteps: false,
        tStay: 25,
        K: 1.5,
        interval: 40,
        modes: {
            0: 'H',
            40: '0',
            150: 'H',
            230: '0',
            835: 'T',
        },
        joints: [
            { x: 62, name: '124', limit: 0 },
            { x: 62 + 50, name: '124а', limit: 0 },
            { x: 62 + 50 + 37.5, name: '122', limit: 0 },
            { x: 62 + 50 + 25 + 100, name: '122а', limit: 0 },
            { x: 887 - 62.5 - 62.5 - 62.5 - 75 - 62.5 - 62.5, name: '120', limit: 0 },
            { x: 887 - 62.5 - 62.5 - 62.5 - 75 - 62.5, name: '120а', limit: 0 },
            { x: 887 - 62.5 - 62.5 - 62.5 - 75, name: '120б', limit: 0 },
            { x: 887 - 62.5 - 62.5 - 62.5, name: '118', limit: 0 },
            { x: 887 - 62.5 - 62.5, name: '116', limit: 0 },
            { x: 887 - 62.5, name: '114', limit: 0 },
            { x: 887, name: '112', limit: 0 },
            { x: 887 + 62.5, name: '110', limit: 0 },
            { x: 887 + 62.5 + 87.5, name: '108', limit: 0 },
        ],
        signals: [
            { joint: '124', name: 'А122', lenses: 'YW-YR-w', autostop: 3, guard: 35, y: '122а' },
            { joint: '122а', name: '120', lenses: 'YGR', autostop: 3, guard: 60, y: '120б', g: 'NEXT_y' },
            { joint: '120', name: '118', lenses: 'YRG', autostop: 3, guard: 60, y: '118', yg: 'NEXT_y', g: 'NEXT_yg' },
            { joint: '120а', name: '116', lenses: 'YRG', autostop: 3, guard: 60, y: '116', yg: 'NEXT_y', g: 'NEXT_yg' },
            { joint: '120б', name: '114', lenses: 'YRG', autostop: 1, guard: 60, y: '114', yg: 'NEXT_y', g: 'NEXT_g' },
            { joint: '118', name: '112', lenses: 'YGR', autostop: 1, guard: 60, y: '112', g: 'NEXT_g', shift: 17 },
            { joint: '116', name: '110', lenses: 'GR', autostop: 1, guard: 60, g: '110', shift: 3 },
        ],
        mks: [
            
        ],
    },
    {
        name: 'Индустриальная',
        arsDrawBreakpoint: 6,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 40,
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
           
        ],
    },
    {
        name: 'Площадь Восстания',
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
        ],
    },
    {
        name: 'Куровская',
        arsDrawBreakpoint: 7,
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
        ],
        signals: [
        ],
        mks: [
        ],
    },
    {
        name: 'Анал',
        arsDrawBreakpoint: 7,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 44,
        modes: {
            0: 'H',
            200: '0',
            950: 'P300',
            1385: '0',
            1508: 'T',
        },
        joints: [
            { x: 62, name: '124', limit: 0 },
            { x: 62 + 50, name: '126', limit: 0 },
            { x: 62 + 50 + 537, name: '128', limit: 0 },
            { x: 62 + 50 + 537 + 477, name: '130', limit: 0 },
            { x: 62 + 50 + 537 + 477 + 180, name: '132', limit: 0 },
        ],
        signals: [
            { joint: '124', name: '122', lenses: 'YGR', autostop: 3, guard: 35, g: '128' },
            { joint: '128', name: '122', lenses: 'YGR', autostop: 3, guard: 35, g: '130' },
        ],
        mks: [
        ],
    },
    {
        name: 'Парк',
        arsDrawBreakpoint: 9,
        arsAllSteps: false,
        tStay: 25,
        K: 1.5,
        interval: 44,
        modes: {
            0: 'H',
            100: '0',
            500: 'H',
            800: '0',
            2136: 'T',
        },
        joints: [
            { x: 62, name: '13', limit: 0 },
            { x: 62 + 75, name: '13', limit: 0 },
        ],
        signals: [
        ],
        mks: [
        ],
    },
    {
        name: 'Жосефскайп',
        arsDrawBreakpoint: 7,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 44,
        modes: {
            0: 'H',
            350: '0',
            700: 'H',
            950: '0',
            1300: 'H',
            1400: '0',
            1766: 'T',
        },
        joints: [
        ],
        signals: [
        ],
        mks: [
        ],
    },
];