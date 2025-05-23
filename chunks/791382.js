n.d(t, {
    H: () => d,
    Z: () => m
});
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(264451),
    o = n(75775),
    c = n(388032),
    u = n(243110);
let d = (e) => {
        let { value: t, isPercent: n } = e;
        if (null == t) return null;
        let { formattedValue: i, isPositive: d } = (0, a.m5)(t, n);
        return (0, r.jsxs)('div', {
            className: u.trendContainer,
            children: [
                (0, r.jsx)(o.Z, { className: l()(u.chartLineIcon, { [u.chartLineIconNegative]: !d }) }),
                (0, r.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    className: u.trendDescription,
                    children: c.intl.format(c.t.OTHOvb, { value: i })
                })
            ]
        });
    },
    m = (e) => {
        let { label: t, sublabel: n, value: i, additionalContent: l, tooltip: a } = e;
        return (0, r.jsxs)('div', {
            className: u.container,
            children: [
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsxs)('div', {
                            className: u.labelContainer,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-xs/medium',
                                    className: u.label,
                                    children: t
                                }),
                                null != a &&
                                    (0, r.jsx)(s.ua7, {
                                        text: a,
                                        children: (e) =>
                                            (0, r.jsx)(
                                                s.d3s,
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
                                                        size: 'xs',
                                                        color: 'currentColor',
                                                        className: u.labelTooltipIcon
                                                    },
                                                    e
                                                )
                                            )
                                    }),
                                null != n
                                    ? (0, r.jsx)(s.Text, {
                                          variant: 'text-xs/normal',
                                          className: u.sublabel,
                                          children: n
                                      })
                                    : null
                            ]
                        }),
                        (0, r.jsx)(s.Text, {
                            className: u.value,
                            variant: 'text-sm/normal',
                            children: i
                        })
                    ]
                }),
                l
            ]
        });
    };
