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
var h = i(210598),
    f = i(735321),
    _ = i(384377),
    R = i(492280),
    T = i(794248),
    D = i(598748),
    P = i(141628),
    C = i(17928),
    b = i(531913),
    G = i(287809),
    S = i(183555),
    O = i(375708),
    k = i(656192);
function U(a) {
    let e = (0, C.bG)([G.default], () => G.default.getCurrentUser());
    return null == e ? null : (0, l.jsx)(F, { ...a, userId: e.id });
}
function F(a) {
    let { applicationId: e, size: i = "default", userId: t } = a,
        s = (0, b.A)(t, e),
        n = s.surfaceConfigs[D.m.ADD_WIDGET_PREVIEW];
    return null == n
        ? null
        : (0, l.jsx)("div", {
              className: k.kL,
              children: (0, l.jsx)(T.kH, {
                  ...s,
                  surface: D.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: n,
                  layoutProps: { small: "small" === i },
              }),
          });
}
function W(a) {
    let { applicationId: e, size: i = "default" } = a,
        { trackUserProfileAction: s } = (0, S.NJ)(),
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
              className: k.qr,
              children: [
                  (0, l.jsx)(P.A, { size: "xs" }),
                  (0, l.jsx)(p.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: o
                          ? r
                              ? O.intl.format(O.t.wiyuG9, { applicationName: n.name })
                              : c
                                ? O.intl.format(O.t.RNWFOQ, { onConnect: u })
                                : O.intl.string(O.t["9TX4UT"])
                          : (0, l.jsx)("div", { className: k.bg }),
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
                      ? O.intl.format(O.t.wiyuG9, { applicationName: i.name })
                      : O.intl.string(O.t["9TX4UT"])
                  : (0, l.jsx)("div", { className: k.bg }),
          });
}
i(600253);
var y = i(29854);
function B(a) {
    let { className: e } = a;
    return (0, l.jsx)("div", {
        className: n()(y.kL, e),
        "aria-hidden": !0,
        children: (0, l.jsxs)("div", {
            className: y.CX,
            children: [
                (0, l.jsx)("div", { className: y.$Q }),
                (0, l.jsx)("div", {
                    className: y._A,
                    children: Array.from({ length: 4 }, (a, e) => (0, l.jsx)("div", { className: y.Tc }, e)),
                }),
            ],
        }),
    });
}
var V = i(563323);
function K() {
    return (0, l.jsxs)("div", {
        className: V.yL,
        children: [
            (0, l.jsx)("div", { className: V.si }),
            (0, l.jsx)("div", { className: V.bk }),
            (0, l.jsx)("div", { className: V.bk }),
        ],
    });
}
function M(a) {
    let { className: e, size: i } = a;
    return (0, l.jsxs)("div", {
        className: n()(V.kL, e, { [V.EX]: "small" === i }),
        "aria-hidden": !0,
        children: [(0, l.jsx)("div", { className: V.Iv }), (0, l.jsx)(K, {}), (0, l.jsx)(K, {})],
    });
}
var z = i(315629),
    Q = i(611371),
    X = i(986708);
function Y(a) {
    let { size: e } = a;
    return "default" !== e
        ? null
        : (0, l.jsxs)(z.h, {
              color: "nitro-pink",
              className: X.k,
              offsetBottom: -2,
              children: [
                  (0, l.jsx)(Q.A, { color: d.A.colors.BADGE_BACKGROUND_DEFAULT.css }),
                  (0, l.jsx)(p.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: O.intl.string(O.t.xIJpoK),
                  }),
              ],
          });
}
var H = i(518477),
    $ = i(600705);
