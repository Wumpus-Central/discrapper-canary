n.d(t, {
    m: () => g,
    p: () => f,
}),
    n(938796);
var r = n(64700),
    l = n(665260),
    i = n(311907),
    o = n(717125),
    a = n(734057),
    c = n(71393),
    s = n(652215);
let d =
    s.pr7.CROSSPOSTED |
    s.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD |
    s.pr7.GUILD_FEED_HIDDEN |
    s.pr7.HAS_SNAPSHOT |
    s.pr7.HAS_THREAD |
    s.pr7.IS_CROSSPOST |
    s.pr7.IS_VOICE_MESSAGE |
    s.pr7.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING |
    s.pr7.SUPPRESS_EMBEDS |
    s.pr7.SUPPRESS_NOTIFICATIONS |
    s.pr7.URGENT |
    s.pr7.IS_COMPONENTS_V2;
function u(e) {
    return (
        e.state !== s.cmJ.SEND_FAILED &&
        !!s.MRS.FORWARDABLE.has(e.type) &&
        null == e.poll &&
        null == e.sharedClientTheme &&
        null == e.activity &&
        null == e.call &&
        null == e.activityInstance &&
        0 === (0, l.VL)(e.flags, d) &&
        !0
    );
}
function f(e) {
    var t;
    if (!u(e)) return !1;
    let n = null == (t = a.A.getChannel(e.channel_id)) ? void 0 : t.guild_id;
    return !(null != n && o.A.isChannelOrThreadParentGated(n, e.channel_id));
}
function g(e) {
    let t = (0, i.bG)([c.A, o.A, a.A], () => {
        var t, n, r;
        if (null == e) return !0;
        let l = null == (t = a.A.getChannel(e.channel_id)) ? void 0 : t.guild_id;
        if (null != l && (null == (n = c.A.getGuild(l)) ? void 0 : n.features.has(s.GuildFeatures.FORWARDING_DISABLED)))
            return !0;
        let i = null != l && o.A.isChannelOrThreadParentGated(l, e.channel_id),
            d = null != e && (null == (r = a.A.getChannel(e.channel_id)) ? void 0 : r.isModeratorReportChannel());
        return i || d;
    });
    return r.useMemo(() => !t && null != e && u(e), [t, e]);
}
