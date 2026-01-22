e.d(t, {
    r: () => n,
});
var g = e(627968);
e(64700);
var r = e(996682),
    v = e(211974);
let f = ["#353639", "#74767F", "#D1CDD5"],
    B = [0.1, 0.4, 0.7],
    h = [
        {
            base: 10,
            tint: 1,
        },
        {
            base: 4,
            tint: 1,
        },
        {
            base: 6,
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
                            d: "M2 1H4V2H5V3H6V4H10V3H11V2H12V1H14V6H15V13H14V14H13V15H3V14H2V13H1V6H2V1Z",
                            fill: o[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M13 15V16H3V15H13Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M14 15H13V14H14V15Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M14 14H13V13H14V14Z",
                            fill: o[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M3 14H2V13H3V14Z",
                            fill: o[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M3 15H2V14H3V15Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M5 2H4V1H5V2Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M6 3H5V2H6V3Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M4 1H2V0H4V1Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M11 1H12V2H11V1Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M10 2H11V3H10V2Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M10 10H11V11H10V10Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M9 11H12V12H9V11Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M4 11H7V12H4V11Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M4 12H12V13H4V12Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M3 13.0005H13V14.0005H3V13.0005Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M5 10H6V11H5V10Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M6 9.00024H9.99999V10.0002H6V9.00024Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 0H14V1H12V0Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M10 4H6V3H10V4Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M15 14H14V13H15V14Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M14 13H13V12H14V13Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M2 14H1V13H2V14Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M3 13H2V12H3V13Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M16 13H15V6H16V13Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M15 6H14V0H15V6Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M2 6H1V0H2V6Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M1 13H0V6H1V13Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M10 2.99976H11V5.99976H10V2.99976Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M5 2.99976H6V5.99976H5V2.99976Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M7 3.99976H9V6.99983H7V3.99976Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 3H13V4H12V3Z",
                            fill: "#FF7FC0",
                        }),
                        (0, g.jsx)("path", {
                            d: "M13 2H14V5H13V2Z",
                            fill: "#FF7FC0",
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 8.99994H11V7H12V8.99994Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M5 8.99994H4V7H5V8.99994Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M4 4H3V3H4V4Z",
                            fill: "#FF7FC0",
                        }),
                        (0, g.jsx)("path", {
                            d: "M3 5H2V2H3V5Z",
                            fill: "#FF7FC0",
                        }),
                        (0, g.jsx)("path", {
                            d: "M15 11H12V10H15V11Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M4 11H1V10H4V11Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M13 14H3V15H13V14Z",
                            fill: o[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M10 11H6V10H10V11Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M8.99999 12H7V11H8.99999V12Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M9 9H7V7H9V9Z",
                            fill: "white",
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
