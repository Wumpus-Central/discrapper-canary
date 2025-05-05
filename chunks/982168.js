n.d(t, {
    _5: () => f,
    gT: () => _,
    sP: () => d
});
var r = n(149765),
    i = n(241559),
    o = n(592125),
    a = n(430824),
    s = n(594174),
    l = n(700785),
    c = n(970257),
    u = n(806246);
function d(e) {
    if (!(0, c.Fi)(e.author)) return !1;
    let t = o.Z.getChannel(e.channel_id);
    if (null == t) return !1;
    let n = a.Z.getGuild(t.guild_id);
    if (null == n) return !1;
    let r = n.getModeratorReportingEnabled(),
        i = n.getModeratorReportChannelId();
    return r && null != i;
}
let f = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z, s.default],
        n = (0, i.cD)(e, t);
    if (null == n) return !1;
    let { user: o, guild: c } = n;
    return (
        null != c &&
        !!c.getModeratorReportingEnabled() &&
        null != c.getModeratorReportChannelId() &&
        r.Db(
            l.uB({
                user: o,
                context: c,
                checkElevated: !1
            }),
            u.I
        )
    );
};
function _(e) {
    var t;
    if (null == e) return !1;
    let n = null == (t = a.Z.getGuild(e.guild_id)) ? void 0 : t.getModeratorReportChannelId();
    if (e.id === n) return !0;
    if ((null == e ? void 0 : e.parent_id) == null) return !1;
    let r = o.Z.getChannel(null == e ? void 0 : e.parent_id);
    return null != r && r.id === n;
}
