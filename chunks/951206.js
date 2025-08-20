n.d(t, { F: () => s });
var r = n(512722),
    l = n.n(r),
    i = n(846027),
    u = n(287734),
    c = n(131951),
    o = n(254238),
    a = n(893387);
function s(e, t) {
    var n;
    let r = null != (n = e.sessionId) ? n : "";
    (0, o._)(r), (0, o.s6)();
    let s = null != t ? t : e.channelId;
    l()(null != s, "attempted to transfer to unknown channel"),
        e.selfMute !== c.Z.isSelfMute() && i.Z.toggleSelfMute(),
        e.selfDeaf !== c.Z.isSelfDeaf() && i.Z.toggleSelfDeaf(),
        (0, a.Z)(s, "discord_client", r),
        u.default.selectVoiceChannel(s, !1);
}
