n.d(t, { Z: () => g }), n(388685);
var i = n(951288),
    l = n(647438),
    s = n(120356),
    o = n.n(s),
    r = n(873546),
    a = n(636298),
    u = n(404975),
    c = n(178167),
    d = n(59662),
    f = n(990757);
function g(e) {
    let { root: t, initialPanel: n, onClose: s, sidebarHeader: g, sidebarFooter: m } = e,
        [v, b] = l.useState(!0),
        [x, j] = l.useState([n]),
        [p, h] = l.useState(0),
        C = l.useMemo(
            () => ({
                history: x,
                activeIndex: p,
                showNavigationMobile: v,
                forward() {
                    h(Math.min(p + 1, x.length - 1));
                },
                back() {
                    h(Math.max(p - 1, 0));
                },
                pushPanel(e) {
                    j([...x.slice(0, p + 1), e]), h(p + 1);
                },
            }),
            [p, x, v],
        );
    return (0, i.jsx)(d.j.Provider, {
        value: C,
        children: (0, i.jsxs)("div", {
            className: o()(f.container, { [f.mobile]: r.tq }),
            children: [
                (0, i.jsx)(c.d, { onClose: s }),
                (0, i.jsx)(u.P, {
                    root: t,
                    header: g,
                    footer: m,
                }),
                (0, i.jsx)(a.Z, {
                    onClose: s,
                    setShowNavigationMobile: b,
                    setting: x[p],
                }),
            ],
        }),
    });
}
