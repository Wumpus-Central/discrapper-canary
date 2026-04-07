t.d(e, { A: () => Y, O: () => D });
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
    S = t(87719),
    C = t(317560),
    k = t(533406),
    h = t(954571),
    E = t(661492),
    L = t(299679),
    T = t(570050),
    g = t(95817),
    w = t(594832),
    A = t(146423),
    m = t(121700),
    O = t(460442),
    y = t(662349),
    v = t(754804),
    x = t(479026),
    R = t(699976),
    M = t(652215),
    H = t(788868),
    G = t(985018),
    P = t(367625),
    b = t(913110);
let j = H.vQ.DM_CHANNEL_WISHLIST,
    N = R.Z.SIZE_133;
function D(i) {
    let { spec: e = N } = i;
    return (0, s.jsx)(A.$, { spec: e });
}
function F(i) {
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
            spec: k = N,
            guildId: x,
            channelId: R,
            numMoreItems: H,
        } = i,
        [b, j] = n.useState(!1),
        D = (0, L.Ar)(),
        F = (0, d.A)(() => (0, c.A)()),
        B = null != H && H > 0,
        { handleVisibilityChange: W } = (0, g.G)(F),
        U = (0, l.K)(W, 0.5, !B);
    (0, T.J)(b && !B, F);
    let Y = n.useCallback(() => {
            if (B) return void u();
            let i = p === w.uS.WISHLIST ? "wishlist" : "shop";
            h.default.track(M.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: i,
                wishlist_id: p === w.uS.WISHLIST ? _ : null,
                product_line: e.productLine,
            }),
                h.default.track(M.HAw.WISHLIST_ITEM_CLICKED, {
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
            let i = p === w.uS.WISHLIST ? "wishlist" : "shop";
            h.default.track(M.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: i,
                wishlist_id: p === w.uS.WISHLIST ? _ : null,
                product_line: e.productLine,
            }),
                h.default.track(M.HAw.WISHLIST_ITEM_CLICKED, {
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
        } = (0, y.h)({ sku: e, wishlistOwner: a, isOwned: !1, location: "DM Gifting Modal Wishlist Item Card" });
    return (0, s.jsx)("div", {
        ref: U,
        children: (0, s.jsxs)(A.A, {
            sku: e,
            user: a,
            spec: k,
            skuPreviewStyle: o()(P.e, f, b ? S : void 0),
            skuAssetClassName: b ? C : void 0,
            onClick: Y,
            "aria-label": B
                ? G.intl.formatToPlainString(G.t["8uYD+I"], { username: a.username })
                : G.intl.formatToPlainString(G.t.ZBB4Ty, { productName: (0, E.TC)(e) }),
            onHoverOrFocusChange: j,
            children: [
                (0, s.jsx)(m.A, {
                    spec: k,
                    sku: e,
                    isCardHovered: b && !B,
                    location: "DMGiftingModalWishlistItemCardBase",
                    replacedElement:
                        I && p === w.uS.WISHLIST
                            ? (0, s.jsx)(v.X, { spec: k, users: [a], guildId: x ?? void 0, channelId: R ?? void 0 })
                            : null,
                }),
                !B && (0, s.jsx)(y.A, { spec: k, onClick: V ? Z : Y, label: K, icon: z, isHoveringOrFocusing: b }),
                B && (0, s.jsx)(O.Yb, { count: H }),
            ],
        }),
    });
}
function B(i) {
    let { sku: e, wishlistOwner: t, analyticsLocations: r, onClick: o, hasMultipleSources: c, source: l, ...u } = i,
        d = (0, a.bG)([p.A], () => p.A.getApplication(e.applicationId)),
        I = n.useCallback(() => {
            o?.(),
                null != d &&
                    null != d.guildId &&
                    (0, C.R)({
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
                (0, k.a)(
                    e,
                    { isGift: !0, giftRecipient: t, giftingOrigin: j },
                    { analyticsLocations: [...(r ?? []), _.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [e, t, r, o]);
    return (0, s.jsx)(F, {
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
function W(i) {
    let { sku: e, wishlistOwner: t, analyticsLocations: r, onClick: c, hasMultipleSources: l, source: a, ...d } = i,
        _ = (0, x.e)({ sku: e, giftRecipient: t, giftingOrigin: j, analyticsLocations: r }),
        p = n.useCallback(() => {
            c?.(),
                (0, I.A)({ skuId: e.id, isGift: !0, giftingOrigin: j, analyticsLocations: r ?? [], giftRecipient: t });
        }, [c, e.id, r, t]),
        f = n.useCallback(() => {
            c?.(), _();
        }, [c, _]);
    return (0, s.jsx)(F, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: f,
        onPurchaseClick: p,
        hasMultipleSources: l,
        source: a,
        skuPreviewHoverStyle: o()({
            [P.m]:
                (null != e.bundledSkus && e.bundledSkus.length > 0) ||
                (e.tenantMetadata?.collectibles?.type !== u.R.NAMEPLATE &&
                    e.tenantMetadata?.collectibles?.type !== u.R.PROFILE_EFFECT),
        }),
        ...d,
    });
}
function U(i) {
    let { sku: e, wishlistOwner: t, analyticsLocations: r, onClick: o, hasMultipleSources: c, source: l, ...u } = i,
        a = n.useCallback(() => {
            o?.(), (0, S.x)();
        }, [o]),
        d = n.useCallback(() => {
            o?.(),
                (0, f.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: j,
                    subscriptionTier: e.id,
                    analyticsLocations: r ?? [],
                });
        }, [o, e.id, t, r]);
    return (0, s.jsx)(F, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: a,
        onPurchaseClick: d,
        hasMultipleSources: c,
        source: l,
        skuPreviewStyle: b.MO,
        skuAssetHoverClassName: b.iR,
        ...u,
    });
}
function Y(i) {
    let { sku: e, ...t } = i;
    switch (e.productLine) {
        case M.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, s.jsx)(B, { sku: e, ...t });
        case M.EZt.COLLECTIBLES:
            return (0, s.jsx)(W, { sku: e, ...t });
        case M.EZt.PREMIUM:
            return (0, s.jsx)(U, { sku: e, ...t });
        default:
            return null;
    }
}
