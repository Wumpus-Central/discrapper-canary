n.d(t, { Z: () => er }), n(388685), n(704826), n(35282), n(781311);
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
    N = n(803038),
    R = n(507962),
    P = n(857658),
    w = n(174278),
    D = n(714097),
    x = n(981631),
    L = n(921944),
    j = n(474936),
    M = n(119475),
    k = n(388032),
    U = n(882741);
function G(e, t, n) {
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
function B(e) {
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
                G(e, t, n[t]);
            });
    }
    return e;
}
function Z(e, t) {
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
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let V = 0,
    H = 5000;
function Y(e) {
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
function W(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)("div", {
        className: U.closeButton,
        children: (0, r.jsx)(u.PZ7, {
            size: "sm",
            onClick: () => {
                null == t || t(L.L.USER_DISMISS), (0, m.Ll)();
            },
        }),
    });
}
function K() {
    return (0, r.jsxs)("div", {
        className: U.headerContainer,
        children: [
            (0, r.jsx)(d.Text, {
                variant: "text-md/bold",
                children: k.intl.string(M.default["AsmU8/"]),
            }),
            (0, r.jsx)(d.ua7, {
                text: k.intl.string(k.t["5AFxuL"]),
                children: (e) =>
                    (0, r.jsx)(
                        d.SrA,
                        B(
                            {
                                size: "custom",
                                height: 20,
                                width: 20,
                                colorClass: U.nitroIcon,
                            },
                            e,
                        ),
                    ),
            }),
            (0, r.jsx)(W, {}),
        ],
    });
}
function z(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, g.Nj)(l.z.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, r.jsx)(q, { markAsDismissed: t })
            : (0, r.jsx)(K, {})
        : (0, r.jsx)(q, { markAsDismissed: () => (0, g.Q3)(l.z.CUSTOM_THEME_COACHMARK) });
}
function q(e) {
    let { markAsDismissed: t } = e,
        n = (0, b.m)(j.p9.TIER_2);
    return (0, r.jsxs)("div", {
        className: U.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: U.badgeAndCloseRow,
                children: [
                    (0, r.jsx)(d.lBU, { text: k.intl.string(k.t.oW0eUV) }),
                    (0, r.jsx)(W, { markAsDismissed: t }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: U.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(d.X6q, {
                        variant: "heading-lg/extrabold",
                        children: k.intl.string(M.default["23QUzs"]),
                    }),
                    (0, r.jsx)(d.Text, {
                        className: U.subtitle,
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: k.intl.string(n ? M.default.TRCE4u : M.default["UV/Vtr"]),
                    }),
                ],
            }),
        ],
    });
}
function X(e) {
    let t = 10;
    for (let n of [90, 180, 270]) if (Math.abs(e - n) <= t) return n;
    return e;
}
function Q(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: a, handleInternalChange: s } = Y(t),
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
        className: o()(U.sliderContainer, U.gradientDirectionSliderContainer),
        children: [
            (0, r.jsxs)("div", {
                className: U.controlLabelContainer,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-md/medium",
                        children: k.intl.string(M.default.dZkwg4),
                    }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: l,
                        onChange: (e) => u(e.target.value),
                        placeholder: "".concat(V, "\xB0"),
                        className: U.controlLabelInput,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: U.sliderWrapper,
                children: [
                    (0, r.jsxs)("div", {
                        className: U.angleIndicatorOverlay,
                        children: [
                            (0, r.jsx)("div", { className: U.angleIndicatorDot }),
                            (0, r.jsx)("div", { className: U.angleIndicatorDot }),
                            (0, r.jsx)("div", { className: U.angleIndicatorLargeDot }),
                            (0, r.jsx)("div", { className: U.angleIndicatorDot }),
                            (0, r.jsx)("div", { className: U.angleIndicatorDot }),
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
                                (0, R.fR)();
                                let t = X(e);
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
function J(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: a, handleInternalChange: o } = Y(t),
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
        className: U.sliderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: U.controlLabelContainer,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-md/medium",
                        children: k.intl.string(M.default.xlXkaG),
                    }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: s,
                        onChange: (e) => c(e.target.value),
                        placeholder: "".concat(S.BH, "%"),
                        className: U.controlLabelInput,
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
function $(e) {
    let { isCoachmark: t, isMobile: n } = e,
        [a, o] = i.useState(!1),
        s = i.useRef(!1),
        [l, f] = i.useState(!1),
        _ = i.useRef(null),
        p = i.useRef(null),
        h = i.useCallback(() => {
            var e;
            (0, R.Om)();
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
                }, H)),
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
                text: k.intl.string(M.default.c9MBEB),
                fullWidth: !0,
            });
    return n
        ? b()
        : (0, r.jsx)(c.i_, {
              title: k.intl.string(M.default.NJ9m8f),
              body: k.intl.string(M.default["6pabtb"]),
              position: "left",
              asset: E ? (0, r.jsx)(d.$2U, {}) : void 0,
              forceOpen: a,
              onTooltipShow: m,
              onTooltipHide: g,
              targetElementRef: p,
              children: b(),
          });
}
function ee(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(d.ua7, {
        text: k.intl.string(M.default.SFyHIC),
        shouldShow: n,
        children: (e) =>
            (0, r.jsx)(
                u.zxk,
                F(B({}, e), {
                    variant: "primary",
                    onClick: t,
                    disabled: n,
                    text: k.intl.string(k.t["1Qm829"]),
                    fullWidth: i,
                }),
            ),
    });
}
function et(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, b.m)(j.p9.TIER_2);
    return (
        (0, R.hf)(i, p.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsx)("div", {
            className: U.coachmarkFooterContainer,
            children: i
                ? (0, r.jsx)(ee, {
                      disabled: !n,
                      onApply: t,
                      fullWidth: !0,
                  })
                : (0, r.jsx)(E.Z, {
                      subscriptionTier: j.Si.TIER_2,
                      buttonTextOverride: k.intl.string(k.t.JST6jo),
                      premiumModalAnalyticsLocation: {
                          page: x.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: x.jXE.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function en(e) {
    var t;
    let { onSaveTheme: n, canApply: i, metadata: a } = e,
        s = (0, b.m)(j.p9.TIER_2),
        c = (null == (t = (0, m.oq)().metadata) ? void 0 : t.from) === m.tE.SHARE_MESSAGE;
    (0, R.hf)(s, p.Z.CUSTOM_THEMES_EDITOR);
    let d = () => {
            (0, R.Vb)(),
                (0, g.Q3)(l.z.CUSTOM_THEME_COACHMARK),
                (null == a ? void 0 : a.from) === m.tE.SETTING
                    ? ((0, I.openUserSettings)(v.n.APPEARANCE_PANEL, { section: x.oAB.APPEARANCE }), (0, m.Ll)())
                    : (null == a ? void 0 : a.from) === m.tE.CLIENT_THEMES_EDITOR
                      ? (0, m.XO)(m.wh.CLIENT_THEMES)
                      : (0, m.Ll)();
        },
        f = o()(U.footerContainer, { [U.footerContainerNonPremium]: !s });
    return (0, r.jsx)("div", {
        className: f,
        children: s
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(w.q, {}),
                      (0, r.jsx)(u.zxk, {
                          variant: "secondary",
                          onClick: d,
                          text: k.intl.string(k.t["13/7kZ"]),
                      }),
                      (0, r.jsx)(ee, {
                          disabled: !i,
                          onApply: () => {
                              c && T.default.track(x.rMx.CUSTOM_THEME_SHARE_APPLIED, {}), n();
                          },
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(E.Z, {
                          subscriptionTier: j.Si.TIER_2,
                          defaultTextOverride: k.intl.string(k.t.pj0XBA),
                          premiumModalAnalyticsLocation: {
                              page: x.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: x.jXE.CUSTOM_THEMES_FOOTER,
                          },
                          fullWidth: !0,
                      }),
                      (0, r.jsx)(u.zxk, {
                          variant: "secondary",
                          onClick: d,
                          text: c ? k.intl.string(k.t["13/7kZ"]) : k.intl.string(k.t.Olc2Ky),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function er(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: o, isMobile: c } = e,
        E = N.Mc.useExperiment({ location: "ClientThemeColorPickerTools" }).enabled,
        b = (0, C.jJ)(),
        v = (0, C.SK)(),
        I = i.useRef(!1),
        {
            colors: T,
            chassisMixAmount: A,
            gradientAngle: w,
            setColors: x,
            setChassisMixAmount: j,
            setGradientAngle: G,
        } = (0, S.Ig)(),
        [B, Z] = i.useState(null != (t = T[0]) ? t : S.Dp),
        F = (0, s.e7)([O.Z], () => O.Z.theme),
        V = (0, g.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: H } = (0, h.ZP)(p.Z.CUSTOM_THEMES_EDITOR),
        Y = async () => {
            (I.current = !0),
                await (0, f.ZI)({
                    theme: F,
                    customUserThemeSettings: {
                        colors: T,
                        gradientColorStops: [],
                        gradientAngle: w,
                        baseMix: A,
                    },
                }),
                (0, R.u7)(T, A, w, F, H),
                null == a || a(L.L.TAKE_ACTION),
                V || (0, g.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, m.Ll)(),
                (0, y.UD)();
        },
        W = () => {
            b(C._m.RESET_BUTTON), (0, R.uf)();
        },
        K = T.length > 0;
    return (i.useEffect(
        () => () => {
            I.current || b(C._m.EDITOR_CLOSE);
        },
        [b],
    ),
    (0, _.ZP)(() => {
        o || (0, C.lT)(T, B, x);
    }),
    E)
        ? (0, r.jsxs)("div", {
              className: c ? U.mobileContainer : U.container,
              "data-app-right-panel": !c,
              children: [
                  (0, r.jsx)(d.Ttm, {
                      children: (0, r.jsxs)("div", {
                          className: U.editorBody,
                          children: [
                              (0, r.jsx)(z, {
                                  markAsDismissed: a,
                                  isCoachmark: o,
                              }),
                              (0, r.jsxs)("div", {
                                  className: U.section,
                                  children: [
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: k.intl.string(M.default.o2NfLC),
                                      }),
                                      (0, r.jsx)(D.o, {}),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: U.section,
                                  children: [
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: k.intl.string(M.default.uSL2Gx),
                                      }),
                                      (0, r.jsx)(P.U, {
                                          onChange: (e) => {
                                              Z(e), 0 === T.length && (0, C.lT)(T, e, x);
                                          },
                                          value: B,
                                          colors: T,
                                          setColors: x,
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: U.section,
                                  children: [
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: k.intl.string(M.default.F1t0c3),
                                      }),
                                      T.length > 1 &&
                                          (0, r.jsx)(Q, {
                                              gradientAngle: w,
                                              setGradientAngle: G,
                                          }),
                                      (0, r.jsx)(J, {
                                          chassisMixAmount: A,
                                          setChassisMixAmount: (e) => {
                                              j(e), 0 === T.length && (0, C.lT)(T, B, x);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: U.resetButton,
                                  children: [
                                      (0, r.jsx)($, {
                                          isCoachmark: o,
                                          isMobile: c,
                                      }),
                                      (0, r.jsx)(u.zxk, {
                                          variant: "secondary",
                                          onClick: W,
                                          disabled: v,
                                          text: k.intl.string(k.t.yBZMsb),
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  o
                      ? (0, r.jsx)(et, {
                            onSaveTheme: Y,
                            canApply: K,
                        })
                      : (0, r.jsx)(en, {
                            onSaveTheme: Y,
                            canApply: K,
                            metadata: n,
                        }),
              ],
          })
        : null;
}
