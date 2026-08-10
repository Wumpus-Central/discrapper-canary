n.d(e, { m: () => I, p: () => p }), n(938796);
var S = n(665260),
    r = n(17928),
    t = n(717125),
    _ = n(734057),
    A = n(71393),
    i = n(576705),
    E = n(652215);
let a =
    E.pr7.CROSSPOSTED |
    E.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD |
    E.pr7.GUILD_FEED_HIDDEN |
    E.pr7.HAS_SNAPSHOT |
    E.pr7.HAS_THREAD |
    E.pr7.IS_CROSSPOST |
    E.pr7.IS_VOICE_MESSAGE |
    E.pr7.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING |
    E.pr7.SUPPRESS_EMBEDS |
    E.pr7.SUPPRESS_NOTIFICATIONS |
    E.pr7.URGENT |
    E.pr7.IS_COMPONENTS_V2 |
    E.pr7.IS_GUILD_OFFICIAL |
    E.pr7.IS_SCHEDULED;
function p(l) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.A,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _.A,
        p = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : A.A;
    if (
        null == l ||
        !(
            l.state !== E.cmJ.SEND_FAILED &&
            E.MRS.FORWARDABLE.has(l.type) &&
            null == l.poll &&
            null == l.sharedClientTheme &&
            null == l.activity &&
            null == l.call &&
            null == l.activityInstance &&
            0 === (0, S.VL)(l.flags, a) &&
            1
        )
    )
        return !1;
    let I = r.getChannel(l.channel_id),
        u = e.can(E.xBc.READ_MESSAGE_HISTORY, I);
    if (null != I && !u && !I.isPrivate()) return !1;
    let O = I?.guild_id;
    return !(
        (null != O && p.getGuild(O)?.features.has(E.GuildFeatures.FORWARDING_DISABLED)) ||
        (null != O && n.isChannelOrThreadParentGated(O, l.channel_id)) ||
        I?.isModeratorReportChannel()
    );
}
function I(l) {
    return (0, r.bG)([i.A, t.A, _.A, A.A], () => p(l, i.A, t.A, _.A, A.A));
}
