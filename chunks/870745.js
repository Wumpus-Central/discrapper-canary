n.d(t, { Z: () => u });
var r = n(200651),
    i = n(442837),
    l = n(481060),
    o = n(726721),
    a = n(726521),
    d = n(592125),
    c = n(388032);
function u(e, t) {
    let n = o.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !0 }).enabled,
        u = (0, i.e7)([d.Z], () => d.Z.getChannel(t)),
        s = null == u ? void 0 : u.getGuildId();
    return !1 === n
        ? null
        : (0, r.jsx)(l.sNh, {
              id: 'report-app',
              color: 'danger',
              label: c.intl.string(c.t.NgA5vr),
              action: () =>
                  (0, a.uu)({
                      application: e,
                      entrypoint: 'activity_ui_popout',
                      contextualGuildId: null != s ? s : void 0,
                      contextualChannelId: null == u ? void 0 : u.id
                  }),
              icon: l.U65
          });
}
