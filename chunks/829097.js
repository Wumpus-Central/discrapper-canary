t.d(n, { _: () => i });
let a = (0, t(945810).mj)({
    name: "2025-09-video-qoe-metrics-tracking",
    kind: "user",
    defaultConfig: { externalAnalyticsEnabled: !1 },
    variations: { 0: { externalAnalyticsEnabled: !1 }, 1: { externalAnalyticsEnabled: !0 } },
});
function i(e) {
    let { location: n } = e;
    return a.getConfig({ location: n });
}
