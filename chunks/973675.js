n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(960259),
    o = n(65675),
    a = n(325767);
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
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let p = (0, i.hN)(
    function (e) {
        var { width: t = 6, height: n = 11, color: i = 'currentColor', foreground: o } = e,
            s = d(e, ['width', 'height', 'color', 'foreground']);
        return (0, r.jsx)(
            'svg',
            u(l({}, (0, a.Z)(s)), {
                width: t,
                height: n,
                viewBox: '0 0 6 11',
                children: (0, r.jsxs)('g', {
                    fill: i,
                    fillRule: 'evenodd',
                    className: o,
                    children: [(0, r.jsx)('path', { d: 'M2 4.42007V6.79007L3 7.79007L4 6.79007V4.42007L3.01 3.42007L2 4.42007Z' }), (0, r.jsx)('path', { d: 'M3 0.590088L0 3.59009V7.59009L3 10.5901L6 7.59009V3.59009L3 0.590088ZM5 7.21009L3 9.21009L1 7.21009V4.00009L3 2.00009L5 4.00009V7.21009Z' })]
                })
            })
        );
    },
    o.$,
    void 0,
    { size: 11 }
);
