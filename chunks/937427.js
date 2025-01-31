n.d(t, { w: () => c }), n(47120), n(653041), n(733860);
var i = n(192379),
    l = n(581364),
    a = n(984933),
    r = n(496675),
    s = n(282923),
    o = n(981631),
    d = n(388032);
function c(e) {
    let t = i.useMemo(() => {
            let t = a.ZP.getChannels(e),
                n = [...t[a.sH]];
            n.push(...t[a.Zb].filter((e) => e.channel.isGuildVocal()));
            let i = n.map((e) => ({
                id: e.channel.id,
                name: e.channel.name,
                canManage: r.Z.can(o.Plq.MANAGE_ROLES, e.channel)
            }));
            return (
                i.unshift({
                    id: (0, l.bD)(e),
                    name: d.intl.string(d.t['7YqSGx']),
                    canManage: !0
                }),
                i
            );
        }, [e]),
        [n, c] = i.useState(''),
        m = i.useMemo(() => {
            var e;
            let i = (e = n).startsWith('#') ? e.substr(1) : e;
            return (0, s.B)(t, u, i);
        }, [t, n]);
    return {
        query: n,
        results: m,
        setQuery: c,
        unfilteredCount: t.length
    };
}
function u(e) {
    return {
        id: e.id,
        names: [e.name]
    };
}
