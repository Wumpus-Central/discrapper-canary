n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(791382),
    s = n(937615),
    a = n(217597),
    o = n(685389),
    c = n(981631),
    d = n(388032),
    u = n(380544);
function m(e) {
    let { children: t, revenue: n, revenueTrend: m, summaryMetricLabel: g, summaryMetricValue: p, summaryMetricTrend: h, summaryMetricTrendIsPercent: f } = e;
    return (0, r.jsx)(i.hjN, {
        title: d.intl.string(d.t.ofmOzc),
        children: (0, r.jsxs)('div', {
            className: u.paymentInfoGroup,
            children: [
                (0, r.jsxs)(o.H, {
                    children: [
                        (0, r.jsx)(a.Z, {
                            label: d.intl.string(d.t.iY1jW1),
                            value: (0, s.T4)(null != n ? n : 0, c.pKx.USD),
                            additionalContent: (0, r.jsx)(l.H, {
                                value: m,
                                isPercent: !0
                            })
                        }),
                        (0, r.jsx)(a.Z, {
                            label: g,
                            value: p,
                            additionalContent: (0, r.jsx)(l.H, {
                                value: h,
                                isPercent: f
                            })
                        })
                    ]
                }),
                t
            ]
        })
    });
}
