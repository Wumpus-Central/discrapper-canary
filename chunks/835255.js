n.d(t, { Z: () => v });
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
    m = n(221292),
    b = n(461631),
    _ = n(228168),
    O = n(474936),
    E = n(388032),
    y = n(232644);
function v(e) {
    let { item: t, profileOwner: n, wishlistId: v, isOwner: I } = e,
        S = i.useRef(null),
        C = (0, s.Z)(S),
        T = t.collectiblesItem,
        { analyticsLocations: N } = (0, u.ZP)(),
        j = () => {
            (0, m.Er)({
                wishlistId: v,
                action: _.NW.WISHLIST_ITEM_CLICKED,
                skuId: t.skuId,
                analyticsLocations: N,
            }),
                I
                    ? ((0, o.pTH)(),
                      (0, d.mK)({
                          analyticsLocations: N,
                          analyticsSource: c.Z.USER_PROFILE_WISHLIST,
                          openInLayer: !1,
                          initialProductSkuId: t.skuId,
                      }))
                    : (0, h.Z)({
                          skuId: t.skuId,
                          isGift: !0,
                          giftingOrigin: O.Wt.USER_PROFILE_WISHLIST,
                          analyticsLocations: N,
                          giftRecipient: n,
                          variantsReturnStyle: a.v.VARIANTS_GROUP,
                      });
        };
    return (0, r.jsxs)("div", {
        className: y.container,
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
                                className: y.card,
                                innerRef: S,
                                onClick: j,
                                "aria-label": t.skuName,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: y.cardPreview,
                                        children: (() => {
                                            switch (T.type) {
                                                case l.Z.PROFILE_EFFECT:
                                                    return (0, r.jsx)("div", {
                                                        className: y.profileEffectPreview,
                                                        children: (0, r.jsx)(g.Z, {
                                                            profileEffectId: T.id,
                                                            isHovering: C,
                                                            isPurchased: !1,
                                                            removeSetHeight: !0,
                                                        }),
                                                    });
                                                case l.Z.AVATAR_DECORATION:
                                                    return (0, r.jsx)("div", {
                                                        className: y.avatarDecorationPreview,
                                                        children: (0, r.jsx)(p.R, {
                                                            item: T,
                                                            user: n,
                                                            isHighlighted: C,
                                                            isPurchased: !1,
                                                            avatarSize: o.EFr.SIZE_80,
                                                        }),
                                                    });
                                                case l.Z.NAMEPLATE:
                                                    return (0, r.jsxs)("div", {
                                                        className: y.nameplatePreview,
                                                        children: [
                                                            (0, r.jsx)("div", {
                                                                className: y.nameplateTopLeft,
                                                                children: (0, r.jsx)(f.Z, {
                                                                    user: n,
                                                                    nameplate: T,
                                                                    isHighlighted: C,
                                                                    showPlaceholderUser: !0,
                                                                    showStatus: !0,
                                                                    isPurchased: !1,
                                                                    nameplatePreviewSize: "default",
                                                                    width: 200,
                                                                }),
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                className: y.nameplateBottomRight,
                                                                children: (0, r.jsx)(f.Z, {
                                                                    user: n,
                                                                    nameplate: T,
                                                                    isHighlighted: C,
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
                                    C &&
                                        (0, r.jsx)("div", {
                                            className: y.overlay,
                                            children: (0, r.jsx)(o.zxk, {
                                                variant: "primary",
                                                size: "sm",
                                                text: E.intl.string(I ? E.t.FdGl5O : E.t.ilhtIS),
                                                icon: I ? void 0 : o.OgN,
                                                onClick: (e) => {
                                                    e.stopPropagation(), j();
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
            I &&
                (0, r.jsx)(b.Z, {
                    iconSize: "sm",
                    item: t,
                    wishlistId: v,
                    className: y.removeItemButton,
                }),
        ],
    });
}
