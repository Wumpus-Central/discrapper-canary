t.d(s, { A: () => Q });
var i = t(627968),
    l = t(64700),
    n = t(503698),
    a = t.n(n),
    o = t(17928),
    r = t(492518),
    d = t(32731),
    u = t(287809),
    c = t(299679),
    m = t(909536),
    p = t(561794),
    g = t(862772),
    f = t(835245),
    h = t(172218),
    S = t(575593),
    w = t(691540),
    I = t(857250),
    M = t(97483),
    _ = t(765178),
    E = t(444927),
    A = t(793574),
    L = t(688810),
    k = t(274681),
    v = t(31969),
    y = t(183555),
    C = t(174459),
    x = t(661492),
    b = t(808247),
    U = t(95817),
    D = t(212387),
    j = t(74135),
    R = t(460442),
    T = t(699976),
    O = t(652215),
    G = t(518477),
    F = t(375708),
    N = t(316587),
    P = t(997990);
let H = T.Z.SIZE_90;
function B(e) {
    let {
            sku: s,
            wishlistOwner: t,
            style: n,
            skuPreviewStyle: o,
            setIsHoveringOrFocusing: r,
            onClick: d,
            "aria-label": u,
            wishlistId: m,
            children: p,
        } = e,
        { trackUserProfileWishlistAction: g } = (0, y.NJ)(),
        S = (0, c.Ar)(),
        w = (0, E.A)(() => (0, f.A)()),
        { handleVisibilityChange: I } = (0, U.G)(w),
        M = (0, h.K)(I, 0.5, S?.surface != null),
        _ = l.useCallback(() => {
            g({
                wishlistId: m,
                action: G.Mq.WISHLIST_ITEM_CLICKED,
                skuId: s.id,
                productLines: new Set([s.productLine]),
            }),
                S?.surface != null &&
                    C.default.track(O.HAw.WISHLIST_ITEM_CLICKED, {
                        sku_id: s.id,
                        wishlist_id: m,
                        wishlist_owner_id: S.wishlistOwnerId,
                        surface: S.surface,
                        position_in_section: S.positionInSection,
                        item_source: S.itemSource,
                        click_type: "add_to_wishlist",
                        product_line: s.productLine,
                        card_id: w,
                        impression_session_id: S.impressionSessionId,
                        location_stack: S.analyticsLocations,
                    }),
                d();
        }, [d, s.id, s.productLine, g, m, S, w]);
    return (0, i.jsx)("div", {
        ref: M,
        children: (0, i.jsx)(D.A, {
            sku: s,
            user: t,
            spec: H,
            cardStyle: a()(N.Nr, n),
            skuPreviewStyle: a()(N.ev, o),
            onHoverOrFocusChange: r,
            onClick: _,
            "aria-label": u,
            children: p,
        }),
    });
}
function Z(e) {
    let {
            sku: s,
            analyticsLocations: t,
            isHoveringOrFocusing: n,
            handleOpenUserProfileModal: o,
            skuPreviewStyle: r,
            wishlistOwner: d,
            onAddSuccess: u,
            promotion: c,
            ...m
        } = e,
        [p, g] = l.useState(!1),
        f = l.useCallback(async () => {
            if (!p) {
                g(!0);
                try {
                    await b.A.addSkuToWishlist(s.id, t), u?.(), o?.({ tabSection: G.RP.WISHLIST });
                } catch (e) {
                    (0, w.P0)((0, I.o)(F.intl.string(F.t.F8FvUy), M.Ck.FAILURE)),
                        _.O.announce(F.intl.string(F.t.F8FvUy));
                } finally {
                    g(!1);
                }
            }
        }, [s, t, p, o, u]),
        h = l.useMemo(() => a()({ [N.zW]: n || p }, r), [n, p, r]);
    return (0, i.jsxs)(B, {
        "aria-label": F.intl.formatToPlainString(F.t.xRjJBe, { productName: (0, x.TC)(s) }),
        sku: s,
        wishlistOwner: d,
        skuPreviewStyle: h,
        onClick: f,
        isHoveringOrFocusing: n,
        ...m,
        children: [(0, i.jsx)(R.oU, { isHoveringOrFocusing: n, loading: p }), !n && !p && c],
    });
}
function W(e) {
    let { sku: s, analyticsLocations: t, ...l } = e,
        { analyticsLocations: n } = (0, L.Ay)(...(t ?? []), A.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        a = (0, v.F)("sku_purchase_badge", { applicationId: s.applicationId, skuId: s.id });
    return (0, i.jsx)(Z, {
        sku: s,
        analyticsLocations: n,
        promotion: null != a ? (0, i.jsx)(j.s, { spec: H, icon: a.Icon, tooltipText: a.tooltip }) : null,
        ...l,
    });
}
function V(e) {
    let { sku: s, ...t } = e,
        n = l.useMemo(() => {
            switch (s?.tenantMetadata?.collectibles?.type) {
                case S.R.PROFILE_EFFECT:
                case S.R.NAMEPLATE:
                case S.R.BUNDLE:
                case S.R.PROFILE_FRAME:
                    return;
                case S.R.AVATAR_DECORATION:
                    return N.ML;
                default:
                    return a()(N.ML, N.ZY);
            }
        }, [s?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(Z, { sku: s, skuPreviewStyle: n, ...t });
}
function Y(e) {
    let { sku: s, ...t } = e;
    return (0, i.jsx)(Z, { sku: s, skuPreviewStyle: P.MO, onAddSuccess: k.w, ...t });
}
function K(e) {
    let { sku: s, ...t } = e,
        [n, a] = l.useState(!1);
    switch (s.productLine) {
        case O.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(W, { sku: s, isHoveringOrFocusing: n, setIsHoveringOrFocusing: a, ...t });
        case O.EZt.COLLECTIBLES:
            return (0, i.jsx)(V, { sku: s, isHoveringOrFocusing: n, setIsHoveringOrFocusing: a, ...t });
        case O.EZt.PREMIUM:
            return (0, i.jsx)(Y, { sku: s, isHoveringOrFocusing: n, setIsHoveringOrFocusing: a, ...t });
        default:
            return null;
    }
}
var J = t(202541),
    q = t(817990);
function z(e) {
    let {
            wishlist: s,
            handleOpenUserProfileModal: t,
            analyticsLocations: n,
            numWishlistItemsToRecommend: p,
            maxWishlistItemsToShow: g = p,
            className: f,
            isLoading: h,
            recommendations: S,
        } = e,
        w = (0, o.bG)([u.default], () => u.default.getUser(s?.userId)),
        I = (0, m.Gh)("add_to_wishlist_grid_suggested_nitro"),
        M = l.useMemo(() => new Set(s?.items.map((e) => e.skuId) ?? []), [s]),
        _ = I && !M.has(J.pe.TIER_2),
        E = l.useMemo(
            () =>
                _
                    ? new d.A({
                          id: J.pe.TIER_2,
                          productLine: O.EZt.PREMIUM,
                          name: F.intl.string(F.t.lG6a5x),
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
            [_],
        ),
        A = S.filter((e) => !M.has(e.id))
            .slice(0, null != E ? Math.max(0, g - 1) : g)
            .map((e) => ({ sku: e, itemSource: "recommendation" })),
        L = null != E ? [{ sku: E, itemSource: "takeover" }, ...A] : A;
    return h
        ? (0, i.jsx)("div", { className: q.g4, children: (0, i.jsx)(r.k, {}) })
        : 0 === L.length
          ? null
          : (0, i.jsx)("ul", {
                className: a()(q.Vg, f),
                children: L.map((e, l) => {
                    let { sku: a, itemSource: o } = e;
                    return (0, i.jsx)(
                        c.dB,
                        {
                            newValue: { positionInSection: l, skuId: a.id, itemSource: o, productLine: a.productLine },
                            children: (0, i.jsx)(K, {
                                sku: a,
                                wishlistId: s?.id,
                                wishlistOwner: w,
                                handleOpenUserProfileModal: t,
                                analyticsLocations: n,
                            }),
                        },
                        a.id,
                    );
                }),
            });
}
function Q(e) {
    let { userId: s, numWishlistItemsToRecommend: t, ...l } = e,
        { recommendations: n, status: a } = (0, g.Ul)({ userId: s, numItems: t, source: p.B5.USER_PROFILE });
    return (0, i.jsx)(z, { isLoading: "loading" === a, recommendations: n, numWishlistItemsToRecommend: t, ...l });
}
