n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651);
n(192379);
var l = n(512722),
    r = n.n(l),
    a = n(115911),
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
function C(e) {
    var t, l;
    let { applicationId: C, stream: x, channel: v, exitFullScreen: _, appContext: I, analyticsLocation: E, guildScheduledEvent: b, shouldPrioritizeGroupPlusIcon: Z = !1, embeddedActivity: S, ...N } = e,
        T = (0, d.bp)(),
        j = null == v ? void 0 : v.getGuildId(),
        A = (0, s.e7)([u.Z], () => (null != j ? u.Z.getGuild(j) : null), [j]),
        y = (0, s.e7)([h.Z], () => (null != C ? h.Z.getApplicationActivity(C) : void 0));
    if (null != y && (null == S ? void 0 : S.location.kind) === a.X.CONTEXTLESS)
        return (0, i.jsx)(m.Z, {
            onClick: () => {
                c.h7(y, !1, T);
            },
            iconComponent: null == C || Z ? o.GroupPlusIcon : o.ActivitiesPlusIcon,
            label: null != C ? g.intl.string(g.t['OzOM/v']) : g.intl.string(g.t['6F9ivr'])
        });
    return ((t = A), (l = v), null != t && null != l && p.Z.can(f.Plq.CREATE_INSTANT_INVITE, l))
        ? (0, i.jsx)(m.Z, {
              onClick: () => {
                  r()(null != A, 'guild cannot be null'),
                      r()(null != v, 'channel cannot be null'),
                      !(function (e) {
                          let { guild: t, channel: l, streamUserId: r, applicationId: a, appContext: s, exitFullScreen: c, analyticsLocation: d, guildScheduledEvent: u } = e;
                          null == c || c(),
                              (0, o.openModalLazy)(
                                  async () => {
                                      let { default: e } = await Promise.all([n.e('7654'), n.e('46949')]).then(n.bind(n, 560114));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              guild: t,
                                              channel: l,
                                              streamUserId: r,
                                              applicationId: a,
                                              analyticsLocation: d,
                                              source: l.isGuildStageVoice() ? f.t4x.STAGE_CHANNEL : f.t4x.STREAM_INVITE,
                                              guildScheduledEvent: u
                                          });
                                  },
                                  {
                                      modalKey: 'stream-invite-modal',
                                      contextKey: s === f.IlC.POPOUT ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT
                                  }
                              );
                      })({
                          guild: A,
                          channel: v,
                          streamUserId: null == x ? void 0 : x.ownerId,
                          applicationId: C,
                          appContext: null != I ? I : T,
                          exitFullScreen: _,
                          analyticsLocation: E,
                          guildScheduledEvent: b
                      });
              },
              iconComponent: null == C || Z ? o.GroupPlusIcon : o.ActivitiesPlusIcon,
              label: null != C ? g.intl.string(g.t['OzOM/v']) : g.intl.string(g.t['6F9ivr']),
              ...N
          })
        : null;
}
