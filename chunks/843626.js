"use strict";
n.d(t, { m: () => _, p: () => d }), n(938796);
var i = n(665260),
    a = n(311907),
    r = n(717125),
    l = n(734057),
    s = n(71393),
    o = n(576705),
    c = n(652215);
let u =
    c.pr7.CROSSPOSTED |
    c.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD |
    c.pr7.GUILD_FEED_HIDDEN |
    c.pr7.HAS_SNAPSHOT |
    c.pr7.HAS_THREAD |
    c.pr7.IS_CROSSPOST |
    c.pr7.IS_VOICE_MESSAGE |
    c.pr7.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING |
    c.pr7.SUPPRESS_EMBEDS |
    c.pr7.SUPPRESS_NOTIFICATIONS |
    c.pr7.URGENT |
    c.pr7.IS_COMPONENTS_V2 |
    c.pr7.IS_GUILD_OFFICIAL;
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.A,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.A,
        d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : s.A;
    if (
        null == e ||
        !(
            e.state !== c.cmJ.SEND_FAILED &&
            c.MRS.FORWARDABLE.has(e.type) &&
            null == e.poll &&
            null == e.sharedClientTheme &&
            null == e.activity &&
            null == e.call &&
            null == e.activityInstance &&
            0 === (0, i.VL)(e.flags, u) &&
            1
        )
    )
        return !1;
    let _ = a.getChannel(e.channel_id),
        p = t.can(c.xBc.READ_MESSAGE_HISTORY, _);
    if (null != _ && !p && !_.isPrivate()) return !1;
    let m = _?.guild_id;
    return !(
        (null != m && d.getGuild(m)?.features.has(c.GuildFeatures.FORWARDING_DISABLED)) ||
        (null != m && n.isChannelOrThreadParentGated(m, e.channel_id)) ||
        _?.isModeratorReportChannel()
    );
}
function _(e) {
    return (0, a.bG)([o.A, r.A, l.A, s.A], () => d(e, o.A, r.A, l.A, s.A));
}
