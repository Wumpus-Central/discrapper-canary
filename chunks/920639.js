n.d(t, {
    E2: () => g,
    EB: () => m,
    JF: () => O,
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
    let { actualSeatPosition: t, targetSeatPosition: n, actualSeatId: i, targetSeatId: a, ...s } = e;
    A(s.channelId, (e) => {
        var l;
        let o, d, A, h;
        r.Ay.trackWithMetadata(_.HAw.GUILD_ROOM_SEAT_SELECTED, {
            ...E(s),
            seat_name: (0, u.r)(i, t, s.channelId)?.name ?? "",
            seat_position_v2: [t.x, t.y],
            seat_id: i,
            update_reason: t.x !== n?.x || t.y !== n?.y || i !== a ? "default" : "user_selected",
            ...((l = s.channelId),
            (o = []),
            (d = []),
            (A = []),
            (h = []),
            c.A.getRoomUsers(l).forEach((e, t) => {
                o.push(t),
                    d.push((0, u.r)(e.seat, e.position, l)?.name ?? ""),
                    A.push(e.position.x),
                    h.push(e.position.y);
            }),
            { seated_user_ids: o, seated_user_seat_names: d, seated_user_x_positions: A, seated_user_y_positions: h }),
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
                    case "seat":
                        return { ...t, seat_id: e.seat };
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
function O(e) {
    let { update: t, ...n } = e;
    A(n.channelId, (e) => {
        r.Ay.trackWithMetadata(_.HAw.GUILD_ROOM_UPDATED, {
            ...E(n),
            ...(function (e) {
                let t = { update_type: e.updateType };
                if ("background" === e.updateType) return { ...t, background: e.background };
            })(t),
            ...e,
        });
    });
}
