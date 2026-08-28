s.r(t), s.d(t, { default: () => eE }), s(801541);
var i = s(477900),
    n = s(582128),
    r = s(503698),
    a = s.n(r),
    l = s(889137),
    c = s(17928),
    d = s(873298),
    E = s(821609),
    o = s(462887),
    u = s(297264),
    m = s(939249),
    T = s(285796),
    _ = s(707554),
    A = s(364522),
    I = s(817281),
    h = s(82495),
    x = s(775602),
    f = s(793574),
    S = s(688810),
    N = s(793943),
    p = s(996254),
    v = s(10392),
    P = s(82498),
    j = s(732280),
    M = s(792656),
    C = s(285373),
    y = s(450232),
    R = s(973654),
    D = s(780964),
    g = s(141343),
    k = s(766075),
    H = s(186111),
    b = s(287809),
    L = s(174459),
    w = s(158045),
    G = s(823459),
    O = s(147248),
    U = s(11029),
    V = s(742023),
    W = s(617617),
    z = s(652215),
    Y = s(202541),
    X = s(185928);
function $() {
    let { previewPaneVariant: e } = (0, c.cf)([O.A], () => ({
            previewPaneVariant: O.A.isPreview ? Y.tz.FREE : Y.tz.PREMIUM_STANDARD,
        })),
        t = (0, c.bG)([W.A], () => {
            let e = W.A.settings.appearance?.theme;
            return `default ${e === d.Sx.LIGHT ? z.NJ8.LIGHT : z.NJ8.DARK}`;
        });
    return (0, n.useCallback)(
        (s) => {
            L.default.track(s, { preview_pane_variant: e, original_theme: t });
        },
        [e, t],
    );
}
var q = s(562708),
    B = s(834730),
    F = s(139286),
    J = s(738419),
    K = s(767243),
    Q = s(375708),
    Z = s(663635),
    ee = s(114149);
