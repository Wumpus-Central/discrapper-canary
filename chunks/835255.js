r.d(t, {
    Z: () => R,
    w: () => F,
}),
    r(388685);
var n = r(951288),
    i = r(647438),
    l = r(120356),
    s = r.n(l),
    a = r(843611),
    c = r(979554),
    o = r(311570),
    u = r(442837),
    d = r(681715),
    f = r(481060),
    m = r(100527),
    p = r(906732),
    h = r(597688),
    I = r(237031),
    O = r(956472),
    g = r(104505),
    b = r(333867),
    P = r(703656),
    j = r(89196),
    v = r(602733),
    S = r(823379),
    w = r(51144),
    x = r(892001),
    y = r(221300),
    E = r(688192),
    N = r(981631),
    T = r(215023),
    k = r(474936),
    L = r(388032),
    _ = r(232644),
    C = r(660097);
let Z = (e) => {
    let { size: t = f.EFr.SIZE_80 } = e;
    return (0, n.jsx)(f.qEK, {
        className: _.placeholderAvatar,
        src: C,
        size: t,
        "aria-label": L.intl.string(L.t.lqaIxI),
    });
};
function F(e) {
    let { surface: t = E.Y.PROFILE_MODAL } = e,
        r = i.useRef(null),
        l = i.useRef(null);
    return (0, n.jsx)("div", {
        ref: r,
        className: _.container,
        children: (0, n.jsx)("div", {
            ref: l,
            className: s()(_.card, _.placeholderCard, {
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
function R(e) {
    var t,
        r,
        {
            profileOwner: l,
            showIcons: s = !1,
            collectibleSource: C = v.lr.WISHLIST,
            giftingOrigin: Z = k.Wt.USER_PROFILE_WISHLIST,
        } = e,
        F = (function (e, t) {
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
        })(e, ["profileOwner", "showIcons", "collectibleSource", "giftingOrigin"]);
    let { item: R, isOwner: A } = F,
        { analyticsLocations: G } = (0, p.ZP)(),
        D = (0, a.TH)(),
        W = i.useRef(null),
        { isHoveringOrFocusing: H } = (0, g.Z)(W),
        [z] = (0, u.Wu)([j.Z], () => [j.Z.hasSentGift(R.skuId, l.id)], [R.skuId, l.id]),
        M = R.collectiblesItem.type,
        U = (() => {
            switch (M) {
                case c.Z.AVATAR_DECORATION:
                    return L.intl.formatToPlainString(L.t.IQQYef, { itemName: R.skuName });
                case c.Z.PROFILE_EFFECT:
                    return L.intl.formatToPlainString(L.t["x/MGWy"], { itemName: R.skuName });
                case c.Z.NAMEPLATE:
                    return L.intl.formatToPlainString(L.t.eVNt6E, { itemName: R.skuName });
                default:
                    (0, S.vE)(M);
            }
        })(),
        V = A ? L.intl.string(L.t.FdGl5A) : L.intl.string(L.t.ilhtIa),
        Y = A ? void 0 : f.OgN,
        B = i.useCallback(() => {
            let e = D.pathname.startsWith(N.Z5c.COLLECTIBLES_SHOP);
            if (A) {
                if (e) {
                    let e = h.Z.getProduct(R.skuId),
                        t = h.Z.getCategoryForProduct(R.skuId);
                    if (null != e && null != t) {
                        (0, x.closeUserProfileModal)(),
                            (0, I.T)({
                                product: e,
                                category: t,
                                shouldCheckoutWithOrbs: (0, O.oQ)({ product: e }),
                                analyticsLocations: G,
                                analyticsSource: m.Z.USER_PROFILE_WISHLIST,
                                returnRef: void 0,
                                tab: void 0,
                                variantType: T.Ch.DEFAULT,
                            });
                        return;
                    }
                }
                (0, x.closeUserProfileModal)(),
                    (0, P.uL)("".concat(N.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(R.skuId));
            } else {
                if (z) return;
                (0, b.Z)({
                    skuId: R.skuId,
                    isGift: !0,
                    giftingOrigin: Z,
                    analyticsLocations: G,
                    giftRecipient: l,
                    variantsReturnStyle: o.v.VARIANTS_GROUP,
                });
            }
        }, [D.pathname, R.skuId, G, A, z, l, Z]),
        K = i.useCallback(
            () =>
                s
                    ? C === v.lr.WISHLIST
                        ? (0, n.jsx)("div", {
                              className: _.itemIcon,
                              children: (0, n.jsx)(d.u, {
                                  text: L.intl.formatToPlainString(L.t.p3RmJF, { username: w.ZP.getName(l) }),
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
                        : C === v.lr.POPULAR
                          ? (0, n.jsx)("div", {
                                className: _.itemIcon,
                                children: (0, n.jsx)(d.u, {
                                    text: L.intl.string(L.t.Ig6VDH),
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
            [s, C, l],
        ),
        Q = i.useCallback(
            () =>
                (0, n.jsx)(y.Z, {
                    item: R,
                    profileOwner: l,
                    isHighlighted: !z && H,
                    surface: F.surface,
                }),
            [R, l, z, H, F.surface],
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
        })({}, F)),
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
