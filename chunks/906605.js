(n.d(t, {
    Sc: () => _,
    UP: () => p,
    Zx: () => d,
    _s: () => f
}),
    n(388685));
var r = n(570140),
    i = n(339085),
    a = n(592125),
    o = n(19780),
    s = n(944486),
    l = n(626135),
    c = n(106301),
    u = n(981631);
function d(e, t) {
    var n;
    if (null == e) return void _(t);
    (r.Z.dispatch({
        type: 'UPDATE_HANG_STATUS',
        status: e,
        saveAsDefault: t
    }),
        l.default.track(u.rMx.SET_HANG_STATUS, {
            status_type: e,
            channel_id: s.Z.getVoiceChannelId(),
            guild_id: null == (n = a.Z.getChannel(s.Z.getVoiceChannelId())) ? void 0 : n.guild_id,
            media_session_id: o.Z.getMediaSessionId()
        }));
}
function f(e, t, n) {
    var i;
    if ('' === e || null == t) return void _(n);
    (r.Z.dispatch({
        type: 'UPDATE_HANG_STATUS_CUSTOM',
        emoji: t,
        status: e,
        saveAsDefault: n
    }),
        l.default.track(u.rMx.SET_HANG_STATUS, {
            status_type: e,
            channel_id: s.Z.getVoiceChannelId(),
            guild_id: null == (i = a.Z.getChannel(s.Z.getVoiceChannelId())) ? void 0 : i.guild_id,
            media_session_id: o.Z.getMediaSessionId()
        }));
}
function _(e) {
    var t;
    (r.Z.dispatch({
        type: 'CLEAR_HANG_STATUS',
        saveAsDefault: e
    }),
        l.default.track(u.rMx.CLEAR_HANG_STATUS, {
            channel_id: s.Z.getVoiceChannelId(),
            guild_id: null == (t = a.Z.getChannel(s.Z.getVoiceChannelId())) ? void 0 : t.guild_id,
            media_session_id: o.Z.getMediaSessionId()
        }));
}
function p() {
    let e = [c.Z.getCustomHangStatus(), ...c.Z.getRecentCustomStatuses()].filter((e) => {
        var t;
        return null != e && null != e.emoji && (null == (t = e.emoji) ? void 0 : t.id) != null && null == i.ZP.getCustomEmojiById(e.emoji.id);
    });
    e.length > 0 &&
        r.Z.dispatch({
            type: 'DELETE_INVALID_HANG_STATUSES',
            statuses: e
        });
}
