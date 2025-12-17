n.d(t, { Z: () => R }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(100527),
    l = n(906732),
    c = n(835473),
    u = n(892001),
    d = n(688192),
    f = n(89196),
    p = n(602733),
    _ = n(937615),
    m = n(705338),
    h = n(436585),
    g = n(594914),
    E = n(848118),
    b = n(474936),
    y = n(231338),
    O = n(388032),
    v = n(256698);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let P = 20;
function R(e) {
    var {
            profileOwner: t,
            additionalUserIds: n,
            hideButtonIcon: S = !1,
            showPrice: T = !1,
            showIcons: N = !1,
            source: R = p.lr.WISHLIST,
            analyticsLocations: w,
        } = e,
        D = A(e, [
            "profileOwner",
            "additionalUserIds",
            "hideButtonIcon",
            "showPrice",
            "showIcons",
            "source",
            "analyticsLocations",
        ]);
    let { item: x, isOwner: L, giftingOrigin: j = b.Wt.USER_PROFILE_WISHLIST } = D,
        M = x.sku,
        k = M.applicationId,
        U = (0, c.q)(k),
        G = i.useRef(null),
        { analyticsLocations: Z } = (0, l.ZP)(...(null != w ? w : []), s.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        F = (0, a.e7)([f.Z], () => null != t && f.Z.hasSentGift(x.skuId, t.id), [x.skuId, t]),
        B = F || !0 === x.isOwned,
        V = x.skuName,
        {
            buttonCTALabel: H,
            buttonIcon: Y,
            handleCardClick: W,
        } = i.useMemo(() => {
            var e, r, i, a, l, c, d, f;
            return L || B
                ? {
                      buttonCTALabel: T
                          ? (0, _.T4)(
                                null != (l = null == (i = M.price) ? void 0 : i.amount) ? l : 0,
                                null != (c = null == (a = M.price) ? void 0 : a.currency) ? c : y.pK.USD,
                            )
                          : O.intl.string(O.t.FdGl5A),
                      buttonIcon: void 0,
                      handleCardClick: () => {
                          (null == U ? void 0 : U.guildId) != null &&
                              (L
                                  ? ((0, u.closeUserProfileModal)(),
                                    (0, m.default)({
                                        guildId: U.guildId,
                                        skuId: M.id,
                                        slug: M.slug,
                                    }))
                                  : (0, h.g)({
                                        skuId: M.id,
                                        applicationId: U.id,
                                        guildId: U.guildId,
                                        isStorefront: !1,
                                        analyticsLocations: Z,
                                    }));
                      },
                  }
                : {
                      buttonCTALabel: T
                          ? (0, _.T4)(
                                null != (d = null == (e = M.price) ? void 0 : e.amount) ? d : 0,
                                null != (f = null == (r = M.price) ? void 0 : r.currency) ? f : y.pK.USD,
                            )
                          : O.intl.string(O.t.ilhtIa),
                      buttonIcon: S ? void 0 : o.OgN,
                      handleCardClick: () => {
                          F ||
                              (0, g.P)(
                                  M,
                                  {
                                      isGift: !0,
                                      giftRecipient: t,
                                      additionalUserIds: n,
                                      giftingOrigin: j,
                                  },
                                  {
                                      analyticsLocations: [...Z, s.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON],
                                  },
                              );
                      },
                  };
        }, [L, B, T, M, S, U, F, t, n, j, Z]),
        K = i.useCallback(
            () =>
                N
                    ? R === p.lr.WISHLIST
                        ? (0, r.jsx)("div", {
                              className: v.itemIcon,
                              children: (0, r.jsx)(o.h_8, {
                                  size: "custom",
                                  width: P,
                                  height: P,
                                  color: "currentColor",
                                  colorClass: v.itemIconHeart,
                              }),
                          })
                        : R === p.lr.POPULAR
                          ? (0, r.jsx)("div", {
                                className: v.itemIcon,
                                children: (0, r.jsx)(o.YqE, {
                                    size: "custom",
                                    width: P,
                                    height: P,
                                    color: "currentColor",
                                    colorClass: v.itemIconShop,
                                }),
                            })
                          : null
                    : null,
            [N, R],
        ),
        z = i.useCallback(
            () =>
                (0, r.jsx)(E.A, {
                    shape: "custom",
                    containerClassName: v.card,
                    backgroundImageClassName: v.cardBackgroundImage,
                    foregroundImageClassName: v.cardImage,
                    sku: M,
                }),
            [M],
        );
    return (0, r.jsx)(
        d.Z,
        C(I({}, D), {
            source: R,
            cardRef: G,
            accessibleLabel: V,
            onCardClick: W,
            buttonCTALabel: H,
            buttonIcon: Y,
            isOwned: B,
            renderItemPreview: z,
            renderSourceIcon: K,
        }),
    );
}
