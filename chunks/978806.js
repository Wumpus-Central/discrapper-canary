t.d(l, { A: () => Z });
var e = t(477900),
    i = t(582128),
    s = t(503698),
    n = t.n(s),
    r = t(540185),
    c = t(403581),
    d = t(661531),
    o = t(173936),
    p = t(245604),
    A = t(62010),
    u = t(939249),
    m = t(834730),
    x = t(793574),
    E = t(688810),
    L = t(206828),
    I = t(587895),
    N = t(429913),
    g = t(611371),
    j = t(403362);
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
var _ = t(229231),
    h = t(105292);
let f = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: v.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => h.intl.string(h.t.xJtdIm),
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: v.VALORANT }),
        getAriaLabel: () => h.intl.string(h.t.Ae8tRi),
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({ variant: "grid", applicationIds: [v.PEAK, v.BATTLEFIELD_6, v.REPO, v.BALDURS_GATE_3] }),
        getAriaLabel: () => h.intl.string(h.t["pBR+4j"]),
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [v.MARVEL_RIVALS, v.WORLD_OF_WARCRAFT, v.RUST, v.SILKSONG],
        }),
        getAriaLabel: () => h.intl.string(h.t.NtoBi1),
    },
    [r.x.APPLICATION]: {
        placeholder: (a) => ({ variant: "application-widget", applicationId: a.applicationId }),
        getAriaLabel: (a) =>
            h.intl.formatToPlainString(h.t.KfGahB, {
                applicationName: I.A.getApplication(a.applicationId)?.name ?? "",
            }),
    },
    [r.x.PERSONAL]: {
        placeholder: () => ({ variant: "personal" }),
        getAriaLabel: () => h.intl.string(h.t["1l30oB"]),
        getTitle: () => h.intl.string(h.t.f8kllL),
    },
    [r.x.CLIPS_GALLERY]: {
        placeholder: () => ({ variant: "clips-gallery" }),
        getAriaLabel: () => h.intl.string(h.t["7AVpta"]),
    },
};
function R(a) {
    return f[a.type].placeholder(a);
}
var T = t(210598),
    P = t(735321),
    D = t(384377),
    O = t(492280),
    S = t(589812),
    C = t(598748),
    G = t(17928),
    b = t(141628),
    y = t(531913),
    k = t(287809),
    W = t(183555),
    F = t(378145);
function U(a) {
    let l = (0, G.bG)([k.default], () => k.default.getCurrentUser());
    return null == l ? null : (0, e.jsx)(w, { ...a, userId: l.id });
}
function w(a) {
    let { applicationId: l, size: t = "default", userId: i } = a,
        s = (0, y.A)(i, l),
        n = s.surfaceConfigs[C.m.ADD_WIDGET_PREVIEW];
    return null == n
        ? null
        : (0, e.jsx)("div", {
              className: F.kL,
              children: (0, e.jsx)(S.kH, {
                  ...s,
                  surface: C.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: n,
                  layoutProps: { small: "small" === t },
              }),
          });
}
function V(a) {
    let { applicationId: l, size: t = "default" } = a,
        { trackUserProfileAction: s } = (0, W.NJ)(),
        n = (0, N.h)(l),
        { hasAlreadyLinked: r, canStartAuthorization: c, startAuthorization: d, fetched: o } = (0, L.RD)(n),
        { analyticsLocations: p } = (0, E.Ay)(x.A.USER_PROFILE_APPLICATION_WIDGET),
        A = i.useCallback(() => {
            c &&
                (s({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: l }),
                d({ analyticsLocations: p }));
        }, [c, s, l, d, p]);
    return "default" !== t || null == n
        ? null
        : (0, e.jsxs)("div", {
              className: F.qr,
              children: [
                  (0, e.jsx)(b.A, { size: "xs" }),
                  (0, e.jsx)(m.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: o
                          ? r
                              ? h.intl.format(h.t.wiyuG9, { applicationName: n.name })
                              : c
                                ? h.intl.format(h.t.RNWFOQ, { onConnect: A })
                                : h.intl.string(h.t["9TX4UT"])
                          : (0, e.jsx)("div", { className: F.bg }),
                  }),
              ],
          });
}
t(600253);
var B = t(307897);
function z(a) {
    let { className: l, size: t } = a;
    return (0, e.jsx)("div", {
        className: n()(B.kL, l),
        "aria-hidden": !0,
        children: (0, e.jsxs)("div", {
            className: B.CX,
            children: [
                (0, e.jsx)("div", { className: n()(B.$Q, { [B.EX]: "small" === t }) }),
                (0, e.jsx)("div", {
                    className: B._A,
                    children: Array.from({ length: 4 }, (a, l) =>
                        (0, e.jsx)("div", { className: n()(B.Tc, { [B.EX]: "small" === t }) }, l),
                    ),
                }),
            ],
        }),
    });
}
var K = t(553790);
function M() {
    return (0, e.jsxs)("div", {
        className: K.yL,
        children: [
            (0, e.jsx)("div", { className: K.si }),
            (0, e.jsx)("div", { className: K.bk }),
            (0, e.jsx)("div", { className: K.bk }),
        ],
    });
}
function X(a) {
    let { className: l, size: t } = a;
    return (0, e.jsxs)("div", {
        className: n()(K.kL, l, { [K.EX]: "small" === t }),
        "aria-hidden": !0,
        children: [(0, e.jsx)("div", { className: K.Iv }), (0, e.jsx)(M, {}), (0, e.jsx)(M, {})],
    });
}
var Q = t(315629),
    Y = t(706933);
