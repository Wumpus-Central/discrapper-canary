n.d(t, { Z: () => ee }), n(388685), n(704826), n(35282), n(781311);
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
    T = n(233398),
    S = n(263198),
    A = n(866419),
    N = n(803038),
    C = n(507962),
    R = n(857658),
    P = n(714097),
    w = n(981631),
    D = n(921944),
    L = n(474936),
    x = n(119475),
    M = n(388032),
    k = n(882741);
function j(e, t, n) {
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
function U(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
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
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let V = 0,
    F = 5000;
function Z(e) {
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
        className: k.closeButton,
        children: (0, r.jsx)(u.P, {
            size: "sm",
            onClick: () => {
                null == t || t(D.L.USER_DISMISS), (0, E.Ll)();
            },
        }),
    });
}
function Y() {
    return (0, r.jsxs)("div", {
        className: k.headerContainer,
        children: [
            (0, r.jsx)(f.Text, {
                variant: "text-md/bold",
                children: M.intl.string(x.default["AsmU8/"]),
            }),
            (0, r.jsx)(f.ua7, {
                text: M.intl.string(M.t["5AFxuL"]),
                children: (e) =>
                    (0, r.jsx)(
                        f.SrA,
                        U(
                            {
                                size: "custom",
                                height: 20,
                                width: 20,
                                colorClass: k.nitroIcon,
                            },
                            e,
                        ),
                    ),
            }),
            (0, r.jsx)(H, {}),
        ],
    });
}
function W(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, b.Nj)(l.z.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, r.jsx)(K, { markAsDismissed: t })
            : (0, r.jsx)(Y, {})
        : (0, r.jsx)(K, { markAsDismissed: () => (0, b.Q3)(l.z.CUSTOM_THEME_COACHMARK) });
}
function K(e) {
    let { markAsDismissed: t } = e,
        n = (0, O.m)(L.p9.TIER_2);
    return (0, r.jsxs)("div", {
        className: k.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: k.badgeAndCloseRow,
                children: [
                    (0, r.jsx)(f.lBU, { text: M.intl.string(M.t.oW0eUV) }),
                    (0, r.jsx)(H, { markAsDismissed: t }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: k.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(f.X6q, {
                        variant: "heading-lg/extrabold",
                        children: M.intl.string(x.default["23QUzs"]),
                    }),
                    (0, r.jsx)(f.Text, {
                        className: k.subtitle,
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: M.intl.string(n ? x.default.TRCE4u : x.default["UV/Vtr"]),
                    }),
                ],
            }),
        ],
    });
}
function z(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: a, handleInternalChange: s } = Z(t),
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
        c("".concat(i, "\xB0")), (0, C.fR)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: o()(k.sliderContainer, k.gradientDirectionSliderContainer),
        children: [
            (0, r.jsxs)("div", {
                className: k.controlLabelContainer,
                children: [
                    (0, r.jsx)(f.Text, {
                        variant: "text-md/medium",
                        children: M.intl.string(x.default.dZkwg4),
                    }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: l,
                        onChange: (e) => u(e.target.value),
                        placeholder: "".concat(V, "\xB0"),
                        className: k.controlLabelInput,
                    }),
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
                        (0, C.fR)(), s(e), n(e);
                    },
                    onValueRender: () => null,
                    keyboardStep: 1,
                },
                a,
            ),
        ],
    });
}
function q(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: a, handleInternalChange: o } = Z(t),
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
        l("".concat(i, "%")), (0, C.z3)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: k.sliderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: k.controlLabelContainer,
                children: [
                    (0, r.jsx)(f.Text, {
                        variant: "text-md/medium",
                        children: M.intl.string(x.default.xlXkaG),
                    }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: s,
                        onChange: (e) => c(e.target.value),
                        placeholder: "".concat(T.BH, "%"),
                        className: k.controlLabelInput,
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
                        (0, C.z3)(), o(e), n(e);
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
    let { isCoachmark: t } = e,
        [n, a] = i.useState(!1),
        o = i.useRef(!1),
        [s, l] = i.useState(!1),
        u = i.useRef(null),
        _ = i.useCallback(() => {
            var e;
            (0, C.Om)();
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
                (o.current = !1),
                (u.current = setTimeout(() => {
                    o.current || a(!0);
                }, F)),
                () => {
                    null != u.current && clearTimeout(u.current);
                }
            );
    }, [t]);
    let p = i.useCallback(() => {
            o.current = !0;
        }, []),
        h = i.useCallback(() => {
            a(!1);
        }, []),
        m = n && !s;
    return (0, r.jsx)(d.i_, {
        title: M.intl.string(x.default.NJ9m8f),
        body: M.intl.string(x.default["6pabtb"]),
        position: "left",
        asset: m ? (0, r.jsx)(f.$2U, {}) : void 0,
        forceOpen: n,
        onTooltipShow: p,
        onTooltipHide: h,
        children: (0, r.jsx)(c.z, {
            variant: "secondary",
            onClick: _,
            onMouseEnter: () => l(!0),
            onMouseLeave: () => l(!1),
            icon: {
                type: "rive",
                asset: f.xhK,
                riveProps: { dataBinding: { fill: f.TVs.colors.ICON_PRIMARY } },
            },
            text: M.intl.string(x.default.c9MBEB),
            fullWidth: !0,
        }),
    });
}
function Q(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(f.ua7, {
        text: M.intl.string(x.default.SFyHIC),
        shouldShow: n,
        children: (e) =>
            (0, r.jsx)(
                c.z,
                B(U({}, e), {
                    variant: "primary",
                    onClick: t,
                    disabled: n,
                    text: M.intl.string(M.t["1Qm829"]),
                    fullWidth: i,
                }),
            ),
    });
}
function J(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, O.m)(L.p9.TIER_2);
    return (
        (0, C.hf)(i, m.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsx)("div", {
            className: k.coachmarkFooterContainer,
            children: i
                ? (0, r.jsx)(Q, {
                      disabled: !n,
                      onApply: t,
                      fullWidth: !0,
                  })
                : (0, r.jsx)(y.Z, {
                      subscriptionTier: L.Si.TIER_2,
                      buttonTextOverride: M.intl.string(M.t.JST6jo),
                      premiumModalAnalyticsLocation: {
                          page: w.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: w.jXE.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function $(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        a = (0, O.m)(L.p9.TIER_2);
    (0, C.hf)(a, m.Z.CUSTOM_THEMES_EDITOR);
    let s = () => {
            (0, C.Vb)(),
                (0, b.Q3)(l.z.CUSTOM_THEME_COACHMARK),
                (null == i ? void 0 : i.from) === E.tE.SETTING
                    ? (p.Z.open(), (0, E.Ll)())
                    : (null == i ? void 0 : i.from) === E.tE.CLIENT_THEMES_EDITOR
                      ? (0, E.XO)(E.wh.CLIENT_THEMES)
                      : (0, E.Ll)();
        },
        u = o()(k.footerContainer, { [k.footerContainerNonPremium]: !a });
    return (0, r.jsx)("div", {
        className: u,
        children: a
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.z, {
                          variant: "secondary",
                          onClick: s,
                          text: M.intl.string(M.t["13/7kZ"]),
                      }),
                      (0, r.jsx)(Q, {
                          disabled: !n,
                          onApply: t,
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(y.Z, {
                          subscriptionTier: L.Si.TIER_2,
                          buttonTextOverride: M.intl.string(M.t.pj0XBA),
                          premiumModalAnalyticsLocation: {
                              page: w.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: w.jXE.CUSTOM_THEMES_FOOTER,
                          },
                          fullWidth: !0,
                      }),
                      (0, r.jsx)(c.z, {
                          variant: "secondary",
                          onClick: s,
                          text: M.intl.string(M.t.Olc2Ky),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function ee(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: o } = e,
        u = N.Mc.useExperiment({ location: "ClientThemeColorPickerTools" }).enabled,
        d = (0, A.jJ)(),
        p = (0, A.SK)(),
        y = i.useRef(!1),
        {
            colors: O,
            chassisMixAmount: S,
            gradientAngle: w,
            setColors: L,
            setChassisMixAmount: j,
            setGradientAngle: U,
        } = (0, T.Ig)(),
        [G, B] = i.useState(null != (t = O[0]) ? t : T.Dp),
        V = (0, s.e7)([I.Z], () => I.Z.theme),
        F = (0, b.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: Z } = (0, g.ZP)(m.Z.CUSTOM_THEMES_EDITOR),
        H = async () => {
            (y.current = !0),
                await (0, _.ZI)({
                    theme: V,
                    customUserThemeSettings: {
                        colors: O,
                        gradientColorStops: [],
                        gradientAngle: w,
                        baseMix: S,
                    },
                }),
                (0, C.u7)(O, S, w, V, Z),
                null == a || a(D.L.TAKE_ACTION),
                F || (0, b.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, E.Ll)(),
                (0, v.UD)();
        },
        Y = () => {
            d(A._m.RESET_BUTTON), (0, C.uf)();
        },
        K = O.length > 0;
    return (i.useEffect(
        () => () => {
            y.current || d(A._m.EDITOR_CLOSE);
        },
        [d],
    ),
    (0, h.ZP)(() => {
        o || (0, A.lT)(O, G, L);
    }),
    u)
        ? (0, r.jsxs)("div", {
              className: k.container,
              "data-app-right-panel": !0,
              children: [
                  (0, r.jsx)(f.Ttm, {
                      children: (0, r.jsxs)("div", {
                          className: k.editorBody,
                          children: [
                              (0, r.jsx)(W, {
                                  markAsDismissed: a,
                                  isCoachmark: o,
                              }),
                              (0, r.jsxs)("div", {
                                  className: k.section,
                                  children: [
                                      (0, r.jsx)(f.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: M.intl.string(x.default.o2NfLC),
                                      }),
                                      (0, r.jsx)(P.o, {}),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: k.section,
                                  children: [
                                      (0, r.jsx)(f.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: M.intl.string(x.default.uSL2Gx),
                                      }),
                                      (0, r.jsx)(R.U, {
                                          onChange: (e) => {
                                              B(e), 0 === O.length && (0, A.lT)(O, e, L);
                                          },
                                          value: G,
                                          colors: O,
                                          setColors: L,
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: k.section,
                                  children: [
                                      (0, r.jsx)(f.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: M.intl.string(x.default.F1t0c3),
                                      }),
                                      O.length > 1 &&
                                          (0, r.jsx)(z, {
                                              gradientAngle: w,
                                              setGradientAngle: U,
                                          }),
                                      (0, r.jsx)(q, {
                                          chassisMixAmount: S,
                                          setChassisMixAmount: (e) => {
                                              j(e), 0 === O.length && (0, A.lT)(O, G, L);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: k.resetButton,
                                  children: [
                                      (0, r.jsx)(X, { isCoachmark: o }),
                                      (0, r.jsx)(c.z, {
                                          variant: "secondary",
                                          onClick: Y,
                                          disabled: p,
                                          text: M.intl.string(M.t.yBZMsb),
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  o
                      ? (0, r.jsx)(J, {
                            onSaveTheme: H,
                            canApply: K,
                        })
                      : (0, r.jsx)($, {
                            onSaveTheme: H,
                            canApply: K,
                            metadata: n,
                        }),
              ],
          })
        : null;
}
