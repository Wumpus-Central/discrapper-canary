t.r(e), t.d(e, { default: () => v });
var i = t(627968),
    n = t(64700),
    l = t(192308),
    r = t(861672),
    d = t(477782),
    s = t(499373),
    o = t(234020),
    c = t(442433),
    h = t(335993),
    u = t(985018);
function v(a) {
    let { navId: e, onClose: v = c.Z_, onSelect: p } = a,
        f = n.useCallback(() => {
            (0, l.openModalLazy)(async () => {
                let { default: a } = await t.e("59839").then(t.bind(t, 889186));
                return (e) => (0, i.jsx)(a, { ...e, source: "favorites_header_add_button_context_menu" });
            });
        }, []),
        g = n.useCallback(() => {
            (0, l.openModalLazy)(async () => {
                let { default: a } = await t.e("5639").then(t.bind(t, 395199));
                return (e) => (0, i.jsx)(a, { ...e });
            });
        }, []);
    return (0, i.jsxs)(r.W, {
        variant: "fixed",
        "data-menu-migrated": !0,
        navId: e,
        onClose: v,
        "aria-label": u.intl.string(u.t.liqwPJ),
        onSelect: p,
        children: [
            (0, i.jsx)(d.rX, {
                children: (0, i.jsx)(d.Dr, {
                    id: "add-to-favorites",
                    label: u.intl.string(h.default.G9fGlP),
                    trailingIndicator: { type: "icon", icon: s.T },
                    action: f,
                }),
            }),
            (0, i.jsx)(d.rX, {
                children: (0, i.jsx)(d.Dr, {
                    id: "create-favorites-category",
                    label: u.intl.string(u.t["ISN+NM"]),
                    trailingIndicator: { type: "icon", icon: o.Y },
                    action: g,
                }),
            }),
        ],
    });
}
