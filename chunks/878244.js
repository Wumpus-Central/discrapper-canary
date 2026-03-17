e.d(i, { A: () => y, O: () => M });
var n = e(627968),
    a = e(64700),
    s = e(503698),
    l = e.n(s),
    r = e(575593),
    o = e(311907),
    c = e(793574),
    u = e(587895),
    d = e(44120),
    g = e(317560),
    I = e(533406),
    _ = e(954571),
    f = e(594832),
    p = e(146423),
    A = e(121700),
    m = e(460442),
    T = e(662349),
    S = e(754804),
    h = e(479026),
    E = e(699976),
    C = e(652215),
    L = e(788868),
    O = e(804810);
let k = L.vQ.DM_CHANNEL_WISHLIST,
    G = E.Z.SIZE_133;
function M(t) {
    let { spec: i = G } = t;
    return (0, n.jsx)(p.$, { spec: i });
}
function b(t) {
    let {
            sku: i,
            onDetailsClick: e,
            onPurchaseClick: s,
            onOpenWishlist: r,
            wishlistOwner: o,
            wishlistId: c,
            source: u,
            hasMultipleSources: d,
            skuPreviewStyle: g,
            skuPreviewHoverStyle: I,
            spec: h = G,
            guildId: E,
            channelId: L,
            numMoreItems: k,
        } = t,
        [M, b] = a.useState(!1),
        N = null != k && k > 0,
        R = a.useCallback(() => {
            if (N) return void r();
            let t = u === f.uS.WISHLIST ? "wishlist" : "shop";
            _.default.track(C.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: i.id,
                item_source: t,
                wishlist_id: u === f.uS.WISHLIST ? c : null,
                product_line: i.productLine,
            }),
                e?.();
        }, [e, c, u, i.id, i.productLine, r, N]),
        y = a.useCallback(() => {
            let t = u === f.uS.WISHLIST ? "wishlist" : "shop";
            _.default.track(C.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: i.id,
                item_source: t,
                wishlist_id: u === f.uS.WISHLIST ? c : null,
                product_line: i.productLine,
            }),
                s?.();
        }, [s, i.id, i.productLine, u, c]),
        {
            label: w,
            icon: P,
            isPromptingPurchase: v,
        } = (0, T.hB)({ sku: i, wishlistOwner: o, isOwned: !1, location: "DM Gifting Modal Wishlist Item Card" });
    return (0, n.jsxs)(p.A, {
        sku: i,
        user: o,
        spec: h,
        skuPreviewStyle: l()(O.e, g, M ? I : void 0),
        onClick: R,
        onHoverOrFocusChange: b,
        children: [
            d &&
                u === f.uS.WISHLIST &&
                (0, n.jsx)(S.X, { spec: h, users: [o], guildId: E ?? void 0, channelId: L ?? void 0 }),
            (0, n.jsx)(A.A, {
                spec: h,
                sku: i,
                isCardHovered: M && !N,
                location: "DMGiftingModalWishlistItemCardBase",
            }),
            !N && (0, n.jsx)(T.AJ, { spec: h, onClick: v ? y : R, label: w, icon: P, isHoveringOrFocusing: M }),
            N && (0, n.jsx)(m.Yb, { count: k }),
        ],
    });
}
function N(t) {
    let { sku: i, wishlistOwner: e, analyticsLocations: s, onClick: l, hasMultipleSources: r, source: d, ..._ } = t,
        f = (0, o.bG)([u.A], () => u.A.getApplication(i.applicationId)),
        p = a.useCallback(() => {
            l?.(),
                null != f &&
                    null != f.guildId &&
                    (0, g.R)({
                        skuId: i.id,
                        applicationId: i.applicationId,
                        guildId: f.guildId,
                        isStorefront: !1,
                        analyticsLocations: s ?? [],
                    });
        }, [s, f, l, i.applicationId, i.id]),
        A = a.useCallback(() => {
            l?.(),
                (0, I.a)(
                    i,
                    { isGift: !0, giftRecipient: e, giftingOrigin: k },
                    { analyticsLocations: [...(s ?? []), c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [i, e, s, l]);
    return (0, n.jsx)(b, {
        sku: i,
        wishlistOwner: e,
        analyticsLocations: s,
        onDetailsClick: p,
        onPurchaseClick: A,
        hasMultipleSources: r,
        source: d,
        ..._,
    });
}
function R(t) {
    let { sku: i, wishlistOwner: e, analyticsLocations: s, onClick: o, hasMultipleSources: c, source: u, ...g } = t,
        I = (0, h.e)({ sku: i, analyticsLocations: s }),
        _ = a.useCallback(() => {
            o?.(),
                (0, d.A)({ skuId: i.id, isGift: !0, giftingOrigin: k, analyticsLocations: s ?? [], giftRecipient: e });
        }, [o, i.id, s, e]),
        f = a.useCallback(() => {
            o?.(), I();
        }, [o, I]);
    return (0, n.jsx)(b, {
        sku: i,
        wishlistOwner: e,
        analyticsLocations: s,
        onDetailsClick: f,
        onPurchaseClick: _,
        hasMultipleSources: c,
        source: u,
        skuPreviewHoverStyle: l()({
            [O.m]:
                (null != i.bundledSkus && i.bundledSkus.length > 0) ||
                (i.tenantMetadata?.collectibles?.type !== r.R.NAMEPLATE &&
                    i.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT),
        }),
        ...g,
    });
}
function y(t) {
    let { sku: i, ...e } = t;
    switch (i.productLine) {
        case C.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(N, { sku: i, ...e });
        case C.EZt.COLLECTIBLES:
            return (0, n.jsx)(R, { sku: i, ...e });
        default:
            return null;
    }
}
