n.d(t, {
    P0: () => _,
    Q3: () => h,
    WF: () => p,
    gT: () => f,
    iZ: () => d,
    sP: () => c
}),
    n(149765);
var r = n(247206),
    i = n(660189);
n(241559);
var o = n(182274),
    a = n(592125),
    s = n(430824);
n(594174), n(700785);
var l = n(970257);
function c(e) {
    if (!(0, l.Fi)(e.author)) return !1;
    let t = a.Z.getChannel(e.channel_id);
    if (null == t) return !1;
    let n = s.Z.getGuild(t.guild_id);
    if (null == n) return !1;
    let r = n.getModeratorReportingEnabled(),
        i = n.getModeratorReportChannelId();
    return r && null != i;
}
function u(e) {
    let t = a.Z.getChannel(e);
    return _(t) || _(t);
}
function d(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumChannel();
}
function f(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumPost();
}
function _(e) {
    return null != e && (d(e) || f(e));
}
function p(e) {
    if (null == e || !(0, o.U)() || !u(e)) return !0;
    let { loaded: t, firstMessage: n } = i.Z.getMessage(e);
    return !t || null == n || !(0, r.rA)(n);
}
function h(e, t) {
    return !!e.isFirstMessageInForumPost(t) && !!e.isSystemDM() && f(t);
}
n(806246);
