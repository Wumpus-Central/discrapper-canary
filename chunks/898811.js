var a = n(477900);
n(582128);
var i = n(165862),
    r = n(477782),
    l = n(442433),
    s = n(723702),
    d = n(253400),
    c = n(826308),
    o = n(792996);
n.d(
    e,
    {},
    {
        default: function (t) {
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
        },
    },
);
