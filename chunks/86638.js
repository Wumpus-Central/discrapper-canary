n.d(t, { A: () => L });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(575593),
    o = n(635358),
    c = n(311907),
    d = n(793574),
    u = n(688810),
    g = n(429913),
    m = n(44120),
    x = n(317560),
    f = n(533406),
    p = n(183555),
    h = n(287809),
    _ = n(111085),
    A = n(146423),
    I = n(121547),
    j = n(460442),
    v = n(662349),
    E = n(479026),
    T = n(699976),
    b = n(652215),
    N = n(788868),
    S = n(518477),
    y = n(894100);
let C = T.Z.SIZE_133;
function R(e) {
    let {
            item: t,
            wishlistOwner: n,
            currentUser: a,
            style: r,
            isDragging: o,
            dragHandle: c,
            skuPreviewStyle: d,
            isHoveringOrFocusing: u,
            setIsHoveringOrFocusing: g,
            onDetailsClick: m,
            onPurchaseClick: x,
            wishlistId: f,
            analyticsLocations: h,
            isItemOwned: _,
        } = e,
        E = l.useRef(null),
        T = l.useRef(g),
        [b, N] = l.useState(!1);
    l.useEffect(() => {
        T.current = g;
    }, [g]),
        l.useEffect(() => {
            let e = E.current;
            if (null == e) return;
            let t = () => {
                T.current(!1);
            };
            return (
                e.addEventListener("focusin", t),
                () => {
                    e.removeEventListener("focusin", t);
                }
            );
        }, []);
    let { trackUserProfileWishlistAction: R } = (0, p.NJ)(),
        k = l.useCallback(() => {
            null != f &&
                (R({
                    wishlistId: f,
                    action: S.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                m());
        }, [m, t.sku, f, R]),
        w = l.useCallback(() => {
            null != f &&
                (R({
                    wishlistId: f,
                    action: S.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                x());
        }, [x, t.sku, f, R]),
        L = null != c ? (0, i.jsx)("div", { ref: E, className: y.BU, children: c }) : null,
        {
            label: O,
            icon: P,
            isPromptingPurchase: D,
        } = (0, v.hB)({
            sku: t.sku,
            wishlistOwner: n,
            currentUser: a,
            isOwned: _,
            location: "User Profile Wishlist Item Card",
        });
    return (0, i.jsxs)("div", {
        className: y.kL,
        children: [
            (0, i.jsx)("div", {
                className: b ? y.B8 : void 0,
                children: (0, i.jsxs)(A.A, {
                    sku: t.sku,
                    user: n,
                    spec: C,
                    cardStyle: r,
                    skuPreviewStyle: s()(y.ev, { [y.go]: _ && !u }, d),
                    disableHoverOrFocus: o,
                    onHoverOrFocusChange: g,
                    onClick: k,
                    children: [
                        (0, i.jsx)(v.AJ, { spec: C, onClick: D ? w : k, isHoveringOrFocusing: u, label: O, icon: P }),
                        _ && (0, i.jsx)(j.gS, { isHoveringOrFocusing: u }),
                    ],
                }),
            }),
            L,
            n.id === a.id &&
                null != f &&
                (0, i.jsx)(I.A, {
                    wishlistId: f,
                    sku: t.sku,
                    spec: C,
                    analyticsLocations: h,
                    isHoveringOrFocusing: u,
                    onHoverOrFocusChange: N,
                }),
        ],
    });
}
function k(e) {
    let { item: t, isItemOwned: n, wishlistOwner: a, currentUser: s, analyticsLocations: r, ...o } = e,
        c = (0, g.h)(t.sku?.applicationId),
        u = l.useCallback(() => {
            c?.guildId != null &&
                (0, x.R)({
                    skuId: t.sku.id,
                    applicationId: t.sku.applicationId,
                    guildId: c?.guildId,
                    isStorefront: !1,
                    analyticsLocations: r,
                });
        }, [t.sku.id, t.sku.applicationId, c?.guildId, r]),
        m = l.useCallback(() => {
            let e = a.id === s.id;
            (0, f.a)(
                t.sku,
                { isGift: !e, giftRecipient: a, giftingOrigin: N.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...r, d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, a, s.id, r]);
    return (0, i.jsx)(R, {
        item: t,
        wishlistOwner: a,
        isItemOwned: n,
        onDetailsClick: u,
        onPurchaseClick: m,
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
            analyticsLocations: s,
            currentUser: c,
            isHoveringOrFocusing: d,
            ...u
        } = e,
        g = l.useMemo(() => {
            if (
                t.sku.productLine === b.EZt.COLLECTIBLES &&
                t.sku.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT
            )
                return y.mn;
        }, [t.sku]),
        x = (0, E.e)({ sku: t.sku, analyticsLocations: s }),
        f = l.useMemo(
            () => () => {
                let e = n.id === c.id;
                (0, m.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: N.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: s ?? [],
                    giftRecipient: n,
                    variantsReturnStyle: o.g.VARIANTS_GROUP,
                });
            },
            [t.sku, n, c.id, s],
        );
    return (0, i.jsx)(R, {
        item: t,
        wishlistOwner: n,
        isItemOwned: a,
        currentUser: c,
        onDetailsClick: x,
        onPurchaseClick: f,
        isHoveringOrFocusing: d,
        skuPreviewStyle: d ? g : void 0,
        analyticsLocations: s,
        ...u,
    });
}
function L(e) {
    let { item: t, wishlistOwner: n, wishlistId: a, analyticsLocations: s, ...r } = e,
        { analyticsLocations: o } = (0, u.Ay)(
            ...(s ?? []),
            t.sku?.productLine === b.EZt.SOCIAL_LAYER_GAME_ITEM ? d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, c.bG)([h.default], () => h.default.getCurrentUser()),
        [m, x] = l.useState(!1),
        f = (0, c.bG)([_.A], () => _.A.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        p = l.useMemo(() => !0 === t.isOwned || f, [t.isOwned, f]);
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case b.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(k, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: p,
                wishlistOwner: n,
                wishlistId: a,
                ...r,
            });
        case b.EZt.COLLECTIBLES:
            return (0, i.jsx)(w, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: p,
                wishlistOwner: n,
                wishlistId: a,
                ...r,
            });
        default:
            return null;
    }
}
