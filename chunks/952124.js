r.d(n, {
    Z: function () {
        return E;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(481060),
    s = r(100527),
    l = r(906732),
    u = r(14491),
    c = r(299206),
    d = r(389052),
    f = r(158508),
    p = r(622724),
    h = r(785717),
    _ = r(621853),
    m = r(475413),
    g = r(388032);
function E(e) {
    let { user: n, guildId: r, viewProfileItem: E } = e,
        { trackUserProfileAction: v } = (0, h.KZ)(),
        { analyticsLocations: y, newestAnalyticsLocation: b } = (0, l.ZP)(s.Z.USER_PROFILE_OVERFLOW_MENU),
        I = (0, a.e7)([_.Z], () => _.Z.getUserProfile(n.id)),
        T = null == I ? void 0 : I.application,
        S = (0, d.Z)({
            user: n,
            guildId: r,
            location: b,
            color: 'danger',
            onBlock: () =>
                v({
                    action: 'BLOCK',
                    analyticsLocations: y
                }),
            onUnblock: () =>
                v({
                    action: 'UNBLOCK',
                    analyticsLocations: y
                })
        }),
        A = (0, f.Z)({
            user: n,
            guildId: r,
            location: b,
            onIgnore: () =>
                v({
                    action: 'IGNORE',
                    analyticsLocations: y
                }),
            onUnignore: () =>
                v({
                    action: 'UNIGNORE',
                    analyticsLocations: y
                })
        }),
        C = (0, p.Z)({
            user: n,
            guildId: r,
            location: b,
            color: 'danger',
            onAction: () =>
                v({
                    action: 'REPORT',
                    analyticsLocations: y
                })
        }),
        N = (0, c.Z)({
            id: null == T ? void 0 : T.id,
            label: g.intl.string(g.t['+NP/b2']),
            onSuccess: () =>
                v({
                    action: 'COPY_APP_ID',
                    analyticsLocations: y
                })
        }),
        R = [
            [E],
            [A, S, C],
            [
                (0, u.Z)({
                    application: T,
                    label: g.intl.string(g.t.WqhZsr),
                    onSuccess: () =>
                        v({
                            action: 'COPY_APP_LINK',
                            analyticsLocations: y
                        })
                }),
                N
            ]
        ];
    return R.every((e) => e.every((e) => null == e))
        ? null
        : (0, i.jsx)(o.Popout, {
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, i.jsx)(o.Menu, {
                      navId: 'user-bot-profile-overflow-menu',
                      onSelect: void 0,
                      onClose: n,
                      'aria-label': g.intl.string(g.t.AXIHpa),
                      children: R.map((e, n) => (0, i.jsx)(o.MenuGroup, { children: e.map((e) => e) }, n))
                  });
              },
              children: (e) =>
                  (0, i.jsx)(m.oY, {
                      action: 'PRESS_OPTIONS',
                      icon: o.MoreHorizontalIcon,
                      tooltipText: g.intl.string(g.t.UKOtz8),
                      ...e
                  })
          });
}
