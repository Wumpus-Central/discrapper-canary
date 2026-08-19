"use strict";
n.d(t, { A: () => a });
var i = n(174459),
    r = n(652215);
function a(e) {
    let {
        type: t,
        source: n,
        userId: a,
        guildId: s,
        channelId: l,
        channelType: o,
        applicationId: d,
        partyId: c,
        messageId: u,
        locationObject: _,
        analyticsLocations: E,
        referrerId: A,
        inviterUserId: h,
        remoteJoinPlatform: I,
    } = e;
    i.default.track(r.HAw.APPLICATION_OPENED, {
        type: t,
        source: n,
        guild_id: s,
        channel_id: l,
        channel_type: o,
        application_id: d,
        party_id: c ?? void 0,
        other_user_id: a,
        message_id: u,
        location: _,
        location_stack: E,
        referrer_id: A,
        invite_inviter_id: h,
        remote_join_platform: I,
    });
}
