n.d(t, {
    P0: () => p,
    Q3: () => m,
    WF: () => h,
    gT: () => _,
    iZ: () => f,
    iq: () => g,
    sP: () => u
}),
    n(642613),
    n(149765);
var r = n(247206),
    i = n(860164),
    o = n(660189);
n(241559);
var a = n(182274),
    s = n(592125),
    l = n(430824);
n(594174), n(700785);
var c = n(970257);
function u(e) {
    if (!(0, c.Fi)(e.author)) return !1;
    let t = s.Z.getChannel(e.channel_id);
    if (null == t) return !1;
    let n = l.Z.getGuild(t.guild_id);
    if (null == n) return !1;
    let r = n.getModeratorReportingEnabled(),
        i = n.getModeratorReportChannelId();
    return r && null != i;
}
function d(e) {
    return p(s.Z.getChannel(e));
}
function f(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumChannel();
}
function _(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumPost();
}
function p(e) {
    return null != e && (f(e) || _(e));
}
function h(e) {
    if (null == e || !(0, a.U)() || !d(e)) return !0;
    let { loaded: t, firstMessage: n } = o.Z.getMessage(e);
    return !t || null == n || !(0, r.rA)(n);
}
function m(e, t) {
    return !!e.isFirstMessageInForumPost(t) && !!e.isSystemDM() && _(t);
}
function g(e) {
    return e.sort((e, t) => (e.id == i.a.MULTIPLE_REPORTS ? -1 : +(t.id == i.a.MULTIPLE_REPORTS)));
}
n(806246);
