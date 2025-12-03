n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(36563),
    o = n(481060),
    c = n(313201),
    s = n(245583);
function u(e) {
    var { label: t, visuallyHideLabel: n = !1, className: i, size: u = o.EFr.SIZE_16, maxUsers: d = 4 } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["label", "visuallyHideLabel", "className", "size", "maxUsers"]);
    let g = (0, c.Dt)();
    return (0, r.jsxs)("div", {
        className: l()(i, s.container),
        children: [
            (0, r.jsx)(
                a.Z,
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
                        overflowCountClassName: s.overflowButton,
                        size: u,
                        maxUsers: d,
                    },
                    f,
                ),
            ),
            n
                ? (0, r.jsx)(o.nn4, {
                      id: g,
                      children: t,
                  })
                : (0, r.jsx)(o.Text, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      id: g,
                      children: t,
                  }),
        ],
    });
}
