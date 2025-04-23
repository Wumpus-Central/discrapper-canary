v.d(g, { V: () => Q });
var B = v(200651);
v(192379);
var t = v(331595),
    e = v(84502);
let f = ['#ffb84b', '#ffe361', '#f0f0f0'],
    r = ['#847d8b', '#d1cdd5', '#f0f0f0'],
    C = [0.1, 0.4, 0.7],
    h = [
        {
            base: 5,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        }
    ],
    n = [0.3, 0.9, 1],
    w = [
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
                            d: 'M11 1v1h-1v1H9v1H8v1H7v2H6v1h2v2h1V9h2V8h1V7h1V6h1V5h1V1h-4Z',
                            fill: a[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 9h1v1h2v2h1v1h2v1h2v-2H9v-1H8v-1H7V9H6V8H5V7H4V5H2v2h1v2Z',
                            fill: M[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 11H3v2h2v-2ZM3 13H1v2h2v-2Z',
                            fill: M[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M11 1h-1v1h1V1ZM10 2H9v1h1V2ZM9 3H8v1h1V3ZM8 4H7v1h1V4ZM7 5H6v2h1V5ZM5 5H4v2h1V5ZM2 5H1v2h1V5ZM3 7H2v2h1V7ZM11 9H9v1h2V9ZM11 11H9v1h2v-1ZM12 12h-1v2h1v-2Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 1h-1v4h1V1Z',
                            fill: a[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M1 13H0v2h1v-2ZM11 14H9v1h2v-1ZM9 13H7v1h2v-1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 12H3v1h2v-1ZM3 14H1v1h2v-1Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 14v1h1v-1h1v-1H3v1ZM6 12v-2H4V9H3v2h2v2h2v-1H6ZM3 12v-1H2v1H1v1h2v-1ZM3 15H1v1h2v-1ZM4 4H2v1h2V4ZM7 9v1h1V8H6v1h1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M13 3h-1v1h1V3ZM12 4h-1v1h1V4ZM11 5h-1v1h1V5ZM10 6H9v1h1V6ZM9 7H8v1h1V7Z',
                            fill: a[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 7H6v1h1V7Z',
                            fill: a[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M4 8H3v1h1V8ZM3 6H2v1h1V6ZM5 9H4v1h1V9ZM7 11H6v1h1v-1ZM8 12H7v1h1v-1ZM10 13H9v1h1v-1Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M9 10H8v1h1v-1ZM6 7H5v1h1V7ZM15 5h-1v1h1V5ZM14 6h-1v1h1V6ZM13 7h-1v1h1V7ZM12 8h-1v1h1V8ZM11 0v1h4v4h1V0h-5Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M11 12h-1v1h1v-1ZM9 11H8v1h1v-1ZM8 10H7v1h1v-1ZM7 9H6v1h1V9ZM6 8H5v1h1V8ZM5 7H4v1h1V7Z',
                            fill: M[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M8 5H7v1h3V5H9V4H8v1ZM10 2v1H9v1h3V3h-1V2h-1ZM14 1h-3v1h3V1Z',
                            fill: a[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M14 5h-1v1h1V5ZM13 6h-1v1h1V6ZM12 7h-1v1h1V7ZM11 8h-1v1h1V8ZM9 9H8v1h1V9Z',
                            fill: a[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M4 5H3v1h1V5ZM4 11H3v1h1v-1ZM2 13H1v1h1v-1Z',
                            fill: M[2]
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
