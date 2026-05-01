"use strict";
n.d(t, {
    C$: () => T,
    KB: () => E,
    Fo: () => g,
    xJ: () => A,
    Mn: () => S,
    uW: () => I,
    G9: () => y,
    Yj: () => N,
    iU: () => m,
});
var i = n(136722),
    r = n(811602),
    s = n(282108);
let a = "1004";
var o = n(969043);
n(134413);
var l = n(203389),
    u = n(734057),
    c = n(71393),
    d = n(232835);
n(287809), n(488926);
var _ = n(628691),
    f = n(272720),
    h = n(56595),
    p = n(652215);
function E(e) {
    if (!(0, _.UN)(e.author)) return !1;
    let t = u.A.getChannel(e.channel_id);
    if (null == t) return !1;
    let n = c.A.getGuild(t.guild_id);
    if (null == n) return !1;
    let i = (0, h.A)(n),
        r = (0, f.A)(n);
    return i && null != r;
}
function m(e) {
    return g(u.A.getChannel(e));
}
function g(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumChannel();
}
function A(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumPost();
}
function I(e) {
    return null != e && (g(e) || A(e));
}
function T(e) {
    if (null == e || !(0, l.L)() || !I(u.A.getChannel(e))) return !0;
    let { loaded: t, firstMessage: n } = o.A.getMessage(e);
    return !t || null == n || !(0, s.y5)(n, r.LO.EXPLICIT);
}
function S(e, t) {
    return !!e.isFirstMessageInForumPost(t) && !!e.isSystemDM() && A(t);
}
function N(e) {
    return e.sort((e, t) => (e.id == a ? -1 : +(t.id == a)));
}
function y(e, t) {
    let n = u.A.getChannel(e);
    if (null == n || !n.isModeratorReportChannel()) return !1;
    let i = d.A.getMessages(e).first();
    return i?.messageSnapshots?.[0]?.moderatorReport?.reported_user_id === t;
}
i.kg(p.xBc.ADMINISTRATOR, p.xBc.BAN_MEMBERS, p.xBc.KICK_MEMBERS, p.xBc.MODERATE_MEMBERS);
