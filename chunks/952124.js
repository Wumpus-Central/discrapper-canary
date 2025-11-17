n.d(t, { Z: () => v });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(100527),
    l = n(906732),
    c = n(279332),
    u = n(14491),
    d = n(423086),
    f = n(299206),
    _ = n(276022),
    p = n(389052),
    h = n(158508),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e) {
    let { user: t, guildId: n, viewProfileItem: y, onCloseProfile: v } = e,
        I = i.useRef(null),
        { trackUserProfileAction: T } = (0, m.KZ)(),
        { analyticsLocations: S, newestAnalyticsLocation: A } = (0, l.ZP)(s.Z.USER_PROFILE_OVERFLOW_MENU),
        C = c.J.useExperiment({ location: "UserSettingsAuthedApps" }, { autoTrackExposure: !0 }).enabled,
        N = (0, a.e7)([g.Z], () => g.Z.getUserProfile(t.id)),
        R = null == N ? void 0 : N.application,
        P = (0, _.Z)({
            user: t,
            application: null != R ? R : void 0,
            guildId: n,
            onItemClick: () => {
                T({
                    action: "MANAGE_APP",
                    analyticsLocations: S,
                }),
                    null == v || v();
            },
        }),
        D = (0, p.Z)({
            user: t,
            guildId: n,
            location: A,
            color: "danger",
            onBlock: () =>
                T({
                    action: "BLOCK",
                    analyticsLocations: S,
                }),
            onUnblock: () =>
                T({
                    action: "UNBLOCK",
                    analyticsLocations: S,
                }),
        }),
        w = (0, h.Z)({
            user: t,
            guildId: n,
            location: A,
            onIgnore: () =>
                T({
                    action: "IGNORE",
                    analyticsLocations: S,
                }),
            onUnignore: () =>
                T({
                    action: "UNIGNORE",
                    analyticsLocations: S,
                }),
        }),
        x = (0, d.Z)({
            applicationId: null == R ? void 0 : R.id,
            user: t,
            guildId: n,
            onSubmit: () =>
                T({
                    action: "REPORT",
                    analyticsLocations: S,
                }),
            color: "danger",
        }),
        L = (0, f.Z)({
            id: null == R ? void 0 : R.id,
            label: b.intl.string(b.t["+NP/b2"]),
            onSuccess: () =>
                T({
                    action: "COPY_APP_ID",
                    analyticsLocations: S,
                }),
        }),
        M = [
            [y],
            C ? [P] : [],
            [w, D, x],
            [
                (0, u.Z)({
                    application: R,
                    label: b.intl.string(b.t.WqhZss),
                    onSuccess: () =>
                        T({
                            action: "COPY_APP_LINK",
                            analyticsLocations: S,
                        }),
                }),
                L,
            ],
        ];
    return M.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(o.yRy, {
              targetElementRef: I,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(o.v2r, {
                      navId: "user-bot-profile-overflow-menu",
                      onSelect: void 0,
                      onClose: t,
                      "aria-label": b.intl.string(b.t.AXIHpV),
                      children: M.map((e, t) => (0, r.jsx)(o.kSQ, { children: e.map((e) => e) }, t)),
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      E.oY,
                      O(
                          {
                              ref: I,
                              action: "PRESS_OPTIONS",
                              icon: o.xhG,
                              tooltipText: b.intl.string(b.t["UKOtz+"]),
                          },
                          e,
                      ),
                  ),
          });
}
