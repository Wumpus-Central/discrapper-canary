n.d(t, { Z: () => g }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(533594),
    l = n(621082),
    c = n(481060),
    u = n(58385),
    d = n(889989),
    f = n(937615),
    p = n(624138),
    _ = n(150414),
    m = n(993553),
    h = n(426167);
function g(e) {
    let { cta: t, storeListing: n, className: a } = e,
        { applicationId: g, benefits: E, description: b } = n,
        y = i.useMemo(() => (null == n.thumbnail ? null : (0, _.q)(g, n.thumbnail, 256)), [g, n.thumbnail]),
        { data: O } = (0, u.X)(n.skuId),
        v = i.useMemo(() => {
            if (null == O || 0 === O.length) return null;
            let e = O[0];
            return (0, f.xg)(e);
        }, [O]);
    return null == v
        ? null
        : (0, r.jsxs)(s.l, {
              className: o()(h.wrapper, a),
              header: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)("div", {
                          className: h.headerTitle,
                          children: [
                              null != y &&
                                  (0, r.jsx)(c.Eep, {
                                      src: y.href,
                                      imageClassName: h.subscriptionImg,
                                      width: 48,
                                      height: 48,
                                  }),
                              (0, r.jsxs)("div", {
                                  children: [
                                      (0, r.jsx)(c.Heading, {
                                          variant: "heading-md/bold",
                                          children: n.summary,
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: "text-md/medium",
                                          children: v,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, p.Ew)(b) &&
                      (0, r.jsx)("div", {
                          className: h.description,
                          children: (0, r.jsx)(m.Z, {
                              variant: "text-sm/medium",
                              children: b,
                          }),
                      }),
                  null != E &&
                      E.length > 0 &&
                      (0, r.jsx)("div", {
                          className: h.benefits,
                          children: E.map((e) => {
                              let { id: t, name: n, description: i, icon: a } = e;
                              return (0, r.jsx)(
                                  l.Gm,
                                  {
                                      header: n,
                                      icon: (0, d.n)(g, a),
                                      description: i,
                                  },
                                  t,
                              );
                          }),
                      }),
              ],
          });
}
