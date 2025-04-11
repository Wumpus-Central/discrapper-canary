n.d(t, { Z: () => b });
var l = n(200651),
    i = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(40851),
    u = n(549879),
    s = n(189432),
    c = n(189357),
    d = n(944486),
    g = n(626135),
    f = n(981631),
    P = n(176505),
    E = n(50493),
    Z = n(388032);
function b(e) {
    let { userId: t, guildId: n, channelId: b, location: m, onAction: O, appContext: h } = e,
        v = i.useContext(g.AnalyticsContext),
        N = (0, o.Aq)(),
        y = (0, r.e7)([d.Z], () => (null != b ? b : d.Z.getChannelId(n, !0)), [b, n]),
        S = (0, c.m)(n);
    return null != n && S
        ? (0, l.jsx)(a.sNh, {
              id: 'mod-view',
              label: Z.NW.string(Z.t.kj3tz8),
              action: () => {
                  null == O || O(),
                      (0, u.i)(h),
                      (0, s.r)(n, t, null != y ? y : P.oC.MEMBER_SAFETY, {
                          modViewPanel: E.k.INFO,
                          sourceLocation: null != m ? m : v.location
                      }),
                      N.dispatch(f.CkL.POPOUT_CLOSE);
              }
          })
        : null;
}
