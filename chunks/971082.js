r.d(t, { Z: () => u });
var n = r(951288);
r(647438);
var l = r(120356),
    i = r.n(l),
    a = r(481060),
    o = r(313201),
    c = r(318374),
    s = r(245583);
function u(e) {
    var { label: t, visuallyHideLabel: r = !1, className: l, size: u = a.EFr.SIZE_16, maxUsers: d = 4 } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            }
            return l;
        })(e, ["label", "visuallyHideLabel", "className", "size", "maxUsers"]);
    let g = (0, o.Dt)();
    return (0, n.jsxs)("div", {
        className: i()(l, s.container),
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
                ? (0, n.jsx)(a.nn4, {
                      id: g,
                      children: t,
                  })
                : (0, n.jsx)(a.Text, {
                      variant: "text-xs/normal",
                      color: "text-secondary",
                      id: g,
                      children: t,
                  }),
        ],
    });
}
