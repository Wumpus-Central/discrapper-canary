n.d(t, { A: () => o });
var r = n(64700),
    i = n(262828),
    l = n(105917),
    s = n(969379),
    a = n(705751),
    c = n(311750);
function o(e) {
    var t;
    let { application: n, loading: o } = (0, i.A)(e, a.S7.GUILD_ROLE_SUBSCRIPTIONS),
        { payoutsByPeriod: d, loading: u } = (0, s.A)(null == n ? void 0 : n.id, {
            groupType: c.x1.GUILD_PRODUCT,
            teamId: null == n || null == (t = n.team) ? void 0 : t.id,
        }),
        {
            currentPeriod: f,
            previousPeriods: g,
            metrics: b,
        } = r.useMemo(() => {
            let { currentPeriod: e, previousPeriods: t } = (0, l.dc)(d),
                n = (0, l.El)(e, t[0]);
            return {
                currentPeriod: e,
                previousPeriods: t,
                metrics: n,
            };
        }, [d]);
    return {
        loading: o || u,
        payoutsByPeriod: d,
        currentPeriod: f,
        previousPeriods: g,
        metrics: b,
        application: n,
    };
}
