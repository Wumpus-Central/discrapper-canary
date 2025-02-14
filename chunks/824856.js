n.d(t, { Z: () => p });
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(561537),
    o = n(269210),
    c = n(481060),
    d = n(58385),
    u = n(889989),
    m = n(937615),
    h = n(624138),
    g = n(150414),
    x = n(993553),
    _ = n(791692);
function p(e) {
    let { cta: t, storeListing: n, className: r } = e,
        { applicationId: p, benefits: E, description: C } = n,
        f = s.useMemo(() => (null == n.thumbnail ? null : (0, g.q)(p, n.thumbnail, 256)), [p, n.thumbnail]),
        { data: T } = (0, d.X)(n.skuId),
        N = s.useMemo(() => {
            if (null == T || 0 === T.length) return null;
            let e = T[0];
            return (0, m.xg)(e);
        }, [T]);
    return null == N
        ? null
        : (0, i.jsxs)(a.l, {
              className: l()(_.wrapper, r),
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)('div', {
                          className: _.headerTitle,
                          children: [
                              null != f &&
                                  (0, i.jsx)(c.Eep, {
                                      src: f.href,
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
                                          children: N
                                      })
                                  ]
                              })
                          ]
                      }),
                      t
                  ]
              }),
              children: [
                  !(0, h.Ew)(C) &&
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
                              let { id: t, name: n, description: s, icon: r } = e;
                              return (0, i.jsx)(
                                  o.Gm,
                                  {
                                      header: n,
                                      icon: (0, u.n)(p, r),
                                      description: s
                                  },
                                  t
                              );
                          })
                      })
              ]
          });
}
