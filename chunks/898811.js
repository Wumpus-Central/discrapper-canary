n.d(e, { default: () => p });
var a = n(627968);
n(64700);
var i = n(980707),
    r = n(477782),
    l = n(442433),
    s = n(723702),
    d = n(19575),
    c = n(826308),
    o = n(375708);
function p(t) {
    let { text: e, onSelect: n } = t,
        p = (0, c.A)(e);
    return s.isPlatformEmbedded
        ? (0, a.jsxs)(i.W, {
              "data-menu-migrated-auto": !0,
              navId: "text-context",
              onClose: l.Z_,
              "aria-label": o.intl.string(o.t.s285pq),
              onSelect: n,
              children: [
                  (0, a.jsx)(r.rX, { children: p }),
                  (0, a.jsx)(r.rX, {
                      children: (0, a.jsx)(r.Dr, {
                          id: "copy",
                          label: o.intl.string(o.t.OpuAlK),
                          action: () => d.Ay.copy(e),
                      }),
                  }),
              ],
          })
        : null;
}
