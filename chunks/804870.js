i.d(t, { Ay: () => U, Zu: () => O, uz: () => w });
var r = i(627968),
    l = i(64700),
    s = i(503698),
    n = i.n(s),
    a = i(960488),
    u = i(575593),
    o = i(635358),
    d = i(311907),
    c = i(397927),
    I = i(793574),
    h = i(688810),
    m = i(590180),
    g = i(572595),
    S = i(245068),
    f = i(57020),
    A = i(713517),
    L = i(44120),
    E = i(976860),
    x = i(111085),
    R = i(594832),
    v = i(403362),
    p = i(657331),
    T = i(353157),
    _ = i(242640),
    j = i(652215),
    M = i(788868),
    P = i(985018),
    k = i(752276),
    C = i(476324);
let N = (e) => {
    let { size: t = c._3J.SIZE_80 } = e;
    return (0, r.jsx)(c.euF, { className: k.RH, src: C, size: t, "aria-label": P.intl.string(P.t.lqaIxI) });
};
function O(e) {
    let { cardSize: t = _.Y.MEDIUM } = e,
        i = l.useRef(null),
        s = l.useRef(null);
    return (0, r.jsx)("div", {
        ref: i,
        className: k.kL,
        children: (0, r.jsx)("div", {
            ref: s,
            className: n()(k.Nr, k.Yf, { [k.IU]: t === _.Y.SMALL, [k.Sd]: t === _.Y.LARGE }),
            children: (0, r.jsx)("div", {
                className: k.ho,
                children: (0, r.jsx)("div", { className: k._P, children: (0, r.jsx)(N, { size: c._3J.SIZE_80 }) }),
            }),
        }),
    });
}
function w(e) {
    let { item: t, cardSize: i = _.Y.SMALL, remainingCount: s, onClick: a, renderItemPreview: u } = e,
        o = l.useRef(null),
        d = l.useRef(null),
        { isHoveringOrFocusing: I } = (0, A.A)(d),
        h = !0 === t.isOwned;
    return (0, r.jsx)("div", {
        ref: o,
        className: k.kL,
        children: (0, r.jsx)(c.DUT, {
            tag: "div",
            innerRef: d,
            onClick: a,
            className: n()(k.Nr, k.xJ, { [k.IU]: i === _.Y.SMALL }),
            children: (0, r.jsxs)("div", {
                className: n()(k.ho, k.jP),
                children: [
                    u(!h && I),
                    (0, r.jsx)("div", {
                        className: k.RF,
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "always-white",
                            children: P.intl.format(P.t.F6iMs4, { count: s }),
                        }),
                    }),
                ],
            }),
        }),
    });
}
function U(e) {
    let {
            profileOwner: t,
            showIcons: i = !1,
            source: s = R.uS.WISHLIST,
            giftingOrigin: n = M.vQ.USER_PROFILE_WISHLIST,
            onWishlistItemClick: C,
            cardSize: N = _.Y.MEDIUM,
            analyticsLocations: O,
            isDragging: w = !1,
            ...U
        } = e,
        { item: y, isOwner: F } = U,
        { analyticsLocations: b } = (0, h.Ay)(...(O ?? [])),
        H = (0, a.zy)(),
        Y = l.useRef(null),
        { isHoveringOrFocusing: G } = (0, A.A)(Y),
        [z] = (0, d.yK)([x.A], () => [x.A.hasSentGift(y.skuId, t.id)], [y.skuId, t.id]),
        W = z || !0 === y.isOwned,
        B = null != y.bundleItems && y.bundleItems.length > 0,
        D = (() => {
            if (B) return P.intl.formatToPlainString(P.t["/l2CAE"], { itemName: y.skuName });
            let e = y.collectiblesItem.type;
            switch (e) {
                case u.R.AVATAR_DECORATION:
                    return P.intl.formatToPlainString(P.t.IQQYef, { itemName: y.skuName });
                case u.R.PROFILE_EFFECT:
                    return P.intl.formatToPlainString(P.t["x/MGWy"], { itemName: y.skuName });
                case u.R.NAMEPLATE:
                    return P.intl.formatToPlainString(P.t.eVNt6E, { itemName: y.skuName });
                default:
                    (0, v.xb)(e);
            }
        })(),
        V = F || W ? P.intl.string(P.t.FdGl5A) : P.intl.string(P.t.ilhtIa),
        Z = F || W ? void 0 : c.okO,
        q = l.useCallback(() => {
            let e = H.pathname.startsWith(j.BVt.COLLECTIBLES_SHOP);
            if (F || W) {
                let t = !F && W;
                if (e) {
                    let e = m.A.getProduct(y.skuId),
                        i = m.A.getCategoryForProduct(y.skuId);
                    if (null != e && null != i) {
                        t || (0, p.closeUserProfileModal)(),
                            (0, g.t)({
                                product: e,
                                category: i,
                                shouldCheckoutWithOrbs: (0, f.Ak)({ product: e }),
                                analyticsLocations: b,
                                analyticsSource: I.A.USER_PROFILE_WISHLIST,
                                returnRef: void 0,
                                tab: void 0,
                            });
                        return;
                    }
                }
                t || (0, p.closeUserProfileModal)(), (0, E.pX)(`${j.BVt.COLLECTIBLES_SHOP}#itemSkuId=${y.skuId}`);
            } else
                C?.(),
                    (0, L.A)({
                        skuId: y.skuId,
                        isGift: !0,
                        giftingOrigin: n,
                        analyticsLocations: b,
                        giftRecipient: t,
                        variantsReturnStyle: o.g.VARIANTS_GROUP,
                    });
        }, [H.pathname, y.skuId, b, F, W, t, n, C]),
        J = l.useCallback(
            () =>
                B || !i
                    ? null
                    : s === R.uS.WISHLIST
                      ? (0, r.jsx)("div", {
                            className: k.Fx,
                            children: (0, r.jsx)(c.C3E, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: "currentColor",
                                colorClass: k.Be,
                            }),
                        })
                      : s === R.uS.POPULAR
                        ? (0, r.jsx)("div", {
                              className: k.Fx,
                              children: (0, r.jsx)(c.Y3C, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  colorClass: k.rY,
                              }),
                          })
                        : null,
            [B, i, s],
        ),
        $ = l.useCallback(() => {
            if (B) {
                let e = { items: y.bundleItems };
                return (0, r.jsx)("div", {
                    className: k.hT,
                    children: (0, r.jsx)(S.X, { product: e, isHighlighted: G && !w, user: t }),
                });
            }
            return (0, r.jsx)(T.A, { item: y, profileOwner: t, isHighlighted: G && !w, cardSize: N });
        }, [B, y, t, G, N, w]);
    return (0, r.jsx)(_.A, {
        ...U,
        cardRef: Y,
        accessibleLabel: D,
        onCardClick: q,
        buttonCTALabel: V,
        buttonIcon: Z,
        isOwned: W,
        renderItemPreview: $,
        renderSourceIcon: J,
        giftingOrigin: n,
        source: s,
        cardSize: N,
    });
}
