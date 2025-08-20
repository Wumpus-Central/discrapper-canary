e.d(n, { F: () => p });
var i = e(512722),
    d = e.n(i),
    l = e(846027),
    r = e(287734),
    a = e(131951),
    _ = e(254238),
    s = e(893387);
function p(t, n) {
    var e;
    let i = null != (e = t.sessionId) ? e : "";
    (0, _._)(i), (0, _.s6)();
    let p = null != n ? n : t.channelId;
    d()(null != p, "attempted to transfer to unknown channel"),
        t.selfMute !== a.Z.isSelfMute() && l.Z.toggleSelfMute(),
        t.selfDeaf !== a.Z.isSelfDeaf() && l.Z.toggleSelfDeaf(),
        (0, s.Z)(p, "discord_client", i),
        r.default.selectVoiceChannel(p, !1);
}
