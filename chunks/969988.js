n.d(t, { A: () => c });
var i = n(64700),
    a = n(868714),
    r = n(52133),
    s = n(510373),
    l = n(17928),
    o = n(250105),
    d = n(710195);
function c(e, t) {
    let n = (0, a.A)(e),
        c = (0, s.A)(() => t, t, r.A),
        _ = (0, i.useMemo)(() => (0, o.cT)("user", { location: c.location }), [c]),
        E = (0, l.yK)(
            [d.A],
            () =>
                n.flatMap((e) =>
                    d.A.getEvaluationAndAssignment(
                        e.definition.kind,
                        (0, o.cT)(e.definition.kind, c),
                        e.definition.name,
                        _,
                    ),
                ),
            [n, c, _],
        );
    return (0, i.useMemo)(() => new Map(n.map((e) => [e, e.getConfig(c)])), [n, c, E]);
}
