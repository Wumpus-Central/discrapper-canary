s.r(t), s.d(t, { default: () => ed }), s(801541);
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
    _ = s(364522),
    h = s(817281),
    I = s(82495),
    x = s(775602),
    f = s(793574),
    S = s(688810),
    N = s(793943),
    p = s(996254),
    v = s(732280),
    j = s(792656),
    P = s(400669),
    C = s(450232),
    y = s(973654),
    M = s(780964),
    D = s(141343),
    R = s(766075),
    g = s(909536),
    k = s(186111),
    H = s(287809),
    b = s(174459),
    L = s(158045),
    w = s(823459),
    G = s(147248),
    O = s(11029),
    V = s(742023),
    U = s(617617),
    W = s(652215),
    z = s(202541),
    X = s(185928);
function Y() {
    let { previewPaneVariant: e } = (0, c.cf)([G.A], () => ({
            previewPaneVariant: G.A.isPreview ? z.tz.FREE : z.tz.PREMIUM_STANDARD,
        })),
        t = (0, c.bG)([U.A], () => {
            let e = U.A.settings.appearance?.theme;
            return `default ${e === d.Sx.LIGHT ? W.NJ8.LIGHT : W.NJ8.DARK}`;
        });
    return (0, n.useCallback)(
        (s) => {
            b.default.track(s, { preview_pane_variant: e, original_theme: t });
        },
        [e, t],
    );
}
var $ = s(562708),
    B = s(834730),
    F = s(139286),
    J = s(738419),
    K = s(767243),
    q = s(375708),
    Q = s(663635),
    Z = s(114149);
