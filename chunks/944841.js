t.d(i, { A: () => N, O: () => B });
var r = t(627968),
    a = t(64700),
    n = t(503698),
    o = t.n(n),
    s = t(132500),
    l = t(172218),
    c = t(575593),
    _ = t(17928),
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
    g = t(652215),
    k = t(594832),
    v = t(212387),
    x = t(121700),
    S = t(460442),
    T = t(662349),
    L = t(754804),
    A = t(479026),
    H = t(699976),
    y = t(788868),
    P = t(985018),
    E = t(224601),
    O = t(997990);
let M = y.vQ.DM_CHANNEL_WISHLIST,
    R = H.Z.SIZE_133;
function B(e) {
    let { spec: i = R } = e;
    return (0, r.jsx)(v.$, { spec: i });
}
function j(e) {
    var i;
    let t,
        n,
        c,
        _,
        d,
        p,
        f,
        m,
        {
            sku: I,
            onDetailsClick: h,
            onPurchaseClick: A,
            onOpenWishlist: H,
            wishlistOwner: y,
            wishlistId: O,
            source: M,
            hasMultipleSources: B,
            skuPreviewStyle: j,
            skuPreviewHoverStyle: G,
            skuAssetHoverClassName: D,
            spec: W = R,
            guildId: N,
            channelId: F,
            numMoreItems: Z,
        } = e,
        [U, Y] = a.useState(!1),
        K = (0, b.Ar)(),
        Q = (0, u.A)(() => (0, s.A)()),
        q = null != Z && Z > 0,
        { handleVisibilityChange: J } =
            ((t = (0, b.Ar)()),
            (n = a.useRef(null)),
            (c = a.useRef(!1)),
            (_ = a.useRef(t)),
            a.useEffect(() => {
                _.current = t;
            }, [t]),
            (d = a.useCallback(
                (e) => {
                    e
                        ? c.current ||
                          (null === n.current &&
                              (n.current = setTimeout(() => {
                                  let e = _.current;
                                  w.default.track(g.HAw.IMPRESSION_WISHLIST_ITEM, {
                                      sku_id: e?.skuId,
                                      wishlist_id: e?.wishlistId,
                                      wishlist_owner_id: e?.wishlistOwnerId,
                                      surface: e?.surface,
                                      position_in_section: e?.positionInSection,
                                      item_source: e?.itemSource,
                                      product_line: e?.productLine,
                                      card_id: Q,
                                      impression_session_id: e?.impressionSessionId,
                                      location_stack: e?.analyticsLocations,
                                  }),
                                      (c.current = !0),
                                      (n.current = null);
                              }, 500)))
                        : null !== n.current && (clearTimeout(n.current), (n.current = null));
                },
                [Q],
            )),
            a.useEffect(
                () => () => {
                    null !== n.current && (clearTimeout(n.current), (n.current = null));
                },
                [],
            ),
            { handleVisibilityChange: d }),
        V = (0, l.K)(J, 0.5, !q);
    (i = U && !q),
        (p = (0, b.Ar)()),
        (f = a.useRef(!1)),
        (m = a.useRef(p)),
        a.useEffect(() => {
            m.current = p;
        }, [p]),
        a.useEffect(() => {
            if (!i) {
                f.current = !1;
                return;
            }
            if (f.current) return;
            let e = setTimeout(() => {
                let e = m.current;
                w.default.track(g.HAw.WISHLIST_ITEM_HOVERED, {
                    sku_id: e?.skuId,
                    wishlist_id: e?.wishlistId,
                    wishlist_owner_id: e?.wishlistOwnerId,
                    surface: e?.surface,
                    position_in_section: e?.positionInSection,
                    item_source: e?.itemSource,
                    product_line: e?.productLine,
                    card_id: Q,
                    impression_session_id: e?.impressionSessionId,
                    location_stack: e?.analyticsLocations,
                }),
                    (f.current = !0);
            }, 250);
            return () => clearTimeout(e);
        }, [i, Q]);
    let X = a.useCallback(() => {
            if (q) return void H();
            let e = M === k.uS.WISHLIST ? "wishlist" : "shop";
            w.default.track(g.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: I.id,
                item_source: e,
                wishlist_id: M === k.uS.WISHLIST ? O : null,
                product_line: I.productLine,
            }),
                w.default.track(g.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: I.id,
                    wishlist_id: O,
                    wishlist_owner_id: K?.wishlistOwnerId,
                    surface: K?.surface,
                    position_in_section: K?.positionInSection,
                    item_source: K?.itemSource,
                    click_type: "details",
                    product_line: I.productLine,
                    card_id: Q,
                    impression_session_id: K?.impressionSessionId,
                    location_stack: K?.analyticsLocations,
                }),
                h?.();
        }, [h, O, M, I.id, I.productLine, H, q, K, Q]),
        z = a.useCallback(() => {
            let e = M === k.uS.WISHLIST ? "wishlist" : "shop";
            w.default.track(g.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: I.id,
                item_source: e,
                wishlist_id: M === k.uS.WISHLIST ? O : null,
                product_line: I.productLine,
            }),
                w.default.track(g.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: I.id,
                    wishlist_id: O,
                    wishlist_owner_id: K?.wishlistOwnerId,
                    surface: K?.surface,
                    position_in_section: K?.positionInSection,
                    item_source: K?.itemSource,
                    click_type: "gift",
                    product_line: I.productLine,
                    card_id: Q,
                    impression_session_id: K?.impressionSessionId,
                    location_stack: K?.analyticsLocations,
                }),
                A?.();
        }, [A, I.id, I.productLine, M, O, K, Q]),
        { label: $, icon: ee, isPromptingPurchase: ei } = (0, T.h)({ wishlistOwner: y, isOwned: !1 });
    return (0, r.jsx)("div", {
        ref: V,
        children: (0, r.jsxs)(v.A, {
            sku: I,
            user: y,
            spec: W,
            skuPreviewStyle: o()(E.e, j, U ? G : void 0),
            skuAssetClassName: U ? D : void 0,
            onClick: X,
            "aria-label": q
                ? P.intl.formatToPlainString(P.t["8uYD+I"], { username: y.username })
                : P.intl.formatToPlainString(P.t.ZBB4Ty, { productName: (0, C.TC)(I) }),
            onHoverOrFocusChange: Y,
            children: [
                (0, r.jsx)(x.A, {
                    spec: W,
                    sku: I,
                    isCardHovered: U && !q,
                    location: "DMGiftingModalWishlistItemCardBase",
                    replacedElement:
                        B && M === k.uS.WISHLIST
                            ? (0, r.jsx)(L.X, { spec: W, users: [y], guildId: N ?? void 0, channelId: F ?? void 0 })
                            : null,
                }),
                !q && (0, r.jsx)(T.A, { spec: W, onClick: ei ? z : X, label: $, icon: ee, isHoveringOrFocusing: U }),
                q && (0, r.jsx)(S.Yb, { count: Z }),
            ],
        }),
    });
}
function G(e) {
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
                        giftingOrigin: M,
                        analyticsLocations: n ?? [],
                    });
        }, [n, u, o, i.applicationId, i.id, t]),
        m = a.useCallback(() => {
            o?.(),
                (0, h.a)(
                    i,
                    { isGift: !0, giftRecipient: t, giftingOrigin: M },
                    { analyticsLocations: [...(n ?? []), d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [i, t, n, o]);
    return (0, r.jsx)(j, {
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
function D(e) {
    let { sku: i, wishlistOwner: t, analyticsLocations: n, onClick: s, hasMultipleSources: l, source: _, ...u } = e,
        d = (0, A.e)({ sku: i, giftRecipient: t, giftingOrigin: M, analyticsLocations: n }),
        p = a.useCallback(() => {
            s?.(),
                (0, f.A)({ skuId: i.id, isGift: !0, giftingOrigin: M, analyticsLocations: n ?? [], giftRecipient: t });
        }, [s, i.id, n, t]),
        m = a.useCallback(() => {
            s?.(), d();
        }, [s, d]);
    return (0, r.jsx)(j, {
        sku: i,
        wishlistOwner: t,
        analyticsLocations: n,
        onDetailsClick: m,
        onPurchaseClick: p,
        hasMultipleSources: l,
        source: _,
        skuPreviewHoverStyle: o()({
            [E.m]:
                (null != i.bundledSkus && i.bundledSkus.length > 0) ||
                (i.tenantMetadata?.collectibles?.type !== c.R.NAMEPLATE &&
                    i.tenantMetadata?.collectibles?.type !== c.R.PROFILE_EFFECT),
        }),
        ...u,
    });
}
function W(e) {
    let { sku: i, wishlistOwner: t, analyticsLocations: n, onClick: o, hasMultipleSources: s, source: l, ...c } = e,
        _ = a.useCallback(() => {
            o?.(),
                (0, m.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: M,
                    subscriptionTier: i.id,
                    analyticsLocations: n ?? [],
                });
        }, [o, i.id, t, n]);
    return (0, r.jsx)(j, {
        sku: i,
        wishlistOwner: t,
        analyticsLocations: n,
        onDetailsClick: _,
        onPurchaseClick: _,
        hasMultipleSources: s,
        source: l,
        skuPreviewStyle: O.MO,
        skuAssetHoverClassName: O.iR,
        ...c,
    });
}
function N(e) {
    let { sku: i, ...t } = e;
    switch (i.productLine) {
        case g.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, r.jsx)(G, { sku: i, ...t });
        case g.EZt.COLLECTIBLES:
            return (0, r.jsx)(D, { sku: i, ...t });
        case g.EZt.PREMIUM:
            return (0, r.jsx)(W, { sku: i, ...t });
        default:
            return null;
    }
}
