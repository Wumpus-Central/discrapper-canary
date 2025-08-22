n.d(t, { Z: () => m }), n(388685), n(361932), n(187205);
var i = n(951288),
    l = n(647438),
    r = n(120356),
    o = n.n(r),
    s = n(873546),
    a = n(636298),
    u = n(404975),
    c = n(178167),
    d = n(924052),
    f = n(59662),
    g = n(990757);
function v(e) {
    let { root: t, initialPanel: n, onClose: r, sidebarHeader: v, sidebarFooter: m } = e,
        [b, p] = l.useState(!0),
        [x, j] = l.useState(n.key),
        { navigateWithValidation: y } = (0, d.Cu)(),
        C = l.useMemo(
            () => ({
                currentPanel: t.layout.flatMap((e) => e.layout).find((e) => e.key === x),
                setCurrentPanel: (e) => y(() => j(e.key)),
                showNavigationMobile: b,
                setShowNavigationMobile: p,
            }),
            [x, t, b, y, p],
        ),
        h = () => y(r);
    return (0, i.jsx)(f.j.Provider, {
        value: C,
        children: (0, i.jsxs)("div", {
            className: o()(g.container, { [g.mobile]: s.tq }),
            children: [
                (0, i.jsx)(c.d, { onClose: h }),
                (0, i.jsx)(u.P, {
                    root: t,
                    header: v,
                    footer: m,
                }),
                (0, i.jsx)(a.Z, {
                    onClose: h,
                    setting: C.currentPanel,
                }),
            ],
        }),
    });
}
function m(e) {
    let { root: t, initialPanel: n, onClose: l, sidebarHeader: r, sidebarFooter: o } = e;
    return (0, i.jsx)(d.Ri, {
        children: (0, i.jsx)(v, {
            root: t,
            initialPanel: n,
            onClose: l,
            sidebarHeader: r,
            sidebarFooter: o,
        }),
    });
}
