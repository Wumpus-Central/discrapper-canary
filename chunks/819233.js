a.d(n, { default: () => g });
var i = a(627968);
a(64700);
var e = a(17928),
    r = a(550079),
    s = a(477782),
    l = a(442433),
    d = a(50268),
    o = a(147036),
    c = a(957565),
    p = a(832163),
    h = a(746080),
    u = a(985018);
function g(t) {
    let { guild: n, onSelect: a } = t,
        g = (0, e.bG)([p.A], () => p.A.getStorefrontData(n.id)?.storefront?.applicationId),
        b = (0, d.A)({ id: g, label: u.intl.string(u.t["FfCL+6"]) });
    return (0, i.jsxs)(r.W, {
        "data-menu-migrated-auto": !0,
        navId: "game-shop-context",
        "aria-label": u.intl.string(u.t.vyaWs7),
        onClose: l.Z_,
        onSelect: a,
        children: [
            (0, i.jsx)(s.rX, {
                children: (0, i.jsx)(s.Dr, {
                    id: "game-shop-copy-link",
                    label: u.intl.string(u.t.WqhZss),
                    action: () => {
                        (0, c.C)((0, o.n)(n.id, h.VV.GAME_SHOP));
                    },
                }),
            }),
            null != b && (0, i.jsx)(s.rX, { children: b }),
        ],
    });
}
