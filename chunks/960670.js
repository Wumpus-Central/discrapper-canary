r.d(t, { default: () => a }), r(388685);
var n = r(54381),
    c = r(473749),
    o = r(481060),
    i = r(388032),
    l = r(513318);
function a(e) {
    var t,
        r,
        { header: a, body: b, onSubmit: s } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                c = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        c = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (c[r] = e[r]);
                    return c;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++)
                    (r = o[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (c[r] = e[r]);
            }
            return c;
        })(e, ["header", "body", "onSubmit"]);
    let [p, f] = c.useState(!1);
    return (0, n.jsxs)(
        o.VoidConfirmModal,
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
                header: a,
                confirmText: i.intl.string(i.t["26C4oi"]),
                cancelText: i.intl.string(i.t["ETE/oC"]),
                onConfirm: () => {
                    s(null, p);
                },
            },
            u,
        )),
        (r = r =
            {
                children: [
                    (0, n.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: b,
                    }),
                    (0, n.jsx)("div", {
                        className: l.checkbox,
                        children: (0, n.jsx)(o.Checkbox, {
                            checked: p,
                            onChange: () => f((e) => !e),
                            label: i.intl.string(i.t.bq3JXs),
                            labelType: "secondary",
                        }),
                    }),
                ],
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
