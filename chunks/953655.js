(n.d(t, { Z: () => h }), n(388685));
var r = n(255367);
n(73800);
var l = n(120356),
    o = n.n(l),
    a = n(87290),
    i = n(960048),
    s = n(381585),
    c = n(788822),
    u = n(388032),
    d = n(806734);
let p = ['1366494385738354769', '1385035256125591633'],
    g = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e;
        return (0, r.jsx)('div', {
            className: o()(d.col2, d.centeredSection),
            children:
                null == n
                    ? void 0
                    : n.subblocks.map((e, n) => {
                          if (e.type === a.O.CATEGORY) {
                              let l = null != e.unpublishedAt ? u.intl.string(u.t['h/uBCQ']) : p.includes(e.categoryStoreListingId) ? u.intl.string(u.t['soka7+']) : void 0;
                              return (0, r.jsx)(
                                  s.k0,
                                  {
                                      newValue: {
                                          categoryPosition: 1,
                                          pageCategory: e.name,
                                          pageSection: 'featured_block',
                                          tilePosition: n
                                      },
                                      children: (0, r.jsx)(
                                          c.q,
                                          {
                                              subblock: e,
                                              badgeText: l,
                                              handleTransition: t
                                          },
                                          e.categoryStoreListingId
                                      )
                                  },
                                  e.categoryStoreListingId
                              );
                          }
                          return null;
                      })
        });
    },
    f = (e) => {
        let { handleTransition: t, categories: n } = e;
        if (null == n || n.length < 2) return (i.Z.captureMessage('Collectible Featured Block requires at least 2 categories'), null);
        let [l, a] = n,
            p = (null == l ? void 0 : l.unpublishedAt) != null ? u.intl.string(u.t['h/uBCQ']) : void 0;
        return (0, r.jsx)('div', {
            className: o()(d.col2, d.centeredSection),
            children: (0, r.jsxs)(s.k0, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != l ? l.name : null == a ? void 0 : a.name,
                    pageSection: 'featured_block',
                    tilePosition: +(null == l)
                },
                children: [
                    null != l &&
                        (0, r.jsx)(c.q, {
                            category: l,
                            badgeText: p,
                            handleTransition: t
                        }),
                    null != a &&
                        (0, r.jsx)(c.q, {
                            category: a,
                            badgeText: u.intl.string(u.t['o/oRJC']),
                            handleTransition: t
                        })
                ]
            })
        });
    },
    h = (e) => {
        let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: a } = e;
        return t
            ? (0, r.jsxs)('div', {
                  className: o()(d.col2, d.centeredSection),
                  children: [
                      (0, r.jsx)('div', {
                          className: o()(d.skeleton, d.featuredBlock),
                          children: (0, r.jsx)('div', { className: d.skeletonBody })
                      }),
                      (0, r.jsx)('div', {
                          className: o()(d.skeleton, d.featuredBlock),
                          children: (0, r.jsx)('div', { className: d.skeletonBody })
                      })
                  ]
              })
            : null != a
              ? (0, r.jsx)(g, {
                    featuredBlockRecord: a,
                    handleTransition: n,
                    isLoading: !1
                })
              : (0, r.jsx)(f, {
                    categories: l,
                    handleTransition: n,
                    isLoading: !1
                });
    };
