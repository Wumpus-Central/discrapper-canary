n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(180650),
    o = n(87290),
    d = n(960048),
    c = n(381585),
    u = n(597688),
    C = n(506800),
    h = n(788822),
    p = n(215023),
    m = n(388032),
    g = n(957726);
let f = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e,
            i = u.Z.getCategory(s.T.ROBERT),
            d = (0, C.c)('CollectiblesFeedShop') && null != i,
            c = u.Z.getCategory(s.T.ANIME_V2),
            f = l.useMemo(() => m.intl.string(new Date() > p.gJ ? m.t.l0CjbW : m.t.uPewb2), []);
        return (0, r.jsx)('div', {
            className: a()(g.section, g.col2, g.featuredBlocksContainer),
            children:
                null == n
                    ? void 0
                    : n.subblocks.map((e, n) => {
                          if (e.type === o.O.CATEGORY) {
                              let l = null != e.unpublishedAt ? m.intl.string(m.t['h/uBCQ']) : e.categoryStoreListingId === (null == c ? void 0 : c.storeListingId) ? m.intl.string(m.t['o/oRJC']) : void 0,
                                  a = d && e.categoryStoreListingId === (null == i ? void 0 : i.storeListingId) ? f : l;
                              return (0, r.jsx)(
                                  h.q,
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
    x = (e) => {
        let { handleTransition: t, categories: n } = e,
            l = (0, C.c)('CollectiblesFeedShop') && null != u.Z.getCategory(s.T.ROBERT);
        if (null == n || n.length < 2) return d.Z.captureMessage('Collectible Featured Block requires at least 2 categories'), null;
        let [i, o] = n,
            f = (null == i ? void 0 : i.unpublishedAt) != null ? m.intl.string(m.t['h/uBCQ']) : void 0,
            x = m.intl.string(new Date() > p.gJ ? m.t.l0CjbW : m.t.uPewb2),
            _ = l ? x : m.intl.string(m.t['o/oRJC']);
        return (0, r.jsx)('div', {
            className: a()(g.section, g.col2, g.featuredBlocksContainer),
            children: (0, r.jsxs)(c.k0, {
                newValue: {
                    categoryPosition: 1,
                    pageSection: 'featured_block'
                },
                children: [
                    null != i &&
                        (0, r.jsx)(h.q, {
                            category: i,
                            badgeText: f,
                            handleTransition: t
                        }),
                    null != o &&
                        (0, r.jsx)(h.q, {
                            category: o,
                            badgeText: _,
                            handleTransition: t
                        })
                ]
            })
        });
    },
    _ = (e) => {
        let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: i } = e;
        return t
            ? (0, r.jsxs)('div', {
                  className: a()(g.section, g.col2, g.featuredBlocksContainer),
                  children: [
                      (0, r.jsx)('div', {
                          className: a()(g.skeleton, g.featuredBlock),
                          children: (0, r.jsx)('div', { className: g.skeletonBody })
                      }),
                      (0, r.jsx)('div', {
                          className: a()(g.skeleton, g.featuredBlock),
                          children: (0, r.jsx)('div', { className: g.skeletonBody })
                      })
                  ]
              })
            : null != i
              ? (0, r.jsx)(f, {
                    featuredBlockRecord: i,
                    handleTransition: n,
                    isLoading: !1
                })
              : (0, r.jsx)(x, {
                    categories: l,
                    handleTransition: n,
                    isLoading: !1
                });
    };
