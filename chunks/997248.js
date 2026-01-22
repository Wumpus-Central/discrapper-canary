r.d(t, { A: () => a });
var n = r(311907),
    l = r(734057),
    s = r(71393),
    i = r(309010);
function a() {
    let e = (0, n.bG)([i.A, l.A], () => l.A.getChannel(i.A.getVoiceChannelId())),
        t = null == e ? void 0 : e.getGuildId();
    return (0, n.bG)([s.A], () => {
        var e;
        return null != t ? (null == (e = s.A.getGuild(t)) ? void 0 : e.premiumTier) : null;
    });
}
