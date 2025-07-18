t.d(e, { O: () => c });
var n = t(255367);
t(73800);
var r = t(331595),
    l = t(84502);
let i = ['#FFB84B', '#FFE361'],
    s = [0.56, 0.77],
    a = [
        {
            base: 3,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        }
    ],
    o = ['#FF1C90', '#FF7FC0'],
    g = [0.2, 0.4],
    f = [
        {
            base: 7,
            tint: 1
        },
        {
            base: 3,
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
            primaryTintLuminances: s,
            primaryLuminanceWeights: a,
            secondaryBaseColors: o,
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
                            d: 'M0.999985 2V14H1.99998V15H14V14H15V2H14V3H13V4H11V3H9.99998V2H8.99998V1H6.99998V2H5.99998V3H4.99998V4H2.99998V3H1.99998V2H0.999985Z',
                            fill: d[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M0.999985 3H1.99998L1.99998 2L0.999985 2L0.999985 3Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M1.99998 4H2.99998V3H1.99998V4Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4.99998 4H5.99998V3H4.99998V4Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9.99998 4H11V3H9.99998V4Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 2.00002V1.00002H7V2.00002H6V3.00002H7V5.00002H9V3.00002H10V2.00002H9Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2 5.00002V4.00002H1V13H2V14H3V5.00002H2Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 5.00002V4.00002H14V15H12V5.00002H13Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4.99999 5.00002H3V15H4.99999V5.00002Z',
                            fill: d[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6.99998 15H8.99998V13H6.99998V15Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M10 7.00002V6.00002H9V5.00002H7V6.00002H6V7.00002H5V8.00001H6V11H7V12H9V11H10V8.00001H11V7.00002H10Z',
                            fill: C[0]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6.99998 12H8.99998V10H6.99998V12Z',
                            fill: C[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9 7.00002V6.00002H7V7.00002H6V9.00001H10V7.00002H9Z',
                            fill: C[1]
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6.99998 9.00002H8.99998V7.00002H6.99998V9.00002Z',
                            fill: 'white'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M0.999985 15H1.99998L1.99998 14H0.999985L0.999985 15Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M1.99998 3H2.99998V2L1.99998 2V3Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4.99998 3H5.99998V2L4.99998 2V3Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5.99998 2L6.99998 2V1L5.99998 1V2Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6.99998 1L8.99998 1V0L6.99998 0V1Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M2.99998 4L4.99998 4V3H2.99998V4Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M8.99998 2L9.99998 2V1L8.99998 1V2Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9.99998 3H11V2L9.99998 2V3Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M13 3H14V2L13 2V3Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M11 4L13 4V3H11V4Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 15H15V14H14V15Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M1 1.00002V1.52588e-05H0V14H1V2.00002H2V1.00002H1Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M15 1.52588e-05V1.00002H14V2.00002H15V14H16V1.52588e-05H15Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M14 15H1.99998V16H14V15Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M6.99998 13H8.99998V12H6.99998V13Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M8.99998 12H9.99998V11H8.99998V12Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M5.99998 12H6.99998V11H5.99998V12Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M4.99998 11H5.99998V8H4.99998V11Z',
                            fill: 'black'
                        }),
                        (0, n.jsx)('path', {
                            d: 'M9.99998 11H11V8H9.99998V11Z',
                            fill: 'black'
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
