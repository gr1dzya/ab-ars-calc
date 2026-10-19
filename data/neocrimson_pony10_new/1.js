var lines = lines || {};
lines['neocrimson_pony10_new'] = lines['neocrimson_pony10_new'] || {};
lines['neocrimson_pony10_new']['config'] = {
    wagonCount: 4,
};
lines['neocrimson_pony10_new']['1'] = [
  {
    name: 'Братеево',
    arsDrawBreakpoint: 13,
    arsAllSteps: false,
    tStay: 30,
    K: 1.5,
    interval: 40,
    modes: {
      0: 'H',
      43: '0',
      379: 'H',
      550: '0',
      977: 'T'
    },
    joints: [
      { x: -48 + 12.5 - 25, name: '3071', limit: 0 },
      { x: -48 + 12.5 + 25, name: '3073', limit: 40, gmod: { Kanava: true }, later: { 40: 3 } },
      { x: 2 + 25, name: '3079', limit: 40, gmod: { Kanava: true }, later: { 40: 2 } },
      { x: 2 + 25 + 50, name: '2911', limit: 60, later: { 40: 2, 60: 1 } },
      { x: 2 + 25 + 50 + 37.5, name: '2913', limit: 60, later: { 40: 1 }, gmod: { RouteNumber: "1" } },
      { x: 2 + 25 + 50 + 37.5 + 37.5, name: '2915', limit: 60, later: { 40: 1 } },
      { x: 2 + 25 + 50 + 37.5 + 37.5 + 87.5, name: '2917', limit: 60 },
      { x: 2 + 1075 - 37.5 - 50 - 50 - 50 - 62.5 - 75 - 100 - 137.5 - 137.5, name: '2919', limit: 80 },
      { x: 2 + 1075 - 37.5 - 50 - 50 - 50 - 62.5 - 75 - 100 - 137.5, name: '2963', limit: 80 },
      { x: 2 + 1075 - 37.5 - 50 - 50 - 50 - 62.5 - 75 - 100, name: '2965', limit: 80 },
      { x: 2 + 1075 - 37.5 - 50 - 50 - 50 - 62.5 - 87.5, name: '2967', limit: 70 },
      { x: 2 + 1075 - 37.5 - 50 - 50 - 50 - 62.5, name: '2969', limit: 60 },
      { x: 2 + 1075 - 37.5 - 50 - 50 - 62.5, name: '2971', limit: 60 },
      { x: 2 + 1075 - 37.5 - 50 - 50, name: '2973', limit: 60 },
      { x: 2 + 1075 - 37.5 - 50, name: '2975', limit: 60 },
      { x: 2 + 1075 - 37.5 - 12.5, name: '2977', limit: 60, gmod: { Left: true } },
      { x: 2 + 1075, name: '2979', limit: 60, gmod: { Left: true } },
      { x: 2 + 1075 + 37.5 + 12.5, name: '2811', limit: 40 },
      { x: 2 + 1075 + 37.5 + 50, name: '2813', limit: 0 },
      { x: 2 + 1075 + 37.5 + 50 + 25 + 12.5, name: '2815', limit: 0 },
      { x: 2 + 1075 + 37.5 + 50 + 25 + 50, name: '2817', limit: 0 },
      { x: 2 + 1075 + 37.5 + 50 + 25 + 50 + 37.5, name: '2819', limit: 0 },
      { x: 2 + 1075 + 37.5 + 50 + 25 + 50 + 37.5 + 37.5, name: '2821', limit: 0 },
      { x: 2 + 1075 + 37.5 + 50 + 25 + 50 + 37.5 + 37.5 + 37.5, name: '2823', limit: 0 },
    ],
    signals: [
      { joint: '2911', name: 'БР-2901м', lenses: 'BWZYGRwM', noRY: true, autostop: 3, guard: 60, y: '2919', g: 'NEXT_y', gmod: { SignalType: 8, LetterK: true, Pole: 1, Routes: [{ PogashenieLights: "6-6-6-6-6-1" }] } },      
      { joint: '2917', name: '2903м', lenses: 'YYGR', autostop: 3, guard: 60, service: 60, y: '2967', yg: 'NEXT_y', g: 'NEXT_yg', gmod: { SignalType: 8, LetterK: true, Pole: 1 } },      
      { joint: '2963', name: '2905', lenses: 'YYGR', autostop: 3, guard: 80, service: 25, y: '2973', yg: 'NEXT_y', g: 'NEXT_yg', shift: 16, gmod: { SignalType: 8, LetterK: true, Pole: 1, Krons: "L" } },      
      { joint: '2965', name: '2907', lenses: 'YYGR', autostop: 3, guard: 79, service: 25, y: '2975', yg: 'NEXT_y', g: 'NEXT_g', gmod: { SignalType: 8, LetterK: true, Pole: 1, Krons: "L" } },      
      { joint: '2969', name: 'ПН-2909', lenses: 'YYGRw', autostop: 1, guard: 60, service: 25, y: '2979', g: 'NEXT_g', gmod: { SignalType: 8, Street: true, Pole: 3, Krons: "L" } },      
      { joint: '2973', name: 'ПН-2911', lenses: 'BYGRw', autostop: 1, guard: 59, g: '2813', gmod: { SignalType: 8, Street: true, Pole: 3, Routes: [{ PogashenieLights: "5-5-1" }] } },      
      { joint: '2811', name: 'ПН-2801М', lenses: 'X', guard: 34, autostop: 3 },    
    ],
  },
  {
    name: 'Пионерская',
    interval: 40,
    arsDrawBreakpoint: 11,
    arsAllSteps: false,
    tStay: 30,
    K: 1.5,
    modes: {
      0: 'H',
      75: '0',
      606: 'T'
    },
    joints: [
      { x: 6.55, name: '2979', limit: 0 },
      { x: 6.55 + 37.5 + 12.5, name: '2811', limit: 60, later: { 60: 1 } },
      { x: 6.55 + 37.5 + 50, name: '2813', limit: 60, later: { 40: 2 }, gmod: { RouteNumber: "1" } },
      { x: 6.55 + 37.5 + 50 + 25 + 12.5, name: '2815', limit: 60, later: { 40: 1 } },
      { x: 6.55 + 37.5 + 50 + 25 + 50, name: '2817', limit: 60, later: { 40: 1 } },
      { x: 6.55 + 37.5 + 50 + 25 + 50 + 37.5, name: '2819', limit: 60 },
      { x: 6.55 + 37.5 + 50 + 25 + 50 + 37.5 + 37.5, name: '2821', limit: 60 },
      { x: 6.55 + 37.5 + 50 + 25 + 50 + 37.5 + 37.5 + 37.5, name: '2823', limit: 60 },
      { x: 700 - 6 - 50 - 100 - 125 - 75, name: '2825', limit: 60 },
      { x: 700 - 6 - 50 - 100 - 125, name: '35', limit: 60 },
      { x: 700 - 6 - 50 - 100, name: '33д', limit: 60 },
      { x: 700 - 6 - 50, name: '33', limit: 60, gmod: { Kanava: true } },
      { x: 700 - 6, name: '31', limit: 60, gmod: { Kanava: true } },
      { x: 700 - 6 + 50, name: '29', limit: 40 },
      { x: 700 - 6 + 50 + 75, name: '27', limit: 0 },
      { x: 700 - 6 + 50 + 75 + 125, name: '27а', limit: 0 },
    ],
    signals: [   
      { joint: '2811', name: 'ПН-35ДМ', lenses: 'BWY-YGR-M-W', guard: 34, autostop: 3, y: '2825', yg: 'NEXT_y', g: 'NEXT_yg', gmod: { SignalType: 7, Pole: 3, Routes: [{ PogashenieLights: "5-5-1" }] } },   
      { joint: '2819', name: '35',  lenses: 'YGR', autostop: 3, guard: 60, service: 25, y: '35', g: 'NEXT_y', yg: 'NEXT_y', g: 'NEXT_yg', gmod: { SignalType: 7 } },        
      { joint: '2823', name:'1033', lenses: 'YYGR', autostop: 3, guard: 60, service: 25, y: '33д',g: 'NEXT_y', yg: 'NEXT_y', g: 'NEXT_yg', gmod: { SignalType: 8, LetterK: true, Pole: 1, Krons: "L" } },        
      { joint: '2825', name: '33',  lenses: 'YYGR', autostop: 1, guard: 60, service: 25, y: '33', g: 'NEXT_y', yg: 'NEXT_y', g: 'NEXT_g',  gmod: { SignalType: 8, LetterK: true, Pole: 1, Krons: "L" } },        
      { joint:  '35',  name: '31',  lenses: 'YGR',  autostop: 1, guard: 60, service: 25, y: '31', g: 'NEXT_g', gmod: { LetterK: true, Pole: 1 } },
      { joint: '33д',  name: '29',  lenses: 'YGR',  autostop: 1, guard: 60, g: '29', left: true, gmod: { LetterK: true, Pole: 1, OW: "[-7 0 -5]" } },
      { joint: '29',  name: '27М',  lenses: 'X', guard: 35, autostop: 3 },
    ],
  },
  {
    name: 'Литиевая',
    interval: 44,
    arsAllSteps: false,
    arsDrawBreakpoint: 7,
    tStay: 30,
    K: 1,
    modes: {
      0: 'H',
      200: '0',
      1116: 'T',
    },
    joints: [
      { x: -6.25, name: '31', limit: 0, gmod: { Kanava: true } },
      { x: -6.25 + 50, name: '29', limit: 60, later: { 60: 1 } },
      { x: -6.25 + 50 + 75, name: '27', limit: 70, later: { 40: 2, 60: 1, 70: 1 } },
      { x: -6.25 + 50 + 75 + 125, name: '27а', limit: 80, later: { 40: 1 } },
      { x: 1231.25 - 62.5 - 75 - 75 - 12.5 - 150 - 150 - 262.5, name: '27б', limit: 80 },
      { x: 1231.25 - 62.5 - 75 - 75 - 12.5 - 112.5 - 150 - 125, name: '27в', limit: 80 },
      { x: 1231.25 - 62.5 - 75 - 75 - 12.5 - 112.5 - 150, name: '25д', limit: 80 },
      { x: 1231.25 - 62.5 - 75 - 75 - 12.5 - 112.5, name: '25да', limit: 80 },
      { x: 1231.25 - 62.5 - 75 - 75 - 12.5, name: '25', limit: 70 },
      { x: 1231.25 - 62.5 - 75, name: '23', limit: 60 },
      { x: 1231.25 - 62.5, name: '21', limit: 60 },
      { x: 1231.25, name: '19д', limit: 60, gmod: { Kanava: true } },
      { x: 1231.25 + 62.5, name: '19', limit: 40 },
      { x: 1231.25 + 62.5 + 75, name: '6', limit: 0 },
    ],
    signals: [
      { joint: '29',  name: '27М', lenses:  'YGR',  autostop: 3, guard: 35, service: 80, y: '27в', g: 'NEXT_y', gmod: { LetterK: true, Krons: "M", Pole: 1 } },
      { joint: '27б', name: '1025',lenses:  'YYGR', autostop: 3, guard: 80, service: 80, y: '25да', yg: 'NEXT_y', g: 'NEXT_yg', left: true, gmod: { SignalType: 8, LetterK: true, Pole: 1, OW: "[-7 0 -5]" } },
      { joint: '25д', name:  '25', lenses: 'YY-GR', autostop: 3, guard: 80, service: 35, y: '25', yg: 'NEXT_y', g: 'NEXT_yg', shift: 21, gmod: { LetterK: true, Krons: "MM" } },
      { joint: '25да',name: '23',  lenses: 'YY-GR', autostop: 3, guard: 70, service: 35, y: '23', yg: 'NEXT_y', g: 'NEXT_yg', shift: 21, gmod: { LetterK: true, Krons: "MM" } },
      { joint: '25',  name: '21',  lenses: 'YY-GR', autostop: 1, guard: 70, service: 35, y: '21', yg: 'NEXT_y', left: true, shift: 18, gmod: { LetterK: true, Pole: 1, OW: "[-6.5 0 -5]" } },
      { joint: '23',  name: '1019',lenses: 'YYGR',  autostop: 1, guard: 60, service: 35, y: '19д', yg: 'NEXT_yg', left: true, gmod: { SignalType: 8, LetterK: true, Pole: 1, OW: "[-3.5 0 -5]" } },
      { joint: '21',  name: '19',  lenses: 'YY-GR', autostop: 1, guard: 59, yg: '19', left: true,  gmod: { LetterK: true, Krons: "MM", OW: "[-6.5 0 -10]" } },
      { joint: '19',  name: 'МТ-17', lenses: 'X', guard: 35, autostop: 3 },
    ]
  },
  {
    name: 'Метростроителей',
    interval: 44,
    arsAllSteps: false,
    arsDrawBreakpoint: 1,
    tStay: 25,
    K: 1,
    modes: {
      0: 'H',
      140: '0',
      1371: 'T'
    },
    joints: [
    ],
    signals: [
    ]
  },
  {
    name: 'Славутич',
    interval: 44,
    arsAllSteps: false,
    arsDrawBreakpoint: 8,
    tStay: 25,
    K: 1,
    modes: {
      0: 'H',
      102: '0',
      562: 'H',
      662: '0',
      1874: 'T'
    },
    joints: [
    ],
    signals: [
    ]
  },
  {
    name: 'Фауна',
    interval: 44,
    arsAllSteps: false,
    tStay: 25,
    K: 1,
    arsDrawBreakpoint: 8,
    modes: {
      0: 'H',
      140: '0',
      1725: 'T'
    },
    joints: [
    ],
    signals: [
    ]
  },
  {
    name: 'Сталинская',
    interval: 44,
    arsAllSteps: true,
    tStay: 25,
    K: 1,
    modes: {
      0: 'H',
      40: '0',
      214: 'T'

    },
    joints: [

    ],
    signals: [
    ]
  },
]