n.d(t, { A: () => c });
var i = n(64700),
    r = n(868714),
    a = n(52133),
    l = n(510373),
    s = n(17928),
    o = n(250105),
    d = n(710195);
function c(e, t) {
    let n = (0, r.A)(e),
        c = (0, l.A)(() => t, t, a.A),
        u = (0, i.useMemo)(() => (0, o.cT)("user", { location: c.location }), [c]),
        A = (0, s.yK)(
            [d.A],
            () =>
                n.flatMap((e) =>
                    d.A.getEvaluationAndAssignment(
                        e.definition.kind,
                        (0, o.cT)(e.definition.kind, c),
                        e.definition.name,
                        u,
                    ),
                ),
            [n, c, u],
        );
    return (0, i.useMemo)(() => new Map(n.map((e) => [e, e.getConfig(c)])), [n, c, A]);
}
