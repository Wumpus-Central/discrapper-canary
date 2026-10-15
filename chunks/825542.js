n.d(t, { D: () => vq });
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
    p = n(107384),
    S = n(477900),
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
        (0, S.jsx)(v.$, {
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
            return (0, S.jsxs)(Z.B, {
                gap: 16,
                children: [
                    (0, S.jsx)(q.A, {
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
                                ? (0, S.jsx)(Q.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: U.intl.string(U.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, S.jsx)(Q.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: U.intl.string(U.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, S.jsx)(Q.E, {
                                          variant: "text-xs/medium",
                                          color: "text-feedback-positive",
                                          children: "x1.0",
                                      })
                                    : e % 1 == 0
                                      ? ""
                                      : void 0,
                    }),
                    (0, S.jsx)(es, {}),
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
        { badgeType: p.Xi.NEW, dismissibleContent: eA.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
    ],
});
var eh = n(406360),
    ex = n(964404);
let ep = (0, E.Qx)(h.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => U.intl.string(U.t.nemtgW),
        useSubtitle: () => U.intl.string(U.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: p.Xi.BETA }),
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
    eS = (0, E.Hn)(h.X.OFFICIAL_MESSAGE_STYLE, {
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
        buildLayout: () => [ef, ed, eE, eg, eb, ep, eT, eS, em, eo],
    });
var ej = n(397438),
    eO = n(355097),
    eL = n(141531);
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
    eX = n(701974);
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
            type: p.t9.STRONGLY_DISCOURAGED_CUSTOM,
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
                return (0, S.jsx)(_.M, {
                    children: (0, S.jsxs)("section", {
                        "aria-label": U.intl.string(U.t.RC22qg),
                        children: [
                            (0, S.jsx)(N.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: V.Vf,
                                children: U.intl.string(U.t.RC22qg),
                            }),
                            (0, S.jsxs)(C.Ip, {
                                className: V.VH,
                                children: [
                                    (0, S.jsx)("ol", {
                                        className: V.DZ,
                                        style: { gap: i },
                                        "aria-label": U.intl.string(U.t.xfjsEV),
                                        children: n.map((t) =>
                                            (0, S.jsx)(
                                                "li",
                                                {
                                                    children: (0, S.jsx)(D.A, {
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
                                    (0, S.jsxs)("div", {
                                        className: V.Jb,
                                        children: [
                                            (0, S.jsx)("div", {
                                                className: V.HD,
                                                children: w.map((e) => {
                                                    let { status: t, discriminator: n, mobile: i = !1 } = e;
                                                    return (0, S.jsx)(
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
                                            (0, S.jsx)(v.$, {
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
    tp = n(963935);
function tS(e) {
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
    return () => (0, S.jsx)(tT, { useTitle: t.useTitle, settingKey: t.key, formatter: n, index: i }, t.key);
}
function tI(e) {
    return e.type === tp.Z6.LIST;
}
function t_(e, t) {
    let { limit: n = 2, formatter: i = tS } = t ?? {};
    th()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, tx._)(),
        r = s.get(e) ?? l.get(e);
    th()(
        null != r && (r.type === tp.Z6.ACCORDION || tI(r)),
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
            U.intl.format(U.t.GejoQK, { emojiHook: (e, t) => (0, S.jsx)(tM.A, { emojiName: "\uD83D\uDE42" }, t) }),
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
            (0, S.jsx)("div", {
                ...n,
                ref: t,
                children: (0, S.jsx)(Z.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, S.jsx)(tK.m, { disabled: i, size: t$.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function t1() {
    ((0, tY.nf)(tY.HP.APP_ICON), (0, tH.default)());
}
function t2() {
    return (0, S.jsx)(tX.A, {
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
                        type: p.UV.BUTTON,
                        text: U.intl.string(U.t["6acvnZ"]),
                        onClick: t1,
                    }),
                    e && t.push({ id: "upsell-button", type: p.UV.STRONGLY_DISCOURAGED_CUSTOM, button: t2 }),
                    { type: p.WX.BUTTON_GROUP, buttons: t }
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
    nn = n(22277);
let ni = eC.A.getArticleURL(I.MVz.FAVORITES_GUILD);
function ns() {
    let { analyticsLocations: e } = (0, ez.Ay)(tw.A.USER_SETTINGS_FAVORITES),
        t = T.useCallback(() => {
            ((0, ne.mv)("settings_page"), (0, t7.uh)(I.YYv), (0, tH.default)());
        }, []);
    return (0, S.jsx)(ez.f5, {
        value: e,
        children: (0, S.jsx)(t6.D, {
            label: U.intl.string(nn.default.OT1NK5),
            description: U.intl.format(nn.default.GR2KOG, { helpCenterLink: ni }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, S.jsxs)(Z.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, S.jsx)(v.$, { variant: "secondary", text: U.intl.string(nn.default["7WwLnr"]), onClick: t }),
                    (0, S.jsx)(tX.A, {
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
                ? (0, S.jsx)(t8.d, {
                      checked: t,
                      description: U.intl.format(nn.default.GR2KOG, { helpCenterLink: ni }),
                      onChange: t9.kG,
                      label: U.intl.string(nn.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, S.jsx)(ns, {});
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
                        (0, S.jsx)(
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
    np = n(145331);
let nS = (0, E.Qx)(h.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
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
                (0, np._k)({
                    prevIsCrossDMSettingEnabled: M.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: np.vy.USER_SETTINGS,
                }),
                M.Hu.updateSetting(t));
        },
    }),
    nT = (0, E.zZ)(h.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => U.intl.string(U.t["5h0QOP"]),
        buildLayout: () => [nS],
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
    nF = n(98908);
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
                      type: p.lT.INLINE_NOTICE,
                      noticeType: "info",
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
                      type: p.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: p.UV.BUTTON,
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
        { badgeType: p.Xi.NEW, dismissibleContent: eA.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eA.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, S.jsx)(tc.JI, { text: U.intl.string(U.t.y2b7CA) });
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
                        : (0, S.jsx)(tn.sL, {
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
                    (0, S.jsx)(tn.sL, {
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
                        e.push((0, S.jsx)(tn.rX, { label: U.intl.string(U.t.Ob7VMB), children: s }, "text-and-images")),
                    null != l && e.push((0, S.jsx)(tn.rX, { children: l }, "streamer-mode")),
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
    ip = n(58703),
    iS = n(906688),
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
    return (0, S.jsxs)(A, {
        className: iE()(iT.kL, m && iT.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, S.jsx)("div", {
                className: iT.zc,
                children: (0, S.jsx)(iS.A, { achievementId: t, size: iS.A.Sizes.SIZE_40, unlocked: s }),
            }),
            (0, S.jsxs)("div", {
                className: iT.VW,
                children: [
                    null != n &&
                        (0, S.jsx)(Q.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: iT.YR,
                            children: (0, ip.mk)(g),
                        }),
                    (0, S.jsx)(Q.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, S.jsx)(Q.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
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
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsxs)(n9.D, {
                onClick: t,
                className: i_.vv,
                children: [
                    (0, S.jsx)(ic.A, { direction: ic.A.Directions.LEFT, className: i_.Kk }),
                    (0, S.jsx)(Q.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: U.intl.string(U.t["13/7kX"]),
                    }),
                ],
            }),
            (0, S.jsxs)("div", {
                className: i_.N1,
                children: [
                    (0, S.jsxs)("div", {
                        className: i_.if,
                        children: [
                            (0, S.jsx)(N.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: U.intl.string(U.t["6jI0hd"]),
                            }),
                            (0, S.jsx)(Q.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: U.intl.string(U.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, S.jsx)("div", {
                        className: i_.nr,
                        children: (0, S.jsx)(ie.TrophyIcon, {
                            size: "custom",
                            color: n6.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            i.length > 0 &&
                (0, S.jsx)("div", {
                    className: i_.yF,
                    children: (0, S.jsx)("div", {
                        className: i_.Eh,
                        children: i.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, S.jsx)(iI, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            s.length > 0 &&
                (0, S.jsxs)("div", {
                    className: i_.yF,
                    children: [
                        (0, S.jsx)("div", {
                            className: i_.if,
                            children: (0, S.jsx)(Q.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: U.intl.string(U.t.GFyMg1),
                            }),
                        }),
                        (0, S.jsx)("div", {
                            className: i_.Eh,
                            children: s.map((e) => (0, S.jsx)(iI, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, S.jsx)("div", { className: i_.yF, children: (0, S.jsx)("div", { className: i_.F3 }) }),
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
            (0, S.jsx)(
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
    return (0, S.jsx)(n7.n, { label: U.intl.string(U.t.bWVN1D), children: l });
}
function iG(e) {
    let { children: t } = e;
    return (0, S.jsx)(Q.E, { className: ib.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function iM(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        s = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion);
    return (0, S.jsx)(t8.d, {
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
    return (0, S.jsxs)(n7.n, {
        label: U.intl.string(U.t.mqxwJO),
        children: [
            (0, S.jsx)(t8.d, {
                label: U.intl.string(U.t.s0KCgF),
                description: U.intl.string(U.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: ib.KF,
                        children: U.intl.string(U.t.vd0D81),
                    }),
                    (0, S.jsx)(iG, { children: U.intl.string(U.t.a18Sug) }),
                    (0, S.jsx)(q.A, {
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
            (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: ib.KF,
                        children: U.intl.string(U.t.sPO3ij),
                    }),
                    (0, S.jsx)(iG, { children: U.intl.string(U.t.xoldVn) }),
                    (0, S.jsx)(q.A, {
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
            (0, S.jsx)(iP, {
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
    return (0, S.jsxs)(n7.n, {
        label: U.intl.string(U.t.Xz0ole),
        children: [
            (0, S.jsx)(t8.d, {
                label: U.intl.string(U.t.o3iV7B),
                description: U.intl.string(U.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => l({ combosEnabled: e }),
            }),
            (0, S.jsx)(t8.d, {
                label: U.intl.string(U.t["Ax+IoW"]),
                description: U.intl.string(U.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => l({ comboSoundsEnabled: e }),
            }),
            (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: ib.KF,
                        children: U.intl.string(U.t.L0oQuh),
                    }),
                    (0, S.jsx)(iG, { children: U.intl.string(U.t["/OOFpL"]) }),
                    (0, S.jsx)(q.A, {
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
    return (0, S.jsxs)(n7.n, {
        label: U.intl.string(U.t.wVS5Sd),
        children: [
            (0, S.jsx)(t8.d, {
                label: U.intl.string(U.t.N004zO),
                description: r ? U.intl.string(U.t.GckHGw) : U.intl.string(U.t.Qq5W3v),
                checked: n && !r,
                disabled: !t || r,
                onChange: (e) => l({ screenshakeEnabled: e }, 1),
            }),
            (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: ib.KF,
                        children: U.intl.string(U.t.UxnnC4),
                    }),
                    (0, S.jsx)(iG, { children: U.intl.string(U.t.CEOEOb) }),
                    (0, S.jsx)(q.A, {
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
            (0, S.jsx)(iP, {
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
    return (0, S.jsx)(n7.n, {
        label: U.intl.string(U.t.EuXv2q),
        children: (0, S.jsxs)(Z.B, {
            gap: 16,
            children: [
                (0, S.jsx)("div", { children: U.intl.string(U.t["1SLnki"]) }),
                (0, S.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: ib.hw,
                    children: (0, S.jsx)(v.$, {
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
    return (0, S.jsxs)(n9.D, {
        onClick: function () {
            return t(1);
        },
        className: ib.Tq,
        children: [
            (0, S.jsx)("div", {
                className: ib.w1,
                children: (0, S.jsx)(ie.TrophyIcon, { size: "md", color: n6.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, S.jsxs)("div", {
                className: ib.qL,
                children: [
                    (0, S.jsx)(N.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: U.intl.string(U.t["6jI0hd"]),
                    }),
                    (0, S.jsx)(Q.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: U.intl.string(U.t.GuUItX),
                    }),
                ],
            }),
            (0, S.jsx)(it._, { size: "custom", color: "currentColor", width: 16, className: ib.nT }),
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
        (0, S.jsxs)(Z.B, {
            gap: 24,
            children: [
                (0, S.jsx)(iM, { settings: i, updateSettings: a }),
                (0, S.jsx)(iF, { onChangePage: t }),
                (0, S.jsx)(iV, { settings: i, updateSettings: a }),
                (0, S.jsx)(ik, { settings: i, updateSettings: a }),
                (0, S.jsx)(iU, { settings: i, updateSettings: a }),
                (0, S.jsx)(iw, { updateSettings: a }),
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
                (0, S.jsxs)(S.Fragment, {
                    children: [
                        (0, S.jsx)(is.A, {
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
                                        return (0, S.jsx)(iz, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, S.jsx)(iN, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, l),
                        }),
                        (0, S.jsx)("div", {
                            className: a ? ib.Sr : ib.IP,
                            children: (0, S.jsx)(ii.a, {
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
        icon: () => (0, S.jsx)("img", { alt: "", src: n(724405), className: iW.$ }),
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
        ? (0, S.jsx)("div", {
              className: sl.zc,
              children: (0, S.jsx)(i3.E, { size: "sm", color: n6.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, S.jsxs)("div", {
              className: sl.nt,
              children: [
                  (0, S.jsx)(sn.A, { game: n, pid: t.pid, size: sn.M.MEDIUM }),
                  (0, S.jsx)("div", {
                      className: sl.Am,
                      children: (0, S.jsx)(i3.E, { size: "sm", color: n6.A.colors.TEXT_FEEDBACK_WARNING }),
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
        ? (0, S.jsxs)("div", {
              className: iE()(sl.kL, t),
              children: [
                  (0, S.jsx)(sr, { game: s, application: l }),
                  (0, S.jsxs)("div", {
                      className: sl.FS,
                      children: [
                          (0, S.jsx)(Q.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? U.intl.string(U.t.vxfv7v)
                                      : null != s
                                        ? U.intl.string(U.t.fAYU2G)
                                        : U.intl.string(U.t["9V4X/c"]),
                          }),
                          (0, S.jsx)(Q.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: U.intl.format(U.t["/y6htt"], {
                                  helpCenterLink: eC.A.getArticleURL(I.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, S.jsx)(v.$, {
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
    sp = n(827343),
    sS = n(635242),
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
    return (0, S.jsx)("div", {
        className: sP.i1,
        children: (0, S.jsx)(Q.E, {
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
                    (0, S.jsx)(sw, {
                        ...e,
                        onSelect: (e) => {
                            (l(e), iJ.A.setKeybind({ ...i.current, params: { channelId: e } }));
                        },
                    }),
            );
        }, []);
    return (0, S.jsx)("div", {
        className: iE()(sP.a8, n),
        children: (0, S.jsx)(t6.D, {
            label: U.intl.string(U.t.q4JpM8),
            children: (0, S.jsxs)(sb.A, {
                align: sb.A.Align.STRETCH,
                children: [
                    (0, S.jsx)("div", { className: sP.$X, children: (0, S.jsx)(sF, { channelId: s }) }),
                    (0, S.jsx)(sb.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, S.jsx)(v.$, { variant: "primary", text: U.intl.string(U.t.Dm8O4e), onClick: r }),
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
                          return (0, S.jsx)(
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
                                      null != r ? (0, S.jsx)("div", { className: sP.J5, children: r.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, S.jsx)(sV, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, S.jsx)(sf.a, {
        transitionState: i,
        onClose: s,
        title: U.intl.string(U.t.Dm8O4e),
        subtitle: U.intl.string(U.t.q4JpM8),
        actions: void 0,
        input: (0, S.jsx)(s_.k, {
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
        ? (0, S.jsx)(Q.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: sP.GN,
              children: U.intl.string(U.t["/fYIK7"]),
          })
        : (0, S.jsx)(sv.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: sG,
              onFocus: sG,
              onMouseEnter: sG,
              focused: !1,
              children: null != s ? (0, S.jsx)("div", { className: sP.J5, children: s.name }) : null,
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
                      ? (0, S.jsx)("div", {
                            className: sY.$e,
                            children: (0, S.jsx)(i$.w, {
                                type: "info",
                                children: U.intl.format(U.t.wu2lqV, { trigger: i.triggerDescription }),
                            }),
                        })
                      : null
                  : (0, S.jsx)("div", {
                        className: sY.$e,
                        children: (0, S.jsx)(i$.w, { type: "warning", children: U.intl.string(U.t.PTCrUP) }),
                    })
            : (0, S.jsx)("div", {
                  className: sY.$e,
                  children: (0, S.jsx)(i$.w, { type: "warning", children: U.intl.string(U.t.J0m3aK) }),
              })
        : null;
}
function sH(e) {
    let { keybind: t } = e,
        n = sT.dI(t.shortcut);
    return e4.A.hasBind(n)
        ? (0, S.jsx)("div", {
              className: sY.$e,
              children: (0, S.jsx)(i$.w, { type: "warning", message: U.intl.string(U.t["7lQlw3"]), role: "status" }),
          })
        : sB.Yy.has(n)
          ? (0, S.jsx)("div", {
                className: sY.$e,
                children: (0, S.jsx)(i$.w, {
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
    return t.action === I.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, S.jsx)(sk, { keybind: t, className: sY._M }) : null;
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
                    sp.default.setMode(si.Ay.getMode(n), { shortcut: e }, n);
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
    return (0, S.jsxs)("div", {
        className: sY.f_,
        children: [
            (0, S.jsx)(sH, { keybind: t }),
            (0, S.jsx)(sX, { keybind: t }),
            (0, S.jsx)("div", {
                className: sY.XI,
                children: (0, S.jsx)(sg.l, {
                    selectionMode: "single",
                    label: U.intl.string(U.t.XH5b12),
                    value: t.action,
                    options: i,
                    onSelectionChange: s,
                    disabled: t.managed,
                }),
            }),
            (0, S.jsx)("div", {
                className: sY.LE,
                children: (0, S.jsx)(t6.D, {
                    label: U.intl.string(U.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, S.jsx)(sS.A, { defaultValue: t.shortcut, onChange: l }),
                }),
            }),
            (0, S.jsxs)("div", {
                className: sY.ne,
                children: [
                    !t.managed &&
                        (0, S.jsx)(sm.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: sA.TrashIcon,
                            "aria-label": U.intl.string(U.t.qEHmmB),
                        }),
                    (0, S.jsx)(sE.m, {
                        text: U.intl.string(t.enabled ? U.t.pNYGbx : U.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, S.jsxs)("div", {
                            children: [
                                (0, S.jsx)(sh.A, {
                                    id: o,
                                    children: U.intl.format(t.enabled ? U.t["myr/Y0"] : U.t.lYhtPO, { actionName: u }),
                                }),
                                (0, S.jsx)(sx.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, S.jsx)(Q.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: sY.h_,
                children: n[t.action],
            }),
            (0, S.jsx)(sW, { keybind: t }),
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
        ? (0, S.jsx)(i$.w, {
              type: "info",
              children: (0, S.jsxs)(Z.B, {
                  gap: 8,
                  align: "start",
                  children: [
                      (0, S.jsx)("span", { children: U.intl.string(U.t.AcH7R7) }),
                      t
                          ? (0, S.jsx)(v.$, {
                                variant: "secondary",
                                size: "sm",
                                text: U.intl.string(U.t.ZPHaPE),
                                onClick: sd.qM,
                            })
                          : null,
                  ],
              }),
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
            ? (0, S.jsxs)(Z.B, {
                  gap: 16,
                  children: [
                      (0, S.jsx)(s1, {}),
                      (0, S.jsx)(Q.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: U.intl.string(U.t.vyYgWp),
                      }),
                  ],
              })
            : (0, S.jsxs)(Z.B, {
                  gap: 16,
                  children: [
                      (0, S.jsx)(s1, {}),
                      (0, S.jsx)("div", {
                          className: s0.A,
                          children: a.map((e, t) =>
                              (0, S.jsxs)(
                                  T.Fragment,
                                  {
                                      children: [
                                          (0, S.jsx)(sK, { keybind: e, keybindDescriptions: o, keybindActionTypes: u }),
                                          t < a.length - 1 ? (0, S.jsx)(su.c, { className: s0.y, gap: 24 }) : null,
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
                ? (0, S.jsx)(s2, {})
                : (0, S.jsx)(i$.w, {
                      type: "info",
                      message: U.intl.format(U.t.mPi3F3, { downloadLink: I.X7G.DOWNLOAD }),
                      role: "static",
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
    return (0, S.jsxs)(Z.B, {
        gap: 48,
        children: [
            (0, S.jsx)(n7.n, {
                label: t ? U.intl.string(U.t.Lz5KHI) : void 0,
                children: (0, S.jsx)("div", {
                    className: s6.jh,
                    children: (0, S.jsxs)("div", {
                        className: s6.yZ,
                        children: [
                            (0, S.jsx)(Q.E, { variant: "text-md/normal", children: U.intl.string(U.t.sMWLBj) }),
                            (0, S.jsx)("div", {
                                className: s6.DM,
                                children: (0, S.jsx)(s5.e, { shortcut: s4.z.binds["0"], className: s6.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, S.jsx)(s8, {
                children: (e) =>
                    (0, S.jsx)(S.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, sZ.Gm)(e),
                                s = (0, sZ.zF)(e),
                                l = n[e];
                            return (0, S.jsx)(
                                n7.n,
                                {
                                    label: i,
                                    description: s,
                                    children: (0, S.jsx)("div", {
                                        className: s6.jh,
                                        children: l.map((e, t) =>
                                            (0, S.jsxs)(
                                                T.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, S.jsx)(su.c, {}),
                                                        (0, S.jsxs)("div", {
                                                            className: s6.yZ,
                                                            children: [
                                                                (0, S.jsx)(Q.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, S.jsx)("div", {
                                                                    className: s6.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, S.jsx)(
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
        Component: () => (0, S.jsx)(s7, { showHeader: !1 }),
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
        return (0, S.jsxs)(Z.B, {
            children: [
                (0, S.jsx)(t8.d, { label: t, description: n, checked: e, onChange: ls }),
                !e && (0, S.jsx)(ln.A, { look: ln.k.WARNING, children: U.intl.string(U.t.j7S6IX) }),
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
            return (0, S.jsxs)("div", {
                className: ld.q,
                children: [
                    (0, S.jsxs)("div", {
                        className: ld.L,
                        children: [
                            (0, S.jsxs)(Z.B, {
                                direction: "horizontal",
                                children: [
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: U.intl.string(U.t.roHq80),
                                    }),
                                    n &&
                                        (0, S.jsxs)(S.Fragment, {
                                            children: [
                                                (0, S.jsx)(Q.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, S.jsx)(Q.E, {
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
                            (0, S.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: U.intl.format(U.t["8CAL+D"], {
                                    helpCenterLink: eC.A.getArticleURL(I.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                        ],
                    }),
                    (0, S.jsx)(v.$, {
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
    lh = n(451704);
async function lx() {
    try {
        await lp();
    } catch {
        (0, lE.P0)({ text: U.intl.string(U.t["8ihs9i"]), variant: "critical" });
    }
}
async function lp() {
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
let lS = (0, E.Tf)(h.X.CAPTURE_PERFORMANCE_TRACE, {
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
        usePersistentBadge: () => ({ badgeType: p.Xi.BETA }),
        usePredicate: () => lC.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, nf.xl)(),
        useValue: () => (0, f.bG)([lN.A], () => lN.A.isUserOptedIn()),
        setValue: l_.lj,
    }),
    lb = (0, E.zZ)(h.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => U.intl.string(U.t["8/udY0"]),
        buildLayout: () => [lI, lS, ly],
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
                      type: p.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, S.jsxs)(Z.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, S.jsx)(i$.w, {
                                      type: "info",
                                      message: U.intl.string(U.t["5pkmHa"]),
                                      role: "static",
                                  }),
                                  (0, S.jsx)(so, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            nf.Av
                ? {
                      type: p.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: p.UV.BUTTON,
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
                (0, S.jsx)(lB.A, {
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
            return (0, S.jsx)(lX.U, {
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
                ? (0, S.jsx)("div", {
                      className: lQ.T9,
                      children: (0, S.jsxs)("div", {
                          className: lQ.Xi,
                          children: [
                              (0, S.jsxs)("div", {
                                  className: lQ.UI,
                                  children: [
                                      (0, S.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, S.jsx)(lq.kE, {}),
                                  ],
                              }),
                              (0, S.jsx)(lq.eK, {}),
                          ],
                      }),
                  })
                : (0, S.jsx)("div", {
                      className: lQ.T9,
                      children: (0, S.jsx)(sE.m, {
                          text: i ? null : U.intl.string(U.t["8jSzSe"]),
                          children: (0, S.jsx)(v.$, {
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
            (sp.default.setOpenH264Enabled(e),
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
        setValue: sp.default.setAecDump,
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
        onConfirm: () => sp.default.setDebugLogging(e),
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
                (0, S.jsx)(l5.a, {
                    header: e,
                    confirmButtonColor: l3.$n.Colors.BRAND,
                    confirmText: U.intl.string(U.t.BddRzS),
                    ...n,
                    children: (0, S.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, S.jsx)(Q.E, { variant: "text-md/normal", children: t }),
                            (0, S.jsx)(Q.E, {
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
        return (0, S.jsxs)("fieldset", {
            children: [
                (0, S.jsx)(sh.A, { tag: "legend", id: i, children: U.intl.string(U.t["FjN+et"]) }),
                (0, S.jsxs)(Z.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, S.jsx)(t8.d, {
                            label: U.intl.string(U.t["726JHL"]),
                            description: U.intl.string(U.t["/7ak9Q"]),
                            checked: e,
                            onChange: rt,
                        }),
                        (0, S.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, S.jsxs)(l4.e, {
                                children: [
                                    (0, S.jsx)(v.$, {
                                        variant: "secondary",
                                        text: U.intl.string(U.t.EbwFfR),
                                        onClick: ri,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": U.intl.string(U.t.aY1OH2),
                                    }),
                                    (0, S.jsx)(v.$, {
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
            rh(U.intl.string(U.t["4iKQ/3"]), U.intl.string(U.t.sQ42iT), sp.default.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    rp = (0, E.zZ)(h.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.UDAU9K),
        buildLayout: () => [l0, rE, rx],
    });
var rS = n(736056),
    rT = n(360729),
    rf = n(446243),
    rI = n(558076),
    r_ = n(270103);
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
                { loaded: t, override: n } = (0, f.cf)([rS.A], () => ({
                    loaded: rS.A.getLoadedGuildExperiment(rT.vJ),
                    override: rS.A.getExperimentOverrideDescriptor(rT.vJ),
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
            sp.default.setAutomaticGainControl(e, {
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
            sp.default.setAttenuation(
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
        setValue: (e) => sp.default.setAttenuation(si.Ay.getAttenuation(), e, si.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rP = (0, E.zD)(h.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => U.intl.string(U.t.SMt0Gr),
        useValue: () => (0, f.bG)([si.Ay], () => si.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => sp.default.setAttenuation(si.Ay.getAttenuation(), si.Ay.getAttenuateWhileSpeakingSelf(), e),
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
            sp.default.setBypassSystemInputProcessing(e);
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
            sp.default.setMode(t, { vadUseKrisp: e });
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
            rh(U.intl.string(U.t.uY7AcQ), U.intl.string(U.t.gBqik6), () => sp.default.setAudioSubsystem(e));
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
            sp.default.setQoS(e);
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
            sp.default.setSilenceWarning(e);
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
            sp.default.setEchoCancellation(e, { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO });
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
    return (0, S.jsx)("div", {
        role: "meter",
        className: iE()(rH.$I, n),
        id: i,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? U.intl.string(U.t.haLKZ0) : U.intl.string(U.t.X2hJL7),
        children: (0, S.jsx)("div", { className: iE()(rH.Jx, rH.NU, { [rH.zY]: t && !r, [rH.r9]: r }) }),
    });
}
function rq(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, f.cf)([si.Ay], () => ({
            threshold: si.Ay.getModeOptions().threshold,
            autoThreshold: si.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, f.bG)([si.Ay], () => si.Ay.getMode());
    return (0, S.jsx)("section", {
        className: iE()(rH.Mo, rH.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": s,
        children: (0, S.jsx)(q.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return ((t = -((100 - e) * 1)), void sp.default.setMode(o, { threshold: t, autoThreshold: a }));
            },
            barStyles: { background: n6.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: n6.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rK,
            disabled: l,
            children: (0, S.jsxs)("div", {
                className: iE()(rH.NU, rH.TL, rH.Jx, rW.bar),
                children: [
                    (0, S.jsx)("div", { className: iE()(rH.GS, rH.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, S.jsx)("div", { className: "grow" }),
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
                sp.default.setMode(t, { autoThreshold: e, threshold: n });
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
                    (0, S.jsx)("div", {
                        className: rH.B4,
                        children: (0, S.jsx)(i$.w, {
                            type: "warning",
                            message: U.intl.format(U.t["O13I+O"], { onEnableClick: () => sp.default.enable(!0) }),
                            role: "status",
                        }),
                    }),
                [r],
            ),
            o = T.useMemo(() => (e ? U.intl.string(U.t.JsbzjA) : U.intl.string(U.t.MLmyMY)), [e]),
            u = T.useId(),
            d = T.useId();
        return i
            ? (0, S.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, S.jsx)(sh.A, { tag: "legend", id: u, children: U.intl.string(U.t.GByLar) }),
                      (0, S.jsx)(sh.A, { id: d, children: o }),
                      (0, S.jsxs)(Z.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, S.jsx)(t8.d, {
                                  disabled: t,
                                  label: U.intl.string(U.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, S.jsx)(rZ, {
                                        isSpeaking: l,
                                        className: rH.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, S.jsx)(rq, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, S.jsxs)(Z.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, S.jsx)(t6.D, {
                          label: U.intl.string(U.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, S.jsx)(rZ, {
                                        isSpeaking: l,
                                        className: rH.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, S.jsx)(rq, {
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
    return (0, S.jsx)("img", { src: e ? rJ : r0, width: 48, height: 32, alt: "" });
}
let r3 = (0, E.E2)(h.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [U.intl.string(U.t.t8Qhib), U.intl.string(U.t.hmfkCi)],
    usePredicate: function () {
        return (0, f.bG)([si.Ay], () => si.Ay.isInputProfileCustom() && si.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = T.useCallback((e) => {
                (sp.default.setNoiseCancellation("KRISP" === e, r1),
                    sp.default.setNoiseSuppression("STANDARD" === e, r1));
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
        return (0, S.jsxs)(Z.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, S.jsx)(sg.l, {
                    label: U.intl.string(U.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, S.jsx)(r2, {}),
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
                        (0, S.jsx)(e, {
                            title: U.intl.string(U.t.Kdt0Gb),
                            confirmText: U.intl.string(U.t["1WjMbC"]),
                            cancelText: U.intl.string(U.t.BddRzS),
                            onConfirm: () => (0, r5._)("PTT Limited Modal"),
                            body: U.intl.string(U.t.NIozvt),
                            ...t,
                        });
                }),
            sp.default.setMode(t, void 0, void 0, { analyticsLocations: i }));
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
                : (0, S.jsx)(i$.w, { type: "warning", children: U.intl.string(U.t.PTCrUP) })
            : (0, S.jsx)(i$.w, { type: "warning", children: U.intl.string(U.t.J0m3aK) })
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
            return (0, S.jsx)(t6.D, {
                label: U.intl.string(U.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, S.jsxs)("div", {
                    className: r9.e,
                    children: [
                        (0, S.jsx)(sS.A, {
                            defaultValue: e,
                            onChange: (e) => {
                                let t = sc.Ay.getKeybindForAction(I.hCu.PUSH_TO_TALK, !0);
                                (null != t &&
                                    (0, sd.uL)(t.id, t.shortcut, e, sc.Ay.getWaylandPortalShortcutState(t.id)),
                                    sp.default.setMode(I.TBI.PUSH_TO_TALK, { shortcut: e }));
                            },
                        }),
                        (0, S.jsx)(ae, { shortcut: e }),
                    ],
                }),
            });
        },
    }),
    an = (0, E.sN)(h.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => U.intl.string(U.t.GCNMM8),
        useSearchTerms: () => [U.intl.string(U.t["pS+K2L"]), U.intl.string(U.t.nuFtHH)],
        setValue: function (e) {
            sp.default.setMode(I.TBI.PUSH_TO_TALK, { delay: e });
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
    al = n(943679);
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
            sp.default.setSpatialAudio(e, [tw.A.USER_SETTINGS_VOICE_AND_VIDEO]);
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
            sp.default.setActiveInputProfile(e, { analyticsLocations: t });
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
                if (e) return { type: p.lT.INLINE_NOTICE, noticeType: "info", text: U.intl.string(U.t["/Whuzi"]) };
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
    ap = n(922016),
    aS = n(305866),
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
    return (0, S.jsx)(ap.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, S.jsx)(aS.l, {
                children: (0, S.jsx)(aN.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, S.jsx)(a_.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, S.jsx)(aC.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: U.intl.string(U.t.uOe0Az),
                children: (0, S.jsx)(aT.PencilIcon, { size: "md", color: "currentColor", className: ay.Wo }),
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
    return (0, S.jsx)(aC.dT, {
        onClick: n,
        text: i,
        children: (0, S.jsx)(ac.H, { size: "md", color: "currentColor", className: ay.wg }),
    });
}
function aj(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, S.jsxs)("div", {
        className: ay.D6,
        children: [
            (0, S.jsxs)("div", {
                className: ay.kL,
                children: [
                    a && (0, S.jsx)(tM.A, { emojiId: l, emojiName: r, className: ay.Zg }),
                    (0, S.jsx)(Q.E, {
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
                                            return (0, S.jsx)(Q.E, {
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
                        ? (0, S.jsx)(av, { sound: t })
                        : (0, S.jsx)(ac.H, { size: "md", color: "currentColor", className: ay.Gk }),
                ],
            }),
            (0, S.jsxs)("div", {
                className: ay.kL,
                children: [
                    (0, S.jsx)(ab, { onSelect: i }),
                    s &&
                        !n &&
                        (0, S.jsx)(aC.dT, {
                            onClick: () => i(null),
                            text: U.intl.string(U.t.jmtcGA),
                            children: (0, S.jsx)(sA.TrashIcon, {
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
    return (0, S.jsxs)("div", {
        className: aL.Io,
        children: [
            r
                ? (0, S.jsx)(tM.A, { emojiId: s, emojiName: l, className: aL.nW })
                : (0, S.jsx)(ac.H, { size: "md", color: "currentColor", className: aL.nW }),
            (0, S.jsx)(Q.E, { className: aL.dK, variant: "text-xs/medium", children: i.name }),
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
            return null == e ? null : n ? (0, S.jsx)(aD, { guildId: e.value }) : null;
        }, []);
        return (0, S.jsxs)(n7.n, {
            label: U.intl.string(U.t.nzUc3B),
            description: U.intl.format(U.t.u9RWmv, { helpdeskArticle: eC.A.getArticleURL(I.MVz.SOUNDBOARD) }),
            children: [
                (0, S.jsx)(ag.A, {
                    guildId: t,
                    className: aL.Dt,
                    globalOption: { label: U.intl.string(U.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, S.jsxs)(am.A, {
                    title: U.intl.format(U.t.I2TsYN, {
                        nitroWheelHook: () => (0, S.jsx)(ad.t, { size: "md", color: "currentColor", className: aL.ax }),
                    }),
                    children: [
                        (0, S.jsx)(aj, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (n) => {
                                null == n ? (0, ah.Dv)(t, e) : (0, ah.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, S.jsx)("div", {
                                className: aL.lm,
                                children: (0, S.jsx)(i$.w, {
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
            (0, S.jsx)(Q.E, {
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
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "warning",
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
        setValue: sp.default.setVideoHook,
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.supportsVideoHook());
        },
    }),
    a1 = (0, E.zD)(h.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => U.intl.string(U.t["4I0qzZ"]),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getExperimentalSoundshare());
        },
        setValue: sp.default.setExperimentalSoundshare,
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
            sp.default.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return si.Ay.supports(sz.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    a3 = (0, E.sN)(h.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => U.intl.string(U.t.fhEzfj),
        setValue: function (e) {
            let t = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sp.default.setSidechainCompressionStrength(e, { analyticsLocations: t });
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
                          (sp.default.setUseSystemScreensharePicker(e), nN.A.app.relaunch());
                      },
                      confirmText: U.intl.string(U.t.BddRzS),
                  })
                : sp.default.setUseSystemScreensharePicker(e);
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
            return (0, S.jsx)(lX.U, {
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
            return (0, S.jsx)(lX.U, {
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
            sp.default.setInputVolume(n, { analyticsLocations: t });
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
            sp.default.setOutputVolume(n, { analyticsLocations: t });
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
                ? (0, S.jsx)(ol.A, {
                      size: "md",
                      notchBackground: ol.V.GRAY,
                      captionVoice: U.intl.string(U.t.bp3JOV),
                      captionNoVoice: (0, S.jsxs)(S.Fragment, {
                          children: [
                              (0, S.jsx)(Q.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: U.intl.string(U.t.bgn75v),
                              }),
                              U.intl.string(U.t["MA+OZh"]),
                              (0, S.jsx)(nc.Anchor, {
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
    return (0, S.jsxs)(Z.B, {
        children: [
            n && (0, S.jsx)(so, { sourcePage: "voice" }),
            t && (0, S.jsx)(ln.A, { look: ln.k.WARNING, children: U.intl.string(U.t.Ioz3gx) }),
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
                              type: p.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, S.jsx)(od, {
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
        buildLayout: () => [oc, au, lJ, a6, a$, ak, rC, rp],
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
    op = n(534247);
function oS(e) {
    let { title: t, children: n, actions: i, graphicSrc: s, footnote: l, size: r = "default" } = e,
        a = "compact" === r;
    return (0, S.jsxs)("div", {
        className: iE()(op.kL, { [op.oE]: a }),
        children: [
            (0, S.jsxs)(Z.B, {
                direction: "vertical",
                align: "start",
                justify: "center",
                gap: a ? 24 : 16,
                fullWidth: !1,
                className: op.Qs,
                children: [
                    (0, S.jsxs)(Z.B, {
                        direction: "vertical",
                        align: "start",
                        gap: a ? 12 : 8,
                        children: [
                            (0, S.jsx)(N.D, {
                                variant: a ? "heading-lg/bold" : "heading-xl/bold",
                                color: "text-strong",
                                children: t,
                            }),
                            n,
                        ],
                    }),
                    (i.length > 0 || null != l) &&
                        (0, S.jsxs)(Z.B, {
                            direction: "vertical",
                            align: "start",
                            gap: 12,
                            children: [
                                i.length > 0 &&
                                    (0, S.jsx)(Z.B, {
                                        direction: "horizontal",
                                        gap: a ? 12 : 16,
                                        wrap: !0,
                                        fullWidth: !1,
                                        children: i.map((e) =>
                                            (0, S.jsx)(
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
                                    (0, S.jsx)(Q.E, { variant: "text-xxs/normal", color: "text-subtle", children: l }),
                            ],
                        }),
                ],
            }),
            (0, S.jsx)("img", { src: s, className: op.fA, alt: "" }),
        ],
    });
}
var oT = n(425565),
    of = n(745188),
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
        return (0, S.jsx)(s_.k, {
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
                        renderInput: (e) => (0, S.jsx)(oX, { ...e }),
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
            (0, S.jsx)(oH.A, {
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
                ? (0, S.jsx)("div", {
                      className: oQ.zc,
                      children: (0, S.jsx)(i$.w, { type: "critical", message: t.message, role: "alert" }),
                  })
                : null
            : (0, S.jsx)("div", {
                  className: oQ.zc,
                  children: (0, S.jsx)(i$.w, { type: "critical", message: e.message, role: "alert" }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, ow.g)(n);
        return (0, S.jsxs)("div", {
            className: oQ.yV,
            children: [
                (0, S.jsx)(Q.E, {
                    className: oQ.bV,
                    variant: "text-sm/normal",
                    children: U.intl.string(U.t["50Auo2"]),
                }),
                (0, S.jsx)(oF.Ay, {
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
        return (0, S.jsxs)("div", {
            className: oQ.yV,
            children: [
                (0, S.jsx)(Q.E, { className: oQ.bV, variant: "text-sm/normal", children: U.intl.string(U.t.Fo2YP7) }),
                (0, S.jsx)(oZ, {
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
        return (0, S.jsx)("div", {
            className: oQ.AU,
            children: (0, S.jsxs)(Z.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, S.jsx)(l4.e, {
                        children: (0, S.jsxs)("div", {
                            className: oQ.lH,
                            children: [
                                n
                                    ? (0, S.jsx)(sE.m, {
                                          text: U.intl.string(U.t["v6/z28"]),
                                          children: (0, S.jsx)("div", { "aria-hidden": !0, className: oQ.dm }),
                                      })
                                    : null,
                                (0, S.jsx)(v.$, {
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
                    (0, S.jsxs)(l4.e, {
                        children: [
                            (0, S.jsx)(v.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: oU.Fr ? "sm" : "md",
                                text: U.intl.string(U.t["ETE/oC"]),
                            }),
                            (0, S.jsx)(v.$, {
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
        return (0, S.jsx)(oV.Z, {
            editable: !0,
            className: iE()(oQ.Nr, i),
            children: (0, S.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, S.jsxs)("div", {
                        className: oQ.__invalid_paymentSection,
                        children: [
                            (0, S.jsx)(oq.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, S.jsx)("div", { className: oQ.Um, children: U.intl.string(U.t["3R0U0b"]) })
                                : null,
                            (0, S.jsx)("div", {
                                className: oQ.Sv,
                                children: r
                                    ? U.intl.format(U.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : U.intl.string(U.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, S.jsx)("div", {
                        className: oQ.D5,
                        children: (0, S.jsx)(ok.S, {
                            value: o$,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, o$),
                            label: U.intl.string(U.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, S.jsx)(su.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let o0 = f.Ay.connectStores([oP.A], () => ({ updateError: oP.A.editSourceError, removeError: oP.A.removeSourceError }))(
    oJ,
);
var o1 = n(986485),
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
            ? (0, S.jsx)(o0, {
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
            : (0, S.jsxs)(S.Fragment, {
                  children: [
                      i ? null : (0, S.jsx)(su.c, { className: o3.__invalid_sourceDivider }),
                      (0, S.jsxs)("div", {
                          className: o3.Yb,
                          children: [
                              (0, S.jsx)(oq.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: s,
                                  locale: l,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, S.jsx)(v.$, {
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
        (0, S.jsxs)(S.Fragment, {
            children: [
                n ? null : (0, S.jsx)(su.c, { className: o3.__invalid_sourceDivider }),
                (0, S.jsxs)("div", {
                    className: o3.Yb,
                    children: [
                        void 0 !== t
                            ? (0, S.jsx)(oq.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, S.jsxs)(sb.A, {
                                  align: sb.A.Align.CENTER,
                                  children: [
                                      (0, S.jsx)(ov._, { size: "lg" }),
                                      (0, S.jsx)(Q.E, {
                                          variant: "text-sm/medium",
                                          className: o2.Wi,
                                          children: U.intl.string(o1.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, S.jsxs)("div", {
                            className: o3.zy,
                            children: [
                                (0, S.jsx)("div", {
                                    className: o3.Tq,
                                    children:
                                        null == r
                                            ? (0, S.jsx)(oC.y, { type: oC.y.Type.SPINNING_CIRCLE })
                                            : (0, S.jsx)(Q.E, {
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
                                (0, S.jsx)(v.$, {
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
                return (t) => (0, S.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
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
        return (0, S.jsxs)("div", {
            className: o3.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, S.jsxs)("div", {
                          className: o3.z8,
                          children: [
                              (0, S.jsx)(Q.E, { variant: "text-sm/normal", children: U.intl.string(U.t.aRHpAB) }),
                              (0, S.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: o3.Sv,
                                  children: U.intl.string(U.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, S.jsx)(v.$, { onClick: this.handleAddPaymentMethod, text: U.intl.string(U.t.CpOiEO) }),
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
                (0, S.jsx)(
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
                          (0, S.jsx)(
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
                    : (0, S.jsx)(o6, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: o5,
                      })),
            (0, S.jsxs)(S.Fragment, {
                children: [
                    t
                        ? (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsxs)(N.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, S.jsx)(oj.LockIcon, { size: "sm", className: o3.hz }),
                                          " ",
                                          U.intl.string(U.t.W26xGQ),
                                      ],
                                  }),
                                  (0, S.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: U.intl.string(U.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    A,
                    o && e,
                    m !== d.length - 1 || (o && c.length > 0) ? (0, S.jsx)(su.c, {}) : null,
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
                ? (0, S.jsx)("div", { className: un.o, children: (0, S.jsx)(oC.y, {}) })
                : (0, S.jsx)(o8, {
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
            return (0, S.jsx)("div", {
                className: oI.k,
                children: (0, S.jsx)(oS, {
                    title: U.intl.string(of.default.w8gzZb),
                    graphicSrc:
                        "https://cdn.discordapp.com/assets/content/ee0bcc3ecc6d909365f70b4692752f0ac9c8a2e49c47afac16e7dbd31efe360f.png",
                    actions: e,
                    children: (0, S.jsx)(Q.E, {
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
                      type: p.p3.INFO_POPOVER,
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
    up =
        (((l = {})[(l.PARTIALLY_REFUNDED = 1)] = "PARTIALLY_REFUNDED"),
        (l[(l.REFUNDED = 2)] = "REFUNDED"),
        (l[(l.REVERSED = 3)] = "REVERSED"),
        l),
    uS =
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
    uv = n(512950),
    uj = n(707554),
    uO = n(957565),
    uL = n(458790),
    uR = n(39209),
    uD = n(510022),
    uP = n(427262),
    uG = n(106799),
    uM = n(580630),
    uU = n(818348),
    uV = n(460103);
let uk = (e) => `https://${I.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`;
function uw(e, t) {
    return t === uU.Yr.DISCORD_ORB
        ? (0, S.jsxs)("span", {
              className: uV.db,
              children: [
                  (0, S.jsx)(uG.A, { customSize: 16, shouldUseThemeColor: !0 }),
                  U.intl.formatToPlainString(U.t.YMor7k, { count: e }),
              ],
          })
        : (0, uM.$g)(e, t);
}
function uF(e) {
    let { receipt: t, gameItem: n, locale: i, hasLinkedToApplication: s } = e,
        { analyticsLocations: l } = (0, ez.Ay)(tw.A.BILLING_SETTINGS_BILLING),
        { sku: r } = t,
        a = r?.application,
        o = n.gift_recipient;
    return n.status === uT.REDEEMED
        ? null
        : n.status === uT.REFUNDED
          ? (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsx)(uj.H, { className: uV.mW, children: U.intl.string(U.t["gIGB/A"]) }),
                    (0, S.jsx)("div", {
                        className: uV.iL,
                        children:
                            null != o
                                ? U.intl.format(U.t.Q1K9eg, { username: uP.Ay.getName(o) })
                                : U.intl.format(U.t.IBtGwC, { applicationName: a?.name }),
                    }),
                ],
            })
          : n.status === uT.CLAIMED || n.status === uT.UNCLAIMED
            ? (0, S.jsxs)(S.Fragment, {
                  children: [
                      (0, S.jsx)(uj.H, { className: uV.mW, children: U.intl.string(U.t["gIGB/A"]) }),
                      (0, S.jsx)("div", {
                          className: uV.iL,
                          children:
                              null != o
                                  ? U.intl.format(U.t.vfUW65, { username: uP.Ay.getName(o) })
                                  : U.intl.string(U.t["18wIqp"]),
                      }),
                      null == o &&
                          (0, S.jsx)("div", {
                              className: uV.TP,
                              children: (0, S.jsx)(v.$, {
                                  variant: "primary",
                                  text: U.intl.string(U.t["jcSP+g"]),
                                  onClick: () => (0, ng.openUserSettings)(h.X.GIFT_PANEL),
                              }),
                          }),
                  ],
              })
            : (0, S.jsxs)(S.Fragment, {
                  children: [
                      (0, S.jsx)(uj.H, { className: uV.mW, children: U.intl.string(U.t["gIGB/A"]) }),
                      (0, S.jsx)("div", {
                          className: uV.iL,
                          children: s
                              ? U.intl.format(U.t.DQQCAw, { applicationName: a?.name, skuName: r?.name })
                              : U.intl.format(U.t.ED2BqF, { applicationName: a?.name, skuName: r?.name }),
                      }),
                      (0, S.jsx)("div", {
                          className: uV.TP,
                          children: s
                              ? (0, S.jsx)(v.$, {
                                    variant: "primary",
                                    text: U.intl.string(U.t.zoztQA),
                                    onClick: () => (0, ox.A)(uk(i)),
                                })
                              : (0, S.jsx)(v.$, {
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
                                            (0, uD.n)({ sku: r, application: a, analyticsLocations: l }));
                                    },
                                }),
                      }),
                  ],
              });
}
var uB = n(933832),
    uz = n(789645);
function uY(e) {
    let { refund: t, locale: n } = e,
        i = uk(n),
        s = t.eligible ? uB.CheckmarkLargeIcon : uz.P;
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsx)(uj.H, { className: uV.mW, children: U.intl.string(U.t["n/27pr"]) }),
            (0, S.jsxs)("div", {
                className: uV.iL,
                children: [
                    (0, S.jsx)("div", {
                        children: (function (e, t) {
                            if (null == e.window)
                                return e.policy === uS.IN_GAME_ITEM
                                    ? U.intl.format(U.t["5lvoVS"], { supportURL: t })
                                    : U.intl.string(U.t.s9TZM1);
                            let n = e.window.days;
                            switch (e.policy) {
                                case uS.PREMIUM:
                                    return e.eligible
                                        ? U.intl.format(U.t.EPYteX, { dateLimit: n, supportURL: t })
                                        : U.intl.formatToPlainString(U.t.dk7vyL, { dateLimit: n });
                                case uS.GIFT:
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
                    t.policy !== uS.IN_GAME_ITEM &&
                        (0, S.jsxs)("div", {
                            className: uV.My,
                            children: [
                                (0, S.jsx)("div", {
                                    className: uV.Kf,
                                    children:
                                        null != t.window &&
                                        (0, S.jsxs)("div", {
                                            className: uV._Z,
                                            children: [
                                                (0, S.jsx)(uj.H, {
                                                    className: uV.ud,
                                                    children: U.intl.string(U.t.H0RNz4),
                                                }),
                                                (0, S.jsxs)("div", {
                                                    className: uV.z9,
                                                    children: [
                                                        (0, S.jsx)(s, { className: uV.xb, color: "currentColor" }),
                                                        (0, S.jsx)("div", {
                                                            children: U.intl.formatToPlainString(U.t["7dtXa/"], {
                                                                daysSincePurchase: t.window.days_since_purchase,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                }),
                                (0, S.jsx)(nc.Anchor, { href: i, children: U.intl.string(U.t.re5nOB) }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var uX = n(679897);
function uH(e) {
    let { description: t, cost: n } = e;
    return (0, S.jsx)("li", {
        className: uV.mg,
        children: (0, S.jsxs)(sb.A, {
            justify: sb.A.Justify.BETWEEN,
            children: [(0, S.jsx)("div", { children: t }), (0, S.jsx)("div", { children: n })],
        }),
    });
}
function uW(e) {
    let { value: t, copyText: n, copyFeedbackText: i } = e,
        [s, l] = T.useState(!1),
        [r, a] = T.useState(!1);
    return (0, S.jsx)(sE.m, {
        forceOpen: r,
        text: s ? i : n,
        children: (0, S.jsx)(n9.D, {
            onMouseEnter: () => {
                s && l(!1);
            },
            onMouseLeave: () => {
                a(!1);
            },
            onClick: function () {
                (0, uO.C)(t, () => {
                    (a(!0), l(!0));
                });
            },
            children: (0, S.jsx)("div", { className: uV.l9, children: t }),
        }),
    });
}
function uK(e) {
    let { paymentId: t } = e;
    return (0, S.jsx)("li", {
        className: uV.mg,
        children: (0, S.jsxs)("div", {
            className: uV.bx,
            children: [
                (0, S.jsx)("div", { children: U.intl.string(U.t["UQim+r"]) }),
                (0, S.jsx)(uW, {
                    value: t,
                    copyText: U.intl.string(U.t["Mdk9+A"]),
                    copyFeedbackText: U.intl.string(U.t["7eIrA2"]),
                }),
            ],
        }),
    });
}
function uZ(e) {
    let { tag: t } = e;
    if (null == t) return null;
    let n = t === up.REVERSED;
    return (0, S.jsxs)(Q.E, {
        variant: "text-xxs/semibold",
        color: "none",
        tag: "span",
        className: iE()(uX.XM, n ? uX.aB : uX.EN),
        children: [
            t === up.REVERSED && U.intl.string(U.t.YQv9Li),
            t === up.PARTIALLY_REFUNDED && U.intl.string(U.t.lYbZzz),
            t === up.REFUNDED && U.intl.string(U.t.ZBb6NK),
        ],
    });
}
function uq(e) {
    let { payment: t, locale: n } = e,
        i = t.payment_source ?? (t.payment_gateway === uU.kM.APPLE_PARTNER ? new oD.Pw({}) : null);
    return null == i
        ? null
        : (0, S.jsx)(oq.A, {
              paymentSource: i,
              locale: n,
              descriptionClassName: uV.iL,
              showLabels: !0,
              showPaymentSourceIcon: !0,
          });
}
function uQ(e) {
    let { receipt: t, locale: n } = e;
    return t.payments.length <= 1
        ? 1 === t.payments.length
            ? (0, S.jsx)(uq, { payment: t.payments[0], locale: n })
            : null
        : (0, S.jsx)(Z.B, {
              children: t.payments.map((e) =>
                  (0, S.jsxs)(
                      sb.A,
                      {
                          justify: sb.A.Justify.BETWEEN,
                          align: sb.A.Align.CENTER,
                          children: [
                              (0, S.jsx)(uq, { payment: e, locale: n }),
                              (0, S.jsxs)(Z.B, {
                                  direction: "horizontal",
                                  align: "center",
                                  gap: 8,
                                  fullWidth: !1,
                                  children: [
                                      (0, S.jsx)(uZ, { tag: e.tag }),
                                      (0, S.jsx)(Q.E, {
                                          variant: "text-md/normal",
                                          color: "text-subtle",
                                          children: uw(e.amount, t.currency),
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
function u$(e) {
    let { guildProduct: t, locale: n } = e;
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsx)("div", { className: uV.ts }),
            t.delisted
                ? (0, S.jsx)(uv.p, {
                      messageType: uv.Y.WARNING,
                      action: (0, S.jsx)(v.$, {
                          variant: "overlay-secondary",
                          text: U.intl.string(U.t.zoztQA),
                          onClick: () => (0, ox.A)(uk(n)),
                      }),
                      children: U.intl.string(U.t["3AvulN"]),
                  })
                : null != t.guild_id && (0, S.jsx)(uL.Q, { guildId: t.guild_id, guildProductListingId: t.listing_id }),
        ],
    });
}
function uJ(e) {
    let { receipt: t, locale: n, hasLinkedToApplication: i } = e,
        { currency: s, guild_product: l, game_item: r, refund: a } = t;
    return (0, S.jsx)(n9.D, {
        onClick: (e) => e.stopPropagation(),
        children: (0, S.jsxs)("div", {
            className: uV.WI,
            children: [
                (0, S.jsx)(uj.H, { className: uV.mW, children: U.intl.string(U.t.nyzoFb) }),
                (0, S.jsxs)("div", {
                    className: iE()(uV.iL, uV.W),
                    children: [
                        (0, S.jsx)(uQ, { receipt: t, locale: n }),
                        (0, S.jsxs)("ul", {
                            children: [
                                null != t.subtotal &&
                                    (0, S.jsxs)(S.Fragment, {
                                        children: [
                                            (0, S.jsx)(uH, { description: t.description, cost: uw(t.subtotal, s) }),
                                            (0, S.jsx)(uH, {
                                                description: U.intl.string(U.t.QgWXht),
                                                cost: uw(t.tax, s),
                                            }),
                                        ],
                                    }),
                                (0, S.jsx)(uH, { description: U.intl.string(U.t.txajQG), cost: uw(t.total, s) }),
                                t.amount_refunded > 0 &&
                                    (0, S.jsxs)(S.Fragment, {
                                        children: [
                                            (0, S.jsx)(uH, {
                                                description: U.intl.string(U.t["A+I0AP"]),
                                                cost: uw(-t.amount_refunded, s),
                                            }),
                                            (0, S.jsx)(uH, {
                                                description: U.intl.string(U.t.xER6Wi),
                                                cost: uw(t.net, s),
                                            }),
                                        ],
                                    }),
                                (0, S.jsx)(uK, { paymentId: t.id }),
                                l?.guild_id != null &&
                                    (0, S.jsx)(uL.u, { guildId: l.guild_id, guildProductListingId: l.listing_id }),
                            ],
                        }),
                    ],
                }),
                null != l && (0, S.jsx)(u$, { guildProduct: l, locale: n }),
                (0, S.jsx)(uR.A, { payment: t.receipt_payment }),
                null != r && (0, S.jsx)(uF, { receipt: t, gameItem: r, locale: n, hasLinkedToApplication: i }),
                null != a && (0, S.jsx)(uY, { refund: a, locale: n }),
            ],
        }),
    });
}
function u0(e) {
    let { withGradient: t } = e;
    return t
        ? (0, S.jsx)(uy.A, { size: 24, iconSize: 16, color: n6.A.unsafe_rawColors.NEUTRAL_1, className: uV.Sy })
        : (0, S.jsx)("div", {
              className: iE()(uV.Sy, uV.uX, uV.Xr),
              children: (0, S.jsx)(ad.t, { size: "custom", width: 16, height: 16, color: n6.A.colors.ICON_DEFAULT }),
          });
}
function u1(e) {
    let { receipt: t } = e,
        n = t.sku?.application,
        i = (0, f.bG)([sL.A], () => sL.A.getGuild(n?.guildId));
    switch (t.icon) {
        case ux.NITRO:
            return (0, S.jsx)(u0, { withGradient: !0 });
        case ux.NITRO_BASIC:
            return (0, S.jsx)(u0, { withGradient: !1 });
        case ux.SHOP:
            return (0, S.jsx)(u_.U, { size: "custom", width: 23, height: 23, color: "currentColor", className: uV.sV });
        case ux.APPLICATION:
        case ux.PRODUCT:
            return (0, S.jsx)(sn.A, {
                className: uV.Sy,
                guildClassName: uV.zA,
                game: t.icon === ux.APPLICATION ? n : void 0,
                guild: i,
                size: sn.M.XSMALL,
                skuId: t.sku?.id,
            });
    }
}
function u2(e) {
    let { receipt: t, hasLinkedToApplication: n } = e,
        { game_item: i } = t;
    if (null != i && t.status === uh.PAID)
        switch (i.status) {
            case uT.CLAIMED:
                return (0, S.jsx)("span", { className: uV.gD, children: U.intl.string(U.t.lIsIFo) });
            case uT.UNCLAIMED:
                return (0, S.jsx)("span", { className: uV.Tf, children: U.intl.string(U.t["+tqSi3"]) });
            case uT.REDEEMED:
                return (0, S.jsx)("span", { className: uV.gD, children: U.intl.string(U.t.Osji1u) });
            case uT.FAILED:
                return (0, S.jsx)("span", { className: uV.ob, children: U.intl.string(U.t.Yo4ru6) });
            default:
                return n
                    ? (0, S.jsx)("span", { className: uV.Tf, children: U.intl.string(U.t.y7F0Re) })
                    : (0, S.jsx)("span", { className: uV.Tf, children: U.intl.string(U.t.HHC5Z4) });
        }
    switch (t.status) {
        case uh.PENDING:
            return (0, S.jsx)("span", { className: uV.Xg, children: U.intl.string(U.t.y7F0Re) });
        case uh.FAILED:
            return (0, S.jsx)("span", { className: uV.ob, children: U.intl.string(U.t.Yo4ru6) });
        case uh.REVERSED:
            return (0, S.jsx)("span", { className: uV.ob, children: U.intl.string(U.t.YQv9Li) });
        case uh.CANCELED:
            return (0, S.jsx)("span", { className: uV.ob, children: U.intl.string(U.t.ttkBhy) });
        case uh.PARTIALLY_REFUNDED:
            return (0, S.jsx)("span", { className: uV.gD, children: U.intl.string(U.t.lYbZzz) });
        case uh.REFUNDED:
            return (0, S.jsx)("span", { className: uV.gD, children: U.intl.string(U.t.ZBb6NK) });
        case uh.PAID:
            return null;
    }
}
function u3(e) {
    let { receipt: t, locale: n, className: i } = e,
        [s, l] = T.useState(!1),
        { hasAlreadyLinked: r } = (0, uC.RD)(null != t.game_item ? t.sku?.application : void 0);
    return (0, S.jsx)(ud.tG, {
        id: t.id,
        children: (e) =>
            (0, S.jsxs)(n9.D, {
                onClick: () => l(!s),
                "data-expanded": s,
                className: iE()(uV.Ji, i),
                focusProps: { offset: 4 },
                ...e,
                children: [
                    (0, S.jsxs)(sb.A, {
                        className: uV.J7,
                        align: sb.A.Align.CENTER,
                        "data-expanded": s,
                        children: [
                            (0, S.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                className: uV.p6,
                                children: (0, ip.i$)(ix()(t.created_at), "MM/DD/YYYY"),
                            }),
                            (0, S.jsxs)("div", {
                                className: uV.h_,
                                children: [
                                    (0, S.jsx)(u1, { receipt: t }),
                                    (0, S.jsx)("div", {
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
                                        ? (0, S.jsx)(sE.m, {
                                              text: U.intl.string(U.t.QddTpm),
                                              children: (0, S.jsx)(uN.GiftIcon, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: uV.ez,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            (0, S.jsxs)("div", {
                                className: uV.vj,
                                children: [
                                    (0, S.jsx)(u2, { receipt: t, hasLinkedToApplication: r }),
                                    (0, S.jsx)("span", { className: uV.q9, children: uw(t.net, t.currency) }),
                                ],
                            }),
                            (0, S.jsx)(ub.A, {
                                className: uV.fT,
                                direction: s ? ub.A.Directions.UP : ub.A.Directions.DOWN,
                            }),
                        ],
                    }),
                    s ? (0, S.jsx)(uJ, { receipt: t, locale: n, hasLinkedToApplication: r }) : null,
                ],
            }),
    });
}
var u5 = n(949779);
function u4(e) {
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
    return (0, S.jsx)(ud.hD, {
        navigator: d,
        children: (0, S.jsx)(ud.PR, {
            children: (e) => {
                let { ref: t, ...i } = e;
                return (0, S.jsx)(um.A, {
                    className: u5.GD,
                    currentPageIndex: l,
                    onChangePage: u,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...i,
                    children: (0, S.jsx)(uc.Ch, {
                        className: u5.Bd,
                        ref: s,
                        overflow: "auto",
                        children: o.map((e) =>
                            (0, S.jsx)(u3, { className: iE()(u5.Nj, u5.Bd), receipt: e, locale: n }, e.id),
                        ),
                    }),
                });
            },
        }),
    });
}
function u6(e) {
    let { subscription: t } = e;
    return (
        th()(null != t.paymentGateway, "Expected payment gateway when rendering for external subscription"),
        (0, S.jsxs)(oV.Z, {
            className: u5.K1,
            children: [
                (0, S.jsx)("div", {
                    className: u5.BF,
                    children: U.intl.format(U.t["6mIX6s"], { paymentGatewayName: uU.qm[t.paymentGateway] }),
                }),
                (0, S.jsx)("div", {
                    className: u5.Q2,
                    children: U.intl.format(U.t.eG0uZB, {
                        paymentGatewayName: uU.qm[t.paymentGateway],
                        billingHistoryLink: (0, af.tW)(t.paymentGateway, "BILLING_HISTORY"),
                    }),
                }),
            ],
        })
    );
}
function u8(e) {
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
        ? (0, S.jsxs)("div", {
              className: u5.GD,
              children: [
                  null != r && a ? (0, S.jsx)(u6, { subscription: r }) : null,
                  n.length > 0
                      ? (0, S.jsxs)("div", {
                            className: iE()(u5.PQ, u5.GD),
                            children: [
                                (0, S.jsx)("div", {
                                    className: iE()(u5.Nj, u5.Bd),
                                    children: (0, S.jsxs)(sb.A, {
                                        className: u5.Yi,
                                        children: [
                                            (0, S.jsx)("div", {
                                                className: uV.p6,
                                                children: U.intl.string(U.t["5t11BV"]),
                                            }),
                                            (0, S.jsx)("div", {
                                                className: u5.Ir,
                                                children: U.intl.string(U.t.yAAPb2),
                                            }),
                                            (0, S.jsx)("div", {
                                                className: uV.vj,
                                                children: U.intl.string(U.t["6MqHXV"]),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, S.jsx)(u4, { receipts: n, locale: t, loadNextPage: l }),
                            ],
                        })
                      : s
                        ? (0, S.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              children: U.intl.string(U.t["fb3n+4"]),
                          })
                        : a
                          ? null
                          : (0, S.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: U.intl.string(U.t.GqvDkk),
                            }),
              ],
          })
        : (0, S.jsx)(oC.y, {});
}
var u7 = n(545075);
let u9 = (0, E.E2)(h.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            var e;
            let t = (0, f.bG)([ut.default], () => ut.default.locale),
                { enabled: n } = ((e = { location: "TransactionHistory" }), { enabled: uu.useConfig(e).enabled });
            return (0, S.jsxs)(S.Fragment, {
                children: [(0, S.jsx)(u7.kb, {}), n ? (0, S.jsx)(u8, { locale: t }) : (0, S.jsx)(ua.A, { locale: t })],
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.obLrcK)],
    }),
    de = (0, E.zZ)(h.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.obLrcK),
        buildLayout: () => [u9],
    }),
    dt = (0, E.t_)(h.X.BILLING_PANEL, {
        useTitle: () => U.intl.string(U.t.oeUm2s),
        buildLayout: () => [ur, de],
        useObscuredNotice: oh.L,
    }),
    dn = (0, E.i4)(h.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.oeUm2s),
        icon: oE.B,
        buildLayout: () => [dt],
    });
var di = n(70283),
    ds = n(682618),
    dl = n(92202),
    dr = n(859492),
    da = n(962644),
    du = n(35587),
    dd = n(86379);
let dc = (0, E.E2)(h.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: u7.uK,
        usePredicate: () => (0, dd.Hp)(),
        useSearchTerms: () => [U.intl.string(U.t.vwMEHS)],
    }),
    dg = (0, E.zZ)(h.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [dc] });
var dm = n(704333),
    dA = n(414499),
    dE = n(31300),
    dh = n(997101);
let dx = "https://discord.com",
    dp = {
        [dh.d.US]: [
            { id: "walmart", name: "Walmart", url: dx },
            { id: "target", name: "Target", url: dx },
            { id: "amazon", name: "Amazon", url: dx },
            { id: "best_buy", name: "Best Buy", url: dx },
        ],
        [dh.d.GB]: [
            { id: "tesco", name: "Tesco", url: dx },
            { id: "smyths_toys", name: "Smythstoys", url: dx },
            { id: "sainsburys", name: "Sainsbury\u2019s", url: dx },
            { id: "asda", name: "Asda", url: dx },
        ],
        [dh.d.CA]: [{ id: "eb_games", name: "EBGames", url: dx }],
        [dh.d.IT]: [{ id: "gamelife", name: "Gamelife", url: dx }],
        [dh.d.ES]: [{ id: "game", name: "GAME", url: dx }],
        [dh.d.FR]: [{ id: "micromania", name: "Micromania", url: dx }],
    },
    dS = [],
    dT = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="216" height="162"><rect x="1" y="1" width="214" height="160" fill="none" stroke="hotpink" stroke-width="2"/></svg>')}`;
var df = n(534284);
function dI(e) {
    let { enabled: t } = (0, dl.K)({ location: e }),
        n = (0, df.P)(),
        i = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.storeCountry?.country);
    return t && n && null != i && oT.ob.has(i);
}
var d_ = n(178881);
function dN(e) {
    let { icon: t, children: n } = e;
    return (0, S.jsxs)(Q.E, {
        variant: "text-xs/normal",
        color: "text-default",
        className: d_.A,
        children: [
            (0, S.jsx)(t, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, S.jsx)("span", { children: n }),
        ],
    });
}
let dC = (0, E.zZ)(h.X.GIFT_CARDS_MARKETING_BANNER_CATEGORY, {
        buildLayout: () => [dy],
        usePredicate: () => dI("GiftInventoryMarketingBanner"),
    }),
    dy = (0, E.E2)(h.X.GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = dI("GiftCardsGiftInventoryBanner"),
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
                        (null == t ? dS : (dp[t] ?? dS)).map((e) => ({
                            text: e.name,
                            onClick: () => {
                                (n(e), (0, ox.A)(e.url));
                            },
                        })),
                    [t, n],
                );
            return e
                ? (0, S.jsx)(oS, {
                      size: "compact",
                      title: U.intl.string(of.default.Ja5Q8Z),
                      graphicSrc: dT,
                      actions: i,
                      children: (0, S.jsxs)(Z.B, {
                          direction: "vertical",
                          align: "start",
                          gap: 8,
                          children: [
                              (0, S.jsx)(dN, { icon: dm.B, children: U.intl.string(of.default["9xo1g9"]) }),
                              (0, S.jsx)(dN, { icon: dA.h, children: U.intl.string(of.default.I5UWh9) }),
                              (0, S.jsx)(dN, {
                                  icon: uN.GiftIcon,
                                  children: U.intl.format(of.default.ZuneBP, {
                                      onBillingSettingsClick: () => (0, ng.openUserSettings)(h.X.BILLING_PANEL),
                                  }),
                              }),
                              (0, S.jsx)(dN, {
                                  icon: dE.k,
                                  children: U.intl.format(of.default.UwYHGm, { websiteUrl: oT.C1 }),
                              }),
                          ],
                      }),
                  })
                : null;
        },
        useSearchTerms: () => [],
    });
var db = n(982240),
    dv = n(5755),
    dj = n(914410),
    dO = n(556427),
    dL = n(573343);
let dR = "UserSettingsGiftingBadgeProgress";
function dD(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, S.jsxs)("div", {
        className: iE()(dL.fO, { [dL.bF]: i }),
        children: [
            null != n && (0, S.jsx)("img", { src: n, alt: "", className: dL.si }),
            (0, S.jsxs)("div", {
                className: dL.tc,
                children: [
                    (0, S.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, S.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: U.intl.format(dO.default.qvx9E4, { count: (0, db.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function dP(e) {
    let { tiers: t, currentTier: n } = e,
        i = (0, dr.b9)(dR);
    return (0, S.jsx)("div", {
        className: dL.dw,
        children: t.map((e) => (0, S.jsx)(dD, { tier: e, iconUrl: (0, dr.Se)(e, i), active: e.key === n?.key }, e.key)),
    });
}
function dG(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(tw.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: s } = (0, dv.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, S.jsx)("div", {
        className: dL.NG,
        children: (0, S.jsx)(v.$, {
            variant: "primary",
            icon: uN.GiftIcon,
            text: U.intl.string(dO.default.DZnomS),
            onClick: s,
        }),
    });
}
function dM(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: s, giftsRemaining: l } = e,
        r = (0, db.rL)(i),
        a = (0, db.rL)(s),
        o = (0, dr.GZ)(n, i, s),
        u = (0, dr.b9)(dR),
        d = (0, dr.Se)(i, u),
        c = (0, dr.Se)(s, u);
    return (
        (t =
            null != s
                ? U.intl.formatToPlainString(dO.default.XTX3OO, { count: l, nextTier: s?.name ?? "" })
                : U.intl.formatToPlainString(dO.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, S.jsxs)("div", {
            className: dL.mY,
            children: [
                null != d &&
                    (0, S.jsx)("div", {
                        className: dL.fC,
                        children: (0, S.jsx)("img", { src: d, alt: "", className: dL.qS }),
                    }),
                (0, S.jsxs)("div", {
                    className: dL.Qs,
                    children: [
                        (0, S.jsx)(Q.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, S.jsx)(dj.Ay, { variant: dj.qP.BLUE, weight: dj.fh.MEDIUM, progress: o }),
                        (0, S.jsx)(Q.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: dL.qg,
                            children: U.intl.format(dO.default.iIpfQe, {
                                threshold: null != s ? a : r,
                                count: null != s ? n : r,
                            }),
                        }),
                    ],
                }),
                null != c &&
                    (0, S.jsx)("div", {
                        className: dL.fC,
                        children: (0, S.jsx)("img", { src: c, alt: "", className: dL.qS }),
                    }),
            ],
        })
    );
}
function dU(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: s,
            giftsRemaining: l,
            tiers: r,
        } = (0, f.cf)([db.Ay], () => ({
            badgeProgress: db.Ay.getSingleRequirementProgress(di.$.GIFTING)?.current ?? 0,
            currentTier: db.Ay.getCurrentTier(di.$.GIFTING),
            nextTier: db.Ay.getNextTier(di.$.GIFTING),
            giftsRemaining: db.Ay.getRemainingToNextTier(di.$.GIFTING),
            tiers: db.Ay.getBadgeById(di.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, S.jsxs)("div", {
              className: dL.kL,
              children: [
                  (0, S.jsxs)("div", {
                      className: dL.Jo,
                      children: [
                          n > 0 &&
                              (0, S.jsxs)(S.Fragment, {
                                  children: [
                                      (0, S.jsx)(dM, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: s,
                                          giftsRemaining: l,
                                      }),
                                      (0, S.jsx)("div", { className: dL.yF }),
                                  ],
                              }),
                          (0, S.jsx)(dP, { tiers: r, currentTier: i }),
                          (0, S.jsx)(Q.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: dL.PJ,
                              children: U.intl.string(dO.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, S.jsx)(dG, { analyticsLocation: t, location: dR }),
              ],
          });
}
let dV = (0, E.zZ)(h.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => U.intl.string(dO.default.sFokBp),
        buildLayout: () => [dk],
        usePredicate: () => {
            let e = (0, dr.F5)("gift_inventory"),
                t = (0, f.bG)([db.Ay], () => db.Ay.getBadgeById(di.$.GIFTING));
            return e && null != t;
        },
    }),
    dk = (0, E.E2)(h.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [U.intl.string(dO.default.sFokBp)],
        Component: () => (0, S.jsx)(dU, {}),
    });
var dw = n(264779),
    dF = n(412260),
    dB = n(555393),
    dz = n(725807),
    dY = n(212168),
    dX = n(469778),
    dH = n(45938),
    dW = n(109802),
    dK = n(869038),
    dZ = n(380856);
function dq(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, S.jsxs)(sb.A, {
        className: iE()(dZ.wx, n),
        align: sb.A.Align.CENTER,
        children: [
            (0, S.jsx)("div", { className: dZ.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function dQ(e) {
    let { children: t, className: n } = e;
    return (0, S.jsx)("div", { className: iE()(dZ.rf, n), children: t });
}
class d$ extends T.PureComponent {
    static Header = dq;
    static Body = dQ;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, S.jsx)("div", { className: iE()(dZ.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var dJ = n(180522),
    d0 = n(871123),
    d1 = n(366523),
    d2 = n(280450),
    d3 = n(30793),
    d5 = n(97352),
    d4 = n(67480),
    d6 = n(615396),
    d8 = n(274904);
class d7 extends T.PureComponent {
    _copyModeTimeout = new rX.Ep();
    state = { copyMode: dW.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case dW.q.SUCCESS:
                return U.intl.string(U.t.XVvPjU);
            case dW.q.ERROR:
                return U.intl.string(U.t.i4GM3L);
            default:
                return U.intl.string(U.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        dK.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, dH.AK)(t, n),
            (0, uO.C)(
                e,
                () => this.setState({ copyMode: dW.q.SUCCESS }),
                () => this.setState({ copyMode: dW.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: dW.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, S.jsxs)(sb.A, {
            direction: sb.A.Direction.VERTICAL,
            className: d8.Gj,
            children: [
                (0, S.jsx)(dW.e, {
                    className: d8.ph,
                    value: (0, dH.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uO.p5,
                    hideMessage: e ? U.intl.string(U.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: l3.XD.BRAND,
                    buttonLook: l3.pR.FILLED,
                }),
                (0, S.jsxs)("div", {
                    className: d8.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, S.jsxs)(T.Fragment, {
                                  children: [
                                      U.intl.format(U.t.ltVZcJ, { hours: t.expiresAt.diff(ix()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, S.jsx)(n9.D, {
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
class d9 extends T.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await dK.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && dK.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, d0.bF)(e)
            ? (0, S.jsx)(d1.e, { shape: "square", sku: e, containerClassName: d8.ez })
            : null != t
              ? (0, S.jsx)(dJ.A, { giftStyle: t, className: d8.ez, shouldAnimate: this.state.isHovered })
              : (0, S.jsx)(sn.A, { game: n, size: sn.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, d0.bF)(e)
            ? (0, S.jsxs)("div", {
                  className: iE()(d8.Oc, d8.ic),
                  children: [
                      (0, S.jsx)(sn.A, { game: n, size: sn.M.XSMALL, skuId: e.id, className: d8._u }),
                      U.intl.format(U.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, S.jsx)("div", { className: d8.Oc, children: U.intl.format(U.t.zMcvcA, { copies: t.length }) });
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
            (0, S.jsx)("div", { className: d8.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, S.jsxs)(sb.A, {
            justify: sb.A.Justify.BETWEEN,
            align: sb.A.Align.CENTER,
            className: d8.pe,
            children: [
                (0, S.jsx)(Q.E, { variant: "text-md/normal", children: U.intl.string(U.t.lELyPj) }),
                (0, S.jsx)(v.$, {
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
        return (0, S.jsxs)(d$, {
            className: i,
            children: [
                (0, S.jsx)(n9.D, {
                    onClick: this.handleToggleOpen,
                    className: d8.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, S.jsx)(d$.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, S.jsxs)("div", {
                            className: d8.MY,
                            children: [
                                (0, S.jsxs)(sb.A, {
                                    align: sb.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, S.jsxs)("div", {
                                            className: d8.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, S.jsx)(ub.A, {
                                    direction: a ? ub.A.Directions.UP : ub.A.Directions.DOWN,
                                    className: d8.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, S.jsx)(d$.Body, {
                          children: l
                              ? (0, S.jsx)(oC.y, { className: d8.u1 })
                              : (0, S.jsxs)(T.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, S.jsx)(d7, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let ce = f.Ay.connectStores([d4.A, tu.A, d3.A, i6.A, d5.A, d2.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        s = d4.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = d3.A.getForGifterSKUAndPlan(d2.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: tu.A.enabled,
        isFetching: d3.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: d3.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: i6.A.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, d6.c9)(n) : null,
        giftCodes: l,
    };
})(d9);
var ct = n(725570),
    cn = n(736653),
    ci = n(46054);
let cs = ix().duration(30, "days");
var cl = n(416052),
    cr = n(878309);
function ca(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, S.jsx)(sf.a, {
        title: "",
        size: "md",
        input: (0, S.jsx)("div", { className: cr.aR }),
        onClose: async () => await t(),
        actions: [{ text: U.intl.string(U.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, S.jsxs)("div", {
            className: cr.t4,
            children: [
                (0, S.jsx)(N.D, { variant: "heading-xl/semibold", children: U.intl.string(U.t.iufib1) }),
                (0, S.jsx)(Q.E, { variant: "text-md/normal", className: cr.G3, children: U.intl.string(U.t.eAn6z2) }),
            ],
        }),
    });
}
let co = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: s, transitionState: l } = e,
        [r, a] = T.useState(null),
        o = (0, tZ.GV)(),
        { analyticsLocations: u } = (0, ez.Ay)(tw.A.USER_SETTINGS_GIFT_INVENTORY);
    return (T.useEffect(() => {
        null == i &&
            (0, dw.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, s.id, s.outboundTitle, s.partnerId, n, u]),
    null != r)
        ? (0, S.jsx)(ca, { onClose: t, transitionState: l })
        : null == i
          ? (0, S.jsx)(oC.y, { className: cr.Lq })
          : (0, S.jsx)(sf.a, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, S.jsxs)("div", {
                    className: cr.N1,
                    children: [
                        (0, S.jsx)("div", { className: cr.Qw }),
                        (0, S.jsx)(N.D, { variant: "heading-xl/semibold", children: U.intl.string(U.t["23BfZh"]) }),
                        (0, S.jsx)(Q.E, {
                            variant: "text-md/normal",
                            className: cr.G3,
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
                            let e = (0, dw.kc)(i, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, S.jsxs)("div", {
                    children: [
                        (0, S.jsx)(su.c, { className: cr.M5 }),
                        (0, S.jsx)(t6.D, {
                            label: U.intl.string(U.t.s9LFQh),
                            helperText: U.intl.string(U.t["F+nFTZ"]),
                            children: (0, S.jsx)(cl.A, {
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
var cu = n(136380);
function cd(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [s, l] = T.useState(!1),
        [r, a] = T.useState(!1);
    function o() {
        return l((e) => !e);
    }
    let u = (0, cn.Ay)(),
        d = (0, dw.WD)(n.id, u),
        c = null != i,
        g = T.useMemo(
            () =>
                (0, ip.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? ix()(n.outboundRedemptionEndDate)
                            : ix()(n.endDate).add(cs)
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
        A = (0, dB.N)()?.isEligible === !0,
        E = T.useCallback(() => a(!1), []),
        { outboundTitle: h, outboundTermsAndConditions: x } = n;
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsxs)("div", {
                className: cu.AX,
                children: [
                    (0, S.jsxs)("div", {
                        className: cu.Pg,
                        children: [
                            (0, S.jsxs)("div", {
                                className: cu.At,
                                children: [
                                    (0, S.jsx)("div", {
                                        className: cu.$G,
                                        children: (0, S.jsx)("img", { alt: "", src: d, className: cu.IJ }),
                                    }),
                                    (0, S.jsxs)("div", {
                                        children: [
                                            (0, S.jsx)(N.D, { variant: "heading-md/semibold", children: h }),
                                            (0, S.jsx)(Q.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (c || A) && (0, S.jsx)(v.$, { text: m, onClick: () => a(!0), size: "sm" }),
                        ],
                    }),
                    s &&
                        (0, S.jsx)(Q.E, {
                            className: cu.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: ci.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, S.jsx)(ct.aF, {
                    renderModal: (e) =>
                        (0, S.jsx)(co, {
                            ...e,
                            onClose: E,
                            onClaim: da.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: E,
                }),
        ],
    });
}
function cc(e) {
    let { redesign: t = !1 } = e,
        n = (0, f.yK)([dX.A], () => dX.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, dB.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: s,
            claimedEndedOutboundPromotions: l,
            claimedOutboundPromotionCodeMap: r,
        } = (0, du.y7)(),
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
                : (0, S.jsxs)("div", {
                      className: cu.N1,
                      children: [
                          (0, S.jsx)(N.D, { variant: "heading-md/semibold", children: U.intl.string(U.t.wFsj3B) }),
                          (0, S.jsx)(su.c, { className: cu.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, S.jsxs)("div", {
                      className: cu.uo,
                      children: [
                          (0, S.jsx)(ad.t, {
                              size: "md",
                              color: n6.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: cu.PC,
                          }),
                          (0, S.jsx)(Q.E, {
                              variant: "text-md/normal",
                              className: cu.Qw,
                              children: U.intl.format(U.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tH.default)(), (0, t7.pX)(I.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, S.jsx)(dz.A, {
                              showGradient: !0,
                              className: cu.aA,
                              subscriptionTier: tJ.pe.TIER_2,
                              textOptions: { textOverride: U.intl.string(U.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, S.jsxs)("div", {
        children: [
            g,
            (0, S.jsx)(dY.A, {
                className: cu.Yj,
                isShown: !1 === i && c,
                type: dY.i.PREMIUM,
                hasBackground: !0,
                children: (0, S.jsxs)("div", {
                    className: cu.DE,
                    children: [
                        m,
                        l.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, S.jsx)(cd, { outboundPromotion: n, code: t }, n.id);
                        }),
                        s.map((e) => (0, S.jsx)(cd, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, S.jsx)(
                                  ce,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: tJ.FB,
                                  },
                                  (0, dH.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, S.jsx)(
                                  ce,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: tJ.Bu,
                                  },
                                  (0, dH.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, S.jsx)(
                                  ce,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: tJ.Bu,
                                  },
                                  (0, dH.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let cg = (0, E.zZ)(h.X.MY_GIFTS_CATEGORY, {
        useTitle: cA,
        buildLayout: () => [cm],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, f.cf)(
                    [dF.A],
                    () => ({
                        claimedOutboundPromotionCodes: dF.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: dF.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, du.T1)({ includeClaimedPromotions: !0 }),
                i = (0, dw.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    cm = (0, E.E2)(h.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [cA()],
        Component: () => (0, S.jsx)(cc, { redesign: !0 }),
    });
function cA() {
    return U.intl.string(U.t.YzjdWJ);
}
var cE = n(339048);
function ch() {
    let e = (0, f.yK)([dX.A], () => dX.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = W().groupBy(e, (e) => (0, dH.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [n, i] = T.useState(!1);
    if (
        (T.useEffect(() => {
            (0, cE.XJ)().then(() => i(!0));
        }, []),
        !n)
    )
        return (0, S.jsx)(oC.y, { className: cu.Lq });
    if (0 === Object.keys(t).length)
        return (0, S.jsxs)("div", {
            className: cu.p$,
            children: [
                (0, S.jsx)(uj.H, { className: cu.ks, children: U.intl.string(U.t.B1qgZn) }),
                (0, S.jsx)("p", {
                    className: cu.WO,
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
            let { skuId: n, subscriptionPlanId: i, giftStyle: s } = (0, dH.X6)(e);
            return (0, S.jsx)(ce, { skuId: n, subscriptionPlanId: i, entitlements: t[e], giftStyle: s }, e);
        });
    return (0, S.jsx)(Z.B, { gap: "lg", children: s });
}
let cx = (0, E.zZ)(h.X.PURCHASED_GIFTS_CATEGORY, { useTitle: cS, buildLayout: () => [cp] }),
    cp = (0, E.E2)(h.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [cS()], Component: () => (0, S.jsx)(ch, {}) });
function cS() {
    return U.intl.string(U.t.FWe6CP);
}
var cT = n(532446),
    cf = n(499454);
class cI extends T.Component {
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
            let e = (0, dH.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await dK.Ay.resolveGiftCode(e);
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
                (0, cf.h)({ processedCode: e }),
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
        return (0, S.jsx)(n7.n, {
            label: e ? void 0 : U.intl.string(U.t["il+VCo"]),
            children: (0, S.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, S.jsxs)(cT.M, {
                    children: [
                        (0, S.jsx)(s_.k, {
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
                        (0, S.jsx)(v.$, {
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
function c_(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, o7.c)({ location: "UserSettingsBilling" }),
        i = T.useContext(td.AnalyticsContext),
        s = (0, f.bG)([tu.A], () => tu.A.enabled);
    return (0, S.jsx)(cI, { analyticsContext: i, obscureInput: s, acceptGiftCardRedemption: n, redesign: t });
}
let cN = (0, E.zZ)(h.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => U.intl.string(U.t["il+VCo"]),
        buildLayout: () => [cC],
        usePredicate: () => !(0, dd.Hp)(),
    }),
    cC = (0, E.E2)(h.X.REDEEM_CODE_INPUT, {
        Component: () => (0, S.jsx)(c_, { redesign: !0 }),
        useSearchTerms: () => [U.intl.string(U.t["jcSP+g"]), U.intl.string(U.t["il+VCo"])],
    }),
    cy = (0, E.t_)(h.X.GIFT_PANEL, {
        useTitle: () => U.intl.string(U.t["jcSP+g"]),
        buildLayout: () => [dC, cN, cg, dV, cx, dg],
        initialize: () => {
            (da.Ay.fetchClaimedOutboundPromotionCodes(), (0, dr.Ig)("gift_inventory") && (0, ds.o0)(di.$.GIFTING));
        },
    }),
    cb = (0, E.i4)(h.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["jcSP+g"]),
        icon: uN.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, du.IO)().length;
            return T.useMemo(() => ({ badgeType: p.Xi.COUNT, count: e }), [e]);
        },
        getDismissibleBadges: () => {
            let e = { location: "UserSettingsGiftInventory" },
                t = o7.A.getConfig(e).enabled,
                n = dl.A.getConfig(e).enabled;
            return t && n ? [{ badgeType: p.Xi.NEW, dismissibleContent: eA.M.GIFT_INVENTORY_SETTINGS_NEW_BADGE }] : [];
        },
        buildLayout: () => [cy],
    });
var cv = n(659758),
    cj = n(549169),
    cO = n(877624),
    cL = n(269115),
    cR = n(462887),
    cD = n(73825),
    cP = n(531260),
    cG = n(160946),
    cM = n(721668),
    cU = n(224016),
    cV = n(526292),
    ck = n(881489),
    cw = n(106512),
    cF = n(22118),
    cB = n(103411),
    cz = n(190187),
    cY = n(930861),
    cX = n(854627),
    cH = n(889227),
    cW = n(326084),
    cK = n(851746),
    cZ = n(664654),
    cq = n(912140),
    cQ = n(953727);
let c$ = (e) => {
        let { className: t, backgroundColor: n, backgroundCircleSize: i, ...s } = e;
        return (0, S.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, cQ.A)({ ...s }),
            children: [
                (0, S.jsx)("circle", { r: i ?? "40%", cx: "50%", cy: "50%", className: n }),
                (0, S.jsxs)("g", {
                    transform: "translate(50, 50) scale(0.6) translate(-51, -52)",
                    children: [
                        (0, S.jsx)("path", {
                            d: "M52.0002 11.7556L28.3402 35.4156V68.6956L52.0002 92.3556L75.6602 68.6956V35.4156L52.0002 11.7556ZM63.8302 63.7556L52.0002 75.6289L40.1702 63.7989V40.3122L52.0002 28.4822L63.8302 40.3122V63.7556Z",
                            fill: "#FF6BFA",
                            className: t,
                        }),
                        (0, S.jsx)("path", {
                            d: "M40.1702 40.3122V63.7989L52.0002 75.6289L63.8302 63.7989V40.3122L52.0002 28.4822L40.1702 40.3122Z",
                            fill: "#FFDEF9",
                        }),
                        (0, S.jsx)("path", {
                            d: "M52.0002 11.7556V28.4822L63.8302 40.3122L75.6602 35.4156L52.0002 11.7556Z",
                            fill: "#FFB0FF",
                        }),
                    ],
                }),
            ],
        });
    },
    cJ = (e) => {
        let { ellipseOpacity: t, circleColor: n, ...i } = e,
            s = (0, cn.Ay)(),
            l = (0, cR.q)(s),
            r = null != n ? n : l ? "url(#paint0_linear_1055_83268)" : "url(#paint0_linear_1282_11557)";
        return (0, S.jsxs)("svg", {
            style: { overflow: "visible" },
            width: "80%",
            height: "80%",
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, cQ.A)({ ...i }),
            children: [
                (0, S.jsxs)("svg", {
                    width: "100",
                    height: "100",
                    viewBox: "0 0 114 114",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, S.jsxs)("defs", {
                            children: [
                                (0, S.jsxs)("linearGradient", {
                                    id: "purple-gradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0%",
                                    children: [
                                        (0, S.jsx)("stop", {
                                            offset: "0%",
                                            style: { stopColor: "#E2C7FA", stopOpacity: 1 },
                                        }),
                                        (0, S.jsx)("stop", {
                                            offset: "100%",
                                            style: { stopColor: "#F3D3DE", stopOpacity: 1 },
                                        }),
                                    ],
                                }),
                                (0, S.jsxs)("linearGradient", {
                                    id: "dark-purple-gradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "0%",
                                    y2: "100%",
                                    children: [
                                        (0, S.jsx)("stop", {
                                            offset: "0%",
                                            style: { stopColor: "rgb(36,23,49)", stopOpacity: 1 },
                                        }),
                                        (0, S.jsx)("stop", {
                                            offset: "100%",
                                            style: { stopColor: "rgb(36,23,49)", stopOpacity: 1 },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, S.jsx)("ellipse", {
                            cx: "57.2768",
                            cy: "57.0796",
                            rx: "56.3726",
                            ry: "56.3726",
                            fill: null != n ? n : r,
                            fillOpacity: null != t ? t : l ? 0.5 : 0.2,
                        }),
                        (0, S.jsxs)("g", {
                            width: "65",
                            transform: "translate(50, 50) scale(.7) translate(-10, -39)",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                (0, S.jsx)("path", {
                                    d: "M42.0084 14.8866L33.7687 17.7832C33.3446 17.9281 32.9766 18.2015 32.7161 18.565C32.4555 18.9285 32.3154 19.3641 32.3154 19.8109C32.3154 20.2576 32.4555 20.6932 32.7161 21.0567C32.9766 21.4203 33.3446 21.6936 33.7687 21.8385L42.0084 24.7351C42.3147 24.8404 42.593 25.0138 42.8221 25.2422C43.0512 25.4705 43.2252 25.7478 43.3309 26.053L46.2373 34.2649C46.3827 34.6875 46.657 35.0543 47.0217 35.3139C47.3865 35.5736 47.8236 35.7132 48.2718 35.7132C48.7201 35.7132 49.1572 35.5736 49.522 35.3139C49.8867 35.0543 50.161 34.6875 50.3064 34.2649L53.2128 26.053C53.3204 25.7488 53.495 25.4725 53.7239 25.2444C53.9528 25.0164 54.23 24.8423 54.5353 24.7351L62.7896 21.8385C63.2136 21.6936 63.5817 21.4203 63.8422 21.0567C64.1028 20.6932 64.2428 20.2576 64.2428 19.8109C64.2428 19.3641 64.1028 18.9285 63.8422 18.565C63.5817 18.2015 63.2136 17.9281 62.7896 17.7832L54.5353 14.8866C54.2315 14.7767 53.9557 14.6018 53.7272 14.374C53.4987 14.1463 53.3231 13.8714 53.2128 13.5687L50.3064 5.34234C50.161 4.91974 49.8867 4.55297 49.522 4.2933C49.1572 4.03363 48.7201 3.89404 48.2718 3.89404C47.8236 3.89404 47.3865 4.03363 47.0217 4.2933C46.657 4.55297 46.3827 4.91974 46.2373 5.34234L43.3309 13.5687C43.2233 13.8729 43.0487 14.1492 42.8198 14.3773C42.591 14.6054 42.3137 14.7794 42.0084 14.8866Z",
                                    fill: "white",
                                    fillOpacity: l ? "0.6" : "0.4",
                                }),
                                (0, S.jsx)("path", {
                                    d: "M34.0878 3.57968L33.0393 0.634802C32.9888 0.483384 32.8917 0.351665 32.7618 0.258321C32.6319 0.164978 32.4759 0.114746 32.3158 0.114746C32.1556 0.114746 31.9996 0.164978 31.8697 0.258321C31.7398 0.351665 31.6427 0.483384 31.5922 0.634802L30.6217 3.57968C30.5838 3.68745 30.5221 3.78534 30.4411 3.86607C30.3601 3.94681 30.2619 4.00831 30.1538 4.04602L27.1555 5.02189C27.0067 5.07415 26.8777 5.17117 26.7865 5.29956C26.6953 5.42795 26.6464 5.58137 26.6464 5.73868C26.6464 5.89598 26.6953 6.04941 26.7865 6.17779C26.8777 6.30618 27.0067 6.4032 27.1555 6.45547L30.0758 7.47451C30.1839 7.51222 30.2821 7.57373 30.3631 7.65446C30.4441 7.7352 30.5059 7.83308 30.5437 7.94085L31.5575 10.8426C31.6081 10.994 31.7052 11.1257 31.835 11.219C31.9649 11.3124 32.121 11.3626 32.2811 11.3626C32.4412 11.3626 32.5973 11.3124 32.7271 11.219C32.857 11.1257 32.9541 10.994 33.0047 10.8426L34.0878 7.94085C34.1257 7.83308 34.1874 7.7352 34.2684 7.65446C34.3494 7.57373 34.4476 7.51222 34.5558 7.47451L37.476 6.45547C37.6249 6.4032 37.7538 6.30618 37.845 6.17779C37.9362 6.04941 37.9852 5.89598 37.9852 5.73868C37.9852 5.58137 37.9362 5.42795 37.845 5.29956C37.7538 5.17117 37.6249 5.07415 37.476 5.02189L34.5211 4.00284C34.4237 3.9656 34.3349 3.90883 34.2604 3.83604C34.1859 3.76326 34.1271 3.676 34.0878 3.57968Z",
                                    fill: "white",
                                    fillOpacity: "0.8",
                                }),
                            ],
                        }),
                    ],
                }),
                (0, S.jsxs)("defs", {
                    children: [
                        (0, S.jsxs)("filter", {
                            id: "filter0_d_1282_11577",
                            x: "-6.55945",
                            y: "0.382812",
                            width: "89.2926",
                            height: "70.3945",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                (0, S.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                (0, S.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha",
                                }),
                                (0, S.jsx)("feOffset", { dy: "4" }),
                                (0, S.jsx)("feGaussianBlur", { stdDeviation: "5" }),
                                (0, S.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
                                (0, S.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
                                }),
                                (0, S.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1282_11577",
                                }),
                                (0, S.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_1282_11577",
                                    result: "shape",
                                }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "paint0_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "paint2_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "paint1_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "paint1_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "paint2_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "paint0_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "paint0_linear_1282_11557",
                            x1: "0.904297",
                            y1: "56.5004",
                            x2: "113.649",
                            y2: "56.5004",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "paint0_linear_684_72736",
                            x1: "0.904236",
                            y1: "57.0796",
                            x2: "113.649",
                            y2: "57.0796",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "paint0_linear_1055_83179",
                            x1: "0.904236",
                            y1: "56.5005",
                            x2: "113.649",
                            y2: "56.5005",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "paint0_linear_1055_83268",
                            x1: "0.904236",
                            y1: "57.2461",
                            x2: "113.649",
                            y2: "57.2461",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                    ],
                }),
                (0, S.jsxs)("g", {
                    filter: l ? void 0 : "url(#filter0_d_1282_11577)",
                    transform: "translate(50, 50) scale(.8) translate(-44, -30)",
                    children: [
                        (0, S.jsx)("path", {
                            d: "M47.5359 37.8795C51.0149 37.8795 53.8352 35.0592 53.8352 31.5801C53.8352 28.1011 51.0149 25.2808 47.5359 25.2808C44.0568 25.2808 41.2365 28.1011 41.2365 31.5801C41.2365 35.0592 44.0568 37.8795 47.5359 37.8795Z",
                            fill: l ? "url(#paint2_linear_1986_8686)" : "url(#paint0_linear_1282_11577)",
                        }),
                        (0, S.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.3385 6.38281C20.599 6.38281 19.1889 7.79297 19.1889 9.53248C19.1889 11.272 20.599 12.6821 22.3385 12.6821H31.7875C33.527 12.6821 34.9372 14.0923 34.9372 15.8318C34.9372 17.5713 33.527 18.9815 31.7875 18.9815L17.614 18.9815C15.8745 18.9815 14.4644 20.3916 14.4644 22.1311C14.4644 23.8706 15.8745 25.2808 17.614 25.2808L25.4882 25.2808C27.2277 25.2808 28.6379 26.691 28.6379 28.4305C28.6379 30.17 27.2277 31.5801 25.4882 31.5801H19.1889C17.4494 31.5801 16.0392 32.9903 16.0392 34.7298C16.0392 36.4693 17.4494 37.8795 19.1889 37.8795H23.1324C25.9295 48.7472 35.7949 56.7774 47.5359 56.7774C61.4519 56.7774 72.7332 45.4962 72.7332 31.5801C72.7332 17.664 61.4519 6.38281 47.5359 6.38281H22.3385ZM47.5359 44.1788C54.4939 44.1788 60.1345 38.5382 60.1345 31.5801C60.1345 24.6221 54.4939 18.9815 47.5359 18.9815C40.5778 18.9815 34.9372 24.6221 34.9372 31.5801C34.9372 38.5382 40.5778 44.1788 47.5359 44.1788Z",
                            fill: l ? "url(#paint1_linear_1986_8686)" : "url(#paint1_linear_1282_11577)",
                        }),
                        (0, S.jsx)("path", {
                            d: "M8.16505 25.2808C9.90456 25.2808 11.3147 23.8706 11.3147 22.1311C11.3147 20.3916 9.90456 18.9815 8.16505 18.9815H6.59022C4.8507 18.9815 3.44055 20.3916 3.44055 22.1311C3.44055 23.8706 4.8507 25.2808 6.59022 25.2808H8.16505Z",
                            fill: l ? "url(#paint0_linear_1986_8686)" : "url(#paint2_linear_1282_11577)",
                        }),
                    ],
                }),
                (0, S.jsx)("g", {
                    width: "65",
                    transform: "translate(50, 50) scale(0.81) translate(-26, -42)",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, S.jsx)("path", {
                        d: "M12.6686 60.7298L10.9101 55.7911C10.8254 55.5372 10.6626 55.3163 10.4448 55.1597C10.227 55.0032 9.96524 54.9189 9.69671 54.9189C9.42818 54.9189 9.16646 55.0032 8.94866 55.1597C8.73086 55.3163 8.56804 55.5372 8.48326 55.7911L6.85565 60.7298C6.7922 60.9105 6.6887 61.0747 6.55284 61.2101C6.41699 61.3455 6.25226 61.4487 6.07091 61.5119L1.04275 63.1485C0.793091 63.2361 0.576874 63.3988 0.423928 63.6141C0.270981 63.8294 0.188843 64.0868 0.188843 64.3506C0.188843 64.6144 0.270981 64.8717 0.423928 65.087C0.576874 65.3023 0.793091 65.465 1.04275 65.5527L5.94012 67.2616C6.12147 67.3249 6.2862 67.428 6.42205 67.5634C6.55791 67.6988 6.66141 67.863 6.72486 68.0437L8.42513 72.91C8.50991 73.1639 8.67273 73.3848 8.89053 73.5414C9.10833 73.6979 9.37005 73.7822 9.63858 73.7822C9.90711 73.7822 10.1688 73.6979 10.3866 73.5414C10.6044 73.3848 10.7672 73.1639 10.852 72.91L12.6686 68.0437C12.732 67.863 12.8355 67.6988 12.9714 67.5634C13.1072 67.428 13.2719 67.3249 13.4533 67.2616L18.3507 65.5527C18.6003 65.465 18.8165 65.3023 18.9695 65.087C19.1224 64.8717 19.2046 64.6144 19.2046 64.3506C19.2046 64.0868 19.1224 63.8294 18.9695 63.6141C18.8165 63.3988 18.6003 63.2361 18.3507 63.1485L13.3952 61.4395C13.2318 61.377 13.083 61.2818 12.958 61.1598C12.833 61.0377 12.7345 60.8914 12.6686 60.7298Z",
                        fill: "white",
                        fillOpacity: "0.8",
                    }),
                }),
            ],
        });
    };
var c0 = n(387316),
    c1 =
        (((o = {})[(o.NITRO_GEM = 0)] = "NITRO_GEM"),
        (o[(o.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (o[(o.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        o);
let c2 = "url(#gradient)",
    c3 = (e) => {
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
        let g = (0, cn.Ay)(),
            m = (0, cR.q)(g),
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
                            return c2;
                        case 1:
                            return e ? "url(#gradient_nitro_logo)" : c2;
                        default:
                            return;
                    }
                })(m, r);
        return (0, S.jsxs)("div", {
            className: c0.Ap,
            children: [
                (0, S.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: c0.fB,
                    children: [
                        (0, S.jsx)("circle", {
                            className: 0 === r || 2 === r ? c0.F3 : void 0,
                            fill: "transparent",
                            strokeWidth: l,
                            r: `${o}`,
                            cx: "50%",
                            cy: "50%",
                            stroke: A,
                            strokeOpacity: E,
                        }),
                        (0, S.jsx)("circle", {
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
                (0, S.jsxs)("svg", {
                    width: "0",
                    height: "0",
                    children: [
                        (0, S.jsxs)("linearGradient", {
                            id: "gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [
                                (0, S.jsx)("stop", { offset: "0%", style: { stopColor: "#FFBDF2" } }),
                                (0, S.jsx)("stop", { offset: "100%", style: { stopColor: "#E742E1" } }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "gradient_nitro_logo",
                            x1: "2.99995",
                            y1: "67.6298",
                            x2: "132.55",
                            y2: "67.6298",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#F9A0E8" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E742E1" }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "dark-purple-gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                (0, S.jsx)("stop", { offset: "0%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                                (0, S.jsx)("stop", { offset: "100%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                            ],
                        }),
                    ],
                }),
                (0, S.jsx)("div", { className: c0.Vw, children: n }),
            ],
        });
    };
var c5 = n(104773);
function c4(e) {
    let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
        s = T.useMemo(() => (0, cq.A)({ legacyAssetId: t, skuId: n, size: b._3.SIZE_120, canAnimate: !1 }), [t, n]);
    return (0, S.jsx)("div", {
        className: c5.Q7,
        children: (0, S.jsx)("div", {
            className: c5.Nk,
            children: null != s && (0, S.jsx)("img", { className: c5.CH, alt: i, src: s }),
        }),
    });
}
let c6 = function (e) {
    let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: s,
            progressCircleStrokeSize: l,
            backgroundCircleSize: r,
            percentage: a,
            initialPercentage: o,
            progressCircleVariation: u = c1.NITRO_GEM,
            avatarDecorationLegacyAssetId: d,
            avatarDecorationSkuId: c,
            avatarDecoAssetDescription: g,
            ellipseOpacity: m,
            customAnimationClassName: A,
            circleColor: E,
            circleStroke: h,
        } = e,
        x = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion),
        p = t && !x;
    return (0, S.jsx)("div", {
        className: iE()(c5.G3, n),
        children: (0, S.jsx)(c3, {
            animationClassName: iE()(c5._0, { [c5.uJ]: p, [A ?? ""]: p }),
            progressCircleStroke: h,
            progressCircleStrokeSize: l,
            percentage: i ?? a,
            initialPercentage: i ?? o,
            progressCircleVariation: u,
            children: (function () {
                switch (u) {
                    case c1.NITRO_GEM:
                        return (0, S.jsx)(c$, {
                            className: p ? c5.Ow : void 0,
                            backgroundColor: iE()(c5.vH, s),
                            backgroundCircleSize: r,
                        });
                    case c1.NITRO_LOGO:
                        return (0, S.jsx)(cJ, { circleColor: E, ellipseOpacity: m });
                    case c1.AVATAR_DECO:
                        if (null != c)
                            return (0, S.jsx)(c4, {
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
var c8 = n(14313);
function c7(e) {
    let { userRecord: t, placement: n } = e,
        { avatarSrc: i, eventHandlers: s } = (0, cX.A)({ userId: t?.id, size: b._3.SIZE_32, animateOnHover: !0 }),
        l = null != t,
        r = l
            ? (0, S.jsx)(y.eu, { src: i, "aria-label": t.username, size: b._3.SIZE_32, ...s })
            : (0, S.jsx)(N.D, { variant: "heading-md/semibold", className: c8.n5, children: n });
    return (0, S.jsx)(sE.m, {
        text: U.intl.string(U.t.UnKHdo),
        shouldShow: !l,
        children: (0, S.jsx)("div", { className: c8.Lg, children: r }),
    });
}
function c9(e) {
    let { numSentReferrals: t, placement: n } = e;
    return (0, S.jsxs)("div", {
        className: c8.Ip,
        children: [
            (0, S.jsx)("div", { className: c8.Ej }),
            (0, S.jsx)("div", { className: iE()({ [c8.ch]: t > n, [c8.q_]: t === n }) }),
        ],
    });
}
function ge(e) {
    let { userRecords: t } = e,
        n = t.length,
        i = n < 1 ? null : t[0],
        s = n < 2 ? null : t[1],
        l = n < 3 ? null : t[2];
    return (0, S.jsxs)("div", {
        className: c8.ZM,
        children: [
            (0, S.jsx)(c7, { userRecord: i, placement: 1 }),
            (0, S.jsx)(c9, { numSentReferrals: n, placement: 1 }),
            (0, S.jsx)(c7, { userRecord: s, placement: 2 }),
            (0, S.jsx)(c9, { numSentReferrals: n, placement: 2 }),
            (0, S.jsx)(c7, { userRecord: l, placement: 3 }),
        ],
    });
}
let gt = function () {
    let e = (0, f.bG)([cK.A], () => cK.A.getRecipientStatus()),
        { referralSentUsers: t } = (0, cZ.J)(),
        i = T.useMemo(() => t.map((e) => new cH.A(e)), [t]),
        s = { redeemed: 0, converted: 0, sent: e.size };
    e.forEach((e) => {
        (e === cW.aK.REDEEMED && s.redeemed++, e === cW.aK.CONVERTED && (s.redeemed++, s.converted++));
    });
    let l = s.sent === cZ.Z,
        r = eC.A.getArticleURL(I.MVz.REFERRAL_PROGRAM),
        { analyticsLocations: a } = (0, ez.Ay)(tw.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        o = T.useRef(null),
        u = (s.sent / cZ.Z) * 100,
        d = (0, S.jsxs)("div", {
            className: c8.hE,
            children: [
                (0, S.jsx)(c6, { percentage: u, progressCircleVariation: c1.NITRO_LOGO, iconClassName: c8.ER }),
                (0, S.jsxs)("div", {
                    className: c8.Ns,
                    children: [
                        (0, S.jsx)(N.D, {
                            variant: "heading-xl/extrabold",
                            className: c8.R0,
                            children: (function (e) {
                                let { hasSentAll: t } = e;
                                return U.intl.string(U.t.USo4s7);
                            })({ hasSentAll: l }),
                        }),
                        (0, S.jsx)(ge, { userRecords: i }),
                        (0, S.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                let { helpdeskArticle: t, referralsStatuses: n } = e;
                                return (function (e) {
                                    let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
                                    return t
                                        ? U.intl.format(U.t["TYu+MH"], { helpdeskArticle: i })
                                        : U.intl.format(U.t["omMr+V"], { helpdeskArticle: i });
                                })({ hasSentAll: n.sent >= cZ.Z, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
                            })({ helpdeskArticle: r, referralsStatuses: s }),
                        }),
                        (0, S.jsx)("div", {
                            className: c8.Fb,
                            children: (0, S.jsx)(cY.wL, {
                                "data-migration-pending": !0,
                                className: c8.r$,
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
                                                return (n) => (0, S.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                            }));
                                    })({ analyticsLocations: a }),
                                onlyShineOnHover: !0,
                                children: (0, S.jsxs)("div", {
                                    className: c8.Zn,
                                    children: [
                                        (0, S.jsx)("img", {
                                            src: "/assets/3b9b1649f78941df.svg",
                                            alt: "",
                                            className: c8.QH,
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
        c = s.redeemed === cZ.Z;
    return (0, S.jsx)(ez.f5, {
        value: a,
        children: (0, S.jsx)("div", {
            className: iE()(c8.kL, { [c8.AP]: c }),
            children: (0, S.jsx)("div", { ref: o, className: iE()(c8.d_, { [c8.kS]: c }), children: d }),
        }),
    });
};
var gn = n(194509),
    gi = n(465794),
    gs = n(774774),
    gl = n(156601),
    gr = n(543213),
    ga = n(88001),
    go = n(148155),
    gu = n(487518);
let gd = "to_premium_home_button",
    gc = "premium home page";
function gg(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: s } = e,
        l = t.hasActiveTrial,
        r = t.planIdFromItems === tJ.gD.PREMIUM_YEAR_TIER_2,
        a = t.hasAnyPremiumGroup,
        o = (0, cP.A)(),
        u = null != t.trialEndsAt ? ix()(t.trialEndsAt).diff(ix()(), "d") : 0,
        d = tJ.hd[t.planIdFromItems],
        c = af.Ay.getDefaultPrice(d.id),
        g = af.Ay.formatPriceString(c, d.interval);
    if (n || l) {
        let e = (0, cR.M)(s) ? gs.at.PREMIUM_TIER_2_WHITE_FILL : gs.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
        return (0, S.jsxs)(S.Fragment, {
            children: [
                !l && (r || a)
                    ? (0, S.jsx)(gs.e4, { text: U.intl.string(U.t.EyjDRE), className: gu.LW, colorOptions: e })
                    : (0, S.jsxs)(S.Fragment, {
                          children: [
                              (0, S.jsx)(gs.HU, {
                                  text: l ? U.intl.string(U.t.qYKftX) : U.intl.string(U.t.EyjDRE),
                                  className: gu.uS,
                                  colorOptions: e,
                              }),
                              (0, S.jsx)("div", { className: gu.on }),
                          ],
                      }),
                (0, S.jsx)(N.D, {
                    variant: "heading-md/normal",
                    color: "text-overlay-light",
                    className: gu.KB,
                    children: (function () {
                        if (l) return U.intl.format(U.t["2CGBri"], { remainingTime: u, price: g });
                        if (a && null != i && t.metadata?.active_discount_expires_at != null) {
                            let e = (0, uM.$g)(c.amount, c.currency);
                            return U.intl.format(go.default.FwjZzr, {
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
    return (0, S.jsx)(gl.A, { variant: void 0, subscriptionTier: tJ.pe.TIER_2, interval: d.interval });
}
function gm() {
    let e = (0, cV.k5)(),
        t = (0, cV.nf)(),
        n = (0, cn.Ay)(),
        i = (0, f.bG)([ue.A], () => ue.A.getPremiumTypeSubscription()),
        s = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
        l = s?.isPremiumWithPremiumGroup(),
        r = (0, cP.A)(),
        a = (0, ck.ds)(),
        o = null !== i && null !== i.planIdFromItems;
    if (!o && !r.isFractionalPremiumActive && !l) return null;
    let u = r.isFractionalPremiumActive,
        d = null !== i && i.hasActiveTrial;
    return (0, S.jsxs)("div", {
        className: iE()(gu.$Y, { [gu.J5]: e || d }),
        children: [
            (0, S.jsxs)("div", {
                className: gu.jp,
                children: [
                    l
                        ? (0, S.jsx)(N.D, {
                              variant: "nitro-md",
                              color: "text-overlay-light",
                              className: gu._K,
                              children: (0, ga.DP)(),
                          })
                        : (0, S.jsx)(cU.A, { className: gu.TJ }),
                    l && !e
                        ? (0, S.jsx)("div", { style: { marginBottom: "6px" } })
                        : u && !a
                          ? (0, S.jsxs)(S.Fragment, {
                                children: [
                                    (0, S.jsx)(gs.e4, {
                                        text: U.intl.string(U.t.uXF4c4),
                                        className: gu.LW,
                                        colorOptions: gs.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, S.jsx)(N.D, {
                                        variant: "heading-md/normal",
                                        color: "text-overlay-light",
                                        className: gu.sQ,
                                        children: U.intl.format(U.t.sK7fGl, {
                                            helpCenterLink: eC.A.getArticleURL(I.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : o
                            ? (0, S.jsx)(gg, {
                                  premiumSubscription: i,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : a
                              ? (0, S.jsxs)(S.Fragment, {
                                    children: [
                                        (0, S.jsx)(gs.HU, {
                                            text: U.intl.string(U.t.qYKftX),
                                            className: gu.uS,
                                            colorOptions: (0, cR.M)(n)
                                                ? gs.at.PREMIUM_TIER_2_WHITE_FILL
                                                : gs.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, S.jsx)(N.D, {
                                            variant: "heading-md/normal",
                                            color: "text-overlay-light",
                                            className: gu.KB,
                                            children: U.intl.format(U.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, S.jsx)(gr.ZP, {
                        featureSet: s?.isPremiumGroupPrimary()
                            ? gr.Nz.PREMIUM_GROUP_PRIMARY
                            : s?.isPremiumGroupMember()
                              ? gr.Nz.PREMIUM_GROUP_MEMBER
                              : u
                                ? gr.Nz.FRACTIONAL_PREMIUM
                                : gr.Nz.DEFAULT,
                    }),
                    u && !o
                        ? (0, S.jsxs)(l4.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, S.jsx)(gi.A, {
                                      defaultTextOverride: a ? U.intl.string(U.t.YScQSF) : U.intl.string(U.t["0b3YRn"]),
                                  }),
                                  (0, S.jsx)(v.$, {
                                      onClick: () => {
                                          (td.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gd,
                                              target: gc,
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
                        : (0, S.jsxs)(l4.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, S.jsx)(v.$, {
                                      variant: "overlay-primary",
                                      fullWidth: !0,
                                      onClick: () => {
                                          (td.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gd,
                                              target: gc,
                                          }),
                                              (0, tH.default)(),
                                              (0, t7.pX)(I.BVt.APPLICATION_STORE));
                                      },
                                      text: U.intl.string(U.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, S.jsx)(v.$, {
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
            (0, S.jsx)("div", {
                className: gu.ah,
                children: (0, S.jsx)("img", { className: gu.ah, alt: "", src: "/assets/3aaa2c2d1874c196.svg" }),
            }),
        ],
    });
}
function gA() {
    return (0, S.jsxs)("div", {
        className: gu.T1,
        children: [
            (0, S.jsx)("img", { className: gu.GY, alt: "", src: "/assets/9f5bdd034cc313ae.svg" }),
            (0, S.jsxs)("div", {
                className: gu.b4,
                children: [
                    (0, S.jsx)(N.D, {
                        className: gu.Vz,
                        variant: "heading-xl/extrabold",
                        children: U.intl.string(U.t["3KomGa"]),
                    }),
                    (0, S.jsx)(Q.E, {
                        className: gu.Oi,
                        variant: "text-sm/normal",
                        children: U.intl.string(U.t.yQ06u1),
                    }),
                    (0, S.jsx)(gn.A, {
                        className: iE()(gu.Tp, gu._c),
                        textOptions: { textOverride: U.intl.string(U.t.Ve9Ge6), textClassName: gu.VV },
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
let gE = function () {
        let e = (0, dd.Hp)(),
            { analyticsLocations: t } = (0, ez.Ay)(tw.A.PREMIUM_SETTINGS),
            n = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
            i = (0, f.bG)([ue.A], () => ue.A.getPremiumTypeSubscription()),
            s = (0, f.bG)([ue.A], () => ue.A.hasFetchedSubscriptions()),
            l = (0, cG.Y)(tJ.T7),
            [r, a] = T.useState(!0),
            o = (0, cP.A)({ forceFetch: !0 }),
            u = (0, f.bG)([dF.A], () => {
                let e = dF.A.getMarketingComponentByType(cO.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            d = !(oU.Fr || oU.v1) && null != u,
            c = T.useRef(null);
        (0, cz.i)();
        let g = (0, cB.m)();
        T.useEffect(() => {
            !(async function () {
                (e || (await Promise.all([oL.hP(), oL.$o(), (0, cD.zS)(null, null, I.tF5.DISCOVERY)])), a(!1));
            })();
        }, [e]);
        let [m, A] = T.useState(!1);
        if (e) return (0, S.jsx)(u7.uK, {});
        let E = s && null !== i && l,
            h = o.fetched && o.isFractionalPremiumActive,
            x = n?.isPremiumWithPremiumGroup();
        if (!E && !h && !r && !x) return (0, S.jsx)(cM.A, { title: U.intl.string(U.t.dyq9TR), note: null });
        if ((!E && !h && !x) || r) return (0, S.jsx)(oC.y, {});
        let p = !!i?.hasActiveTrial;
        return (0, S.jsx)(ez.f5, {
            value: t,
            children: (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsxs)(Z.B, {
                        direction: "vertical",
                        gap: 40,
                        children: [
                            d && (0, S.jsx)(cw.m, { config: u }),
                            (0, S.jsx)(gm, {}),
                            g && (0, S.jsx)(gt, {}),
                            !d && (0, S.jsx)(gA, {}),
                            (0, S.jsx)(cF.A, {
                                hideCTAs: !0,
                                headingOverride: U.intl.string(U.t.dnVvQS),
                                hidePill: !p,
                                selectedPlanColumnClassName: gu.JG,
                                selectedPlanTier: tJ.PremiumTypes.TIER_2,
                            }),
                        ],
                    }),
                    (0, S.jsx)(cL.L, {
                        innerRef: c,
                        onChange: (e) => {
                            e &&
                                !m &&
                                (td.default.track(I.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                    location_stack: t,
                                }),
                                A(!0));
                        },
                        children: (0, S.jsx)("div", { ref: c, className: gu._Z }),
                    }),
                ],
            }),
        });
    },
    gh = (0, E.E2)(h.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser());
            return (0, af.YE)(e, tJ.PremiumTypes.TIER_2) ? (0, S.jsx)(gE, {}) : (0, S.jsx)(cj.A, {});
        },
        useSearchTerms: () => [U.intl.string(U.t.Ipxkog)],
    }),
    gx = (0, E.zZ)(h.X.NITRO_CATEGORY, { buildLayout: () => [gh] }),
    gp = (0, E.t_)(h.X.NITRO_PANEL, {
        useTitle: () => U.intl.string(U.t.Ipxkog),
        useObscuredNotice: oh.L,
        buildLayout: () => [gx],
    }),
    gS = (0, E.i4)(h.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.Ipxkog),
        icon: ad.t,
        usePersistentBadge: function (e) {
            let t = (0, cv.e)(e);
            return T.useMemo(() => ({ badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [gp],
    });
var gT = n(104510),
    gf = n(820739),
    gI = n(859241),
    g_ = n(527113),
    gN = n(338548),
    gC = n(776096),
    gy = n(711014),
    gb = n(178368),
    gv = n(809545),
    gj = n(168482);
function gO() {
    return (0, S.jsxs)("div", {
        className: gv.iE,
        children: [
            (0, S.jsx)("img", { className: gv.Kk, alt: "", src: gj }),
            (0, S.jsxs)("div", {
                className: gv.pq,
                children: [
                    (0, S.jsx)(Q.E, { variant: "text-lg/bold", children: U.intl.string(U.t.ZHNSYf) }),
                    (0, S.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: U.intl.string(U.t.kCj5ps),
                    }),
                ],
            }),
            (0, S.jsx)(v.$, {
                variant: "secondary",
                text: U.intl.string(U.t.JFlifp),
                onClick: function () {
                    ((0, t7.pX)(I.BVt.GUILD_DISCOVERY), (0, tH.default)());
                },
            }),
        ],
    });
}
var gL = n(365199),
    gR = n(878678),
    gD = n(443865),
    gP = n(980707),
    gG = n(473145);
function gM(e) {
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
                ? (0, S.jsx)(tn.Dr, {
                      id: "manage-subscription",
                      label: U.intl.string(U.t.obRG6Y),
                      action: () => (0, ng.openUserSettings)(h.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: gD.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: gD.LightbulbIcon },
                  })
                : null,
        [a, l],
    );
    return (0, S.jsxs)(gP.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": U.intl.string(U.t.ogxXGq),
        onClose: i,
        children: [
            (0, S.jsx)(tn.Dr, {
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
                            (0, S.jsx)(e, { ...n, guildBoostSlots: [t], locationSection: I.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, gG.I5)(t)
                ? (0, S.jsx)(tn.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, sI.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, S.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, S.jsx)(tn.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, sI.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 983511));
                              return (n) => (0, S.jsx)(e, { ...n, guildBoostSlot: t });
                          });
                      },
                      disabled: o.cancel.disabled,
                      color: "danger",
                  }),
            u,
        ],
    });
}
var gU = n(545934),
    gV = n(548118),
    gk = n(987144),
    gw = n(864310),
    gF = n(290413);
function gB(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, gw.A)(t.id);
    return (0, S.jsxs)("div", {
        className: n ?? gF.OA,
        children: [
            (0, S.jsx)(gV.Ay, { className: gF.$f, guild: t, size: gV.Ay.Sizes.MEDIUM }),
            (0, S.jsxs)("div", {
                className: gF.gI,
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, S.jsxs)("div", {
                        className: gF.ew,
                        children: [
                            (0, S.jsxs)("div", {
                                className: gF.QW,
                                children: [
                                    (0, S.jsx)(gT._, {
                                        className: gF.Wz,
                                        color: n6.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: U.intl.format(U.t["pob/cL"], { subscriptions: i }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== I.TVA.NONE &&
                                (0, S.jsxs)(S.Fragment, {
                                    children: [
                                        (0, S.jsx)("div", { className: gF.zk }),
                                        (0, S.jsx)(Q.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, gG.gb)(t.premiumTier, { useLevels: !1 }),
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
function gz(e) {
    let { guildId: t } = e,
        n = (0, f.bG)([sL.A], () => sL.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, S.jsxs)("div", {
              className: gF.Nr,
              children: [
                  (0, S.jsx)(gB, { guild: n }),
                  (0, S.jsx)(v.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gT._,
                      text: U.intl.string(U.t.aBHecF),
                      onClick: () => {
                          (0, gk.g)({
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
var gY = n(747381);
let gX =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function gH(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: s, isLast: l } = e,
        r = T.useRef(null),
        a = (0, gG.I5)(t),
        o = T.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, cP.A)(),
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
    return (0, S.jsxs)("div", {
        className: iE()(gY.iq, { [gY.Mt]: l }),
        children: [
            (0, S.jsxs)("div", {
                className: gY.kd,
                children: [
                    (0, S.jsx)("img", { alt: "", className: gY.bB, src: gX }),
                    A
                        ? (0, S.jsx)(Q.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: U.intl.format(U.t.Z4ULRD, { date: m }),
                          })
                        : (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(Q.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, S.jsxs)(S.Fragment, {
                                          children: [
                                              (0, S.jsx)("div", { className: gY.zk }),
                                              (0, S.jsx)(Q.E, {
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
                                      (0, S.jsxs)(S.Fragment, {
                                          children: [
                                              (0, S.jsx)("div", { className: gY.zk }),
                                              (0, S.jsx)(Q.E, {
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
            (0, S.jsx)(ap.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, S.jsx)(gM, {
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
                    (0, S.jsx)(n9.D, {
                        innerRef: r,
                        "aria-label": U.intl.string(U.t.PdRCRg),
                        className: gY.Mj,
                        ...e,
                        children: (0, S.jsx)(gL.MoreHorizontalIcon, {
                            size: "xs",
                            color: n6.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function gW(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: s } = e,
        l = (0, f.bG)([sL.A], () => sL.A.getGuild(t), [t]);
    return (0, S.jsxs)("div", {
        className: gY.Nr,
        children: [
            (0, S.jsx)("div", {
                className: gY.MY,
                children:
                    null != l
                        ? (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(gB, { guild: l, className: gY.OA }),
                                  (0, S.jsx)(v.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: U.intl.string(U.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tH.default)(),
                                              (0, gR.K4)({
                                                  guildId: l.id,
                                                  location: {
                                                      section: I.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              }));
                                      },
                                  }),
                              ],
                          })
                        : (0, S.jsx)("div", {
                              className: gY.OA,
                              children: (0, S.jsx)(N.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: U.intl.string(U.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, S.jsx)(
                    gH,
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
function gK(e) {
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
                                gU.A.createFromServer(
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
                if ((!(0, gG.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in l || (l[e] = []), l[e].push(i));
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, i, n]);
    if (null == n || 0 === Object.keys(l).length) return null;
    let a = r > af.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, S.jsx)("div", {
        className: gY.kR,
        children: oM.default
            .keys(l)
            .map((e) => (0, S.jsx)(gW, { guildId: e, slots: l[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var gZ = n(502572),
    gq = n(983511),
    gQ = n(342744),
    g$ = n(496431);
let gJ = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, g$.A)(n);
    return (0, S.jsx)(Q.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, ip.uN)(i, { days: U.t.WUTPDc, hours: U.t.c1qodV, minutes: U.t["2+A3dv"] }),
    });
};
var g0 = n(731536);
function g1(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        s = (0, f.bG)([ue.A], () => ue.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = T.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, gG.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != s ? af.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && i === tJ.xc.NONE;
    return 0 === l.length
        ? null
        : (0, S.jsxs)("div", {
              className: g0.Nr,
              children: [
                  (0, S.jsxs)("div", {
                      className: g0.MY,
                      children: [
                          (0, S.jsxs)("div", {
                              className: g0._L,
                              children: [
                                  (0, S.jsxs)("div", {
                                      className: g0.MD,
                                      children: [
                                          (0, S.jsx)("img", { alt: "", className: g0.F8, src: gX }),
                                          (0, S.jsx)("div", {
                                              className: iE()(g0.qS, "theme-dark"),
                                              children: (0, S.jsx)("span", { className: g0.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, S.jsxs)("div", {
                                      className: g0.Qp,
                                      children: [
                                          (0, S.jsx)(Q.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: U.intl.format(U.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                          (0, S.jsx)(Q.E, {
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
                          (0, S.jsx)(gZ.A, {
                              shouldShow: o,
                              text: U.intl.string(U.t.mOWsF1),
                              "aria-label": U.intl.string(U.t.mOWsF1),
                              children: (e) =>
                                  (0, S.jsx)(v.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gT._,
                                      text: U.intl.string(U.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, sI.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("378357"),
                                                  n.e("418710"),
                                              ]).then(n.bind(n, 770101));
                                              return (t) =>
                                                  (0, S.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          (t.onClose(),
                                                              (0, gk.g)({
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
                      (0, S.jsx)(
                          g2,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, gG.I5)(e),
                              isCanceled: (0, gG.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function g2(e) {
    let t,
        { slot: n, isLast: i, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = T.useRef(null),
        u = T.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]),
        d = l ? r?.currentPeriodEnd : null;
    t =
        n.isOnCooldown() && null != u && (null == d || u < d)
            ? (0, S.jsx)(gJ, { cooldown: u.getTime() })
            : null != d
              ? (0, S.jsx)(Q.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: U.intl.format(U.t.Z4ULRD, { date: d }),
                })
              : (0, S.jsx)(Q.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: U.intl.string(U.t["2mcafz"]),
                });
    let c = s || l;
    return (0, S.jsxs)("div", {
        className: iE()(g0.iq, { [g0.Mt]: i }),
        children: [
            (0, S.jsxs)("div", {
                className: g0.kd,
                children: [(0, S.jsx)("img", { alt: "", className: g0.bB, src: gX }), t],
            }),
            c &&
                (0, S.jsx)(ap.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, S.jsxs)(gP.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": U.intl.string(U.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                s &&
                                    (0, S.jsx)(tn.Dr, {
                                        id: "cancel-boost",
                                        label: U.intl.string(U.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? U.intl.string(U.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, sI.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, S.jsx)(gq.default, { ...e, guildBoostSlot: n }),
                                                ));
                                        },
                                    }),
                                l &&
                                    (0, S.jsx)(tn.Dr, {
                                        id: "uncancel-boost",
                                        label: U.intl.string(U.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? U.intl.string(U.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, sI.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, S.jsx)(gQ.default, { ...e, guildBoostSlotId: n.id }),
                                                ));
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, S.jsx)(n9.D, {
                            innerRef: o,
                            "aria-label": U.intl.string(U.t["UKOtz+"]),
                            className: g0.Mj,
                            ...e,
                            children: (0, S.jsx)(gL.MoreHorizontalIcon, {
                                size: "xs",
                                color: n6.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var g3 = n(834612);
function g5(e) {
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
        ? (0, S.jsxs)("div", {
              className: g3.i,
              children: [
                  (0, S.jsxs)("div", {
                      className: g3.b,
                      children: [
                          (0, S.jsx)(N.D, { variant: "heading-md/semibold", children: U.intl.string(U.t.W5rDjW) }),
                          (0, S.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: U.intl.format(U.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, S.jsx)(gK, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, S.jsx)(g1, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var g4 = n(333722),
    g6 = n(9146);
function g8() {
    return (0, S.jsxs)("div", {
        className: g6.iE,
        children: [
            (0, S.jsx)(N.D, { variant: "heading-xl/normal", children: U.intl.string(U.t.IzKs3o) }),
            (0, S.jsx)("div", {
                className: g6.kR,
                children: g4.s.map((e, t) => {
                    let n = e.icon;
                    return (0, S.jsxs)(
                        "div",
                        {
                            className: g6.Nr,
                            children: [
                                (0, S.jsx)(n, { className: g6.Kk }),
                                (0, S.jsx)(Q.E, {
                                    className: g6.h_,
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
var g7 = n(847374),
    g9 = n(232122),
    me = n(665984);
function mt() {
    let [e, t] = T.useState(null),
        [n, i] = T.useState(null);
    return (0, S.jsxs)("div", {
        className: me.iE,
        children: [
            (0, S.jsx)(N.D, { variant: "heading-xl/normal", children: U.intl.string(U.t.HPJ6Nj) }),
            (0, S.jsx)("ul", {
                className: me.p_,
                children: g9.m.map((s, l) => {
                    let r = e === l,
                        a = n === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, S.jsxs)(
                        n9.D,
                        {
                            tag: "li",
                            className: iE()(me.Aw, { [me.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => i(l),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, S.jsxs)("div", {
                                    className: me.k7,
                                    children: [
                                        (0, S.jsx)(Q.E, {
                                            className: me.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, S.jsx)(g7.a, {
                                            size: "sm",
                                            color: n6.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: me.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, S.jsx)(Q.E, {
                                        className: me.ZF,
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
var mn = n(182859),
    mi = n(25525),
    ms = n(416763);
function ml() {
    let e = eC.A.getArticleURL(I.MVz.GUILD_SUBSCRIPTIONS);
    return (0, S.jsxs)("div", {
        className: ms.wx,
        children: [
            (0, S.jsxs)("div", {
                className: ms.Qs,
                children: [
                    (0, S.jsxs)("div", {
                        className: ms.B5,
                        children: [
                            (0, S.jsx)("img", { alt: "", className: ms.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, S.jsx)(N.D, {
                                variant: "heading-xl/normal",
                                children: U.intl.string(mi.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, S.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: U.intl.format(U.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, S.jsx)(mn.A, {
                variant: "member",
                className: ms.iO,
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
var mr = n(315629),
    ma = n(87719),
    mo = n(961085);
function mu() {
    let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser());
    if (null == e || af.Ay.hasFreeBoosts(e)) return null;
    let t = eC.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ);
    return (0, S.jsxs)(mr.h, {
        color: "nitro-pink",
        className: mo.vK,
        children: [
            (0, S.jsxs)("div", {
                className: mo.nw,
                children: [
                    (0, S.jsx)("img", { alt: "", className: mo.q3, src: gX }),
                    (0, S.jsxs)("div", {
                        className: mo.Tm,
                        children: [
                            (0, S.jsx)(Q.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: U.intl.format(U.t.Idh1Vs, { count: tJ.M4, boostCount: tJ.M4 }),
                            }),
                            (0, S.jsxs)("div", {
                                className: mo.xv,
                                children: [
                                    (0, S.jsx)(ad.t, { className: mo.nE }),
                                    (0, S.jsx)(Q.E, {
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
            (0, S.jsx)(v.$, {
                variant: "expressive",
                size: "sm",
                icon: ad.t,
                text: U.intl.string(U.t["8x0jKT"]),
                onClick: ma.e,
            }),
        ],
    });
}
var md = n(532991);
function mc() {
    let e = (0, f.bG)([gC.A], () => gC.A.affinities),
        t = (0, f.bG)([gy.Ay], () => gy.Ay.getFlattenedGuildIds()),
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
        : (0, S.jsxs)("div", {
              className: md.i,
              children: [
                  (0, S.jsx)(N.D, { variant: "heading-md/semibold", children: U.intl.string(U.t.r90Wgo) }),
                  (0, S.jsx)("div", { className: md.k, children: n.map((e) => (0, S.jsx)(gz, { guildId: e }, e)) }),
              ],
          });
}
var mg = n(967246);
function mm(e) {
    let { count: t } = e,
        i = eC.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ);
    return (0, S.jsxs)(mr.h, {
        color: "nitro-pink",
        className: mg.vK,
        children: [
            (0, S.jsxs)("div", {
                className: mg.nw,
                children: [
                    (0, S.jsxs)("div", {
                        className: mg.MD,
                        children: [
                            (0, S.jsx)("img", { alt: "", className: mg.F8, src: gX }),
                            (0, S.jsx)("div", {
                                className: iE()(mg.qS, "theme-dark"),
                                children: (0, S.jsx)("span", { className: mg.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, S.jsxs)("div", {
                        className: mg.Tm,
                        children: [
                            (0, S.jsx)(Q.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: U.intl.format(U.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, S.jsxs)("div", {
                                className: mg.xv,
                                children: [
                                    (0, S.jsx)(ad.t, { className: mg.nE }),
                                    (0, S.jsx)(Q.E, {
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
            (0, S.jsx)(v.$, {
                variant: "primary",
                size: "sm",
                icon: gT._,
                text: U.intl.string(U.t.BMx1iy),
                onClick: () => {
                    (0, sI.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("378357"), n.e("418710")]).then(n.bind(n, 770101));
                        return (t) =>
                            (0, S.jsx)(e, {
                                ...t,
                                onSelectGuild: (e) => {
                                    (t.onClose(),
                                        (0, gk.g)({
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
var mA = n(89150);
function mE(e) {
    let { premiumSubscription: t } = e,
        n = (0, f.bG)([gb.A], () => gb.A.boostSlots),
        i = T.useMemo(() => Object.values(n), [n]),
        s = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
        l = (0, f.bG)([gC.A], () => gC.A.affinities),
        r = (0, f.bG)([gy.Ay], () => gy.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = (0, f.bG)([gI.A], () => gI.A.getCurrentUserAppliedBoosts()),
        { fractionalState: u } = (0, cP.A)({ forceFetch: !0 }),
        d = s?.isPremiumGroupMember(),
        c = t?.isPausedOrPausePending === !0 && u === tJ.xc.NONE,
        g = T.useMemo(() => {
            if (null == t || c) return 0;
            let e = af.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : i.filter((e) => e.isAvailable()).length;
        }, [t, c, i]);
    return (0, S.jsxs)("div", {
        className: mA.GO,
        children: [
            (0, S.jsx)(u7.kb, { className: mA.ek }),
            (0, S.jsx)(ml, {}),
            (0, S.jsx)(mu, {}),
            g > 0 && (0, S.jsx)(mm, { count: g }),
            d && (0, S.jsx)(gN.A, {}),
            !a && (0, S.jsx)(gO, {}),
            (0, S.jsxs)("div", {
                className: mA.C_,
                children: [
                    (0, S.jsx)(g5, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: o,
                        fractionalPremiumState: u,
                    }),
                    (0, S.jsx)(mc, {}),
                    (0, S.jsx)(g_.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, S.jsx)(g8, {}),
                    (0, S.jsx)(mt, {}),
                ],
            }),
        ],
    });
}
var mh = n(819677);
let mx = (0, E.E2)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            T.useEffect(() => {
                (oL.hP(), oL.$o(), (0, gf.CD)(), (0, cD.zS)(null, null, I.tF5.DISCOVERY), (0, gf.tO)(!0));
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, f.cf)([ue.A], () => ({
                    hasFetchedSubscriptions: ue.A.hasFetchedSubscriptions(),
                    premiumSubscription: ue.A.getPremiumTypeSubscription(),
                })),
                n = (0, cG.Y)(),
                i = (0, f.bG)([o9.A], () => o9.A.hasFetchedPaymentSources),
                s = (0, f.bG)([gI.A], () => gI.A.isFetchingCurrentUserAppliedBoosts),
                l = !e || !n || !i || s,
                [r, a] = T.useState(!1);
            return (l || r || a(!0), l && !r)
                ? (0, S.jsx)("div", { className: iE()(mh.kL, mh.Lq), children: (0, S.jsx)(oC.y, {}) })
                : (0, S.jsxs)("div", {
                      className: mh.kL,
                      children: [
                          (0, S.jsx)("div", { className: mh.Tp }),
                          (0, S.jsx)("div", { className: mh.Qs, children: (0, S.jsx)(mE, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [U.intl.string(U.t["+CbP2v"]), U.intl.string(U.t.Nn1lJy)],
    }),
    mp = (0, E.zZ)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [mx] }),
    mS = (0, E.t_)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => U.intl.string(U.t["+CbP2v"]),
        buildLayout: () => [mp],
    }),
    mT = (0, E.i4)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["+CbP2v"]),
        icon: gT._,
        buildLayout: () => [mS],
    });
var mf = n(153659),
    mI = n(155984),
    m_ = n(357758),
    mN = n(262077),
    mC = n(281445),
    my = n(624479),
    mb = n(626584),
    mv = n(131607),
    mj = n(95035),
    mO = n(196736),
    mL = n(685743),
    mR = n(349085),
    mD = n(342942),
    mP = n(376205),
    mG = n(252589),
    mM = n(758836),
    mU = n(49999),
    mV = n(394107),
    mk = n(439050);
let mw = new mb.A("GameServerSubscriptionsSection");
function mF(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function mB(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let mz = T.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: s } = (0, ez.Ay)(),
        l = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, mR.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, mv.kn)([eA.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eA.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = d2.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: m } = (0, mL.A)(c, t.id, tw.A.GAME_SERVER_PAGE, t.serverIp),
        A = T.useCallback(() => {
            (0, mD.A)({
                provider: mC.X.SHOCKBYTE,
                onAccept: () => {
                    (u(mU.i.TAKE_ACTION), g());
                },
            });
        }, [u, g]),
        {
            hasSubscription: E,
            priceLabel: h,
            dateLabel: x,
            isCanceled: p,
            isDanger: _,
        } = (0, f.bG)(
            [ue.A, d5.A],
            () => {
                let e = null != l ? ue.A.getSubscriptionById(l) : null;
                if (null == e)
                    return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    s = !t && null != e.renewalMutations,
                    r = s ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? d5.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? U.intl.formatToPlainString(U.t.AbOLNu, { price: (0, uM.$g)(u, o.priceCurrency) })
                            : null,
                    c = mF(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? U.intl.formatToPlainString(mV.default["3aEgK6"], { date: c })
                        : s
                          ? U.intl.formatToPlainString(mV.default.KFSA3M, { date: c })
                          : U.intl.formatToPlainString(mV.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || s,
                };
            },
            [l, n, i],
            mB,
        ),
        N = T.useCallback(() => {
            if (null == l) return;
            let e = ue.A.getSubscriptionById(l),
                t = null != e ? mF(e.currentPeriodEnd) : "";
            (0, n8.A)({
                title: U.intl.string(mV.default.TEYPNR),
                subtitle: U.intl.formatToPlainString(mV.default.XR1WrB, { date: t }),
                confirmText: U.intl.string(U.t["cY+Oob"]),
                cancelText: U.intl.string(mV.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        (await oL.M2(l, s), await oL.hP());
                    } catch (e) {
                        mw.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [l, s]),
        C = T.useCallback(() => {
            if (null == l) return;
            let e = ue.A.getSubscriptionById(l);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? d5.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, uM.$g)(u, o.priceCurrency) : "",
                c = mF(e.currentPeriodEnd);
            (0, n8.A)({
                title: U.intl.string(mV.default.o96qbc),
                subtitle: U.intl.formatToPlainString(mV.default["7n6Qq+"], { price: d, date: c }),
                confirmText: U.intl.string(U.t.iIvF2z),
                cancelText: U.intl.string(U.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, cD.ur)(r);
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
                        mw.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [l, r, s, n, i]),
        y = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, S.jsxs)("div", {
        className: mk.nM,
        children: [
            (0, S.jsxs)("div", {
                className: mk.M4,
                children: [
                    (0, S.jsxs)("div", {
                        className: mk.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, S.jsx)("img", { className: mk.uP, src: a, alt: "" }),
                            (0, S.jsx)("div", { className: mk.tw }),
                        ],
                    }),
                    (0, S.jsxs)("div", {
                        className: mk.CR,
                        children: [
                            (0, S.jsx)(Q.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: t.serverName,
                            }),
                            (0, S.jsx)(Q.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: `${t.gameName}  \u{2022}  ${t.planName}`,
                            }),
                            y &&
                                (d
                                    ? (0, S.jsxs)("div", {
                                          className: mk.CQ,
                                          children: [
                                              (0, S.jsx)(Q.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, S.jsx)(n9.D, {
                                                  className: mk.cL,
                                                  onClick: g,
                                                  "aria-label": U.intl.string(U.t.OpuAlK),
                                                  children: m
                                                      ? (0, S.jsx)(uB.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, S.jsx)(my.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, S.jsx)(mj.A, { onClick: A, children: U.intl.string(mV.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, S.jsxs)("div", {
                className: mk.Rd,
                children: [
                    (0, S.jsxs)("div", {
                        className: mk.Ff,
                        children: [
                            null != h &&
                                (0, S.jsx)(Q.E, {
                                    variant: "text-md/semibold",
                                    color: "text-default",
                                    tag: "span",
                                    children: h,
                                }),
                            null != x &&
                                (_
                                    ? (0, S.jsxs)("div", {
                                          className: mk.ez,
                                          children: [
                                              (0, S.jsx)(i3.E, { size: "xs", color: "text-feedback-critical" }),
                                              (0, S.jsx)(Q.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-critical",
                                                  tag: "span",
                                                  children: x,
                                              }),
                                          ],
                                      })
                                    : (0, S.jsx)(Q.E, {
                                          variant: "text-sm/medium",
                                          color: "text-muted",
                                          tag: "span",
                                          children: x,
                                      })),
                        ],
                    }),
                    E &&
                        (p
                            ? (0, S.jsx)(v.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: U.intl.string(U.t.iIvF2z),
                                  onClick: C,
                              })
                            : (0, S.jsx)(v.$, {
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
function mY(e) {
    let { servers: t } = e,
        n = (0, mO.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, mG.Y)(),
        s = (0, f.bG)([lf.default], () => af.Ay.canUseShopDiscounts(lf.default.getCurrentUser())),
        l = T.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, f.yK)([ue.A], () => (0, mP.HY)(t, i, (e) => ue.A.getSubscriptionById(e)), [t, i]);
    T.useEffect(() => {
        let e = r.filter((e) => !d5.A.isLoadedForSKU(e) && !d5.A.isFetchingForSKU(e));
        e.length > 0 && (0, cD.jv)(e).catch(() => {});
    }, [r]);
    let a = T.useCallback(() => {
        ((0, tH.default)(), (0, t7.pX)(I.BVt.COLLECTIBLES_SHOP_WITH_TAB(mM.G2.GAME_SERVERS)));
    }, []);
    return (0, S.jsxs)("div", {
        className: mk.uW,
        children: [
            (0, S.jsxs)("div", {
                className: mk.wx,
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: U.intl.string(mV.default.vCzwM7),
                    }),
                    (0, S.jsxs)("div", {
                        className: mk.h_,
                        children: [
                            (0, S.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: U.intl.string(mV.default.y85Eg9),
                            }),
                            n &&
                                (0, S.jsx)(mj.A, {
                                    onClick: a,
                                    children: (0, S.jsx)(Q.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: U.intl.string(mV.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, S.jsx)("div", {
                className: mk.p_,
                children: t.map((e) =>
                    (0, S.jsx)(mz, { server: e, planOptionBySkuId: l, canUseShopDiscount: s }, e.id),
                ),
            }),
        ],
    });
}
var mX = n(55766),
    mH = n(696986),
    mW = n(364036);
function mK(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, S.jsxs)("div", {
        children: [
            (0, S.jsx)(N.D, { variant: "heading-md/bold", children: U.intl.string(U.t["KzCF/6"]) }),
            (0, S.jsx)(mH.h, { size: 4 }),
            (0, S.jsx)(Q.E, { variant: "text-md/normal", className: mW.yV, children: U.intl.string(U.t["3D7qCu"]) }),
            (0, S.jsx)(mH.h, { size: 24 }),
            (0, S.jsxs)("div", {
                className: mW.Nr,
                children: [
                    (0, S.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: mW.RI }),
                    (0, S.jsxs)("div", {
                        className: mW.FS,
                        children: [
                            (0, S.jsx)(N.D, {
                                variant: "heading-xl/semibold",
                                className: mW.wx,
                                children: U.intl.string(U.t["KzCF/6"]),
                            }),
                            (0, S.jsx)(Q.E, {
                                variant: "text-md/normal",
                                className: mW.h_,
                                children: U.intl.format(U.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, S.jsx)(v.$, {
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
var mZ = n(872351),
    mq = n(9113),
    mQ = n(599941),
    m$ = n(384684),
    mJ = n(2242);
let m0 = [];
var m1 = n(885574),
    m2 = n(62010),
    m3 = n(912851),
    m5 = n(182744);
let m4 = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, S.jsx)(n9.D, {
        onClick: i ? void 0 : n,
        className: m5.x6,
        children: (0, S.jsxs)("div", {
            className: m5.hQ,
            children: [
                i
                    ? (0, S.jsx)(oC.y, { type: oC.y.Type.PULSING_ELLIPSIS, className: m5.__invalid_spinner })
                    : (0, S.jsx)(Q.E, { variant: "text-md/medium", className: m5.Pf, children: t }),
                (0, S.jsx)(g7.a, { size: "md", color: "currentColor", className: m5.UE }),
            ],
        }),
    });
};
var m6 = n(465932),
    m8 = n(543767),
    m7 = n(951555),
    m9 = n(790284),
    Ae = n(636194),
    At = n(624456),
    An = n(710144),
    Ai = n(815332),
    As = n(162093),
    Al = n(557506);
function Ar(e) {
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
    let g = i.role_benefits.benefits.filter((e) => e.ref_type === mJ.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === mJ.bN.INTANGIBLE),
        A = ix()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        E = U.intl.formatToPlainString(U.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: A,
        });
    return (0, S.jsx)(sf.a, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: U.intl.string(U.t.EP6EPb), variant: "secondary", onClick: l },
            { variant: "critical-primary", text: U.intl.string(U.t.F6lUDF), onClick: c, loading: d },
        ],
        title: U.intl.string(U.t.O6l5tM),
        subtitle: E,
        onClose: l,
        children: (0, S.jsxs)(Z.B, {
            gap: 8,
            children: [
                null != u ? (0, S.jsx)(i$.w, { type: "critical", message: u.message, role: "alert" }) : null,
                (0, S.jsx)(As.x, { listingId: i.id, guildId: n.guild_id, className: Al.P }),
            ],
        }),
    });
}
var Aa = n(319225),
    Ao = n(746080),
    Au = n(883616);
function Ad(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: s } = e;
    return (0, S.jsxs)("div", {
        className: Au.L0,
        children: [
            (0, S.jsxs)("div", {
                className: Au.a5,
                children: [
                    (0, S.jsx)(N.D, { variant: "heading-deprecated-12/semibold", className: Au.HU, children: t }),
                    i &&
                        (0, S.jsx)(sE.m, {
                            text: s,
                            children: (0, S.jsx)(m1.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: Au.Mo,
                            }),
                        }),
                ],
            }),
            (0, S.jsx)(N.D, { variant: "heading-xl/semibold", className: Au.sx, children: n }),
        ],
    });
}
function Ac(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, ez.Ay)(),
        [i] = (0, m8.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tw.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [s, l] = (0, f.yK)([o9.A], () => [o9.A.hasFetchedPaymentSources, o9.A.paymentSourceFetchError]);
    return null != i && (s || l)
        ? (0, S.jsx)(m7.A, { subscription: t, currentInvoicePreview: i })
        : (0, S.jsx)(oC.y, {});
}
function Ag(e) {
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
        : (0, S.jsx)(t6.D, {
              label: U.intl.string(U.t["4neDM+"]),
              children: (0, S.jsx)("div", {
                  className: Au.__invalid_rowButtons,
                  children: n
                      ? (0, S.jsx)(v.$, { variant: "primary", text: U.intl.string(U.t.y3mAE4), onClick: r, loading: i })
                      : (0, S.jsxs)(S.Fragment, {
                            children: [
                                !t && !s && (0, S.jsx)(m4, { label: U.intl.string(U.t.FRbWR8), onClick: a }),
                                (0, S.jsx)(m4, { label: U.intl.string(U.t.Dx0lF7), onClick: l }),
                            ],
                        }),
              }),
          });
}
let Am = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: s,
            expanded: l,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, At.M)(e),
                n = (0, f.bG)([Ae.A], () => Ae.A.getSubscriptionListingForPlan(t)),
                i = (0, f.bG)([Ae.A], () =>
                    null != n ? Ae.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                s = (0, f.bG)([sL.A], () => sL.A.getGuild(i?.guild_id)),
                [l, r] = T.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, mQ.XE)();
            T.useEffect(() => {
                l && null != s && null == Ae.A.getSubscriptionSettings(s.id) && a(s.id);
            }, [l, s, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = ix()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, uM.$g)(t.price, t.currency) : "",
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
        { shouldHideGuildPurchaseEntryPoints: g } = (0, m6.MH)(s?.id),
        m = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function A() {
        try {
            (u(!0),
                await oL.QP(t, c),
                (0, Aa.E)({ title: U.intl.string(U.t.oPV2cy), body: U.intl.string(U.t.DdRizV) }));
        } finally {
            u(!1);
        }
    }
    let {
            isCancelled: E,
            isPastDue: x,
            subscriptionPrice: p,
            memberSince: _,
            nextRenewalDate: N,
            nextRenewalLabel: C,
            isTrial: y,
        } = a,
        b = n.soft_deleted || null == s || m;
    return (0, S.jsxs)("div", {
        className: Au.kL,
        children: [
            (0, S.jsx)(An.A, {
                onClick: r,
                className: Au.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, S.jsxs)(S.Fragment, {
                        children: [
                            null != s && (0, S.jsx)(gV.Ay, { guild: s, active: !0, size: gV.Ay.Sizes.MEDIUM }),
                            (0, S.jsxs)("div", {
                                className: Au.if,
                                children: [
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-md/medium",
                                        className: Au.J5,
                                        children: null != s ? s.name : U.intl.string(U.t["He+cmd"]),
                                    }),
                                    (0, S.jsxs)("div", {
                                        className: Au.xp,
                                        children: [
                                            (0, S.jsx)(Q.E, {
                                                variant: "text-sm/normal",
                                                className: Au.KR,
                                                children: n.name,
                                            }),
                                            E
                                                ? (0, S.jsx)(tc.Lp, { text: U.intl.string(U.t["7uFZGt"]) })
                                                : y
                                                  ? (0, S.jsx)(tc.Lp, {
                                                        text: U.intl.string(U.t["6anton"]),
                                                        color: n6.A.unsafe_rawColors.BRAND_500.css,
                                                    })
                                                  : x
                                                    ? (0, S.jsx)(sE.m, {
                                                          text: U.intl.string(U.t.eSuJE2),
                                                          children: (0, S.jsx)("div", {
                                                              children: (0, S.jsx)(tc.Lp, {
                                                                  className: Au.qc,
                                                                  text: U.intl.string(U.t.NrRwIl),
                                                                  color: n6.A.unsafe_rawColors.YELLOW_300.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            m
                                                ? (0, S.jsx)(sE.m, {
                                                      text: U.intl.string(U.t.nv1IqK),
                                                      children: (0, S.jsx)("div", {
                                                          className: Au.Bi,
                                                          children: (0, S.jsx)(m2.E, {
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
                            (0, S.jsx)(n9.D, {
                                onClick: i(r),
                                "aria-label": U.intl.string(U.t.e5eQOy),
                                "aria-controls": d,
                                "aria-expanded": l,
                                focusProps: { ringTarget: t },
                                children: (0, S.jsx)(g7.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: iE()(Au.D6, { [Au.S7]: l }),
                                }),
                            }),
                        ],
                    });
                },
            }),
            null != i && l
                ? (0, S.jsxs)("div", {
                      id: d,
                      children: [
                          (0, S.jsx)("div", { className: Au.yF }),
                          (0, S.jsx)(Ai.A, { groupListingId: i.id, subscription: t, className: Au.kE }),
                          (0, S.jsxs)("div", {
                              className: Au.Zx,
                              children: [
                                  (0, S.jsx)(Ad, { label: C, value: N }),
                                  (0, S.jsx)(Ad, {
                                      label: U.intl.string(U.t.dltUMH),
                                      value: p,
                                      showInfoIcon: y,
                                      infoIconTooltipText: y ? U.intl.string(U.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, S.jsx)(Ad, { label: U.intl.string(U.t.AOcwWB), value: _ }),
                              ],
                          }),
                          (0, S.jsx)(mH.h, { size: 16 }),
                          !E &&
                              !m &&
                              (0, S.jsx)(t6.D, {
                                  label: U.intl.string(U.t.wmMFvA),
                                  children: (0, S.jsx)(Ac, { subscription: t }),
                              }),
                          !b &&
                              (0, S.jsx)(Ag, {
                                  isTrial: y,
                                  isCancelled: E,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: g,
                                  onCancelSubscriptionClick: function () {
                                      if (null != s && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, sI.openModal)((t) => (0, S.jsx)(Ar, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != s &&
                                          ((0, t7.pX)(I.BVt.CHANNEL(s.id, Ao.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tH.default)(),
                                          m3.A.show(
                                              I.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              U.intl.string(U.t.DvbaM4),
                                              () => {
                                                  (m9.A.setState({ subsection: eO.nR }),
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
var AA = n(661097);
let AE = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, f.bG)([m$.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [m$.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? mJ.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? mJ.M_.NONE
                                  : mJ.M_.IN_SUBSCRIPTION_SERVER;
                        })([m$.A]),
                    ) === mJ.M_.SUBSCRIBED,
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
                n ?? m0
            );
        })(),
        { loading: i } = (0, mQ.eb)(n);
    return ((0, mq.A)(oU.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, S.jsx)(oC.y, {})
        : 0 === n.length
          ? null
          : (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(v.$, { text: U.intl.string(U.t.hqyhKQ), icon: mZ.z, variant: "secondary", onClick: t }),
                    (0, S.jsx)(mH.h, { size: 10 }),
                    (0, S.jsx)(n7.n, {
                        label: U.intl.string(U.t["KzCF/6"]),
                        description: U.intl.string(U.t["Y+ucR7"]),
                        children: (0, S.jsx)("div", {
                            className: AA.A,
                            children: n.map((e) => (0, S.jsx)(Am, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var Ah = n(327479),
    Ax = n(932012);
function Ap(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, S.jsxs)("div", {
        children: [
            (0, S.jsx)(N.D, { variant: "heading-md/bold", children: U.intl.string(U.t["48ywCu"]) }),
            (0, S.jsx)(mH.h, { size: 4 }),
            (0, S.jsx)(Q.E, { variant: "text-md/normal", className: Ax.yV, children: U.intl.string(U.t.VWxmSo) }),
            (0, S.jsx)(mH.h, { size: 24 }),
            (0, S.jsxs)("div", {
                className: Ax.Nr,
                children: [
                    (0, S.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: Ax._e }),
                    (0, S.jsxs)("div", {
                        className: Ax.FS,
                        children: [
                            (0, S.jsx)(N.D, {
                                variant: "heading-xl/semibold",
                                className: Ax.wx,
                                children: U.intl.string(U.t["48ywCu"]),
                            }),
                            (0, S.jsx)(Q.E, {
                                variant: "text-md/normal",
                                className: Ax.h_,
                                children: U.intl.format(U.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, S.jsx)(Ah.A, { onClick: t, text: U.intl.string(U.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var AS = n(548411),
    AT = n(417098),
    Af = n(143582),
    AI = n(915043),
    A_ = n(631466);
function AN(e) {
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
    return (0, S.jsxs)("div", {
        className: iE()(A_.iE, t),
        children: [
            (0, S.jsx)("div", { className: iE()(A_.wx, i), children: n }),
            l && (0, S.jsx)("div", { className: A_.Qs, children: s }),
        ],
    });
}
var AC = n(885996),
    Ay = n(144165),
    Ab = n(664121),
    Av = n(950305),
    Aj = n(943775),
    AO = n(123791),
    AL = n(900797),
    AR = n(611643);
let AD = T.createContext({ isOpen: !1, toggleOpen: () => {} });
function AP(e) {
    let { children: t } = e,
        [n, i] = T.useReducer((e) => !e, !1),
        s = T.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, S.jsx)(AD.Provider, { value: s, children: t(n) });
}
AP.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: s } = T.useContext(AD),
        l = i ? AL.t : g7.a,
        r = null != n ? n : i ? U.intl.string(U.t.fgq1gs) : U.intl.string(U.t.XJuakA);
    return (0, S.jsxs)(n9.D, {
        className: iE()(AR.L, t),
        onClick: s,
        children: [
            (0, S.jsx)(Q.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, S.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var AG = n(627363),
    AM = n(243217),
    AU = n(328968),
    AV = n(163437),
    Ak = n(3432);
function Aw(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var AF = n(562312),
    AB = (((u = {})[(u.LOADING = 0)] = "LOADING"), (u[(u.DONE = 1)] = "DONE"), (u[(u.ERROR = 2)] = "ERROR"), u);
function Az(e) {
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
            [d5.A, d4.A, AU.A, sL.A],
            () => {
                let e,
                    n = d5.A.get(r),
                    i = null != n ? d4.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? AU.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, AV.PJ)(o.skuFlags),
                    d = u && null != s ? sL.A.getGuild(s) : void 0,
                    c = (0, AV.Uo)(t, i),
                    g = u && null != s && null == d;
                if (!1 === c && null != l && l.items.length > 0) {
                    let t = l.items[0];
                    e = d5.A.get(t.planId) ?? void 0;
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
        { data: h } = (0, AG.YY)(a),
        x = T.useMemo(() => (null != h ? (0, Aj.A)(h, 100) : null), [h]),
        p = g?.deleted ?? !1,
        _ = null != g && (0, AV.Se)(g),
        C = t.status === I.Dmq.PAST_DUE,
        { analyticsLocations: y } = (0, ez.Ay)(),
        [b] = (0, m8.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: y,
            analyticsLocation: tw.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = Aw(t.currentPeriodEnd),
        j = 0 === i;
    return (0, S.jsxs)(AN, {
        headerClassName: AF.dL,
        header:
            !1 === j
                ? (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsxs)("div", {
                              className: AF.VW,
                              children: [
                                  null != x &&
                                      (0, S.jsx)(Ay._, { src: x.href, imageClassName: AF.Z2, width: 40, height: 40 }),
                                  (0, S.jsxs)("div", {
                                      className: AF.aF,
                                      children: [
                                          (0, S.jsx)(N.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: h?.name ?? U.intl.string(U.t["7kqy7W"]),
                                          }),
                                          (0, S.jsx)(Q.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? U.intl.string(U.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, S.jsx)("div", {
                              className: AF.Pz,
                              children:
                                  null != h &&
                                  null != u &&
                                  null != g &&
                                  (0, S.jsx)(AK, {
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
                : (0, S.jsx)(oC.y, { type: oC.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, S.jsx)(AW, {
                    type: "warning",
                    title: _
                        ? U.intl.formatToPlainString(U.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : U.intl.formatToPlainString(U.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && A && (0, S.jsx)(AW, { type: "warning", title: U.intl.string(U.t.SmSP8Q) }),
            C && (0, S.jsx)(AW, { type: "danger", title: U.intl.string(U.t.fvOqBo) }),
            (0, S.jsxs)("div", {
                className: AF.zH,
                children: [
                    (0, S.jsx)(AH, {
                        title: U.intl.string(U.t["5D/KEH"]),
                        content: d
                            ? (0, S.jsxs)(S.Fragment, {
                                  children: [
                                      (0, S.jsxs)("span", {
                                          className: AF.yW,
                                          children: [(0, S.jsx)(Ab.R, { size: "xs" }), U.intl.string(U.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, S.jsxs)("span", {
                                              className: AF._t,
                                              children: [
                                                  (0, S.jsx)(Q.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: U.intl.format(U.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, S.jsx)(gV.Ay, { guild: c, size: gV.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, S.jsxs)("span", {
                                  className: AF.yW,
                                  children: [(0, S.jsx)(Av.UserIcon, { size: "xs" }), U.intl.string(U.t["6anEVv"])],
                              }),
                    }),
                    (0, S.jsx)(AY, { invoicePreview: b, subscriptionPlan: o }),
                    (0, S.jsx)(AH, {
                        title: U.intl.string(U.t.dnUzb6),
                        content: Aw(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, S.jsx)(AX, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: E }),
                ],
            }),
            (0, S.jsx)(Aq, {
                subscription: t,
                currentInvoicePreview: b,
                loadingState: i,
                isDeleted: p,
                isCancelled: m,
            }),
            null != h &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, S.jsx)(AZ, { appId: h.id, listingBenefits: u.benefits }),
        ],
    });
}
function AY(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, S.jsx)(AH, { title: U.intl.string(U.t.KI7ERx), content: "" });
    let i = (0, uM.CE)((0, uM.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = n?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, S.jsx)(AH, { title: U.intl.string(U.t.KI7ERx), content: i });
    let l = (0, uM.CE)((0, uM.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, S.jsx)(AH, {
        title: U.intl.string(U.t.KI7ERx),
        content: (0, S.jsxs)(S.Fragment, {
            children: [
                (0, S.jsx)(Q.E, { variant: "text-sm/semibold", children: l }),
                l !== i &&
                    (0, S.jsx)(sE.m, {
                        text: U.intl.format(U.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, S.jsx)(Q.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, S.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function AX(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, uM.CE)((0, uM.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, S.jsx)(AH, {
            title: U.intl.string(U.t.hIhAM3),
            content: (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsx)(Q.E, { variant: "text-sm/medium", children: n }),
                    (0, S.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        children: U.intl.format(U.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, S.jsx)(AH, { title: t ? U.intl.string(U.t.enxcAl) : U.intl.string(U.t["Ms+6Zq"]), content: n });
}
function AH(e) {
    let { title: t, content: n } = e;
    return (0, S.jsxs)("div", {
        className: AF.nM,
        children: [
            (0, S.jsx)(Q.E, { variant: "text-sm/medium", children: t }),
            (0, S.jsx)(Q.E, { variant: "text-sm/medium", className: AF.u4, children: n }),
        ],
    });
}
function AW(e) {
    let { type: t, title: n } = e;
    return (0, S.jsx)("div", {
        className: AF.Xm,
        children: (0, S.jsx)(i$.w, { type: "warning" === t ? "warning" : "critical", message: n, role: "status" }),
    });
}
function AK(e) {
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
        c = (0, AV.Se)(s),
        { analyticsLocations: g } = (0, ez.Ay)(),
        [m, A] = T.useState(!1),
        E = (0, AO.C)(t.id),
        h = (0, f.bG)([d4.A], () => d4.A.getParentSKU(i.skuId), [i.skuId]),
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
        p = 0 !== x.length;
    async function I() {
        try {
            A(!0);
            let { subscription: e } = await (0, oL.QP)(l, g);
            if (null == e) return;
            (0, sI.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, S.jsx)(t, { ...n, storeListing: i, subscription: AM.A.createFromServer(e) });
            });
        } finally {
            A(!1);
        }
    }
    return (0, S.jsxs)("div", {
        className: AF.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, S.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: U.intl.string(U.t.QtMnkW),
                        onClick: I,
                        loading: m,
                    })
                  : (0, S.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: U.intl.string(U.t["E8G/tr"]),
                        onClick: function () {
                            (0, sI.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("509032"), n.e("622800")]).then(
                                    n.bind(n, 301139),
                                );
                                return (n) =>
                                    (0, S.jsx)(e, { ...n, application: t, storeListing: i, subscription: l, guild: o });
                            });
                        },
                    }),
            p &&
                null != h &&
                !1 === r &&
                !1 === a &&
                (0, S.jsx)(v.$, {
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
function AZ(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, S.jsx)(AP, {
        children: (e) =>
            (0, S.jsxs)("div", {
                className: AF.PX,
                children: [
                    (0, S.jsxs)("div", {
                        className: AF.wV,
                        children: [
                            e && (0, S.jsx)(Q.E, { variant: "text-sm/semibold", children: U.intl.string(U.t.mORL67) }),
                            (0, S.jsx)(AP.Toggle, {
                                className: AF.Bh,
                                text: e ? U.intl.string(U.t.gsbFAw) : U.intl.string(U.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: s, icon: l } = e;
                              return (0, S.jsx)(AC.FY, { header: i, icon: (0, Ak.N)(t, l), description: s }, n);
                          })
                        : null,
                ],
            }),
    });
}
function Aq(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: s, isCancelled: l } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, S.jsx)("div", {
                className: AF.Ji,
                children: (0, S.jsx)(t6.D, {
                    label: U.intl.string(U.t.azZaZa),
                    children: (0, S.jsx)(oC.y, { type: oC.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, S.jsx)("div", {
                  className: AF.Ji,
                  children: (0, S.jsxs)(AT.$T, {
                      color: AT.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          U.intl.format(U.t.IIHUUF, { subscriptionId: t.id }),
                          (0, S.jsx)("br", {}),
                          U.intl.format(U.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, S.jsx)("div", {
                  className: AF.Ji,
                  children: (0, S.jsx)(t6.D, {
                      label: U.intl.string(U.t.azZaZa),
                      children: (0, S.jsx)(m7.A, { subscription: t, currentInvoicePreview: n, disabled: s || l }),
                  }),
              });
}
var AQ = (((d = {}).HOME = "HOME"), (d.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), d);
n(938796);
var A$ = n(38405);
let AJ = (0, f.UT)(d5.A, {
    getQueryId: I.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = d5.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && A$.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, cD.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var A0 = n(240248),
    A1 = n(237218),
    A2 = n(763064);
function A3(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [s, l] = T.useState(!1),
        [r, a] = T.useState(null),
        o =
            null != r &&
            (0, S.jsx)("button", {
                className: A2.x6,
                onClick: () => l((e) => !e),
                children: (0, S.jsxs)(Q.E, {
                    className: A2.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? U.intl.string(U.t["JQX/Pb"]) : U.intl.string(U.t.Fbrd8J),
                        s
                            ? (0, S.jsx)(AL.t, { color: n6.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, S.jsx)(g7.a, { color: n6.A.colors.TEXT_BRAND, size: "xs" }),
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
        (0, S.jsxs)("div", {
            children: [
                (0, S.jsx)(Q.E, {
                    ...i,
                    className: A2.Qs,
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
var A5 = n(920352);
function A4(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: s, benefits: l, description: r } = n,
        a = T.useMemo(() => (null == n.thumbnail ? null : (0, A1.t)(s, n.thumbnail, 256)), [s, n.thumbnail]),
        { data: o } = AJ(n.skuId),
        u = T.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, af._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, S.jsxs)(AN, {
              className: iE()(A5.iE, i),
              header: (0, S.jsxs)(S.Fragment, {
                  children: [
                      (0, S.jsxs)("div", {
                          className: A5.qd,
                          children: [
                              null != a &&
                                  (0, S.jsx)(Ay._, { src: a.href, imageClassName: A5.rW, width: 48, height: 48 }),
                              (0, S.jsxs)("div", {
                                  children: [
                                      (0, S.jsx)(N.D, { variant: "heading-md/bold", children: n.summary }),
                                      (0, S.jsx)(Q.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, A0.uJ)(r) &&
                      (0, S.jsx)("div", {
                          className: A5.h_,
                          children: (0, S.jsx)(A3, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, S.jsx)("div", {
                          className: A5.PX,
                          children: l.map((e) => {
                              let { id: t, name: n, description: i, icon: l } = e;
                              return (0, S.jsx)(AC.FY, { header: n, icon: (0, Ak.N)(s, l), description: i }, t);
                          }),
                      }),
              ],
          });
}
var A6 = n(185438),
    A8 = n(683380);
function A7(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, Aj.A)(t, 100),
        u = (0, AV.PJ)(r.flags),
        d = u ? Ab.R : Av.UserIcon,
        c = u ? U.intl.string(U.t["46YF2D"]) : U.intl.string(U.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, f.bG)([sL.A], () => (u && null != g ? sL.A.getGuild(g) : void 0), [g, u]),
        A = (0, f.bG)(
            [d4.A],
            () => {
                if (null != a) return d4.A.get(a);
            },
            [a],
        ),
        E = Aw(n.currentPeriodEnd);
    return (0, S.jsxs)("div", {
        children: [
            (0, S.jsxs)("div", {
                className: A8.wx,
                children: [
                    null != o && (0, S.jsx)(Ay._, { src: o.href, imageClassName: A8.Z2, width: 48, height: 48 }),
                    (0, S.jsxs)("div", {
                        children: [
                            (0, S.jsx)(N.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, S.jsxs)("div", {
                                className: A8.p4,
                                children: [
                                    (0, S.jsxs)(N.D, {
                                        variant: "heading-md/normal",
                                        className: A8.N4,
                                        children: [(0, S.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, S.jsxs)(S.Fragment, {
                                            children: [
                                                (0, S.jsx)(Q.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, S.jsxs)("span", {
                                                    className: A8.vP,
                                                    children: [
                                                        (0, S.jsx)(gV.Ay, { guild: m, size: gV.Ay.Sizes.SMOL }),
                                                        (0, S.jsx)(N.D, {
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
            (0, S.jsx)(AP, {
                children: (e) =>
                    (0, S.jsxs)("div", {
                        className: A8._B,
                        children: [
                            (0, S.jsx)(Q.E, { variant: "text-md/normal", children: U.intl.string(U.t["goe+hk"]) }),
                            e &&
                                (0, S.jsxs)(S.Fragment, {
                                    children: [
                                        (0, S.jsx)(Q.E, {
                                            variant: "text-md/normal",
                                            children: U.intl.format(U.t["Q8qJ+5"], {}),
                                        }),
                                        (0, S.jsx)(Q.E, {
                                            variant: "text-md/normal",
                                            children: U.intl.format(U.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, S.jsx)(AP.Toggle, {
                                text: e ? U.intl.string(U.t["1Rkq/E"]) : U.intl.string(U.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, S.jsxs)("div", {
                className: A8.x0,
                children: [
                    (0, S.jsx)(A4, {
                        storeListing: i,
                        className: A8.o3,
                        cta: (0, S.jsxs)("div", {
                            className: A8.cJ,
                            children: [
                                (0, S.jsx)(Q.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: U.intl.string(U.t.fHIpOY),
                                }),
                                null != A &&
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: U.intl.format(U.t["OQk+jr"], { endDate: E }),
                                    }),
                            ],
                        }),
                    }),
                    s.map((e) =>
                        e.skuId === a
                            ? (0, S.jsx)(
                                  A4,
                                  {
                                      storeListing: e,
                                      cta: (0, S.jsx)(Q.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: U.intl.format(U.t.nn88hB, { startDate: E }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, S.jsx)(A9, { storeListing: e, guildId: g, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function A9(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: s } = (0, A6.A)({
            analyticsLocation: I.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, S.jsx)(A4, {
        storeListing: t,
        cta: (0, S.jsx)(v.$, { variant: "primary", size: "sm", text: U.intl.string(U.t["+KwmBt"]), onClick: s }),
    });
}
class Ee extends T.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, S.jsxs)(AT.$T, {
                  color: AT.Hv.DANGER,
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
function Et(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, s] = T.useState({ route: AQ.HOME }),
        { route: l } = i;
    function r() {
        s({ route: AQ.HOME });
    }
    let a = (e) => {
            (s({ route: AQ.SWITCH_APP_PLANS, ...e }), n(U.intl.string(U.t.VFqtkP), r));
        },
        [o, u] = T.useState({});
    T.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: AB.LOADING })),
                (0, Af._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: AB.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: AB.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, AI.E)(),
        c = d !== AI.mJ.LOADED;
    switch (l) {
        case AQ.HOME:
            return (0, S.jsx)(S.Fragment, {
                children: t.map((e) =>
                    (0, S.jsx)(
                        Ee,
                        {
                            subscription: e,
                            children: (0, S.jsx)(Az, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? AB.LOADING : (o[e.id] ?? AB.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case AQ.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, S.jsx)(A7, { ...m, navigateToHome: r });
        default:
            (0, ig.xb)(l);
    }
}
var En = n(707989);
function Ei(e) {
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
        null == i && (i = (0, S.jsx)(Es, { onBack: t, title: U.intl.string(U.t["DB/m9a"]) })),
        (0, S.jsxs)("div", {
            children: [
                i,
                (0, S.jsx)("div", {
                    className: En.A,
                    children: (0, S.jsx)(Et, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            s(
                                (0, S.jsx)(Es, {
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
function Es(e) {
    let { onBack: t, title: n } = e;
    return (0, S.jsxs)("div", {
        className: En.D,
        children: [
            (0, S.jsx)(sm.K, {
                "aria-label": U.intl.string(U.t["13/7kX"]),
                icon: () => (0, S.jsx)(AS.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, S.jsx)(N.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var El = n(366999),
    Er = n(391659);
function Ea(e) {
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
        ? ((t = U.intl.string(go.default["/S02sx"])), (n = U.intl.string(go.default.OPJNST)))
        : i
          ? ((t = U.intl.string(U.t["hT6i/0"])),
            (n = null != a ? U.intl.format(U.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = U.intl.string(U.t["3G0CTC"])),
            (n = r === tJ.xc.FP_SUB_PAUSED ? U.intl.format(U.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = iE()({ [Er.Hs]: i, [Er.mT]: !i }),
        d = iE()({ [Er.CQ]: i, [Er.ZM]: !i }),
        c = iE()({ [Er.EM]: !i });
    return (0, S.jsxs)("div", {
        className: Er.r6,
        children: [
            (0, S.jsxs)("div", {
                className: Er.Nv,
                children: [
                    (0, S.jsx)(N.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, S.jsx)(Q.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, S.jsx)("div", {
                    className: Er.ZS,
                    children: (0, S.jsx)("div", {
                        className: u,
                        children: (0, S.jsx)(Q.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let Eo = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: s } = e,
        l = (0, af.kX)(t),
        r = l.length > 0,
        a = (0, El.Ay)(t.endsAt, El.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, S.jsx)("div", {
        children: (0, S.jsxs)("div", {
            className: iE()(n, Er.f8),
            children: [
                (0, S.jsx)("div", {
                    className: Er.J_,
                    children: (0, S.jsxs)("div", {
                        className: Er.Bh,
                        children: [
                            (0, S.jsx)("div", {
                                className: Er.xt,
                                children: (0, S.jsx)(ad.t, { size: "md", color: "white", className: Er.T8 }),
                            }),
                            (0, S.jsx)("div", {
                                className: Er.pt,
                                children: (0, S.jsx)(N.D, {
                                    variant: "heading-md/semibold",
                                    children: U.intl.string(U.t.DFMPWS),
                                }),
                            }),
                            (0, S.jsx)(Q.E, {
                                className: Er.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : U.intl.string(U.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, S.jsx)(Ea, {
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
var Eu = n(983048);
function Ed(e) {
    let t,
        {
            user: n,
            planId: i,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, f.yK)([d5.A], () => [d5.A.get(i), null != l ? d5.A.get(l.planId) : null]);
    if (null == o || af.Ay.getInterval(i).intervalType !== tJ.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, af.z4)(i),
        m = af.Ay.getDisplayName(i);
    if (a) t = U.intl.string(go.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === I.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let n = (0, af._e)(e, r);
        t = U.intl.formatToPlainString(U.t["5CNRRA"], { date: n ?? 0 });
    } else t = U.intl.formatToPlainString(U.t.eNXZ5O, { planName: m });
    let A = g || n.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, S.jsxs)("div", {
        className: Er.Bh,
        children: [
            (0, S.jsx)("div", {
                className: iE()({
                    [Er.bY]: g,
                    [Er.sr]: o.skuId === tJ.pe.TIER_0,
                    [Er.lP]: o.skuId === tJ.pe.TIER_1,
                    [Er.eb]: o.skuId === tJ.pe.TIER_2,
                }),
                children: g
                    ? (0, S.jsx)(gT._, { size: "md", color: "currentColor", className: Er.Kk })
                    : (0, S.jsx)(ad.t, { size: "md", color: "currentColor", className: Er.Kk }),
            }),
            (0, S.jsxs)("div", {
                className: Er.pt,
                children: [
                    (0, S.jsx)(N.D, {
                        variant: "heading-md/semibold",
                        children: U.intl.format(U.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, S.jsx)(N.D, {
                            className: Er.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, S.jsx)(Q.E, {
                className: Er.PJ,
                variant: "text-md/semibold",
                children: U.intl.format(U.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let Ec = function (e) {
    let { className: t, entitlements: n } = e,
        i = W()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, f.yK)([dX.A], () => dX.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, f.bG)([ue.A], () => ue.A.getPremiumSubscription()),
        r = (0, f.bG)([ue.A], () => null == ue.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === tJ.gD.PREMIUM_MONTH_TIER_1),
        o = (0, f.bG)([lf.default], () => lf.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, S.jsxs)("div", {
        children: [
            (0, S.jsx)("div", {
                className: iE()(t, Er.xF, Er.J_),
                children: Object.keys(i).map((e) =>
                    (0, S.jsx)(
                        Ed,
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
                (0, S.jsxs)("div", {
                    children: [
                        (0, S.jsx)(Q.E, {
                            className: Er.eT,
                            variant: "text-md/normal",
                            children: U.intl.string(U.t["VNr4+O"]),
                        }),
                        (0, S.jsx)(Eu.i, {}),
                    ],
                }),
        ],
    });
};
var Eg = n(902782);
function Em(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: s } = (0, ez.Ay)(),
        [l] = (0, m8.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: tw.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = i ? Eg.r : Eg.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, af.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = d5.A.get(o);
    th()(null != u, "Missing plan");
    let d = (0, uM.$g)(l.total, l.currency);
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
        (0, S.jsx)(Q.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function EA(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === I.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, S.jsx)(Em, { subscription: t, withOverheadSeparator: n });
}
var EE = n(580892),
    Eh = n(689255);
let Ex = { [eO.nR]: "role_subscriptions_panel", [eO.PZ]: "application_subscriptions_panel" };
function Ep() {
    return (0, S.jsx)(oV.Z, {
        className: Eh.wb,
        type: oV.Z.Types.CUSTOM,
        children: (0, S.jsxs)(sb.A, {
            align: sb.A.Align.CENTER,
            children: [
                (0, S.jsx)(sn.A, { game: null, size: sn.M.SMALL, className: Eh.pV }),
                (0, S.jsx)("span", { className: Eh.O, children: U.intl.string(U.t["jy/hyj"]) }),
            ],
        }),
    });
}
function ES(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, m_._)(e, t));
}
function ET() {
    let e = (0, f.bG)([dX.A], () => dX.A.getForApplication(tJ.tv), [], ES);
    return (
        T.useEffect(() => {
            (0, cE.LM)(tJ.tv);
        }, []),
        (0, S.jsx)(n7.n, {
            label: U.intl.string(U.t["2GKrvn"]),
            description: U.intl.string(U.t.Z5b2Gf),
            children:
                null != e && af.Ay.hasAccountCredit(e)
                    ? (0, S.jsx)(Ec, { className: Eh.fX, entitlements: e })
                    : (0, S.jsx)(Ep, {}),
        })
    );
}
function Ef() {
    return (0, S.jsx)("hr", { className: Eh.hr });
}
let EI = function () {
        var e;
        let t = (0, f.bG)([ue.A], () => ue.A.getPremiumTypeSubscription()),
            n = (0, mN.A)({ subscriptionFilter: (e) => EE.Hy.has(e.status) }),
            i = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
            s = n.length > 1,
            l = (0, f.bG)(
                [o9.A],
                () => (null != t && null != t.paymentSourceId ? o9.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, f.bG)([ue.A], () => ue.A.hasFetchedSubscriptions()),
            a = (0, f.bG)([oP.A], () => oP.A.isBusy),
            o = (0, cG.Y)(),
            u = m9.A.useField("subsection"),
            d = m9.A.useField("scrollToGameServers"),
            c = T.useRef(null);
        T.useEffect(() => {
            (0, ir._)(null != u ? Ex[u] : h.X.SUBSCRIPTIONS_PANEL);
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
            { servers: E } = (0, mX.f)({ enabled: A }),
            x = (0, f.yK)([ue.A], () => (0, mP.eP)(E, (e) => ue.A.getSubscriptionById(e)), [E]),
            p = (0, cP.A)({ forceFetch: !0 }),
            _ = (0, ck.ds)(),
            C = null !== t ? t.currentPeriodEnd : void 0,
            y =
                !(_ && !(p.unactivatedUnits.length > 0)) &&
                (p.fractionalState !== tJ.xc.NONE || p.unactivatedUnits.length > 0);
        return (T.useEffect(() => {
            d &&
                r &&
                o &&
                x.length > 0 &&
                (c.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                m9.A.setState({ scrollToGameServers: !1 }));
        }, [d, r, o, x.length]),
        T.useEffect(
            () => (
                (0, cD.zS)(),
                oL.hP(),
                (0, gf.CD)(),
                oL.$o(),
                function () {
                    m9.A.resetState();
                }
            ),
            [],
        ),
        tu.A.enabled)
            ? (0, S.jsx)(oh.A, {})
            : r && o
              ? u === eO.nR
                  ? (0, S.jsx)(AE, { onGoBack: () => m9.A.setState({ subsection: null }) })
                  : u === eO.PZ
                    ? (0, S.jsx)(Ei, { onGoBack: () => m9.A.setState({ subsection: null }) })
                    : (0, S.jsx)("div", {
                          className: Eh.kL,
                          children: (0, S.jsxs)("div", {
                              className: Eh.Qs,
                              children: [
                                  s ? (0, S.jsx)(EE.Sb, {}) : null,
                                  null != t
                                      ? (0, S.jsx)(EE.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, S.jsx)(EE.TC, {}),
                                  y &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, S.jsxs)("section", {
                                          children: [
                                              (0, S.jsx)(N.D, {
                                                  variant: "heading-md/bold",
                                                  className: Eh.HL,
                                                  children: U.intl.string(U.t.Obre8v),
                                              }),
                                              (0, S.jsx)(Q.E, {
                                                  variant: "text-md/normal",
                                                  className: Eh.JU,
                                                  children: U.intl.format(U.t["7Zi06b"], {
                                                      helpCenterLink: eC.A.getArticleURL(
                                                          I.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, S.jsx)(Eo, {
                                                  className: Eh.fX,
                                                  fractionalPremiumInfo: p,
                                                  activationDate: C,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, S.jsx)(ET, {}),
                                  m > 0 &&
                                      (0, S.jsxs)(S.Fragment, {
                                          children: [
                                              (0, S.jsx)(Ef, {}),
                                              (0, S.jsx)(mK, {
                                                  count: m,
                                                  onClickManageSubscription: () => m9.A.setState({ subsection: eO.nR }),
                                              }),
                                          ],
                                      }),
                                  g > 0 &&
                                      (0, S.jsxs)(S.Fragment, {
                                          children: [
                                              (0, S.jsx)(Ef, {}),
                                              (0, S.jsx)(Ap, {
                                                  count: g,
                                                  onClickManageSubscription: () => {
                                                      (m9.A.setState({ subsection: eO.PZ }),
                                                          td.default.track(
                                                              I.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          ));
                                                  },
                                              }),
                                          ],
                                      }),
                                  x.length > 0 &&
                                      (0, S.jsxs)("div", {
                                          ref: c,
                                          children: [(0, S.jsx)(Ef, {}), (0, S.jsx)(mY, { servers: x })],
                                      }),
                                  (0, S.jsx)(Ef, {}),
                                  null != t ? (0, S.jsx)(EA, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, S.jsx)("div", { className: iE()(Eh.kL, Eh.Lq), children: (0, S.jsx)(oC.y, {}) });
    },
    E_ = (0, E.E2)(h.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [U.intl.string(U.t.trSpHX), U.intl.string(U.t["2GKrvn"])],
        Component: () => (0, S.jsx)(EI, {}),
    }),
    EN = (0, E.zZ)(h.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [U.intl.string(U.t.trSpHX), U.intl.string(U.t["2GKrvn"])],
        buildLayout: () => [E_],
    }),
    EC = (0, E.t_)(h.X.SUBSCRIPTIONS_PANEL, { useTitle: () => U.intl.string(U.t.trSpHX), buildLayout: () => [EN] }),
    Ey = (0, E.i4)(h.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.trSpHX),
        icon: mf.L,
        usePersistentBadge: function () {
            let e = (0, mI.l)();
            return T.useMemo(
                () => ({
                    badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, S.jsx)(i3.E, { size: "xs", color: n6.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [EC],
    }),
    Eb = (0, E.WI)(h.X.BILLING_SECTION, {
        useTitle: () => U.intl.string(U.t.oeUm2s),
        buildLayout: () => [gS, mT, Ey, cb, dn],
    });
var Ev = n(540999),
    Ej = n(306471),
    EO = n(964355),
    EL = n(172272);
let ER = (0, E.zD)(h.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, f.bG)([rg.default], () => rg.default.isAxeEnabled),
        setValue: (e) => (0, rc.x)({ axeEnabled: e }),
    }),
    ED = (0, E.zD)(h.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, rc.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var EP = n(276086),
    EG = n(354328);
let EM = (0, E.zD)(h.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, EG.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, EP.L)("highlight_mana_components", e);
        },
    }),
    EU = (0, E.zD)(h.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, EG.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, EP.L)("highlight_mana_text_overrides", e);
        },
    }),
    EV = (0, E.zD)(h.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, EG.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, EP.L)("highlight_mana_text", e);
        },
    }),
    Ek = (0, E.zD)(h.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, EG.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, EP.L)("highlight_void_toggleables", e);
        },
    }),
    Ew = (0, E.sN)(h.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, f.bG)([rg.default], () => rg.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: EL.YR,
        markers: Array.from({ length: EL.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => EL.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            EL.Or.getState().setHorizontalSpacing(e);
        },
    }),
    EF = (0, E.zD)(h.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, rc.x)({ layoutDebuggingEnabled: e });
        },
    }),
    EB = (0, E.sN)(h.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, f.bG)([rg.default], () => rg.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: EL.YR,
        markers: Array.from({ length: EL.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => EL.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            EL.Or.getState().setVerticalSpacing(e);
        },
    }),
    Ez = (0, E.zZ)(h.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [ED, EF, Ew, EB, EM, EV, EU, Ek, ER],
    });
var EY = n(246605),
    EX = n(274184);
function EH(e) {
    let { label: t, description: n, placeholder: i, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = T.useState(s ?? ""),
        u = T.useRef(null),
        [d, c] = T.useState(0);
    function g() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        T.useEffect(() => g, []),
        (0, S.jsx)(t6.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, S.jsx)(s_.k, {
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
let EW = (0, E.E2)(h.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, f.bG)([EX.Ay], () => EX.Ay.getActionTriggeredSurveyOverride());
            return (0, S.jsx)(EH, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => EY.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    EK = (0, E.zD)(h.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => M.HZ.useSetting(),
        setValue: (e) => {
            M.HZ.updateSetting(e);
        },
    });
var EZ = n(396478),
    Eq = n(173936),
    EQ = n(103557),
    E$ = n(414079),
    EJ = n(148810),
    E0 = n(380610),
    E1 = n(986238),
    E2 = n(428524),
    E3 = n(252149),
    E5 = n(221851);
let E4 = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    E6 = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function E8(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class E7 extends T.Component {
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
        return (0, S.jsxs)(sb.A, {
            direction: sb.A.Direction.VERTICAL,
            className: iE()(E2.oS, E5.SX, E3.N, E2.nM),
            children: [
                (0, S.jsx)(E$.A, {
                    className: iE()(E2.lL, { [E2.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, S.jsxs)(sb.A, {
                    className: E5.QB,
                    children: [
                        (0, S.jsx)(sb.A.Child, {
                            basis: "50%",
                            children: (0, S.jsx)(sg.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: E6,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: i,
                            }),
                        }),
                        (0, S.jsx)(sb.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, S.jsx)(s_.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, S.jsxs)(sb.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, S.jsx)(Q.E, {
                                className: E2.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, S.jsxs)(Q.E, {
                            variant: "text-sm/normal",
                            className: E2.AS,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, S.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
class E9 extends T.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, E0.bD)();
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
        return W().without(E4, ...t);
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
        let t = await (0, EJ.Zk)(e);
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
        (0, sI.openModal)((t) => (0, S.jsx)(he, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, S.jsx)(EZ.pp, {
            theme: nH.A.theme,
            className: iE()(E5.eT, E5.SX),
            children: (0, S.jsx)(EZ.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : W().map(e, (e, i) =>
                  (0, S.jsx)(
                      E7,
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
            : (0, S.jsx)(v.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, S.jsx)(sE.m, {
                  text: "Generate Public Link",
                  children: (0, S.jsx)(sm.K, {
                      variant: "secondary",
                      icon: Eq.LinkIcon,
                      "aria-label": "Generate Public Link",
                      onClick: this.handleLinkGeneration,
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, S.jsxs)(S.Fragment, {
            children: [
                (0, S.jsx)(v.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, S.jsx)(v.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: E8(t ?? {}),
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
            ? (0, S.jsx)(oC.y, { className: E5.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !n && !t && this.getAvailableProjects().length > 0,
            l =
                E8(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, S.jsx)(Q.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, S.jsx)(n7.n, {
            children: (0, S.jsxs)(Z.B, {
                gap: 16,
                children: [
                    (0, S.jsx)(sg.l, {
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
                    (0, S.jsxs)(l4.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class he extends T.Component {
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
            t = await (0, EJ.SB)(e);
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
        return E8(this.props.buildOverrides ?? {});
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
            d = E1.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, S.jsxs)(Z.B, {
            gap: 20,
            children: [
                (0, S.jsx)(sg.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: E1.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, S.jsx)(sg.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: E1.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, S.jsxs)(Z.B, {
                          gap: 20,
                          children: [
                              (0, S.jsx)(s_.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: iq.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, S.jsx)(sg.l, {
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
                    : (0, S.jsx)(EQ.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                this.isMobile()
                    ? null
                    : (0, S.jsx)(EQ.f, {
                          label: "Client Experiment Override",
                          description:
                              "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                          value: o,
                          error: u,
                          onChange: this.handleExperiments,
                          placeholder: '{"2022-01_threads":1}',
                      }),
                (0, S.jsx)(t8.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, S.jsx)("div", {});
        let n = "info";
        switch (t) {
            case 0:
                n = "critical";
                break;
            case 1:
                n = "warning";
        }
        return (0, S.jsx)(i$.w, { type: n, message: e, role: "critical" === n ? "alert" : "status" });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, S.jsx)(sf.a, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, S.jsx)(cl.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let ht = (0, E.E2)(h.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: E9 });
var hn = n(256311),
    hi = n(883600);
let hs = (0, E.E2)(h.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, f.bG)([hi.A], () => hi.A.overrideId());
        async function t(e) {
            let t = hi.A.getChangelog(e, "en-US");
            return null != t ? t : ((await hn.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, S.jsx)(EH, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => hn.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var hl = n(506774);
let hr = new Date("2018-01-01"),
    ha = (0, E.Tf)(h.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => M.pK.useSetting() === oM.default.fromTimestamp(hr.getTime()),
        onClick: () => (hl.w.set("lastChangeLogDate", hr), M.pK.updateSetting(oM.default.fromTimestamp(hr.getTime()))),
    }),
    ho = (0, E.zD)(h.X.DISABLE_APP_COLLECTIONS_CACHE, {
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
    hu = (0, E.zD)(h.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.isForcedCanary),
        setValue: (e) => {
            (0, rc.x)({ canary: e });
        },
    }),
    hd = (0, E.zD)(h.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.sourceMapsEnabled),
        setValue: (e) => (0, rc.x)({ sourceMapsEnabled: e }),
    }),
    hc = (0, E.zD)(h.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, rc.x)({ onlyShowPreviewAppCollections: e }),
    });
var hg = n(10094),
    hm = n(683760);
let hA = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: tJ.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: tJ.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: tJ.PremiumTypes.TIER_2 },
    ],
    hE = (0, E.Hn)(h.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => hA,
        clearable: !0,
        useValue: () =>
            (0, f.bG)([hm.A], () => {
                let e = hm.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, hg.O)(null, void 0)
                : null === e
                  ? (0, hg.O)(void 0, void 0)
                  : (0, hg.O)(0 === e ? null : e, void 0);
        },
    });
var hh = n(374042);
let hx = (0, E.E2)(h.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, f.bG)([EX.Ay], () => EX.Ay.getSurveyOverride());
            return (0, S.jsx)(EH, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => EY.xr(e),
                fetchOverride: (e) => (0, hh.B)(e, !0) ?? null,
            });
        },
    }),
    hp = (0, E.zZ)(h.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [hE, hx, EW, hs, ha, hu, EK, hc, ho, hd, ht],
        useInlineNotice: () => ({
            type: p.lT.INLINE_NOTICE,
            noticeType: "info",
            text: U.intl.format(U.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    hS = (0, E.zD)(h.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, rc.x)({ logAnalyticsEvents: e }),
    }),
    hT = (0, E.zD)(h.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.isLoggingGatewayEvents),
        setValue: (e) => (0, rc.x)({ logGatewayEvents: e }),
    }),
    hf = (0, E.zD)(h.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.preventPopoutClose),
        setValue: (e) => (0, rc.x)({ preventPopoutClose: e }),
    }),
    hI = (0, E.zD)(h.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.logKeyboardMismatches),
        setValue: (e) => (0, rc.x)({ logKeyboardMismatches: e }),
    }),
    h_ = (0, E.zD)(h.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.isLoggingOverlayEvents),
        setValue: (e) => (0, rc.x)({ logOverlayEvents: e }),
    }),
    hN = (0, E.zD)(h.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.isLoggingQuestEvents),
        setValue: (e) => (0, rc.x)({ logQuestEvents: e }),
    }),
    hC = (0, E.zD)(h.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, f.bG)([rg.default], () => rg.default.isTracingRequests),
        setValue: (e) => (0, rc.x)({ trace: e }),
    }),
    hy = (0, E.zZ)(h.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [hT, h_, hC, hS, hI, hf, hN] }),
    hb = (0, E.t_)(h.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [hp, hy, Ez],
    }),
    hv = (0, E.i4)(h.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: Ej.V,
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
                } = (0, f.cf)([rg.default, Ev.A, lf.default], () => ({
                    layoutDebuggingEnabled: rg.default.layoutDebuggingEnabled,
                    isDeveloper: Ev.A.isDeveloper,
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
                { horizontalSpacing: g, verticalSpacing: m } = (0, EL.Or)(),
                { setHorizontalSpacing: A, setVerticalSpacing: E } = EL.Or.getState(),
                x = M.HZ.useSetting();
            return t
                ? [
                      (0, S.jsxs)(
                          tn.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, ng.openUserSettings)(h.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, S.jsx)(
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
                                  (0, S.jsx)(
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
                                  (0, S.jsx)(
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
                                  (0, S.jsx)(
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
                      (0, S.jsxs)(
                          tn.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, ng.openUserSettings)(h.X.LOGGING);
                              },
                              children: [
                                  (0, S.jsx)(
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
                                  (0, S.jsx)(
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
                                  (0, S.jsx)(
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
                                  (0, S.jsx)(
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
                                  (0, S.jsx)(
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
                      (0, S.jsxs)(
                          tn.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, ng.openUserSettings)(h.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, S.jsx)(
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
                                  (0, S.jsx)(
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
                                      (0, S.jsxs)(S.Fragment, {
                                          children: [
                                              (0, S.jsx)(
                                                  tn.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, S.jsx)(EO.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: g,
                                                              minValue: 0,
                                                              maxValue: EL.YR,
                                                              onChange: (e) => A(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, S.jsx)(
                                                  tn.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, S.jsx)(EO.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: EL.YR,
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
                          ? (0, S.jsx)(
                                tn.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => lT() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [hb],
    });
var hj = n(127062),
    hO = n(25044),
    hL = n(80703),
    hR = n(123292),
    hD = n(683438),
    hP = n(890856),
    hG = n(100392),
    hM = n(102609),
    hU = n(271478),
    hV = n(386976),
    hk = n(257433),
    hw = n(32523),
    hF = n(96919),
    hB = n(688151),
    hz = n(863763);
function hY(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: s } = e,
        [l, r] = T.useState(s),
        [a, o] = T.useState(!1),
        u = T.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, f.bG)([d2.default], () => d2.default.getId()),
        c = (0, f.bG)([d2.default], () => {
            let e = d2.default.getInstallationForTracking();
            return null == e ? null : (0, hL.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, hk.iN)(t, g),
        A = (0, hk.Fm)(t, g),
        E = (0, f.yK)([rS.A], () =>
            W()
                .sortBy(rS.A.getRecentExposures(hB.Vh.USER, n), (e) => {
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
                (0, uO.C)((0, hG.yA)(n), () => {
                    ((0, lE.P0)({ text: "Copied experiment link", variant: "success" }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        x = (0, S.jsx)(hP.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, S.jsxs)(Q.E, {
                variant: "text-md/medium",
                className: hz.DD,
                children: [
                    (0, S.jsxs)("div", {
                        children: [
                            (0, S.jsxs)(Z.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    uO.p5 &&
                                        (0, S.jsx)(n9.D, {
                                            onClick: h,
                                            children: (0, S.jsx)(Eq.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, S.jsx)(Q.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, S.jsx)("span", {
                        className: hz.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, S.jsx)("div", { className: hz.Os, children: x });
    let p = "";
    return (
        (p =
            t.system === hM.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? hB.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, S.jsxs)("div", {
            className: hz.Os,
            children: [
                x,
                (0, S.jsx)("div", {
                    children: (0, S.jsx)(hU.g, {
                        label: t.system === hM.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: p,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, S.jsx)("div", {
                    className: hz.h_,
                    children:
                        null == A
                            ? (0, S.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                a
                    ? (0, S.jsxs)("div", {
                          children: [
                              (0, S.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hz.id,
                                  children: "Server Descriptor",
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "code",
                                  className: hz.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hz.id,
                                  children: "Override Descriptor",
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "code",
                                  className: hz.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hz.id,
                                  children: "Recent Exposures",
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "code",
                                  className: hz.AS,
                                  children: 0 === E.length ? "None" : E.join("\n"),
                              }),
                          ],
                      })
                    : (0, S.jsx)("div", {
                          className: hz.id,
                          children: (0, S.jsx)(hR.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, S.jsx)(su.c, { className: hz.yF }),
            ],
        })
    );
}
function hX(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [s, l] = T.useState(null != i),
        [r, a] = T.useState(!1),
        o = T.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, f.bG)([rS.A], () => rS.A.getLoadedGuildExperiment(n)),
        d = (0, f.bG)([rS.A, sL.A, i0.A], () => {
            if (t.system === hM.l5.LEGACY) return null == rS.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !sL.A.getGuildsArray().some((t) => null != i0.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, f.yK)([rS.A], () =>
            W()
                .sortBy(rS.A.getRecentExposures(hB.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, f.yK)([d2.default, sL.A, rS.A, i0.A], () => {
            let e = t.system === hM.l5.LEGACY,
                i = t.name,
                s = d2.default.getId(),
                l = W().sortBy(sL.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of l) {
                let l = e
                    ? (rS.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? hB.RE.NOT_ELIGIBLE)
                    : (i0.A.getEvaluationAndAssignment("guild", t.id, i, s)[1]?.variantId ?? hB.RE.NOT_ELIGIBLE);
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
        A = t.system !== hM.l5.LEGACY,
        E = (0, f.yK)([sL.A], () => W().sortBy(sL.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [h, x] = T.useState(() => sR.A.getGuildId() ?? sR.A.getLastSelectedGuildId()),
        p = E.find((e) => e.id === h)?.name,
        I = (0, f.bG)(
            [i0.A],
            () => {
                if (A && null != h) return i0.A.getServerAssignment("guild", h, t.name);
            },
            [A, h, t.name],
        ),
        _ = (0, f.bG)([i0.A, d2.default], () => {
            if (!A) return;
            let e = d2.default.getId();
            return i0.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != _ && (_.isOverride || _.useAsEligibility),
        C = (0, S.jsx)(n9.D, {
            onClick: o,
            children: (0, S.jsxs)(Q.E, {
                variant: "text-md/medium",
                className: hz.DD,
                children: [
                    (0, S.jsxs)("div", {
                        children: [
                            (0, S.jsx)("span", { children: t.title }),
                            (0, S.jsx)(Q.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, S.jsx)("span", { className: hz.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, S.jsxs)("div", {
              className: hz.Os,
              children: [
                  C,
                  (0, S.jsx)(hU.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  A &&
                      E.length > 0 &&
                      (0, S.jsx)("div", {
                          className: hz.h_,
                          children: (0, S.jsx)(sg.l, {
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
                  (0, S.jsx)("div", {
                      className: hz.h_,
                      children: d
                          ? (0, S.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === hM.l5.LEGACY
                                        ? 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        : "Warning: Server did not send an assignment for this experiment. Make sure the experiment is configured to run on the APP surface in the admin UI.",
                            })
                          : null,
                  }),
                  A &&
                      (0, S.jsxs)("div", {
                          children: [
                              (0, S.jsxs)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hz.id,
                                  children: ["Server Descriptor", null != p ? ` (${p})` : ""],
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "code",
                                  className: hz.AS,
                                  children: null == I ? "None" : JSON.stringify(I, void 0, 2),
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hz.id,
                                  children: "Client Eligibility",
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "code",
                                  className: hz.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, S.jsxs)("div", {
                            children: [
                                (0, S.jsx)(Q.E, {
                                    variant: "text-lg/medium",
                                    className: hz.id,
                                    children: "Guild Assignments",
                                }),
                                (0, S.jsx)(Q.E, { variant: "code", className: hz.AS, children: g }),
                                t.system === hM.l5.LEGACY &&
                                    (0, S.jsxs)(S.Fragment, {
                                        children: [
                                            (0, S.jsx)(Q.E, {
                                                variant: "text-lg/medium",
                                                className: hz.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, S.jsx)(Q.E, {
                                                variant: "code",
                                                className: hz.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, S.jsx)(Q.E, {
                                    variant: "text-lg/medium",
                                    className: hz.id,
                                    children: "Override Descriptor",
                                }),
                                (0, S.jsx)(Q.E, {
                                    variant: "code",
                                    className: hz.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, S.jsx)(Q.E, {
                                    variant: "text-lg/medium",
                                    className: hz.id,
                                    children: "Recent Exposures",
                                }),
                                (0, S.jsx)(Q.E, {
                                    variant: "code",
                                    className: hz.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, S.jsx)("div", {
                            className: hz.id,
                            children: (0, S.jsx)(hR.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, S.jsx)(su.c, { className: hz.yF }),
              ],
          })
        : (0, S.jsx)("div", { className: hz.Os, children: C });
}
let hH = (0, E.E2)(h.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, hV.op)(),
                { experiments: n, overridesInfo: i } = (0, hw.hI)(),
                s = T.useMemo(() => ({ ...n, ...e }), [n, e]),
                l = T.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, f.bG)([d2.default], () => {
                    let e = d2.default.getInstallationForTracking();
                    return null == e ? null : (0, hL.v)(e);
                }),
                [a, o] = T.useState(""),
                u = (0, hF.oC)((0, hF.R3)((0, hF.Fm)(s), l), a);
            return (0, S.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, S.jsxs)(Z.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, S.jsxs)(Q.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                uO.p5 &&
                                    (0, S.jsx)(hR.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uO.C)(r, () => {
                                                (0, lE.P0)({ text: "Installation ID copied!", variant: "success" });
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, S.jsx)(hD.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? hX : hY;
                              return (0, S.jsx)(
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
                        : (0, S.jsx)("div", {
                              className: hz.p$,
                              children: (0, S.jsx)(N.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    hW = (0, E.zZ)(h.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [hH] }),
    hK = (0, E.t_)(h.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [hW] }),
    hZ = (0, E.i4)(h.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: hj.c,
        useMenu: hO.A,
        buildLayout: () => [hK],
    }),
    hq = (0, E.WI)(h.X.DEVELOPER_SECTION, {
        useTitle: () => U.intl.string(U.t["+gHUHA"]),
        usePredicate: () => Ev.A.isDeveloper,
        buildLayout: () => [hZ, hv],
    });
var hQ = n(682348),
    h$ = n(871633),
    hJ = n(751075),
    h0 = n(843402);
let h1 = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function h2() {
    let e = (0, f.yK)([i9.Ay], () => i9.Ay.getGamesSeen(!1)),
        t = (0, f.bG)([i9.Ay], () => h1(...i9.Ay.getOverrides()));
    T.useEffect(() => {
        if (e6.isPlatformEmbedded) return ((0, h0.a2)(), h0.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = T.useMemo(
        () =>
            e.reduce((e, t) => ((0, h$.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function h3(e) {
    let { gameHistory: t } = h2();
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
function h5(e) {
    let { namedGames: t, totalCount: n } = h3(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function h4() {
    let { namedGames: e } = h3(2),
        [t, n] = T.useMemo(() => e.map((e) => e.id), [e]);
    T.useEffect(() => {
        AG.Ay.fetchApplications([t, n].filter(ig.Vq));
    }, [t, n]);
    let [i, s] = (0, f.yK)([i6.A], () => [t, n].map(i6.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, S.jsx)(sn.A, { game: i, size: sn.M.MEDIUM_LARGE }), shape: hJ.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, S.jsx)(sn.A, { game: s, size: sn.M.MEDIUM }), shape: hJ.e0.ROUNDED } : null,
          };
}
let h6 = (0, E.AK)(h.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = h5(2);
            return U.intl.format(U.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = h4();
            return { type: p.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: h.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, f.bG)([i9.Ay], () => i9.Ay.getGamesSeen(!1).some((e) => !(0, h$.n1)(e))) && (0, nf.xl)(),
    }),
    h8 = (0, E.gN)(h.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [h6] });
var h7 = n(311059),
    h9 = n(406535),
    xe = n(57129);
let xt = (0, E.zD)(h.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => U.intl.string(xe.default.A0FVCV),
        useSubtitle: () => U.intl.string(xe.default.vHX6RG),
        useValue: M.hV.useSetting,
        setValue: function (e) {
            (M.hV.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h9.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    xn = (0, E.zD)(h.X.ACTIVITY_PRIVACY_NOTIFY_SERVER_MEMBERS_ON_GO_LIVE_SETTING, {
        useTitle: () => U.intl.string(xe.default["9l5u6A"]),
        useSubtitle: () => U.intl.string(xe.default.QcmgBF),
        useValue: M.pR.useSetting,
        setValue: function (e) {
            (M.pR.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h9.Y.ACCOUNT,
                    notify_server_members_on_go_live: e,
                }));
        },
    }),
    xi = (0, E.zZ)(h.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => U.intl.string(U.t.WmsPis),
        useSearchTerms: () => [U.intl.string(U.t["8ka8li"])],
        buildLayout: () => [h7._, xt, xn, h8],
    }),
    xs = (0, E.AK)(h.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.J0SFL2),
        destinationKey: h.X.DATA_AND_PRIVACY_PANEL,
    }),
    xl = (0, E.gN)(h.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [xs] });
var xr = n(365258);
let xa = (0, E.Qx)(h.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => U.intl.string(xe.default["/LHVbt"]),
    useSubtitle: () => U.intl.string(U.t.L5IdzV),
    useOptions: function () {
        return [
            { value: eQ.Qd.ACTIVITY_STATUS_OFF, name: U.intl.string(xe.default.m3oL7Q) },
            { value: eQ.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: U.intl.string(xe.default["5+lnTA"]) },
            { value: eQ.Qd.ACTIVITY_STATUS_ON, name: U.intl.string(xe.default["egr+VZ"]) },
        ];
    },
    useValue: M._Z.useSetting,
    setValue: function (e) {
        let t = M._Z.getSetting();
        M._Z.updateSetting(e);
        let i = (0, xr.g8)(t, e);
        if (null == i) return;
        let s = (0, xr.Xc)(e);
        (0, sI.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("341996")]).then(
                n.bind(n, 32167),
            );
            return (t) =>
                (0, S.jsx)(e, { ...t, direction: i.direction, affectedGuildIds: i.affectedGuildIds, settingName: s });
        });
    },
});
var xo = n(498642),
    xu = n(573435),
    xd = n(260509),
    xc = n(771810);
function xg(e) {
    let { guild: t, size: n } = e,
        i = (0, xd.Iv)(t, n, !1, !0),
        s = (0, xd.Rb)(t);
    return null != i
        ? (0, S.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, S.jsx)("div", {
              className: xc.F,
              children: (0, S.jsx)(Q.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: s,
              }),
          });
}
function xm(e) {
    let { guild: t, size: n } = e;
    return (0, S.jsx)(xu.Ay, {
        className: xc.z,
        mask: xu.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, S.jsx)(xg, { guild: t, size: n }),
    });
}
var xA =
    (((c = {}).SERVER_ORDER = "server-order"),
    (c.RECENTLY_JOINED = "recently-joined"),
    (c.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (c.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    c);
let xE = {
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
var xh = n(618118);
function xx(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        s = (0, f.bG)([xo.A], () => xo.A.getMemberCount(t.id));
    return (0, S.jsxs)(Z.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, S.jsx)("div", { className: xh.FO, children: (0, S.jsx)(xm, { guild: t, size: 48 }) }),
            (0, S.jsx)("div", {
                className: xh.QH,
                children: (0, S.jsx)(t8.d, {
                    label: t.name,
                    description: U.intl.format(U.t.zRl6XR, { count: s ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let xp = function (e) {
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
                s = (0, f.bG)([gy.Ay], () => gy.Ay.getFlattenedGuildIds()),
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
                [g, m] = (0, T.useState)(() => xE[n](r, a)),
                A = g.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(xE[e](r, a)), i(e));
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
                { id: xA.SERVER_ORDER, label: U.intl.string(U.t.STMPJ2), value: xA.SERVER_ORDER },
                { id: xA.RECENTLY_JOINED, label: U.intl.string(U.t.CbaapP), value: xA.RECENTLY_JOINED },
                { id: xA.ACTIVITY_SHARING_ON, label: U.intl.string(xe.default.ZI51JZ), value: xA.ACTIVITY_SHARING_ON },
                {
                    id: xA.ACTIVITY_SHARING_OFF,
                    label: U.intl.string(xe.default["+kxafn"]),
                    value: xA.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        h = E.find((e) => e.value === l)?.label ?? "";
    return (0, S.jsxs)("div", {
        className: xh.iE,
        children: [
            t,
            (0, S.jsxs)("div", {
                className: xh.N1,
                children: [
                    (0, S.jsx)(hD.I, {
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
                        (0, S.jsxs)("div", {
                            className: xh.gO,
                            children: [
                                (0, S.jsx)(ap.Y, {
                                    targetElementRef: A,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, S.jsx)(gP.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": U.intl.string(U.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, S.jsx)(tn.rX, {
                                                children: E.map((e) => {
                                                    let { id: t, label: n, value: i } = e;
                                                    return (0, S.jsx)(
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
                                        (0, S.jsxs)(n9.D, {
                                            ...e,
                                            innerRef: A,
                                            className: xh.Ku,
                                            children: [
                                                (0, S.jsx)(Q.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: h,
                                                }),
                                                (0, S.jsx)(g7.a, { size: "xs", color: n6.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, S.jsx)(hR.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? U.intl.string(U.t["7lxcLO"]) : U.intl.string(U.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, S.jsx)(sh.A, {
                "aria-live": "polite",
                role: "region",
                children: U.intl.format(xe.default.EvzDff, { count: n.length }),
            }),
            (0, S.jsxs)("ul", {
                className: xh.X1,
                id: m,
                "aria-label": U.intl.string(U.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, S.jsx)("div", {
                            className: xh.pb,
                            children: (0, S.jsx)(Q.E, {
                                className: xh.R$,
                                variant: "text-lg/medium",
                                children: U.intl.string(U.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, S.jsx)(
                            xx,
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
let xT = (0, E.E2)(h.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [U.intl.string(xe.default["/LHVbt"])],
        Component: function () {
            let e = M.tz.useSetting()
                ? null
                : (0, S.jsx)("div", {
                      className: xS.l,
                      children: (0, S.jsx)(i$.w, {
                          type: "warning",
                          message: U.intl.string(xe.default["xxI0/W"]),
                          role: "status",
                      }),
                  });
            return (0, S.jsx)(xp, { notice: e });
        },
    }),
    xf = (0, E.zZ)(h.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => U.intl.string(U.t.bwqjL9),
        buildLayout: () => [xa, xT, xl],
    }),
    xI = (0, E.zD)(h.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => U.intl.string(xe.default.khuuzv),
        useSubtitle: () => U.intl.string(xe.default["8EWsJ8"]),
        useValue: () => M.e.useSetting(),
        setValue: (e) => M.e.updateSetting(e),
    }),
    x_ = (0, E.E2)(h.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, S.jsx)(Q.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: U.intl.format(U.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, S.jsx)(
                            Q.E,
                            { tag: "span", variant: "text-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
    }),
    xN = (0, E.zD)(h.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => U.intl.string(xe.default.Uz5Ipi),
        useSubtitle: () => U.intl.string(xe.default.CZI2Gb),
        useValue: () => M.UM.useSetting(),
        setValue: (e) => M.UM.updateSetting(e),
    }),
    xC = (0, E.zZ)(h.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => U.intl.string(xe.default["89YBr5"]),
        useSubtitle: () => U.intl.string(U.t.uGDpgH),
        buildLayout: () => [xI, xN, x_],
        useSearchTerms: () => [U.intl.string(U.t.VOszPA)],
    }),
    xy = (0, E.t_)(h.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => U.intl.string(U.t.Cq98yL),
        buildLayout: () => [xi, xf, xC],
    }),
    xb = (0, E.i4)(h.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.Cq98yL),
        icon: hQ._,
        buildLayout: () => [xy],
    });
var xv = n(712440),
    xj = n(370997);
let xO = (0, E.E2)(h.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: xj.Ay,
    useSearchTerms: () => [U.intl.string(U.t["f6kk+r"])],
});
var xL = n(478016),
    xR = n(77468),
    xD = n(289498),
    xP = n(573648),
    xG = n(874490),
    xM = n(370480),
    xU = n(968309);
let xV = new Set([I.fg2.XBOX, I.fg2.PLAYSTATION, I.fg2.PLAYSTATION_STAGING, I.fg2.CRUNCHYROLL]);
var xk = n(169869),
    xw = n(814925),
    xF = n(733110),
    xB = n(479785),
    xz = n(757036),
    xY = n(555837),
    xX = n(43990),
    xH = n(241524),
    xW = n(51965),
    xK = n(377368),
    xZ = n(631368),
    xq = n(212739),
    xQ = n(30370),
    x$ = n(181666),
    xJ = n(553875),
    x0 = n(660594);
function x1() {
    let e,
        t,
        i,
        s,
        { variant: l, showFooter: r } =
            ((e = (0, xZ.$)()),
            (t = (0, xq.O)()),
            (s = null != (i = (0, f.bG)([xQ.A], () => xQ.A.getAccount(null, I.fg2.XBOX))) && !i.revoked),
            e === xZ.C.NONE || t
                ? { variant: xZ.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === xZ.C.NO_ACCESS && !s }),
        { analyticsLocations: a } = (0, ez.Ay)(tw.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, xK.yW)(a),
        u = (0, xH.A)("(max-width: 485px)");
    if (l === xZ.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (l) {
        case xZ.C.HAS_ACCESS:
        case xZ.C.BLOCK_CLAIM:
            ((c = U.intl.string(xJ.default["7PdsMK"])),
                (g = (0, S.jsx)(xW.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: U.intl.string(xJ.default.CubeLC),
                    onClick: () => {
                        (0, sI.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("878140"), n.e("813088")]).then(
                                n.bind(n, 347171),
                            );
                            return (t) => (0, S.jsx)(e, { ...t, sourceAnalyticsLocations: a });
                        });
                    },
                })));
            break;
        case xZ.C.NO_ACCESS:
            ((c = U.intl.string(xJ.default.NwkRTZ)),
                (g = (0, S.jsx)(tX.A, {
                    defaultTextOverride: U.intl.string(xJ.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    subscriptionTier: tJ.pe.TIER_2,
                })));
            break;
        default:
            (0, ig.xb)(l);
    }
    return (0, S.jsxs)(ez.f5, {
        value: a,
        children: [
            (0, S.jsxs)("div", {
                className: x0.bV,
                children: [
                    (0, S.jsx)(N.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: U.intl.string(U.t.NG1e6l),
                    }),
                    (0, S.jsx)(ad.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, S.jsx)(xX.N, {
                theme: I.NJ8.DARK,
                children: (e) =>
                    (0, S.jsx)("div", {
                        className: e,
                        children: (0, S.jsxs)("div", {
                            className: x0.Nr,
                            children: [
                                (0, S.jsxs)("div", {
                                    className: x0.Tp,
                                    children: [
                                        (0, S.jsx)("div", {
                                            className: x0.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, S.jsx)("div", { className: x0.$h }),
                                        (0, S.jsx)("div", { className: x0.Rv }),
                                        (0, S.jsx)("div", { className: x0.Lw }),
                                    ],
                                }),
                                (0, S.jsxs)("div", {
                                    className: x0.Mn,
                                    children: [
                                        (0, S.jsxs)("div", {
                                            className: x0.mY,
                                            children: [
                                                (0, S.jsx)("img", {
                                                    className: x0.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, S.jsx)(Q.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: x0.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, S.jsx)("div", { className: x0.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, S.jsxs)(S.Fragment, {
                                        children: [
                                            (0, S.jsx)("div", { className: x0.yF }),
                                            (0, S.jsxs)("div", {
                                                className: x0.sQ,
                                                children: [
                                                    (0, S.jsx)(uN.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: n6.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, S.jsx)(Q.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: U.intl.format(x$.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(xK.Hx.CONNECT),
                                                                    (0, xU.A)({
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
var x2 = n(201718),
    x3 = n(321078),
    x5 = n(672130),
    x4 = n(379848),
    x6 = n(688901);
function x8(e) {
    let { markAsDismissed: t } = e;
    return (
        T.useEffect(() => t(mU.i.AUTO_DISMISS), [t]),
        (0, S.jsx)("div", { className: x6.Ad, children: (0, S.jsx)(m2.E, { type: "new", variant: "primary" }) })
    );
}
function x7(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: s, onClick: l } = e;
    return (0, S.jsxs)("div", {
        className: x6.kL,
        children: [
            i,
            (0, S.jsxs)("div", {
                className: x6.FS,
                children: [
                    (0, S.jsxs)("div", {
                        className: x6.TK,
                        children: [
                            (0, S.jsx)(x4.Ay, {
                                contentTypes: [s],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === s ? (0, S.jsx)(x8, { markAsDismissed: n }) : null;
                                },
                            }),
                            (0, S.jsx)(Q.E, { variant: "text-md/semibold", children: t }),
                        ],
                    }),
                    (0, S.jsx)(Q.E, { variant: "text-xs/normal", children: n }),
                ],
            }),
            (0, S.jsx)(v.$, { text: U.intl.string(U.t.vD60Pv), onClick: l }),
        ],
    });
}
function x9() {
    let e = eC.A.getArticleURL(I.MVz.PS_CONNECTION);
    return (0, S.jsx)(x7, {
        title: U.intl.string(U.t.v20wwm),
        body: U.intl.format(U.t.lTZBit, { help_article: e }),
        img: (0, S.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eA.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, xU.A)({ platformType: I.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let pe = "/assets/9df988a227916145.png";
function pt() {
    return (0, S.jsx)(x7, {
        title: U.intl.string(x$.default["9cLtDI"]),
        body: U.intl.format(x$.default["D+kUbg"], { learnMoreLink: eC.A.getArticleURL(I.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, S.jsx)("img", { src: pe, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eA.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, xU.A)({ platformType: I.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function pn() {
    let e = eC.A.getArticleURL(I.MVz.XBOX_CONNECTION);
    return (0, S.jsx)(x7, {
        title: U.intl.string(U.t["2okkZV"]),
        body: U.intl.format(U.t.OnERSS, { help_article: e }),
        img: (0, S.jsx)("img", { src: pe, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eA.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, xU.A)({ platformType: I.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var pi = n(783419),
    ps = n(534952),
    pl = n(211180),
    pr = n(247259);
function pa(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, f.cf)(
            [xQ.A],
            () => ({
                isJoining: xQ.A.isJoining(n.id),
                joinErrorMessage:
                    "" === xQ.A.joinErrorMessage(n.id) ? U.intl.string(U.t.j2d6Km) : xQ.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== xQ.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, f.bG)([sL.A], () => sL.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, S.jsx)(v.$, {
                size: "sm",
                onClick: function () {
                    xR.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? U.intl.string(U.t.RXvQQu) : U.intl.string(U.t.XpeFYr),
            })),
        (0, S.jsxs)("div", {
            className: pr.iA,
            children: [
                (0, S.jsxs)("div", {
                    className: pr.XX,
                    children: [
                        (0, S.jsx)(gV.Ay, { size: gV.Ay.Sizes.SMALL, guild: n.guild, className: pr.$f }),
                        (0, S.jsxs)("div", {
                            className: pr.Vn,
                            children: [
                                (0, S.jsx)(Q.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, S.jsx)(nc.Anchor, {
                                    href: xP.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, S.jsx)(Q.E, {
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
                    (0, S.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: pr.R,
                        children: s,
                    }),
            ],
        })
    );
}
function po(e) {
    var t;
    let n,
        i,
        { account: s } = e,
        l = ((t = s.id), (n = (0, xY.G)()), (i = (0, xz.L)(tJ.PremiumTypes.TIER_2)), !n && !i && !/^\d+$/.test(t));
    return s.type === I.fg2.XBOX && l
        ? (0, S.jsx)(pt, {})
        : s.twoWayLink
          ? null
          : s.type === I.fg2.XBOX
            ? (0, S.jsx)(pn, {})
            : s.type === I.fg2.PLAYSTATION
              ? (0, S.jsx)(x9, {})
              : null;
}
function pu(e) {
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
        [p, f] = T.useState(u.showActivity),
        [_, N] = T.useState(null),
        [C, y] = T.useState(null),
        [b, j] = T.useState(!1),
        [O, L] = T.useState([]),
        R = (0, xG.ML)(u.type),
        D = xP.A.get(R);
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
            (null != e && (E(e), xR.A.setVisibility(u.type, u.id, e), N(null)),
                null != t && (x(t), xR.A.setMetadataVisibility(u.type, u.id, t), y(null)));
        }, [u]),
        (0, S.jsxs)("div", {
            className: pr.FI,
            children: [
                ((t = xP.A.get(u.type)),
                (n = xP.A.get(R)),
                (i = "1" === (u.metadata ?? {})[pi.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === I.fg2.TWITTER &&
                    i &&
                    (s = (0, S.jsx)(sE.m, {
                        text: U.intl.string(U.t.Jebrww),
                        children: (0, S.jsx)(xw.A, {
                            color: n6.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, S.jsx)(xL.U, { size: "xs", color: n6.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, S.jsxs)("div", {
                    className: pr.Il,
                    children: [
                        (0, S.jsx)("img", {
                            alt: n.name,
                            className: pr.gj,
                            src: (0, cR.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, S.jsxs)("div", {
                            children: [
                                (0, S.jsxs)("div", {
                                    className: pr.$p,
                                    children: [
                                        (0, S.jsx)(Q.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: pr.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, S.jsx)("div", { className: pr.cG, children: s }),
                                    ],
                                }),
                                (0, S.jsx)(Q.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: pr.Au,
                                    children: n.migrationData?.getMigrationExperimentEnabled(
                                        "User Settings Connections Web",
                                    )
                                        ? U.intl.format(pl.default.Glhokn, { platformName: n.name })
                                        : n.name,
                                }),
                            ],
                        }),
                        (0, S.jsx)(n9.D, {
                            className: pr.uH,
                            onClick: function () {
                                let e = xP.A.get(u.type);
                                (0, sI.openModal)((t) =>
                                    (0, S.jsx)(sf.a, {
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
                                            xV.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, S.jsx)(ln.A, {
                                                children: U.intl.format(U.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": U.intl.string(U.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, S.jsx)(uz.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, S.jsx)(po, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, xM.An)(t[pi.pK.CREATED_AT], c);
                    switch (e.type) {
                        case I.fg2.REDDIT:
                            n = (0, xk.xE)(t, pr.Nz);
                            break;
                        case I.fg2.STEAM:
                            n = (0, xk.dy)(t, pr.Nz);
                            break;
                        case I.fg2.BLUESKY:
                        case I.fg2.TWITTER:
                        case I.fg2.MASTODON:
                            n = (0, xk.ED)(t, pr.Nz);
                            break;
                        case I.fg2.EBAY:
                            n = (0, xk.ub)(t, pr.Nz);
                            break;
                        case I.fg2.PAYPAL:
                            n = (0, xk.gZ)(t, pr.Nz);
                            break;
                        case I.fg2.TIKTOK:
                            n = (0, xk.HU)(t, pr.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, S.jsx)(
                                Q.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: pr.M4,
                                    children: U.intl.format(U.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = O.includes(e.id),
                        l = U.intl.string(U.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== xP.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, S.jsx)(
                                    "div",
                                    {
                                        className: pr.Z3,
                                        children: (0, S.jsx)(m2.E, { type: "new", variant: "primary" }),
                                    },
                                    "badge",
                                ),
                                (0, S.jsx)(
                                    Q.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: pr.vt,
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
                            (0, S.jsx)(
                                "div",
                                {
                                    className: pr.jy,
                                    children: (0, S.jsx)(v.$, {
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
                                                      xR.A.refresh(e.type, e.id).finally(() => {
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
                        (0, S.jsx)("div", { className: pr.tJ, children: n })
                    );
                })(u),
                (I.txh.has(u.type) &&
                    (l = (0, S.jsx)(t8.d, {
                        label: U.intl.string(U.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), xR.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                I.ewM.has(u.type) &&
                    (r = (0, S.jsx)(t8.d, {
                        label: U.intl.format(U.t["6u6J0q"], { platform: D.name }),
                        checked: p,
                        onChange: function (e) {
                            (f(e), xR.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                xP.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, S.jsx)(t8.d, {
                        label: U.intl.string(U.t.FYKGsL),
                        checked: 1 === h,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (y(n), (0, xU.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (x(n), xR.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, S.jsxs)("div", {
                    className: pr.HZ,
                    children: [
                        (0, S.jsx)(t8.d, {
                            label: U.intl.string(U.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (N(n), (0, xU.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (E(n), xR.A.setVisibility(u.type, u.id, n));
                            },
                        }),
                        a,
                        r,
                        l,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, S.jsx)(su.c, {});
                })(),
                u.revoked
                    ? (0, S.jsx)(i$.w, {
                          type: "info",
                          message: U.intl.format(U.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, xU.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                          role: "static",
                      })
                    : u.integrations.length > 0
                      ? (0, S.jsx)(t6.D, {
                            label: U.intl.string(U.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, S.jsx)(pa, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, S.jsx)(xB.A, { partner: u.type }),
            ],
        })
    );
}
function pd(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, S.jsxs)("div", {
              className: pr.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = G.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, S.jsxs)("div", {
                          className: pr.Il,
                          children: [
                              (0, S.jsx)("img", { alt: n.name, className: iE()(pr.gj, pr.sN), src: i }),
                              (0, S.jsxs)("div", {
                                  children: [
                                      (0, S.jsx)("div", {
                                          className: pr.$p,
                                          children: (0, S.jsx)(Q.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: pr.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, S.jsx)(Q.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: pr.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, S.jsx)(n9.D, {
                                  className: pr.uH,
                                  onClick: () =>
                                      (0, xj.d1)(n, t.scopes, () => {
                                          xv.A.delete(t.id);
                                      }),
                                  "aria-label": U.intl.string(U.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, S.jsx)(uz.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, S.jsx)("div", {
                      className: pr.HZ,
                      children: (0, S.jsx)(t8.d, {
                          label: U.intl.string(U.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              x2.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function pc() {
    let e = (0, xG.gn)(),
        t = (0, i8.A)((0, ps.getMigratedApplicationIdentityConnectionsScreenApplications)("NewConnectionsList"));
    return (0, S.jsxs)("div", {
        className: pr.lA,
        children: [
            t.map((e) => null != e && (0, S.jsx)(x5.A, { application: e, innerClassName: pr.U$ }, e.id)),
            e.map((e) =>
                (0, S.jsx)(
                    xD.A,
                    { type: e.type, innerClassName: pr.U$, location: tw.A.USER_SETTINGS_CONNECTIONS },
                    e.type,
                ),
            ),
        ],
    });
}
function pg(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        o = T.useMemo(() => i.filter((e) => xP.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, S.jsx)(oC.y, { type: oC.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === s.length
              ? (0, S.jsx)(EZ.pp, {
                    theme: r,
                    className: pr.p$,
                    children: (0, S.jsx)(EZ.SG, {
                        note: U.intl.string(U.t.WenGZ2),
                        children: U.intl.string(U.t.aoLS84),
                    }),
                })
              : (0, S.jsxs)(S.Fragment, {
                    children: [
                        (0, S.jsx)(N.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: U.intl.format(U.t.AioIGb, { count: s.length + o.length }),
                        }),
                        s.map((e, t) =>
                            (0, S.jsx)(
                                pd,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, S.jsx)(
                                pu,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            xR.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, S.jsx)("div", { className: pr.V, children: t })
    );
}
let pm = (0, E.E2)(h.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, S.jsx)(t6.D, { label: U.intl.string(U.t["t+aGse"]), children: (0, S.jsx)(pc, {}) });
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
    pA = (0, E.E2)(h.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, f.bG)([tu.A], () => tu.A.hidePersonalInformation),
                t = (0, f.bG)([xQ.A], () => xQ.A.isFetching()),
                n = (0, f.bG)([xQ.A], () => xQ.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: s } = (0, f.cf)([xF.default], () => ({
                    authorizedAppsFetchState: xF.default.getFetchState(),
                    authorizedApps: xF.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, x3.A)(lf.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, cn.Ay)(),
                o = (0, f.bG)([ut.default], () => ut.default.locale);
            return (T.useEffect(() => {
                i === xF.FetchState.NOT_FETCHED && xv.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsx)(x1, {}),
                          (0, S.jsx)(pg, {
                              fetching: t || l || (r.length > 0 && i !== xF.FetchState.FETCHED),
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
            xR.A.fetch();
        },
        useSearchTerms: () => [
            U.intl.string(U.t["+/hZM/"]),
            U.intl.string(U.t.bsbMVz),
            U.intl.string(U.t.f7yOAX),
            U.intl.string(U.t.FYKGsL),
            U.intl.string(U.t["+KCMSi"]),
        ],
    }),
    pE = (0, E.zZ)(h.X.CONNECTIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["3fe7U5"]),
        useSubtitle: () => U.intl.string(U.t.U22vw6),
        useInlineNotice: function () {
            let e = (0, f.bG)([xQ.A], () => xQ.A.getAccounts()),
                t = T.useMemo(
                    () =>
                        xP.A.filter(
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
                        ? U.intl.string(pl.default["1S6oAo"])
                        : o?.name,
                m = null != a && c,
                A = m && !d && u && o?.connectionEntrypointUrl != null;
            return (
                r || !m || A || i((e) => e + 1),
                T.useMemo(
                    () =>
                        A
                            ? {
                                  type: p.lT.INLINE_NOTICE,
                                  noticeType: "info",
                                  text: U.intl.format(pl.default.wUXupS, {
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
        buildLayout: () => [pm, pA],
    }),
    ph = (0, E.zZ)(h.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["f6kk+r"]),
        useSubtitle: () => U.intl.string(U.t.G9JfLg),
        buildLayout: () => [xO],
        initialize: () => (
            xv.A.fetch(),
            () => {
                xj.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    px = (0, E.t_)(h.X.CONNECTED_APPS_PANEL, {
        useTitle: () => U.intl.string(U.t.lrVuZO),
        useObscuredNotice: oh.L,
        buildLayout: () => [pE, ph],
    }),
    pp = (0, E.i4)(h.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.lrVuZO),
        icon: Eq.LinkIcon,
        buildLayout: () => [px],
    });
var pS = n(625657),
    pT = n(592598),
    pf = n(773371),
    pI = n(532294),
    p_ = n(672396);
let pN = py(null);
function pC() {
    var e;
    let t = py(pN);
    ((e = pN),
        W().isEqual(W().omit(t, "old_enabled"), W().omit(e, "old_enabled")) ||
            (td.default.track(I.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (pN = t)));
}
function py(e) {
    let t = pI.default.getNotificationPositionMode(),
        n = t !== I.G6Q.DISABLED,
        i = sc.Ay.getOverlayKeybind(),
        s = sc.Ay.getOverlayChatKeybind();
    return {
        enabled: pf.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: pT.A.isNotificationDisabled(p_.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, sT.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, sT.dI)(s.shortcut) : null,
        text_opacity_slider: pI.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? pf.default.enabled,
    };
}
var pb = n(237984),
    pv = n(63035);
function pj(e) {
    (e.preventDefault(), e.stopPropagation());
}
function pO(e) {
    let { children: t } = e;
    return (0, S.jsx)("div", { onClick: pj, children: t });
}
function pL(e) {
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
    return (0, S.jsxs)("div", {
        className: iE()(pv.HS, d),
        children: [
            (0, S.jsxs)(hP.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, S.jsx)("div", { className: pv.x_, children: t }),
                    (0, S.jsxs)("div", {
                        className: pv.rN,
                        children: [
                            null != n && (0, S.jsx)("div", { className: pv.$t, children: n }),
                            (0, S.jsxs)("div", {
                                className: pv.c8,
                                children: [
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: pv.SZ,
                                        children: i,
                                    }),
                                    null != s &&
                                        (0, S.jsx)(Q.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: s,
                                        }),
                                    null != r &&
                                        (0, S.jsx)(Q.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, S.jsx)("div", { className: pv.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, S.jsx)("div", { className: pv.Om, children: a }),
        ],
    });
}
let pR = (0, E.E2)(h.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, S.jsx)(pL, {
            title: U.intl.string(U.t["z4/l+V"]),
            description: U.intl.string(U.t["3aZq/0"]),
            action: (0, S.jsx)(v.$, {
                variant: "primary",
                text: U.intl.string(U.t.s2nVhG),
                onClick: () => {
                    (0, pb.b)(tw.A.USER_SETTINGS, I.BRT.APP);
                },
            }),
            "aria-label": U.intl.string(U.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [U.intl.string(U.t["z4/l+V"])],
});
var pD = n(780907),
    pP = n(684013),
    pG = n(56562),
    pM = n(311043),
    pU = n(569926),
    pV = n(41984),
    pk = n(918825),
    pw = n(296027),
    pF = n(562519);
let pB = 5 * n(927813).A.Millis.DAY,
    pz = new pF.A("overlay_survey_timestamps");
function pY(e, t) {
    let i, s;
    ((i = Date.now()),
        (null != (s = Array.from(pz.values()).reduce((e, t) => Math.max(e, t), 0)) && i - s < pB) ||
            Array.from(pz.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, sI.openModalLazy)(async () => {
                let i,
                    { default: s } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return ((i = Date.now()), pz.add(i), (n) => (0, S.jsx)(s, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function pX() {
    (0, ss.sL)("overlay-settings");
}
function pH(e) {
    let { className: t, game: n } = e;
    return (0, ss.NP)() && null != n && n.elevated
        ? (0, S.jsx)("div", {
              className: t,
              children: (0, S.jsx)(i$.w, {
                  type: "warning",
                  message: U.intl.format(U.t["LJzl+0"], { helpCenterLink: eC.A.getArticleURL(I.MVz.SYSTEM_SERVICE) }),
                  role: "status",
                  action: { text: U.intl.string(U.t["1iI46O"]), onClick: pX },
              }),
          })
        : null;
}
var pW = n(760751),
    pK = n(9302),
    pZ = n(656513);
let pq = new Set([
    pV.AR.INITIALIZING,
    pV.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    pV.AR.WAITING_FOR_MODULE_TRACKING,
    pV.AR.WAITING_FOR_OVERLAY_OPEN,
    pV.AR.WAITING_FOR_POPOUT_OPEN,
    pV.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    pV.AR.WAITING_FOR_REACT_INITIALIZATION,
    pV.AR.WAITING_FOR_PID_FOCUS,
    pV.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function pQ(e) {
    let { children: t, className: n, onExpand: i, ...s } = e,
        [l, r] = T.useState(!1);
    return (0, S.jsx)(pZ.N, {
        className: pv.uR,
        collapsibleContent: (0, S.jsx)("div", { className: pv.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, S.jsx)(pL, {
                ...s,
                onClick: (e) => {
                    var n;
                    (r((n = !l)), i?.(n), t?.(e));
                },
                className: iE()(pv.AC, n),
                action: (0, S.jsxs)("div", {
                    className: pv.rc,
                    children: [
                        s.action,
                        l
                            ? (0, S.jsx)(g7.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, S.jsx)(it._, {
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
let p$ = (0, E.E2)(h.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = st();
        (0, pU.I)(e?.id);
        let n = e?.pid,
            i = (0, f.bG)(
                [pw.default],
                () => (null == e || null == n ? null : pw.default.getTrackedGameByPid(n)),
                [e, n],
                i4(),
            ),
            { data: s } = (0, pU.I)(i?.gameId),
            { enabledLegacy: l, enabledOOP: r } = (0, f.cf)(
                [pW.A, tg.A, pM.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, i9.hw)(e, !1, [pW.A, tg.A, pM.A]),
                [e, i],
            ),
            a = (0, f.bG)(
                [i9.Ay, pW.A, tg.A, pM.A],
                () => (null == e ? null : (0, i9.xU)(e, i9.Ay, pW.A, tg.A, pM.A)),
                [e],
                i4(),
            ),
            [o, u] = T.useState(r),
            [d, c] = T.useState(l),
            [g, m] = T.useState(!1);
        T.useEffect(() => {
            (u(r), c(l));
        }, [r, l]);
        let A = !(0, pK.supportsLegacy)(),
            E = !(0, pK.supportsOutOfProcess)(),
            { legacyEnabled: h, oopEnabled: x } = (0, f.cf)([pw.default], () => pw.default.getGlobalEnabledStatus());
        function p(t, n) {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case pk.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), pD.Ay.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case pk.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), pD.Ay.toggleOverlay(e, d, t), (s = !t && o));
                    break;
                case pk.OverlayToggledClientSettingType.LEGACY:
                    (pP.A.setEnabled(t, x), (0, pk.Q)(t, pk.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case pk.OverlayToggledClientSettingType.OOP:
                    (pP.A.setEnabled(h, t), (0, pk.Q)(t, pk.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || s) &&
                pY(
                    i ? pk.OverlayToggledClientSettingType.LEGACY_GAME : pk.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let I = A && E,
            _ = !h && !x,
            N = !o && !h && d && !A,
            C = !d && !x && o && !E,
            y = i?.overlayMethod === pV.Ue.Disabled,
            b = i?.state === pV.AR.OVERLAY_RENDERING && !y,
            v = i?.state != null && pq.has(i.state) && !y,
            j = i?.overlayMethod === pV.Ue.OutOfProcess,
            O = i?.overlayMethod === pV.Ue.OutOfProcessLimitedInteraction,
            L = i?.overlayMethod === pV.Ue.Hook,
            R = i?.state === pV.AR.OVERLAY_CRASHED || i?.state === pV.AR.OVERLAY_CRASHED_DISABLED,
            D = !o && !d,
            [P, G] = (function () {
                switch (!0) {
                    case b && j:
                        return [
                            U.intl.format(U.t.hFVBIg, {
                                overlayMethod: U.intl.string(U.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, S.jsx)(
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
                                    return (0, S.jsx)(
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
                                    return (0, S.jsx)(
                                        Q.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case i?.fullscreenType !== pG.aI.BORDERLESS_FULLSCREEN:
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
                        let e = i?.fullscreenType === pG.aI.FULLSCREEN ? U.intl.string(U.t.mJmbeC) : null;
                        return [U.intl.string(U.t.VPW4XY), e];
                    }
                    default:
                        return [U.intl.string(U.t.ONovP5), null];
                }
            })();
        (0, eI.Ay)(() => {
            pD.Ay.getDetectableGames();
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
            : (0, S.jsxs)(pQ, {
                  onExpand: m,
                  className: g ? pv.tx : void 0,
                  title: (0, S.jsxs)(S.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, S.jsx)(sE.m, {
                                    text: U.intl.string(U.t["4PJP5p"]),
                                    children: (0, S.jsx)(xw.A, {
                                        size: 16,
                                        color: n6.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, S.jsx)(xL.U, {
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
                  header: (0, S.jsxs)(S.Fragment, {
                      children: [
                          b || v
                              ? (0, S.jsx)(dE.k, { size: "xxs", color: V })
                              : (0, S.jsx)("div", { className: pv.W4 }),
                          (0, S.jsx)(Q.E, {
                              variant: "text-xs/semibold",
                              color: M,
                              children: U.intl.string(U.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, S.jsx)(sn.A, { game: t, pid: e?.pid, size: sn.M.MEDIUM }),
                  "aria-label": U.intl.string(U.t["87O5GC"]),
                  action: (0, S.jsx)(pO, {
                      children: (0, S.jsx)(t8.d, {
                          checked: (o && x) || (d && h),
                          disabled: I,
                          onChange: (t) => {
                              !(function (t, n) {
                                  if (null == e) return;
                                  let i = !1,
                                      s = !1;
                                  switch (n) {
                                      case "game":
                                          (pD.Ay.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (s = !t && o));
                                          break;
                                      case "global":
                                          (pP.A.setEnabled(t, t), (i = !t && h), (s = !t && x));
                                          break;
                                      case "both":
                                          (pP.A.setEnabled(t, t),
                                              pD.Ay.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && h) || (!t && d)),
                                              (s = (!t && x) || (!t && o)));
                                  }
                                  let l = null;
                                  (i
                                      ? (l =
                                            "game" === n
                                                ? pk.OverlayToggledClientSettingType.LEGACY_GAME
                                                : pk.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === n
                                                ? pk.OverlayToggledClientSettingType.OOP_GAME
                                                : pk.OverlayToggledClientSettingType.OOP),
                                      null != l && pY(l, e.id ?? null));
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
                  warning: (0, S.jsx)(pH, { className: pv.Hh, game: e }),
                  children: [
                      (0, S.jsx)(pL, {
                          title: U.intl.string(U.t["7BlVIs"]),
                          description: U.intl.string(U.t.ndgADE),
                          hint: x ? void 0 : U.intl.string(U.t.cAFVsL),
                          "aria-label": U.intl.string(U.t["7BlVIs"]),
                          action: (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(t8.d, {
                                      checked: o && x,
                                      disabled: E,
                                      onChange: (e) => {
                                          e && !x
                                              ? p(e, pk.OverlayToggledClientSettingType.OOP)
                                              : p(e, pk.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, S.jsx)("div", { className: pv.Kz }),
                              ],
                          }),
                      }),
                      (0, S.jsx)(pL, {
                          title: U.intl.string(U.t.BfFpW1),
                          description: U.intl.string(U.t.OzInYk),
                          hint: h ? void 0 : U.intl.string(U.t["3sYHXm"]),
                          "aria-label": U.intl.string(U.t.BfFpW1),
                          action: (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(t8.d, {
                                      checked: d && h,
                                      disabled: A,
                                      onChange: (e) => {
                                          e && !h
                                              ? p(e, pk.OverlayToggledClientSettingType.LEGACY)
                                              : p(e, pk.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, S.jsx)("div", { className: pv.Kz }),
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
var pJ = n(206885);
function p0(e) {
    let { game: t, gameApplication: n } = e,
        i = T.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, f.bG)([i6.A], () => (null != n ? n : i6.A.getApplication(t?.id)), [n, t]);
    return (0, S.jsx)(sn.A, { game: s, pid: i, size: sn.M.SMALL });
}
function p1(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: s,
        onChange: l,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, pU.I)(t?.id);
    let o = (0, f.cf)([i9.Ay, pW.A, tg.A, pM.A], () => (0, i9.xU)(t, i9.Ay, pW.A, tg.A, pM.A)),
        u = (0, f.cf)([pW.A, tg.A, pM.A], () => (0, i9.hw)(t, !1, [pW.A, tg.A, pM.A]), [t]),
        d = s(u),
        [c, g] = T.useState(d);
    return (
        T.useEffect(() => {
            g(d);
        }, [d]),
        (0, S.jsx)(pL, {
            title: t.name,
            icon: (0, S.jsx)(p0, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsx)(t8.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), l(e, o, u), n && pY(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, S.jsx)("div", { className: pv.Kz }),
                ],
            }),
        })
    );
}
let p2 = (0, E.E2)(h.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = T.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, f.cf)([pw.default], () =>
                    pw.default.getGlobalEnabledStatus(),
                ),
                s = (0, f.yK)([i9.Ay], () => i9.Ay.getGamesSeen(!0)).filter((e) => !(0, h$.n1)(e)),
                l = (0, i8.A)(s.map((e) => e.id)),
                r = !(0, pK.supportsLegacy)();
            function a(e) {
                pP.A.setEnabled(e, i);
                let t = i9.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, pk.Q)(e, pk.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && pY(pk.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                pD.Ay.toggleOverlay(t, e, i);
            }
            let u = T.useMemo(
                () =>
                    (0, pK.supportsLegacy)()
                        ? r
                            ? U.intl.string(U.t.r9jEVw)
                            : U.intl.string(U.t.OzInYk)
                        : U.intl.string(U.t["8Ox6/E"]),
                [r],
            );
            return 0 === s.length
                ? (0, S.jsx)(pL, {
                      title: U.intl.string(U.t.BfFpW1),
                      description: u,
                      "aria-label": U.intl.string(U.t.BfFpW1),
                      className: pv.dA,
                      action: (0, S.jsxs)(S.Fragment, {
                          children: [
                              (0, S.jsx)(t8.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              pJ.O && (0, S.jsx)("div", { className: pv.Kz }),
                          ],
                      }),
                  })
                : (0, S.jsxs)(pQ, {
                      onExpand: t,
                      className: e ? pv.tx : void 0,
                      title: U.intl.string(U.t.BfFpW1),
                      description: u,
                      "aria-label": U.intl.string(U.t.BfFpW1),
                      action: (0, S.jsx)(pO, {
                          children: (0, S.jsx)(t8.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, S.jsx)("div", {
                              className: pv.SC,
                              children: (0, S.jsx)(Q.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: U.intl.string(U.t.FzoWRo),
                              }),
                          }),
                          (0, S.jsx)(C.Ip, {
                              className: pv.XG,
                              children: s.map((e, t) =>
                                  (0, S.jsx)(
                                      p1,
                                      {
                                          rawGame: e,
                                          clientSettingType: pk.OverlayToggledClientSettingType.LEGACY_GAME,
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
    p3 = (0, E.E2)(h.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = T.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, f.cf)([pw.default], () =>
                    pw.default.getGlobalEnabledStatus(),
                ),
                s = !(0, pK.supportsOutOfProcess)(),
                l = (0, f.yK)([i9.Ay], () => i9.Ay.getGamesSeen(!0)).filter((e) => !(0, h$.n1)(e)),
                r = (0, i8.A)(l.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                pP.A.setEnabled(i, e);
                let s = i9.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, pk.Q)(e, pk.OverlayToggledClientSettingType.OOP, s),
                    t && pY(pk.OverlayToggledClientSettingType.OOP, s));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                pD.Ay.toggleOverlay(t, e, i);
            }
            let u = T.useMemo(
                () => (pJ.O ? (s ? U.intl.string(U.t.C7bLTQ) : U.intl.string(U.t.ndgADE)) : U.intl.string(U.t.m7X4az)),
                [s],
            );
            return 0 === l.length
                ? (0, S.jsx)(pL, {
                      title: U.intl.string(U.t["7BlVIs"]),
                      description: u,
                      "aria-label": U.intl.string(U.t["7BlVIs"]),
                      className: pv.dA,
                      action: (0, S.jsxs)(S.Fragment, {
                          children: [
                              (0, S.jsx)(t8.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                              pJ.O && (0, S.jsx)("div", { className: pv.Kz }),
                          ],
                      }),
                  })
                : (0, S.jsxs)(pQ, {
                      onExpand: t,
                      className: e ? pv.tx : void 0,
                      title: U.intl.string(U.t["7BlVIs"]),
                      description: u,
                      "aria-label": U.intl.string(U.t["7BlVIs"]),
                      action: (0, S.jsx)(pO, {
                          children: (0, S.jsx)(t8.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, S.jsx)("div", {
                              className: pv.SC,
                              children: (0, S.jsx)(Q.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: U.intl.string(U.t.FzoWRo),
                              }),
                          }),
                          (0, S.jsx)(C.Ip, {
                              className: pv.XG,
                              children: l.map((e, t) =>
                                  (0, S.jsx)(
                                      p1,
                                      {
                                          rawGame: e,
                                          clientSettingType: pk.OverlayToggledClientSettingType.OOP_GAME,
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
    p5 = (0, E.zZ)(h.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => U.intl.string(U.t["/dp6yY"]),
        buildLayout: () => [p$, p3, p2, pR],
    }),
    p4 = (0, E.zD)(h.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, f.bG)([pI.default], () => !pI.default.disableClickableRegions),
        setValue: (e) => {
            pP.A.setDisableClickableRegions(!e);
        },
        useTitle: () => U.intl.string(U.t["+eFXxq"]),
        useSubtitle: () => U.intl.string(U.t.kivMAp),
    }),
    p6 = (0, E.E2)(h.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, f.bG)([sc.Ay], () => sc.Ay.getOverlayKeybind()),
                t = !(0, pK.supportsLegacy)(),
                n = !(0, pK.supportsOutOfProcess)(),
                [i, s] = (0, f.yK)([i9.Ay], () => [i9.Ay.canShowAdminWarning, i9.Ay.getVisibleGame()], []),
                l = (0, ss.NP)(),
                r = null != s && s.elevated && i && !l,
                a = !(0, sc.DV)(e?.shortcut ?? []);
            return (0, S.jsx)("div", {
                className: pv.hc,
                children: (0, S.jsxs)("div", {
                    className: pv.eH,
                    children: [
                        (0, S.jsxs)("div", {
                            className: pv.Bu,
                            children: [
                                (0, S.jsx)(Q.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: U.intl.string(U.t.VsAZcC),
                                }),
                                r &&
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: pv.y7,
                                        children: U.intl.string(U.t.NsowVa),
                                    }),
                                a &&
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: pv.y7,
                                        children: U.intl.string(U.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, S.jsx)("div", {
                            className: pv.IH,
                            children: (0, S.jsx)(sS.A, {
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
var p8 = n(515183),
    p7 = n(682763);
let p9 = (0, E.zD)(h.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = st();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = st();
            return null != e && (0, p8.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = st(),
                n = t?.id,
                i = (0, f.bG)([pT.A], () => pT.A.isLimitedInteractionOverrideEnabled(n)),
                s = null != e && (0, p8.qJ)(e.pid);
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
            null != l && (0, p7.x8)(l.id, e);
        },
        useTitle: () => U.intl.string(U.t.wgVQND),
        useSubtitle: () => U.intl.string(U.t["5SsyF5"]),
    }),
    Se = (0, E.zZ)(h.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [p6, p9, p4] });
var St = n(93465),
    Sn = n(222407);
let Si = [
    {
        title: U.t.eVE4LX,
        description: U.t["72WNqk"],
        disabledSetting: St.M.TEXT_CHAT,
        key: h.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: U.t.oifnSh,
        description: U.t.bgU5r0,
        disabledSetting: St.M.WELCOME_GENERAL,
        key: h.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: U.t.hqsZJW,
        description: U.t.kHjdqc,
        disabledSetting: St.M.GO_LIVE_NUDGE,
        key: h.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: U.t.sop3rn,
        description: U.t.pjgffc,
        disabledSetting: St.M.GAME_ACTIVITY,
        key: h.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: U.t["2QVhbb"],
        description: U.t.wQ4ilB,
        disabledSetting: St.M.NOW_PLAYING,
        key: h.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: U.t.giM9fA,
        description: U.t.EhAfWj,
        disabledSetting: St.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: h.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, nC.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, f.bG)([pT.A], () => pT.A.isNotificationDisabledBySetting(St.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function Ss(e) {
    return (0, E.zD)(e.key, {
        useTitle: () => U.intl.string(e.title),
        useSubtitle: () => U.intl.string(e.description),
        useValue: () => !(0, f.bG)([pT.A], () => pT.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            (0, Sn.I)(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let Sl = (0, E.FW)(h.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => Si.map(Ss),
    }),
    Sr = (0, E.zZ)(h.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.xOE5bA),
        buildLayout: () => [Sl],
    }),
    Sa = (0, E.Hn)(h.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => U.intl.string(U.t.dnvZSg),
        useValue: () => (0, f.bG)([pI.default], () => pI.default.getAvatarSizeMode()),
        setValue: (e) => {
            pP.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: U.intl.string(U.t.YcOxtr), value: I.OSZ.LARGE },
            { id: "small", label: U.intl.string(U.t.BKIKqx), value: I.OSZ.SMALL },
        ],
    }),
    So = (0, E.Hn)(h.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => U.intl.string(U.t.J0dpcB),
        useValue: () => (0, f.bG)([pI.default], () => pI.default.getDisplayNameMode()),
        setValue: (e) => {
            pP.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: U.intl.string(U.t.nBmDrT), value: I.pwA.ALWAYS },
            { id: "speaking", label: U.intl.string(U.t["2OvIZY"]), value: I.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: U.intl.string(U.t.ekjlPL), value: I.pwA.NEVER },
        ],
    }),
    Su = (0, E.Hn)(h.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => U.intl.string(U.t.swsWWC),
        useValue: () => (0, f.bG)([pI.default], () => pI.default.getDisplayUserMode()),
        setValue: (e) => {
            pP.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: U.intl.string(U.t.nBmDrT), value: I.f5z.ALWAYS },
            { id: "speaking", label: U.intl.string(U.t["2OvIZY"]), value: I.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var Sd = n(391973),
    Sc = n(233741),
    Sg = n(897720),
    Sm = n(32584);
function SA() {
    let e = Sc.A.getWidgetByType(I.uss.VOICE_V3);
    if (null == e) return null;
    let t = Sm.A.getWidget(e.id);
    return null != t && (0, Sg.ZO)(t) ? t : null;
}
n(392164);
let SE = (0, E.sN)(h.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => U.intl.string(U.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? U.intl.string(U.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = SA();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? U.intl.string(U.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = SA();
        null != t &&
            (e < 1
                ? (0, Sd.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, Sd.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var Sh = n(450740),
    Sx = n(968898),
    Sp = n(288737);
function SS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new Sp.A({
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
        user: new cH.A({ id: s, username: e }),
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
let ST = (0, E.E2)(h.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: s,
                } = (0, f.cf)([pI.default], () => ({
                    avatarSizeMode: pI.default.getAvatarSizeMode(),
                    displayNameMode: pI.default.getDisplayNameMode(),
                    displayUserMode: pI.default.getDisplayUserMode(),
                })),
                [l] = T.useState(() => [
                    SS(U.intl.string(U.t.C0ZDvo), !0, !1),
                    SS(U.intl.string(U.t.iOtj8E), !1, !1, !0),
                    SS(U.intl.string(U.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, f.bG)([Sc.A, Sm.A], () => {
                    let e = Sc.A.getWidgetByType(I.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = Sm.A.getWidget(e.id);
                    return null != t && (0, Sg.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = SS(t.username)).user = t), e) : null, ...l].filter(ig.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, S.jsx)(xX.N, {
                    theme: I.NJ8.ONYX,
                    children: (e) =>
                        (0, S.jsxs)("div", {
                            className: iE()(pv.Y5, e),
                            children: [
                                (0, S.jsx)("div", {
                                    className: pv.kJ,
                                    children: (0, S.jsx)(Sh.DH, {
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
                                (0, S.jsxs)("div", {
                                    className: pv.R$,
                                    children: [
                                        (0, S.jsx)(Sx.Pl, { children: U.intl.string(U.t.KNJ6Vq) }),
                                        (0, S.jsx)(Sx.CS, {}),
                                        (0, S.jsx)(Sx.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, S.jsx)("div", { className: pv.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    Sf = (0, E.zZ)(h.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => U.intl.string(U.t.r1TZfh),
        buildLayout: () => [ST, Sa, So, Su, SE],
    });
var SI = n(793480),
    S_ = n(667419),
    SN = n(776162),
    SC = n(114994),
    Sy = n(371169),
    Sb = n(671210);
let Sv = {
    [I.uss.VOICE_V3]: h.X.OVERLAY_WIDGETS_VOICE,
    [I.uss.QUICK_ACTIONS]: h.X.OVERLAY_WIDGETS_QUICK_ACTIONS,
    [I.uss.NOTIFICATIONS]: h.X.OVERLAY_WIDGETS_NOTIFICATIONS,
    [I.uss.TEXT_CHAT_V3]: h.X.OVERLAY_WIDGETS_CHAT,
    [I.uss.FRIENDS]: h.X.OVERLAY_WIDGETS_FRIENDS,
    [I.uss.ACTIVITY]: h.X.OVERLAY_WIDGETS_ACTIVITY,
    [I.uss.VIDEO]: h.X.OVERLAY_WIDGETS_VIDEO,
    [I.uss.GO_LIVE]: h.X.OVERLAY_WIDGETS_STREAMS,
};
function Sj(e) {
    let t = ny.A[e],
        n = Sv[e];
    if (t?.label == null || null == t.description || null == n) return [];
    let { label: i, description: s, predicate: l } = t;
    return (0, E.zD)(n, {
        useTitle: () => i(),
        useSubtitle: () => s(),
        usePredicate: () => ((0, nC.M8)("OverlayWidgetsCategory"), l?.() ?? !0),
        useValue: () => (0, f.bG)([Sm.A], () => (0, S_.$e)(e, Sm.A), []),
        setValue: (t) => {
            ((0, S_.j$)(), (0, S_.JA)(e, !t));
        },
    });
}
let SO = (0, E.FW)(h.X.OVERLAY_WIDGETS_LIST, {
        variant: "compact",
        useTitle: () => U.intl.string(Sb.default["Qk/rJB"]),
        useSubtitle: () => U.intl.string(Sb.default.HUjIgu),
        isTitleHiddenVisually: !0,
        buildLayout: () => SN.t3.flatMap(Sj),
    }),
    SL = (0, E.E2)(h.X.OVERLAY_WIDGETS_APPS, {
        Component: function () {
            let e = (0, f.bG)([SC.A], () => SC.A.getProjects());
            return (T.useEffect(() => {
                (0, Sy.hF)();
            }, []),
            0 === e.length)
                ? null
                : (0, S.jsxs)(Z.B, {
                      gap: 8,
                      children: [
                          (0, S.jsx)(N.D, {
                              variant: "heading-sm/semibold",
                              color: "text-muted",
                              children: U.intl.string(Sb.default["pbu+Yx"]),
                          }),
                          e.map((e) => (0, S.jsx)(SN.i2, { project: e }, e.id)),
                      ],
                  });
        },
        usePredicate: () => (0, SI.TW)("overlay_settings_conjure_apps"),
        useSearchTerms: () => [U.intl.string(Sb.default["pbu+Yx"])],
    }),
    SR = (0, E.Tf)(h.X.OVERLAY_WIDGETS_RESET, {
        useTitle: () => U.intl.string(U.t["hW+EMu"]),
        useLabel: () => U.intl.string(U.t.yBZMsQ),
        useVariant: () => "secondary",
        onClick: S_.eL,
    }),
    SD = (0, E.zZ)(h.X.OVERLAY_WIDGETS_CATEGORY, {
        useTitle: () => U.intl.string(Sb.default["Qk/rJB"]),
        usePredicate: nb.b_,
        buildLayout: () => [SO, SL, SR],
    });
var SP = n(54761);
function SG() {
    let [e, t] = (0, mv.kn)([eA.M.OVERLAY_OOP_SETTINGS_NUX], { bypassAutoDismiss: !0 });
    return ((0, K.Ay)(() => () => {
        t(mU.i.AUTO_DISMISS);
    }),
    e !== eA.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, S.jsxs)(S.Fragment, {
              children: [
                  (0, S.jsxs)("div", {
                      className: SP.xC,
                      children: [
                          (0, S.jsx)("div", {
                              children: (0, S.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: U.intl.string(U.t.mdXZh1),
                                  className: SP.tl,
                              }),
                          }),
                          (0, S.jsx)("div", {
                              children: (0, S.jsxs)("div", {
                                  className: SP.vJ,
                                  children: [
                                      (0, S.jsx)(N.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: U.intl.string(U.t.jzjJQg),
                                      }),
                                      (0, S.jsx)(Q.E, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: U.intl.string(U.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, S.jsx)("div", {
                              children: (0, S.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/2aa57f16c71171fc8e0edb8cca60735f1192195344d17fa667de6d3ca8163ba0.png",
                                  alt: U.intl.string(U.t.mdXZh1),
                                  className: SP.lh,
                              }),
                          }),
                          (0, S.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: SP.VV,
                              children: (0, S.jsx)(v.$, {
                                  variant: "primary",
                                  text: U.intl.string(U.t.Q26diF),
                                  onClick: () => void t(mU.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, S.jsx)(su.c, { className: SP.yF }),
              ],
          });
}
function SM() {
    let e = (0, f.bG)([tu.A], () => tu.A.enabled),
        t = (0, nC.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, S.jsxs)(S.Fragment, {
              children: [
                  (0, S.jsx)(i$.w, {
                      type: "warning",
                      message: U.intl.format(U.t.fuEX5B, {
                          onClick: function () {
                              return (0, ng.openUserSettings)(h.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                      role: "status",
                  }),
                  (0, S.jsx)(su.c, { className: SP.yF }),
              ],
          })
        : null;
}
let SU = (0, E.t_)(h.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                pC(),
                sc.Ay.addChangeListener(pC),
                pT.A.addChangeListener(pC),
                pI.default.addChangeListener(pC),
                pf.default.addChangeListener(pC),
                e6.isPlatformEmbedded && (0, h0.a2)(),
                () => {
                    (sc.Ay.removeChangeListener(pC),
                        pT.A.removeChangeListener(pC),
                        pI.default.removeChangeListener(pC),
                        pf.default.removeChangeListener(pC),
                        e6.isPlatformEmbedded && (0, h0.e0)());
                }
            );
        },
        useTitle: () => U.intl.string(U.t["9cb1Uz"]),
        decoration: {
            type: p.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, S.jsxs)(S.Fragment, { children: [(0, S.jsx)(SG, {}), (0, S.jsx)(SM, {})] });
            },
        },
        buildLayout: () => [p5, Se, SD, Sf, Sr],
    }),
    SV = (0, E.i4)(h.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["9cb1Uz"]),
        icon: pS.l,
        usePredicate: nb.b_,
        buildLayout: () => [SU],
    });
var Sk = n(687966);
let Sw = (0, E.AK)(h.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.OYYY6q),
        destinationKey: h.X.ACTIVITY_PRIVACY_PANEL,
    }),
    SF = (0, E.gN)(h.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [Sw] });
var SB = n(227309),
    Sz = n(29160),
    SY = n(552366),
    SX = n(938442);
function SH(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e;
    (0, pU.I)(t.id);
    let o = (0, f.cf)([i9.Ay, pW.A, tg.A, pM.A], () => (0, i9.xU)(t, i9.Ay, pW.A, tg.A, pM.A)),
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
        p = h || x,
        _ = T.useMemo(
            () =>
                (0, h$.n1)(o)
                    ? r
                        ? o.gameName
                        : U.intl.formatToPlainString(U.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [N, C] = T.useState(_ ?? "???"),
        y = iE()(SX.tR, {
            [SY.LO]: !i,
            [SY.Rw]: i,
            [SY.FB]: null != o && i,
            [SY.xL]: r,
            [SY.fG]: null != l && l.length > 0,
        });
    function b() {
        (pD.Ay.deleteEntry(o),
            l?.forEach((e) => {
                pD.Ay.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? pW.A.getDetectableGame(o.id) : null;
        (td.default.track(I.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, h$.n1)(o) ? o.gameName : o.name,
        }),
            (0, sI.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("568035"), n.e("627495")]).then(n.bind(n, 651930));
                return (n) =>
                    (0, S.jsx)(t, {
                        ...n,
                        detected: { name: o.name ?? "", gameId: e?.id ?? o.id },
                        onSubmitted: () => m(!0),
                    });
            }));
    }
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsxs)("div", {
                className: y,
                children: [
                    (0, S.jsxs)("div", {
                        className: iE()(SY.$K, SX.Vd),
                        children: [
                            null != o.processGame || (o.verified && !s)
                                ? (0, S.jsxs)("div", {
                                      className: SY.HS,
                                      children: [
                                          (0, S.jsx)("div", { className: SY.mO, children: _ }),
                                          (0, S.jsx)(sE.m, {
                                              text: U.intl.string(U.t["4PJP5p"]),
                                              children: (0, S.jsx)(xw.A, {
                                                  className: SY.qf,
                                                  size: 18,
                                                  color: n6.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, S.jsx)(xL.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: n6.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, S.jsx)("input", {
                                      className: iE()(SY.mO, SY.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: N,
                                      onBlur: function () {
                                          o.name !== N && pD.Ay.editName(o, N);
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
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: SY.GN,
                                        children: (0, S.jsx)(Sz.A, {
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
                    p &&
                        (0, S.jsx)(ap.Y, {
                            targetElementRef: A,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, S.jsx)(gP.W, {
                                    navId: "registered-game-overflow-menu",
                                    onSelect: void 0,
                                    onClose: t,
                                    "aria-label": U.intl.string(U.t["UKOtz+"]),
                                    children: (0, S.jsxs)(tn.rX, {
                                        children: [
                                            h &&
                                                (0, S.jsx)(tn.Dr, {
                                                    id: "report",
                                                    label: U.intl.string(U.t["+78Pfm"]),
                                                    action: v,
                                                }),
                                            x &&
                                                (0, S.jsx)(tn.Dr, {
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
                                (0, S.jsx)("div", {
                                    className: iE()(SY._Q, { [SY.g9]: t.isShown }),
                                    children: (0, S.jsx)(sE.m, {
                                        text: U.intl.string(U.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, S.jsx)(sm.K, {
                                            ...e,
                                            buttonRef: A,
                                            icon: gL.MoreHorizontalIcon,
                                            variant: "icon-only",
                                            size: "sm",
                                            "aria-label": U.intl.string(U.t["UKOtz+"]),
                                        }),
                                    }),
                                }),
                        }),
                    (0, S.jsx)(sE.m, {
                        text: U.intl.string(U.t.QmitzM),
                        asContainer: !0,
                        ariaHidden: !0,
                        children: (0, S.jsx)(sx.I, {
                            checked: o.detectable && u,
                            disabled: !u,
                            onChange: function () {
                                null != l && l.length > 0 && d
                                    ? (0, sI.openModalLazy)(async () => {
                                          let { Modal: e } = await Promise.all([n.e("304823"), n.e("223976")]).then(
                                              n.bind(n, 732955),
                                          );
                                          return (t) =>
                                              (0, S.jsx)(e, {
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
                                                              (pD.Ay.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : pD.Ay.toggleDetection(o);
                            },
                            "aria-label": U.intl.string(U.t.QmitzM),
                        }),
                    }),
                ],
            }),
            null != l &&
                l.length > 0 &&
                !i &&
                (0, S.jsx)("div", {
                    className: SY.AQ,
                    children: l.map((e, t) =>
                        (0, S.jsxs)(
                            T.Fragment,
                            {
                                children: [
                                    (0, S.jsx)(SH, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, S.jsx)("div", { className: SY.PQ }),
                                ],
                            },
                            (0, i9.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function SW() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = h2();
    return 0 === e.length
        ? null
        : (0, S.jsx)(Z.B, {
              padding: { bottom: 32 },
              children: (0, S.jsx)(n7.n, {
                  children: (0, S.jsx)("div", {
                      children: e.map((e) =>
                          (0, S.jsx)(
                              SH,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === SB.a7 ? t : void 0 },
                              (0, i9.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let SK = (0, E.E2)(h.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, S.jsx)(SW, {}),
});
var SZ = n(424994);
let Sq = (0, E.zZ)(h.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [SK, SF],
    useTitle: () => U.intl.string(U.t.jCOdvx),
    useSubtitle: () =>
        (0, f.bG)([i9.Ay], () => i9.Ay.getGamesSeen(!1).some((e) => !(0, h$.n1)(e)))
            ? U.intl.format(U.t.KPA3m9, { igdbLink: SZ.s8 })
            : U.intl.string(U.t["1yiJwn"]),
});
var SQ = n(890497),
    S$ = n(853270),
    SJ = n(969426);
function S0(e) {
    let { onClose: t } = e,
        n = (0, f.bG)([i9.Ay], () => i9.Ay.getCandidateGames()),
        [i, s] = T.useState(null),
        l = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, S.jsxs)(aS.l, {
        className: iE()(S$.H, SJ.Y_),
        "aria-label": U.intl.string(U.t.GTCx0p),
        children: [
            (0, S.jsx)(SQ.Z, {
                selectionMode: "single",
                placeholder: U.intl.string(U.t.XqMe3N),
                value: i,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, S.jsxs)("div", {
                className: iE()(S$.o, SX.xM),
                children: [
                    (0, S.jsx)(hR.Q, { variant: "secondary", text: U.intl.string(U.t["ETE/oC"]), onClick: t }),
                    (0, S.jsx)(v.$, {
                        variant: "primary",
                        text: U.intl.string(U.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (pD.Ay.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var S1 = n(475007);
function S2() {
    let e = T.useRef(null);
    return (0, S.jsxs)("div", {
        className: iE()(S1.a, E5.Gf),
        children: [
            (0, S.jsx)("span", { children: U.intl.string(U.t.xwhoqM) }),
            (0, S.jsx)(ap.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, S.jsx)(S0, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, S.jsx)(hR.Q, {
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
function S3() {
    return (0, S.jsx)("div", {
        className: iE()(SX.tR, SY.eS, SY.Rw),
        children: (0, S.jsxs)("div", {
            className: iE()(SY.$K, SX.Vd),
            children: [
                (0, S.jsx)("div", { className: SY.mO, children: U.intl.string(U.t.H68X9x) }),
                (0, S.jsx)(S2, {}),
            ],
        }),
    });
}
let S5 = (0, E.E2)(h.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = h2(),
                n = (0, f.bG)([i9.Ay], () => i9.Ay.getVisibleGame());
            return null == n
                ? (0, S.jsx)(S3, {})
                : (0, S.jsxs)("div", {
                      className: iE()(SX.Vd, SY.C2),
                      children: [
                          (0, S.jsx)(
                              SH,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === SB.a7 ? e : void 0,
                              },
                              (0, i9.Es)(n),
                          ),
                          (0, S.jsx)(S2, {}),
                      ],
                  });
        },
    }),
    S4 = (0, E.zZ)(h.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => U.intl.string(U.t["MY9/Oe"]),
        buildLayout: () => [S5],
    }),
    S6 = (0, E.t_)(h.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => U.intl.string(U.t.AVDyEj),
        buildLayout: () => [S4, Sq],
    }),
    S8 = (0, E.i4)(h.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.AVDyEj),
        icon: Sk.GameControllerIcon,
        usePredicate: nb.Pi,
        buildLayout: () => [S6],
    }),
    S7 = (0, E.WI)(h.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => U.intl.string(U.t.BA9200),
        buildLayout: () => [S8, xb, SV, pp],
    });
var S9 = n(631670),
    Te = n(619499),
    Tt = n(836602),
    Tn = n(591179),
    Ti = n(402860),
    Ts = n(761508),
    Tl = n(159001),
    Tr = n(344346),
    Ta = n(919395),
    To = n(68750);
function Tu(e) {
    let { title: t, children: n } = e;
    return (0, S.jsxs)("div", {
        children: [(0, S.jsx)(N.D, { variant: "text-md/medium", className: To.Vf, children: t }), n],
    });
}
function Td(e) {
    let {
        children: t,
        className: n,
        layoutClassName: i,
        profilePreview: s,
        profilePreviewTitle: l,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, S.jsx)("div", {
        className: iE()(To.UA, n),
        children: (0, S.jsxs)("div", {
            className: iE()(To.yt, i),
            children: [
                (0, S.jsx)("div", {
                    className: iE()(To.Fp, a && To.Oz),
                    children: (0, S.jsxs)(S.Fragment, {
                        children: [
                            (0, S.jsx)(Tu, { title: l ?? U.intl.string(U.t.Zb06yP), children: s }),
                            null != r ? (0, S.jsx)(Tu, { title: U.intl.string(U.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, S.jsx)("div", { className: To.oB, children: t }),
            ],
        }),
    });
}
var Tc = n(986687),
    Tg = n(101058),
    Tm = n(321191),
    TA = n(696451),
    TE = n(590941);
function Th() {
    return (0, S.jsxs)("div", {
        className: TE.p$,
        children: [
            (0, S.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: TE.Sl }),
            (0, S.jsx)(N.D, { className: TE.h8, variant: "heading-lg/extrabold", children: U.intl.string(U.t.Z1OZCV) }),
            (0, S.jsx)(Q.E, { className: TE.h8, variant: "text-md/normal", children: U.intl.string(U.t.ZSt4Tt) }),
            (0, S.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: TE.h8,
                children: (0, S.jsx)(v.$, {
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
var Tx = n(81400),
    Tp = n(450232),
    TS = n(252732),
    TT = n(355622),
    Tf = n(408018),
    TI = n(479909),
    T_ = n(290386),
    TN = n(941933),
    TC = n(486264);
let Ty = (0, tZ.Ld)(),
    Tb = (0, P.createChannelRecord)({ id: "1", type: I.rbe.DM }),
    Tv = (0, tZ.Ld)();
function Tj(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: s,
            placeholder: l,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, T_.U)({ location: "profile_customization_about_me" }),
        [u, d] = T.useState(s ?? r),
        [c, g] = T.useState((0, Tf.x7)(u)),
        m = T.useRef(r),
        A = T.useRef(!1);
    return (
        T.useEffect(() => {
            if (m.current !== r) {
                let e = (0, Tf.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        T.useEffect(() => {
            void 0 !== s || u === r || A.current || (d(r), g((0, Tf.x7)(r)));
        }, [s, r, u]),
        (0, S.jsxs)(am.A, {
            title: t,
            titleId: Ty,
            description: U.intl.string(U.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, S.jsx)(TI.Ay, {
                    "aria-describedby": Tv,
                    "aria-labelledby": Ty,
                    className: TC.i,
                    innerClassName: TC.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: l,
                    channel: Tb,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: TN.y,
                    type: TT.oU.PROFILE_BIO_INPUT,
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
                (0, S.jsx)(sh.A, { id: Tv, children: U.intl.format(U.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var TO = n(821956),
    TL = n(562819),
    TR = n(84540),
    TD = n(467690);
function TP(e) {
    let { user: t, guild: n, className: i, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, ez.Ay)(),
        o = (0, Ta.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, Ta.CP)(n?.id),
        c = r ? cY.wL : l3.$n;
    return (0, S.jsx)(am.A, {
        className: i,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, S.jsxs)("div", {
            className: TD.NC,
            children: [
                (0, S.jsx)(c, {
                    size: l3.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TL.L)({ analyticsLocations: a, guild: n });
                    },
                    className: iE()({ [TD.yj]: r }),
                    children: U.intl.string(U.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TD.DT,
                        children: (0, S.jsx)(v.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, TO.uZ)(t, n) ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t.OrokWm),
                            onClick: function () {
                                (0, TR.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TG = n(339984),
    TM = n(942132);
let TU = [{ name: "gif", extensions: ["gif"] }];
function TV(e) {
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
        m = c ? cY.wL : l3.$n,
        A = T.useCallback(() => {
            (0, TS.XD)({
                uploadType: TG.HL.AVATAR,
                analyticsSource: g,
                filters: u ? TU : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, S.jsx)(am.A, {
        className: a,
        title: s,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, S.jsxs)("div", {
            className: TM.NC,
            children: [
                (0, S.jsx)(m, {
                    className: iE()({ [TM.yj]: c }),
                    size: l3.$n.Sizes.SMALL,
                    onClick: A,
                    children: l ?? U.intl.string(U.t["4OynCD"]),
                }),
                t &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TM.DT,
                        children: (0, S.jsx)(v.$, {
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
var Tk = n(248778),
    Tw = n(810188);
function TF(e) {
    let { user: t, guildId: n, className: i } = e,
        s = af.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, ez.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, Ta.B0)(t, n),
        d = (0, Tk.u)("DisplayNameStylesSection"),
        [c, g] = (0, mv.kn)(d ? [eA.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eA.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        A = (0, T.useCallback)(() => {
            (g(mU.i.TAKE_ACTION),
                td.default.track(I.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eY.L)({ analyticsLocations: l, guildId: n }));
        }, [l, n, g]),
        E = (0, T.useCallback)(() => {
            ((0, TR.p)({ displayNameStyles: null }), td.default.track(I.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        h = (0, T.useCallback)(() => {
            (0, TR.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        x = void 0 !== o ? o : null != n ? a : r;
    return (0, S.jsx)(am.A, {
        title: U.intl.string(eX.default["86GtGH"]),
        titleBadge: m
            ? (0, S.jsx)("div", { className: Tw.A, children: (0, S.jsx)(m2.E, { type: "new", variant: "primary" }) })
            : void 0,
        className: i,
        showPremiumIcon: s,
        errors: u,
        children: (0, S.jsxs)("div", {
            className: Tw.N,
            children: [
                (0, S.jsx)(v.$, { variant: "primary", size: "sm", text: U.intl.string(eX.default.vJqrIg), onClick: A }),
                null == n &&
                    null != x &&
                    (0, S.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: U.intl.string(eX.default.ymq8WQ),
                        onClick: E,
                    }),
                null != n &&
                    null != x &&
                    (0, S.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: U.intl.string(eX.default["j/KRxc"]),
                        onClick: h,
                    }),
            ],
        }),
    });
}
var TB = n(637193),
    Tz = n(622410);
function TY(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: s } = (0, ez.Ay)(),
        l = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, Ta.rv)(t, n?.id),
        d = T.useCallback(() => {
            (0, TB.p)({ analyticsLocations: s, guildId: n?.id });
        }, [s, n?.id]),
        c = T.useCallback(() => {
            (0, TR.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, S.jsx)(am.A, {
        title: U.intl.string(U.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, S.jsxs)("div", {
            className: Tz.u,
            children: [
                (0, S.jsx)(v.$, { variant: "primary", size: "sm", text: U.intl.string(U.t.BwdeM1), onClick: d }),
                (void 0 === o ? (l ? a : r) != null : null != o) &&
                    (0, S.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: l ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var TX = n(88524);
function TH(e) {
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
        g = d ? cY.wL : l3.$n;
    return (0, S.jsx)(am.A, {
        className: l,
        title: U.intl.string(U.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, S.jsxs)("div", {
            className: TX.NC,
            children: [
                (0, S.jsx)(g, {
                    className: iE()({ [TX.yj]: d }),
                    size: l3.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, TS.XD)({ uploadType: TG.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: U.intl.string(U.t.N0bC3P),
                }),
                t &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TX.DT,
                        children: (0, S.jsx)(v.$, {
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
var TW = n(617061),
    TK = n(625613);
function TZ(e) {
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
        c = (0, Ta.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, Ta.nZ)(n?.id);
    T.useEffect(() => {
        d &&
            (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tJ.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tq.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tQ.uq)(tJ.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let A = a ? cY.wL : l3.$n;
    return (0, S.jsx)(am.A, {
        forcedDivider: r,
        borderType: dY.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: m,
        className: s,
        children: (0, S.jsxs)("div", {
            className: TK.NC,
            children: [
                (0, S.jsx)(A, {
                    size: l3.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TW.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: iE()({ [TK.yj]: a }),
                    children: U.intl.string(U.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TK.DT,
                        children: (0, S.jsx)(v.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t.uMuafO),
                            onClick: function () {
                                (0, TR.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Tq = n(515727),
    TQ = n(594401);
function T$(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: s } = (0, ez.Ay)(),
        l = (0, Ta.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, Ta.Tu)(n?.id),
        [o, u] = (0, mv.kn)([eA.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eA.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, S.jsx)(am.A, {
        showBorder: d,
        borderType: d ? dY.i.NEW_UPSELL : dY.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d
            ? (0, S.jsx)("div", { className: TQ.Ad, children: (0, S.jsx)(m2.E, { type: "new", variant: "primary" }) })
            : void 0,
        description: d ? U.intl.string(U.t.yMoMAt) : void 0,
        errors: a,
        children: (0, S.jsxs)("div", {
            className: TQ.NC,
            children: [
                (0, S.jsx)(v.$, {
                    variant: "primary",
                    size: "sm",
                    text: U.intl.string(U.t["9/hmle"]),
                    onClick: function () {
                        ((0, Tq.w)({ analyticsLocations: s, guild: n }), u(mU.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != l : null != r) &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TQ.DT,
                        children: (0, S.jsx)(v.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t.nQBruk),
                            onClick: function () {
                                (0, TR.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TJ = n(602853),
    T0 = n(654107),
    T1 = n(999291),
    T2 = n(101928),
    T3 = n(819169),
    T5 = n(317097),
    T4 = n(508274),
    T6 = n(379012);
function T8(e) {
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
        c = (0, TJ.r)(n6.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = n6.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, TS.sN)(i),
        A = (0, T5.Hl)(i),
        E = A === c ? g : A,
        h = m ? n6.A.unsafe_rawColors.WHITE.css : n6.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, T3.A)(a),
        p = (0, T3.A)(o),
        [f, _] = T.useState((0, oy.A)());
    return (
        T.useEffect(() => {
            (x !== a || p !== o) && _((0, oy.A)());
        }, [o, a, p, x]),
        (0, S.jsx)(ap.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, S.jsx)(T4.VN, {
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
                return (0, S.jsxs)("div", {
                    ref: d,
                    className: iE()(T6.oP, { [T6.r9]: l }),
                    children: [
                        (0, S.jsx)(n9.D, {
                            ...n,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? I.tEg : t,
                            style: { backgroundColor: A, borderColor: E },
                            className: T6.nf,
                            "aria-label": U.intl.string(U.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, S.jsx)(aT.PencilIcon, {
                                size: "custom",
                                className: T6.BW,
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
var T7 = n(190377);
function T9(e) {
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
        c = (0, T1.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, T2.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        A = af.Ay.canUsePremiumProfileCustomization(t),
        E = null != n ? n : t.getAvatarURL(r, 80),
        h = (0, TJ.r)(n6.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = (0, T0.rh)(E, h, !1);
    return null == g || null == m
        ? null
        : (0, S.jsx)(am.A, {
              title: U.intl.string(U.t.DMeO2X),
              disabled: !A && !l,
              className: iE()(T7.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, S.jsxs)("div", {
                  className: T7.hd,
                  children: [
                      (0, S.jsx)("div", {
                          className: T7.YX,
                          children: (0, S.jsx)(T8, {
                              onChange: (e) => s([e, m]),
                              color: g,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, S.jsx)(Q.E, {
                                  className: T7.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: U.intl.string(U.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, S.jsx)("div", {
                          className: T7.YX,
                          children: (0, S.jsx)(T8, {
                              onChange: (e) => s([g, e]),
                              color: m,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, S.jsx)(Q.E, {
                                  className: T7.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: U.intl.string(U.t["8elvy6"]),
                              }),
                          }),
                      }),
                      u &&
                          null != r &&
                          (0, S.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: T7.WA,
                              children: (0, S.jsx)(v.$, {
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
function fe(e) {
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
    return (0, S.jsx)(am.A, {
        title: t,
        titleId: o,
        errors: n,
        disabled: a,
        children: (0, S.jsx)(s_.k, {
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
var ft = n(684732),
    fn = n(576705),
    fi = n(931175);
function fs(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: s, user: l, guild: r } = e,
        a = (0, f.bG)([fn.A], () => fn.A.can(I.xBc.CHANGE_NICKNAME, r) || fn.A.can(I.xBc.MANAGE_NICKNAMES, r)),
        o = (0, xz.L)(tJ.PremiumTypes.TIER_2);
    return (0, S.jsxs)(am.A, {
        title: U.intl.string(U.t.me1lRk),
        errors: t,
        children: [
            (0, S.jsx)(s_.k, {
                value: n ?? i ?? "",
                placeholder: s,
                maxLength: I.d0r,
                onChange: function (e) {
                    (0, TR.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : U.intl.string(U.t.gzjxQi),
            }),
            o && (0, S.jsx)(TF, { user: l, guildId: r.id, className: fi.F }),
        ],
    });
}
var fl = n(233454);
let fr = "/assets/b25da78aa7949feb.png";
function fa(e) {
    let { user: t, showOverlay: n, children: i } = e,
        s = (0, cn.Ay)(),
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
        ? (0, S.jsxs)("div", {
              className: fl.ry,
              children: [
                  (0, S.jsx)("div", { children: i }),
                  (0, S.jsxs)("div", {
                      className: fl.Wc,
                      children: [
                          (0, S.jsx)("img", {
                              className: fl.Tn,
                              alt: U.intl.string(U.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case I.NJ8.ASH:
                                      case I.NJ8.DARK:
                                      case I.NJ8.ONYX:
                                          return fr;
                                      case I.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return fr;
                                  }
                              })(s),
                          }),
                          (0, S.jsxs)("div", {
                              className: fl._9,
                              children: [
                                  (0, S.jsx)(Q.E, {
                                      variant: "text-lg/semibold",
                                      color: "text-overlay-light",
                                      children: U.intl.string(U.t.dMaDFX),
                                  }),
                                  (0, S.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-overlay-light",
                                      children: U.intl.string(U.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, S.jsx)(dz.A, {
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
var fo = n(203164);
function fu() {
    let e = (0, f.bG)([lf.default], () => {
            let e = lf.default.getCurrentUser();
            return (th()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, xz.L)(tJ.PremiumTypes.TIER_2),
        n = (0, f.bG)([Tt.A, sL.A], () => sL.A.getGuild(Tt.A.selectedGuildId));
    th()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, f.cf)([Tt.A], () => ({ ...Tt.A.getPendingChanges(n.id), errors: Tt.A.getErrors(n.id) })),
        d = (0, Tg.V7)({ userId: e.id, image: i }),
        c = (0, Tx.EC)(n.id),
        g = (0, f.bG)([TA.Ay], () => (null == n.id ? null : TA.Ay.getMember(n.id, e.id))),
        m = (0, f.bG)([Tm.A], () => Tm.A.getGuildMemberProfile(e.id, n.id)),
        A = af.Ay.canUsePremiumProfileCustomization(e),
        E = (0, Ta.z5)(i, g?.avatar),
        h = (0, Ta.Ac)(l, m?.banner),
        x = (0, ft.l)(o, m?.themeColors),
        p = m?.bio ?? "",
        T = m?.pronouns ?? "";
    return (0, S.jsxs)("div", {
        className: fo.Q,
        children: [
            (0, S.jsx)(
                fs,
                {
                    errors: u?.nick ?? c?.nick,
                    username: uP.Ay.getName(e),
                    pendingNick: s,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, S.jsx)(
                fe,
                {
                    sectionTitle: U.intl.string(U.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, TR.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: T,
                },
                "pronouns",
            ),
            (0, S.jsxs)(fa, {
                user: e,
                showOverlay: !A,
                children: [
                    (0, S.jsx)(
                        TV,
                        {
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [U.intl.string(U.t.lqaIxI), (0, S.jsx)(Tp.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: E,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, TS.rM)(e, g?.avatar, (e) => (0, TR.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !A,
                        },
                        "avatar",
                    ),
                    (0, S.jsx)(
                        TP,
                        {
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [U.intl.string(U.t["7v0T9P"]), (0, S.jsx)(Tp.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, S.jsx)(TF, { user: e, guildId: n.id }),
                    (0, S.jsx)(
                        TY,
                        { user: e, guild: n, titleIcon: (0, S.jsx)(Tp.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, S.jsx)(
                        TZ,
                        {
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [U.intl.string(U.t.wR5wOo), (0, S.jsx)(Tp.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, S.jsx)(
                        T$,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [U.intl.string(U.t.GWrZOd), (0, S.jsx)(Tp.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, S.jsx)(
                        TH,
                        {
                            showRemoveBannerButton: h,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, TS.rM)(e, m?.banner, (e) => (0, TR.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !A,
                        },
                        "banner",
                    ),
                    (0, S.jsx)(T9, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, TR.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: x,
                    }),
                    (0, S.jsx)(
                        Tj,
                        {
                            placeholder: U.intl.string(U.t["/7NKgv"]),
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [U.intl.string(U.t.ZzAR2Y), (0, S.jsx)(Tp.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, TR.p)({ guildId: n.id, bio: e }),
                            errors: u?.bio ?? c?.bio,
                            pendingBio: r,
                            currentBio: p,
                            disabled: !A,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var fd = n(832131);
function fc(e) {
    (0, sI.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, S.jsx)(t, { source: { ...e, page: I.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function fg(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(tw.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, f.bG)([lf.default], () => {
            let e = lf.default.getCurrentUser();
            return (th()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        l = (0, f.bG)([TA.Ay], () => (null != t ? TA.Ay.getMember(t.id, s.id) : null)),
        r = (0, f.bG)([Tm.A], () => !Tm.A.isFetchingProfile(s.id, t?.id)),
        a = (0, f.bG)([tu.A], () => tu.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, f.cf)([Tt.A], () => Tt.A.getPendingChanges(t?.id)),
        c = (0, Tg.V7)({ userId: s.id, image: o }),
        g = (0, Ta.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, Ta.B0)(s, t?.id);
    return (T.useEffect(() => Tl.IM, []), a)
        ? (0, S.jsx)(oh.A, {})
        : r
          ? (0, S.jsxs)(ez.f5, {
                value: i,
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        children: U.intl.format(U.t["/PTB2E"], {
                            helpCenterLink: eC.A.getArticleURL(I.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(ag.A, { guildId: t.id, onChange: n }),
                                  (0, S.jsx)(Td, {
                                      profilePreviewTitle: (0, S.jsx)(N.D, {
                                          variant: "heading-md/medium",
                                          className: fd.YV,
                                          children: U.intl.formatToPlainString(U.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, S.jsx)(Tc.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: af.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: fc,
                                          containerClassName: fd.ti,
                                      }),
                                      nameplatePreview: (0, S.jsx)(Tr.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? fd.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, S.jsx)(fu, {}),
                                  }),
                              ],
                          })
                        : (0, S.jsx)(Th, {}),
                ],
            })
          : (0, S.jsx)(oC.y, {});
}
var fm = n(903209),
    fA = n(641130);
function fE(e) {
    let { children: t, notice: n } = e;
    return (0, S.jsxs)("div", { className: fA.r, children: [n, (0, S.jsx)("div", { children: t })] });
}
var fh = n(823092),
    fx = n(815996),
    fp = n(379197),
    fS = n(488430),
    fT = n(457421),
    ff = n(940622),
    fI = n(559474),
    f_ = n(757993);
let fN = function () {
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
        } = ((e = (0, ff.mb)(fI.RN.UPSELL_BANNER)),
        (t = (0, ff.mb)(fI.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, f.bG)([fT.A], () => fT.A.getMarketingBySurface(fp.R.EDIT_PROFILE_SETTINGS))),
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
        { navigateWithValidation: g } = (0, fh.L_)();
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
        (0, S.jsxs)("div", {
            ref: l,
            className: f_.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, S.jsx)("div", {
                    className: f_.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, S.jsx)("img", { src: a, className: f_.Qw, alt: "" }),
                }),
                (0, S.jsxs)("div", {
                    className: f_.Em,
                    children: [
                        (0, S.jsx)(N.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: f_.DD,
                            children: o,
                        }),
                        (0, S.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, S.jsx)(v.$, {
                    onClick: function () {
                        g(() =>
                            (0, fx.Cz)({
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
var fC = n(451909),
    fy = n(202639),
    fb = n(285373),
    fv = n(835071),
    fj = n(724651),
    fO = n(732280),
    fL = n(590180),
    fR = n(898461),
    fD = n(469054),
    fP = n(601298),
    fG = n(207803),
    fM = n(461797);
let fU = Object.keys(fM.jB);
function fV(e) {
    let t = null == e ? fU : fU.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var fk = n(518293),
    fw = n(221650);
function fF(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion),
        s = (0, fk.Xf)({ useReducedMotion: i }),
        { name: l, header: r } = T.useMemo(() => {
            let e = (0, fM.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, S.jsxs)("div", {
        className: fw.kL,
        children: [
            (0, S.jsx)(n9.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                className: fw.x6,
                "aria-label": U.intl.string(U.t["44yJxh"]),
                children: s.render(),
            }),
            (0, S.jsxs)(n9.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                "aria-label": `${l}: ${U.intl.string(U.t["44yJxh"])}`,
                className: fw.Lt,
                children: [
                    (0, S.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: fw.L_ }),
                    (0, S.jsx)(Q.E, {
                        className: fw._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: l,
                    }),
                ],
            }),
        ],
    });
}
var fB = n(511484),
    fz = n(811611),
    fY = n(206697),
    fX = n(507553);
function fH(e, t) {
    let n = fX.A.useField("scrollPosition"),
        i = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion);
    (0, T.useEffect)(() => {
        let s = e.current;
        if (null == s || n !== t) return;
        let l = requestAnimationFrame(() => {
            (s.scrollIntoView({ behavior: i ? "auto" : "smooth" }), fX.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, n, i]);
}
var fW = n(844222),
    fK = n(842092);
let fZ = "/assets/d4955aabdcb5bdee.png",
    fq = { assetOrigin: fD.E.NEW_ASSET, imageUri: fZ, staticImageUri: fZ, description: "", originalAsset: void 0 };
function fQ(e) {
    let { user: t } = e,
        { reducedMotion: n } = T.useContext(fW.C),
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
        } = (0, f.cf)([Tt.A], () => {
            let e = Tt.A.getPendingChanges(),
                t = Tt.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        h = (0, Tg.V7)({ userId: t.id, image: g ?? i });
    return (0, S.jsx)(Tc.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? s ?? fq,
        pendingDisplayNameStyles: E ?? a,
        pendingAvatar: h,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== A ? A : l,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : fK.WX,
        containerClassName: fK.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var f$ = n(829497);
function fJ(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        s = af.Ay.isPremium(t),
        l = af.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, f.cf)([Tt.A], () => {
            let e = Tt.A.getPendingChanges(),
                t = Tt.A.getErrors(),
                n = Tt.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, T.useState)(fV()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: s,
                    displayNameStyles: l,
                } = (0, T.useMemo)(() => {
                    let t = (0, fM.Wt)(e);
                    return {
                        banner: (0, fP.X)({
                            assetOrigin: fD.E.NEW_ASSET,
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
                r = (0, f.bG)([fL.A], () => {
                    let e = fL.A.getProduct(s);
                    return (0, fR.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, T.useEffect)(() => {
                (0, fG.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: l });
            }, [n, i, r, l]);
            let a = (0, T.useCallback)(() => {
                let n = fV(e);
                (t(n), td.default.track(I.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = T.useRef(null);
    fH(m, eO._F.TRY_IT_OUT);
    let { analyticsLocations: A, sourceAnalyticsLocations: E } = (0, ez.Ay)(tw.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function h(e) {
        e && ((0, fY.T)(), td.default.track(I.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
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
    let x = (0, fO.V)()?.subscriptionTrial?.skuId === tJ.pe.TIER_2,
        p = (0, fj.O)(),
        _ = (0, fB.U9)(p, tJ.pe.TIER_2);
    return i
        ? (0, S.jsx)(ez.f5, {
              value: A,
              children: (0, S.jsxs)(dY.A, {
                  ref: m,
                  className: f$.MT,
                  type: dY.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, S.jsx)(Td, {
                          stickyPreview: !1,
                          layoutClassName: f$.th,
                          profilePreviewTitle: (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(ad.t, { size: "md", color: "currentColor", className: f$.PC }),
                                  U.intl.string(U.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, S.jsxs)(S.Fragment, {
                              children: [(0, S.jsx)(fF, { preset: c, onShuffle: g }), (0, S.jsx)(fQ, { user: t })],
                          }),
                          children: (0, S.jsxs)("div", {
                              children: [
                                  (0, S.jsxs)("div", {
                                      children: [
                                          (0, S.jsx)(N.D, {
                                              variant: "heading-xl/extrabold",
                                              children: U.intl.string(U.t["2zGdAW"]),
                                          }),
                                          (0, S.jsx)(Q.E, {
                                              className: f$.h_,
                                              variant: "text-sm/normal",
                                              children: U.intl.string(U.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, S.jsx)(T9, {
                                      className: f$.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Tg.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: fG.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, S.jsx)(TH, {
                                      className: f$.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: fG.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, S.jsx)(TV, {
                                          className: f$.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: fG.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: U.intl.string(U.t["7z0D1c"]),
                                          sectionTitle: U.intl.string(U.t.vtFfPX),
                                      }),
                                  (0, S.jsx)(TF, { user: t, className: f$.fz }),
                                  !x &&
                                      (0, S.jsx)(Q.E, {
                                          variant: "text-sm/normal",
                                          children: U.intl.string(U.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !x &&
                          (0, S.jsx)(fy.d, {
                              onSubscribeModalClose: h,
                              className: f$.Kv,
                              showUpsell: !0,
                              text: U.intl.format(U.t.TmfgI2, {
                                  onClick: () => {
                                      (0, fv.K)({ onSubscribeFinish: h });
                                  },
                              }),
                              button: s
                                  ? U.intl.string(U.t.AfRWI8)
                                  : _
                                    ? U.intl.formatToPlainString(U.t.bkQ4bH, { percent: p?.discount.amount })
                                    : U.intl.string(U.t.pj0XBN),
                              position: "inline",
                          }),
                      x &&
                          (0, S.jsxs)("div", {
                              children: [
                                  (0, S.jsx)("div", { className: f$.BU }),
                                  (0, S.jsx)(fz.Ay, {
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
var f0 = n(814390),
    f1 = n(643056),
    f2 = n(843282),
    f3 = n(145497),
    f5 = n(685073),
    f4 = n(534400),
    f6 = n(581781),
    f8 = n(743981),
    f7 = n(195801);
let f9 = (0, tZ.Ld)(),
    Ie = T.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            s = (0, f.cf)([lf.default], () => (0, f5.Zo)(lf.default.getCurrentUser()?.primaryGuild)),
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
                        : (0, S.jsx)(f6.A, {
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
                        : (0, S.jsx)(f3.j, {
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
                        : (0, S.jsx)(f4.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: f8.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [r],
            ),
            c = T.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, S.jsx)(S.Fragment, { children: o(t) });
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
            fH(h, eO._F.GUILD_TAG),
            (0, S.jsxs)(am.A, {
                title: U.intl.string(U.t.Pdd1nd),
                titleId: f9,
                ref: h,
                children: [
                    (0, S.jsx)(Q.E, {
                        className: f7.VA,
                        variant: "text-sm/normal",
                        children: U.intl.string(U.t.mlZ6Jx),
                    }),
                    (0, S.jsx)(f2.Pw, {
                        className: f7.Lt,
                        optionClassName: f7.S0,
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
var It = n(318785),
    In = n(470739);
let Ii = function () {
    return (0, f1.d)({ location: "UserSettingsProfileCustomization" })
        ? (0, S.jsx)(am.A, {
              title: U.intl.string(U.t.l6w3Vj),
              description: U.intl.string(U.t.joHqdj),
              children: (0, S.jsx)(v.$, {
                  text: U.intl.string(U.t.wRraFx),
                  onClick: () => {
                      (0, In.openBadgeDirectoryModal)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var Is = n(953726);
let Il = (0, tZ.Ld)();
function Ir(e) {
    let t = (0, xz.L)(tJ.PremiumTypes.TIER_2);
    return (0, S.jsxs)(am.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: U.intl.string(U.t["9AjdkD"]),
        titleId: Il,
        children: [
            (0, S.jsx)("div", {
                children: (0, S.jsx)(s_.k, {
                    "aria-labelledby": Il,
                    placeholder: e.placeholder,
                    maxLength: I.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, S.jsx)(TF, { user: e.user, className: Is.F }),
        ],
    });
}
var Ia = n(376626);
function Io(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = M.m$.useSetting(),
        s = void 0 !== n ? n : i;
    return (0, S.jsx)("div", {
        className: Ia.u,
        children: (0, S.jsx)(t8.d, {
            label: U.intl.string(U.t["3cWDuO"]),
            description: s ? null : U.intl.formatToPlainString(U.t.aYhclf, { username: t }),
            checked: !s,
            onChange: (e) => {
                !e === i ? (0, S9._e)() : (0, TR.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function Iu(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, TJ.r)(n6.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, T0.rh)(l, r, !1),
        o = (0, T5.LX)(a[0]);
    return (0, S.jsx)(am.A, {
        title: U.intl.string(U.t["/X3fkf"]),
        children: (0, S.jsx)(T8, { onChange: (e) => s(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var Id = n(518477);
let Ic = function () {
    let e = (0, f.bG)([d2.default], () => d2.default.getId());
    return (0, S.jsx)(am.A, {
        title: U.intl.string(U.t.Jzj9q4),
        children: (0, S.jsx)(v.$, {
            text: U.intl.string(U.t.Geikwq),
            onClick: () => {
                (0, Ti.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tw.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: Id.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var Ig = n(654910);
function Im() {
    let e = (0, f.bG)([lf.default], () => {
            let e = lf.default.getCurrentUser();
            return (th()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, f.bG)([Tm.A], () => Tm.A.getUserProfile(e.id)),
        n = (0, f1.d)({ location: "DefaultCustomizationSections" }),
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
        } = (0, f.cf)([Tt.A], () => {
            let e = Tt.A.getPendingChanges(),
                t = Tt.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, Tg.V7)({ userId: e.id, image: i }),
        A = (0, Tx.EC)(),
        E = af.Ay.canUsePremiumProfileCustomization(e),
        h = (0, Ta.z5)(i, e.avatar),
        x = (0, Ta.Ac)(l, t?.banner),
        p = (0, T1.Ay)(e.id),
        T = p?.getLegacyUsername(),
        I = (g.global_name?.length ?? 0) > 0 ? g.global_name : (A?.nick ?? []),
        _ = (g.bio?.length ?? 0) > 0 ? g.bio : (A?.bio ?? []),
        N = (0, It.b)(),
        C = null != (0, f5.Zo)(e.primaryGuild).guildId;
    return (0, S.jsxs)("div", {
        className: Ig.Q,
        children: [
            (0, S.jsx)(Ir, {
                placeholder: e.username,
                errors: I,
                currentGlobalName: e.globalName,
                pendingGlobalName: s,
                onGlobalNameChange: (e) => (0, TR.p)({ globalName: e }),
                user: e,
            }),
            (0, S.jsx)(
                fe,
                {
                    sectionTitle: U.intl.string(U.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, TR.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, S.jsx)(Ic, {}),
            (0, S.jsx)(
                TV,
                {
                    onAvatarChange: (e) => {
                        ((0, TR.p)({ avatar: e }), (0, Ta.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: h,
                    errors: g.avatar,
                    sectionTitle: U.intl.string(U.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, S.jsx)(TP, { user: e, sectionTitle: U.intl.string(U.t["7v0T9P"]) }, "decoration"),
            (0, S.jsx)(TY, { user: e }),
            (0, S.jsx)(TZ, { user: e, sectionTitle: U.intl.string(U.t.wR5wOo) }, "effect"),
            (0, S.jsx)(T$, { user: e, sectionTitle: U.intl.string(U.t.GWrZOd) }, "frame"),
            E
                ? (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsx)(
                              TH,
                              {
                                  showRemoveBannerButton: x,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, TR.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, S.jsx)(T9, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, TR.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, S.jsx)(
                      Iu,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, TR.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, S.jsx)(
                Tj,
                {
                    sectionTitle: U.intl.string(U.t.ZzAR2Y),
                    errors: _,
                    onBioChange: (e) => (0, TR.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (N.length > 0 || C) &&
                (0, S.jsx)(Ie, {
                    availablePrimaryGuilds: N,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, TR.p)({ primaryGuildId: e }),
                }),
            null != T &&
                !n &&
                (0, S.jsx)(Io, { legacyUsername: T, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, S.jsx)(Ii, {}, "badges"),
        ],
    });
}
function IA() {
    (0, sI.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("935205"), n.e("766901"), n.e("641704")]).then(n.bind(n, 562011));
        return (t) =>
            (0, S.jsx)(e, {
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
var IE = n(447080);
function Ih() {
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
        } = (0, f.cf)([Tt.A], () => ({ ...Tt.A.getPendingChanges(), showNotice: Tt.A.showNotice() })),
        a = (0, Tg.V7)({ userId: e.id, image: i }),
        o = (0, Ta.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, f0.A)() && null != n ? fC.Ay.parse(void 0, n).content : n,
        d = af.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, ez.Ay)(tw.A.USER_SETTINGS_USER_PROFILE);
    T.useEffect(() => S9.IM, []);
    let [g, m] = T.useState(!1),
        A = !d,
        E = T.useRef(null);
    return t
        ? (0, S.jsx)(oh.A, {})
        : (0, S.jsxs)(ez.f5, {
              value: c,
              children: [
                  (0, S.jsx)(fN, {}),
                  (0, S.jsx)(Td, {
                      profilePreview: (0, S.jsx)(Tc.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: IA,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: IE.ti,
                      }),
                      nameplatePreview: (0, S.jsx)(Tr.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? IE.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, S.jsx)(Im, {}),
                  }),
                  (0, S.jsx)(cL.L, {
                      innerRef: E,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: A,
                      children: (0, S.jsx)("div", {
                          ref: E,
                          children: (0, S.jsx)(fJ, { user: e, shouldShow: A, isVisible: g }),
                      }),
                  }),
                  A &&
                      !l &&
                      (0, S.jsx)(fy.d, {
                          className: IE.EL,
                          showUpsell: !g,
                          text: U.intl.format(U.t.TmfgI2, { onClick: () => (0, fv.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, S.jsx)(fb.l, {
                              size: "md",
                              location: tw.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, S.jsx)("div", {
                              className: IE.Xl,
                              children: (0, S.jsx)(v.$, {
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
var Ix = n(625494);
n(46121);
var Ip = n(944983);
let IS = { [eO.Eq.USER_PROFILE]: "main_profile_tab", [eO.Eq.GUILD]: "guild_profile_tab" },
    IT = (0, E.E2)(h.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, f.bG)([sR.A, gy.Ay, Tt.A], () => {
                    let e = Tt.A.selectedGuildId ?? sR.A.getGuildId();
                    return null == e || Tt._.has(e) ? gy.Ay.getFlattenedGuildIds().find((e) => !Tt._.has(e)) : e;
                }),
                t = (0, f.bG)([sL.A], () => sL.A.getGuild(e)),
                n = (0, f.bG)([Tt.A], () => Tt.A.showNotice()),
                i = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
                s = fX.A.useField("subsection");
            return (
                T.useEffect(() => {
                    (0, ir._)(IS[s]);
                }, [s]),
                T.useEffect(() => {
                    null != i && t?.id != null && (0, fm.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, S.jsx)(fE, {
                    children: (0, S.jsxs)(uj.F, {
                        component: (0, S.jsx)(sh.A, {
                            children: (0, S.jsx)(N.D, {
                                variant: "heading-xl/normal",
                                children: U.intl.string(U.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, S.jsxs)(Ts.V, {
                                className: Ip.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (n) {
                                            ((0, ia.fO)({ duration: 300, intensity: 1.4 }),
                                                Ix._.dispatch(I.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eO.Eq.GUILD && null != t && (0, Tl.V2)(t.id),
                                            fX.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, S.jsx)(
                                        Ts.V.Item,
                                        {
                                            className: Ip.YU,
                                            id: eO.Eq.USER_PROFILE,
                                            children: U.intl.string(U.t["2p07FR"]),
                                        },
                                        eO.Eq.USER_PROFILE,
                                    ),
                                    (0, S.jsx)(
                                        Ts.V.Item,
                                        {
                                            className: iE()(Ip.YU, Ip.HY),
                                            "aria-label": U.intl.string(U.t.kPHroX),
                                            id: eO.Eq.GUILD,
                                            children: U.intl.string(U.t.kPHroX),
                                        },
                                        eO.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === eO.Eq.GUILD
                                ? (0, S.jsx)(fg, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, ia.fO)({ duration: 300, intensity: 1.4 }),
                                                  Ix._.dispatch(I.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, Tl.JJ)(e.id);
                                      },
                                  })
                                : (0, S.jsx)(Ih, {}),
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
    If = (0, E.zZ)(h.X.PROFILE_CATEGORY, { buildLayout: () => [IT] });
var II = n(379633);
function I_() {
    let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, cX.A)({ userId: e?.id, size: b._3.SIZE_48 });
    return null == e
        ? null
        : (0, S.jsxs)("div", {
              className: II.a5,
              children: [
                  (0, S.jsx)(y.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: b._3.SIZE_48,
                      "aria-label": U.intl.string(U.t.lqaIxI),
                  }),
                  (0, S.jsxs)("div", {
                      className: II.FS,
                      children: [
                          (0, S.jsx)(Q.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, S.jsxs)("div", {
                              className: II.Fk,
                              children: [
                                  (0, S.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: U.intl.string(U.t.Ip9nBS),
                                  }),
                                  (0, S.jsx)(aT.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let IN = (0, E.t_)(h.X.PROFILE_PANEL, {
        useTitle: () => U.intl.string(U.t["vi7f+q"]),
        notice: { stores: [Tt.A], element: Te.A },
        initialize: () => S9.F7,
        buildLayout: () => [If],
    }),
    IC = (0, E.i4)(h.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["vi7f+q"]),
        icon: Ib,
        StronglyDiscouragedCustomComponent: I_,
        usePredicate: () => !(0, Tn.X)("user_settings_sidebar"),
        buildLayout: () => [IN],
    }),
    Iy = (0, E.i4)(h.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => U.intl.string(U.t["vi7f+q"]),
        icon: Ib,
        StronglyDiscouragedCustomComponent: I_,
        usePredicate: () => (0, Tn.X)("user_settings_sidebar"),
        onClick: () => {
            let e = d2.default.getId();
            (0, Ti.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function Ib() {
    let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, cX.A)({ userId: e?.id, size: b._3.SIZE_48 });
    return (0, S.jsx)(y.eu, { src: t, avatarDecoration: n, size: b._3.SIZE_20, "aria-hidden": !0 });
}
let Iv = (0, E.WI)(h.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [IC, Iy] });
var Ij = n(98207);
n(204925);
let IO = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, sI.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 110744),
            );
            return (n) => (0, S.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? uU.tE : null, onCloseCallback: t },
    );
};
var IL = n(940856),
    IR = n(506775),
    ID = n(379257),
    IP = n(121780),
    IG = n(666113);
function IM() {
    let e = IP.A.getCountryCode(),
        t = null != e ? IG.IN[e.alpha2] : void 0;
    ID.A.openUrl(eC.A.getArticleURL(t ?? IG.k9));
}
var IU = n(521169);
function IV() {
    return (0, IU.w)(IG.Vc);
}
var Ik = n(680091);
function Iw() {
    let e = IV(),
        t = (0, IR.ZP)();
    if (!e) return null;
    switch (t) {
        case IR.M$.ADULT:
            return U.intl.format(Ik.default.gi4ulu, { handleOnAgeGatedContentHook: IR.M0 });
        case IR.M$.TEEN:
            return U.intl.format(Ik.default["221iML"], {
                handleOnAgeGatedContentHook: IR.M0,
                handleOnConfirmAgeHook: IR.aP,
            });
        case IR.M$.UNVERIFIED:
            return U.intl.format(Ik.default["W0/7DD"], {
                handleOnAgeGatedContentHook: IM,
                handleOnConfirmAgeHook: IR.aP,
            });
    }
}
var IF = n(26137),
    IB = n(957485);
function Iz() {
    let e = IV(),
        t = (0, IR.ZP)();
    return e ? { icon: t === IR.M$.ADULT ? IF.r : IB.i, backgroundColor: n6.A.colors.BACKGROUND_MOD_SUBTLE } : null;
}
function IY() {
    let e = Iz();
    return null != e ? { type: p.hp.ICON, ...e } : null;
}
function IX() {
    return IV() ? U.intl.string(U.t.piqs0o) : null;
}
var IH = n(438140);
let IW = [{ badgeType: p.Xi.NEW, dismissibleContent: eA.M.TINY_BRONCO_SETTINGS }],
    IK = [];
function IZ() {
    return (0, IH.Wt)() ? IW : IK;
}
var Iq = n(36149),
    IQ = n(207560),
    I$ = (((g = {}).LEGACY = "legacy"), (g.TINY_BRONCO = "tinyBronco"), g),
    IJ = (((m = {}).VERIFY = "verify"), (m.EDIT = "edit"), (m.INFO = "info"), m);
function I0(e, t) {
    let n = (0, f.bG)([lf.default], () => null != lf.default.getCurrentUser()),
        i = (0, IQ.fk)(),
        s = (0, IR.ZP)(),
        l = (0, Iq.Y2)(),
        r = IV();
    if (!n || (!i && !r) || t !== (r ? "tinyBronco" : "legacy")) return !1;
    switch (s) {
        case IR.M$.UNVERIFIED:
            return "verify" === e;
        case IR.M$.TEEN:
            return e === (r ? "info" : "verify");
        case IR.M$.ADULT:
            return e === (l ? "edit" : "info");
    }
}
var I1 = n(841365);
function I2() {
    let e = (0, IR.hD)();
    return (0, S.jsxs)(Q.E, {
        variant: "text-md/medium",
        children: [`${e} \u{2022} `, U.intl.format(I1.default.WM5adV, { handleOnHelpUrlHook: IR.M0 })],
    });
}
let I3 = {
        useTitle: () => IX() ?? U.intl.string(U.t["/52UYy"]),
        useSubtitle: Iw,
        useVariant: () => "secondary",
        useLeadingDecoration: IY,
        getDismissibleBadges: IZ,
        useTrailingDecoration: () => ({
            type: p.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: I2,
        }),
        useLabel: () => U.intl.string(U.t.bt75uw),
        onClick: function () {
            (0, sI.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, S.jsx)(e, { ...t });
            });
        },
    },
    I5 = (0, E.Tf)(h.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...I3, usePredicate: () => I0(IJ.EDIT, I$.LEGACY) }),
    I4 = (0, E.Tf)(h.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...I3,
        usePredicate: () => I0(IJ.EDIT, I$.TINY_BRONCO),
        useAriaLabel: () => U.intl.string(U.t.pBMSie),
    }),
    I6 = {
        useTitle: () => IX() ?? U.intl.string(U.t["/52UYy"]),
        useSubtitle: Iw,
        useLeadingDecoration: function () {
            let e = Iz();
            return null != e ? { type: p.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: IZ,
        useTrailingDecoration: () => ({ type: p.Ln.TEXT, text: (0, IR.hD)() }),
    },
    I8 = (0, E.v_)(h.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...I6, usePredicate: () => I0(IJ.INFO, I$.LEGACY) }),
    I7 = (0, E.v_)(h.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...I6,
        usePredicate: () => I0(IJ.INFO, I$.TINY_BRONCO),
    }),
    I9 = {
        useTitle: () => IX() ?? U.intl.string(U.t["/52UYy"]),
        useSubtitle: Iw,
        useVariant: () => "secondary",
        useLeadingDecoration: IY,
        getDismissibleBadges: IZ,
        useTrailingDecoration: () => ({ type: p.fq.TEXT, text: (0, IR.hD)() }),
        useLabel: function () {
            return (0, Iq.yM)() ? U.intl.string(U.t["9KiIz6"]) : U.intl.string(U.t.DVywUB);
        },
        onClick: IR.aP,
    },
    _e = (0, E.Tf)(h.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...I9, usePredicate: () => I0(IJ.VERIFY, I$.LEGACY) }),
    _t = (0, E.Tf)(h.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...I9,
        usePredicate: () => I0(IJ.VERIFY, I$.TINY_BRONCO),
    }),
    _n = [_e, I5, I8],
    _i = [_t, I4, I7],
    _s = (0, E.Tf)(h.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => U.intl.string(U.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: p.fq.TEXT, text: U.intl.string(U.t.qxk9zo) }),
        useLabel: () => U.intl.string(U.t.BleMPB),
        onClick: () => IO(),
    });
function _l(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function _r(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function _a(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: s } = e,
        [l, r] = T.useState(!1),
        a = l ? t : n(t);
    return (0, S.jsxs)(Z.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, S.jsx)(Q.E, { variant: "text-md/medium", children: a }),
            (0, S.jsx)(hR.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": l ? s : i,
                onClick: () => r(!l),
                text: l ? U.intl.string(U.t.fgq1gs) : U.intl.string(U.t.dcztdU),
            }),
        ],
    });
}
function _o() {
    let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.email);
    return null == e
        ? (0, S.jsx)(Q.E, { variant: "text-md/medium", children: U.intl.string(U.t["8SfTN/"]) })
        : (0, S.jsx)(_a, {
              text: e,
              censor: _r,
              revealLabel: U.intl.string(U.t["Zvx+yV"]),
              hideLabel: U.intl.string(U.t.nqTD4d),
          });
}
let _u = (0, E.Tf)(h.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => U.intl.string(U.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: p.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: _o }),
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
            return (t) => (0, S.jsx)(e, { ...t });
        });
    },
});
var _d = n(557722),
    _c = n(53516);
function _g() {
    let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, S.jsx)(Q.E, { variant: "text-md/medium", children: U.intl.string(U.t.I5kDqj) })
        : (0, S.jsx)(Z.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, S.jsx)(_a, {
                  text: t,
                  censor: _l,
                  revealLabel: U.intl.string(U.t.eY3xlT),
                  hideLabel: U.intl.string(U.t["jllbv+"]),
              }),
          });
}
let _m = (0, E.Tf)(h.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => U.intl.string(U.t.kerONq),
    useAriaLabel: function () {
        return null == (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.phone)
            ? U.intl.string(U.t["SfUuE+"])
            : U.intl.string(U.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: p.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: _g }),
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
                      return (t) => (0, S.jsx)(e, { reason: _d.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: _c.V },
              )
            : (0, sI.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, S.jsx)(e, { ...t });
              });
    },
});
function _A() {
    let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function _E() {
    let e = (0, Tx.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, f.bG)([lf.default], () => lf.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsx)(Q.E, { variant: "text-md/medium", children: i }),
            null != t &&
                (0, S.jsx)(sE.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, S.jsx)(i3.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: n6.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let _h = (0, E.Tf)(h.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => U.intl.string(U.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: p.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: _E,
        }),
        useLabel: () => U.intl.string(U.t.bt75uw),
        useAriaLabel: () => U.intl.string(U.t.JECa91),
        useSubtitle: () => (_A() ? U.intl.string(U.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: _A,
        onClick: function () {
            (0, sI.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, S.jsx)(e, { ...t });
            });
        },
    }),
    _x = (0, E.zZ)(h.X.ACCOUNT_INFO_CATEGORY, {
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
                            type: p.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            title: U.intl.string(U.t.tuGzBT),
                            text: U.intl.string(U.t.NAzplE),
                            button: { text: U.intl.string(U.t.lm1UKt), onClick: () => (0, IL.S)(e) },
                        }
                  : {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        title: U.intl.string(U.t["/3qnL/"]),
                        text: U.intl.string(U.t.qKs3vg),
                        button: { text: U.intl.string(U.t["7psymi"]), onClick: () => IO() },
                    };
        },
        buildLayout: () => [_h, _s, _u, _m, ..._n],
    });
var _p = n(398177);
let _S = (0, E.Tf)(h.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => U.intl.string(U.t["CIGa+7"]),
    useLabel: () => U.intl.string(U.t.bt75uw),
    useAriaLabel: () => U.intl.string(U.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, sI.openModal)((e) => (0, S.jsx)(_p.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var _T = n(200921);
let _f = [];
function _I() {
    _f = [];
}
class __ extends f.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return _f;
    }
}
let _N = new __(ts.h, {
    LOGOUT: _I,
    LOGIN_SUCCESS: _I,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        _f = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [..._f],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        _f = n;
    },
});
function _C() {
    let e = (0, f.cf)([_N], () => _N.getSessions());
    return T.useMemo(() => {
        let t = [...e],
            n = null,
            i = d2.default.getAuthSessionIdHash();
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
function _y(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? U.intl.string(U.t.TXCmfL) : ix()(e).fromNow();
}
var _b = n(176524),
    _v = n(646270),
    _j = n(738678),
    _O = n(489828);
function _L(e) {
    let { icon: t, label: n, subLabel: i, description: s, children: l, muted: r } = e;
    return (0, S.jsxs)(Z.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, S.jsx)(_b.A, { icon: t, color: r ? n6.A.colors.ICON_MUTED : "currentColor" }),
            (0, S.jsxs)(Z.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, S.jsxs)(Z.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, S.jsx)(Q.E, { variant: "text-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != i &&
                                (0, S.jsx)(Q.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != i &&
                                (0, S.jsx)(Q.E, { variant: "text-md/medium", color: "text-subtle", children: i }),
                        ],
                    }),
                    (0, S.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
                ],
            }),
            l,
        ],
    });
}
function _R(e) {
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
                            return { text: U.intl.string(U.t.cDHCNY), icon: dE.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: _v.u };
                        case "horizon os":
                            return { text: e, icon: _j.G };
                        default:
                            return { text: e, icon: dE.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: s, Icon: l, lastActive: t ? null : _y(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(ig.Vq);
    return (0, S.jsx)(_L, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, S.jsx)(n9.D, {
                className: _O.X,
                onClick: () => (0, _T.U0)(t.id_hash),
                "aria-label": U.intl.string(U.t.E4MJNt),
                children: (0, S.jsx)(uz.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function _D(e) {
    let { title: t, children: n } = e,
        i = T.useId();
    return (0, S.jsxs)(Z.B, {
        role: "group",
        "aria-labelledby": i,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, S.jsx)(N.D, { id: i, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, S.jsx)(Z.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
let _P = (0, E.E2)(h.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = _C();
            return null == e
                ? (0, S.jsx)(oC.y, {})
                : (0, S.jsx)(_D, {
                      title: U.intl.string(U.t.LLS19o),
                      children: (0, S.jsx)(_R, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    _G = (0, E.E2)(h.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = _C();
            return (0, S.jsx)(t6.D, {
                label: U.intl.string(U.t.Vij32M),
                description: U.intl.string(U.t.OTXyaf),
                children: (0, S.jsx)(v.$, {
                    onClick: () => (0, _T.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: U.intl.string(U.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = _C();
            return e.length > 0;
        },
    });
var _M = n(766928);
function _U() {
    return (0, S.jsx)(_L, {
        icon: _M.W,
        label: U.intl.string(U.t.iUa0sn),
        description: U.intl.format(U.t["044+8i"], {
            onClick: () =>
                (0, ng.openUserSettings)(h.X.ACCOUNT_PANEL, { analyticsLocations: [tw.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let _V = (0, E.E2)(h.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = _C(),
                t = (0, f.bG)([lf.default], () => lf.default.getCurrentUser());
            return (0, S.jsxs)(_D, {
                title: U.intl.string(U.t.xx1MWc),
                children: [
                    e.map((e) => (0, S.jsx)(_R, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, S.jsx)(_U, {}),
                ],
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = _C(),
                t = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    _k = (0, E.zZ)(h.X.SESSIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.mEndXM),
        useSubtitle: () => U.intl.string(U.t.b7ZpTM),
        initialize: () => {
            (0, _T.GY)();
        },
        buildLayout: () => [_P, _V, _G],
        useSearchTerms: () => [
            U.intl.string(U.t["+1h0k/"]),
            U.intl.string(U.t.LLS19o),
            U.intl.string(U.t.xx1MWc),
            U.intl.string(U.t.lSWsrd),
        ],
    }),
    _w = (0, E.t_)(h.X.SESSIONS_PANEL, {
        useTitle: () => U.intl.string(U.t.mEndXM),
        useObscuredNotice: oh.L,
        buildLayout: () => [_k],
    }),
    _F = (0, E.t0)(h.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [_w],
        initialize: () => {
            (0, _T.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = _C(),
                n = t.length + +(null != e);
            return {
                type: p.xn.TEXT,
                text: n > 0 ? U.intl.formatToPlainString(U.t.G7zwOk, { count: n }) : U.intl.string(U.t.MKDeyL),
            };
        },
    });
var _B = n(464477);
function _z(e) {
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
function _Y() {
    return (0, os.bG)([lf.default], () => {
        let e = lf.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var _X =
    (((A = {}).AVAILABLE = "available"),
    (A.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (A.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    A);
function _H() {
    let e = (0, os.bG)([lf.default], () => lf.default.getCurrentUser()?.verified);
    return _B.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function _W() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, os.bG)([sL.A, fn.A, lf.default], () =>
        lf.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? U.intl.string(U.t.hxf9fX)
                : U.intl.string(U.t["3iKih7"])
            : sL.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(I.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        fn.A.can(I.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? U.intl.string(U.t.OYTCUh)
                  : U.intl.string(U.t.HC8uSZ)
              : null,
    );
}
var _K = n(466034);
let _Z = (0, E.Tf)(h.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => U.intl.string(U.t.lQsY7B),
        useSubtitle: () => _W(!0),
        useDisabled: () => null !== _W(!0),
        useLabel: () => U.intl.string(U.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, f.bG)([d2.default], () => d2.default.hasTOTPEnabled()),
                t = _H() === _X.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, n8.A)({
                title: U.intl.string(U.t["D+aE7g"]),
                subtitle: U.intl.string(U.t.EA4ZEk),
                variant: "critical",
                confirmText: U.intl.string(U.t.N86XcP),
                onConfirm: () => Ij.A.disable(),
            }),
    }),
    _q = (0, E.zZ)(h.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => U.intl.string(U.t.RumMFo),
        useSubtitle: () => U.intl.string(U.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, f.bG)([d2.default], () => d2.default.hasTOTPEnabled()),
                t = _H() === _X.AVAILABLE;
            if (!e && t)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: U.intl.string(U.t.cTNUeD),
                            onClick: _K.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (_H()) {
                case _X.UNAVAILABLE_NO_CRYPTO:
                    return { type: p.lT.INLINE_NOTICE, noticeType: "info", text: U.intl.string(U.t.PhHhsj) };
                case _X.UNAVAILABLE_UNVERIFIED:
                    return { type: p.lT.INLINE_NOTICE, noticeType: "warning", text: U.intl.string(U.t.uggF7o) };
                case _X.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [_Z],
    });
var _Q = n(670492),
    _$ = n(32880),
    _J = n(663417),
    _0 = n(658675),
    _1 = n(900686);
function _2() {
    (0, sI.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, S.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    Ij.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, sI.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e("514567"), n.e("96179")]).then(
                                        n.bind(n, 518142),
                                    );
                                    return (n) => (0, S.jsx)(e, { ...n, password: t });
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
var _3 = n(858487);
function _5(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function _4() {
    let e = _Q.A.getVerificationKey();
    if ("" === e) return void _2();
    try {
        await Ij.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, lE.P0)({ text: e.body?.message ?? U.intl.string(U.t.F8FvUy), variant: "critical" });
    }
}
function _6(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = _5(t),
        s = T.useRef(null),
        l = (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)(_0.P, { checked: n }), (0, S.jsx)(Q.E, { variant: "text-md/normal", children: i })],
        });
    return uO.p5
        ? (0, S.jsx)(n9.D, {
              tag: "li",
              className: iE()(_3.aY, _3.vk),
              innerRef: s,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uO.C)(i), s?.current?.focus());
              },
              onClick: function () {
                  ((0, uO.C)(i), (0, lE.P0)({ text: U.intl.string(U.t.mGZ66D), variant: "success" }));
              },
              children: l,
          })
        : (0, S.jsx)("li", { className: _3.aY, children: l });
}
let _8 = (0, E.zZ)(h.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.fC9qV0),
        useSubtitle: () =>
            (0, f.bG)([_Q.A], () => _Q.A.getBackupCodes().length > 0)
                ? U.intl.format(U.t.tp7zEK, {})
                : U.intl.string(U.t.LoOi4S),
        usePredicate: _Y,
        buildLayout: () => [_7],
    }),
    _7 = (0, E.E2)(h.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.fC9qV0)],
        Component: function () {
            let e = (0, f.bG)([_Q.A], () => _Q.A.getBackupCodes()),
                t = T.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${_5(t)}` + (n ? ` (${U.intl.string(U.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, S.jsx)(v.$, { text: U.intl.string(U.t.Jc2myK), size: "sm", variant: "secondary", onClick: _2 })
                : (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsx)("ul", {
                              className: _3.E5,
                              children: e.map((e) => (0, S.jsx)(_6, { code: e }, e.code)),
                          }),
                          (0, S.jsxs)(l4.e, {
                              size: "sm",
                              children: [
                                  (0, S.jsx)(_1.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, S.jsx)(v.$, {
                                          text: U.intl.string(U.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: _$.DownloadIcon,
                                      }),
                                  }),
                                  (0, S.jsx)(v.$, {
                                      text: U.intl.string(U.t["3x962E"]),
                                      variant: "secondary",
                                      icon: _J.RefreshIcon,
                                      onClick: _4,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    _9 = (0, E.Tf)(h.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => U.intl.string(U.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = T.useState(!1),
                n = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : U.intl.format(e ? U.t["xDBk/I"] : U.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, S.jsx)(hR.Q, {
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
                    (0, S.jsx)(e, {
                        ...t,
                        handleSubmit: Ij.A.disableSMS,
                        title: U.intl.string(U.t.KLWnit),
                        children: U.intl.string(U.t["W0/Duf"]),
                    });
            }),
    }),
    Ne = (0, E.zZ)(h.X.SMS_AUTH_CATEGORY, {
        useTitle: () => U.intl.string(U.t.wuHuI5),
        useSubtitle: () => (0, f.bG)([lf.default], () => _z(lf.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()?.hasFlag(I.nhx.MFA_SMS) ?? !1),
                t = (0, f.bG)([lf.default], () => null != _z(lf.default.getCurrentUser()));
            if (!e)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "sms-setup-button",
                            text: U.intl.string(U.t.Age7yU),
                            onClick: Nt,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = _H(),
                t = _Y(),
                n = (0, f.bG)([d2.default], () => d2.default.hasTOTPEnabled());
            return e === _X.AVAILABLE && t && n;
        },
        buildLayout: () => [_9],
    });
function Nt() {
    let e = lf.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: _d.d.USER_SETTINGS_UPDATE, onAddedPhone: Ij.A.enableSMS }),
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
                        return (n) => (0, S.jsx)(e, { ...n, ...t });
                    },
                    { modalKey: _c.V },
                ));
        } else Ij.A.enableSMS();
}
var Nn = n(665671),
    Ni = n(442433),
    Ns = n(917136),
    Nl = n(976910),
    Nr = n(267255);
function Na(e) {
    let { credential: t } = e;
    return (0, S.jsxs)("li", {
        className: Nr.e,
        children: [
            (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(Q.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, S.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: U.intl.format(U.t["7JgxF5"], { lastUsed: _y(t.last_used) }),
                        }),
                ],
            }),
            (0, S.jsx)(sm.K, {
                icon: gL.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": U.intl.string(U.t["+nrTbK"]),
                onClick: (e) => {
                    (0, Ni.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, S.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let No = (0, E.zZ)(h.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.IBq4Y3),
        useSubtitle: () => U.intl.string(U.t.yK9edS),
        useHeaderDecoration: function () {
            if (_H() === _X.AVAILABLE)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "add-security-key-button",
                            text: U.intl.string(U.t["Tzs/fw"]),
                            icon: iq.j,
                            onClick: Nn.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (_H()) {
                    case _X.UNAVAILABLE_NO_CRYPTO:
                        return { type: p.lT.INLINE_NOTICE, noticeType: "info", text: U.intl.string(U.t.bWCGI9) };
                    case _X.UNAVAILABLE_UNVERIFIED:
                        return { type: p.lT.INLINE_NOTICE, noticeType: "warning", text: U.intl.string(U.t.uggF7o) };
                    case _X.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [Nu],
    }),
    Nu = (0, E.E2)(h.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [U.intl.string(U.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, f.cf)([Nl.A], () => ({
                hasFetchedCredentials: Nl.A.hasFetchedCredentials(),
                credentials: Nl.A.getCredentials(),
            }));
            return (T.useEffect(() => {
                t || Ns.JQ();
            }, [t]),
            t)
                ? (0, S.jsx)(Z.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, S.jsx)(Na, { credential: e }, e.id)),
                  })
                : (0, S.jsx)(oC.y, {});
        },
    }),
    Nd = (0, E.t_)(h.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => U.intl.string(U.t.m0FidJ),
        buildLayout: () => [No, _q, Ne, _8],
    }),
    Nc = (0, E.t0)(h.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = _Y();
            return { type: p.xn.TEXT, text: e ? U.intl.string(U.t.lQsY7B) : U.intl.string(U.t.WsUuTt) };
        },
        buildLayout: () => [Nd],
    }),
    Ng = (0, E.zZ)(h.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => U.intl.string(U.t["0iH2vc"]),
        buildLayout: () => [_S, Nc, _F],
    }),
    Nm = { [IR.M$.ADULT]: Ik.default.PMznGO, [IR.M$.TEEN]: Ik.default.qSkhZH, [IR.M$.UNVERIFIED]: Ik.default.vGxRDB },
    NA = [eA.M.TINY_BRONCO_NOTICE],
    NE = [];
function Nh() {
    ID.A.openUrl(IG.m5);
}
var Nx = n(308645),
    Np = n(555725),
    NS = n(855267);
let NT = (0, E.E2)(h.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["16r9jm"])],
        Component: NS.A,
    }),
    Nf = (0, E.zZ)(h.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [NT] }),
    NI = (0, E.t_)(h.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => U.intl.string(U.t["16r9jm"]),
        buildLayout: () => [Nf],
    }),
    N_ = (0, E.t0)(h.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => U.intl.string(U.t["16r9jm"]),
        useSubtitle: Np.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, Np._k)();
            return { type: p.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: p.xn.TEXT, text: (0, Np.aO)() };
        },
        initialize: () => {
            Nx.Yn();
        },
        buildLayout: () => [NI],
    }),
    NN = (0, E.zZ)(h.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (IV() ? U.intl.string(U.t.GI2mea) : null) ?? U.intl.string(U.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, IH.LH)(),
                t = (0, IR.ZP)(),
                [n, i] = (0, mv.kn)(e ? NA : NE);
            return e && null != n
                ? {
                      type: p.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "start",
                      text: U.intl.format(Nm[t], { handleOnBlogHook: Nh }),
                      onDismiss: () => i(mU.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [..._i, N_],
    });
var NC = n(738188),
    Ny = n(834981),
    Nb = n(987197),
    Nv = n(822585),
    Nj = n(840387),
    NO = n(961526),
    NL = n(513687);
let NR = (0, E.E2)(h.X.FAMILY_CENTER_SETTING, {
        Component: NO.p,
        useSearchTerms: () => [
            U.intl.string(NL.default.RZqaJn),
            U.intl.string(NL.default.bdBmqy),
            U.intl.string(NL.default["gVWG+6"]),
            U.intl.string(NL.default.ahKIJO),
            U.intl.string(NL.default["8SLtqb"]),
        ],
    }),
    ND = (0, E.zZ)(h.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [NR] }),
    NP = (0, E.t_)(h.X.FAMILY_CENTER_PANEL, {
        useTitle: () => U.intl.string(NL.default.RZqaJn),
        buildLayout: () => [ND],
    }),
    NG = (0, E.zZ)(h.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => U.intl.string(NL.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, Nb.f)(),
                t = (0, Nv.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, Ny.VT)();
            return T.useMemo(() => (n ? { badgeType: p.Xi.WARNING } : { badgeType: p.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [NM],
    }),
    NM = (0, E.t0)(h.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Ny.Li)() ? U.intl.string(NL.default.IcMQUP) : U.intl.string(NL.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, Nj.Z)(),
                t = (0, Ny.Li)();
            return e
                ? t
                    ? U.intl.string(NL.default.G8lHFU)
                    : U.intl.string(NL.default.uOLNEZ)
                : U.intl.string(NL.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, Nb.f)(),
                t = (0, Nv.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: p.Xy.ICON,
                      icon: NC.WarningIcon,
                      color: n6.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: n6.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [NP],
    });
var NU = n(425587),
    NV = n(662758);
function Nk(e) {
    if (e.body.code === I.t02.INVALID_PASSWORD) throw e;
    (0, l2.A)({ title: U.intl.string(U.t.LX0nT8), subtitle: e.body.message });
}
async function Nw() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = lf.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await NU.A.fetchTeams(!0)).body;
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
                  (0, S.jsx)(NV.default, {
                      ...t,
                      handleSubmit: (t) => (0, S9.U_)(t, e).then(I.tEg, Nk),
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
                  onConfirm: () => (0, S9.U_)("", !0),
              });
}
let NF = (0, E.Tf)(h.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => U.intl.string(U.t["gIpzR+"]),
        useSubtitle: () => U.intl.string(U.t.Bd6dOf),
        useLabel: () => U.intl.string(U.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => Nw(!0),
    }),
    NB = (0, E.Tf)(h.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => U.intl.string(U.t["p/Tjtp"]),
        useSubtitle: () => U.intl.string(U.t.YvDmKb),
        useLabel: () => U.intl.string(U.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => Nw(!1),
        usePredicate: () => {
            let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    Nz = (0, E.zZ)(h.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [NB, NF] }),
    NY = (0, E.t_)(h.X.ACCOUNT_PANEL, {
        useTitle: () => U.intl.string(U.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (Ij.A.clearBackupCodes(), (0, S9.Uo)());
            };
        },
        useObscuredNotice: oh.L,
        buildLayout: () => [_x, Ng, NN, NG, Nz],
    }),
    NX = (0, E.i4)(h.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["ldCE/p"]),
        icon: Av.UserIcon,
        buildLayout: () => [NY],
    });
var NH = n(176781),
    NW = n(274372),
    NK = n(572164),
    NZ = n(614584),
    Nq = n(696016);
let NQ = [Nq.zq, 25, 50, Nq.Y2, Nq.rv],
    N$ = (0, E.sN)(h.X.CLIPS_BITRATE, {
        useTitle: () => U.intl.string(U.t["8bZyov"]),
        useSubtitle: () => U.intl.string(U.t["h8DSx/"]),
        minValue: Nq.zq,
        maxValue: Nq.rv,
        useDefaultValue: () => Nq.Y2,
        getInitialValue: () => NW.Ay.getSettings().clipsQuality.bitratePercent ?? Nq.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = NW.Ay.getSettings();
            NZ.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: NQ,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, NK.E)(),
    });
var NJ = n(226640);
let N0 = (0, E.Hn)(h.X.CLIPS_FRAME_RATE, {
        useTitle: () => U.intl.string(U.t["2wScL1"]),
        useSubtitle: () => U.intl.string(U.t["Rf9+fy"]),
        useValue: () => (0, f.bG)([NW.Ay], () => NW.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = NW.Ay.getSettings();
            NZ.GS({ ...t, frameRate: e });
        },
        useOptions: NJ.Fz,
        useDisabled: () => !(0, NK.E)(),
    }),
    N1 = (0, E.E2)(h.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [U.intl.string(U.t.SIxrIF)],
        usePredicate: () => (0, f.bG)([NW.Ay], () => NW.Ay.getHardwareClassification()) === Nq.k9.BELOW_MINIMUM,
        Component: () => (0, S.jsx)(ln.A, { look: ln.k.WARNING, children: U.intl.string(U.t.SIxrIF) }),
    }),
    N2 = (0, E.Hn)(h.X.CLIPS_LENGTH, {
        useTitle: () => U.intl.string(U.t.OgfUio),
        useSubtitle: () => U.intl.string(U.t.H7j4tY),
        useValue: () => (0, f.bG)([NW.Ay], () => NW.Ay.getSettings().clipsLength),
        setValue: (e) => NZ.h$(e),
        useOptions: NJ.Qu,
        useDisabled: () => !(0, NK.E)(),
    }),
    N3 = (0, E.E2)(h.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [U.intl.string(U.t["Z+MfqT"])],
        Component: () => (0, S.jsx)(ln.A, { look: ln.k.INFO, children: U.intl.string(U.t["Z+MfqT"]) }),
    }),
    N5 = (0, E.Hn)(h.X.CLIPS_RESOLUTION, {
        useTitle: () => U.intl.string(U.t.aFudZJ),
        useSubtitle: () => U.intl.string(U.t.nIrkW5),
        useValue: () => (0, f.bG)([NW.Ay], () => NW.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = NW.Ay.getSettings();
            NZ.GS({ ...t, resolution: e });
        },
        useOptions: NJ.gF,
        useDisabled: () => !(0, NK.E)(),
    }),
    N4 = (0, E.zD)(h.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => U.intl.string(U.t["3zwNf6"]),
        useSubtitle: () => U.intl.string(U.t.m4Cjj9),
        useValue: () => (0, f.bG)([NW.Ay], () => NW.Ay.getSettings().remindersEnabled),
        setValue: (e) => NZ.Mt(e),
        useDisabled: () => !(0, NK.E)(),
    });
var N6 = n(268378);
let N8 = (0, E.zZ)(h.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => U.intl.string(N6.default.TGwzMe),
        buildLayout: () => [N1, N2, N0, N5, N$, N3, N4],
    }),
    N7 = (0, E.zD)(h.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, f.bG)([NW.Ay], () => NW.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => NZ.YP(e),
    }),
    N9 = (0, E.zD)(h.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, f.bG)([NW.Ay], () => NW.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => NZ.Uh(e),
    }),
    Ce = (0, E.zZ)(h.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, f.bG)([lf.default], () => {
                let e = lf.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [N7, N9],
    });
var Ct = n(417270),
    Cn = n(847825);
let Ci = (0, E.E2)(h.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [U.intl.string(U.t.pf54EU), U.intl.string(U.t["QyB/jK"])],
        Component: () => {
            let e = (0, f.bG)([sc.Ay], () => sc.Ay.getKeybindForAction(I.hCu.SAVE_CLIP, !0));
            th()(null != e, "Save clip keybind unset");
            let t = !(0, NK.E)(),
                n = T.useRef(null),
                i = T.useCallback(
                    (t) => {
                        iJ.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                s = T.useCallback(() => {
                    iJ.A.setKeybind({ ...e, shortcut: (0, sT.OH)(Nq.Ot) });
                }, [e]);
            return (0, S.jsx)(t6.D, {
                label: U.intl.string(U.t.pf54EU),
                description: U.intl.string(U.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, S.jsx)("div", {
                    className: Cn.g,
                    children: (0, S.jsx)(sS.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, S.jsxs)(S.Fragment, {
                            children: [
                                (0, S.jsx)(sE.m, {
                                    text: U.intl.string(N6.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, S.jsx)(sm.K, {
                                        icon: iQ.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": U.intl.string(N6.default.bUtubv),
                                        onClick: (e) => {
                                            (e.stopPropagation(), n.current?.toggleRecordMode());
                                        },
                                    }),
                                }),
                                (0, S.jsx)(sE.m, {
                                    text: U.intl.string(N6.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, S.jsx)(sm.K, {
                                        icon: Ct.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": U.intl.string(N6.default.Kyk1Tp),
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
    Cs = (0, E.E2)(h.X.CLIPS_SCREENSHOT_KEYBIND, {
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
            return (0, S.jsx)(t6.D, {
                label: U.intl.string(U.t["0U/hj7"]),
                description: U.intl.string(U.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, S.jsx)("div", {
                    className: Cn.g,
                    children: (0, S.jsx)(sS.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    Cl = (0, E.zD)(h.X.CLIPS_ENABLE, {
        useTitle: () => U.intl.string(U.t.h8rgrK),
        useSubtitle: () => U.intl.string(U.t["4Qw3NO"]),
        useValue: () => (0, NK.E)(),
        setValue: (e) => NZ.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    Cr = (0, E.zY)(h.X.CLIPS_GENERAL_CARD, { buildLayout: () => [Cl, Ci, Cs], headerSettingKey: Cl.key }),
    Ca = (0, E.zZ)(h.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => U.intl.string(U.t["rWKv+e"]),
        useSubtitle: () => U.intl.format(N6.default["dh7g+S"], { learnMoreLink: eC.A.getArticleURL(I.MVz.CLIPS) }),
        buildLayout: () => [Cr],
    }),
    Co = (0, E.E2)(h.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [U.intl.string(U.t.s4773E), U.intl.string(U.t.svjwGh)],
        Component: () => {
            let e = (0, f.bG)([NW.Ay], () => NW.Ay.getSettings().storageLocation),
                t = !(0, NK.E)(),
                n = T.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await nN.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && NZ.HU(e[0]);
                    } finally {
                        n.current = !1;
                    }
                }
            }
            return (0, S.jsx)(t6.D, {
                label: U.intl.string(U.t.s4773E),
                description: U.intl.string(U.t.svjwGh),
                layout: "vertical",
                children: (0, S.jsxs)(Z.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, S.jsx)(s_.k, {
                            fullWidth: !0,
                            value: e,
                            editable: !1,
                            disabled: t,
                            "aria-label": U.intl.formatToPlainString(U.t.iMONTj, { storageLocation: e }),
                        }),
                        (0, S.jsx)(v.$, {
                            variant: "secondary",
                            disabled: t,
                            onClick: i,
                            text: U.intl.string(N6.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    Cu = (0, E.zZ)(h.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => U.intl.string(N6.default["0Q+pdZ"]),
        buildLayout: () => [Co],
    }),
    Cd = (0, E.t_)(h.X.CLIPS_PANEL, {
        useTitle: () => U.intl.string(U.t.z2jK6X),
        usePredicate: sq.sw,
        buildLayout: () => [Ca, N8, Cu, Ce],
    }),
    Cc = (0, E.i4)(h.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.z2jK6X),
        icon: NH.x,
        buildLayout: () => [Cd],
    });
var Cg = n(254138),
    Cm = n(290595);
let CA = [];
var CE = n(153488),
    Ch = n(308528),
    Cx = n(171316),
    Cp = n(558001);
n(866945);
var CS = n(835002);
function CT() {
    let e = (0, Cx.uM)(),
        t = (0, Ny.vx)(),
        n = T.useCallback(() => {
            ((0, tH.default)(),
                Ch.A.openPrivateChannel({ recipientIds: t }),
                (0, Cp.N)(CS.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, CS.YX.LEARN_MORE));
        }, [t]),
        i = T.useCallback(() => {
            (0, Cp.N)(CS.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, CS.YX.VIEWED);
        }, []);
    return T.useMemo(() => {
        if (e)
            return {
                type: p.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: i,
                text: U.intl.format(NL.default.i284fU, {
                    hook: (e, t) => (0, S.jsx)(nc.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let Cf = (0, E.zD)(h.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => U.intl.string(U.t.AGDDkH),
    useSubtitle: () => U.intl.string(U.t.kyo3dJ),
    useValue: () => M.Q$.useSetting(),
    setValue: (e) => NZ.eQ({ allowVoiceRecording: e }),
});
var CI = n(157559),
    C_ = n(331887);
function CN() {
    let e = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
        t = (0, f.bG)([C_.A], () => C_.A.harvestType),
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
let CC = (0, E.Tf)(h.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => U.intl.string(U.t.qfFFos),
        useSubtitle: function () {
            let e = CN();
            if (e.allowed) return U.intl.format(U.t.NRI6vt, { article: eC.A.getArticleURL(I.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return U.intl.string(U.t.hIbRso);
                case "not_verified":
                    return U.intl.format(U.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, S.jsx)(
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
        useDisabled: () => !CN().allowed,
        useLoading: () => (0, f.bG)([C_.A], () => C_.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => U.intl.string(U.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...i } = e;
                    (0, sI.openModalLazy)(async () => {
                        let { default: e } = await n.e("292063").then(n.bind(n, 970018));
                        return (n) => (0, S.jsx)(e, { modalProps: n, onConfirm: t });
                    }, i);
                })({
                    onConfirm: (n) => {
                        ((t = !1),
                            (0, S9.$I)(n)
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
                                            ? CI.A.show({
                                                  title: U.intl.string(U.t.i2iul5),
                                                  body: U.intl.string(U.t["6Nmv4i"]),
                                              })
                                            : CI.A.show({
                                                  title: U.intl.string(U.t.OjbtDm),
                                                  body: U.intl.string(U.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || U.intl.string(U.t["0F5Jyt"]);
                                        CI.A.show({ title: U.intl.string(U.t.OjbtDm), body: t });
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
    Cy = (0, E.v_)(h.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => U.intl.string(U.t.D60Gfj),
        useSubtitle: () =>
            U.intl.format(U.t.dszICC, {
                onClickDisable: () => (0, ng.openUserSettings)(h.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, ng.openUserSettings)(h.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var Cb = n(641216);
let Cv = (0, uo.mj)({
    kind: "user",
    name: "2026-08-ad-topic-opt-out-client",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 }, 3: { enabled: !0 }, 4: { enabled: !0 }, 5: { enabled: !0 } },
});
function Cj() {
    let { enabled: e } = Cv.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var CO = n(884705);
function CL() {
    return (0, f.bG)([CO.A], () => CO.A.isTogglesDisabled());
}
function CR() {
    return !M.vf.useSetting();
}
function CD(e) {
    M.vf.updateSetting(!e);
}
function CP() {
    let e = CL(),
        t = M.H1.useSetting(),
        n = (0, Cx.uM)();
    return e || t || n;
}
let CG = (0, E.zD)(h.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => U.intl.string(U.t.CyLYKZ),
        useSubtitle: () =>
            U.intl.format(U.t["md5l4/"], { helpdeskArticle: eC.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !Cj(),
        useValue: CR,
        setValue: CD,
        useDisabled: CP,
        useSearchTerms: () => [U.intl.string(U.t.CyLYKZ)],
    }),
    CM = (0, E.zD)(h.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => U.intl.string(U.t.CyLYKZ),
        useSubtitle: () =>
            U.intl.format(U.t["2QFDU/"], { helpdeskArticle: eC.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: Cj,
        useValue: CR,
        setValue: CD,
        useDisabled: CP,
        useSearchTerms: () => [U.intl.string(U.t.CyLYKZ)],
    });
function CU() {
    return !M.H1.useSetting();
}
function CV(e) {
    M.H1.updateSetting(!e);
}
function Ck() {
    let e = CL(),
        t = (0, Cx.uM)();
    return e || t;
}
let Cw = (0, E.zD)(h.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => U.intl.string(U.t.sJYh5t),
        useSubtitle: () => U.intl.string(U.t.w4fvxe),
        usePredicate: () => !Cj(),
        useValue: CU,
        setValue: CV,
        useSearchTerms: () => [U.intl.string(U.t.VkS7Yd)],
        useDisabled: Ck,
    }),
    CF = (0, E.zD)(h.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => U.intl.string(U.t.sJYh5t),
        useSubtitle: () =>
            U.intl.format(U.t.cf9mvV, { helpdeskArticle: eC.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: Cj,
        useValue: CU,
        setValue: CV,
        useSearchTerms: () => [U.intl.string(U.t.VkS7Yd)],
        useDisabled: Ck,
    }),
    CB = (0, E.AK)(h.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: h.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = h5(2);
            return U.intl.format(U.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = h4();
            return { type: p.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, f.bG)([i9.Ay], () => i9.Ay.getGamesSeen(!1).some((e) => !(0, h$.n1)(e))) && (0, nf.xl)(),
    }),
    Cz = (0, E.gN)(h.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [CB] });
var CY = n(972737);
let CX = (0, E.zD)(h.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => U.intl.string(U.t.XuADY2),
        useSubtitle: () =>
            U.intl.format(U.t.FNqmmX, { helpdeskArticle: eC.A.getArticleURL(I.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, f.bG)([CE.A], () => CE.A.hasConsented(I.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, Cm.U)([I.YAq.USAGE_STATISTICS], []).catch(CY.i)
                : (0, CY.O)({
                      header: U.intl.string(U.t.OdPCbN),
                      body: U.intl.string(U.t.MGWabA),
                      confirmText: U.intl.string(U.t["D3+rU4"]),
                      cancelText: U.intl.string(U.t.kYpG0u),
                      onConfirm: () => (0, Cm.U)([], [I.YAq.USAGE_STATISTICS]).catch(CY.i),
                  });
        },
        useSearchTerms: () => [U.intl.string(U.t.XuADY2)],
        useDisabled: Cx.uM,
    }),
    CH = (0, E.zZ)(h.X.DATA_USAGE_CATEGORY, {
        useTitle: () => U.intl.string(U.t.QDAriI),
        useInlineNotice: CT,
        initialize: () => {
            CE.A.fetchedConsents || (0, Cm.Q)();
        },
        buildLayout: () => [Cy, CX, Cb._, Cw, CG, ...CA, Cf, CC, Cz],
    });
var CW = n(15762);
let CK = (0, E.zD)(h.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => U.intl.string(CW.default.F3llsQ),
    useSubtitle: () => U.intl.string(CW.default["6goWcz"]),
    useValue: M.Sy.useSetting,
    setValue: function (e) {
        (M.Sy.updateSetting(e),
            td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: h9.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function CZ() {
    let e = M.JG.useSetting();
    return (0, f.yK)(
        [gy.Ay, sL.A],
        () => {
            let t = new Set(e);
            return gy.Ay.getFlattenedGuildIds().filter((e) => null != sL.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let Cq = (0, E.AK)(h.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = CZ();
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
                    ((e = CZ()),
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
                                    icon: (0, S.jsx)(xg, { guild: t[0], size: hJ.CD }),
                                    shape: hJ.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, S.jsx)(xg, { guild: t[1], size: hJ.CD }), shape: hJ.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, S.jsx)(xg, { guild: t[0], size: hJ.CD }),
                                    shape: hJ.e0.SQUIRCLE,
                                },
                            });
            return { type: p.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: h.X.ACTIVITY_PRIVACY_PANEL,
    }),
    CQ = (0, E.gN)(h.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [Cq] }),
    C$ = (0, E.Qx)(h.X.PROFILE_PRIVACY_SETTING, {
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
            let i = (0, xr.gS)(t, e);
            null != i &&
                (0, sI.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("763786")]).then(
                        n.bind(n, 413201),
                    );
                    return (t) =>
                        (0, S.jsx)(e, {
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
    CJ = (0, E.zZ)(h.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.ul884f),
        useSubtitle: () =>
            U.intl.format(U.t.N4jSgR, {
                learnMoreUrl: eC.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [C$, CK, CQ],
    });
var C0 = n(952270),
    C1 = n(678538);
let C2 = { [eQ.tR.REAL_MONEY_GAMING]: C1.default.pmIitA },
    C3 = Object.keys(C2).map(Number),
    C5 = (0, E.E2)(h.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [U.intl.string(C1.default.foQaI1)],
        usePredicate: Cj,
        Component: function () {
            let e = T.useMemo(
                    () =>
                        C3.map((e) => ({
                            id: String(e),
                            value: e,
                            label: U.intl.string(C2[e]),
                            leading: C0.EyeSlashIcon,
                        })),
                    [],
                ),
                t = M.XZ.useSetting();
            return (0, S.jsx)(SQ.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(M.XZ.getSetting());
                    for (let e of C3) t.has(e) ? n.add(e) : n.delete(e);
                    M.XZ.updateSetting([...n]);
                },
                label: U.intl.string(C1.default.foQaI1),
                description: U.intl.format(C1.default["z/MfaY"], {
                    helpdeskArticle: eC.A.getArticleURL(I.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: U.intl.string(C1.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    C4 = (0, E.zZ)(h.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => U.intl.string(C1.default.XUj46U),
        usePredicate: Cj,
        buildLayout: () => [CF, CM, C5],
    });
var C6 = n(714763),
    C8 = n(814278),
    C7 = n(730852),
    C9 = n(913122),
    ye = n(977997),
    yt = n(144485);
async function yn(e, t) {
    if (e) {
        ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e });
        try {
            (await (0, C8.to)(1), t?.());
        } catch (t) {
            let e = new C9.LG(t);
            (ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                CI.A.show({
                    title: U.intl.string(U.t.R0RpRX),
                    body: e.getAnyErrorMessage() ?? U.intl.string(U.t.eAn6z2),
                }));
        }
    } else (ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e }), t?.());
}
async function yi(e) {
    let t,
        n,
        i =
            ((t = ye.A.getVoiceStateForUser(d2.default.getId())),
            (n = sj.A.getChannel(t?.channelId)),
            d2.default.getSessionId() === t?.sessionId && null != n && n.type !== I.rbe.GUILD_STAGE_VOICE
                ? n.id
                : null);
    null != i
        ? yt.A.openSecureFramesUpdateConfirmation({
              title: e ? U.intl.string(U.t.DRFN1B) : U.intl.string(U.t.q29xJz),
              subtitle: e ? U.intl.string(U.t.y015ZY) : U.intl.string(U.t.E66FQn),
              confirmText: U.intl.string(U.t.aTuFYT),
              onConfirm: async () => {
                  await yn(e, () => {
                      (C7.default.disconnect(), C7.default.selectVoiceChannel(i));
                  });
              },
          })
        : await yn(e);
}
n(603266);
let ys = (0, E.zD)(h.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => U.intl.string(U.t["opi/XK"]),
    useSubtitle: () => U.intl.format(U.t["/T+ZlP"], { helpArticle: (0, C8.Lu)() }),
    useValue: function () {
        return (0, f.bG)([C6.A], () => C6.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        yi(e);
    },
});
var yl = n(787392);
function yr() {
    return (0, f.yK)([yl.A], () => yl.A.getUserIds());
}
var ya = n(803306),
    yo = n(966327),
    yu = n(774156);
function yd(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(),
        s = (0, f.bG)([lf.default], () => lf.default.getUser(t)),
        l = uP.Ay.getFormattedName(s),
        r = T.useCallback(() => {
            (0, C8.kj)(t);
        }, [t]),
        a = T.useCallback(() => (0, Ti.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        T.useEffect(() => {
            (0, ya.wz)(t);
        }, [t]),
        (0, S.jsxs)("div", {
            className: yu.uW,
            children: [
                null != s && (0, S.jsx)(yo.A, { className: yu.my, user: s, size: b._3.SIZE_40 }),
                (0, S.jsxs)("div", {
                    className: yu.Qq,
                    children: [
                        (0, S.jsx)(n9.D, {
                            className: yu.Xh,
                            onClick: a,
                            children: (0, S.jsx)(Q.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: l,
                            }),
                        }),
                        (0, S.jsx)(Q.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: U.intl.format(U.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, S.jsx)(n9.D, { onClick: r, className: yu.Qz, children: (0, S.jsx)(sA.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function yc(e) {
    let { className: t, userId: n, verification: i, index: s } = e,
        l = (0, C8.tC)(i.timestamp),
        r = T.useCallback(() => {
            (0, C8.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, S.jsxs)("div", {
        className: t,
        children: [
            (0, S.jsxs)("div", {
                className: yu.Qq,
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: U.intl.format(U.t.N4qBBO, { index: s + 1 }),
                    }),
                    (0, S.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                ],
            }),
            (0, S.jsx)(n9.D, {
                className: yu.Kk,
                onClick: r,
                children: (0, S.jsx)(uz.P, { size: "md", color: n6.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function yg(e) {
    let { userId: t } = e,
        n = (0, f.yK)([yl.A], () =>
            W()(yl.A.getUserVerifiedKeys(t))
                .entries()
                .map((e) => {
                    let [t, n] = e;
                    return { verifiedKey: t, timestamp: n };
                })
                .sortBy((e) => -1 * e.timestamp)
                .value(),
        );
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsx)(yd, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, S.jsxs)(
                    T.Fragment,
                    {
                        children: [
                            (0, S.jsx)(yc, { className: yu.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, S.jsx)("div", { className: yu.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var ym = n(464946),
    yA = n(492422);
let yE = (0, E.E2)(h.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["5b3FNI"])],
        usePredicate: function () {
            let e = yr();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = yr();
            return (0, S.jsxs)(ym.h, {
                children: [
                    (0, S.jsx)(ym._, {
                        header: U.intl.string(U.t["5b3FNI"]),
                        description: U.intl.format(U.t.jrTSWU, { helpArticle: (0, C8.dc)() }),
                    }),
                    e.map((e) => (0, S.jsx)("div", { className: yA.A, children: (0, S.jsx)(yg, { userId: e }) }, e)),
                ],
            });
        },
    }),
    yh = (0, E.zZ)(h.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.bTwjaz),
        usePredicate: () => (0, e6.isDesktop)(),
        buildLayout: () => [ys, yE],
    }),
    yx = (0, E.t_)(h.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => U.intl.string(U.t.OAuOHD),
        buildLayout: () => [CH, C4, CJ, yh],
    }),
    yp = (0, E.i4)(h.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.OAuOHD),
        icon: Cg.m,
        buildLayout: () => [yx],
    });
var yS = n(476713);
let yT = (0, E.AK)(h.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.O65dzZ),
        useTitle: () => U.intl.string(U.t["f6kk+r"]),
        destinationKey: h.X.AUTHORIZED_APPS_CATEGORY,
    }),
    yf = (0, E.gN)(h.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [yT] });
var yI = n(875444);
function y_(e, t) {
    let n = (0, f.bG)([xF.default], () => xF.default.getFetchState()),
        i = (0, f.bG)([xF.default], () =>
            e ? xF.default.getNewestTokensForNonChildrenApplications() : xF.default.getNewestTokens(),
        ),
        s = T.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, yI.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        T.useEffect(() => {
            t || xv.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== xF.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: s }
    );
}
var yN = n(514479);
function yC() {
    return (0, S.jsxs)("div", {
        className: yN.d,
        children: [
            (0, S.jsx)(Q.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: yN.x,
                children: U.intl.string(U.t["+0U77d"]),
            }),
            (0, S.jsx)(Q.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: U.intl.format(U.t.V8wClM, {
                    helpdeskArticle: eC.A.getArticleURL(I.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
let yy = (0, E.E2)(h.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = y_(!0, !0);
        return e ? (0, S.jsx)(oC.y, {}) : (0, S.jsx)(yC, {});
    },
    useSearchTerms: () => [U.intl.string(U.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = y_(!0, !0);
        return e || 0 === t.length;
    },
});
function yb() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = y_(!0, !0);
    return !e && t.length > 0;
}
let yv = (0, E.zD)(h.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => U.intl.string(U.t.W8JtfT),
        useSubtitle: () => U.intl.string(U.t.a99KKy),
        useSearchTerms: () => [U.intl.string(U.t["Uv/eTx"])],
        useValue: () => M.Zk.useSetting(),
        setValue: (e) => M.Zk.updateSetting(e),
        usePredicate: yb,
    }),
    yj = (0, E.Qx)(h.X.IN_GAME_DMS_SETTING, {
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
        usePredicate: yb,
    });
function yO() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = y_(!0, !0);
    return {
        sortedGames: T.useMemo(() => e.toSorted((e, t) => oM.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var yL = n(306537),
    yR = n(40957);
function yD(e) {
    let { body: t, buttonText: n, onButtonClick: i, noticeType: s, iconAlign: l } = e;
    return (
        (0, eI.Ay)(() => {
            (0, Cp.N)(s, CS.YX.VIEWED);
        }),
        (0, S.jsx)(i$.w, {
            type: "info",
            iconAlign: l,
            children: (0, S.jsxs)(Z.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: "xs",
                children: [
                    (0, S.jsx)("span", { className: yR.r, children: t }),
                    (0, S.jsx)(Z.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: "xs",
                        fullWidth: !1,
                        children: (0, S.jsx)(v.$, { variant: "secondary", size: "sm", text: n, onClick: i }),
                    }),
                ],
            }),
        })
    );
}
function yP(e, t) {
    return {
        handleLearnMore: T.useCallback(() => {
            (t(), (0, Cp.N)(e, CS.YX.LEARN_MORE));
        }, [e, t]),
        handleConfirmAge: T.useCallback(() => {
            (ID.A.showAgeVerificationGetStartedModal({ entryPoint: yL.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Cp.N)(e, CS.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function yG() {
    let e,
        t = (0, Cx.uM)(),
        n = (0, IQ.fk)(),
        i = (0, Iq.b8)(),
        s = (0, Nj.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : s && (e = "teen"), null != e) && (0, IU.n)(IG.Vc)) return e;
    }
}
var yM = n(687123),
    yU = n(444802);
function yV() {
    let e = (0, yU.WX)();
    T.useEffect(() => {
        (0, Cp.N)(CS.YA.AGE_CONFIRMATION_NOTICE, CS.YX.VIEWED);
    }, []);
    let t = T.useCallback(() => {
            (window.open(eC.A.getArticleURL(e), "_blank"), (0, Cp.N)(CS.YA.AGE_CONFIRMATION_NOTICE, CS.YX.LEARN_MORE));
        }, [e]),
        n = T.useCallback(() => {
            (ID.A.showAgeVerificationGetStartedModal({ entryPoint: yL.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Cp.N)(CS.YA.AGE_CONFIRMATION_NOTICE, CS.YX.CONFIRM_AGE));
        }, []);
    return (0, S.jsx)(i$.w, {
        type: "info",
        message: U.intl.format(U.t.mFgsfg, { hook: (e, n) => (0, S.jsx)(nc.Anchor, { onClick: t, children: e }, n) }),
        role: "status",
        action: { text: U.intl.string(U.t.FDSSia), onClick: n },
    });
}
function yk() {
    let e = (0, IQ.aX)(yM.t.REACTIVE_CHECK),
        t = (0, Iq.b8)();
    return T.useMemo(() => {
        if (e && !t) return { type: p.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: yV };
    }, [e, t]);
}
var yw = n(323073),
    yF = n(386171),
    yB = n(96607);
let yz = (0, E.zD)(h.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => U.intl.string(U.t.gvC6q7),
        useSubtitle: () => U.intl.string(U.t.zirUC1),
        useValue: yF.hT,
        useDisabled: function () {
            let e = (0, yB.A)() ?? !0,
                t = (0, yw.sP)(),
                n = (0, Iq.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, yw.p5)() && e
                ? ID.A.showAgeVerificationGetStartedModal({ entryPoint: yL.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : M.Qe.updateSetting(e);
        },
    }),
    yY = (0, E.zD)(h.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => U.intl.string(U.t["L+yTsa"]),
        useSubtitle: () => U.intl.string(U.t["t6i/jW"]),
        useValue: yF.tI,
        useDisabled: function () {
            let e = (0, yB.A)() ?? !0,
                t = (0, yw.sP)(),
                n = (0, Iq.yM)();
            return T.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, yw.p5)() && e
                ? ID.A.showAgeVerificationGetStartedModal({ entryPoint: yL.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : M.Kg.updateSetting(e);
        },
    }),
    yX = (0, E.AK)(h.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.hOXd45),
        destinationKey: h.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    yH = (0, E.gN)(h.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [yX] });
n(667532);
var yW = n(390248),
    yK = n(632119),
    yZ = n(945276),
    yq = n(389737),
    yQ = n(566769);
function y$() {
    let e,
        t = (0, yZ.A)() ?? !0,
        n = (0, Cx.uM)(),
        i = (0, Cx.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, os.cf)([aO.A], () => aO.A.settings.textAndImages?.explicitContentSettings ?? (0, yK.C$)())),
        {
            explicitContentGuilds: (0, yK.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, yK.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, yK.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yW.hK)() && t.includes(eQ.TO.SHOW)
            ? ID.A.showAgeVerificationGetStartedModal({ entryPoint: yL.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yK.Jz)(e);
    }
    let o = [
            { value: eQ.TO.BLUR, label: U.intl.string(U.t.S49Uad) },
            { value: eQ.TO.BLOCK, label: U.intl.string(U.t["D/157Y"]) },
        ],
        u = [{ value: eQ.TO.BLUR, label: U.intl.string(U.t.S49Uad) }],
        d = { value: eQ.TO.SHOW, label: U.intl.string(U.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? U.intl.string(NL.default["6Af/cw"]) : void 0 };
    return (0, S.jsxs)(yq.E, {
        description: U.intl.string(U.t.Wnojv1),
        children: [
            (0, S.jsx)(yQ.A, {
                title: U.intl.string(U.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, S.jsx)(yQ.A, {
                title: U.intl.string(U.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, S.jsx)(yQ.A, {
                title: U.intl.string(U.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? U.intl.string(NL.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function yJ() {
    let e,
        t = (0, yZ.A)() ?? !0,
        n = (0, Cx.uM)(),
        i = (0, Cx.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, os.cf)([aO.A], () => aO.A.settings.textAndImages?.goreContentSettings ?? (0, yU.T4)())),
        {
            goreContentGuilds: (0, yU.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, yU.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, yU.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yW.hK)() && t.includes(eQ.TO.SHOW)
            ? ID.A.showAgeVerificationGetStartedModal({ entryPoint: yL.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yU.qY)(e);
    }
    let o = [
            { value: eQ.TO.BLUR, label: U.intl.string(U.t.S49Uad) },
            { value: eQ.TO.BLOCK, label: U.intl.string(U.t["D/157Y"]) },
        ],
        u = [{ value: eQ.TO.BLUR, label: U.intl.string(U.t.S49Uad) }],
        d = { value: eQ.TO.SHOW, label: U.intl.string(U.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? U.intl.string(NL.default["6Af/cw"]) : void 0 };
    return (0, S.jsxs)(yq.E, {
        description: U.intl.string(U.t.XgH9eh),
        children: [
            (0, S.jsx)(yQ.A, {
                title: U.intl.string(U.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, S.jsx)(yQ.A, {
                title: U.intl.string(U.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, S.jsx)(yQ.A, {
                title: U.intl.string(U.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? U.intl.string(NL.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var y0 = n(875162),
    y1 = n(636745);
let y2 = (0, E.E2)(h.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, yU.WX)(),
            t = T.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: U.intl.string(U.t.GYpoAq),
                        component: y$,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: U.intl.string(U.t["16/3Bi"]),
                        component: yJ,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, S.jsxs)(ym.h, {
            children: [
                (0, S.jsx)(ym._, {
                    header: U.intl.string(U.t["Hj/But"]),
                    description: U.intl.format(U.t.dliU4j, { learnMoreLink: eC.A.getArticleURL(e) }),
                }),
                (0, S.jsx)(y0.A, { tabs: t, orientation: "vertical", tabsClassName: y1.v }),
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
var y3 = n(639555),
    y5 = n(617641),
    y4 = n(546140),
    y6 = n(406935),
    y8 = n(594061);
let y7 = (0, E.zD)(h.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => U.intl.string(U.t.qFsx5q),
        useSubtitle: () => U.intl.format(U.t.lunaRv, { learnMoreLink: eC.A.getArticleURL(I.MVz.SAFETY_ALERTS) }),
        useValue: y4.L,
        setValue: function (e) {
            return y8.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = y6._t.create({ value: e });
                },
                y8.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, y5.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, y3.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, yZ.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    y9 = (0, E.zZ)(h.X.CONTENT_CATEGORY, {
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
                x = CT(),
                f =
                    ((s = (0, Cx.uM)()),
                    (l = (0, IQ.fk)()),
                    (r = (0, Iq.b8)()),
                    (a = (0, Nj.Z)()),
                    (o = yP(CS.YA.AGE_CONFIRMATION_NOTICE, IM)),
                    (u = yP(CS.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, IR.M0)),
                    (d = T.useCallback(() => {
                        (0, Cp.N)(CS.YA.AGE_CONFIRMATION_NOTICE, CS.YX.VIEWED);
                    }, [])),
                    (c = T.useCallback(() => {
                        (0, Cp.N)(CS.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CS.YX.VIEWED);
                    }, [])),
                    T.useMemo(() => {
                        if (!s && (0, IU.n)(IG.Vc)) {
                            if (l && !r)
                                return {
                                    type: p.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    iconAlign: "center",
                                    trackView: d,
                                    text: U.intl.format(Ik.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: {
                                        size: "sm",
                                        text: U.intl.string(Ik.default["cI+bc/"]),
                                        onClick: o.handleConfirmAge,
                                    },
                                };
                            if (a)
                                return {
                                    type: p.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    iconAlign: "start",
                                    trackView: c,
                                    text: U.intl.format(Ik.default.qbBkFI, {
                                        handleOnConfirmAgeHook: u.handleConfirmAge,
                                    }),
                                    button: { size: "sm", text: U.intl.string(U.t.hvVgAZ), onClick: u.handleLearnMore },
                                };
                        }
                    }, [l, s, a, r, u, c, d, o])),
                I =
                    ((e = (0, Nj.Z)()),
                    (t = (0, yU.WX)()),
                    (n = T.useCallback(() => {
                        (window.open(eC.A.getArticleURL(t), "_blank"),
                            (0, Cp.N)(CS.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CS.YX.LEARN_MORE));
                    }, [t])),
                    (i = T.useCallback(() => {
                        (0, Cp.N)(CS.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CS.YX.VIEWED);
                    }, [])),
                    T.useMemo(() => {
                        if (e)
                            return {
                                type: p.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: i,
                                text: U.intl.format(U.t.EUo0yj, {
                                    hook: (e, t) => (0, S.jsx)(nc.Anchor, { onClick: n, children: e }, t),
                                }),
                            };
                    }, [n, e, i])),
                _ =
                    ((g = (0, IQ.SJ)()),
                    (m = (0, Iq.b8)()),
                    (A = g && !m),
                    (E = T.useCallback(() => {
                        (ID.A.showAgeVerificationGetStartedModal({ entryPoint: yL.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, Cp.N)(CS.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, CS.YX.LEARN_MORE));
                    }, [])),
                    (h = T.useCallback(() => {
                        (0, Cp.N)(CS.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, CS.YX.VIEWED);
                    }, [])),
                    T.useMemo(() => {
                        if (A)
                            return {
                                type: p.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: h,
                                text: U.intl.format(U.t.OX4ybh, {
                                    hook: (e, t) => (0, S.jsx)(nc.Anchor, { onClick: E, children: e }, t),
                                }),
                            };
                    }, [E, A, h])),
                N = yk();
            return x ?? f ?? N ?? _ ?? I;
        },
        buildLayout: () => [y2, y7, yz, yY, yH],
    });
var be = n(923457),
    bt = n(750714);
let bn = (0, E.Qx)(h.X.DM_SPAM_SETTING, {
    useTitle: () => U.intl.string(U.t.puwSkY),
    useSubtitle: () => U.intl.string(U.t["+sXN3T"]),
    useValue: function () {
        let e = M.he.useSetting(),
            t = M.cj.useSetting(),
            n = (0, f.bG)([lf.default], () => lf.default.getCurrentUser()),
            i = (0, IQ.yv)(be.p.SPAM_FILTERS);
        return e !== eQ.he.DEFAULT_UNSET
            ? e
            : n?.nsfwAllowed === !1 && i
              ? eQ.he.FRIENDS_AND_NON_FRIENDS
              : (bt.xY.get(t) ?? eQ.he.NON_FRIENDS);
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
var bi = n(189883);
let bs = (0, E.zD)(h.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => U.intl.string(U.t["7x9dyE"]),
    useValue: function () {
        let e = M.FA.useSetting();
        return T.useMemo(() => (0, ia.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        M.FA.updateSetting(e ? I.yKI : I.yKI & ~I.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, Cx.uM)();
    },
});
var bl = n(665260);
let br = (0, E.zD)(h.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => U.intl.string(U.t.NfeuZ3),
        useValue: function () {
            let e = M.FA.useSetting(),
                t = T.useMemo(() => (0, ia.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = M.FA.getSetting();
            M.FA.updateSetting(e ? bl.UI(t, I.dzt.MUTUAL_FRIENDS) : bl.iE(t, I.dzt.MUTUAL_FRIENDS, I.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, Cx.uM)();
        },
    }),
    ba = (0, E.zD)(h.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => U.intl.string(U.t.qsMfsH),
        useSubtitle: () => U.intl.string(U.t["6DqAp0"]),
        useValue: function () {
            let e = M.FA.useSetting(),
                t = T.useMemo(() => (0, ia.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = M.FA.getSetting();
            M.FA.updateSetting(e ? bl.UI(t, I.dzt.MUTUAL_GUILDS) : bl.iE(t, I.dzt.MUTUAL_GUILDS, I.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, Cx.uM)();
        },
    }),
    bo = (0, E.FW)(h.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => U.intl.string(U.t.wTdS6S),
        buildLayout: () => [bs, br, ba],
    });
var bu = n(420825);
let bd = (0, E.zD)(h.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => U.intl.string(U.t["jK+wdr"]),
        useSubtitle: () => U.intl.string(U.t["RYh/pW"]),
        useValue: () => !(0, bu.q)(),
        setValue: function (e) {
            M.Zd.updateSetting(!e);
        },
    }),
    bc = (0, E.zZ)(h.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["5gxWrt"]),
        useSubtitle: function () {
            let { enabled: e } = bi.A.useConfig({ location: "Friend Request Setting" });
            return e ? U.intl.string(U.t.QVbF3l) : void 0;
        },
        useSubnavLabel: () => U.intl.string(U.t.fyA115),
        useInlineNotice: CT,
        buildLayout: () => [bo, bd],
    });
var bg = n(994500),
    bm = n(428678),
    bA = n(49229),
    bE = n(730134),
    bh = n(276573);
function bx(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, S.jsxs)("div", {
        className: bh.wx,
        children: [
            (0, S.jsx)("div", {
                className: bh.zc,
                children: i ? (0, S.jsx)(bm.K, {}) : (0, S.jsx)(C0.EyeSlashIcon, {}),
            }),
            (0, S.jsxs)("div", {
                className: bh.Qq,
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: U.intl.string(i ? U.t.PFOUKW : U.t["93ZDWE"]),
                    }),
                    (0, S.jsx)(Q.E, {
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
function bp(e) {
    let { userId: t, last: n } = e,
        i = (0, f.bG)([bg.A], () => bg.A.isBlocked(t)),
        s = (0, f.bG)([lf.default], () => lf.default.getUser(t)),
        [l, r] = T.useState(!1),
        a = T.useCallback(() => {
            (r(!0),
                i
                    ? bA.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : bA.A.unignoreUser(t, tw.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == s
        ? null
        : (0, S.jsxs)("div", {
              className: iE()(bh.nM, { [bh.fW]: n }),
              children: [
                  (0, S.jsxs)("div", {
                      className: bh.eF,
                      children: [
                          (0, S.jsx)(bE.A, { user: s, size: b._3.SIZE_40 }),
                          (0, S.jsxs)("div", {
                              className: bh.Qq,
                              children: [
                                  (0, S.jsx)(Q.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: s.globalName ?? s.username,
                                  }),
                                  (0, S.jsx)(Q.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != s.globalName ? s.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, S.jsx)(v.$, {
                      variant: "secondary",
                      text: U.intl.string(i ? U.t.XyHpKH : U.t["8wXU9B"]),
                      onClick: a,
                      loading: l,
                  }),
              ],
          });
}
function bS(e) {
    let { userIds: t, listType: n } = e,
        [i, s] = T.useState(5);
    return (0, S.jsx)(ym.h, {
        children: (0, S.jsxs)("div", {
            className: bh.Nr,
            children: [
                (0, S.jsx)(bx, { listType: n, numberOfUsers: t.length }),
                (0, S.jsx)("div", {
                    className: bh.jS,
                    children: t.slice(0, i).map((e, n) => (0, S.jsx)(bp, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, S.jsx)("div", {
                          className: bh.vM,
                          children: (0, S.jsx)(n9.D, {
                              onClick: function () {
                                  s((e) => e + 5);
                              },
                              className: bh.Qf,
                              children: (0, S.jsx)(Q.E, {
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
let bT = (0, E.E2)(h.X.BLOCKED_USERS, {
        useSearchTerms: () => [U.intl.string(U.t.PFOUKW)],
        usePredicate: () => (0, f.bG)([bg.A], () => bg.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, f.yK)([bg.A], () => bg.A.getBlockedIDs());
            return (0, S.jsx)(bS, { userIds: e, listType: "blocked" });
        },
    }),
    bf = (0, E.E2)(h.X.IGNORED_USERS, {
        useSearchTerms: () => [U.intl.string(U.t["93ZDWE"])],
        usePredicate: () => (0, f.bG)([bg.A], () => bg.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, f.yK)([bg.A], () => bg.A.getIgnoredIDs());
            return (0, S.jsx)(bS, { userIds: e, listType: "ignored" });
        },
    }),
    bI = (0, E.zZ)(h.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["+Iryf3"]),
        useSubtitle: () =>
            U.intl.format(U.t["0aNQo9"], { helpArticle: eC.A.getArticleURL(I.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [bT, bf],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, f.cf)([bg.A], () => ({
                hasBlockedUsers: bg.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: bg.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var b_ = n(22385),
    bN = n(556534),
    bC = n(111159),
    by = n(152056),
    bb = n(428031),
    bv = n(978433);
let bj = { label: () => U.intl.string(U.t["32u1Dx"]), value: b_.YG };
var bO = n(307863),
    bL = n(954225);
function bR() {
    return (0, bO.e)() ? U.intl.string(U.t.PMsfcH) : U.intl.string(U.t.RAQUSN);
}
function bD(e, t) {
    td.default.track(I.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let bP = (0, E.zD)(h.X.PERMISSIONS_DMS_SETTING, {
    useTitle: bR,
    useSubtitle: function () {
        let e = (0, bN.Tx)(),
            t = (0, bN.q9)(),
            n = (0, bO.e)();
        return e === b_.YG
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
        let e = (0, bN.Tx)(),
            t = M.$s.useSetting().includes(e),
            n = (0, bb.K)();
        return e === b_.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, Cx.uM)();
        return (0, bN.Tx)() === b_.YG && e;
    },
    setValue: function (e) {
        let t = b_.xk.getState().selectedGuildId;
        if (t === b_.YG) {
            var n;
            ((n = !e),
                (0, CY.O)({
                    header: U.intl.string(U.t["uUr+GR"]),
                    body: U.intl.string(U.t.hjGJBp),
                    confirmText: U.intl.string(U.t.gm1Vej),
                    cancelText: U.intl.string(U.t.p89ACt),
                    confirmButtonColor: l3.$n.Colors.BRAND,
                    onConfirm: function () {
                        (M.n6.updateSetting(n), bD(n, !1));
                    },
                    onCancel: function () {
                        (M.n6.updateSetting(n), M.$s.updateSetting(n ? sL.A.getGuildIds() : []), bD(n, !0));
                    },
                }));
        } else {
            let n = (0, ia.Tb)();
            (e ? n.delete(t) : n.add(t),
                M.$s.updateSetting(Array.from(n)),
                td.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: bL.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eO.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var bG = n(116774),
    bM = n(953298);
function bU(e, t) {
    td.default.track(I.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function bV() {
    return U.intl.string(U.t["3o2ojh"]);
}
let bk = (0, E.zD)(h.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: bV,
        useSubtitle: function () {
            let e = (0, bN.q9)(),
                t = eC.A.getArticleURL(I.MVz.MESSAGE_REQUESTS);
            return e
                ? U.intl.format(U.t.WpnWLc, { helpdeskArticle: t })
                : U.intl.format(U.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, bN.Tx)(),
                t = (0, bb.K)(),
                n = M.$s.useSetting().includes(e),
                i = (0, bG.s)(),
                s = (0, Cx.uM)(),
                l = M.YX.useSetting(),
                r = M.Zr.useSetting().includes(e);
            return !!i || (e === b_.YG && s ? !l : e === b_.YG ? !t && !l : !n && !r);
        },
        useDisabled: function () {
            let e = (0, bN.Tx)(),
                t = (0, Cx.uM)(),
                n = (0, bb.K)(),
                i = M.$s.useSetting().includes(e),
                s = (0, bG.s)();
            return e === b_.YG ? n || t || s : i || s;
        },
        setValue: function (e) {
            let t = b_.xk.getState().selectedGuildId;
            if (!e && (0, bM.w)())
                return void ID.A.showAgeVerificationGetStartedModal({ entryPoint: yL.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === b_.YG) {
                var n;
                ((n = !e),
                    (0, CY.O)({
                        header: U.intl.string(U.t.yAfu1p),
                        body: U.intl.string(U.t.Ry2z74),
                        confirmText: U.intl.string(U.t.gm1Vej),
                        cancelText: U.intl.string(U.t.p89ACt),
                        confirmButtonColor: l3.$n.Colors.BRAND,
                        onConfirm: function () {
                            (M.YX.updateSetting(n), bU(n, !1));
                        },
                        onCancel: function () {
                            (M.YX.updateSetting(n), M.Zr.updateSetting(n ? sL.A.getGuildIds() : []), bU(n, !0));
                        },
                    }));
            } else {
                let n = (0, ia.xo)();
                (e ? n.delete(t) : n.add(t),
                    M.Zr.updateSetting(Array.from(n)),
                    td.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: bL.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eO.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    bw = (0, E.E2)(h.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [bR(), bV()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, b_.xk)(),
                s = (0, f.bG)([gy.Ay], () => gy.Ay.getFlattenedGuildIds()),
                l = (0, f.bG)([sL.A], () => sL.A.getGuilds()),
                r =
                    ((e = M.$s.useSetting()),
                    (t = (0, bb.K)()),
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
                    by.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = b_.xk.getState().selectedGuildId;
                            "" === t && "" !== e && n === b_.YG && null != a
                                ? i(a)
                                : "" === e && n !== b_.YG && i(b_.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = T.useMemo(() => {
                    let e = [];
                    return (
                        e.push({
                            ...bj,
                            id: bj.value,
                            label: bj.label(),
                            leading: (0, S.jsx)("div", {
                                className: bv.KP,
                                children: (0, S.jsx)(bC.p, {
                                    size: "sm",
                                    color: "white",
                                    "aria-hidden": !0,
                                    className: bv.cl,
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
                                    leading: (0, S.jsx)(gV.Ay, {
                                        className: bv.cl,
                                        guild: n,
                                        size: gV.Ay.Sizes.SMALLER,
                                        active: !0,
                                    }),
                                });
                        }),
                        e
                    );
                }, [s, l]),
                u = n === b_.YG && r > 0;
            return (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsx)(SQ.Z, {
                        selectionMode: "single",
                        onSelectionChange: function (e) {
                            i(e);
                        },
                        value: n,
                        options: o,
                    }),
                    u &&
                        (0, S.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: bv.h_,
                            children: U.intl.format(U.t.uyBKps, {
                                count: r,
                                countHook: (e, t) =>
                                    (0, S.jsx)(
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
    bF = (0, E.E2)(h.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            let e = (0, bN.Tx)(),
                t = yG();
            return e === b_.YG && null != t;
        },
        Component: function () {
            let e = yG(),
                t = yP(CS.YA.AGE_CONFIRMATION_NOTICE, IM),
                n = yP(CS.YA.CONTENT_AND_SOCIAL_NOTICE, IR.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, S.jsx)(yD, {
                        noticeType: CS.YA.AGE_CONFIRMATION_NOTICE,
                        iconAlign: "center",
                        body: U.intl.format(Ik.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        buttonText: U.intl.string(Ik.default["cI+bc/"]),
                        onButtonClick: t.handleConfirmAge,
                    });
                case "teen":
                    return (0, S.jsx)(yD, {
                        noticeType: CS.YA.CONTENT_AND_SOCIAL_NOTICE,
                        iconAlign: "start",
                        body: U.intl.format(Ik.default["l+jt8J"], { handleOnConfirmAgeHook: n.handleConfirmAge }),
                        buttonText: U.intl.string(U.t.hvVgAZ),
                        onButtonClick: n.handleLearnMore,
                    });
                case void 0:
                    return null;
            }
        },
    }),
    bB = (0, E.zZ)(h.X.PERMISSIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.Y5GYcX),
        useSubnavLabel: () => U.intl.string(U.t.YUU0RF),
        useInlineNotice: function () {
            let e = CT(),
                t = yk();
            if ((0, bN.Tx)() === b_.YG) return e ?? t;
        },
        buildLayout: () => [bw, bP, bk, bF],
    }),
    bz = (0, E.zZ)(h.X.SPAM_FILTERS_CATEGORY, { useTitle: () => U.intl.string(U.t.Qwuoic), buildLayout: () => [bn] }),
    bY = (0, E.zZ)(h.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = yO();
            function t(e, t) {
                return (0, S.jsx)(
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
                let { sortedGames: e } = yO();
                return T.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, S.jsx)("img", {
                                src: G.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: hJ.CD,
                                height: hJ.CD,
                            }),
                            shape: hJ.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, S.jsx)("img", {
                                    src: G.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: hJ.YP,
                                    height: hJ.YP,
                                }),
                                shape: hJ.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: p.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [U.intl.string(U.t.YpCiMt)],
        initialize: () => {
            xv.A.fetch();
        },
        buildLayout: () => [yv, yj, yy, yf],
    }),
    bX = (0, E.t_)(h.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => U.intl.string(U.t.Cz07t8),
        buildLayout: () => [y9, bz, bB, bc, bY, bI],
    }),
    bH = (0, E.i4)(h.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.Cz07t8),
        icon: yS.l,
        buildLayout: () => [bX],
    });
var bW = n(782603),
    bK = n(899847),
    bZ = n(695515);
let bq = (0, E.Hn)(h.X.MOBILE_NOTIFICATION_DELAY, {
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
    bQ = (0, E.zD)(h.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => U.intl.string(U.t["btbS+Z"]),
        useSubtitle: () =>
            U.intl.format(U.t.Q5crhR, { onClick: () => (0, ng.openUserSettings)(h.X.TTS_PLAYBACK_RATE) }),
        useValue: M.on.useSetting,
        setValue: M.on.updateSetting,
    }),
    b$ = (0, E.Qx)(h.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
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
    bJ = h.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    b0 = (0, E.bd)(bJ, {
        useTitle: (e) => (e ? U.intl.string(U.t.RyimDk) : U.intl.string(U.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return t_(bJ, {
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
        buildLayout: () => [bq, bQ, b$],
    }),
    b1 = (0, E.zZ)(h.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => U.intl.string(U.t["31DySj"]),
        buildLayout: () => [b0],
    }),
    b2 = (0, E.zD)(h.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => U.intl.string(U.t.VH8AIJ),
        useSubtitle: () => U.intl.string(U.t["9K4qwX"]),
        useValue: function () {
            return (0, f.bG)([aw.A], () => !aw.A.getDisableUnreadBadge());
        },
        setValue: (e) => aX.default.setDisableUnreadBadge(!e),
    }),
    b3 = (0, E.zZ)(h.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.l6w3Vj),
        buildLayout: () => [b2],
    });
var b5 = n(840559),
    b4 = n(997187);
let b6 = (0, uo.mj)({
    kind: "user",
    name: "2026-09-update-email-settings-copy-subtext",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var b8 = n(723923);
let b7 = b8.px.map((e) =>
        (0, E.zD)(`${h.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, f.cf)([b4.A], () => b4.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, b5.CA)(e.category, t),
        }),
    ),
    b9 = (0, E.Tf)(h.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => U.intl.string(U.t.Ra9Pwk),
        useSubtitle: () => U.intl.string(U.t.iYjQ8X),
        useLabel: () => U.intl.string(U.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, f.cf)([b4.A], () => b4.A.getEmailSettings());
            return b8.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, b5.NI)(),
        useVariant: () => "critical-secondary",
    }),
    ve = (0, E.zZ)(h.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => U.intl.string(U.t["w/qqKK"]),
        useSubtitle: function () {
            let { enabled: e } = b6.useConfig({ location: "Email Settings Category" });
            return e ? U.intl.string(U.t.WViBDk) : void 0;
        },
        initialize: function () {
            let { initialized: e } = b4.A.getEmailSettings();
            e || (0, b5.cR)();
        },
        buildLayout: () => [...b7, b9],
    }),
    vt = (0, E.zD)(h.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t["/0WCll"]),
        useSubtitle: () => U.intl.string(U.t.wF9ih3),
        useValue: function () {
            return (0, f.bG)([aw.A], () => aw.A.getDesktopType()) !== I.nRU.NEVER;
        },
        setValue: (e) => aX.default.setDesktopType(e ? I.nRU.ALL : I.nRU.NEVER),
    });
var vn = n(832712),
    vi = n(543465),
    vs = n(790782);
let vl = (0, E.zD)(h.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => U.intl.string(U.t["k6m/si"]),
    useSubtitle: () => U.intl.string(U.t.LGynPs),
    useValue: () => (0, f.bG)([vi.Ay], () => vi.Ay.useNewNotifications),
    setValue: function (e) {
        (vn.A.setAccountFlag(h9.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (hl.w.set("turnedOffNewNotifications", !0),
                td.default.track(I.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: sL.A.getGuildsArray().filter(
                        (e) => vi.Ay.resolveGuildUnreadSetting(e) === vs.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, f.bG)(
            [lf.default, vi.Ay],
            () =>
                lf.default.getCurrentUser()?.isStaff() ||
                lf.default.getCurrentUser()?.isStaffPersonal() ||
                vi.Ay.useNewNotifications,
        ),
});
var vr = n(534654);
let va = (0, E.zD)(h.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => U.intl.string(U.t.z9h8Ym),
        useSubtitle: () => U.intl.string(U.t.TummoQ),
        useValue: () => (0, f.bG)([aw.A], () => aw.A.screenDowntimeReminder),
        setValue: (e) => aX.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, vr.A)(),
                t = (0, Ny.Du)();
            return e && t;
        },
    }),
    vo = (0, E.zD)(h.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => U.intl.string(U.t.onrAy7),
        useSubtitle: () => U.intl.string(U.t["/071J7"]),
        useValue: M.gY.useSetting,
        setValue: (e) => M.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, vr.A)(),
                t = (0, Ny.Du)();
            return e && t;
        },
    }),
    vu = (0, E.zD)(h.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.NjOMvh),
        useValue: M.oz.useSetting,
        setValue: function (e) {
            (M.oz.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h9.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [U.intl.string(U.t.hi4dSk)],
    }),
    vd = (0, E.zD)(h.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.sQQgFj),
        useValue: M.NR.useSetting,
        setValue: function (e) {
            (M.NR.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h9.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    vc = (0, E.zD)(h.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.FSNIvs),
        useValue: M.Yh.useSetting,
        setValue: function (e) {
            (M.Yh.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h9.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    vg = (0, E.zD)(h.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.xBLMhQ),
        useValue: M.T3.useSetting,
        setValue: function (e) {
            (M.T3.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h9.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var vm = n(815807);
let vA = (0, E.Hn)(h.X.REACTION_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: U.intl.string(U.t["9x/RtT"]), value: eQ.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: U.intl.string(U.t.fJAbQd), value: eQ.Tz.ONLY_DMS },
            { id: "disabled", label: U.intl.string(U.t["xu+UDU"]), value: eQ.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: M.Zp.useSetting,
        setValue: (e) => (0, vm.n4)(e, M.Zp.getSetting()),
    }),
    vE = (0, E.zD)(h.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t["k51K1+"]),
        useValue: M.Qr.useSetting,
        setValue: function (e) {
            (M.Qr.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h9.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    vh = (0, uo.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    vx = (0, E.zD)(h.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.G8NPz6),
        useValue: M.zS.useSetting,
        setValue: function (e) {
            (M.zS.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h9.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => vh.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    vp = (0, E.FW)(h.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.FEVRDV),
        buildLayout: () => [vc, vu, vd, vE, vx, vg, vA],
    }),
    vS = (0, E.zD)(h.X.TASK_BAR_FLASHING, {
        useTitle: () => U.intl.string(U.t.xSmFQG),
        useSubtitle: () => U.intl.string(U.t.bd4j4x),
        useValue: () => (0, f.bG)([aw.A], () => aw.A.taskbarFlash),
        setValue: (e) => aX.default.setTaskbarFlash(e),
        usePredicate: () => (0, nf.uF)(),
    }),
    vT = (0, E.zZ)(h.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => U.intl.string(U.t["/dp6yY"]),
        buildLayout: () => [vt, vS, vp, vl, vo, va],
    });
var vf = n(965957),
    vI = n(312671),
    v_ = n(235079);
let vN = (0, E.zD)(h.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = aF.A.useHolidaySoundpack();
        return null == e ? "" : U.intl.format(U.t["E/OyBr"], { soundpack: U.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, f.bG)([vI.A], () => vI.A.getSoundpack()),
            t = aF.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = aF.A.getHolidaySoundpack();
        (th()(null != t, "predicate should fail if no soundpack is available"), (0, vf.p)(e ? t : v_.i.CLASSIC));
    },
    usePredicate: aF.A.useIsEligible,
});
var vC = n(970931);
let vy = {
        useTitle: () => U.intl.string(U.t.jD1qzM),
        sound: "message1",
        useDisabled: vC.kB,
        useDisabledMessage: () => ((0, vC.kB)() ? U.intl.string(U.t.cIRG0s) : void 0),
    },
    vb = { useTitle: () => U.intl.string(U.t.XBrJT6), sound: "call_ringing" },
    vv = (0, E.zD)(h.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.TzjwV9),
        useSubtitle: () => U.intl.format(U.t.OOiGCM, { onClick: () => aK("message3") }),
        useValue: () =>
            (0, f.bG)([aw.A], () => aw.A.getNotifyMessagesInSelectedChannel() && !aw.A.getDisableAllSounds()),
        setValue: (e) => aX.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, f.bG)([aw.A], () => aw.A.getDisableAllSounds()),
    }),
    vj = (0, E.zD)(h.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => U.intl.string(U.t["2ZhCOd"]),
        useSubtitle: () => U.intl.string(U.t.EAKdPr),
        useValue: () => (0, f.bG)([aw.A], () => aw.A.getDisableAllSounds()),
        setValue: (e) => aX.default.toggleDisableAllSounds(e),
    }),
    vO = (0, E.D1)(h.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                aW();
            };
        },
        buildLayout: () => [aZ(vy), vv, aZ(vb), vj],
    }),
    vL = (0, E.AK)(h.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t["MMy+lm"]),
        useSearchTerms: () => [U.intl.string(U.t["MMy+lm"])],
        destinationKey: h.X.SOUNDS_CATEGORY,
    }),
    vR = (0, E.gN)(h.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [vL] }),
    vD = (0, E.zZ)(h.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.LweOYy),
        buildLayout: () => [vN, vO, vR],
    }),
    vP = (0, E.t_)(h.X.NOTIFICATIONS_PANEL, {
        useTitle: () => U.intl.string(U.t.HcoRu0),
        initialize: () => {
            null != bZ.A.getAgeGroup() || bZ.A.isLoading() || (bZ.A.canRefetch() && bK.Ay.initialPageLoad());
        },
        buildLayout: () => [vT, vD, b3, ve, b1],
    }),
    vG = (0, E.i4)(h.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.HcoRu0),
        icon: bW.BellIcon,
        buildLayout: () => [vP],
    }),
    vM = (0, E.WI)(h.X.USER_SECTION, {
        useTitle: () => U.intl.string(U.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [NX, yp, bH, vG, Cc],
    });
var vU = n(387758),
    vV = n(271866),
    vk = n(147964),
    vw = n(868511);
let vF = (0, E.zD)(h.X.APPLICATION_TEST_MODE, {
        useTitle: () => U.intl.string(U.t.erOqlh),
        useSubtitle: () => U.intl.string(U.t["52hMnD"]),
        usePredicate: M.Q_.useSetting,
        useValue: () => (0, f.bG)([vk.A], () => null != vk.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, sI.openModal)((e) => (0, S.jsx)(vw.A, { ...e })) : vV.cL();
        },
    }),
    vB = (0, E.zD)(h.X.DEVELOPER_MODE, {
        useTitle: () => U.intl.string(U.t.ObIb1Q),
        useSubtitle: () => U.intl.format(U.t["CY6q/Q"], { apiDocsUrl: I.X7G.API_DOCS }),
        useValue: M.Q_.useSetting,
        setValue: M.Q_.updateSetting,
        usePredicate: () => uO.p5,
    }),
    vz = (0, E.zZ)(h.X.DEVELOPER_CATEGORY, { buildLayout: () => [vB, vF] }),
    vY = (0, E.t_)(h.X.DEVELOPER_PANEL, { useTitle: () => U.intl.string(U.t["0BRxRp"]), buildLayout: () => [vz] }),
    vX = (0, E.i4)(h.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: vU.G,
        useTitle: () => U.intl.string(U.t["0BRxRp"]),
        buildLayout: () => [vY],
    });
var vH = n(70688),
    vW = n(830215);
let vK = (0, E.i4)(h.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => U.intl.string(U.t["2jxGer"]),
        icon: vH.DoorExitIcon,
        onClick: () => {
            (0, n8.A)({
                title: U.intl.string(U.t["2jxGer"]),
                subtitle: U.intl.string(U.t.SUnWBB),
                confirmText: U.intl.string(U.t["2jxGer"]),
                onConfirm: () => {
                    vW.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    vZ = (0, E.WI)(h.X.UTILITY_SECTION, {
        useTitle: () => U.intl.string(U.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [vX, vK],
    }),
    vq = (0, E.Hr)({ buildLayout: () => [Iv, vM, Eb, oA, S7, hq, vZ], analyticsKey: "user_settings" });
