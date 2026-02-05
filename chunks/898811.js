n.d(t, { default: () => d });
var l = n(627968);
n(64700);
var a = n(397927),
    o = n(442433),
    r = n(723702),
    c = n(837921),
    i = n(826308),
    s = n(985018);
function d(e) {
    let { text: t, onSelect: n } = e,
        d = (0, i.A)(t);
    return r.isPlatformEmbedded
        ? (0, l.jsxs)(a.W1t, {
              "data-menu-migrated-auto": !0,
              navId: "text-context",
              onClose: o.Z_,
              "aria-label": s.intl.string(s.t.s285pq),
              onSelect: n,
              children: [
                  (0, l.jsx)(a.rXV, { children: d }),
                  (0, l.jsx)(a.rXV, {
                      children: (0, l.jsx)(a.Drp, {
                          id: "copy",
                          label: s.intl.string(s.t.OpuAlK),
                          action: () => c.Ay.copy(t),
                      }),
                  }),
              ],
          })
        : null;
}
