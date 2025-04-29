n.d(t, {
    _5: () => f,
    gT: () => g,
    sP: () => d
});
var i = n(149765),
    r = n(241559),
    l = n(592125),
    a = n(430824),
    o = n(594174),
    s = n(700785),
    c = n(970257),
    u = n(806246);
function d(e) {
    if (!(0, c.Fi)(e.author)) return !1;
    let t = l.Z.getChannel(e.channel_id);
    if (null == t) return !1;
    let n = a.Z.getGuild(t.guild_id);
    if (null == n) return !1;
    let i = n.getModeratorReportingEnabled(),
        r = n.getModeratorReportChannelId();
    return i && null != r;
}
let f = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z, o.default],
        n = (0, r.cD)(e, t);
    if (null == n) return !1;
    let { user: l, guild: c } = n;
    return (
        null != c &&
        !!c.getModeratorReportingEnabled() &&
        null != c.getModeratorReportChannelId() &&
        i.Db(
            s.uB({
                user: l,
                context: c,
                checkElevated: !1
            }),
            u.I
        )
    );
};
function g(e) {
    var t;
    if (null == e) return !1;
    let n = null == (t = a.Z.getGuild(e.guild_id)) ? void 0 : t.getModeratorReportChannelId();
    if (e.id === n) return !0;
    if ((null == e ? void 0 : e.parent_id) == null) return !1;
    let i = l.Z.getChannel(null == e ? void 0 : e.parent_id);
    return null != i && i.id === n;
}
