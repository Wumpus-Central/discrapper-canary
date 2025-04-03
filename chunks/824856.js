n.d(t, { Z: () => b }), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(561537),
    o = n(269210),
    c = n(481060),
    d = n(58385),
    u = n(889989),
    m = n(937615),
    g = n(624138),
    p = n(150414),
    h = n(993553),
    f = n(53524);
function b(e) {
    let { cta: t, storeListing: n, className: s } = e,
        { applicationId: b, benefits: N, description: x } = n,
        _ = i.useMemo(() => (null == n.thumbnail ? null : (0, p.q)(b, n.thumbnail, 256)), [b, n.thumbnail]),
        { data: E } = (0, d.X)(n.skuId),
        j = i.useMemo(() => {
            if (null == E || 0 === E.length) return null;
            let e = E[0];
            return (0, m.xg)(e);
        }, [E]);
    return null == j
        ? null
        : (0, r.jsxs)(l.l, {
              className: a()(f.wrapper, s),
              header: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)('div', {
                          className: f.headerTitle,
                          children: [
                              null != _ &&
                                  (0, r.jsx)(c.Eep, {
                                      src: _.href,
                                      imageClassName: f.subscriptionImg,
                                      width: 48,
                                      height: 48
                                  }),
                              (0, r.jsxs)('div', {
                                  children: [
                                      (0, r.jsx)(c.X6q, {
                                          variant: 'heading-md/bold',
                                          children: n.summary
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: 'text-md/medium',
                                          children: j
                                      })
                                  ]
                              })
                          ]
                      }),
                      t
                  ]
              }),
              children: [
                  !(0, g.Ew)(x) &&
                      (0, r.jsx)('div', {
                          className: f.description,
                          children: (0, r.jsx)(h.Z, {
                              variant: 'text-sm/medium',
                              children: x
                          })
                      }),
                  null != N &&
                      N.length > 0 &&
                      (0, r.jsx)('div', {
                          className: f.benefits,
                          children: N.map((e) => {
                              let { id: t, name: n, description: i, icon: s } = e;
                              return (0, r.jsx)(
                                  o.Gm,
                                  {
                                      header: n,
                                      icon: (0, u.n)(b, s),
                                      description: i
                                  },
                                  t
                              );
                          })
                      })
              ]
          });
}
