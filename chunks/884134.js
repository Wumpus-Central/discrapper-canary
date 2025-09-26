n.d(t, { Z: () => ea }), n(388685), n(704826), n(35282), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(454399),
    u = n(159691),
    d = n(481060),
    f = n(153867),
    _ = n(493773),
    p = n(100527),
    h = n(906732),
    m = n(550385),
    g = n(266454),
    E = n(638212),
    b = n(612659),
    y = n(781391),
    O = n(210887),
    v = n(313789),
    I = n(518596),
    T = n(626135),
    S = n(233398),
    A = n(263198),
    C = n(866419),
    N = n(36982),
    R = n(803038),
    P = n(990924),
    w = n(771934),
    D = n(857658),
    x = n(174278),
    L = n(714097),
    j = n(981631),
    M = n(921944),
    k = n(474936),
    U = n(119475),
    G = n(388032),
    B = n(882741);
function Z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                Z(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Y = 0,
    W = 5000;
function K(e) {
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
function z(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)("div", {
        className: B.closeButton,
        children: (0, r.jsx)(u.PZ7, {
            size: "sm",
            onClick: () => {
                null == t || t(M.L.USER_DISMISS), (0, m.Ll)();
            },
        }),
    });
}
function q() {
    return (0, r.jsxs)("div", {
        className: B.headerContainer,
        children: [
            (0, r.jsx)(d.Text, {
                variant: "text-md/bold",
                children: G.intl.string(U.default["AsmU8/"]),
            }),
            (0, r.jsx)(d.ua7, {
                text: G.intl.string(G.t["5AFxuL"]),
                children: (e) =>
                    (0, r.jsx)(
                        d.SrA,
                        F(
                            {
                                size: "custom",
                                height: 20,
                                width: 20,
                                colorClass: B.nitroIcon,
                            },
                            e,
                        ),
                    ),
            }),
            (0, r.jsx)(z, {}),
        ],
    });
}
function X(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, g.Nj)(l.z.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, r.jsx)(Q, { markAsDismissed: t })
            : (0, r.jsx)(q, {})
        : (0, r.jsx)(Q, { markAsDismissed: () => (0, g.Q3)(l.z.CUSTOM_THEME_COACHMARK) });
}
function Q(e) {
    let { markAsDismissed: t } = e,
        n = (0, b.m)(k.p9.TIER_2);
    return (0, r.jsxs)("div", {
        className: B.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: B.badgeAndCloseRow,
                children: [
                    (0, r.jsx)(d.lBU, { text: G.intl.string(G.t.oW0eUV) }),
                    (0, r.jsx)(z, { markAsDismissed: t }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: B.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(d.X6q, {
                        variant: "heading-lg/extrabold",
                        children: G.intl.string(U.default["23QUzs"]),
                    }),
                    (0, r.jsx)(d.Text, {
                        className: B.subtitle,
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: G.intl.string(n ? U.default.TRCE4u : U.default["UV/Vtr"]),
                    }),
                ],
            }),
        ],
    });
}
function J(e) {
    let t = 10;
    for (let n of [90, 180, 270]) if (Math.abs(e - n) <= t) return n;
    return e;
}
function $(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: a, handleInternalChange: s } = K(t),
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
        className: o()(B.sliderContainer, B.gradientDirectionSliderContainer),
        children: [
            (0, r.jsxs)("div", {
                className: B.controlLabelContainer,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-md/medium",
                        children: G.intl.string(U.default.dZkwg4),
                    }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: l,
                        onChange: (e) => u(e.target.value),
                        placeholder: "".concat(Y, "\xB0"),
                        className: B.controlLabelInput,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: B.sliderWrapper,
                children: [
                    (0, r.jsxs)("div", {
                        className: B.angleIndicatorOverlay,
                        children: [
                            (0, r.jsx)("div", { className: B.angleIndicatorDot }),
                            (0, r.jsx)("div", { className: B.angleIndicatorDot }),
                            (0, r.jsx)("div", { className: B.angleIndicatorLargeDot }),
                            (0, r.jsx)("div", { className: B.angleIndicatorDot }),
                            (0, r.jsx)("div", { className: B.angleIndicatorDot }),
                        ],
                    }),
                    (0, r.jsx)(
                        d.iRW,
                        {
                            initialValue: t,
                            defaultValue: 0,
                            minValue: 0,
                            maxValue: 360,
                            onValueChange: (e) => {
                                (0, w.fR)();
                                let t = J(e);
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
function ee(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: a, handleInternalChange: o } = K(t),
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
        className: B.sliderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: B.controlLabelContainer,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-md/medium",
                        children: G.intl.string(U.default.xlXkaG),
                    }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: s,
                        onChange: (e) => c(e.target.value),
                        placeholder: "".concat(S.BH, "%"),
                        className: B.controlLabelInput,
                    }),
                ],
            }),
            (0, r.jsx)(
                d.iRW,
                {
                    initialValue: t,
                    defaultValue: S.BH,
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
function et(e) {
    let { isCoachmark: t, isMobile: n } = e,
        [a, o] = i.useState(!1),
        s = i.useRef(!1),
        [l, f] = i.useState(!1),
        _ = i.useRef(null),
        p = i.useRef(null),
        h = i.useCallback(() => {
            var e;
            (0, w.Om)();
            let t = (0, A.C)();
            S.Ig.getState().setAll({
                colors: t.colors,
                gradientAngle: null != (e = t.angle) ? e : S.Ig.getState().gradientAngle,
                chassisMixAmount: t.intensity,
            });
        }, []);
    i.useEffect(() => {
        if (t)
            return (
                (s.current = !1),
                (_.current = setTimeout(() => {
                    s.current || o(!0);
                }, W)),
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
            (0, r.jsx)(u.zxk, {
                buttonRef: p,
                variant: "secondary",
                onClick: h,
                onMouseEnter: () => f(!0),
                onMouseLeave: () => f(!1),
                icon: n
                    ? {
                          type: "icon",
                          asset: d.$2U,
                      }
                    : {
                          type: "rive",
                          asset: d.xhK,
                          riveProps: {
                              dataBinding: { fill: d.TVs.colors.ICON_PRIMARY },
                              eventTargetRef: p,
                          },
                      },
                text: G.intl.string(U.default.c9MBEB),
                fullWidth: !0,
            });
    return n
        ? b()
        : (0, r.jsx)(c.i_, {
              title: G.intl.string(U.default.NJ9m8f),
              body: G.intl.string(U.default["6pabtb"]),
              position: "left",
              asset: E ? (0, r.jsx)(d.$2U, {}) : void 0,
              forceOpen: a,
              onTooltipShow: m,
              onTooltipHide: g,
              targetElementRef: p,
              children: b(),
          });
}
function en(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(d.ua7, {
        text: G.intl.string(U.default.SFyHIC),
        shouldShow: n,
        children: (e) =>
            (0, r.jsx)(
                u.zxk,
                H(F({}, e), {
                    variant: "primary",
                    onClick: t,
                    disabled: n,
                    text: G.intl.string(G.t["1Qm829"]),
                    fullWidth: i,
                }),
            ),
    });
}
function er(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, b.m)(k.p9.TIER_2);
    return (
        (0, w.hf)(i, p.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsx)("div", {
            className: B.coachmarkFooterContainer,
            children: i
                ? (0, r.jsx)(en, {
                      disabled: !n,
                      onApply: t,
                      fullWidth: !0,
                  })
                : (0, r.jsx)(E.Z, {
                      subscriptionTier: k.Si.TIER_2,
                      buttonTextOverride: G.intl.string(G.t.JST6jo),
                      premiumModalAnalyticsLocation: {
                          page: j.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: j.jXE.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function ei(e) {
    var t;
    let { onSaveTheme: n, canApply: i, metadata: a } = e,
        s = (0, b.m)(k.p9.TIER_2),
        c = (null == (t = (0, m.oq)().metadata) ? void 0 : t.from) === m.tE.SHARE_MESSAGE;
    (0, w.hf)(s, p.Z.CUSTOM_THEMES_EDITOR);
    let d = () => {
            (0, w.Vb)(),
                (0, g.Q3)(l.z.CUSTOM_THEME_COACHMARK),
                (null == a ? void 0 : a.from) === m.tE.SETTING
                    ? ((0, I.openUserSettings)(v.n.APPEARANCE_PANEL, { section: j.oAB.APPEARANCE }), (0, m.Ll)())
                    : (null == a ? void 0 : a.from) === m.tE.CLIENT_THEMES_EDITOR
                      ? (0, m.XO)(m.wh.CLIENT_THEMES)
                      : (0, m.Ll)();
        },
        f = o()(B.footerContainer, { [B.footerContainerNonPremium]: !s });
    return (0, r.jsx)("div", {
        className: f,
        children: s
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(x.q, {}),
                      (0, r.jsx)(u.zxk, {
                          variant: "secondary",
                          onClick: d,
                          text: G.intl.string(G.t["13/7kZ"]),
                      }),
                      (0, r.jsx)(en, {
                          disabled: !i,
                          onApply: () => {
                              c && T.default.track(j.rMx.CUSTOM_THEME_SHARE_APPLIED, {}), n();
                          },
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(E.Z, {
                          subscriptionTier: k.Si.TIER_2,
                          defaultTextOverride: G.intl.string(G.t.pj0XBA),
                          premiumModalAnalyticsLocation: {
                              page: j.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: j.jXE.CUSTOM_THEMES_FOOTER,
                          },
                          fullWidth: !0,
                      }),
                      (0, r.jsx)(u.zxk, {
                          variant: "secondary",
                          onClick: d,
                          text: c ? G.intl.string(G.t["13/7kZ"]) : G.intl.string(G.t.Olc2Ky),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function ea(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: o, isMobile: c } = e,
        E = R.Mc.useExperiment({ location: "ClientThemeColorPickerTools" }).enabled,
        b = P.y.useConfig({ location: "CustomThemesEditorV2" }).enabled,
        v = (0, C.jJ)(),
        I = (0, C.SK)(),
        T = i.useRef(!1),
        {
            colors: A,
            chassisMixAmount: x,
            gradientAngle: j,
            setColors: k,
            setChassisMixAmount: Z,
            setGradientAngle: F,
        } = (0, S.Ig)(),
        [V, H] = i.useState(null != (t = A[0]) ? t : S.Dp),
        Y = (0, s.e7)([O.Z], () => O.Z.theme),
        W = (0, g.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: K } = (0, h.ZP)(p.Z.CUSTOM_THEMES_EDITOR),
        z = (0, s.e7)([N.Z], () => N.Z.getSavedCustomTheme()),
        q = async () => {
            (T.current = !0),
                await (0, f.ZI)({
                    theme: Y,
                    customUserThemeSettings: {
                        colors: A,
                        gradientColorStops: [],
                        gradientAngle: j,
                        baseMix: x,
                    },
                }),
                (0, w.u7)(A, x, j, Y, K),
                null == a || a(M.L.TAKE_ACTION),
                W || (0, g.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, m.Ll)(),
                (0, y.UD)();
        },
        Q = () => {
            v(C._m.RESET_BUTTON), (0, w.uf)();
        },
        J = A.length > 0;
    return (i.useEffect(
        () => () => {
            T.current || v(C._m.EDITOR_CLOSE);
        },
        [v],
    ),
    (0, _.ZP)(() => {
        if (!o) {
            var e;
            let t = (null != (e = null == A ? void 0 : A.length) ? e : 0) > 0,
                n = null != z;
            !t && n && b
                ? (S.Ig.getState().setAll({
                      colors: z.colors,
                      gradientAngle: z.gradient_angle,
                      chassisMixAmount: z.base_mix,
                  }),
                  (0, C.Bv)(z.base_theme))
                : (0, C.lT)(A, V, k);
        }
    }),
    E)
        ? (0, r.jsxs)("div", {
              className: c ? B.mobileContainer : B.container,
              "data-app-right-panel": !c,
              children: [
                  (0, r.jsx)(d.Ttm, {
                      children: (0, r.jsxs)("div", {
                          className: B.editorBody,
                          children: [
                              (0, r.jsx)(X, {
                                  markAsDismissed: a,
                                  isCoachmark: o,
                              }),
                              (0, r.jsxs)("div", {
                                  className: B.section,
                                  children: [
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: G.intl.string(U.default.o2NfLC),
                                      }),
                                      (0, r.jsx)(L.o, {}),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: B.section,
                                  children: [
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: G.intl.string(U.default.uSL2Gx),
                                      }),
                                      (0, r.jsx)(D.U, {
                                          onChange: (e) => {
                                              H(e), 0 === A.length && (0, C.lT)(A, e, k);
                                          },
                                          value: V,
                                          colors: A,
                                          setColors: k,
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: B.section,
                                  children: [
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: G.intl.string(U.default.F1t0c3),
                                      }),
                                      A.length > 1 &&
                                          (0, r.jsx)($, {
                                              gradientAngle: j,
                                              setGradientAngle: F,
                                          }),
                                      (0, r.jsx)(ee, {
                                          chassisMixAmount: x,
                                          setChassisMixAmount: (e) => {
                                              Z(e), 0 === A.length && (0, C.lT)(A, V, k);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: B.resetButton,
                                  children: [
                                      (0, r.jsx)(et, {
                                          isCoachmark: o,
                                          isMobile: c,
                                      }),
                                      (0, r.jsx)(u.zxk, {
                                          variant: "secondary",
                                          onClick: Q,
                                          disabled: I,
                                          text: G.intl.string(G.t.yBZMsb),
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  o
                      ? (0, r.jsx)(er, {
                            onSaveTheme: q,
                            canApply: J,
                        })
                      : (0, r.jsx)(ei, {
                            onSaveTheme: q,
                            canApply: J,
                            metadata: n,
                        }),
              ],
          })
        : null;
}
