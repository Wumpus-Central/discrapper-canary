"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    r = n(503698),
    a = n.n(r),
    s = n(318254),
    l = n(834730),
    o = n(657718),
    d = n(807072),
    c = n(262427),
    u = n(945942),
    m = n(985018),
    p = n(931048);
function _(e) {
    let { location: t, onDismiss: n, className: r } = e,
        { shouldRender: _, limitedOfferTimeLeft: h } = (0, u.A)({ location: t });
    return _
        ? (0, i.jsxs)(c.A, {
              Icon: s.C,
              className: a()(p.U, r),
              children: [
                  (0, i.jsx)(l.E, {
                      variant: "text-xs/medium",
                      color: "currentColor",
                      children: m.intl.format(m.t["/bHQ84"], {
                          numDays: Math.max(h, 1),
                          applicationName: m.intl.string(m.t.Uu8hke),
                      }),
                  }),
                  null != n &&
                      (0, i.jsx)("div", {
                          className: p.c,
                          children: (0, i.jsx)(o.S, {
                              size: "xs",
                              variant: "icon-only",
                              icon: d.U,
                              "aria-label": m.intl.string(m.t.cpT0Cq),
                              onClick: n,
                          }),
                      }),
              ],
          })
        : null;
}
