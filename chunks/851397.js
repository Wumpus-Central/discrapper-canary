r.d(t, { Z: () => I }), r(388685);
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
    h = r(388032),
    b = r(63602);
function I(e) {
    var t,
        r,
        { profileOwner: I, showIcons: j = !1 } = e,
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
    let { item: v, isOwner: w } = P,
        y = v.sku,
        S = y.applicationId,
        x = (0, o.q)(S),
        k = i.useRef(null),
        [E] = (0, l.Wu)([f.Z], () => [f.Z.hasSentGift(v.skuId, I.id)], [v.skuId, I.id]),
        N = v.skuName,
        C = w ? h.intl.string(h.t.FdGl5A) : h.intl.string(h.t.ilhtIa),
        T = w ? void 0 : a.OgN,
        L = i.useCallback(() => {
            if (w && (null == x ? void 0 : x.guildId) != null)
                (0, u.closeUserProfileModal)(), (0, c.uL)(g.Z5c.CHANNELS_GAME_SHOP(x.guildId, 0, v.skuId, y.slug));
            else {
                if (E) return;
                (0, p.P)(y, { isGift: !0 });
            }
        }, [w, null == x ? void 0 : x.guildId, v.skuId, y, E]),
        Z = i.useCallback(
            () =>
                j
                    ? (0, n.jsx)("div", {
                          className: b.itemIcon,
                          children: (0, n.jsx)(s.u, {
                              text: h.intl.formatToPlainString(h.t.p3RmJF, { username: m.ZP.getName(I) }),
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
            [j, I],
        ),
        _ = i.useCallback(
            () =>
                (0, n.jsx)(O.A, {
                    shape: "custom",
                    containerClassName: b.card,
                    backgroundImageClassName: b.cardBackgroundImage,
                    foregroundImageClassName: b.cardImage,
                    sku: y,
                }),
            [y],
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
        })({}, P)),
        (r = r =
            {
                cardRef: k,
                accessibleLabel: N,
                onCardClick: L,
                buttonCTALabel: C,
                buttonIcon: T,
                isOwned: E,
                renderItemPreview: _,
                renderSourceIcon: Z,
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
