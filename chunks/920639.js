"use strict";
n.d(t, {
    E2: () => T,
    EB: () => p,
    Ql: () => E,
    U8: () => g,
    Yv: () => f,
    e6: () => m,
    n0: () => A,
    yt: () => h,
    zR: () => I,
}),
    n(321073);
var i = n(95561),
    r = n(280450),
    a = n(734057),
    s = n(763827),
    l = n(977997),
    o = n(558076),
    d = n(971954),
    c = n(652215);
function u(e) {
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
function _(e, t) {
    let n = s.A.getMediaSessionId();
    if (null != n)
        return void t({
            voice_state_count: Object.keys(l.A.getVoiceStatesForChannel(e)).length,
            voice_media_session_id: n,
        });
    function i() {
        s.A.removeChangeListener(r), clearTimeout(a);
    }
    function r() {
        let n = s.A.getMediaSessionId();
        null != n &&
            (i(),
            t({ voice_state_count: Object.keys(l.A.getVoiceStatesForChannel(e)).length, voice_media_session_id: n }));
    }
    let a = setTimeout(() => {
        i(), t({ voice_state_count: Object.keys(l.A.getVoiceStatesForChannel(e)).length });
    }, 2500);
    s.A.addChangeListener(r);
}
function E(e) {
    let { interactionType: t, ...n } = e;
    _(n.channelId, (e) => {
        i.Ay.trackWithMetadata(c.HAw.GUILD_ROOM_OBJECT_INTERACTED, { ...u(n), interaction_type: t, ...e });
    });
}
function A(e) {
    let { interactionType: t, ...n } = e;
    _(n.channelId, (e) => {
        i.Ay.trackWithMetadata(c.HAw.GUILD_ROOM_INTERACTED, { ...u(n), interaction_type: t, ...e });
    });
}
function h(e) {
    let { location: t, guildRoomOpen: n, ...r } = e;
    _(r.channelId, (e) => {
        i.Ay.trackWithMetadata(c.HAw.GUILD_ROOM_LAYOUT_TOGGLED, { ...u(r), location: t, guild_room_open: n, ...e });
    });
}
function I(e) {
    let { location: t, ...n } = e;
    _(n.channelId, (e) => {
        i.Ay.trackWithMetadata(c.HAw.GUILD_ROOM_OPENED, { ...u(n), location: t, ...e });
    });
}
function f(e) {
    let { actualSeatPosition: t, targetSeatPosition: n, ...r } = e;
    _(r.channelId, (e) => {
        var a;
        let s, l, _, E;
        i.Ay.trackWithMetadata(c.HAw.GUILD_ROOM_SEAT_SELECTED, {
            ...u(r),
            seat_name: (0, d.ls)(t.x, t.y),
            seat_position_v2: [t.x, t.y],
            update_reason: t.x !== n?.x || t.y !== n?.y ? "default" : "user_selected",
            ...((a = r.channelId),
            (s = []),
            (l = []),
            (_ = []),
            (E = []),
            o.A.getRoomUsers(a).forEach((e, t) => {
                s.push(t), l.push((0, d.ls)(e.position.x, e.position.y)), _.push(e.position.x), E.push(e.position.y);
            }),
            { seated_user_ids: s, seated_user_seat_names: l, seated_user_x_positions: _, seated_user_y_positions: E }),
            ...e,
        });
    });
}
function p(e) {
    let { targetUserId: t, interactionType: n, ...r } = e;
    _(r.channelId, (e) => {
        i.Ay.trackWithMetadata(c.HAw.GUILD_ROOM_USER_INTERACTED, {
            ...u(r),
            target_user_id: t,
            interaction_type: n,
            ...e,
        });
    });
}
function T(e) {
    _(e.channelId, (t) => {
        i.Ay.trackWithMetadata(c.HAw.GUILD_ROOM_USER_CONNECTED, { ...u(e), ...t });
    });
}
function m(e) {
    i.Ay.trackWithMetadata(c.HAw.GUILD_ROOM_USER_DISCONNECTED, {
        ...u(e),
        voice_state_count: Object.keys(l.A.getVoiceStatesForChannel(e.channelId)).length,
        voice_media_session_id: o.A.getMediaSessionId(e.channelId),
    });
}
function g(e) {
    let { update: t, ...n } = e;
    _(n.channelId, (e) => {
        i.Ay.trackWithMetadata(c.HAw.GUILD_ROOM_USER_UPDATED, {
            ...u(n),
            ...(function (e) {
                let t = { update_type: e.updateType, update_reason: e.updateReason };
                switch (e.updateType) {
                    case "position":
                        return { ...t, position_v2: [e.position.x, e.position.y] };
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
