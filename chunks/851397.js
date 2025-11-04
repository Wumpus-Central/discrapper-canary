r.d(t, { Z: () => j }), r(388685);
var n = r(951288),
    i = r(647438),
    l = r(442837),
    s = r(681715),
    a = r(481060),
    o = r(835473),
    c = r(703656),
    u = r(892001),
    d = r(688192),
    f = r(89196),
    m = r(51144),
    p = r(594914),
    O = r(848118),
    g = r(981631),
    h = r(474936),
    I = r(388032),
    b = r(63602);
function j(e) {
    var t,
        r,
        { profileOwner: j, showIcons: P = !1 } = e,
        v = (function (e, t) {
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
    let { item: w, isOwner: y, giftingOrigin: S = h.Wt.USER_PROFILE_WISHLIST } = v,
        x = w.sku,
        E = x.applicationId,
        k = (0, o.q)(E),
        N = i.useRef(null),
        [C] = (0, l.Wu)([f.Z], () => [f.Z.hasSentGift(w.skuId, j.id)], [w.skuId, j.id]),
        T = w.skuName,
        L = y ? I.intl.string(I.t.FdGl5A) : I.intl.string(I.t.ilhtIa),
        _ = y ? void 0 : a.OgN,
        Z = i.useCallback(() => {
            if (y && (null == k ? void 0 : k.guildId) != null)
                (0, u.closeUserProfileModal)(), (0, c.uL)(g.Z5c.CHANNELS_GAME_SHOP(k.guildId, 0, w.skuId, x.slug));
            else {
                if (C) return;
                (0, p.P)(x, {
                    isGift: !0,
                    giftRecipient: j,
                    giftingOrigin: S,
                });
            }
        }, [y, null == k ? void 0 : k.guildId, w.skuId, x, C, j, S]),
        R = i.useCallback(
            () =>
                P
                    ? (0, n.jsx)("div", {
                          className: b.itemIcon,
                          children: (0, n.jsx)(s.u, {
                              text: I.intl.formatToPlainString(I.t.p3RmJF, { username: m.ZP.getName(j) }),
                              position: "top",
                              children: (0, n.jsx)(a.h_8, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  colorClass: b.itemIconHeart,
                              }),
                          }),
                      })
                    : null,
            [P, j],
        ),
        F = i.useCallback(
            () =>
                (0, n.jsx)(O.A, {
                    shape: "custom",
                    containerClassName: b.card,
                    backgroundImageClassName: b.cardBackgroundImage,
                    foregroundImageClassName: b.cardImage,
                    sku: x,
                }),
            [x],
        );
    return (0, n.jsx)(
        d.Z,
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
        })({}, v)),
        (r = r =
            {
                cardRef: N,
                accessibleLabel: T,
                onCardClick: Z,
                buttonCTALabel: L,
                buttonIcon: _,
                isOwned: C,
                renderItemPreview: F,
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
