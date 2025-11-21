n.d(t, { Z: () => x }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(681715),
    a = n(481060),
    s = n(100527),
    c = n(906732),
    u = n(835473),
    d = n(892001),
    f = n(688192),
    p = n(89196),
    h = n(937615),
    g = n(51144),
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
        { profileOwner: x, hideButtonIcon: C = !1, showPrice: E = !1, showIcons: S = !1 } = e,
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
        })(e, ["profileOwner", "hideButtonIcon", "showPrice", "showIcons"]);
    let { item: P, isOwner: N, giftingOrigin: Z = y.Wt.USER_PROFILE_WISHLIST } = I,
        w = P.sku,
        T = w.applicationId,
        A = (0, u.q)(T),
        R = i.useRef(null),
        { analyticsLocations: D } = (0, c.ZP)(s.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        L = (0, l.e7)([p.Z], () => null != x && p.Z.hasSentGift(P.skuId, x.id), [P.skuId, x]),
        M = L || !0 === P.isOwned,
        k = P.skuName,
        {
            buttonCTALabel: G,
            buttonIcon: U,
            handleCardClick: B,
        } = i.useMemo(() => {
            var e, t, n, r, i, l, o, c;
            return N || M
                ? {
                      buttonCTALabel: E
                          ? (0, h.T4)(
                                null != (i = null == (n = w.price) ? void 0 : n.amount) ? i : 0,
                                null != (l = null == (r = w.price) ? void 0 : r.currency) ? l : O.pK.USD,
                            )
                          : v.intl.string(v.t.FdGl5A),
                      buttonIcon: void 0,
                      handleCardClick: () => {
                          (null == A ? void 0 : A.guildId) != null &&
                              ((0, d.closeUserProfileModal)(),
                              (0, m.g)({
                                  skuId: w.id,
                                  applicationId: A.id,
                                  guildId: A.guildId,
                                  isStorefront: !1,
                                  analyticsLocations: D,
                              }));
                      },
                  }
                : {
                      buttonCTALabel: E
                          ? (0, h.T4)(
                                null != (o = null == (e = w.price) ? void 0 : e.amount) ? o : 0,
                                null != (c = null == (t = w.price) ? void 0 : t.currency) ? c : O.pK.USD,
                            )
                          : v.intl.string(v.t.ilhtIa),
                      buttonIcon: C ? void 0 : a.OgN,
                      handleCardClick: () => {
                          L ||
                              ((0, d.closeUserProfileModal)(),
                              (0, b.P)(
                                  w,
                                  {
                                      isGift: !0,
                                      giftRecipient: x,
                                      giftingOrigin: Z,
                                  },
                                  {
                                      analyticsLocations: [...D, s.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON],
                                  },
                              ));
                      },
                  };
        }, [N, M, E, w, C, A, L, x, Z, D]),
        F = i.useCallback(
            () =>
                S
                    ? (0, r.jsx)("div", {
                          className: j.itemIcon,
                          children: (0, r.jsx)(o.u, {
                              text: v.intl.formatToPlainString(v.t.p3RmJF, { username: g.ZP.getName(x) }),
                              position: "top",
                              children: (0, r.jsx)(a.h_8, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  colorClass: j.itemIconHeart,
                              }),
                          }),
                      })
                    : null,
            [S, x],
        ),
        V = i.useCallback(
            () =>
                (0, r.jsx)(_.A, {
                    shape: "custom",
                    containerClassName: j.card,
                    backgroundImageClassName: j.cardBackgroundImage,
                    foregroundImageClassName: j.cardImage,
                    sku: w,
                }),
            [w],
        );
    return (0, r.jsx)(
        f.Z,
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
