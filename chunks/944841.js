t.d(e, { A: () => D, O: () => H });
var n = t(627968),
    s = t(64700),
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
    C = t(460442),
    E = t(662349),
    A = t(754804),
    x = t(479026),
    O = t(699976),
    v = t(788868),
    M = t(375708),
    R = t(224601),
    j = t(997990);
let y = v.vQ.DM_CHANNEL_WISHLIST,
    b = O.Z.SIZE_133;
function H(i) {
    let { spec: e = b } = i;
    return (0, n.jsx)(w.$, { spec: e });
}
function P(i) {
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
            onPurchaseClick: x,
            onOpenWishlist: O,
            wishlistOwner: v,
            wishlistId: j,
            source: y,
            hasMultipleSources: H,
            skuPreviewStyle: P,
            skuPreviewHoverStyle: N,
            skuAssetHoverClassName: W,
            spec: G = b,
            guildId: D,
            channelId: B,
            numMoreItems: F,
        } = i,
        [U, Z] = s.useState(!1),
        z = (0, m.Ar)(),
        K = (0, d.A)(() => (0, c.A)()),
        Y = null != F && F > 0,
        { handleVisibilityChange: $ } =
            ((t = (0, m.Ar)()),
            (r = s.useRef(null)),
            (o = s.useRef(!1)),
            (a = s.useRef(t)),
            s.useEffect(() => {
                a.current = t;
            }, [t]),
            (_ = s.useCallback(
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
                                      card_id: K,
                                      impression_session_id: i?.impressionSessionId,
                                      location_stack: i?.analyticsLocations,
                                  }),
                                      (o.current = !0),
                                      (r.current = null);
                              }, 500)))
                        : null !== r.current && (clearTimeout(r.current), (r.current = null));
                },
                [K],
            )),
            s.useEffect(
                () => () => {
                    null !== r.current && (clearTimeout(r.current), (r.current = null));
                },
                [],
            ),
            { handleVisibilityChange: _ }),
        q = (0, u.K)($, 0.5, !Y);
    (e = U && !Y),
        (p = (0, m.Ar)()),
        (I = s.useRef(!1)),
        (f = s.useRef(p)),
        s.useEffect(() => {
            f.current = p;
        }, [p]),
        s.useEffect(() => {
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
                    card_id: K,
                    impression_session_id: i?.impressionSessionId,
                    location_stack: i?.analyticsLocations,
                }),
                    (I.current = !0);
            }, 250);
            return () => clearTimeout(i);
        }, [e, K]);
    let J = s.useCallback(() => {
            if (Y) return void O();
            let i = y === T.uS.WISHLIST ? "wishlist" : "shop";
            k.default.track(L.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: S.id,
                item_source: i,
                wishlist_id: y === T.uS.WISHLIST ? j : null,
                product_line: S.productLine,
            }),
                k.default.track(L.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: S.id,
                    wishlist_id: j,
                    wishlist_owner_id: z?.wishlistOwnerId,
                    surface: z?.surface,
                    position_in_section: z?.positionInSection,
                    item_source: z?.itemSource,
                    click_type: "details",
                    product_line: S.productLine,
                    card_id: K,
                    impression_session_id: z?.impressionSessionId,
                    location_stack: z?.analyticsLocations,
                }),
                h?.();
        }, [h, j, y, S.id, S.productLine, O, Y, z, K]),
        Q = s.useCallback(() => {
            let i = y === T.uS.WISHLIST ? "wishlist" : "shop";
            k.default.track(L.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: S.id,
                item_source: i,
                wishlist_id: y === T.uS.WISHLIST ? j : null,
                product_line: S.productLine,
            }),
                k.default.track(L.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: S.id,
                    wishlist_id: j,
                    wishlist_owner_id: z?.wishlistOwnerId,
                    surface: z?.surface,
                    position_in_section: z?.positionInSection,
                    item_source: z?.itemSource,
                    click_type: "gift",
                    product_line: S.productLine,
                    card_id: K,
                    impression_session_id: z?.impressionSessionId,
                    location_stack: z?.analyticsLocations,
                }),
                x?.();
        }, [x, S.id, S.productLine, y, j, z, K]),
        { label: V, icon: X, isPromptingPurchase: ii } = (0, E.h)({ wishlistOwner: v, isOwned: !1 });
    return (0, n.jsx)("div", {
        ref: q,
        children: (0, n.jsxs)(w.A, {
            sku: S,
            user: v,
            spec: G,
            skuPreviewStyle: l()(R.e, P, U ? N : void 0),
            skuAssetClassName: U ? W : void 0,
            onClick: J,
            "aria-label": Y
                ? M.intl.formatToPlainString(M.t["8uYD+I"], { username: v.username })
                : M.intl.formatToPlainString(M.t.ZBB4Ty, { productName: (0, g.TC)(S) }),
            onHoverOrFocusChange: Z,
            children: [
                H && y === T.uS.WISHLIST
                    ? (0, n.jsx)(A.X, { spec: G, users: [v], guildId: D ?? void 0, channelId: B ?? void 0 })
                    : null,
                !Y && (0, n.jsx)(E.A, { spec: G, onClick: ii ? Q : J, label: V, icon: X, isHoveringOrFocusing: U }),
                Y && (0, n.jsx)(C.Yb, { count: F }),
            ],
        }),
    });
}
function N(i) {
    let { sku: e, wishlistOwner: t, analyticsLocations: r, onClick: l, hasMultipleSources: c, source: u, ...o } = i,
        d = (0, a.bG)([p.A], () => p.A.getApplication(e.applicationId)),
        I = s.useCallback(() => {
            l?.(),
                null != d &&
                    null != d.guildId &&
                    (0, S.R)({
                        skuId: e.id,
                        applicationId: e.applicationId,
                        isStorefront: !1,
                        giftRecipient: t,
                        giftingOrigin: y,
                        analyticsLocations: r ?? [],
                    });
        }, [r, d, l, e.applicationId, e.id, t]),
        f = s.useCallback(() => {
            l?.(),
                (0, h.a)(
                    e,
                    { isGift: !0, giftRecipient: t, giftingOrigin: y },
                    { analyticsLocations: [...(r ?? []), _.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [e, t, r, l]);
    return (0, n.jsx)(P, {
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
function W(i) {
    let { sku: e, wishlistOwner: t, analyticsLocations: r, onClick: c, hasMultipleSources: u, source: a, ...d } = i,
        _ = (0, x.e)({ sku: e, giftRecipient: t, giftingOrigin: y, analyticsLocations: r }),
        p = s.useCallback(() => {
            c?.(),
                (0, I.A)({ skuId: e.id, isGift: !0, giftingOrigin: y, analyticsLocations: r ?? [], giftRecipient: t });
        }, [c, e.id, r, t]),
        f = s.useCallback(() => {
            c?.(), _();
        }, [c, _]);
    return (0, n.jsx)(P, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: f,
        onPurchaseClick: p,
        hasMultipleSources: u,
        source: a,
        skuPreviewHoverStyle: l()({
            [R.m]:
                (null != e.bundledSkus && e.bundledSkus.length > 0) ||
                (e.tenantMetadata?.collectibles?.type !== o.R.NAMEPLATE &&
                    e.tenantMetadata?.collectibles?.type !== o.R.PROFILE_EFFECT),
        }),
        ...d,
    });
}
function G(i) {
    let { sku: e, wishlistOwner: t, analyticsLocations: r, onClick: l, hasMultipleSources: c, source: u, ...o } = i,
        a = s.useCallback(() => {
            l?.(),
                (0, f.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: y,
                    subscriptionTier: e.id,
                    analyticsLocations: r ?? [],
                });
        }, [l, e.id, t, r]);
    return (0, n.jsx)(P, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: a,
        onPurchaseClick: a,
        hasMultipleSources: c,
        source: u,
        skuPreviewStyle: j.MO,
        skuAssetHoverClassName: j.iR,
        ...o,
    });
}
function D(i) {
    let { sku: e, ...t } = i;
    switch (e.productLine) {
        case L.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(N, { sku: e, ...t });
        case L.EZt.COLLECTIBLES:
            return (0, n.jsx)(W, { sku: e, ...t });
        case L.EZt.PREMIUM:
            return (0, n.jsx)(G, { sku: e, ...t });
        default:
            return null;
    }
}
