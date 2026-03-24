"use strict";
n.d(t, { K: () => i, X: () => s });
let r = (0, n(945810).mj)({
    name: "2026-03-soundmoji-rendering",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function i(e) {
    let { location: t } = e;
    return r.getConfig({ location: t }).enabled;
}
function s(e) {
    let { location: t } = e;
    return r.useConfig({ location: t }).enabled;
}
