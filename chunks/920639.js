"use strict";
n.d(t, { E2: () => p, EB: () => E, U8: () => g, Yv: () => f, e6: () => m, yt: () => _, zR: () => h });
var i = n(95561),
    r = n(495544),
    s = n(734057),
    a = n(763827),
    o = n(977997),
    l = n(558076),
    u = n(652215);
function d(e) {
    let { userId: t, guildId: n, channelId: i } = e;
    return {
        user_id: t ?? r.default.getId(),
        guild_id: null != n ? n : (s.A.getChannel(i)?.getGuildId() ?? void 0),
        channel_id: i,
    };
}
function c(e, t) {
    let n = a.A.getMediaSessionId();
    if (null != n)
        return void t({
            voice_state_count: Object.keys(o.A.getVoiceStatesForChannel(e)).length,
            voice_media_session_id: n,
        });
    let i = () => {
            a.A.removeChangeListener(r), clearTimeout(s);
        },
        r = () => {
            let n = a.A.getMediaSessionId();
            null != n &&
                (i(),
                t({
                    voice_state_count: Object.keys(o.A.getVoiceStatesForChannel(e)).length,
                    voice_media_session_id: n,
                }));
        },
        s = setTimeout(i, 2500);
    a.A.addChangeListener(r);
}
function _(e) {
    let { location: t, ...n } = e;
    c(n.channelId, (e) => {
        i.Ay.trackWithMetadata(u.HAw.GUILD_ROOM_LAYOUT_TOGGLED, { ...d(n), location: t, ...e });
    });
}
function h(e) {
    let { location: t, ...n } = e;
    c(n.channelId, (e) => {
        i.Ay.trackWithMetadata(u.HAw.GUILD_ROOM_OPENED, { ...d(n), location: t, ...e });
    });
}
function f(e) {
    let { seatName: t, seatPosition: n, ...r } = e;
    c(r.channelId, (e) => {
        i.Ay.trackWithMetadata(u.HAw.GUILD_ROOM_SEAT_SELECTED, {
            ...d(r),
            seat_name: t,
            seat_position: [n.x, n.y],
            ...e,
        });
    });
}
function E(e) {
    let { targetUserId: t, interactionType: n, ...r } = e;
    c(r.channelId, (e) => {
        i.Ay.trackWithMetadata(u.HAw.GUILD_ROOM_USER_INTERACTED, {
            ...d(r),
            target_user_id: t,
            interaction_type: n,
            ...e,
        });
    });
}
function p(e) {
    c(e.channelId, (t) => {
        i.Ay.trackWithMetadata(u.HAw.GUILD_ROOM_USER_CONNECTED, { ...d(e), ...t });
    });
}
function m(e) {
    i.Ay.trackWithMetadata(u.HAw.GUILD_ROOM_USER_DISCONNECTED, {
        ...d(e),
        voice_state_count: Object.keys(o.A.getVoiceStatesForChannel(e.channelId)).length,
        voice_media_session_id: l.A.getMediaSessionId(e.channelId),
    });
}
function g(e) {
    let { update: t, ...n } = e;
    c(n.channelId, (e) => {
        i.Ay.trackWithMetadata(u.HAw.GUILD_ROOM_USER_UPDATED, {
            ...d(n),
            ...(function (e) {
                let t = { update_type: e.updateType, update_reason: e.updateReason };
                switch (e.updateType) {
                    case "position":
                        return { ...t, position: [e.position.x, e.position.y] };
                    case "status_id":
                        return { ...t, status_id: e.statusId };
                    case "status_text":
                        return { ...t, status_text: e.statusText };
                }
            })(t),
            ...e,
        });
    });
}
