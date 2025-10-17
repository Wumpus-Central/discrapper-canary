n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    l = n(481060),
    o = n(313201),
    s = n(318374),
    c = n(245583);
function u(e) {
    var { label: t, visuallyHideLabel: n = !1, className: i, size: u = l.EFr.SIZE_16, maxUsers: d = 4 } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    (n = a[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["label", "visuallyHideLabel", "className", "size", "maxUsers"]);
    let g = (0, o.Dt)();
    return (0, r.jsxs)("div", {
        className: a()(i, c.container),
        children: [
            (0, r.jsx)(
                s.Z,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        "aria-labelledby": g,
                        overflowCountClassName: c.overflowButton,
                        size: u,
                        maxUsers: d,
                    },
                    f,
                ),
            ),
            n
                ? (0, r.jsx)(l.nn4, {
                      id: g,
                      children: t,
                  })
                : (0, r.jsx)(l.Text, {
                      variant: "text-xs/normal",
                      color: "text-secondary",
                      id: g,
                      children: t,
                  }),
        ],
    });
}
