v.d(g, { k: () => Q });
var B = v(200651);
v(192379);
var t = v(331595),
    e = v(84502);
let f = ['#ffb84b', '#ffe361', '#f0f0f0'],
    r = ['#ba3500', '#fd6214', '#f0f0f0'],
    C = [0.07, 0.45, 1],
    h = [
        {
            base: 4,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        }
    ],
    n = [0.1, 0.4, 1],
    w = [
        {
            base: 2,
            tint: 1
        },
        {
            base: 1,
            tint: 2
        },
        {
            base: 4,
            tint: 1
        }
    ],
    Q = (A) => {
        var g,
            v,
            { width: Q = 24, height: D = 24, primaryTintColor: o, secondaryTintColor: s } = A,
            i = (function (A, g) {
                if (null == A) return {};
                var v,
                    B,
                    t = (function (A, g) {
                        if (null == A) return {};
                        var v,
                            B,
                            t = {},
                            e = Object.keys(A);
                        for (B = 0; B < e.length; B++) (v = e[B]), g.indexOf(v) >= 0 || (t[v] = A[v]);
                        return t;
                    })(A, g);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(A);
                    for (B = 0; B < e.length; B++) (v = e[B]), !(g.indexOf(v) >= 0) && Object.prototype.propertyIsEnumerable.call(A, v) && (t[v] = A[v]);
                }
                return t;
            })(A, ['width', 'height', 'primaryTintColor', 'secondaryTintColor']);
        let { primaryColorsTransformed: M, secondaryColorsTransformed: a } = (0, e.s)({
            primaryBaseColors: f,
            primaryTintColor: o,
            primaryTintLuminances: C,
            primaryLuminanceWeights: h,
            secondaryBaseColors: r,
            secondaryTintColor: s,
            secondaryTintLuminances: n,
            secondaryLuminanceWeights: w
        });
        return (0, B.jsxs)(
            'svg',
            ((g = (function (A) {
                for (var g = 1; g < arguments.length; g++) {
                    var v = null != arguments[g] ? arguments[g] : {},
                        B = Object.keys(v);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (B = B.concat(
                            Object.getOwnPropertySymbols(v).filter(function (A) {
                                return Object.getOwnPropertyDescriptor(v, A).enumerable;
                            })
                        )),
                        B.forEach(function (g) {
                            var B;
                            (B = v[g]),
                                g in A
                                    ? Object.defineProperty(A, g, {
                                          value: B,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (A[g] = B);
                        });
                }
                return A;
            })({}, (0, t.Z)(i))),
            (v = v =
                {
                    width: Q,
                    height: D,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, B.jsx)('path', {
                            d: 'M14 6v1h-3V6h-1V5H9V2h1V1H1v1h2v1h1v1h2v2H5v1H4v2H3v2H2v2H1v2h3v-1h2v-1h1v-1h1v-1h2v-1h1V9h1v1h1v1h1v1h1V6h-1Z',
                            fill: M[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M14 0h-3v1h3V0ZM4 15H1v1h3v-1ZM6 14H4v1h2v-1ZM3 2H1v1h2V2ZM4 4v1h1v1h1V4H4ZM4 7H3v2h1V7ZM3 9H2v2h1V9ZM2 11H1v2h1v-2ZM1 13H0v2h1v-2ZM10 11H8v1h2v-1ZM10 0H1v1h9V0Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M10 1H1v1h9V1Z',
                            fill: M[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M14 6h-3v1h3V6ZM11 1h-1v1h1V1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M11 2h-1v2h1V2ZM14 1h-3v1h3V1Z',
                            fill: a[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M14 5h-3v1h3V5Z',
                            fill: a[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M1 1H0v1h1V1ZM4 3H3v1h1V3ZM5 6H4v1h1V6ZM15 1h-1v1h1V1ZM16 2h-1v3h1V2Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 2h-1v3h1V2Z',
                            fill: a[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M16 6h-1v6h1V6Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 6h-1v6h1V6Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 5h-1v1h1V5ZM10 2H9v3h1V2ZM11 5h-1v1h1V5Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M11 4h-1v1h1V4Z',
                            fill: a[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 13H6v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M10 7v1H9v1H8v1H7v1H6v1H5v1H4v1h2v-1h1v-1h1v-1h2v-1h1V7h-1ZM4 14H3v1h1v-1Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M8 12H7v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 7H4v1h1V7ZM6 6H5v1h1V6Z',
                            fill: M[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 5H6v1h1V5ZM8 4H7v1h1V4Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M6 8H5v1h1V8ZM4 9H3v1h1V9ZM3 11H2v1h1v-1ZM2 13H1v1h1v-1Z',
                            fill: M[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M11 10h-1v1h1v-1ZM12 9h-1v1h1V9ZM13 10h-1v1h1v-1ZM14 11h-1v1h1v-1ZM15 12h-1v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M14 2h-3v3h3V2Z',
                            fill: a[1]
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(v))
                : (function (A, g) {
                      var v = Object.keys(A);
                      if (Object.getOwnPropertySymbols) {
                          var B = Object.getOwnPropertySymbols(A);
                          v.push.apply(v, B);
                      }
                      return v;
                  })(Object(v)).forEach(function (A) {
                      Object.defineProperty(g, A, Object.getOwnPropertyDescriptor(v, A));
                  }),
            g)
        );
    };
