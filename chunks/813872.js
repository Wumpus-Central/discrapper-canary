n.d(t, { Z: () => m });
var l = n(200651),
    i = n(192379),
    r = n(442837),
    o = n(481060),
    a = n(40851),
    s = n(549879),
    u = n(189432),
    d = n(189357),
    c = n(944486),
    g = n(626135),
    f = n(981631),
    Z = n(176505),
    b = n(50493),
    O = n(388032);
function m(e) {
    let { userId: t, guildId: n, channelId: m, location: h, onAction: j, appContext: v } = e,
        E = i.useContext(g.AnalyticsContext),
        p = (0, a.Aq)(),
        P = (0, r.e7)([c.Z], () => (null != m ? m : c.Z.getChannelId(n, !0)), [m, n]),
        y = (0, d.m)(n);
    return null != n && y
        ? (0, l.jsx)(o.sNh, {
              id: 'mod-view',
              label: O.intl.string(O.t.kj3tz8),
              action: () => {
                  null == j || j(),
                      (0, s.i)(v),
                      (0, u.r)(n, t, null != P ? P : Z.oC.MEMBER_SAFETY, {
                          modViewPanel: b.k.INFO,
                          sourceLocation: null != h ? h : E.location
                      }),
                      p.dispatch(f.CkL.POPOUT_CLOSE);
              }
          })
        : null;
}
