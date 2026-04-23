s.d(t, { A: () => a });
var i = s(311907),
    r = s(734057),
    n = s(71393),
    l = s(309010);
function a() {
    let e = (0, i.bG)([l.A, r.A], () => r.A.getChannel(l.A.getVoiceChannelId())),
        t = e?.getGuildId();
    return (0, i.bG)([n.A], () => (null != t ? n.A.getGuild(t)?.premiumTier : null));
}
