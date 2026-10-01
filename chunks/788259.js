i.d(l, { A: () => $ });
var t = i(477900),
    e = i(582128),
    s = i(503698),
    n = i.n(s),
    r = i(540185),
    c = i(403581),
    d = i(661531),
    o = i(173936),
    p = i(245604),
    A = i(508770),
    u = i(939249),
    m = i(834730),
    E = i(793574),
    x = i(688810),
    I = i(206828);
let L = (0, i(945810).mj)({
    name: "2026-03-application-widget-v2-add-tweak",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var N = i(587895),
    g = i(429913),
    _ = i(611371),
    j = i(403362);
let v = {
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
Object.values(v);
var T = i(210598),
    h = i(735321),
    R = i(384377),
    f = i(492280),
    D = i(589812),
    P = i(598748),
    O = i(17928),
    G = i(141628),
    b = i(531913),
    C = i(287809),
    S = i(183555),
    k = i(375708),
    U = i(378145);
function y(a) {
    let l = (0, O.bG)([C.default], () => C.default.getCurrentUser());
    return null == l ? null : (0, t.jsx)(w, { ...a, userId: l.id });
}
function w(a) {
    let { applicationId: l, size: i = "default", userId: e } = a,
        s = (0, b.A)(e, l),
        n = s.surfaceConfigs[P.m.ADD_WIDGET_PREVIEW];
    return null == n
        ? null
        : (0, t.jsx)("div", {
              className: U.kL,
              children: (0, t.jsx)(D.kH, {
                  ...s,
                  surface: P.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: n,
                  layoutProps: { small: "small" === i },
              }),
          });
}
function F(a) {
    let { applicationId: l, size: i = "default" } = a,
        { trackUserProfileAction: s } = (0, S.NJ)(),
        n = (0, g.h)(l),
        { hasAlreadyLinked: r, canStartAuthorization: c, startAuthorization: d, fetched: o } = (0, I.RD)(n),
        { analyticsLocations: p } = (0, x.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
        A = e.useCallback(() => {
            c &&
                (s({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: l }),
                d({ analyticsLocations: p }));
        }, [c, s, l, d, p]);
    return "default" !== i || null == n
        ? null
        : (0, t.jsxs)("div", {
              className: U.qr,
              children: [
                  (0, t.jsx)(G.A, { size: "xs" }),
                  (0, t.jsx)(m.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: o
                          ? r
                              ? k.intl.format(k.t.wiyuG9, { applicationName: n.name })
                              : c
                                ? k.intl.format(k.t.RNWFOQ, { onConnect: A })
                                : k.intl.string(k.t["9TX4UT"])
                          : (0, t.jsx)("div", { className: U.bg }),
                  }),
              ],
          });
}
function W(a) {
    let { applicationId: l } = a,
        i = (0, g.h)(l),
        { hasAlreadyLinked: e, fetched: s } = (0, I.RD)(i);
    return null == i
        ? null
        : (0, t.jsx)(m.E, {
              variant: "text-sm/medium",
              color: "text-subtle",
              children: s
                  ? e
                      ? k.intl.format(k.t.wiyuG9, { applicationName: i.name })
                      : k.intl.string(k.t["9TX4UT"])
                  : (0, t.jsx)("div", { className: U.bg }),
          });
}
i(600253);
var B = i(307897);
function V(a) {
    let { className: l, size: i } = a;
    return (0, t.jsx)("div", {
        className: n()(B.kL, l),
        "aria-hidden": !0,
        children: (0, t.jsxs)("div", {
            className: B.CX,
            children: [
                (0, t.jsx)("div", { className: n()(B.$Q, { [B.EX]: "small" === i }) }),
                (0, t.jsx)("div", {
                    className: B._A,
                    children: Array.from({ length: 4 }, (a, l) =>
                        (0, t.jsx)("div", { className: n()(B.Tc, { [B.EX]: "small" === i }) }, l),
                    ),
                }),
            ],
        }),
    });
}
var K = i(553790);
function X() {
    return (0, t.jsxs)("div", {
        className: K.yL,
        children: [
            (0, t.jsx)("div", { className: K.si }),
            (0, t.jsx)("div", { className: K.bk }),
            (0, t.jsx)("div", { className: K.bk }),
        ],
    });
}
function z(a) {
    let { className: l, size: i } = a;
    return (0, t.jsxs)("div", {
        className: n()(K.kL, l, { [K.EX]: "small" === i }),
        "aria-hidden": !0,
        children: [(0, t.jsx)("div", { className: K.Iv }), (0, t.jsx)(X, {}), (0, t.jsx)(X, {})],
    });
}
var M = i(315629),
    Q = i(706933);
function Y(a) {
    let { size: l } = a;
    return "default" !== l
        ? null
        : (0, t.jsxs)(M.h, {
              color: "nitro-pink",
              className: Q.k,
              offsetBottom: -2.5,
              children: [
                  (0, t.jsx)(_.A, {
                      color: d.A.colors.BADGE_BACKGROUND_DEFAULT.css,
                      style: { color: d.A.colors.BADGE_TEXT_DEFAULT.css },
                  }),
                  (0, t.jsx)(m.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: k.intl.string(k.t.xIJpoK),
                  }),
              ],
          });
}
var H = i(518477),
    J = i(866680);
let q = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: v.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => k.intl.string(k.t.xJtdIm),
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: v.VALORANT }),
        getAriaLabel: () => k.intl.string(k.t.Ae8tRi),
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({ variant: "grid", applicationIds: [v.PEAK, v.BATTLEFIELD_6, v.REPO, v.BALDURS_GATE_3] }),
        getAriaLabel: () => k.intl.string(k.t["pBR+4j"]),
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [v.MARVEL_RIVALS, v.WORLD_OF_WARCRAFT, v.RUST, v.SILKSONG],
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
        isNew: T.t0,
    },
    [r.x.CLIPS_GALLERY]: {
        placeholder: () => ({ variant: "clips-gallery" }),
        getAriaLabel: () => k.intl.string(k.t["7AVpta"]),
    },
};
function $(a) {
    let {
            widget: l,
            onAddWidget: i,
            size: s = "default",
            loading: c = !1,
            trackUserProfileEditAction: d,
            isHighlighted: N = !1,
            hideApplicationWidgetStatus: v = !1,
        } = a,
        { placeholder: T, getAriaLabel: D, icon: P, getTitle: O, isNew: G } = q[l.type],
        b = "small" === s,
        C = L.useConfig({ location: E.A.USER_PROFILE_APPLICATION_WIDGET }).enabled,
        S = l.type === r.x.APPLICATION,
        U = S ? l.applicationId : void 0,
        w = (0, g.h)(U),
        { hasAlreadyLinked: B, canStartAuthorization: K, startAuthorization: X } = (0, I.RD)(w),
        M = S && !B && K,
        { analyticsLocations: Q } = (0, x.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
        $ = e.useCallback(() => {
            !c &&
                ((0, h.Y5)(l),
                d({ action: "WIDGET_ADDED", ...l.getProfileEditAnalyticsOptions() }),
                (0, R.XA)(H.jM.WIDGET_ADDED),
                i?.(),
                M && X({ analyticsLocations: Q }));
        }, [c, M, l, d, i, X, Q]),
        Z = e.useMemo(() => T(l), [l, T]),
        aa = P?.(l),
        al = M && !C ? o.LinkIcon : p.U,
        ai = N || (G?.() ?? !1),
        at = !S || C,
        ae = !S || !C,
        as =
            l.type === r.x.PERSONAL && "default" !== s
                ? (0, t.jsx)(_.A, {})
                : ai
                  ? (0, t.jsx)(A.E, { type: "new", variant: "brand" })
                  : null;
    return (0, t.jsxs)("div", {
        className: J.LG,
        children: [
            (0, t.jsxs)(u.D, {
                className: n()(J.PH, b && J.PG, c && J.Lq),
                onClick: $,
                "aria-label":
                    M && null != w ? k.intl.formatToPlainString(k.t.ATS0FK, { applicationName: w.name }) : D(l),
                "aria-busy": c,
                children: [
                    (function () {
                        let a = T(l);
                        switch (a.variant) {
                            case "details":
                                return (0, t.jsx)(f.E, {
                                    className: J.l4,
                                    gridClassName: J.Qs,
                                    gameId: a.applicationId,
                                });
                            case "grid":
                                return (0, t.jsx)(f.l, {
                                    className: J.l4,
                                    gridClassName: J.Qs,
                                    gameIds: a.applicationIds,
                                });
                            case "application-widget":
                                return (0, t.jsx)(y, { applicationId: a.applicationId, size: s });
                            case "clips-gallery":
                                return (0, t.jsx)(V, { className: J.l4, size: s });
                            case "personal":
                                return (0, t.jsx)(z, { className: J.l4, size: s });
                            default:
                                return (0, j.xb)(a);
                        }
                    })(),
                    at && null != as && (0, t.jsx)("div", { className: J.X4, children: as }),
                    (0, t.jsxs)("div", {
                        className: J.Lw,
                        children: [
                            (0, t.jsx)(al, { size: "md", color: "currentColor", className: J.c9 }),
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
                                        children: null != O ? O(l) : (0, h.L)(l),
                                    }),
                                    ai && !at && (0, t.jsx)(A.E, { type: "new", variant: "brand" }),
                                ],
                            }),
                            C &&
                                !v &&
                                "application-widget" === Z.variant &&
                                (0, t.jsx)(W, { applicationId: Z.applicationId }),
                        ],
                    }),
                ],
            }),
            ae &&
                (function () {
                    let a = T(l);
                    switch (a.variant) {
                        case "application-widget":
                            return (0, t.jsx)(F, { applicationId: a.applicationId, size: s });
                        case "personal":
                            return (0, t.jsx)(Y, { size: s });
                        default:
                            return null;
                    }
                })(),
        ],
    });
}
