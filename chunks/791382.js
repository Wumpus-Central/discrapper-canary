n.d(t, {
    H: () => g,
    Z: () => m,
});
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    s = n(28664),
    a = n(481060),
    o = n(264451),
    c = n(75775),
    u = n(388032),
    d = n(8275);
let g = (e) => {
        let { value: t, isPercent: n } = e;
        if (null == t) return null;
        let { formattedValue: i, isPositive: s } = (0, o.m5)(t, n);
        return (0, r.jsxs)("div", {
            className: d.trendContainer,
            children: [
                (0, r.jsx)(c.Z, { className: l()(d.chartLineIcon, { [d.chartLineIconNegative]: !s }) }),
                (0, r.jsx)(a.Text, {
                    variant: "text-md/normal",
                    className: d.trendDescription,
                    children: u.intl.format(u.t.OTHOvZ, { value: i }),
                }),
            ],
        });
    },
    m = (e) => {
        let { label: t, sublabel: n, value: i, additionalContent: l, tooltip: o } = e;
        return (0, r.jsxs)("div", {
            className: d.container,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: d.labelContainer,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: "text-xs/medium",
                                    className: d.label,
                                    children: t,
                                }),
                                null != o &&
                                    (0, r.jsx)(s.u, {
                                        text: o,
                                        children: (0, r.jsx)(a.d3s, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: d.labelTooltipIcon,
                                        }),
                                    }),
                                null != n
                                    ? (0, r.jsx)(a.Text, {
                                          variant: "text-xs/normal",
                                          className: d.sublabel,
                                          children: n,
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(a.Text, {
                            className: d.value,
                            variant: "text-sm/normal",
                            children: i,
                        }),
                    ],
                }),
                l,
            ],
        });
    };
