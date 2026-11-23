a.d(e, { A: () => J });
var i = a(477900),
    n = a(582128),
    l = a(503698),
    r = a.n(l),
    s = a(540185),
    c = a(173936),
    o = a(245604),
    d = a(805251),
    u = a(939249),
    p = a(834730),
    E = a(793574),
    A = a(688810),
    f = a(660298),
    I = a(587895),
    _ = a(429913),
    g = a(403362);
let R = {
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
Object.values(R);
var m = a(229231),
    L = a(792996);
let h = {
    [s.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: R.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => L.intl.string(L.t.xJtdIm),
    },
    [s.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: R.VALORANT }),
        getAriaLabel: () => L.intl.string(L.t.Ae8tRi),
    },
    [s.x.PLAYED_GAMES]: {
        placeholder: () => ({ variant: "grid", applicationIds: [R.PEAK, R.BATTLEFIELD_6, R.REPO, R.BALDURS_GATE_3] }),
        getAriaLabel: () => L.intl.string(L.t["pBR+4j"]),
    },
    [s.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [R.MARVEL_RIVALS, R.WORLD_OF_WARCRAFT, R.RUST, R.SILKSONG],
        }),
        getAriaLabel: () => L.intl.string(L.t.NtoBi1),
    },
    [s.x.APPLICATION]: {
        placeholder: (t) => ({ variant: "application-widget", applicationId: t.applicationId }),
        getAriaLabel: (t) =>
            L.intl.formatToPlainString(L.t.KfGahB, {
                applicationName: I.A.getApplication(t.applicationId)?.name ?? "",
            }),
    },
    [s.x.CLIPS_GALLERY]: {
        placeholder: () => ({ variant: "clips-gallery" }),
        getAriaLabel: () => L.intl.string(L.t["7AVpta"]),
    },
};
function T(t) {
    return h[t.type].placeholder(t);
}
var S = a(735321);
let N = (0, a(945810).mj)({
    name: "2026-11-game-stats-widget-skip-connect-modal",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var P = a(384377),
    y = a(492280),
    C = a(886100),
    O = a(598748),
    D = a(855986),
    x = a(141628),
    G = a(531913),
    j = a(287809),
    v = a(183555),
    b = a(378145);
function w(t) {
    let e = (0, D.bG)([j.default], () => j.default.getCurrentUser());
    return null == e ? null : (0, i.jsx)(F, { ...t, userId: e.id });
}
function F(t) {
    let { applicationId: e, size: a = "default", userId: n } = t,
        l = (0, G.A)(n, e),
        r = l.surfaceConfigs[O.m.ADD_WIDGET_PREVIEW];
    return null == r
        ? null
        : (0, i.jsx)("div", {
              className: b.kL,
              children: (0, i.jsx)(C.kH, {
                  ...l,
                  surface: O.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: r,
                  layoutProps: { small: "small" === a },
              }),
          });
}
function U(t) {
    let { applicationId: e, size: a = "default" } = t,
        { trackUserProfileAction: l } = (0, v.NJ)(),
        r = (0, _.h)(e),
        { hasAlreadyLinked: s, canStartAuthorization: c, startAuthorization: o, fetched: d } = (0, f.RD)(r),
        { analyticsLocations: u } = (0, A.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
        I = n.useCallback(() => {
            c &&
                (l({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: e }),
                o({ analyticsLocations: u }));
        }, [c, l, e, o, u]);
    return "default" !== a || null == r
        ? null
        : (0, i.jsxs)("div", {
              className: b.qr,
              children: [
                  (0, i.jsx)(x.ExperimentalGameControllerLinkIcon, { size: "xs" }),
                  (0, i.jsx)(p.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: d
                          ? s
                              ? L.intl.format(L.t.wiyuG9, { applicationName: r.name })
                              : c
                                ? L.intl.format(L.t.RNWFOQ, { onConnect: I })
                                : L.intl.string(L.t["9TX4UT"])
                          : (0, i.jsx)("div", { className: b.bg }),
                  }),
              ],
          });
}
a(600253);
var W = a(307897);
function k(t) {
    let { className: e, size: a } = t;
    return (0, i.jsx)("div", {
        className: r()(W.kL, e),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: W.CX,
            children: [
                (0, i.jsx)("div", { className: r()(W.$Q, { [W.EX]: "small" === a }) }),
                (0, i.jsx)("div", {
                    className: W._A,
                    children: Array.from({ length: 4 }, (t, e) =>
                        (0, i.jsx)("div", { className: r()(W.Tc, { [W.EX]: "small" === a }) }, e),
                    ),
                }),
            ],
        }),
    });
}
var V = a(518477),
    B = a(866680);
