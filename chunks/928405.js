n.d(t, { n: () => o });
var r = n(427164),
    i = n(480218);
let a = (0, r.le)({
    name: "2025-09-image-attachment-mezzanine-v2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: {
            enabled: !0,
            maxFileSizeBytes: 524288,
        },
        2: {
            enabled: !0,
            maxFileSizeBytes: 262144,
        },
    },
});
function o(e) {
    let { location: t } = e,
        { isInHoldout: n } = i._.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n ? { enabled: !1 } : a.getConfig({ location: t });
}
