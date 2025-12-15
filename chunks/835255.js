r.d(t, {
    BO: () => R,
    ZP: () => N,
    w_: () => _,
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
    p = r(906732),
    O = r(597688),
    I = r(237031),
    m = r(216541),
    g = r(956472),
    b = r(104505),
    S = r(333867),
    h = r(703656),
    y = r(89196),
    P = r(602733),
    v = r(823379),
    w = r(892001),
    j = r(221300),
    L = r(688192),
    E = r(981631),
    C = r(474936),
    k = r(388032),
    T = r(889588),
    x = r(660097);
let A = (e) => {
    let { size: t = d.EFr.SIZE_80 } = e;
    return (0, n.jsx)(d.qEK, {
        className: T.placeholderAvatar,
        src: x,
        size: t,
        "aria-label": k.intl.string(k.t.lqaIxI),
    });
};
function _(e) {
    let { cardSize: t = L.U.MEDIUM } = e,
        r = i.useRef(null),
        l = i.useRef(null);
    return (0, n.jsx)("div", {
        ref: r,
        className: T.container,
        children: (0, n.jsx)("div", {
            ref: l,
            className: o()(T.card, T.placeholderCard, {
                [T.smallCard]: t === L.U.SMALL,
                [T.largeCard]: t === L.U.LARGE,
            }),
            children: (0, n.jsx)("div", {
                className: T.cardPreview,
                children: (0, n.jsx)("div", {
                    className: T.avatarDecorationPreview,
                    children: (0, n.jsx)(A, { size: d.EFr.SIZE_80 }),
                }),
            }),
        }),
    });
}
function R(e) {
    let { item: t, cardSize: r = L.U.SMALL, remainingCount: l, onClick: s, renderItemPreview: c } = e,
        a = i.useRef(null),
        u = i.useRef(null),
        { isHoveringOrFocusing: f } = (0, b.Z)(u),
        p = !0 === t.isOwned;
    return (0, n.jsx)("div", {
        ref: a,
        className: T.container,
        children: (0, n.jsx)(d.P3F, {
            tag: "div",
            innerRef: u,
            onClick: s,
            className: o()(T.card, T.seeMoreCard, { [T.smallCard]: r === L.U.SMALL }),
            children: (0, n.jsxs)("div", {
                className: o()(T.cardPreview, T.seeMoreCardPreview),
                children: [
                    c(!p && f),
                    (0, n.jsx)("div", {
                        className: T.seeMoreOverlay,
                        children: (0, n.jsx)(d.Text, {
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
function N(e) {
    var t,
        r,
        {
            profileOwner: l,
            showIcons: o = !1,
            source: x = P.lr.WISHLIST,
            giftingOrigin: A = C.Wt.USER_PROFILE_WISHLIST,
            onWishlistItemClick: _,
            cardSize: R = L.U.MEDIUM,
            analyticsLocations: N,
            isDragging: M = !1,
        } = e,
        Z = (function (e, t) {
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
            "isDragging",
        ]);
    let { item: D, isOwner: U } = Z,
        { analyticsLocations: G } = (0, p.ZP)(...(null != N ? N : [])),
        H = (0, s.TH)(),
        F = i.useRef(null),
        { isHoveringOrFocusing: W } = (0, b.Z)(F),
        [z] = (0, u.Wu)([y.Z], () => [y.Z.hasSentGift(D.skuId, l.id)], [D.skuId, l.id]),
        B = z || !0 === D.isOwned,
        Y = null != D.bundleItems && D.bundleItems.length > 0,
        q = (() => {
            if (Y) return k.intl.formatToPlainString(k.t["/l2CAE"], { itemName: D.skuName });
            let e = D.collectiblesItem.type;
            switch (e) {
                case c.Z.AVATAR_DECORATION:
                    return k.intl.formatToPlainString(k.t.IQQYef, { itemName: D.skuName });
                case c.Z.PROFILE_EFFECT:
                    return k.intl.formatToPlainString(k.t["x/MGWy"], { itemName: D.skuName });
                case c.Z.NAMEPLATE:
                    return k.intl.formatToPlainString(k.t.eVNt6E, { itemName: D.skuName });
                default:
                    (0, v.vE)(e);
            }
        })(),
        Q = U || B ? k.intl.string(k.t.FdGl5A) : k.intl.string(k.t.ilhtIa),
        V = U || B ? void 0 : d.OgN,
        K = i.useCallback(() => {
            let e = H.pathname.startsWith(E.Z5c.COLLECTIBLES_SHOP);
            if (U || B) {
                let t = !U && B;
                if (e) {
                    let e = O.Z.getProduct(D.skuId),
                        r = O.Z.getCategoryForProduct(D.skuId);
                    if (null != e && null != r) {
                        t || (0, w.closeUserProfileModal)(),
                            (0, I.T)({
                                product: e,
                                category: r,
                                shouldCheckoutWithOrbs: (0, g.oQ)({ product: e }),
                                analyticsLocations: G,
                                analyticsSource: f.Z.USER_PROFILE_WISHLIST,
                                returnRef: void 0,
                                tab: void 0,
                            });
                        return;
                    }
                }
                t || (0, w.closeUserProfileModal)(),
                    (0, h.uL)("".concat(E.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(D.skuId));
            } else
                null == _ || _(),
                    (0, S.Z)({
                        skuId: D.skuId,
                        isGift: !0,
                        giftingOrigin: A,
                        analyticsLocations: G,
                        giftRecipient: l,
                        variantsReturnStyle: a.v.VARIANTS_GROUP,
                    });
        }, [H.pathname, D.skuId, G, U, B, l, A, _]),
        J = i.useCallback(
            () =>
                Y || !o
                    ? null
                    : x === P.lr.WISHLIST
                      ? (0, n.jsx)("div", {
                            className: T.itemIcon,
                            children: (0, n.jsx)(d.h_8, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: "currentColor",
                                colorClass: T.itemIconHeart,
                            }),
                        })
                      : x === P.lr.POPULAR
                        ? (0, n.jsx)("div", {
                              className: T.itemIcon,
                              children: (0, n.jsx)(d.YqE, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  colorClass: T.itemIconShop,
                              }),
                          })
                        : null,
            [Y, o, x],
        ),
        X = i.useCallback(() => {
            if (Y) {
                let e = { items: D.bundleItems };
                return (0, n.jsx)("div", {
                    className: T.bundlePreview,
                    children: (0, n.jsx)(m.d, {
                        product: e,
                        isHighlighted: W && !M,
                        user: l,
                    }),
                });
            }
            return (0, n.jsx)(j.Z, {
                item: D,
                profileOwner: l,
                isHighlighted: W && !M,
                cardSize: R,
            });
        }, [Y, D, l, W, R, M]);
    return (0, n.jsx)(
        L.Z,
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
        })({}, Z)),
        (r = r =
            {
                cardRef: F,
                accessibleLabel: q,
                onCardClick: K,
                buttonCTALabel: Q,
                buttonIcon: V,
                isOwned: B,
                renderItemPreview: X,
                renderSourceIcon: J,
                giftingOrigin: A,
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
