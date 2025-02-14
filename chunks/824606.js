n.d(t, { Z: () => s }), n(653041), n(47120);
var l = n(192379),
    i = n(442837),
    r = n(430824),
    a = n(973001);
function s(e) {
    let { application: t, showMutualGuilds: n = !0 } = e,
        s = (0, i.e7)([a.Z], () => a.Z.getGuildIdsForApplication(null == t ? void 0 : t.id), [t]),
        o = (0, i.e7)([r.Z], () => r.Z.isLoaded());
    return l.useMemo(() => {
        let e = [];
        if (!o || !n || null == s || null == t) return e;
        for (let t of s) {
            let n = r.Z.getGuild(t);
            null != n && e.push(n);
        }
        return e;
    }, [o, s, t, n]);
}
