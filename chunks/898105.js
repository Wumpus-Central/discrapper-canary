var n = l(945810);
let a = { enabled: !1 },
    i = (0, n.mj)({
        name: "2026-11-autoclips-ea-upsell",
        kind: "user",
        defaultConfig: a,
        variations: { 0: a, 1: { enabled: !0 } },
    });
l.d(
    t,
    {},
    {
        C: function (e) {
            return i.getConfig({ location: e });
        },
        r: function (e) {
            return i.useConfig({ location: e });
        },
    },
);
