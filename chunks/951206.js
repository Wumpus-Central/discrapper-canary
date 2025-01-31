n.d(e, { F: () => _ });
var i = n(512722),
    l = n.n(i),
    r = n(846027),
    a = n(287734),
    d = n(131951),
    s = n(254238),
    u = n(893387);
function _(t, e) {
    var n;
    let i = null !== (n = t.sessionId) && void 0 !== n ? n : '';
    (0, s._)(i), (0, s.s6)();
    let _ = null != e ? e : t.channelId;
    l()(null != _, 'attempted to transfer to unknown channel'), t.selfMute !== d.Z.isSelfMute() && r.Z.toggleSelfMute(), t.selfDeaf !== d.Z.isSelfDeaf() && r.Z.toggleSelfDeaf(), (0, u.Z)(_, 'discord_client', i), a.default.selectVoiceChannel(_, !1);
}
