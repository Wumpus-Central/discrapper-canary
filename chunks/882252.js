n.d(t, {
    FS: () => c,
    Uw: () => _,
    nC: () => d,
    nU: () => p,
    yv: () => h
}),
    n(47120);
var i = n(683860),
    r = n(592125),
    a = n(430824),
    s = n(306680),
    o = n(710352),
    l = n(176505),
    u = n(388032);
function c(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.ZP];
    return {
        isNew: !e.isArchivedThread() && n.isNewForumThread(e.id, e.parent_id, t),
        hasUnreads: !e.isArchivedThread() && n.isForumPostUnread(e.id)
    };
}
function d(e) {
    let [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z, a.Z, s.ZP],
        o = t.getChannel(e);
    if (null == o) return null;
    let l = n.getGuild(o.guild_id);
    return null == l ? null : c(o, l, [i]);
}
let f = () => ({
    minutes: u.t.nFt9cn,
    hours: u.t.jzCewc,
    days: u.t.U4I0s7,
    month: u.intl.string(u.t['nBNJ/P'])
});
function _(e, t) {
    if (t === o.R6.POSTED_DURATION_AGO && e === i.z.CREATION_DATE) return f;
}
function p(e, t) {
    let [n] = t,
        i = n.hasTrackedUnread(e),
        r = n.hasOpenedThread(e),
        a = null != n.getTrackedAckMessageId(e);
    return i && r && a;
}
function h(e) {
    var t;
    return (null === (t = r.Z.getChannel(e)) || void 0 === t ? void 0 : t.hasFlag(l.zZ.PINNED)) === !0;
}
