n.d(t, {
    CD: () => o,
    DL: () => i,
    EO: () => l,
    m_: () => s,
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
        (e[(e.DISPLAY_ADVERTISER_CTA_ALWAYS = 0)] = "DISPLAY_ADVERTISER_CTA_ALWAYS"),
        (e[(e.OVERLAY_SHARE_ON_VIDEO = 1)] = "OVERLAY_SHARE_ON_VIDEO"),
        e
    );
})({});
let l = (0, r.le)({
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
});
