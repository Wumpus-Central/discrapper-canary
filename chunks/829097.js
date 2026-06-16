"use strict";
n.d(t, { _: () => r });
let i = (0, n(945810).mj)({
    name: "2025-09-video-qoe-metrics-tracking",
    kind: "user",
    defaultConfig: { externalAnalyticsEnabled: !1 },
    variations: { 0: { externalAnalyticsEnabled: !1 }, 1: { externalAnalyticsEnabled: !0 } },
});
function r(e) {
    let { location: t } = e;
    return i.getConfig({ location: t });
}
