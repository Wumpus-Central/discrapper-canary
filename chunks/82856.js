r.d(t, {
    o: () => h,
    y: () => O
});
var n = r(255367),
    a = r(73800),
    l = r(442837),
    i = r(481060),
    o = r(493773),
    u = r(819640),
    c = r(751648),
    s = r(479766),
    d = r(970815),
    b = r(981631);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function h() {
    let e = (0, l.e7)([s.Z], () => s.Z.balancePillOverlay);
    return (
        (0, o.ZP)(() => {
            setTimeout(() => {
                e || (0, c.qD)(!0);
            }, 300);
        }),
        (0, a.useEffect)(
            () => () => {
                !(0, i.$sL)() && e && (0, c.qD)(!1);
            },
            [e]
        ),
        null
    );
}
function O(e) {
    var t,
        r,
        { pillRef: o, anchorPillType: c } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) ((r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++) ((r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
            }
            return a;
        })(e, ['pillRef', 'anchorPillType']);
    let { balancePillOverlay: O } = (0, l.cj)([s.Z], () => ({ balancePillOverlay: s.Z.balancePillOverlay })),
        y = (0, n.jsx)(d.A4, f({ ref: o }, h)),
        p = (0, n.jsx)(
            d.A4,
            ((t = f({}, h)),
            (r = r =
                {
                    isInModalOverlay: !0,
                    disabled: !0
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
            t)
        ),
        { isAnyLayerOpen: m, isLastLayerShopFullScreen: C } = (0, l.cj)([u.Z], () => {
            let e = u.Z.getLayers();
            return {
                isLastLayerShopFullScreen: e.length > 0 && e[e.length - 1] === b.S9g.COLLECTIBLES_SHOP,
                isAnyLayerOpen: u.Z.hasLayers()
            };
        }),
        g = a.useMemo(() => !!O && (!m || (C && 'SHOP_FULLSCREEN' === c)), [O, m, C, c]),
        _ = null != o.current ? o.current.offsetHeight : 36;
    return (0, n.jsx)(i.yRy, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => p,
        position: 'bottom',
        align: 'right',
        shouldShow: g,
        spacing: -_,
        animation: i.yRy.Animation.NONE,
        targetElementRef: o,
        positionKey: ''.concat(h.balance, '-').concat(O),
        children: () => y
    });
}
