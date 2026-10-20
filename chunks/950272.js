i.d(l, { A: () => J });
var t = i(477900),
    e = i(582128),
    s = i(503698),
    n = i.n(s),
    r = i(540185),
    c = i(403581),
    d = i(661531),
    o = i(173936),
    p = i(245604),
    A = i(62010),
    u = i(939249),
    m = i(834730),
    x = i(793574),
    E = i(688810),
    L = i(206828),
    I = i(587895),
    N = i(429913),
    j = i(611371),
    g = i(403362);
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
var v = i(210598),
    h = i(735321),
    R = i(384377),
    T = i(492280),
    f = i(589812),
    D = i(598748),
    P = i(17928),
    O = i(141628),
    S = i(531913),
    C = i(287809),
    G = i(183555),
    b = i(105292),
    y = i(378145);
function k(a) {
    let l = (0, P.bG)([C.default], () => C.default.getCurrentUser());
    return null == l ? null : (0, t.jsx)(W, { ...a, userId: l.id });
}
function W(a) {
    let { applicationId: l, size: i = "default", userId: e } = a,
        s = (0, S.A)(e, l),
        n = s.surfaceConfigs[D.m.ADD_WIDGET_PREVIEW];
    return null == n
        ? null
        : (0, t.jsx)("div", {
              className: y.kL,
              children: (0, t.jsx)(f.kH, {
                  ...s,
                  surface: D.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: n,
                  layoutProps: { small: "small" === i },
              }),
          });
}
function F(a) {
    let { applicationId: l, size: i = "default" } = a,
        { trackUserProfileAction: s } = (0, G.NJ)(),
        n = (0, N.h)(l),
        { hasAlreadyLinked: r, canStartAuthorization: c, startAuthorization: d, fetched: o } = (0, L.RD)(n),
        { analyticsLocations: p } = (0, E.Ay)(x.A.USER_PROFILE_APPLICATION_WIDGET),
        A = e.useCallback(() => {
            c &&
                (s({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: l }),
                d({ analyticsLocations: p }));
        }, [c, s, l, d, p]);
    return "default" !== i || null == n
        ? null
        : (0, t.jsxs)("div", {
              className: y.qr,
              children: [
                  (0, t.jsx)(O.A, { size: "xs" }),
                  (0, t.jsx)(m.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: o
                          ? r
                              ? b.intl.format(b.t.wiyuG9, { applicationName: n.name })
                              : c
                                ? b.intl.format(b.t.RNWFOQ, { onConnect: A })
                                : b.intl.string(b.t["9TX4UT"])
                          : (0, t.jsx)("div", { className: y.bg }),
                  }),
              ],
          });
}
i(600253);
var U = i(307897);
function w(a) {
    let { className: l, size: i } = a;
    return (0, t.jsx)("div", {
        className: n()(U.kL, l),
        "aria-hidden": !0,
        children: (0, t.jsxs)("div", {
            className: U.CX,
            children: [
                (0, t.jsx)("div", { className: n()(U.$Q, { [U.EX]: "small" === i }) }),
                (0, t.jsx)("div", {
                    className: U._A,
                    children: Array.from({ length: 4 }, (a, l) =>
                        (0, t.jsx)("div", { className: n()(U.Tc, { [U.EX]: "small" === i }) }, l),
                    ),
                }),
            ],
        }),
    });
}
var V = i(553790);
function B() {
    return (0, t.jsxs)("div", {
        className: V.yL,
        children: [
            (0, t.jsx)("div", { className: V.si }),
            (0, t.jsx)("div", { className: V.bk }),
            (0, t.jsx)("div", { className: V.bk }),
        ],
    });
}
function z(a) {
    let { className: l, size: i } = a;
    return (0, t.jsxs)("div", {
        className: n()(V.kL, l, { [V.EX]: "small" === i }),
        "aria-hidden": !0,
        children: [(0, t.jsx)("div", { className: V.Iv }), (0, t.jsx)(B, {}), (0, t.jsx)(B, {})],
    });
}
var K = i(315629),
    M = i(706933);
function X(a) {
    let { size: l } = a;
    return "default" !== l
        ? null
        : (0, t.jsxs)(K.h, {
              color: "nitro-pink",
              className: M.k,
              offsetBottom: -2.5,
              children: [
                  (0, t.jsx)(j.A, { variant: "secondary" }),
                  (0, t.jsx)(m.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: b.intl.string(b.t.xIJpoK),
                  }),
              ],
          });
}
var Q = i(518477),
    Y = i(866680);
