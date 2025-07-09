n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(726521),
    o = n(592125),
    s = n(388032);
function c(e, t) {
    let n = (0, i.e7)([o.Z], () => o.Z.getChannel(t)),
        c = null == n ? void 0 : n.getGuildId();
    return null == e
        ? null
        : (0, r.jsx)(l.kSQ, {
              children: (0, r.jsx)(l.sNh, {
                  id: 'report-app',
                  color: 'danger',
                  label: s.intl.string(s.t.NgA5vr),
                  action: () =>
                      (0, a.uu)({
                          application: e,
                          entrypoint: 'activity_ui_channel_call',
                          contextualGuildId: null != c ? c : void 0,
                          contextualChannelId: null == n ? void 0 : n.id
                      }),
                  icon: l.U65
              })
          });
}
