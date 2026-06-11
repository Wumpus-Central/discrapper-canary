t.r(s), t.d(s, { default: () => el }), t(801541);
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
    T = t(364522),
    A = t(817281),
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
    C = t(780964),
    y = t(766075),
    M = t(909536),
    R = t(287809),
    D = t(174459),
    g = t(428262),
    k = t(47671),
    H = t(11029),
    b = t(973654),
    w = t(742023),
    L = t(617617),
    O = t(823459),
    V = t(652215),
    G = t(788868),
    U = t(185928);
let W = () => {
    let { previewPaneVariant: e } = (0, c.cf)([k.A], () => ({
            previewPaneVariant: k.A.isPreview ? G.tz.FREE : G.tz.PREMIUM_STANDARD,
        })),
        s = (0, c.bG)([L.A], () => {
            let e = L.A.settings.appearance?.theme;
            return `default ${e === d.Sx.LIGHT ? V.NJ8.LIGHT : V.NJ8.DARK}`;
        });
    return (0, r.useCallback)(
        (t) => {
            D.default.track(t, { preview_pane_variant: e, original_theme: s });
        },
        [e, s],
    );
};
var z = t(562708),
    Y = t(834730),
    B = t(139286),
    J = t(738419),
    $ = t(693227),
    K = t(375708),
    X = t(863816),
    q = t(114149);
