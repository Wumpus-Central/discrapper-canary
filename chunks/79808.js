n.d(t, { Z: () => g }), n(388685), n(361932), n(187205);
var i = n(951288),
    l = n(647438),
    o = n(120356),
    r = n.n(o),
    s = n(873546),
    a = n(636298),
    u = n(404975),
    c = n(178167),
    d = n(59662),
    f = n(990757);
function g(e) {
    let { root: t, initialPanel: n, onClose: o, sidebarHeader: g, sidebarFooter: v } = e,
        [m, b] = l.useState(!0),
        [p, x] = l.useState(n.key),
        j = l.useMemo(
            () => ({
                currentPanel: t.layout.flatMap((e) => e.layout).find((e) => e.key === p),
                setCurrentPanel: (e) => x(e.key),
                showNavigationMobile: m,
            }),
            [p, t, m],
        );
    return (0, i.jsx)(d.j.Provider, {
        value: j,
        children: (0, i.jsxs)("div", {
            className: r()(f.container, { [f.mobile]: s.tq }),
            children: [
                (0, i.jsx)(c.d, { onClose: o }),
                (0, i.jsx)(u.P, {
                    root: t,
                    header: g,
                    footer: v,
                }),
                (0, i.jsx)(a.Z, {
                    onClose: o,
                    setShowNavigationMobile: b,
                    setting: j.currentPanel,
                }),
            ],
        }),
    });
}
