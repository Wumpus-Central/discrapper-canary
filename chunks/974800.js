a.r(t), a.d(t, { default: () => en }), a(801541);
var s = a(627968),
    r = a(64700),
    i = a(503698),
    n = a.n(i),
    l = a(889137),
    c = a(17928),
    _ = a(873298),
    E = a(821609),
    o = a(534514),
    d = a(939249),
    T = a(285796),
    u = a(707554),
    m = a(364522),
    S = a(817281),
    A = a(82495),
    C = a(775602),
    f = a(793574),
    H = a(688810),
    O = a(793943),
    M = a(996254),
    N = a(234419),
    I = a(792656),
    p = a(400669),
    R = a(450232),
    h = a(780964),
    D = a(858897),
    x = a(909536),
    k = a(287809),
    P = a(954571),
    v = a(927578),
    w = a(47671),
    U = a(11029),
    L = a(973654),
    y = a(964404),
    j = a(617617),
    g = a(823459),
    b = a(652215),
    G = a(788868),
    V = a(185928);
let W = () => {
    let { previewPaneVariant: e } = (0, c.cf)([w.A], () => ({
            previewPaneVariant: w.A.isPreview ? G.tz.FREE : G.tz.PREMIUM_STANDARD,
        })),
        t = (0, c.bG)([j.A], () => {
            let e = j.A.settings.appearance?.theme;
            return `default ${e === _.Sx.LIGHT ? b.NJ8.LIGHT : b.NJ8.DARK}`;
        });
    return (0, r.useCallback)(
        (a) => {
            P.default.track(a, { preview_pane_variant: e, original_theme: t });
        },
        [e, t],
    );
};
var B = a(110259),
    z = a(834730),
    K = a(139286),
    Y = a(738419),
    J = a(693227),
    $ = a(985018),
    F = a(863816),
    X = a(114149);
