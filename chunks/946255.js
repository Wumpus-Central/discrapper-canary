n.d(t, { A: () => a });
var i = n(954571),
    r = n(652215);
function a(e) {
    let {
        type: t,
        source: n,
        userId: a,
        guildId: s,
        channelId: _,
        channelType: l,
        applicationId: o,
        partyId: E,
        messageId: d,
        locationObject: c,
        analyticsLocations: u,
        referrerId: I,
        inviterUserId: A,
        remoteJoinPlatform: T,
    } = e;
    i.default.track(r.HAw.APPLICATION_OPENED, {
        type: t,
        source: n,
        guild_id: s,
        channel_id: _,
        channel_type: l,
        application_id: o,
        party_id: E ?? void 0,
        other_user_id: a,
        message_id: d,
        location: c,
        location_stack: u,
        referrer_id: I,
        invite_inviter_id: A,
        remote_join_platform: T,
    });
}
