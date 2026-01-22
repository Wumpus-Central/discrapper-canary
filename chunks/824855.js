e.d(t, {
    D: () => w,
});
var g = e(627968);
e(64700);
var r = e(996682),
    v = e(211974);
let f = ["#008456", "#6BE473"],
    B = [0.2, 0.5],
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
    n = ["#FFB84B", "#FFE361"],
    l = [0.4, 0.8],
    C = [
        {
            base: 5,
            tint: 1,
        },
        {
            base: 3,
            tint: 1,
        },
    ],
    w = (A) => {
        var t, e;
        let { width: w = 24, height: o = 24, primaryTintColor: Q, secondaryTintColor: i } = A,
            H = (function (A, t) {
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
            })(A, ["width", "height", "primaryTintColor", "secondaryTintColor"]),
            { primaryColorsTransformed: s, secondaryColorsTransformed: a } = (0, v.V)({
                primaryBaseColors: f,
                primaryTintColor: Q,
                primaryTintLuminances: B,
                primaryLuminanceWeights: h,
                secondaryBaseColors: n,
                secondaryTintColor: i,
                secondaryTintLuminances: l,
                secondaryLuminanceWeights: C,
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
            })({}, (0, r.A)(H))),
            (e = e =
                {
                    width: w,
                    height: o,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, g.jsx)("path", {
                            d: "M9 2V3H7V2H3V3H2V7H1V12H2V13H4V14H12V13H14V12H15V7H14V3H13V2H9Z",
                            fill: s[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M13 3V2H10V3H13Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M13 7V6H10V7H13Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M14 6V3H13V6H14Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M10 6V3H9V6H10Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M6 3V2H3V3H6Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M6 7V6H3V7H6Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M7 6V3H6V6H7Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M3 6V3H2V6H3Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M3.00002 10V12H4.00002V13H12V12H13V10H3.00002Z",
                            fill: a[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 13H4V14H12V13Z",
                            fill: a[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M13 13V12H12V13H13Z",
                            fill: a[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M4 13V12H3.00001V13H4Z",
                            fill: a[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M14 13V12H13V13H14Z",
                            fill: s[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M3.00002 13V12H2.00001V13H3.00002Z",
                            fill: s[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M15 11H14V12H15V11Z",
                            fill: s[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M2 11H1V12H2V11Z",
                            fill: s[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M14 14V13H12V14H14Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M9 3V2H7V3H9Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M13 2V1L9 1V2H13Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M7 2V1L3 1V2H7Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M4 14V13H2V14H4Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M15 12H14V13H15V12Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M14 2H13V3H14V2Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M3 2H2V3H3V2Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M2 12H1V13H2V12Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 14H4V15H12V14Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M16 12V6.99998H15V12H16Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M15 7V3H14V7H15Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M2 7L2 3H1L1 7H2Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M1 12L1 6.99998H0L0 12H1Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M13 6V3H10V6H13Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M6 6V3H3V6H6Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M13 9H3V10H13V9Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M14 8H13V9H14V8Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M7 7H6V8H7V7Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M10 7H9V8H10V7Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M3 8H2V9H3V8Z",
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
