r.d(t, { default: () => f }), r(388685);
var n = r(951288),
    o = r(647438),
    c = r(442837),
    i = r(82659),
    l = r(594174),
    s = r(810473),
    u = r(299560),
    p = r(247397),
    a = r(388032),
    b = r(32442);
function f(e) {
    var t,
        r,
        { onClose: f } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) (r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (n = 0; n < c.length; n++)
                    (r = c[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ["onClose"]);
    let y = (0, c.e7)([l.default], () => l.default.getCurrentUser()),
        d = (0, s.Z)(),
        g = o.useMemo(() => {
            let e = new Set(d);
            return p.rR.filter((t) => e.has(t));
        }, [d]);
    return null == y
        ? null
        : (0, n.jsx)(
              i.Modal,
              ((t = (function (e) {
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
                      title: a.intl.string(a.t.grUgR0),
                      actions: [],
                      onClose: f,
                  },
                  O,
              )),
              (r = r =
                  {
                      children: (0, n.jsx)("ul", {
                          "aria-label": a.intl.string(a.t["+EIBSE"]),
                          className: b.options,
                          children: g.map((e) =>
                              (0, n.jsx)(
                                  u.Z,
                                  {
                                      widgetType: e,
                                      onAddWidget: f,
                                  },
                                  e,
                              ),
                          ),
                      }),
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                  : (function (e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            r.push.apply(r, n);
                        }
                        return r;
                    })(Object(r)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                    }),
              t),
          );
}
