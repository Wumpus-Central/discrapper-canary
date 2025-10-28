r.d(t, {
    Z: () => F,
    w: () => R,
}),
    r(388685);
var n = r(951288),
    i = r(647438),
    s = r(120356),
    l = r.n(s),
    a = r(843611),
    o = r(979554),
    c = r(311570),
    u = r(442837),
    d = r(681715),
    f = r(481060),
    p = r(100527),
    m = r(906732),
    h = r(597688),
    I = r(237031),
    O = r(956472),
    g = r(104505),
    b = r(333867),
    P = r(703656),
    S = r(89196),
    j = r(602733),
    v = r(823379),
    w = r(51144),
    y = r(892001),
    x = r(221300),
    E = r(688192),
    T = r(981631),
    N = r(215023),
    L = r(474936),
    k = r(388032),
    _ = r(232644),
    C = r(660097);
let Z = (e) => {
    let { size: t = f.EFr.SIZE_80 } = e;
    return (0, n.jsx)(f.qEK, {
        className: _.placeholderAvatar,
        src: C,
        size: t,
        "aria-label": k.intl.string(k.t.lqaIxI),
    });
};
function R(e) {
    let { surface: t = E.Y.PROFILE_MODAL } = e,
        r = i.useRef(null),
        s = i.useRef(null);
    return (0, n.jsx)("div", {
        ref: r,
        className: _.container,
        children: (0, n.jsx)("div", {
            ref: s,
            className: l()(_.card, _.placeholderCard, {
                [_.smallCard]: t === E.Y.GIFTING_FLOW,
                [_.largeCard]: t === E.Y.PROFILE_MODAL,
            }),
            children: (0, n.jsx)("div", {
                className: _.cardPreview,
                children: (0, n.jsx)("div", {
                    className: _.avatarDecorationPreview,
                    children: (0, n.jsx)(Z, { size: f.EFr.SIZE_80 }),
                }),
            }),
        }),
    });
}
function F(e) {
    var t,
        r,
        {
            profileOwner: s,
            showIcons: l = !1,
            collectibleSource: C = j.lr.WISHLIST,
            giftingOrigin: Z = L.Wt.USER_PROFILE_WISHLIST,
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
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++)
                    (r = s[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["profileOwner", "showIcons", "collectibleSource", "giftingOrigin"]);
    let { item: F, isOwner: A } = R,
        { analyticsLocations: G } = (0, m.ZP)(),
        D = (0, a.TH)(),
        W = i.useRef(null),
        { isHoveringOrFocusing: H } = (0, g.Z)(W),
        [z] = (0, u.Wu)([S.Z], () => [S.Z.hasSentGift(F.skuId, s.id)], [F.skuId, s.id]),
        M = F.collectiblesItem.type,
        U = (() => {
            switch (M) {
                case o.Z.AVATAR_DECORATION:
                    return k.intl.formatToPlainString(k.t.IQQYef, { itemName: F.skuName });
                case o.Z.PROFILE_EFFECT:
                    return k.intl.formatToPlainString(k.t["x/MGWy"], { itemName: F.skuName });
                case o.Z.NAMEPLATE:
                    return k.intl.formatToPlainString(k.t.eVNt6E, { itemName: F.skuName });
                default:
                    (0, v.vE)(M);
            }
        })(),
        V = A ? k.intl.string(k.t.FdGl5A) : k.intl.string(k.t.ilhtIa),
        Y = A ? void 0 : f.OgN,
        B = i.useCallback(() => {
            let e = D.pathname.startsWith(T.Z5c.COLLECTIBLES_SHOP);
            if (A) {
                if (e) {
                    let e = h.Z.getProduct(F.skuId),
                        t = h.Z.getCategoryForProduct(F.skuId);
                    if (null != e && null != t) {
                        (0, y.closeUserProfileModal)(),
                            (0, I.T)({
                                product: e,
                                category: t,
                                shouldCheckoutWithOrbs: (0, O.oQ)({ product: e }),
                                analyticsLocations: G,
                                analyticsSource: p.Z.USER_PROFILE_WISHLIST,
                                returnRef: void 0,
                                tab: void 0,
                                variantType: N.Ch.DEFAULT,
                            });
                        return;
                    }
                }
                (0, y.closeUserProfileModal)(),
                    (0, P.uL)("".concat(T.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(F.skuId));
            } else {
                if (z) return;
                (0, b.Z)({
                    skuId: F.skuId,
                    isGift: !0,
                    giftingOrigin: Z,
                    analyticsLocations: G,
                    giftRecipient: s,
                    variantsReturnStyle: c.v.VARIANTS_GROUP,
                });
            }
        }, [D.pathname, F.skuId, G, A, z, s, Z]),
        K = i.useCallback(
            () =>
                l
                    ? C === j.lr.WISHLIST
                        ? (0, n.jsx)("div", {
                              className: _.itemIcon,
                              children: (0, n.jsx)(d.u, {
                                  text: k.intl.formatToPlainString(k.t.p3RmJF, { username: w.ZP.getName(s) }),
                                  position: "top",
                                  children: (0, n.jsx)(f.h_8, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                      colorClass: _.itemIconHeart,
                                  }),
                              }),
                          })
                        : C === j.lr.POPULAR
                          ? (0, n.jsx)("div", {
                                className: _.itemIcon,
                                children: (0, n.jsx)(d.u, {
                                    text: k.intl.string(k.t.Ig6VDH),
                                    position: "top",
                                    children: (0, n.jsx)(f.EOn, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: "currentColor",
                                        colorClass: _.itemIconShop,
                                    }),
                                }),
                            })
                          : null
                    : null,
            [l, C, s],
        ),
        Q = i.useCallback(
            () =>
                (0, n.jsx)(x.Z, {
                    item: F,
                    profileOwner: s,
                    isHighlighted: !z && H,
                    surface: R.surface,
                }),
            [F, s, z, H, R.surface],
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
                cardRef: W,
                accessibleLabel: U,
                onCardClick: B,
                buttonCTALabel: V,
                buttonIcon: Y,
                isOwned: z,
                renderItemPreview: Q,
                renderSourceIcon: K,
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
