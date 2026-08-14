t.d(s, { A: () => W });
var i = t(477900),
    n = t(582128),
    l = t(503698),
    a = t.n(l),
    o = t(17928),
    r = t(287809),
    u = t(299679),
    d = t(132500),
    c = t(172218),
    m = t(575593),
    p = t(691540),
    f = t(857250),
    g = t(97483),
    h = t(765178),
    I = t(444927),
    S = t(793574),
    w = t(688810),
    M = t(274681),
    _ = t(31969),
    k = t(183555),
    E = t(174459),
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
    R = t(680819),
    T = t(134222);
let O = b.Z.SIZE_90;
function G(e) {
    let {
            sku: s,
            wishlistOwner: t,
            guildId: l,
            style: o,
            skuPreviewStyle: r,
            setIsHoveringOrFocusing: m,
            onClick: p,
            "aria-label": f,
            wishlistId: g,
            children: h,
        } = e,
        { trackUserProfileWishlistAction: S } = (0, k.NJ)(),
        w = (0, u.Ar)(),
        M = (0, I.A)(() => (0, d.A)()),
        { handleVisibilityChange: _ } = (0, v.G)(M),
        A = (0, c.K)(_, 0.5, w?.surface != null),
        L = n.useCallback(() => {
            S({
                wishlistId: g,
                action: U.Mq.WISHLIST_ITEM_CLICKED,
                skuId: s.id,
                productLines: new Set([s.productLine]),
            }),
                w?.surface != null &&
                    E.default.track(D.HAw.WISHLIST_ITEM_CLICKED, {
                        sku_id: s.id,
                        wishlist_id: g,
                        wishlist_owner_id: w.wishlistOwnerId,
                        surface: w.surface,
                        position_in_section: w.positionInSection,
                        item_source: w.itemSource,
                        click_type: "add_to_wishlist",
                        product_line: s.productLine,
                        card_id: M,
                        impression_session_id: w.impressionSessionId,
                        location_stack: w.analyticsLocations,
                    }),
                p();
        }, [p, s.id, s.productLine, S, g, w, M]);
    return (0, i.jsx)("div", {
        ref: A,
        children: (0, i.jsx)(y.A, {
            sku: s,
            user: t,
            guildId: l,
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
            isHoveringOrFocusing: l,
            handleOpenUserProfileModal: o,
            skuPreviewStyle: r,
            wishlistOwner: u,
            onAddSuccess: d,
            promotion: c,
            ...m
        } = e,
        [I, S] = n.useState(!1),
        w = n.useCallback(async () => {
            if (!I) {
                S(!0);
                try {
                    await L.A.addSkuToWishlist(s.id, t), d?.(), o?.({ tabSection: U.RP.WISHLIST });
                } catch (e) {
                    (0, p.P0)((0, f.o)(j.intl.string(j.t.F8FvUy), g.Ck.FAILURE)),
                        h.O.announce(j.intl.string(j.t.F8FvUy));
                } finally {
                    S(!1);
                }
            }
        }, [s, t, I, o, d]),
        M = n.useMemo(() => a()({ [R.zW]: l || I }, r), [l, I, r]);
    return (0, i.jsxs)(G, {
        "aria-label": j.intl.formatToPlainString(j.t.xRjJBe, { productName: (0, A.T)(s) }),
        sku: s,
        wishlistOwner: u,
        skuPreviewStyle: M,
        onClick: w,
        isHoveringOrFocusing: l,
        ...m,
        children: [(0, i.jsx)(x.oU, { isHoveringOrFocusing: l, loading: I }), !l && !I && c],
    });
}
function P(e) {
    let { sku: s, analyticsLocations: t, ...n } = e,
        { analyticsLocations: l } = (0, w.Ay)(...(t ?? []), S.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        a = (0, _.F)("sku_purchase_badge", { applicationId: s.applicationId, skuId: s.id });
    return (0, i.jsx)(F, {
        sku: s,
        analyticsLocations: l,
        promotion: null != a ? (0, i.jsx)(C.s, { spec: O, icon: a.Icon, tooltipText: a.tooltip }) : null,
        ...n,
    });
}
function N(e) {
    let { sku: s, ...t } = e,
        l = n.useMemo(() => {
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
    return (0, i.jsx)(F, { sku: s, skuPreviewStyle: l, ...t });
}
function H(e) {
    let { sku: s, ...t } = e;
    return (0, i.jsx)(F, { sku: s, skuPreviewStyle: T.MO, onAddSuccess: M.w, ...t });
}
function B(e) {
    let { sku: s, ...t } = e,
        [l, a] = n.useState(!1);
    switch (s.productLine) {
        case D.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(P, { sku: s, isHoveringOrFocusing: l, setIsHoveringOrFocusing: a, ...t });
        case D.EZt.COLLECTIBLES:
            return (0, i.jsx)(N, { sku: s, isHoveringOrFocusing: l, setIsHoveringOrFocusing: a, ...t });
        case D.EZt.PREMIUM:
            return (0, i.jsx)(H, { sku: s, isHoveringOrFocusing: l, setIsHoveringOrFocusing: a, ...t });
        default:
            return null;
    }
}
var Z = t(460190);
function W(e) {
    let { wishlist: s, guildId: t, handleOpenUserProfileModal: n, analyticsLocations: l, className: d, items: c } = e,
        m = (0, o.bG)([r.default], () => r.default.getUser(s?.userId));
    return (0, i.jsx)("ul", {
        className: a()(Z.Vg, d),
        children: c.map((e, a) => {
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
                        handleOpenUserProfileModal: n,
                        analyticsLocations: l,
                    }),
                },
                o.id,
            );
        }),
    });
}
