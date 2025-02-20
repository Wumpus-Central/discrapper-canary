n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(726721),
    a = n(726521),
    s = n(592125),
    c = n(388032);
function u(e, t) {
    let n = (0, i.e7)([s.Z], () => s.Z.getChannel(t)),
        u = null == n ? void 0 : n.getGuildId();
    return !1 === o.Z.useExperiment({ location: 'channel_call_overflow_menu' }, { autoTrackExposure: !0 }).enabled || null == e
        ? null
        : (0, r.jsx)(l.kSQ, {
              children: (0, r.jsx)(l.sNh, {
                  id: 'report-app',
                  color: 'danger',
                  label: c.NW.string(c.t.NgA5vr),
                  action: () =>
                      (0, a.uu)({
                          application: e,
                          entrypoint: 'activity_ui_channel_call',
                          contextualGuildId: null != u ? u : void 0,
                          contextualChannelId: null == n ? void 0 : n.id
                      }),
                  icon: l.U65
              })
          });
}
