l.d(i, { A: () => $ });
var t = l(477900),
    e = l(582128),
    s = l(503698),
    n = l.n(s),
    r = l(540185),
    c = l(403581),
    d = l(661531),
    o = l(173936),
    p = l(245604),
    u = l(62010),
    A = l(939249),
    m = l(834730),
    x = l(793574),
    E = l(688810),
    I = l(206828);
let L = (0, l(945810).mj)({
    name: "2026-03-application-widget-v2-add-tweak",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var N = l(587895),
    g = l(429913),
    j = l(611371),
    v = l(403362);
let _ = {
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
Object.values(_);
var h = l(210598),
    f = l(735321),
    R = l(384377),
    T = l(492280),
    D = l(589812),
    P = l(598748),
    O = l(17928),
    C = l(141628),
    b = l(531913),
    G = l(287809),
    S = l(183555),
    k = l(105292),
    y = l(378145);
function w(a) {
    let i = (0, O.bG)([G.default], () => G.default.getCurrentUser());
    return null == i ? null : (0, t.jsx)(U, { ...a, userId: i.id });
}
function U(a) {
    let { applicationId: i, size: l = "default", userId: e } = a,
        s = (0, b.A)(e, i),
        n = s.surfaceConfigs[P.m.ADD_WIDGET_PREVIEW];
    return null == n
        ? null
        : (0, t.jsx)("div", {
              className: y.kL,
              children: (0, t.jsx)(D.kH, {
                  ...s,
                  surface: P.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: n,
                  layoutProps: { small: "small" === l },
              }),
          });
}
function W(a) {
    let { applicationId: i, size: l = "default" } = a,
        { trackUserProfileAction: s } = (0, S.NJ)(),
        n = (0, g.h)(i),
        { hasAlreadyLinked: r, canStartAuthorization: c, startAuthorization: d, fetched: o } = (0, I.RD)(n),
        { analyticsLocations: p } = (0, E.Ay)(x.A.USER_PROFILE_APPLICATION_WIDGET),
        u = e.useCallback(() => {
            c &&
                (s({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: i }),
                d({ analyticsLocations: p }));
        }, [c, s, i, d, p]);
    return "default" !== l || null == n
        ? null
        : (0, t.jsxs)("div", {
              className: y.qr,
              children: [
                  (0, t.jsx)(C.A, { size: "xs" }),
                  (0, t.jsx)(m.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: o
                          ? r
                              ? k.intl.format(k.t.wiyuG9, { applicationName: n.name })
                              : c
                                ? k.intl.format(k.t.RNWFOQ, { onConnect: u })
                                : k.intl.string(k.t["9TX4UT"])
                          : (0, t.jsx)("div", { className: y.bg }),
                  }),
              ],
          });
}
function F(a) {
    let { applicationId: i } = a,
        l = (0, g.h)(i),
        { hasAlreadyLinked: e, fetched: s } = (0, I.RD)(l);
    return null == l
        ? null
        : (0, t.jsx)(m.E, {
              variant: "text-sm/medium",
              color: "text-subtle",
              children: s
                  ? e
                      ? k.intl.format(k.t.wiyuG9, { applicationName: l.name })
                      : k.intl.string(k.t["9TX4UT"])
                  : (0, t.jsx)("div", { className: y.bg }),
          });
}
l(600253);
var V = l(307897);
function B(a) {
    let { className: i, size: l } = a;
    return (0, t.jsx)("div", {
        className: n()(V.kL, i),
        "aria-hidden": !0,
        children: (0, t.jsxs)("div", {
            className: V.CX,
            children: [
                (0, t.jsx)("div", { className: n()(V.$Q, { [V.EX]: "small" === l }) }),
                (0, t.jsx)("div", {
                    className: V._A,
                    children: Array.from({ length: 4 }, (a, i) =>
                        (0, t.jsx)("div", { className: n()(V.Tc, { [V.EX]: "small" === l }) }, i),
                    ),
                }),
            ],
        }),
    });
}
var z = l(553790);
function K() {
    return (0, t.jsxs)("div", {
        className: z.yL,
        children: [
            (0, t.jsx)("div", { className: z.si }),
            (0, t.jsx)("div", { className: z.bk }),
            (0, t.jsx)("div", { className: z.bk }),
        ],
    });
}
function M(a) {
    let { className: i, size: l } = a;
    return (0, t.jsxs)("div", {
        className: n()(z.kL, i, { [z.EX]: "small" === l }),
        "aria-hidden": !0,
        children: [(0, t.jsx)("div", { className: z.Iv }), (0, t.jsx)(K, {}), (0, t.jsx)(K, {})],
    });
}
var X = l(315629),
    Q = l(706933);
function Y(a) {
    let { size: i } = a;
    return "default" !== i
        ? null
        : (0, t.jsxs)(X.h, {
              color: "nitro-pink",
              className: Q.k,
              offsetBottom: -2.5,
              children: [
                  (0, t.jsx)(j.A, { variant: "secondary" }),
                  (0, t.jsx)(m.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: k.intl.string(k.t.xIJpoK),
                  }),
              ],
          });
}
var H = l(518477),
    J = l(866680);
let q = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: _.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => k.intl.string(k.t.xJtdIm),
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: _.VALORANT }),
        getAriaLabel: () => k.intl.string(k.t.Ae8tRi),
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({ variant: "grid", applicationIds: [_.PEAK, _.BATTLEFIELD_6, _.REPO, _.BALDURS_GATE_3] }),
        getAriaLabel: () => k.intl.string(k.t["pBR+4j"]),
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [_.MARVEL_RIVALS, _.WORLD_OF_WARCRAFT, _.RUST, _.SILKSONG],
        }),
        getAriaLabel: () => k.intl.string(k.t.NtoBi1),
    },
    [r.x.APPLICATION]: {
        placeholder: (a) => ({ variant: "application-widget", applicationId: a.applicationId }),
        icon: (a) => N.A.getApplication(a.applicationId)?.getIconURL(16),
        getAriaLabel: (a) =>
            k.intl.formatToPlainString(k.t.KfGahB, {
                applicationName: N.A.getApplication(a.applicationId)?.name ?? "",
            }),
    },
    [r.x.PERSONAL]: {
        placeholder: () => ({ variant: "personal" }),
        getAriaLabel: () => k.intl.string(k.t["1l30oB"]),
        icon: () => (0, t.jsx)(c.t, { size: "xs", color: d.A.colors.ICON_DEFAULT }),
        getTitle: () => k.intl.string(k.t.f8kllL),
        isNew: h.t0,
    },
    [r.x.CLIPS_GALLERY]: {
        placeholder: () => ({ variant: "clips-gallery" }),
        getAriaLabel: () => k.intl.string(k.t["7AVpta"]),
    },
};
function $(a) {
    let {
            widget: i,
            onAddWidget: l,
            size: s = "default",
            loading: c = !1,
            trackUserProfileEditAction: d,
            isHighlighted: N = !1,
            hideApplicationWidgetStatus: _ = !1,
        } = a,
        { placeholder: h, getAriaLabel: D, icon: P, getTitle: O, isNew: C } = q[i.type],
        b = "small" === s,
        G = L.useConfig({ location: x.A.USER_PROFILE_APPLICATION_WIDGET }).enabled,
        S = i.type === r.x.APPLICATION,
        y = S ? i.applicationId : void 0,
        U = (0, g.h)(y),
        { hasAlreadyLinked: V, canStartAuthorization: z, startAuthorization: K } = (0, I.RD)(U),
        X = S && !V && z,
        { analyticsLocations: Q } = (0, E.Ay)(x.A.USER_PROFILE_APPLICATION_WIDGET),
        $ = e.useCallback(() => {
            !c &&
                ((0, f.Y5)(i),
                d({ action: "WIDGET_ADDED", ...i.getProfileEditAnalyticsOptions() }),
                (0, R.XA)(H.jM.WIDGET_ADDED),
                l?.(),
                X && K({ analyticsLocations: Q }));
        }, [c, X, i, d, l, K, Q]),
        Z = e.useMemo(() => h(i), [i, h]),
        aa = P?.(i),
        ai = X && !G ? o.LinkIcon : p.U,
        al = N || (C?.() ?? !1),
        at = !S || G,
        ae = !S || !G,
        as =
            i.type === r.x.PERSONAL && "default" !== s
                ? (0, t.jsx)(j.A, {})
                : al
                  ? (0, t.jsx)(u.E, { type: "new", variant: "primary" })
                  : null;
    return (0, t.jsxs)("div", {
        className: J.LG,
        children: [
            (0, t.jsxs)(A.D, {
                className: n()(J.PH, b && J.PG, c && J.Lq),
                onClick: $,
                "aria-label":
                    X && null != U ? k.intl.formatToPlainString(k.t.ATS0FK, { applicationName: U.name }) : D(i),
                "aria-busy": c,
                children: [
                    (function () {
                        let a = h(i);
                        switch (a.variant) {
                            case "details":
                                return (0, t.jsx)(T.E, {
                                    className: J.l4,
                                    gridClassName: J.Qs,
                                    gameId: a.applicationId,
                                });
                            case "grid":
                                return (0, t.jsx)(T.l, {
                                    className: J.l4,
                                    gridClassName: J.Qs,
                                    gameIds: a.applicationIds,
                                });
                            case "application-widget":
                                return (0, t.jsx)(w, { applicationId: a.applicationId, size: s });
                            case "clips-gallery":
                                return (0, t.jsx)(B, { className: J.l4, size: s });
                            case "personal":
                                return (0, t.jsx)(M, { className: J.l4, size: s });
                            default:
                                return (0, v.xb)(a);
                        }
                    })(),
                    at && null != as && (0, t.jsx)("div", { className: J.X4, children: as }),
                    (0, t.jsxs)("div", {
                        className: J.Lw,
                        children: [
                            (0, t.jsx)(ai, { size: "md", color: "currentColor", className: J.c9 }),
                            (0, t.jsxs)("div", {
                                className: J.DD,
                                children: [
                                    null != aa
                                        ? "string" == typeof aa
                                            ? (0, t.jsx)("img", {
                                                  src: aa,
                                                  alt: "",
                                                  width: 16,
                                                  height: 16,
                                                  className: J.Kk,
                                              })
                                            : aa
                                        : null,
                                    (0, t.jsx)(m.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: null != O ? O(i) : (0, f.L)(i),
                                    }),
                                    al && !at && (0, t.jsx)(u.E, { type: "new", variant: "primary" }),
                                ],
                            }),
                            G &&
                                !_ &&
                                "application-widget" === Z.variant &&
                                (0, t.jsx)(F, { applicationId: Z.applicationId }),
                        ],
                    }),
                ],
            }),
            ae &&
                (function () {
                    let a = h(i);
                    switch (a.variant) {
                        case "application-widget":
                            return (0, t.jsx)(W, { applicationId: a.applicationId, size: s });
                        case "personal":
                            return (0, t.jsx)(Y, { size: s });
                        default:
                            return null;
                    }
                })(),
        ],
    });
}
