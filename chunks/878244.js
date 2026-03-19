i.d(e, { A: () => b, O: () => y });
var n = i(627968),
    r = i(64700),
    a = i(503698),
    s = i.n(a),
    l = i(575593),
    o = i(311907),
    c = i(793574),
    u = i(587895),
    d = i(44120),
    g = i(317560),
    I = i(533406),
    _ = i(954571),
    p = i(594832),
    A = i(146423),
    f = i(121700),
    T = i(460442),
    C = i(662349),
    S = i(754804),
    E = i(479026),
    L = i(699976),
    O = i(652215),
    h = i(788868),
    k = i(607216);
let G = h.vQ.DM_CHANNEL_WISHLIST,
    m = L.Z.SIZE_133;
function y(t) {
    let { spec: e = m } = t;
    return (0, n.jsx)(A.$, { spec: e });
}
function M(t) {
    let {
            sku: e,
            onDetailsClick: i,
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
        [y, M] = r.useState(!1),
        R = null != G && G > 0,
        N = r.useCallback(() => {
            if (R) return void l();
            let t = u === p.uS.WISHLIST ? "wishlist" : "shop";
            _.default.track(O.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: t,
                wishlist_id: u === p.uS.WISHLIST ? c : null,
                product_line: e.productLine,
            }),
                i?.();
        }, [i, c, u, e.id, e.productLine, l, R]),
        b = r.useCallback(() => {
            let t = u === p.uS.WISHLIST ? "wishlist" : "shop";
            _.default.track(O.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: t,
                wishlist_id: u === p.uS.WISHLIST ? c : null,
                product_line: e.productLine,
            }),
                a?.();
        }, [a, e.id, e.productLine, u, c]),
        {
            label: P,
            icon: v,
            isPromptingPurchase: x,
        } = (0, C.h)({ sku: e, wishlistOwner: o, isOwned: !1, location: "DM Gifting Modal Wishlist Item Card" });
    return (0, n.jsxs)(A.A, {
        sku: e,
        user: o,
        spec: E,
        skuPreviewStyle: s()(k.e, g, y ? I : void 0),
        onClick: N,
        onHoverOrFocusChange: M,
        children: [
            d &&
                u === p.uS.WISHLIST &&
                (0, n.jsx)(S.X, { spec: E, users: [o], guildId: L ?? void 0, channelId: h ?? void 0 }),
            (0, n.jsx)(f.A, {
                spec: E,
                sku: e,
                isCardHovered: y && !R,
                location: "DMGiftingModalWishlistItemCardBase",
            }),
            !R && (0, n.jsx)(C.A, { spec: E, onClick: x ? b : N, label: P, icon: v, isHoveringOrFocusing: y }),
            R && (0, n.jsx)(T.Yb, { count: G }),
        ],
    });
}
function R(t) {
    let { sku: e, wishlistOwner: i, analyticsLocations: a, onClick: s, hasMultipleSources: l, source: d, ..._ } = t,
        p = (0, o.bG)([u.A], () => u.A.getApplication(e.applicationId)),
        A = r.useCallback(() => {
            s?.(),
                null != p &&
                    null != p.guildId &&
                    (0, g.R)({
                        skuId: e.id,
                        applicationId: e.applicationId,
                        guildId: p.guildId,
                        isStorefront: !1,
                        analyticsLocations: a ?? [],
                    });
        }, [a, p, s, e.applicationId, e.id]),
        f = r.useCallback(() => {
            s?.(),
                (0, I.a)(
                    e,
                    { isGift: !0, giftRecipient: i, giftingOrigin: G },
                    { analyticsLocations: [...(a ?? []), c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [e, i, a, s]);
    return (0, n.jsx)(M, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: a,
        onDetailsClick: A,
        onPurchaseClick: f,
        hasMultipleSources: l,
        source: d,
        ..._,
    });
}
function N(t) {
    let { sku: e, wishlistOwner: i, analyticsLocations: a, onClick: o, hasMultipleSources: c, source: u, ...g } = t,
        I = (0, E.e)({ sku: e, analyticsLocations: a }),
        _ = r.useCallback(() => {
            o?.(),
                (0, d.A)({ skuId: e.id, isGift: !0, giftingOrigin: G, analyticsLocations: a ?? [], giftRecipient: i });
        }, [o, e.id, a, i]),
        p = r.useCallback(() => {
            o?.(), I();
        }, [o, I]);
    return (0, n.jsx)(M, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: a,
        onDetailsClick: p,
        onPurchaseClick: _,
        hasMultipleSources: c,
        source: u,
        skuPreviewHoverStyle: s()({
            [k.m]:
                (null != e.bundledSkus && e.bundledSkus.length > 0) ||
                (e.tenantMetadata?.collectibles?.type !== l.R.NAMEPLATE &&
                    e.tenantMetadata?.collectibles?.type !== l.R.PROFILE_EFFECT),
        }),
        ...g,
    });
}
function b(t) {
    let { sku: e, ...i } = t;
    switch (e.productLine) {
        case O.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(R, { sku: e, ...i });
        case O.EZt.COLLECTIBLES:
            return (0, n.jsx)(N, { sku: e, ...i });
        default:
            return null;
    }
}
