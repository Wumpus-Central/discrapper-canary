t.d(n, { Z: () => Z });
var i = t(200651),
    l = t(192379),
    r = t(442837),
    a = t(481060),
    u = t(40851),
    d = t(549879),
    o = t(189432),
    s = t(189357),
    c = t(944486),
    E = t(626135),
    _ = t(981631),
    g = t(176505),
    f = t(50493),
    v = t(388032);
function Z(e) {
    let { userId: n, guildId: t, channelId: Z, location: h, onAction: A, appContext: S } = e,
        T = l.useContext(E.AnalyticsContext),
        M = (0, u.Aq)(),
        m = (0, r.e7)([c.Z], () => (null != Z ? Z : c.Z.getChannelId(t, !0)), [Z, t]),
        I = (0, s.m)(t);
    return null != t && I
        ? (0, i.jsx)(a.sNh, {
              id: 'mod-view',
              label: v.intl.string(v.t.kj3tz8),
              action: () => {
                  null == A || A(),
                      (0, d.i)(S),
                      (0, o.r)(t, n, null != m ? m : g.oC.MEMBER_SAFETY, {
                          modViewPanel: f.k.INFO,
                          sourceLocation: null != h ? h : T.location
                      }),
                      M.dispatch(_.CkL.POPOUT_CLOSE);
              }
          })
        : null;
}
