l.d(e, { A: () => q });
var i = l(477900),
    s = l(582128),
    t = l(503698),
    n = l.n(t),
    r = l(540185),
    c = l(403581),
    d = l(661531),
    o = l(173936),
    m = l(245604),
    u = l(508770),
    x = l(939249),
    p = l(834730),
    A = l(793574),
    N = l(688810),
    j = l(206828);
let E = (0, l(945810).mj)({
    name: "2026-03-application-widget-v2-add-tweak",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var v = l(587895),
    I = l(429913),
    g = l(611371),
    L = l(403362);
let h = {
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
Object.values(h);
var f = l(210598),
    _ = l(735321),
    R = l(384377),
    T = l(492280),
    D = l(794248),
    P = l(598748),
    C = l(141628),
    G = l(17928),
    b = l(531913),
    S = l(287809),
    O = l(183555),
    k = l(375708),
    U = l(656192);
function F(a) {
    let e = (0, G.bG)([S.default], () => S.default.getCurrentUser());
    return null == e ? null : (0, i.jsx)(y, { ...a, userId: e.id });
}
function y(a) {
    let { applicationId: e, size: l = "default", userId: s } = a,
        t = (0, b.A)(s, e),
        n = t.surfaceConfigs[P.m.ADD_WIDGET_PREVIEW];
    return null == n
        ? null
        : (0, i.jsx)("div", {
              className: U.kL,
              children: (0, i.jsx)(D.kH, {
                  ...t,
                  surface: P.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: n,
                  layoutProps: { small: "small" === l },
              }),
          });
}
function W(a) {
    let { applicationId: e, size: l = "default" } = a,
        { trackUserProfileAction: t } = (0, O.NJ)(),
        n = (0, I.h)(e),
        { hasAlreadyLinked: r, canStartAuthorization: c, startAuthorization: d, fetched: o } = (0, j.RD)(n),
        { analyticsLocations: m } = (0, N.Ay)(A.A.USER_PROFILE_APPLICATION_WIDGET),
        u = s.useCallback(() => {
            c &&
                (t({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: e }),
                d({ analyticsLocations: m }));
        }, [c, t, e, d, m]);
    return "default" !== l || null == n
        ? null
        : (0, i.jsxs)("div", {
              className: U.qr,
              children: [
                  (0, i.jsx)(C.A, { size: "xs" }),
                  (0, i.jsx)(p.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: o
                          ? r
                              ? k.intl.format(k.t.wiyuG9, { applicationName: n.name })
                              : c
                                ? k.intl.format(k.t.RNWFOQ, { onConnect: u })
                                : k.intl.string(k.t["9TX4UT"])
                          : (0, i.jsx)("div", { className: U.bg }),
                  }),
              ],
          });
}
function w(a) {
    let { applicationId: e } = a,
        l = (0, I.h)(e),
        { hasAlreadyLinked: s, fetched: t } = (0, j.RD)(l);
    return null == l
        ? null
        : (0, i.jsx)(p.E, {
              variant: "text-sm/medium",
              color: "text-subtle",
              children: t
                  ? s
                      ? k.intl.format(k.t.wiyuG9, { applicationName: l.name })
                      : k.intl.string(k.t["9TX4UT"])
                  : (0, i.jsx)("div", { className: U.bg }),
          });
}
l(600253);
var B = l(29854);
function V(a) {
    let { className: e } = a;
    return (0, i.jsx)("div", {
        className: n()(B.kL, e),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: B.CX,
            children: [
                (0, i.jsx)("div", { className: B.$Q }),
                (0, i.jsx)("div", {
                    className: B._A,
                    children: Array.from({ length: 4 }, (a, e) => (0, i.jsx)("div", { className: B.Tc }, e)),
                }),
            ],
        }),
    });
}
var K = l(563323);
function M() {
    return (0, i.jsxs)("div", {
        className: K.yL,
        children: [
            (0, i.jsx)("div", { className: K.si }),
            (0, i.jsx)("div", { className: K.bk }),
            (0, i.jsx)("div", { className: K.bk }),
        ],
    });
}
function X(a) {
    let { className: e, size: l } = a;
    return (0, i.jsxs)("div", {
        className: n()(K.kL, e, { [K.EX]: "small" === l }),
        "aria-hidden": !0,
        children: [(0, i.jsx)("div", { className: K.Iv }), (0, i.jsx)(M, {}), (0, i.jsx)(M, {})],
    });
}
var z = l(315629),
    Q = l(986708);
function Y(a) {
    let { size: e } = a;
    return "default" !== e
        ? null
        : (0, i.jsxs)(z.h, {
              color: "nitro-pink",
              className: Q.k,
              offsetBottom: -2.5,
              children: [
                  (0, i.jsx)(g.A, {
                      color: d.A.colors.BADGE_BACKGROUND_DEFAULT.css,
                      style: { color: d.A.colors.BADGE_TEXT_DEFAULT.css },
                  }),
                  (0, i.jsx)(p.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: k.intl.string(k.t.xIJpoK),
                  }),
              ],
          });
}
var H = l(518477),
    $ = l(600705);
