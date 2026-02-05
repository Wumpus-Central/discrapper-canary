a.d(t, { A: () => o }), a(321073);
var n = a(64700),
    i = a(311907),
    s = a(142120),
    l = a(71393),
    r = a(680646);
function o(e) {
    let { application: t, showMutualGuilds: a = !0 } = e,
        o = (0, i.bG)([r.A], () => r.A.getGuildIdsForApplication(t?.id), [t]),
        c = (0, i.bG)([s.A], () => s.A.isConnected());
    return n.useMemo(() => {
        let e = [];
        if (!c || !a || null == o || null == t) return e;
        for (let t of o) {
            let a = l.A.getGuild(t);
            null != a && e.push(a);
        }
        return e;
    }, [c, o, t, a]);
}
