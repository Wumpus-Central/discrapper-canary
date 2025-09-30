n.d(t, { Z: () => O });
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
    _ = n(988388);
function O(e) {
    let { item: t, profileOwner: n, wishlistId: O, isOwner: E } = e,
        y = i.useRef(null),
        v = (0, s.Z)(y),
        I = t.collectiblesItem,
        { analyticsLocations: S } = (0, u.ZP)();
    return (0, r.jsxs)("div", {
        className: _.container,
        children: [
            (0, r.jsx)(o.ua7, {
                text: t.skuName,
                children: (e) => {
                    var i, s;
                    return (0, r.jsx)(
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
                        (s = s =
                            {
                                className: _.card,
                                innerRef: y,
                                onClick: () => {
                                    E
                                        ? ((0, o.pTH)(),
                                          (0, d.mK)({
                                              analyticsLocations: S,
                                              analyticsSource: c.Z.USER_PROFILE_WISHLIST,
                                              openInLayer: !1,
                                              initialProductSkuId: t.skuId,
                                          }))
                                        : (0, h.Z)({
                                              skuId: t.skuId,
                                              isGift: !0,
                                              giftingOrigin: b.Wt.USER_PROFILE_WISHLIST,
                                              analyticsLocations: S,
                                              giftRecipient: n,
                                              variantsReturnStyle: a.v.VARIANTS_GROUP,
                                          });
                                },
                                "aria-label": t.skuName,
                                children: (0, r.jsx)("div", {
                                    className: _.cardPreview,
                                    children: (() => {
                                        switch (I.type) {
                                            case l.Z.PROFILE_EFFECT:
                                                return (0, r.jsx)("div", {
                                                    className: _.profileEffectPreview,
                                                    children: (0, r.jsx)(g.Z, {
                                                        profileEffectId: I.id,
                                                        isHovering: v,
                                                        isPurchased: !1,
                                                        removeSetHeight: !0,
                                                    }),
                                                });
                                            case l.Z.AVATAR_DECORATION:
                                                return (0, r.jsx)("div", {
                                                    className: _.avatarDecorationPreview,
                                                    children: (0, r.jsx)(p.R, {
                                                        item: I,
                                                        user: n,
                                                        isHighlighted: v,
                                                        isPurchased: !1,
                                                        avatarSize: o.EFr.SIZE_80,
                                                    }),
                                                });
                                            case l.Z.NAMEPLATE:
                                                return (0, r.jsxs)("div", {
                                                    className: _.nameplatePreview,
                                                    children: [
                                                        (0, r.jsx)("div", {
                                                            className: _.nameplateTopLeft,
                                                            children: (0, r.jsx)(f.Z, {
                                                                user: n,
                                                                nameplate: I,
                                                                isHighlighted: v,
                                                                showPlaceholderUser: !0,
                                                                showStatus: !0,
                                                                isPurchased: !1,
                                                                nameplatePreviewSize: "default",
                                                                width: 200,
                                                            }),
                                                        }),
                                                        (0, r.jsx)("div", {
                                                            className: _.nameplateBottomRight,
                                                            children: (0, r.jsx)(f.Z, {
                                                                user: n,
                                                                nameplate: I,
                                                                isHighlighted: v,
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
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        i),
                    );
                },
            }),
            E &&
                (0, r.jsx)(m.Z, {
                    iconSize: "sm",
                    item: t,
                    wishlistId: O,
                    className: _.removeItemButton,
                }),
        ],
    });
}
