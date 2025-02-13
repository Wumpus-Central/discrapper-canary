n.d(t, { Z: () => p });
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(561537),
    o = n(269210),
    c = n(481060),
    d = n(58385),
    u = n(889989),
    h = n(937615),
    m = n(624138),
    g = n(150414),
    x = n(993553),
    _ = n(460128);
function p(e) {
    let { cta: t, storeListing: n, className: l } = e,
        { applicationId: p, benefits: E, description: C } = n,
        N = s.useMemo(() => (null == n.thumbnail ? null : (0, g.q)(p, n.thumbnail, 256)), [p, n.thumbnail]),
        { data: f } = (0, d.X)(n.skuId),
        I = s.useMemo(() => {
            if (null == f || 0 === f.length) return null;
            let e = f[0];
            return (0, h.xg)(e);
        }, [f]);
    return null == I
        ? null
        : (0, i.jsxs)(a.l, {
              className: r()(_.wrapper, l),
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)('div', {
                          className: _.headerTitle,
                          children: [
                              null != N &&
                                  (0, i.jsx)(c.Eep, {
                                      src: N.href,
                                      imageClassName: _.subscriptionImg,
                                      width: 48,
                                      height: 48
                                  }),
                              (0, i.jsxs)('div', {
                                  children: [
                                      (0, i.jsx)(c.X6q, {
                                          variant: 'heading-md/bold',
                                          children: n.summary
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: 'text-md/medium',
                                          children: I
                                      })
                                  ]
                              })
                          ]
                      }),
                      t
                  ]
              }),
              children: [
                  !(0, m.Ew)(C) &&
                      (0, i.jsx)('div', {
                          className: _.description,
                          children: (0, i.jsx)(x.Z, {
                              variant: 'text-sm/medium',
                              children: C
                          })
                      }),
                  null != E &&
                      E.length > 0 &&
                      (0, i.jsx)('div', {
                          className: _.benefits,
                          children: E.map((e) => {
                              let { id: t, name: n, description: s, icon: l } = e;
                              return (0, i.jsx)(
                                  o.Gm,
                                  {
                                      header: n,
                                      icon: (0, u.n)(p, l),
                                      description: s
                                  },
                                  t
                              );
                          })
                      })
              ]
          });
}