function q() {
    let { analyticsLocations: e } = (0, H.Ay)();
    return (
        (0, K.A)({
            name: B.ImpressionNames.CUSTOM_THEMES_PREVIEW_THEMES_BANNER,
            type: B.ImpressionTypes.VIEW,
            properties: { location_stack: e },
        }),
        (0, s.jsxs)("div", {
            className: F.kL,
            children: [
                (0, s.jsxs)("div", {
                    className: F.r$,
                    children: [
                        (0, s.jsx)("img", { src: X.A, className: F._e, alt: "" }),
                        (0, s.jsxs)("div", {
                            className: F.P_,
                            children: [
                                (0, s.jsx)(z.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: $.intl.string(J.default.XP4jzJ),
                                }),
                                (0, s.jsx)(z.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: $.intl.string(J.default.MJYvmG),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, s.jsx)(E.$, {
                    variant: "secondary",
                    size: "sm",
                    text: $.intl.string(J.default.eGxkmm),
                    onClick: () => {
                        (0, Y.b0)(Y.G8.PREVIEW_THEMES),
                            (0, O.nf)(O.HP.CUSTOM_THEME, { from: O.xv.CLIENT_THEMES_EDITOR });
                    },
                    fullWidth: !0,
                }),
            ],
        })
    );
}
var Q = a(692798),
    Z = a(385803),
    ee = a(49999),
    et = a(758981);
let ea = () =>
        (0, s.jsx)("div", {
            className: et.nV,
            children: (0, s.jsxs)("div", {
                className: et.mR,
                children: [
                    (0, s.jsx)(R.A, { className: et.PC, size: "md" }),
                    (0, s.jsx)(o.D, {
                        variant: "heading-md/bold",
                        color: "always-white",
                        children: $.intl.string($.t.POSLGY),
                    }),
                ],
            }),
        }),
    es = (e) => {
        let { markAsDismissed: t } = e,
            a = W();
        return (0, s.jsxs)("div", {
            className: et.nV,
            children: [
                (0, s.jsx)(d.D, {
                    className: et.VV,
                    onClick: () => {
                        null != t && t(ee.i.DISMISS), a(b.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, U.D)();
                    },
                    children: (0, s.jsx)(T.a, { size: "md", color: "currentColor", className: et.P0 }),
                }),
                (0, s.jsx)(o.D, { variant: "heading-lg/extrabold", children: $.intl.string($.t["xSR+a/"]) }),
            ],
        });
    },
    er = (e) => {
        let { onSubscribeSuccess: t, markAsDismissed: a } = e,
            { analyticsLocations: r } = (0, H.Ay)(f.A.CLIENT_THEMES_EDITOR),
            [i, n] = (0, c.yK)([k.default, w.A], () => [
                w.A.gradientPreset,
                v.Ay.isPremium(k.default.getCurrentUser()),
            ]),
            l = (0, N.V)(),
            E = (0, v.FY)({
                intervalType: l?.subscription_trial?.interval,
                intervalCount: l?.subscription_trial?.interval_count,
            }),
            o = n
                ? $.intl.string($.t.IJI7yk)
                : l?.subscription_trial?.sku_id === G.pe.TIER_2
                  ? E
                  : $.intl.string($.t.mr4K7D);
        return (0, s.jsx)(I.A, {
            subscriptionTier: G.pe.TIER_2,
            defaultTextOverride: o,
            premiumModalAnalyticsLocation: { object: b.ZSU.BUTTON_CTA, objectType: b.AnalyticsObjectTypes.BUY },
            onSubscribeModalClose: (e) => {
                e &&
                    (t?.(),
                    null != a && a(ee.i.PRIMARY),
                    null != i &&
                        ((0, Q.X8)({ isPersisted: !0, themeName: _.ju[i.id], analyticsLocations: r }),
                        (0, S.u_)({ backgroundGradientPresetId: i.id, theme: i.theme })));
            },
            fullWidth: !0,
        });
    },
    ei = (e) => {
        let { markAsDismissed: t, isCoachmark: a } = e,
            { isPreview: i } = (0, c.cf)([w.A], () => ({ isPreview: w.A.isPreview })),
            [n, _] = r.useState(!1),
            o = W(),
            d = (0, x.St)("client_themes_editor_footer"),
            T = (0, M.X)(
                { no: $.t["3D5yo/"], "sv-SE": $.t["3D5yo/"], uk: $.t["3D5yo/"], de: $.t["3D5yo/"] },
                $.t["dqH+qr"],
            ),
            u = (0, l.YW)({ isPreview: i, isCoachmark: a, forceShowCloseButton: n })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => $.intl.string($.t.cpT0Cq))
                .with({ isPreview: !0 }, () => T)
                .otherwise(() => $.intl.string($.t.Olc2K3)),
            m = (0, s.jsx)(er, {
                onSubscribeSuccess: () => {
                    _(!0);
                },
                markAsDismissed: t,
            });
        return (0, s.jsxs)("div", {
            className: et.N3,
            children: [
                i &&
                    (d
                        ? (0, s.jsxs)("div", {
                              className: et.rV,
                              children: [
                                  (0, s.jsx)(p.l, {
                                      size: "md",
                                      className: et.Tf,
                                      location: f.A.PREMIUM_WISHLIST_CLIENT_THEMES_EDITOR,
                                  }),
                                  m,
                              ],
                          })
                        : m),
                (0, s.jsx)(E.$, {
                    fullWidth: !0,
                    onClick: () => {
                        null != t && t(ee.i.DISMISS),
                            o(b.HAw.CLIENT_THEME_PREVIEW_CLOSED),
                            (0, U.D)(),
                            a || (0, D.openUserSettings)(h.X.APPEARANCE_THEME_CATEGORY);
                    },
                    variant: "secondary",
                    text: u,
                }),
            ],
        });
    };
function en(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: a, iconSize: i = Z.ni.SIZE_60 } = e,
        { analyticsLocations: l } = (0, H.Ay)(f.A.CLIENT_THEMES_EDITOR),
        { isPreview: _, shouldEditorAnimate: E } = (0, c.cf)([w.A, C.A], () => ({
            isPreview: w.A.isPreview,
            shouldEditorAnimate: a && !C.A.useReducedMotion,
        })),
        o = (0, O.fy)().activePanel === O.HP.CLIENT_THEMES,
        d = W();
    r.useEffect(() => d(b.HAw.CLIENT_THEME_PREVIEW_VIEWED), [d]),
        r.useEffect(() => {
            _ &&
                P.default.track(b.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: G.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: l,
                });
        }, [_, l]);
    let T = (() => {
            let e = (0, c.bG)([w.A], () => w.A.gradientPreset),
                t = (0, c.bG)([y.Ay], () => y.Ay.useSystemTheme === V.Q_.ON),
                [a, s] = (0, r.useState)(t);
            return (
                (0, r.useEffect)(() => {
                    null == e && s(t);
                }, [e, t]),
                (0, r.useCallback)(() => {
                    null == e || ((0, g.S8)(), a && (0, L.k7)(V.Q_.ON));
                }, [e, a])
            );
        })(),
        S = (0, A.A)(null, _ ? T : b.tEg);
    r.useEffect(() => {
        if (_ && !o) return T;
    }, [_, o, T]);
    let M = r.useMemo(
        () => ({
            "--custom-client-themes-editor-content-width": `${3 * i + 48}px`,
            "--custom-client-themes-editor-padding": "16px",
        }),
        [i],
    );
    return (0, s.jsx)(H.f5, {
        value: l,
        children: (0, s.jsx)("div", {
            ref: S,
            "data-app-right-panel": !0,
            className: n()(et.HS, E ? et.hP : null),
            style: M,
            children: (0, s.jsxs)(u.F, {
                children: [
                    a ? (0, s.jsx)(ea, {}) : (0, s.jsx)(es, { markAsDismissed: t }),
                    (0, s.jsx)(q, {}),
                    (0, s.jsx)(m.Ip, {
                        className: et.sV,
                        children: (0, s.jsxs)(Q.Ay, {
                            type: Q.v0.EDITOR,
                            children: [
                                !_ && (0, s.jsx)(Q.Ay.Basic, { className: et.Gg, iconSize: i }),
                                (0, s.jsx)(Q.Ay.Gradient, { className: et.Gg, isCoachmark: a, iconSize: i }),
                            ],
                        }),
                    }),
                    (0, s.jsx)(ei, { markAsDismissed: t, isCoachmark: a }),
                ],
            }),
        }),
    });
}
