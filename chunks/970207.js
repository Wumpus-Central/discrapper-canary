s.d(e, { g6: () => a, yS: () => l });
var r = s(945810),
    i = s(927813);
let n = (0, r.mj)({
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
function l(t) {
    let { location: e } = t;
    return n.getConfig({ location: e }).enabled;
}
function a(t) {
    let { location: e } = t;
    return n.getConfig({ location: e }).thresholdMs;
}
