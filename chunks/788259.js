i.d(e, { A: () => q });
var l = i(477900),
    t = i(582128),
    s = i(503698),
    n = i.n(s),
    r = i(540185),
    c = i(403581),
    d = i(661531),
    o = i(173936),
    m = i(245604),
    u = i(939249),
    x = i(508770),
    p = i(834730),
    A = i(793574),
    N = i(688810),
    j = i(206828);
let v = (0, i(945810).mj)({
    name: "2026-03-application-widget-v2-add-tweak",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var I = i(587895),
    E = i(429913),
    g = i(403362);
let L = {
    LEAGUE_OF_LEGENDS: "1402418696126992445",
    VALORANT: "700136079562375258",
    PEAK: "1384276457596911676",
    REPO: "1344368447928401961",
    BALDURS_GATE_3: "1137125502985961543",
    MARVEL_RIVALS: "1314395942253756416",
    WORLD_OF_WARCRAFT: "356875762940379136",
    RUST: "1402418594532298837",
    BATTLEFIELD_6: "1402692356343599254",
    SILKSONG: "1413176957381771337",
};
Object.values(L);
var h = i(735321),
    f = i(384377),
    _ = i(492280),
    R = i(794248),
    T = i(598748),
    D = i(141628),
    P = i(17928),
    C = i(531913),
    b = i(287809),
    G = i(183555),
    S = i(375708),
    O = i(656192);
function k(a) {
    let e = (0, P.bG)([b.default], () => b.default.getCurrentUser());
    return null == e ? null : (0, l.jsx)(U, { ...a, userId: e.id });
}
function U(a) {
    let { applicationId: e, size: i = "default", userId: t } = a,
        s = (0, C.A)(t, e),
        n = s.surfaceConfigs[T.m.ADD_WIDGET_PREVIEW];
    return null == n
        ? null
        : (0, l.jsx)("div", {
              className: O.kL,
              children: (0, l.jsx)(R.kH, {
                  ...s,
                  surface: T.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: n,
                  layoutProps: { small: "small" === i },
              }),
          });
}
function F(a) {
    let { applicationId: e, size: i = "default" } = a,
        { trackUserProfileAction: s } = (0, G.NJ)(),
        n = (0, E.h)(e),
        { hasAlreadyLinked: r, canStartAuthorization: c, startAuthorization: d, fetched: o } = (0, j.RD)(n),
        { analyticsLocations: m } = (0, N.Ay)(A.A.USER_PROFILE_APPLICATION_WIDGET),
        u = t.useCallback(() => {
            c &&
                (s({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: e }),
                d({ analyticsLocations: m }));
        }, [c, s, e, d, m]);
    return "default" !== i || null == n
        ? null
        : (0, l.jsxs)("div", {
              className: O.qr,
              children: [
                  (0, l.jsx)(D.A, { size: "xs" }),
                  (0, l.jsx)(p.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: o
                          ? r
                              ? S.intl.format(S.t.wiyuG9, { applicationName: n.name })
                              : c
                                ? S.intl.format(S.t.RNWFOQ, { onConnect: u })
                                : S.intl.string(S.t["9TX4UT"])
                          : (0, l.jsx)("div", { className: O.bg }),
                  }),
              ],
          });
}
function w(a) {
    let { applicationId: e } = a,
        i = (0, E.h)(e),
        { hasAlreadyLinked: t, fetched: s } = (0, j.RD)(i);
    return null == i
        ? null
        : (0, l.jsx)(p.E, {
              variant: "text-sm/medium",
              color: "text-subtle",
              children: s
                  ? t
                      ? S.intl.format(S.t.wiyuG9, { applicationName: i.name })
                      : S.intl.string(S.t["9TX4UT"])
                  : (0, l.jsx)("div", { className: O.bg }),
          });
}
i(157992);
var W = i(29854);
function y(a) {
    let { className: e } = a;
    return (0, l.jsx)("div", {
        className: n()(W.kL, e),
        "aria-hidden": !0,
        children: (0, l.jsxs)("div", {
            className: W.CX,
            children: [
                (0, l.jsx)("div", { className: W.$Q }),
                (0, l.jsx)("div", {
                    className: W._A,
                    children: Array.from({ length: 4 }, (a, e) => (0, l.jsx)("div", { className: W.Tc }, e)),
                }),
            ],
        }),
    });
}
var B = i(563323);
function V() {
    return (0, l.jsxs)("div", {
        className: B.yL,
        children: [
            (0, l.jsx)("div", { className: B.si }),
            (0, l.jsx)("div", { className: B.bk }),
            (0, l.jsx)("div", { className: B.bk }),
        ],
    });
}
function K(a) {
    let { className: e } = a;
    return (0, l.jsxs)("div", {
        className: n()(B.kL, e),
        "aria-hidden": !0,
        children: [(0, l.jsx)("div", { className: B.Iv }), (0, l.jsx)(V, {}), (0, l.jsx)(V, {})],
    });
}
var M = i(315629),
    Q = i(611371),
    Y = i(986708);
function H() {
    return (0, l.jsxs)(M.h, {
        color: "nitro-pink",
        className: Y.k,
        offsetBottom: -2,
        children: [
            (0, l.jsx)(Q.A, { color: d.A.colors.BADGE_BACKGROUND_DEFAULT.css }),
            (0, l.jsx)(p.E, { variant: "text-sm/medium", color: "text-subtle", children: S.intl.string(S.t.xIJpoK) }),
        ],
    });
}
var X = i(518477),
    z = i(600705);
let $ = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: L.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => S.intl.string(S.t.xJtdIm),
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: L.VALORANT }),
        getAriaLabel: () => S.intl.string(S.t.Ae8tRi),
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({ variant: "grid", applicationIds: [L.PEAK, L.BATTLEFIELD_6, L.REPO, L.BALDURS_GATE_3] }),
        getAriaLabel: () => S.intl.string(S.t["pBR+4j"]),
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [L.MARVEL_RIVALS, L.WORLD_OF_WARCRAFT, L.RUST, L.SILKSONG],
        }),
        getAriaLabel: () => S.intl.string(S.t.NtoBi1),
    },
    [r.x.APPLICATION]: {
        placeholder: (a) => ({ variant: "application-widget", applicationId: a.applicationId }),
        icon: (a) => I.A.getApplication(a.applicationId)?.getIconURL(16),
        getAriaLabel: (a) =>
            S.intl.formatToPlainString(S.t.KfGahB, {
                applicationName: I.A.getApplication(a.applicationId)?.name ?? "",
            }),
    },
    [r.x.PERSONAL]: {
        placeholder: () => ({ variant: "personal" }),
        getAriaLabel: () => S.intl.string(S.t["1l30oB"]),
        icon: () => (0, l.jsx)(c.t, { size: "xs", color: d.A.colors.ICON_DEFAULT }),
        getTitle: () => S.intl.string(S.t.f8kllL),
        isNew: () => 17882208e5 > Date.now(),
    },
    [r.x.CLIPS_GALLERY]: {
        placeholder: () => ({ variant: "clips-gallery" }),
        getAriaLabel: () => S.intl.string(S.t["7AVpta"]),
    },
};
function q(a) {
    let {
            widget: e,
            onAddWidget: i,
            size: s = "default",
            loading: c = !1,
            trackUserProfileEditAction: d,
            isHighlighted: I = !1,
            hideApplicationWidgetStatus: L = !1,
        } = a,
        { placeholder: R, getAriaLabel: T, icon: D, getTitle: P, isNew: C } = $[e.type],
        b = v.useConfig({ location: A.A.USER_PROFILE_APPLICATION_WIDGET }).enabled,
        G = e.type === r.x.APPLICATION,
        O = G ? e.applicationId : void 0,
        U = (0, E.h)(O),
        { hasAlreadyLinked: W, canStartAuthorization: B, startAuthorization: V } = (0, j.RD)(U),
        M = G && !W && B,
        { analyticsLocations: Q } = (0, N.Ay)(A.A.USER_PROFILE_APPLICATION_WIDGET),
        Y = t.useCallback(() => {
            !c &&
                ((0, h.Y5)(e),
                d({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, f.XA)(X.jM.WIDGET_ADDED),
                i?.(),
                M && V({ analyticsLocations: Q }));
        }, [c, M, e, d, i, V, Q]),
        q = t.useMemo(() => R(e), [e, R]),
        J = D?.(e),
        Z = M && !b ? o.q : m.U,
        aa = I || C?.();
    return (0, l.jsxs)("div", {
        className: z.LG,
        children: [
            (0, l.jsxs)(u.D, {
                className: n()(z.PH, "small" === s && z.PG, c && z.Lq),
                onClick: Y,
                "aria-label":
                    M && null != U ? S.intl.formatToPlainString(S.t.ATS0FK, { applicationName: U.name }) : T(e),
                "aria-busy": c,
                children: [
                    (function () {
                        let a = R(e);
                        switch (a.variant) {
                            case "details":
                                return (0, l.jsx)(_.E, {
                                    className: z.l4,
                                    gridClassName: z.Qs,
                                    gameId: a.applicationId,
                                });
                            case "grid":
                                return (0, l.jsx)(_.l, {
                                    className: z.l4,
                                    gridClassName: z.Qs,
                                    gameIds: a.applicationIds,
                                });
                            case "application-widget":
                                return (0, l.jsx)(k, { applicationId: a.applicationId, size: s });
                            case "clips-gallery":
                                return (0, l.jsx)(y, { className: z.l4 });
                            case "personal":
                                return (0, l.jsx)(K, { className: z.l4 });
                            default:
                                return (0, g.xb)(a);
                        }
                    })(),
                    b &&
                        aa &&
                        (0, l.jsx)("div", {
                            className: z.X4,
                            children: (0, l.jsx)(x.E, { type: "new", variant: "brand" }),
                        }),
                    (0, l.jsxs)("div", {
                        className: z.Lw,
                        children: [
                            (0, l.jsx)(Z, { size: "md", color: "currentColor", className: z.c9 }),
                            (0, l.jsxs)("div", {
                                className: z.DD,
                                children: [
                                    null != J
                                        ? "string" == typeof J
                                            ? (0, l.jsx)("img", {
                                                  src: J,
                                                  alt: "",
                                                  width: 16,
                                                  height: 16,
                                                  className: z.Kk,
                                              })
                                            : J
                                        : null,
                                    (0, l.jsx)(p.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: null != P ? P(e) : (0, h.L)(e),
                                    }),
                                    !b && aa && (0, l.jsx)(x.E, { type: "new", variant: "brand" }),
                                ],
                            }),
                            b &&
                                !L &&
                                "application-widget" === q.variant &&
                                (0, l.jsx)(w, { applicationId: q.applicationId }),
                        ],
                    }),
                ],
            }),
            !b &&
                (function () {
                    let a = R(e);
                    switch (a.variant) {
                        case "application-widget":
                            return (0, l.jsx)(F, { applicationId: a.applicationId, size: s });
                        case "personal":
                            return (0, l.jsx)(H, {});
                        default:
                            return null;
                    }
                })(),
        ],
    });
}
