n.d(t, { Z: () => y });
var r = n(255367),
    l = n(73800),
    i = n(442837),
    a = n(481060),
    o = n(40851),
    u = n(549879),
    c = n(189432),
    s = n(189357),
    d = n(944486),
    f = n(626135),
    O = n(981631),
    E = n(176505),
    g = n(50493),
    b = n(388032);
function y(e) {
    let { userId: t, guildId: n, channelId: y, location: _, onAction: p, appContext: m } = e,
        j = l.useContext(f.AnalyticsContext),
        M = (0, o.Aq)(),
        P = (0, i.e7)([d.Z], () => (null != y ? y : d.Z.getChannelId(n, !0)), [y, n]),
        S = (0, s.m)(n);
    return null != n && S
        ? (0, r.jsx)(a.sNh, {
              id: 'mod-view',
              label: b.intl.string(b.t.kj3tz8),
              action: () => {
                  null == p || p(),
                      (0, u.i)(m),
                      (0, c.r)(n, t, null != P ? P : E.oC.MEMBER_SAFETY, {
                          modViewPanel: g.k.INFO,
                          sourceLocation: null != _ ? _ : j.location
                      }),
                      M.dispatch(O.CkL.POPOUT_CLOSE);
              }
          })
        : null;
}
