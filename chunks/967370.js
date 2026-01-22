n.d(t, {
    lM: () => s,
});
var r = n(945810);
let i = (0, r.mj)({
        name: "2025-11-nitro-privacy-perk",
        kind: "user",
        defaultConfig: {
            enabled: !1,
            in_experiment: !1,
        },
        variations: {
            0: {
                in_experiment: !0,
                enabled: !1,
            },
            1: {
                in_experiment: !0,
                enabled: !0,
            },
        },
    }),
    a = (0, r.mj)({
        name: "2026-01-nitro-vpn-perk",
        kind: "user",
        defaultConfig: {
            in_experiment: !1,
            enabled: !1,
        },
        variations: {
            1: {
                enabled: !0,
                in_experiment: !0,
            },
        },
    }),
    s = (e) => {
        let t = i.getConfig({
            location: e,
        });
        return t.in_experiment
            ? t.enabled
            : a.getConfig({
                  location: e,
              }).enabled;
    };
