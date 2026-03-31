n.d(t, { A: () => y }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(554146),
    a = n(397927),
    r = n(688810),
    o = n(357186),
    c = n(932001),
    d = n(871123),
    u = n(84511),
    h = n(3648),
    A = n(178213),
    _ = n(332772),
    m = n(872472),
    g = n(721932),
    p = n(35092),
    f = n(183555),
    x = n(535089),
    E = n(946356),
    I = n(173678),
    C = n(524380),
    N = n(652215),
    T = n(49999),
    S = n(985018),
    b = n(141076);
function y(e) {
    let { unownedWishlistItems: t = [], profileOwner: n, onClick: y, wishlistId: v, cardSize: j, title: R } = e,
        { analyticsLocations: O } = (0, r.Ay)(),
        { trackUserProfileWishlistAction: L } = (0, f.NJ)(),
        M = (0, A.GG)("user_profile_sidebar_wishlist_breadcrumb"),
        D = (0, C.Q)(M),
        U = (0, l.useId)();
    (0, _.T)({ location: "user_profile_sidebar_wishlist_breadcrumb" });
    let G = (0, l.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && L({ wishlistId: t, action: n, productLines: i });
            },
            [L],
        ),
        { visibleItems: P, showTypeTooltip: k } = (0, l.useMemo)(() => {
            let e = [],
                n = !1,
                i = !1;
            for (let l = 0; l < t.length && e.length < D; l++) {
                let s = t[l];
                e.push(s), (0, g.$)(s) && (0, d.bF)(s.sku) ? (n = !0) : (0, m.L)(s) && (i = !0);
            }
            return { visibleItems: e, showTypeTooltip: n && i };
        }, [D, t]),
        {
            cards: w,
            singleItem: B,
            productLines: V,
        } = (0, l.useMemo)(() => {
            let e = [],
                i = null,
                l = new Set();
            for (let i = 0; i < P.length; i++) {
                let s = P[i],
                    a = i === D - 1 && t.length > D;
                (0, m.L)(s)
                    ? (l.add(s.skuProductLine),
                      e.push(
                          (0, I.M)(s, {
                              index: i,
                              moreCount: a ? t.length - D + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: O,
                              onViewWishlist: y,
                              wishlistId: v,
                              showTypeTooltip: k,
                              cardSize: j,
                          }),
                      ))
                    : (0, g.$)(s) &&
                      (l.add(s.skuProductLine),
                      e.push(
                          (0, h.Z)(s, {
                              index: i,
                              moreCount: a ? t.length - D + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: O,
                              onViewWishlist: y,
                              wishlistId: v,
                              showTypeTooltip: k,
                              cardSize: j,
                          }),
                      ));
            }
            return 1 === P.length && (i = P[0]), { cards: e, singleItem: i, productLines: l };
        }, [t, n, O, y, v, j, P, k, D]),
        H = (0, x.A)({ wishlistId: v ?? null, onAction: G, productLines: V }),
        F = (0, l.useMemo)(
            () =>
                M
                    ? P.map((e, l) =>
                          null == e.sku
                              ? null
                              : (0, i.jsx)(
                                    p.A,
                                    {
                                        sku: e.sku,
                                        index: l,
                                        wishlistOwner: n,
                                        wishlistId: v,
                                        analyticsLocations: O,
                                        onViewWishlist: y,
                                        isSingleCard: 1 === t.length,
                                    },
                                    e.skuId,
                                ),
                      )
                    : null,
            [O, M, y, n, t.length, P, v],
        ),
        [K, W] = (0, c.RF)(
            s.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL,
            (0, o.c)(s.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL),
            void 0,
            !0,
        ),
        Y = K !== s.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL;
    if (0 === w.length) return null;
    let z = w;
    return (
        null != B &&
            ((0, m.L)(B)
                ? (z = (0, I.z)(B, { profileOwner: n, analyticsLocations: O, wishlistId: v, onViewWishlist: y }))
                : (0, g.$)(B) &&
                  (z = (0, h.A)(B, { profileOwner: n, analyticsLocations: O, wishlistId: v, onViewWishlist: y }))),
        (0, i.jsx)("section", {
            "aria-labelledby": U,
            children: (0, i.jsxs)(E.A.Overlay, {
                ref: H,
                className: b.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: b.wx,
                        children: [
                            (0, i.jsx)(a.Heading, {
                                variant: "text-sm/medium",
                                id: U,
                                children: R ?? S.intl.string(S.t["7lZ31J"]),
                            }),
                            M &&
                                t.length > D &&
                                (0, i.jsx)(a.QWc, {
                                    variant: "secondary",
                                    textVariant: "text-xs/normal",
                                    onClick: y,
                                    text: S.intl.string(S.t.y6PSA3),
                                }),
                        ],
                    }),
                    (0, i.jsxs)(a.Fmo, {
                        children: [
                            (0, i.jsx)("div", { className: b.vY, children: M ? F : z }),
                            !Y &&
                                V.has(N.EZt.SOCIAL_LAYER_GAME_ITEM) &&
                                (0, i.jsx)(u.A, {
                                    location: "user_profile_sidebar_wishlist_breadcrumb",
                                    className: b.EK,
                                    onDismiss: () => W(T.i.USER_DISMISS),
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
