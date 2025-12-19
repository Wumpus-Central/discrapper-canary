n.d(t, { Z: () => g }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(442837),
    l = n(544891),
    s = n(199849),
    o = n(355467),
    c = n(232567),
    d = n(848572),
    u = n(594174),
    m = n(78839),
    p = n(709054),
    h = n(246992),
    f = n(981631),
    x = n(474936);
let b = [
    {
        label: "1 Week",
        value: 0,
    },
    {
        label: "1 Month (Bronze)",
        value: 1,
    },
    {
        label: "3 Months (Silver)",
        value: 3,
    },
    {
        label: "6 Months (Gold)",
        value: 6,
    },
    {
        label: "1 Year (Platinum)",
        value: 12,
    },
    {
        label: "2 Years (Diamond)",
        value: 24,
    },
    {
        label: "3 Years (Emerald)",
        value: 36,
    },
    {
        label: "5 Years (Ruby)",
        value: 60,
    },
    {
        label: "6 Years (Opal)",
        value: 72,
    },
];
function g() {
    var e, t;
    let [n, g] = r.useState(!1),
        v = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        j = (0, d.kG)(),
        y = (0, i.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
        C = null != j && null != (t = null == (e = x.vK[j]) ? void 0 : e.tenureReqNumMonths) ? t : 0,
        _ = r.useCallback(
            async (e) => {
                let t = new Date();
                e > 0 ? t.setMonth(t.getMonth() - e) : t.setDate(t.getDate() - 7), t.setDate(t.getDate() - 2);
                let n = {
                    subscription_status: f.O0b.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: p.default.fromTimestamp(t.getTime()),
                };
                g(!0),
                    await l.tn.patch({
                        url: "/debug/subscriptions/".concat(y.id),
                        body: n,
                        rejectWithError: !1,
                    }),
                    await (0, c.In)(v.id),
                    await (0, o.jg)(),
                    g(!1);
            },
            [y, v],
        );
    if (null != v && null != y)
        return (0, a.jsx)(s.B6, {
            isDisabled: n,
            serialize: (e) => "".concat(e),
            isSelected: (e) => e === C,
            options: b,
            select: _,
            popoutLayerContext: h.O$,
            popoutWidth: 200,
        });
}
