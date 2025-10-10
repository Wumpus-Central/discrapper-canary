r.d(t, { Z: () => u });
var n = r(951288);
r(647438);
var i = r(120356),
    a = r.n(i),
    o = r(481060),
    l = r(313201),
    c = r(318374),
    s = r(245583);
function u(e) {
    var { label: t, visuallyHideLabel: r = !1, className: i, size: u = o.EFr.SIZE_16, maxUsers: d = 4 } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                    (r = a[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["label", "visuallyHideLabel", "className", "size", "maxUsers"]);
    let g = (0, l.Dt)();
    return (0, n.jsxs)("div", {
        className: a()(i, s.container),
        children: [
            (0, n.jsx)(
                c.Z,
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
                        "aria-labelledby": g,
                        overflowCountClassName: s.overflowButton,
                        size: u,
                        maxUsers: d,
                    },
                    f,
                ),
            ),
            r
                ? (0, n.jsx)(o.nn4, {
                      id: g,
                      children: t,
                  })
                : (0, n.jsx)(o.Text, {
                      variant: "text-xs/normal",
                      color: "text-secondary",
                      id: g,
                      children: t,
                  }),
        ],
    });
}
