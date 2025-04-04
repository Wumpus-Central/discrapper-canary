n.d(t, {
    FS: () => u,
    Uw: () => _,
    nC: () => d,
    nU: () => p,
    yv: () => h
}),
    n(47120);
var r = n(683860),
    i = n(592125),
    o = n(430824),
    a = n(306680),
    s = n(710352),
    l = n(176505),
    c = n(388032);
function u(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.ZP];
    return {
        isNew: !e.isArchivedThread() && n.isNewForumThread(e.id, e.parent_id, t),
        hasUnreads: !e.isArchivedThread() && n.isForumPostUnread(e.id)
    };
}
function d(e) {
    let [t, n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.Z, o.Z, a.ZP],
        s = t.getChannel(e);
    if (null == s) return null;
    let l = n.getGuild(s.guild_id);
    return null == l ? null : u(s, l, [r]);
}
let f = () => ({
    minutes: c.t.nFt9cn,
    hours: c.t.jzCewc,
    days: c.t.U4I0s7,
    month: c.NW.string(c.t['nBNJ/P'])
});
function _(e, t) {
    if (t === s.R6.POSTED_DURATION_AGO && e === r.z.CREATION_DATE) return f;
}
function p(e, t) {
    let [n] = t,
        r = n.hasTrackedUnread(e),
        i = n.hasOpenedThread(e),
        o = null != n.getTrackedAckMessageId(e);
    return r && i && o;
}
function h(e) {
    var t;
    return (null == (t = i.Z.getChannel(e)) ? void 0 : t.hasFlag(l.zZ.PINNED)) === !0;
}
