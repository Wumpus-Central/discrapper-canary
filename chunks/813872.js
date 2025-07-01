n.d(t, { Z: () => y });
var l = n(255367),
    r = n(73800),
    i = n(442837),
    o = n(481060),
    a = n(40851),
    u = n(549879),
    c = n(189432),
    d = n(189357),
    s = n(271383),
    f = n(944486),
    g = n(626135),
    b = n(981631),
    O = n(176505),
    E = n(50493),
    _ = n(388032);
function y(e) {
    let { userId: t, guildId: n, channelId: y, location: v, onAction: Z, appContext: h } = e,
        m = r.useContext(g.AnalyticsContext),
        p = (0, a.Aq)(),
        S = (0, i.e7)([f.Z], () => (null != y ? y : f.Z.getChannelId(n, !0)), [y, n]),
        j = (0, i.e7)([s.ZP], () => (null == n ? null : s.ZP.getMember(n, t)), [n, t]),
        P = (0, d.m)(n);
    return null != n && null != j && P
        ? (0, l.jsx)(o.sNh, {
              id: 'mod-view',
              label: _.intl.string(_.t.kj3tz8),
              action: () => {
                  (null == Z || Z(),
                      (0, u.i)(h),
                      (0, c.r)(n, t, null != S ? S : O.oC.MEMBER_SAFETY, {
                          modViewPanel: E.k.INFO,
                          sourceLocation: null != v ? v : m.location
                      }),
                      p.dispatch(b.CkL.POPOUT_CLOSE));
              }
          })
        : null;
}
