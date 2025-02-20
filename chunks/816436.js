n.d(t, {
    b: () => c,
    v: () => l
}),
    n(47120),
    n(653041);
var r = n(392711),
    i = n.n(r),
    o = n(442837),
    a = n(592125),
    s = n(823379);
function l(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        o = i()(a.Z.getMutableGuildChannelsForGuild(e)).values().groupBy('parent_id').value(),
        l = i()(n)
            .map((e) => (e.isCategory() ? e.id : e.parent_id))
            .filter(s.lm)
            .uniq()
            .map((e) => a.Z.getChannel(e))
            .filter(s.lm)
            .sortBy('position')
            .value(),
        c = new Set(l.map((e) => e.id)),
        u = n.filter((e) => !e.isCategory() && (null == e.parent_id || !c.has(e.parent_id)));
    for (let e of ((u = i().sortBy(u, (e) => (e.isGuildVocal() ? e.position + 10000 : e.position))), l)) {
        r || u.push(e);
        let a = t.has(e.id) ? o[e.id] : n.filter((t) => t.parent_id === e.id);
        (a = i().sortBy(null != a ? a : [], (e) => (e.isGuildVocal() ? e.position + 10000 : e.position))), u.push(...a);
    }
    return u;
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (0, o.Wu)([a.Z], () => {
        let r = Array.from(t)
            .map((e) => a.Z.getChannel(e))
            .filter(s.lm);
        return l(e, t, r, n);
    });
}
