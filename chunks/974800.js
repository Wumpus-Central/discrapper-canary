s.r(t), s.d(t, { default: () => ec }), s(801541);
var i = s(477900),
    n = s(582128),
    r = s(503698),
    a = s.n(r),
    l = s(889137),
    c = s(17928),
    d = s(873298),
    o = s(821609),
    u = s(462887),
    E = s(297264),
    m = s(939249),
    T = s(285796),
    A = s(707554),
    h = s(364522),
    _ = s(817281),
    I = s(82495),
    x = s(775602),
    f = s(793574),
    S = s(688810),
    N = s(793943),
    p = s(996254),
    v = s(732280),
    j = s(792656),
    P = s(41219),
    C = s(450232),
    y = s(973654),
    M = s(780964),
    D = s(141343),
    R = s(766075),
    g = s(186111),
    k = s(287809),
    H = s(174459),
    b = s(158045),
    L = s(823459),
    w = s(147248),
    G = s(11029),
    O = s(742023),
    V = s(617617),
    U = s(652215),
    W = s(202541),
    z = s(185928);
function X() {
    let { previewPaneVariant: e } = (0, c.cf)([w.A], () => ({
            previewPaneVariant: w.A.isPreview ? W.tz.FREE : W.tz.PREMIUM_STANDARD,
        })),
        t = (0, c.bG)([V.A], () => {
            let e = V.A.settings.appearance?.theme;
            return `default ${e === d.Sx.LIGHT ? U.NJ8.LIGHT : U.NJ8.DARK}`;
        });
    return (0, n.useCallback)(
        (s) => {
            H.default.track(s, { preview_pane_variant: e, original_theme: t });
        },
        [e, t],
    );
}
var Y = s(562708),
    $ = s(834730),
    B = s(139286),
    F = s(738419),
    J = s(767243),
    K = s(375708),
    q = s(663635),
    Q = s(114149);
