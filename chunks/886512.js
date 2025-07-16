v.d(g, { V: () => h });
var t = v(255367);
v(73800);
var B = v(331595),
    e = v(84502);
let f = ['#87553B', '#B88166'],
    r = [0.2, 0.5],
    C = [
        {
            base: 7,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        }
    ],
    h = (A) => {
        var g,
            v,
            { width: h = 24, height: w = 24, primaryTintColor: Q } = A,
            n = (function (A, g) {
                if (null == A) return {};
                var v,
                    t,
                    B = (function (A, g) {
                        if (null == A) return {};
                        var v,
                            t,
                            B = {},
                            e = Object.keys(A);
                        for (t = 0; t < e.length; t++) ((v = e[t]), g.indexOf(v) >= 0 || (B[v] = A[v]));
                        return B;
                    })(A, g);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(A);
                    for (t = 0; t < e.length; t++) ((v = e[t]), !(g.indexOf(v) >= 0) && Object.prototype.propertyIsEnumerable.call(A, v) && (B[v] = A[v]));
                }
                return B;
            })(A, ['width', 'height', 'primaryTintColor']);
        let { primaryColorsTransformed: D } = (0, e.s)({
            primaryBaseColors: f,
            primaryTintColor: Q,
            primaryTintLuminances: r,
            primaryLuminanceWeights: C
        });
        return (0, t.jsxs)(
            'svg',
            ((g = (function (A) {
                for (var g = 1; g < arguments.length; g++) {
                    var v = null != arguments[g] ? arguments[g] : {},
                        t = Object.keys(v);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (t = t.concat(
                            Object.getOwnPropertySymbols(v).filter(function (A) {
                                return Object.getOwnPropertyDescriptor(v, A).enumerable;
                            })
                        )),
                        t.forEach(function (g) {
                            var t;
                            ((t = v[g]),
                                g in A
                                    ? Object.defineProperty(A, g, {
                                          value: t,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (A[g] = t));
                        }));
                }
                return A;
            })({}, (0, B.Z)(n))),
            (v = v =
                {
                    width: h,
                    height: w,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, t.jsx)('path', {
                            d: 'M15 6H13V8H15V6Z',
                            fill: D[1]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M2.99998 6H0.999985V8H2.99998V6Z',
                            fill: D[1]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M9.99998 14H5.99998V5H6.99998V4H8.99998V5H9.99998V14Z',
                            fill: D[1]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M10 6V7H9V10H11V11H12V6H10Z',
                            fill: D[0]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M6 6V7H7V10H5V11H4V6H6Z',
                            fill: D[0]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M9.99998 12H5.99998V13H9.99998V12Z',
                            fill: D[0]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M15 7H13V8H15V7Z',
                            fill: D[0]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M2.99998 7H0.999985V8H2.99998V7Z',
                            fill: D[0]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M8.99998 14H6.99998V15H8.99998V14Z',
                            fill: D[0]
                        }),
                        (0, t.jsx)('path', {
                            d: 'M9.99998 4H8.99998V5H9.99998V4Z',
                            fill: '#D1CDD5'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M6.99998 4H5.99998V5H6.99998V4Z',
                            fill: '#D1CDD5'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M11 5H9.99998V6H11V5Z',
                            fill: '#D1CDD5'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M5.99998 5H4.99998V6H5.99998V5Z',
                            fill: '#D1CDD5'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M5.99998 5H3.99998V3H2.99998V2H1.99998V1H4.99998V2H5.99998V5Z',
                            fill: 'white'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M9.99998 5H12V3H13V2H14V1H11V2H9.99998V5Z',
                            fill: 'white'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M12 2H11V3H12V2Z',
                            fill: '#D1CDD5'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M4.99998 2H3.99998V3H4.99998V2Z',
                            fill: '#D1CDD5'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M4.99998 0H1.99998V1H4.99998V0Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M14 0H11V1H14V0Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M5.99998 9V7H4.99999V9H5.99998Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M11 9V7H9.99999V9H11Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M8.99998 12H6.99998V13H8.99998V12Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M8.99998 10H6.99998V11H8.99998V10Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M13 5V3H12V5H11V6H12V11H13V9H15V8H13V6H15V8H16V5H13Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M5 5H4V3H3V5H0V8H1V6H3V8H1V9H3V11H4V6H5V5Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M11 11V10H10V14H11V12H12V11H11Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M9.99998 14H8.99998V15H9.99998V14Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M7 15V14H6V15H5V16H9V15H7Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M5 10V11H4V12H5V14H6V10H5Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M2 2V1H1V3H3V2H2Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M5.99998 1H4.99998V2H5.99998V1Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M9 2V3H7V2H6V4H10V2H9Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M11 1H9.99998V2H11V1Z',
                            fill: 'black'
                        }),
                        (0, t.jsx)('path', {
                            d: 'M14 1V2H13V3H15V1H14Z',
                            fill: 'black'
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(v))
                : (function (A, g) {
                      var v = Object.keys(A);
                      if (Object.getOwnPropertySymbols) {
                          var t = Object.getOwnPropertySymbols(A);
                          v.push.apply(v, t);
                      }
                      return v;
                  })(Object(v)).forEach(function (A) {
                      Object.defineProperty(g, A, Object.getOwnPropertyDescriptor(v, A));
                  }),
            g)
        );
    };
