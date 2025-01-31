n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var l = n(512722),
    a = n.n(l),
    r = n(115911),
    s = n(442837),
    o = n(481060),
    c = n(24124),
    d = n(40851),
    u = n(430824),
    h = n(293273),
    p = n(496675),
    m = n(871499),
    f = n(981631),
    g = n(388032);
function _(e) {
    let { applicationId: t, stream: l, channel: _, exitFullScreen: C, appContext: x, analyticsLocation: v, guildScheduledEvent: E, shouldPrioritizeGroupPlusIcon: I = !1, embeddedActivity: b, ...Z } = e,
        N = (0, d.bp)(),
        T = null == _ ? void 0 : _.getGuildId(),
        S = (0, s.e7)([u.Z], () => (null != T ? u.Z.getGuild(T) : null), [T]),
        j = (0, s.e7)([h.Z], () => (null != t ? h.Z.getApplicationActivity(t) : void 0));
    return null != j && (null == b ? void 0 : b.location.kind) === r.X.CONTEXTLESS
        ? (0, i.jsx)(m.Z, {
              onClick: () => {
                  c.h7(j, !1, N);
              },
              iconComponent: null == t || I ? o.ejJ : o.gQj,
              label: null != t ? g.intl.string(g.t['OzOM/v']) : g.intl.string(g.t['6F9ivr'])
          })
        : null != S && null != _ && p.Z.can(f.Plq.CREATE_INSTANT_INVITE, _)
          ? (0, i.jsx)(m.Z, {
                onClick: () => {
                    a()(null != S, 'guild cannot be null'),
                        a()(null != _, 'channel cannot be null'),
                        (function (e) {
                            let { guild: t, channel: l, streamUserId: a, applicationId: r, appContext: s, exitFullScreen: c, analyticsLocation: d, guildScheduledEvent: u } = e;
                            null == c || c(),
                                (0, o.ZDy)(
                                    async () => {
                                        let { default: e } = await Promise.all([n.e('7654'), n.e('86004')]).then(n.bind(n, 560114));
                                        return (n) =>
                                            (0, i.jsx)(e, {
                                                ...n,
                                                guild: t,
                                                channel: l,
                                                streamUserId: a,
                                                applicationId: r,
                                                analyticsLocation: d,
                                                source: l.isGuildStageVoice() ? f.t4x.STAGE_CHANNEL : f.t4x.STREAM_INVITE,
                                                guildScheduledEvent: u
                                            });
                                    },
                                    {
                                        modalKey: 'stream-invite-modal',
                                        contextKey: s === f.IlC.POPOUT ? o.u1M : o.z1l
                                    }
                                );
                        })({
                            guild: S,
                            channel: _,
                            streamUserId: null == l ? void 0 : l.ownerId,
                            applicationId: t,
                            appContext: null != x ? x : N,
                            exitFullScreen: C,
                            analyticsLocation: v,
                            guildScheduledEvent: E
                        });
                },
                iconComponent: null == t || I ? o.ejJ : o.gQj,
                label: null != t ? g.intl.string(g.t['OzOM/v']) : g.intl.string(g.t['6F9ivr']),
                ...Z
            })
          : null;
}
