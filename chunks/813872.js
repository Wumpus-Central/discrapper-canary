n.d(l, {
    Z: function () {
        return E;
    }
});
var t = n(200651),
    i = n(192379),
    a = n(442837),
    r = n(481060),
    u = n(40851),
    o = n(189432),
    d = n(189357),
    s = n(944486),
    c = n(626135),
    m = n(981631),
    Z = n(176505),
    g = n(50493),
    M = n(388032);
function E(e) {
    let { userId: l, guildId: n, channelId: E, location: v, onAction: f } = e,
        I = i.useContext(c.AnalyticsContext),
        h = (0, u.Aq)(),
        C = (0, a.e7)([s.Z], () => (null != E ? E : s.Z.getChannelId(n, !0)), [E, n]),
        P = (0, d.m)(n);
    return null != n && P
        ? (0, t.jsx)(r.MenuItem, {
              id: 'mod-view',
              label: M.intl.string(M.t.kj3tz8),
              action: () => {
                  null == f || f(),
                      (0, o.r)(n, l, null != C ? C : Z.oC.MEMBER_SAFETY, {
                          modViewPanel: g.k.INFO,
                          sourceLocation: null != v ? v : I.location
                      }),
                      h.dispatch(m.CkL.POPOUT_CLOSE);
              }
          })
        : null;
}
