t.d(e, { A: () => B, O: () => P });
var s = t(627968),
    n = t(64700),
    r = t(503698),
    l = t.n(r),
    c = t(835245),
    u = t(172218),
    o = t(575593),
    a = t(17928),
    d = t(444927),
    _ = t(793574),
    p = t(587895),
    I = t(44120),
    f = t(532794),
    S = t(317560),
    h = t(533406),
    k = t(174459),
    g = t(661492),
    m = t(299679),
    L = t(652215),
    T = t(561794),
    w = t(212387),
    C = t(121700),
    E = t(460442),
    A = t(662349),
    x = t(754804),
    M = t(479026),
    v = t(699976),
    O = t(788868),
    R = t(375708),
    j = t(224601),
    y = t(997990);
let H = O.vQ.DM_CHANNEL_WISHLIST,
    b = v.Z.SIZE_133;
function P(i) {
    let { spec: e = b } = i;
    return (0, s.jsx)(w.$, { spec: e });
}
function N(i) {
    var e;
    let t,
        r,
        o,
        a,
        _,
        p,
        I,
        f,
        {
            sku: S,
            onDetailsClick: h,
            onPurchaseClick: M,
            onOpenWishlist: v,
            wishlistOwner: O,
            wishlistId: y,
            source: H,
            hasMultipleSources: P,
            skuPreviewStyle: N,
            skuPreviewHoverStyle: W,
            skuAssetHoverClassName: G,
            spec: D = b,
            guildId: B,
            channelId: F,
            numMoreItems: U,
        } = i,
        [Z, z] = n.useState(!1),
        K = (0, m.Ar)(),
        Y = (0, d.A)(() => (0, c.A)()),
        $ = null != U && U > 0,
        { handleVisibilityChange: q } =
            ((t = (0, m.Ar)()),
            (r = n.useRef(null)),
            (o = n.useRef(!1)),
            (a = n.useRef(t)),
            n.useEffect(() => {
                a.current = t;
            }, [t]),
            (_ = n.useCallback(
                (i) => {
                    i
                        ? o.current ||
                          (null === r.current &&
                              (r.current = setTimeout(() => {
                                  let i = a.current;
                                  k.default.track(L.HAw.IMPRESSION_WISHLIST_ITEM, {
                                      sku_id: i?.skuId,
                                      wishlist_id: i?.wishlistId,
                                      wishlist_owner_id: i?.wishlistOwnerId,
                                      surface: i?.surface,
                                      position_in_section: i?.positionInSection,
                                      item_source: i?.itemSource,
                                      product_line: i?.productLine,
                                      card_id: Y,
                                      impression_session_id: i?.impressionSessionId,
                                      location_stack: i?.analyticsLocations,
                                  }),
                                      (o.current = !0),
                                      (r.current = null);
                              }, 500)))
                        : null !== r.current && (clearTimeout(r.current), (r.current = null));
                },
                [Y],
            )),
            n.useEffect(
                () => () => {
                    null !== r.current && (clearTimeout(r.current), (r.current = null));
                },
                [],
            ),
            { handleVisibilityChange: _ }),
        J = (0, u.K)(q, 0.5, !$);
    (e = Z && !$),
        (p = (0, m.Ar)()),
        (I = n.useRef(!1)),
        (f = n.useRef(p)),
        n.useEffect(() => {
            f.current = p;
        }, [p]),
        n.useEffect(() => {
            if (!e) {
                I.current = !1;
                return;
            }
            if (I.current) return;
            let i = setTimeout(() => {
                let i = f.current;
                k.default.track(L.HAw.WISHLIST_ITEM_HOVERED, {
                    sku_id: i?.skuId,
                    wishlist_id: i?.wishlistId,
                    wishlist_owner_id: i?.wishlistOwnerId,
                    surface: i?.surface,
                    position_in_section: i?.positionInSection,
                    item_source: i?.itemSource,
                    product_line: i?.productLine,
                    card_id: Y,
                    impression_session_id: i?.impressionSessionId,
                    location_stack: i?.analyticsLocations,
                }),
                    (I.current = !0);
            }, 250);
            return () => clearTimeout(i);
        }, [e, Y]);
    let Q = n.useCallback(() => {
            if ($) return void v();
            let i = H === T.uS.WISHLIST ? "wishlist" : "shop";
            k.default.track(L.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: S.id,
                item_source: i,
                wishlist_id: H === T.uS.WISHLIST ? y : null,
                product_line: S.productLine,
            }),
                k.default.track(L.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: S.id,
                    wishlist_id: y,
                    wishlist_owner_id: K?.wishlistOwnerId,
                    surface: K?.surface,
                    position_in_section: K?.positionInSection,
                    item_source: K?.itemSource,
                    click_type: "details",
                    product_line: S.productLine,
                    card_id: Y,
                    impression_session_id: K?.impressionSessionId,
                    location_stack: K?.analyticsLocations,
                }),
                h?.();
        }, [h, y, H, S.id, S.productLine, v, $, K, Y]),
        V = n.useCallback(() => {
            let i = H === T.uS.WISHLIST ? "wishlist" : "shop";
            k.default.track(L.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: S.id,
                item_source: i,
                wishlist_id: H === T.uS.WISHLIST ? y : null,
                product_line: S.productLine,
            }),
                k.default.track(L.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: S.id,
                    wishlist_id: y,
                    wishlist_owner_id: K?.wishlistOwnerId,
                    surface: K?.surface,
                    position_in_section: K?.positionInSection,
                    item_source: K?.itemSource,
                    click_type: "gift",
                    product_line: S.productLine,
                    card_id: Y,
                    impression_session_id: K?.impressionSessionId,
                    location_stack: K?.analyticsLocations,
                }),
                M?.();
        }, [M, S.id, S.productLine, H, y, K, Y]),
        { label: X, icon: ii, isPromptingPurchase: ie } = (0, A.h)({ wishlistOwner: O, isOwned: !1 });
    return (0, s.jsx)("div", {
        ref: J,
        children: (0, s.jsxs)(w.A, {
            sku: S,
            user: O,
            spec: D,
            skuPreviewStyle: l()(j.e, N, Z ? W : void 0),
            skuAssetClassName: Z ? G : void 0,
            onClick: Q,
            "aria-label": $
                ? R.intl.formatToPlainString(R.t["8uYD+I"], { username: O.username })
                : R.intl.formatToPlainString(R.t.ZBB4Ty, { productName: (0, g.TC)(S) }),
            onHoverOrFocusChange: z,
            children: [
                (0, s.jsx)(C.A, {
                    spec: D,
                    sku: S,
                    isCardHovered: Z && !$,
                    location: "DMGiftingModalWishlistItemCardBase",
                    replacedElement:
                        P && H === T.uS.WISHLIST
                            ? (0, s.jsx)(x.X, { spec: D, users: [O], guildId: B ?? void 0, channelId: F ?? void 0 })
                            : null,
                }),
                !$ && (0, s.jsx)(A.A, { spec: D, onClick: ie ? V : Q, label: X, icon: ii, isHoveringOrFocusing: Z }),
                $ && (0, s.jsx)(E.Yb, { count: U }),
            ],
        }),
    });
}
function W(i) {
    let { sku: e, wishlistOwner: t, analyticsLocations: r, onClick: l, hasMultipleSources: c, source: u, ...o } = i,
        d = (0, a.bG)([p.A], () => p.A.getApplication(e.applicationId)),
        I = n.useCallback(() => {
            l?.(),
                null != d &&
                    null != d.guildId &&
                    (0, S.R)({
                        skuId: e.id,
                        applicationId: e.applicationId,
                        isStorefront: !1,
                        giftRecipient: t,
                        giftingOrigin: H,
                        analyticsLocations: r ?? [],
                    });
        }, [r, d, l, e.applicationId, e.id, t]),
        f = n.useCallback(() => {
            l?.(),
                (0, h.a)(
                    e,
                    { isGift: !0, giftRecipient: t, giftingOrigin: H },
                    { analyticsLocations: [...(r ?? []), _.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [e, t, r, l]);
    return (0, s.jsx)(N, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: I,
        onPurchaseClick: f,
        hasMultipleSources: c,
        source: u,
        ...o,
    });
}
function G(i) {
    let { sku: e, wishlistOwner: t, analyticsLocations: r, onClick: c, hasMultipleSources: u, source: a, ...d } = i,
        _ = (0, M.e)({ sku: e, giftRecipient: t, giftingOrigin: H, analyticsLocations: r }),
        p = n.useCallback(() => {
            c?.(),
                (0, I.A)({ skuId: e.id, isGift: !0, giftingOrigin: H, analyticsLocations: r ?? [], giftRecipient: t });
        }, [c, e.id, r, t]),
        f = n.useCallback(() => {
            c?.(), _();
        }, [c, _]);
    return (0, s.jsx)(N, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: f,
        onPurchaseClick: p,
        hasMultipleSources: u,
        source: a,
        skuPreviewHoverStyle: l()({
            [j.m]:
                (null != e.bundledSkus && e.bundledSkus.length > 0) ||
                (e.tenantMetadata?.collectibles?.type !== o.R.NAMEPLATE &&
                    e.tenantMetadata?.collectibles?.type !== o.R.PROFILE_EFFECT),
        }),
        ...d,
    });
}
function D(i) {
    let { sku: e, wishlistOwner: t, analyticsLocations: r, onClick: l, hasMultipleSources: c, source: u, ...o } = i,
        a = n.useCallback(() => {
            l?.(),
                (0, f.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: H,
                    subscriptionTier: e.id,
                    analyticsLocations: r ?? [],
                });
        }, [l, e.id, t, r]);
    return (0, s.jsx)(N, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: a,
        onPurchaseClick: a,
        hasMultipleSources: c,
        source: u,
        skuPreviewStyle: y.MO,
        skuAssetHoverClassName: y.iR,
        ...o,
    });
}
function B(i) {
    let { sku: e, ...t } = i;
    switch (e.productLine) {
        case L.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, s.jsx)(W, { sku: e, ...t });
        case L.EZt.COLLECTIBLES:
            return (0, s.jsx)(G, { sku: e, ...t });
        case L.EZt.PREMIUM:
            return (0, s.jsx)(D, { sku: e, ...t });
        default:
            return null;
    }
}
