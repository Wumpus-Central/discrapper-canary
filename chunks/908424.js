t.r(a), t.d(a, { default: () => p });
var i = t(627968),
    n = t(64700),
    r = t(192308),
    l = t(550079),
    d = t(477782),
    s = t(499373),
    o = t(234020),
    c = t(442433),
    u = t(335993),
    h = t(985018);
function p(e) {
    let { navId: a, onClose: p = c.Z_, onSelect: b } = e,
        f = n.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    t.e("24092"),
                    t.e("94494"),
                    t.e("36946"),
                    t.e("92639"),
                    t.e("40963"),
                    t.e("66031"),
                    t.e("59839"),
                ]).then(t.bind(t, 889186));
                return (a) => (0, i.jsx)(e, { ...a, source: "favorites_header_add_button_context_menu" });
            });
        }, []),
        x = n.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await t.e("28020").then(t.bind(t, 395199));
                return (a) => (0, i.jsx)(e, { ...a });
            });
        }, []);
    return (0, i.jsxs)(l.W, {
        variant: "fixed",
        "data-menu-migrated": !0,
        navId: a,
        onClose: p,
        "aria-label": h.intl.string(h.t.liqwPJ),
        onSelect: b,
        children: [
            (0, i.jsx)(d.rX, {
                children: (0, i.jsx)(d.Dr, {
                    id: "add-to-favorites",
                    label: h.intl.string(u.default.G9fGlP),
                    trailingIndicator: { type: "icon", icon: s.T },
                    action: f,
                }),
            }),
            (0, i.jsx)(d.rX, {
                children: (0, i.jsx)(d.Dr, {
                    id: "create-favorites-category",
                    label: h.intl.string(h.t["ISN+NM"]),
                    trailingIndicator: { type: "icon", icon: o.Y },
                    action: x,
                }),
            }),
        ],
    });
}
