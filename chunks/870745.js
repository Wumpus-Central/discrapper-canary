t.d(n, { Z: () => u });
var i = t(200651),
    a = t(442837),
    r = t(481060),
    l = t(726721),
    o = t(726521),
    d = t(592125),
    c = t(388032);
function u(e, n) {
    let t = l.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !0 }).enabled,
        u = (0, a.e7)([d.Z], () => d.Z.getChannel(n)),
        s = null == u ? void 0 : u.getGuildId();
    return !1 === t
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'report-app',
              color: 'danger',
              label: c.intl.string(c.t.NgA5vr),
              action: () =>
                  (0, o.uu)({
                      application: e,
                      entrypoint: 'activity_ui_popout',
                      contextualGuildId: null != s ? s : void 0,
                      contextualChannelId: null == u ? void 0 : u.id
                  }),
              icon: r.U65
          });
}
