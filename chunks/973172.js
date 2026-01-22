n.d(t, {
    A: () => c,
}),
    n(321073),
    n(896048);
var l = n(64700),
    a = n(311907),
    r = n(142120),
    i = n(71393),
    s = n(680646);

function c(e) {
    let { application: t, showMutualGuilds: n = !0 } = e,
        c = (0, a.bG)([s.A], () => s.A.getGuildIdsForApplication(null == t ? void 0 : t.id), [t]),
        o = (0, a.bG)([r.A], () => r.A.isConnected());
    return l.useMemo(() => {
        let e = [];
        if (!o || !n || null == c || null == t) return e;
        for (let t of c) {
            let n = i.A.getGuild(t);
            null != n && e.push(n);
        }
        return e;
    }, [o, c, t, n]);
}
