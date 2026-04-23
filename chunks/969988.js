n.d(t, { A: () => u });
var i = n(64700),
    r = n(868714),
    a = n(52133),
    l = n(510373),
    s = n(17928),
    o = n(250105),
    d = n(710195);
function u(e, t) {
    let n = (0, r.A)(e),
        u = (0, l.A)(() => t, t, a.A),
        c = (0, i.useMemo)(() => (0, o.cT)("user", { location: u.location }), [u]),
        _ = (0, s.yK)(
            [d.A],
            () =>
                n.flatMap((e) =>
                    d.A.getEvaluationAndAssignment(
                        e.definition.kind,
                        (0, o.cT)(e.definition.kind, u),
                        e.definition.name,
                        c,
                    ),
                ),
            [n, u, c],
        );
    return (0, i.useMemo)(() => new Map(n.map((e) => [e, e.getConfig(u)])), [n, u, _]);
}
