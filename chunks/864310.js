"use strict";
n.d(t, { A: () => _, Z: () => d });
var i = n(64700),
    r = n(17928),
    s = n(71393),
    a = n(488803),
    o = n(522055),
    l = n(645619);
function d(e) {
    let t = s.A.getGuild(e)?.premiumSubscriberCount ?? 0,
        n = (0, a.TS)(e, "GuildPowerupsBoostCount"),
        i = l.A.getStateForGuild(e)?.appliedBoosts,
        r = o.A.getStateForGuild(e)?.appliedBoosts;
    if (null == i || (n && null == r)) return { available: 0, spent: 0, total: t };
    let d = i + (r ?? 0);
    return { available: Math.max(0, t - d), spent: d, total: t };
}
function _(e) {
    let t = (0, r.bG)([s.A], () => s.A.getGuild(e)?.premiumSubscriberCount) ?? 0,
        n = (0, a.C$)(e, "GuildPowerupsBoostCount"),
        d = (0, r.bG)([l.A], () => l.A.getStateForGuild(e)?.appliedBoosts),
        _ = (0, r.bG)([o.A], () => o.A.getStateForGuild(e)?.appliedBoosts);
    return i.useMemo(() => {
        if (null == d || (n && null == _)) return { available: 0, spent: 0, total: t };
        let e = d + (_ ?? 0);
        return { available: Math.max(0, t - e), spent: e, total: t };
    }, [t, d, _, n]);
}
