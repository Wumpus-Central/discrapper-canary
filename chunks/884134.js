n.d(t, { Z: () => ee }), n(388685), n(704826), n(35282), n(781311);
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
    R = n(771934),
    w = n(857658),
    D = n(174278),
    x = n(714097),
    L = n(981631),
    j = n(921944),
    M = n(474936),
    k = n(831989),
    U = n(388032),
    G = n(23766);
let Z = 0,
    F = 5000;
function B(e) {
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
function V(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)("div", {
        className: G.closeButton,
        children: (0, r.jsx)(d.PZ7, {
            size: "sm",
            onClick: () => {
                null == t || t(j.L.USER_DISMISS), (0, g.Ll)();
            },
        }),
    });
}
function H() {
    return (0, r.jsxs)("div", {
        className: G.headerContainer,
        children: [
            (0, r.jsx)(f.Text, {
                variant: "text-md/bold",
                children: U.intl.string(k.default.AsmU85),
            }),
            (0, r.jsx)(u.u, {
                text: U.intl.string(U.t["5AFxuK"]),
                children: (0, r.jsx)(f.SrA, {
                    size: "custom",
                    height: 20,
                    width: 20,
                    colorClass: G.nitroIcon,
                }),
            }),
            (0, r.jsx)(V, {}),
        ],
    });
}
function Y(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, E.Nj)(l.z.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, r.jsx)(W, { markAsDismissed: t })
            : (0, r.jsx)(H, {})
        : (0, r.jsx)(W, { markAsDismissed: () => (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK) });
}
function W(e) {
    let { markAsDismissed: t } = e,
        n = (0, y.m)(M.PremiumTypes.TIER_2);
    return (0, r.jsxs)("div", {
        className: G.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: G.headerAndCloseRow,
                children: [
                    (0, r.jsx)(f.Heading, {
                        variant: "heading-lg/extrabold",
                        children: U.intl.string(k.default["23QUzv"]),
                    }),
                    (0, r.jsx)(V, { markAsDismissed: t }),
                ],
            }),
            (0, r.jsx)(f.Text, {
                className: G.subtitle,
                variant: "text-sm/medium",
                color: "text-muted",
                children: U.intl.string(n ? k.default.TRCE4g : k.default["UV/Vtv"]),
            }),
        ],
    });
}
function K(e) {
    let t = 10;
    for (let n of [90, 180, 270]) if (Math.abs(e - n) <= t) return n;
    return e;
}
function z(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: a, handleInternalChange: s } = B(t),
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
        c("".concat(i, "\xB0")), (0, R.Ac)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: o()(G.sliderContainer, G.gradientDirectionSliderContainer),
        children: [
            (0, r.jsxs)("div", {
                className: G.controlLabelContainer,
                children: [
                    (0, r.jsx)(f.Text, {
                        variant: "text-md/medium",
                        children: U.intl.string(k.default.dZkwgx),
                    }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: l,
                        onChange: (e) => u(e.target.value),
                        placeholder: "".concat(Z, "\xB0"),
                        className: G.controlLabelInput,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: G.sliderWrapper,
                children: [
                    (0, r.jsxs)("div", {
                        className: G.angleIndicatorOverlay,
                        children: [
                            (0, r.jsx)("div", { className: G.angleIndicatorDot }),
                            (0, r.jsx)("div", { className: G.angleIndicatorDot }),
                            (0, r.jsx)("div", { className: G.angleIndicatorLargeDot }),
                            (0, r.jsx)("div", { className: G.angleIndicatorDot }),
                            (0, r.jsx)("div", { className: G.angleIndicatorDot }),
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
                                (0, R.fR)();
                                let t = K(e);
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
function q(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: a, handleInternalChange: o } = B(t),
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
        l("".concat(i, "%")), (0, R.PI)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: G.sliderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: G.controlLabelContainer,
                children: [
                    (0, r.jsx)(f.Text, {
                        variant: "text-md/medium",
                        children: U.intl.string(k.default.xlXkaL),
                    }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: s,
                        onChange: (e) => c(e.target.value),
                        placeholder: "".concat(C.BH, "%"),
                        className: G.controlLabelInput,
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
                        (0, R.z3)(), o(e), n(e);
                    },
                    onValueRender: () => null,
                    keyboardStep: 1,
                },
                a,
            ),
        ],
    });
}
function Q(e) {
    let { isCoachmark: t, isMobile: n } = e,
        [a, o] = i.useState(!1),
        s = i.useRef(!1),
        [l, u] = i.useState(!1),
        p = i.useRef(null),
        _ = i.useRef(null),
        m = i.useCallback(() => {
            var e;
            (0, R.Om)();
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
                }, F)),
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
                text: U.intl.string(k.default.c9MBEH),
                fullWidth: !0,
            });
    return n
        ? b()
        : (0, r.jsx)(c.i, {
              title: U.intl.string(k.default.NJ9m8Y),
              body: U.intl.string(k.default["6pabtR"]),
              position: "left",
              asset: E ? (0, r.jsx)(f.kBK, {}) : void 0,
              forceOpen: a,
              onTooltipShow: h,
              onTooltipHide: g,
              targetElementRef: _,
              children: b(),
          });
}
function X(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(u.u, {
        text: U.intl.string(k.default.SFyHIP),
        shouldShow: n,
        children: (0, r.jsx)(d.zxk, {
            variant: "primary",
            onClick: t,
            disabled: n,
            text: U.intl.string(U.t["1Qm822"]),
            fullWidth: i,
        }),
    });
}
function J(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, y.m)(M.PremiumTypes.TIER_2);
    return (
        (0, R.hf)(i, m.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsx)("div", {
            className: G.coachmarkFooterContainer,
            children: i
                ? (0, r.jsx)(X, {
                      disabled: !n,
                      onApply: t,
                      fullWidth: !0,
                  })
                : (0, r.jsx)(b.Z, {
                      subscriptionTier: M.Si.TIER_2,
                      buttonTextOverride: U.intl.string(U.t.JST6jl),
                      premiumModalAnalyticsLocation: {
                          page: L.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: L.jXE.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function $(e) {
    var t;
    let { onSaveTheme: n, canApply: i, metadata: a } = e,
        s = (0, y.m)(M.PremiumTypes.TIER_2),
        c = (null == (t = (0, g.oq)().metadata) ? void 0 : t.from) === g.tE.SHARE_MESSAGE;
    (0, R.hf)(s, m.Z.CUSTOM_THEMES_EDITOR);
    let u = () => {
            (0, R.Vb)(),
                (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK),
                (null == a ? void 0 : a.from) === g.tE.SETTING
                    ? ((0, I.openUserSettings)(S.n.APPEARANCE_PANEL, { section: L.oAB.APPEARANCE }), (0, g.Ll)())
                    : (null == a ? void 0 : a.from) === g.tE.CLIENT_THEMES_EDITOR
                      ? (0, g.XO)(g.wh.CLIENT_THEMES)
                      : (0, g.Ll)();
        },
        f = o()(G.footerContainer, { [G.footerContainerNonPremium]: !s });
    return (0, r.jsx)("div", {
        className: f,
        children: s
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(D.q, {}),
                      (0, r.jsx)(d.zxk, {
                          variant: "secondary",
                          onClick: u,
                          text: U.intl.string(U.t["13/7kX"]),
                      }),
                      (0, r.jsx)(X, {
                          disabled: !i,
                          onApply: () => {
                              c && T.default.track(L.rMx.CUSTOM_THEME_SHARE_APPLIED, {}), n();
                          },
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(b.Z, {
                          subscriptionTier: M.Si.TIER_2,
                          defaultTextOverride: U.intl.string(U.t.pj0XBN),
                          premiumModalAnalyticsLocation: {
                              page: L.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: L.jXE.CUSTOM_THEMES_FOOTER,
                          },
                          fullWidth: !0,
                      }),
                      (0, r.jsx)(d.zxk, {
                          variant: "secondary",
                          onClick: u,
                          text: c ? U.intl.string(U.t["13/7kX"]) : U.intl.string(U.t.Olc2K3),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function ee(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: o, isMobile: c } = e,
        u = (0, N.jJ)(),
        b = (0, N.SK)(),
        y = i.useRef(!1),
        {
            colors: S,
            chassisMixAmount: I,
            gradientAngle: T,
            setColors: A,
            setChassisMixAmount: D,
            setGradientAngle: L,
        } = (0, C.Ig)(),
        [M, Z] = i.useState(null != (t = S[0]) ? t : C.Dp),
        F = (0, s.e7)([v.Z], () => v.Z.theme),
        B = (0, E.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: V } = (0, h.ZP)(m.Z.CUSTOM_THEMES_EDITOR),
        H = (0, s.e7)([P.Z], () => P.Z.getSavedCustomTheme()),
        W = async () => {
            (y.current = !0),
                await (0, p.ZI)({
                    theme: F,
                    customUserThemeSettings: {
                        colors: S,
                        gradientColorStops: [],
                        gradientAngle: T,
                        baseMix: I,
                    },
                }),
                (0, R.u7)(S, I, T, F, V),
                null == a || a(j.L.TAKE_ACTION),
                B || (0, E.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, g.Ll)(),
                (0, O.UD)();
        },
        K = () => {
            u(N._m.RESET_BUTTON), (0, R.uf)();
        },
        X = S.length > 0;
    return (
        i.useEffect(
            () => () => {
                y.current || u(N._m.EDITOR_CLOSE);
            },
            [u],
        ),
        (0, _.ZP)(() => {
            if (!o) {
                var e;
                let t = (null != (e = null == S ? void 0 : S.length) ? e : 0) > 0,
                    n = null != H;
                !t && n
                    ? (C.Ig.getState().setAll({
                          colors: H.colors,
                          gradientAngle: H.gradient_angle,
                          chassisMixAmount: H.base_mix,
                      }),
                      (0, N.Bv)(H.base_theme))
                    : (0, N.lT)(S, M, A);
            }
        }),
        (0, r.jsxs)("div", {
            className: c ? G.mobileContainer : G.container,
            "data-app-right-panel": !c,
            children: [
                (0, r.jsx)(f.Ttm, {
                    children: (0, r.jsxs)("div", {
                        className: G.editorBody,
                        children: [
                            (0, r.jsx)(Y, {
                                markAsDismissed: a,
                                isCoachmark: o,
                            }),
                            (0, r.jsxs)("div", {
                                className: G.section,
                                children: [
                                    (0, r.jsx)(f.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: U.intl.string(k.default.o2NfLF),
                                    }),
                                    (0, r.jsx)(x.o, {}),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: G.section,
                                children: [
                                    (0, r.jsx)(f.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: U.intl.string(k.default.uSL2Gy),
                                    }),
                                    (0, r.jsx)(w.U, {
                                        onChange: (e) => {
                                            Z(e), 0 === S.length && (0, N.lT)(S, e, A);
                                        },
                                        value: M,
                                        colors: S,
                                        setColors: A,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: G.section,
                                children: [
                                    (0, r.jsx)(f.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: U.intl.string(k.default.F1t0c8),
                                    }),
                                    S.length > 1 &&
                                        (0, r.jsx)(z, {
                                            gradientAngle: T,
                                            setGradientAngle: L,
                                        }),
                                    (0, r.jsx)(q, {
                                        chassisMixAmount: I,
                                        setChassisMixAmount: (e) => {
                                            D(e), 0 === S.length && (0, N.lT)(S, M, A);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: G.resetButton,
                                children: [
                                    (0, r.jsx)(Q, {
                                        isCoachmark: o,
                                        isMobile: c,
                                    }),
                                    (0, r.jsx)(d.zxk, {
                                        variant: "secondary",
                                        onClick: K,
                                        disabled: b,
                                        text: U.intl.string(U.t.yBZMsQ),
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                o
                    ? (0, r.jsx)(J, {
                          onSaveTheme: W,
                          canApply: X,
                      })
                    : (0, r.jsx)($, {
                          onSaveTheme: W,
                          canApply: X,
                          metadata: n,
                      }),
            ],
        })
    );
}
