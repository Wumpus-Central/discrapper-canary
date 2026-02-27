"use strict";
n.d(t, { A: () => T }), n(321073);
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
    p = n(872472),
    g = n(721932),
    m = n(35092),
    _ = n(183555),
    f = n(535089),
    x = n(946356),
    C = n(173678),
    E = n(524380),
    I = n(652215),
    N = n(49999),
    b = n(985018),
    S = n(250783);
function T(e) {
    let { unownedWishlistItems: t = [], profileOwner: n, onClick: T, wishlistId: y, cardSize: v, title: j } = e,
        { analyticsLocations: R } = (0, a.Ay)(),
        { trackUserProfileWishlistAction: O } = (0, _.NJ)(),
        L = (0, A.G)("user_profile_sidebar_wishlist_breadcrumb"),
        M = (0, E.Q)(L),
        D = (0, s.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && O({ wishlistId: t, action: n, productLines: i });
            },
            [O],
        ),
        { visibleItems: G, showTypeTooltip: U } = (0, s.useMemo)(() => {
            let e = [],
                n = !1,
                i = !1;
            for (let s = 0; s < t.length && e.length < M; s++) {
                let l = t[s];
                e.push(l), (0, g.$)(l) && (0, d.bF)(l.sku) ? (n = !0) : (0, p.L)(l) && (i = !0);
            }
            return { visibleItems: e, showTypeTooltip: n && i };
        }, [M, t]),
        {
            cards: P,
            singleItem: w,
            productLines: k,
        } = (0, s.useMemo)(() => {
            let e = [],
                i = null,
                s = new Set();
            for (let i = 0; i < G.length; i++) {
                let l = G[i],
                    r = i === M - 1 && t.length > M;
                (0, p.L)(l)
                    ? (s.add(l.skuProductLine),
                      e.push(
                          (0, C.M)(l, {
                              index: i,
                              moreCount: r ? t.length - M + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: R,
                              onViewWishlist: T,
                              wishlistId: y,
                              showTypeTooltip: U,
                              cardSize: v,
                          }),
                      ))
                    : (0, g.$)(l) &&
                      (s.add(l.skuProductLine),
                      e.push(
                          (0, h.Z)(l, {
                              index: i,
                              moreCount: r ? t.length - M + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: R,
                              onViewWishlist: T,
                              wishlistId: y,
                              showTypeTooltip: U,
                              cardSize: v,
                          }),
                      ));
            }
            return 1 === G.length && (i = G[0]), { cards: e, singleItem: i, productLines: s };
        }, [t, n, R, T, y, v, G, U, M]),
        B = (0, f.A)({ wishlistId: y ?? null, onAction: D, productLines: k }),
        V = (0, s.useMemo)(
            () =>
                L
                    ? G.map((e, t) =>
                          null == e.sku
                              ? null
                              : (0, i.jsx)(
                                    m.A,
                                    {
                                        sku: e.sku,
                                        index: t,
                                        wishlistOwner: n,
                                        wishlistId: y,
                                        analyticsLocations: R,
                                        onViewWishlist: T,
                                        showTypeTooltip: U,
                                    },
                                    e.skuId,
                                ),
                      )
                    : null,
            [R, L, T, n, U, G, y],
        ),
        [H, F] = (0, c.RF)(
            l.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL,
            (0, o.c)(l.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL),
            void 0,
            !0,
        ),
        K = H !== l.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL;
    if (0 === P.length) return null;
    let W = P;
    return (
        null != w &&
            ((0, p.L)(w)
                ? (W = (0, C.z)(w, { profileOwner: n, analyticsLocations: R, wishlistId: y, onViewWishlist: T }))
                : (0, g.$)(w) &&
                  (W = (0, h.A)(w, { profileOwner: n, analyticsLocations: R, wishlistId: y, onViewWishlist: T }))),
        (0, i.jsxs)(x.A.Overlay, {
            ref: B,
            className: S.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: S.wx,
                    children: [
                        (0, i.jsx)(r.Text, { variant: "text-sm/medium", children: j ?? b.intl.string(b.t["7lZ31J"]) }),
                        L &&
                            (0, i.jsx)(r.QWc, {
                                variant: "secondary",
                                textVariant: "text-sm/medium",
                                onClick: T,
                                text: b.intl.string(b.t.y6PSA3),
                            }),
                    ],
                }),
                (0, i.jsx)("div", { className: S.vY, children: L ? V : W }),
                !K &&
                    k.has(I.EZt.SOCIAL_LAYER_GAME_ITEM) &&
                    (0, i.jsx)(u.A, {
                        location: "user_profile_sidebar_wishlist_breadcrumb",
                        className: S.EK,
                        onDismiss: () => F(N.i.USER_DISMISS),
                    }),
            ],
        })
    );
}
