n.d(t, { Z: () => p });
var l = n(951288),
    r = n(647438),
    i = n(442837),
    a = n(481060),
    o = n(40851),
    u = n(549879),
    c = n(189432),
    s = n(189357),
    d = n(271383),
    f = n(944486),
    b = n(626135),
    g = n(981631),
    O = n(176505),
    E = n(50493),
    y = n(388032);
function p(e) {
    let { userId: t, guildId: n, channelId: p, location: Z, onAction: P, appContext: j } = e,
        m = r.useContext(b.AnalyticsContext),
        v = (0, o.Aq)(),
        h = (0, i.e7)([f.Z], () => (null != p ? p : f.Z.getChannelId(n, !0)), [p, n]),
        _ = (0, i.e7)([d.ZP], () => (null == n ? null : d.ZP.getMember(n, t)), [n, t]),
        S = (0, s.m)(n);
    return null != n && null != _ && S
        ? (0, l.jsx)(a.sNh, {
              id: "mod-view",
              label: y.intl.string(y.t.kj3tz8),
              action: () => {
                  null == P || P(),
                      (0, u.i)(j),
                      (0, c.r)(n, t, null != h ? h : O.oC.MEMBER_SAFETY, {
                          modViewPanel: E.k.INFO,
                          sourceLocation: null != Z ? Z : m.location,
                      }),
                      v.dispatch(g.CkL.POPOUT_CLOSE);
              },
          })
        : null;
}
