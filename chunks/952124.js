r.d(n, {
    Z: function () {
        return E;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(100527),
    l = r(906732),
    u = r(14491),
    c = r(299206),
    d = r(389052),
    f = r(158508),
    _ = r(622724),
    h = r(785717),
    p = r(621853),
    m = r(475413),
    g = r(388032);
function E(e) {
    let { user: n, guildId: r, viewProfileItem: E } = e,
        { trackUserProfileAction: v } = (0, h.KZ)(),
        { analyticsLocations: I, newestAnalyticsLocation: T } = (0, l.ZP)(o.Z.USER_PROFILE_OVERFLOW_MENU),
        b = (0, a.e7)([p.Z], () => p.Z.getUserProfile(n.id)),
        y = null == b ? void 0 : b.application,
        S = (0, d.Z)({
            user: n,
            guildId: r,
            location: T,
            color: 'danger',
            onBlock: () =>
                v({
                    action: 'BLOCK',
                    analyticsLocations: I
                }),
            onUnblock: () =>
                v({
                    action: 'UNBLOCK',
                    analyticsLocations: I
                })
        }),
        A = (0, f.Z)({
            user: n,
            guildId: r,
            location: T,
            onIgnore: () =>
                v({
                    action: 'IGNORE',
                    analyticsLocations: I
                }),
            onUnignore: () =>
                v({
                    action: 'UNIGNORE',
                    analyticsLocations: I
                })
        }),
        N = (0, _.Z)({
            user: n,
            guildId: r,
            location: T,
            color: 'danger',
            onAction: () =>
                v({
                    action: 'REPORT',
                    analyticsLocations: I
                })
        }),
        C = (0, c.Z)({
            id: null == y ? void 0 : y.id,
            label: g.intl.string(g.t['+NP/b2']),
            onSuccess: () =>
                v({
                    action: 'COPY_APP_ID',
                    analyticsLocations: I
                })
        }),
        R = [
            [E],
            [A, S, N],
            [
                (0, u.Z)({
                    application: y,
                    label: g.intl.string(g.t.WqhZsr),
                    onSuccess: () =>
                        v({
                            action: 'COPY_APP_LINK',
                            analyticsLocations: I
                        })
                }),
                C
            ]
        ];
    return R.every((e) => e.every((e) => null == e))
        ? null
        : (0, i.jsx)(s.Popout, {
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, i.jsx)(s.Menu, {
                      navId: 'user-bot-profile-overflow-menu',
                      onSelect: void 0,
                      onClose: n,
                      'aria-label': g.intl.string(g.t.AXIHpa),
                      children: R.map((e, n) => (0, i.jsx)(s.MenuGroup, { children: e.map((e) => e) }, n))
                  });
              },
              children: (e) =>
                  (0, i.jsx)(m.oY, {
                      action: 'PRESS_OPTIONS',
                      icon: s.MoreHorizontalIcon,
                      tooltipText: g.intl.string(g.t.UKOtz8),
                      ...e
                  })
          });
}