function et() {
    let { analyticsLocations: e } = (0, S.Ay)();
    return (
        (0, F.A)({
            name: q.ImpressionNames.CUSTOM_THEMES_PREVIEW_THEMES_BANNER,
            type: q.ImpressionTypes.VIEW,
            properties: { location_stack: e },
        }),
        (0, i.jsxs)("div", {
            className: Z.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: Z.r$,
                    children: [
                        (0, i.jsx)("img", { src: ee.A, className: Z._e, alt: "" }),
                        (0, i.jsxs)("div", {
                            className: Z.P_,
                            children: [
                                (0, i.jsx)(B.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: Q.intl.string(K.default.XP4jzJ),
                                }),
                                (0, i.jsx)(B.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: Q.intl.string(K.default.MJYvmG),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(E.$, {
                    variant: "secondary",
                    size: "sm",
                    text: Q.intl.string(K.default.eGxkmm),
                    onClick: function () {
                        (0, J.b0)(J.G8.PREVIEW_THEMES),
                            (0, N.nf)(N.HP.CUSTOM_THEME, { from: N.xv.CLIENT_THEMES_EDITOR });
                    },
                    fullWidth: !0,
                }),
            ],
        })
    );
}
var es = s(487245),
    ei = s(385803),
    en = s(49999),
    er = s(737440);
function ea() {
    return (0, i.jsx)("div", {
        className: er.nV,
        children: (0, i.jsxs)("div", {
            className: er.mR,
            children: [
                (0, i.jsx)(y.A, { className: er.PC, size: "md" }),
                (0, i.jsx)(u.D, {
                    variant: "heading-md/bold",
                    color: "text-overlay-light",
                    children: Q.intl.string(Q.t.POSLGY),
                }),
            ],
        }),
    });
}
function el(e) {
    let { markAsDismissed: t } = e,
        s = $();
    return (0, i.jsxs)("div", {
        className: er.nV,
        children: [
            (0, i.jsx)(m.D, {
                className: er.VV,
                onClick: function () {
                    null != t && t(en.i.DISMISS), s(z.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, U.D)();
                },
                children: (0, i.jsx)(T.a, { size: "md", color: "currentColor", className: er.P0 }),
            }),
            (0, i.jsx)(u.D, { variant: "heading-lg/extrabold", children: Q.intl.string(Q.t["xSR+a/"]) }),
        ],
    });
}
function ec(e) {
    let { onSubscribeSuccess: t, markAsDismissed: s } = e,
        { analyticsLocations: n } = (0, S.Ay)(f.A.CLIENT_THEMES_EDITOR),
        [r, a] = (0, c.yK)([b.default, O.A], () => [O.A.gradientPreset, w.Ay.isPremium(b.default.getCurrentUser())]),
        l = (0, g.V)(),
        E = (0, j.V)(),
        u = (0, w.FY)({
            intervalType: E?.subscriptionTrial?.interval,
            intervalCount: E?.subscriptionTrial?.intervalCount,
        }),
        m = a ? Q.intl.string(Q.t.IJI7yk) : E?.subscriptionTrial?.skuId === Y.pe.TIER_2 ? u : Q.intl.string(Q.t.mr4K7D);
    return (0, i.jsx)(M.A, {
        subscriptionTier: Y.pe.TIER_2,
        defaultTextOverride: m,
        premiumModalAnalyticsLocation: { object: z.ZSU.BUTTON_CTA, objectType: z.AnalyticsObjectTypes.BUY },
        onSubscribeModalClose: function (e) {
            if (e && (t?.(), null != s && s(en.i.PRIMARY), null != r)) {
                if (l) {
                    let e = (0, o.M)(r.theme) ? X.Fc.DARK : X.Fc.LIGHT;
                    (0, es.X8)({ isPersisted: !0, themeName: `${e}-mode-${d.ju[r.id]}`, analyticsLocations: n }),
                        (0, R.NA)({ [e]: r.theme }),
                        (0, R.qX)(e, { backgroundGradientPresetId: r.id }),
                        (0, G.S8)(),
                        (0, U.D)();
                    return;
                }
                (0, es.X8)({ isPersisted: !0, themeName: d.ju[r.id], analyticsLocations: n }),
                    (0, I.u_)({ backgroundGradientPresetId: r.id, theme: r.theme }),
                    (0, R.XG)();
            }
        },
        fullWidth: !0,
    });
}
function ed(e) {
    let { markAsDismissed: t, isCoachmark: s } = e,
        { isPreview: r } = (0, c.cf)([O.A], () => ({ isPreview: O.A.isPreview })),
        [a, d] = n.useState(!1),
        o = $(),
        u = (0, p.X)(
            { no: Q.t["3D5yo/"], "sv-SE": Q.t["3D5yo/"], uk: Q.t["3D5yo/"], de: Q.t["3D5yo/"] },
            Q.t["dqH+qr"],
        ),
        m = (0, l.YW)({ isPreview: r, isCoachmark: s, forceShowCloseButton: a })
            .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => Q.intl.string(Q.t.cpT0Cq))
            .with({ isPreview: !0 }, () => u)
            .otherwise(() => Q.intl.string(Q.t.Olc2K3)),
        T = (0, i.jsx)(ec, {
            onSubscribeSuccess: () => {
                d(!0);
            },
            markAsDismissed: t,
        });
    return (0, i.jsxs)("div", {
        className: er.N3,
        children: [
            r &&
                (0, i.jsxs)("div", {
                    className: er.rV,
                    children: [
                        (0, i.jsx)(C.l, {
                            size: "md",
                            className: er.Tf,
                            location: f.A.PREMIUM_WISHLIST_CLIENT_THEMES_EDITOR,
                        }),
                        T,
                    ],
                }),
            (0, i.jsx)(E.$, {
                fullWidth: !0,
                onClick: function () {
                    null != t && t(en.i.DISMISS),
                        o(z.HAw.CLIENT_THEME_PREVIEW_CLOSED),
                        (0, U.D)(),
                        s || (0, k.openUserSettings)(D.X.APPEARANCE_THEME_CATEGORY);
                },
                variant: "secondary",
                text: m,
            }),
        ],
    });
}
function eE(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: s, iconSize: r = ei.ni.SIZE_60 } = e,
        { analyticsLocations: l } = (0, S.Ay)(f.A.CLIENT_THEMES_EDITOR),
        d = (0, c.bG)([H.A], () => H.A.hasLayers()),
        { isPreview: E, shouldEditorAnimate: o } = (0, c.cf)([O.A, x.Ay], () => ({
            isPreview: O.A.isPreview,
            shouldEditorAnimate: s && !x.Ay.useReducedMotion,
        })),
        u = (0, N.fy)().activePanel === N.HP.CLIENT_THEMES,
        m = $();
    n.useEffect(() => m(z.HAw.CLIENT_THEME_PREVIEW_VIEWED), [m]),
        n.useEffect(() => {
            E &&
                (L.default.track(z.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: Y.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: l,
                }),
                (0, v.sq)(z.U7l.PREMIUM_UPSELL_VIEWED, l, () => (0, P.uq)(Y.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT)));
        }, [E, l]);
    let T = (() => {
            let e = (0, c.bG)([O.A], () => O.A.gradientPreset),
                t = (0, c.bG)([V.Ay], () => V.Ay.useSystemTheme === X.Q_.ON),
                [s, i] = (0, n.useState)(t);
            return (
                (0, n.useEffect)(() => {
                    null == e && i(t);
                }, [e, t]),
                (0, n.useCallback)(() => {
                    null == e || ((0, G.S8)(), (0, R.XG)(), s && (0, R.k7)(X.Q_.ON));
                }, [e, s])
            );
        })(),
        I = (0, h.A)(null, E ? T : z.tEg);
    n.useEffect(() => {
        if (E && !u) return T;
    }, [E, u, T]);
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
                  ref: I,
                  "data-app-right-panel": !0,
                  className: a()(er.HS, o ? er.hP : null),
                  style: p,
                  children: (0, i.jsxs)(_.F, {
                      children: [
                          s ? (0, i.jsx)(ea, {}) : (0, i.jsx)(el, { markAsDismissed: t }),
                          (0, i.jsx)(et, {}),
                          (0, i.jsx)(A.Ip, {
                              className: er.sV,
                              children: (0, i.jsxs)(es.Ay, {
                                  type: es.v0.EDITOR,
                                  children: [
                                      !E && (0, i.jsx)(es.Ay.Basic, { className: er.Gg, iconSize: r }),
                                      (0, i.jsx)(es.Ay.Gradient, { className: er.Gg, isCoachmark: s, iconSize: r }),
                                  ],
                              }),
                          }),
                          (0, i.jsx)(ed, { markAsDismissed: t, isCoachmark: s }),
                      ],
                  }),
              }),
          });
}
