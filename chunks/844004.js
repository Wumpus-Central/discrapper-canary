e.d(t, { c: () => w });
var g = e(627968);
e(64700);
var r = e(996682),
    v = e(211974);
let f = ["#7fb134", "#bcef42", "#f0f0f0"],
    B = ["#816bee", "#b79cf8"],
    h = [0.1, 0.6, 0.95],
    n = [
        {
            base: 8,
            tint: 1,
        },
        {
            base: 4,
            tint: 1,
        },
        {
            base: 8,
            tint: 1,
        },
    ],
    l = [0.1, 0.3],
    C = [
        {
            base: 8,
            tint: 1,
        },
        {
            base: 6,
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
                primaryTintLuminances: h,
                primaryLuminanceWeights: n,
                secondaryBaseColors: B,
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
                            d: "M14 4V3h-1V2h-1V1H6v1H4v1H3v1H2v2H1v5h1v1h1v1h1v1h1v1h5v-1h2v-1h1v-1h1v-2h1V4h-1Z",
                            fill: s[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M15 1h-2v1h2V1Z",
                            fill: s[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M3 13H1v1h2v-1Z",
                            fill: s[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M4 14H1v1h3v-1Z",
                            fill: s[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M15 8h-1v2h1V8Z",
                            fill: a[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 1H6v1h6V1Z",
                            fill: s[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 2H6v1h6V2Z",
                            fill: a[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M10 14H5v1h5v-1Z",
                            fill: a[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M15 2h-1v1h1V2Z",
                            fill: s[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M6 5H5v1h1V5ZM3 4H2v1h1V4ZM4 3H3v1h1V3Z",
                            fill: s[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M6 3H5v1h1V3ZM13 3h-1v1h1V3Z",
                            fill: a[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M5 2H4v1h1V2ZM7 6H6v1h1V6ZM2 12H1v1h1v-1Z",
                            fill: s[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M14 11h-1v1h1v-1ZM13 12h-1v1h1v-1ZM12 13h-1v1h1v-1Z",
                            fill: a[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M15 1v2h-1V2h-1v1h1v1h1v6h1V1h-1ZM3 3H2v1h1V3ZM4 2h2V1H4v1H3v1h1V2ZM15 10h-1v2h1v-2ZM2 4H1v2h1V4ZM12 14h-2v1h2v-1ZM14 12h-1v1h1v-1ZM3 12H2v1h1v-1ZM4 13H3v1h1v-1ZM2 11H1v1h1v-1ZM13 13h-1v1h1v-1ZM1 6H0v9h1V6Z",
                            fill: "#000",
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 2h1V1h2V0H6v1h6v1ZM5 15v-1H4v1H1v1h9v-1H5Z",
                            fill: "#000",
                        }),
                        (0, g.jsx)("path", {
                            d: "M2 6H1v2h1V6Z",
                            fill: s[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M10 6H8v1h2V6ZM9 10H7v1h2v-1ZM11 7h-1v2h1V7ZM3 11h2v-1H4V5H3v6ZM11 4H7v1h4V4ZM10 12H6v1h4v-1ZM15 5h-1v3h1V5ZM2 8H1v3h1V8ZM5 4H4v1h1V4ZM8 7H7v1h1V7ZM7 9H6v1h1V9ZM6 11H5v1h1v-1ZM10 9H9v1h1V9ZM11 11h-1v1h1v-1ZM12 10h-1v1h1v-1ZM7 6V5H6v1H5v3h1V6h1ZM14 4h-1v1h1V4ZM12 5h-1v1h1V5ZM13 6h-1v4h1V6ZM3 11H2v1h1v-1ZM4 12H3v1h1v-1ZM5 13H4v1h1v-1Z",
                            fill: a[1],
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
