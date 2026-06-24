"use strict";
n.d(t, { A: () => W });
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
    S = n(31969),
    y = n(183555),
    C = n(661492),
    N = n(808247),
    v = n(212387),
    R = n(74135),
    O = n(460442),
    b = n(699976),
    D = n(652215),
    L = n(518477),
    w = n(375708),
    M = n(316587),
    P = n(997990);
let x = b.Z.SIZE_90;
function k(e) {
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
        { trackUserProfileWishlistAction: h } = (0, y.NJ)(),
        f = r.useCallback(() => {
            h({
                wishlistId: d,
                action: L.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                u();
        }, [u, t.id, t.productLine, h, d]);
    return (0, i.jsx)(v.A, {
        sku: t,
        user: n,
        spec: x,
        cardStyle: a()(M.Nr, s),
        skuPreviewStyle: a()(M.ev, o),
        onHoverOrFocusChange: l,
        onClick: f,
        "aria-label": c,
        children: _,
    });
}
function U(e) {
    let {
            sku: t,
            analyticsLocations: n,
            isHoveringOrFocusing: s,
            handleOpenUserProfileModal: o,
            skuPreviewStyle: l,
            wishlistOwner: u,
            onAddSuccess: c,
            promotion: d,
            ..._
        } = e,
        [h, f] = r.useState(!1),
        A = r.useCallback(async () => {
            if (!h) {
                f(!0);
                try {
                    await N.A.addSkuToWishlist(t.id, n), c?.(), o?.({ tabSection: L.RP.WISHLIST });
                } catch (e) {
                    (0, p.P0)((0, E.o)(w.intl.string(w.t.F8FvUy), m.Ck.FAILURE)),
                        g.O.announce(w.intl.string(w.t.F8FvUy));
                } finally {
                    f(!1);
                }
            }
        }, [t, n, h, o, c]),
        I = r.useMemo(() => a()({ [M.zW]: s || h }, l), [s, h, l]);
    return (0, i.jsxs)(k, {
        "aria-label": w.intl.formatToPlainString(w.t.xRjJBe, { productName: (0, C.TC)(t) }),
        sku: t,
        wishlistOwner: u,
        skuPreviewStyle: I,
        onClick: A,
        isHoveringOrFocusing: s,
        ..._,
        children: [(0, i.jsx)(O.oU, { isHoveringOrFocusing: s, loading: h }), !s && !h && d],
    });
}
function G(e) {
    let { sku: t, analyticsLocations: n, ...r } = e,
        { analyticsLocations: s } = (0, I.Ay)(...(n ?? []), A.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        a = (0, S.F)("sku_purchase_badge", { applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(U, {
        sku: t,
        analyticsLocations: s,
        promotion: null != a ? (0, i.jsx)(R.s, { spec: x, icon: a.Icon, tooltipText: a.tooltip }) : null,
        ...r,
    });
}
function F(e) {
    let { sku: t, ...n } = e,
        s = r.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case f.R.PROFILE_EFFECT:
                case f.R.NAMEPLATE:
                case f.R.BUNDLE:
                case f.R.PROFILE_FRAME:
                    return;
                case f.R.AVATAR_DECORATION:
                    return M.ML;
                default:
                    return a()(M.ML, M.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(U, { sku: t, skuPreviewStyle: s, ...n });
}
function V(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(U, { sku: t, skuPreviewStyle: P.MO, onAddSuccess: T.w, ...n });
}
function B(e) {
    let { sku: t, ...n } = e,
        [s, a] = r.useState(!1);
    switch (t.productLine) {
        case D.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(G, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: a, ...n });
        case D.EZt.COLLECTIBLES:
            return (0, i.jsx)(F, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: a, ...n });
        case D.EZt.PREMIUM:
            return (0, i.jsx)(V, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: a, ...n });
        default:
            return null;
    }
}
var j = n(788868),
    H = n(817990);
function Y(e) {
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
        I = g && !A.has(j.pe.TIER_2),
        T = r.useMemo(
            () =>
                I
                    ? new u.A({
                          id: j.pe.TIER_2,
                          productLine: D.EZt.PREMIUM,
                          name: w.intl.string(w.t.lG6a5x),
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
        ? (0, i.jsx)("div", { className: H.g4, children: (0, i.jsx)(l.k, {}) })
        : 0 === y.length
          ? null
          : (0, i.jsx)("ul", {
                className: a()(H.Vg, f),
                children: y.map((e) =>
                    (0, i.jsx)(
                        B,
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
function W(e) {
    let { userId: t, numWishlistItemsToRecommend: n, ...r } = e,
        { recommendations: s, status: a } = (0, h.Ul)({ userId: t, numItems: n, source: _.B5.USER_PROFILE });
    return (0, i.jsx)(Y, { isLoading: "loading" === a, recommendations: s, numWishlistItemsToRecommend: n, ...r });
}
