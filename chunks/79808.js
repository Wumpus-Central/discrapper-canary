(n.d(t, { Z: () => m }), n(388685));
var i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(873546),
    r = n(636298),
    c = n(404975),
    u = n(178167),
    d = n(59662),
    f = n(254204);
function m(e) {
    let { tree: t, initialPanel: n, onClose: o, sidebarHeader: m, sidebarFooter: v } = e,
        [x, g] = a.useState(!0),
        [b, h] = a.useState([n]),
        [j, p] = a.useState(0),
        N = a.useMemo(
            () => ({
                history: b,
                activeIndex: j,
                showNavigationMobile: x,
                forward() {
                    p(Math.min(j + 1, b.length - 1));
                },
                back() {
                    p(Math.max(j - 1, 0));
                },
                pushPanel(e) {
                    (h([...b.slice(0, j + 1), e]), p(j + 1));
                }
            }),
            [j, b, x]
        );
    return (0, i.jsx)(d.j.Provider, {
        value: N,
        children: (0, i.jsxs)('div', {
            className: s()(f.container, { [f.mobile]: l.tq }),
            children: [
                (0, i.jsx)(u.d, { onClose: o }),
                (0, i.jsx)(c.P, {
                    tree: t,
                    header: m,
                    footer: v
                }),
                (0, i.jsx)(r.Z, {
                    onClose: o,
                    setShowNavigationMobile: g,
                    setting: b[j]
                })
            ]
        })
    });
}
