n.d(t, { Z: () => C }), n(388685);
var r = n(951288);
n(647438);
var l = n(120356),
    a = n.n(l),
    s = n(87290),
    i = n(960048),
    o = n(381585),
    c = n(953528),
    u = n(788822),
    d = n(388032),
    g = n(310582);
let p = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e,
            l = (0, c.QH)("collectibles_featured_block");
        return (0, r.jsx)("div", {
            className: a()(g.col2, g.centeredSection),
            children:
                null == n
                    ? void 0
                    : n.subblocks.map((e, n) => {
                          if (e.type === s.O.CATEGORY) {
                              let a =
                                  null != e.unpublishedAt
                                      ? d.intl.string(d.t["h/uBCQ"])
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
                                        ? d.intl.string(d.t["soka7+"])
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
    f = (e) => {
        let { handleTransition: t, categories: n } = e,
            l = (0, c.QH)("collectibles_featured_block");
        if (null == n || n.length < 2)
            return i.Z.captureMessage("Collectible Featured Block requires at least 2 categories"), null;
        let [s, p] = n,
            f =
                (null == s ? void 0 : s.unpublishedAt) != null
                    ? d.intl.string(d.t["h/uBCQ"])
                    : (() => {
                            switch (l) {
                                case c.pj.FIRST_BLOCK_ONLY:
                                case c.pj.BOTH_BLOCKS:
                                    return !0;
                                default:
                                    return !1;
                            }
                        })() &&
                        (null == s ? void 0 : s.storeListingId) != null &&
                        "" !== s.storeListingId
                      ? d.intl.string(d.t["soka7+"])
                      : void 0,
            C =
                (null == p ? void 0 : p.unpublishedAt) != null
                    ? d.intl.string(d.t["h/uBCQ"])
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
                      ? d.intl.string(d.t["soka7+"])
                      : d.intl.string(d.t["o/oRJC"]);
        return (0, r.jsx)("div", {
            className: a()(g.col2, g.centeredSection),
            children: (0, r.jsxs)(o.k0, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != s ? s.name : null == p ? void 0 : p.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == s),
                },
                children: [
                    null != s &&
                        (0, r.jsx)(u.q, {
                            category: s,
                            badgeText: f,
                            handleTransition: t,
                        }),
                    null != p &&
                        (0, r.jsx)(u.q, {
                            category: p,
                            badgeText: C,
                            handleTransition: t,
                        }),
                ],
            }),
        });
    },
    C = (e) => {
        let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: s } = e;
        return t
            ? (0, r.jsxs)("div", {
                  className: a()(g.col2, g.centeredSection),
                  children: [
                      (0, r.jsx)("div", {
                          className: a()(g.skeleton, g.featuredBlock),
                          children: (0, r.jsx)("div", { className: g.skeletonBody }),
                      }),
                      (0, r.jsx)("div", {
                          className: a()(g.skeleton, g.featuredBlock),
                          children: (0, r.jsx)("div", { className: g.skeletonBody }),
                      }),
                  ],
              })
            : null != s
              ? (0, r.jsx)(p, {
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
