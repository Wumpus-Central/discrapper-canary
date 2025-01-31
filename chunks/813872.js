n.d(l, { Z: () => m });
var t = n(200651),
    i = n(192379),
    a = n(442837),
    r = n(481060),
    d = n(40851),
    o = n(189432),
    s = n(189357),
    u = n(944486),
    c = n(626135),
    Z = n(981631),
    g = n(176505),
    E = n(50493),
    h = n(388032);
function m(e) {
    let { userId: l, guildId: n, channelId: m, location: v, onAction: f } = e,
        P = i.useContext(c.AnalyticsContext),
        M = (0, d.Aq)(),
        C = (0, a.e7)([u.Z], () => (null != m ? m : u.Z.getChannelId(n, !0)), [m, n]),
        S = (0, s.m)(n);
    return null != n && S
        ? (0, t.jsx)(r.sNh, {
              id: 'mod-view',
              label: h.intl.string(h.t.kj3tz8),
              action: () => {
                  null == f || f(),
                      (0, o.r)(n, l, null != C ? C : g.oC.MEMBER_SAFETY, {
                          modViewPanel: E.k.INFO,
                          sourceLocation: null != v ? v : P.location
                      }),
                      M.dispatch(Z.CkL.POPOUT_CLOSE);
              }
          })
        : null;
}
