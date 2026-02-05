"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(856644),
    r = n(69090),
    a = n(175284),
    o = n(512031);
function d(e) {
    let { setEditRoleId: t, guild: n, everyoneRole: d, otherRoles: c, setSelectedSection: u } = e,
        [m, g] = s.useState(""),
        [x, h] = s.useState(o.p4),
        _ = m.trim(),
        A = s.useMemo(() => c.filter((e) => (0, l.Vh)(e, _)), [c, _]),
        p = s.useCallback(
            () =>
                (0, i.jsx)(
                    a.A,
                    {
                        guild: n,
                        everyoneRole: d,
                        filteredRoles: A,
                        setEditRoleId: t,
                        query: m,
                        setQuery: g,
                        setHeaderHeight: h,
                    },
                    "header",
                ),
            [n, d, A, t, m],
        );
    return (0, i.jsx)(r.A, {
        setEditRoleId: t,
        guild: n,
        everyoneRole: d,
        otherRoles: c,
        setSelectedSection: u,
        renderHeader: p,
        headerHeight: x,
        query: m,
    });
}
