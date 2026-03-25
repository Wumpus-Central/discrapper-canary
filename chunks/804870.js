r.d(t, { Ay: () => T, Zu: () => w, uz: () => R });
var i = r(627968),
    n = r(64700),
    l = r(503698),
    s = r.n(l),
    u = r(873263),
    o = r(311907),
    d = r(397927),
    c = r(793574),
    a = r(688810),
    I = r(590180),
    h = r(572595),
    m = r(245068),
    S = r(57020),
    g = r(713517),
    f = r(44120),
    L = r(976860),
    x = r(661492),
    A = r(111085),
    E = r(594832),
    p = r(657331),
    M = r(353157),
    j = r(798048),
    v = r(652215),
    _ = r(788868),
    k = r(985018),
    y = r(752276),
    C = r(476324);
let U = (e) => {
    let { size: t = d._3J.SIZE_80 } = e;
    return (0, i.jsx)(d.euF, { className: y.RH, src: C, size: t, "aria-label": k.intl.string(k.t.lqaIxI) });
};
function w(e) {
    let { cardSize: t = j.Y.MEDIUM } = e,
        r = n.useRef(null),
        l = n.useRef(null);
    return (0, i.jsx)("div", {
        ref: r,
        className: y.kL,
        children: (0, i.jsx)("div", {
            ref: l,
            className: s()(y.Nr, y.Yf, {
                [y.IU]: t === j.Y.SMALL,
                [y.D]: t === j.Y.MEDIUM_SQUARE,
                [y.Sd]: t === j.Y.LARGE,
            }),
            children: (0, i.jsx)("div", {
                className: y.ho,
                children: (0, i.jsx)("div", { className: y._P, children: (0, i.jsx)(U, { size: d._3J.SIZE_80 }) }),
            }),
        }),
    });
}
function R(e) {
    let { item: t, cardSize: r = j.Y.SMALL, remainingCount: l, onClick: u, renderItemPreview: o } = e,
        c = n.useRef(null),
        a = n.useRef(null),
        { isHoveringOrFocusing: I } = (0, g.A)(a),
        h = !0 === t.isOwned;
    return (0, i.jsx)("div", {
        ref: c,
        className: y.kL,
        children: (0, i.jsx)(d.DUT, {
            tag: "div",
            innerRef: a,
            onClick: u,
            className: s()(y.Nr, y.xJ, { [y.IU]: r === j.Y.SMALL }),
            children: (0, i.jsxs)("div", {
                className: s()(y.ho, y.jP),
                children: [
                    o(!h && I),
                    (0, i.jsx)("div", {
                        className: y.RF,
                        children: (0, i.jsx)(d.Text, {
                            variant: "text-md/medium",
                            color: "always-white",
                            children: k.intl.format(k.t.F6iMs4, { count: l }),
                        }),
                    }),
                ],
            }),
        }),
    });
}
function T(e) {
    let {
            profileOwner: t,
            showIcons: r = !1,
            source: l = E.uS.WISHLIST,
            giftingOrigin: s = _.vQ.USER_PROFILE_WISHLIST,
            heartColor: C = "red",
            onWishlistItemClick: U,
            cardSize: w = j.Y.MEDIUM,
            analyticsLocations: R,
            isDragging: T = !1,
            ...O
        } = e,
        { item: b, isOwner: N } = O,
        { analyticsLocations: P } = (0, a.Ay)(...(R ?? [])),
        H = (0, u.zy)(),
        Y = n.useRef(null),
        { isHoveringOrFocusing: F } = (0, g.A)(Y),
        [z] = (0, o.yK)([A.A], () => [A.A.hasSentGift(b.skuId, t.id)], [b.skuId, t.id]),
        D = z || !0 === b.isOwned,
        G = null != b.bundleItems && b.bundleItems.length > 0,
        W = (0, x.x2)(b),
        B = N || D ? k.intl.string(k.t.FdGl5A) : k.intl.string(k.t.ilhtIa),
        Z = N || D ? void 0 : d.okO,
        q = n.useCallback(() => {
            let e = H.pathname.startsWith(v.BVt.COLLECTIBLES_SHOP);
            if (N || D) {
                let t = !N && D;
                if (e) {
                    let e = I.A.getProduct(b.skuId),
                        r = I.A.getCategoryForProduct(b.skuId);
                    if (null != e && null != r) {
                        t || (0, p.closeUserProfileModal)(),
                            (0, h.t)({
                                product: e,
                                category: r,
                                shouldCheckoutWithOrbs: (0, S.A)({ product: e }),
                                analyticsLocations: P,
                                analyticsSource: c.A.USER_PROFILE_WISHLIST,
                                returnRef: void 0,
                                tab: void 0,
                            });
                        return;
                    }
                }
                t || (0, p.closeUserProfileModal)(), (0, L.pX)(`${v.BVt.COLLECTIBLES_SHOP}#itemSkuId=${b.skuId}`);
            } else
                U?.(),
                    (0, f.A)({ skuId: b.skuId, isGift: !0, giftingOrigin: s, analyticsLocations: P, giftRecipient: t });
        }, [H.pathname, b.skuId, P, N, D, t, s, U]),
        V = w === j.Y.MEDIUM_SQUARE,
        J = n.useCallback(() => {
            if (!r || (G && !V)) return null;
            if (l === E.uS.WISHLIST) {
                let e = "white" === C ? y.e_ : y.Be;
                return (0, i.jsx)("div", {
                    className: y.Fx,
                    children: (0, i.jsx)(d.C3E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: "currentColor",
                        colorClass: e,
                    }),
                });
            }
            return l === E.uS.POPULAR
                ? (0, i.jsx)("div", {
                      className: y.Fx,
                      children: (0, i.jsx)(d.Y3C, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          colorClass: y.rY,
                      }),
                  })
                : null;
        }, [G, r, l, C, V]),
        Q = n.useCallback(() => {
            if (G) {
                let e = { items: b.bundleItems };
                return (0, i.jsx)("div", {
                    className: y.hT,
                    children: (0, i.jsx)(m.X, { product: e, isHighlighted: F && !T, user: t }),
                });
            }
            return (0, i.jsx)(M.A, { item: b, profileOwner: t, isHighlighted: F && !T, cardSize: w });
        }, [G, b, t, F, w, T]);
    return (0, i.jsx)(j.A, {
        ...O,
        cardRef: Y,
        accessibleLabel: W,
        onCardClick: q,
        buttonCTALabel: B,
        buttonIcon: Z,
        isOwned: D,
        renderItemPreview: Q,
        renderSourceIcon: J,
        giftingOrigin: s,
        source: l,
        cardSize: w,
    });
}
