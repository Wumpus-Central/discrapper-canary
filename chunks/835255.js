r.d(t, {
    BO: () => R,
    ZP: () => _,
    w_: () => A,
}),
    r(388685);
var n = r(54381),
    i = r(473749),
    l = r(120356),
    o = r.n(l),
    s = r(828700),
    c = r(979554),
    a = r(311570),
    u = r(442837),
    d = r(481060),
    f = r(100527),
    m = r(906732),
    h = r(597688),
    O = r(237031),
    p = r(684263),
    I = r(956472),
    g = r(104505),
    b = r(333867),
    S = r(703656),
    y = r(89196),
    P = r(602733),
    v = r(823379),
    L = r(892001),
    w = r(221300),
    j = r(688192),
    E = r(981631),
    C = r(474936),
    T = r(388032),
    k = r(232644),
    x = r(660097);
let M = (e) => {
    let { size: t = d.EFr.SIZE_80 } = e;
    return (0, n.jsx)(d.qEK, {
        className: k.placeholderAvatar,
        src: x,
        size: t,
        "aria-label": T.intl.string(T.t.lqaIxI),
    });
};
function A(e) {
    let { cardSize: t = j.U.MEDIUM } = e,
        r = i.useRef(null),
        l = i.useRef(null);
    return (0, n.jsx)("div", {
        ref: r,
        className: k.container,
        children: (0, n.jsx)("div", {
            ref: l,
            className: o()(k.card, k.placeholderCard, {
                [k.smallCard]: t === j.U.SMALL,
                [k.largeCard]: t === j.U.LARGE,
            }),
            children: (0, n.jsx)("div", {
                className: k.cardPreview,
                children: (0, n.jsx)("div", {
                    className: k.avatarDecorationPreview,
                    children: (0, n.jsx)(M, { size: d.EFr.SIZE_80 }),
                }),
            }),
        }),
    });
}
function R(e) {
    let { item: t, cardSize: r = j.U.SMALL, remainingCount: l, onClick: s, renderItemPreview: c } = e,
        a = i.useRef(null),
        u = i.useRef(null),
        { isHoveringOrFocusing: f } = (0, g.Z)(u),
        m = !0 === t.isOwned;
    return (0, n.jsx)("div", {
        ref: a,
        className: k.container,
        children: (0, n.jsx)(d.P3F, {
            tag: "div",
            innerRef: u,
            onClick: s,
            className: o()(k.card, k.seeMoreCard, { [k.smallCard]: r === j.U.SMALL }),
            children: (0, n.jsxs)("div", {
                className: o()(k.cardPreview, k.seeMoreCardPreview),
                children: [
                    c(!m && f),
                    (0, n.jsx)("div", {
                        className: k.seeMoreOverlay,
                        children: (0, n.jsx)(d.Text, {
                            variant: "text-md/medium",
                            color: "always-white",
                            children: T.intl.format(T.t.F6iMs4, { count: l }),
                        }),
                    }),
                ],
            }),
        }),
    });
}
function _(e) {
    var t,
        r,
        {
            profileOwner: l,
            showIcons: o = !1,
            source: x = P.lr.WISHLIST,
            giftingOrigin: M = C.Wt.USER_PROFILE_WISHLIST,
            onWishlistItemClick: A,
            cardSize: R = j.U.MEDIUM,
            analyticsLocations: _,
        } = e,
        N = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++)
                    (r = l[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, [
            "profileOwner",
            "showIcons",
            "source",
            "giftingOrigin",
            "onWishlistItemClick",
            "cardSize",
            "analyticsLocations",
        ]);
    let { item: U, isOwner: Z } = N,
        { analyticsLocations: F } = (0, m.ZP)(...(null != _ ? _ : [])),
        H = (0, s.TH)(),
        W = i.useRef(null),
        { isHoveringOrFocusing: D } = (0, g.Z)(W),
        [z] = (0, u.Wu)([y.Z], () => [y.Z.hasSentGift(U.skuId, l.id)], [U.skuId, l.id]),
        G = z || !0 === U.isOwned,
        B = null != U.bundleItems && U.bundleItems.length > 0,
        q = (() => {
            if (B) return T.intl.formatToPlainString(T.t["/l2CAE"], { itemName: U.skuName });
            let e = U.collectiblesItem.type;
            switch (e) {
                case c.Z.AVATAR_DECORATION:
                    return T.intl.formatToPlainString(T.t.IQQYef, { itemName: U.skuName });
                case c.Z.PROFILE_EFFECT:
                    return T.intl.formatToPlainString(T.t["x/MGWy"], { itemName: U.skuName });
                case c.Z.NAMEPLATE:
                    return T.intl.formatToPlainString(T.t.eVNt6E, { itemName: U.skuName });
                default:
                    (0, v.vE)(e);
            }
        })(),
        Q = Z || G ? T.intl.string(T.t.FdGl5A) : T.intl.string(T.t.ilhtIa),
        Y = Z || G ? void 0 : d.OgN,
        V = i.useCallback(() => {
            let e = H.pathname.startsWith(E.Z5c.COLLECTIBLES_SHOP);
            if (Z || G) {
                let t = !Z && G;
                if (e) {
                    let e = h.Z.getProduct(U.skuId),
                        r = h.Z.getCategoryForProduct(U.skuId);
                    if (null != e && null != r) {
                        t || (0, L.closeUserProfileModal)(),
                            (0, O.T)({
                                product: e,
                                category: r,
                                shouldCheckoutWithOrbs: (0, I.oQ)({ product: e }),
                                analyticsLocations: F,
                                analyticsSource: f.Z.USER_PROFILE_WISHLIST,
                                returnRef: void 0,
                                tab: void 0,
                            });
                        return;
                    }
                }
                t || (0, L.closeUserProfileModal)(),
                    (0, S.uL)("".concat(E.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(U.skuId));
            } else
                null == A || A(),
                    (0, b.Z)({
                        skuId: U.skuId,
                        isGift: !0,
                        giftingOrigin: M,
                        analyticsLocations: F,
                        giftRecipient: l,
                        variantsReturnStyle: a.v.VARIANTS_GROUP,
                    });
        }, [H.pathname, U.skuId, F, Z, G, l, M, A]),
        J = i.useCallback(
            () =>
                B || !o
                    ? null
                    : x === P.lr.WISHLIST
                      ? (0, n.jsx)("div", {
                            className: k.itemIcon,
                            children: (0, n.jsx)(d.h_8, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: "currentColor",
                                colorClass: k.itemIconHeart,
                            }),
                        })
                      : x === P.lr.POPULAR
                        ? (0, n.jsx)("div", {
                              className: k.itemIcon,
                              children: (0, n.jsx)(d.YqE, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  colorClass: k.itemIconShop,
                              }),
                          })
                        : null,
            [B, o, x],
        ),
        K = i.useCallback(() => {
            if (B) {
                let e = { items: U.bundleItems };
                return (0, n.jsx)("div", {
                    className: k.bundlePreview,
                    children: (0, n.jsx)(p.U, {
                        product: e,
                        isPurchased: G,
                        isHighlighted: D,
                        user: l,
                    }),
                });
            }
            return (0, n.jsx)(w.Z, {
                item: U,
                profileOwner: l,
                isHighlighted: D,
                cardSize: R,
            });
        }, [B, U, l, G, D, R]);
    return (0, n.jsx)(
        j.Z,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, N)),
        (r = r =
            {
                cardRef: W,
                accessibleLabel: q,
                onCardClick: V,
                buttonCTALabel: Q,
                buttonIcon: Y,
                isOwned: G,
                renderItemPreview: K,
                renderSourceIcon: J,
                giftingOrigin: M,
                source: x,
                cardSize: R,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
}
