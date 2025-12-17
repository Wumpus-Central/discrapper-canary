n.d(t, { ZP: () => O });
var r = n(54381),
    i = n(473749),
    a = n(60488),
    o = n(934248),
    s = n(780384),
    l = n(410030),
    c = n(663261);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let h = {
        width: 60,
        height: 60,
    },
    g = 3000,
    E = (e) => {
        let { currentAnimationType: t, animationTypeRef: n, onSetAnimationDurationMS: r, play: a, getDuration: o } = e,
            s = o(),
            l = null != s ? 1000 * s : g;
        (0, i.useEffect)(() => {
            null !== t && t !== n.current && ((n.current = t), a());
        }, [t, a, n]),
            (0, i.useEffect)(() => {
                r(l);
            }, [r, l]);
    },
    b = (e) => {
        var { currentAnimationType: t } = e,
            n = _(e, ["currentAnimationType"]);
        let i = (0, o.D)(null != t ? t : "earn"),
            { Component: a } = i;
        return (
            E(d({ currentAnimationType: t }, n, _(i, ["Component"]))),
            (0, r.jsx)(
                a,
                p(d({}, h), {
                    size: "custom",
                    className: c.orbsLottie,
                    useLottieDefaultColors: !0,
                }),
            )
        );
    },
    y = (e) => {
        var { currentAnimationType: t } = e,
            n = _(e, ["currentAnimationType"]);
        let i = (0, a.v)(null != t ? t : "earn"),
            { Component: o } = i;
        return (
            E(d({ currentAnimationType: t }, n, _(i, ["Component"]))),
            (0, r.jsx)(
                o,
                p(d({}, h), {
                    size: "custom",
                    className: c.orbsLottie,
                    useLottieDefaultColors: !0,
                }),
            )
        );
    },
    O = (e) => {
        let t = (0, l.ZP)();
        return (0, s.ap)(t) ? (0, r.jsx)(y, d({}, e)) : (0, r.jsx)(b, d({}, e));
    };
