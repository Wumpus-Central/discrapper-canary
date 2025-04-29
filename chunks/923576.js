n.d(t, { Z: () => v }), n(388685);
var a = n(200651),
    r = n(192379),
    l = n(442837),
    i = n(544891),
    s = n(481060),
    o = n(355467),
    c = n(232567),
    d = n(848572),
    u = n(594174),
    m = n(78839),
    x = n(709054),
    h = n(246992),
    p = n(981631),
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
        j = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        g = (0, d.kG)(),
        _ = (0, l.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
        y = null != g && null != (t = null == (e = b.vK[g]) ? void 0 : e.tenureReqNumMonths) ? t : 0,
        O = r.useCallback(
            async (e) => {
                let t = new Date();
                null != e && (t.setMonth(t.getMonth() - e), t.setDate(t.getDate() - 7));
                let n = {
                    subscription_status: null != e ? p.O0b.ACTIVE : p.O0b.ENDED,
                    endedAt: void 0,
                    premium_streak_started_at: x.default.fromTimestamp(t.getTime())
                };
                v(!0),
                    await i.tn.patch({
                        url: '/debug/subscriptions/'.concat(_.id),
                        body: n,
                        rejectWithError: !1
                    }),
                    await (0, c.In)(j.id),
                    await (0, o.jg)(),
                    v(!1);
            },
            [_, j]
        );
    if (null != j && null != _)
        return (0, a.jsx)(s.PhF, {
            isDisabled: n,
            serialize: (e) => ''.concat(e),
            isSelected: (e) => e === y,
            options: f,
            select: O,
            popoutLayerContext: h.O$,
            popoutWidth: 200
        });
}
