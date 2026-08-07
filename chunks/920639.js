"use strict";
n.d(t, {
    E2: () => m,
    EB: () => T,
    Ql: () => A,
    U8: () => S,
    Yv: () => p,
    e6: () => g,
    n0: () => h,
    yt: () => I,
    zR: () => f,
}),
    n(321073);
var i = n(821578),
    r = n(95561),
    a = n(280450),
    s = n(734057),
    l = n(763827),
    o = n(977997),
    d = n(558076),
    c = n(189998),
    u = n(652215);
function _(e) {
    let { userId: t, guildId: n, channelId: r } = e,
        l = t ?? a.default.getId(),
        o = d.A.getRoomUsers(r);
    return {
        user_id: l,
        guild_id: null != n ? n : (s.A.getChannel(r)?.getGuildId() ?? void 0),
        channel_id: r,
        guild_room_user_count: o.size,
        guild_room_user_connected: o.has(l),
        guild_room_background: d.A.getRoom(r)?.background ?? i.I.DEFAULT,
    };
}
function E(e, t) {
    let n = l.A.getMediaSessionId();
    if (null != n)
        return void t({
            voice_state_count: Object.keys(o.A.getVoiceStatesForChannel(e)).length,
            voice_media_session_id: n,
        });
    function i() {
        l.A.removeChangeListener(r), clearTimeout(a);
    }
    function r() {
        let n = l.A.getMediaSessionId();
        null != n &&
            (i(),
            t({ voice_state_count: Object.keys(o.A.getVoiceStatesForChannel(e)).length, voice_media_session_id: n }));
    }
    let a = setTimeout(() => {
        i(), t({ voice_state_count: Object.keys(o.A.getVoiceStatesForChannel(e)).length });
    }, 2500);
    l.A.addChangeListener(r);
}
function A(e) {
    let { interactionType: t, ...n } = e;
    E(n.channelId, (e) => {
        r.Ay.trackWithMetadata(u.HAw.GUILD_ROOM_OBJECT_INTERACTED, { ..._(n), interaction_type: t, ...e });
    });
}
function h(e) {
    let { interactionType: t, ...n } = e;
    E(n.channelId, (e) => {
        r.Ay.trackWithMetadata(u.HAw.GUILD_ROOM_INTERACTED, { ..._(n), interaction_type: t, ...e });
    });
}
function I(e) {
    let { location: t, guildRoomOpen: n, ...i } = e;
    E(i.channelId, (e) => {
        r.Ay.trackWithMetadata(u.HAw.GUILD_ROOM_LAYOUT_TOGGLED, { ..._(i), location: t, guild_room_open: n, ...e });
    });
}
function f(e) {
    let { location: t, ...n } = e;
    E(n.channelId, (e) => {
        r.Ay.trackWithMetadata(u.HAw.GUILD_ROOM_OPENED, { ..._(n), location: t, ...e });
    });
}
function p(e) {
    let { actualSeatPosition: t, targetSeatPosition: n, ...i } = e;
    E(i.channelId, (e) => {
        var a;
        let s, l, o, E;
        r.Ay.trackWithMetadata(u.HAw.GUILD_ROOM_SEAT_SELECTED, {
            ..._(i),
            seat_name: (0, c.ls)(t.x, t.y),
            seat_position_v2: [t.x, t.y],
            update_reason: t.x !== n?.x || t.y !== n?.y ? "default" : "user_selected",
            ...((a = i.channelId),
            (s = []),
            (l = []),
            (o = []),
            (E = []),
            d.A.getRoomUsers(a).forEach((e, t) => {
                s.push(t), l.push((0, c.ls)(e.position.x, e.position.y)), o.push(e.position.x), E.push(e.position.y);
            }),
            { seated_user_ids: s, seated_user_seat_names: l, seated_user_x_positions: o, seated_user_y_positions: E }),
            ...e,
        });
    });
}
function T(e) {
    let { interactionType: t, ...n } = e;
    E(n.channelId, (e) => {
        r.Ay.trackWithMetadata(u.HAw.GUILD_ROOM_USER_INTERACTED, { ..._(n), interaction_type: t, ...e });
    });
}
function m(e) {
    E(e.channelId, (t) => {
        r.Ay.trackWithMetadata(u.HAw.GUILD_ROOM_USER_CONNECTED, { ..._(e), ...t });
    });
}
function g(e) {
    r.Ay.trackWithMetadata(u.HAw.GUILD_ROOM_USER_DISCONNECTED, {
        ..._(e),
        voice_state_count: Object.keys(o.A.getVoiceStatesForChannel(e.channelId)).length,
        voice_media_session_id: d.A.getMediaSessionId(e.channelId),
    });
}
function S(e) {
    let { update: t, ...n } = e;
    E(n.channelId, (e) => {
        r.Ay.trackWithMetadata(u.HAw.GUILD_ROOM_USER_UPDATED, {
            ..._(n),
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
