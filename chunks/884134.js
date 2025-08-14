n.d(t, { Z: () => J }), n(388685), n(704826), n(35282), n(781311);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(704215),
    c = n(680018),
    u = n(146187),
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
    I = n(233398),
    T = n(263198),
    S = n(866419),
    A = n(803038),
    N = n(771934),
    C = n(857658),
    R = n(714097),
    P = n(981631),
    w = n(921944),
    D = n(474936),
    L = n(119475),
    x = n(388032),
    M = n(882741);
function k(e, t, n) {
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
function j(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let B = 0;
function Z(e) {
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
function F(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)("div", {
        className: M.closeButton,
        children: (0, r.jsx)(u.P, {
            size: "sm",
            onClick: () => {
                null == t || t(w.L.USER_DISMISS), (0, g.Ll)();
            },
        }),
    });
}
function V() {
    return (0, r.jsxs)("div", {
        className: M.headerContainer,
        children: [
            (0, r.jsx)(d.Text, {
                variant: "text-md/bold",
                children: x.intl.string(L.default["AsmU8/"]),
            }),
            (0, r.jsx)(d.ua7, {
                text: x.intl.string(x.t["5AFxuL"]),
                children: (e) =>
                    (0, r.jsx)(
                        d.SrA,
                        j(
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
            (0, r.jsx)(F, {}),
        ],
    });
}
function H(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, E.Nj)(l.z.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, r.jsx)(Y, { markAsDismissed: t })
            : (0, r.jsx)(V, {})
        : (0, r.jsx)(Y, { markAsDismissed: () => (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK) });
}
function Y(e) {
    let { markAsDismissed: t } = e,
        n = (0, y.m)(D.p9.TIER_2);
    return (0, r.jsxs)("div", {
        className: M.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: M.badgeAndCloseRow,
                children: [
                    (0, r.jsx)(d.lBU, { text: x.intl.string(x.t.oW0eUV) }),
                    (0, r.jsx)(F, { markAsDismissed: t }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: M.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(d.X6q, {
                        variant: "heading-lg/extrabold",
                        children: x.intl.string(L.default["23QUzs"]),
                    }),
                    (0, r.jsx)(d.Text, {
                        className: M.subtitle,
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: x.intl.string(n ? L.default.TRCE4u : L.default["UV/Vtr"]),
                    }),
                ],
            }),
        ],
    });
}
function W(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: o, handleInternalChange: s } = Z(t),
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
        c("".concat(i, "\xB0")), (0, N.fR)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: a()(M.sliderContainer, M.gradientDirectionSliderContainer),
        children: [
            (0, r.jsxs)("div", {
                className: M.controlLabelContainer,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-md/medium",
                        children: x.intl.string(L.default.dZkwg4),
                    }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: l,
                        onChange: (e) => u(e.target.value),
                        placeholder: "".concat(B, "\xB0"),
                        className: M.controlLabelInput,
                    }),
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
                o,
            ),
        ],
    });
}
function K(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: o, handleInternalChange: a } = Z(t),
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
        l("".concat(i, "%")), (0, N.z3)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: M.sliderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: M.controlLabelContainer,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-md/medium",
                        children: x.intl.string(L.default.xlXkaG),
                    }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: s,
                        onChange: (e) => c(e.target.value),
                        placeholder: "".concat(I.BH, "%"),
                        className: M.controlLabelInput,
                    }),
                ],
            }),
            (0, r.jsx)(
                d.iRW,
                {
                    initialValue: t,
                    defaultValue: I.BH,
                    minValue: 0,
                    maxValue: 100,
                    onValueChange: (e) => {
                        (0, N.z3)(), a(e), n(e);
                    },
                    onValueRender: () => null,
                    keyboardStep: 1,
                },
                o,
            ),
        ],
    });
}
function z() {
    let e = i.useCallback(() => {
        var e;
        (0, N.Om)();
        let t = (0, T.C)();
        I.Ig.getState().setAll({
            colors: t.colors,
            gradientAngle: null != (e = t.angle) ? e : I.Ig.getState().gradientAngle,
            chassisMixAmount: t.intensity,
        });
    }, []);
    return (0, r.jsx)(c.z, {
        variant: "secondary",
        onClick: e,
        icon: d.$2U,
        text: x.intl.string(L.default.c9MBEB),
        fullWidth: !0,
    });
}
function q(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(d.ua7, {
        text: x.intl.string(L.default.SFyHIC),
        shouldShow: n,
        children: (e) =>
            (0, r.jsx)(
                c.z,
                G(j({}, e), {
                    variant: "primary",
                    onClick: t,
                    disabled: n,
                    text: x.intl.string(x.t["1Qm829"]),
                    fullWidth: i,
                }),
            ),
    });
}
function X(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, y.m)(D.p9.TIER_2);
    return (
        (0, N.hf)(i, h.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsx)("div", {
            className: M.coachmarkFooterContainer,
            children: i
                ? (0, r.jsx)(q, {
                      disabled: !n,
                      onApply: t,
                      fullWidth: !0,
                  })
                : (0, r.jsx)(b.Z, {
                      subscriptionTier: D.Si.TIER_2,
                      buttonTextOverride: x.intl.string(x.t.JST6jo),
                      premiumModalAnalyticsLocation: {
                          page: P.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: P.jXE.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function Q(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        o = (0, y.m)(D.p9.TIER_2);
    (0, N.hf)(o, h.Z.CUSTOM_THEMES_EDITOR);
    let s = () => {
            (0, N.Vb)(),
                (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK),
                (null == i ? void 0 : i.from) === g.tE.SETTING
                    ? (_.Z.open(), (0, g.Ll)())
                    : (null == i ? void 0 : i.from) === g.tE.CLIENT_THEMES_EDITOR
                      ? (0, g.XO)(g.wh.CLIENT_THEMES)
                      : (0, g.Ll)();
        },
        u = a()(M.footerContainer, { [M.footerContainerNonPremium]: !o });
    return (0, r.jsx)("div", {
        className: u,
        children: o
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.z, {
                          variant: "secondary",
                          onClick: s,
                          text: x.intl.string(x.t["13/7kZ"]),
                      }),
                      (0, r.jsx)(q, {
                          disabled: !n,
                          onApply: t,
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(b.Z, {
                          subscriptionTier: D.Si.TIER_2,
                          buttonTextOverride: x.intl.string(x.t.pj0XBA),
                          premiumModalAnalyticsLocation: {
                              page: P.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: P.jXE.CUSTOM_THEMES_FOOTER,
                          },
                          fullWidth: !0,
                      }),
                      (0, r.jsx)(c.z, {
                          variant: "secondary",
                          onClick: s,
                          text: x.intl.string(x.t.Olc2Ky),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function J(e) {
    var t;
    let { metadata: n, markAsDismissed: o, isCoachmark: a } = e,
        u = A.Mc.useExperiment({ location: "ClientThemeColorPickerTools" }).enabled,
        _ = (0, S.jJ)(),
        b = i.useRef(!1),
        {
            colors: y,
            chassisMixAmount: T,
            gradientAngle: P,
            setColors: D,
            setChassisMixAmount: k,
            setGradientAngle: j,
        } = (0, I.Ig)(),
        [U, G] = i.useState(null != (t = y[0]) ? t : I.Dp),
        B = (0, s.e7)([v.Z], () => v.Z.theme),
        Z = (0, E.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: F } = (0, m.ZP)(h.Z.CUSTOM_THEMES_EDITOR),
        V = async () => {
            (b.current = !0),
                await (0, f.ZI)({
                    theme: B,
                    customUserThemeSettings: {
                        colors: y,
                        gradientColorStops: [],
                        gradientAngle: P,
                        baseMix: T,
                    },
                }),
                (0, N.u7)(y, T, P, B, F),
                null == o || o(w.L.TAKE_ACTION),
                Z || (0, E.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, g.Ll)(),
                (0, O.UD)();
        },
        Y = () => {
            _(S._m.RESET_BUTTON), (0, N.uf)();
        },
        q = y.length > 0;
    return (i.useEffect(
        () => () => {
            b.current || _(S._m.EDITOR_CLOSE);
        },
        [_],
    ),
    (0, p.ZP)(() => {
        a || (0, S.lT)(y, U, D);
    }),
    u)
        ? (0, r.jsxs)("div", {
              className: M.container,
              "data-app-right-panel": !0,
              children: [
                  (0, r.jsx)(d.Ttm, {
                      children: (0, r.jsxs)("div", {
                          className: M.editorBody,
                          children: [
                              (0, r.jsx)(H, {
                                  markAsDismissed: o,
                                  isCoachmark: a,
                              }),
                              (0, r.jsxs)("div", {
                                  className: M.section,
                                  children: [
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: x.intl.string(L.default.o2NfLC),
                                      }),
                                      (0, r.jsx)(R.o, {}),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: M.section,
                                  children: [
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: x.intl.string(L.default.uSL2Gx),
                                      }),
                                      (0, r.jsx)(C.U, {
                                          onChange: (e) => {
                                              G(e), 0 === y.length && (0, S.lT)(y, e, D);
                                          },
                                          value: U,
                                          colors: y,
                                          setColors: D,
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: M.section,
                                  children: [
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: x.intl.string(L.default.F1t0c3),
                                      }),
                                      y.length > 1 &&
                                          (0, r.jsx)(W, {
                                              gradientAngle: P,
                                              setGradientAngle: j,
                                          }),
                                      (0, r.jsx)(K, {
                                          chassisMixAmount: T,
                                          setChassisMixAmount: (e) => {
                                              k(e), 0 === y.length && (0, S.lT)(y, U, D);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: M.resetButton,
                                  children: [
                                      (0, r.jsx)(z, {}),
                                      (0, r.jsx)(c.z, {
                                          variant: "secondary",
                                          onClick: Y,
                                          text: x.intl.string(x.t.yBZMsb),
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  a
                      ? (0, r.jsx)(X, {
                            onSaveTheme: V,
                            canApply: q,
                        })
                      : (0, r.jsx)(Q, {
                            onSaveTheme: V,
                            canApply: q,
                            metadata: n,
                        }),
              ],
          })
        : null;
}
