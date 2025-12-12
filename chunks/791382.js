n.d(t, {
    H: () => g,
    Z: () => f,
});
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(28664),
    s = n(481060),
    o = n(264451),
    c = n(75775),
    d = n(388032),
    u = n(705737);
let g = (e) => {
        let { value: t, isPercent: n } = e;
        if (null == t) return null;
        let { formattedValue: i, isPositive: a } = (0, o.m5)(t, n);
        return (0, r.jsxs)("div", {
            className: u.trendContainer,
            children: [
                (0, r.jsx)(c.Z, { className: l()(u.chartLineIcon, { [u.chartLineIconNegative]: !a }) }),
                (0, r.jsx)(s.Text, {
                    variant: "text-md/normal",
                    className: u.trendDescription,
                    children: d.intl.format(d.t.OTHOvZ, { value: i }),
                }),
            ],
        });
    },
    f = (e) => {
        let { label: t, sublabel: n, value: i, additionalContent: l, tooltip: o } = e;
        return (0, r.jsxs)("div", {
            className: u.container,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: u.labelContainer,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-xs/medium",
                                    className: u.label,
                                    children: t,
                                }),
                                null != o &&
                                    (0, r.jsx)(a.u, {
                                        text: o,
                                        children: (0, r.jsx)(s.d3s, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: u.labelTooltipIcon,
                                        }),
                                    }),
                                null != n
                                    ? (0, r.jsx)(s.Text, {
                                          variant: "text-xs/normal",
                                          className: u.sublabel,
                                          children: n,
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(s.Text, {
                            className: u.value,
                            variant: "text-sm/normal",
                            children: i,
                        }),
                    ],
                }),
                l,
            ],
        });
    };
