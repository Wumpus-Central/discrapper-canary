"use strict";
n.d(t, { A: () => l });
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
            channelId: u,
            currentUser: c,
            isEmbedded: d,
            ChannelStore: _,
            GuildStore: f,
            GuildMemberCountStore: p,
            RelationshipStore: h,
            SelectedChannelStore: m,
            VoiceStateStore: g,
            PermissionStore: E,
        } = e,
        A = (0, i.A)();
    if (null == t) return !1;
    if (d && null != u)
        return (
            (0, a.Ay)({
                userId: t.id,
                activity: n,
                channelId: u,
                currentUser: c,
                application: l,
                isActivitiesEnabledForCurrentPlatform: A,
                ChannelStore: _,
                VoiceStateStore: g,
                PermissionStore: E,
                GuildStore: f,
            }) === a.Gy.CAN_JOIN
        );
    if ((d && null == u && !(0, s.A)(n, o.jUm.CONTEXTLESS)) || (!(0, r.platformSupportsActivityJoin)() && !d))
        return !1;
    if ((0, s.A)(n, o.jUm.PARTY_PRIVACY_FRIENDS) && h.isFriend(t.id)) return !0;
    if ((0, s.A)(n, o.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = _.getChannel(m.getVoiceChannelId());
        if (null == e || !g.isInChannel(e.id, t.id)) return !1;
        switch (e.type) {
            case o.rbe.DM:
            case o.rbe.GROUP_DM:
                return !0;
        }
        let n = f.getGuild(e.getGuildId());
        if (null == n || n.features.has(o.GuildFeatures.COMMUNITY)) return !1;
        let r = p.getMemberCount(n.id);
        return null != r && r < 100;
    }
    return !1;
}
