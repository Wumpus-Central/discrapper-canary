v.d(g, { S: () => o });
var B = v(200651),
    t = v(192379),
    e = v(772848),
    f = v(331595),
    r = v(84502);
let C = ['#be0351', '#ff2c52', '#f0f0f0'],
    h = ['#ffb84b', '#ffe361', '#f0f0f0'],
    n = [0.3, 0.4, 1],
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
    Q = [0.3, 0.5, 1],
    D = [
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
    o = (A) => {
        var g,
            v,
            { width: o = 24, height: s = 24, primaryTintColor: i, secondaryTintColor: M } = A,
            a = (function (A, g) {
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
        let l = t.useMemo(() => 'badge-force-gradient-'.concat((0, e.Z)()), []),
            { primaryColorsTransformed: E, secondaryColorsTransformed: c } = (0, r.s)({
                primaryBaseColors: C,
                primaryTintColor: i,
                primaryTintLuminances: n,
                primaryLuminanceWeights: w,
                secondaryBaseColors: h,
                secondaryTintColor: M,
                secondaryTintLuminances: Q,
                secondaryLuminanceWeights: D
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
            })({}, (0, f.Z)(a))),
            (v = v =
                {
                    width: o,
                    height: s,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, B.jsx)('path', {
                            d: 'M7 0H4v1h3V0ZM11 1H7v1h4V1ZM9 6H8v4h1V6ZM1 5H0v6h1V5ZM15 2h-4v1h4V2Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 1H4v1h3V1ZM11 2H7v1h4V2Z',
                            fill: c[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 3h-4v1h4V3Z',
                            fill: E[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 15H4v1h3v-1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M6 14v-1H5v-2H4V5h1V3h1V2H4v1H2v4H1v4h1v2h1v1h1v1h3v-1H6Z',
                            fill: c[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 14H4v1h3v-1Z',
                            fill: c[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M11 14H7v1h4v-1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z',
                            fill: c[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 13h-4v1h4v-1ZM4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v2h1V3ZM16 3h-1v1h1V3ZM15 4h-1v1h1V4ZM14 5h-1v2h1V5ZM16 12h-1v1h1v-1ZM15 11h-1v1h1v-1ZM14 9h-1v2h1V9ZM13 7h-1v2h1V7ZM4 14H3v1h1v-1ZM3 13H2v1h1v-1ZM2 11H1v2h1v-2ZM5 5H4v6h1V5ZM7 2H6v1h1V2ZM6 3H5v2h1V3Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M2 5H1v2h1V5ZM6 5H5v2h1V5Z',
                            fill: c[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 3H4v2h1V3Z',
                            fill: c[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M11 3h-1v1h1V3Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M4 2H3v1h1V2Z',
                            fill: c[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M6 2H5v1h1V2ZM9 4H8v2h1V4ZM10 3H9v1h1V3ZM5 11H4v1h1v-1ZM4 13H3v1h1v-1ZM3 11H2v2h1v-2ZM8 13v-1H7v-1H6v2h1v1h4v-1H8ZM9 10H8v1h1v-1Z',
                            fill: c[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z',
                            fill: 'url(#'.concat(l, ')')
                        }),
                        (0, B.jsx)('path', {
                            d: 'M14 12v-1h-1V9h-1V7h1V5h1V4h-3v1h-1v1H9v4h1v2h1v1h4v-1h-1Z',
                            fill: E[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M13 5h-1v2h1V5ZM14 4h-1v1h1V4ZM13 9h-1v1h1V9ZM12 12v-1h-2v1h1v1h4v-1h-3Z',
                            fill: E[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 3H2v1h1V3ZM3 7H2v1h1V7ZM7 3H6v1h1V3Z',
                            fill: c[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M11 4h-1v1h1V4ZM10 6H9v1h1V6Z',
                            fill: E[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M10 4H9v2h1V4ZM7 13H6v1h1v-1ZM6 11H5v2h1v-2ZM11 12h-1v1h1v-1ZM10 10H9v2h1v-2Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('defs', {
                            children: (0, B.jsxs)('radialGradient', {
                                id: l,
                                cx: '0.75',
                                cy: '0.5',
                                r: '1',
                                fx: '0.75',
                                fy: '0.5',
                                children: [
                                    (0, B.jsx)('stop', {
                                        stopColor: E[1],
                                        offset: '30%'
                                    }),
                                    (0, B.jsx)('stop', {
                                        stopColor: c[1],
                                        offset: '70%'
                                    })
                                ]
                            })
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
