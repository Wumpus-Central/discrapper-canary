"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(262427),
    u = n(151252),
    c = n(733391),
    d = n(133015),
    _ = n(476438),
    f = n(985018),
    p = n(745263);
function h(e) {
    let { location: t, onDismiss: n, className: s } = e,
        { enabled: h } = (0, u.Z)({ location: t }),
        m = (0, d.n)({ location: t }),
        E = (0, _.q)(),
        g = m && h;
    return (i.useEffect(() => {
        g && (0, c.Xw)();
    }, [g]),
    g && null != E)
        ? (0, r.jsxs)(l.A, {
              Icon: o.Cp8,
              className: a()(p.U, s),
              children: [
                  (0, r.jsx)(o.EYj, {
                      variant: "text-xs/medium",
                      color: "currentColor",
                      children: f.intl.format(f.t["/bHQ84"], {
                          numDays: Math.max(E, 1),
                          applicationName: f.intl.string(f.t.Uu8hke),
                      }),
                  }),
                  null != n &&
                      (0, r.jsx)("div", {
                          className: p.c,
                          children: (0, r.jsx)(o.SCx, {
                              size: "xs",
                              variant: "icon-only",
                              icon: o.UlM,
                              "aria-label": f.intl.string(f.t.cpT0Cq),
                              onClick: n,
                          }),
                      }),
              ],
          })
        : null;
}
