n.d(t, { D: () => jw });
var i,
    l,
    s,
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
    h = n(419954),
    S = n(780964),
    T = n(550640),
    p = n(374193),
    f = n(477900),
    x = n(582128),
    I = n(855986),
    _ = n(652215),
    b = n(346055),
    N = n(534514),
    C = n(95362),
    y = n(97808),
    v = n(778712),
    j = n(821609),
    O = n(775602),
    R = n(432005),
    D = n(963852),
    L = n(763754),
    P = n(20851),
    G = n(95701),
    M = n(486020),
    U = n(253932),
    V = n(792996),
    k = n(345016);
let w = new G.nA({ id: "1337", guild_id: "1337", type: _.rbe.GUILD_TEXT, name: "preview" }),
    F = [
        { status: _.clD.IDLE, discriminator: "2" },
        { status: _.clD.DND, discriminator: "3" },
        { status: _.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, R.rh)({ ...(0, D.Ay)({ channelId: w.id, content: e }), state: _.cmJ.SENT, reactions: t });
}
var X = n(471245);
let z = (0, h.zD)(S.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => V.intl.string(V.t.TZ2hZH),
        useSubtitle: () => V.intl.string(V.t.Q7wgHc),
        useValue: () => U.D_.useSetting(),
        setValue: (e) => U.D_.updateSetting(e),
    }),
    H = (0, h.zD)(S.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => V.intl.string(V.t.XYvMIX),
        useSubtitle: () => V.intl.string(V.t.T0rbtM),
        useValue: U._z.useSetting,
        setValue: U._z.updateSetting,
    });
var Y = n(100767),
    W = n(435558),
    K = n.n(W),
    Z = n(935399),
    q = n(331322),
    Q = n(893007),
    J = n(113494),
    $ = n(782134),
    ee = n(54570),
    et = n(8880),
    en = n(75804);
let ei = K().debounce((e) => {
    (0, ee.zU)(e);
}, 250);
function el(e) {
    return 0 === e
        ? { value: e, label: V.intl.string(V.t["493lwX"]) }
        : 10 === e
          ? { value: e, label: V.intl.string(V.t.ZSZEdS) }
          : 1 === e
            ? { value: e, label: "x1.0" }
            : { value: e, label: e % 1 == 0 ? "" : void 0 };
}
function es() {
    let [e, t] = x.useState(!1);
    return (
        (0, Z.l0)(() => (0, ee.pr)()),
        (0, f.jsx)(j.$, {
            text: V.intl.string(V.t.SKNnqq),
            icon: e ? J.PauseIcon : $.PlayIcon,
            size: "sm",
            onClick: function () {
                if (e) {
                    ((0, ee.pr)(), t(!1));
                    return;
                }
                ((0, ee.AU)(
                    V.intl.string(V.t.PKaNJL),
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
let er = (0, h.E2)(S.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [V.intl.string(V.t.lsW5Ev)],
        Component: function () {
            let e = (0, I.bG)([et.A], () => et.A.speechRate);
            return (0, f.jsxs)(q.B, {
                gap: 16,
                children: [
                    (0, f.jsx)(Q.A, {
                        label: V.intl.string(V.t.lsW5Ev),
                        description: V.intl.string(V.t.Ci4wMS),
                        marks: en.P.map(el),
                        defaultValue: e,
                        defaultMark: 1,
                        snapToMarks: !0,
                        minValue: en.P["0"],
                        maxValue: en.P[en.P.length - 1],
                        onChangeEnd: ei,
                        formatValue: (e) => `x${e.toFixed(2)}`,
                    }),
                    (0, f.jsx)(es, {}),
                ],
            });
        },
        usePredicate: () => Y.$j,
    }),
    ea = (0, h.zZ)(S.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => V.intl.string(V.t.XVR0Rb),
        buildLayout: () => [er, H, z],
    }),
    eo = (0, h.AK)(S.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.aTfeGK),
        destinationKey: S.X.APPEARANCE_PANEL,
    }),
    eu = (0, h.gN)(S.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [eo] });
var ed = n(955572);
let ec = (0, h.zD)(S.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => V.intl.string(V.t.OCJg5f),
    useSubtitle: () => V.intl.string(V.t.HEO0s3),
    useValue: () => (0, I.bG)([O.Ay], () => O.Ay.desaturateUserColors),
    setValue: () => (0, ed.YV)(),
});
var eg = n(652525);
let em = (0, h.zD)(S.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => V.intl.string(V.t["+Isihb"]),
        useSubtitle: () => V.intl.string(V.t.nNZ1Tz),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.enableCustomCursor),
        setValue: (e) => (0, ed.ts)(e),
        usePredicate: () => (0, eg.t)("EnableCustomCursorSetting"),
    }),
    eA = (0, h.zD)(S.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => V.intl.string(V.t["S3z+pV"]),
        useSubtitle: () => V.intl.string(V.t["3QuI9+"]),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isSwitchIconsEnabled),
        setValue: (e) => (0, ed.Gm)(e),
        hasIcon: !0,
    });
var eE = n(554146);
let eh = (0, h.zD)(S.X.HIGH_CONTRAST_MODE, {
    useTitle: () => V.intl.string(V.t.aZlePv),
    useSubtitle: () => V.intl.string(V.t["v2qF8+"]),
    useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isHighContrastModeEnabled),
    setValue: (e) => (0, ed.uh)(e ? O._1.HIGH : O._1.DEFAULT),
    getDismissibleBadges: () => [
        { badgeType: p.Xi.NEW, dismissibleContent: eE.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
    ],
});
var eS = n(406360),
    eT = n(964404);
let ep = (0, h.Qx)(S.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => V.intl.string(V.t.nemtgW),
        useSubtitle: () => V.intl.string(V.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: p.Xi.BETA }),
        useOptions: function () {
            return x.useMemo(
                () => [
                    { name: V.intl.string(V.t.D5Fma9), desc: V.intl.string(V.t.Qj75ck), value: "no-limit" },
                    { name: V.intl.string(V.t.ldcGIH), desc: V.intl.string(V.t["+V/bDk"]), value: "standard" },
                ],
                [],
            );
        },
        usePredicate: function () {
            return (0, eS.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, ed.FU)(e);
        },
        useValue: function () {
            return (0, I.bG)([eT.Ay], () => eT.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", V.intl.string(V.t["O/Gjvn"])],
    }),
    ef = (0, h.Hn)(S.X.OFFICIAL_MESSAGE_STYLE, {
        useTitle: () => V.intl.string(V.t.nC2XBl),
        useSubtitle: () => V.intl.string(V.t.a3IPrX),
        useOptions: () => [
            { id: "default", label: V.intl.string(V.t.ERaS6f), value: "default" },
            { id: "no_text_color", label: V.intl.string(V.t.JKfipk), value: "no_text_color" },
            { id: "no_gradient", label: V.intl.string(V.t.O2vBoY), value: "no_gradient" },
            { id: "hidden", label: V.intl.string(V.t["+loyQl"]), value: "hidden" },
        ],
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.officialMessageStyle),
        setValue: (e) => (0, ed.w_)(e),
    }),
    ex = (0, h.Hn)(S.X.ROLE_STYLE, {
        useTitle: () => V.intl.string(V.t.uSOPWm),
        useSubtitle: () => V.intl.string(V.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: V.intl.string(V.t.eDdMzJ), value: "username" },
            { id: "dot", label: V.intl.string(V.t.rdmJp0), value: "dot" },
            { id: "hidden", label: V.intl.string(V.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.roleStyle),
        setValue: (e) => (0, ed.IX)(e),
    });
(0, h.Qx)(S.X.ROLE_STYLE, {
    useTitle: () => V.intl.string(V.t.uSOPWm),
    useSubtitle: () => V.intl.string(V.t["86hjzQ"]),
    useOptions: () => [
        { name: V.intl.string(V.t.YEOEi6), value: "username" },
        { name: V.intl.string(V.t.mQaro3), value: "dot" },
        { name: V.intl.string(V.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, I.bG)([O.Ay], () => O.Ay.roleStyle),
    setValue: (e) => (0, ed.IX)(e),
});
let eI = (0, h.sN)(S.X.SATURATION, {
    useTitle: () => V.intl.string(V.t["5PWWCY"]),
    useSubtitle: () => V.intl.string(V.t.xf5S6P),
    markers: _.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => O.Ay.saturation,
    asValueChanges: (e) => (0, ed.HU)(e),
});
var e_ = n(964486),
    eb = n(839214),
    eN = n(502229),
    eC = n(975571);
let ey = (0, eb.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    ev = (0, h.zD)(S.X.SYNC_FORCED_COLORS, {
        useTitle: () => V.intl.string(V.t.cguiec),
        useSubtitle: () => V.intl.format(V.t.GwEVE2, { learnMoreLink: eC.A.getArticleURL(_.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, I.bG)([O.Ay], () => O.Ay.syncForcedColors);
            return (
                (0, e_.Ay)(() => {
                    ey.setState({ syncEnabled: O.Ay.syncForcedColors });
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
            if (e === O.Ay.syncForcedColors) return void ey.setState({ syncEnabled: e });
            let n = setTimeout(() => {
                ((0, ed.D3)(e), ey.setState({ updateTimeout: null }));
            }, 150);
            ey.setState({ syncEnabled: e, updateTimeout: n });
        },
        usePredicate: () => (0, eN.D)(),
    }),
    ej = (0, h.zZ)(S.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => V.intl.string(V.t.JqvyiY),
        buildLayout: () => [eI, ec, eh, em, ev, ep, ex, ef, eA, eu],
    });
var eO = n(397438),
    eR = n(355097),
    eD = n(571674);
function eL(e) {
    return (0, I.bG)([eO.A], () =>
        (function (e) {
            switch (e) {
                case eR._A.REDUCED_MOTION:
                    return V.intl.format(V.t["1dT9V4"], {});
                case eR._A.REDUCED_MOTION_STICKERS:
                    return V.intl.string(V.t["2ExvRu"]);
                case eR._A.GAME_MODE:
                    return V.intl.string(eD.default.VGcdxP);
                default:
                    return;
            }
        })(eO.A.getAppliedOverrideReasonKey(e)),
    );
}
function eP(e) {
    return (0, I.bG)([eO.A], () => eO.A.getAppliedOverrideReasonKey(e) === eR._A.GAME_MODE);
}
let eG = (0, h.zD)(S.X.ANIMATE_EMOJIS, {
        useTitle: () => V.intl.string(V.t.iIaOlc),
        useSubtitle: () => eL("animateEmoji"),
        useDisabled: () => eP("animateEmoji"),
        useValue: () => U.Sf.useSetting(),
        setValue: (e) => U.Sf.updateSetting(e),
    }),
    eM = (0, h.zD)(S.X.ANIMATE_GIFS, {
        useTitle: () => V.intl.string(V.t.wqsK7q),
        useSubtitle: () => eL("gifAutoPlay"),
        useDisabled: () => eP("gifAutoPlay"),
        useValue: () => U.kt.useSetting(),
        setValue: (e) => U.kt.updateSetting(e),
    });
var eU = n(823894);
let eV = (0, h.Qx)(S.X.ANIMATE_STICKERS, {
        useTitle: () => V.intl.string(V.t.sBHIh0),
        useSubtitle: () => eL("animateStickers"),
        useDisabled: () => eP("animateStickers"),
        useOptions: () => [
            { name: V.intl.string(V.t["Xp+X2U"]), value: eU.BJ.ALWAYS_ANIMATE },
            { name: V.intl.string(V.t.IlLT7e), desc: V.intl.string(V.t.bIW9Tl), value: eU.BJ.ANIMATE_ON_INTERACTION },
            { name: V.intl.string(V.t.IGu8x3), value: eU.BJ.NEVER_ANIMATE },
        ],
        useValue: () => U.S0.useSetting(),
        setValue: (e) => U.S0.updateSetting(e),
    }),
    ek = (0, h.zD)(S.X.REDUCED_MOTION, {
        useTitle: () => V.intl.string(V.t.b3XBzg),
        useSubtitle: () => V.intl.format(V.t.XqvxJc, { helpdeskArticle: eC.A.getArticleURL(_.MVz.REDUCED_MOTION) }),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.prefersReducedMotion),
        setValue: (e) => (0, ed.qz)(e ? "reduce" : "no-preference"),
    }),
    ew = (0, h.zD)(S.X.SYNC_REDUCED_MOTION, {
        useTitle: () => V.intl.string(V.t.oL55A6),
        useValue: () => (0, I.bG)([O.Ay], () => "auto" === O.Ay.rawPrefersReducedMotion),
        setValue: (e) => (0, ed.qz)(e ? "auto" : O.Ay.systemPrefersReducedMotion),
    });
function eF(e) {
    return V.intl.formatToPlainString(V.t.pyvjRp, { seconds: e });
}
let eB = (0, h.sN)(S.X.TOAST_DURATION, {
        useTitle: () => V.intl.string(V.t["3oxlia"]),
        useSubtitle: () => V.intl.string(V.t.CZ3jxp),
        markers: _.hH7.TOAST_DURATION_SECOND_INCREMENTS,
        onMarkerRender: (e) =>
            e % 5 == 0 || e === _.hH7.TOAST_DURATION_MIN_SECONDS || e === _.hH7.TOAST_DURATION_MAX_SECONDS
                ? eF(e)
                : void 0,
        onValueRender: eF,
        stickToMarkers: !0,
        minValue: _.hH7.TOAST_DURATION_MIN_SECONDS,
        maxValue: _.hH7.TOAST_DURATION_MAX_SECONDS,
        useDefaultValue: () => _.hH7.TOAST_DURATION_DEFAULT_MS / 1e3,
        getInitialValue: () => O.Ay.minToastDurationMs / 1e3,
        asValueChanges: (e) => (0, ed.E7)(1e3 * e),
    }),
    eX = (0, h.zZ)(S.X.MOTION_CATEGORY, {
        useTitle: () => V.intl.string(V.t.e3TR1b),
        buildLayout: () => [ek, ew, eB, eM, eG, eV],
    });
var ez = n(688810),
    eH = n(259065),
    eY = n(842671);
let eW = (0, h.zD)(S.X.DISPLAY_NAME_STYLES, {
    useTitle: () => V.intl.string(eY.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, ez.Ay)();
        return V.intl.format(eY.default.aEax6P, {
            onClickOpenModal() {
                (0, eH.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, I.bG)([O.Ay], () => O.Ay.displayNameStylesEnabled),
    setValue: (e) => (0, ed.Dm)(e),
});
function eK(e) {
    return `${e.toFixed(0)}px`;
}
let eZ = (0, h.sN)(S.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => V.intl.string(V.t.rT3Pq5),
        useSubtitle: () => V.intl.string(V.t.LXUhen),
        markers: _.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: _.hH7.FONT_SIZES["0"],
        maxValue: _.hH7.FONT_SIZES[_.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => _.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => O.Ay.fontSize,
        onValueRender: eK,
        onMarkerRender: eK,
        asValueChanges: (e) => (0, ed.XS)(e),
    }),
    eq = (0, h.zD)(S.X.UNDERLINE_LINKS, {
        useTitle: () => V.intl.string(V.t.OLZFB8),
        useSubtitle: () => V.intl.string(V.t.DIX3ke),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.alwaysShowLinkDecorations),
        setValue: (e) => (0, ed.kI)(e),
    }),
    eQ = (0, h.zZ)(S.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t["bxh/R7"]),
        buildLayout: () => [eZ, eq, eW],
    });
var eJ = n(873298);
let e$ = (0, h.Qx)(S.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => V.intl.string(V.t["C/5V0A"]),
        useSubtitle: () => V.intl.string(V.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: V.intl.string(V.t["7iegX4"]), value: eJ.NS.COMPACT },
            { name: V.intl.string(V.t.bBvAEH), value: eJ.NS.DEFAULT },
            { name: V.intl.string(V.t["4cuYHx"]), value: eJ.NS.COZY },
        ],
        useValue: () => U.Xi.useSetting(),
        setValue: (e) => {
            e !== eJ.NS.UNSET_UI_DENSITY && U.Xi.updateSetting(e);
        },
    }),
    e0 = "cozy",
    e1 = "compact",
    e2 = (0, h.Qx)(S.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => V.intl.string(V.t.nKRoPv),
        useSubtitle: () => V.intl.string(V.t.QntEEG),
        useSearchTerms: () => [V.intl.string(V.t.ZEoGMd)],
        useOptions: () => [
            { name: V.intl.string(V.t.Jqj4cZ), value: e0 },
            { name: V.intl.string(V.t["1JNcPS"]), value: e1 },
        ],
        useValue: () => (U.hH.useSetting() ? e1 : e0),
        setValue: (e) => {
            (U.hH.updateSetting(e === e1), (0, ed.AC)());
        },
    });
var e3 = n(381941);
function e5(e) {
    return `${e.toFixed(0)}px`;
}
let e4 = (0, h.sN)(S.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => V.intl.string(V.t.Q6lKkg),
    useSubtitle: () => V.intl.string(V.t.p7eUrb),
    markers: e3.qh,
    stickToMarkers: !0,
    minValue: e3.qh["0"],
    maxValue: e3.qh[e3.qh.length - 1],
    useDefaultValue: () => 16 * !U.hH.useSetting(),
    useExternalValue: () => (0, I.bG)([O.Ay], () => O.Ay.messageGroupSpacing),
    getInitialValue: () => O.Ay.messageGroupSpacing,
    onValueRender: e5,
    onMarkerRender: e5,
    asValueChanges: (e) => {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, ed.AC)(e);
        }
    },
});
var e6 = n(775121),
    e8 = n(723702);
let e7 = (0, h.sN)(S.X.APPEARANCE_ZOOM, {
        usePredicate: () => e8.isPlatformEmbedded,
        useTitle: () => V.intl.string(V.t.i19n5L),
        useSubtitle: () => V.intl.format(V.t["x9PK/3"], { modKey: e6.A.modKey }),
        markers: _.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: _.hH7.ZOOM_SCALES["0"],
        maxValue: _.hH7.ZOOM_SCALES[_.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => _.hH7.ZOOM_DEFAULT,
        getInitialValue: () => O.Ay.zoom,
        useExternalValue: () => (0, I.bG)([O.Ay], () => O.Ay.zoom),
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        setValue: (e) => (0, ed.Qp)(e),
        useSearchTerms: () => [V.intl.string(V.t.ip0uSf)],
    }),
    e9 = (0, h.zZ)(S.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.VKYWk8),
        buildLayout: () => [e$, e2, e4, e7],
    }),
    te = (0, h.t_)(S.X.ACCESSIBILITY_PANEL, {
        useTitle: () => V.intl.string(V.t.G0neg7),
        buildLayout: () => [eQ, e9, ej, eX, ea],
        decoration: {
            type: p.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = U.hH.useSetting(),
                    t = U.jW.useSetting(),
                    n = x.useMemo(
                        () => [
                            B(
                                V.intl.formatToPlainString(V.t.BknJRT, {}),
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
                            B(V.intl.formatToPlainString(V.t["4rDfgM"], { link: "https://discord.com/accessibility" })),
                        ],
                        [t],
                    ),
                    i = (0, I.bG)([O.Ay], () => O.Ay.messageGroupSpacing);
                return (0, f.jsx)(b.M, {
                    children: (0, f.jsxs)("section", {
                        "aria-label": V.intl.string(V.t.RC22qg),
                        children: [
                            (0, f.jsx)(N.D, {
                                variant: "body-md/medium",
                                color: "text-muted",
                                className: k.Vf,
                                children: V.intl.string(V.t.RC22qg),
                            }),
                            (0, f.jsxs)(C.Ip, {
                                className: k.VH,
                                children: [
                                    (0, f.jsx)("ol", {
                                        className: k.DZ,
                                        style: { gap: i },
                                        "aria-label": V.intl.string(V.t.xfjsEV),
                                        children: n.map((t) =>
                                            (0, f.jsx)(
                                                "li",
                                                {
                                                    children: (0, f.jsx)(P.A, {
                                                        message: t,
                                                        channel: w,
                                                        compact: e,
                                                        author: { ...(0, L.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, f.jsxs)("div", {
                                        className: k.Jb,
                                        children: [
                                            (0, f.jsx)("div", {
                                                className: k.HD,
                                                children: F.map((e) => {
                                                    let { status: t, discriminator: n, mobile: i = !1 } = e;
                                                    return (0, f.jsx)(
                                                        y.eu,
                                                        {
                                                            status: t,
                                                            isMobile: i,
                                                            size: v._3.SIZE_32,
                                                            src: M.Ay.getDefaultAvatarURL(void 0, n),
                                                            "aria-label": V.intl.string(V.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, f.jsx)(j.$, {
                                                text: V.intl.string(V.t["2RHHgz"]),
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
    tt = (0, h.i4)(S.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.G0neg7),
        icon: T.AccessibilityIcon,
        useMenu: X.A,
        buildLayout: () => [te],
    });
n(321073);
var tn = n(650809),
    ti = n(477782),
    tl = n(620632),
    ts = n(73153),
    tr = n(74396),
    ta = n(269880),
    to = n(55619),
    tu = n(351906),
    td = n(129230),
    tc = n(189081);
let tg = (0, h.zD)(S.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, I.bG)([tc.A], () => tc.A.hasLibraryApplication()),
        useTitle: () => V.intl.string(V.t.fi3UQN),
        useSubtitle: () => V.intl.string(V.t["8mYp37"]),
        useValue: () => !U.l_.useSetting(),
        setValue: (e) => U.l_.updateSetting(!e),
    }),
    tm = (0, h.zZ)(S.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => V.intl.string(V.t["8/udY0"]),
        buildLayout: () => [tg],
    });
var tA = n(284009),
    tE = n.n(tA),
    th = n(199966),
    tS = n(963935);
function tT(e) {
    let { title: t } = e;
    return t;
}
function tp(e) {
    let { useTitle: t, settingKey: n, formatter: i, index: l } = e,
        s = t();
    return "string" == typeof s ? i({ title: s, index: l, key: n }) : s;
}
function tf(e) {
    let { setting: t, formatter: n, index: i } = e;
    return () => (0, f.jsx)(tp, { useTitle: t.useTitle, settingKey: t.key, formatter: n, index: i }, t.key);
}
function tx(e) {
    return e.type === tS.Z6.LIST;
}
function tI(e, t) {
    let { limit: n = 2, formatter: i = tT } = t ?? {};
    tE()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: l, accessibleDirectory: s } = (0, th._)(),
        r = l.get(e) ?? s.get(e);
    tE()(
        null != r && (r.type === tS.Z6.ACCORDION || tx(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = tx(r) ? (r.collapseAfter ?? 0) : 0,
        o = r.layout;
    return x.useMemo(() => {
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
        let l = Math.min(n, 3);
        if (t.length <= l)
            if (1 === t.length)
                return V.intl.format(V.t["3H9tCW"], { settingOneHook: tf({ setting: t[0], formatter: i, index: 0 }) });
            else if (2 === t.length)
                return V.intl.format(V.t.MWryo6, {
                    settingOneHook: tf({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tf({ setting: t[1], formatter: i, index: 1 }),
                });
            else
                return V.intl.format(V.t.a00b5G, {
                    settingOneHook: tf({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tf({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tf({ setting: t[2], formatter: i, index: 2 }),
                });
        return 1 === l
            ? V.intl.format(V.t.O8vNbS, { settingOneHook: tf({ setting: t[0], formatter: i, index: 0 }) })
            : 2 === l
              ? V.intl.format(V.t["acXG/W"], {
                    settingOneHook: tf({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tf({ setting: t[1], formatter: i, index: 1 }),
                })
              : V.intl.format(V.t["5+ldWc"], {
                    settingOneHook: tf({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tf({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tf({ setting: t[2], formatter: i, index: 2 }),
                });
    }, [n, a, o, i]);
}
var t_ = n(951260);
let tb = (0, h.zD)(S.X.ENABLE_APPS_BUTTON, {
        useTitle: () => V.intl.string(V.t.ZTH4j4),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, ed.n8)({ appsButtonEnabled: e }),
    }),
    tN = {
        useTitle: () => V.intl.string(V.t["I/5LyL"]),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isSubmitButtonEnabled),
        setValue: () => (0, ed.Xt)(),
    },
    tC = (0, h.zD)(S.X.ENABLE_SEND_BUTTON, tN),
    ty = (0, h.zD)(S.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...tN,
        usePredicate: () => !(0, t_.n)("EnableSendButtonOutsideExperiment"),
    }),
    tv = (0, h.zD)(S.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => V.intl.string(V.t.WggFoO),
        useSubtitle: () => V.intl.string(V.t.XpErGj),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, ed.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, I.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tj = (0, h.zD)(S.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => V.intl.string(V.t.YErWkD),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, ed.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, I.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tO = (0, h.zD)(S.X.ENABLE_GIF_BUTTON, {
        useTitle: () => V.intl.string(V.t.k7oNEz),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isGifButtonEnabled),
        setValue: (e) => (0, ed.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, I.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tR = (0, h.zD)(S.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => V.intl.string(V.t.Ar0krj),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, ed.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, I.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tD = (0, h.Qx)(S.X.EXPRESSION_PICKER_FORMAT, {
        useTitle: () => V.intl.string(V.t.AxRAWt),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.expressionPickerFormat),
        setValue: (e) => (0, ed.n8)({ expressionPickerFormat: e }),
        useOptions: function () {
            return [
                { name: V.intl.string(V.t.k86Soy), desc: V.intl.string(V.t.bSGTTZ), value: O.IG.FLEXIBLE },
                { name: V.intl.string(V.t.bjwSOn), desc: V.intl.string(V.t.We36HX), value: O.IG.CONDENSED },
                { name: V.intl.string(V.t.FDIKss), desc: V.intl.string(V.t["rclZL/"]), value: O.IG.HIDDEN },
            ];
        },
    }),
    tL = (0, h.FW)(S.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => V.intl.string(V.t["V9/cNN"]),
        buildLayout: () => [tD, tv, tj, tO, tR],
    }),
    tP = (0, h.bd)(S.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? V.intl.string(V.t.IwVGQs) : V.intl.string(V.t.cFNDh5);
        },
        useCollapsedSubtitle: () => tI(S.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, t_.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [tC, tb, tL],
    });
var tG = n(565645);
let tM = (0, h.zD)(S.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => V.intl.string(V.t["79qal8"]),
        useSubtitle: () =>
            V.intl.format(V.t.GejoQK, { emojiHook: (e, t) => (0, f.jsx)(tG.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: U.j7.useSetting,
        setValue: U.j7.updateSetting,
    }),
    tU = (0, h.zD)(S.X.CHAT_GAME_MENTIONS_AUTOCOMPLETE, {
        useTitle: () => V.intl.string(V.t.c0oFDw),
        useValue: U.BQ.useSetting,
        setValue: U.BQ.updateSetting,
    }),
    tV = (0, h.zD)(S.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => V.intl.string(V.t.AqGrEI),
        useValue: U.SI.useSetting,
        setValue: (e) => {
            (td.default.track(_.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: _.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                U.SI.updateSetting(e));
        },
    });
var tk = n(793574);
let tw = (0, h.zD)(S.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => V.intl.string(V.t["d+It2U"]),
        useValue: U.ML.useSetting,
        setValue: (e) => {
            (td.default.track(_.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: _.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [tk.A.TEXT_AND_IMAGES],
            }),
                U.ML.updateSetting(e));
        },
    }),
    tF = (0, h.zZ)(S.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Ob7VMB),
        useSearchTerms: () => [V.intl.string(V.t.onqU6o)],
        buildLayout: () => [tV, tM, tw, tU, ty, tP],
    });
var tB = n(526162),
    tX = n(793943),
    tz = n(792656),
    tH = n(830543),
    tY = n(785007),
    tW = n(92533),
    tK = n(915089),
    tZ = n(739053),
    tq = n(82498),
    tQ = n(746322),
    tJ = n(682901);
let t$ = (0, h.E2)(S.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [V.intl.string(V.t.gnwxvT)],
    Component: function () {
        let e = (0, tK.GV)(),
            { ref: t, ...n } = (0, tY._u)({ orientation: "horizontal", labelledBy: e }),
            i = (0, I.bG)([tB.A], () => tB.A.isUpsellPreview);
        return (
            (0, Z.Ay)(() => {
                i &&
                    (td.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: tJ.e.APP_ICON_UPSELL,
                        location_stack: [tk.A.USER_SETTINGS],
                    }),
                    (0, tZ.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, [tk.A.USER_SETTINGS], () =>
                        (0, tq.uq)(tJ.e.APP_ICON_UPSELL),
                    ));
            }),
            (0, f.jsx)("div", {
                ...n,
                ref: t,
                children: (0, f.jsx)(q.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, f.jsx)(tW.m, { disabled: i, size: tQ.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function t0() {
    ((0, tX.nf)(tX.HP.APP_ICON), (0, tH.default)());
}
function t1() {
    return (0, f.jsx)(tz.A, {
        subscriptionTier: tJ.pe.TIER_2,
        defaultTextOverride: V.intl.string(V.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: _.ZSU.BUTTON_CTA, objectType: _.btD.BUY },
        fullWidth: !0,
    });
}
let t2 = (0, h.zZ)(S.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RPh2ou),
        useSubtitle: () => V.intl.string(V.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, I.bG)([tB.A], () => tB.A.isUpsellPreview);
            return x.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: p.UV.BUTTON,
                        text: V.intl.string(V.t["6acvnZ"]),
                        onClick: t0,
                    }),
                    e && t.push({ id: "upsell-button", type: p.UV.STRONGLY_DISCOURAGED_CUSTOM, button: t1 }),
                    { type: p.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [t$],
    }),
    t3 = (0, h.AK)(S.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.UDr3Iy),
        useSearchTerms: () => [V.intl.string(V.t.UDr3Iy)],
        destinationKey: S.X.ACCESSIBILITY_PANEL,
    }),
    t5 = (0, h.gN)(S.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [t3] });
var t4 = n(143129),
    t6 = n(794412),
    t8 = n(749884),
    t7 = n(708526);
let t9 = eC.A.getArticleURL(_.MVz.FAVORITES_GUILD),
    ne = (0, h.E2)(S.X.CHAT_FAVORITES_TOGGLE, {
        useSearchTerms: () => [V.intl.string(t7.default.OT1NK5)],
        Component: function () {
            let e = (0, t8.A)(!1);
            return (0, f.jsx)(t4.d, {
                checked: e,
                description: V.intl.format(t7.default.GR2KOG, { helpCenterLink: t9 }),
                onChange: t6.kG,
                label: V.intl.string(t7.default.OT1NK5),
                badge: "beta",
            });
        },
    }),
    nt = (0, h.zD)(S.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => V.intl.string(V.t.U47N1p),
        useValue: U.hD.useSetting,
        setValue: U.hD.updateSetting,
    }),
    nn = (0, h.zD)(S.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => V.intl.string(V.t.VP11No),
        useValue: U.X6.useSetting,
        setValue: U.X6.updateSetting,
    }),
    ni = (0, h.FW)(S.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => V.intl.string(V.t["9nyle0"]),
        buildLayout: () => [nt, nn],
    }),
    nl = (0, h.zD)(S.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => V.intl.string(V.t["5bK9vw"]),
        useValue: U.rs.useSetting,
        setValue: U.rs.updateSetting,
    }),
    ns = (0, h.zD)(S.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => V.intl.string(V.t["zge/fP"]),
        useValue: U.jW.useSetting,
        setValue: U.jW.updateSetting,
    });
var nr = n(28863),
    na = n(766075);
let no = (0, h.zD)(S.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => V.intl.string(V.t.JgjNG3),
        useSubtitle: () => {
            if (!U.hH.useSetting())
                return V.intl.format(V.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, f.jsx)(
                            nr.Anchor,
                            {
                                onClick: () => (0, na.openUserSettings)(S.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !U.hH.useSetting(),
        useValue: () => {
            let e = U.aM.useSetting();
            return !U.hH.useSetting() || e;
        },
        setValue: (e) => {
            U.aM.updateSetting(e);
        },
    }),
    nu = (0, h.Hn)(S.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => V.intl.string(V.t.QgwmVz),
        useOptions: () => [
            { value: _.P6Q.ON_CLICK, id: _.P6Q.ON_CLICK, label: V.intl.string(V.t["KFH/me"]) },
            { value: _.P6Q.ALWAYS, id: _.P6Q.ALWAYS, label: V.intl.string(V.t.Pe1RbL) },
            { value: _.P6Q.IF_MODERATOR, id: _.P6Q.IF_MODERATOR, label: V.intl.string(V.t.K5VTBE) },
        ],
        useValue: U.gs.useSetting,
        setValue: U.gs.updateSetting,
    }),
    nd = (0, h.zD)(S.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => V.intl.string(V.t.AInv5m),
        useValue: U.SY.useSetting,
        setValue: U.SY.updateSetting,
    }),
    nc = (0, h.zZ)(S.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.OIgYlQ),
        useSearchTerms: () => [V.intl.string(V.t["/VQax8"])],
        buildLayout: () => [ni, nl, ns, nu, nd, no, ne, t5],
    });
var ng = n(753806),
    nm = n(145331);
let nA = (0, h.Qx)(S.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
        useTitle: () => V.intl.string(V.t.VkoLsy),
        useSearchTerms: () => [V.intl.string(V.t["t4+fbe"])],
        useOptions: function () {
            return [
                { name: V.intl.string(V.t.E9JM4J), value: 0 },
                { name: V.intl.string(V.t["Kr+lPi"]), value: 1 },
            ];
        },
        useValue: () => +!!U.Hu.useSetting(),
        setValue: (e) => {
            let t = 1 === e;
            (t ? ng.A.cleanUpPrivateChannelSearchState() : ng.A.cleanUpSearchState({ type: _.I4_.DMS }),
                (0, nm._k)({
                    prevIsCrossDMSettingEnabled: U.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: nm.vy.USER_SETTINGS,
                }),
                U.Hu.updateSetting(t));
        },
    }),
    nE = (0, h.zZ)(S.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => V.intl.string(V.t["5h0QOP"]),
        buildLayout: () => [nA],
    });
var nh = n(574381);
let nS = (0, h.zD)(S.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => V.intl.string(V.t.IxjaoF),
        useValue: function () {
            return (0, I.bG)([tu.A], () => {
                let { autoToggle: e } = tu.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            to.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return nh.Av;
        },
    }),
    nT = (0, h.zD)(S.X.STREAMING_STREAMER_MODE, {
        useTitle: () => V.intl.string(V.t.TGNg6T),
        useSubtitle: () => V.intl.string(V.t["4nXLnE"]),
        useValue: function () {
            return (0, I.bG)([tu.A], () => {
                let { enabled: e } = tu.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            to.A.update({ enabled: e });
        },
    });
var np = n(77729),
    nf = n(589051),
    nx = n(415173),
    nI = n(999834);
let n_ = [],
    nb = (0, h.Hn)(S.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => V.intl.string(V.t.VCDSLW),
        useSearchTerms: () => [V.intl.string(V.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, nI.b_)(),
                t = (0, nf.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return x.useMemo(() => {
                let e = [];
                for (let [t, n] of Object.entries(nx.A))
                    !0 === n.hideableInStreamerMode &&
                        null != n.label &&
                        (null == n.predicate || n.predicate()) &&
                        e.push({ id: t, value: t, label: n.label() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, I.bG)([tu.A], () => tu.A.getSettings().disabledOverlayWidgets ?? n_);
        },
        setValue: (e) => to.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    nN = (0, h.zD)(S.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => V.intl.string(V.t.LSBUGR),
        useValue: () =>
            (0, I.bG)([tu.A], () => {
                let { hidePersonalInformation: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ hidePersonalInformation: e }),
    }),
    nC = (0, h.zD)(S.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => V.intl.string(V.t.uWBOri),
        useValue: () =>
            (0, I.bG)([tu.A], () => {
                let { hideInstantInvites: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ hideInstantInvites: e }),
    }),
    ny = (0, h.zD)(S.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => V.intl.string(V.t.OrqYDP),
        useValue: () =>
            (0, I.bG)([tu.A], () => {
                let { disableSounds: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ disableSounds: e }),
    }),
    nv = (0, h.zD)(S.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.sUAbLd),
        useValue: () =>
            (0, I.bG)([tu.A], () => {
                let { disableNotifications: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ disableNotifications: e }),
    }),
    nj = (0, h.zD)(S.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => V.intl.string(V.t["iA81+a"]),
        useSubtitle: () => V.intl.string(V.t.P4vj0h),
        useValue: () =>
            (0, I.bG)([tu.A], () => {
                let { enableContentProtection: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ enableContentProtection: e }),
        usePredicate: () => np.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    nO = (0, h.FW)(S.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.xYhOEh),
        buildLayout: () => [nN, nC, ny, nv, nj, nb],
    }),
    nR = (0, h.zZ)(S.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => V.intl.string(V.t.S5GfOW),
        buildLayout: () => [nT, nS, nO],
    });
var nD = n(850333),
    nL = n(141343),
    nP = n(665267),
    nG = n(414133),
    nM = n(557441);
let nU = (0, h.Hn)(S.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => V.intl.string(V.t.Q7mm4g),
        useSearchTerms: () => [V.intl.string(nM.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: V.intl.string(V.t["hrS/Pc"]), value: eJ.tI.GUILD },
            { id: "personal", label: V.intl.string(V.t.mlvXIq), value: eJ.tI.PERSONAL },
        ],
        useValue: () => U.zY.useSetting(),
        setValue: U.zY.updateSetting,
        usePredicate: () => (0, nG.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    nV = (0, h.zD)(S.X.SYNC_PROFILE_THEMES, {
        useTitle: () => V.intl.string(V.t.C00w4l),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, ed.M1)(),
    });
var nk = n(817281),
    nw = n(284016),
    nF = n(413599);
let nB = (0, h.zD)(S.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => V.intl.string(V.t["/B+kEV"]),
    useSearchTerms: () => [V.intl.string(V.t.Ksh3ik)],
    useValue: function () {
        return (0, I.bG)([nw.A], () => !1 !== nw.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        return (0, I.bG)([nF.A], () => nF.A.isSameAsDeviceThemeEnabled());
    },
    setValue: function (e) {
        var t;
        let n = nF.A.theme,
            i = nD.A.gradientPreset?.id ?? null,
            l = U.eh.getSetting()?.customUserThemeSettings != null;
        ((t = _.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            ts.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: l },
            }),
            nk.Ay.setShouldSyncAppearanceSettings(e));
    },
});
var nX = n(569386);
let nz = (0, h.AK)(S.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.nhVQDJ),
        useSearchTerms: () => [V.intl.string(V.t.nhVQDJ)],
        destinationKey: S.X.ACCESSIBILITY_PANEL,
    }),
    nH = (0, h.gN)(S.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [nz] }),
    nY = (0, h.zZ)(S.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, I.bG)([O.Ay], () => O.Ay.useForcedColors)
                ? {
                      type: p.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "none",
                      text: (0, eN.D)()
                          ? V.intl.format(V.t.Jae48E, {
                                onClick: () => {
                                    (0, na.openUserSettings)(S.X.SYNC_FORCED_COLORS);
                                },
                            })
                          : V.intl.string(V.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            let e = (0, I.bG)([nD.A, O.Ay], () => O.Ay.useForcedColors || nD.A.isPreview),
                t = (0, nL.V)();
            return e || t
                ? null
                : {
                      type: p.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: p.UV.BUTTON,
                              text: V.intl.string(V.t["E+COuA"]),
                              onClick: nP.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [nX.k, nB, nV, nU, nH],
    }),
    nW = (0, h.t_)(S.X.APPEARANCE_PANEL, {
        initialize: function () {
            tr.A.isFetching() ||
                (ts.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                tl.Bo.get({ url: _.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
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
        useTitle: () => V.intl.string(V.t["iHH+ky"]),
        buildLayout: () => [nY, t2, nc, tF, nE, nR, tm],
    }),
    nK = [{ badgeType: p.Xi.NEW, dismissibleContent: eE.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE }],
    nZ = (0, h.i4)(S.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["iHH+ky"]),
        icon: tn.PaintPaletteIcon,
        useMenu: function () {
            let e,
                t,
                n,
                i = (0, ta.A)(),
                l =
                    ((e = U.D_.useSetting()),
                    (t = U.SI.useSetting()),
                    e
                        ? null
                        : (0, f.jsx)(ti.sL, {
                              id: "preview-markdown-toggle",
                              label: V.intl.string(V.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  (td.default.track(_.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: _.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      U.SI.updateSetting(e));
                              },
                              checked: t,
                          })),
                s =
                    ((n = (0, I.bG)([tu.A], () => tu.A.enabled, [])),
                    (0, f.jsx)(ti.sL, {
                        id: "streamer-mode-toggle",
                        label: V.intl.string(V.t.p9ZAJZ),
                        action: () => {
                            to.A.setEnabled(!n);
                        },
                        checked: n,
                    }));
            return x.useMemo(() => {
                let e = [...i];
                return (
                    null != l &&
                        e.push((0, f.jsx)(ti.rX, { label: V.intl.string(V.t.Ob7VMB), children: l }, "text-and-images")),
                    null != s && e.push((0, f.jsx)(ti.rX, { children: s }, "streamer-mode")),
                    e
                );
            }, [i, l, s]);
        },
        getDismissibleBadges: () => nK,
        buildLayout: () => [nW],
    });
var nq = n(37646),
    nQ = n(172471);
let nJ = (0, h.t_)(S.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => V.intl.string(V.t.KyFVyi),
        buildLayout: () => [nQ.F],
    }),
    n$ = (0, h.i4)(S.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: nq.LanguageIcon,
        useTitle: () => V.intl.string(V.t.KyFVyi),
        buildLayout: () => [nJ],
    });
var n0 = n(3137),
    n1 = n(646514),
    n2 = n(314116),
    n3 = n(270003),
    n5 = n(834730),
    n4 = n(939249),
    n6 = n(369606),
    n8 = n(320448),
    n7 = n(604121),
    n9 = n(725951),
    ie = n(400492),
    it = n(669067),
    ii = n(115063),
    il = n(415677),
    is = n(927018),
    ir = n(591563),
    ia = n(532197),
    io = n(403362),
    iu = n(874486),
    id = n(503698),
    ic = n.n(id),
    ig = n(536637),
    im = n.n(ig),
    iA = n(5377),
    iE = n(906688),
    ih = n(98705);
function iS(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, is.vM)(t);
    if (null == i) return null;
    let l = null != n,
        { name: s, description: r, hideDescriptionUntilUnlock: a, onAction: o } = i,
        u = a && !l,
        d = l ? "text-strong" : "text-muted",
        c = l ? "text-default" : "text-muted",
        g = im()(n),
        m = null != o && l,
        A = m ? n4.D : "div";
    return (0, f.jsxs)(A, {
        className: ic()(ih.kL, m && ih.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, f.jsx)("div", {
                className: ih.zc,
                children: (0, f.jsx)(iE.A, { achievementId: t, size: iE.A.Sizes.SIZE_40, unlocked: l }),
            }),
            (0, f.jsxs)("div", {
                className: ih.VW,
                children: [
                    null != n &&
                        (0, f.jsx)(n5.E, {
                            variant: "footnote/semibold",
                            color: "text-muted",
                            className: ih.YR,
                            children: (0, iA.mk)(g),
                        }),
                    (0, f.jsx)(n5.E, { variant: "body-md/medium", color: d, children: s() }),
                    (0, f.jsx)(n5.E, { variant: "body-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var iT = n(545744);
function ip(e) {
    let { onBackClick: t } = e,
        n = (0, I.bG)([iu.A], () => iu.A.getAllUnlockedAchievements()),
        i = x.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        l = x.useMemo(
            () =>
                Object.values(is.l0)
                    .filter(io.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsxs)(n4.D, {
                onClick: t,
                className: iT.vv,
                children: [
                    (0, f.jsx)(ia.A, { direction: ia.A.Directions.LEFT, className: iT.Kk }),
                    (0, f.jsx)(n5.E, {
                        variant: "body-lg/normal",
                        color: "text-default",
                        children: V.intl.string(V.t["13/7kX"]),
                    }),
                ],
            }),
            (0, f.jsxs)("div", {
                className: iT.N1,
                children: [
                    (0, f.jsxs)("div", {
                        className: iT.if,
                        children: [
                            (0, f.jsx)(N.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: V.intl.string(V.t["6jI0hd"]),
                            }),
                            (0, f.jsx)(n5.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                children: V.intl.string(V.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, f.jsx)("div", {
                        className: iT.nr,
                        children: (0, f.jsx)(n6.TrophyIcon, {
                            size: "custom",
                            color: n1.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            i.length > 0 &&
                (0, f.jsx)("div", {
                    className: iT.yF,
                    children: (0, f.jsx)("div", {
                        className: iT.Eh,
                        children: i.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, f.jsx)(iS, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            l.length > 0 &&
                (0, f.jsxs)("div", {
                    className: iT.yF,
                    children: [
                        (0, f.jsx)("div", {
                            className: iT.if,
                            children: (0, f.jsx)(n5.E, {
                                variant: "body-md/semibold",
                                color: "text-default",
                                children: V.intl.string(V.t.GFyMg1),
                            }),
                        }),
                        (0, f.jsx)("div", {
                            className: iT.Eh,
                            children: l.map((e) => (0, f.jsx)(iS, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, f.jsx)("div", { className: iT.yF, children: (0, f.jsx)("div", { className: iT.F3 }) }),
        ],
    });
}
var ix = n(224964),
    iI = n(31408),
    i_ = n(368588);
let ib = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    iN = (0, W.range)(0, 11),
    iC = (0, W.range)(0, 2.25, 0.25),
    iy = (0, W.range)(1, 11),
    iv = (0, W.range)(1, 26),
    ij = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function iO(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: l } = e,
        s = n.map((e) =>
            (0, f.jsx)(
                t4.d,
                {
                    label: e.title,
                    description: e.description,
                    checked: i[e.location],
                    disabled: t,
                    onChange: (t) => l({ ...i, [e.location]: t }),
                },
                e.location,
            ),
        );
    return (0, f.jsx)(n3.n, { label: V.intl.string(V.t.bWVN1D), children: s });
}
function iR(e) {
    let { children: t } = e;
    return (0, f.jsx)(n5.E, { className: i_.iF, variant: "body-sm/normal", color: "text-default", children: t });
}
function iD(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        l = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion);
    return (0, f.jsx)(t4.d, {
        label: V.intl.string(V.t.vuiXm9),
        description: V.intl.string(V.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            (e || (0, il._)(is.sn.DISABLE_POGGERMODE),
                e && (!n || l)
                    ? (0, n2.A)({
                          title: l ? V.intl.string(V.t["FxT+p0"]) : V.intl.string(V.t.TAZ4F9),
                          subtitle: l ? V.intl.string(V.t.gmixrx) : V.intl.string(V.t.jN3t3K),
                          confirmText: V.intl.string(V.t.JFfins),
                          onConfirm: () => i(l ? ib : { enabled: !0, warningSeen: !0 }),
                      })
                    : i({ enabled: e }));
        },
    });
}
function iL(e) {
    let {
            settings: {
                enabled: t,
                confettiEnabled: n,
                confettiCount: i,
                confettiSize: l,
                confettiEnabledLocations: s,
            },
            updateSettings: r,
        } = e,
        a = !t || !n;
    return (0, f.jsxs)(n3.n, {
        label: V.intl.string(V.t.mqxwJO),
        children: [
            (0, f.jsx)(t4.d, {
                label: V.intl.string(V.t.s0KCgF),
                description: V.intl.string(V.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, f.jsxs)("div", {
                children: [
                    (0, f.jsx)(n5.E, {
                        variant: "body-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: i_.KF,
                        children: V.intl.string(V.t.vd0D81),
                    }),
                    (0, f.jsx)(iR, { children: V.intl.string(V.t.a18Sug) }),
                    (0, f.jsx)(Q.A, {
                        "aria-label": V.intl.string(V.t.vd0D81),
                        disabled: a,
                        marks: iy,
                        snapToMarks: !0,
                        minValue: iy[0],
                        maxValue: iy[iy.length - 1],
                        defaultValue: i,
                        onChangeEnd: (e) => r({ confettiCount: e }, 0),
                        formatValue: (e) => `${e}`,
                    }),
                ],
            }),
            (0, f.jsxs)("div", {
                children: [
                    (0, f.jsx)(n5.E, {
                        variant: "body-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: i_.KF,
                        children: V.intl.string(V.t.sPO3ij),
                    }),
                    (0, f.jsx)(iR, { children: V.intl.string(V.t.xoldVn) }),
                    (0, f.jsx)(Q.A, {
                        "aria-label": V.intl.string(V.t.sPO3ij),
                        disabled: a,
                        marks: iv,
                        snapToMarks: !0,
                        minValue: iv[0],
                        maxValue: iv[iv.length - 1],
                        defaultValue: l,
                        onChangeEnd: (e) => r({ confettiSize: e }, 0),
                        formatValue: (e) => `${e}`,
                    }),
                ],
            }),
            (0, f.jsx)(iO, {
                disabled: a,
                locations: [
                    {
                        location: iI.k.CHAT_INPUT,
                        title: V.intl.string(V.t.elTtyz),
                        description: V.intl.string(V.t.HtKfMi),
                    },
                    {
                        location: iI.k.REACTION,
                        title: V.intl.string(V.t.Ik4VIa),
                        description: V.intl.string(V.t.y4rqK0),
                    },
                    {
                        location: iI.k.MEMBER_USER,
                        title: V.intl.string(V.t.ZXBlAn),
                        description: V.intl.string(V.t["m9RD+c"]),
                    },
                    {
                        location: iI.k.CALL_TILE,
                        title: V.intl.string(V.t.V66giQ),
                        description: V.intl.string(V.t.fiHV7u),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function iP(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: l },
            updateSettings: s,
        } = e,
        r = !t || !n;
    return (0, f.jsxs)(n3.n, {
        label: V.intl.string(V.t.Xz0ole),
        children: [
            (0, f.jsx)(t4.d, {
                label: V.intl.string(V.t.o3iV7B),
                description: V.intl.string(V.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => s({ combosEnabled: e }),
            }),
            (0, f.jsx)(t4.d, {
                label: V.intl.string(V.t["Ax+IoW"]),
                description: V.intl.string(V.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => s({ comboSoundsEnabled: e }),
            }),
            (0, f.jsxs)("div", {
                children: [
                    (0, f.jsx)(n5.E, {
                        variant: "body-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: i_.KF,
                        children: V.intl.string(V.t.L0oQuh),
                    }),
                    (0, f.jsx)(iR, { children: V.intl.string(V.t["/OOFpL"]) }),
                    (0, f.jsx)(Q.A, {
                        "aria-label": V.intl.string(V.t.L0oQuh),
                        disabled: r,
                        marks: iN,
                        snapToMarks: !0,
                        minValue: iN[0],
                        maxValue: iN[iN.length - 1],
                        defaultValue: l,
                        onChangeEnd: (e) => s({ combosRequiredCount: e }),
                        formatValue: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function iG(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: l },
            updateSettings: s,
        } = e,
        r = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion),
        a = !t || !n || r;
    return (0, f.jsxs)(n3.n, {
        label: V.intl.string(V.t.wVS5Sd),
        children: [
            (0, f.jsx)(t4.d, {
                label: V.intl.string(V.t.N004zO),
                description: r ? V.intl.string(V.t.GckHGw) : V.intl.string(V.t.Qq5W3v),
                checked: n && !r,
                disabled: !t || r,
                onChange: (e) => s({ screenshakeEnabled: e }, 1),
            }),
            (0, f.jsxs)("div", {
                children: [
                    (0, f.jsx)(n5.E, {
                        variant: "body-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: i_.KF,
                        children: V.intl.string(V.t.UxnnC4),
                    }),
                    (0, f.jsx)(iR, { children: V.intl.string(V.t.CEOEOb) }),
                    (0, f.jsx)(Q.A, {
                        "aria-label": V.intl.string(V.t.UxnnC4),
                        disabled: a,
                        marks: iC,
                        snapToMarks: !0,
                        minValue: iC[0],
                        maxValue: iC[iC.length - 1],
                        defaultValue: i,
                        onChangeEnd: (e) => {
                            var t;
                            (null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, il._)(is.sn.MORE),
                                s(t, 1));
                        },
                        formatValue: (e) => (e === iC[iC.length - 1] ? V.intl.string(V.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, f.jsx)(iO, {
                disabled: a,
                locations: [
                    {
                        location: iI.uD.CHAT_INPUT,
                        title: V.intl.string(V.t.vUcvPP),
                        description: V.intl.string(V.t.y00OrF),
                    },
                    {
                        location: iI.uD.VOICE_USER,
                        title: V.intl.string(V.t.TcRO54),
                        description: V.intl.string(V.t.YJCxVY),
                    },
                    {
                        location: iI.uD.MENTION,
                        title: V.intl.string(V.t.oW4shO),
                        description: V.intl.string(V.t["mqfw/H"]),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => s({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function iM(e) {
    let { updateSettings: t } = e;
    return (0, f.jsx)(n3.n, {
        label: V.intl.string(V.t.EuXv2q),
        children: (0, f.jsxs)(q.B, {
            gap: 16,
            children: [
                (0, f.jsx)("div", { children: V.intl.string(V.t["1SLnki"]) }),
                (0, f.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: i_.hw,
                    children: (0, f.jsx)(j.$, {
                        variant: "primary",
                        size: "sm",
                        text: V.intl.string(V.t.qz65yY),
                        onClick: function () {
                            (t({ enabled: !1, settingsVisible: !1 }), (0, tH.default)());
                        },
                    }),
                }),
            ],
        }),
    });
}
function iU(e) {
    let { onChangePage: t } = e;
    return (0, f.jsxs)(n4.D, {
        onClick: function () {
            return t(1);
        },
        className: i_.Tq,
        children: [
            (0, f.jsx)("div", {
                className: i_.w1,
                children: (0, f.jsx)(n6.TrophyIcon, { size: "md", color: n1.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, f.jsxs)("div", {
                className: i_.qL,
                children: [
                    (0, f.jsx)(N.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        children: V.intl.string(V.t["6jI0hd"]),
                    }),
                    (0, f.jsx)(n5.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        children: V.intl.string(V.t.GuUItX),
                    }),
                ],
            }),
            (0, f.jsx)(n8.ChevronSmallRightIcon, {
                size: "custom",
                color: "currentColor",
                width: 16,
                className: i_.nT,
            }),
        ],
    });
}
function iV() {
    return n
        .e(504660)
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function ik(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        i = (0, I.cf)([n0.A], () => n0.A.getState()),
        [l, s] = x.useState({ x: 0, y: 0 }),
        r = (0, ix.A)();
    function a(e, t) {
        var s, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === i.enabled &&
                (n(!0),
                (0, ie.Ak)("poggermode_enabled"),
                (0, ii.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? i.shakeIntensity })),
            (0, ir.O9)(e),
            null == t)
        )
            return;
        let A =
            ((s = i.confettiEnabled), (a = e.confettiEnabled), (o = i.enabled), (u = e.enabled), (a ?? s) && (u ?? o));
        0 === t && A && r.fire(l.x, l.y, { settings: e });
        let E =
            ((d = i.screenshakeEnabled),
            (c = e.screenshakeEnabled),
            (g = i.enabled),
            (m = e.enabled),
            (c ?? d) && (m ?? g));
        1 === t && E && (0, ii.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
    }
    function o(e) {
        s({ x: e.clientX, y: e.clientY });
    }
    return (
        x.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, f.jsxs)(q.B, {
            gap: 24,
            children: [
                (0, f.jsx)(iD, { settings: i, updateSettings: a }),
                (0, f.jsx)(iU, { onChangePage: t }),
                (0, f.jsx)(iP, { settings: i, updateSettings: a }),
                (0, f.jsx)(iG, { settings: i, updateSettings: a }),
                (0, f.jsx)(iL, { settings: i, updateSettings: a }),
                (0, f.jsx)(iM, { updateSettings: a }),
            ],
        })
    );
}
function iw(e) {
    return 0 === e ? n9.f.LEFT : n9.f.RIGHT;
}
let iF = (0, h.E2)(S.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = x.useState(0),
                [n, i] = x.useState(iw(e)),
                [l, s] = x.useState(!1),
                r = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion),
                a = l && !r;
            return (
                x.useEffect(() => {
                    let t = setTimeout(() => {
                        i(iw(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                x.useEffect(() => {
                    (0, it._)(ij[e]);
                }, [e]),
                x.useEffect(() => {
                    Math.random() > 0.99 && (0, il._)(is.sn.VISITOR_100);
                }, []),
                (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsx)(n9.A, {
                            className: i_.l3,
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
                                        return (0, f.jsx)(ik, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, f.jsx)(ip, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, s),
                        }),
                        (0, f.jsx)("div", {
                            className: a ? i_.Sr : i_.IP,
                            children: (0, f.jsx)(n7.a, {
                                className: i_.gT,
                                importData: iV,
                                shouldAnimate: a,
                                autoplay: !1,
                                resetOnPlay: !0,
                                loop: !1,
                                onComplete: () => s(!1),
                            }),
                        }),
                    ],
                })
            );
        },
        useSearchTerms: () => [
            V.intl.string(V.t.AtCukI),
            V.intl.string(V.t.mqxwJO),
            V.intl.string(V.t.wVS5Sd),
            V.intl.string(V.t.Xz0ole),
            V.intl.string(V.t["Ax+IoW"]),
            V.intl.string(V.t["6jI0hd"]),
            V.intl.string(V.t.s0KCgF),
        ],
    }),
    iB = (0, h.zZ)(S.X.POGGERMODE_CATEGORY, { buildLayout: () => [iF] });
var iX = n(212043);
let iz = (0, h.t_)(S.X.POGGERMODE_PANEL, { useTitle: () => V.intl.string(V.t.AtCukI), buildLayout: () => [iB] }),
    iH = (0, h.i4)(S.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.AtCukI),
        icon: () => (0, f.jsx)("img", { alt: "", src: n(724405), className: iX.$ }),
        usePredicate: () => (0, I.bG)([n0.A], () => n0.A.settingsVisible),
        buildLayout: () => [iz],
    });
var iY = n(307301),
    iW = n(410767),
    iK = n(683071),
    iZ = n(97260),
    iq = n(50258),
    iQ = n(57757),
    iJ = n(188321),
    i$ = n(695366),
    i0 = n(812729),
    i1 = n.n(i0),
    i2 = n(587895),
    i3 = n(429913),
    i5 = n(616356),
    i4 = n(397369);
function i6(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function i8() {
    let e = (0, I.bG)([i5.A], () => i5.A.getStreamerActiveStreamMetadata()),
        t = (0, I.bG)(
            [i4.Ay],
            () => {
                let e = i4.Ay.getVisibleGame();
                return null != e ? i4.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            i1(),
        ),
        [n] = (0, i3.A)([i6(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var i7 = n(769015),
    i9 = n(754712),
    le = n(526919),
    lt = n(435075);
function ln(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, f.jsx)("div", {
              className: lt.zc,
              children: (0, f.jsx)(i$.CircleErrorIcon, { size: "sm", color: n1.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, f.jsxs)("div", {
              className: lt.nt,
              children: [
                  (0, f.jsx)(i7.A, { game: n, pid: t.pid, size: i7.M.MEDIUM }),
                  (0, f.jsx)("div", {
                      className: lt.Am,
                      children: (0, f.jsx)(i$.CircleErrorIcon, {
                          size: "sm",
                          color: n1.A.colors.TEXT_FEEDBACK_WARNING,
                      }),
                  }),
              ],
          });
}
function li(e) {
    let t = (0, I.bG)([i9.Ay], () => i9.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = i8();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let l = (0, le.NP)(),
        s = l && null != n && t === _.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? s : l, runningGame: n, runningGameApplication: i };
}
function ll(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: l, runningGameApplication: s } = li(n);
    return i
        ? (0, f.jsxs)("div", {
              className: ic()(lt.kL, t),
              children: [
                  (0, f.jsx)(ln, { game: l, application: s }),
                  (0, f.jsxs)("div", {
                      className: lt.FS,
                      children: [
                          (0, f.jsx)(n5.E, {
                              variant: "body-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? V.intl.string(V.t.vxfv7v)
                                      : null != l
                                        ? V.intl.string(V.t.fAYU2G)
                                        : V.intl.string(V.t["9V4X/c"]),
                          }),
                          (0, f.jsx)(n5.E, {
                              variant: "body-xs/medium",
                              color: "text-muted",
                              children: V.intl.format(V.t["/y6htt"], {
                                  helpCenterLink: eC.A.getArticleURL(_.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, f.jsx)(j.$, {
                      variant: "secondary",
                      size: "sm",
                      text: V.intl.string(V.t["1iI46O"]),
                      onClick: function () {
                          (0, le.sL)(n + (null != l ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var ls = n(404778),
    lr = n(579370),
    la = n(532624),
    lo = n(691885),
    lu = n(452027),
    ld = n(408278),
    lc = n(241326),
    lg = n(866665),
    lm = n(140735),
    lA = n(489718),
    lE = n(827343),
    lh = n(368484),
    lS = n(350535),
    lT = n(189213),
    lp = n(192308),
    lf = n(95477),
    lx = n(128376),
    lI = n(290676);
let l_ = [];
var lb = n(235986),
    lN = n(320264),
    lC = n(734057),
    ly = n(808728),
    lv = n(71393),
    lj = n(967198),
    lO = n(926140),
    lR = n(847893);
function lD() {}
let lL = [lO.rD.VOICE_CHANNEL];
function lP(e) {
    (e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0));
}
function lG() {
    return (0, f.jsx)("div", {
        className: lR.i1,
        children: (0, f.jsx)(n5.E, {
            variant: "body-md/medium",
            color: "text-muted",
            className: lR.GN,
            children: V.intl.string(V.t.zHjCd1),
        }),
    });
}
function lM(e) {
    let { keybind: t, className: n } = e,
        i = x.useRef(t);
    x.useEffect(() => {
        i.current = t;
    });
    let [l, s] = x.useState(t.params?.channelId ?? void 0),
        r = x.useCallback(() => {
            (0, lp.mM)(
                async () => (e) =>
                    (0, f.jsx)(lU, {
                        ...e,
                        onSelect: (e) => {
                            (s(e), iZ.A.setKeybind({ ...i.current, params: { channelId: e } }));
                        },
                    }),
            );
        }, []);
    return (0, f.jsx)("div", {
        className: ic()(lR.a8, n),
        children: (0, f.jsx)(lu.D, {
            label: V.intl.string(V.t.q4JpM8),
            children: (0, f.jsxs)(lb.A, {
                align: lb.A.Align.STRETCH,
                children: [
                    (0, f.jsx)("div", { className: lR.$X, children: (0, f.jsx)(lV, { channelId: l }) }),
                    (0, f.jsx)(lb.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, f.jsx)(j.$, { variant: "primary", text: V.intl.string(V.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function lU(e) {
    let t,
        n,
        { transitionState: i, onClose: l, onSelect: s } = e,
        r = x.useId(),
        a = x.useRef(null),
        {
            query: o,
            updateQuery: u,
            queryResults: d,
        } = (function (e) {
            let {
                    visible: t,
                    autocompleterResultTypes: n,
                    autocompleterOptions: i,
                    autocompleterBeforeCreateSearchContext: l,
                } = e,
                [s, r] = x.useState(""),
                [a, o] = x.useState(l_),
                u = x.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(l_) : o(e);
                }, []);
            x.useEffect(
                () =>
                    lx.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = x.useState(() => new lI.A(u, n, void 0, i));
            return (
                x.useEffect(() => {
                    t ? (l?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, l]),
                {
                    queryResults: a,
                    query: s,
                    updateQuery: x.useCallback(
                        (e) => {
                            (r(e), d.search(e));
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: lL, autocompleterBeforeCreateSearchContext: lP }),
        c =
            ((t = "" !== o),
            (n = (0, I.yK)(
                [ly.A, lC.A, lj.A],
                () => {
                    let e = lj.A.getGuildId();
                    if (t || null == e) return [];
                    let n = [];
                    for (let t of ly.A.getVocalChannelIds(e)) {
                        let e = lC.A.getChannel(t);
                        null != e && n.push(e);
                    }
                    return n;
                },
                [t],
            )),
            t ? null : n),
        { focusedIndex: g, setFocusedIndex: m } = (function (e) {
            let [t, n] = x.useState(0),
                i = x.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                x.useEffect(() => {
                    i.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: n }
            );
        })(o);
    x.useEffect(() => {
        let { current: e } = a;
        null == e || e.isItemVisible(0, g, !0) || e.scrollToIndex({ section: 0, row: g });
    }, [g]);
    let A = null != c ? c.length : d.length,
        E = (() => {
            if (null != c) return c[g]?.id;
            let e = d[g];
            if (e?.type === lO.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        h =
            A > 0 || "" === o
                ? {
                      innerId: r,
                      innerRole: "listbox",
                      innerAriaLabel: V.intl.string(V.t["+N3fW7"]),
                      ref: a,
                      sections: [A],
                      renderRow: function (e) {
                          let { row: t } = e,
                              n = (() => {
                                  if (null != c) return c[t];
                                  let e = d[t];
                                  if (e?.type === lO.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? lC.A.getChannel(n.parent_id) : void 0,
                              r = lv.A.getGuild(n.guild_id);
                          return (0, f.jsx)(
                              lN.c3,
                              {
                                  id: n.id,
                                  channel: n,
                                  category: i,
                                  focused: g === t,
                                  onMouseEnter: () => m(t),
                                  onClick: () => {
                                      (s(n.id), l());
                                  },
                                  onFocus: () => m(t),
                                  children:
                                      null != r ? (0, f.jsx)("div", { className: lR.J5, children: r.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, f.jsx)(lG, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, f.jsx)(lT.a, {
        transitionState: i,
        onClose: l,
        title: V.intl.string(V.t.Dm8O4e),
        subtitle: V.intl.string(V.t.q4JpM8),
        actions: void 0,
        input: (0, f.jsx)(lf.k, {
            value: o,
            onChange: u,
            onKeyDown: function (e) {
                let t = e.key.toLowerCase();
                if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t)
                    switch ((e.preventDefault(), t)) {
                        case "escape":
                            l();
                            break;
                        case "enter": {
                            let e = (() => {
                                if (null != c) return c[g];
                                let e = d[g];
                                if (e?.type === lO.rD.VOICE_CHANNEL) return e.record;
                            })();
                            (null == e ? s(void 0) : s(e.id), l());
                            break;
                        }
                        case "arrowup":
                            0 === g ? m(A - 1) : m(g - 1);
                            break;
                        case "arrowdown":
                            g >= A - 1 ? m(0) : m(g + 1);
                    }
            },
            placeholder: V.intl.string(V.t.tG0r7g),
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
function lV(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: l,
        } = (0, I.cf)([lC.A, lv.A], () => {
            let e = null != t ? lC.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? lC.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? lv.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, f.jsx)(n5.E, {
              variant: "body-md/medium",
              color: "text-muted",
              className: lR.GN,
              children: V.intl.string(V.t["/fYIK7"]),
          })
        : (0, f.jsx)(lN.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: lD,
              onFocus: lD,
              onMouseEnter: lD,
              focused: !1,
              children: null != l ? (0, f.jsx)("div", { className: lR.J5, children: l.name }) : null,
          });
}
var lk = n(650583),
    lw = n(731854),
    lF = n(94451);
function lB(e) {
    let { keybind: t } = e,
        n = (0, I.bG)([la.Ay], () => la.Ay.isWaylandPortalActive()),
        i = (0, I.bG)([la.Ay], () => la.Ay.getWaylandPortalShortcutState(t.id));
    return n && 0 !== t.shortcut.length && t.enabled
        ? la.Ay.isWaylandPortalEligibleShortcut(t.shortcut)
            ? null == i
                ? null
                : i.bound
                  ? (0, lr.Rg)(i)
                      ? (0, f.jsx)("div", {
                            className: lF.$e,
                            children: (0, f.jsx)(iK.w, {
                                type: "info",
                                message: V.intl.format(V.t.wu2lqV, { trigger: i.triggerDescription }),
                                role: "status",
                            }),
                        })
                      : null
                  : (0, f.jsx)("div", {
                        className: lF.$e,
                        children: (0, f.jsx)(iK.w, {
                            type: "warning",
                            message: V.intl.string(V.t.PTCrUP),
                            role: "status",
                        }),
                    })
            : (0, f.jsx)("div", {
                  className: lF.$e,
                  children: (0, f.jsx)(iK.w, { type: "warning", message: V.intl.string(V.t.J0m3aK), role: "status" }),
              })
        : null;
}
function lX(e) {
    let { keybind: t } = e,
        n = lS.dI(t.shortcut);
    return e6.A.hasBind(n)
        ? (0, f.jsx)("div", {
              className: lF.$e,
              children: (0, f.jsx)(iK.w, { type: "warning", message: V.intl.string(V.t["7lQlw3"]), role: "status" }),
          })
        : lk.Yy.has(n)
          ? (0, f.jsx)("div", {
                className: lF.$e,
                children: (0, f.jsx)(iK.w, {
                    type: "warning",
                    message: V.intl.format(V.t.MOIaNd, {
                        keyboardNavArticle: eC.A.getArticleURL(_.MVz.KEYBOARD_NAVIGATION),
                    }),
                    role: "status",
                }),
            })
          : void 0;
}
function lz(e) {
    let { keybind: t } = e;
    return t.action === _.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, f.jsx)(lM, { keybind: t, className: lF._M }) : null;
}
let lH = x.memo(function (e) {
    let { keybind: t, keybindDescriptions: n, keybindActionTypes: i } = e,
        l = x.useCallback((e) => iZ.A.setKeybind({ ...t, action: e }), [t]),
        s = x.useCallback(
            (e) => {
                if (
                    ((0, lr.uL)(t.id, t.shortcut, e, la.Ay.getWaylandPortalShortcutState(t.id)),
                    t.managed && t.action === _.hCu.PUSH_TO_TALK)
                ) {
                    let n = t.context ?? lw.x.DEFAULT;
                    lE.default.setMode(i9.Ay.getMode(n), { shortcut: e }, n);
                    return;
                }
                iZ.A.setKeybind({ ...t, shortcut: e });
            },
            [t],
        ),
        r = x.useCallback(() => iZ.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = x.useCallback(() => iZ.A.deleteKeybind(t.id), [t.id]),
        o = x.useId(),
        u = x.useMemo(() => i.find((e) => e.value === t.action)?.label ?? t.action, [t.action, i]);
    return (0, f.jsxs)("div", {
        className: lF.f_,
        children: [
            (0, f.jsx)(lX, { keybind: t }),
            (0, f.jsx)(lB, { keybind: t }),
            (0, f.jsx)("div", {
                className: lF.XI,
                children: (0, f.jsx)(lo.l, {
                    selectionMode: "single",
                    label: V.intl.string(V.t.XH5b12),
                    value: t.action,
                    options: i,
                    onSelectionChange: l,
                    disabled: t.managed,
                }),
            }),
            (0, f.jsx)("div", {
                className: lF.LE,
                children: (0, f.jsx)(lu.D, {
                    label: V.intl.string(V.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, f.jsx)(lh.A, { defaultValue: t.shortcut, onChange: s }),
                }),
            }),
            (0, f.jsxs)("div", {
                className: lF.ne,
                children: [
                    !t.managed &&
                        (0, f.jsx)(ld.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: lc.TrashIcon,
                            "aria-label": V.intl.string(V.t.qEHmmB),
                        }),
                    (0, f.jsx)(lg.m, {
                        text: V.intl.string(t.enabled ? V.t.pNYGbx : V.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, f.jsxs)("div", {
                            children: [
                                (0, f.jsx)(lm.A, {
                                    id: o,
                                    children: V.intl.format(t.enabled ? V.t["myr/Y0"] : V.t.lYhtPO, { actionName: u }),
                                }),
                                (0, f.jsx)(lA.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, f.jsx)(n5.E, {
                variant: "body-xs/normal",
                color: "text-subtle",
                className: lF.h_,
                children: n[t.action],
            }),
            (0, f.jsx)(lz, { keybind: t }),
        ],
    });
});
var lY = n(158781),
    lW = n(734066),
    lK = n(880144),
    lZ = n(994778),
    lq = n(244055),
    lQ = n(603933);
function lJ() {
    let e = (0, I.bG)([la.Ay], () => la.Ay.isWaylandPortalActive()),
        t = x.useMemo(() => e && (0, lr.u)(), [e]);
    return e
        ? (0, f.jsx)(iK.w, {
              type: "info",
              message: V.intl.string(V.t.AcH7R7),
              role: "none",
              action: t ? { text: V.intl.string(V.t.ZPHaPE), onClick: lr.qM } : void 0,
          })
        : null;
}
let l$ = function () {
        let e,
            t,
            n,
            i,
            l,
            s,
            r,
            {
                customizableKeybinds: a,
                keybindDescriptions: o,
                keybindActionTypes: u,
            } = ((e = (0, I.bG)([la.Ay], () => la.Ay.getState())),
            (t = (0, I.bG)([i9.Ay], () => (0, lK.A)(i9.Ay))),
            (n = (0, I.bG)([i9.Ay], () => i9.Ay.supports(lw.O5.VIDEO))),
            (i = (0, I.bG)([lq.A], () => lq.A.isSupported)),
            (l = (0, lW.sw)()),
            (s = (0, lW.BW)()),
            {
                customizableKeybinds: (function (e) {
                    let { keybinds: t, enableClips: n, enableScreenshotKeybind: i, allowSoundboard: l } = e;
                    return K()(t)
                        .reject(
                            (e) =>
                                e.managed &&
                                ![
                                    _.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                                    _.hCu.SAVE_CLIP,
                                    _.hCu.SAVE_SCREENSHOT,
                                ].includes(e.action),
                        )
                        .reject((e) => !n && (e.action === _.hCu.SAVE_CLIP || e.action === _.hCu.SAVE_SCREENSHOT))
                        .reject((e) => !i && e.action === _.hCu.SAVE_SCREENSHOT)
                        .reject((e) => !l && (e.action === _.hCu.SOUNDBOARD || e.action === _.hCu.SOUNDBOARD_HOLD))
                        .sortBy((e) => e.id)
                        .sortBy((e) => (!0 === e.managed ? -1 : 0))
                        .value();
                })({ keybinds: e, enableClips: l, enableScreenshotKeybind: s, allowSoundboard: (r = (0, e8.uF)()) }),
                keybindActionTypes: (function (e) {
                    let {
                            overlaySupported: t,
                            canGoLive: n,
                            videoSupported: i,
                            allowSoundboard: l,
                            enableClips: s,
                            enableScreenshotKeybind: r,
                        } = e,
                        a = [
                            { id: "unassigned", value: _.hCu.UNASSIGNED },
                            { id: "push-to-talk", value: _.hCu.PUSH_TO_TALK },
                            { id: "push-to-talk-priority", value: _.hCu.PUSH_TO_TALK_PRIORITY },
                            { id: "push-to-mute", value: _.hCu.PUSH_TO_MUTE },
                            { id: "vad-priority", value: _.hCu.VAD_PRIORITY },
                            { id: "toggle-mute", value: _.hCu.TOGGLE_MUTE },
                            { id: "toggle-deafen", value: _.hCu.TOGGLE_DEAFEN },
                            { id: "toggle-voice-mode", value: _.hCu.TOGGLE_VOICE_MODE },
                            { id: "toggle-streamer-mode", value: _.hCu.TOGGLE_STREAMER_MODE },
                            { id: "toggle-voice-channel-chat", value: _.hCu.TOGGLE_VOICE_CHANNEL_CHAT },
                        ];
                    return (
                        i && a.push({ id: "toggle-camera", value: _.hCu.TOGGLE_CAMERA }),
                        t &&
                            (a.push({ id: "toggle-overlay-input-lock", value: _.hCu.TOGGLE_OVERLAY_INPUT_LOCK }),
                            a.push({
                                id: "activate-overlay-region-text-widget",
                                value: _.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                            })),
                        n &&
                            ((0, e8.uF)() || i9.Ay.getUseSystemScreensharePicker()) &&
                            a.push({ id: "toggle-go-live-streaming", value: _.hCu.TOGGLE_GO_LIVE_STREAMING }),
                        (0, e8.xl)() &&
                            (a.push(
                                { id: "navigate-back", value: _.hCu.NAVIGATE_BACK },
                                { id: "navigate-forward", value: _.hCu.NAVIGATE_FORWARD },
                                { id: "switch-to-voice-channel", value: _.hCu.SWITCH_TO_VOICE_CHANNEL },
                                { id: "disconnect-from-voice-channel", value: _.hCu.DISCONNECT_FROM_VOICE_CHANNEL },
                            ),
                            l &&
                                a.push(
                                    { id: "soundboard", value: _.hCu.SOUNDBOARD },
                                    { id: "soundboard-hold", value: _.hCu.SOUNDBOARD_HOLD },
                                ),
                            s &&
                                (a.push({ id: "save-clip", value: _.hCu.SAVE_CLIP }),
                                r && a.push({ id: "save-screenshot", value: _.hCu.SAVE_SCREENSHOT }))),
                        a.map((e) => {
                            let { id: t, value: n } = e;
                            return { id: t, value: n, label: (0, lZ.B)(n) ?? n };
                        })
                    );
                })({
                    overlaySupported: i,
                    canGoLive: t,
                    videoSupported: n,
                    allowSoundboard: r,
                    enableClips: l,
                    enableScreenshotKeybind: s,
                }),
                keybindDescriptions: (function (e) {
                    let {
                            overlaySupported: t,
                            canGoLive: n,
                            videoSupported: i,
                            enableClips: l,
                            enableScreenshotKeybind: s,
                        } = e,
                        r = {
                            [_.hCu.UNASSIGNED]: V.intl.string(V.t.rvlNLv),
                            [_.hCu.PUSH_TO_MUTE]: V.intl.string(V.t.xtESim),
                            [_.hCu.PUSH_TO_TALK]: V.intl.string(V.t.wTcBSy),
                            [_.hCu.PUSH_TO_TALK_PRIORITY]: V.intl.string(V.t.FhHvWH),
                            [_.hCu.TOGGLE_MUTE]: V.intl.string(V.t.X2fbUm),
                            [_.hCu.TOGGLE_DEAFEN]: V.intl.string(V.t.MjREZV),
                            [_.hCu.TOGGLE_VOICE_MODE]: V.intl.string(V.t.snm5YW),
                            [_.hCu.TOGGLE_STREAMER_MODE]: V.intl.string(V.t.YszLLx),
                            [_.hCu.VAD_PRIORITY]: V.intl.string(V.t.rSe8IZ),
                            [_.hCu.TOGGLE_VOICE_CHANNEL_CHAT]: V.intl.string(V.t.desfB4),
                        };
                    return (
                        i && (r[_.hCu.TOGGLE_CAMERA] = V.intl.string(V.t.v1JBtL)),
                        t && (r[_.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = V.intl.string(V.t.IoP5vc)),
                        n && (0, e8.uF)() && (r[_.hCu.TOGGLE_GO_LIVE_STREAMING] = V.intl.string(V.t.s4C238)),
                        (0, e8.xl)() &&
                            ((r[_.hCu.NAVIGATE_BACK] = V.intl.string(V.t.nKDlEt)),
                            (r[_.hCu.NAVIGATE_FORWARD] = V.intl.string(V.t.DK0FFk)),
                            (r[_.hCu.SOUNDBOARD] = (0, e8.uF)()
                                ? V.intl.string(V.t["5wJefL"])
                                : V.intl.string(V.t.gzjsSP)),
                            (r[_.hCu.SOUNDBOARD_HOLD] = (0, e8.uF)()
                                ? V.intl.string(V.t.RRkZc9)
                                : V.intl.string(V.t.laNlTl)),
                            l &&
                                ((r[_.hCu.SAVE_CLIP] = V.intl.string(V.t.z3Wbam)),
                                s && (r[_.hCu.SAVE_SCREENSHOT] = V.intl.string(V.t.m0zd57)))),
                        r
                    );
                })({
                    overlaySupported: i,
                    canGoLive: t,
                    videoSupported: n,
                    enableClips: l,
                    enableScreenshotKeybind: s,
                }),
            });
        return 0 === a.length
            ? (0, f.jsxs)(q.B, {
                  gap: 16,
                  children: [
                      (0, f.jsx)(lJ, {}),
                      (0, f.jsx)(n5.E, {
                          variant: "body-sm/normal",
                          color: "text-subtle",
                          children: V.intl.string(V.t.vyYgWp),
                      }),
                  ],
              })
            : (0, f.jsxs)(q.B, {
                  gap: 16,
                  children: [
                      (0, f.jsx)(lJ, {}),
                      (0, f.jsx)("div", {
                          className: lQ.A,
                          children: a.map((e, t) =>
                              (0, f.jsxs)(
                                  x.Fragment,
                                  {
                                      children: [
                                          (0, f.jsx)(lH, { keybind: e, keybindDescriptions: o, keybindActionTypes: u }),
                                          t < a.length - 1 ? (0, f.jsx)(ls.c, { className: lQ.y, gap: 24 }) : null,
                                      ],
                                  },
                                  e.id,
                              ),
                          ),
                      }),
                  ],
              });
    },
    l0 = (0, h.E2)(S.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["069nVT"])],
        Component: function () {
            return nh.Av
                ? (0, f.jsx)(l$, {})
                : (0, f.jsx)(iK.w, {
                      type: "info",
                      message: V.intl.format(V.t.mPi3F3, { downloadLink: _.X7G.DOWNLOAD }),
                      role: "none",
                  });
        },
    });
var l1 = n(475358),
    l2 = n(552992),
    l3 = n(793650);
function l5(e) {
    let { children: t } = e;
    return t([lY.Q_.MESSAGE, lY.Q_.NAVIGATION, lY.Q_.DND, lY.Q_.CHAT, lY.Q_.VOICE_AND_VIDEO, lY.Q_.MISCELLANEOUS]);
}
function l4(e) {
    let { showHeader: t = !0 } = e,
        n = K()((0, lY.Bx)())
            .filter((e) => e.description !== V.intl.string(V.t.HnNtEI))
            .filter((e) => e.predicate?.() !== !1)
            .groupBy((e) => e.group)
            .value();
    return (0, f.jsxs)(q.B, {
        gap: 48,
        children: [
            (0, f.jsx)(n3.n, {
                label: t ? V.intl.string(V.t.Lz5KHI) : void 0,
                children: (0, f.jsx)("div", {
                    className: l3.jh,
                    children: (0, f.jsxs)("div", {
                        className: l3.yZ,
                        children: [
                            (0, f.jsx)(n5.E, { variant: "body-md/normal", children: V.intl.string(V.t.sMWLBj) }),
                            (0, f.jsx)("div", {
                                className: l3.DM,
                                children: (0, f.jsx)(l1.e, { shortcut: l2.z.binds["0"], className: l3.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, f.jsx)(l5, {
                children: (e) =>
                    (0, f.jsx)(f.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, lY.Gm)(e),
                                l = (0, lY.zF)(e),
                                s = n[e];
                            return (0, f.jsx)(
                                n3.n,
                                {
                                    label: i,
                                    description: l,
                                    children: (0, f.jsx)("div", {
                                        className: l3.jh,
                                        children: s.map((e, t) =>
                                            (0, f.jsxs)(
                                                x.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, f.jsx)(ls.c, {}),
                                                        (0, f.jsxs)("div", {
                                                            className: l3.yZ,
                                                            children: [
                                                                (0, f.jsx)(n5.E, {
                                                                    variant: "body-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, f.jsx)("div", {
                                                                    className: l3.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, f.jsx)(
                                                                            l1.e,
                                                                            { shortcut: e, className: l3.LE },
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
let l6 = (0, h.E2)(S.X.DEFAULT_KEYBINDS_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.Lz5KHI)],
        Component: () => (0, f.jsx)(l4, { showHeader: !1 }),
    }),
    l8 = (0, h.zD)(S.X.GAME_MODE_ENABLED_SETTING, {
        useTitle: () => V.intl.string(eD.default.rea2Ar),
        useSubtitle: () => V.intl.string(eD.default.DwBO0x),
        useValue: () => (0, I.bG)([iJ.A], () => iJ.A.isEnabledFor(!0)),
        setValue: (e) => {
            (td.default.track(_.HAw.GAME_MODE_TOGGLED, { enabled: e, running_game_id: iJ.A.runningGameId }),
                ts.h.dispatch({ type: "GAME_MODE_SET_ENABLED", enabled: e }));
        },
    });
var l7 = n(253400),
    l9 = n(546385);
let se = (0, h.E2)(S.X.HARDWARE_ACCELERATION, {
    usePredicate: () => nh.Av && !(0, nh.cX)(),
    useSearchTerms: () => [V.intl.string(V.t["/HIxyY"]), V.intl.string(V.t.B0hqpb)],
    Component: function () {
        let [e] = x.useState(() => l7.Ay.getEnableHardwareAcceleration()),
            t = V.intl.string(V.t["/HIxyY"]),
            n = V.intl.string(V.t.B0hqpb);
        return (0, f.jsxs)(q.B, {
            children: [
                (0, f.jsx)(t4.d, { label: t, description: n, checked: e, onChange: st }),
                !e && (0, f.jsx)(l9.A, { look: l9.k.WARNING, children: V.intl.string(V.t.j7S6IX) }),
            ],
        });
    },
});
function st(e) {
    let t = e ? V.intl.format(V.t.LYXRxL, {}) : V.intl.format(V.t.uDP3Kz, {});
    (0, n2.A)({
        title: V.intl.string(V.t.aqpAvn),
        subtitle: t,
        confirmText: V.intl.string(V.t.vT7ckk),
        onConfirm: () => {
            l7.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let sn = (0, eb.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 })),
    si = (0, h.zD)(S.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => V.intl.string(V.t["3BeZti"]),
        usePredicate: () => nh.Av && !(0, nh.cX)(),
        useValue: () => sn.useState((e) => e.openOnStartup),
        setValue: function (e) {
            (sn.setState({ openOnStartup: e }), l7.Ay.send("TOGGLE_OPEN_ON_STARTUP", e));
        },
        initialize: () => {
            l7.Ay.getOpenOnStart().then((e) => sn.setState({ openOnStartup: e }));
        },
    }),
    sl = (0, h.zD)(S.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => V.intl.string(V.t.dJ5MUh),
        useSubtitle: () => V.intl.string(V.t.nQavHr),
        usePredicate: () => nh.Av && !(0, nh.cX)(),
        useValue: () => sn.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            (sn.setState({ minimizeToTray: e }), l7.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e));
        },
        initialize: () => {
            l7.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => sn.setState({ minimizeToTray: e }));
        },
    }),
    ss = (0, h.zD)(S.X.OS_START_MINIMIZED, {
        useTitle: () => V.intl.string(V.t.GfBL83),
        useSubtitle: () => V.intl.string(V.t.XGyhhc),
        usePredicate: () => (0, nh.uF)(),
        useValue: () => sn.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            (sn.setState({ startMinimized: e }), l7.Ay.send("TOGGLE_START_MINIMIZED", e));
        },
        useDisabled: () => !sn.useState((e) => e.openOnStartup),
        initialize: () => {
            l7.Ay.getSetting("START_MINIMIZED", !1).then((e) => sn.setState({ startMinimized: e }));
        },
    });
var sr = n(61628);
let sa = new Set(["failure", "unknown"]),
    so = (0, h.E2)(S.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [V.intl.string(V.t.roHq80)],
        Component: function () {
            let [e, t] = x.useState(!1),
                [n, i] = x.useState(() => (0, le.TC)()),
                l = (0, I.bG)([i4.Ay], () => i4.Ay.getSystemServiceStatus("input-service")),
                s = x.useCallback(async () => {
                    (t(!0),
                        n ? await (0, le.z8)("windows-settings") : await (0, le.sL)("windows-settings"),
                        t(!1),
                        i((0, le.TC)()));
                }, [n]);
            return (0, f.jsxs)("div", {
                className: sr.q,
                children: [
                    (0, f.jsxs)("div", {
                        className: sr.L,
                        children: [
                            (0, f.jsxs)(q.B, {
                                direction: "horizontal",
                                children: [
                                    (0, f.jsx)(n5.E, {
                                        variant: "body-md/medium",
                                        color: "text-strong",
                                        children: V.intl.string(V.t.roHq80),
                                    }),
                                    n &&
                                        (0, f.jsxs)(f.Fragment, {
                                            children: [
                                                (0, f.jsx)(n5.E, {
                                                    variant: "body-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, f.jsx)(n5.E, {
                                                    variant: "body-md/medium",
                                                    color:
                                                        "running" === l.state
                                                            ? "text-feedback-positive"
                                                            : sa.has(l.state)
                                                              ? "text-feedback-critical"
                                                              : "text-feedback-warning",
                                                    children: (function (e) {
                                                        switch (e.state) {
                                                            case "unknown":
                                                                return V.intl.string(V.t["KW+nqT"]);
                                                            case "disabled":
                                                                return V.intl.string(V.t["Q/wAF7"]);
                                                            case "disconnected":
                                                                return V.intl.string(V.t.Xvs9IM);
                                                            case "initializing":
                                                                return V.intl.string(V.t.h4qz8W);
                                                            case "connecting":
                                                                return V.intl.string(V.t.fSu9XF);
                                                            case "handshaking":
                                                                return V.intl.string(V.t["00aYLJ"]);
                                                            case "running":
                                                                return V.intl.string(V.t["54TB7Z"]);
                                                            case "waiting-for-retry":
                                                                return V.intl.string(V.t["0FONwi"]);
                                                            case "failure":
                                                                return V.intl.string(V.t.Ic0nkd);
                                                            default:
                                                                (0, io.xb)(e.state);
                                                        }
                                                    })(l),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, f.jsx)(n5.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: V.intl.format(V.t["8CAL+D"], {
                                    helpCenterLink: eC.A.getArticleURL(_.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                        ],
                    }),
                    (0, f.jsx)(j.$, {
                        variant: n ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: s,
                        text: n ? V.intl.string(V.t.pAwbdL) : V.intl.string(V.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: le.XQ,
    });
var su = n(687813),
    sd = n(613412),
    sc = n(858899),
    sg = n(384077);
let sm = (0, h.Tf)(S.X.CAPTURE_PERFORMANCE_TRACE, {
    useTitle: () => V.intl.string(V.t.o6Qr6n),
    useSubtitle: () => V.intl.string(V.t.OuGtH8),
    useLabel: () => V.intl.string(V.t.bm1WjO),
    usePredicate: () => nh.Av && np.A?.tracing?.capturePerformanceTrace != null,
    onClick: () => {
        (0, n2.A)({
            title: V.intl.string(V.t.o6Qr6n),
            subtitle: V.intl.string(V.t.JEHHJ1),
            confirmText: V.intl.string(V.t.bm1WjO),
            onConfirm: () => {
                ((0, tH.default)(),
                    (async function () {
                        try {
                            await (async function () {
                                var e;
                                let t = np.A.tracing;
                                if (null == t) return;
                                (0, sc.P0)({ text: V.intl.string(V.t.qGRW8d) });
                                let [n, i, l] = await Promise.all([
                                        t.capturePerformanceTrace({ durationMs: 3e4 }),
                                        np.A.processUtils.getSystemInfo(),
                                        np.A.processUtils.getSystemMetrics((0, sg.uD)()),
                                    ]),
                                    s = {
                                        captured_at: n.startedAtISO,
                                        duration_ms: n.durationMs,
                                        categories: n.categories,
                                        ...(0, sd.getSuperProperties)(),
                                        native_build_number: np.A.app.getBuildNumber(),
                                    },
                                    r = {
                                        systemInfo: i,
                                        systemMetrics: l,
                                        cumulativeCpuUsage: np.A.processUtils.getCumulativeCPUUsage() ?? null,
                                        processTypeCpuUsage:
                                            np.A.processUtils.getCpuUsageElectronProcessTypeDetails() ?? null,
                                    },
                                    a = await ((e = {
                                        "trace.json": n.traceBytes,
                                        "system_info.json": (0, su._u)(JSON.stringify(r, null, 2)),
                                        "metadata.json": (0, su._u)(JSON.stringify(s, null, 2)),
                                    }),
                                    new Promise((t, n) => {
                                        (0, su.yU)(e, { level: 6 }, (e, i) => (null != e ? n(e) : t(i)));
                                    })),
                                    o = `Discord-Trace-${n.startedAtISO.replace(/:/g, "-").replace(/\..*$/, "")}.zip`,
                                    { filePath: u } = await t.saveTraceToDownloads(a, o);
                                (np.A.fileManager.showItemInFolder(u),
                                    (0, sc.P0)({ text: V.intl.string(V.t.gpCRFS), variant: "success" }));
                            })();
                        } catch {
                            (0, sc.P0)({ text: V.intl.string(V.t["8ihs9i"]), variant: "critical" });
                        }
                    })());
            },
        });
    },
});
function sA() {
    ts.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
var sE = n(287809);
let sh = (0, h.Tf)(S.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, I.bG)([sE.default], () => sE.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        sA();
    },
});
var sS = n(114129),
    sT = n(442325),
    sp = n(858760);
let sf = (0, h.zD)(S.X.ENABLE_TABS_EXPERIENCE, {
    useTitle: () => "Enable tabs experience",
    useSubtitle: () => "Open channels as browser-style tabs in the title bar, each with its own back/forward history.",
    usePersistentBadge: () => ({ badgeType: p.Xi.BETA }),
    usePredicate: () => sp.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, nh.xl)(),
    useValue: () => (0, I.bG)([sT.A], () => sT.A.isUserOptedIn()),
    setValue: sS.lj,
});
var sx = n(813645);
let sI = {};
var s_ = n(735729),
    sb = n(146849);
let sN = (0, h.zD)(S.X.NATIVE_MARKDOWN, {
        useTitle: () => V.intl.string(V.t["5CIvT4"]),
        usePredicate: () => sb.wG.useConfig({ location: "NativeMarkdownSetting" }).enabled,
        useValue: () => (0, s_.A)(sb.XQ),
        setValue: (e) =>
            (function (e) {
                let { enabled: t = !sx.A.get(e) } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sI;
                ts.h.dispatch({ type: "LAB_FEATURE_TOGGLE", labFeature: e, enabled: t });
            })(sb.XQ, { enabled: e }),
    }),
    sC = (0, h.zZ)(S.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => V.intl.string(V.t["8/udY0"]),
        buildLayout: () => [sh, sm, sf, sN],
    }),
    sy = (0, h.zZ)(S.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => V.intl.string(V.t.cg6ltt),
        buildLayout: () => [si, ss, sl, se],
        usePredicate: () => nh.Av && ((0, nh.uF)() || (0, nh.j9)()),
        initialize: () => {
            !(async function () {
                let e = await l7.Ay.getOpenOnStart(),
                    t = await l7.Ay.getSetting("START_MINIMIZED", !1),
                    n = await l7.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
                sn.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
            })();
        },
    }),
    sv = (0, h.zZ)(S.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["069nVT"]),
        useSubtitle: () => V.intl.string(V.t.T4LZVL),
        buildLayout: () => [l0],
        initialize: () => (iZ.A.enableAll(!1), () => iZ.A.enableAll(!0)),
        useInlineNotice: function () {
            return nh.Av
                ? {
                      type: p.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, f.jsxs)(q.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, f.jsx)(iK.w, {
                                      type: "info",
                                      message: V.intl.string(V.t["5pkmHa"]),
                                      role: "none",
                                  }),
                                  (0, f.jsx)(ll, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            nh.Av
                ? {
                      type: p.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: p.UV.BUTTON,
                              text: V.intl.string(V.t.zk6Xbs),
                              variant: "secondary",
                              icon: iY.PlusSmallIcon,
                              onClick: () => iZ.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    sj = (0, h.zZ)(S.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Lz5KHI),
        buildLayout: () => [l6],
    }),
    sO = (0, h.zZ)(S.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => V.intl.string(V.t["+XZgmA"]),
        usePredicate: () => nh.Av && ((0, nh.uF)() || (0, nh.j9)()),
        buildLayout: () => [so],
    }),
    sR = (0, h.zZ)(S.X.SYSTEM_GAME_MODE_CATEGORY, {
        useTitle: () => V.intl.string(eD.default.QG0axY),
        usePredicate: () =>
            (0, I.bG)(
                [iJ.A, iq.A],
                () =>
                    e8.isPlatformEmbedded &&
                    iJ.A.hasDetectedGame &&
                    (0, iQ.v)({ location: "GameModeCategory" }).enabled,
            ),
        buildLayout: () => [l8],
    }),
    sD = (0, h.t_)(S.X.SYSTEM_PANEL, {
        useTitle: () => V.intl.string(V.t["VJ/qKo"]),
        buildLayout: () => [sy, sv, sj, sO, sR, sC],
    }),
    sL = (0, h.i4)(S.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["VJ/qKo"]),
        icon: iW.KeyboardIcon,
        buildLayout: () => [sD],
    });
var sP = n(831544),
    sG = n(922795),
    sM = n(212245),
    sU = n(329551),
    sV = n(352430),
    sk = n(854325),
    sw = n(952572),
    sF = n(717359);
let sB = (0, h.E2)(S.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.lZTUPs)],
        usePredicate: sw.A,
        Component: function () {
            let e = (0, sM.p)(),
                t = x.useRef(!1),
                n = (0, I.bG)([i9.Ay], () => i9.Ay.getVideoDeviceId()),
                [i, l] = x.useState((0, sU.i)(sE.default.getCurrentUser())),
                s = x.useRef(i);
            return (
                x.useEffect(
                    () => () => {
                        t.current && (0, sV._C)(s.current);
                    },
                    [],
                ),
                (0, f.jsx)(sF.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: function (n) {
                        ((t.current = !0), (s.current = n), l(n), (0, sk.gB)(n, { location: e.location }).catch(_.tEg));
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    sX = (0, h.zD)(S.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => V.intl.string(V.t["3Ppr1h"]),
        useSubtitle: () => V.intl.string(V.t.WNbX4O),
        useValue: U.bm.useSetting,
        setValue: (e) => {
            (U.bm.updateSetting(e), td.default.track(_.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
        },
    });
var sz = n(625841),
    sH = n(74848),
    sY = n(204050);
let sW = (0, eb.D)(() => ({ previewEnabled: !1 })),
    sK = (0, h.E2)(S.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.FsQ3OR)],
        Component: function () {
            let e = (0, I.bG)([i9.Ay], () => i9.Ay.isVideoAvailable()),
                { id: t } = (0, sH.x5)(lw.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, ez.Ay)();
            return (0, f.jsx)(sz.U, {
                label: V.intl.string(V.t.FsQ3OR),
                deviceType: lw.oh.VIDEO_INPUT,
                location: "UserSettingsCameraSelect",
                isDisabled: !e,
                helperText: (0, sY.p)()
                    ? V.intl.format(V.t.aJYgRt, {
                          onCameraSettingsClick: () => {
                              (sW.setState({ previewEnabled: !1 }),
                                  window.open((0, sY.i)(t)),
                                  td.default.track(_.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n }));
                          },
                      })
                    : void 0,
            });
        },
    });
var sZ = n(745317),
    sq = n(9219);
let sQ = (0, h.E2)(S.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [V.intl.string(V.t.JIf4v7)],
        Component: function () {
            let e = i9.Ay.getCameraComponent(),
                t = (0, I.bG)([i9.Ay], () => i9.Ay.getVideoDeviceId()),
                n = sW.useField("previewEnabled"),
                i = (0, I.bG)([i9.Ay], () => i9.Ay.isVideoAvailable());
            return ((0, e_.l0)(() => {
                sW.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, f.jsx)("div", {
                      className: sq.T9,
                      children: (0, f.jsxs)("div", {
                          className: sq.Xi,
                          children: [
                              (0, f.jsxs)("div", {
                                  className: sq.UI,
                                  children: [
                                      (0, f.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, f.jsx)(sZ.kE, {}),
                                  ],
                              }),
                              (0, f.jsx)(sZ.eK, {}),
                          ],
                      }),
                  })
                : (0, f.jsx)("div", {
                      className: sq.T9,
                      children: (0, f.jsx)(lg.m, {
                          text: i ? null : V.intl.string(V.t["8jSzSe"]),
                          children: (0, f.jsx)(j.$, {
                              variant: "primary",
                              text: V.intl.string(V.t.JIf4v7),
                              onClick: () => sW.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    sJ = (0, h.zZ)(S.X.CAMERA_CATEGORY, {
        useTitle: () => V.intl.string(V.t.uje3P9),
        usePredicate: () => (0, I.bG)([i9.Ay], () => i9.Ay.supports(lw.O5.VIDEO)),
        buildLayout: () => [sQ, sX, sK, sB],
    }),
    s$ = (0, h.zD)(S.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => V.intl.string(V.t.qFphsa),
        useSubtitle: () => V.intl.string(V.t.cQfwyY),
        usePredicate: function () {
            return (0, nh.j9)();
        },
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            (lE.default.setOpenH264Enabled(e),
                (0, n2.A)({
                    title: V.intl.string(V.t["9jf31O"]),
                    subtitle: V.intl.string(V.t["J2wg+X"]),
                    confirmText: V.intl.string(V.t.BddRzS),
                    onConfirm: () => np.A.app.relaunch(),
                }));
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    s0 = (0, h.zD)(S.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => V.intl.string(V.t["r6K+TL"]),
        useSubtitle: () => V.intl.string(V.t["xl9+I6"]),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getAecDump());
        },
        setValue: lE.default.setAecDump,
        usePredicate: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.isAecDumpSupported());
        },
    });
var s1 = n(139033),
    s2 = n(862482),
    s3 = n(640238),
    s5 = n(825484),
    s4 = n(497029),
    s6 = n(487329),
    s8 = n(353835);
let s7 = (0, eb.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function s9() {
    let e = await np.A.fileManager.getLogPath();
    np.A.fileManager.showItemInFolder(e);
}
function re(e) {
    (0, n2.A)({
        title: V.intl.string(V.t["7UXEF2"]),
        subtitle: V.intl.string(V.t.IYPrRl),
        confirmText: V.intl.string(V.t.BddRzS),
        onConfirm: () => lE.default.setDebugLogging(e),
    });
}
async function rt() {
    await (async function (e) {
        let { onUploadStart: t, onUploadFinish: n } = e;
        t?.();
        try {
            let e, t;
            (await i9.Ay.getMediaEngine().writeAudioDebugState(),
                await s8.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
                await (0, s4.a)(_.Umv.RTC),
                (e = V.intl.string(V.t["fKBB8+"])),
                (t = V.intl.string(V.t.BvyxE7)),
                (0, s1.A)({ title: e, subtitle: t }));
        } catch (s) {
            var i;
            let e, t, n, l;
            ((i = s.displayMessage),
                (e = V.intl.string(V.t.QZg0J7)),
                (t = i ?? V.intl.string(V.t.VzHcSm)),
                (n = (0, s6.B1)(s6.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
                (l = V.intl.formatToPlainString(V.t.ejOT95, { errorCode: n })),
                (0, lp.qf)((n) =>
                    (0, f.jsx)(s3.a, {
                        header: e,
                        confirmButtonColor: s2.$n.Colors.BRAND,
                        confirmText: V.intl.string(V.t.BddRzS),
                        ...n,
                        children: (0, f.jsxs)("div", {
                            style: { display: "flex", flexDirection: "column", height: "100%" },
                            children: [
                                (0, f.jsx)(n5.E, { variant: "body-md/normal", children: t }),
                                (0, f.jsx)(n5.E, {
                                    variant: "body-sm/semibold",
                                    selectable: !0,
                                    style: { marginTop: "auto" },
                                    children: l,
                                }),
                            ],
                        }),
                    }),
                ));
        } finally {
            n?.();
        }
    })({
        onUploadStart: () => s7.setState({ isUploading: !0 }),
        onUploadFinish: () => s7.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let rn = (0, h.E2)(S.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [V.intl.string(V.t["726JHL"]), V.intl.string(V.t.EbwFfR), V.intl.string(V.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, I.bG)([i9.Ay], () => i9.Ay.supports(lw.O5.DEBUG_LOGGING));
        return nh.Av && e && null != np.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, I.bG)([i9.Ay], () => i9.Ay.getDebugLogging()),
            t = s7.useField("isUploading"),
            n = s7.useField("isDisabled"),
            i = x.useId();
        return (0, f.jsxs)("fieldset", {
            children: [
                (0, f.jsx)(lm.A, { tag: "legend", id: i, children: V.intl.string(V.t["FjN+et"]) }),
                (0, f.jsxs)(q.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, f.jsx)(t4.d, {
                            label: V.intl.string(V.t["726JHL"]),
                            description: V.intl.string(V.t["/7ak9Q"]),
                            checked: e,
                            onChange: re,
                        }),
                        (0, f.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, f.jsxs)(s5.e, {
                                children: [
                                    (0, f.jsx)(j.$, {
                                        variant: "secondary",
                                        text: V.intl.string(V.t.EbwFfR),
                                        onClick: rt,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": V.intl.string(V.t.aY1OH2),
                                    }),
                                    (0, f.jsx)(j.$, {
                                        variant: "secondary",
                                        text: V.intl.string(V.t.nuPtYi),
                                        onClick: s9,
                                        "aria-label": V.intl.string(V.t["L/hFOe"]),
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
var ri = n(233545),
    rl = n(58663),
    rs = n(412780);
function rr() {
    return (0, I.bG)([sE.default, i9.Ay], () => {
        let e = sE.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === l7.Ay.releaseChannel || "development" === l7.Ay.releaseChannel,
            i = i9.Ay.supports(lw.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let ra = (0, h.zD)(S.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => V.intl.string(V.t.U4FgFK),
        useSubtitle: () => V.intl.string(V.t.Lm72RU),
        useValue: function () {
            return (0, I.bG)([rs.Ay], () => rs.Ay.shouldRecordNextConnection());
        },
        setValue: rl.A,
        usePredicate: rr,
    }),
    ro = (0, h.Tf)(S.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => V.intl.string(V.t.nJnOHO),
        useLabel: () => V.intl.string(V.t["3xjX0U"]),
        onClick: ri.YW,
        usePredicate: rr,
    });
var ru = n(926919),
    rd = n(111162),
    rc = n(855302);
let rg = (0, h.zD)(S.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => V.intl.string(V.t["0CEP6e"]),
        useSubtitle: () => V.intl.string(V.t["kBXuW+"]),
        useValue: function () {
            return (0, I.bG)([rd.default], () => rd.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = rd.default.isStreamInfoOverlayEnabled;
            ((0, rc.A)("stream_info_overlay_enabled", e, t), (0, ru.x)({ isStreamInfoOverlayEnabled: e }));
        },
        usePredicate: function () {
            return U.Q_.useSetting();
        },
    }),
    rm = (0, h.bd)(S.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? V.intl.string(V.t["/B4I8H"]) : V.intl.string(V.t.BTlsWH)),
        useCollapsedSubtitle: () => V.intl.string(V.t.la1Ys4),
        buildLayout: () => [rg, s0, ra, ro, rn],
    });
function rA(e, t, n) {
    (0, n2.A)({ title: e, subtitle: t, confirmText: V.intl.string(V.t.BddRzS), onConfirm: n });
}
let rE = (0, h.Tf)(S.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => V.intl.string(V.t.SXfv1v),
        useSubtitle: () => V.intl.string(V.t["buA5/q"]),
        useLabel: () => V.intl.string(V.t.yBZMsQ),
        onClick: function () {
            rA(V.intl.string(V.t["4iKQ/3"]), V.intl.string(V.t.sQ42iT), lE.default.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    rh = (0, h.zZ)(S.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.UDAU9K),
        buildLayout: () => [s$, rm, rE],
    });
var rS = n(343446),
    rT = n(360729),
    rp = n(303227),
    rf = n(558076),
    rx = n(687782);
let rI = (0, h.zD)(S.X.GUILD_ROOMS_REMEMBER_LAST_VIEW_SETTING, {
        useTitle: () => V.intl.string(rx.default.qYzpsI),
        useSubtitle: () => V.intl.string(rx.default["+vMoL1"]),
        useValue: () => (0, I.bG)([rf.A], () => rf.A.getRememberVideoOverlayVisibility()),
        setValue: (e) => (0, rp.Ft)(e),
    }),
    r_ = (0, h.zZ)(S.X.GUILD_ROOMS_CATEGORY, {
        useTitle: () => V.intl.string(rx.default.wRLmM0),
        usePredicate: function () {
            let e = (0, I.yK)([lv.A], () => lv.A.getGuildIds()),
                { loaded: t, override: n } = (0, I.cf)([rS.A], () => ({
                    loaded: rS.A.getLoadedGuildExperiment(rT.vJ),
                    override: rS.A.getExperimentOverrideDescriptor(rT.vJ),
                }));
            return (0, x.useMemo)(
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
        buildLayout: () => [rI],
    });
var rb = n(347481),
    rN = n(852712),
    rC = n(179172),
    ry = n(868162);
let rv = (0, h.zD)(S.X.VOICE_AUDIO_DEVICE_SUGGESTIONS_SETTING, {
        useTitle: () => V.intl.string(V.t.gF8HJo),
        useSubtitle: () => V.intl.string(V.t.cfrfyZ),
        useValue: function () {
            return (0, I.bG)([ry.A], () => !0 !== ry.A.getState().neverShowModal);
        },
        setValue: function (e) {
            rC.Bv(!e);
        },
        usePredicate: function () {
            return e8.isPlatformEmbedded;
        },
    }),
    rj = (0, h.zD)(S.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => V.intl.string(V.t.cUMdH0),
        useSubtitle: () => V.intl.string(V.t["6EjbvA"]),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            lE.default.setAutomaticGainControl(e, {
                page: _.liQ.USER_SETTINGS,
                section: _.JJy.SETTINGS_VOICE_AND_VIDEO,
            });
        },
        useDisabled: function () {
            return (0, I.bG)([i9.Ay, rb.A], () => {
                let e = i9.Ay.getInputDeviceId();
                return rb.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.isAutomaticGainControlSupported() && i9.Ay.isInputProfileCustom());
        },
    }),
    rO = (0, h.sN)(S.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => V.intl.string(V.t.AlybXj),
        setValue: (e) =>
            lE.default.setAttenuation(
                e,
                i9.Ay.getAttenuateWhileSpeakingSelf(),
                i9.Ay.getAttenuateWhileSpeakingOthers(),
            ),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => i9.Ay.getAttenuation(),
    }),
    rR = (0, h.zD)(S.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => V.intl.string(V.t["9dHxRY"]),
        useValue: () => (0, I.bG)([i9.Ay], () => i9.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => lE.default.setAttenuation(i9.Ay.getAttenuation(), e, i9.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rD = (0, h.zD)(S.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => V.intl.string(V.t.SMt0Gr),
        useValue: () => (0, I.bG)([i9.Ay], () => i9.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => lE.default.setAttenuation(i9.Ay.getAttenuation(), i9.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    rL = (0, h.FW)(S.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.oSdBvW),
        useSubtitle: () => V.intl.string(V.t["0A/8Rt"]),
        usePredicate: () => (0, I.bG)([i9.Ay], () => i9.Ay.supports(lw.O5.ATTENUATION)),
        buildLayout: () => [rO, rR, rD],
    }),
    rP = (0, h.zD)(S.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => V.intl.string(V.t.DFPXIG),
        useSubtitle: () => V.intl.string(V.t["UyRX+C"]),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            lE.default.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.showBypassSystemInputProcessing() && i9.Ay.isInputProfileCustom());
        },
    }),
    rG = (0, h.zD)(S.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => V.intl.string(V.t.jrWHD3),
        useSubtitle: () => V.intl.string(V.t.YCCMkJ),
        useValue: function () {
            return (0, I.bG)([eT.Ay], () => !eT.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            ((0, rc.A)("switch_channel_warning_enabled", e, !eT.Ay.disableVoiceChannelChangeAlert),
                nk.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e }));
        },
    }),
    rM = (0, h.zD)(S.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => V.intl.string(V.t.BbESsg),
        useSubtitle: () => V.intl.string(V.t.LoOB1F),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => {
                let { vadUseKrisp: e } = i9.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = i9.Ay.getMode();
            lE.default.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, I.bG)(
                [i9.Ay],
                () => i9.Ay.getMode() !== _.TBI.VOICE_ACTIVITY || !i9.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.isAdvancedVoiceActivitySupported() && i9.Ay.isInputProfileCustom());
        },
    }),
    rU = (0, h.Hn)(S.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => V.intl.string(V.t.wVBHr0),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            rA(V.intl.string(V.t.uY7AcQ), V.intl.string(V.t.gBqik6), () => lE.default.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, I.cf)([i9.Ay], () => ({
                legacyAudioSubsystemSupported: i9.Ay.supports(lw.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: i9.Ay.supports(lw.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: i9.Ay.supports(lw.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return x.useMemo(() => {
                let i;
                return (
                    (i = [{ id: lw.rB.STANDARD, value: lw.rB.STANDARD, label: V.intl.string(V.t.dqb2JZ) }]),
                    e && i.push({ id: lw.rB.LEGACY, value: lw.rB.LEGACY, label: V.intl.string(V.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: lw.rB.EXPERIMENTAL, value: lw.rB.EXPERIMENTAL, label: V.intl.string(V.t.liQmtr) }),
                    n && i.push({ id: lw.rB.AUTOMATIC, value: lw.rB.AUTOMATIC, label: V.intl.string(V.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    rV = (0, h.zD)(S.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => V.intl.string(V.t.uancuJ),
        useSubtitle: () => V.intl.string(V.t.I1Eoqq),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getQoS());
        },
        setValue: function (e) {
            lE.default.setQoS(e);
        },
        usePredicate: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.supports(lw.O5.QOS));
        },
    }),
    rk = (0, h.zD)(S.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => V.intl.string(V.t["4rsOPQ"]),
        useSubtitle: () => V.intl.string(V.t.jtiiCw),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            lE.default.setSilenceWarning(e);
        },
        usePredicate: function () {
            return e8.isPlatformEmbedded;
        },
    }),
    rw = (0, h.bd)(S.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? V.intl.string(V.t.KHsSWK) : V.intl.string(V.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            tI(S.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, I.bG)([i9.Ay], () => i9.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [rj, rM, rP, rv, rk, rG, rL, rU, rV],
    }),
    rF = (0, h.zD)(S.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => V.intl.string(V.t.iWTwu6),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            lE.default.setEchoCancellation(e, { page: _.liQ.USER_SETTINGS, section: _.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, I.bG)([i9.Ay, rb.A], () => {
                let e = i9.Ay.getInputDeviceId();
                return rb.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.isInputProfileCustom());
        },
    });
var rB = n(205693),
    rX = n(451988),
    rz = n(205513),
    rH = n(475883),
    rY = n(303707);
let rW = (0, tK.Ld)();
function rK(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: l, ariaLabelledBy: s, disabled: r } = e;
    return (0, f.jsx)("div", {
        role: "meter",
        className: ic()(rH.$I, n),
        id: i,
        "aria-describedby": l,
        "aria-labelledby": s,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? V.intl.string(V.t.haLKZ0) : V.intl.string(V.t.X2hJL7),
        children: (0, f.jsx)("div", { className: ic()(rH.Jx, rH.NU, { [rH.zY]: t && !r, [rH.r9]: r }) }),
    });
}
function rZ(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: l, disabled: s } = e,
        { threshold: r, autoThreshold: a } = (0, I.cf)([i9.Ay], () => ({
            threshold: i9.Ay.getModeOptions().threshold,
            autoThreshold: i9.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, I.bG)([i9.Ay], () => i9.Ay.getMode());
    return (0, f.jsx)("section", {
        className: ic()(rH.Mo, rH.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": l,
        children: (0, f.jsx)(rz.G, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return ((t = -((100 - e) * 1)), void lE.default.setMode(o, { threshold: t, autoThreshold: a }));
            },
            barStyles: { background: n1.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: n1.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rW,
            disabled: s,
            children: (0, f.jsxs)("div", {
                className: ic()(rH.NU, rH.TL, rH.Jx, rY.bar),
                children: [
                    (0, f.jsx)("div", { className: ic()(rH.GS, rH.SH), style: { width: s ? 0 : t + 100 + "%" } }),
                    (0, f.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let rq = (0, h.E2)(S.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [V.intl.string(V.t["sqUm+k"]), V.intl.string(V.t.I1Zuq0), V.intl.string(V.t.nuFtHH)],
    usePredicate: () => (0, I.bG)([i9.Ay], () => i9.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, I.cf)([i9.Ay], () => ({
                autoThreshold: i9.Ay.getModeOptions().autoThreshold,
                disabled: i9.Ay.getMode() !== lw.TB.VOICE_ACTIVITY,
            })),
            n = x.useCallback((e) => {
                let t = i9.Ay.getMode(),
                    { threshold: n } = i9.Ay.getModeOptions();
                lE.default.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, I.bG)([i9.Ay], () => i9.Ay.supports(lw.O5.AUTOMATIC_VAD)),
            { volume: l, isSpeaking: s } = (function () {
                let [e, t] = x.useState(-100),
                    [n, i] = x.useState(!1);
                function l(e, n) {
                    (t(e), i((n & lw.ME.VOICE) === lw.ME.VOICE));
                }
                return (
                    x.useEffect(() => {
                        let e = new rX.Ep();
                        return (
                            e.start(1e3, () => {
                                (i9.Ay.getMediaEngine().on(rB.bg.VoiceActivity, l), e.stop());
                            }),
                            () => {
                                (i9.Ay.getMediaEngine().removeListener(rB.bg.VoiceActivity, l), e.stop());
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            r = (0, I.bG)([i9.Ay], () => i9.Ay.isEnabled()),
            a = x.useMemo(
                () =>
                    !r &&
                    (0, f.jsx)("div", {
                        className: rH.B4,
                        children: (0, f.jsx)(iK.w, {
                            type: "warning",
                            message: V.intl.format(V.t["O13I+O"], { onEnableClick: () => lE.default.enable(!0) }),
                            role: "status",
                        }),
                    }),
                [r],
            ),
            o = x.useMemo(() => (e ? V.intl.string(V.t.JsbzjA) : V.intl.string(V.t.MLmyMY)), [e]),
            u = x.useId(),
            d = x.useId();
        return i
            ? (0, f.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, f.jsx)(lm.A, { tag: "legend", id: u, children: V.intl.string(V.t.GByLar) }),
                      (0, f.jsx)(lm.A, { id: d, children: o }),
                      (0, f.jsxs)(q.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, f.jsx)(t4.d, {
                                  disabled: t,
                                  label: V.intl.string(V.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, f.jsx)(rK, {
                                        isSpeaking: s,
                                        className: rH.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, f.jsx)(rZ, { volume: l, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, f.jsxs)(q.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, f.jsx)(lu.D, {
                          label: V.intl.string(V.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, f.jsx)(rK, {
                                        isSpeaking: s,
                                        className: rH.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, f.jsx)(rZ, {
                                        volume: l,
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
var rQ = n(366010);
let rJ = n(993830),
    r$ = n(413142),
    r0 = { page: _.liQ.USER_SETTINGS, section: _.JJy.SETTINGS_VOICE_AND_VIDEO };
function r1() {
    let e = (0, I.bG)([nF.A], () => (0, rQ.q)(nF.A.theme));
    return (0, f.jsx)("img", { src: e ? rJ : r$, width: 48, height: 32, alt: "" });
}
let r2 = (0, h.E2)(S.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [V.intl.string(V.t.t8Qhib), V.intl.string(V.t.hmfkCi)],
    usePredicate: function () {
        return (0, I.bG)([i9.Ay], () => i9.Ay.isInputProfileCustom() && i9.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = x.useCallback((e) => {
                (lE.default.setNoiseCancellation("KRISP" === e, r0),
                    lE.default.setNoiseSuppression("STANDARD" === e, r0));
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: l,
            } = (0, I.cf)([i9.Ay], () => ({
                noiseCancellation: i9.Ay.getNoiseCancellation(),
                noiseSuppression: i9.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: i9.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: i9.Ay.isNoiseCancellationSupported(),
            })),
            s = x.useMemo(() => {
                let e = [];
                return (
                    l && e.push({ id: "krisp", label: V.intl.string(V.t.rdoNzt), value: "KRISP" }),
                    i && e.push({ id: "standard", label: V.intl.string(V.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: V.intl.string(V.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [l, i]),
            r = l
                ? V.intl.format(V.t["1q5aTp"], { helpArticle: eC.A.getArticleURL(_.MVz.NOISE_SUPPRESSION) })
                : V.intl.string(V.t.OWKjw5);
        return (0, f.jsxs)(q.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, f.jsx)(lo.l, {
                    label: V.intl.string(V.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: s,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                l && (0, f.jsx)(r1, {}),
            ],
        });
    },
});
var r3 = n(934729),
    r5 = n(621380);
let r4 = !nh.Av;
function r6() {
    return (0, I.bG)([i9.Ay], () => i9.Ay.getMode() === lw.TB.PUSH_TO_TALK);
}
let r8 = (0, h.zD)(S.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nh.Av ? V.intl.string(V.t.tG4Np5) : V.intl.string(V.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, I.bG)([i9.Ay], () => i9.Ay.getMode());
        return x.useMemo(() => {
            if (!nh.Av && e === lw.TB.PUSH_TO_TALK)
                return V.intl.format(V.t["VHI4+Y"], { onDownloadClick: () => (0, r3._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, I.bG)([i9.Ay], () => i9.Ay.getActiveInputProfile() !== r5.m.STUDIO);
    },
    useValue: function () {
        return (0, I.bG)([i9.Ay], () => i9.Ay.getMode() === lw.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        ((t = e ? lw.TB.PUSH_TO_TALK : lw.TB.VOICE_ACTIVITY),
            (i = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === lw.TB.PUSH_TO_TALK &&
                r4 &&
                (0, lp.mM)(async () => {
                    let { Alert: e } = await Promise.all([n.e(844331), n.e(542369)]).then(n.bind(n, 291064));
                    return (t) =>
                        (0, f.jsx)(e, {
                            title: V.intl.string(V.t.Kdt0Gb),
                            confirmText: V.intl.string(V.t["1WjMbC"]),
                            cancelText: V.intl.string(V.t.BddRzS),
                            onConfirm: () => (0, r3._)("PTT Limited Modal"),
                            body: V.intl.string(V.t.NIozvt),
                            ...t,
                        });
                }),
            lE.default.setMode(t, void 0, void 0, { analyticsLocations: i }));
    },
    useSearchTerms: () => [V.intl.string(V.t["pS+K2L"]), V.intl.string(V.t.nuFtHH)],
});
var r7 = n(484599);
function r9(e) {
    let { shortcut: t } = e,
        n = (0, I.bG)([la.Ay], () => la.Ay.isWaylandPortalActive()),
        i = (0, I.bG)([la.Ay], () => {
            let e = la.Ay.getKeybindForAction(_.hCu.PUSH_TO_TALK, !0);
            return null != e ? la.Ay.getWaylandPortalShortcutState(e.id) : null;
        });
    return n && 0 !== t.length
        ? la.Ay.isWaylandPortalEligibleShortcut(t)
            ? null == i || i.bound
                ? null
                : (0, f.jsx)(iK.w, { type: "warning", message: V.intl.string(V.t.PTCrUP), role: "status" })
            : (0, f.jsx)(iK.w, { type: "warning", message: V.intl.string(V.t.J0m3aK), role: "status" })
        : null;
}
let ae = (0, h.E2)(S.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["pS+K2L"]), V.intl.string(V.t.nuFtHH)],
        usePredicate: r6,
        Component: function () {
            let e = (0, I.bG)([i9.Ay], () => {
                    let { shortcut: e } = i9.Ay.getModeOptions();
                    return e;
                }),
                t = V.intl.format(V.t.HVvn5T, {
                    onClick: () => (0, na.openUserSettings)(S.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, f.jsx)(lu.D, {
                label: V.intl.string(V.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, f.jsxs)("div", {
                    className: r7.e,
                    children: [
                        (0, f.jsx)(lh.A, {
                            defaultValue: e,
                            onChange: (e) => {
                                let t = la.Ay.getKeybindForAction(_.hCu.PUSH_TO_TALK, !0);
                                (null != t &&
                                    (0, lr.uL)(t.id, t.shortcut, e, la.Ay.getWaylandPortalShortcutState(t.id)),
                                    lE.default.setMode(_.TBI.PUSH_TO_TALK, { shortcut: e }));
                            },
                        }),
                        (0, f.jsx)(r9, { shortcut: e }),
                    ],
                }),
            });
        },
    }),
    at = (0, h.sN)(S.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => V.intl.string(V.t.GCNMM8),
        useSearchTerms: () => [V.intl.string(V.t["pS+K2L"]), V.intl.string(V.t.nuFtHH)],
        setValue: function (e) {
            lE.default.setMode(_.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: 2e3,
        getInitialValue: function () {
            let { delay: e } = i9.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: r6,
    });
var an = n(833473),
    ai = n(844981),
    al = n(610234);
function as() {
    return (0, ai.Ay)("VoiceSettings");
}
let ar = (0, h.zD)(S.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => V.intl.string(al.default.LGDPhA),
        useSubtitle: function () {
            let e = as();
            if ((0, ai.Xt)(e))
                return e === ai.L3.BLOCKED_MONO_OUTPUT
                    ? V.intl.string(al.default.rOXfEw)
                    : V.intl.string(al.default.O7Aa3Y);
        },
        useValue: function () {
            return (0, I.bG)([an.A], () => an.A.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            lE.default.setSpatialAudio(e, [tk.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return as() !== ai.L3.HIDDEN;
        },
        useDisabled: function () {
            return (0, ai.Xt)(as());
        },
    }),
    aa = (0, h.Qx)(S.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => V.intl.string(V.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, rN._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [V.intl.string(V.t.nuFtHH), V.intl.string(V.t.VZPR0R), V.intl.string(V.t.cjPbpT)],
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getActiveInputProfile() ?? r5.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lE.default.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, rN.d)({ location: "InputProfileCategory" });
            return [
                { value: r5.m.VOICE_ISOLATION, name: V.intl.string(V.t.cjPbpT), desc: V.intl.string(V.t.CzhvnE) },
                { value: r5.m.STUDIO, name: V.intl.string(V.t.VZPR0R), desc: V.intl.string(V.t.ZaJksS) },
                { value: r5.m.CUSTOM, name: V.intl.string(V.t["N/PQjv"]), desc: V.intl.string(V.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    ao = (0, h.zZ)(S.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, I.bG)([rb.A, i9.Ay], () => {
                let e = i9.Ay.getInputDeviceId();
                return (
                    (rb.A.hasEchoCancellation(e) || rb.A.hasNoiseSuppression(e) || rb.A.hasAutomaticGainControl(e)) &&
                    i9.Ay.isInputProfileCustom()
                );
            });
            return x.useMemo(() => {
                if (e)
                    return {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "info",
                        role: "status",
                        text: V.intl.string(V.t["/Whuzi"]),
                    };
            }, [e]);
        },
        buildLayout: () => [aa, rq, r2, rF, ar, r8, ae, at, rw],
    });
var au = n(403581),
    ad = n(983851),
    ac = n(687021),
    ag = n(128450),
    am = n(796774),
    aA = n(209932),
    aE = n(458976),
    ah = n(984813),
    aS = n(265872),
    aT = n(305866),
    ap = n(22231),
    af = n(342073),
    ax = n(722178),
    aI = n(792348),
    a_ = n(233324),
    ab = n(340368),
    aN = n(327289),
    aC = n(533491),
    ay = n(647451);
function av(e) {
    let { onSelect: t } = e,
        [n, i] = x.useState(!1),
        l = (0, I.bG)([sE.default], () => sE.default.getCurrentUser()),
        s = ax.Ay.canUseCustomCallSounds(l),
        r = x.useRef(null);
    function a(e) {
        s && (i(!1), t?.(e));
    }
    return (0, f.jsx)(aS.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, f.jsx)(aT.l, {
                children: (0, f.jsx)(aN.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: s ? null : (0, f.jsx)(a_.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, f.jsx)(aC.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: V.intl.string(V.t.uOe0Az),
                children: (0, f.jsx)(ap.PencilIcon, { size: "md", color: "currentColor", className: ay.Wo }),
            }),
    });
}
function aj(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, aI.A)(t, null),
        i = (0, aE.wH)(),
        l = (0, ab._)("SoundPreviewButton") ? af.WaveformIcon : ad.VoiceNormalIcon,
        s =
            0 === i
                ? V.intl.string(V.t.OASXjt)
                : V.intl.formatToPlainString(V.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, f.jsx)(aC.dT, {
        onClick: n,
        text: s,
        children: (0, f.jsx)(l, { size: "md", color: "currentColor", className: ay.wg }),
    });
}
function aO(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        l = null != t,
        s = t?.emojiId,
        r = t?.emojiName,
        a = l && (null != r || null != s),
        o = (0, ab._)("SoundboardCustomCallSoundSettingsPreview") ? af.WaveformIcon : ad.VoiceNormalIcon;
    return (0, f.jsxs)("div", {
        className: ay.D6,
        children: [
            (0, f.jsxs)("div", {
                className: ay.kL,
                children: [
                    a && (0, f.jsx)(tG.A, { emojiId: s, emojiName: r, className: ay.Zg }),
                    (0, f.jsx)(n5.E, {
                        variant: "body-md/normal",
                        color: "text-strong",
                        className: ay.dj,
                        children:
                            null == t
                                ? V.intl.string(V.t.PoWNfe)
                                : n
                                  ? V.intl.format(V.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: function (e) {
                                            return (0, f.jsx)(n5.E, {
                                                variant: "body-xs/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: e,
                                            });
                                        },
                                    })
                                  : t.name,
                    }),
                    l
                        ? (0, f.jsx)(aj, { sound: t })
                        : (0, f.jsx)(o, { size: "md", color: "currentColor", className: ay.Gk }),
                ],
            }),
            (0, f.jsxs)("div", {
                className: ay.kL,
                children: [
                    (0, f.jsx)(av, { onSelect: i }),
                    l &&
                        !n &&
                        (0, f.jsx)(aC.dT, {
                            onClick: () => i(null),
                            text: V.intl.string(V.t.jmtcGA),
                            children: (0, f.jsx)(lc.TrashIcon, {
                                size: "md",
                                color: n1.A.unsafe_rawColors.RED_400.css,
                                className: ay.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var aR = n(617617);
n(980504);
var aD = n(806050);
function aL(e) {
    return (0, I.bG)([aA.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return aA.A.getSound("0" === t ? "0" : t, n);
    });
}
function aP(e) {
    let { guildId: t } = e,
        n = (0, I.bG)([aR.A], () => aR.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = aL(n);
    if (null == n || null == i) return null;
    let { emojiId: l, emojiName: s } = i,
        r = null != l || null != s;
    return (0, f.jsxs)("div", {
        className: aD.Io,
        children: [
            r
                ? (0, f.jsx)(tG.A, { emojiId: l, emojiName: s, className: aD.nW })
                : (0, f.jsx)(ad.VoiceNormalIcon, { size: "md", color: "currentColor", className: aD.nW }),
            (0, f.jsx)(n5.E, { className: aD.dK, variant: "body-xs/medium", children: i.name }),
        ],
    });
}
let aG = (0, h.E2)(S.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [V.intl.string(V.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, ez.Ay)(),
            [t, n] = x.useState("0"),
            i = (0, ah.mz)(t),
            l = aL(i),
            s = i?.type === ah.PP.GLOBAL,
            r = (0, I.bG)([aA.A], () => aA.A.hasFetchedAllSounds()) && null != i && null == l;
        (x.useEffect(() => {
            r && (0, aE.ND)({ location: e });
        }, [r, e]),
            x.useEffect(() => {
                (0, am.E7)();
            }, []));
        let a = x.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, f.jsx)(aP, { guildId: e.value }) : null;
        }, []);
        return (0, f.jsxs)(n3.n, {
            label: V.intl.string(V.t.nzUc3B),
            description: V.intl.format(V.t.u9RWmv, { helpdeskArticle: eC.A.getArticleURL(_.MVz.SOUNDBOARD) }),
            children: [
                (0, f.jsx)(ac.A, {
                    guildId: t,
                    className: aD.Dt,
                    globalOption: { label: V.intl.string(V.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, f.jsxs)(ag.A, {
                    title: V.intl.format(V.t.I2TsYN, {
                        nitroWheelHook: () =>
                            (0, f.jsx)(au.NitroWheelIcon, { size: "md", color: "currentColor", className: aD.ax }),
                    }),
                    children: [
                        (0, f.jsx)(aO, {
                            sound: l,
                            isGlobal: s,
                            onSelect: (n) => {
                                null == n ? (0, aE.Dv)(t, e) : (0, aE.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, f.jsx)("div", {
                                className: aD.lm,
                                children: (0, f.jsx)(iK.w, {
                                    type: "warning",
                                    message: V.intl.string(V.t.WkPsFR),
                                    role: "status",
                                }),
                            }),
                    ],
                }),
            ],
        });
    },
});
var aM = n(824744);
let aU = (0, h.sN)(S.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => V.intl.string(V.t.kbFsAD),
    useSubtitle: () => V.intl.format(V.t.BPbGq7, { helpCenterArticle: eC.A.getArticleURL(_.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, aM.w)(e);
        (0, am.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, aE.wH)();
        return (0, aM.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var aV = n(864145);
let ak = (0, h.sN)(S.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t["2JbvKw"]),
        useSubtitle: () => V.intl.string(V.t.INenzY),
        setValue: function (e) {
            let t = (0, aM.w)(e);
            U.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = U.HO.getSetting();
            return (0, aM.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, aV.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    aw = (0, h.zZ)(S.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => V.intl.string(V.t.ABjMWI),
        buildLayout: () => [aU, ak, aG],
    });
var aF = n(803224),
    aB = n(552122);
let aX = (0, h.E2)(S.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [V.intl.string(V.t.fgSHf8)],
        usePredicate: () => null != aB.A.useHolidaySoundpack(),
        Component: () =>
            (0, f.jsx)(n5.E, {
                variant: "body-md/normal",
                color: "text-subtle",
                children: V.intl.format(V.t.Eup6Wv, {
                    onClick: () => (0, na.openUserSettings)(S.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    az = (0, h.AK)(S.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.eyGEE4),
        useSearchTerms: () => [V.intl.string(V.t.eyGEE4)],
        destinationKey: S.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    aH = (0, h.gN)(S.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [az] });
var aY = n(264686);
let aW = (0, eb.D)(() => ({ currentPlayingSound: null }));
function aK() {
    let e = aW.getField("currentPlayingSound");
    (e?.stop(), aW.setState({ currentPlayingSound: null }));
}
function aZ(e) {
    let t = aW.getField("currentPlayingSound");
    t?.stop();
    let n = (0, ie.Ak)(e);
    aW.setState({ currentPlayingSound: n });
}
function aq(e) {
    return (0, h.zD)(`${S.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => V.intl.format(V.t.OOiGCM, { onClick: () => aZ(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, I.bG)([aF.A], () => aF.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = aF.A.getDisabledSounds().filter((t) => t !== e.sound);
            (t || n.push(e.sound), aY.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, I.bG)([aF.A], () => aF.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let aQ = [
        { useTitle: () => V.intl.string(V.t.hK51Yg), sound: "deafen" },
        { useTitle: () => V.intl.string(V.t.XiejaJ), sound: "undeafen" },
        { useTitle: () => V.intl.string(V.t.w4m945), sound: "mute" },
        { useTitle: () => V.intl.string(V.t.YqAjXy), sound: "unmute" },
        { useTitle: () => V.intl.string(V.t.JoTq8n), sound: "camera_on" },
        { useTitle: () => V.intl.string(V.t["8P6tQ6"]), sound: "camera_off" },
        { useTitle: () => V.intl.string(V.t["juL9/L"]), sound: "disconnect" },
        {
            useTitle: () => V.intl.string(V.t.x98vQq),
            useSearchTerms: () => [V.intl.string(V.t.Q8gkVL)],
            sound: "ptt_start",
        },
        {
            useTitle: () => V.intl.string(V.t["1HjRqC"]),
            useSearchTerms: () => [V.intl.string(V.t.Q8gkVL)],
            sound: "ptt_stop",
        },
        { useTitle: () => V.intl.string(V.t["9JB1Ck"]), sound: "user_join" },
        { useTitle: () => V.intl.string(V.t.KUBBNt), sound: "user_leave" },
        { useTitle: () => V.intl.string(V.t.EZjqUT), sound: "user_moved" },
        { useTitle: () => V.intl.string(V.t.LnNlQh), sound: "call_calling" },
        { useTitle: () => V.intl.string(V.t.Nd8P5y), sound: "stream_started" },
        { useTitle: () => V.intl.string(V.t["9bYj+G"]), sound: "stream_ended" },
        { useTitle: () => V.intl.string(V.t.KccUI1), sound: "stream_user_joined" },
        { useTitle: () => V.intl.string(V.t.dsjkiN), sound: "stream_user_left" },
        { useTitle: () => V.intl.string(V.t.nFOcf9), sound: "activity_launch" },
        { useTitle: () => V.intl.string(V.t["a6lw/u"]), sound: "activity_end" },
        { useTitle: () => V.intl.string(V.t.KaFxrY), sound: "activity_user_join" },
        { useTitle: () => V.intl.string(V.t.S14z9n), sound: "activity_user_left" },
        { useTitle: () => V.intl.string(V.t.CP3DC3), sound: "reconnect" },
    ],
    aJ = (0, h.D1)(S.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? V.intl.formatToPlainString(V.t["0JYT98"], { count: t })
                : V.intl.formatToPlainString(V.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => tI(S.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                aK();
            };
        },
        buildLayout: () => aQ.map((e) => aq(e)),
    }),
    a$ = (0, h.zZ)(S.X.SOUNDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, I.bG)([aF.A], () => aF.A.getDisableAllSounds());
            return x.useMemo(() => {
                if (e)
                    return {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        role: "none",
                        text: V.intl.format(V.t.fRvixS, {
                            onClick: () => (0, na.openUserSettings)(S.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                    };
            }, [e]);
        },
        buildLayout: () => [aJ, aX, aH],
    }),
    a0 = (0, h.zD)(S.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => V.intl.string(V.t.e3Zz3F),
        useSubtitle: () => V.intl.string(V.t.RztTjP),
        useValue: function () {
            return !U.uh.useSetting();
        },
        setValue: function (e) {
            ((0, rc.A)("stream_previews_disabled", !e, U.uh.getSetting(), [tk.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                U.uh.updateSetting(!e));
        },
    }),
    a1 = (0, h.zD)(S.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => V.intl.string(V.t.GmWk2E),
        useSearchTerms: () => [V.intl.string(V.t["Fj/xn1"])],
        useSubtitle: () => V.intl.string(V.t["Fj/xn1"]),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getVideoHook());
        },
        setValue: lE.default.setVideoHook,
        usePredicate: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.supportsVideoHook());
        },
    }),
    a2 = (0, h.zD)(S.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => V.intl.string(V.t["4I0qzZ"]),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getExperimentalSoundshare());
        },
        setValue: lE.default.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, I.bG)([i9.Ay], () => {
                let e = i9.Ay.supportsExperimentalSoundshare(),
                    t = i9.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    a3 = (0, h.zD)(S.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => V.intl.string(V.t["/jwMtn"]),
        useSubtitle: () => V.intl.string(V.t.zlA23F),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lE.default.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return i9.Ay.supports(lw.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    a5 = (0, h.sN)(S.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => V.intl.string(V.t.fhEzfj),
        setValue: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lE.default.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: i9.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, I.bG)([i9.Ay], () => i9.Ay.getSidechainCompression());
            return i9.Ay.supports(lw.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    a4 = (0, h.zD)(S.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => V.intl.string(V.t.lt8rRx),
        useSubtitle: () => V.intl.string(V.t.ie1mgY),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, nh.cX)() && e
                ? (0, n2.A)({
                      title: V.intl.string(V.t["9jf31O"]),
                      subtitle: V.intl.string(V.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          (lE.default.setUseSystemScreensharePicker(e), np.A.app.relaunch());
                      },
                      confirmText: V.intl.string(V.t.BddRzS),
                  })
                : lE.default.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.supportsSystemScreensharePicker() && (0, nh.cX)());
        },
    }),
    a6 = (0, h.bd)(S.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? V.intl.string(V.t.qrMyvm) : V.intl.string(V.t.LEtTNl)),
        useCollapsedSubtitle: () => tI(S.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [a3, a5, a4, a2, a1],
    }),
    a8 = (0, h.zZ)(S.X.STREAMING_CATEGORY, { useTitle: () => V.intl.string(V.t.KDdjou), buildLayout: () => [a0, a6] });
var a7 = n(106713);
let a9 = (0, h.E2)(S.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = a7.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, f.jsx)(sz.U, {
                label: V.intl.string(V.t.UTM8VP),
                deviceType: lw.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    oe = (0, h.E2)(S.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = a7.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, f.jsx)(sz.U, {
                label: V.intl.string(V.t.xuYQ0n),
                deviceType: lw.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    ot = (0, h.zC)(S.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [a9, oe] }),
    on = (0, h.sN)(S.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = i9.Ay.getInputVolume();
            return (0, aM.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aM.w)(e);
            lE.default.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    oi = (0, h.sN)(S.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = i9.Ay.getOutputVolume();
            return (0, aM.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aM.w)(e);
            lE.default.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    ol = (0, h.zC)(S.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [on, oi] });
var os = n(164636),
    or = n(782600),
    oa = n(804037);
let oo = `${eC.A.getArticleURL(_.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    ou = (0, h.E2)(S.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.nuFtHH)],
        usePredicate: function () {
            return (0, os.bG)([i9.Ay], () => i9.Ay.supports(lw.O5.LOOPBACK));
        },
        Component: function () {
            return (0, os.bG)([i9.Ay], () => i9.Ay.supports(lw.O5.LOOPBACK))
                ? (0, f.jsx)(or.A, {
                      size: "md",
                      notchBackground: or.V.GRAY,
                      captionVoice: V.intl.string(V.t.bp3JOV),
                      captionNoVoice: (0, f.jsxs)(f.Fragment, {
                          children: [
                              (0, f.jsx)(n5.E, {
                                  variant: "body-xs/semibold",
                                  color: "text-default",
                                  children: V.intl.string(V.t.bgn75v),
                              }),
                              V.intl.string(V.t["MA+OZh"]),
                              (0, f.jsx)(nr.Anchor, {
                                  className: oa.X,
                                  href: eC.A.getArticleURL(_.MVz.NO_INPUT_DETECTED),
                                  children: V.intl.string(V.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: V.intl.format(V.t["V+B3FH"], { guideURL: oo }),
                      buttonTest: V.intl.string(V.t.gyljWE),
                      buttonStop: V.intl.string(V.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: _.liQ.USER_SETTINGS, section: _.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    od = e8.uF() ? ["BTHENUM", "BTHHFENUM"] : [];
function oc(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, f.jsxs)(q.B, {
        children: [
            n && (0, f.jsx)(ll, { sourcePage: "voice" }),
            t && (0, f.jsx)(l9.A, { look: l9.k.WARNING, children: V.intl.string(V.t.Ioz3gx) }),
        ],
    });
}
let og = (0, h.zZ)(S.X.VOICE_CATEGORY, {
        useTitle: () => V.intl.string(V.t.K3lovD),
        useSearchTerms: () => [
            V.intl.string(V.t.hHMYbb),
            V.intl.string(V.t.nuFtHH),
            V.intl.string(V.t.dl18zb),
            V.intl.string(V.t["3182VD"]),
            V.intl.string(V.t["DGq/PR"]),
            V.intl.string(V.t.eATD2B),
            V.intl.string(V.t.Rtsr6w),
            V.intl.string(V.t.aUJ062),
        ],
        useInlineNotice: function () {
            let e = li("voice"),
                t = (0, sH.x5)(lw.oh.AUDIO_INPUT),
                n = (0, sH.x5)(lw.oh.AUDIO_OUTPUT),
                i = x.useMemo(() => {
                    let e = od.some((e) => t?.hardwareId?.startsWith(e)),
                        i = od.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return x.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: p.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, f.jsx)(oc, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [ot, ol, ou],
    }),
    om = (0, h.t_)(S.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => V.intl.string(V.t.B1fFpf),
        buildLayout: () => [og, ao, sJ, a8, a$, aw, r_, rh],
    }),
    oA = (0, h.i4)(S.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.B1fFpf),
        usePredicate: () => i9.Ay.isSupported(),
        icon: sP.MicrophoneIcon,
        useMenu: sG.A,
        buildLayout: () => [om],
    }),
    oE = (0, h.WI)(S.X.APP_SECTION, {
        useTitle: () => V.intl.string(V.t.gcyH1J),
        buildLayout: () => [oA, nZ, tt, iH, sL, n$],
    });
var oh = n(360669),
    oS = n(369143),
    oT = n(975807),
    op = n(566345),
    of = n(139286),
    ox = n(534247);
function oI(e) {
    let {
            surface: t,
            title: n,
            children: i,
            actions: l,
            graphicSrc: s,
            graphicLottie: r,
            footnote: a,
            size: o = "default",
        } = e,
        { analyticsLocations: u } = (0, ez.Ay)();
    (0, of.A)(
        {
            name: sd.ImpressionNames.GIFT_CARDS_MARKETING_BANNER,
            type: sd.ImpressionTypes.VIEW,
            properties: { surface: t, location_stack: u },
        },
        { trackOnInitialLoad: !0 },
    );
    let d = "compact" === o;
    return (0, f.jsxs)("div", {
        className: ic()(ox.kL, { [ox.oE]: d }),
        children: [
            (0, f.jsxs)(q.B, {
                direction: "vertical",
                align: "start",
                justify: "center",
                gap: d ? 24 : 16,
                fullWidth: !1,
                className: ox.Qs,
                children: [
                    (0, f.jsxs)(q.B, {
                        direction: "vertical",
                        align: "start",
                        gap: d ? 12 : 8,
                        children: [
                            (0, f.jsx)(N.D, {
                                variant: d ? "heading-lg/semibold" : "heading-xl/semibold",
                                color: "text-strong",
                                children: n,
                            }),
                            i,
                        ],
                    }),
                    (l.length > 0 || null != a) &&
                        (0, f.jsxs)(q.B, {
                            direction: "vertical",
                            align: "start",
                            gap: 12,
                            children: [
                                l.length > 0 &&
                                    (0, f.jsx)(q.B, {
                                        direction: "horizontal",
                                        gap: d ? 12 : 16,
                                        wrap: !0,
                                        fullWidth: !1,
                                        children: l.map((e) =>
                                            (0, f.jsx)(
                                                j.$,
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
                                null != a &&
                                    (0, f.jsx)(n5.E, { variant: "footnote/normal", color: "text-subtle", children: a }),
                            ],
                        }),
                ],
            }),
            null != r
                ? (0, f.jsx)("div", {
                      className: ox.yO,
                      children: (0, f.jsx)(op.v, { type: "lottie", lottie: r, aspectRatio: "6/4" }),
                  })
                : (0, f.jsx)("img", { src: s, className: ox.fA, alt: "" }),
        ],
    });
}
function o_(e) {
    let { analyticsLocations: t } = (0, ez.Ay)();
    return x.useCallback(
        (n, i) => {
            td.default.track(_.HAw.GIFT_CARDS_MARKETING_BANNER_CTA_CLICKED, {
                surface: e,
                cta: n,
                partner: i?.partner,
                url: i?.url,
                location_stack: t,
            });
        },
        [e, t],
    );
}
var ob = n(425565),
    oN = n(321671),
    oC = n(936564),
    oy = n(798091),
    ov = n(956956),
    oj = n(289873),
    oO = n(115560),
    oR = n(465323),
    oD = n(37766),
    oL = n(194261),
    oP = n(391048),
    oG = n(781300),
    oM = n(99696),
    oU = n(202613),
    oV = n(615405),
    ok = n(83617),
    ow = n(811091),
    oF = n(607399),
    oB = n(993077),
    oX = n(150934),
    oz = n(256006),
    oH = n(718718),
    oY = n(558740);
let oW = /[^0-9/]/g,
    oK = /[^0-9]/g;
class oZ extends x.PureComponent {
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
            l,
            s,
            { value: r, onChange: a } = this.props,
            o = this._inputRef;
        if (e === r || null == o || null == r) return;
        let u =
                ((i = (n = e.replace(oW, "").split("/"))[0]),
                (l = n[1]),
                (s = []),
                parseInt(i, 10) > 12 && (i = i.substring(0, 1)),
                s.push(i),
                (parseInt(i, 10) > 1 || 2 === i.length || (null != l && "" !== l)) && s.push("/"),
                null != l && "" !== l && parseInt(l, 10) > 99 && (l = (l + "").substring(0, 2)),
                s.push(l),
                s.join("")),
            d = o.selectionStart;
        (u === r && u.length <= 3 && r.includes("/") && !e.includes("/")
            ? (u = u.replace(oK, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t));
    };
    render() {
        return (0, f.jsx)(lf.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var oq = n(832208),
    oQ = n(782328);
let oJ = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, tK.Ld)(),
                        title: () => V.intl.string(V.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => V.intl.string(V.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => oQ.ep,
                        renderInput: (e) => (0, f.jsx)(oZ, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    o$ = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: l } = e,
            [s, r] = x.useState(!1),
            [a, o] = x.useState(null),
            [u, d] = x.useState(i);
        return (
            x.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, f.jsx)(oq.A, {
                className: n,
                form: oJ,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: l,
                onFieldChange: function (e) {
                    (s || "" === e || r(!0),
                        (s && "" === e) || !(0, oY.So)(e) ? o(V.intl.string(V.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var o0 = n(219887),
    o1 = n(292856);
let o2 = "isDefault";
class o3 extends x.PureComponent {
    static defaultProps = { onDelete: () => {}, onSubmit: () => {}, onCancel: () => {} };
    constructor(e) {
        super(e);
        let { paymentSource: t, isDefault: n } = e,
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
            expiresMonth: t instanceof oU.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof oU.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        ((0, oG.ey)(), (0, oG.tc)());
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(io.Vq).length))
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
        let [i, l] = n.split("/");
        (this.handleFieldChange(Number(i), "expiresMonth"),
            this.handleFieldChange(Number(`${new Date().getFullYear().toString().slice(0, 2)}${l}`), "expiresYear"));
    };
    handleFieldChange = (e, t) => {
        null != t && this.setState({ [t]: e, dirtyFields: { ...this.state.dirtyFields, [t]: !0 } });
    };
    renderError() {
        let { updateError: e, removeError: t } = this.props;
        return null == e || e.hasCardError() || e.hasAddressError()
            ? null != t
                ? (0, f.jsx)("div", {
                      className: o1.zc,
                      children: (0, f.jsx)(iK.w, { type: "critical", message: t.message, role: "alert" }),
                  })
                : null
            : (0, f.jsx)("div", {
                  className: o1.zc,
                  children: (0, f.jsx)(iK.w, { type: "critical", message: e.message, role: "alert" }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, oz.g)(n);
        return (0, f.jsxs)("div", {
            className: o1.yV,
            children: [
                (0, f.jsx)(n5.E, {
                    className: o1.bV,
                    variant: "body-sm/normal",
                    children: V.intl.string(V.t["50Auo2"]),
                }),
                (0, f.jsx)(oH.Ay, {
                    ...e,
                    mode: oH.Ay.Modes.EDIT,
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
        return (0, f.jsxs)("div", {
            className: o1.yV,
            children: [
                (0, f.jsx)(n5.E, { className: o1.bV, variant: "body-sm/normal", children: V.intl.string(V.t.Fo2YP7) }),
                (0, f.jsx)(o$, {
                    expirationDate: n,
                    onCardInfoChange: this.handleExpirationDateUpdate,
                    error: this.props.updateError,
                }),
            ],
        });
    }
    renderActions() {
        let { submitting: e, removing: t, isForSubscription: n } = this.props,
            { billingAddressValid: i, expirationValid: l } = this.state;
        return (0, f.jsx)("div", {
            className: o1.AU,
            children: (0, f.jsxs)(q.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, f.jsx)(s5.e, {
                        children: (0, f.jsxs)("div", {
                            className: o1.lH,
                            children: [
                                n
                                    ? (0, f.jsx)(lg.m, {
                                          text: V.intl.string(V.t["v6/z28"]),
                                          children: (0, f.jsx)("div", { "aria-hidden": !0, className: o1.dm }),
                                      })
                                    : null,
                                (0, f.jsx)(j.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: oF.Fr ? "sm" : "md",
                                    text: oF.Fr ? V.intl.string(V.t.oyYWHE) : V.intl.string(V.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, f.jsxs)(s5.e, {
                        children: [
                            (0, f.jsx)(j.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: oF.Fr ? "sm" : "md",
                                text: V.intl.string(V.t["ETE/oC"]),
                            }),
                            (0, f.jsx)(j.$, {
                                loading: e,
                                disabled: !i || t || !l,
                                type: "submit",
                                variant: "active",
                                size: oF.Fr ? "sm" : "md",
                                text: V.intl.string(V.t["R3BPH+"]),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    render() {
        let { paymentSource: e, isDefault: t, locale: n, className: i, isForSubscription: l } = this.props,
            { isDefault: s } = this.state,
            r = e instanceof oU.SJ;
        return (0, f.jsx)(oB.Z, {
            editable: !0,
            className: ic()(o1.Nr, i),
            children: (0, f.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, f.jsxs)("div", {
                        className: o1.__invalid_paymentSection,
                        children: [
                            (0, f.jsx)(o0.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: l,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, f.jsx)("div", { className: o1.Um, children: V.intl.string(V.t["3R0U0b"]) })
                                : null,
                            (0, f.jsx)("div", {
                                className: o1.Sv,
                                children: r
                                    ? V.intl.format(V.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : V.intl.string(V.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, f.jsx)("div", {
                        className: o1.D5,
                        children: (0, f.jsx)(oX.S, {
                            value: o2,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, o2),
                            label: V.intl.string(V.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, f.jsx)(ls.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let o5 = I.Ay.connectStores([oV.A], () => ({ updateError: oV.A.editSourceError, removeError: oV.A.removeSourceError }))(
    o3,
);
var o4 = n(140624),
    o6 = n(849405),
    o8 = n(329693);
function o7() {
    (0, oM.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, oO.A)() });
}
class o9 extends x.PureComponent {
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
            isForSubscription: l,
            locale: s,
            removing: r,
            submitting: a,
            onSubmit: o,
            onCancel: u,
            onDelete: d,
        } = this.props;
        return n
            ? (0, f.jsx)(o5, {
                  paymentSource: e,
                  isDefault: t,
                  removing: r,
                  submitting: a,
                  locale: s,
                  isForSubscription: l,
                  onSubmit: o,
                  onCancel: u,
                  onDelete: d,
              })
            : (0, f.jsxs)(f.Fragment, {
                  children: [
                      i ? null : (0, f.jsx)(ls.c, { className: o8.__invalid_sourceDivider }),
                      (0, f.jsxs)("div", {
                          className: o8.Yb,
                          children: [
                              (0, f.jsx)(o0.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: l,
                                  locale: s,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, f.jsx)(j.$, {
                                  variant: "secondary",
                                  onClick: this.handleEditClick,
                                  size: "sm",
                                  text: V.intl.string(V.t.bt75uw),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let ue = x.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: l, onRedeemClick: s } = e,
        [r, a] = x.useState(null),
        o = (0, I.bG)([sE.default], () => sE.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, I.bG)([oV.A], () => oV.A.ipCountryCode),
        d = x.useMemo(() => (0, oR.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        x.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : oG.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, f.jsxs)(f.Fragment, {
            children: [
                n ? null : (0, f.jsx)(ls.c, { className: o8.__invalid_sourceDivider }),
                (0, f.jsxs)("div", {
                    className: o8.Yb,
                    children: [
                        void 0 !== t
                            ? (0, f.jsx)(o0.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: l,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, f.jsxs)(lb.A, {
                                  align: lb.A.Align.CENTER,
                                  children: [
                                      (0, f.jsx)(oD.PaymentTypeGiftCardIcon, { size: "lg" }),
                                      (0, f.jsx)(n5.E, {
                                          variant: "body-sm/medium",
                                          className: o6.Wi,
                                          children: V.intl.string(o4.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, f.jsxs)("div", {
                            className: o8.zy,
                            children: [
                                (0, f.jsx)("div", {
                                    className: o8.Tq,
                                    children:
                                        null == r
                                            ? (0, f.jsx)(oj.y, { type: oj.y.Type.SPINNING_CIRCLE })
                                            : (0, f.jsx)(n5.E, {
                                                  variant: "body-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = (0, oR.$g)(e ?? 0, n, l, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${String(n).toUpperCase()} ${i}`;
                                                  })(),
                                              }),
                                }),
                                (0, f.jsx)(j.$, {
                                    variant: "secondary",
                                    onClick: s,
                                    size: "sm",
                                    text: V.intl.string(o4.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class ut extends x.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            (await oG.Gr(e), this.setState({ editingPayment: e }));
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            (await oG.JQ(e), this.setState({ editingPayment: null }));
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                (await oG.Ps(e, t), this.setState({ editingPayment: null }));
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, ok.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, lp.mM)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, f.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, oP.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, f.jsxs)("div", {
            className: o8.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, f.jsxs)("div", {
                          className: o8.z8,
                          children: [
                              (0, f.jsx)(n5.E, { variant: "body-sm/normal", children: V.intl.string(V.t.aRHpAB) }),
                              (0, f.jsx)(n5.E, {
                                  variant: "body-sm/normal",
                                  color: "text-subtle",
                                  className: o8.Sv,
                                  children: V.intl.string(V.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, f.jsx)(j.$, { onClick: this.handleAddPaymentMethod, text: V.intl.string(V.t.CpOiEO) }),
            ],
        });
    }
    render() {
        let e,
            {
                showHeader: t,
                defaultPaymentSourceId: n,
                paymentSources: i,
                locale: l,
                removing: s,
                submitting: r,
                premiumSubscriptionPaymentSourceId: a,
                showGiftCards: o,
            } = this.props,
            u = K()
                .values(i)
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : ow.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof oU.LQ)),
            c = u.filter((e) => e instanceof oU.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, f.jsx)(
                    o9,
                    {
                        locale: l,
                        paymentSource: e,
                        isDefault: n === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === a,
                        hideDivider: 0 === t || m === t - 1,
                        onSubmit: this.handleSubmit,
                        submitting: r,
                        removing: s,
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
                          (0, f.jsx)(
                              ue,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: l,
                                  onRedeemClick: o7,
                              },
                              e.id,
                          ),
                      )
                    : (0, f.jsx)(ue, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: o7,
                      })),
            (0, f.jsxs)(f.Fragment, {
                children: [
                    t
                        ? (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsxs)(N.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, f.jsx)(oL.LockIcon, { size: "sm", className: o8.hz }),
                                          " ",
                                          V.intl.string(V.t.W26xGQ),
                                      ],
                                  }),
                                  (0, f.jsx)(n5.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      children: V.intl.string(V.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    A,
                    o && e,
                    m !== d.length - 1 || (o && c.length > 0) ? (0, f.jsx)(ls.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var un = n(459357),
    ui = n(295405),
    ul = n(166403),
    us = n(773669),
    ur = n(943009);
function ua() {
    let e = (0, I.bG)([sE.default], () => sE.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, ov.Gw)(e.country) };
}
let uo = (0, h.E2)(S.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, I.bG)([oV.A], () => oV.A.isSyncing),
                i = (0, I.bG)([ui.A], () => ui.A.paymentSources),
                l = (0, I.bG)([ui.A], () => ui.A.defaultPaymentSourceId),
                s = (0, I.bG)([us.default], () => us.default.locale),
                r = (0, I.bG)([ul.A], () => ul.A.getPremiumTypeSubscription()),
                a = (0, I.bG)([oV.A], () => oV.A.isRemovingPaymentSource),
                o = (0, I.bG)([oV.A], () => oV.A.isUpdatingPaymentSource),
                { enabled: u } = (0, un.c)({ location: "UserSettingsBilling" });
            return (x.useEffect(() => {
                (oG.$o(), oG.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, f.jsx)("div", { className: ur.o, children: (0, f.jsx)(oj.y, {}) })
                : (0, f.jsx)(ut, {
                      showHeader: t,
                      paymentSources: i,
                      defaultPaymentSourceId: l,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== _.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: s,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t.W26xGQ), V.intl.string(V.t["3pIjBH"])],
    }),
    uu = (0, h.E2)(S.X.BILLING_GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = o_("billing_banner"),
                t = x.useMemo(
                    () => [
                        {
                            text: V.intl.string(oN.default["6bWeWP"]),
                            onClick: () => {
                                (e("learn_more", { url: ob.C }), (0, oT.A)(ob.C));
                            },
                        },
                        {
                            text: V.intl.string(oN.default.xYa9Y8),
                            onClick: () => {
                                let t = eC.A.getArticleURL(_.MVz.BUY_GIFT_CARDS);
                                (e("where_to_buy", { url: t }), (0, oT.A)(t));
                            },
                        },
                    ],
                    [e],
                );
            return (0, f.jsx)("div", {
                className: oC.k,
                children: (0, f.jsx)(oI, {
                    surface: "billing_banner",
                    title: V.intl.string(oN.default.w8gzZb),
                    graphicSrc:
                        "https://cdn.discordapp.com/assets/content/ee0bcc3ecc6d909365f70b4692752f0ac9c8a2e49c47afac16e7dbd31efe360f.png",
                    actions: t,
                    children: (0, f.jsx)(n5.E, {
                        variant: "body-md/medium",
                        color: "text-subtle",
                        children: V.intl.string(oN.default.qtKobx),
                    }),
                }),
            });
        },
        useSearchTerms: () => [],
        usePredicate: () =>
            (0, oy.y)({ location: "BillingMarketingBanner", countGiftCardWallet: !0, canFetchPaymentSources: !1 }),
    }),
    ud = (0, h.zZ)(S.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.W26xGQ),
        useSubtitle: () => {
            let e = ua();
            return null != e ? V.intl.format(V.t.e2t1G5, { country: e.countryName }) : V.intl.string(V.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == ua()
                ? null
                : {
                      type: p.p3.INFO_POPOVER,
                      ariaLabel: V.intl.string(V.t.PuB1W7),
                      popoverProps: {
                          title: "",
                          body: V.intl.string(V.t["21skUa"]),
                          size: "sm",
                          position: "top",
                          getActions: (e) => [
                              {
                                  text: V.intl.string(V.t.PuB1W7),
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
        buildLayout: () => [uo, uu],
    });
var uc = n(837381),
    ug = n(516521),
    um = n(928039),
    uA = n(921853),
    uE = n(22306);
function uh(e) {
    let { currentPageIndex: t, numPages: n, onChangePage: i, children: l, showPageCount: s = !0, ref: r, ...a } = e,
        o = t >= n - 1,
        u = s
            ? V.intl.format(V.t.MtpIwg, { currentPage: t + 1, numPages: n })
            : V.intl.format(V.t.bKI77c, { currentPage: t + 1 });
    return (0, f.jsxs)("div", {
        ref: r,
        ...a,
        children: [
            l,
            (0, f.jsx)("div", {
                className: uE.v,
                children: (0, f.jsxs)("div", {
                    className: uE.U,
                    children: [
                        (0, f.jsx)(ld.K, {
                            variant: "icon-only",
                            icon: uA.ChevronSmallLeftIcon,
                            disabled: t <= 0,
                            onClick: () => i(t - 1),
                            "aria-label": V.intl.string(V.t.vgfxaA),
                        }),
                        (0, f.jsx)(n5.E, { variant: "body-sm/medium", children: u }),
                        (0, f.jsx)(ld.K, {
                            variant: "icon-only",
                            icon: n8.ChevronSmallRightIcon,
                            disabled: o,
                            onClick: () => i(t + 1),
                            "aria-label": V.intl.string(V.t.XiOHRX),
                        }),
                    ],
                }),
            }),
        ],
    });
}
var uS = n(431955);
n(938796);
var uT = n(334279),
    up = n(122817),
    uf = n(665260),
    ux = n(315069),
    uI = n(557009),
    u_ = n(570221),
    ub = n(191115);
class uN extends ux.A {
    id;
    createdAt;
    currency;
    tax;
    taxInclusive;
    amount;
    amountRefunded;
    status;
    description;
    hasInvoiceURL;
    hasRefundInvoiceURLs;
    downloadableInvoice;
    downloadableRefundInvoices;
    flags;
    paymentSource;
    paymentGateway;
    subscription;
    skuId;
    skuPrice;
    sku;
    premiumRefundDisqualificationReasons;
    entitlements;
    invoice;
    static createFromServer(e) {
        let t = null != e.payment_source ? oU.Ay.createFromServer(e.payment_source) : null,
            n = null != e.sku ? uS.A.createFromServer(e.sku) : null,
            i = null != e.subscription ? ub.A.createFromServer(e.subscription) : null;
        return new uN({
            id: e.id,
            createdAt: new Date(e.created_at),
            currency: e.currency,
            tax: e.tax,
            taxInclusive: e.tax_inclusive,
            amount: e.amount,
            amountRefunded: e.amount_refunded,
            status: e.status,
            metadata: e.metadata,
            description: e.description,
            paymentSource: t,
            paymentGateway: e.payment_gateway,
            flags: e.flags,
            subscription: i,
            skuId: e.sku_id,
            skuPrice: e.sku_price,
            sku: n,
            downloadableInvoice: e.downloadable_invoice,
            downloadableRefundInvoices: e.downloadable_refund_invoices,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
            premiumRefundDisqualificationReasons: e.premium_refund_disqualification_reasons,
            entitlements: null != e.entitlements ? e.entitlements.map((e) => uI.A.createFromServer(e)) : void 0,
            invoice: null != e.invoice ? u_.Y.createFromServer(e.invoice) : null,
        });
    }
    constructor(e) {
        (super(),
            (this.id = e.id),
            (this.amount = e.amount),
            (this.amountRefunded = e.amountRefunded),
            (this.createdAt = e.createdAt),
            (this.currency = e.currency),
            (this.description = e.description),
            (this.paymentSource = e.paymentSource),
            (this.paymentGateway = e.paymentGateway),
            (this.status = e.status),
            (this.tax = e.tax),
            (this.taxInclusive = e.taxInclusive),
            (this.subscription = e.subscription),
            (this.skuId = e.skuId),
            (this.skuPrice = e.skuPrice),
            (this.sku = e.sku),
            (this.flags = e.flags),
            (this.downloadableInvoice = e.downloadableInvoice),
            (this.downloadableRefundInvoices = e.downloadableRefundInvoices),
            (this.hasInvoiceURL = e.hasInvoiceURL),
            (this.hasRefundInvoiceURLs = e.hasRefundInvoiceURLs),
            (this.premiumRefundDisqualificationReasons = e.premiumRefundDisqualificationReasons),
            (this.entitlements = e.entitlements),
            (this.invoice = e.invoice));
    }
    get isPurchasedViaApple() {
        return this.paymentGateway === _.kM_.APPLE;
    }
    get isPurchasedViaGoogle() {
        return this.paymentGateway === _.kM_.GOOGLE;
    }
    get isPurchasedExternally() {
        return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
    }
    get isSubscription() {
        return null != this.subscription;
    }
    get isPremiumSubscription() {
        return null != this.subscription && tJ.JM.has(this.subscription.planId);
    }
    get isPremiumGuildSubscription() {
        return (
            null != this.subscription &&
            null !=
                this.subscription.additionalPlans.find((e) => {
                    let { planId: t } = e;
                    return tJ.pW.has(t);
                })
        );
    }
    get isGift() {
        return uf.Lt(this.flags, 1);
    }
    get isPremiumGift() {
        return this.isGift && null != this.skuId && Object.values(tJ.pe).includes(this.skuId);
    }
    get isGuildProductPurchase() {
        return (
            null != this.sku &&
            (this.sku.productLine === _.EZt.GUILD_PRODUCT || uf.Lt(this.sku.flags, up.d.GUILD_PRODUCT))
        );
    }
    get isSoftDeletedProduct() {
        return this.sku?.deleted === !0;
    }
    get isCollectible() {
        return null != this.sku && this.sku.productLine === _.EZt.COLLECTIBLES;
    }
    get isFractionalPremium() {
        return null != this.skuId && uT.I.ALL.has(this.skuId);
    }
    get isShopPurchase() {
        return this.isCollectible || this.isFractionalPremium;
    }
}
var uC =
        (((i = {})[(i.PENDING = 1)] = "PENDING"),
        (i[(i.PAID = 2)] = "PAID"),
        (i[(i.FAILED = 3)] = "FAILED"),
        (i[(i.CANCELED = 4)] = "CANCELED"),
        (i[(i.PARTIALLY_REFUNDED = 5)] = "PARTIALLY_REFUNDED"),
        (i[(i.REFUNDED = 6)] = "REFUNDED"),
        (i[(i.REVERSED = 7)] = "REVERSED"),
        i),
    uy =
        (((l = {})[(l.NITRO = 1)] = "NITRO"),
        (l[(l.NITRO_BASIC = 2)] = "NITRO_BASIC"),
        (l[(l.SHOP = 3)] = "SHOP"),
        (l[(l.APPLICATION = 4)] = "APPLICATION"),
        (l[(l.PRODUCT = 5)] = "PRODUCT"),
        l),
    uv =
        (((s = {})[(s.PARTIALLY_REFUNDED = 1)] = "PARTIALLY_REFUNDED"),
        (s[(s.REFUNDED = 2)] = "REFUNDED"),
        (s[(s.REVERSED = 3)] = "REVERSED"),
        s),
    uj =
        (((r = {})[(r.PREMIUM = 1)] = "PREMIUM"),
        (r[(r.GIFT = 2)] = "GIFT"),
        (r[(r.APPLICATION = 3)] = "APPLICATION"),
        (r[(r.COLLECTIBLE = 4)] = "COLLECTIBLE"),
        (r[(r.IN_GAME_ITEM = 5)] = "IN_GAME_ITEM"),
        r),
    uO =
        (((a = {})[(a.CLAIMED = 1)] = "CLAIMED"),
        (a[(a.UNCLAIMED = 2)] = "UNCLAIMED"),
        (a[(a.REDEEMED = 3)] = "REDEEMED"),
        (a[(a.FAILED = 4)] = "FAILED"),
        (a[(a.UNREDEEMED = 5)] = "UNREDEEMED"),
        (a[(a.REFUNDED = 6)] = "REFUNDED"),
        a);
function uR(e) {
    let t = e.payments.map((e) => ({
            ...e,
            payment_source: null != e.payment_source ? oU.Ay.createFromServer(e.payment_source) : null,
        })),
        n = t.find((t) => t.id === e.id);
    return {
        ...e,
        sku: null != e.sku ? uS.A.createFromServer(e.sku) : null,
        payments: t,
        receipt_payment: new uN({
            id: e.id,
            status: n?.status,
            paymentSource: n?.payment_source,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
        }),
    };
}
let uD = { receipts: [], cursor: null };
var uL = n(34188),
    uP = n(597770),
    uG = n(724302),
    uM = n(291322),
    uU = n(147925),
    uV = n(707554),
    uk = n(957565),
    uw = n(250627),
    uF = n(871109),
    uB = n(571654),
    uX = n(411342),
    uz = n(179499),
    uH = n(362280),
    uY = n(95035),
    uW = n(317525),
    uK = n(460103);
function uZ(e) {
    let { description: t, detail: n } = e;
    return (0, f.jsx)("li", {
        className: uK.Iu,
        children: (0, f.jsxs)(lb.A, {
            justify: lb.A.Justify.BETWEEN,
            children: [(0, f.jsx)("div", { children: t }), (0, f.jsx)("div", { children: n })],
        }),
    });
}
function uq(e) {
    let { guildId: t, guildProductListingId: n } = e,
        i = (0, uw.Qi)(t, n, { requireCurrentGuild: !1 }),
        l = (0, uB.z)(i),
        s = (0, I.bG)([lv.A], () => lv.A.getGuild(t)),
        r = i?.role_id != null && i?.attachments_count === 0 ? V.intl.string(V.t.H11qcT) : l,
        a = x.useCallback(async () => {
            (s?.features.has(_.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, uH.A)(_.BVt.GUILD_PRODUCT(t, n))
                : await (0, uH.A)(_.BVt.CHANNEL(t)),
                (0, tH.default)());
        }, [s, t, n]);
    return (0, f.jsxs)(f.Fragment, {
        children: [
            null != r && (0, f.jsx)(uZ, { description: V.intl.string(V.t.lXPbJb), detail: r }),
            null != s &&
                (0, f.jsx)(uZ, {
                    description: V.intl.string(V.t.Wpn8z8),
                    detail: (0, f.jsx)(uY.A, { onClick: a, children: s.name }),
                }),
        ],
    });
}
function uQ(e) {
    let { guildId: t, guildProductListingId: n } = e,
        i = (0, uw.Qi)(t, n, { requireCurrentGuild: !1 }),
        l = (0, I.bG)([uF.A], () => uF.A.getGuildProductFetchState(n) === uF.e.FETCHING),
        s = i?.role_id,
        r = (0, I.bG)([uW.A], () => (null != s ? uW.A.getRole(t, s) : void 0), [t, s]),
        a = (0, uz.A)({ guildId: t, productId: n }),
        o = (i?.attachments?.length ?? 0) > 0,
        u = null != r;
    return l
        ? (0, f.jsx)("div", { className: uK.hT, children: (0, f.jsx)(oj.y, {}) })
        : null != i && (o || u)
          ? (0, f.jsxs)("div", {
                className: uK.hT,
                children: [
                    o &&
                        (0, f.jsxs)(f.Fragment, {
                            children: [
                                (0, f.jsx)(n5.E, {
                                    variant: "body-xs/semibold",
                                    color: "text-default",
                                    className: uK.yE,
                                    children: V.intl.string(V.t.hxawoy),
                                }),
                                (0, f.jsx)(j.$, { ...a }),
                            ],
                        }),
                    u &&
                        (0, f.jsxs)(f.Fragment, {
                            children: [
                                o && (0, f.jsx)("div", { className: uK.yF }),
                                (0, f.jsx)(n5.E, {
                                    variant: "body-xs/semibold",
                                    color: "text-default",
                                    className: uK.yE,
                                    children: V.intl.string(V.t.gWBNet),
                                }),
                                (0, f.jsx)(uX.A, { role: r }),
                            ],
                        }),
                ],
            })
          : null;
}
let uJ = function (e, t) {
    (0, lp.mM)(async () => {
        let { default: i } = await n.e(234138).then(n.bind(n, 206049));
        return (n) => (0, f.jsx)(i, { payment: e, paymentSource: t, ...n });
    });
};
var u$ = n(818348);
function u0(e) {
    let { payment: t } = e,
        [n, i] = x.useState(null),
        [l, s] = x.useState(null);
    async function r(e) {
        try {
            let n = await (async function (e) {
                try {
                    return (
                        await tl.Bo.get({
                            url: _.Rsh.BILLING_INVOICE_BREAKDOWN,
                            query: { payment_id: e },
                            oldFormErrors: !0,
                            rejectWithError: !1,
                        })
                    ).body;
                } catch (e) {
                    throw e;
                }
            })(t.id);
            i(n);
            let l = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
            (window.open(l, "_blank"), s(null));
        } catch (e) {
            s(e.body?.message);
        }
    }
    let a = null != t.paymentSource && t.status === u$.__.COMPLETED,
        o = n?.invoiceLink,
        u = n?.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, f.jsxs)("div", {
              className: uK.It,
              children: [
                  (0, f.jsx)(nr.Anchor, { onClick: () => r(!1), children: V.intl.formatToPlainString(V.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, f.jsx)(nr.Anchor, {
                            className: uK.oe,
                            onClick: () => r(!0),
                            children: V.intl.formatToPlainString(V.t["3x6NGw"], {}),
                        })
                      : null,
                  null != l && "" !== l && (0, f.jsx)(iK.w, { type: "critical", message: l, role: "alert" }),
              ],
          })
        : t.hasInvoiceURL && null != n
          ? (0, f.jsxs)("div", {
                className: uK.It,
                children: [
                    (0, f.jsx)(nr.Anchor, { href: o, children: V.intl.formatToPlainString(V.t.R0xzCN, {}) }),
                    null != u
                        ? u.map((e, t) =>
                              (0, f.jsx)(
                                  nr.Anchor,
                                  {
                                      className: uK.oe,
                                      href: e,
                                      children: V.intl.formatToPlainString(V.t["3x6NGw"], {}),
                                  },
                                  t,
                              ),
                          )
                        : null,
                    null != l && "" !== l && (0, f.jsx)(iK.w, { type: "critical", message: l, role: "alert" }),
                ],
            })
          : a
            ? (0, f.jsx)("div", {
                  className: uK.It,
                  children: (0, f.jsx)(nr.Anchor, {
                      onClick: () => {
                          var e;
                          ((e = t.paymentSource), uJ(t, e));
                      },
                      children: V.intl.formatToPlainString(V.t.onRIxS, {}),
                  }),
              })
            : null;
}
var u1 = n(510022),
    u2 = n(427262),
    u3 = n(106799),
    u5 = n(580630);
let u4 = (e) => `https://${_.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`;
function u6(e, t) {
    return t === u$.Yr.DISCORD_ORB
        ? (0, f.jsxs)("span", {
              className: uK.db,
              children: [
                  (0, f.jsx)(u3.A, { customSize: 16, shouldUseThemeColor: !0 }),
                  V.intl.formatToPlainString(V.t.YMor7k, { count: e }),
              ],
          })
        : (0, u5.$g)(e, t);
}
function u8(e) {
    let { receipt: t, gameItem: n, locale: i, hasLinkedToApplication: l } = e,
        { analyticsLocations: s } = (0, ez.Ay)(tk.A.BILLING_SETTINGS_BILLING),
        { sku: r } = t,
        a = r?.application,
        o = n.gift_recipient;
    return n.status === uO.REDEEMED
        ? null
        : n.status === uO.REFUNDED
          ? (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)(uV.H, { className: uK.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                    (0, f.jsx)("div", {
                        className: uK.iL,
                        children:
                            null != o
                                ? V.intl.format(V.t.Q1K9eg, { username: u2.Ay.getName(o) })
                                : V.intl.format(V.t.IBtGwC, { applicationName: a?.name }),
                    }),
                ],
            })
          : n.status === uO.CLAIMED || n.status === uO.UNCLAIMED
            ? (0, f.jsxs)(f.Fragment, {
                  children: [
                      (0, f.jsx)(uV.H, { className: uK.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                      (0, f.jsx)("div", {
                          className: uK.iL,
                          children:
                              null != o
                                  ? V.intl.format(V.t.vfUW65, { username: u2.Ay.getName(o) })
                                  : V.intl.string(V.t["18wIqp"]),
                      }),
                      null == o &&
                          (0, f.jsx)("div", {
                              className: uK.TP,
                              children: (0, f.jsx)(j.$, {
                                  variant: "primary",
                                  text: V.intl.string(V.t["jcSP+g"]),
                                  onClick: () => (0, na.openUserSettings)(S.X.GIFT_PANEL),
                              }),
                          }),
                  ],
              })
            : (0, f.jsxs)(f.Fragment, {
                  children: [
                      (0, f.jsx)(uV.H, { className: uK.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                      (0, f.jsx)("div", {
                          className: uK.iL,
                          children: l
                              ? V.intl.format(V.t.DQQCAw, { applicationName: a?.name, skuName: r?.name })
                              : V.intl.format(V.t.ED2BqF, { applicationName: a?.name, skuName: r?.name }),
                      }),
                      (0, f.jsx)("div", {
                          className: uK.TP,
                          children: l
                              ? (0, f.jsx)(j.$, {
                                    variant: "primary",
                                    text: V.intl.string(V.t.zoztQA),
                                    onClick: () => (0, oT.A)(u4(i)),
                                })
                              : (0, f.jsx)(j.$, {
                                    variant: "primary",
                                    text: V.intl.string(V.t["jCqvk/"]),
                                    onClick: () => {
                                        null != r &&
                                            null != a &&
                                            (td.default.track(_.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED, {
                                                sku_id: r.id,
                                                application_id: a.id,
                                                location_stack: s,
                                            }),
                                            (0, u1.n)({ sku: r, application: a, analyticsLocations: s }));
                                    },
                                }),
                      }),
                  ],
              });
}
var u7 = n(933832),
    u9 = n(789645);
function de(e) {
    let { refund: t, locale: n } = e,
        i = u4(n),
        l = t.eligible ? u7.CheckmarkLargeIcon : u9.XSmallIcon;
    return (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsx)(uV.H, { className: uK.mW, children: V.intl.string(V.t["n/27pr"]) }),
            (0, f.jsxs)("div", {
                className: uK.iL,
                children: [
                    (0, f.jsx)("div", {
                        children: (function (e, t) {
                            if (null == e.window)
                                return e.policy === uj.IN_GAME_ITEM
                                    ? V.intl.format(V.t["5lvoVS"], { supportURL: t })
                                    : V.intl.string(V.t.s9TZM1);
                            let n = e.window.days;
                            switch (e.policy) {
                                case uj.PREMIUM:
                                    return e.eligible
                                        ? V.intl.format(V.t.EPYteX, { dateLimit: n, supportURL: t })
                                        : V.intl.formatToPlainString(V.t.dk7vyL, { dateLimit: n });
                                case uj.GIFT:
                                    return e.eligible
                                        ? V.intl.format(V.t["16eP/L"], { dateLimit: n, supportURL: t })
                                        : V.intl.formatToPlainString(V.t.owlOWc, { dateLimit: n });
                                default:
                                    return e.eligible
                                        ? V.intl.format(V.t["8uEuEe"], { dateLimit: n, supportURL: t })
                                        : V.intl.formatToPlainString(V.t.dt2jVC, { dateLimit: n });
                            }
                        })(t, i),
                    }),
                    t.policy !== uj.IN_GAME_ITEM &&
                        (0, f.jsxs)("div", {
                            className: uK.My,
                            children: [
                                (0, f.jsx)("div", {
                                    className: uK.Kf,
                                    children:
                                        null != t.window &&
                                        (0, f.jsxs)("div", {
                                            className: uK._Z,
                                            children: [
                                                (0, f.jsx)(uV.H, {
                                                    className: uK.ud,
                                                    children: V.intl.string(V.t.H0RNz4),
                                                }),
                                                (0, f.jsxs)("div", {
                                                    className: uK.z9,
                                                    children: [
                                                        (0, f.jsx)(l, { className: uK.xb, color: "currentColor" }),
                                                        (0, f.jsx)("div", {
                                                            children: V.intl.formatToPlainString(V.t["7dtXa/"], {
                                                                daysSincePurchase: t.window.days_since_purchase,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                }),
                                (0, f.jsx)(nr.Anchor, { href: i, children: V.intl.string(V.t.re5nOB) }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var dt = n(679897);
function dn(e) {
    let { description: t, cost: n } = e;
    return (0, f.jsx)("li", {
        className: uK.mg,
        children: (0, f.jsxs)(lb.A, {
            justify: lb.A.Justify.BETWEEN,
            children: [(0, f.jsx)("div", { children: t }), (0, f.jsx)("div", { children: n })],
        }),
    });
}
function di(e) {
    let { value: t, copyText: n, copyFeedbackText: i } = e,
        [l, s] = x.useState(!1),
        [r, a] = x.useState(!1);
    return (0, f.jsx)(lg.m, {
        forceOpen: r,
        text: l ? i : n,
        children: (0, f.jsx)(n4.D, {
            onMouseEnter: () => {
                l && s(!1);
            },
            onMouseLeave: () => {
                a(!1);
            },
            onClick: function () {
                (0, uk.C)(t, () => {
                    (a(!0), s(!0));
                });
            },
            children: (0, f.jsx)("div", { className: uK.l9, children: t }),
        }),
    });
}
function dl(e) {
    let { paymentId: t } = e;
    return (0, f.jsx)("li", {
        className: uK.mg,
        children: (0, f.jsxs)("div", {
            className: uK.bx,
            children: [
                (0, f.jsx)("div", { children: V.intl.string(V.t["UQim+r"]) }),
                (0, f.jsx)(di, {
                    value: t,
                    copyText: V.intl.string(V.t["Mdk9+A"]),
                    copyFeedbackText: V.intl.string(V.t["7eIrA2"]),
                }),
            ],
        }),
    });
}
function ds(e) {
    let { tag: t } = e;
    if (null == t) return null;
    let n = t === uv.REVERSED;
    return (0, f.jsxs)(n5.E, {
        variant: "footnote/semibold",
        color: "none",
        tag: "span",
        className: ic()(dt.XM, n ? dt.aB : dt.EN),
        children: [
            t === uv.REVERSED && V.intl.string(V.t.YQv9Li),
            t === uv.PARTIALLY_REFUNDED && V.intl.string(V.t.lYbZzz),
            t === uv.REFUNDED && V.intl.string(V.t.ZBb6NK),
        ],
    });
}
function dr(e) {
    let { payment: t, locale: n } = e,
        i = t.payment_source ?? (t.payment_gateway === u$.kM.APPLE_PARTNER ? new oU.Pw({}) : null);
    return null == i
        ? null
        : (0, f.jsx)(o0.A, {
              paymentSource: i,
              locale: n,
              descriptionClassName: uK.iL,
              showLabels: !0,
              showPaymentSourceIcon: !0,
          });
}
function da(e) {
    let { receipt: t, locale: n } = e;
    return t.payments.length <= 1
        ? 1 === t.payments.length
            ? (0, f.jsx)(dr, { payment: t.payments[0], locale: n })
            : null
        : (0, f.jsx)(q.B, {
              children: t.payments.map((e) =>
                  (0, f.jsxs)(
                      lb.A,
                      {
                          justify: lb.A.Justify.BETWEEN,
                          align: lb.A.Align.CENTER,
                          children: [
                              (0, f.jsx)(dr, { payment: e, locale: n }),
                              (0, f.jsxs)(q.B, {
                                  direction: "horizontal",
                                  align: "center",
                                  gap: 8,
                                  fullWidth: !1,
                                  children: [
                                      (0, f.jsx)(ds, { tag: e.tag }),
                                      (0, f.jsx)(n5.E, {
                                          variant: "body-md/normal",
                                          color: "text-subtle",
                                          children: u6(e.amount, t.currency),
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
function du(e) {
    let { guildProduct: t, locale: n } = e;
    return (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsx)("div", { className: uK.ts }),
            t.delisted
                ? (0, f.jsx)(iK.w, {
                      type: "warning",
                      message: V.intl.string(V.t["3AvulN"]),
                      role: "none",
                      action: { text: V.intl.string(V.t.zoztQA), onClick: () => (0, oT.A)(u4(n)) },
                  })
                : null != t.guild_id && (0, f.jsx)(uQ, { guildId: t.guild_id, guildProductListingId: t.listing_id }),
        ],
    });
}
function dd(e) {
    let { receipt: t, locale: n, hasLinkedToApplication: i } = e,
        { currency: l, guild_product: s, game_item: r, refund: a } = t;
    return (0, f.jsx)(n4.D, {
        onClick: (e) => e.stopPropagation(),
        children: (0, f.jsxs)("div", {
            className: uK.WI,
            children: [
                (0, f.jsx)(uV.H, { className: uK.mW, children: V.intl.string(V.t.nyzoFb) }),
                (0, f.jsxs)("div", {
                    className: ic()(uK.iL, uK.W),
                    children: [
                        (0, f.jsx)(da, { receipt: t, locale: n }),
                        (0, f.jsxs)("ul", {
                            children: [
                                null != t.subtotal &&
                                    (0, f.jsxs)(f.Fragment, {
                                        children: [
                                            (0, f.jsx)(dn, { description: t.description, cost: u6(t.subtotal, l) }),
                                            (0, f.jsx)(dn, {
                                                description: V.intl.string(V.t.QgWXht),
                                                cost: u6(t.tax, l),
                                            }),
                                        ],
                                    }),
                                (0, f.jsx)(dn, { description: V.intl.string(V.t.txajQG), cost: u6(t.total, l) }),
                                t.amount_refunded > 0 &&
                                    (0, f.jsxs)(f.Fragment, {
                                        children: [
                                            (0, f.jsx)(dn, {
                                                description: V.intl.string(V.t["A+I0AP"]),
                                                cost: u6(-t.amount_refunded, l),
                                            }),
                                            (0, f.jsx)(dn, {
                                                description: V.intl.string(V.t.xER6Wi),
                                                cost: u6(t.net, l),
                                            }),
                                        ],
                                    }),
                                (0, f.jsx)(dl, { paymentId: t.id }),
                                s?.guild_id != null &&
                                    (0, f.jsx)(uq, { guildId: s.guild_id, guildProductListingId: s.listing_id }),
                            ],
                        }),
                    ],
                }),
                null != s && (0, f.jsx)(du, { guildProduct: s, locale: n }),
                (0, f.jsx)(u0, { payment: t.receipt_payment }),
                null != r && (0, f.jsx)(u8, { receipt: t, gameItem: r, locale: n, hasLinkedToApplication: i }),
                null != a && (0, f.jsx)(de, { refund: a, locale: n }),
            ],
        }),
    });
}
function dc(e) {
    let { withGradient: t } = e;
    return t
        ? (0, f.jsx)(uM.A, { size: 24, iconSize: 16, color: n1.A.unsafe_rawColors.NEUTRAL_1, className: uK.Sy })
        : (0, f.jsx)("div", {
              className: ic()(uK.Sy, uK.uX, uK.Xr),
              children: (0, f.jsx)(au.NitroWheelIcon, {
                  size: "custom",
                  width: 16,
                  height: 16,
                  color: n1.A.colors.ICON_DEFAULT,
              }),
          });
}
function dg(e) {
    let { receipt: t } = e,
        n = t.sku?.application,
        i = (0, I.bG)([lv.A], () => lv.A.getGuild(n?.guildId));
    switch (t.icon) {
        case uy.NITRO:
            return (0, f.jsx)(dc, { withGradient: !0 });
        case uy.NITRO_BASIC:
            return (0, f.jsx)(dc, { withGradient: !1 });
        case uy.SHOP:
            return (0, f.jsx)(uL.ShopIcon, {
                size: "custom",
                width: 23,
                height: 23,
                color: "currentColor",
                className: uK.sV,
            });
        case uy.APPLICATION:
        case uy.PRODUCT:
            return (0, f.jsx)(i7.A, {
                className: uK.Sy,
                guildClassName: uK.zA,
                game: t.icon === uy.APPLICATION ? n : void 0,
                guild: i,
                size: i7.M.XSMALL,
                skuId: t.sku?.id,
            });
    }
}
function dm(e) {
    let { receipt: t, hasLinkedToApplication: n } = e,
        { game_item: i } = t;
    if (null != i && t.status === uC.PAID)
        switch (i.status) {
            case uO.CLAIMED:
                return (0, f.jsx)("span", { className: uK.gD, children: V.intl.string(V.t.lIsIFo) });
            case uO.UNCLAIMED:
                return (0, f.jsx)("span", { className: uK.Tf, children: V.intl.string(V.t["+tqSi3"]) });
            case uO.REDEEMED:
                return (0, f.jsx)("span", { className: uK.gD, children: V.intl.string(V.t.Osji1u) });
            case uO.FAILED:
                return (0, f.jsx)("span", { className: uK.ob, children: V.intl.string(V.t.Yo4ru6) });
            default:
                return n
                    ? (0, f.jsx)("span", { className: uK.Tf, children: V.intl.string(V.t.y7F0Re) })
                    : (0, f.jsx)("span", { className: uK.Tf, children: V.intl.string(V.t.HHC5Z4) });
        }
    switch (t.status) {
        case uC.PENDING:
            return (0, f.jsx)("span", { className: uK.oE, children: V.intl.string(V.t.y7F0Re) });
        case uC.FAILED:
            return (0, f.jsx)("span", { className: uK.ob, children: V.intl.string(V.t.Yo4ru6) });
        case uC.REVERSED:
            return (0, f.jsx)("span", { className: uK.ob, children: V.intl.string(V.t.YQv9Li) });
        case uC.CANCELED:
            return (0, f.jsx)("span", { className: uK.ob, children: V.intl.string(V.t.ttkBhy) });
        case uC.PARTIALLY_REFUNDED:
            return (0, f.jsx)("span", { className: uK.gD, children: V.intl.string(V.t.lYbZzz) });
        case uC.REFUNDED:
            return (0, f.jsx)("span", { className: uK.gD, children: V.intl.string(V.t.ZBb6NK) });
        case uC.PAID:
            return null;
    }
}
function dA(e) {
    let { receipt: t, locale: n, className: i } = e,
        [l, s] = x.useState(!1),
        { hasAlreadyLinked: r } = (0, uG.RD)(null != t.game_item ? t.sku?.application : void 0);
    return (0, f.jsx)(uc.tG, {
        id: t.id,
        children: (e) =>
            (0, f.jsxs)(n4.D, {
                onClick: () => s(!l),
                "data-expanded": l,
                className: ic()(uK.Ji, i),
                focusProps: { offset: 4 },
                ...e,
                children: [
                    (0, f.jsxs)(lb.A, {
                        className: uK.J7,
                        align: lb.A.Align.CENTER,
                        "data-expanded": l,
                        children: [
                            (0, f.jsx)(n5.E, {
                                variant: "body-sm/normal",
                                className: uK.p6,
                                children: (0, iA.i$)(im()(t.created_at), "MM/DD/YYYY"),
                            }),
                            (0, f.jsxs)("div", {
                                className: uK.h_,
                                children: [
                                    (0, f.jsx)(dg, { receipt: t }),
                                    (0, f.jsx)("div", {
                                        children:
                                            null != t.subscription
                                                ? ((function (e, t) {
                                                      let { paymentSource: n } = e.receipt_payment,
                                                          i = null != n && _.AD1.has(n.type);
                                                      switch (t.type) {
                                                          case _.rzx.PREMIUM:
                                                              return t.plans
                                                                  .map((e) => {
                                                                      let { plan_id: t, quantity: n } = e;
                                                                      return (0, ax.xq)(t)
                                                                          ? ax.Ay.getDisplayName(t, !1, i)
                                                                          : `${n > 1 ? `${n}x ` : ""}${ax.Ay.getDisplayName(t, !1, i)}`;
                                                                  })
                                                                  .join(", ");
                                                          case _.rzx.GUILD:
                                                              if (null == t.plan_name) return null;
                                                              return V.intl.formatToPlainString(
                                                                  t.interval === tJ.WT.YEAR
                                                                      ? V.t.V6UFQM
                                                                      : V.t["6oq128"],
                                                                  { planName: t.plan_name },
                                                              );
                                                          case _.rzx.APPLICATION:
                                                              return e.sku?.application != null
                                                                  ? V.intl.formatToPlainString(V.t["0wL/VI"], {
                                                                        tier: e.sku.name,
                                                                    })
                                                                  : V.intl.string(V.t["9czSYu"]);
                                                          default:
                                                              return null;
                                                      }
                                                  })(t, t.subscription) ?? t.description)
                                                : t.guild_product?.delisted === !0
                                                  ? V.intl.string(V.t.O7uLmw)
                                                  : t.description,
                                    }),
                                    t.is_gift
                                        ? (0, f.jsx)(lg.m, {
                                              text: V.intl.string(V.t.QddTpm),
                                              children: (0, f.jsx)(uP.GiftIcon, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: uK.ez,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            (0, f.jsxs)("div", {
                                className: uK.vj,
                                children: [
                                    (0, f.jsx)(dm, { receipt: t, hasLinkedToApplication: r }),
                                    (0, f.jsx)("span", { className: uK.q9, children: u6(t.net, t.currency) }),
                                ],
                            }),
                            (0, f.jsx)(uU.A, {
                                className: uK.fT,
                                direction: l ? uU.A.Directions.UP : uU.A.Directions.DOWN,
                            }),
                        ],
                    }),
                    l ? (0, f.jsx)(dd, { receipt: t, locale: n, hasLinkedToApplication: r }) : null,
                ],
            }),
    });
}
var dE = n(949779);
function dh(e) {
    let { receipts: t, locale: n, loadNextPage: i } = e,
        l = x.useRef(null),
        [s, r] = x.useState(0),
        a = Math.max(Math.ceil(t.length / 10), 1),
        o = t.slice(10 * s, (s + 1) * 10);
    x.useEffect(() => {
        l.current?.scrollTo({ to: 0 });
    }, [s]);
    let u = x.useCallback(
            (e) => {
                (r(e), e >= a - 2 && i());
            },
            [a, i],
        ),
        d = (0, um.A)("billing-history", l);
    return (0, f.jsx)(uc.hD, {
        navigator: d,
        children: (0, f.jsx)(uc.PR, {
            children: (e) => {
                let { ref: t, ...i } = e;
                return (0, f.jsx)(uh, {
                    className: dE.GD,
                    currentPageIndex: s,
                    onChangePage: u,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...i,
                    children: (0, f.jsx)(ug.Ch, {
                        className: dE.Bd,
                        ref: l,
                        overflow: "auto",
                        children: o.map((e) =>
                            (0, f.jsx)(dA, { className: ic()(dE.Nj, dE.Bd), receipt: e, locale: n }, e.id),
                        ),
                    }),
                });
            },
        }),
    });
}
function dS(e) {
    let { subscription: t } = e;
    return (
        tE()(null != t.paymentGateway, "Expected payment gateway when rendering for external subscription"),
        (0, f.jsxs)(oB.Z, {
            className: dE.K1,
            children: [
                (0, f.jsx)("div", {
                    className: dE.BF,
                    children: V.intl.format(V.t["6mIX6s"], { paymentGatewayName: u$.qm[t.paymentGateway] }),
                }),
                (0, f.jsx)("div", {
                    className: dE.Q2,
                    children: V.intl.format(V.t.eG0uZB, {
                        paymentGatewayName: u$.qm[t.paymentGateway],
                        billingHistoryLink: (0, ax.tW)(t.paymentGateway, "BILLING_HISTORY"),
                    }),
                }),
            ],
        })
    );
}
function dT(e) {
    let { locale: t } = e,
        {
            receipts: n,
            hasFetched: i,
            hasFailed: l,
            loadNextPage: s,
        } = (function () {
            let [e, t] = x.useState(uD),
                [n, i] = x.useState(!1),
                [l, s] = x.useState(!1),
                [r, a] = x.useState(!1),
                o = x.useCallback((e, n) => {
                    tl.Bo.get({
                        url: _.Rsh.BILLING_HISTORY,
                        query: { before: e ?? void 0, limit: n },
                        rejectWithError: !0,
                    })
                        .then((n) => {
                            let { body: i } = n,
                                l = i.receipts.map(uR);
                            t((t) => ({ receipts: null == e ? l : [...t.receipts, ...l], cursor: i.cursor }));
                        })
                        .catch(() => {
                            null == e && s(!0);
                        })
                        .finally(() => {
                            (i(!0), a(!1));
                        });
                }, []);
            x.useEffect(() => {
                o(null, 30);
            }, [o]);
            let u = x.useCallback(() => {
                r || null == e.cursor || (a(!0), o(e.cursor, 10));
            }, [r, o, e.cursor]);
            return { receipts: e.receipts, hasFetched: n, hasFailed: l, loadNextPage: u };
        })(),
        r = (0, I.bG)([ul.A], () => ul.A.getPremiumTypeSubscription()),
        a = null != r && r.isPurchasedExternally;
    return i
        ? (0, f.jsxs)("div", {
              className: dE.GD,
              children: [
                  null != r && a ? (0, f.jsx)(dS, { subscription: r }) : null,
                  n.length > 0
                      ? (0, f.jsxs)("div", {
                            className: ic()(dE.PQ, dE.GD),
                            children: [
                                (0, f.jsx)("div", {
                                    className: ic()(dE.Nj, dE.Bd),
                                    children: (0, f.jsxs)(lb.A, {
                                        className: dE.Yi,
                                        children: [
                                            (0, f.jsx)("div", {
                                                className: uK.p6,
                                                children: V.intl.string(V.t["5t11BV"]),
                                            }),
                                            (0, f.jsx)("div", {
                                                className: dE.Ir,
                                                children: V.intl.string(V.t.yAAPb2),
                                            }),
                                            (0, f.jsx)("div", {
                                                className: uK.vj,
                                                children: V.intl.string(V.t["6MqHXV"]),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, f.jsx)(dh, { receipts: n, locale: t, loadNextPage: s }),
                            ],
                        })
                      : l
                        ? (0, f.jsx)(n5.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              children: V.intl.string(V.t["fb3n+4"]),
                          })
                        : a
                          ? null
                          : (0, f.jsx)(n5.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: V.intl.string(V.t.GqvDkk),
                            }),
              ],
          })
        : (0, f.jsx)(oj.y, {});
}
var dp = n(500597);
let df = (0, h.E2)(S.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, I.bG)([us.default], () => us.default.locale);
            return (0, f.jsxs)(f.Fragment, { children: [(0, f.jsx)(dp.kb, {}), (0, f.jsx)(dT, { locale: e })] });
        },
        useSearchTerms: () => [V.intl.string(V.t.obLrcK)],
    }),
    dx = (0, h.zZ)(S.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.obLrcK),
        buildLayout: () => [df],
    }),
    dI = (0, h.t_)(S.X.BILLING_PANEL, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        buildLayout: () => [ud, dx],
        useObscuredNotice: oS.L,
    }),
    d_ = (0, h.i4)(S.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        icon: oh.CreditCardIcon,
        buildLayout: () => [dI],
    });
var db = n(70283),
    dN = n(682618),
    dC = n(997101);
let dy = {
        [dC.d.US]: [
            {
                id: "walmart",
                name: "Walmart",
                url: "https://www.walmart.com/ip/Discord-25-Gift-Card-Digital/20844423221?classType=REGULAR&from=/search",
            },
            {
                id: "best_buy",
                name: "Best Buy\xae",
                url: "https://www.bestbuy.com/product/discord-25-gift-card-digital/JJG34YFV8K/sku/6685454",
            },
            {
                id: "target",
                name: "Target",
                url: "https://www.target.com/p/discord-gift-card-email-delivery/-/A-1013530846?preselect=1013327744",
            },
            {
                id: "gamestop",
                name: "GameStop",
                url: "https://www.gamestop.com/gift-cards/virtual-currency/products/discord-25-gift-card/448794.html",
            },
        ],
        [dC.d.IT]: [
            {
                id: "gamelife",
                name: "Gamelife",
                url: "https://www.gamelife.it/cava0261-discord-25-eur-codice-di-attivazione?attribute_values=4",
            },
        ],
        [dC.d.FR]: [
            {
                id: "micromania",
                name: "Micromania",
                url: "https://www.micromania.fr/p/carte-discord-25-euros-166241.html",
            },
        ],
    },
    dv = [];
function dj(e) {
    return null == e ? dv : (dy[e] ?? dv);
}
var dO = n(92202),
    dR = n(45052),
    dD = n(158476),
    dL = n(35587),
    dP = n(86379);
let dG = (0, h.E2)(S.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: dp.uK,
        usePredicate: () => (0, dP.Hp)(),
        useSearchTerms: () => [V.intl.string(V.t.vwMEHS)],
    }),
    dM = (0, h.zZ)(S.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [dG] });
var dU = n(704333),
    dV = n(414499),
    dk = n(31300);
function dw(e) {
    let { enabled: t } = (0, dO.K)({ location: e }),
        n = (0, I.bG)([sE.default], () => sE.default.getCurrentUser()?.storeCountry?.country);
    return t && dj(n).length > 0;
}
var dF = n(178881);
function dB() {
    return n.e(5660).then(n.bind(n, 946647));
}
function dX(e) {
    let { icon: t, children: n } = e;
    return (0, f.jsxs)(n5.E, {
        variant: "body-xs/normal",
        color: "text-default",
        className: dF.A,
        children: [
            (0, f.jsx)(t, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, f.jsx)("span", { children: n }),
        ],
    });
}
let dz = (0, h.zZ)(S.X.GIFT_CARDS_MARKETING_BANNER_CATEGORY, {
        buildLayout: () => [dH],
        usePredicate: () => dw("GiftInventoryMarketingBanner"),
    }),
    dH = (0, h.E2)(S.X.GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = dw("GiftCardsGiftInventoryBanner"),
                t = (0, I.bG)([sE.default], () => sE.default.getCurrentUser()?.storeCountry?.country),
                n = o_("gift_inventory_banner"),
                i = x.useMemo(
                    () =>
                        dj(t).map((e) => ({
                            text: e.name,
                            onClick: () => {
                                (n("retailer", { partner: e.id, url: e.url }), (0, oT.A)(e.url));
                            },
                        })),
                    [t, n],
                ),
                l = x.useCallback(() => {
                    (n("billing_settings"), (0, na.openUserSettings)(S.X.BILLING_PANEL));
                }, [n]),
                s = x.useCallback(() => {
                    (n("learn_more", { url: ob.C }), (0, oT.A)(ob.C));
                }, [n]);
            return e
                ? (0, f.jsx)(oI, {
                      surface: "gift_inventory_banner",
                      size: "compact",
                      title: V.intl.string(oN.default.Ja5Q8Z),
                      graphicLottie: dB,
                      actions: i,
                      children: (0, f.jsxs)(q.B, {
                          direction: "vertical",
                          align: "start",
                          gap: 8,
                          children: [
                              (0, f.jsx)(dX, {
                                  icon: dU.ServerGridIcon,
                                  children: V.intl.string(oN.default["9xo1g9"]),
                              }),
                              (0, f.jsx)(dX, { icon: dV.CloudIcon, children: V.intl.string(oN.default.I5UWh9) }),
                              (0, f.jsx)(dX, {
                                  icon: uP.GiftIcon,
                                  children: V.intl.format(oN.default.ZuneBP, { onBillingSettingsClick: l }),
                              }),
                              (0, f.jsx)(dX, {
                                  icon: dk.ScreenIcon,
                                  children: V.intl.format(oN.default.UwYHGm, { websiteUrl: s }),
                              }),
                          ],
                      }),
                  })
                : null;
        },
        useSearchTerms: () => [],
    });
var dY = n(982240),
    dW = n(620301),
    dK = n(914410),
    dZ = n(339514),
    dq = n(573343);
function dQ(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, f.jsxs)("div", {
        className: ic()(dq.fO, { [dq.bF]: i }),
        children: [
            null != n && (0, f.jsx)("img", { src: n, alt: "", className: dq.si }),
            (0, f.jsxs)("div", {
                className: dq.tc,
                children: [
                    (0, f.jsx)(n5.E, { variant: "body-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, f.jsx)(n5.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: V.intl.format(dZ.default.qvx9E4, { count: (0, dY.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function dJ(e) {
    let { tiers: t, currentTier: n } = e;
    return (0, f.jsx)("div", {
        className: dq.dw,
        children: t.map((e) => (0, f.jsx)(dQ, { tier: e, iconUrl: (0, dR.Se)(e), active: e.key === n?.key }, e.key)),
    });
}
function d$(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(tk.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: l } = (0, dW.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: _.ZSU.BUTTON_CTA, objectType: _.btD.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, f.jsx)("div", {
        className: dq.NG,
        children: (0, f.jsx)(j.$, {
            variant: "primary",
            icon: uP.GiftIcon,
            text: V.intl.string(dZ.default.DZnomS),
            onClick: l,
        }),
    });
}
function d0(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: l, giftsRemaining: s } = e,
        r = (0, dY.rL)(i),
        a = (0, dY.rL)(l),
        o = (0, dR.GZ)(n, i, l),
        u = (0, dR.Se)(i),
        d = (0, dR.Se)(l);
    return (
        (t =
            null != l
                ? V.intl.formatToPlainString(dZ.default.XTX3OO, { count: s, nextTier: l?.name ?? "" })
                : V.intl.formatToPlainString(dZ.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, f.jsxs)("div", {
            className: dq.mY,
            children: [
                null != u &&
                    (0, f.jsx)("div", {
                        className: dq.fC,
                        children: (0, f.jsx)("img", { src: u, alt: "", className: dq.qS }),
                    }),
                (0, f.jsxs)("div", {
                    className: dq.Qs,
                    children: [
                        (0, f.jsx)(n5.E, { variant: "body-md/medium", color: "text-strong", children: t }),
                        (0, f.jsx)(dK.Ay, { variant: dK.qP.BLUE, weight: dK.fh.MEDIUM, progress: o }),
                        (0, f.jsx)(n5.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            className: dq.qg,
                            children: V.intl.format(dZ.default.iIpfQe, {
                                threshold: null != l ? a : r,
                                count: null != l ? n : r,
                            }),
                        }),
                    ],
                }),
                null != d &&
                    (0, f.jsx)("div", {
                        className: dq.fC,
                        children: (0, f.jsx)("img", { src: d, alt: "", className: dq.qS }),
                    }),
            ],
        })
    );
}
function d1(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: l,
            giftsRemaining: s,
            tiers: r,
        } = (0, I.cf)([dY.Ay], () => ({
            badgeProgress: dY.Ay.getSingleRequirementProgress(db.$.GIFTING)?.current ?? 0,
            currentTier: dY.Ay.getCurrentTier(db.$.GIFTING),
            nextTier: dY.Ay.getNextTier(db.$.GIFTING),
            giftsRemaining: dY.Ay.getRemainingToNextTier(db.$.GIFTING),
            tiers: dY.Ay.getBadgeById(db.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, f.jsxs)("div", {
              className: dq.kL,
              children: [
                  (0, f.jsxs)("div", {
                      className: dq.Jo,
                      children: [
                          n > 0 &&
                              (0, f.jsxs)(f.Fragment, {
                                  children: [
                                      (0, f.jsx)(d0, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: l,
                                          giftsRemaining: s,
                                      }),
                                      (0, f.jsx)("div", { className: dq.yF }),
                                  ],
                              }),
                          (0, f.jsx)(dJ, { tiers: r, currentTier: i }),
                          (0, f.jsx)(n5.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              className: dq.PJ,
                              children: V.intl.string(dZ.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, f.jsx)(d$, { analyticsLocation: t, location: "UserSettingsGiftingBadgeProgress" }),
              ],
          });
}
let d2 = (0, h.zZ)(S.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => V.intl.string(dZ.default.sFokBp),
        buildLayout: () => [d3],
        usePredicate: () => {
            let e = (0, dR.F5)("gift_inventory"),
                t = (0, I.bG)([dY.Ay], () => dY.Ay.getBadgeById(db.$.GIFTING));
            return e && null != t;
        },
    }),
    d3 = (0, h.E2)(S.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [V.intl.string(dZ.default.sFokBp)],
        Component: () => (0, f.jsx)(d1, {}),
    });
var d5 = n(264779),
    d4 = n(412260),
    d6 = n(555393),
    d8 = n(725807),
    d7 = n(212168),
    d9 = n(976860),
    ce = n(469778),
    ct = n(45938),
    cn = n(109802),
    ci = n(869038),
    cl = n(380856);
function cs(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, f.jsxs)(lb.A, {
        className: ic()(cl.wx, n),
        align: lb.A.Align.CENTER,
        children: [
            (0, f.jsx)("div", { className: cl.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function cr(e) {
    let { children: t, className: n } = e;
    return (0, f.jsx)("div", { className: ic()(cl.rf, n), children: t });
}
class ca extends x.PureComponent {
    static Header = cs;
    static Body = cr;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, f.jsx)("div", { className: ic()(cl.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var co = n(446263),
    cu = n(871123),
    cd = n(366523),
    cc = n(46653),
    cg = n(30793),
    cm = n(97352),
    cA = n(67480),
    cE = n(615396),
    ch = n(274904);
class cS extends x.PureComponent {
    _copyModeTimeout = new rX.Ep();
    state = { copyMode: cn.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case cn.q.SUCCESS:
                return V.intl.string(V.t.XVvPjU);
            case cn.q.ERROR:
                return V.intl.string(V.t.i4GM3L);
            default:
                return V.intl.string(V.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        ci.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, ct.AK)(t, n),
            (0, uk.C)(
                e,
                () => this.setState({ copyMode: cn.q.SUCCESS }),
                () => this.setState({ copyMode: cn.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: cn.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, f.jsxs)(lb.A, {
            direction: lb.A.Direction.VERTICAL,
            className: ch.Gj,
            children: [
                (0, f.jsx)(cn.e, {
                    className: ch.ph,
                    value: (0, ct.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uk.p5,
                    hideMessage: e ? V.intl.string(V.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: s2.XD.BRAND,
                    buttonLook: s2.pR.FILLED,
                }),
                (0, f.jsxs)("div", {
                    className: ch.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, f.jsxs)(x.Fragment, {
                                  children: [
                                      V.intl.format(V.t.ltVZcJ, { hours: t.expiresAt.diff(im()(), "h") }),
                                      (0, f.jsx)(x.Fragment, { children: " \u2014\xa0" }),
                                  ],
                              })
                            : null,
                        (0, f.jsx)(n4.D, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: V.intl.string(V.t.v6Yazx),
                        }),
                    ],
                }),
            ],
        });
    }
}
class cT extends x.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await ci.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && ci.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, cu.bF)(e)
            ? (0, f.jsx)(cd.e, { shape: "square", sku: e, containerClassName: ch.ez })
            : null != t
              ? (0, f.jsx)(co.A, { giftStyle: t, className: ch.ez, shouldAnimate: this.state.isHovered })
              : (0, f.jsx)(i7.A, { game: n, size: i7.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, cu.bF)(e)
            ? (0, f.jsxs)("div", {
                  className: ic()(ch.Oc, ch.ic),
                  children: [
                      (0, f.jsx)(i7.A, { game: n, size: i7.M.XSMALL, skuId: e.id, className: ch._u }),
                      V.intl.format(V.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, f.jsx)("div", { className: ch.Oc, children: V.intl.format(V.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === tJ.FB
                    ? V.intl.string(V.t.odsU6W)
                    : i === tJ.Bu && null != n
                      ? V.intl.formatToPlainString(n.interval === tJ.WT.MONTH ? V.t.uZjpiJ : V.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : V.intl.formatToPlainString(n.interval === tJ.WT.MONTH ? V.t.rCJvqo : V.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, f.jsx)("div", { className: ch.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, f.jsxs)(lb.A, {
            justify: lb.A.Justify.BETWEEN,
            align: lb.A.Align.CENTER,
            className: ch.pe,
            children: [
                (0, f.jsx)(n5.E, { variant: "body-md/normal", children: V.intl.string(V.t.lELyPj) }),
                (0, f.jsx)(j.$, {
                    variant: "primary",
                    size: "sm",
                    text: V.intl.string(V.t.Q3Qguo),
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
                sku: l,
                isFetching: s,
                hideCodes: r,
            } = this.props,
            { isOpen: a } = this.state;
        return (0, f.jsxs)(ca, {
            className: i,
            children: [
                (0, f.jsx)(n4.D, {
                    onClick: this.handleToggleOpen,
                    className: ch.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, f.jsx)(ca.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, f.jsxs)("div", {
                            className: ch.MY,
                            children: [
                                (0, f.jsxs)(lb.A, {
                                    align: lb.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, f.jsxs)("div", {
                                            className: ch.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, f.jsx)(uU.A, {
                                    direction: a ? uU.A.Directions.UP : uU.A.Directions.DOWN,
                                    className: ch.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, f.jsx)(ca.Body, {
                          children: s
                              ? (0, f.jsx)(oj.y, { className: ch.u1 })
                              : (0, f.jsxs)(x.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, f.jsx)(cS, { giftCode: e, sku: l, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let cp = I.Ay.connectStores([cA.A, tu.A, cg.A, i2.A, cm.A, cc.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        l = cA.A.get(t);
    if (null == l) throw Error("SKU was unavailable while rendering gift.");
    let s = cg.A.getForGifterSKUAndPlan(cc.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: l,
        hideCodes: tu.A.enabled,
        isFetching: cg.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: cg.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: i2.A.getApplication(l.applicationId),
        subscriptionPlan: null != n ? (0, cE.c9)(n) : null,
        giftCodes: s,
    };
})(cT);
var cf = n(725570),
    cx = n(736653),
    cI = n(46054);
let c_ = im().duration(30, "days");
var cb = n(416052),
    cN = n(878309);
function cC(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, f.jsx)(lT.a, {
        title: "",
        size: "md",
        input: (0, f.jsx)("div", { className: cN.aR }),
        onClose: async () => await t(),
        actions: [{ text: V.intl.string(V.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, f.jsxs)("div", {
            className: cN.t4,
            children: [
                (0, f.jsx)(N.D, { variant: "heading-xl/semibold", children: V.intl.string(V.t.iufib1) }),
                (0, f.jsx)(n5.E, { variant: "body-md/normal", className: cN.G3, children: V.intl.string(V.t.eAn6z2) }),
            ],
        }),
    });
}
let cy = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: l, transitionState: s } = e,
        [r, a] = x.useState(null),
        o = (0, tK.GV)(),
        { analyticsLocations: u } = (0, ez.Ay)(tk.A.USER_SETTINGS_GIFT_INVENTORY);
    return (x.useEffect(() => {
        null == i &&
            (0, d5.kd)({
                promotionId: l.id,
                promotionTitle: l.outboundTitle,
                partnerId: l.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, l.id, l.outboundTitle, l.partnerId, n, u]),
    null != r)
        ? (0, f.jsx)(cC, { onClose: t, transitionState: s })
        : null == i
          ? (0, f.jsx)(oj.y, { className: cN.Lq })
          : (0, f.jsx)(lT.a, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, f.jsxs)("div", {
                    className: cN.N1,
                    children: [
                        (0, f.jsx)("div", { className: cN.Qw }),
                        (0, f.jsx)(N.D, { variant: "heading-xl/semibold", children: V.intl.string(V.t["23BfZh"]) }),
                        (0, f.jsx)(n5.E, {
                            variant: "body-md/normal",
                            className: cN.G3,
                            children: l.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: V.intl.string(V.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: V.intl.string(V.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, d5.kc)(i, l);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: s,
                "aria-label": o,
                children: (0, f.jsxs)("div", {
                    children: [
                        (0, f.jsx)(ls.c, { className: cN.M5 }),
                        (0, f.jsx)(lu.D, {
                            label: V.intl.string(V.t.s9LFQh),
                            helperText: V.intl.string(V.t["F+nFTZ"]),
                            children: (0, f.jsx)(cb.A, {
                                value: i,
                                buttonColor: s2.$n.Colors.BRAND,
                                buttonLook: s2.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var cv = n(136380);
function cj(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [l, s] = x.useState(!1),
        [r, a] = x.useState(!1);
    function o() {
        return s((e) => !e);
    }
    let u = (0, cx.Ay)(),
        d = (0, d5.WD)(n.id, u),
        c = null != i,
        g = x.useMemo(
            () =>
                (0, iA.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? im()(n.outboundRedemptionEndDate)
                            : im()(n.endDate).add(c_)
                        : im()(n.endDate),
                    "LL",
                ),
            [n, c],
        );
    c && l
        ? (t = V.intl.format(V.t.pkxVx6, { endDate: g, onClickDetails: o }))
        : c && !l
          ? (t = V.intl.format(V.t["4sFeob"], { endDate: g, onClickDetails: o }))
          : !c && l
            ? (t = V.intl.format(V.t["RBnE+l"], { endDate: g, onClickDetails: o }))
            : c || l || (t = V.intl.format(V.t["57+7Qn"], { endDate: g, onClickDetails: o }));
    let m = c ? V.intl.string(V.t["2cHUti"]) : V.intl.string(V.t.O13yhz),
        A = (0, d6.N)()?.isEligible === !0,
        E = x.useCallback(() => a(!1), []),
        { outboundTitle: h, outboundTermsAndConditions: S } = n;
    return (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsxs)("div", {
                className: cv.AX,
                children: [
                    (0, f.jsxs)("div", {
                        className: cv.gE,
                        children: [
                            (0, f.jsxs)("div", {
                                className: cv.At,
                                children: [
                                    (0, f.jsx)("div", {
                                        className: cv.$G,
                                        children: (0, f.jsx)("img", { alt: "", src: d, className: cv.IJ }),
                                    }),
                                    (0, f.jsxs)("div", {
                                        children: [
                                            (0, f.jsx)(N.D, { variant: "heading-sm/semibold", children: h }),
                                            (0, f.jsx)(n5.E, {
                                                variant: "body-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (c || A) && (0, f.jsx)(j.$, { text: m, onClick: () => a(!0), size: "sm" }),
                        ],
                    }),
                    l &&
                        (0, f.jsx)(n5.E, {
                            className: cv.GL,
                            variant: "body-xs/normal",
                            color: "text-default",
                            children: cI.A.parse(S, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, f.jsx)(cf.aF, {
                    renderModal: (e) =>
                        (0, f.jsx)(cy, {
                            ...e,
                            onClose: E,
                            onClaim: dD.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: E,
                }),
        ],
    });
}
function cO(e) {
    let { redesign: t = !1 } = e,
        n = (0, I.yK)([ce.A], () => ce.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, d6.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: s,
            claimedOutboundPromotionCodeMap: r,
        } = (0, dL.y7)(),
        a = n.find((e) => e.giftCodeBatchId === tJ.FB && !e.consumed),
        o = n.filter((e) => e.giftCodeBatchId === tJ.Bu && !e.consumed) ?? [],
        [u, d] = K().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === tJ.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = l.length + s.length > 0,
        g =
            t || !c
                ? null
                : (0, f.jsxs)("div", {
                      className: cv.N1,
                      children: [
                          (0, f.jsx)(N.D, { variant: "heading-sm/semibold", children: V.intl.string(V.t.wFsj3B) }),
                          (0, f.jsx)(ls.c, { className: cv.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, f.jsxs)("div", {
                      className: cv.uo,
                      children: [
                          (0, f.jsx)(au.NitroWheelIcon, {
                              size: "md",
                              color: n1.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: cv.PC,
                          }),
                          (0, f.jsx)(n5.E, {
                              variant: "body-md/normal",
                              className: cv.Qw,
                              children: V.intl.format(V.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tH.default)(), (0, d9.pX)(_.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, f.jsx)(d8.A, {
                              showGradient: !0,
                              className: cv.aA,
                              subscriptionTier: tJ.pe.TIER_2,
                              textOptions: { textOverride: V.intl.string(V.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, f.jsxs)("div", {
        children: [
            g,
            (0, f.jsx)(d7.A, {
                className: cv.Yj,
                isShown: !1 === i && c,
                type: d7.i.PREMIUM,
                hasBackground: !0,
                children: (0, f.jsxs)("div", {
                    className: cv.DE,
                    children: [
                        m,
                        s.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, f.jsx)(cj, { outboundPromotion: n, code: t }, n.id);
                        }),
                        l.map((e) => (0, f.jsx)(cj, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, f.jsx)(
                                  cp,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: tJ.FB,
                                  },
                                  (0, ct.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, f.jsx)(
                                  cp,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: tJ.Bu,
                                  },
                                  (0, ct.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, f.jsx)(
                                  cp,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: tJ.Bu,
                                  },
                                  (0, ct.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let cR = (0, h.zZ)(S.X.MY_GIFTS_CATEGORY, {
        useTitle: cL,
        buildLayout: () => [cD],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, I.cf)(
                    [d4.A],
                    () => ({
                        claimedOutboundPromotionCodes: d4.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: d4.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, dL.T1)({ includeClaimedPromotions: !0 }),
                i = (0, d5.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    cD = (0, h.E2)(S.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [cL()],
        Component: () => (0, f.jsx)(cO, { redesign: !0 }),
    });
function cL() {
    return V.intl.string(V.t.YzjdWJ);
}
var cP = n(339048),
    cG = (((o = {}).GIFT_INVENTORY = "gift_inventory"), o),
    cM = n(183636),
    cU = n(739508);
function cV() {
    var e, t;
    let n,
        i,
        l = (0, I.yK)([ce.A], () => ce.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        s = K().groupBy(l, (e) => (0, ct.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [r, a] = x.useState(!1);
    if (
        (x.useEffect(() => {
            (0, cP.XJ)().then(() => a(!0));
        }, []),
        (e = cG.GIFT_INVENTORY),
        (t = !r),
        (n = x.useRef(null)),
        (i = x.useRef(!1)),
        x.useEffect(() => {
            if (i.current) return;
            if (!t) {
                i.current = !0;
                return;
            }
            n.current ??= performance.now();
            let l = setTimeout(
                () => {
                    ((i.current = !0),
                        "focused" === cM.A.getState() &&
                            (0, cU.pM)(Error(`${e} load timed out`), {
                                tags: {
                                    ...void 0,
                                    source: "smag_screen_load",
                                    billing_context: (function (e) {
                                        if ("gift_inventory" === e) return "gifting";
                                    })(e),
                                    surface: e,
                                },
                            }));
                },
                Math.max(0, 1e4 - (performance.now() - n.current)),
            );
            return () => clearTimeout(l);
        }, [e, t, void 0]),
        !r)
    )
        return (0, f.jsx)(oj.y, { className: cv.Lq });
    if (0 === Object.keys(s).length)
        return (0, f.jsxs)("div", {
            className: cv.p$,
            children: [
                (0, f.jsx)(uV.H, { className: cv.ks, children: V.intl.string(V.t.B1qgZn) }),
                (0, f.jsx)("p", {
                    className: cv.WO,
                    children: V.intl.format(V.t.HezvJ8, {
                        onClick: function () {
                            (0, na.openUserSettings)(S.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let o = K()
        .keys(s)
        .map((e) => {
            let { skuId: t, subscriptionPlanId: n, giftStyle: i } = (0, ct.X6)(e);
            return (0, f.jsx)(cp, { skuId: t, subscriptionPlanId: n, entitlements: s[e], giftStyle: i }, e);
        });
    return (0, f.jsx)(q.B, { gap: "lg", children: o });
}
let ck = (0, h.zZ)(S.X.PURCHASED_GIFTS_CATEGORY, { useTitle: cF, buildLayout: () => [cw] }),
    cw = (0, h.E2)(S.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [cF()], Component: () => (0, f.jsx)(cV, {}) });
function cF() {
    return V.intl.string(V.t.FWe6CP);
}
var cB = n(532446),
    cX = n(499454);
class cz extends x.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: _.ZSU.BUTTON_CTA };
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
                    (await (0, oM.Qp)(n),
                        (0, oM.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, oO.A)(),
                        }),
                        this.setState({ codeInput: "" }));
                    return;
                } catch {}
            let e = (0, ct.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await ci.Ay.resolveGiftCode(e);
            if (null != i && null != i.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            (td.default.track(_.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: _.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: _.ZSU.BUTTON_CTA,
                },
            }),
                (0, cX.h)({ processedCode: e }),
                this.setState({ codeInput: "" }));
        } catch (e) {
            this.setState({ hasError: !0 });
        } finally {
            this.setState({ submitting: !1 });
        }
    };
    render() {
        let { redesign: e, obscureInput: t } = this.props,
            { codeInput: n, submitting: i, hasError: l, isPromoCode: s } = this.state,
            r = e ? V.intl.string(V.t["hVEn/j"]) : V.intl.string(V.t.SeKIoS),
            a = e ? V.intl.string(V.t.epHMtp) : void 0;
        return (0, f.jsx)(n3.n, {
            label: e ? void 0 : V.intl.string(V.t["il+VCo"]),
            children: (0, f.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, f.jsxs)(cB.M, {
                    children: [
                        (0, f.jsx)(lf.k, {
                            label: r,
                            description: a,
                            type: t ? "password" : "text",
                            value: n,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !s && l ? V.intl.string(V.t.Y11a2u) : null,
                            helperText: s
                                ? V.intl.format(V.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${n}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, f.jsx)(j.$, {
                            variant: "primary",
                            text: V.intl.string(V.t.KIpp7M),
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
function cH(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, un.c)({ location: "UserSettingsBilling" }),
        i = x.useContext(td.Ig),
        l = (0, I.bG)([tu.A], () => tu.A.enabled);
    return (0, f.jsx)(cz, { analyticsContext: i, obscureInput: l, acceptGiftCardRedemption: n, redesign: t });
}
let cY = (0, h.zZ)(S.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => V.intl.string(V.t["il+VCo"]),
        buildLayout: () => [cW],
        usePredicate: () => !(0, dP.Hp)(),
    }),
    cW = (0, h.E2)(S.X.REDEEM_CODE_INPUT, {
        Component: () => (0, f.jsx)(cH, { redesign: !0 }),
        useSearchTerms: () => [V.intl.string(V.t["jcSP+g"]), V.intl.string(V.t["il+VCo"])],
    }),
    cK = (0, h.t_)(S.X.GIFT_PANEL, {
        useTitle: () => V.intl.string(V.t["jcSP+g"]),
        buildLayout: () => [dz, cY, cR, d2, ck, dM],
        initialize: () => {
            (dD.Ay.fetchClaimedOutboundPromotionCodes(), (0, dR.Ig)("gift_inventory") && (0, dN.o0)(db.$.GIFTING));
        },
    }),
    cZ = (0, h.i4)(S.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["jcSP+g"]),
        icon: uP.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, dL.IO)().length;
            return x.useMemo(() => ({ badgeType: p.Xi.COUNT, count: e }), [e]);
        },
        getDismissibleBadges: () => {
            let e = { location: "UserSettingsGiftInventory" },
                t = un.A.getConfig(e).enabled,
                n = dO.A.getConfig(e).enabled,
                i = dj(sE.default.getCurrentUser()?.storeCountry?.country).length > 0;
            return t && n && i
                ? [{ badgeType: p.Xi.NEW, dismissibleContent: eE.M.GIFT_INVENTORY_SETTINGS_NEW_BADGE }]
                : [];
        },
        buildLayout: () => [cK],
    });
var cq = n(659758),
    cQ = n(302168),
    cJ = n(877624),
    c$ = n(831259),
    c0 = n(462887),
    c1 = n(43990),
    c2 = n(73825),
    c3 = n(531260),
    c5 = n(160946),
    c4 = n(721668),
    c6 = n(224016),
    c8 = n(526292),
    c7 = n(881489),
    c9 = n(300349),
    ge = n(106512),
    gt = n(175020),
    gn = n(403227),
    gi = n(812537),
    gl = n(103411),
    gs = n(190187),
    gr = n(930861),
    ga = n(854627),
    go = n(619019),
    gu = n(326084),
    gd = n(851746),
    gc = n(664654),
    gg = n(610709),
    gm = n(912140),
    gA = n(953727);
let gE = (e) => {
        let { className: t, backgroundColor: n, backgroundCircleSize: i, ...l } = e;
        return (0, f.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, gA.A)({ ...l }),
            children: [
                (0, f.jsx)("circle", { r: i ?? "40%", cx: "50%", cy: "50%", className: n }),
                (0, f.jsxs)("g", {
                    transform: "translate(50, 50) scale(0.6) translate(-51, -52)",
                    children: [
                        (0, f.jsx)("path", {
                            d: "M52.0002 11.7556L28.3402 35.4156V68.6956L52.0002 92.3556L75.6602 68.6956V35.4156L52.0002 11.7556ZM63.8302 63.7556L52.0002 75.6289L40.1702 63.7989V40.3122L52.0002 28.4822L63.8302 40.3122V63.7556Z",
                            fill: "#FF6BFA",
                            className: t,
                        }),
                        (0, f.jsx)("path", {
                            d: "M40.1702 40.3122V63.7989L52.0002 75.6289L63.8302 63.7989V40.3122L52.0002 28.4822L40.1702 40.3122Z",
                            fill: "#FFDEF9",
                        }),
                        (0, f.jsx)("path", {
                            d: "M52.0002 11.7556V28.4822L63.8302 40.3122L75.6602 35.4156L52.0002 11.7556Z",
                            fill: "#FFB0FF",
                        }),
                    ],
                }),
            ],
        });
    },
    gh = (e) => {
        let { ellipseOpacity: t, circleColor: n, ...i } = e,
            l = (0, cx.Ay)(),
            s = (0, c0.q)(l),
            r = null != n ? n : s ? "url(#paint0_linear_1055_83268)" : "url(#paint0_linear_1282_11557)";
        return (0, f.jsxs)("svg", {
            style: { overflow: "visible" },
            width: "80%",
            height: "80%",
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, gA.A)({ ...i }),
            children: [
                (0, f.jsxs)("svg", {
                    width: "100",
                    height: "100",
                    viewBox: "0 0 114 114",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, f.jsxs)("defs", {
                            children: [
                                (0, f.jsxs)("linearGradient", {
                                    id: "purple-gradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0%",
                                    children: [
                                        (0, f.jsx)("stop", {
                                            offset: "0%",
                                            style: { stopColor: "#E2C7FA", stopOpacity: 1 },
                                        }),
                                        (0, f.jsx)("stop", {
                                            offset: "100%",
                                            style: { stopColor: "#F3D3DE", stopOpacity: 1 },
                                        }),
                                    ],
                                }),
                                (0, f.jsxs)("linearGradient", {
                                    id: "dark-purple-gradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "0%",
                                    y2: "100%",
                                    children: [
                                        (0, f.jsx)("stop", {
                                            offset: "0%",
                                            style: { stopColor: "rgb(36,23,49)", stopOpacity: 1 },
                                        }),
                                        (0, f.jsx)("stop", {
                                            offset: "100%",
                                            style: { stopColor: "rgb(36,23,49)", stopOpacity: 1 },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, f.jsx)("ellipse", {
                            cx: "57.2768",
                            cy: "57.0796",
                            rx: "56.3726",
                            ry: "56.3726",
                            fill: null != n ? n : r,
                            fillOpacity: null != t ? t : s ? 0.5 : 0.2,
                        }),
                        (0, f.jsxs)("g", {
                            width: "65",
                            transform: "translate(50, 50) scale(.7) translate(-10, -39)",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                (0, f.jsx)("path", {
                                    d: "M42.0084 14.8866L33.7687 17.7832C33.3446 17.9281 32.9766 18.2015 32.7161 18.565C32.4555 18.9285 32.3154 19.3641 32.3154 19.8109C32.3154 20.2576 32.4555 20.6932 32.7161 21.0567C32.9766 21.4203 33.3446 21.6936 33.7687 21.8385L42.0084 24.7351C42.3147 24.8404 42.593 25.0138 42.8221 25.2422C43.0512 25.4705 43.2252 25.7478 43.3309 26.053L46.2373 34.2649C46.3827 34.6875 46.657 35.0543 47.0217 35.3139C47.3865 35.5736 47.8236 35.7132 48.2718 35.7132C48.7201 35.7132 49.1572 35.5736 49.522 35.3139C49.8867 35.0543 50.161 34.6875 50.3064 34.2649L53.2128 26.053C53.3204 25.7488 53.495 25.4725 53.7239 25.2444C53.9528 25.0164 54.23 24.8423 54.5353 24.7351L62.7896 21.8385C63.2136 21.6936 63.5817 21.4203 63.8422 21.0567C64.1028 20.6932 64.2428 20.2576 64.2428 19.8109C64.2428 19.3641 64.1028 18.9285 63.8422 18.565C63.5817 18.2015 63.2136 17.9281 62.7896 17.7832L54.5353 14.8866C54.2315 14.7767 53.9557 14.6018 53.7272 14.374C53.4987 14.1463 53.3231 13.8714 53.2128 13.5687L50.3064 5.34234C50.161 4.91974 49.8867 4.55297 49.522 4.2933C49.1572 4.03363 48.7201 3.89404 48.2718 3.89404C47.8236 3.89404 47.3865 4.03363 47.0217 4.2933C46.657 4.55297 46.3827 4.91974 46.2373 5.34234L43.3309 13.5687C43.2233 13.8729 43.0487 14.1492 42.8198 14.3773C42.591 14.6054 42.3137 14.7794 42.0084 14.8866Z",
                                    fill: "white",
                                    fillOpacity: s ? "0.6" : "0.4",
                                }),
                                (0, f.jsx)("path", {
                                    d: "M34.0878 3.57968L33.0393 0.634802C32.9888 0.483384 32.8917 0.351665 32.7618 0.258321C32.6319 0.164978 32.4759 0.114746 32.3158 0.114746C32.1556 0.114746 31.9996 0.164978 31.8697 0.258321C31.7398 0.351665 31.6427 0.483384 31.5922 0.634802L30.6217 3.57968C30.5838 3.68745 30.5221 3.78534 30.4411 3.86607C30.3601 3.94681 30.2619 4.00831 30.1538 4.04602L27.1555 5.02189C27.0067 5.07415 26.8777 5.17117 26.7865 5.29956C26.6953 5.42795 26.6464 5.58137 26.6464 5.73868C26.6464 5.89598 26.6953 6.04941 26.7865 6.17779C26.8777 6.30618 27.0067 6.4032 27.1555 6.45547L30.0758 7.47451C30.1839 7.51222 30.2821 7.57373 30.3631 7.65446C30.4441 7.7352 30.5059 7.83308 30.5437 7.94085L31.5575 10.8426C31.6081 10.994 31.7052 11.1257 31.835 11.219C31.9649 11.3124 32.121 11.3626 32.2811 11.3626C32.4412 11.3626 32.5973 11.3124 32.7271 11.219C32.857 11.1257 32.9541 10.994 33.0047 10.8426L34.0878 7.94085C34.1257 7.83308 34.1874 7.7352 34.2684 7.65446C34.3494 7.57373 34.4476 7.51222 34.5558 7.47451L37.476 6.45547C37.6249 6.4032 37.7538 6.30618 37.845 6.17779C37.9362 6.04941 37.9852 5.89598 37.9852 5.73868C37.9852 5.58137 37.9362 5.42795 37.845 5.29956C37.7538 5.17117 37.6249 5.07415 37.476 5.02189L34.5211 4.00284C34.4237 3.9656 34.3349 3.90883 34.2604 3.83604C34.1859 3.76326 34.1271 3.676 34.0878 3.57968Z",
                                    fill: "white",
                                    fillOpacity: "0.8",
                                }),
                            ],
                        }),
                    ],
                }),
                (0, f.jsxs)("defs", {
                    children: [
                        (0, f.jsxs)("filter", {
                            id: "filter0_d_1282_11577",
                            x: "-6.55945",
                            y: "0.382812",
                            width: "89.2926",
                            height: "70.3945",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                (0, f.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                (0, f.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha",
                                }),
                                (0, f.jsx)("feOffset", { dy: "4" }),
                                (0, f.jsx)("feGaussianBlur", { stdDeviation: "5" }),
                                (0, f.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
                                (0, f.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
                                }),
                                (0, f.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1282_11577",
                                }),
                                (0, f.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_1282_11577",
                                    result: "shape",
                                }),
                            ],
                        }),
                        (0, f.jsxs)("linearGradient", {
                            id: "paint0_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, f.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, f.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, f.jsxs)("linearGradient", {
                            id: "paint2_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, f.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, f.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, f.jsxs)("linearGradient", {
                            id: "paint1_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, f.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, f.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, f.jsxs)("linearGradient", {
                            id: "paint1_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, f.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, f.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, f.jsxs)("linearGradient", {
                            id: "paint2_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, f.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, f.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, f.jsxs)("linearGradient", {
                            id: "paint0_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, f.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, f.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, f.jsxs)("linearGradient", {
                            id: "paint0_linear_1282_11557",
                            x1: "0.904297",
                            y1: "56.5004",
                            x2: "113.649",
                            y2: "56.5004",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, f.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, f.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, f.jsxs)("linearGradient", {
                            id: "paint0_linear_684_72736",
                            x1: "0.904236",
                            y1: "57.0796",
                            x2: "113.649",
                            y2: "57.0796",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, f.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, f.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, f.jsxs)("linearGradient", {
                            id: "paint0_linear_1055_83179",
                            x1: "0.904236",
                            y1: "56.5005",
                            x2: "113.649",
                            y2: "56.5005",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, f.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, f.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, f.jsxs)("linearGradient", {
                            id: "paint0_linear_1055_83268",
                            x1: "0.904236",
                            y1: "57.2461",
                            x2: "113.649",
                            y2: "57.2461",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, f.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, f.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                    ],
                }),
                (0, f.jsxs)("g", {
                    filter: s ? void 0 : "url(#filter0_d_1282_11577)",
                    transform: "translate(50, 50) scale(.8) translate(-44, -30)",
                    children: [
                        (0, f.jsx)("path", {
                            d: "M47.5359 37.8795C51.0149 37.8795 53.8352 35.0592 53.8352 31.5801C53.8352 28.1011 51.0149 25.2808 47.5359 25.2808C44.0568 25.2808 41.2365 28.1011 41.2365 31.5801C41.2365 35.0592 44.0568 37.8795 47.5359 37.8795Z",
                            fill: s ? "url(#paint2_linear_1986_8686)" : "url(#paint0_linear_1282_11577)",
                        }),
                        (0, f.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.3385 6.38281C20.599 6.38281 19.1889 7.79297 19.1889 9.53248C19.1889 11.272 20.599 12.6821 22.3385 12.6821H31.7875C33.527 12.6821 34.9372 14.0923 34.9372 15.8318C34.9372 17.5713 33.527 18.9815 31.7875 18.9815L17.614 18.9815C15.8745 18.9815 14.4644 20.3916 14.4644 22.1311C14.4644 23.8706 15.8745 25.2808 17.614 25.2808L25.4882 25.2808C27.2277 25.2808 28.6379 26.691 28.6379 28.4305C28.6379 30.17 27.2277 31.5801 25.4882 31.5801H19.1889C17.4494 31.5801 16.0392 32.9903 16.0392 34.7298C16.0392 36.4693 17.4494 37.8795 19.1889 37.8795H23.1324C25.9295 48.7472 35.7949 56.7774 47.5359 56.7774C61.4519 56.7774 72.7332 45.4962 72.7332 31.5801C72.7332 17.664 61.4519 6.38281 47.5359 6.38281H22.3385ZM47.5359 44.1788C54.4939 44.1788 60.1345 38.5382 60.1345 31.5801C60.1345 24.6221 54.4939 18.9815 47.5359 18.9815C40.5778 18.9815 34.9372 24.6221 34.9372 31.5801C34.9372 38.5382 40.5778 44.1788 47.5359 44.1788Z",
                            fill: s ? "url(#paint1_linear_1986_8686)" : "url(#paint1_linear_1282_11577)",
                        }),
                        (0, f.jsx)("path", {
                            d: "M8.16505 25.2808C9.90456 25.2808 11.3147 23.8706 11.3147 22.1311C11.3147 20.3916 9.90456 18.9815 8.16505 18.9815H6.59022C4.8507 18.9815 3.44055 20.3916 3.44055 22.1311C3.44055 23.8706 4.8507 25.2808 6.59022 25.2808H8.16505Z",
                            fill: s ? "url(#paint0_linear_1986_8686)" : "url(#paint2_linear_1282_11577)",
                        }),
                    ],
                }),
                (0, f.jsx)("g", {
                    width: "65",
                    transform: "translate(50, 50) scale(0.81) translate(-26, -42)",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, f.jsx)("path", {
                        d: "M12.6686 60.7298L10.9101 55.7911C10.8254 55.5372 10.6626 55.3163 10.4448 55.1597C10.227 55.0032 9.96524 54.9189 9.69671 54.9189C9.42818 54.9189 9.16646 55.0032 8.94866 55.1597C8.73086 55.3163 8.56804 55.5372 8.48326 55.7911L6.85565 60.7298C6.7922 60.9105 6.6887 61.0747 6.55284 61.2101C6.41699 61.3455 6.25226 61.4487 6.07091 61.5119L1.04275 63.1485C0.793091 63.2361 0.576874 63.3988 0.423928 63.6141C0.270981 63.8294 0.188843 64.0868 0.188843 64.3506C0.188843 64.6144 0.270981 64.8717 0.423928 65.087C0.576874 65.3023 0.793091 65.465 1.04275 65.5527L5.94012 67.2616C6.12147 67.3249 6.2862 67.428 6.42205 67.5634C6.55791 67.6988 6.66141 67.863 6.72486 68.0437L8.42513 72.91C8.50991 73.1639 8.67273 73.3848 8.89053 73.5414C9.10833 73.6979 9.37005 73.7822 9.63858 73.7822C9.90711 73.7822 10.1688 73.6979 10.3866 73.5414C10.6044 73.3848 10.7672 73.1639 10.852 72.91L12.6686 68.0437C12.732 67.863 12.8355 67.6988 12.9714 67.5634C13.1072 67.428 13.2719 67.3249 13.4533 67.2616L18.3507 65.5527C18.6003 65.465 18.8165 65.3023 18.9695 65.087C19.1224 64.8717 19.2046 64.6144 19.2046 64.3506C19.2046 64.0868 19.1224 63.8294 18.9695 63.6141C18.8165 63.3988 18.6003 63.2361 18.3507 63.1485L13.3952 61.4395C13.2318 61.377 13.083 61.2818 12.958 61.1598C12.833 61.0377 12.7345 60.8914 12.6686 60.7298Z",
                        fill: "white",
                        fillOpacity: "0.8",
                    }),
                }),
            ],
        });
    };
var gS = n(387316),
    gT =
        (((u = {})[(u.NITRO_GEM = 0)] = "NITRO_GEM"),
        (u[(u.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (u[(u.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        u);
let gp = "url(#gradient)",
    gf = (e) => {
        let {
                percentage: t = 0,
                children: n,
                animationClassName: i,
                initialPercentage: l = 0,
                progressCircleStrokeSize: s = 2,
                progressCircleVariation: r,
                progressCircleStroke: a,
            } = e,
            o = 43 + s / 2,
            u = 2 * Math.PI * o,
            [d, c] = x.useState(l);
        x.useEffect(() => {
            let e = setTimeout(() => {
                c(t);
            }, 200);
            return () => clearTimeout(e);
        }, [t]);
        let g = (0, cx.Ay)(),
            m = (0, c0.q)(g),
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
                            return gp;
                        case 1:
                            return e ? "url(#gradient_nitro_logo)" : gp;
                        default:
                            return;
                    }
                })(m, r);
        return (0, f.jsxs)("div", {
            className: gS.Ap,
            children: [
                (0, f.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: gS.fB,
                    children: [
                        (0, f.jsx)("circle", {
                            className: 0 === r || 2 === r ? gS.F3 : void 0,
                            fill: "transparent",
                            strokeWidth: s,
                            r: `${o}`,
                            cx: "50%",
                            cy: "50%",
                            stroke: A,
                            strokeOpacity: E,
                        }),
                        (0, f.jsx)("circle", {
                            stroke: h,
                            strokeWidth: s,
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
                (0, f.jsxs)("svg", {
                    width: "0",
                    height: "0",
                    children: [
                        (0, f.jsxs)("linearGradient", {
                            id: "gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [
                                (0, f.jsx)("stop", { offset: "0%", style: { stopColor: "#FFBDF2" } }),
                                (0, f.jsx)("stop", { offset: "100%", style: { stopColor: "#E742E1" } }),
                            ],
                        }),
                        (0, f.jsxs)("linearGradient", {
                            id: "gradient_nitro_logo",
                            x1: "2.99995",
                            y1: "67.6298",
                            x2: "132.55",
                            y2: "67.6298",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, f.jsx)("stop", { stopColor: "#F9A0E8" }),
                                (0, f.jsx)("stop", { offset: "1", stopColor: "#E742E1" }),
                            ],
                        }),
                        (0, f.jsxs)("linearGradient", {
                            id: "dark-purple-gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                (0, f.jsx)("stop", { offset: "0%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                                (0, f.jsx)("stop", { offset: "100%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                            ],
                        }),
                    ],
                }),
                (0, f.jsx)("div", { className: gS.Vw, children: n }),
            ],
        });
    };
var gx = n(104773);
function gI(e) {
    let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
        l = x.useMemo(() => (0, gm.A)({ legacyAssetId: t, skuId: n, size: v._3.SIZE_120, canAnimate: !1 }), [t, n]);
    return (0, f.jsx)("div", {
        className: gx.Q7,
        children: (0, f.jsx)("div", {
            className: gx.Nk,
            children: null != l && (0, f.jsx)("img", { className: gx.CH, alt: i, src: l }),
        }),
    });
}
let g_ = function (e) {
    let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: l,
            progressCircleStrokeSize: s,
            backgroundCircleSize: r,
            percentage: a,
            initialPercentage: o,
            progressCircleVariation: u = gT.NITRO_GEM,
            avatarDecorationLegacyAssetId: d,
            avatarDecorationSkuId: c,
            avatarDecoAssetDescription: g,
            ellipseOpacity: m,
            customAnimationClassName: A,
            circleColor: E,
            circleStroke: h,
        } = e,
        S = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion),
        T = t && !S;
    return (0, f.jsx)("div", {
        className: ic()(gx.G3, n),
        children: (0, f.jsx)(gf, {
            animationClassName: ic()(gx._0, { [gx.uJ]: T, [A ?? ""]: T }),
            progressCircleStroke: h,
            progressCircleStrokeSize: s,
            percentage: i ?? a,
            initialPercentage: i ?? o,
            progressCircleVariation: u,
            children: (function () {
                switch (u) {
                    case gT.NITRO_GEM:
                        return (0, f.jsx)(gE, {
                            className: T ? gx.Ow : void 0,
                            backgroundColor: ic()(gx.vH, l),
                            backgroundCircleSize: r,
                        });
                    case gT.NITRO_LOGO:
                        return (0, f.jsx)(gh, { circleColor: E, ellipseOpacity: m });
                    case gT.AVATAR_DECO:
                        if (null != c)
                            return (0, f.jsx)(gI, {
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
function gb(e) {
    let { hasSentAll: t } = e;
    return V.intl.string(V.t.USo4s7);
}
function gN(e) {
    let { helpdeskArticle: t, referralsStatuses: n } = e;
    return (function (e) {
        let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
        return t
            ? V.intl.format(V.t["TYu+MH"], { helpdeskArticle: i })
            : V.intl.format(V.t["omMr+V"], { helpdeskArticle: i });
    })({ hasSentAll: n.sent >= 3, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
}
var gC = n(14313);
function gy(e) {
    let { userRecord: t, placement: n } = e,
        { avatarSrc: i, eventHandlers: l } = (0, ga.A)({ userId: t?.id, size: v._3.SIZE_32, animateOnHover: !0 }),
        s = null != t,
        r = s
            ? (0, f.jsx)(y.eu, { src: i, "aria-label": t.username, size: v._3.SIZE_32, ...l })
            : (0, f.jsx)(N.D, { variant: "heading-sm/semibold", className: gC.n5, children: n });
    return (0, f.jsx)(lg.m, {
        text: V.intl.string(V.t.UnKHdo),
        shouldShow: !s,
        children: (0, f.jsx)("div", { className: gC.Lg, children: r }),
    });
}
function gv(e) {
    let { numSentReferrals: t, placement: n } = e;
    return (0, f.jsxs)("div", {
        className: gC.Ip,
        children: [
            (0, f.jsx)("div", { className: gC.Ej }),
            (0, f.jsx)("div", { className: ic()({ [gC.ch]: t > n, [gC.q_]: t === n }) }),
        ],
    });
}
function gj(e) {
    let { userRecords: t } = e,
        n = t.length,
        i = n < 1 ? null : t[0],
        l = n < 2 ? null : t[1],
        s = n < 3 ? null : t[2];
    return (0, f.jsxs)("div", {
        className: gC.ZM,
        children: [
            (0, f.jsx)(gy, { userRecord: i, placement: 1 }),
            (0, f.jsx)(gv, { numSentReferrals: n, placement: 1 }),
            (0, f.jsx)(gy, { userRecord: l, placement: 2 }),
            (0, f.jsx)(gv, { numSentReferrals: n, placement: 2 }),
            (0, f.jsx)(gy, { userRecord: s, placement: 3 }),
        ],
    });
}
function gO(e) {
    let { analyticsLocations: t } = e;
    (td.default.track(_.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
        (0, lp.mM)(async () => {
            let { default: e } = await Promise.all([n.e(647658), n.e(228304)]).then(n.bind(n, 581846));
            return (n) => (0, f.jsx)(e, { ...n, sourceAnalyticsLocations: t });
        }));
}
let gR = function (e) {
    let { variant: t = "default" } = e,
        n = (0, I.bG)([gd.A], () => gd.A.getRecipientStatus()),
        { referralSentUsers: i } = (0, gc.J)(),
        l = x.useMemo(() => i.map((e) => new go.A(e)), [i]),
        s = { redeemed: 0, converted: 0, sent: n.size };
    n.forEach((e) => {
        (e === gu.aK.REDEEMED && s.redeemed++, e === gu.aK.CONVERTED && (s.redeemed++, s.converted++));
    });
    let r = 3 === s.sent,
        a = eC.A.getArticleURL(_.MVz.REFERRAL_PROGRAM),
        { analyticsLocations: o } = (0, ez.Ay)(tk.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        u = x.useRef(null),
        d = (s.sent / 3) * 100;
    if ("settings" === t)
        return (0, f.jsx)(ez.f5, {
            value: o,
            children: (0, f.jsxs)("div", {
                className: gC.W0,
                children: [
                    (0, f.jsx)("div", {
                        className: gC.xh,
                        children: (0, f.jsx)(gg.fx, { nReferralsSent: s.sent, imageSize: 56 }),
                    }),
                    (0, f.jsxs)("div", {
                        className: gC.z1,
                        children: [
                            (0, f.jsx)(N.D, { variant: "heading-lg/semibold", children: gb({ hasSentAll: r }) }),
                            (0, f.jsx)(n5.E, {
                                variant: "body-sm/normal",
                                children: gN({ helpdeskArticle: a, referralsStatuses: s }),
                            }),
                            (0, f.jsx)(gg.ZP, { referralSentUsers: l, className: gC.D1 }),
                        ],
                    }),
                    (0, f.jsx)(j.$, {
                        variant: "expressive",
                        text: V.intl.string(r ? V.t.SY9tyI : V.t.Lm2nFc),
                        onClick: () => gO({ analyticsLocations: o }),
                    }),
                ],
            }),
        });
    let c = (0, f.jsxs)("div", {
            className: gC.hE,
            children: [
                (0, f.jsx)(g_, { percentage: d, progressCircleVariation: gT.NITRO_LOGO, iconClassName: gC.ER }),
                (0, f.jsxs)("div", {
                    className: gC.Ns,
                    children: [
                        (0, f.jsx)(N.D, {
                            variant: "heading-xl/semibold",
                            className: gC.R0,
                            children: gb({ hasSentAll: r }),
                        }),
                        (0, f.jsx)(gj, { userRecords: l }),
                        (0, f.jsx)(n5.E, {
                            variant: "body-sm/normal",
                            children: gN({ helpdeskArticle: a, referralsStatuses: s }),
                        }),
                        (0, f.jsx)("div", {
                            className: gC.Fb,
                            children: (0, f.jsx)(gr.wL, {
                                "data-migration-pending": !0,
                                className: gC.r$,
                                color: s2.XD.CUSTOM,
                                onClick: () => gO({ analyticsLocations: o }),
                                onlyShineOnHover: !0,
                                children: (0, f.jsxs)("div", {
                                    className: gC.Zn,
                                    children: [
                                        (0, f.jsx)("img", {
                                            src: "/assets/3b9b1649f78941df.svg",
                                            alt: "",
                                            className: gC.QH,
                                        }),
                                        r ? V.intl.string(V.t.SY9tyI) : V.intl.string(V.t.Lm2nFc),
                                    ],
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        }),
        g = 3 === s.redeemed;
    return (0, f.jsx)(ez.f5, {
        value: o,
        children: (0, f.jsx)("div", {
            className: ic()(gC.kL, { [gC.AP]: g }),
            children: (0, f.jsx)("div", { ref: u, className: ic()(gC.d_, { [gC.kS]: g }), children: c }),
        }),
    });
};
var gD = n(194509),
    gL = n(465794),
    gP = n(774774),
    gG = n(156601),
    gM = n(543213),
    gU = n(88001),
    gV = n(107198),
    gk = n(487518),
    gw = n(956537),
    gF = n(185062);
let gB = "to_premium_home_button",
    gX = "premium home page";
function gz(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: l } = e,
        { enabled: s } = c9.A.useConfig({ location: "PremiumManagementSettings" }),
        r = t.hasActiveTrial,
        a = t.planIdFromItems === tJ.gD.PREMIUM_YEAR_TIER_2,
        o = t.hasAnyPremiumGroup,
        u = (0, c3.A)(),
        d = null != t.trialEndsAt ? im()(t.trialEndsAt).diff(im()(), "d") : 0,
        c = tJ.hd[t.planIdFromItems],
        g = ax.Ay.getDefaultPrice(c.id),
        m = ax.Ay.formatPriceString(g, c.interval);
    if (n || r) {
        let e = (0, c0.M)(l) ? gP.at.PREMIUM_TIER_2_WHITE_FILL : gP.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                !r && (a || o)
                    ? (0, f.jsx)(gP.e4, { text: V.intl.string(V.t.EyjDRE), className: gk.LW, colorOptions: e })
                    : (0, f.jsxs)(f.Fragment, {
                          children: [
                              (0, f.jsx)(gP.HU, {
                                  text: r ? V.intl.string(V.t.qYKftX) : V.intl.string(V.t.EyjDRE),
                                  className: gk.uS,
                                  colorOptions: e,
                              }),
                              (0, f.jsx)("div", { className: gk.on }),
                          ],
                      }),
                (0, f.jsx)(N.D, {
                    variant: "heading-sm/medium",
                    color: "text-overlay-light",
                    className: gk.KB,
                    children: (function () {
                        if (r) return V.intl.format(V.t["2CGBri"], { remainingTime: d, price: m });
                        if (o && null != i && t.metadata?.active_discount_expires_at != null) {
                            let e = (0, u5.$g)(g.amount, g.currency);
                            return V.intl.format(gV.default.FwjZzr, {
                                percent: i?.percentage ?? 0,
                                discountEndDate: new Date(t.metadata.active_discount_expires_at),
                                regularPrice: e,
                            });
                        }
                        return a
                            ? V.intl.format(V.t.z2oQtA, {
                                  percent: i?.percentage ?? 20,
                                  regularPrice: m,
                                  renewalDate: ax.Ay.getExpectedRenewalDate(t, u),
                              })
                            : V.intl.formatToPlainString(V.t["3ZiutU"], {
                                  percent: i?.percentage ?? 30,
                                  regularPrice: m,
                                  numMonths: i?.duration ?? 1,
                              });
                    })(),
                }),
            ],
        });
    }
    return (0, f.jsx)(gG.A, {
        variant: s ? "body-sm/medium" : void 0,
        className: s ? gk.rf : void 0,
        subscriptionTier: tJ.pe.TIER_2,
        interval: c.interval,
    });
}
function gH() {
    let { enabled: e } = c9.A.useConfig({ location: "PremiumManagementSettings" }),
        t = (0, c8.k5)(),
        n = (0, c8.nf)(),
        i = (0, cx.Ay)(),
        l = (0, I.bG)([ul.A], () => ul.A.getPremiumTypeSubscription()),
        s = (0, I.bG)([sE.default], () => sE.default.getCurrentUser()),
        r = s?.isPremiumWithPremiumGroup(),
        a = (0, c3.A)(),
        o = (0, c7.ds)(),
        u = null !== l && null !== l.planIdFromItems;
    if (!u && !a.isFractionalPremiumActive && !r) return null;
    let d = a.isFractionalPremiumActive,
        c = null !== l && l.hasActiveTrial,
        g = (0, f.jsx)(gM.ZP, {
            featureSet: s?.isPremiumGroupPrimary()
                ? gM.Nz.PREMIUM_GROUP_PRIMARY
                : s?.isPremiumGroupMember()
                  ? gM.Nz.PREMIUM_GROUP_MEMBER
                  : d
                    ? gM.Nz.FRACTIONAL_PREMIUM
                    : gM.Nz.DEFAULT,
            enablePremiumBrandRefresh: e,
            textVariant: e ? "body-sm/medium" : void 0,
        });
    return (0, f.jsxs)("div", {
        className: ic()(gk.$Y, { [gk.J5]: t || c, [gk.gd]: e }),
        children: [
            (0, f.jsxs)("div", {
                className: gk.jp,
                children: [
                    r
                        ? (0, f.jsx)(N.D, {
                              variant: "nitro-md",
                              color: "text-overlay-light",
                              className: gk._K,
                              children: (0, gU.DP)(),
                          })
                        : (0, f.jsx)(c6.A, { className: gk.TJ }),
                    r && !t
                        ? (0, f.jsx)("div", { style: { marginBottom: "6px" } })
                        : d && !o
                          ? (0, f.jsxs)(f.Fragment, {
                                children: [
                                    (0, f.jsx)(gP.e4, {
                                        text: V.intl.string(V.t.uXF4c4),
                                        className: gk.LW,
                                        colorOptions: gP.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, f.jsx)(N.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-overlay-light",
                                        className: gk.sQ,
                                        children: V.intl.format(V.t.sK7fGl, {
                                            helpCenterLink: eC.A.getArticleURL(_.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : u
                            ? (0, f.jsx)(gz, {
                                  premiumSubscription: l,
                                  isDiscountApplied: t,
                                  activeDiscountInfo: n,
                                  theme: i,
                              })
                            : o
                              ? (0, f.jsxs)(f.Fragment, {
                                    children: [
                                        (0, f.jsx)(gP.HU, {
                                            text: V.intl.string(V.t.qYKftX),
                                            className: gk.uS,
                                            colorOptions: (0, c0.M)(i)
                                                ? gP.at.PREMIUM_TIER_2_WHITE_FILL
                                                : gP.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, f.jsx)(N.D, {
                                            variant: "heading-sm/medium",
                                            color: "text-overlay-light",
                                            className: gk.KB,
                                            children: V.intl.format(V.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    e ? (0, f.jsx)(q.B, { direction: "vertical", gap: 12, className: gk.bY, children: g }) : g,
                    d && !u
                        ? (0, f.jsxs)(s5.e, {
                              fullWidth: !e,
                              direction: e ? "horizontal" : "vertical",
                              padding: { top: e ? 32 : 16 },
                              children: [
                                  (0, f.jsx)(gL.A, {
                                      defaultTextOverride: o ? V.intl.string(V.t.YScQSF) : V.intl.string(V.t["0b3YRn"]),
                                  }),
                                  (0, f.jsx)(j.$, {
                                      onClick: () => {
                                          (td.default.track(_.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gB,
                                              target: gX,
                                          }),
                                              (0, tH.default)(),
                                              (0, d9.pX)(_.BVt.APPLICATION_STORE));
                                      },
                                      variant: e ? "secondary" : "overlay-secondary",
                                      fullWidth: !e,
                                      size: "md",
                                      text: o ? V.intl.string(V.t.VR2iVB) : V.intl.string(V.t.T1aUAX),
                                  }),
                              ],
                          })
                        : (0, f.jsxs)(s5.e, {
                              fullWidth: !e,
                              direction: e ? "horizontal" : "vertical",
                              padding: { top: e ? 32 : 16 },
                              children: [
                                  (0, f.jsx)(j.$, {
                                      variant: "overlay-primary",
                                      fullWidth: !e,
                                      onClick: () => {
                                          (td.default.track(_.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gB,
                                              target: gX,
                                          }),
                                              (0, tH.default)(),
                                              (0, d9.pX)(_.BVt.APPLICATION_STORE));
                                      },
                                      text: V.intl.string(e ? V.t.rVjt5j : V.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, f.jsx)(j.$, {
                                      variant: e ? "secondary" : "overlay-secondary",
                                      onClick: () => {
                                          (td.default.track(_.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              (0, na.openUserSettings)(S.X.SUBSCRIPTIONS_PANEL));
                                      },
                                      text: V.intl.string(e ? V.t.FVEaqm : V.t["9uDy6C"]),
                                      fullWidth: !e,
                                      size: "md",
                                  }),
                              ],
                          }),
                ],
            }),
            (0, f.jsx)("div", {
                className: gk.ah,
                children: (0, f.jsx)("img", {
                    className: gk.ah,
                    alt: "",
                    src: e ? gF.A : "/assets/3aaa2c2d1874c196.svg",
                }),
            }),
        ],
    });
}
function gY() {
    let { enabled: e } = c9.A.useConfig({ location: "PremiumManagementSettings" });
    function t() {
        td.default.track(_.HAw.PREMIUM_SETTINGS_INTERACTED, { cta_type: "gifting_button", target: "payment modal" });
    }
    return e
        ? (0, f.jsx)(gt.A, {
              variant: "settings",
              location: tk.A.PREMIUM_SETTINGS,
              analyticsLocation: {},
              onGiftClick: t,
          })
        : (0, f.jsxs)("div", {
              className: gk.T1,
              children: [
                  (0, f.jsx)("img", { className: gk.GY, alt: "", src: gw }),
                  (0, f.jsxs)("div", {
                      className: gk.b4,
                      children: [
                          (0, f.jsx)(N.D, {
                              className: gk.Vz,
                              variant: "heading-xl/semibold",
                              children: V.intl.string(V.t["3KomGa"]),
                          }),
                          (0, f.jsx)(n5.E, {
                              className: gk.Oi,
                              variant: "body-sm/normal",
                              children: V.intl.string(V.t.yQ06u1),
                          }),
                          (0, f.jsx)(gD.A, {
                              className: ic()(gk.Tp, gk._c),
                              textOptions: { textOverride: V.intl.string(V.t.Ve9Ge6), textClassName: gk.VV },
                              color: s2.$n.Colors.CUSTOM,
                              onClick: t,
                          }),
                      ],
                  }),
              ],
          });
}
function gW(e) {
    let { premiumSubscription: t, giftPromotion: n, showReferral: i } = e,
        { enabled: l } = c9.A.useConfig({ location: "PremiumManagementSettings" }),
        { analyticsLocations: s } = (0, ez.Ay)(),
        r = x.useRef(null),
        [a, o] = x.useState(!1),
        u = !!t?.hasActiveTrial,
        d = l
            ? (0, f.jsx)(c1.N, {
                  theme: _.NJ8.DARK,
                  children: (e) => (0, f.jsx)("div", { className: e, children: (0, f.jsx)(gH, {}) }),
              })
            : (0, f.jsx)(gH, {});
    return (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsxs)(q.B, {
                direction: "vertical",
                gap: l ? 24 : 40,
                className: l ? gk.W0 : void 0,
                children: [
                    n,
                    d,
                    i && (0, f.jsx)(gR, { variant: l ? "settings" : "default" }),
                    null == n && (0, f.jsx)(gY, {}),
                    l
                        ? (0, f.jsx)(gi.A, {
                              variant: "settings",
                              className: gk.hM,
                              headingOverride: V.intl.string(V.t.dnVvQS),
                              hidePill: !u,
                              selectedPlanTier: tJ.PremiumTypes.TIER_2,
                          })
                        : (0, f.jsx)(gn.A, {
                              hideCTAs: !0,
                              headingOverride: V.intl.string(V.t.dnVvQS),
                              hidePill: !u,
                              selectedPlanColumnClassName: gk.JG,
                              selectedPlanTier: tJ.PremiumTypes.TIER_2,
                          }),
                ],
            }),
            (0, f.jsx)(c$.L, {
                innerRef: r,
                onChange: (e) => {
                    e &&
                        !a &&
                        (td.default.track(_.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: s }),
                        o(!0));
                },
                children: (0, f.jsx)("div", { ref: r, className: gk._Z }),
            }),
        ],
    });
}
let gK = function () {
        let e = (0, dP.Hp)(),
            { analyticsLocations: t } = (0, ez.Ay)(tk.A.PREMIUM_SETTINGS),
            n = (0, I.bG)([sE.default], () => sE.default.getCurrentUser()),
            i = (0, I.bG)([ul.A], () => ul.A.getPremiumTypeSubscription()),
            l = (0, I.bG)([ul.A], () => ul.A.hasFetchedSubscriptions()),
            s = (0, c5.Y)(tJ.T7),
            [r, a] = x.useState(!0),
            o = (0, c3.A)({ forceFetch: !0 }),
            u = (0, I.bG)([d4.A], () => {
                let e = d4.A.getMarketingComponentByType(cJ.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            d = !(oF.Fr || oF.v1) && null != u;
        (0, gs.i)();
        let c = (0, gl.m)();
        if (
            (x.useEffect(() => {
                !(async function () {
                    (e || (await Promise.all([oG.hP(), oG.$o(), (0, c2.zS)(null, null, _.tF5.DISCOVERY)])), a(!1));
                })();
            }, [e]),
            e)
        )
            return (0, f.jsx)(dp.uK, {});
        let g = l && null !== i && s,
            m = o.fetched && o.isFractionalPremiumActive,
            A = n?.isPremiumWithPremiumGroup();
        return g || m || r || A
            ? null != n && (g || m || A) && !r
                ? (0, f.jsx)(ez.f5, {
                      value: t,
                      children: (0, f.jsx)(gW, {
                          premiumSubscription: i,
                          giftPromotion: d ? (0, f.jsx)(ge.m, { config: u }) : null,
                          showReferral: c,
                      }),
                  })
                : (0, f.jsx)(oj.y, {})
            : (0, f.jsx)(c4.A, { title: V.intl.string(V.t.dyq9TR), note: null });
    },
    gZ = (0, h.E2)(S.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, I.bG)([sE.default], () => sE.default.getCurrentUser());
            return (0, ax.YE)(e, tJ.PremiumTypes.TIER_2) ? (0, f.jsx)(gK, {}) : (0, f.jsx)(cQ.A, {});
        },
        useSearchTerms: () => [V.intl.string(V.t.Ipxkog)],
    }),
    gq = (0, h.zZ)(S.X.NITRO_CATEGORY, { buildLayout: () => [gZ] }),
    gQ = (0, h.t_)(S.X.NITRO_PANEL, {
        useTitle: () => V.intl.string(V.t.Ipxkog),
        useObscuredNotice: oS.L,
        buildLayout: () => [gq],
    }),
    gJ = (0, h.i4)(S.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Ipxkog),
        icon: au.NitroWheelIcon,
        usePersistentBadge: function (e) {
            let t = (0, cq.e)(e);
            return x.useMemo(() => ({ badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [gQ],
    });
var g$ = n(104510),
    g0 = n(559201),
    g1 = n(859241),
    g2 = n(527113),
    g3 = n(338548),
    g5 = n(504047),
    g4 = n(711014),
    g6 = n(178368),
    g8 = n(809545),
    g7 = n(168482);
function g9() {
    return (0, f.jsxs)("div", {
        className: g8.iE,
        children: [
            (0, f.jsx)("img", { className: g8.Kk, alt: "", src: g7 }),
            (0, f.jsxs)("div", {
                className: g8.pq,
                children: [
                    (0, f.jsx)(n5.E, { variant: "body-lg/semibold", children: V.intl.string(V.t.ZHNSYf) }),
                    (0, f.jsx)(n5.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: V.intl.string(V.t.kCj5ps),
                    }),
                ],
            }),
            (0, f.jsx)(j.$, {
                variant: "secondary",
                text: V.intl.string(V.t.JFlifp),
                onClick: function () {
                    ((0, d9.pX)(_.BVt.GUILD_DISCOVERY), (0, tH.default)());
                },
            }),
        ],
    });
}
var me = n(365199),
    mt = n(233824),
    mn = n(443865),
    mi = n(165862),
    ml = n(473145);
function ms(e) {
    let {
            guildBoostSlot: t,
            onClose: i,
            hasCancelableGuildBoostSlot: l,
            premiumSubscription: s,
            onSelect: r,
            fractionalState: a,
        } = e,
        o = {
            transfer: {
                label: null != t.premiumGuildSubscription ? V.intl.string(V.t["PR0n//"]) : V.intl.string(V.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? V.intl.string(V.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: V.intl.string(V.t.twFU3R), subtext: l ? null : V.intl.string(V.t.oQ9lOh), disabled: !l },
            uncancel: { label: V.intl.string(V.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (s.status) {
        case _.Dmq.PAST_DUE:
            ((o.cancel.disabled = !0), (o.cancel.subtext = V.intl.string(V.t.WnL6DV)), (o.uncancel.disabled = !0));
            break;
        case _.Dmq.PAUSE_PENDING:
        case _.Dmq.PAUSED:
            a === tJ.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = V.intl.string(V.t.LiLRRT)),
                (o.cancel.subtext = V.intl.string(V.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let u = x.useMemo(
        () =>
            s.isPausedOrPausePending && a === tJ.xc.NONE
                ? (0, f.jsx)(ti.Dr, {
                      id: "manage-subscription",
                      label: V.intl.string(V.t.obRG6Y),
                      action: () => (0, na.openUserSettings)(S.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: mn.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: mn.LightbulbIcon },
                  })
                : null,
        [a, s],
    );
    return (0, f.jsxs)(mi.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": V.intl.string(V.t.ogxXGq),
        onClose: i,
        children: [
            (0, f.jsx)(ti.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, lp.mM)(async () => {
                        let { default: e } = await Promise.all([
                            n.e(295570),
                            n.e(378357),
                            n.e(870528),
                            n.e(205896),
                            n.e(621158),
                            n.e(693173),
                            n.e(418710),
                            n.e(303439),
                        ]).then(n.bind(n, 710802));
                        return (n) =>
                            (0, f.jsx)(e, { ...n, guildBoostSlots: [t], locationSection: _.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, ml.I5)(t)
                ? (0, f.jsx)(ti.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, lp.mM)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, f.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, f.jsx)(ti.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, lp.mM)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 983511));
                              return (n) => (0, f.jsx)(e, { ...n, guildBoostSlot: t });
                          });
                      },
                      disabled: o.cancel.disabled,
                      color: "danger",
                  }),
            u,
        ],
    });
}
var mr = n(545934),
    ma = n(682163),
    mo = n(987144),
    mu = n(864310),
    md = n(290413);
function mc(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, mu.A)(t.id);
    return (0, f.jsxs)("div", {
        className: n ?? md.OA,
        children: [
            (0, f.jsx)(ma.Ay, { className: md.$f, guild: t, size: ma.Ay.Sizes.MEDIUM }),
            (0, f.jsxs)("div", {
                className: md.gI,
                children: [
                    (0, f.jsx)(n5.E, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, f.jsxs)("div", {
                        className: md.ew,
                        children: [
                            (0, f.jsxs)("div", {
                                className: md.QW,
                                children: [
                                    (0, f.jsx)(g$.BoostGemIcon, {
                                        className: md.Wz,
                                        color: n1.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, f.jsx)(n5.E, {
                                        variant: "body-xs/semibold",
                                        color: "text-subtle",
                                        children: V.intl.format(V.t["pob/cL"], { subscriptions: i }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== _.TVA.NONE &&
                                (0, f.jsxs)(f.Fragment, {
                                    children: [
                                        (0, f.jsx)("div", { className: md.zk }),
                                        (0, f.jsx)(n5.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, ml.gb)(t.premiumTier, { useLevels: !1 }),
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
function mg(e) {
    let { guildId: t } = e,
        n = (0, I.bG)([lv.A], () => lv.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, f.jsxs)("div", {
              className: md.Nr,
              children: [
                  (0, f.jsx)(mc, { guild: n }),
                  (0, f.jsx)(j.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: g$.BoostGemIcon,
                      text: V.intl.string(V.t.aBHecF),
                      onClick: () => {
                          (0, mo.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: _.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: _.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: _.ZSU.BUTTON_CTA,
                                  objectType: _.btD.BUY,
                              },
                              guild: n,
                          });
                      },
                  }),
              ],
          });
}
var mm = n(747381);
let mA =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function mE(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: l, isLast: s } = e,
        r = x.useRef(null),
        a = (0, ml.I5)(t),
        o = x.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, c3.A)(),
        c = x.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === _.TVA.NONE) return "";
                    let n = [
                        V.intl.formatToPlainString(V.t["dLlKX/"], { numEmojiSlots: tJ.TG[e].limits.emoji }),
                        V.intl.formatToPlainString(V.t["+ANIfv"], { numStickerSlots: tJ.TG[e].limits.stickers }),
                        V.intl.formatToPlainString(V.t["4gt60b"], {
                            numSoundboardSlots: tJ.TG[e].limits.soundboardSounds,
                        }),
                        V.intl.formatToPlainString(V.t.XahSjZ, {
                            resolution: tJ.TG[e].limits.screenShareQualityResolution,
                            framerate: tJ.TG[e].limits.screenShareQualityFramerate,
                        }),
                        V.intl.formatToPlainString(V.t.NbNs7S, { bitrate: tJ.TG[e].limits.bitrate / 1e3 }),
                        V.intl.formatToPlainString(V.t.VVKcpn, { filesize: tJ.TG[e].limits.fileSize / 1024 / 1024 }),
                        V.intl.formatToPlainString(V.t.TbpCvv, { numVideoStageSeats: tJ.TG[e].limits.stageVideoUsers }),
                        V.intl.string(V.t.LDyX3i),
                        V.intl.string(V.t.YtGlPW),
                    ];
                    (e >= _.TVA.TIER_2 && (n.push(V.intl.string(V.t.SztbtN)), n.push(V.intl.string(V.t["3GK91n"]))),
                        e >= _.TVA.TIER_3 && n.push(V.intl.string(V.t["XUUJd+"])));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let l = n[Math.abs(i) % n.length];
                    return V.intl.formatToPlainString(V.t["/dOAmQ"], { perk: l });
                })(n, t.id),
            [n, t.id],
        ),
        g = x.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? ow.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return V.intl.formatToPlainString(V.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = x.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        ),
        A = null != m && !(u && null != o && o < m);
    return (0, f.jsxs)("div", {
        className: ic()(mm.iq, { [mm.Mt]: s }),
        children: [
            (0, f.jsxs)("div", {
                className: mm.kd,
                children: [
                    (0, f.jsx)("img", { alt: "", className: mm.bB, src: mA }),
                    A
                        ? (0, f.jsx)(n5.E, {
                              variant: "body-sm/medium",
                              color: "text-subtle",
                              children: V.intl.format(V.t.Z4ULRD, { date: m }),
                          })
                        : (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsx)(n5.E, { variant: "body-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, f.jsxs)(f.Fragment, {
                                          children: [
                                              (0, f.jsx)("div", { className: mm.zk }),
                                              (0, f.jsx)(n5.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: V.intl.formatToPlainString(V.t.YJlswH, {
                                                      date: o.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !u &&
                                      null != i.trialEndsAt &&
                                      (0, f.jsxs)(f.Fragment, {
                                          children: [
                                              (0, f.jsx)("div", { className: mm.zk }),
                                              (0, f.jsx)(n5.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: V.intl.formatToPlainString(V.t.OdPSpk, {
                                                      date: new Date(i.trialEndsAt).toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            (0, f.jsx)(aS.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, f.jsx)(ms, {
                        onClose: n,
                        guildBoostSlot: t,
                        premiumSubscription: i,
                        hasCancelableGuildBoostSlot: l,
                        fractionalState: d.fractionalState,
                    });
                },
                position: "right",
                align: "center",
                children: (e) =>
                    (0, f.jsx)(n4.D, {
                        innerRef: r,
                        "aria-label": V.intl.string(V.t.PdRCRg),
                        className: mm.Mj,
                        ...e,
                        children: (0, f.jsx)(me.MoreHorizontalIcon, {
                            size: "xs",
                            color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function mh(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: l } = e,
        s = (0, I.bG)([lv.A], () => lv.A.getGuild(t), [t]);
    return (0, f.jsxs)("div", {
        className: mm.Nr,
        children: [
            (0, f.jsx)("div", {
                className: mm.MY,
                children:
                    null != s
                        ? (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsx)(mc, { guild: s, className: mm.OA }),
                                  (0, f.jsx)(j.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: V.intl.string(V.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tH.default)(),
                                              (0, mt.K4)({
                                                  guildId: s.id,
                                                  location: {
                                                      section: _.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              }));
                                      },
                                  }),
                              ],
                          })
                        : (0, f.jsx)("div", {
                              className: mm.OA,
                              children: (0, f.jsx)(N.D, {
                                  variant: "heading-sm/semibold",
                                  color: "text-default",
                                  children: V.intl.string(V.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, f.jsx)(
                    mE,
                    {
                        slot: e,
                        guildTier: s?.premiumTier,
                        premiumSubscription: i,
                        hasCancelableSlots: l,
                        isLast: t === n.length - 1,
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function mS(e) {
    let { guildBoostSlots: t, premiumSubscription: n, pausedAppliedGuildBoosts: i, isPaused: l } = e,
        { boostsByGuildId: s, numActiveSlots: r } = x.useMemo(() => {
            if (l && null != n)
                return {
                    boostsByGuildId: (function (e, t) {
                        let n = {};
                        for (let t of e) (t.guildId in n || (n[t.guildId] = []), n[t.guildId].push(t));
                        let i = {};
                        for (let e of Object.keys(n)) {
                            let l = n[e];
                            i[e] = l.map((n) =>
                                mr.A.createFromServer(
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
                s = {};
            for (let n of Object.keys(t)) {
                let i = t[n];
                if ((!(0, ml.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in s || (s[e] = []), s[e].push(i));
                }
            }
            return { boostsByGuildId: s, numActiveSlots: e };
        }, [t, l, i, n]);
    if (null == n || 0 === Object.keys(s).length) return null;
    let a = r > ax.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, f.jsx)("div", {
        className: mm.kR,
        children: ow.default
            .keys(s)
            .map((e) => (0, f.jsx)(mh, { guildId: e, slots: s[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var mT = n(502572),
    mp = n(983511),
    mf = n(342744),
    mx = n(496431);
let mI = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, mx.A)(n);
    return (0, f.jsx)(n5.E, {
        className: t,
        variant: "body-sm/medium",
        color: "text-muted",
        children: (0, iA.uN)(i, { days: V.t.WUTPDc, hours: V.t.c1qodV, minutes: V.t["2+A3dv"] }),
    });
};
var m_ = n(731536);
function mb(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        l = (0, I.bG)([ul.A], () => ul.A.getPremiumTypeSubscription()),
        { unappliedSlots: s, numActiveSlots: r } = x.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, ml.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != l ? ax.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0),
        o = l?.isPausedOrPausePending === !0 && i === tJ.xc.NONE;
    return 0 === s.length
        ? null
        : (0, f.jsxs)("div", {
              className: m_.Nr,
              children: [
                  (0, f.jsxs)("div", {
                      className: m_.MY,
                      children: [
                          (0, f.jsxs)("div", {
                              className: m_._L,
                              children: [
                                  (0, f.jsxs)("div", {
                                      className: m_.MD,
                                      children: [
                                          (0, f.jsx)("img", { alt: "", className: m_.F8, src: mA }),
                                          (0, f.jsx)("div", {
                                              className: ic()(m_.qS, "theme-dark"),
                                              children: (0, f.jsx)("span", { className: m_.Vv, children: s.length }),
                                          }),
                                      ],
                                  }),
                                  (0, f.jsxs)("div", {
                                      className: m_.Qp,
                                      children: [
                                          (0, f.jsx)(n5.E, {
                                              variant: "heading-sm/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: V.intl.format(V.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                          (0, f.jsx)(n5.E, {
                                              variant: "body-xs/semibold",
                                              color: "text-subtle",
                                              children: V.intl.format(V.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, f.jsx)(mT.A, {
                              shouldShow: o,
                              text: V.intl.string(V.t.mOWsF1),
                              "aria-label": V.intl.string(V.t.mOWsF1),
                              children: (e) =>
                                  (0, f.jsx)(j.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: g$.BoostGemIcon,
                                      text: V.intl.string(V.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, lp.mM)(async () => {
                                              let { default: e } = await Promise.all([n.e(378357), n.e(418710)]).then(
                                                  n.bind(n, 770101),
                                              );
                                              return (t) =>
                                                  (0, f.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          (t.onClose(),
                                                              (0, mo.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: _.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: _.JJy.SETTINGS_PREMIUM,
                                                                      object: _.ZSU.BUTTON_CTA,
                                                                      objectType: _.btD.BUY,
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
                  s.map((e, t) =>
                      (0, f.jsx)(
                          mN,
                          {
                              slot: e,
                              isLast: t === s.length - 1,
                              isCancelable: a && !(0, ml.I5)(e),
                              isCanceled: (0, ml.I5)(e),
                              premiumSubscription: l,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function mN(e) {
    let t,
        { slot: n, isLast: i, isCancelable: l, isCanceled: s, premiumSubscription: r, modificationsDisabled: a } = e,
        o = x.useRef(null),
        u = x.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]),
        d = s ? r?.currentPeriodEnd : null;
    t =
        n.isOnCooldown() && null != u && (null == d || u < d)
            ? (0, f.jsx)(mI, { cooldown: u.getTime() })
            : null != d
              ? (0, f.jsx)(n5.E, {
                    variant: "body-sm/medium",
                    color: "text-subtle",
                    children: V.intl.format(V.t.Z4ULRD, { date: d }),
                })
              : (0, f.jsx)(n5.E, {
                    variant: "body-sm/medium",
                    color: "text-subtle",
                    children: V.intl.string(V.t["2mcafz"]),
                });
    let c = l || s;
    return (0, f.jsxs)("div", {
        className: ic()(m_.iq, { [m_.Mt]: i }),
        children: [
            (0, f.jsxs)("div", {
                className: m_.kd,
                children: [(0, f.jsx)("img", { alt: "", className: m_.bB, src: mA }), t],
            }),
            c &&
                (0, f.jsx)(aS.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, f.jsxs)(mi.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": V.intl.string(V.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                l &&
                                    (0, f.jsx)(ti.Dr, {
                                        id: "cancel-boost",
                                        label: V.intl.string(V.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? V.intl.string(V.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, lp.mM)(
                                                    async () => (e) =>
                                                        (0, f.jsx)(mp.default, { ...e, guildBoostSlot: n }),
                                                ));
                                        },
                                    }),
                                s &&
                                    (0, f.jsx)(ti.Dr, {
                                        id: "uncancel-boost",
                                        label: V.intl.string(V.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? V.intl.string(V.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, lp.mM)(
                                                    async () => (e) =>
                                                        (0, f.jsx)(mf.default, { ...e, guildBoostSlotId: n.id }),
                                                ));
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, f.jsx)(n4.D, {
                            innerRef: o,
                            "aria-label": V.intl.string(V.t["UKOtz+"]),
                            className: m_.Mj,
                            ...e,
                            children: (0, f.jsx)(me.MoreHorizontalIcon, {
                                size: "xs",
                                color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var mC = n(834612);
function my(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: l,
            fractionalPremiumState: s,
        } = e,
        r = eC.A.getArticleURL(_.MVz.GUILD_BOOSTING_FAQ),
        a = i?.isPaused === !0 && s !== tJ.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && l.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, f.jsxs)("div", {
              className: mC.i,
              children: [
                  (0, f.jsxs)("div", {
                      className: mC.b,
                      children: [
                          (0, f.jsx)(N.D, { variant: "heading-sm/semibold", children: V.intl.string(V.t.W5rDjW) }),
                          (0, f.jsx)(n5.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: V.intl.format(V.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, f.jsx)(mS, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: l,
                      isPaused: a,
                  }),
                  (0, f.jsx)(mb, { guildBoostSlots: t, fractionalPremiumState: s }),
              ],
          })
        : null;
}
var mv = n(414184),
    mj = n(9146);
function mO() {
    return (0, f.jsxs)("div", {
        className: mj.iE,
        children: [
            (0, f.jsx)(N.D, { variant: "heading-xl/medium", children: V.intl.string(V.t.IzKs3o) }),
            (0, f.jsx)("div", {
                className: mj.kR,
                children: mv.s.map((e, t) => {
                    let n = e.icon;
                    return (0, f.jsxs)(
                        "div",
                        {
                            className: mj.Nr,
                            children: [
                                (0, f.jsx)(n, { className: mj.Kk }),
                                (0, f.jsx)(n5.E, {
                                    className: mj.h_,
                                    color: "text-muted",
                                    variant: "body-sm/medium",
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
var mR = n(847374),
    mD = n(232122),
    mL = n(665984);
function mP() {
    let [e, t] = x.useState(null),
        [n, i] = x.useState(null);
    return (0, f.jsxs)("div", {
        className: mL.iE,
        children: [
            (0, f.jsx)(N.D, { variant: "heading-xl/medium", children: V.intl.string(V.t.HPJ6Nj) }),
            (0, f.jsx)("ul", {
                className: mL.p_,
                children: mD.m.map((l, s) => {
                    let r = e === s,
                        a = n === s,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, f.jsxs)(
                        n4.D,
                        {
                            tag: "li",
                            className: ic()(mL.Aw, { [mL.$K]: r }),
                            onClick: () => t((e) => (e === s ? null : s)),
                            onMouseEnter: () => i(s),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, f.jsxs)("div", {
                                    className: mL.k7,
                                    children: [
                                        (0, f.jsx)(n5.E, {
                                            className: mL.b1,
                                            color: o,
                                            variant: "heading-sm/semibold",
                                            tag: "span",
                                            children: l.getQuestion(),
                                        }),
                                        (0, f.jsx)(mR.ChevronSmallDownIcon, {
                                            size: "sm",
                                            color: n1.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: mL.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, f.jsx)(n5.E, {
                                        className: mL.ZF,
                                        color: "text-muted",
                                        variant: "body-sm/medium",
                                        children: l.getAnswer(),
                                    }),
                            ],
                        },
                        s,
                    );
                }),
            }),
        ],
    });
}
var mG = n(182859),
    mM = n(586428),
    mU = n(416763);
function mV() {
    let e = eC.A.getArticleURL(_.MVz.GUILD_SUBSCRIPTIONS);
    return (0, f.jsxs)("div", {
        className: mU.wx,
        children: [
            (0, f.jsxs)("div", {
                className: mU.Qs,
                children: [
                    (0, f.jsxs)("div", {
                        className: mU.B5,
                        children: [
                            (0, f.jsx)("img", { alt: "", className: mU.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, f.jsx)(N.D, {
                                variant: "heading-xl/medium",
                                children: V.intl.string(mM.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, f.jsx)(n5.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: V.intl.format(V.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, f.jsx)(mG.A, {
                variant: "member",
                className: mU.iO,
                analyticsLocation: {
                    page: _.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: _.JJy.HERO,
                    object: _.ZSU.CARD,
                },
                videoPlacement: "settings_header",
            }),
        ],
    });
}
var mk = n(315629),
    mw = n(87719),
    mF = n(961085);
function mB() {
    let e = (0, I.bG)([sE.default], () => sE.default.getCurrentUser());
    if (null == e || ax.Ay.hasFreeBoosts(e)) return null;
    let t = eC.A.getArticleURL(_.MVz.GUILD_BOOSTING_FAQ);
    return (0, f.jsxs)(mk.h, {
        color: "nitro-pink",
        className: mF.vK,
        children: [
            (0, f.jsxs)("div", {
                className: mF.nw,
                children: [
                    (0, f.jsx)("img", { alt: "", className: mF.q3, src: mA }),
                    (0, f.jsxs)("div", {
                        className: mF.Tm,
                        children: [
                            (0, f.jsx)(n5.E, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.format(V.t.Idh1Vs, { count: 2, boostCount: 2 }),
                            }),
                            (0, f.jsxs)("div", {
                                className: mF.xv,
                                children: [
                                    (0, f.jsx)(au.NitroWheelIcon, { className: mF.nE }),
                                    (0, f.jsx)(n5.E, {
                                        variant: "body-xs/semibold",
                                        color: "text-subtle",
                                        children: V.intl.format(V.t["6UAu+f"], {
                                            count: 2,
                                            boostCount: 2,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, f.jsx)(j.$, {
                variant: "expressive",
                size: "sm",
                icon: au.NitroWheelIcon,
                text: V.intl.string(V.t["8x0jKT"]),
                onClick: mw.e,
            }),
        ],
    });
}
var mX = n(532991);
function mz() {
    let e = (0, I.bG)([g5.A], () => g5.A.affinities),
        t = (0, I.bG)([g4.Ay], () => g4.Ay.getFlattenedGuildIds()),
        n = x.useMemo(() => {
            let n = e.slice(0, 3).map((e) => e.guildId);
            for (let e = 0; e < t.length && n.length < 3; e++) {
                let i = t[e];
                n.includes(i) || n.push(i);
            }
            return n;
        }, [e, t]);
    return 0 === n.length
        ? null
        : (0, f.jsxs)("div", {
              className: mX.i,
              children: [
                  (0, f.jsx)(N.D, { variant: "heading-sm/semibold", children: V.intl.string(V.t.r90Wgo) }),
                  (0, f.jsx)("div", { className: mX.k, children: n.map((e) => (0, f.jsx)(mg, { guildId: e }, e)) }),
              ],
          });
}
var mH = n(967246);
function mY(e) {
    let { count: t } = e,
        i = eC.A.getArticleURL(_.MVz.GUILD_BOOSTING_FAQ);
    return (0, f.jsxs)(mk.h, {
        color: "nitro-pink",
        className: mH.vK,
        children: [
            (0, f.jsxs)("div", {
                className: mH.nw,
                children: [
                    (0, f.jsxs)("div", {
                        className: mH.MD,
                        children: [
                            (0, f.jsx)("img", { alt: "", className: mH.F8, src: mA }),
                            (0, f.jsx)("div", {
                                className: ic()(mH.qS, "theme-dark"),
                                children: (0, f.jsx)("span", { className: mH.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, f.jsxs)("div", {
                        className: mH.Tm,
                        children: [
                            (0, f.jsx)(n5.E, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.format(V.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, f.jsxs)("div", {
                                className: mH.xv,
                                children: [
                                    (0, f.jsx)(au.NitroWheelIcon, { className: mH.nE }),
                                    (0, f.jsx)(n5.E, {
                                        variant: "body-xs/semibold",
                                        color: "text-subtle",
                                        children: V.intl.format(V.t["6UAu+f"], {
                                            count: 2,
                                            boostCount: 2,
                                            helpdeskArticle: i,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, f.jsx)(j.$, {
                variant: "primary",
                size: "sm",
                icon: g$.BoostGemIcon,
                text: V.intl.string(V.t.BMx1iy),
                onClick: () => {
                    (0, lp.mM)(async () => {
                        let { default: e } = await Promise.all([n.e(378357), n.e(418710)]).then(n.bind(n, 770101));
                        return (t) =>
                            (0, f.jsx)(e, {
                                ...t,
                                onSelectGuild: (e) => {
                                    (t.onClose(),
                                        (0, mo.g)({
                                            analyticsLocations: [],
                                            analyticsLocation: {
                                                page: _.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                section: _.JJy.SETTINGS_PREMIUM,
                                                object: _.ZSU.BUTTON_CTA,
                                                objectType: _.btD.BUY,
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
var mW = n(89150);
function mK(e) {
    let { premiumSubscription: t } = e,
        n = (0, I.bG)([g6.A], () => g6.A.boostSlots),
        i = x.useMemo(() => Object.values(n), [n]),
        l = (0, I.bG)([sE.default], () => sE.default.getCurrentUser()),
        s = (0, I.bG)([g5.A], () => g5.A.affinities),
        r = (0, I.bG)([g4.Ay], () => g4.Ay.getFlattenedGuildIds()),
        a = s.length > 0 || r.length > 0,
        o = (0, I.bG)([g1.A], () => g1.A.getCurrentUserAppliedBoosts()),
        { fractionalState: u } = (0, c3.A)({ forceFetch: !0 }),
        d = l?.isPremiumGroupMember(),
        c = t?.isPausedOrPausePending === !0 && u === tJ.xc.NONE,
        g = x.useMemo(() => {
            if (null == t || c) return 0;
            let e = ax.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : i.filter((e) => e.isAvailable()).length;
        }, [t, c, i]);
    return (0, f.jsxs)("div", {
        className: mW.GO,
        children: [
            (0, f.jsx)(dp.kb, { className: mW.ek }),
            (0, f.jsx)(mV, {}),
            (0, f.jsx)(mB, {}),
            g > 0 && (0, f.jsx)(mY, { count: g }),
            d && (0, f.jsx)(g3.A, {}),
            !a && (0, f.jsx)(g9, {}),
            (0, f.jsxs)("div", {
                className: mW.C_,
                children: [
                    (0, f.jsx)(my, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: o,
                        fractionalPremiumState: u,
                    }),
                    (0, f.jsx)(mz, {}),
                    (0, f.jsx)(g2.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, f.jsx)(mO, {}),
                    (0, f.jsx)(mP, {}),
                ],
            }),
        ],
    });
}
var mZ = n(819677);
let mq = (0, h.E2)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            x.useEffect(() => {
                (oG.hP(), oG.$o(), (0, g0.CD)(), (0, c2.zS)(null, null, _.tF5.DISCOVERY), (0, g0.tO)(!0));
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, I.cf)([ul.A], () => ({
                    hasFetchedSubscriptions: ul.A.hasFetchedSubscriptions(),
                    premiumSubscription: ul.A.getPremiumTypeSubscription(),
                })),
                n = (0, c5.Y)(),
                i = (0, I.bG)([ui.A], () => ui.A.hasFetchedPaymentSources),
                l = (0, I.bG)([g1.A], () => g1.A.isFetchingCurrentUserAppliedBoosts),
                s = !e || !n || !i || l,
                [r, a] = x.useState(!1);
            return (s || r || a(!0), s && !r)
                ? (0, f.jsx)("div", { className: ic()(mZ.kL, mZ.Lq), children: (0, f.jsx)(oj.y, {}) })
                : (0, f.jsxs)("div", {
                      className: mZ.kL,
                      children: [
                          (0, f.jsx)("div", { className: mZ.Tp }),
                          (0, f.jsx)("div", { className: mZ.Qs, children: (0, f.jsx)(mK, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t["+CbP2v"]), V.intl.string(V.t.Nn1lJy)],
    }),
    mQ = (0, h.zZ)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [mq] }),
    mJ = (0, h.t_)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => V.intl.string(V.t["+CbP2v"]),
        buildLayout: () => [mQ],
    }),
    m$ = (0, h.i4)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["+CbP2v"]),
        icon: g$.BoostGemIcon,
        buildLayout: () => [mJ],
    });
var m0 = n(153659),
    m1 = n(155984),
    m2 = n(357758),
    m3 = n(262077),
    m5 = n(281445),
    m4 = n(624479),
    m6 = n(626584),
    m8 = n(263775),
    m7 = n(196736),
    m9 = n(685743),
    Ae = n(349085),
    At = n(342942),
    An = n(376205),
    Ai = n(269249),
    Al = n(758836),
    As = n(49999),
    Ar = n(105518),
    Aa = n(439050);
let Ao = new m6.A("GameServerSubscriptionsSection");
function Au(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function Ad(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let Ac = x.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: l } = (0, ez.Ay)(),
        s = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, Ae.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, m8.kn)([eE.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eE.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = cc.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: m } = (0, m9.A)(c, t.id, tk.A.GAME_SERVER_PAGE, t.serverIp),
        A = x.useCallback(() => {
            (0, At.A)({
                provider: m5.X.SHOCKBYTE,
                onAccept: () => {
                    (u(As.i.TAKE_ACTION), g());
                },
            });
        }, [u, g]),
        {
            hasSubscription: E,
            priceLabel: h,
            dateLabel: S,
            isCanceled: T,
            isDanger: p,
        } = (0, I.bG)(
            [ul.A, cm.A],
            () => {
                let e = null != s ? ul.A.getSubscriptionById(s) : null;
                if (null == e)
                    return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    l = !t && null != e.renewalMutations,
                    r = l ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? cm.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? V.intl.formatToPlainString(V.t.AbOLNu, { price: (0, u5.$g)(u, o.priceCurrency) })
                            : null,
                    c = Au(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? V.intl.formatToPlainString(Ar.default["3aEgK6"], { date: c })
                        : l
                          ? V.intl.formatToPlainString(Ar.default.KFSA3M, { date: c })
                          : V.intl.formatToPlainString(Ar.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || l,
                };
            },
            [s, n, i],
            Ad,
        ),
        b = x.useCallback(() => {
            if (null == s) return;
            let e = ul.A.getSubscriptionById(s),
                t = null != e ? Au(e.currentPeriodEnd) : "";
            (0, n2.A)({
                title: V.intl.string(Ar.default.TEYPNR),
                subtitle: V.intl.formatToPlainString(Ar.default.XR1WrB, { date: t }),
                confirmText: V.intl.string(V.t["cY+Oob"]),
                cancelText: V.intl.string(Ar.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        (await oG.M2(s, l), await oG.hP());
                    } catch (e) {
                        Ao.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [s, l]),
        N = x.useCallback(() => {
            if (null == s) return;
            let e = ul.A.getSubscriptionById(s);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? cm.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, u5.$g)(u, o.priceCurrency) : "",
                c = Au(e.currentPeriodEnd);
            (0, n2.A)({
                title: V.intl.string(Ar.default.o96qbc),
                subtitle: V.intl.formatToPlainString(Ar.default["7n6Qq+"], { price: d, date: c }),
                confirmText: V.intl.string(V.t.iIvF2z),
                cancelText: V.intl.string(V.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, c2.ur)(r);
                        let t = e.items;
                        (await oG.nV(
                            e,
                            { status: _.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, ax.UC)(t, e.currency),
                            l,
                        ),
                            await oG.hP());
                    } catch (e) {
                        Ao.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [s, r, l, n, i]),
        C = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, f.jsxs)("div", {
        className: Aa.nM,
        children: [
            (0, f.jsxs)("div", {
                className: Aa.M4,
                children: [
                    (0, f.jsxs)("div", {
                        className: Aa.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, f.jsx)("img", { className: Aa.uP, src: a, alt: "" }),
                            (0, f.jsx)("div", { className: Aa.tw }),
                        ],
                    }),
                    (0, f.jsxs)("div", {
                        className: Aa.CR,
                        children: [
                            (0, f.jsx)(n5.E, {
                                variant: "body-md/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: t.serverName,
                            }),
                            (0, f.jsx)(n5.E, {
                                variant: "body-sm/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: `${t.gameName}  \u{2022}  ${t.planName}`,
                            }),
                            C &&
                                (d
                                    ? (0, f.jsxs)("div", {
                                          className: Aa.CQ,
                                          children: [
                                              (0, f.jsx)(n5.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, f.jsx)(n4.D, {
                                                  className: Aa.cL,
                                                  onClick: g,
                                                  "aria-label": V.intl.string(V.t.OpuAlK),
                                                  children: m
                                                      ? (0, f.jsx)(u7.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, f.jsx)(m4.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, f.jsx)(uY.A, { onClick: A, children: V.intl.string(Ar.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, f.jsxs)("div", {
                className: Aa.Rd,
                children: [
                    (0, f.jsxs)("div", {
                        className: Aa.Ff,
                        children: [
                            null != h &&
                                (0, f.jsx)(n5.E, {
                                    variant: "body-md/semibold",
                                    color: "text-default",
                                    tag: "span",
                                    children: h,
                                }),
                            null != S &&
                                (p
                                    ? (0, f.jsxs)("div", {
                                          className: Aa.ez,
                                          children: [
                                              (0, f.jsx)(i$.CircleErrorIcon, {
                                                  size: "xs",
                                                  color: "text-feedback-critical",
                                              }),
                                              (0, f.jsx)(n5.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-feedback-critical",
                                                  tag: "span",
                                                  children: S,
                                              }),
                                          ],
                                      })
                                    : (0, f.jsx)(n5.E, {
                                          variant: "body-sm/medium",
                                          color: "text-muted",
                                          tag: "span",
                                          children: S,
                                      })),
                        ],
                    }),
                    E &&
                        (T
                            ? (0, f.jsx)(j.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: V.intl.string(V.t.iIvF2z),
                                  onClick: N,
                              })
                            : (0, f.jsx)(j.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: V.intl.string(V.t["ETE/oC"]),
                                  onClick: b,
                              })),
                ],
            }),
        ],
    });
});
function Ag(e) {
    let { servers: t } = e,
        n = (0, m7.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, Ai.Y)(),
        l = (0, I.bG)([sE.default], () => ax.Ay.canUseShopDiscounts(sE.default.getCurrentUser())),
        s = x.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, I.yK)([ul.A], () => (0, An.HY)(t, i, (e) => ul.A.getSubscriptionById(e)), [t, i]);
    x.useEffect(() => {
        let e = r.filter((e) => !cm.A.isLoadedForSKU(e) && !cm.A.isFetchingForSKU(e));
        e.length > 0 && (0, c2.jv)(e).catch(() => {});
    }, [r]);
    let a = x.useCallback(() => {
        ((0, tH.default)(), (0, d9.pX)(_.BVt.COLLECTIBLES_SHOP_WITH_TAB(Al.G2.GAME_SERVERS)));
    }, []);
    return (0, f.jsxs)("div", {
        className: Aa.uW,
        children: [
            (0, f.jsxs)("div", {
                className: Aa.wx,
                children: [
                    (0, f.jsx)(n5.E, {
                        variant: "body-lg/medium",
                        color: "text-strong",
                        children: V.intl.string(Ar.default.vCzwM7),
                    }),
                    (0, f.jsxs)("div", {
                        className: Aa.h_,
                        children: [
                            (0, f.jsx)(n5.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.string(Ar.default.y85Eg9),
                            }),
                            n &&
                                (0, f.jsx)(uY.A, {
                                    onClick: a,
                                    children: (0, f.jsx)(n5.E, {
                                        variant: "body-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: V.intl.string(Ar.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, f.jsx)("div", {
                className: Aa.p_,
                children: t.map((e) =>
                    (0, f.jsx)(Ac, { server: e, planOptionBySkuId: s, canUseShopDiscount: l }, e.id),
                ),
            }),
        ],
    });
}
var Am = n(55766),
    AA = n(696986),
    AE = n(364036);
function Ah(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, f.jsxs)("div", {
        children: [
            (0, f.jsx)(N.D, { variant: "heading-sm/semibold", children: V.intl.string(V.t["KzCF/6"]) }),
            (0, f.jsx)(AA.h, { size: 4 }),
            (0, f.jsx)(n5.E, { variant: "body-md/normal", className: AE.yV, children: V.intl.string(V.t["3D7qCu"]) }),
            (0, f.jsx)(AA.h, { size: 24 }),
            (0, f.jsxs)("div", {
                className: AE.Nr,
                children: [
                    (0, f.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: AE.RI }),
                    (0, f.jsxs)("div", {
                        className: AE.FS,
                        children: [
                            (0, f.jsx)(N.D, {
                                variant: "heading-xl/semibold",
                                className: AE.wx,
                                children: V.intl.string(V.t["KzCF/6"]),
                            }),
                            (0, f.jsx)(n5.E, {
                                variant: "body-md/normal",
                                className: AE.h_,
                                children: V.intl.format(V.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, f.jsx)(j.$, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: V.intl.string(V.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}
var AS = n(872351),
    AT = n(9113),
    Ap = n(599941),
    Af = n(384684),
    Ax = n(2242);
let AI = [];
var A_ = n(885574),
    Ab = n(805251),
    AN = n(912851),
    AC = n(182744);
let Ay = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, f.jsx)(n4.D, {
        onClick: i ? void 0 : n,
        className: AC.x6,
        children: (0, f.jsxs)("div", {
            className: AC.hQ,
            children: [
                i
                    ? (0, f.jsx)(oj.y, { type: oj.y.Type.PULSING_ELLIPSIS, className: AC.__invalid_spinner })
                    : (0, f.jsx)(n5.E, { variant: "body-md/medium", className: AC.Pf, children: t }),
                (0, f.jsx)(mR.ChevronSmallDownIcon, { size: "md", color: "currentColor", className: AC.UE }),
            ],
        }),
    });
};
var Av = n(465932),
    Aj = n(543767),
    AO = n(590885),
    AR = n(790284),
    AD = n(636194),
    AL = n(624456),
    AP = n(710144),
    AG = n(815332),
    AM = n(31637),
    AU = n(557506);
function AV(e) {
    let { transitionState: t, groupListing: n, listing: i, subscription: l, onClose: s } = e,
        r = (0, tK.GV)(),
        { analyticsLocations: a } = (0, ez.Ay)(tk.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = (function (e) {
            let [t, n] = x.useState(!1),
                [i, l] = x.useState(null);
            return {
                cancelSubscription: async function (t) {
                    try {
                        return (n(!0), await oG.M2(t, e), !0);
                    } catch (e) {
                        l(e);
                    } finally {
                        n(!1);
                    }
                },
                error: i,
                submitting: t,
            };
        })(a),
        c = i.role_benefits.benefits.filter((e) => e.ref_type === Ax.bN.CHANNEL),
        g = i.role_benefits.benefits.filter((e) => e.ref_type === Ax.bN.INTANGIBLE),
        m = im()(l.currentPeriodEnd).format("MMMM Do, YYYY"),
        A = V.intl.formatToPlainString(V.t.KsMRP5, {
            numChannels: c.length,
            numAdditionalBenefits: g.length,
            subscriptionEndDate: m,
        });
    return (0, f.jsx)(lT.a, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: V.intl.string(V.t.EP6EPb), variant: "secondary", onClick: s },
            {
                variant: "critical-primary",
                text: V.intl.string(V.t.F6lUDF),
                onClick: async function () {
                    (await o(l.id)) && s();
                },
                loading: d,
            },
        ],
        title: V.intl.string(V.t.O6l5tM),
        subtitle: A,
        onClose: s,
        children: (0, f.jsxs)(q.B, {
            gap: 8,
            children: [
                null != u ? (0, f.jsx)(iK.w, { type: "critical", message: u.message, role: "alert" }) : null,
                (0, f.jsx)(AM.x, { listingId: i.id, guildId: n.guild_id, className: AU.P }),
            ],
        }),
    });
}
var Ak = n(319225),
    Aw = n(746080),
    AF = n(883616);
function AB(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: l } = e;
    return (0, f.jsxs)("div", {
        className: AF.L0,
        children: [
            (0, f.jsxs)("div", {
                className: AF.a5,
                children: [
                    (0, f.jsx)(N.D, { variant: "body-xs/semibold", className: AF.HU, children: t }),
                    i &&
                        (0, f.jsx)(lg.m, {
                            text: l,
                            children: (0, f.jsx)(A_.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: AF.Mo,
                            }),
                        }),
                ],
            }),
            (0, f.jsx)(N.D, { variant: "heading-xl/semibold", className: AF.sx, children: n }),
        ],
    });
}
function AX(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, ez.Ay)(),
        [i] = (0, Aj.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tk.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [l, s] = (0, I.yK)([ui.A], () => [ui.A.hasFetchedPaymentSources, ui.A.paymentSourceFetchError]);
    return null != i && (l || s)
        ? (0, f.jsx)(AO.A, { subscription: t, currentInvoicePreview: i })
        : (0, f.jsx)(oj.y, {});
}
function Az(e) {
    let {
        isTrial: t,
        isCancelled: n,
        isResubscribing: i,
        shouldHideRoleSubscriptionEntryPoints: l,
        onCancelSubscriptionClick: s,
        onResubscribeClick: r,
        onChangePlanClick: a,
    } = e;
    return n && (t || l)
        ? null
        : (0, f.jsx)(lu.D, {
              label: V.intl.string(V.t["4neDM+"]),
              children: (0, f.jsx)("div", {
                  className: AF.__invalid_rowButtons,
                  children: n
                      ? (0, f.jsx)(j.$, { variant: "primary", text: V.intl.string(V.t.y3mAE4), onClick: r, loading: i })
                      : (0, f.jsxs)(f.Fragment, {
                            children: [
                                !t && !l && (0, f.jsx)(Ay, { label: V.intl.string(V.t.FRbWR8), onClick: a }),
                                (0, f.jsx)(Ay, { label: V.intl.string(V.t.Dx0lF7), onClick: s }),
                            ],
                        }),
              }),
          });
}
let AH = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: l,
            expanded: s,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, AL.M)(e),
                n = (0, I.bG)([AD.A], () => AD.A.getSubscriptionListingForPlan(t)),
                i = (0, I.bG)([AD.A], () =>
                    null != n ? AD.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                l = (0, I.bG)([lv.A], () => lv.A.getGuild(i?.guild_id)),
                [s, r] = x.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, Ap.XE)();
            x.useEffect(() => {
                s && null != l && null == AD.A.getSubscriptionSettings(l.id) && a(l.id);
            }, [s, l, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = im()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, u5.$g)(t.price, t.currency) : "",
                              l = im()(t.createdAt).format("M/D/YY"),
                              s = t.status === _.Dmq.CANCELED,
                              r = t.status === _.Dmq.PAST_DUE,
                              a = t.hasActiveTrial;
                          return {
                              memberSince: l,
                              nextRenewalDate: n,
                              nextRenewalLabel: s ? V.intl.string(V.t.UAfot2) : V.intl.string(V.t.CVjLcM),
                              subscriptionPrice: i,
                              isCancelled: s,
                              isPastDue: r,
                              isTrial: a,
                          };
                      })({ subscription: e });
            return {
                guild: l,
                expanded: s,
                handleToggleExpanded: function () {
                    return r((e) => !e);
                },
                listing: n,
                groupListing: i,
                subscriptionInfo: o,
            };
        })(t),
        [o, u] = x.useState(!1),
        d = (0, tK.GV)(),
        { analyticsLocations: c } = (0, ez.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: g } = (0, Av.MH)(l?.id),
        m = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    let {
            isCancelled: A,
            isPastDue: E,
            subscriptionPrice: h,
            memberSince: T,
            nextRenewalDate: p,
            nextRenewalLabel: b,
            isTrial: N,
        } = a,
        C = n.soft_deleted || null == l || m;
    return (0, f.jsxs)("div", {
        className: AF.kL,
        children: [
            (0, f.jsx)(AP.A, {
                onClick: r,
                className: AF.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, f.jsxs)(f.Fragment, {
                        children: [
                            null != l && (0, f.jsx)(ma.Ay, { guild: l, active: !0, size: ma.Ay.Sizes.MEDIUM }),
                            (0, f.jsxs)("div", {
                                className: AF.if,
                                children: [
                                    (0, f.jsx)(n5.E, {
                                        variant: "body-md/medium",
                                        className: AF.J5,
                                        children: null != l ? l.name : V.intl.string(V.t["He+cmd"]),
                                    }),
                                    (0, f.jsxs)("div", {
                                        className: AF.xp,
                                        children: [
                                            (0, f.jsx)(n5.E, {
                                                variant: "body-sm/normal",
                                                className: AF.KR,
                                                children: n.name,
                                            }),
                                            A
                                                ? (0, f.jsx)(Ab.E, {
                                                      type: { text: V.intl.string(V.t["7uFZGt"]) },
                                                      variant: "critical",
                                                  })
                                                : N
                                                  ? (0, f.jsx)(Ab.E, {
                                                        type: { text: V.intl.string(V.t["6anton"]) },
                                                        variant: "primary",
                                                    })
                                                  : E
                                                    ? (0, f.jsx)(lg.m, {
                                                          text: V.intl.string(V.t.eSuJE2),
                                                          children: (0, f.jsx)("div", {
                                                              className: AF.qc,
                                                              children: (0, f.jsx)(Ab.E, {
                                                                  type: { text: V.intl.string(V.t.NrRwIl) },
                                                                  variant: "warning",
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            m
                                                ? (0, f.jsx)(lg.m, {
                                                      text: V.intl.string(V.t.nv1IqK),
                                                      children: (0, f.jsx)("div", {
                                                          className: AF.Bi,
                                                          children: (0, f.jsx)(Ab.E, {
                                                              type: { text: V.intl.string(V.t["sBl3X/"]) },
                                                              variant: "secondary",
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            (0, f.jsx)(n4.D, {
                                onClick: i(r),
                                "aria-label": V.intl.string(V.t.e5eQOy),
                                "aria-controls": d,
                                "aria-expanded": s,
                                focusProps: { ringTarget: t },
                                children: (0, f.jsx)(mR.ChevronSmallDownIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ic()(AF.D6, { [AF.S7]: s }),
                                }),
                            }),
                        ],
                    });
                },
            }),
            null != i && s
                ? (0, f.jsxs)("div", {
                      id: d,
                      children: [
                          (0, f.jsx)("div", { className: AF.yF }),
                          (0, f.jsx)(AG.A, { groupListingId: i.id, subscription: t, className: AF.kE }),
                          (0, f.jsxs)("div", {
                              className: AF.Zx,
                              children: [
                                  (0, f.jsx)(AB, { label: b, value: p }),
                                  (0, f.jsx)(AB, {
                                      label: V.intl.string(V.t.dltUMH),
                                      value: h,
                                      showInfoIcon: N,
                                      infoIconTooltipText: N ? V.intl.string(V.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, f.jsx)(AB, { label: V.intl.string(V.t.AOcwWB), value: T }),
                              ],
                          }),
                          (0, f.jsx)(AA.h, { size: 16 }),
                          !A &&
                              !m &&
                              (0, f.jsx)(lu.D, {
                                  label: V.intl.string(V.t.wmMFvA),
                                  children: (0, f.jsx)(AX, { subscription: t }),
                              }),
                          !C &&
                              (0, f.jsx)(Az, {
                                  isTrial: N,
                                  isCancelled: A,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: g,
                                  onCancelSubscriptionClick: function () {
                                      if (null != l && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, lp.qf)((t) => (0, f.jsx)(AV, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != l &&
                                          ((0, d9.pX)(_.BVt.CHANNEL(l.id, Aw.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tH.default)(),
                                          AN.A.show(
                                              _.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              V.intl.string(V.t.DvbaM4),
                                              () => {
                                                  (AR.A.setState({ subsection: eR.nR }),
                                                      (0, na.openUserSettings)(S.X.SUBSCRIPTIONS_PANEL));
                                              },
                                          ));
                                  },
                                  onResubscribeClick: async function () {
                                      try {
                                          (u(!0),
                                              await oG.QP(t, c),
                                              (0, Ak.E)({
                                                  title: V.intl.string(V.t.oPV2cy),
                                                  body: V.intl.string(V.t.DdRizV),
                                              }));
                                      } finally {
                                          u(!1);
                                      }
                                  },
                              }),
                      ],
                  })
                : null,
        ],
    });
};
var AY = n(661097);
let AW = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, I.bG)([Af.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [Af.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? Ax.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? Ax.M_.NONE
                                  : Ax.M_.IN_SUBSCRIPTION_SERVER;
                        })([Af.A]),
                    ) === Ax.M_.SUBSCRIBED,
                n = (0, I.bG)([ul.A], () => ul.A.getActiveGuildSubscriptions()),
                i = x.useRef(!1);
            return (
                x.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            l = ul.A.getActiveGuildSubscriptions();
                        return (
                            ((l?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !ul.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), oG.hP());
                }, [e, t]),
                n ?? AI
            );
        })(),
        { loading: i } = (0, Ap.eb)(n);
    return ((0, AT.A)(oF.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, f.jsx)(oj.y, {})
        : 0 === n.length
          ? null
          : (0, f.jsxs)("div", {
                children: [
                    (0, f.jsx)(j.$, {
                        text: V.intl.string(V.t.hqyhKQ),
                        icon: AS.ArrowSmallUpIcon,
                        variant: "secondary",
                        onClick: t,
                    }),
                    (0, f.jsx)(AA.h, { size: 10 }),
                    (0, f.jsx)(n3.n, {
                        label: V.intl.string(V.t["KzCF/6"]),
                        description: V.intl.string(V.t["Y+ucR7"]),
                        children: (0, f.jsx)("div", {
                            className: AY.A,
                            children: n.map((e) => (0, f.jsx)(AH, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var AK = n(327479),
    AZ = n(932012);
function Aq(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, f.jsxs)("div", {
        children: [
            (0, f.jsx)(N.D, { variant: "heading-sm/semibold", children: V.intl.string(V.t["48ywCu"]) }),
            (0, f.jsx)(AA.h, { size: 4 }),
            (0, f.jsx)(n5.E, { variant: "body-md/normal", className: AZ.yV, children: V.intl.string(V.t.VWxmSo) }),
            (0, f.jsx)(AA.h, { size: 24 }),
            (0, f.jsxs)("div", {
                className: AZ.Nr,
                children: [
                    (0, f.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: AZ._e }),
                    (0, f.jsxs)("div", {
                        className: AZ.FS,
                        children: [
                            (0, f.jsx)(N.D, {
                                variant: "heading-xl/semibold",
                                className: AZ.wx,
                                children: V.intl.string(V.t["48ywCu"]),
                            }),
                            (0, f.jsx)(n5.E, {
                                variant: "body-md/normal",
                                className: AZ.h_,
                                children: V.intl.format(V.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, f.jsx)(AK.A, { onClick: t, text: V.intl.string(V.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var AQ = n(548411),
    AJ = n(417098),
    A$ = n(143582),
    A0 = n(915043),
    A1 = n(631466);
function A2(e) {
    let { className: t, header: n, headerClassName: i, children: l } = e,
        s = x.useMemo(() => {
            let e = !1;
            return (
                x.Children.forEach(l, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [l]);
    return (0, f.jsxs)("div", {
        className: ic()(A1.iE, t),
        children: [
            (0, f.jsx)("div", { className: ic()(A1.wx, i), children: n }),
            s && (0, f.jsx)("div", { className: A1.Qs, children: l }),
        ],
    });
}
var A3 = n(885996),
    A5 = n(251843),
    A4 = n(664121),
    A6 = n(950305),
    A8 = n(943775),
    A7 = n(123791),
    A9 = n(900797),
    Ee = n(611643);
let Et = x.createContext({ isOpen: !1, toggleOpen: () => {} });
function En(e) {
    let { children: t } = e,
        [n, i] = x.useReducer((e) => !e, !1),
        l = x.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, f.jsx)(Et.Provider, { value: l, children: t(n) });
}
En.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: l } = x.useContext(Et),
        s = i ? A9.ChevronSmallUpIcon : mR.ChevronSmallDownIcon,
        r = null != n ? n : i ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.XJuakA);
    return (0, f.jsxs)(n4.D, {
        className: ic()(Ee.L, t),
        onClick: l,
        children: [
            (0, f.jsx)(n5.E, { variant: "heading-xs/semibold", tag: "div", color: "currentColor", children: r }),
            (0, f.jsx)(s, { size: "sm", color: "currentColor" }),
        ],
    });
};
var Ei = n(627363),
    El = n(328968),
    Es = n(163437),
    Er = n(3432);
function Ea(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var Eo = n(562312),
    Eu = (((d = {})[(d.LOADING = 0)] = "LOADING"), (d[(d.DONE = 1)] = "DONE"), (d[(d.ERROR = 2)] = "ERROR"), d);
function Ed(e) {
    let { subscription: t, navigateToSwitchPlan: n, loadingState: i } = e,
        l = t.metadata?.application_subscription_guild_id,
        { renewalMutations: s, planId: r } = t,
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
        } = (0, I.cf)(
            [cm.A, cA.A, El.A, lv.A],
            () => {
                let e,
                    n = cm.A.get(r),
                    i = null != n ? cA.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? El.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, Es.PJ)(o.skuFlags),
                    d = u && null != l ? lv.A.getGuild(l) : void 0,
                    c = (0, Es.Uo)(t, i),
                    g = u && null != l && null == d;
                if (!1 === c && null != s && s.items.length > 0) {
                    let t = s.items[0];
                    e = cm.A.get(t.planId) ?? void 0;
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
            [l, r, s, t],
        ),
        { data: h } = (0, Ei.YY)(a),
        S = x.useMemo(() => (null != h ? (0, A8.A)(h, 100) : null), [h]),
        T = g?.deleted ?? !1,
        p = null != g && (0, Es.Se)(g),
        b = t.status === _.Dmq.PAST_DUE,
        { analyticsLocations: C } = (0, ez.Ay)(),
        [y] = (0, Aj.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: C,
            analyticsLocation: tk.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = Ea(t.currentPeriodEnd),
        j = 0 === i;
    return (0, f.jsxs)(A2, {
        headerClassName: Eo.dL,
        header:
            !1 === j
                ? (0, f.jsxs)(f.Fragment, {
                      children: [
                          (0, f.jsxs)("div", {
                              className: Eo.VW,
                              children: [
                                  null != S &&
                                      (0, f.jsx)(A5._, { src: S.href, imageClassName: Eo.Z2, width: 40, height: 40 }),
                                  (0, f.jsxs)("div", {
                                      className: Eo.aF,
                                      children: [
                                          (0, f.jsx)(N.D, {
                                              variant: "heading-sm/semibold",
                                              lineClamp: 1,
                                              children: h?.name ?? V.intl.string(V.t["7kqy7W"]),
                                          }),
                                          (0, f.jsx)(n5.E, {
                                              variant: "body-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? V.intl.string(V.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, f.jsx)("div", {
                              className: Eo.Pz,
                              children:
                                  null != h &&
                                  null != u &&
                                  null != g &&
                                  (0, f.jsx)(EE, {
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
                : (0, f.jsx)(oj.y, { type: oj.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, f.jsx)(EA, {
                    type: "warning",
                    title: p
                        ? V.intl.formatToPlainString(V.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : V.intl.formatToPlainString(V.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && A && (0, f.jsx)(EA, { type: "warning", title: V.intl.string(V.t.SmSP8Q) }),
            b && (0, f.jsx)(EA, { type: "danger", title: V.intl.string(V.t.fvOqBo) }),
            (0, f.jsxs)("div", {
                className: Eo.zH,
                children: [
                    (0, f.jsx)(Em, {
                        title: V.intl.string(V.t["5D/KEH"]),
                        content: d
                            ? (0, f.jsxs)(f.Fragment, {
                                  children: [
                                      (0, f.jsxs)("span", {
                                          className: Eo.yW,
                                          children: [
                                              (0, f.jsx)(A4.ServerIcon, { size: "xs" }),
                                              V.intl.string(V.t.QjL3vn),
                                          ],
                                      }),
                                      null != c &&
                                          (0, f.jsxs)("span", {
                                              className: Eo._t,
                                              children: [
                                                  (0, f.jsx)(n5.E, {
                                                      variant: "body-sm/normal",
                                                      color: "text-muted",
                                                      children: V.intl.format(V.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, f.jsx)(ma.Ay, { guild: c, size: ma.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, f.jsxs)("span", {
                                  className: Eo.yW,
                                  children: [(0, f.jsx)(A6.UserIcon, { size: "xs" }), V.intl.string(V.t["6anEVv"])],
                              }),
                    }),
                    (0, f.jsx)(Ec, { invoicePreview: y, subscriptionPlan: o }),
                    (0, f.jsx)(Em, {
                        title: V.intl.string(V.t.dnUzb6),
                        content: Ea(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, f.jsx)(Eg, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: E }),
                ],
            }),
            (0, f.jsx)(ES, {
                subscription: t,
                currentInvoicePreview: y,
                loadingState: i,
                isDeleted: T,
                isCancelled: m,
            }),
            null != h &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, f.jsx)(Eh, { appId: h.id, listingBenefits: u.benefits }),
        ],
    });
}
function Ec(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, f.jsx)(Em, { title: V.intl.string(V.t.KI7ERx), content: "" });
    let i = (0, u5.CE)((0, u5.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, f.jsx)(Em, { title: V.intl.string(V.t.KI7ERx), content: i });
    let s = (0, u5.CE)((0, u5.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, f.jsx)(Em, {
        title: V.intl.string(V.t.KI7ERx),
        content: (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(n5.E, { variant: "body-sm/semibold", children: s }),
                s !== i &&
                    (0, f.jsx)(lg.m, {
                        text: V.intl.format(V.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, f.jsx)(n5.E, {
                            variant: "body-xs/medium",
                            color: "text-muted",
                            children: (0, f.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function Eg(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, u5.CE)((0, u5.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, f.jsx)(Em, {
            title: V.intl.string(V.t.hIhAM3),
            content: (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)(n5.E, { variant: "body-sm/medium", children: n }),
                    (0, f.jsx)(n5.E, {
                        variant: "body-sm/normal",
                        children: V.intl.format(V.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, f.jsx)(Em, { title: t ? V.intl.string(V.t.enxcAl) : V.intl.string(V.t["Ms+6Zq"]), content: n });
}
function Em(e) {
    let { title: t, content: n } = e;
    return (0, f.jsxs)("div", {
        className: Eo.nM,
        children: [
            (0, f.jsx)(n5.E, { variant: "body-sm/medium", children: t }),
            (0, f.jsx)(n5.E, { variant: "body-sm/medium", className: Eo.u4, children: n }),
        ],
    });
}
function EA(e) {
    let { type: t, title: n } = e;
    return (0, f.jsx)("div", {
        className: Eo.Xm,
        children: (0, f.jsx)(iK.w, { type: "warning" === t ? "warning" : "critical", message: n, role: "status" }),
    });
}
function EE(e) {
    let {
            app: t,
            storeListing: i,
            sku: l,
            subscription: s,
            isCancelled: r,
            isOrphanedGuildSubscription: a,
            guild: o,
            renewalSkuId: u,
            navigateToSwitchPlan: d,
        } = e,
        c = (0, Es.Se)(l),
        { analyticsLocations: g } = (0, ez.Ay)(),
        [m, A] = x.useState(!1),
        E = (0, A7.C)(t.id),
        h = (0, I.bG)([cA.A], () => cA.A.getParentSKU(i.skuId), [i.skuId]),
        S = x.useMemo(() => {
            var e, t;
            let n;
            return null == h
                ? []
                : ((e = i.id),
                  (t = E.subscriptions),
                  (n = new Set(h.bundledSkuIds)),
                  t.filter((t) => t.id !== e && n.has(t.skuId)));
        }, [i.id, E, h]),
        T = 0 !== S.length;
    return (0, f.jsxs)("div", {
        className: Eo.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, f.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(V.t.QtMnkW),
                        onClick: async function () {
                            try {
                                A(!0);
                                let { subscription: e } = await (0, oG.QP)(s, g);
                                if (null == e) return;
                                (0, lp.mM)(async () => {
                                    let { default: t } = await Promise.all([n.e(888454), n.e(52396)]).then(
                                        n.bind(n, 115623),
                                    );
                                    return (n) =>
                                        (0, f.jsx)(t, {
                                            ...n,
                                            storeListing: i,
                                            subscription: ub.A.createFromServer(e),
                                        });
                                });
                            } finally {
                                A(!1);
                            }
                        },
                        loading: m,
                    })
                  : (0, f.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(V.t["E8G/tr"]),
                        onClick: function () {
                            (0, lp.mM)(async () => {
                                let { default: e } = await Promise.all([n.e(509032), n.e(299523)]).then(
                                    n.bind(n, 548750),
                                );
                                return (n) =>
                                    (0, f.jsx)(e, { ...n, application: t, storeListing: i, subscription: s, guild: o });
                            });
                        },
                    }),
            T &&
                null != h &&
                !1 === r &&
                !1 === a &&
                (0, f.jsx)(j.$, {
                    variant: "primary",
                    size: "sm",
                    text: V.intl.string(V.t.R74ZBR),
                    onClick: () => {
                        d({
                            currentSubscription: s,
                            alternativeListings: S,
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
function Eh(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, f.jsx)(En, {
        children: (e) =>
            (0, f.jsxs)("div", {
                className: Eo.PX,
                children: [
                    (0, f.jsxs)("div", {
                        className: Eo.wV,
                        children: [
                            e && (0, f.jsx)(n5.E, { variant: "body-sm/semibold", children: V.intl.string(V.t.mORL67) }),
                            (0, f.jsx)(En.Toggle, {
                                className: Eo.Bh,
                                text: e ? V.intl.string(V.t.gsbFAw) : V.intl.string(V.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: l, icon: s } = e;
                              return (0, f.jsx)(A3.F, { header: i, icon: (0, Er.N)(t, s), description: l }, n);
                          })
                        : null,
                ],
            }),
    });
}
function ES(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: l, isCancelled: s } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, f.jsx)("div", {
                className: Eo.Ji,
                children: (0, f.jsx)(lu.D, {
                    label: V.intl.string(V.t.azZaZa),
                    children: (0, f.jsx)(oj.y, { type: oj.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, f.jsx)("div", {
                  className: Eo.Ji,
                  children: (0, f.jsxs)(AJ.$T, {
                      color: AJ.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          V.intl.format(V.t.IIHUUF, { subscriptionId: t.id }),
                          (0, f.jsx)("br", {}),
                          V.intl.format(V.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, f.jsx)("div", {
                  className: Eo.Ji,
                  children: (0, f.jsx)(lu.D, {
                      label: V.intl.string(V.t.azZaZa),
                      children: (0, f.jsx)(AO.A, { subscription: t, currentInvoicePreview: n, disabled: l || s }),
                  }),
              });
}
var ET = (((c = {}).HOME = "HOME"), (c.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), c),
    Ep = n(856383);
let Ef = (0, I.UT)(cm.A, {
    getQueryId: _.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = cm.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && Ep.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, c2.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var Ex = n(240248),
    EI = n(237218),
    E_ = n(763064);
function Eb(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [l, s] = x.useState(!1),
        [r, a] = x.useState(null),
        o =
            null != r &&
            (0, f.jsx)("button", {
                className: E_.x6,
                onClick: () => s((e) => !e),
                children: (0, f.jsxs)(n5.E, {
                    className: E_.B0,
                    variant: "body-sm/medium",
                    color: "text-brand",
                    children: [
                        l ? V.intl.string(V.t["JQX/Pb"]) : V.intl.string(V.t.Fbrd8J),
                        l
                            ? (0, f.jsx)(A9.ChevronSmallUpIcon, { color: n1.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, f.jsx)(mR.ChevronSmallDownIcon, { color: n1.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [u, d] = x.useState(null),
        c = x.useCallback(() => {
            if (null == u) return;
            let { scrollHeight: e, clientHeight: t } = u;
            e > t && a({ truncatedHeight: t, expandedHeight: e });
        }, [u]);
    x.useEffect(() => {
        requestAnimationFrame(c);
    }, [c, t, n]);
    let g = "auto";
    return (
        null != r && (g = l ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, f.jsxs)("div", {
            children: [
                (0, f.jsx)(n5.E, {
                    ...i,
                    className: E_.Qs,
                    lineClamp: l ? void 0 : n,
                    ref: d,
                    style: { height: g },
                    children: t,
                }),
                o,
            ],
        })
    );
}
var EN = n(920352);
function EC(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: l, benefits: s, description: r } = n,
        a = x.useMemo(() => (null == n.thumbnail ? null : (0, EI.t)(l, n.thumbnail, 256)), [l, n.thumbnail]),
        { data: o } = Ef(n.skuId),
        u = x.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, ax._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, f.jsxs)(A2, {
              className: ic()(EN.iE, i),
              header: (0, f.jsxs)(f.Fragment, {
                  children: [
                      (0, f.jsxs)("div", {
                          className: EN.qd,
                          children: [
                              null != a &&
                                  (0, f.jsx)(A5._, { src: a.href, imageClassName: EN.rW, width: 48, height: 48 }),
                              (0, f.jsxs)("div", {
                                  children: [
                                      (0, f.jsx)(N.D, { variant: "heading-sm/semibold", children: n.summary }),
                                      (0, f.jsx)(n5.E, { variant: "body-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, Ex.uJ)(r) &&
                      (0, f.jsx)("div", {
                          className: EN.h_,
                          children: (0, f.jsx)(Eb, { variant: "body-sm/medium", children: r }),
                      }),
                  null != s &&
                      s.length > 0 &&
                      (0, f.jsx)("div", {
                          className: EN.PX,
                          children: s.map((e) => {
                              let { id: t, name: n, description: i, icon: s } = e;
                              return (0, f.jsx)(A3.F, { header: n, icon: (0, Er.N)(l, s), description: i }, t);
                          }),
                      }),
              ],
          });
}
var Ey = n(185438),
    Ev = n(683380);
function Ej(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: l,
            navigateToHome: s,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, A8.A)(t, 100),
        u = (0, Es.PJ)(r.flags),
        d = u ? A4.ServerIcon : A6.UserIcon,
        c = u ? V.intl.string(V.t["46YF2D"]) : V.intl.string(V.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, I.bG)([lv.A], () => (u && null != g ? lv.A.getGuild(g) : void 0), [g, u]),
        A = (0, I.bG)(
            [cA.A],
            () => {
                if (null != a) return cA.A.get(a);
            },
            [a],
        ),
        E = Ea(n.currentPeriodEnd);
    return (0, f.jsxs)("div", {
        children: [
            (0, f.jsxs)("div", {
                className: Ev.wx,
                children: [
                    null != o && (0, f.jsx)(A5._, { src: o.href, imageClassName: Ev.Z2, width: 48, height: 48 }),
                    (0, f.jsxs)("div", {
                        children: [
                            (0, f.jsx)(N.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, f.jsxs)("div", {
                                className: Ev.p4,
                                children: [
                                    (0, f.jsxs)(N.D, {
                                        variant: "heading-sm/medium",
                                        className: Ev.N4,
                                        children: [(0, f.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, f.jsxs)(f.Fragment, {
                                            children: [
                                                (0, f.jsx)(n5.E, { variant: "body-md/normal", children: "\u2022" }),
                                                (0, f.jsxs)("span", {
                                                    className: Ev.vP,
                                                    children: [
                                                        (0, f.jsx)(ma.Ay, { guild: m, size: ma.Ay.Sizes.SMOL }),
                                                        (0, f.jsx)(N.D, {
                                                            variant: "heading-sm/semibold",
                                                            color: "text-muted",
                                                            children: V.intl.format(V.t["7ZD8p1"], {
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
            (0, f.jsx)(En, {
                children: (e) =>
                    (0, f.jsxs)("div", {
                        className: Ev._B,
                        children: [
                            (0, f.jsx)(n5.E, { variant: "body-md/normal", children: V.intl.string(V.t["goe+hk"]) }),
                            e &&
                                (0, f.jsxs)(f.Fragment, {
                                    children: [
                                        (0, f.jsx)(n5.E, {
                                            variant: "body-md/normal",
                                            children: V.intl.format(V.t["Q8qJ+5"], {}),
                                        }),
                                        (0, f.jsx)(n5.E, {
                                            variant: "body-md/normal",
                                            children: V.intl.format(V.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, f.jsx)(En.Toggle, {
                                text: e ? V.intl.string(V.t["1Rkq/E"]) : V.intl.string(V.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, f.jsxs)("div", {
                className: Ev.x0,
                children: [
                    (0, f.jsx)(EC, {
                        storeListing: i,
                        className: Ev.o3,
                        cta: (0, f.jsxs)("div", {
                            className: Ev.cJ,
                            children: [
                                (0, f.jsx)(n5.E, {
                                    variant: "body-sm/medium",
                                    color: "text-brand",
                                    children: V.intl.string(V.t.fHIpOY),
                                }),
                                null != A &&
                                    (0, f.jsx)(n5.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-subtle",
                                        children: V.intl.format(V.t["OQk+jr"], { endDate: E }),
                                    }),
                            ],
                        }),
                    }),
                    l.map((e) =>
                        e.skuId === a
                            ? (0, f.jsx)(
                                  EC,
                                  {
                                      storeListing: e,
                                      cta: (0, f.jsx)(n5.E, {
                                          variant: "body-sm/semibold",
                                          color: "text-subtle",
                                          children: V.intl.format(V.t.nn88hB, { startDate: E }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, f.jsx)(EO, { storeListing: e, guildId: g, navigateToHome: s }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function EO(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: l } = (0, Ey.A)({
            analyticsLocation: _.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, f.jsx)(EC, {
        storeListing: t,
        cta: (0, f.jsx)(j.$, { variant: "primary", size: "sm", text: V.intl.string(V.t["+KwmBt"]), onClick: l }),
    });
}
class ER extends x.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, f.jsxs)(AJ.$T, {
                  color: AJ.Hv.DANGER,
                  style: { borderRadius: 0 },
                  children: [
                      V.intl.format(V.t.IIHUUF, { subscriptionId: this.props.subscription.id }),
                      " ",
                      V.intl.format(V.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                  ],
              })
            : this.props.children;
    }
}
function ED(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, l] = x.useState({ route: ET.HOME }),
        { route: s } = i;
    function r() {
        l({ route: ET.HOME });
    }
    let a = (e) => {
            (l({ route: ET.SWITCH_APP_PLANS, ...e }), n(V.intl.string(V.t.VFqtkP), r));
        },
        [o, u] = x.useState({});
    x.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: Eu.LOADING })),
                (0, A$._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: Eu.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: Eu.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, A0.E)(),
        c = d !== A0.mJ.LOADED;
    switch (s) {
        case ET.HOME:
            return (0, f.jsx)(f.Fragment, {
                children: t.map((e) =>
                    (0, f.jsx)(
                        ER,
                        {
                            subscription: e,
                            children: (0, f.jsx)(Ed, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? Eu.LOADING : (o[e.id] ?? Eu.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case ET.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, f.jsx)(Ej, { ...m, navigateToHome: r });
        default:
            (0, io.xb)(s);
    }
}
var EL = n(707989);
function EP(e) {
    let { onGoBack: t } = e,
        n = (0, I.yK)(
            [ul.A],
            () =>
                ul.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, l] = x.useState();
    return (
        null == i && (i = (0, f.jsx)(EG, { onBack: t, title: V.intl.string(V.t["DB/m9a"]) })),
        (0, f.jsxs)("div", {
            children: [
                i,
                (0, f.jsx)("div", {
                    className: EL.A,
                    children: (0, f.jsx)(ED, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            l(
                                (0, f.jsx)(EG, {
                                    title: e,
                                    onBack: () => {
                                        (t(), l(void 0));
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
function EG(e) {
    let { onBack: t, title: n } = e;
    return (0, f.jsxs)("div", {
        className: EL.D,
        children: [
            (0, f.jsx)(ld.K, {
                "aria-label": V.intl.string(V.t["13/7kX"]),
                icon: () => (0, f.jsx)(AQ.ArrowLargeLeftIcon, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, f.jsx)(N.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var EM = n(945810);
let EU = (0, EM.mj)({
    kind: "user",
    name: "2026-11-subscription-management-settings-brand-refresh",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var EV = n(366999),
    Ek = n(391659);
function Ew(e) {
    let t,
        n,
        {
            showChargingUpState: i,
            rowValueText: l,
            endsAt: s,
            fractionalState: r,
            activationDate: a,
            hasPremiumGroup: o,
        } = e;
    o
        ? ((t = V.intl.string(gV.default["/S02sx"])), (n = V.intl.string(gV.default.OPJNST)))
        : i
          ? ((t = V.intl.string(V.t["hT6i/0"])),
            (n = null != a ? V.intl.format(V.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = V.intl.string(V.t["3G0CTC"])),
            (n = r === tJ.xc.FP_SUB_PAUSED ? V.intl.format(V.t.MMvaIG, { resumeDate: s.toDate() }) : null));
    let u = ic()({ [Ek.Hs]: i, [Ek.mT]: !i }),
        d = ic()({ [Ek.CQ]: i, [Ek.ZM]: !i }),
        c = ic()({ [Ek.EM]: !i });
    return (0, f.jsxs)("div", {
        className: Ek.r6,
        children: [
            (0, f.jsxs)("div", {
                className: Ek.Nv,
                children: [
                    (0, f.jsx)(N.D, { variant: "heading-sm/semibold", className: c, children: t }),
                    null !== n && (0, f.jsx)(n5.E, { variant: "body-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, f.jsx)("div", {
                    className: Ek.ZS,
                    children: (0, f.jsx)("div", {
                        className: u,
                        children: (0, f.jsx)(n5.E, { variant: "body-sm/semibold", className: d, children: l }),
                    }),
                }),
        ],
    });
}
let EF = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: l } = e,
        s = (0, ax.kX)(t),
        r = s.length > 0,
        a = (0, EV.Ay)(t.endsAt, EV.yE.SHORT_TIME),
        o = r ? s : a;
    return (0, f.jsx)("div", {
        children: (0, f.jsxs)("div", {
            className: ic()(n, Ek.f8),
            children: [
                (0, f.jsx)("div", {
                    className: Ek.J_,
                    children: (0, f.jsxs)("div", {
                        className: Ek.Bh,
                        children: [
                            (0, f.jsx)("div", {
                                className: Ek.xt,
                                children: (0, f.jsx)(au.NitroWheelIcon, {
                                    size: "md",
                                    color: "white",
                                    className: Ek.T8,
                                }),
                            }),
                            (0, f.jsx)("div", {
                                className: Ek.pt,
                                children: (0, f.jsx)(N.D, {
                                    variant: "heading-sm/semibold",
                                    children: V.intl.string(V.t.DFMPWS),
                                }),
                            }),
                            (0, f.jsx)(n5.E, {
                                className: Ek.PJ,
                                variant: "body-md/semibold",
                                children: s.length > 0 ? s : V.intl.string(V.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, f.jsx)(Ew, {
                    showChargingUpState: r,
                    rowValueText: o,
                    endsAt: t.endsAt,
                    fractionalState: t.fractionalState,
                    activationDate: i,
                    hasPremiumGroup: l,
                }),
            ],
        }),
    });
};
var EB = n(358787);
function EX(e) {
    let t,
        {
            user: n,
            planId: i,
            count: l,
            userPremiumSubscription: s,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, I.yK)([cm.A], () => [cm.A.get(i), null != s ? cm.A.get(s.planId) : null]);
    if (null == o || ax.Ay.getInterval(i).intervalType !== tJ.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, ax.z4)(i),
        m = ax.Ay.getDisplayName(i);
    if (a) t = V.intl.string(gV.default["5asczk"]);
    else if (c && null != s) {
        let e;
        e = new Date(s.status === _.Dmq.PAUSED && null != s.pauseEndsAt ? s.pauseEndsAt : s.currentPeriodEnd);
        let n = (0, ax._e)(e, r);
        t = V.intl.formatToPlainString(V.t["5CNRRA"], { date: n ?? 0 });
    } else t = V.intl.formatToPlainString(V.t.eNXZ5O, { planName: m });
    let A = g || n.hasFreePremium() || (null != s && s.isPurchasedExternally);
    return (0, f.jsxs)("div", {
        className: Ek.Bh,
        children: [
            (0, f.jsx)("div", {
                className: ic()({
                    [Ek.bY]: g,
                    [Ek.sr]: o.skuId === tJ.pe.TIER_0,
                    [Ek.lP]: o.skuId === tJ.pe.TIER_1,
                    [Ek.eb]: o.skuId === tJ.pe.TIER_2,
                }),
                children: g
                    ? (0, f.jsx)(g$.BoostGemIcon, { size: "md", color: "currentColor", className: Ek.Kk })
                    : (0, f.jsx)(au.NitroWheelIcon, { size: "md", color: "currentColor", className: Ek.Kk }),
            }),
            (0, f.jsxs)("div", {
                className: Ek.pt,
                children: [
                    (0, f.jsx)(N.D, {
                        variant: "heading-sm/semibold",
                        children: V.intl.format(V.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, f.jsx)(N.D, {
                            className: Ek.gj,
                            variant: "heading-xs/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, f.jsx)(n5.E, {
                className: Ek.PJ,
                variant: "body-md/semibold",
                children: V.intl.format(V.t["ess/xl"], { count: l }),
            }),
        ],
    });
}
let Ez = function (e) {
    let { className: t, entitlements: n } = e,
        i = K()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, I.yK)([ce.A], () => ce.A.getUnactivatedFractionalPremiumUnits()),
        s = (0, I.bG)([ul.A], () => ul.A.getPremiumSubscription()),
        r = (0, I.bG)([ul.A], () => null == ul.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === tJ.gD.PREMIUM_MONTH_TIER_1),
        o = (0, I.bG)([sE.default], () => sE.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, f.jsxs)("div", {
        children: [
            (0, f.jsx)("div", {
                className: ic()(t, Ek.xF, Ek.J_),
                children: Object.keys(i).map((e) =>
                    (0, f.jsx)(
                        EX,
                        {
                            planId: e,
                            count: i[e].length,
                            userPremiumSubscription: s,
                            user: o,
                            unconsumedFractionalPremiumUnits: l,
                            hasPremiumGroup: u,
                        },
                        e,
                    ),
                ),
            }),
            a &&
                r &&
                (0, f.jsxs)("div", {
                    children: [
                        (0, f.jsx)(n5.E, {
                            className: Ek.eT,
                            variant: "body-md/normal",
                            children: V.intl.string(V.t["VNr4+O"]),
                        }),
                        (0, f.jsx)(EB.iE, {}),
                    ],
                }),
        ],
    });
};
var EH = n(902782);
function EY(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: l } = (0, ez.Ay)(),
        [s] = (0, Aj.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: l,
            analyticsLocation: tk.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == s) return null;
    let r = i ? EH.r : EH.a,
        a = s.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, ax.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = cm.A.get(o);
    tE()(null != u, "Missing plan");
    let d = (0, u5.$g)(s.total, s.currency);
    return (
        u.interval === tJ.WT.YEAR
            ? (t = V.intl.format(V.t["jPz/39"], {
                  price: d,
                  termsUrl: _.X7G.TERMS,
                  paidURL: _.X7G.PAID_TERMS,
                  privacyUrl: _.X7G.PRIVACY,
              }))
            : u.interval === tJ.WT.MONTH &&
              (t =
                  1 === u.intervalCount
                      ? V.intl.format(V.t.m27GpI, {
                            price: d,
                            termsUrl: _.X7G.TERMS,
                            paidURL: _.X7G.PAID_TERMS,
                            privacyUrl: _.X7G.PRIVACY,
                        })
                      : V.intl.format(V.t["9xf5Vx"], {
                            price: d,
                            termsUrl: _.X7G.TERMS,
                            paidURL: _.X7G.PAID_TERMS,
                            privacyUrl: _.X7G.PRIVACY,
                            intervalCount: u.intervalCount,
                        })),
        (0, f.jsx)(n5.E, { color: "text-muted", className: r, variant: "body-xs/normal", children: t })
    );
}
function EW(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === _.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, f.jsx)(EY, { subscription: t, withOverheadSeparator: n });
}
var EK = n(488110),
    EZ = n(689255);
let Eq = { [eR.nR]: "role_subscriptions_panel", [eR.PZ]: "application_subscriptions_panel" };
function EQ() {
    return (0, f.jsx)(oB.Z, {
        className: EZ.wb,
        type: oB.Z.Types.CUSTOM,
        children: (0, f.jsxs)(lb.A, {
            align: lb.A.Align.CENTER,
            children: [
                (0, f.jsx)(i7.A, { game: null, size: i7.M.SMALL, className: EZ.pV }),
                (0, f.jsx)("span", { className: EZ.O, children: V.intl.string(V.t["jy/hyj"]) }),
            ],
        }),
    });
}
function EJ(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, m2._)(e, t));
}
function E$() {
    let e = (0, I.bG)([ce.A], () => ce.A.getForApplication(tJ.tv), [], EJ);
    return (
        x.useEffect(() => {
            (0, cP.LM)(tJ.tv);
        }, []),
        (0, f.jsx)(n3.n, {
            label: V.intl.string(V.t["2GKrvn"]),
            description: V.intl.string(V.t.Z5b2Gf),
            children:
                null != e && ax.Ay.hasAccountCredit(e)
                    ? (0, f.jsx)(Ez, { className: EZ.fX, entitlements: e })
                    : (0, f.jsx)(EQ, {}),
        })
    );
}
function E0() {
    return (0, f.jsx)("hr", { className: EZ.hr });
}
let E1 = function () {
        var e;
        let { enabled: t } = EU.useConfig({ location: "subscription_management_settings" }),
            n = (0, I.bG)([ul.A], () => ul.A.getPremiumTypeSubscription()),
            i = (0, m3.A)({ subscriptionFilter: (e) => EK.Hy.has(e.status) }),
            l = (0, I.bG)([sE.default], () => sE.default.getCurrentUser()),
            s = i.length > 1,
            r = (0, I.bG)(
                [ui.A],
                () => (null != n && null != n.paymentSourceId ? ui.A.getPaymentSource(n.paymentSourceId) : null),
                [n],
            ),
            a = (0, I.bG)([ul.A], () => ul.A.hasFetchedSubscriptions()),
            o = (0, I.bG)([oV.A], () => oV.A.isBusy),
            u = (0, c5.Y)(),
            d = AR.A.useField("subsection"),
            c = AR.A.useField("scrollToGameServers"),
            g = x.useRef(null);
        x.useEffect(() => {
            (0, it._)(null != d ? Eq[d] : S.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let m = (0, I.bG)([ul.A], () => ul.A.getActiveApplicationSubscriptions()?.length ?? 0),
            A = (0, I.bG)(
                [ul.A],
                () =>
                    Object.values(ul.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === _.rzx.GUILD)
                        .filter((e) => e.status !== _.Dmq.ENDED).length,
            ),
            E = (0, I.bG)([ul.A], () =>
                Object.values(ul.A.getSubscriptions() ?? {}).some((e) => e.type === _.rzx.GAME_SERVER),
            ),
            { servers: h } = (0, Am.f)({ enabled: E }),
            T = (0, I.yK)([ul.A], () => (0, An.eP)(h, (e) => ul.A.getSubscriptionById(e)), [h]),
            p = (0, c3.A)({ forceFetch: !0 }),
            b = (0, c7.ds)(),
            C = null !== n ? n.currentPeriodEnd : void 0,
            y =
                !(b && !(p.unactivatedUnits.length > 0)) &&
                (p.fractionalState !== tJ.xc.NONE || p.unactivatedUnits.length > 0);
        return (x.useEffect(() => {
            c &&
                a &&
                u &&
                T.length > 0 &&
                (g.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                AR.A.setState({ scrollToGameServers: !1 }));
        }, [c, a, u, T.length]),
        x.useEffect(
            () => (
                (0, c2.zS)(),
                oG.hP(),
                (0, g0.CD)(),
                oG.$o(),
                function () {
                    AR.A.resetState();
                }
            ),
            [],
        ),
        tu.A.enabled)
            ? (0, f.jsx)(oS.A, {})
            : a && u
              ? d === eR.nR
                  ? (0, f.jsx)(AW, { onGoBack: () => AR.A.setState({ subsection: null }) })
                  : d === eR.PZ
                    ? (0, f.jsx)(EP, { onGoBack: () => AR.A.setState({ subsection: null }) })
                    : (0, f.jsx)("div", {
                          className: EZ.kL,
                          children: (0, f.jsxs)("div", {
                              className: EZ.Qs,
                              children: [
                                  t
                                      ? null
                                      : (0, f.jsxs)(f.Fragment, {
                                            children: [
                                                s ? (0, f.jsx)(EK.Sb, {}) : null,
                                                null != n
                                                    ? (0, f.jsx)(EK.Ay, {
                                                          subscription: n,
                                                          paymentSource: r,
                                                          busy: o,
                                                          subscriptions: i,
                                                      })
                                                    : (0, f.jsx)(EK.TC, {}),
                                                y &&
                                                    ((e = !!l?.isPremiumWithPremiumGroup()),
                                                    (0, f.jsxs)("section", {
                                                        children: [
                                                            (0, f.jsx)(N.D, {
                                                                variant: "heading-sm/semibold",
                                                                className: EZ.HL,
                                                                children: V.intl.string(V.t.Obre8v),
                                                            }),
                                                            (0, f.jsx)(n5.E, {
                                                                variant: "body-md/normal",
                                                                className: EZ.JU,
                                                                children: V.intl.format(V.t["7Zi06b"], {
                                                                    helpCenterLink: eC.A.getArticleURL(
                                                                        _.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                                    ),
                                                                }),
                                                            }),
                                                            (0, f.jsx)(EF, {
                                                                className: EZ.fX,
                                                                fractionalPremiumInfo: p,
                                                                activationDate: C,
                                                                hasPremiumGroup: e,
                                                            }),
                                                        ],
                                                    })),
                                                (0, f.jsx)(E$, {}),
                                            ],
                                        }),
                                  A > 0 &&
                                      (0, f.jsxs)(f.Fragment, {
                                          children: [
                                              (0, f.jsx)(E0, {}),
                                              (0, f.jsx)(Ah, {
                                                  count: A,
                                                  onClickManageSubscription: () => AR.A.setState({ subsection: eR.nR }),
                                              }),
                                          ],
                                      }),
                                  m > 0 &&
                                      (0, f.jsxs)(f.Fragment, {
                                          children: [
                                              (0, f.jsx)(E0, {}),
                                              (0, f.jsx)(Aq, {
                                                  count: m,
                                                  onClickManageSubscription: () => {
                                                      (AR.A.setState({ subsection: eR.PZ }),
                                                          td.default.track(
                                                              _.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          ));
                                                  },
                                              }),
                                          ],
                                      }),
                                  T.length > 0 &&
                                      (0, f.jsxs)("div", {
                                          ref: g,
                                          children: [(0, f.jsx)(E0, {}), (0, f.jsx)(Ag, { servers: T })],
                                      }),
                                  (0, f.jsx)(E0, {}),
                                  null != n ? (0, f.jsx)(EW, { subscription: n, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, f.jsx)("div", { className: ic()(EZ.kL, EZ.Lq), children: (0, f.jsx)(oj.y, {}) });
    },
    E2 = (0, h.E2)(S.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [V.intl.string(V.t.trSpHX), V.intl.string(V.t["2GKrvn"])],
        Component: () => (0, f.jsx)(E1, {}),
    }),
    E3 = (0, h.zZ)(S.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [V.intl.string(V.t.trSpHX), V.intl.string(V.t["2GKrvn"])],
        buildLayout: () => [E2],
    }),
    E5 = (0, h.t_)(S.X.SUBSCRIPTIONS_PANEL, { useTitle: () => V.intl.string(V.t.trSpHX), buildLayout: () => [E3] }),
    E4 = (0, h.i4)(S.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.trSpHX),
        icon: m0.SubscriptionIcon,
        usePersistentBadge: function () {
            let e = (0, m1.l)();
            return x.useMemo(
                () => ({
                    badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e
                        ? (0, f.jsx)(i$.CircleErrorIcon, { size: "xs", color: n1.A.unsafe_rawColors.YELLOW_300 })
                        : null,
                }),
                [e],
            );
        },
        buildLayout: () => [E5],
    }),
    E6 = (0, h.WI)(S.X.BILLING_SECTION, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        buildLayout: () => [gJ, m$, E4, cZ, d_],
    });
var E8 = n(540999),
    E7 = n(663417),
    E9 = n(611677),
    he = n(148810),
    ht = n(521502),
    hn = n(380610),
    hi = n(390486),
    hl = n(103557),
    hs = n(986238);
class hr extends x.Component {
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
        e.key === lk.dh.ENTER && this.handleAddAllowedVersion();
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
            t = await (0, he.SB)(e);
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
        var e;
        return "discord_ios" in (e = this.props.buildOverrides ?? {}) || "discord_android" in e;
    }
    renderSettingsForm() {
        let {
                ttlSeconds: e,
                releaseChannel: t,
                userIdEntry: n,
                userIdEntryError: i,
                allowedVersions: l,
                allowedVersionEntry: s,
                allowedVersionEntryError: r,
                allowLoggedOut: a,
                experiments: o,
                experimentsError: u,
            } = this.state,
            d = hs.fL.find((t) => t.value === e),
            c = l.map((e) => ({ id: e, label: e, value: e }));
        return (0, f.jsxs)(q.B, {
            gap: 20,
            children: [
                (0, f.jsx)(lo.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: hs.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, f.jsx)(lo.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: hs.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, f.jsxs)(q.B, {
                          gap: 20,
                          children: [
                              (0, f.jsx)(lf.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: s,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: {
                                      icon: iY.PlusSmallIcon,
                                      onClick: this.handleAddAllowedVersion,
                                      "aria-label": "Add",
                                  },
                              }),
                              (0, f.jsx)(lo.l, {
                                  selectionMode: "single",
                                  label: "Remove allowed app version",
                                  value: void 0,
                                  options: c,
                                  onSelectionChange: this.handleRemoveAllowedVersion,
                                  disabled: 0 === l.length,
                              }),
                          ],
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, f.jsx)(hl.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                this.isMobile()
                    ? null
                    : (0, f.jsx)(hl.f, {
                          label: "Client Experiment Override",
                          description:
                              "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                          value: o,
                          error: u,
                          onChange: this.handleExperiments,
                          placeholder: '{"2022-01_threads":1}',
                      }),
                (0, f.jsx)(t4.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, f.jsx)("div", {});
        let n = "info";
        switch (t) {
            case 0:
                n = "critical";
                break;
            case 1:
                n = "warning";
        }
        return (0, f.jsx)(iK.w, { type: n, message: e, role: "critical" === n ? "alert" : "status" });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, f.jsx)(lT.a, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, f.jsx)(cb.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
var ha = n(428524);
let ho = [
        { id: "discord_web", value: "discord_web", label: "Discord web / desktop" },
        { id: "discord_marketing", value: "discord_marketing", label: "Marketing website" },
        { id: "discord_developers", value: "discord_developers", label: "Developer portal" },
        { id: "discord_ios", value: "discord_ios", label: "Discord iOS" },
        { id: "discord_android", value: "discord_android", label: "Discord Android" },
    ],
    hu = [
        { id: "branch", value: "branch", label: "Branch name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ],
    hd = { type: "branch", id: "" },
    hc = (0, h.E2)(S.X.BUILD_OVERRIDES, {
        useSearchTerms: () => ["build override", "build overrides", "branch", "commit"],
        Component: function () {
            let e = (0, I.bG)([ht.A], () =>
                    (0, hn.kK)() ? ht.A.getCurrentBuildOverride().overrides?.discord_web : null,
                ),
                [t] = x.useState(hi.HP),
                [n, i] = x.useState(),
                [l, s] = x.useState("discord_web"),
                [r, a] = x.useState(hd),
                [o, u] = x.useState(!1),
                [d, c] = x.useState(!1),
                [g, m] = x.useState(),
                [A, E] = x.useState(!1),
                h = void 0 === n,
                S = d || o || h,
                T = n?.[l],
                p = r.id.trim(),
                _ = null != T ? r.id !== T.id || r.type !== T.type : "" !== r.id,
                b = "discord_ios" === l || "discord_android" === l,
                C = b ? ("" !== p ? { ...r, id: p } : null) : _ ? null : T;
            async function y() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (null != n) {
                    (u(!0), m(void 0), E(!1));
                    try {
                        let t = { ...n };
                        e ? delete t[l] : (t[l] = { ...r, id: p });
                        let s = await (0, he.Zk)(t);
                        if (200 !== s.status)
                            return void m(
                                400 === s.status
                                    ? String(s.body[l] ?? "Unable to save this override.")
                                    : "Unable to save this override. Try again.",
                            );
                        (i(t), a(t[l] ?? hd), E(!0));
                    } catch {
                        m("Unable to save this override. Try again.");
                    } finally {
                        u(!1);
                    }
                }
            }
            async function v(e) {
                c(!0);
                try {
                    (await e()) && window.location.reload(!0);
                } finally {
                    c(!1);
                }
            }
            return (
                x.useEffect(() => {
                    let e = !1;
                    return (
                        !(async function () {
                            let t = await (0, hn.bD)();
                            e || (i(t ?? null), null != t && a(t.discord_web ?? hd));
                        })(),
                        () => {
                            e = !0;
                        }
                    );
                }, []),
                (0, f.jsxs)(q.B, {
                    gap: 32,
                    children: [
                        (0, f.jsx)("section", {
                            children: (0, f.jsxs)(q.B, {
                                gap: 12,
                                children: [
                                    (0, f.jsx)(N.D, { variant: "heading-md/semibold", children: "Current build" }),
                                    (0, f.jsxs)("div", {
                                        className: ha.n,
                                        children: [
                                            (0, f.jsxs)(q.B, {
                                                gap: 4,
                                                children: [
                                                    (0, f.jsx)(n5.E, {
                                                        variant: "body-md/medium",
                                                        children: null != e ? e.id : "Default build",
                                                    }),
                                                    (0, f.jsx)(n5.E, {
                                                        variant: "body-sm/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            null != e
                                                                ? "Discord web / desktop \xb7 Override active"
                                                                : "You\u2019re using the regular release. No web build override is active.",
                                                    }),
                                                ],
                                            }),
                                            null != e &&
                                                (0, f.jsx)(j.$, {
                                                    variant: "critical-secondary",
                                                    text: "Clear override",
                                                    disabled: S || _,
                                                    onClick: () => v(async () => (await (0, he.iD)()).ok),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        (0, f.jsx)(E9.l, {
                            onSubmit: (e) => {
                                (e.preventDefault(), y());
                            },
                            children: (0, f.jsxs)(n3.n, {
                                label: "Manual override",
                                description:
                                    "Choose a project and a branch or commit. Other project overrides are kept when you save.",
                                children: [
                                    (0, f.jsx)(lo.l, {
                                        selectionMode: "single",
                                        label: "Project",
                                        options: ho,
                                        value: l,
                                        onSelectionChange: function (e) {
                                            (s(e), a(n?.[e] ?? hd), m(void 0), E(!1));
                                        },
                                        disabled: S || _,
                                    }),
                                    (0, f.jsxs)("div", {
                                        className: ha.O,
                                        children: [
                                            (0, f.jsx)(lo.l, {
                                                selectionMode: "single",
                                                label: "Target type",
                                                options: hu,
                                                value: r.type,
                                                onSelectionChange: (e) => {
                                                    (a({ type: e, id: "" }), E(!1));
                                                },
                                                disabled: S,
                                            }),
                                            (0, f.jsx)(lf.k, {
                                                label: "branch" === r.type ? "Branch name" : "Commit SHA",
                                                value: r.id,
                                                onChange: (e) => {
                                                    (a({ ...r, id: e }), E(!1));
                                                },
                                                placeholder:
                                                    "branch" === r.type ? "team/feature-name" : "Full commit SHA",
                                                disabled: S,
                                                error: g,
                                            }),
                                        ],
                                    }),
                                    h && (0, f.jsx)(oj.y, {}),
                                    null === n &&
                                        (0, f.jsx)(iK.w, {
                                            role: "alert",
                                            type: "critical",
                                            message:
                                                "Unable to load overrides, so saving is off. Try opening this page again.",
                                        }),
                                    b &&
                                        (0, f.jsx)(iK.w, {
                                            role: "status",
                                            type: "info",
                                            message:
                                                "Use a public link to apply mobile builds. Create one below, then open it on the matching device.",
                                        }),
                                    b &&
                                        "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL &&
                                        (0, f.jsx)(iK.w, {
                                            role: "status",
                                            type: "warning",
                                            message:
                                                "Generate mobile build override links from the stable web or desktop client.",
                                        }),
                                    A &&
                                        (0, f.jsx)(iK.w, {
                                            role: "status",
                                            type: "info",
                                            message: "Saved. Reload the app to run the selected build.",
                                        }),
                                    (0, f.jsxs)(s5.e, {
                                        justify: "start",
                                        children: [
                                            (0, f.jsx)(j.$, {
                                                type: "submit",
                                                text: "Save override",
                                                disabled: S || null == n || "" === p || b,
                                                loading: o,
                                            }),
                                            _ &&
                                                (0, f.jsx)(j.$, {
                                                    variant: "secondary",
                                                    text: "Discard changes",
                                                    disabled: S,
                                                    onClick: () => {
                                                        (a(T ?? hd), m(void 0));
                                                    },
                                                }),
                                            null != T &&
                                                !b &&
                                                (0, f.jsx)(j.$, {
                                                    variant: "critical-secondary",
                                                    text: "Remove target",
                                                    onClick: () => y(!0),
                                                    disabled: S,
                                                }),
                                            A &&
                                                (0, f.jsx)(j.$, {
                                                    variant: "secondary",
                                                    text: "Reload app",
                                                    onClick: () => window.location.reload(),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        (0, f.jsx)("section", {
                            children: (0, f.jsxs)(q.B, {
                                gap: 12,
                                children: [
                                    (0, f.jsxs)(q.B, {
                                        gap: 4,
                                        children: [
                                            (0, f.jsx)(N.D, {
                                                variant: "heading-md/semibold",
                                                children: "Recent builds",
                                            }),
                                            (0, f.jsx)(n5.E, {
                                                variant: "body-sm/normal",
                                                color: "text-subtle",
                                                children: "Return to a web build you used on this device.",
                                            }),
                                        ],
                                    }),
                                    0 === t.length
                                        ? (0, f.jsx)(n5.E, {
                                              variant: "body-md/normal",
                                              color: "text-subtle",
                                              children:
                                                  "Your recent builds will appear here after you apply an override.",
                                          })
                                        : t.map((t) =>
                                              (0, f.jsxs)(
                                                  "div",
                                                  {
                                                      className: ha.n,
                                                      children: [
                                                          (0, f.jsxs)(q.B, {
                                                              gap: 4,
                                                              children: [
                                                                  (0, f.jsx)(n5.E, {
                                                                      variant: "body-md/medium",
                                                                      children: t.id,
                                                                  }),
                                                                  (0, f.jsx)(n5.E, {
                                                                      variant: "body-sm/normal",
                                                                      color: "text-subtle",
                                                                      children: "id" === t.type ? "Commit" : "Branch",
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, f.jsx)(j.$, {
                                                              variant: "secondary",
                                                              size: "sm",
                                                              text: t.id === e?.id ? "Active" : "Reapply",
                                                              disabled: S || _ || t.id === e?.id,
                                                              onClick: () => v(() => (0, hi.mk)(t)),
                                                          }),
                                                      ],
                                                  },
                                                  t.id,
                                              ),
                                          ),
                                ],
                            }),
                        }),
                        (0, f.jsx)("section", {
                            children: (0, f.jsxs)(q.B, {
                                gap: 12,
                                children: [
                                    (0, f.jsxs)(q.B, {
                                        gap: 4,
                                        children: [
                                            (0, f.jsx)(N.D, {
                                                variant: "heading-md/semibold",
                                                children: "Share an override",
                                            }),
                                            (0, f.jsx)(n5.E, {
                                                variant: "body-sm/normal",
                                                color: "text-subtle",
                                                children:
                                                    "Create a public link for the selected project. Choose who can use it and when it expires.",
                                            }),
                                        ],
                                    }),
                                    (0, f.jsx)(s5.e, {
                                        justify: "start",
                                        children: (0, f.jsx)(j.$, {
                                            variant: "secondary",
                                            text: "Generate public link",
                                            disabled: S || null == C,
                                            onClick: function () {
                                                null != C &&
                                                    (0, lp.qf)((e) =>
                                                        (0, f.jsx)(hr, { ...e, buildOverrides: { [l]: C } }),
                                                    );
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                })
            );
        },
    }),
    hg = (0, h.zZ)(S.X.BUILD_OVERRIDES_CATEGORY, {
        useTitle: () => "Build Overrides",
        useSubtitle: () => "Choose the build this client runs, or share an override with someone else.",
        buildLayout: () => [hc],
    }),
    hm = (0, h.t_)(S.X.BUILD_OVERRIDES_PANEL, { useTitle: () => "Build Overrides", buildLayout: () => [hg] }),
    hA = (0, h.i4)(S.X.BUILD_OVERRIDES_SIDEBAR_ITEM, {
        useTitle: () => "Build Overrides",
        icon: E7.RefreshIcon,
        buildLayout: () => [hm],
    });
var hE = n(306471),
    hh = n(964355),
    hS = n(172272);
let hT = (0, h.zD)(S.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, I.bG)([rd.default], () => rd.default.isAxeEnabled),
        setValue: (e) => (0, ru.x)({ axeEnabled: e }),
    }),
    hp = (0, h.zD)(S.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, I.bG)([rd.default], () => rd.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, ru.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var hf = n(276086),
    hx = n(354328);
let hI = (0, h.zD)(S.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, hx.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, hf.L)("highlight_mana_components", e);
        },
    }),
    h_ = (0, h.zD)(S.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, hx.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, hf.L)("highlight_mana_text_overrides", e);
        },
    }),
    hb = (0, h.zD)(S.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, hx.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, hf.L)("highlight_mana_text", e);
        },
    }),
    hN = (0, h.zD)(S.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, hx.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, hf.L)("highlight_void_toggleables", e);
        },
    }),
    hC = (0, h.sN)(S.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, I.bG)([rd.default], () => rd.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: 64,
        markers: Array.from({ length: 65 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => hS.O.getState().horizontalSpacing,
        asValueChanges: (e) => {
            hS.O.getState().setHorizontalSpacing(e);
        },
    }),
    hy = (0, h.zD)(S.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, I.bG)([rd.default], () => rd.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, ru.x)({ layoutDebuggingEnabled: e });
        },
    }),
    hv = (0, h.sN)(S.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, I.bG)([rd.default], () => rd.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: 64,
        markers: Array.from({ length: 65 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => hS.O.getState().verticalSpacing,
        asValueChanges: (e) => {
            hS.O.getState().setVerticalSpacing(e);
        },
    }),
    hj = (0, h.zZ)(S.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [hp, hy, hC, hv, hI, hb, h_, hN, hT],
    });
var hO = n(246605),
    hR = n(274184);
function hD(e) {
    let { label: t, description: n, placeholder: i, overrideId: l, setOverride: s, fetchOverride: r } = e,
        [a, o] = x.useState(l ?? ""),
        u = x.useRef(null),
        [d, c] = x.useState(0);
    function g() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        x.useEffect(() => g, []),
        (0, f.jsx)(lu.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, f.jsx)(lf.k, {
                placeholder: i,
                error: 2 === d ? "Failed to fetch override" : void 0,
                successMessage: 3 === d ? "Override applied" : void 0,
                value: a,
                onChange: function (e) {
                    if (!(e.length > 0) || /^[0-9]+$/.test(e)) {
                        if ((o(e), g(), 0 === e.length)) {
                            (c(0), s(null));
                            return;
                        }
                        u.current = setTimeout(() => {
                            (c(1),
                                r(e).then((t) => {
                                    (c(null == t ? 2 : 3), null != t && s(e));
                                }));
                        }, 500);
                    }
                },
                clearable: !0,
            }),
        })
    );
}
let hL = (0, h.E2)(S.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, I.bG)([hR.Ay], () => hR.Ay.getActionTriggeredSurveyOverride());
            return (0, f.jsx)(hD, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => hO.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    hP = (0, h.zD)(S.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => U.HZ.useSetting(),
        setValue: (e) => {
            U.HZ.updateSetting(e);
        },
    });
var hG = n(256311),
    hM = n(883600);
let hU = (0, h.E2)(S.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, I.bG)([hM.A], () => hM.A.overrideId());
        return (0, f.jsx)(hD, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => hG.A.setChangelogOverride(e),
            fetchOverride: async function (e) {
                let t = hM.A.getChangelog(e, "en-US");
                return null != t ? t : ((await hG.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
            },
        });
    },
});
var hV = n(506774);
let hk = new Date("2018-01-01"),
    hw = (0, h.Tf)(S.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => U.pK.useSetting() === ow.default.fromTimestamp(hk.getTime()),
        onClick: () => (hV.w.set("lastChangeLogDate", hk), U.pK.updateSetting(ow.default.fromTimestamp(hk.getTime()))),
    }),
    hF = (0, h.zD)(S.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, I.bG)([rd.default], () => rd.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, I.bG)(
                [rd.default],
                () => rd.default.disableAppCollectionsCache || rd.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, ru.x)({ disableAppCollectionsCache: e }),
    }),
    hB = (0, h.zD)(S.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, I.bG)([rd.default], () => rd.default.isForcedCanary),
        setValue: (e) => {
            (0, ru.x)({ canary: e });
        },
    }),
    hX = (0, h.zD)(S.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, I.bG)([rd.default], () => rd.default.sourceMapsEnabled),
        setValue: (e) => (0, ru.x)({ sourceMapsEnabled: e }),
    }),
    hz = (0, h.zD)(S.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, I.bG)([rd.default], () => rd.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, ru.x)({ onlyShowPreviewAppCollections: e }),
    });
var hH = n(10094),
    hY = n(683760);
let hW = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: tJ.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: tJ.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: tJ.PremiumTypes.TIER_2 },
    ],
    hK = (0, h.Hn)(S.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => hW,
        clearable: !0,
        useValue: () =>
            (0, I.bG)([hY.A], () => {
                let e = hY.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, hH.O)(null, void 0)
                : null === e
                  ? (0, hH.O)(void 0, void 0)
                  : (0, hH.O)(0 === e ? null : e, void 0);
        },
    });
var hZ = n(374042);
let hq = (0, h.E2)(S.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, I.bG)([hR.Ay], () => hR.Ay.getSurveyOverride());
            return (0, f.jsx)(hD, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => hO.xr(e),
                fetchOverride: (e) => (0, hZ.B)(e, !0) ?? null,
            });
        },
    }),
    hQ = (0, h.zZ)(S.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [hK, hq, hL, hU, hw, hB, hP, hz, hF, hX],
        useInlineNotice: () => ({
            type: p.lT.INLINE_NOTICE,
            noticeType: "info",
            role: "none",
            text: V.intl.format(V.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    hJ = (0, h.zD)(S.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, I.bG)([rd.default], () => rd.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, ru.x)({ logAnalyticsEvents: e }),
    }),
    h$ = (0, h.zD)(S.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, I.bG)([rd.default], () => rd.default.isLoggingGatewayEvents),
        setValue: (e) => (0, ru.x)({ logGatewayEvents: e }),
    }),
    h0 = (0, h.zD)(S.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, I.bG)([rd.default], () => rd.default.preventPopoutClose),
        setValue: (e) => (0, ru.x)({ preventPopoutClose: e }),
    }),
    h1 = (0, h.zD)(S.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, I.bG)([rd.default], () => rd.default.logKeyboardMismatches),
        setValue: (e) => (0, ru.x)({ logKeyboardMismatches: e }),
    }),
    h2 = (0, h.zD)(S.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, I.bG)([rd.default], () => rd.default.isLoggingOverlayEvents),
        setValue: (e) => (0, ru.x)({ logOverlayEvents: e }),
    }),
    h3 = (0, h.zD)(S.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, I.bG)([rd.default], () => rd.default.isLoggingQuestEvents),
        setValue: (e) => (0, ru.x)({ logQuestEvents: e }),
    }),
    h5 = (0, h.zD)(S.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, I.bG)([rd.default], () => rd.default.isTracingRequests),
        setValue: (e) => (0, ru.x)({ trace: e }),
    }),
    h4 = (0, h.zZ)(S.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [h$, h2, h5, hJ, h1, h0, h3] }),
    h6 = (0, h.t_)(S.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [hQ, h4, hj],
    }),
    h8 = (0, h.i4)(S.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: hE.StaffBadgeIcon,
        useMenu: function () {
            let {
                    layoutDebuggingEnabled: e,
                    isDeveloper: t,
                    isLoggingGatewayEvents: n,
                    isLoggingOverlayEvents: i,
                    isLoggingAnalyticsEvents: l,
                    isTracingRequests: s,
                    isForcedCanary: r,
                    isAxeEnabled: a,
                    preventPopoutClose: o,
                    onlyShowPreviewAppCollections: u,
                    disableAppCollectionsCache: d,
                    isStaff: c,
                } = (0, I.cf)([rd.default, E8.A, sE.default], () => ({
                    layoutDebuggingEnabled: rd.default.layoutDebuggingEnabled,
                    isDeveloper: E8.A.isDeveloper,
                    isLoggingGatewayEvents: rd.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: rd.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: rd.default.isLoggingAnalyticsEvents,
                    isTracingRequests: rd.default.isTracingRequests,
                    isForcedCanary: rd.default.isForcedCanary,
                    isSourceMapsEnabled: rd.default.sourceMapsEnabled,
                    isAxeEnabled: rd.default.isAxeEnabled,
                    preventPopoutClose: rd.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: rd.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: rd.default.disableAppCollectionsCache,
                    isStaff: sE.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: g, verticalSpacing: m } = (0, hS.O)(),
                { setHorizontalSpacing: A, setVerticalSpacing: E } = hS.O.getState(),
                h = U.HZ.useSetting();
            return t
                ? [
                      (0, f.jsxs)(
                          ti.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, na.openUserSettings)(S.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, f.jsx)(
                                      ti.sL,
                                      {
                                          id: "always-deliver",
                                          label: "Always Deliver Ads",
                                          checked: h,
                                          action: () => {
                                              U.HZ.updateSetting(!h);
                                          },
                                      },
                                      "always-deliver",
                                  ),
                                  (0, f.jsx)(
                                      ti.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, ru.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, f.jsx)(
                                      ti.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: u,
                                          action: () => {
                                              (0, ru.x)({ onlyShowPreviewAppCollections: !u });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, f.jsx)(
                                      ti.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: d,
                                          action: () => {
                                              (0, ru.x)({ disableAppCollectionsCache: !d });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, f.jsxs)(
                          ti.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, na.openUserSettings)(S.X.LOGGING);
                              },
                              children: [
                                  (0, f.jsx)(
                                      ti.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: n,
                                          action: () => {
                                              (0, ru.x)({ logGatewayEvents: !n });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, f.jsx)(
                                      ti.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: i,
                                          action: () => {
                                              (0, ru.x)({ logOverlayEvents: !i });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, f.jsx)(
                                      ti.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: l,
                                          action: () => {
                                              (0, ru.x)({ logAnalyticsEvents: !l });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, f.jsx)(
                                      ti.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: s,
                                          action: () => {
                                              (0, ru.x)({ trace: !s });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, f.jsx)(
                                      ti.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, ru.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, f.jsxs)(
                          ti.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, na.openUserSettings)(S.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, f.jsx)(
                                      ti.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, ru.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, f.jsx)(
                                      ti.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, ru.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, f.jsxs)(f.Fragment, {
                                          children: [
                                              (0, f.jsx)(
                                                  ti.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, f.jsx)(hh.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: g,
                                                              minValue: 0,
                                                              maxValue: 64,
                                                              onChange: (e) => A(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, f.jsx)(
                                                  ti.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, f.jsx)(hh.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: 64,
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
                          ? (0, f.jsx)(
                                ti.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => sA() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [h6],
    });
var h7 = n(127062),
    h9 = n(25044),
    Se = n(80703),
    St = n(123292),
    Sn = n(683438),
    Si = n(890856),
    Sl = n(173936),
    Ss = n(100392),
    Sr = n(102609),
    Sa = n(271478),
    So = n(386976),
    Su = n(257433),
    Sd = n(32523),
    Sc = n(96919),
    Sg = n(688151),
    Sm = n(863763);
function SA(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: l } = e,
        [s, r] = x.useState(l),
        [a, o] = x.useState(!1),
        u = x.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, I.bG)([cc.default], () => cc.default.getId()),
        c = (0, I.bG)([cc.default], () => {
            let e = cc.default.getInstallationForTracking();
            return null == e ? null : (0, Se.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, Su.iN)(t, g),
        A = (0, Su.Fm)(t, g),
        E = (0, I.yK)([rS.A], () =>
            K()
                .sortBy(rS.A.getRecentExposures(Sg.Vh.USER, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        h = x.useCallback(
            (e) => {
                (0, uk.C)((0, Ss.yA)(n), () => {
                    ((0, sc.P0)({ text: "Copied experiment link", variant: "success" }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        S = (0, f.jsx)(Si.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, f.jsxs)(n5.E, {
                variant: "body-md/medium",
                className: Sm.DD,
                children: [
                    (0, f.jsxs)("div", {
                        children: [
                            (0, f.jsxs)(q.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    uk.p5 &&
                                        (0, f.jsx)(n4.D, {
                                            onClick: h,
                                            children: (0, f.jsx)(Sl.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, f.jsx)(n5.E, { color: "text-muted", variant: "body-sm/normal", children: n }),
                        ],
                    }),
                    (0, f.jsx)("span", {
                        className: Sm.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!s) return (0, f.jsx)("div", { className: Sm.Os, children: S });
    let T = "";
    return (
        (T =
            t.system === Sr.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? Sg.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, f.jsxs)("div", {
            className: Sm.Os,
            children: [
                S,
                (0, f.jsx)("div", {
                    children: (0, f.jsx)(Sa.g, {
                        label: t.system === Sr.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: T,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, f.jsx)("div", {
                    className: Sm.h_,
                    children:
                        null == A
                            ? (0, f.jsx)(n5.E, {
                                  variant: "body-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                a
                    ? (0, f.jsxs)("div", {
                          children: [
                              (0, f.jsx)(n5.E, {
                                  variant: "body-lg/medium",
                                  className: Sm.id,
                                  children: "Server Descriptor",
                              }),
                              (0, f.jsx)(n5.E, {
                                  variant: "mono-md/bold",
                                  className: Sm.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, f.jsx)(n5.E, {
                                  variant: "body-lg/medium",
                                  className: Sm.id,
                                  children: "Override Descriptor",
                              }),
                              (0, f.jsx)(n5.E, {
                                  variant: "mono-md/bold",
                                  className: Sm.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, f.jsx)(n5.E, {
                                  variant: "body-lg/medium",
                                  className: Sm.id,
                                  children: "Recent Exposures",
                              }),
                              (0, f.jsx)(n5.E, {
                                  variant: "mono-md/bold",
                                  className: Sm.AS,
                                  children: 0 === E.length ? "None" : E.join("\n"),
                              }),
                          ],
                      })
                    : (0, f.jsx)("div", {
                          className: Sm.id,
                          children: (0, f.jsx)(St.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, f.jsx)(ls.c, { className: Sm.yF }),
            ],
        })
    );
}
function SE(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [l, s] = x.useState(null != i),
        [r, a] = x.useState(!1),
        o = x.useCallback(() => {
            s((e) => !e);
        }, []),
        u = (0, I.bG)([rS.A], () => rS.A.getLoadedGuildExperiment(n)),
        d = (0, I.bG)([rS.A, lv.A, iq.A], () => {
            if (t.system === Sr.l5.LEGACY) return null == rS.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !lv.A.getGuildsArray().some((t) => null != iq.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, I.yK)([rS.A], () =>
            K()
                .sortBy(rS.A.getRecentExposures(Sg.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, I.yK)([cc.default, lv.A, rS.A, iq.A], () => {
            let e = t.system === Sr.l5.LEGACY,
                i = t.name,
                l = cc.default.getId(),
                s = K().sortBy(lv.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of s) {
                let s = e
                    ? (rS.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? Sg.RE.NOT_ELIGIBLE)
                    : (iq.A.getEvaluationAndAssignment("guild", t.id, i, l)[1]?.variantId ?? Sg.RE.NOT_ELIGIBLE);
                (s in r || (r[s] = 0), r[s]++, a.push(`${t.name}: ${s}`));
            }
            let o = K()(r)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${r[e]} guilds in bucket ${e}`)
                .join(", ");
            return [a.join("\n"), o];
        }),
        A = t.system !== Sr.l5.LEGACY,
        E = (0, I.yK)([lv.A], () => K().sortBy(lv.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [h, S] = x.useState(() => lj.A.getGuildId() ?? lj.A.getLastSelectedGuildId()),
        T = E.find((e) => e.id === h)?.name,
        p = (0, I.bG)(
            [iq.A],
            () => {
                if (A && null != h) return iq.A.getServerAssignment("guild", h, t.name);
            },
            [A, h, t.name],
        ),
        _ = (0, I.bG)([iq.A, cc.default], () => {
            if (!A) return;
            let e = cc.default.getId();
            return iq.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        b = null != _ && (_.isOverride || _.useAsEligibility),
        N = (0, f.jsx)(n4.D, {
            onClick: o,
            children: (0, f.jsxs)(n5.E, {
                variant: "body-md/medium",
                className: Sm.DD,
                children: [
                    (0, f.jsxs)("div", {
                        children: [
                            (0, f.jsx)("span", { children: t.title }),
                            (0, f.jsx)(n5.E, { color: "text-muted", variant: "body-sm/normal", children: n }),
                        ],
                    }),
                    (0, f.jsx)("span", { className: Sm.km, children: "Guild" }),
                ],
            }),
        });
    return l
        ? (0, f.jsxs)("div", {
              className: Sm.Os,
              children: [
                  N,
                  (0, f.jsx)(Sa.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  A &&
                      E.length > 0 &&
                      (0, f.jsx)("div", {
                          className: Sm.h_,
                          children: (0, f.jsx)(lo.l, {
                              label: "Inspect guild",
                              description:
                                  "Server assignment and eligibility shown below are for this guild. The override above still applies to all guilds.",
                              value: h ?? void 0,
                              options: E.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                              onSelectionChange: (e) => S(e),
                              selectionMode: "single",
                              fullWidth: !0,
                          }),
                      }),
                  (0, f.jsx)("div", {
                      className: Sm.h_,
                      children: d
                          ? (0, f.jsx)(n5.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === Sr.l5.LEGACY
                                        ? 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        : "Warning: Server did not send an assignment for this experiment. Make sure the experiment is configured to run on the APP surface in the admin UI.",
                            })
                          : null,
                  }),
                  A &&
                      (0, f.jsxs)("div", {
                          children: [
                              (0, f.jsxs)(n5.E, {
                                  variant: "body-lg/medium",
                                  className: Sm.id,
                                  children: ["Server Descriptor", null != T ? ` (${T})` : ""],
                              }),
                              (0, f.jsx)(n5.E, {
                                  variant: "mono-md/bold",
                                  className: Sm.AS,
                                  children: null == p ? "None" : JSON.stringify(p, void 0, 2),
                              }),
                              (0, f.jsx)(n5.E, {
                                  variant: "body-lg/medium",
                                  className: Sm.id,
                                  children: "Client Eligibility",
                              }),
                              (0, f.jsx)(n5.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: b ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, f.jsx)(n5.E, {
                                  variant: "mono-md/bold",
                                  className: Sm.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, f.jsxs)("div", {
                            children: [
                                (0, f.jsx)(n5.E, {
                                    variant: "body-lg/medium",
                                    className: Sm.id,
                                    children: "Guild Assignments",
                                }),
                                (0, f.jsx)(n5.E, { variant: "mono-md/bold", className: Sm.AS, children: g }),
                                t.system === Sr.l5.LEGACY &&
                                    (0, f.jsxs)(f.Fragment, {
                                        children: [
                                            (0, f.jsx)(n5.E, {
                                                variant: "body-lg/medium",
                                                className: Sm.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, f.jsx)(n5.E, {
                                                variant: "mono-md/bold",
                                                className: Sm.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, f.jsx)(n5.E, {
                                    variant: "body-lg/medium",
                                    className: Sm.id,
                                    children: "Override Descriptor",
                                }),
                                (0, f.jsx)(n5.E, {
                                    variant: "mono-md/bold",
                                    className: Sm.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, f.jsx)(n5.E, {
                                    variant: "body-lg/medium",
                                    className: Sm.id,
                                    children: "Recent Exposures",
                                }),
                                (0, f.jsx)(n5.E, {
                                    variant: "mono-md/bold",
                                    className: Sm.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, f.jsx)("div", {
                            className: Sm.id,
                            children: (0, f.jsx)(St.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, f.jsx)(ls.c, { className: Sm.yF }),
              ],
          })
        : (0, f.jsx)("div", { className: Sm.Os, children: N });
}
let Sh = (0, h.E2)(S.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, So.op)(),
                { experiments: n, overridesInfo: i } = (0, Sd.hI)(),
                l = x.useMemo(() => ({ ...n, ...e }), [n, e]),
                s = x.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, I.bG)([cc.default], () => {
                    let e = cc.default.getInstallationForTracking();
                    return null == e ? null : (0, Se.v)(e);
                }),
                [a, o] = x.useState(""),
                u = (0, Sc.oC)((0, Sc.R3)((0, Sc.Fm)(l), s), a);
            return (0, f.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, f.jsxs)(q.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, f.jsxs)(n5.E, {
                                    variant: "body-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                uk.p5 &&
                                    (0, f.jsx)(St.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uk.C)(r, () => {
                                                (0, sc.P0)({ text: "Installation ID copied!", variant: "success" });
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, f.jsx)(Sn.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? SE : SA;
                              return (0, f.jsx)(
                                  t,
                                  {
                                      experiment: e.experiment,
                                      experimentId: e.id,
                                      overrideInfo: s[e.id],
                                      defaultOpen: null != s[e.id],
                                  },
                                  e.id,
                              );
                          })
                        : (0, f.jsx)("div", {
                              className: Sm.p$,
                              children: (0, f.jsx)(N.D, {
                                  variant: "heading-sm/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    SS = (0, h.zZ)(S.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [Sh] }),
    ST = (0, h.t_)(S.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [SS] }),
    Sp = (0, h.i4)(S.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: h7.BeakerIcon,
        useMenu: h9.A,
        buildLayout: () => [ST],
    }),
    Sf = (0, h.WI)(S.X.DEVELOPER_SECTION, {
        useTitle: () => V.intl.string(V.t["+gHUHA"]),
        usePredicate: () => E8.A.isDeveloper,
        buildLayout: () => [Sp, hA, h8],
    });
var Sx = n(682348),
    SI = n(977556),
    S_ = n(751075),
    Sb = n(843402);
let SN = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function SC() {
    let e = (0, I.yK)([i4.Ay], () => i4.Ay.getGamesSeen(!1)),
        t = (0, I.bG)([i4.Ay], () => SN(...i4.Ay.getOverrides()));
    x.useEffect(() => {
        if (e8.isPlatformEmbedded) return ((0, Sb.a2)(), Sb.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = x.useMemo(
        () =>
            e.reduce((e, t) => ((0, SI.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function Sy(e) {
    let { gameHistory: t } = SC();
    return {
        namedGames: x.useMemo(
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
function Sv(e) {
    let { namedGames: t, totalCount: n } = Sy(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function Sj() {
    let { namedGames: e } = Sy(2),
        [t, n] = x.useMemo(() => e.map((e) => e.id), [e]);
    x.useEffect(() => {
        Ei.Ay.fetchApplications([t, n].filter(io.Vq));
    }, [t, n]);
    let [i, l] = (0, I.yK)([i2.A], () => [t, n].map(i2.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, f.jsx)(i7.A, { game: i, size: i7.M.MEDIUM_LARGE }), shape: S_.e.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, f.jsx)(i7.A, { game: l, size: i7.M.MEDIUM }), shape: S_.e.ROUNDED } : null,
          };
}
let SO = (0, h.AK)(S.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = Sv(2);
            return V.intl.format(V.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = Sj();
            return { type: p.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: S.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, I.bG)([i4.Ay], () => i4.Ay.getGamesSeen(!1).some((e) => !(0, SI.n1)(e))) && (0, nh.xl)(),
    }),
    SR = (0, h.gN)(S.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [SO] });
var SD = n(533440),
    SL = n(406535),
    SP = n(966756);
let SG = (0, h.zD)(S.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => V.intl.string(SP.default.A0FVCV),
        useSubtitle: () => V.intl.string(SP.default.vHX6RG),
        useValue: U.hV.useSetting,
        setValue: function (e) {
            (U.hV.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SL.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    SM = (0, h.zD)(S.X.ACTIVITY_PRIVACY_NOTIFY_SERVER_MEMBERS_ON_GO_LIVE_SETTING, {
        useTitle: () => V.intl.string(SP.default["9l5u6A"]),
        useSubtitle: () => V.intl.string(SP.default.QcmgBF),
        useValue: U.pR.useSetting,
        setValue: function (e) {
            (U.pR.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SL.Y.ACCOUNT,
                    notify_server_members_on_go_live: e,
                }));
        },
    }),
    SU = (0, h.zZ)(S.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => V.intl.string(V.t.WmsPis),
        useSearchTerms: () => [V.intl.string(V.t["8ka8li"])],
        buildLayout: () => [SD._, SG, SM, SR],
    }),
    SV = (0, h.AK)(S.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.J0SFL2),
        destinationKey: S.X.DATA_AND_PRIVACY_PANEL,
    }),
    Sk = (0, h.gN)(S.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [SV] });
var Sw = n(365258);
let SF = (0, h.Qx)(S.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => V.intl.string(SP.default["/LHVbt"]),
    useSubtitle: () => V.intl.string(V.t.L5IdzV),
    useOptions: function () {
        return [
            { value: eJ.Qd.ACTIVITY_STATUS_OFF, name: V.intl.string(SP.default.m3oL7Q) },
            { value: eJ.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: V.intl.string(SP.default["5+lnTA"]) },
            { value: eJ.Qd.ACTIVITY_STATUS_ON, name: V.intl.string(SP.default["egr+VZ"]) },
        ];
    },
    useValue: U._Z.useSetting,
    setValue: function (e) {
        let t = U._Z.getSetting();
        U._Z.updateSetting(e);
        let i = (0, Sw.g8)(t, e);
        if (null == i) return;
        let l = (0, Sw.Xc)(e);
        (0, lp.mM)(async () => {
            let { default: e } = await Promise.all([n.e(26411), n.e(562041), n.e(341996)]).then(n.bind(n, 32167));
            return (t) =>
                (0, f.jsx)(e, { ...t, direction: i.direction, affectedGuildIds: i.affectedGuildIds, settingName: l });
        });
    },
});
var SB = n(498642),
    SX = n(573435),
    Sz = n(260509),
    SH = n(771810);
function SY(e) {
    let { guild: t, size: n } = e,
        i = (0, Sz.Iv)(t, n, !1, !0),
        l = (0, Sz.Rb)(t);
    return null != i
        ? (0, f.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, f.jsx)("div", {
              className: SH.F,
              children: (0, f.jsx)(n5.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "body-md/semibold" : "footnote/semibold",
                  children: l,
              }),
          });
}
function SW(e) {
    let { guild: t, size: n } = e;
    return (0, f.jsx)(SX.Ay, {
        className: SH.z,
        mask: SX.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, f.jsx)(SY, { guild: t, size: n }),
    });
}
var SK =
    (((g = {}).SERVER_ORDER = "server-order"),
    (g.RECENTLY_JOINED = "recently-joined"),
    (g.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (g.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    g);
let SZ = {
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
                l = t.includes(n.id);
            return !i && l ? -1 : i && !l ? 1 : 0;
        }),
    "activity-sharing-off": (e, t) =>
        e.concat().sort((e, n) => {
            let i = t.includes(e.id),
                l = t.includes(n.id);
            return i && !l ? -1 : !i && l ? 1 : 0;
        }),
    "server-order": (e) => e,
};
var Sq = n(618118);
function SQ(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i, rowRef: l } = e,
        s = (0, I.bG)([SB.A], () => SB.A.getMemberCount(t.id));
    return (0, f.jsxs)(q.B, {
        as: "li",
        ref: l,
        tabIndex: null != l ? -1 : void 0,
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, f.jsx)("div", { className: Sq.FO, children: (0, f.jsx)(SW, { guild: t, size: 48 }) }),
            (0, f.jsx)("div", {
                className: Sq.QH,
                children: (0, f.jsx)(t4.d, {
                    label: t.name,
                    description: V.intl.format(SP.default.cI3aQA, { count: s ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
function SJ(e) {
    let { overflowGuilds: t } = e,
        n = (0, I.bG)([us.default], () => us.default.locale),
        i = t.length,
        l = i - 3,
        s = (0, x.useMemo)(() => {
            let e = t.slice(0, 3).map((e) => e.name);
            return (
                l > 0 && e.push(V.intl.formatToPlainString(SP.default.bAzBIf, { numServers: l })),
                new Intl.ListFormat(n).format(e)
            );
        }, [t, l, n]);
    return (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsx)(S_.q, {
                icons: {
                    frontIcon: { icon: (0, f.jsx)(SY, { guild: t[0], size: 48 }), shape: S_.e.SQUIRCLE },
                    backIcon:
                        null != t[1] ? { icon: (0, f.jsx)(SY, { guild: t[1], size: 48 }), shape: S_.e.SQUIRCLE } : null,
                },
            }),
            (0, f.jsxs)("div", {
                className: Sq.yW,
                children: [
                    (0, f.jsx)(n5.E, {
                        variant: "body-md/semibold",
                        className: Sq.Xc,
                        children: V.intl.format(SP.default.MEMaup, { count: i }),
                    }),
                    (0, f.jsx)(n5.E, { variant: "body-sm/normal", color: "text-muted", className: Sq.Xc, children: s }),
                ],
            }),
        ],
    });
}
function S$() {
    return (0, f.jsx)("div", {
        className: Sq.yW,
        children: (0, f.jsx)(n5.E, {
            variant: "body-md/semibold",
            className: Sq.Xc,
            children: V.intl.string(SP.default.BRjBVV),
        }),
    });
}
function S0(e) {
    let { isExpanded: t, overflowGuilds: n, onToggle: i } = e,
        l = t ? V.intl.string(SP.default.BRjBVV) : V.intl.formatToPlainString(SP.default.MEMaup, { count: n.length });
    return (0, f.jsxs)(q.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            t ? (0, f.jsx)(S$, {}) : (0, f.jsx)(SJ, { overflowGuilds: n }),
            (0, f.jsx)(ld.K, {
                variant: "secondary",
                size: "md",
                icon: t ? A9.ChevronSmallUpIcon : mR.ChevronSmallDownIcon,
                "aria-label": l,
                "aria-expanded": t,
                onClick: i,
            }),
        ],
    });
}
function S1(e) {
    let {
            guilds: t,
            searchQuery: n,
            listId: i,
            isActivityRestrictedForGuild: l,
            onToggleActivityRestrictedGuild: s,
        } = e,
        {
            isExpanded: r,
            hasMoreGuilds: a,
            visibleGuilds: o,
            overflowGuilds: u,
            toggleExpanded: d,
            firstRevealedRowRef: c,
        } = (function (e) {
            let { guilds: t, searchQuery: n } = e,
                [i, l] = (0, x.useState)(null),
                s = i === n,
                r = "" === n && t.length > 10,
                a = r && !s ? t.slice(0, 10) : t,
                o = r ? t.slice(10) : [],
                u = (0, x.useRef)(null),
                d = (0, x.useRef)(!1);
            return (
                (0, x.useEffect)(() => {
                    d.current &&
                        ((d.current = !1), u.current?.focus(), u.current?.scrollIntoView({ block: "nearest" }));
                }, [s]),
                {
                    isExpanded: s,
                    hasMoreGuilds: r,
                    visibleGuilds: a,
                    overflowGuilds: o,
                    toggleExpanded: function () {
                        ((d.current = !s), l(s ? null : n));
                    },
                    firstRevealedRowRef: u,
                }
            );
        })({ guilds: t, searchQuery: n });
    return (0, f.jsxs)("ul", {
        className: Sq.X1,
        id: i,
        "aria-label": V.intl.string(V.t["7hB4kg"]),
        children: [
            0 === t.length &&
                (0, f.jsx)("div", {
                    className: Sq.pb,
                    children: (0, f.jsx)(n5.E, {
                        className: Sq.R$,
                        variant: "body-lg/medium",
                        children: V.intl.string(V.t["Xe+fJM"]),
                    }),
                }),
            o.map((e, t) =>
                (0, f.jsx)(
                    SQ,
                    {
                        guild: e,
                        rowRef: r && a && 10 === t ? c : void 0,
                        isActivityRestricted: l(e.id),
                        onToggleActivityRestrictedGuild: s,
                    },
                    e.id,
                ),
            ),
            a && (0, f.jsx)(S0, { isExpanded: r, overflowGuilds: u, onToggle: d }),
        ],
    });
}
let S2 = function (e) {
    let { notice: t } = e,
        {
            guilds: n,
            searchQuery: i,
            setSearchQuery: l,
            sortOrder: s,
            setSortOrder: r,
            hasActivityRestrictedGuilds: a,
            onToggleAllActivityRestrictedGuilds: o,
            onToggleActivityRestrictedGuild: u,
            isActivityRestricted: d,
            numActivityRestrictedGuilds: c,
            numTotalGuilds: g,
        } = (function () {
            let [e, t] = (0, x.useState)(""),
                [n, i] = (0, x.useState)("server-order"),
                l = (0, I.bG)([g4.Ay], () => g4.Ay.getFlattenedGuildIds()),
                s = (0, I.bG)([lv.A], () => lv.A.getGuilds()),
                r = l.map((e) => s[e]).filter(Boolean),
                a = U.Pw.useSetting(),
                [o, u] = (0, x.useState)(a);
            async function d(e) {
                u(e);
                try {
                    await U.Pw.updateSetting(e);
                } catch (e) {
                    u(a);
                }
            }
            (0, x.useEffect)(() => {
                u(a);
            }, [a]);
            let c = 0 !== o.length,
                [g, m] = (0, x.useState)(() => SZ[n](r, a)),
                A = g.map((e) => s[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(SZ[e](r, a)), i(e));
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
                    c ? d([]) : d(l);
                },
                numTotalGuilds: l.length,
                numActivityRestrictedGuilds: o.length,
            };
        })(),
        m = (0, x.useId)(),
        A = (0, x.useRef)(null),
        E = (0, x.useMemo)(
            () => [
                { id: SK.SERVER_ORDER, label: V.intl.string(V.t.STMPJ2), value: SK.SERVER_ORDER },
                { id: SK.RECENTLY_JOINED, label: V.intl.string(V.t.CbaapP), value: SK.RECENTLY_JOINED },
                { id: SK.ACTIVITY_SHARING_ON, label: V.intl.string(SP.default.ZI51JZ), value: SK.ACTIVITY_SHARING_ON },
                {
                    id: SK.ACTIVITY_SHARING_OFF,
                    label: V.intl.string(SP.default["+kxafn"]),
                    value: SK.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        h = E.find((e) => e.value === s)?.label ?? "";
    return (0, f.jsxs)("div", {
        className: Sq.iE,
        children: [
            t,
            (0, f.jsxs)("div", {
                className: Sq.N1,
                children: [
                    (0, f.jsx)(Sn.I, {
                        query: i,
                        onChange: l,
                        onClear: function () {
                            (td.default.track(_.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                                l(""));
                        },
                        onFocus: () =>
                            td.default.track(_.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        onBlur: () =>
                            td.default.track(_.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        placeholder: V.intl.string(V.t["H+nRYw"]),
                        "aria-label": V.intl.string(V.t["5h0QOP"]),
                        inputProps: { "aria-controls": m, "aria-expanded": !0 },
                    }),
                    n.length > 0 &&
                        (0, f.jsxs)("div", {
                            className: Sq.gO,
                            children: [
                                (0, f.jsx)(aS.Y, {
                                    targetElementRef: A,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, f.jsx)(mi.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": V.intl.string(V.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, f.jsx)(ti.rX, {
                                                children: E.map((e) => {
                                                    let { id: t, label: n, value: i } = e;
                                                    return (0, f.jsx)(
                                                        ti.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: n,
                                                            checked: s === i,
                                                            action: () => {
                                                                (td.default.track(
                                                                    _.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
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
                                        (0, f.jsxs)(n4.D, {
                                            ...e,
                                            innerRef: A,
                                            className: Sq.Ku,
                                            children: [
                                                (0, f.jsx)(n5.E, {
                                                    variant: "body-sm/medium",
                                                    color: "text-subtle",
                                                    children: h,
                                                }),
                                                (0, f.jsx)(mR.ChevronSmallDownIcon, {
                                                    size: "xs",
                                                    color: n1.A.colors.TEXT_SUBTLE,
                                                }),
                                            ],
                                        }),
                                }),
                                (0, f.jsx)(St.Q, {
                                    variant: "primary",
                                    textVariant: "body-sm/medium",
                                    onClick: o,
                                    text: a ? V.intl.string(V.t["7lxcLO"]) : V.intl.string(V.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, f.jsx)(lm.A, {
                "aria-live": "polite",
                role: "region",
                children: V.intl.format(SP.default.EvzDff, { count: n.length }),
            }),
            (0, f.jsx)(S1, {
                guilds: n,
                searchQuery: i,
                listId: m,
                isActivityRestrictedForGuild: d,
                onToggleActivityRestrictedGuild: u,
            }),
        ],
    });
};
var S3 = n(68322);
let S5 = (0, h.E2)(S.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [V.intl.string(SP.default["/LHVbt"])],
        Component: function () {
            let e = U.tz.useSetting()
                ? null
                : (0, f.jsx)("div", {
                      className: S3.l,
                      children: (0, f.jsx)(iK.w, {
                          type: "warning",
                          message: V.intl.string(SP.default["xxI0/W"]),
                          role: "status",
                      }),
                  });
            return (0, f.jsx)(S2, { notice: e });
        },
    }),
    S4 = (0, h.zZ)(S.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => V.intl.string(V.t.bwqjL9),
        buildLayout: () => [SF, S5, Sk],
    }),
    S6 = (0, h.zD)(S.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => V.intl.string(SP.default.khuuzv),
        useSubtitle: () => V.intl.string(SP.default["8EWsJ8"]),
        useValue: () => U.e.useSetting(),
        setValue: (e) => U.e.updateSetting(e),
    }),
    S8 = (0, h.E2)(S.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, f.jsx)(n5.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: V.intl.format(V.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, f.jsx)(
                            n5.E,
                            { tag: "span", variant: "body-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
    }),
    S7 = (0, h.zD)(S.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => V.intl.string(SP.default.Uz5Ipi),
        useSubtitle: () => V.intl.string(SP.default.CZI2Gb),
        useValue: () => U.UM.useSetting(),
        setValue: (e) => U.UM.updateSetting(e),
    }),
    S9 = (0, h.zZ)(S.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => V.intl.string(SP.default["89YBr5"]),
        useSubtitle: () => V.intl.string(V.t.uGDpgH),
        buildLayout: () => [S6, S7, S8],
        useSearchTerms: () => [V.intl.string(V.t.VOszPA)],
    }),
    Te = (0, h.t_)(S.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => V.intl.string(V.t.Cq98yL),
        buildLayout: () => [SU, S4, S9],
    }),
    Tt = (0, h.i4)(S.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Cq98yL),
        icon: Sx.UserPlatformIcon,
        buildLayout: () => [Te],
    });
var Tn = n(712440),
    Ti = n(361328);
let Tl = (0, h.E2)(S.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: Ti.Ay,
    useSearchTerms: () => [V.intl.string(V.t["f6kk+r"])],
});
var Ts = n(478016),
    Tr = n(396478),
    Ta = n(77468),
    To = n(289498),
    Tu = n(573648),
    Td = n(643068),
    Tc = n(370480),
    Tg = n(522978);
let Tm = new Set([_.fg2.XBOX, _.fg2.PLAYSTATION, _.fg2.PLAYSTATION_STAGING, _.fg2.CRUNCHYROLL]);
var TA = n(169869),
    TE = n(152578),
    Th = n(733110),
    TS = n(744813),
    TT = n(757036),
    Tp = n(555837),
    Tf = n(241524),
    Tx = n(51965),
    TI = n(377368),
    T_ = n(631368),
    Tb = n(212739),
    TN = n(417869),
    TC = n(337091),
    Ty = n(831768),
    Tv = n(660594);
function Tj() {
    let e,
        t,
        i,
        l,
        { variant: s, showFooter: r } =
            ((e = (0, T_.$)()),
            (t = (0, Tb.O)()),
            (l = null != (i = (0, I.bG)([TN.A], () => TN.A.getAccount(null, _.fg2.XBOX))) && !i.revoked),
            e === T_.C.NONE || t
                ? { variant: T_.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === T_.C.NO_ACCESS && !l }),
        { analyticsLocations: a } = (0, ez.Ay)(tk.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, TI.yW)(a),
        u = (0, Tf.A)("(max-width: 485px)");
    if (s === T_.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (s) {
        case T_.C.HAS_ACCESS:
        case T_.C.BLOCK_CLAIM:
            ((c = V.intl.string(Ty.default["7PdsMK"])),
                (g = (0, f.jsx)(Tx.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: V.intl.string(Ty.default.CubeLC),
                    onClick: () => {
                        (0, lp.mM)(async () => {
                            let { default: e } = await Promise.all([n.e(878140), n.e(532203)]).then(n.bind(n, 15654));
                            return (t) => (0, f.jsx)(e, { ...t, sourceAnalyticsLocations: a });
                        });
                    },
                })));
            break;
        case T_.C.NO_ACCESS:
            ((c = V.intl.string(Ty.default.NwkRTZ)),
                (g = (0, f.jsx)(tz.A, {
                    defaultTextOverride: V.intl.string(Ty.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    subscriptionTier: tJ.pe.TIER_2,
                })));
            break;
        default:
            (0, io.xb)(s);
    }
    return (0, f.jsxs)(ez.f5, {
        value: a,
        children: [
            (0, f.jsxs)("div", {
                className: Tv.bV,
                children: [
                    (0, f.jsx)(N.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        children: V.intl.string(V.t.NG1e6l),
                    }),
                    (0, f.jsx)(au.NitroWheelIcon, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, f.jsx)(c1.N, {
                theme: _.NJ8.DARK,
                children: (e) =>
                    (0, f.jsx)("div", {
                        className: e,
                        children: (0, f.jsxs)("div", {
                            className: Tv.Nr,
                            children: [
                                (0, f.jsxs)("div", {
                                    className: Tv.Tp,
                                    children: [
                                        (0, f.jsx)("div", {
                                            className: Tv.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, f.jsx)("div", { className: Tv.$h }),
                                        (0, f.jsx)("div", { className: Tv.Rv }),
                                        (0, f.jsx)("div", { className: Tv.Lw }),
                                    ],
                                }),
                                (0, f.jsxs)("div", {
                                    className: Tv.Mn,
                                    children: [
                                        (0, f.jsxs)("div", {
                                            className: Tv.mY,
                                            children: [
                                                (0, f.jsx)("img", {
                                                    className: Tv.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, f.jsx)(n5.E, {
                                                    variant: "body-lg/semibold",
                                                    color: "text-strong",
                                                    className: Tv.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, f.jsx)("div", { className: Tv.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, f.jsxs)(f.Fragment, {
                                        children: [
                                            (0, f.jsx)("div", { className: Tv.yF }),
                                            (0, f.jsxs)("div", {
                                                className: Tv.sQ,
                                                children: [
                                                    (0, f.jsx)(uP.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: n1.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, f.jsx)(n5.E, {
                                                        variant: "body-sm/normal",
                                                        color: "text-default",
                                                        children: V.intl.format(TC.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(TI.Hx.CONNECT),
                                                                    (0, Tg.A)({
                                                                        platformType: _.fg2.XBOX,
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
var TO = n(201718),
    TR = n(321078),
    TD = n(672130),
    TL = n(379848),
    TP = n(688901);
function TG(e) {
    let { markAsDismissed: t } = e;
    return (
        x.useEffect(() => t(As.i.AUTO_DISMISS), [t]),
        (0, f.jsx)("div", { className: TP.Ad, children: (0, f.jsx)(Ab.E, { type: "new", variant: "primary" }) })
    );
}
function TM(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: l, onClick: s } = e;
    return (0, f.jsxs)("div", {
        className: TP.kL,
        children: [
            i,
            (0, f.jsxs)("div", {
                className: TP.FS,
                children: [
                    (0, f.jsxs)("div", {
                        className: TP.TK,
                        children: [
                            (0, f.jsx)(TL.Ay, {
                                contentTypes: [l],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === l ? (0, f.jsx)(TG, { markAsDismissed: n }) : null;
                                },
                            }),
                            (0, f.jsx)(n5.E, { variant: "body-md/semibold", children: t }),
                        ],
                    }),
                    (0, f.jsx)(n5.E, { variant: "body-xs/normal", children: n }),
                ],
            }),
            (0, f.jsx)(j.$, { text: V.intl.string(V.t.vD60Pv), onClick: s }),
        ],
    });
}
function TU() {
    let e = eC.A.getArticleURL(_.MVz.PS_CONNECTION);
    return (0, f.jsx)(TM, {
        title: V.intl.string(V.t.v20wwm),
        body: V.intl.format(V.t.lTZBit, { help_article: e }),
        img: (0, f.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eE.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, Tg.A)({ platformType: _.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let TV = "/assets/9df988a227916145.png";
function Tk() {
    return (0, f.jsx)(TM, {
        title: V.intl.string(TC.default["9cLtDI"]),
        body: V.intl.format(TC.default["D+kUbg"], { learnMoreLink: eC.A.getArticleURL(_.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, f.jsx)("img", { src: TV, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eE.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, Tg.A)({ platformType: _.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function Tw() {
    let e = eC.A.getArticleURL(_.MVz.XBOX_CONNECTION);
    return (0, f.jsx)(TM, {
        title: V.intl.string(V.t["2okkZV"]),
        body: V.intl.format(V.t.OnERSS, { help_article: e }),
        img: (0, f.jsx)("img", { src: TV, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eE.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, Tg.A)({ platformType: _.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var TF = n(783419),
    TB = n(534952),
    TX = n(705799),
    Tz = n(247259);
function TH(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: l,
            showJoinErrorMessage: s,
        } = (0, I.cf)(
            [TN.A],
            () => ({
                isJoining: TN.A.isJoining(n.id),
                joinErrorMessage:
                    "" === TN.A.joinErrorMessage(n.id) ? V.intl.string(V.t.j2d6Km) : TN.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== TN.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, I.bG)([lv.A], () => lv.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, f.jsx)(j.$, {
                size: "sm",
                onClick: function () {
                    Ta.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? V.intl.string(V.t.RXvQQu) : V.intl.string(V.t.XpeFYr),
            })),
        (0, f.jsxs)("div", {
            className: Tz.iA,
            children: [
                (0, f.jsxs)("div", {
                    className: Tz.XX,
                    children: [
                        (0, f.jsx)(ma.Ay, { size: ma.Ay.Sizes.SMALL, guild: n.guild, className: Tz.$f }),
                        (0, f.jsxs)("div", {
                            className: Tz.Vn,
                            children: [
                                (0, f.jsx)(n5.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, f.jsx)(nr.Anchor, {
                                    href: Tu.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, f.jsx)(n5.E, {
                                        variant: "body-xs/normal",
                                        color: "text-default",
                                        children: n.account.name,
                                    }),
                                }),
                            ],
                        }),
                        t,
                    ],
                }),
                s &&
                    (0, f.jsx)(n5.E, {
                        variant: "body-xs/normal",
                        color: "text-feedback-critical",
                        className: Tz.R,
                        children: l,
                    }),
            ],
        })
    );
}
function TY(e) {
    var t;
    let n,
        i,
        { account: l } = e,
        s = ((t = l.id), (n = (0, Tp.G)()), (i = (0, TT.L)(tJ.PremiumTypes.TIER_2)), !n && !i && !/^\d+$/.test(t));
    return l.type === _.fg2.XBOX && s
        ? (0, f.jsx)(Tk, {})
        : l.twoWayLink
          ? null
          : l.type === _.fg2.XBOX
            ? (0, f.jsx)(Tw, {})
            : l.type === _.fg2.PLAYSTATION
              ? (0, f.jsx)(TU, {})
              : null;
}
function TW(e) {
    let t,
        n,
        i,
        l,
        s,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [g, m] = x.useState(u.friendSync),
        [A, E] = x.useState(u.visibility),
        [h, S] = x.useState(u.metadataVisibility),
        [T, p] = x.useState(u.showActivity),
        [I, b] = x.useState(null),
        [N, C] = x.useState(null),
        [y, v] = x.useState(!1),
        [O, R] = x.useState([]),
        D = (0, Td.ML)(u.type),
        L = Tu.A.get(D);
    x.useEffect(() => {
        (m(u.friendSync), E(u.visibility), S(u.metadataVisibility), p(u.showActivity));
    }, [u]);
    let P = { inProgressVisibility: I, inProgressMetadataVisibility: N },
        G = x.useRef(P);
    return (
        x.useEffect(() => {
            G.current = P;
        }),
        x.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = G.current;
            (null != e && (E(e), Ta.A.setVisibility(u.type, u.id, e), b(null)),
                null != t && (S(t), Ta.A.setMetadataVisibility(u.type, u.id, t), C(null)));
        }, [u]),
        (0, f.jsxs)("div", {
            className: Tz.FI,
            children: [
                ((t = Tu.A.get(u.type)),
                (n = Tu.A.get(D)),
                (i = "1" === (u.metadata ?? {})[TF.pK.TWITTER_VERIFIED]),
                (l = null),
                t.type === _.fg2.TWITTER &&
                    i &&
                    (l = (0, f.jsx)(lg.m, {
                        text: V.intl.string(V.t.Jebrww),
                        children: (0, f.jsx)(TE.A, {
                            color: n1.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, f.jsx)(Ts.CheckmarkSmallIcon, {
                                size: "xs",
                                color: n1.A.unsafe_rawColors.WHITE.css,
                            }),
                        }),
                    })),
                (0, f.jsxs)("div", {
                    className: Tz.Il,
                    children: [
                        (0, f.jsx)("img", {
                            alt: n.name,
                            className: Tz.gj,
                            src: (0, c0.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, f.jsxs)("div", {
                            children: [
                                (0, f.jsxs)("div", {
                                    className: Tz.$p,
                                    children: [
                                        (0, f.jsx)(n5.E, {
                                            color: "text-strong",
                                            variant: "body-md/semibold",
                                            className: Tz.RW,
                                            children: u.name,
                                        }),
                                        null != l && (0, f.jsx)("div", { className: Tz.cG, children: l }),
                                    ],
                                }),
                                (0, f.jsx)(n5.E, {
                                    variant: "body-xs/normal",
                                    color: "text-default",
                                    className: Tz.Au,
                                    children:
                                        null != n.migrationData
                                            ? V.intl.format(TX.default.Glhokn, { platformName: n.name })
                                            : n.name,
                                }),
                            ],
                        }),
                        (0, f.jsx)(n4.D, {
                            className: Tz.uH,
                            onClick: function () {
                                let e = Tu.A.get(u.type);
                                (0, lp.qf)((t) =>
                                    (0, f.jsx)(lT.a, {
                                        title: V.intl.formatToPlainString(V.t.U5x12f, { name: e.name }),
                                        subtitle: V.intl.format(V.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: V.intl.string(V.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: V.intl.string(V.t.bsbMVz),
                                                onClick: () => {
                                                    (o(), t.onClose());
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            Tm.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, f.jsx)(l9.A, {
                                                children: V.intl.format(V.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": V.intl.string(V.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, f.jsx)(u9.XSmallIcon, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, f.jsx)(TY, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, Tc.An)(t[TF.pK.CREATED_AT], c);
                    switch (e.type) {
                        case _.fg2.REDDIT:
                            n = (0, TA.xE)(t, Tz.Nz);
                            break;
                        case _.fg2.STEAM:
                            n = (0, TA.dy)(t, Tz.Nz);
                            break;
                        case _.fg2.LETTERBOXD:
                            n = (0, TA.uq)(t, Tz.Nz);
                            break;
                        case _.fg2.BLUESKY:
                        case _.fg2.TWITTER:
                        case _.fg2.MASTODON:
                            n = (0, TA.ED)(t, Tz.Nz);
                            break;
                        case _.fg2.EBAY:
                            n = (0, TA.ub)(t, Tz.Nz);
                            break;
                        case _.fg2.PAYPAL:
                            n = (0, TA.gZ)(t, Tz.Nz);
                            break;
                        case _.fg2.TIKTOK:
                            n = (0, TA.HU)(t, Tz.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, f.jsx)(
                                n5.E,
                                {
                                    variant: "body-xs/normal",
                                    color: "text-subtle",
                                    className: Tz.M4,
                                    children: V.intl.format(V.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = O.includes(e.id),
                        s = V.intl.string(V.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== Tu.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, f.jsx)(
                                    "div",
                                    {
                                        className: Tz.Z3,
                                        children: (0, f.jsx)(Ab.E, { type: "new", variant: "primary" }),
                                    },
                                    "badge",
                                ),
                                (0, f.jsx)(
                                    n5.E,
                                    {
                                        variant: "body-xs/normal",
                                        className: Tz.vt,
                                        children: V.intl.format(V.t.Up2ni7, {
                                            helpdeskUrl: eC.A.getArticleURL(_.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (s = V.intl.string(V.t["LVh3/5"])));
                    return (
                        l && (s = V.intl.string(V.t.i4jeWR)),
                        n.push(
                            (0, f.jsx)(
                                "div",
                                {
                                    className: Tz.jy,
                                    children: (0, f.jsx)(j.$, {
                                        text: s,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: y,
                                        disabled: l,
                                        "aria-label": V.intl.string(V.t.sCkLYH),
                                        onClick: l
                                            ? void 0
                                            : () => {
                                                  (v(!0),
                                                      Ta.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              (O.push(e.id), R(O), v(!1));
                                                          }, 2e3);
                                                      }));
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, f.jsx)("div", { className: Tz.tJ, children: n })
                    );
                })(u),
                (_.txh.has(u.type) &&
                    (s = (0, f.jsx)(t4.d, {
                        label: V.intl.string(V.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), Ta.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                _.ewM.has(u.type) &&
                    (r = (0, f.jsx)(t4.d, {
                        label: V.intl.format(V.t["6u6J0q"], { platform: L.name }),
                        checked: T,
                        onChange: function (e) {
                            (p(e), Ta.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                Tu.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, f.jsx)(t4.d, {
                        label: V.intl.string(V.t.FYKGsL),
                        checked: 1 === h,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (C(n), (0, Tg.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (S(n), Ta.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, f.jsxs)("div", {
                    className: Tz.HZ,
                    children: [
                        (0, f.jsx)(t4.d, {
                            label: V.intl.string(V.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (b(n), (0, Tg.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (E(n), Ta.A.setVisibility(u.type, u.id, n));
                            },
                        }),
                        a,
                        r,
                        s,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, f.jsx)(ls.c, {});
                })(),
                u.revoked
                    ? (0, f.jsx)(iK.w, {
                          type: "info",
                          message: V.intl.format(V.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, Tg.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                          role: "none",
                      })
                    : u.integrations.length > 0
                      ? (0, f.jsx)(lu.D, {
                            label: V.intl.string(V.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, f.jsx)(TH, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, f.jsx)(TS.A, { partner: u.type }),
            ],
        })
    );
}
function TK(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, f.jsxs)("div", {
              className: Tz.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = M.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, f.jsxs)("div", {
                          className: Tz.Il,
                          children: [
                              (0, f.jsx)("img", { alt: n.name, className: ic()(Tz.gj, Tz.sN), src: i }),
                              (0, f.jsxs)("div", {
                                  children: [
                                      (0, f.jsx)("div", {
                                          className: Tz.$p,
                                          children: (0, f.jsx)(n5.E, {
                                              color: "text-strong",
                                              variant: "body-md/semibold",
                                              className: Tz.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, f.jsx)(n5.E, {
                                          variant: "body-xs/normal",
                                          color: "text-strong",
                                          className: Tz.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, f.jsx)(n4.D, {
                                  className: Tz.uH,
                                  onClick: () =>
                                      (0, Ti.d1)(n, t.scopes, () => {
                                          Tn.A.delete(t.id);
                                      }),
                                  "aria-label": V.intl.string(V.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, f.jsx)(u9.XSmallIcon, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, f.jsx)("div", {
                      className: Tz.HZ,
                      children: (0, f.jsx)(t4.d, {
                          label: V.intl.string(V.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              TO.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function TZ() {
    let e = (0, Td.gn)(),
        t = (0, i3.A)((0, TB.Gl)());
    return (0, f.jsxs)("div", {
        className: Tz.lA,
        children: [
            t.map((e) => null != e && (0, f.jsx)(TD.A, { application: e, innerClassName: Tz.U$ }, e.id)),
            e.map((e) =>
                (0, f.jsx)(
                    To.A,
                    { type: e.type, innerClassName: Tz.U$, location: tk.A.USER_SETTINGS_CONNECTIONS },
                    e.type,
                ),
            ),
        ],
    });
}
function Tq(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: l, authorizedApps: s, theme: r, locale: a } = e,
        o = x.useMemo(() => i.filter((e) => Tu.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, f.jsx)(oj.y, { type: oj.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === l.length
              ? (0, f.jsx)(Tr.pp, {
                    theme: r,
                    className: Tz.p$,
                    children: (0, f.jsx)(Tr.SG, {
                        note: V.intl.string(V.t.WenGZ2),
                        children: V.intl.string(V.t.aoLS84),
                    }),
                })
              : (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsx)(N.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            children: V.intl.format(V.t.AioIGb, { count: l.length + o.length }),
                        }),
                        l.map((e, t) =>
                            (0, f.jsx)(
                                TK,
                                { appIdentity: e, oauth2Token: s.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, f.jsx)(
                                TW,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            Ta.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, f.jsx)("div", { className: Tz.V, children: t })
    );
}
let TQ = (0, h.E2)(S.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, f.jsx)(lu.D, { label: V.intl.string(V.t["t+aGse"]), children: (0, f.jsx)(TZ, {}) });
        },
        useSearchTerms: () => [
            V.intl.string(V.t.Zhcj9X),
            V.intl.string(V.t.QqTz8b),
            V.intl.string(V.t["+/hZM/"]),
            V.intl.string(V.t.bsbMVz),
            V.intl.string(V.t.f7yOAX),
            V.intl.string(V.t.FYKGsL),
            V.intl.string(V.t["+KCMSi"]),
        ],
    }),
    TJ = (0, h.E2)(S.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, I.bG)([tu.A], () => tu.A.hidePersonalInformation),
                t = (0, I.bG)([TN.A], () => TN.A.isFetching()),
                n = (0, I.bG)([TN.A], () => TN.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: l } = (0, I.cf)([Th.A], () => ({
                    authorizedAppsFetchState: Th.A.getFetchState(),
                    authorizedApps: Th.A.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: s, filteredAppIdentities: r } = (0, TR.A)(sE.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, cx.Ay)(),
                o = (0, I.bG)([us.default], () => us.default.locale);
            return (x.useEffect(() => {
                i === Th.FetchState.NOT_FETCHED && Tn.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, f.jsxs)(f.Fragment, {
                      children: [
                          (0, f.jsx)(Tj, {}),
                          (0, f.jsx)(Tq, {
                              fetching: t || s || (r.length > 0 && i !== Th.FetchState.FETCHED),
                              accounts: n,
                              appIdentities: r,
                              authorizedApps: l,
                              theme: a,
                              locale: o,
                          }),
                      ],
                  });
        },
        initialize: () => {
            Ta.A.fetch();
        },
        useSearchTerms: () => [
            V.intl.string(V.t["+/hZM/"]),
            V.intl.string(V.t.bsbMVz),
            V.intl.string(V.t.f7yOAX),
            V.intl.string(V.t.FYKGsL),
            V.intl.string(V.t["+KCMSi"]),
        ],
    }),
    T$ = (0, h.zZ)(S.X.CONNECTIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["3fe7U5"]),
        useSubtitle: () => V.intl.string(V.t.U22vw6),
        buildLayout: () => [TQ, TJ],
    }),
    T0 = (0, h.zZ)(S.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["f6kk+r"]),
        useSubtitle: () => V.intl.string(V.t.G9JfLg),
        buildLayout: () => [Tl],
        initialize: () => (
            Tn.A.fetch(),
            () => {
                Ti.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    T1 = (0, h.t_)(S.X.CONNECTED_APPS_PANEL, {
        useTitle: () => V.intl.string(V.t.lrVuZO),
        useObscuredNotice: oS.L,
        buildLayout: () => [T$, T0],
    }),
    T2 = (0, h.i4)(S.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.lrVuZO),
        icon: Sl.LinkIcon,
        buildLayout: () => [T1],
    });
var T3 = n(625657),
    T5 = n(592598),
    T4 = n(228342),
    T6 = n(373954),
    T8 = n(672396);
let T7 = pe(null);
function T9() {
    var e;
    let t = pe(T7);
    ((e = T7),
        K().isEqual(K().omit(t, "old_enabled"), K().omit(e, "old_enabled")) ||
            (td.default.track(_.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (T7 = t)));
}
function pe(e) {
    let t = T6.default.getNotificationPositionMode(),
        n = t !== _.G6Q.DISABLED,
        i = la.Ay.getOverlayKeybind(),
        l = la.Ay.getOverlayChatKeybind();
    return {
        enabled: T4.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: T5.A.isNotificationDisabled(T8.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, lS.dI)(i.shortcut) : null,
        text_activation_hotkey: null != l ? (0, lS.dI)(l.shortcut) : null,
        text_opacity_slider: T6.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? T4.default.enabled,
    };
}
var pt = n(237984),
    pn = n(63035);
function pi(e) {
    (e.preventDefault(), e.stopPropagation());
}
function pl(e) {
    let { children: t } = e;
    return (0, f.jsx)("div", { onClick: pi, children: t });
}
function ps(e) {
    let {
        header: t,
        icon: n,
        title: i,
        description: l,
        action: s,
        hint: r,
        warning: a,
        onClick: o,
        "aria-label": u,
        className: d,
    } = e;
    return (0, f.jsxs)("div", {
        className: ic()(pn.HS, d),
        children: [
            (0, f.jsxs)(Si.s, {
                "aria-label": u,
                onClick: o,
                focusProps: { offset: 4 },
                children: [
                    null != t && (0, f.jsx)("div", { className: pn.x_, children: t }),
                    (0, f.jsxs)("div", {
                        className: pn.rN,
                        children: [
                            null != n && (0, f.jsx)("div", { className: pn.$t, children: n }),
                            (0, f.jsxs)("div", {
                                className: pn.c8,
                                children: [
                                    (0, f.jsx)(n5.E, {
                                        variant: "body-md/medium",
                                        color: "text-strong",
                                        className: pn.SZ,
                                        children: i,
                                    }),
                                    null != l &&
                                        (0, f.jsx)(n5.E, {
                                            variant: "body-sm/normal",
                                            color: "text-subtle",
                                            children: l,
                                        }),
                                    null != r &&
                                        (0, f.jsx)(n5.E, {
                                            variant: "footnote/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, f.jsx)("div", { className: pn.a$, children: s }),
                        ],
                    }),
                ],
            }),
            (0, f.jsx)("div", { className: pn.Om, children: a }),
        ],
    });
}
let pr = (0, h.E2)(S.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, f.jsx)(ps, {
            title: V.intl.string(V.t["z4/l+V"]),
            description: V.intl.string(V.t["3aZq/0"]),
            action: (0, f.jsx)(j.$, {
                variant: "primary",
                text: V.intl.string(V.t.s2nVhG),
                onClick: () => {
                    (0, pt.b)(tk.A.USER_SETTINGS, _.BRT.APP);
                },
            }),
            "aria-label": V.intl.string(V.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [V.intl.string(V.t["z4/l+V"])],
});
var pa = n(273626),
    po = n(684013),
    pu = n(56562),
    pd = n(311043),
    pc = n(454908),
    pg = n(41984),
    pm = n(918825),
    pA = n(861862),
    pE = n(562519);
let ph = 5 * n(927813).A.Millis.DAY,
    pS = new pE.A("overlay_survey_timestamps");
function pT(e, t) {
    let i, l;
    ((i = Date.now()),
        (null != (l = Array.from(pS.values()).reduce((e, t) => Math.max(e, t), 0)) && i - l < ph) ||
            Array.from(pS.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, lp.mM)(async () => {
                let i,
                    { default: l } = await Promise.all([n.e(914052), n.e(82318)]).then(n.bind(n, 387101));
                return ((i = Date.now()), pS.add(i), (n) => (0, f.jsx)(l, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function pp() {
    (0, le.sL)("overlay-settings");
}
function pf(e) {
    let { className: t, game: n } = e;
    return (0, le.NP)() && null != n && n.elevated
        ? (0, f.jsx)("div", {
              className: t,
              children: (0, f.jsx)(iK.w, {
                  type: "warning",
                  message: V.intl.format(V.t["LJzl+0"], { helpCenterLink: eC.A.getArticleURL(_.MVz.SYSTEM_SERVICE) }),
                  role: "status",
                  action: { text: V.intl.string(V.t["1iI46O"]), onClick: pp },
              }),
          })
        : null;
}
var px = n(760751),
    pI = n(9302),
    p_ = n(656513);
let pb = new Set([
    pg.AR.INITIALIZING,
    pg.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    pg.AR.WAITING_FOR_MODULE_TRACKING,
    pg.AR.WAITING_FOR_OVERLAY_OPEN,
    pg.AR.WAITING_FOR_POPOUT_OPEN,
    pg.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    pg.AR.WAITING_FOR_REACT_INITIALIZATION,
    pg.AR.WAITING_FOR_PID_FOCUS,
    pg.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function pN(e) {
    let { children: t, className: n, onExpand: i, ...l } = e,
        [s, r] = x.useState(!1);
    return (0, f.jsx)(p_.N, {
        className: pn.uR,
        collapsibleContent: (0, f.jsx)("div", { className: pn.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, f.jsx)(ps, {
                ...l,
                onClick: (e) => {
                    var n;
                    (r((n = !s)), i?.(n), t?.(e));
                },
                className: ic()(pn.AC, n),
                action: (0, f.jsxs)("div", {
                    className: pn.rc,
                    children: [
                        l.action,
                        s
                            ? (0, f.jsx)(mR.ChevronSmallDownIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, f.jsx)(n8.ChevronSmallRightIcon, {
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
let pC = (0, h.E2)(S.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = i8();
        (0, pc.I)(e?.id);
        let n = e?.pid,
            i = (0, I.bG)(
                [pA.default],
                () => (null == e || null == n ? null : pA.default.getTrackedGameByPid(n)),
                [e, n],
                i1(),
            ),
            { data: l } = (0, pc.I)(i?.gameId),
            { enabledLegacy: s, enabledOOP: r } = (0, I.cf)(
                [px.A, tc.A, pd.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, i4.hw)(e, !1, [px.A, tc.A, pd.A]),
                [e, i],
            ),
            a = (0, I.bG)(
                [i4.Ay, px.A, tc.A, pd.A],
                () => (null == e ? null : (0, i4.xU)(e, i4.Ay, px.A, tc.A, pd.A)),
                [e],
                i1(),
            ),
            [o, u] = x.useState(r),
            [d, c] = x.useState(s),
            [g, m] = x.useState(!1);
        x.useEffect(() => {
            (u(r), c(s));
        }, [r, s]);
        let A = !(0, pI.kA)(),
            E = !(0, pI.T6)(),
            { legacyEnabled: h, oopEnabled: S } = (0, I.cf)([pA.default], () => pA.default.getGlobalEnabledStatus());
        function T(t, n) {
            if (null == e) return;
            let i = !1,
                l = !1;
            switch (n) {
                case pm.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), pa.A.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case pm.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), pa.A.toggleOverlay(e, d, t), (l = !t && o));
                    break;
                case pm.OverlayToggledClientSettingType.LEGACY:
                    (po.A.setEnabled(t, S), (0, pm.Q)(t, pm.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case pm.OverlayToggledClientSettingType.OOP:
                    (po.A.setEnabled(h, t), (0, pm.Q)(t, pm.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || l) &&
                pT(
                    i ? pm.OverlayToggledClientSettingType.LEGACY_GAME : pm.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let p = A && E,
            _ = !h && !S,
            b = !o && !h && d && !A,
            N = !d && !S && o && !E,
            C = i?.overlayMethod === pg.Ue.Disabled,
            y = i?.state === pg.AR.OVERLAY_RENDERING && !C,
            v = i?.state != null && pb.has(i.state) && !C,
            j = i?.overlayMethod === pg.Ue.OutOfProcess,
            O = i?.overlayMethod === pg.Ue.OutOfProcessLimitedInteraction,
            R = i?.overlayMethod === pg.Ue.Hook,
            D = i?.state === pg.AR.OVERLAY_CRASHED || i?.state === pg.AR.OVERLAY_CRASHED_DISABLED,
            L = !o && !d,
            [P, G] = (function () {
                switch (!0) {
                    case y && j:
                        return [
                            V.intl.format(V.t.hFVBIg, {
                                overlayMethod: V.intl.string(V.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, f.jsx)(
                                        n5.E,
                                        {
                                            tag: "span",
                                            variant: "body-sm/medium",
                                            color: "text-feedback-positive",
                                            children: e,
                                        },
                                        t,
                                    );
                                },
                            }),
                            null,
                        ];
                    case y && O:
                        return [
                            V.intl.format(V.t.hFVBIg, {
                                overlayMethod: V.intl.string(V.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, f.jsx)(
                                        n5.E,
                                        {
                                            tag: "span",
                                            variant: "body-sm/medium",
                                            color: "text-feedback-warning",
                                            children: e,
                                        },
                                        t,
                                    );
                                },
                            }),
                            null,
                        ];
                    case y && R:
                        return [
                            V.intl.format(V.t.hFVBIg, {
                                overlayMethod: V.intl.string(V.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, f.jsx)(
                                        n5.E,
                                        { tag: "span", variant: "body-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case i?.fullscreenType !== pu.aI.BORDERLESS_FULLSCREEN:
                                        return V.intl.string(V.t.mJmbeC);
                                    case E:
                                        return V.intl.string(V.t.C7bLTQ);
                                    case !i?.oopEnabled:
                                        return V.intl.string(V.t.WiY24u);
                                    case !S:
                                        return V.intl.string(V.t.cAFVsL);
                                    case !(l?.supportsOutOfProcessOverlay ?? !0):
                                        return V.intl.string(V.t.XcGEcs);
                                    default:
                                        return V.intl.string(V.t.bJXH2v);
                                }
                            })(),
                        ];
                    case D:
                        return [V.intl.string(V.t.OFC2aw), null];
                    case p:
                        return [V.intl.string(V.t.m7X4az), null];
                    case _:
                        return [V.intl.string(V.t["9DUS5l"]), null];
                    case L:
                        return [V.intl.string(V.t.nQ9EdJ), null];
                    case b:
                    case N:
                        return [V.intl.string(V.t.VWUn0a), null];
                    case v:
                        if (j) return [V.intl.string(V.t["s8+CFq"]), null];
                        if (R) return [V.intl.string(V.t.JEEdqt), null];
                        if (O) return [V.intl.string(V.t.pzBMwY), null];
                        return [V.intl.string(V.t["2Xhy9k"]), null];
                    case null == i:
                        return [V.intl.string(V.t.vwHPRi), null];
                    case C: {
                        let e = i?.fullscreenType === pu.aI.FULLSCREEN ? V.intl.string(V.t.mJmbeC) : null;
                        return [V.intl.string(V.t.VPW4XY), e];
                    }
                    default:
                        return [V.intl.string(V.t.ONovP5), null];
                }
            })();
        (0, e_.Ay)(() => {
            pa.A.getDetectableGames();
        });
        let [M, U] = x.useMemo(
            () =>
                v
                    ? ["text-muted", n1.A.colors.TEXT_MUTED.css]
                    : y && O
                      ? ["text-feedback-warning", n1.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : y && j
                        ? ["text-feedback-positive", n1.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : y && R
                          ? ["text-strong", n1.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", n1.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, y, O, j, R],
        );
        return null == e
            ? null
            : (0, f.jsxs)(pN, {
                  onExpand: m,
                  className: g ? pn.tx : void 0,
                  title: (0, f.jsxs)(f.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, f.jsx)(lg.m, {
                                    text: V.intl.string(V.t["4PJP5p"]),
                                    children: (0, f.jsx)(TE.A, {
                                        size: 16,
                                        color: n1.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, f.jsx)(Ts.CheckmarkSmallIcon, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: n1.A.colors.WHITE.css,
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  description: P,
                  hint: null != G ? G : void 0,
                  header: (0, f.jsxs)(f.Fragment, {
                      children: [
                          y || v
                              ? (0, f.jsx)(dk.ScreenIcon, { size: "xxs", color: U })
                              : (0, f.jsx)("div", { className: pn.W4 }),
                          (0, f.jsx)(n5.E, {
                              variant: "body-xs/semibold",
                              color: M,
                              children: V.intl.string(V.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, f.jsx)(i7.A, { game: t, pid: e?.pid, size: i7.M.MEDIUM }),
                  "aria-label": V.intl.string(V.t["87O5GC"]),
                  action: (0, f.jsx)(pl, {
                      children: (0, f.jsx)(t4.d, {
                          checked: (o && S) || (d && h),
                          disabled: p,
                          onChange: (t) => {
                              !(function (t, n) {
                                  if (null == e) return;
                                  let i = !1,
                                      l = !1;
                                  switch (n) {
                                      case "game":
                                          (pa.A.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (l = !t && o));
                                          break;
                                      case "global":
                                          (po.A.setEnabled(t, t), (i = !t && h), (l = !t && S));
                                          break;
                                      case "both":
                                          (po.A.setEnabled(t, t),
                                              pa.A.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && h) || (!t && d)),
                                              (l = (!t && S) || (!t && o)));
                                  }
                                  let s = null;
                                  (i
                                      ? (s =
                                            "game" === n
                                                ? pm.OverlayToggledClientSettingType.LEGACY_GAME
                                                : pm.OverlayToggledClientSettingType.LEGACY)
                                      : l &&
                                        (s =
                                            "game" === n
                                                ? pm.OverlayToggledClientSettingType.OOP_GAME
                                                : pm.OverlayToggledClientSettingType.OOP),
                                      null != s && pT(s, e.id ?? null));
                              })(
                                  t,
                                  (function (e, t) {
                                      let n = !t && e,
                                          i = !S && o,
                                          l = !h && d,
                                          s = !o && S,
                                          r = !d && h;
                                      switch (!0) {
                                          case n && (i || l) && (s || r):
                                              return "both";
                                          case n && (i || l):
                                              return "global";
                                          default:
                                              return "game";
                                      }
                                  })(t, (o && S) || (d && h)),
                              );
                          },
                      }),
                  }),
                  warning: (0, f.jsx)(pf, { className: pn.Hh, game: e }),
                  children: [
                      (0, f.jsx)(ps, {
                          title: V.intl.string(V.t["7BlVIs"]),
                          description: V.intl.string(V.t.ndgADE),
                          hint: S ? void 0 : V.intl.string(V.t.cAFVsL),
                          "aria-label": V.intl.string(V.t["7BlVIs"]),
                          action: (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsx)(t4.d, {
                                      checked: o && S,
                                      disabled: E,
                                      onChange: (e) => {
                                          e && !S
                                              ? T(e, pm.OverlayToggledClientSettingType.OOP)
                                              : T(e, pm.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, f.jsx)("div", { className: pn.Kz }),
                              ],
                          }),
                      }),
                      (0, f.jsx)(ps, {
                          title: V.intl.string(V.t.BfFpW1),
                          description: V.intl.string(V.t.OzInYk),
                          hint: h ? void 0 : V.intl.string(V.t["3sYHXm"]),
                          "aria-label": V.intl.string(V.t.BfFpW1),
                          action: (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsx)(t4.d, {
                                      checked: d && h,
                                      disabled: A,
                                      onChange: (e) => {
                                          e && !h
                                              ? T(e, pm.OverlayToggledClientSettingType.LEGACY)
                                              : T(e, pm.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, f.jsx)("div", { className: pn.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = i8();
        return null != e;
    },
    useSearchTerms: () => [V.intl.string(V.t["9cb1Uz"])],
});
var py = n(206885);
function pv(e) {
    let { game: t, gameApplication: n } = e,
        i = x.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        l = (0, I.bG)([i2.A], () => (null != n ? n : i2.A.getApplication(t?.id)), [n, t]);
    return (0, f.jsx)(i7.A, { game: l, pid: i, size: i7.M.SMALL });
}
function pj(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: l,
        onChange: s,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, pc.I)(t?.id);
    let o = (0, I.cf)([i4.Ay, px.A, tc.A, pd.A], () => (0, i4.xU)(t, i4.Ay, px.A, tc.A, pd.A)),
        u = (0, I.cf)([px.A, tc.A, pd.A], () => (0, i4.hw)(t, !1, [px.A, tc.A, pd.A]), [t]),
        d = l(u),
        [c, g] = x.useState(d);
    return (
        x.useEffect(() => {
            g(d);
        }, [d]),
        (0, f.jsx)(ps, {
            title: t.name,
            icon: (0, f.jsx)(pv, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)(t4.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), s(e, o, u), n && pT(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, f.jsx)("div", { className: pn.Kz }),
                ],
            }),
        })
    );
}
let pO = (0, h.E2)(S.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = x.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, I.cf)([pA.default], () =>
                    pA.default.getGlobalEnabledStatus(),
                ),
                l = (0, I.yK)([i4.Ay], () => i4.Ay.getGamesSeen(!0)).filter((e) => !(0, SI.n1)(e)),
                s = (0, i3.A)(l.map((e) => e.id)),
                r = !(0, pI.kA)();
            function a(e) {
                po.A.setEnabled(e, i);
                let t = i4.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, pm.Q)(e, pm.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && pT(pm.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                pa.A.toggleOverlay(t, e, i);
            }
            let u = x.useMemo(
                () =>
                    (0, pI.kA)()
                        ? r
                            ? V.intl.string(V.t.r9jEVw)
                            : V.intl.string(V.t.OzInYk)
                        : V.intl.string(V.t["8Ox6/E"]),
                [r],
            );
            return 0 === l.length
                ? (0, f.jsx)(ps, {
                      title: V.intl.string(V.t.BfFpW1),
                      description: u,
                      "aria-label": V.intl.string(V.t.BfFpW1),
                      className: pn.dA,
                      action: (0, f.jsxs)(f.Fragment, {
                          children: [
                              (0, f.jsx)(t4.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              py.O && (0, f.jsx)("div", { className: pn.Kz }),
                          ],
                      }),
                  })
                : (0, f.jsxs)(pN, {
                      onExpand: t,
                      className: e ? pn.tx : void 0,
                      title: V.intl.string(V.t.BfFpW1),
                      description: u,
                      "aria-label": V.intl.string(V.t.BfFpW1),
                      action: (0, f.jsx)(pl, {
                          children: (0, f.jsx)(t4.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, f.jsx)("div", {
                              className: pn.SC,
                              children: (0, f.jsx)(n5.E, {
                                  variant: "body-xs/semibold",
                                  color: "text-muted",
                                  children: V.intl.string(V.t.FzoWRo),
                              }),
                          }),
                          (0, f.jsx)(C.Ip, {
                              className: pn.XG,
                              children: l.map((e, t) =>
                                  (0, f.jsx)(
                                      pj,
                                      {
                                          rawGame: e,
                                          clientSettingType: pm.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: s[t],
                                          getEnabledFromStatus: (e) => {
                                              let { enabledLegacy: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: V.intl.format(V.t.hvPYsF, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t.BfFpW1)],
    }),
    pR = (0, h.E2)(S.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = x.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, I.cf)([pA.default], () =>
                    pA.default.getGlobalEnabledStatus(),
                ),
                l = !(0, pI.T6)(),
                s = (0, I.yK)([i4.Ay], () => i4.Ay.getGamesSeen(!0)).filter((e) => !(0, SI.n1)(e)),
                r = (0, i3.A)(s.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                po.A.setEnabled(i, e);
                let l = i4.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, pm.Q)(e, pm.OverlayToggledClientSettingType.OOP, l),
                    t && pT(pm.OverlayToggledClientSettingType.OOP, l));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                pa.A.toggleOverlay(t, e, i);
            }
            let u = x.useMemo(
                () => (py.O ? (l ? V.intl.string(V.t.C7bLTQ) : V.intl.string(V.t.ndgADE)) : V.intl.string(V.t.m7X4az)),
                [l],
            );
            return 0 === s.length
                ? (0, f.jsx)(ps, {
                      title: V.intl.string(V.t["7BlVIs"]),
                      description: u,
                      "aria-label": V.intl.string(V.t["7BlVIs"]),
                      className: pn.dA,
                      action: (0, f.jsxs)(f.Fragment, {
                          children: [
                              (0, f.jsx)(t4.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                              py.O && (0, f.jsx)("div", { className: pn.Kz }),
                          ],
                      }),
                  })
                : (0, f.jsxs)(pN, {
                      onExpand: t,
                      className: e ? pn.tx : void 0,
                      title: V.intl.string(V.t["7BlVIs"]),
                      description: u,
                      "aria-label": V.intl.string(V.t["7BlVIs"]),
                      action: (0, f.jsx)(pl, {
                          children: (0, f.jsx)(t4.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, f.jsx)("div", {
                              className: pn.SC,
                              children: (0, f.jsx)(n5.E, {
                                  variant: "body-xs/semibold",
                                  color: "text-muted",
                                  children: V.intl.string(V.t.FzoWRo),
                              }),
                          }),
                          (0, f.jsx)(C.Ip, {
                              className: pn.XG,
                              children: s.map((e, t) =>
                                  (0, f.jsx)(
                                      pj,
                                      {
                                          rawGame: e,
                                          clientSettingType: pm.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: l,
                                          getEnabledFromStatus: (e) => {
                                              let { enabledOOP: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: V.intl.format(V.t.nByTd3, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t["7BlVIs"])],
    }),
    pD = (0, h.zZ)(S.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => V.intl.string(V.t["/dp6yY"]),
        buildLayout: () => [pC, pR, pO, pr],
    }),
    pL = (0, h.zD)(S.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, I.bG)([T6.default], () => !T6.default.disableClickableRegions),
        setValue: (e) => {
            po.A.setDisableClickableRegions(!e);
        },
        useTitle: () => V.intl.string(V.t["+eFXxq"]),
        useSubtitle: () => V.intl.string(V.t.kivMAp),
    }),
    pP = (0, h.E2)(S.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, I.bG)([la.Ay], () => la.Ay.getOverlayKeybind()),
                t = !(0, pI.kA)(),
                n = !(0, pI.T6)(),
                [i, l] = (0, I.yK)([i4.Ay], () => [i4.Ay.canShowAdminWarning, i4.Ay.getVisibleGame()], []),
                s = (0, le.NP)(),
                r = null != l && l.elevated && i && !s,
                a = !(0, la.DV)(e?.shortcut ?? []);
            return (0, f.jsx)("div", {
                className: pn.hc,
                children: (0, f.jsxs)("div", {
                    className: pn.eH,
                    children: [
                        (0, f.jsxs)("div", {
                            className: pn.Bu,
                            children: [
                                (0, f.jsx)(n5.E, {
                                    variant: "body-md/medium",
                                    color: "text-strong",
                                    children: V.intl.string(V.t.VsAZcC),
                                }),
                                r &&
                                    (0, f.jsx)(n5.E, {
                                        variant: "body-xs/normal",
                                        color: "text-feedback-warning",
                                        className: pn.y7,
                                        children: V.intl.string(V.t.NsowVa),
                                    }),
                                a &&
                                    (0, f.jsx)(n5.E, {
                                        variant: "body-xs/normal",
                                        color: "text-feedback-warning",
                                        className: pn.y7,
                                        children: V.intl.string(V.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, f.jsx)("div", {
                            className: pn.IH,
                            children: (0, f.jsx)(lh.A, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    (tE()(null != e, "Keybind should never be undefined"),
                                        iZ.A.setKeybind({ ...e, shortcut: t }));
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.VsAZcC)],
    });
var pG = n(515183),
    pM = n(682763);
let pU = (0, h.zD)(S.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = i8();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = i8();
            return null != e && (0, pG.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = i8(),
                n = t?.id,
                i = (0, I.bG)([T5.A], () => T5.A.isLimitedInteractionOverrideEnabled(n)),
                l = null != e && (0, pG.qJ)(e.pid);
            return i || l;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                l,
                { runningGameApplication: s } =
                    ((t = i5.A.getStreamerActiveStreamMetadata()),
                    (l = i6(
                        t,
                        (i =
                            null != (n = i4.Ay.getVisibleGame())
                                ? i4.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: i2.A.getApplication(l) ?? void 0 });
            null != s && (0, pM.x8)(s.id, e);
        },
        useTitle: () => V.intl.string(V.t.wgVQND),
        useSubtitle: () => V.intl.string(V.t["5SsyF5"]),
    }),
    pV = (0, h.zZ)(S.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [pP, pU, pL] });
var pk = n(93465),
    pw = n(222407);
let pF = [
    {
        title: V.t.eVE4LX,
        description: V.t["72WNqk"],
        disabledSetting: pk.M.TEXT_CHAT,
        key: S.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: V.t.oifnSh,
        description: V.t.bgU5r0,
        disabledSetting: pk.M.WELCOME_GENERAL,
        key: S.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: V.t.hqsZJW,
        description: V.t.kHjdqc,
        disabledSetting: pk.M.GO_LIVE_NUDGE,
        key: S.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: V.t.sop3rn,
        description: V.t.pjgffc,
        disabledSetting: pk.M.GAME_ACTIVITY,
        key: S.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: V.t["2QVhbb"],
        description: V.t.wQ4ilB,
        disabledSetting: pk.M.NOW_PLAYING,
        key: S.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: V.t.giM9fA,
        description: V.t.EhAfWj,
        disabledSetting: pk.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: S.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, nf.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, I.bG)([T5.A], () => T5.A.isNotificationDisabledBySetting(pk.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function pB(e) {
    return (0, h.zD)(e.key, {
        useTitle: () => V.intl.string(e.title),
        useSubtitle: () => V.intl.string(e.description),
        useValue: () => !(0, I.bG)([T5.A], () => T5.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            (0, pw.I)(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let pX = (0, h.FW)(S.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => pF.map(pB),
    }),
    pz = (0, h.zZ)(S.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.xOE5bA),
        buildLayout: () => [pX],
    }),
    pH = (0, h.Hn)(S.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => V.intl.string(V.t.dnvZSg),
        useValue: () => (0, I.bG)([T6.default], () => T6.default.getAvatarSizeMode()),
        setValue: (e) => {
            po.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: V.intl.string(V.t.YcOxtr), value: _.OSZ.LARGE },
            { id: "small", label: V.intl.string(V.t.BKIKqx), value: _.OSZ.SMALL },
        ],
    }),
    pY = (0, h.Hn)(S.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => V.intl.string(V.t.J0dpcB),
        useValue: () => (0, I.bG)([T6.default], () => T6.default.getDisplayNameMode()),
        setValue: (e) => {
            po.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: V.intl.string(V.t.nBmDrT), value: _.pwA.ALWAYS },
            { id: "speaking", label: V.intl.string(V.t["2OvIZY"]), value: _.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: V.intl.string(V.t.ekjlPL), value: _.pwA.NEVER },
        ],
    }),
    pW = (0, h.Hn)(S.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => V.intl.string(V.t.swsWWC),
        useValue: () => (0, I.bG)([T6.default], () => T6.default.getDisplayUserMode()),
        setValue: (e) => {
            po.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: V.intl.string(V.t.nBmDrT), value: _.f5z.ALWAYS },
            { id: "speaking", label: V.intl.string(V.t["2OvIZY"]), value: _.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var pK = n(391973),
    pZ = n(887287),
    pq = n(897720),
    pQ = n(83880);
function pJ() {
    let e = pZ.A.getWidgetByType(_.uss.VOICE_V3);
    if (null == e) return null;
    let t = pQ.A.getWidget(e.id);
    return null != t && (0, pq.ZO)(t) ? t : null;
}
n(392164);
let p$ = (0, h.sN)(S.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => V.intl.string(V.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? V.intl.string(V.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = pJ();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? V.intl.string(V.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = pJ();
        null != t &&
            (e < 1
                ? (0, pK.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, pK.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var p0 = n(502812),
    p1 = n(968898),
    p2 = n(288737);
function p3(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new p2.A({
            channelId: "123",
            userId: l,
            sessionId: "789",
            mute: t,
            deaf: n,
            selfMute: !1,
            selfDeaf: !1,
            selfVideo: !1,
            selfStream: !1,
            discoverable: i,
        }),
        user: new go.A({ id: l, username: e }),
        member: {
            nick: e,
            userId: l,
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
let p5 = (0, h.E2)(S.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, I.bG)([sE.default], () => sE.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: l,
                } = (0, I.cf)([T6.default], () => ({
                    avatarSizeMode: T6.default.getAvatarSizeMode(),
                    displayNameMode: T6.default.getDisplayNameMode(),
                    displayUserMode: T6.default.getDisplayUserMode(),
                })),
                [s] = x.useState(() => [
                    p3(V.intl.string(V.t.C0ZDvo), !0, !1),
                    p3(V.intl.string(V.t.iOtj8E), !1, !1, !0),
                    p3(V.intl.string(V.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, I.bG)([pZ.A, pQ.A], () => {
                    let e = pZ.A.getWidgetByType(_.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = pQ.A.getWidget(e.id);
                    return null != t && (0, pq.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = p3(t.username)).user = t), e) : null, ...s].filter(io.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, f.jsx)(c1.N, {
                    theme: _.NJ8.ONYX,
                    children: (e) =>
                        (0, f.jsxs)("div", {
                            className: ic()(pn.Y5, e),
                            children: [
                                (0, f.jsx)("div", {
                                    className: pn.kJ,
                                    children: (0, f.jsx)(p0.DH, {
                                        id: "voice-widget",
                                        title: V.intl.string(V.t.KNJ6Vq),
                                        channel: (0, G.createChannelRecord)({
                                            id: "123",
                                            name: "Test Channel",
                                            type: _.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: u,
                                        displayNameMode: i,
                                        displayUserMode: l,
                                        avatarSizeMode: n,
                                        widget: _.uss.VOICE,
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
                                (0, f.jsxs)("div", {
                                    className: pn.R$,
                                    children: [
                                        (0, f.jsx)(p1.Pl, { children: V.intl.string(V.t.KNJ6Vq) }),
                                        (0, f.jsx)(p1.CS, {}),
                                        (0, f.jsx)(p1.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, f.jsx)("div", { className: pn.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    p4 = (0, h.zZ)(S.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => V.intl.string(V.t.r1TZfh),
        buildLayout: () => [p5, pH, pY, pW, p$],
    });
var p6 = n(667419),
    p8 = n(776162),
    p7 = n(499466),
    p9 = n(934058),
    fe = n(630398),
    ft = n(233470),
    fn = n(361729);
let fi = [],
    fl = {
        [_.uss.VOICE_V3]: S.X.OVERLAY_WIDGETS_VOICE,
        [_.uss.QUICK_ACTIONS]: S.X.OVERLAY_WIDGETS_QUICK_ACTIONS,
        [_.uss.NOTIFICATIONS]: S.X.OVERLAY_WIDGETS_NOTIFICATIONS,
        [_.uss.TEXT_CHAT_V3]: S.X.OVERLAY_WIDGETS_CHAT,
        [_.uss.FRIENDS]: S.X.OVERLAY_WIDGETS_FRIENDS,
        [_.uss.ACTIVITY]: S.X.OVERLAY_WIDGETS_ACTIVITY,
        [_.uss.VIDEO]: S.X.OVERLAY_WIDGETS_VIDEO,
        [_.uss.GO_LIVE]: S.X.OVERLAY_WIDGETS_STREAMS,
    };
function fs(e) {
    let t = nx.A[e],
        n = fl[e];
    if (t?.label == null || null == t.description || null == n) return [];
    let { label: i, description: l, predicate: s } = t;
    return (0, h.zD)(n, {
        useTitle: () => i(),
        useSubtitle: () => l(),
        usePredicate: () => ((0, nf.M8)("OverlayWidgetsCategory"), s?.() ?? !0),
        useValue: () => (0, I.bG)([pQ.A], () => (0, p6.$e)(e, pQ.A), []),
        setValue: (t) => {
            ((0, p6.j$)(), (0, p6.JA)(e, !t));
        },
    });
}
let fr = (0, h.FW)(S.X.OVERLAY_WIDGETS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(fn.default["Qk/rJB"]),
        useSubtitle: () => V.intl.string(fn.default.HUjIgu),
        isTitleHiddenVisually: !0,
        buildLayout: () => p8.t3.flatMap(fs),
    }),
    fa = (0, h.E2)(S.X.OVERLAY_WIDGETS_APPS, {
        Component: function () {
            let e = (0, I.bG)([p9.A], () => p9.A.getOwnedProjects()),
                t = (0, p7.TW)("overlay_settings_conjure_apps"),
                n = (0, I.bG)([p9.A], () => p9.A.getServerProjects());
            (x.useEffect(() => {
                t && (0, ft.listProjects)();
            }, [t]),
                (0, fe.A)({ refetchOnMount: !0 }));
            let i = t ? e : fi;
            return 0 === i.length && 0 === n.length
                ? null
                : (0, f.jsxs)(q.B, {
                      gap: 16,
                      children: [
                          i.length > 0
                              ? (0, f.jsxs)(q.B, {
                                    gap: 8,
                                    children: [
                                        (0, f.jsx)(N.D, {
                                            variant: "heading-xs/semibold",
                                            color: "text-muted",
                                            children: V.intl.string(fn.default["pbu+Yx"]),
                                        }),
                                        i.map((e) => (0, f.jsx)(p8.i2, { project: e }, e.id)),
                                    ],
                                })
                              : null,
                          (0, f.jsx)(p8.R, { projects: n }),
                      ],
                  });
        },
        useSearchTerms: () => [V.intl.string(fn.default["pbu+Yx"])],
    }),
    fo = (0, h.Tf)(S.X.OVERLAY_WIDGETS_RESET, {
        useTitle: () => V.intl.string(V.t["hW+EMu"]),
        useLabel: () => V.intl.string(V.t.yBZMsQ),
        useVariant: () => "secondary",
        onClick: p6.eL,
    }),
    fu = (0, h.zZ)(S.X.OVERLAY_WIDGETS_CATEGORY, {
        useTitle: () => V.intl.string(fn.default["Qk/rJB"]),
        usePredicate: nI.b_,
        buildLayout: () => [fr, fa, fo],
    });
var fd = n(54761);
function fc() {
    let [e, t] = (0, m8.kn)([eE.M.OVERLAY_OOP_SETTINGS_NUX], { bypassAutoDismiss: !0 });
    return ((0, Z.Ay)(() => () => {
        t(As.i.AUTO_DISMISS);
    }),
    e !== eE.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, f.jsxs)(f.Fragment, {
              children: [
                  (0, f.jsxs)("div", {
                      className: fd.xC,
                      children: [
                          (0, f.jsx)("div", {
                              children: (0, f.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: V.intl.string(V.t.mdXZh1),
                                  className: fd.tl,
                              }),
                          }),
                          (0, f.jsx)("div", {
                              children: (0, f.jsxs)("div", {
                                  className: fd.vJ,
                                  children: [
                                      (0, f.jsx)(N.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: V.intl.string(V.t.jzjJQg),
                                      }),
                                      (0, f.jsx)(n5.E, {
                                          variant: "body-md/normal",
                                          color: "text-muted",
                                          children: V.intl.string(V.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, f.jsx)("div", {
                              children: (0, f.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/2aa57f16c71171fc8e0edb8cca60735f1192195344d17fa667de6d3ca8163ba0.png",
                                  alt: V.intl.string(V.t.mdXZh1),
                                  className: fd.lh,
                              }),
                          }),
                          (0, f.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: fd.VV,
                              children: (0, f.jsx)(j.$, {
                                  variant: "primary",
                                  text: V.intl.string(V.t.Q26diF),
                                  onClick: () => void t(As.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, f.jsx)(ls.c, { className: fd.yF }),
              ],
          });
}
function fg() {
    let e = (0, I.bG)([tu.A], () => tu.A.enabled),
        t = (0, nf.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, f.jsxs)(f.Fragment, {
              children: [
                  (0, f.jsx)(iK.w, {
                      type: "warning",
                      message: V.intl.format(V.t.fuEX5B, {
                          onClick: function () {
                              return (0, na.openUserSettings)(S.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                      role: "status",
                  }),
                  (0, f.jsx)(ls.c, { className: fd.yF }),
              ],
          })
        : null;
}
let fm = (0, h.t_)(S.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                T9(),
                la.Ay.addChangeListener(T9),
                T5.A.addChangeListener(T9),
                T6.default.addChangeListener(T9),
                T4.default.addChangeListener(T9),
                e8.isPlatformEmbedded && (0, Sb.a2)(),
                () => {
                    (la.Ay.removeChangeListener(T9),
                        T5.A.removeChangeListener(T9),
                        T6.default.removeChangeListener(T9),
                        T4.default.removeChangeListener(T9),
                        e8.isPlatformEmbedded && (0, Sb.e0)());
                }
            );
        },
        useTitle: () => V.intl.string(V.t["9cb1Uz"]),
        decoration: {
            type: p.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, f.jsxs)(f.Fragment, { children: [(0, f.jsx)(fc, {}), (0, f.jsx)(fg, {})] });
            },
        },
        buildLayout: () => [pD, pV, fu, p4, pz],
    }),
    fA = (0, h.i4)(S.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["9cb1Uz"]),
        icon: T3.WindowTopOutlineIcon,
        usePredicate: nI.b_,
        buildLayout: () => [fm],
    });
var fE = n(687966);
let fh = (0, h.AK)(S.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.OYYY6q),
        destinationKey: S.X.ACTIVITY_PRIVACY_PANEL,
    }),
    fS = (0, h.gN)(S.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [fh] });
var fT = n(227309),
    fp = n(29160),
    ff = n(552366),
    fx = n(938442);
function fI(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: l, subgames: s, isSubgame: r = !1, parentGame: a } = e;
    (0, pc.I)(t.id);
    let o = (0, I.cf)([i4.Ay, px.A, tc.A, pd.A], () => (0, i4.xU)(t, i4.Ay, px.A, tc.A, pd.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, I.cf)([i4.Ay], () => ({
            canToggleDetection: null == a || i4.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: i4.Ay.isDetectionEnabled(o),
        })),
        c = (0, I.bG)([i4.Ay], () => i4.Ay.getVisibleGame()),
        [g, m] = x.useState(!1),
        A = x.useRef(null),
        E = null != c && (0, i4.Es)(o) === (0, i4.Es)(c),
        h = !l && !g,
        S = !i && !E,
        T = h || S,
        p = x.useMemo(
            () =>
                (0, SI.n1)(o)
                    ? r
                        ? o.gameName
                        : V.intl.formatToPlainString(V.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [b, N] = x.useState(p ?? "???"),
        C = ic()(fx.tR, {
            [ff.LO]: !i,
            [ff.Rw]: i,
            [ff.FB]: null != o && i,
            [ff.xL]: r,
            [ff.fG]: null != s && s.length > 0,
        });
    function y() {
        (pa.A.deleteEntry(o),
            s?.forEach((e) => {
                pa.A.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? px.A.getDetectableGame(o.id) : null;
        (td.default.track(_.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, SI.n1)(o) ? o.gameName : o.name,
        }),
            (0, lp.mM)(async () => {
                let { default: t } = await Promise.all([n.e(568035), n.e(627495)]).then(n.bind(n, 651930));
                return (n) =>
                    (0, f.jsx)(t, {
                        ...n,
                        detected: { name: o.name ?? "", gameId: e?.id ?? o.id },
                        onSubmitted: () => m(!0),
                    });
            }));
    }
    return (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsxs)("div", {
                className: C,
                children: [
                    (0, f.jsxs)("div", {
                        className: ic()(ff.$K, fx.Vd),
                        children: [
                            null != o.processGame || (o.verified && !l)
                                ? (0, f.jsxs)("div", {
                                      className: ff.HS,
                                      children: [
                                          (0, f.jsx)("div", { className: ff.mO, children: p }),
                                          (0, f.jsx)(lg.m, {
                                              text: V.intl.string(V.t["4PJP5p"]),
                                              children: (0, f.jsx)(TE.A, {
                                                  className: ff.qf,
                                                  size: 18,
                                                  color: n1.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, f.jsx)(Ts.CheckmarkSmallIcon, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: n1.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, f.jsx)("input", {
                                      className: ic()(ff.mO, ff.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: b,
                                      onBlur: function () {
                                          o.name !== b && pa.A.editName(o, b);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === lk.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => N(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: n, exePath: l } = o;
                                return (
                                    i || E
                                        ? (e = V.intl.string(V.t.VbV5dv))
                                        : null != n && "" !== n && (e = V.intl.format(V.t["gGeOE+"], { when: n })),
                                    (0, f.jsx)(n5.E, {
                                        variant: "body-sm/normal",
                                        color: "text-subtle",
                                        className: ff.GN,
                                        children: (0, f.jsx)(fp.A, {
                                            hoverText:
                                                null != l && "" !== l
                                                    ? ((t = l.replace(/^file:\/\//i, "")),
                                                      (0, e8.uF)() && (t = t.toUpperCase()),
                                                      t)
                                                    : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    T &&
                        (0, f.jsx)(aS.Y, {
                            targetElementRef: A,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, f.jsx)(mi.W, {
                                    navId: "registered-game-overflow-menu",
                                    onSelect: void 0,
                                    onClose: t,
                                    "aria-label": V.intl.string(V.t["UKOtz+"]),
                                    children: (0, f.jsxs)(ti.rX, {
                                        children: [
                                            h &&
                                                (0, f.jsx)(ti.Dr, {
                                                    id: "report",
                                                    label: V.intl.string(V.t["+78Pfm"]),
                                                    action: v,
                                                }),
                                            S &&
                                                (0, f.jsx)(ti.Dr, {
                                                    id: "remove",
                                                    label: V.intl.string(V.t.N86XcP),
                                                    color: "danger",
                                                    action: y,
                                                }),
                                        ],
                                    }),
                                });
                            },
                            children: (e, t) =>
                                (0, f.jsx)("div", {
                                    className: ic()(ff._Q, { [ff.g9]: t.isShown }),
                                    children: (0, f.jsx)(lg.m, {
                                        text: V.intl.string(V.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, f.jsx)(ld.K, {
                                            ...e,
                                            buttonRef: A,
                                            icon: me.MoreHorizontalIcon,
                                            variant: "icon-only",
                                            size: "sm",
                                            "aria-label": V.intl.string(V.t["UKOtz+"]),
                                        }),
                                    }),
                                }),
                        }),
                    (0, f.jsx)(lg.m, {
                        text: V.intl.string(V.t.QmitzM),
                        asContainer: !0,
                        ariaHidden: !0,
                        children: (0, f.jsx)(lA.I, {
                            checked: o.detectable && u,
                            disabled: !u,
                            onChange: function () {
                                null != s && s.length > 0 && d
                                    ? (0, lp.mM)(async () => {
                                          let { Modal: e } = await Promise.all([n.e(304823), n.e(223976)]).then(
                                              n.bind(n, 732955),
                                          );
                                          return (t) =>
                                              (0, f.jsx)(e, {
                                                  ...t,
                                                  title: V.intl.formatToPlainString(V.t.PZ4fKc, { platform: p }),
                                                  subtitle: V.intl.formatToPlainString(V.t.ZIQbfb, { platform: p }),
                                                  actions: [
                                                      {
                                                          text: V.intl.string(V.t["ETE/oC"]),
                                                          onClick: () => t.onClose(),
                                                          variant: "secondary",
                                                      },
                                                      {
                                                          text: V.intl.string(V.t.Fmjztz),
                                                          onClick: () => {
                                                              (pa.A.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : pa.A.toggleDetection(o);
                            },
                            "aria-label": V.intl.string(V.t.QmitzM),
                        }),
                    }),
                ],
            }),
            null != s &&
                s.length > 0 &&
                !i &&
                (0, f.jsx)("div", {
                    className: ff.AQ,
                    children: s.map((e, t) =>
                        (0, f.jsxs)(
                            x.Fragment,
                            {
                                children: [
                                    (0, f.jsx)(fI, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== s.length - 1 && (0, f.jsx)("div", { className: ff.PQ }),
                                ],
                            },
                            (0, i4.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function f_() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = SC();
    return 0 === e.length
        ? null
        : (0, f.jsx)(q.B, {
              padding: { bottom: 32 },
              children: (0, f.jsx)(n3.n, {
                  children: (0, f.jsx)("div", {
                      children: e.map((e) =>
                          (0, f.jsx)(
                              fI,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === fT.a7 ? t : void 0 },
                              (0, i4.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let fb = (0, h.E2)(S.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, f.jsx)(f_, {}),
});
var fN = n(424994);
let fC = (0, h.zZ)(S.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [fb, fS],
    useTitle: () => V.intl.string(V.t.jCOdvx),
    useSubtitle: () =>
        (0, I.bG)([i4.Ay], () => i4.Ay.getGamesSeen(!1).some((e) => !(0, SI.n1)(e)))
            ? V.intl.format(V.t.KPA3m9, { igdbLink: fN.s8 })
            : V.intl.string(V.t["1yiJwn"]),
});
var fy = n(890497),
    fv = n(853270),
    fj = n(969426);
function fO(e) {
    let { onClose: t } = e,
        n = (0, I.bG)([i4.Ay], () => i4.Ay.getCandidateGames()),
        [i, l] = x.useState(null),
        s = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, f.jsxs)(aT.l, {
        className: ic()(fv.H, fj.Y_),
        "aria-label": V.intl.string(V.t.GTCx0p),
        children: [
            (0, f.jsx)(fy.Z, {
                selectionMode: "single",
                placeholder: V.intl.string(V.t.XqMe3N),
                value: i,
                options: s,
                onSelectionChange: function (e) {
                    l(e);
                },
            }),
            (0, f.jsxs)("div", {
                className: ic()(fv.o, fx.xM),
                children: [
                    (0, f.jsx)(St.Q, { variant: "secondary", text: V.intl.string(V.t["ETE/oC"]), onClick: t }),
                    (0, f.jsx)(j.$, {
                        variant: "primary",
                        text: V.intl.string(V.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (pa.A.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var fR = n(475007),
    fD = n(221851);
function fL() {
    let e = x.useRef(null);
    return (0, f.jsxs)("div", {
        className: ic()(fR.a, fD.Gf),
        children: [
            (0, f.jsx)("span", { children: V.intl.string(V.t.xwhoqM) }),
            (0, f.jsx)(aS.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, f.jsx)(fO, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, f.jsx)(St.Q, {
                        ...t,
                        buttonRef: e,
                        variant: "primary",
                        textVariant: "body-sm/medium",
                        text: V.intl.string(V.t.GjgdXe),
                    }),
            }),
        ],
    });
}
function fP() {
    return (0, f.jsx)("div", {
        className: ic()(fx.tR, ff.eS, ff.Rw),
        children: (0, f.jsxs)("div", {
            className: ic()(ff.$K, fx.Vd),
            children: [
                (0, f.jsx)("div", { className: ff.mO, children: V.intl.string(V.t.H68X9x) }),
                (0, f.jsx)(fL, {}),
            ],
        }),
    });
}
let fG = (0, h.E2)(S.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = SC(),
                n = (0, I.bG)([i4.Ay], () => i4.Ay.getVisibleGame());
            return null == n
                ? (0, f.jsx)(fP, {})
                : (0, f.jsxs)("div", {
                      className: ic()(fx.Vd, ff.C2),
                      children: [
                          (0, f.jsx)(
                              fI,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === fT.a7 ? e : void 0,
                              },
                              (0, i4.Es)(n),
                          ),
                          (0, f.jsx)(fL, {}),
                      ],
                  });
        },
    }),
    fM = (0, h.zZ)(S.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => V.intl.string(V.t["MY9/Oe"]),
        buildLayout: () => [fG],
    }),
    fU = (0, h.t_)(S.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => V.intl.string(V.t.AVDyEj),
        buildLayout: () => [fM, fC],
    }),
    fV = (0, h.i4)(S.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.AVDyEj),
        icon: fE.GameControllerIcon,
        usePredicate: nI.Pi,
        buildLayout: () => [fU],
    });
var fk = n(176781),
    fw = n(341923),
    fF = n(419490),
    fB = n(572164),
    fX = n(489496),
    fz = n(696016),
    fH = n(683825);
let fY = (0, h.sN)(S.X.CLIPS_BITRATE, {
    useTitle: () => V.intl.string((0, fw.H)() ? fH.default.i2xEfm : V.t["8bZyov"]),
    useSubtitle: () => V.intl.string((0, fw.H)() ? fH.default.sY70pa : V.t["h8DSx/"]),
    minValue: 10,
    maxValue: 100,
    useDefaultValue: () => 75,
    getInitialValue: () => fF.Ay.getSettings().clipsQuality.bitratePercent ?? 75,
    onValueRender: (e) => `${Math.round(e)}%`,
    setValue: (e) => {
        let { clipsQuality: t } = fF.Ay.getSettings();
        fX.GS({ ...t, bitratePercent: Math.round(e) });
    },
    markers: [10, 25, 50, 75, 100],
    onMarkerRender: (e) => `${Math.round(e)}%`,
    useDisabled: () => !(0, fB.E)(),
});
var fW = n(226640);
let fK = (0, h.Hn)(S.X.CLIPS_FRAME_RATE, {
        useTitle: () => V.intl.string((0, fw.H)() ? fH.default.juVL76 : V.t["2wScL1"]),
        useSubtitle: () => V.intl.string((0, fw.H)() ? fH.default.n6Ts7o : V.t["Rf9+fy"]),
        useValue: () => (0, I.bG)([fF.Ay], () => fF.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = fF.Ay.getSettings();
            fX.GS({ ...t, frameRate: e });
        },
        useOptions: fW.Fz,
        useDisabled: () => !(0, fB.E)(),
    }),
    fZ = (0, h.E2)(S.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [],
        usePredicate: () => (0, I.bG)([fF.Ay], () => fF.Ay.getHardwareClassification()) === fz.k9.BELOW_MINIMUM,
        Component: () => (0, f.jsx)(l9.A, { look: l9.k.WARNING, children: V.intl.string(V.t.SIxrIF) }),
    }),
    fq = (0, h.Hn)(S.X.CLIPS_LENGTH, {
        useTitle: () => V.intl.string((0, fw.H)() ? fH.default.CnXTMY : V.t.OgfUio),
        useSubtitle: () => ((0, fw.H)() ? null : V.intl.string(V.t.H7j4tY)),
        useValue: () => (0, I.bG)([fF.Ay], () => fF.Ay.getSettings().clipsLength),
        setValue: (e) => fX.h$(e),
        useOptions: fW.Qu,
        useDisabled: () => !(0, fB.E)(),
    }),
    fQ = (0, h.E2)(S.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, fw.H)()
                ? (0, f.jsx)(iK.w, { type: "info", role: "none", message: V.intl.string(fH.default["1C6Gea"]) })
                : (0, f.jsx)(l9.A, { look: l9.k.INFO, children: V.intl.string(V.t["Z+MfqT"]) });
        },
    }),
    fJ = (0, h.Hn)(S.X.CLIPS_RESOLUTION, {
        useTitle: () => V.intl.string((0, fw.H)() ? fH.default["82AJHx"] : V.t.aFudZJ),
        useSubtitle: () => V.intl.string((0, fw.H)() ? fH.default["0Y9r0P"] : V.t.nIrkW5),
        useValue: () => (0, I.bG)([fF.Ay], () => fF.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = fF.Ay.getSettings();
            fX.GS({ ...t, resolution: e });
        },
        useOptions: fW.gF,
        useDisabled: () => !(0, fB.E)(),
    }),
    f$ = (0, h.zD)(S.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => V.intl.string((0, fw.H)() ? fH.default.nvHjmr : V.t["3zwNf6"]),
        useSubtitle: () => V.intl.string((0, fw.H)() ? fH.default.HzqWWF : V.t.m4Cjj9),
        useValue: () => (0, I.bG)([fF.Ay], () => fF.Ay.getSettings().remindersEnabled),
        setValue: (e) => fX.Mt(e),
        useDisabled: () => !(0, fB.E)(),
    });
n(51318);
let f0 = (0, h.zZ)(S.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => V.intl.string((0, fw.H)() ? fH.default.E6QvLy : fH.default.TGwzMe),
        buildLayout: () => [fZ, fq, fK, fJ, fY, fQ, f$],
    }),
    f1 = (0, h.zD)(S.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => ((0, fw.H)() ? V.intl.string(fH.default.Oh9NEy) : "Show clips debug tooltips"),
        useSubtitle: () =>
            (0, fw.H)()
                ? V.intl.string(fH.default.XoptI1)
                : "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, I.bG)([fF.Ay], () => fF.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => fX.YP(e),
    }),
    f2 = (0, h.zD)(S.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => ((0, fw.H)() ? V.intl.string(fH.default["Pm/g4t"]) : "Show POV clips in Gallery"),
        useSubtitle: () =>
            (0, fw.H)()
                ? V.intl.string(fH.default.aSPNgv)
                : "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, I.bG)([fF.Ay], () => fF.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => fX.Uh(e),
    }),
    f3 = (0, h.zZ)(S.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, I.bG)([sE.default], () => {
                let e = sE.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [f1, f2],
    });
var f5 = n(271597),
    f4 = n(417270),
    f6 = n(847825);
let f8 = (e) => {
        let { keycaps: t } = e,
            n = (0, I.bG)([la.Ay], () => la.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0));
        tE()(null != n, "Save clip keybind unset");
        let i = !(0, fB.E)(),
            l = (0, fw.H)(),
            s = (0, lS.Xt)(n.shortcut, (0, lS.OH)("alt+c")),
            r = x.useRef(null),
            a = x.useCallback(
                (e) => {
                    iZ.A.setKeybind({ ...n, shortcut: e });
                },
                [n],
            ),
            o = x.useCallback(() => {
                iZ.A.setKeybind({ ...n, shortcut: (0, lS.OH)("alt+c") });
            }, [n]);
        return (0, f.jsx)(lu.D, {
            label: V.intl.string(l ? fH.default["8Cx5u+"] : V.t.pf54EU),
            description: V.intl.string(l ? fH.default.sved3b : V.t["QyB/jK"]),
            layout: "horizontal-responsive",
            children: (0, f.jsx)("div", {
                className: f6.g,
                children: (0, f.jsx)(lh.A, {
                    ref: r,
                    disabled: i,
                    defaultValue: n.shortcut,
                    onChange: a,
                    keycaps: t,
                    trailingActions: (0, f.jsxs)(f.Fragment, {
                        children: [
                            (0, f.jsx)(lg.m, {
                                text: V.intl.string(fH.default.bUtubv),
                                position: "top",
                                ariaHidden: !0,
                                children: (0, f.jsx)(ld.K, {
                                    icon: iW.KeyboardIcon,
                                    size: "sm",
                                    variant: "secondary",
                                    disabled: i,
                                    "aria-label": V.intl.string(fH.default.bUtubv),
                                    onClick: (e) => {
                                        (e.stopPropagation(), r.current?.toggleRecordMode());
                                    },
                                }),
                            }),
                            (0, f.jsx)(lg.m, {
                                text: V.intl.string(fH.default.Kyk1Tp),
                                position: "top",
                                ariaHidden: !0,
                                children: (0, f.jsx)(ld.K, {
                                    icon: f4.RetryIcon,
                                    size: "sm",
                                    variant: "secondary",
                                    disabled: i || (l && s),
                                    "aria-label": V.intl.string(fH.default.Kyk1Tp),
                                    onClick: (e) => {
                                        (e.stopPropagation(), o());
                                    },
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        });
    },
    f7 = (0, h.E2)(S.X.CLIPS_KEYBIND, {
        useSearchTerms: () =>
            (0, fw.H)()
                ? [V.intl.string(fH.default["8Cx5u+"]), V.intl.string(fH.default.sved3b)]
                : [V.intl.string(V.t.pf54EU), V.intl.string(V.t["QyB/jK"])],
        usePredicate: () => (0, I.bG)([la.Ay], () => null != la.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0)),
        Component: f8,
    }),
    f9 = (0, h.E2)(S.X.CLIPS_MANUAL_KEYBIND, {
        usePredicate: () => {
            let e = (0, fw.H)(),
                t = (0, I.bG)([la.Ay], () => null != la.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0));
            return e && t;
        },
        useSearchTerms: f7.useSearchTerms,
        Component: () => (0, f.jsx)(f8, { keycaps: !0 }),
    }),
    xe = (e) => {
        let { keycaps: t } = e,
            n = (0, I.bG)([la.Ay], () => la.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0)),
            i = (0, I.bG)([la.Ay], () => la.Ay.getKeybindForAction(_.hCu.SAVE_SCREENSHOT, !0));
        (tE()(null != n, "Save clip keybind unset"), tE()(null != i, "Save screenshot keybind unset"));
        let l = x.useCallback(
            (e) => {
                iZ.A.setKeybind({ ...i, shortcut: e });
            },
            [i],
        );
        return (0, f.jsx)(lu.D, {
            label: V.intl.string(V.t["0U/hj7"]),
            description: V.intl.string(V.t["5zxkdo"]),
            layout: "horizontal",
            children: (0, f.jsx)("div", {
                className: f6.g,
                children: (0, f.jsx)(lh.A, { defaultValue: i.shortcut, onChange: l, keycaps: t }),
            }),
        });
    },
    xt = (0, h.E2)(S.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [V.intl.string(V.t["0U/hj7"]), V.intl.string(V.t["5zxkdo"])],
        usePredicate: lW.BW,
        Component: xe,
    }),
    xn = (0, h.E2)(S.X.CLIPS_MANUAL_SCREENSHOT_KEYBIND, {
        useSearchTerms: xt.useSearchTerms,
        usePredicate: () => {
            let e = (0, fw.H)(),
                t = (0, lW.BW)(),
                n = (0, I.bG)(
                    [la.Ay],
                    () =>
                        null != la.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0) &&
                        null != la.Ay.getKeybindForAction(_.hCu.SAVE_SCREENSHOT, !0),
                );
            return e && t && n;
        },
        Component: () => (0, f.jsx)(xe, { keycaps: !0 }),
    }),
    xi = (0, h.zD)(S.X.CLIPS_ENABLE, {
        useTitle: () => V.intl.string(V.t.h8rgrK),
        useSubtitle: () => V.intl.string(V.t["4Qw3NO"]),
        useValue: () => (0, fB.E)(),
        setValue: (e) => fX.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    xl = (0, h.zY)(S.X.CLIPS_GENERAL_CARD, {
        usePredicate: () => !(0, fw.H)(),
        buildLayout: () => [xi, f7, xt],
        headerSettingKey: xi.key,
    }),
    xs = (0, h.AK)(S.X.CLIPS_VOICE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(fH.default.ArBuEu),
        destinationKey: S.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING,
    }),
    xr = (0, h.gN)(S.X.CLIPS_RELATED_SETTINGS, { usePredicate: fw.H, buildLayout: () => [xs] });
var xa = n(428678),
    xo = n(650684),
    xu = n(439408),
    xd = n(464132),
    xc = n(791498);
let xg = (0, h.E2)(S.X.CLIPS_CAPTURE_MODE, {
        usePredicate: () => {
            let e = (0, lW.sw)(),
                t = (0, fw.H)();
            return e && t;
        },
        useSearchTerms: () => [
            V.intl.string(fH.default["n+Htm0"]),
            V.intl.string(fH.default["uO/2T5"]),
            V.intl.string(fH.default["2Uh8Zr"]),
            V.intl.string(fH.default.uEs0uv),
        ],
        Component: function () {
            let e,
                { value: t, onChange: n } = (0, xd.U)(),
                i = (0, xc.q)(xg);
            return (0, f.jsx)(xu.u, {
                label: V.intl.string(fH.default["n+Htm0"]),
                options:
                    ((e = (0, I.bG)([la.Ay], () =>
                        (0, lS.dI)(la.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0)?.shortcut ?? (0, lS.OH)("alt+c"), !0),
                    )),
                    [
                        {
                            value: "off",
                            title: V.intl.string(fH.default["uO/2T5"]),
                            description: V.intl.string(fH.default["l/u5Cq"]),
                            icon: xa.DenyIcon,
                        },
                        {
                            value: "manual",
                            title: V.intl.string(fH.default["2Uh8Zr"]),
                            description:
                                e.length > 0
                                    ? V.intl.formatToPlainString(fH.default["qYS+JH"], { keybind: e })
                                    : V.intl.string(fH.default.VfTZ7q),
                            icon: fk.ClipsIcon,
                        },
                        {
                            value: "auto",
                            title: V.intl.string(fH.default.uEs0uv),
                            description: V.intl.string(fH.default.MRWtw9),
                            icon: xo.ClipsAutoIcon,
                            accent: "nitro",
                        },
                    ]),
                value: t,
                onChange: (e) => {
                    (i(), n(e));
                },
            });
        },
    }),
    xm = (0, h.zZ)(S.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => V.intl.string(V.t["rWKv+e"]),
        useSubtitle: () =>
            V.intl.format((0, fw.H)() ? fH.default["6C94PY"] : fH.default["dh7g+S"], {
                learnMoreLink: eC.A.getArticleURL(_.MVz.CLIPS),
            }),
        useHeaderDecoration: () =>
            (0, fw.H)()
                ? {
                      type: p.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              type: p.UV.BUTTON,
                              id: "clips-library",
                              text: V.intl.string(fH.default["5pE8FG"]),
                              variant: "secondary",
                              onClick: () => (0, f5.p)(),
                          },
                      ],
                  }
                : void 0,
        buildLayout: () => [xg, xl, f9, xn, xr],
    }),
    xA = (0, h.E2)(S.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () =>
            (0, fw.H)()
                ? [V.intl.string(fH.default.DonDIR), V.intl.string(fH.default.qiqPrh)]
                : [V.intl.string(V.t.s4773E), V.intl.string(V.t.svjwGh)],
        Component: () => {
            let e = (0, I.bG)([fF.Ay], () => fF.Ay.getSettings().storageLocation),
                t = !(0, fB.E)() || !(0, lW.ri)(i9.Ay),
                n = (0, fw.H)(),
                i = x.useRef(!1);
            return (0, f.jsx)(lu.D, {
                label: V.intl.string(n ? fH.default.DonDIR : V.t.s4773E),
                description: V.intl.string(n ? fH.default.qiqPrh : V.t.svjwGh),
                layout: "vertical",
                children: (0, f.jsxs)(q.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, f.jsx)(lf.k, {
                            fullWidth: !0,
                            value: e,
                            editable: !1,
                            disabled: t,
                            "aria-label": V.intl.formatToPlainString(V.t.iMONTj, { storageLocation: e }),
                        }),
                        (0, f.jsx)(j.$, {
                            variant: "secondary",
                            disabled: t,
                            onClick: async function () {
                                if (!t && !i.current) {
                                    i.current = !0;
                                    try {
                                        let e = await np.A.fileManager.showOpenDialog({
                                            properties: ["openDirectory", "createDirectory"],
                                        });
                                        e.length > 0 && fX.HU(e[0]);
                                    } finally {
                                        i.current = !1;
                                    }
                                }
                            },
                            text: V.intl.string(fH.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    xE = (0, h.zZ)(S.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => V.intl.string(fH.default["0Q+pdZ"]),
        buildLayout: () => [xA],
    }),
    xh = (0, h.t_)(S.X.CLIPS_PANEL, {
        useTitle: () => V.intl.string(V.t.z2jK6X),
        usePredicate: lW.sw,
        usePersistentBadge: () =>
            (0, fw.H)() ? { badgeType: p.Xi.EARLY_ACCESS } : { badgeType: p.Xi.COUNT, count: 0 },
        buildLayout: () => [xm, f0, xE, f3],
    }),
    xS = (0, h.i4)(S.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.z2jK6X),
        icon: fk.ClipsIcon,
        buildLayout: () => [xh],
    }),
    xT = (0, h.WI)(S.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => V.intl.string(V.t.BA9200),
        buildLayout: () => [fV, Tt, xS, fA, T2],
    });
var xp = n(631670),
    xf = n(974504),
    xx = n(836602),
    xI = n(591179),
    x_ = n(702476),
    xb = n(761508),
    xN = n(159001),
    xC = n(872200),
    xy = n(919395),
    xv = n(68750);
function xj(e) {
    let { title: t, children: n } = e;
    return (0, f.jsxs)("div", {
        children: [(0, f.jsx)(N.D, { variant: "body-md/medium", className: xv.Vf, children: t }), n],
    });
}
function xO(e) {
    let {
        children: t,
        className: n,
        layoutClassName: i,
        profilePreview: l,
        profilePreviewTitle: s,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, f.jsx)("div", {
        className: ic()(xv.UA, n),
        children: (0, f.jsxs)("div", {
            className: ic()(xv.yt, i),
            children: [
                (0, f.jsx)("div", {
                    className: ic()(xv.Fp, a && xv.Oz),
                    children: (0, f.jsxs)(f.Fragment, {
                        children: [
                            (0, f.jsx)(xj, { title: s ?? V.intl.string(V.t.Zb06yP), children: l }),
                            null != r ? (0, f.jsx)(xj, { title: V.intl.string(V.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, f.jsx)("div", { className: xv.oB, children: t }),
            ],
        }),
    });
}
var xR = n(641318),
    xD = n(101058),
    xL = n(851767),
    xP = n(696451),
    xG = n(590941);
function xM() {
    return (0, f.jsxs)("div", {
        className: xG.p$,
        children: [
            (0, f.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: xG.Sl }),
            (0, f.jsx)(N.D, { className: xG.h8, variant: "heading-lg/semibold", children: V.intl.string(V.t.Z1OZCV) }),
            (0, f.jsx)(n5.E, { className: xG.h8, variant: "body-md/normal", children: V.intl.string(V.t.ZSt4Tt) }),
            (0, f.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: xG.h8,
                children: (0, f.jsx)(j.$, {
                    variant: "primary",
                    text: V.intl.string(V.t.jQ3pqt),
                    onClick: function () {
                        ((0, d9.pX)(_.BVt.GUILD_DISCOVERY), (0, tH.default)());
                    },
                }),
            }),
        ],
    });
}
var xU = n(81400),
    xV = n(450232),
    xk = n(468450),
    xw = n(355622),
    xF = n(408018),
    xB = n(989161),
    xX = n(290386),
    xz = n(941933),
    xH = n(486264);
let xY = (0, tK.Ld)(),
    xW = (0, G.createChannelRecord)({ id: "1", type: _.rbe.DM }),
    xK = (0, tK.Ld)();
function xZ(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: l,
            placeholder: s,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, xX.U)({ location: "profile_customization_about_me" }),
        [u, d] = x.useState(l ?? r),
        [c, g] = x.useState((0, xF.x7)(u)),
        m = x.useRef(r),
        A = x.useRef(!1);
    return (
        x.useEffect(() => {
            if (m.current !== r) {
                let e = (0, xF.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        x.useEffect(() => {
            void 0 !== l || u === r || A.current || (d(r), g((0, xF.x7)(r)));
        }, [l, r, u]),
        (0, f.jsxs)(ag.A, {
            title: t,
            titleId: xY,
            description: V.intl.string(V.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, f.jsx)(xB.Ay, {
                    "aria-describedby": xK,
                    "aria-labelledby": xY,
                    className: xH.i,
                    innerClassName: xH.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: s,
                    channel: xW,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: xz.y,
                    type: xw.oU.PROFILE_BIO_INPUT,
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
                (0, f.jsx)(lm.A, { id: xK, children: V.intl.format(V.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var xq = n(821956),
    xQ = n(562819),
    xJ = n(84540),
    x$ = n(467690);
function x0(e) {
    let { user: t, guild: n, className: i, sectionTitle: l, forcedDivider: s = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, ez.Ay)(),
        o = (0, xy.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, xy.CP)(n?.id),
        c = r ? gr.wL : s2.$n;
    return (0, f.jsx)(ag.A, {
        className: i,
        forcedDivider: s,
        hasBackground: !0,
        title: l,
        errors: d,
        children: (0, f.jsxs)("div", {
            className: x$.NC,
            children: [
                (0, f.jsx)(c, {
                    size: s2.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, xQ.L)({ analyticsLocations: a, guild: n });
                    },
                    className: ic()({ [x$.yj]: r }),
                    children: V.intl.string(V.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, f.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: x$.DT,
                        children: (0, f.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, xq.uZ)(t, n) ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.OrokWm),
                            onClick: function () {
                                (0, xJ.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var x1 = n(339984),
    x2 = n(942132);
let x3 = [{ name: "gif", extensions: ["gif"] }];
function x5(e) {
    let {
            showRemoveAvatarButton: t,
            errors: n,
            onAvatarChange: i,
            sectionTitle: l,
            changeAvatarButtonText: s,
            guildId: r,
            className: a,
            disabled: o = !1,
            isTryItOut: u = !1,
            forcedDivider: d,
            withHighlight: c = !1,
        } = e,
        { newestAnalyticsLocation: g } = (0, ez.Ay)(),
        m = c ? gr.wL : s2.$n,
        A = x.useCallback(() => {
            (0, xk.XD)({
                uploadType: x1.HL.AVATAR,
                analyticsSource: g,
                filters: u ? x3 : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, f.jsx)(ag.A, {
        className: a,
        title: l,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, f.jsxs)("div", {
            className: x2.NC,
            children: [
                (0, f.jsx)(m, {
                    className: ic()({ [x2.yj]: c }),
                    size: s2.$n.Sizes.SMALL,
                    onClick: A,
                    children: s ?? V.intl.string(V.t["4OynCD"]),
                }),
                t &&
                    (0, f.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: x2.DT,
                        children: (0, f.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != r ? V.intl.string(V.t.TDjKDm) : V.intl.string(V.t.twB3fz),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var x4 = n(810188);
function x6(e) {
    let { user: t, guildId: n, className: i } = e,
        l = ax.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: s } = (0, ez.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, xy.B0)(t, n),
        [d, c] = (0, m8.kn)([eE.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE]),
        g = d === eE.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        m = (0, x.useCallback)(() => {
            (c(As.i.TAKE_ACTION),
                td.default.track(_.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eH.L)({ analyticsLocations: s, guildId: n }));
        }, [s, n, c]),
        A = (0, x.useCallback)(() => {
            ((0, xJ.p)({ displayNameStyles: null }), td.default.track(_.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        E = (0, x.useCallback)(() => {
            (0, xJ.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        h = void 0 !== o ? o : null != n ? a : r;
    return (0, f.jsx)(ag.A, {
        title: V.intl.string(eY.default["86GtGH"]),
        titleBadge: g
            ? (0, f.jsx)("div", { className: x4.A, children: (0, f.jsx)(Ab.E, { type: "new", variant: "primary" }) })
            : void 0,
        className: i,
        showPremiumIcon: l,
        errors: u,
        children: (0, f.jsxs)("div", {
            className: x4.N,
            children: [
                (0, f.jsx)(j.$, { variant: "primary", size: "sm", text: V.intl.string(eY.default.vJqrIg), onClick: m }),
                null == n &&
                    null != h &&
                    (0, f.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(eY.default.ymq8WQ),
                        onClick: A,
                    }),
                null != n &&
                    null != h &&
                    (0, f.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(eY.default["j/KRxc"]),
                        onClick: E,
                    }),
            ],
        }),
    });
}
var x8 = n(637193),
    x7 = n(622410);
function x9(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: l } = (0, ez.Ay)(),
        s = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, xy.rv)(t, n?.id),
        d = x.useCallback(() => {
            (0, x8.p)({ analyticsLocations: l, guildId: n?.id });
        }, [l, n?.id]),
        c = x.useCallback(() => {
            (0, xJ.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, f.jsx)(ag.A, {
        title: V.intl.string(V.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, f.jsxs)("div", {
            className: x7.u,
            children: [
                (0, f.jsx)(j.$, { variant: "primary", size: "sm", text: V.intl.string(V.t.BwdeM1), onClick: d }),
                (void 0 === o ? (s ? a : r) != null : null != o) &&
                    (0, f.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: s ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var Ie = n(88524);
function It(e) {
    let {
            showRemoveBannerButton: t,
            errors: n,
            onBannerChange: i,
            guildId: l,
            className: s,
            disabled: r = !1,
            showPremiumIcon: a = !0,
            isTryItOut: o = !1,
            forcedDivider: u,
            withHighlight: d = !1,
        } = e,
        { newestAnalyticsLocation: c } = (0, ez.Ay)(),
        g = d ? gr.wL : s2.$n;
    return (0, f.jsx)(ag.A, {
        className: s,
        title: V.intl.string(V.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, f.jsxs)("div", {
            className: Ie.NC,
            children: [
                (0, f.jsx)(g, {
                    className: ic()({ [Ie.yj]: d }),
                    size: s2.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, xk.XD)({ uploadType: x1.HL.BANNER, analyticsSource: c, guildId: l, isTryItOut: o }),
                    children: V.intl.string(V.t.N0bC3P),
                }),
                t &&
                    (0, f.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Ie.DT,
                        children: (0, f.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != l ? V.intl.string(V.t.jHlJNS) : V.intl.string(V.t.tT9n7D),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var In = n(617061),
    Ii = n(625613);
function Il(e) {
    let {
            user: t,
            guild: n,
            initialSelectedEffect: i,
            className: l,
            sectionTitle: s,
            forcedDivider: r = !1,
            withTutorial: a = !1,
            showBorder: o = !1,
        } = e,
        { analyticsLocations: u } = (0, ez.Ay)(),
        d = ax.Ay.canUsePremiumProfileCustomization(t),
        c = (0, xy.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, xy.nZ)(n?.id);
    x.useEffect(() => {
        d &&
            (td.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tJ.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tZ.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tq.uq)(tJ.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let A = a ? gr.wL : s2.$n;
    return (0, f.jsx)(ag.A, {
        forcedDivider: r,
        borderType: d7.i.PREMIUM,
        hasBackground: !0,
        title: s,
        showBorder: o,
        errors: m,
        className: l,
        children: (0, f.jsxs)("div", {
            className: Ii.NC,
            children: [
                (0, f.jsx)(A, {
                    size: s2.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, In.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: ic()({ [Ii.yj]: a }),
                    children: V.intl.string(V.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, f.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Ii.DT,
                        children: (0, f.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.uMuafO),
                            onClick: function () {
                                (0, xJ.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Is = n(515727),
    Ir = n(594401);
function Ia(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: l } = (0, ez.Ay)(),
        s = (0, xy.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, xy.Tu)(n?.id),
        [o, u] = (0, m8.kn)([eE.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eE.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, f.jsx)(ag.A, {
        showBorder: d,
        borderType: d ? d7.i.NEW_UPSELL : d7.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d
            ? (0, f.jsx)("div", { className: Ir.Ad, children: (0, f.jsx)(Ab.E, { type: "new", variant: "primary" }) })
            : void 0,
        description: d ? V.intl.string(V.t.yMoMAt) : void 0,
        errors: a,
        children: (0, f.jsxs)("div", {
            className: Ir.NC,
            children: [
                (0, f.jsx)(j.$, {
                    variant: "primary",
                    size: "sm",
                    text: V.intl.string(V.t["9/hmle"]),
                    onClick: function () {
                        ((0, Is.w)({ analyticsLocations: l, guild: n }), u(As.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != s : null != r) &&
                    (0, f.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Ir.DT,
                        children: (0, f.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.nQBruk),
                            onClick: function () {
                                (0, xJ.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Io = n(602853),
    Iu = n(654107),
    Id = n(527212),
    Ic = n(101928),
    Ig = n(819169),
    Im = n(317097),
    IA = n(508274),
    IE = n(379012);
function Ih(e) {
    let {
            onChange: t,
            onClose: n,
            color: i,
            suggestedColors: l,
            disabled: s,
            label: r,
            colorPickerMiddle: a,
            colorPickerFooter: o,
            showEyeDropper: u,
        } = e,
        d = x.useRef(null),
        c = (0, Io.r)(n1.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = n1.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, xk.sN)(i),
        A = (0, Im.Hl)(i),
        E = A === c ? g : A,
        h = m ? n1.A.unsafe_rawColors.WHITE.css : n1.A.unsafe_rawColors.PRIMARY_530.css,
        S = (0, Ig.A)(a),
        T = (0, Ig.A)(o),
        [p, I] = x.useState((0, oO.A)());
    return (
        x.useEffect(() => {
            (S !== a || T !== o) && I((0, oO.A)());
        }, [o, a, T, S]),
        (0, f.jsx)(aS.Y, {
            targetElementRef: d,
            positionKey: p,
            renderPopout: (e) =>
                (0, f.jsx)(IA.VN, {
                    ...e,
                    value: i,
                    onChange: t,
                    suggestedColors: l,
                    middle: a,
                    footer: o,
                    showEyeDropper: u,
                }),
            onRequestClose: n,
            children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, f.jsxs)("div", {
                    ref: d,
                    className: ic()(IE.oP, { [IE.r9]: s }),
                    children: [
                        (0, f.jsx)(n4.D, {
                            ...n,
                            tabIndex: s ? -1 : 0,
                            onClick: s ? _.tEg : t,
                            style: { backgroundColor: A, borderColor: E },
                            className: IE.nf,
                            "aria-label": V.intl.string(V.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, f.jsx)(ap.PencilIcon, {
                                size: "custom",
                                className: IE.BW,
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
var IS = n(190377);
function IT(e) {
    let {
            user: t,
            pendingAvatarSrc: n,
            pendingColors: i,
            onThemeColorsChange: l,
            preventDisabled: s,
            guildId: r,
            className: a,
            showPremiumIcon: o = !0,
            showResetThemeButton: u = !1,
            forcedDivider: d,
        } = e,
        c = (0, Id.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, Ic.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        A = ax.Ay.canUsePremiumProfileCustomization(t),
        E = null != n ? n : t.getAvatarURL(r, 80),
        h = (0, Io.r)(n1.A.unsafe_rawColors.PRIMARY_530).hex(),
        S = (0, Iu.rh)(E, h, !1);
    return null == g || null == m
        ? null
        : (0, f.jsx)(ag.A, {
              title: V.intl.string(V.t.DMeO2X),
              disabled: !A && !s,
              className: ic()(IS.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, f.jsxs)("div", {
                  className: IS.hd,
                  children: [
                      (0, f.jsx)("div", {
                          className: IS.YX,
                          children: (0, f.jsx)(Ih, {
                              onChange: (e) => l([e, m]),
                              color: g,
                              suggestedColors: S,
                              showEyeDropper: !0,
                              label: (0, f.jsx)(n5.E, {
                                  className: IS.yz,
                                  color: "text-default",
                                  variant: "body-xs/normal",
                                  "aria-hidden": !0,
                                  children: V.intl.string(V.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, f.jsx)("div", {
                          className: IS.YX,
                          children: (0, f.jsx)(Ih, {
                              onChange: (e) => l([g, e]),
                              color: m,
                              suggestedColors: S,
                              showEyeDropper: !0,
                              label: (0, f.jsx)(n5.E, {
                                  className: IS.yz,
                                  color: "text-default",
                                  variant: "body-xs/normal",
                                  "aria-hidden": !0,
                                  children: V.intl.string(V.t["8elvy6"]),
                              }),
                          }),
                      }),
                      u &&
                          null != r &&
                          (0, f.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: IS.WA,
                              children: (0, f.jsx)(j.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: V.intl.string(V.t["L+GmoR"]),
                                  onClick: () => l([null, null]),
                              }),
                          }),
                  ],
              }),
          });
}
function Ip(e) {
    let {
            sectionTitle: t,
            errors: n,
            onPronounsChange: i,
            pendingPronouns: l,
            placeholder: s,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, tK.GV)();
    return (0, f.jsx)(ag.A, {
        title: t,
        titleId: o,
        errors: n,
        disabled: a,
        children: (0, f.jsx)(lf.k, {
            "aria-labelledby": o,
            placeholder: s ?? V.intl.string(V.t.NPEUUu),
            maxLength: 40,
            value: l ?? r,
            onChange: function (e) {
                i(e === r ? void 0 : e);
            },
            disabled: a,
            spellCheck: !1,
        }),
    });
}
var If = n(684732),
    Ix = n(576705),
    II = n(931175);
function I_(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: l, user: s, guild: r } = e,
        a = (0, I.bG)([Ix.A], () => Ix.A.can(_.xBc.CHANGE_NICKNAME, r) || Ix.A.can(_.xBc.MANAGE_NICKNAMES, r)),
        o = (0, TT.L)(tJ.PremiumTypes.TIER_2);
    return (0, f.jsxs)(ag.A, {
        title: V.intl.string(V.t.me1lRk),
        errors: t,
        children: [
            (0, f.jsx)(lf.k, {
                value: n ?? i ?? "",
                placeholder: l,
                maxLength: 32,
                onChange: function (e) {
                    (0, xJ.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : V.intl.string(V.t.gzjxQi),
            }),
            o && (0, f.jsx)(x6, { user: s, guildId: r.id, className: II.F }),
        ],
    });
}
var Ib = n(233454);
let IN = "/assets/b25da78aa7949feb.png";
function IC(e) {
    let { user: t, showOverlay: n, children: i } = e,
        l = (0, cx.Ay)(),
        { analyticsLocations: s } = (0, ez.Ay)(tk.A.PREMIUM_UPSELL_OVERLAY);
    return (x.useEffect(() => {
        n &&
            (td.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: s,
                type: tJ.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            }),
            (0, tZ.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, s, () =>
                (0, tq.uq)(tJ.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE),
            ));
    }, [n, s]),
    n)
        ? (0, f.jsxs)("div", {
              className: Ib.ry,
              children: [
                  (0, f.jsx)("div", { children: i }),
                  (0, f.jsxs)("div", {
                      className: Ib.Wc,
                      children: [
                          (0, f.jsx)("img", {
                              className: Ib.Tn,
                              alt: V.intl.string(V.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case _.NJ8.ASH:
                                      case _.NJ8.DARK:
                                      case _.NJ8.ONYX:
                                          return IN;
                                      case _.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return IN;
                                  }
                              })(l),
                          }),
                          (0, f.jsxs)("div", {
                              className: Ib._9,
                              children: [
                                  (0, f.jsx)(n5.E, {
                                      variant: "body-lg/semibold",
                                      color: "text-overlay-light",
                                      children: V.intl.string(V.t.dMaDFX),
                                  }),
                                  (0, f.jsx)(n5.E, {
                                      variant: "body-sm/normal",
                                      color: "text-overlay-light",
                                      children: V.intl.string(V.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, f.jsx)(d8.A, {
                              size: s2.$n.Sizes.LARGE,
                              color: s2.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: ax.Ay.isPremium(t)
                                      ? V.intl.string(V.t.AfRWI8)
                                      : V.intl.string(V.t.nkdUym),
                              },
                              subscriptionTier: tJ.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : i;
}
var Iy = n(203164);
function Iv() {
    let e = (0, I.bG)([sE.default], () => {
            let e = sE.default.getCurrentUser();
            return (tE()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, TT.L)(tJ.PremiumTypes.TIER_2),
        n = (0, I.bG)([xx.A, lv.A], () => lv.A.getGuild(xx.A.selectedGuildId));
    tE()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: l,
            pendingBanner: s,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, I.cf)([xx.A], () => ({ ...xx.A.getPendingChanges(n.id), errors: xx.A.getErrors(n.id) })),
        d = (0, xD.V7)({ userId: e.id, image: i }),
        c = (0, xU.EC)(n.id),
        g = (0, I.bG)([xP.Ay], () => (null == n.id ? null : xP.Ay.getMember(n.id, e.id))),
        m = (0, I.bG)([xL.A], () => xL.A.getGuildMemberProfile(e.id, n.id)),
        A = ax.Ay.canUsePremiumProfileCustomization(e),
        E = (0, xy.z5)(i, g?.avatar),
        h = (0, xy.Ac)(s, m?.banner),
        S = (0, If.l)(o, m?.themeColors),
        T = m?.bio ?? "",
        p = m?.pronouns ?? "";
    return (0, f.jsxs)("div", {
        className: Iy.Q,
        children: [
            (0, f.jsx)(
                I_,
                {
                    errors: u?.nick ?? c?.nick,
                    username: u2.Ay.getName(e),
                    pendingNick: l,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, f.jsx)(
                Ip,
                {
                    sectionTitle: V.intl.string(V.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, xJ.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: p,
                },
                "pronouns",
            ),
            (0, f.jsxs)(IC, {
                user: e,
                showOverlay: !A,
                children: [
                    (0, f.jsx)(
                        x5,
                        {
                            sectionTitle: (0, f.jsxs)(f.Fragment, {
                                children: [V.intl.string(V.t.lqaIxI), (0, f.jsx)(xV.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: E,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, xk.rM)(e, g?.avatar, (e) => (0, xJ.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !A,
                        },
                        "avatar",
                    ),
                    (0, f.jsx)(
                        x0,
                        {
                            sectionTitle: (0, f.jsxs)(f.Fragment, {
                                children: [V.intl.string(V.t["7v0T9P"]), (0, f.jsx)(xV.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, f.jsx)(x6, { user: e, guildId: n.id }),
                    (0, f.jsx)(
                        x9,
                        { user: e, guild: n, titleIcon: (0, f.jsx)(xV.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, f.jsx)(
                        Il,
                        {
                            sectionTitle: (0, f.jsxs)(f.Fragment, {
                                children: [V.intl.string(V.t.wR5wOo), (0, f.jsx)(xV.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, f.jsx)(
                        Ia,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, f.jsxs)(f.Fragment, {
                                children: [V.intl.string(V.t.GWrZOd), (0, f.jsx)(xV.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, f.jsx)(
                        It,
                        {
                            showRemoveBannerButton: h,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, xk.rM)(e, m?.banner, (e) => (0, xJ.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !A,
                        },
                        "banner",
                    ),
                    (0, f.jsx)(IT, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, xJ.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: S,
                    }),
                    (0, f.jsx)(
                        xZ,
                        {
                            placeholder: V.intl.string(V.t["/7NKgv"]),
                            sectionTitle: (0, f.jsxs)(f.Fragment, {
                                children: [V.intl.string(V.t.ZzAR2Y), (0, f.jsx)(xV.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, xJ.p)({ guildId: n.id, bio: e }),
                            errors: u?.bio ?? c?.bio,
                            pendingBio: r,
                            currentBio: T,
                            disabled: !A,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var Ij = n(832131);
function IO(e) {
    (0, lp.mM)(async () => {
        let { default: t } = await Promise.all([n.e(935205), n.e(843117), n.e(596202)]).then(n.bind(n, 63473));
        return (n) => (0, f.jsx)(t, { source: { ...e, page: _.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function IR(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(tk.A.USER_SETTINGS_GUILD_PROFILE),
        l = (0, I.bG)([sE.default], () => {
            let e = sE.default.getCurrentUser();
            return (tE()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        s = (0, I.bG)([xP.Ay], () => (null != t ? xP.Ay.getMember(t.id, l.id) : null)),
        r = (0, I.bG)([xL.A], () => !xL.A.isFetchingProfile(l.id, t?.id)),
        a = (0, I.bG)([tu.A], () => tu.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, I.cf)([xx.A], () => xx.A.getPendingChanges(t?.id)),
        c = (0, xD.V7)({ userId: l.id, image: o }),
        g = (0, xy.lw)({
            pendingValue: u,
            userValue: l?.collectibles?.nameplate,
            guildValue: s?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, xy.B0)(l, t?.id);
    return (x.useEffect(() => xN.IM, []), a)
        ? (0, f.jsx)(oS.A, {})
        : r
          ? (0, f.jsxs)(ez.f5, {
                value: i,
                children: [
                    (0, f.jsx)(n5.E, {
                        variant: "body-sm/normal",
                        children: V.intl.format(V.t["/PTB2E"], {
                            helpCenterLink: eC.A.getArticleURL(_.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsx)(ac.A, { guildId: t.id, onChange: n }),
                                  (0, f.jsx)(xO, {
                                      profilePreviewTitle: (0, f.jsx)(N.D, {
                                          variant: "heading-sm/medium",
                                          className: Ij.YV,
                                          children: V.intl.formatToPlainString(V.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, f.jsx)(xR.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guild: t,
                                          canUsePremiumCustomization: ax.Ay.canUsePremiumProfileCustomization(l),
                                          onUpsellClick: IO,
                                          containerClassName: Ij.ti,
                                      }),
                                      nameplatePreview: (0, f.jsx)(xC.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? Ij.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, f.jsx)(Iv, {}),
                                  }),
                              ],
                          })
                        : (0, f.jsx)(xM, {}),
                ],
            })
          : (0, f.jsx)(oj.y, {});
}
var ID = n(917445),
    IL = n(641130);
function IP(e) {
    let { children: t, notice: n } = e;
    return (0, f.jsxs)("div", { className: IL.r, children: [n, (0, f.jsx)("div", { children: t })] });
}
var IG = n(823092),
    IM = n(429811),
    IU = n(379197),
    IV = n(488430),
    Ik = n(457421),
    Iw = n(940622),
    IF = n(559474),
    IB = n(757993);
let IX = function () {
    let e,
        t,
        n,
        i,
        { analyticsLocations: l } = (0, ez.Ay)(tk.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        s = x.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, Iw.mb)(IF.RN.UPSELL_BANNER)),
        (t = (0, Iw.mb)(IF.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, I.bG)([Ik.A], () => Ik.A.getMarketingBySurface(IU.R.EDIT_PROFILE_SETTINGS))),
        (i = x.useMemo(
            () =>
                null != n
                    ? n
                    : {
                          asset: "/assets/30e2c68819facd98.png",
                          popoutAsset: "/assets/c6d55507d7473057.png",
                          title: V.intl.string(V.t.QZVVBh),
                          body: V.intl.string(V.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [n],
        )),
        x.useMemo(
            () => ({ ...i, type: IV.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, IG.L_)();
    return (
        x.useEffect(() => {
            (td.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tJ.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: l,
                version: d,
            }),
                (0, tZ.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, l, () =>
                    (0, tq.uq)(tJ.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
                ));
        }, [l, d]),
        (0, f.jsxs)("div", {
            ref: s,
            className: IB.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, f.jsx)("div", {
                    className: IB.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, f.jsx)("img", { src: a, className: IB.Qw, alt: "" }),
                }),
                (0, f.jsxs)("div", {
                    className: IB.Em,
                    children: [
                        (0, f.jsx)(N.D, {
                            variant: "heading-lg/semibold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: IB.DD,
                            children: o,
                        }),
                        (0, f.jsx)(n5.E, {
                            variant: "body-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, f.jsx)(j.$, {
                    onClick: function () {
                        g(() =>
                            (0, IM.Cz)({
                                analyticsLocations: l,
                                analyticsSource: tk.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                            }),
                        );
                    },
                    variant: "overlay-primary",
                    text: V.intl.string(V.t.fYfGgK),
                }),
            ],
        })
    );
};
var Iz = n(451909),
    IH = n(202639),
    IY = n(521440),
    IW = n(536015),
    IK = n(423814),
    IZ = n(77528),
    Iq = n(590180),
    IQ = n(898461),
    IJ = n(469054),
    I$ = n(601298),
    I0 = n(207803),
    I1 = n(461797);
let I2 = Object.keys(I1.jB);
function I3(e) {
    let t = null == e ? I2 : I2.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var I5 = n(201805),
    I4 = n(221650);
function I6(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion),
        l = (0, I5.Xf)({ useReducedMotion: i }),
        { name: s, header: r } = x.useMemo(() => {
            let e = (0, I1.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, f.jsxs)("div", {
        className: I4.kL,
        children: [
            (0, f.jsx)(n4.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                className: I4.x6,
                "aria-label": V.intl.string(V.t["44yJxh"]),
                children: l.render(),
            }),
            (0, f.jsxs)(n4.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                "aria-label": `${s}: ${V.intl.string(V.t["44yJxh"])}`,
                className: I4.Lt,
                children: [
                    (0, f.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: I4.L_ }),
                    (0, f.jsx)(n5.E, {
                        className: I4._e,
                        variant: "body-sm/semibold",
                        color: "text-overlay-light",
                        children: s,
                    }),
                ],
            }),
        ],
    });
}
var I8 = n(511484),
    I7 = n(811611),
    I9 = n(206697),
    _e = n(729934);
function _t(e, t) {
    let n = _e.A.useField("scrollPosition"),
        i = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion);
    (0, x.useEffect)(() => {
        let l = e.current;
        if (null == l || n !== t) return;
        let s = requestAnimationFrame(() => {
            (l.scrollIntoView({ behavior: i ? "auto" : "smooth" }), _e.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(s);
    }, [e, t, n, i]);
}
var _n = n(844222),
    _i = n(842092);
let _l = "/assets/d4955aabdcb5bdee.png",
    _s = { assetOrigin: IJ.E.NEW_ASSET, imageUri: _l, staticImageUri: _l, description: "", originalAsset: void 0 };
function _r(e) {
    let { user: t } = e,
        { reducedMotion: n } = x.useContext(_n.C),
        {
            pendingAvatar: i,
            pendingBanner: l,
            pendingAvatarDecoration: s,
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
        } = (0, I.cf)([xx.A], () => {
            let e = xx.A.getPendingChanges(),
                t = xx.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        h = (0, xD.V7)({ userId: t.id, image: g ?? i });
    return (0, f.jsx)(xR.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? l ?? _s,
        pendingDisplayNameStyles: E ?? a,
        pendingAvatar: h,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== A ? A : s,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : _i.WX,
        containerClassName: _i.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var _a = n(829497);
function _o(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        l = ax.Ay.isPremium(t),
        s = ax.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, I.cf)([xx.A], () => {
            let e = xx.A.getPendingChanges(),
                t = xx.A.getErrors(),
                n = xx.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, x.useState)(I3()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: l,
                    displayNameStyles: s,
                } = (0, x.useMemo)(() => {
                    let t = (0, I1.Wt)(e);
                    return {
                        banner: (0, I$.X)({
                            assetOrigin: IJ.E.NEW_ASSET,
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
                r = (0, I.bG)([Iq.A], () => {
                    let e = Iq.A.getProduct(l);
                    return (0, IQ.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, x.useEffect)(() => {
                (0, I0.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: s });
            }, [n, i, r, s]);
            let a = (0, x.useCallback)(() => {
                let n = I3(e);
                (t(n), td.default.track(_.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = x.useRef(null);
    _t(m, eR._F.TRY_IT_OUT);
    let { analyticsLocations: A, sourceAnalyticsLocations: E } = (0, ez.Ay)(tk.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function h(e) {
        e && ((0, I9.T)(), td.default.track(_.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    x.useEffect(() => {
        n &&
            (td.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tJ.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: _.liQ.USER_SETTINGS },
                location_stack: E,
            }),
            (0, tZ.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, E, () => (0, tq.uq)(tJ.e.PREMIUM_PROFILE_TRY_IT_OUT)));
    }, [E, t, n]);
    let S = (0, IZ.V)()?.subscriptionTrial?.skuId === tJ.pe.TIER_2,
        T = (0, IK.O)(),
        p = (0, I8.U9)(T, tJ.pe.TIER_2);
    return i
        ? (0, f.jsx)(ez.f5, {
              value: A,
              children: (0, f.jsxs)(d7.A, {
                  ref: m,
                  className: _a.MT,
                  type: d7.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, f.jsx)(xO, {
                          stickyPreview: !1,
                          layoutClassName: _a.th,
                          profilePreviewTitle: (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsx)(au.NitroWheelIcon, {
                                      size: "md",
                                      color: "currentColor",
                                      className: _a.PC,
                                  }),
                                  V.intl.string(V.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, f.jsxs)(f.Fragment, {
                              children: [(0, f.jsx)(I6, { preset: c, onShuffle: g }), (0, f.jsx)(_r, { user: t })],
                          }),
                          children: (0, f.jsxs)("div", {
                              children: [
                                  (0, f.jsxs)("div", {
                                      children: [
                                          (0, f.jsx)(N.D, {
                                              variant: "heading-xl/semibold",
                                              children: V.intl.string(V.t["2zGdAW"]),
                                          }),
                                          (0, f.jsx)(n5.E, {
                                              className: _a.h_,
                                              variant: "body-sm/normal",
                                              children: V.intl.string(V.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, f.jsx)(IT, {
                                      className: _a.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, xD.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: I0.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, f.jsx)(It, {
                                      className: _a.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: I0.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !s &&
                                      (0, f.jsx)(x5, {
                                          className: _a.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: I0.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: V.intl.string(V.t["7z0D1c"]),
                                          sectionTitle: V.intl.string(V.t.vtFfPX),
                                      }),
                                  (0, f.jsx)(x6, { user: t, className: _a.fz }),
                                  !S &&
                                      (0, f.jsx)(n5.E, {
                                          variant: "body-sm/normal",
                                          children: V.intl.string(V.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !S &&
                          (0, f.jsx)(IH.d, {
                              onSubscribeModalClose: h,
                              className: _a.Kv,
                              showUpsell: !0,
                              text: V.intl.format(V.t.TmfgI2, {
                                  onClick: () => {
                                      (0, IW.K)({ onSubscribeFinish: h });
                                  },
                              }),
                              button: l
                                  ? V.intl.string(V.t.AfRWI8)
                                  : p
                                    ? V.intl.formatToPlainString(V.t.bkQ4bH, { percent: T?.discount.amount })
                                    : V.intl.string(V.t.pj0XBN),
                              position: "inline",
                          }),
                      S &&
                          (0, f.jsxs)("div", {
                              children: [
                                  (0, f.jsx)("div", { className: _a.BU }),
                                  (0, f.jsx)(I7.Ay, {
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
var _u = n(814390),
    _d = n(643056),
    _c = n(843282),
    _g = n(145497),
    _m = n(685073),
    _A = n(534400),
    _E = n(581781),
    _h = n(743981),
    _S = n(195801);
let _T = (0, tK.Ld)(),
    _p = x.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            l = (0, I.cf)([sE.default], () => (0, _m.Zo)(sE.default.getCurrentUser()?.primaryGuild)),
            s = void 0 !== n ? n : (l.guildId ?? null),
            r = x.useMemo(() => {
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
                let { guildId: n, tag: i, badge: r } = l;
                return (
                    null == n ||
                        null == i ||
                        n !== s ||
                        e.has(n) ||
                        e.set(n, { id: n, name: V.intl.string(V.t.dtwqPR), icon: null, tag: i, badge: r }),
                    e
                );
            }, [t, l, s]),
            a = x.useMemo(() => Array.from(r.values(), (e) => ({ label: e.name, value: e.id })), [r]),
            o = x.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, f.jsx)(_E.A, {
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
            u = x.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, f.jsx)(_g.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [r],
            ),
            d = x.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, f.jsx)(_A.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: _h.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "body-sm/semibold",
                          });
                },
                [r],
            ),
            c = x.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, f.jsx)(f.Fragment, { children: o(t) });
                },
                [o],
            ),
            g = x.useCallback(
                (e) => {
                    i?.(e);
                },
                [i],
            ),
            m = x.useCallback((e) => e === s, [s]),
            A = x.useCallback((e) => e, []),
            E = x.useCallback(() => {
                i?.(null);
            }, [i]),
            h = x.useRef(null);
        return (
            _t(h, eR._F.GUILD_TAG),
            (0, f.jsxs)(ag.A, {
                title: V.intl.string(V.t.Pdd1nd),
                titleId: _T,
                ref: h,
                children: [
                    (0, f.jsx)(n5.E, {
                        className: _S.VA,
                        variant: "body-sm/normal",
                        children: V.intl.string(V.t.mlZ6Jx),
                    }),
                    (0, f.jsx)(_c.Pw, {
                        className: _S.Lt,
                        optionClassName: _S.S0,
                        isSelected: m,
                        options: a,
                        select: g,
                        renderLeading: u,
                        renderTrailing: d,
                        renderOptionValue: c,
                        serialize: A,
                        clear: E,
                        clearable: null != s,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
var _f = n(318785),
    _x = n(470739);
let _I = function () {
    return (0, _d.d)({ location: "UserSettingsProfileCustomization" })
        ? (0, f.jsx)(ag.A, {
              title: V.intl.string(V.t.l6w3Vj),
              description: V.intl.string(V.t.joHqdj),
              children: (0, f.jsx)(j.$, {
                  text: V.intl.string(V.t.wRraFx),
                  onClick: () => {
                      (0, _x.openBadgeDirectoryModal)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var __ = n(953726);
let _b = (0, tK.Ld)();
function _N(e) {
    let t = (0, TT.L)(tJ.PremiumTypes.TIER_2);
    return (0, f.jsxs)(ag.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: V.intl.string(V.t["9AjdkD"]),
        titleId: _b,
        children: [
            (0, f.jsx)("div", {
                children: (0, f.jsx)(lf.k, {
                    "aria-labelledby": _b,
                    placeholder: e.placeholder,
                    maxLength: 32,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, f.jsx)(x6, { user: e.user, className: __.F }),
        ],
    });
}
var _C = n(376626);
function _y(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = U.m$.useSetting(),
        l = void 0 !== n ? n : i;
    return (0, f.jsx)("div", {
        className: _C.u,
        children: (0, f.jsx)(t4.d, {
            label: V.intl.string(V.t["3cWDuO"]),
            description: l ? null : V.intl.formatToPlainString(V.t.aYhclf, { username: t }),
            checked: !l,
            onChange: (e) => {
                !e === i ? (0, xp._e)() : (0, xJ.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function _v(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: l } = e,
        s = t.getAvatarURL(null, 80),
        r = (0, Io.r)(n1.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, Iu.rh)(s, r, !1),
        o = (0, Im.LX)(a[0]);
    return (0, f.jsx)(ag.A, {
        title: V.intl.string(V.t["/X3fkf"]),
        children: (0, f.jsx)(Ih, { onChange: (e) => l(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var _j = n(518477);
let _O = function () {
    let e = (0, I.bG)([cc.default], () => cc.default.getId());
    return (0, f.jsx)(ag.A, {
        title: V.intl.string(V.t.Jzj9q4),
        children: (0, f.jsx)(j.$, {
            text: V.intl.string(V.t.Geikwq),
            onClick: () => {
                (0, x_.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tk.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: _j.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var _R = n(654910);
function _D() {
    let e = (0, I.bG)([sE.default], () => {
            let e = sE.default.getCurrentUser();
            return (tE()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, I.bG)([xL.A], () => xL.A.getUserProfile(e.id)),
        n = (0, _d.d)({ location: "DefaultCustomizationSections" }),
        {
            pendingAvatar: i,
            pendingGlobalName: l,
            pendingBanner: s,
            pendingBio: r,
            pendingPronouns: a,
            pendingAccentColor: o,
            pendingThemeColors: u,
            pendingLegacyUsernameDisabled: d,
            pendingPrimaryGuildId: c,
            errors: g,
        } = (0, I.cf)([xx.A], () => {
            let e = xx.A.getPendingChanges(),
                t = xx.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, xD.V7)({ userId: e.id, image: i }),
        A = (0, xU.EC)(),
        E = ax.Ay.canUsePremiumProfileCustomization(e),
        h = (0, xy.z5)(i, e.avatar),
        S = (0, xy.Ac)(s, t?.banner),
        T = (0, Id.Ay)(e.id),
        p = T?.getLegacyUsername(),
        x = (g.global_name?.length ?? 0) > 0 ? g.global_name : (A?.nick ?? []),
        _ = (g.bio?.length ?? 0) > 0 ? g.bio : (A?.bio ?? []),
        b = (0, _f.b)(),
        N = null != (0, _m.Zo)(e.primaryGuild).guildId;
    return (0, f.jsxs)("div", {
        className: _R.Q,
        children: [
            (0, f.jsx)(_N, {
                placeholder: e.username,
                errors: x,
                currentGlobalName: e.globalName,
                pendingGlobalName: l,
                onGlobalNameChange: (e) => (0, xJ.p)({ globalName: e }),
                user: e,
            }),
            (0, f.jsx)(
                Ip,
                {
                    sectionTitle: V.intl.string(V.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, xJ.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, f.jsx)(_O, {}),
            (0, f.jsx)(
                x5,
                {
                    onAvatarChange: (e) => {
                        ((0, xJ.p)({ avatar: e }), (0, xy.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: h,
                    errors: g.avatar,
                    sectionTitle: V.intl.string(V.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, f.jsx)(x0, { user: e, sectionTitle: V.intl.string(V.t["7v0T9P"]) }, "decoration"),
            (0, f.jsx)(x9, { user: e }),
            (0, f.jsx)(Il, { user: e, sectionTitle: V.intl.string(V.t.wR5wOo) }, "effect"),
            (0, f.jsx)(Ia, { user: e, sectionTitle: V.intl.string(V.t.GWrZOd) }, "frame"),
            E
                ? (0, f.jsxs)(f.Fragment, {
                      children: [
                          (0, f.jsx)(
                              It,
                              {
                                  showRemoveBannerButton: S,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, xJ.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, f.jsx)(IT, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, xJ.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, f.jsx)(
                      _v,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, xJ.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, f.jsx)(
                xZ,
                {
                    sectionTitle: V.intl.string(V.t.ZzAR2Y),
                    errors: _,
                    onBioChange: (e) => (0, xJ.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (b.length > 0 || N) &&
                (0, f.jsx)(_p, {
                    availablePrimaryGuilds: b,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, xJ.p)({ primaryGuildId: e }),
                }),
            null != p &&
                !n &&
                (0, f.jsx)(_y, { legacyUsername: p, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, f.jsx)(_I, {}, "badges"),
        ],
    });
}
function _L() {
    (0, lp.mM)(async () => {
        let { default: e } = await Promise.all([n.e(935205), n.e(843117), n.e(113210)]).then(n.bind(n, 192641));
        return (t) =>
            (0, f.jsx)(e, {
                ...t,
                source: {
                    page: _.liQ.USER_SETTINGS,
                    section: _.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                    object: _.ZSU.BUTTON_CTA,
                    type: _.btD.BUY,
                },
            });
    });
}
var _P = n(447080);
function _G() {
    let e = (0, I.bG)([sE.default], () => {
            let e = sE.default.getCurrentUser();
            return (tE()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e);
        }),
        t = (0, I.bG)([tu.A], () => tu.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: l,
            showNotice: s,
            ...r
        } = (0, I.cf)([xx.A], () => ({ ...xx.A.getPendingChanges(), showNotice: xx.A.showNotice() })),
        a = (0, xD.V7)({ userId: e.id, image: i }),
        o = (0, xy.lw)({ pendingValue: l, userValue: e?.collectibles?.nameplate }),
        u = (0, _u.A)() && null != n ? Iz.Ay.parse(void 0, n).content : n,
        d = ax.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, ez.Ay)(tk.A.USER_SETTINGS_USER_PROFILE);
    x.useEffect(() => xp.IM, []);
    let [g, m] = x.useState(!1),
        A = !d,
        E = x.useRef(null);
    return t
        ? (0, f.jsx)(oS.A, {})
        : (0, f.jsxs)(ez.f5, {
              value: c,
              children: [
                  (0, f.jsx)(IX, {}),
                  (0, f.jsx)(xO, {
                      profilePreview: (0, f.jsx)(xR.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: _L,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: _P.ti,
                      }),
                      nameplatePreview: (0, f.jsx)(xC.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? _P.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, f.jsx)(_D, {}),
                  }),
                  (0, f.jsx)(c$.L, {
                      innerRef: E,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: A,
                      children: (0, f.jsx)("div", {
                          ref: E,
                          children: (0, f.jsx)(_o, { user: e, shouldShow: A, isVisible: g }),
                      }),
                  }),
                  A &&
                      !s &&
                      (0, f.jsx)(IH.d, {
                          className: _P.EL,
                          showUpsell: !g,
                          text: V.intl.format(V.t.TmfgI2, { onClick: () => (0, IW.K)({}) }),
                          textVariant: "heading-sm/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, f.jsx)(IY.l, {
                              size: "md",
                              location: tk.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, f.jsx)("div", {
                              className: _P.Xl,
                              children: (0, f.jsx)(j.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      (td.default.track(_.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          E?.current?.scrollIntoView({ behavior: "smooth" }));
                                  },
                                  text: V.intl.string(V.t.uw9zI7),
                                  icon: au.NitroWheelIcon,
                              }),
                          }),
                      }),
              ],
          });
}
var _M = n(188567);
n(46121);
var _U = n(944983);
let _V = { [eR.Eq.USER_PROFILE]: "main_profile_tab", [eR.Eq.GUILD]: "guild_profile_tab" },
    _k = (0, h.E2)(S.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, I.bG)([lj.A, g4.Ay, xx.A], () => {
                    let e = xx.A.selectedGuildId ?? lj.A.getGuildId();
                    return null == e || xx._.has(e) ? g4.Ay.getFlattenedGuildIds().find((e) => !xx._.has(e)) : e;
                }),
                t = (0, I.bG)([lv.A], () => lv.A.getGuild(e)),
                n = (0, I.bG)([xx.A], () => xx.A.showNotice()),
                i = (0, I.bG)([sE.default], () => sE.default.getCurrentUser()),
                l = _e.A.useField("subsection");
            return (
                x.useEffect(() => {
                    (0, it._)(_V[l]);
                }, [l]),
                x.useEffect(() => {
                    null != i && t?.id != null && (0, ID.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, f.jsx)(IP, {
                    children: (0, f.jsxs)(uV.F, {
                        component: (0, f.jsx)(lm.A, {
                            children: (0, f.jsx)(N.D, {
                                variant: "heading-xl/medium",
                                children: V.intl.string(V.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, f.jsxs)(xb.V, {
                                className: _U.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: l,
                                onItemSelect: function (e) {
                                    if (l !== e) {
                                        if (n) {
                                            ((0, ii.fO)({ duration: 300, intensity: 1.4 }),
                                                _M._.dispatch(_.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eR.Eq.GUILD && null != t && (0, xN.V2)(t.id),
                                            _e.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, f.jsx)(
                                        xb.V.Item,
                                        {
                                            className: _U.YU,
                                            id: eR.Eq.USER_PROFILE,
                                            children: V.intl.string(V.t["2p07FR"]),
                                        },
                                        eR.Eq.USER_PROFILE,
                                    ),
                                    (0, f.jsx)(
                                        xb.V.Item,
                                        {
                                            className: ic()(_U.YU, _U.HY),
                                            "aria-label": V.intl.string(V.t.kPHroX),
                                            id: eR.Eq.GUILD,
                                            children: V.intl.string(V.t.kPHroX),
                                        },
                                        eR.Eq.GUILD,
                                    ),
                                ],
                            }),
                            l === eR.Eq.GUILD
                                ? (0, f.jsx)(IR, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, ii.fO)({ duration: 300, intensity: 1.4 }),
                                                  _M._.dispatch(_.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, xN.JJ)(e.id);
                                      },
                                  })
                                : (0, f.jsx)(_G, {}),
                        ],
                    }),
                })
            );
        },
        useSearchTerms: () => [
            V.intl.string(V.t["vi7f+q"]),
            V.intl.string(V.t.Ip9nBS),
            V.intl.string(V.t["2p07FR"]),
            V.intl.string(V.t["7vhiqk"]),
            V.intl.string(V.t.kPHroX),
            V.intl.string(V.t.lqaIxI),
            V.intl.string(V.t.Vgdusv),
            V.intl.string(V.t.DMeO2X),
        ],
    }),
    _w = (0, h.zZ)(S.X.PROFILE_CATEGORY, { buildLayout: () => [_k] });
var _F = n(379633);
function _B() {
    let e = (0, I.bG)([sE.default], () => sE.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, ga.A)({ userId: e?.id, size: v._3.SIZE_48 });
    return null == e
        ? null
        : (0, f.jsxs)("div", {
              className: _F.a5,
              children: [
                  (0, f.jsx)(y.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: v._3.SIZE_48,
                      "aria-label": V.intl.string(V.t.lqaIxI),
                  }),
                  (0, f.jsxs)("div", {
                      className: _F.FS,
                      children: [
                          (0, f.jsx)(n5.E, {
                              color: "text-strong",
                              variant: "body-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, f.jsxs)("div", {
                              className: _F.Fk,
                              children: [
                                  (0, f.jsx)(n5.E, {
                                      variant: "body-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: V.intl.string(V.t.Ip9nBS),
                                  }),
                                  (0, f.jsx)(ap.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let _X = (0, h.t_)(S.X.PROFILE_PANEL, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        notice: { stores: [xx.A], element: xf.A },
        initialize: () => xp.F7,
        buildLayout: () => [_w],
    }),
    _z = (0, h.i4)(S.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        icon: _Y,
        StronglyDiscouragedCustomComponent: _B,
        usePredicate: () => !(0, xI.X)("user_settings_sidebar"),
        buildLayout: () => [_X],
    }),
    _H = (0, h.i4)(S.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        icon: _Y,
        StronglyDiscouragedCustomComponent: _B,
        usePredicate: () => (0, xI.X)("user_settings_sidebar"),
        onClick: () => {
            let e = cc.default.getId();
            (0, x_.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function _Y() {
    let e = (0, I.bG)([sE.default], () => sE.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, ga.A)({ userId: e?.id, size: v._3.SIZE_48 });
    return (0, f.jsx)(y.eu, { src: t, avatarDecoration: n, size: v._3.SIZE_20, "aria-hidden": !0 });
}
let _W = (0, h.WI)(S.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [_z, _H] });
var _K = n(98207);
n(204925);
let _Z = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, lp.mM)(
        async () => {
            let { default: t } = await Promise.all([n.e(213042), n.e(319623), n.e(121007)]).then(n.bind(n, 110744));
            return (n) => (0, f.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? u$.tE : null, onCloseCallback: t },
    );
};
var _q = n(940856),
    _Q = n(506775),
    _J = n(121780),
    _$ = n(871309),
    _0 = n(961943);
function _1() {
    let e = _J.A.getCountryCode(),
        t = null != e ? _0.q5[e.alpha2] : void 0;
    _$.A.openUrl(eC.A.getArticleURL(t ?? _0.GF));
}
var _2 = n(484051);
function _3() {
    return (0, _2.a)(_0.LI);
}
var _5 = n(124616);
function _4() {
    let e = _3(),
        t = (0, _Q.ZP)();
    if (!e) return null;
    switch (t) {
        case _Q.M$.ADULT:
            return V.intl.format(_5.default.gi4ulu, { handleOnAgeGatedContentHook: _Q.M0 });
        case _Q.M$.TEEN:
            return V.intl.format(_5.default["221iML"], {
                handleOnAgeGatedContentHook: _Q.M0,
                handleOnConfirmAgeHook: _Q.aP,
            });
        case _Q.M$.UNVERIFIED:
            return V.intl.format(_5.default["W0/7DD"], {
                handleOnAgeGatedContentHook: _1,
                handleOnConfirmAgeHook: _Q.aP,
            });
    }
}
var _6 = n(26137),
    _8 = n(957485);
function _7() {
    let e = _3(),
        t = (0, _Q.ZP)();
    return e
        ? {
              icon: t === _Q.M$.ADULT ? _6.UserCircleIcon : _8.ShieldUserIcon,
              backgroundColor: n1.A.colors.BACKGROUND_MOD_SUBTLE,
          }
        : null;
}
function _9() {
    let e = _7();
    return null != e ? { type: p.hp.ICON, ...e } : null;
}
function be() {
    return _3() ? V.intl.string(V.t.piqs0o) : null;
}
var bt = n(160808);
let bn = [{ badgeType: p.Xi.NEW, dismissibleContent: eE.M.TINY_BRONCO_SETTINGS }],
    bi = [];
function bl() {
    return (0, bt.Wt)() ? bn : bi;
}
var bs = n(36149),
    br = n(207560),
    ba = (((m = {}).LEGACY = "legacy"), (m.AGE_NOTICE = "ageNotice"), m),
    bo = (((A = {}).VERIFY = "verify"), (A.EDIT = "edit"), (A.INFO = "info"), A);
function bu(e, t) {
    let n = (0, I.bG)([sE.default], () => null != sE.default.getCurrentUser()),
        i = (0, br.fk)(),
        l = (0, _Q.ZP)(),
        s = (0, bs.Y2)(),
        r = _3();
    if (!n || (!i && !r) || t !== (r ? "ageNotice" : "legacy")) return !1;
    switch (l) {
        case _Q.M$.UNVERIFIED:
            return "verify" === e;
        case _Q.M$.TEEN:
            return e === (r ? "info" : "verify");
        case _Q.M$.ADULT:
            return e === (s ? "edit" : "info");
    }
}
var bd = n(664188);
function bc() {
    let e = (0, _Q.hD)();
    return (0, f.jsxs)(n5.E, {
        variant: "body-md/medium",
        children: [`${e} \u{2022} `, V.intl.format(bd.default.WM5adV, { handleOnHelpUrlHook: _Q.M0 })],
    });
}
let bg = {
        useTitle: () => be() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: _4,
        useVariant: () => "secondary",
        useLeadingDecoration: _9,
        getDismissibleBadges: bl,
        useTrailingDecoration: () => ({
            type: p.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: bc,
        }),
        useLabel: () => V.intl.string(V.t.bt75uw),
        onClick: function () {
            (0, lp.mM)(async () => {
                let { default: e } = await n.e(145361).then(n.bind(n, 151080));
                return (t) => (0, f.jsx)(e, { ...t });
            });
        },
    },
    bm = (0, h.Tf)(S.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...bg, usePredicate: () => bu(bo.EDIT, ba.LEGACY) }),
    bA = (0, h.Tf)(S.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...bg,
        usePredicate: () => bu(bo.EDIT, ba.AGE_NOTICE),
        useAriaLabel: () => V.intl.string(V.t.pBMSie),
    }),
    bE = {
        useTitle: () => be() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: _4,
        useLeadingDecoration: function () {
            let e = _7();
            return null != e ? { type: p.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: bl,
        useTrailingDecoration: () => ({ type: p.Ln.TEXT, text: (0, _Q.hD)() }),
    },
    bh = (0, h.v_)(S.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...bE, usePredicate: () => bu(bo.INFO, ba.LEGACY) }),
    bS = (0, h.v_)(S.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...bE,
        usePredicate: () => bu(bo.INFO, ba.AGE_NOTICE),
    }),
    bT = {
        useTitle: () => be() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: _4,
        useVariant: () => "secondary",
        useLeadingDecoration: _9,
        getDismissibleBadges: bl,
        useTrailingDecoration: () => ({ type: p.fq.TEXT, text: (0, _Q.hD)() }),
        useLabel: function () {
            return (0, bs.yM)() ? V.intl.string(V.t["9KiIz6"]) : V.intl.string(V.t.DVywUB);
        },
        onClick: _Q.aP,
    },
    bp = (0, h.Tf)(S.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...bT, usePredicate: () => bu(bo.VERIFY, ba.LEGACY) }),
    bf = (0, h.Tf)(S.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...bT,
        usePredicate: () => bu(bo.VERIFY, ba.AGE_NOTICE),
    }),
    bx = [bp, bm, bh],
    bI = [bf, bA, bS],
    b_ = (0, h.Tf)(S.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, I.bG)([sE.default], () => sE.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => V.intl.string(V.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: p.fq.TEXT, text: V.intl.string(V.t.qxk9zo) }),
        useLabel: () => V.intl.string(V.t.BleMPB),
        onClick: () => _Z(),
    });
function bb(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function bN(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function bC(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: l } = e,
        [s, r] = x.useState(!1),
        a = s ? t : n(t);
    return (0, f.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, f.jsx)(n5.E, { variant: "body-md/medium", children: a }),
            (0, f.jsx)(St.Q, {
                variant: "primary",
                textVariant: "body-md/medium",
                "aria-label": s ? l : i,
                onClick: () => r(!s),
                text: s ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.dcztdU),
            }),
        ],
    });
}
function by() {
    let e = (0, I.bG)([sE.default], () => sE.default.getCurrentUser()?.email);
    return null == e
        ? (0, f.jsx)(n5.E, { variant: "body-md/medium", children: V.intl.string(V.t["8SfTN/"]) })
        : (0, f.jsx)(bC, {
              text: e,
              censor: bN,
              revealLabel: V.intl.string(V.t["Zvx+yV"]),
              hideLabel: V.intl.string(V.t.nqTD4d),
          });
}
let bv = (0, h.Tf)(S.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, I.bG)([sE.default], () => sE.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => V.intl.string(V.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: p.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: by }),
    useLabel: function () {
        return null == (0, I.bG)([sE.default], () => sE.default.getCurrentUser()?.email)
            ? V.intl.string(V.t.OYkgVk)
            : V.intl.string(V.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, I.bG)([sE.default], () => sE.default.getCurrentUser()?.email)
            ? V.intl.string(V.t["pvBD+W"])
            : V.intl.string(V.t["8peUT0"]);
    },
    onClick: function () {
        (0, lp.mM)(async () => {
            let { default: e } = await Promise.all([n.e(279385), n.e(420577), n.e(553207)]).then(n.bind(n, 162282));
            return (t) => (0, f.jsx)(e, { ...t });
        });
    },
});
var bj = n(557722),
    bO = n(53516);
function bR() {
    let e = (0, I.bG)([sE.default], () => sE.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, f.jsx)(n5.E, { variant: "body-md/medium", children: V.intl.string(V.t.I5kDqj) })
        : (0, f.jsx)(q.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, f.jsx)(bC, {
                  text: t,
                  censor: bb,
                  revealLabel: V.intl.string(V.t.eY3xlT),
                  hideLabel: V.intl.string(V.t["jllbv+"]),
              }),
          });
}
let bD = (0, h.Tf)(S.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, I.bG)([sE.default], () => sE.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => V.intl.string(V.t.kerONq),
    useAriaLabel: function () {
        return null == (0, I.bG)([sE.default], () => sE.default.getCurrentUser()?.phone)
            ? V.intl.string(V.t["SfUuE+"])
            : V.intl.string(V.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: p.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: bR }),
    useLabel: function () {
        return null == (0, I.bG)([sE.default], () => sE.default.getCurrentUser()?.phone)
            ? V.intl.string(V.t.OYkgVk)
            : V.intl.string(V.t.bt75uw);
    },
    onClick: function () {
        null == sE.default.getCurrentUser()?.phone
            ? (0, lp.mM)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e(590275),
                          n.e(766806),
                          n.e(989545),
                          n.e(757786),
                          n.e(84704),
                          n.e(286197),
                      ]).then(n.bind(n, 615715));
                      return (t) => (0, f.jsx)(e, { reason: bj.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: bO.V },
              )
            : (0, lp.mM)(async () => {
                  let { default: e } = await Promise.all([n.e(911837), n.e(840933)]).then(n.bind(n, 660740));
                  return (t) => (0, f.jsx)(e, { ...t });
              });
    },
});
function bL() {
    let e = (0, I.bG)([sE.default], () => sE.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function bP() {
    let e = (0, xU.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, I.bG)([sE.default], () => sE.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsx)(n5.E, { variant: "body-md/medium", children: i }),
            null != t &&
                (0, f.jsx)(lg.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, f.jsx)(i$.CircleErrorIcon, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: n1.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let bG = (0, h.Tf)(S.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => V.intl.string(V.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: p.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: bP,
        }),
        useLabel: () => V.intl.string(V.t.bt75uw),
        useAriaLabel: () => V.intl.string(V.t.JECa91),
        useSubtitle: () => (bL() ? V.intl.string(V.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: bL,
        onClick: function () {
            (0, lp.mM)(async () => {
                let { default: e } = await Promise.all([n.e(745281), n.e(329995), n.e(820969)]).then(n.bind(n, 667792));
                return (t) => (0, f.jsx)(e, { ...t });
            });
        },
    }),
    bM = (0, h.zZ)(S.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, I.bG)([sE.default], () => null != sE.default.getCurrentUser()),
        useTitle: () => V.intl.string(V.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, I.bG)([sE.default], () => sE.default.getCurrentUser());
            return null == e
                ? null
                : e.isClaimed()
                  ? null == e.email || e.verified
                      ? null
                      : {
                            type: p.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            role: "none",
                            title: V.intl.string(V.t.tuGzBT),
                            text: V.intl.string(V.t.NAzplE),
                            button: { text: V.intl.string(V.t.lm1UKt), onClick: () => (0, _q.S)(e) },
                        }
                  : {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        role: "none",
                        title: V.intl.string(V.t["/3qnL/"]),
                        text: V.intl.string(V.t.qKs3vg),
                        button: { text: V.intl.string(V.t["7psymi"]), onClick: () => _Z() },
                    };
        },
        buildLayout: () => [bG, b_, bv, bD, ...bx],
    });
var bU = n(398177);
let bV = (0, h.Tf)(S.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => V.intl.string(V.t["CIGa+7"]),
    useLabel: () => V.intl.string(V.t.bt75uw),
    useAriaLabel: () => V.intl.string(V.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, lp.qf)((e) => (0, f.jsx)(bU.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var bk = n(200921);
let bw = [];
function bF() {
    bw = [];
}
class bB extends I.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return bw;
    }
}
let bX = new bB(ts.h, {
    LOGOUT: bF,
    LOGIN_SUCCESS: bF,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        bw = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [...bw],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        bw = n;
    },
});
function bz() {
    let e = (0, I.cf)([bX], () => bX.getSessions());
    return x.useMemo(() => {
        let t = [...e],
            n = null,
            i = cc.default.getAuthSessionIdHash();
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
function bH(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? V.intl.string(V.t.TXCmfL) : im()(e).fromNow();
}
var bY = n(176524),
    bW = n(646270),
    bK = n(738678),
    bZ = n(489828);
function bq(e) {
    let { icon: t, label: n, subLabel: i, description: l, children: s, muted: r } = e;
    return (0, f.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, f.jsx)(bY.A, { icon: t, color: r ? n1.A.colors.ICON_MUTED : "currentColor" }),
            (0, f.jsxs)(q.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, f.jsxs)(q.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, f.jsx)(n5.E, { variant: "body-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != i &&
                                (0, f.jsx)(n5.E, {
                                    variant: "body-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != i &&
                                (0, f.jsx)(n5.E, { variant: "body-md/medium", color: "text-subtle", children: i }),
                        ],
                    }),
                    (0, f.jsx)(n5.E, { variant: "body-sm/normal", color: "text-muted", children: l }),
                ],
            }),
            s,
        ],
    });
}
function bQ(e) {
    let { session: t, current: n } = e,
        {
            location: i,
            platform: l,
            os: s,
            Icon: r,
            lastActive: a,
        } = (function (e, t) {
            let n = e.client_info?.location ?? e.client_info?.ip,
                i = e.client_info?.platform,
                { text: l, icon: s } = (function (e) {
                    switch (e?.toLowerCase().trim()) {
                        case null:
                        case void 0:
                        case "":
                            return { text: V.intl.string(V.t.cDHCNY), icon: dk.ScreenIcon };
                        case "ios":
                        case "android":
                            return { text: e, icon: bW.MobilePhoneIcon };
                        case "horizon os":
                            return { text: e, icon: bK.VrHeadsetIcon };
                        default:
                            return { text: e, icon: dk.ScreenIcon };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: l, Icon: s, lastActive: t ? null : bH(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(io.Vq);
    return (0, f.jsx)(bq, {
        icon: r,
        label: s,
        subLabel: l,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, f.jsx)(n4.D, {
                className: bZ.X,
                onClick: () => (0, bk.U0)(t.id_hash),
                "aria-label": V.intl.string(V.t.E4MJNt),
                children: (0, f.jsx)(u9.XSmallIcon, { size: "md", color: "currentColor" }),
            }),
    });
}
function bJ(e) {
    let { title: t, children: n } = e,
        i = x.useId();
    return (0, f.jsxs)(q.B, {
        role: "group",
        "aria-labelledby": i,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, f.jsx)(N.D, { id: i, variant: "heading-sm/semibold", color: "text-muted", children: t }),
            (0, f.jsx)(q.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
let b$ = (0, h.E2)(S.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = bz();
            return null == e
                ? (0, f.jsx)(oj.y, {})
                : (0, f.jsx)(bJ, {
                      title: V.intl.string(V.t.LLS19o),
                      children: (0, f.jsx)(bQ, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    b0 = (0, h.E2)(S.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = bz();
            return (0, f.jsx)(lu.D, {
                label: V.intl.string(V.t.Vij32M),
                description: V.intl.string(V.t.OTXyaf),
                children: (0, f.jsx)(j.$, {
                    onClick: () => (0, bk.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: V.intl.string(V.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = bz();
            return e.length > 0;
        },
    });
var b1 = n(766928);
function b2() {
    return (0, f.jsx)(bq, {
        icon: b1.LaptopPhoneIcon,
        label: V.intl.string(V.t.iUa0sn),
        description: V.intl.format(V.t["044+8i"], {
            onClick: () =>
                (0, na.openUserSettings)(S.X.ACCOUNT_PANEL, { analyticsLocations: [tk.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let b3 = (0, h.E2)(S.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = bz(),
                t = (0, I.bG)([sE.default], () => sE.default.getCurrentUser());
            return (0, f.jsxs)(bJ, {
                title: V.intl.string(V.t.xx1MWc),
                children: [
                    e.map((e) => (0, f.jsx)(bQ, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, f.jsx)(b2, {}),
                ],
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = bz(),
                t = (0, I.bG)([sE.default], () => sE.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    b5 = (0, h.zZ)(S.X.SESSIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.mEndXM),
        useSubtitle: () => V.intl.string(V.t.b7ZpTM),
        initialize: () => {
            (0, bk.GY)();
        },
        buildLayout: () => [b$, b3, b0],
        useSearchTerms: () => [
            V.intl.string(V.t["+1h0k/"]),
            V.intl.string(V.t.LLS19o),
            V.intl.string(V.t.xx1MWc),
            V.intl.string(V.t.lSWsrd),
        ],
    }),
    b4 = (0, h.t_)(S.X.SESSIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.mEndXM),
        useObscuredNotice: oS.L,
        buildLayout: () => [b5],
    }),
    b6 = (0, h.t0)(S.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [b4],
        initialize: () => {
            (0, bk.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = bz(),
                n = t.length + +(null != e);
            return {
                type: p.xn.TEXT,
                text: n > 0 ? V.intl.formatToPlainString(V.t.G7zwOk, { count: n }) : V.intl.string(V.t.MKDeyL),
            };
        },
    });
var b8 = n(464477);
function b7(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? V.intl.string(V.t.YJGvuD)
              : V.intl.string(V.t["3iKih7"])
          : e.hasFlag(_.nhx.PARTNER)
            ? t
                ? V.intl.string(V.t["9UucjT"])
                : V.intl.string(V.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? V.intl.string(V.t["9VWpT9"])
                  : V.intl.string(V.t.LfCBZG)
              : null;
}
function b9() {
    return (0, os.bG)([sE.default], () => {
        let e = sE.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var Ne =
    (((E = {}).AVAILABLE = "available"),
    (E.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (E.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    E);
function Nt() {
    let e = (0, os.bG)([sE.default], () => sE.default.getCurrentUser()?.verified);
    return b8.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function Nn() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, os.bG)([lv.A, Ix.A, sE.default], () =>
        sE.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? V.intl.string(V.t.hxf9fX)
                : V.intl.string(V.t["3iKih7"])
            : lv.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        Ix.A.can(_.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? V.intl.string(V.t.OYTCUh)
                  : V.intl.string(V.t.HC8uSZ)
              : null,
    );
}
var Ni = n(466034),
    Nl = n(705147);
let Ns = (0, h.Tf)(S.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => V.intl.string(V.t.lQsY7B),
        useSubtitle: () => Nn(!0),
        useDisabled: () => null !== Nn(!0),
        useLabel: () => V.intl.string(V.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, I.bG)([cc.default], () => cc.default.hasTOTPEnabled()),
                t = Nt() === Ne.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            (async function () {
                let e = (await (0, Nl.k)("totp")) ? V.t.xlA7Tl : V.t.EA4ZEk;
                (0, n2.A)({
                    title: V.intl.string(V.t["D+aE7g"]),
                    subtitle: V.intl.string(e),
                    variant: "critical",
                    confirmText: V.intl.string(V.t.N86XcP),
                    onConfirm: () => _K.A.disable(),
                });
            })(),
    }),
    Nr = (0, h.zZ)(S.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RumMFo),
        useSubtitle: () => V.intl.string(V.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, I.bG)([cc.default], () => cc.default.hasTOTPEnabled()),
                t = Nt() === Ne.AVAILABLE;
            if (!e && t)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: V.intl.string(V.t.cTNUeD),
                            onClick: Ni.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (Nt()) {
                case Ne.UNAVAILABLE_NO_CRYPTO:
                    return {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "info",
                        role: "none",
                        text: V.intl.string(V.t.PhHhsj),
                    };
                case Ne.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        role: "none",
                        text: V.intl.string(V.t.uggF7o),
                    };
                case Ne.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [Ns],
    });
var Na = n(670492),
    No = n(32880),
    Nu = n(658675),
    Nd = n(900686);
function Nc() {
    (0, lp.mM)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, f.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    _K.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, lp.mM)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e(514567), n.e(96179)]).then(
                                        n.bind(n, 518142),
                                    );
                                    return (n) => (0, f.jsx)(e, { ...n, password: t });
                                },
                                { stackingBehavior: "stack" },
                            )
                        );
                    }),
                title: V.intl.string(V.t.PsQmzU),
                actionText: V.intl.string(V.t.ajkYcF),
            });
    });
}
var Ng = n(858487);
function Nm(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function NA() {
    let e = Na.A.getVerificationKey();
    if ("" === e) return void Nc();
    try {
        await _K.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, sc.P0)({ text: e.body?.message ?? V.intl.string(V.t.F8FvUy), variant: "critical" });
    }
}
function NE(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = Nm(t),
        l = x.useRef(null),
        s = (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)(Nu.P, { checked: n }), (0, f.jsx)(n5.E, { variant: "body-md/normal", children: i })],
        });
    return uk.p5
        ? (0, f.jsx)(n4.D, {
              tag: "li",
              className: ic()(Ng.aY, Ng.vk),
              innerRef: l,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uk.C)(i), l?.current?.focus());
              },
              onClick: function () {
                  ((0, uk.C)(i), (0, sc.P0)({ text: V.intl.string(V.t.mGZ66D), variant: "success" }));
              },
              children: s,
          })
        : (0, f.jsx)("li", { className: Ng.aY, children: s });
}
let Nh = (0, h.zZ)(S.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.fC9qV0),
        useSubtitle: () =>
            (0, I.bG)([Na.A], () => Na.A.getBackupCodes().length > 0)
                ? V.intl.format(V.t.tp7zEK, {})
                : V.intl.string(V.t.LoOi4S),
        usePredicate: b9,
        buildLayout: () => [NS],
    }),
    NS = (0, h.E2)(S.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.fC9qV0)],
        Component: function () {
            let e = (0, I.bG)([Na.A], () => Na.A.getBackupCodes()),
                t = x.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${Nm(t)}` + (n ? ` (${V.intl.string(V.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, f.jsx)(j.$, { text: V.intl.string(V.t.Jc2myK), size: "sm", variant: "secondary", onClick: Nc })
                : (0, f.jsxs)(f.Fragment, {
                      children: [
                          (0, f.jsx)("ul", {
                              className: Ng.E5,
                              children: e.map((e) => (0, f.jsx)(NE, { code: e }, e.code)),
                          }),
                          (0, f.jsxs)(s5.e, {
                              size: "sm",
                              children: [
                                  (0, f.jsx)(Nd.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, f.jsx)(j.$, {
                                          text: V.intl.string(V.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: No.DownloadIcon,
                                      }),
                                  }),
                                  (0, f.jsx)(j.$, {
                                      text: V.intl.string(V.t["3x962E"]),
                                      variant: "secondary",
                                      icon: E7.RefreshIcon,
                                      onClick: NA,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    NT = (0, h.Tf)(S.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => V.intl.string(V.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = x.useState(!1),
                n = (0, I.bG)([sE.default], () => sE.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : V.intl.format(e ? V.t["xDBk/I"] : V.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, f.jsx)(St.Q, {
                              text: e ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => V.intl.string(V.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, I.bG)([sE.default], () => sE.default.getCurrentUser()?.hasFlag(_.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, lp.mM)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, f.jsx)(e, {
                        ...t,
                        handleSubmit: _K.A.disableSMS,
                        title: V.intl.string(V.t.KLWnit),
                        children: V.intl.string(V.t["W0/Duf"]),
                    });
            }),
    }),
    Np = (0, h.zZ)(S.X.SMS_AUTH_CATEGORY, {
        useTitle: () => V.intl.string(V.t.wuHuI5),
        useSubtitle: () => (0, I.bG)([sE.default], () => b7(sE.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, I.bG)([sE.default], () => sE.default.getCurrentUser()?.hasFlag(_.nhx.MFA_SMS) ?? !1),
                t = (0, I.bG)([sE.default], () => null != b7(sE.default.getCurrentUser()));
            if (!e)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "sms-setup-button",
                            text: V.intl.string(V.t.Age7yU),
                            onClick: Nf,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = Nt(),
                t = b9(),
                n = (0, I.bG)([cc.default], () => cc.default.hasTOTPEnabled());
            return e === Ne.AVAILABLE && t && n;
        },
        buildLayout: () => [NT],
    });
function Nf() {
    let e = sE.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: bj.d.USER_SETTINGS_UPDATE, onAddedPhone: _K.A.enableSMS }),
                (0, lp.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(590275),
                            n.e(766806),
                            n.e(989545),
                            n.e(757786),
                            n.e(84704),
                            n.e(286197),
                        ]).then(n.bind(n, 615715));
                        return (n) => (0, f.jsx)(e, { ...n, ...t });
                    },
                    { modalKey: bO.V },
                ));
        } else _K.A.enableSMS();
}
var Nx = n(665671),
    NI = n(442433),
    N_ = n(917136),
    Nb = n(976910),
    NN = n(267255);
function NC(e) {
    let { credential: t } = e;
    return (0, f.jsxs)("li", {
        className: NN.e,
        children: [
            (0, f.jsxs)("div", {
                children: [
                    (0, f.jsx)(n5.E, { variant: "body-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, f.jsx)(n5.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: V.intl.format(V.t["7JgxF5"], { lastUsed: bH(t.last_used) }),
                        }),
                ],
            }),
            (0, f.jsx)(ld.K, {
                icon: me.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": V.intl.string(V.t["+nrTbK"]),
                onClick: (e) => {
                    (0, NI.L3)(e, async () => {
                        let { default: e } = await n.e(32529).then(n.bind(n, 41e3));
                        return (n) => (0, f.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let Ny = (0, h.zZ)(S.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.IBq4Y3),
        useSubtitle: () => V.intl.string(V.t.yK9edS),
        useHeaderDecoration: function () {
            if (Nt() === Ne.AVAILABLE)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "add-security-key-button",
                            text: V.intl.string(V.t["Tzs/fw"]),
                            icon: iY.PlusSmallIcon,
                            onClick: Nx.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (Nt()) {
                    case Ne.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: p.lT.INLINE_NOTICE,
                            noticeType: "info",
                            role: "none",
                            text: V.intl.string(V.t.bWCGI9),
                        };
                    case Ne.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: p.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            role: "none",
                            text: V.intl.string(V.t.uggF7o),
                        };
                    case Ne.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [Nv],
    }),
    Nv = (0, h.E2)(S.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [V.intl.string(V.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, I.cf)([Nb.A], () => ({
                hasFetchedCredentials: Nb.A.hasFetchedCredentials(),
                credentials: Nb.A.getCredentials(),
            }));
            return (x.useEffect(() => {
                t || N_.JQ();
            }, [t]),
            t)
                ? (0, f.jsx)(q.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, f.jsx)(NC, { credential: e }, e.id)),
                  })
                : (0, f.jsx)(oj.y, {});
        },
    }),
    Nj = (0, h.t_)(S.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => V.intl.string(V.t.m0FidJ),
        buildLayout: () => [Ny, Nr, Np, Nh],
    }),
    NO = (0, h.t0)(S.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = b9();
            return { type: p.xn.TEXT, text: e ? V.intl.string(V.t.lQsY7B) : V.intl.string(V.t.WsUuTt) };
        },
        buildLayout: () => [Nj],
    }),
    NR = (0, h.zZ)(S.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t["0iH2vc"]),
        buildLayout: () => [bV, NO, b6],
    }),
    ND = { [_Q.M$.ADULT]: _5.default.PMznGO, [_Q.M$.TEEN]: _5.default.qSkhZH, [_Q.M$.UNVERIFIED]: _5.default.vGxRDB },
    NL = [eE.M.TINY_BRONCO_NOTICE],
    NP = [];
function NG() {
    _$.A.openUrl(_0.M1);
}
var NM = n(308645),
    NU = n(881979),
    NV = n(37380);
let Nk = (0, h.E2)(S.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["16r9jm"])],
        Component: NV.A,
    }),
    Nw = (0, h.zZ)(S.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [Nk] }),
    NF = (0, h.t_)(S.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => V.intl.string(V.t["16r9jm"]),
        buildLayout: () => [Nw],
    }),
    NB = (0, h.t0)(S.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => V.intl.string(V.t["16r9jm"]),
        useSubtitle: NU.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, NU._k)();
            return { type: p.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: p.xn.TEXT, text: (0, NU.aO)() };
        },
        initialize: () => {
            NM.Yn();
        },
        buildLayout: () => [NF],
    }),
    NX = (0, h.zZ)(S.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (_3() ? V.intl.string(V.t.GI2mea) : null) ?? V.intl.string(V.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, bt.LH)(),
                t = (0, _Q.ZP)(),
                [n, i] = (0, m8.kn)(e ? NL : NP);
            return e && null != n
                ? {
                      type: p.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "none",
                      text: V.intl.format(ND[t], { handleOnBlogHook: NG }),
                      onDismiss: () => i(As.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [...bI, NB],
    });
var Nz = n(738188),
    NH = n(834981),
    NY = n(987197),
    NW = n(822585),
    NK = n(840387),
    NZ = n(890623),
    Nq = n(665956);
let NQ = (0, h.E2)(S.X.FAMILY_CENTER_SETTING, {
        Component: NZ.p,
        useSearchTerms: () => [
            V.intl.string(Nq.default.RZqaJn),
            V.intl.string(Nq.default.bdBmqy),
            V.intl.string(Nq.default["gVWG+6"]),
            V.intl.string(Nq.default.ahKIJO),
            V.intl.string(Nq.default["8SLtqb"]),
        ],
    }),
    NJ = (0, h.zZ)(S.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [NQ] }),
    N$ = (0, h.t_)(S.X.FAMILY_CENTER_PANEL, {
        useTitle: () => V.intl.string(Nq.default.RZqaJn),
        buildLayout: () => [NJ],
    }),
    N0 = (0, h.zZ)(S.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => V.intl.string(Nq.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, NY.f)(),
                t = (0, NW.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, NH.VT)();
            return x.useMemo(() => (n ? { badgeType: p.Xi.WARNING } : { badgeType: p.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [N1],
    }),
    N1 = (0, h.t0)(S.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, NH.Li)() ? V.intl.string(Nq.default.IcMQUP) : V.intl.string(Nq.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, NK.Z)(),
                t = (0, NH.Li)();
            return e
                ? t
                    ? V.intl.string(Nq.default.G8lHFU)
                    : V.intl.string(Nq.default.uOLNEZ)
                : V.intl.string(Nq.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, NY.f)(),
                t = (0, NW.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: p.Xy.ICON,
                      icon: Nz.WarningIcon,
                      color: n1.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: n1.A.colors.BACKGROUND_FEEDBACK_MOD_WARNING,
                  };
        },
        buildLayout: () => [N$],
    });
var N2 = n(425587),
    N3 = n(662758);
function N5(e) {
    if (e.body.code === _.t02.INVALID_PASSWORD) throw e;
    (0, s1.A)({ title: V.intl.string(V.t.LX0nT8), subtitle: e.body.message });
}
async function N4() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = sE.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await N2.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, s1.A)({
              title: V.intl.string(V.t["Y++oNe"]),
              subtitle: V.intl.format(V.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : lv.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, s1.A)({ title: V.intl.string(V.t.vJiTOL), subtitle: V.intl.string(V.t.UyVVan) })
          : t.isClaimed()
            ? (0, lp.qf)((t) =>
                  (0, f.jsx)(N3.default, {
                      ...t,
                      handleSubmit: (t) => (0, xp.U_)(t, e).then(_.tEg, N5),
                      title: e ? V.intl.string(V.t.xca2ts) : V.intl.string(V.t.goXv9g),
                      actionText: e ? V.intl.string(V.t["8lQ2rR"]) : V.intl.string(V.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? V.intl.string(V.t.FB4H1D) : V.intl.string(V.t.gk7h32),
                  }),
              )
            : (0, n2.A)({
                  title: V.intl.string(V.t.xca2ts),
                  subtitle: V.intl.string(V.t.FB4H1D),
                  confirmText: V.intl.string(V.t["8lQ2rR"]),
                  onConfirm: () => (0, xp.U_)("", !0),
              });
}
let N6 = (0, h.Tf)(S.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => V.intl.string(V.t["gIpzR+"]),
        useSubtitle: () => V.intl.string(V.t.Bd6dOf),
        useLabel: () => V.intl.string(V.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => N4(!0),
    }),
    N8 = (0, h.Tf)(S.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => V.intl.string(V.t["p/Tjtp"]),
        useSubtitle: () => V.intl.string(V.t.YvDmKb),
        useLabel: () => V.intl.string(V.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => N4(!1),
        usePredicate: () => {
            let e = (0, I.bG)([sE.default], () => sE.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    N7 = (0, h.zZ)(S.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [N8, N6] }),
    N9 = (0, h.t_)(S.X.ACCOUNT_PANEL, {
        useTitle: () => V.intl.string(V.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (_K.A.clearBackupCodes(), (0, xp.Uo)());
            };
        },
        useObscuredNotice: oS.L,
        buildLayout: () => [bM, NR, NX, N0, N7],
    }),
    Ce = (0, h.i4)(S.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["ldCE/p"]),
        icon: A6.UserIcon,
        buildLayout: () => [N9],
    });
var Ct = n(254138),
    Cn = n(290595),
    Ci = n(677166),
    Cl = n(410310),
    Cs = n(405018),
    Cr = n(137005);
let Ca = "user_settings_data_usage",
    Co = [
        (0, h.zD)("pinot_member_setting", {
            useTitle: () => V.intl.string(Cr.default.M33rl6),
            useSubtitle: () =>
                V.intl.format(Cr.default.V0EPTo, {
                    learnMoreURL: eC.A.getArticleURL(_.MVz.DISCOVERABLE_CONTENT_ON_THE_WEB),
                }),
            usePredicate: () => (0, Ci.Zd)(Ca),
            useValue: () => !(0, Cl.p)().optedOut,
            setValue: (e) => {
                Cl.N.updateSetting(!e);
            },
            useDisabled: function () {
                return (0, Cl.p)().locked;
            },
            useDisabledMessage: () =>
                V.intl.format(Cr.default.Z9bKIJ, {
                    learnMoreURL: eC.A.getArticleURL(_.MVz.DISCOVERABLE_CONTENT_ON_THE_WEB),
                }),
            disabledMessageType: "info",
            getDismissibleBadges: () =>
                !(0, Ci.ws)(Ca, { autoTrackExposure: !1 }) || Cs.A.isLocked()
                    ? []
                    : [{ badgeType: p.Xi.NEW, dismissibleContent: eE.M.PINOT_MEMBER_SETTING_NEW_BADGE }],
        }),
    ];
var Cu = n(153488),
    Cd = n(171316),
    Cc = n(327919),
    Cg = n(558001);
n(866945);
var Cm = n(835002);
function CA() {
    let e = (0, Cd.uM)(),
        t = (0, NH.vx)(),
        n = x.useCallback(() => {
            ((0, Cc.A)(t, tH.default, () =>
                (0, sc.P0)({
                    text: V.intl.formatToPlainString(Nq.default.D1BwNC, { count: t.length }),
                    variant: "critical",
                }),
            ),
                (0, Cg.N)(Cm.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, Cm.YX.LEARN_MORE));
        }, [t]),
        i = x.useCallback(() => {
            (0, Cg.N)(Cm.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, Cm.YX.VIEWED);
        }, []);
    return x.useMemo(() => {
        if (e)
            return {
                type: p.lT.INLINE_NOTICE,
                noticeType: "info",
                role: "none",
                trackView: i,
                text: V.intl.format(Nq.default.i284fU, {
                    hook: (e, t) => (0, f.jsx)(nr.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let CE = (0, h.zD)(S.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => V.intl.string((0, fw.H)() ? fH.default["IxZyA+"] : V.t.AGDDkH),
    useSubtitle: () => V.intl.string((0, fw.H)() ? fH.default.GjNXmw : V.t.kyo3dJ),
    useValue: () => U.Q$.useSetting(),
    setValue: (e) => fX.eQ({ allowVoiceRecording: e }),
});
var Ch = n(157559),
    CS = n(331887);
function CT() {
    let e = (0, I.bG)([sE.default], () => sE.default.getCurrentUser()),
        t = (0, I.bG)([CS.A], () => CS.A.harvestType),
        [n, i] = x.useState(() => Date.now()),
        l = null == t ? n : new Date(t.created_at).getTime() + 2592e6,
        s = x.useRef(null);
    return (x.useEffect(() => {
        let e = l - Date.now();
        if (e > 0) {
            let t = setTimeout(() => i(Date.now()), e);
            (clearTimeout(s.current), (s.current = t));
        }
        return () => clearTimeout(s.current);
    }, [l]),
    e?.verified)
        ? e.isStaff()
            ? { allowed: !1, reason: "staff" }
            : null == t
              ? { allowed: !0 }
              : l > n
                ? { allowed: !1, reason: "rate_limited", nextAllowed: new Date(l) }
                : { allowed: !0 }
        : { allowed: !1, reason: "not_verified" };
}
let Cp = (0, h.Tf)(S.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => V.intl.string(V.t.qfFFos),
        useSubtitle: function () {
            let e = CT();
            if (e.allowed) return V.intl.format(V.t.NRI6vt, { article: eC.A.getArticleURL(_.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return V.intl.string(V.t.hIbRso);
                case "not_verified":
                    return V.intl.format(V.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, f.jsx)(
                                n4.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, na.openUserSettings)(S.X.ACCOUNT_INFO_EMAIL_SETTING),
                                    children: e,
                                },
                                t,
                            ),
                    });
                case "rate_limited": {
                    let t = im()(e.nextAllowed).format("MMMM Do YYYY");
                    return V.intl.format(V.t["VLMG1+"], { date: t });
                }
                default:
                    return;
            }
        },
        initialize: () => {
            (ts.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                tl.Bo.get({ url: _.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        ts.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        ts.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    }));
        },
        useDisabled: () => !CT().allowed,
        useLoading: () => (0, I.bG)([CS.A], () => CS.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => V.intl.string(V.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...i } = e;
                    (0, lp.mM)(async () => {
                        let { default: e } = await n.e(292063).then(n.bind(n, 970018));
                        return (n) => (0, f.jsx)(e, { modalProps: n, onConfirm: t });
                    }, i);
                })({
                    onConfirm: (n) => {
                        ((t = !1),
                            (0, xp.$I)(n)
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
                                            ? Ch.A.show({
                                                  title: V.intl.string(V.t.i2iul5),
                                                  body: V.intl.string(V.t["6Nmv4i"]),
                                              })
                                            : Ch.A.show({
                                                  title: V.intl.string(V.t.OjbtDm),
                                                  body: V.intl.string(V.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || V.intl.string(V.t["0F5Jyt"]);
                                        Ch.A.show({ title: V.intl.string(V.t.OjbtDm), body: t });
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
    Cf = (0, h.v_)(S.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => V.intl.string(V.t.D60Gfj),
        useSubtitle: () =>
            V.intl.format(V.t.dszICC, {
                onClickDisable: () => (0, na.openUserSettings)(S.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, na.openUserSettings)(S.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var Cx = n(641216);
let CI = (0, EM.mj)({
    kind: "user",
    name: "2026-08-ad-topic-opt-out-client",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 }, 3: { enabled: !0 }, 4: { enabled: !0 }, 5: { enabled: !0 } },
});
function C_() {
    let { enabled: e } = CI.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var Cb = n(884705);
function CN() {
    return (0, I.bG)([Cb.A], () => Cb.A.isTogglesDisabled());
}
function CC() {
    return !U.vf.useSetting();
}
function Cy(e) {
    U.vf.updateSetting(!e);
}
function Cv() {
    let e = CN(),
        t = U.H1.useSetting(),
        n = (0, Cd.uM)();
    return e || t || n;
}
let Cj = (0, h.zD)(S.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => V.intl.string(V.t.CyLYKZ),
        useSubtitle: () =>
            V.intl.format(V.t["md5l4/"], { helpdeskArticle: eC.A.getArticleURL(_.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !C_(),
        useValue: CC,
        setValue: Cy,
        useDisabled: Cv,
        useSearchTerms: () => [V.intl.string(V.t.CyLYKZ)],
    }),
    CO = (0, h.zD)(S.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => V.intl.string(V.t.CyLYKZ),
        useSubtitle: () =>
            V.intl.format(V.t["2QFDU/"], { helpdeskArticle: eC.A.getArticleURL(_.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: C_,
        useValue: CC,
        setValue: Cy,
        useDisabled: Cv,
        useSearchTerms: () => [V.intl.string(V.t.CyLYKZ)],
    });
function CR() {
    return !U.H1.useSetting();
}
function CD(e) {
    U.H1.updateSetting(!e);
}
function CL() {
    let e = CN(),
        t = (0, Cd.uM)();
    return e || t;
}
let CP = (0, h.zD)(S.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => V.intl.string(V.t.sJYh5t),
        useSubtitle: () => V.intl.string(V.t.w4fvxe),
        usePredicate: () => !C_(),
        useValue: CR,
        setValue: CD,
        useSearchTerms: () => [V.intl.string(V.t.VkS7Yd)],
        useDisabled: CL,
    }),
    CG = (0, h.zD)(S.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => V.intl.string(V.t.sJYh5t),
        useSubtitle: () =>
            V.intl.format(V.t.cf9mvV, { helpdeskArticle: eC.A.getArticleURL(_.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: C_,
        useValue: CR,
        setValue: CD,
        useSearchTerms: () => [V.intl.string(V.t.VkS7Yd)],
        useDisabled: CL,
    }),
    CM = (0, h.AK)(S.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: S.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = Sv(2);
            return V.intl.format(V.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = Sj();
            return { type: p.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, I.bG)([i4.Ay], () => i4.Ay.getGamesSeen(!1).some((e) => !(0, SI.n1)(e))) && (0, nh.xl)(),
    }),
    CU = (0, h.gN)(S.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [CM] });
var CV = n(972737);
let Ck = (0, h.zD)(S.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => V.intl.string(V.t.XuADY2),
        useSubtitle: () =>
            V.intl.format(V.t.FNqmmX, { helpdeskArticle: eC.A.getArticleURL(_.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, I.bG)([Cu.A], () => Cu.A.hasConsented(_.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, Cn.U)([_.YAq.USAGE_STATISTICS], []).catch(CV.i)
                : (0, CV.O)({
                      header: V.intl.string(V.t.OdPCbN),
                      body: V.intl.string(V.t.MGWabA),
                      confirmText: V.intl.string(V.t["D3+rU4"]),
                      cancelText: V.intl.string(V.t.kYpG0u),
                      onConfirm: () => (0, Cn.U)([], [_.YAq.USAGE_STATISTICS]).catch(CV.i),
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t.XuADY2)],
        useDisabled: Cd.uM,
    }),
    Cw = (0, h.zZ)(S.X.DATA_USAGE_CATEGORY, {
        useTitle: () => V.intl.string(V.t.QDAriI),
        useInlineNotice: CA,
        initialize: () => {
            Cu.A.fetchedConsents || (0, Cn.Q)();
        },
        buildLayout: () => [Cf, Ck, Cx._, CP, Cj, ...Co, CE, Cp, CU],
    });
var CF = n(870549);
let CB = (0, h.zD)(S.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => V.intl.string(CF.default.F3llsQ),
    useSubtitle: () => V.intl.string(CF.default["6goWcz"]),
    useValue: U.Sy.useSetting,
    setValue: function (e) {
        (U.Sy.updateSetting(e),
            td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: SL.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function CX() {
    let e = U.JG.useSetting();
    return (0, I.yK)(
        [g4.Ay, lv.A],
        () => {
            let t = new Set(e);
            return g4.Ay.getFlattenedGuildIds().filter((e) => null != lv.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let Cz = (0, h.AK)(S.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = CX();
            if (0 === e.length) return V.intl.format(V.t.QJIJ5p, {});
            let t = lv.A.getGuild(e[0]),
                n = t?.name ?? "",
                i = e.length - 1;
            return 0 === i
                ? V.intl.format(V.t["T+8J4A"], { guildName: n })
                : V.intl.format(V.t["3JyODQ"], { guildName: n, count: i });
        },
        useTrailingDecoration: function () {
            let e,
                t,
                n =
                    ((e = CX()),
                    0 ===
                    (t = (0, I.yK)(
                        [lv.A],
                        () =>
                            e
                                .slice(0, 2)
                                .map((e) => lv.A.getGuild(e))
                                .filter((e) => null != e),
                        [e],
                    )).length
                        ? null
                        : t.length >= 2
                          ? {
                                frontIcon: { icon: (0, f.jsx)(SY, { guild: t[0], size: 48 }), shape: S_.e.SQUIRCLE },
                                backIcon: { icon: (0, f.jsx)(SY, { guild: t[1], size: 48 }), shape: S_.e.SQUIRCLE },
                            }
                          : { frontIcon: { icon: (0, f.jsx)(SY, { guild: t[0], size: 48 }), shape: S_.e.SQUIRCLE } });
            return { type: p.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: S.X.ACTIVITY_PRIVACY_PANEL,
    }),
    CH = (0, h.gN)(S.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [Cz] }),
    CY = (0, h.Qx)(S.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => V.intl.string(V.t.Qnf32C),
        useOptions: function () {
            return [
                {
                    name: V.intl.string(V.t.Boxc8R),
                    desc: V.intl.string(V.t["nLj+nc"]),
                    value: eJ.KP.FRIENDS_AND_ALL_GUILDS,
                },
                {
                    name: V.intl.string(V.t.YOIKBt),
                    desc: V.intl.string(V.t.y0JZ4s),
                    value: eJ.KP.FRIENDS_AND_SMALL_GUILDS,
                },
                { name: V.intl.string(V.t.u0nlJv), desc: V.intl.string(V.t["4jnKHu"]), value: eJ.KP.FRIENDS_ONLY },
            ];
        },
        useValue: U.KP.useSetting,
        setValue: function (e) {
            let t = U.KP.getSetting();
            U.KP.updateSetting(e);
            let i = (0, Sw.gS)(t, e);
            null != i &&
                (0, lp.mM)(async () => {
                    let { default: e } = await Promise.all([n.e(26411), n.e(562041), n.e(763786)]).then(
                        n.bind(n, 413201),
                    );
                    return (t) =>
                        (0, f.jsx)(e, {
                            ...t,
                            direction: i.direction,
                            affectedGuildIds: i.affectedGuildIds,
                            settingName: i.settingName,
                            mappedActivityValue: i.mappedActivityValue,
                        });
                });
        },
        useSearchTerms: () => [V.intl.string(V.t.Qnf32C)],
    }),
    CW = (0, h.zZ)(S.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.ul884f),
        useSubtitle: () =>
            V.intl.format(V.t.N4jSgR, {
                learnMoreUrl: eC.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [CY, CB, CH],
    });
var CK = n(952270),
    CZ = n(609649);
let Cq = { [eJ.tR.REAL_MONEY_GAMING]: CZ.default.pmIitA },
    CQ = Object.keys(Cq).map(Number),
    CJ = (0, h.E2)(S.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [V.intl.string(CZ.default.foQaI1)],
        usePredicate: C_,
        Component: function () {
            let e = x.useMemo(
                    () =>
                        CQ.map((e) => ({
                            id: String(e),
                            value: e,
                            label: V.intl.string(Cq[e]),
                            leading: CK.EyeSlashIcon,
                        })),
                    [],
                ),
                t = U.XZ.useSetting();
            return (0, f.jsx)(fy.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(U.XZ.getSetting());
                    for (let e of CQ) t.has(e) ? n.add(e) : n.delete(e);
                    U.XZ.updateSetting([...n]);
                },
                label: V.intl.string(CZ.default.foQaI1),
                description: V.intl.format(CZ.default["z/MfaY"], {
                    helpdeskArticle: eC.A.getArticleURL(_.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: V.intl.string(CZ.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    C$ = (0, h.zZ)(S.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => V.intl.string(CZ.default.XUj46U),
        usePredicate: C_,
        buildLayout: () => [CG, CO, CJ],
    });
var C0 = n(714763),
    C1 = n(814278),
    C2 = n(597798),
    C3 = n(627784),
    C5 = n(977997),
    C4 = n(144485);
async function C6(e, t) {
    if (e) {
        ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e });
        try {
            (await (0, C1.to)(1), t?.());
        } catch (t) {
            let e = new C3.LG(t);
            (ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                Ch.A.show({
                    title: V.intl.string(V.t.R0RpRX),
                    body: e.getAnyErrorMessage() ?? V.intl.string(V.t.eAn6z2),
                }));
        }
    } else (ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e }), t?.());
}
n(603266);
let C8 = (0, h.zD)(S.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => V.intl.string(V.t["opi/XK"]),
    useSubtitle: () => V.intl.format(V.t["/T+ZlP"], { helpArticle: (0, C1.Lu)() }),
    useValue: function () {
        return (0, I.bG)([C0.A], () => C0.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        !(async function (e) {
            let t,
                n,
                i =
                    ((t = C5.A.getVoiceStateForUser(cc.default.getId())),
                    (n = lC.A.getChannel(t?.channelId)),
                    cc.default.getSessionId() === t?.sessionId && null != n && n.type !== _.rbe.GUILD_STAGE_VOICE
                        ? n.id
                        : null);
            null != i
                ? C4.A.openSecureFramesUpdateConfirmation({
                      title: e ? V.intl.string(V.t.DRFN1B) : V.intl.string(V.t.q29xJz),
                      subtitle: e ? V.intl.string(V.t.y015ZY) : V.intl.string(V.t.E66FQn),
                      confirmText: V.intl.string(V.t.aTuFYT),
                      onConfirm: async () => {
                          await C6(e, () => {
                              (C2.default.disconnect(), C2.default.selectVoiceChannel(i));
                          });
                      },
                  })
                : await C6(e);
        })(e);
    },
});
var C7 = n(787392);
function C9() {
    return (0, I.yK)([C7.A], () => C7.A.getUserIds());
}
var ye = n(803306),
    yt = n(966327),
    yn = n(774156);
function yi(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(),
        l = (0, I.bG)([sE.default], () => sE.default.getUser(t)),
        s = u2.Ay.getFormattedName(l),
        r = x.useCallback(() => {
            (0, C1.kj)(t);
        }, [t]),
        a = x.useCallback(() => (0, x_.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        x.useEffect(() => {
            (0, ye.wz)(t);
        }, [t]),
        (0, f.jsxs)("div", {
            className: yn.uW,
            children: [
                null != l && (0, f.jsx)(yt.A, { className: yn.my, user: l, size: v._3.SIZE_40 }),
                (0, f.jsxs)("div", {
                    className: yn.Qq,
                    children: [
                        (0, f.jsx)(n4.D, {
                            className: yn.Xh,
                            onClick: a,
                            children: (0, f.jsx)(n5.E, {
                                variant: "body-md/semibold",
                                color: "interactive-text-active",
                                children: s,
                            }),
                        }),
                        (0, f.jsx)(n5.E, {
                            variant: "body-md/medium",
                            color: "text-default",
                            children: V.intl.format(V.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, f.jsx)(n4.D, { onClick: r, className: yn.Qz, children: (0, f.jsx)(lc.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function yl(e) {
    let { className: t, userId: n, verification: i, index: l } = e,
        s = (0, C1.tC)(i.timestamp),
        r = x.useCallback(() => {
            (0, C1.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, f.jsxs)("div", {
        className: t,
        children: [
            (0, f.jsxs)("div", {
                className: yn.Qq,
                children: [
                    (0, f.jsx)(n5.E, {
                        variant: "body-sm/semibold",
                        color: "interactive-text-active",
                        children: V.intl.format(V.t.N4qBBO, { index: l + 1 }),
                    }),
                    (0, f.jsx)(n5.E, { variant: "body-sm/medium", color: "text-default", children: s }),
                ],
            }),
            (0, f.jsx)(n4.D, {
                className: yn.Kk,
                onClick: r,
                children: (0, f.jsx)(u9.XSmallIcon, { size: "md", color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function ys(e) {
    let { userId: t } = e,
        n = (0, I.yK)([C7.A], () =>
            K()(C7.A.getUserVerifiedKeys(t))
                .entries()
                .map((e) => {
                    let [t, n] = e;
                    return { verifiedKey: t, timestamp: n };
                })
                .sortBy((e) => -1 * e.timestamp)
                .value(),
        );
    return (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsx)(yi, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, f.jsxs)(
                    x.Fragment,
                    {
                        children: [
                            (0, f.jsx)(yl, { className: yn.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, f.jsx)("div", { className: yn.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var yr = n(464946),
    ya = n(492422);
let yo = (0, h.E2)(S.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["5b3FNI"])],
        usePredicate: function () {
            let e = C9();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = C9();
            return (0, f.jsxs)(yr.h, {
                children: [
                    (0, f.jsx)(yr._, {
                        header: V.intl.string(V.t["5b3FNI"]),
                        description: V.intl.format(V.t.jrTSWU, { helpArticle: (0, C1.dc)() }),
                    }),
                    e.map((e) => (0, f.jsx)("div", { className: ya.A, children: (0, f.jsx)(ys, { userId: e }) }, e)),
                ],
            });
        },
    }),
    yu = (0, h.zZ)(S.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.bTwjaz),
        usePredicate: () => (0, e8.xl)(),
        buildLayout: () => [C8, yo],
    }),
    yd = (0, h.t_)(S.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => V.intl.string(V.t.OAuOHD),
        buildLayout: () => [Cw, C$, CW, yu],
    }),
    yc = (0, h.i4)(S.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.OAuOHD),
        icon: Ct.ShieldLockIcon,
        buildLayout: () => [yd],
    });
var yg = n(476713);
let ym = (0, h.AK)(S.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.O65dzZ),
        useTitle: () => V.intl.string(V.t["f6kk+r"]),
        destinationKey: S.X.AUTHORIZED_APPS_CATEGORY,
    }),
    yA = (0, h.gN)(S.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [ym] });
var yE = n(875444);
function yh(e, t) {
    let n = (0, I.bG)([Th.A], () => Th.A.getFetchState()),
        i = (0, I.bG)([Th.A], () => (e ? Th.A.getNewestTokensForNonChildrenApplications() : Th.A.getNewestTokens())),
        l = x.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, yE.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        x.useEffect(() => {
            t || Tn.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== Th.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: l }
    );
}
var yS = n(514479);
function yT() {
    return (0, f.jsxs)("div", {
        className: yS.d,
        children: [
            (0, f.jsx)(n5.E, {
                variant: "body-md/medium",
                color: "text-strong",
                className: yS.x,
                children: V.intl.string(V.t["+0U77d"]),
            }),
            (0, f.jsx)(n5.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: V.intl.format(V.t.V8wClM, {
                    helpdeskArticle: eC.A.getArticleURL(_.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
let yp = (0, h.E2)(S.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = yh(!0, !0);
        return e ? (0, f.jsx)(oj.y, {}) : (0, f.jsx)(yT, {});
    },
    useSearchTerms: () => [V.intl.string(V.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = yh(!0, !0);
        return e || 0 === t.length;
    },
});
function yf() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = yh(!0, !0);
    return !e && t.length > 0;
}
let yx = (0, h.zD)(S.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => V.intl.string(V.t.W8JtfT),
        useSubtitle: () => V.intl.string(V.t.a99KKy),
        useSearchTerms: () => [V.intl.string(V.t["Uv/eTx"])],
        useValue: () => U.Zk.useSetting(),
        setValue: (e) => U.Zk.updateSetting(e),
        usePredicate: yf,
    }),
    yI = (0, h.Qx)(S.X.IN_GAME_DMS_SETTING, {
        useTitle: () => V.intl.string(V.t["ms+Tme"]),
        useSubtitle: () => V.intl.string(V.t["0ryspy"]),
        useOptions: function () {
            return [
                { name: V.intl.string(V.t.JIFnN9), value: eJ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
                { name: V.intl.string(V.t.rRdsk1), value: eJ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
                { name: V.intl.string(V.t.IVRPMX), value: eJ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
            ];
        },
        useValue: function () {
            let e = U.TA.useSetting();
            return e === eJ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? eJ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => U.TA.updateSetting(e),
        usePredicate: yf,
    });
function y_() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = yh(!0, !0);
    return {
        sortedGames: x.useMemo(() => e.toSorted((e, t) => ow.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var yb = n(171576);
function yN(e) {
    let { body: t, button: n, noticeType: i } = e;
    return (
        (0, e_.Ay)(() => {
            (0, Cg.N)(i, Cm.YX.VIEWED);
        }),
        (0, f.jsx)(iK.w, { type: "info", message: t, action: n, role: "none" })
    );
}
function yC(e, t) {
    return x.useCallback(() => {
        (t(), (0, Cg.N)(e, Cm.YX.LEARN_MORE));
    }, [e, t]);
}
function yy(e, t) {
    return {
        handleLearnMore: yC(e, t),
        handleConfirmAge: x.useCallback(() => {
            (_$.A.showAgeVerificationGetStartedModal({ entryPoint: yb.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Cg.N)(e, Cm.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function yv() {
    let e,
        t = (0, Cd.uM)(),
        n = (0, br.fk)(),
        i = (0, bs.b8)(),
        l = (0, NK.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : l && (e = "teen"), null != e) && (0, _2.x)(_0.LI)) return e;
    }
}
var yj = n(687123),
    yO = n(444802);
function yR() {
    let e = (0, yO.WX)();
    x.useEffect(() => {
        (0, Cg.N)(Cm.YA.AGE_CONFIRMATION_NOTICE, Cm.YX.VIEWED);
    }, []);
    let t = x.useCallback(() => {
            (window.open(eC.A.getArticleURL(e), "_blank"), (0, Cg.N)(Cm.YA.AGE_CONFIRMATION_NOTICE, Cm.YX.LEARN_MORE));
        }, [e]),
        n = x.useCallback(() => {
            (_$.A.showAgeVerificationGetStartedModal({ entryPoint: yb.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Cg.N)(Cm.YA.AGE_CONFIRMATION_NOTICE, Cm.YX.CONFIRM_AGE));
        }, []);
    return (0, f.jsx)(iK.w, {
        type: "info",
        message: V.intl.format(V.t.mFgsfg, { hook: (e, n) => (0, f.jsx)(nr.Anchor, { onClick: t, children: e }, n) }),
        role: "status",
        action: { text: V.intl.string(V.t.FDSSia), onClick: n },
    });
}
function yD() {
    let e = (0, br.aX)(yj.t.REACTIVE_CHECK),
        t = (0, bs.b8)();
    return x.useMemo(() => {
        if (e && !t) return { type: p.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: yR };
    }, [e, t]);
}
var yL = n(323073),
    yP = n(386171),
    yG = n(96607);
let yM = (0, h.zD)(S.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => V.intl.string(V.t.gvC6q7),
        useSubtitle: () => V.intl.string(V.t.zirUC1),
        useValue: yP.hT,
        useDisabled: function () {
            let e = (0, yG.A)() ?? !0,
                t = (0, yL.sP)(),
                n = (0, bs.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, yL.p5)() && e
                ? _$.A.showAgeVerificationGetStartedModal({ entryPoint: yb.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : U.Qe.updateSetting(e);
        },
    }),
    yU = (0, h.zD)(S.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => V.intl.string(V.t["L+yTsa"]),
        useSubtitle: () => V.intl.string(V.t["t6i/jW"]),
        useValue: yP.tI,
        useDisabled: function () {
            let e = (0, yG.A)() ?? !0,
                t = (0, yL.sP)(),
                n = (0, bs.yM)();
            return x.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, yL.p5)() && e
                ? _$.A.showAgeVerificationGetStartedModal({ entryPoint: yb.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : U.Kg.updateSetting(e);
        },
    }),
    yV = (0, h.AK)(S.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.hOXd45),
        destinationKey: S.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    yk = (0, h.gN)(S.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [yV] });
n(667532);
var yw = n(390248),
    yF = n(632119),
    yB = n(945276),
    yX = n(389737),
    yz = n(523009);
function yH() {
    let e,
        t = (0, yB.A)() ?? !0,
        n = (0, Cd.uM)(),
        i = (0, Cd.uM)(),
        {
            explicitContentGuilds: l,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: r,
        } = ((e = (0, os.cf)([aR.A], () => aR.A.settings.textAndImages?.explicitContentSettings ?? (0, yF.C$)())),
        {
            explicitContentGuilds: (0, yF.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, yF.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, yF.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yw.hK)() && t.includes(eJ.TO.SHOW)
            ? _$.A.showAgeVerificationGetStartedModal({ entryPoint: yb.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yF.Jz)(e);
    }
    let o = [
            { value: eJ.TO.BLUR, label: V.intl.string(V.t.S49Uad) },
            { value: eJ.TO.BLOCK, label: V.intl.string(V.t["D/157Y"]) },
        ],
        u = [{ value: eJ.TO.BLUR, label: V.intl.string(V.t.S49Uad) }],
        d = { value: eJ.TO.SHOW, label: V.intl.string(V.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? V.intl.string(Nq.default["6Af/cw"]) : void 0 };
    return (0, f.jsxs)(yX.E, {
        description: V.intl.string(V.t.Wnojv1),
        children: [
            (0, f.jsx)(yz.A, {
                title: V.intl.string(V.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, f.jsx)(yz.A, {
                title: V.intl.string(V.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, f.jsx)(yz.A, {
                title: V.intl.string(V.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? V.intl.string(Nq.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function yY() {
    let e,
        t = (0, yB.A)() ?? !0,
        n = (0, Cd.uM)(),
        i = (0, Cd.uM)(),
        {
            goreContentGuilds: l,
            goreContentFriendDm: s,
            goreContentNonFriendDm: r,
        } = ((e = (0, os.cf)([aR.A], () => aR.A.settings.textAndImages?.goreContentSettings ?? (0, yO.T4)())),
        {
            goreContentGuilds: (0, yO.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, yO.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, yO.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yw.hK)() && t.includes(eJ.TO.SHOW)
            ? _$.A.showAgeVerificationGetStartedModal({ entryPoint: yb.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yO.qY)(e);
    }
    let o = [
            { value: eJ.TO.BLUR, label: V.intl.string(V.t.S49Uad) },
            { value: eJ.TO.BLOCK, label: V.intl.string(V.t["D/157Y"]) },
        ],
        u = [{ value: eJ.TO.BLUR, label: V.intl.string(V.t.S49Uad) }],
        d = { value: eJ.TO.SHOW, label: V.intl.string(V.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? V.intl.string(Nq.default["6Af/cw"]) : void 0 };
    return (0, f.jsxs)(yX.E, {
        description: V.intl.string(V.t.XgH9eh),
        children: [
            (0, f.jsx)(yz.A, {
                title: V.intl.string(V.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, f.jsx)(yz.A, {
                title: V.intl.string(V.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, f.jsx)(yz.A, {
                title: V.intl.string(V.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? V.intl.string(Nq.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var yW = n(875162),
    yK = n(636745);
let yZ = (0, h.E2)(S.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, yO.WX)(),
            t = x.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: V.intl.string(V.t.GYpoAq),
                        component: yH,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: V.intl.string(V.t["16/3Bi"]),
                        component: yY,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, f.jsxs)(yr.h, {
            children: [
                (0, f.jsx)(yr._, {
                    header: V.intl.string(V.t["Hj/But"]),
                    description: V.intl.format(V.t.dliU4j, { learnMoreLink: eC.A.getArticleURL(e) }),
                }),
                (0, f.jsx)(yW.A, { tabs: t, orientation: "vertical", tabsClassName: yK.v }),
            ],
        });
    },
    useSearchTerms: () => [
        V.intl.string(V.t["Hj/But"]),
        V.intl.string(V.t["N/oRI+"]),
        V.intl.string(V.t.QVdYsK),
        V.intl.string(V.t["aWD+tu"]),
        V.intl.string(V.t["5mnTa7"]),
        V.intl.string(V.t["K0OWP+"]),
    ],
});
var yq = n(639555),
    yQ = n(617641),
    yJ = n(546140),
    y$ = n(406935),
    y0 = n(594061);
let y1 = (0, h.zD)(S.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => V.intl.string(V.t.qFsx5q),
        useSubtitle: () => V.intl.format(V.t.lunaRv, { learnMoreLink: eC.A.getArticleURL(_.MVz.SAFETY_ALERTS) }),
        useValue: yJ.L,
        setValue: function (e) {
            return y0.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = y$._t.create({ value: e });
                },
                y0.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, yQ.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, yq.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, yB.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    y2 = (0, h.zZ)(S.X.CONTENT_CATEGORY, {
        useTitle: () => V.intl.string(V.t["3upKU8"]),
        useInlineNotice: function () {
            var e;
            let t,
                n,
                i,
                l,
                s,
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
                S = CA(),
                T =
                    ((l = (0, Cd.uM)()),
                    (s = (0, br.fk)()),
                    (r = (0, bs.b8)()),
                    (a = (0, NK.Z)()),
                    (o = yy(Cm.YA.AGE_CONFIRMATION_NOTICE, _1)),
                    (u = yC(Cm.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _Q.M0)),
                    (d = x.useCallback(() => {
                        (0, Cg.N)(Cm.YA.AGE_CONFIRMATION_NOTICE, Cm.YX.VIEWED);
                    }, [])),
                    (c = x.useCallback(() => {
                        (0, Cg.N)(Cm.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Cm.YX.VIEWED);
                    }, [])),
                    x.useMemo(() => {
                        if (!l && (0, _2.x)(_0.LI)) {
                            if (s && !r)
                                return {
                                    type: p.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    trackView: d,
                                    text: V.intl.format(_5.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: { text: V.intl.string(_5.default["cI+bc/"]), onClick: o.handleConfirmAge },
                                };
                            if (a)
                                return {
                                    type: p.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    trackView: c,
                                    text: V.intl.format(_5.default.HBnyJM, { handleOnAgeGatedContentHook: u }),
                                };
                        }
                    }, [s, l, a, r, u, c, d, o])),
                I =
                    ((e = (0, NK.Z)()),
                    (t = (0, yO.WX)()),
                    (n = x.useCallback(() => {
                        (window.open(eC.A.getArticleURL(t), "_blank"),
                            (0, Cg.N)(Cm.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Cm.YX.LEARN_MORE));
                    }, [t])),
                    (i = x.useCallback(() => {
                        (0, Cg.N)(Cm.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Cm.YX.VIEWED);
                    }, [])),
                    x.useMemo(() => {
                        if (e)
                            return {
                                type: p.lT.INLINE_NOTICE,
                                noticeType: "info",
                                role: "none",
                                trackView: i,
                                text: V.intl.format(V.t.EUo0yj, {
                                    hook: (e, t) => (0, f.jsx)(nr.Anchor, { onClick: n, children: e }, t),
                                }),
                            };
                    }, [n, e, i])),
                _ =
                    ((g = (0, br.SJ)()),
                    (m = (0, bs.b8)()),
                    (A = g && !m),
                    (E = x.useCallback(() => {
                        (_$.A.showAgeVerificationGetStartedModal({ entryPoint: yb.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, Cg.N)(Cm.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, Cm.YX.LEARN_MORE));
                    }, [])),
                    (h = x.useCallback(() => {
                        (0, Cg.N)(Cm.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, Cm.YX.VIEWED);
                    }, [])),
                    x.useMemo(() => {
                        if (A)
                            return {
                                type: p.lT.INLINE_NOTICE,
                                noticeType: "info",
                                role: "none",
                                trackView: h,
                                text: V.intl.format(V.t.OX4ybh, {
                                    hook: (e, t) => (0, f.jsx)(nr.Anchor, { onClick: E, children: e }, t),
                                }),
                            };
                    }, [E, A, h])),
                b = yD();
            return S ?? T ?? b ?? _ ?? I;
        },
        buildLayout: () => [yZ, y1, yM, yU, yk],
    });
var y3 = n(923457),
    y5 = n(750714);
let y4 = (0, h.Qx)(S.X.DM_SPAM_SETTING, {
        useTitle: () => V.intl.string(V.t.puwSkY),
        useSubtitle: () => V.intl.string(V.t["+sXN3T"]),
        useValue: function () {
            let e = U.he.useSetting(),
                t = U.cj.useSetting(),
                n = (0, I.bG)([sE.default], () => sE.default.getCurrentUser()),
                i = (0, br.yv)(y3.p.SPAM_FILTERS);
            return e !== eJ.he.DEFAULT_UNSET
                ? e
                : n?.nsfwAllowed === !1 && i
                  ? eJ.he.FRIENDS_AND_NON_FRIENDS
                  : (y5.xY.get(t) ?? eJ.he.NON_FRIENDS);
        },
        setValue: (e) => U.he.updateSetting(e),
        useOptions: function () {
            return [
                { name: V.intl.string(V.t["+w5yKk"]), value: eJ.he.FRIENDS_AND_NON_FRIENDS },
                { name: V.intl.string(V.t.yAPg6r), value: eJ.he.NON_FRIENDS },
                { name: V.intl.string(V.t.FEXKsv), value: eJ.he.DISABLED },
            ];
        },
        useSearchTerms: () => [V.intl.string(V.t.JzaP4h), V.intl.string(V.t.H9XOl3), V.intl.string(V.t.k4W40P)],
    }),
    y6 = (0, h.zD)(S.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
        useTitle: () => V.intl.string(V.t["7x9dyE"]),
        useValue: function () {
            let e = U.FA.useSetting();
            return x.useMemo(() => (0, ii.Lx)(e), [e]).all;
        },
        setValue: function (e) {
            U.FA.updateSetting(e ? 14 : 14 & ~_.dzt.NO_RELATION);
        },
        useDisabled: function () {
            return (0, Cd.uM)();
        },
    }),
    y8 = (0, h.zD)(S.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => V.intl.string(V.t.NfeuZ3),
        useValue: function () {
            let e = U.FA.useSetting(),
                t = x.useMemo(() => (0, ii.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = U.FA.getSetting();
            U.FA.updateSetting(e ? uf.UI(t, _.dzt.MUTUAL_FRIENDS) : uf.iE(t, _.dzt.MUTUAL_FRIENDS, _.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, Cd.uM)();
        },
    }),
    y7 = (0, h.zD)(S.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => V.intl.string(V.t.qsMfsH),
        useSubtitle: () => V.intl.string(V.t["6DqAp0"]),
        useValue: function () {
            let e = U.FA.useSetting(),
                t = x.useMemo(() => (0, ii.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = U.FA.getSetting();
            U.FA.updateSetting(e ? uf.UI(t, _.dzt.MUTUAL_GUILDS) : uf.iE(t, _.dzt.MUTUAL_GUILDS, _.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, Cd.uM)();
        },
    }),
    y9 = (0, h.FW)(S.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => V.intl.string(V.t.wTdS6S),
        buildLayout: () => [y6, y8, y7],
    });
var ve = n(420825);
let vt = (0, h.zD)(S.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => V.intl.string(V.t["jK+wdr"]),
        useSubtitle: () => V.intl.string(V.t["RYh/pW"]),
        useValue: () => !(0, ve.q)(),
        setValue: function (e) {
            U.Zd.updateSetting(!e);
        },
    }),
    vn = (0, h.zZ)(S.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["5gxWrt"]),
        useSubtitle: () => V.intl.string(V.t.QVbF3l),
        useSubnavLabel: () => V.intl.string(V.t.fyA115),
        useInlineNotice: CA,
        buildLayout: () => [y9, vt],
    });
var vi = n(994500),
    vl = n(49229),
    vs = n(730134),
    vr = n(276573);
function va(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, f.jsxs)("div", {
        className: vr.wx,
        children: [
            (0, f.jsx)("div", {
                className: vr.zc,
                children: i ? (0, f.jsx)(xa.DenyIcon, {}) : (0, f.jsx)(CK.EyeSlashIcon, {}),
            }),
            (0, f.jsxs)("div", {
                className: vr.Qq,
                children: [
                    (0, f.jsx)(n5.E, {
                        variant: "body-md/semibold",
                        color: "interactive-text-active",
                        children: V.intl.string(i ? V.t.PFOUKW : V.t["93ZDWE"]),
                    }),
                    (0, f.jsx)(n5.E, {
                        variant: "body-md/medium",
                        color: "text-default",
                        children: i
                            ? V.intl.format(V.t["r91W/h"], { numberOfBlockedUsers: n })
                            : V.intl.format(V.t.rXUeOl, { numberOfIgnoredUsers: n }),
                    }),
                ],
            }),
        ],
    });
}
function vo(e) {
    let { userId: t, last: n } = e,
        i = (0, I.bG)([vi.A], () => vi.A.isBlocked(t)),
        l = (0, I.bG)([sE.default], () => sE.default.getUser(t)),
        [s, r] = x.useState(!1),
        a = x.useCallback(() => {
            (r(!0),
                i
                    ? vl.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : vl.A.unignoreUser(t, tk.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == l
        ? null
        : (0, f.jsxs)("div", {
              className: ic()(vr.nM, { [vr.fW]: n }),
              children: [
                  (0, f.jsxs)("div", {
                      className: vr.eF,
                      children: [
                          (0, f.jsx)(vs.A, { user: l, size: v._3.SIZE_40 }),
                          (0, f.jsxs)("div", {
                              className: vr.Qq,
                              children: [
                                  (0, f.jsx)(n5.E, {
                                      variant: "body-md/semibold",
                                      color: "text-strong",
                                      children: l.globalName ?? l.username,
                                  }),
                                  (0, f.jsx)(n5.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: null != l.globalName ? l.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, f.jsx)(j.$, {
                      variant: "secondary",
                      text: V.intl.string(i ? V.t.XyHpKH : V.t["8wXU9B"]),
                      onClick: a,
                      loading: s,
                  }),
              ],
          });
}
function vu(e) {
    let { userIds: t, listType: n } = e,
        [i, l] = x.useState(5);
    return (0, f.jsx)(yr.h, {
        children: (0, f.jsxs)("div", {
            className: vr.Nr,
            children: [
                (0, f.jsx)(va, { listType: n, numberOfUsers: t.length }),
                (0, f.jsx)("div", {
                    className: vr.jS,
                    children: t.slice(0, i).map((e, n) => (0, f.jsx)(vo, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, f.jsx)("div", {
                          className: vr.vM,
                          children: (0, f.jsx)(n4.D, {
                              onClick: function () {
                                  l((e) => e + 5);
                              },
                              className: vr.Qf,
                              children: (0, f.jsx)(n5.E, {
                                  variant: "body-sm/semibold",
                                  color: "text-default",
                                  children: V.intl.format(V.t.jULEDr, {
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
let vd = (0, h.E2)(S.X.BLOCKED_USERS, {
        useSearchTerms: () => [V.intl.string(V.t.PFOUKW)],
        usePredicate: () => (0, I.bG)([vi.A], () => vi.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, I.yK)([vi.A], () => vi.A.getBlockedIDs());
            return (0, f.jsx)(vu, { userIds: e, listType: "blocked" });
        },
    }),
    vc = (0, h.E2)(S.X.IGNORED_USERS, {
        useSearchTerms: () => [V.intl.string(V.t["93ZDWE"])],
        usePredicate: () => (0, I.bG)([vi.A], () => vi.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, I.yK)([vi.A], () => vi.A.getIgnoredIDs());
            return (0, f.jsx)(vu, { userIds: e, listType: "ignored" });
        },
    }),
    vg = (0, h.zZ)(S.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["+Iryf3"]),
        useSubtitle: () =>
            V.intl.format(V.t["0aNQo9"], { helpArticle: eC.A.getArticleURL(_.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [vd, vc],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, I.cf)([vi.A], () => ({
                hasBlockedUsers: vi.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: vi.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var vm = n(22385),
    vA = n(556534),
    vE = n(111159),
    vh = n(152056),
    vS = n(428031),
    vT = n(978433);
let vp = { label: () => V.intl.string(V.t["32u1Dx"]), value: "0" };
var vf = n(307863),
    vx = n(954225);
function vI() {
    return (0, vf.e)() ? V.intl.string(V.t.PMsfcH) : V.intl.string(V.t.RAQUSN);
}
function v_(e, t) {
    td.default.track(_.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let vb = (0, h.zD)(S.X.PERMISSIONS_DMS_SETTING, {
    useTitle: vI,
    useSubtitle: function () {
        let e = (0, vA.Tx)(),
            t = (0, vA.q9)(),
            n = (0, vf.e)();
        return "0" === e
            ? n
                ? V.intl.string(V.t.XXGmuB)
                : V.intl.string(V.t.wbYDfT)
            : t
              ? V.intl.string(V.t.V0ka0Q)
              : n
                ? V.intl.string(V.t.F9WY3f)
                : V.intl.string(V.t.G7c3Xo);
    },
    useValue: function () {
        let e = (0, vA.Tx)(),
            t = U.$s.useSetting().includes(e),
            n = (0, vS.K)();
        return "0" === e ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, Cd.uM)();
        return "0" === (0, vA.Tx)() && e;
    },
    setValue: function (e) {
        let t = vm.xk.getState().selectedGuildId;
        if ("0" === t) {
            var n;
            ((n = !e),
                (0, CV.O)({
                    header: V.intl.string(V.t["uUr+GR"]),
                    body: V.intl.string(V.t.hjGJBp),
                    confirmText: V.intl.string(V.t.gm1Vej),
                    cancelText: V.intl.string(V.t.p89ACt),
                    confirmButtonColor: s2.$n.Colors.BRAND,
                    onConfirm: function () {
                        (U.n6.updateSetting(n), v_(n, !1));
                    },
                    onCancel: function () {
                        (U.n6.updateSetting(n), U.$s.updateSetting(n ? lv.A.getGuildIds() : []), v_(n, !0));
                    },
                }));
        } else {
            let n = (0, ii.Tb)();
            (e ? n.delete(t) : n.add(t),
                U.$s.updateSetting(Array.from(n)),
                td.default.track(_.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: vx.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eR.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var vN = n(116774),
    vC = n(953298);
function vy(e, t) {
    td.default.track(_.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function vv() {
    return V.intl.string(V.t["3o2ojh"]);
}
let vj = (0, h.zD)(S.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: vv,
        useSubtitle: function () {
            let e = (0, vA.q9)(),
                t = eC.A.getArticleURL(_.MVz.MESSAGE_REQUESTS);
            return e
                ? V.intl.format(V.t.WpnWLc, { helpdeskArticle: t })
                : V.intl.format(V.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, vA.Tx)(),
                t = (0, vS.K)(),
                n = U.$s.useSetting().includes(e),
                i = (0, vN.s)(),
                l = (0, Cd.uM)(),
                s = U.YX.useSetting(),
                r = U.Zr.useSetting().includes(e);
            return !!i || ("0" === e && l ? !s : "0" === e ? !t && !s : !n && !r);
        },
        useDisabled: function () {
            let e = (0, vA.Tx)(),
                t = (0, Cd.uM)(),
                n = (0, vS.K)(),
                i = U.$s.useSetting().includes(e),
                l = (0, vN.s)();
            return "0" === e ? n || t || l : i || l;
        },
        setValue: function (e) {
            let t = vm.xk.getState().selectedGuildId;
            if (!e && (0, vC.w)())
                return void _$.A.showAgeVerificationGetStartedModal({ entryPoint: yb.q1.MESSAGE_REQUESTS_SETTINGS });
            if ("0" === t) {
                var n;
                ((n = !e),
                    (0, CV.O)({
                        header: V.intl.string(V.t.yAfu1p),
                        body: V.intl.string(V.t.Ry2z74),
                        confirmText: V.intl.string(V.t.gm1Vej),
                        cancelText: V.intl.string(V.t.p89ACt),
                        confirmButtonColor: s2.$n.Colors.BRAND,
                        onConfirm: function () {
                            (U.YX.updateSetting(n), vy(n, !1));
                        },
                        onCancel: function () {
                            (U.YX.updateSetting(n), U.Zr.updateSetting(n ? lv.A.getGuildIds() : []), vy(n, !0));
                        },
                    }));
            } else {
                let n = (0, ii.xo)();
                (e ? n.delete(t) : n.add(t),
                    U.Zr.updateSetting(Array.from(n)),
                    td.default.track(_.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: vx.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eR.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    vO = (0, h.E2)(S.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [vI(), vv()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, vm.xk)(),
                l = (0, I.bG)([g4.Ay], () => g4.Ay.getFlattenedGuildIds()),
                s = (0, I.bG)([lv.A], () => lv.A.getGuilds()),
                r =
                    ((e = U.$s.useSetting()),
                    (t = (0, vS.K)()),
                    (0, I.bG)(
                        [lv.A],
                        () => {
                            let n = new Set(e);
                            return lv.A.getGuildIds().filter((e) => n.has(e) !== t).length;
                        },
                        [e, t],
                    )),
                a = l[0];
            x.useEffect(
                () =>
                    vh.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = vm.xk.getState().selectedGuildId;
                            "" === t && "" !== e && "0" === n && null != a ? i(a) : "" === e && "0" !== n && i("0");
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = x.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...vp,
                        id: vp.value,
                        label: vp.label(),
                        leading: (0, f.jsx)("div", {
                            className: vT.KP,
                            children: (0, f.jsx)(vE.ClydeIcon, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: vT.cl,
                            }),
                        }),
                    }),
                    l.forEach((t) => {
                        let n = s[t];
                        null != n &&
                            e.push({
                                id: n.id,
                                label: n.name,
                                value: n.id,
                                leading: (0, f.jsx)(ma.Ay, {
                                    className: vT.cl,
                                    guild: n,
                                    size: ma.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            });
                    }),
                    e
                );
            }, [l, s]);
            return (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)(fy.Z, {
                        selectionMode: "single",
                        onSelectionChange: function (e) {
                            i(e);
                        },
                        value: n,
                        options: o,
                    }),
                    "0" === n &&
                        r > 0 &&
                        (0, f.jsx)(n5.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            className: vT.h_,
                            children: V.intl.format(V.t.uyBKps, {
                                count: r,
                                countHook: (e, t) =>
                                    (0, f.jsx)(
                                        n5.E,
                                        { tag: "span", variant: "body-sm/normal", color: "text-default", children: e },
                                        t,
                                    ),
                            }),
                        }),
                ],
            });
        },
    }),
    vR = (0, h.E2)(S.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            let e = (0, vA.Tx)(),
                t = yv();
            return "0" === e && null != t;
        },
        Component: function () {
            let e = yv(),
                t = yy(Cm.YA.AGE_CONFIRMATION_NOTICE, _1),
                n = yC(Cm.YA.CONTENT_AND_SOCIAL_NOTICE, _Q.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, f.jsx)(yN, {
                        noticeType: Cm.YA.AGE_CONFIRMATION_NOTICE,
                        body: V.intl.format(_5.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        button: { text: V.intl.string(_5.default["cI+bc/"]), onClick: t.handleConfirmAge },
                    });
                case "teen":
                    return (0, f.jsx)(yN, {
                        noticeType: Cm.YA.CONTENT_AND_SOCIAL_NOTICE,
                        body: V.intl.format(_5.default["5KHq55"], { handleOnAgeGatedContentHook: n }),
                    });
                case void 0:
                    return null;
            }
        },
    }),
    vD = (0, h.zZ)(S.X.PERMISSIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Y5GYcX),
        useSubnavLabel: () => V.intl.string(V.t.YUU0RF),
        useInlineNotice: function () {
            let e = CA(),
                t = yD();
            if ("0" === (0, vA.Tx)()) return e ?? t;
        },
        buildLayout: () => [vO, vb, vj, vR],
    }),
    vL = (0, h.zZ)(S.X.SPAM_FILTERS_CATEGORY, { useTitle: () => V.intl.string(V.t.Qwuoic), buildLayout: () => [y4] }),
    vP = (0, h.zZ)(S.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = y_();
            function t(e, t) {
                return (0, f.jsx)(
                    n5.E,
                    { tag: "span", variant: "body-sm/normal", color: "text-default", children: e },
                    t,
                );
            }
            return 0 === e.length
                ? V.intl.string(V.t.Amr1IZ)
                : 1 === e.length
                  ? V.intl.format(V.t["60IaC2"], { gameName: e[0].name, gameListHook: t })
                  : 2 === e.length
                    ? V.intl.format(V.t.lthjd7, { game1: e[0].name, game2: e[1].name, gameListHook: t })
                    : V.intl.format(V.t.RAUmQM, {
                          game1: e[0].name,
                          game2: e[1].name,
                          remaining: e.length - 2,
                          gameListHook: t,
                      });
        },
        useSubnavLabel: () => V.intl.string(V.t.YpCiMt),
        useHeaderDecoration: () => {
            let e = (function () {
                let { sortedGames: e } = y_();
                return x.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, f.jsx)("img", {
                                src: M.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: 48,
                                height: 48,
                            }),
                            shape: S_.e.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, f.jsx)("img", {
                                    src: M.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: 40,
                                    height: 40,
                                }),
                                shape: S_.e.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: p.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [V.intl.string(V.t.YpCiMt)],
        initialize: () => {
            Tn.A.fetch();
        },
        buildLayout: () => [yx, yI, yp, yA],
    }),
    vG = (0, h.t_)(S.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.Cz07t8),
        buildLayout: () => [y2, vL, vD, vn, vP, vg],
    }),
    vM = (0, h.i4)(S.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Cz07t8),
        icon: yg.ChatShieldIcon,
        buildLayout: () => [vG],
    });
var vU = n(782603),
    vV = n(899847),
    vk = n(695515);
let vw = (0, h.Hn)(S.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => V.intl.string(V.t["8rHeOr"]),
        useSubtitle: () => V.intl.string(V.t["eJE6+J"]),
        useValue: U.cU.useSetting,
        setValue: U.cU.updateSetting,
        useOptions: () =>
            W.range(1, 11).map((e) => ({
                id: e.toString(),
                value: 60 * e,
                label: V.intl.formatToPlainString(V.t.iXLF9W, { minutes: e }),
            })),
    }),
    vF = (0, h.zD)(S.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => V.intl.string(V.t["btbS+Z"]),
        useSubtitle: () =>
            V.intl.format(V.t.Q5crhR, { onClick: () => (0, na.openUserSettings)(S.X.TTS_PLAYBACK_RATE) }),
        useValue: U.on.useSetting,
        setValue: U.on.updateSetting,
    }),
    vB = (0, h.Qx)(S.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.JZxxGx),
        useSubtitle: () => V.intl.string(V.t.HDLtJl),
        useValue: () => (0, I.bG)([aF.A], () => aF.A.getTTSType()),
        setValue: (e) => aY.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: V.intl.string(V.t.B1AGeJ), value: _.aVn.ALL_CHANNELS },
                { name: V.intl.string(V.t.uzZg9e), value: _.aVn.SELECTED_CHANNEL },
                { name: V.intl.string(V.t.DYO5Oi), value: _.aVn.NEVER },
            ];
        },
        usePredicate: () => Y.$j,
    }),
    vX = S.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    vz = (0, h.bd)(vX, {
        useTitle: (e) => (e ? V.intl.string(V.t.RyimDk) : V.intl.string(V.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return tI(vX, {
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
        buildLayout: () => [vw, vF, vB],
    }),
    vH = (0, h.zZ)(S.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => V.intl.string(V.t["31DySj"]),
        buildLayout: () => [vz],
    }),
    vY = (0, h.zD)(S.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => V.intl.string(V.t.VH8AIJ),
        useSubtitle: () => V.intl.string(V.t["9K4qwX"]),
        useValue: function () {
            return (0, I.bG)([aF.A], () => !aF.A.getDisableUnreadBadge());
        },
        setValue: (e) => aY.default.setDisableUnreadBadge(!e),
    }),
    vW = (0, h.zZ)(S.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.l6w3Vj),
        buildLayout: () => [vY],
    });
var vK = n(840559),
    vZ = n(997187);
let vq = (0, EM.mj)({
    kind: "user",
    name: "2026-09-update-email-settings-copy-subtext",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var vQ = n(723923);
let vJ = vQ.px.map((e) =>
        (0, h.zD)(`${S.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, I.cf)([vZ.A], () => vZ.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, vK.CA)(e.category, t),
        }),
    ),
    v$ = (0, h.Tf)(S.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => V.intl.string(V.t.Ra9Pwk),
        useLabel: () => V.intl.string(V.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, I.cf)([vZ.A], () => vZ.A.getEmailSettings());
            return vQ.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, vK.NI)(),
        useVariant: () => "critical-secondary",
    }),
    v0 = (0, h.zZ)(S.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => V.intl.string(V.t["w/qqKK"]),
        useSubtitle: function () {
            let { enabled: e } = vq.useConfig({ location: "Email Settings Category" });
            return e ? V.intl.string(V.t.WViBDk) : void 0;
        },
        initialize: function () {
            let { initialized: e } = vZ.A.getEmailSettings();
            e || (0, vK.cR)();
        },
        buildLayout: () => [...vJ, v$],
    }),
    v1 = (0, h.zD)(S.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t["/0WCll"]),
        useSubtitle: () => V.intl.string(V.t.wF9ih3),
        useValue: function () {
            return (0, I.bG)([aF.A], () => aF.A.getDesktopType()) !== _.nRU.NEVER;
        },
        setValue: (e) => aY.default.setDesktopType(e ? _.nRU.ALL : _.nRU.NEVER),
    });
var v2 = n(832712),
    v3 = n(543465),
    v5 = n(790782);
let v4 = (0, h.zD)(S.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => V.intl.string(V.t["k6m/si"]),
    useSubtitle: () => V.intl.string(V.t.LGynPs),
    useValue: () => (0, I.bG)([v3.Ay], () => v3.Ay.useNewNotifications),
    setValue: function (e) {
        (v2.A.setAccountFlag(SL.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (hV.w.set("turnedOffNewNotifications", !0),
                td.default.track(_.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: lv.A.getGuildsArray().filter(
                        (e) => v3.Ay.resolveGuildUnreadSetting(e) === v5.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, I.bG)(
            [sE.default, v3.Ay],
            () =>
                sE.default.getCurrentUser()?.isStaff() ||
                sE.default.getCurrentUser()?.isStaffPersonal() ||
                v3.Ay.useNewNotifications,
        ),
});
var v6 = n(534654);
let v8 = (0, h.zD)(S.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => V.intl.string(V.t.z9h8Ym),
        useSubtitle: () => V.intl.string(V.t.TummoQ),
        useValue: () => (0, I.bG)([aF.A], () => aF.A.screenDowntimeReminder),
        setValue: (e) => aY.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, v6.A)(),
                t = (0, NH.Du)();
            return e && t;
        },
    }),
    v7 = (0, h.zD)(S.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => V.intl.string(V.t.onrAy7),
        useSubtitle: () => V.intl.string(V.t["/071J7"]),
        useValue: U.gY.useSetting,
        setValue: (e) => U.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, v6.A)(),
                t = (0, NH.Du)();
            return e && t;
        },
    }),
    v9 = (0, h.zD)(S.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.NjOMvh),
        useValue: U.oz.useSetting,
        setValue: function (e) {
            (U.oz.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SL.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [V.intl.string(V.t.hi4dSk)],
    }),
    je = (0, h.zD)(S.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.sQQgFj),
        useValue: U.NR.useSetting,
        setValue: function (e) {
            (U.NR.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SL.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    jt = (0, h.zD)(S.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.FSNIvs),
        useValue: U.Yh.useSetting,
        setValue: function (e) {
            (U.Yh.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SL.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    jn = (0, h.zD)(S.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.xBLMhQ),
        useValue: U.T3.useSetting,
        setValue: function (e) {
            (U.T3.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SL.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var ji = n(815807);
let jl = (0, h.Hn)(S.X.REACTION_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: V.intl.string(V.t["9x/RtT"]), value: eJ.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: V.intl.string(V.t.fJAbQd), value: eJ.Tz.ONLY_DMS },
            { id: "disabled", label: V.intl.string(V.t["xu+UDU"]), value: eJ.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: U.Zp.useSetting,
        setValue: (e) => (0, ji.n4)(e, U.Zp.getSetting()),
    }),
    js = (0, h.zD)(S.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t["k51K1+"]),
        useValue: U.Qr.useSetting,
        setValue: function (e) {
            (U.Qr.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SL.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    jr = (0, EM.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    ja = (0, h.zD)(S.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.G8NPz6),
        useValue: U.zS.useSetting,
        setValue: function (e) {
            (U.zS.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SL.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => jr.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    jo = (0, h.FW)(S.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.FEVRDV),
        buildLayout: () => [jt, v9, je, js, ja, jn, jl],
    }),
    ju = (0, h.zD)(S.X.TASK_BAR_FLASHING, {
        useTitle: () => V.intl.string(V.t.xSmFQG),
        useSubtitle: () => V.intl.string(V.t.bd4j4x),
        useValue: () => (0, I.bG)([aF.A], () => aF.A.taskbarFlash),
        setValue: (e) => aY.default.setTaskbarFlash(e),
        usePredicate: () => (0, nh.uF)(),
    }),
    jd = (0, h.zZ)(S.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => V.intl.string(V.t["/dp6yY"]),
        buildLayout: () => [v1, ju, jo, v4, v7, v8],
    });
var jc = n(965957),
    jg = n(312671),
    jm = n(235079);
let jA = (0, h.zD)(S.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = aB.A.useHolidaySoundpack();
        return null == e ? "" : V.intl.format(V.t["E/OyBr"], { soundpack: V.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, I.bG)([jg.A], () => jg.A.getSoundpack()),
            t = aB.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = aB.A.getHolidaySoundpack();
        (tE()(null != t, "predicate should fail if no soundpack is available"), (0, jc.p)(e ? t : jm.i.CLASSIC));
    },
    usePredicate: aB.A.useIsEligible,
});
var jE = n(970931);
let jh = {
        useTitle: () => V.intl.string(V.t.jD1qzM),
        sound: "message1",
        useDisabled: jE.kB,
        useDisabledMessage: () => ((0, jE.kB)() ? V.intl.string(V.t.cIRG0s) : void 0),
    },
    jS = { useTitle: () => V.intl.string(V.t.XBrJT6), sound: "call_ringing" },
    jT = (0, h.zD)(S.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.TzjwV9),
        useSubtitle: () => V.intl.format(V.t.OOiGCM, { onClick: () => aZ("message3") }),
        useValue: () =>
            (0, I.bG)([aF.A], () => aF.A.getNotifyMessagesInSelectedChannel() && !aF.A.getDisableAllSounds()),
        setValue: (e) => aY.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, I.bG)([aF.A], () => aF.A.getDisableAllSounds()),
    }),
    jp = (0, h.zD)(S.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => V.intl.string(V.t["2ZhCOd"]),
        useSubtitle: () => V.intl.string(V.t.EAKdPr),
        useValue: () => (0, I.bG)([aF.A], () => aF.A.getDisableAllSounds()),
        setValue: (e) => aY.default.toggleDisableAllSounds(e),
    }),
    jf = (0, h.D1)(S.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                aK();
            };
        },
        buildLayout: () => [aq(jh), jT, aq(jS), jp],
    }),
    jx = (0, h.AK)(S.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t["MMy+lm"]),
        useSearchTerms: () => [V.intl.string(V.t["MMy+lm"])],
        destinationKey: S.X.SOUNDS_CATEGORY,
    }),
    jI = (0, h.gN)(S.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [jx] }),
    j_ = (0, h.zZ)(S.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.LweOYy),
        buildLayout: () => [jA, jf, jI],
    }),
    jb = (0, h.t_)(S.X.NOTIFICATIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.HcoRu0),
        initialize: () => {
            null != vk.A.getAgeGroup() || vk.A.isLoading() || (vk.A.canRefetch() && vV.Ay.initialPageLoad());
        },
        buildLayout: () => [jd, j_, vW, v0, vH],
    }),
    jN = (0, h.i4)(S.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.HcoRu0),
        icon: vU.BellIcon,
        buildLayout: () => [jb],
    }),
    jC = (0, h.WI)(S.X.USER_SECTION, {
        useTitle: () => V.intl.string(V.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [Ce, yc, vM, jN],
    });
var jy = n(387758),
    jv = n(271866),
    jj = n(147964),
    jO = n(868511);
let jR = (0, h.zD)(S.X.APPLICATION_TEST_MODE, {
        useTitle: () => V.intl.string(V.t.erOqlh),
        useSubtitle: () => V.intl.string(V.t["52hMnD"]),
        usePredicate: U.Q_.useSetting,
        useValue: () => (0, I.bG)([jj.A], () => null != jj.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, lp.qf)((e) => (0, f.jsx)(jO.A, { ...e })) : jv.cL();
        },
    }),
    jD = (0, h.zD)(S.X.DEVELOPER_MODE, {
        useTitle: () => V.intl.string(V.t.ObIb1Q),
        useSubtitle: () => V.intl.format(V.t["CY6q/Q"], { apiDocsUrl: _.X7G.API_DOCS }),
        useValue: U.Q_.useSetting,
        setValue: U.Q_.updateSetting,
        usePredicate: () => uk.p5,
    }),
    jL = (0, h.zZ)(S.X.DEVELOPER_CATEGORY, { buildLayout: () => [jD, jR] }),
    jP = (0, h.t_)(S.X.DEVELOPER_PANEL, { useTitle: () => V.intl.string(V.t["0BRxRp"]), buildLayout: () => [jL] }),
    jG = (0, h.i4)(S.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: jy.AngleBracketsIcon,
        useTitle: () => V.intl.string(V.t["0BRxRp"]),
        buildLayout: () => [jP],
    });
var jM = n(70688),
    jU = n(830215);
let jV = (0, h.i4)(S.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => V.intl.string(V.t["2jxGer"]),
        icon: jM.DoorExitIcon,
        onClick: () => {
            (0, n2.A)({
                title: V.intl.string(V.t["2jxGer"]),
                subtitle: V.intl.string(V.t.SUnWBB),
                confirmText: V.intl.string(V.t["2jxGer"]),
                onConfirm: () => {
                    jU.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    jk = (0, h.WI)(S.X.UTILITY_SECTION, {
        useTitle: () => V.intl.string(V.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [jG, jV],
    }),
    jw = (0, h.Hr)({ buildLayout: () => [_W, jC, E6, oE, xT, Sf, jk], analyticsKey: "user_settings" });
