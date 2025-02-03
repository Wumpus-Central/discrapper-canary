n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(100527),
    o = n(906732),
    l = n(14491),
    u = n(299206),
    c = n(389052),
    d = n(158508),
    f = n(622724),
    _ = n(785717),
    p = n(621853),
    h = n(475413),
    m = n(388032);
function g(e) {
    let { user: t, guildId: n, viewProfileItem: g } = e,
        { trackUserProfileAction: E } = (0, _.KZ)(),
        { analyticsLocations: v, newestAnalyticsLocation: y } = (0, o.ZP)(s.Z.USER_PROFILE_OVERFLOW_MENU),
        I = (0, r.e7)([p.Z], () => p.Z.getUserProfile(t.id)),
        b = null == I ? void 0 : I.application,
        T = (0, c.Z)({
            user: t,
            guildId: n,
            location: y,
            color: 'danger',
            onBlock: () =>
                E({
                    action: 'BLOCK',
                    analyticsLocations: v
                }),
            onUnblock: () =>
                E({
                    action: 'UNBLOCK',
                    analyticsLocations: v
                })
        }),
        S = (0, d.Z)({
            user: t,
            guildId: n,
            location: y,
            onIgnore: () =>
                E({
                    action: 'IGNORE',
                    analyticsLocations: v
                }),
            onUnignore: () =>
                E({
                    action: 'UNIGNORE',
                    analyticsLocations: v
                })
        }),
        A = (0, f.Z)({
            user: t,
            guildId: n,
            location: y,
            color: 'danger',
            onAction: () =>
                E({
                    action: 'REPORT',
                    analyticsLocations: v
                })
        }),
        N = (0, u.Z)({
            id: null == b ? void 0 : b.id,
            label: m.intl.string(m.t['+NP/b2']),
            onSuccess: () =>
                E({
                    action: 'COPY_APP_ID',
                    analyticsLocations: v
                })
        }),
        C = [
            [g],
            [S, T, A],
            [
                (0, l.Z)({
                    application: b,
                    label: m.intl.string(m.t.WqhZsr),
                    onSuccess: () =>
                        E({
                            action: 'COPY_APP_LINK',
                            analyticsLocations: v
                        })
                }),
                N
            ]
        ];
    return C.every((e) => e.every((e) => null == e))
        ? null
        : (0, i.jsx)(a.yRy, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(a.v2r, {
                      navId: 'user-bot-profile-overflow-menu',
                      onSelect: void 0,
                      onClose: t,
                      'aria-label': m.intl.string(m.t.AXIHpa),
                      children: C.map((e, t) => (0, i.jsx)(a.kSQ, { children: e.map((e) => e) }, t))
                  });
              },
              children: (e) =>
                  (0, i.jsx)(h.oY, {
                      action: 'PRESS_OPTIONS',
                      icon: a.xhG,
                      tooltipText: m.intl.string(m.t.UKOtz8),
                      ...e
                  })
          });
}
