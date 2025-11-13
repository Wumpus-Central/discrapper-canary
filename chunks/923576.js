n.d(t, { Z: () => b }), n(388685);
var a = n(951288),
    i = n(647438),
    r = n(442837),
    l = n(544891),
    s = n(481060),
    o = n(355467),
    c = n(232567),
    d = n(848572),
    u = n(594174),
    m = n(78839),
    p = n(709054),
    h = n(246992),
    x = n(981631),
    g = n(474936);
let f = [
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
function b() {
    var e, t;
    let [n, b] = i.useState(!1),
        v = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        j = (0, d.kG)(),
        _ = (0, r.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
        y = null != j && null != (t = null == (e = g.vK[j]) ? void 0 : e.tenureReqNumMonths) ? t : 0,
        C = i.useCallback(
            async (e) => {
                let t = new Date();
                e > 0 ? t.setMonth(t.getMonth() - e) : t.setDate(t.getDate() - 7), t.setDate(t.getDate() - 2);
                let n = {
                    subscription_status: x.O0b.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: p.default.fromTimestamp(t.getTime()),
                };
                b(!0),
                    await l.tn.patch({
                        url: "/debug/subscriptions/".concat(_.id),
                        body: n,
                        rejectWithError: !1,
                    }),
                    await (0, c.In)(v.id),
                    await (0, o.jg)(),
                    b(!1);
            },
            [_, v],
        );
    if (null != v && null != _)
        return (0, a.jsx)(s.PhF, {
            isDisabled: n,
            serialize: (e) => "".concat(e),
            isSelected: (e) => e === y,
            options: f,
            select: C,
            popoutLayerContext: h.O$,
            popoutWidth: 200,
        });
}
