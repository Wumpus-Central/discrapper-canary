n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(791382),
    s = n(937615),
    a = n(217597),
    o = n(685389),
    c = n(981631),
    u = n(388032),
    d = n(49792);
function g(e) {
    let {
        children: t,
        revenue: n,
        revenueTrend: g,
        summaryMetricLabel: m,
        summaryMetricValue: p,
        summaryMetricTrend: f,
        summaryMetricTrendIsPercent: h,
    } = e;
    return (0, r.jsx)(i.C3N, {
        label: u.intl.string(u.t.ofmOzb),
        children: (0, r.jsxs)("div", {
            className: d.paymentInfoGroup,
            children: [
                (0, r.jsxs)(o.H, {
                    children: [
                        (0, r.jsx)(a.Z, {
                            label: u.intl.string(u.t.iY1jW3),
                            value: (0, s.T4)(null != n ? n : 0, c.pKx.USD),
                            additionalContent: (0, r.jsx)(l.H, {
                                value: g,
                                isPercent: !0,
                            }),
                        }),
                        (0, r.jsx)(a.Z, {
                            label: m,
                            value: p,
                            additionalContent: (0, r.jsx)(l.H, {
                                value: f,
                                isPercent: h,
                            }),
                        }),
                    ],
                }),
                t,
            ],
        }),
    });
}
