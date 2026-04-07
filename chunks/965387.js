"use strict";
n.d(t, { N: () => a });
var r = n(945810);
let i = 864e5,
    s = (0, r.mj)({
        name: "2026-01-user-offer-notice-timing-v2-xp",
        kind: "user",
        defaultConfig: { thresholdMs: 0 },
        variations: { 1: { thresholdMs: 7 * i } },
    });
function a(e) {
    return s.getConfig({ location: e }).thresholdMs;
}
