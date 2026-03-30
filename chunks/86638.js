n.d(t, { A: () => M });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(575593),
    o = n(158954),
    d = n(311907),
    c = n(793574),
    u = n(688810),
    g = n(44120),
    m = n(532794),
    x = n(87719),
    p = n(317560),
    f = n(533406),
    h = n(183555),
    _ = n(606758),
    A = n(287809),
    I = n(661492),
    j = n(111085),
    v = n(146423),
    T = n(121700),
    E = n(460442),
    b = n(662349),
    N = n(479026),
    S = n(699976),
    y = n(652215),
    C = n(788868),
    R = n(518477),
    k = n(985018),
    O = n(649197);
let L = S.Z.SIZE_133;
function w(e) {
    let {
            item: t,
            wishlistOwner: n,
            currentUser: a,
            style: r,
            isDragging: d,
            dragHandle: c,
            skuPreviewStyle: u,
            isHoveringOrFocusing: g,
            setIsHoveringOrFocusing: m,
            onDetailsClick: x,
            onPurchaseClick: p,
            wishlistId: f,
            isItemOwned: A,
        } = e,
        j = l.useRef(null),
        N = l.useRef(m);
    l.useEffect(() => {
        N.current = m;
    }, [m]),
        l.useEffect(() => {
            let e = j.current;
            if (null == e) return;
            let t = () => {
                N.current(!1);
            };
            return (
                e.addEventListener("focusin", t),
                () => {
                    e.removeEventListener("focusin", t);
                }
            );
        }, []);
    let { trackUserProfileWishlistAction: S } = (0, h.NJ)(),
        y = l.useCallback(() => {
            null != f &&
                (S({
                    wishlistId: f,
                    action: R.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                x());
        }, [x, t.sku, f, S]),
        C = l.useCallback(() => {
            null != f &&
                (S({
                    wishlistId: f,
                    action: R.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                p());
        }, [p, t.sku, f, S]),
        w = l.useCallback(() => {
            (0, _.XA)(R.jM.SOMETHING_WENT_WRONG), o.ORC.announce(k.intl.string(k.t.F8FvUy));
        }, []),
        P = null != c ? (0, i.jsx)("div", { ref: j, className: O.BU, children: c }) : null,
        {
            label: D,
            icon: G,
            isPromptingPurchase: M,
        } = (0, b.h)({ sku: t.sku, wishlistOwner: n, isOwned: A, location: "User Profile Wishlist Item Card" });
    return (0, i.jsxs)("div", {
        className: O.kL,
        children: [
            (0, i.jsxs)(v.A, {
                sku: t.sku,
                user: n,
                spec: L,
                cardStyle: r,
                skuPreviewStyle: s()(O.ev, { [O.go]: A && !g }, u),
                disableHoverOrFocus: d,
                onHoverOrFocusChange: m,
                onClick: y,
                "aria-label": k.intl.formatToPlainString(k.t.ZBB4Ty, { productName: (0, I.TC)(t.sku) }),
                children: [
                    (0, i.jsx)(b.A, { spec: L, onClick: M ? C : y, isHoveringOrFocusing: g, label: D, icon: G }),
                    A && (0, i.jsx)(E.gS, { isHoveringOrFocusing: g }),
                    n.id === a.id &&
                        null != f &&
                        (0, i.jsx)(T.A, {
                            sku: t.sku,
                            isCardHovered: g,
                            spec: L,
                            onError: w,
                            location: "UserProfileWishlistItemCardBase",
                            skipExperiment: !0,
                        }),
                ],
            }),
            P,
        ],
    });
}
function P(e) {
    let { item: t, isItemOwned: n, wishlistOwner: a, currentUser: s, analyticsLocations: r, ...o } = e,
        d = l.useCallback(() => {
            (0, p.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: a,
                giftingOrigin: C.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: r,
            });
        }, [t.sku.id, t.sku.applicationId, a, r]),
        u = l.useCallback(() => {
            let e = a.id === s.id;
            (0, f.a)(
                t.sku,
                { isGift: !e, giftRecipient: a, giftingOrigin: C.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...r, c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, a, s.id, r]);
    return (0, i.jsx)(w, {
        item: t,
        wishlistOwner: a,
        isItemOwned: n,
        onDetailsClick: d,
        onPurchaseClick: u,
        analyticsLocations: r,
        currentUser: s,
        ...o,
    });
}
function D(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: a,
            analyticsLocations: o,
            currentUser: d,
            isHoveringOrFocusing: c,
            ...u
        } = e,
        m = (0, N.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: C.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o,
        }),
        x = l.useMemo(
            () => () => {
                let e = n.id === d.id;
                (0, g.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: C.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: o ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, d.id, o],
        ),
        p =
            c &&
            t.sku.productLine === y.EZt.COLLECTIBLES &&
            t.sku.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT &&
            t.sku.tenantMetadata?.collectibles?.type !== r.R.NAMEPLATE;
    return (0, i.jsx)(w, {
        item: t,
        wishlistOwner: n,
        isItemOwned: a,
        currentUser: d,
        onDetailsClick: m,
        onPurchaseClick: x,
        isHoveringOrFocusing: c,
        skuPreviewStyle: s()({ [O.mn]: p }),
        analyticsLocations: o,
        ...u,
    });
}
function G(e) {
    let { item: t, isItemOwned: n, wishlistOwner: a, currentUser: s, analyticsLocations: r, ...o } = e,
        d = l.useCallback(() => {
            (0, x.x)();
        }, []),
        c = l.useCallback(() => {
            a.id === s.id
                ? (0, x.x)()
                : (0, m.A)({
                      isGift: !0,
                      giftRecipient: a,
                      giftingOrigin: C.vQ.USER_PROFILE_WISHLIST,
                      subscriptionTier: t.skuId,
                      analyticsLocations: r,
                  });
        }, [t, a, s.id, r]);
    return (0, i.jsx)(w, {
        item: t,
        wishlistOwner: a,
        isItemOwned: n,
        currentUser: s,
        onDetailsClick: d,
        onPurchaseClick: c,
        analyticsLocations: r,
        ...o,
    });
}
function M(e) {
    let { item: t, wishlistOwner: n, wishlistId: a, analyticsLocations: s, ...r } = e,
        { analyticsLocations: o } = (0, u.Ay)(
            ...(s ?? []),
            t.sku?.productLine === y.EZt.SOCIAL_LAYER_GAME_ITEM ? c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, d.bG)([A.default], () => A.default.getCurrentUser()),
        [m, x] = l.useState(!1),
        p = (0, d.bG)([j.A], () => j.A.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        f = l.useMemo(
            () => t.skuProductLine !== y.EZt.PREMIUM && (!0 === t.isOwned || p),
            [t.isOwned, t.skuProductLine, p],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case y.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(P, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: f,
                wishlistOwner: n,
                wishlistId: a,
                ...r,
            });
        case y.EZt.COLLECTIBLES:
            return (0, i.jsx)(D, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: f,
                wishlistOwner: n,
                wishlistId: a,
                ...r,
            });
        case y.EZt.PREMIUM:
            return (0, i.jsx)(G, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: f,
                wishlistOwner: n,
                wishlistId: a,
                ...r,
            });
        default:
            return null;
    }
}
