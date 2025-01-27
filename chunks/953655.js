n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(180650),
    o = n(87290),
    c = n(960048),
    d = n(381585),
    u = n(597688),
    C = n(606414),
    h = n(788822),
    p = n(215023),
    f = n(388032),
    m = n(218142);
let g = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e,
            l = u.Z.getCategory(s.T.ROBERT),
            c = (0, C.c)('CollectiblesFeedShop') && null != l,
            d = u.Z.getCategory(s.T.ANIME_V2),
            g = i.useMemo(() => f.intl.string(new Date() > p.gJ ? f.t.l0CjbW : f.t.uPewb2), []);
        return (0, r.jsx)('div', {
            className: a()(m.section, m.col2, m.featuredBlocksContainer),
            children:
                null == n
                    ? void 0
                    : n.subblocks.map((e, n) => {
                          if (e.type === o.O.CATEGORY) {
                              let i = null != e.unpublishedAt ? f.intl.string(f.t['h/uBCQ']) : e.categoryStoreListingId === (null == d ? void 0 : d.storeListingId) ? f.intl.string(f.t['o/oRJC']) : void 0,
                                  a = c && e.categoryStoreListingId === (null == l ? void 0 : l.storeListingId) ? g : i;
                              return (0, r.jsx)(
                                  h.q,
                                  {
                                      subblock: e,
                                      badgeText: 0 === n ? i : a,
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
            i = (0, C.c)('CollectiblesFeedShop') && null != u.Z.getCategory(s.T.ROBERT);
        if (null == n || n.length < 2) return c.Z.captureMessage('Collectible Featured Block requires at least 2 categories'), null;
        let [l, o] = n,
            g = (null == l ? void 0 : l.unpublishedAt) != null ? f.intl.string(f.t['h/uBCQ']) : void 0,
            b = f.intl.string(new Date() > p.gJ ? f.t.l0CjbW : f.t.uPewb2),
            x = i ? b : f.intl.string(f.t['o/oRJC']);
        return (0, r.jsx)('div', {
            className: a()(m.section, m.col2, m.featuredBlocksContainer),
            children: (0, r.jsxs)(d.k0, {
                newValue: {
                    categoryPosition: 1,
                    pageSection: 'featured_block'
                },
                children: [
                    null != l &&
                        (0, r.jsx)(h.q, {
                            category: l,
                            badgeText: g,
                            handleTransition: t
                        }),
                    null != o &&
                        (0, r.jsx)(h.q, {
                            category: o,
                            badgeText: x,
                            handleTransition: t
                        })
                ]
            })
        });
    };
t.Z = (e) => {
    let { isLoading: t, handleTransition: n, categories: i, featuredBlockRecord: l } = e;
    return t
        ? (0, r.jsxs)('div', {
              className: a()(m.section, m.col2, m.featuredBlocksContainer),
              children: [
                  (0, r.jsx)('div', {
                      className: a()(m.skeleton, m.featuredBlock),
                      children: (0, r.jsx)('div', { className: m.skeletonBody })
                  }),
                  (0, r.jsx)('div', {
                      className: a()(m.skeleton, m.featuredBlock),
                      children: (0, r.jsx)('div', { className: m.skeletonBody })
                  })
              ]
          })
        : null != l
          ? (0, r.jsx)(g, {
                featuredBlockRecord: l,
                handleTransition: n,
                isLoading: !1
            })
          : (0, r.jsx)(b, {
                categories: i,
                handleTransition: n,
                isLoading: !1
            });
};
