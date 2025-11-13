r.d(t, { Z: () => j }), r(388685);
var n = r(951288),
    i = r(647438),
    l = r(442837),
    s = r(681715),
    o = r(481060),
    a = r(100527),
    c = r(835473),
    u = r(892001),
    f = r(688192),
    d = r(89196),
    O = r(51144),
    p = r(436585),
    b = r(594914),
    m = r(848118),
    g = r(474936),
    I = r(388032),
    y = r(63602);
function j(e) {
    var t,
        r,
        { profileOwner: j, showIcons: h = !1 } = e,
        P = (function (e, t) {
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
        })(e, ["profileOwner", "showIcons"]);
    let { item: S, isOwner: v, giftingOrigin: w = g.Wt.USER_PROFILE_WISHLIST } = P,
        k = S.sku,
        x = k.applicationId,
        C = (0, c.q)(x),
        T = i.useRef(null),
        [E] = (0, l.Wu)([d.Z], () => [d.Z.hasSentGift(S.skuId, j.id)], [S.skuId, j.id]),
        N = S.skuName,
        R = v ? I.intl.string(I.t.FdGl5A) : I.intl.string(I.t.ilhtIa),
        Z = v ? void 0 : o.OgN,
        L = i.useCallback(() => {
            if (v && (null == C ? void 0 : C.guildId) != null)
                (0, u.closeUserProfileModal)(),
                    (0, p.g)({
                        skuId: k.id,
                        applicationId: C.id,
                        guildId: C.guildId,
                        isStorefront: !1,
                    });
            else {
                if (E) return;
                (0, b.P)(
                    k,
                    {
                        isGift: !0,
                        giftRecipient: j,
                        giftingOrigin: w,
                    },
                    { analyticsLocations: [a.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
            }
        }, [v, C, E, k, j, w]),
        _ = i.useCallback(
            () =>
                h
                    ? (0, n.jsx)("div", {
                          className: y.itemIcon,
                          children: (0, n.jsx)(s.u, {
                              text: I.intl.formatToPlainString(I.t.p3RmJF, { username: O.ZP.getName(j) }),
                              position: "top",
                              children: (0, n.jsx)(o.h_8, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  colorClass: y.itemIconHeart,
                              }),
                          }),
                      })
                    : null,
            [h, j],
        ),
        A = i.useCallback(
            () =>
                (0, n.jsx)(m.A, {
                    shape: "custom",
                    containerClassName: y.card,
                    backgroundImageClassName: y.cardBackgroundImage,
                    foregroundImageClassName: y.cardImage,
                    sku: k,
                }),
            [k],
        );
    return (0, n.jsx)(
        f.Z,
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
        })({}, P)),
        (r = r =
            {
                cardRef: T,
                accessibleLabel: N,
                onCardClick: L,
                buttonCTALabel: R,
                buttonIcon: Z,
                isOwned: E,
                renderItemPreview: A,
                renderSourceIcon: _,
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
