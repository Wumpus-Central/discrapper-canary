(n.d(t, { w: () => d }), n(388685), n(539854), n(290780));
var i = n(73800),
    r = n(581364),
    l = n(984933),
    o = n(496675),
    a = n(282923),
    s = n(981631),
    c = n(388032);
function d(e) {
    let t = i.useMemo(() => {
            let t = l.ZP.getChannels(e),
                n = [...t[l.sH]];
            n.push(...t[l.Zb].filter((e) => e.channel.isGuildVocal()));
            let i = n.map((e) => ({
                id: e.channel.id,
                name: e.channel.name,
                canManage: o.Z.can(s.Plq.MANAGE_ROLES, e.channel)
            }));
            return (
                i.unshift({
                    id: (0, r.bD)(e),
                    name: c.intl.string(c.t['7YqSGx']),
                    canManage: !0
                }),
                i
            );
        }, [e]),
        [n, d] = i.useState(''),
        p = i.useMemo(() => {
            var e;
            let i = (e = n).startsWith('#') ? e.substr(1) : e;
            return (0, a.B)(t, u, i);
        }, [t, n]);
    return {
        query: n,
        results: p,
        setQuery: d,
        unfilteredCount: t.length
    };
}
function u(e) {
    return {
        id: e.id,
        names: [e.name]
    };
}
