n.d(t, { Z: () => et }), n(388685), n(704826), n(35282), n(781311);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(454399),
    u = n(28664),
    d = n(159691),
    f = n(481060),
    p = n(153867),
    _ = n(493773),
    m = n(100527),
    h = n(906732),
    g = n(550385),
    E = n(266454),
    b = n(638212),
    y = n(612659),
    O = n(781391),
    v = n(210887),
    S = n(313789),
    I = n(518596),
    T = n(626135),
    C = n(233398),
    A = n(263198),
    N = n(866419),
    P = n(36982),
    R = n(990924),
    w = n(771934),
    D = n(857658),
    x = n(174278),
    L = n(714097),
    j = n(981631),
    M = n(921944),
    k = n(474936),
    U = n(831989),
    G = n(388032),
    Z = n(23766);
let F = 0,
    B = 5000;
function V(e) {
    let [t, n] = i.useState(0),
        [r, a] = i.useState(!1),
        o = i.useRef(e);
    return (
        i.useEffect(() => {
            e === o.current || r || n((e) => e + 1), (o.current = e), a(!1);
        }, [e, r]),
        {
            key: t,
            handleInternalChange: i.useCallback((e) => (a(!0), e), []),
        }
    );
}
function H(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)("div", {
        className: Z.closeButton,
        children: (0, r.jsx)(d.PZ7, {
            size: "sm",
            onClick: () => {
                null == t || t(M.L.USER_DISMISS), (0, g.Ll)();
            },
        }),
    });
}
function Y() {
    return (0, r.jsxs)("div", {
        className: Z.headerContainer,
        children: [
            (0, r.jsx)(f.Text, {
                variant: "text-md/bold",
                children: G.intl.string(U.default.AsmU85),
            }),
            (0, r.jsx)(u.u, {
                text: G.intl.string(G.t["5AFxuK"]),
                children: (0, r.jsx)(f.SrA, {
                    size: "custom",
                    height: 20,
                    width: 20,
                    colorClass: Z.nitroIcon,
                }),
            }),
            (0, r.jsx)(H, {}),
        ],
    });
}
function W(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, E.Nj)(l.z.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, r.jsx)(K, { markAsDismissed: t })
            : (0, r.jsx)(Y, {})
        : (0, r.jsx)(K, { markAsDismissed: () => (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK) });
}
function K(e) {
    let { markAsDismissed: t } = e,
        n = (0, y.m)(k.PremiumTypes.TIER_2);
    return (0, r.jsxs)("div", {
        className: Z.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: Z.headerAndCloseRow,
                children: [
                    (0, r.jsx)(f.Heading, {
                        variant: "heading-lg/extrabold",
                        children: G.intl.string(U.default["23QUzv"]),
                    }),
                    (0, r.jsx)(H, { markAsDismissed: t }),
                ],
            }),
            (0, r.jsx)(f.Text, {
                className: Z.subtitle,
                variant: "text-sm/medium",
                color: "text-muted",
                children: G.intl.string(n ? U.default.TRCE4g : U.default["UV/Vtv"]),
            }),
        ],
    });
}
function z(e) {
    let t = 10;
    for (let n of [90, 180, 270]) if (Math.abs(e - n) <= t) return n;
    return e;
}
function q(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: a, handleInternalChange: s } = V(t),
        [l, c] = i.useState("".concat(Math.round(t), "\xB0"));
    i.useEffect(() => {
        c("".concat(Math.round(t), "\xB0"));
    }, [t]);
    let u = (e) => {
        let t = e.replace(/°/g, "").trim();
        if ("" === t) return void c("");
        let r = parseInt(t, 10);
        if (isNaN(r)) return;
        let i = Math.max(0, Math.min(360, r));
        c("".concat(i, "\xB0")), (0, w.Ac)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: o()(Z.sliderContainer, Z.gradientDirectionSliderContainer),
        children: [
            (0, r.jsxs)("div", {
                className: Z.controlLabelContainer,
                children: [
                    (0, r.jsx)(f.Text, {
                        variant: "text-md/medium",
                        children: G.intl.string(U.default.dZkwgx),
                    }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: l,
                        onChange: (e) => u(e.target.value),
                        placeholder: "".concat(F, "\xB0"),
                        className: Z.controlLabelInput,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: Z.sliderWrapper,
                children: [
                    (0, r.jsxs)("div", {
                        className: Z.angleIndicatorOverlay,
                        children: [
                            (0, r.jsx)("div", { className: Z.angleIndicatorDot }),
                            (0, r.jsx)("div", { className: Z.angleIndicatorDot }),
                            (0, r.jsx)("div", { className: Z.angleIndicatorLargeDot }),
                            (0, r.jsx)("div", { className: Z.angleIndicatorDot }),
                            (0, r.jsx)("div", { className: Z.angleIndicatorDot }),
                        ],
                    }),
                    (0, r.jsx)(
                        f.iRW,
                        {
                            initialValue: t,
                            defaultValue: 0,
                            minValue: 0,
                            maxValue: 360,
                            onValueChange: (e) => {
                                (0, w.fR)();
                                let t = z(e);
                                t !== e || s(e), n(t);
                            },
                            onValueRender: () => null,
                            keyboardStep: 1,
                        },
                        a,
                    ),
                ],
            }),
        ],
    });
}
function Q(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: a, handleInternalChange: o } = V(t),
        [s, l] = i.useState("".concat(Math.round(t), "%"));
    i.useEffect(() => {
        l("".concat(Math.round(t), "%"));
    }, [t]);
    let c = (e) => {
        let t = e.replace(/%/g, "").trim();
        if ("" === t) return void l("");
        let r = parseInt(t, 10);
        if (isNaN(r)) return;
        let i = Math.max(0, Math.min(100, r));
        l("".concat(i, "%")), (0, w.PI)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: Z.sliderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: Z.controlLabelContainer,
                children: [
                    (0, r.jsx)(f.Text, {
                        variant: "text-md/medium",
                        children: G.intl.string(U.default.xlXkaL),
                    }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: s,
                        onChange: (e) => c(e.target.value),
                        placeholder: "".concat(C.BH, "%"),
                        className: Z.controlLabelInput,
                    }),
                ],
            }),
            (0, r.jsx)(
                f.iRW,
                {
                    initialValue: t,
                    defaultValue: C.BH,
                    minValue: 0,
                    maxValue: 100,
                    onValueChange: (e) => {
                        (0, w.z3)(), o(e), n(e);
                    },
                    onValueRender: () => null,
                    keyboardStep: 1,
                },
                a,
            ),
        ],
    });
}
function X(e) {
    let { isCoachmark: t, isMobile: n } = e,
        [a, o] = i.useState(!1),
        s = i.useRef(!1),
        [l, u] = i.useState(!1),
        p = i.useRef(null),
        _ = i.useRef(null),
        m = i.useCallback(() => {
            var e;
            (0, w.Om)();
            let t = (0, A.C)();
            C.Ig.getState().setAll({
                colors: t.colors,
                gradientAngle: null != (e = t.angle) ? e : C.Ig.getState().gradientAngle,
                chassisMixAmount: t.intensity,
            });
        }, []);
    i.useEffect(() => {
        if (t)
            return (
                (s.current = !1),
                (p.current = setTimeout(() => {
                    s.current || o(!0);
                }, B)),
                () => {
                    null != p.current && clearTimeout(p.current);
                }
            );
    }, [t]);
    let h = i.useCallback(() => {
            s.current = !0;
        }, []),
        g = i.useCallback(() => {
            o(!1);
        }, []),
        E = a && !l,
        b = () =>
            (0, r.jsx)(d.zxk, {
                buttonRef: _,
                variant: "secondary",
                onClick: m,
                onMouseEnter: () => u(!0),
                onMouseLeave: () => u(!1),
                icon: n
                    ? {
                          type: "icon",
                          asset: f.kBK,
                      }
                    : {
                          type: "rive",
                          asset: f.q8_,
                          riveProps: {
                              dataBinding: { fill: f.TVs.colors.ICON_STRONG },
                              eventTargetRef: _,
                          },
                      },
                text: G.intl.string(U.default.c9MBEH),
                fullWidth: !0,
            });
    return n
        ? b()
        : (0, r.jsx)(c.i, {
              title: G.intl.string(U.default.NJ9m8Y),
              body: G.intl.string(U.default["6pabtR"]),
              position: "left",
              asset: E ? (0, r.jsx)(f.kBK, {}) : void 0,
              forceOpen: a,
              onTooltipShow: h,
              onTooltipHide: g,
              targetElementRef: _,
              children: b(),
          });
}
function J(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(u.u, {
        text: G.intl.string(U.default.SFyHIP),
        shouldShow: n,
        children: (0, r.jsx)(d.zxk, {
            variant: "primary",
            onClick: t,
            disabled: n,
            text: G.intl.string(G.t["1Qm822"]),
            fullWidth: i,
        }),
    });
}
function $(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, y.m)(k.PremiumTypes.TIER_2);
    return (
        (0, w.hf)(i, m.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsx)("div", {
            className: Z.coachmarkFooterContainer,
            children: i
                ? (0, r.jsx)(J, {
                      disabled: !n,
                      onApply: t,
                      fullWidth: !0,
                  })
                : (0, r.jsx)(b.Z, {
                      subscriptionTier: k.Si.TIER_2,
                      buttonTextOverride: G.intl.string(G.t.JST6jl),
                      premiumModalAnalyticsLocation: {
                          page: j.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: j.jXE.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function ee(e) {
    var t;
    let { onSaveTheme: n, canApply: i, metadata: a } = e,
        s = (0, y.m)(k.PremiumTypes.TIER_2),
        c = (null == (t = (0, g.oq)().metadata) ? void 0 : t.from) === g.tE.SHARE_MESSAGE;
    (0, w.hf)(s, m.Z.CUSTOM_THEMES_EDITOR);
    let u = () => {
            (0, w.Vb)(),
                (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK),
                (null == a ? void 0 : a.from) === g.tE.SETTING
                    ? ((0, I.openUserSettings)(S.n.APPEARANCE_PANEL, { section: j.oAB.APPEARANCE }), (0, g.Ll)())
                    : (null == a ? void 0 : a.from) === g.tE.CLIENT_THEMES_EDITOR
                      ? (0, g.XO)(g.wh.CLIENT_THEMES)
                      : (0, g.Ll)();
        },
        f = o()(Z.footerContainer, { [Z.footerContainerNonPremium]: !s });
    return (0, r.jsx)("div", {
        className: f,
        children: s
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(x.q, {}),
                      (0, r.jsx)(d.zxk, {
                          variant: "secondary",
                          onClick: u,
                          text: G.intl.string(G.t["13/7kX"]),
                      }),
                      (0, r.jsx)(J, {
                          disabled: !i,
                          onApply: () => {
                              c && T.default.track(j.rMx.CUSTOM_THEME_SHARE_APPLIED, {}), n();
                          },
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(b.Z, {
                          subscriptionTier: k.Si.TIER_2,
                          defaultTextOverride: G.intl.string(G.t.pj0XBN),
                          premiumModalAnalyticsLocation: {
                              page: j.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: j.jXE.CUSTOM_THEMES_FOOTER,
                          },
                          fullWidth: !0,
                      }),
                      (0, r.jsx)(d.zxk, {
                          variant: "secondary",
                          onClick: u,
                          text: c ? G.intl.string(G.t["13/7kX"]) : G.intl.string(G.t.Olc2K3),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function et(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: o, isMobile: c } = e,
        u = R.y.useConfig({ location: "CustomThemesEditorV2" }).enabled,
        b = (0, N.jJ)(),
        y = (0, N.SK)(),
        S = i.useRef(!1),
        {
            colors: I,
            chassisMixAmount: T,
            gradientAngle: A,
            setColors: x,
            setChassisMixAmount: j,
            setGradientAngle: k,
        } = (0, C.Ig)(),
        [F, B] = i.useState(null != (t = I[0]) ? t : C.Dp),
        V = (0, s.e7)([v.Z], () => v.Z.theme),
        H = (0, E.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: Y } = (0, h.ZP)(m.Z.CUSTOM_THEMES_EDITOR),
        K = (0, s.e7)([P.Z], () => P.Z.getSavedCustomTheme()),
        z = async () => {
            (S.current = !0),
                await (0, p.ZI)({
                    theme: V,
                    customUserThemeSettings: {
                        colors: I,
                        gradientColorStops: [],
                        gradientAngle: A,
                        baseMix: T,
                    },
                }),
                (0, w.u7)(I, T, A, V, Y),
                null == a || a(M.L.TAKE_ACTION),
                H || (0, E.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, g.Ll)(),
                (0, O.UD)();
        },
        J = () => {
            b(N._m.RESET_BUTTON), (0, w.uf)();
        },
        et = I.length > 0;
    return (
        i.useEffect(
            () => () => {
                S.current || b(N._m.EDITOR_CLOSE);
            },
            [b],
        ),
        (0, _.ZP)(() => {
            if (!o) {
                var e;
                let t = (null != (e = null == I ? void 0 : I.length) ? e : 0) > 0,
                    n = null != K;
                !t && n && u
                    ? (C.Ig.getState().setAll({
                          colors: K.colors,
                          gradientAngle: K.gradient_angle,
                          chassisMixAmount: K.base_mix,
                      }),
                      (0, N.Bv)(K.base_theme))
                    : (0, N.lT)(I, F, x);
            }
        }),
        (0, r.jsxs)("div", {
            className: c ? Z.mobileContainer : Z.container,
            "data-app-right-panel": !c,
            children: [
                (0, r.jsx)(f.Ttm, {
                    children: (0, r.jsxs)("div", {
                        className: Z.editorBody,
                        children: [
                            (0, r.jsx)(W, {
                                markAsDismissed: a,
                                isCoachmark: o,
                            }),
                            (0, r.jsxs)("div", {
                                className: Z.section,
                                children: [
                                    (0, r.jsx)(f.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: G.intl.string(U.default.o2NfLF),
                                    }),
                                    (0, r.jsx)(L.o, {}),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: Z.section,
                                children: [
                                    (0, r.jsx)(f.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: G.intl.string(U.default.uSL2Gy),
                                    }),
                                    (0, r.jsx)(D.U, {
                                        onChange: (e) => {
                                            B(e), 0 === I.length && (0, N.lT)(I, e, x);
                                        },
                                        value: F,
                                        colors: I,
                                        setColors: x,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: Z.section,
                                children: [
                                    (0, r.jsx)(f.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: G.intl.string(U.default.F1t0c8),
                                    }),
                                    I.length > 1 &&
                                        (0, r.jsx)(q, {
                                            gradientAngle: A,
                                            setGradientAngle: k,
                                        }),
                                    (0, r.jsx)(Q, {
                                        chassisMixAmount: T,
                                        setChassisMixAmount: (e) => {
                                            j(e), 0 === I.length && (0, N.lT)(I, F, x);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: Z.resetButton,
                                children: [
                                    (0, r.jsx)(X, {
                                        isCoachmark: o,
                                        isMobile: c,
                                    }),
                                    (0, r.jsx)(d.zxk, {
                                        variant: "secondary",
                                        onClick: J,
                                        disabled: y,
                                        text: G.intl.string(G.t.yBZMsQ),
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                o
                    ? (0, r.jsx)($, {
                          onSaveTheme: z,
                          canApply: et,
                      })
                    : (0, r.jsx)(ee, {
                          onSaveTheme: z,
                          canApply: et,
                          metadata: n,
                      }),
            ],
        })
    );
}
