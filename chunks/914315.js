t.d(n, { A: () => d });
var e = t(582128),
    i = t(17928),
    u = t(615606),
    c = t(371169),
    r = t(260498),
    o = t(246338),
    a = t(913396);
function d(l, n) {
    let t = (0, o.w$)(l, n),
        d = (0, a.A)(t ? l : null),
        s = (0, u.q)(t ? l : null),
        A = t && null == d ? (s?.conjureProjectId ?? null) : null;
    e.useEffect(() => {
        null != A && (0, c.tF)([A]);
    }, [A]);
    let p = (0, i.bG)([r.Ay], () => (null != A ? r.Ay.getProject(A) : null), [A]),
        g = d ?? p ?? null;
    return null != g && (0, r.H_)(g) ? g : null;
}
