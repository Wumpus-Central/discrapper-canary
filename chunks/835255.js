r.d(t, {
    BO: () => Z,
    ZP: () => R,
    w_: () => A,
}),
    r(388685);
var n = r(54381),
    i = r(473749),
    l = r(120356),
    o = r.n(l),
    s = r(828700),
    c = r(979554),
    u = r(311570),
    a = r(442837),
    d = r(481060),
    f = r(100527),
    m = r(906732),
    O = r(597688),
    h = r(237031),
    p = r(684263),
    I = r(956472),
    g = r(104505),
    S = r(333867),
    b = r(703656),
    P = r(89196),
    v = r(602733),
    y = r(823379),
    j = r(892001),
    w = r(221300),
    L = r(688192),
    E = r(981631),
    C = r(474936),
    k = r(388032),
    x = r(232644),
    M = r(660097);
let T = (e) => {
    let { size: t = d.EFr.SIZE_80 } = e;
    return (0, n.jsx)(d.qEK, {
        className: x.placeholderAvatar,
        src: M,
        size: t,
        "aria-label": k.intl.string(k.t.lqaIxI),
    });
};
function A(e) {
    let { cardSize: t = L.U.MEDIUM } = e,
        r = i.useRef(null),
        l = i.useRef(null);
    return (0, n.jsx)("div", {
        ref: r,
        className: x.container,
        children: (0, n.jsx)("div", {
            ref: l,
            className: o()(x.card, x.placeholderCard, {
                [x.smallCard]: t === L.U.SMALL,
                [x.largeCard]: t === L.U.LARGE,
            }),
            children: (0, n.jsx)("div", {
                className: x.cardPreview,
                children: (0, n.jsx)("div", {
                    className: x.avatarDecorationPreview,
                    children: (0, n.jsx)(T, { size: d.EFr.SIZE_80 }),
                }),
            }),
        }),
    });
}
function Z(e) {
    let { item: t, cardSize: r = L.U.SMALL, remainingCount: l, onClick: s, renderItemPreview: c } = e,
        u = i.useRef(null),
        a = i.useRef(null),
        { isHoveringOrFocusing: f } = (0, g.Z)(a),
        m = !0 === t.isOwned;
    return (0, n.jsx)("div", {
        ref: u,
        className: x.container,
        children: (0, n.jsx)(d.P3F, {
            tag: "div",
            innerRef: a,
            onClick: s,
            className: o()(x.card, x.seeMoreCard, { [x.smallCard]: r === L.U.SMALL }),
            children: (0, n.jsxs)("div", {
                className: o()(x.cardPreview, x.seeMoreCardPreview),
                children: [
                    c(!m && f),
                    (0, n.jsx)("div", {
                        className: x.seeMoreOverlay,
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
function R(e) {
    var t,
        r,
        {
            profileOwner: l,
            showIcons: o = !1,
            source: M = v.lr.WISHLIST,
            giftingOrigin: T = C.Wt.USER_PROFILE_WISHLIST,
            onWishlistItemClick: A,
            cardSize: Z = L.U.MEDIUM,
        } = e,
        R = (function (e, t) {
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
        })(e, ["profileOwner", "showIcons", "source", "giftingOrigin", "onWishlistItemClick", "cardSize"]);
    let { item: _, isOwner: N } = R,
        { analyticsLocations: U } = (0, m.ZP)(),
        F = (0, s.TH)(),
        H = i.useRef(null),
        { isHoveringOrFocusing: W } = (0, g.Z)(H),
        [D] = (0, a.Wu)([P.Z], () => [P.Z.hasSentGift(_.skuId, l.id)], [_.skuId, l.id]),
        G = D || !0 === _.isOwned,
        z = null != _.bundleItems && _.bundleItems.length > 0,
        B = (() => {
            if (z) return k.intl.formatToPlainString(k.t["/l2CAE"], { itemName: _.skuName });
            let e = _.collectiblesItem.type;
            switch (e) {
                case c.Z.AVATAR_DECORATION:
                    return k.intl.formatToPlainString(k.t.IQQYef, { itemName: _.skuName });
                case c.Z.PROFILE_EFFECT:
                    return k.intl.formatToPlainString(k.t["x/MGWy"], { itemName: _.skuName });
                case c.Z.NAMEPLATE:
                    return k.intl.formatToPlainString(k.t.eVNt6E, { itemName: _.skuName });
                default:
                    (0, y.vE)(e);
            }
        })(),
        q = N || G ? k.intl.string(k.t.FdGl5A) : k.intl.string(k.t.ilhtIa),
        Q = N || G ? void 0 : d.OgN,
        Y = i.useCallback(() => {
            let e = F.pathname.startsWith(E.Z5c.COLLECTIBLES_SHOP);
            if (N || G) {
                let t = !N && G;
                if (e) {
                    let e = O.Z.getProduct(_.skuId),
                        r = O.Z.getCategoryForProduct(_.skuId);
                    if (null != e && null != r) {
                        t || (0, j.closeUserProfileModal)(),
                            (0, h.T)({
                                product: e,
                                category: r,
                                shouldCheckoutWithOrbs: (0, I.oQ)({ product: e }),
                                analyticsLocations: U,
                                analyticsSource: f.Z.USER_PROFILE_WISHLIST,
                                returnRef: void 0,
                                tab: void 0,
                            });
                        return;
                    }
                }
                t || (0, j.closeUserProfileModal)(),
                    (0, b.uL)("".concat(E.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(_.skuId));
            } else
                null == A || A(),
                    (0, S.Z)({
                        skuId: _.skuId,
                        isGift: !0,
                        giftingOrigin: T,
                        analyticsLocations: U,
                        giftRecipient: l,
                        variantsReturnStyle: u.v.VARIANTS_GROUP,
                    });
        }, [F.pathname, _.skuId, U, N, G, l, T, A]),
        V = i.useCallback(
            () =>
                z || !o
                    ? null
                    : M === v.lr.WISHLIST
                      ? (0, n.jsx)("div", {
                            className: x.itemIcon,
                            children: (0, n.jsx)(d.h_8, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: "currentColor",
                                colorClass: x.itemIconHeart,
                            }),
                        })
                      : M === v.lr.POPULAR
                        ? (0, n.jsx)("div", {
                              className: x.itemIcon,
                              children: (0, n.jsx)(d.YqE, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  colorClass: x.itemIconShop,
                              }),
                          })
                        : null,
            [z, o, M],
        ),
        J = i.useCallback(() => {
            if (z) {
                let e = { items: _.bundleItems };
                return (0, n.jsx)("div", {
                    className: x.bundlePreview,
                    children: (0, n.jsx)(p.U, {
                        product: e,
                        isPurchased: G,
                        isHighlighted: W,
                        user: l,
                    }),
                });
            }
            return (0, n.jsx)(w.Z, {
                item: _,
                profileOwner: l,
                isHighlighted: W,
                cardSize: Z,
            });
        }, [z, _, l, G, W, Z]);
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
        })({}, R)),
        (r = r =
            {
                cardRef: H,
                accessibleLabel: B,
                onCardClick: Y,
                buttonCTALabel: q,
                buttonIcon: Q,
                isOwned: G,
                renderItemPreview: J,
                renderSourceIcon: V,
                giftingOrigin: T,
                source: M,
                cardSize: Z,
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
