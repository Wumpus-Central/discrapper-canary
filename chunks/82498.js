t.d(r, { By: () => y, E4: () => S, Gb: () => F, Yc: () => R, uq: () => m });
var l = t(666860),
    i = t(427358),
    n = t(47675),
    u = t(321191),
    o = t(734057),
    _ = t(498642),
    s = t(696451),
    a = t(71393),
    f = t(192820),
    c = t(573163),
    d = t(994500),
    p = t(116956),
    E = t(287809),
    h = t(927813),
    g = t(652215);
function R(e) {
    if (null == e) return;
    let r = o.A.getChannel(e);
    if (null == r) return;
    let t = a.A.getGuild(r.guild_id),
        l = null == t && r.isDM() && E.default.getUser(r.recipients[0])?.bot === !0,
        i = r.isPrivate() ? r.recipients.length : 0,
        n = t?.features.has(g.GuildFeatures.VIP_REGIONS),
        u = _.A.getMemberCount(r.guild_id),
        s = c.Ay.getSnapshot(e, 10 * h.A.Millis.SECOND),
        f = s.unread,
        d = s.mentionCount;
    return {
        channel_type: r.type,
        is_app_dm: l,
        channel_size_total: i,
        channel_was_unread: f,
        channel_mention_count: d,
        guild_is_vip: n,
        guild_size_total: u,
    };
}
function y(e) {
    if (null == e) return;
    let r = o.A.getChannel(e);
    if (null == r) return;
    let t = r.guild_id,
        i = f.Ay.isVideoEnabled(),
        { voice_state_count: n, video_stream_count: u, video_enabled: _ } = (0, l.JK)(t, e, i),
        { custom_status_count: s } = (0, l.dL)(t, e);
    return {
        voice_state_count: n,
        channel_type: r.type,
        channel_bitrate: r.bitrate,
        video_stream_count: u,
        video_enabled: _,
        custom_status_count: s,
    };
}
function F(e) {
    let r = p.A.getRTCConnection(e);
    if (null == r) return;
    let { duration: t, avg_resolution: l } = r.getVideoStats() ?? {};
    return {
        duration: t,
        max_viewers: r.getMaxViewers(),
        channel_type: o.A.getChannel(r.channelId)?.type,
        avg_resolution: l,
        share_application_name: r.analyticsContext.streamApplication?.name,
    };
}
function S(e, r) {
    if (null == e) return;
    let { userId: t, guildId: l } = e,
        o = E.default.getUser(t),
        _ = i.A.getUserAffinity(t),
        a = null != l ? s.Ay.getMember(l, t) : null;
    return {
        relationship_type: d.A.getRelationshipType(t),
        profile_layout: r,
        is_guild_profile: null != l,
        is_bot_profile: o?.bot,
        user_status: (0, n.CD)(t),
        profile_properties: (0, n.XH)({ user: o, userProfile: e._userProfile }),
        guild_profile_properties: (0, n.XH)({ guildMember: a, guildMemberProfile: e._guildMemberProfile }),
        num_mutual_guilds: u.A.getMutualGuilds(t)?.length,
        num_mutual_friends: u.A.getMutualFriendsCount(t),
        profile_badges:
            e
                .getBadges()
                ?.map((e) => {
                    let { id: r } = e;
                    return r;
                })
                .filter((e) => "string" == typeof e) ?? [],
        communication_probability: _?.communicationProbability,
        communication_rank: _?.communicationRank,
        related_since: d.A.getSince(t),
        avatar_decoration_sku_id: o?.avatarDecoration?.skuId,
        profile_effect_sku_id: e.profileEffect?.skuId,
        profile_frame_sku_id: e.profileFrame?.skuId,
    };
}
function m(e, r, t) {
    return {
        upsell_type: e,
        ...(null != r && { has_premium_stream_fps: r }),
        ...(null != t && { has_premium_stream_resolution: t }),
    };
}
