n.d(t, { Z: () => p }), n(47120), n(773603);
var r = n(192379),
    i = n(442837),
    a = n(693546),
    l = n(826581),
    o = n(937111),
    s = n(430824),
    c = n(496675),
    u = n(709054),
    d = n(981631);
function p(e) {
    let [t, n] = r.useState(!1),
        [p, m] = r.useState(!1),
        f = u.default.cast(e),
        { joinRequest: h, guild: g } = (0, i.cj)([l.Z, o.Z, s.Z, c.Z], () => {
            var e;
            let t = l.Z.getRequest(f);
            if (null == t)
                return {
                    joinRequest: null,
                    isModmin: !1,
                    guild: null
                };
            let n = null != (e = s.Z.getGuild(t.guildId)) ? e : o.Z.getJoinRequestGuild(t.guildId);
            return {
                joinRequest: t,
                isModmin: null != n && c.Z.can(d.Plq.KICK_MEMBERS, n),
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
