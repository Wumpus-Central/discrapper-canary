n.d(t, { Z: () => y });
var r = n(200651),
    l = n(192379),
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
        N = l.useContext(f.AnalyticsContext),
        j = (0, o.Aq)(),
        M = (0, i.e7)([d.Z], () => (null != y ? y : d.Z.getChannelId(n, !0)), [y, n]),
        P = (0, s.m)(n);
    return null != n && P
        ? (0, r.jsx)(a.sNh, {
              id: 'mod-view',
              label: b.NW.string(b.t.kj3tz8),
              action: () => {
                  null == p || p(),
                      (0, u.i)(m),
                      (0, c.r)(n, t, null != M ? M : E.oC.MEMBER_SAFETY, {
                          modViewPanel: g.k.INFO,
                          sourceLocation: null != _ ? _ : N.location
                      }),
                      j.dispatch(O.CkL.POPOUT_CLOSE);
              }
          })
        : null;
}
