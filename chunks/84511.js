n.d(t, { A: () => A });
var i = n(627968),
    l = n(503698),
    a = n.n(l),
    s = n(318254),
    r = n(834730),
    o = n(657718),
    c = n(807072),
    d = n(262427),
    u = n(945942),
    h = n(985018),
    m = n(217e3);
function A(e) {
    let { location: t, onDismiss: n, className: l } = e,
        { shouldRender: A, limitedOfferTimeLeft: g } = (0, u.A)({ location: t });
    return A
        ? (0, i.jsxs)(d.A, {
              Icon: s.C,
              className: a()(m.U, l),
              children: [
                  (0, i.jsx)(r.E, {
                      variant: "text-xs/medium",
                      color: "currentColor",
                      children: h.intl.format(h.t["/bHQ84"], {
                          numDays: Math.max(g, 1),
                          applicationName: h.intl.string(h.t.Uu8hke),
                      }),
                  }),
                  null != n &&
                      (0, i.jsx)("div", {
                          className: m.c,
                          children: (0, i.jsx)(o.S, {
                              size: "xs",
                              variant: "icon-only",
                              icon: c.U,
                              "aria-label": h.intl.string(h.t.cpT0Cq),
                              onClick: n,
                          }),
                      }),
              ],
          })
        : null;
}
