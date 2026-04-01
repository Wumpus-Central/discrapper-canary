n.d(t, { _: () => i });
let r = (0, n(945810).mj)({
    name: "2025-09-video-qoe-metrics-tracking",
    kind: "user",
    defaultConfig: { externalAnalyticsEnabled: !1 },
    variations: { 0: { externalAnalyticsEnabled: !1 }, 1: { externalAnalyticsEnabled: !0 } },
});
function i(e) {
    let { location: t } = e;
    return r.getConfig({ location: t });
}
