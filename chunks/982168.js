n.d(t, {
    Gi: () => O,
    H0: () => S,
    P0: () => b,
    UD: () => h,
    WF: () => y,
    gT: () => E,
    iZ: () => g,
    iq: () => v,
    sP: () => _,
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
    c = n(430824),
    u = n(375954);
n(594174), n(700785);
var d = n(970257),
    f = n(893908),
    p = n(953252);
function _(e) {
    if (!(0, d.Fi)(e.author)) return !1;
    let t = l.Z.getChannel(e.channel_id);
    if (null == t) return !1;
    let n = c.Z.getGuild(t.guild_id);
    if (null == n) return !1;
    let r = (0, p.Z)(n),
        i = (0, f.Z)(n);
    return r && null != i;
}
function m(e) {
    return b(l.Z.getChannel(e));
}
function h(e) {
    return g(l.Z.getChannel(e));
}
function g(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumChannel();
}
function E(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumPost();
}
function b(e) {
    return null != e && (g(e) || E(e));
}
function y(e) {
    if (null == e || !(0, s.U)() || !m(e)) return !0;
    let { loaded: t, firstMessage: n } = o.Z.getMessage(e);
    return !t || null == n || !(0, i.X6)(n, r.qn.EXPLICIT);
}
function O(e, t) {
    return !!e.isFirstMessageInForumPost(t) && !!e.isSystemDM() && E(t);
}
function v(e) {
    return e.sort((e, t) => (e.id == a.a.MULTIPLE_REPORTS ? -1 : +(t.id == a.a.MULTIPLE_REPORTS)));
}
function S(e, t) {
    var n, r, i;
    let a = l.Z.getChannel(e);
    if (null == a || !a.isModeratorReportChannel()) return !1;
    let o = u.Z.getMessages(e).first();
    return (
        (null == o || null == (i = o.messageSnapshots) || null == (r = i[0]) || null == (n = r.moderatorReport)
            ? void 0
            : n.reported_user_id) === t
    );
}
n(806246);
