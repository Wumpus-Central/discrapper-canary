t.d(e, { A: () => K, O: () => D });
var s = t(627968),
    n = t(64700),
    r = t(503698),
    o = t.n(r),
    c = t(835245),
    l = t(172218),
    u = t(575593),
    a = t(311907),
    d = t(444927),
    p = t(793574),
    _ = t(587895),
    I = t(44120),
    f = t(532794),
    k = t(317560),
    S = t(533406),
    h = t(954571),
    w = t(661492),
    T = t(299679),
    C = t(570050),
    L = t(95817),
    m = t(594832),
    E = t(146423),
    g = t(121700),
    A = t(460442),
    O = t(662349),
    y = t(754804),
    x = t(479026),
    R = t(699976),
    H = t(652215),
    j = t(788868),
    M = t(985018),
    v = t(224601),
    G = t(997990);
let P = j.vQ.DM_CHANNEL_WISHLIST,
    b = R.Z.SIZE_133;
function D(i) {
    let { spec: e = b } = i;
    return (0, s.jsx)(E.$, { spec: e });
}
function N(i) {
    let {
            sku: e,
            onDetailsClick: t,
            onPurchaseClick: r,
            onOpenWishlist: u,
            wishlistOwner: a,
            wishlistId: p,
            source: _,
            hasMultipleSources: I,
            skuPreviewStyle: f,
            skuPreviewHoverStyle: k,
            skuAssetHoverClassName: S,
            spec: x = b,
            guildId: R,
            channelId: j,
            numMoreItems: G,
        } = i,
        [P, D] = n.useState(!1),
        N = (0, T.Ar)(),
        W = (0, d.A)(() => (0, c.A)()),
        B = null != G && G > 0,
        { handleVisibilityChange: F } = (0, L.G)(W),
        K = (0, l.K)(F, 0.5, !B);
    (0, C.J)(P && !B, W);
    let Y = n.useCallback(() => {
            if (B) return void u();
            let i = _ === m.uS.WISHLIST ? "wishlist" : "shop";
            h.default.track(H.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: i,
                wishlist_id: _ === m.uS.WISHLIST ? p : null,
                product_line: e.productLine,
            }),
                h.default.track(H.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: e.id,
                    wishlist_id: p,
                    wishlist_owner_id: N?.wishlistOwnerId,
                    surface: N?.surface,
                    position_in_section: N?.positionInSection,
                    item_source: N?.itemSource,
                    click_type: "details",
                    product_line: e.productLine,
                    card_id: W,
                    impression_session_id: N?.impressionSessionId,
                    location_stack: N?.analyticsLocations,
                }),
                t?.();
        }, [t, p, _, e.id, e.productLine, u, B, N, W]),
        Z = n.useCallback(() => {
            let i = _ === m.uS.WISHLIST ? "wishlist" : "shop";
            h.default.track(H.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: i,
                wishlist_id: _ === m.uS.WISHLIST ? p : null,
                product_line: e.productLine,
            }),
                h.default.track(H.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: e.id,
                    wishlist_id: p,
                    wishlist_owner_id: N?.wishlistOwnerId,
                    surface: N?.surface,
                    position_in_section: N?.positionInSection,
                    item_source: N?.itemSource,
                    click_type: "gift",
                    product_line: e.productLine,
                    card_id: W,
                    impression_session_id: N?.impressionSessionId,
                    location_stack: N?.analyticsLocations,
                }),
                r?.();
        }, [r, e.id, e.productLine, _, p, N, W]),
        { label: U, icon: J, isPromptingPurchase: Q } = (0, O.h)({ wishlistOwner: a, isOwned: !1 });
    return (0, s.jsx)("div", {
        ref: K,
        children: (0, s.jsxs)(E.A, {
            sku: e,
            user: a,
            spec: x,
            skuPreviewStyle: o()(v.e, f, P ? k : void 0),
            skuAssetClassName: P ? S : void 0,
            onClick: Y,
            "aria-label": B
                ? M.intl.formatToPlainString(M.t["8uYD+I"], { username: a.username })
                : M.intl.formatToPlainString(M.t.ZBB4Ty, { productName: (0, w.TC)(e) }),
            onHoverOrFocusChange: D,
            children: [
                (0, s.jsx)(g.A, {
                    spec: x,
                    sku: e,
                    isCardHovered: P && !B,
                    location: "DMGiftingModalWishlistItemCardBase",
                    replacedElement:
                        I && _ === m.uS.WISHLIST
                            ? (0, s.jsx)(y.X, { spec: x, users: [a], guildId: R ?? void 0, channelId: j ?? void 0 })
                            : null,
                }),
                !B && (0, s.jsx)(O.A, { spec: x, onClick: Q ? Z : Y, label: U, icon: J, isHoveringOrFocusing: P }),
                B && (0, s.jsx)(A.Yb, { count: G }),
            ],
        }),
    });
}
function W(i) {
    let { sku: e, wishlistOwner: t, analyticsLocations: r, onClick: o, hasMultipleSources: c, source: l, ...u } = i,
        d = (0, a.bG)([_.A], () => _.A.getApplication(e.applicationId)),
        I = n.useCallback(() => {
            o?.(),
                null != d &&
                    null != d.guildId &&
                    (0, k.R)({
                        skuId: e.id,
                        applicationId: e.applicationId,
                        isStorefront: !1,
                        giftRecipient: t,
                        giftingOrigin: P,
                        analyticsLocations: r ?? [],
                    });
        }, [r, d, o, e.applicationId, e.id, t]),
        f = n.useCallback(() => {
            o?.(),
                (0, S.a)(
                    e,
                    { isGift: !0, giftRecipient: t, giftingOrigin: P },
                    { analyticsLocations: [...(r ?? []), p.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [e, t, r, o]);
    return (0, s.jsx)(N, {
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
        p = (0, x.e)({ sku: e, giftRecipient: t, giftingOrigin: P, analyticsLocations: r }),
        _ = n.useCallback(() => {
            c?.(),
                (0, I.A)({ skuId: e.id, isGift: !0, giftingOrigin: P, analyticsLocations: r ?? [], giftRecipient: t });
        }, [c, e.id, r, t]),
        f = n.useCallback(() => {
            c?.(), p();
        }, [c, p]);
    return (0, s.jsx)(N, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: f,
        onPurchaseClick: _,
        hasMultipleSources: l,
        source: a,
        skuPreviewHoverStyle: o()({
            [v.m]:
                (null != e.bundledSkus && e.bundledSkus.length > 0) ||
                (e.tenantMetadata?.collectibles?.type !== u.R.NAMEPLATE &&
                    e.tenantMetadata?.collectibles?.type !== u.R.PROFILE_EFFECT),
        }),
        ...d,
    });
}
function F(i) {
    let { sku: e, wishlistOwner: t, analyticsLocations: r, onClick: o, hasMultipleSources: c, source: l, ...u } = i,
        a = n.useCallback(() => {
            o?.(),
                (0, f.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: P,
                    subscriptionTier: e.id,
                    analyticsLocations: r ?? [],
                });
        }, [o, e.id, t, r]);
    return (0, s.jsx)(N, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: a,
        onPurchaseClick: a,
        hasMultipleSources: c,
        source: l,
        skuPreviewStyle: G.MO,
        skuAssetHoverClassName: G.iR,
        ...u,
    });
}
function K(i) {
    let { sku: e, ...t } = i;
    switch (e.productLine) {
        case H.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, s.jsx)(W, { sku: e, ...t });
        case H.EZt.COLLECTIBLES:
            return (0, s.jsx)(B, { sku: e, ...t });
        case H.EZt.PREMIUM:
            return (0, s.jsx)(F, { sku: e, ...t });
        default:
            return null;
    }
}
