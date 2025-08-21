r.d(t, { default: () => d }), r(388685);
var n = r(951288),
    o = r(647438),
    i = r(442837),
    l = r(82659),
    c = r(481060),
    s = r(594174),
    u = r(810473),
    a = r(299560),
    p = r(247397),
    f = r(388032),
    b = r(32442);
function d(e) {
    var t,
        r,
        { onClose: d } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ["onClose"]);
    let y = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        g = (0, u.Z)(),
        j = o.useRef(new Set(g)),
        m = p.rR.filter((e) => j.current.has(e)),
        h = m.length > 0,
        [w, v] = o.useState(!1),
        P = {
            onClick: () => d(),
            text: f.intl.string(f.t.cpT0Cg),
        },
        x = o.useCallback(() => {
            v(!0), d();
        }, [d]);
    return null == y
        ? null
        : (0, n.jsx)(
              l.Modal,
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
                      title: f.intl.string(f.t.grUgR0),
                      actions: h ? [] : [P],
                      size: h ? "md" : "sm",
                      onClose: d,
                  },
                  O,
              )),
              (r = r =
                  {
                      children: h
                          ? (0, n.jsx)("ul", {
                                "aria-label": f.intl.string(f.t["+EIBSE"]),
                                className: b.options,
                                children: m.map((e) =>
                                    (0, n.jsx)(
                                        a.Z,
                                        {
                                            widgetType: e,
                                            onAddWidget: x,
                                            loading: w,
                                        },
                                        e,
                                    ),
                                ),
                            })
                          : (0, n.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "text-secondary",
                                children: f.intl.string(f.t["1nkDOj"]),
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
