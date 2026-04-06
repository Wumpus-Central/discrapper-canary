n.d(t, { A: () => W });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(575593),
    o = n(158954),
    c = n(311907),
    d = n(793574),
    u = n(688810),
    g = n(44120),
    m = n(532794),
    x = n(87719),
    p = n(317560),
    f = n(533406),
    h = n(183555),
    _ = n(657331),
    A = n(606758),
    I = n(287809),
    j = n(474090),
    v = n(661492),
    E = n(111085),
    T = n(146423),
    b = n(121700),
    C = n(460442),
    S = n(662349),
    N = n(479026),
    y = n(699976),
    R = n(652215),
    k = n(788868),
    w = n(518477),
    O = n(985018),
    L = n(649197),
    P = n(913110);
let D = y.Z.SIZE_133;
function G(e) {
    let {
            item: t,
            wishlistOwner: n,
            currentUser: a,
            style: r,
            isDragging: c,
            dragHandle: d,
            skuPreviewStyle: u,
            skuAssetClassName: g,
            isHoveringOrFocusing: m,
            setIsHoveringOrFocusing: x,
            onDetailsClick: p,
            onPurchaseClick: f,
            wishlistId: _,
            isItemOwned: I,
            cardBackdrop: j,
        } = e,
        E = l.useRef(null),
        N = l.useRef(x);
    l.useEffect(() => {
        N.current = x;
    }, [x]),
        l.useEffect(() => {
            let e = E.current;
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
    let { trackUserProfileWishlistAction: y } = (0, h.NJ)(),
        R = l.useCallback(() => {
            null != _ &&
                (y({
                    wishlistId: _,
                    action: w.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                p());
        }, [p, t.sku, _, y]),
        k = l.useCallback(() => {
            null != _ &&
                (y({
                    wishlistId: _,
                    action: w.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                f());
        }, [f, t.sku, _, y]),
        P = l.useCallback(() => {
            (0, A.XA)(w.jM.SOMETHING_WENT_WRONG), o.ORC.announce(O.intl.string(O.t.F8FvUy));
        }, []),
        G = null != d ? (0, i.jsx)("div", { ref: E, className: L.BU, children: d }) : null,
        {
            label: M,
            icon: U,
            isPromptingPurchase: F,
        } = (0, S.h)({ sku: t.sku, wishlistOwner: n, isOwned: I, location: "User Profile Wishlist Item Card" });
    return (0, i.jsxs)("div", {
        className: L.kL,
        children: [
            (0, i.jsxs)(T.A, {
                sku: t.sku,
                user: n,
                spec: D,
                cardStyle: r,
                skuPreviewStyle: s()(L.ev, { [L.go]: I && !m }, u),
                skuAssetClassName: g,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: x,
                onClick: R,
                "aria-label": O.intl.formatToPlainString(O.t.ZBB4Ty, { productName: (0, v.TC)(t.sku) }),
                children: [
                    j,
                    (0, i.jsx)(S.A, { spec: D, onClick: F ? k : R, isHoveringOrFocusing: m, label: M, icon: U }),
                    I && (0, i.jsx)(C.gS, { isHoveringOrFocusing: m }),
                    n.id === a.id &&
                        null != _ &&
                        (0, i.jsx)(b.A, {
                            sku: t.sku,
                            isCardHovered: m,
                            spec: D,
                            onError: P,
                            location: "UserProfileWishlistItemCardBase",
                            skipExperiment: !0,
                        }),
                ],
            }),
            G,
        ],
    });
}
function M(e) {
    let { item: t, isItemOwned: n, wishlistOwner: a, currentUser: s, analyticsLocations: r, ...o } = e,
        c = l.useCallback(() => {
            (0, p.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: a,
                giftingOrigin: k.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: r,
            });
        }, [t.sku.id, t.sku.applicationId, a, r]),
        u = l.useCallback(() => {
            let e = a.id === s.id;
            (0, f.a)(
                t.sku,
                { isGift: !e, giftRecipient: a, giftingOrigin: k.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...r, d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, a, s.id, r]);
    return (0, i.jsx)(G, {
        item: t,
        wishlistOwner: a,
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
            isItemOwned: a,
            analyticsLocations: o,
            currentUser: c,
            isHoveringOrFocusing: d,
            ...u
        } = e,
        m = (0, N.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: k.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o,
        }),
        x = l.useMemo(
            () => () => {
                let e = n.id === c.id;
                (0, g.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: k.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: o ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, c.id, o],
        ),
        p =
            d &&
            t.sku.productLine === R.EZt.COLLECTIBLES &&
            t.sku.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT &&
            t.sku.tenantMetadata?.collectibles?.type !== r.R.NAMEPLATE;
    return (0, i.jsx)(G, {
        item: t,
        wishlistOwner: n,
        isItemOwned: a,
        currentUser: c,
        onDetailsClick: m,
        onPurchaseClick: x,
        isHoveringOrFocusing: d,
        skuPreviewStyle: s()({ [L.mn]: p }),
        analyticsLocations: o,
        ...u,
    });
}
function F(e) {
    let {
            item: t,
            isItemOwned: n,
            wishlistOwner: a,
            currentUser: s,
            analyticsLocations: r,
            isHoveringOrFocusing: o,
            ...c
        } = e,
        d = a.id === s.id,
        u = l.useCallback(() => {
            (0, x.x)(_.closeUserProfileModal);
        }, []),
        g = l.useCallback(() => {
            (0, m.A)({
                isGift: !d,
                giftRecipient: d ? void 0 : a,
                giftingOrigin: k.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: t.skuId,
                analyticsLocations: r,
            });
        }, [d, t.skuId, a, r]);
    return (0, i.jsx)(G, {
        item: t,
        wishlistOwner: a,
        isItemOwned: n,
        currentUser: s,
        onDetailsClick: u,
        onPurchaseClick: g,
        isHoveringOrFocusing: o,
        skuPreviewStyle: P.MO,
        skuAssetClassName: o ? P.iR : void 0,
        analyticsLocations: r,
        ...c,
    });
}
function W(e) {
    let { item: t, wishlistOwner: n, wishlistId: a, analyticsLocations: s, ...r } = e,
        { analyticsLocations: o } = (0, u.Ay)(
            ...(s ?? []),
            t.sku?.productLine === R.EZt.SOCIAL_LAYER_GAME_ITEM ? d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, c.bG)([I.default], () => I.default.getCurrentUser()),
        [m, x] = l.useState(!1),
        p = (0, c.bG)([E.A], () => E.A.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        f = l.useMemo(
            () =>
                t.skuProductLine === R.EZt.PREMIUM
                    ? null != g && n.id === g.id && (0, j.ki)(g, k.WN[t.skuId])
                    : !0 === t.isOwned || p,
            [t.isOwned, t.skuId, t.skuProductLine, p, g, n.id],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case R.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(M, {
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
        case R.EZt.COLLECTIBLES:
            return (0, i.jsx)(U, {
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
        case R.EZt.PREMIUM:
            return (0, i.jsx)(F, {
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
