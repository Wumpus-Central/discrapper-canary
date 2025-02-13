n.d(t, { Z: () => s }), n(653041), n(47120);
var i = n(192379),
    a = n(442837),
    r = n(430824),
    l = n(973001);
function s(e) {
    let { application: t, showMutualGuilds: n = !0 } = e,
        s = (0, a.e7)([l.Z], () => l.Z.getGuildIdsForApplication(null == t ? void 0 : t.id), [t]),
        o = (0, a.e7)([r.Z], () => r.Z.isLoaded());
    return i.useMemo(() => {
        let e = [];
        if (!o || !n || null == s || null == t) return e;
        for (let t of s) {
            let n = r.Z.getGuild(t);
            null != n && e.push(n);
        }
        return e;
    }, [o, s, t, n]);
}
