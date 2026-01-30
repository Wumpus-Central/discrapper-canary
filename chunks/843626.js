n.d(t, {
    m: () => g,
    p: () => u,
}),
    n(938796);
var r = n(665260),
    i = n(311907),
    l = n(717125),
    a = n(734057),
    o = n(71393),
    c = n(576705),
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
    var t, n;
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.A,
        u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.A,
        g = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.A,
        p = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : o.A;
    if (
        null == e ||
        !(
            e.state !== s.cmJ.SEND_FAILED &&
            s.MRS.FORWARDABLE.has(e.type) &&
            null == e.poll &&
            null == e.sharedClientTheme &&
            null == e.activity &&
            null == e.call &&
            null == e.activityInstance &&
            0 === (0, r.VL)(e.flags, d) &&
            1
        ) ||
        !i.canWithPartialContext(s.xBc.READ_MESSAGE_HISTORY, {
            channelId: e.channel_id,
        })
    )
        return !1;
    let f = g.getChannel(e.channel_id),
        y = null == f ? void 0 : f.guild_id;
    return (
        !(
            (null != y &&
                (null == (n = p.getGuild(y)) ? void 0 : n.features.has(s.GuildFeatures.FORWARDING_DISABLED))) ||
            (null != y && u.isChannelOrThreadParentGated(y, e.channel_id))
        ) &&
        (null == (t = null == f ? void 0 : f.isModeratorReportChannel()) || !t)
    );
}

function g(e) {
    return (0, i.bG)([c.A, l.A, a.A, o.A], () => u(e, c.A, l.A, a.A, o.A));
}
