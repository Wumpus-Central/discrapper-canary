n.d(t, { Z: () => Z });
var l = n(200651),
    i = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(40851),
    s = n(549879),
    u = n(189432),
    c = n(189357),
    d = n(944486),
    g = n(626135),
    f = n(981631),
    b = n(176505),
    m = n(50493),
    O = n(388032);
function Z(e) {
    let { userId: t, guildId: n, channelId: Z, location: v, onAction: E, appContext: y } = e,
        P = i.useContext(g.AnalyticsContext),
        h = (0, o.Aq)(),
        p = (0, r.e7)([d.Z], () => (null != Z ? Z : d.Z.getChannelId(n, !0)), [Z, n]),
        j = (0, c.m)(n);
    return null != n && j
        ? (0, l.jsx)(a.sNh, {
              id: 'mod-view',
              label: O.intl.string(O.t.kj3tz8),
              action: () => {
                  null == E || E(),
                      (0, s.i)(y),
                      (0, u.r)(n, t, null != p ? p : b.oC.MEMBER_SAFETY, {
                          modViewPanel: m.k.INFO,
                          sourceLocation: null != v ? v : P.location
                      }),
                      h.dispatch(f.CkL.POPOUT_CLOSE);
              }
          })
        : null;
}
