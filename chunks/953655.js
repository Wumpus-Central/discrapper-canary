n.d(t, { Z: () => m }), n(388685);
var r = n(951288);
n(647438);
var l = n(120356),
    a = n.n(l),
    s = n(87290),
    i = n(960048),
    o = n(381585),
    c = n(788822),
    u = n(388032),
    d = n(310582);
let g = ["1366494385738354769", "1385035256125591633"],
    p = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e;
        return (0, r.jsx)("div", {
            className: a()(d.col2, d.centeredSection),
            children:
                null == n
                    ? void 0
                    : n.subblocks.map((e, n) => {
                          if (e.type === s.O.CATEGORY) {
                              let l =
                                  null != e.unpublishedAt
                                      ? u.intl.string(u.t["h/uBCQ"])
                                      : g.includes(e.categoryStoreListingId)
                                        ? u.intl.string(u.t["soka7+"])
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
                                              badgeText: l,
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
        let { handleTransition: t, categories: n } = e;
        if (null == n || n.length < 2)
            return i.Z.captureMessage("Collectible Featured Block requires at least 2 categories"), null;
        let [l, s] = n,
            g = (null == l ? void 0 : l.unpublishedAt) != null ? u.intl.string(u.t["h/uBCQ"]) : void 0;
        return (0, r.jsx)("div", {
            className: a()(d.col2, d.centeredSection),
            children: (0, r.jsxs)(o.k0, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != l ? l.name : null == s ? void 0 : s.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == l),
                },
                children: [
                    null != l &&
                        (0, r.jsx)(c.q, {
                            category: l,
                            badgeText: g,
                            handleTransition: t,
                        }),
                    null != s &&
                        (0, r.jsx)(c.q, {
                            category: s,
                            badgeText: u.intl.string(u.t["o/oRJC"]),
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
                  className: a()(d.col2, d.centeredSection),
                  children: [
                      (0, r.jsx)("div", {
                          className: a()(d.skeleton, d.featuredBlock),
                          children: (0, r.jsx)("div", { className: d.skeletonBody }),
                      }),
                      (0, r.jsx)("div", {
                          className: a()(d.skeleton, d.featuredBlock),
                          children: (0, r.jsx)("div", { className: d.skeletonBody }),
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
