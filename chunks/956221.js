n.d(t, { Z: () => l });
var r = n(442837),
    i = n(592125),
    a = n(496675),
    o = n(979651),
    s = n(231338);
function l(e) {
    let { userId: t, guildId: n } = e,
        l = (0, r.e7)([o.Z], () => (null != n && null != t ? o.Z.getDiscoverableVoiceState(n, t) : null != t ? o.Z.getDiscoverableVoiceStateForUser(t) : void 0)),
        c = null == l ? void 0 : l.channelId,
        u = (0, r.e7)([i.Z], () => {
            if (null != c) return i.Z.getChannel(c);
        });
    return (0, r.e7)([a.Z], () => (null == u ? void 0 : u.isPrivate()) || a.Z.can(s.Pl.VIEW_CHANNEL, u))
        ? {
              voiceState: l,
              voiceChannel: u
          }
        : {};
}
