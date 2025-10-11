n.d(t, { Z: () => h });
var l = n(951288),
    i = n(647438),
    r = n(442837),
    o = n(481060),
    a = n(189432),
    s = n(189357),
    u = n(728285),
    d = n(887413),
    c = n(271383),
    g = n(944486),
    Z = n(626135),
    f = n(981631),
    b = n(176505),
    m = n(50493),
    O = n(388032);
function h(e) {
    let { userId: t, guildId: n, channelId: h, location: v, onAction: E, appContext: j } = e,
        P = i.useContext(Z.AnalyticsContext),
        p = (0, u.Aq)(),
        y = (0, r.e7)([g.Z], () => (null != h ? h : g.Z.getChannelId(n, !0)), [h, n]),
        S = (0, r.e7)([c.ZP], () => (null == n ? null : c.ZP.getMember(n, t)), [n, t]),
        C = (0, s.m)(n);
    return null != n && null != S && C
        ? (0, l.jsx)(o.sNh, {
              id: "mod-view",
              label: O.intl.string(O.t.kj3tz8),
              action: () => {
                  null == E || E(),
                      (0, d.i)(j),
                      (0, a.r)(n, t, null != y ? y : b.oC.MEMBER_SAFETY, {
                          modViewPanel: m.k.INFO,
                          sourceLocation: null != v ? v : P.location,
                      }),
                      p.dispatch(f.CkL.POPOUT_CLOSE);
              },
          })
        : null;
}
