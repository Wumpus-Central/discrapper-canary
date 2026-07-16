"use strict";
n.d(t, { A: () => W });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(287809),
    d = n(299679),
    c = n(132500),
    u = n(172218),
    _ = n(575593),
    E = n(691540),
    A = n(857250),
    h = n(97483),
    I = n(765178),
    f = n(444927),
    p = n(793574),
    T = n(688810),
    m = n(274681),
    g = n(31969),
    S = n(183555),
    N = n(174459),
    C = n(661492),
    R = n(808247),
    O = n(95817),
    L = n(212387),
    D = n(74135),
    y = n(460442),
    v = n(699976),
    b = n(652215),
    M = n(518477),
    P = n(375708),
    U = n(316587),
    w = n(997990);
let G = v.Z.SIZE_90;
function x(e) {
    let {
            sku: t,
            wishlistOwner: n,
            guildId: a,
            style: l,
            skuPreviewStyle: o,
            setIsHoveringOrFocusing: _,
            onClick: E,
            "aria-label": A,
            wishlistId: h,
            children: I,
        } = e,
        { trackUserProfileWishlistAction: p } = (0, S.NJ)(),
        T = (0, d.Ar)(),
        m = (0, f.A)(() => (0, c.A)()),
        { handleVisibilityChange: g } = (0, O.G)(m),
        C = (0, u.K)(g, 0.5, T?.surface != null),
        R = r.useCallback(() => {
            p({
                wishlistId: h,
                action: M.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                T?.surface != null &&
                    N.default.track(b.HAw.WISHLIST_ITEM_CLICKED, {
                        sku_id: t.id,
                        wishlist_id: h,
                        wishlist_owner_id: T.wishlistOwnerId,
                        surface: T.surface,
                        position_in_section: T.positionInSection,
                        item_source: T.itemSource,
                        click_type: "add_to_wishlist",
                        product_line: t.productLine,
                        card_id: m,
                        impression_session_id: T.impressionSessionId,
                        location_stack: T.analyticsLocations,
                    }),
                E();
        }, [E, t.id, t.productLine, p, h, T, m]);
    return (0, i.jsx)("div", {
        ref: C,
        children: (0, i.jsx)(L.A, {
            sku: t,
            user: n,
            guildId: a,
            spec: G,
            cardStyle: s()(U.Nr, l),
            skuPreviewStyle: s()(U.ev, o),
            onHoverOrFocusChange: _,
            onClick: R,
            "aria-label": A,
            children: I,
        }),
    });
}
function k(e) {
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
        [f, p] = r.useState(!1),
        T = r.useCallback(async () => {
            if (!f) {
                p(!0);
                try {
                    await R.A.addSkuToWishlist(t.id, n), c?.(), l?.({ tabSection: M.RP.WISHLIST });
                } catch (e) {
                    (0, E.P0)((0, A.o)(P.intl.string(P.t.F8FvUy), h.Ck.FAILURE)),
                        I.O.announce(P.intl.string(P.t.F8FvUy));
                } finally {
                    p(!1);
                }
            }
        }, [t, n, f, l, c]),
        m = r.useMemo(() => s()({ [U.zW]: a || f }, o), [a, f, o]);
    return (0, i.jsxs)(x, {
        "aria-label": P.intl.formatToPlainString(P.t.xRjJBe, { productName: (0, C.T)(t) }),
        sku: t,
        wishlistOwner: d,
        skuPreviewStyle: m,
        onClick: T,
        isHoveringOrFocusing: a,
        ..._,
        children: [(0, i.jsx)(y.oU, { isHoveringOrFocusing: a, loading: f }), !a && !f && u],
    });
}
function F(e) {
    let { sku: t, analyticsLocations: n, ...r } = e,
        { analyticsLocations: a } = (0, T.Ay)(...(n ?? []), p.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        s = (0, g.F)("sku_purchase_badge", { applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(k, {
        sku: t,
        analyticsLocations: a,
        promotion: null != s ? (0, i.jsx)(D.s, { spec: G, icon: s.Icon, tooltipText: s.tooltip }) : null,
        ...r,
    });
}
function V(e) {
    let { sku: t, ...n } = e,
        a = r.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case _.R.PROFILE_EFFECT:
                case _.R.NAMEPLATE:
                case _.R.BUNDLE:
                case _.R.PROFILE_FRAME:
                    return;
                case _.R.AVATAR_DECORATION:
                    return U.ML;
                default:
                    return s()(U.ML, U.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(k, { sku: t, skuPreviewStyle: a, ...n });
}
function B(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(k, { sku: t, skuPreviewStyle: w.MO, onAddSuccess: m.w, ...n });
}
function H(e) {
    let { sku: t, ...n } = e,
        [a, s] = r.useState(!1);
    switch (t.productLine) {
        case b.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(F, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: s, ...n });
        case b.EZt.COLLECTIBLES:
            return (0, i.jsx)(V, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: s, ...n });
        case b.EZt.PREMIUM:
            return (0, i.jsx)(B, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: s, ...n });
        default:
            return null;
    }
}
var j = n(817990);
function W(e) {
    let { wishlist: t, guildId: n, handleOpenUserProfileModal: r, analyticsLocations: a, className: c, items: u } = e,
        _ = (0, l.bG)([o.default], () => o.default.getUser(t?.userId));
    return (0, i.jsx)("ul", {
        className: s()(j.Vg, c),
        children: u.map((e, s) => {
            let { sku: l, itemSource: o } = e;
            return (0, i.jsx)(
                d.dB,
                {
                    newValue: { positionInSection: s, skuId: l.id, itemSource: o, productLine: l.productLine },
                    children: (0, i.jsx)(H, {
                        sku: l,
                        wishlistId: t?.id,
                        wishlistOwner: _,
                        guildId: n,
                        handleOpenUserProfileModal: r,
                        analyticsLocations: a,
                    }),
                },
                l.id,
            );
        }),
    });
}
