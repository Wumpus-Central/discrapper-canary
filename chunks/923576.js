n.d(t, { Z: () => x }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(442837),
    l = n(544891),
    s = n(481060),
    o = n(355467),
    c = n(232567),
    d = n(848572),
    u = n(594174),
    m = n(78839),
    p = n(709054),
    h = n(981631),
    f = n(474936);
let b = [
    {
        id: "1week",
        label: "1 Week",
        value: 0,
    },
    {
        id: "1month",
        label: "1 Month (Bronze)",
        value: 1,
    },
    {
        id: "3months",
        label: "3 Months (Silver)",
        value: 3,
    },
    {
        id: "6months",
        label: "6 Months (Gold)",
        value: 6,
    },
    {
        id: "1year",
        label: "1 Year (Platinum)",
        value: 12,
    },
    {
        id: "2years",
        label: "2 Years (Diamond)",
        value: 24,
    },
    {
        id: "3years",
        label: "3 Years (Emerald)",
        value: 36,
    },
    {
        id: "5years",
        label: "5 Years (Ruby)",
        value: 60,
    },
    {
        id: "6years",
        label: "6 Years (Opal)",
        value: 72,
    },
];
function x() {
    var e, t;
    let [n, x] = r.useState(!1),
        g = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        v = (0, d.kG)(),
        j = (0, i.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
        y = null != v && null != (t = null == (e = f.vK[v]) ? void 0 : e.tenureReqNumMonths) ? t : 0,
        C = r.useCallback(
            async (e) => {
                let t = new Date();
                e > 0 ? t.setMonth(t.getMonth() - e) : t.setDate(t.getDate() - 7), t.setDate(t.getDate() - 2);
                let n = {
                    subscription_status: h.O0b.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: p.default.fromTimestamp(t.getTime()),
                };
                x(!0),
                    await l.tn.patch({
                        url: "/debug/subscriptions/".concat(j.id),
                        body: n,
                        rejectWithError: !1,
                    }),
                    await (0, c.In)(g.id),
                    await (0, o.jg)(),
                    x(!1);
            },
            [j, g],
        );
    if (null != g && null != j)
        return (0, a.jsx)(s.PhF, {
            label: "Tenure",
            hideLabel: !0,
            selectionMode: "single",
            disabled: n,
            value: y,
            options: b,
            onSelectionChange: C,
        });
}
