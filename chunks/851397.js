r.d(t, { Z: () => y }), r(388685);
var n = r(951288),
    i = r(647438),
    l = r(442837),
    s = r(681715),
    o = r(481060),
    a = r(835473),
    c = r(892001),
    u = r(688192),
    f = r(89196),
    d = r(51144),
    O = r(436585),
    p = r(594914),
    b = r(848118),
    m = r(474936),
    g = r(388032),
    I = r(897986);
function y(e) {
    var t,
        r,
        { profileOwner: y, showIcons: j = !1 } = e,
        h = (function (e, t) {
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
    let { item: P, isOwner: S, giftingOrigin: v = m.Wt.USER_PROFILE_WISHLIST } = h,
        w = P.sku,
        k = w.applicationId,
        x = (0, a.q)(k),
        C = i.useRef(null),
        [E] = (0, l.Wu)([f.Z], () => [f.Z.hasSentGift(P.skuId, y.id)], [P.skuId, y.id]),
        N = P.skuName,
        T = S ? g.intl.string(g.t.FdGl5A) : g.intl.string(g.t.ilhtIa),
        Z = S ? void 0 : o.OgN,
        L = i.useCallback(() => {
            if (S && (null == x ? void 0 : x.guildId) != null)
                (0, c.closeUserProfileModal)(),
                    (0, O.g)({
                        skuId: w.id,
                        applicationId: x.id,
                        guildId: x.guildId,
                        isStorefront: !1,
                    });
            else {
                if (E) return;
                (0, p.P)(w, {
                    isGift: !0,
                    giftRecipient: y,
                    giftingOrigin: v,
                });
            }
        }, [S, x, E, w, y, v]),
        R = i.useCallback(
            () =>
                j
                    ? (0, n.jsx)("div", {
                          className: I.itemIcon,
                          children: (0, n.jsx)(s.u, {
                              text: g.intl.formatToPlainString(g.t.p3RmJF, { username: d.ZP.getName(y) }),
                              position: "top",
                              children: (0, n.jsx)(o.h_8, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  colorClass: I.itemIconHeart,
                              }),
                          }),
                      })
                    : null,
            [j, y],
        ),
        _ = i.useCallback(
            () =>
                (0, n.jsx)(b.A, {
                    shape: "custom",
                    containerClassName: I.card,
                    backgroundImageClassName: I.cardBackgroundImage,
                    foregroundImageClassName: I.cardImage,
                    sku: w,
                }),
            [w],
        );
    return (0, n.jsx)(
        u.Z,
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
        })({}, h)),
        (r = r =
            {
                cardRef: C,
                accessibleLabel: N,
                onCardClick: L,
                buttonCTALabel: T,
                buttonIcon: Z,
                isOwned: E,
                renderItemPreview: _,
                renderSourceIcon: R,
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
