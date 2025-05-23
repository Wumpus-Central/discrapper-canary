r.d(t, {
    D2: () => h,
    ZP: () => C,
    eg: () => O
});
var n = r(255367),
    a = r(73800),
    l = r(60488),
    i = r(934248),
    o = r(780384),
    u = r(410030),
    c = r(812023);
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var r,
        n,
        a = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = {},
                l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++) (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    }
    return a;
}
let f = {
        width: 60,
        height: 60
    },
    h = 3000,
    O = {
        EARN: 0.25,
        SPEND: 0.3
    },
    y = (e) => {
        let { currentAnimationType: t, animationTypeRef: r, onSetAnimationDurationMS: n, play: l, getDuration: i } = e,
            o = i(),
            u = null != o ? 1000 * o : h;
        (0, a.useEffect)(() => {
            null !== t && t !== r.current && ((r.current = t), l());
        }, [t, l, r]),
            (0, a.useEffect)(() => {
                n(u);
            }, [n, u]);
    },
    p = (e) => {
        var { currentAnimationType: t } = e,
            r = b(e, ['currentAnimationType']);
        let a = (0, i.D)(null != t ? t : 'earn'),
            { Component: l } = a;
        return (
            y(s({ currentAnimationType: t }, r, b(a, ['Component']))),
            (0, n.jsx)(
                l,
                d(s({}, f), {
                    size: 'custom',
                    className: c.orbsLottie,
                    useLottieDefaultColors: !0
                })
            )
        );
    },
    m = (e) => {
        var { currentAnimationType: t } = e,
            r = b(e, ['currentAnimationType']);
        let a = (0, l.v)(null != t ? t : 'earn'),
            { Component: i } = a;
        return (
            y(s({ currentAnimationType: t }, r, b(a, ['Component']))),
            (0, n.jsx)(
                i,
                d(s({}, f), {
                    size: 'custom',
                    className: c.orbsLottie,
                    useLottieDefaultColors: !0
                })
            )
        );
    },
    C = (e) => {
        let t = (0, u.ZP)();
        return (0, o.ap)(t) ? (0, n.jsx)(m, s({}, e)) : (0, n.jsx)(p, s({}, e));
    };
