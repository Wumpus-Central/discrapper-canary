(n.d(t, { Z: () => m }), n(388685));
var a = n(255367),
    i = n(73800),
    r = n(120356),
    s = n.n(r),
    o = n(873546),
    l = n(636298),
    c = n(404975),
    d = n(178167),
    u = n(59662),
    f = n(254204);
function m(e) {
    let { tree: t, initialPanel: n, onClose: r, sidebarHeader: m, sidebarFooter: h } = e,
        [x, v] = i.useState(!0),
        [b, j] = i.useState([n]),
        [p, T] = i.useState(0),
        N = i.useMemo(
            () => ({
                history: b,
                activeIndex: p,
                forward() {
                    T(Math.min(p + 1, b.length - 1));
                },
                back() {
                    T(Math.max(p - 1, 0));
                },
                pushPanel(e) {
                    (j([...b.slice(0, p + 1), e]), T(p + 1));
                }
            }),
            [p, b]
        );
    return (0, a.jsx)(u.j.Provider, {
        value: N,
        children: (0, a.jsxs)('div', {
            className: s()(f.container, {
                [f.mobile]: o.tq,
                [f.mobileNavigationOpen]: x
            }),
            children: [
                (0, a.jsx)(d.d, { onClose: r }),
                (0, a.jsx)(c.P, {
                    tree: t,
                    header: m,
                    footer: h
                }),
                (0, a.jsx)(l.Z, {
                    onClose: r,
                    setShowNavigationMobile: v,
                    setting: b[p]
                })
            ]
        })
    });
}
