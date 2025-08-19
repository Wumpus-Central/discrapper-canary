n.d(t, { Z: () => g }), n(388685);
var i = n(951288),
    l = n(647438),
    r = n(120356),
    o = n.n(r),
    s = n(873546),
    a = n(636298),
    u = n(404975),
    c = n(178167),
    d = n(59662),
    f = n(990757);
function g(e) {
    let { root: t, initialPanel: n, onClose: r, sidebarHeader: g, sidebarFooter: v } = e,
        [b, m] = l.useState(!0),
        [p, x] = l.useState(n.key),
        j = l.useMemo(
            () => ({
                currentPanel: t.layout.find((e) => e.key === p),
                setCurrentPanel: (e) => x(e.key),
                showNavigationMobile: b,
            }),
            [p, t, b],
        );
    return (0, i.jsx)(d.j.Provider, {
        value: j,
        children: (0, i.jsxs)("div", {
            className: o()(f.container, { [f.mobile]: s.tq }),
            children: [
                (0, i.jsx)(c.d, { onClose: r }),
                (0, i.jsx)(u.P, {
                    root: t,
                    header: g,
                    footer: v,
                }),
                (0, i.jsx)(a.Z, {
                    onClose: r,
                    setShowNavigationMobile: m,
                    setting: j.currentPanel,
                }),
            ],
        }),
    });
}
