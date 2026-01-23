n.d(t, {
    Zt: () => v,
    yo: () => A,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(793574),
    o = n(688810),
    l = n(239211),
    c = n(34245),
    u = n(399476),
    d = n(889460),
    f = n(865784),
    p = n(183555),
    _ = n(993401),
    h = n(518477),
    m = n(985018);

function g(e, t, n) {
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

function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}

function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function O(e) {
    let { user: t, guildId: n, viewProfileItem: i, appContext: _, popoutTargetRef: g, children: y } = e,
        { trackUserProfileAction: b, context: O } = (0, p.NJ)(),
        { analyticsLocations: v, newestAnalyticsLocation: A } = (0, o.Ay)(s.A.USER_PROFILE_OVERFLOW_MENU),
        I = null != O && O.showGuildProfile ? n : void 0,
        S = {
            action: h.pt.PRESS_OPTIONS,
            icon: a.jNK,
            tooltipText: m.intl.string(m.t["UKOtz+"]),
            "aria-label": m.intl.string(m.t["UKOtz+"]),
        },
        T = (0, d.A)({
            user: t,
            guildId: n,
            onAction: () =>
                b({
                    action: "PRESS_INVITE_TO_SERVER",
                    analyticsLocations: v,
                }),
        }),
        C = (0, l.A)({
            user: t,
            guildId: n,
            location: A,
            color: "danger",
            appContext: _,
            onBlock: () =>
                b({
                    action: "BLOCK",
                    analyticsLocations: v,
                }),
            onIgnore: () =>
                b({
                    action: "IGNORE",
                    analyticsLocations: v,
                }),
            onUnblock: () =>
                b({
                    action: "UNBLOCK",
                    analyticsLocations: v,
                }),
        }),
        N = [
            [i, T],
            [
                (0, u.A)({
                    user: t,
                    guildId: n,
                    location: A,
                    appContext: _,
                    onBlock: () =>
                        b({
                            action: "BLOCK",
                            analyticsLocations: v,
                        }),
                    onIgnore: () =>
                        b({
                            action: "IGNORE",
                            analyticsLocations: v,
                        }),
                    onUnignore: () =>
                        b({
                            action: "UNIGNORE",
                            analyticsLocations: v,
                        }),
                }),
                C,
                (0, f.A)({
                    user: t,
                    guildId: n,
                    location: A,
                    appContext: _,
                    color: "danger",
                    onAction: () =>
                        b({
                            action: "REPORT",
                            analyticsLocations: v,
                        }),
                }),
                (0, f.M)({
                    user: t,
                    guildId: n,
                    location: A,
                    appContext: _,
                    color: "danger",
                    onAction: () =>
                        b({
                            action: "REPORT",
                            analyticsLocations: v,
                        }),
                }),
            ],
            [
                (0, c.A)({
                    user: t,
                    guildId: I,
                    onSuccess: () =>
                        b({
                            action: "COPY_USER_ID",
                            analyticsLocations: v,
                        }),
                }),
            ],
        ];
    return N.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(o.f5, {
              value: v,
              children: (0, r.jsx)(a.YNO, {
                  targetElementRef: g,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsx)(a.W1t, {
                          "data-menu-mixed": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": m.intl.string(m.t.AXIHpV),
                          children: N.map((e, t) =>
                              (0, r.jsx)(
                                  a.rXV,
                                  {
                                      children: e.map((e) => e),
                                  },
                                  t,
                              ),
                          ),
                      });
                  },
                  children: (e) => y(E({}, e, S)),
              }),
          });
}

function v(e) {
    let t = i.useRef(null);
    return (0, r.jsx)(
        O,
        b(E({}, e), {
            popoutTargetRef: t,
            children: (e) =>
                (0, r.jsx)(
                    _.q3,
                    E(
                        {
                            buttonRef: t,
                        },
                        e,
                    ),
                ),
        }),
    );
}

function A(e) {
    let t = i.useRef(null);
    return (0, r.jsx)(
        O,
        b(E({}, e), {
            popoutTargetRef: t,
            children: (e) =>
                (0, r.jsx)(
                    _.br,
                    E(
                        {
                            buttonRef: t,
                        },
                        e,
                    ),
                ),
        }),
    );
}
