n.d(t, { Z: () => p }), n(47120), n(773603);
var r = n(192379),
    i = n(442837),
    a = n(693546),
    o = n(826581),
    l = n(937111),
    s = n(430824),
    c = n(496675),
    d = n(709054),
    u = n(981631);
function p(e) {
    let [t, n] = r.useState(!1),
        [p, m] = r.useState(!1),
        f = d.default.cast(e),
        { joinRequest: h, guild: g } = (0, i.cj)([o.Z, l.Z, s.Z, c.Z], () => {
            var e;
            let t = o.Z.getRequest(f);
            if (null == t)
                return {
                    joinRequest: null,
                    isModmin: !1,
                    guild: null
                };
            let n = null !== (e = s.Z.getGuild(t.guildId)) && void 0 !== e ? e : l.Z.getJoinRequestGuild(t.guildId);
            return {
                joinRequest: t,
                isModmin: null != n && c.Z.can(u.Plq.KICK_MEMBERS, n),
                guild: n
            };
        });
    return (
        r.useEffect(() => {
            null != g || p || (m(!0), a.Z.fetchRequestToJoinGuilds());
        }, [g, p]),
        r.useEffect(() => {
            null == h &&
                (n(!0),
                a.Z.fetchGuildJoinRequest(f).finally(() => {
                    n(!1);
                }));
        }, [h, f]),
        {
            loading: t,
            joinRequest: h,
            joinRequestGuild: g
        }
    );
}
