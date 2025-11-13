r.d(t, {
    BO: () => _,
    ZP: () => G,
    w_: () => R,
}),
    r(388685);
var n = r(951288),
    i = r(647438),
    l = r(120356),
    s = r.n(l),
    o = r(843611),
    a = r(979554),
    c = r(311570),
    u = r(442837),
    f = r(681715),
    d = r(481060),
    O = r(100527),
    p = r(906732),
    b = r(597688),
    m = r(237031),
    g = r(956472),
    I = r(104505),
    y = r(333867),
    j = r(703656),
    h = r(89196),
    P = r(602733),
    S = r(823379),
    v = r(51144),
    w = r(892001),
    k = r(221300),
    x = r(688192),
    C = r(981631),
    E = r(474936),
    N = r(388032),
    T = r(232644),
    Z = r(660097);
let L = (e) => {
    let { size: t = d.EFr.SIZE_80 } = e;
    return (0, n.jsx)(d.qEK, {
        className: T.placeholderAvatar,
        src: Z,
        size: t,
        "aria-label": N.intl.string(N.t.lqaIxI),
    });
};
function R(e) {
    let { surface: t = x.Y.PROFILE_MODAL } = e,
        r = i.useRef(null),
        l = i.useRef(null);
    return (0, n.jsx)("div", {
        ref: r,
        className: T.container,
        children: (0, n.jsx)("div", {
            ref: l,
            className: s()(T.card, T.placeholderCard, {
                [T.smallCard]: t === x.Y.GIFTING_FLOW,
                [T.largeCard]: t === x.Y.PROFILE_MODAL,
            }),
            children: (0, n.jsx)("div", {
                className: T.cardPreview,
                children: (0, n.jsx)("div", {
                    className: T.avatarDecorationPreview,
                    children: (0, n.jsx)(L, { size: d.EFr.SIZE_80 }),
                }),
            }),
        }),
    });
}
function _(e) {
    let { item: t, size: r = "sm", remainingCount: l, onClick: o, renderItemPreview: a } = e,
        c = i.useRef(null),
        u = i.useRef(null),
        { isHoveringOrFocusing: f } = (0, I.Z)(u),
        O = !0 === t.isOwned;
    return (0, n.jsx)("div", {
        ref: c,
        className: T.container,
        children: (0, n.jsx)(d.P3F, {
            tag: "div",
            innerRef: u,
            onClick: o,
            className: s()(T.card, T.seeMoreCard, { [T.smallCard]: "sm" === r }),
            children: (0, n.jsxs)("div", {
                className: s()(T.cardPreview, T.seeMoreCardPreview),
                children: [
                    a(!O && f),
                    (0, n.jsx)("div", {
                        className: T.seeMoreOverlay,
                        children: (0, n.jsx)(d.Text, {
                            variant: "text-md/medium",
                            color: "always-white",
                            children: N.intl.format(N.t.F6iMs4, { count: l }),
                        }),
                    }),
                ],
            }),
        }),
    });
}
function G(e) {
    var t,
        r,
        {
            profileOwner: l,
            showIcons: s = !1,
            source: Z = P.lr.WISHLIST,
            giftingOrigin: L = E.Wt.USER_PROFILE_WISHLIST,
            onWishlistItemClick: R,
        } = e,
        _ = (function (e, t) {
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
    let { item: G, isOwner: A } = _,
        { analyticsLocations: F } = (0, p.ZP)(),
        D = (0, o.TH)(),
        W = i.useRef(null),
        { isHoveringOrFocusing: H } = (0, I.Z)(W),
        [M] = (0, u.Wu)([h.Z], () => [h.Z.hasSentGift(G.skuId, l.id)], [G.skuId, l.id]),
        U = M || !0 === G.isOwned,
        z = G.collectiblesItem.type,
        q = (() => {
            switch (z) {
                case a.Z.AVATAR_DECORATION:
                    return N.intl.formatToPlainString(N.t.IQQYef, { itemName: G.skuName });
                case a.Z.PROFILE_EFFECT:
                    return N.intl.formatToPlainString(N.t["x/MGWy"], { itemName: G.skuName });
                case a.Z.NAMEPLATE:
                    return N.intl.formatToPlainString(N.t.eVNt6E, { itemName: G.skuName });
                default:
                    (0, S.vE)(z);
            }
        })(),
        B = A || U ? N.intl.string(N.t.FdGl5A) : N.intl.string(N.t.ilhtIa),
        V = A || U ? void 0 : d.OgN,
        Y = i.useCallback(() => {
            let e = D.pathname.startsWith(C.Z5c.COLLECTIBLES_SHOP);
            if (A || U) {
                let t = !A && U;
                if (e) {
                    let e = b.Z.getProduct(G.skuId),
                        r = b.Z.getCategoryForProduct(G.skuId);
                    if (null != e && null != r) {
                        t || (0, w.closeUserProfileModal)(),
                            (0, m.T)({
                                product: e,
                                category: r,
                                shouldCheckoutWithOrbs: (0, g.oQ)({ product: e }),
                                analyticsLocations: F,
                                analyticsSource: O.Z.USER_PROFILE_WISHLIST,
                                returnRef: void 0,
                                tab: void 0,
                            });
                        return;
                    }
                }
                t || (0, w.closeUserProfileModal)(),
                    (0, j.uL)("".concat(C.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(G.skuId));
            } else
                null == R || R(),
                    (0, y.Z)({
                        skuId: G.skuId,
                        isGift: !0,
                        giftingOrigin: L,
                        analyticsLocations: F,
                        giftRecipient: l,
                        variantsReturnStyle: c.v.VARIANTS_GROUP,
                    });
        }, [D.pathname, G.skuId, F, A, U, l, L, R]),
        Q = i.useCallback(
            () =>
                s
                    ? Z === P.lr.WISHLIST
                        ? (0, n.jsx)("div", {
                              className: T.itemIcon,
                              children: (0, n.jsx)(f.u, {
                                  text: N.intl.formatToPlainString(N.t.p3RmJF, { username: v.ZP.getName(l) }),
                                  position: "top",
                                  children: (0, n.jsx)(d.h_8, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                      colorClass: T.itemIconHeart,
                                  }),
                              }),
                          })
                        : Z === P.lr.POPULAR
                          ? (0, n.jsx)("div", {
                                className: T.itemIcon,
                                children: (0, n.jsx)(f.u, {
                                    text: N.intl.string(N.t.Ig6VDH),
                                    position: "top",
                                    children: (0, n.jsx)(d.YqE, {
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
            [s, Z, l],
        ),
        J = i.useCallback(
            () =>
                (0, n.jsx)(k.Z, {
                    item: G,
                    profileOwner: l,
                    isHighlighted: H,
                    surface: _.surface,
                }),
            [G, l, H, _.surface],
        );
    return (0, n.jsx)(
        x.Z,
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
        })({}, _)),
        (r = r =
            {
                cardRef: W,
                accessibleLabel: q,
                onCardClick: Y,
                buttonCTALabel: B,
                buttonIcon: V,
                isOwned: U,
                renderItemPreview: J,
                renderSourceIcon: Q,
                giftingOrigin: L,
                source: Z,
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
