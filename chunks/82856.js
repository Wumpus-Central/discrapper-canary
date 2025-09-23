r.d(t, {
    o: () => p,
    y: () => y,
});
var n = r(951288),
    o = r(647438),
    l = r(442837),
    u = r(481060),
    a = r(493773),
    c = r(819640),
    i = r(751648),
    s = r(479766),
    b = r(970815),
    f = r(981631);
function O(e) {
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
}
function p() {
    let e = (0, l.e7)([s.Z], () => s.Z.balancePillOverlay);
    return (
        (0, a.ZP)(() => {
            setTimeout(() => {
                e || (0, i.qD)(!0);
            }, 300);
        }),
        (0, o.useEffect)(
            () => () => {
                !(0, u.$sL)() && e && (0, i.qD)(!1);
            },
            [e],
        ),
        null
    );
}
function y(e) {
    var t,
        r,
        { pillRef: a, anchorPillType: i } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++)
                    (r = l[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ["pillRef", "anchorPillType"]);
    let { balancePillOverlay: y } = (0, l.cj)([s.Z], () => ({ balancePillOverlay: s.Z.balancePillOverlay })),
        g = (0, n.jsx)(b.A4, O({ ref: a }, p)),
        j = (0, n.jsx)(
            b.A4,
            ((t = O({}, p)),
            (r = r =
                {
                    isInModalOverlay: !0,
                    disabled: !0,
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
        ),
        { isAnyLayerOpen: d, isLastLayerShopFullScreen: m } = (0, l.cj)([c.Z], () => {
            let e = c.Z.getLayers();
            return {
                isLastLayerShopFullScreen: e.length > 0 && e[e.length - 1] === f.S9g.COLLECTIBLES_SHOP,
                isAnyLayerOpen: c.Z.hasLayers(),
            };
        }),
        v = o.useMemo(() => !!y && (!d || (m && "SHOP_FULLSCREEN" === i)), [y, d, m, i]),
        P = null != a.current ? a.current.offsetHeight : 36;
    return (0, n.jsx)(u.yRy, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => j,
        position: "bottom",
        align: "right",
        shouldShow: v,
        spacing: -P,
        animation: u.yRy.Animation.NONE,
        targetElementRef: a,
        positionKey: "".concat(p.balance, "-").concat(y),
        children: () => g,
    });
}
