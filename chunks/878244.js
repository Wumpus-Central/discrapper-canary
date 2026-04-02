t.d(e, { A: () => N, O: () => m });
var s = t(627968),
    n = t(64700),
    r = t(503698),
    o = t.n(r),
    l = t(575593),
    a = t(311907),
    c = t(793574),
    u = t(587895),
    d = t(44120),
    p = t(532794),
    I = t(87719),
    f = t(317560),
    C = t(533406),
    _ = t(954571),
    g = t(661492),
    k = t(594832),
    E = t(146423),
    S = t(121700),
    T = t(460442),
    L = t(662349),
    h = t(754804),
    A = t(479026),
    O = t(699976),
    x = t(652215),
    y = t(788868),
    v = t(985018),
    w = t(313248),
    G = t(538189);
let M = y.vQ.DM_CHANNEL_WISHLIST,
    R = O.Z.SIZE_133;
function m(i) {
    let { spec: e = R } = i;
    return (0, s.jsx)(E.$, { spec: e });
}
function P(i) {
    let {
            sku: e,
            onDetailsClick: t,
            onPurchaseClick: r,
            onOpenWishlist: l,
            wishlistOwner: a,
            wishlistId: c,
            source: u,
            hasMultipleSources: d,
            skuPreviewStyle: p,
            skuPreviewHoverStyle: I,
            skuAssetHoverClassName: f,
            spec: C = R,
            guildId: A,
            channelId: O,
            numMoreItems: y,
        } = i,
        [G, M] = n.useState(!1),
        m = null != y && y > 0,
        P = n.useCallback(() => {
            if (m) return void l();
            let i = u === k.uS.WISHLIST ? "wishlist" : "shop";
            _.default.track(x.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: i,
                wishlist_id: u === k.uS.WISHLIST ? c : null,
                product_line: e.productLine,
            }),
                t?.();
        }, [t, c, u, e.id, e.productLine, l, m]),
        b = n.useCallback(() => {
            let i = u === k.uS.WISHLIST ? "wishlist" : "shop";
            _.default.track(x.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: i,
                wishlist_id: u === k.uS.WISHLIST ? c : null,
                product_line: e.productLine,
            }),
                r?.();
        }, [r, e.id, e.productLine, u, c]),
        {
            label: j,
            icon: H,
            isPromptingPurchase: N,
        } = (0, L.h)({ sku: e, wishlistOwner: a, isOwned: !1, location: "DM Gifting Modal Wishlist Item Card" });
    return (0, s.jsxs)(E.A, {
        sku: e,
        user: a,
        spec: C,
        skuPreviewStyle: o()(w.e, p, G ? I : void 0),
        skuAssetClassName: G ? f : void 0,
        onClick: P,
        "aria-label": m
            ? v.intl.formatToPlainString(v.t["8uYD+I"], { username: a.username })
            : v.intl.formatToPlainString(v.t.ZBB4Ty, { productName: (0, g.TC)(e) }),
        onHoverOrFocusChange: M,
        children: [
            (0, s.jsx)(S.A, {
                spec: C,
                sku: e,
                isCardHovered: G && !m,
                location: "DMGiftingModalWishlistItemCardBase",
                replacedElement:
                    d && u === k.uS.WISHLIST
                        ? (0, s.jsx)(h.X, { spec: C, users: [a], guildId: A ?? void 0, channelId: O ?? void 0 })
                        : null,
            }),
            !m && (0, s.jsx)(L.A, { spec: C, onClick: N ? b : P, label: j, icon: H, isHoveringOrFocusing: G }),
            m && (0, s.jsx)(T.Yb, { count: y }),
        ],
    });
}
function b(i) {
    let { sku: e, wishlistOwner: t, analyticsLocations: r, onClick: o, hasMultipleSources: l, source: d, ...p } = i,
        I = (0, a.bG)([u.A], () => u.A.getApplication(e.applicationId)),
        _ = n.useCallback(() => {
            o?.(),
                null != I &&
                    null != I.guildId &&
                    (0, f.R)({
                        skuId: e.id,
                        applicationId: e.applicationId,
                        isStorefront: !1,
                        giftRecipient: t,
                        giftingOrigin: M,
                        analyticsLocations: r ?? [],
                    });
        }, [r, I, o, e.applicationId, e.id, t]),
        g = n.useCallback(() => {
            o?.(),
                (0, C.a)(
                    e,
                    { isGift: !0, giftRecipient: t, giftingOrigin: M },
                    { analyticsLocations: [...(r ?? []), c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [e, t, r, o]);
    return (0, s.jsx)(P, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: _,
        onPurchaseClick: g,
        hasMultipleSources: l,
        source: d,
        ...p,
    });
}
function j(i) {
    let { sku: e, wishlistOwner: t, analyticsLocations: r, onClick: a, hasMultipleSources: c, source: u, ...p } = i,
        I = (0, A.e)({ sku: e, giftRecipient: t, giftingOrigin: M, analyticsLocations: r }),
        f = n.useCallback(() => {
            a?.(),
                (0, d.A)({ skuId: e.id, isGift: !0, giftingOrigin: M, analyticsLocations: r ?? [], giftRecipient: t });
        }, [a, e.id, r, t]),
        C = n.useCallback(() => {
            a?.(), I();
        }, [a, I]);
    return (0, s.jsx)(P, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: C,
        onPurchaseClick: f,
        hasMultipleSources: c,
        source: u,
        skuPreviewHoverStyle: o()({
            [w.m]:
                (null != e.bundledSkus && e.bundledSkus.length > 0) ||
                (e.tenantMetadata?.collectibles?.type !== l.R.NAMEPLATE &&
                    e.tenantMetadata?.collectibles?.type !== l.R.PROFILE_EFFECT),
        }),
        ...p,
    });
}
function H(i) {
    let { sku: e, wishlistOwner: t, analyticsLocations: r, onClick: o, hasMultipleSources: l, source: a, ...c } = i,
        u = n.useCallback(() => {
            o?.(), (0, I.x)();
        }, [o]),
        d = n.useCallback(() => {
            o?.(),
                (0, p.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: M,
                    subscriptionTier: e.id,
                    analyticsLocations: r ?? [],
                });
        }, [o, e.id, t, r]);
    return (0, s.jsx)(P, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: u,
        onPurchaseClick: d,
        hasMultipleSources: l,
        source: a,
        skuPreviewStyle: G.MO,
        skuAssetHoverClassName: G.iR,
        ...c,
    });
}
function N(i) {
    let { sku: e, ...t } = i;
    switch (e.productLine) {
        case x.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, s.jsx)(b, { sku: e, ...t });
        case x.EZt.COLLECTIBLES:
            return (0, s.jsx)(j, { sku: e, ...t });
        case x.EZt.PREMIUM:
            return (0, s.jsx)(H, { sku: e, ...t });
        default:
            return null;
    }
}
