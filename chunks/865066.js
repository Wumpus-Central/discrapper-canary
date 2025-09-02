n.d(t, {
    hi: () => d,
    s2: () => f,
    sU: () => _,
});
var r = n(442837),
    i = n(481060),
    a = n(594190),
    o = n(998502),
    s = n(765504),
    l = n(388032);
function c() {
    return o.ZP.IsSystemServiceInstalled() || !1;
}
function u() {
    return (o.ZP.CanSystemServiceBeInstalled() || !1) && s.Z.getConfig({ location: "testing" }).force;
}
function d() {
    return (0, r.e7)([a.ZP], () => a.ZP.canShowAdminWarning) && !c() && u();
}
function f(e) {
    return e.canShowAdminWarning && !c() && u();
}
function _() {
    o.ZP.InstallSystemService()
        .then(() => {
            (0, i.showToast)((0, i.createToast)(l.intl.string(l.t.kQnWb2), i.ToastType.SUCCESS));
        })
        .catch((e) => {
            (0, i.showToast)((0, i.createToast)(l.intl.string(l.t.sdKYCA), i.ToastType.FAILURE)), console.error(e);
        });
}
