t.d(n, { default: () => u });
var l = t(627968);
t(64700);
var a = t(550079),
    o = t(477782),
    r = t(442433),
    c = t(723702),
    i = t(19575),
    s = t(826308),
    d = t(985018);
function u(e) {
    let { text: n, onSelect: t } = e,
        u = (0, s.A)(n);
    return c.isPlatformEmbedded
        ? (0, l.jsxs)(a.W, {
              "data-menu-migrated-auto": !0,
              navId: "text-context",
              onClose: r.Z_,
              "aria-label": d.intl.string(d.t.s285pq),
              onSelect: t,
              children: [
                  (0, l.jsx)(o.rX, { children: u }),
                  (0, l.jsx)(o.rX, {
                      children: (0, l.jsx)(o.Dr, {
                          id: "copy",
                          label: d.intl.string(d.t.OpuAlK),
                          action: () => i.Ay.copy(n),
                      }),
                  }),
              ],
          })
        : null;
}
