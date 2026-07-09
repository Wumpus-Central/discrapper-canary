"use strict";
n.d(t, { A: () => X });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(492518),
    d = n(32731),
    c = n(287809),
    u = n(299679),
    _ = n(909536),
    E = n(561794),
    A = n(862772),
    h = n(132500),
    I = n(172218),
    f = n(575593),
    p = n(691540),
    T = n(857250),
    m = n(97483),
    g = n(765178),
    S = n(444927),
    N = n(793574),
    C = n(688810),
    R = n(274681),
    O = n(31969),
    L = n(183555),
    D = n(174459),
    y = n(661492),
    v = n(808247),
    b = n(95817),
    M = n(212387),
    P = n(74135),
    U = n(460442),
    w = n(699976),
    G = n(652215),
    x = n(518477),
    k = n(375708),
    F = n(316587),
    V = n(997990);
let B = w.Z.SIZE_90;
function H(e) {
    let {
            sku: t,
            wishlistOwner: n,
            style: a,
            skuPreviewStyle: l,
            setIsHoveringOrFocusing: o,
            onClick: d,
            "aria-label": c,
            wishlistId: _,
            children: E,
        } = e,
        { trackUserProfileWishlistAction: A } = (0, L.NJ)(),
        f = (0, u.Ar)(),
        p = (0, S.A)(() => (0, h.A)()),
        { handleVisibilityChange: T } = (0, b.G)(p),
        m = (0, I.K)(T, 0.5, f?.surface != null),
        g = r.useCallback(() => {
            A({
                wishlistId: _,
                action: x.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                f?.surface != null &&
                    D.default.track(G.HAw.WISHLIST_ITEM_CLICKED, {
                        sku_id: t.id,
                        wishlist_id: _,
                        wishlist_owner_id: f.wishlistOwnerId,
                        surface: f.surface,
                        position_in_section: f.positionInSection,
                        item_source: f.itemSource,
                        click_type: "add_to_wishlist",
                        product_line: t.productLine,
                        card_id: p,
                        impression_session_id: f.impressionSessionId,
                        location_stack: f.analyticsLocations,
                    }),
                d();
        }, [d, t.id, t.productLine, A, _, f, p]);
    return (0, i.jsx)("div", {
        ref: m,
        children: (0, i.jsx)(M.A, {
            sku: t,
            user: n,
            spec: B,
            cardStyle: s()(F.Nr, a),
            skuPreviewStyle: s()(F.ev, l),
            onHoverOrFocusChange: o,
            onClick: g,
            "aria-label": c,
            children: E,
        }),
    });
}
function j(e) {
    let {
            sku: t,
            analyticsLocations: n,
            isHoveringOrFocusing: a,
            handleOpenUserProfileModal: l,
            skuPreviewStyle: o,
            wishlistOwner: d,
            onAddSuccess: c,
            promotion: u,
            ..._
        } = e,
        [E, A] = r.useState(!1),
        h = r.useCallback(async () => {
            if (!E) {
                A(!0);
                try {
                    await v.A.addSkuToWishlist(t.id, n), c?.(), l?.({ tabSection: x.RP.WISHLIST });
                } catch (e) {
                    (0, p.P0)((0, T.o)(k.intl.string(k.t.F8FvUy), m.Ck.FAILURE)),
                        g.O.announce(k.intl.string(k.t.F8FvUy));
                } finally {
                    A(!1);
                }
            }
        }, [t, n, E, l, c]),
        I = r.useMemo(() => s()({ [F.zW]: a || E }, o), [a, E, o]);
    return (0, i.jsxs)(H, {
        "aria-label": k.intl.formatToPlainString(k.t.xRjJBe, { productName: (0, y.TC)(t) }),
        sku: t,
        wishlistOwner: d,
        skuPreviewStyle: I,
        onClick: h,
        isHoveringOrFocusing: a,
        ..._,
        children: [(0, i.jsx)(U.oU, { isHoveringOrFocusing: a, loading: E }), !a && !E && u],
    });
}
function W(e) {
    let { sku: t, analyticsLocations: n, ...r } = e,
        { analyticsLocations: a } = (0, C.Ay)(...(n ?? []), N.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        s = (0, O.F)("sku_purchase_badge", { applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(j, {
        sku: t,
        analyticsLocations: a,
        promotion: null != s ? (0, i.jsx)(P.s, { spec: B, icon: s.Icon, tooltipText: s.tooltip }) : null,
        ...r,
    });
}
function Y(e) {
    let { sku: t, ...n } = e,
        a = r.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case f.R.PROFILE_EFFECT:
                case f.R.NAMEPLATE:
                case f.R.BUNDLE:
                case f.R.PROFILE_FRAME:
                    return;
                case f.R.AVATAR_DECORATION:
                    return F.ML;
                default:
                    return s()(F.ML, F.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(j, { sku: t, skuPreviewStyle: a, ...n });
}
function K(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(j, { sku: t, skuPreviewStyle: V.MO, onAddSuccess: R.w, ...n });
}
function $(e) {
    let { sku: t, ...n } = e,
        [a, s] = r.useState(!1);
    switch (t.productLine) {
        case G.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(W, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: s, ...n });
        case G.EZt.COLLECTIBLES:
            return (0, i.jsx)(Y, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: s, ...n });
        case G.EZt.PREMIUM:
            return (0, i.jsx)(K, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: s, ...n });
        default:
            return null;
    }
}
var z = n(202541),
    q = n(817990);
function Z(e) {
    let {
            wishlist: t,
            handleOpenUserProfileModal: n,
            analyticsLocations: a,
            numWishlistItemsToRecommend: E,
            maxWishlistItemsToShow: A = E,
            className: h,
            isLoading: I,
            recommendations: f,
        } = e,
        p = (0, l.bG)([c.default], () => c.default.getUser(t?.userId)),
        T = (0, _.Gh)("add_to_wishlist_grid_suggested_nitro"),
        m = r.useMemo(() => new Set(t?.items.map((e) => e.skuId) ?? []), [t]),
        g = T && !m.has(z.pe.TIER_2),
        S = r.useMemo(
            () =>
                g
                    ? new d.A({
                          id: z.pe.TIER_2,
                          productLine: G.EZt.PREMIUM,
                          name: k.intl.string(k.t.lG6a5x),
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
            [g],
        ),
        N = f
            .filter((e) => !m.has(e.id))
            .slice(0, null != S ? Math.max(0, A - 1) : A)
            .map((e) => ({ sku: e, itemSource: "recommendation" })),
        C = null != S ? [{ sku: S, itemSource: "takeover" }, ...N] : N;
    return I
        ? (0, i.jsx)("div", { className: q.g4, children: (0, i.jsx)(o.k, {}) })
        : 0 === C.length
          ? null
          : (0, i.jsx)("ul", {
                className: s()(q.Vg, h),
                children: C.map((e, r) => {
                    let { sku: s, itemSource: l } = e;
                    return (0, i.jsx)(
                        u.dB,
                        {
                            newValue: { positionInSection: r, skuId: s.id, itemSource: l, productLine: s.productLine },
                            children: (0, i.jsx)($, {
                                sku: s,
                                wishlistId: t?.id,
                                wishlistOwner: p,
                                handleOpenUserProfileModal: n,
                                analyticsLocations: a,
                            }),
                        },
                        s.id,
                    );
                }),
            });
}
function X(e) {
    let { userId: t, numWishlistItemsToRecommend: n, ...r } = e,
        { recommendations: a, status: s } = (0, A.Ul)({ userId: t, numItems: n, source: E.B5.USER_PROFILE });
    return (0, i.jsx)(Z, { isLoading: "loading" === s, recommendations: a, numWishlistItemsToRecommend: n, ...r });
}
