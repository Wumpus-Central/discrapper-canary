n.d(t, { Z: () => p }), n(388685);
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    s = n(87290),
    o = n(381585),
    a = n(953528),
    c = n(788822),
    u = n(388032),
    d = n(310582);
let g = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e,
            l = (0, a.QH)("collectibles_featured_block");
        return (0, r.jsx)("div", {
            className: i()(d.col2, d.centeredSection),
            children:
                null == n
                    ? void 0
                    : n.subblocks.map((e, n) => {
                          if (e.type === s.O.CATEGORY) {
                              let i =
                                  null != e.unpublishedAt
                                      ? u.intl.string(u.t["h/uBCR"])
                                      : ((e) => {
                                              switch (l) {
                                                  case a.pj.NO_BADGE:
                                                      return !1;
                                                  case a.pj.FIRST_BLOCK_ONLY:
                                                      return 0 === e;
                                                  case a.pj.RIGHT_BLOCK_ONLY:
                                                      return 1 === e;
                                                  case a.pj.BOTH_BLOCKS:
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
    f = (e) => {
        let { handleTransition: t, categories: n } = e,
            l = (0, a.QH)("collectibles_featured_block");
        if (null == n || n.length < 2) return null;
        let [s, g] = n,
            f =
                (null == s ? void 0 : s.unpublishedAt) != null
                    ? u.intl.string(u.t["h/uBCR"])
                    : (() => {
                            switch (l) {
                                case a.pj.FIRST_BLOCK_ONLY:
                                case a.pj.BOTH_BLOCKS:
                                    return !0;
                                default:
                                    return !1;
                            }
                        })() &&
                        (null == s ? void 0 : s.storeListingId) != null &&
                        "" !== s.storeListingId
                      ? u.intl.string(u.t.soka7y)
                      : void 0,
            p =
                (null == g ? void 0 : g.unpublishedAt) != null
                    ? u.intl.string(u.t["h/uBCR"])
                    : (() => {
                            switch (l) {
                                case a.pj.RIGHT_BLOCK_ONLY:
                                case a.pj.BOTH_BLOCKS:
                                    return !0;
                                default:
                                    return !1;
                            }
                        })() &&
                        (null == g ? void 0 : g.storeListingId) != null &&
                        "" !== g.storeListingId
                      ? u.intl.string(u.t.soka7y)
                      : u.intl.string(u.t["o/oRJB"]);
        return (0, r.jsx)("div", {
            className: i()(d.col2, d.centeredSection),
            children: (0, r.jsxs)(o.k0, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != s ? s.name : null == g ? void 0 : g.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == s),
                },
                children: [
                    null != s &&
                        (0, r.jsx)(c.q, {
                            category: s,
                            badgeText: f,
                            handleTransition: t,
                        }),
                    null != g &&
                        (0, r.jsx)(c.q, {
                            category: g,
                            badgeText: p,
                            handleTransition: t,
                        }),
                ],
            }),
        });
    },
    p = (e) => {
        let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: s } = e;
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
            : null != s
              ? (0, r.jsx)(g, {
                    featuredBlockRecord: s,
                    handleTransition: n,
                    isLoading: !1,
                })
              : (0, r.jsx)(f, {
                    categories: l,
                    handleTransition: n,
                    isLoading: !1,
                });
    };
