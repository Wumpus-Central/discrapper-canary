(a.d(t, { Z: () => v }), a(388685));
var n = a(255367),
    r = a(73800),
    l = a(442837),
    i = a(544891),
    s = a(481060),
    o = a(355467),
    c = a(232567),
    d = a(848572),
    u = a(594174),
    m = a(78839),
    x = a(709054),
    p = a(246992),
    h = a(981631),
    b = a(474936);
let f = [
    {
        label: '1 Week',
        value: 0
    },
    {
        label: '1 Month (Bronze)',
        value: 1
    },
    {
        label: '3 Months (Silver)',
        value: 3
    },
    {
        label: '6 Months (Gold)',
        value: 6
    },
    {
        label: '1 Year (Platinum)',
        value: 12
    },
    {
        label: '2 Years (Diamond)',
        value: 24
    },
    {
        label: '3 Years (Emerald)',
        value: 36
    },
    {
        label: '5 Years (Ruby)',
        value: 60
    },
    {
        label: '6 Years (Opal)',
        value: 72
    }
];
function v() {
    var e, t;
    let [a, v] = r.useState(!1),
        j = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        g = (0, d.kG)(),
        _ = (0, l.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
        y = null != g && null != (t = null == (e = b.vK[g]) ? void 0 : e.tenureReqNumMonths) ? t : 0,
        C = r.useCallback(
            async (e) => {
                let t = new Date();
                (e > 0 ? t.setMonth(t.getMonth() - e) : t.setDate(t.getDate() - 7), t.setDate(t.getDate() - 2));
                let a = {
                    subscription_status: h.O0b.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: x.default.fromTimestamp(t.getTime())
                };
                (v(!0),
                    await i.tn.patch({
                        url: '/debug/subscriptions/'.concat(_.id),
                        body: a,
                        rejectWithError: !1
                    }),
                    await (0, c.In)(j.id),
                    await (0, o.jg)(),
                    v(!1));
            },
            [_, j]
        );
    if (null != j && null != _)
        return (0, n.jsx)(s.PhF, {
            isDisabled: a,
            serialize: (e) => ''.concat(e),
            isSelected: (e) => e === y,
            options: f,
            select: C,
            popoutLayerContext: p.O$,
            popoutWidth: 200
        });
}
