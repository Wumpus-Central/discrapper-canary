n.d(t, { Z: () => s });
var r = n(200651),
    o = n(442837),
    i = n(481060),
    l = n(726721),
    a = n(726521),
    c = n(592125),
    u = n(388032);
function s(e, t, n) {
    let s = l.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !0 }).enabled,
        d = (0, o.e7)([c.Z], () => c.Z.getChannel(t)),
        p = null == d ? void 0 : d.getGuildId();
    return !1 === s
        ? null
        : (0, r.jsx)(i.sNh, {
              id: 'report-app',
              color: 'danger',
              label: u.NW.string(u.t.NgA5vr),
              action: () =>
                  (0, a.uu)({
                      application: e,
                      entrypoint: 'activity_ui_popout',
                      contextualGuildId: null != p ? p : void 0,
                      contextualChannelId: null == d ? void 0 : d.id,
                      appContext: n
                  }),
              icon: i.U65
          });
}
