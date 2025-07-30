(n.d(t, { O: () => c }), n(388685), n(642613));
var i = n(73800),
    r = n(373793),
    l = n(442837),
    o = n(911969),
    a = n(282923),
    s = n(905753);
function c() {
    let e = (0, l.cj)([s.Z], () => {
            var e;
            return Object.values(null != (e = s.Z.getCommands()) ? e : {});
        }),
        [t, n] = i.useState(''),
        c = i.useMemo(
            () =>
                e.filter((e) => {
                    var t;
                    return (null == e.integration_types || e.integration_types.includes(r.Y.GUILD_INSTALL)) && (null == e.contexts || (null == (t = e.contexts) ? void 0 : t.includes(o.D.GUILD)));
                }),
            [e]
        ),
        u = i.useMemo(
            () =>
                [...c].sort((e, t) => {
                    let n = o.yU.CHAT + 1,
                        i = (t.type > n ? n : t.type) - (e.type > n ? n : e.type);
                    return 0 !== i ? i : e.untranslatedName.localeCompare(t.untranslatedName);
                }),
            [c]
        ),
        p = i.useMemo(() => (t.startsWith('/') ? u.filter((e) => e.type === o.yU.CHAT) : u), [t, u]),
        m = i.useMemo(() => (t.startsWith('/') ? t.substring(1) : t), [t]);
    return {
        query: t,
        results: i.useMemo(() => (0, a.B)(p, d, m), [p, m]),
        setQuery: n,
        unfilteredCount: e.length
    };
}
function d(e) {
    return {
        id: e.id,
        names: [e.displayName]
    };
}
