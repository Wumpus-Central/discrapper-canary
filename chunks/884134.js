n.d(t, { Z: () => en }), n(388685), n(704826), n(35282), n(781311);
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
    _ = n(153867),
    p = n(493773),
    h = n(100527),
    m = n(906732),
    g = n(550385),
    E = n(266454),
    b = n(638212),
    y = n(612659),
    O = n(781391),
    v = n(210887),
    I = n(313789),
    T = n(518596),
    S = n(626135),
    A = n(233398),
    C = n(263198),
    N = n(866419),
    R = n(36982),
    P = n(803038),
    D = n(990924),
    w = n(771934),
    L = n(857658),
    x = n(174278),
    M = n(714097),
    k = n(981631),
    j = n(921944),
    U = n(474936),
    G = n(994838),
    B = n(388032),
    Z = n(330749);
let F = 0,
    V = 5000;
function H(e) {
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
function Y(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)("div", {
        className: Z.closeButton,
        children: (0, r.jsx)(d.PZ7, {
            size: "sm",
            onClick: () => {
                null == t || t(j.L.USER_DISMISS), (0, g.Ll)();
            },
        }),
    });
}
function W() {
    return (0, r.jsxs)("div", {
        className: Z.headerContainer,
        children: [
            (0, r.jsx)(f.Text, {
                variant: "text-md/bold",
                children: B.intl.string(G.default.AsmU85),
            }),
            (0, r.jsx)(u.u, {
                text: B.intl.string(B.t["5AFxuK"]),
                children: (0, r.jsx)(f.SrA, {
                    size: "custom",
                    height: 20,
                    width: 20,
                    colorClass: Z.nitroIcon,
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
        className: Z.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: Z.badgeAndCloseRow,
                children: [
                    (0, r.jsx)(f.lBU, { text: B.intl.string(B.t.oW0eUd) }),
                    (0, r.jsx)(Y, { markAsDismissed: t }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: Z.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(f.Heading, {
                        variant: "heading-lg/extrabold",
                        children: B.intl.string(G.default["23QUzv"]),
                    }),
                    (0, r.jsx)(f.Text, {
                        className: Z.subtitle,
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: B.intl.string(n ? G.default.TRCE4g : G.default["UV/Vtv"]),
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
function X(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: a, handleInternalChange: s } = H(t),
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
                        children: B.intl.string(G.default.dZkwgx),
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
                                let t = q(e);
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
        { key: a, handleInternalChange: o } = H(t),
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
                        children: B.intl.string(G.default.xlXkaL),
                    }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: s,
                        onChange: (e) => c(e.target.value),
                        placeholder: "".concat(A.BH, "%"),
                        className: Z.controlLabelInput,
                    }),
                ],
            }),
            (0, r.jsx)(
                f.iRW,
                {
                    initialValue: t,
                    defaultValue: A.BH,
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
function J(e) {
    let { isCoachmark: t, isMobile: n } = e,
        [a, o] = i.useState(!1),
        s = i.useRef(!1),
        [l, u] = i.useState(!1),
        _ = i.useRef(null),
        p = i.useRef(null),
        h = i.useCallback(() => {
            var e;
            (0, w.Om)();
            let t = (0, C.C)();
            A.Ig.getState().setAll({
                colors: t.colors,
                gradientAngle: null != (e = t.angle) ? e : A.Ig.getState().gradientAngle,
                chassisMixAmount: t.intensity,
            });
        }, []);
    i.useEffect(() => {
        if (t)
            return (
                (s.current = !1),
                (_.current = setTimeout(() => {
                    s.current || o(!0);
                }, V)),
                () => {
                    null != _.current && clearTimeout(_.current);
                }
            );
    }, [t]);
    let m = i.useCallback(() => {
            s.current = !0;
        }, []),
        g = i.useCallback(() => {
            o(!1);
        }, []),
        E = a && !l,
        b = () =>
            (0, r.jsx)(d.zxk, {
                buttonRef: p,
                variant: "secondary",
                onClick: h,
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
                              dataBinding: { fill: f.TVs.colors.ICON_PRIMARY },
                              eventTargetRef: p,
                          },
                      },
                text: B.intl.string(G.default.c9MBEH),
                fullWidth: !0,
            });
    return n
        ? b()
        : (0, r.jsx)(c.i, {
              title: B.intl.string(G.default.NJ9m8Y),
              body: B.intl.string(G.default["6pabtR"]),
              position: "left",
              asset: E ? (0, r.jsx)(f.kBK, {}) : void 0,
              forceOpen: a,
              onTooltipShow: m,
              onTooltipHide: g,
              targetElementRef: p,
              children: b(),
          });
}
function $(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(u.u, {
        text: B.intl.string(G.default.SFyHIP),
        shouldShow: n,
        children: (0, r.jsx)(d.zxk, {
            variant: "primary",
            onClick: t,
            disabled: n,
            text: B.intl.string(B.t["1Qm822"]),
            fullWidth: i,
        }),
    });
}
function ee(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, y.m)(U.PremiumTypes.TIER_2);
    return (
        (0, w.hf)(i, h.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsx)("div", {
            className: Z.coachmarkFooterContainer,
            children: i
                ? (0, r.jsx)($, {
                      disabled: !n,
                      onApply: t,
                      fullWidth: !0,
                  })
                : (0, r.jsx)(b.Z, {
                      subscriptionTier: U.Si.TIER_2,
                      buttonTextOverride: B.intl.string(B.t.JST6jl),
                      premiumModalAnalyticsLocation: {
                          page: k.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: k.jXE.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function et(e) {
    var t;
    let { onSaveTheme: n, canApply: i, metadata: a } = e,
        s = (0, y.m)(U.PremiumTypes.TIER_2),
        c = (null == (t = (0, g.oq)().metadata) ? void 0 : t.from) === g.tE.SHARE_MESSAGE;
    (0, w.hf)(s, h.Z.CUSTOM_THEMES_EDITOR);
    let u = () => {
            (0, w.Vb)(),
                (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK),
                (null == a ? void 0 : a.from) === g.tE.SETTING
                    ? ((0, T.openUserSettings)(I.n.APPEARANCE_PANEL, { section: k.oAB.APPEARANCE }), (0, g.Ll)())
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
                          text: B.intl.string(B.t["13/7kX"]),
                      }),
                      (0, r.jsx)($, {
                          disabled: !i,
                          onApply: () => {
                              c && S.default.track(k.rMx.CUSTOM_THEME_SHARE_APPLIED, {}), n();
                          },
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(b.Z, {
                          subscriptionTier: U.Si.TIER_2,
                          defaultTextOverride: B.intl.string(B.t.pj0XBN),
                          premiumModalAnalyticsLocation: {
                              page: k.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: k.jXE.CUSTOM_THEMES_FOOTER,
                          },
                          fullWidth: !0,
                      }),
                      (0, r.jsx)(d.zxk, {
                          variant: "secondary",
                          onClick: u,
                          text: c ? B.intl.string(B.t["13/7kX"]) : B.intl.string(B.t.Olc2K3),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function en(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: o, isMobile: c } = e,
        u = P.Mc.useExperiment({ location: "ClientThemeColorPickerTools" }).enabled,
        b = D.y.useConfig({ location: "CustomThemesEditorV2" }).enabled,
        y = (0, N.jJ)(),
        I = (0, N.SK)(),
        T = i.useRef(!1),
        {
            colors: S,
            chassisMixAmount: C,
            gradientAngle: x,
            setColors: k,
            setChassisMixAmount: U,
            setGradientAngle: F,
        } = (0, A.Ig)(),
        [V, H] = i.useState(null != (t = S[0]) ? t : A.Dp),
        Y = (0, s.e7)([v.Z], () => v.Z.theme),
        W = (0, E.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: z } = (0, m.ZP)(h.Z.CUSTOM_THEMES_EDITOR),
        q = (0, s.e7)([R.Z], () => R.Z.getSavedCustomTheme()),
        $ = async () => {
            (T.current = !0),
                await (0, _.ZI)({
                    theme: Y,
                    customUserThemeSettings: {
                        colors: S,
                        gradientColorStops: [],
                        gradientAngle: x,
                        baseMix: C,
                    },
                }),
                (0, w.u7)(S, C, x, Y, z),
                null == a || a(j.L.TAKE_ACTION),
                W || (0, E.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, g.Ll)(),
                (0, O.UD)();
        },
        en = () => {
            y(N._m.RESET_BUTTON), (0, w.uf)();
        },
        er = S.length > 0;
    return (i.useEffect(
        () => () => {
            T.current || y(N._m.EDITOR_CLOSE);
        },
        [y],
    ),
    (0, p.ZP)(() => {
        if (!o) {
            var e;
            let t = (null != (e = null == S ? void 0 : S.length) ? e : 0) > 0,
                n = null != q;
            !t && n && b
                ? (A.Ig.getState().setAll({
                      colors: q.colors,
                      gradientAngle: q.gradient_angle,
                      chassisMixAmount: q.base_mix,
                  }),
                  (0, N.Bv)(q.base_theme))
                : (0, N.lT)(S, V, k);
        }
    }),
    u)
        ? (0, r.jsxs)("div", {
              className: c ? Z.mobileContainer : Z.container,
              "data-app-right-panel": !c,
              children: [
                  (0, r.jsx)(f.Ttm, {
                      children: (0, r.jsxs)("div", {
                          className: Z.editorBody,
                          children: [
                              (0, r.jsx)(K, {
                                  markAsDismissed: a,
                                  isCoachmark: o,
                              }),
                              (0, r.jsxs)("div", {
                                  className: Z.section,
                                  children: [
                                      (0, r.jsx)(f.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: B.intl.string(G.default.o2NfLF),
                                      }),
                                      (0, r.jsx)(M.o, {}),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: Z.section,
                                  children: [
                                      (0, r.jsx)(f.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: B.intl.string(G.default.uSL2Gy),
                                      }),
                                      (0, r.jsx)(L.U, {
                                          onChange: (e) => {
                                              H(e), 0 === S.length && (0, N.lT)(S, e, k);
                                          },
                                          value: V,
                                          colors: S,
                                          setColors: k,
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: Z.section,
                                  children: [
                                      (0, r.jsx)(f.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: B.intl.string(G.default.F1t0c8),
                                      }),
                                      S.length > 1 &&
                                          (0, r.jsx)(X, {
                                              gradientAngle: x,
                                              setGradientAngle: F,
                                          }),
                                      (0, r.jsx)(Q, {
                                          chassisMixAmount: C,
                                          setChassisMixAmount: (e) => {
                                              U(e), 0 === S.length && (0, N.lT)(S, V, k);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: Z.resetButton,
                                  children: [
                                      (0, r.jsx)(J, {
                                          isCoachmark: o,
                                          isMobile: c,
                                      }),
                                      (0, r.jsx)(d.zxk, {
                                          variant: "secondary",
                                          onClick: en,
                                          disabled: I,
                                          text: B.intl.string(B.t.yBZMsQ),
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  o
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
