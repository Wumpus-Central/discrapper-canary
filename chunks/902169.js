n.d(t, {
    A: () => l,
});
var r = n(723702),
    i = n(170148),
    a = n(550151),
    s = n(833349),
    o = n(652215);

function l(e) {
    let {
            user: t,
            activity: n,
            application: l,
            channelId: c,
            currentUser: u,
            isEmbedded: d,
            ChannelStore: f,
            GuildStore: p,
            GuildMemberCountStore: _,
            RelationshipStore: h,
            SelectedChannelStore: m,
            VoiceStateStore: g,
            PermissionStore: E,
        } = e,
        b = (0, i.A)();
    if (null == t) return !1;
    if (d && null != c)
        return (
            (0, a.Ay)({
                userId: t.id,
                activity: n,
                channelId: c,
                currentUser: u,
                application: l,
                isActivitiesEnabledForCurrentPlatform: b,
                ChannelStore: f,
                VoiceStateStore: g,
                PermissionStore: E,
                GuildStore: p,
            }) === a.Gy.CAN_JOIN
        );
    if ((d && null == c && !(0, s.A)(n, o.jUm.CONTEXTLESS)) || (!(0, r.platformSupportsActivityJoin)() && !d))
        return !1;
    if ((0, s.A)(n, o.jUm.PARTY_PRIVACY_FRIENDS) && h.isFriend(t.id)) return !0;
    if ((0, s.A)(n, o.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = f.getChannel(m.getVoiceChannelId());
        if (null == e || !g.isInChannel(e.id, t.id)) return !1;
        switch (e.type) {
            case o.rbe.DM:
            case o.rbe.GROUP_DM:
                return !0;
        }
        let n = p.getGuild(e.getGuildId());
        if (null == n || n.features.has(o.GuildFeatures.COMMUNITY)) return !1;
        let r = _.getMemberCount(n.id);
        return null != r && r < 100;
    }
    return !1;
}
