(n.d(t, { Z: () => ee }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(680018),
    u = n(146187),
    d = n(179538),
    f = n(755721),
    _ = n(481060),
    p = n(153867),
    h = n(230711),
    m = n(493773),
    g = n(100527),
    E = n(906732),
    b = n(550385),
    y = n(266454),
    O = n(784238),
    v = n(767714),
    I = n(612659),
    T = n(781391),
    S = n(210887),
    A = n(233398),
    N = n(263198),
    C = n(866419),
    R = n(803038),
    P = n(507962),
    w = n(857658),
    D = n(714097),
    L = n(981631),
    x = n(921944),
    M = n(474936),
    k = n(671147),
    j = n(388032),
    U = n(409403);
function G(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                G(e, t, n[t]);
            }));
    }
    return e;
}
function V(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function F(e, t) {
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
function Z(e) {
    let [t, n] = i.useState(0),
        [r, a] = i.useState(!1),
        o = i.useRef(e);
    return (
        i.useEffect(() => {
            (e === o.current || r || n((e) => e + 1), (o.current = e), a(!1));
        }, [e, r]),
        {
            key: t,
            handleInternalChange: i.useCallback((e) => (a(!0), e), [])
        }
    );
}
function H(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)('div', {
        className: U.closeButton,
        children: (0, r.jsx)(u.P, {
            size: 'sm',
            onClick: () => {
                (null == t || t(x.L.USER_DISMISS), (0, b.Ll)());
            }
        })
    });
}
function Y() {
    return (0, r.jsxs)('div', {
        className: U.headerContainer,
        children: [
            (0, r.jsx)(_.Text, {
                variant: 'text-md/bold',
                children: j.intl.string(k.default['AsmU8/'])
            }),
            (0, r.jsx)(_.ua7, {
                text: j.intl.string(j.t['5AFxuL']),
                children: (e) =>
                    (0, r.jsx)(
                        _.SrA,
                        B(
                            {
                                size: 'custom',
                                height: 20,
                                width: 20,
                                colorClass: U.nitroIcon
                            },
                            e
                        )
                    )
            }),
            (0, r.jsx)(H, {})
        ]
    });
}
function W(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, y.Nj)(l.z.CUSTOM_THEME_COACHMARK) ? (n ? (0, r.jsx)(K, { markAsDismissed: t }) : (0, r.jsx)(Y, {})) : (0, r.jsx)(K, { markAsDismissed: () => (0, y.Q3)(l.z.CUSTOM_THEME_COACHMARK) });
}
function K(e) {
    let { markAsDismissed: t } = e,
        n = (0, I.m)(M.p9.TIER_2);
    return (0, r.jsxs)('div', {
        className: U.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: U.badgeAndCloseRow,
                children: [(0, r.jsx)(_.lBU, { text: j.intl.string(j.t.oW0eUV) }), (0, r.jsx)(H, { markAsDismissed: t })]
            }),
            (0, r.jsxs)('div', {
                className: U.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(_.X6q, {
                        variant: 'heading-lg/extrabold',
                        children: j.intl.string(k.default['23QUzs'])
                    }),
                    (0, r.jsx)(_.Text, {
                        className: U.subtitle,
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: j.intl.string(n ? k.default.TRCE4u : k.default['UV/Vtr'])
                    })
                ]
            })
        ]
    });
}
function z(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: i, handleInternalChange: a } = Z(t);
    return (0, r.jsxs)('div', {
        className: o()(U.sliderContainer, U.gradientDirectionSliderContainer),
        children: [
            (0, r.jsx)(_.Text, {
                variant: 'text-sm/medium',
                children: j.intl.string(k.default.dZkwg4)
            }),
            (0, r.jsx)(
                _.iRW,
                {
                    initialValue: t,
                    defaultValue: 0,
                    minValue: 0,
                    maxValue: 360,
                    onValueChange: (e) => {
                        ((0, P.fR)(), a(e), n(e));
                    },
                    onValueRender: (e) => ''.concat(Math.round(e), '\xB0'),
                    keyboardStep: 1
                },
                i
            )
        ]
    });
}
function q(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: i, handleInternalChange: a } = Z(t);
    return (0, r.jsxs)('div', {
        className: U.sliderContainer,
        children: [
            (0, r.jsx)(_.Text, {
                variant: 'text-sm/medium',
                children: j.intl.string(k.default.xlXkaG)
            }),
            (0, r.jsx)(
                _.iRW,
                {
                    initialValue: t,
                    defaultValue: A.BH,
                    minValue: 0,
                    maxValue: 100,
                    onValueChange: (e) => {
                        ((0, P.z3)(), a(e), n(e));
                    },
                    keyboardStep: 1
                },
                i
            )
        ]
    });
}
function X() {
    let e = i.useCallback(() => {
        var e;
        (0, P.Om)();
        let t = (0, N.C)();
        A.Ig.getState().setAll({
            colors: t.colors,
            gradientAngle: null != (e = t.angle) ? e : A.Ig.getState().gradientAngle,
            chassisMixAmount: t.intensity
        });
    }, []);
    return (0, r.jsx)(_.ua7, {
        text: j.intl.string(k.default.c9MBEB),
        children: (t) =>
            (0, r.jsx)(
                c.z,
                F(B({}, t), {
                    variant: 'secondary',
                    onClick: e,
                    icon: _.$2U,
                    text: j.intl.string(k.default.c9MBEB),
                    fullWidth: !0
                })
            )
    });
}
function Q(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(_.ua7, {
        text: j.intl.string(k.default.SFyHIC),
        shouldShow: n,
        children: (e) =>
            (0, r.jsx)(
                c.z,
                F(B({}, e), {
                    variant: 'primary',
                    onClick: t,
                    disabled: n,
                    text: j.intl.string(j.t['1Qm829']),
                    fullWidth: i
                })
            )
    });
}
function J(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, I.m)(M.p9.TIER_2);
    return (
        (0, P.hf)(i, g.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsx)('div', {
            className: U.coachmarkFooterContainer,
            children: i
                ? (0, r.jsx)(Q, {
                      disabled: !n,
                      onApply: t,
                      fullWidth: !0
                  })
                : (0, r.jsx)(O.Z, {
                      premiumModalAnalyticsLocation: {
                          page: L.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: L.jXE.CUSTOM_THEMES_COACHMARK_FOOTER
                      },
                      textOptions: { subscribeText: j.intl.string(j.t.JST6jo) },
                      subscriptionTier: M.Si.TIER_2,
                      showGradient: !0,
                      color: f.Tt.BRAND
                  })
        })
    );
}
function $(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        a = (0, I.m)(M.p9.TIER_2);
    (0, P.hf)(a, g.Z.CUSTOM_THEMES_EDITOR);
    let o = () => {
        ((0, P.Vb)(), (0, y.Q3)(l.z.CUSTOM_THEME_COACHMARK), (null == i ? void 0 : i.from) === b.tE.SETTING ? (h.Z.open(), (0, b.Ll)()) : (null == i ? void 0 : i.from) === b.tE.CLIENT_THEMES_EDITOR ? (0, b.XO)(b.wh.CLIENT_THEMES) : (0, b.Ll)());
    };
    return (0, r.jsxs)('div', {
        className: U.footerContainer,
        children: [
            (0, r.jsx)(d.A, {
                variant: 'secondary',
                onClick: o,
                text: j.intl.string(j.t['13/7kZ'])
            }),
            a
                ? (0, r.jsx)(Q, {
                      disabled: !n,
                      onApply: t
                  })
                : (0, r.jsx)(v.Z, {
                      className: U.subscribeButton,
                      size: f.zx.Sizes.MEDIUM,
                      subscriptionTier: M.Si.TIER_2,
                      showGradient: !0,
                      premiumModalAnalyticsLocation: {
                          page: L.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: L.jXE.CUSTOM_THEMES_FOOTER
                      },
                      textOptions: { textOverride: j.intl.string(j.t.pj0XBA) }
                  })
        ]
    });
}
function ee(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: o } = e,
        u = R.M.useExperiment({ location: 'ClientThemeColorPickerTools' }).enabled,
        d = (0, C.jJ)(),
        f = i.useRef(!1),
        { colors: h, chassisMixAmount: O, gradientAngle: v, setColors: I, setChassisMixAmount: N, setGradientAngle: L } = (0, A.Ig)(),
        [M, G] = i.useState(null != (t = h[0]) ? t : A.Dp),
        B = (0, s.e7)([S.Z], () => S.Z.theme),
        V = (0, y.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: F } = (0, E.ZP)(g.Z.CUSTOM_THEMES_EDITOR),
        Z = async () => {
            ((f.current = !0),
                await (0, p.ZI)({
                    theme: B,
                    customUserThemeSettings: {
                        colors: h,
                        gradientColorStops: [],
                        gradientAngle: v,
                        baseMix: O
                    }
                }),
                (0, P.u7)(h, O, v, B, F),
                null == a || a(x.L.TAKE_ACTION),
                V || (0, y.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, b.Ll)(),
                (0, T.UD)());
        },
        H = () => {
            (d(C._m.RESET_BUTTON), (0, P.uf)());
        },
        Y = h.length > 0;
    return (i.useEffect(
        () => () => {
            f.current || d(C._m.EDITOR_CLOSE);
        },
        [d]
    ),
    (0, m.ZP)(() => {
        o || (0, C.lT)(h, M, I);
    }),
    u)
        ? (0, r.jsx)('div', {
              className: U.container,
              'data-app-right-panel': !0,
              children: (0, r.jsxs)('div', {
                  className: U.containerInner,
                  children: [
                      (0, r.jsx)(_.Ttm, {
                          children: (0, r.jsxs)('div', {
                              className: U.editorBody,
                              children: [
                                  (0, r.jsx)(W, {
                                      markAsDismissed: a,
                                      isCoachmark: o
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: U.section,
                                      children: [
                                          (0, r.jsx)(_.Text, {
                                              variant: 'text-sm/semibold',
                                              color: 'text-secondary',
                                              children: j.intl.string(k.default.o2NfLC)
                                          }),
                                          (0, r.jsx)(D.o, {})
                                      ]
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: U.section,
                                      children: [
                                          (0, r.jsx)(_.Text, {
                                              variant: 'text-sm/semibold',
                                              color: 'text-secondary',
                                              children: j.intl.string(k.default.uSL2Gx)
                                          }),
                                          (0, r.jsx)(w.U, {
                                              onChange: (e) => {
                                                  (G(e), 0 === h.length && (0, C.lT)(h, e, I));
                                              },
                                              value: M,
                                              colors: h,
                                              setColors: I
                                          })
                                      ]
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: U.section,
                                      children: [
                                          (0, r.jsx)(_.Text, {
                                              variant: 'text-sm/semibold',
                                              color: 'text-secondary',
                                              children: j.intl.string(k.default.F1t0c3)
                                          }),
                                          h.length > 1 &&
                                              (0, r.jsx)(z, {
                                                  gradientAngle: v,
                                                  setGradientAngle: L
                                              }),
                                          (0, r.jsx)(q, {
                                              chassisMixAmount: O,
                                              setChassisMixAmount: (e) => {
                                                  (N(e), 0 === h.length && (0, C.lT)(h, M, I));
                                              }
                                          })
                                      ]
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: U.resetButton,
                                      children: [
                                          (0, r.jsx)(X, {}),
                                          (0, r.jsx)(c.z, {
                                              variant: 'secondary',
                                              onClick: H,
                                              text: j.intl.string(j.t.yBZMsb),
                                              fullWidth: !0
                                          })
                                      ]
                                  })
                              ]
                          })
                      }),
                      o
                          ? (0, r.jsx)(J, {
                                onSaveTheme: Z,
                                canApply: Y
                            })
                          : (0, r.jsx)($, {
                                onSaveTheme: Z,
                                canApply: Y,
                                metadata: n
                            })
                  ]
              })
          })
        : null;
}
