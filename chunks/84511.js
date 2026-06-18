a.d(i, { A: () => x });
var l = a(627968),
    s = a(503698),
    t = a.n(s),
    c = a(318254),
    r = a(834730),
    e = a(657718),
    o = a(807072),
    u = a(945942),
    d = a(910200),
    h = a(375708),
    p = a(931048);
function x(n) {
    let { location: i, onDismiss: a, className: s } = n,
        { shouldRender: x, limitedOfferTimeLeft: m } = (0, u.A)({ location: i });
    return x
        ? (0, l.jsxs)(d.A, {
              Icon: c.C,
              className: t()(p.U, s),
              children: [
                  (0, l.jsx)(r.E, {
                      variant: "text-xs/semibold",
                      color: "currentColor",
                      children: h.intl.format(h.t["/bHQ84"], {
                          numDays: Math.max(m, 1),
                          applicationName: h.intl.string(h.t.Uu8hke),
                      }),
                  }),
                  null != a
                      ? (0, l.jsx)("div", {
                            className: p.c,
                            children: (0, l.jsx)(e.S, {
                                size: "xs",
                                variant: "icon-only",
                                icon: o.U,
                                "aria-label": h.intl.string(h.t.cpT0Cq),
                                onClick: a,
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
