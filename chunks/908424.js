i.r(a), i.d(a, { default: () => d });
var e = i(627968),
    n = i(64700),
    r = i(397927),
    l = i(442433),
    s = i(525736),
    c = i(985018);
function d(t) {
    let { navId: a, onClose: d = l.Z_, onSelect: o } = t,
        u = n.useCallback(() => {
            (0, r.mMO)(async () => {
                let { default: t } = await Promise.all([i.e("59839"), i.e("23006")]).then(i.bind(i, 889186));
                return (a) => (0, e.jsx)(t, { ...a });
            });
        }, []),
        p = n.useCallback(() => {
            (0, r.mMO)(async () => {
                let { default: t } = await i.e("5639").then(i.bind(i, 395199));
                return (a) => (0, e.jsx)(t, { ...a });
            });
        }, []);
    return (0, e.jsxs)(r.W1t, {
        variant: "fixed",
        "data-menu-migrated": !0,
        navId: a,
        onClose: d,
        "aria-label": c.intl.string(c.t.liqwPJ),
        onSelect: o,
        children: [
            (0, e.jsx)(r.rXV, {
                children: (0, e.jsx)(r.Drp, {
                    id: "add-to-favorites",
                    label: c.intl.string(s.default.G9fGlP),
                    trailingIndicator: { type: "icon", icon: r.j96 },
                    action: u,
                }),
            }),
            (0, e.jsx)(r.rXV, {
                children: (0, e.jsx)(r.Drp, {
                    id: "create-favorites-category",
                    label: c.intl.string(c.t["ISN+NM"]),
                    trailingIndicator: { type: "icon", icon: r.YPf },
                    action: p,
                }),
            }),
        ],
    });
}
