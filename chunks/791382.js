n.d(t, {
    H: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    s = n(264451),
    o = n(75775),
    c = n(388032),
    d = n(489953);
let u = (e) => {
    let { value: t, isPercent: n } = e;
    if (null == t) return null;
    let { formattedValue: r, isPositive: u } = (0, s.m5)(t, n);
    return (0, i.jsxs)('div', {
        className: d.trendContainer,
        children: [
            (0, i.jsx)(o.Z, { className: l()(d.chartLineIcon, { [d.chartLineIconNegative]: !u }) }),
            (0, i.jsx)(a.Text, {
                variant: 'text-md/normal',
                className: d.trendDescription,
                children: c.intl.format(c.t.OTHOvb, { value: r })
            })
        ]
    });
};
t.Z = (e) => {
    let { label: t, sublabel: n, value: r, additionalContent: l, tooltip: s } = e;
    return (0, i.jsxs)('div', {
        className: d.container,
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)('div', {
                        className: d.labelContainer,
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: 'text-xs/medium',
                                className: d.label,
                                children: t
                            }),
                            null != s &&
                                (0, i.jsx)(a.Tooltip, {
                                    text: s,
                                    children: (e) =>
                                        (0, i.jsx)(a.CircleInformationIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: d.labelTooltipIcon,
                                            ...e
                                        })
                                }),
                            null != n
                                ? (0, i.jsx)(a.Text, {
                                      variant: 'text-xs/normal',
                                      className: d.sublabel,
                                      children: n
                                  })
                                : null
                        ]
                    }),
                    (0, i.jsx)(a.Text, {
                        className: d.value,
                        variant: 'text-sm/normal',
                        children: r
                    })
                ]
            }),
            l
        ]
    });
};
