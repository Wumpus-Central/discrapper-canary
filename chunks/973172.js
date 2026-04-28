u.d(t, { A: () => d }), u(321073);
var i = u(64700),
    l = u(17928),
    n = u(454219),
    r = u(71393),
    s = u(680646);
function d(e) {
    let { application: t, showMutualGuilds: u = !0 } = e,
        d = (0, l.bG)([s.A], () => s.A.getGuildIdsForApplication(t?.id), [t]),
        p = (0, l.bG)([n.A], () => n.A.isConnected());
    return i.useMemo(() => {
        let e = [];
        if (!p || !u || null == d || null == t) return e;
        for (let t of d) {
            let u = r.A.getGuild(t);
            null != u && e.push(u);
        }
        return e;
    }, [p, d, t, u]);
}
