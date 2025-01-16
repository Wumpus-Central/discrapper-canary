n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(561537),
    o = n(269210),
    c = n(481060),
    d = n(58385),
    u = n(889989),
    m = n(937615),
    g = n(624138),
    h = n(150414),
    p = n(993553),
    x = n(525981);
function f(e) {
    let { cta: t, storeListing: n, className: s } = e,
        { applicationId: f, benefits: _, description: E } = n,
        C = r.useMemo(() => (null == n.thumbnail ? null : (0, h.q)(f, n.thumbnail, 256)), [f, n.thumbnail]),
        { data: T } = (0, d.X)(n.skuId),
        S = r.useMemo(() => {
            if (null == T || 0 === T.length) return null;
            let e = T[0];
            return (0, m.xg)(e);
        }, [T]);
    return null == S
        ? null
        : (0, i.jsxs)(l.l, {
              className: a()(x.wrapper, s),
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)('div', {
                          className: x.headerTitle,
                          children: [
                              null != C &&
                                  (0, i.jsx)(c.Image, {
                                      src: C.href,
                                      imageClassName: x.subscriptionImg,
                                      width: 48,
                                      height: 48
                                  }),
                              (0, i.jsxs)('div', {
                                  children: [
                                      (0, i.jsx)(c.Heading, {
                                          variant: 'heading-md/bold',
                                          children: n.summary
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: 'text-md/medium',
                                          children: S
                                      })
                                  ]
                              })
                          ]
                      }),
                      t
                  ]
              }),
              children: [
                  !(0, g.Ew)(E) &&
                      (0, i.jsx)('div', {
                          className: x.description,
                          children: (0, i.jsx)(p.Z, {
                              variant: 'text-sm/medium',
                              children: E
                          })
                      }),
                  null != _ &&
                      _.length > 0 &&
                      (0, i.jsx)('div', {
                          className: x.benefits,
                          children: _.map((e) => {
                              let { id: t, name: n, description: r, icon: s } = e;
                              return (0, i.jsx)(
                                  o.Gm,
                                  {
                                      header: n,
                                      icon: (0, u.n)(f, s),
                                      description: r
                                  },
                                  t
                              );
                          })
                      })
              ]
          });
}
