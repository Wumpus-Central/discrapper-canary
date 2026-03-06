"use strict";
i.d(e, { A: () => N, O: () => R });
var n = i(627968),
    r = i(64700),
    s = i(503698),
    a = i.n(s),
    l = i(575593),
    o = i(635358),
    c = i(311907),
    u = i(793574),
    d = i(587895),
    g = i(44120),
    I = i(317560),
    _ = i(533406),
    p = i(954571),
    A = i(594832),
    m = i(146423),
    S = i(460442),
    f = i(662349),
    T = i(754804),
    C = i(479026),
    E = i(699976),
    L = i(652215),
    O = i(788868),
    h = i(607216);
let k = O.vQ.DM_CHANNEL_WISHLIST,
    b = E.Z.SIZE_133;
function R(t) {
    let { spec: e = b } = t;
    return (0, n.jsx)(m.$, { spec: e });
}
function y(t) {
    let {
            sku: e,
            onDetailsClick: i,
            onPurchaseClick: s,
            onOpenWishlist: l,
            wishlistOwner: o,
            wishlistId: c,
            source: u,
            hasMultipleSources: d,
            totalUnownedWishlistItems: g,
            index: I,
            skuPreviewStyle: _,
            skuPreviewHoverStyle: C,
            maxWishlistLength: E,
            spec: O = b,
            guildId: k,
            channelId: R,
        } = t,
        y = r.useMemo(() => ({ collectibles: { nameplate: { width: 136 } } }), []),
        [M, G] = r.useState(!1),
        N = I === E - 1 && g > E,
        P = r.useCallback(() => {
            if (N) return void l();
            let t = u === A.uS.WISHLIST ? "wishlist" : "shop";
            p.default.track(L.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: t,
                wishlist_id: u === A.uS.WISHLIST ? c : null,
                product_line: e.productLine,
            }),
                i?.();
        }, [i, c, u, e.id, e.productLine, l, N]),
        v = r.useCallback(() => {
            let t = u === A.uS.WISHLIST ? "wishlist" : "shop";
            p.default.track(L.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: t,
                wishlist_id: u === A.uS.WISHLIST ? c : null,
                product_line: e.productLine,
            }),
                s?.();
        }, [s, e.id, e.productLine, u, c]),
        {
            label: w,
            icon: x,
            isPromptingPurchase: U,
        } = (0, f.hB)({ sku: e, wishlistOwner: o, isOwned: !1, location: "DM Gifting Modal Wishlist Item Card" });
    return (0, n.jsxs)(m.A, {
        sku: e,
        user: o,
        spec: O,
        skuPreviewStyle: a()(h.ev, _, M ? C : void 0),
        options: y,
        onClick: P,
        onHoverOrFocusChange: G,
        children: [
            d &&
                u === A.uS.WISHLIST &&
                (0, n.jsx)(T.X, { spec: O, users: [o], guildId: k ?? void 0, channelId: R ?? void 0 }),
            !N && (0, n.jsx)(f.AJ, { spec: O, onClick: U ? v : P, label: w, icon: x, isHoveringOrFocusing: M }),
            N && (0, n.jsx)(S.Yb, { count: g - E + 1 }),
        ],
    });
}
function M(t) {
    let { sku: e, wishlistOwner: i, analyticsLocations: s, onClick: a, hasMultipleSources: l, source: o, ...g } = t,
        p = (0, c.bG)([d.A], () => d.A.getApplication(e.applicationId)),
        A = r.useCallback(() => {
            a?.(),
                null != p &&
                    null != p.guildId &&
                    (0, I.R)({
                        skuId: e.id,
                        applicationId: e.applicationId,
                        guildId: p.guildId,
                        isStorefront: !1,
                        analyticsLocations: s ?? [],
                    });
        }, [s, p, a, e.applicationId, e.id]),
        m = r.useCallback(() => {
            a?.(),
                (0, _.a)(
                    e,
                    { isGift: !0, giftRecipient: i, giftingOrigin: k },
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
        source: o,
        ...g,
    });
}
function G(t) {
    let { sku: e, wishlistOwner: i, analyticsLocations: s, onClick: c, hasMultipleSources: u, source: d, ...I } = t,
        _ = (0, C.e)({ sku: e, analyticsLocations: s }),
        p = r.useCallback(() => {
            c?.(),
                (0, g.A)({
                    skuId: e.id,
                    isGift: !0,
                    giftingOrigin: k,
                    analyticsLocations: s ?? [],
                    giftRecipient: i,
                    variantsReturnStyle: o.g.VARIANTS_GROUP,
                });
        }, [c, e.id, s, i]),
        A = r.useCallback(() => {
            c?.(), _();
        }, [c, _]);
    return (0, n.jsx)(y, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: s,
        onDetailsClick: A,
        onPurchaseClick: p,
        hasMultipleSources: u,
        source: d,
        skuPreviewStyle: a()({ [h.qF]: e.tenantMetadata?.collectibles?.type === l.R.NAMEPLATE }),
        skuPreviewHoverStyle: a()({
            [h.mn]:
                (null != e.bundledSkus && e.bundledSkus.length > 0) ||
                (e.tenantMetadata?.collectibles?.type !== l.R.NAMEPLATE &&
                    e.tenantMetadata?.collectibles?.type !== l.R.PROFILE_EFFECT),
        }),
        ...I,
    });
}
function N(t) {
    let { sku: e, ...i } = t;
    switch (e.productLine) {
        case L.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(M, { sku: e, ...i });
        case L.EZt.COLLECTIBLES:
            return (0, n.jsx)(G, { sku: e, ...i });
        default:
            return null;
    }
}
