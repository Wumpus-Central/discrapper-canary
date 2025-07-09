n.d(t, { Z: () => m });
var l = n(255367),
    i = n(73800),
    r = n(442837),
    a = n(481060),
    o = n(40851),
    u = n(549879),
    s = n(189432),
    c = n(189357),
    d = n(271383),
    g = n(944486),
    f = n(626135),
    P = n(981631),
    E = n(176505),
    Z = n(50493),
    b = n(388032);
function m(e) {
    let { userId: t, guildId: n, channelId: m, location: O, onAction: h, appContext: v } = e,
        y = i.useContext(f.AnalyticsContext),
        S = (0, o.Aq)(),
        p = (0, r.e7)([g.Z], () => (null != m ? m : g.Z.getChannelId(n, !0)), [m, n]),
        C = (0, r.e7)([d.ZP], () => (null == n ? null : d.ZP.getMember(n, t)), [n, t]),
        M = (0, c.m)(n);
    return null != n && null != C && M
        ? (0, l.jsx)(a.sNh, {
              id: 'mod-view',
              label: b.intl.string(b.t.kj3tz8),
              action: () => {
                  (null == h || h(),
                      (0, u.i)(v),
                      (0, s.r)(n, t, null != p ? p : E.oC.MEMBER_SAFETY, {
                          modViewPanel: Z.k.INFO,
                          sourceLocation: null != O ? O : y.location
                      }),
                      S.dispatch(P.CkL.POPOUT_CLOSE));
              }
          })
        : null;
}
