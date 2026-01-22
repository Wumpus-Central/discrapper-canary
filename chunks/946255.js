n.d(t, {
    A: () => a,
});
var r = n(954571),
    i = n(652215);

function a(e) {
    let {
        type: t,
        source: n,
        userId: a,
        guildId: s,
        channelId: o,
        channelType: l,
        applicationId: c,
        partyId: u,
        messageId: d,
        locationObject: f,
        analyticsLocations: p,
        referrerId: _,
        inviterUserId: h,
        remoteJoinPlatform: m,
    } = e;
    r.default.track(i.HAw.APPLICATION_OPENED, {
        type: t,
        source: n,
        guild_id: s,
        channel_id: o,
        channel_type: l,
        application_id: c,
        party_id: null != u ? u : void 0,
        other_user_id: a,
        message_id: d,
        location: f,
        location_stack: p,
        referrer_id: _,
        invite_inviter_id: h,
        remote_join_platform: m,
    });
}
