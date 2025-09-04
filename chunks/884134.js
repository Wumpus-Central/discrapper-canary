n.d(t, { Z: () => en }), n(388685), n(704826), n(35282), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(680018),
    u = n(146187),
    d = n(454399),
    f = n(481060),
    _ = n(153867),
    p = n(230711),
    h = n(493773),
    m = n(100527),
    g = n(906732),
    E = n(550385),
    b = n(266454),
    y = n(638212),
    O = n(612659),
    v = n(781391),
    I = n(210887),
    S = n(626135),
    T = n(233398),
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
        children: (0, r.jsx)(u.P, {
            size: "sm",
            onClick: () => {
                null == t || t(L.L.USER_DISMISS), (0, E.Ll)();
            },
        }),
    });
}
function K() {
    return (0, r.jsxs)("div", {
        className: U.headerContainer,
        children: [
            (0, r.jsx)(f.Text, {
                variant: "text-md/bold",
                children: k.intl.string(M.default["AsmU8/"]),
            }),
            (0, r.jsx)(f.ua7, {
                text: k.intl.string(k.t["5AFxuL"]),
                children: (e) =>
                    (0, r.jsx)(
                        f.SrA,
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
    return (0, b.Nj)(l.z.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, r.jsx)(q, { markAsDismissed: t })
            : (0, r.jsx)(K, {})
        : (0, r.jsx)(q, { markAsDismissed: () => (0, b.Q3)(l.z.CUSTOM_THEME_COACHMARK) });
}
function q(e) {
    let { markAsDismissed: t } = e,
        n = (0, O.m)(j.p9.TIER_2);
    return (0, r.jsxs)("div", {
        className: U.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: U.badgeAndCloseRow,
                children: [
                    (0, r.jsx)(f.lBU, { text: k.intl.string(k.t.oW0eUV) }),
                    (0, r.jsx)(W, { markAsDismissed: t }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: U.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(f.X6q, {
                        variant: "heading-lg/extrabold",
                        children: k.intl.string(M.default["23QUzs"]),
                    }),
                    (0, r.jsx)(f.Text, {
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
                    (0, r.jsx)(f.Text, {
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
                        f.iRW,
                        {
                            initialValue: t,
                            defaultValue: 0,
                            minValue: 0,
                            maxValue: 360,
                            onValueChange: (e) => {
                                (0, R.fR)(), s(e), n(e);
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
                    (0, r.jsx)(f.Text, {
                        variant: "text-md/medium",
                        children: k.intl.string(M.default.xlXkaG),
                    }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: s,
                        onChange: (e) => c(e.target.value),
                        placeholder: "".concat(T.BH, "%"),
                        className: U.controlLabelInput,
                    }),
                ],
            }),
            (0, r.jsx)(
                f.iRW,
                {
                    initialValue: t,
                    defaultValue: T.BH,
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
function J(e) {
    let { isCoachmark: t, isMobile: n } = e,
        [a, o] = i.useState(!1),
        s = i.useRef(!1),
        [l, u] = i.useState(!1),
        _ = i.useRef(null),
        p = i.useRef(null),
        h = i.useCallback(() => {
            var e;
            (0, R.Om)();
            let t = (0, A.C)();
            T.Ig.getState().setAll({
                colors: t.colors,
                gradientAngle: null != (e = t.angle) ? e : T.Ig.getState().gradientAngle,
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
            (0, r.jsx)(c.z, {
                buttonRef: p,
                variant: "secondary",
                onClick: h,
                onMouseEnter: () => u(!0),
                onMouseLeave: () => u(!1),
                icon: n
                    ? {
                          type: "icon",
                          asset: f.$2U,
                      }
                    : {
                          type: "rive",
                          asset: f.xhK,
                          riveProps: {
                              dataBinding: { fill: f.TVs.colors.ICON_PRIMARY },
                              eventTargetRef: p,
                          },
                      },
                text: k.intl.string(M.default.c9MBEB),
                fullWidth: !0,
            });
    return n
        ? b()
        : (0, r.jsx)(d.i_, {
              title: k.intl.string(M.default.NJ9m8f),
              body: k.intl.string(M.default["6pabtb"]),
              position: "left",
              asset: E ? (0, r.jsx)(f.$2U, {}) : void 0,
              forceOpen: a,
              onTooltipShow: m,
              onTooltipHide: g,
              targetElementRef: p,
              children: b(),
          });
}
function $(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(f.ua7, {
        text: k.intl.string(M.default.SFyHIC),
        shouldShow: n,
        children: (e) =>
            (0, r.jsx)(
                c.z,
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
function ee(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, O.m)(j.p9.TIER_2);
    return (
        (0, R.hf)(i, m.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsx)("div", {
            className: U.coachmarkFooterContainer,
            children: i
                ? (0, r.jsx)($, {
                      disabled: !n,
                      onApply: t,
                      fullWidth: !0,
                  })
                : (0, r.jsx)(y.Z, {
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
function et(e) {
    var t;
    let { onSaveTheme: n, canApply: i, metadata: a } = e,
        s = (0, O.m)(j.p9.TIER_2),
        u = (null == (t = (0, E.oq)().metadata) ? void 0 : t.from) === E.tE.SHARE_MESSAGE;
    (0, R.hf)(s, m.Z.CUSTOM_THEMES_EDITOR);
    let d = () => {
            (0, R.Vb)(),
                (0, b.Q3)(l.z.CUSTOM_THEME_COACHMARK),
                (null == a ? void 0 : a.from) === E.tE.SETTING
                    ? (p.Z.open(), (0, E.Ll)())
                    : (null == a ? void 0 : a.from) === E.tE.CLIENT_THEMES_EDITOR
                      ? (0, E.XO)(E.wh.CLIENT_THEMES)
                      : (0, E.Ll)();
        },
        f = o()(U.footerContainer, { [U.footerContainerNonPremium]: !s });
    return (0, r.jsx)("div", {
        className: f,
        children: s
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(w.q, {}),
                      (0, r.jsx)(c.z, {
                          variant: "secondary",
                          onClick: d,
                          text: k.intl.string(k.t["13/7kZ"]),
                      }),
                      (0, r.jsx)($, {
                          disabled: !i,
                          onApply: () => {
                              u && S.default.track(x.rMx.CUSTOM_THEME_SHARE_APPLIED, {}), n();
                          },
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(y.Z, {
                          subscriptionTier: j.Si.TIER_2,
                          defaultTextOverride: k.intl.string(k.t.pj0XBA),
                          premiumModalAnalyticsLocation: {
                              page: x.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: x.jXE.CUSTOM_THEMES_FOOTER,
                          },
                          fullWidth: !0,
                      }),
                      (0, r.jsx)(c.z, {
                          variant: "secondary",
                          onClick: d,
                          text: u ? k.intl.string(k.t["13/7kZ"]) : k.intl.string(k.t.Olc2Ky),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function en(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: o, isMobile: u } = e,
        d = N.Mc.useExperiment({ location: "ClientThemeColorPickerTools" }).enabled,
        p = (0, C.jJ)(),
        y = (0, C.SK)(),
        O = i.useRef(!1),
        {
            colors: S,
            chassisMixAmount: A,
            gradientAngle: w,
            setColors: x,
            setChassisMixAmount: j,
            setGradientAngle: G,
        } = (0, T.Ig)(),
        [B, Z] = i.useState(null != (t = S[0]) ? t : T.Dp),
        F = (0, s.e7)([I.Z], () => I.Z.theme),
        V = (0, b.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: H } = (0, g.ZP)(m.Z.CUSTOM_THEMES_EDITOR),
        Y = async () => {
            (O.current = !0),
                await (0, _.ZI)({
                    theme: F,
                    customUserThemeSettings: {
                        colors: S,
                        gradientColorStops: [],
                        gradientAngle: w,
                        baseMix: A,
                    },
                }),
                (0, R.u7)(S, A, w, F, H),
                null == a || a(L.L.TAKE_ACTION),
                V || (0, b.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, E.Ll)(),
                (0, v.UD)();
        },
        W = () => {
            p(C._m.RESET_BUTTON), (0, R.uf)();
        },
        K = S.length > 0;
    return (i.useEffect(
        () => () => {
            O.current || p(C._m.EDITOR_CLOSE);
        },
        [p],
    ),
    (0, h.ZP)(() => {
        o || (0, C.lT)(S, B, x);
    }),
    d)
        ? (0, r.jsxs)("div", {
              className: u ? U.mobileContainer : U.container,
              "data-app-right-panel": !u,
              children: [
                  (0, r.jsx)(f.Ttm, {
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
                                      (0, r.jsx)(f.Text, {
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
                                      (0, r.jsx)(f.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: k.intl.string(M.default.uSL2Gx),
                                      }),
                                      (0, r.jsx)(P.U, {
                                          onChange: (e) => {
                                              Z(e), 0 === S.length && (0, C.lT)(S, e, x);
                                          },
                                          value: B,
                                          colors: S,
                                          setColors: x,
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: U.section,
                                  children: [
                                      (0, r.jsx)(f.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: k.intl.string(M.default.F1t0c3),
                                      }),
                                      S.length > 1 &&
                                          (0, r.jsx)(X, {
                                              gradientAngle: w,
                                              setGradientAngle: G,
                                          }),
                                      (0, r.jsx)(Q, {
                                          chassisMixAmount: A,
                                          setChassisMixAmount: (e) => {
                                              j(e), 0 === S.length && (0, C.lT)(S, B, x);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: U.resetButton,
                                  children: [
                                      (0, r.jsx)(J, {
                                          isCoachmark: o,
                                          isMobile: u,
                                      }),
                                      (0, r.jsx)(c.z, {
                                          variant: "secondary",
                                          onClick: W,
                                          disabled: y,
                                          text: k.intl.string(k.t.yBZMsb),
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  o
                      ? (0, r.jsx)(ee, {
                            onSaveTheme: Y,
                            canApply: K,
                        })
                      : (0, r.jsx)(et, {
                            onSaveTheme: Y,
                            canApply: K,
                            metadata: n,
                        }),
              ],
          })
        : null;
}
