n.d(t, { Z: () => r });
var a = n(799761);
let r = {
    ordinalNumber: function (e, t) {
        return Number(e) + '.';
    },
    era: (0, a.Z)({
        values: {
            narrow: ['f.Kr.', 'e.Kr.'],
            abbreviated: ['f.Kr.', 'e.Kr.'],
            wide: ['før Kristus', 'etter Kristus']
        },
        defaultWidth: 'wide'
    }),
    quarter: (0, a.Z)({
        values: {
            narrow: ['1', '2', '3', '4'],
            abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
            wide: ['1. kvartal', '2. kvartal', '3. kvartal', '4. kvartal']
        },
        defaultWidth: 'wide',
        argumentCallback: function (e) {
            return e - 1;
        }
    }),
    month: (0, a.Z)({
        values: {
            narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            abbreviated: ['jan.', 'feb.', 'mars', 'apr.', 'mai', 'juni', 'juli', 'aug.', 'sep.', 'okt.', 'nov.', 'des.'],
            wide: ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember']
        },
        defaultWidth: 'wide'
    }),
    day: (0, a.Z)({
        values: {
            narrow: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
            short: ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø'],
            abbreviated: ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør'],
            wide: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag']
        },
        defaultWidth: 'wide'
    }),
    dayPeriod: (0, a.Z)({
        values: {
            narrow: {
                am: 'a',
                pm: 'p',
                midnight: 'midnatt',
                noon: 'middag',
                morning: 'på morg.',
                afternoon: 'på etterm.',
                evening: 'på kvelden',
                night: 'på natten'
            },
            abbreviated: {
                am: 'a.m.',
                pm: 'p.m.',
                midnight: 'midnatt',
                noon: 'middag',
                morning: 'på morg.',
                afternoon: 'på etterm.',
                evening: 'på kvelden',
                night: 'på natten'
            },
            wide: {
                am: 'a.m.',
                pm: 'p.m.',
                midnight: 'midnatt',
                noon: 'middag',
                morning: 'på morgenen',
                afternoon: 'på ettermiddagen',
                evening: 'på kvelden',
                night: 'på natten'
            }
        },
        defaultWidth: 'wide'
    })
};
