"use strict";
i.d(e, { A: () => G, O: () => b });
var n = i(627968),
    s = i(64700),
    r = i(503698),
    a = i.n(r),
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
    m = i(460442),
    S = i(662349),
    f = i(754804),
    C = i(479026),
    T = i(699976),
    E = i(652215),
    L = i(788868),
    O = i(607216);
let h = L.vQ.DM_CHANNEL_WISHLIST,
    k = T.Z.SIZE_133;
function b(t) {
    let { spec: e = k } = t;
    return (0, n.jsx)(A.$, { spec: e });
}
function y(t) {
    let {
            sku: e,
            onDetailsClick: i,
            onPurchaseClick: r,
            onOpenWishlist: l,
            wishlistOwner: o,
            wishlistId: c,
            source: u,
            hasMultipleSources: d,
            totalUnownedWishlistItems: g,
            index: I,
            skuPreviewStyle: C,
            skuPreviewHoverStyle: T,
            maxWishlistLength: L,
            spec: h = k,
            guildId: b,
            channelId: y,
        } = t,
        M = s.useMemo(() => ({ collectibles: { nameplate: { width: 136 } } }), []),
        [R, G] = s.useState(!1),
        N = I === L - 1 && g > L,
        P = s.useCallback(() => {
            if (N) return void l();
            let t = u === p.uS.WISHLIST ? "wishlist" : "shop";
            _.default.track(E.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: t,
                wishlist_id: u === p.uS.WISHLIST ? c : null,
                product_line: e.productLine,
            }),
                i?.();
        }, [i, c, u, e.id, e.productLine, l, N]),
        v = s.useCallback(() => {
            let t = u === p.uS.WISHLIST ? "wishlist" : "shop";
            _.default.track(E.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: t,
                wishlist_id: u === p.uS.WISHLIST ? c : null,
                product_line: e.productLine,
            }),
                r?.();
        }, [r, e.id, e.productLine, u, c]),
        {
            label: w,
            icon: x,
            isPromptingPurchase: U,
        } = (0, S.hB)({ sku: e, wishlistOwner: o, isOwned: !1, location: "DM Gifting Modal Wishlist Item Card" });
    return (0, n.jsxs)(A.A, {
        sku: e,
        user: o,
        spec: h,
        skuPreviewStyle: a()(O.ev, C, R ? T : void 0),
        options: M,
        onClick: P,
        onHoverOrFocusChange: G,
        children: [
            d &&
                u === p.uS.WISHLIST &&
                (0, n.jsx)(f.X, { spec: h, users: [o], guildId: b ?? void 0, channelId: y ?? void 0 }),
            !N && (0, n.jsx)(S.AJ, { spec: h, onClick: U ? v : P, label: w, icon: x, isHoveringOrFocusing: R }),
            N && (0, n.jsx)(m.Yb, { count: g - L + 1 }),
        ],
    });
}
function M(t) {
    let { sku: e, wishlistOwner: i, analyticsLocations: r, onClick: a, hasMultipleSources: l, source: d, ..._ } = t,
        p = (0, o.bG)([u.A], () => u.A.getApplication(e.applicationId)),
        A = s.useCallback(() => {
            a?.(),
                null != p &&
                    null != p.guildId &&
                    (0, g.R)({
                        skuId: e.id,
                        applicationId: e.applicationId,
                        guildId: p.guildId,
                        isStorefront: !1,
                        analyticsLocations: r ?? [],
                    });
        }, [r, p, a, e.applicationId, e.id]),
        m = s.useCallback(() => {
            a?.(),
                (0, I.a)(
                    e,
                    { isGift: !0, giftRecipient: i, giftingOrigin: h },
                    { analyticsLocations: [...(r ?? []), c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [e, i, r, a]);
    return (0, n.jsx)(y, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: r,
        onDetailsClick: A,
        onPurchaseClick: m,
        hasMultipleSources: l,
        source: d,
        ..._,
    });
}
function R(t) {
    let { sku: e, wishlistOwner: i, analyticsLocations: r, onClick: o, hasMultipleSources: c, source: u, ...g } = t,
        I = (0, C.e)({ sku: e, analyticsLocations: r }),
        _ = s.useCallback(() => {
            o?.(),
                (0, d.A)({ skuId: e.id, isGift: !0, giftingOrigin: h, analyticsLocations: r ?? [], giftRecipient: i });
        }, [o, e.id, r, i]),
        p = s.useCallback(() => {
            o?.(), I();
        }, [o, I]);
    return (0, n.jsx)(y, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: r,
        onDetailsClick: p,
        onPurchaseClick: _,
        hasMultipleSources: c,
        source: u,
        skuPreviewStyle: a()({ [O.qF]: e.tenantMetadata?.collectibles?.type === l.R.NAMEPLATE }),
        skuPreviewHoverStyle: a()({
            [O.mn]:
                (null != e.bundledSkus && e.bundledSkus.length > 0) ||
                (e.tenantMetadata?.collectibles?.type !== l.R.NAMEPLATE &&
                    e.tenantMetadata?.collectibles?.type !== l.R.PROFILE_EFFECT),
        }),
        ...g,
    });
}
function G(t) {
    let { sku: e, ...i } = t;
    switch (e.productLine) {
        case E.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(M, { sku: e, ...i });
        case E.EZt.COLLECTIBLES:
            return (0, n.jsx)(R, { sku: e, ...i });
        default:
            return null;
    }
}
