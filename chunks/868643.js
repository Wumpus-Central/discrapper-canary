n.d(t, {
    a: () => g,
    h: () => f,
}),
    n(997841);
var r = n(473749),
    i = n(95015),
    l = n(442837),
    o = n(430198),
    a = n(592125),
    c = n(430824),
    s = n(981631);
let u =
    s.iLy.CROSSPOSTED |
    s.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD |
    s.iLy.GUILD_FEED_HIDDEN |
    s.iLy.HAS_SNAPSHOT |
    s.iLy.HAS_THREAD |
    s.iLy.IS_CROSSPOST |
    s.iLy.IS_VOICE_MESSAGE |
    s.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING |
    s.iLy.SUPPRESS_EMBEDS |
    s.iLy.SUPPRESS_NOTIFICATIONS |
    s.iLy.URGENT |
    s.iLy.IS_COMPONENTS_V2;
function d(e) {
    return (
        e.state !== s.yb.SEND_FAILED &&
        !!s.V$x.FORWARDABLE.has(e.type) &&
        null == e.poll &&
        null == e.sharedClientTheme &&
        null == e.activity &&
        null == e.call &&
        null == e.activityInstance &&
        0 === (0, i.Ge)(e.flags, u) &&
        !0
    );
}
function f(e) {
    var t;
    if (!d(e)) return !1;
    let n = null == (t = a.Z.getChannel(e.channel_id)) ? void 0 : t.guild_id;
    return !(null != n && o.Z.isChannelOrThreadParentGated(n, e.channel_id));
}
function g(e) {
    let t = (0, l.e7)([c.Z, o.Z, a.Z], () => {
        var t, n, r;
        if (null == e) return !0;
        let i = null == (t = a.Z.getChannel(e.channel_id)) ? void 0 : t.guild_id;
        if (null != i && (null == (n = c.Z.getGuild(i)) ? void 0 : n.features.has(s.GuildFeatures.FORWARDING_DISABLED)))
            return !0;
        let l = null != i && o.Z.isChannelOrThreadParentGated(i, e.channel_id),
            u = null != e && (null == (r = a.Z.getChannel(e.channel_id)) ? void 0 : r.isModeratorReportChannel());
        return l || u;
    });
    return r.useMemo(() => !t && null != e && d(e), [t, e]);
}
