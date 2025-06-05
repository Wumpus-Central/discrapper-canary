e.d(n, { F: () => u });
var i = e(512722),
    l = e.n(i),
    r = e(846027),
    d = e(287734),
    a = e(131951),
    s = e(254238),
    _ = e(893387);
function u(t, n) {
    var e;
    let i = null != (e = t.sessionId) ? e : '';
    (0, s._)(i), (0, s.s6)();
    let u = null != n ? n : t.channelId;
    l()(null != u, 'attempted to transfer to unknown channel'), t.selfMute !== a.Z.isSelfMute() && r.Z.toggleSelfMute(), t.selfDeaf !== a.Z.isSelfDeaf() && r.Z.toggleSelfDeaf(), (0, _.Z)(u, 'discord_client', i), d.default.selectVoiceChannel(u, !1);
}
