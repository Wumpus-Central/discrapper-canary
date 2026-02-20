r.d(t, { Ay: () => w, Zu: () => k, uz: () => N });
var l = r(627968),
    n = r(64700),
    i = r(503698),
    s = r.n(i),
    a = r(873263),
    u = r(575593),
    o = r(635358),
    d = r(311907),
    c = r(397927),
    h = r(793574),
    I = r(688810),
    m = r(590180),
    g = r(572595),
    A = r(245068),
    S = r(57020),
    f = r(713517),
    E = r(44120),
    p = r(976860),
    L = r(111085),
    _ = r(594832),
    C = r(403362),
    M = r(657331),
    v = r(353157),
    R = r(798048),
    O = r(652215),
    P = r(788868),
    x = r(985018),
    y = r(752276),
    U = r(476324);
let T = (e) => {
    let { size: t = c._3J.SIZE_80 } = e;
    return (0, l.jsx)(c.euF, { className: y.RH, src: U, size: t, "aria-label": x.intl.string(x.t.lqaIxI) });
};
function k(e) {
    let { cardSize: t = R.Y.MEDIUM } = e,
        r = n.useRef(null),
        i = n.useRef(null);
    return (0, l.jsx)("div", {
        ref: r,
        className: y.kL,
        children: (0, l.jsx)("div", {
            ref: i,
            className: s()(y.Nr, y.Yf, {
                [y.IU]: t === R.Y.SMALL,
                [y.D]: t === R.Y.MEDIUM_SQUARE,
                [y.Sd]: t === R.Y.LARGE,
            }),
            children: (0, l.jsx)("div", {
                className: y.ho,
                children: (0, l.jsx)("div", { className: y._P, children: (0, l.jsx)(T, { size: c._3J.SIZE_80 }) }),
            }),
        }),
    });
}
function N(e) {
    let { item: t, cardSize: r = R.Y.SMALL, remainingCount: i, onClick: a, renderItemPreview: u } = e,
        o = n.useRef(null),
        d = n.useRef(null),
        { isHoveringOrFocusing: h } = (0, f.A)(d),
        I = !0 === t.isOwned;
    return (0, l.jsx)("div", {
        ref: o,
        className: y.kL,
        children: (0, l.jsx)(c.DUT, {
            tag: "div",
            innerRef: d,
            onClick: a,
            className: s()(y.Nr, y.xJ, { [y.IU]: r === R.Y.SMALL }),
            children: (0, l.jsxs)("div", {
                className: s()(y.ho, y.jP),
                children: [
                    u(!I && h),
                    (0, l.jsx)("div", {
                        className: y.RF,
                        children: (0, l.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "always-white",
                            children: x.intl.format(x.t.F6iMs4, { count: i }),
                        }),
                    }),
                ],
            }),
        }),
    });
}
function w(e) {
    let {
            profileOwner: t,
            showIcons: r = !1,
            source: i = _.uS.WISHLIST,
            giftingOrigin: s = P.vQ.USER_PROFILE_WISHLIST,
            heartColor: U = "red",
            onWishlistItemClick: T,
            cardSize: k = R.Y.MEDIUM,
            analyticsLocations: N,
            isDragging: w = !1,
            ...b
        } = e,
        { item: j, isOwner: Y } = b,
        { analyticsLocations: H } = (0, I.Ay)(...(N ?? [])),
        D = (0, a.zy)(),
        F = n.useRef(null),
        { isHoveringOrFocusing: G } = (0, f.A)(F),
        [B] = (0, d.yK)([L.A], () => [L.A.hasSentGift(j.skuId, t.id)], [j.skuId, t.id]),
        V = B || !0 === j.isOwned,
        z = null != j.bundleItems && j.bundleItems.length > 0,
        W = (() => {
            if (z) return x.intl.formatToPlainString(x.t["/l2CAE"], { itemName: j.skuName });
            let e = j.collectiblesItem.type;
            switch (e) {
                case u.R.AVATAR_DECORATION:
                    return x.intl.formatToPlainString(x.t.IQQYef, { itemName: j.skuName });
                case u.R.PROFILE_EFFECT:
                    return x.intl.formatToPlainString(x.t["x/MGWy"], { itemName: j.skuName });
                case u.R.NAMEPLATE:
                    return x.intl.formatToPlainString(x.t.eVNt6E, { itemName: j.skuName });
                default:
                    (0, C.xb)(e);
            }
        })(),
        Q = Y || V ? x.intl.string(x.t.FdGl5A) : x.intl.string(x.t.ilhtIa),
        Z = Y || V ? void 0 : c.okO,
        q = n.useCallback(() => {
            let e = D.pathname.startsWith(O.BVt.COLLECTIBLES_SHOP);
            if (Y || V) {
                let t = !Y && V;
                if (e) {
                    let e = m.A.getProduct(j.skuId),
                        r = m.A.getCategoryForProduct(j.skuId);
                    if (null != e && null != r) {
                        t || (0, M.closeUserProfileModal)(),
                            (0, g.t)({
                                product: e,
                                category: r,
                                shouldCheckoutWithOrbs: (0, S.A)({ product: e }),
                                analyticsLocations: H,
                                analyticsSource: h.A.USER_PROFILE_WISHLIST,
                                returnRef: void 0,
                                tab: void 0,
                            });
                        return;
                    }
                }
                t || (0, M.closeUserProfileModal)(), (0, p.pX)(`${O.BVt.COLLECTIBLES_SHOP}#itemSkuId=${j.skuId}`);
            } else
                T?.(),
                    (0, E.A)({
                        skuId: j.skuId,
                        isGift: !0,
                        giftingOrigin: s,
                        analyticsLocations: H,
                        giftRecipient: t,
                        variantsReturnStyle: o.g.VARIANTS_GROUP,
                    });
        }, [D.pathname, j.skuId, H, Y, V, t, s, T]),
        J = k === R.Y.MEDIUM_SQUARE,
        K = n.useCallback(() => {
            if (!r || (z && !J)) return null;
            if (i === _.uS.WISHLIST) {
                let e = "white" === U ? y.aP : y.Be;
                return (0, l.jsx)("div", {
                    className: y.Fx,
                    children: (0, l.jsx)(c.C3E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: "currentColor",
                        colorClass: e,
                    }),
                });
            }
            return i === _.uS.POPULAR
                ? (0, l.jsx)("div", {
                      className: y.Fx,
                      children: (0, l.jsx)(c.Y3C, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          colorClass: y.rY,
                      }),
                  })
                : null;
        }, [z, r, i, U, J]),
        X = n.useCallback(() => {
            if (z) {
                let e = { items: j.bundleItems };
                return (0, l.jsx)("div", {
                    className: y.hT,
                    children: (0, l.jsx)(A.X, { product: e, isHighlighted: G && !w, user: t }),
                });
            }
            return (0, l.jsx)(v.A, { item: j, profileOwner: t, isHighlighted: G && !w, cardSize: k });
        }, [z, j, t, G, k, w]);
    return (0, l.jsx)(R.A, {
        ...b,
        cardRef: F,
        accessibleLabel: W,
        onCardClick: q,
        buttonCTALabel: Q,
        buttonIcon: Z,
        isOwned: V,
        renderItemPreview: X,
        renderSourceIcon: K,
        giftingOrigin: s,
        source: i,
        cardSize: k,
    });
}
