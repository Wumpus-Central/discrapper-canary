e.d(t, {
    l: () => n,
});
var g = e(627968);
e(64700);
var r = e(996682),
    v = e(211974);
let f = ["#4282d8", "#0abbff", "#ffffff"],
    B = [0.1, 0.32, 1],
    h = [
        {
            base: 3,
            tint: 1,
        },
        {
            base: 3,
            tint: 1,
        },
        {
            base: 10,
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
                            d: "M13 6V5h-1V4h-1V3h-1V2H9V1H7v1H6v1H5v1H4v1H3v1H2v2H1v5h1v1h2v1h8v-1h2v-1h1V8h-1V6h-1Z",
                            fill: o[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M7 0v1h2V0H7ZM6 1v1h1V1H6ZM9 1v1h1V1H9ZM10 2v1h1V2h-1ZM11 3v1h1V3h-1ZM12 4v1h1V4h-1ZM13 5v1h1V5h-1ZM14 6v2h1V6h-1ZM1 6v2h1V6H1ZM0 8v5h1V8H0ZM15 8v5h1V8h-1ZM5 2v1h1V2H5ZM4 3v1h1V3H4ZM3 4v1h1V4H3ZM2 5v1h1V5H2ZM1 13v1h1v-1H1ZM14 13v1h1v-1h-1ZM4 15v1h8v-1H4Z",
                            fill: "#000",
                        }),
                        (0, g.jsx)("path", {
                            d: "M4 14v1h8v-1H4Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M2 14v1h2v-1H2ZM14 15v-1h-2v1h2Z",
                            fill: "#000",
                        }),
                        (0, g.jsx)("path", {
                            d: "M7 1v1h2V1H7Z",
                            fill: o[2],
                        }),
                        (0, g.jsx)("path", {
                            opacity: ".5",
                            d: "M11 8V7h-1V6H9V5H7v1H6v1H5v1H4v3h1v1h6v-1h1V8h-1Z",
                            fill: "#fff",
                        }),
                        (0, g.jsx)("path", {
                            d: "M6 2v1h1V2H6ZM5 3v1h1V3H5ZM6 4v1h1V4H6ZM4 4v1h1V4H4ZM3 5v1h1V5H3ZM2 6v2h1V6H2ZM1 8v2h1V8H1Z",
                            fill: o[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 5v1h1V5h-1ZM13 6v2h1V6h-1ZM14 8v4h-1v1h-1v1h2v-1h1V8h-1ZM2 14h2v-1H2v1Z",
                            fill: o[0],
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
