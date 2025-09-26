n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    l = n(979554),
    a = n(311570),
    o = n(481060),
    s = n(727637),
    c = n(906732),
    u = n(616066),
    d = n(22267),
    p = n(333867),
    f = n(876917),
    h = n(461631),
    g = n(474936),
    m = n(232644);
function b(e) {
    let { item: t, profileOwner: n, wishlistId: b, canEdit: _ } = e,
        O = i.useRef(null),
        E = (0, s.Z)(O),
        y = t.collectiblesItem,
        { analyticsLocations: v } = (0, c.ZP)(),
        I = y.type === l.Z.PROFILE_EFFECT ? y.title : y.label;
    return (0, r.jsxs)("div", {
        className: m.container,
        children: [
            (0, r.jsx)(o.ua7, {
                text: I,
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
                                className: m.card,
                                innerRef: O,
                                onClick: () => {
                                    (0, p.Z)({
                                        skuId: t.skuId,
                                        isGift: !0,
                                        giftingOrigin: g.Wt.USER_PROFILE_WISHLIST,
                                        analyticsLocations: v,
                                        giftRecipient: n,
                                        variantsReturnStyle: a.v.VARIANTS_GROUP,
                                    });
                                },
                                "aria-label": I,
                                children: (0, r.jsx)("div", {
                                    className: m.cardPreview,
                                    children: (() => {
                                        switch (y.type) {
                                            case l.Z.PROFILE_EFFECT:
                                                return (0, r.jsx)("div", {
                                                    className: m.profileEffectPreview,
                                                    children: (0, r.jsx)(f.Z, {
                                                        profileEffectId: y.id,
                                                        isHovering: E,
                                                        isPurchased: !1,
                                                        removeSetHeight: !0,
                                                    }),
                                                });
                                            case l.Z.AVATAR_DECORATION:
                                                return (0, r.jsx)("div", {
                                                    className: m.avatarDecorationPreview,
                                                    children: (0, r.jsx)(u.R, {
                                                        item: y,
                                                        user: n,
                                                        isHighlighted: E,
                                                        isPurchased: !1,
                                                        avatarSize: o.EFr.SIZE_80,
                                                    }),
                                                });
                                            case l.Z.NAMEPLATE:
                                                return (0, r.jsxs)("div", {
                                                    className: m.nameplatePreview,
                                                    children: [
                                                        (0, r.jsx)("div", {
                                                            className: m.nameplateTopLeft,
                                                            children: (0, r.jsx)(d.Z, {
                                                                user: n,
                                                                nameplate: y,
                                                                isHighlighted: E,
                                                                showPlaceholderUser: !0,
                                                                showStatus: !0,
                                                                isPurchased: !1,
                                                                nameplatePreviewSize: "default",
                                                                width: 200,
                                                            }),
                                                        }),
                                                        (0, r.jsx)("div", {
                                                            className: m.nameplateBottomRight,
                                                            children: (0, r.jsx)(d.Z, {
                                                                user: n,
                                                                nameplate: y,
                                                                isHighlighted: E,
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
            _ &&
                (0, r.jsx)(h.Z, {
                    iconSize: "sm",
                    item: t,
                    wishlistId: b,
                    className: m.removeItemButton,
                }),
        ],
    });
}
