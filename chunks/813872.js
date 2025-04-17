n.d(t, { Z: () => Z });
var l = n(200651),
    r = n(192379),
    i = n(442837),
    a = n(481060),
    o = n(40851),
    s = n(549879),
    u = n(189432),
    c = n(189357),
    d = n(944486),
    g = n(626135),
    f = n(981631),
    b = n(176505),
    m = n(50493),
    O = n(388032);
function Z(e) {
    let { userId: t, guildId: n, channelId: Z, location: v, onAction: N, appContext: E } = e,
        y = r.useContext(g.AnalyticsContext),
        P = (0, o.Aq)(),
        h = (0, i.e7)([d.Z], () => (null != Z ? Z : d.Z.getChannelId(n, !0)), [Z, n]),
        p = (0, c.m)(n);
    return null != n && p
        ? (0, l.jsx)(a.sNh, {
              id: 'mod-view',
              label: O.NW.string(O.t.kj3tz8),
              action: () => {
                  null == N || N(),
                      (0, s.i)(E),
                      (0, u.r)(n, t, null != h ? h : b.oC.MEMBER_SAFETY, {
                          modViewPanel: m.k.INFO,
                          sourceLocation: null != v ? v : y.location
                      }),
                      P.dispatch(f.CkL.POPOUT_CLOSE);
              }
          })
        : null;
}
