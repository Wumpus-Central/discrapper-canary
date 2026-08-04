i.d(e, { A: () => $ });
var l = i(477900),
    t = i(582128),
    s = i(503698),
    n = i.n(s),
    r = i(540185),
    c = i(173936),
    d = i(245604),
    o = i(939249),
    m = i(508770),
    u = i(834730),
    p = i(793574),
    x = i(688810),
    A = i(206828);
let N = (0, i(945810).mj)({
    name: "2026-03-application-widget-v2-add-tweak",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var j = i(587895),
    v = i(429913),
    I = i(403362);
let E = {
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
Object.values(E);
var h = i(735321),
    L = i(384377),
    g = i(492280),
    f = i(794248),
    _ = i(598748),
    R = i(141628),
    T = i(17928),
    D = i(531913),
    P = i(287809),
    C = i(183555),
    b = i(375708),
    G = i(656192);
function S(a) {
    let e = (0, T.bG)([P.default], () => P.default.getCurrentUser());
    return null == e ? null : (0, l.jsx)(O, { ...a, userId: e.id });
}
function O(a) {
    let { applicationId: e, size: i = "default", userId: t } = a,
        s = (0, D.A)(t, e),
        n = s.surfaceConfigs[_.m.ADD_WIDGET_PREVIEW];
    return null == n
        ? null
        : (0, l.jsx)("div", {
              className: G.kL,
              children: (0, l.jsx)(f.kH, {
                  ...s,
                  surface: _.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: n,
                  layoutProps: { small: "small" === i },
              }),
          });
}
function k(a) {
    let { applicationId: e, size: i = "default" } = a,
        { trackUserProfileAction: s } = (0, C.NJ)(),
        n = (0, v.h)(e),
        { hasAlreadyLinked: r, canStartAuthorization: c, startAuthorization: d, fetched: o } = (0, A.RD)(n),
        { analyticsLocations: m } = (0, x.Ay)(p.A.USER_PROFILE_APPLICATION_WIDGET),
        N = t.useCallback(() => {
            c &&
                (s({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: e }),
                d({ analyticsLocations: m }));
        }, [c, s, e, d, m]);
    return "default" !== i || null == n
        ? null
        : (0, l.jsxs)("div", {
              className: G.qr,
              children: [
                  (0, l.jsx)(R.A, { size: "xs" }),
                  (0, l.jsx)(u.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: o
                          ? r
                              ? b.intl.format(b.t.wiyuG9, { applicationName: n.name })
                              : c
                                ? b.intl.format(b.t.RNWFOQ, { onConnect: N })
                                : b.intl.string(b.t["9TX4UT"])
                          : (0, l.jsx)("div", { className: G.bg }),
                  }),
              ],
          });
}
function U(a) {
    let { applicationId: e } = a,
        i = (0, v.h)(e),
        { hasAlreadyLinked: t, fetched: s } = (0, A.RD)(i);
    return null == i
        ? null
        : (0, l.jsx)(u.E, {
              variant: "text-sm/medium",
              color: "text-subtle",
              children: s
                  ? t
                      ? b.intl.format(b.t.wiyuG9, { applicationName: i.name })
                      : b.intl.string(b.t["9TX4UT"])
                  : (0, l.jsx)("div", { className: G.bg }),
          });
}
i(157992);
var F = i(29854);
function W(a) {
    let { className: e } = a;
    return (0, l.jsx)("div", {
        className: n()(F.kL, e),
        "aria-hidden": !0,
        children: (0, l.jsxs)("div", {
            className: F.CX,
            children: [
                (0, l.jsx)("div", { className: F.$Q }),
                (0, l.jsx)("div", {
                    className: F._A,
                    children: Array.from({ length: 4 }, (a, e) => (0, l.jsx)("div", { className: F.Tc }, e)),
                }),
            ],
        }),
    });
}
var w = i(563323);
function y() {
    return (0, l.jsxs)("div", {
        className: w.yL,
        children: [
            (0, l.jsx)("div", { className: w.si }),
            (0, l.jsx)("div", { className: w.bk }),
            (0, l.jsx)("div", { className: w.bk }),
        ],
    });
}
function B(a) {
    let { className: e } = a;
    return (0, l.jsxs)("div", {
        className: n()(w.kL, e),
        "aria-hidden": !0,
        children: [(0, l.jsx)("div", { className: w.Iv }), (0, l.jsx)(y, {}), (0, l.jsx)(y, {})],
    });
}
var V = i(315629),
    K = i(661531),
    M = i(611371),
    Q = i(986708);
function Y() {
    return (0, l.jsxs)(V.h, {
        color: "nitro-pink",
        className: Q.k,
        offsetBottom: -2,
        children: [
            (0, l.jsx)(M.A, { color: K.A.colors.BADGE_BACKGROUND_DEFAULT.css }),
            (0, l.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: b.intl.string(b.t.xIJpoK) }),
        ],
    });
}
var H = i(518477),
    X = i(600705);
let z = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: E.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => b.intl.string(b.t.xJtdIm),
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: E.VALORANT }),
        getAriaLabel: () => b.intl.string(b.t.Ae8tRi),
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({ variant: "grid", applicationIds: [E.PEAK, E.BATTLEFIELD_6, E.REPO, E.BALDURS_GATE_3] }),
        getAriaLabel: () => b.intl.string(b.t["pBR+4j"]),
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [E.MARVEL_RIVALS, E.WORLD_OF_WARCRAFT, E.RUST, E.SILKSONG],
        }),
        getAriaLabel: () => b.intl.string(b.t.NtoBi1),
    },
    [r.x.APPLICATION]: {
        placeholder: (a) => ({ variant: "application-widget", applicationId: a.applicationId }),
        icon: (a) => j.A.getApplication(a.applicationId)?.getIconURL(16),
        getAriaLabel: (a) =>
            b.intl.formatToPlainString(b.t.KfGahB, {
                applicationName: j.A.getApplication(a.applicationId)?.name ?? "",
            }),
    },
    [r.x.PERSONAL]: { placeholder: () => ({ variant: "personal" }), getAriaLabel: () => b.intl.string(b.t["1l30oB"]) },
    [r.x.CLIPS_GALLERY]: {
        placeholder: () => ({ variant: "clips-gallery" }),
        getAriaLabel: () => b.intl.string(b.t["7AVpta"]),
    },
};
function $(a) {
    let {
            widget: e,
            onAddWidget: i,
            size: s = "default",
            loading: j = !1,
            trackUserProfileEditAction: E,
            isHighlighted: f = !1,
            hideApplicationWidgetStatus: _ = !1,
        } = a,
        { placeholder: R, getAriaLabel: T, icon: D } = z[e.type],
        P = N.useConfig({ location: p.A.USER_PROFILE_APPLICATION_WIDGET }).enabled,
        C = e.type === r.x.APPLICATION,
        G = C ? e.applicationId : void 0,
        O = (0, v.h)(G),
        { hasAlreadyLinked: F, canStartAuthorization: w, startAuthorization: y } = (0, A.RD)(O),
        V = C && !F && w,
        { analyticsLocations: K } = (0, x.Ay)(p.A.USER_PROFILE_APPLICATION_WIDGET),
        M = t.useCallback(() => {
            !j &&
                ((0, h.Y5)(e),
                E({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, L.XA)(H.jM.WIDGET_ADDED),
                i?.(),
                V && y({ analyticsLocations: K }));
        }, [j, V, e, E, i, y, K]),
        Q = t.useMemo(() => R(e), [e, R]),
        $ = D?.(e),
        q = V && !P ? c.q : d.U;
    return (0, l.jsxs)("div", {
        className: X.LG,
        children: [
            (0, l.jsxs)(o.D, {
                className: n()(X.PH, "small" === s && X.PG, j && X.Lq),
                onClick: M,
                "aria-label":
                    V && null != O ? b.intl.formatToPlainString(b.t.ATS0FK, { applicationName: O.name }) : T(e),
                "aria-busy": j,
                children: [
                    (function () {
                        let a = R(e);
                        switch (a.variant) {
                            case "details":
                                return (0, l.jsx)(g.E, {
                                    className: X.l4,
                                    gridClassName: X.Qs,
                                    applicationId: a.applicationId,
                                });
                            case "grid":
                                return (0, l.jsx)(g.l, {
                                    className: X.l4,
                                    gridClassName: X.Qs,
                                    applicationIds: a.applicationIds,
                                });
                            case "application-widget":
                                return (0, l.jsx)(S, { applicationId: a.applicationId, size: s });
                            case "clips-gallery":
                                return (0, l.jsx)(W, { className: X.l4 });
                            case "personal":
                                return (0, l.jsx)(B, { className: X.l4 });
                            default:
                                return (0, I.xb)(a);
                        }
                    })(),
                    P &&
                        f &&
                        (0, l.jsx)("div", {
                            className: X.X4,
                            children: (0, l.jsx)(m.E, { type: "new", variant: "brand" }),
                        }),
                    (0, l.jsxs)("div", {
                        className: X.Lw,
                        children: [
                            (0, l.jsx)(q, { size: "md", color: "currentColor", className: X.c9 }),
                            (0, l.jsxs)("div", {
                                className: X.DD,
                                children: [
                                    null != $
                                        ? (0, l.jsx)("img", { src: $, alt: "", width: 16, height: 16, className: X.Kk })
                                        : null,
                                    (0, l.jsx)(u.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: (0, h.L)(e),
                                    }),
                                    !P && f && (0, l.jsx)(m.E, { type: "new", variant: "brand" }),
                                ],
                            }),
                            P &&
                                !_ &&
                                "application-widget" === Q.variant &&
                                (0, l.jsx)(U, { applicationId: Q.applicationId }),
                        ],
                    }),
                ],
            }),
            !P &&
                (function () {
                    let a = R(e);
                    switch (a.variant) {
                        case "application-widget":
                            return (0, l.jsx)(k, { applicationId: a.applicationId, size: s });
                        case "personal":
                            return (0, l.jsx)(Y, {});
                        default:
                            return null;
                    }
                })(),
        ],
    });
}
