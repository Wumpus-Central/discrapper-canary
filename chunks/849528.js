n.d(t, { z: () => r });
var i = n(989349),
    s = n.n(i),
    l = n(655752),
    a = n(112848);
function r() {
    let e = (0, a.$F)(),
        t = (0, l.P)(),
        n = (0, a.Xb)();
    if (null == e || null == t || null == n) return null;
    let i = s()(),
        r = s()(n),
        o = e.status === a.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
        d = t.tenureReqNumMonths,
        c = r.clone().add(o, "months"),
        u = r.clone().add(d, "months").diff(c);
    return Math.max(0, Math.min(1, (i.diff(c) - 864e5) / u));
}
