n.d(t, { D: () => vK });
var i,
    s,
    l,
    r,
    a,
    o,
    u,
    d,
    c,
    g,
    m,
    A,
    E = n(419954),
    h = n(780964),
    x = n(550640),
    S = n(107384),
    p = n(477900),
    T = n(582128),
    f = n(17928),
    I = n(652215),
    _ = n(346055),
    N = n(297264),
    C = n(364522),
    y = n(97808),
    b = n(778712),
    v = n(821609),
    j = n(775602),
    O = n(320095),
    L = n(963852),
    R = n(763754),
    D = n(20851),
    P = n(95701),
    G = n(486020),
    M = n(885386),
    U = n(105292),
    V = n(345016);
let k = new P.nA({ id: "1337", guild_id: "1337", type: I.rbe.GUILD_TEXT, name: "preview" }),
    w = [
        { status: I.clD.IDLE, discriminator: "2" },
        { status: I.clD.DND, discriminator: "3" },
        { status: I.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, O.rh)({ ...(0, L.Ay)({ channelId: k.id, content: e }), state: I.cmJ.SENT, reactions: t });
}
var B = n(856488);
let z = (0, E.zD)(h.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => U.intl.string(U.t.TZ2hZH),
        useSubtitle: () => U.intl.string(U.t.Q7wgHc),
        useValue: () => M.D_.useSetting(),
        setValue: (e) => M.D_.updateSetting(e),
    }),
    Y = (0, E.zD)(h.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => U.intl.string(U.t.XYvMIX),
        useSubtitle: () => U.intl.string(U.t.T0rbtM),
        useValue: M._z.useSetting,
        setValue: M._z.updateSetting,
    });
var X = n(100767),
    H = n(435558),
    W = n.n(H),
    K = n(935399),
    Z = n(331322),
    q = n(299163),
    Q = n(834730),
    $ = n(113494),
    J = n(782134),
    ee = n(54570),
    et = n(8880),
    en = n(75804);
let ei = W().debounce((e) => {
    (0, ee.zU)(e);
}, 250);
function es() {
    let [e, t] = T.useState(!1);
    return (
        (0, K.l0)(() => (0, ee.pr)()),
        (0, p.jsx)(v.$, {
            text: U.intl.string(U.t.SKNnqq),
            icon: e ? $.PauseIcon : J.PlayIcon,
            size: "sm",
            onClick: function () {
                if (e) {
                    ((0, ee.pr)(), t(!1));
                    return;
                }
                ((0, ee.AU)(
                    U.intl.string(U.t.PKaNJL),
                    !0,
                    void 0,
                    function () {
                        return t(!0);
                    },
                    function () {
                        return t(!1);
                    },
                ),
                    t(!0));
            },
        })
    );
}
let el = (0, E.E2)(h.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [U.intl.string(U.t.lsW5Ev)],
        Component: function () {
            let e = (0, f.bG)([et.A], () => et.A.speechRate);
            return (0, p.jsxs)(Z.B, {
                gap: 16,
                children: [
                    (0, p.jsx)(q.A, {
                        label: U.intl.string(U.t.lsW5Ev),
                        description: U.intl.string(U.t.Ci4wMS),
                        markers: en.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: ei,
                        onValueRender: (e) => `x${e.toFixed(2)}`,
                        onMarkerRender: (e) =>
                            0 === e
                                ? (0, p.jsx)(Q.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: U.intl.string(U.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, p.jsx)(Q.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: U.intl.string(U.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, p.jsx)(Q.E, {
                                          variant: "text-xs/medium",
                                          color: "text-feedback-positive",
                                          children: "x1.0",
                                      })
                                    : e % 1 == 0
                                      ? ""
                                      : void 0,
                    }),
                    (0, p.jsx)(es, {}),
                ],
            });
        },
        usePredicate: () => X.$j,
    }),
    er = (0, E.zZ)(h.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => U.intl.string(U.t.XVR0Rb),
        buildLayout: () => [el, Y, z],
    }),
    ea = (0, E.AK)(h.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.aTfeGK),
        destinationKey: h.X.APPEARANCE_PANEL,
    }),
    eo = (0, E.gN)(h.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [ea] });
var eu = n(955572);
let ed = (0, E.zD)(h.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => U.intl.string(U.t.OCJg5f),
    useSubtitle: () => U.intl.string(U.t.HEO0s3),
    useValue: () => (0, f.bG)([j.Ay], () => j.Ay.desaturateUserColors),
    setValue: () => (0, eu.YV)(),
});
var ec = n(652525);
let eg = (0, E.zD)(h.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => U.intl.string(U.t["+Isihb"]),
        useSubtitle: () => U.intl.string(U.t.nNZ1Tz),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.enableCustomCursor),
        setValue: (e) => (0, eu.ts)(e),
        usePredicate: () => (0, ec.t)("EnableCustomCursorSetting"),
    }),
    em = (0, E.zD)(h.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => U.intl.string(U.t["S3z+pV"]),
        useSubtitle: () => U.intl.string(U.t["3QuI9+"]),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isSwitchIconsEnabled),
        setValue: (e) => (0, eu.Gm)(e),
        hasIcon: !0,
    });
var eA = n(554146);
let eE = (0, E.zD)(h.X.HIGH_CONTRAST_MODE, {
    useTitle: () => U.intl.string(U.t.aZlePv),
    useSubtitle: () => U.intl.string(U.t["v2qF8+"]),
    useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isHighContrastModeEnabled),
    setValue: (e) => (0, eu.uh)(e ? j._1.HIGH : j._1.DEFAULT),
    getDismissibleBadges: () => [
        { badgeType: S.Xi.NEW, dismissibleContent: eA.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
    ],
});
var eh = n(406360),
    ex = n(964404);
let eS = (0, E.Qx)(h.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => U.intl.string(U.t.nemtgW),
        useSubtitle: () => U.intl.string(U.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: S.Xi.BETA }),
        useOptions: function () {
            return T.useMemo(
                () => [
                    { name: U.intl.string(U.t.D5Fma9), desc: U.intl.string(U.t.Qj75ck), value: "no-limit" },
                    { name: U.intl.string(U.t.ldcGIH), desc: U.intl.string(U.t["+V/bDk"]), value: "standard" },
                ],
                [],
            );
        },
        usePredicate: function () {
            return (0, eh.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, eu.FU)(e);
        },
        useValue: function () {
            return (0, f.bG)([ex.Ay], () => ex.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", U.intl.string(U.t["O/Gjvn"])],
    }),
    ep = (0, E.Hn)(h.X.OFFICIAL_MESSAGE_STYLE, {
        useTitle: () => U.intl.string(U.t.nC2XBl),
        useSubtitle: () => U.intl.string(U.t.a3IPrX),
        useOptions: () => [
            { id: "default", label: U.intl.string(U.t.ERaS6f), value: "default" },
            { id: "no_text_color", label: U.intl.string(U.t.JKfipk), value: "no_text_color" },
            { id: "no_gradient", label: U.intl.string(U.t.O2vBoY), value: "no_gradient" },
            { id: "hidden", label: U.intl.string(U.t["+loyQl"]), value: "hidden" },
        ],
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.officialMessageStyle),
        setValue: (e) => (0, eu.w_)(e),
    }),
    eT = (0, E.Hn)(h.X.ROLE_STYLE, {
        useTitle: () => U.intl.string(U.t.uSOPWm),
        useSubtitle: () => U.intl.string(U.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: U.intl.string(U.t.eDdMzJ), value: "username" },
            { id: "dot", label: U.intl.string(U.t.rdmJp0), value: "dot" },
            { id: "hidden", label: U.intl.string(U.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.roleStyle),
        setValue: (e) => (0, eu.IX)(e),
    });
(0, E.Qx)(h.X.ROLE_STYLE, {
    useTitle: () => U.intl.string(U.t.uSOPWm),
    useSubtitle: () => U.intl.string(U.t["86hjzQ"]),
    useOptions: () => [
        { name: U.intl.string(U.t.YEOEi6), value: "username" },
        { name: U.intl.string(U.t.mQaro3), value: "dot" },
        { name: U.intl.string(U.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, f.bG)([j.Ay], () => j.Ay.roleStyle),
    setValue: (e) => (0, eu.IX)(e),
});
let ef = (0, E.sN)(h.X.SATURATION, {
    useTitle: () => U.intl.string(U.t["5PWWCY"]),
    useSubtitle: () => U.intl.string(U.t.xf5S6P),
    markers: I.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => j.Ay.saturation,
    asValueChanges: (e) => (0, eu.HU)(e),
});
var eI = n(964486),
    e_ = n(839214),
    eN = n(502229),
    eC = n(975571);
let ey = (0, e_.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    eb = (0, E.zD)(h.X.SYNC_FORCED_COLORS, {
        useTitle: () => U.intl.string(U.t.cguiec),
        useSubtitle: () => U.intl.format(U.t.GwEVE2, { learnMoreLink: eC.A.getArticleURL(I.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, f.bG)([j.Ay], () => j.Ay.syncForcedColors);
            return (
                (0, eI.Ay)(() => {
                    ey.setState({ syncEnabled: j.Ay.syncForcedColors });
                }),
                ey.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = ey.getState();
            if (null != t) {
                (clearTimeout(t), ey.setState({ syncEnabled: e, updateTimeout: null }));
                return;
            }
            if (e === j.Ay.syncForcedColors) return void ey.setState({ syncEnabled: e });
            let n = setTimeout(() => {
                ((0, eu.D3)(e), ey.setState({ updateTimeout: null }));
            }, 150);
            ey.setState({ syncEnabled: e, updateTimeout: n });
        },
        usePredicate: () => (0, eN.D)(),
    }),
    ev = (0, E.zZ)(h.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => U.intl.string(U.t.JqvyiY),
        buildLayout: () => [ef, ed, eE, eg, eb, eS, eT, ep, em, eo],
    });
var ej = n(397438),
    eO = n(355097),
    eL = n(964549);
function eR(e) {
    return (0, f.bG)([ej.A], () =>
        (function (e) {
            switch (e) {
                case eO._A.REDUCED_MOTION:
                    return U.intl.format(U.t["1dT9V4"], {});
                case eO._A.REDUCED_MOTION_STICKERS:
                    return U.intl.string(U.t["2ExvRu"]);
                case eO._A.GAME_MODE:
                    return U.intl.string(eL.default.VGcdxP);
                default:
                    return;
            }
        })(ej.A.getAppliedOverrideReasonKey(e)),
    );
}
function eD(e) {
    return (0, f.bG)([ej.A], () => ej.A.getAppliedOverrideReasonKey(e) === eO._A.GAME_MODE);
}
let eP = (0, E.zD)(h.X.ANIMATE_EMOJIS, {
        useTitle: () => U.intl.string(U.t.iIaOlc),
        useSubtitle: () => eR("animateEmoji"),
        useDisabled: () => eD("animateEmoji"),
        useValue: () => M.Sf.useSetting(),
        setValue: (e) => M.Sf.updateSetting(e),
    }),
    eG = (0, E.zD)(h.X.ANIMATE_GIFS, {
        useTitle: () => U.intl.string(U.t.wqsK7q),
        useSubtitle: () => eR("gifAutoPlay"),
        useDisabled: () => eD("gifAutoPlay"),
        useValue: () => M.kt.useSetting(),
        setValue: (e) => M.kt.updateSetting(e),
    });
var eM = n(823894);
let eU = (0, E.Qx)(h.X.ANIMATE_STICKERS, {
        useTitle: () => U.intl.string(U.t.sBHIh0),
        useSubtitle: () => eR("animateStickers"),
        useDisabled: () => eD("animateStickers"),
        useOptions: () => [
            { name: U.intl.string(U.t["Xp+X2U"]), value: eM.BJ.ALWAYS_ANIMATE },
            { name: U.intl.string(U.t.IlLT7e), desc: U.intl.string(U.t.bIW9Tl), value: eM.BJ.ANIMATE_ON_INTERACTION },
            { name: U.intl.string(U.t.IGu8x3), value: eM.BJ.NEVER_ANIMATE },
        ],
        useValue: () => M.S0.useSetting(),
        setValue: (e) => M.S0.updateSetting(e),
    }),
    eV = (0, E.zD)(h.X.REDUCED_MOTION, {
        useTitle: () => U.intl.string(U.t.b3XBzg),
        useSubtitle: () => U.intl.format(U.t.XqvxJc, { helpdeskArticle: eC.A.getArticleURL(I.MVz.REDUCED_MOTION) }),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.prefersReducedMotion),
        setValue: (e) => (0, eu.qz)(e ? "reduce" : "no-preference"),
    }),
    ek = (0, E.zD)(h.X.SYNC_REDUCED_MOTION, {
        useTitle: () => U.intl.string(U.t.oL55A6),
        useValue: () => (0, f.bG)([j.Ay], () => "auto" === j.Ay.rawPrefersReducedMotion),
        setValue: (e) => (0, eu.qz)(e ? "auto" : j.Ay.systemPrefersReducedMotion),
    });
function ew(e) {
    return U.intl.formatToPlainString(U.t.pyvjRp, { seconds: e });
}
let eF = (0, E.sN)(h.X.TOAST_DURATION, {
        useTitle: () => U.intl.string(U.t["3oxlia"]),
        useSubtitle: () => U.intl.string(U.t.CZ3jxp),
        markers: I.hH7.TOAST_DURATION_SECOND_INCREMENTS,
        onMarkerRender: (e) =>
            e % 5 == 0 || e === I.hH7.TOAST_DURATION_MIN_SECONDS || e === I.hH7.TOAST_DURATION_MAX_SECONDS
                ? ew(e)
                : void 0,
        onValueRender: ew,
        stickToMarkers: !0,
        minValue: I.hH7.TOAST_DURATION_MIN_SECONDS,
        maxValue: I.hH7.TOAST_DURATION_MAX_SECONDS,
        useDefaultValue: () => I.hH7.TOAST_DURATION_DEFAULT_MS / 1e3,
        getInitialValue: () => j.Ay.minToastDurationMs / 1e3,
        asValueChanges: (e) => (0, eu.E7)(1e3 * e),
    }),
    eB = (0, E.zZ)(h.X.MOTION_CATEGORY, {
        useTitle: () => U.intl.string(U.t.e3TR1b),
        buildLayout: () => [eV, ek, eF, eG, eP, eU],
    });
var ez = n(688810),
    eY = n(259065),
    eX = n(763052);
let eH = (0, E.zD)(h.X.DISPLAY_NAME_STYLES, {
    useTitle: () => U.intl.string(eX.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, ez.Ay)();
        return U.intl.format(eX.default.aEax6P, {
            onClickOpenModal() {
                (0, eY.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, f.bG)([j.Ay], () => j.Ay.displayNameStylesEnabled),
    setValue: (e) => (0, eu.Dm)(e),
});
function eW(e) {
    return `${e.toFixed(0)}px`;
}
let eK = (0, E.sN)(h.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => U.intl.string(U.t.rT3Pq5),
        useSubtitle: () => U.intl.string(U.t.LXUhen),
        markers: I.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: I.hH7.FONT_SIZES["0"],
        maxValue: I.hH7.FONT_SIZES[I.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => I.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => j.Ay.fontSize,
        onValueRender: eW,
        onMarkerRender: eW,
        asValueChanges: (e) => (0, eu.XS)(e),
    }),
    eZ = (0, E.zD)(h.X.UNDERLINE_LINKS, {
        useTitle: () => U.intl.string(U.t.OLZFB8),
        useSubtitle: () => U.intl.string(U.t.DIX3ke),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.alwaysShowLinkDecorations),
        setValue: (e) => (0, eu.kI)(e),
    }),
    eq = (0, E.zZ)(h.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => U.intl.string(U.t["bxh/R7"]),
        buildLayout: () => [eK, eZ, eH],
    });
var eQ = n(873298);
let e$ = (0, E.Qx)(h.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => U.intl.string(U.t["C/5V0A"]),
        useSubtitle: () => U.intl.string(U.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: U.intl.string(U.t["7iegX4"]), value: eQ.NS.COMPACT },
            { name: U.intl.string(U.t.bBvAEH), value: eQ.NS.DEFAULT },
            { name: U.intl.string(U.t["4cuYHx"]), value: eQ.NS.COZY },
        ],
        useValue: () => M.Xi.useSetting(),
        setValue: (e) => {
            e !== eQ.NS.UNSET_UI_DENSITY && M.Xi.updateSetting(e);
        },
    }),
    eJ = "cozy",
    e0 = "compact",
    e1 = (0, E.Qx)(h.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => U.intl.string(U.t.nKRoPv),
        useSubtitle: () => U.intl.string(U.t.QntEEG),
        useSearchTerms: () => [U.intl.string(U.t.ZEoGMd)],
        useOptions: () => [
            { name: U.intl.string(U.t.Jqj4cZ), value: eJ },
            { name: U.intl.string(U.t["1JNcPS"]), value: e0 },
        ],
        useValue: () => (M.hH.useSetting() ? e0 : eJ),
        setValue: (e) => {
            (M.hH.updateSetting(e === e0), (0, eu.AC)());
        },
    });
var e2 = n(381941);
function e3(e) {
    return `${e.toFixed(0)}px`;
}
let e5 = (0, E.sN)(h.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => U.intl.string(U.t.Q6lKkg),
    useSubtitle: () => U.intl.string(U.t.p7eUrb),
    markers: e2.qh,
    stickToMarkers: !0,
    minValue: e2.qh["0"],
    maxValue: e2.qh[e2.qh.length - 1],
    useDefaultValue: () => (M.hH.useSetting() ? e2.y5 : e2.ES),
    useExternalValue: () => (0, f.bG)([j.Ay], () => j.Ay.messageGroupSpacing),
    getInitialValue: () => j.Ay.messageGroupSpacing,
    onValueRender: e3,
    onMarkerRender: e3,
    asValueChanges: (e) => {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, eu.AC)(e);
        }
    },
});
var e4 = n(775121),
    e6 = n(723702);
let e8 = (0, E.sN)(h.X.APPEARANCE_ZOOM, {
        usePredicate: () => e6.isPlatformEmbedded,
        useTitle: () => U.intl.string(U.t.i19n5L),
        useSubtitle: () => U.intl.format(U.t["x9PK/3"], { modKey: e4.A.modKey }),
        markers: I.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: I.hH7.ZOOM_SCALES["0"],
        maxValue: I.hH7.ZOOM_SCALES[I.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => I.hH7.ZOOM_DEFAULT,
        getInitialValue: () => j.Ay.zoom,
        useExternalValue: () => (0, f.bG)([j.Ay], () => j.Ay.zoom),
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        setValue: (e) => (0, eu.Qp)(e),
        useSearchTerms: () => [U.intl.string(U.t.ip0uSf)],
    }),
    e7 = (0, E.zZ)(h.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.VKYWk8),
        buildLayout: () => [e$, e1, e5, e8],
    }),
    e9 = (0, E.t_)(h.X.ACCESSIBILITY_PANEL, {
        useTitle: () => U.intl.string(U.t.G0neg7),
        buildLayout: () => [eq, e7, ev, eB, er],
        decoration: {
            type: S.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = M.hH.useSetting(),
                    t = M.jW.useSetting(),
                    n = T.useMemo(
                        () => [
                            F(
                                U.intl.formatToPlainString(U.t.BknJRT, {}),
                                t
                                    ? [
                                          {
                                              emoji: { id: null, name: "\uD83E\uDD40", animated: !1 },
                                              me: !0,
                                              count: 3,
                                              me_burst: !1,
                                              burst_count: 0,
                                          },
                                          {
                                              emoji: { id: null, name: "\uD83E\uDEA4", animated: !1 },
                                              me: !1,
                                              count: 1,
                                              me_burst: !1,
                                              burst_count: 0,
                                          },
                                      ]
                                    : [],
                            ),
                            F(U.intl.formatToPlainString(U.t["4rDfgM"], { link: "https://discord.com/accessibility" })),
                        ],
                        [t],
                    ),
                    i = (0, f.bG)([j.Ay], () => j.Ay.messageGroupSpacing);
                return (0, p.jsx)(_.M, {
                    children: (0, p.jsxs)("section", {
                        "aria-label": U.intl.string(U.t.RC22qg),
                        children: [
                            (0, p.jsx)(N.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: V.Vf,
                                children: U.intl.string(U.t.RC22qg),
                            }),
                            (0, p.jsxs)(C.Ip, {
                                className: V.VH,
                                children: [
                                    (0, p.jsx)("ol", {
                                        className: V.DZ,
                                        style: { gap: i },
                                        "aria-label": U.intl.string(U.t.xfjsEV),
                                        children: n.map((t) =>
                                            (0, p.jsx)(
                                                "li",
                                                {
                                                    children: (0, p.jsx)(D.A, {
                                                        message: t,
                                                        channel: k,
                                                        compact: e,
                                                        author: { ...(0, R.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, p.jsxs)("div", {
                                        className: V.Jb,
                                        children: [
                                            (0, p.jsx)("div", {
                                                className: V.HD,
                                                children: w.map((e) => {
                                                    let { status: t, discriminator: n, mobile: i = !1 } = e;
                                                    return (0, p.jsx)(
                                                        y.eu,
                                                        {
                                                            status: t,
                                                            isMobile: i,
                                                            size: b._3.SIZE_32,
                                                            src: G.Ay.getDefaultAvatarURL(void 0, n),
                                                            "aria-label": U.intl.string(U.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, p.jsx)(v.$, {
                                                text: U.intl.string(U.t["2RHHgz"]),
                                                size: "sm",
                                                variant: "primary",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            },
            sticky: !0,
        },
    }),
    te = (0, E.i4)(h.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.G0neg7),
        icon: x.c,
        useMenu: B.A,
        buildLayout: () => [e9],
    });
n(321073);
var tt = n(650809),
    tn = n(477782),
    ti = n(636537),
    ts = n(73153),
    tl = n(74396),
    tr = n(93055),
    ta = n(269880),
    to = n(55619),
    tu = n(351906),
    td = n(174459),
    tc = n(812993),
    tg = n(189081);
let tm = (0, E.zD)(h.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, f.bG)([tg.A], () => tg.A.hasLibraryApplication()),
        useTitle: () => U.intl.string(U.t.fi3UQN),
        useSubtitle: () => U.intl.string(U.t["8mYp37"]),
        useValue: () => !M.l_.useSetting(),
        setValue: (e) => M.l_.updateSetting(!e),
    }),
    tA = (0, E.zZ)(h.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => U.intl.string(U.t["8/udY0"]),
        buildLayout: () => [tm],
    });
var tE = n(284009),
    th = n.n(tE),
    tx = n(199966),
    tS = n(963935);
function tp(e) {
    let { title: t } = e;
    return t;
}
function tT(e) {
    let { useTitle: t, settingKey: n, formatter: i, index: s } = e,
        l = t();
    return "string" == typeof l ? i({ title: l, index: s, key: n }) : l;
}
function tf(e) {
    let { setting: t, formatter: n, index: i } = e;
    return () => (0, p.jsx)(tT, { useTitle: t.useTitle, settingKey: t.key, formatter: n, index: i }, t.key);
}
function tI(e) {
    return e.type === tS.Z6.LIST;
}
function t_(e, t) {
    let { limit: n = 2, formatter: i = tp } = t ?? {};
    th()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, tx._)(),
        r = s.get(e) ?? l.get(e);
    th()(
        null != r && (r.type === tS.Z6.ACCORDION || tI(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = tI(r) ? (r.collapseAfter ?? 0) : 0,
        o = r.layout;
    return T.useMemo(() => {
        let e = a,
            t = [];
        for (let n of o)
            if ("useTitle" in n && null != n.useTitle) {
                if (e > 0) {
                    e--;
                    continue;
                }
                t.push({ key: n.key, useTitle: n.useTitle });
            }
        if (0 === t.length) return "";
        let s = Math.min(n, 3);
        if (t.length <= s)
            if (1 === t.length)
                return U.intl.format(U.t["3H9tCW"], { settingOneHook: tf({ setting: t[0], formatter: i, index: 0 }) });
            else if (2 === t.length)
                return U.intl.format(U.t.MWryo6, {
                    settingOneHook: tf({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tf({ setting: t[1], formatter: i, index: 1 }),
                });
            else
                return U.intl.format(U.t.a00b5G, {
                    settingOneHook: tf({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tf({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tf({ setting: t[2], formatter: i, index: 2 }),
                });
        return 1 === s
            ? U.intl.format(U.t.O8vNbS, { settingOneHook: tf({ setting: t[0], formatter: i, index: 0 }) })
            : 2 === s
              ? U.intl.format(U.t["acXG/W"], {
                    settingOneHook: tf({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tf({ setting: t[1], formatter: i, index: 1 }),
                })
              : U.intl.format(U.t["5+ldWc"], {
                    settingOneHook: tf({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tf({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tf({ setting: t[2], formatter: i, index: 2 }),
                });
    }, [n, a, o, i]);
}
var tN = n(951260);
let tC = (0, E.zD)(h.X.ENABLE_APPS_BUTTON, {
        useTitle: () => U.intl.string(U.t.ZTH4j4),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, eu.n8)({ appsButtonEnabled: e }),
    }),
    ty = {
        useTitle: () => U.intl.string(U.t["I/5LyL"]),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isSubmitButtonEnabled),
        setValue: () => (0, eu.Xt)(),
    },
    tb = (0, E.zD)(h.X.ENABLE_SEND_BUTTON, ty),
    tv = (0, E.zD)(h.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...ty,
        usePredicate: () => !(0, tN.n)("EnableSendButtonOutsideExperiment"),
    }),
    tj = (0, E.zD)(h.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => U.intl.string(U.t.WggFoO),
        useSubtitle: () => U.intl.string(U.t.XpErGj),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, eu.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, f.bG)([j.Ay], () => j.Ay.expressionPickerFormat === j.IG.FLEXIBLE),
    }),
    tO = (0, E.zD)(h.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => U.intl.string(U.t.YErWkD),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, eu.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, f.bG)([j.Ay], () => j.Ay.expressionPickerFormat === j.IG.FLEXIBLE),
    }),
    tL = (0, E.zD)(h.X.ENABLE_GIF_BUTTON, {
        useTitle: () => U.intl.string(U.t.k7oNEz),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isGifButtonEnabled),
        setValue: (e) => (0, eu.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, f.bG)([j.Ay], () => j.Ay.expressionPickerFormat === j.IG.FLEXIBLE),
    }),
    tR = (0, E.zD)(h.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => U.intl.string(U.t.Ar0krj),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, eu.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, f.bG)([j.Ay], () => j.Ay.expressionPickerFormat === j.IG.FLEXIBLE),
    }),
    tD = (0, E.Qx)(h.X.EXPRESSION_PICKER_FORMAT, {
        useTitle: () => U.intl.string(U.t.AxRAWt),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.expressionPickerFormat),
        setValue: (e) => (0, eu.n8)({ expressionPickerFormat: e }),
        useOptions: function () {
            return [
                { name: U.intl.string(U.t.k86Soy), desc: U.intl.string(U.t.bSGTTZ), value: j.IG.FLEXIBLE },
                { name: U.intl.string(U.t.bjwSOn), desc: U.intl.string(U.t.We36HX), value: j.IG.CONDENSED },
                { name: U.intl.string(U.t.FDIKss), desc: U.intl.string(U.t["rclZL/"]), value: j.IG.HIDDEN },
            ];
        },
    }),
    tP = (0, E.FW)(h.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => U.intl.string(U.t["V9/cNN"]),
        buildLayout: () => [tD, tj, tO, tL, tR],
    }),
    tG = (0, E.bd)(h.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? U.intl.string(U.t.IwVGQs) : U.intl.string(U.t.cFNDh5);
        },
        useCollapsedSubtitle: () => t_(h.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, tN.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [tb, tC, tP],
    });
var tM = n(565645);
let tU = (0, E.zD)(h.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => U.intl.string(U.t["79qal8"]),
        useSubtitle: () =>
            U.intl.format(U.t.GejoQK, { emojiHook: (e, t) => (0, p.jsx)(tM.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: M.j7.useSetting,
        setValue: M.j7.updateSetting,
    }),
    tV = (0, E.zD)(h.X.CHAT_GAME_MENTIONS_AUTOCOMPLETE, {
        useTitle: () => U.intl.string(U.t.c0oFDw),
        useValue: M.BQ.useSetting,
        setValue: M.BQ.updateSetting,
    }),
    tk = (0, E.zD)(h.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => U.intl.string(U.t.AqGrEI),
        useValue: M.SI.useSetting,
        setValue: (e) => {
            (td.default.track(I.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: I.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                M.SI.updateSetting(e));
        },
    });
var tw = n(793574);
let tF = (0, E.zD)(h.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => U.intl.string(U.t["d+It2U"]),
        useValue: M.ML.useSetting,
        setValue: (e) => {
            (td.default.track(I.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: I.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [tw.A.TEXT_AND_IMAGES],
            }),
                M.ML.updateSetting(e));
        },
    }),
    tB = (0, E.zZ)(h.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => U.intl.string(U.t.Ob7VMB),
        useSearchTerms: () => [U.intl.string(U.t.onqU6o)],
        buildLayout: () => [tk, tU, tF, tV, tv, tG],
    });
var tz = n(526162),
    tY = n(793943),
    tX = n(792656),
    tH = n(830543),
    tW = n(785007),
    tK = n(806932),
    tZ = n(915089),
    tq = n(10392),
    tQ = n(82498),
    t$ = n(174197),
    tJ = n(202541);
let t0 = (0, E.E2)(h.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [U.intl.string(U.t.gnwxvT)],
    Component: function () {
        let e = (0, tZ.GV)(),
            { ref: t, ...n } = (0, tW._u)({ orientation: "horizontal", labelledBy: e }),
            i = (0, f.bG)([tz.A], () => tz.A.isUpsellPreview);
        return (
            (0, K.Ay)(() => {
                i &&
                    (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: tJ.e.APP_ICON_UPSELL,
                        location_stack: [tw.A.USER_SETTINGS],
                    }),
                    (0, tq.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, [tw.A.USER_SETTINGS], () =>
                        (0, tQ.uq)(tJ.e.APP_ICON_UPSELL),
                    ));
            }),
            (0, p.jsx)("div", {
                ...n,
                ref: t,
                children: (0, p.jsx)(Z.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, p.jsx)(tK.m, { disabled: i, size: t$.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function t1() {
    ((0, tY.nf)(tY.HP.APP_ICON), (0, tH.default)());
}
function t2() {
    return (0, p.jsx)(tX.A, {
        subscriptionTier: tJ.pe.TIER_2,
        defaultTextOverride: U.intl.string(U.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let t3 = (0, E.zZ)(h.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => U.intl.string(U.t.RPh2ou),
        useSubtitle: () => U.intl.string(U.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, f.bG)([tz.A], () => tz.A.isUpsellPreview);
            return T.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: S.UV.BUTTON,
                        text: U.intl.string(U.t["6acvnZ"]),
                        onClick: t1,
                    }),
                    e && t.push({ id: "upsell-button", type: S.UV.STRONGLY_DISCOURAGED_CUSTOM, button: t2 }),
                    { type: S.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [t0],
    }),
    t5 = (0, E.AK)(h.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.UDr3Iy),
        useSearchTerms: () => [U.intl.string(U.t.UDr3Iy)],
        destinationKey: h.X.ACCESSIBILITY_PANEL,
    }),
    t4 = (0, E.gN)(h.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [t5] });
var t6 = n(452027),
    t8 = n(193249),
    t7 = n(976860),
    t9 = n(16236),
    ne = n(635233),
    nt = n(749884),
    nn = n(384539);
let ni = eC.A.getArticleURL(I.MVz.FAVORITES_GUILD);
function ns() {
    let { analyticsLocations: e } = (0, ez.Ay)(tw.A.USER_SETTINGS_FAVORITES),
        t = T.useCallback(() => {
            ((0, ne.mv)("settings_page"), (0, t7.uh)(I.YYv), (0, tH.default)());
        }, []);
    return (0, p.jsx)(ez.f5, {
        value: e,
        children: (0, p.jsx)(t6.D, {
            label: U.intl.string(nn.default.OT1NK5),
            description: U.intl.format(nn.default.GR2KOG, { helpCenterLink: ni }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, p.jsxs)(Z.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, p.jsx)(v.$, { variant: "secondary", text: U.intl.string(nn.default["7WwLnr"]), onClick: t }),
                    (0, p.jsx)(tX.A, {
                        subscriptionTier: tJ.pe.TIER_2,
                        defaultTextOverride: U.intl.string(nn.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let nl = (0, E.E2)(h.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, tr.TW)("FavoritesGuildToggle").isExperimentEnabled,
        useSearchTerms: () => [U.intl.string(nn.default.OT1NK5)],
        Component: function () {
            let { hasAccess: e } = (0, tr.TW)("FavoritesGuildVisibilitySetting"),
                t = (0, nt.A)(!1);
            return e
                ? (0, p.jsx)(t8.d, {
                      checked: t,
                      description: U.intl.format(nn.default.GR2KOG, { helpCenterLink: ni }),
                      onChange: t9.kG,
                      label: U.intl.string(nn.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, p.jsx)(ns, {});
        },
    }),
    nr = (0, E.zD)(h.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => U.intl.string(U.t.U47N1p),
        useValue: M.hD.useSetting,
        setValue: M.hD.updateSetting,
    }),
    na = (0, E.zD)(h.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => U.intl.string(U.t.VP11No),
        useValue: M.X6.useSetting,
        setValue: M.X6.updateSetting,
    }),
    no = (0, E.FW)(h.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => U.intl.string(U.t["9nyle0"]),
        buildLayout: () => [nr, na],
    }),
    nu = (0, E.zD)(h.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => U.intl.string(U.t["5bK9vw"]),
        useValue: M.rs.useSetting,
        setValue: M.rs.updateSetting,
    }),
    nd = (0, E.zD)(h.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => U.intl.string(U.t["zge/fP"]),
        useValue: M.jW.useSetting,
        setValue: M.jW.updateSetting,
    });
var nc = n(28863),
    ng = n(766075);
let nm = (0, E.zD)(h.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => U.intl.string(U.t.JgjNG3),
        useSubtitle: () => {
            if (!M.hH.useSetting())
                return U.intl.format(U.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, p.jsx)(
                            nc.Anchor,
                            {
                                onClick: () => (0, ng.openUserSettings)(h.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !M.hH.useSetting(),
        useValue: () => {
            let e = M.aM.useSetting();
            return !M.hH.useSetting() || e;
        },
        setValue: (e) => {
            M.aM.updateSetting(e);
        },
    }),
    nA = (0, E.Hn)(h.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => U.intl.string(U.t.QgwmVz),
        useOptions: () => [
            { value: I.P6Q.ON_CLICK, id: I.P6Q.ON_CLICK, label: U.intl.string(U.t["KFH/me"]) },
            { value: I.P6Q.ALWAYS, id: I.P6Q.ALWAYS, label: U.intl.string(U.t.Pe1RbL) },
            { value: I.P6Q.IF_MODERATOR, id: I.P6Q.IF_MODERATOR, label: U.intl.string(U.t.K5VTBE) },
        ],
        useValue: M.gs.useSetting,
        setValue: M.gs.updateSetting,
    }),
    nE = (0, E.zD)(h.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => U.intl.string(U.t.AInv5m),
        useValue: M.SY.useSetting,
        setValue: M.SY.updateSetting,
    }),
    nh = (0, E.zZ)(h.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.OIgYlQ),
        useSearchTerms: () => [U.intl.string(U.t["/VQax8"])],
        buildLayout: () => [no, nu, nd, nA, nE, nm, nl, t4],
    });
var nx = n(753806),
    nS = n(145331);
let np = (0, E.Qx)(h.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
        useTitle: () => U.intl.string(U.t.VkoLsy),
        useSearchTerms: () => [U.intl.string(U.t["t4+fbe"])],
        useOptions: function () {
            return [
                { name: U.intl.string(U.t.E9JM4J), value: 0 },
                { name: U.intl.string(U.t["Kr+lPi"]), value: 1 },
            ];
        },
        useValue: () => +!!M.Hu.useSetting(),
        setValue: (e) => {
            let t = 1 === e;
            (t ? nx.A.cleanUpPrivateChannelSearchState() : nx.A.cleanUpSearchState({ type: I.I4_.DMS }),
                (0, nS._k)({
                    prevIsCrossDMSettingEnabled: M.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: nS.vy.USER_SETTINGS,
                }),
                M.Hu.updateSetting(t));
        },
    }),
    nT = (0, E.zZ)(h.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => U.intl.string(U.t["5h0QOP"]),
        buildLayout: () => [np],
    });
var nf = n(574381);
let nI = (0, E.zD)(h.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => U.intl.string(U.t.IxjaoF),
        useValue: function () {
            return (0, f.bG)([tu.A], () => {
                let { autoToggle: e } = tu.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            to.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return nf.Av;
        },
    }),
    n_ = (0, E.zD)(h.X.STREAMING_STREAMER_MODE, {
        useTitle: () => U.intl.string(U.t.TGNg6T),
        useSubtitle: () => U.intl.string(U.t["4nXLnE"]),
        useValue: function () {
            return (0, f.bG)([tu.A], () => {
                let { enabled: e } = tu.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            to.A.update({ enabled: e });
        },
    });
var nN = n(77729),
    nC = n(589051),
    ny = n(85395),
    nb = n(999834);
let nv = [],
    nj = (0, E.Hn)(h.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => U.intl.string(U.t.VCDSLW),
        useSearchTerms: () => [U.intl.string(U.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, nb.b_)(),
                t = (0, nC.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return T.useMemo(() => {
                let e = [];
                for (let [t, n] of Object.entries(ny.A))
                    !0 === n.hideableInStreamerMode &&
                        null != n.label &&
                        (null == n.predicate || n.predicate()) &&
                        e.push({ id: t, value: t, label: n.label() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, f.bG)([tu.A], () => tu.A.getSettings().disabledOverlayWidgets ?? nv);
        },
        setValue: (e) => to.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    nO = (0, E.zD)(h.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => U.intl.string(U.t.LSBUGR),
        useValue: () =>
            (0, f.bG)([tu.A], () => {
                let { hidePersonalInformation: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ hidePersonalInformation: e }),
    }),
    nL = (0, E.zD)(h.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => U.intl.string(U.t.uWBOri),
        useValue: () =>
            (0, f.bG)([tu.A], () => {
                let { hideInstantInvites: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ hideInstantInvites: e }),
    }),
    nR = (0, E.zD)(h.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => U.intl.string(U.t.OrqYDP),
        useValue: () =>
            (0, f.bG)([tu.A], () => {
                let { disableSounds: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ disableSounds: e }),
    }),
    nD = (0, E.zD)(h.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.sUAbLd),
        useValue: () =>
            (0, f.bG)([tu.A], () => {
                let { disableNotifications: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ disableNotifications: e }),
    }),
    nP = (0, E.zD)(h.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => U.intl.string(U.t["iA81+a"]),
        useSubtitle: () => U.intl.string(U.t.P4vj0h),
        useValue: () =>
            (0, f.bG)([tu.A], () => {
                let { enableContentProtection: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ enableContentProtection: e }),
        usePredicate: () => nN.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    nG = (0, E.FW)(h.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.xYhOEh),
        buildLayout: () => [nO, nL, nR, nD, nP, nj],
    }),
    nM = (0, E.zZ)(h.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => U.intl.string(U.t.S5GfOW),
        buildLayout: () => [n_, nI, nG],
    });
var nU = n(147248),
    nV = n(141343),
    nk = n(665267),
    nw = n(414133),
    nF = n(376134);
let nB = (0, E.Hn)(h.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => U.intl.string(U.t.Q7mm4g),
        useSearchTerms: () => [U.intl.string(nF.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: U.intl.string(U.t["hrS/Pc"]), value: eQ.tI.GUILD },
            { id: "personal", label: U.intl.string(U.t.mlvXIq), value: eQ.tI.PERSONAL },
        ],
        useValue: () => M.zY.useSetting(),
        setValue: M.zY.updateSetting,
        usePredicate: () => (0, nw.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    nz = (0, E.zD)(h.X.SYNC_PROFILE_THEMES, {
        useTitle: () => U.intl.string(U.t.C00w4l),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, eu.M1)(),
    });
var nY = n(817281),
    nX = n(284016),
    nH = n(363195);
let nW = (0, E.zD)(h.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => U.intl.string(U.t["/B+kEV"]),
    useSearchTerms: () => [U.intl.string(U.t.Ksh3ik)],
    useValue: function () {
        return (0, f.bG)([nX.A], () => !1 !== nX.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        return (0, f.bG)([nH.A], () => nH.A.isSameAsDeviceThemeEnabled());
    },
    setValue: function (e) {
        var t;
        let n = nH.A.theme,
            i = nU.A.gradientPreset?.id ?? null,
            s = M.eh.getSetting()?.customUserThemeSettings != null;
        ((t = I.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            ts.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: s },
            }),
            nY.Ay.setShouldSyncAppearanceSettings(e));
    },
});
var nK = n(393284);
let nZ = (0, E.AK)(h.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.nhVQDJ),
        useSearchTerms: () => [U.intl.string(U.t.nhVQDJ)],
        destinationKey: h.X.ACCESSIBILITY_PANEL,
    }),
    nq = (0, E.gN)(h.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [nZ] }),
    nQ = (0, E.zZ)(h.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => U.intl.string(U.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, f.bG)([j.Ay], () => j.Ay.useForcedColors)
                ? {
                      type: S.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "none",
                      text: (0, eN.D)()
                          ? U.intl.format(U.t.Jae48E, {
                                onClick: () => {
                                    (0, ng.openUserSettings)(h.X.SYNC_FORCED_COLORS);
                                },
                            })
                          : U.intl.string(U.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            let e = (0, f.bG)([nU.A, j.Ay], () => j.Ay.useForcedColors || nU.A.isPreview),
                t = (0, nV.V)();
            return e || t
                ? null
                : {
                      type: S.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: S.UV.BUTTON,
                              text: U.intl.string(U.t["E+COuA"]),
                              onClick: nk.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [nK.k, nW, nz, nB, nq],
    }),
    n$ = (0, E.t_)(h.X.APPEARANCE_PANEL, {
        initialize: function () {
            tl.A.isFetching() ||
                (ts.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                ti.Bo.get({ url: I.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        ts.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        ts.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => U.intl.string(U.t["iHH+ky"]),
        buildLayout: () => [nQ, t3, nh, tB, nT, nM, tA],
    }),
    nJ = [
        { badgeType: S.Xi.NEW, dismissibleContent: eA.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: S.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eA.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, p.jsx)(tc.JI, { text: U.intl.string(U.t.y2b7CA) });
            },
        },
    ],
    n0 = (0, E.i4)(h.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["iHH+ky"]),
        icon: tt.PaintPaletteIcon,
        useMenu: function () {
            let e,
                t,
                n,
                i = (0, ta.A)(),
                s =
                    ((e = M.D_.useSetting()),
                    (t = M.SI.useSetting()),
                    e
                        ? null
                        : (0, p.jsx)(tn.sL, {
                              id: "preview-markdown-toggle",
                              label: U.intl.string(U.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  (td.default.track(I.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: I.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      M.SI.updateSetting(e));
                              },
                              checked: t,
                          })),
                l =
                    ((n = (0, f.bG)([tu.A], () => tu.A.enabled, [])),
                    (0, p.jsx)(tn.sL, {
                        id: "streamer-mode-toggle",
                        label: U.intl.string(U.t.p9ZAJZ),
                        action: () => {
                            to.A.setEnabled(!n);
                        },
                        checked: n,
                    }));
            return T.useMemo(() => {
                let e = [...i];
                return (
                    null != s &&
                        e.push((0, p.jsx)(tn.rX, { label: U.intl.string(U.t.Ob7VMB), children: s }, "text-and-images")),
                    null != l && e.push((0, p.jsx)(tn.rX, { children: l }, "streamer-mode")),
                    e
                );
            }, [i, s, l]);
        },
        getDismissibleBadges: () =>
            (0, tr.ad)().isFreemium
                ? nJ.filter((e) => {
                      let { dismissibleContent: t } = e;
                      return t !== eA.M.FAVORITES_GUILD_NEW_BADGE;
                  })
                : nJ,
        buildLayout: () => [n$],
    });
var n1 = n(37646),
    n2 = n(434404);
let n3 = (0, E.t_)(h.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => U.intl.string(U.t.KyFVyi),
        buildLayout: () => [n2.F],
    }),
    n5 = (0, E.i4)(h.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: n1.U,
        useTitle: () => U.intl.string(U.t.KyFVyi),
        buildLayout: () => [n3],
    });
var n4 = n(3137),
    n6 = n(661531),
    n8 = n(314116),
    n7 = n(270003),
    n9 = n(939249),
    ie = n(369606),
    it = n(320448),
    ii = n(604121),
    is = n(725951),
    il = n(400492),
    ir = n(669067),
    ia = n(115063),
    io = n(754692),
    iu = n(927018),
    id = n(512599),
    ic = n(532197),
    ig = n(403362),
    im = n(874486),
    iA = n(503698),
    iE = n.n(iA),
    ih = n(536637),
    ix = n.n(ih),
    iS = n(58703),
    ip = n(906688),
    iT = n(98705);
function iI(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, iu.vM)(t);
    if (null == i) return null;
    let s = null != n,
        { name: l, description: r, hideDescriptionUntilUnlock: a, onAction: o } = i,
        u = a && !s,
        d = s ? "text-strong" : "text-muted",
        c = s ? "text-default" : "text-muted",
        g = ix()(n),
        m = null != o && s,
        A = m ? n9.D : "div";
    return (0, p.jsxs)(A, {
        className: iE()(iT.kL, m && iT.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, p.jsx)("div", {
                className: iT.zc,
                children: (0, p.jsx)(ip.A, { achievementId: t, size: ip.A.Sizes.SIZE_40, unlocked: s }),
            }),
            (0, p.jsxs)("div", {
                className: iT.VW,
                children: [
                    null != n &&
                        (0, p.jsx)(Q.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: iT.YR,
                            children: (0, iS.mk)(g),
                        }),
                    (0, p.jsx)(Q.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, p.jsx)(Q.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var i_ = n(545744);
function iN(e) {
    let { onBackClick: t } = e,
        n = (0, f.bG)([im.A], () => im.A.getAllUnlockedAchievements()),
        i = T.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        s = T.useMemo(
            () =>
                Object.values(iu.l0)
                    .filter(ig.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)(n9.D, {
                onClick: t,
                className: i_.vv,
                children: [
                    (0, p.jsx)(ic.A, { direction: ic.A.Directions.LEFT, className: i_.Kk }),
                    (0, p.jsx)(Q.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: U.intl.string(U.t["13/7kX"]),
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: i_.N1,
                children: [
                    (0, p.jsxs)("div", {
                        className: i_.if,
                        children: [
                            (0, p.jsx)(N.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: U.intl.string(U.t["6jI0hd"]),
                            }),
                            (0, p.jsx)(Q.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: U.intl.string(U.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, p.jsx)("div", {
                        className: i_.nr,
                        children: (0, p.jsx)(ie.TrophyIcon, {
                            size: "custom",
                            color: n6.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            i.length > 0 &&
                (0, p.jsx)("div", {
                    className: i_.yF,
                    children: (0, p.jsx)("div", {
                        className: i_.Eh,
                        children: i.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, p.jsx)(iI, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            s.length > 0 &&
                (0, p.jsxs)("div", {
                    className: i_.yF,
                    children: [
                        (0, p.jsx)("div", {
                            className: i_.if,
                            children: (0, p.jsx)(Q.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: U.intl.string(U.t.GFyMg1),
                            }),
                        }),
                        (0, p.jsx)("div", {
                            className: i_.Eh,
                            children: s.map((e) => (0, p.jsx)(iI, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, p.jsx)("div", { className: i_.yF, children: (0, p.jsx)("div", { className: i_.F3 }) }),
        ],
    });
}
var iC = n(224964),
    iy = n(31408),
    ib = n(368588);
let iv = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    ij = (0, H.range)(0, 11),
    iO = (0, H.range)(0, 2.25, 0.25),
    iL = (0, H.range)(1, 11),
    iR = (0, H.range)(1, 26),
    iD = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function iP(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: s } = e,
        l = n.map((e) =>
            (0, p.jsx)(
                t8.d,
                {
                    label: e.title,
                    description: e.description,
                    checked: i[e.location],
                    disabled: t,
                    onChange: (t) => s({ ...i, [e.location]: t }),
                },
                e.location,
            ),
        );
    return (0, p.jsx)(n7.n, { label: U.intl.string(U.t.bWVN1D), children: l });
}
function iG(e) {
    let { children: t } = e;
    return (0, p.jsx)(Q.E, { className: ib.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function iM(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        s = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion);
    return (0, p.jsx)(t8.d, {
        label: U.intl.string(U.t.vuiXm9),
        description: U.intl.string(U.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            (e || (0, io._)(iu.sn.DISABLE_POGGERMODE),
                e && (!n || s)
                    ? (0, n8.A)({
                          title: s ? U.intl.string(U.t["FxT+p0"]) : U.intl.string(U.t.TAZ4F9),
                          subtitle: s ? U.intl.string(U.t.gmixrx) : U.intl.string(U.t.jN3t3K),
                          confirmText: U.intl.string(U.t.JFfins),
                          onConfirm: () => i(s ? iv : { enabled: !0, warningSeen: !0 }),
                      })
                    : i({ enabled: e }));
        },
    });
}
function iU(e) {
    let {
            settings: {
                enabled: t,
                confettiEnabled: n,
                confettiCount: i,
                confettiSize: s,
                confettiEnabledLocations: l,
            },
            updateSettings: r,
        } = e,
        a = !t || !n;
    return (0, p.jsxs)(n7.n, {
        label: U.intl.string(U.t.mqxwJO),
        children: [
            (0, p.jsx)(t8.d, {
                label: U.intl.string(U.t.s0KCgF),
                description: U.intl.string(U.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(Q.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: ib.KF,
                        children: U.intl.string(U.t.vd0D81),
                    }),
                    (0, p.jsx)(iG, { children: U.intl.string(U.t.a18Sug) }),
                    (0, p.jsx)(q.A, {
                        disabled: a,
                        markers: iL,
                        stickToMarkers: !0,
                        minValue: iL[0],
                        maxValue: iL[iL.length - 1],
                        initialValue: i,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(Q.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: ib.KF,
                        children: U.intl.string(U.t.sPO3ij),
                    }),
                    (0, p.jsx)(iG, { children: U.intl.string(U.t.xoldVn) }),
                    (0, p.jsx)(q.A, {
                        disabled: a,
                        markers: iR,
                        stickToMarkers: !0,
                        minValue: iR[0],
                        maxValue: iR[iR.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, p.jsx)(iP, {
                disabled: a,
                locations: [
                    {
                        location: iy.k.CHAT_INPUT,
                        title: U.intl.string(U.t.elTtyz),
                        description: U.intl.string(U.t.HtKfMi),
                    },
                    {
                        location: iy.k.REACTION,
                        title: U.intl.string(U.t.Ik4VIa),
                        description: U.intl.string(U.t.y4rqK0),
                    },
                    {
                        location: iy.k.MEMBER_USER,
                        title: U.intl.string(U.t.ZXBlAn),
                        description: U.intl.string(U.t["m9RD+c"]),
                    },
                    {
                        location: iy.k.CALL_TILE,
                        title: U.intl.string(U.t.V66giQ),
                        description: U.intl.string(U.t.fiHV7u),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function iV(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: s },
            updateSettings: l,
        } = e,
        r = !t || !n;
    return (0, p.jsxs)(n7.n, {
        label: U.intl.string(U.t.Xz0ole),
        children: [
            (0, p.jsx)(t8.d, {
                label: U.intl.string(U.t.o3iV7B),
                description: U.intl.string(U.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => l({ combosEnabled: e }),
            }),
            (0, p.jsx)(t8.d, {
                label: U.intl.string(U.t["Ax+IoW"]),
                description: U.intl.string(U.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => l({ comboSoundsEnabled: e }),
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(Q.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: ib.KF,
                        children: U.intl.string(U.t.L0oQuh),
                    }),
                    (0, p.jsx)(iG, { children: U.intl.string(U.t["/OOFpL"]) }),
                    (0, p.jsx)(q.A, {
                        disabled: r,
                        markers: ij,
                        stickToMarkers: !0,
                        minValue: ij[0],
                        maxValue: ij[ij.length - 1],
                        initialValue: s,
                        onValueChange: (e) => l({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function ik(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: s },
            updateSettings: l,
        } = e,
        r = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion),
        a = !t || !n || r;
    return (0, p.jsxs)(n7.n, {
        label: U.intl.string(U.t.wVS5Sd),
        children: [
            (0, p.jsx)(t8.d, {
                label: U.intl.string(U.t.N004zO),
                description: r ? U.intl.string(U.t.GckHGw) : U.intl.string(U.t.Qq5W3v),
                checked: n && !r,
                disabled: !t || r,
                onChange: (e) => l({ screenshakeEnabled: e }, 1),
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(Q.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: ib.KF,
                        children: U.intl.string(U.t.UxnnC4),
                    }),
                    (0, p.jsx)(iG, { children: U.intl.string(U.t.CEOEOb) }),
                    (0, p.jsx)(q.A, {
                        disabled: a,
                        markers: iO,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: iO[0],
                        maxValue: iO[iO.length - 1],
                        initialValue: i,
                        onValueChange: (e) => {
                            var t;
                            (null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, io._)(iu.sn.MORE),
                                l(t, 1));
                        },
                        onMarkerRender: (e) => (e === iO[iO.length - 1] ? U.intl.string(U.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, p.jsx)(iP, {
                disabled: a,
                locations: [
                    {
                        location: iy.uD.CHAT_INPUT,
                        title: U.intl.string(U.t.vUcvPP),
                        description: U.intl.string(U.t.y00OrF),
                    },
                    {
                        location: iy.uD.VOICE_USER,
                        title: U.intl.string(U.t.TcRO54),
                        description: U.intl.string(U.t.YJCxVY),
                    },
                    {
                        location: iy.uD.MENTION,
                        title: U.intl.string(U.t.oW4shO),
                        description: U.intl.string(U.t["mqfw/H"]),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => l({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function iw(e) {
    let { updateSettings: t } = e;
    return (0, p.jsx)(n7.n, {
        label: U.intl.string(U.t.EuXv2q),
        children: (0, p.jsxs)(Z.B, {
            gap: 16,
            children: [
                (0, p.jsx)("div", { children: U.intl.string(U.t["1SLnki"]) }),
                (0, p.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: ib.hw,
                    children: (0, p.jsx)(v.$, {
                        variant: "primary",
                        size: "sm",
                        text: U.intl.string(U.t.qz65yY),
                        onClick: function () {
                            (t({ enabled: !1, settingsVisible: !1 }), (0, tH.default)());
                        },
                    }),
                }),
            ],
        }),
    });
}
function iF(e) {
    let { onChangePage: t } = e;
    return (0, p.jsxs)(n9.D, {
        onClick: function () {
            return t(1);
        },
        className: ib.Tq,
        children: [
            (0, p.jsx)("div", {
                className: ib.w1,
                children: (0, p.jsx)(ie.TrophyIcon, { size: "md", color: n6.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, p.jsxs)("div", {
                className: ib.qL,
                children: [
                    (0, p.jsx)(N.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: U.intl.string(U.t["6jI0hd"]),
                    }),
                    (0, p.jsx)(Q.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: U.intl.string(U.t.GuUItX),
                    }),
                ],
            }),
            (0, p.jsx)(it._, { size: "custom", color: "currentColor", width: 16, className: ib.nT }),
        ],
    });
}
function iB() {
    return n
        .e("504660")
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function iz(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        i = (0, f.cf)([n4.A], () => n4.A.getState()),
        [s, l] = T.useState({ x: 0, y: 0 }),
        r = (0, iC.A)();
    function a(e, t) {
        var l, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === i.enabled &&
                (n(!0),
                (0, il.Ak)("poggermode_enabled"),
                (0, ia.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? i.shakeIntensity })),
            (0, id.O9)(e),
            null == t)
        )
            return;
        let A =
            ((l = i.confettiEnabled), (a = e.confettiEnabled), (o = i.enabled), (u = e.enabled), (a ?? l) && (u ?? o));
        0 === t && A && r.fire(s.x, s.y, { settings: e });
        let E =
            ((d = i.screenshakeEnabled),
            (c = e.screenshakeEnabled),
            (g = i.enabled),
            (m = e.enabled),
            (c ?? d) && (m ?? g));
        1 === t && E && (0, ia.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
    }
    function o(e) {
        l({ x: e.clientX, y: e.clientY });
    }
    return (
        T.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, p.jsxs)(Z.B, {
            gap: 24,
            children: [
                (0, p.jsx)(iM, { settings: i, updateSettings: a }),
                (0, p.jsx)(iF, { onChangePage: t }),
                (0, p.jsx)(iV, { settings: i, updateSettings: a }),
                (0, p.jsx)(ik, { settings: i, updateSettings: a }),
                (0, p.jsx)(iU, { settings: i, updateSettings: a }),
                (0, p.jsx)(iw, { updateSettings: a }),
            ],
        })
    );
}
function iY(e) {
    return 0 === e ? is.f.LEFT : is.f.RIGHT;
}
let iX = (0, E.E2)(h.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = T.useState(0),
                [n, i] = T.useState(iY(e)),
                [s, l] = T.useState(!1),
                r = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion),
                a = s && !r;
            return (
                T.useEffect(() => {
                    let t = setTimeout(() => {
                        i(iY(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                T.useEffect(() => {
                    (0, ir._)(iD[e]);
                }, [e]),
                T.useEffect(() => {
                    Math.random() > 0.99 && (0, io._)(iu.sn.VISITOR_100);
                }, []),
                (0, p.jsxs)(p.Fragment, {
                    children: [
                        (0, p.jsx)(is.A, {
                            className: ib.l3,
                            step: e,
                            direction: n,
                            children: (function (e, t, n) {
                                function i(e) {
                                    return () => {
                                        t(e);
                                    };
                                }
                                switch (e) {
                                    case 0:
                                        return (0, p.jsx)(iz, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, p.jsx)(iN, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, l),
                        }),
                        (0, p.jsx)("div", {
                            className: a ? ib.Sr : ib.IP,
                            children: (0, p.jsx)(ii.a, {
                                className: ib.gT,
                                importData: iB,
                                shouldAnimate: a,
                                autoplay: !1,
                                resetOnPlay: !0,
                                loop: !1,
                                onComplete: () => l(!1),
                            }),
                        }),
                    ],
                })
            );
        },
        useSearchTerms: () => [
            U.intl.string(U.t.AtCukI),
            U.intl.string(U.t.mqxwJO),
            U.intl.string(U.t.wVS5Sd),
            U.intl.string(U.t.Xz0ole),
            U.intl.string(U.t["Ax+IoW"]),
            U.intl.string(U.t["6jI0hd"]),
            U.intl.string(U.t.s0KCgF),
        ],
    }),
    iH = (0, E.zZ)(h.X.POGGERMODE_CATEGORY, { buildLayout: () => [iX] });
var iW = n(212043);
let iK = (0, E.t_)(h.X.POGGERMODE_PANEL, { useTitle: () => U.intl.string(U.t.AtCukI), buildLayout: () => [iH] }),
    iZ = (0, E.i4)(h.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.AtCukI),
        icon: () => (0, p.jsx)("img", { alt: "", src: n(724405), className: iW.$ }),
        usePredicate: () => (0, f.bG)([n4.A], () => n4.A.settingsVisible),
        buildLayout: () => [iK],
    });
var iq = n(307301),
    iQ = n(410767),
    i$ = n(683071),
    iJ = n(97260),
    i0 = n(710195),
    i1 = n(57757),
    i2 = n(188321),
    i3 = n(695366),
    i5 = n(812729),
    i4 = n.n(i5),
    i6 = n(587895),
    i8 = n(429913),
    i7 = n(616356),
    i9 = n(952818);
function se(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function st() {
    let e = (0, f.bG)([i7.A], () => i7.A.getStreamerActiveStreamMetadata()),
        t = (0, f.bG)(
            [i9.Ay],
            () => {
                let e = i9.Ay.getVisibleGame();
                return null != e ? i9.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            i4(),
        ),
        [n] = (0, i8.A)([se(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var sn = n(769015),
    si = n(192820),
    ss = n(935671),
    sl = n(435075);
function sr(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, p.jsx)("div", {
              className: sl.zc,
              children: (0, p.jsx)(i3.E, { size: "sm", color: n6.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, p.jsxs)("div", {
              className: sl.nt,
              children: [
                  (0, p.jsx)(sn.A, { game: n, pid: t.pid, size: sn.M.MEDIUM }),
                  (0, p.jsx)("div", {
                      className: sl.Am,
                      children: (0, p.jsx)(i3.E, { size: "sm", color: n6.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function sa(e) {
    let t = (0, f.bG)([si.Ay], () => si.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = st();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let s = (0, ss.NP)(),
        l = s && null != n && t === I.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: n, runningGameApplication: i };
}
function so(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: s, runningGameApplication: l } = sa(n);
    return i
        ? (0, p.jsxs)("div", {
              className: iE()(sl.kL, t),
              children: [
                  (0, p.jsx)(sr, { game: s, application: l }),
                  (0, p.jsxs)("div", {
                      className: sl.FS,
                      children: [
                          (0, p.jsx)(Q.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? U.intl.string(U.t.vxfv7v)
                                      : null != s
                                        ? U.intl.string(U.t.fAYU2G)
                                        : U.intl.string(U.t["9V4X/c"]),
                          }),
                          (0, p.jsx)(Q.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: U.intl.format(U.t["/y6htt"], {
                                  helpCenterLink: eC.A.getArticleURL(I.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(v.$, {
                      variant: "secondary",
                      size: "sm",
                      text: U.intl.string(U.t["1iI46O"]),
                      onClick: function () {
                          (0, ss.sL)(n + (null != s ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var su = n(404778),
    sd = n(579370),
    sc = n(532624),
    sg = n(691885),
    sm = n(408278),
    sA = n(241326),
    sE = n(866665),
    sh = n(140735),
    sx = n(489718),
    sS = n(827343),
    sp = n(635242),
    sT = n(350535),
    sf = n(189213),
    sI = n(192308),
    s_ = n(95477),
    sN = n(320989),
    sC = n(978263);
let sy = [];
var sb = n(235986),
    sv = n(484734),
    sj = n(734057),
    sO = n(808728),
    sL = n(71393),
    sR = n(967198),
    sD = n(926140),
    sP = n(847893);
function sG() {}
let sM = [sD.rD.VOICE_CHANNEL];
function sU(e) {
    (e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0));
}
function sV() {
    return (0, p.jsx)("div", {
        className: sP.i1,
        children: (0, p.jsx)(Q.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: sP.GN,
            children: U.intl.string(U.t.zHjCd1),
        }),
    });
}
function sk(e) {
    let { keybind: t, className: n } = e,
        i = T.useRef(t);
    T.useEffect(() => {
        i.current = t;
    });
    let [s, l] = T.useState(t.params?.channelId ?? void 0),
        r = T.useCallback(() => {
            (0, sI.openModalLazy)(
                async () => (e) =>
                    (0, p.jsx)(sw, {
                        ...e,
                        onSelect: (e) => {
                            (l(e), iJ.A.setKeybind({ ...i.current, params: { channelId: e } }));
                        },
                    }),
            );
        }, []);
    return (0, p.jsx)("div", {
        className: iE()(sP.a8, n),
        children: (0, p.jsx)(t6.D, {
            label: U.intl.string(U.t.q4JpM8),
            children: (0, p.jsxs)(sb.A, {
                align: sb.A.Align.STRETCH,
                children: [
                    (0, p.jsx)("div", { className: sP.$X, children: (0, p.jsx)(sF, { channelId: s }) }),
                    (0, p.jsx)(sb.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, p.jsx)(v.$, { variant: "primary", text: U.intl.string(U.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function sw(e) {
    let t,
        n,
        { transitionState: i, onClose: s, onSelect: l } = e,
        r = T.useId(),
        a = T.useRef(null),
        {
            query: o,
            updateQuery: u,
            queryResults: d,
        } = (function (e) {
            let {
                    visible: t,
                    autocompleterResultTypes: n,
                    autocompleterOptions: i,
                    autocompleterBeforeCreateSearchContext: s,
                } = e,
                [l, r] = T.useState(""),
                [a, o] = T.useState(sy),
                u = T.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(sy) : o(e);
                }, []);
            T.useEffect(
                () =>
                    sN.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = T.useState(() => new sC.A(u, n, void 0, i));
            return (
                T.useEffect(() => {
                    t ? (s?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, s]),
                {
                    queryResults: a,
                    query: l,
                    updateQuery: T.useCallback(
                        (e) => {
                            (r(e), d.search(e));
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: sM, autocompleterBeforeCreateSearchContext: sU }),
        c =
            ((t = "" !== o),
            (n = (0, f.yK)(
                [sO.Ay, sj.A, sR.A],
                () => {
                    let e = sR.A.getGuildId();
                    if (t || null == e) return [];
                    let n = [];
                    for (let t of sO.Ay.getVocalChannelIds(e)) {
                        let e = sj.A.getChannel(t);
                        null != e && n.push(e);
                    }
                    return n;
                },
                [t],
            )),
            t ? null : n),
        { focusedIndex: g, setFocusedIndex: m } = (function (e) {
            let [t, n] = T.useState(0),
                i = T.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                T.useEffect(() => {
                    i.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: n }
            );
        })(o);
    T.useEffect(() => {
        let { current: e } = a;
        null == e || e.isItemVisible(0, g, !0) || e.scrollToIndex({ section: 0, row: g });
    }, [g]);
    let A = null != c ? c.length : d.length,
        E = (() => {
            if (null != c) return c[g]?.id;
            let e = d[g];
            if (e?.type === sD.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        h =
            A > 0 || "" === o
                ? {
                      innerId: r,
                      innerRole: "listbox",
                      innerAriaLabel: U.intl.string(U.t["+N3fW7"]),
                      ref: a,
                      sections: [A],
                      renderRow: function (e) {
                          let { row: t } = e,
                              n = (() => {
                                  if (null != c) return c[t];
                                  let e = d[t];
                                  if (e?.type === sD.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? sj.A.getChannel(n.parent_id) : void 0,
                              r = sL.A.getGuild(n.guild_id);
                          return (0, p.jsx)(
                              sv.c3,
                              {
                                  id: n.id,
                                  channel: n,
                                  category: i,
                                  focused: g === t,
                                  onMouseEnter: () => m(t),
                                  onClick: () => {
                                      (l(n.id), s());
                                  },
                                  onFocus: () => m(t),
                                  children:
                                      null != r ? (0, p.jsx)("div", { className: sP.J5, children: r.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, p.jsx)(sV, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, p.jsx)(sf.a, {
        transitionState: i,
        onClose: s,
        title: U.intl.string(U.t.Dm8O4e),
        subtitle: U.intl.string(U.t.q4JpM8),
        actions: void 0,
        input: (0, p.jsx)(s_.k, {
            value: o,
            onChange: u,
            onKeyDown: function (e) {
                let t = e.key.toLowerCase();
                if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t)
                    switch ((e.preventDefault(), t)) {
                        case "escape":
                            s();
                            break;
                        case "enter": {
                            let e = (() => {
                                if (null != c) return c[g];
                                let e = d[g];
                                if (e?.type === sD.rD.VOICE_CHANNEL) return e.record;
                            })();
                            (null == e ? l(void 0) : l(e.id), s());
                            break;
                        }
                        case "arrowup":
                            0 === g ? m(A - 1) : m(g - 1);
                            break;
                        case "arrowdown":
                            g >= A - 1 ? m(0) : m(g + 1);
                    }
            },
            placeholder: U.intl.string(U.t.tG0r7g),
            role: "combobox",
            "aria-controls": r,
            "aria-expanded": A > 0,
            "aria-activedescendant": A > 0 && null != E ? E : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: h,
    });
}
function sF(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: s,
        } = (0, f.cf)([sj.A, sL.A], () => {
            let e = null != t ? sj.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? sj.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? sL.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, p.jsx)(Q.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: sP.GN,
              children: U.intl.string(U.t["/fYIK7"]),
          })
        : (0, p.jsx)(sv.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: sG,
              onFocus: sG,
              onMouseEnter: sG,
              focused: !1,
              children: null != s ? (0, p.jsx)("div", { className: sP.J5, children: s.name }) : null,
          });
}
var sB = n(650583),
    sz = n(731854),
    sY = n(94451);
function sX(e) {
    let { keybind: t } = e,
        n = (0, f.bG)([sc.Ay], () => sc.Ay.isWaylandPortalActive()),
        i = (0, f.bG)([sc.Ay], () => sc.Ay.getWaylandPortalShortcutState(t.id));
    return n && 0 !== t.shortcut.length && t.enabled
        ? sc.Ay.isWaylandPortalEligibleShortcut(t.shortcut)
            ? null == i
                ? null
                : i.bound
                  ? (0, sd.Rg)(i)
                      ? (0, p.jsx)("div", {
                            className: sY.$e,
                            children: (0, p.jsx)(i$.w, {
                                type: "info",
                                message: U.intl.format(U.t.wu2lqV, { trigger: i.triggerDescription }),
                                role: "status",
                            }),
                        })
                      : null
                  : (0, p.jsx)("div", {
                        className: sY.$e,
                        children: (0, p.jsx)(i$.w, {
                            type: "warning",
                            message: U.intl.string(U.t.PTCrUP),
                            role: "status",
                        }),
                    })
            : (0, p.jsx)("div", {
                  className: sY.$e,
                  children: (0, p.jsx)(i$.w, { type: "warning", message: U.intl.string(U.t.J0m3aK), role: "status" }),
              })
        : null;
}
function sH(e) {
    let { keybind: t } = e,
        n = sT.dI(t.shortcut);
    return e4.A.hasBind(n)
        ? (0, p.jsx)("div", {
              className: sY.$e,
              children: (0, p.jsx)(i$.w, { type: "warning", message: U.intl.string(U.t["7lQlw3"]), role: "status" }),
          })
        : sB.Yy.has(n)
          ? (0, p.jsx)("div", {
                className: sY.$e,
                children: (0, p.jsx)(i$.w, {
                    type: "warning",
                    message: U.intl.format(U.t.MOIaNd, {
                        keyboardNavArticle: eC.A.getArticleURL(I.MVz.KEYBOARD_NAVIGATION),
                    }),
                    role: "status",
                }),
            })
          : void 0;
}
function sW(e) {
    let { keybind: t } = e;
    return t.action === I.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, p.jsx)(sk, { keybind: t, className: sY._M }) : null;
}
let sK = T.memo(function (e) {
    let { keybind: t, keybindDescriptions: n, keybindActionTypes: i } = e,
        s = T.useCallback((e) => iJ.A.setKeybind({ ...t, action: e }), [t]),
        l = T.useCallback(
            (e) => {
                if (
                    ((0, sd.uL)(t.id, t.shortcut, e, sc.Ay.getWaylandPortalShortcutState(t.id)),
                    t.managed && t.action === I.hCu.PUSH_TO_TALK)
                ) {
                    let n = t.context ?? sz.x.DEFAULT;
                    sS.default.setMode(si.Ay.getMode(n), { shortcut: e }, n);
                    return;
                }
                iJ.A.setKeybind({ ...t, shortcut: e });
            },
            [t],
        ),
        r = T.useCallback(() => iJ.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = T.useCallback(() => iJ.A.deleteKeybind(t.id), [t.id]),
        o = T.useId(),
        u = T.useMemo(() => i.find((e) => e.value === t.action)?.label ?? t.action, [t.action, i]);
    return (0, p.jsxs)("div", {
        className: sY.f_,
        children: [
            (0, p.jsx)(sH, { keybind: t }),
            (0, p.jsx)(sX, { keybind: t }),
            (0, p.jsx)("div", {
                className: sY.XI,
                children: (0, p.jsx)(sg.l, {
                    selectionMode: "single",
                    label: U.intl.string(U.t.XH5b12),
                    value: t.action,
                    options: i,
                    onSelectionChange: s,
                    disabled: t.managed,
                }),
            }),
            (0, p.jsx)("div", {
                className: sY.LE,
                children: (0, p.jsx)(t6.D, {
                    label: U.intl.string(U.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, p.jsx)(sp.A, { defaultValue: t.shortcut, onChange: l }),
                }),
            }),
            (0, p.jsxs)("div", {
                className: sY.ne,
                children: [
                    !t.managed &&
                        (0, p.jsx)(sm.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: sA.TrashIcon,
                            "aria-label": U.intl.string(U.t.qEHmmB),
                        }),
                    (0, p.jsx)(sE.m, {
                        text: U.intl.string(t.enabled ? U.t.pNYGbx : U.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsx)(sh.A, {
                                    id: o,
                                    children: U.intl.format(t.enabled ? U.t["myr/Y0"] : U.t.lYhtPO, { actionName: u }),
                                }),
                                (0, p.jsx)(sx.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, p.jsx)(Q.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: sY.h_,
                children: n[t.action],
            }),
            (0, p.jsx)(sW, { keybind: t }),
        ],
    });
});
var sZ = n(696760),
    sq = n(734066),
    sQ = n(880144),
    s$ = n(994778),
    sJ = n(950869),
    s0 = n(603933);
function s1() {
    let e = (0, f.bG)([sc.Ay], () => sc.Ay.isWaylandPortalActive()),
        t = T.useMemo(() => e && (0, sd.u)(), [e]);
    return e
        ? (0, p.jsx)(i$.w, {
              type: "info",
              message: U.intl.string(U.t.AcH7R7),
              role: "none",
              action: t ? { text: U.intl.string(U.t.ZPHaPE), onClick: sd.qM } : void 0,
          })
        : null;
}
let s2 = function () {
        let e,
            t,
            n,
            i,
            s,
            l,
            r,
            {
                customizableKeybinds: a,
                keybindDescriptions: o,
                keybindActionTypes: u,
            } = ((e = (0, f.bG)([sc.Ay], () => sc.Ay.getState())),
            (t = (0, f.bG)([si.Ay], () => (0, sQ.A)(si.Ay))),
            (n = (0, f.bG)([si.Ay], () => si.Ay.supports(sz.O5.VIDEO))),
            (i = (0, f.bG)([sJ.A], () => sJ.A.isSupported)),
            (s = (0, sq.sw)()),
            (l = (0, sq.BW)()),
            {
                customizableKeybinds: (function (e) {
                    let { keybinds: t, enableClips: n, enableScreenshotKeybind: i, allowSoundboard: s } = e;
                    return W()(t)
                        .reject(
                            (e) =>
                                e.managed &&
                                ![
                                    I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                                    I.hCu.SAVE_CLIP,
                                    I.hCu.SAVE_SCREENSHOT,
                                ].includes(e.action),
                        )
                        .reject((e) => !n && (e.action === I.hCu.SAVE_CLIP || e.action === I.hCu.SAVE_SCREENSHOT))
                        .reject((e) => !i && e.action === I.hCu.SAVE_SCREENSHOT)
                        .reject((e) => !s && (e.action === I.hCu.SOUNDBOARD || e.action === I.hCu.SOUNDBOARD_HOLD))
                        .sortBy((e) => e.id)
                        .sortBy((e) => (!0 === e.managed ? -1 : 0))
                        .value();
                })({
                    keybinds: e,
                    enableClips: s,
                    enableScreenshotKeybind: l,
                    allowSoundboard: (r = (0, e6.isWindows)()),
                }),
                keybindActionTypes: (function (e) {
                    let {
                            overlaySupported: t,
                            canGoLive: n,
                            videoSupported: i,
                            allowSoundboard: s,
                            enableClips: l,
                            enableScreenshotKeybind: r,
                        } = e,
                        a = [
                            { id: "unassigned", value: I.hCu.UNASSIGNED },
                            { id: "push-to-talk", value: I.hCu.PUSH_TO_TALK },
                            { id: "push-to-talk-priority", value: I.hCu.PUSH_TO_TALK_PRIORITY },
                            { id: "push-to-mute", value: I.hCu.PUSH_TO_MUTE },
                            { id: "vad-priority", value: I.hCu.VAD_PRIORITY },
                            { id: "toggle-mute", value: I.hCu.TOGGLE_MUTE },
                            { id: "toggle-deafen", value: I.hCu.TOGGLE_DEAFEN },
                            { id: "toggle-voice-mode", value: I.hCu.TOGGLE_VOICE_MODE },
                            { id: "toggle-streamer-mode", value: I.hCu.TOGGLE_STREAMER_MODE },
                            { id: "toggle-voice-channel-chat", value: I.hCu.TOGGLE_VOICE_CHANNEL_CHAT },
                        ];
                    return (
                        i && a.push({ id: "toggle-camera", value: I.hCu.TOGGLE_CAMERA }),
                        t &&
                            (a.push({ id: "toggle-overlay-input-lock", value: I.hCu.TOGGLE_OVERLAY_INPUT_LOCK }),
                            a.push({
                                id: "activate-overlay-region-text-widget",
                                value: I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                            })),
                        n &&
                            ((0, e6.isWindows)() || si.Ay.getUseSystemScreensharePicker()) &&
                            a.push({ id: "toggle-go-live-streaming", value: I.hCu.TOGGLE_GO_LIVE_STREAMING }),
                        (0, e6.isDesktop)() &&
                            (a.push(
                                { id: "navigate-back", value: I.hCu.NAVIGATE_BACK },
                                { id: "navigate-forward", value: I.hCu.NAVIGATE_FORWARD },
                                { id: "switch-to-voice-channel", value: I.hCu.SWITCH_TO_VOICE_CHANNEL },
                                { id: "disconnect-from-voice-channel", value: I.hCu.DISCONNECT_FROM_VOICE_CHANNEL },
                            ),
                            s &&
                                a.push(
                                    { id: "soundboard", value: I.hCu.SOUNDBOARD },
                                    { id: "soundboard-hold", value: I.hCu.SOUNDBOARD_HOLD },
                                ),
                            l &&
                                (a.push({ id: "save-clip", value: I.hCu.SAVE_CLIP }),
                                r && a.push({ id: "save-screenshot", value: I.hCu.SAVE_SCREENSHOT }))),
                        a.map((e) => {
                            let { id: t, value: n } = e;
                            return { id: t, value: n, label: (0, s$.B)(n) ?? n };
                        })
                    );
                })({
                    overlaySupported: i,
                    canGoLive: t,
                    videoSupported: n,
                    allowSoundboard: r,
                    enableClips: s,
                    enableScreenshotKeybind: l,
                }),
                keybindDescriptions: (function (e) {
                    let {
                            overlaySupported: t,
                            canGoLive: n,
                            videoSupported: i,
                            enableClips: s,
                            enableScreenshotKeybind: l,
                        } = e,
                        r = {
                            [I.hCu.UNASSIGNED]: U.intl.string(U.t.rvlNLv),
                            [I.hCu.PUSH_TO_MUTE]: U.intl.string(U.t.xtESim),
                            [I.hCu.PUSH_TO_TALK]: U.intl.string(U.t.wTcBSy),
                            [I.hCu.PUSH_TO_TALK_PRIORITY]: U.intl.string(U.t.FhHvWH),
                            [I.hCu.TOGGLE_MUTE]: U.intl.string(U.t.X2fbUm),
                            [I.hCu.TOGGLE_DEAFEN]: U.intl.string(U.t.MjREZV),
                            [I.hCu.TOGGLE_VOICE_MODE]: U.intl.string(U.t.snm5YW),
                            [I.hCu.TOGGLE_STREAMER_MODE]: U.intl.string(U.t.YszLLx),
                            [I.hCu.VAD_PRIORITY]: U.intl.string(U.t.rSe8IZ),
                            [I.hCu.TOGGLE_VOICE_CHANNEL_CHAT]: U.intl.string(U.t.desfB4),
                        };
                    return (
                        i && (r[I.hCu.TOGGLE_CAMERA] = U.intl.string(U.t.v1JBtL)),
                        t && (r[I.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = U.intl.string(U.t.IoP5vc)),
                        n && (0, e6.isWindows)() && (r[I.hCu.TOGGLE_GO_LIVE_STREAMING] = U.intl.string(U.t.s4C238)),
                        (0, e6.isDesktop)() &&
                            ((r[I.hCu.NAVIGATE_BACK] = U.intl.string(U.t.nKDlEt)),
                            (r[I.hCu.NAVIGATE_FORWARD] = U.intl.string(U.t.DK0FFk)),
                            (r[I.hCu.SOUNDBOARD] = (0, e6.isWindows)()
                                ? U.intl.string(U.t["5wJefL"])
                                : U.intl.string(U.t.gzjsSP)),
                            (r[I.hCu.SOUNDBOARD_HOLD] = (0, e6.isWindows)()
                                ? U.intl.string(U.t.RRkZc9)
                                : U.intl.string(U.t.laNlTl)),
                            s &&
                                ((r[I.hCu.SAVE_CLIP] = U.intl.string(U.t.z3Wbam)),
                                l && (r[I.hCu.SAVE_SCREENSHOT] = U.intl.string(U.t.m0zd57)))),
                        r
                    );
                })({
                    overlaySupported: i,
                    canGoLive: t,
                    videoSupported: n,
                    enableClips: s,
                    enableScreenshotKeybind: l,
                }),
            });
        return 0 === a.length
            ? (0, p.jsxs)(Z.B, {
                  gap: 16,
                  children: [
                      (0, p.jsx)(s1, {}),
                      (0, p.jsx)(Q.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: U.intl.string(U.t.vyYgWp),
                      }),
                  ],
              })
            : (0, p.jsxs)(Z.B, {
                  gap: 16,
                  children: [
                      (0, p.jsx)(s1, {}),
                      (0, p.jsx)("div", {
                          className: s0.A,
                          children: a.map((e, t) =>
                              (0, p.jsxs)(
                                  T.Fragment,
                                  {
                                      children: [
                                          (0, p.jsx)(sK, { keybind: e, keybindDescriptions: o, keybindActionTypes: u }),
                                          t < a.length - 1 ? (0, p.jsx)(su.c, { className: s0.y, gap: 24 }) : null,
                                      ],
                                  },
                                  e.id,
                              ),
                          ),
                      }),
                  ],
              });
    },
    s3 = (0, E.E2)(h.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["069nVT"])],
        Component: function () {
            return nf.Av
                ? (0, p.jsx)(s2, {})
                : (0, p.jsx)(i$.w, {
                      type: "info",
                      message: U.intl.format(U.t.mPi3F3, { downloadLink: I.X7G.DOWNLOAD }),
                      role: "none",
                  });
        },
    });
var s5 = n(475358),
    s4 = n(28647),
    s6 = n(793650);
function s8(e) {
    let { children: t } = e;
    return t([sZ.Q_.MESSAGE, sZ.Q_.NAVIGATION, sZ.Q_.DND, sZ.Q_.CHAT, sZ.Q_.VOICE_AND_VIDEO, sZ.Q_.MISCELLANEOUS]);
}
function s7(e) {
    let { showHeader: t = !0 } = e,
        n = W()((0, sZ.Bx)())
            .filter((e) => e.description !== U.intl.string(U.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, p.jsxs)(Z.B, {
        gap: 48,
        children: [
            (0, p.jsx)(n7.n, {
                label: t ? U.intl.string(U.t.Lz5KHI) : void 0,
                children: (0, p.jsx)("div", {
                    className: s6.jh,
                    children: (0, p.jsxs)("div", {
                        className: s6.yZ,
                        children: [
                            (0, p.jsx)(Q.E, { variant: "text-md/normal", children: U.intl.string(U.t.sMWLBj) }),
                            (0, p.jsx)("div", {
                                className: s6.DM,
                                children: (0, p.jsx)(s5.e, { shortcut: s4.z.binds["0"], className: s6.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, p.jsx)(s8, {
                children: (e) =>
                    (0, p.jsx)(p.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, sZ.Gm)(e),
                                s = (0, sZ.zF)(e),
                                l = n[e];
                            return (0, p.jsx)(
                                n7.n,
                                {
                                    label: i,
                                    description: s,
                                    children: (0, p.jsx)("div", {
                                        className: s6.jh,
                                        children: l.map((e, t) =>
                                            (0, p.jsxs)(
                                                T.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, p.jsx)(su.c, {}),
                                                        (0, p.jsxs)("div", {
                                                            className: s6.yZ,
                                                            children: [
                                                                (0, p.jsx)(Q.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, p.jsx)("div", {
                                                                    className: s6.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, p.jsx)(
                                                                            s5.e,
                                                                            { shortcut: e, className: s6.LE },
                                                                            e,
                                                                        ),
                                                                    ),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                },
                                                e.description,
                                            ),
                                        ),
                                    }),
                                },
                                t,
                            );
                        }),
                    }),
            }),
        ],
    });
}
let s9 = (0, E.E2)(h.X.DEFAULT_KEYBINDS_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.Lz5KHI)],
        Component: () => (0, p.jsx)(s7, { showHeader: !1 }),
    }),
    le = (0, E.zD)(h.X.GAME_MODE_ENABLED_SETTING, {
        useTitle: () => U.intl.string(eL.default.rea2Ar),
        useSubtitle: () => U.intl.string(eL.default.DwBO0x),
        useValue: () => (0, f.bG)([i2.A], () => i2.A.isEnabledFor(!0)),
        setValue: (e) => {
            (td.default.track(I.HAw.GAME_MODE_TOGGLED, { enabled: e, running_game_id: i2.A.runningGameId }),
                ts.h.dispatch({ type: "GAME_MODE_SET_ENABLED", enabled: e }));
        },
    });
var lt = n(19575),
    ln = n(546385);
let li = (0, E.E2)(h.X.HARDWARE_ACCELERATION, {
    usePredicate: () => nf.Av && !(0, nf.cX)(),
    useSearchTerms: () => [U.intl.string(U.t["/HIxyY"]), U.intl.string(U.t.B0hqpb)],
    Component: function () {
        let [e] = T.useState(() => lt.Ay.getEnableHardwareAcceleration()),
            t = U.intl.string(U.t["/HIxyY"]),
            n = U.intl.string(U.t.B0hqpb);
        return (0, p.jsxs)(Z.B, {
            children: [
                (0, p.jsx)(t8.d, { label: t, description: n, checked: e, onChange: ls }),
                !e && (0, p.jsx)(ln.A, { look: ln.k.WARNING, children: U.intl.string(U.t.j7S6IX) }),
            ],
        });
    },
});
function ls(e) {
    let t = e ? U.intl.format(U.t.LYXRxL, {}) : U.intl.format(U.t.uDP3Kz, {});
    (0, n8.A)({
        title: U.intl.string(U.t.aqpAvn),
        subtitle: t,
        confirmText: U.intl.string(U.t.vT7ckk),
        onConfirm: () => {
            lt.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let ll = (0, e_.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function lr() {
    let e = await lt.Ay.getOpenOnStart(),
        t = await lt.Ay.getSetting("START_MINIMIZED", !1),
        n = await lt.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    ll.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
}
let la = (0, E.zD)(h.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => U.intl.string(U.t["3BeZti"]),
        usePredicate: () => nf.Av && !(0, nf.cX)(),
        useValue: () => ll.useState((e) => e.openOnStartup),
        setValue: function (e) {
            (ll.setState({ openOnStartup: e }), lt.Ay.send("TOGGLE_OPEN_ON_STARTUP", e));
        },
        initialize: () => {
            lt.Ay.getOpenOnStart().then((e) => ll.setState({ openOnStartup: e }));
        },
    }),
    lo = (0, E.zD)(h.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => U.intl.string(U.t.dJ5MUh),
        useSubtitle: () => U.intl.string(U.t.nQavHr),
        usePredicate: () => nf.Av && !(0, nf.cX)(),
        useValue: () => ll.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            (ll.setState({ minimizeToTray: e }), lt.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e));
        },
        initialize: () => {
            lt.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => ll.setState({ minimizeToTray: e }));
        },
    }),
    lu = (0, E.zD)(h.X.OS_START_MINIMIZED, {
        useTitle: () => U.intl.string(U.t.GfBL83),
        useSubtitle: () => U.intl.string(U.t.XGyhhc),
        usePredicate: () => (0, nf.uF)(),
        useValue: () => ll.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            (ll.setState({ startMinimized: e }), lt.Ay.send("TOGGLE_START_MINIMIZED", e));
        },
        useDisabled: () => !ll.useState((e) => e.openOnStartup),
        initialize: () => {
            lt.Ay.getSetting("START_MINIMIZED", !1).then((e) => ll.setState({ startMinimized: e }));
        },
    });
var ld = n(61628);
let lc = new Set(["failure", "unknown"]),
    lg = (0, E.E2)(h.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [U.intl.string(U.t.roHq80)],
        Component: function () {
            let [e, t] = T.useState(!1),
                [n, i] = T.useState(() => (0, ss.TC)()),
                s = (0, f.bG)([i9.Ay], () => i9.Ay.getSystemServiceStatus("input-service")),
                l = T.useCallback(async () => {
                    (t(!0),
                        n ? await (0, ss.z8)("windows-settings") : await (0, ss.sL)("windows-settings"),
                        t(!1),
                        i((0, ss.TC)()));
                }, [n]);
            return (0, p.jsxs)("div", {
                className: ld.q,
                children: [
                    (0, p.jsxs)("div", {
                        className: ld.L,
                        children: [
                            (0, p.jsxs)(Z.B, {
                                direction: "horizontal",
                                children: [
                                    (0, p.jsx)(Q.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: U.intl.string(U.t.roHq80),
                                    }),
                                    n &&
                                        (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                (0, p.jsx)(Q.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, p.jsx)(Q.E, {
                                                    variant: "text-md/medium",
                                                    color:
                                                        "running" === s.state
                                                            ? "text-feedback-positive"
                                                            : lc.has(s.state)
                                                              ? "text-feedback-critical"
                                                              : "text-feedback-warning",
                                                    children: (function (e) {
                                                        switch (e.state) {
                                                            case "unknown":
                                                                return U.intl.string(U.t["KW+nqT"]);
                                                            case "disabled":
                                                                return U.intl.string(U.t["Q/wAF7"]);
                                                            case "disconnected":
                                                                return U.intl.string(U.t.Xvs9IM);
                                                            case "initializing":
                                                                return U.intl.string(U.t.h4qz8W);
                                                            case "connecting":
                                                                return U.intl.string(U.t.fSu9XF);
                                                            case "handshaking":
                                                                return U.intl.string(U.t["00aYLJ"]);
                                                            case "running":
                                                                return U.intl.string(U.t["54TB7Z"]);
                                                            case "waiting-for-retry":
                                                                return U.intl.string(U.t["0FONwi"]);
                                                            case "failure":
                                                                return U.intl.string(U.t.Ic0nkd);
                                                            default:
                                                                (0, ig.xb)(e.state);
                                                        }
                                                    })(s),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, p.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: U.intl.format(U.t["8CAL+D"], {
                                    helpCenterLink: eC.A.getArticleURL(I.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                        ],
                    }),
                    (0, p.jsx)(v.$, {
                        variant: n ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: l,
                        text: n ? U.intl.string(U.t.pAwbdL) : U.intl.string(U.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: ss.XQ,
    });
var lm = n(687813),
    lA = n(562708),
    lE = n(858899),
    lh = n(384077);
async function lx() {
    try {
        await lS();
    } catch {
        (0, lE.P0)({ text: U.intl.string(U.t["8ihs9i"]), variant: "critical" });
    }
}
async function lS() {
    var e;
    let t = nN.A.tracing;
    if (null == t) return;
    (0, lE.P0)({ text: U.intl.string(U.t.qGRW8d) });
    let [n, i, s] = await Promise.all([
            t.capturePerformanceTrace({ durationMs: 3e4 }),
            nN.A.processUtils.getSystemInfo(),
            nN.A.processUtils.getSystemMetrics((0, lh.u)()),
        ]),
        l = {
            captured_at: n.startedAtISO,
            duration_ms: n.durationMs,
            categories: n.categories,
            ...(0, lA.getSuperProperties)(),
            native_build_number: nN.A.app.getBuildNumber(),
        },
        r = {
            systemInfo: i,
            systemMetrics: s,
            cumulativeCpuUsage: nN.A.processUtils.getCumulativeCPUUsage() ?? null,
            processTypeCpuUsage: nN.A.processUtils.getCpuUsageElectronProcessTypeDetails() ?? null,
        },
        a = await ((e = {
            "trace.json": n.traceBytes,
            "system_info.json": (0, lm._u)(JSON.stringify(r, null, 2)),
            "metadata.json": (0, lm._u)(JSON.stringify(l, null, 2)),
        }),
        new Promise((t, n) => {
            (0, lm.yU)(e, { level: 6 }, (e, i) => (null != e ? n(e) : t(i)));
        })),
        o = `Discord-Trace-${n.startedAtISO.replace(/:/g, "-").replace(/\..*$/, "")}.zip`,
        { filePath: u } = await t.saveTraceToDownloads(a, o);
    (nN.A.fileManager.showItemInFolder(u), (0, lE.P0)({ text: U.intl.string(U.t.gpCRFS), variant: "success" }));
}
let lp = (0, E.Tf)(h.X.CAPTURE_PERFORMANCE_TRACE, {
    useTitle: () => U.intl.string(U.t.o6Qr6n),
    useSubtitle: () => U.intl.string(U.t.OuGtH8),
    useLabel: () => U.intl.string(U.t.bm1WjO),
    usePredicate: () => nf.Av && nN.A?.tracing?.capturePerformanceTrace != null,
    onClick: () => {
        (0, n8.A)({
            title: U.intl.string(U.t.o6Qr6n),
            subtitle: U.intl.string(U.t.JEHHJ1),
            confirmText: U.intl.string(U.t.bm1WjO),
            onConfirm: () => {
                ((0, tH.default)(), lx());
            },
        });
    },
});
function lT() {
    ts.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
var lf = n(287809);
let lI = (0, E.Tf)(h.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        lT();
    },
});
var l_ = n(114129),
    lN = n(442325),
    lC = n(858760);
let ly = (0, E.zD)(h.X.ENABLE_TABS_EXPERIENCE, {
        useTitle: () => "Enable tabs experience",
        useSubtitle: () =>
            "Open channels as browser-style tabs in the title bar, each with its own back/forward history.",
        usePersistentBadge: () => ({ badgeType: S.Xi.BETA }),
        usePredicate: () => lC.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, nf.xl)(),
        useValue: () => (0, f.bG)([lN.A], () => lN.A.isUserOptedIn()),
        setValue: l_.lj,
    }),
    lb = (0, E.zZ)(h.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => U.intl.string(U.t["8/udY0"]),
        buildLayout: () => [lI, lp, ly],
    }),
    lv = (0, E.zZ)(h.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => U.intl.string(U.t.cg6ltt),
        buildLayout: () => [la, lu, lo, li],
        usePredicate: () => nf.Av && ((0, nf.uF)() || (0, nf.j9)()),
        initialize: () => {
            lr();
        },
    }),
    lj = (0, E.zZ)(h.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["069nVT"]),
        useSubtitle: () => U.intl.string(U.t.T4LZVL),
        buildLayout: () => [s3],
        initialize: () => (iJ.A.enableAll(!1), () => iJ.A.enableAll(!0)),
        useInlineNotice: function () {
            return nf.Av
                ? {
                      type: S.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, p.jsxs)(Z.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, p.jsx)(i$.w, {
                                      type: "info",
                                      message: U.intl.string(U.t["5pkmHa"]),
                                      role: "none",
                                  }),
                                  (0, p.jsx)(so, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            nf.Av
                ? {
                      type: S.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: S.UV.BUTTON,
                              text: U.intl.string(U.t.zk6Xbs),
                              variant: "secondary",
                              icon: iq.j,
                              onClick: () => iJ.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    lO = (0, E.zZ)(h.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.Lz5KHI),
        buildLayout: () => [s9],
    }),
    lL = (0, E.zZ)(h.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => U.intl.string(U.t["+XZgmA"]),
        usePredicate: () => nf.Av && ((0, nf.uF)() || (0, nf.j9)()),
        buildLayout: () => [lg],
    }),
    lR = (0, E.zZ)(h.X.SYSTEM_GAME_MODE_CATEGORY, {
        useTitle: () => U.intl.string(eL.default.QG0axY),
        usePredicate: () =>
            (0, f.bG)(
                [i2.A, i0.A],
                () =>
                    e6.isPlatformEmbedded &&
                    i2.A.hasDetectedGame &&
                    (0, i1.v)({ location: "GameModeCategory" }).enabled,
            ),
        buildLayout: () => [le],
    }),
    lD = (0, E.t_)(h.X.SYSTEM_PANEL, {
        useTitle: () => U.intl.string(U.t["VJ/qKo"]),
        buildLayout: () => [lv, lj, lO, lL, lR, lb],
    }),
    lP = (0, E.i4)(h.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["VJ/qKo"]),
        icon: iQ.F,
        buildLayout: () => [lD],
    });
var lG = n(831544),
    lM = n(922795),
    lU = n(212245),
    lV = n(329551),
    lk = n(285918),
    lw = n(312987),
    lF = n(952572),
    lB = n(382003);
let lz = (0, E.E2)(h.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.lZTUPs)],
        usePredicate: lF.A,
        Component: function () {
            let e = (0, lU.p)(),
                t = T.useRef(!1),
                n = (0, f.bG)([si.Ay], () => si.Ay.getVideoDeviceId()),
                [i, s] = T.useState((0, lV.i)(lf.default.getCurrentUser())),
                l = T.useRef(i);
            return (
                T.useEffect(
                    () => () => {
                        t.current && (0, lk._C)(l.current);
                    },
                    [],
                ),
                (0, p.jsx)(lB.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: function (n) {
                        ((t.current = !0), (l.current = n), s(n), (0, lw.gB)(n, { location: e.location }).catch(I.tEg));
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    lY = (0, E.zD)(h.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => U.intl.string(U.t["3Ppr1h"]),
        useSubtitle: () => U.intl.string(U.t.WNbX4O),
        useValue: M.bm.useSetting,
        setValue: (e) => {
            (M.bm.updateSetting(e), td.default.track(I.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
        },
    });
var lX = n(625841),
    lH = n(74848),
    lW = n(204050);
let lK = (0, e_.D)(() => ({ previewEnabled: !1 })),
    lZ = (0, E.E2)(h.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.FsQ3OR)],
        Component: function () {
            let e = (0, f.bG)([si.Ay], () => si.Ay.isVideoAvailable()),
                { id: t } = (0, lH.x5)(sz.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, ez.Ay)();
            return (0, p.jsx)(lX.U, {
                label: U.intl.string(U.t.FsQ3OR),
                deviceType: sz.oh.VIDEO_INPUT,
                location: "UserSettingsCameraSelect",
                isDisabled: !e,
                helperText: (0, lW.p)()
                    ? U.intl.format(U.t.aJYgRt, {
                          onCameraSettingsClick: () => {
                              (lK.setState({ previewEnabled: !1 }),
                                  window.open((0, lW.i)(t)),
                                  td.default.track(I.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n }));
                          },
                      })
                    : void 0,
            });
        },
    });
var lq = n(745317),
    lQ = n(9219);
let l$ = (0, E.E2)(h.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [U.intl.string(U.t.JIf4v7)],
        Component: function () {
            let e = si.Ay.getCameraComponent(),
                t = (0, f.bG)([si.Ay], () => si.Ay.getVideoDeviceId()),
                n = lK.useField("previewEnabled"),
                i = (0, f.bG)([si.Ay], () => si.Ay.isVideoAvailable());
            return ((0, eI.l0)(() => {
                lK.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, p.jsx)("div", {
                      className: lQ.T9,
                      children: (0, p.jsxs)("div", {
                          className: lQ.Xi,
                          children: [
                              (0, p.jsxs)("div", {
                                  className: lQ.UI,
                                  children: [
                                      (0, p.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, p.jsx)(lq.kE, {}),
                                  ],
                              }),
                              (0, p.jsx)(lq.eK, {}),
                          ],
                      }),
                  })
                : (0, p.jsx)("div", {
                      className: lQ.T9,
                      children: (0, p.jsx)(sE.m, {
                          text: i ? null : U.intl.string(U.t["8jSzSe"]),
                          children: (0, p.jsx)(v.$, {
                              variant: "primary",
                              text: U.intl.string(U.t.JIf4v7),
                              onClick: () => lK.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    lJ = (0, E.zZ)(h.X.CAMERA_CATEGORY, {
        useTitle: () => U.intl.string(U.t.uje3P9),
        usePredicate: () => (0, f.bG)([si.Ay], () => si.Ay.supports(sz.O5.VIDEO)),
        buildLayout: () => [l$, lY, lZ, lz],
    }),
    l0 = (0, E.zD)(h.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => U.intl.string(U.t.qFphsa),
        useSubtitle: () => U.intl.string(U.t.cQfwyY),
        usePredicate: function () {
            return (0, nf.j9)();
        },
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            (sS.default.setOpenH264Enabled(e),
                (0, n8.A)({
                    title: U.intl.string(U.t["9jf31O"]),
                    subtitle: U.intl.string(U.t["J2wg+X"]),
                    confirmText: U.intl.string(U.t.BddRzS),
                    onConfirm: () => nN.A.app.relaunch(),
                }));
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    l1 = (0, E.zD)(h.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => U.intl.string(U.t["r6K+TL"]),
        useSubtitle: () => U.intl.string(U.t["xl9+I6"]),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getAecDump());
        },
        setValue: sS.default.setAecDump,
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.isAecDumpSupported());
        },
    });
var l2 = n(139033),
    l3 = n(862482),
    l5 = n(640238),
    l4 = n(825484),
    l6 = n(144009),
    l8 = n(487329),
    l7 = n(353835);
let l9 = (0, e_.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function re() {
    let e = await nN.A.fileManager.getLogPath();
    nN.A.fileManager.showItemInFolder(e);
}
function rt(e) {
    (0, n8.A)({
        title: U.intl.string(U.t["7UXEF2"]),
        subtitle: U.intl.string(U.t.IYPrRl),
        confirmText: U.intl.string(U.t.BddRzS),
        onConfirm: () => sS.default.setDebugLogging(e),
    });
}
async function rn(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        (await si.Ay.getMediaEngine().writeAudioDebugState(),
            await l7.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, l6.a)(I.Umv.RTC),
            (e = U.intl.string(U.t["fKBB8+"])),
            (t = U.intl.string(U.t.BvyxE7)),
            (0, l2.A)({ title: e, subtitle: t }));
    } catch (l) {
        var i;
        let e, t, n, s;
        ((i = l.displayMessage),
            (e = U.intl.string(U.t.QZg0J7)),
            (t = i ?? U.intl.string(U.t.VzHcSm)),
            (n = (0, l8.B1)(l8.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = U.intl.formatToPlainString(U.t.ejOT95, { errorCode: n })),
            (0, sI.openModal)((n) =>
                (0, p.jsx)(l5.a, {
                    header: e,
                    confirmButtonColor: l3.$n.Colors.BRAND,
                    confirmText: U.intl.string(U.t.BddRzS),
                    ...n,
                    children: (0, p.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, p.jsx)(Q.E, { variant: "text-md/normal", children: t }),
                            (0, p.jsx)(Q.E, {
                                variant: "text-sm/semibold",
                                selectable: !0,
                                style: { marginTop: "auto" },
                                children: s,
                            }),
                        ],
                    }),
                }),
            ));
    } finally {
        n?.();
    }
}
async function ri() {
    await rn({
        onUploadStart: () => l9.setState({ isUploading: !0 }),
        onUploadFinish: () => l9.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let rs = (0, E.E2)(h.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [U.intl.string(U.t["726JHL"]), U.intl.string(U.t.EbwFfR), U.intl.string(U.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, f.bG)([si.Ay], () => si.Ay.supports(sz.O5.DEBUG_LOGGING));
        return nf.Av && e && null != nN.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, f.bG)([si.Ay], () => si.Ay.getDebugLogging()),
            t = l9.useField("isUploading"),
            n = l9.useField("isDisabled"),
            i = T.useId();
        return (0, p.jsxs)("fieldset", {
            children: [
                (0, p.jsx)(sh.A, { tag: "legend", id: i, children: U.intl.string(U.t["FjN+et"]) }),
                (0, p.jsxs)(Z.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, p.jsx)(t8.d, {
                            label: U.intl.string(U.t["726JHL"]),
                            description: U.intl.string(U.t["/7ak9Q"]),
                            checked: e,
                            onChange: rt,
                        }),
                        (0, p.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, p.jsxs)(l4.e, {
                                children: [
                                    (0, p.jsx)(v.$, {
                                        variant: "secondary",
                                        text: U.intl.string(U.t.EbwFfR),
                                        onClick: ri,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": U.intl.string(U.t.aY1OH2),
                                    }),
                                    (0, p.jsx)(v.$, {
                                        variant: "secondary",
                                        text: U.intl.string(U.t.nuPtYi),
                                        onClick: re,
                                        "aria-label": U.intl.string(U.t["L/hFOe"]),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
});
var rl = n(233545),
    rr = n(58663),
    ra = n(412780);
function ro() {
    return (0, f.bG)([lf.default, si.Ay], () => {
        let e = lf.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === lt.Ay.releaseChannel || "development" === lt.Ay.releaseChannel,
            i = si.Ay.supports(sz.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let ru = (0, E.zD)(h.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => U.intl.string(U.t.U4FgFK),
        useSubtitle: () => U.intl.string(U.t.Lm72RU),
        useValue: function () {
            return (0, f.bG)([ra.Ay], () => ra.Ay.shouldRecordNextConnection());
        },
        setValue: rr.A,
        usePredicate: ro,
    }),
    rd = (0, E.Tf)(h.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => U.intl.string(U.t.nJnOHO),
        useLabel: () => U.intl.string(U.t["3xjX0U"]),
        onClick: rl.YW,
        usePredicate: ro,
    });
var rc = n(926919),
    rg = n(111162),
    rm = n(855302);
let rA = (0, E.zD)(h.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => U.intl.string(U.t["0CEP6e"]),
        useSubtitle: () => U.intl.string(U.t["kBXuW+"]),
        useValue: function () {
            return (0, f.bG)([rg.default], () => rg.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = rg.default.isStreamInfoOverlayEnabled;
            ((0, rm.A)("stream_info_overlay_enabled", e, t), (0, rc.x)({ isStreamInfoOverlayEnabled: e }));
        },
        usePredicate: function () {
            return M.Q_.useSetting();
        },
    }),
    rE = (0, E.bd)(h.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? U.intl.string(U.t["/B4I8H"]) : U.intl.string(U.t.BTlsWH)),
        useCollapsedSubtitle: () => U.intl.string(U.t.la1Ys4),
        buildLayout: () => [rA, l1, ru, rd, rs],
    });
function rh(e, t, n) {
    (0, n8.A)({ title: e, subtitle: t, confirmText: U.intl.string(U.t.BddRzS), onConfirm: n });
}
let rx = (0, E.Tf)(h.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => U.intl.string(U.t.SXfv1v),
        useSubtitle: () => U.intl.string(U.t["buA5/q"]),
        useLabel: () => U.intl.string(U.t.yBZMsQ),
        onClick: function () {
            rh(U.intl.string(U.t["4iKQ/3"]), U.intl.string(U.t.sQ42iT), sS.default.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    rS = (0, E.zZ)(h.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.UDAU9K),
        buildLayout: () => [l0, rE, rx],
    });
var rp = n(736056),
    rT = n(360729),
    rf = n(446243),
    rI = n(558076),
    r_ = n(977241);
let rN = (0, E.zD)(h.X.GUILD_ROOMS_REMEMBER_LAST_VIEW_SETTING, {
        useTitle: () => U.intl.string(r_.default.qYzpsI),
        useSubtitle: () => U.intl.string(r_.default["+vMoL1"]),
        useValue: () => (0, f.bG)([rI.A], () => rI.A.getRememberVideoOverlayVisibility()),
        setValue: (e) => (0, rf.Ft)(e),
    }),
    rC = (0, E.zZ)(h.X.GUILD_ROOMS_CATEGORY, {
        useTitle: () => U.intl.string(r_.default.wRLmM0),
        usePredicate: function () {
            let e = (0, f.yK)([sL.A], () => sL.A.getGuildIds()),
                { loaded: t, override: n } = (0, f.cf)([rp.A], () => ({
                    loaded: rp.A.getLoadedGuildExperiment(rT.vJ),
                    override: rp.A.getExperimentOverrideDescriptor(rT.vJ),
                }));
            return (0, T.useMemo)(
                () =>
                    (null != t || null != n) &&
                    e.some(
                        (e) =>
                            (0, rT.W8)(
                                { guildId: e, location: "useHasGuildRoomsEligibleGuild" },
                                { autoTrackExposure: !1 },
                            ).enabled,
                    ),
                [e, t, n],
            );
        },
        buildLayout: () => [rN],
    });
var ry = n(347481),
    rb = n(852712),
    rv = n(179172),
    rj = n(868162);
let rO = (0, E.zD)(h.X.VOICE_AUDIO_DEVICE_SUGGESTIONS_SETTING, {
        useTitle: () => U.intl.string(U.t.gF8HJo),
        useSubtitle: () => U.intl.string(U.t.cfrfyZ),
        useValue: function () {
            return (0, f.bG)([rj.A], () => !0 !== rj.A.getState().neverShowModal);
        },
        setValue: function (e) {
            rv.Bv(!e);
        },
        usePredicate: function () {
            return e6.isPlatformEmbedded;
        },
    }),
    rL = (0, E.zD)(h.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => U.intl.string(U.t.cUMdH0),
        useSubtitle: () => U.intl.string(U.t["6EjbvA"]),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            sS.default.setAutomaticGainControl(e, {
                page: I.liQ.USER_SETTINGS,
                section: I.JJy.SETTINGS_VOICE_AND_VIDEO,
            });
        },
        useDisabled: function () {
            return (0, f.bG)([si.Ay, ry.A], () => {
                let e = si.Ay.getInputDeviceId();
                return ry.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.isAutomaticGainControlSupported() && si.Ay.isInputProfileCustom());
        },
    }),
    rR = (0, E.sN)(h.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => U.intl.string(U.t.AlybXj),
        setValue: (e) =>
            sS.default.setAttenuation(
                e,
                si.Ay.getAttenuateWhileSpeakingSelf(),
                si.Ay.getAttenuateWhileSpeakingOthers(),
            ),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => si.Ay.getAttenuation(),
    }),
    rD = (0, E.zD)(h.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => U.intl.string(U.t["9dHxRY"]),
        useValue: () => (0, f.bG)([si.Ay], () => si.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => sS.default.setAttenuation(si.Ay.getAttenuation(), e, si.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rP = (0, E.zD)(h.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => U.intl.string(U.t.SMt0Gr),
        useValue: () => (0, f.bG)([si.Ay], () => si.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => sS.default.setAttenuation(si.Ay.getAttenuation(), si.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    rG = (0, E.FW)(h.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.oSdBvW),
        useSubtitle: () => U.intl.string(U.t["0A/8Rt"]),
        usePredicate: () => (0, f.bG)([si.Ay], () => si.Ay.supports(sz.O5.ATTENUATION)),
        buildLayout: () => [rR, rD, rP],
    }),
    rM = (0, E.zD)(h.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => U.intl.string(U.t.DFPXIG),
        useSubtitle: () => U.intl.string(U.t["UyRX+C"]),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            sS.default.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.showBypassSystemInputProcessing() && si.Ay.isInputProfileCustom());
        },
    }),
    rU = (0, E.zD)(h.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => U.intl.string(U.t.jrWHD3),
        useSubtitle: () => U.intl.string(U.t.YCCMkJ),
        useValue: function () {
            return (0, f.bG)([ex.Ay], () => !ex.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            ((0, rm.A)("switch_channel_warning_enabled", e, !ex.Ay.disableVoiceChannelChangeAlert),
                nY.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e }));
        },
    }),
    rV = (0, E.zD)(h.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => U.intl.string(U.t.BbESsg),
        useSubtitle: () => U.intl.string(U.t.LoOB1F),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => {
                let { vadUseKrisp: e } = si.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = si.Ay.getMode();
            sS.default.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, f.bG)(
                [si.Ay],
                () => si.Ay.getMode() !== I.TBI.VOICE_ACTIVITY || !si.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.isAdvancedVoiceActivitySupported() && si.Ay.isInputProfileCustom());
        },
    }),
    rk = (0, E.Hn)(h.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => U.intl.string(U.t.wVBHr0),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            rh(U.intl.string(U.t.uY7AcQ), U.intl.string(U.t.gBqik6), () => sS.default.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, f.cf)([si.Ay], () => ({
                legacyAudioSubsystemSupported: si.Ay.supports(sz.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: si.Ay.supports(sz.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: si.Ay.supports(sz.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return T.useMemo(() => {
                let i;
                return (
                    (i = [{ id: sz.rB.STANDARD, value: sz.rB.STANDARD, label: U.intl.string(U.t.dqb2JZ) }]),
                    e && i.push({ id: sz.rB.LEGACY, value: sz.rB.LEGACY, label: U.intl.string(U.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: sz.rB.EXPERIMENTAL, value: sz.rB.EXPERIMENTAL, label: U.intl.string(U.t.liQmtr) }),
                    n && i.push({ id: sz.rB.AUTOMATIC, value: sz.rB.AUTOMATIC, label: U.intl.string(U.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    rw = (0, E.zD)(h.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => U.intl.string(U.t.uancuJ),
        useSubtitle: () => U.intl.string(U.t.I1Eoqq),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getQoS());
        },
        setValue: function (e) {
            sS.default.setQoS(e);
        },
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.supports(sz.O5.QOS));
        },
    }),
    rF = (0, E.zD)(h.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => U.intl.string(U.t["4rsOPQ"]),
        useSubtitle: () => U.intl.string(U.t.jtiiCw),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            sS.default.setSilenceWarning(e);
        },
        usePredicate: function () {
            return e6.isPlatformEmbedded;
        },
    }),
    rB = (0, E.bd)(h.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? U.intl.string(U.t.KHsSWK) : U.intl.string(U.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            t_(h.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, f.bG)([si.Ay], () => si.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [rL, rV, rM, rO, rF, rU, rG, rk, rw],
    }),
    rz = (0, E.zD)(h.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => U.intl.string(U.t.iWTwu6),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            sS.default.setEchoCancellation(e, { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, f.bG)([si.Ay, ry.A], () => {
                let e = si.Ay.getInputDeviceId();
                return ry.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.isInputProfileCustom());
        },
    });
var rY = n(205693),
    rX = n(451988),
    rH = n(475883),
    rW = n(9761);
let rK = (0, tZ.Ld)();
function rZ(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, p.jsx)("div", {
        role: "meter",
        className: iE()(rH.$I, n),
        id: i,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? U.intl.string(U.t.haLKZ0) : U.intl.string(U.t.X2hJL7),
        children: (0, p.jsx)("div", { className: iE()(rH.Jx, rH.NU, { [rH.zY]: t && !r, [rH.r9]: r }) }),
    });
}
function rq(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, f.cf)([si.Ay], () => ({
            threshold: si.Ay.getModeOptions().threshold,
            autoThreshold: si.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, f.bG)([si.Ay], () => si.Ay.getMode());
    return (0, p.jsx)("section", {
        className: iE()(rH.Mo, rH.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": s,
        children: (0, p.jsx)(q.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return ((t = -((100 - e) * 1)), void sS.default.setMode(o, { threshold: t, autoThreshold: a }));
            },
            barStyles: { background: n6.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: n6.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rK,
            disabled: l,
            children: (0, p.jsxs)("div", {
                className: iE()(rH.NU, rH.TL, rH.Jx, rW.bar),
                children: [
                    (0, p.jsx)("div", { className: iE()(rH.GS, rH.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, p.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let rQ = (0, E.E2)(h.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [U.intl.string(U.t["sqUm+k"]), U.intl.string(U.t.I1Zuq0), U.intl.string(U.t.nuFtHH)],
    usePredicate: () => (0, f.bG)([si.Ay], () => si.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, f.cf)([si.Ay], () => ({
                autoThreshold: si.Ay.getModeOptions().autoThreshold,
                disabled: si.Ay.getMode() !== sz.TB.VOICE_ACTIVITY,
            })),
            n = T.useCallback((e) => {
                let t = si.Ay.getMode(),
                    { threshold: n } = si.Ay.getModeOptions();
                sS.default.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, f.bG)([si.Ay], () => si.Ay.supports(sz.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = T.useState(-100),
                    [n, i] = T.useState(!1);
                function s(e, n) {
                    (t(e), i((n & sz.ME.VOICE) === sz.ME.VOICE));
                }
                return (
                    T.useEffect(() => {
                        let e = new rX.Ep();
                        return (
                            e.start(1e3, () => {
                                (si.Ay.getMediaEngine().on(rY.bg.VoiceActivity, s), e.stop());
                            }),
                            () => {
                                (si.Ay.getMediaEngine().removeListener(rY.bg.VoiceActivity, s), e.stop());
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            r = (0, f.bG)([si.Ay], () => si.Ay.isEnabled()),
            a = T.useMemo(
                () =>
                    !r &&
                    (0, p.jsx)("div", {
                        className: rH.B4,
                        children: (0, p.jsx)(i$.w, {
                            type: "warning",
                            message: U.intl.format(U.t["O13I+O"], { onEnableClick: () => sS.default.enable(!0) }),
                            role: "status",
                        }),
                    }),
                [r],
            ),
            o = T.useMemo(() => (e ? U.intl.string(U.t.JsbzjA) : U.intl.string(U.t.MLmyMY)), [e]),
            u = T.useId(),
            d = T.useId();
        return i
            ? (0, p.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, p.jsx)(sh.A, { tag: "legend", id: u, children: U.intl.string(U.t.GByLar) }),
                      (0, p.jsx)(sh.A, { id: d, children: o }),
                      (0, p.jsxs)(Z.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, p.jsx)(t8.d, {
                                  disabled: t,
                                  label: U.intl.string(U.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, p.jsx)(rZ, {
                                        isSpeaking: l,
                                        className: rH.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(rq, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, p.jsxs)(Z.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, p.jsx)(t6.D, {
                          label: U.intl.string(U.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, p.jsx)(rZ, {
                                        isSpeaking: l,
                                        className: rH.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(rq, {
                                        volume: s,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    }),
                      }),
                      a,
                  ],
              });
    },
});
var r$ = n(366010);
let rJ = n(993830),
    r0 = n(413142),
    r1 = { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO };
function r2() {
    let e = (0, f.bG)([nH.A], () => (0, r$.q)(nH.A.theme));
    return (0, p.jsx)("img", { src: e ? rJ : r0, width: 48, height: 32, alt: "" });
}
let r3 = (0, E.E2)(h.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [U.intl.string(U.t.t8Qhib), U.intl.string(U.t.hmfkCi)],
    usePredicate: function () {
        return (0, f.bG)([si.Ay], () => si.Ay.isInputProfileCustom() && si.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = T.useCallback((e) => {
                (sS.default.setNoiseCancellation("KRISP" === e, r1),
                    sS.default.setNoiseSuppression("STANDARD" === e, r1));
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: s,
            } = (0, f.cf)([si.Ay], () => ({
                noiseCancellation: si.Ay.getNoiseCancellation(),
                noiseSuppression: si.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: si.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: si.Ay.isNoiseCancellationSupported(),
            })),
            l = T.useMemo(() => {
                let e = [];
                return (
                    s && e.push({ id: "krisp", label: U.intl.string(U.t.rdoNzt), value: "KRISP" }),
                    i && e.push({ id: "standard", label: U.intl.string(U.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: U.intl.string(U.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [s, i]),
            r = s
                ? U.intl.format(U.t["1q5aTp"], { helpArticle: eC.A.getArticleURL(I.MVz.NOISE_SUPPRESSION) })
                : U.intl.string(U.t.OWKjw5);
        return (0, p.jsxs)(Z.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, p.jsx)(sg.l, {
                    label: U.intl.string(U.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, p.jsx)(r2, {}),
            ],
        });
    },
});
var r5 = n(934729),
    r4 = n(621380);
let r6 = !nf.Av;
function r8() {
    return (0, f.bG)([si.Ay], () => si.Ay.getMode() === sz.TB.PUSH_TO_TALK);
}
let r7 = (0, E.zD)(h.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nf.Av ? U.intl.string(U.t.tG4Np5) : U.intl.string(U.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, f.bG)([si.Ay], () => si.Ay.getMode());
        return T.useMemo(() => {
            if (!nf.Av && e === sz.TB.PUSH_TO_TALK)
                return U.intl.format(U.t["VHI4+Y"], { onDownloadClick: () => (0, r5._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, f.bG)([si.Ay], () => si.Ay.getActiveInputProfile() !== r4.m.STUDIO);
    },
    useValue: function () {
        return (0, f.bG)([si.Ay], () => si.Ay.getMode() === sz.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        ((t = e ? sz.TB.PUSH_TO_TALK : sz.TB.VOICE_ACTIVITY),
            (i = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === sz.TB.PUSH_TO_TALK &&
                r6 &&
                (0, sI.openModalLazy)(async () => {
                    let { Alert: e } = await Promise.all([n.e("844331"), n.e("21553")]).then(n.bind(n, 381512));
                    return (t) =>
                        (0, p.jsx)(e, {
                            title: U.intl.string(U.t.Kdt0Gb),
                            confirmText: U.intl.string(U.t["1WjMbC"]),
                            cancelText: U.intl.string(U.t.BddRzS),
                            onConfirm: () => (0, r5._)("PTT Limited Modal"),
                            body: U.intl.string(U.t.NIozvt),
                            ...t,
                        });
                }),
            sS.default.setMode(t, void 0, void 0, { analyticsLocations: i }));
    },
    useSearchTerms: () => [U.intl.string(U.t["pS+K2L"]), U.intl.string(U.t.nuFtHH)],
});
var r9 = n(484599);
function ae(e) {
    let { shortcut: t } = e,
        n = (0, f.bG)([sc.Ay], () => sc.Ay.isWaylandPortalActive()),
        i = (0, f.bG)([sc.Ay], () => {
            let e = sc.Ay.getKeybindForAction(I.hCu.PUSH_TO_TALK, !0);
            return null != e ? sc.Ay.getWaylandPortalShortcutState(e.id) : null;
        });
    return n && 0 !== t.length
        ? sc.Ay.isWaylandPortalEligibleShortcut(t)
            ? null == i || i.bound
                ? null
                : (0, p.jsx)(i$.w, { type: "warning", message: U.intl.string(U.t.PTCrUP), role: "status" })
            : (0, p.jsx)(i$.w, { type: "warning", message: U.intl.string(U.t.J0m3aK), role: "status" })
        : null;
}
let at = (0, E.E2)(h.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["pS+K2L"]), U.intl.string(U.t.nuFtHH)],
        usePredicate: r8,
        Component: function () {
            let e = (0, f.bG)([si.Ay], () => {
                    let { shortcut: e } = si.Ay.getModeOptions();
                    return e;
                }),
                t = U.intl.format(U.t.HVvn5T, {
                    onClick: () => (0, ng.openUserSettings)(h.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, p.jsx)(t6.D, {
                label: U.intl.string(U.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, p.jsxs)("div", {
                    className: r9.e,
                    children: [
                        (0, p.jsx)(sp.A, {
                            defaultValue: e,
                            onChange: (e) => {
                                let t = sc.Ay.getKeybindForAction(I.hCu.PUSH_TO_TALK, !0);
                                (null != t &&
                                    (0, sd.uL)(t.id, t.shortcut, e, sc.Ay.getWaylandPortalShortcutState(t.id)),
                                    sS.default.setMode(I.TBI.PUSH_TO_TALK, { shortcut: e }));
                            },
                        }),
                        (0, p.jsx)(ae, { shortcut: e }),
                    ],
                }),
            });
        },
    }),
    an = (0, E.sN)(h.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => U.intl.string(U.t.GCNMM8),
        useSearchTerms: () => [U.intl.string(U.t["pS+K2L"]), U.intl.string(U.t.nuFtHH)],
        setValue: function (e) {
            sS.default.setMode(I.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: I.IjB,
        getInitialValue: function () {
            let { delay: e } = si.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: r8,
    });
var ai = n(833473),
    as = n(844981),
    al = n(798705);
function ar() {
    return (0, as.Ay)("VoiceSettings");
}
let aa = (0, E.zD)(h.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => U.intl.string(al.default.LGDPhA),
        useSubtitle: function () {
            let e = ar();
            if ((0, as.Xt)(e))
                return e === as.L3.BLOCKED_MONO_OUTPUT
                    ? U.intl.string(al.default.rOXfEw)
                    : U.intl.string(al.default.O7Aa3Y);
        },
        useValue: function () {
            return (0, f.bG)([ai.A], () => ai.A.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            sS.default.setSpatialAudio(e, [tw.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return ar() !== as.L3.HIDDEN;
        },
        useDisabled: function () {
            return (0, as.Xt)(ar());
        },
    }),
    ao = (0, E.Qx)(h.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => U.intl.string(U.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, rb._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [U.intl.string(U.t.nuFtHH), U.intl.string(U.t.VZPR0R), U.intl.string(U.t.cjPbpT)],
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getActiveInputProfile() ?? r4.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sS.default.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, rb.d)({ location: "InputProfileCategory" });
            return [
                { value: r4.m.VOICE_ISOLATION, name: U.intl.string(U.t.cjPbpT), desc: U.intl.string(U.t.CzhvnE) },
                { value: r4.m.STUDIO, name: U.intl.string(U.t.VZPR0R), desc: U.intl.string(U.t.ZaJksS) },
                { value: r4.m.CUSTOM, name: U.intl.string(U.t["N/PQjv"]), desc: U.intl.string(U.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    au = (0, E.zZ)(h.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, f.bG)([ry.A, si.Ay], () => {
                let e = si.Ay.getInputDeviceId();
                return (
                    (ry.A.hasEchoCancellation(e) || ry.A.hasNoiseSuppression(e) || ry.A.hasAutomaticGainControl(e)) &&
                    si.Ay.isInputProfileCustom()
                );
            });
            return T.useMemo(() => {
                if (e)
                    return {
                        type: S.lT.INLINE_NOTICE,
                        noticeType: "info",
                        role: "status",
                        text: U.intl.string(U.t["/Whuzi"]),
                    };
            }, [e]);
        },
        buildLayout: () => [ao, rQ, r3, rz, aa, r7, at, an, rB],
    });
var ad = n(403581),
    ac = n(983851),
    ag = n(687021),
    am = n(128450),
    aA = n(796774),
    aE = n(209932),
    ah = n(813564),
    ax = n(984813),
    aS = n(922016),
    ap = n(305866),
    aT = n(22231),
    af = n(158045),
    aI = n(792348),
    a_ = n(674168),
    aN = n(476254),
    aC = n(817232),
    ay = n(647451);
function ab(e) {
    let { onSelect: t } = e,
        [n, i] = T.useState(!1),
        s = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
        l = af.Ay.canUseCustomCallSounds(s),
        r = T.useRef(null);
    function a(e) {
        l && (i(!1), t?.(e));
    }
    return (0, p.jsx)(aS.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, p.jsx)(ap.l, {
                children: (0, p.jsx)(aN.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, p.jsx)(a_.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, p.jsx)(aC.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: U.intl.string(U.t.uOe0Az),
                children: (0, p.jsx)(aT.PencilIcon, { size: "md", color: "currentColor", className: ay.Wo }),
            }),
    });
}
function av(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, aI.A)(t, null),
        i =
            0 === (0, ah.wH)()
                ? U.intl.string(U.t.OASXjt)
                : U.intl.formatToPlainString(U.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, p.jsx)(aC.dT, {
        onClick: n,
        text: i,
        children: (0, p.jsx)(ac.H, { size: "md", color: "currentColor", className: ay.wg }),
    });
}
function aj(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, p.jsxs)("div", {
        className: ay.D6,
        children: [
            (0, p.jsxs)("div", {
                className: ay.kL,
                children: [
                    a && (0, p.jsx)(tM.A, { emojiId: l, emojiName: r, className: ay.Zg }),
                    (0, p.jsx)(Q.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: ay.dj,
                        children:
                            null == t
                                ? U.intl.string(U.t.PoWNfe)
                                : n
                                  ? U.intl.format(U.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: function (e) {
                                            return (0, p.jsx)(Q.E, {
                                                variant: "text-xs/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: e,
                                            });
                                        },
                                    })
                                  : t.name,
                    }),
                    s
                        ? (0, p.jsx)(av, { sound: t })
                        : (0, p.jsx)(ac.H, { size: "md", color: "currentColor", className: ay.Gk }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: ay.kL,
                children: [
                    (0, p.jsx)(ab, { onSelect: i }),
                    s &&
                        !n &&
                        (0, p.jsx)(aC.dT, {
                            onClick: () => i(null),
                            text: U.intl.string(U.t.jmtcGA),
                            children: (0, p.jsx)(sA.TrashIcon, {
                                size: "md",
                                color: n6.A.unsafe_rawColors.RED_400.css,
                                className: ay.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var aO = n(617617);
n(980504);
var aL = n(806050);
function aR(e) {
    return (0, f.bG)([aE.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return aE.A.getSound("0" === t ? "0" : t, n);
    });
}
function aD(e) {
    let { guildId: t } = e,
        n = (0, f.bG)([aO.A], () => aO.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = aR(n);
    if (null == n || null == i) return null;
    let { emojiId: s, emojiName: l } = i,
        r = null != s || null != l;
    return (0, p.jsxs)("div", {
        className: aL.Io,
        children: [
            r
                ? (0, p.jsx)(tM.A, { emojiId: s, emojiName: l, className: aL.nW })
                : (0, p.jsx)(ac.H, { size: "md", color: "currentColor", className: aL.nW }),
            (0, p.jsx)(Q.E, { className: aL.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let aP = (0, E.E2)(h.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [U.intl.string(U.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, ez.Ay)(),
            [t, n] = T.useState("0"),
            i = (0, ax.mz)(t),
            s = aR(i),
            l = i?.type === ax.PP.GLOBAL,
            r = (0, f.bG)([aE.A], () => aE.A.hasFetchedAllSounds()) && null != i && null == s;
        (T.useEffect(() => {
            r && (0, ah.ND)({ location: e });
        }, [r, e]),
            T.useEffect(() => {
                (0, aA.E7)();
            }, []));
        let a = T.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, p.jsx)(aD, { guildId: e.value }) : null;
        }, []);
        return (0, p.jsxs)(n7.n, {
            label: U.intl.string(U.t.nzUc3B),
            description: U.intl.format(U.t.u9RWmv, { helpdeskArticle: eC.A.getArticleURL(I.MVz.SOUNDBOARD) }),
            children: [
                (0, p.jsx)(ag.A, {
                    guildId: t,
                    className: aL.Dt,
                    globalOption: { label: U.intl.string(U.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, p.jsxs)(am.A, {
                    title: U.intl.format(U.t.I2TsYN, {
                        nitroWheelHook: () => (0, p.jsx)(ad.t, { size: "md", color: "currentColor", className: aL.ax }),
                    }),
                    children: [
                        (0, p.jsx)(aj, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (n) => {
                                null == n ? (0, ah.Dv)(t, e) : (0, ah.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, p.jsx)("div", {
                                className: aL.lm,
                                children: (0, p.jsx)(i$.w, {
                                    type: "warning",
                                    message: U.intl.string(U.t.WkPsFR),
                                    role: "status",
                                }),
                            }),
                    ],
                }),
            ],
        });
    },
});
var aG = n(824744);
let aM = (0, E.sN)(h.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => U.intl.string(U.t.kbFsAD),
    useSubtitle: () => U.intl.format(U.t.BPbGq7, { helpCenterArticle: eC.A.getArticleURL(I.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, aG.w)(e);
        (0, aA.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, ah.wH)();
        return (0, aG.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var aU = n(864145);
let aV = (0, E.sN)(h.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => U.intl.string(U.t["2JbvKw"]),
        useSubtitle: () => U.intl.string(U.t.INenzY),
        setValue: function (e) {
            let t = (0, aG.w)(e);
            M.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = M.HO.getSetting();
            return (0, aG.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, aU.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    ak = (0, E.zZ)(h.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => U.intl.string(U.t.ABjMWI),
        buildLayout: () => [aM, aV, aP],
    });
var aw = n(803224),
    aF = n(552122);
let aB = (0, E.E2)(h.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [U.intl.string(U.t.fgSHf8)],
        usePredicate: () => null != aF.A.useHolidaySoundpack(),
        Component: () =>
            (0, p.jsx)(Q.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: U.intl.format(U.t.Eup6Wv, {
                    onClick: () => (0, ng.openUserSettings)(h.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    az = (0, E.AK)(h.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.eyGEE4),
        useSearchTerms: () => [U.intl.string(U.t.eyGEE4)],
        destinationKey: h.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    aY = (0, E.gN)(h.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [az] });
var aX = n(264686);
let aH = (0, e_.D)(() => ({ currentPlayingSound: null }));
function aW() {
    let e = aH.getField("currentPlayingSound");
    (e?.stop(), aH.setState({ currentPlayingSound: null }));
}
function aK(e) {
    let t = aH.getField("currentPlayingSound");
    t?.stop();
    let n = (0, il.Ak)(e);
    aH.setState({ currentPlayingSound: n });
}
function aZ(e) {
    return (0, E.zD)(`${h.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => U.intl.format(U.t.OOiGCM, { onClick: () => aK(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, f.bG)([aw.A], () => aw.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = aw.A.getDisabledSounds().filter((t) => t !== e.sound);
            (t || n.push(e.sound), aX.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, f.bG)([aw.A], () => aw.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let aq = [
        { useTitle: () => U.intl.string(U.t.hK51Yg), sound: "deafen" },
        { useTitle: () => U.intl.string(U.t.XiejaJ), sound: "undeafen" },
        { useTitle: () => U.intl.string(U.t.w4m945), sound: "mute" },
        { useTitle: () => U.intl.string(U.t.YqAjXy), sound: "unmute" },
        { useTitle: () => U.intl.string(U.t.JoTq8n), sound: "camera_on" },
        { useTitle: () => U.intl.string(U.t["8P6tQ6"]), sound: "camera_off" },
        { useTitle: () => U.intl.string(U.t["juL9/L"]), sound: "disconnect" },
        {
            useTitle: () => U.intl.string(U.t.x98vQq),
            useSearchTerms: () => [U.intl.string(U.t.Q8gkVL)],
            sound: "ptt_start",
        },
        {
            useTitle: () => U.intl.string(U.t["1HjRqC"]),
            useSearchTerms: () => [U.intl.string(U.t.Q8gkVL)],
            sound: "ptt_stop",
        },
        { useTitle: () => U.intl.string(U.t["9JB1Ck"]), sound: "user_join" },
        { useTitle: () => U.intl.string(U.t.KUBBNt), sound: "user_leave" },
        { useTitle: () => U.intl.string(U.t.EZjqUT), sound: "user_moved" },
        { useTitle: () => U.intl.string(U.t.LnNlQh), sound: "call_calling" },
        { useTitle: () => U.intl.string(U.t.Nd8P5y), sound: "stream_started" },
        { useTitle: () => U.intl.string(U.t["9bYj+G"]), sound: "stream_ended" },
        { useTitle: () => U.intl.string(U.t.KccUI1), sound: "stream_user_joined" },
        { useTitle: () => U.intl.string(U.t.dsjkiN), sound: "stream_user_left" },
        { useTitle: () => U.intl.string(U.t.nFOcf9), sound: "activity_launch" },
        { useTitle: () => U.intl.string(U.t["a6lw/u"]), sound: "activity_end" },
        { useTitle: () => U.intl.string(U.t.KaFxrY), sound: "activity_user_join" },
        { useTitle: () => U.intl.string(U.t.S14z9n), sound: "activity_user_left" },
        { useTitle: () => U.intl.string(U.t.CP3DC3), sound: "reconnect" },
    ],
    aQ = (0, E.D1)(h.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? U.intl.formatToPlainString(U.t["0JYT98"], { count: t })
                : U.intl.formatToPlainString(U.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => t_(h.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                aW();
            };
        },
        buildLayout: () => aq.map((e) => aZ(e)),
    }),
    a$ = (0, E.zZ)(h.X.SOUNDS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, f.bG)([aw.A], () => aw.A.getDisableAllSounds());
            return T.useMemo(() => {
                if (e)
                    return {
                        type: S.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        role: "none",
                        text: U.intl.format(U.t.fRvixS, {
                            onClick: () => (0, ng.openUserSettings)(h.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                    };
            }, [e]);
        },
        buildLayout: () => [aQ, aB, aY],
    }),
    aJ = (0, E.zD)(h.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => U.intl.string(U.t.e3Zz3F),
        useSubtitle: () => U.intl.string(U.t.RztTjP),
        useValue: function () {
            return !M.uh.useSetting();
        },
        setValue: function (e) {
            ((0, rm.A)("stream_previews_disabled", !e, M.uh.getSetting(), [tw.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                M.uh.updateSetting(!e));
        },
    }),
    a0 = (0, E.zD)(h.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => U.intl.string(U.t.GmWk2E),
        useSearchTerms: () => [U.intl.string(U.t["Fj/xn1"])],
        useSubtitle: () => U.intl.string(U.t["Fj/xn1"]),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getVideoHook());
        },
        setValue: sS.default.setVideoHook,
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.supportsVideoHook());
        },
    }),
    a1 = (0, E.zD)(h.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => U.intl.string(U.t["4I0qzZ"]),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getExperimentalSoundshare());
        },
        setValue: sS.default.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => {
                let e = si.Ay.supportsExperimentalSoundshare(),
                    t = si.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    a2 = (0, E.zD)(h.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => U.intl.string(U.t["/jwMtn"]),
        useSubtitle: () => U.intl.string(U.t.zlA23F),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sS.default.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return si.Ay.supports(sz.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    a3 = (0, E.sN)(h.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => U.intl.string(U.t.fhEzfj),
        setValue: function (e) {
            let t = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sS.default.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: si.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, f.bG)([si.Ay], () => si.Ay.getSidechainCompression());
            return si.Ay.supports(sz.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    a5 = (0, E.zD)(h.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => U.intl.string(U.t.lt8rRx),
        useSubtitle: () => U.intl.string(U.t.ie1mgY),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, nf.cX)() && e
                ? (0, n8.A)({
                      title: U.intl.string(U.t["9jf31O"]),
                      subtitle: U.intl.string(U.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          (sS.default.setUseSystemScreensharePicker(e), nN.A.app.relaunch());
                      },
                      confirmText: U.intl.string(U.t.BddRzS),
                  })
                : sS.default.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.supportsSystemScreensharePicker() && (0, nf.cX)());
        },
    }),
    a4 = (0, E.bd)(h.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? U.intl.string(U.t.qrMyvm) : U.intl.string(U.t.LEtTNl)),
        useCollapsedSubtitle: () => t_(h.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [a2, a3, a5, a1, a0],
    }),
    a6 = (0, E.zZ)(h.X.STREAMING_CATEGORY, { useTitle: () => U.intl.string(U.t.KDdjou), buildLayout: () => [aJ, a4] });
var a8 = n(106713);
let a7 = (0, E.E2)(h.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = a8.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, p.jsx)(lX.U, {
                label: U.intl.string(U.t.UTM8VP),
                deviceType: sz.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    a9 = (0, E.E2)(h.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = a8.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, p.jsx)(lX.U, {
                label: U.intl.string(U.t.xuYQ0n),
                deviceType: sz.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    oe = (0, E.zC)(h.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [a7, a9] }),
    ot = (0, E.sN)(h.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => U.intl.string(U.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = si.Ay.getInputVolume();
            return (0, aG.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aG.w)(e);
            sS.default.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    on = (0, E.sN)(h.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => U.intl.string(U.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = si.Ay.getOutputVolume();
            return (0, aG.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aG.w)(e);
            sS.default.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    oi = (0, E.zC)(h.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [ot, on] });
var os = n(702841),
    ol = n(152567),
    or = n(804037);
let oa = `${eC.A.getArticleURL(I.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    oo = (0, E.E2)(h.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.nuFtHH)],
        usePredicate: function () {
            return (0, os.bG)([si.Ay], () => si.Ay.supports(sz.O5.LOOPBACK));
        },
        Component: function () {
            return (0, os.bG)([si.Ay], () => si.Ay.supports(sz.O5.LOOPBACK))
                ? (0, p.jsx)(ol.A, {
                      size: "md",
                      notchBackground: ol.V.GRAY,
                      captionVoice: U.intl.string(U.t.bp3JOV),
                      captionNoVoice: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(Q.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: U.intl.string(U.t.bgn75v),
                              }),
                              U.intl.string(U.t["MA+OZh"]),
                              (0, p.jsx)(nc.Anchor, {
                                  className: or.X,
                                  href: eC.A.getArticleURL(I.MVz.NO_INPUT_DETECTED),
                                  children: U.intl.string(U.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: U.intl.format(U.t["V+B3FH"], { guideURL: oa }),
                      buttonTest: U.intl.string(U.t.gyljWE),
                      buttonStop: U.intl.string(U.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    ou = e6.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function od(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, p.jsxs)(Z.B, {
        children: [
            n && (0, p.jsx)(so, { sourcePage: "voice" }),
            t && (0, p.jsx)(ln.A, { look: ln.k.WARNING, children: U.intl.string(U.t.Ioz3gx) }),
        ],
    });
}
let oc = (0, E.zZ)(h.X.VOICE_CATEGORY, {
        useTitle: () => U.intl.string(U.t.K3lovD),
        useSearchTerms: () => [
            U.intl.string(U.t.hHMYbb),
            U.intl.string(U.t.nuFtHH),
            U.intl.string(U.t.dl18zb),
            U.intl.string(U.t["3182VD"]),
            U.intl.string(U.t["DGq/PR"]),
            U.intl.string(U.t.eATD2B),
            U.intl.string(U.t.Rtsr6w),
            U.intl.string(U.t.aUJ062),
        ],
        useInlineNotice: function () {
            let e = sa("voice"),
                t = (0, lH.x5)(sz.oh.AUDIO_INPUT),
                n = (0, lH.x5)(sz.oh.AUDIO_OUTPUT),
                i = T.useMemo(() => {
                    let e = ou.some((e) => t?.hardwareId?.startsWith(e)),
                        i = ou.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return T.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: S.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, p.jsx)(od, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [oe, oi, oo],
    }),
    og = (0, E.t_)(h.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => U.intl.string(U.t.B1fFpf),
        buildLayout: () => [oc, au, lJ, a6, a$, ak, rC, rS],
    }),
    om = (0, E.i4)(h.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.B1fFpf),
        usePredicate: () => si.Ay.isSupported(),
        icon: lG.MicrophoneIcon,
        useMenu: lM.A,
        buildLayout: () => [og],
    }),
    oA = (0, E.WI)(h.X.APP_SECTION, {
        useTitle: () => U.intl.string(U.t.gcyH1J),
        buildLayout: () => [om, n0, te, iZ, lP, n5],
    });
var oE = n(360669),
    oh = n(974544),
    ox = n(975807),
    oS = n(534247);
function op(e) {
    let { title: t, children: n, actions: i, graphicSrc: s, footnote: l, size: r = "default" } = e,
        a = "compact" === r;
    return (0, p.jsxs)("div", {
        className: iE()(oS.kL, { [oS.oE]: a }),
        children: [
            (0, p.jsxs)(Z.B, {
                direction: "vertical",
                align: "start",
                justify: "center",
                gap: a ? 24 : 16,
                fullWidth: !1,
                className: oS.Qs,
                children: [
                    (0, p.jsxs)(Z.B, {
                        direction: "vertical",
                        align: "start",
                        gap: a ? 12 : 8,
                        children: [
                            (0, p.jsx)(N.D, {
                                variant: a ? "heading-lg/bold" : "heading-xl/bold",
                                color: "text-strong",
                                children: t,
                            }),
                            n,
                        ],
                    }),
                    (i.length > 0 || null != l) &&
                        (0, p.jsxs)(Z.B, {
                            direction: "vertical",
                            align: "start",
                            gap: 12,
                            children: [
                                i.length > 0 &&
                                    (0, p.jsx)(Z.B, {
                                        direction: "horizontal",
                                        gap: a ? 12 : 16,
                                        wrap: !0,
                                        fullWidth: !1,
                                        children: i.map((e) =>
                                            (0, p.jsx)(
                                                v.$,
                                                {
                                                    variant: "overlay-primary",
                                                    size: "sm",
                                                    text: e.text,
                                                    onClick: e.onClick,
                                                },
                                                String(e.text),
                                            ),
                                        ),
                                    }),
                                null != l &&
                                    (0, p.jsx)(Q.E, { variant: "text-xxs/normal", color: "text-subtle", children: l }),
                            ],
                        }),
                ],
            }),
            (0, p.jsx)("img", { src: s, className: oS.fA, alt: "" }),
        ],
    });
}
var oT = n(425565),
    of = n(891262),
    oI = n(936564),
    o_ = n(417792),
    oN = n(423764),
    oC = n(289873),
    oy = n(132500),
    ob = n(465323),
    ov = n(37766),
    oj = n(194261),
    oO = n(391048),
    oL = n(277984),
    oR = n(99696),
    oD = n(202613),
    oP = n(615405),
    oG = n(83617),
    oM = n(935208),
    oU = n(607399),
    oV = n(993077),
    ok = n(150934),
    ow = n(256006),
    oF = n(198970),
    oB = n(71532);
let oz = /[^0-9/]/g,
    oY = /[^0-9]/g;
class oX extends T.PureComponent {
    _inputRef;
    selectionStart = 0;
    componentDidUpdate(e) {
        let t = this._inputRef;
        e.value !== this.props.value && null != t && t.setSelectionRange(this.selectionStart, this.selectionStart);
    }
    setRef = (e) => {
        let { inputRef: t } = this.props;
        ((this._inputRef = e), null != t && t(e));
    };
    handleChange = (e, t) => {
        let n,
            i,
            s,
            l,
            { value: r, onChange: a } = this.props,
            o = this._inputRef;
        if (e === r || null == o || null == r) return;
        let u =
                ((i = (n = e.replace(oz, "").split("/"))[0]),
                (s = n[1]),
                (l = []),
                parseInt(i, 10) > 12 && (i = i.substring(0, 1)),
                l.push(i),
                (parseInt(i, 10) > 1 || 2 === i.length || (null != s && "" !== s)) && l.push("/"),
                null != s && "" !== s && parseInt(s, 10) > 99 && (s = (s + "").substring(0, 2)),
                l.push(s),
                l.join("")),
            d = o.selectionStart;
        (u === r && u.length <= 3 && r.includes("/") && !e.includes("/")
            ? (u = u.replace(oY, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t));
    };
    render() {
        return (0, p.jsx)(s_.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var oH = n(832208),
    oW = n(782328);
let oK = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, tZ.Ld)(),
                        title: () => U.intl.string(U.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => U.intl.string(U.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => oW.ep,
                        renderInput: (e) => (0, p.jsx)(oX, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    oZ = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: s } = e,
            [l, r] = T.useState(!1),
            [a, o] = T.useState(null),
            [u, d] = T.useState(i);
        return (
            T.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, p.jsx)(oH.A, {
                className: n,
                form: oK,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: function (e) {
                    (l || "" === e || r(!0),
                        (l && "" === e) || !(0, oB.So)(e) ? o(U.intl.string(U.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var oq = n(219887),
    oQ = n(292856);
let o$ = "isDefault";
class oJ extends T.PureComponent {
    static defaultProps = { onDelete: () => {}, onSubmit: () => {}, onCancel: () => {} };
    constructor(e) {
        super(e);
        const { paymentSource: t, isDefault: n } = e,
            i = t.billingAddress;
        this.state = {
            billingAddress: {
                name: i.name ?? "",
                line1: i.line1 ?? "",
                line2: i.line2 ?? "",
                country: i.country ?? "",
                state: i.state ?? "",
                city: i.city ?? "",
                postalCode: i.postalCode ?? "",
            },
            expiresMonth: t instanceof oD.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof oD.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        ((0, oL.ey)(), (0, oL.tc)());
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(ig.Vq).length))
            this.props.onCancel();
        else {
            let { billingAddress: e, isDefault: t, expiresMonth: n, expiresYear: i } = this.state;
            this.props.onSubmit(this.props.paymentSource.id, {
                billingAddress: e,
                expiresMonth: n,
                expiresYear: i,
                isDefault: t,
            });
        }
    };
    handleCancel = () => {
        this.props.onCancel();
    };
    handleDelete = () => {
        let { onDelete: e, paymentSource: t } = this.props;
        e(t.id);
    };
    handleAddressUpdate = (e, t, n) => {
        this.setState({
            billingAddress: e,
            billingAddressValid: t,
            dirtyFields: { ...this.state.dirtyFields, billingAddress: n },
        });
    };
    handleExpirationDateUpdate = (e, t) => {
        let { expirationDate: n } = e;
        if ((this.setState({ expirationValid: t }), null == n || "" === n)) return;
        let [i, s] = n.split("/");
        (this.handleFieldChange(Number(i), "expiresMonth"),
            this.handleFieldChange(Number(`${new Date().getFullYear().toString().slice(0, 2)}${s}`), "expiresYear"));
    };
    handleFieldChange = (e, t) => {
        null != t && this.setState({ [t]: e, dirtyFields: { ...this.state.dirtyFields, [t]: !0 } });
    };
    renderError() {
        let { updateError: e, removeError: t } = this.props;
        return null == e || e.hasCardError() || e.hasAddressError()
            ? null != t
                ? (0, p.jsx)("div", {
                      className: oQ.zc,
                      children: (0, p.jsx)(i$.w, { type: "critical", message: t.message, role: "alert" }),
                  })
                : null
            : (0, p.jsx)("div", {
                  className: oQ.zc,
                  children: (0, p.jsx)(i$.w, { type: "critical", message: e.message, role: "alert" }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, ow.g)(n);
        return (0, p.jsxs)("div", {
            className: oQ.yV,
            children: [
                (0, p.jsx)(Q.E, {
                    className: oQ.bV,
                    variant: "text-sm/normal",
                    children: U.intl.string(U.t["50Auo2"]),
                }),
                (0, p.jsx)(oF.Ay, {
                    ...e,
                    mode: oF.Ay.Modes.EDIT,
                    layout: i,
                    onBillingAddressChange: this.handleAddressUpdate,
                    error: t,
                }),
            ],
        });
    }
    renderCardExpirationSection() {
        let { expiresMonth: e, expiresYear: t } = this.state;
        if (null == e || null == t) return null;
        let n = `${e.toString().padStart(2, "0")}/${t.toString().padStart(2, "0").slice(-2)}`;
        return (0, p.jsxs)("div", {
            className: oQ.yV,
            children: [
                (0, p.jsx)(Q.E, { className: oQ.bV, variant: "text-sm/normal", children: U.intl.string(U.t.Fo2YP7) }),
                (0, p.jsx)(oZ, {
                    expirationDate: n,
                    onCardInfoChange: this.handleExpirationDateUpdate,
                    error: this.props.updateError,
                }),
            ],
        });
    }
    renderActions() {
        let { submitting: e, removing: t, isForSubscription: n } = this.props,
            { billingAddressValid: i, expirationValid: s } = this.state;
        return (0, p.jsx)("div", {
            className: oQ.AU,
            children: (0, p.jsxs)(Z.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, p.jsx)(l4.e, {
                        children: (0, p.jsxs)("div", {
                            className: oQ.lH,
                            children: [
                                n
                                    ? (0, p.jsx)(sE.m, {
                                          text: U.intl.string(U.t["v6/z28"]),
                                          children: (0, p.jsx)("div", { "aria-hidden": !0, className: oQ.dm }),
                                      })
                                    : null,
                                (0, p.jsx)(v.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: oU.Fr ? "sm" : "md",
                                    text: oU.Fr ? U.intl.string(U.t.oyYWHE) : U.intl.string(U.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, p.jsxs)(l4.e, {
                        children: [
                            (0, p.jsx)(v.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: oU.Fr ? "sm" : "md",
                                text: U.intl.string(U.t["ETE/oC"]),
                            }),
                            (0, p.jsx)(v.$, {
                                loading: e,
                                disabled: !i || t || !s,
                                type: "submit",
                                variant: "active",
                                size: oU.Fr ? "sm" : "md",
                                text: U.intl.string(U.t["R3BPH+"]),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    render() {
        let { paymentSource: e, isDefault: t, locale: n, className: i, isForSubscription: s } = this.props,
            { isDefault: l } = this.state,
            r = e instanceof oD.SJ;
        return (0, p.jsx)(oV.Z, {
            editable: !0,
            className: iE()(oQ.Nr, i),
            children: (0, p.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, p.jsxs)("div", {
                        className: oQ.__invalid_paymentSection,
                        children: [
                            (0, p.jsx)(oq.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, p.jsx)("div", { className: oQ.Um, children: U.intl.string(U.t["3R0U0b"]) })
                                : null,
                            (0, p.jsx)("div", {
                                className: oQ.Sv,
                                children: r
                                    ? U.intl.format(U.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : U.intl.string(U.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, p.jsx)("div", {
                        className: oQ.D5,
                        children: (0, p.jsx)(ok.S, {
                            value: o$,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, o$),
                            label: U.intl.string(U.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, p.jsx)(su.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let o0 = f.Ay.connectStores([oP.A], () => ({ updateError: oP.A.editSourceError, removeError: oP.A.removeSourceError }))(
    oJ,
);
var o1 = n(693351),
    o2 = n(849405),
    o3 = n(329693);
function o5() {
    (0, oR.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, oy.A)() });
}
class o4 extends T.PureComponent {
    static defaultProps = { isEditing: !1, hideDivider: !1, onEditClick: () => {} };
    handleEditClick = () => {
        this.props.onEditClick(this.props.paymentSource.id);
    };
    render() {
        let {
            paymentSource: e,
            isDefault: t,
            isEditing: n,
            hideDivider: i,
            isForSubscription: s,
            locale: l,
            removing: r,
            submitting: a,
            onSubmit: o,
            onCancel: u,
            onDelete: d,
        } = this.props;
        return n
            ? (0, p.jsx)(o0, {
                  paymentSource: e,
                  isDefault: t,
                  removing: r,
                  submitting: a,
                  locale: l,
                  isForSubscription: s,
                  onSubmit: o,
                  onCancel: u,
                  onDelete: d,
              })
            : (0, p.jsxs)(p.Fragment, {
                  children: [
                      i ? null : (0, p.jsx)(su.c, { className: o3.__invalid_sourceDivider }),
                      (0, p.jsxs)("div", {
                          className: o3.Yb,
                          children: [
                              (0, p.jsx)(oq.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: s,
                                  locale: l,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, p.jsx)(v.$, {
                                  variant: "secondary",
                                  onClick: this.handleEditClick,
                                  size: "sm",
                                  text: U.intl.string(U.t.bt75uw),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let o6 = T.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: s, onRedeemClick: l } = e,
        [r, a] = T.useState(null),
        o = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, f.bG)([oP.A], () => oP.A.ipCountryCode),
        d = T.useMemo(() => (0, ob.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        T.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : oL.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, p.jsxs)(p.Fragment, {
            children: [
                n ? null : (0, p.jsx)(su.c, { className: o3.__invalid_sourceDivider }),
                (0, p.jsxs)("div", {
                    className: o3.Yb,
                    children: [
                        void 0 !== t
                            ? (0, p.jsx)(oq.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, p.jsxs)(sb.A, {
                                  align: sb.A.Align.CENTER,
                                  children: [
                                      (0, p.jsx)(ov._, { size: "lg" }),
                                      (0, p.jsx)(Q.E, {
                                          variant: "text-sm/medium",
                                          className: o2.Wi,
                                          children: U.intl.string(o1.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, p.jsxs)("div", {
                            className: o3.zy,
                            children: [
                                (0, p.jsx)("div", {
                                    className: o3.Tq,
                                    children:
                                        null == r
                                            ? (0, p.jsx)(oC.y, { type: oC.y.Type.SPINNING_CIRCLE })
                                            : (0, p.jsx)(Q.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = (0, ob.$g)(e ?? 0, n, s, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${String(n).toUpperCase()} ${i}`;
                                                  })(),
                                              }),
                                }),
                                (0, p.jsx)(v.$, {
                                    variant: "secondary",
                                    onClick: l,
                                    size: "sm",
                                    text: U.intl.string(o1.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class o8 extends T.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            (await oL.Gr(e), this.setState({ editingPayment: e }));
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            (await oL.JQ(e), this.setState({ editingPayment: null }));
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                (await oL.Ps(e, t), this.setState({ editingPayment: null }));
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, oG.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, sI.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, p.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, oO.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, p.jsxs)("div", {
            className: o3.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, p.jsxs)("div", {
                          className: o3.z8,
                          children: [
                              (0, p.jsx)(Q.E, { variant: "text-sm/normal", children: U.intl.string(U.t.aRHpAB) }),
                              (0, p.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: o3.Sv,
                                  children: U.intl.string(U.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, p.jsx)(v.$, { onClick: this.handleAddPaymentMethod, text: U.intl.string(U.t.CpOiEO) }),
            ],
        });
    }
    render() {
        let e,
            {
                showHeader: t,
                defaultPaymentSourceId: n,
                paymentSources: i,
                locale: s,
                removing: l,
                submitting: r,
                premiumSubscriptionPaymentSourceId: a,
                showGiftCards: o,
            } = this.props,
            u = W()
                .values(i)
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : oM.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof oD.LQ)),
            c = u.filter((e) => e instanceof oD.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, p.jsx)(
                    o4,
                    {
                        locale: s,
                        paymentSource: e,
                        isDefault: n === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === a,
                        hideDivider: 0 === t || m === t - 1,
                        onSubmit: this.handleSubmit,
                        submitting: r,
                        removing: l,
                        isEditing: g === e.id,
                        onEditClick: this.handleEditClick,
                    },
                    e.id,
                ),
            );
        return (
            (e =
                c.length > 0
                    ? c.map((e, t) =>
                          (0, p.jsx)(
                              o6,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: o5,
                              },
                              e.id,
                          ),
                      )
                    : (0, p.jsx)(o6, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: o5,
                      })),
            (0, p.jsxs)(p.Fragment, {
                children: [
                    t
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsxs)(N.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, p.jsx)(oj.LockIcon, { size: "sm", className: o3.hz }),
                                          " ",
                                          U.intl.string(U.t.W26xGQ),
                                      ],
                                  }),
                                  (0, p.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: U.intl.string(U.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    A,
                    o && e,
                    m !== d.length - 1 || (o && c.length > 0) ? (0, p.jsx)(su.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var o7 = n(459357),
    o9 = n(295405),
    ue = n(166403),
    ut = n(773669),
    un = n(943009);
function ui() {
    let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, oN.Gw)(e.country) };
}
let us = (0, E.E2)(h.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, f.bG)([oP.A], () => oP.A.isSyncing),
                i = (0, f.bG)([o9.A], () => o9.A.paymentSources),
                s = (0, f.bG)([o9.A], () => o9.A.defaultPaymentSourceId),
                l = (0, f.bG)([ut.default], () => ut.default.locale),
                r = (0, f.bG)([ue.A], () => ue.A.getPremiumTypeSubscription()),
                a = (0, f.bG)([oP.A], () => oP.A.isRemovingPaymentSource),
                o = (0, f.bG)([oP.A], () => oP.A.isUpdatingPaymentSource),
                { enabled: u } = (0, o7.c)({ location: "UserSettingsBilling" });
            return (T.useEffect(() => {
                (oL.$o(), oL.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, p.jsx)("div", { className: un.o, children: (0, p.jsx)(oC.y, {}) })
                : (0, p.jsx)(o8, {
                      showHeader: t,
                      paymentSources: i,
                      defaultPaymentSourceId: s,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== I.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: l,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [U.intl.string(U.t.W26xGQ), U.intl.string(U.t["3pIjBH"])],
    }),
    ul = (0, E.E2)(h.X.BILLING_GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = T.useMemo(
                () => [
                    { text: U.intl.string(of.default["6bWeWP"]), onClick: () => (0, ox.A)(oT.C1) },
                    {
                        text: U.intl.string(of.default.xYa9Y8),
                        onClick: () => (0, ox.A)(eC.A.getArticleURL(I.MVz.BUY_GIFT_CARDS)),
                    },
                ],
                [],
            );
            return (0, p.jsx)("div", {
                className: oI.k,
                children: (0, p.jsx)(op, {
                    title: U.intl.string(of.default.w8gzZb),
                    graphicSrc:
                        "https://cdn.discordapp.com/assets/content/ee0bcc3ecc6d909365f70b4692752f0ac9c8a2e49c47afac16e7dbd31efe360f.png",
                    actions: e,
                    children: (0, p.jsx)(Q.E, {
                        variant: "text-md/medium",
                        color: "text-muted",
                        children: U.intl.string(of.default.qtKobx),
                    }),
                }),
            });
        },
        useSearchTerms: () => [],
        usePredicate: () =>
            (0, o_.y)({ location: "BillingMarketingBanner", countGiftCardWallet: !0, canFetchPaymentSources: !1 }),
    }),
    ur = (0, E.zZ)(h.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.W26xGQ),
        useSubtitle: () => {
            let e = ui();
            return null != e ? U.intl.format(U.t.e2t1G5, { country: e.countryName }) : U.intl.string(U.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == ui()
                ? null
                : {
                      type: S.p3.INFO_POPOVER,
                      ariaLabel: U.intl.string(U.t.PuB1W7),
                      popoverProps: {
                          title: "",
                          body: U.intl.string(U.t["21skUa"]),
                          size: "sm",
                          position: "top",
                          getActions: (e) => [
                              {
                                  text: U.intl.string(U.t.PuB1W7),
                                  variant: "primary",
                                  onClick: () => {
                                      (window.open("https://support.discord.com/hc/articles/39799791912087", "_blank"),
                                          e());
                                  },
                              },
                          ],
                      },
                  };
        },
        buildLayout: () => [us, ul],
    });
var ua = n(662490),
    uo = n(945810);
let uu = (0, uo.mj)({
    name: "2026-10-purchase-history",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ud = n(837381),
    uc = n(689175),
    ug = n(928039),
    um = n(39190),
    uA = n(32731),
    uE = n(380098),
    uh =
        (((i = {})[(i.PENDING = 1)] = "PENDING"),
        (i[(i.PAID = 2)] = "PAID"),
        (i[(i.FAILED = 3)] = "FAILED"),
        (i[(i.CANCELED = 4)] = "CANCELED"),
        (i[(i.PARTIALLY_REFUNDED = 5)] = "PARTIALLY_REFUNDED"),
        (i[(i.REFUNDED = 6)] = "REFUNDED"),
        (i[(i.REVERSED = 7)] = "REVERSED"),
        i),
    ux =
        (((s = {})[(s.NITRO = 1)] = "NITRO"),
        (s[(s.NITRO_BASIC = 2)] = "NITRO_BASIC"),
        (s[(s.SHOP = 3)] = "SHOP"),
        (s[(s.APPLICATION = 4)] = "APPLICATION"),
        (s[(s.PRODUCT = 5)] = "PRODUCT"),
        s),
    uS =
        (((l = {})[(l.PARTIALLY_REFUNDED = 1)] = "PARTIALLY_REFUNDED"),
        (l[(l.REFUNDED = 2)] = "REFUNDED"),
        (l[(l.REVERSED = 3)] = "REVERSED"),
        l),
    up =
        (((r = {})[(r.PREMIUM = 1)] = "PREMIUM"),
        (r[(r.GIFT = 2)] = "GIFT"),
        (r[(r.APPLICATION = 3)] = "APPLICATION"),
        (r[(r.COLLECTIBLE = 4)] = "COLLECTIBLE"),
        (r[(r.IN_GAME_ITEM = 5)] = "IN_GAME_ITEM"),
        r),
    uT =
        (((a = {})[(a.CLAIMED = 1)] = "CLAIMED"),
        (a[(a.UNCLAIMED = 2)] = "UNCLAIMED"),
        (a[(a.REDEEMED = 3)] = "REDEEMED"),
        (a[(a.FAILED = 4)] = "FAILED"),
        (a[(a.UNREDEEMED = 5)] = "UNREDEEMED"),
        (a[(a.REFUNDED = 6)] = "REFUNDED"),
        a);
function uf(e) {
    let t = e.payments.map((e) => ({
            ...e,
            payment_source: null != e.payment_source ? oD.Ay.createFromServer(e.payment_source) : null,
        })),
        n = t.find((t) => t.id === e.id);
    return {
        ...e,
        sku: null != e.sku ? uA.A.createFromServer(e.sku) : null,
        payments: t,
        receipt_payment: new uE.A({
            id: e.id,
            status: n?.status,
            paymentSource: n?.payment_source,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
        }),
    };
}
let uI = { receipts: [], cursor: null };
var u_ = n(34188),
    uN = n(597770),
    uC = n(206828),
    uy = n(576243),
    ub = n(147925),
    uv = n(707554),
    uj = n(957565),
    uO = n(458790),
    uL = n(39209),
    uR = n(510022),
    uD = n(427262),
    uP = n(106799),
    uG = n(580630),
    uM = n(818348),
    uU = n(460103);
let uV = (e) => `https://${I.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`;
function uk(e, t) {
    return t === uM.Yr.DISCORD_ORB
        ? (0, p.jsxs)("span", {
              className: uU.db,
              children: [
                  (0, p.jsx)(uP.A, { customSize: 16, shouldUseThemeColor: !0 }),
                  U.intl.formatToPlainString(U.t.YMor7k, { count: e }),
              ],
          })
        : (0, uG.$g)(e, t);
}
function uw(e) {
    let { receipt: t, gameItem: n, locale: i, hasLinkedToApplication: s } = e,
        { analyticsLocations: l } = (0, ez.Ay)(tw.A.BILLING_SETTINGS_BILLING),
        { sku: r } = t,
        a = r?.application,
        o = n.gift_recipient;
    return n.status === uT.REDEEMED
        ? null
        : n.status === uT.REFUNDED
          ? (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(uv.H, { className: uU.mW, children: U.intl.string(U.t["gIGB/A"]) }),
                    (0, p.jsx)("div", {
                        className: uU.iL,
                        children:
                            null != o
                                ? U.intl.format(U.t.Q1K9eg, { username: uD.Ay.getName(o) })
                                : U.intl.format(U.t.IBtGwC, { applicationName: a?.name }),
                    }),
                ],
            })
          : n.status === uT.CLAIMED || n.status === uT.UNCLAIMED
            ? (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsx)(uv.H, { className: uU.mW, children: U.intl.string(U.t["gIGB/A"]) }),
                      (0, p.jsx)("div", {
                          className: uU.iL,
                          children:
                              null != o
                                  ? U.intl.format(U.t.vfUW65, { username: uD.Ay.getName(o) })
                                  : U.intl.string(U.t["18wIqp"]),
                      }),
                      null == o &&
                          (0, p.jsx)("div", {
                              className: uU.TP,
                              children: (0, p.jsx)(v.$, {
                                  variant: "primary",
                                  text: U.intl.string(U.t["jcSP+g"]),
                                  onClick: () => (0, ng.openUserSettings)(h.X.GIFT_PANEL),
                              }),
                          }),
                  ],
              })
            : (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsx)(uv.H, { className: uU.mW, children: U.intl.string(U.t["gIGB/A"]) }),
                      (0, p.jsx)("div", {
                          className: uU.iL,
                          children: s
                              ? U.intl.format(U.t.DQQCAw, { applicationName: a?.name, skuName: r?.name })
                              : U.intl.format(U.t.ED2BqF, { applicationName: a?.name, skuName: r?.name }),
                      }),
                      (0, p.jsx)("div", {
                          className: uU.TP,
                          children: s
                              ? (0, p.jsx)(v.$, {
                                    variant: "primary",
                                    text: U.intl.string(U.t.zoztQA),
                                    onClick: () => (0, ox.A)(uV(i)),
                                })
                              : (0, p.jsx)(v.$, {
                                    variant: "primary",
                                    text: U.intl.string(U.t["jCqvk/"]),
                                    onClick: () => {
                                        null != r &&
                                            null != a &&
                                            (td.default.track(I.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED, {
                                                sku_id: r.id,
                                                application_id: a.id,
                                                location_stack: l,
                                            }),
                                            (0, uR.n)({ sku: r, application: a, analyticsLocations: l }));
                                    },
                                }),
                      }),
                  ],
              });
}
var uF = n(933832),
    uB = n(789645);
function uz(e) {
    let { refund: t, locale: n } = e,
        i = uV(n),
        s = t.eligible ? uF.CheckmarkLargeIcon : uB.P;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(uv.H, { className: uU.mW, children: U.intl.string(U.t["n/27pr"]) }),
            (0, p.jsxs)("div", {
                className: uU.iL,
                children: [
                    (0, p.jsx)("div", {
                        children: (function (e, t) {
                            if (null == e.window)
                                return e.policy === up.IN_GAME_ITEM
                                    ? U.intl.format(U.t["5lvoVS"], { supportURL: t })
                                    : U.intl.string(U.t.s9TZM1);
                            let n = e.window.days;
                            switch (e.policy) {
                                case up.PREMIUM:
                                    return e.eligible
                                        ? U.intl.format(U.t.EPYteX, { dateLimit: n, supportURL: t })
                                        : U.intl.formatToPlainString(U.t.dk7vyL, { dateLimit: n });
                                case up.GIFT:
                                    return e.eligible
                                        ? U.intl.format(U.t["16eP/L"], { dateLimit: n, supportURL: t })
                                        : U.intl.formatToPlainString(U.t.owlOWc, { dateLimit: n });
                                default:
                                    return e.eligible
                                        ? U.intl.format(U.t["1LDI4J"], {
                                              dateLimit: n,
                                              playtimeLimit: 2,
                                              supportURL: t,
                                          })
                                        : U.intl.formatToPlainString(U.t.s4Kk0C, { dateLimit: n, playtimeLimit: 2 });
                            }
                        })(t, i),
                    }),
                    t.policy !== up.IN_GAME_ITEM &&
                        (0, p.jsxs)("div", {
                            className: uU.My,
                            children: [
                                (0, p.jsx)("div", {
                                    className: uU.Kf,
                                    children:
                                        null != t.window &&
                                        (0, p.jsxs)("div", {
                                            className: uU._Z,
                                            children: [
                                                (0, p.jsx)(uv.H, {
                                                    className: uU.ud,
                                                    children: U.intl.string(U.t.H0RNz4),
                                                }),
                                                (0, p.jsxs)("div", {
                                                    className: uU.z9,
                                                    children: [
                                                        (0, p.jsx)(s, { className: uU.xb, color: "currentColor" }),
                                                        (0, p.jsx)("div", {
                                                            children: U.intl.formatToPlainString(U.t["7dtXa/"], {
                                                                daysSincePurchase: t.window.days_since_purchase,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                }),
                                (0, p.jsx)(nc.Anchor, { href: i, children: U.intl.string(U.t.re5nOB) }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var uY = n(679897);
function uX(e) {
    let { description: t, cost: n } = e;
    return (0, p.jsx)("li", {
        className: uU.mg,
        children: (0, p.jsxs)(sb.A, {
            justify: sb.A.Justify.BETWEEN,
            children: [(0, p.jsx)("div", { children: t }), (0, p.jsx)("div", { children: n })],
        }),
    });
}
function uH(e) {
    let { value: t, copyText: n, copyFeedbackText: i } = e,
        [s, l] = T.useState(!1),
        [r, a] = T.useState(!1);
    return (0, p.jsx)(sE.m, {
        forceOpen: r,
        text: s ? i : n,
        children: (0, p.jsx)(n9.D, {
            onMouseEnter: () => {
                s && l(!1);
            },
            onMouseLeave: () => {
                a(!1);
            },
            onClick: function () {
                (0, uj.C)(t, () => {
                    (a(!0), l(!0));
                });
            },
            children: (0, p.jsx)("div", { className: uU.l9, children: t }),
        }),
    });
}
function uW(e) {
    let { paymentId: t } = e;
    return (0, p.jsx)("li", {
        className: uU.mg,
        children: (0, p.jsxs)("div", {
            className: uU.bx,
            children: [
                (0, p.jsx)("div", { children: U.intl.string(U.t["UQim+r"]) }),
                (0, p.jsx)(uH, {
                    value: t,
                    copyText: U.intl.string(U.t["Mdk9+A"]),
                    copyFeedbackText: U.intl.string(U.t["7eIrA2"]),
                }),
            ],
        }),
    });
}
function uK(e) {
    let { tag: t } = e;
    if (null == t) return null;
    let n = t === uS.REVERSED;
    return (0, p.jsxs)(Q.E, {
        variant: "text-xxs/semibold",
        color: "none",
        tag: "span",
        className: iE()(uY.XM, n ? uY.aB : uY.EN),
        children: [
            t === uS.REVERSED && U.intl.string(U.t.YQv9Li),
            t === uS.PARTIALLY_REFUNDED && U.intl.string(U.t.lYbZzz),
            t === uS.REFUNDED && U.intl.string(U.t.ZBb6NK),
        ],
    });
}
function uZ(e) {
    let { payment: t, locale: n } = e,
        i = t.payment_source ?? (t.payment_gateway === uM.kM.APPLE_PARTNER ? new oD.Pw({}) : null);
    return null == i
        ? null
        : (0, p.jsx)(oq.A, {
              paymentSource: i,
              locale: n,
              descriptionClassName: uU.iL,
              showLabels: !0,
              showPaymentSourceIcon: !0,
          });
}
function uq(e) {
    let { receipt: t, locale: n } = e;
    return t.payments.length <= 1
        ? 1 === t.payments.length
            ? (0, p.jsx)(uZ, { payment: t.payments[0], locale: n })
            : null
        : (0, p.jsx)(Z.B, {
              children: t.payments.map((e) =>
                  (0, p.jsxs)(
                      sb.A,
                      {
                          justify: sb.A.Justify.BETWEEN,
                          align: sb.A.Align.CENTER,
                          children: [
                              (0, p.jsx)(uZ, { payment: e, locale: n }),
                              (0, p.jsxs)(Z.B, {
                                  direction: "horizontal",
                                  align: "center",
                                  gap: 8,
                                  fullWidth: !1,
                                  children: [
                                      (0, p.jsx)(uK, { tag: e.tag }),
                                      (0, p.jsx)(Q.E, {
                                          variant: "text-md/normal",
                                          color: "text-subtle",
                                          children: uk(e.amount, t.currency),
                                      }),
                                  ],
                              }),
                          ],
                      },
                      e.id,
                  ),
              ),
          });
}
function uQ(e) {
    let { guildProduct: t, locale: n } = e;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)("div", { className: uU.ts }),
            t.delisted
                ? (0, p.jsx)(i$.w, {
                      type: "warning",
                      message: U.intl.string(U.t["3AvulN"]),
                      role: "none",
                      action: { text: U.intl.string(U.t.zoztQA), onClick: () => (0, ox.A)(uV(n)) },
                  })
                : null != t.guild_id && (0, p.jsx)(uO.Q, { guildId: t.guild_id, guildProductListingId: t.listing_id }),
        ],
    });
}
function u$(e) {
    let { receipt: t, locale: n, hasLinkedToApplication: i } = e,
        { currency: s, guild_product: l, game_item: r, refund: a } = t;
    return (0, p.jsx)(n9.D, {
        onClick: (e) => e.stopPropagation(),
        children: (0, p.jsxs)("div", {
            className: uU.WI,
            children: [
                (0, p.jsx)(uv.H, { className: uU.mW, children: U.intl.string(U.t.nyzoFb) }),
                (0, p.jsxs)("div", {
                    className: iE()(uU.iL, uU.W),
                    children: [
                        (0, p.jsx)(uq, { receipt: t, locale: n }),
                        (0, p.jsxs)("ul", {
                            children: [
                                null != t.subtotal &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)(uX, { description: t.description, cost: uk(t.subtotal, s) }),
                                            (0, p.jsx)(uX, {
                                                description: U.intl.string(U.t.QgWXht),
                                                cost: uk(t.tax, s),
                                            }),
                                        ],
                                    }),
                                (0, p.jsx)(uX, { description: U.intl.string(U.t.txajQG), cost: uk(t.total, s) }),
                                t.amount_refunded > 0 &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)(uX, {
                                                description: U.intl.string(U.t["A+I0AP"]),
                                                cost: uk(-t.amount_refunded, s),
                                            }),
                                            (0, p.jsx)(uX, {
                                                description: U.intl.string(U.t.xER6Wi),
                                                cost: uk(t.net, s),
                                            }),
                                        ],
                                    }),
                                (0, p.jsx)(uW, { paymentId: t.id }),
                                l?.guild_id != null &&
                                    (0, p.jsx)(uO.u, { guildId: l.guild_id, guildProductListingId: l.listing_id }),
                            ],
                        }),
                    ],
                }),
                null != l && (0, p.jsx)(uQ, { guildProduct: l, locale: n }),
                (0, p.jsx)(uL.A, { payment: t.receipt_payment }),
                null != r && (0, p.jsx)(uw, { receipt: t, gameItem: r, locale: n, hasLinkedToApplication: i }),
                null != a && (0, p.jsx)(uz, { refund: a, locale: n }),
            ],
        }),
    });
}
function uJ(e) {
    let { withGradient: t } = e;
    return t
        ? (0, p.jsx)(uy.A, { size: 24, iconSize: 16, color: n6.A.unsafe_rawColors.NEUTRAL_1, className: uU.Sy })
        : (0, p.jsx)("div", {
              className: iE()(uU.Sy, uU.uX, uU.Xr),
              children: (0, p.jsx)(ad.t, { size: "custom", width: 16, height: 16, color: n6.A.colors.ICON_DEFAULT }),
          });
}
function u0(e) {
    let { receipt: t } = e,
        n = t.sku?.application,
        i = (0, f.bG)([sL.A], () => sL.A.getGuild(n?.guildId));
    switch (t.icon) {
        case ux.NITRO:
            return (0, p.jsx)(uJ, { withGradient: !0 });
        case ux.NITRO_BASIC:
            return (0, p.jsx)(uJ, { withGradient: !1 });
        case ux.SHOP:
            return (0, p.jsx)(u_.U, { size: "custom", width: 23, height: 23, color: "currentColor", className: uU.sV });
        case ux.APPLICATION:
        case ux.PRODUCT:
            return (0, p.jsx)(sn.A, {
                className: uU.Sy,
                guildClassName: uU.zA,
                game: t.icon === ux.APPLICATION ? n : void 0,
                guild: i,
                size: sn.M.XSMALL,
                skuId: t.sku?.id,
            });
    }
}
function u1(e) {
    let { receipt: t, hasLinkedToApplication: n } = e,
        { game_item: i } = t;
    if (null != i && t.status === uh.PAID)
        switch (i.status) {
            case uT.CLAIMED:
                return (0, p.jsx)("span", { className: uU.gD, children: U.intl.string(U.t.lIsIFo) });
            case uT.UNCLAIMED:
                return (0, p.jsx)("span", { className: uU.Tf, children: U.intl.string(U.t["+tqSi3"]) });
            case uT.REDEEMED:
                return (0, p.jsx)("span", { className: uU.gD, children: U.intl.string(U.t.Osji1u) });
            case uT.FAILED:
                return (0, p.jsx)("span", { className: uU.ob, children: U.intl.string(U.t.Yo4ru6) });
            default:
                return n
                    ? (0, p.jsx)("span", { className: uU.Tf, children: U.intl.string(U.t.y7F0Re) })
                    : (0, p.jsx)("span", { className: uU.Tf, children: U.intl.string(U.t.HHC5Z4) });
        }
    switch (t.status) {
        case uh.PENDING:
            return (0, p.jsx)("span", { className: uU.Xg, children: U.intl.string(U.t.y7F0Re) });
        case uh.FAILED:
            return (0, p.jsx)("span", { className: uU.ob, children: U.intl.string(U.t.Yo4ru6) });
        case uh.REVERSED:
            return (0, p.jsx)("span", { className: uU.ob, children: U.intl.string(U.t.YQv9Li) });
        case uh.CANCELED:
            return (0, p.jsx)("span", { className: uU.ob, children: U.intl.string(U.t.ttkBhy) });
        case uh.PARTIALLY_REFUNDED:
            return (0, p.jsx)("span", { className: uU.gD, children: U.intl.string(U.t.lYbZzz) });
        case uh.REFUNDED:
            return (0, p.jsx)("span", { className: uU.gD, children: U.intl.string(U.t.ZBb6NK) });
        case uh.PAID:
            return null;
    }
}
function u2(e) {
    let { receipt: t, locale: n, className: i } = e,
        [s, l] = T.useState(!1),
        { hasAlreadyLinked: r } = (0, uC.RD)(null != t.game_item ? t.sku?.application : void 0);
    return (0, p.jsx)(ud.tG, {
        id: t.id,
        children: (e) =>
            (0, p.jsxs)(n9.D, {
                onClick: () => l(!s),
                "data-expanded": s,
                className: iE()(uU.Ji, i),
                focusProps: { offset: 4 },
                ...e,
                children: [
                    (0, p.jsxs)(sb.A, {
                        className: uU.J7,
                        align: sb.A.Align.CENTER,
                        "data-expanded": s,
                        children: [
                            (0, p.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                className: uU.p6,
                                children: (0, iS.i$)(ix()(t.created_at), "MM/DD/YYYY"),
                            }),
                            (0, p.jsxs)("div", {
                                className: uU.h_,
                                children: [
                                    (0, p.jsx)(u0, { receipt: t }),
                                    (0, p.jsx)("div", {
                                        children:
                                            null != t.subscription
                                                ? ((function (e, t) {
                                                      let { paymentSource: n } = e.receipt_payment,
                                                          i = null != n && I.AD1.has(n.type);
                                                      switch (t.type) {
                                                          case I.rzx.PREMIUM:
                                                              return t.plans
                                                                  .map((e) => {
                                                                      let { plan_id: t, quantity: n } = e;
                                                                      return (0, af.xq)(t)
                                                                          ? af.Ay.getDisplayName(t, !1, i)
                                                                          : `${n > 1 ? `${n}x ` : ""}${af.Ay.getDisplayName(t, !1, i)}`;
                                                                  })
                                                                  .join(", ");
                                                          case I.rzx.GUILD:
                                                              if (null == t.plan_name) return null;
                                                              return U.intl.formatToPlainString(
                                                                  t.interval === tJ.WT.YEAR
                                                                      ? U.t.V6UFQM
                                                                      : U.t["6oq128"],
                                                                  { planName: t.plan_name },
                                                              );
                                                          case I.rzx.APPLICATION:
                                                              return e.sku?.application != null
                                                                  ? U.intl.formatToPlainString(U.t["0wL/VI"], {
                                                                        tier: e.sku.name,
                                                                    })
                                                                  : U.intl.string(U.t["9czSYu"]);
                                                          default:
                                                              return null;
                                                      }
                                                  })(t, t.subscription) ?? t.description)
                                                : t.guild_product?.delisted === !0
                                                  ? U.intl.string(U.t.O7uLmw)
                                                  : t.description,
                                    }),
                                    t.is_gift
                                        ? (0, p.jsx)(sE.m, {
                                              text: U.intl.string(U.t.QddTpm),
                                              children: (0, p.jsx)(uN.GiftIcon, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: uU.ez,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            (0, p.jsxs)("div", {
                                className: uU.vj,
                                children: [
                                    (0, p.jsx)(u1, { receipt: t, hasLinkedToApplication: r }),
                                    (0, p.jsx)("span", { className: uU.q9, children: uk(t.net, t.currency) }),
                                ],
                            }),
                            (0, p.jsx)(ub.A, {
                                className: uU.fT,
                                direction: s ? ub.A.Directions.UP : ub.A.Directions.DOWN,
                            }),
                        ],
                    }),
                    s ? (0, p.jsx)(u$, { receipt: t, locale: n, hasLinkedToApplication: r }) : null,
                ],
            }),
    });
}
var u3 = n(949779);
function u5(e) {
    let { receipts: t, locale: n, loadNextPage: i } = e,
        s = T.useRef(null),
        [l, r] = T.useState(0),
        a = Math.max(Math.ceil(t.length / 10), 1),
        o = t.slice(10 * l, (l + 1) * 10);
    T.useEffect(() => {
        s.current?.scrollTo({ to: 0 });
    }, [l]);
    let u = T.useCallback(
            (e) => {
                (r(e), e >= a - 2 && i());
            },
            [a, i],
        ),
        d = (0, ug.A)("billing-history", s);
    return (0, p.jsx)(ud.hD, {
        navigator: d,
        children: (0, p.jsx)(ud.PR, {
            children: (e) => {
                let { ref: t, ...i } = e;
                return (0, p.jsx)(um.A, {
                    className: u3.GD,
                    currentPageIndex: l,
                    onChangePage: u,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...i,
                    children: (0, p.jsx)(uc.Ch, {
                        className: u3.Bd,
                        ref: s,
                        overflow: "auto",
                        children: o.map((e) =>
                            (0, p.jsx)(u2, { className: iE()(u3.Nj, u3.Bd), receipt: e, locale: n }, e.id),
                        ),
                    }),
                });
            },
        }),
    });
}
function u4(e) {
    let { subscription: t } = e;
    return (
        th()(null != t.paymentGateway, "Expected payment gateway when rendering for external subscription"),
        (0, p.jsxs)(oV.Z, {
            className: u3.K1,
            children: [
                (0, p.jsx)("div", {
                    className: u3.BF,
                    children: U.intl.format(U.t["6mIX6s"], { paymentGatewayName: uM.qm[t.paymentGateway] }),
                }),
                (0, p.jsx)("div", {
                    className: u3.Q2,
                    children: U.intl.format(U.t.eG0uZB, {
                        paymentGatewayName: uM.qm[t.paymentGateway],
                        billingHistoryLink: (0, af.tW)(t.paymentGateway, "BILLING_HISTORY"),
                    }),
                }),
            ],
        })
    );
}
function u6(e) {
    let { locale: t } = e,
        {
            receipts: n,
            hasFetched: i,
            hasFailed: s,
            loadNextPage: l,
        } = (function () {
            let [e, t] = T.useState(uI),
                [n, i] = T.useState(!1),
                [s, l] = T.useState(!1),
                [r, a] = T.useState(!1),
                o = T.useCallback((e, n) => {
                    ti.Bo.get({
                        url: I.Rsh.BILLING_HISTORY,
                        query: { before: e ?? void 0, limit: n },
                        rejectWithError: !0,
                    })
                        .then((n) => {
                            let { body: i } = n,
                                s = i.receipts.map(uf);
                            t((t) => ({ receipts: null == e ? s : [...t.receipts, ...s], cursor: i.cursor }));
                        })
                        .catch(() => {
                            null == e && l(!0);
                        })
                        .finally(() => {
                            (i(!0), a(!1));
                        });
                }, []);
            T.useEffect(() => {
                o(null, 30);
            }, [o]);
            let u = T.useCallback(() => {
                r || null == e.cursor || (a(!0), o(e.cursor, 10));
            }, [r, o, e.cursor]);
            return { receipts: e.receipts, hasFetched: n, hasFailed: s, loadNextPage: u };
        })(),
        r = (0, f.bG)([ue.A], () => ue.A.getPremiumTypeSubscription()),
        a = null != r && r.isPurchasedExternally;
    return i
        ? (0, p.jsxs)("div", {
              className: u3.GD,
              children: [
                  null != r && a ? (0, p.jsx)(u4, { subscription: r }) : null,
                  n.length > 0
                      ? (0, p.jsxs)("div", {
                            className: iE()(u3.PQ, u3.GD),
                            children: [
                                (0, p.jsx)("div", {
                                    className: iE()(u3.Nj, u3.Bd),
                                    children: (0, p.jsxs)(sb.A, {
                                        className: u3.Yi,
                                        children: [
                                            (0, p.jsx)("div", {
                                                className: uU.p6,
                                                children: U.intl.string(U.t["5t11BV"]),
                                            }),
                                            (0, p.jsx)("div", {
                                                className: u3.Ir,
                                                children: U.intl.string(U.t.yAAPb2),
                                            }),
                                            (0, p.jsx)("div", {
                                                className: uU.vj,
                                                children: U.intl.string(U.t["6MqHXV"]),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, p.jsx)(u5, { receipts: n, locale: t, loadNextPage: l }),
                            ],
                        })
                      : s
                        ? (0, p.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              children: U.intl.string(U.t["fb3n+4"]),
                          })
                        : a
                          ? null
                          : (0, p.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: U.intl.string(U.t.GqvDkk),
                            }),
              ],
          })
        : (0, p.jsx)(oC.y, {});
}
var u8 = n(545075);
let u7 = (0, E.E2)(h.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            var e;
            let t = (0, f.bG)([ut.default], () => ut.default.locale),
                { enabled: n } = ((e = { location: "TransactionHistory" }), { enabled: uu.useConfig(e).enabled });
            return (0, p.jsxs)(p.Fragment, {
                children: [(0, p.jsx)(u8.kb, {}), n ? (0, p.jsx)(u6, { locale: t }) : (0, p.jsx)(ua.A, { locale: t })],
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.obLrcK)],
    }),
    u9 = (0, E.zZ)(h.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.obLrcK),
        buildLayout: () => [u7],
    }),
    de = (0, E.t_)(h.X.BILLING_PANEL, {
        useTitle: () => U.intl.string(U.t.oeUm2s),
        buildLayout: () => [ur, u9],
        useObscuredNotice: oh.L,
    }),
    dt = (0, E.i4)(h.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.oeUm2s),
        icon: oE.B,
        buildLayout: () => [de],
    });
var dn = n(70283),
    di = n(682618),
    ds = n(92202),
    dl = n(859492),
    dr = n(962644),
    da = n(35587),
    du = n(86379);
let dd = (0, E.E2)(h.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: u8.uK,
        usePredicate: () => (0, du.Hp)(),
        useSearchTerms: () => [U.intl.string(U.t.vwMEHS)],
    }),
    dc = (0, E.zZ)(h.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [dd] });
var dg = n(704333),
    dm = n(414499),
    dA = n(31300),
    dE = n(997101);
let dh = "https://discord.com",
    dx = {
        [dE.d.US]: [
            { id: "walmart", name: "Walmart", url: dh },
            { id: "target", name: "Target", url: dh },
            { id: "amazon", name: "Amazon", url: dh },
            { id: "best_buy", name: "Best Buy", url: dh },
        ],
        [dE.d.GB]: [
            { id: "tesco", name: "Tesco", url: dh },
            { id: "smyths_toys", name: "Smythstoys", url: dh },
            { id: "sainsburys", name: "Sainsbury\u2019s", url: dh },
            { id: "asda", name: "Asda", url: dh },
        ],
        [dE.d.CA]: [{ id: "eb_games", name: "EBGames", url: dh }],
        [dE.d.IT]: [{ id: "gamelife", name: "Gamelife", url: dh }],
        [dE.d.ES]: [{ id: "game", name: "GAME", url: dh }],
        [dE.d.FR]: [{ id: "micromania", name: "Micromania", url: dh }],
    },
    dS = [],
    dp = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="216" height="162"><rect x="1" y="1" width="214" height="160" fill="none" stroke="hotpink" stroke-width="2"/></svg>')}`;
var dT = n(534284);
function df(e) {
    let { enabled: t } = (0, ds.K)({ location: e }),
        n = (0, dT.P)(),
        i = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.storeCountry?.country);
    return t && n && null != i && oT.ob.has(i);
}
var dI = n(178881);
function d_(e) {
    let { icon: t, children: n } = e;
    return (0, p.jsxs)(Q.E, {
        variant: "text-xs/normal",
        color: "text-default",
        className: dI.A,
        children: [
            (0, p.jsx)(t, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, p.jsx)("span", { children: n }),
        ],
    });
}
let dN = (0, E.zZ)(h.X.GIFT_CARDS_MARKETING_BANNER_CATEGORY, {
        buildLayout: () => [dC],
        usePredicate: () => df("GiftInventoryMarketingBanner"),
    }),
    dC = (0, E.E2)(h.X.GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = df("GiftCardsGiftInventoryBanner"),
                t = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.storeCountry?.country),
                n = (function () {
                    let { analyticsLocations: e } = (0, ez.Ay)();
                    return T.useCallback(
                        (t) => {
                            td.default.track(I.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                                partner: t.id,
                                cta_type: "retailer",
                                url: t.url,
                                promotion: "gift_cards_in_app_marketing",
                                location_stack: e,
                            });
                        },
                        [e],
                    );
                })(),
                i = T.useMemo(
                    () =>
                        (null == t ? dS : (dx[t] ?? dS)).map((e) => ({
                            text: e.name,
                            onClick: () => {
                                (n(e), (0, ox.A)(e.url));
                            },
                        })),
                    [t, n],
                );
            return e
                ? (0, p.jsx)(op, {
                      size: "compact",
                      title: U.intl.string(of.default.Ja5Q8Z),
                      graphicSrc: dp,
                      actions: i,
                      children: (0, p.jsxs)(Z.B, {
                          direction: "vertical",
                          align: "start",
                          gap: 8,
                          children: [
                              (0, p.jsx)(d_, { icon: dg.B, children: U.intl.string(of.default["9xo1g9"]) }),
                              (0, p.jsx)(d_, { icon: dm.h, children: U.intl.string(of.default.I5UWh9) }),
                              (0, p.jsx)(d_, {
                                  icon: uN.GiftIcon,
                                  children: U.intl.format(of.default.ZuneBP, {
                                      onBillingSettingsClick: () => (0, ng.openUserSettings)(h.X.BILLING_PANEL),
                                  }),
                              }),
                              (0, p.jsx)(d_, {
                                  icon: dA.k,
                                  children: U.intl.format(of.default.UwYHGm, { websiteUrl: oT.C1 }),
                              }),
                          ],
                      }),
                  })
                : null;
        },
        useSearchTerms: () => [],
    });
var dy = n(982240),
    db = n(5755),
    dv = n(914410),
    dj = n(95769),
    dO = n(573343);
let dL = "UserSettingsGiftingBadgeProgress";
function dR(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, p.jsxs)("div", {
        className: iE()(dO.fO, { [dO.bF]: i }),
        children: [
            null != n && (0, p.jsx)("img", { src: n, alt: "", className: dO.si }),
            (0, p.jsxs)("div", {
                className: dO.tc,
                children: [
                    (0, p.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, p.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: U.intl.format(dj.default.qvx9E4, { count: (0, dy.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function dD(e) {
    let { tiers: t, currentTier: n } = e,
        i = (0, dl.b9)(dL);
    return (0, p.jsx)("div", {
        className: dO.dw,
        children: t.map((e) => (0, p.jsx)(dR, { tier: e, iconUrl: (0, dl.Se)(e, i), active: e.key === n?.key }, e.key)),
    });
}
function dP(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(tw.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: s } = (0, db.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, p.jsx)("div", {
        className: dO.NG,
        children: (0, p.jsx)(v.$, {
            variant: "primary",
            icon: uN.GiftIcon,
            text: U.intl.string(dj.default.DZnomS),
            onClick: s,
        }),
    });
}
function dG(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: s, giftsRemaining: l } = e,
        r = (0, dy.rL)(i),
        a = (0, dy.rL)(s),
        o = (0, dl.GZ)(n, i, s),
        u = (0, dl.b9)(dL),
        d = (0, dl.Se)(i, u),
        c = (0, dl.Se)(s, u);
    return (
        (t =
            null != s
                ? U.intl.formatToPlainString(dj.default.XTX3OO, { count: l, nextTier: s?.name ?? "" })
                : U.intl.formatToPlainString(dj.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, p.jsxs)("div", {
            className: dO.mY,
            children: [
                null != d &&
                    (0, p.jsx)("div", {
                        className: dO.fC,
                        children: (0, p.jsx)("img", { src: d, alt: "", className: dO.qS }),
                    }),
                (0, p.jsxs)("div", {
                    className: dO.Qs,
                    children: [
                        (0, p.jsx)(Q.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, p.jsx)(dv.Ay, { variant: dv.qP.BLUE, weight: dv.fh.MEDIUM, progress: o }),
                        (0, p.jsx)(Q.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: dO.qg,
                            children: U.intl.format(dj.default.iIpfQe, {
                                threshold: null != s ? a : r,
                                count: null != s ? n : r,
                            }),
                        }),
                    ],
                }),
                null != c &&
                    (0, p.jsx)("div", {
                        className: dO.fC,
                        children: (0, p.jsx)("img", { src: c, alt: "", className: dO.qS }),
                    }),
            ],
        })
    );
}
function dM(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: s,
            giftsRemaining: l,
            tiers: r,
        } = (0, f.cf)([dy.Ay], () => ({
            badgeProgress: dy.Ay.getSingleRequirementProgress(dn.$.GIFTING)?.current ?? 0,
            currentTier: dy.Ay.getCurrentTier(dn.$.GIFTING),
            nextTier: dy.Ay.getNextTier(dn.$.GIFTING),
            giftsRemaining: dy.Ay.getRemainingToNextTier(dn.$.GIFTING),
            tiers: dy.Ay.getBadgeById(dn.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, p.jsxs)("div", {
              className: dO.kL,
              children: [
                  (0, p.jsxs)("div", {
                      className: dO.Jo,
                      children: [
                          n > 0 &&
                              (0, p.jsxs)(p.Fragment, {
                                  children: [
                                      (0, p.jsx)(dG, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: s,
                                          giftsRemaining: l,
                                      }),
                                      (0, p.jsx)("div", { className: dO.yF }),
                                  ],
                              }),
                          (0, p.jsx)(dD, { tiers: r, currentTier: i }),
                          (0, p.jsx)(Q.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: dO.PJ,
                              children: U.intl.string(dj.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, p.jsx)(dP, { analyticsLocation: t, location: dL }),
              ],
          });
}
let dU = (0, E.zZ)(h.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => U.intl.string(dj.default.sFokBp),
        buildLayout: () => [dV],
        usePredicate: () => {
            let e = (0, dl.F5)("gift_inventory"),
                t = (0, f.bG)([dy.Ay], () => dy.Ay.getBadgeById(dn.$.GIFTING));
            return e && null != t;
        },
    }),
    dV = (0, E.E2)(h.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [U.intl.string(dj.default.sFokBp)],
        Component: () => (0, p.jsx)(dM, {}),
    });
var dk = n(264779),
    dw = n(412260),
    dF = n(555393),
    dB = n(725807),
    dz = n(212168),
    dY = n(469778),
    dX = n(45938),
    dH = n(109802),
    dW = n(869038),
    dK = n(380856);
function dZ(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, p.jsxs)(sb.A, {
        className: iE()(dK.wx, n),
        align: sb.A.Align.CENTER,
        children: [
            (0, p.jsx)("div", { className: dK.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function dq(e) {
    let { children: t, className: n } = e;
    return (0, p.jsx)("div", { className: iE()(dK.rf, n), children: t });
}
class dQ extends T.PureComponent {
    static Header = dZ;
    static Body = dq;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, p.jsx)("div", { className: iE()(dK.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var d$ = n(180522),
    dJ = n(871123),
    d0 = n(366523),
    d1 = n(280450),
    d2 = n(30793),
    d3 = n(97352),
    d5 = n(67480),
    d4 = n(615396),
    d6 = n(274904);
class d8 extends T.PureComponent {
    _copyModeTimeout = new rX.Ep();
    state = { copyMode: dH.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case dH.q.SUCCESS:
                return U.intl.string(U.t.XVvPjU);
            case dH.q.ERROR:
                return U.intl.string(U.t.i4GM3L);
            default:
                return U.intl.string(U.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        dW.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, dX.AK)(t, n),
            (0, uj.C)(
                e,
                () => this.setState({ copyMode: dH.q.SUCCESS }),
                () => this.setState({ copyMode: dH.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: dH.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, p.jsxs)(sb.A, {
            direction: sb.A.Direction.VERTICAL,
            className: d6.Gj,
            children: [
                (0, p.jsx)(dH.e, {
                    className: d6.ph,
                    value: (0, dX.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uj.p5,
                    hideMessage: e ? U.intl.string(U.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: l3.XD.BRAND,
                    buttonLook: l3.pR.FILLED,
                }),
                (0, p.jsxs)("div", {
                    className: d6.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, p.jsxs)(T.Fragment, {
                                  children: [
                                      U.intl.format(U.t.ltVZcJ, { hours: t.expiresAt.diff(ix()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, p.jsx)(n9.D, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: U.intl.string(U.t.v6Yazx),
                        }),
                    ],
                }),
            ],
        });
    }
}
class d7 extends T.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await dW.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && dW.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, dJ.bF)(e)
            ? (0, p.jsx)(d0.e, { shape: "square", sku: e, containerClassName: d6.ez })
            : null != t
              ? (0, p.jsx)(d$.A, { giftStyle: t, className: d6.ez, shouldAnimate: this.state.isHovered })
              : (0, p.jsx)(sn.A, { game: n, size: sn.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, dJ.bF)(e)
            ? (0, p.jsxs)("div", {
                  className: iE()(d6.Oc, d6.ic),
                  children: [
                      (0, p.jsx)(sn.A, { game: n, size: sn.M.XSMALL, skuId: e.id, className: d6._u }),
                      U.intl.format(U.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, p.jsx)("div", { className: d6.Oc, children: U.intl.format(U.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === tJ.FB
                    ? U.intl.string(U.t.odsU6W)
                    : i === tJ.Bu && null != n
                      ? U.intl.formatToPlainString(n.interval === tJ.WT.MONTH ? U.t.uZjpiJ : U.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : U.intl.formatToPlainString(n.interval === tJ.WT.MONTH ? U.t.rCJvqo : U.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, p.jsx)("div", { className: d6.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, p.jsxs)(sb.A, {
            justify: sb.A.Justify.BETWEEN,
            align: sb.A.Align.CENTER,
            className: d6.pe,
            children: [
                (0, p.jsx)(Q.E, { variant: "text-md/normal", children: U.intl.string(U.t.lELyPj) }),
                (0, p.jsx)(v.$, {
                    variant: "primary",
                    size: "sm",
                    text: U.intl.string(U.t.Q3Qguo),
                    loading: this.state.isCreating,
                    onClick: this.handleGenerateGiftCode,
                }),
            ],
        });
    }
    setIsHovered(e) {
        this.setState({ isHovered: e });
    }
    render() {
        let {
                entitlements: e,
                application: t,
                giftCodes: n,
                className: i,
                sku: s,
                isFetching: l,
                hideCodes: r,
            } = this.props,
            { isOpen: a } = this.state;
        return (0, p.jsxs)(dQ, {
            className: i,
            children: [
                (0, p.jsx)(n9.D, {
                    onClick: this.handleToggleOpen,
                    className: d6.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, p.jsx)(dQ.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, p.jsxs)("div", {
                            className: d6.MY,
                            children: [
                                (0, p.jsxs)(sb.A, {
                                    align: sb.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, p.jsxs)("div", {
                                            className: d6.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, p.jsx)(ub.A, {
                                    direction: a ? ub.A.Directions.UP : ub.A.Directions.DOWN,
                                    className: d6.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, p.jsx)(dQ.Body, {
                          children: l
                              ? (0, p.jsx)(oC.y, { className: d6.u1 })
                              : (0, p.jsxs)(T.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, p.jsx)(d8, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let d9 = f.Ay.connectStores([d5.A, tu.A, d2.A, i6.A, d3.A, d1.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        s = d5.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = d2.A.getForGifterSKUAndPlan(d1.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: tu.A.enabled,
        isFetching: d2.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: d2.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: i6.A.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, d4.c9)(n) : null,
        giftCodes: l,
    };
})(d7);
var ce = n(725570),
    ct = n(736653),
    cn = n(46054);
let ci = ix().duration(30, "days");
var cs = n(416052),
    cl = n(878309);
function cr(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, p.jsx)(sf.a, {
        title: "",
        size: "md",
        input: (0, p.jsx)("div", { className: cl.aR }),
        onClose: async () => await t(),
        actions: [{ text: U.intl.string(U.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, p.jsxs)("div", {
            className: cl.t4,
            children: [
                (0, p.jsx)(N.D, { variant: "heading-xl/semibold", children: U.intl.string(U.t.iufib1) }),
                (0, p.jsx)(Q.E, { variant: "text-md/normal", className: cl.G3, children: U.intl.string(U.t.eAn6z2) }),
            ],
        }),
    });
}
let ca = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: s, transitionState: l } = e,
        [r, a] = T.useState(null),
        o = (0, tZ.GV)(),
        { analyticsLocations: u } = (0, ez.Ay)(tw.A.USER_SETTINGS_GIFT_INVENTORY);
    return (T.useEffect(() => {
        null == i &&
            (0, dk.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, s.id, s.outboundTitle, s.partnerId, n, u]),
    null != r)
        ? (0, p.jsx)(cr, { onClose: t, transitionState: l })
        : null == i
          ? (0, p.jsx)(oC.y, { className: cl.Lq })
          : (0, p.jsx)(sf.a, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, p.jsxs)("div", {
                    className: cl.N1,
                    children: [
                        (0, p.jsx)("div", { className: cl.Qw }),
                        (0, p.jsx)(N.D, { variant: "heading-xl/semibold", children: U.intl.string(U.t["23BfZh"]) }),
                        (0, p.jsx)(Q.E, {
                            variant: "text-md/normal",
                            className: cl.G3,
                            children: s.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: U.intl.string(U.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: U.intl.string(U.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, dk.kc)(i, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(su.c, { className: cl.M5 }),
                        (0, p.jsx)(t6.D, {
                            label: U.intl.string(U.t.s9LFQh),
                            helperText: U.intl.string(U.t["F+nFTZ"]),
                            children: (0, p.jsx)(cs.A, {
                                value: i,
                                buttonColor: l3.$n.Colors.BRAND,
                                buttonLook: l3.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var co = n(136380);
function cu(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [s, l] = T.useState(!1),
        [r, a] = T.useState(!1);
    function o() {
        return l((e) => !e);
    }
    let u = (0, ct.Ay)(),
        d = (0, dk.WD)(n.id, u),
        c = null != i,
        g = T.useMemo(
            () =>
                (0, iS.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? ix()(n.outboundRedemptionEndDate)
                            : ix()(n.endDate).add(ci)
                        : ix()(n.endDate),
                    "LL",
                ),
            [n, c],
        );
    c && s
        ? (t = U.intl.format(U.t.pkxVx6, { endDate: g, onClickDetails: o }))
        : c && !s
          ? (t = U.intl.format(U.t["4sFeob"], { endDate: g, onClickDetails: o }))
          : !c && s
            ? (t = U.intl.format(U.t["RBnE+l"], { endDate: g, onClickDetails: o }))
            : c || s || (t = U.intl.format(U.t["57+7Qn"], { endDate: g, onClickDetails: o }));
    let m = c ? U.intl.string(U.t["2cHUti"]) : U.intl.string(U.t.O13yhz),
        A = (0, dF.N)()?.isEligible === !0,
        E = T.useCallback(() => a(!1), []),
        { outboundTitle: h, outboundTermsAndConditions: x } = n;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)("div", {
                className: co.AX,
                children: [
                    (0, p.jsxs)("div", {
                        className: co.Pg,
                        children: [
                            (0, p.jsxs)("div", {
                                className: co.At,
                                children: [
                                    (0, p.jsx)("div", {
                                        className: co.$G,
                                        children: (0, p.jsx)("img", { alt: "", src: d, className: co.IJ }),
                                    }),
                                    (0, p.jsxs)("div", {
                                        children: [
                                            (0, p.jsx)(N.D, { variant: "heading-md/semibold", children: h }),
                                            (0, p.jsx)(Q.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (c || A) && (0, p.jsx)(v.$, { text: m, onClick: () => a(!0), size: "sm" }),
                        ],
                    }),
                    s &&
                        (0, p.jsx)(Q.E, {
                            className: co.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: cn.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, p.jsx)(ce.aF, {
                    renderModal: (e) =>
                        (0, p.jsx)(ca, {
                            ...e,
                            onClose: E,
                            onClaim: dr.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: E,
                }),
        ],
    });
}
function cd(e) {
    let { redesign: t = !1 } = e,
        n = (0, f.yK)([dY.A], () => dY.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, dF.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: s,
            claimedEndedOutboundPromotions: l,
            claimedOutboundPromotionCodeMap: r,
        } = (0, da.y7)(),
        a = n.find((e) => e.giftCodeBatchId === tJ.FB && !e.consumed),
        o = n.filter((e) => e.giftCodeBatchId === tJ.Bu && !e.consumed) ?? [],
        [u, d] = W().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === tJ.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = s.length + l.length > 0,
        g =
            t || !c
                ? null
                : (0, p.jsxs)("div", {
                      className: co.N1,
                      children: [
                          (0, p.jsx)(N.D, { variant: "heading-md/semibold", children: U.intl.string(U.t.wFsj3B) }),
                          (0, p.jsx)(su.c, { className: co.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, p.jsxs)("div", {
                      className: co.uo,
                      children: [
                          (0, p.jsx)(ad.t, {
                              size: "md",
                              color: n6.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: co.PC,
                          }),
                          (0, p.jsx)(Q.E, {
                              variant: "text-md/normal",
                              className: co.Qw,
                              children: U.intl.format(U.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tH.default)(), (0, t7.pX)(I.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, p.jsx)(dB.A, {
                              showGradient: !0,
                              className: co.aA,
                              subscriptionTier: tJ.pe.TIER_2,
                              textOptions: { textOverride: U.intl.string(U.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, p.jsxs)("div", {
        children: [
            g,
            (0, p.jsx)(dz.A, {
                className: co.Yj,
                isShown: !1 === i && c,
                type: dz.i.PREMIUM,
                hasBackground: !0,
                children: (0, p.jsxs)("div", {
                    className: co.DE,
                    children: [
                        m,
                        l.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, p.jsx)(cu, { outboundPromotion: n, code: t }, n.id);
                        }),
                        s.map((e) => (0, p.jsx)(cu, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, p.jsx)(
                                  d9,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: tJ.FB,
                                  },
                                  (0, dX.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, p.jsx)(
                                  d9,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: tJ.Bu,
                                  },
                                  (0, dX.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, p.jsx)(
                                  d9,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: tJ.Bu,
                                  },
                                  (0, dX.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let cc = (0, E.zZ)(h.X.MY_GIFTS_CATEGORY, {
        useTitle: cm,
        buildLayout: () => [cg],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, f.cf)(
                    [dw.A],
                    () => ({
                        claimedOutboundPromotionCodes: dw.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: dw.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, da.T1)({ includeClaimedPromotions: !0 }),
                i = (0, dk.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    cg = (0, E.E2)(h.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [cm()],
        Component: () => (0, p.jsx)(cd, { redesign: !0 }),
    });
function cm() {
    return U.intl.string(U.t.YzjdWJ);
}
var cA = n(339048);
function cE() {
    let e = (0, f.yK)([dY.A], () => dY.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = W().groupBy(e, (e) => (0, dX.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [n, i] = T.useState(!1);
    if (
        (T.useEffect(() => {
            (0, cA.XJ)().then(() => i(!0));
        }, []),
        !n)
    )
        return (0, p.jsx)(oC.y, { className: co.Lq });
    if (0 === Object.keys(t).length)
        return (0, p.jsxs)("div", {
            className: co.p$,
            children: [
                (0, p.jsx)(uv.H, { className: co.ks, children: U.intl.string(U.t.B1qgZn) }),
                (0, p.jsx)("p", {
                    className: co.WO,
                    children: U.intl.format(U.t.HezvJ8, {
                        onClick: function () {
                            (0, ng.openUserSettings)(h.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let s = W()
        .keys(t)
        .map((e) => {
            let { skuId: n, subscriptionPlanId: i, giftStyle: s } = (0, dX.X6)(e);
            return (0, p.jsx)(d9, { skuId: n, subscriptionPlanId: i, entitlements: t[e], giftStyle: s }, e);
        });
    return (0, p.jsx)(Z.B, { gap: "lg", children: s });
}
let ch = (0, E.zZ)(h.X.PURCHASED_GIFTS_CATEGORY, { useTitle: cS, buildLayout: () => [cx] }),
    cx = (0, E.E2)(h.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [cS()], Component: () => (0, p.jsx)(cE, {}) });
function cS() {
    return U.intl.string(U.t.FWe6CP);
}
var cp = n(532446),
    cT = n(499454);
class cf extends T.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: I.ZSU.BUTTON_CTA };
    }
    handleChange = (e) => {
        this.setState({ codeInput: e, hasError: !1 });
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        let { codeInput: t } = this.state;
        if ("" === t) return;
        let n = t.trim();
        this.setState({ submitting: !0 });
        try {
            if (this.props.acceptGiftCardRedemption)
                try {
                    (await (0, oR.Qp)(n),
                        (0, oR.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, oy.A)(),
                        }),
                        this.setState({ codeInput: "" }));
                    return;
                } catch {}
            let e = (0, dX.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await dW.Ay.resolveGiftCode(e);
            if (null != i && null != i.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            (td.default.track(I.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: I.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: I.ZSU.BUTTON_CTA,
                },
            }),
                (0, cT.h)({ processedCode: e }),
                this.setState({ codeInput: "" }));
        } catch (e) {
            this.setState({ hasError: !0 });
        } finally {
            this.setState({ submitting: !1 });
        }
    };
    render() {
        let { redesign: e, obscureInput: t } = this.props,
            { codeInput: n, submitting: i, hasError: s, isPromoCode: l } = this.state,
            r = e ? U.intl.string(U.t["hVEn/j"]) : U.intl.string(U.t.SeKIoS),
            a = e ? U.intl.string(U.t.epHMtp) : void 0;
        return (0, p.jsx)(n7.n, {
            label: e ? void 0 : U.intl.string(U.t["il+VCo"]),
            children: (0, p.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, p.jsxs)(cp.M, {
                    children: [
                        (0, p.jsx)(s_.k, {
                            label: r,
                            description: a,
                            type: t ? "password" : "text",
                            value: n,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !l && s ? U.intl.string(U.t.Y11a2u) : null,
                            helperText: l
                                ? U.intl.format(U.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${n}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, p.jsx)(v.$, {
                            variant: "primary",
                            text: U.intl.string(U.t.KIpp7M),
                            type: "submit",
                            loading: i,
                            disabled: e && 0 === n.length,
                        }),
                    ],
                }),
            }),
        });
    }
}
function cI(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, o7.c)({ location: "UserSettingsBilling" }),
        i = T.useContext(td.AnalyticsContext),
        s = (0, f.bG)([tu.A], () => tu.A.enabled);
    return (0, p.jsx)(cf, { analyticsContext: i, obscureInput: s, acceptGiftCardRedemption: n, redesign: t });
}
let c_ = (0, E.zZ)(h.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => U.intl.string(U.t["il+VCo"]),
        buildLayout: () => [cN],
        usePredicate: () => !(0, du.Hp)(),
    }),
    cN = (0, E.E2)(h.X.REDEEM_CODE_INPUT, {
        Component: () => (0, p.jsx)(cI, { redesign: !0 }),
        useSearchTerms: () => [U.intl.string(U.t["jcSP+g"]), U.intl.string(U.t["il+VCo"])],
    }),
    cC = (0, E.t_)(h.X.GIFT_PANEL, {
        useTitle: () => U.intl.string(U.t["jcSP+g"]),
        buildLayout: () => [dN, c_, cc, dU, ch, dc],
        initialize: () => {
            (dr.Ay.fetchClaimedOutboundPromotionCodes(), (0, dl.Ig)("gift_inventory") && (0, di.o0)(dn.$.GIFTING));
        },
    }),
    cy = (0, E.i4)(h.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["jcSP+g"]),
        icon: uN.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, da.IO)().length;
            return T.useMemo(() => ({ badgeType: S.Xi.COUNT, count: e }), [e]);
        },
        getDismissibleBadges: () => {
            let e = { location: "UserSettingsGiftInventory" },
                t = o7.A.getConfig(e).enabled,
                n = ds.A.getConfig(e).enabled;
            return t && n ? [{ badgeType: S.Xi.NEW, dismissibleContent: eA.M.GIFT_INVENTORY_SETTINGS_NEW_BADGE }] : [];
        },
        buildLayout: () => [cC],
    });
var cb = n(659758),
    cv = n(405372),
    cj = n(877624),
    cO = n(269115),
    cL = n(462887),
    cR = n(73825),
    cD = n(531260),
    cP = n(160946),
    cG = n(721668),
    cM = n(224016),
    cU = n(526292),
    cV = n(881489),
    ck = n(106512),
    cw = n(22118),
    cF = n(103411),
    cB = n(190187),
    cz = n(930861),
    cY = n(854627),
    cX = n(889227),
    cH = n(326084),
    cW = n(851746),
    cK = n(664654),
    cZ = n(912140),
    cq = n(953727);
let cQ = (e) => {
        let { className: t, backgroundColor: n, backgroundCircleSize: i, ...s } = e;
        return (0, p.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, cq.A)({ ...s }),
            children: [
                (0, p.jsx)("circle", { r: i ?? "40%", cx: "50%", cy: "50%", className: n }),
                (0, p.jsxs)("g", {
                    transform: "translate(50, 50) scale(0.6) translate(-51, -52)",
                    children: [
                        (0, p.jsx)("path", {
                            d: "M52.0002 11.7556L28.3402 35.4156V68.6956L52.0002 92.3556L75.6602 68.6956V35.4156L52.0002 11.7556ZM63.8302 63.7556L52.0002 75.6289L40.1702 63.7989V40.3122L52.0002 28.4822L63.8302 40.3122V63.7556Z",
                            fill: "#FF6BFA",
                            className: t,
                        }),
                        (0, p.jsx)("path", {
                            d: "M40.1702 40.3122V63.7989L52.0002 75.6289L63.8302 63.7989V40.3122L52.0002 28.4822L40.1702 40.3122Z",
                            fill: "#FFDEF9",
                        }),
                        (0, p.jsx)("path", {
                            d: "M52.0002 11.7556V28.4822L63.8302 40.3122L75.6602 35.4156L52.0002 11.7556Z",
                            fill: "#FFB0FF",
                        }),
                    ],
                }),
            ],
        });
    },
    c$ = (e) => {
        let { ellipseOpacity: t, circleColor: n, ...i } = e,
            s = (0, ct.Ay)(),
            l = (0, cL.q)(s),
            r = null != n ? n : l ? "url(#paint0_linear_1055_83268)" : "url(#paint0_linear_1282_11557)";
        return (0, p.jsxs)("svg", {
            style: { overflow: "visible" },
            width: "80%",
            height: "80%",
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, cq.A)({ ...i }),
            children: [
                (0, p.jsxs)("svg", {
                    width: "100",
                    height: "100",
                    viewBox: "0 0 114 114",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, p.jsxs)("defs", {
                            children: [
                                (0, p.jsxs)("linearGradient", {
                                    id: "purple-gradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0%",
                                    children: [
                                        (0, p.jsx)("stop", {
                                            offset: "0%",
                                            style: { stopColor: "#E2C7FA", stopOpacity: 1 },
                                        }),
                                        (0, p.jsx)("stop", {
                                            offset: "100%",
                                            style: { stopColor: "#F3D3DE", stopOpacity: 1 },
                                        }),
                                    ],
                                }),
                                (0, p.jsxs)("linearGradient", {
                                    id: "dark-purple-gradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "0%",
                                    y2: "100%",
                                    children: [
                                        (0, p.jsx)("stop", {
                                            offset: "0%",
                                            style: { stopColor: "rgb(36,23,49)", stopOpacity: 1 },
                                        }),
                                        (0, p.jsx)("stop", {
                                            offset: "100%",
                                            style: { stopColor: "rgb(36,23,49)", stopOpacity: 1 },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, p.jsx)("ellipse", {
                            cx: "57.2768",
                            cy: "57.0796",
                            rx: "56.3726",
                            ry: "56.3726",
                            fill: null != n ? n : r,
                            fillOpacity: null != t ? t : l ? 0.5 : 0.2,
                        }),
                        (0, p.jsxs)("g", {
                            width: "65",
                            transform: "translate(50, 50) scale(.7) translate(-10, -39)",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                (0, p.jsx)("path", {
                                    d: "M42.0084 14.8866L33.7687 17.7832C33.3446 17.9281 32.9766 18.2015 32.7161 18.565C32.4555 18.9285 32.3154 19.3641 32.3154 19.8109C32.3154 20.2576 32.4555 20.6932 32.7161 21.0567C32.9766 21.4203 33.3446 21.6936 33.7687 21.8385L42.0084 24.7351C42.3147 24.8404 42.593 25.0138 42.8221 25.2422C43.0512 25.4705 43.2252 25.7478 43.3309 26.053L46.2373 34.2649C46.3827 34.6875 46.657 35.0543 47.0217 35.3139C47.3865 35.5736 47.8236 35.7132 48.2718 35.7132C48.7201 35.7132 49.1572 35.5736 49.522 35.3139C49.8867 35.0543 50.161 34.6875 50.3064 34.2649L53.2128 26.053C53.3204 25.7488 53.495 25.4725 53.7239 25.2444C53.9528 25.0164 54.23 24.8423 54.5353 24.7351L62.7896 21.8385C63.2136 21.6936 63.5817 21.4203 63.8422 21.0567C64.1028 20.6932 64.2428 20.2576 64.2428 19.8109C64.2428 19.3641 64.1028 18.9285 63.8422 18.565C63.5817 18.2015 63.2136 17.9281 62.7896 17.7832L54.5353 14.8866C54.2315 14.7767 53.9557 14.6018 53.7272 14.374C53.4987 14.1463 53.3231 13.8714 53.2128 13.5687L50.3064 5.34234C50.161 4.91974 49.8867 4.55297 49.522 4.2933C49.1572 4.03363 48.7201 3.89404 48.2718 3.89404C47.8236 3.89404 47.3865 4.03363 47.0217 4.2933C46.657 4.55297 46.3827 4.91974 46.2373 5.34234L43.3309 13.5687C43.2233 13.8729 43.0487 14.1492 42.8198 14.3773C42.591 14.6054 42.3137 14.7794 42.0084 14.8866Z",
                                    fill: "white",
                                    fillOpacity: l ? "0.6" : "0.4",
                                }),
                                (0, p.jsx)("path", {
                                    d: "M34.0878 3.57968L33.0393 0.634802C32.9888 0.483384 32.8917 0.351665 32.7618 0.258321C32.6319 0.164978 32.4759 0.114746 32.3158 0.114746C32.1556 0.114746 31.9996 0.164978 31.8697 0.258321C31.7398 0.351665 31.6427 0.483384 31.5922 0.634802L30.6217 3.57968C30.5838 3.68745 30.5221 3.78534 30.4411 3.86607C30.3601 3.94681 30.2619 4.00831 30.1538 4.04602L27.1555 5.02189C27.0067 5.07415 26.8777 5.17117 26.7865 5.29956C26.6953 5.42795 26.6464 5.58137 26.6464 5.73868C26.6464 5.89598 26.6953 6.04941 26.7865 6.17779C26.8777 6.30618 27.0067 6.4032 27.1555 6.45547L30.0758 7.47451C30.1839 7.51222 30.2821 7.57373 30.3631 7.65446C30.4441 7.7352 30.5059 7.83308 30.5437 7.94085L31.5575 10.8426C31.6081 10.994 31.7052 11.1257 31.835 11.219C31.9649 11.3124 32.121 11.3626 32.2811 11.3626C32.4412 11.3626 32.5973 11.3124 32.7271 11.219C32.857 11.1257 32.9541 10.994 33.0047 10.8426L34.0878 7.94085C34.1257 7.83308 34.1874 7.7352 34.2684 7.65446C34.3494 7.57373 34.4476 7.51222 34.5558 7.47451L37.476 6.45547C37.6249 6.4032 37.7538 6.30618 37.845 6.17779C37.9362 6.04941 37.9852 5.89598 37.9852 5.73868C37.9852 5.58137 37.9362 5.42795 37.845 5.29956C37.7538 5.17117 37.6249 5.07415 37.476 5.02189L34.5211 4.00284C34.4237 3.9656 34.3349 3.90883 34.2604 3.83604C34.1859 3.76326 34.1271 3.676 34.0878 3.57968Z",
                                    fill: "white",
                                    fillOpacity: "0.8",
                                }),
                            ],
                        }),
                    ],
                }),
                (0, p.jsxs)("defs", {
                    children: [
                        (0, p.jsxs)("filter", {
                            id: "filter0_d_1282_11577",
                            x: "-6.55945",
                            y: "0.382812",
                            width: "89.2926",
                            height: "70.3945",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                (0, p.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                (0, p.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha",
                                }),
                                (0, p.jsx)("feOffset", { dy: "4" }),
                                (0, p.jsx)("feGaussianBlur", { stdDeviation: "5" }),
                                (0, p.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
                                (0, p.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
                                }),
                                (0, p.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1282_11577",
                                }),
                                (0, p.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_1282_11577",
                                    result: "shape",
                                }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "paint0_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "paint2_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "paint1_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "paint1_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "paint2_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "paint0_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "paint0_linear_1282_11557",
                            x1: "0.904297",
                            y1: "56.5004",
                            x2: "113.649",
                            y2: "56.5004",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "paint0_linear_684_72736",
                            x1: "0.904236",
                            y1: "57.0796",
                            x2: "113.649",
                            y2: "57.0796",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "paint0_linear_1055_83179",
                            x1: "0.904236",
                            y1: "56.5005",
                            x2: "113.649",
                            y2: "56.5005",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "paint0_linear_1055_83268",
                            x1: "0.904236",
                            y1: "57.2461",
                            x2: "113.649",
                            y2: "57.2461",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                    ],
                }),
                (0, p.jsxs)("g", {
                    filter: l ? void 0 : "url(#filter0_d_1282_11577)",
                    transform: "translate(50, 50) scale(.8) translate(-44, -30)",
                    children: [
                        (0, p.jsx)("path", {
                            d: "M47.5359 37.8795C51.0149 37.8795 53.8352 35.0592 53.8352 31.5801C53.8352 28.1011 51.0149 25.2808 47.5359 25.2808C44.0568 25.2808 41.2365 28.1011 41.2365 31.5801C41.2365 35.0592 44.0568 37.8795 47.5359 37.8795Z",
                            fill: l ? "url(#paint2_linear_1986_8686)" : "url(#paint0_linear_1282_11577)",
                        }),
                        (0, p.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.3385 6.38281C20.599 6.38281 19.1889 7.79297 19.1889 9.53248C19.1889 11.272 20.599 12.6821 22.3385 12.6821H31.7875C33.527 12.6821 34.9372 14.0923 34.9372 15.8318C34.9372 17.5713 33.527 18.9815 31.7875 18.9815L17.614 18.9815C15.8745 18.9815 14.4644 20.3916 14.4644 22.1311C14.4644 23.8706 15.8745 25.2808 17.614 25.2808L25.4882 25.2808C27.2277 25.2808 28.6379 26.691 28.6379 28.4305C28.6379 30.17 27.2277 31.5801 25.4882 31.5801H19.1889C17.4494 31.5801 16.0392 32.9903 16.0392 34.7298C16.0392 36.4693 17.4494 37.8795 19.1889 37.8795H23.1324C25.9295 48.7472 35.7949 56.7774 47.5359 56.7774C61.4519 56.7774 72.7332 45.4962 72.7332 31.5801C72.7332 17.664 61.4519 6.38281 47.5359 6.38281H22.3385ZM47.5359 44.1788C54.4939 44.1788 60.1345 38.5382 60.1345 31.5801C60.1345 24.6221 54.4939 18.9815 47.5359 18.9815C40.5778 18.9815 34.9372 24.6221 34.9372 31.5801C34.9372 38.5382 40.5778 44.1788 47.5359 44.1788Z",
                            fill: l ? "url(#paint1_linear_1986_8686)" : "url(#paint1_linear_1282_11577)",
                        }),
                        (0, p.jsx)("path", {
                            d: "M8.16505 25.2808C9.90456 25.2808 11.3147 23.8706 11.3147 22.1311C11.3147 20.3916 9.90456 18.9815 8.16505 18.9815H6.59022C4.8507 18.9815 3.44055 20.3916 3.44055 22.1311C3.44055 23.8706 4.8507 25.2808 6.59022 25.2808H8.16505Z",
                            fill: l ? "url(#paint0_linear_1986_8686)" : "url(#paint2_linear_1282_11577)",
                        }),
                    ],
                }),
                (0, p.jsx)("g", {
                    width: "65",
                    transform: "translate(50, 50) scale(0.81) translate(-26, -42)",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, p.jsx)("path", {
                        d: "M12.6686 60.7298L10.9101 55.7911C10.8254 55.5372 10.6626 55.3163 10.4448 55.1597C10.227 55.0032 9.96524 54.9189 9.69671 54.9189C9.42818 54.9189 9.16646 55.0032 8.94866 55.1597C8.73086 55.3163 8.56804 55.5372 8.48326 55.7911L6.85565 60.7298C6.7922 60.9105 6.6887 61.0747 6.55284 61.2101C6.41699 61.3455 6.25226 61.4487 6.07091 61.5119L1.04275 63.1485C0.793091 63.2361 0.576874 63.3988 0.423928 63.6141C0.270981 63.8294 0.188843 64.0868 0.188843 64.3506C0.188843 64.6144 0.270981 64.8717 0.423928 65.087C0.576874 65.3023 0.793091 65.465 1.04275 65.5527L5.94012 67.2616C6.12147 67.3249 6.2862 67.428 6.42205 67.5634C6.55791 67.6988 6.66141 67.863 6.72486 68.0437L8.42513 72.91C8.50991 73.1639 8.67273 73.3848 8.89053 73.5414C9.10833 73.6979 9.37005 73.7822 9.63858 73.7822C9.90711 73.7822 10.1688 73.6979 10.3866 73.5414C10.6044 73.3848 10.7672 73.1639 10.852 72.91L12.6686 68.0437C12.732 67.863 12.8355 67.6988 12.9714 67.5634C13.1072 67.428 13.2719 67.3249 13.4533 67.2616L18.3507 65.5527C18.6003 65.465 18.8165 65.3023 18.9695 65.087C19.1224 64.8717 19.2046 64.6144 19.2046 64.3506C19.2046 64.0868 19.1224 63.8294 18.9695 63.6141C18.8165 63.3988 18.6003 63.2361 18.3507 63.1485L13.3952 61.4395C13.2318 61.377 13.083 61.2818 12.958 61.1598C12.833 61.0377 12.7345 60.8914 12.6686 60.7298Z",
                        fill: "white",
                        fillOpacity: "0.8",
                    }),
                }),
            ],
        });
    };
var cJ = n(387316),
    c0 =
        (((o = {})[(o.NITRO_GEM = 0)] = "NITRO_GEM"),
        (o[(o.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (o[(o.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        o);
let c1 = "url(#gradient)",
    c2 = (e) => {
        let {
                percentage: t = 0,
                children: n,
                animationClassName: i,
                initialPercentage: s = 0,
                progressCircleStrokeSize: l = 2,
                progressCircleVariation: r,
                progressCircleStroke: a,
            } = e,
            o = 43 + l / 2,
            u = 2 * Math.PI * o,
            [d, c] = T.useState(s);
        T.useEffect(() => {
            let e = setTimeout(() => {
                c(t);
            }, 200);
            return () => clearTimeout(e);
        }, [t]);
        let g = (0, ct.Ay)(),
            m = (0, cL.q)(g),
            A = (function (e) {
                switch (e) {
                    case 0:
                    case 2:
                        return "var(--background-base-low)";
                    case 1:
                        return "var(--premium-tier-2-purple)";
                    default:
                        return;
                }
            })(r),
            E = 1 === r ? (m ? "0.3" : "0.2") : void 0,
            h =
                a ??
                (function (e, t) {
                    switch (t) {
                        case 0:
                        case 2:
                            return c1;
                        case 1:
                            return e ? "url(#gradient_nitro_logo)" : c1;
                        default:
                            return;
                    }
                })(m, r);
        return (0, p.jsxs)("div", {
            className: cJ.Ap,
            children: [
                (0, p.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: cJ.fB,
                    children: [
                        (0, p.jsx)("circle", {
                            className: 0 === r || 2 === r ? cJ.F3 : void 0,
                            fill: "transparent",
                            strokeWidth: l,
                            r: `${o}`,
                            cx: "50%",
                            cy: "50%",
                            stroke: A,
                            strokeOpacity: E,
                        }),
                        (0, p.jsx)("circle", {
                            stroke: h,
                            strokeWidth: l,
                            strokeLinecap: "round",
                            strokeDasharray: `${u} ${u}`,
                            className: i,
                            style: { strokeDashoffset: (1 - d / 100) * u },
                            r: `${o}`,
                            cx: "50%",
                            cy: "50%",
                        }),
                    ],
                }),
                (0, p.jsxs)("svg", {
                    width: "0",
                    height: "0",
                    children: [
                        (0, p.jsxs)("linearGradient", {
                            id: "gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [
                                (0, p.jsx)("stop", { offset: "0%", style: { stopColor: "#FFBDF2" } }),
                                (0, p.jsx)("stop", { offset: "100%", style: { stopColor: "#E742E1" } }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "gradient_nitro_logo",
                            x1: "2.99995",
                            y1: "67.6298",
                            x2: "132.55",
                            y2: "67.6298",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#F9A0E8" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E742E1" }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "dark-purple-gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                (0, p.jsx)("stop", { offset: "0%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                                (0, p.jsx)("stop", { offset: "100%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                            ],
                        }),
                    ],
                }),
                (0, p.jsx)("div", { className: cJ.Vw, children: n }),
            ],
        });
    };
var c3 = n(104773);
function c5(e) {
    let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
        s = T.useMemo(() => (0, cZ.A)({ legacyAssetId: t, skuId: n, size: b._3.SIZE_120, canAnimate: !1 }), [t, n]);
    return (0, p.jsx)("div", {
        className: c3.Q7,
        children: (0, p.jsx)("div", {
            className: c3.Nk,
            children: null != s && (0, p.jsx)("img", { className: c3.CH, alt: i, src: s }),
        }),
    });
}
let c4 = function (e) {
    let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: s,
            progressCircleStrokeSize: l,
            backgroundCircleSize: r,
            percentage: a,
            initialPercentage: o,
            progressCircleVariation: u = c0.NITRO_GEM,
            avatarDecorationLegacyAssetId: d,
            avatarDecorationSkuId: c,
            avatarDecoAssetDescription: g,
            ellipseOpacity: m,
            customAnimationClassName: A,
            circleColor: E,
            circleStroke: h,
        } = e,
        x = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion),
        S = t && !x;
    return (0, p.jsx)("div", {
        className: iE()(c3.G3, n),
        children: (0, p.jsx)(c2, {
            animationClassName: iE()(c3._0, { [c3.uJ]: S, [A ?? ""]: S }),
            progressCircleStroke: h,
            progressCircleStrokeSize: l,
            percentage: i ?? a,
            initialPercentage: i ?? o,
            progressCircleVariation: u,
            children: (function () {
                switch (u) {
                    case c0.NITRO_GEM:
                        return (0, p.jsx)(cQ, {
                            className: S ? c3.Ow : void 0,
                            backgroundColor: iE()(c3.vH, s),
                            backgroundCircleSize: r,
                        });
                    case c0.NITRO_LOGO:
                        return (0, p.jsx)(c$, { circleColor: E, ellipseOpacity: m });
                    case c0.AVATAR_DECO:
                        if (null != c)
                            return (0, p.jsx)(c5, {
                                avatarDecorationLegacyAssetId: d,
                                avatarDecorationSkuId: c,
                                avatarDecoAssetDescription: g,
                            });
                        return null;
                    default:
                        return null;
                }
            })(),
        }),
    });
};
var c6 = n(14313);
function c8(e) {
    let { userRecord: t, placement: n } = e,
        { avatarSrc: i, eventHandlers: s } = (0, cY.A)({ userId: t?.id, size: b._3.SIZE_32, animateOnHover: !0 }),
        l = null != t,
        r = l
            ? (0, p.jsx)(y.eu, { src: i, "aria-label": t.username, size: b._3.SIZE_32, ...s })
            : (0, p.jsx)(N.D, { variant: "heading-md/semibold", className: c6.n5, children: n });
    return (0, p.jsx)(sE.m, {
        text: U.intl.string(U.t.UnKHdo),
        shouldShow: !l,
        children: (0, p.jsx)("div", { className: c6.Lg, children: r }),
    });
}
function c7(e) {
    let { numSentReferrals: t, placement: n } = e;
    return (0, p.jsxs)("div", {
        className: c6.Ip,
        children: [
            (0, p.jsx)("div", { className: c6.Ej }),
            (0, p.jsx)("div", { className: iE()({ [c6.ch]: t > n, [c6.q_]: t === n }) }),
        ],
    });
}
function c9(e) {
    let { userRecords: t } = e,
        n = t.length,
        i = n < 1 ? null : t[0],
        s = n < 2 ? null : t[1],
        l = n < 3 ? null : t[2];
    return (0, p.jsxs)("div", {
        className: c6.ZM,
        children: [
            (0, p.jsx)(c8, { userRecord: i, placement: 1 }),
            (0, p.jsx)(c7, { numSentReferrals: n, placement: 1 }),
            (0, p.jsx)(c8, { userRecord: s, placement: 2 }),
            (0, p.jsx)(c7, { numSentReferrals: n, placement: 2 }),
            (0, p.jsx)(c8, { userRecord: l, placement: 3 }),
        ],
    });
}
let ge = function () {
    let e = (0, f.bG)([cW.A], () => cW.A.getRecipientStatus()),
        { referralSentUsers: t } = (0, cK.J)(),
        i = T.useMemo(() => t.map((e) => new cX.A(e)), [t]),
        s = { redeemed: 0, converted: 0, sent: e.size };
    e.forEach((e) => {
        (e === cH.aK.REDEEMED && s.redeemed++, e === cH.aK.CONVERTED && (s.redeemed++, s.converted++));
    });
    let l = s.sent === cK.Z,
        r = eC.A.getArticleURL(I.MVz.REFERRAL_PROGRAM),
        { analyticsLocations: a } = (0, ez.Ay)(tw.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        o = T.useRef(null),
        u = (s.sent / cK.Z) * 100,
        d = (0, p.jsxs)("div", {
            className: c6.hE,
            children: [
                (0, p.jsx)(c4, { percentage: u, progressCircleVariation: c0.NITRO_LOGO, iconClassName: c6.ER }),
                (0, p.jsxs)("div", {
                    className: c6.Ns,
                    children: [
                        (0, p.jsx)(N.D, {
                            variant: "heading-xl/extrabold",
                            className: c6.R0,
                            children: (function (e) {
                                let { hasSentAll: t } = e;
                                return U.intl.string(U.t.USo4s7);
                            })({ hasSentAll: l }),
                        }),
                        (0, p.jsx)(c9, { userRecords: i }),
                        (0, p.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                let { helpdeskArticle: t, referralsStatuses: n } = e;
                                return (function (e) {
                                    let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
                                    return t
                                        ? U.intl.format(U.t["TYu+MH"], { helpdeskArticle: i })
                                        : U.intl.format(U.t["omMr+V"], { helpdeskArticle: i });
                                })({ hasSentAll: n.sent >= cK.Z, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
                            })({ helpdeskArticle: r, referralsStatuses: s }),
                        }),
                        (0, p.jsx)("div", {
                            className: c6.Fb,
                            children: (0, p.jsx)(cz.wL, {
                                "data-migration-pending": !0,
                                className: c6.r$,
                                color: l3.XD.CUSTOM,
                                onClick: () =>
                                    (function (e) {
                                        let { analyticsLocations: t } = e;
                                        (td.default.track(I.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                            location_stack: t,
                                        }),
                                            (0, sI.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("647658"),
                                                    n.e("618589"),
                                                ]).then(n.bind(n, 168457));
                                                return (n) => (0, p.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                            }));
                                    })({ analyticsLocations: a }),
                                onlyShineOnHover: !0,
                                children: (0, p.jsxs)("div", {
                                    className: c6.Zn,
                                    children: [
                                        (0, p.jsx)("img", {
                                            src: "/assets/3b9b1649f78941df.svg",
                                            alt: "",
                                            className: c6.QH,
                                        }),
                                        l ? U.intl.string(U.t.SY9tyI) : U.intl.string(U.t.Lm2nFc),
                                    ],
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        }),
        c = s.redeemed === cK.Z;
    return (0, p.jsx)(ez.f5, {
        value: a,
        children: (0, p.jsx)("div", {
            className: iE()(c6.kL, { [c6.AP]: c }),
            children: (0, p.jsx)("div", { ref: o, className: iE()(c6.d_, { [c6.kS]: c }), children: d }),
        }),
    });
};
var gt = n(194509),
    gn = n(465794),
    gi = n(774774),
    gs = n(156601),
    gl = n(543213),
    gr = n(88001),
    ga = n(259589),
    go = n(487518);
let gu = "to_premium_home_button",
    gd = "premium home page";
function gc(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: s } = e,
        l = t.hasActiveTrial,
        r = t.planIdFromItems === tJ.gD.PREMIUM_YEAR_TIER_2,
        a = t.hasAnyPremiumGroup,
        o = (0, cD.A)(),
        u = null != t.trialEndsAt ? ix()(t.trialEndsAt).diff(ix()(), "d") : 0,
        d = tJ.hd[t.planIdFromItems],
        c = af.Ay.getDefaultPrice(d.id),
        g = af.Ay.formatPriceString(c, d.interval);
    if (n || l) {
        let e = (0, cL.M)(s) ? gi.at.PREMIUM_TIER_2_WHITE_FILL : gi.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
        return (0, p.jsxs)(p.Fragment, {
            children: [
                !l && (r || a)
                    ? (0, p.jsx)(gi.e4, { text: U.intl.string(U.t.EyjDRE), className: go.LW, colorOptions: e })
                    : (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(gi.HU, {
                                  text: l ? U.intl.string(U.t.qYKftX) : U.intl.string(U.t.EyjDRE),
                                  className: go.uS,
                                  colorOptions: e,
                              }),
                              (0, p.jsx)("div", { className: go.on }),
                          ],
                      }),
                (0, p.jsx)(N.D, {
                    variant: "heading-md/normal",
                    color: "text-overlay-light",
                    className: go.KB,
                    children: (function () {
                        if (l) return U.intl.format(U.t["2CGBri"], { remainingTime: u, price: g });
                        if (a && null != i && t.metadata?.active_discount_expires_at != null) {
                            let e = (0, uG.$g)(c.amount, c.currency);
                            return U.intl.format(ga.default.FwjZzr, {
                                percent: i?.percentage ?? 0,
                                discountEndDate: new Date(t.metadata.active_discount_expires_at),
                                regularPrice: e,
                            });
                        }
                        return r
                            ? U.intl.format(U.t.z2oQtA, {
                                  percent: i?.percentage ?? tJ.Cq,
                                  regularPrice: g,
                                  renewalDate: af.Ay.getExpectedRenewalDate(t, o),
                              })
                            : U.intl.formatToPlainString(U.t["3ZiutU"], {
                                  percent: i?.percentage ?? tJ._$,
                                  regularPrice: g,
                                  numMonths: i?.duration ?? tJ.OJ,
                              });
                    })(),
                }),
            ],
        });
    }
    return (0, p.jsx)(gs.A, { variant: void 0, subscriptionTier: tJ.pe.TIER_2, interval: d.interval });
}
function gg() {
    let e = (0, cU.k5)(),
        t = (0, cU.nf)(),
        n = (0, ct.Ay)(),
        i = (0, f.bG)([ue.A], () => ue.A.getPremiumTypeSubscription()),
        s = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
        l = s?.isPremiumWithPremiumGroup(),
        r = (0, cD.A)(),
        a = (0, cV.ds)(),
        o = null !== i && null !== i.planIdFromItems;
    if (!o && !r.isFractionalPremiumActive && !l) return null;
    let u = r.isFractionalPremiumActive,
        d = null !== i && i.hasActiveTrial;
    return (0, p.jsxs)("div", {
        className: iE()(go.$Y, { [go.J5]: e || d }),
        children: [
            (0, p.jsxs)("div", {
                className: go.jp,
                children: [
                    l
                        ? (0, p.jsx)(N.D, {
                              variant: "nitro-md",
                              color: "text-overlay-light",
                              className: go._K,
                              children: (0, gr.DP)(),
                          })
                        : (0, p.jsx)(cM.A, { className: go.TJ }),
                    l && !e
                        ? (0, p.jsx)("div", { style: { marginBottom: "6px" } })
                        : u && !a
                          ? (0, p.jsxs)(p.Fragment, {
                                children: [
                                    (0, p.jsx)(gi.e4, {
                                        text: U.intl.string(U.t.uXF4c4),
                                        className: go.LW,
                                        colorOptions: gi.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, p.jsx)(N.D, {
                                        variant: "heading-md/normal",
                                        color: "text-overlay-light",
                                        className: go.sQ,
                                        children: U.intl.format(U.t.sK7fGl, {
                                            helpCenterLink: eC.A.getArticleURL(I.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : o
                            ? (0, p.jsx)(gc, {
                                  premiumSubscription: i,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : a
                              ? (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)(gi.HU, {
                                            text: U.intl.string(U.t.qYKftX),
                                            className: go.uS,
                                            colorOptions: (0, cL.M)(n)
                                                ? gi.at.PREMIUM_TIER_2_WHITE_FILL
                                                : gi.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, p.jsx)(N.D, {
                                            variant: "heading-md/normal",
                                            color: "text-overlay-light",
                                            className: go.KB,
                                            children: U.intl.format(U.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, p.jsx)(gl.ZP, {
                        featureSet: s?.isPremiumGroupPrimary()
                            ? gl.Nz.PREMIUM_GROUP_PRIMARY
                            : s?.isPremiumGroupMember()
                              ? gl.Nz.PREMIUM_GROUP_MEMBER
                              : u
                                ? gl.Nz.FRACTIONAL_PREMIUM
                                : gl.Nz.DEFAULT,
                    }),
                    u && !o
                        ? (0, p.jsxs)(l4.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, p.jsx)(gn.A, {
                                      defaultTextOverride: a ? U.intl.string(U.t.YScQSF) : U.intl.string(U.t["0b3YRn"]),
                                  }),
                                  (0, p.jsx)(v.$, {
                                      onClick: () => {
                                          (td.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gu,
                                              target: gd,
                                          }),
                                              (0, tH.default)(),
                                              (0, t7.pX)(I.BVt.APPLICATION_STORE));
                                      },
                                      variant: "overlay-secondary",
                                      fullWidth: !0,
                                      size: "md",
                                      text: a ? U.intl.string(U.t.VR2iVB) : U.intl.string(U.t.T1aUAX),
                                  }),
                              ],
                          })
                        : (0, p.jsxs)(l4.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, p.jsx)(v.$, {
                                      variant: "overlay-primary",
                                      fullWidth: !0,
                                      onClick: () => {
                                          (td.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gu,
                                              target: gd,
                                          }),
                                              (0, tH.default)(),
                                              (0, t7.pX)(I.BVt.APPLICATION_STORE));
                                      },
                                      text: U.intl.string(U.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, p.jsx)(v.$, {
                                      variant: "overlay-secondary",
                                      onClick: () => {
                                          (td.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              (0, ng.openUserSettings)(h.X.SUBSCRIPTIONS_PANEL));
                                      },
                                      text: U.intl.string(U.t["9uDy6C"]),
                                      fullWidth: !0,
                                      size: "md",
                                  }),
                              ],
                          }),
                ],
            }),
            (0, p.jsx)("div", {
                className: go.ah,
                children: (0, p.jsx)("img", { className: go.ah, alt: "", src: "/assets/3aaa2c2d1874c196.svg" }),
            }),
        ],
    });
}
function gm() {
    return (0, p.jsxs)("div", {
        className: go.T1,
        children: [
            (0, p.jsx)("img", { className: go.GY, alt: "", src: "/assets/9f5bdd034cc313ae.svg" }),
            (0, p.jsxs)("div", {
                className: go.b4,
                children: [
                    (0, p.jsx)(N.D, {
                        className: go.Vz,
                        variant: "heading-xl/extrabold",
                        children: U.intl.string(U.t["3KomGa"]),
                    }),
                    (0, p.jsx)(Q.E, {
                        className: go.Oi,
                        variant: "text-sm/normal",
                        children: U.intl.string(U.t.yQ06u1),
                    }),
                    (0, p.jsx)(gt.A, {
                        className: iE()(go.Tp, go._c),
                        textOptions: { textOverride: U.intl.string(U.t.Ve9Ge6), textClassName: go.VV },
                        color: l3.$n.Colors.CUSTOM,
                        onClick: () => {
                            td.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: "gifting_button",
                                target: "payment modal",
                            });
                        },
                    }),
                ],
            }),
        ],
    });
}
let gA = function () {
        let e = (0, du.Hp)(),
            { analyticsLocations: t } = (0, ez.Ay)(tw.A.PREMIUM_SETTINGS),
            n = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
            i = (0, f.bG)([ue.A], () => ue.A.getPremiumTypeSubscription()),
            s = (0, f.bG)([ue.A], () => ue.A.hasFetchedSubscriptions()),
            l = (0, cP.Y)(tJ.T7),
            [r, a] = T.useState(!0),
            o = (0, cD.A)({ forceFetch: !0 }),
            u = (0, f.bG)([dw.A], () => {
                let e = dw.A.getMarketingComponentByType(cj.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            d = !(oU.Fr || oU.v1) && null != u,
            c = T.useRef(null);
        (0, cB.i)();
        let g = (0, cF.m)();
        T.useEffect(() => {
            !(async function () {
                (e || (await Promise.all([oL.hP(), oL.$o(), (0, cR.zS)(null, null, I.tF5.DISCOVERY)])), a(!1));
            })();
        }, [e]);
        let [m, A] = T.useState(!1);
        if (e) return (0, p.jsx)(u8.uK, {});
        let E = s && null !== i && l,
            h = o.fetched && o.isFractionalPremiumActive,
            x = n?.isPremiumWithPremiumGroup();
        if (!E && !h && !r && !x) return (0, p.jsx)(cG.A, { title: U.intl.string(U.t.dyq9TR), note: null });
        if ((!E && !h && !x) || r) return (0, p.jsx)(oC.y, {});
        let S = !!i?.hasActiveTrial;
        return (0, p.jsx)(ez.f5, {
            value: t,
            children: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsxs)(Z.B, {
                        direction: "vertical",
                        gap: 40,
                        children: [
                            d && (0, p.jsx)(ck.m, { config: u }),
                            (0, p.jsx)(gg, {}),
                            g && (0, p.jsx)(ge, {}),
                            !d && (0, p.jsx)(gm, {}),
                            (0, p.jsx)(cw.A, {
                                hideCTAs: !0,
                                headingOverride: U.intl.string(U.t.dnVvQS),
                                hidePill: !S,
                                selectedPlanColumnClassName: go.JG,
                                selectedPlanTier: tJ.PremiumTypes.TIER_2,
                            }),
                        ],
                    }),
                    (0, p.jsx)(cO.L, {
                        innerRef: c,
                        onChange: (e) => {
                            e &&
                                !m &&
                                (td.default.track(I.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                    location_stack: t,
                                }),
                                A(!0));
                        },
                        children: (0, p.jsx)("div", { ref: c, className: go._Z }),
                    }),
                ],
            }),
        });
    },
    gE = (0, E.E2)(h.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser());
            return (0, af.YE)(e, tJ.PremiumTypes.TIER_2) ? (0, p.jsx)(gA, {}) : (0, p.jsx)(cv.A, {});
        },
        useSearchTerms: () => [U.intl.string(U.t.Ipxkog)],
    }),
    gh = (0, E.zZ)(h.X.NITRO_CATEGORY, { buildLayout: () => [gE] }),
    gx = (0, E.t_)(h.X.NITRO_PANEL, {
        useTitle: () => U.intl.string(U.t.Ipxkog),
        useObscuredNotice: oh.L,
        buildLayout: () => [gh],
    }),
    gS = (0, E.i4)(h.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.Ipxkog),
        icon: ad.t,
        usePersistentBadge: function (e) {
            let t = (0, cb.e)(e);
            return T.useMemo(() => ({ badgeType: S.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [gx],
    });
var gp = n(104510),
    gT = n(820739),
    gf = n(859241),
    gI = n(527113),
    g_ = n(338548),
    gN = n(776096),
    gC = n(711014),
    gy = n(178368),
    gb = n(809545),
    gv = n(168482);
function gj() {
    return (0, p.jsxs)("div", {
        className: gb.iE,
        children: [
            (0, p.jsx)("img", { className: gb.Kk, alt: "", src: gv }),
            (0, p.jsxs)("div", {
                className: gb.pq,
                children: [
                    (0, p.jsx)(Q.E, { variant: "text-lg/bold", children: U.intl.string(U.t.ZHNSYf) }),
                    (0, p.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: U.intl.string(U.t.kCj5ps),
                    }),
                ],
            }),
            (0, p.jsx)(v.$, {
                variant: "secondary",
                text: U.intl.string(U.t.JFlifp),
                onClick: function () {
                    ((0, t7.pX)(I.BVt.GUILD_DISCOVERY), (0, tH.default)());
                },
            }),
        ],
    });
}
var gO = n(365199),
    gL = n(878678),
    gR = n(443865),
    gD = n(980707),
    gP = n(473145);
function gG(e) {
    let {
            guildBoostSlot: t,
            onClose: i,
            hasCancelableGuildBoostSlot: s,
            premiumSubscription: l,
            onSelect: r,
            fractionalState: a,
        } = e,
        o = {
            transfer: {
                label: null != t.premiumGuildSubscription ? U.intl.string(U.t["PR0n//"]) : U.intl.string(U.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? U.intl.string(U.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: U.intl.string(U.t.twFU3R), subtext: s ? null : U.intl.string(U.t.oQ9lOh), disabled: !s },
            uncancel: { label: U.intl.string(U.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (l.status) {
        case I.Dmq.PAST_DUE:
            ((o.cancel.disabled = !0), (o.cancel.subtext = U.intl.string(U.t.WnL6DV)), (o.uncancel.disabled = !0));
            break;
        case I.Dmq.PAUSE_PENDING:
        case I.Dmq.PAUSED:
            a === tJ.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = U.intl.string(U.t.LiLRRT)),
                (o.cancel.subtext = U.intl.string(U.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let u = T.useMemo(
        () =>
            l.isPausedOrPausePending && a === tJ.xc.NONE
                ? (0, p.jsx)(tn.Dr, {
                      id: "manage-subscription",
                      label: U.intl.string(U.t.obRG6Y),
                      action: () => (0, ng.openUserSettings)(h.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: gR.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: gR.LightbulbIcon },
                  })
                : null,
        [a, l],
    );
    return (0, p.jsxs)(gD.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": U.intl.string(U.t.ogxXGq),
        onClose: i,
        children: [
            (0, p.jsx)(tn.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, sI.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("295570"),
                            n.e("378357"),
                            n.e("870528"),
                            n.e("205896"),
                            n.e("534428"),
                            n.e("693173"),
                            n.e("418710"),
                            n.e("739957"),
                        ]).then(n.bind(n, 335508));
                        return (n) =>
                            (0, p.jsx)(e, { ...n, guildBoostSlots: [t], locationSection: I.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, gP.I5)(t)
                ? (0, p.jsx)(tn.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, sI.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, p.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, p.jsx)(tn.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, sI.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 983511));
                              return (n) => (0, p.jsx)(e, { ...n, guildBoostSlot: t });
                          });
                      },
                      disabled: o.cancel.disabled,
                      color: "danger",
                  }),
            u,
        ],
    });
}
var gM = n(545934),
    gU = n(548118),
    gV = n(987144),
    gk = n(864310),
    gw = n(290413);
function gF(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, gk.A)(t.id);
    return (0, p.jsxs)("div", {
        className: n ?? gw.OA,
        children: [
            (0, p.jsx)(gU.Ay, { className: gw.$f, guild: t, size: gU.Ay.Sizes.MEDIUM }),
            (0, p.jsxs)("div", {
                className: gw.gI,
                children: [
                    (0, p.jsx)(Q.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, p.jsxs)("div", {
                        className: gw.ew,
                        children: [
                            (0, p.jsxs)("div", {
                                className: gw.QW,
                                children: [
                                    (0, p.jsx)(gp._, {
                                        className: gw.Wz,
                                        color: n6.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, p.jsx)(Q.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: U.intl.format(U.t["pob/cL"], { subscriptions: i }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== I.TVA.NONE &&
                                (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)("div", { className: gw.zk }),
                                        (0, p.jsx)(Q.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, gP.gb)(t.premiumTier, { useLevels: !1 }),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function gB(e) {
    let { guildId: t } = e,
        n = (0, f.bG)([sL.A], () => sL.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, p.jsxs)("div", {
              className: gw.Nr,
              children: [
                  (0, p.jsx)(gF, { guild: n }),
                  (0, p.jsx)(v.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gp._,
                      text: U.intl.string(U.t.aBHecF),
                      onClick: () => {
                          (0, gV.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: I.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: I.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: I.ZSU.BUTTON_CTA,
                                  objectType: I.AnalyticsObjectTypes.BUY,
                              },
                              guild: n,
                          });
                      },
                  }),
              ],
          });
}
var gz = n(747381);
let gY =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function gX(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: s, isLast: l } = e,
        r = T.useRef(null),
        a = (0, gP.I5)(t),
        o = T.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, cD.A)(),
        c = T.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === I.TVA.NONE) return "";
                    let n = [
                        U.intl.formatToPlainString(U.t["dLlKX/"], { numEmojiSlots: tJ.TG[e].limits.emoji }),
                        U.intl.formatToPlainString(U.t["+ANIfv"], { numStickerSlots: tJ.TG[e].limits.stickers }),
                        U.intl.formatToPlainString(U.t["4gt60b"], {
                            numSoundboardSlots: tJ.TG[e].limits.soundboardSounds,
                        }),
                        U.intl.formatToPlainString(U.t.XahSjZ, {
                            resolution: tJ.TG[e].limits.screenShareQualityResolution,
                            framerate: tJ.TG[e].limits.screenShareQualityFramerate,
                        }),
                        U.intl.formatToPlainString(U.t.NbNs7S, { bitrate: tJ.TG[e].limits.bitrate / 1e3 }),
                        U.intl.formatToPlainString(U.t.VVKcpn, { filesize: tJ.TG[e].limits.fileSize / 1024 / 1024 }),
                        U.intl.formatToPlainString(U.t.TbpCvv, { numVideoStageSeats: tJ.TG[e].limits.stageVideoUsers }),
                        U.intl.string(U.t.LDyX3i),
                        U.intl.string(U.t.YtGlPW),
                    ];
                    (e >= I.TVA.TIER_2 && (n.push(U.intl.string(U.t.SztbtN)), n.push(U.intl.string(U.t["3GK91n"]))),
                        e >= I.TVA.TIER_3 && n.push(U.intl.string(U.t["XUUJd+"])));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let s = n[Math.abs(i) % n.length];
                    return U.intl.formatToPlainString(U.t["/dOAmQ"], { perk: s });
                })(n, t.id),
            [n, t.id],
        ),
        g = T.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? oM.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return U.intl.formatToPlainString(U.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = T.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        ),
        A = null != m && !(u && null != o && o < m);
    return (0, p.jsxs)("div", {
        className: iE()(gz.iq, { [gz.Mt]: l }),
        children: [
            (0, p.jsxs)("div", {
                className: gz.kd,
                children: [
                    (0, p.jsx)("img", { alt: "", className: gz.bB, src: gY }),
                    A
                        ? (0, p.jsx)(Q.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: U.intl.format(U.t.Z4ULRD, { date: m }),
                          })
                        : (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(Q.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)("div", { className: gz.zk }),
                                              (0, p.jsx)(Q.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: U.intl.formatToPlainString(U.t.YJlswH, {
                                                      date: o.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !u &&
                                      null != i.trialEndsAt &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)("div", { className: gz.zk }),
                                              (0, p.jsx)(Q.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: U.intl.formatToPlainString(U.t.OdPSpk, {
                                                      date: new Date(i.trialEndsAt).toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            (0, p.jsx)(aS.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, p.jsx)(gG, {
                        onClose: n,
                        guildBoostSlot: t,
                        premiumSubscription: i,
                        hasCancelableGuildBoostSlot: s,
                        fractionalState: d.fractionalState,
                    });
                },
                position: "right",
                align: "center",
                children: (e) =>
                    (0, p.jsx)(n9.D, {
                        innerRef: r,
                        "aria-label": U.intl.string(U.t.PdRCRg),
                        className: gz.Mj,
                        ...e,
                        children: (0, p.jsx)(gO.MoreHorizontalIcon, {
                            size: "xs",
                            color: n6.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function gH(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: s } = e,
        l = (0, f.bG)([sL.A], () => sL.A.getGuild(t), [t]);
    return (0, p.jsxs)("div", {
        className: gz.Nr,
        children: [
            (0, p.jsx)("div", {
                className: gz.MY,
                children:
                    null != l
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(gF, { guild: l, className: gz.OA }),
                                  (0, p.jsx)(v.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: U.intl.string(U.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tH.default)(),
                                              (0, gL.K4)({
                                                  guildId: l.id,
                                                  location: {
                                                      section: I.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              }));
                                      },
                                  }),
                              ],
                          })
                        : (0, p.jsx)("div", {
                              className: gz.OA,
                              children: (0, p.jsx)(N.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: U.intl.string(U.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, p.jsx)(
                    gX,
                    {
                        slot: e,
                        guildTier: l?.premiumTier,
                        premiumSubscription: i,
                        hasCancelableSlots: s,
                        isLast: t === n.length - 1,
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function gW(e) {
    let { guildBoostSlots: t, premiumSubscription: n, pausedAppliedGuildBoosts: i, isPaused: s } = e,
        { boostsByGuildId: l, numActiveSlots: r } = T.useMemo(() => {
            if (s && null != n)
                return {
                    boostsByGuildId: (function (e, t) {
                        let n = {};
                        for (let t of e) (t.guildId in n || (n[t.guildId] = []), n[t.guildId].push(t));
                        let i = {};
                        for (let e of Object.keys(n)) {
                            let s = n[e];
                            i[e] = s.map((n) =>
                                gM.A.createFromServer(
                                    {
                                        id: n.id,
                                        subscription_id: t.id,
                                        canceled: !1,
                                        premium_guild_subscription: { id: n.id, guild_id: e },
                                        cooldown_ends_at: null,
                                    },
                                    t,
                                ),
                            );
                        }
                        return i;
                    })(i, n),
                    numActiveSlots: 0,
                };
            let e = 0,
                l = {};
            for (let n of Object.keys(t)) {
                let i = t[n];
                if ((!(0, gP.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in l || (l[e] = []), l[e].push(i));
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, i, n]);
    if (null == n || 0 === Object.keys(l).length) return null;
    let a = r > af.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, p.jsx)("div", {
        className: gz.kR,
        children: oM.default
            .keys(l)
            .map((e) => (0, p.jsx)(gH, { guildId: e, slots: l[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var gK = n(502572),
    gZ = n(983511),
    gq = n(342744),
    gQ = n(496431);
let g$ = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, gQ.A)(n);
    return (0, p.jsx)(Q.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, iS.uN)(i, { days: U.t.WUTPDc, hours: U.t.c1qodV, minutes: U.t["2+A3dv"] }),
    });
};
var gJ = n(731536);
function g0(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        s = (0, f.bG)([ue.A], () => ue.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = T.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, gP.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != s ? af.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && i === tJ.xc.NONE;
    return 0 === l.length
        ? null
        : (0, p.jsxs)("div", {
              className: gJ.Nr,
              children: [
                  (0, p.jsxs)("div", {
                      className: gJ.MY,
                      children: [
                          (0, p.jsxs)("div", {
                              className: gJ._L,
                              children: [
                                  (0, p.jsxs)("div", {
                                      className: gJ.MD,
                                      children: [
                                          (0, p.jsx)("img", { alt: "", className: gJ.F8, src: gY }),
                                          (0, p.jsx)("div", {
                                              className: iE()(gJ.qS, "theme-dark"),
                                              children: (0, p.jsx)("span", { className: gJ.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsxs)("div", {
                                      className: gJ.Qp,
                                      children: [
                                          (0, p.jsx)(Q.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: U.intl.format(U.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                          (0, p.jsx)(Q.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: U.intl.format(U.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, p.jsx)(gK.A, {
                              shouldShow: o,
                              text: U.intl.string(U.t.mOWsF1),
                              "aria-label": U.intl.string(U.t.mOWsF1),
                              children: (e) =>
                                  (0, p.jsx)(v.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gp._,
                                      text: U.intl.string(U.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, sI.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("378357"),
                                                  n.e("418710"),
                                              ]).then(n.bind(n, 770101));
                                              return (t) =>
                                                  (0, p.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          (t.onClose(),
                                                              (0, gV.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: I.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: I.JJy.SETTINGS_PREMIUM,
                                                                      object: I.ZSU.BUTTON_CTA,
                                                                      objectType: I.AnalyticsObjectTypes.BUY,
                                                                  },
                                                                  guild: e,
                                                              }));
                                                      },
                                                  });
                                          });
                                      },
                                  }),
                          }),
                      ],
                  }),
                  l.map((e, t) =>
                      (0, p.jsx)(
                          g1,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, gP.I5)(e),
                              isCanceled: (0, gP.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function g1(e) {
    let t,
        { slot: n, isLast: i, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = T.useRef(null),
        u = T.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]),
        d = l ? r?.currentPeriodEnd : null;
    t =
        n.isOnCooldown() && null != u && (null == d || u < d)
            ? (0, p.jsx)(g$, { cooldown: u.getTime() })
            : null != d
              ? (0, p.jsx)(Q.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: U.intl.format(U.t.Z4ULRD, { date: d }),
                })
              : (0, p.jsx)(Q.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: U.intl.string(U.t["2mcafz"]),
                });
    let c = s || l;
    return (0, p.jsxs)("div", {
        className: iE()(gJ.iq, { [gJ.Mt]: i }),
        children: [
            (0, p.jsxs)("div", {
                className: gJ.kd,
                children: [(0, p.jsx)("img", { alt: "", className: gJ.bB, src: gY }), t],
            }),
            c &&
                (0, p.jsx)(aS.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, p.jsxs)(gD.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": U.intl.string(U.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                s &&
                                    (0, p.jsx)(tn.Dr, {
                                        id: "cancel-boost",
                                        label: U.intl.string(U.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? U.intl.string(U.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, sI.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, p.jsx)(gZ.default, { ...e, guildBoostSlot: n }),
                                                ));
                                        },
                                    }),
                                l &&
                                    (0, p.jsx)(tn.Dr, {
                                        id: "uncancel-boost",
                                        label: U.intl.string(U.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? U.intl.string(U.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, sI.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, p.jsx)(gq.default, { ...e, guildBoostSlotId: n.id }),
                                                ));
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, p.jsx)(n9.D, {
                            innerRef: o,
                            "aria-label": U.intl.string(U.t["UKOtz+"]),
                            className: gJ.Mj,
                            ...e,
                            children: (0, p.jsx)(gO.MoreHorizontalIcon, {
                                size: "xs",
                                color: n6.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var g2 = n(834612);
function g3(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = eC.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ),
        a = i?.isPaused === !0 && l !== tJ.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, p.jsxs)("div", {
              className: g2.i,
              children: [
                  (0, p.jsxs)("div", {
                      className: g2.b,
                      children: [
                          (0, p.jsx)(N.D, { variant: "heading-md/semibold", children: U.intl.string(U.t.W5rDjW) }),
                          (0, p.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: U.intl.format(U.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(gW, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, p.jsx)(g0, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var g5 = n(333722),
    g4 = n(9146);
function g6() {
    return (0, p.jsxs)("div", {
        className: g4.iE,
        children: [
            (0, p.jsx)(N.D, { variant: "heading-xl/normal", children: U.intl.string(U.t.IzKs3o) }),
            (0, p.jsx)("div", {
                className: g4.kR,
                children: g5.s.map((e, t) => {
                    let n = e.icon;
                    return (0, p.jsxs)(
                        "div",
                        {
                            className: g4.Nr,
                            children: [
                                (0, p.jsx)(n, { className: g4.Kk }),
                                (0, p.jsx)(Q.E, {
                                    className: g4.h_,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: e.getText(),
                                }),
                            ],
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
var g8 = n(847374),
    g7 = n(232122),
    g9 = n(665984);
function me() {
    let [e, t] = T.useState(null),
        [n, i] = T.useState(null);
    return (0, p.jsxs)("div", {
        className: g9.iE,
        children: [
            (0, p.jsx)(N.D, { variant: "heading-xl/normal", children: U.intl.string(U.t.HPJ6Nj) }),
            (0, p.jsx)("ul", {
                className: g9.p_,
                children: g7.m.map((s, l) => {
                    let r = e === l,
                        a = n === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, p.jsxs)(
                        n9.D,
                        {
                            tag: "li",
                            className: iE()(g9.Aw, { [g9.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => i(l),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, p.jsxs)("div", {
                                    className: g9.k7,
                                    children: [
                                        (0, p.jsx)(Q.E, {
                                            className: g9.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, p.jsx)(g8.a, {
                                            size: "sm",
                                            color: n6.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: g9.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, p.jsx)(Q.E, {
                                        className: g9.ZF,
                                        color: "text-muted",
                                        variant: "text-sm/medium",
                                        children: s.getAnswer(),
                                    }),
                            ],
                        },
                        l,
                    );
                }),
            }),
        ],
    });
}
var mt = n(182859),
    mn = n(356863),
    mi = n(416763);
function ms() {
    let e = eC.A.getArticleURL(I.MVz.GUILD_SUBSCRIPTIONS);
    return (0, p.jsxs)("div", {
        className: mi.wx,
        children: [
            (0, p.jsxs)("div", {
                className: mi.Qs,
                children: [
                    (0, p.jsxs)("div", {
                        className: mi.B5,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mi.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, p.jsx)(N.D, {
                                variant: "heading-xl/normal",
                                children: U.intl.string(mn.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, p.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: U.intl.format(U.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, p.jsx)(mt.A, {
                variant: "member",
                className: mi.iO,
                analyticsLocation: {
                    page: I.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: I.JJy.HERO,
                    object: I.ZSU.CARD,
                },
                videoPlacement: "settings_header",
            }),
        ],
    });
}
var ml = n(315629),
    mr = n(87719),
    ma = n(961085);
function mo() {
    let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser());
    if (null == e || af.Ay.hasFreeBoosts(e)) return null;
    let t = eC.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(ml.h, {
        color: "nitro-pink",
        className: ma.vK,
        children: [
            (0, p.jsxs)("div", {
                className: ma.nw,
                children: [
                    (0, p.jsx)("img", { alt: "", className: ma.q3, src: gY }),
                    (0, p.jsxs)("div", {
                        className: ma.Tm,
                        children: [
                            (0, p.jsx)(Q.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: U.intl.format(U.t.Idh1Vs, { count: tJ.M4, boostCount: tJ.M4 }),
                            }),
                            (0, p.jsxs)("div", {
                                className: ma.xv,
                                children: [
                                    (0, p.jsx)(ad.t, { className: ma.nE }),
                                    (0, p.jsx)(Q.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: U.intl.format(U.t["6UAu+f"], {
                                            count: tJ.M4,
                                            boostCount: tJ.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)(v.$, {
                variant: "expressive",
                size: "sm",
                icon: ad.t,
                text: U.intl.string(U.t["8x0jKT"]),
                onClick: mr.e,
            }),
        ],
    });
}
var mu = n(532991);
function md() {
    let e = (0, f.bG)([gN.A], () => gN.A.affinities),
        t = (0, f.bG)([gC.Ay], () => gC.Ay.getFlattenedGuildIds()),
        n = T.useMemo(() => {
            let n = e.slice(0, 3).map((e) => e.guildId);
            for (let e = 0; e < t.length && n.length < 3; e++) {
                let i = t[e];
                n.includes(i) || n.push(i);
            }
            return n;
        }, [e, t]);
    return 0 === n.length
        ? null
        : (0, p.jsxs)("div", {
              className: mu.i,
              children: [
                  (0, p.jsx)(N.D, { variant: "heading-md/semibold", children: U.intl.string(U.t.r90Wgo) }),
                  (0, p.jsx)("div", { className: mu.k, children: n.map((e) => (0, p.jsx)(gB, { guildId: e }, e)) }),
              ],
          });
}
var mc = n(967246);
function mg(e) {
    let { count: t } = e,
        i = eC.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(ml.h, {
        color: "nitro-pink",
        className: mc.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mc.nw,
                children: [
                    (0, p.jsxs)("div", {
                        className: mc.MD,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mc.F8, src: gY }),
                            (0, p.jsx)("div", {
                                className: iE()(mc.qS, "theme-dark"),
                                children: (0, p.jsx)("span", { className: mc.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, p.jsxs)("div", {
                        className: mc.Tm,
                        children: [
                            (0, p.jsx)(Q.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: U.intl.format(U.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mc.xv,
                                children: [
                                    (0, p.jsx)(ad.t, { className: mc.nE }),
                                    (0, p.jsx)(Q.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: U.intl.format(U.t["6UAu+f"], {
                                            count: tJ.M4,
                                            boostCount: tJ.M4,
                                            helpdeskArticle: i,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)(v.$, {
                variant: "primary",
                size: "sm",
                icon: gp._,
                text: U.intl.string(U.t.BMx1iy),
                onClick: () => {
                    (0, sI.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("378357"), n.e("418710")]).then(n.bind(n, 770101));
                        return (t) =>
                            (0, p.jsx)(e, {
                                ...t,
                                onSelectGuild: (e) => {
                                    (t.onClose(),
                                        (0, gV.g)({
                                            analyticsLocations: [],
                                            analyticsLocation: {
                                                page: I.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                section: I.JJy.SETTINGS_PREMIUM,
                                                object: I.ZSU.BUTTON_CTA,
                                                objectType: I.AnalyticsObjectTypes.BUY,
                                            },
                                            guild: e,
                                        }));
                                },
                            });
                    });
                },
            }),
        ],
    });
}
var mm = n(89150);
function mA(e) {
    let { premiumSubscription: t } = e,
        n = (0, f.bG)([gy.A], () => gy.A.boostSlots),
        i = T.useMemo(() => Object.values(n), [n]),
        s = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
        l = (0, f.bG)([gN.A], () => gN.A.affinities),
        r = (0, f.bG)([gC.Ay], () => gC.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = (0, f.bG)([gf.A], () => gf.A.getCurrentUserAppliedBoosts()),
        { fractionalState: u } = (0, cD.A)({ forceFetch: !0 }),
        d = s?.isPremiumGroupMember(),
        c = t?.isPausedOrPausePending === !0 && u === tJ.xc.NONE,
        g = T.useMemo(() => {
            if (null == t || c) return 0;
            let e = af.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : i.filter((e) => e.isAvailable()).length;
        }, [t, c, i]);
    return (0, p.jsxs)("div", {
        className: mm.GO,
        children: [
            (0, p.jsx)(u8.kb, { className: mm.ek }),
            (0, p.jsx)(ms, {}),
            (0, p.jsx)(mo, {}),
            g > 0 && (0, p.jsx)(mg, { count: g }),
            d && (0, p.jsx)(g_.A, {}),
            !a && (0, p.jsx)(gj, {}),
            (0, p.jsxs)("div", {
                className: mm.C_,
                children: [
                    (0, p.jsx)(g3, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: o,
                        fractionalPremiumState: u,
                    }),
                    (0, p.jsx)(md, {}),
                    (0, p.jsx)(gI.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, p.jsx)(g6, {}),
                    (0, p.jsx)(me, {}),
                ],
            }),
        ],
    });
}
var mE = n(819677);
let mh = (0, E.E2)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            T.useEffect(() => {
                (oL.hP(), oL.$o(), (0, gT.CD)(), (0, cR.zS)(null, null, I.tF5.DISCOVERY), (0, gT.tO)(!0));
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, f.cf)([ue.A], () => ({
                    hasFetchedSubscriptions: ue.A.hasFetchedSubscriptions(),
                    premiumSubscription: ue.A.getPremiumTypeSubscription(),
                })),
                n = (0, cP.Y)(),
                i = (0, f.bG)([o9.A], () => o9.A.hasFetchedPaymentSources),
                s = (0, f.bG)([gf.A], () => gf.A.isFetchingCurrentUserAppliedBoosts),
                l = !e || !n || !i || s,
                [r, a] = T.useState(!1);
            return (l || r || a(!0), l && !r)
                ? (0, p.jsx)("div", { className: iE()(mE.kL, mE.Lq), children: (0, p.jsx)(oC.y, {}) })
                : (0, p.jsxs)("div", {
                      className: mE.kL,
                      children: [
                          (0, p.jsx)("div", { className: mE.Tp }),
                          (0, p.jsx)("div", { className: mE.Qs, children: (0, p.jsx)(mA, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [U.intl.string(U.t["+CbP2v"]), U.intl.string(U.t.Nn1lJy)],
    }),
    mx = (0, E.zZ)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [mh] }),
    mS = (0, E.t_)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => U.intl.string(U.t["+CbP2v"]),
        buildLayout: () => [mx],
    }),
    mp = (0, E.i4)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["+CbP2v"]),
        icon: gp._,
        buildLayout: () => [mS],
    });
var mT = n(153659),
    mf = n(155984),
    mI = n(357758),
    m_ = n(262077),
    mN = n(281445),
    mC = n(624479),
    my = n(626584),
    mb = n(131607),
    mv = n(95035),
    mj = n(196736),
    mO = n(685743),
    mL = n(349085),
    mR = n(342942),
    mD = n(376205),
    mP = n(252589),
    mG = n(758836),
    mM = n(49999),
    mU = n(344045),
    mV = n(439050);
let mk = new my.A("GameServerSubscriptionsSection");
function mw(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function mF(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let mB = T.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: s } = (0, ez.Ay)(),
        l = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, mL.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, mb.kn)([eA.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eA.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = d1.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: m } = (0, mO.A)(c, t.id, tw.A.GAME_SERVER_PAGE, t.serverIp),
        A = T.useCallback(() => {
            (0, mR.A)({
                provider: mN.X.SHOCKBYTE,
                onAccept: () => {
                    (u(mM.i.TAKE_ACTION), g());
                },
            });
        }, [u, g]),
        {
            hasSubscription: E,
            priceLabel: h,
            dateLabel: x,
            isCanceled: S,
            isDanger: _,
        } = (0, f.bG)(
            [ue.A, d3.A],
            () => {
                let e = null != l ? ue.A.getSubscriptionById(l) : null;
                if (null == e)
                    return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    s = !t && null != e.renewalMutations,
                    r = s ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? d3.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? U.intl.formatToPlainString(U.t.AbOLNu, { price: (0, uG.$g)(u, o.priceCurrency) })
                            : null,
                    c = mw(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? U.intl.formatToPlainString(mU.default["3aEgK6"], { date: c })
                        : s
                          ? U.intl.formatToPlainString(mU.default.KFSA3M, { date: c })
                          : U.intl.formatToPlainString(mU.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || s,
                };
            },
            [l, n, i],
            mF,
        ),
        N = T.useCallback(() => {
            if (null == l) return;
            let e = ue.A.getSubscriptionById(l),
                t = null != e ? mw(e.currentPeriodEnd) : "";
            (0, n8.A)({
                title: U.intl.string(mU.default.TEYPNR),
                subtitle: U.intl.formatToPlainString(mU.default.XR1WrB, { date: t }),
                confirmText: U.intl.string(U.t["cY+Oob"]),
                cancelText: U.intl.string(mU.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        (await oL.M2(l, s), await oL.hP());
                    } catch (e) {
                        mk.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [l, s]),
        C = T.useCallback(() => {
            if (null == l) return;
            let e = ue.A.getSubscriptionById(l);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? d3.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, uG.$g)(u, o.priceCurrency) : "",
                c = mw(e.currentPeriodEnd);
            (0, n8.A)({
                title: U.intl.string(mU.default.o96qbc),
                subtitle: U.intl.formatToPlainString(mU.default["7n6Qq+"], { price: d, date: c }),
                confirmText: U.intl.string(U.t.iIvF2z),
                cancelText: U.intl.string(U.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, cR.ur)(r);
                        let t = e.items;
                        (await oL.nV(
                            e,
                            { status: I.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, af.UC)(t, e.currency),
                            s,
                        ),
                            await oL.hP());
                    } catch (e) {
                        mk.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [l, r, s, n, i]),
        y = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, p.jsxs)("div", {
        className: mV.nM,
        children: [
            (0, p.jsxs)("div", {
                className: mV.M4,
                children: [
                    (0, p.jsxs)("div", {
                        className: mV.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, p.jsx)("img", { className: mV.uP, src: a, alt: "" }),
                            (0, p.jsx)("div", { className: mV.tw }),
                        ],
                    }),
                    (0, p.jsxs)("div", {
                        className: mV.CR,
                        children: [
                            (0, p.jsx)(Q.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: t.serverName,
                            }),
                            (0, p.jsx)(Q.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: `${t.gameName}  \u{2022}  ${t.planName}`,
                            }),
                            y &&
                                (d
                                    ? (0, p.jsxs)("div", {
                                          className: mV.CQ,
                                          children: [
                                              (0, p.jsx)(Q.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, p.jsx)(n9.D, {
                                                  className: mV.cL,
                                                  onClick: g,
                                                  "aria-label": U.intl.string(U.t.OpuAlK),
                                                  children: m
                                                      ? (0, p.jsx)(uF.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, p.jsx)(mC.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, p.jsx)(mv.A, { onClick: A, children: U.intl.string(mU.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: mV.Rd,
                children: [
                    (0, p.jsxs)("div", {
                        className: mV.Ff,
                        children: [
                            null != h &&
                                (0, p.jsx)(Q.E, {
                                    variant: "text-md/semibold",
                                    color: "text-default",
                                    tag: "span",
                                    children: h,
                                }),
                            null != x &&
                                (_
                                    ? (0, p.jsxs)("div", {
                                          className: mV.ez,
                                          children: [
                                              (0, p.jsx)(i3.E, { size: "xs", color: "text-feedback-critical" }),
                                              (0, p.jsx)(Q.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-critical",
                                                  tag: "span",
                                                  children: x,
                                              }),
                                          ],
                                      })
                                    : (0, p.jsx)(Q.E, {
                                          variant: "text-sm/medium",
                                          color: "text-muted",
                                          tag: "span",
                                          children: x,
                                      })),
                        ],
                    }),
                    E &&
                        (S
                            ? (0, p.jsx)(v.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: U.intl.string(U.t.iIvF2z),
                                  onClick: C,
                              })
                            : (0, p.jsx)(v.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: U.intl.string(U.t["ETE/oC"]),
                                  onClick: N,
                              })),
                ],
            }),
        ],
    });
});
function mz(e) {
    let { servers: t } = e,
        n = (0, mj.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, mP.Y)(),
        s = (0, f.bG)([lf.default], () => af.Ay.canUseShopDiscounts(lf.default.getCurrentUser())),
        l = T.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, f.yK)([ue.A], () => (0, mD.HY)(t, i, (e) => ue.A.getSubscriptionById(e)), [t, i]);
    T.useEffect(() => {
        let e = r.filter((e) => !d3.A.isLoadedForSKU(e) && !d3.A.isFetchingForSKU(e));
        e.length > 0 && (0, cR.jv)(e).catch(() => {});
    }, [r]);
    let a = T.useCallback(() => {
        ((0, tH.default)(), (0, t7.pX)(I.BVt.COLLECTIBLES_SHOP_WITH_TAB(mG.G2.GAME_SERVERS)));
    }, []);
    return (0, p.jsxs)("div", {
        className: mV.uW,
        children: [
            (0, p.jsxs)("div", {
                className: mV.wx,
                children: [
                    (0, p.jsx)(Q.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: U.intl.string(mU.default.vCzwM7),
                    }),
                    (0, p.jsxs)("div", {
                        className: mV.h_,
                        children: [
                            (0, p.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: U.intl.string(mU.default.y85Eg9),
                            }),
                            n &&
                                (0, p.jsx)(mv.A, {
                                    onClick: a,
                                    children: (0, p.jsx)(Q.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: U.intl.string(mU.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", {
                className: mV.p_,
                children: t.map((e) =>
                    (0, p.jsx)(mB, { server: e, planOptionBySkuId: l, canUseShopDiscount: s }, e.id),
                ),
            }),
        ],
    });
}
var mY = n(55766),
    mX = n(696986),
    mH = n(364036);
function mW(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(N.D, { variant: "heading-md/bold", children: U.intl.string(U.t["KzCF/6"]) }),
            (0, p.jsx)(mX.h, { size: 4 }),
            (0, p.jsx)(Q.E, { variant: "text-md/normal", className: mH.yV, children: U.intl.string(U.t["3D7qCu"]) }),
            (0, p.jsx)(mX.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: mH.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: mH.RI }),
                    (0, p.jsxs)("div", {
                        className: mH.FS,
                        children: [
                            (0, p.jsx)(N.D, {
                                variant: "heading-xl/semibold",
                                className: mH.wx,
                                children: U.intl.string(U.t["KzCF/6"]),
                            }),
                            (0, p.jsx)(Q.E, {
                                variant: "text-md/normal",
                                className: mH.h_,
                                children: U.intl.format(U.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, p.jsx)(v.$, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: U.intl.string(U.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}
var mK = n(872351),
    mZ = n(9113),
    mq = n(599941),
    mQ = n(384684),
    m$ = n(2242);
let mJ = [];
var m0 = n(885574),
    m1 = n(62010),
    m2 = n(912851),
    m3 = n(182744);
let m5 = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, p.jsx)(n9.D, {
        onClick: i ? void 0 : n,
        className: m3.x6,
        children: (0, p.jsxs)("div", {
            className: m3.hQ,
            children: [
                i
                    ? (0, p.jsx)(oC.y, { type: oC.y.Type.PULSING_ELLIPSIS, className: m3.__invalid_spinner })
                    : (0, p.jsx)(Q.E, { variant: "text-md/medium", className: m3.Pf, children: t }),
                (0, p.jsx)(g8.a, { size: "md", color: "currentColor", className: m3.UE }),
            ],
        }),
    });
};
var m4 = n(465932),
    m6 = n(543767),
    m8 = n(951555),
    m7 = n(790284),
    m9 = n(636194),
    Ae = n(624456),
    At = n(710144),
    An = n(815332),
    Ai = n(162093),
    As = n(557506);
function Al(e) {
    let { transitionState: t, groupListing: n, listing: i, subscription: s, onClose: l } = e,
        r = (0, tZ.GV)(),
        { analyticsLocations: a } = (0, ez.Ay)(tw.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = (function (e) {
            let [t, n] = T.useState(!1),
                [i, s] = T.useState(null);
            return {
                cancelSubscription: async function (t) {
                    try {
                        return (n(!0), await oL.M2(t, e), !0);
                    } catch (e) {
                        s(e);
                    } finally {
                        n(!1);
                    }
                },
                error: i,
                submitting: t,
            };
        })(a);
    async function c() {
        (await o(s.id)) && l();
    }
    let g = i.role_benefits.benefits.filter((e) => e.ref_type === m$.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === m$.bN.INTANGIBLE),
        A = ix()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        E = U.intl.formatToPlainString(U.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: A,
        });
    return (0, p.jsx)(sf.a, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: U.intl.string(U.t.EP6EPb), variant: "secondary", onClick: l },
            { variant: "critical-primary", text: U.intl.string(U.t.F6lUDF), onClick: c, loading: d },
        ],
        title: U.intl.string(U.t.O6l5tM),
        subtitle: E,
        onClose: l,
        children: (0, p.jsxs)(Z.B, {
            gap: 8,
            children: [
                null != u ? (0, p.jsx)(i$.w, { type: "critical", message: u.message, role: "alert" }) : null,
                (0, p.jsx)(Ai.x, { listingId: i.id, guildId: n.guild_id, className: As.P }),
            ],
        }),
    });
}
var Ar = n(319225),
    Aa = n(746080),
    Ao = n(883616);
function Au(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: s } = e;
    return (0, p.jsxs)("div", {
        className: Ao.L0,
        children: [
            (0, p.jsxs)("div", {
                className: Ao.a5,
                children: [
                    (0, p.jsx)(N.D, { variant: "heading-deprecated-12/semibold", className: Ao.HU, children: t }),
                    i &&
                        (0, p.jsx)(sE.m, {
                            text: s,
                            children: (0, p.jsx)(m0.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: Ao.Mo,
                            }),
                        }),
                ],
            }),
            (0, p.jsx)(N.D, { variant: "heading-xl/semibold", className: Ao.sx, children: n }),
        ],
    });
}
function Ad(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, ez.Ay)(),
        [i] = (0, m6.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tw.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [s, l] = (0, f.yK)([o9.A], () => [o9.A.hasFetchedPaymentSources, o9.A.paymentSourceFetchError]);
    return null != i && (s || l)
        ? (0, p.jsx)(m8.A, { subscription: t, currentInvoicePreview: i })
        : (0, p.jsx)(oC.y, {});
}
function Ac(e) {
    let {
        isTrial: t,
        isCancelled: n,
        isResubscribing: i,
        shouldHideRoleSubscriptionEntryPoints: s,
        onCancelSubscriptionClick: l,
        onResubscribeClick: r,
        onChangePlanClick: a,
    } = e;
    return n && (t || s)
        ? null
        : (0, p.jsx)(t6.D, {
              label: U.intl.string(U.t["4neDM+"]),
              children: (0, p.jsx)("div", {
                  className: Ao.__invalid_rowButtons,
                  children: n
                      ? (0, p.jsx)(v.$, { variant: "primary", text: U.intl.string(U.t.y3mAE4), onClick: r, loading: i })
                      : (0, p.jsxs)(p.Fragment, {
                            children: [
                                !t && !s && (0, p.jsx)(m5, { label: U.intl.string(U.t.FRbWR8), onClick: a }),
                                (0, p.jsx)(m5, { label: U.intl.string(U.t.Dx0lF7), onClick: l }),
                            ],
                        }),
              }),
          });
}
let Ag = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: s,
            expanded: l,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, Ae.M)(e),
                n = (0, f.bG)([m9.A], () => m9.A.getSubscriptionListingForPlan(t)),
                i = (0, f.bG)([m9.A], () =>
                    null != n ? m9.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                s = (0, f.bG)([sL.A], () => sL.A.getGuild(i?.guild_id)),
                [l, r] = T.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, mq.XE)();
            T.useEffect(() => {
                l && null != s && null == m9.A.getSubscriptionSettings(s.id) && a(s.id);
            }, [l, s, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = ix()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, uG.$g)(t.price, t.currency) : "",
                              s = ix()(t.createdAt).format("M/D/YY"),
                              l = t.status === I.Dmq.CANCELED,
                              r = t.status === I.Dmq.PAST_DUE,
                              a = t.hasActiveTrial;
                          return {
                              memberSince: s,
                              nextRenewalDate: n,
                              nextRenewalLabel: l ? U.intl.string(U.t.UAfot2) : U.intl.string(U.t.CVjLcM),
                              subscriptionPrice: i,
                              isCancelled: l,
                              isPastDue: r,
                              isTrial: a,
                          };
                      })({ subscription: e });
            return {
                guild: s,
                expanded: l,
                handleToggleExpanded: function () {
                    return r((e) => !e);
                },
                listing: n,
                groupListing: i,
                subscriptionInfo: o,
            };
        })(t),
        [o, u] = T.useState(!1),
        d = (0, tZ.GV)(),
        { analyticsLocations: c } = (0, ez.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: g } = (0, m4.MH)(s?.id),
        m = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function A() {
        try {
            (u(!0),
                await oL.QP(t, c),
                (0, Ar.E)({ title: U.intl.string(U.t.oPV2cy), body: U.intl.string(U.t.DdRizV) }));
        } finally {
            u(!1);
        }
    }
    let {
            isCancelled: E,
            isPastDue: x,
            subscriptionPrice: S,
            memberSince: _,
            nextRenewalDate: N,
            nextRenewalLabel: C,
            isTrial: y,
        } = a,
        b = n.soft_deleted || null == s || m;
    return (0, p.jsxs)("div", {
        className: Ao.kL,
        children: [
            (0, p.jsx)(At.A, {
                onClick: r,
                className: Ao.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, p.jsxs)(p.Fragment, {
                        children: [
                            null != s && (0, p.jsx)(gU.Ay, { guild: s, active: !0, size: gU.Ay.Sizes.MEDIUM }),
                            (0, p.jsxs)("div", {
                                className: Ao.if,
                                children: [
                                    (0, p.jsx)(Q.E, {
                                        variant: "text-md/medium",
                                        className: Ao.J5,
                                        children: null != s ? s.name : U.intl.string(U.t["He+cmd"]),
                                    }),
                                    (0, p.jsxs)("div", {
                                        className: Ao.xp,
                                        children: [
                                            (0, p.jsx)(Q.E, {
                                                variant: "text-sm/normal",
                                                className: Ao.KR,
                                                children: n.name,
                                            }),
                                            E
                                                ? (0, p.jsx)(tc.Lp, { text: U.intl.string(U.t["7uFZGt"]) })
                                                : y
                                                  ? (0, p.jsx)(tc.Lp, {
                                                        text: U.intl.string(U.t["6anton"]),
                                                        color: n6.A.unsafe_rawColors.BRAND_500.css,
                                                    })
                                                  : x
                                                    ? (0, p.jsx)(sE.m, {
                                                          text: U.intl.string(U.t.eSuJE2),
                                                          children: (0, p.jsx)("div", {
                                                              children: (0, p.jsx)(tc.Lp, {
                                                                  className: Ao.qc,
                                                                  text: U.intl.string(U.t.NrRwIl),
                                                                  color: n6.A.unsafe_rawColors.YELLOW_300.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            m
                                                ? (0, p.jsx)(sE.m, {
                                                      text: U.intl.string(U.t.nv1IqK),
                                                      children: (0, p.jsx)("div", {
                                                          className: Ao.Bi,
                                                          children: (0, p.jsx)(m1.E, {
                                                              type: { text: U.intl.string(U.t["sBl3X/"]) },
                                                              variant: "secondary",
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            (0, p.jsx)(n9.D, {
                                onClick: i(r),
                                "aria-label": U.intl.string(U.t.e5eQOy),
                                "aria-controls": d,
                                "aria-expanded": l,
                                focusProps: { ringTarget: t },
                                children: (0, p.jsx)(g8.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: iE()(Ao.D6, { [Ao.S7]: l }),
                                }),
                            }),
                        ],
                    });
                },
            }),
            null != i && l
                ? (0, p.jsxs)("div", {
                      id: d,
                      children: [
                          (0, p.jsx)("div", { className: Ao.yF }),
                          (0, p.jsx)(An.A, { groupListingId: i.id, subscription: t, className: Ao.kE }),
                          (0, p.jsxs)("div", {
                              className: Ao.Zx,
                              children: [
                                  (0, p.jsx)(Au, { label: C, value: N }),
                                  (0, p.jsx)(Au, {
                                      label: U.intl.string(U.t.dltUMH),
                                      value: S,
                                      showInfoIcon: y,
                                      infoIconTooltipText: y ? U.intl.string(U.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, p.jsx)(Au, { label: U.intl.string(U.t.AOcwWB), value: _ }),
                              ],
                          }),
                          (0, p.jsx)(mX.h, { size: 16 }),
                          !E &&
                              !m &&
                              (0, p.jsx)(t6.D, {
                                  label: U.intl.string(U.t.wmMFvA),
                                  children: (0, p.jsx)(Ad, { subscription: t }),
                              }),
                          !b &&
                              (0, p.jsx)(Ac, {
                                  isTrial: y,
                                  isCancelled: E,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: g,
                                  onCancelSubscriptionClick: function () {
                                      if (null != s && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, sI.openModal)((t) => (0, p.jsx)(Al, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != s &&
                                          ((0, t7.pX)(I.BVt.CHANNEL(s.id, Aa.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tH.default)(),
                                          m2.A.show(
                                              I.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              U.intl.string(U.t.DvbaM4),
                                              () => {
                                                  (m7.A.setState({ subsection: eO.nR }),
                                                      (0, ng.openUserSettings)(h.X.SUBSCRIPTIONS_PANEL));
                                              },
                                          ));
                                  },
                                  onResubscribeClick: A,
                              }),
                      ],
                  })
                : null,
        ],
    });
};
var Am = n(661097);
let AA = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, f.bG)([mQ.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [mQ.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? m$.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? m$.M_.NONE
                                  : m$.M_.IN_SUBSCRIPTION_SERVER;
                        })([mQ.A]),
                    ) === m$.M_.SUBSCRIBED,
                n = (0, f.bG)([ue.A], () => ue.A.getActiveGuildSubscriptions()),
                i = T.useRef(!1);
            return (
                T.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            s = ue.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !ue.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), oL.hP());
                }, [e, t]),
                n ?? mJ
            );
        })(),
        { loading: i } = (0, mq.eb)(n);
    return ((0, mZ.A)(oU.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, p.jsx)(oC.y, {})
        : 0 === n.length
          ? null
          : (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(v.$, { text: U.intl.string(U.t.hqyhKQ), icon: mK.z, variant: "secondary", onClick: t }),
                    (0, p.jsx)(mX.h, { size: 10 }),
                    (0, p.jsx)(n7.n, {
                        label: U.intl.string(U.t["KzCF/6"]),
                        description: U.intl.string(U.t["Y+ucR7"]),
                        children: (0, p.jsx)("div", {
                            className: Am.A,
                            children: n.map((e) => (0, p.jsx)(Ag, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var AE = n(327479),
    Ah = n(932012);
function Ax(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(N.D, { variant: "heading-md/bold", children: U.intl.string(U.t["48ywCu"]) }),
            (0, p.jsx)(mX.h, { size: 4 }),
            (0, p.jsx)(Q.E, { variant: "text-md/normal", className: Ah.yV, children: U.intl.string(U.t.VWxmSo) }),
            (0, p.jsx)(mX.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: Ah.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: Ah._e }),
                    (0, p.jsxs)("div", {
                        className: Ah.FS,
                        children: [
                            (0, p.jsx)(N.D, {
                                variant: "heading-xl/semibold",
                                className: Ah.wx,
                                children: U.intl.string(U.t["48ywCu"]),
                            }),
                            (0, p.jsx)(Q.E, {
                                variant: "text-md/normal",
                                className: Ah.h_,
                                children: U.intl.format(U.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, p.jsx)(AE.A, { onClick: t, text: U.intl.string(U.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var AS = n(548411),
    Ap = n(417098),
    AT = n(143582),
    Af = n(915043),
    AI = n(631466);
function A_(e) {
    let { className: t, header: n, headerClassName: i, children: s } = e,
        l = T.useMemo(() => {
            let e = !1;
            return (
                T.Children.forEach(s, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [s]);
    return (0, p.jsxs)("div", {
        className: iE()(AI.iE, t),
        children: [
            (0, p.jsx)("div", { className: iE()(AI.wx, i), children: n }),
            l && (0, p.jsx)("div", { className: AI.Qs, children: s }),
        ],
    });
}
var AN = n(885996),
    AC = n(144165),
    Ay = n(664121),
    Ab = n(950305),
    Av = n(943775),
    Aj = n(123791),
    AO = n(900797),
    AL = n(611643);
let AR = T.createContext({ isOpen: !1, toggleOpen: () => {} });
function AD(e) {
    let { children: t } = e,
        [n, i] = T.useReducer((e) => !e, !1),
        s = T.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, p.jsx)(AR.Provider, { value: s, children: t(n) });
}
AD.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: s } = T.useContext(AR),
        l = i ? AO.t : g8.a,
        r = null != n ? n : i ? U.intl.string(U.t.fgq1gs) : U.intl.string(U.t.XJuakA);
    return (0, p.jsxs)(n9.D, {
        className: iE()(AL.L, t),
        onClick: s,
        children: [
            (0, p.jsx)(Q.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, p.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var AP = n(627363),
    AG = n(243217),
    AM = n(328968),
    AU = n(163437),
    AV = n(3432);
function Ak(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var Aw = n(562312),
    AF = (((u = {})[(u.LOADING = 0)] = "LOADING"), (u[(u.DONE = 1)] = "DONE"), (u[(u.ERROR = 2)] = "ERROR"), u);
function AB(e) {
    let { subscription: t, navigateToSwitchPlan: n, loadingState: i } = e,
        s = t.metadata?.application_subscription_guild_id,
        { renewalMutations: l, planId: r } = t,
        {
            appId: a,
            plan: o,
            storeListing: u,
            isGuildSubscription: d,
            subscriptionForGuild: c,
            sku: g,
            isCancelled: m,
            isOrphanedGuildSubscription: A,
            renewalPlan: E,
        } = (0, f.cf)(
            [d3.A, d5.A, AM.A, sL.A],
            () => {
                let e,
                    n = d3.A.get(r),
                    i = null != n ? d5.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? AM.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, AU.PJ)(o.skuFlags),
                    d = u && null != s ? sL.A.getGuild(s) : void 0,
                    c = (0, AU.Uo)(t, i),
                    g = u && null != s && null == d;
                if (!1 === c && null != l && l.items.length > 0) {
                    let t = l.items[0];
                    e = d3.A.get(t.planId) ?? void 0;
                }
                return {
                    appId: a,
                    isGuildSubscription: u,
                    isOrphanedGuildSubscription: g,
                    plan: n,
                    sku: i,
                    storeListing: o,
                    subscriptionForGuild: d,
                    isCancelled: c,
                    renewalPlan: e,
                };
            },
            [s, r, l, t],
        ),
        { data: h } = (0, AP.YY)(a),
        x = T.useMemo(() => (null != h ? (0, Av.A)(h, 100) : null), [h]),
        S = g?.deleted ?? !1,
        _ = null != g && (0, AU.Se)(g),
        C = t.status === I.Dmq.PAST_DUE,
        { analyticsLocations: y } = (0, ez.Ay)(),
        [b] = (0, m6.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: y,
            analyticsLocation: tw.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = Ak(t.currentPeriodEnd),
        j = 0 === i;
    return (0, p.jsxs)(A_, {
        headerClassName: Aw.dL,
        header:
            !1 === j
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsxs)("div", {
                              className: Aw.VW,
                              children: [
                                  null != x &&
                                      (0, p.jsx)(AC._, { src: x.href, imageClassName: Aw.Z2, width: 40, height: 40 }),
                                  (0, p.jsxs)("div", {
                                      className: Aw.aF,
                                      children: [
                                          (0, p.jsx)(N.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: h?.name ?? U.intl.string(U.t["7kqy7W"]),
                                          }),
                                          (0, p.jsx)(Q.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? U.intl.string(U.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, p.jsx)("div", {
                              className: Aw.Pz,
                              children:
                                  null != h &&
                                  null != u &&
                                  null != g &&
                                  (0, p.jsx)(AW, {
                                      subscription: t,
                                      app: h,
                                      guild: c,
                                      sku: g,
                                      storeListing: u,
                                      isCancelled: m,
                                      isOrphanedGuildSubscription: A,
                                      navigateToSwitchPlan: n,
                                      renewalSkuId: E?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, p.jsx)(oC.y, { type: oC.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, p.jsx)(AH, {
                    type: "warning",
                    title: _
                        ? U.intl.formatToPlainString(U.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : U.intl.formatToPlainString(U.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && A && (0, p.jsx)(AH, { type: "warning", title: U.intl.string(U.t.SmSP8Q) }),
            C && (0, p.jsx)(AH, { type: "danger", title: U.intl.string(U.t.fvOqBo) }),
            (0, p.jsxs)("div", {
                className: Aw.zH,
                children: [
                    (0, p.jsx)(AX, {
                        title: U.intl.string(U.t["5D/KEH"]),
                        content: d
                            ? (0, p.jsxs)(p.Fragment, {
                                  children: [
                                      (0, p.jsxs)("span", {
                                          className: Aw.yW,
                                          children: [(0, p.jsx)(Ay.R, { size: "xs" }), U.intl.string(U.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, p.jsxs)("span", {
                                              className: Aw._t,
                                              children: [
                                                  (0, p.jsx)(Q.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: U.intl.format(U.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, p.jsx)(gU.Ay, { guild: c, size: gU.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, p.jsxs)("span", {
                                  className: Aw.yW,
                                  children: [(0, p.jsx)(Ab.UserIcon, { size: "xs" }), U.intl.string(U.t["6anEVv"])],
                              }),
                    }),
                    (0, p.jsx)(Az, { invoicePreview: b, subscriptionPlan: o }),
                    (0, p.jsx)(AX, {
                        title: U.intl.string(U.t.dnUzb6),
                        content: Ak(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, p.jsx)(AY, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: E }),
                ],
            }),
            (0, p.jsx)(AZ, {
                subscription: t,
                currentInvoicePreview: b,
                loadingState: i,
                isDeleted: S,
                isCancelled: m,
            }),
            null != h &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, p.jsx)(AK, { appId: h.id, listingBenefits: u.benefits }),
        ],
    });
}
function Az(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, p.jsx)(AX, { title: U.intl.string(U.t.KI7ERx), content: "" });
    let i = (0, uG.CE)((0, uG.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = n?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, p.jsx)(AX, { title: U.intl.string(U.t.KI7ERx), content: i });
    let l = (0, uG.CE)((0, uG.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, p.jsx)(AX, {
        title: U.intl.string(U.t.KI7ERx),
        content: (0, p.jsxs)(p.Fragment, {
            children: [
                (0, p.jsx)(Q.E, { variant: "text-sm/semibold", children: l }),
                l !== i &&
                    (0, p.jsx)(sE.m, {
                        text: U.intl.format(U.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, p.jsx)(Q.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, p.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function AY(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, uG.CE)((0, uG.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, p.jsx)(AX, {
            title: U.intl.string(U.t.hIhAM3),
            content: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(Q.E, { variant: "text-sm/medium", children: n }),
                    (0, p.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        children: U.intl.format(U.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, p.jsx)(AX, { title: t ? U.intl.string(U.t.enxcAl) : U.intl.string(U.t["Ms+6Zq"]), content: n });
}
function AX(e) {
    let { title: t, content: n } = e;
    return (0, p.jsxs)("div", {
        className: Aw.nM,
        children: [
            (0, p.jsx)(Q.E, { variant: "text-sm/medium", children: t }),
            (0, p.jsx)(Q.E, { variant: "text-sm/medium", className: Aw.u4, children: n }),
        ],
    });
}
function AH(e) {
    let { type: t, title: n } = e;
    return (0, p.jsx)("div", {
        className: Aw.Xm,
        children: (0, p.jsx)(i$.w, { type: "warning" === t ? "warning" : "critical", message: n, role: "status" }),
    });
}
function AW(e) {
    let {
            app: t,
            storeListing: i,
            sku: s,
            subscription: l,
            isCancelled: r,
            isOrphanedGuildSubscription: a,
            guild: o,
            renewalSkuId: u,
            navigateToSwitchPlan: d,
        } = e,
        c = (0, AU.Se)(s),
        { analyticsLocations: g } = (0, ez.Ay)(),
        [m, A] = T.useState(!1),
        E = (0, Aj.C)(t.id),
        h = (0, f.bG)([d5.A], () => d5.A.getParentSKU(i.skuId), [i.skuId]),
        x = T.useMemo(() => {
            var e, t;
            let n;
            return null == h
                ? []
                : ((e = i.id),
                  (t = E.subscriptions),
                  (n = new Set(h.bundledSkuIds)),
                  t.filter((t) => t.id !== e && n.has(t.skuId)));
        }, [i.id, E, h]),
        S = 0 !== x.length;
    async function I() {
        try {
            A(!0);
            let { subscription: e } = await (0, oL.QP)(l, g);
            if (null == e) return;
            (0, sI.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, p.jsx)(t, { ...n, storeListing: i, subscription: AG.A.createFromServer(e) });
            });
        } finally {
            A(!1);
        }
    }
    return (0, p.jsxs)("div", {
        className: Aw.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, p.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: U.intl.string(U.t.QtMnkW),
                        onClick: I,
                        loading: m,
                    })
                  : (0, p.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: U.intl.string(U.t["E8G/tr"]),
                        onClick: function () {
                            (0, sI.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("509032"), n.e("622800")]).then(
                                    n.bind(n, 301139),
                                );
                                return (n) =>
                                    (0, p.jsx)(e, { ...n, application: t, storeListing: i, subscription: l, guild: o });
                            });
                        },
                    }),
            S &&
                null != h &&
                !1 === r &&
                !1 === a &&
                (0, p.jsx)(v.$, {
                    variant: "primary",
                    size: "sm",
                    text: U.intl.string(U.t.R74ZBR),
                    onClick: () => {
                        d({
                            currentSubscription: l,
                            alternativeListings: x,
                            app: t,
                            subscriptionGroup: h,
                            currentListing: i,
                            renewalSkuId: u,
                        });
                    },
                }),
        ],
    });
}
function AK(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, p.jsx)(AD, {
        children: (e) =>
            (0, p.jsxs)("div", {
                className: Aw.PX,
                children: [
                    (0, p.jsxs)("div", {
                        className: Aw.wV,
                        children: [
                            e && (0, p.jsx)(Q.E, { variant: "text-sm/semibold", children: U.intl.string(U.t.mORL67) }),
                            (0, p.jsx)(AD.Toggle, {
                                className: Aw.Bh,
                                text: e ? U.intl.string(U.t.gsbFAw) : U.intl.string(U.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: s, icon: l } = e;
                              return (0, p.jsx)(AN.FY, { header: i, icon: (0, AV.N)(t, l), description: s }, n);
                          })
                        : null,
                ],
            }),
    });
}
function AZ(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: s, isCancelled: l } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, p.jsx)("div", {
                className: Aw.Ji,
                children: (0, p.jsx)(t6.D, {
                    label: U.intl.string(U.t.azZaZa),
                    children: (0, p.jsx)(oC.y, { type: oC.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, p.jsx)("div", {
                  className: Aw.Ji,
                  children: (0, p.jsxs)(Ap.$T, {
                      color: Ap.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          U.intl.format(U.t.IIHUUF, { subscriptionId: t.id }),
                          (0, p.jsx)("br", {}),
                          U.intl.format(U.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, p.jsx)("div", {
                  className: Aw.Ji,
                  children: (0, p.jsx)(t6.D, {
                      label: U.intl.string(U.t.azZaZa),
                      children: (0, p.jsx)(m8.A, { subscription: t, currentInvoicePreview: n, disabled: s || l }),
                  }),
              });
}
var Aq = (((d = {}).HOME = "HOME"), (d.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), d);
n(938796);
var AQ = n(38405);
let A$ = (0, f.UT)(d3.A, {
    getQueryId: I.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = d3.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && AQ.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, cR.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var AJ = n(240248),
    A0 = n(237218),
    A1 = n(763064);
function A2(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [s, l] = T.useState(!1),
        [r, a] = T.useState(null),
        o =
            null != r &&
            (0, p.jsx)("button", {
                className: A1.x6,
                onClick: () => l((e) => !e),
                children: (0, p.jsxs)(Q.E, {
                    className: A1.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? U.intl.string(U.t["JQX/Pb"]) : U.intl.string(U.t.Fbrd8J),
                        s
                            ? (0, p.jsx)(AO.t, { color: n6.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, p.jsx)(g8.a, { color: n6.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [u, d] = T.useState(null),
        c = T.useCallback(() => {
            if (null == u) return;
            let { scrollHeight: e, clientHeight: t } = u;
            e > t && a({ truncatedHeight: t, expandedHeight: e });
        }, [u]);
    T.useEffect(() => {
        requestAnimationFrame(c);
    }, [c, t, n]);
    let g = "auto";
    return (
        null != r && (g = s ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, p.jsxs)("div", {
            children: [
                (0, p.jsx)(Q.E, {
                    ...i,
                    className: A1.Qs,
                    lineClamp: s ? void 0 : n,
                    ref: d,
                    style: { height: g },
                    children: t,
                }),
                o,
            ],
        })
    );
}
var A3 = n(920352);
function A5(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: s, benefits: l, description: r } = n,
        a = T.useMemo(() => (null == n.thumbnail ? null : (0, A0.t)(s, n.thumbnail, 256)), [s, n.thumbnail]),
        { data: o } = A$(n.skuId),
        u = T.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, af._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, p.jsxs)(A_, {
              className: iE()(A3.iE, i),
              header: (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsxs)("div", {
                          className: A3.qd,
                          children: [
                              null != a &&
                                  (0, p.jsx)(AC._, { src: a.href, imageClassName: A3.rW, width: 48, height: 48 }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)(N.D, { variant: "heading-md/bold", children: n.summary }),
                                      (0, p.jsx)(Q.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, AJ.uJ)(r) &&
                      (0, p.jsx)("div", {
                          className: A3.h_,
                          children: (0, p.jsx)(A2, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, p.jsx)("div", {
                          className: A3.PX,
                          children: l.map((e) => {
                              let { id: t, name: n, description: i, icon: l } = e;
                              return (0, p.jsx)(AN.FY, { header: n, icon: (0, AV.N)(s, l), description: i }, t);
                          }),
                      }),
              ],
          });
}
var A4 = n(185438),
    A6 = n(683380);
function A8(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, Av.A)(t, 100),
        u = (0, AU.PJ)(r.flags),
        d = u ? Ay.R : Ab.UserIcon,
        c = u ? U.intl.string(U.t["46YF2D"]) : U.intl.string(U.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, f.bG)([sL.A], () => (u && null != g ? sL.A.getGuild(g) : void 0), [g, u]),
        A = (0, f.bG)(
            [d5.A],
            () => {
                if (null != a) return d5.A.get(a);
            },
            [a],
        ),
        E = Ak(n.currentPeriodEnd);
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsxs)("div", {
                className: A6.wx,
                children: [
                    null != o && (0, p.jsx)(AC._, { src: o.href, imageClassName: A6.Z2, width: 48, height: 48 }),
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)(N.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, p.jsxs)("div", {
                                className: A6.p4,
                                children: [
                                    (0, p.jsxs)(N.D, {
                                        variant: "heading-md/normal",
                                        className: A6.N4,
                                        children: [(0, p.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                (0, p.jsx)(Q.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, p.jsxs)("span", {
                                                    className: A6.vP,
                                                    children: [
                                                        (0, p.jsx)(gU.Ay, { guild: m, size: gU.Ay.Sizes.SMOL }),
                                                        (0, p.jsx)(N.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: U.intl.format(U.t["7ZD8p1"], {
                                                                guildName: m.name,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)(AD, {
                children: (e) =>
                    (0, p.jsxs)("div", {
                        className: A6._B,
                        children: [
                            (0, p.jsx)(Q.E, { variant: "text-md/normal", children: U.intl.string(U.t["goe+hk"]) }),
                            e &&
                                (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)(Q.E, {
                                            variant: "text-md/normal",
                                            children: U.intl.format(U.t["Q8qJ+5"], {}),
                                        }),
                                        (0, p.jsx)(Q.E, {
                                            variant: "text-md/normal",
                                            children: U.intl.format(U.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, p.jsx)(AD.Toggle, {
                                text: e ? U.intl.string(U.t["1Rkq/E"]) : U.intl.string(U.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, p.jsxs)("div", {
                className: A6.x0,
                children: [
                    (0, p.jsx)(A5, {
                        storeListing: i,
                        className: A6.o3,
                        cta: (0, p.jsxs)("div", {
                            className: A6.cJ,
                            children: [
                                (0, p.jsx)(Q.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: U.intl.string(U.t.fHIpOY),
                                }),
                                null != A &&
                                    (0, p.jsx)(Q.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: U.intl.format(U.t["OQk+jr"], { endDate: E }),
                                    }),
                            ],
                        }),
                    }),
                    s.map((e) =>
                        e.skuId === a
                            ? (0, p.jsx)(
                                  A5,
                                  {
                                      storeListing: e,
                                      cta: (0, p.jsx)(Q.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: U.intl.format(U.t.nn88hB, { startDate: E }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, p.jsx)(A7, { storeListing: e, guildId: g, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function A7(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: s } = (0, A4.A)({
            analyticsLocation: I.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, p.jsx)(A5, {
        storeListing: t,
        cta: (0, p.jsx)(v.$, { variant: "primary", size: "sm", text: U.intl.string(U.t["+KwmBt"]), onClick: s }),
    });
}
class A9 extends T.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, p.jsxs)(Ap.$T, {
                  color: Ap.Hv.DANGER,
                  style: { borderRadius: 0 },
                  children: [
                      U.intl.format(U.t.IIHUUF, { subscriptionId: this.props.subscription.id }),
                      " ",
                      U.intl.format(U.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                  ],
              })
            : this.props.children;
    }
}
function Ee(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, s] = T.useState({ route: Aq.HOME }),
        { route: l } = i;
    function r() {
        s({ route: Aq.HOME });
    }
    let a = (e) => {
            (s({ route: Aq.SWITCH_APP_PLANS, ...e }), n(U.intl.string(U.t.VFqtkP), r));
        },
        [o, u] = T.useState({});
    T.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: AF.LOADING })),
                (0, AT._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: AF.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: AF.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, Af.E)(),
        c = d !== Af.mJ.LOADED;
    switch (l) {
        case Aq.HOME:
            return (0, p.jsx)(p.Fragment, {
                children: t.map((e) =>
                    (0, p.jsx)(
                        A9,
                        {
                            subscription: e,
                            children: (0, p.jsx)(AB, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? AF.LOADING : (o[e.id] ?? AF.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case Aq.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, p.jsx)(A8, { ...m, navigateToHome: r });
        default:
            (0, ig.xb)(l);
    }
}
var Et = n(707989);
function En(e) {
    let { onGoBack: t } = e,
        n = (0, f.yK)(
            [ue.A],
            () =>
                ue.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, s] = T.useState();
    return (
        null == i && (i = (0, p.jsx)(Ei, { onBack: t, title: U.intl.string(U.t["DB/m9a"]) })),
        (0, p.jsxs)("div", {
            children: [
                i,
                (0, p.jsx)("div", {
                    className: Et.A,
                    children: (0, p.jsx)(Ee, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            s(
                                (0, p.jsx)(Ei, {
                                    title: e,
                                    onBack: () => {
                                        (t(), s(void 0));
                                    },
                                }),
                            );
                        },
                    }),
                }),
            ],
        })
    );
}
function Ei(e) {
    let { onBack: t, title: n } = e;
    return (0, p.jsxs)("div", {
        className: Et.D,
        children: [
            (0, p.jsx)(sm.K, {
                "aria-label": U.intl.string(U.t["13/7kX"]),
                icon: () => (0, p.jsx)(AS.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, p.jsx)(N.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var Es = n(366999),
    El = n(391659);
function Er(e) {
    let t,
        n,
        {
            showChargingUpState: i,
            rowValueText: s,
            endsAt: l,
            fractionalState: r,
            activationDate: a,
            hasPremiumGroup: o,
        } = e;
    o
        ? ((t = U.intl.string(ga.default["/S02sx"])), (n = U.intl.string(ga.default.OPJNST)))
        : i
          ? ((t = U.intl.string(U.t["hT6i/0"])),
            (n = null != a ? U.intl.format(U.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = U.intl.string(U.t["3G0CTC"])),
            (n = r === tJ.xc.FP_SUB_PAUSED ? U.intl.format(U.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = iE()({ [El.Hs]: i, [El.mT]: !i }),
        d = iE()({ [El.CQ]: i, [El.ZM]: !i }),
        c = iE()({ [El.EM]: !i });
    return (0, p.jsxs)("div", {
        className: El.r6,
        children: [
            (0, p.jsxs)("div", {
                className: El.Nv,
                children: [
                    (0, p.jsx)(N.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, p.jsx)(Q.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, p.jsx)("div", {
                    className: El.ZS,
                    children: (0, p.jsx)("div", {
                        className: u,
                        children: (0, p.jsx)(Q.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let Ea = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: s } = e,
        l = (0, af.kX)(t),
        r = l.length > 0,
        a = (0, Es.Ay)(t.endsAt, Es.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, p.jsx)("div", {
        children: (0, p.jsxs)("div", {
            className: iE()(n, El.f8),
            children: [
                (0, p.jsx)("div", {
                    className: El.J_,
                    children: (0, p.jsxs)("div", {
                        className: El.Bh,
                        children: [
                            (0, p.jsx)("div", {
                                className: El.xt,
                                children: (0, p.jsx)(ad.t, { size: "md", color: "white", className: El.T8 }),
                            }),
                            (0, p.jsx)("div", {
                                className: El.pt,
                                children: (0, p.jsx)(N.D, {
                                    variant: "heading-md/semibold",
                                    children: U.intl.string(U.t.DFMPWS),
                                }),
                            }),
                            (0, p.jsx)(Q.E, {
                                className: El.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : U.intl.string(U.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, p.jsx)(Er, {
                    showChargingUpState: r,
                    rowValueText: o,
                    endsAt: t.endsAt,
                    fractionalState: t.fractionalState,
                    activationDate: i,
                    hasPremiumGroup: s,
                }),
            ],
        }),
    });
};
var Eo = n(983048);
function Eu(e) {
    let t,
        {
            user: n,
            planId: i,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, f.yK)([d3.A], () => [d3.A.get(i), null != l ? d3.A.get(l.planId) : null]);
    if (null == o || af.Ay.getInterval(i).intervalType !== tJ.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, af.z4)(i),
        m = af.Ay.getDisplayName(i);
    if (a) t = U.intl.string(ga.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === I.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let n = (0, af._e)(e, r);
        t = U.intl.formatToPlainString(U.t["5CNRRA"], { date: n ?? 0 });
    } else t = U.intl.formatToPlainString(U.t.eNXZ5O, { planName: m });
    let A = g || n.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, p.jsxs)("div", {
        className: El.Bh,
        children: [
            (0, p.jsx)("div", {
                className: iE()({
                    [El.bY]: g,
                    [El.sr]: o.skuId === tJ.pe.TIER_0,
                    [El.lP]: o.skuId === tJ.pe.TIER_1,
                    [El.eb]: o.skuId === tJ.pe.TIER_2,
                }),
                children: g
                    ? (0, p.jsx)(gp._, { size: "md", color: "currentColor", className: El.Kk })
                    : (0, p.jsx)(ad.t, { size: "md", color: "currentColor", className: El.Kk }),
            }),
            (0, p.jsxs)("div", {
                className: El.pt,
                children: [
                    (0, p.jsx)(N.D, {
                        variant: "heading-md/semibold",
                        children: U.intl.format(U.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, p.jsx)(N.D, {
                            className: El.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, p.jsx)(Q.E, {
                className: El.PJ,
                variant: "text-md/semibold",
                children: U.intl.format(U.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let Ed = function (e) {
    let { className: t, entitlements: n } = e,
        i = W()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, f.yK)([dY.A], () => dY.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, f.bG)([ue.A], () => ue.A.getPremiumSubscription()),
        r = (0, f.bG)([ue.A], () => null == ue.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === tJ.gD.PREMIUM_MONTH_TIER_1),
        o = (0, f.bG)([lf.default], () => lf.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)("div", {
                className: iE()(t, El.xF, El.J_),
                children: Object.keys(i).map((e) =>
                    (0, p.jsx)(
                        Eu,
                        {
                            planId: e,
                            count: i[e].length,
                            userPremiumSubscription: l,
                            user: o,
                            unconsumedFractionalPremiumUnits: s,
                            hasPremiumGroup: u,
                        },
                        e,
                    ),
                ),
            }),
            a &&
                r &&
                (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(Q.E, {
                            className: El.eT,
                            variant: "text-md/normal",
                            children: U.intl.string(U.t["VNr4+O"]),
                        }),
                        (0, p.jsx)(Eo.i, {}),
                    ],
                }),
        ],
    });
};
var Ec = n(902782);
function Eg(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: s } = (0, ez.Ay)(),
        [l] = (0, m6.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: tw.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = i ? Ec.r : Ec.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, af.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = d3.A.get(o);
    th()(null != u, "Missing plan");
    let d = (0, uG.$g)(l.total, l.currency);
    return (
        u.interval === tJ.WT.YEAR
            ? (t = U.intl.format(U.t["jPz/39"], {
                  price: d,
                  termsUrl: I.X7G.TERMS,
                  paidURL: I.X7G.PAID_TERMS,
                  privacyUrl: I.X7G.PRIVACY,
              }))
            : u.interval === tJ.WT.MONTH &&
              (t =
                  1 === u.intervalCount
                      ? U.intl.format(U.t.m27GpI, {
                            price: d,
                            termsUrl: I.X7G.TERMS,
                            paidURL: I.X7G.PAID_TERMS,
                            privacyUrl: I.X7G.PRIVACY,
                        })
                      : U.intl.format(U.t["9xf5Vx"], {
                            price: d,
                            termsUrl: I.X7G.TERMS,
                            paidURL: I.X7G.PAID_TERMS,
                            privacyUrl: I.X7G.PRIVACY,
                            intervalCount: u.intervalCount,
                        })),
        (0, p.jsx)(Q.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function Em(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === I.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, p.jsx)(Eg, { subscription: t, withOverheadSeparator: n });
}
var EA = n(580892),
    EE = n(689255);
let Eh = { [eO.nR]: "role_subscriptions_panel", [eO.PZ]: "application_subscriptions_panel" };
function Ex() {
    return (0, p.jsx)(oV.Z, {
        className: EE.wb,
        type: oV.Z.Types.CUSTOM,
        children: (0, p.jsxs)(sb.A, {
            align: sb.A.Align.CENTER,
            children: [
                (0, p.jsx)(sn.A, { game: null, size: sn.M.SMALL, className: EE.pV }),
                (0, p.jsx)("span", { className: EE.O, children: U.intl.string(U.t["jy/hyj"]) }),
            ],
        }),
    });
}
function ES(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, mI._)(e, t));
}
function Ep() {
    let e = (0, f.bG)([dY.A], () => dY.A.getForApplication(tJ.tv), [], ES);
    return (
        T.useEffect(() => {
            (0, cA.LM)(tJ.tv);
        }, []),
        (0, p.jsx)(n7.n, {
            label: U.intl.string(U.t["2GKrvn"]),
            description: U.intl.string(U.t.Z5b2Gf),
            children:
                null != e && af.Ay.hasAccountCredit(e)
                    ? (0, p.jsx)(Ed, { className: EE.fX, entitlements: e })
                    : (0, p.jsx)(Ex, {}),
        })
    );
}
function ET() {
    return (0, p.jsx)("hr", { className: EE.hr });
}
let Ef = function () {
        var e;
        let t = (0, f.bG)([ue.A], () => ue.A.getPremiumTypeSubscription()),
            n = (0, m_.A)({ subscriptionFilter: (e) => EA.Hy.has(e.status) }),
            i = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
            s = n.length > 1,
            l = (0, f.bG)(
                [o9.A],
                () => (null != t && null != t.paymentSourceId ? o9.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, f.bG)([ue.A], () => ue.A.hasFetchedSubscriptions()),
            a = (0, f.bG)([oP.A], () => oP.A.isBusy),
            o = (0, cP.Y)(),
            u = m7.A.useField("subsection"),
            d = m7.A.useField("scrollToGameServers"),
            c = T.useRef(null);
        T.useEffect(() => {
            (0, ir._)(null != u ? Eh[u] : h.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let g = (0, f.bG)([ue.A], () => ue.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, f.bG)(
                [ue.A],
                () =>
                    Object.values(ue.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === I.rzx.GUILD)
                        .filter((e) => e.status !== I.Dmq.ENDED).length,
            ),
            A = (0, f.bG)([ue.A], () =>
                Object.values(ue.A.getSubscriptions() ?? {}).some((e) => e.type === I.rzx.GAME_SERVER),
            ),
            { servers: E } = (0, mY.f)({ enabled: A }),
            x = (0, f.yK)([ue.A], () => (0, mD.eP)(E, (e) => ue.A.getSubscriptionById(e)), [E]),
            S = (0, cD.A)({ forceFetch: !0 }),
            _ = (0, cV.ds)(),
            C = null !== t ? t.currentPeriodEnd : void 0,
            y =
                !(_ && !(S.unactivatedUnits.length > 0)) &&
                (S.fractionalState !== tJ.xc.NONE || S.unactivatedUnits.length > 0);
        return (T.useEffect(() => {
            d &&
                r &&
                o &&
                x.length > 0 &&
                (c.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                m7.A.setState({ scrollToGameServers: !1 }));
        }, [d, r, o, x.length]),
        T.useEffect(
            () => (
                (0, cR.zS)(),
                oL.hP(),
                (0, gT.CD)(),
                oL.$o(),
                function () {
                    m7.A.resetState();
                }
            ),
            [],
        ),
        tu.A.enabled)
            ? (0, p.jsx)(oh.A, {})
            : r && o
              ? u === eO.nR
                  ? (0, p.jsx)(AA, { onGoBack: () => m7.A.setState({ subsection: null }) })
                  : u === eO.PZ
                    ? (0, p.jsx)(En, { onGoBack: () => m7.A.setState({ subsection: null }) })
                    : (0, p.jsx)("div", {
                          className: EE.kL,
                          children: (0, p.jsxs)("div", {
                              className: EE.Qs,
                              children: [
                                  s ? (0, p.jsx)(EA.Sb, {}) : null,
                                  null != t
                                      ? (0, p.jsx)(EA.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, p.jsx)(EA.TC, {}),
                                  y &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, p.jsxs)("section", {
                                          children: [
                                              (0, p.jsx)(N.D, {
                                                  variant: "heading-md/bold",
                                                  className: EE.HL,
                                                  children: U.intl.string(U.t.Obre8v),
                                              }),
                                              (0, p.jsx)(Q.E, {
                                                  variant: "text-md/normal",
                                                  className: EE.JU,
                                                  children: U.intl.format(U.t["7Zi06b"], {
                                                      helpCenterLink: eC.A.getArticleURL(
                                                          I.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, p.jsx)(Ea, {
                                                  className: EE.fX,
                                                  fractionalPremiumInfo: S,
                                                  activationDate: C,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, p.jsx)(Ep, {}),
                                  m > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(ET, {}),
                                              (0, p.jsx)(mW, {
                                                  count: m,
                                                  onClickManageSubscription: () => m7.A.setState({ subsection: eO.nR }),
                                              }),
                                          ],
                                      }),
                                  g > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(ET, {}),
                                              (0, p.jsx)(Ax, {
                                                  count: g,
                                                  onClickManageSubscription: () => {
                                                      (m7.A.setState({ subsection: eO.PZ }),
                                                          td.default.track(
                                                              I.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          ));
                                                  },
                                              }),
                                          ],
                                      }),
                                  x.length > 0 &&
                                      (0, p.jsxs)("div", {
                                          ref: c,
                                          children: [(0, p.jsx)(ET, {}), (0, p.jsx)(mz, { servers: x })],
                                      }),
                                  (0, p.jsx)(ET, {}),
                                  null != t ? (0, p.jsx)(Em, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, p.jsx)("div", { className: iE()(EE.kL, EE.Lq), children: (0, p.jsx)(oC.y, {}) });
    },
    EI = (0, E.E2)(h.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [U.intl.string(U.t.trSpHX), U.intl.string(U.t["2GKrvn"])],
        Component: () => (0, p.jsx)(Ef, {}),
    }),
    E_ = (0, E.zZ)(h.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [U.intl.string(U.t.trSpHX), U.intl.string(U.t["2GKrvn"])],
        buildLayout: () => [EI],
    }),
    EN = (0, E.t_)(h.X.SUBSCRIPTIONS_PANEL, { useTitle: () => U.intl.string(U.t.trSpHX), buildLayout: () => [E_] }),
    EC = (0, E.i4)(h.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.trSpHX),
        icon: mT.L,
        usePersistentBadge: function () {
            let e = (0, mf.l)();
            return T.useMemo(
                () => ({
                    badgeType: S.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, p.jsx)(i3.E, { size: "xs", color: n6.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [EN],
    }),
    Ey = (0, E.WI)(h.X.BILLING_SECTION, {
        useTitle: () => U.intl.string(U.t.oeUm2s),
        buildLayout: () => [gS, mp, EC, cy, dt],
    });
var Eb = n(540999),
    Ev = n(306471),
    Ej = n(964355),
    EO = n(172272);
let EL = (0, E.zD)(h.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, f.bG)([rg.default], () => rg.default.isAxeEnabled),
        setValue: (e) => (0, rc.x)({ axeEnabled: e }),
    }),
    ER = (0, E.zD)(h.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, rc.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var ED = n(276086),
    EP = n(354328);
let EG = (0, E.zD)(h.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, EP.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, ED.L)("highlight_mana_components", e);
        },
    }),
    EM = (0, E.zD)(h.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, EP.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, ED.L)("highlight_mana_text_overrides", e);
        },
    }),
    EU = (0, E.zD)(h.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, EP.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, ED.L)("highlight_mana_text", e);
        },
    }),
    EV = (0, E.zD)(h.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, EP.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, ED.L)("highlight_void_toggleables", e);
        },
    }),
    Ek = (0, E.sN)(h.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, f.bG)([rg.default], () => rg.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: EO.YR,
        markers: Array.from({ length: EO.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => EO.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            EO.Or.getState().setHorizontalSpacing(e);
        },
    }),
    Ew = (0, E.zD)(h.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, rc.x)({ layoutDebuggingEnabled: e });
        },
    }),
    EF = (0, E.sN)(h.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, f.bG)([rg.default], () => rg.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: EO.YR,
        markers: Array.from({ length: EO.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => EO.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            EO.Or.getState().setVerticalSpacing(e);
        },
    }),
    EB = (0, E.zZ)(h.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [ER, Ew, Ek, EF, EG, EU, EM, EV, EL],
    });
var Ez = n(246605),
    EY = n(274184);
function EX(e) {
    let { label: t, description: n, placeholder: i, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = T.useState(s ?? ""),
        u = T.useRef(null),
        [d, c] = T.useState(0);
    function g() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        T.useEffect(() => g, []),
        (0, p.jsx)(t6.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, p.jsx)(s_.k, {
                placeholder: i,
                error: 2 === d ? "Failed to fetch override" : void 0,
                successMessage: 3 === d ? "Override applied" : void 0,
                value: a,
                onChange: function (e) {
                    if (!(e.length > 0) || /^[0-9]+$/.test(e)) {
                        if ((o(e), g(), 0 === e.length)) {
                            (c(0), l(null));
                            return;
                        }
                        u.current = setTimeout(() => {
                            (c(1),
                                r(e).then((t) => {
                                    (c(null == t ? 2 : 3), null != t && l(e));
                                }));
                        }, 500);
                    }
                },
                clearable: !0,
            }),
        })
    );
}
let EH = (0, E.E2)(h.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, f.bG)([EY.Ay], () => EY.Ay.getActionTriggeredSurveyOverride());
            return (0, p.jsx)(EX, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => Ez.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    EW = (0, E.zD)(h.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => M.HZ.useSetting(),
        setValue: (e) => {
            M.HZ.updateSetting(e);
        },
    });
var EK = n(396478),
    EZ = n(173936),
    Eq = n(103557),
    EQ = n(414079),
    E$ = n(148810),
    EJ = n(380610),
    E0 = n(986238),
    E1 = n(428524),
    E2 = n(252149),
    E3 = n(221851);
let E5 = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    E4 = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function E6(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class E8 extends T.Component {
    handleRemoveBuildOverride = () => {
        this.props.onBuildOverrideRemoved(this.props.project);
    };
    handleOverrideIdChanged = (e) => {
        this.props.onBuildOverrideUpdated(this.props.project, { id: e });
    };
    handleOverrideTypeChanged = (e) => {
        this.props.onBuildOverrideUpdated(this.props.project, { type: e, id: "" });
    };
    render() {
        let { project: e, overrideType: t, overrideId: n, disabled: i, error: s } = this.props;
        return (0, p.jsxs)(sb.A, {
            direction: sb.A.Direction.VERTICAL,
            className: iE()(E1.oS, E3.SX, E2.N, E1.nM),
            children: [
                (0, p.jsx)(EQ.A, {
                    className: iE()(E1.lL, { [E1.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, p.jsxs)(sb.A, {
                    className: E3.QB,
                    children: [
                        (0, p.jsx)(sb.A.Child, {
                            basis: "50%",
                            children: (0, p.jsx)(sg.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: E4,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: i,
                            }),
                        }),
                        (0, p.jsx)(sb.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, p.jsx)(s_.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, p.jsxs)(sb.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, p.jsx)(Q.E, {
                                className: E1.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, p.jsxs)(Q.E, {
                            variant: "text-sm/normal",
                            className: E1.AS,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, p.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
class E7 extends T.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, EJ.bD)();
        this.setState({ loading: !1, buildOverrides: e, loadedBuildOverrides: W().cloneDeep(e), errors: {} });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !W().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return W().without(E5, ...t);
    }
    handleAddBuildOverride = (e) => {
        if (null == e) return;
        let t = { ...this.state.buildOverrides, [e]: { type: "branch", id: "" } };
        this.setState({ buildOverrides: t });
    };
    handleBuildOverrideUpdated = (e, t) => {
        let { buildOverrides: n } = this.state,
            i = { ...(null != n ? n[e] : {}), ...t },
            s = { ...this.state.buildOverrides, [e]: i };
        this.setState({ buildOverrides: s });
    };
    handleBuildOverrideRemoved = (e) => {
        let t = { ...this.state.buildOverrides };
        (delete t[e], this.setState({ buildOverrides: t }));
    };
    handleDiscardChanges = () => {
        this.setState({ buildOverrides: W().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, E$.Zk)(e);
        if (200 === t.status) {
            let e = t.body;
            this.setState({
                buildOverrides: e,
                loadedBuildOverrides: W().cloneDeep(e),
                errors: {},
                didSave: !0,
                saving: !1,
            });
        } else if (400 === t.status) {
            let e = t.body;
            this.setState({ errors: e, saving: !1, didSave: !1 });
        } else this.setState({ saving: !1, didSave: !1 });
    };
    handleLinkGeneration = () => {
        let { buildOverrides: e } = this.state;
        (0, sI.openModal)((t) => (0, p.jsx)(E9, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, p.jsx)(EK.pp, {
            theme: nH.A.theme,
            className: iE()(E3.eT, E3.SX),
            children: (0, p.jsx)(EK.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : W().map(e, (e, i) =>
                  (0, p.jsx)(
                      E8,
                      {
                          project: i,
                          overrideType: e.type,
                          overrideId: e.id,
                          disabled: t,
                          error: n[i],
                          onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
                          onBuildOverrideRemoved: this.handleBuildOverrideRemoved,
                      },
                      i,
                  ),
              );
    }
    renderRefreshButton() {
        return !this.state.didSave || this.isDirty()
            ? null
            : (0, p.jsx)(v.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, p.jsx)(sE.m, {
                  text: "Generate Public Link",
                  children: (0, p.jsx)(sm.K, {
                      variant: "secondary",
                      icon: EZ.LinkIcon,
                      "aria-label": "Generate Public Link",
                      onClick: this.handleLinkGeneration,
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, p.jsxs)(p.Fragment, {
            children: [
                (0, p.jsx)(v.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, p.jsx)(v.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: E6(t ?? {}),
                    onClick: this.handleSaveChanges,
                    loading: e,
                }),
            ],
        });
    }
    render() {
        let e,
            { loading: t, saving: n, buildOverrides: i } = this.state;
        e = t
            ? (0, p.jsx)(oC.y, { className: E3.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !n && !t && this.getAvailableProjects().length > 0,
            l =
                E6(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, p.jsx)(Q.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, p.jsx)(n7.n, {
            children: (0, p.jsxs)(Z.B, {
                gap: 16,
                children: [
                    (0, p.jsx)(sg.l, {
                        selectionMode: "single",
                        label: "Add Build Override",
                        placeholder: "discord_project",
                        description: "Select a project to create a build override for.",
                        layout: "horizontal-responsive",
                        value: void 0,
                        options: this.getAvailableProjects().map((e) => ({ id: e, label: e, value: e })),
                        onSelectionChange: this.handleAddBuildOverride,
                        disabled: !s,
                    }),
                    l,
                    e,
                    (0, p.jsxs)(l4.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class E9 extends T.Component {
    state = {
        ttlSeconds: 3600,
        releaseChannel: "all",
        userIds: new Set(),
        userIdEntry: "",
        userIdEntryError: null,
        allowedVersions: [],
        allowedVersionEntry: "",
        allowedVersionEntryError: null,
        publicLink: " ",
        statusText: null,
        status: 0,
        allowLoggedOut: !1,
    };
    setUserEntryError = (e) => {
        this.setState({ userIdEntryError: e });
    };
    setStatusMessage = (() => {
        var e = this;
        return function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            e.setState({ statusText: t, status: n });
        };
    })();
    handleUserIDEntry = (e) => {
        if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError("User IDs are numbers!");
        let t = new Set(e.split(/[,\s]+/).filter(Boolean));
        this.setState({ userIdEntry: e, userIds: t });
    };
    setAllowedVersionError = (e) => {
        this.setState({ allowedVersionEntryError: e });
    };
    handleAllowedVersionEntry = (e) => {
        this.setState({ allowedVersionEntry: e });
    };
    handleAllowedVersionEnter = (e) => {
        e.key === sB.dh.ENTER && this.handleAddAllowedVersion();
    };
    handleAddAllowedVersion = () => {
        let { allowedVersions: e, allowedVersionEntry: t } = this.state;
        return 0 === (t = t.trim()).length
            ? this.setAllowedVersionError("Enter a valid version number!")
            : e.indexOf(t) >= 0
              ? this.setAllowedVersionError("You already added that version!")
              : void this.setState({
                    allowedVersions: [...e, t],
                    allowedVersionEntry: "",
                    allowedVersionEntryError: "",
                });
    };
    handleRemoveAllowedVersion = (e) => {
        let { allowedVersions: t } = this.state;
        ((t = t.filter((t) => t !== e)), this.setState({ allowedVersions: t }));
    };
    handleAllowLoggedOut = (e) => {
        this.setState({ allowLoggedOut: e });
    };
    handleExpirationChange = (e) => {
        this.setState({ ttlSeconds: e });
    };
    handleReleaseChannelChange = (e) => {
        this.setState({ releaseChannel: e });
    };
    handleExperiments = (e) => {
        if (0 === e.trim().length) return void this.setState({ experimentsError: void 0 });
        try {
            let t = JSON.parse(e);
            for (let e in t) {
                if (null == e.match(/^[0-9]{4}\-[0-9]{2}(-|_)[a-z0-9_-]+$/))
                    return void this.setState({ experimentsError: `${e} is an invalid experiment name` });
                if ("number" != typeof t[e])
                    return void this.setState({ experimentsError: `${e} has an invalid bucket override` });
            }
        } catch (e) {
            this.setState({ experimentsError: `Unable to parse experiments ${e.message}` });
            return;
        }
        this.setState({ experiments: e, experimentsError: void 0 });
    };
    generatePayload = () => ({
        overrides: this.props.buildOverrides,
        meta: {
            release_channel: "all" === this.state.releaseChannel ? null : this.state.releaseChannel,
            ttl_seconds: this.state.ttlSeconds,
            user_ids: Array.from(this.state.userIds),
            allowed_versions: this.isMobile() ? this.state.allowedVersions : void 0,
            allow_logged_out: this.state.allowLoggedOut,
            experiments: this.isMobile() || null == this.state.experiments ? null : JSON.parse(this.state.experiments),
        },
    });
    handleGenerateLink = async () => {
        if (this.isMobile() && 0 === this.state.allowedVersions.length)
            return void this.setAllowedVersionError("You must add at least one allowed version for iOS");
        this.setStatusMessage(null);
        let e = this.generatePayload(),
            t = await (0, E$.SB)(e);
        !1 !== t.error
            ? this.setStatusMessage(JSON.stringify(t.error), 0)
            : (this.setState({ publicLink: t.url.toString() }),
              0 === e.meta.user_ids.length &&
                  this.setStatusMessage(
                      "Warning! No users added to the whitelist! This link could be used by anyone to override their build.",
                      1,
                  ));
    };
    isMobile() {
        return E6(this.props.buildOverrides ?? {});
    }
    renderSettingsForm() {
        let {
                ttlSeconds: e,
                releaseChannel: t,
                userIdEntry: n,
                userIdEntryError: i,
                allowedVersions: s,
                allowedVersionEntry: l,
                allowedVersionEntryError: r,
                allowLoggedOut: a,
                experiments: o,
                experimentsError: u,
            } = this.state,
            d = E0.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, p.jsxs)(Z.B, {
            gap: 20,
            children: [
                (0, p.jsx)(sg.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: E0.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, p.jsx)(sg.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: E0.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, p.jsxs)(Z.B, {
                          gap: 20,
                          children: [
                              (0, p.jsx)(s_.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: iq.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, p.jsx)(sg.l, {
                                  selectionMode: "single",
                                  label: "Remove allowed app version",
                                  value: void 0,
                                  options: c,
                                  onSelectionChange: this.handleRemoveAllowedVersion,
                                  disabled: 0 === s.length,
                              }),
                          ],
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, p.jsx)(Eq.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                this.isMobile()
                    ? null
                    : (0, p.jsx)(Eq.f, {
                          label: "Client Experiment Override",
                          description:
                              "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                          value: o,
                          error: u,
                          onChange: this.handleExperiments,
                          placeholder: '{"2022-01_threads":1}',
                      }),
                (0, p.jsx)(t8.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, p.jsx)("div", {});
        let n = "info";
        switch (t) {
            case 0:
                n = "critical";
                break;
            case 1:
                n = "warning";
        }
        return (0, p.jsx)(i$.w, { type: n, message: e, role: "critical" === n ? "alert" : "status" });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, p.jsx)(sf.a, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, p.jsx)(cs.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let he = (0, E.E2)(h.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: E7 });
var ht = n(256311),
    hn = n(883600);
let hi = (0, E.E2)(h.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, f.bG)([hn.A], () => hn.A.overrideId());
        async function t(e) {
            let t = hn.A.getChangelog(e, "en-US");
            return null != t ? t : ((await ht.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, p.jsx)(EX, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => ht.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var hs = n(506774);
let hl = new Date("2018-01-01"),
    hr = (0, E.Tf)(h.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => M.pK.useSetting() === oM.default.fromTimestamp(hl.getTime()),
        onClick: () => (hs.w.set("lastChangeLogDate", hl), M.pK.updateSetting(oM.default.fromTimestamp(hl.getTime()))),
    }),
    ha = (0, E.zD)(h.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, f.bG)([rg.default], () => rg.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, f.bG)(
                [rg.default],
                () => rg.default.disableAppCollectionsCache || rg.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, rc.x)({ disableAppCollectionsCache: e }),
    }),
    ho = (0, E.zD)(h.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.isForcedCanary),
        setValue: (e) => {
            (0, rc.x)({ canary: e });
        },
    }),
    hu = (0, E.zD)(h.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.sourceMapsEnabled),
        setValue: (e) => (0, rc.x)({ sourceMapsEnabled: e }),
    }),
    hd = (0, E.zD)(h.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, rc.x)({ onlyShowPreviewAppCollections: e }),
    });
var hc = n(10094),
    hg = n(683760);
let hm = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: tJ.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: tJ.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: tJ.PremiumTypes.TIER_2 },
    ],
    hA = (0, E.Hn)(h.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => hm,
        clearable: !0,
        useValue: () =>
            (0, f.bG)([hg.A], () => {
                let e = hg.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, hc.O)(null, void 0)
                : null === e
                  ? (0, hc.O)(void 0, void 0)
                  : (0, hc.O)(0 === e ? null : e, void 0);
        },
    });
var hE = n(374042);
let hh = (0, E.E2)(h.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, f.bG)([EY.Ay], () => EY.Ay.getSurveyOverride());
            return (0, p.jsx)(EX, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => Ez.xr(e),
                fetchOverride: (e) => (0, hE.B)(e, !0) ?? null,
            });
        },
    }),
    hx = (0, E.zZ)(h.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [hA, hh, EH, hi, hr, ho, EW, hd, ha, hu, he],
        useInlineNotice: () => ({
            type: S.lT.INLINE_NOTICE,
            noticeType: "info",
            role: "none",
            text: U.intl.format(U.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    hS = (0, E.zD)(h.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, rc.x)({ logAnalyticsEvents: e }),
    }),
    hp = (0, E.zD)(h.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.isLoggingGatewayEvents),
        setValue: (e) => (0, rc.x)({ logGatewayEvents: e }),
    }),
    hT = (0, E.zD)(h.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.preventPopoutClose),
        setValue: (e) => (0, rc.x)({ preventPopoutClose: e }),
    }),
    hf = (0, E.zD)(h.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.logKeyboardMismatches),
        setValue: (e) => (0, rc.x)({ logKeyboardMismatches: e }),
    }),
    hI = (0, E.zD)(h.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.isLoggingOverlayEvents),
        setValue: (e) => (0, rc.x)({ logOverlayEvents: e }),
    }),
    h_ = (0, E.zD)(h.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.isLoggingQuestEvents),
        setValue: (e) => (0, rc.x)({ logQuestEvents: e }),
    }),
    hN = (0, E.zD)(h.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.isTracingRequests),
        setValue: (e) => (0, rc.x)({ trace: e }),
    }),
    hC = (0, E.zZ)(h.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [hp, hI, hN, hS, hf, hT, h_] }),
    hy = (0, E.t_)(h.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [hx, hC, EB],
    }),
    hb = (0, E.i4)(h.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: Ev.V,
        useMenu: function () {
            let {
                    layoutDebuggingEnabled: e,
                    isDeveloper: t,
                    isLoggingGatewayEvents: n,
                    isLoggingOverlayEvents: i,
                    isLoggingAnalyticsEvents: s,
                    isTracingRequests: l,
                    isForcedCanary: r,
                    isAxeEnabled: a,
                    preventPopoutClose: o,
                    onlyShowPreviewAppCollections: u,
                    disableAppCollectionsCache: d,
                    isStaff: c,
                } = (0, f.cf)([rg.default, Eb.A, lf.default], () => ({
                    layoutDebuggingEnabled: rg.default.layoutDebuggingEnabled,
                    isDeveloper: Eb.A.isDeveloper,
                    isLoggingGatewayEvents: rg.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: rg.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: rg.default.isLoggingAnalyticsEvents,
                    isTracingRequests: rg.default.isTracingRequests,
                    isForcedCanary: rg.default.isForcedCanary,
                    isSourceMapsEnabled: rg.default.sourceMapsEnabled,
                    isAxeEnabled: rg.default.isAxeEnabled,
                    preventPopoutClose: rg.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: rg.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: rg.default.disableAppCollectionsCache,
                    isStaff: lf.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: g, verticalSpacing: m } = (0, EO.Or)(),
                { setHorizontalSpacing: A, setVerticalSpacing: E } = EO.Or.getState(),
                x = M.HZ.useSetting();
            return t
                ? [
                      (0, p.jsxs)(
                          tn.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, ng.openUserSettings)(h.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "always-deliver",
                                          label: "Always Deliver Ads",
                                          checked: x,
                                          action: () => {
                                              M.HZ.updateSetting(!x);
                                          },
                                      },
                                      "always-deliver",
                                  ),
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, rc.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: u,
                                          action: () => {
                                              (0, rc.x)({ onlyShowPreviewAppCollections: !u });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: d,
                                          action: () => {
                                              (0, rc.x)({ disableAppCollectionsCache: !d });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, p.jsxs)(
                          tn.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, ng.openUserSettings)(h.X.LOGGING);
                              },
                              children: [
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: n,
                                          action: () => {
                                              (0, rc.x)({ logGatewayEvents: !n });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: i,
                                          action: () => {
                                              (0, rc.x)({ logOverlayEvents: !i });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: s,
                                          action: () => {
                                              (0, rc.x)({ logAnalyticsEvents: !s });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: l,
                                          action: () => {
                                              (0, rc.x)({ trace: !l });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, rc.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, p.jsxs)(
                          tn.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, ng.openUserSettings)(h.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, rc.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, rc.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(
                                                  tn.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, p.jsx)(Ej.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: g,
                                                              minValue: 0,
                                                              maxValue: EO.YR,
                                                              onChange: (e) => A(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, p.jsx)(
                                                  tn.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, p.jsx)(Ej.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: EO.YR,
                                                              onChange: (e) => E(e),
                                                              "aria-label": "Vertical Spacing",
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                          }),
                                                  },
                                                  "vertical-spacing",
                                              ),
                                          ],
                                      }),
                              ],
                          },
                          "design-tools",
                      ),
                      c
                          ? (0, p.jsx)(
                                tn.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => lT() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [hy],
    });
var hv = n(127062),
    hj = n(25044),
    hO = n(80703),
    hL = n(123292),
    hR = n(683438),
    hD = n(890856),
    hP = n(100392),
    hG = n(102609),
    hM = n(271478),
    hU = n(386976),
    hV = n(257433),
    hk = n(32523),
    hw = n(96919),
    hF = n(688151),
    hB = n(863763);
function hz(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: s } = e,
        [l, r] = T.useState(s),
        [a, o] = T.useState(!1),
        u = T.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, f.bG)([d1.default], () => d1.default.getId()),
        c = (0, f.bG)([d1.default], () => {
            let e = d1.default.getInstallationForTracking();
            return null == e ? null : (0, hO.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, hV.iN)(t, g),
        A = (0, hV.Fm)(t, g),
        E = (0, f.yK)([rp.A], () =>
            W()
                .sortBy(rp.A.getRecentExposures(hF.Vh.USER, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        h = T.useCallback(
            (e) => {
                (0, uj.C)((0, hP.yA)(n), () => {
                    ((0, lE.P0)({ text: "Copied experiment link", variant: "success" }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        x = (0, p.jsx)(hD.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, p.jsxs)(Q.E, {
                variant: "text-md/medium",
                className: hB.DD,
                children: [
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsxs)(Z.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    uj.p5 &&
                                        (0, p.jsx)(n9.D, {
                                            onClick: h,
                                            children: (0, p.jsx)(EZ.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, p.jsx)(Q.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, p.jsx)("span", {
                        className: hB.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, p.jsx)("div", { className: hB.Os, children: x });
    let S = "";
    return (
        (S =
            t.system === hG.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? hF.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, p.jsxs)("div", {
            className: hB.Os,
            children: [
                x,
                (0, p.jsx)("div", {
                    children: (0, p.jsx)(hM.g, {
                        label: t.system === hG.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: S,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, p.jsx)("div", {
                    className: hB.h_,
                    children:
                        null == A
                            ? (0, p.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                a
                    ? (0, p.jsxs)("div", {
                          children: [
                              (0, p.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hB.id,
                                  children: "Server Descriptor",
                              }),
                              (0, p.jsx)(Q.E, {
                                  variant: "code",
                                  className: hB.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, p.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hB.id,
                                  children: "Override Descriptor",
                              }),
                              (0, p.jsx)(Q.E, {
                                  variant: "code",
                                  className: hB.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, p.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hB.id,
                                  children: "Recent Exposures",
                              }),
                              (0, p.jsx)(Q.E, {
                                  variant: "code",
                                  className: hB.AS,
                                  children: 0 === E.length ? "None" : E.join("\n"),
                              }),
                          ],
                      })
                    : (0, p.jsx)("div", {
                          className: hB.id,
                          children: (0, p.jsx)(hL.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, p.jsx)(su.c, { className: hB.yF }),
            ],
        })
    );
}
function hY(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [s, l] = T.useState(null != i),
        [r, a] = T.useState(!1),
        o = T.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, f.bG)([rp.A], () => rp.A.getLoadedGuildExperiment(n)),
        d = (0, f.bG)([rp.A, sL.A, i0.A], () => {
            if (t.system === hG.l5.LEGACY) return null == rp.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !sL.A.getGuildsArray().some((t) => null != i0.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, f.yK)([rp.A], () =>
            W()
                .sortBy(rp.A.getRecentExposures(hF.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, f.yK)([d1.default, sL.A, rp.A, i0.A], () => {
            let e = t.system === hG.l5.LEGACY,
                i = t.name,
                s = d1.default.getId(),
                l = W().sortBy(sL.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of l) {
                let l = e
                    ? (rp.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? hF.RE.NOT_ELIGIBLE)
                    : (i0.A.getEvaluationAndAssignment("guild", t.id, i, s)[1]?.variantId ?? hF.RE.NOT_ELIGIBLE);
                (l in r || (r[l] = 0), r[l]++, a.push(`${t.name}: ${l}`));
            }
            let o = W()(r)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${r[e]} guilds in bucket ${e}`)
                .join(", ");
            return [a.join("\n"), o];
        }),
        A = t.system !== hG.l5.LEGACY,
        E = (0, f.yK)([sL.A], () => W().sortBy(sL.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [h, x] = T.useState(() => sR.A.getGuildId() ?? sR.A.getLastSelectedGuildId()),
        S = E.find((e) => e.id === h)?.name,
        I = (0, f.bG)(
            [i0.A],
            () => {
                if (A && null != h) return i0.A.getServerAssignment("guild", h, t.name);
            },
            [A, h, t.name],
        ),
        _ = (0, f.bG)([i0.A, d1.default], () => {
            if (!A) return;
            let e = d1.default.getId();
            return i0.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != _ && (_.isOverride || _.useAsEligibility),
        C = (0, p.jsx)(n9.D, {
            onClick: o,
            children: (0, p.jsxs)(Q.E, {
                variant: "text-md/medium",
                className: hB.DD,
                children: [
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)("span", { children: t.title }),
                            (0, p.jsx)(Q.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, p.jsx)("span", { className: hB.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, p.jsxs)("div", {
              className: hB.Os,
              children: [
                  C,
                  (0, p.jsx)(hM.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  A &&
                      E.length > 0 &&
                      (0, p.jsx)("div", {
                          className: hB.h_,
                          children: (0, p.jsx)(sg.l, {
                              label: "Inspect guild",
                              description:
                                  "Server assignment and eligibility shown below are for this guild. The override above still applies to all guilds.",
                              value: h ?? void 0,
                              options: E.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                              onSelectionChange: (e) => x(e),
                              selectionMode: "single",
                              fullWidth: !0,
                          }),
                      }),
                  (0, p.jsx)("div", {
                      className: hB.h_,
                      children: d
                          ? (0, p.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === hG.l5.LEGACY
                                        ? 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        : "Warning: Server did not send an assignment for this experiment. Make sure the experiment is configured to run on the APP surface in the admin UI.",
                            })
                          : null,
                  }),
                  A &&
                      (0, p.jsxs)("div", {
                          children: [
                              (0, p.jsxs)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hB.id,
                                  children: ["Server Descriptor", null != S ? ` (${S})` : ""],
                              }),
                              (0, p.jsx)(Q.E, {
                                  variant: "code",
                                  className: hB.AS,
                                  children: null == I ? "None" : JSON.stringify(I, void 0, 2),
                              }),
                              (0, p.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hB.id,
                                  children: "Client Eligibility",
                              }),
                              (0, p.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, p.jsx)(Q.E, {
                                  variant: "code",
                                  className: hB.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsx)(Q.E, {
                                    variant: "text-lg/medium",
                                    className: hB.id,
                                    children: "Guild Assignments",
                                }),
                                (0, p.jsx)(Q.E, { variant: "code", className: hB.AS, children: g }),
                                t.system === hG.l5.LEGACY &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)(Q.E, {
                                                variant: "text-lg/medium",
                                                className: hB.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, p.jsx)(Q.E, {
                                                variant: "code",
                                                className: hB.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, p.jsx)(Q.E, {
                                    variant: "text-lg/medium",
                                    className: hB.id,
                                    children: "Override Descriptor",
                                }),
                                (0, p.jsx)(Q.E, {
                                    variant: "code",
                                    className: hB.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, p.jsx)(Q.E, {
                                    variant: "text-lg/medium",
                                    className: hB.id,
                                    children: "Recent Exposures",
                                }),
                                (0, p.jsx)(Q.E, {
                                    variant: "code",
                                    className: hB.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, p.jsx)("div", {
                            className: hB.id,
                            children: (0, p.jsx)(hL.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, p.jsx)(su.c, { className: hB.yF }),
              ],
          })
        : (0, p.jsx)("div", { className: hB.Os, children: C });
}
let hX = (0, E.E2)(h.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, hU.op)(),
                { experiments: n, overridesInfo: i } = (0, hk.hI)(),
                s = T.useMemo(() => ({ ...n, ...e }), [n, e]),
                l = T.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, f.bG)([d1.default], () => {
                    let e = d1.default.getInstallationForTracking();
                    return null == e ? null : (0, hO.v)(e);
                }),
                [a, o] = T.useState(""),
                u = (0, hw.oC)((0, hw.R3)((0, hw.Fm)(s), l), a);
            return (0, p.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, p.jsxs)(Z.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, p.jsxs)(Q.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                uj.p5 &&
                                    (0, p.jsx)(hL.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uj.C)(r, () => {
                                                (0, lE.P0)({ text: "Installation ID copied!", variant: "success" });
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, p.jsx)(hR.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? hY : hz;
                              return (0, p.jsx)(
                                  t,
                                  {
                                      experiment: e.experiment,
                                      experimentId: e.id,
                                      overrideInfo: l[e.id],
                                      defaultOpen: null != l[e.id],
                                  },
                                  e.id,
                              );
                          })
                        : (0, p.jsx)("div", {
                              className: hB.p$,
                              children: (0, p.jsx)(N.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    hH = (0, E.zZ)(h.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [hX] }),
    hW = (0, E.t_)(h.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [hH] }),
    hK = (0, E.i4)(h.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: hv.c,
        useMenu: hj.A,
        buildLayout: () => [hW],
    }),
    hZ = (0, E.WI)(h.X.DEVELOPER_SECTION, {
        useTitle: () => U.intl.string(U.t["+gHUHA"]),
        usePredicate: () => Eb.A.isDeveloper,
        buildLayout: () => [hK, hb],
    });
var hq = n(682348),
    hQ = n(871633),
    h$ = n(751075),
    hJ = n(843402);
let h0 = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function h1() {
    let e = (0, f.yK)([i9.Ay], () => i9.Ay.getGamesSeen(!1)),
        t = (0, f.bG)([i9.Ay], () => h0(...i9.Ay.getOverrides()));
    T.useEffect(() => {
        if (e6.isPlatformEmbedded) return ((0, hJ.a2)(), hJ.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = T.useMemo(
        () =>
            e.reduce((e, t) => ((0, hQ.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function h2(e) {
    let { gameHistory: t } = h1();
    return {
        namedGames: T.useMemo(
            () =>
                t
                    .values()
                    .filter((e) => null != e.id && null != e.name)
                    .take(e)
                    .toArray(),
            [t, e],
        ),
        totalCount: t.length,
    };
}
function h3(e) {
    let { namedGames: t, totalCount: n } = h2(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function h5() {
    let { namedGames: e } = h2(2),
        [t, n] = T.useMemo(() => e.map((e) => e.id), [e]);
    T.useEffect(() => {
        AP.Ay.fetchApplications([t, n].filter(ig.Vq));
    }, [t, n]);
    let [i, s] = (0, f.yK)([i6.A], () => [t, n].map(i6.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, p.jsx)(sn.A, { game: i, size: sn.M.MEDIUM_LARGE }), shape: h$.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, p.jsx)(sn.A, { game: s, size: sn.M.MEDIUM }), shape: h$.e0.ROUNDED } : null,
          };
}
let h4 = (0, E.AK)(h.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = h3(2);
            return U.intl.format(U.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = h5();
            return { type: S.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: h.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, f.bG)([i9.Ay], () => i9.Ay.getGamesSeen(!1).some((e) => !(0, hQ.n1)(e))) && (0, nf.xl)(),
    }),
    h6 = (0, E.gN)(h.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [h4] });
var h8 = n(311059),
    h7 = n(406535),
    h9 = n(968987);
let xe = (0, E.zD)(h.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => U.intl.string(h9.default.A0FVCV),
        useSubtitle: () => U.intl.string(h9.default.vHX6RG),
        useValue: M.hV.useSetting,
        setValue: function (e) {
            (M.hV.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h7.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    xt = (0, E.zD)(h.X.ACTIVITY_PRIVACY_NOTIFY_SERVER_MEMBERS_ON_GO_LIVE_SETTING, {
        useTitle: () => U.intl.string(h9.default["9l5u6A"]),
        useSubtitle: () => U.intl.string(h9.default.QcmgBF),
        useValue: M.pR.useSetting,
        setValue: function (e) {
            (M.pR.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h7.Y.ACCOUNT,
                    notify_server_members_on_go_live: e,
                }));
        },
    }),
    xn = (0, E.zZ)(h.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => U.intl.string(U.t.WmsPis),
        useSearchTerms: () => [U.intl.string(U.t["8ka8li"])],
        buildLayout: () => [h8._, xe, xt, h6],
    }),
    xi = (0, E.AK)(h.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.J0SFL2),
        destinationKey: h.X.DATA_AND_PRIVACY_PANEL,
    }),
    xs = (0, E.gN)(h.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [xi] });
var xl = n(365258);
let xr = (0, E.Qx)(h.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => U.intl.string(h9.default["/LHVbt"]),
    useSubtitle: () => U.intl.string(U.t.L5IdzV),
    useOptions: function () {
        return [
            { value: eQ.Qd.ACTIVITY_STATUS_OFF, name: U.intl.string(h9.default.m3oL7Q) },
            { value: eQ.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: U.intl.string(h9.default["5+lnTA"]) },
            { value: eQ.Qd.ACTIVITY_STATUS_ON, name: U.intl.string(h9.default["egr+VZ"]) },
        ];
    },
    useValue: M._Z.useSetting,
    setValue: function (e) {
        let t = M._Z.getSetting();
        M._Z.updateSetting(e);
        let i = (0, xl.g8)(t, e);
        if (null == i) return;
        let s = (0, xl.Xc)(e);
        (0, sI.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("341996")]).then(
                n.bind(n, 32167),
            );
            return (t) =>
                (0, p.jsx)(e, { ...t, direction: i.direction, affectedGuildIds: i.affectedGuildIds, settingName: s });
        });
    },
});
var xa = n(498642),
    xo = n(573435),
    xu = n(260509),
    xd = n(771810);
function xc(e) {
    let { guild: t, size: n } = e,
        i = (0, xu.Iv)(t, n, !1, !0),
        s = (0, xu.Rb)(t);
    return null != i
        ? (0, p.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, p.jsx)("div", {
              className: xd.F,
              children: (0, p.jsx)(Q.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: s,
              }),
          });
}
function xg(e) {
    let { guild: t, size: n } = e;
    return (0, p.jsx)(xo.Ay, {
        className: xd.z,
        mask: xo.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, p.jsx)(xc, { guild: t, size: n }),
    });
}
var xm =
    (((c = {}).SERVER_ORDER = "server-order"),
    (c.RECENTLY_JOINED = "recently-joined"),
    (c.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (c.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    c);
let xA = {
    "recently-joined": (e) =>
        e
            .concat()
            .sort((e, t) =>
                null == e.joinedAt
                    ? -1
                    : null == t.joinedAt
                      ? 1
                      : e.joinedAt === t.joinedAt
                        ? 0
                        : new Date(t.joinedAt).getTime() - new Date(e.joinedAt).getTime(),
            ),
    "activity-sharing-on": (e, t) =>
        e.concat().sort((e, n) => {
            let i = t.includes(e.id),
                s = t.includes(n.id);
            return !i && s ? -1 : i && !s ? 1 : 0;
        }),
    "activity-sharing-off": (e, t) =>
        e.concat().sort((e, n) => {
            let i = t.includes(e.id),
                s = t.includes(n.id);
            return i && !s ? -1 : !i && s ? 1 : 0;
        }),
    "server-order": (e) => e,
};
var xE = n(618118);
function xh(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        s = (0, f.bG)([xa.A], () => xa.A.getMemberCount(t.id));
    return (0, p.jsxs)(Z.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, p.jsx)("div", { className: xE.FO, children: (0, p.jsx)(xg, { guild: t, size: 48 }) }),
            (0, p.jsx)("div", {
                className: xE.QH,
                children: (0, p.jsx)(t8.d, {
                    label: t.name,
                    description: U.intl.format(U.t.zRl6XR, { count: s ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let xx = function (e) {
    let { notice: t } = e,
        {
            guilds: n,
            searchQuery: i,
            setSearchQuery: s,
            sortOrder: l,
            setSortOrder: r,
            hasActivityRestrictedGuilds: a,
            onToggleAllActivityRestrictedGuilds: o,
            onToggleActivityRestrictedGuild: u,
            isActivityRestricted: d,
            numActivityRestrictedGuilds: c,
            numTotalGuilds: g,
        } = (function () {
            let [e, t] = (0, T.useState)(""),
                [n, i] = (0, T.useState)("server-order"),
                s = (0, f.bG)([gC.Ay], () => gC.Ay.getFlattenedGuildIds()),
                l = (0, f.bG)([sL.A], () => sL.A.getGuilds()),
                r = s.map((e) => l[e]).filter(Boolean),
                a = M.Pw.useSetting(),
                [o, u] = (0, T.useState)(a);
            async function d(e) {
                u(e);
                try {
                    await M.Pw.updateSetting(e);
                } catch (e) {
                    u(a);
                }
            }
            (0, T.useEffect)(() => {
                u(a);
            }, [a]);
            let c = 0 !== o.length,
                [g, m] = (0, T.useState)(() => xA[n](r, a)),
                A = g.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(xA[e](r, a)), i(e));
                },
                setSearchQuery: t,
                onToggleActivityRestrictedGuild: function (e) {
                    let { checked: t, guildId: n } = e,
                        i = new Set(o);
                    (t ? i.delete(n) : i.add(n), d([...i]));
                },
                isActivityRestricted: function (e) {
                    return o.includes(e);
                },
                hasActivityRestrictedGuilds: c,
                onToggleAllActivityRestrictedGuilds: function () {
                    c ? d([]) : d(s);
                },
                numTotalGuilds: s.length,
                numActivityRestrictedGuilds: o.length,
            };
        })(),
        m = (0, T.useId)(),
        A = (0, T.useRef)(null),
        E = (0, T.useMemo)(
            () => [
                { id: xm.SERVER_ORDER, label: U.intl.string(U.t.STMPJ2), value: xm.SERVER_ORDER },
                { id: xm.RECENTLY_JOINED, label: U.intl.string(U.t.CbaapP), value: xm.RECENTLY_JOINED },
                { id: xm.ACTIVITY_SHARING_ON, label: U.intl.string(h9.default.ZI51JZ), value: xm.ACTIVITY_SHARING_ON },
                {
                    id: xm.ACTIVITY_SHARING_OFF,
                    label: U.intl.string(h9.default["+kxafn"]),
                    value: xm.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        h = E.find((e) => e.value === l)?.label ?? "";
    return (0, p.jsxs)("div", {
        className: xE.iE,
        children: [
            t,
            (0, p.jsxs)("div", {
                className: xE.N1,
                children: [
                    (0, p.jsx)(hR.I, {
                        query: i,
                        onChange: s,
                        onClear: function () {
                            (td.default.track(I.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                                s(""));
                        },
                        onFocus: () =>
                            td.default.track(I.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        onBlur: () =>
                            td.default.track(I.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        placeholder: U.intl.string(U.t["H+nRYw"]),
                        "aria-label": U.intl.string(U.t["5h0QOP"]),
                        inputProps: { "aria-controls": m, "aria-expanded": !0 },
                    }),
                    n.length > 0 &&
                        (0, p.jsxs)("div", {
                            className: xE.gO,
                            children: [
                                (0, p.jsx)(aS.Y, {
                                    targetElementRef: A,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, p.jsx)(gD.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": U.intl.string(U.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, p.jsx)(tn.rX, {
                                                children: E.map((e) => {
                                                    let { id: t, label: n, value: i } = e;
                                                    return (0, p.jsx)(
                                                        tn.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: n,
                                                            checked: l === i,
                                                            action: () => {
                                                                (td.default.track(
                                                                    I.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
                                                                    {
                                                                        interaction: "sort_order_changed",
                                                                        sort_order: i,
                                                                        activity_restricted_guild_count: c,
                                                                        total_guild_count: g,
                                                                    },
                                                                ),
                                                                    r(i));
                                                            },
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                        });
                                    },
                                    children: (e) =>
                                        (0, p.jsxs)(n9.D, {
                                            ...e,
                                            innerRef: A,
                                            className: xE.Ku,
                                            children: [
                                                (0, p.jsx)(Q.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: h,
                                                }),
                                                (0, p.jsx)(g8.a, { size: "xs", color: n6.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, p.jsx)(hL.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? U.intl.string(U.t["7lxcLO"]) : U.intl.string(U.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, p.jsx)(sh.A, {
                "aria-live": "polite",
                role: "region",
                children: U.intl.format(h9.default.EvzDff, { count: n.length }),
            }),
            (0, p.jsxs)("ul", {
                className: xE.X1,
                id: m,
                "aria-label": U.intl.string(U.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, p.jsx)("div", {
                            className: xE.pb,
                            children: (0, p.jsx)(Q.E, {
                                className: xE.R$,
                                variant: "text-lg/medium",
                                children: U.intl.string(U.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, p.jsx)(
                            xh,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var xS = n(68322);
let xp = (0, E.E2)(h.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [U.intl.string(h9.default["/LHVbt"])],
        Component: function () {
            let e = M.tz.useSetting()
                ? null
                : (0, p.jsx)("div", {
                      className: xS.l,
                      children: (0, p.jsx)(i$.w, {
                          type: "warning",
                          message: U.intl.string(h9.default["xxI0/W"]),
                          role: "status",
                      }),
                  });
            return (0, p.jsx)(xx, { notice: e });
        },
    }),
    xT = (0, E.zZ)(h.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => U.intl.string(U.t.bwqjL9),
        buildLayout: () => [xr, xp, xs],
    }),
    xf = (0, E.zD)(h.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => U.intl.string(h9.default.khuuzv),
        useSubtitle: () => U.intl.string(h9.default["8EWsJ8"]),
        useValue: () => M.e.useSetting(),
        setValue: (e) => M.e.updateSetting(e),
    }),
    xI = (0, E.E2)(h.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, p.jsx)(Q.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: U.intl.format(U.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, p.jsx)(
                            Q.E,
                            { tag: "span", variant: "text-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
    }),
    x_ = (0, E.zD)(h.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => U.intl.string(h9.default.Uz5Ipi),
        useSubtitle: () => U.intl.string(h9.default.CZI2Gb),
        useValue: () => M.UM.useSetting(),
        setValue: (e) => M.UM.updateSetting(e),
    }),
    xN = (0, E.zZ)(h.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => U.intl.string(h9.default["89YBr5"]),
        useSubtitle: () => U.intl.string(U.t.uGDpgH),
        buildLayout: () => [xf, x_, xI],
        useSearchTerms: () => [U.intl.string(U.t.VOszPA)],
    }),
    xC = (0, E.t_)(h.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => U.intl.string(U.t.Cq98yL),
        buildLayout: () => [xn, xT, xN],
    }),
    xy = (0, E.i4)(h.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.Cq98yL),
        icon: hq._,
        buildLayout: () => [xC],
    });
var xb = n(712440),
    xv = n(370997);
let xj = (0, E.E2)(h.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: xv.Ay,
    useSearchTerms: () => [U.intl.string(U.t["f6kk+r"])],
});
var xO = n(478016),
    xL = n(77468),
    xR = n(289498),
    xD = n(573648),
    xP = n(874490),
    xG = n(370480),
    xM = n(968309);
let xU = new Set([I.fg2.XBOX, I.fg2.PLAYSTATION, I.fg2.PLAYSTATION_STAGING, I.fg2.CRUNCHYROLL]);
var xV = n(169869),
    xk = n(814925),
    xw = n(733110),
    xF = n(479785),
    xB = n(757036),
    xz = n(555837),
    xY = n(43990),
    xX = n(241524),
    xH = n(51965),
    xW = n(377368),
    xK = n(631368),
    xZ = n(212739),
    xq = n(30370),
    xQ = n(182732),
    x$ = n(428685),
    xJ = n(660594);
function x0() {
    let e,
        t,
        i,
        s,
        { variant: l, showFooter: r } =
            ((e = (0, xK.$)()),
            (t = (0, xZ.O)()),
            (s = null != (i = (0, f.bG)([xq.A], () => xq.A.getAccount(null, I.fg2.XBOX))) && !i.revoked),
            e === xK.C.NONE || t
                ? { variant: xK.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === xK.C.NO_ACCESS && !s }),
        { analyticsLocations: a } = (0, ez.Ay)(tw.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, xW.yW)(a),
        u = (0, xX.A)("(max-width: 485px)");
    if (l === xK.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (l) {
        case xK.C.HAS_ACCESS:
        case xK.C.BLOCK_CLAIM:
            ((c = U.intl.string(x$.default["7PdsMK"])),
                (g = (0, p.jsx)(xH.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: U.intl.string(x$.default.CubeLC),
                    onClick: () => {
                        (0, sI.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("878140"), n.e("813088")]).then(
                                n.bind(n, 347171),
                            );
                            return (t) => (0, p.jsx)(e, { ...t, sourceAnalyticsLocations: a });
                        });
                    },
                })));
            break;
        case xK.C.NO_ACCESS:
            ((c = U.intl.string(x$.default.NwkRTZ)),
                (g = (0, p.jsx)(tX.A, {
                    defaultTextOverride: U.intl.string(x$.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    subscriptionTier: tJ.pe.TIER_2,
                })));
            break;
        default:
            (0, ig.xb)(l);
    }
    return (0, p.jsxs)(ez.f5, {
        value: a,
        children: [
            (0, p.jsxs)("div", {
                className: xJ.bV,
                children: [
                    (0, p.jsx)(N.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: U.intl.string(U.t.NG1e6l),
                    }),
                    (0, p.jsx)(ad.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, p.jsx)(xY.N, {
                theme: I.NJ8.DARK,
                children: (e) =>
                    (0, p.jsx)("div", {
                        className: e,
                        children: (0, p.jsxs)("div", {
                            className: xJ.Nr,
                            children: [
                                (0, p.jsxs)("div", {
                                    className: xJ.Tp,
                                    children: [
                                        (0, p.jsx)("div", {
                                            className: xJ.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, p.jsx)("div", { className: xJ.$h }),
                                        (0, p.jsx)("div", { className: xJ.Rv }),
                                        (0, p.jsx)("div", { className: xJ.Lw }),
                                    ],
                                }),
                                (0, p.jsxs)("div", {
                                    className: xJ.Mn,
                                    children: [
                                        (0, p.jsxs)("div", {
                                            className: xJ.mY,
                                            children: [
                                                (0, p.jsx)("img", {
                                                    className: xJ.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, p.jsx)(Q.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: xJ.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, p.jsx)("div", { className: xJ.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)("div", { className: xJ.yF }),
                                            (0, p.jsxs)("div", {
                                                className: xJ.sQ,
                                                children: [
                                                    (0, p.jsx)(uN.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: n6.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, p.jsx)(Q.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: U.intl.format(xQ.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(xW.Hx.CONNECT),
                                                                    (0, xM.A)({
                                                                        platformType: I.fg2.XBOX,
                                                                        location: "Connected Accounts Banner",
                                                                    }));
                                                            },
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
            }),
        ],
    });
}
var x1 = n(201718),
    x2 = n(321078),
    x3 = n(672130),
    x5 = n(379848),
    x4 = n(688901);
function x6(e) {
    let { markAsDismissed: t } = e;
    return (
        T.useEffect(() => t(mM.i.AUTO_DISMISS), [t]),
        (0, p.jsx)("div", { className: x4.Ad, children: (0, p.jsx)(m1.E, { type: "new", variant: "primary" }) })
    );
}
function x8(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: s, onClick: l } = e;
    return (0, p.jsxs)("div", {
        className: x4.kL,
        children: [
            i,
            (0, p.jsxs)("div", {
                className: x4.FS,
                children: [
                    (0, p.jsxs)("div", {
                        className: x4.TK,
                        children: [
                            (0, p.jsx)(x5.Ay, {
                                contentTypes: [s],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === s ? (0, p.jsx)(x6, { markAsDismissed: n }) : null;
                                },
                            }),
                            (0, p.jsx)(Q.E, { variant: "text-md/semibold", children: t }),
                        ],
                    }),
                    (0, p.jsx)(Q.E, { variant: "text-xs/normal", children: n }),
                ],
            }),
            (0, p.jsx)(v.$, { text: U.intl.string(U.t.vD60Pv), onClick: l }),
        ],
    });
}
function x7() {
    let e = eC.A.getArticleURL(I.MVz.PS_CONNECTION);
    return (0, p.jsx)(x8, {
        title: U.intl.string(U.t.v20wwm),
        body: U.intl.format(U.t.lTZBit, { help_article: e }),
        img: (0, p.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eA.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, xM.A)({ platformType: I.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let x9 = "/assets/9df988a227916145.png";
function Se() {
    return (0, p.jsx)(x8, {
        title: U.intl.string(xQ.default["9cLtDI"]),
        body: U.intl.format(xQ.default["D+kUbg"], { learnMoreLink: eC.A.getArticleURL(I.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, p.jsx)("img", { src: x9, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eA.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, xM.A)({ platformType: I.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function St() {
    let e = eC.A.getArticleURL(I.MVz.XBOX_CONNECTION);
    return (0, p.jsx)(x8, {
        title: U.intl.string(U.t["2okkZV"]),
        body: U.intl.format(U.t.OnERSS, { help_article: e }),
        img: (0, p.jsx)("img", { src: x9, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eA.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, xM.A)({ platformType: I.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var Sn = n(783419),
    Si = n(534952),
    Ss = n(121286),
    Sl = n(247259);
function Sr(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, f.cf)(
            [xq.A],
            () => ({
                isJoining: xq.A.isJoining(n.id),
                joinErrorMessage:
                    "" === xq.A.joinErrorMessage(n.id) ? U.intl.string(U.t.j2d6Km) : xq.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== xq.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, f.bG)([sL.A], () => sL.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, p.jsx)(v.$, {
                size: "sm",
                onClick: function () {
                    xL.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? U.intl.string(U.t.RXvQQu) : U.intl.string(U.t.XpeFYr),
            })),
        (0, p.jsxs)("div", {
            className: Sl.iA,
            children: [
                (0, p.jsxs)("div", {
                    className: Sl.XX,
                    children: [
                        (0, p.jsx)(gU.Ay, { size: gU.Ay.Sizes.SMALL, guild: n.guild, className: Sl.$f }),
                        (0, p.jsxs)("div", {
                            className: Sl.Vn,
                            children: [
                                (0, p.jsx)(Q.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, p.jsx)(nc.Anchor, {
                                    href: xD.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, p.jsx)(Q.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: n.account.name,
                                    }),
                                }),
                            ],
                        }),
                        t,
                    ],
                }),
                l &&
                    (0, p.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: Sl.R,
                        children: s,
                    }),
            ],
        })
    );
}
function Sa(e) {
    var t;
    let n,
        i,
        { account: s } = e,
        l = ((t = s.id), (n = (0, xz.G)()), (i = (0, xB.L)(tJ.PremiumTypes.TIER_2)), !n && !i && !/^\d+$/.test(t));
    return s.type === I.fg2.XBOX && l
        ? (0, p.jsx)(Se, {})
        : s.twoWayLink
          ? null
          : s.type === I.fg2.XBOX
            ? (0, p.jsx)(St, {})
            : s.type === I.fg2.PLAYSTATION
              ? (0, p.jsx)(x7, {})
              : null;
}
function So(e) {
    let t,
        n,
        i,
        s,
        l,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [g, m] = T.useState(u.friendSync),
        [A, E] = T.useState(u.visibility),
        [h, x] = T.useState(u.metadataVisibility),
        [S, f] = T.useState(u.showActivity),
        [_, N] = T.useState(null),
        [C, y] = T.useState(null),
        [b, j] = T.useState(!1),
        [O, L] = T.useState([]),
        R = (0, xP.ML)(u.type),
        D = xD.A.get(R);
    T.useEffect(() => {
        (m(u.friendSync), E(u.visibility), x(u.metadataVisibility), f(u.showActivity));
    }, [u]);
    let P = { inProgressVisibility: _, inProgressMetadataVisibility: C },
        G = T.useRef(P);
    return (
        T.useEffect(() => {
            G.current = P;
        }),
        T.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = G.current;
            (null != e && (E(e), xL.A.setVisibility(u.type, u.id, e), N(null)),
                null != t && (x(t), xL.A.setMetadataVisibility(u.type, u.id, t), y(null)));
        }, [u]),
        (0, p.jsxs)("div", {
            className: Sl.FI,
            children: [
                ((t = xD.A.get(u.type)),
                (n = xD.A.get(R)),
                (i = "1" === (u.metadata ?? {})[Sn.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === I.fg2.TWITTER &&
                    i &&
                    (s = (0, p.jsx)(sE.m, {
                        text: U.intl.string(U.t.Jebrww),
                        children: (0, p.jsx)(xk.A, {
                            color: n6.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, p.jsx)(xO.U, { size: "xs", color: n6.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, p.jsxs)("div", {
                    className: Sl.Il,
                    children: [
                        (0, p.jsx)("img", {
                            alt: n.name,
                            className: Sl.gj,
                            src: (0, cL.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsxs)("div", {
                                    className: Sl.$p,
                                    children: [
                                        (0, p.jsx)(Q.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: Sl.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, p.jsx)("div", { className: Sl.cG, children: s }),
                                    ],
                                }),
                                (0, p.jsx)(Q.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: Sl.Au,
                                    children: n.migrationData?.getMigrationExperimentEnabled(
                                        "User Settings Connections Web",
                                    )
                                        ? U.intl.format(Ss.default.Glhokn, { platformName: n.name })
                                        : n.name,
                                }),
                            ],
                        }),
                        (0, p.jsx)(n9.D, {
                            className: Sl.uH,
                            onClick: function () {
                                let e = xD.A.get(u.type);
                                (0, sI.openModal)((t) =>
                                    (0, p.jsx)(sf.a, {
                                        title: U.intl.formatToPlainString(U.t.U5x12f, { name: e.name }),
                                        subtitle: U.intl.format(U.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: U.intl.string(U.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: U.intl.string(U.t.bsbMVz),
                                                onClick: () => {
                                                    (o(), t.onClose());
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            xU.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, p.jsx)(ln.A, {
                                                children: U.intl.format(U.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": U.intl.string(U.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, p.jsx)(uB.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, p.jsx)(Sa, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, xG.An)(t[Sn.pK.CREATED_AT], c);
                    switch (e.type) {
                        case I.fg2.REDDIT:
                            n = (0, xV.xE)(t, Sl.Nz);
                            break;
                        case I.fg2.STEAM:
                            n = (0, xV.dy)(t, Sl.Nz);
                            break;
                        case I.fg2.BLUESKY:
                        case I.fg2.TWITTER:
                        case I.fg2.MASTODON:
                            n = (0, xV.ED)(t, Sl.Nz);
                            break;
                        case I.fg2.EBAY:
                            n = (0, xV.ub)(t, Sl.Nz);
                            break;
                        case I.fg2.PAYPAL:
                            n = (0, xV.gZ)(t, Sl.Nz);
                            break;
                        case I.fg2.TIKTOK:
                            n = (0, xV.HU)(t, Sl.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, p.jsx)(
                                Q.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: Sl.M4,
                                    children: U.intl.format(U.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = O.includes(e.id),
                        l = U.intl.string(U.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== xD.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, p.jsx)(
                                    "div",
                                    {
                                        className: Sl.Z3,
                                        children: (0, p.jsx)(m1.E, { type: "new", variant: "primary" }),
                                    },
                                    "badge",
                                ),
                                (0, p.jsx)(
                                    Q.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: Sl.vt,
                                        children: U.intl.format(U.t.Up2ni7, {
                                            helpdeskUrl: eC.A.getArticleURL(I.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (l = U.intl.string(U.t["LVh3/5"])));
                    return (
                        s && (l = U.intl.string(U.t.i4jeWR)),
                        n.push(
                            (0, p.jsx)(
                                "div",
                                {
                                    className: Sl.jy,
                                    children: (0, p.jsx)(v.$, {
                                        text: l,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: b,
                                        disabled: s,
                                        "aria-label": U.intl.string(U.t.sCkLYH),
                                        onClick: s
                                            ? void 0
                                            : () => {
                                                  (j(!0),
                                                      xL.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              (O.push(e.id), L(O), j(!1));
                                                          }, 2e3);
                                                      }));
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, p.jsx)("div", { className: Sl.tJ, children: n })
                    );
                })(u),
                (I.txh.has(u.type) &&
                    (l = (0, p.jsx)(t8.d, {
                        label: U.intl.string(U.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), xL.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                I.ewM.has(u.type) &&
                    (r = (0, p.jsx)(t8.d, {
                        label: U.intl.format(U.t["6u6J0q"], { platform: D.name }),
                        checked: S,
                        onChange: function (e) {
                            (f(e), xL.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                xD.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, p.jsx)(t8.d, {
                        label: U.intl.string(U.t.FYKGsL),
                        checked: 1 === h,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (y(n), (0, xM.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (x(n), xL.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, p.jsxs)("div", {
                    className: Sl.HZ,
                    children: [
                        (0, p.jsx)(t8.d, {
                            label: U.intl.string(U.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (N(n), (0, xM.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (E(n), xL.A.setVisibility(u.type, u.id, n));
                            },
                        }),
                        a,
                        r,
                        l,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, p.jsx)(su.c, {});
                })(),
                u.revoked
                    ? (0, p.jsx)(i$.w, {
                          type: "info",
                          message: U.intl.format(U.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, xM.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                          role: "none",
                      })
                    : u.integrations.length > 0
                      ? (0, p.jsx)(t6.D, {
                            label: U.intl.string(U.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, p.jsx)(Sr, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, p.jsx)(xF.A, { partner: u.type }),
            ],
        })
    );
}
function Su(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, p.jsxs)("div", {
              className: Sl.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = G.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, p.jsxs)("div", {
                          className: Sl.Il,
                          children: [
                              (0, p.jsx)("img", { alt: n.name, className: iE()(Sl.gj, Sl.sN), src: i }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)("div", {
                                          className: Sl.$p,
                                          children: (0, p.jsx)(Q.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: Sl.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, p.jsx)(Q.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: Sl.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, p.jsx)(n9.D, {
                                  className: Sl.uH,
                                  onClick: () =>
                                      (0, xv.d1)(n, t.scopes, () => {
                                          xb.A.delete(t.id);
                                      }),
                                  "aria-label": U.intl.string(U.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, p.jsx)(uB.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, p.jsx)("div", {
                      className: Sl.HZ,
                      children: (0, p.jsx)(t8.d, {
                          label: U.intl.string(U.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              x1.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function Sd() {
    let e = (0, xP.gn)(),
        t = (0, i8.A)((0, Si.getMigratedApplicationIdentityConnectionsScreenApplications)("NewConnectionsList"));
    return (0, p.jsxs)("div", {
        className: Sl.lA,
        children: [
            t.map((e) => null != e && (0, p.jsx)(x3.A, { application: e, innerClassName: Sl.U$ }, e.id)),
            e.map((e) =>
                (0, p.jsx)(
                    xR.A,
                    { type: e.type, innerClassName: Sl.U$, location: tw.A.USER_SETTINGS_CONNECTIONS },
                    e.type,
                ),
            ),
        ],
    });
}
function Sc(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        o = T.useMemo(() => i.filter((e) => xD.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, p.jsx)(oC.y, { type: oC.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === s.length
              ? (0, p.jsx)(EK.pp, {
                    theme: r,
                    className: Sl.p$,
                    children: (0, p.jsx)(EK.SG, {
                        note: U.intl.string(U.t.WenGZ2),
                        children: U.intl.string(U.t.aoLS84),
                    }),
                })
              : (0, p.jsxs)(p.Fragment, {
                    children: [
                        (0, p.jsx)(N.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: U.intl.format(U.t.AioIGb, { count: s.length + o.length }),
                        }),
                        s.map((e, t) =>
                            (0, p.jsx)(
                                Su,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, p.jsx)(
                                So,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            xL.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, p.jsx)("div", { className: Sl.V, children: t })
    );
}
let Sg = (0, E.E2)(h.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, p.jsx)(t6.D, { label: U.intl.string(U.t["t+aGse"]), children: (0, p.jsx)(Sd, {}) });
        },
        useSearchTerms: () => [
            U.intl.string(U.t.Zhcj9X),
            U.intl.string(U.t.QqTz8b),
            U.intl.string(U.t["+/hZM/"]),
            U.intl.string(U.t.bsbMVz),
            U.intl.string(U.t.f7yOAX),
            U.intl.string(U.t.FYKGsL),
            U.intl.string(U.t["+KCMSi"]),
        ],
    }),
    Sm = (0, E.E2)(h.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, f.bG)([tu.A], () => tu.A.hidePersonalInformation),
                t = (0, f.bG)([xq.A], () => xq.A.isFetching()),
                n = (0, f.bG)([xq.A], () => xq.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: s } = (0, f.cf)([xw.default], () => ({
                    authorizedAppsFetchState: xw.default.getFetchState(),
                    authorizedApps: xw.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, x2.A)(lf.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, ct.Ay)(),
                o = (0, f.bG)([ut.default], () => ut.default.locale);
            return (T.useEffect(() => {
                i === xw.FetchState.NOT_FETCHED && xb.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(x0, {}),
                          (0, p.jsx)(Sc, {
                              fetching: t || l || (r.length > 0 && i !== xw.FetchState.FETCHED),
                              accounts: n,
                              appIdentities: r,
                              authorizedApps: s,
                              theme: a,
                              locale: o,
                          }),
                      ],
                  });
        },
        initialize: () => {
            xL.A.fetch();
        },
        useSearchTerms: () => [
            U.intl.string(U.t["+/hZM/"]),
            U.intl.string(U.t.bsbMVz),
            U.intl.string(U.t.f7yOAX),
            U.intl.string(U.t.FYKGsL),
            U.intl.string(U.t["+KCMSi"]),
        ],
    }),
    SA = (0, E.zZ)(h.X.CONNECTIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["3fe7U5"]),
        useSubtitle: () => U.intl.string(U.t.U22vw6),
        useInlineNotice: function () {
            let e = (0, f.bG)([xq.A], () => xq.A.getAccounts()),
                t = T.useMemo(
                    () =>
                        xD.A.filter(
                            (e) =>
                                e.migrationData?.getMigrationExperimentEnabled("ConnectionDeprecationInlineNotice") ===
                                !0,
                        ).filter((t) => e.some((e) => e.type === t.type)),
                    [e],
                ),
                [n, i] = T.useState(0),
                [s, l] = T.useState(t),
                r = t !== s;
            r && (l(t), i(0));
            let a = T.useMemo(() => t[n], [t, n]),
                o = (0, i8.h)(a?.migrationData?.replacedBy),
                { canStartAuthorization: u, hasAlreadyLinked: d, fetched: c } = (0, uC.RD)(o),
                g =
                    a?.type === I.fg2.RIOT_GAMES || a?.type === I.fg2.LEAGUE_OF_LEGENDS
                        ? U.intl.string(Ss.default["1S6oAo"])
                        : o?.name,
                m = null != a && c,
                A = m && !d && u && o?.connectionEntrypointUrl != null;
            return (
                r || !m || A || i((e) => e + 1),
                T.useMemo(
                    () =>
                        A
                            ? {
                                  type: S.lT.INLINE_NOTICE,
                                  noticeType: "info",
                                  role: "status",
                                  text: U.intl.format(Ss.default.wUXupS, {
                                      connectionName: a.name,
                                      applicationName: g,
                                      connectionEntrypointUrl: o?.connectionEntrypointUrl,
                                      helpCenterLink:
                                          a.migrationData?.helpCenterLink != null ? a.migrationData.helpCenterLink : "",
                                  }),
                              }
                            : null,
                    [a, g, o, A],
                )
            );
        },
        buildLayout: () => [Sg, Sm],
    }),
    SE = (0, E.zZ)(h.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["f6kk+r"]),
        useSubtitle: () => U.intl.string(U.t.G9JfLg),
        buildLayout: () => [xj],
        initialize: () => (
            xb.A.fetch(),
            () => {
                xv.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    Sh = (0, E.t_)(h.X.CONNECTED_APPS_PANEL, {
        useTitle: () => U.intl.string(U.t.lrVuZO),
        useObscuredNotice: oh.L,
        buildLayout: () => [SA, SE],
    }),
    Sx = (0, E.i4)(h.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.lrVuZO),
        icon: EZ.LinkIcon,
        buildLayout: () => [Sh],
    });
var SS = n(625657),
    Sp = n(592598),
    ST = n(773371),
    Sf = n(532294),
    SI = n(672396);
let S_ = SC(null);
function SN() {
    var e;
    let t = SC(S_);
    ((e = S_),
        W().isEqual(W().omit(t, "old_enabled"), W().omit(e, "old_enabled")) ||
            (td.default.track(I.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (S_ = t)));
}
function SC(e) {
    let t = Sf.default.getNotificationPositionMode(),
        n = t !== I.G6Q.DISABLED,
        i = sc.Ay.getOverlayKeybind(),
        s = sc.Ay.getOverlayChatKeybind();
    return {
        enabled: ST.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: Sp.A.isNotificationDisabled(SI.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, sT.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, sT.dI)(s.shortcut) : null,
        text_opacity_slider: Sf.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? ST.default.enabled,
    };
}
var Sy = n(237984),
    Sb = n(63035);
function Sv(e) {
    (e.preventDefault(), e.stopPropagation());
}
function Sj(e) {
    let { children: t } = e;
    return (0, p.jsx)("div", { onClick: Sv, children: t });
}
function SO(e) {
    let {
        header: t,
        icon: n,
        title: i,
        description: s,
        action: l,
        hint: r,
        warning: a,
        onClick: o,
        "aria-label": u,
        className: d,
    } = e;
    return (0, p.jsxs)("div", {
        className: iE()(Sb.HS, d),
        children: [
            (0, p.jsxs)(hD.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, p.jsx)("div", { className: Sb.x_, children: t }),
                    (0, p.jsxs)("div", {
                        className: Sb.rN,
                        children: [
                            null != n && (0, p.jsx)("div", { className: Sb.$t, children: n }),
                            (0, p.jsxs)("div", {
                                className: Sb.c8,
                                children: [
                                    (0, p.jsx)(Q.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: Sb.SZ,
                                        children: i,
                                    }),
                                    null != s &&
                                        (0, p.jsx)(Q.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: s,
                                        }),
                                    null != r &&
                                        (0, p.jsx)(Q.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, p.jsx)("div", { className: Sb.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: Sb.Om, children: a }),
        ],
    });
}
let SL = (0, E.E2)(h.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, p.jsx)(SO, {
            title: U.intl.string(U.t["z4/l+V"]),
            description: U.intl.string(U.t["3aZq/0"]),
            action: (0, p.jsx)(v.$, {
                variant: "primary",
                text: U.intl.string(U.t.s2nVhG),
                onClick: () => {
                    (0, Sy.b)(tw.A.USER_SETTINGS, I.BRT.APP);
                },
            }),
            "aria-label": U.intl.string(U.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [U.intl.string(U.t["z4/l+V"])],
});
var SR = n(780907),
    SD = n(684013),
    SP = n(56562),
    SG = n(311043),
    SM = n(569926),
    SU = n(41984),
    SV = n(918825),
    Sk = n(296027),
    Sw = n(562519);
let SF = 5 * n(927813).A.Millis.DAY,
    SB = new Sw.A("overlay_survey_timestamps");
function Sz(e, t) {
    let i, s;
    ((i = Date.now()),
        (null != (s = Array.from(SB.values()).reduce((e, t) => Math.max(e, t), 0)) && i - s < SF) ||
            Array.from(SB.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, sI.openModalLazy)(async () => {
                let i,
                    { default: s } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return ((i = Date.now()), SB.add(i), (n) => (0, p.jsx)(s, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function SY() {
    (0, ss.sL)("overlay-settings");
}
function SX(e) {
    let { className: t, game: n } = e;
    return (0, ss.NP)() && null != n && n.elevated
        ? (0, p.jsx)("div", {
              className: t,
              children: (0, p.jsx)(i$.w, {
                  type: "warning",
                  message: U.intl.format(U.t["LJzl+0"], { helpCenterLink: eC.A.getArticleURL(I.MVz.SYSTEM_SERVICE) }),
                  role: "status",
                  action: { text: U.intl.string(U.t["1iI46O"]), onClick: SY },
              }),
          })
        : null;
}
var SH = n(760751),
    SW = n(9302),
    SK = n(656513);
let SZ = new Set([
    SU.AR.INITIALIZING,
    SU.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    SU.AR.WAITING_FOR_MODULE_TRACKING,
    SU.AR.WAITING_FOR_OVERLAY_OPEN,
    SU.AR.WAITING_FOR_POPOUT_OPEN,
    SU.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    SU.AR.WAITING_FOR_REACT_INITIALIZATION,
    SU.AR.WAITING_FOR_PID_FOCUS,
    SU.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function Sq(e) {
    let { children: t, className: n, onExpand: i, ...s } = e,
        [l, r] = T.useState(!1);
    return (0, p.jsx)(SK.N, {
        className: Sb.uR,
        collapsibleContent: (0, p.jsx)("div", { className: Sb.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, p.jsx)(SO, {
                ...s,
                onClick: (e) => {
                    var n;
                    (r((n = !l)), i?.(n), t?.(e));
                },
                className: iE()(Sb.AC, n),
                action: (0, p.jsxs)("div", {
                    className: Sb.rc,
                    children: [
                        s.action,
                        l
                            ? (0, p.jsx)(g8.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, p.jsx)(it._, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              }),
                    ],
                }),
            });
        },
    });
}
let SQ = (0, E.E2)(h.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = st();
        (0, SM.I)(e?.id);
        let n = e?.pid,
            i = (0, f.bG)(
                [Sk.default],
                () => (null == e || null == n ? null : Sk.default.getTrackedGameByPid(n)),
                [e, n],
                i4(),
            ),
            { data: s } = (0, SM.I)(i?.gameId),
            { enabledLegacy: l, enabledOOP: r } = (0, f.cf)(
                [SH.A, tg.A, SG.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, i9.hw)(e, !1, [SH.A, tg.A, SG.A]),
                [e, i],
            ),
            a = (0, f.bG)(
                [i9.Ay, SH.A, tg.A, SG.A],
                () => (null == e ? null : (0, i9.xU)(e, i9.Ay, SH.A, tg.A, SG.A)),
                [e],
                i4(),
            ),
            [o, u] = T.useState(r),
            [d, c] = T.useState(l),
            [g, m] = T.useState(!1);
        T.useEffect(() => {
            (u(r), c(l));
        }, [r, l]);
        let A = !(0, SW.supportsLegacy)(),
            E = !(0, SW.supportsOutOfProcess)(),
            { legacyEnabled: h, oopEnabled: x } = (0, f.cf)([Sk.default], () => Sk.default.getGlobalEnabledStatus());
        function S(t, n) {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case SV.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), SR.Ay.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case SV.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), SR.Ay.toggleOverlay(e, d, t), (s = !t && o));
                    break;
                case SV.OverlayToggledClientSettingType.LEGACY:
                    (SD.A.setEnabled(t, x), (0, SV.Q)(t, SV.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case SV.OverlayToggledClientSettingType.OOP:
                    (SD.A.setEnabled(h, t), (0, SV.Q)(t, SV.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || s) &&
                Sz(
                    i ? SV.OverlayToggledClientSettingType.LEGACY_GAME : SV.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let I = A && E,
            _ = !h && !x,
            N = !o && !h && d && !A,
            C = !d && !x && o && !E,
            y = i?.overlayMethod === SU.Ue.Disabled,
            b = i?.state === SU.AR.OVERLAY_RENDERING && !y,
            v = i?.state != null && SZ.has(i.state) && !y,
            j = i?.overlayMethod === SU.Ue.OutOfProcess,
            O = i?.overlayMethod === SU.Ue.OutOfProcessLimitedInteraction,
            L = i?.overlayMethod === SU.Ue.Hook,
            R = i?.state === SU.AR.OVERLAY_CRASHED || i?.state === SU.AR.OVERLAY_CRASHED_DISABLED,
            D = !o && !d,
            [P, G] = (function () {
                switch (!0) {
                    case b && j:
                        return [
                            U.intl.format(U.t.hFVBIg, {
                                overlayMethod: U.intl.string(U.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, p.jsx)(
                                        Q.E,
                                        {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-feedback-positive",
                                            children: e,
                                        },
                                        t,
                                    );
                                },
                            }),
                            null,
                        ];
                    case b && O:
                        return [
                            U.intl.format(U.t.hFVBIg, {
                                overlayMethod: U.intl.string(U.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, p.jsx)(
                                        Q.E,
                                        {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-feedback-warning",
                                            children: e,
                                        },
                                        t,
                                    );
                                },
                            }),
                            null,
                        ];
                    case b && L:
                        return [
                            U.intl.format(U.t.hFVBIg, {
                                overlayMethod: U.intl.string(U.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, p.jsx)(
                                        Q.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case i?.fullscreenType !== SP.aI.BORDERLESS_FULLSCREEN:
                                        return U.intl.string(U.t.mJmbeC);
                                    case E:
                                        return U.intl.string(U.t.C7bLTQ);
                                    case !i?.oopEnabled:
                                        return U.intl.string(U.t.WiY24u);
                                    case !x:
                                        return U.intl.string(U.t.cAFVsL);
                                    case !(s?.supportsOutOfProcessOverlay ?? !0):
                                        return U.intl.string(U.t.XcGEcs);
                                    default:
                                        return U.intl.string(U.t.bJXH2v);
                                }
                            })(),
                        ];
                    case R:
                        return [U.intl.string(U.t.OFC2aw), null];
                    case I:
                        return [U.intl.string(U.t.m7X4az), null];
                    case _:
                        return [U.intl.string(U.t["9DUS5l"]), null];
                    case D:
                        return [U.intl.string(U.t.nQ9EdJ), null];
                    case N:
                    case C:
                        return [U.intl.string(U.t.VWUn0a), null];
                    case v:
                        if (j) return [U.intl.string(U.t["s8+CFq"]), null];
                        if (L) return [U.intl.string(U.t.JEEdqt), null];
                        if (O) return [U.intl.string(U.t.pzBMwY), null];
                        return [U.intl.string(U.t["2Xhy9k"]), null];
                    case null == i:
                        return [U.intl.string(U.t.vwHPRi), null];
                    case y: {
                        let e = i?.fullscreenType === SP.aI.FULLSCREEN ? U.intl.string(U.t.mJmbeC) : null;
                        return [U.intl.string(U.t.VPW4XY), e];
                    }
                    default:
                        return [U.intl.string(U.t.ONovP5), null];
                }
            })();
        (0, eI.Ay)(() => {
            SR.Ay.getDetectableGames();
        });
        let [M, V] = T.useMemo(
            () =>
                v
                    ? ["text-muted", n6.A.colors.TEXT_MUTED.css]
                    : b && O
                      ? ["text-feedback-warning", n6.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : b && j
                        ? ["text-feedback-positive", n6.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : b && L
                          ? ["text-strong", n6.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", n6.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, b, O, j, L],
        );
        return null == e
            ? null
            : (0, p.jsxs)(Sq, {
                  onExpand: m,
                  className: g ? Sb.tx : void 0,
                  title: (0, p.jsxs)(p.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, p.jsx)(sE.m, {
                                    text: U.intl.string(U.t["4PJP5p"]),
                                    children: (0, p.jsx)(xk.A, {
                                        size: 16,
                                        color: n6.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, p.jsx)(xO.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: n6.A.colors.WHITE.css,
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  description: P,
                  hint: null != G ? G : void 0,
                  header: (0, p.jsxs)(p.Fragment, {
                      children: [
                          b || v
                              ? (0, p.jsx)(dA.k, { size: "xxs", color: V })
                              : (0, p.jsx)("div", { className: Sb.W4 }),
                          (0, p.jsx)(Q.E, {
                              variant: "text-xs/semibold",
                              color: M,
                              children: U.intl.string(U.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, p.jsx)(sn.A, { game: t, pid: e?.pid, size: sn.M.MEDIUM }),
                  "aria-label": U.intl.string(U.t["87O5GC"]),
                  action: (0, p.jsx)(Sj, {
                      children: (0, p.jsx)(t8.d, {
                          checked: (o && x) || (d && h),
                          disabled: I,
                          onChange: (t) => {
                              !(function (t, n) {
                                  if (null == e) return;
                                  let i = !1,
                                      s = !1;
                                  switch (n) {
                                      case "game":
                                          (SR.Ay.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (s = !t && o));
                                          break;
                                      case "global":
                                          (SD.A.setEnabled(t, t), (i = !t && h), (s = !t && x));
                                          break;
                                      case "both":
                                          (SD.A.setEnabled(t, t),
                                              SR.Ay.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && h) || (!t && d)),
                                              (s = (!t && x) || (!t && o)));
                                  }
                                  let l = null;
                                  (i
                                      ? (l =
                                            "game" === n
                                                ? SV.OverlayToggledClientSettingType.LEGACY_GAME
                                                : SV.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === n
                                                ? SV.OverlayToggledClientSettingType.OOP_GAME
                                                : SV.OverlayToggledClientSettingType.OOP),
                                      null != l && Sz(l, e.id ?? null));
                              })(
                                  t,
                                  (function (e, t) {
                                      let n = !t && e,
                                          i = !x && o,
                                          s = !h && d,
                                          l = !o && x,
                                          r = !d && h;
                                      switch (!0) {
                                          case n && (i || s) && (l || r):
                                              return "both";
                                          case n && (i || s):
                                              return "global";
                                          default:
                                              return "game";
                                      }
                                  })(t, (o && x) || (d && h)),
                              );
                          },
                      }),
                  }),
                  warning: (0, p.jsx)(SX, { className: Sb.Hh, game: e }),
                  children: [
                      (0, p.jsx)(SO, {
                          title: U.intl.string(U.t["7BlVIs"]),
                          description: U.intl.string(U.t.ndgADE),
                          hint: x ? void 0 : U.intl.string(U.t.cAFVsL),
                          "aria-label": U.intl.string(U.t["7BlVIs"]),
                          action: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(t8.d, {
                                      checked: o && x,
                                      disabled: E,
                                      onChange: (e) => {
                                          e && !x
                                              ? S(e, SV.OverlayToggledClientSettingType.OOP)
                                              : S(e, SV.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, p.jsx)("div", { className: Sb.Kz }),
                              ],
                          }),
                      }),
                      (0, p.jsx)(SO, {
                          title: U.intl.string(U.t.BfFpW1),
                          description: U.intl.string(U.t.OzInYk),
                          hint: h ? void 0 : U.intl.string(U.t["3sYHXm"]),
                          "aria-label": U.intl.string(U.t.BfFpW1),
                          action: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(t8.d, {
                                      checked: d && h,
                                      disabled: A,
                                      onChange: (e) => {
                                          e && !h
                                              ? S(e, SV.OverlayToggledClientSettingType.LEGACY)
                                              : S(e, SV.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, p.jsx)("div", { className: Sb.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = st();
        return null != e;
    },
    useSearchTerms: () => [U.intl.string(U.t["9cb1Uz"])],
});
var S$ = n(206885);
function SJ(e) {
    let { game: t, gameApplication: n } = e,
        i = T.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, f.bG)([i6.A], () => (null != n ? n : i6.A.getApplication(t?.id)), [n, t]);
    return (0, p.jsx)(sn.A, { game: s, pid: i, size: sn.M.SMALL });
}
function S0(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: s,
        onChange: l,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, SM.I)(t?.id);
    let o = (0, f.cf)([i9.Ay, SH.A, tg.A, SG.A], () => (0, i9.xU)(t, i9.Ay, SH.A, tg.A, SG.A)),
        u = (0, f.cf)([SH.A, tg.A, SG.A], () => (0, i9.hw)(t, !1, [SH.A, tg.A, SG.A]), [t]),
        d = s(u),
        [c, g] = T.useState(d);
    return (
        T.useEffect(() => {
            g(d);
        }, [d]),
        (0, p.jsx)(SO, {
            title: t.name,
            icon: (0, p.jsx)(SJ, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(t8.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), l(e, o, u), n && Sz(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, p.jsx)("div", { className: Sb.Kz }),
                ],
            }),
        })
    );
}
let S1 = (0, E.E2)(h.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = T.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, f.cf)([Sk.default], () =>
                    Sk.default.getGlobalEnabledStatus(),
                ),
                s = (0, f.yK)([i9.Ay], () => i9.Ay.getGamesSeen(!0)).filter((e) => !(0, hQ.n1)(e)),
                l = (0, i8.A)(s.map((e) => e.id)),
                r = !(0, SW.supportsLegacy)();
            function a(e) {
                SD.A.setEnabled(e, i);
                let t = i9.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, SV.Q)(e, SV.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && Sz(SV.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                SR.Ay.toggleOverlay(t, e, i);
            }
            let u = T.useMemo(
                () =>
                    (0, SW.supportsLegacy)()
                        ? r
                            ? U.intl.string(U.t.r9jEVw)
                            : U.intl.string(U.t.OzInYk)
                        : U.intl.string(U.t["8Ox6/E"]),
                [r],
            );
            return 0 === s.length
                ? (0, p.jsx)(SO, {
                      title: U.intl.string(U.t.BfFpW1),
                      description: u,
                      "aria-label": U.intl.string(U.t.BfFpW1),
                      className: Sb.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(t8.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              S$.O && (0, p.jsx)("div", { className: Sb.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(Sq, {
                      onExpand: t,
                      className: e ? Sb.tx : void 0,
                      title: U.intl.string(U.t.BfFpW1),
                      description: u,
                      "aria-label": U.intl.string(U.t.BfFpW1),
                      action: (0, p.jsx)(Sj, {
                          children: (0, p.jsx)(t8.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, p.jsx)("div", {
                              className: Sb.SC,
                              children: (0, p.jsx)(Q.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: U.intl.string(U.t.FzoWRo),
                              }),
                          }),
                          (0, p.jsx)(C.Ip, {
                              className: Sb.XG,
                              children: s.map((e, t) =>
                                  (0, p.jsx)(
                                      S0,
                                      {
                                          rawGame: e,
                                          clientSettingType: SV.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: l[t],
                                          getEnabledFromStatus: (e) => {
                                              let { enabledLegacy: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: U.intl.format(U.t.hvPYsF, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [U.intl.string(U.t.BfFpW1)],
    }),
    S2 = (0, E.E2)(h.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = T.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, f.cf)([Sk.default], () =>
                    Sk.default.getGlobalEnabledStatus(),
                ),
                s = !(0, SW.supportsOutOfProcess)(),
                l = (0, f.yK)([i9.Ay], () => i9.Ay.getGamesSeen(!0)).filter((e) => !(0, hQ.n1)(e)),
                r = (0, i8.A)(l.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                SD.A.setEnabled(i, e);
                let s = i9.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, SV.Q)(e, SV.OverlayToggledClientSettingType.OOP, s),
                    t && Sz(SV.OverlayToggledClientSettingType.OOP, s));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                SR.Ay.toggleOverlay(t, e, i);
            }
            let u = T.useMemo(
                () => (S$.O ? (s ? U.intl.string(U.t.C7bLTQ) : U.intl.string(U.t.ndgADE)) : U.intl.string(U.t.m7X4az)),
                [s],
            );
            return 0 === l.length
                ? (0, p.jsx)(SO, {
                      title: U.intl.string(U.t["7BlVIs"]),
                      description: u,
                      "aria-label": U.intl.string(U.t["7BlVIs"]),
                      className: Sb.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(t8.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                              S$.O && (0, p.jsx)("div", { className: Sb.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(Sq, {
                      onExpand: t,
                      className: e ? Sb.tx : void 0,
                      title: U.intl.string(U.t["7BlVIs"]),
                      description: u,
                      "aria-label": U.intl.string(U.t["7BlVIs"]),
                      action: (0, p.jsx)(Sj, {
                          children: (0, p.jsx)(t8.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, p.jsx)("div", {
                              className: Sb.SC,
                              children: (0, p.jsx)(Q.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: U.intl.string(U.t.FzoWRo),
                              }),
                          }),
                          (0, p.jsx)(C.Ip, {
                              className: Sb.XG,
                              children: l.map((e, t) =>
                                  (0, p.jsx)(
                                      S0,
                                      {
                                          rawGame: e,
                                          clientSettingType: SV.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: s,
                                          getEnabledFromStatus: (e) => {
                                              let { enabledOOP: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: U.intl.format(U.t.nByTd3, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [U.intl.string(U.t["7BlVIs"])],
    }),
    S3 = (0, E.zZ)(h.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => U.intl.string(U.t["/dp6yY"]),
        buildLayout: () => [SQ, S2, S1, SL],
    }),
    S5 = (0, E.zD)(h.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, f.bG)([Sf.default], () => !Sf.default.disableClickableRegions),
        setValue: (e) => {
            SD.A.setDisableClickableRegions(!e);
        },
        useTitle: () => U.intl.string(U.t["+eFXxq"]),
        useSubtitle: () => U.intl.string(U.t.kivMAp),
    }),
    S4 = (0, E.E2)(h.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, f.bG)([sc.Ay], () => sc.Ay.getOverlayKeybind()),
                t = !(0, SW.supportsLegacy)(),
                n = !(0, SW.supportsOutOfProcess)(),
                [i, s] = (0, f.yK)([i9.Ay], () => [i9.Ay.canShowAdminWarning, i9.Ay.getVisibleGame()], []),
                l = (0, ss.NP)(),
                r = null != s && s.elevated && i && !l,
                a = !(0, sc.DV)(e?.shortcut ?? []);
            return (0, p.jsx)("div", {
                className: Sb.hc,
                children: (0, p.jsxs)("div", {
                    className: Sb.eH,
                    children: [
                        (0, p.jsxs)("div", {
                            className: Sb.Bu,
                            children: [
                                (0, p.jsx)(Q.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: U.intl.string(U.t.VsAZcC),
                                }),
                                r &&
                                    (0, p.jsx)(Q.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: Sb.y7,
                                        children: U.intl.string(U.t.NsowVa),
                                    }),
                                a &&
                                    (0, p.jsx)(Q.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: Sb.y7,
                                        children: U.intl.string(U.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, p.jsx)("div", {
                            className: Sb.IH,
                            children: (0, p.jsx)(sp.A, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    (th()(null != e, "Keybind should never be undefined"),
                                        iJ.A.setKeybind({ ...e, shortcut: t }));
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.VsAZcC)],
    });
var S6 = n(515183),
    S8 = n(682763);
let S7 = (0, E.zD)(h.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = st();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = st();
            return null != e && (0, S6.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = st(),
                n = t?.id,
                i = (0, f.bG)([Sp.A], () => Sp.A.isLimitedInteractionOverrideEnabled(n)),
                s = null != e && (0, S6.qJ)(e.pid);
            return i || s;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                s,
                { runningGameApplication: l } =
                    ((t = i7.A.getStreamerActiveStreamMetadata()),
                    (s = se(
                        t,
                        (i =
                            null != (n = i9.Ay.getVisibleGame())
                                ? i9.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: i6.A.getApplication(s) ?? void 0 });
            null != l && (0, S8.x8)(l.id, e);
        },
        useTitle: () => U.intl.string(U.t.wgVQND),
        useSubtitle: () => U.intl.string(U.t["5SsyF5"]),
    }),
    S9 = (0, E.zZ)(h.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [S4, S7, S5] });
var pe = n(93465),
    pt = n(222407);
let pn = [
    {
        title: U.t.eVE4LX,
        description: U.t["72WNqk"],
        disabledSetting: pe.M.TEXT_CHAT,
        key: h.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: U.t.oifnSh,
        description: U.t.bgU5r0,
        disabledSetting: pe.M.WELCOME_GENERAL,
        key: h.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: U.t.hqsZJW,
        description: U.t.kHjdqc,
        disabledSetting: pe.M.GO_LIVE_NUDGE,
        key: h.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: U.t.sop3rn,
        description: U.t.pjgffc,
        disabledSetting: pe.M.GAME_ACTIVITY,
        key: h.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: U.t["2QVhbb"],
        description: U.t.wQ4ilB,
        disabledSetting: pe.M.NOW_PLAYING,
        key: h.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: U.t.giM9fA,
        description: U.t.EhAfWj,
        disabledSetting: pe.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: h.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, nC.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, f.bG)([Sp.A], () => Sp.A.isNotificationDisabledBySetting(pe.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function pi(e) {
    return (0, E.zD)(e.key, {
        useTitle: () => U.intl.string(e.title),
        useSubtitle: () => U.intl.string(e.description),
        useValue: () => !(0, f.bG)([Sp.A], () => Sp.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            (0, pt.I)(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let ps = (0, E.FW)(h.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => pn.map(pi),
    }),
    pl = (0, E.zZ)(h.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.xOE5bA),
        buildLayout: () => [ps],
    }),
    pr = (0, E.Hn)(h.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => U.intl.string(U.t.dnvZSg),
        useValue: () => (0, f.bG)([Sf.default], () => Sf.default.getAvatarSizeMode()),
        setValue: (e) => {
            SD.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: U.intl.string(U.t.YcOxtr), value: I.OSZ.LARGE },
            { id: "small", label: U.intl.string(U.t.BKIKqx), value: I.OSZ.SMALL },
        ],
    }),
    pa = (0, E.Hn)(h.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => U.intl.string(U.t.J0dpcB),
        useValue: () => (0, f.bG)([Sf.default], () => Sf.default.getDisplayNameMode()),
        setValue: (e) => {
            SD.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: U.intl.string(U.t.nBmDrT), value: I.pwA.ALWAYS },
            { id: "speaking", label: U.intl.string(U.t["2OvIZY"]), value: I.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: U.intl.string(U.t.ekjlPL), value: I.pwA.NEVER },
        ],
    }),
    po = (0, E.Hn)(h.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => U.intl.string(U.t.swsWWC),
        useValue: () => (0, f.bG)([Sf.default], () => Sf.default.getDisplayUserMode()),
        setValue: (e) => {
            SD.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: U.intl.string(U.t.nBmDrT), value: I.f5z.ALWAYS },
            { id: "speaking", label: U.intl.string(U.t["2OvIZY"]), value: I.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var pu = n(391973),
    pd = n(233741),
    pc = n(897720),
    pg = n(32584);
function pm() {
    let e = pd.A.getWidgetByType(I.uss.VOICE_V3);
    if (null == e) return null;
    let t = pg.A.getWidget(e.id);
    return null != t && (0, pc.ZO)(t) ? t : null;
}
n(392164);
let pA = (0, E.sN)(h.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => U.intl.string(U.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? U.intl.string(U.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = pm();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? U.intl.string(U.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = pm();
        null != t &&
            (e < 1
                ? (0, pu.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, pu.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var pE = n(450740),
    ph = n(968898),
    px = n(288737);
function pS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new px.A({
            channelId: "123",
            userId: s,
            sessionId: "789",
            mute: t,
            deaf: n,
            selfMute: !1,
            selfDeaf: !1,
            selfVideo: !1,
            selfStream: !1,
            discoverable: i,
        }),
        user: new cX.A({ id: s, username: e }),
        member: {
            nick: e,
            userId: s,
            guildId: "890",
            roles: [],
            hoistRoleId: null,
            premiumSince: null,
            joinedAt: new Date().toISOString(),
            colorString: "#000000",
            colorStrings: { primaryColor: "#000000", secondaryColor: null, tertiaryColor: null },
        },
        nick: e,
        comparator: e,
        _isPlaceholder: !0,
    };
}
let pp = (0, E.E2)(h.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: s,
                } = (0, f.cf)([Sf.default], () => ({
                    avatarSizeMode: Sf.default.getAvatarSizeMode(),
                    displayNameMode: Sf.default.getDisplayNameMode(),
                    displayUserMode: Sf.default.getDisplayUserMode(),
                })),
                [l] = T.useState(() => [
                    pS(U.intl.string(U.t.C0ZDvo), !0, !1),
                    pS(U.intl.string(U.t.iOtj8E), !1, !1, !0),
                    pS(U.intl.string(U.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, f.bG)([pd.A, pg.A], () => {
                    let e = pd.A.getWidgetByType(I.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = pg.A.getWidget(e.id);
                    return null != t && (0, pc.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = pS(t.username)).user = t), e) : null, ...l].filter(ig.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, p.jsx)(xY.N, {
                    theme: I.NJ8.ONYX,
                    children: (e) =>
                        (0, p.jsxs)("div", {
                            className: iE()(Sb.Y5, e),
                            children: [
                                (0, p.jsx)("div", {
                                    className: Sb.kJ,
                                    children: (0, p.jsx)(pE.DH, {
                                        id: "voice-widget",
                                        title: U.intl.string(U.t.KNJ6Vq),
                                        channel: (0, P.createChannelRecord)({
                                            id: "123",
                                            name: "Test Channel",
                                            type: I.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: u,
                                        displayNameMode: i,
                                        displayUserMode: s,
                                        avatarSizeMode: n,
                                        widget: I.uss.VOICE,
                                        anchorLeft: !0,
                                        application: null,
                                        stream: null,
                                        streamApplication: null,
                                        streamMetadata: null,
                                        locked: !1,
                                        pinned: !1,
                                        isSettingsPreview: !0,
                                        isPreviewingInGame: !1,
                                        maxDisplayedVoiceStates: a,
                                    }),
                                }),
                                (0, p.jsxs)("div", {
                                    className: Sb.R$,
                                    children: [
                                        (0, p.jsx)(ph.Pl, { children: U.intl.string(U.t.KNJ6Vq) }),
                                        (0, p.jsx)(ph.CS, {}),
                                        (0, p.jsx)(ph.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, p.jsx)("div", { className: Sb.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    pT = (0, E.zZ)(h.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => U.intl.string(U.t.r1TZfh),
        buildLayout: () => [pp, pr, pa, po, pA],
    });
var pf = n(793480),
    pI = n(667419),
    p_ = n(776162),
    pN = n(114994),
    pC = n(371169),
    py = n(25448);
let pb = {
    [I.uss.VOICE_V3]: h.X.OVERLAY_WIDGETS_VOICE,
    [I.uss.QUICK_ACTIONS]: h.X.OVERLAY_WIDGETS_QUICK_ACTIONS,
    [I.uss.NOTIFICATIONS]: h.X.OVERLAY_WIDGETS_NOTIFICATIONS,
    [I.uss.TEXT_CHAT_V3]: h.X.OVERLAY_WIDGETS_CHAT,
    [I.uss.FRIENDS]: h.X.OVERLAY_WIDGETS_FRIENDS,
    [I.uss.ACTIVITY]: h.X.OVERLAY_WIDGETS_ACTIVITY,
    [I.uss.VIDEO]: h.X.OVERLAY_WIDGETS_VIDEO,
    [I.uss.GO_LIVE]: h.X.OVERLAY_WIDGETS_STREAMS,
};
function pv(e) {
    let t = ny.A[e],
        n = pb[e];
    if (t?.label == null || null == t.description || null == n) return [];
    let { label: i, description: s, predicate: l } = t;
    return (0, E.zD)(n, {
        useTitle: () => i(),
        useSubtitle: () => s(),
        usePredicate: () => ((0, nC.M8)("OverlayWidgetsCategory"), l?.() ?? !0),
        useValue: () => (0, f.bG)([pg.A], () => (0, pI.$e)(e, pg.A), []),
        setValue: (t) => {
            ((0, pI.j$)(), (0, pI.JA)(e, !t));
        },
    });
}
let pj = (0, E.FW)(h.X.OVERLAY_WIDGETS_LIST, {
        variant: "compact",
        useTitle: () => U.intl.string(py.default["Qk/rJB"]),
        useSubtitle: () => U.intl.string(py.default.HUjIgu),
        isTitleHiddenVisually: !0,
        buildLayout: () => p_.t3.flatMap(pv),
    }),
    pO = (0, E.E2)(h.X.OVERLAY_WIDGETS_APPS, {
        Component: function () {
            let e = (0, f.bG)([pN.A], () => pN.A.getProjects());
            return (T.useEffect(() => {
                (0, pC.hF)();
            }, []),
            0 === e.length)
                ? null
                : (0, p.jsxs)(Z.B, {
                      gap: 8,
                      children: [
                          (0, p.jsx)(N.D, {
                              variant: "heading-sm/semibold",
                              color: "text-muted",
                              children: U.intl.string(py.default["pbu+Yx"]),
                          }),
                          e.map((e) => (0, p.jsx)(p_.i2, { project: e }, e.id)),
                      ],
                  });
        },
        usePredicate: () => (0, pf.TW)("overlay_settings_conjure_apps"),
        useSearchTerms: () => [U.intl.string(py.default["pbu+Yx"])],
    }),
    pL = (0, E.Tf)(h.X.OVERLAY_WIDGETS_RESET, {
        useTitle: () => U.intl.string(U.t["hW+EMu"]),
        useLabel: () => U.intl.string(U.t.yBZMsQ),
        useVariant: () => "secondary",
        onClick: pI.eL,
    }),
    pR = (0, E.zZ)(h.X.OVERLAY_WIDGETS_CATEGORY, {
        useTitle: () => U.intl.string(py.default["Qk/rJB"]),
        usePredicate: nb.b_,
        buildLayout: () => [pj, pO, pL],
    });
var pD = n(54761);
function pP() {
    let [e, t] = (0, mb.kn)([eA.M.OVERLAY_OOP_SETTINGS_NUX], { bypassAutoDismiss: !0 });
    return ((0, K.Ay)(() => () => {
        t(mM.i.AUTO_DISMISS);
    }),
    e !== eA.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, p.jsxs)(p.Fragment, {
              children: [
                  (0, p.jsxs)("div", {
                      className: pD.xC,
                      children: [
                          (0, p.jsx)("div", {
                              children: (0, p.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: U.intl.string(U.t.mdXZh1),
                                  className: pD.tl,
                              }),
                          }),
                          (0, p.jsx)("div", {
                              children: (0, p.jsxs)("div", {
                                  className: pD.vJ,
                                  children: [
                                      (0, p.jsx)(N.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: U.intl.string(U.t.jzjJQg),
                                      }),
                                      (0, p.jsx)(Q.E, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: U.intl.string(U.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, p.jsx)("div", {
                              children: (0, p.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/2aa57f16c71171fc8e0edb8cca60735f1192195344d17fa667de6d3ca8163ba0.png",
                                  alt: U.intl.string(U.t.mdXZh1),
                                  className: pD.lh,
                              }),
                          }),
                          (0, p.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: pD.VV,
                              children: (0, p.jsx)(v.$, {
                                  variant: "primary",
                                  text: U.intl.string(U.t.Q26diF),
                                  onClick: () => void t(mM.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(su.c, { className: pD.yF }),
              ],
          });
}
function pG() {
    let e = (0, f.bG)([tu.A], () => tu.A.enabled),
        t = (0, nC.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, p.jsxs)(p.Fragment, {
              children: [
                  (0, p.jsx)(i$.w, {
                      type: "warning",
                      message: U.intl.format(U.t.fuEX5B, {
                          onClick: function () {
                              return (0, ng.openUserSettings)(h.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                      role: "status",
                  }),
                  (0, p.jsx)(su.c, { className: pD.yF }),
              ],
          })
        : null;
}
let pM = (0, E.t_)(h.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                SN(),
                sc.Ay.addChangeListener(SN),
                Sp.A.addChangeListener(SN),
                Sf.default.addChangeListener(SN),
                ST.default.addChangeListener(SN),
                e6.isPlatformEmbedded && (0, hJ.a2)(),
                () => {
                    (sc.Ay.removeChangeListener(SN),
                        Sp.A.removeChangeListener(SN),
                        Sf.default.removeChangeListener(SN),
                        ST.default.removeChangeListener(SN),
                        e6.isPlatformEmbedded && (0, hJ.e0)());
                }
            );
        },
        useTitle: () => U.intl.string(U.t["9cb1Uz"]),
        decoration: {
            type: S.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(pP, {}), (0, p.jsx)(pG, {})] });
            },
        },
        buildLayout: () => [S3, S9, pR, pT, pl],
    }),
    pU = (0, E.i4)(h.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["9cb1Uz"]),
        icon: SS.l,
        usePredicate: nb.b_,
        buildLayout: () => [pM],
    });
var pV = n(687966);
let pk = (0, E.AK)(h.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.OYYY6q),
        destinationKey: h.X.ACTIVITY_PRIVACY_PANEL,
    }),
    pw = (0, E.gN)(h.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [pk] });
var pF = n(227309),
    pB = n(29160),
    pz = n(552366),
    pY = n(938442);
function pX(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e;
    (0, SM.I)(t.id);
    let o = (0, f.cf)([i9.Ay, SH.A, tg.A, SG.A], () => (0, i9.xU)(t, i9.Ay, SH.A, tg.A, SG.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, f.cf)([i9.Ay], () => ({
            canToggleDetection: null == a || i9.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: i9.Ay.isDetectionEnabled(o),
        })),
        c = (0, f.bG)([i9.Ay], () => i9.Ay.getVisibleGame()),
        [g, m] = T.useState(!1),
        A = T.useRef(null),
        E = null != c && (0, i9.Es)(o) === (0, i9.Es)(c),
        h = !s && !g,
        x = !i && !E,
        S = h || x,
        _ = T.useMemo(
            () =>
                (0, hQ.n1)(o)
                    ? r
                        ? o.gameName
                        : U.intl.formatToPlainString(U.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [N, C] = T.useState(_ ?? "???"),
        y = iE()(pY.tR, {
            [pz.LO]: !i,
            [pz.Rw]: i,
            [pz.FB]: null != o && i,
            [pz.xL]: r,
            [pz.fG]: null != l && l.length > 0,
        });
    function b() {
        (SR.Ay.deleteEntry(o),
            l?.forEach((e) => {
                SR.Ay.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? SH.A.getDetectableGame(o.id) : null;
        (td.default.track(I.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, hQ.n1)(o) ? o.gameName : o.name,
        }),
            (0, sI.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("568035"), n.e("627495")]).then(n.bind(n, 651930));
                return (n) =>
                    (0, p.jsx)(t, {
                        ...n,
                        detected: { name: o.name ?? "", gameId: e?.id ?? o.id },
                        onSubmitted: () => m(!0),
                    });
            }));
    }
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)("div", {
                className: y,
                children: [
                    (0, p.jsxs)("div", {
                        className: iE()(pz.$K, pY.Vd),
                        children: [
                            null != o.processGame || (o.verified && !s)
                                ? (0, p.jsxs)("div", {
                                      className: pz.HS,
                                      children: [
                                          (0, p.jsx)("div", { className: pz.mO, children: _ }),
                                          (0, p.jsx)(sE.m, {
                                              text: U.intl.string(U.t["4PJP5p"]),
                                              children: (0, p.jsx)(xk.A, {
                                                  className: pz.qf,
                                                  size: 18,
                                                  color: n6.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, p.jsx)(xO.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: n6.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, p.jsx)("input", {
                                      className: iE()(pz.mO, pz.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: N,
                                      onBlur: function () {
                                          o.name !== N && SR.Ay.editName(o, N);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === sB.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => C(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: n, exePath: s } = o;
                                return (
                                    i || E
                                        ? (e = U.intl.string(U.t.VbV5dv))
                                        : null != n && "" !== n && (e = U.intl.format(U.t["gGeOE+"], { when: n })),
                                    (0, p.jsx)(Q.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: pz.GN,
                                        children: (0, p.jsx)(pB.A, {
                                            hoverText:
                                                null != s && "" !== s
                                                    ? ((t = s.replace(/^file:\/\//i, "")),
                                                      (0, e6.isWindows)() && (t = t.toUpperCase()),
                                                      t)
                                                    : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    S &&
                        (0, p.jsx)(aS.Y, {
                            targetElementRef: A,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, p.jsx)(gD.W, {
                                    navId: "registered-game-overflow-menu",
                                    onSelect: void 0,
                                    onClose: t,
                                    "aria-label": U.intl.string(U.t["UKOtz+"]),
                                    children: (0, p.jsxs)(tn.rX, {
                                        children: [
                                            h &&
                                                (0, p.jsx)(tn.Dr, {
                                                    id: "report",
                                                    label: U.intl.string(U.t["+78Pfm"]),
                                                    action: v,
                                                }),
                                            x &&
                                                (0, p.jsx)(tn.Dr, {
                                                    id: "remove",
                                                    label: U.intl.string(U.t.N86XcP),
                                                    color: "danger",
                                                    action: b,
                                                }),
                                        ],
                                    }),
                                });
                            },
                            children: (e, t) =>
                                (0, p.jsx)("div", {
                                    className: iE()(pz._Q, { [pz.g9]: t.isShown }),
                                    children: (0, p.jsx)(sE.m, {
                                        text: U.intl.string(U.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, p.jsx)(sm.K, {
                                            ...e,
                                            buttonRef: A,
                                            icon: gO.MoreHorizontalIcon,
                                            variant: "icon-only",
                                            size: "sm",
                                            "aria-label": U.intl.string(U.t["UKOtz+"]),
                                        }),
                                    }),
                                }),
                        }),
                    (0, p.jsx)(sE.m, {
                        text: U.intl.string(U.t.QmitzM),
                        asContainer: !0,
                        ariaHidden: !0,
                        children: (0, p.jsx)(sx.I, {
                            checked: o.detectable && u,
                            disabled: !u,
                            onChange: function () {
                                null != l && l.length > 0 && d
                                    ? (0, sI.openModalLazy)(async () => {
                                          let { Modal: e } = await Promise.all([n.e("304823"), n.e("223976")]).then(
                                              n.bind(n, 732955),
                                          );
                                          return (t) =>
                                              (0, p.jsx)(e, {
                                                  ...t,
                                                  title: U.intl.formatToPlainString(U.t.PZ4fKc, { platform: _ }),
                                                  subtitle: U.intl.formatToPlainString(U.t.ZIQbfb, { platform: _ }),
                                                  actions: [
                                                      {
                                                          text: U.intl.string(U.t["ETE/oC"]),
                                                          onClick: () => t.onClose(),
                                                          variant: "secondary",
                                                      },
                                                      {
                                                          text: U.intl.string(U.t.Fmjztz),
                                                          onClick: () => {
                                                              (SR.Ay.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : SR.Ay.toggleDetection(o);
                            },
                            "aria-label": U.intl.string(U.t.QmitzM),
                        }),
                    }),
                ],
            }),
            null != l &&
                l.length > 0 &&
                !i &&
                (0, p.jsx)("div", {
                    className: pz.AQ,
                    children: l.map((e, t) =>
                        (0, p.jsxs)(
                            T.Fragment,
                            {
                                children: [
                                    (0, p.jsx)(pX, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, p.jsx)("div", { className: pz.PQ }),
                                ],
                            },
                            (0, i9.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function pH() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = h1();
    return 0 === e.length
        ? null
        : (0, p.jsx)(Z.B, {
              padding: { bottom: 32 },
              children: (0, p.jsx)(n7.n, {
                  children: (0, p.jsx)("div", {
                      children: e.map((e) =>
                          (0, p.jsx)(
                              pX,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === pF.a7 ? t : void 0 },
                              (0, i9.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let pW = (0, E.E2)(h.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, p.jsx)(pH, {}),
});
var pK = n(424994);
let pZ = (0, E.zZ)(h.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [pW, pw],
    useTitle: () => U.intl.string(U.t.jCOdvx),
    useSubtitle: () =>
        (0, f.bG)([i9.Ay], () => i9.Ay.getGamesSeen(!1).some((e) => !(0, hQ.n1)(e)))
            ? U.intl.format(U.t.KPA3m9, { igdbLink: pK.s8 })
            : U.intl.string(U.t["1yiJwn"]),
});
var pq = n(890497),
    pQ = n(853270),
    p$ = n(969426);
function pJ(e) {
    let { onClose: t } = e,
        n = (0, f.bG)([i9.Ay], () => i9.Ay.getCandidateGames()),
        [i, s] = T.useState(null),
        l = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, p.jsxs)(ap.l, {
        className: iE()(pQ.H, p$.Y_),
        "aria-label": U.intl.string(U.t.GTCx0p),
        children: [
            (0, p.jsx)(pq.Z, {
                selectionMode: "single",
                placeholder: U.intl.string(U.t.XqMe3N),
                value: i,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, p.jsxs)("div", {
                className: iE()(pQ.o, pY.xM),
                children: [
                    (0, p.jsx)(hL.Q, { variant: "secondary", text: U.intl.string(U.t["ETE/oC"]), onClick: t }),
                    (0, p.jsx)(v.$, {
                        variant: "primary",
                        text: U.intl.string(U.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (SR.Ay.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var p0 = n(475007);
function p1() {
    let e = T.useRef(null);
    return (0, p.jsxs)("div", {
        className: iE()(p0.a, E3.Gf),
        children: [
            (0, p.jsx)("span", { children: U.intl.string(U.t.xwhoqM) }),
            (0, p.jsx)(aS.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, p.jsx)(pJ, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, p.jsx)(hL.Q, {
                        ...t,
                        buttonRef: e,
                        variant: "primary",
                        textVariant: "text-sm/medium",
                        text: U.intl.string(U.t.GjgdXe),
                    }),
            }),
        ],
    });
}
function p2() {
    return (0, p.jsx)("div", {
        className: iE()(pY.tR, pz.eS, pz.Rw),
        children: (0, p.jsxs)("div", {
            className: iE()(pz.$K, pY.Vd),
            children: [
                (0, p.jsx)("div", { className: pz.mO, children: U.intl.string(U.t.H68X9x) }),
                (0, p.jsx)(p1, {}),
            ],
        }),
    });
}
let p3 = (0, E.E2)(h.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = h1(),
                n = (0, f.bG)([i9.Ay], () => i9.Ay.getVisibleGame());
            return null == n
                ? (0, p.jsx)(p2, {})
                : (0, p.jsxs)("div", {
                      className: iE()(pY.Vd, pz.C2),
                      children: [
                          (0, p.jsx)(
                              pX,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === pF.a7 ? e : void 0,
                              },
                              (0, i9.Es)(n),
                          ),
                          (0, p.jsx)(p1, {}),
                      ],
                  });
        },
    }),
    p5 = (0, E.zZ)(h.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => U.intl.string(U.t["MY9/Oe"]),
        buildLayout: () => [p3],
    }),
    p4 = (0, E.t_)(h.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => U.intl.string(U.t.AVDyEj),
        buildLayout: () => [p5, pZ],
    }),
    p6 = (0, E.i4)(h.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.AVDyEj),
        icon: pV.GameControllerIcon,
        usePredicate: nb.Pi,
        buildLayout: () => [p4],
    }),
    p8 = (0, E.WI)(h.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => U.intl.string(U.t.BA9200),
        buildLayout: () => [p6, xy, pU, Sx],
    });
var p7 = n(631670),
    p9 = n(619499),
    Te = n(836602),
    Tt = n(591179),
    Tn = n(402860),
    Ti = n(761508),
    Ts = n(159001),
    Tl = n(344346),
    Tr = n(919395),
    Ta = n(68750);
function To(e) {
    let { title: t, children: n } = e;
    return (0, p.jsxs)("div", {
        children: [(0, p.jsx)(N.D, { variant: "text-md/medium", className: Ta.Vf, children: t }), n],
    });
}
function Tu(e) {
    let {
        children: t,
        className: n,
        layoutClassName: i,
        profilePreview: s,
        profilePreviewTitle: l,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, p.jsx)("div", {
        className: iE()(Ta.UA, n),
        children: (0, p.jsxs)("div", {
            className: iE()(Ta.yt, i),
            children: [
                (0, p.jsx)("div", {
                    className: iE()(Ta.Fp, a && Ta.Oz),
                    children: (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsx)(To, { title: l ?? U.intl.string(U.t.Zb06yP), children: s }),
                            null != r ? (0, p.jsx)(To, { title: U.intl.string(U.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, p.jsx)("div", { className: Ta.oB, children: t }),
            ],
        }),
    });
}
var Td = n(986687),
    Tc = n(101058),
    Tg = n(321191),
    Tm = n(696451),
    TA = n(590941);
function TE() {
    return (0, p.jsxs)("div", {
        className: TA.p$,
        children: [
            (0, p.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: TA.Sl }),
            (0, p.jsx)(N.D, { className: TA.h8, variant: "heading-lg/extrabold", children: U.intl.string(U.t.Z1OZCV) }),
            (0, p.jsx)(Q.E, { className: TA.h8, variant: "text-md/normal", children: U.intl.string(U.t.ZSt4Tt) }),
            (0, p.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: TA.h8,
                children: (0, p.jsx)(v.$, {
                    variant: "primary",
                    text: U.intl.string(U.t.jQ3pqt),
                    onClick: function () {
                        ((0, t7.pX)(I.BVt.GUILD_DISCOVERY), (0, tH.default)());
                    },
                }),
            }),
        ],
    });
}
var Th = n(81400),
    Tx = n(450232),
    TS = n(252732),
    Tp = n(355622),
    TT = n(408018),
    Tf = n(479909),
    TI = n(290386),
    T_ = n(941933),
    TN = n(486264);
let TC = (0, tZ.Ld)(),
    Ty = (0, P.createChannelRecord)({ id: "1", type: I.rbe.DM }),
    Tb = (0, tZ.Ld)();
function Tv(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: s,
            placeholder: l,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, TI.U)({ location: "profile_customization_about_me" }),
        [u, d] = T.useState(s ?? r),
        [c, g] = T.useState((0, TT.x7)(u)),
        m = T.useRef(r),
        A = T.useRef(!1);
    return (
        T.useEffect(() => {
            if (m.current !== r) {
                let e = (0, TT.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        T.useEffect(() => {
            void 0 !== s || u === r || A.current || (d(r), g((0, TT.x7)(r)));
        }, [s, r, u]),
        (0, p.jsxs)(am.A, {
            title: t,
            titleId: TC,
            description: U.intl.string(U.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, p.jsx)(Tf.Ay, {
                    "aria-describedby": Tb,
                    "aria-labelledby": TC,
                    className: TN.i,
                    innerClassName: TN.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: l,
                    channel: Ty,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: T_.y,
                    type: Tp.oU.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        A.current = !1;
                    },
                    onFocus: () => {
                        A.current = !0;
                    },
                    focused: A.current,
                    onSubmit: function () {
                        return new Promise((e) => {
                            e({ shouldClear: !1, shouldRefocus: !0 });
                        });
                    },
                }),
                (0, p.jsx)(sh.A, { id: Tb, children: U.intl.format(U.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var Tj = n(821956),
    TO = n(562819),
    TL = n(84540),
    TR = n(467690);
function TD(e) {
    let { user: t, guild: n, className: i, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, ez.Ay)(),
        o = (0, Tr.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, Tr.CP)(n?.id),
        c = r ? cz.wL : l3.$n;
    return (0, p.jsx)(am.A, {
        className: i,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, p.jsxs)("div", {
            className: TR.NC,
            children: [
                (0, p.jsx)(c, {
                    size: l3.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TO.L)({ analyticsLocations: a, guild: n });
                    },
                    className: iE()({ [TR.yj]: r }),
                    children: U.intl.string(U.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TR.DT,
                        children: (0, p.jsx)(v.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, Tj.uZ)(t, n) ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t.OrokWm),
                            onClick: function () {
                                (0, TL.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TP = n(339984),
    TG = n(942132);
let TM = [{ name: "gif", extensions: ["gif"] }];
function TU(e) {
    let {
            showRemoveAvatarButton: t,
            errors: n,
            onAvatarChange: i,
            sectionTitle: s,
            changeAvatarButtonText: l,
            guildId: r,
            className: a,
            disabled: o = !1,
            isTryItOut: u = !1,
            forcedDivider: d,
            withHighlight: c = !1,
        } = e,
        { newestAnalyticsLocation: g } = (0, ez.Ay)(),
        m = c ? cz.wL : l3.$n,
        A = T.useCallback(() => {
            (0, TS.XD)({
                uploadType: TP.HL.AVATAR,
                analyticsSource: g,
                filters: u ? TM : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, p.jsx)(am.A, {
        className: a,
        title: s,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, p.jsxs)("div", {
            className: TG.NC,
            children: [
                (0, p.jsx)(m, {
                    className: iE()({ [TG.yj]: c }),
                    size: l3.$n.Sizes.SMALL,
                    onClick: A,
                    children: l ?? U.intl.string(U.t["4OynCD"]),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TG.DT,
                        children: (0, p.jsx)(v.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != r ? U.intl.string(U.t.TDjKDm) : U.intl.string(U.t.twB3fz),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var TV = n(248778),
    Tk = n(810188);
function Tw(e) {
    let { user: t, guildId: n, className: i } = e,
        s = af.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, ez.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, Tr.B0)(t, n),
        d = (0, TV.u)("DisplayNameStylesSection"),
        [c, g] = (0, mb.kn)(d ? [eA.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eA.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        A = (0, T.useCallback)(() => {
            (g(mM.i.TAKE_ACTION),
                td.default.track(I.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eY.L)({ analyticsLocations: l, guildId: n }));
        }, [l, n, g]),
        E = (0, T.useCallback)(() => {
            ((0, TL.p)({ displayNameStyles: null }), td.default.track(I.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        h = (0, T.useCallback)(() => {
            (0, TL.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        x = void 0 !== o ? o : null != n ? a : r;
    return (0, p.jsx)(am.A, {
        title: U.intl.string(eX.default["86GtGH"]),
        titleBadge: m
            ? (0, p.jsx)("div", { className: Tk.A, children: (0, p.jsx)(m1.E, { type: "new", variant: "primary" }) })
            : void 0,
        className: i,
        showPremiumIcon: s,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: Tk.N,
            children: [
                (0, p.jsx)(v.$, { variant: "primary", size: "sm", text: U.intl.string(eX.default.vJqrIg), onClick: A }),
                null == n &&
                    null != x &&
                    (0, p.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: U.intl.string(eX.default.ymq8WQ),
                        onClick: E,
                    }),
                null != n &&
                    null != x &&
                    (0, p.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: U.intl.string(eX.default["j/KRxc"]),
                        onClick: h,
                    }),
            ],
        }),
    });
}
var TF = n(637193),
    TB = n(622410);
function Tz(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: s } = (0, ez.Ay)(),
        l = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, Tr.rv)(t, n?.id),
        d = T.useCallback(() => {
            (0, TF.p)({ analyticsLocations: s, guildId: n?.id });
        }, [s, n?.id]),
        c = T.useCallback(() => {
            (0, TL.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, p.jsx)(am.A, {
        title: U.intl.string(U.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: TB.u,
            children: [
                (0, p.jsx)(v.$, { variant: "primary", size: "sm", text: U.intl.string(U.t.BwdeM1), onClick: d }),
                (void 0 === o ? (l ? a : r) != null : null != o) &&
                    (0, p.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: l ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var TY = n(88524);
function TX(e) {
    let {
            showRemoveBannerButton: t,
            errors: n,
            onBannerChange: i,
            guildId: s,
            className: l,
            disabled: r = !1,
            showPremiumIcon: a = !0,
            isTryItOut: o = !1,
            forcedDivider: u,
            withHighlight: d = !1,
        } = e,
        { newestAnalyticsLocation: c } = (0, ez.Ay)(),
        g = d ? cz.wL : l3.$n;
    return (0, p.jsx)(am.A, {
        className: l,
        title: U.intl.string(U.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, p.jsxs)("div", {
            className: TY.NC,
            children: [
                (0, p.jsx)(g, {
                    className: iE()({ [TY.yj]: d }),
                    size: l3.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, TS.XD)({ uploadType: TP.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: U.intl.string(U.t.N0bC3P),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TY.DT,
                        children: (0, p.jsx)(v.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != s ? U.intl.string(U.t.jHlJNS) : U.intl.string(U.t.tT9n7D),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var TH = n(617061),
    TW = n(625613);
function TK(e) {
    let {
            user: t,
            guild: n,
            initialSelectedEffect: i,
            className: s,
            sectionTitle: l,
            forcedDivider: r = !1,
            withTutorial: a = !1,
            showBorder: o = !1,
        } = e,
        { analyticsLocations: u } = (0, ez.Ay)(),
        d = af.Ay.canUsePremiumProfileCustomization(t),
        c = (0, Tr.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, Tr.nZ)(n?.id);
    T.useEffect(() => {
        d &&
            (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tJ.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tq.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tQ.uq)(tJ.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let A = a ? cz.wL : l3.$n;
    return (0, p.jsx)(am.A, {
        forcedDivider: r,
        borderType: dz.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: m,
        className: s,
        children: (0, p.jsxs)("div", {
            className: TW.NC,
            children: [
                (0, p.jsx)(A, {
                    size: l3.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TH.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: iE()({ [TW.yj]: a }),
                    children: U.intl.string(U.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TW.DT,
                        children: (0, p.jsx)(v.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t.uMuafO),
                            onClick: function () {
                                (0, TL.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TZ = n(515727),
    Tq = n(594401);
function TQ(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: s } = (0, ez.Ay)(),
        l = (0, Tr.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, Tr.Tu)(n?.id),
        [o, u] = (0, mb.kn)([eA.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eA.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, p.jsx)(am.A, {
        showBorder: d,
        borderType: d ? dz.i.NEW_UPSELL : dz.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d
            ? (0, p.jsx)("div", { className: Tq.Ad, children: (0, p.jsx)(m1.E, { type: "new", variant: "primary" }) })
            : void 0,
        description: d ? U.intl.string(U.t.yMoMAt) : void 0,
        errors: a,
        children: (0, p.jsxs)("div", {
            className: Tq.NC,
            children: [
                (0, p.jsx)(v.$, {
                    variant: "primary",
                    size: "sm",
                    text: U.intl.string(U.t["9/hmle"]),
                    onClick: function () {
                        ((0, TZ.w)({ analyticsLocations: s, guild: n }), u(mM.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != l : null != r) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tq.DT,
                        children: (0, p.jsx)(v.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t.nQBruk),
                            onClick: function () {
                                (0, TL.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var T$ = n(602853),
    TJ = n(654107),
    T0 = n(999291),
    T1 = n(101928),
    T2 = n(819169),
    T3 = n(317097),
    T5 = n(508274),
    T4 = n(379012);
function T6(e) {
    let {
            onChange: t,
            onClose: n,
            color: i,
            suggestedColors: s,
            disabled: l,
            label: r,
            colorPickerMiddle: a,
            colorPickerFooter: o,
            showEyeDropper: u,
        } = e,
        d = T.useRef(null),
        c = (0, T$.r)(n6.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = n6.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, TS.sN)(i),
        A = (0, T3.Hl)(i),
        E = A === c ? g : A,
        h = m ? n6.A.unsafe_rawColors.WHITE.css : n6.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, T2.A)(a),
        S = (0, T2.A)(o),
        [f, _] = T.useState((0, oy.A)());
    return (
        T.useEffect(() => {
            (x !== a || S !== o) && _((0, oy.A)());
        }, [o, a, S, x]),
        (0, p.jsx)(aS.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, p.jsx)(T5.VN, {
                    ...e,
                    value: i,
                    onChange: t,
                    suggestedColors: s,
                    middle: a,
                    footer: o,
                    showEyeDropper: u,
                }),
            onRequestClose: n,
            children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, p.jsxs)("div", {
                    ref: d,
                    className: iE()(T4.oP, { [T4.r9]: l }),
                    children: [
                        (0, p.jsx)(n9.D, {
                            ...n,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? I.tEg : t,
                            style: { backgroundColor: A, borderColor: E },
                            className: T4.nf,
                            "aria-label": U.intl.string(U.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, p.jsx)(aT.PencilIcon, {
                                size: "custom",
                                className: T4.BW,
                                width: 14,
                                height: 14,
                                color: h,
                            }),
                        }),
                        r,
                    ],
                });
            },
        })
    );
}
var T8 = n(190377);
function T7(e) {
    let {
            user: t,
            pendingAvatarSrc: n,
            pendingColors: i,
            onThemeColorsChange: s,
            preventDisabled: l,
            guildId: r,
            className: a,
            showPremiumIcon: o = !0,
            showResetThemeButton: u = !1,
            forcedDivider: d,
        } = e,
        c = (0, T0.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, T1.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        A = af.Ay.canUsePremiumProfileCustomization(t),
        E = null != n ? n : t.getAvatarURL(r, 80),
        h = (0, T$.r)(n6.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = (0, TJ.rh)(E, h, !1);
    return null == g || null == m
        ? null
        : (0, p.jsx)(am.A, {
              title: U.intl.string(U.t.DMeO2X),
              disabled: !A && !l,
              className: iE()(T8.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, p.jsxs)("div", {
                  className: T8.hd,
                  children: [
                      (0, p.jsx)("div", {
                          className: T8.YX,
                          children: (0, p.jsx)(T6, {
                              onChange: (e) => s([e, m]),
                              color: g,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, p.jsx)(Q.E, {
                                  className: T8.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: U.intl.string(U.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, p.jsx)("div", {
                          className: T8.YX,
                          children: (0, p.jsx)(T6, {
                              onChange: (e) => s([g, e]),
                              color: m,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, p.jsx)(Q.E, {
                                  className: T8.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: U.intl.string(U.t["8elvy6"]),
                              }),
                          }),
                      }),
                      u &&
                          null != r &&
                          (0, p.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: T8.WA,
                              children: (0, p.jsx)(v.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: U.intl.string(U.t["L+GmoR"]),
                                  onClick: () => s([null, null]),
                              }),
                          }),
                  ],
              }),
          });
}
function T9(e) {
    let {
            sectionTitle: t,
            errors: n,
            onPronounsChange: i,
            pendingPronouns: s,
            placeholder: l,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, tZ.GV)();
    return (0, p.jsx)(am.A, {
        title: t,
        titleId: o,
        errors: n,
        disabled: a,
        children: (0, p.jsx)(s_.k, {
            "aria-labelledby": o,
            placeholder: l ?? U.intl.string(U.t.NPEUUu),
            maxLength: 40,
            value: s ?? r,
            onChange: function (e) {
                i(e === r ? void 0 : e);
            },
            disabled: a,
            spellCheck: !1,
        }),
    });
}
var fe = n(684732),
    ft = n(576705),
    fn = n(931175);
function fi(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: s, user: l, guild: r } = e,
        a = (0, f.bG)([ft.A], () => ft.A.can(I.xBc.CHANGE_NICKNAME, r) || ft.A.can(I.xBc.MANAGE_NICKNAMES, r)),
        o = (0, xB.L)(tJ.PremiumTypes.TIER_2);
    return (0, p.jsxs)(am.A, {
        title: U.intl.string(U.t.me1lRk),
        errors: t,
        children: [
            (0, p.jsx)(s_.k, {
                value: n ?? i ?? "",
                placeholder: s,
                maxLength: I.d0r,
                onChange: function (e) {
                    (0, TL.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : U.intl.string(U.t.gzjxQi),
            }),
            o && (0, p.jsx)(Tw, { user: l, guildId: r.id, className: fn.F }),
        ],
    });
}
var fs = n(233454);
let fl = "/assets/b25da78aa7949feb.png";
function fr(e) {
    let { user: t, showOverlay: n, children: i } = e,
        s = (0, ct.Ay)(),
        { analyticsLocations: l } = (0, ez.Ay)(tw.A.PREMIUM_UPSELL_OVERLAY);
    return (T.useEffect(() => {
        n &&
            (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: tJ.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            }),
            (0, tq.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, l, () =>
                (0, tQ.uq)(tJ.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE),
            ));
    }, [n, l]),
    n)
        ? (0, p.jsxs)("div", {
              className: fs.ry,
              children: [
                  (0, p.jsx)("div", { children: i }),
                  (0, p.jsxs)("div", {
                      className: fs.Wc,
                      children: [
                          (0, p.jsx)("img", {
                              className: fs.Tn,
                              alt: U.intl.string(U.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case I.NJ8.ASH:
                                      case I.NJ8.DARK:
                                      case I.NJ8.ONYX:
                                          return fl;
                                      case I.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return fl;
                                  }
                              })(s),
                          }),
                          (0, p.jsxs)("div", {
                              className: fs._9,
                              children: [
                                  (0, p.jsx)(Q.E, {
                                      variant: "text-lg/semibold",
                                      color: "text-overlay-light",
                                      children: U.intl.string(U.t.dMaDFX),
                                  }),
                                  (0, p.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-overlay-light",
                                      children: U.intl.string(U.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, p.jsx)(dB.A, {
                              size: l3.$n.Sizes.LARGE,
                              color: l3.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: af.Ay.isPremium(t)
                                      ? U.intl.string(U.t.AfRWI8)
                                      : U.intl.string(U.t.nkdUym),
                              },
                              subscriptionTier: tJ.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : i;
}
var fa = n(203164);
function fo() {
    let e = (0, f.bG)([lf.default], () => {
            let e = lf.default.getCurrentUser();
            return (th()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, xB.L)(tJ.PremiumTypes.TIER_2),
        n = (0, f.bG)([Te.A, sL.A], () => sL.A.getGuild(Te.A.selectedGuildId));
    th()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, f.cf)([Te.A], () => ({ ...Te.A.getPendingChanges(n.id), errors: Te.A.getErrors(n.id) })),
        d = (0, Tc.V7)({ userId: e.id, image: i }),
        c = (0, Th.EC)(n.id),
        g = (0, f.bG)([Tm.Ay], () => (null == n.id ? null : Tm.Ay.getMember(n.id, e.id))),
        m = (0, f.bG)([Tg.A], () => Tg.A.getGuildMemberProfile(e.id, n.id)),
        A = af.Ay.canUsePremiumProfileCustomization(e),
        E = (0, Tr.z5)(i, g?.avatar),
        h = (0, Tr.Ac)(l, m?.banner),
        x = (0, fe.l)(o, m?.themeColors),
        S = m?.bio ?? "",
        T = m?.pronouns ?? "";
    return (0, p.jsxs)("div", {
        className: fa.Q,
        children: [
            (0, p.jsx)(
                fi,
                {
                    errors: u?.nick ?? c?.nick,
                    username: uD.Ay.getName(e),
                    pendingNick: s,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, p.jsx)(
                T9,
                {
                    sectionTitle: U.intl.string(U.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, TL.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: T,
                },
                "pronouns",
            ),
            (0, p.jsxs)(fr, {
                user: e,
                showOverlay: !A,
                children: [
                    (0, p.jsx)(
                        TU,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [U.intl.string(U.t.lqaIxI), (0, p.jsx)(Tx.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: E,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, TS.rM)(e, g?.avatar, (e) => (0, TL.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !A,
                        },
                        "avatar",
                    ),
                    (0, p.jsx)(
                        TD,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [U.intl.string(U.t["7v0T9P"]), (0, p.jsx)(Tx.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, p.jsx)(Tw, { user: e, guildId: n.id }),
                    (0, p.jsx)(
                        Tz,
                        { user: e, guild: n, titleIcon: (0, p.jsx)(Tx.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, p.jsx)(
                        TK,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [U.intl.string(U.t.wR5wOo), (0, p.jsx)(Tx.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, p.jsx)(
                        TQ,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [U.intl.string(U.t.GWrZOd), (0, p.jsx)(Tx.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, p.jsx)(
                        TX,
                        {
                            showRemoveBannerButton: h,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, TS.rM)(e, m?.banner, (e) => (0, TL.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !A,
                        },
                        "banner",
                    ),
                    (0, p.jsx)(T7, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, TL.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: x,
                    }),
                    (0, p.jsx)(
                        Tv,
                        {
                            placeholder: U.intl.string(U.t["/7NKgv"]),
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [U.intl.string(U.t.ZzAR2Y), (0, p.jsx)(Tx.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, TL.p)({ guildId: n.id, bio: e }),
                            errors: u?.bio ?? c?.bio,
                            pendingBio: r,
                            currentBio: S,
                            disabled: !A,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var fu = n(832131);
function fd(e) {
    (0, sI.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, p.jsx)(t, { source: { ...e, page: I.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function fc(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(tw.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, f.bG)([lf.default], () => {
            let e = lf.default.getCurrentUser();
            return (th()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        l = (0, f.bG)([Tm.Ay], () => (null != t ? Tm.Ay.getMember(t.id, s.id) : null)),
        r = (0, f.bG)([Tg.A], () => !Tg.A.isFetchingProfile(s.id, t?.id)),
        a = (0, f.bG)([tu.A], () => tu.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, f.cf)([Te.A], () => Te.A.getPendingChanges(t?.id)),
        c = (0, Tc.V7)({ userId: s.id, image: o }),
        g = (0, Tr.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, Tr.B0)(s, t?.id);
    return (T.useEffect(() => Ts.IM, []), a)
        ? (0, p.jsx)(oh.A, {})
        : r
          ? (0, p.jsxs)(ez.f5, {
                value: i,
                children: [
                    (0, p.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        children: U.intl.format(U.t["/PTB2E"], {
                            helpCenterLink: eC.A.getArticleURL(I.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(ag.A, { guildId: t.id, onChange: n }),
                                  (0, p.jsx)(Tu, {
                                      profilePreviewTitle: (0, p.jsx)(N.D, {
                                          variant: "heading-md/medium",
                                          className: fu.YV,
                                          children: U.intl.formatToPlainString(U.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, p.jsx)(Td.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: af.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: fd,
                                          containerClassName: fu.ti,
                                      }),
                                      nameplatePreview: (0, p.jsx)(Tl.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? fu.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, p.jsx)(fo, {}),
                                  }),
                              ],
                          })
                        : (0, p.jsx)(TE, {}),
                ],
            })
          : (0, p.jsx)(oC.y, {});
}
var fg = n(903209),
    fm = n(641130);
function fA(e) {
    let { children: t, notice: n } = e;
    return (0, p.jsxs)("div", { className: fm.r, children: [n, (0, p.jsx)("div", { children: t })] });
}
var fE = n(823092),
    fh = n(815996),
    fx = n(379197),
    fS = n(488430),
    fp = n(457421),
    fT = n(940622),
    ff = n(559474),
    fI = n(757993);
let f_ = function () {
    let e,
        t,
        n,
        i,
        { analyticsLocations: s } = (0, ez.Ay)(tw.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        l = T.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, fT.mb)(ff.RN.UPSELL_BANNER)),
        (t = (0, fT.mb)(ff.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, f.bG)([fp.A], () => fp.A.getMarketingBySurface(fx.R.EDIT_PROFILE_SETTINGS))),
        (i = T.useMemo(
            () =>
                null != n
                    ? n
                    : {
                          asset: "/assets/30e2c68819facd98.png",
                          popoutAsset: "/assets/c6d55507d7473057.png",
                          title: U.intl.string(U.t.QZVVBh),
                          body: U.intl.string(U.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [n],
        )),
        T.useMemo(
            () => ({ ...i, type: fS.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, fE.L_)();
    return (
        T.useEffect(() => {
            (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tJ.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            }),
                (0, tq.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, s, () =>
                    (0, tQ.uq)(tJ.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
                ));
        }, [s, d]),
        (0, p.jsxs)("div", {
            ref: l,
            className: fI.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, p.jsx)("div", {
                    className: fI.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, p.jsx)("img", { src: a, className: fI.Qw, alt: "" }),
                }),
                (0, p.jsxs)("div", {
                    className: fI.Em,
                    children: [
                        (0, p.jsx)(N.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: fI.DD,
                            children: o,
                        }),
                        (0, p.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, p.jsx)(v.$, {
                    onClick: function () {
                        g(() =>
                            (0, fh.Cz)({
                                analyticsLocations: s,
                                analyticsSource: tw.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                            }),
                        );
                    },
                    variant: "overlay-primary",
                    text: U.intl.string(U.t.fYfGgK),
                }),
            ],
        })
    );
};
var fN = n(451909),
    fC = n(202639),
    fy = n(285373),
    fb = n(835071),
    fv = n(724651),
    fj = n(732280),
    fO = n(590180),
    fL = n(898461),
    fR = n(469054),
    fD = n(601298),
    fP = n(207803),
    fG = n(461797);
let fM = Object.keys(fG.jB);
function fU(e) {
    let t = null == e ? fM : fM.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var fV = n(518293),
    fk = n(221650);
function fw(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion),
        s = (0, fV.Xf)({ useReducedMotion: i }),
        { name: l, header: r } = T.useMemo(() => {
            let e = (0, fG.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, p.jsxs)("div", {
        className: fk.kL,
        children: [
            (0, p.jsx)(n9.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                className: fk.x6,
                "aria-label": U.intl.string(U.t["44yJxh"]),
                children: s.render(),
            }),
            (0, p.jsxs)(n9.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                "aria-label": `${l}: ${U.intl.string(U.t["44yJxh"])}`,
                className: fk.Lt,
                children: [
                    (0, p.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: fk.L_ }),
                    (0, p.jsx)(Q.E, {
                        className: fk._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: l,
                    }),
                ],
            }),
        ],
    });
}
var fF = n(511484),
    fB = n(811611),
    fz = n(206697),
    fY = n(507553);
function fX(e, t) {
    let n = fY.A.useField("scrollPosition"),
        i = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion);
    (0, T.useEffect)(() => {
        let s = e.current;
        if (null == s || n !== t) return;
        let l = requestAnimationFrame(() => {
            (s.scrollIntoView({ behavior: i ? "auto" : "smooth" }), fY.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, n, i]);
}
var fH = n(844222),
    fW = n(842092);
let fK = "/assets/d4955aabdcb5bdee.png",
    fZ = { assetOrigin: fR.E.NEW_ASSET, imageUri: fK, staticImageUri: fK, description: "", originalAsset: void 0 };
function fq(e) {
    let { user: t } = e,
        { reducedMotion: n } = T.useContext(fH.C),
        {
            pendingAvatar: i,
            pendingBanner: s,
            pendingAvatarDecoration: l,
            pendingProfileEffect: r,
            pendingDisplayNameStyles: a,
            pendingThemeColors: o,
            pendingPronouns: u,
            pendingBio: d,
            tryItOutThemeColors: c,
            tryItOutAvatar: g,
            tryItOutBanner: m,
            tryItOutAvatarDecoration: A,
            tryItOutDisplayNameStyles: E,
        } = (0, f.cf)([Te.A], () => {
            let e = Te.A.getPendingChanges(),
                t = Te.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        h = (0, Tc.V7)({ userId: t.id, image: g ?? i });
    return (0, p.jsx)(Td.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? s ?? fZ,
        pendingDisplayNameStyles: E ?? a,
        pendingAvatar: h,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== A ? A : l,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : fW.WX,
        containerClassName: fW.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var fQ = n(829497);
function f$(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        s = af.Ay.isPremium(t),
        l = af.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, f.cf)([Te.A], () => {
            let e = Te.A.getPendingChanges(),
                t = Te.A.getErrors(),
                n = Te.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, T.useState)(fU()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: s,
                    displayNameStyles: l,
                } = (0, T.useMemo)(() => {
                    let t = (0, fG.Wt)(e);
                    return {
                        banner: (0, fD.X)({
                            assetOrigin: fR.E.NEW_ASSET,
                            imageUri: t.getBannerSrc(!1),
                            staticImageUri: t.getBannerSrc(!0),
                            description: t.getBannerAltText(),
                            originalAsset: void 0,
                        }),
                        themeColors: t.themeColorsLegacy,
                        avatarDecorationSkuId: t.avatarDecorationSkuId,
                        displayNameStyles: t.displayNameStyles,
                    };
                }, [e]),
                r = (0, f.bG)([fO.A], () => {
                    let e = fO.A.getProduct(s);
                    return (0, fL.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, T.useEffect)(() => {
                (0, fP.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: l });
            }, [n, i, r, l]);
            let a = (0, T.useCallback)(() => {
                let n = fU(e);
                (t(n), td.default.track(I.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = T.useRef(null);
    fX(m, eO._F.TRY_IT_OUT);
    let { analyticsLocations: A, sourceAnalyticsLocations: E } = (0, ez.Ay)(tw.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function h(e) {
        e && ((0, fz.T)(), td.default.track(I.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    T.useEffect(() => {
        n &&
            (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tJ.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: I.liQ.USER_SETTINGS },
                location_stack: E,
            }),
            (0, tq.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, E, () => (0, tQ.uq)(tJ.e.PREMIUM_PROFILE_TRY_IT_OUT)));
    }, [E, t, n]);
    let x = (0, fj.V)()?.subscriptionTrial?.skuId === tJ.pe.TIER_2,
        S = (0, fv.O)(),
        _ = (0, fF.U9)(S, tJ.pe.TIER_2);
    return i
        ? (0, p.jsx)(ez.f5, {
              value: A,
              children: (0, p.jsxs)(dz.A, {
                  ref: m,
                  className: fQ.MT,
                  type: dz.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, p.jsx)(Tu, {
                          stickyPreview: !1,
                          layoutClassName: fQ.th,
                          profilePreviewTitle: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(ad.t, { size: "md", color: "currentColor", className: fQ.PC }),
                                  U.intl.string(U.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, p.jsxs)(p.Fragment, {
                              children: [(0, p.jsx)(fw, { preset: c, onShuffle: g }), (0, p.jsx)(fq, { user: t })],
                          }),
                          children: (0, p.jsxs)("div", {
                              children: [
                                  (0, p.jsxs)("div", {
                                      children: [
                                          (0, p.jsx)(N.D, {
                                              variant: "heading-xl/extrabold",
                                              children: U.intl.string(U.t["2zGdAW"]),
                                          }),
                                          (0, p.jsx)(Q.E, {
                                              className: fQ.h_,
                                              variant: "text-sm/normal",
                                              children: U.intl.string(U.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsx)(T7, {
                                      className: fQ.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Tc.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: fP.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, p.jsx)(TX, {
                                      className: fQ.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: fP.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, p.jsx)(TU, {
                                          className: fQ.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: fP.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: U.intl.string(U.t["7z0D1c"]),
                                          sectionTitle: U.intl.string(U.t.vtFfPX),
                                      }),
                                  (0, p.jsx)(Tw, { user: t, className: fQ.fz }),
                                  !x &&
                                      (0, p.jsx)(Q.E, {
                                          variant: "text-sm/normal",
                                          children: U.intl.string(U.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !x &&
                          (0, p.jsx)(fC.d, {
                              onSubscribeModalClose: h,
                              className: fQ.Kv,
                              showUpsell: !0,
                              text: U.intl.format(U.t.TmfgI2, {
                                  onClick: () => {
                                      (0, fb.K)({ onSubscribeFinish: h });
                                  },
                              }),
                              button: s
                                  ? U.intl.string(U.t.AfRWI8)
                                  : _
                                    ? U.intl.formatToPlainString(U.t.bkQ4bH, { percent: S?.discount.amount })
                                    : U.intl.string(U.t.pj0XBN),
                              position: "inline",
                          }),
                      x &&
                          (0, p.jsxs)("div", {
                              children: [
                                  (0, p.jsx)("div", { className: fQ.BU }),
                                  (0, p.jsx)(fB.Ay, {
                                      type: tJ.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: tJ.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var fJ = n(814390),
    f0 = n(643056),
    f1 = n(843282),
    f2 = n(145497),
    f3 = n(685073),
    f5 = n(534400),
    f4 = n(581781),
    f6 = n(743981),
    f8 = n(195801);
let f7 = (0, tZ.Ld)(),
    f9 = T.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            s = (0, f.cf)([lf.default], () => (0, f3.Zo)(lf.default.getCurrentUser()?.primaryGuild)),
            l = void 0 !== n ? n : (s.guildId ?? null),
            r = T.useMemo(() => {
                let e = new Map();
                for (let n of t)
                    n.profile?.tag != null &&
                        e.set(n.id, {
                            id: n.id,
                            name: n.name,
                            icon: n.icon,
                            tag: n.profile.tag,
                            badge: n.profile.badge ?? void 0,
                        });
                let { guildId: n, tag: i, badge: r } = s;
                return (
                    null == n ||
                        null == i ||
                        n !== l ||
                        e.has(n) ||
                        e.set(n, { id: n, name: U.intl.string(U.t.dtwqPR), icon: null, tag: i, badge: r }),
                    e
                );
            }, [t, s, l]),
            a = T.useMemo(() => Array.from(r.values(), (e) => ({ label: e.name, value: e.id })), [r]),
            o = T.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, p.jsx)(f4.A, {
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              guildIconSize: 32,
                          });
                },
                [r],
            ),
            u = T.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, p.jsx)(f2.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [r],
            ),
            d = T.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, p.jsx)(f5.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: f6.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [r],
            ),
            c = T.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, p.jsx)(p.Fragment, { children: o(t) });
                },
                [o],
            ),
            g = T.useCallback(
                (e) => {
                    i?.(e);
                },
                [i],
            ),
            m = T.useCallback((e) => e === l, [l]),
            A = T.useCallback((e) => e, []),
            E = T.useCallback(() => {
                i?.(null);
            }, [i]),
            h = T.useRef(null);
        return (
            fX(h, eO._F.GUILD_TAG),
            (0, p.jsxs)(am.A, {
                title: U.intl.string(U.t.Pdd1nd),
                titleId: f7,
                ref: h,
                children: [
                    (0, p.jsx)(Q.E, {
                        className: f8.VA,
                        variant: "text-sm/normal",
                        children: U.intl.string(U.t.mlZ6Jx),
                    }),
                    (0, p.jsx)(f1.Pw, {
                        className: f8.Lt,
                        optionClassName: f8.S0,
                        isSelected: m,
                        options: a,
                        select: g,
                        renderLeading: u,
                        renderTrailing: d,
                        renderOptionValue: c,
                        serialize: A,
                        clear: E,
                        clearable: null != l,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
var Ie = n(318785),
    It = n(470739);
let In = function () {
    return (0, f0.d)({ location: "UserSettingsProfileCustomization" })
        ? (0, p.jsx)(am.A, {
              title: U.intl.string(U.t.l6w3Vj),
              description: U.intl.string(U.t.joHqdj),
              children: (0, p.jsx)(v.$, {
                  text: U.intl.string(U.t.wRraFx),
                  onClick: () => {
                      (0, It.openBadgeDirectoryModal)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var Ii = n(953726);
let Is = (0, tZ.Ld)();
function Il(e) {
    let t = (0, xB.L)(tJ.PremiumTypes.TIER_2);
    return (0, p.jsxs)(am.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: U.intl.string(U.t["9AjdkD"]),
        titleId: Is,
        children: [
            (0, p.jsx)("div", {
                children: (0, p.jsx)(s_.k, {
                    "aria-labelledby": Is,
                    placeholder: e.placeholder,
                    maxLength: I.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, p.jsx)(Tw, { user: e.user, className: Ii.F }),
        ],
    });
}
var Ir = n(376626);
function Ia(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = M.m$.useSetting(),
        s = void 0 !== n ? n : i;
    return (0, p.jsx)("div", {
        className: Ir.u,
        children: (0, p.jsx)(t8.d, {
            label: U.intl.string(U.t["3cWDuO"]),
            description: s ? null : U.intl.formatToPlainString(U.t.aYhclf, { username: t }),
            checked: !s,
            onChange: (e) => {
                !e === i ? (0, p7._e)() : (0, TL.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function Io(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, T$.r)(n6.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, TJ.rh)(l, r, !1),
        o = (0, T3.LX)(a[0]);
    return (0, p.jsx)(am.A, {
        title: U.intl.string(U.t["/X3fkf"]),
        children: (0, p.jsx)(T6, { onChange: (e) => s(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var Iu = n(518477);
let Id = function () {
    let e = (0, f.bG)([d1.default], () => d1.default.getId());
    return (0, p.jsx)(am.A, {
        title: U.intl.string(U.t.Jzj9q4),
        children: (0, p.jsx)(v.$, {
            text: U.intl.string(U.t.Geikwq),
            onClick: () => {
                (0, Tn.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tw.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: Iu.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var Ic = n(654910);
function Ig() {
    let e = (0, f.bG)([lf.default], () => {
            let e = lf.default.getCurrentUser();
            return (th()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, f.bG)([Tg.A], () => Tg.A.getUserProfile(e.id)),
        n = (0, f0.d)({ location: "DefaultCustomizationSections" }),
        {
            pendingAvatar: i,
            pendingGlobalName: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingAccentColor: o,
            pendingThemeColors: u,
            pendingLegacyUsernameDisabled: d,
            pendingPrimaryGuildId: c,
            errors: g,
        } = (0, f.cf)([Te.A], () => {
            let e = Te.A.getPendingChanges(),
                t = Te.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, Tc.V7)({ userId: e.id, image: i }),
        A = (0, Th.EC)(),
        E = af.Ay.canUsePremiumProfileCustomization(e),
        h = (0, Tr.z5)(i, e.avatar),
        x = (0, Tr.Ac)(l, t?.banner),
        S = (0, T0.Ay)(e.id),
        T = S?.getLegacyUsername(),
        I = (g.global_name?.length ?? 0) > 0 ? g.global_name : (A?.nick ?? []),
        _ = (g.bio?.length ?? 0) > 0 ? g.bio : (A?.bio ?? []),
        N = (0, Ie.b)(),
        C = null != (0, f3.Zo)(e.primaryGuild).guildId;
    return (0, p.jsxs)("div", {
        className: Ic.Q,
        children: [
            (0, p.jsx)(Il, {
                placeholder: e.username,
                errors: I,
                currentGlobalName: e.globalName,
                pendingGlobalName: s,
                onGlobalNameChange: (e) => (0, TL.p)({ globalName: e }),
                user: e,
            }),
            (0, p.jsx)(
                T9,
                {
                    sectionTitle: U.intl.string(U.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, TL.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, p.jsx)(Id, {}),
            (0, p.jsx)(
                TU,
                {
                    onAvatarChange: (e) => {
                        ((0, TL.p)({ avatar: e }), (0, Tr.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: h,
                    errors: g.avatar,
                    sectionTitle: U.intl.string(U.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, p.jsx)(TD, { user: e, sectionTitle: U.intl.string(U.t["7v0T9P"]) }, "decoration"),
            (0, p.jsx)(Tz, { user: e }),
            (0, p.jsx)(TK, { user: e, sectionTitle: U.intl.string(U.t.wR5wOo) }, "effect"),
            (0, p.jsx)(TQ, { user: e, sectionTitle: U.intl.string(U.t.GWrZOd) }, "frame"),
            E
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(
                              TX,
                              {
                                  showRemoveBannerButton: x,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, TL.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, p.jsx)(T7, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, TL.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, p.jsx)(
                      Io,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, TL.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, p.jsx)(
                Tv,
                {
                    sectionTitle: U.intl.string(U.t.ZzAR2Y),
                    errors: _,
                    onBioChange: (e) => (0, TL.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (N.length > 0 || C) &&
                (0, p.jsx)(f9, {
                    availablePrimaryGuilds: N,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, TL.p)({ primaryGuildId: e }),
                }),
            null != T &&
                !n &&
                (0, p.jsx)(Ia, { legacyUsername: T, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, p.jsx)(In, {}, "badges"),
        ],
    });
}
function Im() {
    (0, sI.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("935205"), n.e("766901"), n.e("641704")]).then(n.bind(n, 562011));
        return (t) =>
            (0, p.jsx)(e, {
                ...t,
                source: {
                    page: I.liQ.USER_SETTINGS,
                    section: I.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                    object: I.ZSU.BUTTON_CTA,
                    type: I.AnalyticsObjectTypes.BUY,
                },
            });
    });
}
var IA = n(447080);
function IE() {
    let e = (0, f.bG)([lf.default], () => {
            let e = lf.default.getCurrentUser();
            return (th()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e);
        }),
        t = (0, f.bG)([tu.A], () => tu.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, f.cf)([Te.A], () => ({ ...Te.A.getPendingChanges(), showNotice: Te.A.showNotice() })),
        a = (0, Tc.V7)({ userId: e.id, image: i }),
        o = (0, Tr.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, fJ.A)() && null != n ? fN.Ay.parse(void 0, n).content : n,
        d = af.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, ez.Ay)(tw.A.USER_SETTINGS_USER_PROFILE);
    T.useEffect(() => p7.IM, []);
    let [g, m] = T.useState(!1),
        A = !d,
        E = T.useRef(null);
    return t
        ? (0, p.jsx)(oh.A, {})
        : (0, p.jsxs)(ez.f5, {
              value: c,
              children: [
                  (0, p.jsx)(f_, {}),
                  (0, p.jsx)(Tu, {
                      profilePreview: (0, p.jsx)(Td.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: Im,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: IA.ti,
                      }),
                      nameplatePreview: (0, p.jsx)(Tl.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? IA.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, p.jsx)(Ig, {}),
                  }),
                  (0, p.jsx)(cO.L, {
                      innerRef: E,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: A,
                      children: (0, p.jsx)("div", {
                          ref: E,
                          children: (0, p.jsx)(f$, { user: e, shouldShow: A, isVisible: g }),
                      }),
                  }),
                  A &&
                      !l &&
                      (0, p.jsx)(fC.d, {
                          className: IA.EL,
                          showUpsell: !g,
                          text: U.intl.format(U.t.TmfgI2, { onClick: () => (0, fb.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, p.jsx)(fy.l, {
                              size: "md",
                              location: tw.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, p.jsx)("div", {
                              className: IA.Xl,
                              children: (0, p.jsx)(v.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      (td.default.track(I.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          E?.current?.scrollIntoView({ behavior: "smooth" }));
                                  },
                                  text: U.intl.string(U.t.uw9zI7),
                                  icon: ad.t,
                              }),
                          }),
                      }),
              ],
          });
}
var Ih = n(625494);
n(46121);
var Ix = n(944983);
let IS = { [eO.Eq.USER_PROFILE]: "main_profile_tab", [eO.Eq.GUILD]: "guild_profile_tab" },
    Ip = (0, E.E2)(h.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, f.bG)([sR.A, gC.Ay, Te.A], () => {
                    let e = Te.A.selectedGuildId ?? sR.A.getGuildId();
                    return null == e || Te._.has(e) ? gC.Ay.getFlattenedGuildIds().find((e) => !Te._.has(e)) : e;
                }),
                t = (0, f.bG)([sL.A], () => sL.A.getGuild(e)),
                n = (0, f.bG)([Te.A], () => Te.A.showNotice()),
                i = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
                s = fY.A.useField("subsection");
            return (
                T.useEffect(() => {
                    (0, ir._)(IS[s]);
                }, [s]),
                T.useEffect(() => {
                    null != i && t?.id != null && (0, fg.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, p.jsx)(fA, {
                    children: (0, p.jsxs)(uv.F, {
                        component: (0, p.jsx)(sh.A, {
                            children: (0, p.jsx)(N.D, {
                                variant: "heading-xl/normal",
                                children: U.intl.string(U.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, p.jsxs)(Ti.V, {
                                className: Ix.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (n) {
                                            ((0, ia.fO)({ duration: 300, intensity: 1.4 }),
                                                Ih._.dispatch(I.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eO.Eq.GUILD && null != t && (0, Ts.V2)(t.id),
                                            fY.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, p.jsx)(
                                        Ti.V.Item,
                                        {
                                            className: Ix.YU,
                                            id: eO.Eq.USER_PROFILE,
                                            children: U.intl.string(U.t["2p07FR"]),
                                        },
                                        eO.Eq.USER_PROFILE,
                                    ),
                                    (0, p.jsx)(
                                        Ti.V.Item,
                                        {
                                            className: iE()(Ix.YU, Ix.HY),
                                            "aria-label": U.intl.string(U.t.kPHroX),
                                            id: eO.Eq.GUILD,
                                            children: U.intl.string(U.t.kPHroX),
                                        },
                                        eO.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === eO.Eq.GUILD
                                ? (0, p.jsx)(fc, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, ia.fO)({ duration: 300, intensity: 1.4 }),
                                                  Ih._.dispatch(I.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, Ts.JJ)(e.id);
                                      },
                                  })
                                : (0, p.jsx)(IE, {}),
                        ],
                    }),
                })
            );
        },
        useSearchTerms: () => [
            U.intl.string(U.t["vi7f+q"]),
            U.intl.string(U.t.Ip9nBS),
            U.intl.string(U.t["2p07FR"]),
            U.intl.string(U.t["7vhiqk"]),
            U.intl.string(U.t.kPHroX),
            U.intl.string(U.t.lqaIxI),
            U.intl.string(U.t.Vgdusv),
            U.intl.string(U.t.DMeO2X),
        ],
    }),
    IT = (0, E.zZ)(h.X.PROFILE_CATEGORY, { buildLayout: () => [Ip] });
var If = n(379633);
function II() {
    let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, cY.A)({ userId: e?.id, size: b._3.SIZE_48 });
    return null == e
        ? null
        : (0, p.jsxs)("div", {
              className: If.a5,
              children: [
                  (0, p.jsx)(y.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: b._3.SIZE_48,
                      "aria-label": U.intl.string(U.t.lqaIxI),
                  }),
                  (0, p.jsxs)("div", {
                      className: If.FS,
                      children: [
                          (0, p.jsx)(Q.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, p.jsxs)("div", {
                              className: If.Fk,
                              children: [
                                  (0, p.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: U.intl.string(U.t.Ip9nBS),
                                  }),
                                  (0, p.jsx)(aT.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let I_ = (0, E.t_)(h.X.PROFILE_PANEL, {
        useTitle: () => U.intl.string(U.t["vi7f+q"]),
        notice: { stores: [Te.A], element: p9.A },
        initialize: () => p7.F7,
        buildLayout: () => [IT],
    }),
    IN = (0, E.i4)(h.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["vi7f+q"]),
        icon: Iy,
        StronglyDiscouragedCustomComponent: II,
        usePredicate: () => !(0, Tt.X)("user_settings_sidebar"),
        buildLayout: () => [I_],
    }),
    IC = (0, E.i4)(h.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => U.intl.string(U.t["vi7f+q"]),
        icon: Iy,
        StronglyDiscouragedCustomComponent: II,
        usePredicate: () => (0, Tt.X)("user_settings_sidebar"),
        onClick: () => {
            let e = d1.default.getId();
            (0, Tn.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function Iy() {
    let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, cY.A)({ userId: e?.id, size: b._3.SIZE_48 });
    return (0, p.jsx)(y.eu, { src: t, avatarDecoration: n, size: b._3.SIZE_20, "aria-hidden": !0 });
}
let Ib = (0, E.WI)(h.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [IN, IC] });
var Iv = n(98207);
n(204925);
let Ij = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, sI.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 110744),
            );
            return (n) => (0, p.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? uM.tE : null, onCloseCallback: t },
    );
};
var IO = n(940856),
    IL = n(506775),
    IR = n(379257),
    ID = n(121780),
    IP = n(666113);
function IG() {
    let e = ID.A.getCountryCode(),
        t = null != e ? IP.IN[e.alpha2] : void 0;
    IR.A.openUrl(eC.A.getArticleURL(t ?? IP.k9));
}
var IM = n(521169);
function IU() {
    return (0, IM.w)(IP.Vc);
}
var IV = n(737117);
function Ik() {
    let e = IU(),
        t = (0, IL.ZP)();
    if (!e) return null;
    switch (t) {
        case IL.M$.ADULT:
            return U.intl.format(IV.default.gi4ulu, { handleOnAgeGatedContentHook: IL.M0 });
        case IL.M$.TEEN:
            return U.intl.format(IV.default["221iML"], {
                handleOnAgeGatedContentHook: IL.M0,
                handleOnConfirmAgeHook: IL.aP,
            });
        case IL.M$.UNVERIFIED:
            return U.intl.format(IV.default["W0/7DD"], {
                handleOnAgeGatedContentHook: IG,
                handleOnConfirmAgeHook: IL.aP,
            });
    }
}
var Iw = n(26137),
    IF = n(957485);
function IB() {
    let e = IU(),
        t = (0, IL.ZP)();
    return e ? { icon: t === IL.M$.ADULT ? Iw.r : IF.i, backgroundColor: n6.A.colors.BACKGROUND_MOD_SUBTLE } : null;
}
function Iz() {
    let e = IB();
    return null != e ? { type: S.hp.ICON, ...e } : null;
}
function IY() {
    return IU() ? U.intl.string(U.t.piqs0o) : null;
}
var IX = n(438140);
let IH = [{ badgeType: S.Xi.NEW, dismissibleContent: eA.M.TINY_BRONCO_SETTINGS }],
    IW = [];
function IK() {
    return (0, IX.Wt)() ? IH : IW;
}
var IZ = n(36149),
    Iq = n(207560),
    IQ = (((g = {}).LEGACY = "legacy"), (g.TINY_BRONCO = "tinyBronco"), g),
    I$ = (((m = {}).VERIFY = "verify"), (m.EDIT = "edit"), (m.INFO = "info"), m);
function IJ(e, t) {
    let n = (0, f.bG)([lf.default], () => null != lf.default.getCurrentUser()),
        i = (0, Iq.fk)(),
        s = (0, IL.ZP)(),
        l = (0, IZ.Y2)(),
        r = IU();
    if (!n || (!i && !r) || t !== (r ? "tinyBronco" : "legacy")) return !1;
    switch (s) {
        case IL.M$.UNVERIFIED:
            return "verify" === e;
        case IL.M$.TEEN:
            return e === (r ? "info" : "verify");
        case IL.M$.ADULT:
            return e === (l ? "edit" : "info");
    }
}
var I0 = n(799719);
function I1() {
    let e = (0, IL.hD)();
    return (0, p.jsxs)(Q.E, {
        variant: "text-md/medium",
        children: [`${e} \u{2022} `, U.intl.format(I0.default.WM5adV, { handleOnHelpUrlHook: IL.M0 })],
    });
}
let I2 = {
        useTitle: () => IY() ?? U.intl.string(U.t["/52UYy"]),
        useSubtitle: Ik,
        useVariant: () => "secondary",
        useLeadingDecoration: Iz,
        getDismissibleBadges: IK,
        useTrailingDecoration: () => ({
            type: S.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: I1,
        }),
        useLabel: () => U.intl.string(U.t.bt75uw),
        onClick: function () {
            (0, sI.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    },
    I3 = (0, E.Tf)(h.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...I2, usePredicate: () => IJ(I$.EDIT, IQ.LEGACY) }),
    I5 = (0, E.Tf)(h.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...I2,
        usePredicate: () => IJ(I$.EDIT, IQ.TINY_BRONCO),
        useAriaLabel: () => U.intl.string(U.t.pBMSie),
    }),
    I4 = {
        useTitle: () => IY() ?? U.intl.string(U.t["/52UYy"]),
        useSubtitle: Ik,
        useLeadingDecoration: function () {
            let e = IB();
            return null != e ? { type: S.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: IK,
        useTrailingDecoration: () => ({ type: S.Ln.TEXT, text: (0, IL.hD)() }),
    },
    I6 = (0, E.v_)(h.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...I4, usePredicate: () => IJ(I$.INFO, IQ.LEGACY) }),
    I8 = (0, E.v_)(h.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...I4,
        usePredicate: () => IJ(I$.INFO, IQ.TINY_BRONCO),
    }),
    I7 = {
        useTitle: () => IY() ?? U.intl.string(U.t["/52UYy"]),
        useSubtitle: Ik,
        useVariant: () => "secondary",
        useLeadingDecoration: Iz,
        getDismissibleBadges: IK,
        useTrailingDecoration: () => ({ type: S.fq.TEXT, text: (0, IL.hD)() }),
        useLabel: function () {
            return (0, IZ.yM)() ? U.intl.string(U.t["9KiIz6"]) : U.intl.string(U.t.DVywUB);
        },
        onClick: IL.aP,
    },
    I9 = (0, E.Tf)(h.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...I7, usePredicate: () => IJ(I$.VERIFY, IQ.LEGACY) }),
    _e = (0, E.Tf)(h.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...I7,
        usePredicate: () => IJ(I$.VERIFY, IQ.TINY_BRONCO),
    }),
    _t = [I9, I3, I6],
    _n = [_e, I5, I8],
    _i = (0, E.Tf)(h.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => U.intl.string(U.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: S.fq.TEXT, text: U.intl.string(U.t.qxk9zo) }),
        useLabel: () => U.intl.string(U.t.BleMPB),
        onClick: () => Ij(),
    });
function _s(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function _l(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function _r(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: s } = e,
        [l, r] = T.useState(!1),
        a = l ? t : n(t);
    return (0, p.jsxs)(Z.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, p.jsx)(Q.E, { variant: "text-md/medium", children: a }),
            (0, p.jsx)(hL.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": l ? s : i,
                onClick: () => r(!l),
                text: l ? U.intl.string(U.t.fgq1gs) : U.intl.string(U.t.dcztdU),
            }),
        ],
    });
}
function _a() {
    let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.email);
    return null == e
        ? (0, p.jsx)(Q.E, { variant: "text-md/medium", children: U.intl.string(U.t["8SfTN/"]) })
        : (0, p.jsx)(_r, {
              text: e,
              censor: _l,
              revealLabel: U.intl.string(U.t["Zvx+yV"]),
              hideLabel: U.intl.string(U.t.nqTD4d),
          });
}
let _o = (0, E.Tf)(h.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => U.intl.string(U.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: S.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: _a }),
    useLabel: function () {
        return null == (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.email)
            ? U.intl.string(U.t.OYkgVk)
            : U.intl.string(U.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.email)
            ? U.intl.string(U.t["pvBD+W"])
            : U.intl.string(U.t["8peUT0"]);
    },
    onClick: function () {
        (0, sI.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("279385"), n.e("420577"), n.e("465861")]).then(
                n.bind(n, 97060),
            );
            return (t) => (0, p.jsx)(e, { ...t });
        });
    },
});
var _u = n(557722),
    _d = n(53516);
function _c() {
    let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, p.jsx)(Q.E, { variant: "text-md/medium", children: U.intl.string(U.t.I5kDqj) })
        : (0, p.jsx)(Z.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, p.jsx)(_r, {
                  text: t,
                  censor: _s,
                  revealLabel: U.intl.string(U.t.eY3xlT),
                  hideLabel: U.intl.string(U.t["jllbv+"]),
              }),
          });
}
let _g = (0, E.Tf)(h.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => U.intl.string(U.t.kerONq),
    useAriaLabel: function () {
        return null == (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.phone)
            ? U.intl.string(U.t["SfUuE+"])
            : U.intl.string(U.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: S.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: _c }),
    useLabel: function () {
        return null == (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.phone)
            ? U.intl.string(U.t.OYkgVk)
            : U.intl.string(U.t.bt75uw);
    },
    onClick: function () {
        null == lf.default.getCurrentUser()?.phone
            ? (0, sI.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("590275"),
                          n.e("766806"),
                          n.e("989545"),
                          n.e("311493"),
                          n.e("84704"),
                          n.e("286197"),
                      ]).then(n.bind(n, 615715));
                      return (t) => (0, p.jsx)(e, { reason: _u.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: _d.V },
              )
            : (0, sI.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, p.jsx)(e, { ...t });
              });
    },
});
function _m() {
    let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function _A() {
    let e = (0, Th.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, f.bG)([lf.default], () => lf.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(Q.E, { variant: "text-md/medium", children: i }),
            null != t &&
                (0, p.jsx)(sE.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, p.jsx)(i3.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: n6.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let _E = (0, E.Tf)(h.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => U.intl.string(U.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: S.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: _A,
        }),
        useLabel: () => U.intl.string(U.t.bt75uw),
        useAriaLabel: () => U.intl.string(U.t.JECa91),
        useSubtitle: () => (_m() ? U.intl.string(U.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: _m,
        onClick: function () {
            (0, sI.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    }),
    _h = (0, E.zZ)(h.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, f.bG)([lf.default], () => null != lf.default.getCurrentUser()),
        useTitle: () => U.intl.string(U.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser());
            return null == e
                ? null
                : e.isClaimed()
                  ? null == e.email || e.verified
                      ? null
                      : {
                            type: S.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            role: "none",
                            title: U.intl.string(U.t.tuGzBT),
                            text: U.intl.string(U.t.NAzplE),
                            button: { text: U.intl.string(U.t.lm1UKt), onClick: () => (0, IO.S)(e) },
                        }
                  : {
                        type: S.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        role: "none",
                        title: U.intl.string(U.t["/3qnL/"]),
                        text: U.intl.string(U.t.qKs3vg),
                        button: { text: U.intl.string(U.t["7psymi"]), onClick: () => Ij() },
                    };
        },
        buildLayout: () => [_E, _i, _o, _g, ..._t],
    });
var _x = n(398177);
let _S = (0, E.Tf)(h.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => U.intl.string(U.t["CIGa+7"]),
    useLabel: () => U.intl.string(U.t.bt75uw),
    useAriaLabel: () => U.intl.string(U.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, sI.openModal)((e) => (0, p.jsx)(_x.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var _p = n(200921);
let _T = [];
function _f() {
    _T = [];
}
class _I extends f.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return _T;
    }
}
let __ = new _I(ts.h, {
    LOGOUT: _f,
    LOGIN_SUCCESS: _f,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        _T = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [..._T],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        _T = n;
    },
});
function _N() {
    let e = (0, f.cf)([__], () => __.getSessions());
    return T.useMemo(() => {
        let t = [...e],
            n = null,
            i = d1.default.getAuthSessionIdHash();
        if (null != i) {
            let e = t.findIndex((e) => e.id_hash === i);
            e >= 0 && (n = t.splice(e, 1)[0]);
        }
        return (
            t.sort((e, t) => t.approx_last_used_time.valueOf() - e.approx_last_used_time.valueOf()),
            { currentSession: n, otherSessions: t }
        );
    }, [e]);
}
function _C(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? U.intl.string(U.t.TXCmfL) : ix()(e).fromNow();
}
var _y = n(176524),
    _b = n(646270),
    _v = n(738678),
    _j = n(489828);
function _O(e) {
    let { icon: t, label: n, subLabel: i, description: s, children: l, muted: r } = e;
    return (0, p.jsxs)(Z.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, p.jsx)(_y.A, { icon: t, color: r ? n6.A.colors.ICON_MUTED : "currentColor" }),
            (0, p.jsxs)(Z.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, p.jsxs)(Z.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, p.jsx)(Q.E, { variant: "text-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != i &&
                                (0, p.jsx)(Q.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != i &&
                                (0, p.jsx)(Q.E, { variant: "text-md/medium", color: "text-subtle", children: i }),
                        ],
                    }),
                    (0, p.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
                ],
            }),
            l,
        ],
    });
}
function _L(e) {
    let { session: t, current: n } = e,
        {
            location: i,
            platform: s,
            os: l,
            Icon: r,
            lastActive: a,
        } = (function (e, t) {
            let n = e.client_info?.location ?? e.client_info?.ip,
                i = e.client_info?.platform,
                { text: s, icon: l } = (function (e) {
                    switch (e?.toLowerCase().trim()) {
                        case null:
                        case void 0:
                        case "":
                            return { text: U.intl.string(U.t.cDHCNY), icon: dA.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: _b.u };
                        case "horizon os":
                            return { text: e, icon: _v.G };
                        default:
                            return { text: e, icon: dA.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: s, Icon: l, lastActive: t ? null : _C(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(ig.Vq);
    return (0, p.jsx)(_O, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, p.jsx)(n9.D, {
                className: _j.X,
                onClick: () => (0, _p.U0)(t.id_hash),
                "aria-label": U.intl.string(U.t.E4MJNt),
                children: (0, p.jsx)(uB.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function _R(e) {
    let { title: t, children: n } = e,
        i = T.useId();
    return (0, p.jsxs)(Z.B, {
        role: "group",
        "aria-labelledby": i,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, p.jsx)(N.D, { id: i, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, p.jsx)(Z.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
let _D = (0, E.E2)(h.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = _N();
            return null == e
                ? (0, p.jsx)(oC.y, {})
                : (0, p.jsx)(_R, {
                      title: U.intl.string(U.t.LLS19o),
                      children: (0, p.jsx)(_L, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    _P = (0, E.E2)(h.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = _N();
            return (0, p.jsx)(t6.D, {
                label: U.intl.string(U.t.Vij32M),
                description: U.intl.string(U.t.OTXyaf),
                children: (0, p.jsx)(v.$, {
                    onClick: () => (0, _p.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: U.intl.string(U.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = _N();
            return e.length > 0;
        },
    });
var _G = n(766928);
function _M() {
    return (0, p.jsx)(_O, {
        icon: _G.W,
        label: U.intl.string(U.t.iUa0sn),
        description: U.intl.format(U.t["044+8i"], {
            onClick: () =>
                (0, ng.openUserSettings)(h.X.ACCOUNT_PANEL, { analyticsLocations: [tw.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let _U = (0, E.E2)(h.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = _N(),
                t = (0, f.bG)([lf.default], () => lf.default.getCurrentUser());
            return (0, p.jsxs)(_R, {
                title: U.intl.string(U.t.xx1MWc),
                children: [
                    e.map((e) => (0, p.jsx)(_L, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, p.jsx)(_M, {}),
                ],
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = _N(),
                t = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    _V = (0, E.zZ)(h.X.SESSIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.mEndXM),
        useSubtitle: () => U.intl.string(U.t.b7ZpTM),
        initialize: () => {
            (0, _p.GY)();
        },
        buildLayout: () => [_D, _U, _P],
        useSearchTerms: () => [
            U.intl.string(U.t["+1h0k/"]),
            U.intl.string(U.t.LLS19o),
            U.intl.string(U.t.xx1MWc),
            U.intl.string(U.t.lSWsrd),
        ],
    }),
    _k = (0, E.t_)(h.X.SESSIONS_PANEL, {
        useTitle: () => U.intl.string(U.t.mEndXM),
        useObscuredNotice: oh.L,
        buildLayout: () => [_V],
    }),
    _w = (0, E.t0)(h.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [_k],
        initialize: () => {
            (0, _p.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = _N(),
                n = t.length + +(null != e);
            return {
                type: S.xn.TEXT,
                text: n > 0 ? U.intl.formatToPlainString(U.t.G7zwOk, { count: n }) : U.intl.string(U.t.MKDeyL),
            };
        },
    });
var _F = n(464477);
function _B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? U.intl.string(U.t.YJGvuD)
              : U.intl.string(U.t["3iKih7"])
          : e.hasFlag(I.nhx.PARTNER)
            ? t
                ? U.intl.string(U.t["9UucjT"])
                : U.intl.string(U.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? U.intl.string(U.t["9VWpT9"])
                  : U.intl.string(U.t.LfCBZG)
              : null;
}
function _z() {
    return (0, os.bG)([lf.default], () => {
        let e = lf.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var _Y =
    (((A = {}).AVAILABLE = "available"),
    (A.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (A.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    A);
function _X() {
    let e = (0, os.bG)([lf.default], () => lf.default.getCurrentUser()?.verified);
    return _F.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function _H() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, os.bG)([sL.A, ft.A, lf.default], () =>
        lf.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? U.intl.string(U.t.hxf9fX)
                : U.intl.string(U.t["3iKih7"])
            : sL.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(I.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        ft.A.can(I.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? U.intl.string(U.t.OYTCUh)
                  : U.intl.string(U.t.HC8uSZ)
              : null,
    );
}
var _W = n(466034);
let _K = (0, E.Tf)(h.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => U.intl.string(U.t.lQsY7B),
        useSubtitle: () => _H(!0),
        useDisabled: () => null !== _H(!0),
        useLabel: () => U.intl.string(U.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, f.bG)([d1.default], () => d1.default.hasTOTPEnabled()),
                t = _X() === _Y.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, n8.A)({
                title: U.intl.string(U.t["D+aE7g"]),
                subtitle: U.intl.string(U.t.EA4ZEk),
                variant: "critical",
                confirmText: U.intl.string(U.t.N86XcP),
                onConfirm: () => Iv.A.disable(),
            }),
    }),
    _Z = (0, E.zZ)(h.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => U.intl.string(U.t.RumMFo),
        useSubtitle: () => U.intl.string(U.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, f.bG)([d1.default], () => d1.default.hasTOTPEnabled()),
                t = _X() === _Y.AVAILABLE;
            if (!e && t)
                return {
                    type: S.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: S.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: U.intl.string(U.t.cTNUeD),
                            onClick: _W.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (_X()) {
                case _Y.UNAVAILABLE_NO_CRYPTO:
                    return {
                        type: S.lT.INLINE_NOTICE,
                        noticeType: "info",
                        role: "none",
                        text: U.intl.string(U.t.PhHhsj),
                    };
                case _Y.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: S.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        role: "none",
                        text: U.intl.string(U.t.uggF7o),
                    };
                case _Y.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [_K],
    });
var _q = n(670492),
    _Q = n(32880),
    _$ = n(663417),
    _J = n(658675),
    _0 = n(900686);
function _1() {
    (0, sI.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, p.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    Iv.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, sI.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e("514567"), n.e("96179")]).then(
                                        n.bind(n, 518142),
                                    );
                                    return (n) => (0, p.jsx)(e, { ...n, password: t });
                                },
                                { stackingBehavior: "stack" },
                            )
                        );
                    }),
                title: U.intl.string(U.t.PsQmzU),
                actionText: U.intl.string(U.t.ajkYcF),
            });
    });
}
var _2 = n(858487);
function _3(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function _5() {
    let e = _q.A.getVerificationKey();
    if ("" === e) return void _1();
    try {
        await Iv.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, lE.P0)({ text: e.body?.message ?? U.intl.string(U.t.F8FvUy), variant: "critical" });
    }
}
function _4(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = _3(t),
        s = T.useRef(null),
        l = (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(_J.P, { checked: n }), (0, p.jsx)(Q.E, { variant: "text-md/normal", children: i })],
        });
    return uj.p5
        ? (0, p.jsx)(n9.D, {
              tag: "li",
              className: iE()(_2.aY, _2.vk),
              innerRef: s,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uj.C)(i), s?.current?.focus());
              },
              onClick: function () {
                  ((0, uj.C)(i), (0, lE.P0)({ text: U.intl.string(U.t.mGZ66D), variant: "success" }));
              },
              children: l,
          })
        : (0, p.jsx)("li", { className: _2.aY, children: l });
}
let _6 = (0, E.zZ)(h.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.fC9qV0),
        useSubtitle: () =>
            (0, f.bG)([_q.A], () => _q.A.getBackupCodes().length > 0)
                ? U.intl.format(U.t.tp7zEK, {})
                : U.intl.string(U.t.LoOi4S),
        usePredicate: _z,
        buildLayout: () => [_8],
    }),
    _8 = (0, E.E2)(h.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.fC9qV0)],
        Component: function () {
            let e = (0, f.bG)([_q.A], () => _q.A.getBackupCodes()),
                t = T.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${_3(t)}` + (n ? ` (${U.intl.string(U.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, p.jsx)(v.$, { text: U.intl.string(U.t.Jc2myK), size: "sm", variant: "secondary", onClick: _1 })
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)("ul", {
                              className: _2.E5,
                              children: e.map((e) => (0, p.jsx)(_4, { code: e }, e.code)),
                          }),
                          (0, p.jsxs)(l4.e, {
                              size: "sm",
                              children: [
                                  (0, p.jsx)(_0.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, p.jsx)(v.$, {
                                          text: U.intl.string(U.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: _Q.DownloadIcon,
                                      }),
                                  }),
                                  (0, p.jsx)(v.$, {
                                      text: U.intl.string(U.t["3x962E"]),
                                      variant: "secondary",
                                      icon: _$.RefreshIcon,
                                      onClick: _5,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    _7 = (0, E.Tf)(h.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => U.intl.string(U.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = T.useState(!1),
                n = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : U.intl.format(e ? U.t["xDBk/I"] : U.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, p.jsx)(hL.Q, {
                              text: e ? U.intl.string(U.t.fgq1gs) : U.intl.string(U.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => U.intl.string(U.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.hasFlag(I.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, sI.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, p.jsx)(e, {
                        ...t,
                        handleSubmit: Iv.A.disableSMS,
                        title: U.intl.string(U.t.KLWnit),
                        children: U.intl.string(U.t["W0/Duf"]),
                    });
            }),
    }),
    _9 = (0, E.zZ)(h.X.SMS_AUTH_CATEGORY, {
        useTitle: () => U.intl.string(U.t.wuHuI5),
        useSubtitle: () => (0, f.bG)([lf.default], () => _B(lf.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.hasFlag(I.nhx.MFA_SMS) ?? !1),
                t = (0, f.bG)([lf.default], () => null != _B(lf.default.getCurrentUser()));
            if (!e)
                return {
                    type: S.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: S.UV.BUTTON,
                            id: "sms-setup-button",
                            text: U.intl.string(U.t.Age7yU),
                            onClick: Ne,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = _X(),
                t = _z(),
                n = (0, f.bG)([d1.default], () => d1.default.hasTOTPEnabled());
            return e === _Y.AVAILABLE && t && n;
        },
        buildLayout: () => [_7],
    });
function Ne() {
    let e = lf.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: _u.d.USER_SETTINGS_UPDATE, onAddedPhone: Iv.A.enableSMS }),
                (0, sI.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("590275"),
                            n.e("766806"),
                            n.e("989545"),
                            n.e("311493"),
                            n.e("84704"),
                            n.e("286197"),
                        ]).then(n.bind(n, 615715));
                        return (n) => (0, p.jsx)(e, { ...n, ...t });
                    },
                    { modalKey: _d.V },
                ));
        } else Iv.A.enableSMS();
}
var Nt = n(665671),
    Nn = n(442433),
    Ni = n(917136),
    Ns = n(976910),
    Nl = n(267255);
function Nr(e) {
    let { credential: t } = e;
    return (0, p.jsxs)("li", {
        className: Nl.e,
        children: [
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(Q.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, p.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: U.intl.format(U.t["7JgxF5"], { lastUsed: _C(t.last_used) }),
                        }),
                ],
            }),
            (0, p.jsx)(sm.K, {
                icon: gO.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": U.intl.string(U.t["+nrTbK"]),
                onClick: (e) => {
                    (0, Nn.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, p.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let Na = (0, E.zZ)(h.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.IBq4Y3),
        useSubtitle: () => U.intl.string(U.t.yK9edS),
        useHeaderDecoration: function () {
            if (_X() === _Y.AVAILABLE)
                return {
                    type: S.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: S.UV.BUTTON,
                            id: "add-security-key-button",
                            text: U.intl.string(U.t["Tzs/fw"]),
                            icon: iq.j,
                            onClick: Nt.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (_X()) {
                    case _Y.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: S.lT.INLINE_NOTICE,
                            noticeType: "info",
                            role: "none",
                            text: U.intl.string(U.t.bWCGI9),
                        };
                    case _Y.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: S.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            role: "none",
                            text: U.intl.string(U.t.uggF7o),
                        };
                    case _Y.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [No],
    }),
    No = (0, E.E2)(h.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [U.intl.string(U.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, f.cf)([Ns.A], () => ({
                hasFetchedCredentials: Ns.A.hasFetchedCredentials(),
                credentials: Ns.A.getCredentials(),
            }));
            return (T.useEffect(() => {
                t || Ni.JQ();
            }, [t]),
            t)
                ? (0, p.jsx)(Z.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, p.jsx)(Nr, { credential: e }, e.id)),
                  })
                : (0, p.jsx)(oC.y, {});
        },
    }),
    Nu = (0, E.t_)(h.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => U.intl.string(U.t.m0FidJ),
        buildLayout: () => [Na, _Z, _9, _6],
    }),
    Nd = (0, E.t0)(h.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = _z();
            return { type: S.xn.TEXT, text: e ? U.intl.string(U.t.lQsY7B) : U.intl.string(U.t.WsUuTt) };
        },
        buildLayout: () => [Nu],
    }),
    Nc = (0, E.zZ)(h.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => U.intl.string(U.t["0iH2vc"]),
        buildLayout: () => [_S, Nd, _w],
    }),
    Ng = { [IL.M$.ADULT]: IV.default.PMznGO, [IL.M$.TEEN]: IV.default.qSkhZH, [IL.M$.UNVERIFIED]: IV.default.vGxRDB },
    Nm = [eA.M.TINY_BRONCO_NOTICE],
    NA = [];
function NE() {
    IR.A.openUrl(IP.m5);
}
var Nh = n(308645),
    Nx = n(555725),
    NS = n(855267);
let Np = (0, E.E2)(h.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["16r9jm"])],
        Component: NS.A,
    }),
    NT = (0, E.zZ)(h.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [Np] }),
    Nf = (0, E.t_)(h.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => U.intl.string(U.t["16r9jm"]),
        buildLayout: () => [NT],
    }),
    NI = (0, E.t0)(h.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => U.intl.string(U.t["16r9jm"]),
        useSubtitle: Nx.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, Nx._k)();
            return { type: S.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: S.xn.TEXT, text: (0, Nx.aO)() };
        },
        initialize: () => {
            Nh.Yn();
        },
        buildLayout: () => [Nf],
    }),
    N_ = (0, E.zZ)(h.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (IU() ? U.intl.string(U.t.GI2mea) : null) ?? U.intl.string(U.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, IX.LH)(),
                t = (0, IL.ZP)(),
                [n, i] = (0, mb.kn)(e ? Nm : NA);
            return e && null != n
                ? {
                      type: S.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "none",
                      iconAlign: "start",
                      text: U.intl.format(Ng[t], { handleOnBlogHook: NE }),
                      onDismiss: () => i(mM.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [..._n, NI],
    });
var NN = n(738188),
    NC = n(834981),
    Ny = n(987197),
    Nb = n(822585),
    Nv = n(840387),
    Nj = n(961526),
    NO = n(273665);
let NL = (0, E.E2)(h.X.FAMILY_CENTER_SETTING, {
        Component: Nj.p,
        useSearchTerms: () => [
            U.intl.string(NO.default.RZqaJn),
            U.intl.string(NO.default.bdBmqy),
            U.intl.string(NO.default["gVWG+6"]),
            U.intl.string(NO.default.ahKIJO),
            U.intl.string(NO.default["8SLtqb"]),
        ],
    }),
    NR = (0, E.zZ)(h.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [NL] }),
    ND = (0, E.t_)(h.X.FAMILY_CENTER_PANEL, {
        useTitle: () => U.intl.string(NO.default.RZqaJn),
        buildLayout: () => [NR],
    }),
    NP = (0, E.zZ)(h.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => U.intl.string(NO.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, Ny.f)(),
                t = (0, Nb.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, NC.VT)();
            return T.useMemo(() => (n ? { badgeType: S.Xi.WARNING } : { badgeType: S.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [NG],
    }),
    NG = (0, E.t0)(h.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, NC.Li)() ? U.intl.string(NO.default.IcMQUP) : U.intl.string(NO.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, Nv.Z)(),
                t = (0, NC.Li)();
            return e
                ? t
                    ? U.intl.string(NO.default.G8lHFU)
                    : U.intl.string(NO.default.uOLNEZ)
                : U.intl.string(NO.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, Ny.f)(),
                t = (0, Nb.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: S.Xy.ICON,
                      icon: NN.WarningIcon,
                      color: n6.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: n6.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [ND],
    });
var NM = n(425587),
    NU = n(662758);
function NV(e) {
    if (e.body.code === I.t02.INVALID_PASSWORD) throw e;
    (0, l2.A)({ title: U.intl.string(U.t.LX0nT8), subtitle: e.body.message });
}
async function Nk() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = lf.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await NM.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, l2.A)({
              title: U.intl.string(U.t["Y++oNe"]),
              subtitle: U.intl.format(U.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : sL.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, l2.A)({ title: U.intl.string(U.t.vJiTOL), subtitle: U.intl.string(U.t.UyVVan) })
          : t.isClaimed()
            ? (0, sI.openModal)((t) =>
                  (0, p.jsx)(NU.default, {
                      ...t,
                      handleSubmit: (t) => (0, p7.U_)(t, e).then(I.tEg, NV),
                      title: e ? U.intl.string(U.t.xca2ts) : U.intl.string(U.t.goXv9g),
                      actionText: e ? U.intl.string(U.t["8lQ2rR"]) : U.intl.string(U.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? U.intl.string(U.t.FB4H1D) : U.intl.string(U.t.gk7h32),
                  }),
              )
            : (0, n8.A)({
                  title: U.intl.string(U.t.xca2ts),
                  subtitle: U.intl.string(U.t.FB4H1D),
                  confirmText: U.intl.string(U.t["8lQ2rR"]),
                  onConfirm: () => (0, p7.U_)("", !0),
              });
}
let Nw = (0, E.Tf)(h.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => U.intl.string(U.t["gIpzR+"]),
        useSubtitle: () => U.intl.string(U.t.Bd6dOf),
        useLabel: () => U.intl.string(U.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => Nk(!0),
    }),
    NF = (0, E.Tf)(h.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => U.intl.string(U.t["p/Tjtp"]),
        useSubtitle: () => U.intl.string(U.t.YvDmKb),
        useLabel: () => U.intl.string(U.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => Nk(!1),
        usePredicate: () => {
            let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    NB = (0, E.zZ)(h.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [NF, Nw] }),
    Nz = (0, E.t_)(h.X.ACCOUNT_PANEL, {
        useTitle: () => U.intl.string(U.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (Iv.A.clearBackupCodes(), (0, p7.Uo)());
            };
        },
        useObscuredNotice: oh.L,
        buildLayout: () => [_h, Nc, N_, NP, NB],
    }),
    NY = (0, E.i4)(h.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["ldCE/p"]),
        icon: Ab.UserIcon,
        buildLayout: () => [Nz],
    });
var NX = n(176781),
    NH = n(274372),
    NW = n(572164),
    NK = n(614584),
    NZ = n(696016);
let Nq = [NZ.zq, 25, 50, NZ.Y2, NZ.rv],
    NQ = (0, E.sN)(h.X.CLIPS_BITRATE, {
        useTitle: () => U.intl.string(U.t["8bZyov"]),
        useSubtitle: () => U.intl.string(U.t["h8DSx/"]),
        minValue: NZ.zq,
        maxValue: NZ.rv,
        useDefaultValue: () => NZ.Y2,
        getInitialValue: () => NH.Ay.getSettings().clipsQuality.bitratePercent ?? NZ.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = NH.Ay.getSettings();
            NK.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: Nq,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, NW.E)(),
    });
var N$ = n(226640);
let NJ = (0, E.Hn)(h.X.CLIPS_FRAME_RATE, {
        useTitle: () => U.intl.string(U.t["2wScL1"]),
        useSubtitle: () => U.intl.string(U.t["Rf9+fy"]),
        useValue: () => (0, f.bG)([NH.Ay], () => NH.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = NH.Ay.getSettings();
            NK.GS({ ...t, frameRate: e });
        },
        useOptions: N$.Fz,
        useDisabled: () => !(0, NW.E)(),
    }),
    N0 = (0, E.E2)(h.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [U.intl.string(U.t.SIxrIF)],
        usePredicate: () => (0, f.bG)([NH.Ay], () => NH.Ay.getHardwareClassification()) === NZ.k9.BELOW_MINIMUM,
        Component: () => (0, p.jsx)(ln.A, { look: ln.k.WARNING, children: U.intl.string(U.t.SIxrIF) }),
    }),
    N1 = (0, E.Hn)(h.X.CLIPS_LENGTH, {
        useTitle: () => U.intl.string(U.t.OgfUio),
        useSubtitle: () => U.intl.string(U.t.H7j4tY),
        useValue: () => (0, f.bG)([NH.Ay], () => NH.Ay.getSettings().clipsLength),
        setValue: (e) => NK.h$(e),
        useOptions: N$.Qu,
        useDisabled: () => !(0, NW.E)(),
    }),
    N2 = (0, E.E2)(h.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [U.intl.string(U.t["Z+MfqT"])],
        Component: () => (0, p.jsx)(ln.A, { look: ln.k.INFO, children: U.intl.string(U.t["Z+MfqT"]) }),
    }),
    N3 = (0, E.Hn)(h.X.CLIPS_RESOLUTION, {
        useTitle: () => U.intl.string(U.t.aFudZJ),
        useSubtitle: () => U.intl.string(U.t.nIrkW5),
        useValue: () => (0, f.bG)([NH.Ay], () => NH.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = NH.Ay.getSettings();
            NK.GS({ ...t, resolution: e });
        },
        useOptions: N$.gF,
        useDisabled: () => !(0, NW.E)(),
    }),
    N5 = (0, E.zD)(h.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => U.intl.string(U.t["3zwNf6"]),
        useSubtitle: () => U.intl.string(U.t.m4Cjj9),
        useValue: () => (0, f.bG)([NH.Ay], () => NH.Ay.getSettings().remindersEnabled),
        setValue: (e) => NK.Mt(e),
        useDisabled: () => !(0, NW.E)(),
    });
var N4 = n(704796);
let N6 = (0, E.zZ)(h.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => U.intl.string(N4.default.TGwzMe),
        buildLayout: () => [N0, N1, NJ, N3, NQ, N2, N5],
    }),
    N8 = (0, E.zD)(h.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, f.bG)([NH.Ay], () => NH.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => NK.YP(e),
    }),
    N7 = (0, E.zD)(h.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, f.bG)([NH.Ay], () => NH.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => NK.Uh(e),
    }),
    N9 = (0, E.zZ)(h.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, f.bG)([lf.default], () => {
                let e = lf.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [N8, N7],
    });
var Ce = n(417270),
    Ct = n(847825);
let Cn = (0, E.E2)(h.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [U.intl.string(U.t.pf54EU), U.intl.string(U.t["QyB/jK"])],
        Component: () => {
            let e = (0, f.bG)([sc.Ay], () => sc.Ay.getKeybindForAction(I.hCu.SAVE_CLIP, !0));
            th()(null != e, "Save clip keybind unset");
            let t = !(0, NW.E)(),
                n = T.useRef(null),
                i = T.useCallback(
                    (t) => {
                        iJ.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                s = T.useCallback(() => {
                    iJ.A.setKeybind({ ...e, shortcut: (0, sT.OH)(NZ.Ot) });
                }, [e]);
            return (0, p.jsx)(t6.D, {
                label: U.intl.string(U.t.pf54EU),
                description: U.intl.string(U.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, p.jsx)("div", {
                    className: Ct.g,
                    children: (0, p.jsx)(sp.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, p.jsxs)(p.Fragment, {
                            children: [
                                (0, p.jsx)(sE.m, {
                                    text: U.intl.string(N4.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, p.jsx)(sm.K, {
                                        icon: iQ.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": U.intl.string(N4.default.bUtubv),
                                        onClick: (e) => {
                                            (e.stopPropagation(), n.current?.toggleRecordMode());
                                        },
                                    }),
                                }),
                                (0, p.jsx)(sE.m, {
                                    text: U.intl.string(N4.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, p.jsx)(sm.K, {
                                        icon: Ce.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": U.intl.string(N4.default.Kyk1Tp),
                                        onClick: (e) => {
                                            (e.stopPropagation(), s());
                                        },
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
            });
        },
    }),
    Ci = (0, E.E2)(h.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [U.intl.string(U.t["0U/hj7"]), U.intl.string(U.t["5zxkdo"])],
        usePredicate: sq.BW,
        Component: () => {
            let e = (0, f.bG)([sc.Ay], () => sc.Ay.getKeybindForAction(I.hCu.SAVE_CLIP, !0)),
                t = (0, f.bG)([sc.Ay], () => sc.Ay.getKeybindForAction(I.hCu.SAVE_SCREENSHOT, !0));
            (th()(null != e, "Save clip keybind unset"), th()(null != t, "Save screenshot keybind unset"));
            let n = T.useCallback(
                (e) => {
                    iJ.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, p.jsx)(t6.D, {
                label: U.intl.string(U.t["0U/hj7"]),
                description: U.intl.string(U.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, p.jsx)("div", {
                    className: Ct.g,
                    children: (0, p.jsx)(sp.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    Cs = (0, E.zD)(h.X.CLIPS_ENABLE, {
        useTitle: () => U.intl.string(U.t.h8rgrK),
        useSubtitle: () => U.intl.string(U.t["4Qw3NO"]),
        useValue: () => (0, NW.E)(),
        setValue: (e) => NK.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    Cl = (0, E.zY)(h.X.CLIPS_GENERAL_CARD, { buildLayout: () => [Cs, Cn, Ci], headerSettingKey: Cs.key }),
    Cr = (0, E.zZ)(h.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => U.intl.string(U.t["rWKv+e"]),
        useSubtitle: () => U.intl.format(N4.default["dh7g+S"], { learnMoreLink: eC.A.getArticleURL(I.MVz.CLIPS) }),
        buildLayout: () => [Cl],
    }),
    Ca = (0, E.E2)(h.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [U.intl.string(U.t.s4773E), U.intl.string(U.t.svjwGh)],
        Component: () => {
            let e = (0, f.bG)([NH.Ay], () => NH.Ay.getSettings().storageLocation),
                t = !(0, NW.E)(),
                n = T.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await nN.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && NK.HU(e[0]);
                    } finally {
                        n.current = !1;
                    }
                }
            }
            return (0, p.jsx)(t6.D, {
                label: U.intl.string(U.t.s4773E),
                description: U.intl.string(U.t.svjwGh),
                layout: "vertical",
                children: (0, p.jsxs)(Z.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, p.jsx)(s_.k, {
                            fullWidth: !0,
                            value: e,
                            editable: !1,
                            disabled: t,
                            "aria-label": U.intl.formatToPlainString(U.t.iMONTj, { storageLocation: e }),
                        }),
                        (0, p.jsx)(v.$, {
                            variant: "secondary",
                            disabled: t,
                            onClick: i,
                            text: U.intl.string(N4.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    Co = (0, E.zZ)(h.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => U.intl.string(N4.default["0Q+pdZ"]),
        buildLayout: () => [Ca],
    }),
    Cu = (0, E.t_)(h.X.CLIPS_PANEL, {
        useTitle: () => U.intl.string(U.t.z2jK6X),
        usePredicate: sq.sw,
        buildLayout: () => [Cr, N6, Co, N9],
    }),
    Cd = (0, E.i4)(h.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.z2jK6X),
        icon: NX.x,
        buildLayout: () => [Cu],
    });
var Cc = n(254138),
    Cg = n(290595);
let Cm = [];
var CA = n(153488),
    CE = n(308528),
    Ch = n(171316),
    Cx = n(558001);
n(866945);
var CS = n(835002);
function Cp() {
    let e = (0, Ch.uM)(),
        t = (0, NC.vx)(),
        n = T.useCallback(() => {
            ((0, tH.default)(),
                CE.A.openPrivateChannel({ recipientIds: t }),
                (0, Cx.N)(CS.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, CS.YX.LEARN_MORE));
        }, [t]),
        i = T.useCallback(() => {
            (0, Cx.N)(CS.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, CS.YX.VIEWED);
        }, []);
    return T.useMemo(() => {
        if (e)
            return {
                type: S.lT.INLINE_NOTICE,
                noticeType: "info",
                role: "none",
                trackView: i,
                text: U.intl.format(NO.default.i284fU, {
                    hook: (e, t) => (0, p.jsx)(nc.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let CT = (0, E.zD)(h.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => U.intl.string(U.t.AGDDkH),
    useSubtitle: () => U.intl.string(U.t.kyo3dJ),
    useValue: () => M.Q$.useSetting(),
    setValue: (e) => NK.eQ({ allowVoiceRecording: e }),
});
var Cf = n(157559),
    CI = n(331887);
function C_() {
    let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
        t = (0, f.bG)([CI.A], () => CI.A.harvestType),
        [n, i] = T.useState(() => Date.now()),
        s = null == t ? n : new Date(t.created_at).getTime() + 2592e6,
        l = T.useRef(null);
    return (T.useEffect(() => {
        let e = s - Date.now();
        if (e > 0) {
            let t = setTimeout(() => i(Date.now()), e);
            (clearTimeout(l.current), (l.current = t));
        }
        return () => clearTimeout(l.current);
    }, [s]),
    e?.verified)
        ? e.isStaff()
            ? { allowed: !1, reason: "staff" }
            : null == t
              ? { allowed: !0 }
              : s > n
                ? { allowed: !1, reason: "rate_limited", nextAllowed: new Date(s) }
                : { allowed: !0 }
        : { allowed: !1, reason: "not_verified" };
}
let CN = (0, E.Tf)(h.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => U.intl.string(U.t.qfFFos),
        useSubtitle: function () {
            let e = C_();
            if (e.allowed) return U.intl.format(U.t.NRI6vt, { article: eC.A.getArticleURL(I.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return U.intl.string(U.t.hIbRso);
                case "not_verified":
                    return U.intl.format(U.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, p.jsx)(
                                n9.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, ng.openUserSettings)(h.X.ACCOUNT_INFO_EMAIL_SETTING),
                                    children: e,
                                },
                                t,
                            ),
                    });
                case "rate_limited": {
                    let t = ix()(e.nextAllowed).format("MMMM Do YYYY");
                    return U.intl.format(U.t["VLMG1+"], { date: t });
                }
                default:
                    return;
            }
        },
        initialize: () => {
            (ts.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                ti.Bo.get({ url: I.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        ts.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        ts.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    }));
        },
        useDisabled: () => !C_().allowed,
        useLoading: () => (0, f.bG)([CI.A], () => CI.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => U.intl.string(U.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...i } = e;
                    (0, sI.openModalLazy)(async () => {
                        let { default: e } = await n.e("292063").then(n.bind(n, 970018));
                        return (n) => (0, p.jsx)(e, { modalProps: n, onConfirm: t });
                    }, i);
                })({
                    onConfirm: (n) => {
                        ((t = !1),
                            (0, p7.$I)(n)
                                .then(
                                    (e) => (
                                        null != e &&
                                            null != e.body &&
                                            ts.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }),
                                        e
                                    ),
                                )
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? Cf.A.show({
                                                  title: U.intl.string(U.t.i2iul5),
                                                  body: U.intl.string(U.t["6Nmv4i"]),
                                              })
                                            : Cf.A.show({
                                                  title: U.intl.string(U.t.OjbtDm),
                                                  body: U.intl.string(U.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || U.intl.string(U.t["0F5Jyt"]);
                                        Cf.A.show({ title: U.intl.string(U.t.OjbtDm), body: t });
                                    },
                                )
                                .finally(e));
                    },
                    onCloseCallback: () => {
                        t && e();
                    },
                });
            });
        },
    }),
    CC = (0, E.v_)(h.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => U.intl.string(U.t.D60Gfj),
        useSubtitle: () =>
            U.intl.format(U.t.dszICC, {
                onClickDisable: () => (0, ng.openUserSettings)(h.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, ng.openUserSettings)(h.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var Cy = n(641216);
let Cb = (0, uo.mj)({
    kind: "user",
    name: "2026-08-ad-topic-opt-out-client",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 }, 3: { enabled: !0 }, 4: { enabled: !0 }, 5: { enabled: !0 } },
});
function Cv() {
    let { enabled: e } = Cb.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var Cj = n(884705);
function CO() {
    return (0, f.bG)([Cj.A], () => Cj.A.isTogglesDisabled());
}
function CL() {
    return !M.vf.useSetting();
}
function CR(e) {
    M.vf.updateSetting(!e);
}
function CD() {
    let e = CO(),
        t = M.H1.useSetting(),
        n = (0, Ch.uM)();
    return e || t || n;
}
let CP = (0, E.zD)(h.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => U.intl.string(U.t.CyLYKZ),
        useSubtitle: () =>
            U.intl.format(U.t["md5l4/"], { helpdeskArticle: eC.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !Cv(),
        useValue: CL,
        setValue: CR,
        useDisabled: CD,
        useSearchTerms: () => [U.intl.string(U.t.CyLYKZ)],
    }),
    CG = (0, E.zD)(h.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => U.intl.string(U.t.CyLYKZ),
        useSubtitle: () =>
            U.intl.format(U.t["2QFDU/"], { helpdeskArticle: eC.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: Cv,
        useValue: CL,
        setValue: CR,
        useDisabled: CD,
        useSearchTerms: () => [U.intl.string(U.t.CyLYKZ)],
    });
function CM() {
    return !M.H1.useSetting();
}
function CU(e) {
    M.H1.updateSetting(!e);
}
function CV() {
    let e = CO(),
        t = (0, Ch.uM)();
    return e || t;
}
let Ck = (0, E.zD)(h.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => U.intl.string(U.t.sJYh5t),
        useSubtitle: () => U.intl.string(U.t.w4fvxe),
        usePredicate: () => !Cv(),
        useValue: CM,
        setValue: CU,
        useSearchTerms: () => [U.intl.string(U.t.VkS7Yd)],
        useDisabled: CV,
    }),
    Cw = (0, E.zD)(h.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => U.intl.string(U.t.sJYh5t),
        useSubtitle: () =>
            U.intl.format(U.t.cf9mvV, { helpdeskArticle: eC.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: Cv,
        useValue: CM,
        setValue: CU,
        useSearchTerms: () => [U.intl.string(U.t.VkS7Yd)],
        useDisabled: CV,
    }),
    CF = (0, E.AK)(h.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: h.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = h3(2);
            return U.intl.format(U.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = h5();
            return { type: S.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, f.bG)([i9.Ay], () => i9.Ay.getGamesSeen(!1).some((e) => !(0, hQ.n1)(e))) && (0, nf.xl)(),
    }),
    CB = (0, E.gN)(h.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [CF] });
var Cz = n(972737);
let CY = (0, E.zD)(h.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => U.intl.string(U.t.XuADY2),
        useSubtitle: () =>
            U.intl.format(U.t.FNqmmX, { helpdeskArticle: eC.A.getArticleURL(I.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, f.bG)([CA.A], () => CA.A.hasConsented(I.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, Cg.U)([I.YAq.USAGE_STATISTICS], []).catch(Cz.i)
                : (0, Cz.O)({
                      header: U.intl.string(U.t.OdPCbN),
                      body: U.intl.string(U.t.MGWabA),
                      confirmText: U.intl.string(U.t["D3+rU4"]),
                      cancelText: U.intl.string(U.t.kYpG0u),
                      onConfirm: () => (0, Cg.U)([], [I.YAq.USAGE_STATISTICS]).catch(Cz.i),
                  });
        },
        useSearchTerms: () => [U.intl.string(U.t.XuADY2)],
        useDisabled: Ch.uM,
    }),
    CX = (0, E.zZ)(h.X.DATA_USAGE_CATEGORY, {
        useTitle: () => U.intl.string(U.t.QDAriI),
        useInlineNotice: Cp,
        initialize: () => {
            CA.A.fetchedConsents || (0, Cg.Q)();
        },
        buildLayout: () => [CC, CY, Cy._, Ck, CP, ...Cm, CT, CN, CB],
    });
var CH = n(63928);
let CW = (0, E.zD)(h.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => U.intl.string(CH.default.F3llsQ),
    useSubtitle: () => U.intl.string(CH.default["6goWcz"]),
    useValue: M.Sy.useSetting,
    setValue: function (e) {
        (M.Sy.updateSetting(e),
            td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: h7.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function CK() {
    let e = M.JG.useSetting();
    return (0, f.yK)(
        [gC.Ay, sL.A],
        () => {
            let t = new Set(e);
            return gC.Ay.getFlattenedGuildIds().filter((e) => null != sL.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let CZ = (0, E.AK)(h.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = CK();
            if (0 === e.length) return U.intl.format(U.t.QJIJ5p, {});
            let t = sL.A.getGuild(e[0]),
                n = t?.name ?? "",
                i = e.length - 1;
            return 0 === i
                ? U.intl.format(U.t["T+8J4A"], { guildName: n })
                : U.intl.format(U.t["3JyODQ"], { guildName: n, count: i });
        },
        useTrailingDecoration: function () {
            let e,
                t,
                n =
                    ((e = CK()),
                    0 ===
                    (t = (0, f.yK)(
                        [sL.A],
                        () =>
                            e
                                .slice(0, 2)
                                .map((e) => sL.A.getGuild(e))
                                .filter((e) => null != e),
                        [e],
                    )).length
                        ? null
                        : t.length >= 2
                          ? {
                                frontIcon: {
                                    icon: (0, p.jsx)(xc, { guild: t[0], size: h$.CD }),
                                    shape: h$.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, p.jsx)(xc, { guild: t[1], size: h$.CD }), shape: h$.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, p.jsx)(xc, { guild: t[0], size: h$.CD }),
                                    shape: h$.e0.SQUIRCLE,
                                },
                            });
            return { type: S.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: h.X.ACTIVITY_PRIVACY_PANEL,
    }),
    Cq = (0, E.gN)(h.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [CZ] }),
    CQ = (0, E.Qx)(h.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => U.intl.string(U.t.Qnf32C),
        useOptions: function () {
            return [
                {
                    name: U.intl.string(U.t.Boxc8R),
                    desc: U.intl.string(U.t["nLj+nc"]),
                    value: eQ.KP.FRIENDS_AND_ALL_GUILDS,
                },
                {
                    name: U.intl.string(U.t.YOIKBt),
                    desc: U.intl.string(U.t.y0JZ4s),
                    value: eQ.KP.FRIENDS_AND_SMALL_GUILDS,
                },
                { name: U.intl.string(U.t.u0nlJv), desc: U.intl.string(U.t["4jnKHu"]), value: eQ.KP.FRIENDS_ONLY },
            ];
        },
        useValue: M.KP.useSetting,
        setValue: function (e) {
            let t = M.KP.getSetting();
            M.KP.updateSetting(e);
            let i = (0, xl.gS)(t, e);
            null != i &&
                (0, sI.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("763786")]).then(
                        n.bind(n, 413201),
                    );
                    return (t) =>
                        (0, p.jsx)(e, {
                            ...t,
                            direction: i.direction,
                            affectedGuildIds: i.affectedGuildIds,
                            settingName: i.settingName,
                            mappedActivityValue: i.mappedActivityValue,
                        });
                });
        },
        useSearchTerms: () => [U.intl.string(U.t.Qnf32C)],
    }),
    C$ = (0, E.zZ)(h.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.ul884f),
        useSubtitle: () =>
            U.intl.format(U.t.N4jSgR, {
                learnMoreUrl: eC.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [CQ, CW, Cq],
    });
var CJ = n(952270),
    C0 = n(48448);
let C1 = { [eQ.tR.REAL_MONEY_GAMING]: C0.default.pmIitA },
    C2 = Object.keys(C1).map(Number),
    C3 = (0, E.E2)(h.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [U.intl.string(C0.default.foQaI1)],
        usePredicate: Cv,
        Component: function () {
            let e = T.useMemo(
                    () =>
                        C2.map((e) => ({
                            id: String(e),
                            value: e,
                            label: U.intl.string(C1[e]),
                            leading: CJ.EyeSlashIcon,
                        })),
                    [],
                ),
                t = M.XZ.useSetting();
            return (0, p.jsx)(pq.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(M.XZ.getSetting());
                    for (let e of C2) t.has(e) ? n.add(e) : n.delete(e);
                    M.XZ.updateSetting([...n]);
                },
                label: U.intl.string(C0.default.foQaI1),
                description: U.intl.format(C0.default["z/MfaY"], {
                    helpdeskArticle: eC.A.getArticleURL(I.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: U.intl.string(C0.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    C5 = (0, E.zZ)(h.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => U.intl.string(C0.default.XUj46U),
        usePredicate: Cv,
        buildLayout: () => [Cw, CG, C3],
    });
var C4 = n(714763),
    C6 = n(814278),
    C8 = n(730852),
    C7 = n(913122),
    C9 = n(977997),
    ye = n(144485);
async function yt(e, t) {
    if (e) {
        ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e });
        try {
            (await (0, C6.to)(1), t?.());
        } catch (t) {
            let e = new C7.LG(t);
            (ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                Cf.A.show({
                    title: U.intl.string(U.t.R0RpRX),
                    body: e.getAnyErrorMessage() ?? U.intl.string(U.t.eAn6z2),
                }));
        }
    } else (ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e }), t?.());
}
async function yn(e) {
    let t,
        n,
        i =
            ((t = C9.A.getVoiceStateForUser(d1.default.getId())),
            (n = sj.A.getChannel(t?.channelId)),
            d1.default.getSessionId() === t?.sessionId && null != n && n.type !== I.rbe.GUILD_STAGE_VOICE
                ? n.id
                : null);
    null != i
        ? ye.A.openSecureFramesUpdateConfirmation({
              title: e ? U.intl.string(U.t.DRFN1B) : U.intl.string(U.t.q29xJz),
              subtitle: e ? U.intl.string(U.t.y015ZY) : U.intl.string(U.t.E66FQn),
              confirmText: U.intl.string(U.t.aTuFYT),
              onConfirm: async () => {
                  await yt(e, () => {
                      (C8.default.disconnect(), C8.default.selectVoiceChannel(i));
                  });
              },
          })
        : await yt(e);
}
n(603266);
let yi = (0, E.zD)(h.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => U.intl.string(U.t["opi/XK"]),
    useSubtitle: () => U.intl.format(U.t["/T+ZlP"], { helpArticle: (0, C6.Lu)() }),
    useValue: function () {
        return (0, f.bG)([C4.A], () => C4.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        yn(e);
    },
});
var ys = n(787392);
function yl() {
    return (0, f.yK)([ys.A], () => ys.A.getUserIds());
}
var yr = n(803306),
    ya = n(966327),
    yo = n(774156);
function yu(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(),
        s = (0, f.bG)([lf.default], () => lf.default.getUser(t)),
        l = uD.Ay.getFormattedName(s),
        r = T.useCallback(() => {
            (0, C6.kj)(t);
        }, [t]),
        a = T.useCallback(() => (0, Tn.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        T.useEffect(() => {
            (0, yr.wz)(t);
        }, [t]),
        (0, p.jsxs)("div", {
            className: yo.uW,
            children: [
                null != s && (0, p.jsx)(ya.A, { className: yo.my, user: s, size: b._3.SIZE_40 }),
                (0, p.jsxs)("div", {
                    className: yo.Qq,
                    children: [
                        (0, p.jsx)(n9.D, {
                            className: yo.Xh,
                            onClick: a,
                            children: (0, p.jsx)(Q.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: l,
                            }),
                        }),
                        (0, p.jsx)(Q.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: U.intl.format(U.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, p.jsx)(n9.D, { onClick: r, className: yo.Qz, children: (0, p.jsx)(sA.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function yd(e) {
    let { className: t, userId: n, verification: i, index: s } = e,
        l = (0, C6.tC)(i.timestamp),
        r = T.useCallback(() => {
            (0, C6.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, p.jsxs)("div", {
        className: t,
        children: [
            (0, p.jsxs)("div", {
                className: yo.Qq,
                children: [
                    (0, p.jsx)(Q.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: U.intl.format(U.t.N4qBBO, { index: s + 1 }),
                    }),
                    (0, p.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                ],
            }),
            (0, p.jsx)(n9.D, {
                className: yo.Kk,
                onClick: r,
                children: (0, p.jsx)(uB.P, { size: "md", color: n6.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function yc(e) {
    let { userId: t } = e,
        n = (0, f.yK)([ys.A], () =>
            W()(ys.A.getUserVerifiedKeys(t))
                .entries()
                .map((e) => {
                    let [t, n] = e;
                    return { verifiedKey: t, timestamp: n };
                })
                .sortBy((e) => -1 * e.timestamp)
                .value(),
        );
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(yu, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, p.jsxs)(
                    T.Fragment,
                    {
                        children: [
                            (0, p.jsx)(yd, { className: yo.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, p.jsx)("div", { className: yo.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var yg = n(464946),
    ym = n(492422);
let yA = (0, E.E2)(h.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["5b3FNI"])],
        usePredicate: function () {
            let e = yl();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = yl();
            return (0, p.jsxs)(yg.h, {
                children: [
                    (0, p.jsx)(yg._, {
                        header: U.intl.string(U.t["5b3FNI"]),
                        description: U.intl.format(U.t.jrTSWU, { helpArticle: (0, C6.dc)() }),
                    }),
                    e.map((e) => (0, p.jsx)("div", { className: ym.A, children: (0, p.jsx)(yc, { userId: e }) }, e)),
                ],
            });
        },
    }),
    yE = (0, E.zZ)(h.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.bTwjaz),
        usePredicate: () => (0, e6.isDesktop)(),
        buildLayout: () => [yi, yA],
    }),
    yh = (0, E.t_)(h.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => U.intl.string(U.t.OAuOHD),
        buildLayout: () => [CX, C5, C$, yE],
    }),
    yx = (0, E.i4)(h.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.OAuOHD),
        icon: Cc.m,
        buildLayout: () => [yh],
    });
var yS = n(476713);
let yp = (0, E.AK)(h.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.O65dzZ),
        useTitle: () => U.intl.string(U.t["f6kk+r"]),
        destinationKey: h.X.AUTHORIZED_APPS_CATEGORY,
    }),
    yT = (0, E.gN)(h.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [yp] });
var yf = n(875444);
function yI(e, t) {
    let n = (0, f.bG)([xw.default], () => xw.default.getFetchState()),
        i = (0, f.bG)([xw.default], () =>
            e ? xw.default.getNewestTokensForNonChildrenApplications() : xw.default.getNewestTokens(),
        ),
        s = T.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, yf.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        T.useEffect(() => {
            t || xb.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== xw.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: s }
    );
}
var y_ = n(514479);
function yN() {
    return (0, p.jsxs)("div", {
        className: y_.d,
        children: [
            (0, p.jsx)(Q.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: y_.x,
                children: U.intl.string(U.t["+0U77d"]),
            }),
            (0, p.jsx)(Q.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: U.intl.format(U.t.V8wClM, {
                    helpdeskArticle: eC.A.getArticleURL(I.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
let yC = (0, E.E2)(h.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = yI(!0, !0);
        return e ? (0, p.jsx)(oC.y, {}) : (0, p.jsx)(yN, {});
    },
    useSearchTerms: () => [U.intl.string(U.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = yI(!0, !0);
        return e || 0 === t.length;
    },
});
function yy() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = yI(!0, !0);
    return !e && t.length > 0;
}
let yb = (0, E.zD)(h.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => U.intl.string(U.t.W8JtfT),
        useSubtitle: () => U.intl.string(U.t.a99KKy),
        useSearchTerms: () => [U.intl.string(U.t["Uv/eTx"])],
        useValue: () => M.Zk.useSetting(),
        setValue: (e) => M.Zk.updateSetting(e),
        usePredicate: yy,
    }),
    yv = (0, E.Qx)(h.X.IN_GAME_DMS_SETTING, {
        useTitle: () => U.intl.string(U.t["ms+Tme"]),
        useSubtitle: () => U.intl.string(U.t["0ryspy"]),
        useOptions: function () {
            return [
                { name: U.intl.string(U.t.JIFnN9), value: eQ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
                { name: U.intl.string(U.t.rRdsk1), value: eQ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
                { name: U.intl.string(U.t.IVRPMX), value: eQ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
            ];
        },
        useValue: function () {
            let e = M.TA.useSetting();
            return e === eQ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? eQ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => M.TA.updateSetting(e),
        usePredicate: yy,
    });
function yj() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = yI(!0, !0);
    return {
        sortedGames: T.useMemo(() => e.toSorted((e, t) => oM.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var yO = n(306537);
function yL(e) {
    let { body: t, buttonText: n, onButtonClick: i, noticeType: s, iconAlign: l } = e;
    return (
        (0, eI.Ay)(() => {
            (0, Cx.N)(s, CS.YX.VIEWED);
        }),
        (0, p.jsx)(i$.w, { type: "info", iconAlign: l, message: t, action: { text: n, onClick: i }, role: "none" })
    );
}
function yR(e, t) {
    return {
        handleLearnMore: T.useCallback(() => {
            (t(), (0, Cx.N)(e, CS.YX.LEARN_MORE));
        }, [e, t]),
        handleConfirmAge: T.useCallback(() => {
            (IR.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Cx.N)(e, CS.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function yD() {
    let e,
        t = (0, Ch.uM)(),
        n = (0, Iq.fk)(),
        i = (0, IZ.b8)(),
        s = (0, Nv.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : s && (e = "teen"), null != e) && (0, IM.n)(IP.Vc)) return e;
    }
}
var yP = n(687123),
    yG = n(444802);
function yM() {
    let e = (0, yG.WX)();
    T.useEffect(() => {
        (0, Cx.N)(CS.YA.AGE_CONFIRMATION_NOTICE, CS.YX.VIEWED);
    }, []);
    let t = T.useCallback(() => {
            (window.open(eC.A.getArticleURL(e), "_blank"), (0, Cx.N)(CS.YA.AGE_CONFIRMATION_NOTICE, CS.YX.LEARN_MORE));
        }, [e]),
        n = T.useCallback(() => {
            (IR.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Cx.N)(CS.YA.AGE_CONFIRMATION_NOTICE, CS.YX.CONFIRM_AGE));
        }, []);
    return (0, p.jsx)(i$.w, {
        type: "info",
        message: U.intl.format(U.t.mFgsfg, { hook: (e, n) => (0, p.jsx)(nc.Anchor, { onClick: t, children: e }, n) }),
        role: "status",
        action: { text: U.intl.string(U.t.FDSSia), onClick: n },
    });
}
function yU() {
    let e = (0, Iq.aX)(yP.t.REACTIVE_CHECK),
        t = (0, IZ.b8)();
    return T.useMemo(() => {
        if (e && !t) return { type: S.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: yM };
    }, [e, t]);
}
var yV = n(323073),
    yk = n(386171),
    yw = n(96607);
let yF = (0, E.zD)(h.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => U.intl.string(U.t.gvC6q7),
        useSubtitle: () => U.intl.string(U.t.zirUC1),
        useValue: yk.hT,
        useDisabled: function () {
            let e = (0, yw.A)() ?? !0,
                t = (0, yV.sP)(),
                n = (0, IZ.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, yV.p5)() && e
                ? IR.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : M.Qe.updateSetting(e);
        },
    }),
    yB = (0, E.zD)(h.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => U.intl.string(U.t["L+yTsa"]),
        useSubtitle: () => U.intl.string(U.t["t6i/jW"]),
        useValue: yk.tI,
        useDisabled: function () {
            let e = (0, yw.A)() ?? !0,
                t = (0, yV.sP)(),
                n = (0, IZ.yM)();
            return T.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, yV.p5)() && e
                ? IR.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : M.Kg.updateSetting(e);
        },
    }),
    yz = (0, E.AK)(h.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.hOXd45),
        destinationKey: h.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    yY = (0, E.gN)(h.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [yz] });
n(667532);
var yX = n(390248),
    yH = n(632119),
    yW = n(945276),
    yK = n(389737),
    yZ = n(566769);
function yq() {
    let e,
        t = (0, yW.A)() ?? !0,
        n = (0, Ch.uM)(),
        i = (0, Ch.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, os.cf)([aO.A], () => aO.A.settings.textAndImages?.explicitContentSettings ?? (0, yH.C$)())),
        {
            explicitContentGuilds: (0, yH.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, yH.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, yH.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yX.hK)() && t.includes(eQ.TO.SHOW)
            ? IR.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yH.Jz)(e);
    }
    let o = [
            { value: eQ.TO.BLUR, label: U.intl.string(U.t.S49Uad) },
            { value: eQ.TO.BLOCK, label: U.intl.string(U.t["D/157Y"]) },
        ],
        u = [{ value: eQ.TO.BLUR, label: U.intl.string(U.t.S49Uad) }],
        d = { value: eQ.TO.SHOW, label: U.intl.string(U.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? U.intl.string(NO.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(yK.E, {
        description: U.intl.string(U.t.Wnojv1),
        children: [
            (0, p.jsx)(yZ.A, {
                title: U.intl.string(U.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yZ.A, {
                title: U.intl.string(U.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yZ.A, {
                title: U.intl.string(U.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? U.intl.string(NO.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function yQ() {
    let e,
        t = (0, yW.A)() ?? !0,
        n = (0, Ch.uM)(),
        i = (0, Ch.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, os.cf)([aO.A], () => aO.A.settings.textAndImages?.goreContentSettings ?? (0, yG.T4)())),
        {
            goreContentGuilds: (0, yG.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, yG.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, yG.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yX.hK)() && t.includes(eQ.TO.SHOW)
            ? IR.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yG.qY)(e);
    }
    let o = [
            { value: eQ.TO.BLUR, label: U.intl.string(U.t.S49Uad) },
            { value: eQ.TO.BLOCK, label: U.intl.string(U.t["D/157Y"]) },
        ],
        u = [{ value: eQ.TO.BLUR, label: U.intl.string(U.t.S49Uad) }],
        d = { value: eQ.TO.SHOW, label: U.intl.string(U.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? U.intl.string(NO.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(yK.E, {
        description: U.intl.string(U.t.XgH9eh),
        children: [
            (0, p.jsx)(yZ.A, {
                title: U.intl.string(U.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yZ.A, {
                title: U.intl.string(U.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yZ.A, {
                title: U.intl.string(U.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? U.intl.string(NO.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var y$ = n(875162),
    yJ = n(636745);
let y0 = (0, E.E2)(h.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, yG.WX)(),
            t = T.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: U.intl.string(U.t.GYpoAq),
                        component: yq,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: U.intl.string(U.t["16/3Bi"]),
                        component: yQ,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, p.jsxs)(yg.h, {
            children: [
                (0, p.jsx)(yg._, {
                    header: U.intl.string(U.t["Hj/But"]),
                    description: U.intl.format(U.t.dliU4j, { learnMoreLink: eC.A.getArticleURL(e) }),
                }),
                (0, p.jsx)(y$.A, { tabs: t, orientation: "vertical", tabsClassName: yJ.v }),
            ],
        });
    },
    useSearchTerms: () => [
        U.intl.string(U.t["Hj/But"]),
        U.intl.string(U.t["N/oRI+"]),
        U.intl.string(U.t.QVdYsK),
        U.intl.string(U.t["aWD+tu"]),
        U.intl.string(U.t["5mnTa7"]),
        U.intl.string(U.t["K0OWP+"]),
    ],
});
var y1 = n(639555),
    y2 = n(617641),
    y3 = n(546140),
    y5 = n(406935),
    y4 = n(594061);
let y6 = (0, E.zD)(h.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => U.intl.string(U.t.qFsx5q),
        useSubtitle: () => U.intl.format(U.t.lunaRv, { learnMoreLink: eC.A.getArticleURL(I.MVz.SAFETY_ALERTS) }),
        useValue: y3.L,
        setValue: function (e) {
            return y4.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = y5._t.create({ value: e });
                },
                y4.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, y2.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, y1.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, yW.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    y8 = (0, E.zZ)(h.X.CONTENT_CATEGORY, {
        useTitle: () => U.intl.string(U.t["3upKU8"]),
        useInlineNotice: function () {
            var e;
            let t,
                n,
                i,
                s,
                l,
                r,
                a,
                o,
                u,
                d,
                c,
                g,
                m,
                A,
                E,
                h,
                x = Cp(),
                f =
                    ((s = (0, Ch.uM)()),
                    (l = (0, Iq.fk)()),
                    (r = (0, IZ.b8)()),
                    (a = (0, Nv.Z)()),
                    (o = yR(CS.YA.AGE_CONFIRMATION_NOTICE, IG)),
                    (u = yR(CS.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, IL.M0)),
                    (d = T.useCallback(() => {
                        (0, Cx.N)(CS.YA.AGE_CONFIRMATION_NOTICE, CS.YX.VIEWED);
                    }, [])),
                    (c = T.useCallback(() => {
                        (0, Cx.N)(CS.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CS.YX.VIEWED);
                    }, [])),
                    T.useMemo(() => {
                        if (!s && (0, IM.n)(IP.Vc)) {
                            if (l && !r)
                                return {
                                    type: S.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    iconAlign: "center",
                                    trackView: d,
                                    text: U.intl.format(IV.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: { text: U.intl.string(IV.default["cI+bc/"]), onClick: o.handleConfirmAge },
                                };
                            if (a)
                                return {
                                    type: S.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    iconAlign: "start",
                                    trackView: c,
                                    text: U.intl.format(IV.default.qbBkFI, {
                                        handleOnConfirmAgeHook: u.handleConfirmAge,
                                    }),
                                    button: { text: U.intl.string(U.t.hvVgAZ), onClick: u.handleLearnMore },
                                };
                        }
                    }, [l, s, a, r, u, c, d, o])),
                I =
                    ((e = (0, Nv.Z)()),
                    (t = (0, yG.WX)()),
                    (n = T.useCallback(() => {
                        (window.open(eC.A.getArticleURL(t), "_blank"),
                            (0, Cx.N)(CS.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CS.YX.LEARN_MORE));
                    }, [t])),
                    (i = T.useCallback(() => {
                        (0, Cx.N)(CS.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CS.YX.VIEWED);
                    }, [])),
                    T.useMemo(() => {
                        if (e)
                            return {
                                type: S.lT.INLINE_NOTICE,
                                noticeType: "info",
                                role: "none",
                                trackView: i,
                                text: U.intl.format(U.t.EUo0yj, {
                                    hook: (e, t) => (0, p.jsx)(nc.Anchor, { onClick: n, children: e }, t),
                                }),
                            };
                    }, [n, e, i])),
                _ =
                    ((g = (0, Iq.SJ)()),
                    (m = (0, IZ.b8)()),
                    (A = g && !m),
                    (E = T.useCallback(() => {
                        (IR.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, Cx.N)(CS.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, CS.YX.LEARN_MORE));
                    }, [])),
                    (h = T.useCallback(() => {
                        (0, Cx.N)(CS.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, CS.YX.VIEWED);
                    }, [])),
                    T.useMemo(() => {
                        if (A)
                            return {
                                type: S.lT.INLINE_NOTICE,
                                noticeType: "info",
                                role: "none",
                                trackView: h,
                                text: U.intl.format(U.t.OX4ybh, {
                                    hook: (e, t) => (0, p.jsx)(nc.Anchor, { onClick: E, children: e }, t),
                                }),
                            };
                    }, [E, A, h])),
                N = yU();
            return x ?? f ?? N ?? _ ?? I;
        },
        buildLayout: () => [y0, y6, yF, yB, yY],
    });
var y7 = n(923457),
    y9 = n(750714);
let be = (0, E.Qx)(h.X.DM_SPAM_SETTING, {
    useTitle: () => U.intl.string(U.t.puwSkY),
    useSubtitle: () => U.intl.string(U.t["+sXN3T"]),
    useValue: function () {
        let e = M.he.useSetting(),
            t = M.cj.useSetting(),
            n = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
            i = (0, Iq.yv)(y7.p.SPAM_FILTERS);
        return e !== eQ.he.DEFAULT_UNSET
            ? e
            : n?.nsfwAllowed === !1 && i
              ? eQ.he.FRIENDS_AND_NON_FRIENDS
              : (y9.xY.get(t) ?? eQ.he.NON_FRIENDS);
    },
    setValue: (e) => M.he.updateSetting(e),
    useOptions: function () {
        return [
            { name: U.intl.string(U.t["+w5yKk"]), value: eQ.he.FRIENDS_AND_NON_FRIENDS },
            { name: U.intl.string(U.t.yAPg6r), value: eQ.he.NON_FRIENDS },
            { name: U.intl.string(U.t.FEXKsv), value: eQ.he.DISABLED },
        ];
    },
    useSearchTerms: () => [U.intl.string(U.t.JzaP4h), U.intl.string(U.t.H9XOl3), U.intl.string(U.t.k4W40P)],
});
var bt = n(189883);
let bn = (0, E.zD)(h.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => U.intl.string(U.t["7x9dyE"]),
    useValue: function () {
        let e = M.FA.useSetting();
        return T.useMemo(() => (0, ia.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        M.FA.updateSetting(e ? I.yKI : I.yKI & ~I.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, Ch.uM)();
    },
});
var bi = n(665260);
let bs = (0, E.zD)(h.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => U.intl.string(U.t.NfeuZ3),
        useValue: function () {
            let e = M.FA.useSetting(),
                t = T.useMemo(() => (0, ia.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = M.FA.getSetting();
            M.FA.updateSetting(e ? bi.UI(t, I.dzt.MUTUAL_FRIENDS) : bi.iE(t, I.dzt.MUTUAL_FRIENDS, I.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, Ch.uM)();
        },
    }),
    bl = (0, E.zD)(h.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => U.intl.string(U.t.qsMfsH),
        useSubtitle: () => U.intl.string(U.t["6DqAp0"]),
        useValue: function () {
            let e = M.FA.useSetting(),
                t = T.useMemo(() => (0, ia.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = M.FA.getSetting();
            M.FA.updateSetting(e ? bi.UI(t, I.dzt.MUTUAL_GUILDS) : bi.iE(t, I.dzt.MUTUAL_GUILDS, I.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, Ch.uM)();
        },
    }),
    br = (0, E.FW)(h.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => U.intl.string(U.t.wTdS6S),
        buildLayout: () => [bn, bs, bl],
    });
var ba = n(420825);
let bo = (0, E.zD)(h.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => U.intl.string(U.t["jK+wdr"]),
        useSubtitle: () => U.intl.string(U.t["RYh/pW"]),
        useValue: () => !(0, ba.q)(),
        setValue: function (e) {
            M.Zd.updateSetting(!e);
        },
    }),
    bu = (0, E.zZ)(h.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["5gxWrt"]),
        useSubtitle: function () {
            let { enabled: e } = bt.A.useConfig({ location: "Friend Request Setting" });
            return e ? U.intl.string(U.t.QVbF3l) : void 0;
        },
        useSubnavLabel: () => U.intl.string(U.t.fyA115),
        useInlineNotice: Cp,
        buildLayout: () => [br, bo],
    });
var bd = n(994500),
    bc = n(428678),
    bg = n(49229),
    bm = n(730134),
    bA = n(276573);
function bE(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, p.jsxs)("div", {
        className: bA.wx,
        children: [
            (0, p.jsx)("div", {
                className: bA.zc,
                children: i ? (0, p.jsx)(bc.K, {}) : (0, p.jsx)(CJ.EyeSlashIcon, {}),
            }),
            (0, p.jsxs)("div", {
                className: bA.Qq,
                children: [
                    (0, p.jsx)(Q.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: U.intl.string(i ? U.t.PFOUKW : U.t["93ZDWE"]),
                    }),
                    (0, p.jsx)(Q.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: i
                            ? U.intl.format(U.t["r91W/h"], { numberOfBlockedUsers: n })
                            : U.intl.format(U.t.rXUeOl, { numberOfIgnoredUsers: n }),
                    }),
                ],
            }),
        ],
    });
}
function bh(e) {
    let { userId: t, last: n } = e,
        i = (0, f.bG)([bd.A], () => bd.A.isBlocked(t)),
        s = (0, f.bG)([lf.default], () => lf.default.getUser(t)),
        [l, r] = T.useState(!1),
        a = T.useCallback(() => {
            (r(!0),
                i
                    ? bg.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : bg.A.unignoreUser(t, tw.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == s
        ? null
        : (0, p.jsxs)("div", {
              className: iE()(bA.nM, { [bA.fW]: n }),
              children: [
                  (0, p.jsxs)("div", {
                      className: bA.eF,
                      children: [
                          (0, p.jsx)(bm.A, { user: s, size: b._3.SIZE_40 }),
                          (0, p.jsxs)("div", {
                              className: bA.Qq,
                              children: [
                                  (0, p.jsx)(Q.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: s.globalName ?? s.username,
                                  }),
                                  (0, p.jsx)(Q.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != s.globalName ? s.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, p.jsx)(v.$, {
                      variant: "secondary",
                      text: U.intl.string(i ? U.t.XyHpKH : U.t["8wXU9B"]),
                      onClick: a,
                      loading: l,
                  }),
              ],
          });
}
function bx(e) {
    let { userIds: t, listType: n } = e,
        [i, s] = T.useState(5);
    return (0, p.jsx)(yg.h, {
        children: (0, p.jsxs)("div", {
            className: bA.Nr,
            children: [
                (0, p.jsx)(bE, { listType: n, numberOfUsers: t.length }),
                (0, p.jsx)("div", {
                    className: bA.jS,
                    children: t.slice(0, i).map((e, n) => (0, p.jsx)(bh, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, p.jsx)("div", {
                          className: bA.vM,
                          children: (0, p.jsx)(n9.D, {
                              onClick: function () {
                                  s((e) => e + 5);
                              },
                              className: bA.Qf,
                              children: (0, p.jsx)(Q.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: U.intl.format(U.t.jULEDr, {
                                      numberOfUsers: i + 5 < t.length ? 5 : t.length - i,
                                  }),
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
let bS = (0, E.E2)(h.X.BLOCKED_USERS, {
        useSearchTerms: () => [U.intl.string(U.t.PFOUKW)],
        usePredicate: () => (0, f.bG)([bd.A], () => bd.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, f.yK)([bd.A], () => bd.A.getBlockedIDs());
            return (0, p.jsx)(bx, { userIds: e, listType: "blocked" });
        },
    }),
    bp = (0, E.E2)(h.X.IGNORED_USERS, {
        useSearchTerms: () => [U.intl.string(U.t["93ZDWE"])],
        usePredicate: () => (0, f.bG)([bd.A], () => bd.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, f.yK)([bd.A], () => bd.A.getIgnoredIDs());
            return (0, p.jsx)(bx, { userIds: e, listType: "ignored" });
        },
    }),
    bT = (0, E.zZ)(h.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["+Iryf3"]),
        useSubtitle: () =>
            U.intl.format(U.t["0aNQo9"], { helpArticle: eC.A.getArticleURL(I.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [bS, bp],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, f.cf)([bd.A], () => ({
                hasBlockedUsers: bd.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: bd.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var bf = n(22385),
    bI = n(556534),
    b_ = n(111159),
    bN = n(152056),
    bC = n(428031),
    by = n(978433);
let bb = { label: () => U.intl.string(U.t["32u1Dx"]), value: bf.YG };
var bv = n(307863),
    bj = n(954225);
function bO() {
    return (0, bv.e)() ? U.intl.string(U.t.PMsfcH) : U.intl.string(U.t.RAQUSN);
}
function bL(e, t) {
    td.default.track(I.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let bR = (0, E.zD)(h.X.PERMISSIONS_DMS_SETTING, {
    useTitle: bO,
    useSubtitle: function () {
        let e = (0, bI.Tx)(),
            t = (0, bI.q9)(),
            n = (0, bv.e)();
        return e === bf.YG
            ? n
                ? U.intl.string(U.t.XXGmuB)
                : U.intl.string(U.t.wbYDfT)
            : t
              ? U.intl.string(U.t.V0ka0Q)
              : n
                ? U.intl.string(U.t.F9WY3f)
                : U.intl.string(U.t.G7c3Xo);
    },
    useValue: function () {
        let e = (0, bI.Tx)(),
            t = M.$s.useSetting().includes(e),
            n = (0, bC.K)();
        return e === bf.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, Ch.uM)();
        return (0, bI.Tx)() === bf.YG && e;
    },
    setValue: function (e) {
        let t = bf.xk.getState().selectedGuildId;
        if (t === bf.YG) {
            var n;
            ((n = !e),
                (0, Cz.O)({
                    header: U.intl.string(U.t["uUr+GR"]),
                    body: U.intl.string(U.t.hjGJBp),
                    confirmText: U.intl.string(U.t.gm1Vej),
                    cancelText: U.intl.string(U.t.p89ACt),
                    confirmButtonColor: l3.$n.Colors.BRAND,
                    onConfirm: function () {
                        (M.n6.updateSetting(n), bL(n, !1));
                    },
                    onCancel: function () {
                        (M.n6.updateSetting(n), M.$s.updateSetting(n ? sL.A.getGuildIds() : []), bL(n, !0));
                    },
                }));
        } else {
            let n = (0, ia.Tb)();
            (e ? n.delete(t) : n.add(t),
                M.$s.updateSetting(Array.from(n)),
                td.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: bj.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eO.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var bD = n(116774),
    bP = n(953298);
function bG(e, t) {
    td.default.track(I.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function bM() {
    return U.intl.string(U.t["3o2ojh"]);
}
let bU = (0, E.zD)(h.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: bM,
        useSubtitle: function () {
            let e = (0, bI.q9)(),
                t = eC.A.getArticleURL(I.MVz.MESSAGE_REQUESTS);
            return e
                ? U.intl.format(U.t.WpnWLc, { helpdeskArticle: t })
                : U.intl.format(U.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, bI.Tx)(),
                t = (0, bC.K)(),
                n = M.$s.useSetting().includes(e),
                i = (0, bD.s)(),
                s = (0, Ch.uM)(),
                l = M.YX.useSetting(),
                r = M.Zr.useSetting().includes(e);
            return !!i || (e === bf.YG && s ? !l : e === bf.YG ? !t && !l : !n && !r);
        },
        useDisabled: function () {
            let e = (0, bI.Tx)(),
                t = (0, Ch.uM)(),
                n = (0, bC.K)(),
                i = M.$s.useSetting().includes(e),
                s = (0, bD.s)();
            return e === bf.YG ? n || t || s : i || s;
        },
        setValue: function (e) {
            let t = bf.xk.getState().selectedGuildId;
            if (!e && (0, bP.w)())
                return void IR.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === bf.YG) {
                var n;
                ((n = !e),
                    (0, Cz.O)({
                        header: U.intl.string(U.t.yAfu1p),
                        body: U.intl.string(U.t.Ry2z74),
                        confirmText: U.intl.string(U.t.gm1Vej),
                        cancelText: U.intl.string(U.t.p89ACt),
                        confirmButtonColor: l3.$n.Colors.BRAND,
                        onConfirm: function () {
                            (M.YX.updateSetting(n), bG(n, !1));
                        },
                        onCancel: function () {
                            (M.YX.updateSetting(n), M.Zr.updateSetting(n ? sL.A.getGuildIds() : []), bG(n, !0));
                        },
                    }));
            } else {
                let n = (0, ia.xo)();
                (e ? n.delete(t) : n.add(t),
                    M.Zr.updateSetting(Array.from(n)),
                    td.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: bj.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eO.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    bV = (0, E.E2)(h.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [bO(), bM()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, bf.xk)(),
                s = (0, f.bG)([gC.Ay], () => gC.Ay.getFlattenedGuildIds()),
                l = (0, f.bG)([sL.A], () => sL.A.getGuilds()),
                r =
                    ((e = M.$s.useSetting()),
                    (t = (0, bC.K)()),
                    (0, f.bG)(
                        [sL.A],
                        () => {
                            let n = new Set(e);
                            return sL.A.getGuildIds().filter((e) => n.has(e) !== t).length;
                        },
                        [e, t],
                    )),
                a = s[0];
            T.useEffect(
                () =>
                    bN.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = bf.xk.getState().selectedGuildId;
                            "" === t && "" !== e && n === bf.YG && null != a
                                ? i(a)
                                : "" === e && n !== bf.YG && i(bf.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = T.useMemo(() => {
                    let e = [];
                    return (
                        e.push({
                            ...bb,
                            id: bb.value,
                            label: bb.label(),
                            leading: (0, p.jsx)("div", {
                                className: by.KP,
                                children: (0, p.jsx)(b_.p, {
                                    size: "sm",
                                    color: "white",
                                    "aria-hidden": !0,
                                    className: by.cl,
                                }),
                            }),
                        }),
                        s.forEach((t) => {
                            let n = l[t];
                            null != n &&
                                e.push({
                                    id: n.id,
                                    label: n.name,
                                    value: n.id,
                                    leading: (0, p.jsx)(gU.Ay, {
                                        className: by.cl,
                                        guild: n,
                                        size: gU.Ay.Sizes.SMALLER,
                                        active: !0,
                                    }),
                                });
                        }),
                        e
                    );
                }, [s, l]),
                u = n === bf.YG && r > 0;
            return (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(pq.Z, {
                        selectionMode: "single",
                        onSelectionChange: function (e) {
                            i(e);
                        },
                        value: n,
                        options: o,
                    }),
                    u &&
                        (0, p.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: by.h_,
                            children: U.intl.format(U.t.uyBKps, {
                                count: r,
                                countHook: (e, t) =>
                                    (0, p.jsx)(
                                        Q.E,
                                        { tag: "span", variant: "text-sm/normal", color: "text-default", children: e },
                                        t,
                                    ),
                            }),
                        }),
                ],
            });
        },
    }),
    bk = (0, E.E2)(h.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            let e = (0, bI.Tx)(),
                t = yD();
            return e === bf.YG && null != t;
        },
        Component: function () {
            let e = yD(),
                t = yR(CS.YA.AGE_CONFIRMATION_NOTICE, IG),
                n = yR(CS.YA.CONTENT_AND_SOCIAL_NOTICE, IL.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, p.jsx)(yL, {
                        noticeType: CS.YA.AGE_CONFIRMATION_NOTICE,
                        iconAlign: "center",
                        body: U.intl.format(IV.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        buttonText: U.intl.string(IV.default["cI+bc/"]),
                        onButtonClick: t.handleConfirmAge,
                    });
                case "teen":
                    return (0, p.jsx)(yL, {
                        noticeType: CS.YA.CONTENT_AND_SOCIAL_NOTICE,
                        iconAlign: "start",
                        body: U.intl.format(IV.default["l+jt8J"], { handleOnConfirmAgeHook: n.handleConfirmAge }),
                        buttonText: U.intl.string(U.t.hvVgAZ),
                        onButtonClick: n.handleLearnMore,
                    });
                case void 0:
                    return null;
            }
        },
    }),
    bw = (0, E.zZ)(h.X.PERMISSIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.Y5GYcX),
        useSubnavLabel: () => U.intl.string(U.t.YUU0RF),
        useInlineNotice: function () {
            let e = Cp(),
                t = yU();
            if ((0, bI.Tx)() === bf.YG) return e ?? t;
        },
        buildLayout: () => [bV, bR, bU, bk],
    }),
    bF = (0, E.zZ)(h.X.SPAM_FILTERS_CATEGORY, { useTitle: () => U.intl.string(U.t.Qwuoic), buildLayout: () => [be] }),
    bB = (0, E.zZ)(h.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = yj();
            function t(e, t) {
                return (0, p.jsx)(
                    Q.E,
                    { tag: "span", variant: "text-sm/normal", color: "text-default", children: e },
                    t,
                );
            }
            return 0 === e.length
                ? U.intl.string(U.t.Amr1IZ)
                : 1 === e.length
                  ? U.intl.format(U.t["60IaC2"], { gameName: e[0].name, gameListHook: t })
                  : 2 === e.length
                    ? U.intl.format(U.t.lthjd7, { game1: e[0].name, game2: e[1].name, gameListHook: t })
                    : U.intl.format(U.t.RAUmQM, {
                          game1: e[0].name,
                          game2: e[1].name,
                          remaining: e.length - 2,
                          gameListHook: t,
                      });
        },
        useSubnavLabel: () => U.intl.string(U.t.YpCiMt),
        useHeaderDecoration: () => {
            let e = (function () {
                let { sortedGames: e } = yj();
                return T.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, p.jsx)("img", {
                                src: G.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: h$.CD,
                                height: h$.CD,
                            }),
                            shape: h$.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, p.jsx)("img", {
                                    src: G.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: h$.YP,
                                    height: h$.YP,
                                }),
                                shape: h$.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: S.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [U.intl.string(U.t.YpCiMt)],
        initialize: () => {
            xb.A.fetch();
        },
        buildLayout: () => [yb, yv, yC, yT],
    }),
    bz = (0, E.t_)(h.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => U.intl.string(U.t.Cz07t8),
        buildLayout: () => [y8, bF, bw, bu, bB, bT],
    }),
    bY = (0, E.i4)(h.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.Cz07t8),
        icon: yS.l,
        buildLayout: () => [bz],
    });
var bX = n(782603),
    bH = n(899847),
    bW = n(695515);
let bK = (0, E.Hn)(h.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => U.intl.string(U.t["8rHeOr"]),
        useSubtitle: () => U.intl.string(U.t["eJE6+J"]),
        useValue: M.cU.useSetting,
        setValue: M.cU.updateSetting,
        useOptions: () =>
            H.range(1, 11).map((e) => ({
                id: e.toString(),
                value: 60 * e,
                label: U.intl.formatToPlainString(U.t.iXLF9W, { minutes: e }),
            })),
    }),
    bZ = (0, E.zD)(h.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => U.intl.string(U.t["btbS+Z"]),
        useSubtitle: () =>
            U.intl.format(U.t.Q5crhR, { onClick: () => (0, ng.openUserSettings)(h.X.TTS_PLAYBACK_RATE) }),
        useValue: M.on.useSetting,
        setValue: M.on.updateSetting,
    }),
    bq = (0, E.Qx)(h.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.JZxxGx),
        useSubtitle: () => U.intl.string(U.t.HDLtJl),
        useValue: () => (0, f.bG)([aw.A], () => aw.A.getTTSType()),
        setValue: (e) => aX.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: U.intl.string(U.t.B1AGeJ), value: I.aVn.ALL_CHANNELS },
                { name: U.intl.string(U.t.uzZg9e), value: I.aVn.SELECTED_CHANNEL },
                { name: U.intl.string(U.t.DYO5Oi), value: I.aVn.NEVER },
            ];
        },
        usePredicate: () => X.$j,
    }),
    bQ = h.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    b$ = (0, E.bd)(bQ, {
        useTitle: (e) => (e ? U.intl.string(U.t.RyimDk) : U.intl.string(U.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return t_(bQ, {
                formatter: (e) => {
                    let { title: t, index: n } = e;
                    return "string" != typeof t
                        ? t
                        : 0 === n
                          ? `${t.charAt(0).toLocaleUpperCase()}${t.slice(1).toLocaleLowerCase()}`
                          : t.toLocaleLowerCase();
                },
            });
        },
        buildLayout: () => [bK, bZ, bq],
    }),
    bJ = (0, E.zZ)(h.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => U.intl.string(U.t["31DySj"]),
        buildLayout: () => [b$],
    }),
    b0 = (0, E.zD)(h.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => U.intl.string(U.t.VH8AIJ),
        useSubtitle: () => U.intl.string(U.t["9K4qwX"]),
        useValue: function () {
            return (0, f.bG)([aw.A], () => !aw.A.getDisableUnreadBadge());
        },
        setValue: (e) => aX.default.setDisableUnreadBadge(!e),
    }),
    b1 = (0, E.zZ)(h.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.l6w3Vj),
        buildLayout: () => [b0],
    });
var b2 = n(840559),
    b3 = n(997187);
let b5 = (0, uo.mj)({
    kind: "user",
    name: "2026-09-update-email-settings-copy-subtext",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var b4 = n(723923);
let b6 = b4.px.map((e) =>
        (0, E.zD)(`${h.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, f.cf)([b3.A], () => b3.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, b2.CA)(e.category, t),
        }),
    ),
    b8 = (0, E.Tf)(h.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => U.intl.string(U.t.Ra9Pwk),
        useSubtitle: () => U.intl.string(U.t.iYjQ8X),
        useLabel: () => U.intl.string(U.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, f.cf)([b3.A], () => b3.A.getEmailSettings());
            return b4.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, b2.NI)(),
        useVariant: () => "critical-secondary",
    }),
    b7 = (0, E.zZ)(h.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => U.intl.string(U.t["w/qqKK"]),
        useSubtitle: function () {
            let { enabled: e } = b5.useConfig({ location: "Email Settings Category" });
            return e ? U.intl.string(U.t.WViBDk) : void 0;
        },
        initialize: function () {
            let { initialized: e } = b3.A.getEmailSettings();
            e || (0, b2.cR)();
        },
        buildLayout: () => [...b6, b8],
    }),
    b9 = (0, E.zD)(h.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t["/0WCll"]),
        useSubtitle: () => U.intl.string(U.t.wF9ih3),
        useValue: function () {
            return (0, f.bG)([aw.A], () => aw.A.getDesktopType()) !== I.nRU.NEVER;
        },
        setValue: (e) => aX.default.setDesktopType(e ? I.nRU.ALL : I.nRU.NEVER),
    });
var ve = n(832712),
    vt = n(543465),
    vn = n(790782);
let vi = (0, E.zD)(h.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => U.intl.string(U.t["k6m/si"]),
    useSubtitle: () => U.intl.string(U.t.LGynPs),
    useValue: () => (0, f.bG)([vt.Ay], () => vt.Ay.useNewNotifications),
    setValue: function (e) {
        (ve.A.setAccountFlag(h7.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (hs.w.set("turnedOffNewNotifications", !0),
                td.default.track(I.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: sL.A.getGuildsArray().filter(
                        (e) => vt.Ay.resolveGuildUnreadSetting(e) === vn.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, f.bG)(
            [lf.default, vt.Ay],
            () =>
                lf.default.getCurrentUser()?.isStaff() ||
                lf.default.getCurrentUser()?.isStaffPersonal() ||
                vt.Ay.useNewNotifications,
        ),
});
var vs = n(534654);
let vl = (0, E.zD)(h.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => U.intl.string(U.t.z9h8Ym),
        useSubtitle: () => U.intl.string(U.t.TummoQ),
        useValue: () => (0, f.bG)([aw.A], () => aw.A.screenDowntimeReminder),
        setValue: (e) => aX.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, vs.A)(),
                t = (0, NC.Du)();
            return e && t;
        },
    }),
    vr = (0, E.zD)(h.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => U.intl.string(U.t.onrAy7),
        useSubtitle: () => U.intl.string(U.t["/071J7"]),
        useValue: M.gY.useSetting,
        setValue: (e) => M.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, vs.A)(),
                t = (0, NC.Du)();
            return e && t;
        },
    }),
    va = (0, E.zD)(h.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.NjOMvh),
        useValue: M.oz.useSetting,
        setValue: function (e) {
            (M.oz.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h7.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [U.intl.string(U.t.hi4dSk)],
    }),
    vo = (0, E.zD)(h.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.sQQgFj),
        useValue: M.NR.useSetting,
        setValue: function (e) {
            (M.NR.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h7.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    vu = (0, E.zD)(h.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.FSNIvs),
        useValue: M.Yh.useSetting,
        setValue: function (e) {
            (M.Yh.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h7.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    vd = (0, E.zD)(h.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.xBLMhQ),
        useValue: M.T3.useSetting,
        setValue: function (e) {
            (M.T3.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h7.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var vc = n(815807);
let vg = (0, E.Hn)(h.X.REACTION_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: U.intl.string(U.t["9x/RtT"]), value: eQ.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: U.intl.string(U.t.fJAbQd), value: eQ.Tz.ONLY_DMS },
            { id: "disabled", label: U.intl.string(U.t["xu+UDU"]), value: eQ.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: M.Zp.useSetting,
        setValue: (e) => (0, vc.n4)(e, M.Zp.getSetting()),
    }),
    vm = (0, E.zD)(h.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t["k51K1+"]),
        useValue: M.Qr.useSetting,
        setValue: function (e) {
            (M.Qr.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h7.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    vA = (0, uo.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    vE = (0, E.zD)(h.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.G8NPz6),
        useValue: M.zS.useSetting,
        setValue: function (e) {
            (M.zS.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h7.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => vA.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    vh = (0, E.FW)(h.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.FEVRDV),
        buildLayout: () => [vu, va, vo, vm, vE, vd, vg],
    }),
    vx = (0, E.zD)(h.X.TASK_BAR_FLASHING, {
        useTitle: () => U.intl.string(U.t.xSmFQG),
        useSubtitle: () => U.intl.string(U.t.bd4j4x),
        useValue: () => (0, f.bG)([aw.A], () => aw.A.taskbarFlash),
        setValue: (e) => aX.default.setTaskbarFlash(e),
        usePredicate: () => (0, nf.uF)(),
    }),
    vS = (0, E.zZ)(h.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => U.intl.string(U.t["/dp6yY"]),
        buildLayout: () => [b9, vx, vh, vi, vr, vl],
    });
var vp = n(965957),
    vT = n(312671),
    vf = n(235079);
let vI = (0, E.zD)(h.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = aF.A.useHolidaySoundpack();
        return null == e ? "" : U.intl.format(U.t["E/OyBr"], { soundpack: U.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, f.bG)([vT.A], () => vT.A.getSoundpack()),
            t = aF.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = aF.A.getHolidaySoundpack();
        (th()(null != t, "predicate should fail if no soundpack is available"), (0, vp.p)(e ? t : vf.i.CLASSIC));
    },
    usePredicate: aF.A.useIsEligible,
});
var v_ = n(970931);
let vN = {
        useTitle: () => U.intl.string(U.t.jD1qzM),
        sound: "message1",
        useDisabled: v_.kB,
        useDisabledMessage: () => ((0, v_.kB)() ? U.intl.string(U.t.cIRG0s) : void 0),
    },
    vC = { useTitle: () => U.intl.string(U.t.XBrJT6), sound: "call_ringing" },
    vy = (0, E.zD)(h.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.TzjwV9),
        useSubtitle: () => U.intl.format(U.t.OOiGCM, { onClick: () => aK("message3") }),
        useValue: () =>
            (0, f.bG)([aw.A], () => aw.A.getNotifyMessagesInSelectedChannel() && !aw.A.getDisableAllSounds()),
        setValue: (e) => aX.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, f.bG)([aw.A], () => aw.A.getDisableAllSounds()),
    }),
    vb = (0, E.zD)(h.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => U.intl.string(U.t["2ZhCOd"]),
        useSubtitle: () => U.intl.string(U.t.EAKdPr),
        useValue: () => (0, f.bG)([aw.A], () => aw.A.getDisableAllSounds()),
        setValue: (e) => aX.default.toggleDisableAllSounds(e),
    }),
    vv = (0, E.D1)(h.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                aW();
            };
        },
        buildLayout: () => [aZ(vN), vy, aZ(vC), vb],
    }),
    vj = (0, E.AK)(h.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t["MMy+lm"]),
        useSearchTerms: () => [U.intl.string(U.t["MMy+lm"])],
        destinationKey: h.X.SOUNDS_CATEGORY,
    }),
    vO = (0, E.gN)(h.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [vj] }),
    vL = (0, E.zZ)(h.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.LweOYy),
        buildLayout: () => [vI, vv, vO],
    }),
    vR = (0, E.t_)(h.X.NOTIFICATIONS_PANEL, {
        useTitle: () => U.intl.string(U.t.HcoRu0),
        initialize: () => {
            null != bW.A.getAgeGroup() || bW.A.isLoading() || (bW.A.canRefetch() && bH.Ay.initialPageLoad());
        },
        buildLayout: () => [vS, vL, b1, b7, bJ],
    }),
    vD = (0, E.i4)(h.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.HcoRu0),
        icon: bX.BellIcon,
        buildLayout: () => [vR],
    }),
    vP = (0, E.WI)(h.X.USER_SECTION, {
        useTitle: () => U.intl.string(U.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [NY, yx, bY, vD, Cd],
    });
var vG = n(387758),
    vM = n(271866),
    vU = n(147964),
    vV = n(868511);
let vk = (0, E.zD)(h.X.APPLICATION_TEST_MODE, {
        useTitle: () => U.intl.string(U.t.erOqlh),
        useSubtitle: () => U.intl.string(U.t["52hMnD"]),
        usePredicate: M.Q_.useSetting,
        useValue: () => (0, f.bG)([vU.A], () => null != vU.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, sI.openModal)((e) => (0, p.jsx)(vV.A, { ...e })) : vM.cL();
        },
    }),
    vw = (0, E.zD)(h.X.DEVELOPER_MODE, {
        useTitle: () => U.intl.string(U.t.ObIb1Q),
        useSubtitle: () => U.intl.format(U.t["CY6q/Q"], { apiDocsUrl: I.X7G.API_DOCS }),
        useValue: M.Q_.useSetting,
        setValue: M.Q_.updateSetting,
        usePredicate: () => uj.p5,
    }),
    vF = (0, E.zZ)(h.X.DEVELOPER_CATEGORY, { buildLayout: () => [vw, vk] }),
    vB = (0, E.t_)(h.X.DEVELOPER_PANEL, { useTitle: () => U.intl.string(U.t["0BRxRp"]), buildLayout: () => [vF] }),
    vz = (0, E.i4)(h.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: vG.G,
        useTitle: () => U.intl.string(U.t["0BRxRp"]),
        buildLayout: () => [vB],
    });
var vY = n(70688),
    vX = n(830215);
let vH = (0, E.i4)(h.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => U.intl.string(U.t["2jxGer"]),
        icon: vY.DoorExitIcon,
        onClick: () => {
            (0, n8.A)({
                title: U.intl.string(U.t["2jxGer"]),
                subtitle: U.intl.string(U.t.SUnWBB),
                confirmText: U.intl.string(U.t["2jxGer"]),
                onConfirm: () => {
                    vX.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    vW = (0, E.WI)(h.X.UTILITY_SECTION, {
        useTitle: () => U.intl.string(U.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [vz, vH],
    }),
    vK = (0, E.Hr)({ buildLayout: () => [Ib, vP, Ey, oA, p8, hZ, vW], analyticsKey: "user_settings" });
