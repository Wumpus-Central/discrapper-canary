var n = l(73153),
    i = l(149468),
    s = l(46653),
    a = l(696451),
    C = l(287809),
    r = l(129230),
    d = l(504049),
    o = l(414849),
    c = l(587426),
    u = l(652215);
function m(e, t, l) {
    r.default.track(u.HAw.BULK_MODERATION_ACTION_STARTED, {
        ...(0, i.H$)(e),
        action_type: t,
        target_user_ids: l,
        mod_user_id: s.default.getId(),
        location: "MemberSafetyPageActionNotice",
    });
}
function h(e, t, l, n) {
    r.default.track(u.HAw.BULK_MODERATION_ACTION_COMPLETED, {
        ...(0, i.H$)(e),
        action_type: t,
        target_user_ids: l,
        mod_user_id: s.default.getId(),
        successful_user_ids: [...n.applied_user_ids, ...n.unchanged_user_ids],
        location: "MemberSafetyPageActionNotice",
    });
}
l.d(
    t,
    {},
    {
        A: async function (e, t, l) {
            m(e, d.Nj.KICK, t);
            let i = await (0, o.D)(u.Rsh.BULK_GUILD_KICK(e), { user_ids: t }, l),
                { removeUser: s } = c.E.getState();
            for (let t of i.applied_user_ids)
                (n.h.dispatch({ type: "GUILD_MEMBER_REMOVE_LOCAL", guildId: e, userId: t }), s(e, t));
            return (h(e, d.Nj.KICK, t, i), i);
        },
        f: async function (e, t, l, i) {
            null != l && m(e, d.Nj.TIMEOUT, t);
            let s = await (0, o.D)(u.Rsh.BULK_GUILD_TIMEOUT(e), { user_ids: t, communication_disabled_until: l }, i);
            for (let t of s.applied_user_ids)
                !(function (e, t, l) {
                    let i = a.Ay.getMember(e, t),
                        s = C.default.getUser(t);
                    null != i &&
                        null != s &&
                        n.h.dispatch({
                            type: "GUILD_MEMBER_UPDATE",
                            ...i,
                            guildId: e,
                            nick: i.nick,
                            avatar: i.avatar ?? void 0,
                            avatarDecoration: null != i.avatarDecoration ? { ...i.avatarDecoration } : void 0,
                            premiumSince: i.premiumSince ?? void 0,
                            isPending: i.isPending ?? !1,
                            user: { ...s, email: s.email ?? void 0, phone: s.phone ?? void 0 },
                            communicationDisabledUntil: l,
                        });
                })(e, t, l);
            return (
                n.h.dispatch({
                    type: "MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH",
                    guildId: e,
                    userIds: s.applied_user_ids,
                }),
                null != l && h(e, d.Nj.TIMEOUT, t, s),
                s
            );
        },
    },
);
