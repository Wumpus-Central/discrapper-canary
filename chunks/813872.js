t.d(n, { Z: () => h });
var i = t(200651),
    l = t(192379),
    a = t(442837),
    r = t(481060),
    d = t(40851),
    u = t(189432),
    o = t(189357),
    s = t(944486),
    c = t(626135),
    _ = t(981631),
    E = t(176505),
    g = t(50493),
    f = t(388032);
function h(e) {
    let { userId: n, guildId: t, channelId: h, location: v, onAction: Z } = e,
        A = l.useContext(c.AnalyticsContext),
        S = (0, d.Aq)(),
        T = (0, a.e7)([s.Z], () => (null != h ? h : s.Z.getChannelId(t, !0)), [h, t]),
        I = (0, o.m)(t);
    return null != t && I
        ? (0, i.jsx)(r.sNh, {
              id: 'mod-view',
              label: f.intl.string(f.t.kj3tz8),
              action: () => {
                  null == Z || Z(),
                      (0, u.r)(t, n, null != T ? T : E.oC.MEMBER_SAFETY, {
                          modViewPanel: g.k.INFO,
                          sourceLocation: null != v ? v : A.location
                      }),
                      S.dispatch(_.CkL.POPOUT_CLOSE);
              }
          })
        : null;
}
