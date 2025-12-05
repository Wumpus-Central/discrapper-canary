n.d(t, { Z: () => x }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(481060),
    a = n(100527),
    s = n(906732),
    c = n(835473),
    u = n(892001),
    d = n(688192),
    f = n(89196),
    h = n(602733),
    p = n(937615),
    g = n(705338),
    m = n(436585),
    b = n(594914),
    _ = n(848118),
    y = n(474936),
    O = n(231338),
    v = n(388032),
    j = n(63602);
function x(e) {
    var t,
        n,
        {
            profileOwner: x,
            hideButtonIcon: C = !1,
            showPrice: E = !1,
            showIcons: S = !1,
            source: I = h.lr.WISHLIST,
        } = e,
        P = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["profileOwner", "hideButtonIcon", "showPrice", "showIcons", "source"]);
    let { item: N, isOwner: Z, giftingOrigin: w = y.Wt.USER_PROFILE_WISHLIST } = P,
        T = N.sku,
        A = T.applicationId,
        R = (0, c.q)(A),
        D = i.useRef(null),
        { analyticsLocations: L } = (0, s.ZP)(a.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        M = (0, l.e7)([f.Z], () => null != x && f.Z.hasSentGift(N.skuId, x.id), [N.skuId, x]),
        k = M || !0 === N.isOwned,
        G = N.skuName,
        {
            buttonCTALabel: U,
            buttonIcon: B,
            handleCardClick: F,
        } = i.useMemo(() => {
            var e, t, n, r, i, l, s, c;
            return Z || k
                ? {
                      buttonCTALabel: E
                          ? (0, p.T4)(
                                null != (i = null == (n = T.price) ? void 0 : n.amount) ? i : 0,
                                null != (l = null == (r = T.price) ? void 0 : r.currency) ? l : O.pK.USD,
                            )
                          : v.intl.string(v.t.FdGl5A),
                      buttonIcon: void 0,
                      handleCardClick: () => {
                          (null == R ? void 0 : R.guildId) != null &&
                              (Z
                                  ? ((0, u.closeUserProfileModal)(),
                                    (0, g.default)({
                                        guildId: R.guildId,
                                        skuId: T.id,
                                        slug: T.slug,
                                    }))
                                  : (0, m.g)({
                                        skuId: T.id,
                                        applicationId: R.id,
                                        guildId: R.guildId,
                                        isStorefront: !1,
                                        analyticsLocations: L,
                                    }));
                      },
                  }
                : {
                      buttonCTALabel: E
                          ? (0, p.T4)(
                                null != (s = null == (e = T.price) ? void 0 : e.amount) ? s : 0,
                                null != (c = null == (t = T.price) ? void 0 : t.currency) ? c : O.pK.USD,
                            )
                          : v.intl.string(v.t.ilhtIa),
                      buttonIcon: C ? void 0 : o.OgN,
                      handleCardClick: () => {
                          M ||
                              (0, b.P)(
                                  T,
                                  {
                                      isGift: !0,
                                      giftRecipient: x,
                                      giftingOrigin: w,
                                  },
                                  {
                                      analyticsLocations: [...L, a.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON],
                                  },
                              );
                      },
                  };
        }, [Z, k, E, T, C, R, M, x, w, L]),
        V = i.useCallback(
            () =>
                S
                    ? I === h.lr.WISHLIST
                        ? (0, r.jsx)("div", {
                              className: j.itemIcon,
                              children: (0, r.jsx)(o.h_8, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  colorClass: j.itemIconHeart,
                              }),
                          })
                        : I === h.lr.POPULAR
                          ? (0, r.jsx)("div", {
                                className: j.itemIcon,
                                children: (0, r.jsx)(o.YqE, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: "currentColor",
                                    colorClass: j.itemIconShop,
                                }),
                            })
                          : null
                    : null,
            [S, I],
        ),
        H = i.useCallback(
            () =>
                (0, r.jsx)(_.A, {
                    shape: "custom",
                    containerClassName: j.card,
                    backgroundImageClassName: j.cardBackgroundImage,
                    foregroundImageClassName: j.cardImage,
                    sku: T,
                }),
            [T],
        );
    return (0, r.jsx)(
        d.Z,
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
        })({}, P)),
        (n = n =
            {
                source: I,
                cardRef: D,
                accessibleLabel: G,
                onCardClick: F,
                buttonCTALabel: U,
                buttonIcon: B,
                isOwned: k,
                renderItemPreview: H,
                renderSourceIcon: V,
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
