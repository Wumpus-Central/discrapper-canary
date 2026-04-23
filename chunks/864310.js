"use strict";
n.d(t, { A: () => c, Z: () => u });
var r = n(64700),
    i = n(311907),
    s = n(71393),
    a = n(488803),
    o = n(522055),
    l = n(645619);
function u(e) {
    let t = s.A.getGuild(e)?.premiumSubscriberCount ?? 0,
        n = (0, a.TS)(e, "GuildPowerupsBoostCount"),
        r = l.A.getStateForGuild(e)?.appliedBoosts,
        i = o.A.getStateForGuild(e)?.appliedBoosts;
    if (null == r || (n && null == i)) return { available: 0, spent: 0, total: t };
    let u = r + (i ?? 0);
    return { available: Math.max(0, t - u), spent: u, total: t };
}
function c(e) {
    let t = (0, i.bG)([s.A], () => s.A.getGuild(e)?.premiumSubscriberCount) ?? 0,
        n = (0, a.C$)(e, "GuildPowerupsBoostCount"),
        u = (0, i.bG)([l.A], () => l.A.getStateForGuild(e)?.appliedBoosts),
        c = (0, i.bG)([o.A], () => o.A.getStateForGuild(e)?.appliedBoosts);
    return r.useMemo(() => {
        if (null == u || (n && null == c)) return { available: 0, spent: 0, total: t };
        let e = u + (c ?? 0);
        return { available: Math.max(0, t - e), spent: e, total: t };
    }, [t, u, c, n]);
}
