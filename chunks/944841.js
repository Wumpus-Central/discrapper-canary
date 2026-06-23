t.d(e, { A: () => F, O: () => N });
var n = t(627968),
    s = t(64700),
    r = t(503698),
    l = t.n(r),
    c = t(835245),
    o = t(172218),
    u = t(575593),
    a = t(17928),
    d = t(444927),
    _ = t(793574),
    p = t(587895),
    I = t(44120),
    f = t(532794),
    S = t(31969),
    h = t(317560),
    k = t(533406),
    g = t(174459),
    m = t(661492),
    L = t(299679),
    T = t(652215),
    w = t(561794),
    C = t(212387),
    E = t(74135),
    A = t(460442),
    x = t(662349),
    O = t(532423),
    R = t(479026),
    v = t(699976),
    M = t(788868),
    j = t(375708),
    y = t(224601),
    H = t(997990);
let b = M.vQ.DM_CHANNEL_WISHLIST,
    P = v.Z.SIZE_133;
function N(i) {
    let { spec: e = P } = i;
    return (0, n.jsx)(C.$, { spec: e });
}
function W(i) {
    var e;
    let t,
        r,
        u,
        a,
        _,
        p,
        I,
        f,
        {
            sku: S,
            onDetailsClick: h,
            onPurchaseClick: k,
            onOpenWishlist: E,
            wishlistOwner: R,
            wishlistId: v,
            source: M,
            hasMultipleSources: H,
            skuPreviewStyle: b,
            skuPreviewHoverStyle: N,
            skuAssetHoverClassName: W,
            spec: D = P,
            guildId: G,
            channelId: B,
            numMoreItems: F,
            promotion: U,
        } = i,
        [Z, z] = s.useState(!1),
        K = (0, L.Ar)(),
        Y = (0, d.A)(() => (0, c.A)()),
        V = null != F && F > 0,
        { handleVisibilityChange: $ } =
            ((t = (0, L.Ar)()),
            (r = s.useRef(null)),
            (u = s.useRef(!1)),
            (a = s.useRef(t)),
            s.useEffect(() => {
                a.current = t;
            }, [t]),
            (_ = s.useCallback(
                (i) => {
                    i
                        ? u.current ||
                          (null === r.current &&
                              (r.current = setTimeout(() => {
                                  let i = a.current;
                                  g.default.track(T.HAw.IMPRESSION_WISHLIST_ITEM, {
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
                                      (u.current = !0),
                                      (r.current = null);
                              }, 500)))
                        : null !== r.current && (clearTimeout(r.current), (r.current = null));
                },
                [Y],
            )),
            s.useEffect(
                () => () => {
                    null !== r.current && (clearTimeout(r.current), (r.current = null));
                },
                [],
            ),
            { handleVisibilityChange: _ }),
        q = (0, o.K)($, 0.5, !V);
    (e = Z && !V),
        (p = (0, L.Ar)()),
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
                g.default.track(T.HAw.WISHLIST_ITEM_HOVERED, {
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
    let J = s.useCallback(() => {
            if (V) return void E();
            let i = M === w.uS.WISHLIST ? "wishlist" : "shop";
            g.default.track(T.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: S.id,
                item_source: i,
                wishlist_id: M === w.uS.WISHLIST ? v : null,
                product_line: S.productLine,
            }),
                g.default.track(T.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: S.id,
                    wishlist_id: v,
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
        }, [h, v, M, S.id, S.productLine, E, V, K, Y]),
        Q = s.useCallback(() => {
            let i = M === w.uS.WISHLIST ? "wishlist" : "shop";
            g.default.track(T.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: S.id,
                item_source: i,
                wishlist_id: M === w.uS.WISHLIST ? v : null,
                product_line: S.productLine,
            }),
                g.default.track(T.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: S.id,
                    wishlist_id: v,
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
                k?.();
        }, [k, S.id, S.productLine, M, v, K, Y]),
        { label: X, icon: ii, isPromptingPurchase: ie } = (0, x.h)({ wishlistOwner: R, isOwned: !1 });
    return (0, n.jsx)("div", {
        ref: q,
        children: (0, n.jsxs)(C.A, {
            sku: S,
            user: R,
            spec: D,
            skuPreviewStyle: l()(y.e, b, Z ? N : void 0),
            skuAssetClassName: Z ? W : void 0,
            onClick: J,
            "aria-label": V
                ? j.intl.formatToPlainString(j.t["8uYD+I"], { username: R.username })
                : j.intl.formatToPlainString(j.t.ZBB4Ty, { productName: (0, m.TC)(S) }),
            onHoverOrFocusChange: z,
            children: [
                H && M === w.uS.WISHLIST
                    ? (0, n.jsx)(O.X, { spec: D, users: [R], guildId: G ?? void 0, channelId: B ?? void 0 })
                    : null,
                !V && (0, n.jsx)(x.A, { spec: D, onClick: ie ? Q : J, label: X, icon: ii, isHoveringOrFocusing: Z }),
                V && (0, n.jsx)(A.Yb, { count: F }),
                !Z && !V && U,
            ],
        }),
    });
}
function D(i) {
    let {
            sku: e,
            wishlistOwner: t,
            analyticsLocations: r,
            onClick: l,
            hasMultipleSources: c,
            source: o,
            spec: u = P,
            ...d
        } = i,
        I = (0, a.bG)([p.A], () => p.A.getApplication(e.applicationId)),
        f = (0, S.F)("sku_gift_badge", { applicationId: e.applicationId, skuId: e.id }),
        g = s.useCallback(() => {
            l?.(),
                null != I &&
                    null != I.guildId &&
                    (0, h.R)({
                        skuId: e.id,
                        applicationId: e.applicationId,
                        isStorefront: !1,
                        giftRecipient: t,
                        giftingOrigin: b,
                        analyticsLocations: r ?? [],
                    });
        }, [r, I, l, e.applicationId, e.id, t]),
        m = s.useCallback(() => {
            l?.(),
                (0, k.a)(
                    e,
                    { isGift: !0, giftRecipient: t, giftingOrigin: b },
                    { analyticsLocations: [...(r ?? []), _.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [e, t, r, l]);
    return (0, n.jsx)(W, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: g,
        onPurchaseClick: m,
        hasMultipleSources: c,
        source: o,
        spec: u,
        promotion: null != f ? (0, n.jsx)(E.c, { spec: u, icon: f.Icon, type: { text: f.text } }) : null,
        ...d,
    });
}
function G(i) {
    let { sku: e, wishlistOwner: t, analyticsLocations: r, onClick: c, hasMultipleSources: o, source: a, ...d } = i,
        _ = (0, R.e)({ sku: e, giftRecipient: t, giftingOrigin: b, analyticsLocations: r }),
        p = s.useCallback(() => {
            c?.(),
                (0, I.A)({ skuId: e.id, isGift: !0, giftingOrigin: b, analyticsLocations: r ?? [], giftRecipient: t });
        }, [c, e.id, r, t]),
        f = s.useCallback(() => {
            c?.(), _();
        }, [c, _]);
    return (0, n.jsx)(W, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: f,
        onPurchaseClick: p,
        hasMultipleSources: o,
        source: a,
        skuPreviewHoverStyle: l()({
            [y.m]:
                e.tenantMetadata?.collectibles?.type === u.R.AVATAR_DECORATION ||
                e.tenantMetadata?.collectibles?.type === u.R.PROFILE_FRAME,
        }),
        ...d,
    });
}
function B(i) {
    let { sku: e, wishlistOwner: t, analyticsLocations: r, onClick: l, hasMultipleSources: c, source: o, ...u } = i,
        a = s.useCallback(() => {
            l?.(),
                (0, f.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: b,
                    subscriptionTier: e.id,
                    analyticsLocations: r ?? [],
                });
        }, [l, e.id, t, r]);
    return (0, n.jsx)(W, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: a,
        onPurchaseClick: a,
        hasMultipleSources: c,
        source: o,
        skuPreviewStyle: H.MO,
        skuAssetHoverClassName: H.iR,
        ...u,
    });
}
function F(i) {
    let { sku: e, ...t } = i;
    switch (e.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(D, { sku: e, ...t });
        case T.EZt.COLLECTIBLES:
            return (0, n.jsx)(G, { sku: e, ...t });
        case T.EZt.PREMIUM:
            return (0, n.jsx)(B, { sku: e, ...t });
        default:
            return null;
    }
}
