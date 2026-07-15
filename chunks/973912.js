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
            style: a,
            skuPreviewStyle: l,
            setIsHoveringOrFocusing: o,
            onClick: _,
            "aria-label": E,
            wishlistId: A,
            children: h,
        } = e,
        { trackUserProfileWishlistAction: I } = (0, S.NJ)(),
        p = (0, d.Ar)(),
        T = (0, f.A)(() => (0, c.A)()),
        { handleVisibilityChange: m } = (0, O.G)(T),
        g = (0, u.K)(m, 0.5, p?.surface != null),
        C = r.useCallback(() => {
            I({
                wishlistId: A,
                action: M.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                p?.surface != null &&
                    N.default.track(b.HAw.WISHLIST_ITEM_CLICKED, {
                        sku_id: t.id,
                        wishlist_id: A,
                        wishlist_owner_id: p.wishlistOwnerId,
                        surface: p.surface,
                        position_in_section: p.positionInSection,
                        item_source: p.itemSource,
                        click_type: "add_to_wishlist",
                        product_line: t.productLine,
                        card_id: T,
                        impression_session_id: p.impressionSessionId,
                        location_stack: p.analyticsLocations,
                    }),
                _();
        }, [_, t.id, t.productLine, I, A, p, T]);
    return (0, i.jsx)("div", {
        ref: g,
        children: (0, i.jsx)(L.A, {
            sku: t,
            user: n,
            spec: G,
            cardStyle: s()(U.Nr, a),
            skuPreviewStyle: s()(U.ev, l),
            onHoverOrFocusChange: o,
            onClick: C,
            "aria-label": E,
            children: h,
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
        "aria-label": P.intl.formatToPlainString(P.t.xRjJBe, { productName: (0, C.TC)(t) }),
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
    let { wishlist: t, handleOpenUserProfileModal: n, analyticsLocations: r, className: a, items: c } = e,
        u = (0, l.bG)([o.default], () => o.default.getUser(t?.userId));
    return (0, i.jsx)("ul", {
        className: s()(j.Vg, a),
        children: c.map((e, a) => {
            let { sku: s, itemSource: l } = e;
            return (0, i.jsx)(
                d.dB,
                {
                    newValue: { positionInSection: a, skuId: s.id, itemSource: l, productLine: s.productLine },
                    children: (0, i.jsx)(H, {
                        sku: s,
                        wishlistId: t?.id,
                        wishlistOwner: u,
                        handleOpenUserProfileModal: n,
                        analyticsLocations: r,
                    }),
                },
                s.id,
            );
        }),
    });
}
