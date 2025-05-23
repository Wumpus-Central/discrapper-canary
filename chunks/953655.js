n.d(t, { Z: () => C }), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(180650),
    s = n(87290),
    c = n(960048),
    u = n(381585),
    d = n(597688),
    p = n(506800),
    g = n(788822),
    b = n(215023),
    f = n(388032),
    h = n(806734);
let m = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e,
            a = d.Z.getCategory(o.T.ROBERT),
            c = (0, p.c)('CollectiblesFeedShop') && null != a,
            m = d.Z.getCategory(o.T.ANIME_V2),
            _ = l.useMemo(() => f.intl.string(new Date() > b.gJ ? f.t.l0CjbW : f.t.uPewb2), []);
        return (0, r.jsx)('div', {
            className: i()(h.col2, h.centeredSection),
            children:
                null == n
                    ? void 0
                    : n.subblocks.map((e, n) => {
                          if (e.type === s.O.CATEGORY) {
                              let l = null != e.unpublishedAt ? f.intl.string(f.t['h/uBCQ']) : '1341506445245415424' === e.categoryStoreListingId ? f.intl.string(f.t.PsL3bW) : e.categoryStoreListingId === (null == m ? void 0 : m.storeListingId) ? f.intl.string(f.t['o/oRJC']) : void 0,
                                  i = c && e.categoryStoreListingId === (null == a ? void 0 : a.storeListingId) ? _ : l;
                              return (0, r.jsx)(
                                  u.k0,
                                  {
                                      newValue: {
                                          categoryPosition: 1,
                                          pageCategory: e.name,
                                          pageSection: 'featured_block',
                                          tilePosition: n
                                      },
                                      children: (0, r.jsx)(
                                          g.q,
                                          {
                                              subblock: e,
                                              badgeText: 0 === n ? l : i,
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
    _ = (e) => {
        let { handleTransition: t, categories: n } = e,
            l = (0, p.c)('CollectiblesFeedShop') && null != d.Z.getCategory(o.T.ROBERT);
        if (null == n || n.length < 2) return c.Z.captureMessage('Collectible Featured Block requires at least 2 categories'), null;
        let [a, s] = n,
            m = (null == a ? void 0 : a.unpublishedAt) != null ? f.intl.string(f.t['h/uBCQ']) : void 0,
            _ = f.intl.string(new Date() > b.gJ ? f.t.l0CjbW : f.t.uPewb2),
            C = l ? _ : f.intl.string(f.t['o/oRJC']);
        return (0, r.jsx)('div', {
            className: i()(h.col2, h.centeredSection),
            children: (0, r.jsxs)(u.k0, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != a ? a.name : null == s ? void 0 : s.name,
                    pageSection: 'featured_block',
                    tilePosition: +(null == a)
                },
                children: [
                    null != a &&
                        (0, r.jsx)(g.q, {
                            category: a,
                            badgeText: m,
                            handleTransition: t
                        }),
                    null != s &&
                        (0, r.jsx)(g.q, {
                            category: s,
                            badgeText: C,
                            handleTransition: t
                        })
                ]
            })
        });
    },
    C = (e) => {
        let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: a } = e;
        return t
            ? (0, r.jsxs)('div', {
                  className: i()(h.col2, h.centeredSection),
                  children: [
                      (0, r.jsx)('div', {
                          className: i()(h.skeleton, h.featuredBlock),
                          children: (0, r.jsx)('div', { className: h.skeletonBody })
                      }),
                      (0, r.jsx)('div', {
                          className: i()(h.skeleton, h.featuredBlock),
                          children: (0, r.jsx)('div', { className: h.skeletonBody })
                      })
                  ]
              })
            : null != a
              ? (0, r.jsx)(m, {
                    featuredBlockRecord: a,
                    handleTransition: n,
                    isLoading: !1
                })
              : (0, r.jsx)(_, {
                    categories: l,
                    handleTransition: n,
                    isLoading: !1
                });
    };
