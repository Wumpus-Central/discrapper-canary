n.d(t, {
    Df: () => o,
    FO: () => i,
    Q9: () => u,
    s0: () => l,
    wS: () => s
});
var r = n(231338),
    a = n(388032);
let l = 128,
    i = Object.freeze({
        MINUTES_30: 1800000,
        HOURS_1: 3600000,
        HOURS_4: 14400000,
        TODAY: 'TODAY',
        DONT_CLEAR: 'DONT_CLEAR'
    }),
    o = [
        {
            value: r.Sk.ONLINE,
            label: () => a.NW.string(a.t.WbGtnJ)
        },
        {
            value: r.Sk.IDLE,
            label: () => a.NW.string(a.t.qWbtVV)
        },
        {
            value: r.Sk.DND,
            label: () => a.NW.string(a.t.jaNpQE)
        },
        {
            value: r.Sk.INVISIBLE,
            label: () => a.NW.string(a.t.bg24HB)
        }
    ],
    s = [
        {
            value: i.TODAY,
            label: () => a.NW.string(a.t.GQmLra)
        },
        {
            value: i.HOURS_4,
            label: () => a.NW.formatToPlainString(a.t.Rea2gY, { hours: 4 })
        },
        {
            value: i.HOURS_1,
            label: () => a.NW.formatToPlainString(a.t.Rea2gY, { hours: 1 })
        },
        {
            value: i.MINUTES_30,
            label: () => a.NW.formatToPlainString(a.t.TS3eJS, { minutes: 30 })
        },
        {
            value: i.DONT_CLEAR,
            label: () => a.NW.string(a.t.bRn8cn)
        }
    ],
    u = [
        {
            value: i.TODAY,
            label: () => a.NW.string(a.t.TOEOaW)
        },
        {
            value: i.HOURS_4,
            label: () => a.NW.formatToPlainString(a.t.Yizuvb, { hours: 4 })
        },
        {
            value: i.HOURS_1,
            label: () => a.NW.formatToPlainString(a.t.Yizuvb, { hours: 1 })
        },
        {
            value: i.MINUTES_30,
            label: () => a.NW.formatToPlainString(a.t['/XUoq6'], { minutes: 30 })
        },
        {
            value: i.DONT_CLEAR,
            label: () => a.NW.string(a.t.bRn8cn)
        }
    ];
