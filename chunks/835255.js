n.d(t, { Z: () => E });
var r = n(951288),
    i = n(647438),
    l = n(979554),
    a = n(311570),
    o = n(481060),
    s = n(727637),
    c = n(100527),
    u = n(906732),
    d = n(335131),
    p = n(616066),
    f = n(22267),
    h = n(333867),
    g = n(876917),
    m = n(461631),
    b = n(474936),
    _ = n(388032),
    O = n(988388);
function E(e) {
    let { item: t, profileOwner: n, wishlistId: E, isOwner: y } = e,
        v = i.useRef(null),
        I = (0, s.Z)(v),
        S = t.collectiblesItem,
        { analyticsLocations: C } = (0, u.ZP)(),
        T = () => {
            y
                ? ((0, o.pTH)(),
                  (0, d.mK)({
                      analyticsLocations: C,
                      analyticsSource: c.Z.USER_PROFILE_WISHLIST,
                      openInLayer: !1,
                      initialProductSkuId: t.skuId,
                  }))
                : (0, h.Z)({
                      skuId: t.skuId,
                      isGift: !0,
                      giftingOrigin: b.Wt.USER_PROFILE_WISHLIST,
                      analyticsLocations: C,
                      giftRecipient: n,
                      variantsReturnStyle: a.v.VARIANTS_GROUP,
                  });
        };
    return (0, r.jsxs)("div", {
        className: O.container,
        children: [
            (0, r.jsx)(o.ua7, {
                text: t.skuName,
                children: (e) => {
                    var i, a;
                    return (0, r.jsxs)(
                        o.P3F,
                        ((i = (function (e) {
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
                        })({}, e)),
                        (a = a =
                            {
                                className: O.card,
                                innerRef: v,
                                onClick: T,
                                "aria-label": t.skuName,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: O.cardPreview,
                                        children: (() => {
                                            switch (S.type) {
                                                case l.Z.PROFILE_EFFECT:
                                                    return (0, r.jsx)("div", {
                                                        className: O.profileEffectPreview,
                                                        children: (0, r.jsx)(g.Z, {
                                                            profileEffectId: S.id,
                                                            isHovering: I,
                                                            isPurchased: !1,
                                                            removeSetHeight: !0,
                                                        }),
                                                    });
                                                case l.Z.AVATAR_DECORATION:
                                                    return (0, r.jsx)("div", {
                                                        className: O.avatarDecorationPreview,
                                                        children: (0, r.jsx)(p.R, {
                                                            item: S,
                                                            user: n,
                                                            isHighlighted: I,
                                                            isPurchased: !1,
                                                            avatarSize: o.EFr.SIZE_80,
                                                        }),
                                                    });
                                                case l.Z.NAMEPLATE:
                                                    return (0, r.jsxs)("div", {
                                                        className: O.nameplatePreview,
                                                        children: [
                                                            (0, r.jsx)("div", {
                                                                className: O.nameplateTopLeft,
                                                                children: (0, r.jsx)(f.Z, {
                                                                    user: n,
                                                                    nameplate: S,
                                                                    isHighlighted: I,
                                                                    showPlaceholderUser: !0,
                                                                    showStatus: !0,
                                                                    isPurchased: !1,
                                                                    nameplatePreviewSize: "default",
                                                                    width: 200,
                                                                }),
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                className: O.nameplateBottomRight,
                                                                children: (0, r.jsx)(f.Z, {
                                                                    user: n,
                                                                    nameplate: S,
                                                                    isHighlighted: I,
                                                                    showPlaceholderUser: !0,
                                                                    showStatus: !0,
                                                                    isPurchased: !1,
                                                                    nameplatePreviewSize: "default",
                                                                    width: 200,
                                                                }),
                                                            }),
                                                        ],
                                                    });
                                                default:
                                                    return null;
                                            }
                                        })(),
                                    }),
                                    I &&
                                        (0, r.jsx)("div", {
                                            className: O.overlay,
                                            children: (0, r.jsx)(o.zxk, {
                                                variant: "primary",
                                                size: "sm",
                                                text: _.intl.string(y ? _.t.FdGl5O : _.t.ilhtIS),
                                                icon: y ? void 0 : o.OgN,
                                                onClick: (e) => {
                                                    e.stopPropagation(), T();
                                                },
                                                fullWidth: !0,
                                            }),
                                        }),
                                ],
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        i),
                    );
                },
            }),
            y &&
                (0, r.jsx)(m.Z, {
                    iconSize: "sm",
                    item: t,
                    wishlistId: E,
                    className: O.removeItemButton,
                }),
        ],
    });
}
