r.d(t, { Z: () => u });
var n = r(54381);
r(473749);
var i = r(851397),
    l = r(541699),
    o = r(321947),
    s = r(835255),
    c = r(688192);
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function u(e) {
    var { item: t, cardSize: r = c.U.MEDIUM, showOverlayButton: u = !0 } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++)
                    (r = l[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["item", "cardSize", "showOverlayButton"]);
    return (0, l.Q)(t)
        ? (0, n.jsx)(
              s.ZP,
              a(
                  {
                      item: t,
                      cardSize: r,
                      showOverlayButton: u,
                  },
                  d,
              ),
          )
        : (0, o.F)(t)
          ? (0, n.jsx)(
                i.Z,
                a(
                    {
                        item: t,
                        cardSize: r,
                        showOverlayButton: u,
                    },
                    d,
                ),
            )
          : null;
}
