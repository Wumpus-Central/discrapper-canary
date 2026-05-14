"use strict";
n.d(t, {
    qL: () => B,
    dI: () => G,
    JK: () => H,
    Ay: () => Y,
    QS: () => F,
    H$: () => U,
    zV: () => V,
    dL: () => j,
    Ou: () => k,
});
var i = n(735438),
    r = n.n(i),
    s = n(136722);
n(938796);
var a = n(665260),
    o = n(734057),
    l = n(696451),
    u = n(71393),
    c = n(701785),
    d = n(65995),
    _ = n(707167),
    f = n(652215),
    h = n(340837),
    p = n(24873),
    E = n(95701),
    m = n(495544),
    g = n(808728),
    A = n(498642),
    I = n(317525),
    T = n(235058),
    S = n(576705),
    N = n(290863),
    y = n(763827),
    C = n(222823),
    v = n(309010),
    O = n(967198),
    R = n(543465),
    b = n(287809),
    D = n(977997),
    L = n(174459),
    w = n(927813),
    M = n(488926),
    P = n(952818),
    x = n(746080);
function U(e) {
    if (null == e) return null;
    let t = u.A.getGuild(e);
    if (null == t) return null;
    let n = I.A.getNumRoles(t.id),
        i = m.default.getId(),
        r = l.Ay.getMember(e, i),
        s = g.Ay.getChannels(e),
        a = s[g.I6].length,
        o = s[g.vM].length,
        c = D.A.getVoiceStates(e);
    return {
        guild_id: t.id,
        guild_size_total: A.A.getMemberCount(e),
        guild_num_channels: a + o,
        guild_num_text_channels: a,
        guild_num_voice_channels: o,
        guild_num_roles: n,
        guild_member_num_roles: null != r ? r.roles.length : 0,
        guild_member_perms: String(S.A.getGuildPermissions(t) ?? M.x3),
        guild_is_vip: t.features.has(f.GuildFeatures.VIP_REGIONS),
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
    let t = o.A.getChannel(e);
    return null == t ? null : G(t);
}
function G(e) {
    if (null == e) return null;
    let t = !1,
        n = e.getGuildId();
    if (null != n) {
        let i = (e) => {
            if (null == e) return !1;
            let t = e.permissionOverwrites[n];
            return null != t && s.zy(t.deny, f.xBc.VIEW_CHANNEL);
        };
        t = i(E.Le.has(e.type) && null != e.parent_id ? o.A.getChannel(e.parent_id) : e);
    }
    return {
        channel_id: e.id,
        channel_type: e.type,
        channel_size_total: e.isPrivate() ? e.recipients.length : 0,
        channel_member_perms: String(null != n ? (S.A.getChannelPermissions(e) ?? M.x3) : M.x3),
        channel_hidden: t,
    };
}
function F(e) {
    let t;
    if (null == e) return null;
    let n = o.A.getChannel(e);
    if (null == n) return null;
    let i = T.Ay.isVideoEnabled(),
        r = y.A.getMediaSessionId();
    return {
        channel_id: n.id,
        channel_type: n.type,
        guild_id: n.getGuildId(),
        media_session_id: r,
        ...H(n.getGuildId(), n.id, i),
        ...{
            game_name: null != (t = P.Ay.getCurrentGameForAnalytics()) ? t.name : null,
            game_id: null != t ? t.id : null,
        },
    };
}
function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (L.default.isThrottled(e)) return;
    let i = !("location" in t) || t.location !== f.ThZ.GUILD_CREATE_INVITE_SUGGESTION,
        r = "guild_id" in t ? t.guild_id : i ? O.A.getGuildId() : null,
        s = "channel_id" in t ? t.channel_id : i ? v.A.getChannelId(r) : null,
        a = o.A.getChannel(s),
        l = null == a ? (r ?? null) : a.isPrivate() ? null : (a.getGuildId() ?? r ?? null),
        u = {
            ...t,
            ...U(l),
            ...(null != r && null != s && (0, x.jq)(s) ? { channel_static_route: s, channel_hidden: !1 } : G(a)),
        };
    L.default.track(e, u, { flush: n });
}
function B(e) {
    var t;
    let n, i;
    if ((0, x.jq)(e)) return { channel_static_route: e };
    let r = o.A.getChannel(e);
    if (null == r) return { channel_id: e };
    let s = u.A.getGuild(r.guild_id);
    if (null == s) {
        let t = !1;
        if (r.isDM()) {
            let e = b.default.getUser(r.recipients[0]);
            null != e && (t = e.bot);
        }
        return { channel_id: e, is_app_dm: t };
    }
    let E = C.Ay.getSnapshot(e, 10 * w.A.Millis.SECOND);
    return {
        channel_id: e,
        channel_was_unread: E.unread,
        channel_mention_count: E.mentionCount,
        channel_is_muted: R.Ay.isChannelMuted(r.guild_id, r.id),
        channel_is_nsfw: r.isNSFW(),
        channel_is_spoiler: r.isSpoilerChannel(),
        channel_resolved_unread_setting: R.Ay.resolveUnreadSetting(r),
        channel_preset: (0, p.jU)(R.Ay.resolveUnreadSetting(r), R.Ay.resolvedMessageNotifications(r)),
        guild_id: r.guild_id,
        guild_was_unread: E.guildUnread,
        guild_mention_count: E.guildMentionCount,
        guild_is_muted: R.Ay.isMuted(r.guild_id),
        guild_resolved_unread_setting: R.Ay.resolveGuildUnreadSetting(s),
        guild_preset: (0, p.jU)(R.Ay.resolveGuildUnreadSetting(s), R.Ay.getMessageNotifications(r.guild_id)),
        parent_id: r.parent_id,
        parent_channel_type: r.parentChannelThreadType,
        has_pending_member_action:
            ((t = r.guild_id),
            (n = u.A.getGuild(t)),
            (i = o.A.getChannel(e)),
            null != n &&
                null != i &&
                (0, _.A)(n) &&
                n.features.has(f.GuildFeatures.GUILD_SERVER_GUIDE) &&
                !a.Lt(l.Ay.getSelfMember(n.id)?.flags ?? 0, h.D.COMPLETED_HOME_ACTIONS) &&
                c.h.hasMemberAction(n.id, i.id) &&
                !d.A.hasCompletedActionForChannel(n.id, i.id)),
        can_send_message: S.A.can(f.xBc.SEND_MESSAGES, r),
        is_app_dm: !1,
    };
}
function H(e, t, n) {
    let i = { voice_state_count: 0, video_stream_count: 0, video_enabled: n };
    return (
        r()(D.A.getVoiceStates(e))
            .filter((e) => e.channelId === t)
            .filter((e) => e.userId !== m.default.getId())
            .forEach((e) => {
                i.voice_state_count++, (e.selfVideo || e.selfStream) && i.video_stream_count++;
            }),
        i
    );
}
function j(e, t) {
    let n = { custom_status_count: 0 };
    return (
        r()(D.A.getVoiceStates(e)).forEach((e) => {
            e.channelId === t &&
                null != N.A.findActivity(e.userId, (e) => e.type === f.$pd.CUSTOM_STATUS) &&
                n.custom_status_count++;
        }),
        n
    );
}
let Y = { trackWithMetadata: V, getVoiceStateMetadata: H };
