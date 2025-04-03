n.d(t, { O: () => c }), n(47120), n(230036);
var r = n(192379),
    i = n(373793),
    l = n(442837),
    o = n(911969),
    a = n(282923),
    s = n(905753);
function c() {
    let e = (0, l.cj)([s.Z], () => {
            var e;
            return Object.values(null != (e = s.Z.getCommands()) ? e : {});
        }),
        [t, n] = r.useState(''),
        c = r.useMemo(
            () =>
                e.filter((e) => {
                    var t;
                    return (null == e.integration_types || e.integration_types.includes(i.Y.GUILD_INSTALL)) && (null == e.contexts || (null == (t = e.contexts) ? void 0 : t.includes(o.D.GUILD)));
                }),
            [e]
        ),
        u = r.useMemo(
            () =>
                [...c].sort((e, t) => {
                    let n = o.yU.CHAT + 1,
                        r = (t.type > n ? n : t.type) - (e.type > n ? n : e.type);
                    return 0 !== r ? r : e.untranslatedName.localeCompare(t.untranslatedName);
                }),
            [c]
        ),
        p = r.useMemo(() => (t.startsWith('/') ? u.filter((e) => e.type === o.yU.CHAT) : u), [t, u]),
        m = r.useMemo(() => (t.startsWith('/') ? t.substring(1) : t), [t]);
    return {
        query: t,
        results: r.useMemo(() => (0, a.B)(p, d, m), [p, m]),
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
