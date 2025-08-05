e.d(t, { W: () => l });
var r = e(255367);
e(73800);
var g = e(331595),
    v = e(84502);
let n = ['#353639', '#74767F', '#D1CDD5'],
    f = [0.1, 0.4, 0.7],
    B = [
        {
            base: 10,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 6,
            tint: 1
        }
    ],
    l = (A) => {
        var t,
            e,
            { width: l = 24, height: h = 24, primaryTintColor: i } = A,
            o = (function (A, t) {
                if (null == A) return {};
                var e,
                    r,
                    g = (function (A, t) {
                        if (null == A) return {};
                        var e,
                            r,
                            g = {},
                            v = Object.keys(A);
                        for (r = 0; r < v.length; r++) ((e = v[r]), t.indexOf(e) >= 0 || (g[e] = A[e]));
                        return g;
                    })(A, t);
                if (Object.getOwnPropertySymbols) {
                    var v = Object.getOwnPropertySymbols(A);
                    for (r = 0; r < v.length; r++) ((e = v[r]), !(t.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(A, e) && (g[e] = A[e]));
                }
                return g;
            })(A, ['width', 'height', 'primaryTintColor']);
        let { primaryColorsTransformed: C } = (0, v.s)({
            primaryBaseColors: n,
            primaryTintColor: i,
            primaryTintLuminances: f,
            primaryLuminanceWeights: B
        });
        return (0, r.jsxs)(
            'svg',
            ((t = (function (A) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(e);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(e).filter(function (A) {
                                return Object.getOwnPropertyDescriptor(e, A).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = e[t]),
                                t in A
                                    ? Object.defineProperty(A, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (A[t] = r));
                        }));
                }
                return A;
            })({}, (0, g.Z)(o))),
            (e = e =
                {
                    width: l,
                    height: h,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, r.jsx)('path', {
                            d: 'M2 1H4V2H5V3H6V4H10V3H11V2H12V1H14V6H15V13H14V14H13V15H3V14H2V13H1V6H2V1Z',
                            fill: C[1]
                        }),
                        (0, r.jsx)('path', {
                            d: 'M13 15V16H3V15H13Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M14 15H13V14H14V15Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M14 14H13V13H14V14Z',
                            fill: C[2]
                        }),
                        (0, r.jsx)('path', {
                            d: 'M3 14H2V13H3V14Z',
                            fill: C[2]
                        }),
                        (0, r.jsx)('path', {
                            d: 'M3 15H2V14H3V15Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M5 2H4V1H5V2Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M6 3H5V2H6V3Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M4 1H2V0H4V1Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M11 1H12V2H11V1Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M10 2H11V3H10V2Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M10 10H11V11H10V10Z',
                            fill: 'white'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M9 11H12V12H9V11Z',
                            fill: 'white'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M4 11H7V12H4V11Z',
                            fill: 'white'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M4 12H12V13H4V12Z',
                            fill: 'white'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M3 13.0005H13V14.0005H3V13.0005Z',
                            fill: 'white'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M5 10H6V11H5V10Z',
                            fill: 'white'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M6 9.00024H9.99999V10.0002H6V9.00024Z',
                            fill: 'white'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M12 0H14V1H12V0Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M10 4H6V3H10V4Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M15 14H14V13H15V14Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M14 13H13V12H14V13Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M2 14H1V13H2V14Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M3 13H2V12H3V13Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M16 13H15V6H16V13Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M15 6H14V0H15V6Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M2 6H1V0H2V6Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M1 13H0V6H1V13Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M10 2.99976H11V5.99976H10V2.99976Z',
                            fill: C[0]
                        }),
                        (0, r.jsx)('path', {
                            d: 'M5 2.99976H6V5.99976H5V2.99976Z',
                            fill: C[0]
                        }),
                        (0, r.jsx)('path', {
                            d: 'M7 3.99976H9V6.99983H7V3.99976Z',
                            fill: C[0]
                        }),
                        (0, r.jsx)('path', {
                            d: 'M12 3H13V4H12V3Z',
                            fill: '#FF7FC0'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M13 2H14V5H13V2Z',
                            fill: '#FF7FC0'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M12 8.99994H11V7H12V8.99994Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M5 8.99994H4V7H5V8.99994Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M4 4H3V3H4V4Z',
                            fill: '#FF7FC0'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M3 5H2V2H3V5Z',
                            fill: '#FF7FC0'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M15 11H12V10H15V11Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M4 11H1V10H4V11Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M13 14H3V15H13V14Z',
                            fill: C[2]
                        }),
                        (0, r.jsx)('path', {
                            d: 'M10 11H6V10H10V11Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M8.99999 12H7V11H8.99999V12Z',
                            fill: 'black'
                        }),
                        (0, r.jsx)('path', {
                            d: 'M9 9H7V7H9V9Z',
                            fill: 'white'
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                : (function (A, t) {
                      var e = Object.keys(A);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(A);
                          e.push.apply(e, r);
                      }
                      return e;
                  })(Object(e)).forEach(function (A) {
                      Object.defineProperty(t, A, Object.getOwnPropertyDescriptor(e, A));
                  }),
            t)
        );
    };
