n.d(t, {
    Gi: () => A,
    P0: () => I,
    UD: () => O,
    WF: () => T,
    _5: () => b,
    gT: () => S,
    iZ: () => v,
    iq: () => C,
    sP: () => E,
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
    f = n(594174),
    p = n(700785),
    _ = n(970257),
    m = n(893908),
    h = n(953252),
    g = n(806246);
function E(e) {
    if (!(0, _.Fi)(e.author)) return !1;
    let t = u.Z.getChannel(e.channel_id);
    if (null == t) return !1;
    let n = d.Z.getGuild(t.guild_id);
    if (null == n) return !1;
    let r = (0, h.Z)(n),
        i = (0, m.Z)(n);
    return r && null != i;
}
let b = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [d.Z, f.default],
        n = (0, l.cD)(e, t);
    if (null == n) return !1;
    let { user: i, guild: a } = n;
    return (
        null != a &&
        !!(0, h.Z)(a) &&
        null != (0, m.Z)(a) &&
        r.Db(
            p.uB({
                user: i,
                context: a,
                checkElevated: !1,
            }),
            g.I,
        )
    );
};
function y(e) {
    return I(u.Z.getChannel(e));
}
function O(e) {
    return v(u.Z.getChannel(e));
}
function v(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumChannel();
}
function S(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumPost();
}
function I(e) {
    return null != e && (v(e) || S(e));
}
function T(e) {
    if (null == e || !(0, c.U)() || !y(e)) return !0;
    let { loaded: t, firstMessage: n } = s.Z.getMessage(e);
    return !t || null == n || !(0, a.X6)(n, i.qn.EXPLICIT);
}
function A(e, t) {
    return !!e.isFirstMessageInForumPost(t) && !!e.isSystemDM() && S(t);
}
function C(e) {
    return e.sort((e, t) => (e.id == o.a.MULTIPLE_REPORTS ? -1 : +(t.id == o.a.MULTIPLE_REPORTS)));
}
