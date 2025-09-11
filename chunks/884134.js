n.d(t, { Z: () => et }), n(388685), n(704826), n(35282), n(781311);
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
    _ = n(230711),
    p = n(493773),
    h = n(100527),
    m = n(906732),
    g = n(550385),
    E = n(266454),
    b = n(638212),
    y = n(612659),
    O = n(781391),
    v = n(210887),
    I = n(626135),
    T = n(233398),
    S = n(263198),
    A = n(866419),
    C = n(803038),
    N = n(507962),
    R = n(857658),
    P = n(174278),
    w = n(714097),
    D = n(981631),
    x = n(921944),
    L = n(474936),
    j = n(119475),
    k = n(388032),
    M = n(882741);
function U(e, t, n) {
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
function G(e) {
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
                U(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
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
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
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
        className: M.closeButton,
        children: (0, r.jsx)(u.PZ7, {
            size: "sm",
            onClick: () => {
                null == t || t(x.L.USER_DISMISS), (0, g.Ll)();
            },
        }),
    });
}
function W() {
    return (0, r.jsxs)("div", {
        className: M.headerContainer,
        children: [
            (0, r.jsx)(d.Text, {
                variant: "text-md/bold",
                children: k.intl.string(j.default["AsmU8/"]),
            }),
            (0, r.jsx)(d.ua7, {
                text: k.intl.string(k.t["5AFxuL"]),
                children: (e) =>
                    (0, r.jsx)(
                        d.SrA,
                        G(
                            {
                                size: "custom",
                                height: 20,
                                width: 20,
                                colorClass: M.nitroIcon,
                            },
                            e,
                        ),
                    ),
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
        n = (0, y.m)(L.p9.TIER_2);
    return (0, r.jsxs)("div", {
        className: M.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: M.badgeAndCloseRow,
                children: [
                    (0, r.jsx)(d.lBU, { text: k.intl.string(k.t.oW0eUV) }),
                    (0, r.jsx)(Y, { markAsDismissed: t }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: M.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(d.X6q, {
                        variant: "heading-lg/extrabold",
                        children: k.intl.string(j.default["23QUzs"]),
                    }),
                    (0, r.jsx)(d.Text, {
                        className: M.subtitle,
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: k.intl.string(n ? j.default.TRCE4u : j.default["UV/Vtr"]),
                    }),
                ],
            }),
        ],
    });
}
function q(e) {
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
        c("".concat(i, "\xB0")), (0, N.Ac)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: o()(M.sliderContainer, M.gradientDirectionSliderContainer),
        children: [
            (0, r.jsxs)("div", {
                className: M.controlLabelContainer,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-md/medium",
                        children: k.intl.string(j.default.dZkwg4),
                    }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: l,
                        onChange: (e) => u(e.target.value),
                        placeholder: "".concat(F, "\xB0"),
                        className: M.controlLabelInput,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: M.sliderWrapper,
                children: [
                    (0, r.jsxs)("div", {
                        className: M.angleIndicatorOverlay,
                        children: [
                            (0, r.jsx)("div", { className: M.angleIndicatorDot }),
                            (0, r.jsx)("div", { className: M.angleIndicatorDot }),
                            (0, r.jsx)("div", { className: M.angleIndicatorLargeDot }),
                            (0, r.jsx)("div", { className: M.angleIndicatorDot }),
                            (0, r.jsx)("div", { className: M.angleIndicatorDot }),
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
                                (0, N.fR)(), s(e), n(e);
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
function X(e) {
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
        l("".concat(i, "%")), (0, N.PI)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: M.sliderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: M.controlLabelContainer,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-md/medium",
                        children: k.intl.string(j.default.xlXkaG),
                    }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: s,
                        onChange: (e) => c(e.target.value),
                        placeholder: "".concat(T.BH, "%"),
                        className: M.controlLabelInput,
                    }),
                ],
            }),
            (0, r.jsx)(
                d.iRW,
                {
                    initialValue: t,
                    defaultValue: T.BH,
                    minValue: 0,
                    maxValue: 100,
                    onValueChange: (e) => {
                        (0, N.z3)(), o(e), n(e);
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
        [l, f] = i.useState(!1),
        _ = i.useRef(null),
        p = i.useRef(null),
        h = i.useCallback(() => {
            var e;
            (0, N.Om)();
            let t = (0, S.C)();
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
                text: k.intl.string(j.default.c9MBEB),
                fullWidth: !0,
            });
    return n
        ? b()
        : (0, r.jsx)(c.i_, {
              title: k.intl.string(j.default.NJ9m8f),
              body: k.intl.string(j.default["6pabtb"]),
              position: "left",
              asset: E ? (0, r.jsx)(d.$2U, {}) : void 0,
              forceOpen: a,
              onTooltipShow: m,
              onTooltipHide: g,
              targetElementRef: p,
              children: b(),
          });
}
function J(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(d.ua7, {
        text: k.intl.string(j.default.SFyHIC),
        shouldShow: n,
        children: (e) =>
            (0, r.jsx)(
                u.zxk,
                Z(G({}, e), {
                    variant: "primary",
                    onClick: t,
                    disabled: n,
                    text: k.intl.string(k.t["1Qm829"]),
                    fullWidth: i,
                }),
            ),
    });
}
function $(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, y.m)(L.p9.TIER_2);
    return (
        (0, N.hf)(i, h.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsx)("div", {
            className: M.coachmarkFooterContainer,
            children: i
                ? (0, r.jsx)(J, {
                      disabled: !n,
                      onApply: t,
                      fullWidth: !0,
                  })
                : (0, r.jsx)(b.Z, {
                      subscriptionTier: L.Si.TIER_2,
                      buttonTextOverride: k.intl.string(k.t.JST6jo),
                      premiumModalAnalyticsLocation: {
                          page: D.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: D.jXE.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function ee(e) {
    var t;
    let { onSaveTheme: n, canApply: i, metadata: a } = e,
        s = (0, y.m)(L.p9.TIER_2),
        c = (null == (t = (0, g.oq)().metadata) ? void 0 : t.from) === g.tE.SHARE_MESSAGE;
    (0, N.hf)(s, h.Z.CUSTOM_THEMES_EDITOR);
    let d = () => {
            (0, N.Vb)(),
                (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK),
                (null == a ? void 0 : a.from) === g.tE.SETTING
                    ? (_.Z.open(), (0, g.Ll)())
                    : (null == a ? void 0 : a.from) === g.tE.CLIENT_THEMES_EDITOR
                      ? (0, g.XO)(g.wh.CLIENT_THEMES)
                      : (0, g.Ll)();
        },
        f = o()(M.footerContainer, { [M.footerContainerNonPremium]: !s });
    return (0, r.jsx)("div", {
        className: f,
        children: s
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(P.q, {}),
                      (0, r.jsx)(u.zxk, {
                          variant: "secondary",
                          onClick: d,
                          text: k.intl.string(k.t["13/7kZ"]),
                      }),
                      (0, r.jsx)(J, {
                          disabled: !i,
                          onApply: () => {
                              c && I.default.track(D.rMx.CUSTOM_THEME_SHARE_APPLIED, {}), n();
                          },
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(b.Z, {
                          subscriptionTier: L.Si.TIER_2,
                          defaultTextOverride: k.intl.string(k.t.pj0XBA),
                          premiumModalAnalyticsLocation: {
                              page: D.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: D.jXE.CUSTOM_THEMES_FOOTER,
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
function et(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: o, isMobile: c } = e,
        _ = C.Mc.useExperiment({ location: "ClientThemeColorPickerTools" }).enabled,
        b = (0, A.jJ)(),
        y = (0, A.SK)(),
        I = i.useRef(!1),
        {
            colors: S,
            chassisMixAmount: P,
            gradientAngle: D,
            setColors: L,
            setChassisMixAmount: U,
            setGradientAngle: G,
        } = (0, T.Ig)(),
        [B, Z] = i.useState(null != (t = S[0]) ? t : T.Dp),
        F = (0, s.e7)([v.Z], () => v.Z.theme),
        V = (0, E.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: H } = (0, m.ZP)(h.Z.CUSTOM_THEMES_EDITOR),
        Y = async () => {
            (I.current = !0),
                await (0, f.ZI)({
                    theme: F,
                    customUserThemeSettings: {
                        colors: S,
                        gradientColorStops: [],
                        gradientAngle: D,
                        baseMix: P,
                    },
                }),
                (0, N.u7)(S, P, D, F, H),
                null == a || a(x.L.TAKE_ACTION),
                V || (0, E.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, g.Ll)(),
                (0, O.UD)();
        },
        W = () => {
            b(A._m.RESET_BUTTON), (0, N.uf)();
        },
        z = S.length > 0;
    return (i.useEffect(
        () => () => {
            I.current || b(A._m.EDITOR_CLOSE);
        },
        [b],
    ),
    (0, p.ZP)(() => {
        o || (0, A.lT)(S, B, L);
    }),
    _)
        ? (0, r.jsxs)("div", {
              className: c ? M.mobileContainer : M.container,
              "data-app-right-panel": !c,
              children: [
                  (0, r.jsx)(d.Ttm, {
                      children: (0, r.jsxs)("div", {
                          className: M.editorBody,
                          children: [
                              (0, r.jsx)(K, {
                                  markAsDismissed: a,
                                  isCoachmark: o,
                              }),
                              (0, r.jsxs)("div", {
                                  className: M.section,
                                  children: [
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: k.intl.string(j.default.o2NfLC),
                                      }),
                                      (0, r.jsx)(w.o, {}),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: M.section,
                                  children: [
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: k.intl.string(j.default.uSL2Gx),
                                      }),
                                      (0, r.jsx)(R.U, {
                                          onChange: (e) => {
                                              Z(e), 0 === S.length && (0, A.lT)(S, e, L);
                                          },
                                          value: B,
                                          colors: S,
                                          setColors: L,
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: M.section,
                                  children: [
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: k.intl.string(j.default.F1t0c3),
                                      }),
                                      S.length > 1 &&
                                          (0, r.jsx)(q, {
                                              gradientAngle: D,
                                              setGradientAngle: G,
                                          }),
                                      (0, r.jsx)(X, {
                                          chassisMixAmount: P,
                                          setChassisMixAmount: (e) => {
                                              U(e), 0 === S.length && (0, A.lT)(S, B, L);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: M.resetButton,
                                  children: [
                                      (0, r.jsx)(Q, {
                                          isCoachmark: o,
                                          isMobile: c,
                                      }),
                                      (0, r.jsx)(u.zxk, {
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
                      ? (0, r.jsx)($, {
                            onSaveTheme: Y,
                            canApply: z,
                        })
                      : (0, r.jsx)(ee, {
                            onSaveTheme: Y,
                            canApply: z,
                            metadata: n,
                        }),
              ],
          })
        : null;
}
