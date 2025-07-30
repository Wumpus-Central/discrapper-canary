(n.d(t, {
    Gi: () => y,
    P0: () => E,
    UD: () => h,
    WF: () => b,
    gT: () => g,
    iZ: () => m,
    iq: () => O,
    sP: () => _
}),
    n(642613),
    n(149765));
var r = n(294509),
    i = n(629710),
    a = n(860164),
    o = n(660189);
n(241559);
var s = n(182274),
    l = n(592125),
    c = n(430824);
(n(594174), n(700785));
var u = n(970257),
    d = n(893908),
    f = n(953252);
function _(e) {
    if (!(0, u.Fi)(e.author)) return !1;
    let t = l.Z.getChannel(e.channel_id);
    if (null == t) return !1;
    let n = c.Z.getGuild(t.guild_id);
    if (null == n) return !1;
    let r = (0, f.Z)(n),
        i = (0, d.Z)(n);
    return r && null != i;
}
function p(e) {
    return E(l.Z.getChannel(e));
}
function h(e) {
    return m(l.Z.getChannel(e));
}
function m(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumChannel();
}
function g(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumPost();
}
function E(e) {
    return null != e && (m(e) || g(e));
}
function b(e) {
    if (null == e || !(0, s.U)() || !p(e)) return !0;
    let { loaded: t, firstMessage: n } = o.Z.getMessage(e);
    return !t || null == n || !(0, i.X6)(n, r.qn.EXPLICIT);
}
function y(e, t) {
    return !!e.isFirstMessageInForumPost(t) && !!e.isSystemDM() && g(t);
}
function O(e) {
    return e.sort((e, t) => (e.id == a.a.MULTIPLE_REPORTS ? -1 : +(t.id == a.a.MULTIPLE_REPORTS)));
}
n(806246);
