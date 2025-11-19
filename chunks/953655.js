n.d(t, { Z: () => m }), n(388685);
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    a = n(87290),
    s = n(960048),
    o = n(381585),
    c = n(953528),
    u = n(788822),
    d = n(388032),
    g = n(687983);
let p = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e,
            l = (0, c.QH)("collectibles_featured_block");
        return (0, r.jsx)("div", {
            className: i()(g.col2, g.centeredSection),
            children:
                null == n
                    ? void 0
                    : n.subblocks.map((e, n) => {
                          if (e.type === a.O.CATEGORY) {
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
    f = (e) => {
        let { handleTransition: t, categories: n } = e,
            l = (0, c.QH)("collectibles_featured_block");
        if (null == n || n.length < 2)
            return s.Z.captureMessage("Collectible Featured Block requires at least 2 categories"), null;
        let [a, p] = n,
            f =
                (null == a ? void 0 : a.unpublishedAt) != null
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
                        (null == a ? void 0 : a.storeListingId) != null &&
                        "" !== a.storeListingId
                      ? d.intl.string(d.t.soka7y)
                      : void 0,
            m =
                (null == p ? void 0 : p.unpublishedAt) != null
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
                        (null == p ? void 0 : p.storeListingId) != null &&
                        "" !== p.storeListingId
                      ? d.intl.string(d.t.soka7y)
                      : d.intl.string(d.t["o/oRJB"]);
        return (0, r.jsx)("div", {
            className: i()(g.col2, g.centeredSection),
            children: (0, r.jsxs)(o.k0, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != a ? a.name : null == p ? void 0 : p.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == a),
                },
                children: [
                    null != a &&
                        (0, r.jsx)(u.q, {
                            category: a,
                            badgeText: f,
                            handleTransition: t,
                        }),
                    null != p &&
                        (0, r.jsx)(u.q, {
                            category: p,
                            badgeText: m,
                            handleTransition: t,
                        }),
                ],
            }),
        });
    },
    m = (e) => {
        let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: a } = e;
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
            : null != a
              ? (0, r.jsx)(p, {
                    featuredBlockRecord: a,
                    handleTransition: n,
                    isLoading: !1,
                })
              : (0, r.jsx)(f, {
                    categories: l,
                    handleTransition: n,
                    isLoading: !1,
                });
    };
