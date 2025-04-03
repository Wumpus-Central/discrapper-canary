n.d(t, { Z: () => C }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(180650),
    s = n(87290),
    c = n(442933),
    u = n(960048),
    d = n(381585),
    b = n(597688),
    p = n(506800),
    f = n(788822),
    g = n(215023),
    h = n(388032),
    m = n(806734);
let _ = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e,
            a = b.Z.getCategory(i.T.ROBERT),
            u = (0, p.c)('CollectiblesFeedShop') && null != a,
            d = (0, c.H)('CollectiblesFeedShop'),
            _ = b.Z.getCategory(i.T.ANIME_V2),
            v = l.useMemo(() => h.NW.string(new Date() > g.gJ ? h.t.l0CjbW : h.t.uPewb2), []);
        return (0, r.jsx)('div', {
            className: o()(m.col2, m.centeredSection),
            children:
                null == n
                    ? void 0
                    : n.subblocks.map((e, n) => {
                          if (e.type === s.O.CATEGORY) {
                              let l = null != e.unpublishedAt ? h.NW.string(h.t['h/uBCQ']) : '1341506445245415424' === e.categoryStoreListingId ? h.NW.string(h.t.PsL3bW) : e.categoryStoreListingId === (null == _ ? void 0 : _.storeListingId) ? h.NW.string(h.t['o/oRJC']) : void 0,
                                  o = u && e.categoryStoreListingId === (null == a ? void 0 : a.storeListingId) ? v : l,
                                  i = 0 === n ? (d ? h.NW.string(h.t['x41/V1']) : l) : o;
                              return (0, r.jsx)(
                                  f.q,
                                  {
                                      subblock: e,
                                      badgeText: i,
                                      handleTransition: t
                                  },
                                  e.categoryStoreListingId
                              );
                          }
                          return null;
                      })
        });
    },
    v = (e) => {
        let { handleTransition: t, categories: n } = e,
            l = (0, p.c)('CollectiblesFeedShop') && null != b.Z.getCategory(i.T.ROBERT);
        if (null == n || n.length < 2) return u.Z.captureMessage('Collectible Featured Block requires at least 2 categories'), null;
        let [a, s] = n,
            c = (null == a ? void 0 : a.unpublishedAt) != null ? h.NW.string(h.t['h/uBCQ']) : void 0,
            _ = h.NW.string(new Date() > g.gJ ? h.t.l0CjbW : h.t.uPewb2),
            v = l ? _ : h.NW.string(h.t['o/oRJC']);
        return (0, r.jsx)('div', {
            className: o()(m.col2, m.centeredSection),
            children: (0, r.jsxs)(d.k0, {
                newValue: {
                    categoryPosition: 1,
                    pageSection: 'featured_block'
                },
                children: [
                    null != a &&
                        (0, r.jsx)(f.q, {
                            category: a,
                            badgeText: c,
                            handleTransition: t
                        }),
                    null != s &&
                        (0, r.jsx)(f.q, {
                            category: s,
                            badgeText: v,
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
                  className: o()(m.col2, m.centeredSection),
                  children: [
                      (0, r.jsx)('div', {
                          className: o()(m.skeleton, m.featuredBlock),
                          children: (0, r.jsx)('div', { className: m.skeletonBody })
                      }),
                      (0, r.jsx)('div', {
                          className: o()(m.skeleton, m.featuredBlock),
                          children: (0, r.jsx)('div', { className: m.skeletonBody })
                      })
                  ]
              })
            : null != a
              ? (0, r.jsx)(_, {
                    featuredBlockRecord: a,
                    handleTransition: n,
                    isLoading: !1
                })
              : (0, r.jsx)(v, {
                    categories: l,
                    handleTransition: n,
                    isLoading: !1
                });
    };
