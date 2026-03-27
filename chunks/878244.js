e.d(i, { A: () => v, O: () => M });
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
    p = e(661492),
    A = e(594832),
    f = e(146423),
    T = e(121700),
    C = e(460442),
    S = e(662349),
    E = e(754804),
    L = e(479026),
    O = e(699976),
    h = e(652215),
    m = e(788868),
    k = e(985018),
    G = e(367625);
let y = m.vQ.DM_CHANNEL_WISHLIST,
    R = O.Z.SIZE_133;
function M(t) {
    let { spec: i = R } = t;
    return (0, n.jsx)(f.$, { spec: i });
}
function N(t) {
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
            spec: L = R,
            guildId: O,
            channelId: m,
            numMoreItems: y,
        } = t,
        [M, N] = r.useState(!1),
        b = null != y && y > 0,
        P = r.useCallback(() => {
            if (b) return void l();
            let t = u === A.uS.WISHLIST ? "wishlist" : "shop";
            _.default.track(h.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: i.id,
                item_source: t,
                wishlist_id: u === A.uS.WISHLIST ? c : null,
                product_line: i.productLine,
            }),
                e?.();
        }, [e, c, u, i.id, i.productLine, l, b]),
        v = r.useCallback(() => {
            let t = u === A.uS.WISHLIST ? "wishlist" : "shop";
            _.default.track(h.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: i.id,
                item_source: t,
                wishlist_id: u === A.uS.WISHLIST ? c : null,
                product_line: i.productLine,
            }),
                a?.();
        }, [a, i.id, i.productLine, u, c]),
        {
            label: x,
            icon: w,
            isPromptingPurchase: D,
        } = (0, S.h)({ sku: i, wishlistOwner: o, isOwned: !1, location: "DM Gifting Modal Wishlist Item Card" });
    return (0, n.jsxs)(f.A, {
        sku: i,
        user: o,
        spec: L,
        skuPreviewStyle: s()(G.e, g, M ? I : void 0),
        onClick: P,
        "aria-label": b
            ? k.intl.formatToPlainString(k.t["8uYD+I"], { username: o.username })
            : k.intl.formatToPlainString(k.t.ZBB4Ty, { productName: (0, p.TC)(i) }),
        onHoverOrFocusChange: N,
        children: [
            (0, n.jsx)(T.A, {
                spec: L,
                sku: i,
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
    let { sku: i, wishlistOwner: e, analyticsLocations: a, onClick: s, hasMultipleSources: l, source: d, ..._ } = t,
        p = (0, o.bG)([u.A], () => u.A.getApplication(i.applicationId)),
        A = r.useCallback(() => {
            s?.(),
                null != p &&
                    null != p.guildId &&
                    (0, g.R)({
                        skuId: i.id,
                        applicationId: i.applicationId,
                        isStorefront: !1,
                        giftRecipient: e,
                        giftingOrigin: y,
                        analyticsLocations: a ?? [],
                    });
        }, [a, p, s, i.applicationId, i.id, e]),
        f = r.useCallback(() => {
            s?.(),
                (0, I.a)(
                    i,
                    { isGift: !0, giftRecipient: e, giftingOrigin: y },
                    { analyticsLocations: [...(a ?? []), c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [i, e, a, s]);
    return (0, n.jsx)(N, {
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
function P(t) {
    let { sku: i, wishlistOwner: e, analyticsLocations: a, onClick: o, hasMultipleSources: c, source: u, ...g } = t,
        I = (0, L.e)({ sku: i, giftRecipient: e, giftingOrigin: y, analyticsLocations: a }),
        _ = r.useCallback(() => {
            o?.(),
                (0, d.A)({ skuId: i.id, isGift: !0, giftingOrigin: y, analyticsLocations: a ?? [], giftRecipient: e });
        }, [o, i.id, a, e]),
        p = r.useCallback(() => {
            o?.(), I();
        }, [o, I]);
    return (0, n.jsx)(N, {
        sku: i,
        wishlistOwner: e,
        analyticsLocations: a,
        onDetailsClick: p,
        onPurchaseClick: _,
        hasMultipleSources: c,
        source: u,
        skuPreviewHoverStyle: s()({
            [G.m]:
                (null != i.bundledSkus && i.bundledSkus.length > 0) ||
                (i.tenantMetadata?.collectibles?.type !== l.R.NAMEPLATE &&
                    i.tenantMetadata?.collectibles?.type !== l.R.PROFILE_EFFECT),
        }),
        ...g,
    });
}
function v(t) {
    let { sku: i, ...e } = t;
    switch (i.productLine) {
        case h.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(b, { sku: i, ...e });
        case h.EZt.COLLECTIBLES:
            return (0, n.jsx)(P, { sku: i, ...e });
        default:
            return null;
    }
}
