t.d(e, { S: () => h });
var n = t(255367),
    r = t(73800),
    l = t(772848),
    i = t(331595),
    s = t(84502);
let a = ['#be0351', '#ff2c52', '#f0f0f0'],
    o = ['#ffb84b', '#ffe361', '#f0f0f0'],
    g = [0.3, 0.4, 1],
    f = [
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
    c = [0.3, 0.5, 1],
    v = [
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
    h = (A) => {
        var e,
            t,
            { width: h = 24, height: u = 24, primaryTintColor: E, secondaryTintColor: d } = A,
            C = (function (A, e) {
                if (null == A) return {};
                var t,
                    n,
                    r = (function (A, e) {
                        if (null == A) return {};
                        var t,
                            n,
                            r = {},
                            l = Object.keys(A);
                        for (n = 0; n < l.length; n++) ((t = l[n]), e.indexOf(t) >= 0 || (r[t] = A[t]));
                        return r;
                    })(A, e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(A);
                    for (n = 0; n < l.length; n++) ((t = l[n]), !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t]));
                }
                return r;
            })(A, ['width', 'height', 'primaryTintColor', 'secondaryTintColor']);
        let B = r.useMemo(() => 'badge-force-gradient-'.concat((0, l.Z)()), []),
            { primaryColorsTransformed: w, secondaryColorsTransformed: D } = (0, s.s)({
                primaryBaseColors: a,
                primaryTintColor: E,
                primaryTintLuminances: g,
                primaryLuminanceWeights: f,
                secondaryBaseColors: o,
                secondaryTintColor: d,
                secondaryTintLuminances: c,
                secondaryLuminanceWeights: v
            });
        return (0, n.jsxs)(
            'svg',
            ((e = (function (A) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(t);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(t).filter(function (A) {
                                return Object.getOwnPropertyDescriptor(t, A).enumerable;
                            })
                        )),
                        n.forEach(function (e) {
                            var n;
                            ((n = t[e]),
                                e in A
                                    ? Object.defineProperty(A, e, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (A[e] = n));
                        }));
                }
                return A;
            })({}, (0, i.Z)(C))),
            (t = t =
                {
                    width: h,
                    height: u,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, n.jsx)('path', {
                            d: 'M7 0H4v1h3V0ZM11 1H7v1h4V1ZM9 6H8v4h1V6ZM1 5H0v6h1V5ZM15 2h-4v1h4V2Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 1H4v1h3V1ZM11 2H7v1h4V2Z',
                            fill: D[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 3h-4v1h4V3Z',
                            fill: w[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 15H4v1h3v-1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 14v-1H5v-2H4V5h1V3h1V2H4v1H2v4H1v4h1v2h1v1h1v1h3v-1H6Z',
                            fill: D[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 14H4v1h3v-1Z',
                            fill: D[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 14H7v1h4v-1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z',
                            fill: D[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 13h-4v1h4v-1ZM4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v2h1V3ZM16 3h-1v1h1V3ZM15 4h-1v1h1V4ZM14 5h-1v2h1V5ZM16 12h-1v1h1v-1ZM15 11h-1v1h1v-1ZM14 9h-1v2h1V9ZM13 7h-1v2h1V7ZM4 14H3v1h1v-1ZM3 13H2v1h1v-1ZM2 11H1v2h1v-2ZM5 5H4v6h1V5ZM7 2H6v1h1V2ZM6 3H5v2h1V3Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2 5H1v2h1V5ZM6 5H5v2h1V5Z',
                            fill: D[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 3H4v2h1V3Z',
                            fill: D[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 3h-1v1h1V3Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4 2H3v1h1V2Z',
                            fill: D[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 2H5v1h1V2ZM9 4H8v2h1V4ZM10 3H9v1h1V3ZM5 11H4v1h1v-1ZM4 13H3v1h1v-1ZM3 11H2v2h1v-2ZM8 13v-1H7v-1H6v2h1v1h4v-1H8ZM9 10H8v1h1v-1Z',
                            fill: D[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z',
                            fill: 'url(#'.concat(B, ')')
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 12v-1h-1V9h-1V7h1V5h1V4h-3v1h-1v1H9v4h1v2h1v1h4v-1h-1Z',
                            fill: w[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 5h-1v2h1V5ZM14 4h-1v1h1V4ZM13 9h-1v1h1V9ZM12 12v-1h-2v1h1v1h4v-1h-3Z',
                            fill: w[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M3 3H2v1h1V3ZM3 7H2v1h1V7ZM7 3H6v1h1V3Z',
                            fill: D[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 4h-1v1h1V4ZM10 6H9v1h1V6Z',
                            fill: w[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 4H9v2h1V4ZM7 13H6v1h1v-1ZM6 11H5v2h1v-2ZM11 12h-1v1h1v-1ZM10 10H9v2h1v-2Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('defs', {
                            children: (0, n.jsxs)('radialGradient', {
                                id: B,
                                cx: '0.75',
                                cy: '0.5',
                                r: '1',
                                fx: '0.75',
                                fy: '0.5',
                                children: [
                                    (0, n.jsx)('stop', {
                                        stopColor: w[1],
                                        offset: '30%'
                                    }),
                                    (0, n.jsx)('stop', {
                                        stopColor: D[1],
                                        offset: '70%'
                                    })
                                ]
                            })
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (A, e) {
                      var t = Object.keys(A);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(A);
                          t.push.apply(t, n);
                      }
                      return t;
                  })(Object(t)).forEach(function (A) {
                      Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A));
                  }),
            e)
        );
    };
