n.d(t, {
    A: () => E,
}),
    n(65821);
var r,
    i = n(627968);
n(64700);
var l = n(503698),
    o = n.n(l),
    a = n(953727),
    s = n(106199),
    c =
        (((r = {}).LEFT = "LEFT"),
        (r.RIGHT = "RIGHT"),
        (r.UP = "UP"),
        (r.DOWN = "DOWN"),
        (r.UP_LEFT = "UP_LEFT"),
        (r.DOWN_RIGHT = "DOWN_RIGHT"),
        r);
let u = (e) => {
    var t, n;
    let {
            width: r = 24,
            height: l = 24,
            color: c = "currentColor",
            direction: u,
            foreground: E,
            className: d,
            title: _,
        } = e,
        T = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["width", "height", "color", "direction", "foreground", "className", "title"]);
    return (0, i.jsxs)(
        "svg",
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, (0, a.A)(T))),
        (n = n =
            {
                width: r,
                height: l,
                className: o()(
                    d,
                    (function (e) {
                        switch (e) {
                            case "LEFT":
                                return s.kb;
                            case "RIGHT":
                                return s.pG;
                            case "UP":
                                return null;
                            case "DOWN":
                                return s.TR;
                            case "UP_LEFT":
                                return s.l0;
                            case "DOWN_RIGHT":
                                return s.Nu;
                            default:
                                throw Error("Invalid Direction ".concat(e));
                        }
                    })(u),
                ),
                viewBox: "0 0 24 24",
                children: [
                    null != _
                        ? (0, i.jsx)("title", {
                              children: _,
                          })
                        : null,
                    (0, i.jsx)("polygon", {
                        className: E,
                        fill: c,
                        fillRule: "nonzero",
                        points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
                    }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
};
u.Directions = c;
let E = u;
