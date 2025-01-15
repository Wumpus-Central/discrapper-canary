n.d(t, {
    O: function () {
        return d;
    }
}),
    n(47120);
var i = n(192379),
    l = n(373793),
    r = n(442837),
    a = n(911969),
    o = n(282923),
    s = n(905753);
function d() {
    let e = (0, r.cj)([s.Z], () => {
            var e;
            return Object.values(null !== (e = s.Z.getCommands()) && void 0 !== e ? e : {});
        }),
        [t, n] = i.useState(''),
        d = i.useMemo(
            () =>
                e.filter((e) => {
                    var t;
                    return (null == e.integration_types || e.integration_types.includes(l.Y.GUILD_INSTALL)) && (null == e.contexts || (null === (t = e.contexts) || void 0 === t ? void 0 : t.includes(a.D.GUILD)));
                }),
            [e]
        ),
        u = i.useMemo(
            () =>
                [...d].sort((e, t) => {
                    let n = a.yU.CHAT + 1,
                        i = t.type > n ? n : t.type,
                        l = i - (e.type > n ? n : e.type);
                    return 0 !== l ? l : e.untranslatedName.localeCompare(t.untranslatedName);
                }),
            [d]
        ),
        m = i.useMemo(() => (t.startsWith('/') ? u.filter((e) => e.type === a.yU.CHAT) : u), [t, u]),
        h = i.useMemo(() => (t.startsWith('/') ? t.substring(1) : t), [t]);
    return {
        query: t,
        results: i.useMemo(() => (0, o.B)(m, c, h), [m, h]),
        setQuery: n,
        unfilteredCount: e.length
    };
}
function c(e) {
    return {
        id: e.id,
        names: [e.displayName]
    };
}
