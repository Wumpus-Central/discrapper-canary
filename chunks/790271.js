"use strict";
n.d(t, { mz: () => l, ni: () => o });
var i = n(17928),
    r = n(945810),
    s = n(287809);
let a = (0, r.mj)({
    name: "2026-02-mana-playground-access",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function o(e) {
    let t = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        n = t?.isStaff() === !0 || t?.isStaffPersonal() === !0,
        r = a.useConfig({ location: e }).enabled;
    return n || r;
}
function l(e) {
    let t = s.default.getCurrentUser();
    return t?.isStaff() === !0 || t?.isStaffPersonal() === !0 || a.getConfig({ location: e }).enabled;
}
