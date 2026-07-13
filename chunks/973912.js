n.d(t, { A: () => Q });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    o = n(492518),
    d = n(287809),
    c = n(299679),
    u = n(840411),
    h = n(909536),
    m = n(561794),
    p = n(631784),
    g = n(132500),
    f = n(172218),
    A = n(575593),
    x = n(691540),
    v = n(857250),
    E = n(97483),
    C = n(765178),
    I = n(444927),
    _ = n(793574),
    T = n(688810),
    j = n(274681),
    S = n(31969),
    N = n(183555),
    y = n(174459),
    b = n(661492),
    M = n(808247),
    R = n(95817),
    k = n(212387),
    w = n(74135),
    O = n(460442),
    L = n(699976),
    P = n(652215),
    U = n(518477),
    D = n(375708),
    G = n(316587),
    F = n(997990);
let H = L.Z.SIZE_90;
function V(e) {
    let {
            sku: t,
            wishlistOwner: n,
            style: s,
            skuPreviewStyle: r,
            setIsHoveringOrFocusing: o,
            onClick: d,
            "aria-label": u,
            wishlistId: h,
            children: m,
        } = e,
        { trackUserProfileWishlistAction: p } = (0, N.NJ)(),
        A = (0, c.Ar)(),
        x = (0, I.A)(() => (0, g.A)()),
        { handleVisibilityChange: v } = (0, R.G)(x),
        E = (0, f.K)(v, 0.5, A?.surface != null),
        C = l.useCallback(() => {
            p({
                wishlistId: h,
                action: U.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                A?.surface != null &&
                    y.default.track(P.HAw.WISHLIST_ITEM_CLICKED, {
                        sku_id: t.id,
                        wishlist_id: h,
                        wishlist_owner_id: A.wishlistOwnerId,
                        surface: A.surface,
                        position_in_section: A.positionInSection,
                        item_source: A.itemSource,
                        click_type: "add_to_wishlist",
                        product_line: t.productLine,
                        card_id: x,
                        impression_session_id: A.impressionSessionId,
                        location_stack: A.analyticsLocations,
                    }),
                d();
        }, [d, t.id, t.productLine, p, h, A, x]);
    return (0, i.jsx)("div", {
        ref: E,
        children: (0, i.jsx)(k.A, {
            sku: t,
            user: n,
            spec: H,
            cardStyle: a()(G.Nr, s),
            skuPreviewStyle: a()(G.ev, r),
            onHoverOrFocusChange: o,
            onClick: C,
            "aria-label": u,
            children: m,
        }),
    });
}
function W(e) {
    let {
            sku: t,
            analyticsLocations: n,
            isHoveringOrFocusing: s,
            handleOpenUserProfileModal: r,
            skuPreviewStyle: o,
            wishlistOwner: d,
            onAddSuccess: c,
            promotion: u,
            ...h
        } = e,
        [m, p] = l.useState(!1),
        g = l.useCallback(async () => {
            if (!m) {
                p(!0);
                try {
                    await M.A.addSkuToWishlist(t.id, n), c?.(), r?.({ tabSection: U.RP.WISHLIST });
                } catch (e) {
                    (0, x.P0)((0, v.o)(D.intl.string(D.t.F8FvUy), E.Ck.FAILURE)),
                        C.O.announce(D.intl.string(D.t.F8FvUy));
                } finally {
                    p(!1);
                }
            }
        }, [t, n, m, r, c]),
        f = l.useMemo(() => a()({ [G.zW]: s || m }, o), [s, m, o]);
    return (0, i.jsxs)(V, {
        "aria-label": D.intl.formatToPlainString(D.t.xRjJBe, { productName: (0, b.TC)(t) }),
        sku: t,
        wishlistOwner: d,
        skuPreviewStyle: f,
        onClick: g,
        isHoveringOrFocusing: s,
        ...h,
        children: [(0, i.jsx)(O.oU, { isHoveringOrFocusing: s, loading: m }), !s && !m && u],
    });
}
function B(e) {
    let { sku: t, analyticsLocations: n, ...l } = e,
        { analyticsLocations: s } = (0, T.Ay)(...(n ?? []), _.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        a = (0, S.F)("sku_purchase_badge", { applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(W, {
        sku: t,
        analyticsLocations: s,
        promotion: null != a ? (0, i.jsx)(w.s, { spec: H, icon: a.Icon, tooltipText: a.tooltip }) : null,
        ...l,
    });
}
function Z(e) {
    let { sku: t, ...n } = e,
        s = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case A.R.PROFILE_EFFECT:
                case A.R.NAMEPLATE:
                case A.R.BUNDLE:
                case A.R.PROFILE_FRAME:
                    return;
                case A.R.AVATAR_DECORATION:
                    return G.ML;
                default:
                    return a()(G.ML, G.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(W, { sku: t, skuPreviewStyle: s, ...n });
}
function z(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(W, { sku: t, skuPreviewStyle: F.MO, onAddSuccess: j.w, ...n });
}
function K(e) {
    let { sku: t, ...n } = e,
        [s, a] = l.useState(!1);
    switch (t.productLine) {
        case P.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(B, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: a, ...n });
        case P.EZt.COLLECTIBLES:
            return (0, i.jsx)(Z, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: a, ...n });
        case P.EZt.PREMIUM:
            return (0, i.jsx)(z, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: a, ...n });
        default:
            return null;
    }
}
var q = n(202541),
    Y = n(817990);
function $(e) {
    let {
            wishlist: t,
            handleOpenUserProfileModal: n,
            analyticsLocations: s,
            numWishlistItemsToRecommend: m,
            maxWishlistItemsToShow: p = m,
            className: g,
            isLoading: f,
            recommendations: A,
        } = e,
        x = (0, r.bG)([d.default], () => d.default.getUser(t?.userId)),
        v = (0, h.Gh)("add_to_wishlist_grid_suggested_nitro"),
        E = l.useMemo(() => new Set(t?.items.map((e) => e.skuId) ?? []), [t]),
        C = v && !E.has(q.pe.TIER_2),
        I = l.useMemo(() => (C ? (0, u.rI)() : null), [C]),
        _ = A.filter((e) => !E.has(e.id))
            .slice(0, null != I ? Math.max(0, p - 1) : p)
            .map((e) => ({ sku: e, itemSource: "recommendation" })),
        T = null != I ? [{ sku: I, itemSource: "takeover" }, ..._] : _;
    return f
        ? (0, i.jsx)("div", { className: Y.g4, children: (0, i.jsx)(o.k, {}) })
        : 0 === T.length
          ? null
          : (0, i.jsx)("ul", {
                className: a()(Y.Vg, g),
                children: T.map((e, l) => {
                    let { sku: a, itemSource: r } = e;
                    return (0, i.jsx)(
                        c.dB,
                        {
                            newValue: { positionInSection: l, skuId: a.id, itemSource: r, productLine: a.productLine },
                            children: (0, i.jsx)(K, {
                                sku: a,
                                wishlistId: t?.id,
                                wishlistOwner: x,
                                handleOpenUserProfileModal: n,
                                analyticsLocations: s,
                            }),
                        },
                        a.id,
                    );
                }),
            });
}
function Q(e) {
    let { userId: t, numWishlistItemsToRecommend: n, ...l } = e,
        { recommendations: s, status: a } = (0, p.Ul)({ userId: t, numItems: n, source: m.B5.USER_PROFILE });
    return (0, i.jsx)($, { isLoading: "loading" === a, recommendations: s, numWishlistItemsToRecommend: n, ...l });
}
