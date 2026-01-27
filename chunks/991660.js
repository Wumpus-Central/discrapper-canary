n.d(e, {
    A: () => a,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    u = n.n(i),
    o = n(158954),
    s = n(48302);

function a(t) {
    var e, n;
    let { children: i, gradientClassName: a } = t,
        c = (function (t, e) {
            if (null == t) return {};
            var n,
                l,
                r,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, n = Reflect.ownKeys(t); r < n.length; r++)
                    (l = n[r]),
                        !(e.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(t, l) && (i[l] = t[l]);
                return i;
            }
            if (
                ((i = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        l,
                        r = {},
                        i = Object.getOwnPropertyNames(t);
                    for (l = 0; l < i.length; l++)
                        (n = i[l]),
                            !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
                    return r;
                })(t, e)),
                Object.getOwnPropertySymbols)
            )
                for (r = 0, n = Object.getOwnPropertySymbols(t); r < n.length; r++)
                    (l = n[r]),
                        !(e.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(t, l) && (i[l] = t[l]);
            return i;
        })(t, ["children", "gradientClassName"]),
        d = r.useRef(null),
        [p, f] = r.useState(!0),
        S = () => {
            var t;
            (null == (t = d.current) ? void 0 : t.isScrolledToBottom()) === !0 ? f(!1) : f(!0);
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(
                o.ChK,
                ((e = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                }),
                            )),
                            l.forEach(function (e) {
                                var l;
                                (l = n[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (t[e] = l);
                            });
                    }
                    return t;
                })(
                    {
                        fade: !0,
                    },
                    c,
                )),
                (n = n =
                    {
                        ref: (t) => {
                            null != t && ((d.current = t), S());
                        },
                        onScroll: S,
                        children: i,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : (function (t, e) {
                          var n = Object.keys(t);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(t);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(n)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      }),
                e),
            ),
            (0, l.jsx)("div", {
                className: u()(s.D, a),
                "data-shown": p,
            }),
        ],
    });
}
