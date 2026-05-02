n.d(t, { A: () => B });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    c = n(492518),
    o = n(32731),
    u = n(287809),
    d = n(909536),
    g = n(561794),
    m = n(862772),
    f = n(575593),
    x = n(691540),
    I = n(857250),
    p = n(97483),
    A = n(765178),
    h = n(793574),
    E = n(688810),
    j = n(274681),
    N = n(183555),
    v = n(661492),
    T = n(808247),
    S = n(212387),
    _ = n(460442),
    O = n(699976),
    C = n(652215),
    k = n(518477),
    R = n(375708),
    L = n(316587),
    b = n(997990);
let w = O.Z.SIZE_90;
function P(e) {
    let {
            sku: t,
            wishlistOwner: n,
            style: s,
            skuPreviewStyle: r,
            setIsHoveringOrFocusing: c,
            onClick: o,
            "aria-label": u,
            wishlistId: d,
            children: g,
        } = e,
        { trackUserProfileWishlistAction: m } = (0, N.NJ)(),
        f = l.useCallback(() => {
            m({
                wishlistId: d,
                action: k.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                o();
        }, [o, t.id, t.productLine, m, d]);
    return (0, i.jsx)(S.A, {
        sku: t,
        user: n,
        spec: w,
        cardStyle: a()(L.Nr, s),
        skuPreviewStyle: a()(L.ev, r),
        onHoverOrFocusChange: c,
        onClick: f,
        "aria-label": u,
        children: g,
    });
}
function D(e) {
    let {
            sku: t,
            analyticsLocations: n,
            isHoveringOrFocusing: s,
            handleOpenUserProfileModal: r,
            skuPreviewStyle: c,
            wishlistOwner: o,
            onAddSuccess: u,
            ...d
        } = e,
        [g, m] = l.useState(!1),
        f = l.useCallback(async () => {
            if (!g) {
                m(!0);
                try {
                    await T.A.addSkuToWishlist(t.id, n), u?.(), r?.({ tabSection: k.RP.WISHLIST });
                } catch (e) {
                    (0, x.P0)((0, I.o)(R.intl.string(R.t.F8FvUy), p.Ck.FAILURE)),
                        A.O.announce(R.intl.string(R.t.F8FvUy));
                } finally {
                    m(!1);
                }
            }
        }, [t, n, g, r, u]),
        h = l.useMemo(() => a()({ [L.zW]: s || g }, c), [s, g, c]);
    return (0, i.jsx)(P, {
        "aria-label": R.intl.formatToPlainString(R.t.xRjJBe, { productName: (0, v.TC)(t) }),
        sku: t,
        wishlistOwner: o,
        skuPreviewStyle: h,
        onClick: f,
        isHoveringOrFocusing: s,
        ...d,
        children: (0, i.jsx)(_.oU, { isHoveringOrFocusing: s, loading: g }),
    });
}
function y(e) {
    let { sku: t, analyticsLocations: n, ...l } = e,
        { analyticsLocations: s } = (0, E.Ay)(...(n ?? []), h.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD);
    return (0, i.jsx)(D, { sku: t, analyticsLocations: s, ...l });
}
function G(e) {
    let { sku: t, ...n } = e,
        s = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case f.R.PROFILE_EFFECT:
                case f.R.NAMEPLATE:
                    return;
                case f.R.AVATAR_DECORATION:
                    return L.ML;
                default:
                    return a()(L.ML, L.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(D, { sku: t, skuPreviewStyle: s, ...n });
}
function M(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(D, { sku: t, skuPreviewStyle: b.MO, onAddSuccess: j.w, ...n });
}
function F(e) {
    let { sku: t, ...n } = e,
        [s, a] = l.useState(!1);
    switch (t.productLine) {
        case C.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(y, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: a, ...n });
        case C.EZt.COLLECTIBLES:
            return (0, i.jsx)(G, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: a, ...n });
        case C.EZt.PREMIUM:
            return (0, i.jsx)(M, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: a, ...n });
        default:
            return null;
    }
}
var U = n(788868),
    W = n(817990);
function H(e) {
    let {
            wishlist: t,
            handleOpenUserProfileModal: n,
            analyticsLocations: s,
            numWishlistItemsToRecommend: g,
            maxWishlistItemsToShow: m = g,
            className: f,
            isLoading: x,
            recommendations: I,
        } = e,
        p = (0, r.bG)([u.default], () => u.default.getUser(t?.userId)),
        A = (0, d.Gh)("add_to_wishlist_grid_suggested_nitro"),
        h = l.useMemo(() => new Set(t?.items.map((e) => e.skuId) ?? []), [t]),
        E = A && !h.has(U.pe.TIER_2),
        j = l.useMemo(
            () =>
                E
                    ? new o.A({
                          id: U.pe.TIER_2,
                          productLine: C.EZt.PREMIUM,
                          name: R.intl.string(R.t.lG6a5x),
                          features: new Set(),
                          genres: new Set(),
                          manifests: [],
                          availableRegions: [],
                          locales: [],
                          bundledSkuIds: [],
                          selectedOptions: [],
                          eligibleOffers: [],
                          prices: {},
                      })
                    : null,
            [E],
        ),
        N = I.filter((e) => !h.has(e.id)).slice(0, null != j ? Math.max(0, m - 1) : m),
        v = null != j ? [j, ...N] : N;
    return x
        ? (0, i.jsx)("div", { className: W.g4, children: (0, i.jsx)(c.k, {}) })
        : 0 === v.length
          ? null
          : (0, i.jsx)("ul", {
                className: a()(W.Vg, f),
                children: v.map((e) =>
                    (0, i.jsx)(
                        F,
                        {
                            sku: e,
                            wishlistId: t?.id,
                            wishlistOwner: p,
                            handleOpenUserProfileModal: n,
                            analyticsLocations: s,
                        },
                        e.id,
                    ),
                ),
            });
}
function B(e) {
    let { userId: t, numWishlistItemsToRecommend: n, ...l } = e,
        { recommendations: s, status: a } = (0, m.Ul)({ userId: t, numItems: n, source: g.B5.USER_PROFILE });
    return (0, i.jsx)(H, { isLoading: "loading" === a, recommendations: s, numWishlistItemsToRecommend: n, ...l });
}
