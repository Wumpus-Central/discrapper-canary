r.d(t, { Z: () => c });
var n = r(951288);
r(647438);
var l = r(750312),
    i = r(189988),
    a = r(232083);
function c(e) {
    var { user: t, widget: r, containerClassName: c, disableInteraction: o } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            }
            return l;
        })(e, ["user", "widget", "containerClassName", "disableInteraction"]);
    return (0, n.jsx)(l.Z, {
        userId: t.id,
        widget: r,
        className: c,
        disableInteraction: o,
        children:
            r.games.length > 0
                ? (0, n.jsx)(
                      a.Z,
                      (function (e) {
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
                      })(
                          {
                              user: t,
                              games: r.games,
                              widgetType: r.type,
                              disableInteraction: o,
                          },
                          s,
                      ),
                  )
                : (0, n.jsx)(i.Z, { widgetType: r.type }),
    });
}
