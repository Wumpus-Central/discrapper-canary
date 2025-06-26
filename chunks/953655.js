n.d(t, { Z: () => g }), n(388685);
var r = n(255367);
n(73800);
var l = n(120356),
    a = n.n(l),
    i = n(87290),
    o = n(960048),
    s = n(381585),
    c = n(788822),
    u = n(388032),
    d = n(806734);
let p = ['1366494385738354769', '1385035256125591633'],
    f = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e;
        return (0, r.jsx)('div', {
            className: a()(d.col2, d.centeredSection),
            children:
                null == n
                    ? void 0
                    : n.subblocks.map((e, n) => {
                          if (e.type === i.O.CATEGORY) {
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
    b = (e) => {
        let { handleTransition: t, categories: n } = e;
        if (null == n || n.length < 2) return o.Z.captureMessage('Collectible Featured Block requires at least 2 categories'), null;
        let [l, i] = n,
            p = (null == l ? void 0 : l.unpublishedAt) != null ? u.intl.string(u.t['h/uBCQ']) : void 0;
        return (0, r.jsx)('div', {
            className: a()(d.col2, d.centeredSection),
            children: (0, r.jsxs)(s.k0, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != l ? l.name : null == i ? void 0 : i.name,
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
                    null != i &&
                        (0, r.jsx)(c.q, {
                            category: i,
                            badgeText: u.intl.string(u.t['o/oRJC']),
                            handleTransition: t
                        })
                ]
            })
        });
    },
    g = (e) => {
        let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: i } = e;
        return t
            ? (0, r.jsxs)('div', {
                  className: a()(d.col2, d.centeredSection),
                  children: [
                      (0, r.jsx)('div', {
                          className: a()(d.skeleton, d.featuredBlock),
                          children: (0, r.jsx)('div', { className: d.skeletonBody })
                      }),
                      (0, r.jsx)('div', {
                          className: a()(d.skeleton, d.featuredBlock),
                          children: (0, r.jsx)('div', { className: d.skeletonBody })
                      })
                  ]
              })
            : null != i
              ? (0, r.jsx)(f, {
                    featuredBlockRecord: i,
                    handleTransition: n,
                    isLoading: !1
                })
              : (0, r.jsx)(b, {
                    categories: l,
                    handleTransition: n,
                    isLoading: !1
                });
    };
