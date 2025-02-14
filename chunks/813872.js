t.d(l, { Z: () => h });
var n = t(200651),
    i = t(192379),
    a = t(442837),
    r = t(481060),
    d = t(40851),
    o = t(549879),
    s = t(189432),
    u = t(189357),
    c = t(944486),
    Z = t(626135),
    g = t(981631),
    f = t(176505),
    E = t(50493),
    m = t(388032);
function h(e) {
    let { userId: l, guildId: t, channelId: h, location: v, onAction: b, appContext: C } = e,
        S = i.useContext(Z.AnalyticsContext),
        x = (0, d.Aq)(),
        M = (0, a.e7)([c.Z], () => (null != h ? h : c.Z.getChannelId(t, !0)), [h, t]),
        N = (0, u.m)(t);
    return null != t && N
        ? (0, n.jsx)(r.sNh, {
              id: 'mod-view',
              label: m.intl.string(m.t.kj3tz8),
              action: () => {
                  null == b || b(),
                      (0, o.i)(C),
                      (0, s.r)(t, l, null != M ? M : f.oC.MEMBER_SAFETY, {
                          modViewPanel: E.k.INFO,
                          sourceLocation: null != v ? v : S.location
                      }),
                      x.dispatch(g.CkL.POPOUT_CLOSE);
              }
          })
        : null;
}
