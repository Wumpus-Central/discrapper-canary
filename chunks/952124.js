n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(100527),
    l = n(906732),
    c = n(14491),
    u = n(423086),
    d = n(299206),
    f = n(389052),
    _ = n(158508),
    p = n(785717),
    h = n(621853),
    m = n(475413),
    g = n(388032);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e) {
    let { user: t, guildId: n, viewProfileItem: E } = e,
        y = i.useRef(null),
        { trackUserProfileAction: O } = (0, p.KZ)(),
        { analyticsLocations: v, newestAnalyticsLocation: I } = (0, l.ZP)(s.Z.USER_PROFILE_OVERFLOW_MENU),
        T = (0, a.e7)([h.Z], () => h.Z.getUserProfile(t.id)),
        S = null == T ? void 0 : T.application,
        A = (0, f.Z)({
            user: t,
            guildId: n,
            location: I,
            color: "danger",
            onBlock: () =>
                O({
                    action: "BLOCK",
                    analyticsLocations: v,
                }),
            onUnblock: () =>
                O({
                    action: "UNBLOCK",
                    analyticsLocations: v,
                }),
        }),
        C = (0, _.Z)({
            user: t,
            guildId: n,
            location: I,
            onIgnore: () =>
                O({
                    action: "IGNORE",
                    analyticsLocations: v,
                }),
            onUnignore: () =>
                O({
                    action: "UNIGNORE",
                    analyticsLocations: v,
                }),
        }),
        N = (0, u.Z)({
            applicationId: null == S ? void 0 : S.id,
            user: t,
            guildId: n,
            onSubmit: () =>
                O({
                    action: "REPORT",
                    analyticsLocations: v,
                }),
            color: "danger",
        }),
        R = (0, d.Z)({
            id: null == S ? void 0 : S.id,
            label: g.intl.string(g.t["+NP/b2"]),
            onSuccess: () =>
                O({
                    action: "COPY_APP_ID",
                    analyticsLocations: v,
                }),
        }),
        P = [
            [E],
            [C, A, N],
            [
                (0, c.Z)({
                    application: S,
                    label: g.intl.string(g.t.WqhZss),
                    onSuccess: () =>
                        O({
                            action: "COPY_APP_LINK",
                            analyticsLocations: v,
                        }),
                }),
                R,
            ],
        ];
    return P.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(o.yRy, {
              targetElementRef: y,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(o.v2r, {
                      navId: "user-bot-profile-overflow-menu",
                      onSelect: void 0,
                      onClose: t,
                      "aria-label": g.intl.string(g.t.AXIHpV),
                      children: P.map((e, t) => (0, r.jsx)(o.kSQ, { children: e.map((e) => e) }, t)),
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      m.oY,
                      b(
                          {
                              ref: y,
                              action: "PRESS_OPTIONS",
                              icon: o.xhG,
                              tooltipText: g.intl.string(g.t["UKOtz+"]),
                          },
                          e,
                      ),
                  ),
          });
}
