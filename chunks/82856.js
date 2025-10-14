r.d(t, {
    o: () => f,
    y: () => p,
});
var n = r(951288),
    o = r(647438),
    l = r(442837),
    u = r(481060),
    a = r(493773),
    c = r(751648),
    i = r(479766),
    s = r(970815);
function b(e) {
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
function f() {
    let e = (0, l.e7)([i.Z], () => i.Z.balancePillOverlay);
    return (
        (0, a.ZP)(() => {
            setTimeout(() => {
                e || (0, c.qD)(!0);
            }, 300);
        }),
        (0, o.useEffect)(
            () => () => {
                !(0, u.$sL)() && e && (0, c.qD)(!1);
            },
            [e],
        ),
        null
    );
}
function p(e) {
    var t,
        r,
        { pillRef: o } = e,
        a = (function (e, t) {
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
        })(e, ["pillRef"]);
    let { balancePillOverlay: c } = (0, l.cj)([i.Z], () => ({ balancePillOverlay: i.Z.balancePillOverlay })),
        f = (0, n.jsx)(s.A4, b({ ref: o }, a)),
        p = (0, n.jsx)(
            s.A4,
            ((t = b({}, a)),
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
        O = null != o.current ? o.current.offsetHeight : 36;
    return (0, n.jsx)(u.yRy, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => p,
        position: "bottom",
        align: "right",
        shouldShow: c,
        spacing: -O,
        animation: u.yRy.Animation.NONE,
        targetElementRef: o,
        positionKey: "".concat(a.balance, "-").concat(c),
        children: () => f,
    });
}
