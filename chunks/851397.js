n.d(t, { Z: () => j });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(681715),
    a = n(481060),
    s = n(100527),
    c = n(835473),
    u = n(892001),
    d = n(688192),
    p = n(89196),
    f = n(937615),
    h = n(51144),
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
        { profileOwner: j, hideButtonIcon: x = !1, showPrice: C = !1, showIcons: E = !1 } = e,
        S = (function (e, t) {
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
    let { item: I, isOwner: P, giftingOrigin: N = _.Wt.USER_PROFILE_WISHLIST } = S,
        Z = I.sku,
        w = Z.applicationId,
        T = (0, c.q)(w),
        A = i.useRef(null),
        R = (0, l.e7)([p.Z], () => null != j && p.Z.hasSentGift(I.skuId, j.id), [I.skuId, j]),
        D = I.skuName,
        {
            buttonCTALabel: L,
            buttonIcon: M,
            handleCardClick: k,
        } = i.useMemo(() => {
            var e, t, n, r, i, l, o, c;
            return P
                ? {
                      buttonCTALabel: C
                          ? (0, f.T4)(
                                null != (i = null == (n = Z.price) ? void 0 : n.amount) ? i : 0,
                                null != (l = null == (r = Z.price) ? void 0 : r.currency) ? l : y.pK.USD,
                            )
                          : O.intl.string(O.t.FdGl5A),
                      buttonIcon: void 0,
                      handleCardClick: () => {
                          (null == T ? void 0 : T.guildId) != null &&
                              ((0, u.closeUserProfileModal)(),
                              (0, g.g)({
                                  skuId: Z.id,
                                  applicationId: T.id,
                                  guildId: T.guildId,
                                  isStorefront: !1,
                              }));
                      },
                  }
                : {
                      buttonCTALabel: C
                          ? (0, f.T4)(
                                null != (o = null == (e = Z.price) ? void 0 : e.amount) ? o : 0,
                                null != (c = null == (t = Z.price) ? void 0 : t.currency) ? c : y.pK.USD,
                            )
                          : O.intl.string(O.t.ilhtIa),
                      buttonIcon: x ? void 0 : a.OgN,
                      handleCardClick: () => {
                          R ||
                              ((0, u.closeUserProfileModal)(),
                              (0, m.P)(
                                  Z,
                                  {
                                      isGift: !0,
                                      giftRecipient: j,
                                      giftingOrigin: N,
                                  },
                                  { analyticsLocations: [s.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                              ));
                      },
                  };
        }, [C, Z, j, R, N, T, x, P]),
        G = i.useCallback(
            () =>
                E
                    ? (0, r.jsx)("div", {
                          className: v.itemIcon,
                          children: (0, r.jsx)(o.u, {
                              text: O.intl.formatToPlainString(O.t.p3RmJF, { username: h.ZP.getName(j) }),
                              position: "top",
                              children: (0, r.jsx)(a.h_8, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  colorClass: v.itemIconHeart,
                              }),
                          }),
                      })
                    : null,
            [E, j],
        ),
        U = i.useCallback(
            () =>
                (0, r.jsx)(b.A, {
                    shape: "custom",
                    containerClassName: v.card,
                    backgroundImageClassName: v.cardBackgroundImage,
                    foregroundImageClassName: v.cardImage,
                    sku: Z,
                }),
            [Z],
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
        })({}, S)),
        (n = n =
            {
                cardRef: A,
                accessibleLabel: D,
                onCardClick: k,
                buttonCTALabel: L,
                buttonIcon: M,
                isOwned: R,
                renderItemPreview: U,
                renderSourceIcon: G,
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
