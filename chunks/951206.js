n.d(t, { F: () => u });
var i = n(512722),
    r = n.n(i),
    d = n(846027),
    a = n(287734),
    l = n(131951),
    _ = n(254238),
    s = n(893387);
function u(e, t) {
    var n;
    let i = null != (n = e.sessionId) ? n : '';
    (0, _._)(i), (0, _.s6)();
    let u = null != t ? t : e.channelId;
    r()(null != u, 'attempted to transfer to unknown channel'), e.selfMute !== l.Z.isSelfMute() && d.Z.toggleSelfMute(), e.selfDeaf !== l.Z.isSelfDeaf() && d.Z.toggleSelfDeaf(), (0, s.Z)(u, 'discord_client', i), a.default.selectVoiceChannel(u, !1);
}
