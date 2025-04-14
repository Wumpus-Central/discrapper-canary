n.d(t, { Z: () => O });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(100527),
    l = n(906732),
    c = n(279332),
    u = n(14491),
    d = n(299206),
    f = n(276022),
    _ = n(389052),
    p = n(158508),
    h = n(622724),
    m = n(785717),
    g = n(621853),
    E = n(475413),
    b = n(388032);
function y(e, t, n) {
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
function v(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function O(e) {
    let { user: t, guildId: n, viewProfileItem: y, onCloseProfile: O } = e,
        I = i.useRef(null),
        { trackUserProfileAction: S } = (0, m.KZ)(),
        { analyticsLocations: T, newestAnalyticsLocation: N } = (0, l.ZP)(s.Z.USER_PROFILE_OVERFLOW_MENU),
        A = c.J.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled,
        C = (0, o.e7)([g.Z], () => g.Z.getUserProfile(t.id)),
        R = null == C ? void 0 : C.application,
        P = (0, f.Z)({
            user: t,
            application: null != R ? R : void 0,
            guildId: n,
            onItemClick: () => {
                S({
                    action: 'MANAGE_APP',
                    analyticsLocations: T
                }),
                    null == O || O();
            }
        }),
        w = (0, _.Z)({
            user: t,
            guildId: n,
            location: N,
            color: 'danger',
            onBlock: () =>
                S({
                    action: 'BLOCK',
                    analyticsLocations: T
                }),
            onUnblock: () =>
                S({
                    action: 'UNBLOCK',
                    analyticsLocations: T
                })
        }),
        D = (0, p.Z)({
            user: t,
            guildId: n,
            location: N,
            onIgnore: () =>
                S({
                    action: 'IGNORE',
                    analyticsLocations: T
                }),
            onUnignore: () =>
                S({
                    action: 'UNIGNORE',
                    analyticsLocations: T
                })
        }),
        L = (0, h.Z)({
            user: t,
            guildId: n,
            location: N,
            color: 'danger',
            onAction: () =>
                S({
                    action: 'REPORT',
                    analyticsLocations: T
                })
        }),
        x = (0, d.Z)({
            id: null == R ? void 0 : R.id,
            label: b.NW.string(b.t['+NP/b2']),
            onSuccess: () =>
                S({
                    action: 'COPY_APP_ID',
                    analyticsLocations: T
                })
        }),
        M = [
            [y],
            A ? [P] : [],
            [D, w, L],
            [
                (0, u.Z)({
                    application: R,
                    label: b.NW.string(b.t.WqhZsr),
                    onSuccess: () =>
                        S({
                            action: 'COPY_APP_LINK',
                            analyticsLocations: T
                        })
                }),
                x
            ]
        ];
    return M.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(a.yRy, {
              targetElementRef: I,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(a.v2r, {
                      navId: 'user-bot-profile-overflow-menu',
                      onSelect: void 0,
                      onClose: t,
                      'aria-label': b.NW.string(b.t.AXIHpa),
                      children: M.map((e, t) => (0, r.jsx)(a.kSQ, { children: e.map((e) => e) }, t))
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      E.oY,
                      v(
                          {
                              ref: I,
                              action: 'PRESS_OPTIONS',
                              icon: a.xhG,
                              tooltipText: b.NW.string(b.t.UKOtz8)
                          },
                          e
                      )
                  )
          });
}
