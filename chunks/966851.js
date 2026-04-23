n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(856644),
    r = n(69090),
    a = n(175284),
    o = n(512031);
function d(e) {
    let { setEditRoleId: t, guild: n, everyoneRole: d, otherRoles: c, setSelectedSection: u } = e,
        [m, g] = l.useState(""),
        [h, x] = l.useState(o.p4),
        _ = m.trim(),
        p = l.useMemo(() => c.filter((e) => (0, s.Vh)(e, _)), [c, _]),
        A = l.useCallback(
            () =>
                (0, i.jsx)(
                    a.A,
                    {
                        guild: n,
                        everyoneRole: d,
                        filteredRoles: p,
                        setEditRoleId: t,
                        query: m,
                        setQuery: g,
                        setHeaderHeight: x,
                    },
                    "header",
                ),
            [n, d, p, t, m],
        );
    return (0, i.jsx)(r.A, {
        setEditRoleId: t,
        guild: n,
        everyoneRole: d,
        otherRoles: c,
        setSelectedSection: u,
        renderHeader: A,
        headerHeight: h,
        query: m,
    });
}
