"use strict";
n.d(t, {
    E2: () => p,
    EB: () => f,
    Ql: () => _,
    U8: () => m,
    Yv: () => I,
    e6: () => T,
    n0: () => E,
    yt: () => A,
    zR: () => h,
});
var i = n(95561),
    r = n(280450),
    a = n(734057),
    s = n(763827),
    l = n(977997),
    o = n(558076),
    d = n(652215);
function c(e) {
    let { userId: t, guildId: n, channelId: i } = e,
        s = t ?? r.default.getId(),
        l = o.A.getRoomUsers(i);
    return {
        user_id: s,
        guild_id: null != n ? n : (a.A.getChannel(i)?.getGuildId() ?? void 0),
        channel_id: i,
        guild_room_user_count: l.size,
        guild_room_user_connected: l.has(s),
    };
}
function u(e, t) {
    let n = s.A.getMediaSessionId();
    if (null != n)
        return void t({
            voice_state_count: Object.keys(l.A.getVoiceStatesForChannel(e)).length,
            voice_media_session_id: n,
        });
    let i = () => {
            s.A.removeChangeListener(r), clearTimeout(a);
        },
        r = () => {
            let n = s.A.getMediaSessionId();
            null != n &&
                (i(),
                t({
                    voice_state_count: Object.keys(l.A.getVoiceStatesForChannel(e)).length,
                    voice_media_session_id: n,
                }));
        },
        a = setTimeout(() => {
            i(), t({ voice_state_count: Object.keys(l.A.getVoiceStatesForChannel(e)).length });
        }, 2500);
    s.A.addChangeListener(r);
}
function _(e) {
    let { interactionType: t, ...n } = e;
    u(n.channelId, (e) => {
        i.Ay.trackWithMetadata(d.HAw.GUILD_ROOM_OBJECT_INTERACTED, { ...c(n), interaction_type: t, ...e });
    });
}
function E(e) {
    let { interactionType: t, ...n } = e;
    u(n.channelId, (e) => {
        i.Ay.trackWithMetadata(d.HAw.GUILD_ROOM_INTERACTED, { ...c(n), interaction_type: t, ...e });
    });
}
function A(e) {
    let { location: t, ...n } = e;
    u(n.channelId, (e) => {
        i.Ay.trackWithMetadata(d.HAw.GUILD_ROOM_LAYOUT_TOGGLED, { ...c(n), location: t, ...e });
    });
}
function h(e) {
    let { location: t, ...n } = e;
    u(n.channelId, (e) => {
        i.Ay.trackWithMetadata(d.HAw.GUILD_ROOM_OPENED, { ...c(n), location: t, ...e });
    });
}
function I(e) {
    let { seatName: t, seatPosition: n, ...r } = e;
    u(r.channelId, (e) => {
        i.Ay.trackWithMetadata(d.HAw.GUILD_ROOM_SEAT_SELECTED, {
            ...c(r),
            seat_name: t,
            seat_position: [n.x, n.y],
            ...e,
        });
    });
}
function f(e) {
    let { targetUserId: t, interactionType: n, ...r } = e;
    u(r.channelId, (e) => {
        i.Ay.trackWithMetadata(d.HAw.GUILD_ROOM_USER_INTERACTED, {
            ...c(r),
            target_user_id: t,
            interaction_type: n,
            ...e,
        });
    });
}
function p(e) {
    u(e.channelId, (t) => {
        i.Ay.trackWithMetadata(d.HAw.GUILD_ROOM_USER_CONNECTED, { ...c(e), ...t });
    });
}
function T(e) {
    i.Ay.trackWithMetadata(d.HAw.GUILD_ROOM_USER_DISCONNECTED, {
        ...c(e),
        voice_state_count: Object.keys(l.A.getVoiceStatesForChannel(e.channelId)).length,
        voice_media_session_id: o.A.getMediaSessionId(e.channelId),
    });
}
function m(e) {
    let { update: t, ...n } = e;
    u(n.channelId, (e) => {
        i.Ay.trackWithMetadata(d.HAw.GUILD_ROOM_USER_UPDATED, {
            ...c(n),
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
