(n.d(t, { Z: () => m }), n(388685));
var a = n(255367),
    i = n(73800),
    o = n(120356),
    s = n.n(o),
    r = n(873546),
    l = n(636298),
    c = n(404975),
    d = n(178167),
    u = n(59662),
    f = n(254204);
function m(e) {
    let { tree: t, initialPanel: n, onClose: o, sidebarHeader: m, sidebarFooter: h } = e,
        [x, v] = i.useState(!0),
        [b, j] = i.useState([n]),
        [p, g] = i.useState(0),
        N = i.useMemo(
            () => ({
                history: b,
                activeIndex: p,
                showNavigationMobile: x,
                forward() {
                    g(Math.min(p + 1, b.length - 1));
                },
                back() {
                    g(Math.max(p - 1, 0));
                },
                pushPanel(e) {
                    (j([...b.slice(0, p + 1), e]), g(p + 1));
                }
            }),
            [p, b, x]
        );
    return (0, a.jsx)(u.j.Provider, {
        value: N,
        children: (0, a.jsxs)('div', {
            className: s()(f.container, { [f.mobile]: r.tq }),
            children: [
                (0, a.jsx)(d.d, { onClose: o }),
                (0, a.jsx)(c.P, {
                    tree: t,
                    header: m,
                    footer: h
                }),
                (0, a.jsx)(l.Z, {
                    onClose: o,
                    setShowNavigationMobile: v,
                    setting: b[p]
                })
            ]
        })
    });
}
