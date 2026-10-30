n.d(t, { A: () => f });
var i = n(562708),
    r = n(294630),
    a = n(933681),
    s = n(280450),
    l = n(71393),
    o = n(174459),
    d = n(499785),
    c = n(21599),
    u = n(346542),
    _ = n(172799),
    E = n(652215);
function A(e) {
    if (null == e) return null;
    if (e.target_type === r.y.STREAM) return E.G2g.STREAM;
    if (e.target_type === r.y.EMBEDDED_APPLICATION) return E.G2g.APPLICATION;
    let t = (0, u.On)(e);
    switch (t) {
        case _.Xd.FRIEND:
            return E.G2g.FRIEND_INVITE;
        case _.Xd.GROUP_DM:
            return E.G2g.GDM_INVITE;
        case _.Xd.GUILD:
            return E.G2g.SERVER_INVITE;
        default:
            return String(t);
    }
}
let h = new Map();
function f(e, t, n) {
    let { baseCode: r, targetChannelId: u, targetMessageId: _, guildScheduledEventId: f } = (0, c.y$)(e);
    if ((o.default.track(E.HAw.INVITE_OPENED, { invite_code: r, invite_instance_id: n?.inviteInstanceId }), h.has(e)))
        return h.get(e);
    let I = {
            inputValue: n?.inputValue,
            with_counts: !0,
            with_expiration: !0,
            guild_scheduled_event_id: f,
            target_channel_id: u,
            target_message_id: _,
            with_permissions: !0,
            with_games: !!n?.withGames || void 0,
            with_guild_experiments: !!n?.withGuildExperiments || void 0,
        },
        p = d.A.get({
            url: E.Rsh.INVITE(r),
            query: I,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.INVITE_RESOLVE,
                properties: (e) => {
                    let i = e.ok ? e.body : null,
                        o = e.body?.code === E.t02.USER_BANNED;
                    return (0, a.e0)({
                        resolved: e.ok,
                        guild_id: i?.guild?.id,
                        channel_id: i?.channel?.id,
                        channel_type: i?.channel?.type,
                        inviter_id: i?.inviter?.id,
                        code: r,
                        input_value: n?.inputValue,
                        location: t,
                        authenticated: s.default.isAuthenticated(),
                        size_total: i?.approximate_member_count,
                        size_online: i?.approximate_presence_count,
                        destination_user_id: i?.target_user?.id,
                        invite_type: A(i),
                        user_banned: o,
                        user_is_member: null != l.A.getGuild(i?.guild?.id),
                    });
                },
            },
            rejectWithError: !1,
        })
            .then(
                (i) => {
                    let a = i.body;
                    return (
                        null != t &&
                            o.default.track(
                                E.HAw.INVITE_RESOLVED,
                                {
                                    resolved: !0,
                                    guild_id: null != a.guild ? a.guild.id : null,
                                    channel_id: null != a.channel ? a.channel.id : null,
                                    channel_type: null != a.channel ? a.channel.type : null,
                                    inviter_id: a.inviter ? a.inviter.id : null,
                                    code: r,
                                    input_value: n?.inputValue,
                                    location: t,
                                    authenticated: s.default.isAuthenticated(),
                                    size_total: a.approximate_member_count,
                                    size_online: a.approximate_presence_count,
                                    destination_user_id: null != a.target_user ? a.target_user.id : null,
                                    invite_type: A(a),
                                    user_is_member: null != l.A.getGuild(a?.guild?.id),
                                    invite_instance_id: n?.inviteInstanceId ?? null,
                                },
                                { flush: !0 },
                            ),
                        { invite: a, code: e }
                    );
                },
                (i) => {
                    let a = null != i.body && i.body.code === E.t02.USER_BANNED;
                    return (
                        null != t &&
                            o.default.track(
                                E.HAw.INVITE_RESOLVED,
                                {
                                    resolved: !1,
                                    code: r,
                                    input_value: n?.inputValue,
                                    location: t,
                                    authenticated: s.default.isAuthenticated(),
                                    user_banned: a,
                                    error_code: i.body?.code,
                                    error_message: i.body?.message,
                                },
                                { flush: !0 },
                            ),
                        { invite: null, code: e, banned: a }
                    );
                },
            )
            .finally(() => {
                h.delete(e);
            });
    return (h.set(e, p), p);
}
