n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120),
    n(773603);
var i = n(192379),
    r = n(442837),
    l = n(693546),
    a = n(826581),
    o = n(937111),
    s = n(430824),
    c = n(496675),
    d = n(709054),
    u = n(981631);
function m(e) {
    let [t, n] = i.useState(!1),
        [m, h] = i.useState(!1),
        f = d.default.cast(e),
        { joinRequest: p, guild: _ } = (0, r.cj)([a.Z, o.Z, s.Z, c.Z], () => {
            var e;
            let t = a.Z.getRequest(f);
            if (null == t)
                return {
                    joinRequest: null,
                    isModmin: !1,
                    guild: null
                };
            let n = null !== (e = s.Z.getGuild(t.guildId)) && void 0 !== e ? e : o.Z.getJoinRequestGuild(t.guildId);
            return {
                joinRequest: t,
                isModmin: null != n && c.Z.can(u.Plq.KICK_MEMBERS, n),
                guild: n
            };
        });
    return (
        i.useEffect(() => {
            null == _ && !m && (h(!0), l.Z.fetchRequestToJoinGuilds());
        }, [_, m]),
        i.useEffect(() => {
            null == p &&
                (n(!0),
                l.Z.fetchGuildJoinRequest(f).finally(() => {
                    n(!1);
                }));
        }, [p, f]),
        {
            loading: t,
            joinRequest: p,
            joinRequestGuild: _
        }
    );
}
