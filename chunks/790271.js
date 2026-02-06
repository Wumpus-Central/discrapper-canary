"use strict";
n.d(t, { mz: () => c, ni: () => u });
var r = n(311907),
    i = n(945810),
    a = n(287809);
let s = (0, i.mj)({
    name: "2026-02-mana-playground-access",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function o(e) {
    return s.useConfig({ location: e }).enabled;
}
function l(e) {
    return s.getConfig({ location: e }).enabled;
}
function u(e) {
    let t = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        n = t?.isStaff() === !0 || t?.isStaffPersonal() === !0,
        i = o(e);
    return n || i;
}
function c(e) {
    let t = a.default.getCurrentUser();
    return t?.isStaff() === !0 || t?.isStaffPersonal() === !0 || l(e);
}
