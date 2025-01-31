n.d(t, { Z: () => o }), n(653041), n(47120);
var i = n(192379),
    r = n(442837),
    a = n(430824),
    s = n(973001);
function o(e) {
    let { application: t, showMutualGuilds: n = !0 } = e,
        o = (0, r.e7)([s.Z], () => s.Z.getGuildIdsForApplication(null == t ? void 0 : t.id), [t]),
        l = (0, r.e7)([a.Z], () => a.Z.isLoaded());
    return i.useMemo(() => {
        let e = [];
        if (!l || !n || null == o || null == t) return e;
        for (let t of o) {
            let n = a.Z.getGuild(t);
            null != n && e.push(n);
        }
        return e;
    }, [l, o, t, n]);
}
