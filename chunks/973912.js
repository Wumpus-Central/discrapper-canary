i.d(t, { A: () => B });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(17928),
    c = i(492518),
    o = i(32731),
    u = i(287809),
    d = i(909536),
    g = i(561794),
    m = i(862772),
    f = i(575593),
    x = i(691540),
    I = i(857250),
    p = i(97483),
    h = i(765178),
    A = i(793574),
    E = i(688810),
    j = i(274681),
    N = i(183555),
    v = i(661492),
    T = i(808247),
    S = i(212387),
    _ = i(460442),
    O = i(699976),
    C = i(652215),
    k = i(518477),
    R = i(375708),
    L = i(316587),
    b = i(997990);
let w = O.Z.SIZE_90;
function P(e) {
    let {
            sku: t,
            wishlistOwner: i,
            style: l,
            skuPreviewStyle: r,
            setIsHoveringOrFocusing: c,
            onClick: o,
            "aria-label": u,
            wishlistId: d,
            children: g,
        } = e,
        { trackUserProfileWishlistAction: m } = (0, N.NJ)(),
        f = s.useCallback(() => {
            m({
                wishlistId: d,
                action: k.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                o();
        }, [o, t.id, t.productLine, m, d]);
    return (0, n.jsx)(S.A, {
        sku: t,
        user: i,
        spec: w,
        cardStyle: a()(L.Nr, l),
        skuPreviewStyle: a()(L.ev, r),
        onHoverOrFocusChange: c,
        onClick: f,
        "aria-label": u,
        children: g,
    });
}
function y(e) {
    let {
            sku: t,
            analyticsLocations: i,
            isHoveringOrFocusing: l,
            handleOpenUserProfileModal: r,
            skuPreviewStyle: c,
            wishlistOwner: o,
            onAddSuccess: u,
            ...d
        } = e,
        [g, m] = s.useState(!1),
        f = s.useCallback(async () => {
            if (!g) {
                m(!0);
                try {
                    await T.A.addSkuToWishlist(t.id, i), u?.(), r?.({ tabSection: k.RP.WISHLIST });
                } catch (e) {
                    (0, x.P0)((0, I.o)(R.intl.string(R.t.F8FvUy), p.Ck.FAILURE)),
                        h.O.announce(R.intl.string(R.t.F8FvUy));
                } finally {
                    m(!1);
                }
            }
        }, [t, i, g, r, u]),
        A = s.useMemo(() => a()({ [L.zW]: l || g }, c), [l, g, c]);
    return (0, n.jsx)(P, {
        "aria-label": R.intl.formatToPlainString(R.t.xRjJBe, { productName: (0, v.TC)(t) }),
        sku: t,
        wishlistOwner: o,
        skuPreviewStyle: A,
        onClick: f,
        isHoveringOrFocusing: l,
        ...d,
        children: (0, n.jsx)(_.oU, { isHoveringOrFocusing: l, loading: g }),
    });
}
function D(e) {
    let { sku: t, analyticsLocations: i, ...s } = e,
        { analyticsLocations: l } = (0, E.Ay)(...(i ?? []), A.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD);
    return (0, n.jsx)(y, { sku: t, analyticsLocations: l, ...s });
}
function G(e) {
    let { sku: t, ...i } = e,
        l = s.useMemo(() => {
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
    return (0, n.jsx)(y, { sku: t, skuPreviewStyle: l, ...i });
}
function M(e) {
    let { sku: t, ...i } = e;
    return (0, n.jsx)(y, { sku: t, skuPreviewStyle: b.MO, onAddSuccess: j.w, ...i });
}
function F(e) {
    let { sku: t, ...i } = e,
        [l, a] = s.useState(!1);
    switch (t.productLine) {
        case C.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(D, { sku: t, isHoveringOrFocusing: l, setIsHoveringOrFocusing: a, ...i });
        case C.EZt.COLLECTIBLES:
            return (0, n.jsx)(G, { sku: t, isHoveringOrFocusing: l, setIsHoveringOrFocusing: a, ...i });
        case C.EZt.PREMIUM:
            return (0, n.jsx)(M, { sku: t, isHoveringOrFocusing: l, setIsHoveringOrFocusing: a, ...i });
        default:
            return null;
    }
}
var U = i(788868),
    W = i(817990);
function H(e) {
    let {
            wishlist: t,
            handleOpenUserProfileModal: i,
            analyticsLocations: l,
            numWishlistItemsToRecommend: g,
            maxWishlistItemsToShow: m = g,
            className: f,
            isLoading: x,
            recommendations: I,
        } = e,
        p = (0, r.bG)([u.default], () => u.default.getUser(t?.userId)),
        h = (0, d.Gh)("add_to_wishlist_grid_suggested_nitro"),
        A = s.useMemo(() => new Set(t?.items.map((e) => e.skuId) ?? []), [t]),
        E = h && !A.has(U.pe.TIER_2),
        j = s.useMemo(
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
        N = I.filter((e) => !A.has(e.id)).slice(0, null != j ? Math.max(0, m - 1) : m),
        v = null != j ? [j, ...N] : N;
    return x
        ? (0, n.jsx)("div", { className: W.g4, children: (0, n.jsx)(c.k, {}) })
        : 0 === v.length
          ? null
          : (0, n.jsx)("ul", {
                className: a()(W.Vg, f),
                children: v.map((e) =>
                    (0, n.jsx)(
                        F,
                        {
                            sku: e,
                            wishlistId: t?.id,
                            wishlistOwner: p,
                            handleOpenUserProfileModal: i,
                            analyticsLocations: l,
                        },
                        e.id,
                    ),
                ),
            });
}
function B(e) {
    let { userId: t, numWishlistItemsToRecommend: i, ...s } = e,
        { recommendations: l, status: a } = (0, m.Ul)({ userId: t, numItems: i, source: g.B5.USER_PROFILE });
    return (0, n.jsx)(H, { isLoading: "loading" === a, recommendations: l, numWishlistItemsToRecommend: i, ...s });
}
