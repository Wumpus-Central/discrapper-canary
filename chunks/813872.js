n.d(t, { Z: () => j });
var l = n(951288),
    r = n(647438),
    i = n(442837),
    o = n(481060),
    a = n(40851),
    u = n(549879),
    c = n(189432),
    s = n(189357),
    d = n(271383),
    f = n(944486),
    b = n(626135),
    g = n(981631),
    O = n(176505),
    y = n(50493),
    Z = n(388032);
function j(e) {
    let { userId: t, guildId: n, channelId: j, location: v, onAction: m, appContext: E } = e,
        p = r.useContext(b.AnalyticsContext),
        S = (0, a.Aq)(),
        _ = (0, i.e7)([f.Z], () => (null != j ? j : f.Z.getChannelId(n, !0)), [j, n]),
        h = (0, i.e7)([d.ZP], () => (null == n ? null : d.ZP.getMember(n, t)), [n, t]),
        P = (0, s.m)(n);
    return null != n && null != h && P
        ? (0, l.jsx)(o.sNh, {
              id: "mod-view",
              label: Z.intl.string(Z.t.kj3tz8),
              action: () => {
                  null == m || m(),
                      (0, u.i)(E),
                      (0, c.r)(n, t, null != _ ? _ : O.oC.MEMBER_SAFETY, {
                          modViewPanel: y.k.INFO,
                          sourceLocation: null != v ? v : p.location,
                      }),
                      S.dispatch(g.CkL.POPOUT_CLOSE);
              },
          })
        : null;
}
