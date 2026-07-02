"use strict";
n.d(t, { A: () => X });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(492518),
    u = n(32731),
    c = n(287809),
    d = n(299679),
    _ = n(909536),
    h = n(561794),
    f = n(862772),
    p = n(835245),
    E = n(172218),
    m = n(575593),
    g = n(691540),
    A = n(857250),
    I = n(97483),
    T = n(765178),
    S = n(444927),
    y = n(793574),
    C = n(688810),
    N = n(274681),
    v = n(31969),
    R = n(183555),
    O = n(174459),
    b = n(661492),
    D = n(808247),
    L = n(95817),
    w = n(212387),
    M = n(74135),
    P = n(460442),
    x = n(699976),
    k = n(652215),
    U = n(518477),
    G = n(375708),
    F = n(316587),
    V = n(997990);
let B = x.Z.SIZE_90;
function j(e) {
    let {
            sku: t,
            wishlistOwner: n,
            style: s,
            skuPreviewStyle: o,
            setIsHoveringOrFocusing: l,
            onClick: u,
            "aria-label": c,
            wishlistId: _,
            children: h,
        } = e,
        { trackUserProfileWishlistAction: f } = (0, R.NJ)(),
        m = (0, d.Ar)(),
        g = (0, S.A)(() => (0, p.A)()),
        { handleVisibilityChange: A } = (0, L.G)(g),
        I = (0, E.K)(A, 0.5, m?.surface != null),
        T = r.useCallback(() => {
            f({
                wishlistId: _,
                action: U.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                m?.surface != null &&
                    O.default.track(k.HAw.WISHLIST_ITEM_CLICKED, {
                        sku_id: t.id,
                        wishlist_id: _,
                        wishlist_owner_id: m.wishlistOwnerId,
                        surface: m.surface,
                        position_in_section: m.positionInSection,
                        item_source: m.itemSource,
                        click_type: "add_to_wishlist",
                        product_line: t.productLine,
                        card_id: g,
                        impression_session_id: m.impressionSessionId,
                        location_stack: m.analyticsLocations,
                    }),
                u();
        }, [u, t.id, t.productLine, f, _, m, g]);
    return (0, i.jsx)("div", {
        ref: I,
        children: (0, i.jsx)(w.A, {
            sku: t,
            user: n,
            spec: B,
            cardStyle: a()(F.Nr, s),
            skuPreviewStyle: a()(F.ev, o),
            onHoverOrFocusChange: l,
            onClick: T,
            "aria-label": c,
            children: h,
        }),
    });
}
function H(e) {
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
        p = r.useCallback(async () => {
            if (!h) {
                f(!0);
                try {
                    await D.A.addSkuToWishlist(t.id, n), c?.(), o?.({ tabSection: U.RP.WISHLIST });
                } catch (e) {
                    (0, g.P0)((0, A.o)(G.intl.string(G.t.F8FvUy), I.Ck.FAILURE)),
                        T.O.announce(G.intl.string(G.t.F8FvUy));
                } finally {
                    f(!1);
                }
            }
        }, [t, n, h, o, c]),
        E = r.useMemo(() => a()({ [F.zW]: s || h }, l), [s, h, l]);
    return (0, i.jsxs)(j, {
        "aria-label": G.intl.formatToPlainString(G.t.xRjJBe, { productName: (0, b.TC)(t) }),
        sku: t,
        wishlistOwner: u,
        skuPreviewStyle: E,
        onClick: p,
        isHoveringOrFocusing: s,
        ..._,
        children: [(0, i.jsx)(P.oU, { isHoveringOrFocusing: s, loading: h }), !s && !h && d],
    });
}
function Y(e) {
    let { sku: t, analyticsLocations: n, ...r } = e,
        { analyticsLocations: s } = (0, C.Ay)(...(n ?? []), y.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        a = (0, v.F)("sku_purchase_badge", { applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(H, {
        sku: t,
        analyticsLocations: s,
        promotion: null != a ? (0, i.jsx)(M.s, { spec: B, icon: a.Icon, tooltipText: a.tooltip }) : null,
        ...r,
    });
}
function W(e) {
    let { sku: t, ...n } = e,
        s = r.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case m.R.PROFILE_EFFECT:
                case m.R.NAMEPLATE:
                case m.R.BUNDLE:
                case m.R.PROFILE_FRAME:
                    return;
                case m.R.AVATAR_DECORATION:
                    return F.ML;
                default:
                    return a()(F.ML, F.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(H, { sku: t, skuPreviewStyle: s, ...n });
}
function K(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(H, { sku: t, skuPreviewStyle: V.MO, onAddSuccess: N.w, ...n });
}
function $(e) {
    let { sku: t, ...n } = e,
        [s, a] = r.useState(!1);
    switch (t.productLine) {
        case k.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(Y, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: a, ...n });
        case k.EZt.COLLECTIBLES:
            return (0, i.jsx)(W, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: a, ...n });
        case k.EZt.PREMIUM:
            return (0, i.jsx)(K, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: a, ...n });
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
            analyticsLocations: s,
            numWishlistItemsToRecommend: h,
            maxWishlistItemsToShow: f = h,
            className: p,
            isLoading: E,
            recommendations: m,
        } = e,
        g = (0, o.bG)([c.default], () => c.default.getUser(t?.userId)),
        A = (0, _.Gh)("add_to_wishlist_grid_suggested_nitro"),
        I = r.useMemo(() => new Set(t?.items.map((e) => e.skuId) ?? []), [t]),
        T = A && !I.has(z.pe.TIER_2),
        S = r.useMemo(
            () =>
                T
                    ? new u.A({
                          id: z.pe.TIER_2,
                          productLine: k.EZt.PREMIUM,
                          name: G.intl.string(G.t.lG6a5x),
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
            [T],
        ),
        y = m
            .filter((e) => !I.has(e.id))
            .slice(0, null != S ? Math.max(0, f - 1) : f)
            .map((e) => ({ sku: e, itemSource: "recommendation" })),
        C = null != S ? [{ sku: S, itemSource: "takeover" }, ...y] : y;
    return E
        ? (0, i.jsx)("div", { className: q.g4, children: (0, i.jsx)(l.k, {}) })
        : 0 === C.length
          ? null
          : (0, i.jsx)("ul", {
                className: a()(q.Vg, p),
                children: C.map((e, r) => {
                    let { sku: a, itemSource: o } = e;
                    return (0, i.jsx)(
                        d.dB,
                        {
                            newValue: { positionInSection: r, skuId: a.id, itemSource: o, productLine: a.productLine },
                            children: (0, i.jsx)($, {
                                sku: a,
                                wishlistId: t?.id,
                                wishlistOwner: g,
                                handleOpenUserProfileModal: n,
                                analyticsLocations: s,
                            }),
                        },
                        a.id,
                    );
                }),
            });
}
function X(e) {
    let { userId: t, numWishlistItemsToRecommend: n, ...r } = e,
        { recommendations: s, status: a } = (0, f.Ul)({ userId: t, numItems: n, source: h.B5.USER_PROFILE });
    return (0, i.jsx)(Z, { isLoading: "loading" === a, recommendations: s, numWishlistItemsToRecommend: n, ...r });
}
