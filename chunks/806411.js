(n.d(t, { q: () => m }), n(938796));
var i = n(665260),
    r = n(734057),
    a = n(696451),
    s = n(71393),
    l = n(701785),
    o = n(65995),
    d = n(707167),
    c = n(652215),
    u = n(340837),
    _ = n(24873),
    E = n(576705),
    A = n(573163),
    h = n(543465),
    f = n(287809),
    I = n(927813),
    p = n(666860),
    T = n(746080);
function m(e) {
    var t;
    let n, m;
    if ((0, T.jq)(e)) return { channel_static_route: e };
    let g = r.A.getChannel(e);
    if (null == g) return { channel_id: e };
    let S = s.A.getGuild(g.guild_id);
    if (null == S) {
        let t = !1;
        if (g.isDM()) {
            let e = f.default.getUser(g.recipients[0]);
            null != e && (t = e.bot);
        }
        let n = g.isDM() || g.isGroupDM() ? (0, p.g4)(g.recipients) : null;
        return {
            channel_id: e,
            is_app_dm: t,
            ...(null != n
                ? { friend_recipient_count: n.friendCount, non_friend_recipient_count: n.nonFriendCount }
                : null),
        };
    }
    let N = A.Ay.getSnapshot(e, 10 * I.A.Millis.SECOND);
    return {
        channel_id: e,
        channel_was_unread: N.unread,
        channel_mention_count: N.mentionCount,
        channel_is_muted: h.Ay.isChannelMuted(g.guild_id, g.id),
        channel_is_nsfw: g.isNSFW(),
        channel_is_spoiler: g.isSpoilerChannel(),
        channel_resolved_unread_setting: h.Ay.resolveUnreadSetting(g),
        channel_preset: (0, _.jU)(h.Ay.resolveUnreadSetting(g), h.Ay.resolvedMessageNotifications(g)),
        guild_id: g.guild_id,
        guild_was_unread: N.guildUnread,
        guild_mention_count: N.guildMentionCount,
        guild_is_muted: h.Ay.isMuted(g.guild_id),
        guild_resolved_unread_setting: h.Ay.resolveGuildUnreadSetting(S),
        guild_preset: (0, _.jU)(h.Ay.resolveGuildUnreadSetting(S), h.Ay.getMessageNotifications(g.guild_id)),
        parent_id: g.parent_id,
        parent_channel_type: g.parentChannelThreadType,
        has_pending_member_action:
            ((t = g.guild_id),
            (n = s.A.getGuild(t)),
            (m = r.A.getChannel(e)),
            null != n &&
                null != m &&
                (0, d.A)(n) &&
                n.features.has(c.GuildFeatures.GUILD_SERVER_GUIDE) &&
                !i.Lt(a.Ay.getSelfMember(n.id)?.flags ?? 0, u.D.COMPLETED_HOME_ACTIONS) &&
                l.h.hasMemberAction(n.id, m.id) &&
                !o.A.hasCompletedActionForChannel(n.id, m.id)),
        can_send_message: E.A.can(c.xBc.SEND_MESSAGES, g),
        is_app_dm: !1,
        ...((g.type === c.rbe.GUILD_APP || g.isGuildVocal()) && null != g.application_id
            ? { application_id: g.application_id }
            : null),
    };
}
