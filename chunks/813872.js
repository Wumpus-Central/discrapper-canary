n.d(t, { Z: () => Z });
var l = n(200651),
    i = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(40851),
    u = n(549879),
    s = n(189432),
    d = n(189357),
    c = n(944486),
    g = n(626135),
    v = n(981631),
    f = n(176505),
    P = n(50493),
    E = n(388032);
function Z(e) {
    let { userId: t, guildId: n, channelId: Z, location: b, onAction: m, appContext: O } = e,
        h = i.useContext(g.AnalyticsContext),
        N = (0, o.Aq)(),
        y = (0, r.e7)([c.Z], () => (null != Z ? Z : c.Z.getChannelId(n, !0)), [Z, n]),
        S = (0, d.m)(n);
    return null != n && S
        ? (0, l.jsx)(a.sNh, {
              id: 'mod-view',
              label: E.NW.string(E.t.kj3tz8),
              action: () => {
                  null == m || m(),
                      (0, u.i)(O),
                      (0, s.r)(n, t, null != y ? y : f.oC.MEMBER_SAFETY, {
                          modViewPanel: P.k.INFO,
                          sourceLocation: null != b ? b : h.location
                      }),
                      N.dispatch(v.CkL.POPOUT_CLOSE);
              }
          })
        : null;
}
