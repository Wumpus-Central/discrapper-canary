n.d(t, {
    BO: () => Z,
    ZP: () => R,
    w_: () => A,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    o = n(828700),
    c = n(979554),
    s = n(311570),
    u = n(442837),
    d = n(681715),
    f = n(481060),
    g = n(100527),
    p = n(906732),
    m = n(597688),
    b = n(237031),
    h = n(956472),
    y = n(104505),
    O = n(333867),
    v = n(703656),
    j = n(89196),
    x = n(602733),
    _ = n(823379),
    P = n(51144),
    I = n(892001),
    w = n(221300),
    S = n(688192),
    E = n(981631),
    T = n(474936),
    C = n(388032),
    D = n(232644),
    k = n(660097);
let N = (e) => {
    let { size: t = f.EFr.SIZE_80 } = e;
    return (0, r.jsx)(f.qEK, {
        className: D.placeholderAvatar,
        src: k,
        size: t,
        "aria-label": C.intl.string(C.t.lqaIxI),
    });
};
function A(e) {
    let { cardSize: t = S.U.MEDIUM } = e,
        n = i.useRef(null),
        a = i.useRef(null);
    return (0, r.jsx)("div", {
        ref: n,
        className: D.container,
        children: (0, r.jsx)("div", {
            ref: a,
            className: l()(D.card, D.placeholderCard, {
                [D.smallCard]: t === S.U.SMALL,
                [D.largeCard]: t === S.U.LARGE,
            }),
            children: (0, r.jsx)("div", {
                className: D.cardPreview,
                children: (0, r.jsx)("div", {
                    className: D.avatarDecorationPreview,
                    children: (0, r.jsx)(N, { size: f.EFr.SIZE_80 }),
                }),
            }),
        }),
    });
}
function Z(e) {
    let { item: t, cardSize: n = S.U.SMALL, remainingCount: a, onClick: o, renderItemPreview: c } = e,
        s = i.useRef(null),
        u = i.useRef(null),
        { isHoveringOrFocusing: d } = (0, y.Z)(u),
        g = !0 === t.isOwned;
    return (0, r.jsx)("div", {
        ref: s,
        className: D.container,
        children: (0, r.jsx)(f.P3F, {
            tag: "div",
            innerRef: u,
            onClick: o,
            className: l()(D.card, D.seeMoreCard, { [D.smallCard]: n === S.U.SMALL }),
            children: (0, r.jsxs)("div", {
                className: l()(D.cardPreview, D.seeMoreCardPreview),
                children: [
                    c(!g && d),
                    (0, r.jsx)("div", {
                        className: D.seeMoreOverlay,
                        children: (0, r.jsx)(f.Text, {
                            variant: "text-md/medium",
                            color: "always-white",
                            children: C.intl.format(C.t.F6iMs4, { count: a }),
                        }),
                    }),
                ],
            }),
        }),
    });
}
function R(e) {
    var t,
        n,
        {
            profileOwner: a,
            showIcons: l = !1,
            source: k = x.lr.WISHLIST,
            giftingOrigin: N = T.Wt.USER_PROFILE_WISHLIST,
            onWishlistItemClick: A,
            cardSize: Z = S.U.MEDIUM,
        } = e,
        R = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    (n = a[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["profileOwner", "showIcons", "source", "giftingOrigin", "onWishlistItemClick", "cardSize"]);
    let { item: L, isOwner: M } = R,
        { analyticsLocations: G } = (0, p.ZP)(),
        B = (0, o.TH)(),
        U = i.useRef(null),
        { isHoveringOrFocusing: F } = (0, y.Z)(U),
        [W] = (0, u.Wu)([j.Z], () => [j.Z.hasSentGift(L.skuId, a.id)], [L.skuId, a.id]),
        H = W || !0 === L.isOwned,
        z = L.collectiblesItem.type,
        K = (() => {
            switch (z) {
                case c.Z.AVATAR_DECORATION:
                    return C.intl.formatToPlainString(C.t.IQQYef, { itemName: L.skuName });
                case c.Z.PROFILE_EFFECT:
                    return C.intl.formatToPlainString(C.t["x/MGWy"], { itemName: L.skuName });
                case c.Z.NAMEPLATE:
                    return C.intl.formatToPlainString(C.t.eVNt6E, { itemName: L.skuName });
                default:
                    (0, _.vE)(z);
            }
        })(),
        V = M || H ? C.intl.string(C.t.FdGl5A) : C.intl.string(C.t.ilhtIa),
        q = M || H ? void 0 : f.OgN,
        Y = i.useCallback(() => {
            let e = B.pathname.startsWith(E.Z5c.COLLECTIBLES_SHOP);
            if (M || H) {
                let t = !M && H;
                if (e) {
                    let e = m.Z.getProduct(L.skuId),
                        n = m.Z.getCategoryForProduct(L.skuId);
                    if (null != e && null != n) {
                        t || (0, I.closeUserProfileModal)(),
                            (0, b.T)({
                                product: e,
                                category: n,
                                shouldCheckoutWithOrbs: (0, h.oQ)({ product: e }),
                                analyticsLocations: G,
                                analyticsSource: g.Z.USER_PROFILE_WISHLIST,
                                returnRef: void 0,
                                tab: void 0,
                            });
                        return;
                    }
                }
                t || (0, I.closeUserProfileModal)(),
                    (0, v.uL)("".concat(E.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(L.skuId));
            } else
                null == A || A(),
                    (0, O.Z)({
                        skuId: L.skuId,
                        isGift: !0,
                        giftingOrigin: N,
                        analyticsLocations: G,
                        giftRecipient: a,
                        variantsReturnStyle: s.v.VARIANTS_GROUP,
                    });
        }, [B.pathname, L.skuId, G, M, H, a, N, A]),
        X = i.useCallback(
            () =>
                l
                    ? k === x.lr.WISHLIST
                        ? (0, r.jsx)("div", {
                              className: D.itemIcon,
                              children: (0, r.jsx)(d.u, {
                                  text: C.intl.formatToPlainString(C.t.p3RmJF, { username: P.ZP.getName(a) }),
                                  position: "top",
                                  children: (0, r.jsx)(f.h_8, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                      colorClass: D.itemIconHeart,
                                  }),
                              }),
                          })
                        : k === x.lr.POPULAR
                          ? (0, r.jsx)("div", {
                                className: D.itemIcon,
                                children: (0, r.jsx)(d.u, {
                                    text: C.intl.string(C.t.Ig6VDH),
                                    position: "top",
                                    children: (0, r.jsx)(f.YqE, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: "currentColor",
                                        colorClass: D.itemIconShop,
                                    }),
                                }),
                            })
                          : null
                    : null,
            [l, k, a],
        ),
        Q = i.useCallback(
            () =>
                (0, r.jsx)(w.Z, {
                    item: L,
                    profileOwner: a,
                    isHighlighted: F,
                    cardSize: Z,
                }),
            [L, a, F, Z],
        );
    return (0, r.jsx)(
        S.Z,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, R)),
        (n = n =
            {
                cardRef: U,
                accessibleLabel: K,
                onCardClick: Y,
                buttonCTALabel: V,
                buttonIcon: q,
                isOwned: H,
                renderItemPreview: Q,
                renderSourceIcon: X,
                giftingOrigin: N,
                source: k,
                cardSize: Z,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
