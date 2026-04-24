"use strict";
r.d(t, { A: () => B, O: () => H });
var i = r(627968),
    n = r(64700),
    a = r(503698),
    s = r.n(a),
    l = r(132500),
    c = r(172218),
    o = r(575593),
    u = r(17928),
    d = r(444927),
    _ = r(793574),
    f = r(587895),
    p = r(44120),
    m = r(532794),
    h = r(317560),
    b = r(99161),
    g = r(954571),
    I = r(661492),
    E = r(299679),
    A = r(652215),
    C = r(594832),
    v = r(212387),
    S = r(121700),
    x = r(460442),
    R = r(662349),
    T = r(754804),
    L = r(479026),
    y = r(699976),
    w = r(788868),
    k = r(985018),
    M = r(224601),
    O = r(997990);
let P = w.vQ.DM_CHANNEL_WISHLIST,
    N = y.Z.SIZE_133;
function H(e) {
    let { spec: t = N } = e;
    return (0, i.jsx)(v.$, { spec: t });
}
function U(e) {
    var t;
    let r,
        a,
        o,
        u,
        _,
        f,
        p,
        m,
        {
            sku: h,
            onDetailsClick: b,
            onPurchaseClick: L,
            onOpenWishlist: y,
            wishlistOwner: w,
            wishlistId: O,
            source: P,
            hasMultipleSources: H,
            skuPreviewStyle: U,
            skuPreviewHoverStyle: D,
            skuAssetHoverClassName: F,
            spec: j = N,
            guildId: B,
            channelId: G,
            numMoreItems: W,
        } = e,
        [X, Z] = n.useState(!1),
        z = (0, E.Ar)(),
        q = (0, d.A)(() => (0, l.A)()),
        K = null != W && W > 0,
        { handleVisibilityChange: V } =
            ((r = (0, E.Ar)()),
            (a = n.useRef(null)),
            (o = n.useRef(!1)),
            (u = n.useRef(r)),
            n.useEffect(() => {
                u.current = r;
            }, [r]),
            (_ = n.useCallback(
                (e) => {
                    e
                        ? o.current ||
                          (null === a.current &&
                              (a.current = setTimeout(() => {
                                  let e = u.current;
                                  g.default.track(A.HAw.IMPRESSION_WISHLIST_ITEM, {
                                      sku_id: e?.skuId,
                                      wishlist_id: e?.wishlistId,
                                      wishlist_owner_id: e?.wishlistOwnerId,
                                      surface: e?.surface,
                                      position_in_section: e?.positionInSection,
                                      item_source: e?.itemSource,
                                      product_line: e?.productLine,
                                      card_id: q,
                                      impression_session_id: e?.impressionSessionId,
                                      location_stack: e?.analyticsLocations,
                                  }),
                                      (o.current = !0),
                                      (a.current = null);
                              }, 500)))
                        : null !== a.current && (clearTimeout(a.current), (a.current = null));
                },
                [q],
            )),
            n.useEffect(
                () => () => {
                    null !== a.current && (clearTimeout(a.current), (a.current = null));
                },
                [],
            ),
            { handleVisibilityChange: _ }),
        Y = (0, c.K)(V, 0.5, !K);
    (t = X && !K),
        (f = (0, E.Ar)()),
        (p = n.useRef(!1)),
        (m = n.useRef(f)),
        n.useEffect(() => {
            m.current = f;
        }, [f]),
        n.useEffect(() => {
            if (!t) {
                p.current = !1;
                return;
            }
            if (p.current) return;
            let e = setTimeout(() => {
                let e = m.current;
                g.default.track(A.HAw.WISHLIST_ITEM_HOVERED, {
                    sku_id: e?.skuId,
                    wishlist_id: e?.wishlistId,
                    wishlist_owner_id: e?.wishlistOwnerId,
                    surface: e?.surface,
                    position_in_section: e?.positionInSection,
                    item_source: e?.itemSource,
                    product_line: e?.productLine,
                    card_id: q,
                    impression_session_id: e?.impressionSessionId,
                    location_stack: e?.analyticsLocations,
                }),
                    (p.current = !0);
            }, 250);
            return () => clearTimeout(e);
        }, [t, q]);
    let Q = n.useCallback(() => {
            if (K) return void y();
            let e = P === C.uS.WISHLIST ? "wishlist" : "shop";
            g.default.track(A.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: h.id,
                item_source: e,
                wishlist_id: P === C.uS.WISHLIST ? O : null,
                product_line: h.productLine,
            }),
                g.default.track(A.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: h.id,
                    wishlist_id: O,
                    wishlist_owner_id: z?.wishlistOwnerId,
                    surface: z?.surface,
                    position_in_section: z?.positionInSection,
                    item_source: z?.itemSource,
                    click_type: "details",
                    product_line: h.productLine,
                    card_id: q,
                    impression_session_id: z?.impressionSessionId,
                    location_stack: z?.analyticsLocations,
                }),
                b?.();
        }, [b, O, P, h.id, h.productLine, y, K, z, q]),
        $ = n.useCallback(() => {
            let e = P === C.uS.WISHLIST ? "wishlist" : "shop";
            g.default.track(A.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: h.id,
                item_source: e,
                wishlist_id: P === C.uS.WISHLIST ? O : null,
                product_line: h.productLine,
            }),
                g.default.track(A.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: h.id,
                    wishlist_id: O,
                    wishlist_owner_id: z?.wishlistOwnerId,
                    surface: z?.surface,
                    position_in_section: z?.positionInSection,
                    item_source: z?.itemSource,
                    click_type: "gift",
                    product_line: h.productLine,
                    card_id: q,
                    impression_session_id: z?.impressionSessionId,
                    location_stack: z?.analyticsLocations,
                }),
                L?.();
        }, [L, h.id, h.productLine, P, O, z, q]),
        { label: J, icon: ee, isPromptingPurchase: et } = (0, R.h)({ wishlistOwner: w, isOwned: !1 });
    return (0, i.jsx)("div", {
        ref: Y,
        children: (0, i.jsxs)(v.A, {
            sku: h,
            user: w,
            spec: j,
            skuPreviewStyle: s()(M.e, U, X ? D : void 0),
            skuAssetClassName: X ? F : void 0,
            onClick: Q,
            "aria-label": K
                ? k.intl.formatToPlainString(k.t["8uYD+I"], { username: w.username })
                : k.intl.formatToPlainString(k.t.ZBB4Ty, { productName: (0, I.TC)(h) }),
            onHoverOrFocusChange: Z,
            children: [
                (0, i.jsx)(S.A, {
                    spec: j,
                    sku: h,
                    isCardHovered: X && !K,
                    location: "DMGiftingModalWishlistItemCardBase",
                    replacedElement:
                        H && P === C.uS.WISHLIST
                            ? (0, i.jsx)(T.X, { spec: j, users: [w], guildId: B ?? void 0, channelId: G ?? void 0 })
                            : null,
                }),
                !K && (0, i.jsx)(R.A, { spec: j, onClick: et ? $ : Q, label: J, icon: ee, isHoveringOrFocusing: X }),
                K && (0, i.jsx)(x.Yb, { count: W }),
            ],
        }),
    });
}
function D(e) {
    let { sku: t, wishlistOwner: r, analyticsLocations: a, onClick: s, hasMultipleSources: l, source: c, ...o } = e,
        d = (0, u.bG)([f.A], () => f.A.getApplication(t.applicationId)),
        p = n.useCallback(() => {
            s?.(),
                null != d &&
                    null != d.guildId &&
                    (0, h.R)({
                        skuId: t.id,
                        applicationId: t.applicationId,
                        isStorefront: !1,
                        giftRecipient: r,
                        giftingOrigin: P,
                        analyticsLocations: a ?? [],
                    });
        }, [a, d, s, t.applicationId, t.id, r]),
        m = n.useCallback(() => {
            s?.(),
                (0, b.a)(
                    t,
                    { isGift: !0, giftRecipient: r, giftingOrigin: P },
                    { analyticsLocations: [...(a ?? []), _.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [t, r, a, s]);
    return (0, i.jsx)(U, {
        sku: t,
        wishlistOwner: r,
        analyticsLocations: a,
        onDetailsClick: p,
        onPurchaseClick: m,
        hasMultipleSources: l,
        source: c,
        ...o,
    });
}
function F(e) {
    let { sku: t, wishlistOwner: r, analyticsLocations: a, onClick: l, hasMultipleSources: c, source: u, ...d } = e,
        _ = (0, L.e)({ sku: t, giftRecipient: r, giftingOrigin: P, analyticsLocations: a }),
        f = n.useCallback(() => {
            l?.(),
                (0, p.A)({ skuId: t.id, isGift: !0, giftingOrigin: P, analyticsLocations: a ?? [], giftRecipient: r });
        }, [l, t.id, a, r]),
        m = n.useCallback(() => {
            l?.(), _();
        }, [l, _]);
    return (0, i.jsx)(U, {
        sku: t,
        wishlistOwner: r,
        analyticsLocations: a,
        onDetailsClick: m,
        onPurchaseClick: f,
        hasMultipleSources: c,
        source: u,
        skuPreviewHoverStyle: s()({
            [M.m]:
                (null != t.bundledSkus && t.bundledSkus.length > 0) ||
                (t.tenantMetadata?.collectibles?.type !== o.R.NAMEPLATE &&
                    t.tenantMetadata?.collectibles?.type !== o.R.PROFILE_EFFECT),
        }),
        ...d,
    });
}
function j(e) {
    let { sku: t, wishlistOwner: r, analyticsLocations: a, onClick: s, hasMultipleSources: l, source: c, ...o } = e,
        u = n.useCallback(() => {
            s?.(),
                (0, m.A)({
                    isGift: !0,
                    giftRecipient: r,
                    giftingOrigin: P,
                    subscriptionTier: t.id,
                    analyticsLocations: a ?? [],
                });
        }, [s, t.id, r, a]);
    return (0, i.jsx)(U, {
        sku: t,
        wishlistOwner: r,
        analyticsLocations: a,
        onDetailsClick: u,
        onPurchaseClick: u,
        hasMultipleSources: l,
        source: c,
        skuPreviewStyle: O.MO,
        skuAssetHoverClassName: O.iR,
        ...o,
    });
}
function B(e) {
    let { sku: t, ...r } = e;
    switch (t.productLine) {
        case A.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(D, { sku: t, ...r });
        case A.EZt.COLLECTIBLES:
            return (0, i.jsx)(F, { sku: t, ...r });
        case A.EZt.PREMIUM:
            return (0, i.jsx)(j, { sku: t, ...r });
        default:
            return null;
    }
}
