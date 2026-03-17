e.r(a), e.d(a, { default: () => c });
var i = e(627968),
    n = e(64700),
    r = e(397927),
    l = e(442433),
    d = e(665606),
    s = e(985018);
function c(t) {
    let { navId: a, onClose: c = l.Z_, onSelect: o } = t,
        u = n.useCallback(() => {
            (0, r.mMO)(async () => {
                let { default: t } = await e.e("59839").then(e.bind(e, 889186));
                return (a) => (0, i.jsx)(t, { ...a, source: "favorites_header_add_button_context_menu" });
            });
        }, []),
        f = n.useCallback(() => {
            (0, r.mMO)(async () => {
                let { default: t } = await e.e("5639").then(e.bind(e, 395199));
                return (a) => (0, i.jsx)(t, { ...a });
            });
        }, []);
    return (0, i.jsxs)(r.W1t, {
        variant: "fixed",
        "data-menu-migrated": !0,
        navId: a,
        onClose: c,
        "aria-label": s.intl.string(s.t.liqwPJ),
        onSelect: o,
        children: [
            (0, i.jsx)(r.rXV, {
                children: (0, i.jsx)(r.Drp, {
                    id: "add-to-favorites",
                    label: s.intl.string(d.default.G9fGlP),
                    trailingIndicator: { type: "icon", icon: r.TIR },
                    action: u,
                }),
            }),
            (0, i.jsx)(r.rXV, {
                children: (0, i.jsx)(r.Drp, {
                    id: "create-favorites-category",
                    label: s.intl.string(s.t["ISN+NM"]),
                    trailingIndicator: { type: "icon", icon: r.YPf },
                    action: f,
                }),
            }),
        ],
    });
}
