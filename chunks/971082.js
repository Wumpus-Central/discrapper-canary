n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var o = n(120356),
    l = n.n(o),
    i = n(481060),
    a = n(313201),
    c = n(318374),
    s = n(448968);
function d(e) {
    var { label: t, visuallyHideLabel: n = !1, className: o } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
            }
            return o;
        })(e, ['label', 'visuallyHideLabel', 'className']);
    let u = (0, a.Dt)();
    return (0, r.jsxs)('div', {
        className: l()(o, s.container),
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
