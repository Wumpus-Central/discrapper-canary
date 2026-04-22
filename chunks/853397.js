n.d(t, { Zt: () => R, yo: () => v });
var l = n(627968),
    i = n(64700),
    r = n(365199),
    a = n(265872),
    s = n(861672),
    o = n(477782),
    c = n(793574),
    u = n(688810),
    d = n(239211),
    m = n(34245),
    f = n(399476),
    x = n(889460),
    A = n(865784),
    g = n(183555),
    E = n(993401),
    p = n(518477),
    h = n(985018);
function N(e) {
    let { user: t, guildId: n, viewProfileItem: i, appContext: E, popoutTargetRef: N, children: R } = e,
        { trackUserProfileAction: v } = (0, g.NJ)(),
        { analyticsLocations: b, newestAnalyticsLocation: j } = (0, u.Ay)(c.A.USER_PROFILE_OVERFLOW_MENU),
        I = {
            action: p.pt.PRESS_OPTIONS,
            icon: r.j,
            tooltipText: h.intl.string(h.t["UKOtz+"]),
            "aria-label": h.intl.string(h.t["UKOtz+"]),
        },
        _ = (0, x.A)({
            user: t,
            guildId: n,
            onAction: () => v({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: b }),
        }),
        y = (0, d.A)({
            user: t,
            guildId: n,
            location: j,
            appContext: E,
            onBlock: () => v({ action: "BLOCK", analyticsLocations: b }),
            onIgnore: () => v({ action: "IGNORE", analyticsLocations: b }),
            onUnblock: () => v({ action: "UNBLOCK", analyticsLocations: b }),
        }),
        C = [
            [i, _],
            [
                (0, f.A)({
                    user: t,
                    guildId: n,
                    location: j,
                    appContext: E,
                    onBlock: () => v({ action: "BLOCK", analyticsLocations: b }),
                    onIgnore: () => v({ action: "IGNORE", analyticsLocations: b }),
                    onUnignore: () => v({ action: "UNIGNORE", analyticsLocations: b }),
                }),
                y,
                (0, A.A)({
                    user: t,
                    guildId: n,
                    location: j,
                    appContext: E,
                    color: "danger",
                    onAction: () => v({ action: "REPORT", analyticsLocations: b }),
                }),
                (0, A.M)({
                    user: t,
                    guildId: n,
                    location: j,
                    appContext: E,
                    color: "danger",
                    onAction: () => v({ action: "REPORT", analyticsLocations: b }),
                }),
            ],
            [(0, m.A)({ user: t, guildId: n, onSuccess: () => v({ action: "COPY_USER_ID", analyticsLocations: b }) })],
        ];
    return C.every((e) => e.every((e) => null == e))
        ? null
        : (0, l.jsx)(u.f5, {
              value: b,
              children: (0, l.jsx)(a.Y, {
                  targetElementRef: N,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, l.jsx)(s.W, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": h.intl.string(h.t.AXIHpV),
                          children: C.map((e, t) => (0, l.jsx)(o.rX, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => R({ ...e, ...I }),
              }),
          });
}
function R(e) {
    let t = i.useRef(null);
    return (0, l.jsx)(N, { ...e, popoutTargetRef: t, children: (e) => (0, l.jsx)(E.q3, { buttonRef: t, ...e }) });
}
function v(e) {
    let t = i.useRef(null);
    return (0, l.jsx)(N, { ...e, popoutTargetRef: t, children: (e) => (0, l.jsx)(E.br, { buttonRef: t, ...e }) });
}
