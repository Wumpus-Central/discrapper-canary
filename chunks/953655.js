n.d(t, { Z: () => b }), n(388685);
var r = n(54381);
n(473749);
var l = n(120356),
    a = n.n(l),
    s = n(87290),
    o = n(381585),
    i = n(884697),
    c = n(788822),
    u = n(388032),
    d = n(222194);
let f = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e;
        return (0, r.jsx)("div", {
            className: a()(d.col2, d.centeredSection),
            children:
                null == n
                    ? void 0
                    : n.subblocks.map((e, n) =>
                          e.type === s.O.CATEGORY
                              ? (0, r.jsx)(
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
                                                badgeText: (0, i.L9)(e.unpublishedAt)
                                                    ? u.intl.string(u.t["h/uBCR"])
                                                    : void 0,
                                                handleTransition: t,
                                            },
                                            e.categoryStoreListingId,
                                        ),
                                    },
                                    e.categoryStoreListingId,
                                )
                              : null,
                      ),
        });
    },
    g = (e) => {
        let { handleTransition: t, categories: n } = e;
        if (null == n || n.length < 2) return null;
        let [l, s] = n;
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
                            badgeText: (0, i.L9)(l.unpublishedAt) ? u.intl.string(u.t["h/uBCR"]) : void 0,
                            handleTransition: t,
                        }),
                    null != s &&
                        (0, r.jsx)(c.q, {
                            category: s,
                            badgeText: (0, i.L9)(s.unpublishedAt) ? u.intl.string(u.t["h/uBCR"]) : void 0,
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
