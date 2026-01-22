t.d(n, { default: () => d });
var e = t(627968);
t(64700);
var o = t(397927),
    a = t(442433),
    r = t(723702),
    c = t(837921),
    i = t(826308),
    s = t(985018);
function d(l) {
    let { text: n, onSelect: t } = l,
        d = (0, i.A)(n);
    return r.isPlatformEmbedded
        ? (0, e.jsxs)(o.W1t, {
              navId: "text-context",
              onClose: a.Z_,
              "aria-label": s.intl.string(s.t.s285pq),
              onSelect: t,
              children: [
                  (0, e.jsx)(o.rXV, { children: d }),
                  (0, e.jsx)(o.rXV, {
                      children: (0, e.jsx)(o.Drp, {
                          id: "copy",
                          label: s.intl.string(s.t.OpuAlK),
                          action: () => c.Ay.copy(n),
                      }),
                  }),
              ],
          })
        : null;
}