let H = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: _.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => b.intl.string(b.t.xJtdIm),
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: _.VALORANT }),
        getAriaLabel: () => b.intl.string(b.t.Ae8tRi),
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({ variant: "grid", applicationIds: [_.PEAK, _.BATTLEFIELD_6, _.REPO, _.BALDURS_GATE_3] }),
        getAriaLabel: () => b.intl.string(b.t["pBR+4j"]),
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [_.MARVEL_RIVALS, _.WORLD_OF_WARCRAFT, _.RUST, _.SILKSONG],
        }),
        getAriaLabel: () => b.intl.string(b.t.NtoBi1),
    },
    [r.x.APPLICATION]: {
        placeholder: (a) => ({ variant: "application-widget", applicationId: a.applicationId }),
        icon: (a) => I.A.getApplication(a.applicationId)?.getIconURL(16),
        getAriaLabel: (a) =>
            b.intl.formatToPlainString(b.t.KfGahB, {
                applicationName: I.A.getApplication(a.applicationId)?.name ?? "",
            }),
    },
    [r.x.PERSONAL]: {
        placeholder: () => ({ variant: "personal" }),
        getAriaLabel: () => b.intl.string(b.t["1l30oB"]),
        icon: () => (0, t.jsx)(c.t, { size: "xs", color: d.A.colors.ICON_DEFAULT }),
        getTitle: () => b.intl.string(b.t.f8kllL),
        isNew: v.t0,
    },
    [r.x.CLIPS_GALLERY]: {
        placeholder: () => ({ variant: "clips-gallery" }),
        getAriaLabel: () => b.intl.string(b.t["7AVpta"]),
    },
};
function J(a) {
    let {
            widget: l,
            onAddWidget: i,
            size: s = "default",
            loading: c = !1,
            trackUserProfileEditAction: d,
            isHighlighted: I = !1,
        } = a,
        { placeholder: _, getAriaLabel: v, icon: f, getTitle: D, isNew: P } = H[l.type],
        O = "small" === s,
        S = l.type === r.x.APPLICATION,
        C = S ? l.applicationId : void 0,
        G = (0, N.h)(C),
        { hasAlreadyLinked: y, canStartAuthorization: W, startAuthorization: U } = (0, L.RD)(G),
        V = S && !y && W,
        { analyticsLocations: B } = (0, E.Ay)(x.A.USER_PROFILE_APPLICATION_WIDGET),
        K = e.useCallback(() => {
            !c &&
                ((0, h.Y5)(l),
                d({ action: "WIDGET_ADDED", ...l.getProfileEditAnalyticsOptions() }),
                (0, R.XA)(Q.jM.WIDGET_ADDED),
                i?.(),
                V && U({ analyticsLocations: B }));
        }, [c, V, l, d, i, U, B]),
        M = f?.(l),
        J = V ? o.LinkIcon : p.U,
        q = I || (P?.() ?? !1),
        $ = !S,
        Z =
            l.type === r.x.PERSONAL && "default" !== s
                ? (0, t.jsx)(j.A, {})
                : q
                  ? (0, t.jsx)(A.E, { type: "new", variant: "primary" })
                  : null;
    return (0, t.jsxs)("div", {
        className: Y.LG,
        children: [
            (0, t.jsxs)(u.D, {
                className: n()(Y.PH, O && Y.PG, c && Y.Lq),
                onClick: K,
                "aria-label":
                    V && null != G ? b.intl.formatToPlainString(b.t.ATS0FK, { applicationName: G.name }) : v(l),
                "aria-busy": c,
                children: [
                    (function () {
                        let a = _(l);
                        switch (a.variant) {
                            case "details":
                                return (0, t.jsx)(T.E, {
                                    className: Y.l4,
                                    gridClassName: Y.Qs,
                                    gameId: a.applicationId,
                                });
                            case "grid":
                                return (0, t.jsx)(T.l, {
                                    className: Y.l4,
                                    gridClassName: Y.Qs,
                                    gameIds: a.applicationIds,
                                });
                            case "application-widget":
                                return (0, t.jsx)(k, { applicationId: a.applicationId, size: s });
                            case "clips-gallery":
                                return (0, t.jsx)(w, { className: Y.l4, size: s });
                            case "personal":
                                return (0, t.jsx)(z, { className: Y.l4, size: s });
                            default:
                                return (0, g.xb)(a);
                        }
                    })(),
                    $ && null != Z && (0, t.jsx)("div", { className: Y.X4, children: Z }),
                    (0, t.jsxs)("div", {
                        className: Y.Lw,
                        children: [
                            (0, t.jsx)(J, { size: "md", color: "currentColor", className: Y.c9 }),
                            (0, t.jsxs)("div", {
                                className: Y.DD,
                                children: [
                                    null != M
                                        ? "string" == typeof M
                                            ? (0, t.jsx)("img", {
                                                  src: M,
                                                  alt: "",
                                                  width: 16,
                                                  height: 16,
                                                  className: Y.Kk,
                                              })
                                            : M
                                        : null,
                                    (0, t.jsx)(m.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: null != D ? D(l) : (0, h.L)(l),
                                    }),
                                    q && !$ && (0, t.jsx)(A.E, { type: "new", variant: "primary" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (function () {
                let a = _(l);
                switch (a.variant) {
                    case "application-widget":
                        return (0, t.jsx)(F, { applicationId: a.applicationId, size: s });
                    case "personal":
                        return (0, t.jsx)(X, { size: s });
                    default:
                        return null;
                }
            })(),
        ],
    });
}
