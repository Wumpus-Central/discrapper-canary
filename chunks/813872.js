n.d(t, { Z: () => P });
var l = n(255367),
    r = n(73800),
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
    Z = n(388032);
function P(e) {
    let { userId: t, guildId: n, channelId: P, location: p, onAction: y, appContext: j } = e,
        m = r.useContext(b.AnalyticsContext),
        h = (0, o.Aq)(),
        v = (0, i.e7)([f.Z], () => (null != P ? P : f.Z.getChannelId(n, !0)), [P, n]),
        _ = (0, i.e7)([d.ZP], () => (null == n ? null : d.ZP.getMember(n, t)), [n, t]),
        S = (0, s.m)(n);
    return null != n && null != _ && S
        ? (0, l.jsx)(a.sNh, {
              id: "mod-view",
              label: Z.intl.string(Z.t.kj3tz8),
              action: () => {
                  null == y || y(),
                      (0, u.i)(j),
                      (0, c.r)(n, t, null != v ? v : O.oC.MEMBER_SAFETY, {
                          modViewPanel: E.k.INFO,
                          sourceLocation: null != p ? p : m.location,
                      }),
                      h.dispatch(g.CkL.POPOUT_CLOSE);
              },
          })
        : null;
}
