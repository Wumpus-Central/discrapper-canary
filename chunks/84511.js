"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(262427),
    l = n(697359),
    u = n(985018),
    c = n(745263);
function d(e) {
    let { location: t, onDismiss: n, className: i } = e,
        { shouldRender: d, limitedOfferTimeLeft: _ } = (0, l.A)({ location: t });
    return d
        ? (0, r.jsxs)(o.A, {
              Icon: a.Cp8,
              className: s()(c.U, i),
              children: [
                  (0, r.jsx)(a.EYj, {
                      variant: "text-xs/medium",
                      color: "currentColor",
                      children: u.intl.format(u.t["/bHQ84"], {
                          numDays: Math.max(_, 1),
                          applicationName: u.intl.string(u.t.Uu8hke),
                      }),
                  }),
                  null != n &&
                      (0, r.jsx)("div", {
                          className: c.c,
                          children: (0, r.jsx)(a.SCx, {
                              size: "xs",
                              variant: "icon-only",
                              icon: a.UlM,
                              "aria-label": u.intl.string(u.t.cpT0Cq),
                              onClick: n,
                          }),
                      }),
              ],
          })
        : null;
}
