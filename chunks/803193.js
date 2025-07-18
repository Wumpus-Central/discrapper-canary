t.d(e, { k: () => c });
var n = t(255367);
t(73800);
var r = t(331595),
    l = t(84502);
let i = ['#ffb84b', '#ffe361', '#f0f0f0'],
    s = ['#ba3500', '#fd6214', '#f0f0f0'],
    a = [0.07, 0.45, 1],
    o = [
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
    g = [0.1, 0.4, 1],
    f = [
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
    c = (A) => {
        var e,
            t,
            { width: c = 24, height: v = 24, primaryTintColor: h, secondaryTintColor: u } = A,
            E = (function (A, e) {
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
        let { primaryColorsTransformed: d, secondaryColorsTransformed: C } = (0, l.s)({
            primaryBaseColors: i,
            primaryTintColor: h,
            primaryTintLuminances: a,
            primaryLuminanceWeights: o,
            secondaryBaseColors: s,
            secondaryTintColor: u,
            secondaryTintLuminances: g,
            secondaryLuminanceWeights: f
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
            })({}, (0, r.Z)(E))),
            (t = t =
                {
                    width: c,
                    height: v,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, n.jsx)('path', {
                            d: 'M14 6v1h-3V6h-1V5H9V2h1V1H1v1h2v1h1v1h2v2H5v1H4v2H3v2H2v2H1v2h3v-1h2v-1h1v-1h1v-1h2v-1h1V9h1v1h1v1h1v1h1V6h-1Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 0h-3v1h3V0ZM4 15H1v1h3v-1ZM6 14H4v1h2v-1ZM3 2H1v1h2V2ZM4 4v1h1v1h1V4H4ZM4 7H3v2h1V7ZM3 9H2v2h1V9ZM2 11H1v2h1v-2ZM1 13H0v2h1v-2ZM10 11H8v1h2v-1ZM10 0H1v1h9V0Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 1H1v1h9V1Z',
                            fill: d[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 6h-3v1h3V6ZM11 1h-1v1h1V1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 2h-1v2h1V2ZM14 1h-3v1h3V1Z',
                            fill: C[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 5h-3v1h3V5Z',
                            fill: C[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M1 1H0v1h1V1ZM4 3H3v1h1V3ZM5 6H4v1h1V6ZM15 1h-1v1h1V1ZM16 2h-1v3h1V2Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 2h-1v3h1V2Z',
                            fill: C[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M16 6h-1v6h1V6Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 6h-1v6h1V6Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 5h-1v1h1V5ZM10 2H9v3h1V2ZM11 5h-1v1h1V5Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 4h-1v1h1V4Z',
                            fill: C[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 13H6v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 7v1H9v1H8v1H7v1H6v1H5v1H4v1h2v-1h1v-1h1v-1h2v-1h1V7h-1ZM4 14H3v1h1v-1Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M8 12H7v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5 7H4v1h1V7ZM6 6H5v1h1V6Z',
                            fill: d[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M7 5H6v1h1V5ZM8 4H7v1h1V4Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6 8H5v1h1V8ZM4 9H3v1h1V9ZM3 11H2v1h1v-1ZM2 13H1v1h1v-1Z',
                            fill: d[2]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 10h-1v1h1v-1ZM12 9h-1v1h1V9ZM13 10h-1v1h1v-1ZM14 11h-1v1h1v-1ZM15 12h-1v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 2h-3v3h3V2Z',
                            fill: C[1]
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
