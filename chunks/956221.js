n.d(t, { Z: () => s });
var i = n(442837),
    r = n(592125),
    a = n(979651);
function s(e) {
    let { userId: t, guildId: n } = e,
        s = (0, i.e7)([a.Z], () => (null != n && null != t ? a.Z.getVoiceState(n, t) : null != t ? a.Z.getVoiceStateForUser(t) : void 0)),
        o = null == s ? void 0 : s.channelId;
    return {
        voiceState: s,
        voiceChannel: (0, i.e7)([r.Z], () => {
            if (null != o) return r.Z.getChannel(o);
        })
    };
}
