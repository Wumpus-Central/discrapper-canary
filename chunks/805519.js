n.d(t, { Z: () => m }), n(47120), n(773603);
var i = n(192379),
    l = n(442837),
    a = n(693546),
    r = n(826581),
    s = n(937111),
    o = n(430824),
    c = n(496675),
    d = n(709054),
    u = n(981631);
function m(e) {
    let [t, n] = i.useState(!1),
        [m, h] = i.useState(!1),
        _ = d.default.cast(e),
        { joinRequest: p, guild: g } = (0, l.cj)([r.Z, s.Z, o.Z, c.Z], () => {
            var e;
            let t = r.Z.getRequest(_);
            if (null == t)
                return {
                    joinRequest: null,
                    isModmin: !1,
                    guild: null
                };
            let n = null !== (e = o.Z.getGuild(t.guildId)) && void 0 !== e ? e : s.Z.getJoinRequestGuild(t.guildId);
            return {
                joinRequest: t,
                isModmin: null != n && c.Z.can(u.Plq.KICK_MEMBERS, n),
                guild: n
            };
        });
    return (
        i.useEffect(() => {
            null != g || m || (h(!0), a.Z.fetchRequestToJoinGuilds());
        }, [g, m]),
        i.useEffect(() => {
            null == p &&
                (n(!0),
                a.Z.fetchGuildJoinRequest(_).finally(() => {
                    n(!1);
                }));
        }, [p, _]),
        {
            loading: t,
            joinRequest: p,
            joinRequestGuild: g
        }
    );
}
