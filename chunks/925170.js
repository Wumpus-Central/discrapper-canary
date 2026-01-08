r.d(t, { default: () => b }), r(388685);
var n = r(54381),
    o = r(473749),
    i = r(793030),
    l = r(442837),
    c = r(481060),
    s = r(594174),
    u = r(500143),
    a = r(299560),
    f = r(388032),
    p = r(387083);
function b(e) {
    var t,
        r,
        { onClose: b, trackUserProfileEditAction: d } = e,
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
        })(e, ["onClose", "trackUserProfileEditAction"]);
    let g = (0, l.e7)([s.default], () => s.default.getCurrentUser()),
        y = (function () {
            let e = (0, u.Z)({ location: "UserProfileWidgetAddModal" }),
                [t, r] = o.useState(e);
            return (
                o.useEffect(() => {
                    e.length > t.length && r(e);
                }, [e, t]),
                t
            );
        })(),
        j = y.length > 0,
        [h, m] = o.useState(!1),
        P = {
            onClick: () => b(),
            text: f.intl.string(f.t.cpT0Cq),
        },
        w = o.useCallback(() => {
            m(!0), b();
        }, [b]);
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
                      actions: j ? [] : [P],
                      size: j ? "md" : "sm",
                      onClose: b,
                  },
                  O,
              )),
              (r = r =
                  {
                      children: j
                          ? (0, n.jsx)("ul", {
                                "aria-label": f.intl.string(f.t["+EIBSA"]),
                                className: p.options,
                                children: y.map((e) =>
                                    (0, n.jsx)(
                                        a.Z,
                                        {
                                            widget: e,
                                            onAddWidget: w,
                                            loading: h,
                                            trackUserProfileEditAction: d,
                                        },
                                        e.getUniqueKey(),
                                    ),
                                ),
                            })
                          : (0, n.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "text-subtle",
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
