n.d(t, {
    CD: () => o,
    DL: () => i,
    GE: () => l,
    yE: () => s,
});
var r = n(427164);
let i = (0, r.le)({
        name: "2025-08-quest-ad-fetch-active-check",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: {
            0: { enabled: !1 },
            1: { enabled: !0 },
        },
    }),
    a = (0, r.le)({
        name: "2025-08-sponsored-quest",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: {
            0: { enabled: !1 },
            1: { enabled: !0 },
        },
    }),
    o = (e) => {
        let { enabled: t } = a.getConfig({ location: e });
        return t;
    };
(0, r.le)({
    name: "2025-10-mobile-quest-home-v2-entrypoint-relocation",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var s = (function (e) {
    return (
        (e[(e.DISCOVER = 0)] = "DISCOVER"),
        (e[(e.ACTION = 1)] = "ACTION"),
        (e[(e.REWARD = 2)] = "REWARD"),
        (e[(e.EARN = 3)] = "EARN"),
        e
    );
})({});
let l = (0, r.le)({
    name: "2025-10-quest-home-entrypoint-onboarding",
    kind: "user",
    defaultConfig: {
        enabled: !1,
        variant: null,
    },
    variations: {
        1: {
            enabled: !0,
            variant: 0,
        },
        2: {
            enabled: !0,
            variant: 1,
        },
        3: {
            enabled: !0,
            variant: 2,
        },
        4: {
            enabled: !0,
            variant: 3,
        },
    },
});
