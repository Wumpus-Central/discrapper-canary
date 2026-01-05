n.d(t, {
    DL: () => i,
    EO: () => o,
    VG: () => d,
    eC: () => l,
    m_: () => a,
    n0: () => c,
    nj: () => u,
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
});
var a = (function (e) {
    return (
        (e[(e.DISPLAY_ADVERTISER_CTA_ALWAYS = 0)] = "DISPLAY_ADVERTISER_CTA_ALWAYS"),
        (e[(e.OVERLAY_SHARE_ON_VIDEO = 1)] = "OVERLAY_SHARE_ON_VIDEO"),
        e
    );
})({});
let o = (0, r.le)({
        name: "2025-10-desktop-video-quest-cta-relocation",
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
        },
    }),
    s = (0, r.le)({
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
    l = (e) => {
        let { enabled: t, variant: n } = s.getConfig({ location: e });
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
    c = (0, r.le)({
        name: "2025-11-quest-home-takeover-client-rollout",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    u = (0, r.le)({
        name: "2025-11-quest-bar-listen-for-source-error",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    d = (0, r.le)({
        name: "2025-11-video-end-card-v2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
