n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(726521),
    s = n(592125),
    l = n(388032);
function c(e, t) {
    let n = (0, i.e7)([s.Z], () => s.Z.getChannel(t)),
        c = null == n ? void 0 : n.getGuildId();
    return null == e
        ? null
        : (0, r.jsx)(o.kSQ, {
              children: (0, r.jsx)(o.sNh, {
                  id: "report-app",
                  color: "danger",
                  label: l.intl.string(l.t.NgA5vr),
                  action: () =>
                      (0, a.uu)({
                          application: e,
                          entrypoint: "activity_ui_channel_call",
                          contextualGuildId: null != c ? c : void 0,
                          contextualChannelId: null == n ? void 0 : n.id,
                      }),
                  icon: o.U65,
              }),
          });
}
