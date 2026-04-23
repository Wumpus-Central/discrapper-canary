n.d(t, { A: () => d });
var i = n(64700),
    l = n(262828),
    s = n(105917),
    r = n(969379),
    a = n(705751),
    o = n(311750);
function d(e) {
    let { application: t, loading: n } = (0, l.A)(e, a.S7.GUILD_ROLE_SUBSCRIPTIONS),
        { payoutsByPeriod: d, loading: c } = (0, r.A)(t?.id, { groupType: o.x1.GUILD_PRODUCT, teamId: t?.team?.id }),
        {
            currentPeriod: u,
            previousPeriods: m,
            metrics: g,
        } = i.useMemo(() => {
            let { currentPeriod: e, previousPeriods: t } = (0, s.dc)(d),
                n = (0, s.El)(e, t[0]);
            return { currentPeriod: e, previousPeriods: t, metrics: n };
        }, [d]);
    return { loading: n || c, payoutsByPeriod: d, currentPeriod: u, previousPeriods: m, metrics: g, application: t };
}
