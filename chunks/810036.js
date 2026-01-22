n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(421380),
    o = n(397927),
    l = n(688810),
    c = n(170887),
    u = n(194509),
    d = n(65470),
    f = n(985018),
    p = n(657630),
    _ = n(547831),
    h = n(584386),
    m = n(182645);
let g = (e) => {
    let { className: t, location: n, analyticsLocation: i } = e,
        g = (0, c.A)({ location: "GiftNitro" }),
        { analyticsLocations: E } = (0, l.Ay)(n);
    return g
        ? (0, r.jsx)(l.f5, {
              value: E,
              children: (0, r.jsxs)(o.hLv, {
                  className: a()(_.kL, _.pm, t),
                  color: "purple",
                  children: [
                      (0, r.jsxs)("div", {
                          className: _.FS,
                          children: [
                              (0, r.jsx)(o.Heading, {
                                  variant: "heading-xxl/bold",
                                  className: _.R_,
                                  children: f.intl.string(f.t.Ve9Ge6),
                              }),
                              (0, r.jsx)(o.Text, {
                                  variant: "text-md/medium",
                                  children: f.intl.string(f.t.yQ06u1),
                              }),
                              (0, r.jsx)("div", {
                                  className: _.SB,
                                  children: (0, r.jsx)(d.A, {
                                      buttonTextOverride: f.intl.string(f.t.Ve9Ge6),
                                      premiumModalAnalyticsLocation: i,
                                      variant: "secondary",
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("img", {
                          src: m.A,
                          className: _._e,
                          alt: "gift nitro banner",
                      }),
                  ],
              }),
          })
        : (0, r.jsx)(l.f5, {
              value: E,
              children: (0, r.jsxs)("div", {
                  className: a()(p.kL, t),
                  children: [
                      (0, r.jsxs)("div", {
                          className: p.FS,
                          children: [
                              (0, r.jsx)(o.Heading, {
                                  variant: "heading-lg/extrabold",
                                  className: p.R_,
                                  children: f.intl.string(f.t.Ve9Ge6),
                              }),
                              (0, r.jsx)(o.Text, {
                                  variant: "text-sm/medium",
                                  children: f.intl.string(f.t.yQ06u1),
                              }),
                              (0, r.jsx)(u.A, {
                                  className: p.Tp,
                                  textOptions: {
                                      textOverride: f.intl.string(f.t.Ve9Ge6),
                                      textClassName: p.VV,
                                  },
                                  color: s.$n.Colors.CUSTOM,
                                  premiumModalAnalyticsLocation: i,
                              }),
                          ],
                      }),
                      (0, r.jsx)("img", {
                          src: h,
                          className: p._e,
                          alt: "gift nitro banner",
                      }),
                  ],
              }),
          });
};
