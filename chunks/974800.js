s.r(t), s.d(t, { default: () => el }), s(801541);
var i = s(627968),
    n = s(64700),
    r = s(503698),
    a = s.n(r),
    l = s(889137),
    c = s(17928),
    d = s(873298),
    o = s(821609),
    E = s(534514),
    u = s(939249),
    m = s(285796),
    _ = s(707554),
    A = s(364522),
    T = s(817281),
    h = s(82495),
    x = s(775602),
    I = s(793574),
    f = s(688810),
    S = s(793943),
    p = s(996254),
    v = s(234419),
    N = s(792656),
    j = s(400669),
    P = s(450232),
    y = s(973654),
    C = s(780964),
    M = s(766075),
    R = s(909536),
    g = s(186111),
    D = s(287809),
    k = s(174459),
    H = s(428262),
    b = s(147248),
    L = s(11029),
    w = s(742023),
    O = s(617617),
    G = s(823459),
    V = s(652215),
    U = s(202541),
    W = s(185928);
function z() {
    let { previewPaneVariant: e } = (0, c.cf)([b.A], () => ({
            previewPaneVariant: b.A.isPreview ? U.tz.FREE : U.tz.PREMIUM_STANDARD,
        })),
        t = (0, c.bG)([O.A], () => {
            let e = O.A.settings.appearance?.theme;
            return `default ${e === d.Sx.LIGHT ? V.NJ8.LIGHT : V.NJ8.DARK}`;
        });
    return (0, n.useCallback)(
        (s) => {
            k.default.track(s, { preview_pane_variant: e, original_theme: t });
        },
        [e, t],
    );
}
var Y = s(562708),
    X = s(834730),
    B = s(139286),
    J = s(738419),
    $ = s(693227),
    K = s(375708),
    q = s(863816),
    F = s(114149);
function Q() {
    let { analyticsLocations: e } = (0, f.Ay)();
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
                        (0, i.jsx)("img", { src: F.A, className: q._e, alt: "" }),
                        (0, i.jsxs)("div", {
                            className: q.P_,
                            children: [
                                (0, i.jsx)(X.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: K.intl.string($.default.XP4jzJ),
                                }),
                                (0, i.jsx)(X.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: K.intl.string($.default.MJYvmG),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(o.$, {
                    variant: "secondary",
                    size: "sm",
                    text: K.intl.string($.default.eGxkmm),
                    onClick: function () {
                        (0, J.b0)(J.G8.PREVIEW_THEMES),
                            (0, S.nf)(S.HP.CUSTOM_THEME, { from: S.xv.CLIENT_THEMES_EDITOR });
                    },
                    fullWidth: !0,
                }),
            ],
        })
    );
}
var Z = s(487245),
    ee = s(385803),
    et = s(49999),
    es = s(758981);
