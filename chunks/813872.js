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
    f = n(626135),
    g = n(981631),
    Z = n(176505),
    b = n(50493),
    O = n(388032);
function m(e) {
    let { userId: t, guildId: n, channelId: m, location: N, onAction: h, appContext: E } = e,
        j = i.useContext(f.AnalyticsContext),
        v = (0, a.Aq)(),
        P = (0, r.e7)([c.Z], () => (null != m ? m : c.Z.getChannelId(n, !0)), [m, n]),
        p = (0, d.m)(n);
    return null != n && p
        ? (0, l.jsx)(o.sNh, {
              id: 'mod-view',
              label: O.NW.string(O.t.kj3tz8),
              action: () => {
                  null == h || h(),
                      (0, s.i)(E),
                      (0, u.r)(n, t, null != P ? P : Z.oC.MEMBER_SAFETY, {
                          modViewPanel: b.k.INFO,
                          sourceLocation: null != N ? N : j.location
                      }),
                      v.dispatch(g.CkL.POPOUT_CLOSE);
              }
          })
        : null;
}
