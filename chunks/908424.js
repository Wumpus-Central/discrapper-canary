i.d(a, { default: () => d });
var e = i(627968),
    n = i(64700),
    r = i(397927),
    l = i(442433),
    s = i(665606),
    c = i(985018);
function d(t) {
    let { navId: a, onSelect: d } = t,
        o = n.useCallback(() => {
            (0, r.mMO)(async () => {
                let { default: t } = await i.e("15077").then(i.bind(i, 889186));
                return (a) => (0, e.jsx)(t, { ...a });
            });
        }, []),
        u = n.useCallback(() => {
            (0, r.mMO)(async () => {
                let { default: t } = await i.e("5639").then(i.bind(i, 395199));
                return (a) => (0, e.jsx)(t, { ...a });
            });
        }, []);
    return (0, e.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: a,
        onClose: l.Z_,
        "aria-label": c.intl.string(c.t.liqwPJ),
        onSelect: d,
        children: [
            (0, e.jsx)(r.rXV, {
                children: (0, e.jsx)(r.Drp, {
                    id: "add-to-favorites",
                    label: c.intl.string(s.default.G9fGlP),
                    trailingIndicator: { type: "icon", icon: r.j96 },
                    action: o,
                }),
            }),
            (0, e.jsx)(r.rXV, {
                children: (0, e.jsx)(r.Drp, {
                    id: "create-favorites-category",
                    label: c.intl.string(c.t["ISN+NM"]),
                    trailingIndicator: { type: "icon", icon: r.YPf },
                    action: u,
                }),
            }),
        ],
    });
}
