n.d(t, { Z: () => s });
var o = n(200651),
    r = n(442837),
    a = n(481060),
    i = n(726721),
    l = n(726521),
    c = n(592125),
    u = n(388032);
function s(e, t, n) {
    let s = i.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !0 }).enabled,
        d = (0, r.e7)([c.Z], () => c.Z.getChannel(t)),
        _ = null == d ? void 0 : d.getGuildId();
    return !1 === s
        ? null
        : (0, o.jsx)(a.sNh, {
              id: 'report-app',
              color: 'danger',
              label: u.NW.string(u.t.NgA5vr),
              action: () =>
                  (0, l.uu)({
                      application: e,
                      entrypoint: 'activity_ui_popout',
                      contextualGuildId: null != _ ? _ : void 0,
                      contextualChannelId: null == d ? void 0 : d.id,
                      appContext: n
                  }),
              icon: a.U65
          });
}
