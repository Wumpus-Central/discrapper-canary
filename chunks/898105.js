var i = n(945810);
let r = { enabled: !1 },
    a = (0, i.mj)({
        name: "2026-11-autoclips-ea-upsell",
        kind: "user",
        defaultConfig: r,
        variations: { 0: r, 1: { enabled: !0 } },
    });
n.d(
    t,
    {},
    {
        C: function (e) {
            return a.getConfig({ location: e });
        },
        r: function (e) {
            return a.useConfig({ location: e });
        },
    },
);
