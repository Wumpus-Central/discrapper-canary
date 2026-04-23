n.d(t, { z: () => l });
var r = n(989349),
    a = n.n(r),
    i = n(655752),
    s = n(112848);
function l() {
    let e = (0, s.$F)(),
        t = (0, i.P)(),
        n = (0, s.Xb)();
    if (null == e || null == t || null == n) return null;
    let r = a()(),
        l = a()(n),
        c = e.status === s.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
        o = t.tenureReqNumMonths,
        d = l.clone().add(c, "months"),
        u = l.clone().add(o, "months").diff(d);
    return Math.max(0, Math.min(1, (r.diff(d) - 864e5) / u));
}
