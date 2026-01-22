n.d(t, { y: () => l });
var r = n(587895),
    i = n(625180),
    a = n(91242),
    s = n(207371),
    o = n(580954);
function l(e) {
    let { applicationId: t, leavesCurrentFrame: n = !0 } = e,
        l = r.A.getApplication(t),
        c = null != l && (0, s.x)(l);
    if (n) {
        let e = a.A.getConnectedFrame();
        null != e && (0, o.A)().leaveFrame({ applicationId: e.applicationId });
    }
    return !!c && (i.A.launchFrame({ applicationId: t }), !0);
}
