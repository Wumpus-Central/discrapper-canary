e.d(t, { u: () => n });
var g = e(627968);
e(64700);
var r = e(996682),
    v = e(211974);
let f = ["#008456", "#6BE473"],
    B = [0.17, 0.6],
    h = [
        {
            base: 5,
            tint: 1,
        },
        {
            base: 3,
            tint: 1,
        },
    ],
    n = (A) => {
        var t, e;
        let { width: n = 24, height: l = 24, primaryTintColor: C } = A,
            w = (function (A, t) {
                if (null == A) return {};
                var e,
                    g,
                    r,
                    v = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (r = 0, e = Reflect.ownKeys(A); r < e.length; r++)
                        (g = e[r]),
                            !(t.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (v[g] = A[g]);
                    return v;
                }
                if (
                    ((v = (function (A, t) {
                        if (null == A) return {};
                        var e,
                            g,
                            r = {},
                            v = Object.getOwnPropertyNames(A);
                        for (g = 0; g < v.length; g++)
                            (e = v[g]),
                                !(t.indexOf(e) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(A, e) &&
                                    (r[e] = A[e]);
                        return r;
                    })(A, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (r = 0, e = Object.getOwnPropertySymbols(A); r < e.length; r++)
                        (g = e[r]),
                            !(t.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (v[g] = A[g]);
                return v;
            })(A, ["width", "height", "primaryTintColor"]),
            { primaryColorsTransformed: o } = (0, v.V)({
                primaryBaseColors: f,
                primaryTintColor: C,
                primaryTintLuminances: B,
                primaryLuminanceWeights: h,
            });
        return (0, g.jsxs)(
            "svg",
            ((t = (function (A) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = null != arguments[t] ? arguments[t] : {},
                        g = Object.keys(e);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (g = g.concat(
                            Object.getOwnPropertySymbols(e).filter(function (A) {
                                return Object.getOwnPropertyDescriptor(e, A).enumerable;
                            }),
                        )),
                        g.forEach(function (t) {
                            var g;
                            (g = e[t]),
                                t in A
                                    ? Object.defineProperty(A, t, {
                                          value: g,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (A[t] = g);
                        });
                }
                return A;
            })({}, (0, r.A)(w))),
            (e = e =
                {
                    width: n,
                    height: l,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, g.jsx)("path", {
                            d: "M16 11.9295V9H15V11.9295H16Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M16 12V9H15V12H16Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M1 7L1 4H0L0 7H1Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M15 7V3H11V1H5.00002V3H2.00002V4H1.00002V7H2.00002V8H5.00002V9H1.00002V13H5.00002V15H11V13H14V12H15V9H14V8H11V7H15Z",
                            fill: o[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M15 12H14V13H15V12Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M13 9H12V10H13V9Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 8H8V9H12V8Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M5 3H2V4H5V3Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M7 9H6V10H7V9Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M8 6H7V7H8V6Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M8 5H7V6H8V5Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M7 10H6V11H7V10Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M6 9H5V10H6V9Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M9 6H8V7H9V6Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M2 3H1V4H2V3Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M2 4H1V5H2V4Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M11 13V15H5.00002V13H1.00002V9H6.00002V8H2.00002V7H1.00002V8H1.52588e-05V14H4.00002V16H12V14H14V13H11Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M13 3V7H15V3H13Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M9 1V3H11V1L9 1Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M9 13V15H11V13H9Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M14 9V8H12V9H13V12H12V13H14V12H15V9H14Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 5V4H11V3H9.00002V1H5.00002V2H7.00002V3H8.00002V4H9.00002V5H10V6H11V7H13V5H12Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M9.00002 12V11H8.00002V10H7.00002V11H6.00002V10H5.00002V9H1.00002V10H4.00002V11H5.00002V12H6.00002V13H7.00002V14H8.00002V15H9.00002V13H10V12H9.00002Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 2V0H4.00002V2H2.00002V3H5.00002V1H11V3H12H15V7H8.00002V8H14V9H15V8H16V2H12Z",
                            fill: "black",
                        }),
                    ],
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                : (function (A, t) {
                      var e = Object.keys(A);
                      if (Object.getOwnPropertySymbols) {
                          var g = Object.getOwnPropertySymbols(A);
                          e.push.apply(e, g);
                      }
                      return e;
                  })(Object(e)).forEach(function (A) {
                      Object.defineProperty(t, A, Object.getOwnPropertyDescriptor(e, A));
                  }),
            t),
        );
    };
