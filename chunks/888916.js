"use strict";
n.d(t, { A0: () => d, As: () => l, Fp: () => u, Rt: () => c });
var i = n(17928),
    r = n(945810),
    s = n(274372),
    a = n(572164);
let o = (0, r.mj)({
    kind: "user",
    name: "2026-06-clips-settings-redesign",
    defaultConfig: { enableRedesign: !1 },
    variations: { 1: { enableRedesign: !0 } },
});
function l() {
    let { enableRedesign: e } = o.useConfig({ location: "useIsClipsSettingsRedesignEnabled" });
    return e;
}
function u() {
    let { enableRedesign: e } = o.getConfig({ location: "isClipsSettingsRedesignEnabled" });
    return e;
}
function c() {
    let e = l(),
        t = (0, a.Et)();
    return e && !t;
}
function d() {
    let e = l(),
        t = c(),
        n = (0, i.bG)([s.Ay], () => s.Ay.getEnableAutoclipping());
    return t || (e && !n);
}
