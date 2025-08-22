n.d(t, {
    hi: () => u,
    s2: () => d,
    sU: () => f,
});
var r = n(442837),
    i = n(481060),
    a = n(594190),
    o = n(765504),
    s = n(388032);
function l() {
    return !1;
}
function c() {
    return o.Z.getConfig({ location: "testing" }).force;
}
function u() {
    return (0, r.e7)([a.ZP], () => a.ZP.canShowAdminWarning) && !l() && c();
}
function d(e) {
    return e.canShowAdminWarning && !l() && c();
}
function f() {
    (0, i.showToast)((0, i.createToast)(s.intl.string(s.t.kQnWb2), i.ToastType.SUCCESS));
}
