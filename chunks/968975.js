"use strict";
n.d(t, { A: () => I }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(688810),
    a = n(871123),
    o = n(84511),
    c = n(3648),
    d = n(178213),
    u = n(872472),
    h = n(721932),
    A = n(35092),
    p = n(183555),
    g = n(535089),
    m = n(946356),
    _ = n(173678),
    f = n(524380),
    x = n(652215),
    C = n(985018),
    E = n(250783);
function I(e) {
    let { unownedWishlistItems: t = [], profileOwner: n, onClick: I, wishlistId: b, cardSize: N, title: S } = e,
        { analyticsLocations: T } = (0, r.Ay)(),
        { trackUserProfileWishlistAction: v } = (0, p.NJ)(),
        y = (0, d.G)("user_profile_sidebar_wishlist_breadcrumb"),
        j = (0, f.Q)(y),
        R = (0, s.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && v({ wishlistId: t, action: n, productLines: i });
            },
            [v],
        ),
        { visibleItems: O, showTypeTooltip: L } = (0, s.useMemo)(() => {
            let e = [],
                n = !1,
                i = !1;
            for (let s = 0; s < t.length && e.length < j; s++) {
                let l = t[s];
                e.push(l), (0, h.$)(l) && (0, a.bF)(l.sku) ? (n = !0) : (0, u.L)(l) && (i = !0);
            }
            return { visibleItems: e, showTypeTooltip: n && i };
        }, [j, t]),
        {
            cards: M,
            singleItem: D,
            productLines: G,
        } = (0, s.useMemo)(() => {
            let e = [],
                i = null,
                s = new Set();
            for (let i = 0; i < O.length; i++) {
                let l = O[i],
                    r = i === j - 1 && t.length > j;
                (0, u.L)(l)
                    ? (s.add(l.skuProductLine),
                      e.push(
                          (0, _.M)(l, {
                              index: i,
                              moreCount: r ? t.length - j + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: T,
                              onViewWishlist: I,
                              wishlistId: b,
                              showTypeTooltip: L,
                              cardSize: N,
                          }),
                      ))
                    : (0, h.$)(l) &&
                      (s.add(l.skuProductLine),
                      e.push(
                          (0, c.Z)(l, {
                              index: i,
                              moreCount: r ? t.length - j + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: T,
                              onViewWishlist: I,
                              wishlistId: b,
                              showTypeTooltip: L,
                              cardSize: N,
                          }),
                      ));
            }
            return 1 === O.length && (i = O[0]), { cards: e, singleItem: i, productLines: s };
        }, [t, n, T, I, b, N, O, L, j]),
        U = (0, g.A)({ wishlistId: b ?? null, onAction: R, productLines: G }),
        P = (0, s.useMemo)(
            () =>
                y
                    ? O.map((e, t) =>
                          null == e.sku
                              ? null
                              : (0, i.jsx)(
                                    A.A,
                                    {
                                        sku: e.sku,
                                        index: t,
                                        wishlistOwner: n,
                                        wishlistId: b,
                                        analyticsLocations: T,
                                        onViewWishlist: I,
                                        showTypeTooltip: L,
                                    },
                                    e.skuId,
                                ),
                      )
                    : null,
            [T, y, I, n, L, O, b],
        );
    if (0 === M.length) return null;
    let w = M;
    return (
        null != D &&
            ((0, u.L)(D)
                ? (w = (0, _.z)(D, { profileOwner: n, analyticsLocations: T, wishlistId: b, onViewWishlist: I }))
                : (0, h.$)(D) &&
                  (w = (0, c.A)(D, { profileOwner: n, analyticsLocations: T, wishlistId: b, onViewWishlist: I }))),
        (0, i.jsxs)(m.A.Overlay, {
            ref: U,
            className: E.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: E.wx,
                    children: [
                        (0, i.jsx)(l.Text, { variant: "text-sm/medium", children: S ?? C.intl.string(C.t["7lZ31J"]) }),
                        y &&
                            (0, i.jsx)(l.QWc, {
                                variant: "secondary",
                                textVariant: "text-sm/medium",
                                onClick: I,
                                text: C.intl.string(C.t.y6PSA3),
                            }),
                    ],
                }),
                G.has(x.EZt.SOCIAL_LAYER_GAME_ITEM) &&
                    (0, i.jsx)(o.A, { location: "user_profile_sidebar_wishlist_breadcrumb" }),
                (0, i.jsx)("div", { className: E.vY, children: y ? P : w }),
            ],
        })
    );
}
