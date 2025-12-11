n.d(t, { Z: () => x }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    c = n(835473),
    u = n(892001),
    d = n(688192),
    f = n(89196),
    h = n(602733),
    p = n(937615),
    g = n(705338),
    b = n(436585),
    m = n(594914),
    y = n(848118),
    O = n(474936),
    v = n(231338),
    j = n(388032),
    C = n(256698);
function x(e) {
    var t,
        n,
        {
            profileOwner: x,
            hideButtonIcon: E = !1,
            showPrice: S = !1,
            showIcons: I = !1,
            source: _ = h.lr.WISHLIST,
            analyticsLocations: P,
        } = e,
        N = (function (e, t) {
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
        })(e, ["profileOwner", "hideButtonIcon", "showPrice", "showIcons", "source", "analyticsLocations"]);
    let { item: Z, isOwner: w, giftingOrigin: T = O.Wt.USER_PROFILE_WISHLIST } = N,
        A = Z.sku,
        R = A.applicationId,
        D = (0, c.q)(R),
        M = i.useRef(null),
        { analyticsLocations: L } = (0, s.ZP)(...(null != P ? P : []), o.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        k = (0, l.e7)([f.Z], () => null != x && f.Z.hasSentGift(Z.skuId, x.id), [Z.skuId, x]),
        G = k || !0 === Z.isOwned,
        U = Z.skuName,
        {
            buttonCTALabel: B,
            buttonIcon: F,
            handleCardClick: V,
        } = i.useMemo(() => {
            var e, t, n, r, i, l, s, c;
            return w || G
                ? {
                      buttonCTALabel: S
                          ? (0, p.T4)(
                                null != (i = null == (n = A.price) ? void 0 : n.amount) ? i : 0,
                                null != (l = null == (r = A.price) ? void 0 : r.currency) ? l : v.pK.USD,
                            )
                          : j.intl.string(j.t.FdGl5A),
                      buttonIcon: void 0,
                      handleCardClick: () => {
                          (null == D ? void 0 : D.guildId) != null &&
                              (w
                                  ? ((0, u.closeUserProfileModal)(),
                                    (0, g.default)({
                                        guildId: D.guildId,
                                        skuId: A.id,
                                        slug: A.slug,
                                    }))
                                  : (0, b.g)({
                                        skuId: A.id,
                                        applicationId: D.id,
                                        guildId: D.guildId,
                                        isStorefront: !1,
                                        analyticsLocations: L,
                                    }));
                      },
                  }
                : {
                      buttonCTALabel: S
                          ? (0, p.T4)(
                                null != (s = null == (e = A.price) ? void 0 : e.amount) ? s : 0,
                                null != (c = null == (t = A.price) ? void 0 : t.currency) ? c : v.pK.USD,
                            )
                          : j.intl.string(j.t.ilhtIa),
                      buttonIcon: E ? void 0 : a.OgN,
                      handleCardClick: () => {
                          k ||
                              (0, m.P)(
                                  A,
                                  {
                                      isGift: !0,
                                      giftRecipient: x,
                                      giftingOrigin: T,
                                  },
                                  {
                                      analyticsLocations: [...L, o.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON],
                                  },
                              );
                      },
                  };
        }, [w, G, S, A, E, D, k, x, T, L]),
        H = i.useCallback(
            () =>
                I
                    ? _ === h.lr.WISHLIST
                        ? (0, r.jsx)("div", {
                              className: C.itemIcon,
                              children: (0, r.jsx)(a.h_8, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  colorClass: C.itemIconHeart,
                              }),
                          })
                        : _ === h.lr.POPULAR
                          ? (0, r.jsx)("div", {
                                className: C.itemIcon,
                                children: (0, r.jsx)(a.YqE, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: "currentColor",
                                    colorClass: C.itemIconShop,
                                }),
                            })
                          : null
                    : null,
            [I, _],
        ),
        z = i.useCallback(
            () =>
                (0, r.jsx)(y.A, {
                    shape: "custom",
                    containerClassName: C.card,
                    backgroundImageClassName: C.cardBackgroundImage,
                    foregroundImageClassName: C.cardImage,
                    sku: A,
                }),
            [A],
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
        })({}, N)),
        (n = n =
            {
                source: _,
                cardRef: M,
                accessibleLabel: U,
                onCardClick: V,
                buttonCTALabel: B,
                buttonIcon: F,
                isOwned: G,
                renderItemPreview: z,
                renderSourceIcon: H,
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
