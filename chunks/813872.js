n.d(t, { Z: () => h });
var l = n(255367),
    i = n(73800),
    r = n(442837),
    o = n(481060),
    a = n(40851),
    s = n(549879),
    u = n(189432),
    d = n(189357),
    c = n(271383),
    g = n(944486),
    f = n(626135),
    Z = n(981631),
    b = n(176505),
    O = n(50493),
    m = n(388032);
function h(e) {
    let { userId: t, guildId: n, channelId: h, location: j, onAction: v, appContext: E } = e,
        p = i.useContext(f.AnalyticsContext),
        P = (0, a.Aq)(),
        y = (0, r.e7)([g.Z], () => (null != h ? h : g.Z.getChannelId(n, !0)), [h, n]),
        S = (0, r.e7)([c.ZP], () => (null == n ? null : c.ZP.getMember(n, t)), [n, t]),
        M = (0, d.m)(n);
    return null != n && null != S && M
        ? (0, l.jsx)(o.sNh, {
              id: 'mod-view',
              label: m.intl.string(m.t.kj3tz8),
              action: () => {
                  (null == v || v(),
                      (0, s.i)(E),
                      (0, u.r)(n, t, null != y ? y : b.oC.MEMBER_SAFETY, {
                          modViewPanel: O.k.INFO,
                          sourceLocation: null != j ? j : p.location
                      }),
                      P.dispatch(Z.CkL.POPOUT_CLOSE));
              }
          })
        : null;
}
