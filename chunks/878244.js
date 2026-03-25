i.d(e, { A: () => v, O: () => M });
var n = i(627968),
    r = i(64700),
    a = i(503698),
    l = i.n(a),
    s = i(575593),
    o = i(311907),
    c = i(793574),
    u = i(587895),
    d = i(44120),
    g = i(317560),
    I = i(533406),
    _ = i(954571),
    p = i(661492),
    A = i(594832),
    f = i(146423),
    T = i(121700),
    C = i(460442),
    S = i(662349),
    E = i(754804),
    L = i(479026),
    O = i(699976),
    h = i(652215),
    m = i(788868),
    k = i(985018),
    G = i(804810);
let y = m.vQ.DM_CHANNEL_WISHLIST,
    R = O.Z.SIZE_133;
function M(t) {
    let { spec: e = R } = t;
    return (0, n.jsx)(f.$, { spec: e });
}
function N(t) {
    let {
            sku: e,
            onDetailsClick: i,
            onPurchaseClick: a,
            onOpenWishlist: s,
            wishlistOwner: o,
            wishlistId: c,
            source: u,
            hasMultipleSources: d,
            skuPreviewStyle: g,
            skuPreviewHoverStyle: I,
            spec: L = R,
            guildId: O,
            channelId: m,
            numMoreItems: y,
        } = t,
        [M, N] = r.useState(!1),
        b = null != y && y > 0,
        P = r.useCallback(() => {
            if (b) return void s();
            let t = u === A.uS.WISHLIST ? "wishlist" : "shop";
            _.default.track(h.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: t,
                wishlist_id: u === A.uS.WISHLIST ? c : null,
                product_line: e.productLine,
            }),
                i?.();
        }, [i, c, u, e.id, e.productLine, s, b]),
        v = r.useCallback(() => {
            let t = u === A.uS.WISHLIST ? "wishlist" : "shop";
            _.default.track(h.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: t,
                wishlist_id: u === A.uS.WISHLIST ? c : null,
                product_line: e.productLine,
            }),
                a?.();
        }, [a, e.id, e.productLine, u, c]),
        {
            label: x,
            icon: w,
            isPromptingPurchase: D,
        } = (0, S.h)({ sku: e, wishlistOwner: o, isOwned: !1, location: "DM Gifting Modal Wishlist Item Card" });
    return (0, n.jsxs)(f.A, {
        sku: e,
        user: o,
        spec: L,
        skuPreviewStyle: l()(G.e, g, M ? I : void 0),
        onClick: P,
        "aria-label": b
            ? k.intl.formatToPlainString(k.t["8uYD+I"], { username: o.username })
            : k.intl.formatToPlainString(k.t.ZBB4Ty, { productName: (0, p.TC)(e) }),
        onHoverOrFocusChange: N,
        children: [
            (0, n.jsx)(T.A, {
                spec: L,
                sku: e,
                isCardHovered: M && !b,
                location: "DMGiftingModalWishlistItemCardBase",
                replacedElement:
                    d && u === A.uS.WISHLIST
                        ? (0, n.jsx)(E.X, { spec: L, users: [o], guildId: O ?? void 0, channelId: m ?? void 0 })
                        : null,
            }),
            !b && (0, n.jsx)(S.A, { spec: L, onClick: D ? v : P, label: x, icon: w, isHoveringOrFocusing: M }),
            b && (0, n.jsx)(C.Yb, { count: y }),
        ],
    });
}
function b(t) {
    let { sku: e, wishlistOwner: i, analyticsLocations: a, onClick: l, hasMultipleSources: s, source: d, ..._ } = t,
        p = (0, o.bG)([u.A], () => u.A.getApplication(e.applicationId)),
        A = r.useCallback(() => {
            l?.(),
                null != p &&
                    null != p.guildId &&
                    (0, g.R)({
                        skuId: e.id,
                        applicationId: e.applicationId,
                        guildId: p.guildId,
                        isStorefront: !1,
                        giftRecipient: i,
                        giftingOrigin: y,
                        analyticsLocations: a ?? [],
                    });
        }, [a, p, l, e.applicationId, e.id, i]),
        f = r.useCallback(() => {
            l?.(),
                (0, I.a)(
                    e,
                    { isGift: !0, giftRecipient: i, giftingOrigin: y },
                    { analyticsLocations: [...(a ?? []), c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [e, i, a, l]);
    return (0, n.jsx)(N, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: a,
        onDetailsClick: A,
        onPurchaseClick: f,
        hasMultipleSources: s,
        source: d,
        ..._,
    });
}
function P(t) {
    let { sku: e, wishlistOwner: i, analyticsLocations: a, onClick: o, hasMultipleSources: c, source: u, ...g } = t,
        I = (0, L.e)({ sku: e, giftRecipient: i, giftingOrigin: y, analyticsLocations: a }),
        _ = r.useCallback(() => {
            o?.(),
                (0, d.A)({ skuId: e.id, isGift: !0, giftingOrigin: y, analyticsLocations: a ?? [], giftRecipient: i });
        }, [o, e.id, a, i]),
        p = r.useCallback(() => {
            o?.(), I();
        }, [o, I]);
    return (0, n.jsx)(N, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: a,
        onDetailsClick: p,
        onPurchaseClick: _,
        hasMultipleSources: c,
        source: u,
        skuPreviewHoverStyle: l()({
            [G.m]:
                (null != e.bundledSkus && e.bundledSkus.length > 0) ||
                (e.tenantMetadata?.collectibles?.type !== s.R.NAMEPLATE &&
                    e.tenantMetadata?.collectibles?.type !== s.R.PROFILE_EFFECT),
        }),
        ...g,
    });
}
function v(t) {
    let { sku: e, ...i } = t;
    switch (e.productLine) {
        case h.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(b, { sku: e, ...i });
        case h.EZt.COLLECTIBLES:
            return (0, n.jsx)(P, { sku: e, ...i });
        default:
            return null;
    }
}
