v.d(g, { D: () => h });
var B = v(200651);
v(192379);
var t = v(331595),
    e = v(84502);
let f = ['#57595f', '#847d8b', '#d1cdd5'],
    r = [0, 0.12, 0.6],
    C = [
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
    h = (A) => {
        var g,
            v,
            { width: h = 24, height: n = 24, primaryTintColor: w } = A,
            Q = (function (A, g) {
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
            })(A, ['width', 'height', 'primaryTintColor']);
        let { primaryColorsTransformed: D } = (0, e.s)({
            primaryBaseColors: f,
            primaryTintColor: w,
            primaryTintLuminances: r,
            primaryLuminanceWeights: C
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
            })({}, (0, t.Z)(Q))),
            (v = v =
                {
                    width: h,
                    height: n,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, B.jsx)('path', {
                            d: 'M14 4V3h-1V2h-1V1H4v1H3v1H2v1H1v6h1v1h1v1h1v2h1v1h6v-1h1v-2h1v-1h1v-1h1V4h-1Z',
                            fill: D[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v1h1V3ZM4 12H3v2h1v-2ZM3 11H2v1h1v-1ZM5 14H4v1h1v-1ZM2 10H1v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M4 11H3v1h1v-1ZM5 13H4v1h1v-1ZM3 10H2v1h1v-1ZM7 7H4v3h3V7Z',
                            fill: D[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 8H5v2h2V8Z',
                            fill: D[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M12 7H9v3h3V7Z',
                            fill: D[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M12 8h-2v2h2V8Z',
                            fill: D[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M12 12.01h1v-1h-1v1ZM11 14.01h1v-1h-1v1ZM13 11.01h1v-1h-1v1Z',
                            fill: D[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M1 4H0v6h1V4Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M2 4H1v6h1V4Z',
                            fill: '#fff'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M12 2.01h1v-1h-1v1ZM13 3.01h1v-1h-1v1ZM14 4.01h1v-1h-1v1ZM12 14.01h1v-2h-1v2ZM13 12.01h1v-1h-1v1ZM11 15.01h1v-1h-1v1ZM14 11.01h1v-1h-1v1ZM15 10.01h1v-6h-1v6Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M14 10.01h1v-6h-1v6Z',
                            fill: D[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M4 0v1h8V0H4Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M4 2H3v1h1V2ZM3 3H2v1h1V3ZM4 4H3v1h1V4ZM12 3.01h1v-1h-1v1ZM13 4.01h1v-1h-1v1ZM4 1v1h8V1H4Z',
                            fill: '#fff'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 15v1h6v-1H5Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 14v1h6v-1H5Z',
                            fill: D[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 13H6v2h1v-2ZM10 13H9v2h1v-2Z',
                            fill: D[0]
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
