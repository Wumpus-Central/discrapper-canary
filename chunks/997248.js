s.d(t, { A: () => a });
var r = s(311907),
    i = s(734057),
    n = s(71393),
    l = s(309010);
function a() {
    let e = (0, r.bG)([l.A, i.A], () => i.A.getChannel(l.A.getVoiceChannelId())),
        t = e?.getGuildId();
    return (0, r.bG)([n.A], () => (null != t ? n.A.getGuild(t)?.premiumTier : null));
}
