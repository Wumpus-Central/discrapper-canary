n.d(t, { Z: () => p }), n(388685);
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    a = n(87290),
    o = n(381585),
    s = n(953528),
    c = n(788822),
    u = n(388032),
    d = n(310582);
let f = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e,
            l = (0, s.QH)("collectibles_featured_block");
        return (0, r.jsx)("div", {
            className: i()(d.col2, d.centeredSection),
            children:
                null == n
                    ? void 0
                    : n.subblocks.map((e, n) => {
                          if (e.type === a.O.CATEGORY) {
                              let i =
                                  null != e.unpublishedAt
                                      ? u.intl.string(u.t["h/uBCR"])
                                      : ((e) => {
                                              switch (l) {
                                                  case s.pj.NO_BADGE:
                                                      return !1;
                                                  case s.pj.FIRST_BLOCK_ONLY:
                                                      return 0 === e;
                                                  case s.pj.RIGHT_BLOCK_ONLY:
                                                      return 1 === e;
                                                  case s.pj.BOTH_BLOCKS:
                                                      return !0;
                                                  default:
                                                      return !1;
                                              }
                                          })(n)
                                        ? u.intl.string(u.t.soka7y)
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
                                          c.q,
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
    g = (e) => {
        let { handleTransition: t, categories: n } = e,
            l = (0, s.QH)("collectibles_featured_block");
        if (null == n || n.length < 2) return null;
        let [a, f] = n,
            g =
                (null == a ? void 0 : a.unpublishedAt) != null
                    ? u.intl.string(u.t["h/uBCR"])
                    : (() => {
                            switch (l) {
                                case s.pj.FIRST_BLOCK_ONLY:
                                case s.pj.BOTH_BLOCKS:
                                    return !0;
                                default:
                                    return !1;
                            }
                        })() &&
                        (null == a ? void 0 : a.storeListingId) != null &&
                        "" !== a.storeListingId
                      ? u.intl.string(u.t.soka7y)
                      : void 0,
            p =
                (null == f ? void 0 : f.unpublishedAt) != null
                    ? u.intl.string(u.t["h/uBCR"])
                    : (() => {
                            switch (l) {
                                case s.pj.RIGHT_BLOCK_ONLY:
                                case s.pj.BOTH_BLOCKS:
                                    return !0;
                                default:
                                    return !1;
                            }
                        })() &&
                        (null == f ? void 0 : f.storeListingId) != null &&
                        "" !== f.storeListingId
                      ? u.intl.string(u.t.soka7y)
                      : u.intl.string(u.t["o/oRJB"]);
        return (0, r.jsx)("div", {
            className: i()(d.col2, d.centeredSection),
            children: (0, r.jsxs)(o.k0, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != a ? a.name : null == f ? void 0 : f.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == a),
                },
                children: [
                    null != a &&
                        (0, r.jsx)(c.q, {
                            category: a,
                            badgeText: g,
                            handleTransition: t,
                        }),
                    null != f &&
                        (0, r.jsx)(c.q, {
                            category: f,
                            badgeText: p,
                            handleTransition: t,
                        }),
                ],
            }),
        });
    },
    p = (e) => {
        let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: a } = e;
        return t
            ? (0, r.jsxs)("div", {
                  className: i()(d.col2, d.centeredSection),
                  children: [
                      (0, r.jsx)("div", {
                          className: i()(d.skeleton, d.featuredBlock),
                          children: (0, r.jsx)("div", { className: d.skeletonBody }),
                      }),
                      (0, r.jsx)("div", {
                          className: i()(d.skeleton, d.featuredBlock),
                          children: (0, r.jsx)("div", { className: d.skeletonBody }),
                      }),
                  ],
              })
            : null != a
              ? (0, r.jsx)(f, {
                    featuredBlockRecord: a,
                    handleTransition: n,
                    isLoading: !1,
                })
              : (0, r.jsx)(g, {
                    categories: l,
                    handleTransition: n,
                    isLoading: !1,
                });
    };
