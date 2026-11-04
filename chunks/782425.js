let i = {},
    r = null;
n.d(
    t,
    {},
    {
        EV: function (e) {
            r = e ?? null;
        },
        NM: function (e) {
            let t = i[e] ?? 0;
            (0 === t && r?.(e, !0), (i[e] = t + 1));
        },
        ZE: function (e) {
            return i[e] ?? 0;
        },
        gm: function (e) {
            (i[e]--, 0 === i[e] && r?.(e, !1));
        },
    },
);
