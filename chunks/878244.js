"use strict";
i.d(e, { A: () => M, O: () => b });
var n = i(627968),
    r = i(64700),
    s = i(503698),
    a = i.n(s),
    l = i(575593),
    o = i(311907),
    u = i(793574),
    c = i(587895),
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
            onPurchaseClick: s,
            onOpenWishlist: l,
            wishlistOwner: o,
            wishlistId: u,
            source: c,
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
        [G, R] = r.useState(!1),
        M = I === L - 1 && g > L,
        N = r.useCallback(() => {
            if (M) return void l();
            let t = c === p.uS.WISHLIST ? "wishlist" : "shop";
            _.default.track(E.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: t,
                wishlist_id: c === p.uS.WISHLIST ? u : null,
                product_line: e.productLine,
            }),
                i?.();
        }, [i, u, c, e.id, e.productLine, l, M]),
        P = r.useCallback(() => {
            let t = c === p.uS.WISHLIST ? "wishlist" : "shop";
            _.default.track(E.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: t,
                wishlist_id: c === p.uS.WISHLIST ? u : null,
                product_line: e.productLine,
            }),
                s?.();
        }, [s, e.id, e.productLine, c, u]),
        {
            label: v,
            icon: w,
            isPromptingPurchase: x,
        } = (0, S.hB)({ sku: e, wishlistOwner: o, isOwned: !1, location: "DM Gifting Modal Wishlist Item Card" });
    return (0, n.jsxs)(A.A, {
        sku: e,
        user: o,
        spec: h,
        skuPreviewStyle: a()(O.e, C, G ? T : void 0),
        onClick: N,
        onHoverOrFocusChange: R,
        children: [
            d &&
                c === p.uS.WISHLIST &&
                (0, n.jsx)(f.X, { spec: h, users: [o], guildId: b ?? void 0, channelId: y ?? void 0 }),
            !M && (0, n.jsx)(S.AJ, { spec: h, onClick: x ? P : N, label: v, icon: w, isHoveringOrFocusing: G }),
            M && (0, n.jsx)(m.Yb, { count: g - L + 1 }),
        ],
    });
}
function G(t) {
    let { sku: e, wishlistOwner: i, analyticsLocations: s, onClick: a, hasMultipleSources: l, source: d, ..._ } = t,
        p = (0, o.bG)([c.A], () => c.A.getApplication(e.applicationId)),
        A = r.useCallback(() => {
            a?.(),
                null != p &&
                    null != p.guildId &&
                    (0, g.R)({
                        skuId: e.id,
                        applicationId: e.applicationId,
                        guildId: p.guildId,
                        isStorefront: !1,
                        analyticsLocations: s ?? [],
                    });
        }, [s, p, a, e.applicationId, e.id]),
        m = r.useCallback(() => {
            a?.(),
                (0, I.a)(
                    e,
                    { isGift: !0, giftRecipient: i, giftingOrigin: h },
                    { analyticsLocations: [...(s ?? []), u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [e, i, s, a]);
    return (0, n.jsx)(y, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: s,
        onDetailsClick: A,
        onPurchaseClick: m,
        hasMultipleSources: l,
        source: d,
        ..._,
    });
}
function R(t) {
    let { sku: e, wishlistOwner: i, analyticsLocations: s, onClick: o, hasMultipleSources: u, source: c, ...g } = t,
        I = (0, C.e)({ sku: e, analyticsLocations: s }),
        _ = r.useCallback(() => {
            o?.(),
                (0, d.A)({ skuId: e.id, isGift: !0, giftingOrigin: h, analyticsLocations: s ?? [], giftRecipient: i });
        }, [o, e.id, s, i]),
        p = r.useCallback(() => {
            o?.(), I();
        }, [o, I]);
    return (0, n.jsx)(y, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: s,
        onDetailsClick: p,
        onPurchaseClick: _,
        hasMultipleSources: u,
        source: c,
        skuPreviewHoverStyle: a()({
            [O.m]:
                (null != e.bundledSkus && e.bundledSkus.length > 0) ||
                (e.tenantMetadata?.collectibles?.type !== l.R.NAMEPLATE &&
                    e.tenantMetadata?.collectibles?.type !== l.R.PROFILE_EFFECT),
        }),
        ...g,
    });
}
function M(t) {
    let { sku: e, ...i } = t;
    switch (e.productLine) {
        case E.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(G, { sku: e, ...i });
        case E.EZt.COLLECTIBLES:
            return (0, n.jsx)(R, { sku: e, ...i });
        default:
            return null;
    }
}
