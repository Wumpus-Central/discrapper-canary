"use strict";
n.d(t, { P: () => i });
let r = (0, n(945810).mj)({
    name: "2026-03-game-detection-collect-executable-fingerprint",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function i(e) {
    return r.getConfig({ location: e }).enabled;
}
