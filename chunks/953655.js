n.d(t, { Z: () => b }), n(47120);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(180650),
    o = n(87290),
    d = n(960048),
    c = n(381585),
    u = n(597688),
    C = n(506800),
    h = n(788822),
    m = n(215023),
    p = n(388032),
    g = n(472739);
let f = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e,
            i = u.Z.getCategory(s.T.ROBERT),
            d = (0, C.c)('CollectiblesFeedShop') && null != i,
            c = u.Z.getCategory(s.T.ANIME_V2),
            f = r.useMemo(() => p.intl.string(new Date() > m.gJ ? p.t.l0CjbW : p.t.uPewb2), []);
        return (0, l.jsx)('div', {
            className: a()(g.section, g.col2, g.featuredBlocksContainer),
            children:
                null == n
                    ? void 0
                    : n.subblocks.map((e, n) => {
                          if (e.type === o.O.CATEGORY) {
                              let r = null != e.unpublishedAt ? p.intl.string(p.t['h/uBCQ']) : e.categoryStoreListingId === (null == c ? void 0 : c.storeListingId) ? p.intl.string(p.t['o/oRJC']) : void 0,
                                  a = d && e.categoryStoreListingId === (null == i ? void 0 : i.storeListingId) ? f : r;
                              return (0, l.jsx)(
                                  h.q,
                                  {
                                      subblock: e,
                                      badgeText: 0 === n ? r : a,
                                      handleTransition: t
                                  },
                                  e.categoryStoreListingId
                              );
                          }
                          return null;
                      })
        });
    },
    x = (e) => {
        let { handleTransition: t, categories: n } = e,
            r = (0, C.c)('CollectiblesFeedShop') && null != u.Z.getCategory(s.T.ROBERT);
        if (null == n || n.length < 2) return d.Z.captureMessage('Collectible Featured Block requires at least 2 categories'), null;
        let [i, o] = n,
            f = (null == i ? void 0 : i.unpublishedAt) != null ? p.intl.string(p.t['h/uBCQ']) : void 0,
            x = p.intl.string(new Date() > m.gJ ? p.t.l0CjbW : p.t.uPewb2),
            b = r ? x : p.intl.string(p.t['o/oRJC']);
        return (0, l.jsx)('div', {
            className: a()(g.section, g.col2, g.featuredBlocksContainer),
            children: (0, l.jsxs)(c.k0, {
                newValue: {
                    categoryPosition: 1,
                    pageSection: 'featured_block'
                },
                children: [
                    null != i &&
                        (0, l.jsx)(h.q, {
                            category: i,
                            badgeText: f,
                            handleTransition: t
                        }),
                    null != o &&
                        (0, l.jsx)(h.q, {
                            category: o,
                            badgeText: b,
                            handleTransition: t
                        })
                ]
            })
        });
    },
    b = (e) => {
        let { isLoading: t, handleTransition: n, categories: r, featuredBlockRecord: i } = e;
        return t
            ? (0, l.jsxs)('div', {
                  className: a()(g.section, g.col2, g.featuredBlocksContainer),
                  children: [
                      (0, l.jsx)('div', {
                          className: a()(g.skeleton, g.featuredBlock),
                          children: (0, l.jsx)('div', { className: g.skeletonBody })
                      }),
                      (0, l.jsx)('div', {
                          className: a()(g.skeleton, g.featuredBlock),
                          children: (0, l.jsx)('div', { className: g.skeletonBody })
                      })
                  ]
              })
            : null != i
              ? (0, l.jsx)(f, {
                    featuredBlockRecord: i,
                    handleTransition: n,
                    isLoading: !1
                })
              : (0, l.jsx)(x, {
                    categories: r,
                    handleTransition: n,
                    isLoading: !1
                });
    };
