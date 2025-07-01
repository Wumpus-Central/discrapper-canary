n.d(t, { Z: () => _ });
var r = n(255367),
    l = n(73800),
    i = n(442837),
    a = n(481060),
    o = n(40851),
    u = n(549879),
    c = n(189432),
    s = n(189357),
    d = n(271383),
    f = n(944486),
    O = n(626135),
    E = n(981631),
    g = n(176505),
    b = n(50493),
    y = n(388032);
function _(e) {
    let { userId: t, guildId: n, channelId: _, location: p, onAction: m, appContext: M } = e,
        j = l.useContext(O.AnalyticsContext),
        P = (0, o.Aq)(),
        S = (0, i.e7)([f.Z], () => (null != _ ? _ : f.Z.getChannelId(n, !0)), [_, n]),
        A = (0, i.e7)([d.ZP], () => (null == n ? null : d.ZP.getMember(n, t)), [n, t]),
        Z = (0, s.m)(n);
    return null != n && null != A && Z
        ? (0, r.jsx)(a.sNh, {
              id: 'mod-view',
              label: y.intl.string(y.t.kj3tz8),
              action: () => {
                  (null == m || m(),
                      (0, u.i)(M),
                      (0, c.r)(n, t, null != S ? S : g.oC.MEMBER_SAFETY, {
                          modViewPanel: b.k.INFO,
                          sourceLocation: null != p ? p : j.location
                      }),
                      P.dispatch(E.CkL.POPOUT_CLOSE));
              }
          })
        : null;
}
