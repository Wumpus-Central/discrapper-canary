r.d(t, { Ay: () => O, Zu: () => P, uz: () => T });
var i = r(627968),
    l = r(64700),
    s = r(503698),
    n = r.n(s),
    u = r(873263),
    a = r(635358),
    d = r(311907),
    o = r(397927),
    c = r(793574),
    h = r(688810),
    I = r(590180),
    S = r(572595),
    m = r(245068),
    g = r(57020),
    A = r(713517),
    L = r(44120),
    E = r(976860),
    f = r(661492),
    M = r(111085),
    x = r(594832),
    U = r(657331),
    p = r(353157),
    _ = r(798048),
    v = r(652215),
    R = r(788868),
    j = r(985018),
    w = r(752276),
    k = r(476324);
let C = (e) => {
    let { size: t = o._3J.SIZE_80 } = e;
    return (0, i.jsx)(o.euF, { className: w.RH, src: k, size: t, "aria-label": j.intl.string(j.t.lqaIxI) });
};
function P(e) {
    let { cardSize: t = _.Y.MEDIUM } = e,
        r = l.useRef(null),
        s = l.useRef(null);
    return (0, i.jsx)("div", {
        ref: r,
        className: w.kL,
        children: (0, i.jsx)("div", {
            ref: s,
            className: n()(w.Nr, w.Yf, {
                [w.IU]: t === _.Y.SMALL,
                [w.D]: t === _.Y.MEDIUM_SQUARE,
                [w.Sd]: t === _.Y.LARGE,
            }),
            children: (0, i.jsx)("div", {
                className: w.ho,
                children: (0, i.jsx)("div", { className: w._P, children: (0, i.jsx)(C, { size: o._3J.SIZE_80 }) }),
            }),
        }),
    });
}
function T(e) {
    let { item: t, cardSize: r = _.Y.SMALL, remainingCount: s, onClick: u, renderItemPreview: a } = e,
        d = l.useRef(null),
        c = l.useRef(null),
        { isHoveringOrFocusing: h } = (0, A.A)(c),
        I = !0 === t.isOwned;
    return (0, i.jsx)("div", {
        ref: d,
        className: w.kL,
        children: (0, i.jsx)(o.DUT, {
            tag: "div",
            innerRef: c,
            onClick: u,
            className: n()(w.Nr, w.xJ, { [w.IU]: r === _.Y.SMALL }),
            children: (0, i.jsxs)("div", {
                className: n()(w.ho, w.jP),
                children: [
                    a(!I && h),
                    (0, i.jsx)("div", {
                        className: w.RF,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "always-white",
                            children: j.intl.format(j.t.F6iMs4, { count: s }),
                        }),
                    }),
                ],
            }),
        }),
    });
}
function O(e) {
    let {
            profileOwner: t,
            showIcons: r = !1,
            source: s = x.uS.WISHLIST,
            giftingOrigin: n = R.vQ.USER_PROFILE_WISHLIST,
            heartColor: k = "red",
            onWishlistItemClick: C,
            cardSize: P = _.Y.MEDIUM,
            analyticsLocations: T,
            isDragging: O = !1,
            ...Y
        } = e,
        { item: N, isOwner: b } = Y,
        { analyticsLocations: y } = (0, h.Ay)(...(T ?? [])),
        H = (0, u.zy)(),
        D = l.useRef(null),
        { isHoveringOrFocusing: F } = (0, A.A)(D),
        [z] = (0, d.yK)([M.A], () => [M.A.hasSentGift(N.skuId, t.id)], [N.skuId, t.id]),
        G = z || !0 === N.isOwned,
        Q = null != N.bundleItems && N.bundleItems.length > 0,
        Z = (0, f.x)(N),
        B = b || G ? j.intl.string(j.t.FdGl5A) : j.intl.string(j.t.ilhtIa),
        W = b || G ? void 0 : o.okO,
        J = l.useCallback(() => {
            let e = H.pathname.startsWith(v.BVt.COLLECTIBLES_SHOP);
            if (b || G) {
                let t = !b && G;
                if (e) {
                    let e = I.A.getProduct(N.skuId),
                        r = I.A.getCategoryForProduct(N.skuId);
                    if (null != e && null != r) {
                        t || (0, U.closeUserProfileModal)(),
                            (0, S.t)({
                                product: e,
                                category: r,
                                shouldCheckoutWithOrbs: (0, g.A)({ product: e }),
                                analyticsLocations: y,
                                analyticsSource: c.A.USER_PROFILE_WISHLIST,
                                returnRef: void 0,
                                tab: void 0,
                            });
                        return;
                    }
                }
                t || (0, U.closeUserProfileModal)(), (0, E.pX)(`${v.BVt.COLLECTIBLES_SHOP}#itemSkuId=${N.skuId}`);
            } else
                C?.(),
                    (0, L.A)({
                        skuId: N.skuId,
                        isGift: !0,
                        giftingOrigin: n,
                        analyticsLocations: y,
                        giftRecipient: t,
                        variantsReturnStyle: a.g.VARIANTS_GROUP,
                    });
        }, [H.pathname, N.skuId, y, b, G, t, n, C]),
        q = P === _.Y.MEDIUM_SQUARE,
        V = l.useCallback(() => {
            if (!r || (Q && !q)) return null;
            if (s === x.uS.WISHLIST) {
                let e = "white" === k ? w.aP : w.Be;
                return (0, i.jsx)("div", {
                    className: w.Fx,
                    children: (0, i.jsx)(o.C3E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: "currentColor",
                        colorClass: e,
                    }),
                });
            }
            return s === x.uS.POPULAR
                ? (0, i.jsx)("div", {
                      className: w.Fx,
                      children: (0, i.jsx)(o.Y3C, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          colorClass: w.rY,
                      }),
                  })
                : null;
        }, [Q, r, s, k, q]),
        $ = l.useCallback(() => {
            if (Q) {
                let e = { items: N.bundleItems };
                return (0, i.jsx)("div", {
                    className: w.hT,
                    children: (0, i.jsx)(m.X, { product: e, isHighlighted: F && !O, user: t }),
                });
            }
            return (0, i.jsx)(p.A, { item: N, profileOwner: t, isHighlighted: F && !O, cardSize: P });
        }, [Q, N, t, F, P, O]);
    return (0, i.jsx)(_.A, {
        ...Y,
        cardRef: D,
        accessibleLabel: Z,
        onCardClick: J,
        buttonCTALabel: B,
        buttonIcon: W,
        isOwned: G,
        renderItemPreview: $,
        renderSourceIcon: V,
        giftingOrigin: n,
        source: s,
        cardSize: P,
    });
}
