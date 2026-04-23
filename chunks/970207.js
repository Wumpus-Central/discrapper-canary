"use strict";
n.d(t, { g6: () => o, yS: () => a });
var r = n(945810),
    i = n(927813);
let s = (0, r.mj)({
    name: "2026-04-storefront-pricing",
    kind: "user",
    defaultConfig: { enabled: !1, thresholdMs: 5 * i.A.Millis.MINUTE },
    variations: {
        0: { enabled: !1, thresholdMs: 5 * i.A.Millis.MINUTE },
        1: { enabled: !0, thresholdMs: +i.A.Millis.MINUTE },
        2: { enabled: !0, thresholdMs: 2 * i.A.Millis.MINUTE },
        3: { enabled: !0, thresholdMs: 5 * i.A.Millis.MINUTE },
        4: { enabled: !0, thresholdMs: 10 * i.A.Millis.MINUTE },
    },
});
function a(e) {
    let { location: t } = e;
    return s.getConfig({ location: t }).enabled;
}
function o(e) {
    let { location: t } = e;
    return s.getConfig({ location: t }).thresholdMs;
}
