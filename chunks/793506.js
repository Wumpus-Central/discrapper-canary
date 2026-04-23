n.d(t, { A: () => d });
var r = n(64700),
    i = n(311907),
    l = n(522055),
    s = n(6316),
    a = n(853513),
    o = n(985018);
function d(e) {
    let t = (0, i.bG)([l.A], () => l.A.getStateForGuild(e)?.entitlements, [e]),
        n = (0, s.A)(e);
    return r.useMemo(() => {
        if (0 !== Object.values(t ?? {}).length)
            return n.length > 0
                ? { type: "expiring", expiringAt: n[0].ends_at }
                : { type: "active", statusText: o.intl.string(a.default.FFLkmx) };
    }, [n, t]);
}
