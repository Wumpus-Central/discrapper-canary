n.d(t, { _: () => i });
var r = n(945810),
    l = n(332628);
let o = (0, r.mj)({
    name: "2025-09-video-qoe-metrics-tracking",
    kind: "user",
    defaultConfig: { externalAnalyticsEnabled: !1 },
    variations: {
        0: { externalAnalyticsEnabled: !1 },
        1: { externalAnalyticsEnabled: !0 },
    },
});
function i(e) {
    let { location: t } = e,
        { isInHoldout: n } = l.i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n ? { externalAnalyticsEnabled: !1 } : o.getConfig({ location: t });
}
