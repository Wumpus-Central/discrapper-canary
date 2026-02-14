n.d(t, { z: () => r });
var i = n(989349),
    s = n.n(i),
    a = n(112848),
    l = n(788868);
function r() {
    let e,
        t,
        n = (0, a.$F)(),
        i = (0, a.Xb)();
    if (null == n || null == i) return null;
    let r = s()(),
        o = s()(i);
    if (n.status === a.Wo.UPCOMING) (e = 0), (t = n.tenureReqNumMonths);
    else {
        let i = l.sp.indexOf(n.id),
            s = l.sp[i + 1];
        if (null == s || -1 === i) return null;
        (e = n.tenureReqNumMonths), (t = l.VD[s].tenureReqNumMonths);
    }
    let c = o.clone().add(e, "months"),
        d = o.clone().add(t, "months").diff(c);
    return Math.max(0, Math.min(1, (r.diff(c) - 864e5) / d));
}
