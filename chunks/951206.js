n.d(t, { F: () => u });
var r = n(512722),
    i = n.n(r),
    a = n(846027),
    o = n(287734),
    s = n(131951),
    l = n(254238),
    c = n(893387);
function u(e, t) {
    var n;
    let r = null != (n = e.sessionId) ? n : '';
    ((0, l._)(r), (0, l.s6)());
    let u = null != t ? t : e.channelId;
    (i()(null != u, 'attempted to transfer to unknown channel'), e.selfMute !== s.Z.isSelfMute() && a.Z.toggleSelfMute(), e.selfDeaf !== s.Z.isSelfDeaf() && a.Z.toggleSelfDeaf(), (0, c.Z)(u, 'discord_client', r), o.default.selectVoiceChannel(u, !1));
}
