r.d(t, {
    BO: () => R,
    ZP: () => F,
    w_: () => _,
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
    g = r(237031),
    h = r(956472),
    b = r(104505),
    I = r(333867),
    j = r(703656),
    P = r(89196),
    v = r(602733),
    w = r(823379),
    y = r(51144),
    S = r(892001),
    x = r(221300),
    k = r(688192),
    E = r(981631),
    N = r(474936),
    C = r(388032),
    T = r(232644),
    L = r(660097);
let Z = (e) => {
    let { size: t = f.EFr.SIZE_80 } = e;
    return (0, n.jsx)(f.qEK, {
        className: T.placeholderAvatar,
        src: L,
        size: t,
        "aria-label": C.intl.string(C.t.lqaIxI),
    });
};
function _(e) {
    let { surface: t = k.Y.PROFILE_MODAL } = e,
        r = i.useRef(null),
        l = i.useRef(null);
    return (0, n.jsx)("div", {
        ref: r,
        className: T.container,
        children: (0, n.jsx)("div", {
            ref: l,
            className: s()(T.card, T.placeholderCard, {
                [T.smallCard]: t === k.Y.GIFTING_FLOW,
                [T.largeCard]: t === k.Y.PROFILE_MODAL,
            }),
            children: (0, n.jsx)("div", {
                className: T.cardPreview,
                children: (0, n.jsx)("div", {
                    className: T.avatarDecorationPreview,
                    children: (0, n.jsx)(Z, { size: f.EFr.SIZE_80 }),
                }),
            }),
        }),
    });
}
function R(e) {
    let { item: t, size: r = "sm", remainingCount: l, onClick: a, renderItemPreview: o } = e,
        c = i.useRef(null),
        u = i.useRef(null),
        { isHoveringOrFocusing: d } = (0, b.Z)(u),
        m = !0 === t.isOwned;
    return (0, n.jsx)("div", {
        ref: c,
        className: T.container,
        children: (0, n.jsx)(f.P3F, {
            tag: "div",
            innerRef: u,
            onClick: a,
            className: s()(T.card, T.seeMoreCard, { [T.smallCard]: "sm" === r }),
            children: (0, n.jsxs)("div", {
                className: s()(T.cardPreview, T.seeMoreCardPreview),
                children: [
                    o(!m && d),
                    (0, n.jsx)("div", {
                        className: T.seeMoreOverlay,
                        children: (0, n.jsx)(f.Text, {
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
function F(e) {
    var t,
        r,
        {
            profileOwner: l,
            showIcons: s = !1,
            source: L = v.lr.WISHLIST,
            giftingOrigin: Z = N.Wt.USER_PROFILE_WISHLIST,
            onWishlistItemClick: _,
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
        D = (0, a.TH)(),
        W = i.useRef(null),
        { isHoveringOrFocusing: H } = (0, b.Z)(W),
        [M] = (0, u.Wu)([P.Z], () => [P.Z.hasSentGift(F.skuId, l.id)], [F.skuId, l.id]),
        U = M || !0 === F.isOwned,
        z = F.collectiblesItem.type,
        B = (() => {
            switch (z) {
                case o.Z.AVATAR_DECORATION:
                    return C.intl.formatToPlainString(C.t.IQQYef, { itemName: F.skuName });
                case o.Z.PROFILE_EFFECT:
                    return C.intl.formatToPlainString(C.t["x/MGWy"], { itemName: F.skuName });
                case o.Z.NAMEPLATE:
                    return C.intl.formatToPlainString(C.t.eVNt6E, { itemName: F.skuName });
                default:
                    (0, w.vE)(z);
            }
        })(),
        Y = A || U ? C.intl.string(C.t.FdGl5A) : C.intl.string(C.t.ilhtIa),
        V = A || U ? void 0 : f.OgN,
        q = i.useCallback(() => {
            let e = D.pathname.startsWith(E.Z5c.COLLECTIBLES_SHOP);
            if (A || U) {
                let t = !A && U;
                if (e) {
                    let e = O.Z.getProduct(F.skuId),
                        r = O.Z.getCategoryForProduct(F.skuId);
                    if (null != e && null != r) {
                        t || (0, S.closeUserProfileModal)(),
                            (0, g.T)({
                                product: e,
                                category: r,
                                shouldCheckoutWithOrbs: (0, h.oQ)({ product: e }),
                                analyticsLocations: G,
                                analyticsSource: m.Z.USER_PROFILE_WISHLIST,
                                returnRef: void 0,
                                tab: void 0,
                            });
                        return;
                    }
                }
                t || (0, S.closeUserProfileModal)(),
                    (0, j.uL)("".concat(E.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(F.skuId));
            } else
                null == _ || _(),
                    (0, I.Z)({
                        skuId: F.skuId,
                        isGift: !0,
                        giftingOrigin: Z,
                        analyticsLocations: G,
                        giftRecipient: l,
                        variantsReturnStyle: c.v.VARIANTS_GROUP,
                    });
        }, [D.pathname, F.skuId, G, A, U, l, Z, _]),
        K = i.useCallback(
            () =>
                s
                    ? L === v.lr.WISHLIST
                        ? (0, n.jsx)("div", {
                              className: T.itemIcon,
                              children: (0, n.jsx)(d.u, {
                                  text: C.intl.formatToPlainString(C.t.p3RmJF, { username: y.ZP.getName(l) }),
                                  position: "top",
                                  children: (0, n.jsx)(f.h_8, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                      colorClass: T.itemIconHeart,
                                  }),
                              }),
                          })
                        : L === v.lr.POPULAR
                          ? (0, n.jsx)("div", {
                                className: T.itemIcon,
                                children: (0, n.jsx)(d.u, {
                                    text: C.intl.string(C.t.Ig6VDH),
                                    position: "top",
                                    children: (0, n.jsx)(f.YqE, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: "currentColor",
                                        colorClass: T.itemIconShop,
                                    }),
                                }),
                            })
                          : null
                    : null,
            [s, L, l],
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
        k.Z,
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
                onCardClick: q,
                buttonCTALabel: Y,
                buttonIcon: V,
                isOwned: U,
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