function H(a) {
    let { size: l } = a;
    return "default" !== l
        ? null
        : (0, e.jsxs)(Q.h, {
              color: "nitro-pink",
              className: Y.k,
              offsetBottom: -2.5,
              children: [
                  (0, e.jsx)(g.A, { variant: "secondary" }),
                  (0, e.jsx)(m.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: h.intl.string(h.t.xIJpoK),
                  }),
              ],
          });
}
var J = t(518477),
    q = t(866680);
let $ = {
    [r.x.APPLICATION]: { icon: (a) => I.A.getApplication(a.applicationId)?.getIconURL(16) },
    [r.x.PERSONAL]: { icon: () => (0, e.jsx)(c.t, { size: "xs", color: d.A.colors.ICON_DEFAULT }), isNew: T.t0 },
};
function Z(a) {
    let {
            widget: l,
            onAddWidget: t,
            listItemProps: s,
            size: c = "default",
            compact: d = !1,
            loading: I = !1,
            trackUserProfileEditAction: v,
            isHighlighted: T = !1,
        } = a,
        { icon: S, isNew: C } = $[l.type] ?? {},
        G = "small" === c,
        b = l.type === r.x.APPLICATION,
        y = b ? l.applicationId : void 0,
        k = (0, N.h)(y),
        { hasAlreadyLinked: W, canStartAuthorization: F, startAuthorization: w } = (0, L.RD)(k),
        B = b && !W && F,
        { analyticsLocations: K } = (0, E.Ay)(x.A.USER_PROFILE_APPLICATION_WIDGET),
        M = i.useCallback(() => {
            !I &&
                ((0, P.Y5)(l),
                v({ action: "WIDGET_ADDED", ...l.getProfileEditAnalyticsOptions() }),
                (0, D.XA)(J.jM.WIDGET_ADDED),
                t?.(),
                B && w({ analyticsLocations: K }));
        }, [I, B, l, v, t, w, K]),
        Q = S?.(l),
        Y =
            null == Q
                ? null
                : "string" == typeof Q
                  ? (0, e.jsx)("img", { src: Q, alt: "", width: 16, height: 16, className: q.Kk })
                  : Q,
        Z = d && b,
        aa = B ? o.LinkIcon : p.U,
        al = T || (C?.() ?? !1),
        at = !b,
        ae =
            l.type === r.x.PERSONAL && "default" !== c
                ? (0, e.jsx)(g.A, {})
                : al
                  ? (0, e.jsx)(A.E, { type: "new", variant: "primary" })
                  : null;
    return (0, e.jsxs)("div", {
        className: n()(q.LG, d && q.oE),
        children: [
            (0, e.jsxs)(u.D, {
                className: n()(q.PH, G && q.PG, I && q.Lq),
                ...s,
                onClick: M,
                "aria-label":
                    B && null != k
                        ? h.intl.formatToPlainString(h.t.ATS0FK, { applicationName: k.name })
                        : f[l.type].getAriaLabel(l),
                "aria-busy": I,
                children: [
                    (function () {
                        let a = R(l);
                        switch (a.variant) {
                            case "details":
                                return (0, e.jsx)(O.E, {
                                    className: q.l4,
                                    gridClassName: q.Qs,
                                    gameId: a.applicationId,
                                });
                            case "grid":
                                return (0, e.jsx)(O.l, {
                                    className: q.l4,
                                    gridClassName: q.Qs,
                                    gameIds: a.applicationIds,
                                });
                            case "application-widget":
                                return (0, e.jsx)(U, { applicationId: a.applicationId, size: c });
                            case "clips-gallery":
                                return (0, e.jsx)(z, { className: q.l4, size: c });
                            case "personal":
                                return (0, e.jsx)(X, { className: q.l4, size: c });
                            default:
                                return (0, j.xb)(a);
                        }
                    })(),
                    at && null != ae && (0, e.jsx)("div", { className: q.X4, children: ae }),
                    (0, e.jsxs)("div", {
                        className: q.Lw,
                        children: [
                            (0, e.jsx)(aa, { size: "md", color: "currentColor", className: q.c9 }),
                            (0, e.jsxs)("div", {
                                className: q.DD,
                                children: [
                                    !Z && Y,
                                    (0, e.jsx)(m.E, {
                                        variant: Z ? "text-sm/semibold" : "text-md/medium",
                                        color: d ? "text-default" : "text-strong",
                                        children: (function (a) {
                                            let { getTitle: l } = f[a.type];
                                            return null != l ? l(a) : _.Ok[a.type](a);
                                        })(l),
                                    }),
                                    Z && Y,
                                    al && !at && (0, e.jsx)(A.E, { type: "new", variant: "primary" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (function () {
                let a = R(l);
                switch (a.variant) {
                    case "application-widget":
                        return (0, e.jsx)(V, { applicationId: a.applicationId, size: c });
                    case "personal":
                        return (0, e.jsx)(H, { size: c });
                    default:
                        return null;
                }
            })(),
        ],
    });
}
