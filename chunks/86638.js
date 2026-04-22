n.d(t, { A: () => W });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(575593),
    o = n(765178),
    c = n(311907),
    d = n(793574),
    u = n(688810),
    _ = n(44120),
    g = n(532794),
    f = n(87719),
    m = n(317560),
    x = n(533406),
    p = n(183555),
    I = n(657331),
    A = n(606758),
    h = n(287809),
    E = n(474090),
    v = n(661492),
    C = n(111085),
    b = n(146423),
    j = n(121700),
    T = n(460442),
    N = n(662349),
    S = n(479026),
    k = n(699976),
    O = n(652215),
    L = n(788868),
    P = n(518477),
    R = n(985018),
    w = n(575581),
    D = n(997990);
let G = k.Z.SIZE_133;
function y(e) {
    let {
            item: t,
            wishlistOwner: n,
            currentUser: l,
            style: r,
            isDragging: c,
            dragHandle: d,
            skuPreviewStyle: u,
            skuAssetClassName: _,
            isHoveringOrFocusing: g,
            setIsHoveringOrFocusing: f,
            onDetailsClick: m,
            onPurchaseClick: x,
            wishlistId: I,
            isItemOwned: h,
            cardBackdrop: E,
        } = e,
        C = a.useRef(null),
        S = a.useRef(f);
    a.useEffect(() => {
        S.current = f;
    }, [f]),
        a.useEffect(() => {
            let e = C.current;
            if (null == e) return;
            let t = () => {
                S.current(!1);
            };
            return (
                e.addEventListener("focusin", t),
                () => {
                    e.removeEventListener("focusin", t);
                }
            );
        }, []);
    let { trackUserProfileWishlistAction: k } = (0, p.NJ)(),
        O = a.useCallback(() => {
            null != I &&
                (k({
                    wishlistId: I,
                    action: P.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                m());
        }, [m, t.sku, I, k]),
        L = a.useCallback(() => {
            null != I &&
                (k({
                    wishlistId: I,
                    action: P.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                x());
        }, [x, t.sku, I, k]),
        D = a.useCallback(() => {
            (0, A.XA)(P.jM.SOMETHING_WENT_WRONG), o.O.announce(R.intl.string(R.t.F8FvUy));
        }, []),
        y = null != d ? (0, i.jsx)("div", { ref: C, className: w.BU, children: d }) : null,
        { label: M, icon: U, isPromptingPurchase: F } = (0, N.h)({ wishlistOwner: n, isOwned: h });
    return (0, i.jsxs)("div", {
        className: w.kL,
        children: [
            (0, i.jsxs)(b.A, {
                sku: t.sku,
                user: n,
                spec: G,
                cardStyle: s()(w.Nr, r),
                skuPreviewStyle: s()(w.ev, { [w.go]: h && !g }, u),
                skuAssetClassName: _,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: f,
                onClick: O,
                "aria-label": R.intl.formatToPlainString(R.t.ZBB4Ty, { productName: (0, v.TC)(t.sku) }),
                children: [
                    E,
                    (0, i.jsx)(N.A, { spec: G, onClick: F ? L : O, isHoveringOrFocusing: g, label: M, icon: U }),
                    h && (0, i.jsx)(T.gS, { isHoveringOrFocusing: g }),
                    n.id === l.id &&
                        null != I &&
                        (0, i.jsx)(j.A, {
                            sku: t.sku,
                            isCardHovered: g,
                            spec: G,
                            onError: D,
                            location: "UserProfileWishlistItemCardBase",
                            skipExperiment: !0,
                        }),
                ],
            }),
            y,
        ],
    });
}
function M(e) {
    let { item: t, isItemOwned: n, wishlistOwner: l, currentUser: s, analyticsLocations: r, ...o } = e,
        c = a.useCallback(() => {
            (0, m.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: l,
                giftingOrigin: L.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: r,
            });
        }, [t.sku.id, t.sku.applicationId, l, r]),
        u = a.useCallback(() => {
            let e = l.id === s.id;
            (0, x.a)(
                t.sku,
                { isGift: !e, giftRecipient: l, giftingOrigin: L.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...r, d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, l, s.id, r]);
    return (0, i.jsx)(y, {
        item: t,
        wishlistOwner: l,
        isItemOwned: n,
        onDetailsClick: c,
        onPurchaseClick: u,
        analyticsLocations: r,
        currentUser: s,
        ...o,
    });
}
function U(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: l,
            analyticsLocations: o,
            currentUser: c,
            isHoveringOrFocusing: d,
            ...u
        } = e,
        g = (0, S.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: L.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o,
        }),
        f = a.useMemo(
            () => () => {
                let e = n.id === c.id;
                (0, _.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: L.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: o ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, c.id, o],
        ),
        m =
            d &&
            t.sku.productLine === O.EZt.COLLECTIBLES &&
            t.sku.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT &&
            t.sku.tenantMetadata?.collectibles?.type !== r.R.NAMEPLATE;
    return (0, i.jsx)(y, {
        item: t,
        wishlistOwner: n,
        isItemOwned: l,
        currentUser: c,
        onDetailsClick: g,
        onPurchaseClick: f,
        isHoveringOrFocusing: d,
        skuPreviewStyle: s()({ [w.mn]: m }),
        analyticsLocations: o,
        ...u,
    });
}
function F(e) {
    let {
            item: t,
            isItemOwned: n,
            wishlistOwner: l,
            currentUser: s,
            analyticsLocations: r,
            isHoveringOrFocusing: o,
            ...c
        } = e,
        d = a.useCallback(() => {
            n
                ? (0, f.x)(I.closeUserProfileModal)
                : (0, g.A)({
                      isGift: !0,
                      giftRecipient: l,
                      giftingOrigin: L.vQ.USER_PROFILE_WISHLIST,
                      subscriptionTier: t.skuId,
                      analyticsLocations: r,
                  });
        }, [n, t.skuId, l, r]);
    return (0, i.jsx)(y, {
        item: t,
        wishlistOwner: l,
        isItemOwned: n,
        currentUser: s,
        onDetailsClick: d,
        onPurchaseClick: d,
        isHoveringOrFocusing: o,
        skuPreviewStyle: D.MO,
        skuAssetClassName: o ? D.iR : void 0,
        analyticsLocations: r,
        ...c,
    });
}
function W(e) {
    let { item: t, wishlistOwner: n, wishlistId: l, analyticsLocations: s, ...r } = e,
        { analyticsLocations: o } = (0, u.Ay)(
            ...(s ?? []),
            t.sku?.productLine === O.EZt.SOCIAL_LAYER_GAME_ITEM ? d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        _ = (0, c.bG)([h.default], () => h.default.getCurrentUser()),
        [g, f] = a.useState(!1),
        m = (0, c.bG)([C.A], () => C.A.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        x = a.useMemo(
            () =>
                t.skuProductLine === O.EZt.PREMIUM
                    ? null != _ && n.id === _.id && (0, E.ki)(_, L.WN[t.skuId])
                    : !0 === t.isOwned || m,
            [t.isOwned, t.skuId, t.skuProductLine, m, _, n.id],
        );
    if (null == t.sku || null == _) return null;
    switch (t.sku.productLine) {
        case O.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(M, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: g,
                setIsHoveringOrFocusing: f,
                currentUser: _,
                isItemOwned: x,
                wishlistOwner: n,
                wishlistId: l,
                ...r,
            });
        case O.EZt.COLLECTIBLES:
            return (0, i.jsx)(U, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: g,
                setIsHoveringOrFocusing: f,
                currentUser: _,
                isItemOwned: x,
                wishlistOwner: n,
                wishlistId: l,
                ...r,
            });
        case O.EZt.PREMIUM:
            return (0, i.jsx)(F, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: g,
                setIsHoveringOrFocusing: f,
                currentUser: _,
                isItemOwned: x,
                wishlistOwner: n,
                wishlistId: l,
                ...r,
            });
        default:
            return null;
    }
}
