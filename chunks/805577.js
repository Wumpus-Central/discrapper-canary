n.d(t, { Ay: () => ee, YD: () => et, iI: () => em });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(554146),
    d = n(397927),
    c = n(964486),
    u = n(100767),
    h = n(955572),
    A = n(775602),
    g = n(536199),
    m = n(502229),
    p = n(406360),
    _ = n(688810),
    x = n(652525),
    f = n(915089),
    E = n(614738),
    C = n(379848),
    I = n(259065),
    S = n(141468),
    b = n(963852),
    N = n(763754),
    T = n(20851),
    j = n(652961),
    v = n(195043),
    y = n(54570),
    R = n(8880),
    O = n(954571),
    L = n(975571),
    D = n(964404),
    M = n(253932),
    G = n(780964),
    U = n(397438),
    P = n(193658),
    k = n(790174),
    w = n(840065),
    V = n(355097),
    B = n(531525),
    H = n(652215),
    F = n(823894),
    Y = n(75804),
    W = n(985018),
    K = n(927961),
    z = n(630765),
    X = n(513653);
let q = (0, f.Ld)(),
    J = (0, f.Ld)(),
    Q = (0, f.Ld)(),
    Z = a().debounce((e) => {
        (0, h.HU)(e);
    }, 250),
    $ = a().debounce((e) => {
        (0, y.zU)(e);
    }, 250);
