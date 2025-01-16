n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(180650),
    o = n(87290),
    c = n(960048),
    d = n(381585),
    u = n(597688),
    m = n(606414),
    h = n(788822),
    g = n(215023),
    p = n(388032),
    f = n(218142);
let C = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e,
            i = u.Z.getCategory(s.T.ROBERT),
            c = (0, m.c)('CollectiblesFeedShop') && null != i,
            d = u.Z.getCategory(s.T.ANIME_V2),
            C = a.useMemo(() => p.intl.string(new Date() > g.gJ ? p.t.l0CjbW : p.t.uPewb2), []);
        return (0, r.jsx)('div', {
            className: l()(f.section, f.col2, f.featuredBlocksContainer),
            children:
                null == n
                    ? void 0
                    : n.subblocks.map((e, n) => {
                          if (e.type === o.O.CATEGORY) {
                              let a = null != e.unpublishedAt ? p.intl.string(p.t['h/uBCQ']) : e.categoryStoreListingId === (null == d ? void 0 : d.storeListingId) ? p.intl.string(p.t['o/oRJC']) : void 0,
                                  l = c && e.categoryStoreListingId === (null == i ? void 0 : i.storeListingId) ? C : a;
                              return (0, r.jsx)(
                                  h.q,
                                  {
                                      subblock: e,
                                      badgeText: 0 === n ? a : l,
                                      handleTransition: t
                                  },
                                  e.categoryStoreListingId
                              );
                          }
                          return null;
                      })
        });
    },
    b = (e) => {
        let { handleTransition: t, categories: n } = e,
            a = (0, m.c)('CollectiblesFeedShop') && null != u.Z.getCategory(s.T.ROBERT);
        if (null == n || n.length < 2) return c.Z.captureMessage('Collectible Featured Block requires at least 2 categories'), null;
        let [i, o] = n,
            C = (null == i ? void 0 : i.unpublishedAt) != null ? p.intl.string(p.t['h/uBCQ']) : void 0,
            b = p.intl.string(new Date() > g.gJ ? p.t.l0CjbW : p.t.uPewb2),
            v = a ? b : p.intl.string(p.t['o/oRJC']);
        return (0, r.jsx)('div', {
            className: l()(f.section, f.col2, f.featuredBlocksContainer),
            children: (0, r.jsxs)(d.k0, {
                newValue: {
                    categoryPosition: 1,
                    pageSection: 'featured_block'
                },
                children: [
                    null != i &&
                        (0, r.jsx)(h.q, {
                            category: i,
                            badgeText: C,
                            handleTransition: t
                        }),
                    null != o &&
                        (0, r.jsx)(h.q, {
                            category: o,
                            badgeText: v,
                            handleTransition: t
                        })
                ]
            })
        });
    };
t.Z = (e) => {
    let { isLoading: t, handleTransition: n, categories: a, featuredBlockRecord: i } = e;
    return t
        ? (0, r.jsxs)('div', {
              className: l()(f.section, f.col2, f.featuredBlocksContainer),
              children: [
                  (0, r.jsx)('div', {
                      className: l()(f.skeleton, f.featuredBlock),
                      children: (0, r.jsx)('div', { className: f.skeletonBody })
                  }),
                  (0, r.jsx)('div', {
                      className: l()(f.skeleton, f.featuredBlock),
                      children: (0, r.jsx)('div', { className: f.skeletonBody })
                  })
              ]
          })
        : null != i
          ? (0, r.jsx)(C, {
                featuredBlockRecord: i,
                handleTransition: n,
                isLoading: !1
            })
          : (0, r.jsx)(b, {
                categories: a,
                handleTransition: n,
                isLoading: !1
            });
};
