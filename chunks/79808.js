n.d(t, { Z: () => d }), n(388685), n(361932), n(187205);
var l = n(951288),
    i = n(647438),
    r = n(636298),
    s = n(404975),
    o = n(924052),
    u = n(59662),
    a = n(990757);
function c(e) {
    let { root: t, initialPanel: n, onClose: c, sidebarHeader: d, sidebarFooter: f } = e,
        [g, v] = i.useState(!0),
        [m, j] = i.useState(n.key),
        { navigateWithValidation: b } = (0, o.Cu)(),
        y = i.useMemo(
            () => ({
                currentPanel: t.layout.flatMap((e) => e.layout).find((e) => e.key === m),
                setCurrentPanel: (e) => b(() => j(e.key)),
                showNavigationMobile: g,
                setShowNavigationMobile: v,
            }),
            [m, t, g, b, v],
        );
    return (0, l.jsx)(u.j.Provider, {
        value: y,
        children: (0, l.jsxs)("div", {
            className: a.container,
            children: [
                (0, l.jsx)(s.P, {
                    root: t,
                    header: d,
                    footer: f,
                }),
                (0, l.jsx)(r.Z, {
                    onClose: () => b(c),
                    setting: y.currentPanel,
                }),
            ],
        }),
    });
}
function d(e) {
    let { root: t, initialPanel: n, onClose: i, sidebarHeader: r, sidebarFooter: s } = e;
    return (0, l.jsx)(o.Ri, {
        children: (0, l.jsx)(c, {
            root: t,
            initialPanel: n,
            onClose: i,
            sidebarHeader: r,
            sidebarFooter: s,
        }),
    });
}
