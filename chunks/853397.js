"use strict";
n.d(t, { Zt: () => g, yo: () => A });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(793574),
    o = n(688810),
    l = n(239211),
    u = n(34245),
    c = n(399476),
    d = n(889460),
    _ = n(865784),
    f = n(183555),
    p = n(993401),
    h = n(518477),
    m = n(985018);
function E(e) {
    let { user: t, guildId: n, viewProfileItem: i, appContext: p, popoutTargetRef: E, children: g } = e,
        { trackUserProfileAction: A, context: I } = (0, f.NJ)(),
        { analyticsLocations: T, newestAnalyticsLocation: S } = (0, o.Ay)(a.A.USER_PROFILE_OVERFLOW_MENU),
        y = null != I && I.showGuildProfile ? n : void 0,
        v = {
            action: h.pt.PRESS_OPTIONS,
            icon: s.jNK,
            tooltipText: m.intl.string(m.t["UKOtz+"]),
            "aria-label": m.intl.string(m.t["UKOtz+"]),
        },
        N = (0, d.A)({
            user: t,
            guildId: n,
            onAction: () => A({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: T }),
        }),
        C = (0, l.A)({
            user: t,
            guildId: n,
            location: S,
            appContext: p,
            onBlock: () => A({ action: "BLOCK", analyticsLocations: T }),
            onIgnore: () => A({ action: "IGNORE", analyticsLocations: T }),
            onUnblock: () => A({ action: "UNBLOCK", analyticsLocations: T }),
        }),
        R = [
            [i, N],
            [
                (0, c.A)({
                    user: t,
                    guildId: n,
                    location: S,
                    appContext: p,
                    onBlock: () => A({ action: "BLOCK", analyticsLocations: T }),
                    onIgnore: () => A({ action: "IGNORE", analyticsLocations: T }),
                    onUnignore: () => A({ action: "UNIGNORE", analyticsLocations: T }),
                }),
                C,
                (0, _.A)({
                    user: t,
                    guildId: n,
                    location: S,
                    appContext: p,
                    color: "danger",
                    onAction: () => A({ action: "REPORT", analyticsLocations: T }),
                }),
                (0, _.M)({
                    user: t,
                    guildId: n,
                    location: S,
                    appContext: p,
                    color: "danger",
                    onAction: () => A({ action: "REPORT", analyticsLocations: T }),
                }),
            ],
            [(0, u.A)({ user: t, guildId: y, onSuccess: () => A({ action: "COPY_USER_ID", analyticsLocations: T }) })],
        ];
    return R.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(o.f5, {
              value: T,
              children: (0, r.jsx)(s.YNO, {
                  targetElementRef: E,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsx)(s.W1t, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": m.intl.string(m.t.AXIHpV),
                          children: R.map((e, t) => (0, r.jsx)(s.rXV, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => g({ ...e, ...v }),
              }),
          });
}
function g(e) {
    let t = i.useRef(null);
    return (0, r.jsx)(E, { ...e, popoutTargetRef: t, children: (e) => (0, r.jsx)(p.q3, { buttonRef: t, ...e }) });
}
function A(e) {
    let t = i.useRef(null);
    return (0, r.jsx)(E, { ...e, popoutTargetRef: t, children: (e) => (0, r.jsx)(p.br, { buttonRef: t, ...e }) });
}
