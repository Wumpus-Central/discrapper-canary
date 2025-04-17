n.d(t, { Z: () => _ });
var r = n(200651),
    l = n(192379),
    i = n(442837),
    o = n(481060),
    a = n(40851),
    u = n(549879),
    c = n(189432),
    s = n(189357),
    d = n(944486),
    f = n(626135),
    g = n(981631),
    b = n(176505),
    O = n(50493),
    E = n(388032);
function _(e) {
    let { userId: t, guildId: n, channelId: _, location: y, onAction: v, appContext: h } = e,
        Z = l.useContext(f.AnalyticsContext),
        p = (0, a.Aq)(),
        m = (0, i.e7)([d.Z], () => (null != _ ? _ : d.Z.getChannelId(n, !0)), [_, n]),
        S = (0, s.m)(n);
    return null != n && S
        ? (0, r.jsx)(o.sNh, {
              id: 'mod-view',
              label: E.NW.string(E.t.kj3tz8),
              action: () => {
                  null == v || v(),
                      (0, u.i)(h),
                      (0, c.r)(n, t, null != m ? m : b.oC.MEMBER_SAFETY, {
                          modViewPanel: O.k.INFO,
                          sourceLocation: null != y ? y : Z.location
                      }),
                      p.dispatch(g.CkL.POPOUT_CLOSE);
              }
          })
        : null;
}
