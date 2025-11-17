r.d(t, { default: () => a }), r(388685);
var n = r(54381),
    o = r(473749),
    c = r(481060),
    i = r(388032),
    l = r(905935);
function a(e) {
    var t,
        r,
        { header: a, body: b, onSubmit: s } = e,
        u = (function (e, t) {
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
        })(e, ["header", "body", "onSubmit"]);
    let [p, f] = o.useState(!1);
    return (0, n.jsxs)(
        c.ConfirmModal,
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
                    (0, n.jsx)(c.Text, {
                        variant: "text-md/normal",
                        children: b,
                    }),
                    (0, n.jsx)("div", {
                        className: l.checkbox,
                        children: (0, n.jsx)(c.Checkbox, {
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