function Z() {
    let { analyticsLocations: e } = (0, S.Ay)();
    return (
        (0, B.A)({
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
                        (0, i.jsx)("img", { src: Q.A, className: q._e, alt: "" }),
                        (0, i.jsxs)("div", {
                            className: q.P_,
                            children: [
                                (0, i.jsx)($.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: K.intl.string(J.default.XP4jzJ),
                                }),
                                (0, i.jsx)($.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: K.intl.string(J.default.MJYvmG),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(o.$, {
                    variant: "secondary",
                    size: "sm",
                    text: K.intl.string(J.default.eGxkmm),
                    onClick: function () {
                        (0, F.b0)(F.G8.PREVIEW_THEMES),
                            (0, N.nf)(N.HP.CUSTOM_THEME, { from: N.xv.CLIENT_THEMES_EDITOR });
                    },
                    fullWidth: !0,
                }),
            ],
        })
    );
}
var ee = s(487245),
    et = s(385803),
    es = s(49999),
    ei = s(737440);
function en() {
    return (0, i.jsx)("div", {
        className: ei.nV,
        children: (0, i.jsxs)("div", {
            className: ei.mR,
            children: [
                (0, i.jsx)(C.A, { className: ei.PC, size: "md" }),
                (0, i.jsx)(E.D, {
                    variant: "heading-md/bold",
                    color: "text-overlay-light",
                    children: K.intl.string(K.t.POSLGY),
                }),
            ],
        }),
    });
}
function er(e) {
    let { markAsDismissed: t } = e,
        s = X();
    return (0, i.jsxs)("div", {
        className: ei.nV,
        children: [
            (0, i.jsx)(m.D, {
                className: ei.VV,
                onClick: function () {
                    null != t && t(es.i.DISMISS), s(U.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, G.D)();
                },
                children: (0, i.jsx)(T.a, { size: "md", color: "currentColor", className: ei.P0 }),
            }),
            (0, i.jsx)(E.D, { variant: "heading-lg/extrabold", children: K.intl.string(K.t["xSR+a/"]) }),
        ],
    });
}
function ea(e) {
    let { onSubscribeSuccess: t, markAsDismissed: s } = e,
        { analyticsLocations: n } = (0, S.Ay)(f.A.CLIENT_THEMES_EDITOR),
        [r, a] = (0, c.yK)([k.default, w.A], () => [w.A.gradientPreset, b.Ay.isPremium(k.default.getCurrentUser())]),
        l = (0, D.V)(),
        o = (0, v.V)(),
        E = (0, b.FY)({
            intervalType: o?.subscriptionTrial?.interval,
            intervalCount: o?.subscriptionTrial?.intervalCount,
        }),
        m = a ? K.intl.string(K.t.IJI7yk) : o?.subscriptionTrial?.skuId === W.pe.TIER_2 ? E : K.intl.string(K.t.mr4K7D);
    return (0, i.jsx)(j.A, {
        subscriptionTier: W.pe.TIER_2,
        defaultTextOverride: m,
        premiumModalAnalyticsLocation: { object: U.ZSU.BUTTON_CTA, objectType: U.AnalyticsObjectTypes.BUY },
        onSubscribeModalClose: function (e) {
            if (e && (t?.(), null != s && s(es.i.PRIMARY), null != r)) {
                if (l) {
                    let e = (0, u.M)(r.theme) ? z.Fc.DARK : z.Fc.LIGHT;
                    (0, ee.X8)({ isPersisted: !0, themeName: `${e}-mode-${d.ju[r.id]}`, analyticsLocations: n }),
                        (0, y.NA)({ [e]: r.theme }),
                        (0, y.qX)(e, { backgroundGradientPresetId: r.id }),
                        (0, L.S8)(),
                        (0, G.D)();
                    return;
                }
                (0, ee.X8)({ isPersisted: !0, themeName: d.ju[r.id], analyticsLocations: n }),
                    (0, _.u_)({ backgroundGradientPresetId: r.id, theme: r.theme }),
                    (0, y.XG)();
            }
        },
        fullWidth: !0,
    });
}
function el(e) {
    let { markAsDismissed: t, isCoachmark: s } = e,
        { isPreview: r } = (0, c.cf)([w.A], () => ({ isPreview: w.A.isPreview })),
        [a, d] = n.useState(!1),
        u = X(),
        E = (0, p.X)(
            { no: K.t["3D5yo/"], "sv-SE": K.t["3D5yo/"], uk: K.t["3D5yo/"], de: K.t["3D5yo/"] },
            K.t["dqH+qr"],
        ),
        m = (0, l.YW)({ isPreview: r, isCoachmark: s, forceShowCloseButton: a })
            .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => K.intl.string(K.t.cpT0Cq))
            .with({ isPreview: !0 }, () => E)
            .otherwise(() => K.intl.string(K.t.Olc2K3)),
        T = (0, i.jsx)(ea, {
            onSubscribeSuccess: () => {
                d(!0);
            },
            markAsDismissed: t,
        });
    return (0, i.jsxs)("div", {
        className: ei.N3,
        children: [
            r &&
                (0, i.jsxs)("div", {
                    className: ei.rV,
                    children: [
                        (0, i.jsx)(P.l, {
                            size: "md",
                            className: ei.Tf,
                            location: f.A.PREMIUM_WISHLIST_CLIENT_THEMES_EDITOR,
                        }),
                        T,
                    ],
                }),
            (0, i.jsx)(o.$, {
                fullWidth: !0,
                onClick: function () {
                    null != t && t(es.i.DISMISS),
                        u(U.HAw.CLIENT_THEME_PREVIEW_CLOSED),
                        (0, G.D)(),
                        s || (0, R.openUserSettings)(M.X.APPEARANCE_THEME_CATEGORY);
                },
                variant: "secondary",
                text: m,
            }),
        ],
    });
}
function ec(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: s, iconSize: r = et.ni.SIZE_60 } = e,
        { analyticsLocations: l } = (0, S.Ay)(f.A.CLIENT_THEMES_EDITOR),
        d = (0, c.bG)([g.A], () => g.A.hasLayers()),
        { isPreview: o, shouldEditorAnimate: u } = (0, c.cf)([w.A, x.Ay], () => ({
            isPreview: w.A.isPreview,
            shouldEditorAnimate: s && !x.Ay.useReducedMotion,
        })),
        E = (0, N.fy)().activePanel === N.HP.CLIENT_THEMES,
        m = X();
    n.useEffect(() => m(U.HAw.CLIENT_THEME_PREVIEW_VIEWED), [m]),
        n.useEffect(() => {
            o &&
                H.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: W.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: l,
                });
        }, [o, l]);
    let T = (() => {
            let e = (0, c.bG)([w.A], () => w.A.gradientPreset),
                t = (0, c.bG)([O.Ay], () => O.Ay.useSystemTheme === z.Q_.ON),
                [s, i] = (0, n.useState)(t);
            return (
                (0, n.useEffect)(() => {
                    null == e && i(t);
                }, [e, t]),
                (0, n.useCallback)(() => {
                    null == e || ((0, L.S8)(), (0, y.XG)(), s && (0, y.k7)(z.Q_.ON));
                }, [e, s])
            );
        })(),
        _ = (0, I.A)(null, o ? T : U.tEg);
    n.useEffect(() => {
        if (o && !E) return T;
    }, [o, E, T]);
    let p = n.useMemo(
        () => ({
            "--custom-client-themes-editor-content-width": `${3 * r + 48}px`,
            "--custom-client-themes-editor-padding": "16px",
        }),
        [r],
    );
    return d
        ? null
        : (0, i.jsx)(S.f5, {
              value: l,
              children: (0, i.jsx)("div", {
                  ref: _,
                  "data-app-right-panel": !0,
                  className: a()(ei.HS, u ? ei.hP : null),
                  style: p,
                  children: (0, i.jsxs)(A.F, {
                      children: [
                          s ? (0, i.jsx)(en, {}) : (0, i.jsx)(er, { markAsDismissed: t }),
                          (0, i.jsx)(Z, {}),
                          (0, i.jsx)(h.Ip, {
                              className: ei.sV,
                              children: (0, i.jsxs)(ee.Ay, {
                                  type: ee.v0.EDITOR,
                                  children: [
                                      !o && (0, i.jsx)(ee.Ay.Basic, { className: ei.Gg, iconSize: r }),
                                      (0, i.jsx)(ee.Ay.Gradient, { className: ei.Gg, isCoachmark: s, iconSize: r }),
                                  ],
                              }),
                          }),
                          (0, i.jsx)(el, { markAsDismissed: t, isCoachmark: s }),
                      ],
                  }),
              }),
          });
}
