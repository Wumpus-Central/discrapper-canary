n.d(t, {
    Gi: () => C,
    H0: () => P,
    P0: () => T,
    UD: () => v,
    WF: () => A,
    _5: () => y,
    gT: () => I,
    iZ: () => S,
    iq: () => N,
    sP: () => b,
}),
    n(642613);
var r = n(149765),
    i = n(294509),
    a = n(629710),
    o = n(860164),
    s = n(660189),
    l = n(241559),
    c = n(182274),
    u = n(592125),
    d = n(430824),
    f = n(375954),
    p = n(594174),
    _ = n(700785),
    m = n(970257),
    h = n(893908),
    g = n(953252),
    E = n(806246);
function b(e) {
    if (!(0, m.Fi)(e.author)) return !1;
    let t = u.Z.getChannel(e.channel_id);
    if (null == t) return !1;
    let n = d.Z.getGuild(t.guild_id);
    if (null == n) return !1;
    let r = (0, g.Z)(n),
        i = (0, h.Z)(n);
    return r && null != i;
}
let y = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [d.Z, p.default],
        n = (0, l.cD)(e, t);
    if (null == n) return !1;
    let { user: i, guild: a } = n;
    return (
        null != a &&
        !!(0, g.Z)(a) &&
        null != (0, h.Z)(a) &&
        r.Db(
            _.uB({
                user: i,
                context: a,
                checkElevated: !1,
            }),
            E.I,
        )
    );
};
function O(e) {
    return T(u.Z.getChannel(e));
}
function v(e) {
    return S(u.Z.getChannel(e));
}
function S(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumChannel();
}
function I(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumPost();
}
function T(e) {
    return null != e && (S(e) || I(e));
}
function A(e) {
    if (null == e || !(0, c.U)() || !O(e)) return !0;
    let { loaded: t, firstMessage: n } = s.Z.getMessage(e);
    return !t || null == n || !(0, a.X6)(n, i.qn.EXPLICIT);
}
function C(e, t) {
    return !!e.isFirstMessageInForumPost(t) && !!e.isSystemDM() && I(t);
}
function N(e) {
    return e.sort((e, t) => (e.id == o.a.MULTIPLE_REPORTS ? -1 : +(t.id == o.a.MULTIPLE_REPORTS)));
}
function P(e, t) {
    var n, r, i;
    let a = u.Z.getChannel(e);
    if (null == a || !a.isModeratorReportChannel()) return !1;
    let o = f.Z.getMessages(e).first();
    return (
        (null == o || null == (i = o.messageSnapshots) || null == (r = i[0]) || null == (n = r.moderatorReport)
            ? void 0
            : n.reported_user_id) === t
    );
}