let J = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: h.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => k.intl.string(k.t.xJtdIm),
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: h.VALORANT }),
        getAriaLabel: () => k.intl.string(k.t.Ae8tRi),
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({ variant: "grid", applicationIds: [h.PEAK, h.BATTLEFIELD_6, h.REPO, h.BALDURS_GATE_3] }),
        getAriaLabel: () => k.intl.string(k.t["pBR+4j"]),
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [h.MARVEL_RIVALS, h.WORLD_OF_WARCRAFT, h.RUST, h.SILKSONG],
        }),
        getAriaLabel: () => k.intl.string(k.t.NtoBi1),
    },
    [r.x.APPLICATION]: {
        placeholder: (a) => ({ variant: "application-widget", applicationId: a.applicationId }),
        icon: (a) => v.A.getApplication(a.applicationId)?.getIconURL(16),
        getAriaLabel: (a) =>
            k.intl.formatToPlainString(k.t.KfGahB, {
                applicationName: v.A.getApplication(a.applicationId)?.name ?? "",
            }),
    },
    [r.x.PERSONAL]: {
        placeholder: () => ({ variant: "personal" }),
        getAriaLabel: () => k.intl.string(k.t["1l30oB"]),
        icon: () => (0, i.jsx)(c.t, { size: "xs", color: d.A.colors.ICON_DEFAULT }),
        getTitle: () => k.intl.string(k.t.f8kllL),
        isNew: f.t0,
    },
    [r.x.CLIPS_GALLERY]: {
        placeholder: () => ({ variant: "clips-gallery" }),
        getAriaLabel: () => k.intl.string(k.t["7AVpta"]),
    },
};
function q(a) {
    let {
            widget: e,
            onAddWidget: l,
            size: t = "default",
            loading: c = !1,
            trackUserProfileEditAction: d,
            isHighlighted: v = !1,
            hideApplicationWidgetStatus: h = !1,
        } = a,
        { placeholder: f, getAriaLabel: D, icon: P, getTitle: C, isNew: G } = J[e.type],
        b = "small" === t,
        S = E.useConfig({ location: A.A.USER_PROFILE_APPLICATION_WIDGET }).enabled,
        O = e.type === r.x.APPLICATION,
        U = O ? e.applicationId : void 0,
        y = (0, I.h)(U),
        { hasAlreadyLinked: B, canStartAuthorization: K, startAuthorization: M } = (0, j.RD)(y),
        z = O && !B && K,
        { analyticsLocations: Q } = (0, N.Ay)(A.A.USER_PROFILE_APPLICATION_WIDGET),
        q = s.useCallback(() => {
            !c &&
                ((0, _.Y5)(e),
                d({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, R.XA)(H.jM.WIDGET_ADDED),
                l?.(),
                z && M({ analyticsLocations: Q }));
        }, [c, z, e, d, l, M, Q]),
        Z = s.useMemo(() => f(e), [e, f]),
        aa = P?.(e),
        ae = z && !S ? o.LinkIcon : m.U,
        al = v || (G?.() ?? !1),
        ai = !O || S,
        as = !O || !S,
        at =
            e.type === r.x.PERSONAL && "default" !== t
                ? (0, i.jsx)(g.A, {})
                : al
                  ? (0, i.jsx)(u.E, { type: "new", variant: "brand" })
                  : null;
    return (0, i.jsxs)("div", {
        className: $.LG,
        children: [
            (0, i.jsxs)(x.D, {
                className: n()($.PH, b && $.PG, c && $.Lq),
                onClick: q,
                "aria-label":
                    z && null != y ? k.intl.formatToPlainString(k.t.ATS0FK, { applicationName: y.name }) : D(e),
                "aria-busy": c,
                children: [
                    (function () {
                        let a = f(e);
                        switch (a.variant) {
                            case "details":
                                return (0, i.jsx)(T.E, {
                                    className: $.l4,
                                    gridClassName: $.Qs,
                                    gameId: a.applicationId,
                                });
                            case "grid":
                                return (0, i.jsx)(T.l, {
                                    className: $.l4,
                                    gridClassName: $.Qs,
                                    gameIds: a.applicationIds,
                                });
                            case "application-widget":
                                return (0, i.jsx)(F, { applicationId: a.applicationId, size: t });
                            case "clips-gallery":
                                return (0, i.jsx)(V, { className: $.l4 });
                            case "personal":
                                return (0, i.jsx)(X, { className: $.l4, size: t });
                            default:
                                return (0, L.xb)(a);
                        }
                    })(),
                    ai && null != at && (0, i.jsx)("div", { className: $.X4, children: at }),
                    (0, i.jsxs)("div", {
                        className: $.Lw,
                        children: [
                            (0, i.jsx)(ae, { size: "md", color: "currentColor", className: $.c9 }),
                            (0, i.jsxs)("div", {
                                className: $.DD,
                                children: [
                                    null != aa
                                        ? "string" == typeof aa
                                            ? (0, i.jsx)("img", {
                                                  src: aa,
                                                  alt: "",
                                                  width: 16,
                                                  height: 16,
                                                  className: $.Kk,
                                              })
                                            : aa
                                        : null,
                                    (0, i.jsx)(p.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: null != C ? C(e) : (0, _.L)(e),
                                    }),
                                    al && !ai && (0, i.jsx)(u.E, { type: "new", variant: "brand" }),
                                ],
                            }),
                            S &&
                                !h &&
                                "application-widget" === Z.variant &&
                                (0, i.jsx)(w, { applicationId: Z.applicationId }),
                        ],
                    }),
                ],
            }),
            as &&
                (function () {
                    let a = f(e);
                    switch (a.variant) {
                        case "application-widget":
                            return (0, i.jsx)(W, { applicationId: a.applicationId, size: t });
                        case "personal":
                            return (0, i.jsx)(Y, { size: t });
                        default:
                            return null;
                    }
                })(),
        ],
    });
}
