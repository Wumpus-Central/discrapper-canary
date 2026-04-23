"use strict";
n.d(t, { mz: () => l, ni: () => o });
var r = n(311907),
    i = n(945810),
    s = n(287809);
let a = (0, i.mj)({
    name: "2026-02-mana-playground-access",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function o(e) {
    let t = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        n = t?.isStaff() === !0 || t?.isStaffPersonal() === !0,
        i = a.useConfig({ location: e }).enabled;
    return n || i;
}
function l(e) {
    let t = s.default.getCurrentUser();
    return t?.isStaff() === !0 || t?.isStaffPersonal() === !0 || a.getConfig({ location: e }).enabled;
}
