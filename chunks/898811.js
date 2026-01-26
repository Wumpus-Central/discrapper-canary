t.d(e, {
    default: () => s,
});
var l = t(627968);
t(64700);
var o = t(397927),
    a = t(442433),
    c = t(723702),
    i = t(837921),
    r = t(826308),
    d = t(985018);

function s(n) {
    let { text: e, onSelect: t } = n,
        s = (0, r.A)(e);
    return c.isPlatformEmbedded
        ? (0, l.jsxs)(o.W1t, {
              "data-menu-mixed-auto": !0,
              navId: "text-context",
              onClose: a.Z_,
              "aria-label": d.intl.string(d.t.s285pq),
              onSelect: t,
              children: [
                  (0, l.jsx)(o.rXV, {
                      children: s,
                  }),
                  (0, l.jsx)(o.rXV, {
                      children: (0, l.jsx)(o.Drp, {
                          id: "copy",
                          label: d.intl.string(d.t.OpuAlK),
                          action: () => i.Ay.copy(e),
                      }),
                  }),
              ],
          })
        : null;
}
