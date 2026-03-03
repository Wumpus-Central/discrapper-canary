"use strict";
i.d(e, { A: () => M, O: () => G });
var n = i(627968),
    s = i(64700),
    a = i(575593),
    r = i(635358),
    l = i(311907),
    o = i(793574),
    c = i(587895),
    d = i(44120),
    u = i(317560),
    _ = i(533406),
    I = i(954571),
    g = i(594832),
    A = i(146423),
    p = i(460442),
    S = i(662349),
    E = i(754804),
    T = i(479026),
    f = i(699976),
    L = i(652215),
    C = i(788868),
    m = i(804810);
let N = C.vQ.DM_CHANNEL_WISHLIST,
    O = f.Z.SIZE_133;
function G(t) {
    let { spec: e = O } = t;
    return (0, n.jsx)(A.$, { spec: e });
}
function b(t) {
    let {
            sku: e,
            onClick: i,
            onButtonClick: a,
            onOpenWishlist: r,
            wishlistOwner: l,
            wishlistId: o,
            source: c,
            hasMultipleSources: d,
            totalUnownedWishlistItems: u,
            index: _,
            skuPreviewStyle: T,
            maxWishlistLength: f,
            spec: C = O,
            guildId: m,
            channelId: N,
        } = t,
        G = s.useMemo(() => ({ collectibles: { nameplate: { width: 136 } } }), []),
        [b, R] = s.useState(!1),
        h = _ === f - 1 && u > f,
        M = s.useCallback(() => {
            if (h) return void r();
            let t = c === g.uS.WISHLIST ? "wishlist" : "shop";
            I.default.track(L.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: t,
                wishlist_id: c === g.uS.WISHLIST ? o : null,
                product_line: e.productLine,
            }),
                i?.();
        }, [i, o, c, e.id, e.productLine, r, h]),
        k = s.useCallback(() => {
            let t = c === g.uS.WISHLIST ? "wishlist" : "shop";
            I.default.track(L.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: t,
                wishlist_id: c === g.uS.WISHLIST ? o : null,
                product_line: e.productLine,
            }),
                a?.();
        }, [a, e.id, e.productLine, c, o]),
        { label: y, icon: U } = (0, S.hB)({
            sku: e,
            wishlistOwner: l,
            isOwned: !1,
            location: "DM Gifting Modal Wishlist Item Card",
        });
    return (0, n.jsxs)(A.A, {
        sku: e,
        user: l,
        spec: C,
        skuPreviewStyle: T,
        options: G,
        onClick: M,
        onHoverOrFocusChange: R,
        children: [
            d &&
                c === g.uS.WISHLIST &&
                (0, n.jsx)(E.X, { spec: C, users: [l], guildId: m ?? void 0, channelId: N ?? void 0 }),
            !h && (0, n.jsx)(S.AJ, { spec: C, onClick: k, label: y, icon: U, isHoveringOrFocusing: b }),
            h && (0, n.jsx)(p.Yb, { count: u - f + 1 }),
        ],
    });
}
function R(t) {
    let { sku: e, wishlistOwner: i, analyticsLocations: a, onClick: r, hasMultipleSources: d, source: I, ...g } = t,
        A = (0, l.bG)([c.A], () => c.A.getApplication(e.applicationId)),
        p = s.useCallback(() => {
            r?.(),
                null != A &&
                    null != A.guildId &&
                    (0, u.R)({
                        skuId: e.id,
                        applicationId: e.applicationId,
                        guildId: A.guildId,
                        isStorefront: !1,
                        analyticsLocations: a ?? [],
                    });
        }, [a, A, r, e.applicationId, e.id]),
        S = s.useCallback(() => {
            r?.(),
                (0, _.a)(
                    e,
                    { isGift: !0, giftRecipient: i, giftingOrigin: N },
                    { analyticsLocations: [...(a ?? []), o.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [e, i, a, r]);
    return (0, n.jsx)(b, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: a,
        onClick: p,
        onButtonClick: S,
        hasMultipleSources: d,
        source: I,
        ...g,
    });
}
function h(t) {
    let { sku: e, wishlistOwner: i, analyticsLocations: l, onClick: o, hasMultipleSources: c, source: u, ..._ } = t,
        I = (0, T.ez)({ sku: e, analyticsLocations: l }),
        g = s.useMemo(
            () =>
                null != e.bundledSkus && e.bundledSkus.length > 0
                    ? m.E
                    : e.tenantMetadata?.collectibles?.type === a.R.NAMEPLATE
                      ? m.q
                      : void 0,
            [e.bundledSkus, e.tenantMetadata?.collectibles?.type],
        ),
        A = s.useCallback(() => {
            o?.(),
                (0, d.A)({
                    skuId: e.id,
                    isGift: !0,
                    giftingOrigin: N,
                    analyticsLocations: l ?? [],
                    giftRecipient: i,
                    variantsReturnStyle: r.g.VARIANTS_GROUP,
                });
        }, [o, e.id, l, i]),
        p = s.useCallback(() => {
            o?.(), I();
        }, [o, I]);
    return (0, n.jsx)(b, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: l,
        onClick: p,
        onButtonClick: A,
        hasMultipleSources: c,
        source: u,
        skuPreviewStyle: g,
        ..._,
    });
}
function M(t) {
    let { sku: e, ...i } = t;
    switch (e.productLine) {
        case L.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(R, { sku: e, ...i });
        case L.EZt.COLLECTIBLES:
            return (0, n.jsx)(h, { sku: e, ...i });
        default:
            return null;
    }
}
