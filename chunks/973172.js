a.d(t, { A: () => o }), a(321073);
var n = a(64700),
    l = a(17928),
    i = a(366853),
    s = a(71393),
    r = a(680646);
function o(e) {
    let { application: t, showMutualGuilds: a = !0 } = e,
        o = (0, l.bG)([r.A], () => r.A.getGuildIdsForApplication(t?.id), [t]),
        c = (0, l.bG)([i.A], () => i.A.isConnected());
    return n.useMemo(() => {
        let e = [];
        if (!c || !a || null == o || null == t) return e;
        for (let t of o) {
            let a = s.A.getGuild(t);
            null != a && e.push(a);
        }
        return e;
    }, [c, o, t, a]);
}
