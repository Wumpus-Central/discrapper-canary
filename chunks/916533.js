e.d(i, { A: () => B });
var l = e(477900),
    t = e(582128),
    n = e(503698),
    s = e.n(n),
    r = e(540185),
    c = e(173936),
    d = e(245604),
    o = e(939249),
    p = e(508770),
    m = e(834730),
    u = e(793574),
    x = e(688810),
    A = e(206828);
let N = (0, e(945810).mj)({
    name: "2026-03-application-widget-v2-add-tweak",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var I = e(587895),
    E = e(429913),
    v = e(403362);
let j = {
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
Object.values(j);
var L = e(735321),
    g = e(384377),
    h = e(492280),
    f = e(794248),
    R = e(598748),
    _ = e(141628),
    T = e(17928),
    P = e(531913),
    D = e(287809),
    C = e(183555),
    G = e(375708),
    S = e(656192);
function b(a) {
    let i = (0, T.bG)([D.default], () => D.default.getCurrentUser());
    return null == i ? null : (0, l.jsx)(O, { ...a, userId: i.id });
}
function O(a) {
    let { applicationId: i, size: e = "default", userId: t } = a,
        n = (0, P.A)(t, i),
        s = n.surfaceConfigs[R.m.ADD_WIDGET_PREVIEW];
    return null == s
        ? null
        : (0, l.jsx)("div", {
              className: S.kL,
              children: (0, l.jsx)(f.kH, {
                  ...n,
                  surface: R.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: s,
                  layoutProps: { small: "small" === e },
              }),
          });
}
function k(a) {
    let { applicationId: i, size: e = "default" } = a,
        { trackUserProfileAction: n } = (0, C.NJ)(),
        s = (0, E.h)(i),
        { hasAlreadyLinked: r, canStartAuthorization: c, startAuthorization: d, fetched: o } = (0, A.RD)(s),
        { analyticsLocations: p } = (0, x.Ay)(u.A.USER_PROFILE_APPLICATION_WIDGET),
        N = t.useCallback(() => {
            c &&
                (n({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: i }),
                d({ analyticsLocations: p }));
        }, [c, n, i, d, p]);
    return "default" !== e || null == s
        ? null
        : (0, l.jsxs)("div", {
              className: S.qr,
              children: [
                  (0, l.jsx)(_.A, { size: "xs" }),
                  (0, l.jsx)(m.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: o
                          ? r
                              ? G.intl.format(G.t.wiyuG9, { applicationName: s.name })
                              : c
                                ? G.intl.format(G.t.RNWFOQ, { onConnect: N })
                                : G.intl.string(G.t["9TX4UT"])
                          : (0, l.jsx)("div", { className: S.bg }),
                  }),
              ],
          });
}
function F(a) {
    let { applicationId: i } = a,
        e = (0, E.h)(i),
        { hasAlreadyLinked: t, fetched: n } = (0, A.RD)(e);
    return null == e
        ? null
        : (0, l.jsx)(m.E, {
              variant: "text-sm/medium",
              color: "text-subtle",
              children: n
                  ? t
                      ? G.intl.format(G.t.wiyuG9, { applicationName: e.name })
                      : G.intl.string(G.t["9TX4UT"])
                  : (0, l.jsx)("div", { className: S.bg }),
          });
}
var U = e(29854);
function W(a) {
    let { className: i } = a;
    return (0, l.jsx)("div", {
        className: s()(U.kL, i),
        "aria-hidden": !0,
        children: (0, l.jsxs)("div", {
            className: U.CX,
            children: [
                (0, l.jsx)("div", { className: U.$Q }),
                (0, l.jsx)("div", {
                    className: U._A,
                    children: Array.from({ length: 4 }, (a, i) => (0, l.jsx)("div", { className: U.Tc }, i)),
                }),
            ],
        }),
    });
}
var w = e(518477),
    y = e(600705);
let V = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: j.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => G.intl.string(G.t.xJtdIm),
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: j.VALORANT }),
        getAriaLabel: () => G.intl.string(G.t.Ae8tRi),
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({ variant: "grid", applicationIds: [j.PEAK, j.BATTLEFIELD_6, j.REPO, j.BALDURS_GATE_3] }),
        getAriaLabel: () => G.intl.string(G.t["pBR+4j"]),
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [j.MARVEL_RIVALS, j.WORLD_OF_WARCRAFT, j.RUST, j.SILKSONG],
        }),
        getAriaLabel: () => G.intl.string(G.t.NtoBi1),
    },
    [r.x.APPLICATION]: {
        placeholder: (a) => ({ variant: "application-widget", applicationId: a.applicationId }),
        icon: (a) => I.A.getApplication(a.applicationId)?.getIconURL(16),
        getAriaLabel: (a) =>
            G.intl.formatToPlainString(G.t.KfGahB, {
                applicationName: I.A.getApplication(a.applicationId)?.name ?? "",
            }),
    },
    [r.x.PERSONAL]: {
        placeholder: () => ({ variant: "grid", applicationIds: [] }),
        icon: () => null,
        getAriaLabel: () => "",
    },
    [r.x.CLIPS_GALLERY]: {
        placeholder: () => ({ variant: "clips-gallery" }),
        getAriaLabel: () => G.intl.string(G.t["7AVpta"]),
    },
};
function B(a) {
    let i,
        {
            widget: e,
            onAddWidget: n,
            size: I = "default",
            loading: j = !1,
            trackUserProfileEditAction: f,
            isHighlighted: R = !1,
            hideApplicationWidgetStatus: _ = !1,
        } = a,
        { placeholder: T, getAriaLabel: P, icon: D } = V[e.type],
        C = N.useConfig({ location: u.A.USER_PROFILE_APPLICATION_WIDGET }).enabled,
        S = e.type === r.x.APPLICATION,
        O = S ? e.applicationId : void 0,
        U = (0, E.h)(O),
        { hasAlreadyLinked: B, canStartAuthorization: M, startAuthorization: K } = (0, A.RD)(U),
        Q = S && !B && M,
        { analyticsLocations: Y } = (0, x.Ay)(u.A.USER_PROFILE_APPLICATION_WIDGET),
        H = t.useCallback(() => {
            !j &&
                ((0, L.Y5)(e),
                f({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, g.XA)(w.jM.WIDGET_ADDED),
                n?.(),
                Q && K({ analyticsLocations: Y }));
        }, [j, Q, e, f, n, K, Y]),
        X = t.useMemo(() => T(e), [e, T]),
        z = D?.(e),
        $ = Q && !C ? c.q : d.U;
    return (0, l.jsxs)("div", {
        className: y.LG,
        children: [
            (0, l.jsxs)(o.D, {
                className: s()(y.PH, "small" === I && y.PG, j && y.Lq),
                onClick: H,
                "aria-label":
                    Q && null != U ? G.intl.formatToPlainString(G.t.ATS0FK, { applicationName: U.name }) : P(e),
                "aria-busy": j,
                children: [
                    (function () {
                        let a = T(e);
                        switch (a.variant) {
                            case "details":
                                return (0, l.jsx)(h.E, {
                                    className: y.l4,
                                    gridClassName: y.Qs,
                                    applicationId: a.applicationId,
                                });
                            case "grid":
                                return (0, l.jsx)(h.l, {
                                    className: y.l4,
                                    gridClassName: y.Qs,
                                    applicationIds: a.applicationIds,
                                });
                            case "application-widget":
                                return (0, l.jsx)(b, { applicationId: a.applicationId, size: I });
                            case "clips-gallery":
                                return (0, l.jsx)(W, { className: y.l4 });
                            default:
                                return (0, v.xb)(a);
                        }
                    })(),
                    C &&
                        R &&
                        (0, l.jsx)("div", {
                            className: y.X4,
                            children: (0, l.jsx)(p.E, { type: "new", variant: "brand" }),
                        }),
                    (0, l.jsxs)("div", {
                        className: y.Lw,
                        children: [
                            (0, l.jsx)($, { size: "md", color: "currentColor", className: y.c9 }),
                            (0, l.jsxs)("div", {
                                className: y.DD,
                                children: [
                                    null != z
                                        ? (0, l.jsx)("img", { src: z, alt: "", width: 16, height: 16, className: y.Kk })
                                        : null,
                                    (0, l.jsx)(m.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: (0, L.L)(e),
                                    }),
                                    !C && R && (0, l.jsx)(p.E, { type: "new", variant: "brand" }),
                                ],
                            }),
                            C &&
                                !_ &&
                                "application-widget" === X.variant &&
                                (0, l.jsx)(F, { applicationId: X.applicationId }),
                        ],
                    }),
                ],
            }),
            !C &&
                ("application-widget" === (i = T(e)).variant
                    ? (0, l.jsx)(k, { applicationId: i.applicationId, size: I })
                    : null),
        ],
    });
}
