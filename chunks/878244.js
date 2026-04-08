t.d(e, { A: () => U, O: () => N });
var s = t(627968),
    n = t(64700),
    r = t(503698),
    o = t.n(r),
    c = t(835245),
    l = t(172218),
    u = t(575593),
    a = t(311907),
    d = t(444927),
    _ = t(793574),
    p = t(587895),
    I = t(44120),
    f = t(532794),
    S = t(317560),
    C = t(533406),
    k = t(954571),
    h = t(661492),
    E = t(299679),
    L = t(570050),
    T = t(95817),
    g = t(594832),
    w = t(146423),
    A = t(121700),
    m = t(460442),
    O = t(662349),
    y = t(754804),
    v = t(479026),
    x = t(699976),
    R = t(652215),
    M = t(788868),
    H = t(985018),
    G = t(313248),
    P = t(538189);
let j = M.vQ.DM_CHANNEL_WISHLIST,
    b = x.Z.SIZE_133;
function N(i) {
    let { spec: e = b } = i;
    return (0, s.jsx)(w.$, { spec: e });
}
function D(i) {
    let {
            sku: e,
            onDetailsClick: t,
            onPurchaseClick: r,
            onOpenWishlist: u,
            wishlistOwner: a,
            wishlistId: _,
            source: p,
            hasMultipleSources: I,
            skuPreviewStyle: f,
            skuPreviewHoverStyle: S,
            skuAssetHoverClassName: C,
            spec: v = b,
            guildId: x,
            channelId: M,
            numMoreItems: P,
        } = i,
        [j, N] = n.useState(!1),
        D = (0, E.Ar)(),
        F = (0, d.A)(() => (0, c.A)()),
        B = null != P && P > 0,
        { handleVisibilityChange: W } = (0, T.G)(F),
        U = (0, l.K)(W, 0.5, !B);
    (0, L.J)(j && !B, F);
    let Y = n.useCallback(() => {
            if (B) return void u();
            let i = p === g.uS.WISHLIST ? "wishlist" : "shop";
            k.default.track(R.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: i,
                wishlist_id: p === g.uS.WISHLIST ? _ : null,
                product_line: e.productLine,
            }),
                k.default.track(R.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: e.id,
                    wishlist_id: _,
                    wishlist_owner_id: D?.wishlistOwnerId,
                    surface: D?.surface,
                    position_in_section: D?.positionInSection,
                    item_source: D?.itemSource,
                    click_type: "details",
                    product_line: e.productLine,
                    card_id: F,
                    impression_session_id: D?.impressionSessionId,
                    location_stack: D?.analyticsLocations,
                }),
                t?.();
        }, [t, _, p, e.id, e.productLine, u, B, D, F]),
        Z = n.useCallback(() => {
            let i = p === g.uS.WISHLIST ? "wishlist" : "shop";
            k.default.track(R.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: i,
                wishlist_id: p === g.uS.WISHLIST ? _ : null,
                product_line: e.productLine,
            }),
                k.default.track(R.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: e.id,
                    wishlist_id: _,
                    wishlist_owner_id: D?.wishlistOwnerId,
                    surface: D?.surface,
                    position_in_section: D?.positionInSection,
                    item_source: D?.itemSource,
                    click_type: "gift",
                    product_line: e.productLine,
                    card_id: F,
                    impression_session_id: D?.impressionSessionId,
                    location_stack: D?.analyticsLocations,
                }),
                r?.();
        }, [r, e.id, e.productLine, p, _, D, F]),
        {
            label: K,
            icon: z,
            isPromptingPurchase: V,
        } = (0, O.h)({ sku: e, wishlistOwner: a, isOwned: !1, location: "DM Gifting Modal Wishlist Item Card" });
    return (0, s.jsx)("div", {
        ref: U,
        children: (0, s.jsxs)(w.A, {
            sku: e,
            user: a,
            spec: v,
            skuPreviewStyle: o()(G.e, f, j ? S : void 0),
            skuAssetClassName: j ? C : void 0,
            onClick: Y,
            "aria-label": B
                ? H.intl.formatToPlainString(H.t["8uYD+I"], { username: a.username })
                : H.intl.formatToPlainString(H.t.ZBB4Ty, { productName: (0, h.TC)(e) }),
            onHoverOrFocusChange: N,
            children: [
                (0, s.jsx)(A.A, {
                    spec: v,
                    sku: e,
                    isCardHovered: j && !B,
                    location: "DMGiftingModalWishlistItemCardBase",
                    replacedElement:
                        I && p === g.uS.WISHLIST
                            ? (0, s.jsx)(y.X, { spec: v, users: [a], guildId: x ?? void 0, channelId: M ?? void 0 })
                            : null,
                }),
                !B && (0, s.jsx)(O.A, { spec: v, onClick: V ? Z : Y, label: K, icon: z, isHoveringOrFocusing: j }),
                B && (0, s.jsx)(m.Yb, { count: P }),
            ],
        }),
    });
}
function F(i) {
    let { sku: e, wishlistOwner: t, analyticsLocations: r, onClick: o, hasMultipleSources: c, source: l, ...u } = i,
        d = (0, a.bG)([p.A], () => p.A.getApplication(e.applicationId)),
        I = n.useCallback(() => {
            o?.(),
                null != d &&
                    null != d.guildId &&
                    (0, S.R)({
                        skuId: e.id,
                        applicationId: e.applicationId,
                        isStorefront: !1,
                        giftRecipient: t,
                        giftingOrigin: j,
                        analyticsLocations: r ?? [],
                    });
        }, [r, d, o, e.applicationId, e.id, t]),
        f = n.useCallback(() => {
            o?.(),
                (0, C.a)(
                    e,
                    { isGift: !0, giftRecipient: t, giftingOrigin: j },
                    { analyticsLocations: [...(r ?? []), _.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [e, t, r, o]);
    return (0, s.jsx)(D, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: I,
        onPurchaseClick: f,
        hasMultipleSources: c,
        source: l,
        ...u,
    });
}
function B(i) {
    let { sku: e, wishlistOwner: t, analyticsLocations: r, onClick: c, hasMultipleSources: l, source: a, ...d } = i,
        _ = (0, v.e)({ sku: e, giftRecipient: t, giftingOrigin: j, analyticsLocations: r }),
        p = n.useCallback(() => {
            c?.(),
                (0, I.A)({ skuId: e.id, isGift: !0, giftingOrigin: j, analyticsLocations: r ?? [], giftRecipient: t });
        }, [c, e.id, r, t]),
        f = n.useCallback(() => {
            c?.(), _();
        }, [c, _]);
    return (0, s.jsx)(D, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: f,
        onPurchaseClick: p,
        hasMultipleSources: l,
        source: a,
        skuPreviewHoverStyle: o()({
            [G.m]:
                (null != e.bundledSkus && e.bundledSkus.length > 0) ||
                (e.tenantMetadata?.collectibles?.type !== u.R.NAMEPLATE &&
                    e.tenantMetadata?.collectibles?.type !== u.R.PROFILE_EFFECT),
        }),
        ...d,
    });
}
function W(i) {
    let { sku: e, wishlistOwner: t, analyticsLocations: r, onClick: o, hasMultipleSources: c, source: l, ...u } = i,
        a = n.useCallback(() => {
            o?.(),
                (0, f.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: j,
                    subscriptionTier: e.id,
                    analyticsLocations: r ?? [],
                });
        }, [o, e.id, t, r]);
    return (0, s.jsx)(D, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: a,
        onPurchaseClick: a,
        hasMultipleSources: c,
        source: l,
        skuPreviewStyle: P.MO,
        skuAssetHoverClassName: P.iR,
        ...u,
    });
}
function U(i) {
    let { sku: e, ...t } = i;
    switch (e.productLine) {
        case R.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, s.jsx)(F, { sku: e, ...t });
        case R.EZt.COLLECTIBLES:
            return (0, s.jsx)(B, { sku: e, ...t });
        case R.EZt.PREMIUM:
            return (0, s.jsx)(W, { sku: e, ...t });
        default:
            return null;
    }
}
