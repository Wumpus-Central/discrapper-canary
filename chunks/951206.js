n.d(t, { F: () => u });
var i = n(512722),
    r = n.n(i),
    l = n(846027),
    a = n(287734),
    o = n(131951),
    s = n(254238),
    c = n(893387);
function u(e, t) {
    var n;
    let i = null != (n = e.sessionId) ? n : "";
    (0, s._)(i), (0, s.s6)();
    let u = null != t ? t : e.channelId;
    r()(null != u, "attempted to transfer to unknown channel"),
        e.selfMute !== o.Z.isSelfMute() && l.Z.toggleSelfMute(),
        e.selfDeaf !== o.Z.isSelfDeaf() && l.Z.toggleSelfDeaf(),
        (0, c.Z)(u, "discord_client", i),
        a.default.selectVoiceChannel(u, !1);
}
