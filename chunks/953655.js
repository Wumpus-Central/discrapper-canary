(r.d(t, { Z: () => h }), r(388685));
var n = r(255367);
r(73800);
var l = r(120356),
    o = r.n(l),
    i = r(87290),
    a = r(960048),
    s = r(381585),
    c = r(788822),
    u = r(388032),
    d = r(806734);
let p = ['1366494385738354769', '1385035256125591633'],
    f = (e) => {
        let { handleTransition: t, featuredBlockRecord: r } = e;
        return (0, n.jsx)('div', {
            className: o()(d.col2, d.centeredSection),
            children:
                null == r
                    ? void 0
                    : r.subblocks.map((e, r) => {
                          if (e.type === i.O.CATEGORY) {
                              let l = null != e.unpublishedAt ? u.intl.string(u.t['h/uBCQ']) : p.includes(e.categoryStoreListingId) ? u.intl.string(u.t['soka7+']) : void 0;
                              return (0, n.jsx)(
                                  s.k0,
                                  {
                                      newValue: {
                                          categoryPosition: 1,
                                          pageCategory: e.name,
                                          pageSection: 'featured_block',
                                          tilePosition: r
                                      },
                                      children: (0, n.jsx)(
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
    g = (e) => {
        let { handleTransition: t, categories: r } = e;
        if (null == r || r.length < 2) return (a.Z.captureMessage('Collectible Featured Block requires at least 2 categories'), null);
        let [l, i] = r,
            p = (null == l ? void 0 : l.unpublishedAt) != null ? u.intl.string(u.t['h/uBCQ']) : void 0;
        return (0, n.jsx)('div', {
            className: o()(d.col2, d.centeredSection),
            children: (0, n.jsxs)(s.k0, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != l ? l.name : null == i ? void 0 : i.name,
                    pageSection: 'featured_block',
                    tilePosition: +(null == l)
                },
                children: [
                    null != l &&
                        (0, n.jsx)(c.q, {
                            category: l,
                            badgeText: p,
                            handleTransition: t
                        }),
                    null != i &&
                        (0, n.jsx)(c.q, {
                            category: i,
                            badgeText: u.intl.string(u.t['o/oRJC']),
                            handleTransition: t
                        })
                ]
            })
        });
    },
    h = (e) => {
        let { isLoading: t, handleTransition: r, categories: l, featuredBlockRecord: i } = e;
        return t
            ? (0, n.jsxs)('div', {
                  className: o()(d.col2, d.centeredSection),
                  children: [
                      (0, n.jsx)('div', {
                          className: o()(d.skeleton, d.featuredBlock),
                          children: (0, n.jsx)('div', { className: d.skeletonBody })
                      }),
                      (0, n.jsx)('div', {
                          className: o()(d.skeleton, d.featuredBlock),
                          children: (0, n.jsx)('div', { className: d.skeletonBody })
                      })
                  ]
              })
            : null != i
              ? (0, n.jsx)(f, {
                    featuredBlockRecord: i,
                    handleTransition: r,
                    isLoading: !1
                })
              : (0, n.jsx)(g, {
                    categories: l,
                    handleTransition: r,
                    isLoading: !1
                });
    };
