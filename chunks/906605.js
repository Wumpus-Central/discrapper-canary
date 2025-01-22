r.d(n, {
    Sc: function () {
        return _;
    },
    UP: function () {
        return m;
    },
    Zx: function () {
        return p;
    },
    _s: function () {
        return h;
    }
});
var i = r(47120);
var a = r(570140),
    o = r(339085),
    s = r(592125),
    l = r(19780),
    u = r(944486),
    c = r(626135),
    d = r(106301),
    f = r(981631);
function p(e, n) {
    var r;
    if (null == e) {
        _(n);
        return;
    }
    a.Z.dispatch({
        type: 'UPDATE_HANG_STATUS',
        status: e,
        saveAsDefault: n
    }),
        c.default.track(f.rMx.SET_HANG_STATUS, {
            status_type: e,
            channel_id: u.Z.getVoiceChannelId(),
            guild_id: null === (r = s.Z.getChannel(u.Z.getVoiceChannelId())) || void 0 === r ? void 0 : r.guild_id,
            media_session_id: l.Z.getMediaSessionId()
        });
}
function h(e, n, r) {
    var i;
    if ('' === e || null == n) {
        _(r);
        return;
    }
    a.Z.dispatch({
        type: 'UPDATE_HANG_STATUS_CUSTOM',
        emoji: n,
        status: e,
        saveAsDefault: r
    }),
        c.default.track(f.rMx.SET_HANG_STATUS, {
            status_type: e,
            channel_id: u.Z.getVoiceChannelId(),
            guild_id: null === (i = s.Z.getChannel(u.Z.getVoiceChannelId())) || void 0 === i ? void 0 : i.guild_id,
            media_session_id: l.Z.getMediaSessionId()
        });
}
function _(e) {
    var n;
    a.Z.dispatch({
        type: 'CLEAR_HANG_STATUS',
        saveAsDefault: e
    }),
        c.default.track(f.rMx.CLEAR_HANG_STATUS, {
            channel_id: u.Z.getVoiceChannelId(),
            guild_id: null === (n = s.Z.getChannel(u.Z.getVoiceChannelId())) || void 0 === n ? void 0 : n.guild_id,
            media_session_id: l.Z.getMediaSessionId()
        });
}
function m() {
    let e = [d.Z.getCustomHangStatus(), ...d.Z.getRecentCustomStatuses()].filter((e) => {
        var n;
        return null != e && null != e.emoji && (null === (n = e.emoji) || void 0 === n ? void 0 : n.id) != null && null == o.ZP.getCustomEmojiById(e.emoji.id);
    });
    e.length > 0 &&
        a.Z.dispatch({
            type: 'DELETE_INVALID_HANG_STATUSES',
            statuses: e
        });
}
