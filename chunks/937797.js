n.d(t, {
    DL: () => i,
    VG: () => u,
    b2: () => l,
    eC: () => o,
    n0: () => s,
    nj: () => c,
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
        name: "2025-11-quest-home-suggested-sort-rotation",
        kind: "user",
        defaultConfig: {
            enabled: !1,
            variant: null,
        },
        variations: {
            0: {
                enabled: !1,
                variant: null,
            },
            1: {
                enabled: !0,
                variant: 0,
            },
            2: {
                enabled: !0,
                variant: 1,
            },
        },
    }),
    o = (e) => {
        let { enabled: t, variant: n } = a.getConfig({ location: e });
        return 0 === n
            ? {
                  enabled: t,
                  minutes: 20,
              }
            : 1 === n
              ? {
                    enabled: t,
                    minutes: 75,
                }
              : {
                    enabled: t,
                    minutes: 0,
                };
    },
    s = (0, r.le)({
        name: "2025-11-quest-home-takeover-client-rollout",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var l = (function (e) {
    return (
        (e[(e.LISTEN_FOR_ERROR_ONLY = 0)] = "LISTEN_FOR_ERROR_ONLY"),
        (e[(e.LISTEN_AND_RETRY_LOADING = 1)] = "LISTEN_AND_RETRY_LOADING"),
        e
    );
})({});
let c = (0, r.le)({
        name: "2025-11-quest-bar-listen-for-source-error",
        kind: "user",
        defaultConfig: {
            enabled: !1,
            variant: null,
        },
        variations: {
            0: {
                enabled: !1,
                variant: null,
            },
            1: {
                enabled: !0,
                variant: 0,
            },
            2: {
                enabled: !0,
                variant: 1,
            },
        },
    }),
    u = (0, r.le)({
        name: "2025-11-video-end-card-v2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
