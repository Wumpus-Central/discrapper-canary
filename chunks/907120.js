n.d(t, { N: () => h });
var r = n(200651);
n(192379);
var i = n(331595),
    o = n(249849);
function a(e, t, n) {
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
function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = d(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let f = ['#4a8359', '#7fb134', '#bcef42', '#f0f0f0'],
    _ = [0.1, 0.2, 0.6, 0.9],
    p = [
        {
            base: 4,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        },
        {
            base: 10,
            tint: 1
        }
    ],
    h = (e) => {
        var { width: t = 24, height: n = 24, primaryTintColor: a } = e,
            l = u(e, ['width', 'height', 'primaryTintColor']);
        let { primaryColorsTransformed: d } = (0, o.s)({
            primaryBaseColors: f,
            primaryTintColor: a,
            primaryTintLuminances: _,
            primaryLuminanceWeights: p
        });
        return (0, r.jsxs)(
            'svg',
            c(s({}, (0, i.Z)(l)), {
                width: t,
                height: n,
                viewBox: '0 0 16 16',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: [
                    (0, r.jsx)('path', {
                        d: 'M15 2V1H9v1H3v5H1v5h12V7h2V2Z',
                        fill: d[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M11 13v-1H5v1h6Z',
                        fill: d[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M15 2V1H9v1h6ZM9 3V2H5v1h4Z',
                        fill: '#fff'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M3 11v1h2v-1H3ZM13 10h-1v2h1v-2ZM15 5h-1v2h1V5ZM14 7h-1v3h1V7Z',
                        fill: d[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M16 1h-1v6h1V1Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M3 9H2v6h1V9Z',
                        fill: d[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M15 0H9v1h6V0ZM11 13H5v1h6v-1ZM9 1H5v1h4V1ZM5 2H3v1h2V2ZM3 3H2v2h1V3ZM1 7H0v5h1v3h1v-3H1V7h1V5H1v2ZM13 12h-2v1h2v-1ZM14 10h-1v2h1v-2h1V7h-1v3ZM4 13h1v-1H3v3h1v-2ZM3 15H2v1h1v-1Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M2 7h1V5H2v2ZM1 9h1V7H1v2ZM5 3H3v2h1V4h1V3Z',
                        fill: '#fff'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M4 8h2V7H4v1ZM6 7h2V6H6v1ZM8 6h2V5H8v1ZM10 5h1V4h-1v1ZM11 4h1V3h-1v1Z',
                        fill: d[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M5 4v1h1V4H5Z',
                        fill: '#fff'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M3 8v1h1V8H3Z',
                        fill: d[0]
                    })
                ]
            })
        );
    };
