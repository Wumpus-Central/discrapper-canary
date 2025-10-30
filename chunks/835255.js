r.d(t, {
    BO: () => F,
    ZP: () => A,
    w_: () => R,
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
    h = r(906732),
    p = r(597688),
    O = r(237031),
    I = r(956472),
    g = r(104505),
    v = r(333867),
    P = r(703656),
    b = r(89196),
    j = r(602733),
    S = r(823379),
    w = r(51144),
    x = r(892001),
    y = r(221300),
    E = r(688192),
    T = r(981631),
    N = r(215023),
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
function R(e) {
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
function F(e) {
    let { item: t, size: r = "sm", remainingCount: l, onClick: a, renderItemPreview: c } = e,
        o = i.useRef(null),
        u = i.useRef(null),
        { isHoveringOrFocusing: d } = (0, g.Z)(u),
        m = !0 === t.isOwned;
    return (0, n.jsx)("div", {
        ref: o,
        className: _.container,
        children: (0, n.jsx)(f.P3F, {
            tag: "div",
            innerRef: u,
            onClick: a,
            className: s()(_.card, _.seeMoreCard, { [_.smallCard]: "sm" === r }),
            children: (0, n.jsxs)("div", {
                className: s()(_.cardPreview, _.seeMoreCardPreview),
                children: [
                    c(!m && d),
                    (0, n.jsx)("div", {
                        className: _.seeMoreOverlay,
                        children: (0, n.jsx)(f.Text, {
                            variant: "text-md/medium",
                            color: "always-white",
                            children: L.intl.format(L.t.F6iMs4, { count: l }),
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
            showIcons: s = !1,
            collectibleSource: C = j.lr.WISHLIST,
            giftingOrigin: Z = k.Wt.USER_PROFILE_WISHLIST,
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
        })(e, ["profileOwner", "showIcons", "collectibleSource", "giftingOrigin"]);
    let { item: F, isOwner: A } = R,
        { analyticsLocations: G } = (0, h.ZP)(),
        D = (0, a.TH)(),
        W = i.useRef(null),
        { isHoveringOrFocusing: H } = (0, g.Z)(W),
        [M] = (0, u.Wu)([b.Z], () => [b.Z.hasSentGift(F.skuId, l.id)], [F.skuId, l.id]),
        U = M || !0 === F.isOwned,
        z = F.collectiblesItem.type,
        B = (() => {
            switch (z) {
                case c.Z.AVATAR_DECORATION:
                    return L.intl.formatToPlainString(L.t.IQQYef, { itemName: F.skuName });
                case c.Z.PROFILE_EFFECT:
                    return L.intl.formatToPlainString(L.t["x/MGWy"], { itemName: F.skuName });
                case c.Z.NAMEPLATE:
                    return L.intl.formatToPlainString(L.t.eVNt6E, { itemName: F.skuName });
                default:
                    (0, S.vE)(z);
            }
        })(),
        V = A || U ? L.intl.string(L.t.FdGl5A) : L.intl.string(L.t.ilhtIa),
        Y = A || U ? void 0 : f.OgN,
        K = i.useCallback(() => {
            let e = D.pathname.startsWith(T.Z5c.COLLECTIBLES_SHOP);
            if (A || U) {
                let t = !A && U;
                if (e) {
                    let e = p.Z.getProduct(F.skuId),
                        r = p.Z.getCategoryForProduct(F.skuId);
                    if (null != e && null != r) {
                        t || (0, x.closeUserProfileModal)(),
                            (0, O.T)({
                                product: e,
                                category: r,
                                shouldCheckoutWithOrbs: (0, I.oQ)({ product: e }),
                                analyticsLocations: G,
                                analyticsSource: m.Z.USER_PROFILE_WISHLIST,
                                returnRef: void 0,
                                tab: void 0,
                                variantType: N.Ch.DEFAULT,
                            });
                        return;
                    }
                }
                t || (0, x.closeUserProfileModal)(),
                    (0, P.uL)("".concat(T.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(F.skuId));
            } else
                (0, v.Z)({
                    skuId: F.skuId,
                    isGift: !0,
                    giftingOrigin: Z,
                    analyticsLocations: G,
                    giftRecipient: l,
                    variantsReturnStyle: o.v.VARIANTS_GROUP,
                });
        }, [D.pathname, F.skuId, G, A, U, l, Z]),
        q = i.useCallback(
            () =>
                s
                    ? C === j.lr.WISHLIST
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
                        : C === j.lr.POPULAR
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
                    item: F,
                    profileOwner: l,
                    isHighlighted: !U && H,
                    surface: R.surface,
                }),
            [F, l, U, H, R.surface],
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
                accessibleLabel: B,
                onCardClick: K,
                buttonCTALabel: V,
                buttonIcon: Y,
                isOwned: U,
                renderItemPreview: Q,
                renderSourceIcon: q,
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
