n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(726721),
    s = n(726521),
    o = n(592125),
    c = n(388032);
function d(e, t) {
    let n = (0, l.e7)([o.Z], () => o.Z.getChannel(t)),
        d = null == n ? void 0 : n.getGuildId();
    return !1 === a.Z.useExperiment({ location: 'channel_call_overflow_menu' }, { autoTrackExposure: !0 }).enabled || null == e
        ? null
        : (0, i.jsx)(r.MenuGroup, {
              children: (0, i.jsx)(r.MenuItem, {
                  id: 'report-app',
                  color: 'danger',
                  label: c.intl.string(c.t.NgA5vr),
                  action: () =>
                      (0, s.uu)({
                          application: e,
                          entrypoint: 'activity_ui_channel_call',
                          contextualGuildId: null != d ? d : void 0,
                          contextualChannelId: null == n ? void 0 : n.id
                      }),
                  icon: r.FlagIcon
              })
          });
}
