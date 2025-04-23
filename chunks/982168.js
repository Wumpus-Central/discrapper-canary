n.d(t, { s: () => a });
var i = n(592125),
    r = n(430824),
    l = n(970257);
function a(e) {
    if (!(0, l.Fi)(e.author)) return !1;
    let t = i.Z.getChannel(e.channel_id);
    if (null == t) return !1;
    let n = r.Z.getGuild(t.guild_id);
    if (null == n) return !1;
    let a = n.getModeratorReportingEnabled(),
        o = n.getModeratorReportChannelId();
    return a && null != o;
}
