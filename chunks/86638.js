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
    A = n(661492),
    I = n(111085),
    j = n(146423),
    v = n(121700),
    T = n(460442),
    E = n(662349),
    b = n(479026),
    N = n(699976),
    S = n(652215),
    y = n(788868),
    C = n(518477),
    R = n(985018),
    k = n(894100);
let L = N.Z.SIZE_133;
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
            onPurchaseClick: p,
            wishlistId: _,
            isItemOwned: I,
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
    let { trackUserProfileWishlistAction: S } = (0, f.NJ)(),
        y = l.useCallback(() => {
            null != _ &&
                (S({
                    wishlistId: _,
                    action: C.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                x());
        }, [x, t.sku, _, S]),
        O = l.useCallback(() => {
            null != _ &&
                (S({
                    wishlistId: _,
                    action: C.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                p());
        }, [p, t.sku, _, S]),
        w = l.useCallback(() => {
            (0, h.XA)(C.jM.SOMETHING_WENT_WRONG), o.ORC.announce(R.intl.string(R.t.F8FvUy));
        }, []),
        P = null != c ? (0, i.jsx)("div", { ref: b, className: k.BU, children: c }) : null,
        {
            label: D,
            icon: G,
            isPromptingPurchase: M,
        } = (0, E.h)({ sku: t.sku, wishlistOwner: n, isOwned: I, location: "User Profile Wishlist Item Card" });
    return (0, i.jsxs)("div", {
        className: k.kL,
        children: [
            (0, i.jsxs)(j.A, {
                sku: t.sku,
                user: n,
                spec: L,
                cardStyle: r,
                skuPreviewStyle: s()(k.ev, { [k.go]: I && !g }, u),
                disableHoverOrFocus: d,
                onHoverOrFocusChange: m,
                onClick: y,
                "aria-label": R.intl.formatToPlainString(R.t.ZBB4Ty, { productName: (0, A.TC)(t.sku) }),
                children: [
                    (0, i.jsx)(E.A, { spec: L, onClick: M ? O : y, isHoveringOrFocusing: g, label: D, icon: G }),
                    I && (0, i.jsx)(T.gS, { isHoveringOrFocusing: g }),
                    n.id === a.id &&
                        null != _ &&
                        (0, i.jsx)(v.A, {
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
function w(e) {
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
                    giftingOrigin: y.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: r,
                });
        }, [d?.guildId, t.sku.id, t.sku.applicationId, a, r]),
        m = l.useCallback(() => {
            let e = a.id === s.id;
            (0, p.a)(
                t.sku,
                { isGift: !e, giftRecipient: a, giftingOrigin: y.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...r, c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, a, s.id, r]);
    return (0, i.jsx)(O, {
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
function P(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: a,
            analyticsLocations: o,
            currentUser: d,
            isHoveringOrFocusing: c,
            ...u
        } = e,
        g = (0, b.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: y.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o,
        }),
        x = l.useMemo(
            () => () => {
                let e = n.id === d.id;
                (0, m.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: y.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: o ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, d.id, o],
        ),
        p =
            c &&
            t.sku.productLine === S.EZt.COLLECTIBLES &&
            t.sku.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT &&
            t.sku.tenantMetadata?.collectibles?.type !== r.R.NAMEPLATE;
    return (0, i.jsx)(O, {
        item: t,
        wishlistOwner: n,
        isItemOwned: a,
        currentUser: d,
        onDetailsClick: g,
        onPurchaseClick: x,
        isHoveringOrFocusing: c,
        skuPreviewStyle: s()({ [k.mn]: p }),
        analyticsLocations: o,
        ...u,
    });
}
function D(e) {
    let { item: t, wishlistOwner: n, wishlistId: a, analyticsLocations: s, ...r } = e,
        { analyticsLocations: o } = (0, u.Ay)(
            ...(s ?? []),
            t.sku?.productLine === S.EZt.SOCIAL_LAYER_GAME_ITEM ? c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, d.bG)([_.default], () => _.default.getCurrentUser()),
        [m, x] = l.useState(!1),
        p = (0, d.bG)([I.A], () => I.A.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        f = l.useMemo(() => !0 === t.isOwned || p, [t.isOwned, p]);
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case S.EZt.SOCIAL_LAYER_GAME_ITEM:
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
        case S.EZt.COLLECTIBLES:
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
        default:
            return null;
    }
}
