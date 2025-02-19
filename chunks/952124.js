n.d(t, { Z: () => v });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(100527),
    s = n(906732),
    l = n(14491),
    c = n(299206),
    u = n(389052),
    d = n(158508),
    f = n(622724),
    p = n(785717),
    _ = n(621853),
    h = n(475413),
    m = n(388032);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function v(e) {
    let { user: t, guildId: n, viewProfileItem: g } = e,
        { trackUserProfileAction: v } = (0, p.KZ)(),
        { analyticsLocations: b, newestAnalyticsLocation: y } = (0, s.ZP)(a.Z.USER_PROFILE_OVERFLOW_MENU),
        O = (0, i.e7)([_.Z], () => _.Z.getUserProfile(t.id)),
        S = null == O ? void 0 : O.application,
        I = (0, u.Z)({
            user: t,
            guildId: n,
            location: y,
            color: 'danger',
            onBlock: () =>
                v({
                    action: 'BLOCK',
                    analyticsLocations: b
                }),
            onUnblock: () =>
                v({
                    action: 'UNBLOCK',
                    analyticsLocations: b
                })
        }),
        T = (0, d.Z)({
            user: t,
            guildId: n,
            location: y,
            onIgnore: () =>
                v({
                    action: 'IGNORE',
                    analyticsLocations: b
                }),
            onUnignore: () =>
                v({
                    action: 'UNIGNORE',
                    analyticsLocations: b
                })
        }),
        N = (0, f.Z)({
            user: t,
            guildId: n,
            location: y,
            color: 'danger',
            onAction: () =>
                v({
                    action: 'REPORT',
                    analyticsLocations: b
                })
        }),
        A = (0, c.Z)({
            id: null == S ? void 0 : S.id,
            label: m.NW.string(m.t['+NP/b2']),
            onSuccess: () =>
                v({
                    action: 'COPY_APP_ID',
                    analyticsLocations: b
                })
        }),
        C = [
            [g],
            [T, I, N],
            [
                (0, l.Z)({
                    application: S,
                    label: m.NW.string(m.t.WqhZsr),
                    onSuccess: () =>
                        v({
                            action: 'COPY_APP_LINK',
                            analyticsLocations: b
                        })
                }),
                A
            ]
        ];
    return C.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(o.yRy, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(o.v2r, {
                      navId: 'user-bot-profile-overflow-menu',
                      onSelect: void 0,
                      onClose: t,
                      'aria-label': m.NW.string(m.t.AXIHpa),
                      children: C.map((e, t) => (0, r.jsx)(o.kSQ, { children: e.map((e) => e) }, t))
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      h.oY,
                      E(
                          {
                              action: 'PRESS_OPTIONS',
                              icon: o.xhG,
                              tooltipText: m.NW.string(m.t.UKOtz8)
                          },
                          e
                      )
                  )
          });
}
