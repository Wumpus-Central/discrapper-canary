n.d(t, { Z: () => v }), n(388685);
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
    m = n(388032),
    h = n(806734);
let _ = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e,
            a = b.Z.getCategory(i.T.ROBERT),
            u = (0, p.c)('CollectiblesFeedShop') && null != a,
            d = (0, c.H)('CollectiblesFeedShop'),
            _ = b.Z.getCategory(i.T.ANIME_V2),
            C = l.useMemo(() => m.NW.string(new Date() > g.gJ ? m.t.l0CjbW : m.t.uPewb2), []);
        return (0, r.jsx)('div', {
            className: o()(h.col2, h.centeredSection),
            children:
                null == n
                    ? void 0
                    : n.subblocks.map((e, n) => {
                          if (e.type === s.O.CATEGORY) {
                              let l = null != e.unpublishedAt ? m.NW.string(m.t['h/uBCQ']) : '1341506445245415424' === e.categoryStoreListingId ? m.NW.string(m.t.PsL3bW) : e.categoryStoreListingId === (null == _ ? void 0 : _.storeListingId) ? m.NW.string(m.t['o/oRJC']) : void 0,
                                  o = u && e.categoryStoreListingId === (null == a ? void 0 : a.storeListingId) ? C : l,
                                  i = 0 === n ? (d ? m.NW.string(m.t['x41/V1']) : l) : o;
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
    C = (e) => {
        let { handleTransition: t, categories: n } = e,
            l = (0, p.c)('CollectiblesFeedShop') && null != b.Z.getCategory(i.T.ROBERT);
        if (null == n || n.length < 2) return u.Z.captureMessage('Collectible Featured Block requires at least 2 categories'), null;
        let [a, s] = n,
            c = (null == a ? void 0 : a.unpublishedAt) != null ? m.NW.string(m.t['h/uBCQ']) : void 0,
            _ = m.NW.string(new Date() > g.gJ ? m.t.l0CjbW : m.t.uPewb2),
            C = l ? _ : m.NW.string(m.t['o/oRJC']);
        return (0, r.jsx)('div', {
            className: o()(h.col2, h.centeredSection),
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
                            badgeText: C,
                            handleTransition: t
                        })
                ]
            })
        });
    },
    v = (e) => {
        let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: a } = e;
        return t
            ? (0, r.jsxs)('div', {
                  className: o()(h.col2, h.centeredSection),
                  children: [
                      (0, r.jsx)('div', {
                          className: o()(h.skeleton, h.featuredBlock),
                          children: (0, r.jsx)('div', { className: h.skeletonBody })
                      }),
                      (0, r.jsx)('div', {
                          className: o()(h.skeleton, h.featuredBlock),
                          children: (0, r.jsx)('div', { className: h.skeletonBody })
                      })
                  ]
              })
            : null != a
              ? (0, r.jsx)(_, {
                    featuredBlockRecord: a,
                    handleTransition: n,
                    isLoading: !1
                })
              : (0, r.jsx)(C, {
                    categories: l,
                    handleTransition: n,
                    isLoading: !1
                });
    };
