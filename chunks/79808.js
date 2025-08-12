n.d(t, { Z: () => g }), n(388685);
var i = n(255367),
    l = n(73800),
    s = n(120356),
    o = n.n(s),
    a = n(873546),
    r = n(636298),
    u = n(404975),
    c = n(178167),
    d = n(59662),
    f = n(580818);
function g(e) {
    let { root: t, initialPanel: n, onClose: s, sidebarHeader: g, sidebarFooter: m } = e,
        [v, b] = l.useState(!0),
        [x, p] = l.useState([n]),
        [j, h] = l.useState(0),
        C = l.useMemo(
            () => ({
                history: x,
                activeIndex: j,
                showNavigationMobile: v,
                forward() {
                    h(Math.min(j + 1, x.length - 1));
                },
                back() {
                    h(Math.max(j - 1, 0));
                },
                pushPanel(e) {
                    p([...x.slice(0, j + 1), e]), h(j + 1);
                },
            }),
            [j, x, v],
        );
    return (0, i.jsx)(d.j.Provider, {
        value: C,
        children: (0, i.jsxs)("div", {
            className: o()(f.container, { [f.mobile]: a.tq }),
            children: [
                (0, i.jsx)(c.d, { onClose: s }),
                (0, i.jsx)(u.P, {
                    root: t,
                    header: g,
                    footer: m,
                }),
                (0, i.jsx)(r.Z, {
                    onClose: s,
                    setShowNavigationMobile: b,
                    setting: x[j],
                }),
            ],
        }),
    });
}
