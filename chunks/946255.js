n.d(t, { A: () => r });
var i = n(954571),
    a = n(652215);
function r(e) {
    let {
        type: t,
        source: n,
        userId: r,
        guildId: s,
        channelId: l,
        channelType: o,
        applicationId: d,
        partyId: c,
        messageId: _,
        locationObject: E,
        analyticsLocations: u,
        referrerId: A,
        inviterUserId: I,
        remoteJoinPlatform: T,
    } = e;
    i.default.track(a.HAw.APPLICATION_OPENED, {
        type: t,
        source: n,
        guild_id: s,
        channel_id: l,
        channel_type: o,
        application_id: d,
        party_id: c ?? void 0,
        other_user_id: r,
        message_id: _,
        location: E,
        location_stack: u,
        referrer_id: A,
        invite_inviter_id: I,
        remote_join_platform: T,
    });
}
