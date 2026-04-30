"use strict";
n.d(t, { A: () => s });
var i = n(174459),
    r = n(652215);
function s(e) {
    let {
        type: t,
        source: n,
        userId: s,
        guildId: a,
        channelId: o,
        channelType: l,
        applicationId: u,
        partyId: c,
        messageId: d,
        locationObject: _,
        analyticsLocations: f,
        referrerId: h,
        inviterUserId: p,
        remoteJoinPlatform: E,
    } = e;
    i.default.track(r.HAw.APPLICATION_OPENED, {
        type: t,
        source: n,
        guild_id: a,
        channel_id: o,
        channel_type: l,
        application_id: u,
        party_id: c ?? void 0,
        other_user_id: s,
        message_id: d,
        location: _,
        location_stack: f,
        referrer_id: h,
        invite_inviter_id: p,
        remote_join_platform: E,
    });
}
