t.r(s), t.d(s, { default: () => en }), t(801541);
var i = t(627968),
    r = t(64700),
    a = t(503698),
    l = t.n(a),
    n = t(889137),
    c = t(17928),
    d = t(873298),
    E = t(821609),
    o = t(534514),
    u = t(939249),
    m = t(285796),
    _ = t(707554),
    A = t(364522),
    T = t(817281),
    h = t(82495),
    x = t(775602),
    I = t(793574),
    S = t(688810),
    p = t(793943),
    v = t(996254),
    N = t(234419),
    j = t(792656),
    f = t(400669),
    P = t(450232),
    y = t(780964),
    C = t(766075),
    M = t(909536),
    R = t(186111),
    D = t(287809),
    g = t(174459),
    k = t(428262),
    H = t(47671),
    b = t(11029),
    w = t(973654),
    L = t(742023),
    O = t(617617),
    V = t(823459),
    G = t(652215),
    U = t(788868),
    W = t(185928);
let z = () => {
    let { previewPaneVariant: e } = (0, c.cf)([H.A], () => ({
            previewPaneVariant: H.A.isPreview ? U.tz.FREE : U.tz.PREMIUM_STANDARD,
        })),
        s = (0, c.bG)([O.A], () => {
            let e = O.A.settings.appearance?.theme;
            return `default ${e === d.Sx.LIGHT ? G.NJ8.LIGHT : G.NJ8.DARK}`;
        });
    return (0, r.useCallback)(
        (t) => {
            g.default.track(t, { preview_pane_variant: e, original_theme: s });
        },
        [e, s],
    );
};
var Y = t(562708),
    B = t(834730),
    J = t(139286),
    $ = t(738419),
    K = t(693227),
    X = t(375708),
    q = t(863816),
    F = t(114149);
