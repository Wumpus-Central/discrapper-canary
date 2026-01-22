n.d(t, {
    Ay: () => ei,
    YD: () => ea,
    iI: () => eb,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(554146),
    c = n(397927),
    u = n(964486),
    d = n(100767),
    f = n(955572),
    p = n(775602),
    _ = n(536199),
    h = n(502229),
    m = n(406360),
    g = n(688810),
    E = n(652525),
    b = n(915089),
    y = n(614738),
    O = n(379848),
    A = n(259065),
    v = n(141468),
    S = n(963852),
    I = n(763754),
    T = n(20851),
    C = n(652961),
    N = n(195043),
    R = n(54570),
    w = n(8880),
    P = n(954571),
    D = n(975571),
    x = n(964404),
    L = n(253932),
    j = n(780964),
    M = n(397438),
    k = n(193658),
    U = n(790174),
    G = n(840065),
    V = n(355097),
    F = n(531525),
    B = n(652215),
    H = n(823894),
    Y = n(75804),
    W = n(985018),
    K = n(927961),
    z = n(630765),
    q = n(513653);
function X(e, t, n) {
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
function Z(e) {
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
                X(e, t, n[t]);
            });
    }
    return e;
}
function Q(e, t) {
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
function $(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let J = (0, b.Ld)(),
    ee = (0, b.Ld)(),
    et = (0, b.Ld)(),
    en = s().debounce((e) => {
        (0, f.HU)(e);
    }, 250),
    er = s().debounce((e) => {
        (0, R.zU)(e);
    }, 250);
function ei(e) {
    _.z.useExperiment({ location: "useAccessibilityItems" }, { autoTrackExposure: !0 }).enabled;
    let t = (0, E.t)("UserSettingsAccessibility"),
        n = (0, y.y)("UserSettingsAccessibility"),
        i = (0, m.i)("UserSettingsAccessibility");
    return (0, r.jsx)(U.A, {
        title: W.intl.string(W.t.G0neg7),
        children: (0, r.jsxs)(c.BJc, {
            gap: 16,
            children: [
                (0, r.jsx)(ea, {}),
                (0, r.jsxs)(N.x, {
                    setting: F.H.ACCESSIBILITY_SATURATION,
                    children: [(0, r.jsx)(el, {}), (0, r.jsx)(c.cGx, {})],
                }),
                (0, r.jsxs)(N.x, {
                    setting: F.H.ACCESSIBILITY_LINK_DECORATIONS,
                    children: [(0, r.jsx)(ec, {}), (0, r.jsx)(c.cGx, {})],
                }),
                t
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(N.x, {
                                  setting: F.H.ACCESSIBILITY_CUSTOM_CURSOR,
                                  children: (0, r.jsx)(eu, {}),
                              }),
                              (0, r.jsx)(c.cGx, {}),
                          ],
                      })
                    : null,
                (0, r.jsxs)(N.x, {
                    setting: F.H.ACCESSIBILITY_ROLE_STYLE,
                    children: [(0, r.jsx)(ef, {}), (0, r.jsx)(c.cGx, {})],
                }),
                i &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(ed, {}), (0, r.jsx)(c.cGx, { gap: 4 })],
                    }),
                (0, r.jsxs)(N.x, {
                    setting: F.H.ACCESSIBILITY_DISPLAY_NAME_STYLES,
                    children: [(0, r.jsx)(ep, {}), (0, r.jsx)(c.cGx, {})],
                }),
                (0, r.jsxs)(N.x, {
                    setting: F.H.ACCESSIBILITY_PROFILE_COLORS,
                    children: [(0, r.jsx)(e_, {}), (0, r.jsx)(c.cGx, { gap: 4 })],
                }),
                (0, r.jsxs)(N.x, {
                    setting: F.H.ACCESSIBILITY_CONTRAST,
                    children: [(0, r.jsx)(eh, {}), (0, r.jsx)(c.cGx, { gap: 4 })],
                }),
                (0, r.jsxs)(N.x, {
                    setting: F.H.ACCESSIBILITY_REDUCED_MOTION,
                    children: [(0, r.jsx)(em, {}), (0, r.jsx)(c.cGx, { gap: 4 })],
                }),
                (0, r.jsxs)(N.x, {
                    setting: F.H.ACCESSIBILITY_MESSAGES,
                    children: [(0, r.jsx)(eE, {}), (0, r.jsx)(c.cGx, { gap: 4 })],
                }),
                n &&
                    (0, r.jsxs)(N.x, {
                        setting: F.H.ACCESSIBILITY_SWITCH_ICON,
                        children: [(0, r.jsx)(eo, {}), (0, r.jsx)(c.cGx, { gap: 4 })],
                    }),
                (0, r.jsx)(eO, {}),
                (0, r.jsx)(N.x, {
                    setting: F.H.ACCESSIBILITY_APPEARANCE_UPSELL,
                    children: (0, r.jsx)("div", {
                        className: z.oq,
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-md/normal",
                            children: W.intl.format(W.t.DHpTjT, {
                                onAppearanceClick() {
                                    (0, G.openUserSettings)(j.X.APPEARANCE_PANEL, { section: B.nc_.APPEARANCE });
                                },
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function ea() {
    let e = L.hH.useSetting(),
        [t] = i.useState(() => {
            let e = "1337",
                t = (0, v.rh)(
                    $(
                        Z(
                            {},
                            (0, S.Ay)({
                                channelId: e,
                                content: W.intl.formatToPlainString(W.t.bB80LC, {
                                    previewLink: "https://discord.com/accessibility",
                                }),
                            }),
                        ),
                        {
                            state: B.cmJ.SENT,
                            id: "".concat(0),
                        },
                    ),
                );
            return (t.colorString = "green"), t;
        });
    return (0, r.jsx)(c.M1G, {
        children: (0, r.jsxs)(c.ZpM, {
            className: z.VH,
            "aria-hidden": !0,
            children: [
                (0, r.jsxs)("div", {
                    className: z.yl,
                    children: [
                        (0, r.jsx)(c.Button, {
                            variant: "primary",
                            size: "sm",
                            text: W.intl.string(W.t["2RHHgz"]),
                        }),
                        (0, r.jsx)("div", {
                            className: z.hD,
                            children: [B.clD.ONLINE, B.clD.DND, B.clD.IDLE].map((e) =>
                                (0, r.jsx)(
                                    c.JsQ,
                                    {
                                        "aria-label": W.intl.string(W.t.lqaIxI),
                                        src: q,
                                        size: c._3J.SIZE_32,
                                        status: e,
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: z.QS,
                    children: (0, r.jsx)(T.A, {
                        compact: e,
                        author: $(Z({}, (0, I.p_)(t)), { colorString: "#DD80F4" }),
                        message: t,
                    }),
                }),
            ],
        }),
    });
}
function es() {
    let e = (0, o.bG)([p.A], () => p.A.isHighContrastModeEnabled);
    function t(e) {
        (0, f.uh)(e ? p._.HIGH : p._.DEFAULT);
    }
    return (0, r.jsx)(O.Ay, {
        contentTypes: [l.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE],
        children: (n) => {
            let { visibleContent: i } = n;
            return (0, r.jsx)(c.dOG, {
                label: W.intl.string(W.t.aZlePv),
                description: W.intl.string(W.t["v2qF8+"]),
                badge: i === l.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE ? "new" : void 0,
                checked: e,
                onChange: t,
            });
        },
    });
}
function eo() {
    let e = (0, o.bG)([p.A], () => p.A.isSwitchIconsEnabled);
    return (0, r.jsx)(c.dOG, {
        label: W.intl.string(W.t["S3z+pV"]),
        description: W.intl.string(W.t["3QuI9+"]),
        checked: e,
        onChange: (e) => (0, f.Gm)(e),
        hasIcon: !0,
    });
}
function el() {
    let { saturation: e, desaturateUserColors: t } = (0, o.cf)([p.A], () => ({
        saturation: p.A.saturation,
        desaturateUserColors: p.A.desaturateUserColors,
    }));
    return (0, r.jsxs)(c.BJc, {
        gap: 16,
        children: [
            (0, r.jsx)(c.Apm, {
                label: W.intl.string(W.t["5PWWCY"]),
                description: W.intl.string(W.t["0PbE/H"]),
                "aria-labelledby": J,
                "aria-describedby": ee,
                markers: B.hH7.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: en,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? "".concat(100 * e, "%") : void 0),
            }),
            (0, r.jsx)(N.x, {
                setting: F.H.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, r.jsx)(c.dOG, {
                    label: W.intl.string(W.t.bQCodD),
                    description: W.intl.string(W.t.nlAOEW),
                    checked: t,
                    onChange: f.YV,
                }),
            }),
        ],
    });
}
function ec() {
    let e = (0, o.bG)([p.A], () => p.A.alwaysShowLinkDecorations);
    function t() {
        (0, f.kI)(!e);
    }
    return (0, r.jsx)(c.dOG, {
        label: W.intl.string(W.t.OLZFB8),
        description: W.intl.string(W.t["72i5GI"]),
        checked: e,
        onChange: t,
    });
}
function eu() {
    let e = (0, o.bG)([p.A], () => {
        var e;
        return null == (e = p.A.enableCustomCursor) || e;
    });
    return (0, r.jsx)(c.dOG, {
        label: W.intl.string(W.t["+Isihb"]),
        description: W.intl.string(W.t.nNZ1Tz),
        checked: e,
        onChange: () => (0, f.ts)(!e),
    });
}
function ed() {
    let e = (0, o.bG)([x.Ay], () => x.Ay.hdrDynamicRange);
    function t(e) {
        (0, f.FU)(e);
    }
    return (0, r.jsx)(N.x, {
        setting: F.H.ACCESSIBILITY_HDR_DYNAMIC_RANGE,
        children: (0, r.jsx)(c.z6M, {
            label: W.intl.string(W.t.nemtgW),
            badge: "beta",
            description: W.intl.string(W.t["O/Gjvn"]),
            options: [
                {
                    name: W.intl.string(W.t.D5Fma9),
                    desc: W.intl.string(W.t.Qj75ck),
                    value: "no-limit",
                },
                {
                    name: W.intl.string(W.t.ldcGIH),
                    desc: W.intl.string(W.t["+V/bDk"]),
                    value: "standard",
                },
            ],
            onChange: t,
            value: e,
        }),
    });
}
function ef() {
    let e = (0, o.bG)([p.A], () => p.A.roleStyle);
    function t(e) {
        (0, f.IX)(e);
    }
    return (0, r.jsx)(c.z6M, {
        label: W.intl.string(W.t.uSOPWm),
        description: W.intl.string(W.t["86hjzQ"]),
        options: [
            {
                name: W.intl.string(W.t.YEOEi6),
                value: "username",
            },
            {
                name: W.intl.string(W.t.mQaro3),
                value: "dot",
            },
            {
                name: W.intl.string(W.t.Ji2EVJ),
                value: "hidden",
            },
        ],
        onChange: t,
        value: e,
    });
}
function ep() {
    let e = (0, o.bG)([p.A], () => p.A.displayNameStylesEnabled),
        { analyticsLocations: t } = (0, g.Ay)();
    function n(e) {
        (0, f.Dm)(e), P.default.track(B.HAw.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: e });
    }
    return (0, r.jsx)(c.dOG, {
        label: W.intl.string(K.default["2gFUEw"]),
        description: W.intl.format(K.default.L8U56h, {
            onClickOpenModal() {
                (0, A.L)({ analyticsLocations: t });
            },
        }),
        checked: e,
        onChange: n,
    });
}
function e_() {
    let e = (0, o.bG)([p.A], () => p.A.syncProfileThemeWithUserTheme);
    return (0, r.jsx)(c.nVY, {
        label: W.intl.string(W.t.BT8Bmp),
        children: (0, r.jsx)(N.x, {
            setting: F.H.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
            children: (0, r.jsx)(c.dOG, {
                label: W.intl.string(W.t["sSY+mD"]),
                description: W.intl.format(W.t.u6UjrL, {
                    onThemeClick() {
                        (0, G.openUserSettings)(j.X.APPEARANCE_PANEL, { section: B.nc_.APPEARANCE });
                    },
                }),
                checked: e,
                onChange: f.M1,
            }),
        }),
    });
}
function eh() {
    let [e] = (0, o.yK)([p.A], () => [p.A.syncForcedColors, p.A.systemForcedColors]),
        [t, n] = i.useState(e);
    i.useEffect(() => {
        n(e);
    }, [e]);
    let a = i.useRef(null);
    i.useEffect(() => {
        null != a.current && (clearTimeout(a.current), (a.current = null)),
            t !== e && (a.current = setTimeout(() => (0, f.D3)(t), 150));
    }, [t, e]);
    let s = W.intl.format(W.t.GwEVE2, { learnMoreLink: D.A.getArticleURL(B.MVz.FORCED_COLORS) });
    return (0, r.jsxs)(c.nVY, {
        label: W.intl.string(W.t["TYyfO/"]),
        children: [
            (0, r.jsx)(N.x, {
                setting: F.H.ACCESSIBILITY_HIGH_CONTRAST,
                children: (0, r.jsx)(es, {}),
            }),
            (0, h.D)()
                ? (0, r.jsx)(N.x, {
                      setting: F.H.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
                      children: (0, r.jsx)(c.dOG, {
                          label: W.intl.string(W.t.cguiec),
                          description: s,
                          checked: t,
                          onChange: n,
                      }),
                  })
                : null,
        ],
    });
}
function em() {
    let e = L.kt.useSetting(),
        t = L.Sf.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: a,
            systemPrefersReducedMotion: s,
            gifAutoPlayOverrideReason: l,
            animateEmojiOverrideReason: u,
        } = (0, o.cf)([p.A, M.A], () => ({
            systemPrefersReducedMotion: p.A.systemPrefersReducedMotion,
            rawPrefersReducedMotion: p.A.rawPrefersReducedMotion,
            useReducedMotion: p.A.useReducedMotion,
            gifAutoPlayOverrideReason: M.A.getAppliedOverrideReasonKey("gifAutoPlay"),
            animateEmojiOverrideReason: M.A.getAppliedOverrideReasonKey("animateEmoji"),
        })),
        d = "auto" === a,
        _ = i.useCallback(
            (e) => {
                (0, f.qz)(e ? "auto" : s);
            },
            [s],
        ),
        h = i.useCallback((e) => {
            (0, f.qz)(e ? "reduce" : "no-preference");
        }, []);
    return (0, r.jsx)("div", {
        title: W.intl.string(W.t.e3TR1b),
        className: z.VN,
        children: (0, r.jsxs)(c.nVY, {
            label: W.intl.string(W.t.e3TR1b),
            description: W.intl.format(W.t["2l9U2j"], { helpdeskArticle: D.A.getArticleURL(B.MVz.REDUCED_MOTION) }),
            children: [
                (0, r.jsx)(c.dOG, {
                    label: W.intl.string(W.t["+Dx+HD"]),
                    checked: d,
                    onChange: _,
                }),
                (0, r.jsx)(N.x, {
                    setting: F.H.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                    children: (0, r.jsx)(c.dOG, {
                        label: W.intl.string(W.t.b3XBzg),
                        checked: n,
                        onChange: h,
                    }),
                }),
                (0, r.jsx)(N.x, {
                    setting: F.H.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                    children: (0, r.jsx)(c.dOG, {
                        label: W.intl.string(W.t.Iayoh5),
                        description: null != l ? (0, C.A)(l) : void 0,
                        checked: e,
                        onChange: L.kt.updateSetting,
                    }),
                }),
                (0, r.jsx)(N.x, {
                    setting: F.H.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                    children: (0, r.jsx)(c.dOG, {
                        label: W.intl.string(W.t.iIaOlc),
                        description: null != u ? (0, C.A)(u) : void 0,
                        checked: t,
                        onChange: L.Sf.updateSetting,
                    }),
                }),
                (0, r.jsx)(N.x, {
                    setting: F.H.ACCESSIBILITY_STICKERS,
                    children: (0, r.jsx)(eg, {}),
                }),
            ],
        }),
    });
}
function eg() {
    let e = L.S0.useSetting(),
        t = (0, o.bG)([M.A], () => M.A.getAppliedOverrideReasonKey("animateStickers")),
        n = i.useCallback((e) => {
            L.S0.updateSetting(e);
        }, []);
    return (0, r.jsx)(c.z6M, {
        label: W.intl.string(W.t["6NtAuJ"]),
        description: null != t ? (0, C.A)(t) : W.intl.string(W.t.GRa6U7),
        options: [
            {
                name: W.intl.string(W.t["Xp+X2U"]),
                value: H.BJ.ALWAYS_ANIMATE,
            },
            {
                name: W.intl.string(W.t.IlLT7e),
                desc: W.intl.string(W.t.bIW9Tl),
                value: H.BJ.ANIMATE_ON_INTERACTION,
            },
            {
                name: W.intl.string(W.t.IGu8x3),
                value: H.BJ.NEVER_ANIMATE,
            },
        ],
        onChange: (e) => n(e),
        value: e,
    });
}
function eE() {
    let e = (0, o.bG)([p.A], () => p.A.isSubmitButtonEnabled),
        t = L.D_.useSetting(),
        n = i.useRef(null);
    return (
        (0, k.A)(n, V.Yu.LEGACY_CHAT_INPUT),
        (0, r.jsx)("div", {
            ref: n,
            children: (0, r.jsxs)(c.nVY, {
                label: W.intl.string(W.t.onqU6o),
                children: [
                    (0, r.jsx)(N.x, {
                        setting: F.H.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                        children: (0, r.jsx)(c.dOG, {
                            label: W.intl.string(W.t["3Fztn5"]),
                            checked: e,
                            onChange: f.Xt,
                        }),
                    }),
                    (0, r.jsx)(N.x, {
                        setting: F.H.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                        children: (0, r.jsx)(c.dOG, {
                            label: W.intl.string(W.t.TZ2hZH),
                            description: W.intl.string(W.t.Q7wgHc),
                            checked: t,
                            onChange: (e) => {
                                P.default.track(B.HAw.LEGACY_CHAT_INPUT_TOGGLED, {
                                    enabled: e,
                                    location: { section: B.JJy.SETTINGS_ACCESSIBILITY },
                                }),
                                    L.D_.updateSetting(e);
                            },
                        }),
                    }),
                ],
            }),
        })
    );
}
function eb() {
    let e = (0, o.bG)([w.A], () => w.A.speechRate);
    return (0, r.jsxs)(c.BJc, {
        gap: 16,
        children: [
            (0, r.jsx)(c.Apm, {
                label: W.intl.string(W.t.lsW5Ev),
                markers: Y.P,
                initialValue: e,
                defaultValue: 1,
                stickToMarkers: !0,
                onValueChange: er,
                onValueRender: (e) => "x".concat(e.toFixed(2)),
                onMarkerRender: (e) =>
                    0 === e
                        ? (0, r.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              color: "text-subtle",
                              children: W.intl.string(W.t["493lwX"]),
                          })
                        : 10 === e
                          ? (0, r.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children: W.intl.string(W.t.ZSZEdS),
                            })
                          : 1 === e
                            ? (0, r.jsx)(c.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-feedback-positive",
                                  children: "x1.0",
                              })
                            : e % 1 == 0
                              ? ""
                              : void 0,
                "aria-labelledby": et,
            }),
            (0, r.jsx)(ey, {}),
        ],
    });
}
function ey() {
    let [e, t] = i.useState(!1),
        n = () => {
            if (e) {
                (0, R.pr)(), t(!1);
                return;
            }
            let n = () => t(!0),
                r = () => t(!1);
            (0, R.AU)(W.intl.string(W.t.PKaNJL), !0, void 0, n, r), t(!0);
        };
    return (
        (0, u.l0)(() => (0, R.pr)()),
        (0, r.jsx)(c.Button, {
            text: W.intl.string(W.t.SKNnqq),
            icon: e ? c.E$n : c.udU,
            size: "sm",
            onClick: n,
        })
    );
}
function eO() {
    let e = L.on.useSetting();
    return d.$j
        ? (0, r.jsx)(N.x, {
              setting: F.H.ACCESSIBILITY_TEXT_TO_SPEECH,
              children: (0, r.jsxs)(c.nVY, {
                  label: W.intl.string(W.t.VpSKeO),
                  children: [
                      (0, r.jsx)(N.x, {
                          setting: F.H.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                          children: (0, r.jsx)(c.dOG, {
                              label: W.intl.string(W.t.qvTIwX),
                              checked: e,
                              onChange: L.on.updateSetting,
                          }),
                      }),
                      (0, r.jsx)(N.x, {
                          setting: F.H.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                          children: (0, r.jsx)(eb, {}),
                      }),
                  ],
              }),
          })
        : null;
}
