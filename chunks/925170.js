r.d(t, { default: () => O }), r(388685);
var n = r(951288),
    o = r(647438),
    i = r(793030),
    c = r(442837),
    l = r(481060),
    s = r(594174),
    a = r(810473),
    u = r(299560),
    p = r(247397),
    f = r(388032),
    b = r(279994);
function O(e) {
    var t,
        r,
        { onClose: O, trackUserProfileEditAction: d } = e,
        y = (function (e, t) {
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
        })(e, ["onClose", "trackUserProfileEditAction"]);
    let g = (0, c.e7)([s.default], () => s.default.getCurrentUser()),
        j = (0, a.Z)(),
        h = o.useRef(new Set(j)),
        m = p.rR.filter((e) => h.current.has(e)),
        w = m.length > 0,
        [P, k] = o.useState(!1),
        v = {
            onClick: () => O(),
            text: f.intl.string(f.t.cpT0Cq),
        },
        x = o.useCallback(() => {
            k(!0), O();
        }, [O]);
    return null == g
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
                      title: f.intl.string(f.t["grUgR+"]),
                      actions: w ? [] : [v],
                      size: w ? "md" : "sm",
                      onClose: O,
                  },
                  y,
              )),
              (r = r =
                  {
                      children: w
                          ? (0, n.jsx)("ul", {
                                "aria-label": f.intl.string(f.t["+EIBSA"]),
                                className: b.options,
                                children: m.map((e) =>
                                    (0, n.jsx)(
                                        u.Z,
                                        {
                                            widgetType: e,
                                            onAddWidget: x,
                                            loading: P,
                                            trackUserProfileEditAction: d,
                                        },
                                        e,
                                    ),
                                ),
                            })
                          : (0, n.jsx)(l.Text, {
                                variant: "text-md/medium",
                                color: "text-secondary",
                                children: f.intl.string(f.t["1nkDOs"]),
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
