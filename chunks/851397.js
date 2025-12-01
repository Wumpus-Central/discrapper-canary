n.d(t, { Z: () => j }), n(388685);
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
    g = n(436585),
    m = n(594914),
    b = n(848118),
    _ = n(474936),
    y = n(231338),
    O = n(388032),
    v = n(63602);
function j(e) {
    var t,
        n,
        {
            profileOwner: j,
            hideButtonIcon: x = !1,
            showPrice: C = !1,
            showIcons: E = !1,
            source: S = h.lr.WISHLIST,
        } = e,
        I = (function (e, t) {
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
    let { item: P, isOwner: N, giftingOrigin: Z = _.Wt.USER_PROFILE_WISHLIST } = I,
        w = P.sku,
        T = w.applicationId,
        A = (0, c.q)(T),
        R = i.useRef(null),
        { analyticsLocations: D } = (0, s.ZP)(a.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        L = (0, l.e7)([f.Z], () => null != j && f.Z.hasSentGift(P.skuId, j.id), [P.skuId, j]),
        M = L || !0 === P.isOwned,
        k = P.skuName,
        {
            buttonCTALabel: G,
            buttonIcon: U,
            handleCardClick: B,
        } = i.useMemo(() => {
            var e, t, n, r, i, l, s, c;
            return N || M
                ? {
                      buttonCTALabel: C
                          ? (0, p.T4)(
                                null != (i = null == (n = w.price) ? void 0 : n.amount) ? i : 0,
                                null != (l = null == (r = w.price) ? void 0 : r.currency) ? l : y.pK.USD,
                            )
                          : O.intl.string(O.t.FdGl5A),
                      buttonIcon: void 0,
                      handleCardClick: () => {
                          (null == A ? void 0 : A.guildId) != null &&
                              ((0, u.closeUserProfileModal)(),
                              (0, g.g)({
                                  skuId: w.id,
                                  applicationId: A.id,
                                  guildId: A.guildId,
                                  isStorefront: !1,
                                  analyticsLocations: D,
                              }));
                      },
                  }
                : {
                      buttonCTALabel: C
                          ? (0, p.T4)(
                                null != (s = null == (e = w.price) ? void 0 : e.amount) ? s : 0,
                                null != (c = null == (t = w.price) ? void 0 : t.currency) ? c : y.pK.USD,
                            )
                          : O.intl.string(O.t.ilhtIa),
                      buttonIcon: x ? void 0 : o.OgN,
                      handleCardClick: () => {
                          L ||
                              ((0, u.closeUserProfileModal)(),
                              (0, m.P)(
                                  w,
                                  {
                                      isGift: !0,
                                      giftRecipient: j,
                                      giftingOrigin: Z,
                                  },
                                  {
                                      analyticsLocations: [...D, a.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON],
                                  },
                              ));
                      },
                  };
        }, [N, M, C, w, x, A, L, j, Z, D]),
        F = i.useCallback(
            () =>
                E
                    ? S === h.lr.WISHLIST
                        ? (0, r.jsx)("div", {
                              className: v.itemIcon,
                              children: (0, r.jsx)(o.h_8, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  colorClass: v.itemIconHeart,
                              }),
                          })
                        : S === h.lr.POPULAR
                          ? (0, r.jsx)("div", {
                                className: v.itemIcon,
                                children: (0, r.jsx)(o.YqE, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: "currentColor",
                                    colorClass: v.itemIconShop,
                                }),
                            })
                          : null
                    : null,
            [E, S],
        ),
        V = i.useCallback(
            () =>
                (0, r.jsx)(b.A, {
                    shape: "custom",
                    containerClassName: v.card,
                    backgroundImageClassName: v.cardBackgroundImage,
                    foregroundImageClassName: v.cardImage,
                    sku: w,
                }),
            [w],
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
        })({}, I)),
        (n = n =
            {
                source: S,
                cardRef: R,
                accessibleLabel: k,
                onCardClick: B,
                buttonCTALabel: G,
                buttonIcon: U,
                isOwned: M,
                renderItemPreview: V,
                renderSourceIcon: F,
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
