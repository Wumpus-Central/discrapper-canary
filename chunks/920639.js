"use strict";
n.d(t, {
    E2: () => g,
    EB: () => m,
    Ql: () => h,
    U8: () => C,
    Yv: () => T,
    e6: () => S,
    iY: () => N,
    n0: () => I,
    yt: () => f,
    zR: () => p,
}),
    n(321073);
var i = n(821578),
    r = n(95561),
    a = n(280450),
    s = n(734057),
    l = n(763827),
    o = n(977997),
    d = n(174459),
    c = n(558076),
    u = n(996512),
    _ = n(652215);
function E(e) {
    let { userId: t, guildId: n, channelId: r } = e,
        l = t ?? a.default.getId(),
        o = c.A.getRoomUsers(r);
    return {
        user_id: l,
        guild_id: null != n ? n : (s.A.getChannel(r)?.getGuildId() ?? void 0),
        channel_id: r,
        guild_room_user_count: o.size,
        guild_room_user_connected: o.has(l),
        guild_room_background: c.A.getRoom(r)?.background ?? i.I.DEFAULT,
    };
}
function A(e, t) {
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
function h(e) {
    let { interactionType: t, ...n } = e;
    A(n.channelId, (e) => {
        r.Ay.trackWithMetadata(_.HAw.GUILD_ROOM_OBJECT_INTERACTED, { ...E(n), interaction_type: t, ...e });
    });
}
function I(e) {
    let { interactionType: t, ...n } = e;
    A(n.channelId, (e) => {
        r.Ay.trackWithMetadata(_.HAw.GUILD_ROOM_INTERACTED, { ...E(n), interaction_type: t, ...e });
    });
}
function f(e) {
    let { location: t, guildRoomOpen: n, ...i } = e;
    A(i.channelId, (e) => {
        r.Ay.trackWithMetadata(_.HAw.GUILD_ROOM_LAYOUT_TOGGLED, { ...E(i), location: t, guild_room_open: n, ...e });
    });
}
function p(e) {
    let { location: t, ...n } = e;
    A(n.channelId, (e) => {
        r.Ay.trackWithMetadata(_.HAw.GUILD_ROOM_OPENED, { ...E(n), location: t, ...e });
    });
}
function T(e) {
    let { actualSeatPosition: t, targetSeatPosition: n, ...i } = e;
    A(i.channelId, (e) => {
        var a;
        let s, l, o, d;
        r.Ay.trackWithMetadata(_.HAw.GUILD_ROOM_SEAT_SELECTED, {
            ...E(i),
            seat_name: (0, u.r)(t)?.name ?? "",
            seat_position_v2: [t.x, t.y],
            update_reason: t.x !== n?.x || t.y !== n?.y ? "default" : "user_selected",
            ...((a = i.channelId),
            (s = []),
            (l = []),
            (o = []),
            (d = []),
            c.A.getRoomUsers(a).forEach((e, t) => {
                s.push(t), l.push((0, u.r)(e.position)?.name ?? ""), o.push(e.position.x), d.push(e.position.y);
            }),
            { seated_user_ids: s, seated_user_seat_names: l, seated_user_x_positions: o, seated_user_y_positions: d }),
            ...e,
        });
    });
}
function m(e) {
    let { interactionType: t, ...n } = e;
    A(n.channelId, (e) => {
        r.Ay.trackWithMetadata(_.HAw.GUILD_ROOM_USER_INTERACTED, { ...E(n), interaction_type: t, ...e });
    });
}
function g(e) {
    A(e.channelId, (t) => {
        r.Ay.trackWithMetadata(_.HAw.GUILD_ROOM_USER_CONNECTED, { ...E(e), ...t });
    });
}
function S(e) {
    r.Ay.trackWithMetadata(_.HAw.GUILD_ROOM_USER_DISCONNECTED, {
        ...E(e),
        voice_state_count: Object.keys(o.A.getVoiceStatesForChannel(e.channelId)).length,
        voice_media_session_id: c.A.getMediaSessionId(e.channelId),
    });
}
function N(e) {
    let { rememberVideoOverlayVisibility: t } = e;
    d.default.track(_.HAw.GUILD_ROOM_SETTINGS_UPDATE, { remember_video_overlay_visibility: t });
}
function C(e) {
    let { update: t, ...n } = e;
    A(n.channelId, (e) => {
        r.Ay.trackWithMetadata(_.HAw.GUILD_ROOM_USER_UPDATED, {
            ...E(n),
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
