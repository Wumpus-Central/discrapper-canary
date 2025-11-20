r.d(t, {
    BO: () => R,
    ZP: () => A,
    w_: () => T,
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
    O = r(906732),
    h = r(597688),
    m = r(237031),
    p = r(956472),
    S = r(104505),
    b = r(333867),
    g = r(703656),
    I = r(89196),
    y = r(602733),
    v = r(823379),
    P = r(892001),
    j = r(221300),
    w = r(688192),
    E = r(981631),
    L = r(474936),
    C = r(388032),
    x = r(232644),
    k = r(660097);
let M = (e) => {
    let { size: t = d.EFr.SIZE_80 } = e;
    return (0, n.jsx)(d.qEK, {
        className: x.placeholderAvatar,
        src: k,
        size: t,
        "aria-label": C.intl.string(C.t.lqaIxI),
    });
};
function T(e) {
    let { cardSize: t = w.U.MEDIUM } = e,
        r = i.useRef(null),
        l = i.useRef(null);
    return (0, n.jsx)("div", {
        ref: r,
        className: x.container,
        children: (0, n.jsx)("div", {
            ref: l,
            className: o()(x.card, x.placeholderCard, {
                [x.smallCard]: t === w.U.SMALL,
                [x.largeCard]: t === w.U.LARGE,
            }),
            children: (0, n.jsx)("div", {
                className: x.cardPreview,
                children: (0, n.jsx)("div", {
                    className: x.avatarDecorationPreview,
                    children: (0, n.jsx)(M, { size: d.EFr.SIZE_80 }),
                }),
            }),
        }),
    });
}
function R(e) {
    let { item: t, cardSize: r = w.U.SMALL, remainingCount: l, onClick: s, renderItemPreview: c } = e,
        a = i.useRef(null),
        u = i.useRef(null),
        { isHoveringOrFocusing: f } = (0, S.Z)(u),
        O = !0 === t.isOwned;
    return (0, n.jsx)("div", {
        ref: a,
        className: x.container,
        children: (0, n.jsx)(d.P3F, {
            tag: "div",
            innerRef: u,
            onClick: s,
            className: o()(x.card, x.seeMoreCard, { [x.smallCard]: r === w.U.SMALL }),
            children: (0, n.jsxs)("div", {
                className: o()(x.cardPreview, x.seeMoreCardPreview),
                children: [
                    c(!O && f),
                    (0, n.jsx)("div", {
                        className: x.seeMoreOverlay,
                        children: (0, n.jsx)(d.Text, {
                            variant: "text-md/medium",
                            color: "always-white",
                            children: C.intl.format(C.t.F6iMs4, { count: l }),
                        }),
                    }),
                ],
            }),
        }),
    });
}
function A(e) {
    var t,
        r,
        {
            profileOwner: l,
            showIcons: o = !1,
            source: k = y.lr.WISHLIST,
            giftingOrigin: M = L.Wt.USER_PROFILE_WISHLIST,
            onWishlistItemClick: T,
            cardSize: R = w.U.MEDIUM,
        } = e,
        A = (function (e, t) {
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
    let { item: _, isOwner: N } = A,
        { analyticsLocations: Z } = (0, O.ZP)(),
        U = (0, s.TH)(),
        F = i.useRef(null),
        { isHoveringOrFocusing: H } = (0, S.Z)(F),
        [z] = (0, u.Wu)([I.Z], () => [I.Z.hasSentGift(_.skuId, l.id)], [_.skuId, l.id]),
        D = z || !0 === _.isOwned,
        W = _.collectiblesItem.type,
        G = (() => {
            switch (W) {
                case c.Z.AVATAR_DECORATION:
                    return C.intl.formatToPlainString(C.t.IQQYef, { itemName: _.skuName });
                case c.Z.PROFILE_EFFECT:
                    return C.intl.formatToPlainString(C.t["x/MGWy"], { itemName: _.skuName });
                case c.Z.NAMEPLATE:
                    return C.intl.formatToPlainString(C.t.eVNt6E, { itemName: _.skuName });
                default:
                    (0, v.vE)(W);
            }
        })(),
        q = N || D ? C.intl.string(C.t.FdGl5A) : C.intl.string(C.t.ilhtIa),
        B = N || D ? void 0 : d.OgN,
        V = i.useCallback(() => {
            let e = U.pathname.startsWith(E.Z5c.COLLECTIBLES_SHOP);
            if (N || D) {
                let t = !N && D;
                if (e) {
                    let e = h.Z.getProduct(_.skuId),
                        r = h.Z.getCategoryForProduct(_.skuId);
                    if (null != e && null != r) {
                        t || (0, P.closeUserProfileModal)(),
                            (0, m.T)({
                                product: e,
                                category: r,
                                shouldCheckoutWithOrbs: (0, p.oQ)({ product: e }),
                                analyticsLocations: Z,
                                analyticsSource: f.Z.USER_PROFILE_WISHLIST,
                                returnRef: void 0,
                                tab: void 0,
                            });
                        return;
                    }
                }
                t || (0, P.closeUserProfileModal)(),
                    (0, g.uL)("".concat(E.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(_.skuId));
            } else
                null == T || T(),
                    (0, b.Z)({
                        skuId: _.skuId,
                        isGift: !0,
                        giftingOrigin: M,
                        analyticsLocations: Z,
                        giftRecipient: l,
                        variantsReturnStyle: a.v.VARIANTS_GROUP,
                    });
        }, [U.pathname, _.skuId, Z, N, D, l, M, T]),
        Y = i.useCallback(
            () =>
                o
                    ? k === y.lr.WISHLIST
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
                        : k === y.lr.POPULAR
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
                          : null
                    : null,
            [o, k],
        ),
        Q = i.useCallback(
            () =>
                (0, n.jsx)(j.Z, {
                    item: _,
                    profileOwner: l,
                    isHighlighted: H,
                    cardSize: R,
                }),
            [_, l, H, R],
        );
    return (0, n.jsx)(
        w.Z,
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
        })({}, A)),
        (r = r =
            {
                cardRef: F,
                accessibleLabel: G,
                onCardClick: V,
                buttonCTALabel: q,
                buttonIcon: B,
                isOwned: D,
                renderItemPreview: Q,
                renderSourceIcon: Y,
                giftingOrigin: M,
                source: k,
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
