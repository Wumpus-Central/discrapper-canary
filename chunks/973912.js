t.d(s, { A: () => Z });
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
    I = t(444927),
    S = t(793574),
    w = t(688810),
    M = t(31969),
    E = t(183555),
    k = t(174459),
    _ = t(661492),
    A = t(808247),
    L = t(95817),
    v = t(212387),
    y = t(74135),
    C = t(460442),
    x = t(699976),
    D = t(652215),
    U = t(518477),
    b = t(375708),
    R = t(964164),
    T = t(880465);
let j = x.Z.SIZE_90;
function O(e) {
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
        { trackUserProfileWishlistAction: S } = (0, E.NJ)(),
        w = (0, u.Ar)(),
        M = (0, I.A)(() => (0, c.A)()),
        { handleVisibilityChange: _ } = (0, L.G)(M),
        A = (0, d.K)(_, 0.5, w?.surface != null),
        y = l.useCallback(() => {
            S({
                wishlistId: g,
                action: U.Mq.WISHLIST_ITEM_CLICKED,
                skuId: s.id,
                productLines: new Set([s.productLine]),
            }),
                w?.surface != null &&
                    k.default.track(D.HAw.WISHLIST_ITEM_CLICKED, {
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
        children: (0, i.jsx)(v.A, {
            sku: s,
            user: t,
            guildId: n,
            spec: j,
            cardStyle: a()(R.Nr, o),
            skuPreviewStyle: a()(R.ev, r),
            onHoverOrFocusChange: m,
            onClick: y,
            "aria-label": f,
            children: h,
        }),
    });
}
function G(e) {
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
        [I, S] = l.useState(!1),
        w = l.useCallback(async () => {
            if (!I) {
                S(!0);
                try {
                    await A.A.addSkuToWishlist(s.id, t), c?.(), o?.({ tabSection: U.RP.WISHLIST });
                } catch (e) {
                    (0, p.P0)((0, f.o)(b.intl.string(b.t.F8FvUy), g.Ck.FAILURE)),
                        h.O.announce(b.intl.string(b.t.F8FvUy));
                } finally {
                    S(!1);
                }
            }
        }, [s, t, I, o, c]),
        M = l.useMemo(() => a()({ [R.zW]: n || I }, r), [n, I, r]);
    return (0, i.jsxs)(O, {
        "aria-label": b.intl.formatToPlainString(b.t.xRjJBe, { productName: (0, _.T)(s) }),
        sku: s,
        wishlistOwner: u,
        skuPreviewStyle: M,
        onClick: w,
        isHoveringOrFocusing: n,
        ...m,
        children: [(0, i.jsx)(C.oU, { isHoveringOrFocusing: n, loading: I }), !n && !I && d],
    });
}
function F(e) {
    let { sku: s, analyticsLocations: t, ...l } = e,
        { analyticsLocations: n } = (0, w.Ay)(...(t ?? []), S.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        a = (0, M.F)("sku_purchase_badge", { applicationId: s.applicationId, skuId: s.id });
    return (0, i.jsx)(G, {
        sku: s,
        analyticsLocations: n,
        promotion: null != a ? (0, i.jsx)(y.s, { spec: j, icon: a.Icon, tooltipText: a.tooltip }) : null,
        ...l,
    });
}
function N(e) {
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
    return (0, i.jsx)(G, { sku: s, skuPreviewStyle: n, ...t });
}
function P(e) {
    let { sku: s, ...t } = e;
    return (0, i.jsx)(G, { sku: s, skuPreviewStyle: T.MO, ...t });
}
function H(e) {
    let { sku: s, ...t } = e,
        [n, a] = l.useState(!1);
    switch (s.productLine) {
        case D.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(F, { sku: s, isHoveringOrFocusing: n, setIsHoveringOrFocusing: a, ...t });
        case D.EZt.COLLECTIBLES:
            return (0, i.jsx)(N, { sku: s, isHoveringOrFocusing: n, setIsHoveringOrFocusing: a, ...t });
        case D.EZt.PREMIUM:
            return (0, i.jsx)(P, { sku: s, isHoveringOrFocusing: n, setIsHoveringOrFocusing: a, ...t });
        default:
            return null;
    }
}
var B = t(609965);
function Z(e) {
    let { wishlist: s, guildId: t, handleOpenUserProfileModal: l, analyticsLocations: n, className: c, items: d } = e,
        m = (0, o.bG)([r.default], () => r.default.getUser(s?.userId));
    return (0, i.jsx)("ul", {
        className: a()(B.Vg, c),
        children: d.map((e, a) => {
            let { sku: o, itemSource: r } = e;
            return (0, i.jsx)(
                u.dB,
                {
                    newValue: { positionInSection: a, skuId: o.id, itemSource: r, productLine: o.productLine },
                    children: (0, i.jsx)(H, {
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
