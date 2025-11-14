n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(851397),
    a = n(541699),
    l = n(321947),
    o = n(835255),
    c = n(688192);
function s(e) {
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
}
function u(e) {
    var { item: t, cardSize: n = c.U.MEDIUM, showOverlayButton: u = !0 } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    (n = a[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["item", "cardSize", "showOverlayButton"]);
    return (0, a.Q)(t)
        ? (0, r.jsx)(
              o.ZP,
              s(
                  {
                      item: t,
                      cardSize: n,
                      showOverlayButton: u,
                  },
                  d,
              ),
          )
        : (0, l.F)(t)
          ? (0, r.jsx)(
                i.Z,
                s(
                    {
                        item: t,
                        cardSize: n,
                        showOverlayButton: u,
                    },
                    d,
                ),
            )
          : null;
}
