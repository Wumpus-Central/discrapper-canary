n.d(t, { z: () => E });
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
let f = ['#816bee', '#b79cf8', '#f0f0f0'],
    p = ['#6c9ca6', '#9af4dc', '#f0f0f0'],
    _ = [0.07, 0.35, 1],
    h = [
        {
            base: 4,
            tint: 1
        },
        {
            base: 1,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        },
        {
            base: 6,
            tint: 1
        }
    ],
    m = [0.2, 0.75, 1],
    g = [
        {
            base: 2,
            tint: 1
        },
        {
            base: 1,
            tint: 1
        },
        {
            base: 6,
            tint: 1
        }
    ],
    E = (e) => {
        var { width: t = 24, height: n = 24, primaryTintColor: a, secondaryTintColor: l } = e,
            d = u(e, ['width', 'height', 'primaryTintColor', 'secondaryTintColor']);
        let { primaryColorsTransformed: E, secondaryColorsTransformed: v } = (0, o.s)({
            primaryBaseColors: f,
            primaryTintColor: a,
            primaryTintLuminances: _,
            primaryLuminanceWeights: h,
            secondaryBaseColors: p,
            secondaryTintColor: l,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: g
        });
        return (0, r.jsxs)(
            'svg',
            c(s({}, (0, i.Z)(d)), {
                width: t,
                height: n,
                viewBox: '0 0 16 16',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: [
                    (0, r.jsx)('path', {
                        d: 'M14 4V3h-2V1H8v1H7v1H6V2H3v1H2v4H1v3h1V9h1V8h5V6h1V5h5v1h1V4h-1Z',
                        fill: E[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M9 6v1H8v2h1v2h2v1h3v-1h1V6H9Z',
                        fill: v[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M4 10v4h1v1h3v-1h1v-4H4Z',
                        fill: v[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M8 14H5v1h3v-1ZM14 11h-3v1h3v-1ZM15 10h-1v1h1v-1ZM9 13H8v1h1v-1Z',
                        fill: v[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M9 7H8v1h1V7ZM11 8h-1v1h1V8ZM14 6H9v1h5V6Z',
                        fill: v[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M8 1H7v1h1V1ZM15 3h-1v1h1V3ZM14 8h-1v2h1V8ZM9 6H8v1h1V6Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M9 5H8v1h1V5Z',
                        fill: E[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M3 9H2v1h1V9ZM7 13H6v1h1v-1ZM6 12H5v1h1v-1Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M6 12H5v1h1v-1ZM13 10h-1v1h1v-1ZM12 9h-1v1h1V9ZM5 14H4v1h1v-1ZM9 14H8v1h1v-1ZM2 10H1v1h1v-1ZM3 14H2v1h1v-1ZM2 15H1v1h1v-1ZM15 4v2h-1v1h1v4h1V4h-1ZM13 2V1h-1v2h2V2h-1ZM6 1H3v1h3V1ZM13 7h-3v1h3V7ZM7 10H4v1h3v-1ZM8 15H5v1h3v-1ZM7 2H6v1h1V2ZM3 2H2v1h1V2Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M6 2H3v1h3V2ZM7 3H6v1h1V3ZM4 5H3v1h1V5ZM2 7H1v1h1V7ZM3 3H2v1h1V3Z',
                        fill: E[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M14 12h-3v1h3v-1ZM10 11V8H9v1H8v1h1v4h1v-2h1v-1h-1ZM15 11h-1v1h1v-1ZM2 3H1v4h1V3ZM1 7H0v3h1V7ZM4 11H3v3h1v-3ZM8 11H7v2h1v-2ZM1 11H0v4h1v-4ZM12 0H8v1h4V0Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M8 2H7v1h1V2ZM12 1H8v1h4V1Z',
                        fill: E[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M14 5H9v1h5V5Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M14 4V3h-1v1H9v1h5v1h1V4h-1Z',
                        fill: E[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M5 11H4v1h1v-1Z',
                        fill: v[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M7 6v1H3v1h5V6H7Z',
                        fill: E[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M7 7v1H3v1h5V7H7Z',
                        fill: '#000'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M3 8H2v1h1V8ZM2 9H1v1h1V9Z',
                        fill: E[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M3 9v1H2v1H1v4h1v-1h1v-3h1v-1h4V9H3Z',
                        fill: v[1]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M3 10H2v1h1v-1ZM2 11H1v1h1v-1Z',
                        fill: v[2]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M3 13H2v1h1v-1ZM2 14H1v1h1v-1Z',
                        fill: v[0]
                    }),
                    (0, r.jsx)('path', {
                        d: 'M8 9H3v1h5V9Z',
                        fill: v[2]
                    })
                ]
            })
        );
    };
