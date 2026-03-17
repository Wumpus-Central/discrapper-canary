"use strict";
n.d(t, { A: () => v }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(554146),
    r = n(397927),
    a = n(688810),
    o = n(357186),
    c = n(932001),
    d = n(871123),
    u = n(84511),
    h = n(3648),
    A = n(178213),
    m = n(332772),
    p = n(872472),
    g = n(721932),
    _ = n(35092),
    f = n(183555),
    x = n(535089),
    C = n(946356),
    E = n(173678),
    I = n(524380),
    N = n(652215),
    b = n(49999),
    S = n(985018),
    T = n(250783);
function v(e) {
    let { unownedWishlistItems: t = [], profileOwner: n, onClick: v, wishlistId: y, cardSize: j, title: R } = e,
        { analyticsLocations: O } = (0, a.Ay)(),
        { trackUserProfileWishlistAction: L } = (0, f.NJ)(),
        M = (0, A.GG)("user_profile_sidebar_wishlist_breadcrumb"),
        D = (0, I.Q)(M);
    (0, m.T)({ location: "user_profile_sidebar_wishlist_breadcrumb" });
    let G = (0, s.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && L({ wishlistId: t, action: n, productLines: i });
            },
            [L],
        ),
        { visibleItems: U, showTypeTooltip: P } = (0, s.useMemo)(() => {
            let e = [],
                n = !1,
                i = !1;
            for (let s = 0; s < t.length && e.length < D; s++) {
                let l = t[s];
                e.push(l), (0, g.$)(l) && (0, d.bF)(l.sku) ? (n = !0) : (0, p.L)(l) && (i = !0);
            }
            return { visibleItems: e, showTypeTooltip: n && i };
        }, [D, t]),
        {
            cards: w,
            singleItem: k,
            productLines: V,
        } = (0, s.useMemo)(() => {
            let e = [],
                i = null,
                s = new Set();
            for (let i = 0; i < U.length; i++) {
                let l = U[i],
                    r = i === D - 1 && t.length > D;
                (0, p.L)(l)
                    ? (s.add(l.skuProductLine),
                      e.push(
                          (0, E.M)(l, {
                              index: i,
                              moreCount: r ? t.length - D + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: O,
                              onViewWishlist: v,
                              wishlistId: y,
                              showTypeTooltip: P,
                              cardSize: j,
                          }),
                      ))
                    : (0, g.$)(l) &&
                      (s.add(l.skuProductLine),
                      e.push(
                          (0, h.Z)(l, {
                              index: i,
                              moreCount: r ? t.length - D + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: O,
                              onViewWishlist: v,
                              wishlistId: y,
                              showTypeTooltip: P,
                              cardSize: j,
                          }),
                      ));
            }
            return 1 === U.length && (i = U[0]), { cards: e, singleItem: i, productLines: s };
        }, [t, n, O, v, y, j, U, P, D]),
        B = (0, x.A)({ wishlistId: y ?? null, onAction: G, productLines: V }),
        H = (0, s.useMemo)(
            () =>
                M
                    ? U.map((e, s) =>
                          null == e.sku
                              ? null
                              : (0, i.jsx)(
                                    _.A,
                                    {
                                        sku: e.sku,
                                        index: s,
                                        wishlistOwner: n,
                                        wishlistId: y,
                                        analyticsLocations: O,
                                        onViewWishlist: v,
                                        isSingleCard: 1 === t.length,
                                    },
                                    e.skuId,
                                ),
                      )
                    : null,
            [O, M, v, n, t.length, U, y],
        ),
        [F, K] = (0, c.RF)(
            l.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL,
            (0, o.c)(l.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL),
            void 0,
            !0,
        ),
        W = F !== l.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL;
    if (0 === w.length) return null;
    let Y = w;
    return (
        null != k &&
            ((0, p.L)(k)
                ? (Y = (0, E.z)(k, { profileOwner: n, analyticsLocations: O, wishlistId: y, onViewWishlist: v }))
                : (0, g.$)(k) &&
                  (Y = (0, h.A)(k, { profileOwner: n, analyticsLocations: O, wishlistId: y, onViewWishlist: v }))),
        (0, i.jsxs)(C.A.Overlay, {
            ref: B,
            className: T.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: T.wx,
                    children: [
                        (0, i.jsx)(r.Text, { variant: "text-sm/medium", children: R ?? S.intl.string(S.t["7lZ31J"]) }),
                        M &&
                            t.length > D &&
                            (0, i.jsx)(r.QWc, {
                                variant: "secondary",
                                textVariant: "text-xs/normal",
                                onClick: v,
                                text: S.intl.string(S.t.y6PSA3),
                            }),
                    ],
                }),
                (0, i.jsx)("div", { className: T.vY, children: M ? H : Y }),
                !W &&
                    V.has(N.EZt.SOCIAL_LAYER_GAME_ITEM) &&
                    (0, i.jsx)(u.A, {
                        location: "user_profile_sidebar_wishlist_breadcrumb",
                        className: T.EK,
                        onDismiss: () => K(b.i.USER_DISMISS),
                    }),
            ],
        })
    );
}
