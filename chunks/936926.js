"use strict";
n.d(t, { Eq: () => r, Vh: () => s });
let i = (0, n(945810).mj)({
    kind: "user",
    name: "2026-01-family-center-v3",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function r(e) {
    let { location: t } = e;
    return i.getConfig({ location: t }).enabled;
}
function s(e) {
    let { location: t } = e;
    return i.useConfig({ location: t }).enabled;
}
