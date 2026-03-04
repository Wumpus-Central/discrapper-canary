"use strict";
n.d(t, { A: () => M, O: () => N });
var i = n(627968),
    s = n(64700),
    r = n(575593),
    a = n(635358),
    l = n(311907),
    o = n(793574),
    c = n(587895),
    d = n(44120),
    u = n(317560),
    _ = n(533406),
    I = n(954571),
    g = n(594832),
    A = n(146423),
    S = n(460442),
    f = n(662349),
    m = n(754804),
    p = n(479026),
    T = n(699976),
    E = n(652215),
    L = n(788868),
    R = n(804810);
let O = L.vQ.DM_CHANNEL_WISHLIST,
    h = T.Z.SIZE_133;
function N(e) {
    let { spec: t = h } = e;
    return (0, i.jsx)(A.$, { spec: t });
}
function b(e) {
    let {
            sku: t,
            onDetailsClick: n,
            onPurchaseClick: r,
            onOpenWishlist: a,
            wishlistOwner: l,
            wishlistId: o,
            source: c,
            hasMultipleSources: d,
            totalUnownedWishlistItems: u,
            index: _,
            skuPreviewStyle: p,
            maxWishlistLength: T,
            spec: L = h,
            guildId: R,
            channelId: O,
        } = e,
        N = s.useMemo(() => ({ collectibles: { nameplate: { width: 136 } } }), []),
        [b, G] = s.useState(!1),
        C = _ === T - 1 && u > T,
        M = s.useCallback(() => {
            if (C) return void a();
            let e = c === g.uS.WISHLIST ? "wishlist" : "shop";
            I.default.track(E.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: t.id,
                item_source: e,
                wishlist_id: c === g.uS.WISHLIST ? o : null,
                product_line: t.productLine,
            }),
                n?.();
        }, [n, o, c, t.id, t.productLine, a, C]),
        k = s.useCallback(() => {
            let e = c === g.uS.WISHLIST ? "wishlist" : "shop";
            I.default.track(E.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: t.id,
                item_source: e,
                wishlist_id: c === g.uS.WISHLIST ? o : null,
                product_line: t.productLine,
            }),
                r?.();
        }, [r, t.id, t.productLine, c, o]),
        {
            label: U,
            icon: D,
            isPromptingPurchase: y,
        } = (0, f.hB)({ sku: t, wishlistOwner: l, isOwned: !1, location: "DM Gifting Modal Wishlist Item Card" });
    return (0, i.jsxs)(A.A, {
        sku: t,
        user: l,
        spec: L,
        skuPreviewStyle: p,
        options: N,
        onClick: M,
        onHoverOrFocusChange: G,
        children: [
            d &&
                c === g.uS.WISHLIST &&
                (0, i.jsx)(m.X, { spec: L, users: [l], guildId: R ?? void 0, channelId: O ?? void 0 }),
            !C && (0, i.jsx)(f.AJ, { spec: L, onClick: y ? k : M, label: U, icon: D, isHoveringOrFocusing: b }),
            C && (0, i.jsx)(S.Yb, { count: u - T + 1 }),
        ],
    });
}
function G(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: r, onClick: a, hasMultipleSources: d, source: I, ...g } = e,
        A = (0, l.bG)([c.A], () => c.A.getApplication(t.applicationId)),
        S = s.useCallback(() => {
            a?.(),
                null != A &&
                    null != A.guildId &&
                    (0, u.R)({
                        skuId: t.id,
                        applicationId: t.applicationId,
                        guildId: A.guildId,
                        isStorefront: !1,
                        analyticsLocations: r ?? [],
                    });
        }, [r, A, a, t.applicationId, t.id]),
        f = s.useCallback(() => {
            a?.(),
                (0, _.a)(
                    t,
                    { isGift: !0, giftRecipient: n, giftingOrigin: O },
                    { analyticsLocations: [...(r ?? []), o.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [t, n, r, a]);
    return (0, i.jsx)(b, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: r,
        onDetailsClick: S,
        onPurchaseClick: f,
        hasMultipleSources: d,
        source: I,
        ...g,
    });
}
function C(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: l, onClick: o, hasMultipleSources: c, source: u, ..._ } = e,
        I = (0, p.e)({ sku: t, analyticsLocations: l }),
        g = s.useMemo(
            () =>
                null != t.bundledSkus && t.bundledSkus.length > 0
                    ? R.E
                    : t.tenantMetadata?.collectibles?.type === r.R.NAMEPLATE
                      ? R.q
                      : void 0,
            [t.bundledSkus, t.tenantMetadata?.collectibles?.type],
        ),
        A = s.useCallback(() => {
            o?.(),
                (0, d.A)({
                    skuId: t.id,
                    isGift: !0,
                    giftingOrigin: O,
                    analyticsLocations: l ?? [],
                    giftRecipient: n,
                    variantsReturnStyle: a.g.VARIANTS_GROUP,
                });
        }, [o, t.id, l, n]),
        S = s.useCallback(() => {
            o?.(), I();
        }, [o, I]);
    return (0, i.jsx)(b, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: l,
        onDetailsClick: S,
        onPurchaseClick: A,
        hasMultipleSources: c,
        source: u,
        skuPreviewStyle: g,
        ..._,
    });
}
function M(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case E.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(G, { sku: t, ...n });
        case E.EZt.COLLECTIBLES:
            return (0, i.jsx)(C, { sku: t, ...n });
        default:
            return null;
    }
}
