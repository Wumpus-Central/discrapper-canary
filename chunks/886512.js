e.d(t, { V: () => l });
var r = e(255367);
e(73800);
var g = e(331595),
    v = e(84502);
let n = ["#87553B", "#B88166"],
    f = [0.2, 0.5],
    B = [
        {
            base: 7,
            tint: 1,
        },
        {
            base: 3,
            tint: 1,
        },
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
                        for (r = 0; r < v.length; r++) (e = v[r]), t.indexOf(e) >= 0 || (g[e] = A[e]);
                        return g;
                    })(A, t);
                if (Object.getOwnPropertySymbols) {
                    var v = Object.getOwnPropertySymbols(A);
                    for (r = 0; r < v.length; r++)
                        (e = v[r]),
                            !(t.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(A, e) && (g[e] = A[e]);
                }
                return g;
            })(A, ["width", "height", "primaryTintColor"]);
        let { primaryColorsTransformed: C } = (0, v.s)({
            primaryBaseColors: n,
            primaryTintColor: i,
            primaryTintLuminances: f,
            primaryLuminanceWeights: B,
        });
        return (0, r.jsxs)(
            "svg",
            ((t = (function (A) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(e);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(e).filter(function (A) {
                                return Object.getOwnPropertyDescriptor(e, A).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = e[t]),
                                t in A
                                    ? Object.defineProperty(A, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (A[t] = r);
                        });
                }
                return A;
            })({}, (0, g.Z)(o))),
            (e = e =
                {
                    width: l,
                    height: h,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, r.jsx)("path", {
                            d: "M15 6H13V8H15V6Z",
                            fill: C[1],
                        }),
                        (0, r.jsx)("path", {
                            d: "M2.99998 6H0.999985V8H2.99998V6Z",
                            fill: C[1],
                        }),
                        (0, r.jsx)("path", {
                            d: "M9.99998 14H5.99998V5H6.99998V4H8.99998V5H9.99998V14Z",
                            fill: C[1],
                        }),
                        (0, r.jsx)("path", {
                            d: "M10 6V7H9V10H11V11H12V6H10Z",
                            fill: C[0],
                        }),
                        (0, r.jsx)("path", {
                            d: "M6 6V7H7V10H5V11H4V6H6Z",
                            fill: C[0],
                        }),
                        (0, r.jsx)("path", {
                            d: "M9.99998 12H5.99998V13H9.99998V12Z",
                            fill: C[0],
                        }),
                        (0, r.jsx)("path", {
                            d: "M15 7H13V8H15V7Z",
                            fill: C[0],
                        }),
                        (0, r.jsx)("path", {
                            d: "M2.99998 7H0.999985V8H2.99998V7Z",
                            fill: C[0],
                        }),
                        (0, r.jsx)("path", {
                            d: "M8.99998 14H6.99998V15H8.99998V14Z",
                            fill: C[0],
                        }),
                        (0, r.jsx)("path", {
                            d: "M9.99998 4H8.99998V5H9.99998V4Z",
                            fill: "#D1CDD5",
                        }),
                        (0, r.jsx)("path", {
                            d: "M6.99998 4H5.99998V5H6.99998V4Z",
                            fill: "#D1CDD5",
                        }),
                        (0, r.jsx)("path", {
                            d: "M11 5H9.99998V6H11V5Z",
                            fill: "#D1CDD5",
                        }),
                        (0, r.jsx)("path", {
                            d: "M5.99998 5H4.99998V6H5.99998V5Z",
                            fill: "#D1CDD5",
                        }),
                        (0, r.jsx)("path", {
                            d: "M5.99998 5H3.99998V3H2.99998V2H1.99998V1H4.99998V2H5.99998V5Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M9.99998 5H12V3H13V2H14V1H11V2H9.99998V5Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M12 2H11V3H12V2Z",
                            fill: "#D1CDD5",
                        }),
                        (0, r.jsx)("path", {
                            d: "M4.99998 2H3.99998V3H4.99998V2Z",
                            fill: "#D1CDD5",
                        }),
                        (0, r.jsx)("path", {
                            d: "M4.99998 0H1.99998V1H4.99998V0Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M14 0H11V1H14V0Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M5.99998 9V7H4.99999V9H5.99998Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M11 9V7H9.99999V9H11Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M8.99998 12H6.99998V13H8.99998V12Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M8.99998 10H6.99998V11H8.99998V10Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M13 5V3H12V5H11V6H12V11H13V9H15V8H13V6H15V8H16V5H13Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M5 5H4V3H3V5H0V8H1V6H3V8H1V9H3V11H4V6H5V5Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M11 11V10H10V14H11V12H12V11H11Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M9.99998 14H8.99998V15H9.99998V14Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M7 15V14H6V15H5V16H9V15H7Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M5 10V11H4V12H5V14H6V10H5Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M2 2V1H1V3H3V2H2Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M5.99998 1H4.99998V2H5.99998V1Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M9 2V3H7V2H6V4H10V2H9Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M11 1H9.99998V2H11V1Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M14 1V2H13V3H15V1H14Z",
                            fill: "black",
                        }),
                    ],
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
            t),
        );
    };
