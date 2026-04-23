t.d(i, { A: () => Z, O: () => G });
var r = t(627968),
    a = t(64700),
    n = t(503698),
    o = t.n(n),
    s = t(835245),
    l = t(172218),
    c = t(575593),
    _ = t(311907),
    u = t(444927),
    d = t(793574),
    p = t(587895),
    f = t(44120),
    m = t(532794),
    I = t(317560),
    h = t(533406),
    w = t(954571),
    C = t(661492),
    b = t(299679),
    g = t(570050),
    k = t(95817),
    v = t(594832),
    x = t(146423),
    S = t(121700),
    T = t(460442),
    L = t(662349),
    A = t(754804),
    H = t(479026),
    y = t(699976),
    P = t(652215),
    E = t(788868),
    O = t(985018),
    M = t(224601),
    R = t(997990);
let B = E.vQ.DM_CHANNEL_WISHLIST,
    j = y.Z.SIZE_133;
function G(e) {
    let { spec: i = j } = e;
    return (0, r.jsx)(x.$, { spec: i });
}
function D(e) {
    let {
            sku: i,
            onDetailsClick: t,
            onPurchaseClick: n,
            onOpenWishlist: c,
            wishlistOwner: _,
            wishlistId: d,
            source: p,
            hasMultipleSources: f,
            skuPreviewStyle: m,
            skuPreviewHoverStyle: I,
            skuAssetHoverClassName: h,
            spec: H = j,
            guildId: y,
            channelId: E,
            numMoreItems: R,
        } = e,
        [B, G] = a.useState(!1),
        D = (0, b.Ar)(),
        W = (0, u.A)(() => (0, s.A)()),
        N = null != R && R > 0,
        { handleVisibilityChange: F } = (0, k.G)(W),
        Z = (0, l.K)(F, 0.5, !N);
    (0, g.J)(B && !N, W);
    let U = a.useCallback(() => {
            if (N) return void c();
            let e = p === v.uS.WISHLIST ? "wishlist" : "shop";
            w.default.track(P.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: i.id,
                item_source: e,
                wishlist_id: p === v.uS.WISHLIST ? d : null,
                product_line: i.productLine,
            }),
                w.default.track(P.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: i.id,
                    wishlist_id: d,
                    wishlist_owner_id: D?.wishlistOwnerId,
                    surface: D?.surface,
                    position_in_section: D?.positionInSection,
                    item_source: D?.itemSource,
                    click_type: "details",
                    product_line: i.productLine,
                    card_id: W,
                    impression_session_id: D?.impressionSessionId,
                    location_stack: D?.analyticsLocations,
                }),
                t?.();
        }, [t, d, p, i.id, i.productLine, c, N, D, W]),
        Y = a.useCallback(() => {
            let e = p === v.uS.WISHLIST ? "wishlist" : "shop";
            w.default.track(P.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: i.id,
                item_source: e,
                wishlist_id: p === v.uS.WISHLIST ? d : null,
                product_line: i.productLine,
            }),
                w.default.track(P.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: i.id,
                    wishlist_id: d,
                    wishlist_owner_id: D?.wishlistOwnerId,
                    surface: D?.surface,
                    position_in_section: D?.positionInSection,
                    item_source: D?.itemSource,
                    click_type: "gift",
                    product_line: i.productLine,
                    card_id: W,
                    impression_session_id: D?.impressionSessionId,
                    location_stack: D?.analyticsLocations,
                }),
                n?.();
        }, [n, i.id, i.productLine, p, d, D, W]),
        { label: K, icon: Q, isPromptingPurchase: J } = (0, L.h)({ wishlistOwner: _, isOwned: !1 });
    return (0, r.jsx)("div", {
        ref: Z,
        children: (0, r.jsxs)(x.A, {
            sku: i,
            user: _,
            spec: H,
            skuPreviewStyle: o()(M.e, m, B ? I : void 0),
            skuAssetClassName: B ? h : void 0,
            onClick: U,
            "aria-label": N
                ? O.intl.formatToPlainString(O.t["8uYD+I"], { username: _.username })
                : O.intl.formatToPlainString(O.t.ZBB4Ty, { productName: (0, C.TC)(i) }),
            onHoverOrFocusChange: G,
            children: [
                (0, r.jsx)(S.A, {
                    spec: H,
                    sku: i,
                    isCardHovered: B && !N,
                    location: "DMGiftingModalWishlistItemCardBase",
                    replacedElement:
                        f && p === v.uS.WISHLIST
                            ? (0, r.jsx)(A.X, { spec: H, users: [_], guildId: y ?? void 0, channelId: E ?? void 0 })
                            : null,
                }),
                !N && (0, r.jsx)(L.A, { spec: H, onClick: J ? Y : U, label: K, icon: Q, isHoveringOrFocusing: B }),
                N && (0, r.jsx)(T.Yb, { count: R }),
            ],
        }),
    });
}
function W(e) {
    let { sku: i, wishlistOwner: t, analyticsLocations: n, onClick: o, hasMultipleSources: s, source: l, ...c } = e,
        u = (0, _.bG)([p.A], () => p.A.getApplication(i.applicationId)),
        f = a.useCallback(() => {
            o?.(),
                null != u &&
                    null != u.guildId &&
                    (0, I.R)({
                        skuId: i.id,
                        applicationId: i.applicationId,
                        isStorefront: !1,
                        giftRecipient: t,
                        giftingOrigin: B,
                        analyticsLocations: n ?? [],
                    });
        }, [n, u, o, i.applicationId, i.id, t]),
        m = a.useCallback(() => {
            o?.(),
                (0, h.a)(
                    i,
                    { isGift: !0, giftRecipient: t, giftingOrigin: B },
                    { analyticsLocations: [...(n ?? []), d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [i, t, n, o]);
    return (0, r.jsx)(D, {
        sku: i,
        wishlistOwner: t,
        analyticsLocations: n,
        onDetailsClick: f,
        onPurchaseClick: m,
        hasMultipleSources: s,
        source: l,
        ...c,
    });
}
function N(e) {
    let { sku: i, wishlistOwner: t, analyticsLocations: n, onClick: s, hasMultipleSources: l, source: _, ...u } = e,
        d = (0, H.e)({ sku: i, giftRecipient: t, giftingOrigin: B, analyticsLocations: n }),
        p = a.useCallback(() => {
            s?.(),
                (0, f.A)({ skuId: i.id, isGift: !0, giftingOrigin: B, analyticsLocations: n ?? [], giftRecipient: t });
        }, [s, i.id, n, t]),
        m = a.useCallback(() => {
            s?.(), d();
        }, [s, d]);
    return (0, r.jsx)(D, {
        sku: i,
        wishlistOwner: t,
        analyticsLocations: n,
        onDetailsClick: m,
        onPurchaseClick: p,
        hasMultipleSources: l,
        source: _,
        skuPreviewHoverStyle: o()({
            [M.m]:
                (null != i.bundledSkus && i.bundledSkus.length > 0) ||
                (i.tenantMetadata?.collectibles?.type !== c.R.NAMEPLATE &&
                    i.tenantMetadata?.collectibles?.type !== c.R.PROFILE_EFFECT),
        }),
        ...u,
    });
}
function F(e) {
    let { sku: i, wishlistOwner: t, analyticsLocations: n, onClick: o, hasMultipleSources: s, source: l, ...c } = e,
        _ = a.useCallback(() => {
            o?.(),
                (0, m.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: B,
                    subscriptionTier: i.id,
                    analyticsLocations: n ?? [],
                });
        }, [o, i.id, t, n]);
    return (0, r.jsx)(D, {
        sku: i,
        wishlistOwner: t,
        analyticsLocations: n,
        onDetailsClick: _,
        onPurchaseClick: _,
        hasMultipleSources: s,
        source: l,
        skuPreviewStyle: R.MO,
        skuAssetHoverClassName: R.iR,
        ...c,
    });
}
function Z(e) {
    let { sku: i, ...t } = e;
    switch (i.productLine) {
        case P.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, r.jsx)(W, { sku: i, ...t });
        case P.EZt.COLLECTIBLES:
            return (0, r.jsx)(N, { sku: i, ...t });
        case P.EZt.PREMIUM:
            return (0, r.jsx)(F, { sku: i, ...t });
        default:
            return null;
    }
}
