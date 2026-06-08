"use strict";
n.d(t, { A: () => j });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(492518),
    u = n(32731),
    c = n(287809),
    d = n(909536),
    _ = n(561794),
    h = n(862772),
    f = n(575593),
    p = n(691540),
    E = n(857250),
    m = n(97483),
    g = n(765178),
    A = n(793574),
    I = n(688810),
    T = n(274681),
    S = n(183555),
    y = n(661492),
    N = n(808247),
    v = n(212387),
    C = n(460442),
    R = n(699976),
    O = n(652215),
    b = n(518477),
    D = n(375708),
    L = n(316587),
    w = n(997990);
let M = R.Z.SIZE_90;
function P(e) {
    let {
            sku: t,
            wishlistOwner: n,
            style: s,
            skuPreviewStyle: o,
            setIsHoveringOrFocusing: l,
            onClick: u,
            "aria-label": c,
            wishlistId: d,
            children: _,
        } = e,
        { trackUserProfileWishlistAction: h } = (0, S.NJ)(),
        f = r.useCallback(() => {
            h({
                wishlistId: d,
                action: b.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                u();
        }, [u, t.id, t.productLine, h, d]);
    return (0, i.jsx)(v.A, {
        sku: t,
        user: n,
        spec: M,
        cardStyle: a()(L.Nr, s),
        skuPreviewStyle: a()(L.ev, o),
        onHoverOrFocusChange: l,
        onClick: f,
        "aria-label": c,
        children: _,
    });
}
function x(e) {
    let {
            sku: t,
            analyticsLocations: n,
            isHoveringOrFocusing: s,
            handleOpenUserProfileModal: o,
            skuPreviewStyle: l,
            wishlistOwner: u,
            onAddSuccess: c,
            ...d
        } = e,
        [_, h] = r.useState(!1),
        f = r.useCallback(async () => {
            if (!_) {
                h(!0);
                try {
                    await N.A.addSkuToWishlist(t.id, n), c?.(), o?.({ tabSection: b.RP.WISHLIST });
                } catch (e) {
                    (0, p.P0)((0, E.o)(D.intl.string(D.t.F8FvUy), m.Ck.FAILURE)),
                        g.O.announce(D.intl.string(D.t.F8FvUy));
                } finally {
                    h(!1);
                }
            }
        }, [t, n, _, o, c]),
        A = r.useMemo(() => a()({ [L.zW]: s || _ }, l), [s, _, l]);
    return (0, i.jsx)(P, {
        "aria-label": D.intl.formatToPlainString(D.t.xRjJBe, { productName: (0, y.TC)(t) }),
        sku: t,
        wishlistOwner: u,
        skuPreviewStyle: A,
        onClick: f,
        isHoveringOrFocusing: s,
        ...d,
        children: (0, i.jsx)(C.oU, { isHoveringOrFocusing: s, loading: _ }),
    });
}
function k(e) {
    let { sku: t, analyticsLocations: n, ...r } = e,
        { analyticsLocations: s } = (0, I.Ay)(...(n ?? []), A.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD);
    return (0, i.jsx)(x, { sku: t, analyticsLocations: s, ...r });
}
function U(e) {
    let { sku: t, ...n } = e,
        s = r.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case f.R.PROFILE_EFFECT:
                case f.R.NAMEPLATE:
                case f.R.BUNDLE:
                case f.R.PROFILE_FRAME:
                    return;
                case f.R.AVATAR_DECORATION:
                    return L.ML;
                default:
                    return a()(L.ML, L.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(x, { sku: t, skuPreviewStyle: s, ...n });
}
function G(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(x, { sku: t, skuPreviewStyle: w.MO, onAddSuccess: T.w, ...n });
}
function F(e) {
    let { sku: t, ...n } = e,
        [s, a] = r.useState(!1);
    switch (t.productLine) {
        case O.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(k, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: a, ...n });
        case O.EZt.COLLECTIBLES:
            return (0, i.jsx)(U, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: a, ...n });
        case O.EZt.PREMIUM:
            return (0, i.jsx)(G, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: a, ...n });
        default:
            return null;
    }
}
var V = n(788868),
    B = n(817990);
function H(e) {
    let {
            wishlist: t,
            handleOpenUserProfileModal: n,
            analyticsLocations: s,
            numWishlistItemsToRecommend: _,
            maxWishlistItemsToShow: h = _,
            className: f,
            isLoading: p,
            recommendations: E,
        } = e,
        m = (0, o.bG)([c.default], () => c.default.getUser(t?.userId)),
        g = (0, d.Gh)("add_to_wishlist_grid_suggested_nitro"),
        A = r.useMemo(() => new Set(t?.items.map((e) => e.skuId) ?? []), [t]),
        I = g && !A.has(V.pe.TIER_2),
        T = r.useMemo(
            () =>
                I
                    ? new u.A({
                          id: V.pe.TIER_2,
                          productLine: O.EZt.PREMIUM,
                          name: D.intl.string(D.t.lG6a5x),
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
            [I],
        ),
        S = E.filter((e) => !A.has(e.id)).slice(0, null != T ? Math.max(0, h - 1) : h),
        y = null != T ? [T, ...S] : S;
    return p
        ? (0, i.jsx)("div", { className: B.g4, children: (0, i.jsx)(l.k, {}) })
        : 0 === y.length
          ? null
          : (0, i.jsx)("ul", {
                className: a()(B.Vg, f),
                children: y.map((e) =>
                    (0, i.jsx)(
                        F,
                        {
                            sku: e,
                            wishlistId: t?.id,
                            wishlistOwner: m,
                            handleOpenUserProfileModal: n,
                            analyticsLocations: s,
                        },
                        e.id,
                    ),
                ),
            });
}
function j(e) {
    let { userId: t, numWishlistItemsToRecommend: n, ...r } = e,
        { recommendations: s, status: a } = (0, h.Ul)({ userId: t, numItems: n, source: _.B5.USER_PROFILE });
    return (0, i.jsx)(H, { isLoading: "loading" === a, recommendations: s, numWishlistItemsToRecommend: n, ...r });
}
