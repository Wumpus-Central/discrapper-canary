n.d(t, {
    HI: () => _,
    gG: () => f,
    hb: () => p
}),
    n(978209);
var r = n(192379),
    i = n(392711),
    o = n.n(i),
    a = n(516373);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = {};
function f() {
    var e, t;
    return null != (t = null == (e = (0, a.D)().favoriteGifs) ? void 0 : e.gifs) ? t : d;
}
function _(e) {
    let t = f();
    return r.useMemo(
        () =>
            o()(t)
                .map((t, n) => {
                    var r;
                    return u(l({}, t), {
                        url: n,
                        src: null != (r = null == e ? void 0 : e(t.src, n)) ? r : t.src
                    });
                })
                .sortBy('order')
                .reverse()
                .value(),
        [t, e]
    );
}
function p(e) {
    return null != f()[e];
}
