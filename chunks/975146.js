n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    l = n(481060),
    o = n(871499),
    s = n(388032),
    c = n(486748);
function u(e) {
    let { className: t, count: n } = e;
    return (0, r.jsxs)('div', {
        className: a()(c.root, c.comboIcon, t),
        children: [
            (0, r.jsx)(l.BFJ, {
                size: 'md',
                color: 'currentColor',
                className: c.icon
            }),
            null != n &&
                (0, r.jsx)(l.Text, {
                    color: 'none',
                    className: c.count,
                    variant: 'text-md/normal',
                    children: n
                })
        ]
    });
}
function d(e) {
    var { count: t } = e,
        n = (function (e, t) {
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
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['count']);
    return (0, r.jsx)(
        o.Z,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                label: s.NW.string(s.t.jNqDh4),
                iconComponent: (e) => {
                    let { className: n } = e;
                    return (0, r.jsx)(u, {
                        className: n,
                        count: t
                    });
                },
                tooltipPosition: 'bottom'
            },
            n
        )
    );
}
