r.d(t, { ZP: () => j });
var n = r(951288),
    o = r(647438),
    l = r(60488),
    u = r(934248),
    a = r(780384),
    c = r(410030),
    i = r(647917);
function s(e) {
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
function b(e, t) {
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
function f(e, t) {
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
            (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
    }
    return o;
}
let O = {
        width: 60,
        height: 60,
    },
    p = (e) => {
        let { currentAnimationType: t, animationTypeRef: r, onSetAnimationDurationMS: n, play: l, getDuration: u } = e,
            a = u(),
            c = null != a ? 1000 * a : 3000;
        (0, o.useEffect)(() => {
            null !== t && t !== r.current && ((r.current = t), l());
        }, [t, l, r]),
            (0, o.useEffect)(() => {
                n(c);
            }, [n, c]);
    },
    y = (e) => {
        var { currentAnimationType: t } = e,
            r = f(e, ["currentAnimationType"]);
        let o = (0, u.D)(null != t ? t : "earn"),
            { Component: l } = o;
        return (
            p(s({ currentAnimationType: t }, r, f(o, ["Component"]))),
            (0, n.jsx)(
                l,
                b(s({}, O), {
                    size: "custom",
                    className: i.orbsLottie,
                    useLottieDefaultColors: !0,
                }),
            )
        );
    },
    g = (e) => {
        var { currentAnimationType: t } = e,
            r = f(e, ["currentAnimationType"]);
        let o = (0, l.v)(null != t ? t : "earn"),
            { Component: u } = o;
        return (
            p(s({ currentAnimationType: t }, r, f(o, ["Component"]))),
            (0, n.jsx)(
                u,
                b(s({}, O), {
                    size: "custom",
                    className: i.orbsLottie,
                    useLottieDefaultColors: !0,
                }),
            )
        );
    },
    j = (e) => {
        let t = (0, c.ZP)();
        return (0, a.ap)(t) ? (0, n.jsx)(g, s({}, e)) : (0, n.jsx)(y, s({}, e));
    };
