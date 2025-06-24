n.d(t, { Z: () => v }), n(388685);
var a = n(255367),
    r = n(73800),
    l = n(442837),
    i = n(544891),
    s = n(481060),
    o = n(355467),
    c = n(232567),
    d = n(848572),
    u = n(594174),
    m = n(78839),
    p = n(709054),
    x = n(246992),
    h = n(981631),
    b = n(474936);
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
    let [n, v] = r.useState(!1),
        _ = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        g = (0, d.kG)(),
        j = (0, l.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
        y = null != g && null != (t = null == (e = b.vK[g]) ? void 0 : e.tenureReqNumMonths) ? t : 0,
        C = r.useCallback(
            async (e) => {
                let t = new Date();
                e > 0 ? t.setMonth(t.getMonth() - e) : t.setDate(t.getDate() - 7), t.setDate(t.getDate() - 2);
                let n = {
                    subscription_status: h.O0b.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: p.default.fromTimestamp(t.getTime())
                };
                v(!0),
                    await i.tn.patch({
                        url: '/debug/subscriptions/'.concat(j.id),
                        body: n,
                        rejectWithError: !1
                    }),
                    await (0, c.In)(_.id),
                    await (0, o.jg)(),
                    v(!1);
            },
            [j, _]
        );
    if (null != _ && null != j)
        return (0, a.jsx)(s.PhF, {
            isDisabled: n,
            serialize: (e) => ''.concat(e),
            isSelected: (e) => e === y,
            options: f,
            select: C,
            popoutLayerContext: x.O$,
            popoutWidth: 200
        });
}
