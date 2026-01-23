e.d(t, {
    default: () => s,
});
var l = e(627968);
e(64700);
var a = e(397927),
    o = e(442433),
    r = e(723702),
    i = e(837921),
    c = e(826308),
    d = e(985018);

function s(n) {
    let { text: t, onSelect: e } = n,
        s = (0, c.A)(t);
    return r.isPlatformEmbedded
        ? (0, l.jsxs)(a.W1t, {
              "data-menu-migration-ready": !0,
              navId: "text-context",
              onClose: o.Z_,
              "aria-label": d.intl.string(d.t.s285pq),
              onSelect: e,
              children: [
                  (0, l.jsx)(a.rXV, {
                      children: s,
                  }),
                  (0, l.jsx)(a.rXV, {
                      children: (0, l.jsx)(a.Drp, {
                          id: "copy",
                          label: d.intl.string(d.t.OpuAlK),
                          action: () => i.Ay.copy(t),
                      }),
                  }),
              ],
          })
        : null;
}
