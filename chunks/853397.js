"use strict";
n.d(t, { Zt: () => E, yo: () => A });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(793574),
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
function g(e) {
    let { user: t, guildId: n, viewProfileItem: i, appContext: p, popoutTargetRef: g, children: E } = e,
        { trackUserProfileAction: A, context: I } = (0, f.NJ)(),
        { analyticsLocations: T, newestAnalyticsLocation: y } = (0, o.Ay)(s.A.USER_PROFILE_OVERFLOW_MENU),
        S = null != I && I.showGuildProfile ? n : void 0,
        v = {
            action: h.pt.PRESS_OPTIONS,
            icon: a.jNK,
            tooltipText: m.intl.string(m.t["UKOtz+"]),
            "aria-label": m.intl.string(m.t["UKOtz+"]),
        },
        C = (0, d.A)({
            user: t,
            guildId: n,
            onAction: () => A({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: T }),
        }),
        b = (0, l.A)({
            user: t,
            guildId: n,
            location: y,
            color: "danger",
            appContext: p,
            onBlock: () => A({ action: "BLOCK", analyticsLocations: T }),
            onIgnore: () => A({ action: "IGNORE", analyticsLocations: T }),
            onUnblock: () => A({ action: "UNBLOCK", analyticsLocations: T }),
        }),
        N = [
            [i, C],
            [
                (0, c.A)({
                    user: t,
                    guildId: n,
                    location: y,
                    appContext: p,
                    onBlock: () => A({ action: "BLOCK", analyticsLocations: T }),
                    onIgnore: () => A({ action: "IGNORE", analyticsLocations: T }),
                    onUnignore: () => A({ action: "UNIGNORE", analyticsLocations: T }),
                }),
                b,
                (0, _.A)({
                    user: t,
                    guildId: n,
                    location: y,
                    appContext: p,
                    color: "danger",
                    onAction: () => A({ action: "REPORT", analyticsLocations: T }),
                }),
                (0, _.M)({
                    user: t,
                    guildId: n,
                    location: y,
                    appContext: p,
                    color: "danger",
                    onAction: () => A({ action: "REPORT", analyticsLocations: T }),
                }),
            ],
            [(0, u.A)({ user: t, guildId: S, onSuccess: () => A({ action: "COPY_USER_ID", analyticsLocations: T }) })],
        ];
    return N.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(o.f5, {
              value: T,
              children: (0, r.jsx)(a.YNO, {
                  targetElementRef: g,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsx)(a.W1t, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": m.intl.string(m.t.AXIHpV),
                          children: N.map((e, t) => (0, r.jsx)(a.rXV, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => E({ ...e, ...v }),
              }),
          });
}
function E(e) {
    let t = i.useRef(null);
    return (0, r.jsx)(g, { ...e, popoutTargetRef: t, children: (e) => (0, r.jsx)(p.q3, { buttonRef: t, ...e }) });
}
function A(e) {
    let t = i.useRef(null);
    return (0, r.jsx)(g, { ...e, popoutTargetRef: t, children: (e) => (0, r.jsx)(p.br, { buttonRef: t, ...e }) });
}
