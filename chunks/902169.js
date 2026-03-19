"use strict";
n.d(t, { A: () => _ });
var r = n(723702),
    i = n(170148),
    s = n(550151),
    a = n(206589),
    o = n(125017),
    l = n(833349),
    u = n(287613),
    c = n(702631),
    d = n(652215);
function _(e) {
    let {
            user: t,
            activity: n,
            application: _,
            channelId: f,
            currentUser: p,
            isEmbedded: h,
            ChannelStore: m,
            GuildStore: E,
            GuildMemberCountStore: g,
            RelationshipStore: A,
            SelectedChannelStore: I,
            VoiceStateStore: T,
            PermissionStore: S,
            LocalActivityStore: y,
            SelfPresenceStore: v,
        } = e,
        N = (0, i.A)();
    if (null == t) return !1;
    if (h && null != f)
        return (
            (0, s.Ay)({
                userId: t.id,
                activity: n,
                channelId: f,
                currentUser: p,
                application: _,
                isActivitiesEnabledForCurrentPlatform: N,
                ChannelStore: m,
                VoiceStateStore: T,
                PermissionStore: S,
                GuildStore: E,
            }) === s.Gy.CAN_JOIN
        );
    if ((h && null == f && !(0, l.A)(n, d.jUm.CONTEXTLESS)) || (!(0, r.platformSupportsActivityJoin)() && !h))
        return !1;
    let C = (0, o._)(n);
    if (!(0, u.A)(C) || (0, c.U)(C)) return !1;
    let R = y.getApplicationActivity(n?.application_id ?? "") ?? v.getApplicationActivity(n?.application_id ?? "", !0);
    if ((0, a.w)(R, n)) return !1;
    if ((0, l.A)(n, d.jUm.PARTY_PRIVACY_FRIENDS) && A.isFriend(t.id)) return !0;
    if ((0, l.A)(n, d.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = m.getChannel(I.getVoiceChannelId());
        if (null == e || !T.isInChannel(e.id, t.id)) return !1;
        switch (e.type) {
            case d.rbe.DM:
            case d.rbe.GROUP_DM:
                return !0;
        }
        let n = E.getGuild(e.getGuildId());
        if (null == n || n.features.has(d.GuildFeatures.COMMUNITY)) return !1;
        let r = g.getMemberCount(n.id);
        return null != r && r < 100;
    }
    return !1;
}
