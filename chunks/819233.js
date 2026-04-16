a.d(n, { default: () => u });
var i = a(627968);
a(64700);
var e = a(311907),
    r = a(397927),
    s = a(442433),
    l = a(50268),
    d = a(147036),
    o = a(957565),
    c = a(832163),
    p = a(746080),
    h = a(985018);
function u(t) {
    let { guild: n, onSelect: a } = t,
        u = (0, e.bG)([c.A], () => c.A.getStorefrontData(n.id)?.storefront?.applicationId),
        g = (0, l.A)({ id: u, label: h.intl.string(h.t["FfCL+6"]) });
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "game-shop-context",
        "aria-label": h.intl.string(h.t.vyaWs7),
        onClose: s.Z_,
        onSelect: a,
        children: [
            (0, i.jsx)(r.rXV, {
                children: (0, i.jsx)(r.Drp, {
                    id: "game-shop-copy-link",
                    label: h.intl.string(h.t.WqhZss),
                    action: () => {
                        (0, o.C)((0, d.n)(n.id, p.VV.GAME_SHOP));
                    },
                }),
            }),
            null != g && (0, i.jsx)(r.rXV, { children: g }),
        ],
    });
}
