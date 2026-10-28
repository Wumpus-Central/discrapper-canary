(u.r(e), u.d(e, { default: () => h }));
var n = u(477900),
    r = u(582128),
    s = u(17928),
    c = u(976860),
    i = u(735769),
    d = u(972013),
    p = u(381991),
    o = u(316970),
    a = u(652215);
function f(t) {
    let { projectId: e } = t;
    return (
        r.useEffect(() => {
            ((0, c.bG)(i.A.getExitRoute() ?? a.BVt.ME), (0, p.Ay)(e));
        }, [e]),
        null
    );
}
function h(t) {
    let { projectId: e } = t;
    return (0, s.bG)([d.A], () => d.A.isPinned()) ? (0, n.jsx)(o.A, { projectId: e }) : (0, n.jsx)(f, { projectId: e });
}
