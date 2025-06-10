n.d(t, {
    Gi: () => E,
    P0: () => m,
    UD: () => _,
    WF: () => g,
    gT: () => h,
    iZ: () => p,
    iq: () => b,
    sP: () => d
}),
    n(642613),
    n(149765);
var r = n(294509),
    i = n(629710),
    a = n(860164),
    o = n(660189);
n(241559);
var s = n(182274),
    l = n(592125),
    c = n(430824);
n(594174), n(700785);
var u = n(970257);
function d(e) {
    if (!(0, u.Fi)(e.author)) return !1;
    let t = l.Z.getChannel(e.channel_id);
    if (null == t) return !1;
    let n = c.Z.getGuild(t.guild_id);
    if (null == n) return !1;
    let r = n.getModeratorReportingEnabled(),
        i = n.getModeratorReportChannelId();
    return r && null != i;
}
function f(e) {
    return m(l.Z.getChannel(e));
}
function _(e) {
    return p(l.Z.getChannel(e));
}
function p(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumChannel();
}
function h(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumPost();
}
function m(e) {
    return null != e && (p(e) || h(e));
}
function g(e) {
    if (null == e || !(0, s.U)() || !f(e)) return !0;
    let { loaded: t, firstMessage: n } = o.Z.getMessage(e);
    return !t || null == n || !(0, i.X6)(n, r.qn.EXPLICIT);
}
function E(e, t) {
    return !!e.isFirstMessageInForumPost(t) && !!e.isSystemDM() && h(t);
}
function b(e) {
    return e.sort((e, t) => (e.id == a.a.MULTIPLE_REPORTS ? -1 : +(t.id == a.a.MULTIPLE_REPORTS)));
}
n(806246);
