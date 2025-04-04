n.d(t, {
    D2: () => g,
    ZP: () => O,
    eg: () => E
});
var r = n(200651),
    i = n(192379),
    o = n(60488),
    a = n(934248),
    s = n(780384),
    l = n(410030),
    c = n(738134);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
function _(e, t) {
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
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let m = {
        width: 60,
        height: 60
    },
    g = 3000,
    E = {
        EARN: 0.25,
        SPEND: 0.3
    },
    b = (e) => {
        let { currentAnimationType: t, animationTypeRef: n, onSetAnimationDurationMS: r, play: o, internalLottieRef: a } = e,
            s = null !== a.current ? a.current.getDuration() : null,
            l = null !== s ? 1000 * s : g;
        (0, i.useEffect)(() => {
            null !== t && t !== n.current && ((n.current = t), o());
        }, [t, o, n]),
            (0, i.useEffect)(() => {
                r(l);
            }, [r, l]);
    },
    y = (e) => {
        var { currentAnimationType: t } = e,
            n = p(e, ['currentAnimationType']);
        let i = (0, a.D)(null != t ? t : 'earn'),
            { Component: o } = i;
        return (
            b(d({ currentAnimationType: t }, n, p(i, ['Component']))),
            (0, r.jsx)(
                o,
                _(d({}, m), {
                    size: 'custom',
                    className: c.orbsLottie,
                    useLottieDefaultColors: !0
                })
            )
        );
    },
    v = (e) => {
        var { currentAnimationType: t } = e,
            n = p(e, ['currentAnimationType']);
        let i = (0, o.v)(null != t ? t : 'earn'),
            { Component: a } = i;
        return (
            b(d({ currentAnimationType: t }, n, p(i, ['Component']))),
            (0, r.jsx)(
                a,
                _(d({}, m), {
                    size: 'custom',
                    className: c.orbsLottie,
                    useLottieDefaultColors: !0
                })
            )
        );
    },
    O = (e) => {
        let t = (0, l.ZP)();
        return (0, s.ap)(t) ? (0, r.jsx)(v, d({}, e)) : (0, r.jsx)(y, d({}, e));
    };
