a.d(i, { A: () => m });
var t = a(627968),
    s = a(503698),
    c = a.n(s),
    l = a(318254),
    r = a(834730),
    e = a(657718),
    o = a(807072),
    u = a(262427),
    d = a(945942),
    h = a(985018),
    p = a(931048);
function m(n) {
    let { location: i, onDismiss: a, className: s } = n,
        { shouldRender: m, limitedOfferTimeLeft: x } = (0, d.A)({ location: i });
    return m
        ? (0, t.jsxs)(u.A, {
              Icon: l.C,
              className: c()(p.U, s),
              children: [
                  (0, t.jsx)(r.E, {
                      variant: "text-xs/medium",
                      color: "currentColor",
                      children: h.intl.format(h.t["/bHQ84"], {
                          numDays: Math.max(x, 1),
                          applicationName: h.intl.string(h.t.Uu8hke),
                      }),
                  }),
                  null != a &&
                      (0, t.jsx)("div", {
                          className: p.c,
                          children: (0, t.jsx)(e.S, {
                              size: "xs",
                              variant: "icon-only",
                              icon: o.U,
                              "aria-label": h.intl.string(h.t.cpT0Cq),
                              onClick: a,
                          }),
                      }),
              ],
          })
        : null;
}
