n.d(t, { F: () => u });
var r = n(512722),
    i = n.n(r),
    o = n(846027),
    a = n(287734),
    s = n(131951),
    l = n(254238),
    c = n(893387);
function u(e, t) {
    var n;
    let r = null != (n = e.sessionId) ? n : '';
    ((0, l._)(r), (0, l.s6)());
    let u = null != t ? t : e.channelId;
    (i()(null != u, 'attempted to transfer to unknown channel'), e.selfMute !== s.Z.isSelfMute() && o.Z.toggleSelfMute(), e.selfDeaf !== s.Z.isSelfDeaf() && o.Z.toggleSelfDeaf(), (0, c.Z)(u, 'discord_client', r), a.default.selectVoiceChannel(u, !1));
}
