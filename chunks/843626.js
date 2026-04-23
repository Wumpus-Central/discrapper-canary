n.d(t, { m: () => g, p: () => u }), n(938796);
var i = n(665260),
    l = n(311907),
    a = n(717125),
    r = n(734057),
    s = n(71393),
    o = n(576705),
    d = n(652215);
let c =
    d.pr7.CROSSPOSTED |
    d.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD |
    d.pr7.GUILD_FEED_HIDDEN |
    d.pr7.HAS_SNAPSHOT |
    d.pr7.HAS_THREAD |
    d.pr7.IS_CROSSPOST |
    d.pr7.IS_VOICE_MESSAGE |
    d.pr7.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING |
    d.pr7.SUPPRESS_EMBEDS |
    d.pr7.SUPPRESS_NOTIFICATIONS |
    d.pr7.URGENT |
    d.pr7.IS_COMPONENTS_V2 |
    d.pr7.IS_GUILD_OFFICIAL;
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.A,
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.A,
        u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : s.A;
    if (
        null == e ||
        !(
            e.state !== d.cmJ.SEND_FAILED &&
            d.MRS.FORWARDABLE.has(e.type) &&
            null == e.poll &&
            null == e.sharedClientTheme &&
            null == e.activity &&
            null == e.call &&
            null == e.activityInstance &&
            0 === (0, i.VL)(e.flags, c) &&
            1
        )
    )
        return !1;
    let g = l.getChannel(e.channel_id),
        A = t.can(d.xBc.READ_MESSAGE_HISTORY, g);
    if (null != g && !A && !g.isPrivate()) return !1;
    let h = g?.guild_id;
    return !(
        (null != h && u.getGuild(h)?.features.has(d.GuildFeatures.FORWARDING_DISABLED)) ||
        (null != h && n.isChannelOrThreadParentGated(h, e.channel_id)) ||
        g?.isModeratorReportChannel()
    );
}
function g(e) {
    return (0, l.bG)([o.A, a.A, r.A, s.A], () => u(e, o.A, a.A, r.A, s.A));
}
