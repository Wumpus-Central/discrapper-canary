n.d(t, {
    P0: () => o,
    iZ: () => u,
    sP: () => a
}),
    n(149765),
    n(241559);
var i = n(592125),
    r = n(430824);
n(594174), n(700785);
var l = n(970257);
function a(e) {
    if (!(0, l.Fi)(e.author)) return !1;
    let t = i.Z.getChannel(e.channel_id);
    if (null == t) return !1;
    let n = r.Z.getGuild(t.guild_id);
    if (null == n) return !1;
    let a = n.getModeratorReportingEnabled(),
        u = n.getModeratorReportChannelId();
    return a && null != u;
}
function u(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumChannel();
}
function o(e) {
    return null != e && (u(e) || (null != e && e.isModeratorReportChannel() && e.isForumPost()));
}
n(806246);
