n.d(t, { R: () => l });
var r = n(812206),
    i = n(48131),
    a = n(591472),
    o = n(686440),
    s = n(837366);
function l(e) {
    let { applicationId: t, leavesCurrentFrame: n = !0 } = e,
        l = r.Z.getApplication(t),
        c = null != l && (0, o.g)(l);
    if (n) {
        let e = a.Z.getConnectedFrame();
        null != e && (0, s.Z)().leaveFrame({ applicationId: e.applicationId });
    }
    return !!c && (i.Z.launchFrame({ applicationId: t }), !0);
}
