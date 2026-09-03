n.d(t, {
    C$: () => g,
    KB: () => I,
    Fo: () => p,
    xJ: () => T,
    Mn: () => S,
    uW: () => m,
    G9: () => C,
    Yj: () => N,
    iU: () => f,
});
var i = n(136722),
    r = n(811602),
    a = n(282108);
let s = "1004";
var l = n(969043);
n(134413);
var o = n(203389),
    d = n(734057),
    c = n(71393),
    u = n(232835);
n(287809), n(488926);
var _ = n(628691),
    E = n(272720),
    A = n(56595),
    h = n(652215);
function I(e) {
    if (!(0, _.UN)(e.author)) return !1;
    let t = d.A.getChannel(e.channel_id);
    if (null == t) return !1;
    let n = c.A.getGuild(t.guild_id);
    if (null == n) return !1;
    let i = (0, A.A)(n),
        r = (0, E.A)(n);
    return i && null != r;
}
function f(e) {
    return p(d.A.getChannel(e));
}
function p(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumChannel();
}
function T(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumPost();
}
function m(e) {
    return null != e && (p(e) || T(e));
}
function g(e) {
    if (null == e || !(0, o.L)() || !m(d.A.getChannel(e))) return !0;
    let { loaded: t, firstMessage: n } = l.A.getMessage(e);
    return !t || null == n || !(0, a.y5)(n, r.LO.EXPLICIT);
}
function S(e, t) {
    return !!e.isFirstMessageInForumPost(t) && !!e.isSystemDM() && T(t);
}
function N(e) {
    return e.sort((e, t) => (e.id == s ? -1 : +(t.id == s)));
}
function C(e, t) {
    let n = d.A.getChannel(e);
    if (null == n || !n.isModeratorReportChannel()) return !1;
    let i = u.A.getMessages(e).first();
    return i?.messageSnapshots?.[0]?.moderatorReport?.reported_user_id === t;
}
i.kg(h.xBc.ADMINISTRATOR, h.xBc.BAN_MEMBERS, h.xBc.KICK_MEMBERS, h.xBc.MODERATE_MEMBERS);
