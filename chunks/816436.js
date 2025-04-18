n.d(t, {
    b: () => c,
    v: () => l
}),
    n(388685),
    n(539854);
var r = n(392711),
    i = n.n(r),
    a = n(442837),
    o = n(592125),
    s = n(823379);
function l(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = i()(o.Z.getMutableGuildChannelsForGuild(e)).values().groupBy('parent_id').value(),
        l = i()(n)
            .map((e) => (e.isCategory() ? e.id : e.parent_id))
            .filter(s.lm)
            .uniq()
            .map((e) => o.Z.getChannel(e))
            .filter(s.lm)
            .sortBy('position')
            .value(),
        c = new Set(l.map((e) => e.id)),
        u = n.filter((e) => !e.isCategory() && (null == e.parent_id || !c.has(e.parent_id)));
    for (let e of ((u = i().sortBy(u, (e) => (e.isGuildVocal() ? e.position + 10000 : e.position))), l)) {
        r || u.push(e);
        let o = t.has(e.id) ? a[e.id] : n.filter((t) => t.parent_id === e.id);
        (o = i().sortBy(null != o ? o : [], (e) => (e.isGuildVocal() ? e.position + 10000 : e.position))), u.push(...o);
    }
    return u;
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (0, a.Wu)([o.Z], () => {
        let r = Array.from(t)
            .map((e) => o.Z.getChannel(e))
            .filter(s.lm);
        return l(e, t, r, n);
    });
}
