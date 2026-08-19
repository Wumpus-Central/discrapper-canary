"use strict";
n.d(t, { A: () => h });
var i = n(562708),
    r = n(933681),
    a = n(280450),
    s = n(71393),
    l = n(174459),
    o = n(499785),
    d = n(842241),
    c = n(346542),
    u = n(172799),
    _ = n(652215);
function E(e) {
    if (null == e) return null;
    if (e.target_type === u.yV.STREAM) return _.G2g.STREAM;
    if (e.target_type === u.yV.EMBEDDED_APPLICATION) return _.G2g.APPLICATION;
    let t = (0, c.On)(e);
    switch (t) {
        case u.Xd.FRIEND:
            return _.G2g.FRIEND_INVITE;
        case u.Xd.GROUP_DM:
            return _.G2g.GDM_INVITE;
        case u.Xd.GUILD:
            return _.G2g.SERVER_INVITE;
        default:
            return String(t);
    }
}
let A = new Map();
function h(e, t, n) {
    let { baseCode: c, targetChannelId: u, targetMessageId: h, guildScheduledEventId: I } = (0, d.y$)(e);
    if ((l.default.track(_.HAw.INVITE_OPENED, { invite_code: c, invite_instance_id: n?.inviteInstanceId }), A.has(e)))
        return A.get(e);
    let f = {
            inputValue: n?.inputValue,
            with_counts: !0,
            with_expiration: !0,
            guild_scheduled_event_id: I,
            target_channel_id: u,
            target_message_id: h,
            with_permissions: !0,
            with_games: !!n?.withGames || void 0,
        },
        p = o.A.get({
            url: _.Rsh.INVITE(c),
            query: f,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.INVITE_RESOLVE,
                properties: (e) => {
                    let i = e.ok ? e.body : null,
                        l = e.body?.code === _.t02.USER_BANNED;
                    return (0, r.e0)({
                        resolved: e.ok,
                        guild_id: i?.guild?.id,
                        channel_id: i?.channel?.id,
                        channel_type: i?.channel?.type,
                        inviter_id: i?.inviter?.id,
                        code: c,
                        input_value: n?.inputValue,
                        location: t,
                        authenticated: a.default.isAuthenticated(),
                        size_total: i?.approximate_member_count,
                        size_online: i?.approximate_presence_count,
                        destination_user_id: i?.target_user?.id,
                        invite_type: E(i),
                        user_banned: l,
                        user_is_member: null != s.A.getGuild(i?.guild?.id),
                    });
                },
            },
            rejectWithError: !1,
        })
            .then(
                (i) => {
                    let r = i.body;
                    return (
                        null != t &&
                            l.default.track(
                                _.HAw.INVITE_RESOLVED,
                                {
                                    resolved: !0,
                                    guild_id: null != r.guild ? r.guild.id : null,
                                    channel_id: null != r.channel ? r.channel.id : null,
                                    channel_type: null != r.channel ? r.channel.type : null,
                                    inviter_id: r.inviter ? r.inviter.id : null,
                                    code: c,
                                    input_value: n?.inputValue,
                                    location: t,
                                    authenticated: a.default.isAuthenticated(),
                                    size_total: r.approximate_member_count,
                                    size_online: r.approximate_presence_count,
                                    destination_user_id: null != r.target_user ? r.target_user.id : null,
                                    invite_type: E(r),
                                    user_is_member: null != s.A.getGuild(r?.guild?.id),
                                    invite_instance_id: n?.inviteInstanceId ?? null,
                                },
                                { flush: !0 },
                            ),
                        { invite: r, code: e }
                    );
                },
                (i) => {
                    let r = null != i.body && i.body.code === _.t02.USER_BANNED;
                    return (
                        null != t &&
                            l.default.track(
                                _.HAw.INVITE_RESOLVED,
                                {
                                    resolved: !1,
                                    code: c,
                                    input_value: n?.inputValue,
                                    location: t,
                                    authenticated: a.default.isAuthenticated(),
                                    user_banned: r,
                                    error_code: i.body?.code,
                                    error_message: i.body?.message,
                                },
                                { flush: !0 },
                            ),
                        { invite: null, code: e, banned: r }
                    );
                },
            )
            .finally(() => {
                A.delete(e);
            });
    return A.set(e, p), p;
}
