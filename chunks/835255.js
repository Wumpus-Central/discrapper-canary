r.d(t, {
    BO: () => R,
    ZP: () => F,
    w_: () => Z,
}),
    r(388685);
var n = r(951288),
    i = r(647438),
    s = r(120356),
    l = r.n(s),
    a = r(843611),
    c = r(979554),
    o = r(311570),
    u = r(442837),
    d = r(681715),
    f = r(481060),
    m = r(100527),
    h = r(906732),
    p = r(597688),
    I = r(237031),
    O = r(956472),
    g = r(104505),
    P = r(333867),
    v = r(703656),
    b = r(89196),
    j = r(602733),
    S = r(823379),
    w = r(51144),
    x = r(892001),
    y = r(221300),
    E = r(688192),
    N = r(981631),
    T = r(474936),
    k = r(388032),
    _ = r(232644),
    L = r(660097);
let C = (e) => {
    let { size: t = f.EFr.SIZE_80 } = e;
    return (0, n.jsx)(f.qEK, {
        className: _.placeholderAvatar,
        src: L,
        size: t,
        "aria-label": k.intl.string(k.t.lqaIxI),
    });
};
function Z(e) {
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
                    children: (0, n.jsx)(C, { size: f.EFr.SIZE_80 }),
                }),
            }),
        }),
    });
}
function R(e) {
    let { item: t, size: r = "sm", remainingCount: s, onClick: a, renderItemPreview: c } = e,
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
            className: l()(_.card, _.seeMoreCard, { [_.smallCard]: "sm" === r }),
            children: (0, n.jsxs)("div", {
                className: l()(_.cardPreview, _.seeMoreCardPreview),
                children: [
                    c(!m && d),
                    (0, n.jsx)("div", {
                        className: _.seeMoreOverlay,
                        children: (0, n.jsx)(f.Text, {
                            variant: "text-md/medium",
                            color: "always-white",
                            children: k.intl.format(k.t.F6iMs4, { count: s }),
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
            profileOwner: s,
            showIcons: l = !1,
            source: L = j.lr.WISHLIST,
            giftingOrigin: C = T.Wt.USER_PROFILE_WISHLIST,
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
        })(e, ["profileOwner", "showIcons", "source", "giftingOrigin"]);
    let { item: R, isOwner: F } = Z,
        { analyticsLocations: A } = (0, h.ZP)(),
        G = (0, a.TH)(),
        D = i.useRef(null),
        { isHoveringOrFocusing: W } = (0, g.Z)(D),
        [H] = (0, u.Wu)([b.Z], () => [b.Z.hasSentGift(R.skuId, s.id)], [R.skuId, s.id]),
        M = H || !0 === R.isOwned,
        U = R.collectiblesItem.type,
        z = (() => {
            switch (U) {
                case c.Z.AVATAR_DECORATION:
                    return k.intl.formatToPlainString(k.t.IQQYef, { itemName: R.skuName });
                case c.Z.PROFILE_EFFECT:
                    return k.intl.formatToPlainString(k.t["x/MGWy"], { itemName: R.skuName });
                case c.Z.NAMEPLATE:
                    return k.intl.formatToPlainString(k.t.eVNt6E, { itemName: R.skuName });
                default:
                    (0, S.vE)(U);
            }
        })(),
        Y = F || M ? k.intl.string(k.t.FdGl5A) : k.intl.string(k.t.ilhtIa),
        B = F || M ? void 0 : f.OgN,
        V = i.useCallback(() => {
            let e = G.pathname.startsWith(N.Z5c.COLLECTIBLES_SHOP);
            if (F || M) {
                let t = !F && M;
                if (e) {
                    let e = p.Z.getProduct(R.skuId),
                        r = p.Z.getCategoryForProduct(R.skuId);
                    if (null != e && null != r) {
                        t || (0, x.closeUserProfileModal)(),
                            (0, I.T)({
                                product: e,
                                category: r,
                                shouldCheckoutWithOrbs: (0, O.oQ)({ product: e }),
                                analyticsLocations: A,
                                analyticsSource: m.Z.USER_PROFILE_WISHLIST,
                                returnRef: void 0,
                                tab: void 0,
                            });
                        return;
                    }
                }
                t || (0, x.closeUserProfileModal)(),
                    (0, v.uL)("".concat(N.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(R.skuId));
            } else
                (0, P.Z)({
                    skuId: R.skuId,
                    isGift: !0,
                    giftingOrigin: C,
                    analyticsLocations: A,
                    giftRecipient: s,
                    variantsReturnStyle: o.v.VARIANTS_GROUP,
                });
        }, [G.pathname, R.skuId, A, F, M, s, C]),
        q = i.useCallback(
            () =>
                l
                    ? L === j.lr.WISHLIST
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
                        : L === j.lr.POPULAR
                          ? (0, n.jsx)("div", {
                                className: _.itemIcon,
                                children: (0, n.jsx)(d.u, {
                                    text: k.intl.string(k.t.Ig6VDH),
                                    position: "top",
                                    children: (0, n.jsx)(f.YqE, {
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
            [l, L, s],
        ),
        K = i.useCallback(
            () =>
                (0, n.jsx)(y.Z, {
                    item: R,
                    profileOwner: s,
                    isHighlighted: W,
                    surface: Z.surface,
                }),
            [R, s, W, Z.surface],
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
        })({}, Z)),
        (r = r =
            {
                cardRef: D,
                accessibleLabel: z,
                onCardClick: V,
                buttonCTALabel: Y,
                buttonIcon: B,
                isOwned: M,
                renderItemPreview: K,
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
