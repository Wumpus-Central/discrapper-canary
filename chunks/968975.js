n.d(t, {
    A: () => y,
}),
    n(321073),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(397927),
    s = n(688810),
    a = n(871123),
    o = n(3648),
    c = n(178213),
    u = n(872472),
    d = n(721932),
    h = n(35092),
    p = n(183555),
    g = n(535089),
    f = n(946356),
    m = n(173678);
n(524380);
var b = n(985018),
    A = n(250783);

function y(e) {
    let { unownedWishlistItems: t = [], profileOwner: n, onClick: y, wishlistId: O, cardSize: _, title: j } = e,
        { analyticsLocations: x } = (0, s.Ay)(),
        { trackUserProfileWishlistAction: v } = (0, p.NJ)(),
        E = (0, c.G)("user_profile_sidebar_wishlist_breadcrumb"),
        C = (0, l.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: r } = e;
                null != t &&
                    v({
                        wishlistId: t,
                        action: n,
                        productLines: r,
                    });
            },
            [v],
        ),
        { visibleItems: S, showTypeTooltip: I } = (0, l.useMemo)(() => {
            let e = [],
                n = !1,
                r = !1;
            for (let l = 0; l < t.length && e.length < 4; l++) {
                let i = t[l];
                e.push(i), (0, d.$)(i) && (0, a.bF)(i.sku) ? (n = !0) : (0, u.L)(i) && (r = !0);
            }
            return {
                visibleItems: e,
                showTypeTooltip: n && r,
            };
        }, [t]),
        {
            cards: N,
            singleItem: T,
            productLines: P,
        } = (0, l.useMemo)(() => {
            let e = [],
                r = null,
                l = new Set();
            for (let r = 0; r < S.length; r++) {
                let i = S[r],
                    s = 3 === r && t.length > 4;
                (0, u.L)(i)
                    ? (l.add(i.skuProductLine),
                      e.push(
                          (0, m.M)(i, {
                              index: r,
                              moreCount: s ? t.length - 4 + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: x,
                              onViewWishlist: y,
                              wishlistId: O,
                              showTypeTooltip: I,
                              cardSize: _,
                          }),
                      ))
                    : (0, d.$)(i) &&
                      (l.add(i.skuProductLine),
                      e.push(
                          (0, o.Z)(i, {
                              index: r,
                              moreCount: s ? t.length - 4 + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: x,
                              onViewWishlist: y,
                              wishlistId: O,
                              showTypeTooltip: I,
                              cardSize: _,
                          }),
                      ));
            }
            return (
                1 === S.length && (r = S[0]),
                {
                    cards: e,
                    singleItem: r,
                    productLines: l,
                }
            );
        }, [t, n, x, y, O, _, S, I]),
        w = (0, g.A)({
            wishlistId: null != O ? O : null,
            onAction: C,
            productLines: P,
        }),
        R = (0, l.useMemo)(
            () =>
                E
                    ? S.map((e, l) =>
                          null == e.sku
                              ? null
                              : (0, r.jsx)(
                                    h.Ay,
                                    {
                                        sku: e.sku,
                                        index: l,
                                        totalUnownedWishlistItems: t.length,
                                        wishlistOwner: n,
                                        wishlistId: O,
                                        analyticsLocations: x,
                                        onViewWishlist: y,
                                        showTypeTooltip: I,
                                    },
                                    e.skuId,
                                ),
                      )
                    : null,
            [x, E, y, n, I, t.length, S, O],
        );
    if (0 === N.length) return null;
    let D = N;
    return (
        null != T &&
            ((0, u.L)(T)
                ? (D = (0, m.z)(T, {
                      profileOwner: n,
                      analyticsLocations: x,
                      wishlistId: O,
                      onViewWishlist: y,
                  }))
                : (0, d.$)(T) &&
                  (D = (0, o.A)(T, {
                      profileOwner: n,
                      analyticsLocations: x,
                      wishlistId: O,
                      onViewWishlist: y,
                  }))),
        (0, r.jsxs)(f.A.Overlay, {
            ref: w,
            className: A.kL,
            children: [
                (0, r.jsx)("div", {
                    className: A.wx,
                    children: (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        children: null != j ? j : b.intl.string(b.t["7lZ31J"]),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: A.vY,
                    children: E ? R : D,
                }),
            ],
        })
    );
}
