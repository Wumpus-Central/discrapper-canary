n.d(t, {
    a: () => g,
    h: () => f,
}),
    n(997841);
var r = n(473749),
    i = n(95015),
    l = n(442837),
    a = n(430198),
    o = n(592125),
    s = n(430824),
    c = n(981631);
let u =
    c.iLy.CROSSPOSTED |
    c.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD |
    c.iLy.GUILD_FEED_HIDDEN |
    c.iLy.HAS_SNAPSHOT |
    c.iLy.HAS_THREAD |
    c.iLy.IS_CROSSPOST |
    c.iLy.IS_VOICE_MESSAGE |
    c.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING |
    c.iLy.SUPPRESS_EMBEDS |
    c.iLy.SUPPRESS_NOTIFICATIONS |
    c.iLy.URGENT |
    c.iLy.IS_COMPONENTS_V2;
function d(e) {
    return (
        e.state !== c.yb.SEND_FAILED &&
        !!c.V$x.FORWARDABLE.has(e.type) &&
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
    let n = null == (t = o.Z.getChannel(e.channel_id)) ? void 0 : t.guild_id;
    return !(null != n && a.Z.isChannelOrThreadParentGated(n, e.channel_id));
}
function g(e) {
    let t = (0, l.e7)([s.Z, a.Z, o.Z], () => {
        var t, n, r;
        if (null == e) return !0;
        let i = null == (t = o.Z.getChannel(e.channel_id)) ? void 0 : t.guild_id;
        if (null != i && (null == (n = s.Z.getGuild(i)) ? void 0 : n.features.has(c.GuildFeatures.FORWARDING_DISABLED)))
            return !0;
        let l = null != i && a.Z.isChannelOrThreadParentGated(i, e.channel_id),
            u = null != e && (null == (r = o.Z.getChannel(e.channel_id)) ? void 0 : r.isModeratorReportChannel());
        return l || u;
    });
    return r.useMemo(() => !t && null != e && d(e), [t, e]);
}
