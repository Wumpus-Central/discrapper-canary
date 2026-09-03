i.d(t, { By: () => b, E4: () => C, Gb: () => A, Yc: () => y, uq: () => k });
var n = i(95561),
    l = i(427358),
    r = i(47675),
    u = i(321191),
    a = i(734057),
    s = i(498642),
    o = i(696451),
    _ = i(71393),
    p = i(916546),
    d = i(573163),
    c = i(994500),
    f = i(116956),
    g = i(287809),
    m = i(927813),
    h = i(652215);
function y(e) {
    if (null == e) return;
    let t = a.A.getChannel(e);
    if (null == t) return;
    let i = _.A.getGuild(t.guild_id),
        n = null == i && t.isDM() && g.default.getUser(t.recipients[0])?.bot === !0,
        l = t.isPrivate() ? t.recipients.length : 0,
        r = i?.features.has(h.GuildFeatures.VIP_REGIONS),
        u = s.A.getMemberCount(t.guild_id),
        o = d.Ay.getSnapshot(e, 10 * m.A.Millis.SECOND),
        p = o.unread,
        c = o.mentionCount;
    return {
        channel_type: t.type,
        is_app_dm: n,
        channel_size_total: l,
        channel_was_unread: p,
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
        l = p.Ay.isVideoEnabled(),
        { voice_state_count: r, video_stream_count: u, video_enabled: s } = (0, n.JK)(i, e, l),
        { custom_status_count: o } = (0, n.dL)(i, e);
    return {
        voice_state_count: r,
        channel_type: t.type,
        channel_bitrate: t.bitrate,
        video_stream_count: u,
        video_enabled: s,
        custom_status_count: o,
    };
}
function A(e) {
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
        s = l.A.getUserAffinity(i),
        _ = null != n ? o.Ay.getMember(n, i) : null;
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
        communication_probability: s?.communicationProbability,
        communication_rank: s?.communicationRank,
        related_since: c.A.getSince(i),
        avatar_decoration_sku_id: a?.avatarDecoration?.skuId,
        profile_effect_sku_id: e.profileEffect?.skuId,
        profile_frame_sku_id: e.profileFrame?.skuId,
    };
}
function k(e, t, i) {
    return {
        upsell_type: e,
        ...(null != t && { has_premium_stream_fps: t }),
        ...(null != i && { has_premium_stream_resolution: i }),
    };
}
