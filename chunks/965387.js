"use strict";
n.d(t, { N: () => r });
let i = (0, n(945810).mj)({
    name: "2026-01-user-offer-notice-timing-v2-xp",
    kind: "user",
    defaultConfig: { thresholdMs: 0 },
    variations: { 1: { thresholdMs: 6048e5 } },
});
function r(e) {
    return i.getConfig({ location: e }).thresholdMs;
}
