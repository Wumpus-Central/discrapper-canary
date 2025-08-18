n.d(t, { Z: () => h });
var l = n(951288),
    i = n(647438),
    r = n(442837),
    o = n(481060),
    a = n(40851),
    s = n(549879),
    u = n(189432),
    d = n(189357),
    c = n(271383),
    g = n(944486),
    Z = n(626135),
    f = n(981631),
    b = n(176505),
    m = n(50493),
    O = n(388032);
function h(e) {
    let { userId: t, guildId: n, channelId: h, location: E, onAction: j, appContext: v } = e,
        P = i.useContext(Z.AnalyticsContext),
        p = (0, a.Aq)(),
        y = (0, r.e7)([g.Z], () => (null != h ? h : g.Z.getChannelId(n, !0)), [h, n]),
        S = (0, r.e7)([c.ZP], () => (null == n ? null : c.ZP.getMember(n, t)), [n, t]),
        C = (0, d.m)(n);
    return null != n && null != S && C
        ? (0, l.jsx)(o.sNh, {
              id: "mod-view",
              label: O.intl.string(O.t.kj3tz8),
              action: () => {
                  null == j || j(),
                      (0, s.i)(v),
                      (0, u.r)(n, t, null != y ? y : b.oC.MEMBER_SAFETY, {
                          modViewPanel: m.k.INFO,
                          sourceLocation: null != E ? E : P.location,
                      }),
                      p.dispatch(f.CkL.POPOUT_CLOSE);
              },
          })
        : null;
}
