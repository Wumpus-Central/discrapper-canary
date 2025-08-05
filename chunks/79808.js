(n.d(t, { Z: () => m }), n(388685));
var i = n(255367),
    o = n(73800),
    l = n(120356),
    a = n.n(l),
    r = n(873546),
    s = n(636298),
    c = n(404975),
    u = n(178167),
    d = n(59662),
    f = n(254204);
function m(e) {
    let { root: t, initialPanel: n, onClose: l, sidebarHeader: m, sidebarFooter: b } = e,
        [v, g] = o.useState(!0),
        [x, j] = o.useState([n]),
        [p, N] = o.useState(0),
        C = o.useMemo(
            () => ({
                history: x,
                activeIndex: p,
                showNavigationMobile: v,
                forward() {
                    N(Math.min(p + 1, x.length - 1));
                },
                back() {
                    N(Math.max(p - 1, 0));
                },
                pushPanel(e) {
                    (j([...x.slice(0, p + 1), e]), N(p + 1));
                }
            }),
            [p, x, v]
        );
    return (0, i.jsx)(d.j.Provider, {
        value: C,
        children: (0, i.jsxs)('div', {
            className: a()(f.container, { [f.mobile]: r.tq }),
            children: [
                (0, i.jsx)(u.d, { onClose: l }),
                (0, i.jsx)(c.P, {
                    root: t,
                    header: m,
                    footer: b
                }),
                (0, i.jsx)(s.Z, {
                    onClose: l,
                    setShowNavigationMobile: g,
                    setting: x[p]
                })
            ]
        })
    });
}