function ei() {
    return (0, i.jsx)("div", {
        className: es.nV,
        children: (0, i.jsxs)("div", {
            className: es.mR,
            children: [
                (0, i.jsx)(P.A, { className: es.PC, size: "md" }),
                (0, i.jsx)(E.D, {
                    variant: "heading-md/bold",
                    color: "text-overlay-light",
                    children: K.intl.string(K.t.POSLGY),
                }),
            ],
        }),
    });
}
function en(e) {
    let { markAsDismissed: t } = e,
        s = z();
    return (0, i.jsxs)("div", {
        className: es.nV,
        children: [
            (0, i.jsx)(u.D, {
                className: es.VV,
                onClick: () => {
                    null != t && t(et.i.DISMISS), s(V.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, L.D)();
                },
                children: (0, i.jsx)(m.a, { size: "md", color: "currentColor", className: es.P0 }),
            }),
            (0, i.jsx)(E.D, { variant: "heading-lg/extrabold", children: K.intl.string(K.t["xSR+a/"]) }),
        ],
    });
}
function er(e) {
    let { onSubscribeSuccess: t, markAsDismissed: s } = e,
        { analyticsLocations: n } = (0, f.Ay)(I.A.CLIENT_THEMES_EDITOR),
        [r, a] = (0, c.yK)([D.default, b.A], () => [b.A.gradientPreset, H.Ay.isPremium(D.default.getCurrentUser())]),
        l = (0, v.V)(),
        o = (0, H.FY)({
            intervalType: l?.subscription_trial?.interval,
            intervalCount: l?.subscription_trial?.interval_count,
        }),
        E = a
            ? K.intl.string(K.t.IJI7yk)
            : l?.subscription_trial?.sku_id === U.pe.TIER_2
              ? o
              : K.intl.string(K.t.mr4K7D);
    return (0, i.jsx)(N.A, {
        subscriptionTier: U.pe.TIER_2,
        defaultTextOverride: E,
        premiumModalAnalyticsLocation: { object: V.ZSU.BUTTON_CTA, objectType: V.AnalyticsObjectTypes.BUY },
        onSubscribeModalClose: (e) => {
            e &&
                (t?.(),
                null != s && s(et.i.PRIMARY),
                null != r &&
                    ((0, Z.X8)({ isPersisted: !0, themeName: d.ju[r.id], analyticsLocations: n }),
                    (0, T.u_)({ backgroundGradientPresetId: r.id, theme: r.theme }),
                    (0, y.XG)()));
        },
        fullWidth: !0,
    });
}
function ea(e) {
    let { markAsDismissed: t, isCoachmark: s } = e,
        { isPreview: r } = (0, c.cf)([b.A], () => ({ isPreview: b.A.isPreview })),
        [a, d] = n.useState(!1),
        E = z(),
        u = (0, R.St)("client_themes_editor_footer"),
        m = (0, p.X)(
            { no: K.t["3D5yo/"], "sv-SE": K.t["3D5yo/"], uk: K.t["3D5yo/"], de: K.t["3D5yo/"] },
            K.t["dqH+qr"],
        ),
        _ = (0, l.YW)({ isPreview: r, isCoachmark: s, forceShowCloseButton: a })
            .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => K.intl.string(K.t.cpT0Cq))
            .with({ isPreview: !0 }, () => m)
            .otherwise(() => K.intl.string(K.t.Olc2K3)),
        A = (0, i.jsx)(er, {
            onSubscribeSuccess: () => {
                d(!0);
            },
            markAsDismissed: t,
        });
    return (0, i.jsxs)("div", {
        className: es.N3,
        children: [
            r &&
                (u
                    ? (0, i.jsxs)("div", {
                          className: es.rV,
                          children: [
                              (0, i.jsx)(j.l, {
                                  size: "md",
                                  className: es.Tf,
                                  location: I.A.PREMIUM_WISHLIST_CLIENT_THEMES_EDITOR,
                              }),
                              A,
                          ],
                      })
                    : A),
            (0, i.jsx)(o.$, {
                fullWidth: !0,
                onClick: () => {
                    null != t && t(et.i.DISMISS),
                        E(V.HAw.CLIENT_THEME_PREVIEW_CLOSED),
                        (0, L.D)(),
                        s || (0, M.openUserSettings)(C.X.APPEARANCE_THEME_CATEGORY);
                },
                variant: "secondary",
                text: _,
            }),
        ],
    });
}
function el(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: s, iconSize: r = ee.ni.SIZE_60 } = e,
        { analyticsLocations: l } = (0, f.Ay)(I.A.CLIENT_THEMES_EDITOR),
        d = (0, c.bG)([g.A], () => g.A.hasLayers()),
        { isPreview: o, shouldEditorAnimate: E } = (0, c.cf)([b.A, x.Ay], () => ({
            isPreview: b.A.isPreview,
            shouldEditorAnimate: s && !x.Ay.useReducedMotion,
        })),
        u = (0, S.fy)().activePanel === S.HP.CLIENT_THEMES,
        m = z();
    n.useEffect(() => m(V.HAw.CLIENT_THEME_PREVIEW_VIEWED), [m]),
        n.useEffect(() => {
            o &&
                k.default.track(V.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: U.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: l,
                });
        }, [o, l]);
    let T = (() => {
            let e = (0, c.bG)([b.A], () => b.A.gradientPreset),
                t = (0, c.bG)([w.Ay], () => w.Ay.useSystemTheme === W.Q_.ON),
                [s, i] = (0, n.useState)(t);
            return (
                (0, n.useEffect)(() => {
                    null == e && i(t);
                }, [e, t]),
                (0, n.useCallback)(() => {
                    null == e || ((0, G.S8)(), (0, y.XG)(), s && (0, y.k7)(W.Q_.ON));
                }, [e, s])
            );
        })(),
        p = (0, h.A)(null, o ? T : V.tEg);
    n.useEffect(() => {
        if (o && !u) return T;
    }, [o, u, T]);
    let v = n.useMemo(
        () => ({
            "--custom-client-themes-editor-content-width": `${3 * r + 48}px`,
            "--custom-client-themes-editor-padding": "16px",
        }),
        [r],
    );
    return d
        ? null
        : (0, i.jsx)(f.f5, {
              value: l,
              children: (0, i.jsx)("div", {
                  ref: p,
                  "data-app-right-panel": !0,
                  className: a()(es.HS, E ? es.hP : null),
                  style: v,
                  children: (0, i.jsxs)(_.F, {
                      children: [
                          s ? (0, i.jsx)(ei, {}) : (0, i.jsx)(en, { markAsDismissed: t }),
                          (0, i.jsx)(Q, {}),
                          (0, i.jsx)(A.Ip, {
                              className: es.sV,
                              children: (0, i.jsxs)(Z.Ay, {
                                  type: Z.v0.EDITOR,
                                  children: [
                                      !o && (0, i.jsx)(Z.Ay.Basic, { className: es.Gg, iconSize: r }),
                                      (0, i.jsx)(Z.Ay.Gradient, { className: es.Gg, isCoachmark: s, iconSize: r }),
                                  ],
                              }),
                          }),
                          (0, i.jsx)(ea, { markAsDismissed: t, isCoachmark: s }),
                      ],
                  }),
              }),
          });
}
