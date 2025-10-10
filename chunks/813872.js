n.d(t, { Z: () => v });
var l = n(951288),
    r = n(647438),
    i = n(442837),
    o = n(481060),
    a = n(189432),
    u = n(189357),
    c = n(728285),
    s = n(887413),
    d = n(271383),
    f = n(944486),
    b = n(626135),
    g = n(981631),
    O = n(176505),
    y = n(50493),
    Z = n(388032);
function v(e) {
    let { userId: t, guildId: n, channelId: v, location: j, onAction: m, appContext: E } = e,
        p = r.useContext(b.AnalyticsContext),
        S = (0, c.Aq)(),
        h = (0, i.e7)([f.Z], () => (null != v ? v : f.Z.getChannelId(n, !0)), [v, n]),
        _ = (0, i.e7)([d.ZP], () => (null == n ? null : d.ZP.getMember(n, t)), [n, t]),
        P = (0, u.m)(n);
    return null != n && null != _ && P
        ? (0, l.jsx)(o.sNh, {
              id: "mod-view",
              label: Z.intl.string(Z.t.kj3tz8),
              action: () => {
                  null == m || m(),
                      (0, s.i)(E),
                      (0, a.r)(n, t, null != h ? h : O.oC.MEMBER_SAFETY, {
                          modViewPanel: y.k.INFO,
                          sourceLocation: null != j ? j : p.location,
                      }),
                      S.dispatch(g.CkL.POPOUT_CLOSE);
              },
          })
        : null;
}
