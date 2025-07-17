g.d(t, { D: () => n });
var v = g(255367);
g(73800);
var e = g(331595),
    r = g(84502);
let f = ['#57595f', '#847d8b', '#d1cdd5'],
    B = [0, 0.12, 0.6],
    h = [
        {
            base: 10,
            tint: 1
        },
        {
            base: 5,
            tint: 1
        },
        {
            base: 2,
            tint: 1
        }
    ],
    n = (A) => {
        var t,
            g,
            { width: n = 24, height: C = 24, primaryTintColor: w } = A,
            l = (function (A, t) {
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
            })(A, ['width', 'height', 'primaryTintColor']);
        let { primaryColorsTransformed: Q } = (0, r.s)({
            primaryBaseColors: f,
            primaryTintColor: w,
            primaryTintLuminances: B,
            primaryLuminanceWeights: h
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
            })({}, (0, e.Z)(l))),
            (g = g =
                {
                    width: n,
                    height: C,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, v.jsx)('path', {
                            d: 'M14 4V3h-1V2h-1V1H4v1H3v1H2v1H1v6h1v1h1v1h1v2h1v1h6v-1h1v-2h1v-1h1v-1h1V4h-1Z',
                            fill: Q[2]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v1h1V3ZM4 12H3v2h1v-2ZM3 11H2v1h1v-1ZM5 14H4v1h1v-1ZM2 10H1v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 11H3v1h1v-1ZM5 13H4v1h1v-1ZM3 10H2v1h1v-1ZM7 7H4v3h3V7Z',
                            fill: Q[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M7 8H5v2h2V8Z',
                            fill: Q[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 7H9v3h3V7Z',
                            fill: Q[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 8h-2v2h2V8Z',
                            fill: Q[0]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 12.01h1v-1h-1v1ZM11 14.01h1v-1h-1v1ZM13 11.01h1v-1h-1v1Z',
                            fill: Q[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M1 4H0v6h1V4Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M2 4H1v6h1V4Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M12 2.01h1v-1h-1v1ZM13 3.01h1v-1h-1v1ZM14 4.01h1v-1h-1v1ZM12 14.01h1v-2h-1v2ZM13 12.01h1v-1h-1v1ZM11 15.01h1v-1h-1v1ZM14 11.01h1v-1h-1v1ZM15 10.01h1v-6h-1v6Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M14 10.01h1v-6h-1v6Z',
                            fill: Q[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 0v1h8V0H4Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M4 2H3v1h1V2ZM3 3H2v1h1V3ZM4 4H3v1h1V4ZM12 3.01h1v-1h-1v1ZM13 4.01h1v-1h-1v1ZM4 1v1h8V1H4Z',
                            fill: '#fff'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M5 15v1h6v-1H5Z',
                            fill: '#000'
                        }),
                        (0, v.jsx)('path', {
                            d: 'M5 14v1h6v-1H5Z',
                            fill: Q[1]
                        }),
                        (0, v.jsx)('path', {
                            d: 'M7 13H6v2h1v-2ZM10 13H9v2h1v-2Z',
                            fill: Q[0]
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
