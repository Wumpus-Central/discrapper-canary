n.d(t, { default: () => h });
var s = n(627968);
n(64700);
var r = n(550079),
    e = n(477782),
    l = n(442433),
    a = n(147036),
    o = n(957565),
    c = n(746080),
    d = n(985018),
    u = n(997509),
    p = n(555325),
    b = n(652215);
function h(i) {
    var t;
    let { guild: n, onSelect: h } = i,
        S = (0, p.EI)(n)
            ? (0, s.jsx)(e.Dr, {
                  id: "role-subscription-settings",
                  label: d.intl.string(d.t.jMN5ZG),
                  action: () => {
                      u.A.open(n.id, b.BEX.ROLE_SUBSCRIPTIONS);
                  },
              })
            : null,
        g =
            ((t = n.id),
            (0, s.jsx)(e.Dr, {
                id: "role-subscription-copy-link",
                label: d.intl.string(d.t.WqhZss),
                action: () => {
                    (0, o.C)((0, a.n)(t, c.VV.ROLE_SUBSCRIPTIONS));
                },
            }));
    return (0, s.jsx)(r.W, {
        "data-menu-migrated-auto": !0,
        navId: "role-subscription-context",
        "aria-label": d.intl.string(d.t.g3KvYF),
        onClose: l.Z_,
        onSelect: h,
        children: (0, s.jsxs)(e.rX, { children: [S, g] }),
    });
}