let H = { [s.x.APPLICATION]: { icon: (t) => I.A.getApplication(t.applicationId)?.getIconURL(16) } };
function J(t) {
    let e,
        {
            widget: a,
            onAddWidget: l,
            listItemProps: I,
            size: R = "default",
            compact: C = !1,
            loading: O = !1,
            trackUserProfileEditAction: D,
            isHighlighted: x = !1,
            onSelect: G,
        } = t,
        { icon: j } = H[a.type] ?? {},
        v = "small" === R,
        b = a.type === s.x.APPLICATION,
        F = b ? a.applicationId : void 0,
        W = (0, _.h)(F),
        { hasAlreadyLinked: J, canStartAuthorization: M, startAuthorization: K } = (0, f.RD)(W),
        q = null == G && b && !J && M,
        { analyticsLocations: X } = (0, A.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
        Y = n.useCallback(() => {
            if (!O) {
                if (null != G) return void G();
                ((0, S.Y5)(a),
                    D({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                    (0, P.XA)(V.jM.WIDGET_ADDED),
                    l?.(),
                    q &&
                        !N.getConfig({ location: "UserProfileWidgetOptionAddButton" }).enabled &&
                        K({ analyticsLocations: X }));
            }
        }, [O, G, q, a, D, l, K, X]),
        z = j?.(a),
        Q =
            null == z
                ? null
                : "string" == typeof z
                  ? (0, i.jsx)("img", { src: z, alt: "", width: 16, height: 16, className: B.Kk })
                  : z,
        $ = C && b,
        Z = q ? c.LinkIcon : o.CirclePlusIcon,
        tt = !b,
        te = x ? (0, i.jsx)(d.E, { type: "new", variant: "primary" }) : null;
    return (0, i.jsxs)("div", {
        className: r()(B.LG, C && B.oE),
        children: [
            (0, i.jsxs)(u.D, {
                className: r()(B.PH, v && B.PG, O && B.Lq),
                ...I,
                onClick: Y,
                "aria-label":
                    q && null != W
                        ? L.intl.formatToPlainString(L.t.ATS0FK, { applicationName: W.name })
                        : h[a.type].getAriaLabel(a),
                "aria-busy": O,
                children: [
                    (function () {
                        let t = T(a);
                        switch (t.variant) {
                            case "details":
                                return (0, i.jsx)(y.E, {
                                    className: B.l4,
                                    gridClassName: B.Qs,
                                    gameId: t.applicationId,
                                });
                            case "grid":
                                return (0, i.jsx)(y.l, {
                                    className: B.l4,
                                    gridClassName: B.Qs,
                                    gameIds: t.applicationIds,
                                });
                            case "application-widget":
                                return (0, i.jsx)(w, { applicationId: t.applicationId, size: R });
                            case "clips-gallery":
                                return (0, i.jsx)(k, { className: B.l4, size: R });
                            default:
                                return (0, g.xb)(t);
                        }
                    })(),
                    tt && null != te && (0, i.jsx)("div", { className: B.X4, children: te }),
                    (0, i.jsxs)("div", {
                        className: B.Lw,
                        children: [
                            (0, i.jsx)(Z, { size: "md", color: "currentColor", className: B.c9 }),
                            (0, i.jsxs)("div", {
                                className: B.DD,
                                children: [
                                    !$ && Q,
                                    (0, i.jsx)(p.E, {
                                        variant: $ ? "body-sm/semibold" : "body-md/medium",
                                        color: C ? "text-default" : "text-strong",
                                        children: (function (t) {
                                            let { getTitle: e } = h[t.type];
                                            return null != e ? e(t) : m.Ok[t.type](t);
                                        })(a),
                                    }),
                                    $ && Q,
                                    x && !tt && (0, i.jsx)(d.E, { type: "new", variant: "primary" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            "application-widget" === (e = T(a)).variant
                ? (0, i.jsx)(U, { applicationId: e.applicationId, size: R })
                : null,
        ],
    });
}
