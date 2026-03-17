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
        { trackUserProfileAction: A } = (0, f.NJ)(),
        { analyticsLocations: I, newestAnalyticsLocation: T } = (0, o.Ay)(a.A.USER_PROFILE_OVERFLOW_MENU),
        S = {
            action: h.pt.PRESS_OPTIONS,
            icon: s.jNK,
            tooltipText: m.intl.string(m.t["UKOtz+"]),
            "aria-label": m.intl.string(m.t["UKOtz+"]),
        },
        y = (0, d.A)({
            user: t,
            guildId: n,
            onAction: () => A({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: I }),
        }),
        v = (0, l.A)({
            user: t,
            guildId: n,
            location: T,
            appContext: p,
            onBlock: () => A({ action: "BLOCK", analyticsLocations: I }),
            onIgnore: () => A({ action: "IGNORE", analyticsLocations: I }),
            onUnblock: () => A({ action: "UNBLOCK", analyticsLocations: I }),
        }),
        N = [
            [i, y],
            [
                (0, c.A)({
                    user: t,
                    guildId: n,
                    location: T,
                    appContext: p,
                    onBlock: () => A({ action: "BLOCK", analyticsLocations: I }),
                    onIgnore: () => A({ action: "IGNORE", analyticsLocations: I }),
                    onUnignore: () => A({ action: "UNIGNORE", analyticsLocations: I }),
                }),
                v,
                (0, _.A)({
                    user: t,
                    guildId: n,
                    location: T,
                    appContext: p,
                    color: "danger",
                    onAction: () => A({ action: "REPORT", analyticsLocations: I }),
                }),
                (0, _.M)({
                    user: t,
                    guildId: n,
                    location: T,
                    appContext: p,
                    color: "danger",
                    onAction: () => A({ action: "REPORT", analyticsLocations: I }),
                }),
            ],
            [(0, u.A)({ user: t, guildId: n, onSuccess: () => A({ action: "COPY_USER_ID", analyticsLocations: I }) })],
        ];
    return N.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(o.f5, {
              value: I,
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
                          children: N.map((e, t) => (0, r.jsx)(s.rXV, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => g({ ...e, ...S }),
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
