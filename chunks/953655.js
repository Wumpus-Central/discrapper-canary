n.d(t, { Z: () => b }), n(388685);
var r = n(54381);
n(473749);
var l = n(120356),
    a = n.n(l),
    s = n(87290),
    o = n(381585),
    i = n(953528),
    c = n(788822),
    u = n(388032),
    d = n(222194);
let f = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e,
            l = (0, i.QH)("collectibles_featured_block");
        return (0, r.jsx)("div", {
            className: a()(d.col2, d.centeredSection),
            children:
                null == n
                    ? void 0
                    : n.subblocks.map((e, n) => {
                          if (e.type === s.O.CATEGORY) {
                              let a =
                                  null != e.unpublishedAt
                                      ? u.intl.string(u.t["h/uBCR"])
                                      : ((e) => {
                                              switch (l) {
                                                  case i.pj.NO_BADGE:
                                                      return !1;
                                                  case i.pj.FIRST_BLOCK_ONLY:
                                                      return 0 === e;
                                                  case i.pj.RIGHT_BLOCK_ONLY:
                                                      return 1 === e;
                                                  case i.pj.BOTH_BLOCKS:
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
    g = (e) => {
        let { handleTransition: t, categories: n } = e,
            l = (0, i.QH)("collectibles_featured_block");
        if (null == n || n.length < 2) return null;
        let [s, f] = n,
            g =
                (null == s ? void 0 : s.unpublishedAt) != null
                    ? u.intl.string(u.t["h/uBCR"])
                    : (() => {
                            switch (l) {
                                case i.pj.FIRST_BLOCK_ONLY:
                                case i.pj.BOTH_BLOCKS:
                                    return !0;
                                default:
                                    return !1;
                            }
                        })() &&
                        (null == s ? void 0 : s.storeListingId) != null &&
                        "" !== s.storeListingId
                      ? u.intl.string(u.t.soka7y)
                      : void 0,
            b =
                (null == f ? void 0 : f.unpublishedAt) != null
                    ? u.intl.string(u.t["h/uBCR"])
                    : (() => {
                            switch (l) {
                                case i.pj.RIGHT_BLOCK_ONLY:
                                case i.pj.BOTH_BLOCKS:
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
            className: a()(d.col2, d.centeredSection),
            children: (0, r.jsxs)(o.k0, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != s ? s.name : null == f ? void 0 : f.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == s),
                },
                children: [
                    null != s &&
                        (0, r.jsx)(c.q, {
                            category: s,
                            badgeText: g,
                            handleTransition: t,
                        }),
                    null != f &&
                        (0, r.jsx)(c.q, {
                            category: f,
                            badgeText: b,
                            handleTransition: t,
                        }),
                ],
            }),
        });
    },
    b = (e) => {
        let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: s } = e;
        return t
            ? (0, r.jsxs)("div", {
                  className: a()(d.col2, d.centeredSection),
                  children: [
                      (0, r.jsx)("div", {
                          className: a()(d.featuredBlockSkeleton, d.featuredBlock),
                          children: (0, r.jsx)("div", { className: d.featuredBlockSkeletonLogo }),
                      }),
                      (0, r.jsx)("div", {
                          className: a()(d.featuredBlockSkeleton, d.featuredBlock),
                          children: (0, r.jsx)("div", { className: d.featuredBlockSkeletonLogo }),
                      }),
                  ],
              })
            : null != s
              ? (0, r.jsx)(f, {
                    featuredBlockRecord: s,
                    handleTransition: n,
                    isLoading: !1,
                })
              : (0, r.jsx)(g, {
                    categories: l,
                    handleTransition: n,
                    isLoading: !1,
                });
    };
