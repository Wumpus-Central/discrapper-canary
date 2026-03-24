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
    g = n(429913),
    m = n(44120),
    x = n(317560),
    p = n(533406),
    f = n(183555),
    h = n(606758),
    _ = n(287809),
    A = n(111085),
    I = n(146423),
    j = n(121700),
    v = n(460442),
    E = n(662349),
    T = n(479026),
    b = n(699976),
    N = n(652215),
    S = n(788868),
    y = n(518477),
    C = n(985018),
    R = n(894100);
let k = b.Z.SIZE_133;
function L(e) {
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
            wishlistId: _,
            isItemOwned: A,
        } = e,
        T = l.useRef(null),
        b = l.useRef(m);
    l.useEffect(() => {
        b.current = m;
    }, [m]),
        l.useEffect(() => {
            let e = T.current;
            if (null == e) return;
            let t = () => {
                b.current(!1);
            };
            return (
                e.addEventListener("focusin", t),
                () => {
                    e.removeEventListener("focusin", t);
                }
            );
        }, []);
    let { trackUserProfileWishlistAction: N } = (0, f.NJ)(),
        S = l.useCallback(() => {
            null != _ &&
                (N({
                    wishlistId: _,
                    action: y.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                x());
        }, [x, t.sku, _, N]),
        L = l.useCallback(() => {
            null != _ &&
                (N({
                    wishlistId: _,
                    action: y.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                p());
        }, [p, t.sku, _, N]),
        O = l.useCallback(() => {
            (0, h.XA)(y.jM.SOMETHING_WENT_WRONG), o.ORC.announce(C.intl.string(C.t.F8FvUy));
        }, []),
        w = null != c ? (0, i.jsx)("div", { ref: T, className: R.BU, children: c }) : null,
        {
            label: D,
            icon: P,
            isPromptingPurchase: G,
        } = (0, E.h)({ sku: t.sku, wishlistOwner: n, isOwned: A, location: "User Profile Wishlist Item Card" });
    return (0, i.jsxs)("div", {
        className: R.kL,
        children: [
            (0, i.jsxs)(I.A, {
                sku: t.sku,
                user: n,
                spec: k,
                cardStyle: r,
                skuPreviewStyle: s()(R.ev, { [R.go]: A && !g }, u),
                disableHoverOrFocus: d,
                onHoverOrFocusChange: m,
                onClick: S,
                children: [
                    (0, i.jsx)(E.A, { spec: k, onClick: G ? L : S, isHoveringOrFocusing: g, label: D, icon: P }),
                    A && (0, i.jsx)(v.gS, { isHoveringOrFocusing: g }),
                    n.id === a.id &&
                        null != _ &&
                        (0, i.jsx)(j.A, {
                            sku: t.sku,
                            isCardHovered: g,
                            spec: k,
                            onError: O,
                            location: "UserProfileWishlistItemCardBase",
                            skipExperiment: !0,
                        }),
                ],
            }),
            w,
        ],
    });
}
function O(e) {
    let { item: t, isItemOwned: n, wishlistOwner: a, currentUser: s, analyticsLocations: r, ...o } = e,
        d = (0, g.h)(t.sku?.applicationId),
        u = l.useCallback(() => {
            d?.guildId != null &&
                (0, x.R)({
                    skuId: t.sku.id,
                    applicationId: t.sku.applicationId,
                    guildId: d?.guildId,
                    isStorefront: !1,
                    giftRecipient: a,
                    giftingOrigin: S.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: r,
                });
        }, [d?.guildId, t.sku.id, t.sku.applicationId, a, r]),
        m = l.useCallback(() => {
            let e = a.id === s.id;
            (0, p.a)(
                t.sku,
                { isGift: !e, giftRecipient: a, giftingOrigin: S.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...r, c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, a, s.id, r]);
    return (0, i.jsx)(L, {
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
            analyticsLocations: o,
            currentUser: d,
            isHoveringOrFocusing: c,
            ...u
        } = e,
        g = (0, T.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: S.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o,
        }),
        x = l.useMemo(
            () => () => {
                let e = n.id === d.id;
                (0, m.A)({
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
    return (0, i.jsx)(L, {
        item: t,
        wishlistOwner: n,
        isItemOwned: a,
        currentUser: d,
        onDetailsClick: g,
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
        g = (0, d.bG)([_.default], () => _.default.getCurrentUser()),
        [m, x] = l.useState(!1),
        p = (0, d.bG)([A.A], () => A.A.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        f = l.useMemo(() => !0 === t.isOwned || p, [t.isOwned, p]);
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case N.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(O, {
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
