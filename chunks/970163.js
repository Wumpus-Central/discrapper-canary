"use strict";
n.d(t, { A: () => m });
var i = n(110259),
    r = n(933681),
    s = n(95701),
    a = n(495544),
    o = n(71393),
    l = n(954571),
    _ = n(499785),
    d = n(21599),
    u = n(172799),
    c = n(652215);
function E(e) {
    let t = null;
    if (null != e && null != e.channel) {
        let n = e.channel;
        t =
            e.target_type === u.yV.STREAM
                ? c.G2g.STREAM
                : e.target_type === u.yV.EMBEDDED_APPLICATION
                  ? c.G2g.APPLICATION
                  : (0, s.MK)(n.type)
                    ? c.G2g.GDM_INVITE
                    : null == n || (0, s.Gw)(n.type)
                      ? c.G2g.FRIEND_INVITE
                      : c.G2g.SERVER_INVITE;
    }
    return t;
}
let h = new Map();
function m(e, t, n) {
    if (
        (l.default.track(c.HAw.INVITE_OPENED, { invite_code: e, invite_instance_id: n?.inviteInstanceId ?? null }),
        h.has(e))
    )
        return h.get(e);
    let s = (0, d.y$)(e),
        u = {
            inputValue: n?.inputValue,
            with_counts: !0,
            with_expiration: !0,
            guild_scheduled_event_id: s.guildScheduledEventId,
            with_permissions: !0,
        },
        m = _.A.get({
            url: c.Rsh.INVITE(s.baseCode),
            query: u,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.INVITE_RESOLVE,
                properties: (e) => {
                    let i = e.body,
                        l = e.body?.code === c.t02.USER_BANNED;
                    return (0, r.e0)({
                        resolved: e.ok,
                        guild_id: i?.guild?.id,
                        channel_id: i?.channel?.id,
                        channel_type: i?.channel?.type,
                        inviter_id: i?.inviter?.id,
                        code: s.baseCode,
                        input_value: n?.inputValue,
                        location: t,
                        authenticated: a.default.isAuthenticated(),
                        size_total: i?.approximate_member_count,
                        size_online: i?.approximate_presence_count,
                        destination_user_id: i?.target_user?.id,
                        invite_type: E(i),
                        user_banned: l,
                        user_is_member: null != o.A.getGuild(i?.guild?.id),
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
                                c.HAw.INVITE_RESOLVED,
                                {
                                    resolved: !0,
                                    guild_id: null != r.guild ? r.guild.id : null,
                                    channel_id: null != r.channel ? r.channel.id : null,
                                    channel_type: null != r.channel ? r.channel.type : null,
                                    inviter_id: r.inviter ? r.inviter.id : null,
                                    code: s.baseCode,
                                    input_value: n?.inputValue,
                                    location: t,
                                    authenticated: a.default.isAuthenticated(),
                                    size_total: r.approximate_member_count,
                                    size_online: r.approximate_presence_count,
                                    destination_user_id: null != r.target_user ? r.target_user.id : null,
                                    invite_type: E(r),
                                    user_is_member: null != o.A.getGuild(r?.guild?.id),
                                    invite_instance_id: n?.inviteInstanceId ?? null,
                                },
                                { flush: !0 },
                            ),
                        { invite: r, code: e }
                    );
                },
                (i) => {
                    let r = null != i.body && i.body.code === c.t02.USER_BANNED;
                    return (
                        null != t &&
                            l.default.track(
                                c.HAw.INVITE_RESOLVED,
                                {
                                    resolved: !1,
                                    code: s.baseCode,
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
                h.delete(e);
            });
    return h.set(e, m), m;
}
