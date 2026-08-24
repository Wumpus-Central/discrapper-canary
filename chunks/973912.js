t.d(s, { A: () => W });
var i = t(477900),
    l = t(582128),
    n = t(503698),
    a = t.n(n),
    o = t(17928),
    r = t(287809),
    u = t(299679),
    c = t(132500),
    d = t(172218),
    m = t(575593),
    p = t(691540),
    f = t(857250),
    g = t(97483),
    h = t(765178),
    w = t(444927),
    I = t(793574),
    S = t(688810),
    M = t(274681),
    _ = t(31969),
    E = t(183555),
    k = t(174459),
    A = t(661492),
    L = t(808247),
    v = t(95817),
    y = t(212387),
    C = t(74135),
    x = t(460442),
    b = t(699976),
    D = t(652215),
    U = t(518477),
    j = t(375708),
    R = t(964164),
    T = t(880465);
let O = b.Z.SIZE_90;
function G(e) {
    let {
            sku: s,
            wishlistOwner: t,
            guildId: n,
            style: o,
            skuPreviewStyle: r,
            setIsHoveringOrFocusing: m,
            onClick: p,
            "aria-label": f,
            wishlistId: g,
            children: h,
        } = e,
        { trackUserProfileWishlistAction: I } = (0, E.NJ)(),
        S = (0, u.Ar)(),
        M = (0, w.A)(() => (0, c.A)()),
        { handleVisibilityChange: _ } = (0, v.G)(M),
        A = (0, d.K)(_, 0.5, S?.surface != null),
        L = l.useCallback(() => {
            I({
                wishlistId: g,
                action: U.Mq.WISHLIST_ITEM_CLICKED,
                skuId: s.id,
                productLines: new Set([s.productLine]),
            }),
                S?.surface != null &&
                    k.default.track(D.HAw.WISHLIST_ITEM_CLICKED, {
                        sku_id: s.id,
                        wishlist_id: g,
                        wishlist_owner_id: S.wishlistOwnerId,
                        surface: S.surface,
                        position_in_section: S.positionInSection,
                        item_source: S.itemSource,
                        click_type: "add_to_wishlist",
                        product_line: s.productLine,
                        card_id: M,
                        impression_session_id: S.impressionSessionId,
                        location_stack: S.analyticsLocations,
                    }),
                p();
        }, [p, s.id, s.productLine, I, g, S, M]);
    return (0, i.jsx)("div", {
        ref: A,
        children: (0, i.jsx)(y.A, {
            sku: s,
            user: t,
            guildId: n,
            spec: O,
            cardStyle: a()(R.Nr, o),
            skuPreviewStyle: a()(R.ev, r),
            onHoverOrFocusChange: m,
            onClick: L,
            "aria-label": f,
            children: h,
        }),
    });
}
function F(e) {
    let {
            sku: s,
            analyticsLocations: t,
            isHoveringOrFocusing: n,
            handleOpenUserProfileModal: o,
            skuPreviewStyle: r,
            wishlistOwner: u,
            onAddSuccess: c,
            promotion: d,
            ...m
        } = e,
        [w, I] = l.useState(!1),
        S = l.useCallback(async () => {
            if (!w) {
                I(!0);
                try {
                    await L.A.addSkuToWishlist(s.id, t), c?.(), o?.({ tabSection: U.RP.WISHLIST });
                } catch (e) {
                    (0, p.P0)((0, f.o)(j.intl.string(j.t.F8FvUy), g.Ck.FAILURE)),
                        h.O.announce(j.intl.string(j.t.F8FvUy));
                } finally {
                    I(!1);
                }
            }
        }, [s, t, w, o, c]),
        M = l.useMemo(() => a()({ [R.zW]: n || w }, r), [n, w, r]);
    return (0, i.jsxs)(G, {
        "aria-label": j.intl.formatToPlainString(j.t.xRjJBe, { productName: (0, A.T)(s) }),
        sku: s,
        wishlistOwner: u,
        skuPreviewStyle: M,
        onClick: S,
        isHoveringOrFocusing: n,
        ...m,
        children: [(0, i.jsx)(x.oU, { isHoveringOrFocusing: n, loading: w }), !n && !w && d],
    });
}
function N(e) {
    let { sku: s, analyticsLocations: t, ...l } = e,
        { analyticsLocations: n } = (0, S.Ay)(...(t ?? []), I.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        a = (0, _.F)("sku_purchase_badge", { applicationId: s.applicationId, skuId: s.id });
    return (0, i.jsx)(F, {
        sku: s,
        analyticsLocations: n,
        promotion: null != a ? (0, i.jsx)(C.s, { spec: O, icon: a.Icon, tooltipText: a.tooltip }) : null,
        ...l,
    });
}
function P(e) {
    let { sku: s, ...t } = e,
        n = l.useMemo(() => {
            switch (s?.tenantMetadata?.collectibles?.type) {
                case m.R.PROFILE_EFFECT:
                case m.R.NAMEPLATE:
                case m.R.BUNDLE:
                case m.R.PROFILE_FRAME:
                    return;
                case m.R.AVATAR_DECORATION:
                    return R.ML;
                default:
                    return a()(R.ML, R.ZY);
            }
        }, [s?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(F, { sku: s, skuPreviewStyle: n, ...t });
}
function H(e) {
    let { sku: s, ...t } = e;
    return (0, i.jsx)(F, { sku: s, skuPreviewStyle: T.MO, onAddSuccess: M.w, ...t });
}
function B(e) {
    let { sku: s, ...t } = e,
        [n, a] = l.useState(!1);
    switch (s.productLine) {
        case D.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(N, { sku: s, isHoveringOrFocusing: n, setIsHoveringOrFocusing: a, ...t });
        case D.EZt.COLLECTIBLES:
            return (0, i.jsx)(P, { sku: s, isHoveringOrFocusing: n, setIsHoveringOrFocusing: a, ...t });
        case D.EZt.PREMIUM:
            return (0, i.jsx)(H, { sku: s, isHoveringOrFocusing: n, setIsHoveringOrFocusing: a, ...t });
        default:
            return null;
    }
}
var Z = t(609965);
function W(e) {
    let { wishlist: s, guildId: t, handleOpenUserProfileModal: l, analyticsLocations: n, className: c, items: d } = e,
        m = (0, o.bG)([r.default], () => r.default.getUser(s?.userId));
    return (0, i.jsx)("ul", {
        className: a()(Z.Vg, c),
        children: d.map((e, a) => {
            let { sku: o, itemSource: r } = e;
            return (0, i.jsx)(
                u.dB,
                {
                    newValue: { positionInSection: a, skuId: o.id, itemSource: r, productLine: o.productLine },
                    children: (0, i.jsx)(B, {
                        sku: o,
                        wishlistId: s?.id,
                        wishlistOwner: m,
                        guildId: t,
                        handleOpenUserProfileModal: l,
                        analyticsLocations: n,
                    }),
                },
                o.id,
            );
        }),
    });
}