let J = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: L.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => O.intl.string(O.t.xJtdIm),
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: L.VALORANT }),
        getAriaLabel: () => O.intl.string(O.t.Ae8tRi),
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({ variant: "grid", applicationIds: [L.PEAK, L.BATTLEFIELD_6, L.REPO, L.BALDURS_GATE_3] }),
        getAriaLabel: () => O.intl.string(O.t["pBR+4j"]),
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [L.MARVEL_RIVALS, L.WORLD_OF_WARCRAFT, L.RUST, L.SILKSONG],
        }),
        getAriaLabel: () => O.intl.string(O.t.NtoBi1),
    },
    [r.x.APPLICATION]: {
        placeholder: (a) => ({ variant: "application-widget", applicationId: a.applicationId }),
        icon: (a) => I.A.getApplication(a.applicationId)?.getIconURL(16),
        getAriaLabel: (a) =>
            O.intl.formatToPlainString(O.t.KfGahB, {
                applicationName: I.A.getApplication(a.applicationId)?.name ?? "",
            }),
    },
    [r.x.PERSONAL]: {
        placeholder: () => ({ variant: "personal" }),
        getAriaLabel: () => O.intl.string(O.t["1l30oB"]),
        icon: () => (0, l.jsx)(c.t, { size: "xs", color: d.A.colors.ICON_DEFAULT }),
        getTitle: () => O.intl.string(O.t.f8kllL),
        isNew: h.t0,
    },
    [r.x.CLIPS_GALLERY]: {
        placeholder: () => ({ variant: "clips-gallery" }),
        getAriaLabel: () => O.intl.string(O.t["7AVpta"]),
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
        { placeholder: h, getAriaLabel: T, icon: D, getTitle: P, isNew: C } = J[e.type],
        b = "small" === s,
        G = v.useConfig({ location: A.A.USER_PROFILE_APPLICATION_WIDGET }).enabled,
        S = e.type === r.x.APPLICATION,
        k = S ? e.applicationId : void 0,
        F = (0, E.h)(k),
        { hasAlreadyLinked: y, canStartAuthorization: V, startAuthorization: K } = (0, j.RD)(F),
        z = S && !y && V,
        { analyticsLocations: Q } = (0, N.Ay)(A.A.USER_PROFILE_APPLICATION_WIDGET),
        X = t.useCallback(() => {
            !c &&
                ((0, f.Y5)(e),
                d({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, _.XA)(H.jM.WIDGET_ADDED),
                i?.(),
                z && K({ analyticsLocations: Q }));
        }, [c, z, e, d, i, K, Q]),
        q = t.useMemo(() => h(e), [e, h]),
        Z = D?.(e),
        aa = z && !G ? o.LinkIcon : m.U,
        ae = I || C?.(),
        ai = !S || G,
        al = !S || !G;
    return (0, l.jsxs)("div", {
        className: $.LG,
        children: [
            (0, l.jsxs)(u.D, {
                className: n()($.PH, b && $.PG, c && $.Lq),
                onClick: X,
                "aria-label":
                    z && null != F ? O.intl.formatToPlainString(O.t.ATS0FK, { applicationName: F.name }) : T(e),
                "aria-busy": c,
                children: [
                    (function () {
                        let a = h(e);
                        switch (a.variant) {
                            case "details":
                                return (0, l.jsx)(R.E, {
                                    className: $.l4,
                                    gridClassName: $.Qs,
                                    gameId: a.applicationId,
                                });
                            case "grid":
                                return (0, l.jsx)(R.l, {
                                    className: $.l4,
                                    gridClassName: $.Qs,
                                    gameIds: a.applicationIds,
                                });
                            case "application-widget":
                                return (0, l.jsx)(U, { applicationId: a.applicationId, size: s });
                            case "clips-gallery":
                                return (0, l.jsx)(B, { className: $.l4 });
                            case "personal":
                                return (0, l.jsx)(M, { className: $.l4, size: s });
                            default:
                                return (0, g.xb)(a);
                        }
                    })(),
                    ae &&
                        ai &&
                        (0, l.jsx)("div", {
                            className: $.X4,
                            children: (0, l.jsx)(x.E, { type: "new", variant: "brand" }),
                        }),
                    (0, l.jsxs)("div", {
                        className: $.Lw,
                        children: [
                            (0, l.jsx)(aa, { size: "md", color: "currentColor", className: $.c9 }),
                            (0, l.jsxs)("div", {
                                className: $.DD,
                                children: [
                                    null != Z
                                        ? "string" == typeof Z
                                            ? (0, l.jsx)("img", {
                                                  src: Z,
                                                  alt: "",
                                                  width: 16,
                                                  height: 16,
                                                  className: $.Kk,
                                              })
                                            : Z
                                        : null,
                                    (0, l.jsx)(p.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: null != P ? P(e) : (0, f.L)(e),
                                    }),
                                    ae && !ai && (0, l.jsx)(x.E, { type: "new", variant: "brand" }),
                                ],
                            }),
                            G &&
                                !L &&
                                "application-widget" === q.variant &&
                                (0, l.jsx)(w, { applicationId: q.applicationId }),
                        ],
                    }),
                ],
            }),
            al &&
                (function () {
                    let a = h(e);
                    switch (a.variant) {
                        case "application-widget":
                            return (0, l.jsx)(W, { applicationId: a.applicationId, size: s });
                        case "personal":
                            return (0, l.jsx)(Y, { size: s });
                        default:
                            return null;
                    }
                })(),
        ],
    });
}
