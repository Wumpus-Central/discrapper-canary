n.d(t, {
    hi: () => f,
    s2: () => _,
    sU: () => p,
});
var r = n(442837),
    i = n(481060),
    a = n(594190),
    o = n(358085),
    s = n(998502),
    l = n(765504),
    c = n(388032);
function u() {
    return !!o.isPlatformEmbedded && (s.ZP.IsSystemServiceInstalled() || !1);
}
function d() {
    return (
        !!o.isPlatformEmbedded &&
        (s.ZP.CanSystemServiceBeInstalled() || !1) &&
        l.Z.getConfig({ location: "testing" }).force
    );
}
function f() {
    let e = (0, r.e7)([a.ZP], () => a.ZP.canShowAdminWarning);
    return !!o.isPlatformEmbedded && e && !u() && d();
}
function _(e) {
    return !!o.isPlatformEmbedded && e.canShowAdminWarning && !u() && d();
}
function p() {
    o.isPlatformEmbedded &&
        s.ZP.InstallSystemService()
            .then(() => {
                (0, i.showToast)((0, i.createToast)(c.intl.string(c.t.kQnWb2), i.ToastType.SUCCESS));
            })
            .catch((e) => {
                (0, i.showToast)((0, i.createToast)(c.intl.string(c.t.sdKYCA), i.ToastType.FAILURE)), console.error(e);
            });
}
