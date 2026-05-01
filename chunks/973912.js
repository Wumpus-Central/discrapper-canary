t.d(s, { A: () => B });
var n = t(627968),
    i = t(64700),
    a = t(503698),
    l = t.n(a),
    r = t(17928),
    c = t(492518),
    o = t(32731),
    u = t(287809),
    d = t(909536),
    g = t(594832),
    h = t(862772),
    m = t(575593),
    p = t(691540),
    v = t(857250),
    w = t(97483),
    I = t(765178),
    f = t(793574),
    E = t(688810),
    x = t(274681),
    y = t(183555),
    A = t(661492),
    k = t(808247),
    S = t(212387),
    L = t(460442),
    M = t(699976),
    j = t(652215),
    R = t(518477),
    O = t(985018),
    _ = t(316587),
    T = t(997990);
let C = M.Z.SIZE_90;
function F(e) {
    let {
            sku: s,
            wishlistOwner: t,
            style: a,
            skuPreviewStyle: r,
            setIsHoveringOrFocusing: c,
            onClick: o,
            "aria-label": u,
            wishlistId: d,
            children: g,
        } = e,
        { trackUserProfileWishlistAction: h } = (0, y.NJ)(),
        m = i.useCallback(() => {
            h({
                wishlistId: d,
                action: R.Mq.WISHLIST_ITEM_CLICKED,
                skuId: s.id,
                productLines: new Set([s.productLine]),
            }),
                o();
        }, [o, s.id, s.productLine, h, d]);
    return (0, n.jsx)(S.A, {
        sku: s,
        user: t,
        spec: C,
        cardStyle: l()(_.Nr, a),
        skuPreviewStyle: l()(_.ev, r),
        onHoverOrFocusChange: c,
        onClick: m,
        "aria-label": u,
        children: g,
    });
}
function N(e) {
    let {
            sku: s,
            analyticsLocations: t,
            isHoveringOrFocusing: a,
            handleOpenUserProfileModal: r,
            skuPreviewStyle: c,
            wishlistOwner: o,
            onAddSuccess: u,
            ...d
        } = e,
        [g, h] = i.useState(!1),
        m = i.useCallback(async () => {
            if (!g) {
                h(!0);
                try {
                    await k.A.addSkuToWishlist(s.id, t), u?.(), r?.({ tabSection: R.RP.WISHLIST });
                } catch (e) {
                    (0, p.P0)((0, v.o)(O.intl.string(O.t.F8FvUy), w.Ck.FAILURE)),
                        I.O.announce(O.intl.string(O.t.F8FvUy));
                } finally {
                    h(!1);
                }
            }
        }, [s, t, g, r, u]),
        f = i.useMemo(() => l()({ [_.zW]: a || g }, c), [a, g, c]);
    return (0, n.jsx)(F, {
        "aria-label": O.intl.formatToPlainString(O.t.xRjJBe, { productName: (0, A.TC)(s) }),
        sku: s,
        wishlistOwner: o,
        skuPreviewStyle: f,
        onClick: m,
        isHoveringOrFocusing: a,
        ...d,
        children: (0, n.jsx)(L.oU, { isHoveringOrFocusing: a, loading: g }),
    });
}
function b(e) {
    let { sku: s, analyticsLocations: t, ...i } = e,
        { analyticsLocations: a } = (0, E.Ay)(...(t ?? []), f.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD);
    return (0, n.jsx)(N, { sku: s, analyticsLocations: a, ...i });
}
function H(e) {
    let { sku: s, ...t } = e,
        a = i.useMemo(() => {
            switch (s?.tenantMetadata?.collectibles?.type) {
                case m.R.PROFILE_EFFECT:
                case m.R.NAMEPLATE:
                    return;
                case m.R.AVATAR_DECORATION:
                    return _.ML;
                default:
                    return l()(_.ML, _.ZY);
            }
        }, [s?.tenantMetadata?.collectibles?.type]);
    return (0, n.jsx)(N, { sku: s, skuPreviewStyle: a, ...t });
}
function P(e) {
    let { sku: s, ...t } = e;
    return (0, n.jsx)(N, { sku: s, skuPreviewStyle: T.MO, onAddSuccess: x.w, ...t });
}
function U(e) {
    let { sku: s, ...t } = e,
        [a, l] = i.useState(!1);
    switch (s.productLine) {
        case j.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(b, { sku: s, isHoveringOrFocusing: a, setIsHoveringOrFocusing: l, ...t });
        case j.EZt.COLLECTIBLES:
            return (0, n.jsx)(H, { sku: s, isHoveringOrFocusing: a, setIsHoveringOrFocusing: l, ...t });
        case j.EZt.PREMIUM:
            return (0, n.jsx)(P, { sku: s, isHoveringOrFocusing: a, setIsHoveringOrFocusing: l, ...t });
        default:
            return null;
    }
}
var Z = t(788868),
    V = t(817990);
function W(e) {
    let {
            wishlist: s,
            handleOpenUserProfileModal: t,
            analyticsLocations: a,
            numWishlistItemsToRecommend: g,
            maxWishlistItemsToShow: h = g,
            className: m,
            isLoading: p,
            recommendations: v,
        } = e,
        w = (0, r.bG)([u.default], () => u.default.getUser(s?.userId)),
        I = (0, d.Gh)("add_to_wishlist_grid_suggested_nitro"),
        f = i.useMemo(() => new Set(s?.items.map((e) => e.skuId) ?? []), [s]),
        E = I && !f.has(Z.pe.TIER_2),
        x = i.useMemo(
            () =>
                E
                    ? new o.A({
                          id: Z.pe.TIER_2,
                          productLine: j.EZt.PREMIUM,
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
            [E],
        ),
        y = v.filter((e) => !f.has(e.id)).slice(0, null != x ? Math.max(0, h - 1) : h),
        A = null != x ? [x, ...y] : y;
    return p
        ? (0, n.jsx)("div", { className: V.g4, children: (0, n.jsx)(c.k, {}) })
        : 0 === A.length
          ? null
          : (0, n.jsx)("ul", {
                className: l()(V.Vg, m),
                children: A.map((e) =>
                    (0, n.jsx)(
                        U,
                        {
                            sku: e,
                            wishlistId: s?.id,
                            wishlistOwner: w,
                            handleOpenUserProfileModal: t,
                            analyticsLocations: a,
                        },
                        e.id,
                    ),
                ),
            });
}
function B(e) {
    let { userId: s, numWishlistItemsToRecommend: t, ...i } = e,
        { recommendations: a, status: l } = (0, h.Ul)({ userId: s, numItems: t, source: g.B5.USER_PROFILE });
    return (0, n.jsx)(W, { isLoading: "loading" === l, recommendations: a, numWishlistItemsToRecommend: t, ...i });
}
