n.d(t, { Z: () => h }), n(388685);
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    a = n(87290),
    o = n(960048),
    s = n(381585),
    c = n(953528),
    u = n(788822),
    d = n(388032),
    p = n(310582);
let g = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e,
            l = (0, c.QH)("collectibles_featured_block");
        return (0, r.jsx)("div", {
            className: i()(p.col2, p.centeredSection),
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
                                  s.k0,
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
            return o.Z.captureMessage("Collectible Featured Block requires at least 2 categories"), null;
        let [a, g] = n,
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
            h =
                (null == g ? void 0 : g.unpublishedAt) != null
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
                        (null == g ? void 0 : g.storeListingId) != null &&
                        "" !== g.storeListingId
                      ? d.intl.string(d.t.soka7y)
                      : d.intl.string(d.t["o/oRJB"]);
        return (0, r.jsx)("div", {
            className: i()(p.col2, p.centeredSection),
            children: (0, r.jsxs)(s.k0, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != a ? a.name : null == g ? void 0 : g.name,
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
                    null != g &&
                        (0, r.jsx)(u.q, {
                            category: g,
                            badgeText: h,
                            handleTransition: t,
                        }),
                ],
            }),
        });
    },
    h = (e) => {
        let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: a } = e;
        return t
            ? (0, r.jsxs)("div", {
                  className: i()(p.col2, p.centeredSection),
                  children: [
                      (0, r.jsx)("div", {
                          className: i()(p.skeleton, p.featuredBlock),
                          children: (0, r.jsx)("div", { className: p.skeletonBody }),
                      }),
                      (0, r.jsx)("div", {
                          className: i()(p.skeleton, p.featuredBlock),
                          children: (0, r.jsx)("div", { className: p.skeletonBody }),
                      }),
                  ],
              })
            : null != a
              ? (0, r.jsx)(g, {
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
