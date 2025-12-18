n.d(t, { Z: () => m }), n(388685);
var r = n(54381);
n(473749);
var l = n(120356),
    a = n.n(l),
    s = n(87290),
    o = n(381585),
    i = n(884697),
    c = n(953528),
    u = n(788822),
    d = n(388032),
    f = n(222194);
let g = (e, t, n) =>
        (0, i.L9)(e) ? d.intl.string(d.t["h/uBCR"]) : n() && null != t && "" !== t ? d.intl.string(d.t.soka7y) : void 0,
    b = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e,
            l = (0, c.QH)("collectibles_featured_block");
        return (0, r.jsx)("div", {
            className: a()(f.col2, f.centeredSection),
            children:
                null == n
                    ? void 0
                    : n.subblocks.map((e, n) => {
                          if (e.type === s.O.CATEGORY) {
                              let a = g(e.unpublishedAt, e.categoryStoreListingId, () =>
                                  ((e) => {
                                      switch (l) {
                                          case c.pj.NO_BADGE:
                                              return !1;
                                          case c.pj.FIRST_BLOCK_ONLY:
                                              return 0 === e;
                                          case c.pj.RIGHT_BLOCK_ONLY:
                                              return 1 === e;
                                          case c.pj.BOTH_BLOCKS:
                                              return !0;
                                          default:
                                              return !1;
                                      }
                                  })(n),
                              );
                              return (0, r.jsx)(
                                  o.k0,
                                  {
                                      newValue: {
                                          categoryPosition: 1,
                                          pageCategory: e.name,
                                          pageSection: "featured_block",
                                          tilePosition: n,
                                      },
                                      children: (0, r.jsx)(
                                          u.q,
                                          {
                                              subblock: e,
                                              badgeText: a,
                                              handleTransition: t,
                                          },
                                          e.categoryStoreListingId,
                                      ),
                                  },
                                  e.categoryStoreListingId,
                              );
                          }
                          return null;
                      }),
        });
    },
    p = (e) => {
        let { handleTransition: t, categories: n } = e,
            l = (0, c.QH)("collectibles_featured_block");
        if (null == n || n.length < 2) return null;
        let [s, i] = n,
            d = g(null == s ? void 0 : s.unpublishedAt, null == s ? void 0 : s.storeListingId, () => {
                switch (l) {
                    case c.pj.FIRST_BLOCK_ONLY:
                    case c.pj.BOTH_BLOCKS:
                        return !0;
                    default:
                        return !1;
                }
            }),
            b = g(null == i ? void 0 : i.unpublishedAt, null == i ? void 0 : i.storeListingId, () => {
                switch (l) {
                    case c.pj.RIGHT_BLOCK_ONLY:
                    case c.pj.BOTH_BLOCKS:
                        return !0;
                    default:
                        return !1;
                }
            });
        return (0, r.jsx)("div", {
            className: a()(f.col2, f.centeredSection),
            children: (0, r.jsxs)(o.k0, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != s ? s.name : null == i ? void 0 : i.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == s),
                },
                children: [
                    null != s &&
                        (0, r.jsx)(u.q, {
                            category: s,
                            badgeText: d,
                            handleTransition: t,
                        }),
                    null != i &&
                        (0, r.jsx)(u.q, {
                            category: i,
                            badgeText: b,
                            handleTransition: t,
                        }),
                ],
            }),
        });
    },
    m = (e) => {
        let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: s } = e;
        return t
            ? (0, r.jsxs)("div", {
                  className: a()(f.col2, f.centeredSection),
                  children: [
                      (0, r.jsx)("div", {
                          className: a()(f.featuredBlockSkeleton, f.featuredBlock),
                          children: (0, r.jsx)("div", { className: f.featuredBlockSkeletonLogo }),
                      }),
                      (0, r.jsx)("div", {
                          className: a()(f.featuredBlockSkeleton, f.featuredBlock),
                          children: (0, r.jsx)("div", { className: f.featuredBlockSkeletonLogo }),
                      }),
                  ],
              })
            : null != s
              ? (0, r.jsx)(b, {
                    featuredBlockRecord: s,
                    handleTransition: n,
                    isLoading: !1,
                })
              : (0, r.jsx)(p, {
                    categories: l,
                    handleTransition: n,
                    isLoading: !1,
                });
    };