function ee() {
    let { analyticsLocations: e } = (0, S.Ay)();
    return (
        (0, F.A)({
            name: $.ImpressionNames.CUSTOM_THEMES_PREVIEW_THEMES_BANNER,
            type: $.ImpressionTypes.VIEW,
            properties: { location_stack: e },
        }),
        (0, i.jsxs)("div", {
            className: Q.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: Q.r$,
                    children: [
                        (0, i.jsx)("img", { src: Z.A, className: Q._e, alt: "" }),
                        (0, i.jsxs)("div", {
                            className: Q.P_,
                            children: [
                                (0, i.jsx)(B.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: q.intl.string(K.default.XP4jzJ),
                                }),
                                (0, i.jsx)(B.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: q.intl.string(K.default.MJYvmG),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(o.$, {
                    variant: "secondary",
                    size: "sm",
                    text: q.intl.string(K.default.eGxkmm),
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
var et = s(487245),
    es = s(385803),
    ei = s(49999),
    en = s(737440);
function er() {
    return (0, i.jsx)("div", {
        className: en.nV,
        children: (0, i.jsxs)("div", {
            className: en.mR,
            children: [
                (0, i.jsx)(C.A, { className: en.PC, size: "md" }),
                (0, i.jsx)(E.D, {
                    variant: "heading-md/bold",
                    color: "text-overlay-light",
                    children: q.intl.string(q.t.POSLGY),
                }),
            ],
        }),
    });
}
function ea(e) {
    let { markAsDismissed: t } = e,
        s = Y();
    return (0, i.jsxs)("div", {
        className: en.nV,
        children: [
            (0, i.jsx)(m.D, {
                className: en.VV,
                onClick: function () {
                    null != t && t(ei.i.DISMISS), s(W.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, O.D)();
                },
                children: (0, i.jsx)(T.a, { size: "md", color: "currentColor", className: en.P0 }),
            }),
            (0, i.jsx)(E.D, { variant: "heading-lg/extrabold", children: q.intl.string(q.t["xSR+a/"]) }),
        ],
    });
}
function el(e) {
    let { onSubscribeSuccess: t, markAsDismissed: s } = e,
        { analyticsLocations: n } = (0, S.Ay)(f.A.CLIENT_THEMES_EDITOR),
        [r, a] = (0, c.yK)([H.default, G.A], () => [G.A.gradientPreset, L.Ay.isPremium(H.default.getCurrentUser())]),
        l = (0, D.V)(),
        o = (0, v.V)(),
        E = (0, L.FY)({
            intervalType: o?.subscriptionTrial?.interval,
            intervalCount: o?.subscriptionTrial?.intervalCount,
        }),
        m = a ? q.intl.string(q.t.IJI7yk) : o?.subscriptionTrial?.skuId === z.pe.TIER_2 ? E : q.intl.string(q.t.mr4K7D);
    return (0, i.jsx)(j.A, {
        subscriptionTier: z.pe.TIER_2,
        defaultTextOverride: m,
        premiumModalAnalyticsLocation: { object: W.ZSU.BUTTON_CTA, objectType: W.AnalyticsObjectTypes.BUY },
        onSubscribeModalClose: function (e) {
            if (e && (t?.(), null != s && s(ei.i.PRIMARY), null != r)) {
                if (l) {
                    let e = (0, u.M)(r.theme) ? X.Fc.DARK : X.Fc.LIGHT;
                    (0, et.X8)({ isPersisted: !0, themeName: `${e}-mode-${d.ju[r.id]}`, analyticsLocations: n }),
                        (0, y.NA)({ [e]: r.theme }),
                        (0, y.qX)(e, { backgroundGradientPresetId: r.id }),
                        (0, w.S8)(),
                        (0, O.D)();
                    return;
                }
                (0, et.X8)({ isPersisted: !0, themeName: d.ju[r.id], analyticsLocations: n }),
                    (0, h.u_)({ backgroundGradientPresetId: r.id, theme: r.theme }),
                    (0, y.XG)();
            }
        },
        fullWidth: !0,
    });
}
function ec(e) {
    let { markAsDismissed: t, isCoachmark: s } = e,
        { isPreview: r } = (0, c.cf)([G.A], () => ({ isPreview: G.A.isPreview })),
        [a, d] = n.useState(!1),
        u = Y(),
        E = (0, g.St)("client_themes_editor_footer"),
        m = (0, p.X)(
            { no: q.t["3D5yo/"], "sv-SE": q.t["3D5yo/"], uk: q.t["3D5yo/"], de: q.t["3D5yo/"] },
            q.t["dqH+qr"],
        ),
        T = (0, l.YW)({ isPreview: r, isCoachmark: s, forceShowCloseButton: a })
            .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => q.intl.string(q.t.cpT0Cq))
            .with({ isPreview: !0 }, () => m)
            .otherwise(() => q.intl.string(q.t.Olc2K3)),
        A = (0, i.jsx)(el, {
            onSubscribeSuccess: () => {
                d(!0);
            },
            markAsDismissed: t,
        });
    return (0, i.jsxs)("div", {
        className: en.N3,
        children: [
            r &&
                (E
                    ? (0, i.jsxs)("div", {
                          className: en.rV,
                          children: [
                              (0, i.jsx)(P.l, {
                                  size: "md",
                                  className: en.Tf,
                                  location: f.A.PREMIUM_WISHLIST_CLIENT_THEMES_EDITOR,
                              }),
                              A,
                          ],
                      })
                    : A),
            (0, i.jsx)(o.$, {
                fullWidth: !0,
                onClick: function () {
                    null != t && t(ei.i.DISMISS),
                        u(W.HAw.CLIENT_THEME_PREVIEW_CLOSED),
                        (0, O.D)(),
                        s || (0, R.openUserSettings)(M.X.APPEARANCE_THEME_CATEGORY);
                },
                variant: "secondary",
                text: T,
            }),
        ],
    });
}
function ed(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: s, iconSize: r = es.ni.SIZE_60 } = e,
        { analyticsLocations: l } = (0, S.Ay)(f.A.CLIENT_THEMES_EDITOR),
        d = (0, c.bG)([k.A], () => k.A.hasLayers()),
        { isPreview: o, shouldEditorAnimate: u } = (0, c.cf)([G.A, x.Ay], () => ({
            isPreview: G.A.isPreview,
            shouldEditorAnimate: s && !x.Ay.useReducedMotion,
        })),
        E = (0, N.fy)().activePanel === N.HP.CLIENT_THEMES,
        m = Y();
    n.useEffect(() => m(W.HAw.CLIENT_THEME_PREVIEW_VIEWED), [m]),
        n.useEffect(() => {
            o &&
                b.default.track(W.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: z.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: l,
                });
        }, [o, l]);
    let T = (() => {
            let e = (0, c.bG)([G.A], () => G.A.gradientPreset),
                t = (0, c.bG)([V.Ay], () => V.Ay.useSystemTheme === X.Q_.ON),
                [s, i] = (0, n.useState)(t);
            return (
                (0, n.useEffect)(() => {
                    null == e && i(t);
                }, [e, t]),
                (0, n.useCallback)(() => {
                    null == e || ((0, w.S8)(), (0, y.XG)(), s && (0, y.k7)(X.Q_.ON));
                }, [e, s])
            );
        })(),
        h = (0, I.A)(null, o ? T : W.tEg);
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
                  ref: h,
                  "data-app-right-panel": !0,
                  className: a()(en.HS, u ? en.hP : null),
                  style: p,
                  children: (0, i.jsxs)(A.F, {
                      children: [
                          s ? (0, i.jsx)(er, {}) : (0, i.jsx)(ea, { markAsDismissed: t }),
                          (0, i.jsx)(ee, {}),
                          (0, i.jsx)(_.Ip, {
                              className: en.sV,
                              children: (0, i.jsxs)(et.Ay, {
                                  type: et.v0.EDITOR,
                                  children: [
                                      !o && (0, i.jsx)(et.Ay.Basic, { className: en.Gg, iconSize: r }),
                                      (0, i.jsx)(et.Ay.Gradient, { className: en.Gg, isCoachmark: s, iconSize: r }),
                                  ],
                              }),
                          }),
                          (0, i.jsx)(ec, { markAsDismissed: t, isCoachmark: s }),
                      ],
                  }),
              }),
          });
}
