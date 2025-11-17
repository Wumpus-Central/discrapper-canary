n.d(t, { Z: () => c });
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(481060),
    a = n(726521),
    o = n(592125),
    s = n(388032);
function c(e, t) {
    let n = (0, r.e7)([o.Z], () => o.Z.getChannel(t)),
        c = null == n ? void 0 : n.getGuildId();
    return null == e
        ? null
        : (0, i.jsx)(l.kSQ, {
              children: (0, i.jsx)(l.sNh, {
                  id: "report-app",
                  color: "danger",
                  label: s.intl.string(s.t.NgA5vp),
                  action: () =>
                      (0, a.uu)({
                          application: e,
                          entrypoint: "activity_ui_channel_call",
                          contextualGuildId: null != c ? c : void 0,
                          contextualChannelId: null == n ? void 0 : n.id,
                      }),
                  icon: l.U65,
              }),
          });
}
