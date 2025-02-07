n.d(e, {
    Df: () => o,
    FO: () => s,
    s0: () => i,
    wS: () => r
});
var a = n(231338),
    l = n(388032);
let i = 128,
    s = Object.freeze({
        MINUTES_30: 1800000,
        HOURS_1: 3600000,
        HOURS_4: 14400000,
        TODAY: 'TODAY',
        DONT_CLEAR: 'DONT_CLEAR'
    }),
    o = [
        {
            value: a.Sk.ONLINE,
            label: () => l.intl.string(l.t.WbGtnJ)
        },
        {
            value: a.Sk.IDLE,
            label: () => l.intl.string(l.t.qWbtVV)
        },
        {
            value: a.Sk.DND,
            label: () => l.intl.string(l.t.jaNpQE)
        },
        {
            value: a.Sk.INVISIBLE,
            label: () => l.intl.string(l.t.bg24HB)
        }
    ],
    r = [
        {
            value: s.TODAY,
            label: () => l.intl.string(l.t.GQmLra)
        },
        {
            value: s.HOURS_4,
            label: () => l.intl.formatToPlainString(l.t.Rea2gY, { hours: 4 })
        },
        {
            value: s.HOURS_1,
            label: () => l.intl.formatToPlainString(l.t.Rea2gY, { hours: 1 })
        },
        {
            value: s.MINUTES_30,
            label: () => l.intl.formatToPlainString(l.t.TS3eJS, { minutes: 30 })
        },
        {
            value: s.DONT_CLEAR,
            label: () => l.intl.string(l.t.bRn8cn)
        }
    ];
s.TODAY, s.HOURS_4, s.HOURS_1, s.MINUTES_30, s.DONT_CLEAR, () => l.intl.string(l.t.bRn8cn);
