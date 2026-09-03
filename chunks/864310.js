n.d(t, { A: () => c, Z: () => d });
var i = n(582128),
    r = n(17928),
    a = n(831617),
    s = n(475669),
    l = n(71393),
    o = n(645619);
function d(e) {
    let t = l.A.getGuild(e)?.premiumSubscriberCount ?? 0,
        n = (0, a.TS)(e, "GuildPowerupsBoostCount"),
        i = o.A.getStateForGuild(e)?.appliedBoosts,
        r = s.A.getStateForGuild(e)?.appliedBoosts;
    if (null == i || (n && null == r)) return { available: 0, spent: 0, total: t };
    let d = i + (r ?? 0);
    return { available: Math.max(0, t - d), spent: d, total: t };
}
function c(e) {
    let t = (0, r.bG)([l.A], () => l.A.getGuild(e)?.premiumSubscriberCount) ?? 0,
        n = (0, a.C$)(e, "GuildPowerupsBoostCount"),
        d = (0, r.bG)([o.A], () => o.A.getStateForGuild(e)?.appliedBoosts),
        c = (0, r.bG)([s.A], () => s.A.getStateForGuild(e)?.appliedBoosts);
    return i.useMemo(() => {
        if (null == d || (n && null == c)) return { available: 0, spent: 0, total: t, isLoading: !0 };
        let e = d + (c ?? 0);
        return { available: Math.max(0, t - e), spent: e, total: t, isLoading: !1 };
    }, [t, d, c, n]);
}
