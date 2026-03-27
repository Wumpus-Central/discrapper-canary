n.d(t, { A: () => D });
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
    m = n(317560),
    x = n(533406),
    p = n(183555),
    f = n(606758),
    h = n(287809),
    _ = n(661492),
    A = n(111085),
    I = n(146423),
    j = n(121700),
    v = n(460442),
    T = n(662349),
    E = n(479026),
    b = n(699976),
    N = n(652215),
    S = n(788868),
    y = n(518477),
    C = n(985018),
    R = n(649197);
let k = b.Z.SIZE_133;
function O(e) {
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
            onPurchaseClick: h,
            wishlistId: A,
            isItemOwned: E,
        } = e,
        b = l.useRef(null),
        N = l.useRef(m);
    l.useEffect(() => {
        N.current = m;
    }, [m]),
        l.useEffect(() => {
            let e = b.current;
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
    let { trackUserProfileWishlistAction: S } = (0, p.NJ)(),
        O = l.useCallback(() => {
            null != A &&
                (S({
                    wishlistId: A,
                    action: y.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                x());
        }, [x, t.sku, A, S]),
        L = l.useCallback(() => {
            null != A &&
                (S({
                    wishlistId: A,
                    action: y.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                h());
        }, [h, t.sku, A, S]),
        w = l.useCallback(() => {
            (0, f.XA)(y.jM.SOMETHING_WENT_WRONG), o.ORC.announce(C.intl.string(C.t.F8FvUy));
        }, []),
        D = null != c ? (0, i.jsx)("div", { ref: b, className: R.BU, children: c }) : null,
        {
            label: P,
            icon: G,
            isPromptingPurchase: M,
        } = (0, T.h)({ sku: t.sku, wishlistOwner: n, isOwned: E, location: "User Profile Wishlist Item Card" });
    return (0, i.jsxs)("div", {
        className: R.kL,
        children: [
            (0, i.jsxs)(I.A, {
                sku: t.sku,
                user: n,
                spec: k,
                cardStyle: r,
                skuPreviewStyle: s()(R.ev, { [R.go]: E && !g }, u),
                disableHoverOrFocus: d,
                onHoverOrFocusChange: m,
                onClick: O,
                "aria-label": C.intl.formatToPlainString(C.t.ZBB4Ty, { productName: (0, _.TC)(t.sku) }),
                children: [
                    (0, i.jsx)(T.A, { spec: k, onClick: M ? L : O, isHoveringOrFocusing: g, label: P, icon: G }),
                    E && (0, i.jsx)(v.gS, { isHoveringOrFocusing: g }),
                    n.id === a.id &&
                        null != A &&
                        (0, i.jsx)(j.A, {
                            sku: t.sku,
                            isCardHovered: g,
                            spec: k,
                            onError: w,
                            location: "UserProfileWishlistItemCardBase",
                            skipExperiment: !0,
                        }),
                ],
            }),
            D,
        ],
    });
}
function L(e) {
    let { item: t, isItemOwned: n, wishlistOwner: a, currentUser: s, analyticsLocations: r, ...o } = e,
        d = l.useCallback(() => {
            (0, m.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: a,
                giftingOrigin: S.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: r,
            });
        }, [t.sku.id, t.sku.applicationId, a, r]),
        u = l.useCallback(() => {
            let e = a.id === s.id;
            (0, x.a)(
                t.sku,
                { isGift: !e, giftRecipient: a, giftingOrigin: S.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...r, c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, a, s.id, r]);
    return (0, i.jsx)(O, {
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
function w(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: a,
            analyticsLocations: o,
            currentUser: d,
            isHoveringOrFocusing: c,
            ...u
        } = e,
        m = (0, E.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: S.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o,
        }),
        x = l.useMemo(
            () => () => {
                let e = n.id === d.id;
                (0, g.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: S.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: o ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, d.id, o],
        ),
        p =
            c &&
            t.sku.productLine === N.EZt.COLLECTIBLES &&
            t.sku.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT &&
            t.sku.tenantMetadata?.collectibles?.type !== r.R.NAMEPLATE;
    return (0, i.jsx)(O, {
        item: t,
        wishlistOwner: n,
        isItemOwned: a,
        currentUser: d,
        onDetailsClick: m,
        onPurchaseClick: x,
        isHoveringOrFocusing: c,
        skuPreviewStyle: s()({ [R.mn]: p }),
        analyticsLocations: o,
        ...u,
    });
}
function D(e) {
    let { item: t, wishlistOwner: n, wishlistId: a, analyticsLocations: s, ...r } = e,
        { analyticsLocations: o } = (0, u.Ay)(
            ...(s ?? []),
            t.sku?.productLine === N.EZt.SOCIAL_LAYER_GAME_ITEM ? c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, d.bG)([h.default], () => h.default.getCurrentUser()),
        [m, x] = l.useState(!1),
        p = (0, d.bG)([A.A], () => A.A.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        f = l.useMemo(() => !0 === t.isOwned || p, [t.isOwned, p]);
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case N.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(L, {
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
        case N.EZt.COLLECTIBLES:
            return (0, i.jsx)(w, {
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
