n.d(t, { Z: () => b }), n(953529);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(561537),
    o = n(269210),
    c = n(481060),
    d = n(58385),
    u = n(889989),
    m = n(937615),
    p = n(624138),
    g = n(150414),
    h = n(993553),
    f = n(53524);
function b(e) {
    let { cta: t, storeListing: n, className: s } = e,
        { applicationId: b, benefits: _, description: x } = n,
        E = r.useMemo(() => (null == n.thumbnail ? null : (0, g.q)(b, n.thumbnail, 256)), [b, n.thumbnail]),
        { data: C } = (0, d.X)(n.skuId),
        j = r.useMemo(() => {
            if (null == C || 0 === C.length) return null;
            let e = C[0];
            return (0, m.xg)(e);
        }, [C]);
    return null == j
        ? null
        : (0, i.jsxs)(a.l, {
              className: l()(f.wrapper, s),
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)('div', {
                          className: f.headerTitle,
                          children: [
                              null != E &&
                                  (0, i.jsx)(c.Eep, {
                                      src: E.href,
                                      imageClassName: f.subscriptionImg,
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
                  !(0, p.Ew)(x) &&
                      (0, i.jsx)('div', {
                          className: f.description,
                          children: (0, i.jsx)(h.Z, {
                              variant: 'text-sm/medium',
                              children: x
                          })
                      }),
                  null != _ &&
                      _.length > 0 &&
                      (0, i.jsx)('div', {
                          className: f.benefits,
                          children: _.map((e) => {
                              let { id: t, name: n, description: r, icon: s } = e;
                              return (0, i.jsx)(
                                  o.Gm,
                                  {
                                      header: n,
                                      icon: (0, u.n)(b, s),
                                      description: r
                                  },
                                  t
                              );
                          })
                      })
              ]
          });
}
