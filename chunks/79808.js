n.d(t, { Z: () => m }), n(388685);
var i = n(255367),
    o = n(73800),
    l = n(120356),
    r = n.n(l),
    a = n(873546),
    s = n(636298),
    c = n(404975),
    u = n(178167),
    d = n(59662),
    f = n(254204);
function m(e) {
    let { root: t, initialPanel: n, onClose: l, sidebarHeader: m, sidebarFooter: x } = e,
        [g, v] = o.useState(!0),
        [b, j] = o.useState([n]),
        [p, y] = o.useState(0),
        N = o.useMemo(
            () => ({
                history: b,
                activeIndex: p,
                showNavigationMobile: g,
                forward() {
                    y(Math.min(p + 1, b.length - 1));
                },
                back() {
                    y(Math.max(p - 1, 0));
                },
                pushPanel(e) {
                    j([...b.slice(0, p + 1), e]), y(p + 1);
                },
            }),
            [p, b, g],
        );
    return (0, i.jsx)(d.j.Provider, {
        value: N,
        children: (0, i.jsxs)("div", {
            className: r()(f.container, { [f.mobile]: a.tq }),
            children: [
                (0, i.jsx)(u.d, { onClose: l }),
                (0, i.jsx)(c.P, {
                    root: t,
                    header: m,
                    footer: x,
                }),
                (0, i.jsx)(s.Z, {
                    onClose: l,
                    setShowNavigationMobile: v,
                    setting: b[p],
                }),
            ],
        }),
    });
}
