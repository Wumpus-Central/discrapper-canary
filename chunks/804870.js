n.d(t, { Ay: () => v, Zu: () => w, uz: () => C });
var s = n(627968),
    r = n(64700),
    i = n(503698),
    l = n.n(i),
    o = n(873263),
    u = n(311907),
    d = n(397927),
    a = n(793574),
    c = n(688810),
    m = n(590180),
    I = n(572595),
    h = n(245068),
    f = n(57020),
    S = n(713517),
    g = n(44120),
    A = n(976860),
    E = n(661492),
    L = n(111085),
    M = n(594832),
    R = n(657331),
    k = n(353157),
    T = n(798048),
    j = n(652215),
    x = n(788868),
    p = n(985018),
    U = n(975462),
    _ = n(476324);
let O = (e) => {
    let { size: t = d._3J.SIZE_80 } = e;
    return (0, s.jsx)(d.euF, { className: U.RH, src: _, size: t, "aria-label": p.intl.string(p.t.lqaIxI) });
};
function w(e) {
    let { cardSize: t = T.Y.MEDIUM } = e,
        n = r.useRef(null),
        i = r.useRef(null);
    return (0, s.jsx)("div", {
        ref: n,
        className: U.kL,
        children: (0, s.jsx)("div", {
            ref: i,
            className: l()(U.Nr, U.Yf, {
                [U.IU]: t === T.Y.SMALL,
                [U.D]: t === T.Y.MEDIUM_SQUARE,
                [U.Sd]: t === T.Y.LARGE,
            }),
            children: (0, s.jsx)("div", {
                className: U.ho,
                children: (0, s.jsx)("div", { className: U._P, children: (0, s.jsx)(O, { size: d._3J.SIZE_80 }) }),
            }),
        }),
    });
}
function C(e) {
    let { item: t, cardSize: n = T.Y.SMALL, remainingCount: i, onClick: o, renderItemPreview: u } = e,
        a = r.useRef(null),
        c = r.useRef(null),
        { isHoveringOrFocusing: m } = (0, S.A)(c),
        I = !0 === t.isOwned;
    return (0, s.jsx)("div", {
        ref: a,
        className: U.kL,
        children: (0, s.jsx)(d.DUT, {
            tag: "div",
            innerRef: c,
            onClick: o,
            className: l()(U.Nr, U.xJ, { [U.IU]: n === T.Y.SMALL }),
            children: (0, s.jsxs)("div", {
                className: l()(U.ho, U.jP),
                children: [
                    u(!I && m),
                    (0, s.jsx)("div", {
                        className: U.RF,
                        children: (0, s.jsx)(d.Text, {
                            variant: "text-md/medium",
                            color: "always-white",
                            children: p.intl.format(p.t.F6iMs4, { count: i }),
                        }),
                    }),
                ],
            }),
        }),
    });
}
function v(e) {
    let {
            profileOwner: t,
            showIcons: n = !1,
            source: i = M.uS.WISHLIST,
            giftingOrigin: l = x.vQ.USER_PROFILE_WISHLIST,
            heartColor: _ = "red",
            onWishlistItemClick: O,
            cardSize: w = T.Y.MEDIUM,
            analyticsLocations: C,
            isDragging: v = !1,
            ...b
        } = e,
        { item: y, isOwner: N } = b,
        { analyticsLocations: H } = (0, c.Ay)(...(C ?? [])),
        F = (0, o.zy)(),
        P = r.useRef(null),
        { isHoveringOrFocusing: W } = (0, S.A)(P),
        [Y] = (0, u.yK)([L.A], () => [L.A.hasSentGift(y.skuId, t.id)], [y.skuId, t.id]),
        D = Y || !0 === y.isOwned,
        z = null != y.bundleItems && y.bundleItems.length > 0,
        G = (0, E.x)(y),
        B = N || D ? p.intl.string(p.t.FdGl5A) : p.intl.string(p.t.ilhtIa),
        q = N || D ? void 0 : d.okO,
        V = r.useCallback(() => {
            let e = F.pathname.startsWith(j.BVt.COLLECTIBLES_SHOP);
            if (N || D) {
                let t = !N && D;
                if (e) {
                    let e = m.A.getProduct(y.skuId),
                        n = m.A.getCategoryForProduct(y.skuId);
                    if (null != e && null != n) {
                        t || (0, R.closeUserProfileModal)(),
                            (0, I.t)({
                                product: e,
                                category: n,
                                shouldCheckoutWithOrbs: (0, f.A)({ product: e }),
                                analyticsLocations: H,
                                analyticsSource: a.A.USER_PROFILE_WISHLIST,
                                returnRef: void 0,
                                tab: void 0,
                            });
                        return;
                    }
                }
                t || (0, R.closeUserProfileModal)(), (0, A.pX)(`${j.BVt.COLLECTIBLES_SHOP}#itemSkuId=${y.skuId}`);
            } else
                O?.(),
                    (0, g.A)({ skuId: y.skuId, isGift: !0, giftingOrigin: l, analyticsLocations: H, giftRecipient: t });
        }, [F.pathname, y.skuId, H, N, D, t, l, O]),
        Z = w === T.Y.MEDIUM_SQUARE,
        J = r.useCallback(() => {
            if (!n || (z && !Z)) return null;
            if (i === M.uS.WISHLIST) {
                let e = "white" === _ ? U.e_ : U.Be;
                return (0, s.jsx)("div", {
                    className: U.Fx,
                    children: (0, s.jsx)(d.C3E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: "currentColor",
                        colorClass: e,
                    }),
                });
            }
            return i === M.uS.POPULAR
                ? (0, s.jsx)("div", {
                      className: U.Fx,
                      children: (0, s.jsx)(d.Y3C, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          colorClass: U.rY,
                      }),
                  })
                : null;
        }, [z, n, i, _, Z]),
        Q = r.useCallback(() => {
            if (z) {
                let e = { items: y.bundleItems };
                return (0, s.jsx)("div", {
                    className: U.hT,
                    children: (0, s.jsx)(h.X, { product: e, isHighlighted: W && !v, user: t }),
                });
            }
            return (0, s.jsx)(k.A, { item: y, profileOwner: t, isHighlighted: W && !v, cardSize: w });
        }, [z, y, t, W, w, v]);
    return (0, s.jsx)(T.A, {
        ...b,
        cardRef: P,
        accessibleLabel: G,
        onCardClick: V,
        buttonCTALabel: B,
        buttonIcon: q,
        isOwned: D,
        renderItemPreview: Q,
        renderSourceIcon: J,
        giftingOrigin: l,
        source: i,
        cardSize: w,
    });
}
