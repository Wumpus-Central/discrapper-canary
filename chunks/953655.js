n.d(t, { Z: () => C }), n(388685);
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    o = n(87290),
    s = n(960048),
    a = n(381585),
    c = n(953528),
    u = n(788822),
    d = n(388032),
    g = n(310582);
let f = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e,
            l = (0, c.QH)("collectibles_featured_block");
        return (0, r.jsx)("div", {
            className: i()(g.col2, g.centeredSection),
            children:
                null == n
                    ? void 0
                    : n.subblocks.map((e, n) => {
                          if (e.type === o.O.CATEGORY) {
                              let i =
                                  null != e.unpublishedAt
                                      ? d.intl.string(d.t["h/uBCR"])
                                      : ((e) => {
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
                                          })(n)
                                        ? d.intl.string(d.t.soka7y)
                                        : void 0;
                              return (0, r.jsx)(
                                  a.k0,
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
                                              badgeText: i,
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
        if (null == n || n.length < 2)
            return s.Z.captureMessage("Collectible Featured Block requires at least 2 categories"), null;
        let [o, f] = n,
            p =
                (null == o ? void 0 : o.unpublishedAt) != null
                    ? d.intl.string(d.t["h/uBCR"])
                    : (() => {
                            switch (l) {
                                case c.pj.FIRST_BLOCK_ONLY:
                                case c.pj.BOTH_BLOCKS:
                                    return !0;
                                default:
                                    return !1;
                            }
                        })() &&
                        (null == o ? void 0 : o.storeListingId) != null &&
                        "" !== o.storeListingId
                      ? d.intl.string(d.t.soka7y)
                      : void 0,
            C =
                (null == f ? void 0 : f.unpublishedAt) != null
                    ? d.intl.string(d.t["h/uBCR"])
                    : (() => {
                            switch (l) {
                                case c.pj.RIGHT_BLOCK_ONLY:
                                case c.pj.BOTH_BLOCKS:
                                    return !0;
                                default:
                                    return !1;
                            }
                        })() &&
                        (null == f ? void 0 : f.storeListingId) != null &&
                        "" !== f.storeListingId
                      ? d.intl.string(d.t.soka7y)
                      : d.intl.string(d.t["o/oRJB"]);
        return (0, r.jsx)("div", {
            className: i()(g.col2, g.centeredSection),
            children: (0, r.jsxs)(a.k0, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != o ? o.name : null == f ? void 0 : f.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == o),
                },
                children: [
                    null != o &&
                        (0, r.jsx)(u.q, {
                            category: o,
                            badgeText: p,
                            handleTransition: t,
                        }),
                    null != f &&
                        (0, r.jsx)(u.q, {
                            category: f,
                            badgeText: C,
                            handleTransition: t,
                        }),
                ],
            }),
        });
    },
    C = (e) => {
        let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: o } = e;
        return t
            ? (0, r.jsxs)("div", {
                  className: i()(g.col2, g.centeredSection),
                  children: [
                      (0, r.jsx)("div", {
                          className: i()(g.skeleton, g.featuredBlock),
                          children: (0, r.jsx)("div", { className: g.skeletonBody }),
                      }),
                      (0, r.jsx)("div", {
                          className: i()(g.skeleton, g.featuredBlock),
                          children: (0, r.jsx)("div", { className: g.skeletonBody }),
                      }),
                  ],
              })
            : null != o
              ? (0, r.jsx)(f, {
                    featuredBlockRecord: o,
                    handleTransition: n,
                    isLoading: !1,
                })
              : (0, r.jsx)(p, {
                    categories: l,
                    handleTransition: n,
                    isLoading: !1,
                });
    };
