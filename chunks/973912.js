t.d(s, { A: () => Q });
var i = t(627968),
    l = t(64700),
    n = t(503698),
    a = t.n(n),
    o = t(17928),
    r = t(492518),
    u = t(287809),
    d = t(299679),
    c = t(840411),
    m = t(909536),
    p = t(561794),
    f = t(862772),
    g = t(132500),
    h = t(172218),
    I = t(575593),
    S = t(691540),
    w = t(857250),
    M = t(97483),
    _ = t(765178),
    k = t(444927),
    E = t(793574),
    A = t(688810),
    L = t(274681),
    v = t(31969),
    y = t(183555),
    x = t(174459),
    C = t(661492),
    b = t(808247),
    D = t(95817),
    U = t(212387),
    j = t(74135),
    R = t(460442),
    T = t(699976),
    O = t(652215),
    G = t(518477),
    F = t(375708),
    P = t(316587),
    N = t(997990);
let H = T.Z.SIZE_90;
function B(e) {
    let {
            sku: s,
            wishlistOwner: t,
            style: n,
            skuPreviewStyle: o,
            setIsHoveringOrFocusing: r,
            onClick: u,
            "aria-label": c,
            wishlistId: m,
            children: p,
        } = e,
        { trackUserProfileWishlistAction: f } = (0, y.NJ)(),
        I = (0, d.Ar)(),
        S = (0, k.A)(() => (0, g.A)()),
        { handleVisibilityChange: w } = (0, D.G)(S),
        M = (0, h.K)(w, 0.5, I?.surface != null),
        _ = l.useCallback(() => {
            f({
                wishlistId: m,
                action: G.Mq.WISHLIST_ITEM_CLICKED,
                skuId: s.id,
                productLines: new Set([s.productLine]),
            }),
                I?.surface != null &&
                    x.default.track(O.HAw.WISHLIST_ITEM_CLICKED, {
                        sku_id: s.id,
                        wishlist_id: m,
                        wishlist_owner_id: I.wishlistOwnerId,
                        surface: I.surface,
                        position_in_section: I.positionInSection,
                        item_source: I.itemSource,
                        click_type: "add_to_wishlist",
                        product_line: s.productLine,
                        card_id: S,
                        impression_session_id: I.impressionSessionId,
                        location_stack: I.analyticsLocations,
                    }),
                u();
        }, [u, s.id, s.productLine, f, m, I, S]);
    return (0, i.jsx)("div", {
        ref: M,
        children: (0, i.jsx)(U.A, {
            sku: s,
            user: t,
            spec: H,
            cardStyle: a()(P.Nr, n),
            skuPreviewStyle: a()(P.ev, o),
            onHoverOrFocusChange: r,
            onClick: _,
            "aria-label": c,
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
            wishlistOwner: u,
            onAddSuccess: d,
            promotion: c,
            ...m
        } = e,
        [p, f] = l.useState(!1),
        g = l.useCallback(async () => {
            if (!p) {
                f(!0);
                try {
                    await b.A.addSkuToWishlist(s.id, t), d?.(), o?.({ tabSection: G.RP.WISHLIST });
                } catch (e) {
                    (0, S.P0)((0, w.o)(F.intl.string(F.t.F8FvUy), M.Ck.FAILURE)),
                        _.O.announce(F.intl.string(F.t.F8FvUy));
                } finally {
                    f(!1);
                }
            }
        }, [s, t, p, o, d]),
        h = l.useMemo(() => a()({ [P.zW]: n || p }, r), [n, p, r]);
    return (0, i.jsxs)(B, {
        "aria-label": F.intl.formatToPlainString(F.t.xRjJBe, { productName: (0, C.TC)(s) }),
        sku: s,
        wishlistOwner: u,
        skuPreviewStyle: h,
        onClick: g,
        isHoveringOrFocusing: n,
        ...m,
        children: [(0, i.jsx)(R.oU, { isHoveringOrFocusing: n, loading: p }), !n && !p && c],
    });
}
function W(e) {
    let { sku: s, analyticsLocations: t, ...l } = e,
        { analyticsLocations: n } = (0, A.Ay)(...(t ?? []), E.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
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
                case I.R.PROFILE_EFFECT:
                case I.R.NAMEPLATE:
                case I.R.BUNDLE:
                case I.R.PROFILE_FRAME:
                    return;
                case I.R.AVATAR_DECORATION:
                    return P.ML;
                default:
                    return a()(P.ML, P.ZY);
            }
        }, [s?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(Z, { sku: s, skuPreviewStyle: n, ...t });
}
function Y(e) {
    let { sku: s, ...t } = e;
    return (0, i.jsx)(Z, { sku: s, skuPreviewStyle: N.MO, onAddSuccess: L.w, ...t });
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
            maxWishlistItemsToShow: f = p,
            className: g,
            isLoading: h,
            recommendations: I,
        } = e,
        S = (0, o.bG)([u.default], () => u.default.getUser(s?.userId)),
        w = (0, m.Gh)("add_to_wishlist_grid_suggested_nitro"),
        M = l.useMemo(() => new Set(s?.items.map((e) => e.skuId) ?? []), [s]),
        _ = w && !M.has(J.pe.TIER_2),
        k = l.useMemo(() => (_ ? (0, c.rI)() : null), [_]),
        E = I.filter((e) => !M.has(e.id))
            .slice(0, null != k ? Math.max(0, f - 1) : f)
            .map((e) => ({ sku: e, itemSource: "recommendation" })),
        A = null != k ? [{ sku: k, itemSource: "takeover" }, ...E] : E;
    return h
        ? (0, i.jsx)("div", { className: q.g4, children: (0, i.jsx)(r.k, {}) })
        : 0 === A.length
          ? null
          : (0, i.jsx)("ul", {
                className: a()(q.Vg, g),
                children: A.map((e, l) => {
                    let { sku: a, itemSource: o } = e;
                    return (0, i.jsx)(
                        d.dB,
                        {
                            newValue: { positionInSection: l, skuId: a.id, itemSource: o, productLine: a.productLine },
                            children: (0, i.jsx)(K, {
                                sku: a,
                                wishlistId: s?.id,
                                wishlistOwner: S,
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
        { recommendations: n, status: a } = (0, f.Ul)({ userId: s, numItems: t, source: p.B5.USER_PROFILE });
    return (0, i.jsx)(z, { isLoading: "loading" === a, recommendations: n, numWishlistItemsToRecommend: t, ...l });
}
