i.d(t, { By: () => b, E4: () => C, Gb: () => y, Yc: () => A });
var n = i(95561),
    l = i(427358),
    r = i(47675),
    u = i(321191),
    a = i(734057),
    o = i(498642),
    s = i(696451),
    _ = i(71393),
    d = i(453028),
    p = i(573163),
    c = i(994500),
    f = i(116956),
    g = i(287809),
    m = i(927813),
    h = i(652215);
function A(e) {
    if (null == e) return;
    let t = a.A.getChannel(e);
    if (null == t) return;
    let i = _.A.getGuild(t.guild_id),
        n = null == i && t.isDM() && g.default.getUser(t.recipients[0])?.bot === !0,
        l = t.isPrivate() ? t.recipients.length : 0,
        r = i?.features.has(h.GuildFeatures.VIP_REGIONS),
        u = o.A.getMemberCount(t.guild_id),
        s = p.Ay.getSnapshot(e, 10 * m.A.Millis.SECOND),
        d = s.unread,
        c = s.mentionCount;
    return {
        channel_type: t.type,
        is_app_dm: n,
        channel_size_total: l,
        channel_was_unread: d,
        channel_mention_count: c,
        guild_is_vip: r,
        guild_size_total: u,
    };
}
function b(e) {
    if (null == e) return;
    let t = a.A.getChannel(e);
    if (null == t) return;
    let i = t.guild_id,
        l = d.Ay.isVideoEnabled(),
        { voice_state_count: r, video_stream_count: u, video_enabled: o } = (0, n.JK)(i, e, l),
        { custom_status_count: s } = (0, n.dL)(i, e);
    return {
        voice_state_count: r,
        channel_type: t.type,
        channel_bitrate: t.bitrate,
        video_stream_count: u,
        video_enabled: o,
        custom_status_count: s,
    };
}
function y(e) {
    let t = f.A.getRTCConnection(e);
    if (null == t) return;
    let { duration: i, avg_resolution: n } = t.getVideoStats() ?? {};
    return {
        duration: i,
        max_viewers: t.getMaxViewers(),
        channel_type: a.A.getChannel(t.channelId)?.type,
        avg_resolution: n,
        share_application_name: t.analyticsContext.streamApplication?.name,
    };
}
function C(e, t) {
    if (null == e) return;
    let { userId: i, guildId: n } = e,
        a = g.default.getUser(i),
        o = l.A.getUserAffinity(i),
        _ = null != n ? s.Ay.getMember(n, i) : null;
    return {
        relationship_type: c.A.getRelationshipType(i),
        profile_layout: t,
        is_guild_profile: null != n,
        is_bot_profile: a?.bot,
        user_status: (0, r.CD)(i),
        profile_properties: (0, r.XH)({ user: a, userProfile: e._userProfile }),
        guild_profile_properties: (0, r.XH)({ guildMember: _, guildMemberProfile: e._guildMemberProfile }),
        num_mutual_guilds: u.A.getMutualGuilds(i)?.length,
        num_mutual_friends: u.A.getMutualFriendsCount(i),
        profile_badges:
            e
                .getBadges()
                ?.map((e) => {
                    let { id: t } = e;
                    return t;
                })
                .filter((e) => "string" == typeof e) ?? [],
        communication_probability: o?.communicationProbability,
        communication_rank: o?.communicationRank,
        related_since: c.A.getSince(i),
        avatar_decoration_sku_id: a?.avatarDecoration?.skuId,
        profile_effect_sku_id: e.profileEffect?.skuId,
        profile_frame_sku_id: e.profileFrame?.skuId,
    };
}
