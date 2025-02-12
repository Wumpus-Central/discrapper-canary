n.d(t, { Z: () => l });
var i = n(442837),
    r = n(592125),
    a = n(496675),
    s = n(979651),
    o = n(231338);
function l(e) {
    let { userId: t, guildId: n } = e,
        l = (0, i.e7)([s.Z], () => (null != n && null != t ? s.Z.getVoiceState(n, t) : null != t ? s.Z.getVoiceStateForUser(t) : void 0)),
        u = null == l ? void 0 : l.channelId,
        c = (0, i.e7)([r.Z], () => {
            if (null != u) return r.Z.getChannel(u);
        });
    return (0, i.e7)([a.Z], () => (null == c ? void 0 : c.isPrivate()) || a.Z.can(o.Pl.VIEW_CHANNEL, c))
        ? {
              voiceState: l,
              voiceChannel: c
          }
        : {};
}
