"use strict";
n.d(t, { A: () => a });
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
        applicationId: u,
        partyId: c,
        messageId: d,
        locationObject: _,
        analyticsLocations: f,
        referrerId: p,
        inviterUserId: h,
        remoteJoinPlatform: m,
    } = e;
    r.default.track(i.HAw.APPLICATION_OPENED, {
        type: t,
        source: n,
        guild_id: s,
        channel_id: o,
        channel_type: l,
        application_id: u,
        party_id: c ?? void 0,
        other_user_id: a,
        message_id: d,
        location: _,
        location_stack: f,
        referrer_id: p,
        invite_inviter_id: h,
        remote_join_platform: m,
    });
}
