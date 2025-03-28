n.d(t, { Z: () => C }), n(47120);
var r = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
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
    m = n(39532);
let v = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e,
            o = b.Z.getCategory(i.T.ROBERT),
            u = (0, p.c)('CollectiblesFeedShop') && null != o,
            d = (0, c.H)('CollectiblesFeedShop'),
            v = b.Z.getCategory(i.T.ANIME_V2),
            _ = l.useMemo(() => h.NW.string(new Date() > g.gJ ? h.t.l0CjbW : h.t.uPewb2), []);
        return (0, r.jsx)('div', {
            className: a()(m.col2, m.centeredSection),
            children:
                null == n
                    ? void 0
                    : n.subblocks.map((e, n) => {
                          if (e.type === s.O.CATEGORY) {
                              let l = null != e.unpublishedAt ? h.NW.string(h.t['h/uBCQ']) : '1341506445245415424' === e.categoryStoreListingId ? h.NW.string(h.t.PsL3bW) : e.categoryStoreListingId === (null == v ? void 0 : v.storeListingId) ? h.NW.string(h.t['o/oRJC']) : void 0,
                                  a = u && e.categoryStoreListingId === (null == o ? void 0 : o.storeListingId) ? _ : l,
                                  i = 0 === n ? (d ? h.NW.string(h.t['x41/V1']) : l) : a;
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
    _ = (e) => {
        let { handleTransition: t, categories: n } = e,
            l = (0, p.c)('CollectiblesFeedShop') && null != b.Z.getCategory(i.T.ROBERT);
        if (null == n || n.length < 2) return u.Z.captureMessage('Collectible Featured Block requires at least 2 categories'), null;
        let [o, s] = n,
            c = (null == o ? void 0 : o.unpublishedAt) != null ? h.NW.string(h.t['h/uBCQ']) : void 0,
            v = h.NW.string(new Date() > g.gJ ? h.t.l0CjbW : h.t.uPewb2),
            _ = l ? v : h.NW.string(h.t['o/oRJC']);
        return (0, r.jsx)('div', {
            className: a()(m.col2, m.centeredSection),
            children: (0, r.jsxs)(d.k0, {
                newValue: {
                    categoryPosition: 1,
                    pageSection: 'featured_block'
                },
                children: [
                    null != o &&
                        (0, r.jsx)(f.q, {
                            category: o,
                            badgeText: c,
                            handleTransition: t
                        }),
                    null != s &&
                        (0, r.jsx)(f.q, {
                            category: s,
                            badgeText: _,
                            handleTransition: t
                        })
                ]
            })
        });
    },
    C = (e) => {
        let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: o } = e;
        return t
            ? (0, r.jsxs)('div', {
                  className: a()(m.col2, m.centeredSection),
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
            : null != o
              ? (0, r.jsx)(v, {
                    featuredBlockRecord: o,
                    handleTransition: n,
                    isLoading: !1
                })
              : (0, r.jsx)(_, {
                    categories: l,
                    handleTransition: n,
                    isLoading: !1
                });
    };
