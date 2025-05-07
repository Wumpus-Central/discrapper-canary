n.d(t, { Z: () => C }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(180650),
    s = n(87290),
    c = n(960048),
    u = n(381585),
    d = n(597688),
    f = n(506800),
    b = n(788822),
    p = n(215023),
    g = n(388032),
    h = n(806734);
let m = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e,
            i = d.Z.getCategory(o.T.ROBERT),
            c = (0, f.c)('CollectiblesFeedShop') && null != i,
            u = d.Z.getCategory(o.T.ANIME_V2),
            m = l.useMemo(() => g.intl.string(new Date() > p.gJ ? g.t.l0CjbW : g.t.uPewb2), []);
        return (0, r.jsx)('div', {
            className: a()(h.col2, h.centeredSection),
            children:
                null == n
                    ? void 0
                    : n.subblocks.map((e, n) => {
                          if (e.type === s.O.CATEGORY) {
                              let l = null != e.unpublishedAt ? g.intl.string(g.t['h/uBCQ']) : '1341506445245415424' === e.categoryStoreListingId ? g.intl.string(g.t.PsL3bW) : e.categoryStoreListingId === (null == u ? void 0 : u.storeListingId) ? g.intl.string(g.t['o/oRJC']) : void 0,
                                  a = c && e.categoryStoreListingId === (null == i ? void 0 : i.storeListingId) ? m : l;
                              return (0, r.jsx)(
                                  b.q,
                                  {
                                      subblock: e,
                                      badgeText: 0 === n ? l : a,
                                      handleTransition: t
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
            l = (0, f.c)('CollectiblesFeedShop') && null != d.Z.getCategory(o.T.ROBERT);
        if (null == n || n.length < 2) return c.Z.captureMessage('Collectible Featured Block requires at least 2 categories'), null;
        let [i, s] = n,
            m = (null == i ? void 0 : i.unpublishedAt) != null ? g.intl.string(g.t['h/uBCQ']) : void 0,
            _ = g.intl.string(new Date() > p.gJ ? g.t.l0CjbW : g.t.uPewb2),
            C = l ? _ : g.intl.string(g.t['o/oRJC']);
        return (0, r.jsx)('div', {
            className: a()(h.col2, h.centeredSection),
            children: (0, r.jsxs)(u.k0, {
                newValue: {
                    categoryPosition: 1,
                    pageSection: 'featured_block'
                },
                children: [
                    null != i &&
                        (0, r.jsx)(b.q, {
                            category: i,
                            badgeText: m,
                            handleTransition: t
                        }),
                    null != s &&
                        (0, r.jsx)(b.q, {
                            category: s,
                            badgeText: C,
                            handleTransition: t
                        })
                ]
            })
        });
    },
    C = (e) => {
        let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: i } = e;
        return t
            ? (0, r.jsxs)('div', {
                  className: a()(h.col2, h.centeredSection),
                  children: [
                      (0, r.jsx)('div', {
                          className: a()(h.skeleton, h.featuredBlock),
                          children: (0, r.jsx)('div', { className: h.skeletonBody })
                      }),
                      (0, r.jsx)('div', {
                          className: a()(h.skeleton, h.featuredBlock),
                          children: (0, r.jsx)('div', { className: h.skeletonBody })
                      })
                  ]
              })
            : null != i
              ? (0, r.jsx)(m, {
                    featuredBlockRecord: i,
                    handleTransition: n,
                    isLoading: !1
                })
              : (0, r.jsx)(_, {
                    categories: l,
                    handleTransition: n,
                    isLoading: !1
                });
    };
