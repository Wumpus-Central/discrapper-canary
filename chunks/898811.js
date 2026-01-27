e.d(t, {
    default: () => s,
});
var l = e(627968);
e(64700);
var o = e(397927),
    a = e(442433),
    c = e(723702),
    i = e(837921),
    r = e(826308),
    d = e(985018);

function s(n) {
    let { text: t, onSelect: e } = n,
        s = (0, r.A)(t);
    return c.isPlatformEmbedded
        ? (0, l.jsxs)(o.W1t, {
              "data-menu-migrated-auto": !0,
              navId: "text-context",
              onClose: a.Z_,
              "aria-label": d.intl.string(d.t.s285pq),
              onSelect: e,
              children: [
                  (0, l.jsx)(o.rXV, {
                      children: s,
                  }),
                  (0, l.jsx)(o.rXV, {
                      children: (0, l.jsx)(o.Drp, {
                          id: "copy",
                          label: d.intl.string(d.t.OpuAlK),
                          action: () => i.Ay.copy(t),
                      }),
                  }),
              ],
          })
        : null;
}
