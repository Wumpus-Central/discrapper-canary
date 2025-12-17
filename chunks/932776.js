n.d(t, { O: () => c }), n(388685), n(642613);
var i = n(473749),
    r = n(373793),
    l = n(442837),
    a = n(911969),
    o = n(282923),
    s = n(905753);
function c() {
    let e = (0, l.cj)([s.Z], () => {
            var e;
            return Object.values(null != (e = s.Z.getCommands()) ? e : {});
        }),
        [t, n] = i.useState(""),
        c = i.useMemo(
            () =>
                e.filter((e) => {
                    var t;
                    return (
                        (null == e.integration_types || e.integration_types.includes(r.Y.GUILD_INSTALL)) &&
                        (null == e.contexts || (null == (t = e.contexts) ? void 0 : t.includes(a.D.GUILD)))
                    );
                }),
            [e],
        ),
        u = i.useMemo(
            () =>
                [...c].sort((e, t) => {
                    let n = a.yU.CHAT + 1,
                        i = (t.type > n ? n : t.type) - (e.type > n ? n : e.type);
                    return 0 !== i ? i : e.untranslatedName.localeCompare(t.untranslatedName);
                }),
            [c],
        ),
        m = i.useMemo(() => (t.startsWith("/") ? u.filter((e) => e.type === a.yU.CHAT) : u), [t, u]),
        b = i.useMemo(() => (t.startsWith("/") ? t.substring(1) : t), [t]);
    return {
        query: t,
        results: i.useMemo(() => (0, o.B)(m, d, b), [m, b]),
        setQuery: n,
        unfilteredCount: e.length,
    };
}
function d(e) {
    return {
        id: e.id,
        names: [e.displayName],
    };
}