function Q() {
    let { analyticsLocations: e } = (0, S.Ay)();
    return (
        (0, J.A)({
            name: Y.ImpressionNames.CUSTOM_THEMES_PREVIEW_THEMES_BANNER,
            type: Y.ImpressionTypes.VIEW,
            properties: { location_stack: e },
        }),
        (0, i.jsxs)("div", {
            className: q.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: q.r$,
                    children: [
                        (0, i.jsx)("img", { src: F.A, className: q._e, alt: "" }),
                        (0, i.jsxs)("div", {
                            className: q.P_,
                            children: [
                                (0, i.jsx)(B.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: X.intl.string(K.default.XP4jzJ),
                                }),
                                (0, i.jsx)(B.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: X.intl.string(K.default.MJYvmG),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(E.$, {
                    variant: "secondary",
                    size: "sm",
                    text: X.intl.string(K.default.eGxkmm),
                    onClick: () => {
                        (0, $.b0)($.G8.PREVIEW_THEMES),
                            (0, p.nf)(p.HP.CUSTOM_THEME, { from: p.xv.CLIENT_THEMES_EDITOR });
                    },
                    fullWidth: !0,
                }),
            ],
        })
    );
}
var Z = t(487245),
    ee = t(385803),
    es = t(49999),
    et = t(758981);
let ei = () =>
        (0, i.jsx)("div", {
            className: et.nV,
            children: (0, i.jsxs)("div", {
                className: et.mR,
                children: [
                    (0, i.jsx)(P.A, { className: et.PC, size: "md" }),
                    (0, i.jsx)(o.D, {
                        variant: "heading-md/bold",
                        color: "always-white",
                        children: X.intl.string(X.t.POSLGY),
                    }),
                ],
            }),
        }),
    er = (e) => {
        let { markAsDismissed: s } = e,
            t = z();
        return (0, i.jsxs)("div", {
            className: et.nV,
            children: [
                (0, i.jsx)(u.D, {
                    className: et.VV,
                    onClick: () => {
                        null != s && s(es.i.DISMISS), t(G.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, b.D)();
                    },
                    children: (0, i.jsx)(m.a, { size: "md", color: "currentColor", className: et.P0 }),
                }),
                (0, i.jsx)(o.D, { variant: "heading-lg/extrabold", children: X.intl.string(X.t["xSR+a/"]) }),
            ],
        });
    },
    ea = (e) => {
        let { onSubscribeSuccess: s, markAsDismissed: t } = e,
            { analyticsLocations: r } = (0, S.Ay)(I.A.CLIENT_THEMES_EDITOR),
            [a, l] = (0, c.yK)([D.default, H.A], () => [
                H.A.gradientPreset,
                k.Ay.isPremium(D.default.getCurrentUser()),
            ]),
            n = (0, N.V)(),
            E = (0, k.FY)({
                intervalType: n?.subscription_trial?.interval,
                intervalCount: n?.subscription_trial?.interval_count,
            }),
            o = l
                ? X.intl.string(X.t.IJI7yk)
                : n?.subscription_trial?.sku_id === U.pe.TIER_2
                  ? E
                  : X.intl.string(X.t.mr4K7D);
        return (0, i.jsx)(j.A, {
            subscriptionTier: U.pe.TIER_2,
            defaultTextOverride: o,
            premiumModalAnalyticsLocation: { object: G.ZSU.BUTTON_CTA, objectType: G.AnalyticsObjectTypes.BUY },
            onSubscribeModalClose: (e) => {
                e &&
                    (s?.(),
                    null != t && t(es.i.PRIMARY),
                    null != a &&
                        ((0, Z.X8)({ isPersisted: !0, themeName: d.ju[a.id], analyticsLocations: r }),
                        (0, T.u_)({ backgroundGradientPresetId: a.id, theme: a.theme })));
            },
            fullWidth: !0,
        });
    },
    el = (e) => {
        let { markAsDismissed: s, isCoachmark: t } = e,
            { isPreview: a } = (0, c.cf)([H.A], () => ({ isPreview: H.A.isPreview })),
            [l, d] = r.useState(!1),
            o = z(),
            u = (0, M.St)("client_themes_editor_footer"),
            m = (0, v.X)(
                { no: X.t["3D5yo/"], "sv-SE": X.t["3D5yo/"], uk: X.t["3D5yo/"], de: X.t["3D5yo/"] },
                X.t["dqH+qr"],
            ),
            _ = (0, n.YW)({ isPreview: a, isCoachmark: t, forceShowCloseButton: l })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => X.intl.string(X.t.cpT0Cq))
                .with({ isPreview: !0 }, () => m)
                .otherwise(() => X.intl.string(X.t.Olc2K3)),
            A = (0, i.jsx)(ea, {
                onSubscribeSuccess: () => {
                    d(!0);
                },
                markAsDismissed: s,
            });
        return (0, i.jsxs)("div", {
            className: et.N3,
            children: [
                a &&
                    (u
                        ? (0, i.jsxs)("div", {
                              className: et.rV,
                              children: [
                                  (0, i.jsx)(f.l, {
                                      size: "md",
                                      className: et.Tf,
                                      location: I.A.PREMIUM_WISHLIST_CLIENT_THEMES_EDITOR,
                                  }),
                                  A,
                              ],
                          })
                        : A),
                (0, i.jsx)(E.$, {
                    fullWidth: !0,
                    onClick: () => {
                        null != s && s(es.i.DISMISS),
                            o(G.HAw.CLIENT_THEME_PREVIEW_CLOSED),
                            (0, b.D)(),
                            t || (0, C.openUserSettings)(y.X.APPEARANCE_THEME_CATEGORY);
                    },
                    variant: "secondary",
                    text: _,
                }),
            ],
        });
    };
function en(e) {
    let { markAsDismissed: s, showClientThemesCoachmark: t, iconSize: a = ee.ni.SIZE_60 } = e,
        { analyticsLocations: n } = (0, S.Ay)(I.A.CLIENT_THEMES_EDITOR),
        d = (0, c.bG)([R.A], () => R.A.hasLayers()),
        { isPreview: E, shouldEditorAnimate: o } = (0, c.cf)([H.A, x.Ay], () => ({
            isPreview: H.A.isPreview,
            shouldEditorAnimate: t && !x.Ay.useReducedMotion,
        })),
        u = (0, p.fy)().activePanel === p.HP.CLIENT_THEMES,
        m = z();
    r.useEffect(() => m(G.HAw.CLIENT_THEME_PREVIEW_VIEWED), [m]),
        r.useEffect(() => {
            E &&
                g.default.track(G.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: U.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: n,
                });
        }, [E, n]);
    let T = (() => {
            let e = (0, c.bG)([H.A], () => H.A.gradientPreset),
                s = (0, c.bG)([L.Ay], () => L.Ay.useSystemTheme === W.Q_.ON),
                [t, i] = (0, r.useState)(s);
            return (
                (0, r.useEffect)(() => {
                    null == e && i(s);
                }, [e, s]),
                (0, r.useCallback)(() => {
                    null == e || ((0, V.S8)(), t && (0, w.k7)(W.Q_.ON));
                }, [e, t])
            );
        })(),
        v = (0, h.A)(null, E ? T : G.tEg);
    r.useEffect(() => {
        if (E && !u) return T;
    }, [E, u, T]);
    let N = r.useMemo(
        () => ({
            "--custom-client-themes-editor-content-width": `${3 * a + 48}px`,
            "--custom-client-themes-editor-padding": "16px",
        }),
        [a],
    );
    return d
        ? null
        : (0, i.jsx)(S.f5, {
              value: n,
              children: (0, i.jsx)("div", {
                  ref: v,
                  "data-app-right-panel": !0,
                  className: l()(et.HS, o ? et.hP : null),
                  style: N,
                  children: (0, i.jsxs)(_.F, {
                      children: [
                          t ? (0, i.jsx)(ei, {}) : (0, i.jsx)(er, { markAsDismissed: s }),
                          (0, i.jsx)(Q, {}),
                          (0, i.jsx)(A.Ip, {
                              className: et.sV,
                              children: (0, i.jsxs)(Z.Ay, {
                                  type: Z.v0.EDITOR,
                                  children: [
                                      !E && (0, i.jsx)(Z.Ay.Basic, { className: et.Gg, iconSize: a }),
                                      (0, i.jsx)(Z.Ay.Gradient, { className: et.Gg, isCoachmark: t, iconSize: a }),
                                  ],
                              }),
                          }),
                          (0, i.jsx)(el, { markAsDismissed: s, isCoachmark: t }),
                      ],
                  }),
              }),
          });
}
