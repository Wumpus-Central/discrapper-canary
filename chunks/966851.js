n.d(t, {
    A: () => o,
}),
    n(896048),
    n(733351);
var r = n(627968),
    i = n(64700),
    l = n(856644),
    s = n(69090),
    a = n(175284),
    c = n(512031);

function o(e) {
    let { setEditRoleId: t, guild: n, everyoneRole: o, otherRoles: d, setSelectedSection: u } = e,
        [f, g] = i.useState(""),
        [b, m] = i.useState(c.p4),
        p = f.trim(),
        x = i.useMemo(() => d.filter((e) => (0, l.Vh)(e, p)), [d, p]),
        h = i.useCallback(
            () =>
                (0, r.jsx)(
                    a.A,
                    {
                        guild: n,
                        everyoneRole: o,
                        filteredRoles: x,
                        setEditRoleId: t,
                        query: f,
                        setQuery: g,
                        setHeaderHeight: m,
                    },
                    "header",
                ),
            [n, o, x, t, f],
        );
    return (0, r.jsx)(s.A, {
        setEditRoleId: t,
        guild: n,
        everyoneRole: o,
        otherRoles: d,
        setSelectedSection: u,
        renderHeader: h,
        headerHeight: b,
        query: f,
    });
}
