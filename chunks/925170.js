r.d(t, { default: () => b }), r(388685);
var n = r(951288),
    i = r(647438),
    o = r(442837),
    l = r(82659),
    c = r(481060),
    a = r(594174),
    s = r(810473),
    u = r(299560),
    f = r(247397),
    p = r(388032),
    d = r(32442);
function b(e) {
    var t,
        r,
        { onClose: b, trackUserProfileEditAction: O } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++)
                    (r = o[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["onClose", "trackUserProfileEditAction"]);
    let y = (0, o.e7)([a.default], () => a.default.getCurrentUser()),
        j = (0, s.Z)(),
        m = i.useRef(new Set(j)),
        h = f.rR.filter((e) => m.current.has(e)),
        v = h.length > 0,
        [w, P] = i.useState(!1),
        k = {
            onClick: () => b(),
            text: p.intl.string(p.t.cpT0Cg),
        },
        C = i.useCallback(() => {
            P(!0), b();
        }, [b]);
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
                      title: p.intl.string(p.t.grUgR0),
                      actions: v ? [] : [k],
                      size: v ? "md" : "sm",
                      onClose: b,
                  },
                  g,
              )),
              (r = r =
                  {
                      children: v
                          ? (0, n.jsx)("ul", {
                                "aria-label": p.intl.string(p.t["+EIBSE"]),
                                className: d.options,
                                children: h.map((e) =>
                                    (0, n.jsx)(
                                        u.Z,
                                        {
                                            widgetType: e,
                                            onAddWidget: C,
                                            loading: w,
                                            trackUserProfileEditAction: O,
                                        },
                                        e,
                                    ),
                                ),
                            })
                          : (0, n.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "text-secondary",
                                children: p.intl.string(p.t["1nkDOj"]),
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
