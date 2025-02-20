n.d(t, { F: () => _ });
var i = n(512722),
    r = n.n(i),
    a = n(846027),
    d = n(287734),
    l = n(131951),
    s = n(254238),
    o = n(893387);
function _(e, t) {
    var n;
    let i = null !== (n = e.sessionId) && void 0 !== n ? n : '';
    (0, s._)(i), (0, s.s6)();
    let _ = null != t ? t : e.channelId;
    r()(null != _, 'attempted to transfer to unknown channel'), e.selfMute !== l.Z.isSelfMute() && a.Z.toggleSelfMute(), e.selfDeaf !== l.Z.isSelfDeaf() && a.Z.toggleSelfDeaf(), (0, o.Z)(_, 'discord_client', i), d.default.selectVoiceChannel(_, !1);
}
