n.d(t, { A: () => B });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(575593),
    o = n(158954),
    d = n(311907),
    c = n(793574),
    u = n(688810),
    A = n(44120),
    h = n(532794),
    _ = n(87719),
    m = n(317560),
    g = n(533406),
    p = n(183555),
    E = n(657331),
    I = n(606758),
    f = n(287809),
    C = n(474090),
    T = n(661492),
    N = n(111085),
    S = n(146423),
    x = n(121700),
    v = n(460442),
    b = n(662349),
    y = n(479026),
    O = n(699976),
    L = n(652215),
    R = n(788868),
    P = n(518477),
    D = n(985018),
    j = n(575581),
    M = n(997990);
let w = O.Z.SIZE_133;
function U(e) {
    let {
            item: t,
            wishlistOwner: n,
            currentUser: a,
            style: s,
            isDragging: d,
            dragHandle: c,
            skuPreviewStyle: u,
            skuAssetClassName: A,
            isHoveringOrFocusing: h,
            setIsHoveringOrFocusing: _,
            onDetailsClick: m,
            onPurchaseClick: g,
            wishlistId: E,
            isItemOwned: f,
            cardBackdrop: C,
        } = e,
        N = l.useRef(null),
        y = l.useRef(_);
    l.useEffect(() => {
        y.current = _;
    }, [_]),
        l.useEffect(() => {
            let e = N.current;
            if (null == e) return;
            let t = () => {
                y.current(!1);
            };
            return (
                e.addEventListener("focusin", t),
                () => {
                    e.removeEventListener("focusin", t);
                }
            );
        }, []);
    let { trackUserProfileWishlistAction: O } = (0, p.NJ)(),
        L = l.useCallback(() => {
            null != E &&
                (O({
                    wishlistId: E,
                    action: P.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                m());
        }, [m, t.sku, E, O]),
        R = l.useCallback(() => {
            null != E &&
                (O({
                    wishlistId: E,
                    action: P.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                g());
        }, [g, t.sku, E, O]),
        M = l.useCallback(() => {
            (0, I.XA)(P.jM.SOMETHING_WENT_WRONG), o.ORC.announce(D.intl.string(D.t.F8FvUy));
        }, []),
        U = null != c ? (0, i.jsx)("div", { ref: N, className: j.BU, children: c }) : null,
        { label: G, icon: k, isPromptingPurchase: V } = (0, b.h)({ wishlistOwner: n, isOwned: f });
    return (0, i.jsxs)("div", {
        className: j.kL,
        children: [
            (0, i.jsxs)(S.A, {
                sku: t.sku,
                user: n,
                spec: w,
                cardStyle: r()(j.Nr, s),
                skuPreviewStyle: r()(j.ev, { [j.go]: f && !h }, u),
                skuAssetClassName: A,
                disableHoverOrFocus: d,
                onHoverOrFocusChange: _,
                onClick: L,
                "aria-label": D.intl.formatToPlainString(D.t.ZBB4Ty, { productName: (0, T.TC)(t.sku) }),
                children: [
                    C,
                    (0, i.jsx)(b.A, { spec: w, onClick: V ? R : L, isHoveringOrFocusing: h, label: G, icon: k }),
                    f && (0, i.jsx)(v.gS, { isHoveringOrFocusing: h }),
                    n.id === a.id &&
                        null != E &&
                        (0, i.jsx)(x.A, {
                            sku: t.sku,
                            isCardHovered: h,
                            spec: w,
                            onError: M,
                            location: "UserProfileWishlistItemCardBase",
                            skipExperiment: !0,
                        }),
                ],
            }),
            U,
        ],
    });
}
function G(e) {
    let { item: t, isItemOwned: n, wishlistOwner: a, currentUser: r, analyticsLocations: s, ...o } = e,
        d = l.useCallback(() => {
            (0, m.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: a,
                giftingOrigin: R.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: s,
            });
        }, [t.sku.id, t.sku.applicationId, a, s]),
        u = l.useCallback(() => {
            let e = a.id === r.id;
            (0, g.a)(
                t.sku,
                { isGift: !e, giftRecipient: a, giftingOrigin: R.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...s, c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, a, r.id, s]);
    return (0, i.jsx)(U, {
        item: t,
        wishlistOwner: a,
        isItemOwned: n,
        onDetailsClick: d,
        onPurchaseClick: u,
        analyticsLocations: s,
        currentUser: r,
        ...o,
    });
}
function k(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: a,
            analyticsLocations: o,
            currentUser: d,
            isHoveringOrFocusing: c,
            ...u
        } = e,
        h = (0, y.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: R.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o,
        }),
        _ = l.useMemo(
            () => () => {
                let e = n.id === d.id;
                (0, A.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: R.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: o ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, d.id, o],
        ),
        m =
            c &&
            t.sku.productLine === L.EZt.COLLECTIBLES &&
            t.sku.tenantMetadata?.collectibles?.type !== s.R.PROFILE_EFFECT &&
            t.sku.tenantMetadata?.collectibles?.type !== s.R.NAMEPLATE;
    return (0, i.jsx)(U, {
        item: t,
        wishlistOwner: n,
        isItemOwned: a,
        currentUser: d,
        onDetailsClick: h,
        onPurchaseClick: _,
        isHoveringOrFocusing: c,
        skuPreviewStyle: r()({ [j.mn]: m }),
        analyticsLocations: o,
        ...u,
    });
}
function V(e) {
    let {
            item: t,
            isItemOwned: n,
            wishlistOwner: a,
            currentUser: r,
            analyticsLocations: s,
            isHoveringOrFocusing: o,
            ...d
        } = e,
        c = l.useCallback(() => {
            n
                ? (0, _.x)(E.closeUserProfileModal)
                : (0, h.A)({
                      isGift: !0,
                      giftRecipient: a,
                      giftingOrigin: R.vQ.USER_PROFILE_WISHLIST,
                      subscriptionTier: t.skuId,
                      analyticsLocations: s,
                  });
        }, [n, t.skuId, a, s]);
    return (0, i.jsx)(U, {
        item: t,
        wishlistOwner: a,
        isItemOwned: n,
        currentUser: r,
        onDetailsClick: c,
        onPurchaseClick: c,
        isHoveringOrFocusing: o,
        skuPreviewStyle: M.MO,
        skuAssetClassName: o ? M.iR : void 0,
        analyticsLocations: s,
        ...d,
    });
}
function B(e) {
    let { item: t, wishlistOwner: n, wishlistId: a, analyticsLocations: r, ...s } = e,
        { analyticsLocations: o } = (0, u.Ay)(
            ...(r ?? []),
            t.sku?.productLine === L.EZt.SOCIAL_LAYER_GAME_ITEM ? c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        A = (0, d.bG)([f.default], () => f.default.getCurrentUser()),
        [h, _] = l.useState(!1),
        m = (0, d.bG)([N.A], () => N.A.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        g = l.useMemo(
            () =>
                t.skuProductLine === L.EZt.PREMIUM
                    ? null != A && n.id === A.id && (0, C.ki)(A, R.WN[t.skuId])
                    : !0 === t.isOwned || m,
            [t.isOwned, t.skuId, t.skuProductLine, m, A, n.id],
        );
    if (null == t.sku || null == A) return null;
    switch (t.sku.productLine) {
        case L.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(G, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: h,
                setIsHoveringOrFocusing: _,
                currentUser: A,
                isItemOwned: g,
                wishlistOwner: n,
                wishlistId: a,
                ...s,
            });
        case L.EZt.COLLECTIBLES:
            return (0, i.jsx)(k, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: h,
                setIsHoveringOrFocusing: _,
                currentUser: A,
                isItemOwned: g,
                wishlistOwner: n,
                wishlistId: a,
                ...s,
            });
        case L.EZt.PREMIUM:
            return (0, i.jsx)(V, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: h,
                setIsHoveringOrFocusing: _,
                currentUser: A,
                isItemOwned: g,
                wishlistOwner: n,
                wishlistId: a,
                ...s,
            });
        default:
            return null;
    }
}
