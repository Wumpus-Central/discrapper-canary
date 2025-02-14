n.d(t, { Z: () => _ });
var i = n(192379),
    r = n(442837),
    a = n(750881),
    s = n(592125),
    o = n(496675),
    l = n(699516),
    u = n(979651),
    c = n(626135),
    d = n(981631),
    f = n(231338);
function _(e) {
    let { userId: t, guildId: n, surface: _ } = e,
        { enabled: p, analyticsEligible: h } = (0, a.R4)(_),
        m = (0, r.e7)([u.Z], () => (null != n && null != t && p ? u.Z.getDiscoverableVoiceState(n, t) : null != n && null != t ? u.Z.getVoiceState(n, t) : null != t && p ? u.Z.getDiscoverableVoiceStateForUser(t) : null != t ? u.Z.getVoiceStateForUser(t) : void 0)),
        g = (0, r.e7)([u.Z], () => (null != n && null != t ? u.Z.getVoiceState(n, t) : null != t ? u.Z.getVoiceStateForUser(t) : void 0)),
        E = (0, r.e7)([l.Z], () => (null != t ? l.Z.getRelationshipType(t) : d.OGo.NONE));
    (0, i.useEffect)(() => {
        var e;
        h &&
            null != g &&
            c.default.track(d.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                surface: _,
                activity_user_id: t,
                discoverable: null === (e = g.discoverable) || void 0 === e || e,
                relationship_type: E,
                treatment: p && !1 === g.discoverable ? a.h9.HIDE : a.h9.SHOW
            });
    }, [g, h, p, E, _, t]);
    let v = null == m ? void 0 : m.channelId,
        y = (0, r.e7)([s.Z], () => {
            if (null != v) return s.Z.getChannel(v);
        });
    return (0, r.e7)([o.Z], () => (null == y ? void 0 : y.isPrivate()) || o.Z.can(f.Pl.VIEW_CHANNEL, y))
        ? {
              voiceState: m,
              voiceChannel: y
          }
        : {};
}
