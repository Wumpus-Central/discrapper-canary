n.d(t, { Z: () => p });
var l = n(951288),
    r = n(647438),
    i = n(442837),
    a = n(481060),
    o = n(189432),
    u = n(189357),
    c = n(728285),
    s = n(887413),
    d = n(271383),
    f = n(944486),
    b = n(626135),
    g = n(981631),
    O = n(176505),
    E = n(50493),
    y = n(388032);
function p(e) {
    let { userId: t, guildId: n, channelId: p, location: Z, onAction: P, appContext: m } = e,
        j = r.useContext(b.AnalyticsContext),
        v = (0, c.Aq)(),
        h = (0, i.e7)([f.Z], () => (null != p ? p : f.Z.getChannelId(n, !0)), [p, n]),
        _ = (0, i.e7)([d.ZP], () => (null == n ? null : d.ZP.getMember(n, t)), [n, t]),
        S = (0, u.m)(n);
    return null != n && null != _ && S
        ? (0, l.jsx)(a.sNh, {
              id: "mod-view",
              label: y.intl.string(y.t.kj3tz8),
              action: () => {
                  null == P || P(),
                      (0, s.i)(m),
                      (0, o.r)(n, t, null != h ? h : O.oC.MEMBER_SAFETY, {
                          modViewPanel: E.k.INFO,
                          sourceLocation: null != Z ? Z : j.location,
                      }),
                      v.dispatch(g.CkL.POPOUT_CLOSE);
              },
          })
        : null;
}
