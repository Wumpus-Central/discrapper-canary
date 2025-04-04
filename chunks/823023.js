n.d(t, { N: () => b }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(642128),
    a = n(481060),
    s = n(450096),
    l = n(981631),
    c = n(402187);
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
let p = 200,
    h = {
        from: { opacity: 1 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 200 }
    },
    m = _(d({}, h), { config: { duration: 50 } }),
    g = _(d({}, h), { config: (e, t) => (t ? { duration: 800 } : { duration: 200 }) });
function E(e) {
    let { readyState: t, placeholderImg: n, placeholderStyle: s } = e,
        u = t === l.zo9.LOADING,
        [f] = i.useState(() => Date.now()),
        _ = t === l.zo9.READY && Date.now() - f < p,
        g = (0, a.Yzy)(u && null != n, _ ? m : h);
    return (0, r.jsx)(r.Fragment, {
        children: g(
            (e, t) =>
                t &&
                (0, r.jsx)(o.animated.img, {
                    style: d({}, s, e),
                    className: c.imagePlaceholder,
                    src: n,
                    alt: ''
                })
        )
    });
}
function b(e) {
    let { readyState: t, aspectRatio: n, placeholder: u, placeholderVersion: d, placeholderStyle: f, children: _ } = e,
        p = t === l.zo9.LOADING,
        [h] = i.useState(p),
        [m, b] = i.useState(!1),
        y = (0, s.L)(u, d, h);
    i.useEffect(() => {
        let e = setTimeout(() => {
            b(!0);
        }, 2000);
        return () => {
            clearTimeout(e);
        };
    }, [h]);
    let v = (0, a.Yzy)(p && m, g);
    return (0, r.jsxs)('div', {
        className: c.loadingOverlay,
        style: { aspectRatio: n },
        children: [
            _,
            null != y &&
                (0, r.jsx)(E, {
                    readyState: t,
                    placeholderImg: y,
                    placeholderStyle: f
                }),
            v(
                (e, t) =>
                    t &&
                    (0, r.jsx)(o.animated.div, {
                        style: e,
                        className: c.imageLoadingOverlay,
                        children: (0, r.jsx)(a.$jN, {
                            type: a.RAz.SPINNING_CIRCLE_SIMPLE,
                            className: c.cornerLoadingSpinner
                        })
                    })
            )
        ]
    });
}
