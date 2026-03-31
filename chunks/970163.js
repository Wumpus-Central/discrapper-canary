"use strict";
n.d(t, { A: () => h });
var r = n(110259),
    i = n(933681),
    s = n(95701),
    a = n(961350),
    o = n(71393),
    l = n(954571),
    u = n(499785),
    c = n(21599),
    d = n(172799),
    _ = n(652215);
function f(e) {
    let t = null;
    if (null != e && null != e.channel) {
        let n = e.channel;
        t =
            e.target_type === d.yV.STREAM
                ? _.G2g.STREAM
                : e.target_type === d.yV.EMBEDDED_APPLICATION
                  ? _.G2g.APPLICATION
                  : (0, s.MK)(n.type)
                    ? _.G2g.GDM_INVITE
                    : null == n || (0, s.Gw)(n.type)
                      ? _.G2g.FRIEND_INVITE
                      : _.G2g.SERVER_INVITE;
    }
    return t;
}
let p = new Map();
function h(e, t, n) {
    if (
        (l.default.track(_.HAw.INVITE_OPENED, { invite_code: e, invite_instance_id: n?.inviteInstanceId ?? null }),
        p.has(e))
    )
        return p.get(e);
    let s = (0, c.y$)(e),
        d = {
            inputValue: n?.inputValue,
            with_counts: !0,
            with_expiration: !0,
            guild_scheduled_event_id: s.guildScheduledEventId,
            with_permissions: !0,
        },
        h = u.A.get({
            url: _.Rsh.INVITE(s.baseCode),
            query: d,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.INVITE_RESOLVE,
                properties: (e) => {
                    let r = e.body,
                        l = e.body?.code === _.t02.USER_BANNED;
                    return (0, i.e0)({
                        resolved: e.ok,
                        guild_id: r?.guild?.id,
                        channel_id: r?.channel?.id,
                        channel_type: r?.channel?.type,
                        inviter_id: r?.inviter?.id,
                        code: s.baseCode,
                        input_value: n?.inputValue,
                        location: t,
                        authenticated: a.default.isAuthenticated(),
                        size_total: r?.approximate_member_count,
                        size_online: r?.approximate_presence_count,
                        destination_user_id: r?.target_user?.id,
                        invite_type: f(r),
                        user_banned: l,
                        user_is_member: null != o.A.getGuild(r?.guild?.id),
                    });
                },
            },
            rejectWithError: !1,
        })
            .then(
                (r) => {
                    let i = r.body;
                    return (
                        null != t &&
                            l.default.track(
                                _.HAw.INVITE_RESOLVED,
                                {
                                    resolved: !0,
                                    guild_id: null != i.guild ? i.guild.id : null,
                                    channel_id: null != i.channel ? i.channel.id : null,
                                    channel_type: null != i.channel ? i.channel.type : null,
                                    inviter_id: i.inviter ? i.inviter.id : null,
                                    code: s.baseCode,
                                    input_value: n?.inputValue,
                                    location: t,
                                    authenticated: a.default.isAuthenticated(),
                                    size_total: i.approximate_member_count,
                                    size_online: i.approximate_presence_count,
                                    destination_user_id: null != i.target_user ? i.target_user.id : null,
                                    invite_type: f(i),
                                    user_is_member: null != o.A.getGuild(i?.guild?.id),
                                    invite_instance_id: n?.inviteInstanceId ?? null,
                                },
                                { flush: !0 },
                            ),
                        { invite: i, code: e }
                    );
                },
                (r) => {
                    let i = null != r.body && r.body.code === _.t02.USER_BANNED;
                    return (
                        null != t &&
                            l.default.track(
                                _.HAw.INVITE_RESOLVED,
                                {
                                    resolved: !1,
                                    code: s.baseCode,
                                    input_value: n?.inputValue,
                                    location: t,
                                    authenticated: a.default.isAuthenticated(),
                                    user_banned: i,
                                    error_code: r.body?.code,
                                    error_message: r.body?.message,
                                },
                                { flush: !0 },
                            ),
                        { invite: null, code: e, banned: i }
                    );
                },
            )
            .finally(() => {
                p.delete(e);
            });
    return p.set(e, h), h;
}
