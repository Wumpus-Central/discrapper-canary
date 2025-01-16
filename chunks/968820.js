n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(791382),
    s = n(937615),
    a = n(217597),
    o = n(685389),
    c = n(981631),
    d = n(388032),
    u = n(202513);
function m(e) {
    let { children: t, revenue: n, revenueTrend: m, summaryMetricLabel: h, summaryMetricValue: g, summaryMetricTrend: x, summaryMetricTrendIsPercent: p } = e;
    return (0, i.jsx)(r.FormSection, {
        title: d.intl.string(d.t.ofmOzc),
        children: (0, i.jsxs)('div', {
            className: u.paymentInfoGroup,
            children: [
                (0, i.jsxs)(o.H, {
                    children: [
                        (0, i.jsx)(a.Z, {
                            label: d.intl.string(d.t.iY1jW1),
                            value: (0, s.T4)(null != n ? n : 0, c.pKx.USD),
                            additionalContent: (0, i.jsx)(l.H, {
                                value: m,
                                isPercent: !0
                            })
                        }),
                        (0, i.jsx)(a.Z, {
                            label: h,
                            value: g,
                            additionalContent: (0, i.jsx)(l.H, {
                                value: x,
                                isPercent: p
                            })
                        })
                    ]
                }),
                t
            ]
        })
    });
}
