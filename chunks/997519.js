n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(192379),
    r = n(766434),
    l = n(310291),
    s = n(730647),
    a = n(495298),
    o = n(198139);
function c(e, t) {
    let n = null == t ? void 0 : t.team,
        { payoutsByPeriod: c, loading: d } = (0, l.Z)(null == t ? void 0 : t.id, {
            groupType: o.uw.SERVER_ROLE_SUBSCRIPTION,
            teamId: null == n ? void 0 : n.id
        }),
        u = (0, s.f)('useEarningMetrics'),
        m = (0, a.Z)(e),
        {
            currentPeriod: h,
            previousPeriods: g,
            metrics: x
        } = i.useMemo(() => {
            let { currentPeriod: e, previousPeriods: t } = (0, r.Br)(c),
                n = (0, r.Uj)(e, t[0]);
            return {
                currentPeriod: e,
                previousPeriods: t,
                metrics: {
                    ...n,
                    subscribers: m,
                    subscriberChange: n.paymentsCountChange
                }
            };
        }, [c, m]);
    return {
        loading: d || !u,
        team: n,
        currentPeriod: h,
        previousPeriods: g,
        allPeriods: c,
        metrics: x
    };
}
