n.d(t, { A: () => V });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    l = n(17928),
    o = n(492518),
    u = n(32731),
    c = n(287809),
    d = n(909536),
    _ = n(594832),
    E = n(862772),
    S = n(575593),
    p = n(691540),
    h = n(857250),
    A = n(97483),
    I = n(765178),
    m = n(793574),
    f = n(688810),
    T = n(274681),
    R = n(183555),
    g = n(661492),
    y = n(808247),
    v = n(212387),
    L = n(460442),
    N = n(699976),
    C = n(652215),
    U = n(518477),
    O = n(985018),
    x = n(316587),
    M = n(997990);
let k = N.Z.SIZE_90;
function F(e) {
    let {
            sku: t,
            wishlistOwner: n,
            style: a,
            skuPreviewStyle: l,
            setIsHoveringOrFocusing: o,
            onClick: u,
            "aria-label": c,
            wishlistId: d,
            children: _,
        } = e,
        { trackUserProfileWishlistAction: E } = (0, R.NJ)(),
        S = s.useCallback(() => {
            E({
                wishlistId: d,
                action: U.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                u();
        }, [u, t.id, t.productLine, E, d]);
    return (0, i.jsx)(v.A, {
        sku: t,
        user: n,
        spec: k,
        cardStyle: r()(x.Nr, a),
        skuPreviewStyle: r()(x.ev, l),
        onHoverOrFocusChange: o,
        onClick: S,
        "aria-label": c,
        children: _,
    });
}
function b(e) {
    let {
            sku: t,
            analyticsLocations: n,
            isHoveringOrFocusing: a,
            handleOpenUserProfileModal: l,
            skuPreviewStyle: o,
            wishlistOwner: u,
            onAddSuccess: c,
            ...d
        } = e,
        [_, E] = s.useState(!1),
        S = s.useCallback(async () => {
            if (!_) {
                E(!0);
                try {
                    await y.A.addSkuToWishlist(t.id, n), c?.(), l?.({ tabSection: U.RP.WISHLIST });
                } catch (e) {
                    (0, p.P0)((0, h.o)(O.intl.string(O.t.F8FvUy), A.Ck.FAILURE)),
                        I.O.announce(O.intl.string(O.t.F8FvUy));
                } finally {
                    E(!1);
                }
            }
        }, [t, n, _, l, c]),
        m = s.useMemo(() => r()({ [x.zW]: a || _ }, o), [a, _, o]);
    return (0, i.jsx)(F, {
        "aria-label": O.intl.formatToPlainString(O.t.xRjJBe, { productName: (0, g.TC)(t) }),
        sku: t,
        wishlistOwner: u,
        skuPreviewStyle: m,
        onClick: S,
        isHoveringOrFocusing: a,
        ...d,
        children: (0, i.jsx)(L.oU, { isHoveringOrFocusing: a, loading: _ }),
    });
}
function P(e) {
    let { sku: t, analyticsLocations: n, ...s } = e,
        { analyticsLocations: a } = (0, f.Ay)(...(n ?? []), m.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD);
    return (0, i.jsx)(b, { sku: t, analyticsLocations: a, ...s });
}
function w(e) {
    let { sku: t, ...n } = e,
        a = s.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case S.R.PROFILE_EFFECT:
                case S.R.NAMEPLATE:
                    return;
                case S.R.AVATAR_DECORATION:
                    return x.ML;
                default:
                    return r()(x.ML, x.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(b, { sku: t, skuPreviewStyle: a, ...n });
}
function D(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(b, { sku: t, skuPreviewStyle: M.MO, onAddSuccess: T.w, ...n });
}
function j(e) {
    let { sku: t, ...n } = e,
        [a, r] = s.useState(!1);
    switch (t.productLine) {
        case C.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(P, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: r, ...n });
        case C.EZt.COLLECTIBLES:
            return (0, i.jsx)(w, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: r, ...n });
        case C.EZt.PREMIUM:
            return (0, i.jsx)(D, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: r, ...n });
        default:
            return null;
    }
}
var G = n(788868),
    H = n(817990);
function B(e) {
    let {
            wishlist: t,
            handleOpenUserProfileModal: n,
            analyticsLocations: a,
            numWishlistItemsToRecommend: _,
            maxWishlistItemsToShow: E = _,
            className: S,
            isLoading: p,
            recommendations: h,
        } = e,
        A = (0, l.bG)([c.default], () => c.default.getUser(t?.userId)),
        I = (0, d.Gh)("add_to_wishlist_grid_suggested_nitro"),
        m = s.useMemo(() => new Set(t?.items.map((e) => e.skuId) ?? []), [t]),
        f = I && !m.has(G.pe.TIER_2),
        T = s.useMemo(
            () =>
                f
                    ? new u.A({
                          id: G.pe.TIER_2,
                          productLine: C.EZt.PREMIUM,
                          name: O.intl.string(O.t.lG6a5x),
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
            [f],
        ),
        R = h.filter((e) => !m.has(e.id)).slice(0, null != T ? Math.max(0, E - 1) : E),
        g = null != T ? [T, ...R] : R;
    return p
        ? (0, i.jsx)("div", { className: H.g4, children: (0, i.jsx)(o.k, {}) })
        : 0 === g.length
          ? null
          : (0, i.jsx)("ul", {
                className: r()(H.Vg, S),
                children: g.map((e) =>
                    (0, i.jsx)(
                        j,
                        {
                            sku: e,
                            wishlistId: t?.id,
                            wishlistOwner: A,
                            handleOpenUserProfileModal: n,
                            analyticsLocations: a,
                        },
                        e.id,
                    ),
                ),
            });
}
function V(e) {
    let { userId: t, numWishlistItemsToRecommend: n, ...s } = e,
        { recommendations: a, status: r } = (0, E.Ul)({ userId: t, numItems: n, source: _.B5.USER_PROFILE });
    return (0, i.jsx)(B, { isLoading: "loading" === r, recommendations: a, numWishlistItemsToRecommend: n, ...s });
}
