n.d(t, { Z: () => c }), n(361932), n(187205), n(388685);
var r = n(473749),
    i = n(764011),
    a = n(157298),
    o = n(442837),
    s = n(722733),
    l = n(633289);
function c(e, t) {
    let n = (0, i.Z)(e),
        c = (0, a.Z)(t),
        u = (0, o.Wu)(
            [l.Z],
            () =>
                n.flatMap((e) =>
                    l.Z.getEvaluationAndAssignment(
                        e.definition.kind,
                        (0, s.yy)(e.definition.kind, c),
                        e.definition.name,
                    ),
                ),
            [n, c],
        );
    return (0, r.useMemo)(() => new Map(n.map((e) => [e, e.getConfig(c)])), [n, c, u]);
}