function F() {
    let { analyticsLocations: e } = (0, S.Ay)();
    return (
        (0, B.A)({
            name: z.ImpressionNames.CUSTOM_THEMES_PREVIEW_THEMES_BANNER,
            type: z.ImpressionTypes.VIEW,
            properties: { location_stack: e },
        }),
        (0, i.jsxs)("div", {
            className: X.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: X.r$,
                    children: [
                        (0, i.jsx)("img", { src: q.A, className: X._e, alt: "" }),
                        (0, i.jsxs)("div", {
                            className: X.P_,
                            children: [
                                (0, i.jsx)(Y.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: K.intl.string($.default.XP4jzJ),
                                }),
                                (0, i.jsx)(Y.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: K.intl.string($.default.MJYvmG),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(E.$, {
                    variant: "secondary",
                    size: "sm",
                    text: K.intl.string($.default.eGxkmm),
                    onClick: () => {
                        (0, J.b0)(J.G8.PREVIEW_THEMES),
                            (0, p.nf)(p.HP.CUSTOM_THEME, { from: p.xv.CLIENT_THEMES_EDITOR });
                    },
                    fullWidth: !0,
                }),
            ],
        })
    );
}
var Q = t(487245),
    Z = t(385803),
    ee = t(49999),
    es = t(758981);
let et = () =>
        (0, i.jsx)("div", {
            className: es.nV,
            children: (0, i.jsxs)("div", {
                className: es.mR,
                children: [
                    (0, i.jsx)(P.A, { className: es.PC, size: "md" }),
                    (0, i.jsx)(o.D, {
                        variant: "heading-md/bold",
                        color: "always-white",
                        children: K.intl.string(K.t.POSLGY),
                    }),
                ],
            }),
        }),
    ei = (e) => {
        let { markAsDismissed: s } = e,
            t = W();
        return (0, i.jsxs)("div", {
            className: es.nV,
            children: [
                (0, i.jsx)(u.D, {
                    className: es.VV,
                    onClick: () => {
                        null != s && s(ee.i.DISMISS), t(V.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, H.D)();
                    },
                    children: (0, i.jsx)(m.a, { size: "md", color: "currentColor", className: es.P0 }),
                }),
                (0, i.jsx)(o.D, { variant: "heading-lg/extrabold", children: K.intl.string(K.t["xSR+a/"]) }),
            ],
        });
    },
    er = (e) => {
        let { onSubscribeSuccess: s, markAsDismissed: t } = e,
            { analyticsLocations: r } = (0, S.Ay)(I.A.CLIENT_THEMES_EDITOR),
            [a, l] = (0, c.yK)([R.default, k.A], () => [
                k.A.gradientPreset,
                g.Ay.isPremium(R.default.getCurrentUser()),
            ]),
            n = (0, N.V)(),
            E = (0, g.FY)({
                intervalType: n?.subscription_trial?.interval,
                intervalCount: n?.subscription_trial?.interval_count,
            }),
            o = l
                ? K.intl.string(K.t.IJI7yk)
                : n?.subscription_trial?.sku_id === G.pe.TIER_2
                  ? E
                  : K.intl.string(K.t.mr4K7D);
        return (0, i.jsx)(j.A, {
            subscriptionTier: G.pe.TIER_2,
            defaultTextOverride: o,
            premiumModalAnalyticsLocation: { object: V.ZSU.BUTTON_CTA, objectType: V.AnalyticsObjectTypes.BUY },
            onSubscribeModalClose: (e) => {
                e &&
                    (s?.(),
                    null != t && t(ee.i.PRIMARY),
                    null != a &&
                        ((0, Q.X8)({ isPersisted: !0, themeName: d.ju[a.id], analyticsLocations: r }),
                        (0, A.u_)({ backgroundGradientPresetId: a.id, theme: a.theme })));
            },
            fullWidth: !0,
        });
    },
    ea = (e) => {
        let { markAsDismissed: s, isCoachmark: t } = e,
            { isPreview: a } = (0, c.cf)([k.A], () => ({ isPreview: k.A.isPreview })),
            [l, d] = r.useState(!1),
            o = W(),
            u = (0, M.St)("client_themes_editor_footer"),
            m = (0, v.X)(
                { no: K.t["3D5yo/"], "sv-SE": K.t["3D5yo/"], uk: K.t["3D5yo/"], de: K.t["3D5yo/"] },
                K.t["dqH+qr"],
            ),
            _ = (0, n.YW)({ isPreview: a, isCoachmark: t, forceShowCloseButton: l })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => K.intl.string(K.t.cpT0Cq))
                .with({ isPreview: !0 }, () => m)
                .otherwise(() => K.intl.string(K.t.Olc2K3)),
            T = (0, i.jsx)(er, {
                onSubscribeSuccess: () => {
                    d(!0);
                },
                markAsDismissed: s,
            });
        return (0, i.jsxs)("div", {
            className: es.N3,
            children: [
                a &&
                    (u
                        ? (0, i.jsxs)("div", {
                              className: es.rV,
                              children: [
                                  (0, i.jsx)(f.l, {
                                      size: "md",
                                      className: es.Tf,
                                      location: I.A.PREMIUM_WISHLIST_CLIENT_THEMES_EDITOR,
                                  }),
                                  T,
                              ],
                          })
                        : T),
                (0, i.jsx)(E.$, {
                    fullWidth: !0,
                    onClick: () => {
                        null != s && s(ee.i.DISMISS),
                            o(V.HAw.CLIENT_THEME_PREVIEW_CLOSED),
                            (0, H.D)(),
                            t || (0, y.openUserSettings)(C.X.APPEARANCE_THEME_CATEGORY);
                    },
                    variant: "secondary",
                    text: _,
                }),
            ],
        });
    };
function el(e) {
    let { markAsDismissed: s, showClientThemesCoachmark: t, iconSize: a = Z.ni.SIZE_60 } = e,
        { analyticsLocations: n } = (0, S.Ay)(I.A.CLIENT_THEMES_EDITOR),
        { isPreview: d, shouldEditorAnimate: E } = (0, c.cf)([k.A, x.Ay], () => ({
            isPreview: k.A.isPreview,
            shouldEditorAnimate: t && !x.Ay.useReducedMotion,
        })),
        o = (0, p.fy)().activePanel === p.HP.CLIENT_THEMES,
        u = W();
    r.useEffect(() => u(V.HAw.CLIENT_THEME_PREVIEW_VIEWED), [u]),
        r.useEffect(() => {
            d &&
                D.default.track(V.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: G.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: n,
                });
        }, [d, n]);
    let m = (() => {
            let e = (0, c.bG)([k.A], () => k.A.gradientPreset),
                s = (0, c.bG)([w.Ay], () => w.Ay.useSystemTheme === U.Q_.ON),
                [t, i] = (0, r.useState)(s);
            return (
                (0, r.useEffect)(() => {
                    null == e && i(s);
                }, [e, s]),
                (0, r.useCallback)(() => {
                    null == e || ((0, O.S8)(), t && (0, b.k7)(U.Q_.ON));
                }, [e, t])
            );
        })(),
        A = (0, h.A)(null, d ? m : V.tEg);
    r.useEffect(() => {
        if (d && !o) return m;
    }, [d, o, m]);
    let v = r.useMemo(
        () => ({
            "--custom-client-themes-editor-content-width": `${3 * a + 48}px`,
            "--custom-client-themes-editor-padding": "16px",
        }),
        [a],
    );
    return (0, i.jsx)(S.f5, {
        value: n,
        children: (0, i.jsx)("div", {
            ref: A,
            "data-app-right-panel": !0,
            className: l()(es.HS, E ? es.hP : null),
            style: v,
            children: (0, i.jsxs)(_.F, {
                children: [
                    t ? (0, i.jsx)(et, {}) : (0, i.jsx)(ei, { markAsDismissed: s }),
                    (0, i.jsx)(F, {}),
                    (0, i.jsx)(T.Ip, {
                        className: es.sV,
                        children: (0, i.jsxs)(Q.Ay, {
                            type: Q.v0.EDITOR,
                            children: [
                                !d && (0, i.jsx)(Q.Ay.Basic, { className: es.Gg, iconSize: a }),
                                (0, i.jsx)(Q.Ay.Gradient, { className: es.Gg, isCoachmark: t, iconSize: a }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(ea, { markAsDismissed: s, isCoachmark: t }),
                ],
            }),
        }),
    });
}
