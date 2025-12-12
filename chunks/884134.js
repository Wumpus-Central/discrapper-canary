n.d(t, { Z: () => en }), n(388685), n(704826), n(35282), n(781311);
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
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
    R = n(803038),
    w = n(990924),
    D = n(771934),
    x = n(857658),
    L = n(174278),
    j = n(714097),
    M = n(981631),
    k = n(921944),
    U = n(474936),
    G = n(5570),
    Z = n(388032),
    F = n(882741);
let B = 0,
    V = 5000;
function H(e) {
    let [t, n] = i.useState(0),
        [r, o] = i.useState(!1),
        a = i.useRef(e);
    return (
        i.useEffect(() => {
            e === a.current || r || n((e) => e + 1), (a.current = e), o(!1);
        }, [e, r]),
        {
            key: t,
            handleInternalChange: i.useCallback((e) => (o(!0), e), []),
        }
    );
}
function Y(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)("div", {
        className: F.closeButton,
        children: (0, r.jsx)(d.PZ7, {
            size: "sm",
            onClick: () => {
                null == t || t(k.L.USER_DISMISS), (0, g.Ll)();
            },
        }),
    });
}
function W() {
    return (0, r.jsxs)("div", {
        className: F.headerContainer,
        children: [
            (0, r.jsx)(f.Text, {
                variant: "text-md/bold",
                children: Z.intl.string(G.default.AsmU85),
            }),
            (0, r.jsx)(u.u, {
                text: Z.intl.string(Z.t["5AFxuK"]),
                children: (0, r.jsx)(f.SrA, {
                    size: "custom",
                    height: 20,
                    width: 20,
                    colorClass: F.nitroIcon,
                }),
            }),
            (0, r.jsx)(Y, {}),
        ],
    });
}
function K(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, E.Nj)(l.z.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, r.jsx)(z, { markAsDismissed: t })
            : (0, r.jsx)(W, {})
        : (0, r.jsx)(z, { markAsDismissed: () => (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK) });
}
function z(e) {
    let { markAsDismissed: t } = e,
        n = (0, y.m)(U.PremiumTypes.TIER_2);
    return (0, r.jsxs)("div", {
        className: F.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: F.badgeAndCloseRow,
                children: [
                    (0, r.jsx)(f.lBU, { text: Z.intl.string(Z.t.oW0eUd) }),
                    (0, r.jsx)(Y, { markAsDismissed: t }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: F.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(f.Heading, {
                        variant: "heading-lg/extrabold",
                        children: Z.intl.string(G.default["23QUzv"]),
                    }),
                    (0, r.jsx)(f.Text, {
                        className: F.subtitle,
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: Z.intl.string(n ? G.default.TRCE4g : G.default["UV/Vtv"]),
                    }),
                ],
            }),
        ],
    });
}
function q(e) {
    let t = 10;
    for (let n of [90, 180, 270]) if (Math.abs(e - n) <= t) return n;
    return e;
}
function Q(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: o, handleInternalChange: s } = H(t),
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
        c("".concat(i, "\xB0")), (0, D.Ac)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: a()(F.sliderContainer, F.gradientDirectionSliderContainer),
        children: [
            (0, r.jsxs)("div", {
                className: F.controlLabelContainer,
                children: [
                    (0, r.jsx)(f.Text, {
                        variant: "text-md/medium",
                        children: Z.intl.string(G.default.dZkwgx),
                    }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: l,
                        onChange: (e) => u(e.target.value),
                        placeholder: "".concat(B, "\xB0"),
                        className: F.controlLabelInput,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: F.sliderWrapper,
                children: [
                    (0, r.jsxs)("div", {
                        className: F.angleIndicatorOverlay,
                        children: [
                            (0, r.jsx)("div", { className: F.angleIndicatorDot }),
                            (0, r.jsx)("div", { className: F.angleIndicatorDot }),
                            (0, r.jsx)("div", { className: F.angleIndicatorLargeDot }),
                            (0, r.jsx)("div", { className: F.angleIndicatorDot }),
                            (0, r.jsx)("div", { className: F.angleIndicatorDot }),
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
                                (0, D.fR)();
                                let t = q(e);
                                t !== e || s(e), n(t);
                            },
                            onValueRender: () => null,
                            keyboardStep: 1,
                        },
                        o,
                    ),
                ],
            }),
        ],
    });
}
function X(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: o, handleInternalChange: a } = H(t),
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
        l("".concat(i, "%")), (0, D.PI)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: F.sliderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: F.controlLabelContainer,
                children: [
                    (0, r.jsx)(f.Text, {
                        variant: "text-md/medium",
                        children: Z.intl.string(G.default.xlXkaL),
                    }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: s,
                        onChange: (e) => c(e.target.value),
                        placeholder: "".concat(C.BH, "%"),
                        className: F.controlLabelInput,
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
                        (0, D.z3)(), a(e), n(e);
                    },
                    onValueRender: () => null,
                    keyboardStep: 1,
                },
                o,
            ),
        ],
    });
}
function J(e) {
    let { isCoachmark: t, isMobile: n } = e,
        [o, a] = i.useState(!1),
        s = i.useRef(!1),
        [l, u] = i.useState(!1),
        p = i.useRef(null),
        _ = i.useRef(null),
        m = i.useCallback(() => {
            var e;
            (0, D.Om)();
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
                    s.current || a(!0);
                }, V)),
                () => {
                    null != p.current && clearTimeout(p.current);
                }
            );
    }, [t]);
    let h = i.useCallback(() => {
            s.current = !0;
        }, []),
        g = i.useCallback(() => {
            a(!1);
        }, []),
        E = o && !l,
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
                text: Z.intl.string(G.default.c9MBEH),
                fullWidth: !0,
            });
    return n
        ? b()
        : (0, r.jsx)(c.i, {
              title: Z.intl.string(G.default.NJ9m8Y),
              body: Z.intl.string(G.default["6pabtR"]),
              position: "left",
              asset: E ? (0, r.jsx)(f.kBK, {}) : void 0,
              forceOpen: o,
              onTooltipShow: h,
              onTooltipHide: g,
              targetElementRef: _,
              children: b(),
          });
}
function $(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(u.u, {
        text: Z.intl.string(G.default.SFyHIP),
        shouldShow: n,
        children: (0, r.jsx)(d.zxk, {
            variant: "primary",
            onClick: t,
            disabled: n,
            text: Z.intl.string(Z.t["1Qm822"]),
            fullWidth: i,
        }),
    });
}
function ee(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, y.m)(U.PremiumTypes.TIER_2);
    return (
        (0, D.hf)(i, m.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsx)("div", {
            className: F.coachmarkFooterContainer,
            children: i
                ? (0, r.jsx)($, {
                      disabled: !n,
                      onApply: t,
                      fullWidth: !0,
                  })
                : (0, r.jsx)(b.Z, {
                      subscriptionTier: U.Si.TIER_2,
                      buttonTextOverride: Z.intl.string(Z.t.JST6jl),
                      premiumModalAnalyticsLocation: {
                          page: M.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: M.jXE.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function et(e) {
    var t;
    let { onSaveTheme: n, canApply: i, metadata: o } = e,
        s = (0, y.m)(U.PremiumTypes.TIER_2),
        c = (null == (t = (0, g.oq)().metadata) ? void 0 : t.from) === g.tE.SHARE_MESSAGE;
    (0, D.hf)(s, m.Z.CUSTOM_THEMES_EDITOR);
    let u = () => {
            (0, D.Vb)(),
                (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK),
                (null == o ? void 0 : o.from) === g.tE.SETTING
                    ? ((0, I.openUserSettings)(S.n.APPEARANCE_PANEL, { section: M.oAB.APPEARANCE }), (0, g.Ll)())
                    : (null == o ? void 0 : o.from) === g.tE.CLIENT_THEMES_EDITOR
                      ? (0, g.XO)(g.wh.CLIENT_THEMES)
                      : (0, g.Ll)();
        },
        f = a()(F.footerContainer, { [F.footerContainerNonPremium]: !s });
    return (0, r.jsx)("div", {
        className: f,
        children: s
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(L.q, {}),
                      (0, r.jsx)(d.zxk, {
                          variant: "secondary",
                          onClick: u,
                          text: Z.intl.string(Z.t["13/7kX"]),
                      }),
                      (0, r.jsx)($, {
                          disabled: !i,
                          onApply: () => {
                              c && T.default.track(M.rMx.CUSTOM_THEME_SHARE_APPLIED, {}), n();
                          },
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(b.Z, {
                          subscriptionTier: U.Si.TIER_2,
                          defaultTextOverride: Z.intl.string(Z.t.pj0XBN),
                          premiumModalAnalyticsLocation: {
                              page: M.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: M.jXE.CUSTOM_THEMES_FOOTER,
                          },
                          fullWidth: !0,
                      }),
                      (0, r.jsx)(d.zxk, {
                          variant: "secondary",
                          onClick: u,
                          text: c ? Z.intl.string(Z.t["13/7kX"]) : Z.intl.string(Z.t.Olc2K3),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function en(e) {
    var t;
    let { metadata: n, markAsDismissed: o, isCoachmark: a, isMobile: c } = e,
        u = R.Mc.useExperiment({ location: "ClientThemeColorPickerTools" }).enabled,
        b = w.y.useConfig({ location: "CustomThemesEditorV2" }).enabled,
        y = (0, N.jJ)(),
        S = (0, N.SK)(),
        I = i.useRef(!1),
        {
            colors: T,
            chassisMixAmount: A,
            gradientAngle: L,
            setColors: M,
            setChassisMixAmount: U,
            setGradientAngle: B,
        } = (0, C.Ig)(),
        [V, H] = i.useState(null != (t = T[0]) ? t : C.Dp),
        Y = (0, s.e7)([v.Z], () => v.Z.theme),
        W = (0, E.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: z } = (0, h.ZP)(m.Z.CUSTOM_THEMES_EDITOR),
        q = (0, s.e7)([P.Z], () => P.Z.getSavedCustomTheme()),
        $ = async () => {
            (I.current = !0),
                await (0, p.ZI)({
                    theme: Y,
                    customUserThemeSettings: {
                        colors: T,
                        gradientColorStops: [],
                        gradientAngle: L,
                        baseMix: A,
                    },
                }),
                (0, D.u7)(T, A, L, Y, z),
                null == o || o(k.L.TAKE_ACTION),
                W || (0, E.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, g.Ll)(),
                (0, O.UD)();
        },
        en = () => {
            y(N._m.RESET_BUTTON), (0, D.uf)();
        },
        er = T.length > 0;
    return (i.useEffect(
        () => () => {
            I.current || y(N._m.EDITOR_CLOSE);
        },
        [y],
    ),
    (0, _.ZP)(() => {
        if (!a) {
            var e;
            let t = (null != (e = null == T ? void 0 : T.length) ? e : 0) > 0,
                n = null != q;
            !t && n && b
                ? (C.Ig.getState().setAll({
                      colors: q.colors,
                      gradientAngle: q.gradient_angle,
                      chassisMixAmount: q.base_mix,
                  }),
                  (0, N.Bv)(q.base_theme))
                : (0, N.lT)(T, V, M);
        }
    }),
    u)
        ? (0, r.jsxs)("div", {
              className: c ? F.mobileContainer : F.container,
              "data-app-right-panel": !c,
              children: [
                  (0, r.jsx)(f.Ttm, {
                      children: (0, r.jsxs)("div", {
                          className: F.editorBody,
                          children: [
                              (0, r.jsx)(K, {
                                  markAsDismissed: o,
                                  isCoachmark: a,
                              }),
                              (0, r.jsxs)("div", {
                                  className: F.section,
                                  children: [
                                      (0, r.jsx)(f.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: Z.intl.string(G.default.o2NfLF),
                                      }),
                                      (0, r.jsx)(j.o, {}),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: F.section,
                                  children: [
                                      (0, r.jsx)(f.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: Z.intl.string(G.default.uSL2Gy),
                                      }),
                                      (0, r.jsx)(x.U, {
                                          onChange: (e) => {
                                              H(e), 0 === T.length && (0, N.lT)(T, e, M);
                                          },
                                          value: V,
                                          colors: T,
                                          setColors: M,
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: F.section,
                                  children: [
                                      (0, r.jsx)(f.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: Z.intl.string(G.default.F1t0c8),
                                      }),
                                      T.length > 1 &&
                                          (0, r.jsx)(Q, {
                                              gradientAngle: L,
                                              setGradientAngle: B,
                                          }),
                                      (0, r.jsx)(X, {
                                          chassisMixAmount: A,
                                          setChassisMixAmount: (e) => {
                                              U(e), 0 === T.length && (0, N.lT)(T, V, M);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: F.resetButton,
                                  children: [
                                      (0, r.jsx)(J, {
                                          isCoachmark: a,
                                          isMobile: c,
                                      }),
                                      (0, r.jsx)(d.zxk, {
                                          variant: "secondary",
                                          onClick: en,
                                          disabled: S,
                                          text: Z.intl.string(Z.t.yBZMsQ),
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  a
                      ? (0, r.jsx)(ee, {
                            onSaveTheme: $,
                            canApply: er,
                        })
                      : (0, r.jsx)(et, {
                            onSaveTheme: $,
                            canApply: er,
                            metadata: n,
                        }),
              ],
          })
        : null;
}
