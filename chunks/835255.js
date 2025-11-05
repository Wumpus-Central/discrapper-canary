r.d(t, {
    BO: () => R,
    ZP: () => F,
    w_: () => Z,
}),
    r(388685);
var n = r(951288),
    i = r(647438),
    l = r(120356),
    s = r.n(l),
    a = r(843611),
    o = r(979554),
    c = r(311570),
    u = r(442837),
    d = r(681715),
    f = r(481060),
    m = r(100527),
    p = r(906732),
    O = r(597688),
    I = r(237031),
    g = r(956472),
    h = r(104505),
    b = r(333867),
    j = r(703656),
    P = r(89196),
    v = r(602733),
    S = r(823379),
    w = r(51144),
    y = r(892001),
    x = r(221300),
    E = r(688192),
    k = r(981631),
    N = r(474936),
    T = r(388032),
    C = r(232644),
    _ = r(660097);
let L = (e) => {
    let { size: t = f.EFr.SIZE_80 } = e;
    return (0, n.jsx)(f.qEK, {
        className: C.placeholderAvatar,
        src: _,
        size: t,
        "aria-label": T.intl.string(T.t.lqaIxI),
    });
};
function Z(e) {
    let { surface: t = E.Y.PROFILE_MODAL } = e,
        r = i.useRef(null),
        l = i.useRef(null);
    return (0, n.jsx)("div", {
        ref: r,
        className: C.container,
        children: (0, n.jsx)("div", {
            ref: l,
            className: s()(C.card, C.placeholderCard, {
                [C.smallCard]: t === E.Y.GIFTING_FLOW,
                [C.largeCard]: t === E.Y.PROFILE_MODAL,
            }),
            children: (0, n.jsx)("div", {
                className: C.cardPreview,
                children: (0, n.jsx)("div", {
                    className: C.avatarDecorationPreview,
                    children: (0, n.jsx)(L, { size: f.EFr.SIZE_80 }),
                }),
            }),
        }),
    });
}
function R(e) {
    let { item: t, size: r = "sm", remainingCount: l, onClick: a, renderItemPreview: o } = e,
        c = i.useRef(null),
        u = i.useRef(null),
        { isHoveringOrFocusing: d } = (0, h.Z)(u),
        m = !0 === t.isOwned;
    return (0, n.jsx)("div", {
        ref: c,
        className: C.container,
        children: (0, n.jsx)(f.P3F, {
            tag: "div",
            innerRef: u,
            onClick: a,
            className: s()(C.card, C.seeMoreCard, { [C.smallCard]: "sm" === r }),
            children: (0, n.jsxs)("div", {
                className: s()(C.cardPreview, C.seeMoreCardPreview),
                children: [
                    o(!m && d),
                    (0, n.jsx)("div", {
                        className: C.seeMoreOverlay,
                        children: (0, n.jsx)(f.Text, {
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
function F(e) {
    var t,
        r,
        {
            profileOwner: l,
            showIcons: s = !1,
            source: _ = v.lr.WISHLIST,
            giftingOrigin: L = N.Wt.USER_PROFILE_WISHLIST,
            onWishlistItemClick: Z,
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
        })(e, ["profileOwner", "showIcons", "source", "giftingOrigin", "onWishlistItemClick"]);
    let { item: F, isOwner: A } = R,
        { analyticsLocations: G } = (0, p.ZP)(),
        W = (0, a.TH)(),
        D = i.useRef(null),
        { isHoveringOrFocusing: H } = (0, h.Z)(D),
        [M] = (0, u.Wu)([P.Z], () => [P.Z.hasSentGift(F.skuId, l.id)], [F.skuId, l.id]),
        U = M || !0 === F.isOwned,
        z = F.collectiblesItem.type,
        B = (() => {
            switch (z) {
                case o.Z.AVATAR_DECORATION:
                    return T.intl.formatToPlainString(T.t.IQQYef, { itemName: F.skuName });
                case o.Z.PROFILE_EFFECT:
                    return T.intl.formatToPlainString(T.t["x/MGWy"], { itemName: F.skuName });
                case o.Z.NAMEPLATE:
                    return T.intl.formatToPlainString(T.t.eVNt6E, { itemName: F.skuName });
                default:
                    (0, S.vE)(z);
            }
        })(),
        Y = A || U ? T.intl.string(T.t.FdGl5A) : T.intl.string(T.t.ilhtIa),
        V = A || U ? void 0 : f.OgN,
        q = i.useCallback(() => {
            let e = W.pathname.startsWith(k.Z5c.COLLECTIBLES_SHOP);
            if (A || U) {
                let t = !A && U;
                if (e) {
                    let e = O.Z.getProduct(F.skuId),
                        r = O.Z.getCategoryForProduct(F.skuId);
                    if (null != e && null != r) {
                        t || (0, y.closeUserProfileModal)(),
                            (0, I.T)({
                                product: e,
                                category: r,
                                shouldCheckoutWithOrbs: (0, g.oQ)({ product: e }),
                                analyticsLocations: G,
                                analyticsSource: m.Z.USER_PROFILE_WISHLIST,
                                returnRef: void 0,
                                tab: void 0,
                            });
                        return;
                    }
                }
                t || (0, y.closeUserProfileModal)(),
                    (0, j.uL)("".concat(k.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(F.skuId));
            } else
                null == Z || Z(),
                    (0, b.Z)({
                        skuId: F.skuId,
                        isGift: !0,
                        giftingOrigin: L,
                        analyticsLocations: G,
                        giftRecipient: l,
                        variantsReturnStyle: c.v.VARIANTS_GROUP,
                    });
        }, [W.pathname, F.skuId, G, A, U, l, L, Z]),
        K = i.useCallback(
            () =>
                s
                    ? _ === v.lr.WISHLIST
                        ? (0, n.jsx)("div", {
                              className: C.itemIcon,
                              children: (0, n.jsx)(d.u, {
                                  text: T.intl.formatToPlainString(T.t.p3RmJF, { username: w.ZP.getName(l) }),
                                  position: "top",
                                  children: (0, n.jsx)(f.h_8, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                      colorClass: C.itemIconHeart,
                                  }),
                              }),
                          })
                        : _ === v.lr.POPULAR
                          ? (0, n.jsx)("div", {
                                className: C.itemIcon,
                                children: (0, n.jsx)(d.u, {
                                    text: T.intl.string(T.t.Ig6VDH),
                                    position: "top",
                                    children: (0, n.jsx)(f.YqE, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: "currentColor",
                                        colorClass: C.itemIconShop,
                                    }),
                                }),
                            })
                          : null
                    : null,
            [s, _, l],
        ),
        Q = i.useCallback(
            () =>
                (0, n.jsx)(x.Z, {
                    item: F,
                    profileOwner: l,
                    isHighlighted: H,
                    surface: R.surface,
                }),
            [F, l, H, R.surface],
        );
    return (0, n.jsx)(
        E.Z,
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
                cardRef: D,
                accessibleLabel: B,
                onCardClick: q,
                buttonCTALabel: Y,
                buttonIcon: V,
                isOwned: U,
                renderItemPreview: Q,
                renderSourceIcon: K,
                giftingOrigin: L,
                source: _,
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
