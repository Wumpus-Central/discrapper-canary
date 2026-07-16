"use strict";
n.d(t, {
    qL: () => H,
    dI: () => F,
    JK: () => W,
    g4: () => j,
    Ay: () => K,
    QS: () => V,
    H$: () => x,
    zV: () => B,
    dL: () => Y,
    Ou: () => k,
});
var i = n(435558),
    r = n.n(i),
    a = n(136722);
n(938796);
var s = n(665260),
    l = n(734057),
    o = n(696451),
    d = n(71393),
    c = n(701785),
    u = n(65995),
    _ = n(707167),
    E = n(652215),
    A = n(340837),
    h = n(24873),
    I = n(95701),
    f = n(280450),
    p = n(808728),
    T = n(498642),
    m = n(317525),
    g = n(186295),
    S = n(576705),
    N = n(290863),
    C = n(763827),
    R = n(568548),
    O = n(994500),
    L = n(309010),
    y = n(967198),
    D = n(543465),
    v = n(287809),
    b = n(977997),
    M = n(174459),
    P = n(927813),
    U = n(488926),
    w = n(952818),
    G = n(746080);
function x(e) {
    if (null == e) return null;
    let t = d.A.getGuild(e);
    if (null == t) return null;
    let n = m.A.getNumRoles(t.id),
        i = f.default.getId(),
        r = o.Ay.getMember(e, i),
        a = p.Ay.getChannels(e),
        s = a[p.I6].length,
        l = a[p.vM].length,
        c = b.A.getVoiceStates(e);
    return {
        guild_id: t.id,
        guild_size_total: T.A.getMemberCount(e),
        guild_num_channels: s + l,
        guild_num_text_channels: s,
        guild_num_voice_channels: l,
        guild_num_roles: n,
        guild_member_num_roles: null != r ? r.roles.length : 0,
        guild_member_perms: String(S.A.getGuildPermissions(t) ?? U.x3),
        guild_is_vip: t.features.has(E.GuildFeatures.VIP_REGIONS),
        is_member: null != r,
        num_voice_channels_active: (function (e) {
            let t = 0;
            for (let n in e) t += 1;
            return t;
        })(c),
    };
}
function k(e) {
    if (null == e) return null;
    let t = l.A.getChannel(e);
    return null == t ? null : F(t);
}
function F(e) {
    if (null == e) return null;
    let t = !1,
        n = e.getGuildId();
    if (null != n) {
        let i = (e) => {
            if (null == e) return !1;
            let t = e.permissionOverwrites[n];
            return null != t && a.zy(t.deny, E.xBc.VIEW_CHANNEL);
        };
        t = i(I.Le.has(e.type) && null != e.parent_id ? l.A.getChannel(e.parent_id) : e);
    }
    return {
        channel_id: e.id,
        channel_type: e.type,
        channel_size_total: e.isPrivate() ? e.recipients.length : 0,
        channel_member_perms: String(null != n ? (S.A.getChannelPermissions(e) ?? U.x3) : U.x3),
        channel_hidden: t,
    };
}
function V(e) {
    let t;
    if (null == e) return null;
    let n = l.A.getChannel(e);
    if (null == n) return null;
    let i = g.Ay.isVideoEnabled(),
        r = C.A.getMediaSessionId();
    return {
        channel_id: n.id,
        channel_type: n.type,
        guild_id: n.getGuildId(),
        media_session_id: r,
        ...W(n.getGuildId(), n.id, i),
        ...{
            game_name: null != (t = w.Ay.getCurrentGameForAnalytics()) ? t.name : null,
            game_id: null != t ? t.id : null,
        },
    };
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (M.default.isThrottled(e)) return;
    let i = !("location" in t) || t.location !== E.ThZ.GUILD_CREATE_INVITE_SUGGESTION,
        r = "guild_id" in t ? t.guild_id : i ? y.A.getGuildId() : null,
        a = "channel_id" in t ? t.channel_id : i ? L.Ay.getChannelId(r) : null,
        s = l.A.getChannel(a),
        o = null == s ? (r ?? null) : s.isPrivate() ? null : (s.getGuildId() ?? r ?? null),
        d = {
            ...t,
            ...x(o),
            ...(null != r && null != a && (0, G.jq)(a) ? { channel_static_route: a, channel_hidden: !1 } : F(s)),
        };
    M.default.track(e, d, { flush: n });
}
function H(e) {
    var t;
    let n, i;
    if ((0, G.jq)(e)) return { channel_static_route: e };
    let r = l.A.getChannel(e);
    if (null == r) return { channel_id: e };
    let a = d.A.getGuild(r.guild_id);
    if (null == a) {
        let t = !1;
        if (r.isDM()) {
            let e = v.default.getUser(r.recipients[0]);
            null != e && (t = e.bot);
        }
        let n = r.isDM() || r.isGroupDM() ? j(r.recipients) : null;
        return {
            channel_id: e,
            is_app_dm: t,
            ...(null != n
                ? { friend_recipient_count: n.friendCount, non_friend_recipient_count: n.nonFriendCount }
                : null),
        };
    }
    let I = R.Ay.getSnapshot(e, 10 * P.A.Millis.SECOND);
    return {
        channel_id: e,
        channel_was_unread: I.unread,
        channel_mention_count: I.mentionCount,
        channel_is_muted: D.Ay.isChannelMuted(r.guild_id, r.id),
        channel_is_nsfw: r.isNSFW(),
        channel_is_spoiler: r.isSpoilerChannel(),
        channel_resolved_unread_setting: D.Ay.resolveUnreadSetting(r),
        channel_preset: (0, h.jU)(D.Ay.resolveUnreadSetting(r), D.Ay.resolvedMessageNotifications(r)),
        guild_id: r.guild_id,
        guild_was_unread: I.guildUnread,
        guild_mention_count: I.guildMentionCount,
        guild_is_muted: D.Ay.isMuted(r.guild_id),
        guild_resolved_unread_setting: D.Ay.resolveGuildUnreadSetting(a),
        guild_preset: (0, h.jU)(D.Ay.resolveGuildUnreadSetting(a), D.Ay.getMessageNotifications(r.guild_id)),
        parent_id: r.parent_id,
        parent_channel_type: r.parentChannelThreadType,
        has_pending_member_action:
            ((t = r.guild_id),
            (n = d.A.getGuild(t)),
            (i = l.A.getChannel(e)),
            null != n &&
                null != i &&
                (0, _.A)(n) &&
                n.features.has(E.GuildFeatures.GUILD_SERVER_GUIDE) &&
                !s.Lt(o.Ay.getSelfMember(n.id)?.flags ?? 0, A.D.COMPLETED_HOME_ACTIONS) &&
                c.h.hasMemberAction(n.id, i.id) &&
                !u.A.hasCompletedActionForChannel(n.id, i.id)),
        can_send_message: S.A.can(E.xBc.SEND_MESSAGES, r),
        is_app_dm: !1,
    };
}
function j(e) {
    let t = 0;
    for (let n of e) O.A.isFriend(n) && t++;
    return { friendCount: t, nonFriendCount: e.length - t };
}
function W(e, t, n) {
    let i = { voice_state_count: 0, video_stream_count: 0, video_enabled: n };
    return (
        r()(b.A.getVoiceStates(e))
            .filter((e) => e.channelId === t)
            .filter((e) => e.userId !== f.default.getId())
            .forEach((e) => {
                i.voice_state_count++, (e.selfVideo || e.selfStream) && i.video_stream_count++;
            }),
        i
    );
}
function Y(e, t) {
    let n = { custom_status_count: 0 };
    return (
        r()(b.A.getVoiceStates(e)).forEach((e) => {
            e.channelId === t &&
                null != N.A.findActivity(e.userId, (e) => e.type === E.$pd.CUSTOM_STATUS) &&
                n.custom_status_count++;
        }),
        n
    );
}
let K = { trackWithMetadata: B, getVoiceStateMetadata: W };
