r.d(t, { Z: () => h });
var n = r(255367);
r(73800);
var s = r(120356),
    l = r.n(s),
    a = r(481060),
    i = r(871499),
    o = r(388032),
    c = r(486748);
function u(e) {
    let { className: t, count: r } = e;
    return (0, n.jsxs)('div', {
        className: l()(c.root, c.comboIcon, t),
        children: [
            (0, n.jsx)(a.BFJ, {
                size: 'md',
                color: 'currentColor',
                className: c.icon
            }),
            null != r &&
                (0, n.jsx)(a.Text, {
                    color: 'none',
                    className: c.count,
                    variant: 'text-md/normal',
                    children: r
                })
        ]
    });
}
function h(e) {
    var { count: t } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                s = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        s = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) ((r = l[n]), t.indexOf(r) >= 0 || (s[r] = e[r]));
                    return s;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++) ((r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]));
            }
            return s;
        })(e, ['count']);
    return (0, n.jsx)(
        i.Z,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        ((n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n));
                    }));
            }
            return e;
        })(
            {
                label: o.intl.string(o.t.jNqDh4),
                iconComponent: (e) => {
                    let { className: r } = e;
                    return (0, n.jsx)(u, {
                        className: r,
                        count: t
                    });
                },
                tooltipPosition: 'bottom'
            },
            r
        )
    );
}
