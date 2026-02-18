n.d(t, { _: () => s });
var r = n(945810),
    l = n(332628);
let i = (0, r.mj)({
    name: "2025-09-video-qoe-metrics-tracking",
    kind: "user",
    defaultConfig: { externalAnalyticsEnabled: !1 },
    variations: { 0: { externalAnalyticsEnabled: !1 }, 1: { externalAnalyticsEnabled: !0 } },
});
function s(e) {
    let { location: t } = e,
        { isInHoldout: n } = l.i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n ? { externalAnalyticsEnabled: !1 } : i.getConfig({ location: t });
}
