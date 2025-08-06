n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var l = n(120356),
    o = n.n(l),
    i = n(481060),
    a = n(313201),
    c = n(318374),
    s = n(448968);
function d(e) {
    var { label: t, visuallyHideLabel: n = !1, className: l } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
            }
            return l;
        })(e, ['label', 'visuallyHideLabel', 'className']);
    let u = (0, a.Dt)();
    return (0, r.jsxs)('div', {
        className: o()(l, s.container),
        children: [
            (0, r.jsx)(
                c.Z,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })(
                    {
                        'aria-labelledby': u,
                        overflowCountClassName: s.overflowButton
                    },
                    d
                )
            ),
            n
                ? (0, r.jsx)(i.nn4, {
                      id: u,
                      children: t
                  })
                : (0, r.jsx)(i.Text, {
                      variant: 'text-xs/normal',
                      color: 'text-secondary',
                      id: u,
                      children: t
                  })
        ]
    });
}
