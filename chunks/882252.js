n.d(t, {
    FS: () => u,
    Uw: () => p,
    nC: () => d,
    nU: () => _,
    yv: () => m,
}),
    n(388685);
var r = n(683860),
    i = n(592125),
    a = n(430824),
    o = n(306680),
    s = n(710352),
    l = n(176505),
    c = n(388032);
function u(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.ZP];
    return {
        isNew: !e.isArchivedThread() && n.isNewForumThread(e.id, e.parent_id, t),
        hasUnreads: !e.isArchivedThread() && n.isForumPostUnread(e.id),
    };
}
function d(e) {
    let [t, n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.Z, a.Z, o.ZP],
        s = t.getChannel(e);
    if (null == s) return null;
    let l = n.getGuild(s.guild_id);
    return null == l ? null : u(s, l, [r]);
}
let f = () => ({
    minutes: c.t.nFt9ck,
    hours: c.t.jzCewe,
    days: c.t.U4I0sw,
    month: c.intl.string(c.t["nBNJ/L"]),
});
function p(e, t) {
    if (t === s.R6.POSTED_DURATION_AGO && e === r.z.CREATION_DATE) return f;
}
function _(e, t) {
    let [n] = t,
        r = n.hasTrackedUnread(e),
        i = n.hasOpenedThread(e),
        a = null != n.getTrackedAckMessageId(e);
    return r && i && a;
}
function m(e) {
    var t;
    return (null == (t = i.Z.getChannel(e)) ? void 0 : t.hasFlag(l.zZ.PINNED)) === !0;
}
