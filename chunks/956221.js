n.d(t, { Z: () => p });
var r = n(192379),
    i = n(442837),
    o = n(750881),
    a = n(592125),
    s = n(496675),
    l = n(699516),
    c = n(979651),
    u = n(626135),
    d = n(981631),
    f = n(231338);
function p(e) {
    let { userId: t, guildId: n, surface: p } = e,
        { enabled: _, analyticsEligible: h } = (0, o.R4)(p),
        m = (0, i.e7)([c.Z], () => (null != n && null != t && _ ? c.Z.getDiscoverableVoiceState(n, t) : null != n && null != t ? c.Z.getVoiceState(n, t) : null != t && _ ? c.Z.getDiscoverableVoiceStateForUser(t) : null != t ? c.Z.getVoiceStateForUser(t) : void 0)),
        g = (0, i.e7)([c.Z], () => (null != n && null != t ? c.Z.getVoiceState(n, t) : null != t ? c.Z.getVoiceStateForUser(t) : void 0)),
        E = (0, i.e7)([l.Z], () => (null != t ? l.Z.getRelationshipType(t) : d.OGo.NONE));
    (0, r.useEffect)(() => {
        var e;
        h &&
            null != g &&
            u.default.track(d.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                surface: p,
                activity_user_id: t,
                discoverable: null === (e = g.discoverable) || void 0 === e || e,
                relationship_type: E,
                treatment: _ && !1 === g.discoverable ? o.h9.HIDE : o.h9.SHOW
            });
    }, [g, h, _, E, p, t]);
    let v = null == m ? void 0 : m.channelId,
        b = (0, i.e7)([a.Z], () => {
            if (null != v) return a.Z.getChannel(v);
        });
    return (0, i.e7)([s.Z], () => (null == b ? void 0 : b.isPrivate()) || s.Z.can(f.Pl.VIEW_CHANNEL, b))
        ? {
              voiceState: m,
              voiceChannel: b
          }
        : {};
}
