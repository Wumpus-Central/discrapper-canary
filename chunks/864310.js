n.d(t, {
    A: () => u,
    Z: () => c,
});
var r = n(64700),
    i = n(311907),
    a = n(71393),
    s = n(488803),
    o = n(522055),
    l = n(645619);
function c(e) {
    var t, n, r, i;
    let c = null != (t = null == (n = a.A.getGuild(e)) ? void 0 : n.premiumSubscriberCount) ? t : 0,
        u = (0, s.TS)(e, "GuildPowerupsBoostCount"),
        d = null == (r = l.A.getStateForGuild(e)) ? void 0 : r.appliedBoosts,
        f = null == (i = o.A.getStateForGuild(e)) ? void 0 : i.appliedBoosts;
    if (null == d || (u && null == f))
        return {
            available: 0,
            spent: 0,
            total: c,
        };
    let p = d + (null != f ? f : 0);
    return {
        available: Math.max(0, c - p),
        spent: p,
        total: c,
    };
}
function u(e) {
    var t;
    let n =
            null !=
            (t = (0, i.bG)([a.A], () => {
                var t;
                return null == (t = a.A.getGuild(e)) ? void 0 : t.premiumSubscriberCount;
            }))
                ? t
                : 0,
        c = (0, s.C$)(e, "GuildPowerupsBoostCount"),
        u = (0, i.bG)([l.A], () => {
            var t;
            return null == (t = l.A.getStateForGuild(e)) ? void 0 : t.appliedBoosts;
        }),
        d = (0, i.bG)([o.A], () => {
            var t;
            return null == (t = o.A.getStateForGuild(e)) ? void 0 : t.appliedBoosts;
        });
    return r.useMemo(() => {
        if (null == u || (c && null == d))
            return {
                available: 0,
                spent: 0,
                total: n,
            };
        let e = u + (null != d ? d : 0);
        return {
            available: Math.max(0, n - e),
            spent: e,
            total: n,
        };
    }, [n, u, d, c]);
}
