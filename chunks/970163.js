n.d(t, {
    A: () => b,
}),
    n(896048),
    n(492834);
var r = n(110259),
    i = n(933681),
    a = n(95701),
    s = n(961350),
    o = n(71393),
    l = n(954571),
    c = n(499785),
    u = n(21599),
    d = n(172799),
    f = n(652215);

function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}

function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function g(e) {
    let t = null;
    if (null != e && null != e.channel) {
        let n = e.channel;
        t =
            e.target_type === d.yV.STREAM
                ? f.G2g.STREAM
                : e.target_type === d.yV.EMBEDDED_APPLICATION
                  ? f.G2g.APPLICATION
                  : (0, a.MK)(n.type)
                    ? f.G2g.GDM_INVITE
                    : null == n || (0, a.Gw)(n.type)
                      ? f.G2g.FRIEND_INVITE
                      : f.G2g.SERVER_INVITE;
    }
    return t;
}
let E = new Map();

function b(e, t, n) {
    if (
        (l.default.track(f.HAw.INVITE_OPENED, {
            invite_code: e,
        }),
        E.has(e))
    )
        return E.get(e);
    let a = (0, u.y$)(e),
        d = m(_({}, n), {
            with_counts: !0,
            with_expiration: !0,
            guild_scheduled_event_id: a.guildScheduledEventId,
            with_permissions: !0,
        }),
        p = c.A.get({
            url: f.Rsh.INVITE(a.baseCode),
            query: d,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.INVITE_RESOLVE,
                properties: (e) => {
                    var r, l, c, u, d, p, _;
                    let h = e.body,
                        m = (null == (r = e.body) ? void 0 : r.code) === f.t02.USER_BANNED;
                    return (0, i.e0)({
                        resolved: e.ok,
                        guild_id: null == h || null == (l = h.guild) ? void 0 : l.id,
                        channel_id: null == h || null == (c = h.channel) ? void 0 : c.id,
                        channel_type: null == h || null == (u = h.channel) ? void 0 : u.type,
                        inviter_id: null == h || null == (d = h.inviter) ? void 0 : d.id,
                        code: a.baseCode,
                        input_value: null == n ? void 0 : n.inputValue,
                        location: t,
                        authenticated: s.default.isAuthenticated(),
                        size_total: null == h ? void 0 : h.approximate_member_count,
                        size_online: null == h ? void 0 : h.approximate_presence_count,
                        destination_user_id: null == h || null == (p = h.target_user) ? void 0 : p.id,
                        invite_type: g(h),
                        user_banned: m,
                        user_is_member: null != o.A.getGuild(null == h || null == (_ = h.guild) ? void 0 : _.id),
                    });
                },
            },
            rejectWithError: !1,
        })
            .then(
                (r) => {
                    let i = r.body;
                    if (null != t) {
                        var c;
                        l.default.track(
                            f.HAw.INVITE_RESOLVED,
                            {
                                resolved: !0,
                                guild_id: null != i.guild ? i.guild.id : null,
                                channel_id: null != i.channel ? i.channel.id : null,
                                channel_type: null != i.channel ? i.channel.type : null,
                                inviter_id: i.inviter ? i.inviter.id : null,
                                code: a.baseCode,
                                input_value: null == n ? void 0 : n.inputValue,
                                location: t,
                                authenticated: s.default.isAuthenticated(),
                                size_total: i.approximate_member_count,
                                size_online: i.approximate_presence_count,
                                destination_user_id: null != i.target_user ? i.target_user.id : null,
                                invite_type: g(i),
                                user_is_member:
                                    null != o.A.getGuild(null == i || null == (c = i.guild) ? void 0 : c.id),
                            },
                            {
                                flush: !0,
                            },
                        );
                    }
                    return {
                        invite: i,
                        code: e,
                    };
                },
                (r) => {
                    let i = null != r.body && r.body.code === f.t02.USER_BANNED;
                    if (null != t) {
                        var o, c;
                        l.default.track(
                            f.HAw.INVITE_RESOLVED,
                            {
                                resolved: !1,
                                code: a.baseCode,
                                input_value: null == n ? void 0 : n.inputValue,
                                location: t,
                                authenticated: s.default.isAuthenticated(),
                                user_banned: i,
                                error_code: null == (o = r.body) ? void 0 : o.code,
                                error_message: null == (c = r.body) ? void 0 : c.message,
                            },
                            {
                                flush: !0,
                            },
                        );
                    }
                    return {
                        invite: null,
                        code: e,
                        banned: i,
                    };
                },
            )
            .finally(() => {
                E.delete(e);
            });
    return E.set(e, p), p;
}
