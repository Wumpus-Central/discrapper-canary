g.d(t, { S: () => i });
var v = g(255367),
    e = g(73800),
    r = g(772848),
    f = g(331595),
    B = g(84502);
let h = ['#be0351', '#ff2c52', '#f0f0f0'],
    n = ['#ffb84b', '#ffe361', '#f0f0f0'],
    C = [0.3, 0.4, 1],
    w = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        },
        {
            base: 2,
            tint: 1
        }
    ],
    l = [0.3, 0.5, 1],
    Q = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        },
        {
            base: 2,
            tint: 1
        }
    ],
    i = (A) => {
        var t,
            g,
            { width: i = 24, height: H = 24, primaryTintColor: o, secondaryTintColor: s } = A,
            a = (function (A, t) {
                if (null == A) return {};
                var g,
                    v,
                    e = (function (A, t) {
                        if (null == A) return {};
                        var g,
                            v,
                            e = {},
                            r = Object.keys(A);
                        for (v = 0; v < r.length; v++) ((g = r[v]), t.indexOf(g) >= 0 || (e[g] = A[g]));
                        return e;
                    })(A, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(A);
                    for (v = 0; v < r.length; v++) ((g = r[v]), !(t.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (e[g] = A[g]));
                }
                return e;
            })(A, ['width', 'height', 'primaryTintColor', 'secondaryTintColor']);
        let D = e.useMemo(() => 'badge-force-gradient-'.concat((0, r.Z)()), []),
            { primaryColorsTransformed: M, secondaryColorsTransformed: c } = (0, B.s)({
                primaryBaseColors: h,
                primaryTintColor: o,
                primaryTintLuminances: C,
                primaryLuminanceWeights: w,
                secondaryBaseColors: n,
                secondaryTintColor: s,
                secondaryTintLuminances: l,
                secondaryLuminanceWeights: Q
            });
        return (0, v.jsxs)(
            'svg',
            ((t = (function (A) {
                for (var t = 1; t < arguments.length; t++) {
                    var g = null != arguments[t] ? arguments[t] : {},
                        v = Object.keys(g);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (v = v.concat(
                            Object.getOwnPropertySymbols(g).filter(function (A) {
                                return Object.getOwnPropertyDescriptor(g, A).enumerable;
                            })
                        )),
                        v.forEach(function (t) {
                            var v;
                            ((v = g[t]),
                                t in A
                                    ? Object.defineProperty(A, t, {
                                          value: v,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (A[t] = v));
                        }));
                }
                return A;
            })({}, (0, f.Z)(a))),
            (g = g =
                {
                    width: i,
                    height: H,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, v.jsx)('path', {
                            d: 'M7 0H4v1h3V0ZM11 1H7v1h4V1ZM9 6H8v4h1V6ZM1 5H0v6h1V5ZM15 2h-4v1h4V2Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M7 1H4v1h3V1ZM11 2H7v1h4V2Z',
                            fill: c[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M15 3h-4v1h4V3Z',
                            fill: M[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M7 15H4v1h3v-1Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M6 14v-1H5v-2H4V5h1V3h1V2H4v1H2v4H1v4h1v2h1v1h1v1h3v-1H6Z',
                            fill: c[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M7 14H4v1h3v-1Z',
                            fill: c[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M11 14H7v1h4v-1Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z',
                            fill: c[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M15 13h-4v1h4v-1ZM4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v2h1V3ZM16 3h-1v1h1V3ZM15 4h-1v1h1V4ZM14 5h-1v2h1V5ZM16 12h-1v1h1v-1ZM15 11h-1v1h1v-1ZM14 9h-1v2h1V9ZM13 7h-1v2h1V7ZM4 14H3v1h1v-1ZM3 13H2v1h1v-1ZM2 11H1v2h1v-2ZM5 5H4v6h1V5ZM7 2H6v1h1V2ZM6 3H5v2h1V3Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M2 5H1v2h1V5ZM6 5H5v2h1V5Z',
                            fill: c[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M5 3H4v2h1V3Z',
                            fill: c[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M11 3h-1v1h1V3Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 2H3v1h1V2Z',
                            fill: c[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M6 2H5v1h1V2ZM9 4H8v2h1V4ZM10 3H9v1h1V3ZM5 11H4v1h1v-1ZM4 13H3v1h1v-1ZM3 11H2v2h1v-2ZM8 13v-1H7v-1H6v2h1v1h4v-1H8ZM9 10H8v1h1v-1Z',
                            fill: c[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z',
                            fill: 'url(#'.concat(D, ')')
                        }),
                        (0, v.jsx)('path', {
                            d: 'M14 12v-1h-1V9h-1V7h1V5h1V4h-3v1h-1v1H9v4h1v2h1v1h4v-1h-1Z',
                            fill: M[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M13 5h-1v2h1V5ZM14 4h-1v1h1V4ZM13 9h-1v1h1V9ZM12 12v-1h-2v1h1v1h4v-1h-3Z',
                            fill: M[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M3 3H2v1h1V3ZM3 7H2v1h1V7ZM7 3H6v1h1V3Z',
                            fill: c[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M11 4h-1v1h1V4ZM10 6H9v1h1V6Z',
                            fill: M[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M10 4H9v2h1V4ZM7 13H6v1h1v-1ZM6 11H5v2h1v-2ZM11 12h-1v1h1v-1ZM10 10H9v2h1v-2Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('defs', {
                            children: (0, v.jsxs)('radialGradient', {
                                id: D,
                                cx: '0.75',
                                cy: '0.5',
                                r: '1',
                                fx: '0.75',
                                fy: '0.5',
                                children: [
                                    (0, v.jsx)('stop', {
                                        stopColor: M[1],
                                        offset: '30%'
                                    }),
                                    (0, v.jsx)('stop', {
                                        stopColor: c[1],
                                        offset: '70%'
                                    })
                                ]
                            })
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(g))
                : (function (A, t) {
                      var g = Object.keys(A);
                      if (Object.getOwnPropertySymbols) {
                          var v = Object.getOwnPropertySymbols(A);
                          g.push.apply(g, v);
                      }
                      return g;
                  })(Object(g)).forEach(function (A) {
                      Object.defineProperty(t, A, Object.getOwnPropertyDescriptor(g, A));
                  }),
            t)
        );
    };
