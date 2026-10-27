e.d(n, { A: () => d });
var t = e(582128),
    i = e(17928),
    u = e(615606),
    c = e(371169),
    r = e(260498),
    o = e(246338),
    a = e(913396);
function d(l, n) {
    let e = (0, o.w$)(l, n),
        d = (0, a.A)(e ? l : null),
        s = (0, u.q)(e ? l : null),
        A = e && null == d ? (s?.conjureProjectId ?? null) : null;
    t.useEffect(() => {
        null != A && (0, c.tF)([A]);
    }, [A]);
    let p = (0, i.bG)([r.Ay], () => (null != A ? r.Ay.getProject(A) : null), [A]),
        g = d ?? p ?? null;
    return null != g && (0, r.H_)(g) ? g : null;
}
