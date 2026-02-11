i.d(t, { Ay: () => U, Zu: () => j, uz: () => w });
var r = i(627968),
    l = i(64700),
    s = i(503698),
    n = i.n(s),
    a = i(960488),
    u = i(575593),
    d = i(635358),
    o = i(311907),
    c = i(397927),
    I = i(793574),
    h = i(688810),
    S = i(590180),
    m = i(572595),
    g = i(245068),
    f = i(57020),
    L = i(713517),
    A = i(44120),
    E = i(976860),
    R = i(111085),
    T = i(594832),
    p = i(403362),
    _ = i(657331),
    P = i(353157),
    x = i(798048),
    M = i(652215),
    v = i(788868),
    C = i(985018),
    O = i(752276),
    k = i(476324);
let N = (e) => {
    let { size: t = c._3J.SIZE_80 } = e;
    return (0, r.jsx)(c.euF, { className: O.RH, src: k, size: t, "aria-label": C.intl.string(C.t.lqaIxI) });
};
function j(e) {
    let { cardSize: t = x.Y.MEDIUM } = e,
        i = l.useRef(null),
        s = l.useRef(null);
    return (0, r.jsx)("div", {
        ref: i,
        className: O.kL,
        children: (0, r.jsx)("div", {
            ref: s,
            className: n()(O.Nr, O.Yf, { [O.IU]: t === x.Y.SMALL, [O.Sd]: t === x.Y.LARGE }),
            children: (0, r.jsx)("div", {
                className: O.ho,
                children: (0, r.jsx)("div", { className: O._P, children: (0, r.jsx)(N, { size: c._3J.SIZE_80 }) }),
            }),
        }),
    });
}
function w(e) {
    let { item: t, cardSize: i = x.Y.SMALL, remainingCount: s, onClick: a, renderItemPreview: u } = e,
        d = l.useRef(null),
        o = l.useRef(null),
        { isHoveringOrFocusing: I } = (0, L.A)(o),
        h = !0 === t.isOwned;
    return (0, r.jsx)("div", {
        ref: d,
        className: O.kL,
        children: (0, r.jsx)(c.DUT, {
            tag: "div",
            innerRef: o,
            onClick: a,
            className: n()(O.Nr, O.xJ, { [O.IU]: i === x.Y.SMALL }),
            children: (0, r.jsxs)("div", {
                className: n()(O.ho, O.jP),
                children: [
                    u(!h && I),
                    (0, r.jsx)("div", {
                        className: O.RF,
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "always-white",
                            children: C.intl.format(C.t.F6iMs4, { count: s }),
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
            source: s = T.uS.WISHLIST,
            giftingOrigin: n = v.vQ.USER_PROFILE_WISHLIST,
            onWishlistItemClick: k,
            cardSize: N = x.Y.MEDIUM,
            analyticsLocations: j,
            isDragging: w = !1,
            ...U
        } = e,
        { item: y, isOwner: H } = U,
        { analyticsLocations: b } = (0, h.Ay)(...(j ?? [])),
        F = (0, a.zy)(),
        Y = l.useRef(null),
        { isHoveringOrFocusing: G } = (0, L.A)(Y),
        [z] = (0, o.yK)([R.A], () => [R.A.hasSentGift(y.skuId, t.id)], [y.skuId, t.id]),
        B = z || !0 === y.isOwned,
        W = null != y.bundleItems && y.bundleItems.length > 0,
        D = (() => {
            if (W) return C.intl.formatToPlainString(C.t["/l2CAE"], { itemName: y.skuName });
            let e = y.collectiblesItem.type;
            switch (e) {
                case u.R.AVATAR_DECORATION:
                    return C.intl.formatToPlainString(C.t.IQQYef, { itemName: y.skuName });
                case u.R.PROFILE_EFFECT:
                    return C.intl.formatToPlainString(C.t["x/MGWy"], { itemName: y.skuName });
                case u.R.NAMEPLATE:
                    return C.intl.formatToPlainString(C.t.eVNt6E, { itemName: y.skuName });
                default:
                    (0, p.xb)(e);
            }
        })(),
        V = H || B ? C.intl.string(C.t.FdGl5A) : C.intl.string(C.t.ilhtIa),
        Z = H || B ? void 0 : c.okO,
        q = l.useCallback(() => {
            let e = F.pathname.startsWith(M.BVt.COLLECTIBLES_SHOP);
            if (H || B) {
                let t = !H && B;
                if (e) {
                    let e = S.A.getProduct(y.skuId),
                        i = S.A.getCategoryForProduct(y.skuId);
                    if (null != e && null != i) {
                        t || (0, _.closeUserProfileModal)(),
                            (0, m.t)({
                                product: e,
                                category: i,
                                shouldCheckoutWithOrbs: (0, f.A)({ product: e }),
                                analyticsLocations: b,
                                analyticsSource: I.A.USER_PROFILE_WISHLIST,
                                returnRef: void 0,
                                tab: void 0,
                            });
                        return;
                    }
                }
                t || (0, _.closeUserProfileModal)(), (0, E.pX)(`${M.BVt.COLLECTIBLES_SHOP}#itemSkuId=${y.skuId}`);
            } else
                k?.(),
                    (0, A.A)({
                        skuId: y.skuId,
                        isGift: !0,
                        giftingOrigin: n,
                        analyticsLocations: b,
                        giftRecipient: t,
                        variantsReturnStyle: d.g.VARIANTS_GROUP,
                    });
        }, [F.pathname, y.skuId, b, H, B, t, n, k]),
        J = l.useCallback(
            () =>
                W || !i
                    ? null
                    : s === T.uS.WISHLIST
                      ? (0, r.jsx)("div", {
                            className: O.Fx,
                            children: (0, r.jsx)(c.C3E, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: "currentColor",
                                colorClass: O.Be,
                            }),
                        })
                      : s === T.uS.POPULAR
                        ? (0, r.jsx)("div", {
                              className: O.Fx,
                              children: (0, r.jsx)(c.Y3C, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  colorClass: O.rY,
                              }),
                          })
                        : null,
            [W, i, s],
        ),
        $ = l.useCallback(() => {
            if (W) {
                let e = { items: y.bundleItems };
                return (0, r.jsx)("div", {
                    className: O.hT,
                    children: (0, r.jsx)(g.X, { product: e, isHighlighted: G && !w, user: t }),
                });
            }
            return (0, r.jsx)(P.A, { item: y, profileOwner: t, isHighlighted: G && !w, cardSize: N });
        }, [W, y, t, G, N, w]);
    return (0, r.jsx)(x.A, {
        ...U,
        cardRef: Y,
        accessibleLabel: D,
        onCardClick: q,
        buttonCTALabel: V,
        buttonIcon: Z,
        isOwned: B,
        renderItemPreview: $,
        renderSourceIcon: J,
        giftingOrigin: n,
        source: s,
        cardSize: N,
    });
}