function ee(e) {
    g.z.useExperiment({ location: "useAccessibilityItems" }, { autoTrackExposure: !0 }).enabled;
    let t = (0, x.t)("UserSettingsAccessibility"),
        n = (0, E.y)("UserSettingsAccessibility"),
        l = (0, p.i)("UserSettingsAccessibility");
    return (0, i.jsx)(k.A, {
        title: W.intl.string(W.t.G0neg7),
        children: (0, i.jsxs)(d.BJc, {
            gap: 16,
            children: [
                (0, i.jsx)(et, {}),
                (0, i.jsxs)(v.x, {
                    setting: B.H.ACCESSIBILITY_SATURATION,
                    children: [(0, i.jsx)(el, {}), (0, i.jsx)(d.cGx, {})],
                }),
                (0, i.jsxs)(v.x, {
                    setting: B.H.ACCESSIBILITY_LINK_DECORATIONS,
                    children: [(0, i.jsx)(es, {}), (0, i.jsx)(d.cGx, {})],
                }),
                t
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(v.x, {
                                  setting: B.H.ACCESSIBILITY_CUSTOM_CURSOR,
                                  children: (0, i.jsx)(ea, {}),
                              }),
                              (0, i.jsx)(d.cGx, {}),
                          ],
                      })
                    : null,
                (0, i.jsxs)(v.x, {
                    setting: B.H.ACCESSIBILITY_ROLE_STYLE,
                    children: [(0, i.jsx)(eo, {}), (0, i.jsx)(d.cGx, {})],
                }),
                l && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(er, {}), (0, i.jsx)(d.cGx, { gap: 4 })] }),
                (0, i.jsxs)(v.x, {
                    setting: B.H.ACCESSIBILITY_DISPLAY_NAME_STYLES,
                    children: [(0, i.jsx)(ed, {}), (0, i.jsx)(d.cGx, {})],
                }),
                (0, i.jsxs)(v.x, {
                    setting: B.H.ACCESSIBILITY_PROFILE_COLORS,
                    children: [(0, i.jsx)(ec, {}), (0, i.jsx)(d.cGx, { gap: 4 })],
                }),
                (0, i.jsxs)(v.x, {
                    setting: B.H.ACCESSIBILITY_CONTRAST,
                    children: [(0, i.jsx)(eu, {}), (0, i.jsx)(d.cGx, { gap: 4 })],
                }),
                (0, i.jsxs)(v.x, {
                    setting: B.H.ACCESSIBILITY_REDUCED_MOTION,
                    children: [(0, i.jsx)(eh, {}), (0, i.jsx)(d.cGx, { gap: 4 })],
                }),
                (0, i.jsxs)(v.x, {
                    setting: B.H.ACCESSIBILITY_MESSAGES,
                    children: [(0, i.jsx)(eg, {}), (0, i.jsx)(d.cGx, { gap: 4 })],
                }),
                n &&
                    (0, i.jsxs)(v.x, {
                        setting: B.H.ACCESSIBILITY_SWITCH_ICON,
                        children: [(0, i.jsx)(ei, {}), (0, i.jsx)(d.cGx, { gap: 4 })],
                    }),
                (0, i.jsx)(e_, {}),
                (0, i.jsx)(v.x, {
                    setting: B.H.ACCESSIBILITY_APPEARANCE_UPSELL,
                    children: (0, i.jsx)("div", {
                        className: z.oq,
                        children: (0, i.jsx)(d.Text, {
                            variant: "text-md/normal",
                            children: W.intl.format(W.t.DHpTjT, {
                                onAppearanceClick() {
                                    (0, w.openUserSettings)(G.X.APPEARANCE_PANEL, { section: H.nc_.APPEARANCE });
                                },
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function et() {
    let e = M.hH.useSetting(),
        [t] = l.useState(() => {
            let e = (0, S.rh)({
                ...(0, b.Ay)({
                    channelId: "1337",
                    content: W.intl.formatToPlainString(W.t.bB80LC, {
                        previewLink: "https://discord.com/accessibility",
                    }),
                }),
                state: H.cmJ.SENT,
                id: "0",
            });
            return (e.colorString = "green"), e;
        });
    return (0, i.jsx)(d.M1G, {
        children: (0, i.jsxs)(d.ZpM, {
            className: z.VH,
            "aria-hidden": !0,
            children: [
                (0, i.jsxs)("div", {
                    className: z.yl,
                    children: [
                        (0, i.jsx)(d.Button, { variant: "primary", size: "sm", text: W.intl.string(W.t["2RHHgz"]) }),
                        (0, i.jsx)("div", {
                            className: z.hD,
                            children: [H.clD.ONLINE, H.clD.DND, H.clD.IDLE].map((e) =>
                                (0, i.jsx)(
                                    d.JsQ,
                                    { "aria-label": W.intl.string(W.t.lqaIxI), src: X, size: d._3J.SIZE_32, status: e },
                                    e,
                                ),
                            ),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: z.QS,
                    children: (0, i.jsx)(T.A, {
                        compact: e,
                        author: { ...(0, N.p_)(t), colorString: "#DD80F4" },
                        message: t,
                    }),
                }),
            ],
        }),
    });
}
function en() {
    let e = (0, r.bG)([A.A], () => A.A.isHighContrastModeEnabled);
    function t(e) {
        (0, h.uh)(e ? A._.HIGH : A._.DEFAULT);
    }
    return (0, i.jsx)(C.Ay, {
        contentTypes: [o.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE],
        children: (n) => {
            let { visibleContent: l } = n;
            return (0, i.jsx)(d.dOG, {
                label: W.intl.string(W.t.aZlePv),
                description: W.intl.string(W.t["v2qF8+"]),
                badge: l === o.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE ? "new" : void 0,
                checked: e,
                onChange: t,
            });
        },
    });
}
function ei() {
    let e = (0, r.bG)([A.A], () => A.A.isSwitchIconsEnabled);
    return (0, i.jsx)(d.dOG, {
        label: W.intl.string(W.t["S3z+pV"]),
        description: W.intl.string(W.t["3QuI9+"]),
        checked: e,
        onChange: (e) => (0, h.Gm)(e),
        hasIcon: !0,
    });
}
function el() {
    let { saturation: e, desaturateUserColors: t } = (0, r.cf)([A.A], () => ({
        saturation: A.A.saturation,
        desaturateUserColors: A.A.desaturateUserColors,
    }));
    return (0, i.jsxs)(d.BJc, {
        gap: 16,
        children: [
            (0, i.jsx)(d.Apm, {
                label: W.intl.string(W.t["5PWWCY"]),
                description: W.intl.string(W.t["0PbE/H"]),
                "aria-labelledby": q,
                "aria-describedby": J,
                markers: H.hH7.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: Z,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
            }),
            (0, i.jsx)(v.x, {
                setting: B.H.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, i.jsx)(d.dOG, {
                    label: W.intl.string(W.t.bQCodD),
                    description: W.intl.string(W.t.nlAOEW),
                    checked: t,
                    onChange: h.YV,
                }),
            }),
        ],
    });
}
function es() {
    let e = (0, r.bG)([A.A], () => A.A.alwaysShowLinkDecorations);
    return (0, i.jsx)(d.dOG, {
        label: W.intl.string(W.t.OLZFB8),
        description: W.intl.string(W.t["72i5GI"]),
        checked: e,
        onChange: function () {
            (0, h.kI)(!e);
        },
    });
}
function ea() {
    let e = (0, r.bG)([A.A], () => A.A.enableCustomCursor ?? !0);
    return (0, i.jsx)(d.dOG, {
        label: W.intl.string(W.t["+Isihb"]),
        description: W.intl.string(W.t.nNZ1Tz),
        checked: e,
        onChange: () => (0, h.ts)(!e),
    });
}
function er() {
    let e = (0, r.bG)([D.Ay], () => D.Ay.hdrDynamicRange);
    return (0, i.jsx)(v.x, {
        setting: B.H.ACCESSIBILITY_HDR_DYNAMIC_RANGE,
        children: (0, i.jsx)(d.z6M, {
            label: W.intl.string(W.t.nemtgW),
            badge: "beta",
            description: W.intl.string(W.t["O/Gjvn"]),
            options: [
                { name: W.intl.string(W.t.D5Fma9), desc: W.intl.string(W.t.Qj75ck), value: "no-limit" },
                { name: W.intl.string(W.t.ldcGIH), desc: W.intl.string(W.t["+V/bDk"]), value: "standard" },
            ],
            onChange: function (e) {
                (0, h.FU)(e);
            },
            value: e,
        }),
    });
}
function eo() {
    let e = (0, r.bG)([A.A], () => A.A.roleStyle);
    return (0, i.jsx)(d.z6M, {
        label: W.intl.string(W.t.uSOPWm),
        description: W.intl.string(W.t["86hjzQ"]),
        options: [
            { name: W.intl.string(W.t.YEOEi6), value: "username" },
            { name: W.intl.string(W.t.mQaro3), value: "dot" },
            { name: W.intl.string(W.t.Ji2EVJ), value: "hidden" },
        ],
        onChange: function (e) {
            (0, h.IX)(e);
        },
        value: e,
    });
}
function ed() {
    let e = (0, r.bG)([A.A], () => A.A.displayNameStylesEnabled),
        { analyticsLocations: t } = (0, _.Ay)();
    return (0, i.jsx)(d.dOG, {
        label: W.intl.string(K.default["2gFUEw"]),
        description: W.intl.format(K.default.L8U56h, {
            onClickOpenModal() {
                (0, I.L)({ analyticsLocations: t });
            },
        }),
        checked: e,
        onChange: function (e) {
            (0, h.Dm)(e), O.default.track(H.HAw.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: e });
        },
    });
}
function ec() {
    let e = (0, r.bG)([A.A], () => A.A.syncProfileThemeWithUserTheme);
    return (0, i.jsx)(d.nVY, {
        label: W.intl.string(W.t.BT8Bmp),
        children: (0, i.jsx)(v.x, {
            setting: B.H.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
            children: (0, i.jsx)(d.dOG, {
                label: W.intl.string(W.t["sSY+mD"]),
                description: W.intl.format(W.t.u6UjrL, {
                    onThemeClick() {
                        (0, w.openUserSettings)(G.X.APPEARANCE_PANEL, { section: H.nc_.APPEARANCE });
                    },
                }),
                checked: e,
                onChange: h.M1,
            }),
        }),
    });
}
function eu() {
    let [e] = (0, r.yK)([A.A], () => [A.A.syncForcedColors, A.A.systemForcedColors]),
        [t, n] = l.useState(e);
    l.useEffect(() => {
        n(e);
    }, [e]);
    let s = l.useRef(null);
    l.useEffect(() => {
        null != s.current && (clearTimeout(s.current), (s.current = null)),
            t !== e && (s.current = setTimeout(() => (0, h.D3)(t), 150));
    }, [t, e]);
    let a = W.intl.format(W.t.GwEVE2, { learnMoreLink: L.A.getArticleURL(H.MVz.FORCED_COLORS) });
    return (0, i.jsxs)(d.nVY, {
        label: W.intl.string(W.t["TYyfO/"]),
        children: [
            (0, i.jsx)(v.x, { setting: B.H.ACCESSIBILITY_HIGH_CONTRAST, children: (0, i.jsx)(en, {}) }),
            (0, m.D)()
                ? (0, i.jsx)(v.x, {
                      setting: B.H.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
                      children: (0, i.jsx)(d.dOG, {
                          label: W.intl.string(W.t.cguiec),
                          description: a,
                          checked: t,
                          onChange: n,
                      }),
                  })
                : null,
        ],
    });
}
function eh() {
    let e = M.kt.useSetting(),
        t = M.Sf.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: s,
            systemPrefersReducedMotion: a,
            gifAutoPlayOverrideReason: o,
            animateEmojiOverrideReason: c,
        } = (0, r.cf)([A.A, U.A], () => ({
            systemPrefersReducedMotion: A.A.systemPrefersReducedMotion,
            rawPrefersReducedMotion: A.A.rawPrefersReducedMotion,
            useReducedMotion: A.A.useReducedMotion,
            gifAutoPlayOverrideReason: U.A.getAppliedOverrideReasonKey("gifAutoPlay"),
            animateEmojiOverrideReason: U.A.getAppliedOverrideReasonKey("animateEmoji"),
        })),
        u = l.useCallback(
            (e) => {
                (0, h.qz)(e ? "auto" : a);
            },
            [a],
        ),
        g = l.useCallback((e) => {
            (0, h.qz)(e ? "reduce" : "no-preference");
        }, []);
    return (0, i.jsx)("div", {
        title: W.intl.string(W.t.e3TR1b),
        className: z.VN,
        children: (0, i.jsxs)(d.nVY, {
            label: W.intl.string(W.t.e3TR1b),
            description: W.intl.format(W.t["2l9U2j"], { helpdeskArticle: L.A.getArticleURL(H.MVz.REDUCED_MOTION) }),
            children: [
                (0, i.jsx)(d.dOG, { label: W.intl.string(W.t["+Dx+HD"]), checked: "auto" === s, onChange: u }),
                (0, i.jsx)(v.x, {
                    setting: B.H.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                    children: (0, i.jsx)(d.dOG, { label: W.intl.string(W.t.b3XBzg), checked: n, onChange: g }),
                }),
                (0, i.jsx)(v.x, {
                    setting: B.H.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                    children: (0, i.jsx)(d.dOG, {
                        label: W.intl.string(W.t.Iayoh5),
                        description: null != o ? (0, j.A)(o) : void 0,
                        checked: e,
                        onChange: M.kt.updateSetting,
                    }),
                }),
                (0, i.jsx)(v.x, {
                    setting: B.H.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                    children: (0, i.jsx)(d.dOG, {
                        label: W.intl.string(W.t.iIaOlc),
                        description: null != c ? (0, j.A)(c) : void 0,
                        checked: t,
                        onChange: M.Sf.updateSetting,
                    }),
                }),
                (0, i.jsx)(v.x, { setting: B.H.ACCESSIBILITY_STICKERS, children: (0, i.jsx)(eA, {}) }),
            ],
        }),
    });
}
function eA() {
    let e = M.S0.useSetting(),
        t = (0, r.bG)([U.A], () => U.A.getAppliedOverrideReasonKey("animateStickers")),
        n = l.useCallback((e) => {
            M.S0.updateSetting(e);
        }, []);
    return (0, i.jsx)(d.z6M, {
        label: W.intl.string(W.t["6NtAuJ"]),
        description: null != t ? (0, j.A)(t) : W.intl.string(W.t.GRa6U7),
        options: [
            { name: W.intl.string(W.t["Xp+X2U"]), value: F.BJ.ALWAYS_ANIMATE },
            { name: W.intl.string(W.t.IlLT7e), desc: W.intl.string(W.t.bIW9Tl), value: F.BJ.ANIMATE_ON_INTERACTION },
            { name: W.intl.string(W.t.IGu8x3), value: F.BJ.NEVER_ANIMATE },
        ],
        onChange: (e) => n(e),
        value: e,
    });
}
function eg() {
    let e = (0, r.bG)([A.A], () => A.A.isSubmitButtonEnabled),
        t = M.D_.useSetting(),
        n = l.useRef(null);
    return (
        (0, P.A)(n, V.Yu.LEGACY_CHAT_INPUT),
        (0, i.jsx)("div", {
            ref: n,
            children: (0, i.jsxs)(d.nVY, {
                label: W.intl.string(W.t.onqU6o),
                children: [
                    (0, i.jsx)(v.x, {
                        setting: B.H.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                        children: (0, i.jsx)(d.dOG, {
                            label: W.intl.string(W.t["3Fztn5"]),
                            checked: e,
                            onChange: h.Xt,
                        }),
                    }),
                    (0, i.jsx)(v.x, {
                        setting: B.H.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                        children: (0, i.jsx)(d.dOG, {
                            label: W.intl.string(W.t.TZ2hZH),
                            description: W.intl.string(W.t.Q7wgHc),
                            checked: t,
                            onChange: (e) => {
                                O.default.track(H.HAw.LEGACY_CHAT_INPUT_TOGGLED, {
                                    enabled: e,
                                    location: { section: H.JJy.SETTINGS_ACCESSIBILITY },
                                }),
                                    M.D_.updateSetting(e);
                            },
                        }),
                    }),
                ],
            }),
        })
    );
}
function em() {
    let e = (0, r.bG)([R.A], () => R.A.speechRate);
    return (0, i.jsxs)(d.BJc, {
        gap: 16,
        children: [
            (0, i.jsx)(d.Apm, {
                label: W.intl.string(W.t.lsW5Ev),
                markers: Y.P,
                initialValue: e,
                defaultValue: 1,
                stickToMarkers: !0,
                onValueChange: $,
                onValueRender: (e) => `x${e.toFixed(2)}`,
                onMarkerRender: (e) =>
                    0 === e
                        ? (0, i.jsx)(d.Text, {
                              variant: "text-xs/medium",
                              color: "text-subtle",
                              children: W.intl.string(W.t["493lwX"]),
                          })
                        : 10 === e
                          ? (0, i.jsx)(d.Text, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children: W.intl.string(W.t.ZSZEdS),
                            })
                          : 1 === e
                            ? (0, i.jsx)(d.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-feedback-positive",
                                  children: "x1.0",
                              })
                            : e % 1 == 0
                              ? ""
                              : void 0,
                "aria-labelledby": Q,
            }),
            (0, i.jsx)(ep, {}),
        ],
    });
}
function ep() {
    let [e, t] = l.useState(!1);
    return (
        (0, c.l0)(() => (0, y.pr)()),
        (0, i.jsx)(d.Button, {
            text: W.intl.string(W.t.SKNnqq),
            icon: e ? d.E$n : d.udU,
            size: "sm",
            onClick: () => {
                if (e) {
                    (0, y.pr)(), t(!1);
                    return;
                }
                (0, y.AU)(
                    W.intl.string(W.t.PKaNJL),
                    !0,
                    void 0,
                    () => t(!0),
                    () => t(!1),
                ),
                    t(!0);
            },
        })
    );
}
function e_() {
    return u.$j
        ? (0, i.jsx)(v.x, {
              setting: B.H.ACCESSIBILITY_TEXT_TO_SPEECH,
              children: (0, i.jsx)(d.nVY, {
                  label: W.intl.string(W.t.VpSKeO),
                  children: (0, i.jsx)(v.x, {
                      setting: B.H.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                      children: (0, i.jsx)(em, {}),
                  }),
              }),
          })
        : null;
}
