n.d(t, {
    o: () => m,
    y: () => p,
});
var a = n(951288),
    r = n(647438),
    l = n(442837),
    i = n(481060),
    o = n(493773),
    s = n(751648),
    c = n(479766),
    d = n(970815);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function m() {
    let e = (0, l.e7)([c.Z], () => c.Z.balancePillOverlay);
    return (
        (0, o.ZP)(() => {
            setTimeout(() => {
                e || (0, s.qD)(!0);
            }, 300);
        }),
        (0, r.useEffect)(
            () => () => {
                !(0, i.$sL)() && e && (0, s.qD)(!1);
            },
            [e],
        ),
        null
    );
}
function p(e) {
    var t,
        n,
        { pillRef: r } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        l = Object.keys(e);
                    for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (a = 0; a < l.length; a++)
                    (n = l[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["pillRef"]);
    let { balancePillOverlay: s } = (0, l.cj)([c.Z], () => ({ balancePillOverlay: c.Z.balancePillOverlay })),
        m = (0, a.jsx)(d.A4, u({ ref: r }, o)),
        p = (0, a.jsx)(
            d.A4,
            ((t = u({}, o)),
            (n = n =
                {
                    isInModalOverlay: !0,
                    disabled: !0,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var a = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, a);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        ),
        h = null != r.current ? r.current.offsetHeight : 36;
    return (0, a.jsx)(i.yRy, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => p,
        position: "bottom",
        align: "right",
        shouldShow: s,
        spacing: -h,
        animation: i.yRy.Animation.NONE,
        targetElementRef: r,
        positionKey: "".concat(o.balance, "-").concat(s),
        children: () => m,
    });
}
