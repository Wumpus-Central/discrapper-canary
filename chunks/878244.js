e.d(i, { A: () => b, O: () => R });
var n = e(627968),
    r = e(64700),
    a = e(503698),
    s = e.n(a),
    l = e(575593),
    o = e(311907),
    c = e(793574),
    u = e(587895),
    d = e(44120),
    g = e(317560),
    I = e(533406),
    _ = e(954571),
    p = e(594832),
    A = e(146423),
    f = e(121700),
    T = e(460442),
    C = e(662349),
    S = e(754804),
    E = e(479026),
    L = e(699976),
    O = e(652215),
    h = e(788868),
    k = e(804810);
let G = h.vQ.DM_CHANNEL_WISHLIST,
    m = L.Z.SIZE_133;
function R(t) {
    let { spec: i = m } = t;
    return (0, n.jsx)(A.$, { spec: i });
}
function y(t) {
    let {
            sku: i,
            onDetailsClick: e,
            onPurchaseClick: a,
            onOpenWishlist: l,
            wishlistOwner: o,
            wishlistId: c,
            source: u,
            hasMultipleSources: d,
            skuPreviewStyle: g,
            skuPreviewHoverStyle: I,
            spec: E = m,
            guildId: L,
            channelId: h,
            numMoreItems: G,
        } = t,
        [R, y] = r.useState(!1),
        M = null != G && G > 0,
        N = r.useCallback(() => {
            if (M) return void l();
            let t = u === p.uS.WISHLIST ? "wishlist" : "shop";
            _.default.track(O.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: i.id,
                item_source: t,
                wishlist_id: u === p.uS.WISHLIST ? c : null,
                product_line: i.productLine,
            }),
                e?.();
        }, [e, c, u, i.id, i.productLine, l, M]),
        b = r.useCallback(() => {
            let t = u === p.uS.WISHLIST ? "wishlist" : "shop";
            _.default.track(O.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: i.id,
                item_source: t,
                wishlist_id: u === p.uS.WISHLIST ? c : null,
                product_line: i.productLine,
            }),
                a?.();
        }, [a, i.id, i.productLine, u, c]),
        {
            label: P,
            icon: v,
            isPromptingPurchase: x,
        } = (0, C.h)({ sku: i, wishlistOwner: o, isOwned: !1, location: "DM Gifting Modal Wishlist Item Card" });
    return (0, n.jsxs)(A.A, {
        sku: i,
        user: o,
        spec: E,
        skuPreviewStyle: s()(k.e, g, R ? I : void 0),
        onClick: N,
        onHoverOrFocusChange: y,
        children: [
            d &&
                u === p.uS.WISHLIST &&
                (0, n.jsx)(S.X, { spec: E, users: [o], guildId: L ?? void 0, channelId: h ?? void 0 }),
            (0, n.jsx)(f.A, {
                spec: E,
                sku: i,
                isCardHovered: R && !M,
                location: "DMGiftingModalWishlistItemCardBase",
            }),
            !M && (0, n.jsx)(C.A, { spec: E, onClick: x ? b : N, label: P, icon: v, isHoveringOrFocusing: R }),
            M && (0, n.jsx)(T.Yb, { count: G }),
        ],
    });
}
function M(t) {
    let { sku: i, wishlistOwner: e, analyticsLocations: a, onClick: s, hasMultipleSources: l, source: d, ..._ } = t,
        p = (0, o.bG)([u.A], () => u.A.getApplication(i.applicationId)),
        A = r.useCallback(() => {
            s?.(),
                null != p &&
                    null != p.guildId &&
                    (0, g.R)({
                        skuId: i.id,
                        applicationId: i.applicationId,
                        guildId: p.guildId,
                        isStorefront: !1,
                        giftRecipient: e,
                        giftingOrigin: G,
                        analyticsLocations: a ?? [],
                    });
        }, [a, p, s, i.applicationId, i.id, e]),
        f = r.useCallback(() => {
            s?.(),
                (0, I.a)(
                    i,
                    { isGift: !0, giftRecipient: e, giftingOrigin: G },
                    { analyticsLocations: [...(a ?? []), c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [i, e, a, s]);
    return (0, n.jsx)(y, {
        sku: i,
        wishlistOwner: e,
        analyticsLocations: a,
        onDetailsClick: A,
        onPurchaseClick: f,
        hasMultipleSources: l,
        source: d,
        ..._,
    });
}
function N(t) {
    let { sku: i, wishlistOwner: e, analyticsLocations: a, onClick: o, hasMultipleSources: c, source: u, ...g } = t,
        I = (0, E.e)({ sku: i, giftRecipient: e, giftingOrigin: G, analyticsLocations: a }),
        _ = r.useCallback(() => {
            o?.(),
                (0, d.A)({ skuId: i.id, isGift: !0, giftingOrigin: G, analyticsLocations: a ?? [], giftRecipient: e });
        }, [o, i.id, a, e]),
        p = r.useCallback(() => {
            o?.(), I();
        }, [o, I]);
    return (0, n.jsx)(y, {
        sku: i,
        wishlistOwner: e,
        analyticsLocations: a,
        onDetailsClick: p,
        onPurchaseClick: _,
        hasMultipleSources: c,
        source: u,
        skuPreviewHoverStyle: s()({
            [k.m]:
                (null != i.bundledSkus && i.bundledSkus.length > 0) ||
                (i.tenantMetadata?.collectibles?.type !== l.R.NAMEPLATE &&
                    i.tenantMetadata?.collectibles?.type !== l.R.PROFILE_EFFECT),
        }),
        ...g,
    });
}
function b(t) {
    let { sku: i, ...e } = t;
    switch (i.productLine) {
        case O.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(M, { sku: i, ...e });
        case O.EZt.COLLECTIBLES:
            return (0, n.jsx)(N, { sku: i, ...e });
        default:
            return null;
    }
}
