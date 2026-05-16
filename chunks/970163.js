"use strict";
n.d(t, { A: () => p });
var i = n(562708),
    r = n(933681),
    s = n(495544),
    a = n(71393),
    o = n(174459),
    l = n(499785),
    u = n(842241),
    c = n(346542),
    d = n(172799),
    _ = n(652215);
function f(e) {
    if (null == e) return null;
    if (e.target_type === d.yV.STREAM) return _.G2g.STREAM;
    if (e.target_type === d.yV.EMBEDDED_APPLICATION) return _.G2g.APPLICATION;
    let t = (0, c.On)(e);
    switch (t) {
        case d.Xd.FRIEND:
            return _.G2g.FRIEND_INVITE;
        case d.Xd.GROUP_DM:
            return _.G2g.GDM_INVITE;
        case d.Xd.GUILD:
            return _.G2g.SERVER_INVITE;
        default:
            return String(t);
    }
}
let h = new Map();
function p(e, t, n) {
    if (
        (o.default.track(_.HAw.INVITE_OPENED, { invite_code: e, invite_instance_id: n?.inviteInstanceId ?? null }),
        h.has(e))
    )
        return h.get(e);
    let c = (0, u.y$)(e),
        d = {
            inputValue: n?.inputValue,
            with_counts: !0,
            with_expiration: !0,
            guild_scheduled_event_id: c.guildScheduledEventId,
            with_permissions: !0,
            with_games: !!n?.withGames || void 0,
        },
        p = l.A.get({
            url: _.Rsh.INVITE(c.baseCode),
            query: d,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.INVITE_RESOLVE,
                properties: (e) => {
                    let i = e.ok ? e.body : null,
                        o = e.body?.code === _.t02.USER_BANNED;
                    return (0, r.e0)({
                        resolved: e.ok,
                        guild_id: i?.guild?.id,
                        channel_id: i?.channel?.id,
                        channel_type: i?.channel?.type,
                        inviter_id: i?.inviter?.id,
                        code: c.baseCode,
                        input_value: n?.inputValue,
                        location: t,
                        authenticated: s.default.isAuthenticated(),
                        size_total: i?.approximate_member_count,
                        size_online: i?.approximate_presence_count,
                        destination_user_id: i?.target_user?.id,
                        invite_type: f(i),
                        user_banned: o,
                        user_is_member: null != a.A.getGuild(i?.guild?.id),
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
                            o.default.track(
                                _.HAw.INVITE_RESOLVED,
                                {
                                    resolved: !0,
                                    guild_id: null != r.guild ? r.guild.id : null,
                                    channel_id: null != r.channel ? r.channel.id : null,
                                    channel_type: null != r.channel ? r.channel.type : null,
                                    inviter_id: r.inviter ? r.inviter.id : null,
                                    code: c.baseCode,
                                    input_value: n?.inputValue,
                                    location: t,
                                    authenticated: s.default.isAuthenticated(),
                                    size_total: r.approximate_member_count,
                                    size_online: r.approximate_presence_count,
                                    destination_user_id: null != r.target_user ? r.target_user.id : null,
                                    invite_type: f(r),
                                    user_is_member: null != a.A.getGuild(r?.guild?.id),
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
                            o.default.track(
                                _.HAw.INVITE_RESOLVED,
                                {
                                    resolved: !1,
                                    code: c.baseCode,
                                    input_value: n?.inputValue,
                                    location: t,
                                    authenticated: s.default.isAuthenticated(),
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
                h.delete(e);
            });
    return h.set(e, p), p;
}
