n.d(t, { D: () => bU });
var i,
    l,
    s,
    r,
    a,
    o,
    u,
    d = n(419954),
    c = n(780964),
    g = n(550640),
    m = n(107384),
    A = n(477900),
    E = n(582128),
    h = n(17928),
    S = n(652215),
    T = n(346055),
    p = n(297264),
    x = n(364522),
    f = n(97808),
    I = n(778712),
    _ = n(821609),
    N = n(775602),
    C = n(320095),
    b = n(963852),
    y = n(763754),
    v = n(20851),
    j = n(95701),
    O = n(486020),
    L = n(885386),
    R = n(375708),
    D = n(345016);
let P = new j.nA({ id: "1337", guild_id: "1337", type: S.rbe.GUILD_TEXT, name: "preview" }),
    G = [
        { status: S.clD.IDLE, discriminator: "2" },
        { status: S.clD.DND, discriminator: "3" },
        { status: S.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, C.rh)({ ...(0, b.Ay)({ channelId: P.id, content: e }), state: S.cmJ.SENT, reactions: t });
}
var M = n(856488);
let V = (0, d.zD)(c.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => R.intl.string(R.t.TZ2hZH),
        useSubtitle: () => R.intl.string(R.t.Q7wgHc),
        useValue: () => L.D_.useSetting(),
        setValue: (e) => L.D_.updateSetting(e),
    }),
    k = (0, d.zD)(c.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => R.intl.string(R.t.XYvMIX),
        useSubtitle: () => R.intl.string(R.t.T0rbtM),
        useValue: L._z.useSetting,
        setValue: L._z.updateSetting,
    });
var w = n(100767),
    F = n(435558),
    B = n.n(F),
    z = n(935399),
    X = n(331322),
    Y = n(106236),
    H = n(834730),
    K = n(113494),
    W = n(782134),
    Z = n(54570),
    q = n(8880),
    Q = n(75804);
let J = B().debounce((e) => {
    (0, Z.zU)(e);
}, 250);
function $() {
    let [e, t] = E.useState(!1);
    return (
        (0, z.l0)(() => (0, Z.pr)()),
        (0, A.jsx)(_.$, {
            text: R.intl.string(R.t.SKNnqq),
            icon: e ? K.PauseIcon : W.PlayIcon,
            size: "sm",
            onClick: function () {
                if (e) {
                    (0, Z.pr)(), t(!1);
                    return;
                }
                (0, Z.AU)(
                    R.intl.string(R.t.PKaNJL),
                    !0,
                    void 0,
                    function () {
                        return t(!0);
                    },
                    function () {
                        return t(!1);
                    },
                ),
                    t(!0);
            },
        })
    );
}
let ee = (0, d.E2)(c.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [R.intl.string(R.t.lsW5Ev)],
        Component: function () {
            let e = (0, h.bG)([q.A], () => q.A.speechRate);
            return (0, A.jsxs)(X.B, {
                gap: 16,
                children: [
                    (0, A.jsx)(Y.A, {
                        label: R.intl.string(R.t.lsW5Ev),
                        description: R.intl.string(R.t.Ci4wMS),
                        markers: Q.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: J,
                        onValueRender: (e) => `x${e.toFixed(2)}`,
                        onMarkerRender: (e) =>
                            0 === e
                                ? (0, A.jsx)(H.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: R.intl.string(R.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, A.jsx)(H.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: R.intl.string(R.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, A.jsx)(H.E, {
                                          variant: "text-xs/medium",
                                          color: "text-feedback-positive",
                                          children: "x1.0",
                                      })
                                    : e % 1 == 0
                                      ? ""
                                      : void 0,
                    }),
                    (0, A.jsx)($, {}),
                ],
            });
        },
        usePredicate: () => w.$j,
    }),
    et = (0, d.zZ)(c.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => R.intl.string(R.t.XVR0Rb),
        buildLayout: () => [ee, k, V],
    }),
    en = (0, d.AK)(c.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.aTfeGK),
        destinationKey: c.X.APPEARANCE_PANEL,
    }),
    ei = (0, d.gN)(c.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [en] });
var el = n(955572);
let es = (0, d.zD)(c.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => R.intl.string(R.t.OCJg5f),
    useSubtitle: () => R.intl.string(R.t.HEO0s3),
    useValue: () => (0, h.bG)([N.Ay], () => N.Ay.desaturateUserColors),
    setValue: () => (0, el.YV)(),
});
var er = n(652525);
let ea = (0, d.zD)(c.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => R.intl.string(R.t["+Isihb"]),
        useSubtitle: () => R.intl.string(R.t.nNZ1Tz),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.enableCustomCursor),
        setValue: (e) => (0, el.ts)(e),
        usePredicate: () => (0, er.t)("EnableCustomCursorSetting"),
    }),
    eo = (0, d.zD)(c.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => R.intl.string(R.t["S3z+pV"]),
        useSubtitle: () => R.intl.string(R.t["3QuI9+"]),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isSwitchIconsEnabled),
        setValue: (e) => (0, el.Gm)(e),
        hasIcon: !0,
    });
var eu = n(554146);
let ed = (0, d.zD)(c.X.HIGH_CONTRAST_MODE, {
    useTitle: () => R.intl.string(R.t.aZlePv),
    useSubtitle: () => R.intl.string(R.t["v2qF8+"]),
    useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isHighContrastModeEnabled),
    setValue: (e) => (0, el.uh)(e ? N._1.HIGH : N._1.DEFAULT),
    getDismissibleBadges: () => [
        { badgeType: m.Xi.NEW, dismissibleContent: eu.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
    ],
});
var ec = n(406360),
    eg = n(742023);
let em = (0, d.Qx)(c.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => R.intl.string(R.t.nemtgW),
        useSubtitle: () => R.intl.string(R.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: m.Xi.BETA }),
        useOptions: function () {
            return E.useMemo(
                () => [
                    { name: R.intl.string(R.t.D5Fma9), desc: R.intl.string(R.t.Qj75ck), value: "no-limit" },
                    { name: R.intl.string(R.t.ldcGIH), desc: R.intl.string(R.t["+V/bDk"]), value: "standard" },
                ],
                [],
            );
        },
        usePredicate: function () {
            return (0, ec.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, el.FU)(e);
        },
        useValue: function () {
            return (0, h.bG)([eg.Ay], () => eg.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", R.intl.string(R.t["O/Gjvn"])],
    }),
    eA = (0, d.Hn)(c.X.OFFICIAL_MESSAGE_STYLE, {
        useTitle: () => R.intl.string(R.t.nC2XBl),
        useSubtitle: () => R.intl.string(R.t.a3IPrX),
        useOptions: () => [
            { id: "default", label: R.intl.string(R.t.ERaS6f), value: "default" },
            { id: "no_text_color", label: R.intl.string(R.t.JKfipk), value: "no_text_color" },
            { id: "no_gradient", label: R.intl.string(R.t.O2vBoY), value: "no_gradient" },
            { id: "hidden", label: R.intl.string(R.t["+loyQl"]), value: "hidden" },
        ],
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.officialMessageStyle),
        setValue: (e) => (0, el.w_)(e),
    }),
    eE = (0, d.Hn)(c.X.ROLE_STYLE, {
        useTitle: () => R.intl.string(R.t.uSOPWm),
        useSubtitle: () => R.intl.string(R.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: R.intl.string(R.t.eDdMzJ), value: "username" },
            { id: "dot", label: R.intl.string(R.t.rdmJp0), value: "dot" },
            { id: "hidden", label: R.intl.string(R.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.roleStyle),
        setValue: (e) => (0, el.IX)(e),
    });
(0, d.Qx)(c.X.ROLE_STYLE, {
    useTitle: () => R.intl.string(R.t.uSOPWm),
    useSubtitle: () => R.intl.string(R.t["86hjzQ"]),
    useOptions: () => [
        { name: R.intl.string(R.t.YEOEi6), value: "username" },
        { name: R.intl.string(R.t.mQaro3), value: "dot" },
        { name: R.intl.string(R.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, h.bG)([N.Ay], () => N.Ay.roleStyle),
    setValue: (e) => (0, el.IX)(e),
});
let eh = (0, d.sN)(c.X.SATURATION, {
    useTitle: () => R.intl.string(R.t["5PWWCY"]),
    useSubtitle: () => R.intl.string(R.t.xf5S6P),
    markers: S.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => N.Ay.saturation,
    asValueChanges: (e) => (0, el.HU)(e),
});
var eS = n(964486),
    eT = n(839214),
    ep = n(502229),
    ex = n(975571);
let ef = (0, eT.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    eI = (0, d.zD)(c.X.SYNC_FORCED_COLORS, {
        useTitle: () => R.intl.string(R.t.cguiec),
        useSubtitle: () => R.intl.format(R.t.GwEVE2, { learnMoreLink: ex.A.getArticleURL(S.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, h.bG)([N.Ay], () => N.Ay.syncForcedColors);
            return (
                (0, eS.Ay)(() => {
                    ef.setState({ syncEnabled: N.Ay.syncForcedColors });
                }),
                ef.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = ef.getState();
            if (null != t) {
                clearTimeout(t), ef.setState({ syncEnabled: e, updateTimeout: null });
                return;
            }
            if (e === N.Ay.syncForcedColors) return void ef.setState({ syncEnabled: e });
            let n = setTimeout(() => {
                (0, el.D3)(e), ef.setState({ updateTimeout: null });
            }, 150);
            ef.setState({ syncEnabled: e, updateTimeout: n });
        },
        usePredicate: () => (0, ep.D)(),
    }),
    e_ = (0, d.zZ)(c.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => R.intl.string(R.t.JqvyiY),
        buildLayout: () => [eh, es, ed, ea, eI, em, eE, eA, eo, ei],
    });
var eN = n(397438),
    eC = n(355097);
function eb(e) {
    return (0, h.bG)([eN.A], () =>
        (function (e) {
            switch (e) {
                case eC._A.REDUCED_MOTION:
                    return R.intl.format(R.t["1dT9V4"], {});
                case eC._A.REDUCED_MOTION_STICKERS:
                    return R.intl.string(R.t["2ExvRu"]);
                default:
                    return;
            }
        })(eN.A.getAppliedOverrideReasonKey(e)),
    );
}
let ey = (0, d.zD)(c.X.ANIMATE_EMOJIS, {
        useTitle: () => R.intl.string(R.t.iIaOlc),
        useSubtitle: () => eb("animateEmoji"),
        useValue: () => L.Sf.useSetting(),
        setValue: (e) => L.Sf.updateSetting(e),
    }),
    ev = (0, d.zD)(c.X.ANIMATE_GIFS, {
        useTitle: () => R.intl.string(R.t.wqsK7q),
        useSubtitle: () => eb("gifAutoPlay"),
        useValue: () => L.kt.useSetting(),
        setValue: (e) => L.kt.updateSetting(e),
    });
var ej = n(823894);
let eO = (0, d.Qx)(c.X.ANIMATE_STICKERS, {
        useTitle: () => R.intl.string(R.t.sBHIh0),
        useSubtitle: () => eb("animateStickers"),
        useOptions: () => [
            { name: R.intl.string(R.t["Xp+X2U"]), value: ej.BJ.ALWAYS_ANIMATE },
            { name: R.intl.string(R.t.IlLT7e), desc: R.intl.string(R.t.bIW9Tl), value: ej.BJ.ANIMATE_ON_INTERACTION },
            { name: R.intl.string(R.t.IGu8x3), value: ej.BJ.NEVER_ANIMATE },
        ],
        useValue: () => L.S0.useSetting(),
        setValue: (e) => L.S0.updateSetting(e),
    }),
    eL = (0, d.zD)(c.X.REDUCED_MOTION, {
        useTitle: () => R.intl.string(R.t.b3XBzg),
        useSubtitle: () => R.intl.format(R.t.XqvxJc, { helpdeskArticle: ex.A.getArticleURL(S.MVz.REDUCED_MOTION) }),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
        setValue: (e) => (0, el.qz)(e ? "reduce" : "no-preference"),
    }),
    eR = (0, d.zD)(c.X.SYNC_REDUCED_MOTION, {
        useTitle: () => R.intl.string(R.t.oL55A6),
        useValue: () => (0, h.bG)([N.Ay], () => "auto" === N.Ay.rawPrefersReducedMotion),
        setValue: (e) => (0, el.qz)(e ? "auto" : N.Ay.systemPrefersReducedMotion),
    }),
    eD = (0, d.zZ)(c.X.MOTION_CATEGORY, {
        useTitle: () => R.intl.string(R.t.e3TR1b),
        buildLayout: () => [eL, eR, ev, ey, eO],
    });
var eP = n(688810),
    eG = n(259065),
    eU = n(701974);
let eM = (0, d.zD)(c.X.DISPLAY_NAME_STYLES, {
    useTitle: () => R.intl.string(eU.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, eP.Ay)();
        return R.intl.format(eU.default.aEax6P, {
            onClickOpenModal() {
                (0, eG.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, h.bG)([N.Ay], () => N.Ay.displayNameStylesEnabled),
    setValue: (e) => (0, el.Dm)(e),
});
function eV(e) {
    return `${e.toFixed(0)}px`;
}
let ek = (0, d.sN)(c.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => R.intl.string(R.t.rT3Pq5),
        useSubtitle: () => R.intl.string(R.t.LXUhen),
        markers: S.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: S.hH7.FONT_SIZES["0"],
        maxValue: S.hH7.FONT_SIZES[S.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => S.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => N.Ay.fontSize,
        onValueRender: eV,
        onMarkerRender: eV,
        asValueChanges: (e) => (0, el.XS)(e),
    }),
    ew = (0, d.zD)(c.X.UNDERLINE_LINKS, {
        useTitle: () => R.intl.string(R.t.OLZFB8),
        useSubtitle: () => R.intl.string(R.t.DIX3ke),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.alwaysShowLinkDecorations),
        setValue: (e) => (0, el.kI)(e),
    }),
    eF = (0, d.zZ)(c.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t["bxh/R7"]),
        buildLayout: () => [ek, ew, eM],
    });
var eB = n(873298);
let ez = (0, d.Qx)(c.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => R.intl.string(R.t["C/5V0A"]),
        useSubtitle: () => R.intl.string(R.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: R.intl.string(R.t["7iegX4"]), value: eB.NS.COMPACT },
            { name: R.intl.string(R.t.bBvAEH), value: eB.NS.DEFAULT },
            { name: R.intl.string(R.t["4cuYHx"]), value: eB.NS.COZY },
        ],
        useValue: () => L.Xi.useSetting(),
        setValue: (e) => {
            e !== eB.NS.UNSET_UI_DENSITY && L.Xi.updateSetting(e);
        },
    }),
    eX = "cozy",
    eY = "compact",
    eH = (0, d.Qx)(c.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => R.intl.string(R.t.nKRoPv),
        useSubtitle: () => R.intl.string(R.t.QntEEG),
        useSearchTerms: () => [R.intl.string(R.t.ZEoGMd)],
        useOptions: () => [
            { name: R.intl.string(R.t.Jqj4cZ), value: eX },
            { name: R.intl.string(R.t["1JNcPS"]), value: eY },
        ],
        useValue: () => (L.hH.useSetting() ? eY : eX),
        setValue: (e) => {
            L.hH.updateSetting(e === eY), (0, el.AC)();
        },
    });
var eK = n(381941);
function eW(e) {
    return `${e.toFixed(0)}px`;
}
let eZ = (0, d.sN)(c.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => R.intl.string(R.t.Q6lKkg),
    useSubtitle: () => R.intl.string(R.t.p7eUrb),
    markers: eK.qh,
    stickToMarkers: !0,
    minValue: eK.qh["0"],
    maxValue: eK.qh[eK.qh.length - 1],
    useDefaultValue: () => (L.hH.useSetting() ? eK.y5 : eK.ES),
    useExternalValue: () => (0, h.bG)([N.Ay], () => N.Ay.messageGroupSpacing),
    getInitialValue: () => N.Ay.messageGroupSpacing,
    onValueRender: eW,
    onMarkerRender: eW,
    asValueChanges: (e) => {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, el.AC)(e);
        }
    },
});
var eq = n(775121),
    eQ = n(723702);
let eJ = (0, d.sN)(c.X.APPEARANCE_ZOOM, {
        usePredicate: () => eQ.isPlatformEmbedded,
        useTitle: () => R.intl.string(R.t.i19n5L),
        useSubtitle: () => R.intl.format(R.t["x9PK/3"], { modKey: eq.A.modKey }),
        markers: S.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: S.hH7.ZOOM_SCALES["0"],
        maxValue: S.hH7.ZOOM_SCALES[S.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => S.hH7.ZOOM_DEFAULT,
        getInitialValue: () => N.Ay.zoom,
        useExternalValue: () => (0, h.bG)([N.Ay], () => N.Ay.zoom),
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        setValue: (e) => (0, el.Qp)(e),
        useSearchTerms: () => [R.intl.string(R.t.ip0uSf)],
    }),
    e$ = (0, d.zZ)(c.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.VKYWk8),
        buildLayout: () => [ez, eH, eZ, eJ],
    }),
    e0 = (0, d.t_)(c.X.ACCESSIBILITY_PANEL, {
        useTitle: () => R.intl.string(R.t.G0neg7),
        buildLayout: () => [eF, e$, e_, eD, et],
        decoration: {
            type: m.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = L.hH.useSetting(),
                    t = L.jW.useSetting(),
                    n = E.useMemo(
                        () => [
                            U(
                                R.intl.formatToPlainString(R.t.BknJRT, {}),
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
                            U(R.intl.formatToPlainString(R.t["4rDfgM"], { link: "https://discord.com/accessibility" })),
                        ],
                        [t],
                    ),
                    i = (0, h.bG)([N.Ay], () => N.Ay.messageGroupSpacing);
                return (0, A.jsx)(T.M, {
                    children: (0, A.jsxs)("section", {
                        "aria-label": R.intl.string(R.t.RC22qg),
                        children: [
                            (0, A.jsx)(p.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: D.Vf,
                                children: R.intl.string(R.t.RC22qg),
                            }),
                            (0, A.jsxs)(x.Ip, {
                                className: D.VH,
                                children: [
                                    (0, A.jsx)("ol", {
                                        className: D.DZ,
                                        style: { gap: i },
                                        "aria-label": R.intl.string(R.t.xfjsEV),
                                        children: n.map((t) =>
                                            (0, A.jsx)(
                                                "li",
                                                {
                                                    children: (0, A.jsx)(v.A, {
                                                        message: t,
                                                        channel: P,
                                                        compact: e,
                                                        author: { ...(0, y.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, A.jsxs)("div", {
                                        className: D.Jb,
                                        children: [
                                            (0, A.jsx)("div", {
                                                className: D.HD,
                                                children: G.map((e) => {
                                                    let { status: t, discriminator: n, mobile: i = !1 } = e;
                                                    return (0, A.jsx)(
                                                        f.eu,
                                                        {
                                                            status: t,
                                                            isMobile: i,
                                                            size: I._3.SIZE_32,
                                                            src: O.Ay.getDefaultAvatarURL(void 0, n),
                                                            "aria-label": R.intl.string(R.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, A.jsx)(_.$, {
                                                text: R.intl.string(R.t["2RHHgz"]),
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
    e1 = (0, d.i4)(c.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.G0neg7),
        icon: g.c,
        useMenu: M.A,
        buildLayout: () => [e0],
    });
n(321073);
var e2 = n(650809),
    e3 = n(477782),
    e6 = n(636537),
    e5 = n(228366),
    e4 = n(74396),
    e8 = n(93055),
    e7 = n(269880),
    e9 = n(55619),
    te = n(351906),
    tt = n(174459),
    tn = n(812993),
    ti = n(189081);
let tl = (0, d.zD)(c.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, h.bG)([ti.A], () => ti.A.hasLibraryApplication()),
        useTitle: () => R.intl.string(R.t.fi3UQN),
        useSubtitle: () => R.intl.string(R.t["8mYp37"]),
        useValue: () => !L.l_.useSetting(),
        setValue: (e) => L.l_.updateSetting(!e),
    }),
    ts = (0, d.zZ)(c.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => R.intl.string(R.t["8/udY0"]),
        buildLayout: () => [tl],
    });
var tr = n(284009),
    ta = n.n(tr),
    to = n(199966),
    tu = n(963935);
function td(e) {
    let { title: t } = e;
    return t;
}
function tc(e) {
    let { useTitle: t, settingKey: n, formatter: i, index: l } = e,
        s = t();
    return "string" == typeof s ? i({ title: s, index: l, key: n }) : s;
}
function tg(e) {
    let { setting: t, formatter: n, index: i } = e;
    return () => (0, A.jsx)(tc, { useTitle: t.useTitle, settingKey: t.key, formatter: n, index: i }, t.key);
}
function tm(e) {
    return e.type === tu.Z6.LIST;
}
function tA(e, t) {
    let { limit: n = 2, formatter: i = td } = t ?? {};
    ta()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: l, accessibleDirectory: s } = (0, to._)(),
        r = l.get(e) ?? s.get(e);
    ta()(
        null != r && (r.type === tu.Z6.ACCORDION || tm(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = tm(r) ? (r.collapseAfter ?? 0) : 0,
        o = r.layout;
    return E.useMemo(() => {
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
                return R.intl.format(R.t["3H9tCW"], { settingOneHook: tg({ setting: t[0], formatter: i, index: 0 }) });
            else if (2 === t.length)
                return R.intl.format(R.t.MWryo6, {
                    settingOneHook: tg({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tg({ setting: t[1], formatter: i, index: 1 }),
                });
            else
                return R.intl.format(R.t.a00b5G, {
                    settingOneHook: tg({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tg({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tg({ setting: t[2], formatter: i, index: 2 }),
                });
        return 1 === l
            ? R.intl.format(R.t.O8vNbS, { settingOneHook: tg({ setting: t[0], formatter: i, index: 0 }) })
            : 2 === l
              ? R.intl.format(R.t["acXG/W"], {
                    settingOneHook: tg({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tg({ setting: t[1], formatter: i, index: 1 }),
                })
              : R.intl.format(R.t["5+ldWc"], {
                    settingOneHook: tg({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tg({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tg({ setting: t[2], formatter: i, index: 2 }),
                });
    }, [n, a, o, i]);
}
var tE = n(951260);
let th = (0, d.zD)(c.X.ENABLE_APPS_BUTTON, {
        useTitle: () => R.intl.string(R.t.ZTH4j4),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, el.n8)({ appsButtonEnabled: e }),
    }),
    tS = {
        useTitle: () => R.intl.string(R.t["I/5LyL"]),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isSubmitButtonEnabled),
        setValue: () => (0, el.Xt)(),
    },
    tT = (0, d.zD)(c.X.ENABLE_SEND_BUTTON, tS),
    tp = (0, d.zD)(c.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...tS,
        usePredicate: () => !(0, tE.n)("EnableSendButtonOutsideExperiment"),
    }),
    tx = (0, d.zD)(c.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => R.intl.string(R.t.WggFoO),
        useSubtitle: () => R.intl.string(R.t.XpErGj),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, el.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, h.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    tf = (0, d.zD)(c.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => R.intl.string(R.t.YErWkD),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, el.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, h.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    tI = (0, d.zD)(c.X.ENABLE_GIF_BUTTON, {
        useTitle: () => R.intl.string(R.t.k7oNEz),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isGifButtonEnabled),
        setValue: (e) => (0, el.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, h.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    t_ = (0, d.zD)(c.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => R.intl.string(R.t.Ar0krj),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, el.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, h.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    tN = (0, d.Qx)(c.X.EXPRESSION_PICKER_FORMAT, {
        useTitle: () => R.intl.string(R.t.AxRAWt),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.expressionPickerFormat),
        setValue: (e) => (0, el.n8)({ expressionPickerFormat: e }),
        useOptions: function () {
            return [
                { name: R.intl.string(R.t.k86Soy), desc: R.intl.string(R.t.bSGTTZ), value: N.IG.FLEXIBLE },
                { name: R.intl.string(R.t.bjwSOn), desc: R.intl.string(R.t.We36HX), value: N.IG.CONDENSED },
                { name: R.intl.string(R.t.FDIKss), desc: R.intl.string(R.t["rclZL/"]), value: N.IG.HIDDEN },
            ];
        },
    }),
    tC = (0, d.FW)(c.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => R.intl.string(R.t["V9/cNN"]),
        buildLayout: () => [tN, tx, tf, tI, t_],
    }),
    tb = (0, d.bd)(c.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? R.intl.string(R.t.IwVGQs) : R.intl.string(R.t.cFNDh5);
        },
        useCollapsedSubtitle: () => tA(c.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, tE.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [tT, th, tC],
    });
var ty = n(565645);
let tv = (0, d.zD)(c.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => R.intl.string(R.t["79qal8"]),
        useSubtitle: () =>
            R.intl.format(R.t.GejoQK, { emojiHook: (e, t) => (0, A.jsx)(ty.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: L.j7.useSetting,
        setValue: L.j7.updateSetting,
    }),
    tj = (0, d.zD)(c.X.CHAT_GAME_MENTIONS_AUTOCOMPLETE, {
        useTitle: () => R.intl.string(R.t.c0oFDw),
        useValue: L.BQ.useSetting,
        setValue: L.BQ.updateSetting,
    }),
    tO = (0, d.zD)(c.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => R.intl.string(R.t.AqGrEI),
        useValue: L.SI.useSetting,
        setValue: (e) => {
            tt.default.track(S.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: S.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                L.SI.updateSetting(e);
        },
    });
var tL = n(793574);
let tR = (0, d.zD)(c.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => R.intl.string(R.t["d+It2U"]),
        useValue: L.ML.useSetting,
        setValue: (e) => {
            tt.default.track(S.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: S.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [tL.A.TEXT_AND_IMAGES],
            }),
                L.ML.updateSetting(e);
        },
    }),
    tD = (0, d.zZ)(c.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Ob7VMB),
        useSearchTerms: () => [R.intl.string(R.t.onqU6o)],
        buildLayout: () => [tO, tv, tR, tj, tp, tb],
    });
var tP = n(526162),
    tG = n(793943),
    tU = n(792656),
    tM = n(830543),
    tV = n(785007),
    tk = n(806932),
    tw = n(915089),
    tF = n(10392),
    tB = n(82498),
    tz = n(174197),
    tX = n(202541);
let tY = (0, d.E2)(c.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [R.intl.string(R.t.gnwxvT)],
    Component: function () {
        let e = (0, tw.GV)(),
            { ref: t, ...n } = (0, tV._u)({ orientation: "horizontal", labelledBy: e }),
            i = (0, h.bG)([tP.A], () => tP.A.isUpsellPreview);
        return (
            (0, z.Ay)(() => {
                i &&
                    (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: tX.e.APP_ICON_UPSELL,
                        location_stack: [tL.A.USER_SETTINGS],
                    }),
                    (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, [tL.A.USER_SETTINGS], () =>
                        (0, tB.uq)(tX.e.APP_ICON_UPSELL),
                    ));
            }),
            (0, A.jsx)("div", {
                ...n,
                ref: t,
                children: (0, A.jsx)(X.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, A.jsx)(tk.m, { disabled: i, size: tz.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function tH() {
    (0, tG.nf)(tG.HP.APP_ICON), (0, tM.default)();
}
function tK() {
    return (0, A.jsx)(tU.A, {
        subscriptionTier: tX.pe.TIER_2,
        defaultTextOverride: R.intl.string(R.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: S.ZSU.BUTTON_CTA, objectType: S.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let tW = (0, d.zZ)(c.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => R.intl.string(R.t.RPh2ou),
        useSubtitle: () => R.intl.string(R.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, h.bG)([tP.A], () => tP.A.isUpsellPreview);
            return E.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: m.UV.BUTTON,
                        text: R.intl.string(R.t["6acvnZ"]),
                        onClick: tH,
                    }),
                    e && t.push({ id: "upsell-button", type: m.UV.STRONGLY_DISCOURAGED_CUSTOM, button: tK }),
                    { type: m.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [tY],
    }),
    tZ = (0, d.AK)(c.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.UDr3Iy),
        useSearchTerms: () => [R.intl.string(R.t.UDr3Iy)],
        destinationKey: c.X.ACCESSIBILITY_PANEL,
    }),
    tq = (0, d.gN)(c.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [tZ] });
var tQ = n(452027),
    tJ = n(243721),
    t$ = n(976860),
    t0 = n(16236),
    t1 = n(635233),
    t2 = n(749884),
    t3 = n(22277);
let t6 = ex.A.getArticleURL(S.MVz.FAVORITES_GUILD);
function t5() {
    let { analyticsLocations: e } = (0, eP.Ay)(tL.A.USER_SETTINGS_FAVORITES),
        t = E.useCallback(() => {
            (0, t1.mv)("settings_page"), (0, t$.uh)(S.YYv), (0, tM.default)();
        }, []);
    return (0, A.jsx)(eP.f5, {
        value: e,
        children: (0, A.jsx)(tQ.D, {
            label: R.intl.string(t3.default.OT1NK5),
            description: R.intl.format(t3.default.GR2KOG, { helpCenterLink: t6 }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, A.jsxs)(X.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, A.jsx)(_.$, { variant: "secondary", text: R.intl.string(t3.default["7WwLnr"]), onClick: t }),
                    (0, A.jsx)(tU.A, {
                        subscriptionTier: tX.pe.TIER_2,
                        defaultTextOverride: R.intl.string(t3.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let t4 = (0, d.E2)(c.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, e8.TW)("FavoritesGuildToggle").isExperimentEnabled,
        useSearchTerms: () => [R.intl.string(t3.default.OT1NK5)],
        Component: function () {
            let { hasAccess: e } = (0, e8.TW)("FavoritesGuildVisibilitySetting"),
                t = (0, t2.A)(!1);
            return e
                ? (0, A.jsx)(tJ.d, {
                      checked: t,
                      description: R.intl.format(t3.default.GR2KOG, { helpCenterLink: t6 }),
                      onChange: t0.kG,
                      label: R.intl.string(t3.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, A.jsx)(t5, {});
        },
    }),
    t8 = (0, d.zD)(c.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => R.intl.string(R.t.U47N1p),
        useValue: L.hD.useSetting,
        setValue: L.hD.updateSetting,
    }),
    t7 = (0, d.zD)(c.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => R.intl.string(R.t.VP11No),
        useValue: L.X6.useSetting,
        setValue: L.X6.updateSetting,
    }),
    t9 = (0, d.FW)(c.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => R.intl.string(R.t["9nyle0"]),
        buildLayout: () => [t8, t7],
    }),
    ne = (0, d.zD)(c.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => R.intl.string(R.t["5bK9vw"]),
        useValue: L.rs.useSetting,
        setValue: L.rs.updateSetting,
    }),
    nt = (0, d.zD)(c.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => R.intl.string(R.t["zge/fP"]),
        useValue: L.jW.useSetting,
        setValue: L.jW.updateSetting,
    });
var nn = n(939249),
    ni = n(817281),
    nl = n(766075);
let ns = (0, d.zD)(c.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => R.intl.string(R.t.JgjNG3),
        useSubtitle: () => {
            if (!L.hH.useSetting())
                return R.intl.format(R.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, A.jsx)(
                            nn.D,
                            {
                                tag: "a",
                                onClick: () => (0, nl.openUserSettings)(c.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !L.hH.useSetting(),
        useValue: () => {
            let e = (0, h.bG)([eg.Ay], () => eg.Ay.displayCompactAvatars);
            return !L.hH.useSetting() || e;
        },
        setValue: (e) => {
            ni.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    nr = (0, d.Hn)(c.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => R.intl.string(R.t.QgwmVz),
        useOptions: () => [
            { value: S.P6Q.ON_CLICK, id: S.P6Q.ON_CLICK, label: R.intl.string(R.t["KFH/me"]) },
            { value: S.P6Q.ALWAYS, id: S.P6Q.ALWAYS, label: R.intl.string(R.t.Pe1RbL) },
            { value: S.P6Q.IF_MODERATOR, id: S.P6Q.IF_MODERATOR, label: R.intl.string(R.t.K5VTBE) },
        ],
        useValue: L.gs.useSetting,
        setValue: L.gs.updateSetting,
    }),
    na = (0, d.zD)(c.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => R.intl.string(R.t.AInv5m),
        useValue: L.SY.useSetting,
        setValue: L.SY.updateSetting,
    }),
    no = (0, d.zZ)(c.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.OIgYlQ),
        useSearchTerms: () => [R.intl.string(R.t["/VQax8"])],
        buildLayout: () => [t9, ne, nt, nr, na, ns, t4, tq],
    });
var nu = n(753806),
    nd = n(145331);
let nc = (0, d.Qx)(c.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
        useTitle: () => R.intl.string(R.t.VkoLsy),
        useSearchTerms: () => [R.intl.string(R.t["t4+fbe"])],
        useOptions: function () {
            return [
                { name: R.intl.string(R.t.E9JM4J), value: 0 },
                { name: R.intl.string(R.t["Kr+lPi"]), value: 1 },
            ];
        },
        useValue: () => +!!L.Hu.useSetting(),
        setValue: (e) => {
            let t = 1 === e;
            t ? nu.A.cleanUpPrivateChannelSearchState() : nu.A.cleanUpSearchState({ type: S.I4_.DMS }),
                (0, nd._k)({
                    prevIsCrossDMSettingEnabled: L.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: nd.vy.USER_SETTINGS,
                }),
                L.Hu.updateSetting(t);
        },
    }),
    ng = (0, d.zZ)(c.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => R.intl.string(R.t["5h0QOP"]),
        buildLayout: () => [nc],
    });
var nm = n(574381);
let nA = (0, d.zD)(c.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => R.intl.string(R.t.IxjaoF),
        useValue: function () {
            return (0, h.bG)([te.A], () => {
                let { autoToggle: e } = te.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            e9.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return nm.Av;
        },
    }),
    nE = (0, d.zD)(c.X.STREAMING_STREAMER_MODE, {
        useTitle: () => R.intl.string(R.t.TGNg6T),
        useSubtitle: () => R.intl.string(R.t["4nXLnE"]),
        useValue: function () {
            return (0, h.bG)([te.A], () => {
                let { enabled: e } = te.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            e9.A.update({ enabled: e });
        },
    });
var nh = n(77729),
    nS = n(589051),
    nT = n(588857),
    np = n(999834);
let nx = [],
    nf = (0, d.Hn)(c.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => R.intl.string(R.t.VCDSLW),
        useSearchTerms: () => [R.intl.string(R.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, np.b_)(),
                t = (0, nS.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return E.useMemo(() => {
                let e = [];
                for (let [t, n] of Object.entries(nT.A))
                    null != n.streamerModeLabel &&
                        (null == n.predicate || n.predicate()) &&
                        e.push({ id: t, value: t, label: n.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, h.bG)([te.A], () => te.A.getSettings().disabledOverlayWidgets ?? nx);
        },
        setValue: (e) => e9.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    nI = (0, d.zD)(c.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => R.intl.string(R.t.LSBUGR),
        useValue: () =>
            (0, h.bG)([te.A], () => {
                let { hidePersonalInformation: e } = te.A.getSettings();
                return e;
            }),
        setValue: (e) => e9.A.update({ hidePersonalInformation: e }),
    }),
    n_ = (0, d.zD)(c.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => R.intl.string(R.t.uWBOri),
        useValue: () =>
            (0, h.bG)([te.A], () => {
                let { hideInstantInvites: e } = te.A.getSettings();
                return e;
            }),
        setValue: (e) => e9.A.update({ hideInstantInvites: e }),
    }),
    nN = (0, d.zD)(c.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => R.intl.string(R.t.OrqYDP),
        useValue: () =>
            (0, h.bG)([te.A], () => {
                let { disableSounds: e } = te.A.getSettings();
                return e;
            }),
        setValue: (e) => e9.A.update({ disableSounds: e }),
    }),
    nC = (0, d.zD)(c.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.sUAbLd),
        useValue: () =>
            (0, h.bG)([te.A], () => {
                let { disableNotifications: e } = te.A.getSettings();
                return e;
            }),
        setValue: (e) => e9.A.update({ disableNotifications: e }),
    }),
    nb = (0, d.zD)(c.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => R.intl.string(R.t["iA81+a"]),
        useSubtitle: () => R.intl.string(R.t.P4vj0h),
        useValue: () =>
            (0, h.bG)([te.A], () => {
                let { enableContentProtection: e } = te.A.getSettings();
                return e;
            }),
        setValue: (e) => e9.A.update({ enableContentProtection: e }),
        usePredicate: () => nh.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    ny = (0, d.FW)(c.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.xYhOEh),
        buildLayout: () => [nI, n_, nN, nC, nb, nf],
    }),
    nv = (0, d.zZ)(c.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => R.intl.string(R.t.S5GfOW),
        buildLayout: () => [nE, nA, ny],
    });
var nj = n(147248),
    nO = n(141343),
    nL = n(665267),
    nR = n(414133),
    nD = n(98908);
let nP = (0, d.Hn)(c.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => R.intl.string(R.t.Q7mm4g),
        useSearchTerms: () => [R.intl.string(nD.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: R.intl.string(R.t["hrS/Pc"]), value: eB.tI.GUILD },
            { id: "personal", label: R.intl.string(R.t.mlvXIq), value: eB.tI.PERSONAL },
        ],
        useValue: () => L.zY.useSetting(),
        setValue: L.zY.updateSetting,
        usePredicate: () => (0, nR.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    nG = (0, d.zD)(c.X.SYNC_PROFILE_THEMES, {
        useTitle: () => R.intl.string(R.t.C00w4l),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, el.M1)(),
    });
var nU = n(284016),
    nM = n(363195);
let nV = (0, d.zD)(c.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => R.intl.string(R.t["/B+kEV"]),
    useSearchTerms: () => [R.intl.string(R.t.Ksh3ik)],
    useValue: function () {
        return (0, h.bG)([nU.A], () => !1 !== nU.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        return (0, h.bG)([nM.A], () => nM.A.isSameAsDeviceThemeEnabled());
    },
    setValue: function (e) {
        var t;
        let n = nM.A.theme,
            i = nj.A.gradientPreset?.id ?? null,
            l = L.eh.getSetting()?.customUserThemeSettings != null;
        (t = S.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            e5.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: l },
            }),
            ni.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var nk = n(393284);
let nw = (0, d.AK)(c.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.nhVQDJ),
        useSearchTerms: () => [R.intl.string(R.t.nhVQDJ)],
        destinationKey: c.X.ACCESSIBILITY_PANEL,
    }),
    nF = (0, d.gN)(c.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [nw] }),
    nB = (0, d.zZ)(c.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, h.bG)([N.Ay], () => N.Ay.useForcedColors)
                ? {
                      type: m.lT.INLINE_NOTICE,
                      noticeType: "info",
                      text: (0, ep.D)()
                          ? R.intl.format(R.t.Jae48E, {
                                onClick: () => {
                                    (0, nl.openUserSettings)(c.X.SYNC_FORCED_COLORS);
                                },
                            })
                          : R.intl.string(R.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            let e = (0, h.bG)([nj.A, N.Ay], () => N.Ay.useForcedColors || nj.A.isPreview),
                t = (0, nO.V)();
            return e || t
                ? null
                : {
                      type: m.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: m.UV.BUTTON,
                              text: R.intl.string(R.t["E+COuA"]),
                              onClick: nL.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [nk.k, nV, nG, nP, nF],
    }),
    nz = (0, d.t_)(c.X.APPEARANCE_PANEL, {
        initialize: function () {
            e4.A.isFetching() ||
                (e5.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                e6.Bo.get({ url: S.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        e5.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        e5.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => R.intl.string(R.t["iHH+ky"]),
        buildLayout: () => [nB, tW, no, tD, ng, nv, ts],
    }),
    nX = [
        { badgeType: m.Xi.NEW, dismissibleContent: eu.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: m.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eu.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, A.jsx)(tn.JI, { text: R.intl.string(R.t.y2b7CA) });
            },
        },
    ],
    nY = (0, d.i4)(c.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["iHH+ky"]),
        icon: e2.PaintPaletteIcon,
        useMenu: function () {
            let e,
                t,
                n,
                i = (0, e7.A)(),
                l =
                    ((e = L.D_.useSetting()),
                    (t = L.SI.useSetting()),
                    e
                        ? null
                        : (0, A.jsx)(e3.sL, {
                              id: "preview-markdown-toggle",
                              label: R.intl.string(R.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  tt.default.track(S.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: S.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      L.SI.updateSetting(e);
                              },
                              checked: t,
                          })),
                s =
                    ((n = (0, h.bG)([te.A], () => te.A.enabled, [])),
                    (0, A.jsx)(e3.sL, {
                        id: "streamer-mode-toggle",
                        label: R.intl.string(R.t.p9ZAJZ),
                        action: () => {
                            e9.A.setEnabled(!n);
                        },
                        checked: n,
                    }));
            return E.useMemo(() => {
                let e = [...i];
                return (
                    null != l &&
                        e.push((0, A.jsx)(e3.rX, { label: R.intl.string(R.t.Ob7VMB), children: l }, "text-and-images")),
                    null != s && e.push((0, A.jsx)(e3.rX, { children: s }, "streamer-mode")),
                    e
                );
            }, [i, l, s]);
        },
        getDismissibleBadges: () =>
            (0, e8.ad)().isFreemium
                ? nX.filter((e) => {
                      let { dismissibleContent: t } = e;
                      return t !== eu.M.FAVORITES_GUILD_NEW_BADGE;
                  })
                : nX,
        buildLayout: () => [nz],
    });
var nH = n(37646),
    nK = n(434404);
let nW = (0, d.t_)(c.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => R.intl.string(R.t.KyFVyi),
        buildLayout: () => [nK.F],
    }),
    nZ = (0, d.i4)(c.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: nH.U,
        useTitle: () => R.intl.string(R.t.KyFVyi),
        buildLayout: () => [nW],
    });
var nq = n(3137),
    nQ = n(661531),
    nJ = n(314116),
    n$ = n(270003),
    n0 = n(369606),
    n1 = n(320448),
    n2 = n(604121),
    n3 = n(725951),
    n6 = n(400492),
    n5 = n(669067),
    n4 = n(115063),
    n8 = n(754692),
    n7 = n(927018),
    n9 = n(512599),
    ie = n(532197),
    it = n(403362),
    ii = n(874486),
    il = n(503698),
    is = n.n(il),
    ir = n(536637),
    ia = n.n(ir),
    io = n(58703),
    iu = n(906688),
    id = n(98705);
function ic(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, n7.vM)(t);
    if (null == i) return null;
    let l = null != n,
        { name: s, description: r, hideDescriptionUntilUnlock: a, onAction: o } = i,
        u = a && !l,
        d = l ? "text-strong" : "text-muted",
        c = l ? "text-default" : "text-muted",
        g = ia()(n),
        m = null != o && l,
        E = m ? nn.D : "div";
    return (0, A.jsxs)(E, {
        className: is()(id.kL, m && id.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, A.jsx)("div", {
                className: id.zc,
                children: (0, A.jsx)(iu.A, { achievementId: t, size: iu.A.Sizes.SIZE_40, unlocked: l }),
            }),
            (0, A.jsxs)("div", {
                className: id.VW,
                children: [
                    null != n &&
                        (0, A.jsx)(H.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: id.YR,
                            children: (0, io.mk)(g),
                        }),
                    (0, A.jsx)(H.E, { variant: "text-md/medium", color: d, children: s() }),
                    (0, A.jsx)(H.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var ig = n(545744);
function im(e) {
    let { onBackClick: t } = e,
        n = (0, h.bG)([ii.A], () => ii.A.getAllUnlockedAchievements()),
        i = E.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        l = E.useMemo(
            () =>
                Object.values(n7.l0)
                    .filter(it.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsxs)(nn.D, {
                onClick: t,
                className: ig.vv,
                children: [
                    (0, A.jsx)(ie.A, { direction: ie.A.Directions.LEFT, className: ig.Kk }),
                    (0, A.jsx)(H.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: R.intl.string(R.t["13/7kX"]),
                    }),
                ],
            }),
            (0, A.jsxs)("div", {
                className: ig.N1,
                children: [
                    (0, A.jsxs)("div", {
                        className: ig.if,
                        children: [
                            (0, A.jsx)(p.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: R.intl.string(R.t["6jI0hd"]),
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: R.intl.string(R.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, A.jsx)("div", {
                        className: ig.nr,
                        children: (0, A.jsx)(n0.TrophyIcon, {
                            size: "custom",
                            color: nQ.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            i.length > 0 &&
                (0, A.jsx)("div", {
                    className: ig.yF,
                    children: (0, A.jsx)("div", {
                        className: ig.Eh,
                        children: i.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, A.jsx)(ic, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            l.length > 0 &&
                (0, A.jsxs)("div", {
                    className: ig.yF,
                    children: [
                        (0, A.jsx)("div", {
                            className: ig.if,
                            children: (0, A.jsx)(H.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: R.intl.string(R.t.GFyMg1),
                            }),
                        }),
                        (0, A.jsx)("div", {
                            className: ig.Eh,
                            children: l.map((e) => (0, A.jsx)(ic, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, A.jsx)("div", { className: ig.yF, children: (0, A.jsx)("div", { className: ig.F3 }) }),
        ],
    });
}
var iA = n(224964),
    iE = n(31408),
    ih = n(368588);
let iS = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    iT = (0, F.range)(0, 11),
    ip = (0, F.range)(0, 2.25, 0.25),
    ix = (0, F.range)(1, 11),
    iI = (0, F.range)(1, 26),
    i_ = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function iN(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: l } = e,
        s = n.map((e) =>
            (0, A.jsx)(
                tJ.d,
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
    return (0, A.jsx)(n$.n, { label: R.intl.string(R.t.bWVN1D), children: s });
}
function iC(e) {
    let { children: t } = e;
    return (0, A.jsx)(H.E, { className: ih.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function ib(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        l = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion);
    return (0, A.jsx)(tJ.d, {
        label: R.intl.string(R.t.vuiXm9),
        description: R.intl.string(R.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            e || (0, n8._)(n7.sn.DISABLE_POGGERMODE),
                e && (!n || l)
                    ? (0, nJ.A)({
                          title: l ? R.intl.string(R.t["FxT+p0"]) : R.intl.string(R.t.TAZ4F9),
                          subtitle: l ? R.intl.string(R.t.gmixrx) : R.intl.string(R.t.jN3t3K),
                          confirmText: R.intl.string(R.t.JFfins),
                          onConfirm: () => i(l ? iS : { enabled: !0, warningSeen: !0 }),
                      })
                    : i({ enabled: e });
        },
    });
}
function iy(e) {
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
    return (0, A.jsxs)(n$.n, {
        label: R.intl.string(R.t.mqxwJO),
        children: [
            (0, A.jsx)(tJ.d, {
                label: R.intl.string(R.t.s0KCgF),
                description: R.intl.string(R.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: ih.KF,
                        children: R.intl.string(R.t.vd0D81),
                    }),
                    (0, A.jsx)(iC, { children: R.intl.string(R.t.a18Sug) }),
                    (0, A.jsx)(Y.A, {
                        disabled: a,
                        markers: ix,
                        stickToMarkers: !0,
                        minValue: ix[0],
                        maxValue: ix[ix.length - 1],
                        initialValue: i,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: ih.KF,
                        children: R.intl.string(R.t.sPO3ij),
                    }),
                    (0, A.jsx)(iC, { children: R.intl.string(R.t.xoldVn) }),
                    (0, A.jsx)(Y.A, {
                        disabled: a,
                        markers: iI,
                        stickToMarkers: !0,
                        minValue: iI[0],
                        maxValue: iI[iI.length - 1],
                        initialValue: l,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, A.jsx)(iN, {
                disabled: a,
                locations: [
                    {
                        location: iE.k.CHAT_INPUT,
                        title: R.intl.string(R.t.elTtyz),
                        description: R.intl.string(R.t.HtKfMi),
                    },
                    {
                        location: iE.k.REACTION,
                        title: R.intl.string(R.t.Ik4VIa),
                        description: R.intl.string(R.t.y4rqK0),
                    },
                    {
                        location: iE.k.MEMBER_USER,
                        title: R.intl.string(R.t.ZXBlAn),
                        description: R.intl.string(R.t["m9RD+c"]),
                    },
                    {
                        location: iE.k.CALL_TILE,
                        title: R.intl.string(R.t.V66giQ),
                        description: R.intl.string(R.t.fiHV7u),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function iv(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: l },
            updateSettings: s,
        } = e,
        r = !t || !n;
    return (0, A.jsxs)(n$.n, {
        label: R.intl.string(R.t.Xz0ole),
        children: [
            (0, A.jsx)(tJ.d, {
                label: R.intl.string(R.t.o3iV7B),
                description: R.intl.string(R.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => s({ combosEnabled: e }),
            }),
            (0, A.jsx)(tJ.d, {
                label: R.intl.string(R.t["Ax+IoW"]),
                description: R.intl.string(R.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => s({ comboSoundsEnabled: e }),
            }),
            (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: ih.KF,
                        children: R.intl.string(R.t.L0oQuh),
                    }),
                    (0, A.jsx)(iC, { children: R.intl.string(R.t["/OOFpL"]) }),
                    (0, A.jsx)(Y.A, {
                        disabled: r,
                        markers: iT,
                        stickToMarkers: !0,
                        minValue: iT[0],
                        maxValue: iT[iT.length - 1],
                        initialValue: l,
                        onValueChange: (e) => s({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function ij(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: l },
            updateSettings: s,
        } = e,
        r = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
        a = !t || !n || r;
    return (0, A.jsxs)(n$.n, {
        label: R.intl.string(R.t.wVS5Sd),
        children: [
            (0, A.jsx)(tJ.d, {
                label: R.intl.string(R.t.N004zO),
                description: r ? R.intl.string(R.t.GckHGw) : R.intl.string(R.t.Qq5W3v),
                checked: n && !r,
                disabled: !t || r,
                onChange: (e) => s({ screenshakeEnabled: e }, 1),
            }),
            (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: ih.KF,
                        children: R.intl.string(R.t.UxnnC4),
                    }),
                    (0, A.jsx)(iC, { children: R.intl.string(R.t.CEOEOb) }),
                    (0, A.jsx)(Y.A, {
                        disabled: a,
                        markers: ip,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: ip[0],
                        maxValue: ip[ip.length - 1],
                        initialValue: i,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, n8._)(n7.sn.MORE),
                                s(t, 1);
                        },
                        onMarkerRender: (e) => (e === ip[ip.length - 1] ? R.intl.string(R.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, A.jsx)(iN, {
                disabled: a,
                locations: [
                    {
                        location: iE.uD.CHAT_INPUT,
                        title: R.intl.string(R.t.vUcvPP),
                        description: R.intl.string(R.t.y00OrF),
                    },
                    {
                        location: iE.uD.VOICE_USER,
                        title: R.intl.string(R.t.TcRO54),
                        description: R.intl.string(R.t.YJCxVY),
                    },
                    {
                        location: iE.uD.MENTION,
                        title: R.intl.string(R.t.oW4shO),
                        description: R.intl.string(R.t["mqfw/H"]),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => s({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function iO(e) {
    let { updateSettings: t } = e;
    return (0, A.jsx)(n$.n, {
        label: R.intl.string(R.t.EuXv2q),
        children: (0, A.jsxs)(X.B, {
            gap: 16,
            children: [
                (0, A.jsx)("div", { children: R.intl.string(R.t["1SLnki"]) }),
                (0, A.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: ih.hw,
                    children: (0, A.jsx)(_.$, {
                        variant: "primary",
                        size: "sm",
                        text: R.intl.string(R.t.qz65yY),
                        onClick: function () {
                            t({ enabled: !1, settingsVisible: !1 }), (0, tM.default)();
                        },
                    }),
                }),
            ],
        }),
    });
}
function iL(e) {
    let { onChangePage: t } = e;
    return (0, A.jsxs)(nn.D, {
        onClick: function () {
            return t(1);
        },
        className: ih.Tq,
        children: [
            (0, A.jsx)("div", {
                className: ih.w1,
                children: (0, A.jsx)(n0.TrophyIcon, { size: "md", color: nQ.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, A.jsxs)("div", {
                className: ih.qL,
                children: [
                    (0, A.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: R.intl.string(R.t["6jI0hd"]),
                    }),
                    (0, A.jsx)(H.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: R.intl.string(R.t.GuUItX),
                    }),
                ],
            }),
            (0, A.jsx)(n1._, { size: "custom", color: "currentColor", width: 16, className: ih.nT }),
        ],
    });
}
function iR() {
    return n
        .e("504660")
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function iD(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        i = (0, h.cf)([nq.A], () => nq.A.getState()),
        [l, s] = E.useState({ x: 0, y: 0 }),
        r = (0, iA.A)();
    function a(e, t) {
        var s, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === i.enabled &&
                (n(!0),
                (0, n6.Ak)("poggermode_enabled"),
                (0, n4.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? i.shakeIntensity })),
            (0, n9.O9)(e),
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
        1 === t && E && (0, n4.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
    }
    function o(e) {
        s({ x: e.clientX, y: e.clientY });
    }
    return (
        E.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, A.jsxs)(X.B, {
            gap: 24,
            children: [
                (0, A.jsx)(ib, { settings: i, updateSettings: a }),
                (0, A.jsx)(iL, { onChangePage: t }),
                (0, A.jsx)(iv, { settings: i, updateSettings: a }),
                (0, A.jsx)(ij, { settings: i, updateSettings: a }),
                (0, A.jsx)(iy, { settings: i, updateSettings: a }),
                (0, A.jsx)(iO, { updateSettings: a }),
            ],
        })
    );
}
function iP(e) {
    return 0 === e ? n3.f.LEFT : n3.f.RIGHT;
}
let iG = (0, d.E2)(c.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = E.useState(0),
                [n, i] = E.useState(iP(e)),
                [l, s] = E.useState(!1),
                r = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
                a = l && !r;
            return (
                E.useEffect(() => {
                    let t = setTimeout(() => {
                        i(iP(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                E.useEffect(() => {
                    (0, n5._)(i_[e]);
                }, [e]),
                E.useEffect(() => {
                    Math.random() > 0.99 && (0, n8._)(n7.sn.VISITOR_100);
                }, []),
                (0, A.jsxs)(A.Fragment, {
                    children: [
                        (0, A.jsx)(n3.A, {
                            className: ih.l3,
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
                                        return (0, A.jsx)(iD, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, A.jsx)(im, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, s),
                        }),
                        (0, A.jsx)("div", {
                            className: a ? ih.Sr : ih.IP,
                            children: (0, A.jsx)(n2.a, {
                                className: ih.gT,
                                importData: iR,
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
            R.intl.string(R.t.AtCukI),
            R.intl.string(R.t.mqxwJO),
            R.intl.string(R.t.wVS5Sd),
            R.intl.string(R.t.Xz0ole),
            R.intl.string(R.t["Ax+IoW"]),
            R.intl.string(R.t["6jI0hd"]),
            R.intl.string(R.t.s0KCgF),
        ],
    }),
    iU = (0, d.zZ)(c.X.POGGERMODE_CATEGORY, { buildLayout: () => [iG] });
var iM = n(212043);
let iV = (0, d.t_)(c.X.POGGERMODE_PANEL, { useTitle: () => R.intl.string(R.t.AtCukI), buildLayout: () => [iU] }),
    ik = (0, d.i4)(c.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.AtCukI),
        icon: () => (0, A.jsx)("img", { alt: "", src: n(724405), className: iM.$ }),
        usePredicate: () => (0, h.bG)([nq.A], () => nq.A.settingsVisible),
        buildLayout: () => [iV],
    });
var iw = n(307301),
    iF = n(410767),
    iB = n(683071),
    iz = n(97260),
    iX = n(695366),
    iY = n(812729),
    iH = n.n(iY),
    iK = n(587895),
    iW = n(429913),
    iZ = n(616356),
    iq = n(952818);
function iQ(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function iJ() {
    let e = (0, h.bG)([iZ.A], () => iZ.A.getStreamerActiveStreamMetadata()),
        t = (0, h.bG)(
            [iq.Ay],
            () => {
                let e = iq.Ay.getVisibleGame();
                return null != e ? iq.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            iH(),
        ),
        [n] = (0, iW.A)([iQ(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var i$ = n(769015),
    i0 = n(916546),
    i1 = n(935671),
    i2 = n(435075);
function i3(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, A.jsx)("div", {
              className: i2.zc,
              children: (0, A.jsx)(iX.E, { size: "sm", color: nQ.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, A.jsxs)("div", {
              className: i2.nt,
              children: [
                  (0, A.jsx)(i$.A, { game: n, pid: t.pid, size: i$.M.MEDIUM }),
                  (0, A.jsx)("div", {
                      className: i2.Am,
                      children: (0, A.jsx)(iX.E, { size: "sm", color: nQ.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function i6(e) {
    let t = (0, h.bG)([i0.Ay], () => i0.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = iJ();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let l = (0, i1.NP)(),
        s = l && null != n && t === S.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? s : l, runningGame: n, runningGameApplication: i };
}
function i5(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: l, runningGameApplication: s } = i6(n);
    return i
        ? (0, A.jsxs)("div", {
              className: is()(i2.kL, t),
              children: [
                  (0, A.jsx)(i3, { game: l, application: s }),
                  (0, A.jsxs)("div", {
                      className: i2.FS,
                      children: [
                          (0, A.jsx)(H.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? R.intl.string(R.t.vxfv7v)
                                      : null != l
                                        ? R.intl.string(R.t.fAYU2G)
                                        : R.intl.string(R.t["9V4X/c"]),
                          }),
                          (0, A.jsx)(H.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: R.intl.format(R.t["/y6htt"], {
                                  helpCenterLink: ex.A.getArticleURL(S.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, A.jsx)(_.$, {
                      variant: "secondary",
                      size: "sm",
                      text: R.intl.string(R.t["1iI46O"]),
                      onClick: function () {
                          (0, i1.sL)(n + (null != l ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var i4 = n(404778),
    i8 = n(691885),
    i7 = n(408278),
    i9 = n(241326),
    le = n(866665),
    lt = n(140735),
    ln = n(489718),
    li = n(635242),
    ll = n(350535),
    ls = n(189213),
    lr = n(192308),
    la = n(95477),
    lo = n(320989),
    lu = n(978263);
let ld = [];
var lc = n(235986),
    lg = n(484734),
    lm = n(734057),
    lA = n(808728),
    lE = n(71393),
    lh = n(967198),
    lS = n(926140),
    lT = n(847893);
function lp() {}
let lx = [lS.rD.VOICE_CHANNEL];
function lf(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function lI() {
    return (0, A.jsx)("div", {
        className: lT.i1,
        children: (0, A.jsx)(H.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: lT.GN,
            children: R.intl.string(R.t.zHjCd1),
        }),
    });
}
function l_(e) {
    let { keybind: t, className: n } = e,
        i = E.useRef(t);
    E.useEffect(() => {
        i.current = t;
    });
    let [l, s] = E.useState(t.params?.channelId ?? void 0),
        r = E.useCallback(() => {
            (0, lr.openModalLazy)(
                async () => (e) =>
                    (0, A.jsx)(lN, {
                        ...e,
                        onSelect: (e) => {
                            s(e), iz.A.setKeybind({ ...i.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, A.jsx)("div", {
        className: is()(lT.a8, n),
        children: (0, A.jsx)(tQ.D, {
            label: R.intl.string(R.t.q4JpM8),
            children: (0, A.jsxs)(lc.A, {
                align: lc.A.Align.STRETCH,
                children: [
                    (0, A.jsx)("div", { className: lT.$X, children: (0, A.jsx)(lC, { channelId: l }) }),
                    (0, A.jsx)(lc.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, A.jsx)(_.$, { variant: "primary", text: R.intl.string(R.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function lN(e) {
    let t,
        n,
        { transitionState: i, onClose: l, onSelect: s } = e,
        r = E.useId(),
        a = E.useRef(null),
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
                [s, r] = E.useState(""),
                [a, o] = E.useState(ld),
                u = E.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(ld) : o(e);
                }, []);
            E.useEffect(
                () =>
                    lo.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = E.useState(() => new lu.A(u, n, void 0, i));
            return (
                E.useEffect(() => {
                    t ? (l?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, l]),
                {
                    queryResults: a,
                    query: s,
                    updateQuery: E.useCallback(
                        (e) => {
                            r(e), d.search(e);
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: lx, autocompleterBeforeCreateSearchContext: lf }),
        c =
            ((t = "" !== o),
            (n = (0, h.yK)([lA.Ay, lm.A, lh.A], () => {
                let e = lh.A.getGuildId();
                if (t || null == e) return [];
                let n = [];
                for (let t of lA.Ay.getVocalChannelIds(e)) {
                    let e = lm.A.getChannel(t);
                    null != e && n.push(e);
                }
                return n;
            }, [t])),
            t ? null : n),
        { focusedIndex: g, setFocusedIndex: m } = (function (e) {
            let [t, n] = E.useState(0),
                i = E.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                E.useEffect(() => {
                    i.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: n }
            );
        })(o);
    E.useEffect(() => {
        let { current: e } = a;
        null == e || e.isItemVisible(0, g, !0) || e.scrollToIndex({ section: 0, row: g });
    }, [g]);
    let S = null != c ? c.length : d.length,
        T = (() => {
            if (null != c) return c[g]?.id;
            let e = d[g];
            if (e?.type === lS.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        p =
            S > 0 || "" === o
                ? {
                      innerId: r,
                      innerRole: "listbox",
                      innerAriaLabel: R.intl.string(R.t["+N3fW7"]),
                      ref: a,
                      sections: [S],
                      renderRow: function (e) {
                          let { row: t } = e,
                              n = (() => {
                                  if (null != c) return c[t];
                                  let e = d[t];
                                  if (e?.type === lS.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? lm.A.getChannel(n.parent_id) : void 0,
                              r = lE.A.getGuild(n.guild_id);
                          return (0, A.jsx)(
                              lg.c3,
                              {
                                  id: n.id,
                                  channel: n,
                                  category: i,
                                  focused: g === t,
                                  onMouseEnter: () => m(t),
                                  onClick: () => {
                                      s(n.id), l();
                                  },
                                  onFocus: () => m(t),
                                  children:
                                      null != r ? (0, A.jsx)("div", { className: lT.J5, children: r.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, A.jsx)(lI, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, A.jsx)(ls.Modal, {
        transitionState: i,
        onClose: l,
        title: R.intl.string(R.t.Dm8O4e),
        subtitle: R.intl.string(R.t.q4JpM8),
        actions: void 0,
        input: (0, A.jsx)(la.k, {
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
                                if (e?.type === lS.rD.VOICE_CHANNEL) return e.record;
                            })();
                            null == e ? s(void 0) : s(e.id), l();
                            break;
                        }
                        case "arrowup":
                            0 === g ? m(S - 1) : m(g - 1);
                            break;
                        case "arrowdown":
                            g >= S - 1 ? m(0) : m(g + 1);
                    }
            },
            placeholder: R.intl.string(R.t.tG0r7g),
            role: "combobox",
            "aria-controls": r,
            "aria-expanded": S > 0,
            "aria-activedescendant": S > 0 && null != T ? T : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: p,
    });
}
function lC(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: l,
        } = (0, h.cf)([lm.A, lE.A], () => {
            let e = null != t ? lm.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? lm.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? lE.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, A.jsx)(H.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: lT.GN,
              children: R.intl.string(R.t["/fYIK7"]),
          })
        : (0, A.jsx)(lg.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: lp,
              onFocus: lp,
              onMouseEnter: lp,
              focused: !1,
              children: null != l ? (0, A.jsx)("div", { className: lT.J5, children: l.name }) : null,
          });
}
var lb = n(650583),
    ly = n(94451);
function lv(e) {
    let { keybind: t } = e,
        n = ll.dI(t.shortcut);
    return eq.A.hasBind(n)
        ? (0, A.jsx)("div", {
              className: ly.$e,
              children: (0, A.jsx)(iB.w, { type: "warning", children: R.intl.string(R.t["7lQlw3"]) }),
          })
        : lb.Yy.has(n)
          ? (0, A.jsx)("div", {
                className: ly.$e,
                children: (0, A.jsx)(iB.w, {
                    type: "warning",
                    children: R.intl.format(R.t.MOIaNd, {
                        keyboardNavArticle: ex.A.getArticleURL(S.MVz.KEYBOARD_NAVIGATION),
                    }),
                }),
            })
          : void 0;
}
function lj(e) {
    let { keybind: t } = e;
    return t.action === S.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, A.jsx)(l_, { keybind: t, className: ly._M }) : null;
}
let lO = E.memo(function (e) {
    let { keybind: t, keybindDescriptions: n, keybindActionTypes: i } = e,
        l = E.useCallback((e) => iz.A.setKeybind({ ...t, action: e }), [t]),
        s = E.useCallback((e) => iz.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = E.useCallback(() => iz.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = E.useCallback(() => iz.A.deleteKeybind(t.id), [t.id]),
        o = E.useId(),
        u = E.useMemo(() => i.find((e) => e.value === t.action)?.label ?? t.action, [t.action, i]);
    return (0, A.jsxs)("div", {
        className: ly.f_,
        children: [
            (0, A.jsx)(lv, { keybind: t }),
            (0, A.jsx)("div", {
                className: ly.XI,
                children: (0, A.jsx)(i8.l, {
                    selectionMode: "single",
                    label: R.intl.string(R.t.XH5b12),
                    value: t.action,
                    options: i,
                    onSelectionChange: l,
                    disabled: t.managed,
                }),
            }),
            (0, A.jsx)("div", {
                className: ly.LE,
                children: (0, A.jsx)(tQ.D, {
                    label: R.intl.string(R.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, A.jsx)(li.A, { defaultValue: t.shortcut, onChange: s }),
                }),
            }),
            (0, A.jsxs)("div", {
                className: ly.ne,
                children: [
                    !t.managed &&
                        (0, A.jsx)(i7.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: i9.TrashIcon,
                            "aria-label": R.intl.string(R.t.qEHmmB),
                        }),
                    (0, A.jsx)(le.m, {
                        text: R.intl.string(t.enabled ? R.t.pNYGbx : R.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, A.jsxs)("div", {
                            children: [
                                (0, A.jsx)(lt.A, {
                                    id: o,
                                    children: R.intl.format(t.enabled ? R.t["myr/Y0"] : R.t.lYhtPO, { actionName: u }),
                                }),
                                (0, A.jsx)(ln.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, A.jsx)(H.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ly.h_,
                children: n[t.action],
            }),
            (0, A.jsx)(lj, { keybind: t }),
        ],
    });
});
var lL = n(367385),
    lR = n(734066),
    lD = n(880144),
    lP = n(614455),
    lG = n(532624),
    lU = n(731854),
    lM = n(603933);
let lV = function () {
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
            } = ((e = (0, h.bG)([lG.Ay], () => lG.Ay.getState())),
            (t = (0, h.bG)([i0.Ay], () => (0, lD.A)(i0.Ay))),
            (n = (0, h.bG)([i0.Ay], () => i0.Ay.supports(lU.O5.VIDEO))),
            (i = (0, h.bG)([lP.A], () => lP.A.isSupported)),
            (l = (0, lR.sw)()),
            (s = (0, lR.BW)()),
            {
                customizableKeybinds: (function (e) {
                    let { keybinds: t, enableClips: n, enableScreenshotKeybind: i, allowSoundboard: l } = e;
                    return B()(t)
                        .reject(
                            (e) =>
                                e.managed &&
                                ![
                                    S.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                                    S.hCu.SAVE_CLIP,
                                    S.hCu.SAVE_SCREENSHOT,
                                ].includes(e.action),
                        )
                        .reject((e) => !n && (e.action === S.hCu.SAVE_CLIP || e.action === S.hCu.SAVE_SCREENSHOT))
                        .reject((e) => !i && e.action === S.hCu.SAVE_SCREENSHOT)
                        .reject((e) => !l && (e.action === S.hCu.SOUNDBOARD || e.action === S.hCu.SOUNDBOARD_HOLD))
                        .sortBy((e) => e.id)
                        .sortBy((e) => (!0 === e.managed ? -1 : 0))
                        .value();
                })({
                    keybinds: e,
                    enableClips: l,
                    enableScreenshotKeybind: s,
                    allowSoundboard: (r = (0, eQ.isWindows)()),
                }),
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
                            { id: "unassigned", value: S.hCu.UNASSIGNED, label: R.intl.string(R.t["0Uh579"]) },
                            { id: "push-to-talk", value: S.hCu.PUSH_TO_TALK, label: R.intl.string(R.t.Y5lgTP) },
                            {
                                id: "push-to-talk-priority",
                                value: S.hCu.PUSH_TO_TALK_PRIORITY,
                                label: R.intl.string(R.t.DkSwJ2),
                            },
                            { id: "push-to-mute", value: S.hCu.PUSH_TO_MUTE, label: R.intl.string(R.t.hSCRqd) },
                            { id: "vad-priority", value: S.hCu.VAD_PRIORITY, label: R.intl.string(R.t["49d6Nd"]) },
                            { id: "toggle-mute", value: S.hCu.TOGGLE_MUTE, label: R.intl.string(R.t.PlkYKD) },
                            { id: "toggle-deafen", value: S.hCu.TOGGLE_DEAFEN, label: R.intl.string(R.t.NvGq1K) },
                            {
                                id: "toggle-voice-mode",
                                value: S.hCu.TOGGLE_VOICE_MODE,
                                label: R.intl.string(R.t.Wa5H9S),
                            },
                            {
                                id: "toggle-streamer-mode",
                                value: S.hCu.TOGGLE_STREAMER_MODE,
                                label: R.intl.string(R.t.BK0Ncc),
                            },
                            {
                                id: "toggle-voice-channel-chat",
                                value: S.hCu.TOGGLE_VOICE_CHANNEL_CHAT,
                                label: R.intl.string(R.t.YeqEjm),
                            },
                        ];
                    return (
                        i &&
                            a.push({
                                id: "toggle-camera",
                                value: S.hCu.TOGGLE_CAMERA,
                                label: R.intl.string(R.t.hf8JVT),
                            }),
                        t &&
                            (a.push({
                                id: "toggle-overlay-input-lock",
                                value: S.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                                label: R.intl.string(R.t.VsAZcC),
                            }),
                            a.push({
                                id: "activate-overlay-region-text-widget",
                                value: S.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                                label: R.intl.string(R.t.hurHWo),
                            })),
                        n &&
                            ((0, eQ.isWindows)() || i0.Ay.getUseSystemScreensharePicker()) &&
                            a.push({
                                id: "toggle-go-live-streaming",
                                value: S.hCu.TOGGLE_GO_LIVE_STREAMING,
                                label: R.intl.string(R.t.ybdjJD),
                            }),
                        (0, eQ.isDesktop)() &&
                            (a.push(
                                { id: "navigate-back", value: S.hCu.NAVIGATE_BACK, label: R.intl.string(R.t.gRSaOa) },
                                {
                                    id: "navigate-forward",
                                    value: S.hCu.NAVIGATE_FORWARD,
                                    label: R.intl.string(R.t.zOXpjU),
                                },
                                {
                                    id: "switch-to-voice-channel",
                                    value: S.hCu.SWITCH_TO_VOICE_CHANNEL,
                                    label: R.intl.string(R.t.ty7Lxy),
                                },
                                {
                                    id: "disconnect-from-voice-channel",
                                    value: S.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                                    label: R.intl.string(R.t.CV7mT7),
                                },
                            ),
                            l &&
                                a.push(
                                    { id: "soundboard", value: S.hCu.SOUNDBOARD, label: R.intl.string(R.t.yPH4xm) },
                                    {
                                        id: "soundboard-hold",
                                        value: S.hCu.SOUNDBOARD_HOLD,
                                        label: R.intl.string(R.t["1xFbP/"]),
                                    },
                                ),
                            s &&
                                (a.push({ id: "save-clip", value: S.hCu.SAVE_CLIP, label: R.intl.string(R.t.U4URzP) }),
                                r &&
                                    a.push({
                                        id: "save-screenshot",
                                        value: S.hCu.SAVE_SCREENSHOT,
                                        label: R.intl.string(R.t["+WloFH"]),
                                    }))),
                        a
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
                            [S.hCu.UNASSIGNED]: R.intl.string(R.t.rvlNLv),
                            [S.hCu.PUSH_TO_MUTE]: R.intl.string(R.t.xtESim),
                            [S.hCu.PUSH_TO_TALK]: R.intl.string(R.t.wTcBSy),
                            [S.hCu.PUSH_TO_TALK_PRIORITY]: R.intl.string(R.t.FhHvWH),
                            [S.hCu.TOGGLE_MUTE]: R.intl.string(R.t.X2fbUm),
                            [S.hCu.TOGGLE_DEAFEN]: R.intl.string(R.t.MjREZV),
                            [S.hCu.TOGGLE_VOICE_MODE]: R.intl.string(R.t.snm5YW),
                            [S.hCu.TOGGLE_STREAMER_MODE]: R.intl.string(R.t.YszLLx),
                            [S.hCu.VAD_PRIORITY]: R.intl.string(R.t.rSe8IZ),
                            [S.hCu.TOGGLE_VOICE_CHANNEL_CHAT]: R.intl.string(R.t.desfB4),
                        };
                    return (
                        i && (r[S.hCu.TOGGLE_CAMERA] = R.intl.string(R.t.v1JBtL)),
                        t && (r[S.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = R.intl.string(R.t.IoP5vc)),
                        n && (0, eQ.isWindows)() && (r[S.hCu.TOGGLE_GO_LIVE_STREAMING] = R.intl.string(R.t.s4C238)),
                        (0, eQ.isDesktop)() &&
                            ((r[S.hCu.NAVIGATE_BACK] = R.intl.string(R.t.nKDlEt)),
                            (r[S.hCu.NAVIGATE_FORWARD] = R.intl.string(R.t.DK0FFk)),
                            (r[S.hCu.SOUNDBOARD] = (0, eQ.isWindows)()
                                ? R.intl.string(R.t["5wJefL"])
                                : R.intl.string(R.t.gzjsSP)),
                            (r[S.hCu.SOUNDBOARD_HOLD] = (0, eQ.isWindows)()
                                ? R.intl.string(R.t.RRkZc9)
                                : R.intl.string(R.t.laNlTl)),
                            l &&
                                ((r[S.hCu.SAVE_CLIP] = R.intl.string(R.t.z3Wbam)),
                                s && (r[S.hCu.SAVE_SCREENSHOT] = R.intl.string(R.t.m0zd57)))),
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
            ? (0, A.jsx)(H.E, { variant: "text-sm/normal", color: "text-subtle", children: R.intl.string(R.t.vyYgWp) })
            : (0, A.jsx)("div", {
                  className: lM.A,
                  children: a.map((e, t) =>
                      (0, A.jsxs)(
                          E.Fragment,
                          {
                              children: [
                                  (0, A.jsx)(lO, { keybind: e, keybindDescriptions: o, keybindActionTypes: u }),
                                  t < a.length - 1 ? (0, A.jsx)(i4.c, { className: lM.y, gap: 24 }) : null,
                              ],
                          },
                          e.id,
                      ),
                  ),
              });
    },
    lk = (0, d.E2)(c.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["069nVT"])],
        Component: function () {
            return nm.Av
                ? (0, A.jsx)(lV, {})
                : (0, A.jsx)(iB.w, {
                      type: "info",
                      children: R.intl.format(R.t.mPi3F3, { downloadLink: S.X7G.DOWNLOAD }),
                  });
        },
    });
var lw = n(475358),
    lF = n(28647),
    lB = n(793650);
function lz(e) {
    let { children: t } = e;
    return t([lL.Q_.MESSAGE, lL.Q_.NAVIGATION, lL.Q_.DND, lL.Q_.CHAT, lL.Q_.VOICE_AND_VIDEO, lL.Q_.MISCELLANEOUS]);
}
function lX(e) {
    let { showHeader: t = !0 } = e,
        n = B()((0, lL.Bx)())
            .filter((e) => e.description !== R.intl.string(R.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, A.jsxs)(X.B, {
        gap: 48,
        children: [
            (0, A.jsx)(n$.n, {
                label: t ? R.intl.string(R.t.Lz5KHI) : void 0,
                children: (0, A.jsx)("div", {
                    className: lB.jh,
                    children: (0, A.jsxs)("div", {
                        className: lB.yZ,
                        children: [
                            (0, A.jsx)(H.E, { variant: "text-md/normal", children: R.intl.string(R.t.sMWLBj) }),
                            (0, A.jsx)("div", {
                                className: lB.DM,
                                children: (0, A.jsx)(lw.e, { shortcut: lF.z.binds["0"], className: lB.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, A.jsx)(lz, {
                children: (e) =>
                    (0, A.jsx)(A.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, lL.Gm)(e),
                                l = (0, lL.zF)(e),
                                s = n[e];
                            return (0, A.jsx)(
                                n$.n,
                                {
                                    label: i,
                                    description: l,
                                    children: (0, A.jsx)("div", {
                                        className: lB.jh,
                                        children: s.map((e, t) =>
                                            (0, A.jsxs)(
                                                E.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, A.jsx)(i4.c, {}),
                                                        (0, A.jsxs)("div", {
                                                            className: lB.yZ,
                                                            children: [
                                                                (0, A.jsx)(H.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, A.jsx)("div", {
                                                                    className: lB.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, A.jsx)(
                                                                            lw.e,
                                                                            { shortcut: e, className: lB.LE },
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
let lY = (0, d.E2)(c.X.DEFAULT_KEYBINDS_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.Lz5KHI)],
    Component: () => (0, A.jsx)(lX, { showHeader: !1 }),
});
var lH = n(19575),
    lK = n(546385);
let lW = (0, d.E2)(c.X.HARDWARE_ACCELERATION, {
    usePredicate: () => nm.Av && !(0, nm.cX)(),
    useSearchTerms: () => [R.intl.string(R.t["/HIxyY"]), R.intl.string(R.t.B0hqpb)],
    Component: function () {
        let [e] = E.useState(() => lH.Ay.getEnableHardwareAcceleration()),
            t = R.intl.string(R.t["/HIxyY"]),
            n = R.intl.string(R.t.B0hqpb);
        return (0, A.jsxs)(X.B, {
            children: [
                (0, A.jsx)(tJ.d, { label: t, description: n, checked: e, onChange: lZ }),
                !e && (0, A.jsx)(lK.A, { look: lK.k.WARNING, children: R.intl.string(R.t.j7S6IX) }),
            ],
        });
    },
});
function lZ(e) {
    let t = e ? R.intl.format(R.t.LYXRxL, {}) : R.intl.format(R.t.uDP3Kz, {});
    (0, nJ.A)({
        title: R.intl.string(R.t.aqpAvn),
        subtitle: t,
        confirmText: R.intl.string(R.t.vT7ckk),
        onConfirm: () => {
            lH.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let lq = (0, eT.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function lQ() {
    let e = await lH.Ay.getOpenOnStart(),
        t = await lH.Ay.getSetting("START_MINIMIZED", !1),
        n = await lH.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    lq.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
}
let lJ = (0, d.zD)(c.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => R.intl.string(R.t["3BeZti"]),
        usePredicate: () => nm.Av && !(0, nm.cX)(),
        useValue: () => lq.useState((e) => e.openOnStartup),
        setValue: function (e) {
            lq.setState({ openOnStartup: e }), lH.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            lH.Ay.getOpenOnStart().then((e) => lq.setState({ openOnStartup: e }));
        },
    }),
    l$ = (0, d.zD)(c.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => R.intl.string(R.t.dJ5MUh),
        useSubtitle: () => R.intl.string(R.t.nQavHr),
        usePredicate: () => nm.Av && !(0, nm.cX)(),
        useValue: () => lq.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            lq.setState({ minimizeToTray: e }), lH.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
        },
        initialize: () => {
            lH.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => lq.setState({ minimizeToTray: e }));
        },
    }),
    l0 = (0, d.zD)(c.X.OS_START_MINIMIZED, {
        useTitle: () => R.intl.string(R.t.GfBL83),
        useSubtitle: () => R.intl.string(R.t.XGyhhc),
        usePredicate: () => (0, nm.uF)(),
        useValue: () => lq.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            lq.setState({ startMinimized: e }), lH.Ay.send("TOGGLE_START_MINIMIZED", e);
        },
        useDisabled: () => !lq.useState((e) => e.openOnStartup),
        initialize: () => {
            lH.Ay.getSetting("START_MINIMIZED", !1).then((e) => lq.setState({ startMinimized: e }));
        },
    });
var l1 = n(61628);
let l2 = new Set(["failure", "unknown"]),
    l3 = (0, d.E2)(c.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [R.intl.string(R.t.roHq80)],
        Component: function () {
            let [e, t] = E.useState(!1),
                [n, i] = E.useState(() => (0, i1.TC)()),
                l = (0, h.bG)([iq.Ay], () => iq.Ay.getSystemServiceStatus("input-service")),
                s = E.useCallback(async () => {
                    t(!0),
                        n ? await (0, i1.z8)("windows-settings") : await (0, i1.sL)("windows-settings"),
                        t(!1),
                        i((0, i1.TC)());
                }, [n]);
            return (0, A.jsxs)("div", {
                className: l1.q,
                children: [
                    (0, A.jsxs)("div", {
                        className: l1.L,
                        children: [
                            (0, A.jsxs)(X.B, {
                                direction: "horizontal",
                                children: [
                                    (0, A.jsx)(H.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: R.intl.string(R.t.roHq80),
                                    }),
                                    n &&
                                        (0, A.jsxs)(A.Fragment, {
                                            children: [
                                                (0, A.jsx)(H.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, A.jsx)(H.E, {
                                                    variant: "text-md/medium",
                                                    color:
                                                        "running" === l.state
                                                            ? "text-feedback-positive"
                                                            : l2.has(l.state)
                                                              ? "text-feedback-critical"
                                                              : "text-feedback-warning",
                                                    children: (function (e) {
                                                        switch (e.state) {
                                                            case "unknown":
                                                                return R.intl.string(R.t["KW+nqT"]);
                                                            case "disabled":
                                                                return R.intl.string(R.t["Q/wAF7"]);
                                                            case "disconnected":
                                                                return R.intl.string(R.t.Xvs9IM);
                                                            case "initializing":
                                                                return R.intl.string(R.t.h4qz8W);
                                                            case "connecting":
                                                                return R.intl.string(R.t.fSu9XF);
                                                            case "handshaking":
                                                                return R.intl.string(R.t["00aYLJ"]);
                                                            case "running":
                                                                return R.intl.string(R.t["54TB7Z"]);
                                                            case "waiting-for-retry":
                                                                return R.intl.string(R.t["0FONwi"]);
                                                            case "failure":
                                                                return R.intl.string(R.t.Ic0nkd);
                                                            default:
                                                                (0, it.xb)(e.state);
                                                        }
                                                    })(l),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: R.intl.format(R.t["8CAL+D"], {
                                    helpCenterLink: ex.A.getArticleURL(S.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                        ],
                    }),
                    (0, A.jsx)(_.$, {
                        variant: n ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: s,
                        text: n ? R.intl.string(R.t.pAwbdL) : R.intl.string(R.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: i1.XQ,
    });
var l6 = n(687813),
    l5 = n(562708),
    l4 = n(691540),
    l8 = n(97483);
async function l7() {
    try {
        await l9();
    } catch {
        (0, l4.P0)({ id: "performance-trace-failed", type: l8.Ck.FAILURE, message: R.intl.string(R.t["8ihs9i"]) });
    }
}
async function l9() {
    var e;
    let t = nh.A.tracing;
    if (null == t) return;
    (0, l4.P0)({ id: "performance-trace-capturing", type: l8.Ck.MESSAGE, message: R.intl.string(R.t.qGRW8d) });
    let [n, i, l] = await Promise.all([
            t.capturePerformanceTrace({ durationMs: 3e4 }),
            nh.A.processUtils.getSystemInfo(),
            nh.A.processUtils.getSystemMetrics(),
        ]),
        s = {
            captured_at: n.startedAtISO,
            duration_ms: n.durationMs,
            categories: n.categories,
            ...(0, l5.getSuperProperties)(),
            native_build_number: nh.A.app.getBuildNumber(),
        },
        r = {
            systemInfo: i,
            systemMetrics: l,
            cumulativeCpuUsage: nh.A.processUtils.getCumulativeCPUUsage() ?? null,
            processTypeCpuUsage: nh.A.processUtils.getCpuUsageElectronProcessTypeDetails() ?? null,
        },
        a = await ((e = {
            "trace.json": n.traceBytes,
            "system_info.json": (0, l6._u)(JSON.stringify(r, null, 2)),
            "metadata.json": (0, l6._u)(JSON.stringify(s, null, 2)),
        }),
        new Promise((t, n) => {
            (0, l6.yU)(e, { level: 6 }, (e, i) => (null != e ? n(e) : t(i)));
        })),
        o = `Discord-Trace-${n.startedAtISO.replace(/:/g, "-").replace(/\..*$/, "")}.zip`,
        { filePath: u } = await t.saveTraceToDownloads(a, o);
    nh.A.fileManager.showItemInFolder(u),
        (0, l4.P0)({ id: "performance-trace-saved", type: l8.Ck.SUCCESS, message: R.intl.string(R.t.gpCRFS) });
}
let se = (0, d.Tf)(c.X.CAPTURE_PERFORMANCE_TRACE, {
    useTitle: () => R.intl.string(R.t.o6Qr6n),
    useSubtitle: () => R.intl.string(R.t.OuGtH8),
    useLabel: () => R.intl.string(R.t.bm1WjO),
    usePredicate: () => nm.Av && nh.A?.tracing?.capturePerformanceTrace != null,
    onClick: () => {
        (0, nJ.A)({
            title: R.intl.string(R.t.o6Qr6n),
            subtitle: R.intl.string(R.t.JEHHJ1),
            confirmText: R.intl.string(R.t.bm1WjO),
            onConfirm: () => {
                (0, tM.default)(), l7();
            },
        });
    },
});
function st() {
    e5.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
var sn = n(287809);
let si = (0, d.Tf)(c.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, h.bG)([sn.default], () => sn.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        st();
    },
});
var sl = n(114129),
    ss = n(442325),
    sr = n(858760);
let sa = (0, d.zD)(c.X.ENABLE_TABS_EXPERIENCE, {
        useTitle: () => "Enable tabs experience",
        useSubtitle: () =>
            "Open channels as browser-style tabs in the title bar, each with its own back/forward history.",
        usePersistentBadge: () => ({ badgeType: m.Xi.BETA }),
        usePredicate: () => sr.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, nm.xl)(),
        useValue: () => (0, h.bG)([ss.A], () => ss.A.isUserOptedIn()),
        setValue: sl.lj,
    }),
    so = (0, d.zZ)(c.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => R.intl.string(R.t["8/udY0"]),
        buildLayout: () => [si, se, sa],
    }),
    su = (0, d.zZ)(c.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => R.intl.string(R.t.cg6ltt),
        buildLayout: () => [lJ, l0, l$, lW],
        usePredicate: () => nm.Av && ((0, nm.uF)() || (0, nm.j9)()),
        initialize: () => {
            lQ();
        },
    }),
    sd = (0, d.zZ)(c.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["069nVT"]),
        useSubtitle: () => R.intl.string(R.t.T4LZVL),
        buildLayout: () => [lk],
        initialize: () => (iz.A.enableAll(!1), () => iz.A.enableAll(!0)),
        useInlineNotice: function () {
            return nm.Av
                ? {
                      type: m.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, A.jsxs)(X.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, A.jsx)(iB.w, { type: "info", children: R.intl.string(R.t["5pkmHa"]) }),
                                  (0, A.jsx)(i5, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            nm.Av
                ? {
                      type: m.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: m.UV.BUTTON,
                              text: R.intl.string(R.t.zk6Xbs),
                              variant: "secondary",
                              icon: iw.j,
                              onClick: () => iz.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    sc = (0, d.zZ)(c.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Lz5KHI),
        buildLayout: () => [lY],
    }),
    sg = (0, d.zZ)(c.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => R.intl.string(R.t["+XZgmA"]),
        usePredicate: () => nm.Av && ((0, nm.uF)() || (0, nm.j9)()),
        buildLayout: () => [l3],
    }),
    sm = (0, d.t_)(c.X.SYSTEM_PANEL, {
        useTitle: () => R.intl.string(R.t["VJ/qKo"]),
        buildLayout: () => [su, sd, sc, sg, so],
    }),
    sA = (0, d.i4)(c.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["VJ/qKo"]),
        icon: iF.F,
        buildLayout: () => [sm],
    });
var sE = n(831544),
    sh = n(922795),
    sS = n(212245),
    sT = n(329551),
    sp = n(285918),
    sx = n(712711),
    sf = n(952572),
    sI = n(382003);
let s_ = (0, d.E2)(c.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.lZTUPs)],
        usePredicate: sf.A,
        Component: function () {
            let e = (0, sS.p)(),
                t = E.useRef(!1),
                n = (0, h.bG)([i0.Ay], () => i0.Ay.getVideoDeviceId()),
                [i, l] = E.useState((0, sT.i)(sn.default.getCurrentUser())),
                s = E.useRef(i);
            return (
                E.useEffect(
                    () => () => {
                        t.current && (0, sp._C)(s.current);
                    },
                    [],
                ),
                (0, A.jsx)(sI.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: function (n) {
                        (t.current = !0), (s.current = n), l(n), (0, sx.gB)(n, { location: e.location }).catch(S.tEg);
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    sN = (0, d.zD)(c.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => R.intl.string(R.t["3Ppr1h"]),
        useSubtitle: () => R.intl.string(R.t.WNbX4O),
        useValue: L.bm.useSetting,
        setValue: (e) => {
            L.bm.updateSetting(e), tt.default.track(S.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var sC = n(625841),
    sb = n(74848),
    sy = n(204050);
let sv = (0, eT.D)(() => ({ previewEnabled: !1 })),
    sj = (0, d.E2)(c.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.FsQ3OR)],
        Component: function () {
            let e = (0, h.bG)([i0.Ay], () => i0.Ay.isVideoAvailable()),
                { id: t } = (0, sb.x5)(lU.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, eP.Ay)();
            return (0, A.jsx)(sC.U, {
                label: R.intl.string(R.t.FsQ3OR),
                deviceType: lU.oh.VIDEO_INPUT,
                location: "UserSettingsCameraSelect",
                isDisabled: !e,
                helperText: (0, sy.p)()
                    ? R.intl.format(R.t.aJYgRt, {
                          onCameraSettingsClick: () => {
                              sv.setState({ previewEnabled: !1 }),
                                  window.open((0, sy.i)(t)),
                                  tt.default.track(S.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n });
                          },
                      })
                    : void 0,
            });
        },
    });
var sO = n(745317),
    sL = n(9219);
let sR = (0, d.E2)(c.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [R.intl.string(R.t.JIf4v7)],
        Component: function () {
            let e = i0.Ay.getCameraComponent(),
                t = (0, h.bG)([i0.Ay], () => i0.Ay.getVideoDeviceId()),
                n = sv.useField("previewEnabled"),
                i = (0, h.bG)([i0.Ay], () => i0.Ay.isVideoAvailable());
            return ((0, eS.l0)(() => {
                sv.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, A.jsx)("div", {
                      className: sL.T9,
                      children: (0, A.jsxs)("div", {
                          className: sL.Xi,
                          children: [
                              (0, A.jsxs)("div", {
                                  className: sL.UI,
                                  children: [
                                      (0, A.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, A.jsx)(sO.kE, {}),
                                  ],
                              }),
                              (0, A.jsx)(sO.eK, {}),
                          ],
                      }),
                  })
                : (0, A.jsx)("div", {
                      className: sL.T9,
                      children: (0, A.jsx)(le.m, {
                          text: i ? null : R.intl.string(R.t["8jSzSe"]),
                          children: (0, A.jsx)(_.$, {
                              variant: "primary",
                              text: R.intl.string(R.t.JIf4v7),
                              onClick: () => sv.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    sD = (0, d.zZ)(c.X.CAMERA_CATEGORY, {
        useTitle: () => R.intl.string(R.t.uje3P9),
        usePredicate: () => (0, h.bG)([i0.Ay], () => i0.Ay.supports(lU.O5.VIDEO)),
        buildLayout: () => [sR, sN, sj, s_],
    });
var sP = n(827343);
let sG = (0, d.zD)(c.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => R.intl.string(R.t.qFphsa),
        useSubtitle: () => R.intl.string(R.t.cQfwyY),
        usePredicate: function () {
            return (0, nm.j9)();
        },
        useValue: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            sP.A.setOpenH264Enabled(e),
                (0, nJ.A)({
                    title: R.intl.string(R.t["9jf31O"]),
                    subtitle: R.intl.string(R.t["J2wg+X"]),
                    confirmText: R.intl.string(R.t.BddRzS),
                    onConfirm: () => nh.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    sU = (0, d.zD)(c.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => R.intl.string(R.t["r6K+TL"]),
        useSubtitle: () => R.intl.string(R.t["xl9+I6"]),
        useValue: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.getAecDump());
        },
        setValue: sP.A.setAecDump,
        usePredicate: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.isAecDumpSupported());
        },
    });
var sM = n(139033),
    sV = n(862482),
    sk = n(640238),
    sw = n(825484),
    sF = n(135286),
    sB = n(487329),
    sz = n(353835);
let sX = (0, eT.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function sY() {
    let e = await nh.A.fileManager.getLogPath();
    nh.A.fileManager.showItemInFolder(e);
}
function sH(e) {
    (0, nJ.A)({
        title: R.intl.string(R.t["7UXEF2"]),
        subtitle: R.intl.string(R.t.IYPrRl),
        confirmText: R.intl.string(R.t.BddRzS),
        onConfirm: () => sP.A.setDebugLogging(e),
    });
}
async function sK(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        await i0.Ay.getMediaEngine().writeAudioDebugState(),
            await sz.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, sF.a)(S.Umv.RTC),
            (e = R.intl.string(R.t["fKBB8+"])),
            (t = R.intl.string(R.t.BvyxE7)),
            (0, sM.A)({ title: e, subtitle: t });
    } catch (s) {
        var i;
        let e, t, n, l;
        (i = s.displayMessage),
            (e = R.intl.string(R.t.QZg0J7)),
            (t = i ?? R.intl.string(R.t.VzHcSm)),
            (n = (0, sB.B1)(sB.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (l = R.intl.formatToPlainString(R.t.ejOT95, { errorCode: n })),
            (0, lr.openModal)((n) =>
                (0, A.jsx)(sk.a, {
                    header: e,
                    confirmButtonColor: sV.$n.Colors.BRAND,
                    confirmText: R.intl.string(R.t.BddRzS),
                    ...n,
                    children: (0, A.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, A.jsx)(H.E, { variant: "text-md/normal", children: t }),
                            (0, A.jsx)(H.E, {
                                variant: "text-sm/semibold",
                                selectable: !0,
                                style: { marginTop: "auto" },
                                children: l,
                            }),
                        ],
                    }),
                }),
            );
    } finally {
        n?.();
    }
}
async function sW() {
    await sK({
        onUploadStart: () => sX.setState({ isUploading: !0 }),
        onUploadFinish: () => sX.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let sZ = (0, d.E2)(c.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [R.intl.string(R.t["726JHL"]), R.intl.string(R.t.EbwFfR), R.intl.string(R.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, h.bG)([i0.Ay], () => i0.Ay.supports(lU.O5.DEBUG_LOGGING));
        return nm.Av && e && null != nh.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, h.bG)([i0.Ay], () => i0.Ay.getDebugLogging()),
            t = sX.useField("isUploading"),
            n = sX.useField("isDisabled"),
            i = E.useId();
        return (0, A.jsxs)("fieldset", {
            children: [
                (0, A.jsx)(lt.A, { tag: "legend", id: i, children: R.intl.string(R.t["FjN+et"]) }),
                (0, A.jsxs)(X.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, A.jsx)(tJ.d, {
                            label: R.intl.string(R.t["726JHL"]),
                            description: R.intl.string(R.t["/7ak9Q"]),
                            checked: e,
                            onChange: sH,
                        }),
                        (0, A.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, A.jsxs)(sw.e, {
                                children: [
                                    (0, A.jsx)(_.$, {
                                        variant: "secondary",
                                        text: R.intl.string(R.t.EbwFfR),
                                        onClick: sW,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": R.intl.string(R.t.aY1OH2),
                                    }),
                                    (0, A.jsx)(_.$, {
                                        variant: "secondary",
                                        text: R.intl.string(R.t.nuPtYi),
                                        onClick: sY,
                                        "aria-label": R.intl.string(R.t["L/hFOe"]),
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
var sq = n(233545),
    sQ = n(412780);
function sJ() {
    return (0, h.bG)([sn.default, i0.Ay], () => {
        let e = sn.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === lH.Ay.releaseChannel || "development" === lH.Ay.releaseChannel,
            i = i0.Ay.supports(lU.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let s$ = (0, d.zD)(c.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => R.intl.string(R.t.U4FgFK),
        useSubtitle: () => R.intl.string(R.t.Lm72RU),
        useValue: function () {
            return (0, h.bG)([sQ.Ay], () => sQ.Ay.shouldRecordNextConnection());
        },
        setValue: sq.Et,
        usePredicate: sJ,
    }),
    s0 = (0, d.Tf)(c.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => R.intl.string(R.t.nJnOHO),
        useLabel: () => R.intl.string(R.t["3xjX0U"]),
        onClick: sq.YW,
        usePredicate: sJ,
    });
var s1 = n(926919),
    s2 = n(111162),
    s3 = n(855302);
let s6 = (0, d.zD)(c.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => R.intl.string(R.t["0CEP6e"]),
        useSubtitle: () => R.intl.string(R.t["kBXuW+"]),
        useValue: function () {
            return (0, h.bG)([s2.default], () => s2.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = s2.default.isStreamInfoOverlayEnabled;
            (0, s3.A)("stream_info_overlay_enabled", e, t), (0, s1.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return L.Q_.useSetting();
        },
    }),
    s5 = (0, d.bd)(c.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? R.intl.string(R.t["/B4I8H"]) : R.intl.string(R.t.BTlsWH)),
        useCollapsedSubtitle: () => R.intl.string(R.t.la1Ys4),
        buildLayout: () => [s6, sU, s$, s0, sZ],
    });
function s4(e, t, n) {
    (0, nJ.A)({ title: e, subtitle: t, confirmText: R.intl.string(R.t.BddRzS), onConfirm: n });
}
let s8 = (0, d.Tf)(c.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => R.intl.string(R.t.SXfv1v),
        useSubtitle: () => R.intl.string(R.t["buA5/q"]),
        useLabel: () => R.intl.string(R.t.yBZMsQ),
        onClick: function () {
            s4(R.intl.string(R.t["4iKQ/3"]), R.intl.string(R.t.sQ42iT), sP.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    s7 = (0, d.zZ)(c.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.UDAU9K),
        buildLayout: () => [sG, s5, s8],
    });
var s9 = n(736056),
    re = n(360729),
    rt = n(446243),
    rn = n(558076),
    ri = n(270103);
let rl = (0, d.zD)(c.X.GUILD_ROOMS_REMEMBER_LAST_VIEW_SETTING, {
        useTitle: () => R.intl.string(ri.default.qYzpsI),
        useSubtitle: () => R.intl.string(ri.default["+vMoL1"]),
        useValue: () => (0, h.bG)([rn.A], () => rn.A.getRememberVideoOverlayVisibility()),
        setValue: (e) => (0, rt.Ft)(e),
    }),
    rs = (0, d.zZ)(c.X.GUILD_ROOMS_CATEGORY, {
        useTitle: () => R.intl.string(ri.default.wRLmM0),
        usePredicate: function () {
            let e = (0, h.yK)([lE.A], () => lE.A.getGuildIds()),
                { loaded: t, override: n } = (0, h.cf)([s9.A], () => ({
                    loaded: s9.A.getLoadedGuildExperiment(re.vJ),
                    override: s9.A.getExperimentOverrideDescriptor(re.vJ),
                }));
            return (0, E.useMemo)(
                () =>
                    (null != t || null != n) &&
                    e.some(
                        (e) =>
                            (0, re.W8)(
                                { guildId: e, location: "useHasGuildRoomsEligibleGuild" },
                                { autoTrackExposure: !1 },
                            ).enabled,
                    ),
                [e, t, n],
            );
        },
        buildLayout: () => [rl],
    });
var rr = n(347481),
    ra = n(852712);
let ro = (0, d.zD)(c.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => R.intl.string(R.t.cUMdH0),
        useSubtitle: () => R.intl.string(R.t["6EjbvA"]),
        useValue: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            sP.A.setAutomaticGainControl(e, { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, h.bG)([i0.Ay, rr.A], () => {
                let e = i0.Ay.getInputDeviceId();
                return rr.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.isAutomaticGainControlSupported() && i0.Ay.isInputProfileCustom());
        },
    }),
    ru = (0, d.sN)(c.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => R.intl.string(R.t.AlybXj),
        setValue: (e) =>
            sP.A.setAttenuation(e, i0.Ay.getAttenuateWhileSpeakingSelf(), i0.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => i0.Ay.getAttenuation(),
    }),
    rd = (0, d.zD)(c.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => R.intl.string(R.t["9dHxRY"]),
        useValue: () => (0, h.bG)([i0.Ay], () => i0.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => sP.A.setAttenuation(i0.Ay.getAttenuation(), e, i0.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rc = (0, d.zD)(c.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => R.intl.string(R.t.SMt0Gr),
        useValue: () => (0, h.bG)([i0.Ay], () => i0.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => sP.A.setAttenuation(i0.Ay.getAttenuation(), i0.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    rg = (0, d.FW)(c.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.oSdBvW),
        useSubtitle: () => R.intl.string(R.t["0A/8Rt"]),
        usePredicate: () => (0, h.bG)([i0.Ay], () => i0.Ay.supports(lU.O5.ATTENUATION)),
        buildLayout: () => [ru, rd, rc],
    });
var rm = n(801644);
let rA = (0, d.zD)(c.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => R.intl.string(R.t.pZ0vr4),
        useSubtitle: () => R.intl.string(R.t.tVbzoZ),
        useValue: function () {
            return (0, h.bG)([eg.Ay], () => !eg.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            (0, s3.A)("hardware_mute_silence_alert_enabled", e, !eg.Ay.disableHardwareMuteSilenceAlert),
                ni.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = rm.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    rE = (0, d.zD)(c.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => R.intl.string(R.t.DFPXIG),
        useSubtitle: () => R.intl.string(R.t["UyRX+C"]),
        useValue: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            sP.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.showBypassSystemInputProcessing() && i0.Ay.isInputProfileCustom());
        },
    }),
    rh = (0, d.zD)(c.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => R.intl.string(R.t.jrWHD3),
        useSubtitle: () => R.intl.string(R.t.YCCMkJ),
        useValue: function () {
            return (0, h.bG)([eg.Ay], () => !eg.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, s3.A)("switch_channel_warning_enabled", e, !eg.Ay.disableVoiceChannelChangeAlert),
                ni.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    rS = (0, d.zD)(c.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => R.intl.string(R.t.BbESsg),
        useSubtitle: () => R.intl.string(R.t.LoOB1F),
        useValue: function () {
            return (0, h.bG)([i0.Ay], () => {
                let { vadUseKrisp: e } = i0.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = i0.Ay.getMode();
            sP.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, h.bG)(
                [i0.Ay],
                () => i0.Ay.getMode() !== S.TBI.VOICE_ACTIVITY || !i0.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.isAdvancedVoiceActivitySupported() && i0.Ay.isInputProfileCustom());
        },
    }),
    rT = (0, d.Hn)(c.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => R.intl.string(R.t.wVBHr0),
        useValue: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            s4(R.intl.string(R.t.uY7AcQ), R.intl.string(R.t.gBqik6), () => sP.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, h.cf)([i0.Ay], () => ({
                legacyAudioSubsystemSupported: i0.Ay.supports(lU.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: i0.Ay.supports(lU.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: i0.Ay.supports(lU.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return E.useMemo(() => {
                let i;
                return (
                    (i = [{ id: lU.rB.STANDARD, value: lU.rB.STANDARD, label: R.intl.string(R.t.dqb2JZ) }]),
                    e && i.push({ id: lU.rB.LEGACY, value: lU.rB.LEGACY, label: R.intl.string(R.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: lU.rB.EXPERIMENTAL, value: lU.rB.EXPERIMENTAL, label: R.intl.string(R.t.liQmtr) }),
                    n && i.push({ id: lU.rB.AUTOMATIC, value: lU.rB.AUTOMATIC, label: R.intl.string(R.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    rp = (0, d.zD)(c.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => R.intl.string(R.t.uancuJ),
        useSubtitle: () => R.intl.string(R.t.I1Eoqq),
        useValue: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.getQoS());
        },
        setValue: function (e) {
            sP.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.supports(lU.O5.QOS));
        },
    }),
    rx = (0, d.zD)(c.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => R.intl.string(R.t["4rsOPQ"]),
        useSubtitle: () => R.intl.string(R.t.jtiiCw),
        useValue: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            sP.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return eQ.isPlatformEmbedded;
        },
    }),
    rf = (0, d.bd)(c.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? R.intl.string(R.t.KHsSWK) : R.intl.string(R.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            tA(c.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, h.bG)([i0.Ay], () => i0.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [ro, rS, rE, rx, rA, rh, rg, rT, rp],
    }),
    rI = (0, d.zD)(c.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => R.intl.string(R.t.iWTwu6),
        useValue: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            sP.A.setEchoCancellation(e, { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, h.bG)([i0.Ay, rr.A], () => {
                let e = i0.Ay.getInputDeviceId();
                return rr.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.isInputProfileCustom());
        },
    });
var r_ = n(459838),
    rN = n(451988),
    rC = n(475883),
    rb = n(192204);
let ry = (0, tw.Ld)();
function rv(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: l, ariaLabelledBy: s, disabled: r } = e;
    return (0, A.jsx)("div", {
        role: "meter",
        className: is()(rC.$I, n),
        id: i,
        "aria-describedby": l,
        "aria-labelledby": s,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? R.intl.string(R.t.haLKZ0) : R.intl.string(R.t.X2hJL7),
        children: (0, A.jsx)("div", { className: is()(rC.Jx, rC.NU, { [rC.zY]: t && !r, [rC.r9]: r }) }),
    });
}
function rj(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: l, disabled: s } = e,
        { threshold: r, autoThreshold: a } = (0, h.cf)([i0.Ay], () => ({
            threshold: i0.Ay.getModeOptions().threshold,
            autoThreshold: i0.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, h.bG)([i0.Ay], () => i0.Ay.getMode());
    return (0, A.jsx)("section", {
        className: is()(rC.Mo, rC.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": l,
        children: (0, A.jsx)(Y.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void sP.A.setMode(o, { threshold: t, autoThreshold: a });
            },
            barStyles: { background: nQ.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: nQ.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": ry,
            disabled: s,
            children: (0, A.jsxs)("div", {
                className: is()(rC.NU, rC.TL, rC.Jx, rb.bar),
                children: [
                    (0, A.jsx)("div", { className: is()(rC.GS, rC.SH), style: { width: s ? 0 : t + 100 + "%" } }),
                    (0, A.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let rO = (0, d.E2)(c.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [R.intl.string(R.t["sqUm+k"]), R.intl.string(R.t.I1Zuq0), R.intl.string(R.t.nuFtHH)],
    usePredicate: () => (0, h.bG)([i0.Ay], () => i0.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, h.cf)([i0.Ay], () => ({
                autoThreshold: i0.Ay.getModeOptions().autoThreshold,
                disabled: i0.Ay.getMode() !== lU.TB.VOICE_ACTIVITY,
            })),
            n = E.useCallback((e) => {
                let t = i0.Ay.getMode(),
                    { threshold: n } = i0.Ay.getModeOptions();
                sP.A.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, h.bG)([i0.Ay], () => i0.Ay.supports(lU.O5.AUTOMATIC_VAD)),
            { volume: l, isSpeaking: s } = (function () {
                let [e, t] = E.useState(-100),
                    [n, i] = E.useState(!1);
                function l(e, n) {
                    t(e), i((n & lU.ME.VOICE) === lU.ME.VOICE);
                }
                return (
                    E.useEffect(() => {
                        let e = new rN.Ep();
                        return (
                            e.start(1e3, () => {
                                i0.Ay.getMediaEngine().on(r_.bg.VoiceActivity, l), e.stop();
                            }),
                            () => {
                                i0.Ay.getMediaEngine().removeListener(r_.bg.VoiceActivity, l), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            r = (0, h.bG)([i0.Ay], () => i0.Ay.isEnabled()),
            a = E.useMemo(
                () =>
                    !r &&
                    (0, A.jsx)("div", {
                        className: rC.B4,
                        children: (0, A.jsx)(iB.w, {
                            type: "warning",
                            children: R.intl.format(R.t["O13I+O"], { onEnableClick: () => sP.A.enable(!0) }),
                        }),
                    }),
                [r],
            ),
            o = E.useMemo(() => (e ? R.intl.string(R.t.JsbzjA) : R.intl.string(R.t.MLmyMY)), [e]),
            u = E.useId(),
            d = E.useId();
        return i
            ? (0, A.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, A.jsx)(lt.A, { tag: "legend", id: u, children: R.intl.string(R.t.GByLar) }),
                      (0, A.jsx)(lt.A, { id: d, children: o }),
                      (0, A.jsxs)(X.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, A.jsx)(tJ.d, {
                                  disabled: t,
                                  label: R.intl.string(R.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, A.jsx)(rv, {
                                        isSpeaking: s,
                                        className: rC.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, A.jsx)(rj, { volume: l, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, A.jsxs)(X.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, A.jsx)(tQ.D, {
                          label: R.intl.string(R.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, A.jsx)(rv, {
                                        isSpeaking: s,
                                        className: rC.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, A.jsx)(rj, {
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
var rL = n(366010);
let rR = n(993830),
    rD = n(413142),
    rP = { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO };
function rG() {
    let e = (0, h.bG)([nM.A], () => (0, rL.q)(nM.A.theme));
    return (0, A.jsx)("img", { src: e ? rR : rD, width: 48, height: 32, alt: "" });
}
let rU = (0, d.E2)(c.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.t8Qhib), R.intl.string(R.t.hmfkCi)],
    usePredicate: function () {
        return (0, h.bG)([i0.Ay], () => i0.Ay.isInputProfileCustom() && i0.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = E.useCallback((e) => {
                sP.A.setNoiseCancellation("KRISP" === e, rP), sP.A.setNoiseSuppression("STANDARD" === e, rP);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: l,
            } = (0, h.cf)([i0.Ay], () => ({
                noiseCancellation: i0.Ay.getNoiseCancellation(),
                noiseSuppression: i0.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: i0.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: i0.Ay.isNoiseCancellationSupported(),
            })),
            s = E.useMemo(() => {
                let e = [];
                return (
                    l && e.push({ id: "krisp", label: R.intl.string(R.t.rdoNzt), value: "KRISP" }),
                    i && e.push({ id: "standard", label: R.intl.string(R.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: R.intl.string(R.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [l, i]),
            r = l
                ? R.intl.format(R.t["1q5aTp"], { helpArticle: ex.A.getArticleURL(S.MVz.NOISE_SUPPRESSION) })
                : R.intl.string(R.t.OWKjw5);
        return (0, A.jsxs)(X.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, A.jsx)(i8.l, {
                    label: R.intl.string(R.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: s,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                l && (0, A.jsx)(rG, {}),
            ],
        });
    },
});
var rM = n(934729),
    rV = n(621380);
let rk = !nm.Av;
function rw() {
    return (0, h.bG)([i0.Ay], () => i0.Ay.getMode() === lU.TB.PUSH_TO_TALK);
}
let rF = (0, d.zD)(c.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nm.Av ? R.intl.string(R.t.tG4Np5) : R.intl.string(R.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, h.bG)([i0.Ay], () => i0.Ay.getMode());
        return E.useMemo(() => {
            if (!nm.Av && e === lU.TB.PUSH_TO_TALK)
                return R.intl.format(R.t["VHI4+Y"], { onDownloadClick: () => (0, rM._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, h.bG)([i0.Ay], () => i0.Ay.getActiveInputProfile() !== rV.m.STUDIO);
    },
    useValue: function () {
        return (0, h.bG)([i0.Ay], () => i0.Ay.getMode() === lU.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        (t = e ? lU.TB.PUSH_TO_TALK : lU.TB.VOICE_ACTIVITY),
            (i = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === lU.TB.PUSH_TO_TALK &&
                rk &&
                (0, lr.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("844331"), n.e("410919")]).then(n.bind(n, 556506));
                    return (t) =>
                        (0, A.jsx)(e, {
                            title: R.intl.string(R.t.Kdt0Gb),
                            confirmText: R.intl.string(R.t["1WjMbC"]),
                            cancelText: R.intl.string(R.t.BddRzS),
                            onConfirm: () => (0, rM._)("PTT Limited Modal"),
                            body: R.intl.string(R.t.NIozvt),
                            ...t,
                        });
                }),
            sP.A.setMode(t, void 0, void 0, { analyticsLocations: i });
    },
    useSearchTerms: () => [R.intl.string(R.t["pS+K2L"]), R.intl.string(R.t.nuFtHH)],
});
var rB = n(484599);
let rz = (0, d.E2)(c.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["pS+K2L"]), R.intl.string(R.t.nuFtHH)],
        usePredicate: rw,
        Component: function () {
            let e = (0, h.bG)([i0.Ay], () => {
                    let { shortcut: e } = i0.Ay.getModeOptions();
                    return e;
                }),
                t = R.intl.format(R.t.HVvn5T, {
                    onClick: () => (0, nl.openUserSettings)(c.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, A.jsx)("div", {
                    className: rB.e,
                    children: (0, A.jsx)(li.A, {
                        defaultValue: e,
                        onChange: (e) => sP.A.setMode(S.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    rX = (0, d.sN)(c.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => R.intl.string(R.t.GCNMM8),
        useSearchTerms: () => [R.intl.string(R.t["pS+K2L"]), R.intl.string(R.t.nuFtHH)],
        setValue: function (e) {
            sP.A.setMode(S.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: S.IjB,
        getInitialValue: function () {
            let { delay: e } = i0.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: rw,
    });
var rY = n(844981),
    rH = n(943679);
function rK() {
    return (0, rY.Ay)("VoiceSettings");
}
let rW = (0, d.zD)(c.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => R.intl.string(rH.default.LGDPhA),
        useSubtitle: function () {
            let e = rK();
            if ((0, rY.Xt)(e))
                return e === rY.L3.BLOCKED_MONO_OUTPUT
                    ? R.intl.string(rH.default.rOXfEw)
                    : R.intl.string(rH.default.O7Aa3Y);
        },
        useValue: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            sP.A.setSpatialAudio(e, [tL.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return rK() !== rY.L3.HIDDEN;
        },
        useDisabled: function () {
            return (0, rY.Xt)(rK());
        },
    }),
    rZ = (0, d.Qx)(c.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => R.intl.string(R.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, ra._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [R.intl.string(R.t.nuFtHH), R.intl.string(R.t.VZPR0R), R.intl.string(R.t.cjPbpT)],
        useValue: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.getActiveInputProfile() ?? rV.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sP.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, ra.d)({ location: "InputProfileCategory" });
            return [
                { value: rV.m.VOICE_ISOLATION, name: R.intl.string(R.t.cjPbpT), desc: R.intl.string(R.t.CzhvnE) },
                { value: rV.m.STUDIO, name: R.intl.string(R.t.VZPR0R), desc: R.intl.string(R.t.ZaJksS) },
                { value: rV.m.CUSTOM, name: R.intl.string(R.t["N/PQjv"]), desc: R.intl.string(R.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    rq = (0, d.zZ)(c.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, h.bG)([rr.A, i0.Ay], () => {
                let e = i0.Ay.getInputDeviceId();
                return (
                    (rr.A.hasEchoCancellation(e) || rr.A.hasNoiseSuppression(e) || rr.A.hasAutomaticGainControl(e)) &&
                    i0.Ay.isInputProfileCustom()
                );
            });
            return E.useMemo(() => {
                if (e) return { type: m.lT.INLINE_NOTICE, noticeType: "info", text: R.intl.string(R.t["/Whuzi"]) };
            }, [e]);
        },
        buildLayout: () => [rZ, rO, rU, rI, rW, rF, rz, rX, rf],
    });
var rQ = n(403581),
    rJ = n(512950),
    r$ = n(983851),
    r0 = n(687021),
    r1 = n(128450),
    r2 = n(796774),
    r3 = n(209932),
    r6 = n(813564),
    r5 = n(984813),
    r4 = n(922016),
    r8 = n(305866),
    r7 = n(22231),
    r9 = n(158045),
    ae = n(792348),
    at = n(674168),
    an = n(827059),
    ai = n(805945),
    al = n(647451);
function as(e) {
    let { onSelect: t } = e,
        [n, i] = E.useState(!1),
        l = (0, h.bG)([sn.default], () => sn.default.getCurrentUser()),
        s = r9.Ay.canUseCustomCallSounds(l),
        r = E.useRef(null);
    function a(e) {
        s && (i(!1), t?.(e));
    }
    return (0, A.jsx)(r4.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, A.jsx)(r8.l, {
                children: (0, A.jsx)(an.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: s ? null : (0, A.jsx)(at.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, A.jsx)(ai.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: R.intl.string(R.t.uOe0Az),
                children: (0, A.jsx)(r7.PencilIcon, { size: "md", color: "currentColor", className: al.Wo }),
            }),
    });
}
function ar(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, ae.A)(t, null),
        i =
            0 === (0, r6.wH)()
                ? R.intl.string(R.t.OASXjt)
                : R.intl.formatToPlainString(R.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, A.jsx)(ai.dT, {
        onClick: n,
        text: i,
        children: (0, A.jsx)(r$.H, { size: "md", color: "currentColor", className: al.wg }),
    });
}
function aa(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        l = null != t,
        s = t?.emojiId,
        r = t?.emojiName,
        a = l && (null != r || null != s);
    return (0, A.jsxs)("div", {
        className: al.D6,
        children: [
            (0, A.jsxs)("div", {
                className: al.kL,
                children: [
                    a && (0, A.jsx)(ty.A, { emojiId: s, emojiName: r, className: al.Zg }),
                    (0, A.jsx)(H.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: al.dj,
                        children:
                            null == t
                                ? R.intl.string(R.t.PoWNfe)
                                : n
                                  ? R.intl.format(R.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: function (e) {
                                            return (0, A.jsx)(H.E, {
                                                variant: "text-xs/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: e,
                                            });
                                        },
                                    })
                                  : t.name,
                    }),
                    l
                        ? (0, A.jsx)(ar, { sound: t })
                        : (0, A.jsx)(r$.H, { size: "md", color: "currentColor", className: al.Gk }),
                ],
            }),
            (0, A.jsxs)("div", {
                className: al.kL,
                children: [
                    (0, A.jsx)(as, { onSelect: i }),
                    l &&
                        !n &&
                        (0, A.jsx)(ai.dT, {
                            onClick: () => i(null),
                            text: R.intl.string(R.t.jmtcGA),
                            children: (0, A.jsx)(i9.TrashIcon, {
                                size: "md",
                                color: nQ.A.unsafe_rawColors.RED_400.css,
                                className: al.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var ao = n(617617);
n(980504);
var au = n(806050);
function ad(e) {
    return (0, h.bG)([r3.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return r3.A.getSound("0" === t ? "0" : t, n);
    });
}
function ac(e) {
    let { guildId: t } = e,
        n = (0, h.bG)([ao.A], () => ao.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = ad(n);
    if (null == n || null == i) return null;
    let { emojiId: l, emojiName: s } = i,
        r = null != l || null != s;
    return (0, A.jsxs)("div", {
        className: au.Io,
        children: [
            r
                ? (0, A.jsx)(ty.A, { emojiId: l, emojiName: s, className: au.nW })
                : (0, A.jsx)(r$.H, { size: "md", color: "currentColor", className: au.nW }),
            (0, A.jsx)(H.E, { className: au.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let ag = (0, d.E2)(c.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, eP.Ay)(),
            [t, n] = E.useState("0"),
            i = (0, r5.mz)(t),
            l = ad(i),
            s = i?.type === r5.PP.GLOBAL,
            r = (0, h.bG)([r3.A], () => r3.A.hasFetchedAllSounds()) && null != i && null == l;
        E.useEffect(() => {
            r && (0, r6.ND)({ location: e });
        }, [r, e]),
            E.useEffect(() => {
                (0, r2.E7)();
            }, []);
        let a = E.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, A.jsx)(ac, { guildId: e.value }) : null;
        }, []);
        return (0, A.jsxs)(n$.n, {
            label: R.intl.string(R.t.nzUc3B),
            description: R.intl.format(R.t.u9RWmv, { helpdeskArticle: ex.A.getArticleURL(S.MVz.SOUNDBOARD) }),
            children: [
                (0, A.jsx)(r0.A, {
                    guildId: t,
                    className: au.Dt,
                    globalOption: { label: R.intl.string(R.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, A.jsxs)(r1.A, {
                    title: R.intl.format(R.t.I2TsYN, {
                        nitroWheelHook: () => (0, A.jsx)(rQ.t, { size: "md", color: "currentColor", className: au.ax }),
                    }),
                    children: [
                        (0, A.jsx)(aa, {
                            sound: l,
                            isGlobal: s,
                            onSelect: (n) => {
                                null == n ? (0, r6.Dv)(t, e) : (0, r6.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, A.jsx)(rJ.p, {
                                className: au.lm,
                                messageType: rJ.Y.WARNING,
                                children: R.intl.string(R.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var am = n(824744);
let aA = (0, d.sN)(c.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => R.intl.string(R.t.kbFsAD),
    useSubtitle: () => R.intl.format(R.t.BPbGq7, { helpCenterArticle: ex.A.getArticleURL(S.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, am.w)(e);
        (0, r2.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, r6.wH)();
        return (0, am.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var aE = n(864145);
let ah = (0, d.sN)(c.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t["2JbvKw"]),
        useSubtitle: () => R.intl.string(R.t.INenzY),
        setValue: function (e) {
            let t = (0, am.w)(e);
            L.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = L.HO.getSetting();
            return (0, am.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, aE.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    aS = (0, d.zZ)(c.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => R.intl.string(R.t.ABjMWI),
        buildLayout: () => [aA, ah, ag],
    });
var aT = n(803224),
    ap = n(552122);
let ax = (0, d.E2)(c.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [R.intl.string(R.t.fgSHf8)],
        usePredicate: () => null != ap.A.useHolidaySoundpack(),
        Component: () =>
            (0, A.jsx)(H.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: R.intl.format(R.t.Eup6Wv, {
                    onClick: () => (0, nl.openUserSettings)(c.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    af = (0, d.AK)(c.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.eyGEE4),
        useSearchTerms: () => [R.intl.string(R.t.eyGEE4)],
        destinationKey: c.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    aI = (0, d.gN)(c.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [af] });
var a_ = n(264686);
let aN = (0, eT.D)(() => ({ currentPlayingSound: null }));
function aC() {
    let e = aN.getField("currentPlayingSound");
    e?.stop(), aN.setState({ currentPlayingSound: null });
}
function ab(e) {
    let t = aN.getField("currentPlayingSound");
    t?.stop();
    let n = (0, n6.Ak)(e);
    aN.setState({ currentPlayingSound: n });
}
function ay(e) {
    return (0, d.zD)(`${c.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => R.intl.format(R.t.OOiGCM, { onClick: () => ab(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, h.bG)([aT.A], () => aT.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = aT.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || n.push(e.sound), a_.default.setDisabledSounds(n);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, h.bG)([aT.A], () => aT.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let av = [
        { useTitle: () => R.intl.string(R.t.hK51Yg), sound: "deafen" },
        { useTitle: () => R.intl.string(R.t.XiejaJ), sound: "undeafen" },
        { useTitle: () => R.intl.string(R.t.w4m945), sound: "mute" },
        { useTitle: () => R.intl.string(R.t.YqAjXy), sound: "unmute" },
        { useTitle: () => R.intl.string(R.t.JoTq8n), sound: "camera_on" },
        { useTitle: () => R.intl.string(R.t["8P6tQ6"]), sound: "camera_off" },
        { useTitle: () => R.intl.string(R.t["juL9/L"]), sound: "disconnect" },
        {
            useTitle: () => R.intl.string(R.t.x98vQq),
            useSearchTerms: () => [R.intl.string(R.t.Q8gkVL)],
            sound: "ptt_start",
        },
        {
            useTitle: () => R.intl.string(R.t["1HjRqC"]),
            useSearchTerms: () => [R.intl.string(R.t.Q8gkVL)],
            sound: "ptt_stop",
        },
        { useTitle: () => R.intl.string(R.t["9JB1Ck"]), sound: "user_join" },
        { useTitle: () => R.intl.string(R.t.KUBBNt), sound: "user_leave" },
        { useTitle: () => R.intl.string(R.t.EZjqUT), sound: "user_moved" },
        { useTitle: () => R.intl.string(R.t.LnNlQh), sound: "call_calling" },
        { useTitle: () => R.intl.string(R.t.Nd8P5y), sound: "stream_started" },
        { useTitle: () => R.intl.string(R.t["9bYj+G"]), sound: "stream_ended" },
        { useTitle: () => R.intl.string(R.t.KccUI1), sound: "stream_user_joined" },
        { useTitle: () => R.intl.string(R.t.dsjkiN), sound: "stream_user_left" },
        { useTitle: () => R.intl.string(R.t.nFOcf9), sound: "activity_launch" },
        { useTitle: () => R.intl.string(R.t["a6lw/u"]), sound: "activity_end" },
        { useTitle: () => R.intl.string(R.t.KaFxrY), sound: "activity_user_join" },
        { useTitle: () => R.intl.string(R.t.S14z9n), sound: "activity_user_left" },
        { useTitle: () => R.intl.string(R.t.CP3DC3), sound: "reconnect" },
    ],
    aj = (0, d.D1)(c.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? R.intl.formatToPlainString(R.t["0JYT98"], { count: t })
                : R.intl.formatToPlainString(R.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => tA(c.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                aC();
            };
        },
        buildLayout: () => av.map((e) => ay(e)),
    }),
    aO = (0, d.zZ)(c.X.SOUNDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, h.bG)([aT.A], () => aT.A.getDisableAllSounds());
            return E.useMemo(() => {
                if (e)
                    return {
                        type: m.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        text: R.intl.format(R.t.fRvixS, {
                            onClick: () => (0, nl.openUserSettings)(c.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                    };
            }, [e]);
        },
        buildLayout: () => [aj, ax, aI],
    }),
    aL = (0, d.zD)(c.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => R.intl.string(R.t.e3Zz3F),
        useSubtitle: () => R.intl.string(R.t.RztTjP),
        useValue: function () {
            return !L.uh.useSetting();
        },
        setValue: function (e) {
            (0, s3.A)("stream_previews_disabled", !e, L.uh.getSetting(), [tL.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                L.uh.updateSetting(!e);
        },
    }),
    aR = (0, d.zD)(c.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => R.intl.string(R.t.GmWk2E),
        useSearchTerms: () => [R.intl.string(R.t["Fj/xn1"])],
        useSubtitle: () => R.intl.string(R.t["Fj/xn1"]),
        useValue: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.getVideoHook());
        },
        setValue: sP.A.setVideoHook,
        usePredicate: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.supportsVideoHook());
        },
    }),
    aD = (0, d.zD)(c.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => R.intl.string(R.t["4I0qzZ"]),
        useValue: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.getExperimentalSoundshare());
        },
        setValue: sP.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, h.bG)([i0.Ay], () => {
                let e = i0.Ay.supportsExperimentalSoundshare(),
                    t = i0.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    aP = (0, d.zD)(c.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => R.intl.string(R.t["/jwMtn"]),
        useSubtitle: () => R.intl.string(R.t.zlA23F),
        useValue: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sP.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return i0.Ay.supports(lU.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    aG = (0, d.sN)(c.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => R.intl.string(R.t.fhEzfj),
        setValue: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sP.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: i0.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, h.bG)([i0.Ay], () => i0.Ay.getSidechainCompression());
            return i0.Ay.supports(lU.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    aU = (0, d.zD)(c.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => R.intl.string(R.t.lt8rRx),
        useSubtitle: () => R.intl.string(R.t.ie1mgY),
        useValue: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, nm.cX)() && e
                ? (0, nJ.A)({
                      title: R.intl.string(R.t["9jf31O"]),
                      subtitle: R.intl.string(R.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          sP.A.setUseSystemScreensharePicker(e), nh.A.app.relaunch();
                      },
                      confirmText: R.intl.string(R.t.BddRzS),
                  })
                : sP.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, h.bG)([i0.Ay], () => i0.Ay.supportsSystemScreensharePicker() && (0, nm.cX)());
        },
    }),
    aM = (0, d.bd)(c.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? R.intl.string(R.t.qrMyvm) : R.intl.string(R.t.LEtTNl)),
        useCollapsedSubtitle: () => tA(c.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [aP, aG, aU, aD, aR],
    }),
    aV = (0, d.zZ)(c.X.STREAMING_CATEGORY, { useTitle: () => R.intl.string(R.t.KDdjou), buildLayout: () => [aL, aM] });
var ak = n(106713);
let aw = (0, d.E2)(c.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = ak.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, A.jsx)(sC.U, {
                label: R.intl.string(R.t.UTM8VP),
                deviceType: lU.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    aF = (0, d.E2)(c.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = ak.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, A.jsx)(sC.U, {
                label: R.intl.string(R.t.xuYQ0n),
                deviceType: lU.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    aB = (0, d.zC)(c.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [aw, aF] }),
    az = (0, d.sN)(c.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = i0.Ay.getInputVolume();
            return (0, am.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, am.w)(e);
            sP.A.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    aX = (0, d.sN)(c.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = i0.Ay.getOutputVolume();
            return (0, am.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, am.w)(e);
            sP.A.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    aY = (0, d.zC)(c.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [az, aX] });
var aH = n(702841),
    aK = n(28863),
    aW = n(152567),
    aZ = n(804037);
let aq = `${ex.A.getArticleURL(S.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    aQ = (0, d.E2)(c.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.nuFtHH)],
        usePredicate: function () {
            return (0, aH.bG)([i0.Ay], () => i0.Ay.supports(lU.O5.LOOPBACK));
        },
        Component: function () {
            return (0, aH.bG)([i0.Ay], () => i0.Ay.supports(lU.O5.LOOPBACK))
                ? (0, A.jsx)(aW.A, {
                      size: "md",
                      notchBackground: aW.V.GRAY,
                      captionVoice: R.intl.string(R.t.bp3JOV),
                      captionNoVoice: (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(H.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: R.intl.string(R.t.bgn75v),
                              }),
                              R.intl.string(R.t["MA+OZh"]),
                              (0, A.jsx)(aK.Anchor, {
                                  className: aZ.X,
                                  href: ex.A.getArticleURL(S.MVz.NO_INPUT_DETECTED),
                                  children: R.intl.string(R.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: R.intl.format(R.t["V+B3FH"], { guideURL: aq }),
                      buttonTest: R.intl.string(R.t.gyljWE),
                      buttonStop: R.intl.string(R.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    aJ = eQ.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function a$(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, A.jsxs)(X.B, {
        children: [
            n && (0, A.jsx)(i5, { sourcePage: "voice" }),
            t && (0, A.jsx)(lK.A, { look: lK.k.WARNING, children: R.intl.string(R.t.Ioz3gx) }),
        ],
    });
}
let a0 = (0, d.zZ)(c.X.VOICE_CATEGORY, {
        useTitle: () => R.intl.string(R.t.K3lovD),
        useSearchTerms: () => [
            R.intl.string(R.t.hHMYbb),
            R.intl.string(R.t.nuFtHH),
            R.intl.string(R.t.dl18zb),
            R.intl.string(R.t["3182VD"]),
            R.intl.string(R.t["DGq/PR"]),
            R.intl.string(R.t.eATD2B),
            R.intl.string(R.t.Rtsr6w),
            R.intl.string(R.t.aUJ062),
        ],
        useInlineNotice: function () {
            let e = i6("voice"),
                t = (0, sb.x5)(lU.oh.AUDIO_INPUT),
                n = (0, sb.x5)(lU.oh.AUDIO_OUTPUT),
                i = E.useMemo(() => {
                    let e = aJ.some((e) => t?.hardwareId?.startsWith(e)),
                        i = aJ.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return E.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: m.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, A.jsx)(a$, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [aB, aY, aQ],
    }),
    a1 = (0, d.t_)(c.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => R.intl.string(R.t.B1fFpf),
        buildLayout: () => [a0, rq, sD, aV, aO, aS, rs, s7],
    }),
    a2 = (0, d.i4)(c.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.B1fFpf),
        usePredicate: () => i0.Ay.isSupported(),
        icon: sE.MicrophoneIcon,
        useMenu: sh.A,
        buildLayout: () => [a1],
    }),
    a3 = (0, d.WI)(c.X.APP_SECTION, {
        useTitle: () => R.intl.string(R.t.gcyH1J),
        buildLayout: () => [a2, nY, e1, ik, sA, nZ],
    });
var a6 = n(360669),
    a5 = n(974544),
    a4 = n(423764),
    a8 = n(289873),
    a7 = n(132500),
    a9 = n(465323),
    oe = n(37766),
    ot = n(194261),
    on = n(391048),
    oi = n(277984),
    ol = n(99696),
    os = n(202613),
    or = n(615405),
    oa = n(580630),
    oo = n(83617),
    ou = n(935208),
    od = n(607399),
    oc = n(993077),
    og = n(150934),
    om = n(256006),
    oA = n(198970),
    oE = n(71532);
let oh = /[^0-9/]/g,
    oS = /[^0-9]/g;
class oT extends E.PureComponent {
    _inputRef;
    selectionStart = 0;
    componentDidUpdate(e) {
        let t = this._inputRef;
        e.value !== this.props.value && null != t && t.setSelectionRange(this.selectionStart, this.selectionStart);
    }
    setRef = (e) => {
        let { inputRef: t } = this.props;
        (this._inputRef = e), null != t && t(e);
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
                ((i = (n = e.replace(oh, "").split("/"))[0]),
                (l = n[1]),
                (s = []),
                parseInt(i, 10) > 12 && (i = i.substring(0, 1)),
                s.push(i),
                (parseInt(i, 10) > 1 || 2 === i.length || (null != l && "" !== l)) && s.push("/"),
                null != l && "" !== l && parseInt(l, 10) > 99 && (l = (l + "").substring(0, 2)),
                s.push(l),
                s.join("")),
            d = o.selectionStart;
        u === r && u.length <= 3 && r.includes("/") && !e.includes("/")
            ? (u = u.replace(oS, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t);
    };
    render() {
        return (0, A.jsx)(la.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var op = n(832208),
    ox = n(782328);
let of = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, tw.Ld)(),
                        title: () => R.intl.string(R.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => R.intl.string(R.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => ox.ep,
                        renderInput: (e) => (0, A.jsx)(oT, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    oI = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: l } = e,
            [s, r] = E.useState(!1),
            [a, o] = E.useState(null),
            [u, d] = E.useState(i);
        return (
            E.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, A.jsx)(op.A, {
                className: n,
                form: of,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: l,
                onFieldChange: function (e) {
                    s || "" === e || r(!0),
                        (s && "" === e) || !(0, oE.So)(e) ? o(R.intl.string(R.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var o_ = n(219887),
    oN = n(292856);
let oC = "isDefault";
class ob extends E.PureComponent {
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
            expiresMonth: t instanceof os.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof os.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        e5.h.wait(() => {
            (0, oi.ey)(), (0, oi.tc)();
        });
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(it.Vq).length))
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
        this.handleFieldChange(Number(i), "expiresMonth"),
            this.handleFieldChange(Number(`${new Date().getFullYear().toString().slice(0, 2)}${l}`), "expiresYear");
    };
    handleFieldChange = (e, t) => {
        null != t && this.setState({ [t]: e, dirtyFields: { ...this.state.dirtyFields, [t]: !0 } });
    };
    renderError() {
        let { updateError: e, removeError: t } = this.props;
        return null == e || e.hasCardError() || e.hasAddressError()
            ? null != t
                ? (0, A.jsx)("div", {
                      className: oN.zc,
                      children: (0, A.jsx)(iB.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, A.jsx)("div", {
                  className: oN.zc,
                  children: (0, A.jsx)(iB.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, om.g)(n);
        return (0, A.jsxs)("div", {
            className: oN.yV,
            children: [
                (0, A.jsx)(H.E, {
                    className: oN.bV,
                    variant: "text-sm/normal",
                    children: R.intl.string(R.t["50Auo2"]),
                }),
                (0, A.jsx)(oA.Ay, {
                    ...e,
                    mode: oA.Ay.Modes.EDIT,
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
        return (0, A.jsxs)("div", {
            className: oN.yV,
            children: [
                (0, A.jsx)(H.E, { className: oN.bV, variant: "text-sm/normal", children: R.intl.string(R.t.Fo2YP7) }),
                (0, A.jsx)(oI, {
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
        return (0, A.jsx)("div", {
            className: oN.AU,
            children: (0, A.jsxs)(X.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, A.jsx)(sw.e, {
                        children: (0, A.jsxs)("div", {
                            className: oN.lH,
                            children: [
                                n
                                    ? (0, A.jsx)(le.m, {
                                          text: R.intl.string(R.t["v6/z28"]),
                                          children: (0, A.jsx)("div", { "aria-hidden": !0, className: oN.dm }),
                                      })
                                    : null,
                                (0, A.jsx)(_.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: od.Fr ? "sm" : "md",
                                    text: od.Fr ? R.intl.string(R.t.oyYWHE) : R.intl.string(R.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, A.jsxs)(sw.e, {
                        children: [
                            (0, A.jsx)(_.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: od.Fr ? "sm" : "md",
                                text: R.intl.string(R.t["ETE/oC"]),
                            }),
                            (0, A.jsx)(_.$, {
                                loading: e,
                                disabled: !i || t || !l,
                                type: "submit",
                                variant: "active",
                                size: od.Fr ? "sm" : "md",
                                text: R.intl.string(R.t["R3BPH+"]),
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
            r = e instanceof os.SJ;
        return (0, A.jsx)(oc.Z, {
            editable: !0,
            className: is()(oN.Nr, i),
            children: (0, A.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, A.jsxs)("div", {
                        className: oN.__invalid_paymentSection,
                        children: [
                            (0, A.jsx)(o_.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: l,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, A.jsx)("div", { className: oN.Um, children: R.intl.string(R.t["3R0U0b"]) })
                                : null,
                            (0, A.jsx)("div", {
                                className: oN.Sv,
                                children: r
                                    ? R.intl.format(R.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : R.intl.string(R.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, A.jsx)("div", {
                        className: oN.D5,
                        children: (0, A.jsx)(og.S, {
                            value: oC,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, oC),
                            label: R.intl.string(R.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, A.jsx)(i4.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let oy = h.Ay.connectStores([or.A], () => ({ updateError: or.A.editSourceError, removeError: or.A.removeSourceError }))(
    ob,
);
var ov = n(986485),
    oj = n(849405),
    oO = n(329693);
function oL() {
    (0, ol.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, a7.A)() });
}
class oR extends E.PureComponent {
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
            ? (0, A.jsx)(oy, {
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
            : (0, A.jsxs)(A.Fragment, {
                  children: [
                      i ? null : (0, A.jsx)(i4.c, { className: oO.__invalid_sourceDivider }),
                      (0, A.jsxs)("div", {
                          className: oO.Yb,
                          children: [
                              (0, A.jsx)(o_.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: l,
                                  locale: s,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, A.jsx)(_.$, {
                                  variant: "secondary",
                                  onClick: this.handleEditClick,
                                  size: "sm",
                                  text: R.intl.string(R.t.bt75uw),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let oD = E.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: l, onRedeemClick: s } = e,
        [r, a] = E.useState(null),
        o = (0, h.bG)([sn.default], () => sn.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, h.bG)([or.A], () => or.A.ipCountryCode),
        d = E.useMemo(() => (0, a9.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        E.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : oi.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, A.jsxs)(A.Fragment, {
            children: [
                n ? null : (0, A.jsx)(i4.c, { className: oO.__invalid_sourceDivider }),
                (0, A.jsxs)("div", {
                    className: oO.Yb,
                    children: [
                        void 0 !== t
                            ? (0, A.jsx)(o_.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: l,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, A.jsxs)(lc.A, {
                                  align: lc.A.Align.CENTER,
                                  children: [
                                      (0, A.jsx)(oe._, { size: "lg" }),
                                      (0, A.jsx)(H.E, {
                                          variant: "text-sm/medium",
                                          className: oj.Wi,
                                          children: R.intl.string(ov.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, A.jsxs)("div", {
                            className: oO.zy,
                            children: [
                                (0, A.jsx)("div", {
                                    className: oO.Tq,
                                    children:
                                        null == r
                                            ? (0, A.jsx)(a8.y, { type: a8.y.Type.SPINNING_CIRCLE })
                                            : (0, A.jsx)(H.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = String(n).toUpperCase(),
                                                          l = (0, oa.$g)(e ?? 0, n, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${i} ${l}`;
                                                  })(),
                                              }),
                                }),
                                (0, A.jsx)(_.$, {
                                    variant: "secondary",
                                    onClick: s,
                                    size: "sm",
                                    text: R.intl.string(ov.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class oP extends E.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await oi.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await oi.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await oi.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, oo.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, lr.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, A.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, on.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, A.jsxs)("div", {
            className: oO.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, A.jsxs)("div", {
                          className: oO.z8,
                          children: [
                              (0, A.jsx)(H.E, { variant: "text-sm/normal", children: R.intl.string(R.t.aRHpAB) }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: oO.Sv,
                                  children: R.intl.string(R.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, A.jsx)(_.$, { onClick: this.handleAddPaymentMethod, text: R.intl.string(R.t.CpOiEO) }),
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
            u = B()
                .values(i)
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : ou.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof os.LQ)),
            c = u.filter((e) => e instanceof os.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            E = d.map((e, t) =>
                (0, A.jsx)(
                    oR,
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
                          (0, A.jsx)(
                              oD,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: l,
                                  onRedeemClick: oL,
                              },
                              e.id,
                          ),
                      )
                    : (0, A.jsx)(oD, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: oL,
                      })),
            (0, A.jsxs)(A.Fragment, {
                children: [
                    t
                        ? (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsxs)(p.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, A.jsx)(ot.LockIcon, { size: "sm", className: oO.hz }),
                                          " ",
                                          R.intl.string(R.t.W26xGQ),
                                      ],
                                  }),
                                  (0, A.jsx)(H.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: R.intl.string(R.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    E,
                    o && e,
                    m !== d.length - 1 || (o && c.length > 0) ? (0, A.jsx)(i4.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var oG = n(459357),
    oU = n(295405),
    oM = n(166403),
    oV = n(773669),
    ok = n(943009);
function ow() {
    let e = (0, h.bG)([sn.default], () => sn.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, a4.Gw)(e.country) };
}
let oF = (0, d.E2)(c.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, h.bG)([or.A], () => or.A.isSyncing),
                i = (0, h.bG)([oU.A], () => oU.A.paymentSources),
                l = (0, h.bG)([oU.A], () => oU.A.defaultPaymentSourceId),
                s = (0, h.bG)([oV.default], () => oV.default.locale),
                r = (0, h.bG)([oM.A], () => oM.A.getPremiumTypeSubscription()),
                a = (0, h.bG)([or.A], () => or.A.isRemovingPaymentSource),
                o = (0, h.bG)([or.A], () => or.A.isUpdatingPaymentSource),
                { enabled: u } = (0, oG.c)({ location: "UserSettingsBilling" });
            return (E.useEffect(() => {
                oi.$o(), oi.hP();
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, A.jsx)("div", { className: ok.o, children: (0, A.jsx)(a8.y, {}) })
                : (0, A.jsx)(oP, {
                      showHeader: t,
                      paymentSources: i,
                      defaultPaymentSourceId: l,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== S.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: s,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t.W26xGQ), R.intl.string(R.t["3pIjBH"])],
    }),
    oB = (0, d.zZ)(c.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.W26xGQ),
        useSubtitle: () => {
            let e = ow();
            return null != e ? R.intl.format(R.t.e2t1G5, { country: e.countryName }) : R.intl.string(R.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == ow()
                ? null
                : {
                      type: m.p3.INFO_POPOVER,
                      ariaLabel: R.intl.string(R.t.PuB1W7),
                      popoverProps: {
                          title: "",
                          body: R.intl.string(R.t["21skUa"]),
                          size: "sm",
                          position: "top",
                          getActions: (e) => [
                              {
                                  text: R.intl.string(R.t.PuB1W7),
                                  variant: "primary",
                                  onClick: () => {
                                      window.open("https://support.discord.com/hc/articles/39799791912087", "_blank"),
                                          e();
                                  },
                              },
                          ],
                      },
                  };
        },
        buildLayout: () => [oF],
    });
var oz = n(549363),
    oX = n(545075);
let oY = (0, d.E2)(c.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, h.bG)([oV.default], () => oV.default.locale);
            return (0, A.jsxs)(A.Fragment, { children: [(0, A.jsx)(oX.kb, {}), (0, A.jsx)(oz.A, { locale: e })] });
        },
        useSearchTerms: () => [R.intl.string(R.t.obLrcK)],
    }),
    oH = (0, d.zZ)(c.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.obLrcK),
        buildLayout: () => [oY],
    }),
    oK = (0, d.t_)(c.X.BILLING_PANEL, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        buildLayout: () => [oB, oH],
        useObscuredNotice: a5.L,
    }),
    oW = (0, d.i4)(c.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        icon: a6.B,
        buildLayout: () => [oK],
    });
var oZ = n(70283),
    oq = n(597770),
    oQ = n(682618),
    oJ = n(611881),
    o$ = n(962644),
    o0 = n(35587),
    o1 = n(86379);
let o2 = (0, d.E2)(c.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: oX.uK,
        usePredicate: () => (0, o1.Hp)(),
        useSearchTerms: () => [R.intl.string(R.t.vwMEHS)],
    }),
    o3 = (0, d.zZ)(c.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [o2] });
var o6 = n(982240),
    o5 = n(788833),
    o4 = n(914410),
    o8 = n(556427),
    o7 = n(573343);
function o9(e) {
    let { tier: t, active: n = !1 } = e;
    return (0, A.jsxs)("div", {
        className: is()(o7.fO, { [o7.bF]: n }),
        children: [
            null != t.simple_icon_url && (0, A.jsx)("img", { src: t.simple_icon_url, alt: "", className: o7.si }),
            (0, A.jsxs)("div", {
                className: o7.tc,
                children: [
                    (0, A.jsx)(H.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, A.jsx)(H.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: R.intl.format(o8.default.qvx9E4, { count: (0, o6.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function ue(e) {
    let { tiers: t, currentTier: n } = e;
    return (0, A.jsx)("div", {
        className: o7.dw,
        children: t.map((e) => (0, A.jsx)(o9, { tier: e, active: e.key === n?.key }, e.key)),
    });
}
function ut(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, eP.Ay)(tL.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: l } = (0, o5.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: S.ZSU.BUTTON_CTA, objectType: S.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, A.jsx)("div", {
        className: o7.NG,
        children: (0, A.jsx)(_.$, {
            variant: "primary",
            icon: oq.GiftIcon,
            text: R.intl.string(o8.default.DZnomS),
            onClick: l,
        }),
    });
}
function un(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: l, giftsRemaining: s } = e,
        r = (0, o6.rL)(i),
        a = (0, o6.rL)(l),
        o = (0, oJ.GZ)(n, i, l);
    return (
        (t =
            null != l
                ? R.intl.formatToPlainString(o8.default.XTX3OO, { count: s, nextTier: l?.name ?? "" })
                : R.intl.formatToPlainString(o8.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, A.jsxs)("div", {
            className: o7.mY,
            children: [
                i?.simple_icon_url != null &&
                    (0, A.jsx)("div", {
                        className: o7.fC,
                        children: (0, A.jsx)("img", { src: i.simple_icon_url, alt: "", className: o7.qS }),
                    }),
                (0, A.jsxs)("div", {
                    className: o7.Qs,
                    children: [
                        (0, A.jsx)(H.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, A.jsx)(o4.Ay, { variant: o4.qP.BLUE, weight: o4.fh.MEDIUM, progress: o }),
                        (0, A.jsx)(H.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: o7.qg,
                            children: R.intl.format(o8.default.iIpfQe, {
                                threshold: null != l ? a : r,
                                count: null != l ? n : r,
                            }),
                        }),
                    ],
                }),
                l?.simple_icon_url != null &&
                    (0, A.jsx)("div", {
                        className: o7.fC,
                        children: (0, A.jsx)("img", { src: l.simple_icon_url, alt: "", className: o7.qS }),
                    }),
            ],
        })
    );
}
function ui(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: l,
            giftsRemaining: s,
            tiers: r,
        } = (0, h.cf)([o6.Ay], () => ({
            badgeProgress: o6.Ay.getSingleRequirementProgress(oZ.$.GIFTING)?.current ?? 0,
            currentTier: o6.Ay.getCurrentTier(oZ.$.GIFTING),
            nextTier: o6.Ay.getNextTier(oZ.$.GIFTING),
            giftsRemaining: o6.Ay.getRemainingToNextTier(oZ.$.GIFTING),
            tiers: o6.Ay.getBadgeById(oZ.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, A.jsxs)("div", {
              className: o7.kL,
              children: [
                  (0, A.jsxs)("div", {
                      className: o7.Jo,
                      children: [
                          n > 0 &&
                              (0, A.jsxs)(A.Fragment, {
                                  children: [
                                      (0, A.jsx)(un, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: l,
                                          giftsRemaining: s,
                                      }),
                                      (0, A.jsx)("div", { className: o7.yF }),
                                  ],
                              }),
                          (0, A.jsx)(ue, { tiers: r, currentTier: i }),
                          (0, A.jsx)(H.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: o7.PJ,
                              children: R.intl.string(o8.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, A.jsx)(ut, { analyticsLocation: t, location: "UserSettingsGiftingBadgeProgress" }),
              ],
          });
}
let ul = (0, d.zZ)(c.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => R.intl.string(o8.default.sFokBp),
        buildLayout: () => [us],
        usePredicate: () => {
            let e = (0, oJ.F5)("gift_inventory"),
                t = (0, h.bG)([o6.Ay], () => o6.Ay.getBadgeById(oZ.$.GIFTING));
            return e && null != t;
        },
    }),
    us = (0, d.E2)(c.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [R.intl.string(o8.default.sFokBp)],
        Component: () => (0, A.jsx)(ui, {}),
    });
var ur = n(264779),
    ua = n(412260),
    uo = n(555393),
    uu = n(725807),
    ud = n(212168),
    uc = n(469778),
    ug = n(45938),
    um = n(109802),
    uA = n(869038),
    uE = n(380856);
function uh(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, A.jsxs)(lc.A, {
        className: is()(uE.wx, n),
        align: lc.A.Align.CENTER,
        children: [
            (0, A.jsx)("div", { className: uE.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function uS(e) {
    let { children: t, className: n } = e;
    return (0, A.jsx)("div", { className: is()(uE.rf, n), children: t });
}
class uT extends E.PureComponent {
    static Header = uh;
    static Body = uS;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, A.jsx)("div", { className: is()(uE.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var up = n(165191),
    ux = n(871123),
    uf = n(366523),
    uI = n(280450),
    u_ = n(30793),
    uN = n(97352),
    uC = n(67480),
    ub = n(147925),
    uy = n(957565),
    uv = n(615396),
    uj = n(274904);
class uO extends E.PureComponent {
    _copyModeTimeout = new rN.Ep();
    state = { copyMode: um.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case um.q.SUCCESS:
                return R.intl.string(R.t.XVvPjU);
            case um.q.ERROR:
                return R.intl.string(R.t.i4GM3L);
            default:
                return R.intl.string(R.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        uA.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        (0, ug.AK)(t, n),
            (0, uy.C)(
                e,
                () => this.setState({ copyMode: um.q.SUCCESS }),
                () => this.setState({ copyMode: um.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: um.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, A.jsxs)(lc.A, {
            direction: lc.A.Direction.VERTICAL,
            className: uj.Gj,
            children: [
                (0, A.jsx)(um.e, {
                    className: uj.ph,
                    value: (0, ug.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uy.p5,
                    hideMessage: e ? R.intl.string(R.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: sV.XD.BRAND,
                    buttonLook: sV.pR.FILLED,
                }),
                (0, A.jsxs)("div", {
                    className: uj.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, A.jsxs)(E.Fragment, {
                                  children: [
                                      R.intl.format(R.t.ltVZcJ, { hours: t.expiresAt.diff(ia()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, A.jsx)(nn.D, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: R.intl.string(R.t.v6Yazx),
                        }),
                    ],
                }),
            ],
        });
    }
}
class uL extends E.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        this.setState({ isCreating: !0 }),
            await uA.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        (null == n || null == this._loadedAt || n < this._loadedAt) && i && uA.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, ux.bF)(e)
            ? (0, A.jsx)(uf.e, { shape: "square", sku: e, containerClassName: uj.ez })
            : null != t
              ? (0, A.jsx)(up.A, { giftStyle: t, className: uj.ez, shouldAnimate: this.state.isHovered })
              : (0, A.jsx)(i$.A, { game: n, size: i$.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, ux.bF)(e)
            ? (0, A.jsxs)("div", {
                  className: is()(uj.Oc, uj.ic),
                  children: [
                      (0, A.jsx)(i$.A, { game: n, size: i$.M.XSMALL, skuId: e.id, className: uj._u }),
                      R.intl.format(R.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, A.jsx)("div", { className: uj.Oc, children: R.intl.format(R.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === tX.FB
                    ? R.intl.string(R.t.odsU6W)
                    : i === tX.Bu && null != n
                      ? R.intl.formatToPlainString(n.interval === tX.WT.MONTH ? R.t.uZjpiJ : R.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : R.intl.formatToPlainString(n.interval === tX.WT.MONTH ? R.t.rCJvqo : R.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, A.jsx)("div", { className: uj.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, A.jsxs)(lc.A, {
            justify: lc.A.Justify.BETWEEN,
            align: lc.A.Align.CENTER,
            className: uj.pe,
            children: [
                (0, A.jsx)(H.E, { variant: "text-md/normal", children: R.intl.string(R.t.lELyPj) }),
                (0, A.jsx)(_.$, {
                    variant: "primary",
                    size: "sm",
                    text: R.intl.string(R.t.Q3Qguo),
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
        return (0, A.jsxs)(uT, {
            className: i,
            children: [
                (0, A.jsx)(nn.D, {
                    onClick: this.handleToggleOpen,
                    className: uj.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, A.jsx)(uT.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, A.jsxs)("div", {
                            className: uj.MY,
                            children: [
                                (0, A.jsxs)(lc.A, {
                                    align: lc.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, A.jsxs)("div", {
                                            className: uj.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, A.jsx)(ub.A, {
                                    direction: a ? ub.A.Directions.UP : ub.A.Directions.DOWN,
                                    className: uj.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, A.jsx)(uT.Body, {
                          children: s
                              ? (0, A.jsx)(a8.y, { className: uj.u1 })
                              : (0, A.jsxs)(E.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, A.jsx)(uO, { giftCode: e, sku: l, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let uR = h.Ay.connectStores([uC.A, te.A, u_.A, iK.A, uN.A, uI.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        l = uC.A.get(t);
    if (null == l) throw Error("SKU was unavailable while rendering gift.");
    let s = u_.A.getForGifterSKUAndPlan(uI.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: l,
        hideCodes: te.A.enabled,
        isFetching: u_.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: u_.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: iK.A.getApplication(l.applicationId),
        subscriptionPlan: null != n ? (0, uv.c9)(n) : null,
        giftCodes: s,
    };
})(uL);
var uD = n(725570),
    uP = n(736653),
    uG = n(46054);
let uU = ia().duration(30, "days");
var uM = n(416052),
    uV = n(878309);
function uk(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, A.jsx)(ls.Modal, {
        title: "",
        size: "md",
        input: (0, A.jsx)("div", { className: uV.aR }),
        onClose: async () => await t(),
        actions: [{ text: R.intl.string(R.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, A.jsxs)("div", {
            className: uV.t4,
            children: [
                (0, A.jsx)(p.D, { variant: "heading-xl/semibold", children: R.intl.string(R.t.iufib1) }),
                (0, A.jsx)(H.E, { variant: "text-md/normal", className: uV.G3, children: R.intl.string(R.t.eAn6z2) }),
            ],
        }),
    });
}
let uw = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: l, transitionState: s } = e,
        [r, a] = E.useState(null),
        o = (0, tw.GV)(),
        { analyticsLocations: u } = (0, eP.Ay)(tL.A.USER_SETTINGS_GIFT_INVENTORY);
    return (E.useEffect(() => {
        null == i &&
            (0, ur.kd)({
                promotionId: l.id,
                promotionTitle: l.outboundTitle,
                partnerId: l.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, l.id, l.outboundTitle, l.partnerId, n, u]),
    null != r)
        ? (0, A.jsx)(uk, { onClose: t, transitionState: s })
        : null == i
          ? (0, A.jsx)(a8.y, { className: uV.Lq })
          : (0, A.jsx)(ls.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, A.jsxs)("div", {
                    className: uV.N1,
                    children: [
                        (0, A.jsx)("div", { className: uV.Qw }),
                        (0, A.jsx)(p.D, { variant: "heading-xl/semibold", children: R.intl.string(R.t["23BfZh"]) }),
                        (0, A.jsx)(H.E, {
                            variant: "text-md/normal",
                            className: uV.G3,
                            children: l.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: R.intl.string(R.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: R.intl.string(R.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, ur.kc)(i, l);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: s,
                "aria-label": o,
                children: (0, A.jsxs)("div", {
                    children: [
                        (0, A.jsx)(i4.c, { className: uV.M5 }),
                        (0, A.jsx)(tQ.D, {
                            label: R.intl.string(R.t.s9LFQh),
                            helperText: R.intl.string(R.t["F+nFTZ"]),
                            children: (0, A.jsx)(uM.A, {
                                value: i,
                                buttonColor: sV.$n.Colors.BRAND,
                                buttonLook: sV.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var uF = n(707554),
    uB = n(339048),
    uz = n(136380);
function uX() {
    let e = (0, h.yK)([uc.A], () => uc.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = B().groupBy(e, (e) => (0, ug.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [n, i] = E.useState(!1);
    if (
        (E.useEffect(() => {
            e5.h.wait(() => {
                (0, uB.XJ)().then(() => i(!0));
            });
        }, []),
        !n)
    )
        return (0, A.jsx)(a8.y, { className: uz.Lq });
    if (0 === Object.keys(t).length)
        return (0, A.jsxs)("div", {
            className: uz.p$,
            children: [
                (0, A.jsx)("div", { className: uz.QT }),
                (0, A.jsx)(uF.H, { className: uz.ks, children: R.intl.string(R.t.B1qgZn) }),
                (0, A.jsx)("p", {
                    className: uz.WO,
                    children: R.intl.format(R.t.HezvJ8, {
                        onClick: function () {
                            (0, nl.openUserSettings)(c.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let l = B()
        .keys(t)
        .map((e) => {
            let { skuId: n, subscriptionPlanId: i, giftStyle: l } = (0, ug.X6)(e);
            return (0, A.jsx)(uR, { skuId: n, subscriptionPlanId: i, entitlements: t[e], giftStyle: l }, e);
        });
    return (0, A.jsx)(X.B, { gap: "lg", children: l });
}
function uY(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [l, s] = E.useState(!1),
        [r, a] = E.useState(!1);
    function o() {
        return s((e) => !e);
    }
    let u = (0, uP.Ay)(),
        d = (0, ur.WD)(n.id, u),
        c = null != i,
        g = E.useMemo(
            () =>
                (0, io.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? ia()(n.outboundRedemptionEndDate)
                            : ia()(n.endDate).add(uU)
                        : ia()(n.endDate),
                    "LL",
                ),
            [n, c],
        );
    c && l
        ? (t = R.intl.format(R.t.pkxVx6, { endDate: g, onClickDetails: o }))
        : c && !l
          ? (t = R.intl.format(R.t["4sFeob"], { endDate: g, onClickDetails: o }))
          : !c && l
            ? (t = R.intl.format(R.t["RBnE+l"], { endDate: g, onClickDetails: o }))
            : c || l || (t = R.intl.format(R.t["57+7Qn"], { endDate: g, onClickDetails: o }));
    let m = c ? R.intl.string(R.t["2cHUti"]) : R.intl.string(R.t.O13yhz),
        h = (0, uo.N)()?.isEligible === !0,
        S = E.useCallback(() => a(!1), []),
        { outboundTitle: T, outboundTermsAndConditions: x } = n;
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsxs)("div", {
                className: uz.AX,
                children: [
                    (0, A.jsxs)("div", {
                        className: uz.Pg,
                        children: [
                            (0, A.jsxs)("div", {
                                className: uz.At,
                                children: [
                                    (0, A.jsx)("div", {
                                        className: uz.$G,
                                        children: (0, A.jsx)("img", { alt: "", src: d, className: uz.IJ }),
                                    }),
                                    (0, A.jsxs)("div", {
                                        children: [
                                            (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: T }),
                                            (0, A.jsx)(H.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (c || h) && (0, A.jsx)(_.$, { text: m, onClick: () => a(!0), size: "sm" }),
                        ],
                    }),
                    l &&
                        (0, A.jsx)(H.E, {
                            className: uz.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: uG.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, A.jsx)(uD.aF, {
                    renderModal: (e) =>
                        (0, A.jsx)(uw, {
                            ...e,
                            onClose: S,
                            onClaim: o$.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: S,
                }),
        ],
    });
}
function uH(e) {
    let { redesign: t = !1 } = e,
        n = (0, h.yK)([uc.A], () => uc.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, uo.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: s,
            claimedOutboundPromotionCodeMap: r,
        } = (0, o0.y7)(),
        a = n.find((e) => e.giftCodeBatchId === tX.FB && !e.consumed),
        o = n.filter((e) => e.giftCodeBatchId === tX.Bu && !e.consumed) ?? [],
        [u, d] = B().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === tX.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = l.length + s.length > 0,
        g =
            t || !c
                ? null
                : (0, A.jsxs)("div", {
                      className: uz.N1,
                      children: [
                          (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.wFsj3B) }),
                          (0, A.jsx)(i4.c, { className: uz.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, A.jsxs)("div", {
                      className: uz.uo,
                      children: [
                          (0, A.jsx)(rQ.t, {
                              size: "md",
                              color: nQ.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: uz.PC,
                          }),
                          (0, A.jsx)(H.E, {
                              variant: "text-md/normal",
                              className: uz.Qw,
                              children: R.intl.format(R.t.G4fwxK, {
                                  onClick: () => {
                                      (0, tM.default)(), (0, t$.pX)(S.BVt.APPLICATION_STORE);
                                  },
                              }),
                          }),
                          (0, A.jsx)(uu.A, {
                              showGradient: !0,
                              className: uz.aA,
                              subscriptionTier: tX.pe.TIER_2,
                              textOptions: { textOverride: R.intl.string(R.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, A.jsxs)("div", {
        children: [
            g,
            (0, A.jsx)(ud.A, {
                className: uz.Yj,
                isShown: !1 === i && c,
                type: ud.i.PREMIUM,
                hasBackground: !0,
                children: (0, A.jsxs)("div", {
                    className: uz.DE,
                    children: [
                        m,
                        s.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, A.jsx)(uY, { outboundPromotion: n, code: t }, n.id);
                        }),
                        l.map((e) => (0, A.jsx)(uY, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, A.jsx)(
                                  uR,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: tX.FB,
                                  },
                                  (0, ug.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, A.jsx)(
                                  uR,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: tX.Bu,
                                  },
                                  (0, ug.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, A.jsx)(
                                  uR,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: tX.Bu,
                                  },
                                  (0, ug.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let uK = (0, d.zZ)(c.X.MY_GIFTS_CATEGORY, {
        useTitle: uZ,
        buildLayout: () => [uW],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, h.cf)(
                    [ua.A],
                    () => ({
                        claimedOutboundPromotionCodes: ua.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: ua.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, o0.T1)({ includeClaimedPromotions: !0 }),
                i = (0, ur.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    uW = (0, d.E2)(c.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [uZ()],
        Component: () => (0, A.jsx)(uH, { redesign: !0 }),
    });
function uZ() {
    return R.intl.string(R.t.YzjdWJ);
}
let uq = (0, d.zZ)(c.X.PURCHASED_GIFTS_CATEGORY, { useTitle: uJ, buildLayout: () => [uQ] }),
    uQ = (0, d.E2)(c.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [uJ()], Component: () => (0, A.jsx)(uX, {}) });
function uJ() {
    return R.intl.string(R.t.FWe6CP);
}
var u$ = n(532446),
    u0 = n(499454);
class u1 extends E.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: S.ZSU.BUTTON_CTA };
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
                    await (0, ol.Qp)(n),
                        (0, ol.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, a7.A)(),
                        }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, ug.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await uA.Ay.resolveGiftCode(e);
            if (null != i && null != i.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            tt.default.track(S.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: S.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: S.ZSU.BUTTON_CTA,
                },
            }),
                (0, u0.h)({ processedCode: e }),
                this.setState({ codeInput: "" });
        } catch (e) {
            this.setState({ hasError: !0 });
        } finally {
            this.setState({ submitting: !1 });
        }
    };
    render() {
        let { redesign: e, obscureInput: t } = this.props,
            { codeInput: n, submitting: i, hasError: l, isPromoCode: s } = this.state,
            r = e ? R.intl.string(R.t["hVEn/j"]) : R.intl.string(R.t.SeKIoS),
            a = e ? R.intl.string(R.t.epHMtp) : void 0;
        return (0, A.jsx)(n$.n, {
            label: e ? void 0 : R.intl.string(R.t["il+VCo"]),
            children: (0, A.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, A.jsxs)(u$.M, {
                    children: [
                        (0, A.jsx)(la.k, {
                            label: r,
                            description: a,
                            type: t ? "password" : "text",
                            value: n,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !s && l ? R.intl.string(R.t.Y11a2u) : null,
                            helperText: s
                                ? R.intl.format(R.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${n}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, A.jsx)(_.$, {
                            variant: "primary",
                            text: R.intl.string(R.t.KIpp7M),
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
function u2(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, oG.c)({ location: "UserSettingsBilling" }),
        i = E.useContext(tt.AnalyticsContext),
        l = (0, h.bG)([te.A], () => te.A.enabled);
    return (0, A.jsx)(u1, { analyticsContext: i, obscureInput: l, acceptGiftCardRedemption: n, redesign: t });
}
let u3 = (0, d.zZ)(c.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => R.intl.string(R.t["il+VCo"]),
        buildLayout: () => [u6],
        usePredicate: () => !(0, o1.Hp)(),
    }),
    u6 = (0, d.E2)(c.X.REDEEM_CODE_INPUT, {
        Component: () => (0, A.jsx)(u2, { redesign: !0 }),
        useSearchTerms: () => [R.intl.string(R.t["jcSP+g"]), R.intl.string(R.t["il+VCo"])],
    }),
    u5 = (0, d.t_)(c.X.GIFT_PANEL, {
        useTitle: () => R.intl.string(R.t["jcSP+g"]),
        buildLayout: () => [u3, uK, ul, uq, o3],
        initialize: () => {
            o$.Ay.fetchClaimedOutboundPromotionCodes(), (0, oJ.Ig)("gift_inventory") && (0, oQ.o0)(oZ.$.GIFTING);
        },
    }),
    u4 = (0, d.i4)(c.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["jcSP+g"]),
        icon: oq.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, o0.IO)().length;
            return E.useMemo(() => ({ badgeType: m.Xi.COUNT, count: e }), [e]);
        },
        buildLayout: () => [u5],
    });
var u8 = n(659758),
    u7 = n(279694),
    u9 = n(815846);
let de = (0, d.E2)(c.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, h.bG)([sn.default], () => sn.default.getCurrentUser());
            return (0, r9.YE)(e, tX.PremiumTypes.TIER_2) ? (0, A.jsx)(u9.A, {}) : (0, A.jsx)(u7.A, {});
        },
        useSearchTerms: () => [R.intl.string(R.t.Ipxkog)],
    }),
    dt = (0, d.zZ)(c.X.NITRO_CATEGORY, { buildLayout: () => [de] }),
    dn = (0, d.t_)(c.X.NITRO_PANEL, {
        useTitle: () => R.intl.string(R.t.Ipxkog),
        useObscuredNotice: a5.L,
        buildLayout: () => [dt],
    }),
    di = (0, d.i4)(c.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.Ipxkog),
        icon: rQ.t,
        usePersistentBadge: function (e) {
            let t = (0, u8.e)(e);
            return E.useMemo(() => ({ badgeType: m.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [dn],
    });
var dl = n(104510),
    ds = n(820739),
    dr = n(73825),
    da = n(160946),
    du = n(859241),
    dd = n(531260),
    dc = n(527113),
    dg = n(338548),
    dm = n(776096),
    dA = n(711014),
    dE = n(178368),
    dh = n(809545),
    dS = n(168482);
function dT() {
    return (0, A.jsxs)("div", {
        className: dh.iE,
        children: [
            (0, A.jsx)("img", { className: dh.Kk, alt: "", src: dS }),
            (0, A.jsxs)("div", {
                className: dh.pq,
                children: [
                    (0, A.jsx)(H.E, { variant: "text-lg/bold", children: R.intl.string(R.t.ZHNSYf) }),
                    (0, A.jsx)(H.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: R.intl.string(R.t.kCj5ps),
                    }),
                ],
            }),
            (0, A.jsx)(_.$, {
                variant: "secondary",
                text: R.intl.string(R.t.JFlifp),
                onClick: function () {
                    (0, t$.pX)(S.BVt.GUILD_DISCOVERY), (0, tM.default)();
                },
            }),
        ],
    });
}
var dp = n(365199),
    dx = n(878678),
    df = n(443865),
    dI = n(980707),
    d_ = n(473145);
function dN(e) {
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
                label: null != t.premiumGuildSubscription ? R.intl.string(R.t["PR0n//"]) : R.intl.string(R.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? R.intl.string(R.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: R.intl.string(R.t.twFU3R), subtext: l ? null : R.intl.string(R.t.oQ9lOh), disabled: !l },
            uncancel: { label: R.intl.string(R.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (s.status) {
        case S.Dmq.PAST_DUE:
            (o.cancel.disabled = !0), (o.cancel.subtext = R.intl.string(R.t.WnL6DV)), (o.uncancel.disabled = !0);
            break;
        case S.Dmq.PAUSE_PENDING:
        case S.Dmq.PAUSED:
            a === tX.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = R.intl.string(R.t.LiLRRT)),
                (o.cancel.subtext = R.intl.string(R.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let u = E.useMemo(
        () =>
            s.isPausedOrPausePending && a === tX.xc.NONE
                ? (0, A.jsx)(e3.Dr, {
                      id: "manage-subscription",
                      label: R.intl.string(R.t.obRG6Y),
                      action: () => (0, nl.openUserSettings)(c.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: df.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: df.LightbulbIcon },
                  })
                : null,
        [a, s],
    );
    return (0, A.jsxs)(dI.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": R.intl.string(R.t.ogxXGq),
        onClose: i,
        children: [
            (0, A.jsx)(e3.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, lr.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("203112"),
                            n.e("647367"),
                            n.e("677508"),
                            n.e("889002"),
                            n.e("610943"),
                            n.e("534428"),
                            n.e("693173"),
                            n.e("418710"),
                            n.e("238249"),
                        ]).then(n.bind(n, 724624));
                        return (n) =>
                            (0, A.jsx)(e, { ...n, guildBoostSlots: [t], locationSection: S.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, d_.I5)(t)
                ? (0, A.jsx)(e3.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, lr.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, A.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, A.jsx)(e3.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, lr.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 983511));
                              return (n) => (0, A.jsx)(e, { ...n, guildBoostSlot: t });
                          });
                      },
                      disabled: o.cancel.disabled,
                      color: "danger",
                  }),
            u,
        ],
    });
}
var dC = n(545934),
    db = n(548118),
    dy = n(987144),
    dv = n(864310),
    dj = n(290413);
function dO(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, dv.A)(t.id);
    return (0, A.jsxs)("div", {
        className: n ?? dj.OA,
        children: [
            (0, A.jsx)(db.Ay, { className: dj.$f, guild: t, size: db.Ay.Sizes.MEDIUM }),
            (0, A.jsxs)("div", {
                className: dj.gI,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, A.jsxs)("div", {
                        className: dj.ew,
                        children: [
                            (0, A.jsxs)("div", {
                                className: dj.QW,
                                children: [
                                    (0, A.jsx)(dl._, {
                                        className: dj.Wz,
                                        color: nQ.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: R.intl.format(R.t["pob/cL"], { subscriptions: i }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== S.TVA.NONE &&
                                (0, A.jsxs)(A.Fragment, {
                                    children: [
                                        (0, A.jsx)("div", { className: dj.zk }),
                                        (0, A.jsx)(H.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, d_.gb)(t.premiumTier, { useLevels: !1 }),
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
function dL(e) {
    let { guildId: t } = e,
        n = (0, h.bG)([lE.A], () => lE.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, A.jsxs)("div", {
              className: dj.Nr,
              children: [
                  (0, A.jsx)(dO, { guild: n }),
                  (0, A.jsx)(_.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: dl._,
                      text: R.intl.string(R.t.aBHecF),
                      onClick: () => {
                          (0, dy.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: S.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: S.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: S.ZSU.BUTTON_CTA,
                                  objectType: S.AnalyticsObjectTypes.BUY,
                              },
                              guild: n,
                          });
                      },
                  }),
              ],
          });
}
var dR = n(747381);
let dD =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function dP(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: l, isLast: s } = e,
        r = E.useRef(null),
        a = (0, d_.I5)(t),
        o = E.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, dd.A)(),
        c = E.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === S.TVA.NONE) return "";
                    let n = [
                        R.intl.formatToPlainString(R.t["dLlKX/"], { numEmojiSlots: tX.TG[e].limits.emoji }),
                        R.intl.formatToPlainString(R.t["+ANIfv"], { numStickerSlots: tX.TG[e].limits.stickers }),
                        R.intl.formatToPlainString(R.t["4gt60b"], {
                            numSoundboardSlots: tX.TG[e].limits.soundboardSounds,
                        }),
                        R.intl.formatToPlainString(R.t.XahSjZ, {
                            resolution: tX.TG[e].limits.screenShareQualityResolution,
                            framerate: tX.TG[e].limits.screenShareQualityFramerate,
                        }),
                        R.intl.formatToPlainString(R.t.NbNs7S, { bitrate: tX.TG[e].limits.bitrate / 1e3 }),
                        R.intl.formatToPlainString(R.t.VVKcpn, { filesize: tX.TG[e].limits.fileSize / 1024 / 1024 }),
                        R.intl.formatToPlainString(R.t.TbpCvv, { numVideoStageSeats: tX.TG[e].limits.stageVideoUsers }),
                        R.intl.string(R.t.LDyX3i),
                        R.intl.string(R.t.YtGlPW),
                    ];
                    e >= S.TVA.TIER_2 && (n.push(R.intl.string(R.t.SztbtN)), n.push(R.intl.string(R.t["3GK91n"]))),
                        e >= S.TVA.TIER_3 && n.push(R.intl.string(R.t["XUUJd+"]));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let l = n[Math.abs(i) % n.length];
                    return R.intl.formatToPlainString(R.t["/dOAmQ"], { perk: l });
                })(n, t.id),
            [n, t.id],
        ),
        g = E.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? ou.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return R.intl.formatToPlainString(R.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = E.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        );
    return (0, A.jsxs)("div", {
        className: is()(dR.iq, { [dR.Mt]: s }),
        children: [
            (0, A.jsxs)("div", {
                className: dR.kd,
                children: [
                    (0, A.jsx)("img", { alt: "", className: dR.bB, src: dD }),
                    a && null != m
                        ? (0, A.jsx)(H.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: R.intl.format(R.t.Z4ULRD, { date: m }),
                          })
                        : (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(H.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)("div", { className: dR.zk }),
                                              (0, A.jsx)(H.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: R.intl.formatToPlainString(R.t.YJlswH, {
                                                      date: o.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !u &&
                                      null != i.trialEndsAt &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)("div", { className: dR.zk }),
                                              (0, A.jsx)(H.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: R.intl.formatToPlainString(R.t.OdPSpk, {
                                                      date: new Date(i.trialEndsAt).toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            (0, A.jsx)(r4.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, A.jsx)(dN, {
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
                    (0, A.jsx)(nn.D, {
                        innerRef: r,
                        "aria-label": R.intl.string(R.t.PdRCRg),
                        className: dR.Mj,
                        ...e,
                        children: (0, A.jsx)(dp.MoreHorizontalIcon, {
                            size: "xs",
                            color: nQ.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function dG(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: l } = e,
        s = (0, h.bG)([lE.A], () => lE.A.getGuild(t), [t]);
    return (0, A.jsxs)("div", {
        className: dR.Nr,
        children: [
            (0, A.jsx)("div", {
                className: dR.MY,
                children:
                    null != s
                        ? (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(dO, { guild: s, className: dR.OA }),
                                  (0, A.jsx)(_.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: R.intl.string(R.t.KLOhbO),
                                      onClick: () => {
                                          (0, tM.default)(),
                                              (0, dx.K4)({
                                                  guildId: s.id,
                                                  location: {
                                                      section: S.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              });
                                      },
                                  }),
                              ],
                          })
                        : (0, A.jsx)("div", {
                              className: dR.OA,
                              children: (0, A.jsx)(p.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: R.intl.string(R.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, A.jsx)(
                    dP,
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
function dU(e) {
    let { guildBoostSlots: t, premiumSubscription: n, pausedAppliedGuildBoosts: i, isPaused: l } = e,
        { boostsByGuildId: s, numActiveSlots: r } = E.useMemo(() => {
            if (l && null != n)
                return {
                    boostsByGuildId: (function (e, t) {
                        let n = {};
                        for (let t of e) t.guildId in n || (n[t.guildId] = []), n[t.guildId].push(t);
                        let i = {};
                        for (let e of Object.keys(n)) {
                            let l = n[e];
                            i[e] = l.map((n) =>
                                dC.A.createFromServer(
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
                if ((!(0, d_.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    e in s || (s[e] = []), s[e].push(i);
                }
            }
            return { boostsByGuildId: s, numActiveSlots: e };
        }, [t, l, i, n]);
    if (null == n || 0 === Object.keys(s).length) return null;
    let a = r > r9.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, A.jsx)("div", {
        className: dR.kR,
        children: ou.default
            .keys(s)
            .map((e) => (0, A.jsx)(dG, { guildId: e, slots: s[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var dM = n(502572),
    dV = n(983511),
    dk = n(342744),
    dw = n(496431);
let dF = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, dw.A)(n);
    return (0, A.jsx)(H.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, io.uN)(i, { days: R.t.WUTPDc, hours: R.t.c1qodV, minutes: R.t["2+A3dv"] }),
    });
};
var dB = n(731536);
function dz(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        l = (0, h.bG)([oM.A], () => oM.A.getPremiumTypeSubscription()),
        { unappliedSlots: s, numActiveSlots: r } = E.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) !(0, d_.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i);
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != l ? r9.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0),
        o = l?.isPausedOrPausePending === !0 && i === tX.xc.NONE;
    return 0 === s.length
        ? null
        : (0, A.jsxs)("div", {
              className: dB.Nr,
              children: [
                  (0, A.jsxs)("div", {
                      className: dB.MY,
                      children: [
                          (0, A.jsxs)("div", {
                              className: dB._L,
                              children: [
                                  (0, A.jsxs)("div", {
                                      className: dB.MD,
                                      children: [
                                          (0, A.jsx)("img", { alt: "", className: dB.F8, src: dD }),
                                          (0, A.jsx)("div", {
                                              className: is()(dB.qS, "theme-dark"),
                                              children: (0, A.jsx)("span", { className: dB.Vv, children: s.length }),
                                          }),
                                      ],
                                  }),
                                  (0, A.jsxs)("div", {
                                      className: dB.Qp,
                                      children: [
                                          (0, A.jsx)(H.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: R.intl.format(R.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                          (0, A.jsx)(H.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: R.intl.format(R.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, A.jsx)(dM.A, {
                              shouldShow: o,
                              text: R.intl.string(R.t.mOWsF1),
                              "aria-label": R.intl.string(R.t.mOWsF1),
                              children: (e) =>
                                  (0, A.jsx)(_.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: dl._,
                                      text: R.intl.string(R.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, lr.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("677508"),
                                                  n.e("418710"),
                                              ]).then(n.bind(n, 770101));
                                              return (t) =>
                                                  (0, A.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          t.onClose(),
                                                              (0, dy.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: S.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: S.JJy.SETTINGS_PREMIUM,
                                                                      object: S.ZSU.BUTTON_CTA,
                                                                      objectType: S.AnalyticsObjectTypes.BUY,
                                                                  },
                                                                  guild: e,
                                                              });
                                                      },
                                                  });
                                          });
                                      },
                                  }),
                          }),
                      ],
                  }),
                  s.map((e, t) =>
                      (0, A.jsx)(
                          dX,
                          {
                              slot: e,
                              isLast: t === s.length - 1,
                              isCancelable: a && !(0, d_.I5)(e),
                              isCanceled: (0, d_.I5)(e),
                              premiumSubscription: l,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function dX(e) {
    let t,
        { slot: n, isLast: i, isCancelable: l, isCanceled: s, premiumSubscription: r, modificationsDisabled: a } = e,
        o = E.useRef(null),
        u = E.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]);
    t =
        s && null != r
            ? (0, A.jsx)(H.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: R.intl.format(R.t.Z4ULRD, { date: r.currentPeriodEnd }),
              })
            : n.isOnCooldown() && null != u
              ? (0, A.jsx)(dF, { cooldown: u.getTime() })
              : (0, A.jsx)(H.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: R.intl.string(R.t["2mcafz"]),
                });
    let d = l || s;
    return (0, A.jsxs)("div", {
        className: is()(dB.iq, { [dB.Mt]: i }),
        children: [
            (0, A.jsxs)("div", {
                className: dB.kd,
                children: [(0, A.jsx)("img", { alt: "", className: dB.bB, src: dD }), t],
            }),
            d &&
                (0, A.jsx)(r4.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, A.jsxs)(dI.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": R.intl.string(R.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                l &&
                                    (0, A.jsx)(e3.Dr, {
                                        id: "cancel-boost",
                                        label: R.intl.string(R.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? R.intl.string(R.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, lr.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, A.jsx)(dV.default, { ...e, guildBoostSlot: n }),
                                                );
                                        },
                                    }),
                                s &&
                                    (0, A.jsx)(e3.Dr, {
                                        id: "uncancel-boost",
                                        label: R.intl.string(R.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? R.intl.string(R.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, lr.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, A.jsx)(dk.default, { ...e, guildBoostSlotId: n.id }),
                                                );
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, A.jsx)(nn.D, {
                            innerRef: o,
                            "aria-label": R.intl.string(R.t["UKOtz+"]),
                            className: dB.Mj,
                            ...e,
                            children: (0, A.jsx)(dp.MoreHorizontalIcon, {
                                size: "xs",
                                color: nQ.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var dY = n(834612);
function dH(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: l,
            fractionalPremiumState: s,
        } = e,
        r = ex.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ),
        a = i?.isPaused === !0 && s !== tX.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && l.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, A.jsxs)("div", {
              className: dY.i,
              children: [
                  (0, A.jsxs)("div", {
                      className: dY.b,
                      children: [
                          (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.W5rDjW) }),
                          (0, A.jsx)(H.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: R.intl.format(R.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, A.jsx)(dU, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: l,
                      isPaused: a,
                  }),
                  (0, A.jsx)(dz, { guildBoostSlots: t, fractionalPremiumState: s }),
              ],
          })
        : null;
}
var dK = n(333722),
    dW = n(9146);
function dZ() {
    return (0, A.jsxs)("div", {
        className: dW.iE,
        children: [
            (0, A.jsx)(p.D, { variant: "heading-xl/normal", children: R.intl.string(R.t.IzKs3o) }),
            (0, A.jsx)("div", {
                className: dW.kR,
                children: dK.s.map((e, t) => {
                    let n = e.icon;
                    return (0, A.jsxs)(
                        "div",
                        {
                            className: dW.Nr,
                            children: [
                                (0, A.jsx)(n, { className: dW.Kk }),
                                (0, A.jsx)(H.E, {
                                    className: dW.h_,
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
var dq = n(847374),
    dQ = n(232122),
    dJ = n(665984);
function d$() {
    let [e, t] = E.useState(null),
        [n, i] = E.useState(null);
    return (0, A.jsxs)("div", {
        className: dJ.iE,
        children: [
            (0, A.jsx)(p.D, { variant: "heading-xl/normal", children: R.intl.string(R.t.HPJ6Nj) }),
            (0, A.jsx)("ul", {
                className: dJ.p_,
                children: dQ.m.map((l, s) => {
                    let r = e === s,
                        a = n === s,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, A.jsxs)(
                        nn.D,
                        {
                            tag: "li",
                            className: is()(dJ.Aw, { [dJ.$K]: r }),
                            onClick: () => t((e) => (e === s ? null : s)),
                            onMouseEnter: () => i(s),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, A.jsxs)("div", {
                                    className: dJ.k7,
                                    children: [
                                        (0, A.jsx)(H.E, {
                                            className: dJ.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: l.getQuestion(),
                                        }),
                                        (0, A.jsx)(dq.a, {
                                            size: "sm",
                                            color: nQ.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: dJ.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, A.jsx)(H.E, {
                                        className: dJ.ZF,
                                        color: "text-muted",
                                        variant: "text-sm/medium",
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
var d0 = n(182859),
    d1 = n(25525),
    d2 = n(416763);
function d3() {
    let e = ex.A.getArticleURL(S.MVz.GUILD_SUBSCRIPTIONS);
    return (0, A.jsxs)("div", {
        className: d2.wx,
        children: [
            (0, A.jsxs)("div", {
                className: d2.Qs,
                children: [
                    (0, A.jsxs)("div", {
                        className: d2.B5,
                        children: [
                            (0, A.jsx)("img", { alt: "", className: d2.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, A.jsx)(p.D, {
                                variant: "heading-xl/normal",
                                children: R.intl.string(d1.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, A.jsx)(H.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: R.intl.format(R.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, A.jsx)(d0.A, {
                variant: "member",
                className: d2.iO,
                analyticsLocation: {
                    page: S.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: S.JJy.HERO,
                    object: S.ZSU.CARD,
                },
                videoPlacement: "settings_header",
            }),
        ],
    });
}
var d6 = n(315629),
    d5 = n(87719),
    d4 = n(961085);
function d8() {
    let e = (0, h.bG)([sn.default], () => sn.default.getCurrentUser());
    if (null == e || r9.Ay.hasFreeBoosts(e)) return null;
    let t = ex.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ);
    return (0, A.jsxs)(d6.h, {
        color: "nitro-pink",
        className: d4.vK,
        children: [
            (0, A.jsxs)("div", {
                className: d4.nw,
                children: [
                    (0, A.jsx)("img", { alt: "", className: d4.q3, src: dD }),
                    (0, A.jsxs)("div", {
                        className: d4.Tm,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.format(R.t.Idh1Vs, { count: tX.M4, boostCount: tX.M4 }),
                            }),
                            (0, A.jsxs)("div", {
                                className: d4.xv,
                                children: [
                                    (0, A.jsx)(rQ.t, { className: d4.nE }),
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: R.intl.format(R.t["6UAu+f"], {
                                            count: tX.M4,
                                            boostCount: tX.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)(_.$, {
                variant: "expressive",
                size: "sm",
                icon: rQ.t,
                text: R.intl.string(R.t["8x0jKT"]),
                onClick: d5.e,
            }),
        ],
    });
}
var d7 = n(532991);
function d9() {
    let e = (0, h.bG)([dm.A], () => dm.A.affinities),
        t = (0, h.bG)([dA.Ay], () => dA.Ay.getFlattenedGuildIds()),
        n = E.useMemo(() => {
            let n = e.slice(0, 3).map((e) => e.guildId);
            for (let e = 0; e < t.length && n.length < 3; e++) {
                let i = t[e];
                n.includes(i) || n.push(i);
            }
            return n;
        }, [e, t]);
    return 0 === n.length
        ? null
        : (0, A.jsxs)("div", {
              className: d7.i,
              children: [
                  (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.r90Wgo) }),
                  (0, A.jsx)("div", { className: d7.k, children: n.map((e) => (0, A.jsx)(dL, { guildId: e }, e)) }),
              ],
          });
}
var ce = n(967246);
function ct(e) {
    let { count: t, disabledReason: i } = e,
        l = ex.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ);
    return (0, A.jsxs)(d6.h, {
        color: "nitro-pink",
        className: ce.vK,
        children: [
            (0, A.jsxs)("div", {
                className: ce.nw,
                children: [
                    (0, A.jsxs)("div", {
                        className: ce.MD,
                        children: [
                            (0, A.jsx)("img", { alt: "", className: ce.F8, src: dD }),
                            (0, A.jsx)("div", {
                                className: is()(ce.qS, "theme-dark"),
                                children: (0, A.jsx)("span", { className: ce.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, A.jsxs)("div", {
                        className: ce.Tm,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.format(R.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, A.jsxs)("div", {
                                className: ce.xv,
                                children: [
                                    (0, A.jsx)(rQ.t, { className: ce.nE }),
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: R.intl.format(R.t["6UAu+f"], {
                                            count: tX.M4,
                                            boostCount: tX.M4,
                                            helpdeskArticle: l,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)(dM.A, {
                shouldShow: null != i,
                text: i ?? "",
                "aria-label": i,
                children: (e) =>
                    (0, A.jsx)(_.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: dl._,
                        text: R.intl.string(R.t.BMx1iy),
                        disabled: null != i,
                        onClick: () => {
                            (0, lr.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("677508"), n.e("418710")]).then(
                                    n.bind(n, 770101),
                                );
                                return (t) =>
                                    (0, A.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            t.onClose(),
                                                (0, dy.g)({
                                                    analyticsLocations: [],
                                                    analyticsLocation: {
                                                        page: S.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                        section: S.JJy.SETTINGS_PREMIUM,
                                                        object: S.ZSU.BUTTON_CTA,
                                                        objectType: S.AnalyticsObjectTypes.BUY,
                                                    },
                                                    guild: e,
                                                });
                                        },
                                    });
                            });
                        },
                    }),
            }),
        ],
    });
}
var cn = n(89150);
function ci(e) {
    let { premiumSubscription: t } = e,
        n = (0, h.bG)([dE.A], () => dE.A.boostSlots),
        i = E.useMemo(() => Object.values(n), [n]),
        l = (0, h.bG)([sn.default], () => sn.default.getCurrentUser()),
        s = (0, h.bG)([dm.A], () => dm.A.affinities),
        r = (0, h.bG)([dA.Ay], () => dA.Ay.getFlattenedGuildIds()),
        a = s.length > 0 || r.length > 0,
        o = E.useMemo(() => i.filter((e) => null != e.premiumGuildSubscription), [i]).length,
        u = (0, h.bG)([du.A], () => du.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, dd.A)({ forceFetch: !0 }),
        c = l?.isPremiumGroupMember(),
        g = t?.isPausedOrPausePending === !0 && d === tX.xc.NONE,
        m = E.useMemo(() => i.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [i]),
        S = g ? R.intl.string(R.t.mOWsF1) : m ? void 0 : R.intl.string(R.t.xr4m5B),
        T = E.useMemo(() => {
            if (null == t) return 0;
            let e = r9.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : Math.max(0, e - o);
        }, [t, i.length, o]);
    return (0, A.jsxs)("div", {
        className: cn.GO,
        children: [
            (0, A.jsx)(oX.kb, { className: cn.ek }),
            (0, A.jsx)(d3, {}),
            (0, A.jsx)(d8, {}),
            T > 0 && (0, A.jsx)(ct, { count: T, disabledReason: S }),
            c && (0, A.jsx)(dg.A, {}),
            !a && (0, A.jsx)(dT, {}),
            (0, A.jsxs)("div", {
                className: cn.C_,
                children: [
                    (0, A.jsx)(dH, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, A.jsx)(d9, {}),
                    (0, A.jsx)(dc.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, A.jsx)(dZ, {}),
                    (0, A.jsx)(d$, {}),
                ],
            }),
        ],
    });
}
var cl = n(819677);
let cs = (0, d.E2)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            E.useEffect(() => {
                e5.h.wait(() => {
                    oi.hP(), oi.$o(), (0, ds.CD)(), (0, dr.zS)(null, null, S.tF5.DISCOVERY), (0, ds.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, h.cf)([oM.A], () => ({
                    hasFetchedSubscriptions: oM.A.hasFetchedSubscriptions(),
                    premiumSubscription: oM.A.getPremiumTypeSubscription(),
                })),
                n = (0, da.Y)(),
                i = (0, h.bG)([oU.A], () => oU.A.hasFetchedPaymentSources),
                l = (0, h.bG)([du.A], () => du.A.isFetchingCurrentUserAppliedBoosts),
                s = !e || !n || !i || l,
                [r, a] = E.useState(!1);
            return (s || r || a(!0), s && !r)
                ? (0, A.jsx)("div", { className: is()(cl.kL, cl.Lq), children: (0, A.jsx)(a8.y, {}) })
                : (0, A.jsxs)("div", {
                      className: cl.kL,
                      children: [
                          (0, A.jsx)("div", { className: cl.Tp }),
                          (0, A.jsx)("div", { className: cl.Qs, children: (0, A.jsx)(ci, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t["+CbP2v"]), R.intl.string(R.t.Nn1lJy)],
    }),
    cr = (0, d.zZ)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [cs] }),
    ca = (0, d.t_)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => R.intl.string(R.t["+CbP2v"]),
        buildLayout: () => [cr],
    }),
    co = (0, d.i4)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["+CbP2v"]),
        icon: dl._,
        buildLayout: () => [ca],
    });
var cu = n(153659),
    cd = n(155984),
    cc = n(357758),
    cg = n(262077),
    cm = n(281445),
    cA = n(933832),
    cE = n(624479),
    ch = n(626584),
    cS = n(131607),
    cT = n(95035),
    cp = n(196736),
    cx = n(685743),
    cf = n(349085),
    cI = n(342942),
    c_ = n(376205),
    cN = n(252589),
    cC = n(758836),
    cb = n(49999),
    cy = n(394107),
    cv = n(439050);
let cj = new ch.A("GameServerSubscriptionsSection");
function cO(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function cL(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let cR = E.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: l } = (0, eP.Ay)(),
        s = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, cf.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, cS.kn)([eu.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eu.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = uI.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: m } = (0, cx.A)(c, t.id, tL.A.GAME_SERVER_PAGE, t.serverIp),
        T = E.useCallback(() => {
            (0, cI.A)({
                provider: cm.X.SHOCKBYTE,
                onAccept: () => {
                    u(cb.i.TAKE_ACTION), g();
                },
            });
        }, [u, g]),
        {
            hasSubscription: p,
            priceLabel: x,
            dateLabel: f,
            isCanceled: I,
            isDanger: N,
        } = (0, h.bG)(
            [oM.A, uN.A],
            () => {
                let e = null != s ? oM.A.getSubscriptionById(s) : null;
                if (null == e)
                    return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    l = !t && null != e.renewalMutations,
                    r = l ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? uN.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? R.intl.formatToPlainString(R.t.AbOLNu, { price: (0, oa.$g)(u, o.priceCurrency) })
                            : null,
                    c = cO(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? R.intl.formatToPlainString(cy.default["3aEgK6"], { date: c })
                        : l
                          ? R.intl.formatToPlainString(cy.default.KFSA3M, { date: c })
                          : R.intl.formatToPlainString(cy.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || l,
                };
            },
            [s, n, i],
            cL,
        ),
        C = E.useCallback(() => {
            if (null == s) return;
            let e = oM.A.getSubscriptionById(s),
                t = null != e ? cO(e.currentPeriodEnd) : "";
            (0, nJ.A)({
                title: R.intl.string(cy.default.TEYPNR),
                subtitle: R.intl.formatToPlainString(cy.default.XR1WrB, { date: t }),
                confirmText: R.intl.string(R.t["cY+Oob"]),
                cancelText: R.intl.string(cy.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        await oi.M2(s, l), await oi.hP();
                    } catch (e) {
                        cj.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [s, l]),
        b = E.useCallback(() => {
            if (null == s) return;
            let e = oM.A.getSubscriptionById(s);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? uN.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, oa.$g)(u, o.priceCurrency) : "",
                c = cO(e.currentPeriodEnd);
            (0, nJ.A)({
                title: R.intl.string(cy.default.o96qbc),
                subtitle: R.intl.formatToPlainString(cy.default["7n6Qq+"], { price: d, date: c }),
                confirmText: R.intl.string(R.t.iIvF2z),
                cancelText: R.intl.string(R.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, dr.ur)(r);
                        let t = e.items;
                        await oi.nV(
                            e,
                            { status: S.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, r9.UC)(t, e.currency),
                            l,
                        ),
                            await oi.hP();
                    } catch (e) {
                        cj.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [s, r, l, n, i]),
        y = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, A.jsxs)("div", {
        className: cv.nM,
        children: [
            (0, A.jsxs)("div", {
                className: cv.M4,
                children: [
                    (0, A.jsxs)("div", {
                        className: cv.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, A.jsx)("img", { className: cv.uP, src: a, alt: "" }),
                            (0, A.jsx)("div", { className: cv.tw }),
                        ],
                    }),
                    (0, A.jsxs)("div", {
                        className: cv.CR,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: t.serverName,
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: `${t.gameName}  \u{2022}  ${t.planName}`,
                            }),
                            y &&
                                (d
                                    ? (0, A.jsxs)("div", {
                                          className: cv.CQ,
                                          children: [
                                              (0, A.jsx)(H.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, A.jsx)(nn.D, {
                                                  className: cv.cL,
                                                  onClick: g,
                                                  "aria-label": R.intl.string(R.t.OpuAlK),
                                                  children: m
                                                      ? (0, A.jsx)(cA.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, A.jsx)(cE.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, A.jsx)(cT.A, { onClick: T, children: R.intl.string(cy.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, A.jsxs)("div", {
                className: cv.Rd,
                children: [
                    (0, A.jsxs)("div", {
                        className: cv.Ff,
                        children: [
                            null != x &&
                                (0, A.jsx)(H.E, {
                                    variant: "text-md/semibold",
                                    color: "text-default",
                                    tag: "span",
                                    children: x,
                                }),
                            null != f &&
                                (N
                                    ? (0, A.jsxs)("div", {
                                          className: cv.ez,
                                          children: [
                                              (0, A.jsx)(iX.E, { size: "xs", color: "text-feedback-critical" }),
                                              (0, A.jsx)(H.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-critical",
                                                  tag: "span",
                                                  children: f,
                                              }),
                                          ],
                                      })
                                    : (0, A.jsx)(H.E, {
                                          variant: "text-sm/medium",
                                          color: "text-muted",
                                          tag: "span",
                                          children: f,
                                      })),
                        ],
                    }),
                    p &&
                        (I
                            ? (0, A.jsx)(_.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: R.intl.string(R.t.iIvF2z),
                                  onClick: b,
                              })
                            : (0, A.jsx)(_.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: R.intl.string(R.t["ETE/oC"]),
                                  onClick: C,
                              })),
                ],
            }),
        ],
    });
});
function cD(e) {
    let { servers: t } = e,
        n = (0, cp.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, cN.Y)(),
        l = (0, h.bG)([sn.default], () => r9.Ay.canUseShopDiscounts(sn.default.getCurrentUser())),
        s = E.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, h.yK)([oM.A], () => (0, c_.HY)(t, i, (e) => oM.A.getSubscriptionById(e)), [t, i]);
    E.useEffect(() => {
        let e = r.filter((e) => !uN.A.isLoadedForSKU(e) && !uN.A.isFetchingForSKU(e));
        e.length > 0 && (0, dr.jv)(e).catch(() => {});
    }, [r]);
    let a = E.useCallback(() => {
        (0, tM.default)(), (0, t$.pX)(S.BVt.COLLECTIBLES_SHOP_WITH_TAB(cC.G2.GAME_SERVERS));
    }, []);
    return (0, A.jsxs)("div", {
        className: cv.uW,
        children: [
            (0, A.jsxs)("div", {
                className: cv.wx,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: R.intl.string(cy.default.vCzwM7),
                    }),
                    (0, A.jsxs)("div", {
                        className: cv.h_,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.string(cy.default.y85Eg9),
                            }),
                            n &&
                                (0, A.jsx)(cT.A, {
                                    onClick: a,
                                    children: (0, A.jsx)(H.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: R.intl.string(cy.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)("div", {
                className: cv.p_,
                children: t.map((e) =>
                    (0, A.jsx)(cR, { server: e, planOptionBySkuId: s, canUseShopDiscount: l }, e.id),
                ),
            }),
        ],
    });
}
var cP = n(55766),
    cG = n(696986),
    cU = n(364036);
function cM(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)(p.D, { variant: "heading-md/bold", children: R.intl.string(R.t["KzCF/6"]) }),
            (0, A.jsx)(cG.h, { size: 4 }),
            (0, A.jsx)(H.E, { variant: "text-md/normal", className: cU.yV, children: R.intl.string(R.t["3D7qCu"]) }),
            (0, A.jsx)(cG.h, { size: 24 }),
            (0, A.jsxs)("div", {
                className: cU.Nr,
                children: [
                    (0, A.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: cU.RI }),
                    (0, A.jsxs)("div", {
                        className: cU.FS,
                        children: [
                            (0, A.jsx)(p.D, {
                                variant: "heading-xl/semibold",
                                className: cU.wx,
                                children: R.intl.string(R.t["KzCF/6"]),
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-md/normal",
                                className: cU.h_,
                                children: R.intl.format(R.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, A.jsx)(_.$, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: R.intl.string(R.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}
var cV = n(872351),
    ck = n(9113),
    cw = n(599941),
    cF = n(384684),
    cB = n(2242);
let cz = [];
var cX = n(885574),
    cY = n(912851),
    cH = n(182744);
let cK = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, A.jsx)(nn.D, {
        onClick: i ? void 0 : n,
        className: cH.x6,
        children: (0, A.jsxs)("div", {
            className: cH.hQ,
            children: [
                i
                    ? (0, A.jsx)(a8.y, { type: a8.y.Type.PULSING_ELLIPSIS, className: cH.__invalid_spinner })
                    : (0, A.jsx)(H.E, { variant: "text-md/medium", className: cH.Pf, children: t }),
                (0, A.jsx)(dq.a, { size: "md", color: "currentColor", className: cH.UE }),
            ],
        }),
    });
};
var cW = n(465932),
    cZ = n(543767),
    cq = n(951555),
    cQ = n(790284),
    cJ = n(636194),
    c$ = n(624456),
    c0 = n(710144),
    c1 = n(815332),
    c2 = n(162093),
    c3 = n(557506);
function c6(e) {
    let { transitionState: t, groupListing: n, listing: i, subscription: l, onClose: s } = e,
        r = (0, tw.GV)(),
        { analyticsLocations: a } = (0, eP.Ay)(tL.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = (function (e) {
            let [t, n] = E.useState(!1),
                [i, l] = E.useState(null);
            return {
                cancelSubscription: async function (t) {
                    try {
                        return n(!0), await oi.M2(t, e), !0;
                    } catch (e) {
                        l(e);
                    } finally {
                        n(!1);
                    }
                },
                error: i,
                submitting: t,
            };
        })(a);
    async function c() {
        (await o(l.id)) && s();
    }
    let g = i.role_benefits.benefits.filter((e) => e.ref_type === cB.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === cB.bN.INTANGIBLE),
        h = ia()(l.currentPeriodEnd).format("MMMM Do, YYYY"),
        S = R.intl.formatToPlainString(R.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: h,
        });
    return (0, A.jsx)(ls.Modal, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: R.intl.string(R.t.EP6EPb), variant: "secondary", onClick: s },
            { variant: "critical-primary", text: R.intl.string(R.t.F6lUDF), onClick: c, loading: d },
        ],
        title: R.intl.string(R.t.O6l5tM),
        subtitle: S,
        onClose: s,
        children: (0, A.jsxs)(X.B, {
            gap: 8,
            children: [
                null != u ? (0, A.jsx)(iB.w, { type: "critical", children: u.message }) : null,
                (0, A.jsx)(c2.x, { listingId: i.id, guildId: n.guild_id, className: c3.P }),
            ],
        }),
    });
}
var c5 = n(319225),
    c4 = n(746080),
    c8 = n(883616);
function c7(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: l } = e;
    return (0, A.jsxs)("div", {
        className: c8.L0,
        children: [
            (0, A.jsxs)("div", {
                className: c8.a5,
                children: [
                    (0, A.jsx)(p.D, { variant: "heading-deprecated-12/semibold", className: c8.HU, children: t }),
                    i &&
                        (0, A.jsx)(le.m, {
                            text: l,
                            children: (0, A.jsx)(cX.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: c8.Mo,
                            }),
                        }),
                ],
            }),
            (0, A.jsx)(p.D, { variant: "heading-xl/semibold", className: c8.sx, children: n }),
        ],
    });
}
function c9(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, eP.Ay)(),
        [i] = (0, cZ.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tL.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        l = (0, h.bG)([oU.A], () => oU.A.hasFetchedPaymentSources);
    return null != i && l ? (0, A.jsx)(cq.A, { subscription: t, currentInvoicePreview: i }) : (0, A.jsx)(a8.y, {});
}
function ge(e) {
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
        : (0, A.jsx)(tQ.D, {
              label: R.intl.string(R.t["4neDM+"]),
              children: (0, A.jsx)("div", {
                  className: c8.__invalid_rowButtons,
                  children: n
                      ? (0, A.jsx)(_.$, { variant: "primary", text: R.intl.string(R.t.y3mAE4), onClick: r, loading: i })
                      : (0, A.jsxs)(A.Fragment, {
                            children: [
                                !t && !l && (0, A.jsx)(cK, { label: R.intl.string(R.t.FRbWR8), onClick: a }),
                                (0, A.jsx)(cK, { label: R.intl.string(R.t.Dx0lF7), onClick: s }),
                            ],
                        }),
              }),
          });
}
let gt = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: l,
            expanded: s,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, c$.M)(e),
                n = (0, h.bG)([cJ.A], () => cJ.A.getSubscriptionListingForPlan(t)),
                i = (0, h.bG)([cJ.A], () =>
                    null != n ? cJ.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                l = (0, h.bG)([lE.A], () => lE.A.getGuild(i?.guild_id)),
                [s, r] = E.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, cw.XE)();
            E.useEffect(() => {
                s && null != l && null == cJ.A.getSubscriptionSettings(l.id) && a(l.id);
            }, [s, l, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = ia()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, oa.$g)(t.price, t.currency) : "",
                              l = ia()(t.createdAt).format("M/D/YY"),
                              s = t.status === S.Dmq.CANCELED,
                              r = t.status === S.Dmq.PAST_DUE,
                              a = t.hasActiveTrial;
                          return {
                              memberSince: l,
                              nextRenewalDate: n,
                              nextRenewalLabel: s ? R.intl.string(R.t.UAfot2) : R.intl.string(R.t.CVjLcM),
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
        [o, u] = E.useState(!1),
        d = (0, tw.GV)(),
        { analyticsLocations: g } = (0, eP.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: m } = (0, cW.MH)(l?.id),
        T = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function p() {
        try {
            u(!0), await oi.QP(t, g), (0, c5.E)({ title: R.intl.string(R.t.oPV2cy), body: R.intl.string(R.t.DdRizV) });
        } finally {
            u(!1);
        }
    }
    let {
            isCancelled: x,
            isPastDue: f,
            subscriptionPrice: I,
            memberSince: _,
            nextRenewalDate: N,
            nextRenewalLabel: C,
            isTrial: b,
        } = a,
        y = n.soft_deleted || null == l || T;
    return (0, A.jsxs)("div", {
        className: c8.kL,
        children: [
            (0, A.jsx)(c0.A, {
                onClick: r,
                className: c8.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, A.jsxs)(A.Fragment, {
                        children: [
                            null != l && (0, A.jsx)(db.Ay, { guild: l, active: !0, size: db.Ay.Sizes.MEDIUM }),
                            (0, A.jsxs)("div", {
                                className: c8.if,
                                children: [
                                    (0, A.jsx)(H.E, {
                                        variant: "text-md/medium",
                                        className: c8.J5,
                                        children: null != l ? l.name : R.intl.string(R.t["He+cmd"]),
                                    }),
                                    (0, A.jsxs)("div", {
                                        className: c8.xp,
                                        children: [
                                            (0, A.jsx)(H.E, {
                                                variant: "text-sm/normal",
                                                className: c8.KR,
                                                children: n.name,
                                            }),
                                            x
                                                ? (0, A.jsx)(tn.Lp, { text: R.intl.string(R.t["7uFZGt"]) })
                                                : b
                                                  ? (0, A.jsx)(tn.Lp, {
                                                        text: R.intl.string(R.t["6anton"]),
                                                        color: nQ.A.unsafe_rawColors.BRAND_500.css,
                                                    })
                                                  : f
                                                    ? (0, A.jsx)(le.m, {
                                                          text: R.intl.string(R.t.eSuJE2),
                                                          children: (0, A.jsx)("div", {
                                                              children: (0, A.jsx)(tn.Lp, {
                                                                  className: c8.qc,
                                                                  text: R.intl.string(R.t.NrRwIl),
                                                                  color: nQ.A.unsafe_rawColors.YELLOW_300.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            T
                                                ? (0, A.jsx)(le.m, {
                                                      text: R.intl.string(R.t.nv1IqK),
                                                      children: (0, A.jsx)("div", {
                                                          children: (0, A.jsx)(tn.Lp, {
                                                              text: R.intl.string(R.t["sBl3X/"]),
                                                              color: nQ.A.colors.BACKGROUND_MOD_MUTED.css,
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            (0, A.jsx)(nn.D, {
                                onClick: i(r),
                                "aria-label": R.intl.string(R.t.e5eQOy),
                                "aria-controls": d,
                                "aria-expanded": s,
                                focusProps: { ringTarget: t },
                                children: (0, A.jsx)(dq.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: is()(c8.D6, { [c8.S7]: s }),
                                }),
                            }),
                        ],
                    });
                },
            }),
            null != i && s
                ? (0, A.jsxs)("div", {
                      id: d,
                      children: [
                          (0, A.jsx)("div", { className: c8.yF }),
                          (0, A.jsx)(c1.A, { groupListingId: i.id, subscription: t, className: c8.kE }),
                          (0, A.jsxs)("div", {
                              className: c8.Zx,
                              children: [
                                  (0, A.jsx)(c7, { label: C, value: N }),
                                  (0, A.jsx)(c7, {
                                      label: R.intl.string(R.t.dltUMH),
                                      value: I,
                                      showInfoIcon: b,
                                      infoIconTooltipText: b ? R.intl.string(R.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, A.jsx)(c7, { label: R.intl.string(R.t.AOcwWB), value: _ }),
                              ],
                          }),
                          (0, A.jsx)(cG.h, { size: 16 }),
                          !x &&
                              !T &&
                              (0, A.jsx)(tQ.D, {
                                  label: R.intl.string(R.t.wmMFvA),
                                  children: (0, A.jsx)(c9, { subscription: t }),
                              }),
                          !y &&
                              (0, A.jsx)(ge, {
                                  isTrial: b,
                                  isCancelled: x,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: m,
                                  onCancelSubscriptionClick: function () {
                                      if (null != l && null != i && null != n) {
                                          var e;
                                          (e = { groupListing: i, listing: n, subscription: t }),
                                              (0, lr.openModal)((t) => (0, A.jsx)(c6, { ...t, ...e }));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != l &&
                                          ((0, t$.pX)(S.BVt.CHANNEL(l.id, c4.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tM.default)(),
                                          cY.A.show(
                                              S.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              R.intl.string(R.t.DvbaM4),
                                              () => {
                                                  cQ.A.setState({ subsection: eC.nR }),
                                                      (0, nl.openUserSettings)(c.X.SUBSCRIPTIONS_PANEL);
                                              },
                                          ));
                                  },
                                  onResubscribeClick: p,
                              }),
                      ],
                  })
                : null,
        ],
    });
};
var gn = n(661097);
let gi = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, h.bG)([cF.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [cF.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? cB.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? cB.M_.NONE
                                  : cB.M_.IN_SUBSCRIPTION_SERVER;
                        })([cF.A]),
                    ) === cB.M_.SUBSCRIBED,
                n = (0, h.bG)([oM.A], () => oM.A.getActiveGuildSubscriptions()),
                i = E.useRef(!1);
            return (
                E.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            l = oM.A.getActiveGuildSubscriptions();
                        return (
                            ((l?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !oM.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), oi.hP());
                }, [e, t]),
                n ?? cz
            );
        })(),
        { loading: i } = (0, cw.eb)(n);
    return ((0, ck.A)(od.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, A.jsx)(a8.y, {})
        : 0 === n.length
          ? null
          : (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(_.$, { text: R.intl.string(R.t.hqyhKQ), icon: cV.z, variant: "secondary", onClick: t }),
                    (0, A.jsx)(cG.h, { size: 10 }),
                    (0, A.jsx)(n$.n, {
                        label: R.intl.string(R.t["KzCF/6"]),
                        description: R.intl.string(R.t["Y+ucR7"]),
                        children: (0, A.jsx)("div", {
                            className: gn.A,
                            children: n.map((e) => (0, A.jsx)(gt, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var gl = n(327479),
    gs = n(932012);
function gr(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)(p.D, { variant: "heading-md/bold", children: R.intl.string(R.t["48ywCu"]) }),
            (0, A.jsx)(cG.h, { size: 4 }),
            (0, A.jsx)(H.E, { variant: "text-md/normal", className: gs.yV, children: R.intl.string(R.t.VWxmSo) }),
            (0, A.jsx)(cG.h, { size: 24 }),
            (0, A.jsxs)("div", {
                className: gs.Nr,
                children: [
                    (0, A.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: gs._e }),
                    (0, A.jsxs)("div", {
                        className: gs.FS,
                        children: [
                            (0, A.jsx)(p.D, {
                                variant: "heading-xl/semibold",
                                className: gs.wx,
                                children: R.intl.string(R.t["48ywCu"]),
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-md/normal",
                                className: gs.h_,
                                children: R.intl.format(R.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, A.jsx)(gl.A, { onClick: t, text: R.intl.string(R.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var ga = n(548411),
    go = n(417098),
    gu = n(143582),
    gd = n(915043),
    gc = n(631466);
function gg(e) {
    let { className: t, header: n, headerClassName: i, children: l } = e,
        s = E.useMemo(() => {
            let e = !1;
            return (
                E.Children.forEach(l, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [l]);
    return (0, A.jsxs)("div", {
        className: is()(gc.iE, t),
        children: [
            (0, A.jsx)("div", { className: is()(gc.wx, i), children: n }),
            s && (0, A.jsx)("div", { className: gc.Qs, children: l }),
        ],
    });
}
var gm = n(885996),
    gA = n(144165),
    gE = n(664121),
    gh = n(950305),
    gS = n(943775),
    gT = n(123791),
    gp = n(900797),
    gx = n(611643);
let gf = E.createContext({ isOpen: !1, toggleOpen: () => {} });
function gI(e) {
    let { children: t } = e,
        [n, i] = E.useReducer((e) => !e, !1),
        l = E.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, A.jsx)(gf.Provider, { value: l, children: t(n) });
}
gI.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: l } = E.useContext(gf),
        s = i ? gp.t : dq.a,
        r = null != n ? n : i ? R.intl.string(R.t.fgq1gs) : R.intl.string(R.t.XJuakA);
    return (0, A.jsxs)(nn.D, {
        className: is()(gx.L, t),
        onClick: l,
        children: [
            (0, A.jsx)(H.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, A.jsx)(s, { size: "sm", color: "currentColor" }),
        ],
    });
};
var g_ = n(627363),
    gN = n(243217),
    gC = n(328968),
    gb = n(163437),
    gy = n(3432);
function gv(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var gj = n(562312),
    gO = (((i = {})[(i.LOADING = 0)] = "LOADING"), (i[(i.DONE = 1)] = "DONE"), (i[(i.ERROR = 2)] = "ERROR"), i);
function gL(e) {
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
            isOrphanedGuildSubscription: T,
            renewalPlan: x,
        } = (0, h.cf)([uN.A, uC.A, gC.A, lE.A], () => {
            let e,
                n = uN.A.get(r),
                i = null != n ? uC.A.get(n.skuId) : void 0,
                a = i?.applicationId,
                o = null != n ? gC.A.getForSKU(n.skuId) : null,
                u = null != o && (0, gb.PJ)(o.skuFlags),
                d = u && null != l ? lE.A.getGuild(l) : void 0,
                c = (0, gb.Uo)(t, i),
                g = u && null != l && null == d;
            if (!1 === c && null != s && s.items.length > 0) {
                let t = s.items[0];
                e = uN.A.get(t.planId) ?? void 0;
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
        }, [l, r, s, t]),
        { data: f } = (0, g_.YY)(a),
        I = E.useMemo(() => (null != f ? (0, gS.A)(f, 100) : null), [f]),
        _ = g?.deleted ?? !1,
        N = null != g && (0, gb.Se)(g),
        C = t.status === S.Dmq.PAST_DUE,
        { analyticsLocations: b } = (0, eP.Ay)(),
        [y] = (0, cZ.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: tL.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = gv(t.currentPeriodEnd),
        j = 0 === i;
    return (0, A.jsxs)(gg, {
        headerClassName: gj.dL,
        header:
            !1 === j
                ? (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsxs)("div", {
                              className: gj.VW,
                              children: [
                                  null != I &&
                                      (0, A.jsx)(gA._, { src: I.href, imageClassName: gj.Z2, width: 40, height: 40 }),
                                  (0, A.jsxs)("div", {
                                      className: gj.aF,
                                      children: [
                                          (0, A.jsx)(p.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: f?.name ?? R.intl.string(R.t["7kqy7W"]),
                                          }),
                                          (0, A.jsx)(H.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? R.intl.string(R.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, A.jsx)("div", {
                              className: gj.Pz,
                              children:
                                  null != f &&
                                  null != u &&
                                  null != g &&
                                  (0, A.jsx)(gU, {
                                      subscription: t,
                                      app: f,
                                      guild: c,
                                      sku: g,
                                      storeListing: u,
                                      isCancelled: m,
                                      isOrphanedGuildSubscription: T,
                                      navigateToSwitchPlan: n,
                                      renewalSkuId: x?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, A.jsx)(a8.y, { type: a8.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, A.jsx)(gG, {
                    type: "warning",
                    title: N
                        ? R.intl.formatToPlainString(R.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : R.intl.formatToPlainString(R.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && T && (0, A.jsx)(gG, { type: "warning", title: R.intl.string(R.t.SmSP8Q) }),
            C && (0, A.jsx)(gG, { type: "danger", title: R.intl.string(R.t.fvOqBo) }),
            (0, A.jsxs)("div", {
                className: gj.zH,
                children: [
                    (0, A.jsx)(gP, {
                        title: R.intl.string(R.t["5D/KEH"]),
                        content: d
                            ? (0, A.jsxs)(A.Fragment, {
                                  children: [
                                      (0, A.jsxs)("span", {
                                          className: gj.yW,
                                          children: [(0, A.jsx)(gE.R, { size: "xs" }), R.intl.string(R.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, A.jsxs)("span", {
                                              className: gj._t,
                                              children: [
                                                  (0, A.jsx)(H.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: R.intl.format(R.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, A.jsx)(db.Ay, { guild: c, size: db.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, A.jsxs)("span", {
                                  className: gj.yW,
                                  children: [(0, A.jsx)(gh.UserIcon, { size: "xs" }), R.intl.string(R.t["6anEVv"])],
                              }),
                    }),
                    (0, A.jsx)(gR, { invoicePreview: y, subscriptionPlan: o }),
                    (0, A.jsx)(gP, {
                        title: R.intl.string(R.t.dnUzb6),
                        content: gv(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, A.jsx)(gD, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: x }),
                ],
            }),
            (0, A.jsx)(gV, {
                subscription: t,
                currentInvoicePreview: y,
                loadingState: i,
                isDeleted: _,
                isCancelled: m,
            }),
            null != f &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, A.jsx)(gM, { appId: f.id, listingBenefits: u.benefits }),
        ],
    });
}
function gR(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, A.jsx)(gP, { title: R.intl.string(R.t.KI7ERx), content: "" });
    let i = (0, oa.CE)((0, oa.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, A.jsx)(gP, { title: R.intl.string(R.t.KI7ERx), content: i });
    let s = (0, oa.CE)((0, oa.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, A.jsx)(gP, {
        title: R.intl.string(R.t.KI7ERx),
        content: (0, A.jsxs)(A.Fragment, {
            children: [
                (0, A.jsx)(H.E, { variant: "text-sm/semibold", children: s }),
                s !== i &&
                    (0, A.jsx)(le.m, {
                        text: R.intl.format(R.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, A.jsx)(H.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, A.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function gD(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, oa.CE)((0, oa.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, A.jsx)(gP, {
            title: R.intl.string(R.t.hIhAM3),
            content: (0, A.jsxs)(A.Fragment, {
                children: [
                    (0, A.jsx)(H.E, { variant: "text-sm/medium", children: n }),
                    (0, A.jsx)(H.E, {
                        variant: "text-sm/normal",
                        children: R.intl.format(R.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, A.jsx)(gP, { title: t ? R.intl.string(R.t.enxcAl) : R.intl.string(R.t["Ms+6Zq"]), content: n });
}
function gP(e) {
    let { title: t, content: n } = e;
    return (0, A.jsxs)("div", {
        className: gj.nM,
        children: [
            (0, A.jsx)(H.E, { variant: "text-sm/medium", children: t }),
            (0, A.jsx)(H.E, { variant: "text-sm/medium", className: gj.u4, children: n }),
        ],
    });
}
function gG(e) {
    let { type: t, title: n } = e;
    return (0, A.jsx)(rJ.p, {
        messageType: "warning" === t ? rJ.Y.WARNING : rJ.Y.ERROR,
        className: gj.Xm,
        children: (0, A.jsx)(H.E, { variant: "text-sm/normal", children: n }),
    });
}
function gU(e) {
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
        c = (0, gb.Se)(l),
        { analyticsLocations: g } = (0, eP.Ay)(),
        [m, S] = E.useState(!1),
        T = (0, gT.C)(t.id),
        p = (0, h.bG)([uC.A], () => uC.A.getParentSKU(i.skuId), [i.skuId]),
        x = E.useMemo(() => {
            var e, t;
            let n;
            return null == p
                ? []
                : ((e = i.id),
                  (t = T.subscriptions),
                  (n = new Set(p.bundledSkuIds)),
                  t.filter((t) => t.id !== e && n.has(t.skuId)));
        }, [i.id, T, p]),
        f = 0 !== x.length;
    async function I() {
        try {
            S(!0);
            let { subscription: e } = await (0, oi.QP)(s, g);
            if (null == e) return;
            (0, lr.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, A.jsx)(t, { ...n, storeListing: i, subscription: gN.A.createFromServer(e) });
            });
        } finally {
            S(!1);
        }
    }
    return (0, A.jsxs)("div", {
        className: gj.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, A.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: R.intl.string(R.t.QtMnkW),
                        onClick: I,
                        loading: m,
                    })
                  : (0, A.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: R.intl.string(R.t["E8G/tr"]),
                        onClick: function () {
                            (0, lr.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("509032"), n.e("622800")]).then(
                                    n.bind(n, 301139),
                                );
                                return (n) =>
                                    (0, A.jsx)(e, { ...n, application: t, storeListing: i, subscription: s, guild: o });
                            });
                        },
                    }),
            f &&
                null != p &&
                !1 === r &&
                !1 === a &&
                (0, A.jsx)(_.$, {
                    variant: "primary",
                    size: "sm",
                    text: R.intl.string(R.t.R74ZBR),
                    onClick: () => {
                        d({
                            currentSubscription: s,
                            alternativeListings: x,
                            app: t,
                            subscriptionGroup: p,
                            currentListing: i,
                            renewalSkuId: u,
                        });
                    },
                }),
        ],
    });
}
function gM(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, A.jsx)(gI, {
        children: (e) =>
            (0, A.jsxs)("div", {
                className: gj.PX,
                children: [
                    (0, A.jsxs)("div", {
                        className: gj.wV,
                        children: [
                            e && (0, A.jsx)(H.E, { variant: "text-sm/semibold", children: R.intl.string(R.t.mORL67) }),
                            (0, A.jsx)(gI.Toggle, {
                                className: gj.Bh,
                                text: e ? R.intl.string(R.t.gsbFAw) : R.intl.string(R.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: l, icon: s } = e;
                              return (0, A.jsx)(gm.FY, { header: i, icon: (0, gy.N)(t, s), description: l }, n);
                          })
                        : null,
                ],
            }),
    });
}
function gV(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: l, isCancelled: s } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, A.jsx)("div", {
                className: gj.Ji,
                children: (0, A.jsx)(tQ.D, {
                    label: R.intl.string(R.t.azZaZa),
                    children: (0, A.jsx)(a8.y, { type: a8.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, A.jsx)("div", {
                  className: gj.Ji,
                  children: (0, A.jsxs)(go.$T, {
                      color: go.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          R.intl.format(R.t.IIHUUF, { subscriptionId: t.id }),
                          (0, A.jsx)("br", {}),
                          R.intl.format(R.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, A.jsx)("div", {
                  className: gj.Ji,
                  children: (0, A.jsx)(tQ.D, {
                      label: R.intl.string(R.t.azZaZa),
                      children: (0, A.jsx)(cq.A, { subscription: t, currentInvoicePreview: n, disabled: l || s }),
                  }),
              });
}
var gk = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
n(938796);
var gw = n(38405);
let gF = (0, h.UT)(uN.A, {
    getQueryId: S.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = uN.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && gw.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, dr.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var gB = n(240248),
    gz = n(237218),
    gX = n(763064);
function gY(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [l, s] = E.useState(!1),
        [r, a] = E.useState(null),
        o =
            null != r &&
            (0, A.jsx)("button", {
                className: gX.x6,
                onClick: () => s((e) => !e),
                children: (0, A.jsxs)(H.E, {
                    className: gX.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        l ? R.intl.string(R.t["JQX/Pb"]) : R.intl.string(R.t.Fbrd8J),
                        l
                            ? (0, A.jsx)(gp.t, { color: nQ.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, A.jsx)(dq.a, { color: nQ.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [u, d] = E.useState(null),
        c = E.useCallback(() => {
            if (null == u) return;
            let { scrollHeight: e, clientHeight: t } = u;
            e > t && a({ truncatedHeight: t, expandedHeight: e });
        }, [u]);
    E.useEffect(() => {
        requestAnimationFrame(c);
    }, [c, t, n]);
    let g = "auto";
    return (
        null != r && (g = l ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, A.jsxs)("div", {
            children: [
                (0, A.jsx)(H.E, {
                    ...i,
                    className: gX.Qs,
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
var gH = n(920352);
function gK(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: l, benefits: s, description: r } = n,
        a = E.useMemo(() => (null == n.thumbnail ? null : (0, gz.t)(l, n.thumbnail, 256)), [l, n.thumbnail]),
        { data: o } = gF(n.skuId),
        u = E.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, oa._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, A.jsxs)(gg, {
              className: is()(gH.iE, i),
              header: (0, A.jsxs)(A.Fragment, {
                  children: [
                      (0, A.jsxs)("div", {
                          className: gH.qd,
                          children: [
                              null != a &&
                                  (0, A.jsx)(gA._, { src: a.href, imageClassName: gH.rW, width: 48, height: 48 }),
                              (0, A.jsxs)("div", {
                                  children: [
                                      (0, A.jsx)(p.D, { variant: "heading-md/bold", children: n.summary }),
                                      (0, A.jsx)(H.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, gB.uJ)(r) &&
                      (0, A.jsx)("div", {
                          className: gH.h_,
                          children: (0, A.jsx)(gY, { variant: "text-sm/medium", children: r }),
                      }),
                  null != s &&
                      s.length > 0 &&
                      (0, A.jsx)("div", {
                          className: gH.PX,
                          children: s.map((e) => {
                              let { id: t, name: n, description: i, icon: s } = e;
                              return (0, A.jsx)(gm.FY, { header: n, icon: (0, gy.N)(l, s), description: i }, t);
                          }),
                      }),
              ],
          });
}
var gW = n(185438),
    gZ = n(683380);
function gq(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: l,
            navigateToHome: s,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, gS.A)(t, 100),
        u = (0, gb.PJ)(r.flags),
        d = u ? gE.R : gh.UserIcon,
        c = u ? R.intl.string(R.t["46YF2D"]) : R.intl.string(R.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, h.bG)([lE.A], () => (u && null != g ? lE.A.getGuild(g) : void 0), [g, u]),
        E = (0, h.bG)([uC.A], () => {
            if (null != a) return uC.A.get(a);
        }, [a]),
        S = gv(n.currentPeriodEnd);
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsxs)("div", {
                className: gZ.wx,
                children: [
                    null != o && (0, A.jsx)(gA._, { src: o.href, imageClassName: gZ.Z2, width: 48, height: 48 }),
                    (0, A.jsxs)("div", {
                        children: [
                            (0, A.jsx)(p.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, A.jsxs)("div", {
                                className: gZ.p4,
                                children: [
                                    (0, A.jsxs)(p.D, {
                                        variant: "heading-md/normal",
                                        className: gZ.N4,
                                        children: [(0, A.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, A.jsxs)(A.Fragment, {
                                            children: [
                                                (0, A.jsx)(H.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, A.jsxs)("span", {
                                                    className: gZ.vP,
                                                    children: [
                                                        (0, A.jsx)(db.Ay, { guild: m, size: db.Ay.Sizes.SMOL }),
                                                        (0, A.jsx)(p.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: R.intl.format(R.t["7ZD8p1"], {
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
            (0, A.jsx)(gI, {
                children: (e) =>
                    (0, A.jsxs)("div", {
                        className: gZ._B,
                        children: [
                            (0, A.jsx)(H.E, { variant: "text-md/normal", children: R.intl.string(R.t["goe+hk"]) }),
                            e &&
                                (0, A.jsxs)(A.Fragment, {
                                    children: [
                                        (0, A.jsx)(H.E, {
                                            variant: "text-md/normal",
                                            children: R.intl.format(R.t["Q8qJ+5"], {}),
                                        }),
                                        (0, A.jsx)(H.E, {
                                            variant: "text-md/normal",
                                            children: R.intl.format(R.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, A.jsx)(gI.Toggle, {
                                text: e ? R.intl.string(R.t["1Rkq/E"]) : R.intl.string(R.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, A.jsxs)("div", {
                className: gZ.x0,
                children: [
                    (0, A.jsx)(gK, {
                        storeListing: i,
                        className: gZ.o3,
                        cta: (0, A.jsxs)("div", {
                            className: gZ.cJ,
                            children: [
                                (0, A.jsx)(H.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: R.intl.string(R.t.fHIpOY),
                                }),
                                null != E &&
                                    (0, A.jsx)(H.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: R.intl.format(R.t["OQk+jr"], { endDate: S }),
                                    }),
                            ],
                        }),
                    }),
                    l.map((e) =>
                        e.skuId === a
                            ? (0, A.jsx)(
                                  gK,
                                  {
                                      storeListing: e,
                                      cta: (0, A.jsx)(H.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: R.intl.format(R.t.nn88hB, { startDate: S }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, A.jsx)(gQ, { storeListing: e, guildId: g, navigateToHome: s }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function gQ(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: l } = (0, gW.A)({
            analyticsLocation: S.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, A.jsx)(gK, {
        storeListing: t,
        cta: (0, A.jsx)(_.$, { variant: "primary", size: "sm", text: R.intl.string(R.t["+KwmBt"]), onClick: l }),
    });
}
class gJ extends E.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, A.jsxs)(go.$T, {
                  color: go.Hv.DANGER,
                  style: { borderRadius: 0 },
                  children: [
                      R.intl.format(R.t.IIHUUF, { subscriptionId: this.props.subscription.id }),
                      " ",
                      R.intl.format(R.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                  ],
              })
            : this.props.children;
    }
}
function g$(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, l] = E.useState({ route: gk.HOME }),
        { route: s } = i;
    function r() {
        l({ route: gk.HOME });
    }
    let a = (e) => {
            l({ route: gk.SWITCH_APP_PLANS, ...e }), n(R.intl.string(R.t.VFqtkP), r);
        },
        [o, u] = E.useState({});
    E.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: gO.LOADING })),
                (0, gu._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: gO.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: gO.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, gd.E)(),
        c = d !== gd.mJ.LOADED;
    switch (s) {
        case gk.HOME:
            return (0, A.jsx)(A.Fragment, {
                children: t.map((e) =>
                    (0, A.jsx)(
                        gJ,
                        {
                            subscription: e,
                            children: (0, A.jsx)(gL, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? gO.LOADING : (o[e.id] ?? gO.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case gk.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, A.jsx)(gq, { ...m, navigateToHome: r });
        default:
            (0, it.xb)(s);
    }
}
var g0 = n(707989);
function g1(e) {
    let { onGoBack: t } = e,
        n = (0, h.yK)(
            [oM.A],
            () =>
                oM.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, l] = E.useState();
    return (
        null == i && (i = (0, A.jsx)(g2, { onBack: t, title: R.intl.string(R.t["DB/m9a"]) })),
        (0, A.jsxs)("div", {
            children: [
                i,
                (0, A.jsx)("div", {
                    className: g0.A,
                    children: (0, A.jsx)(g$, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            l(
                                (0, A.jsx)(g2, {
                                    title: e,
                                    onBack: () => {
                                        t(), l(void 0);
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
function g2(e) {
    let { onBack: t, title: n } = e;
    return (0, A.jsxs)("div", {
        className: g0.D,
        children: [
            (0, A.jsx)(i7.K, {
                "aria-label": R.intl.string(R.t["13/7kX"]),
                icon: () => (0, A.jsx)(ga.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, A.jsx)(p.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var g3 = n(881489),
    g6 = n(366999),
    g5 = n(148155),
    g4 = n(391659);
function g8(e) {
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
        ? ((t = R.intl.string(g5.default["/S02sx"])), (n = R.intl.string(g5.default.OPJNST)))
        : i
          ? ((t = R.intl.string(R.t["hT6i/0"])),
            (n = null != a ? R.intl.format(R.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = R.intl.string(R.t["3G0CTC"])),
            (n = r === tX.xc.FP_SUB_PAUSED ? R.intl.format(R.t.MMvaIG, { resumeDate: s.toDate() }) : null));
    let u = is()({ [g4.Hs]: i, [g4.mT]: !i }),
        d = is()({ [g4.CQ]: i, [g4.ZM]: !i }),
        c = is()({ [g4.EM]: !i });
    return (0, A.jsxs)("div", {
        className: g4.r6,
        children: [
            (0, A.jsxs)("div", {
                className: g4.Nv,
                children: [
                    (0, A.jsx)(p.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, A.jsx)(H.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, A.jsx)("div", {
                    className: g4.ZS,
                    children: (0, A.jsx)("div", {
                        className: u,
                        children: (0, A.jsx)(H.E, { variant: "text-sm/semibold", className: d, children: l }),
                    }),
                }),
        ],
    });
}
let g7 = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: l } = e,
        s = (0, r9.kX)(t),
        r = s.length > 0,
        a = (0, g6.Ay)(t.endsAt, g6.yE.SHORT_TIME),
        o = r ? s : a;
    return (0, A.jsx)("div", {
        children: (0, A.jsxs)("div", {
            className: is()(n, g4.f8),
            children: [
                (0, A.jsx)("div", {
                    className: g4.J_,
                    children: (0, A.jsxs)("div", {
                        className: g4.Bh,
                        children: [
                            (0, A.jsx)("div", {
                                className: g4.xt,
                                children: (0, A.jsx)(rQ.t, { size: "md", color: "white", className: g4.T8 }),
                            }),
                            (0, A.jsx)("div", {
                                className: g4.pt,
                                children: (0, A.jsx)(p.D, {
                                    variant: "heading-md/semibold",
                                    children: R.intl.string(R.t.DFMPWS),
                                }),
                            }),
                            (0, A.jsx)(H.E, {
                                className: g4.PJ,
                                variant: "text-md/semibold",
                                children: s.length > 0 ? s : R.intl.string(R.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, A.jsx)(g8, {
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
var g9 = n(983048);
function me(e) {
    let t,
        {
            user: n,
            planId: i,
            count: l,
            userPremiumSubscription: s,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, h.yK)([uN.A], () => [uN.A.get(i), null != s ? uN.A.get(s.planId) : null]);
    if (null == o || r9.Ay.getInterval(i).intervalType !== tX.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = r9.Ay.getDisplayName(i);
    if (a) t = R.intl.string(g5.default["5asczk"]);
    else if (c && null != s) {
        let e;
        e = new Date(s.status === S.Dmq.PAUSED && null != s.pauseEndsAt ? s.pauseEndsAt : s.currentPeriodEnd);
        let n = (0, r9._e)(e, r);
        t = R.intl.formatToPlainString(R.t["5CNRRA"], { date: n ?? 0 });
    } else t = R.intl.formatToPlainString(R.t.eNXZ5O, { planName: g });
    let m = n.hasFreePremium() || (null != s && s.isPurchasedExternally);
    return (0, A.jsxs)("div", {
        className: g4.Bh,
        children: [
            (0, A.jsx)("div", {
                className: is()({
                    [g4.sr]: o.skuId === tX.pe.TIER_0,
                    [g4.lP]: o.skuId === tX.pe.TIER_1,
                    [g4.eb]: o.skuId === tX.pe.TIER_2,
                }),
                children: (0, A.jsx)(rQ.t, { size: "md", color: "currentColor", className: g4.Kk }),
            }),
            (0, A.jsxs)("div", {
                className: g4.pt,
                children: [
                    (0, A.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        children: R.intl.format(R.t.LzobT9, { planName: g }),
                    }),
                    !m &&
                        (0, A.jsx)(p.D, {
                            className: g4.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, A.jsx)(H.E, {
                className: g4.PJ,
                variant: "text-md/semibold",
                children: R.intl.format(R.t["ess/xl"], { count: l }),
            }),
        ],
    });
}
let mt = function (e) {
    let { className: t, entitlements: n } = e,
        i = B()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, h.yK)([uc.A], () => uc.A.getUnactivatedFractionalPremiumUnits()),
        s = (0, h.bG)([oM.A], () => oM.A.getPremiumSubscription()),
        r = (0, h.bG)([oM.A], () => null == oM.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === tX.gD.PREMIUM_MONTH_TIER_1),
        o = (0, h.bG)([sn.default], () => sn.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)("div", {
                className: is()(t, g4.xF, g4.J_),
                children: Object.keys(i).map((e) =>
                    (0, A.jsx)(
                        me,
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
                (0, A.jsxs)("div", {
                    children: [
                        (0, A.jsx)(H.E, {
                            className: g4.eT,
                            variant: "text-md/normal",
                            children: R.intl.string(R.t["VNr4+O"]),
                        }),
                        (0, A.jsx)(g9.i, {}),
                    ],
                }),
        ],
    });
};
var mn = n(902782);
function mi(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: l } = (0, eP.Ay)(),
        [s] = (0, cZ.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: l,
            analyticsLocation: tL.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == s) return null;
    let r = i ? mn.r : mn.a,
        a = s.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, r9.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = uN.A.get(o);
    ta()(null != u, "Missing plan");
    let d = (0, oa.$g)(s.total, s.currency);
    return (
        u.interval === tX.WT.YEAR
            ? (t = R.intl.format(R.t["jPz/39"], {
                  price: d,
                  termsUrl: S.X7G.TERMS,
                  paidURL: S.X7G.PAID_TERMS,
                  privacyUrl: S.X7G.PRIVACY,
              }))
            : u.interval === tX.WT.MONTH &&
              (t =
                  1 === u.intervalCount
                      ? R.intl.format(R.t.m27GpI, {
                            price: d,
                            termsUrl: S.X7G.TERMS,
                            paidURL: S.X7G.PAID_TERMS,
                            privacyUrl: S.X7G.PRIVACY,
                        })
                      : R.intl.format(R.t["9xf5Vx"], {
                            price: d,
                            termsUrl: S.X7G.TERMS,
                            paidURL: S.X7G.PAID_TERMS,
                            privacyUrl: S.X7G.PRIVACY,
                            intervalCount: u.intervalCount,
                        })),
        (0, A.jsx)(H.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function ml(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === S.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, A.jsx)(mi, { subscription: t, withOverheadSeparator: n });
}
var ms = n(37397),
    mr = n(689255);
let ma = { [eC.nR]: "role_subscriptions_panel", [eC.PZ]: "application_subscriptions_panel" };
function mo() {
    return (0, A.jsx)(oc.Z, {
        className: mr.wb,
        type: oc.Z.Types.CUSTOM,
        children: (0, A.jsxs)(lc.A, {
            align: lc.A.Align.CENTER,
            children: [
                (0, A.jsx)(i$.A, { game: null, size: i$.M.SMALL, className: mr.pV }),
                (0, A.jsx)("span", { className: mr.O, children: R.intl.string(R.t["jy/hyj"]) }),
            ],
        }),
    });
}
function mu(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, cc._)(e, t));
}
function md() {
    let e = (0, h.bG)([uc.A], () => uc.A.getForApplication(tX.tv), [], mu);
    return (
        E.useEffect(() => {
            (0, uB.LM)(tX.tv);
        }, []),
        (0, A.jsx)(n$.n, {
            label: R.intl.string(R.t["2GKrvn"]),
            description: R.intl.string(R.t.kNEjGm),
            children:
                null != e && r9.Ay.hasAccountCredit(e)
                    ? (0, A.jsx)(mt, { className: mr.fX, entitlements: e })
                    : (0, A.jsx)(mo, {}),
        })
    );
}
function mc() {
    return (0, A.jsx)("hr", { className: mr.hr });
}
let mg = function () {
        var e;
        let t = (0, h.bG)([oM.A], () => oM.A.getPremiumTypeSubscription()),
            n = (0, cg.A)({ subscriptionFilter: (e) => ms.Hy.has(e.status) }),
            i = (0, h.bG)([sn.default], () => sn.default.getCurrentUser()),
            l = n.length > 1,
            s = (0, h.bG)(
                [oU.A],
                () => (null != t && null != t.paymentSourceId ? oU.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, h.bG)([oM.A], () => oM.A.hasFetchedSubscriptions()),
            a = (0, h.bG)([or.A], () => or.A.isBusy),
            o = (0, da.Y)(),
            u = cQ.A.useField("subsection"),
            d = cQ.A.useField("scrollToGameServers"),
            g = E.useRef(null);
        E.useEffect(() => {
            (0, n5._)(null != u ? ma[u] : c.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let m = (0, h.bG)([oM.A], () => oM.A.getActiveApplicationSubscriptions()?.length ?? 0),
            T = (0, h.bG)(
                [oM.A],
                () =>
                    Object.values(oM.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === S.rzx.GUILD)
                        .filter((e) => e.status !== S.Dmq.ENDED).length,
            ),
            x = (0, h.bG)([oM.A], () =>
                Object.values(oM.A.getSubscriptions() ?? {}).some((e) => e.type === S.rzx.GAME_SERVER),
            ),
            { servers: f } = (0, cP.f)({ enabled: x }),
            I = (0, h.yK)([oM.A], () => (0, c_.eP)(f, (e) => oM.A.getSubscriptionById(e)), [f]),
            _ = (0, dd.A)({ forceFetch: !0 }),
            N = (0, g3.ds)(),
            C = null !== t ? t.currentPeriodEnd : void 0,
            b =
                !(N && !(_.unactivatedUnits.length > 0)) &&
                (_.fractionalState !== tX.xc.NONE || _.unactivatedUnits.length > 0);
        return (E.useEffect(() => {
            d &&
                r &&
                o &&
                I.length > 0 &&
                (g.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                cQ.A.setState({ scrollToGameServers: !1 }));
        }, [d, r, o, I.length]),
        E.useEffect(
            () => (
                e5.h.wait(() => {
                    (0, dr.zS)(), oi.hP(), (0, ds.CD)(), oi.$o();
                }),
                function () {
                    cQ.A.resetState();
                }
            ),
            [],
        ),
        te.A.enabled)
            ? (0, A.jsx)(a5.A, {})
            : r && o
              ? u === eC.nR
                  ? (0, A.jsx)(gi, { onGoBack: () => cQ.A.setState({ subsection: null }) })
                  : u === eC.PZ
                    ? (0, A.jsx)(g1, { onGoBack: () => cQ.A.setState({ subsection: null }) })
                    : (0, A.jsx)("div", {
                          className: mr.kL,
                          children: (0, A.jsxs)("div", {
                              className: mr.Qs,
                              children: [
                                  l ? (0, A.jsx)(ms.Sb, {}) : null,
                                  null != t
                                      ? (0, A.jsx)(ms.Ay, {
                                            subscription: t,
                                            paymentSource: s,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, A.jsx)(ms.TC, {}),
                                  b &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, A.jsxs)("section", {
                                          children: [
                                              (0, A.jsx)(p.D, {
                                                  variant: "heading-md/bold",
                                                  className: mr.HL,
                                                  children: R.intl.string(R.t.Obre8v),
                                              }),
                                              (0, A.jsx)(H.E, {
                                                  variant: "text-md/normal",
                                                  className: mr.JU,
                                                  children: R.intl.format(R.t["7Zi06b"], {
                                                      helpCenterLink: ex.A.getArticleURL(
                                                          S.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, A.jsx)(g7, {
                                                  className: mr.fX,
                                                  fractionalPremiumInfo: _,
                                                  activationDate: C,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, A.jsx)(md, {}),
                                  T > 0 &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)(mc, {}),
                                              (0, A.jsx)(cM, {
                                                  count: T,
                                                  onClickManageSubscription: () => cQ.A.setState({ subsection: eC.nR }),
                                              }),
                                          ],
                                      }),
                                  m > 0 &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)(mc, {}),
                                              (0, A.jsx)(gr, {
                                                  count: m,
                                                  onClickManageSubscription: () => {
                                                      cQ.A.setState({ subsection: eC.PZ }),
                                                          tt.default.track(
                                                              S.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  I.length > 0 &&
                                      (0, A.jsxs)("div", {
                                          ref: g,
                                          children: [(0, A.jsx)(mc, {}), (0, A.jsx)(cD, { servers: I })],
                                      }),
                                  (0, A.jsx)(mc, {}),
                                  null != t ? (0, A.jsx)(ml, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, A.jsx)("div", { className: is()(mr.kL, mr.Lq), children: (0, A.jsx)(a8.y, {}) });
    },
    mm = (0, d.E2)(c.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [R.intl.string(R.t.trSpHX), R.intl.string(R.t["2GKrvn"])],
        Component: () => (0, A.jsx)(mg, {}),
    }),
    mA = (0, d.zZ)(c.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [R.intl.string(R.t.trSpHX), R.intl.string(R.t["2GKrvn"])],
        buildLayout: () => [mm],
    }),
    mE = (0, d.t_)(c.X.SUBSCRIPTIONS_PANEL, { useTitle: () => R.intl.string(R.t.trSpHX), buildLayout: () => [mA] }),
    mh = (0, d.i4)(c.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.trSpHX),
        icon: cu.L,
        usePersistentBadge: function () {
            let e = (0, cd.l)();
            return E.useMemo(
                () => ({
                    badgeType: m.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, A.jsx)(iX.E, { size: "xs", color: nQ.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [mE],
    }),
    mS = (0, d.WI)(c.X.BILLING_SECTION, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        buildLayout: () => [di, co, mh, u4, oW],
    });
var mT = n(540999),
    mp = n(306471),
    mx = n(964355),
    mf = n(172272);
let mI = (0, d.zD)(c.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, h.bG)([s2.default], () => s2.default.isAxeEnabled),
        setValue: (e) => (0, s1.x)({ axeEnabled: e }),
    }),
    m_ = (0, d.zD)(c.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, h.bG)([s2.default], () => s2.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, s1.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var mN = n(276086),
    mC = n(354328);
let mb = (0, d.zD)(c.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, mC.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, mN.L)("highlight_mana_components", e);
        },
    }),
    my = (0, d.zD)(c.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, mC.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, mN.L)("highlight_mana_text_overrides", e);
        },
    }),
    mv = (0, d.zD)(c.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, mC.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, mN.L)("highlight_mana_text", e);
        },
    }),
    mj = (0, d.zD)(c.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, mC.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, mN.L)("highlight_void_toggleables", e);
        },
    }),
    mO = (0, d.sN)(c.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, h.bG)([s2.default], () => s2.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: mf.YR,
        markers: Array.from({ length: mf.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => mf.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            mf.Or.getState().setHorizontalSpacing(e);
        },
    }),
    mL = (0, d.zD)(c.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, h.bG)([s2.default], () => s2.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, s1.x)({ layoutDebuggingEnabled: e });
        },
    }),
    mR = (0, d.sN)(c.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, h.bG)([s2.default], () => s2.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: mf.YR,
        markers: Array.from({ length: mf.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => mf.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            mf.Or.getState().setVerticalSpacing(e);
        },
    }),
    mD = (0, d.zZ)(c.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [m_, mL, mO, mR, mb, mv, my, mj, mI],
    });
var mP = n(246605),
    mG = n(274184);
let mU = (0, d.E2)(c.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, h.bG)([mG.Ay], () => mG.Ay.getActionTriggeredSurveyOverride());
            return (0, A.jsx)(Ar, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => mP.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    mM = (0, d.zD)(c.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => L.HZ.useSetting(),
        setValue: (e) => {
            L.HZ.updateSetting(e);
        },
    });
var mV = n(396478),
    mk = n(173936),
    mw = n(103557),
    mF = n(414079),
    mB = n(148810),
    mz = n(380610),
    mX = n(986238),
    mY = n(428524),
    mH = n(252149),
    mK = n(221851);
let mW = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    mZ = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function mq(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class mQ extends E.Component {
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
        let { project: e, overrideType: t, overrideId: n, disabled: i, error: l } = this.props;
        return (0, A.jsxs)(lc.A, {
            direction: lc.A.Direction.VERTICAL,
            className: is()(mY.oS, mK.SX, mH.N, mY.nM),
            children: [
                (0, A.jsx)(mF.A, {
                    className: is()(mY.lL, { [mY.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, A.jsxs)(lc.A, {
                    className: mK.QB,
                    children: [
                        (0, A.jsx)(lc.A.Child, {
                            basis: "50%",
                            children: (0, A.jsx)(i8.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: mZ,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: i,
                            }),
                        }),
                        (0, A.jsx)(lc.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, A.jsx)(la.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, A.jsxs)(lc.A.Child, {
                    children: [
                        null != l &&
                            "" !== l &&
                            (0, A.jsx)(H.E, {
                                className: mY.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: l,
                            }),
                        (0, A.jsxs)(H.E, {
                            variant: "text-sm/normal",
                            className: mY.AS,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, A.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
class mJ extends E.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, mz.bD)();
        this.setState({ loading: !1, buildOverrides: e, loadedBuildOverrides: B().cloneDeep(e), errors: {} });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !B().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return B().without(mW, ...t);
    }
    handleAddBuildOverride = (e) => {
        if (null == e) return;
        let t = { ...this.state.buildOverrides, [e]: { type: "branch", id: "" } };
        this.setState({ buildOverrides: t });
    };
    handleBuildOverrideUpdated = (e, t) => {
        let { buildOverrides: n } = this.state,
            i = { ...(null != n ? n[e] : {}), ...t },
            l = { ...this.state.buildOverrides, [e]: i };
        this.setState({ buildOverrides: l });
    };
    handleBuildOverrideRemoved = (e) => {
        let t = { ...this.state.buildOverrides };
        delete t[e], this.setState({ buildOverrides: t });
    };
    handleDiscardChanges = () => {
        this.setState({ buildOverrides: B().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, mB.Zk)(e);
        if (200 === t.status) {
            let e = t.body;
            this.setState({
                buildOverrides: e,
                loadedBuildOverrides: B().cloneDeep(e),
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
        (0, lr.openModal)((t) => (0, A.jsx)(m$, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, A.jsx)(mV.pp, {
            theme: nM.A.theme,
            className: is()(mK.eT, mK.SX),
            children: (0, A.jsx)(mV.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : B().map(e, (e, i) =>
                  (0, A.jsx)(
                      mQ,
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
            : (0, A.jsx)(_.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, A.jsx)(le.m, {
                  text: "Generate Public Link",
                  children: (0, A.jsx)(i7.K, {
                      variant: "secondary",
                      icon: mk.LinkIcon,
                      "aria-label": "Generate Public Link",
                      onClick: this.handleLinkGeneration,
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, A.jsxs)(A.Fragment, {
            children: [
                (0, A.jsx)(_.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, A.jsx)(_.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: mq(t ?? {}),
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
            ? (0, A.jsx)(a8.y, { className: mK.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let l = !n && !t && this.getAvailableProjects().length > 0,
            s =
                mq(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, A.jsx)(H.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, A.jsx)(n$.n, {
            children: (0, A.jsxs)(X.B, {
                gap: 16,
                children: [
                    (0, A.jsx)(i8.l, {
                        selectionMode: "single",
                        label: "Add Build Override",
                        placeholder: "discord_project",
                        description: "Select a project to create a build override for.",
                        layout: "horizontal-responsive",
                        value: void 0,
                        options: this.getAvailableProjects().map((e) => ({ id: e, label: e, value: e })),
                        onSelectionChange: this.handleAddBuildOverride,
                        disabled: !l,
                    }),
                    s,
                    e,
                    (0, A.jsxs)(sw.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class m$ extends E.Component {
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
        e.key === lb.dh.ENTER && this.handleAddAllowedVersion();
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
        (t = t.filter((t) => t !== e)), this.setState({ allowedVersions: t });
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
            experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments),
        },
    });
    handleGenerateLink = async () => {
        if (this.isMobile() && 0 === this.state.allowedVersions.length)
            return void this.setAllowedVersionError("You must add at least one allowed version for iOS");
        this.setStatusMessage(null);
        let e = this.generatePayload(),
            t = await (0, mB.SB)(e);
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
        return mq(this.props.buildOverrides ?? {});
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
            d = mX.fL.find((t) => t.value === e),
            c = l.map((e) => ({ id: e, label: e, value: e }));
        return (0, A.jsxs)(X.B, {
            gap: 20,
            children: [
                (0, A.jsx)(i8.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: mX.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, A.jsx)(i8.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: mX.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, A.jsxs)(X.B, {
                          gap: 20,
                          children: [
                              (0, A.jsx)(la.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: s,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: iw.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, A.jsx)(i8.l, {
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
                    : (0, A.jsx)(mw.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, A.jsx)(mw.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, A.jsx)(tJ.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, A.jsx)("div", {});
        let n = rJ.Y.INFO;
        switch (t) {
            case 0:
                n = rJ.Y.ERROR;
                break;
            case 1:
                n = rJ.Y.WARNING;
        }
        return (0, A.jsx)(rJ.p, { messageType: n, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, A.jsx)(ls.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, A.jsx)(uM.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let m0 = (0, d.E2)(c.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: mJ });
var m1 = n(256311),
    m2 = n(883600);
let m3 = (0, d.E2)(c.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, h.bG)([m2.A], () => m2.A.overrideId());
        async function t(e) {
            let t = m2.A.getChangelog(e, "en-US");
            return null != t ? t : ((await m1.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, A.jsx)(Ar, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => m1.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var m6 = n(506774);
let m5 = new Date("2018-01-01"),
    m4 = (0, d.Tf)(c.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => L.pK.useSetting() === ou.default.fromTimestamp(m5.getTime()),
        onClick: () => (m6.w.set("lastChangeLogDate", m5), L.pK.updateSetting(ou.default.fromTimestamp(m5.getTime()))),
    }),
    m8 = (0, d.zD)(c.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, h.bG)([s2.default], () => s2.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, h.bG)(
                [s2.default],
                () => s2.default.disableAppCollectionsCache || s2.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, s1.x)({ disableAppCollectionsCache: e }),
    }),
    m7 = (0, d.zD)(c.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, h.bG)([s2.default], () => s2.default.isForcedCanary),
        setValue: (e) => {
            (0, s1.x)({ canary: e });
        },
    }),
    m9 = (0, d.zD)(c.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, h.bG)([s2.default], () => s2.default.sourceMapsEnabled),
        setValue: (e) => (0, s1.x)({ sourceMapsEnabled: e }),
    }),
    Ae = (0, d.zD)(c.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, h.bG)([s2.default], () => s2.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, s1.x)({ onlyShowPreviewAppCollections: e }),
    });
var At = n(10094),
    An = n(683760);
let Ai = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: tX.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: tX.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: tX.PremiumTypes.TIER_2 },
    ],
    Al = (0, d.Hn)(c.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => Ai,
        clearable: !0,
        useValue: () =>
            (0, h.bG)([An.A], () => {
                let e = An.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, At.O)(null, void 0)
                : null === e
                  ? (0, At.O)(void 0, void 0)
                  : (0, At.O)(0 === e ? null : e, void 0);
        },
    }),
    As = (0, d.E2)(c.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, h.bG)([mG.Ay], () => mG.Ay.getSurveyOverride());
            return (0, A.jsx)(Ar, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => mP.xr(e),
                fetchOverride: (e) => mP.BC(e, !0) ?? null,
            });
        },
    });
function Ar(e) {
    let { label: t, description: n, placeholder: i, overrideId: l, setOverride: s, fetchOverride: r } = e,
        [a, o] = E.useState(l ?? ""),
        u = E.useRef(null),
        [d, c] = E.useState(0);
    function g() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        E.useEffect(() => g, []),
        (0, A.jsx)(tQ.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, A.jsx)(la.k, {
                placeholder: i,
                error: 2 === d ? "Failed to fetch override" : void 0,
                successMessage: 3 === d ? "Override applied" : void 0,
                value: a,
                onChange: function (e) {
                    if (!(e.length > 0) || /^[0-9]+$/.test(e)) {
                        if ((o(e), g(), 0 === e.length)) {
                            c(0), s(null);
                            return;
                        }
                        u.current = setTimeout(() => {
                            c(1),
                                r(e).then((t) => {
                                    c(null == t ? 2 : 3), null != t && s(e);
                                });
                        }, 500);
                    }
                },
                clearable: !0,
            }),
        })
    );
}
let Aa = (0, d.zZ)(c.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [Al, As, mU, m3, m4, m7, mM, Ae, m8, m9, m0],
        useInlineNotice: () => ({
            type: m.lT.INLINE_NOTICE,
            noticeType: "info",
            text: R.intl.format(R.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    Ao = (0, d.zD)(c.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, h.bG)([s2.default], () => s2.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, s1.x)({ logAnalyticsEvents: e }),
    }),
    Au = (0, d.zD)(c.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, h.bG)([s2.default], () => s2.default.isLoggingGatewayEvents),
        setValue: (e) => (0, s1.x)({ logGatewayEvents: e }),
    }),
    Ad = (0, d.zD)(c.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, h.bG)([s2.default], () => s2.default.preventPopoutClose),
        setValue: (e) => (0, s1.x)({ preventPopoutClose: e }),
    }),
    Ac = (0, d.zD)(c.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, h.bG)([s2.default], () => s2.default.logKeyboardMismatches),
        setValue: (e) => (0, s1.x)({ logKeyboardMismatches: e }),
    }),
    Ag = (0, d.zD)(c.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, h.bG)([s2.default], () => s2.default.isLoggingOverlayEvents),
        setValue: (e) => (0, s1.x)({ logOverlayEvents: e }),
    }),
    Am = (0, d.zD)(c.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, h.bG)([s2.default], () => s2.default.isLoggingQuestEvents),
        setValue: (e) => (0, s1.x)({ logQuestEvents: e }),
    }),
    AA = (0, d.zD)(c.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, h.bG)([s2.default], () => s2.default.isTracingRequests),
        setValue: (e) => (0, s1.x)({ trace: e }),
    }),
    AE = (0, d.zZ)(c.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [Au, Ag, AA, Ao, Ac, Ad, Am] }),
    Ah = (0, d.t_)(c.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [Aa, AE, mD],
    }),
    AS = (0, d.i4)(c.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: mp.V,
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
                    isStaff: g,
                } = (0, h.cf)([s2.default, mT.A, sn.default], () => ({
                    layoutDebuggingEnabled: s2.default.layoutDebuggingEnabled,
                    isDeveloper: mT.A.isDeveloper,
                    isLoggingGatewayEvents: s2.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: s2.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: s2.default.isLoggingAnalyticsEvents,
                    isTracingRequests: s2.default.isTracingRequests,
                    isForcedCanary: s2.default.isForcedCanary,
                    isSourceMapsEnabled: s2.default.sourceMapsEnabled,
                    isAxeEnabled: s2.default.isAxeEnabled,
                    preventPopoutClose: s2.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: s2.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: s2.default.disableAppCollectionsCache,
                    isStaff: sn.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: m, verticalSpacing: E } = (0, mf.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: T } = mf.Or.getState(),
                p = L.HZ.useSetting();
            return t
                ? [
                      (0, A.jsxs)(
                          e3.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, nl.openUserSettings)(c.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "always-deliver",
                                          label: "Always Deliver Ads",
                                          checked: p,
                                          action: () => {
                                              L.HZ.updateSetting(!p);
                                          },
                                      },
                                      "always-deliver",
                                  ),
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, s1.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: u,
                                          action: () => {
                                              (0, s1.x)({ onlyShowPreviewAppCollections: !u });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: d,
                                          action: () => {
                                              (0, s1.x)({ disableAppCollectionsCache: !d });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, A.jsxs)(
                          e3.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, nl.openUserSettings)(c.X.LOGGING);
                              },
                              children: [
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: n,
                                          action: () => {
                                              (0, s1.x)({ logGatewayEvents: !n });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: i,
                                          action: () => {
                                              (0, s1.x)({ logOverlayEvents: !i });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: l,
                                          action: () => {
                                              (0, s1.x)({ logAnalyticsEvents: !l });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: s,
                                          action: () => {
                                              (0, s1.x)({ trace: !s });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, s1.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, A.jsxs)(
                          e3.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, nl.openUserSettings)(c.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, s1.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, s1.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)(
                                                  e3.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, A.jsx)(mx.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: mf.YR,
                                                              onChange: (e) => S(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, A.jsx)(
                                                  e3.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, A.jsx)(mx.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: E,
                                                              minValue: 0,
                                                              maxValue: mf.YR,
                                                              onChange: (e) => T(e),
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
                      g
                          ? (0, A.jsx)(
                                e3.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => st() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [Ah],
    });
var AT = n(127062),
    Ap = n(25044),
    Ax = n(80703),
    Af = n(123292),
    AI = n(857250),
    A_ = n(683438),
    AN = n(890856),
    AC = n(100392),
    Ab = n(102609),
    Ay = n(271478),
    Av = n(710195),
    Aj = n(386976),
    AO = n(257433),
    AL = n(32523),
    AR = n(96919),
    AD = n(688151),
    AP = n(863763);
function AG(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: l } = e,
        [s, r] = E.useState(l),
        [a, o] = E.useState(!1),
        u = E.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, h.bG)([uI.default], () => uI.default.getId()),
        c = (0, h.bG)([uI.default], () => {
            let e = uI.default.getInstallationForTracking();
            return null == e ? null : (0, Ax.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, AO.iN)(t, g),
        S = (0, AO.Fm)(t, g),
        T = (0, h.yK)([s9.A], () =>
            B()
                .sortBy(s9.A.getRecentExposures(AD.Vh.USER, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        p = E.useCallback(
            (e) => {
                (0, uy.C)((0, AC.yA)(n), () => {
                    (0, l4.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: l8.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [n],
        ),
        x = (0, A.jsx)(AN.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, A.jsxs)(H.E, {
                variant: "text-md/medium",
                className: AP.DD,
                children: [
                    (0, A.jsxs)("div", {
                        children: [
                            (0, A.jsxs)(X.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    uy.p5 &&
                                        (0, A.jsx)(nn.D, {
                                            onClick: p,
                                            children: (0, A.jsx)(mk.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, A.jsx)(H.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, A.jsx)("span", {
                        className: AP.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!s) return (0, A.jsx)("div", { className: AP.Os, children: x });
    let f = "";
    return (
        (f =
            t.system === Ab.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? AD.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, A.jsxs)("div", {
            className: AP.Os,
            children: [
                x,
                (0, A.jsx)("div", {
                    children: (0, A.jsx)(Ay.g, {
                        label: t.system === Ab.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, A.jsx)("div", {
                    className: AP.h_,
                    children:
                        null == S
                            ? (0, A.jsx)(H.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                a
                    ? (0, A.jsxs)("div", {
                          children: [
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: AP.id,
                                  children: "Server Descriptor",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: AP.AS,
                                  children: null == S ? "None" : JSON.stringify(S, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: AP.id,
                                  children: "Override Descriptor",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: AP.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: AP.id,
                                  children: "Recent Exposures",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: AP.AS,
                                  children: 0 === T.length ? "None" : T.join("\n"),
                              }),
                          ],
                      })
                    : (0, A.jsx)("div", {
                          className: AP.id,
                          children: (0, A.jsx)(Af.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, A.jsx)(i4.c, { className: AP.yF }),
            ],
        })
    );
}
function AU(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [l, s] = E.useState(null != i),
        [r, a] = E.useState(!1),
        o = E.useCallback(() => {
            s((e) => !e);
        }, []),
        u = (0, h.bG)([s9.A], () => s9.A.getLoadedGuildExperiment(n)),
        d = (0, h.bG)([s9.A, lE.A, Av.A], () => {
            if (t.system === Ab.l5.LEGACY) return null == s9.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !lE.A.getGuildsArray().some((t) => null != Av.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, h.yK)([s9.A], () =>
            B()
                .sortBy(s9.A.getRecentExposures(AD.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, h.yK)([uI.default, lE.A, s9.A, Av.A], () => {
            let e = t.system === Ab.l5.LEGACY,
                i = t.name,
                l = uI.default.getId(),
                s = B().sortBy(lE.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of s) {
                let s = e
                    ? (s9.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? AD.RE.NOT_ELIGIBLE)
                    : (Av.A.getEvaluationAndAssignment("guild", t.id, i, l)[1]?.variantId ?? AD.RE.NOT_ELIGIBLE);
                s in r || (r[s] = 0), r[s]++, a.push(`${t.name}: ${s}`);
            }
            let o = B()(r)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${r[e]} guilds in bucket ${e}`)
                .join(", ");
            return [a.join("\n"), o];
        }),
        S = t.system !== Ab.l5.LEGACY,
        T = (0, h.yK)([lE.A], () => B().sortBy(lE.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [p, x] = E.useState(() => lh.A.getGuildId() ?? lh.A.getLastSelectedGuildId()),
        f = T.find((e) => e.id === p)?.name,
        I = (0, h.bG)([Av.A], () => {
            if (S && null != p) return Av.A.getServerAssignment("guild", p, t.name);
        }, [S, p, t.name]),
        _ = (0, h.bG)([Av.A, uI.default], () => {
            if (!S) return;
            let e = uI.default.getId();
            return Av.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != _ && (_.isOverride || _.useAsEligibility),
        C = (0, A.jsx)(nn.D, {
            onClick: o,
            children: (0, A.jsxs)(H.E, {
                variant: "text-md/medium",
                className: AP.DD,
                children: [
                    (0, A.jsxs)("div", {
                        children: [
                            (0, A.jsx)("span", { children: t.title }),
                            (0, A.jsx)(H.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, A.jsx)("span", { className: AP.km, children: "Guild" }),
                ],
            }),
        });
    return l
        ? (0, A.jsxs)("div", {
              className: AP.Os,
              children: [
                  C,
                  (0, A.jsx)(Ay.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  S &&
                      T.length > 0 &&
                      (0, A.jsx)("div", {
                          className: AP.h_,
                          children: (0, A.jsx)(i8.l, {
                              label: "Inspect guild",
                              description:
                                  "Server assignment and eligibility shown below are for this guild. The override above still applies to all guilds.",
                              value: p ?? void 0,
                              options: T.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                              onSelectionChange: (e) => x(e),
                              selectionMode: "single",
                              fullWidth: !0,
                          }),
                      }),
                  (0, A.jsx)("div", {
                      className: AP.h_,
                      children: d
                          ? (0, A.jsx)(H.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === Ab.l5.LEGACY
                                        ? 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        : "Warning: Server did not send an assignment for this experiment. Make sure the experiment is configured to run on the APP surface in the admin UI.",
                            })
                          : null,
                  }),
                  S &&
                      (0, A.jsxs)("div", {
                          children: [
                              (0, A.jsxs)(H.E, {
                                  variant: "text-lg/medium",
                                  className: AP.id,
                                  children: ["Server Descriptor", null != f ? ` (${f})` : ""],
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: AP.AS,
                                  children: null == I ? "None" : JSON.stringify(I, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: AP.id,
                                  children: "Client Eligibility",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: AP.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, A.jsxs)("div", {
                            children: [
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: AP.id,
                                    children: "Guild Assignments",
                                }),
                                (0, A.jsx)(H.E, { variant: "code", className: AP.AS, children: g }),
                                t.system === Ab.l5.LEGACY &&
                                    (0, A.jsxs)(A.Fragment, {
                                        children: [
                                            (0, A.jsx)(H.E, {
                                                variant: "text-lg/medium",
                                                className: AP.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, A.jsx)(H.E, {
                                                variant: "code",
                                                className: AP.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: AP.id,
                                    children: "Override Descriptor",
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "code",
                                    className: AP.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: AP.id,
                                    children: "Recent Exposures",
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "code",
                                    className: AP.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, A.jsx)("div", {
                            className: AP.id,
                            children: (0, A.jsx)(Af.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, A.jsx)(i4.c, { className: AP.yF }),
              ],
          })
        : (0, A.jsx)("div", { className: AP.Os, children: C });
}
let AM = (0, d.E2)(c.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, Aj.op)(),
                { experiments: n, overridesInfo: i } = (0, AL.hI)(),
                l = E.useMemo(() => ({ ...n, ...e }), [n, e]),
                s = E.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, h.bG)([uI.default], () => {
                    let e = uI.default.getInstallationForTracking();
                    return null == e ? null : (0, Ax.v)(e);
                }),
                [a, o] = E.useState(""),
                u = (0, AR.oC)((0, AR.R3)((0, AR.Fm)(l), s), a);
            return (0, A.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, A.jsxs)(X.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, A.jsxs)(H.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                uy.p5 &&
                                    (0, A.jsx)(Af.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uy.C)(r, () => {
                                                (0, l4.P0)((0, AI.o)("Installation ID copied!", l8.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, A.jsx)(A_.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? AU : AG;
                              return (0, A.jsx)(
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
                        : (0, A.jsx)("div", {
                              className: AP.p$,
                              children: (0, A.jsx)(p.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    AV = (0, d.zZ)(c.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [AM] }),
    Ak = (0, d.t_)(c.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [AV] }),
    Aw = (0, d.i4)(c.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: AT.c,
        useMenu: Ap.A,
        buildLayout: () => [Ak],
    }),
    AF = (0, d.WI)(c.X.DEVELOPER_SECTION, {
        useTitle: () => R.intl.string(R.t["+gHUHA"]),
        usePredicate: () => mT.A.isDeveloper,
        buildLayout: () => [Aw, AS],
    });
var AB = n(682348),
    Az = n(871633),
    AX = n(751075),
    AY = n(843402);
let AH = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function AK() {
    let e = (0, h.yK)([iq.Ay], () => iq.Ay.getGamesSeen(!1)),
        t = (0, h.bG)([iq.Ay], () => AH(...iq.Ay.getOverrides()));
    E.useEffect(() => ((0, AY.a2)(), AY.e0), []);
    let { gameHistory: n, robloxSubgameHistory: i } = E.useMemo(
        () =>
            e.reduce((e, t) => ((0, Az.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function AW(e) {
    let { gameHistory: t } = AK();
    return {
        namedGames: E.useMemo(
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
function AZ(e) {
    let { namedGames: t, totalCount: n } = AW(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function Aq() {
    let { namedGames: e } = AW(2),
        [t, n] = E.useMemo(() => e.map((e) => e.id), [e]);
    E.useEffect(() => {
        g_.Ay.fetchApplications([t, n].filter(it.Vq));
    }, [t, n]);
    let [i, l] = (0, h.yK)([iK.A], () => [t, n].map(iK.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, A.jsx)(i$.A, { game: i, size: i$.M.MEDIUM_LARGE }), shape: AX.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, A.jsx)(i$.A, { game: l, size: i$.M.MEDIUM }), shape: AX.e0.ROUNDED } : null,
          };
}
let AQ = (0, d.AK)(c.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = AZ(2);
            return R.intl.format(R.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = Aq();
            return { type: m.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: c.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, h.bG)([iq.Ay], () => iq.Ay.getGamesSeen(!1).some((e) => !(0, Az.n1)(e))) && (0, nm.xl)(),
    }),
    AJ = (0, d.gN)(c.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [AQ] });
var A$ = n(57129);
let A0 = (0, d.zD)(c.X.ACTIVITY_PRIVACY_SETTING, {
    useTitle: () => R.intl.string(A$.default.WhdCGP),
    useSubtitle: () => R.intl.string(A$.default.UQ9RHJ),
    useValue: L.tz.useSetting,
    setValue: L.tz.updateSetting,
});
var A1 = n(406535);
let A2 = (0, d.zD)(c.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => R.intl.string(A$.default.A0FVCV),
        useSubtitle: () => R.intl.string(A$.default.vHX6RG),
        useValue: L.hV.useSetting,
        setValue: function (e) {
            L.hV.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A1.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                });
        },
    }),
    A3 = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => R.intl.string(R.t.WmsPis),
        useSearchTerms: () => [R.intl.string(R.t["8ka8li"])],
        buildLayout: () => [A0, A2, AJ],
    });
var A6 = n(106531);
let A5 = (0, d.AK)(c.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.J0SFL2),
        destinationKey: c.X.DATA_AND_PRIVACY_PANEL,
    }),
    A4 = (0, d.gN)(c.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, A6.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [A5],
    });
var A8 = n(945810);
let A7 = (0, A8.mj)({
    name: "2026-02-activity-privacy-matching",
    kind: "user",
    defaultConfig: { copyChanges: !1, upsell: !1 },
    variations: {
        0: { copyChanges: !1, upsell: !1 },
        1: { copyChanges: !0, upsell: !1 },
        2: { copyChanges: !0, upsell: !0 },
    },
});
var A9 = n(365258);
let Ee = (0, d.Qx)(c.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => R.intl.string(A$.default["/LHVbt"]),
    useSubtitle: () => R.intl.string(R.t.L5IdzV),
    useOptions: function () {
        return [
            { value: eB.Qd.ACTIVITY_STATUS_OFF, name: R.intl.string(A$.default.m3oL7Q) },
            { value: eB.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: R.intl.string(A$.default["5+lnTA"]) },
            { value: eB.Qd.ACTIVITY_STATUS_ON, name: R.intl.string(A$.default["egr+VZ"]) },
        ];
    },
    useValue: L._Z.useSetting,
    setValue: function (e) {
        var t;
        let i = L._Z.getSetting();
        if (
            (L._Z.updateSetting(e),
            (t = "GuildActivitySharingDefaultSetting"),
            !(0, A6.W1)(t) && !A7.getConfig({ location: t }).upsell)
        )
            return;
        let l = (0, A9.g8)(i, e);
        if (null == l) return;
        let s = (0, A9.Xc)(e);
        (0, lr.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("341996")]).then(
                n.bind(n, 32167),
            );
            return (t) =>
                (0, A.jsx)(e, { ...t, direction: l.direction, affectedGuildIds: l.affectedGuildIds, settingName: s });
        });
    },
});
var Et = n(498642),
    En = n(573435),
    Ei = n(260509),
    El = n(771810);
function Es(e) {
    let { guild: t, size: n } = e,
        i = (0, Ei.Iv)(t, n, !1, !0),
        l = (0, Ei.Rb)(t);
    return null != i
        ? (0, A.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, A.jsx)("div", {
              className: El.F,
              children: (0, A.jsx)(H.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: l,
              }),
          });
}
function Er(e) {
    let { guild: t, size: n } = e;
    return (0, A.jsx)(En.Ay, {
        className: El.z,
        mask: En.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, A.jsx)(Es, { guild: t, size: n }),
    });
}
var Ea =
    (((s = {}).SERVER_ORDER = "server-order"),
    (s.RECENTLY_JOINED = "recently-joined"),
    (s.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (s.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    s);
let Eo = {
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
var Eu = n(618118);
function Ed(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        l = (0, h.bG)([Et.A], () => Et.A.getMemberCount(t.id));
    return (0, A.jsxs)(X.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, A.jsx)("div", { className: Eu.FO, children: (0, A.jsx)(Er, { guild: t, size: 48 }) }),
            (0, A.jsx)("div", {
                className: Eu.QH,
                children: (0, A.jsx)(tJ.d, {
                    label: t.name,
                    description: R.intl.format(R.t.zRl6XR, { count: l ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let Ec = function (e) {
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
            let [e, t] = (0, E.useState)(""),
                [n, i] = (0, E.useState)("server-order"),
                l = (0, h.bG)([dA.Ay], () => dA.Ay.getFlattenedGuildIds()),
                s = (0, h.bG)([lE.A], () => lE.A.getGuilds()),
                r = l.map((e) => s[e]).filter(Boolean),
                a = L.Pw.useSetting(),
                [o, u] = (0, E.useState)(a);
            async function d(e) {
                u(e);
                try {
                    await L.Pw.updateSetting(e);
                } catch (e) {
                    u(a);
                }
            }
            (0, E.useEffect)(() => {
                u(a);
            }, [a]);
            let c = 0 !== o.length,
                [g, m] = (0, E.useState)(() => Eo[n](r, a)),
                A = g.map((e) => s[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    m(Eo[e](r, a)), i(e);
                },
                setSearchQuery: t,
                onToggleActivityRestrictedGuild: function (e) {
                    let { checked: t, guildId: n } = e,
                        i = new Set(o);
                    t ? i.delete(n) : i.add(n), d([...i]);
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
        m = (0, E.useId)(),
        T = (0, E.useRef)(null),
        p = (0, E.useMemo)(
            () => [
                { id: Ea.SERVER_ORDER, label: R.intl.string(R.t.STMPJ2), value: Ea.SERVER_ORDER },
                { id: Ea.RECENTLY_JOINED, label: R.intl.string(R.t.CbaapP), value: Ea.RECENTLY_JOINED },
                { id: Ea.ACTIVITY_SHARING_ON, label: R.intl.string(A$.default.ZI51JZ), value: Ea.ACTIVITY_SHARING_ON },
                {
                    id: Ea.ACTIVITY_SHARING_OFF,
                    label: R.intl.string(A$.default["+kxafn"]),
                    value: Ea.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        x = p.find((e) => e.value === s)?.label ?? "";
    return (0, A.jsxs)("div", {
        className: Eu.iE,
        children: [
            t,
            (0, A.jsxs)("div", {
                className: Eu.N1,
                children: [
                    (0, A.jsx)(A_.I, {
                        query: i,
                        onChange: l,
                        onClear: function () {
                            tt.default.track(S.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                                l("");
                        },
                        onFocus: () =>
                            tt.default.track(S.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        onBlur: () =>
                            tt.default.track(S.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        placeholder: R.intl.string(R.t["H+nRYw"]),
                        "aria-label": R.intl.string(R.t["5h0QOP"]),
                        inputProps: { "aria-controls": m, "aria-expanded": !0 },
                    }),
                    n.length > 0 &&
                        (0, A.jsxs)("div", {
                            className: Eu.gO,
                            children: [
                                (0, A.jsx)(r4.Y, {
                                    targetElementRef: T,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, A.jsx)(dI.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": R.intl.string(R.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, A.jsx)(e3.rX, {
                                                children: p.map((e) => {
                                                    let { id: t, label: n, value: i } = e;
                                                    return (0, A.jsx)(
                                                        e3.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: n,
                                                            checked: s === i,
                                                            action: () => {
                                                                tt.default.track(
                                                                    S.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
                                                                    {
                                                                        interaction: "sort_order_changed",
                                                                        sort_order: i,
                                                                        activity_restricted_guild_count: c,
                                                                        total_guild_count: g,
                                                                    },
                                                                ),
                                                                    r(i);
                                                            },
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                        });
                                    },
                                    children: (e) =>
                                        (0, A.jsxs)(nn.D, {
                                            ...e,
                                            innerRef: T,
                                            className: Eu.Ku,
                                            children: [
                                                (0, A.jsx)(H.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: x,
                                                }),
                                                (0, A.jsx)(dq.a, { size: "xs", color: nQ.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, A.jsx)(Af.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? R.intl.string(R.t["7lxcLO"]) : R.intl.string(R.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, A.jsx)(lt.A, {
                "aria-live": "polite",
                role: "region",
                children: R.intl.format(A$.default.EvzDff, { count: n.length }),
            }),
            (0, A.jsxs)("ul", {
                className: Eu.X1,
                id: m,
                "aria-label": R.intl.string(R.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, A.jsx)("div", {
                            className: Eu.pb,
                            children: (0, A.jsx)(H.E, {
                                className: Eu.R$,
                                variant: "text-lg/medium",
                                children: R.intl.string(R.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, A.jsx)(
                            Ed,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var Eg = n(68322);
let Em = (0, d.E2)(c.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [R.intl.string(A$.default["/LHVbt"])],
        Component: function () {
            let e = L.tz.useSetting()
                ? null
                : (0, A.jsx)("div", {
                      className: Eg.l,
                      children: (0, A.jsx)(iB.w, { type: "warning", children: R.intl.string(A$.default["xxI0/W"]) }),
                  });
            return (0, A.jsx)(Ec, { notice: e });
        },
    }),
    EA = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => R.intl.string(R.t.bwqjL9),
        buildLayout: () => [Ee, Em, A4],
    }),
    EE = (0, d.zD)(c.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => R.intl.string(A$.default.khuuzv),
        useSubtitle: () => R.intl.string(A$.default["8EWsJ8"]),
        useValue: () => L.e.useSetting(),
        setValue: (e) => L.e.updateSetting(e),
    }),
    Eh = (0, d.E2)(c.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, A.jsx)(H.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: R.intl.format(R.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, A.jsx)(
                            H.E,
                            { tag: "span", variant: "text-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
    }),
    ES = (0, d.zD)(c.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => R.intl.string(A$.default.Uz5Ipi),
        useSubtitle: () => R.intl.string(A$.default.CZI2Gb),
        useValue: () => L.UM.useSetting(),
        setValue: (e) => L.UM.updateSetting(e),
    }),
    ET = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => R.intl.string(A$.default["89YBr5"]),
        useSubtitle: () => R.intl.string(R.t.uGDpgH),
        buildLayout: () => [EE, ES, Eh],
        useSearchTerms: () => [R.intl.string(R.t.VOszPA)],
    }),
    Ep = (0, d.t_)(c.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => R.intl.string(R.t.Cq98yL),
        buildLayout: () => [A3, EA, ET],
    }),
    Ex = (0, d.i4)(c.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.Cq98yL),
        icon: AB._,
        buildLayout: () => [Ep],
    });
var Ef = n(712440),
    EI = n(370997);
let E_ = (0, d.E2)(c.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: EI.Ay,
    useSearchTerms: () => [R.intl.string(R.t["f6kk+r"])],
});
var EN = n(462887),
    EC = n(478016),
    Eb = n(789645),
    Ey = n(259678),
    Ev = n(77468),
    Ej = n(289498),
    EO = n(573648),
    EL = n(874490),
    ER = n(370480),
    ED = n(968309);
let EP = new Set([S.fg2.XBOX, S.fg2.PLAYSTATION, S.fg2.PLAYSTATION_STAGING, S.fg2.CRUNCHYROLL]);
var EG = n(169869),
    EU = n(814925),
    EM = n(733110),
    EV = n(479785),
    Ek = n(757036),
    Ew = n(555837),
    EF = n(43990),
    EB = n(241524),
    Ez = n(51965),
    EX = n(377368),
    EY = n(631368),
    EH = n(212739),
    EK = n(30370),
    EW = n(114516),
    EZ = n(181666),
    Eq = n(553875),
    EQ = n(660594);
function EJ() {
    let e,
        t,
        i,
        l,
        s,
        { variant: r, showFooter: a } =
            ((e = (0, EY.$)()),
            (t = (0, EW.mO)("connectedAccountsBannerFooter")),
            (i = (0, EH.O)()),
            (s = null != (l = (0, h.bG)([EK.A], () => EK.A.getAccount(null, S.fg2.XBOX))) && !l.revoked),
            e === EY.C.NONE || i
                ? { variant: EY.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === EY.C.NO_ACCESS && !s }),
        { analyticsLocations: o } = (0, eP.Ay)(tL.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        u = (0, EX.yW)(o),
        d = (0, EB.A)("(max-width: 485px)");
    if (r === EY.C.NONE) return null;
    let c = d ? "md" : "sm",
        g = "",
        m = null;
    switch (r) {
        case EY.C.HAS_ACCESS:
        case EY.C.BLOCK_CLAIM:
            (g = R.intl.string(Eq.default["7PdsMK"])),
                (m = (0, A.jsx)(Ez.A, {
                    variant: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    text: R.intl.string(Eq.default.CubeLC),
                    onClick: () => {
                        (0, lr.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("878140"), n.e("813088")]).then(
                                n.bind(n, 347171),
                            );
                            return (t) => (0, A.jsx)(e, { ...t, sourceAnalyticsLocations: o });
                        });
                    },
                }));
            break;
        case EY.C.NO_ACCESS:
            (g = R.intl.string(Eq.default.NwkRTZ)),
                (m = (0, A.jsx)(tU.A, {
                    defaultTextOverride: R.intl.string(Eq.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    subscriptionTier: tX.pe.TIER_2,
                }));
            break;
        default:
            (0, it.xb)(r);
    }
    return (0, A.jsxs)(eP.f5, {
        value: o,
        children: [
            (0, A.jsxs)("div", {
                className: EQ.bV,
                children: [
                    (0, A.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: R.intl.string(R.t.NG1e6l),
                    }),
                    (0, A.jsx)(rQ.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, A.jsx)(EF.N, {
                theme: "dark",
                children: (e) =>
                    (0, A.jsx)("div", {
                        className: e,
                        children: (0, A.jsxs)("div", {
                            className: EQ.Nr,
                            children: [
                                (0, A.jsxs)("div", {
                                    className: EQ.Tp,
                                    children: [
                                        (0, A.jsx)("div", {
                                            className: EQ.Qw,
                                            style: {
                                                backgroundImage: `url(${a ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, A.jsx)("div", { className: EQ.$h }),
                                        (0, A.jsx)("div", { className: EQ.Rv }),
                                        (0, A.jsx)("div", { className: EQ.Lw }),
                                    ],
                                }),
                                (0, A.jsxs)("div", {
                                    className: EQ.Mn,
                                    children: [
                                        (0, A.jsxs)("div", {
                                            className: EQ.mY,
                                            children: [
                                                (0, A.jsx)("img", {
                                                    className: EQ.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, A.jsx)(H.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: EQ.DD,
                                                    children: g,
                                                }),
                                            ],
                                        }),
                                        (0, A.jsx)("div", { className: EQ.lO, children: m }),
                                    ],
                                }),
                                a &&
                                    (0, A.jsxs)(A.Fragment, {
                                        children: [
                                            (0, A.jsx)("div", { className: EQ.yF }),
                                            (0, A.jsxs)("div", {
                                                className: EQ.sQ,
                                                children: [
                                                    (0, A.jsx)(oq.GiftIcon, {
                                                        size: d ? "md" : "sm",
                                                        color: nQ.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, A.jsx)(H.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: R.intl.format(EZ.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                u(EX.Hx.CONNECT),
                                                                    (0, ED.A)({
                                                                        platformType: S.fg2.XBOX,
                                                                        location: "Connected Accounts Banner",
                                                                    });
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
var E$ = n(201718),
    E0 = n(321078),
    E1 = n(672130),
    E2 = n(379848),
    E3 = n(688901);
function E6(e) {
    let { markAsDismissed: t } = e;
    return (
        E.useEffect(() => t(cb.i.UNKNOWN), [t]),
        (0, A.jsx)(tn.Lp, { className: E3.Ad, text: R.intl.string(R.t.y2b7CA) })
    );
}
function E5(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: l, onClick: s } = e;
    return (0, A.jsxs)("div", {
        className: E3.kL,
        children: [
            i,
            (0, A.jsxs)("div", {
                className: E3.FS,
                children: [
                    (0, A.jsxs)("div", {
                        className: E3.TK,
                        children: [
                            (0, A.jsx)(E2.Ay, {
                                contentTypes: [l],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === l ? (0, A.jsx)(E6, { markAsDismissed: n }) : null;
                                },
                            }),
                            (0, A.jsx)(H.E, { variant: "text-md/semibold", children: t }),
                        ],
                    }),
                    (0, A.jsx)(H.E, { variant: "text-xs/normal", children: n }),
                ],
            }),
            (0, A.jsx)(_.$, { text: R.intl.string(R.t.vD60Pv), onClick: s }),
        ],
    });
}
function E4() {
    let e = ex.A.getArticleURL(S.MVz.PS_CONNECTION);
    return (0, A.jsx)(E5, {
        title: R.intl.string(R.t.v20wwm),
        body: R.intl.format(R.t.lTZBit, { help_article: e }),
        img: (0, A.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eu.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, ED.A)({ platformType: S.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let E8 = "/assets/9df988a227916145.png";
function E7() {
    return (0, A.jsx)(E5, {
        title: R.intl.string(EZ.default["9cLtDI"]),
        body: R.intl.format(EZ.default["D+kUbg"], { learnMoreLink: ex.A.getArticleURL(S.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, A.jsx)("img", { src: E8, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eu.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, ED.A)({ platformType: S.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function E9() {
    let e = ex.A.getArticleURL(S.MVz.XBOX_CONNECTION);
    return (0, A.jsx)(E5, {
        title: R.intl.string(R.t["2okkZV"]),
        body: R.intl.format(R.t.OnERSS, { help_article: e }),
        img: (0, A.jsx)("img", { src: E8, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eu.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, ED.A)({ platformType: S.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var he = n(783419),
    ht = n(534952),
    hn = n(211180),
    hi = n(247259);
function hl(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: l,
            showJoinErrorMessage: s,
        } = (0, h.cf)(
            [EK.A],
            () => ({
                isJoining: EK.A.isJoining(n.id),
                joinErrorMessage:
                    "" === EK.A.joinErrorMessage(n.id) ? R.intl.string(R.t.j2d6Km) : EK.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== EK.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, h.bG)([lE.A], () => lE.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, A.jsx)(_.$, {
                size: "sm",
                onClick: function () {
                    Ev.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? R.intl.string(R.t.RXvQQu) : R.intl.string(R.t.XpeFYr),
            })),
        (0, A.jsxs)("div", {
            className: hi.iA,
            children: [
                (0, A.jsxs)("div", {
                    className: hi.XX,
                    children: [
                        (0, A.jsx)(db.Ay, { size: db.Ay.Sizes.SMALL, guild: n.guild, className: hi.$f }),
                        (0, A.jsxs)("div", {
                            className: hi.Vn,
                            children: [
                                (0, A.jsx)(H.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, A.jsx)(aK.Anchor, {
                                    href: EO.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, A.jsx)(H.E, {
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
                s &&
                    (0, A.jsx)(H.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: hi.R,
                        children: l,
                    }),
            ],
        })
    );
}
function hs(e) {
    var t;
    let n,
        i,
        { account: l } = e,
        s =
            ((t = l.id),
            (n = (0, Ew.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (i = (0, Ek.L)(tX.PremiumTypes.TIER_2)),
            !n && !i && !/^\d+$/.test(t));
    return l.type === S.fg2.XBOX && s
        ? (0, A.jsx)(E7, {})
        : l.twoWayLink
          ? null
          : l.type === S.fg2.XBOX
            ? (0, A.jsx)(E9, {})
            : l.type === S.fg2.PLAYSTATION
              ? (0, A.jsx)(E4, {})
              : null;
}
function hr(e) {
    let t,
        n,
        i,
        l,
        s,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [g, m] = E.useState(u.friendSync),
        [h, T] = E.useState(u.visibility),
        [p, x] = E.useState(u.metadataVisibility),
        [f, I] = E.useState(u.showActivity),
        [N, C] = E.useState(null),
        [b, y] = E.useState(null),
        [v, j] = E.useState(!1),
        [O, L] = E.useState([]),
        D = (0, EL.ML)(u.type),
        P = EO.A.get(D);
    E.useEffect(() => {
        m(u.friendSync), T(u.visibility), x(u.metadataVisibility), I(u.showActivity);
    }, [u]);
    let G = { inProgressVisibility: N, inProgressMetadataVisibility: b },
        U = E.useRef(G);
    return (
        E.useEffect(() => {
            U.current = G;
        }),
        E.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = U.current;
            null != e && (T(e), Ev.A.setVisibility(u.type, u.id, e), C(null)),
                null != t && (x(t), Ev.A.setMetadataVisibility(u.type, u.id, t), y(null));
        }, [u]),
        (0, A.jsxs)("div", {
            className: hi.FI,
            children: [
                ((t = EO.A.get(u.type)),
                (n = EO.A.get(D)),
                (i = "1" === (u.metadata ?? {})[he.pK.TWITTER_VERIFIED]),
                (l = null),
                t.type === S.fg2.TWITTER &&
                    i &&
                    (l = (0, A.jsx)(le.m, {
                        text: R.intl.string(R.t.Jebrww),
                        children: (0, A.jsx)(EU.A, {
                            color: nQ.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, A.jsx)(EC.U, { size: "xs", color: nQ.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, A.jsxs)("div", {
                    className: hi.Il,
                    children: [
                        (0, A.jsx)("img", {
                            alt: n.name,
                            className: hi.gj,
                            src: (0, EN.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, A.jsxs)("div", {
                            children: [
                                (0, A.jsxs)("div", {
                                    className: hi.$p,
                                    children: [
                                        (0, A.jsx)(H.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: hi.RW,
                                            children: u.name,
                                        }),
                                        null != l && (0, A.jsx)("div", { className: hi.cG, children: l }),
                                    ],
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: hi.Au,
                                    children: n.migrationData?.getMigrationExperimentEnabled(
                                        "User Settings Connections Web",
                                    )
                                        ? R.intl.format(hn.default.Glhokn, { platformName: n.name })
                                        : n.name,
                                }),
                            ],
                        }),
                        (0, A.jsx)(nn.D, {
                            className: hi.uH,
                            onClick: function () {
                                let e = EO.A.get(u.type);
                                (0, lr.openModal)((t) =>
                                    (0, A.jsx)(ls.Modal, {
                                        title: R.intl.formatToPlainString(R.t.U5x12f, { name: e.name }),
                                        subtitle: R.intl.format(R.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: R.intl.string(R.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: R.intl.string(R.t.bsbMVz),
                                                onClick: () => {
                                                    o(), t.onClose();
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            EP.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, A.jsx)(lK.A, {
                                                children: R.intl.format(R.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": R.intl.string(R.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, A.jsx)(Eb.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, A.jsx)(hs, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, ER.An)(t[he.pK.CREATED_AT], c);
                    switch (e.type) {
                        case S.fg2.REDDIT:
                            n = (0, EG.xE)(t, hi.Nz);
                            break;
                        case S.fg2.STEAM:
                            n = (0, EG.dy)(t, hi.Nz);
                            break;
                        case S.fg2.BLUESKY:
                        case S.fg2.TWITTER:
                        case S.fg2.MASTODON:
                            n = (0, EG.ED)(t, hi.Nz);
                            break;
                        case S.fg2.EBAY:
                            n = (0, EG.ub)(t, hi.Nz);
                            break;
                        case S.fg2.PAYPAL:
                            n = (0, EG.gZ)(t, hi.Nz);
                            break;
                        case S.fg2.TIKTOK:
                            n = (0, EG.HU)(t, hi.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, A.jsx)(
                                H.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: hi.M4,
                                    children: R.intl.format(R.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = O.includes(e.id),
                        s = R.intl.string(R.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== EO.A.get(e.type).hasMetadata) return null;
                        else
                            (n = [
                                (0, A.jsx)(tn.Lp, { className: hi.Z3, text: R.intl.string(R.t.y2b7CA) }, "badge"),
                                (0, A.jsx)(
                                    H.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: hi.vt,
                                        children: R.intl.format(R.t.Up2ni7, {
                                            helpdeskUrl: ex.A.getArticleURL(S.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (s = R.intl.string(R.t["LVh3/5"]));
                    return (
                        l && (s = R.intl.string(R.t.i4jeWR)),
                        n.push(
                            (0, A.jsx)(
                                "div",
                                {
                                    className: hi.jy,
                                    children: (0, A.jsx)(_.$, {
                                        text: s,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: v,
                                        disabled: l,
                                        "aria-label": R.intl.string(R.t.sCkLYH),
                                        onClick: l
                                            ? void 0
                                            : () => {
                                                  j(!0),
                                                      Ev.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              O.push(e.id), L(O), j(!1);
                                                          }, 2e3);
                                                      });
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, A.jsx)("div", { className: hi.tJ, children: n })
                    );
                })(u),
                (S.txh.has(u.type) &&
                    (s = (0, A.jsx)(tJ.d, {
                        label: R.intl.string(R.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            m(e), Ev.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                S.ewM.has(u.type) &&
                    (r = (0, A.jsx)(tJ.d, {
                        label: R.intl.format(R.t["6u6J0q"], { platform: P.name }),
                        checked: f,
                        onChange: function (e) {
                            I(e), Ev.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                EO.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, A.jsx)(tJ.d, {
                        label: R.intl.string(R.t.FYKGsL),
                        checked: 1 === p,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                y(n), (0, ED.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            x(n), Ev.A.setMetadataVisibility(u.type, u.id, n);
                        },
                        disabled: 1 !== h || null == u.metadata,
                    })),
                (0, A.jsxs)("div", {
                    className: hi.HZ,
                    children: [
                        (0, A.jsx)(tJ.d, {
                            label: R.intl.string(R.t.f7yOAX),
                            checked: 1 === h,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    C(n), (0, ED.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                T(n), Ev.A.setVisibility(u.type, u.id, n);
                            },
                        }),
                        a,
                        r,
                        s,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, A.jsx)(i4.c, {});
                })(),
                u.revoked
                    ? (0, A.jsx)(rJ.p, {
                          messageType: rJ.Y.INFO,
                          children: R.intl.format(R.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, ED.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, A.jsx)(tQ.D, {
                            label: R.intl.string(R.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, A.jsx)(hl, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, A.jsx)(EV.A, { partner: u.type }),
            ],
        })
    );
}
function ha(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, A.jsxs)("div", {
              className: hi.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = O.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, A.jsxs)("div", {
                          className: hi.Il,
                          children: [
                              (0, A.jsx)("img", { alt: n.name, className: is()(hi.gj, hi.sN), src: i }),
                              (0, A.jsxs)("div", {
                                  children: [
                                      (0, A.jsx)("div", {
                                          className: hi.$p,
                                          children: (0, A.jsx)(H.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: hi.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, A.jsx)(H.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: hi.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, A.jsx)(nn.D, {
                                  className: hi.uH,
                                  onClick: () =>
                                      (0, EI.d1)(n, t.scopes, () => {
                                          Ef.A.delete(t.id);
                                      }),
                                  "aria-label": R.intl.string(R.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, A.jsx)(Eb.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, A.jsx)("div", {
                      className: hi.HZ,
                      children: (0, A.jsx)(tJ.d, {
                          label: R.intl.string(R.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              E$.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function ho(e) {
    let t = EO.A.get(e);
    (0, ED.A)({ platformType: t.type }),
        tt.default.track(S.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function hu() {
    let e = (0, EL.gn)(),
        t = (0, iW.A)((0, ht.getMigratedApplicationIdentityConnectionsScreenApplications)("NewConnectionsList"));
    return (0, A.jsxs)("div", {
        className: hi.lA,
        children: [
            t.map(
                (e) =>
                    null != e &&
                    (0, A.jsx)(
                        E1.A,
                        { application: e, className: hi.__invalid_accountButton, innerClassName: hi.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - t.length)
                .map((e) =>
                    (0, A.jsx)(
                        Ej.A,
                        { type: e.type, className: hi.__invalid_accountButton, innerClassName: hi.U$ },
                        e.type,
                    ),
                ),
            (0, A.jsx)(le.m, {
                text: R.intl.string(R.t.QqTz8b),
                children: (0, A.jsx)("div", {
                    className: is()(hi.ej, hi.__invalid_accountButton),
                    children: (0, A.jsx)(Ey.vN, {
                        children: (0, A.jsx)("button", {
                            className: is()(hi.R8, hi.U$),
                            type: "button",
                            onClick: function () {
                                e5.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: ho });
                            },
                            "aria-label": R.intl.string(R.t.Zhcj9X),
                            children: (0, A.jsx)(n1._, {
                                color: "currentColor",
                                size: "md",
                                "aria-label": R.intl.string(R.t.QqTz8b),
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function hd(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: l, authorizedApps: s, theme: r, locale: a } = e,
        o = E.useMemo(() => i.filter((e) => EO.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, A.jsx)(a8.y, { type: a8.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === l.length
              ? (0, A.jsx)(mV.pp, {
                    theme: r,
                    className: hi.p$,
                    children: (0, A.jsx)(mV.SG, {
                        note: R.intl.string(R.t.WenGZ2),
                        children: R.intl.string(R.t.aoLS84),
                    }),
                })
              : (0, A.jsxs)(A.Fragment, {
                    children: [
                        (0, A.jsx)(p.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: R.intl.format(R.t.AioIGb, { count: l.length + o.length }),
                        }),
                        l.map((e, t) =>
                            (0, A.jsx)(
                                ha,
                                { appIdentity: e, oauth2Token: s.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, A.jsx)(
                                hr,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            Ev.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, A.jsx)("div", { className: hi.V, children: t })
    );
}
let hc = (0, d.E2)(c.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, A.jsx)(tQ.D, { label: R.intl.string(R.t["t+aGse"]), children: (0, A.jsx)(hu, {}) });
        },
        useSearchTerms: () => [
            R.intl.string(R.t.Zhcj9X),
            R.intl.string(R.t.QqTz8b),
            R.intl.string(R.t["+/hZM/"]),
            R.intl.string(R.t.bsbMVz),
            R.intl.string(R.t.f7yOAX),
            R.intl.string(R.t.FYKGsL),
            R.intl.string(R.t["+KCMSi"]),
        ],
    }),
    hg = (0, d.E2)(c.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, h.bG)([te.A], () => te.A.hidePersonalInformation),
                t = (0, h.bG)([EK.A], () => EK.A.isFetching()),
                n = (0, h.bG)([EK.A], () => EK.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: l } = (0, h.cf)([EM.default], () => ({
                    authorizedAppsFetchState: EM.default.getFetchState(),
                    authorizedApps: EM.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: s, filteredAppIdentities: r } = (0, E0.A)(sn.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, uP.Ay)(),
                o = (0, h.bG)([oV.default], () => oV.default.locale);
            return (E.useEffect(() => {
                i === EM.FetchState.NOT_FETCHED && Ef.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)(EJ, {}),
                          (0, A.jsx)(hd, {
                              fetching: t || s || (r.length > 0 && i !== EM.FetchState.FETCHED),
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
            Ev.A.fetch();
        },
        useSearchTerms: () => [
            R.intl.string(R.t["+/hZM/"]),
            R.intl.string(R.t.bsbMVz),
            R.intl.string(R.t.f7yOAX),
            R.intl.string(R.t.FYKGsL),
            R.intl.string(R.t["+KCMSi"]),
        ],
    });
var hm = n(206828);
let hA = (0, d.zZ)(c.X.CONNECTIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["3fe7U5"]),
        useSubtitle: () => R.intl.string(R.t.U22vw6),
        useInlineNotice: function () {
            let e = (0, h.bG)([EK.A], () => EK.A.getAccounts()),
                t = E.useMemo(
                    () =>
                        EO.A.filter(
                            (e) =>
                                e.migrationData?.getMigrationExperimentEnabled("ConnectionDeprecationInlineNotice") ===
                                !0,
                        ).filter((t) => e.some((e) => e.type === t.type)),
                    [e],
                ),
                [n, i] = E.useState(0),
                [l, s] = E.useState(t),
                r = t !== l;
            r && (s(t), i(0));
            let a = E.useMemo(() => t[n], [t, n]),
                o = (0, iW.h)(a?.migrationData?.replacedBy),
                { canStartAuthorization: u, hasAlreadyLinked: d, fetched: c } = (0, hm.RD)(o),
                g =
                    a?.type === S.fg2.RIOT_GAMES || a?.type === S.fg2.LEAGUE_OF_LEGENDS
                        ? R.intl.string(hn.default["1S6oAo"])
                        : o?.name,
                A = null != a && c,
                T = A && !d && u && o?.connectionEntrypointUrl != null;
            return (
                r || !A || T || i((e) => e + 1),
                E.useMemo(
                    () =>
                        T
                            ? {
                                  type: m.lT.INLINE_NOTICE,
                                  noticeType: "info",
                                  text: R.intl.format(hn.default.wUXupS, {
                                      connectionName: a.name,
                                      applicationName: g,
                                      connectionEntrypointUrl: o?.connectionEntrypointUrl,
                                      helpCenterLink:
                                          a.migrationData?.helpCenterLink != null ? a.migrationData.helpCenterLink : "",
                                  }),
                              }
                            : null,
                    [a, g, o, T],
                )
            );
        },
        buildLayout: () => [hc, hg],
    }),
    hE = (0, d.zZ)(c.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["f6kk+r"]),
        useSubtitle: () => R.intl.string(R.t.G9JfLg),
        buildLayout: () => [E_],
        initialize: () => (
            Ef.A.fetch(),
            () => {
                EI.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    hh = (0, d.t_)(c.X.CONNECTED_APPS_PANEL, {
        useTitle: () => R.intl.string(R.t.lrVuZO),
        useObscuredNotice: a5.L,
        buildLayout: () => [hA, hE],
    }),
    hS = (0, d.i4)(c.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.lrVuZO),
        icon: mk.LinkIcon,
        buildLayout: () => [hh],
    });
var hT = n(625657),
    hp = n(592598),
    hx = n(773371),
    hf = n(184809),
    hI = n(672396);
let h_ = hC(null);
function hN() {
    var e;
    let t = hC(h_);
    (e = h_),
        B().isEqual(B().omit(t, "old_enabled"), B().omit(e, "old_enabled")) ||
            (tt.default.track(S.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (h_ = t));
}
function hC(e) {
    let t = hf.default.getNotificationPositionMode(),
        n = t !== S.G6Q.DISABLED,
        i = lG.Ay.getOverlayKeybind(),
        l = lG.Ay.getOverlayChatKeybind();
    return {
        enabled: hx.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: hp.A.isNotificationDisabled(hI.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, ll.dI)(i.shortcut) : null,
        text_activation_hotkey: null != l ? (0, ll.dI)(l.shortcut) : null,
        text_opacity_slider: hf.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? hx.default.enabled,
    };
}
var hb = n(237984),
    hy = n(63035);
function hv(e) {
    e.preventDefault(), e.stopPropagation();
}
function hj(e) {
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
    return (0, A.jsxs)("div", {
        className: is()(hy.HS, d),
        children: [
            (0, A.jsxs)(AN.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, A.jsx)("div", { className: hy.x_, children: t }),
                    (0, A.jsxs)("div", {
                        className: hy.rN,
                        children: [
                            null != n && (0, A.jsx)("div", { className: hy.$t, children: n }),
                            (0, A.jsxs)("div", {
                                className: hy.c8,
                                children: [
                                    (0, A.jsx)(H.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: hy.SZ,
                                        children: i,
                                    }),
                                    null != l &&
                                        (0, A.jsx)(H.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: l,
                                        }),
                                    null != r &&
                                        (0, A.jsx)(H.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, A.jsx)("div", { className: hy.a$, children: s }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)("div", { className: hy.Om, children: a }),
        ],
    });
}
let hO = (0, d.E2)(c.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, A.jsx)(hj, {
            title: R.intl.string(R.t["z4/l+V"]),
            description: R.intl.string(R.t["3aZq/0"]),
            action: (0, A.jsx)(_.$, {
                variant: "primary",
                text: R.intl.string(R.t.s2nVhG),
                onClick: () => {
                    (0, hb.b)(tL.A.USER_SETTINGS, S.BRT.APP);
                },
            }),
            "aria-label": R.intl.string(R.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [R.intl.string(R.t["z4/l+V"])],
});
var hL = n(31300),
    hR = n(780907),
    hD = n(684013),
    hP = n(56562),
    hG = n(311043),
    hU = n(569926),
    hM = n(810412),
    hV = n(41984),
    hk = n(296027),
    hw = n(562519);
let hF = 5 * n(927813).A.Millis.DAY,
    hB = new hw.A("overlay_survey_timestamps");
function hz(e, t) {
    let i, l;
    (i = Date.now()),
        (null != (l = Array.from(hB.values()).reduce((e, t) => Math.max(e, t), 0)) && i - l < hF) ||
            Array.from(hB.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, lr.openModalLazy)(async () => {
                let i,
                    { default: l } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return (i = Date.now()), hB.add(i), (n) => (0, A.jsx)(l, { ...n, clientSettingType: e, gameId: t });
            });
}
function hX() {
    (0, i1.sL)("overlay-settings");
}
function hY(e) {
    let { className: t, game: n } = e;
    return (0, i1.NP)() && null != n && n.elevated
        ? (0, A.jsx)("div", {
              className: t,
              children: (0, A.jsx)(rJ.p, {
                  messageType: rJ.Y.WARNING,
                  action: (0, A.jsx)(_.$, {
                      variant: "secondary",
                      size: "sm",
                      text: R.intl.string(R.t["1iI46O"]),
                      onClick: hX,
                  }),
                  children: R.intl.format(R.t["LJzl+0"], { helpCenterLink: ex.A.getArticleURL(S.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var hH = n(760751),
    hK = n(9302),
    hW = n(656513);
let hZ = new Set([
    hV.AR.INITIALIZING,
    hV.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    hV.AR.WAITING_FOR_MODULE_TRACKING,
    hV.AR.WAITING_FOR_OVERLAY_OPEN,
    hV.AR.WAITING_FOR_POPOUT_OPEN,
    hV.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    hV.AR.WAITING_FOR_REACT_INITIALIZATION,
    hV.AR.WAITING_FOR_PID_FOCUS,
    hV.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function hq(e) {
    let { children: t, className: n, onExpand: i, ...l } = e,
        [s, r] = E.useState(!1);
    return (0, A.jsx)(hW.N, {
        className: hy.uR,
        collapsibleContent: (0, A.jsx)("div", { className: hy.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, A.jsx)(hj, {
                ...l,
                onClick: (e) => {
                    var n;
                    r((n = !s)), i?.(n), t?.(e);
                },
                className: is()(hy.AC, n),
                action: (0, A.jsxs)("div", {
                    className: hy.rc,
                    children: [
                        l.action,
                        s
                            ? (0, A.jsx)(dq.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, A.jsx)(n1._, {
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
let hQ = (0, d.E2)(c.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = iJ();
        (0, hU.I)(e?.id);
        let n = e?.pid,
            i = (0, h.bG)(
                [hk.default],
                () => (null == e || null == n ? null : hk.default.getTrackedGameByPid(n)),
                [e, n],
                iH(),
            ),
            { data: l } = (0, hU.I)(i?.gameId),
            { enabledLegacy: s, enabledOOP: r } = (0, h.cf)(
                [hH.A, ti.A, hG.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, iq.hw)(e, !1, [hH.A, ti.A, hG.A]),
                [e, i],
            ),
            a = (0, h.bG)(
                [iq.Ay, hH.A, ti.A, hG.A],
                () => (null == e ? null : (0, iq.xU)(e, iq.Ay, hH.A, ti.A, hG.A)),
                [e],
                iH(),
            ),
            [o, u] = E.useState(r),
            [d, c] = E.useState(s),
            [g, m] = E.useState(!1);
        E.useEffect(() => {
            u(r), c(s);
        }, [r, s]);
        let S = !(0, hK.supportsLegacy)(),
            T = !(0, hK.supportsOutOfProcess)(),
            { legacyEnabled: p, oopEnabled: x } = (0, h.cf)([hk.default], () => hk.default.getGlobalEnabledStatus());
        function f(t, n) {
            if (null == e) return;
            let i = !1,
                l = !1;
            switch (n) {
                case hM.OverlayToggledClientSettingType.LEGACY_GAME:
                    c(t), hR.Ay.toggleOverlay(e, t, o), (i = !t && d);
                    break;
                case hM.OverlayToggledClientSettingType.OOP_GAME:
                    u(t), hR.Ay.toggleOverlay(e, d, t), (l = !t && o);
                    break;
                case hM.OverlayToggledClientSettingType.LEGACY:
                    hD.A.setEnabled(t, x), (0, hM.Q3)(t, hM.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                    break;
                case hM.OverlayToggledClientSettingType.OOP:
                    hD.A.setEnabled(p, t), (0, hM.Q3)(t, hM.OverlayToggledClientSettingType.OOP, e.id ?? null);
            }
            (i || l) &&
                hz(
                    i ? hM.OverlayToggledClientSettingType.LEGACY_GAME : hM.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let I = S && T,
            _ = !p && !x,
            N = !o && !p && d && !S,
            C = !d && !x && o && !T,
            b = i?.overlayMethod === hV.Ue.Disabled,
            y = i?.state === hV.AR.OVERLAY_RENDERING && !b,
            v = i?.state != null && hZ.has(i.state) && !b,
            j = i?.overlayMethod === hV.Ue.OutOfProcess,
            O = i?.overlayMethod === hV.Ue.OutOfProcessLimitedInteraction,
            L = i?.overlayMethod === hV.Ue.Hook,
            D = i?.state === hV.AR.OVERLAY_CRASHED || i?.state === hV.AR.OVERLAY_CRASHED_DISABLED,
            P = !o && !d,
            [G, U] = (function () {
                switch (!0) {
                    case y && j:
                        return [
                            R.intl.format(R.t.hFVBIg, {
                                overlayMethod: R.intl.string(R.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, A.jsx)(
                                        H.E,
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
                    case y && O:
                        return [
                            R.intl.format(R.t.hFVBIg, {
                                overlayMethod: R.intl.string(R.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, A.jsx)(
                                        H.E,
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
                    case y && L:
                        return [
                            R.intl.format(R.t.hFVBIg, {
                                overlayMethod: R.intl.string(R.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, A.jsx)(
                                        H.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case i?.fullscreenType !== hP.aI.BORDERLESS_FULLSCREEN:
                                        return R.intl.string(R.t.mJmbeC);
                                    case T:
                                        return R.intl.string(R.t.C7bLTQ);
                                    case !i?.oopEnabled:
                                        return R.intl.string(R.t.WiY24u);
                                    case !x:
                                        return R.intl.string(R.t.cAFVsL);
                                    case !(l?.supportsOutOfProcessOverlay ?? !0):
                                        return R.intl.string(R.t.XcGEcs);
                                    default:
                                        return R.intl.string(R.t.bJXH2v);
                                }
                            })(),
                        ];
                    case D:
                        return [R.intl.string(R.t.OFC2aw), null];
                    case I:
                        return [R.intl.string(R.t.m7X4az), null];
                    case _:
                        return [R.intl.string(R.t["9DUS5l"]), null];
                    case P:
                        return [R.intl.string(R.t.nQ9EdJ), null];
                    case N:
                    case C:
                        return [R.intl.string(R.t.VWUn0a), null];
                    case v:
                        if (j) return [R.intl.string(R.t["s8+CFq"]), null];
                        if (L) return [R.intl.string(R.t.JEEdqt), null];
                        if (O) return [R.intl.string(R.t.pzBMwY), null];
                        return [R.intl.string(R.t["2Xhy9k"]), null];
                    case null == i:
                        return [R.intl.string(R.t.vwHPRi), null];
                    case b: {
                        let e = i?.fullscreenType === hP.aI.FULLSCREEN ? R.intl.string(R.t.mJmbeC) : null;
                        return [R.intl.string(R.t.VPW4XY), e];
                    }
                    default:
                        return [R.intl.string(R.t.ONovP5), null];
                }
            })();
        (0, eS.Ay)(() => {
            hR.Ay.getDetectableGames();
        });
        let [M, V] = E.useMemo(
            () =>
                v
                    ? ["text-muted", nQ.A.colors.TEXT_MUTED.css]
                    : y && O
                      ? ["text-feedback-warning", nQ.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : y && j
                        ? ["text-feedback-positive", nQ.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : y && L
                          ? ["text-strong", nQ.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", nQ.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, y, O, j, L],
        );
        return null == e
            ? null
            : (0, A.jsxs)(hq, {
                  onExpand: m,
                  className: g ? hy.tx : void 0,
                  title: (0, A.jsxs)(A.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, A.jsx)(le.m, {
                                    text: R.intl.string(R.t["4PJP5p"]),
                                    children: (0, A.jsx)(EU.A, {
                                        size: 16,
                                        color: nQ.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, A.jsx)(EC.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: nQ.A.colors.WHITE.css,
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  description: G,
                  hint: null != U ? U : void 0,
                  header: (0, A.jsxs)(A.Fragment, {
                      children: [
                          y || v
                              ? (0, A.jsx)(hL.k, { size: "xxs", color: V })
                              : (0, A.jsx)("div", { className: hy.W4 }),
                          (0, A.jsx)(H.E, {
                              variant: "text-xs/semibold",
                              color: M,
                              children: R.intl.string(R.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, A.jsx)(i$.A, { game: t, pid: e?.pid, size: i$.M.MEDIUM }),
                  "aria-label": R.intl.string(R.t["87O5GC"]),
                  action: (0, A.jsx)(nn.D, {
                      onClick: (e) => hv(e),
                      children: (0, A.jsx)(tJ.d, {
                          checked: (o && x) || (d && p),
                          disabled: I,
                          onChange: (t) => {
                              !(function (t, n) {
                                  if (null == e) return;
                                  let i = !1,
                                      l = !1;
                                  switch (n) {
                                      case "game":
                                          hR.Ay.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (l = !t && o);
                                          break;
                                      case "global":
                                          hD.A.setEnabled(t, t), (i = !t && p), (l = !t && x);
                                          break;
                                      case "both":
                                          hD.A.setEnabled(t, t),
                                              hR.Ay.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && p) || (!t && d)),
                                              (l = (!t && x) || (!t && o));
                                  }
                                  let s = null;
                                  i
                                      ? (s =
                                            "game" === n
                                                ? hM.OverlayToggledClientSettingType.LEGACY_GAME
                                                : hM.OverlayToggledClientSettingType.LEGACY)
                                      : l &&
                                        (s =
                                            "game" === n
                                                ? hM.OverlayToggledClientSettingType.OOP_GAME
                                                : hM.OverlayToggledClientSettingType.OOP),
                                      null != s && hz(s, e.id ?? null);
                              })(
                                  t,
                                  (function (e, t) {
                                      let n = !t && e,
                                          i = !x && o,
                                          l = !p && d,
                                          s = !o && x,
                                          r = !d && p;
                                      switch (!0) {
                                          case n && (i || l) && (s || r):
                                              return "both";
                                          case n && (i || l):
                                              return "global";
                                          default:
                                              return "game";
                                      }
                                  })(t, (o && x) || (d && p)),
                              );
                          },
                      }),
                  }),
                  warning: (0, A.jsx)(hY, { className: hy.Hh, game: e }),
                  children: [
                      (0, A.jsx)(hj, {
                          title: R.intl.string(R.t["7BlVIs"]),
                          description: R.intl.string(R.t.ndgADE),
                          hint: x ? void 0 : R.intl.string(R.t.cAFVsL),
                          "aria-label": R.intl.string(R.t["7BlVIs"]),
                          action: (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(tJ.d, {
                                      checked: o && x,
                                      disabled: T,
                                      onChange: (e) => {
                                          e && !x
                                              ? f(e, hM.OverlayToggledClientSettingType.OOP)
                                              : f(e, hM.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, A.jsx)("div", { className: hy.Kz }),
                              ],
                          }),
                      }),
                      (0, A.jsx)(hj, {
                          title: R.intl.string(R.t.BfFpW1),
                          description: R.intl.string(R.t.OzInYk),
                          hint: p ? void 0 : R.intl.string(R.t["3sYHXm"]),
                          "aria-label": R.intl.string(R.t.BfFpW1),
                          action: (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(tJ.d, {
                                      checked: d && p,
                                      disabled: S,
                                      onChange: (e) => {
                                          e && !p
                                              ? f(e, hM.OverlayToggledClientSettingType.LEGACY)
                                              : f(e, hM.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, A.jsx)("div", { className: hy.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = iJ();
        return null != e;
    },
    useSearchTerms: () => [R.intl.string(R.t["9cb1Uz"])],
});
var hJ = n(206885);
function h$(e) {
    let { game: t, gameApplication: n } = e,
        i = E.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        l = (0, h.bG)([iK.A], () => (null != n ? n : iK.A.getApplication(t?.id)), [n, t]);
    return (0, A.jsx)(i$.A, { game: l, pid: i, size: i$.M.SMALL });
}
function h0(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: l,
        onChange: s,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, hU.I)(t?.id);
    let o = (0, h.cf)([iq.Ay, hH.A, ti.A, hG.A], () => (0, iq.xU)(t, iq.Ay, hH.A, ti.A, hG.A)),
        u = (0, h.cf)([hH.A, ti.A, hG.A], () => (0, iq.hw)(t, !1, [hH.A, ti.A, hG.A]), [t]),
        d = l(u),
        [c, g] = E.useState(d);
    return (
        E.useEffect(() => {
            g(d);
        }, [d]),
        (0, A.jsx)(hj, {
            title: t.name,
            icon: (0, A.jsx)(h$, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, A.jsxs)(A.Fragment, {
                children: [
                    (0, A.jsx)(tJ.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return (n = !e && c), void (g(e), s(e, o, u), n && hz(r, o.id ?? t?.id ?? null));
                        },
                    }),
                    (0, A.jsx)("div", { className: hy.Kz }),
                ],
            }),
        })
    );
}
let h1 = (0, d.E2)(c.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = E.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, h.cf)([hk.default], () =>
                    hk.default.getGlobalEnabledStatus(),
                ),
                l = (0, h.yK)([iq.Ay], () => iq.Ay.getGamesSeen(!0)).filter((e) => !(0, Az.n1)(e)),
                s = (0, iW.A)(l.map((e) => e.id)),
                r = !(0, hK.supportsLegacy)();
            function a(e) {
                hD.A.setEnabled(e, i);
                let t = iq.Ay.getCurrentGameForAnalytics()?.id ?? null;
                (0, hM.Q3)(e, hM.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && hz(hM.OverlayToggledClientSettingType.LEGACY, t);
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                hR.Ay.toggleOverlay(t, e, i);
            }
            let u = E.useMemo(
                () =>
                    (0, hK.supportsLegacy)()
                        ? r
                            ? R.intl.string(R.t.r9jEVw)
                            : R.intl.string(R.t.OzInYk)
                        : R.intl.string(R.t["8Ox6/E"]),
                [r],
            );
            return 0 === l.length
                ? (0, A.jsx)(hj, {
                      title: R.intl.string(R.t.BfFpW1),
                      description: u,
                      "aria-label": R.intl.string(R.t.BfFpW1),
                      className: hy.dA,
                      action: (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(tJ.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              hJ.O && (0, A.jsx)("div", { className: hy.Kz }),
                          ],
                      }),
                  })
                : (0, A.jsxs)(hq, {
                      onExpand: t,
                      className: e ? hy.tx : void 0,
                      title: R.intl.string(R.t.BfFpW1),
                      description: u,
                      "aria-label": R.intl.string(R.t.BfFpW1),
                      action: (0, A.jsx)(nn.D, {
                          onClick: (e) => hv(e),
                          children: (0, A.jsx)(tJ.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, A.jsx)("div", {
                              className: hy.SC,
                              children: (0, A.jsx)(H.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: R.intl.string(R.t.FzoWRo),
                              }),
                          }),
                          (0, A.jsx)(x.Ip, {
                              className: hy.XG,
                              children: l.map((e, t) =>
                                  (0, A.jsx)(
                                      h0,
                                      {
                                          rawGame: e,
                                          clientSettingType: hM.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: s[t],
                                          getEnabledFromStatus: (e) => {
                                              let { enabledLegacy: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: R.intl.format(R.t.hvPYsF, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t.BfFpW1)],
    }),
    h2 = (0, d.E2)(c.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = E.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, h.cf)([hk.default], () =>
                    hk.default.getGlobalEnabledStatus(),
                ),
                l = !(0, hK.supportsOutOfProcess)(),
                s = (0, h.yK)([iq.Ay], () => iq.Ay.getGamesSeen(!0)).filter((e) => !(0, Az.n1)(e)),
                r = (0, iW.A)(s.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                hD.A.setEnabled(i, e);
                let l = iq.Ay.getCurrentGameForAnalytics()?.id ?? null;
                (0, hM.Q3)(e, hM.OverlayToggledClientSettingType.OOP, l),
                    t && hz(hM.OverlayToggledClientSettingType.OOP, l);
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                hR.Ay.toggleOverlay(t, e, i);
            }
            let u = E.useMemo(
                () => (hJ.O ? (l ? R.intl.string(R.t.C7bLTQ) : R.intl.string(R.t.ndgADE)) : R.intl.string(R.t.m7X4az)),
                [l],
            );
            return 0 === s.length
                ? (0, A.jsx)(hj, {
                      title: R.intl.string(R.t["7BlVIs"]),
                      description: u,
                      "aria-label": R.intl.string(R.t["7BlVIs"]),
                      className: hy.dA,
                      action: (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(tJ.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                              hJ.O && (0, A.jsx)("div", { className: hy.Kz }),
                          ],
                      }),
                  })
                : (0, A.jsxs)(hq, {
                      onExpand: t,
                      className: e ? hy.tx : void 0,
                      title: R.intl.string(R.t["7BlVIs"]),
                      description: u,
                      "aria-label": R.intl.string(R.t["7BlVIs"]),
                      action: (0, A.jsx)(nn.D, {
                          onClick: (e) => hv(e),
                          children: (0, A.jsx)(tJ.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, A.jsx)("div", {
                              className: hy.SC,
                              children: (0, A.jsx)(H.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: R.intl.string(R.t.FzoWRo),
                              }),
                          }),
                          (0, A.jsx)(x.Ip, {
                              className: hy.XG,
                              children: s.map((e, t) =>
                                  (0, A.jsx)(
                                      h0,
                                      {
                                          rawGame: e,
                                          clientSettingType: hM.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: l,
                                          getEnabledFromStatus: (e) => {
                                              let { enabledOOP: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: R.intl.format(R.t.nByTd3, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t["7BlVIs"])],
    }),
    h3 = (0, d.zZ)(c.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => R.intl.string(R.t["/dp6yY"]),
        buildLayout: () => [hQ, h2, h1, hO],
    }),
    h6 = (0, d.zD)(c.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, h.bG)([hf.default], () => !hf.default.disableClickableRegions),
        setValue: (e) => {
            hD.A.setDisableClickableRegions(!e);
        },
        useTitle: () => R.intl.string(R.t["+eFXxq"]),
        useSubtitle: () => R.intl.string(R.t.kivMAp),
    }),
    h5 = (0, d.E2)(c.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, h.bG)([lG.Ay], () => lG.Ay.getOverlayKeybind()),
                t = !(0, hK.supportsLegacy)(),
                n = !(0, hK.supportsOutOfProcess)(),
                [i, l] = (0, h.yK)([iq.Ay], () => [iq.Ay.canShowAdminWarning, iq.Ay.getVisibleGame()], []),
                s = (0, i1.NP)(),
                r = null != l && l.elevated && i && !s,
                a = !(0, lG.DV)(e?.shortcut ?? []);
            return (0, A.jsx)("div", {
                className: hy.hc,
                children: (0, A.jsxs)("div", {
                    className: hy.eH,
                    children: [
                        (0, A.jsxs)("div", {
                            className: hy.Bu,
                            children: [
                                (0, A.jsx)(H.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: R.intl.string(R.t.VsAZcC),
                                }),
                                r &&
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: hy.y7,
                                        children: R.intl.string(R.t.NsowVa),
                                    }),
                                a &&
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: hy.y7,
                                        children: R.intl.string(R.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, A.jsx)("div", {
                            className: hy.IH,
                            children: (0, A.jsx)(li.A, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    ta()(null != e, "Keybind should never be undefined"),
                                        iz.A.setKeybind({ ...e, shortcut: t });
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.VsAZcC)],
    });
var h4 = n(515183),
    h8 = n(682763);
let h7 = (0, d.zD)(c.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = iJ();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = iJ();
            return null != e && (0, h4.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = iJ(),
                n = t?.id,
                i = (0, h.bG)([hp.A], () => hp.A.isLimitedInteractionOverrideEnabled(n)),
                l = null != e && (0, h4.qJ)(e.pid);
            return i || l;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                l,
                { runningGameApplication: s } =
                    ((t = iZ.A.getStreamerActiveStreamMetadata()),
                    (l = iQ(
                        t,
                        (i =
                            null != (n = iq.Ay.getVisibleGame())
                                ? iq.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: iK.A.getApplication(l) ?? void 0 });
            null != s && (0, h8.x8)(s.id, e);
        },
        useTitle: () => R.intl.string(R.t.wgVQND),
        useSubtitle: () => R.intl.string(R.t["5SsyF5"]),
    }),
    h9 = (0, d.zZ)(c.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [h5, h7, h6] });
var Se = n(93465);
let St = [
    {
        title: R.t.eVE4LX,
        description: R.t["72WNqk"],
        disabledSetting: Se.M.TEXT_CHAT,
        key: c.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: R.t.oifnSh,
        description: R.t.bgU5r0,
        disabledSetting: Se.M.WELCOME_GENERAL,
        key: c.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: R.t.hqsZJW,
        description: R.t.kHjdqc,
        disabledSetting: Se.M.GO_LIVE_NUDGE,
        key: c.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: R.t.sop3rn,
        description: R.t.pjgffc,
        disabledSetting: Se.M.GAME_ACTIVITY,
        key: c.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: R.t["2QVhbb"],
        description: R.t.wQ4ilB,
        disabledSetting: Se.M.NOW_PLAYING,
        key: c.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: R.t.giM9fA,
        description: R.t.EhAfWj,
        disabledSetting: Se.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: c.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, nS.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, h.bG)([hp.A], () => hp.A.isNotificationDisabledBySetting(Se.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function Sn(e) {
    return (0, d.zD)(e.key, {
        useTitle: () => R.intl.string(e.title),
        useSubtitle: () => R.intl.string(e.description),
        useValue: () => !(0, h.bG)([hp.A], () => hp.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            hD.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let Si = (0, d.FW)(c.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => St.map(Sn),
    }),
    Sl = (0, d.zZ)(c.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.xOE5bA),
        buildLayout: () => [Si],
    }),
    Ss = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => R.intl.string(R.t.dnvZSg),
        useValue: () => (0, h.bG)([hf.default], () => hf.default.getAvatarSizeMode()),
        setValue: (e) => {
            hD.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: R.intl.string(R.t.YcOxtr), value: S.OSZ.LARGE },
            { id: "small", label: R.intl.string(R.t.BKIKqx), value: S.OSZ.SMALL },
        ],
    }),
    Sr = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => R.intl.string(R.t.J0dpcB),
        useValue: () => (0, h.bG)([hf.default], () => hf.default.getDisplayNameMode()),
        setValue: (e) => {
            hD.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: R.intl.string(R.t.nBmDrT), value: S.pwA.ALWAYS },
            { id: "speaking", label: R.intl.string(R.t["2OvIZY"]), value: S.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: R.intl.string(R.t.ekjlPL), value: S.pwA.NEVER },
        ],
    }),
    Sa = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => R.intl.string(R.t.swsWWC),
        useValue: () => (0, h.bG)([hf.default], () => hf.default.getDisplayUserMode()),
        setValue: (e) => {
            hD.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: R.intl.string(R.t.nBmDrT), value: S.f5z.ALWAYS },
            { id: "speaking", label: R.intl.string(R.t["2OvIZY"]), value: S.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var So = n(391973),
    Su = n(489277),
    Sd = n(897720),
    Sc = n(38502);
function Sg() {
    let e = Su.A.getWidgetByType(S.uss.VOICE_V3);
    if (null == e) return null;
    let t = Sc.A.getWidget(e.id);
    return null != t && (0, Sd.ZO)(t) ? t : null;
}
n(392164);
let Sm = (0, d.sN)(c.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => R.intl.string(R.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? R.intl.string(R.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = Sg();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? R.intl.string(R.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = Sg();
        null != t &&
            (e < 1
                ? (0, So.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, So.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var SA = n(450740),
    SE = n(968898),
    Sh = n(889227),
    SS = n(288737);
function ST(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new SS.A({
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
        user: new Sh.A({ id: l, username: e }),
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
let Sp = (0, d.E2)(c.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, h.bG)([sn.default], () => sn.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: l,
                } = (0, h.cf)([hf.default], () => ({
                    avatarSizeMode: hf.default.getAvatarSizeMode(),
                    displayNameMode: hf.default.getDisplayNameMode(),
                    displayUserMode: hf.default.getDisplayUserMode(),
                })),
                [s] = E.useState(() => [
                    ST(R.intl.string(R.t.C0ZDvo), !0, !1),
                    ST(R.intl.string(R.t.iOtj8E), !1, !1, !0),
                    ST(R.intl.string(R.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, h.bG)([Su.A, Sc.A], () => {
                    let e = Su.A.getWidgetByType(S.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = Sc.A.getWidget(e.id);
                    return null != t && (0, Sd.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = ST(t.username)).user = t), e) : null, ...s].filter(it.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, A.jsx)(EF.N, {
                    theme: S.NJ8.MIDNIGHT,
                    children: (e) =>
                        (0, A.jsxs)("div", {
                            className: is()(hy.Y5, e),
                            children: [
                                (0, A.jsx)("div", {
                                    className: hy.kJ,
                                    children: (0, A.jsx)(SA.DH, {
                                        id: "voice-widget",
                                        title: R.intl.string(R.t.KNJ6Vq),
                                        channel: (0, j.createChannelRecord)({
                                            id: "123",
                                            name: "Test Channel",
                                            type: S.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: u,
                                        displayNameMode: i,
                                        displayUserMode: l,
                                        avatarSizeMode: n,
                                        widget: S.uss.VOICE,
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
                                (0, A.jsxs)("div", {
                                    className: hy.R$,
                                    children: [
                                        (0, A.jsx)(SE.Pl, { children: R.intl.string(R.t.KNJ6Vq) }),
                                        (0, A.jsx)(SE.CS, {}),
                                        (0, A.jsx)(SE.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, A.jsx)("div", { className: hy.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    Sx = (0, d.zZ)(c.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => R.intl.string(R.t.r1TZfh),
        buildLayout: () => [Sp, Ss, Sr, Sa, Sm],
    });
var Sf = n(54761);
function SI() {
    let [e, t] = (0, cS.kn)([eu.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, z.Ay)(() => () => {
        t(cb.i.AUTO_DISMISS);
    }),
    e !== eu.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, A.jsxs)(A.Fragment, {
              children: [
                  (0, A.jsxs)("div", {
                      className: Sf.xC,
                      children: [
                          (0, A.jsx)("div", {
                              children: (0, A.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: R.intl.string(R.t.mdXZh1),
                                  className: Sf.tl,
                              }),
                          }),
                          (0, A.jsx)("div", {
                              children: (0, A.jsxs)("div", {
                                  className: Sf.vJ,
                                  children: [
                                      (0, A.jsx)(p.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: R.intl.string(R.t.jzjJQg),
                                      }),
                                      (0, A.jsx)(H.E, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: R.intl.string(R.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, A.jsx)("div", {
                              children: (0, A.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/2aa57f16c71171fc8e0edb8cca60735f1192195344d17fa667de6d3ca8163ba0.png",
                                  alt: R.intl.string(R.t.mdXZh1),
                                  className: Sf.lh,
                              }),
                          }),
                          (0, A.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: Sf.VV,
                              children: (0, A.jsx)(_.$, {
                                  variant: "primary",
                                  text: R.intl.string(R.t.Q26diF),
                                  onClick: () => void t(cb.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, A.jsx)(i4.c, { className: Sf.yF }),
              ],
          });
}
function S_() {
    let e = (0, h.bG)([te.A], () => te.A.enabled),
        t = (0, nS.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, A.jsxs)(A.Fragment, {
              children: [
                  (0, A.jsx)(iB.w, {
                      type: "warning",
                      children: R.intl.format(R.t.fuEX5B, {
                          onClick: function () {
                              return (0, nl.openUserSettings)(c.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                  }),
                  (0, A.jsx)(i4.c, { className: Sf.yF }),
              ],
          })
        : null;
}
let SN = (0, d.t_)(c.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                hN(),
                lG.Ay.addChangeListener(hN),
                hp.A.addChangeListener(hN),
                hf.default.addChangeListener(hN),
                hx.default.addChangeListener(hN),
                eQ.isPlatformEmbedded && (0, AY.a2)(),
                () => {
                    lG.Ay.removeChangeListener(hN),
                        hp.A.removeChangeListener(hN),
                        hf.default.removeChangeListener(hN),
                        hx.default.removeChangeListener(hN),
                        eQ.isPlatformEmbedded && (0, AY.e0)();
                }
            );
        },
        useTitle: () => R.intl.string(R.t["9cb1Uz"]),
        decoration: {
            type: m.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, A.jsxs)(A.Fragment, { children: [(0, A.jsx)(SI, {}), (0, A.jsx)(S_, {})] });
            },
        },
        buildLayout: () => [h3, h9, Sx, Sl],
    }),
    SC = (0, d.i4)(c.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["9cb1Uz"]),
        icon: hT.l,
        usePredicate: np.b_,
        buildLayout: () => [SN],
    });
var Sb = n(687966);
let Sy = (0, d.AK)(c.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.OYYY6q),
        destinationKey: c.X.ACTIVITY_PRIVACY_PANEL,
    }),
    Sv = (0, d.gN)(c.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [Sy] });
var Sj = n(227309),
    SO = n(1215),
    SL = n(39623),
    SR = n(952270),
    SD = n(138134),
    SP = n(29160),
    SG = n(552366),
    SU = n(938442);
let SM = (0, eQ.isWindows)();
function SV(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: l, subgames: s, isSubgame: r = !1, parentGame: a } = e;
    (0, hU.I)(t.id);
    let o = (0, h.cf)([iq.Ay, hH.A, ti.A, hG.A], () => (0, iq.xU)(t, iq.Ay, hH.A, ti.A, hG.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, h.cf)([iq.Ay], () => ({
            canToggleDetection: null == a || iq.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: iq.Ay.isDetectionEnabled(o),
        })),
        c = (0, h.bG)([iq.Ay], () => iq.Ay.getVisibleGame()),
        [g, m] = E.useState(!1),
        T = E.useMemo(
            () =>
                (0, Az.n1)(o)
                    ? r
                        ? o.gameName
                        : R.intl.formatToPlainString(R.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [p, x] = E.useState(T ?? "???"),
        f = is()(SU.tR, {
            [SG.LO]: !i,
            [SG.Rw]: i,
            [SG.FB]: null != o && i,
            [SG.xL]: r,
            [SG.fG]: null != s && s.length > 0,
        });
    function I() {
        null != s && s.length > 0 && d
            ? (0, lr.openModalLazy)(async () => {
                  let { Modal: e } = await n.e("304823").then(n.bind(n, 158954));
                  return (t) =>
                      (0, A.jsx)(e, {
                          ...t,
                          title: R.intl.formatToPlainString(R.t.PZ4fKc, { platform: T }),
                          subtitle: R.intl.formatToPlainString(R.t.ZIQbfb, { platform: T }),
                          actions: [
                              { text: R.intl.string(R.t["ETE/oC"]), onClick: () => t.onClose(), variant: "secondary" },
                              {
                                  text: R.intl.string(R.t.Fmjztz),
                                  onClick: () => {
                                      hR.Ay.toggleDetection(o), t.onClose();
                                  },
                                  variant: "primary",
                              },
                          ],
                      });
              })
            : hR.Ay.toggleDetection(o);
    }
    let _ = null != c && (0, iq.Es)(o) === (0, iq.Es)(c),
        N = (null != a && a.id === c?.id) || _ || (null != s && s.some((e) => e.id === c?.id));
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsxs)("div", {
                className: f,
                children: [
                    (0, A.jsxs)("div", {
                        className: is()(SG.$K, SU.Vd),
                        children: [
                            o.verified && !l
                                ? (0, A.jsxs)("div", {
                                      className: SG.HS,
                                      children: [
                                          (0, A.jsx)("div", { className: SG.mO, children: T }),
                                          (0, A.jsx)(le.m, {
                                              text: R.intl.string(R.t["4PJP5p"]),
                                              children: (0, A.jsx)(EU.A, {
                                                  className: SG.qf,
                                                  size: 18,
                                                  color: nQ.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, A.jsx)(EC.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: nQ.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, A.jsx)("input", {
                                      className: is()(SG.mO, SG.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: p,
                                      onBlur: function () {
                                          o.name !== p && hR.Ay.editName(o, p);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === lb.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => x(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: n, exePath: l } = o;
                                return (
                                    i || _
                                        ? (e = R.intl.string(R.t.VbV5dv))
                                        : null != n && "" !== n && (e = R.intl.format(R.t["gGeOE+"], { when: n })),
                                    (0, A.jsx)("div", {
                                        className: SG.GN,
                                        children: (0, A.jsx)(SP.A, {
                                            hoverText:
                                                null != l && "" !== l
                                                    ? ((t = l.replace(/^file:\/\//i, "")),
                                                      (0, eQ.isWindows)() && (t = t.toUpperCase()),
                                                      t)
                                                    : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    l || g
                        ? null
                        : (0, A.jsx)("div", {
                              className: is()(SU.tR, SU.oA, SU.LT, SG.E3),
                              children: (0, A.jsx)(le.m, {
                                  text: R.intl.string(R.t["y0B+lo"]),
                                  children: (0, A.jsx)(nn.D, {
                                      "aria-label": R.intl.string(R.t["y0B+lo"]),
                                      className: SG.ym,
                                      onClick: function () {
                                          if (g) return;
                                          let e = null != o.id ? hH.A.getDetectableGame(o.id) : null;
                                          tt.default.track(S.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, Az.n1)(o) ? o.gameName : o.name,
                                          }),
                                              m(!0),
                                              (0, lr.openModalLazy)(async () => {
                                                  let { default: t } = await Promise.all([
                                                      n.e("568035"),
                                                      n.e("627495"),
                                                  ]).then(n.bind(n, 651930));
                                                  return (n) =>
                                                      (0, A.jsx)(t, {
                                                          ...n,
                                                          detected: { name: o.name ?? "", gameId: e?.id ?? o.id },
                                                      });
                                              });
                                      },
                                      children: (0, A.jsx)(SD.FlagIcon, {
                                          size: "md",
                                          color: "currentColor",
                                          className: SG.Lj,
                                          colorClass: SG.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = o,
                            t =
                                e && u
                                    ? (0, A.jsx)(SL.EyeIcon, {
                                          size: "md",
                                          color: "currentColor",
                                          className: SG.Lj,
                                          colorClass: SG.GS,
                                      })
                                    : (0, A.jsx)(SR.EyeSlashIcon, {
                                          size: "md",
                                          color: "currentColor",
                                          className: u ? SG.$V : SG.zN,
                                          colorClass: SG.GS,
                                      });
                        return (0, A.jsx)("div", {
                            className: is()(SU.tR, SU.oA, SU.LT, SG.E3),
                            children: (0, A.jsx)(le.m, {
                                text: R.intl.string(R.t.QmitzM),
                                children: u
                                    ? (0, A.jsx)(nn.D, {
                                          "aria-label": R.intl.string(R.t.QmitzM),
                                          className: SG.ym,
                                          onClick: I,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!SM || null != a) return null;
                        let { overlay: e, overlayWarn: t } = o,
                            n = e
                                ? (0, A.jsx)(hL.k, {
                                      size: "md",
                                      color: "currentColor",
                                      className: SG.Lj,
                                      colorClass: SG.GS,
                                  })
                                : (0, A.jsx)(SO.n, {
                                      size: "md",
                                      color: "currentColor",
                                      className: SG.$V,
                                      colorClass: SG.GS,
                                  }),
                            i = t
                                ? (0, A.jsx)(le.m, {
                                      text: R.intl.string(R.t.Vfw2L5),
                                      children: (0, A.jsx)("i", { className: SG.kb }),
                                  })
                                : null;
                        return (0, A.jsxs)("div", {
                            className: is()(SU.tR, SU.oA, SU.LT, SG.E3),
                            children: [
                                i,
                                (0, A.jsx)(le.m, {
                                    text: R.intl.string(R.t["1+O+Tu"]),
                                    children: (0, A.jsx)(nn.D, {
                                        "aria-label": R.intl.string(R.t["1+O+Tu"]),
                                        className: SG.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void hR.Ay.toggleOverlay(o, t, t);
                                        },
                                        children: n,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (i && !l) || N
                        ? null
                        : (0, A.jsx)(mF.A, {
                              className: SG.LS,
                              onClick: function () {
                                  hR.Ay.deleteEntry(o),
                                      s?.forEach((e) => {
                                          hR.Ay.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != s &&
                s.length > 0 &&
                !i &&
                (0, A.jsx)("div", {
                    className: SG.AQ,
                    children: s.map((e, t) =>
                        (0, A.jsxs)(
                            E.Fragment,
                            {
                                children: [
                                    (0, A.jsx)(SV, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== s.length - 1 && (0, A.jsx)("div", { className: SG.PQ }),
                                ],
                            },
                            (0, iq.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function Sk() {
    let e = (0, h.bG)([nM.A], () => nM.A.theme);
    return (0, A.jsxs)(mV.pp, {
        theme: e,
        className: mK.eT,
        children: [
            (0, A.jsx)(mV.G8, { darkSrc: n(839628), lightSrc: n(446404), width: 430, height: 250 }),
            (0, A.jsx)(mV.SG, { children: R.intl.string(R.t["1yiJwn"]) }),
        ],
    });
}
function Sw() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = AK();
    return 0 === e.length
        ? (0, A.jsx)(Sk, {})
        : (0, A.jsx)(n$.n, {
              children: (0, A.jsx)("div", {
                  children: e.map((e) =>
                      (0, A.jsx)(
                          SV,
                          { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === Sj.a7 ? t : void 0 },
                          (0, iq.Es)(e),
                      ),
                  ),
              }),
          });
}
let SF = (0, d.E2)(c.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, A.jsx)(Sw, {}),
});
var SB = n(424994);
let Sz = (0, d.zZ)(c.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [SF, Sv],
    useTitle: () => R.intl.string(R.t.jCOdvx),
    useSubtitle: () => R.intl.format(R.t.KPA3m9, { igdbLink: SB.s8 }),
});
var SX = n(890497),
    SY = n(853270),
    SH = n(969426);
function SK(e) {
    let { onClose: t } = e,
        n = (0, h.bG)([iq.Ay], () => iq.Ay.getCandidateGames()),
        [i, l] = E.useState(null),
        s = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, A.jsxs)(r8.l, {
        className: is()(SY.H, SH.Y_),
        "aria-label": R.intl.string(R.t.GTCx0p),
        children: [
            (0, A.jsx)(SX.Z, {
                selectionMode: "single",
                placeholder: R.intl.string(R.t.XqMe3N),
                value: i,
                options: s,
                onSelectionChange: function (e) {
                    l(e);
                },
            }),
            (0, A.jsx)(i4.c, { className: is()(mK.Ot, mK.QB) }),
            (0, A.jsxs)("div", {
                className: is()(SY.o, SU.xM),
                children: [
                    (0, A.jsx)(Af.Q, { variant: "secondary", text: R.intl.string(R.t["ETE/oC"]), onClick: t }),
                    (0, A.jsx)(_.$, {
                        variant: "primary",
                        text: R.intl.string(R.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (hR.Ay.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var SW = n(475007);
let SZ = (0, d.E2)(c.X.REGISTERED_GAMES_ADD_GAME_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.GTCx0p)],
    Component: function () {
        let e = E.useRef(null);
        return (0, A.jsxs)("div", {
            className: is()(SW.a, mK.Gf),
            children: [
                (0, A.jsx)("span", { children: R.intl.string(R.t.xwhoqM) }),
                (0, A.jsx)(r4.Y, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, A.jsx)(SK, { onClose: t });
                    },
                    align: "center",
                    position: "bottom",
                    children: (t) =>
                        (0, A.jsx)(Af.Q, {
                            ...t,
                            buttonRef: e,
                            variant: "primary",
                            textVariant: "text-sm/medium",
                            text: R.intl.string(R.t.GjgdXe),
                        }),
                }),
            ],
        });
    },
});
function Sq() {
    return (0, A.jsx)("div", {
        className: is()(SU.tR, SG.eS, SG.Rw),
        children: (0, A.jsxs)("div", {
            className: is()(SG.$K, SU.Vd),
            children: [
                (0, A.jsx)("div", { className: SG.mO, children: R.intl.string(R.t.H68X9x) }),
                (0, A.jsx)("div", { className: SG.GN, children: R.intl.string(R.t.T5Ilmw) }),
            ],
        }),
    });
}
let SQ = (0, d.E2)(c.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = AK(),
                n = (0, h.bG)([iq.Ay], () => iq.Ay.getVisibleGame());
            return null != n
                ? (0, A.jsx)(
                      SV,
                      {
                          rawGame: n,
                          isOverride: t.has(n.exePath),
                          nowPlaying: !0,
                          subgames: n.id === Sj.a7 ? e : void 0,
                      },
                      (0, iq.Es)(n),
                  )
                : (0, A.jsx)(Sq, {});
        },
    }),
    SJ = (0, d.zZ)(c.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => R.intl.string(R.t["MY9/Oe"]),
        buildLayout: () => [SQ, SZ],
    }),
    S$ = (0, d.t_)(c.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => R.intl.string(R.t.AVDyEj),
        buildLayout: () => [SJ, Sz],
    }),
    S0 = (0, d.i4)(c.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.AVDyEj),
        icon: Sb.GameControllerIcon,
        usePredicate: np.Pi,
        buildLayout: () => [S$],
    }),
    S1 = (0, d.WI)(c.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => R.intl.string(R.t.BA9200),
        buildLayout: () => [S0, Ex, SC, hS],
    });
var S2 = n(631670),
    S3 = n(619499),
    S6 = n(836602),
    S5 = n(591179),
    S4 = n(854627),
    S8 = n(402860),
    S7 = n(761508),
    S9 = n(159001),
    Te = n(344346),
    Tt = n(919395),
    Tn = n(68750);
function Ti(e) {
    let { title: t, children: n } = e;
    return (0, A.jsxs)("div", {
        children: [(0, A.jsx)(p.D, { variant: "text-md/medium", className: Tn.Vf, children: t }), n],
    });
}
function Tl(e) {
    let {
        children: t,
        className: n,
        layoutClassName: i,
        profilePreview: l,
        profilePreviewTitle: s,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, A.jsx)("div", {
        className: is()(Tn.UA, n),
        children: (0, A.jsxs)("div", {
            className: is()(Tn.yt, i),
            children: [
                (0, A.jsx)("div", {
                    className: is()(Tn.Fp, a && Tn.Oz),
                    children: (0, A.jsxs)(A.Fragment, {
                        children: [
                            (0, A.jsx)(Ti, { title: s ?? R.intl.string(R.t.Zb06yP), children: l }),
                            null != r ? (0, A.jsx)(Ti, { title: R.intl.string(R.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, A.jsx)("div", { className: Tn.oB, children: t }),
            ],
        }),
    });
}
var Ts = n(986687),
    Tr = n(101058),
    Ta = n(321191),
    To = n(696451),
    Tu = n(590941);
function Td() {
    return (0, A.jsxs)("div", {
        className: Tu.p$,
        children: [
            (0, A.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: Tu.Sl }),
            (0, A.jsx)(p.D, { className: Tu.h8, variant: "heading-lg/extrabold", children: R.intl.string(R.t.Z1OZCV) }),
            (0, A.jsx)(H.E, { className: Tu.h8, variant: "text-md/normal", children: R.intl.string(R.t.ZSt4Tt) }),
            (0, A.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: Tu.h8,
                children: (0, A.jsx)(_.$, {
                    variant: "primary",
                    text: R.intl.string(R.t.jQ3pqt),
                    onClick: function () {
                        (0, t$.pX)(S.BVt.GUILD_DISCOVERY), (0, tM.default)();
                    },
                }),
            }),
        ],
    });
}
var Tc = n(81400),
    Tg = n(450232),
    Tm = n(252732),
    TA = n(355622),
    TE = n(408018),
    Th = n(273754),
    TS = n(290386),
    TT = n(486264);
let Tp = (0, tw.Ld)(),
    Tx = (0, j.createChannelRecord)({ id: "1", type: S.rbe.DM }),
    Tf = (0, tw.Ld)();
function TI(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: l,
            placeholder: s,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, TS.U)({ location: "profile_customization_about_me" }),
        [u, d] = E.useState(l ?? r),
        [c, g] = E.useState((0, TE.x7)(u)),
        m = E.useRef(r),
        h = E.useRef(!1);
    return (
        E.useEffect(() => {
            if (m.current !== r) {
                let e = (0, TE.x7)(r);
                d(r), g(e);
            }
            m.current = r;
        }, [r]),
        E.useEffect(() => {
            void 0 !== l || u === r || h.current || (d(r), g((0, TE.x7)(r)));
        }, [l, r, u]),
        (0, A.jsxs)(r1.A, {
            title: t,
            titleId: Tp,
            description: R.intl.string(R.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, A.jsx)(Th.Ay, {
                    "aria-describedby": Tf,
                    "aria-labelledby": Tp,
                    className: TT.i,
                    innerClassName: TT.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: s,
                    channel: Tx,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: nl.USER_SETTINGS_MODAL_KEY,
                    type: TA.oU.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        h.current = !1;
                    },
                    onFocus: () => {
                        h.current = !0;
                    },
                    focused: h.current,
                    onSubmit: function () {
                        return new Promise((e) => {
                            e({ shouldClear: !1, shouldRefocus: !0 });
                        });
                    },
                }),
                (0, A.jsx)(lt.A, { id: Tf, children: R.intl.format(R.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var T_ = n(930861),
    TN = n(821956),
    TC = n(562819),
    Tb = n(84540),
    Ty = n(467690);
function Tv(e) {
    let { user: t, guild: n, className: i, sectionTitle: l, forcedDivider: s = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, eP.Ay)(),
        o = (0, Tt.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, Tt.CP)(n?.id),
        c = r ? T_.wL : sV.$n;
    return (0, A.jsx)(r1.A, {
        className: i,
        forcedDivider: s,
        hasBackground: !0,
        title: l,
        errors: d,
        children: (0, A.jsxs)("div", {
            className: Ty.NC,
            children: [
                (0, A.jsx)(c, {
                    size: sV.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TC.L)({ analyticsLocations: a, guild: n });
                    },
                    className: is()({ [Ty.yj]: r }),
                    children: R.intl.string(R.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Ty.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, TN.uZ)(t, n) ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.OrokWm),
                            onClick: function () {
                                (0, Tb.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Tj = n(339984),
    TO = n(942132);
let TL = [{ name: "gif", extensions: ["gif"] }];
function TR(e) {
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
        { newestAnalyticsLocation: g } = (0, eP.Ay)(),
        m = c ? T_.wL : sV.$n,
        h = E.useCallback(() => {
            (0, Tm.XD)({
                uploadType: Tj.HL.AVATAR,
                analyticsSource: g,
                filters: u ? TL : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, A.jsx)(r1.A, {
        className: a,
        title: l,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, A.jsxs)("div", {
            className: TO.NC,
            children: [
                (0, A.jsx)(m, {
                    className: is()({ [TO.yj]: c }),
                    size: sV.$n.Sizes.SMALL,
                    onClick: h,
                    children: s ?? R.intl.string(R.t["4OynCD"]),
                }),
                t &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TO.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != r ? R.intl.string(R.t.TDjKDm) : R.intl.string(R.t.twB3fz),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var TD = n(248778),
    TP = n(810188);
function TG(e) {
    let { user: t, guildId: n, className: i } = e,
        l = r9.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: s } = (0, eP.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, Tt.B0)(t, n),
        d = (0, TD.ux)("DisplayNameStylesSection"),
        [c, g] = (0, cS.kn)(d ? [eu.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eu.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        h = (0, E.useCallback)(() => {
            g(cb.i.TAKE_ACTION),
                tt.default.track(S.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eG.L)({ analyticsLocations: s, guildId: n });
        }, [s, n, g]),
        T = (0, E.useCallback)(() => {
            (0, Tb.p)({ displayNameStyles: null }), tt.default.track(S.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        p = (0, E.useCallback)(() => {
            (0, Tb.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        x = void 0 !== o ? o : null != n ? a : r;
    return (0, A.jsx)(r1.A, {
        title: R.intl.string(eU.default["86GtGH"]),
        titleBadge: m ? (0, A.jsx)(tn.Lp, { text: R.intl.string(R.t.y2b7CA), className: TP.A }) : void 0,
        className: i,
        showPremiumIcon: l,
        errors: u,
        children: (0, A.jsxs)("div", {
            className: TP.N,
            children: [
                (0, A.jsx)(_.$, { variant: "primary", size: "sm", text: R.intl.string(eU.default.vJqrIg), onClick: h }),
                null == n &&
                    null != x &&
                    (0, A.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: R.intl.string(eU.default.ymq8WQ),
                        onClick: T,
                    }),
                null != n &&
                    null != x &&
                    (0, A.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: R.intl.string(eU.default["j/KRxc"]),
                        onClick: p,
                    }),
            ],
        }),
    });
}
var TU = n(637193),
    TM = n(622410);
function TV(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: l } = (0, eP.Ay)(),
        s = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, Tt.rv)(t, n?.id),
        d = E.useCallback(() => {
            (0, TU.p)({ analyticsLocations: l, guildId: n?.id });
        }, [l, n?.id]),
        c = E.useCallback(() => {
            (0, Tb.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, A.jsx)(r1.A, {
        title: R.intl.string(R.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, A.jsxs)("div", {
            className: TM.u,
            children: [
                (0, A.jsx)(_.$, { variant: "primary", size: "sm", text: R.intl.string(R.t.BwdeM1), onClick: d }),
                (void 0 === o ? (s ? a : r) != null : null != o) &&
                    (0, A.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: s ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var Tk = n(88524);
function Tw(e) {
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
        { newestAnalyticsLocation: c } = (0, eP.Ay)(),
        g = d ? T_.wL : sV.$n;
    return (0, A.jsx)(r1.A, {
        className: s,
        title: R.intl.string(R.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, A.jsxs)("div", {
            className: Tk.NC,
            children: [
                (0, A.jsx)(g, {
                    className: is()({ [Tk.yj]: d }),
                    size: sV.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, Tm.XD)({ uploadType: Tj.HL.BANNER, analyticsSource: c, guildId: l, isTryItOut: o }),
                    children: R.intl.string(R.t.N0bC3P),
                }),
                t &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tk.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != l ? R.intl.string(R.t.jHlJNS) : R.intl.string(R.t.tT9n7D),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var TF = n(617061),
    TB = n(625613);
function Tz(e) {
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
        { analyticsLocations: u } = (0, eP.Ay)(),
        d = r9.Ay.canUsePremiumProfileCustomization(t),
        c = (0, Tt.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, Tt.nZ)(n?.id);
    E.useEffect(() => {
        d &&
            (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tX.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tB.uq)(tX.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let h = a ? T_.wL : sV.$n;
    return (0, A.jsx)(r1.A, {
        forcedDivider: r,
        borderType: ud.i.PREMIUM,
        hasBackground: !0,
        title: s,
        showBorder: o,
        errors: m,
        className: l,
        children: (0, A.jsxs)("div", {
            className: TB.NC,
            children: [
                (0, A.jsx)(h, {
                    size: sV.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TF.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: is()({ [TB.yj]: a }),
                    children: R.intl.string(R.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TB.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.uMuafO),
                            onClick: function () {
                                (0, Tb.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TX = n(13875),
    TY = n(515727),
    TH = n(594401);
function TK(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: l } = (0, eP.Ay)(),
        s = (0, TX.sk)("ProfileFrameSection"),
        r = (0, Tt.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: a, errors: o } = (0, Tt.Tu)(n?.id),
        [u, d] = (0, cS.kn)([eu.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        c = u === eu.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return s
        ? (0, A.jsx)(r1.A, {
              showBorder: c,
              borderType: c ? ud.i.NEW_UPSELL : ud.i.PREMIUM,
              hasBackground: c,
              title: i,
              titleBadge: c ? (0, A.jsx)(tn.Lp, { text: R.intl.string(R.t.y2b7CA), className: TH.Ad }) : void 0,
              description: c ? R.intl.string(R.t.yMoMAt) : void 0,
              errors: o,
              children: (0, A.jsxs)("div", {
                  className: TH.NC,
                  children: [
                      (0, A.jsx)(_.$, {
                          variant: "primary",
                          size: "sm",
                          text: R.intl.string(R.t["9/hmle"]),
                          onClick: function () {
                              (0, TY.w)({ analyticsLocations: l, guild: n }), d(cb.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, A.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: TH.DT,
                              children: (0, A.jsx)(_.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != n ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.nQBruk),
                                  onClick: function () {
                                      (0, Tb.p)({ guildId: n?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var TW = n(602853),
    TZ = n(654107),
    Tq = n(999291),
    TQ = n(101928),
    TJ = n(819169),
    T$ = n(317097),
    T0 = n(508274),
    T1 = n(379012);
function T2(e) {
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
        d = E.useRef(null),
        c = (0, TW.r)(nQ.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = nQ.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, Tm.sN)(i),
        h = (0, T$.Hl)(i),
        T = h === c ? g : h,
        p = m ? nQ.A.unsafe_rawColors.WHITE.css : nQ.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, TJ.A)(a),
        f = (0, TJ.A)(o),
        [I, _] = E.useState((0, a7.A)());
    return (
        E.useEffect(() => {
            (x !== a || f !== o) && _((0, a7.A)());
        }, [o, a, f, x]),
        (0, A.jsx)(r4.Y, {
            targetElementRef: d,
            positionKey: I,
            renderPopout: (e) =>
                (0, A.jsx)(T0.VN, {
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
                return (0, A.jsxs)("div", {
                    ref: d,
                    className: is()(T1.oP, { [T1.r9]: s }),
                    children: [
                        (0, A.jsx)(nn.D, {
                            ...n,
                            tabIndex: s ? -1 : 0,
                            onClick: s ? S.tEg : t,
                            style: { backgroundColor: h, borderColor: T },
                            className: T1.nf,
                            "aria-label": R.intl.string(R.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, A.jsx)(r7.PencilIcon, {
                                size: "custom",
                                className: T1.BW,
                                width: 14,
                                height: 14,
                                color: p,
                            }),
                        }),
                        r,
                    ],
                });
            },
        })
    );
}
var T3 = n(190377);
function T6(e) {
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
        c = (0, Tq.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, TQ.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        E = r9.Ay.canUsePremiumProfileCustomization(t),
        h = null != n ? n : t.getAvatarURL(r, 80),
        S = (0, TW.r)(nQ.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, TZ.rh)(h, S, !1);
    return null == g || null == m
        ? null
        : (0, A.jsx)(r1.A, {
              title: R.intl.string(R.t.DMeO2X),
              disabled: !E && !s,
              className: is()(T3.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, A.jsxs)("div", {
                  className: T3.hd,
                  children: [
                      (0, A.jsx)("div", {
                          className: T3.YX,
                          children: (0, A.jsx)(T2, {
                              onChange: (e) => l([e, m]),
                              color: g,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, A.jsx)(H.E, {
                                  className: T3.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: R.intl.string(R.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, A.jsx)("div", {
                          className: T3.YX,
                          children: (0, A.jsx)(T2, {
                              onChange: (e) => l([g, e]),
                              color: m,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, A.jsx)(H.E, {
                                  className: T3.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: R.intl.string(R.t["8elvy6"]),
                              }),
                          }),
                      }),
                      u &&
                          null != r &&
                          (0, A.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: T3.WA,
                              children: (0, A.jsx)(_.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: R.intl.string(R.t["L+GmoR"]),
                                  onClick: () => l([null, null]),
                              }),
                          }),
                  ],
              }),
          });
}
function T5(e) {
    let {
            sectionTitle: t,
            errors: n,
            onPronounsChange: i,
            pendingPronouns: l,
            placeholder: s,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, tw.GV)();
    return (0, A.jsx)(r1.A, {
        title: t,
        titleId: o,
        errors: n,
        disabled: a,
        children: (0, A.jsx)(la.k, {
            "aria-labelledby": o,
            placeholder: s ?? R.intl.string(R.t.NPEUUu),
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
var T4 = n(427262),
    T8 = n(684732),
    T7 = n(576705),
    T9 = n(931175);
function pe(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: l, user: s, guild: r } = e,
        a = (0, h.bG)([T7.A], () => T7.A.can(S.xBc.CHANGE_NICKNAME, r) || T7.A.can(S.xBc.MANAGE_NICKNAMES, r)),
        o = (0, Ek.L)(tX.PremiumTypes.TIER_2);
    return (0, A.jsxs)(r1.A, {
        title: R.intl.string(R.t.me1lRk),
        errors: t,
        children: [
            (0, A.jsx)(la.k, {
                value: n ?? i ?? "",
                placeholder: l,
                maxLength: S.d0r,
                onChange: function (e) {
                    (0, Tb.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : R.intl.string(R.t.gzjxQi),
            }),
            o && (0, A.jsx)(TG, { user: s, guildId: r.id, className: T9.F }),
        ],
    });
}
var pt = n(233454);
let pn = "/assets/b25da78aa7949feb.png";
function pi(e) {
    let { user: t, showOverlay: n, children: i } = e,
        l = (0, uP.Ay)(),
        { analyticsLocations: s } = (0, eP.Ay)(tL.A.PREMIUM_UPSELL_OVERLAY);
    return (E.useEffect(() => {
        n &&
            (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: s,
                type: tX.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            }),
            (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, s, () =>
                (0, tB.uq)(tX.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE),
            ));
    }, [n, s]),
    n)
        ? (0, A.jsxs)("div", {
              className: pt.ry,
              children: [
                  (0, A.jsx)("div", { children: i }),
                  (0, A.jsxs)("div", {
                      className: pt.Wc,
                      children: [
                          (0, A.jsx)("img", {
                              className: pt.Tn,
                              alt: R.intl.string(R.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case S.NJ8.DARK:
                                      case S.NJ8.DARKER:
                                      case S.NJ8.MIDNIGHT:
                                          return pn;
                                      case S.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return pn;
                                  }
                              })(l),
                          }),
                          (0, A.jsxs)("div", {
                              className: pt._9,
                              children: [
                                  (0, A.jsx)(H.E, {
                                      variant: "text-lg/semibold",
                                      color: "text-overlay-light",
                                      children: R.intl.string(R.t.dMaDFX),
                                  }),
                                  (0, A.jsx)(H.E, {
                                      variant: "text-sm/normal",
                                      color: "text-overlay-light",
                                      children: R.intl.string(R.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, A.jsx)(uu.A, {
                              size: sV.$n.Sizes.LARGE,
                              color: sV.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: r9.Ay.isPremium(t)
                                      ? R.intl.string(R.t.AfRWI8)
                                      : R.intl.string(R.t.nkdUym),
                              },
                              subscriptionTier: tX.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : i;
}
var pl = n(203164);
function ps() {
    let e = (0, h.bG)([sn.default], () => {
            let e = sn.default.getCurrentUser();
            return ta()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        t = (0, Ek.L)(tX.PremiumTypes.TIER_2),
        n = (0, h.bG)([S6.A, lE.A], () => lE.A.getGuild(S6.A.selectedGuildId));
    ta()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: l,
            pendingBanner: s,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, h.cf)([S6.A], () => ({ ...S6.A.getPendingChanges(n.id), errors: S6.A.getErrors(n.id) })),
        d = (0, Tr.V7)({ userId: e.id, image: i }),
        c = (0, Tc.EC)(n.id),
        g = (0, h.bG)([To.Ay], () => (null == n.id ? null : To.Ay.getMember(n.id, e.id))),
        m = (0, h.bG)([Ta.A], () => Ta.A.getGuildMemberProfile(e.id, n.id)),
        E = r9.Ay.canUsePremiumProfileCustomization(e),
        S = (0, Tt.z5)(i, g?.avatar),
        T = (0, Tt.Ac)(s, m?.banner),
        p = (0, T8.l)(o, m?.themeColors),
        x = m?.bio ?? "",
        f = m?.pronouns ?? "";
    return (0, A.jsxs)("div", {
        className: pl.Q,
        children: [
            (0, A.jsx)(
                pe,
                {
                    errors: u?.nick ?? c?.nick,
                    username: T4.Ay.getName(e),
                    pendingNick: l,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, A.jsx)(
                T5,
                {
                    sectionTitle: R.intl.string(R.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, Tb.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, A.jsxs)(pi, {
                user: e,
                showOverlay: !E,
                children: [
                    (0, A.jsx)(
                        TR,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.lqaIxI), (0, A.jsx)(Tg.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, Tm.rM)(e, g?.avatar, (e) => (0, Tb.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !E,
                        },
                        "avatar",
                    ),
                    (0, A.jsx)(
                        Tv,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t["7v0T9P"]), (0, A.jsx)(Tg.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, A.jsx)(TG, { user: e, guildId: n.id }),
                    (0, A.jsx)(
                        TV,
                        { user: e, guild: n, titleIcon: (0, A.jsx)(Tg.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, A.jsx)(
                        Tz,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.wR5wOo), (0, A.jsx)(Tg.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, A.jsx)(
                        TK,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.GWrZOd), (0, A.jsx)(Tg.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, A.jsx)(
                        Tw,
                        {
                            showRemoveBannerButton: T,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, Tm.rM)(e, m?.banner, (e) => (0, Tb.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !E,
                        },
                        "banner",
                    ),
                    (0, A.jsx)(T6, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, Tb.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: p,
                    }),
                    (0, A.jsx)(
                        TI,
                        {
                            placeholder: R.intl.string(R.t["/7NKgv"]),
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.ZzAR2Y), (0, A.jsx)(Tg.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, Tb.p)({ guildId: n.id, bio: e }),
                            errors: u?.bio ?? c?.bio,
                            pendingBio: r,
                            currentBio: x,
                            disabled: !E,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var pr = n(832131);
function pa(e) {
    (0, lr.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, A.jsx)(t, { source: { ...e, page: S.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function po(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, eP.Ay)(tL.A.USER_SETTINGS_GUILD_PROFILE),
        l = (0, h.bG)([sn.default], () => {
            let e = sn.default.getCurrentUser();
            return ta()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        s = (0, h.bG)([To.Ay], () => (null != t ? To.Ay.getMember(t.id, l.id) : null)),
        r = (0, h.bG)([Ta.A], () => !Ta.A.isFetchingProfile(l.id, t?.id)),
        a = (0, h.bG)([te.A], () => te.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, h.cf)([S6.A], () => S6.A.getPendingChanges(t?.id)),
        c = (0, Tr.V7)({ userId: l.id, image: o }),
        g = (0, Tt.lw)({
            pendingValue: u,
            userValue: l?.collectibles?.nameplate,
            guildValue: s?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, Tt.B0)(l, t?.id);
    return (E.useEffect(() => () => e5.h.wait(S9.IM), []), a)
        ? (0, A.jsx)(a5.A, {})
        : r
          ? (0, A.jsxs)(eP.f5, {
                value: i,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-sm/normal",
                        children: R.intl.format(R.t["/PTB2E"], {
                            helpCenterLink: ex.A.getArticleURL(S.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(r0.A, { guildId: t.id, onChange: n }),
                                  (0, A.jsx)(Tl, {
                                      profilePreviewTitle: (0, A.jsx)(p.D, {
                                          variant: "heading-md/medium",
                                          className: pr.YV,
                                          children: R.intl.formatToPlainString(R.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, A.jsx)(Ts.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guild: t,
                                          canUsePremiumCustomization: r9.Ay.canUsePremiumProfileCustomization(l),
                                          onUpsellClick: pa,
                                          containerClassName: pr.ti,
                                      }),
                                      nameplatePreview: (0, A.jsx)(Te.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? pr.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, A.jsx)(ps, {}),
                                  }),
                              ],
                          })
                        : (0, A.jsx)(Td, {}),
                ],
            })
          : (0, A.jsx)(a8.y, {});
}
var pu = n(903209),
    pd = n(641130);
function pc(e) {
    let { children: t, notice: n } = e;
    return (0, A.jsxs)("div", { className: pd.r, children: [n, (0, A.jsx)("div", { children: t })] });
}
var pg = n(269115),
    pm = n(823092),
    pA = n(839534),
    pE = n(379197),
    ph = n(488430),
    pS = n(457421),
    pT = n(940622),
    pp = n(25176),
    px = n(757993);
let pf = function () {
    let e,
        t,
        n,
        i,
        { analyticsLocations: l } = (0, eP.Ay)(tL.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        s = E.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, pT.mb)(pp.RN.UPSELL_BANNER)),
        (t = (0, pT.mb)(pp.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, h.bG)([pS.A], () => pS.A.getMarketingBySurface(pE.R.EDIT_PROFILE_SETTINGS))),
        (i = E.useMemo(
            () =>
                null != n
                    ? n
                    : {
                          asset: "/assets/30e2c68819facd98.png",
                          popoutAsset: "/assets/c6d55507d7473057.png",
                          title: R.intl.string(R.t.QZVVBh),
                          body: R.intl.string(R.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [n],
        )),
        E.useMemo(
            () => ({ ...i, type: ph.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, pm.L_)();
    return (
        E.useEffect(() => {
            tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tX.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: l,
                version: d,
            }),
                (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, l, () => (0, tB.uq)(tX.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL));
        }, [l, d]),
        (0, A.jsxs)("div", {
            ref: s,
            className: px.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, A.jsx)("div", {
                    className: px.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, A.jsx)("img", { src: a, className: px.Qw, alt: "" }),
                }),
                (0, A.jsxs)("div", {
                    className: px.Em,
                    children: [
                        (0, A.jsx)(p.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: px.DD,
                            children: o,
                        }),
                        (0, A.jsx)(H.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, A.jsx)(_.$, {
                    onClick: function () {
                        g(() =>
                            (0, pA.Cz)({
                                analyticsLocations: l,
                                analyticsSource: tL.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                            }),
                        );
                    },
                    variant: "overlay-primary",
                    text: R.intl.string(R.t.fYfGgK),
                }),
            ],
        })
    );
};
var pI = n(451909),
    p_ = n(202639),
    pN = n(285373),
    pC = n(835071),
    pb = n(724651),
    py = n(732280),
    pv = n(590180),
    pj = n(898461),
    pO = n(469054),
    pL = n(601298),
    pR = n(207803),
    pD = n(461797);
let pP = Object.keys(pD.jB);
function pG(e) {
    let t = null == e ? pP : pP.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var pU = n(130490),
    pM = n(221650);
function pV(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
        l = (0, pU.Xf)({ useReducedMotion: i }),
        { name: s, header: r } = E.useMemo(() => {
            let e = (0, pD.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, A.jsxs)("div", {
        className: pM.kL,
        children: [
            (0, A.jsx)(nn.D, {
                onClick: () => {
                    n(), l.startAnimation(!1);
                },
                className: pM.x6,
                "aria-label": R.intl.string(R.t["44yJxh"]),
                children: l.render(),
            }),
            (0, A.jsxs)(nn.D, {
                onClick: () => {
                    n(), l.startAnimation(!1);
                },
                "aria-label": `${s}: ${R.intl.string(R.t["44yJxh"])}`,
                className: pM.Lt,
                children: [
                    (0, A.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: pM.L_ }),
                    (0, A.jsx)(H.E, {
                        className: pM._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: s,
                    }),
                ],
            }),
        ],
    });
}
var pk = n(511484),
    pw = n(811611),
    pF = n(206697),
    pB = n(507553);
function pz(e, t) {
    let n = pB.A.useField("scrollPosition"),
        i = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion);
    (0, E.useEffect)(() => {
        let l = e.current;
        if (null == l || n !== t) return;
        let s = requestAnimationFrame(() => {
            l.scrollIntoView({ behavior: i ? "auto" : "smooth" }), pB.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(s);
    }, [e, t, n, i]);
}
var pX = n(844222),
    pY = n(842092);
let pH = "/assets/d4955aabdcb5bdee.png",
    pK = { assetOrigin: pO.E.NEW_ASSET, imageUri: pH, staticImageUri: pH, description: "", originalAsset: void 0 };
function pW(e) {
    let { user: t } = e,
        { reducedMotion: n } = E.useContext(pX.C),
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
            tryItOutAvatarDecoration: S,
            tryItOutDisplayNameStyles: T,
        } = (0, h.cf)([S6.A], () => {
            let e = S6.A.getPendingChanges(),
                t = S6.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        p = (0, Tr.V7)({ userId: t.id, image: g ?? i });
    return (0, A.jsx)(Ts.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? l ?? pK,
        pendingDisplayNameStyles: T ?? a,
        pendingAvatar: p,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== S ? S : s,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : pY.WX,
        containerClassName: pY.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var pZ = n(829497);
function pq(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        l = r9.Ay.isPremium(t),
        s = r9.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, h.cf)([S6.A], () => {
            let e = S6.A.getPendingChanges(),
                t = S6.A.getErrors(),
                n = S6.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, E.useState)(pG()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: l,
                    displayNameStyles: s,
                } = (0, E.useMemo)(() => {
                    let t = (0, pD.Wt)(e);
                    return {
                        banner: (0, pL.X)({
                            assetOrigin: pO.E.NEW_ASSET,
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
                r = (0, h.bG)([pv.A], () => {
                    let e = pv.A.getProduct(l);
                    return (0, pj.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, E.useEffect)(() => {
                (0, pR.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: s });
            }, [n, i, r, s]);
            let a = (0, E.useCallback)(() => {
                let n = pG(e);
                t(n), tt.default.track(S.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n });
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = E.useRef(null);
    pz(m, eC._F.TRY_IT_OUT);
    let { analyticsLocations: T, sourceAnalyticsLocations: x } = (0, eP.Ay)(tL.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function f(e) {
        e && ((0, pF.T)(), tt.default.track(S.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    E.useEffect(() => {
        n &&
            (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tX.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: S.liQ.USER_SETTINGS },
                location_stack: x,
            }),
            (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, x, () => (0, tB.uq)(tX.e.PREMIUM_PROFILE_TRY_IT_OUT)));
    }, [x, t, n]);
    let I = (0, py.V)()?.subscriptionTrial?.skuId === tX.pe.TIER_2,
        _ = (0, pb.O)(),
        N = (0, pk.U9)(_, tX.pe.TIER_2);
    return i
        ? (0, A.jsx)(eP.f5, {
              value: T,
              children: (0, A.jsxs)(ud.A, {
                  ref: m,
                  className: pZ.MT,
                  type: ud.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, A.jsx)(Tl, {
                          stickyPreview: !1,
                          layoutClassName: pZ.th,
                          profilePreviewTitle: (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(rQ.t, { size: "md", color: "currentColor", className: pZ.PC }),
                                  R.intl.string(R.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, A.jsxs)(A.Fragment, {
                              children: [(0, A.jsx)(pV, { preset: c, onShuffle: g }), (0, A.jsx)(pW, { user: t })],
                          }),
                          children: (0, A.jsxs)("div", {
                              children: [
                                  (0, A.jsxs)("div", {
                                      children: [
                                          (0, A.jsx)(p.D, {
                                              variant: "heading-xl/extrabold",
                                              children: R.intl.string(R.t["2zGdAW"]),
                                          }),
                                          (0, A.jsx)(H.E, {
                                              className: pZ.h_,
                                              variant: "text-sm/normal",
                                              children: R.intl.string(R.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, A.jsx)(T6, {
                                      className: pZ.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Tr.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: pR.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, A.jsx)(Tw, {
                                      className: pZ.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: pR.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !s &&
                                      (0, A.jsx)(TR, {
                                          className: pZ.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: pR.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: R.intl.string(R.t["7z0D1c"]),
                                          sectionTitle: R.intl.string(R.t.vtFfPX),
                                      }),
                                  (0, A.jsx)(TG, { user: t, className: pZ.fz }),
                                  !I &&
                                      (0, A.jsx)(H.E, {
                                          variant: "text-sm/normal",
                                          children: R.intl.string(R.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !I &&
                          (0, A.jsx)(p_.d, {
                              onSubscribeModalClose: f,
                              className: pZ.Kv,
                              showUpsell: !0,
                              text: R.intl.format(R.t.TmfgI2, {
                                  onClick: () => {
                                      (0, pC.K)({ onSubscribeFinish: f });
                                  },
                              }),
                              button: l
                                  ? R.intl.string(R.t.AfRWI8)
                                  : N
                                    ? R.intl.formatToPlainString(R.t.bkQ4bH, { percent: _?.discount.amount })
                                    : R.intl.string(R.t.pj0XBN),
                              position: "inline",
                          }),
                      I &&
                          (0, A.jsxs)("div", {
                              children: [
                                  (0, A.jsx)("div", { className: pZ.BU }),
                                  (0, A.jsx)(pw.Ay, {
                                      type: tX.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: tX.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var pQ = n(814390),
    pJ = n(843282),
    p$ = n(145497),
    p0 = n(685073),
    p1 = n(534400),
    p2 = n(581781),
    p3 = n(743981),
    p6 = n(195801);
let p5 = (0, tw.Ld)(),
    p4 = E.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            l = (0, h.cf)([sn.default], () => (0, p0.Zo)(sn.default.getCurrentUser()?.primaryGuild)),
            s = void 0 !== n ? n : (l.guildId ?? null),
            r = E.useMemo(() => {
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
                        e.set(n, { id: n, name: R.intl.string(R.t.dtwqPR), icon: null, tag: i, badge: r }),
                    e
                );
            }, [t, l, s]),
            a = E.useMemo(() => Array.from(r.values(), (e) => ({ label: e.name, value: e.id })), [r]),
            o = E.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, A.jsx)(p2.A, {
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
            u = E.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, A.jsx)(p$.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [r],
            ),
            d = E.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, A.jsx)(p1.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: p3.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [r],
            ),
            c = E.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, A.jsx)(A.Fragment, { children: o(t) });
                },
                [o],
            ),
            g = E.useCallback(
                (e) => {
                    i?.(e);
                },
                [i],
            ),
            m = E.useCallback((e) => e === s, [s]),
            S = E.useCallback((e) => e, []),
            T = E.useCallback(() => {
                i?.(null);
            }, [i]),
            p = E.useRef(null);
        return (
            pz(p, eC._F.GUILD_TAG),
            (0, A.jsxs)(r1.A, {
                title: R.intl.string(R.t.Pdd1nd),
                titleId: p5,
                ref: p,
                children: [
                    (0, A.jsx)(H.E, {
                        className: p6.VA,
                        variant: "text-sm/normal",
                        children: R.intl.string(R.t.mlZ6Jx),
                    }),
                    (0, A.jsx)(pJ.Pw, {
                        className: p6.Lt,
                        optionClassName: p6.S0,
                        isSelected: m,
                        options: a,
                        select: g,
                        renderLeading: u,
                        renderTrailing: d,
                        renderOptionValue: c,
                        serialize: S,
                        clear: T,
                        clearable: null != s,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
var p8 = n(318785),
    p7 = n(992526),
    p9 = n(470739);
let xe = function () {
    return (0, p7.J9)({ location: "UserSettingsProfileCustomization" })
        ? (0, A.jsx)(r1.A, {
              title: R.intl.string(R.t.l6w3Vj),
              description: R.intl.string(R.t.joHqdj),
              children: (0, A.jsx)(_.$, {
                  text: R.intl.string(R.t.wRraFx),
                  onClick: () => {
                      (0, p9._)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var xt = n(953726);
let xn = (0, tw.Ld)();
function xi(e) {
    let t = (0, Ek.L)(tX.PremiumTypes.TIER_2);
    return (0, A.jsxs)(r1.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: R.intl.string(R.t["9AjdkD"]),
        titleId: xn,
        children: [
            (0, A.jsx)("div", {
                children: (0, A.jsx)(la.k, {
                    "aria-labelledby": xn,
                    placeholder: e.placeholder,
                    maxLength: S.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, A.jsx)(TG, { user: e.user, className: xt.F }),
        ],
    });
}
var xl = n(376626);
function xs(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = L.m$.useSetting(),
        l = void 0 !== n ? n : i;
    return (0, A.jsx)("div", {
        className: xl.u,
        children: (0, A.jsx)(tJ.d, {
            label: R.intl.string(R.t["3cWDuO"]),
            description: l ? null : R.intl.formatToPlainString(R.t.aYhclf, { username: t }),
            checked: !l,
            onChange: (e) => {
                !e === i ? (0, S2._e)() : (0, Tb.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function xr(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: l } = e,
        s = t.getAvatarURL(null, 80),
        r = (0, TW.r)(nQ.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, TZ.rh)(s, r, !1),
        o = (0, T$.LX)(a[0]);
    return (0, A.jsx)(r1.A, {
        title: R.intl.string(R.t["/X3fkf"]),
        children: (0, A.jsx)(T2, { onChange: (e) => l(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var xa = n(518477);
let xo = function () {
    let e = (0, h.bG)([uI.default], () => uI.default.getId());
    return (0, A.jsx)(r1.A, {
        title: R.intl.string(R.t.Jzj9q4),
        children: (0, A.jsx)(_.$, {
            text: R.intl.string(R.t.Geikwq),
            onClick: () => {
                (0, S8.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tL.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: xa.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var xu = n(654910);
function xd() {
    let e = (0, h.bG)([sn.default], () => {
            let e = sn.default.getCurrentUser();
            return ta()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, h.bG)([Ta.A], () => Ta.A.getUserProfile(e.id)),
        {
            pendingAvatar: n,
            pendingGlobalName: i,
            pendingBanner: l,
            pendingBio: s,
            pendingPronouns: r,
            pendingAccentColor: a,
            pendingThemeColors: o,
            pendingLegacyUsernameDisabled: u,
            pendingPrimaryGuildId: d,
            errors: c,
        } = (0, h.cf)([S6.A], () => {
            let e = S6.A.getPendingChanges(),
                t = S6.A.getErrors();
            return { ...e, errors: t };
        }),
        g = (0, Tr.V7)({ userId: e.id, image: n }),
        m = (0, Tc.EC)(),
        E = r9.Ay.canUsePremiumProfileCustomization(e),
        S = (0, Tt.z5)(n, e.avatar),
        T = (0, Tt.Ac)(l, t?.banner),
        p = (0, Tq.Ay)(e.id),
        x = p?.getLegacyUsername(),
        f = (c.global_name?.length ?? 0) > 0 ? c.global_name : (m?.nick ?? []),
        I = (c.bio?.length ?? 0) > 0 ? c.bio : (m?.bio ?? []),
        _ = (0, p8.b)(),
        N = null != (0, p0.Zo)(e.primaryGuild).guildId;
    return (0, A.jsxs)("div", {
        className: xu.Q,
        children: [
            (0, A.jsx)(xi, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: i,
                onGlobalNameChange: (e) => (0, Tb.p)({ globalName: e }),
                user: e,
            }),
            (0, A.jsx)(
                T5,
                {
                    sectionTitle: R.intl.string(R.t["+T3RI/"]),
                    errors: c.pronouns,
                    onPronounsChange: (e) => (0, Tb.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, A.jsx)(xo, {}),
            (0, A.jsx)(
                TR,
                {
                    onAvatarChange: (e) => {
                        (0, Tb.p)({ avatar: e }), (0, Tt.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: S,
                    errors: c.avatar,
                    sectionTitle: R.intl.string(R.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, A.jsx)(Tv, { user: e, sectionTitle: R.intl.string(R.t["7v0T9P"]) }, "decoration"),
            (0, A.jsx)(TV, { user: e }),
            (0, A.jsx)(Tz, { user: e, sectionTitle: R.intl.string(R.t.wR5wOo) }, "effect"),
            (0, A.jsx)(TK, { user: e, sectionTitle: R.intl.string(R.t.GWrZOd) }, "frame"),
            E
                ? (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)(
                              Tw,
                              {
                                  showRemoveBannerButton: T,
                                  errors: c.banner,
                                  onBannerChange: (e) => (0, Tb.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, A.jsx)(T6, {
                              user: e,
                              pendingAvatarSrc: g,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, Tb.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, A.jsx)(
                      xr,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, Tb.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, A.jsx)(
                TI,
                {
                    sectionTitle: R.intl.string(R.t.ZzAR2Y),
                    errors: I,
                    onBioChange: (e) => (0, Tb.p)({ bio: e }),
                    pendingBio: s,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (_.length > 0 || N) &&
                (0, A.jsx)(p4, {
                    availablePrimaryGuilds: _,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, Tb.p)({ primaryGuildId: e }),
                }),
            null != x && (0, A.jsx)(xs, { legacyUsername: x, pendingLegacyUsernameDisabled: u }, "legacy_username"),
            (0, A.jsx)(xe, {}, "badges"),
        ],
    });
}
function xc() {
    (0, lr.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("935205"), n.e("766901"), n.e("641704")]).then(n.bind(n, 562011));
        return (t) =>
            (0, A.jsx)(e, {
                ...t,
                source: {
                    page: S.liQ.USER_SETTINGS,
                    section: S.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                    object: S.ZSU.BUTTON_CTA,
                    type: S.AnalyticsObjectTypes.BUY,
                },
            });
    });
}
var xg = n(447080);
function xm() {
    let e = (0, h.bG)([sn.default], () => {
            let e = sn.default.getCurrentUser();
            return ta()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, h.bG)([te.A], () => te.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: l,
            showNotice: s,
            ...r
        } = (0, h.cf)([S6.A], () => ({ ...S6.A.getPendingChanges(), showNotice: S6.A.showNotice() })),
        a = (0, Tr.V7)({ userId: e.id, image: i }),
        o = (0, Tt.lw)({ pendingValue: l, userValue: e?.collectibles?.nameplate }),
        u = (0, pQ.A)() && null != n ? pI.Ay.parse(void 0, n).content : n,
        d = r9.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, eP.Ay)(tL.A.USER_SETTINGS_USER_PROFILE);
    E.useEffect(() => () => e5.h.wait(S2.IM), []);
    let [g, m] = E.useState(!1),
        T = !d,
        p = E.useRef(null);
    return t
        ? (0, A.jsx)(a5.A, {})
        : (0, A.jsxs)(eP.f5, {
              value: c,
              children: [
                  (0, A.jsx)(pf, {}),
                  (0, A.jsx)(Tl, {
                      profilePreview: (0, A.jsx)(Ts.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: xc,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: xg.ti,
                      }),
                      nameplatePreview: (0, A.jsx)(Te.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? xg.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, A.jsx)(xd, {}),
                  }),
                  (0, A.jsx)(pg.L, {
                      innerRef: p,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: T,
                      children: (0, A.jsx)("div", {
                          ref: p,
                          children: (0, A.jsx)(pq, { user: e, shouldShow: T, isVisible: g }),
                      }),
                  }),
                  T &&
                      !s &&
                      (0, A.jsx)(p_.d, {
                          className: xg.EL,
                          showUpsell: !g,
                          text: R.intl.format(R.t.TmfgI2, { onClick: () => (0, pC.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, A.jsx)(pN.l, {
                              size: "md",
                              location: tL.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, A.jsx)("div", {
                              className: xg.Xl,
                              children: (0, A.jsx)(_.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      tt.default.track(S.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          p?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: R.intl.string(R.t.uw9zI7),
                                  icon: rQ.t,
                              }),
                          }),
                      }),
              ],
          });
}
var xA = n(625494);
n(46121);
var xE = n(944983);
let xh = { [eC.Eq.USER_PROFILE]: "main_profile_tab", [eC.Eq.GUILD]: "guild_profile_tab" },
    xS = (0, d.E2)(c.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, h.bG)([lh.A, dA.Ay, S6.A], () => {
                    let e = S6.A.selectedGuildId ?? lh.A.getGuildId();
                    return null == e || S6._.has(e) ? dA.Ay.getFlattenedGuildIds().find((e) => !S6._.has(e)) : e;
                }),
                t = (0, h.bG)([lE.A], () => lE.A.getGuild(e)),
                n = (0, h.bG)([S6.A], () => S6.A.showNotice()),
                i = (0, h.bG)([sn.default], () => sn.default.getCurrentUser()),
                l = pB.A.useField("subsection");
            return (
                E.useEffect(() => {
                    (0, n5._)(xh[l]);
                }, [l]),
                E.useEffect(() => {
                    null != i && t?.id != null && (0, pu.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, A.jsx)(pc, {
                    children: (0, A.jsxs)(uF.F, {
                        component: (0, A.jsx)(lt.A, {
                            children: (0, A.jsx)(p.D, {
                                variant: "heading-xl/normal",
                                children: R.intl.string(R.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, A.jsxs)(S7.V, {
                                className: xE.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: l,
                                onItemSelect: function (e) {
                                    if (l !== e) {
                                        if (n) {
                                            (0, n4.fO)({ duration: 300, intensity: 1.4 }),
                                                xA._.dispatch(S.jej.EMPHASIZE_NOTICE);
                                            return;
                                        }
                                        e === eC.Eq.GUILD && null != t && (0, S9.V2)(t.id),
                                            pB.A.setState({ subsection: e });
                                    }
                                },
                                children: [
                                    (0, A.jsx)(
                                        S7.V.Item,
                                        {
                                            className: xE.YU,
                                            id: eC.Eq.USER_PROFILE,
                                            children: R.intl.string(R.t["2p07FR"]),
                                        },
                                        eC.Eq.USER_PROFILE,
                                    ),
                                    (0, A.jsx)(
                                        S7.V.Item,
                                        {
                                            className: is()(xE.YU, xE.HY),
                                            "aria-label": R.intl.string(R.t.kPHroX),
                                            id: eC.Eq.GUILD,
                                            children: R.intl.string(R.t.kPHroX),
                                        },
                                        eC.Eq.GUILD,
                                    ),
                                ],
                            }),
                            l === eC.Eq.GUILD
                                ? (0, A.jsx)(po, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              (0, n4.fO)({ duration: 300, intensity: 1.4 }),
                                                  xA._.dispatch(S.jej.EMPHASIZE_NOTICE);
                                              return;
                                          }
                                          null != e && (0, S9.JJ)(e.id);
                                      },
                                  })
                                : (0, A.jsx)(xm, {}),
                        ],
                    }),
                })
            );
        },
        useSearchTerms: () => [
            R.intl.string(R.t["vi7f+q"]),
            R.intl.string(R.t.Ip9nBS),
            R.intl.string(R.t["2p07FR"]),
            R.intl.string(R.t["7vhiqk"]),
            R.intl.string(R.t.kPHroX),
            R.intl.string(R.t.lqaIxI),
            R.intl.string(R.t.Vgdusv),
            R.intl.string(R.t.DMeO2X),
        ],
    }),
    xT = (0, d.zZ)(c.X.PROFILE_CATEGORY, { buildLayout: () => [xS] });
var xp = n(379633);
function xx() {
    let e = (0, h.bG)([sn.default], () => sn.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, S4.A)({ userId: e?.id, size: I._3.SIZE_48 });
    return null == e
        ? null
        : (0, A.jsxs)("div", {
              className: xp.a5,
              children: [
                  (0, A.jsx)(f.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: I._3.SIZE_48,
                      "aria-label": R.intl.string(R.t.lqaIxI),
                  }),
                  (0, A.jsxs)("div", {
                      className: xp.FS,
                      children: [
                          (0, A.jsx)(H.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, A.jsxs)("div", {
                              className: xp.Fk,
                              children: [
                                  (0, A.jsx)(H.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: R.intl.string(R.t.Ip9nBS),
                                  }),
                                  (0, A.jsx)(r7.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let xf = (0, d.t_)(c.X.PROFILE_PANEL, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        notice: { stores: [S6.A], element: S3.A },
        initialize: () => () =>
            e5.h.wait(() => {
                (0, S2.F7)();
            }),
        buildLayout: () => [xT],
    }),
    xI = (0, d.i4)(c.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        icon: xN,
        StronglyDiscouragedCustomComponent: xx,
        usePredicate: () => !(0, S5.X)("user_settings_sidebar"),
        buildLayout: () => [xf],
    }),
    x_ = (0, d.i4)(c.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        icon: xN,
        StronglyDiscouragedCustomComponent: xx,
        usePredicate: () => (0, S5.X)("user_settings_sidebar"),
        onClick: () => {
            let e = uI.default.getId();
            (0, S8.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function xN() {
    let e = (0, h.bG)([sn.default], () => sn.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, S4.A)({ userId: e?.id, size: I._3.SIZE_48 });
    return (0, A.jsx)(f.eu, { src: t, avatarDecoration: n, size: I._3.SIZE_20, "aria-hidden": !0 });
}
let xC = (0, d.WI)(c.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [xI, x_] });
var xb = n(98207),
    xy = (n(204925), n(818348));
let xv = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, lr.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 888363),
            );
            return (n) => (0, A.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? xy.tE : null, onCloseCallback: t },
    );
};
var xj = n(940856),
    xO = n(379257),
    xL = n(847599),
    xR = n(931374),
    xD = (((r = {}).ADULT = "adult"), (r.TEEN = "teen"), (r.UNVERIFIED = "unverified"), r);
function xP() {
    let e = (0, xR.b8)();
    return (0, xR.yM)() ? "teen" : e ? "adult" : "unverified";
}
function xG() {
    xO.A.openUrl(ex.A.getArticleURL(S.MVz.TIGGER_PAWTECT_LEARN_MORE));
}
function xU() {
    switch (xP()) {
        case "adult":
            return R.intl.string(R.t.XxRj7f);
        case "teen":
            return R.intl.string(R.t.sK0dmH);
        case "unverified":
            return R.intl.string(R.t.lKDPGA);
    }
}
(0, A8.mj)({
    name: "2026-08-tiny-bronco",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
let { createLoader: xM } = n(632296),
    xV = xM(
        {
            bg: () => n.e("695068").then(n.t.bind(n, 133975, 19)),
            cs: () => n.e("241483").then(n.t.bind(n, 663942, 19)),
            da: () => n.e("841356").then(n.t.bind(n, 137799, 19)),
            de: () => n.e("745176").then(n.t.bind(n, 12939, 19)),
            el: () => n.e("502078").then(n.t.bind(n, 658573, 19)),
            "en-GB": () => n.e("635638").then(n.t.bind(n, 198165, 19)),
            "es-419": () => n.e("708688").then(n.t.bind(n, 836307, 19)),
            "es-ES": () => n.e("102094").then(n.t.bind(n, 928029, 19)),
            fi: () => n.e("833302").then(n.t.bind(n, 843381, 19)),
            fr: () => n.e("169005").then(n.t.bind(n, 72380, 19)),
            hi: () => n.e("529360").then(n.t.bind(n, 328659, 19)),
            hr: () => n.e("484459").then(n.t.bind(n, 40614, 19)),
            hu: () => n.e("396124").then(n.t.bind(n, 455959, 19)),
            it: () => n.e("732090").then(n.t.bind(n, 909889, 19)),
            ja: () => n.e("229274").then(n.t.bind(n, 614945, 19)),
            ko: () => n.e("596223").then(n.t.bind(n, 89410, 19)),
            lt: () => n.e("916793").then(n.t.bind(n, 156768, 19)),
            nl: () => n.e("183283").then(n.t.bind(n, 131582, 19)),
            no: () => n.e("239024").then(n.t.bind(n, 36531, 19)),
            pl: () => n.e("441973").then(n.t.bind(n, 582804, 19)),
            "pt-BR": () => n.e("957942").then(n.t.bind(n, 373973, 19)),
            ro: () => n.e("659460").then(n.t.bind(n, 445807, 19)),
            ru: () => n.e("135846").then(n.t.bind(n, 582725, 19)),
            "sv-SE": () => n.e("613351").then(n.t.bind(n, 613658, 19)),
            th: () => n.e("318029").then(n.t.bind(n, 63388, 19)),
            tr: () => n.e("89999").then(n.t.bind(n, 35692, 19)),
            uk: () => n.e("723993").then(n.t.bind(n, 878848, 19)),
            vi: () => n.e("816134").then(n.t.bind(n, 454053, 19)),
            "zh-CN": () => n.e("447963").then(n.t.bind(n, 536342, 19)),
            "zh-TW": () => n.e("870727").then(n.t.bind(n, 647866, 19)),
            "en-US": () => n.e("101009").then(n.bind(n, 257320)),
        },
        "en-US",
    ),
    { makeMessagesProxy: xk } = n(632296),
    xw = xk(xV);
function xF() {
    return xP(), null;
}
function xB() {
    let e = (xP(), null);
    return null != e ? { type: m.hp.ICON, ...e } : null;
}
n(26137), n(957485), n(966107);
var xz = n(923495),
    xX = n(207560);
m.Xi.NEW, eu.M.TINY_BRONCO_SETTINGS;
let xY = [];
function xH() {
    return xY;
}
var xK = (((a = {}).LEGACY = "legacy"), (a.TINY_BRONCO = "tinyBronco"), a),
    xW = (((o = {}).VERIFY = "verify"), (o.EDIT = "edit"), (o.INFO = "info"), o);
function xZ(e, t) {
    let n = (0, h.bG)([sn.default], () => null != sn.default.getCurrentUser()),
        i = (0, xX.fk)(),
        l = xP(),
        s = (0, xR.Y2)();
    if (!n || !i || "legacy" !== t) return !1;
    switch (l) {
        case xD.UNVERIFIED:
        case xD.TEEN:
            return "verify" === e;
        case xD.ADULT:
            return e === (s ? "edit" : "info");
    }
}
var xq = n(841365);
function xQ() {
    let e = xU();
    return (0, A.jsxs)(H.E, {
        variant: "text-md/medium",
        children: [`${e} \u{2022} `, R.intl.format(xq.default.WM5adV, { handleOnHelpUrlHook: xG })],
    });
}
let xJ = {
        useTitle: () => R.intl.string(R.t["/52UYy"]),
        useSubtitle: xF,
        useVariant: () => "secondary",
        useLeadingDecoration: xB,
        getDismissibleBadges: xH,
        useTrailingDecoration: () => ({
            type: m.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: xQ,
        }),
        useLabel: () => R.intl.string(R.t.bt75uw),
        onClick: function () {
            (0, lr.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, A.jsx)(e, { ...t });
            });
        },
    },
    x$ = (0, d.Tf)(c.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...xJ, usePredicate: () => xZ(xW.EDIT, xK.LEGACY) }),
    x0 = (0, d.Tf)(c.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...xJ,
        usePredicate: () => xZ(xW.EDIT, xK.TINY_BRONCO),
        useAriaLabel: () => R.intl.string(R.t.pBMSie),
    }),
    x1 = {
        useTitle: () => R.intl.string(R.t["/52UYy"]),
        useSubtitle: xF,
        useLeadingDecoration: function () {
            let e = (xP(), null);
            return null != e ? { type: m.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: xH,
        useTrailingDecoration: () => ({ type: m.Ln.TEXT, text: xU() }),
    },
    x2 = (0, d.v_)(c.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...x1, usePredicate: () => xZ(xW.INFO, xK.LEGACY) }),
    x3 = (0, d.v_)(c.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...x1,
        usePredicate: () => xZ(xW.INFO, xK.TINY_BRONCO),
    }),
    x6 = {
        useTitle: () => R.intl.string(R.t["/52UYy"]),
        useSubtitle: xF,
        useVariant: () => "secondary",
        useLeadingDecoration: xB,
        getDismissibleBadges: xH,
        useTrailingDecoration: () => ({ type: m.fq.TEXT, text: xU() }),
        useLabel: function () {
            return (0, xR.yM)() ? R.intl.string(R.t["9KiIz6"]) : R.intl.string(R.t.DVywUB);
        },
        onClick: function () {
            xO.A.showAgeVerificationGetStartedModal({ entryPoint: xL.q1.ACCOUNT_AGE_GROUP });
        },
    },
    x5 = (0, d.Tf)(c.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...x6, usePredicate: () => xZ(xW.VERIFY, xK.LEGACY) }),
    x4 = (0, d.Tf)(c.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...x6,
        usePredicate: () => xZ(xW.VERIFY, xK.TINY_BRONCO),
    }),
    x8 = [x5, x$, x2],
    x7 = [x4, x0, x3],
    x9 = (0, d.Tf)(c.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, h.bG)([sn.default], () => sn.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => R.intl.string(R.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: m.fq.TEXT, text: R.intl.string(R.t.qxk9zo) }),
        useLabel: () => R.intl.string(R.t.BleMPB),
        onClick: () => xv(),
    });
function fe(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function ft(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function fn(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: l } = e,
        [s, r] = E.useState(!1),
        a = s ? t : n(t);
    return (0, A.jsxs)(X.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, A.jsx)(H.E, { variant: "text-md/medium", children: a }),
            (0, A.jsx)(Af.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": s ? l : i,
                onClick: () => r(!s),
                text: s ? R.intl.string(R.t.fgq1gs) : R.intl.string(R.t.dcztdU),
            }),
        ],
    });
}
function fi() {
    let e = (0, h.bG)([sn.default], () => sn.default.getCurrentUser()?.email);
    return null == e
        ? (0, A.jsx)(H.E, { variant: "text-md/medium", children: R.intl.string(R.t["8SfTN/"]) })
        : (0, A.jsx)(fn, {
              text: e,
              censor: ft,
              revealLabel: R.intl.string(R.t["Zvx+yV"]),
              hideLabel: R.intl.string(R.t.nqTD4d),
          });
}
let fl = (0, d.Tf)(c.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, h.bG)([sn.default], () => sn.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => R.intl.string(R.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: m.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fi }),
    useLabel: function () {
        return null == (0, h.bG)([sn.default], () => sn.default.getCurrentUser()?.email)
            ? R.intl.string(R.t.OYkgVk)
            : R.intl.string(R.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, h.bG)([sn.default], () => sn.default.getCurrentUser()?.email)
            ? R.intl.string(R.t["pvBD+W"])
            : R.intl.string(R.t["8peUT0"]);
    },
    onClick: function () {
        (0, lr.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("279385"), n.e("420577"), n.e("465861")]).then(
                n.bind(n, 97060),
            );
            return (t) => (0, A.jsx)(e, { ...t });
        });
    },
});
var fs = n(557722),
    fr = n(53516);
function fa() {
    let e = (0, h.bG)([sn.default], () => sn.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, A.jsx)(H.E, { variant: "text-md/medium", children: R.intl.string(R.t.I5kDqj) })
        : (0, A.jsx)(X.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, A.jsx)(fn, {
                  text: t,
                  censor: fe,
                  revealLabel: R.intl.string(R.t.eY3xlT),
                  hideLabel: R.intl.string(R.t["jllbv+"]),
              }),
          });
}
let fo = (0, d.Tf)(c.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, h.bG)([sn.default], () => sn.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => R.intl.string(R.t.kerONq),
    useAriaLabel: function () {
        return null == (0, h.bG)([sn.default], () => sn.default.getCurrentUser()?.phone)
            ? R.intl.string(R.t["SfUuE+"])
            : R.intl.string(R.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: m.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fa }),
    useLabel: function () {
        return null == (0, h.bG)([sn.default], () => sn.default.getCurrentUser()?.phone)
            ? R.intl.string(R.t.OYkgVk)
            : R.intl.string(R.t.bt75uw);
    },
    onClick: function () {
        null == sn.default.getCurrentUser()?.phone
            ? (0, lr.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("590275"),
                          n.e("334179"),
                          n.e("989545"),
                          n.e("311493"),
                          n.e("84704"),
                          n.e("286197"),
                      ]).then(n.bind(n, 615715));
                      return (t) => (0, A.jsx)(e, { reason: fs.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: fr.V },
              )
            : (0, lr.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, A.jsx)(e, { ...t });
              });
    },
});
function fu() {
    let e = (0, h.bG)([sn.default], () => sn.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function fd() {
    let e = (0, Tc.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, h.bG)([sn.default], () => sn.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsx)(H.E, { variant: "text-md/medium", children: i }),
            null != t &&
                (0, A.jsx)(le.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, A.jsx)(iX.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: nQ.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let fc = (0, d.Tf)(c.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => R.intl.string(R.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: m.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: fd,
        }),
        useLabel: () => R.intl.string(R.t.bt75uw),
        useAriaLabel: () => R.intl.string(R.t.JECa91),
        useSubtitle: () => (fu() ? R.intl.string(R.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: fu,
        onClick: function () {
            (0, lr.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, A.jsx)(e, { ...t });
            });
        },
    }),
    fg = (0, d.zZ)(c.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, h.bG)([sn.default], () => null != sn.default.getCurrentUser()),
        useTitle: () => R.intl.string(R.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, h.bG)([sn.default], () => sn.default.getCurrentUser());
            return null == e
                ? null
                : e.isClaimed()
                  ? null == e.email || e.verified
                      ? null
                      : {
                            type: m.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            title: R.intl.string(R.t.tuGzBT),
                            text: R.intl.string(R.t.NAzplE),
                            button: { text: R.intl.string(R.t.lm1UKt), onClick: () => (0, xj.S)(e) },
                        }
                  : {
                        type: m.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        title: R.intl.string(R.t["/3qnL/"]),
                        text: R.intl.string(R.t.qKs3vg),
                        button: { text: R.intl.string(R.t["7psymi"]), onClick: () => xv() },
                    };
        },
        buildLayout: () => [fc, x9, fl, fo, ...x8],
    });
var fm = n(398177);
let fA = (0, d.Tf)(c.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => R.intl.string(R.t["CIGa+7"]),
    useLabel: () => R.intl.string(R.t.bt75uw),
    useAriaLabel: () => R.intl.string(R.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, lr.openModal)((e) => (0, A.jsx)(fm.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var fE = n(200921);
let fh = [];
function fS() {
    fh = [];
}
class fT extends h.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return fh;
    }
}
let fp = new fT(e5.h, {
    LOGOUT: fS,
    LOGIN_SUCCESS: fS,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        fh = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [...fh],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        fh = n;
    },
});
function fx() {
    let e = (0, h.cf)([fp], () => fp.getSessions());
    return E.useMemo(() => {
        let t = [...e],
            n = null,
            i = uI.default.getAuthSessionIdHash();
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
function ff(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? R.intl.string(R.t.TXCmfL) : ia()(e).fromNow();
}
var fI = n(176524),
    f_ = n(646270),
    fN = n(738678),
    fC = n(489828);
function fb(e) {
    let { icon: t, label: n, subLabel: i, description: l, children: s, muted: r } = e;
    return (0, A.jsxs)(X.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, A.jsx)(fI.A, { icon: t, color: r ? nQ.A.colors.ICON_MUTED : "currentColor" }),
            (0, A.jsxs)(X.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, A.jsxs)(X.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, A.jsx)(H.E, { variant: "text-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != i &&
                                (0, A.jsx)(H.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != i &&
                                (0, A.jsx)(H.E, { variant: "text-md/medium", color: "text-subtle", children: i }),
                        ],
                    }),
                    (0, A.jsx)(H.E, { variant: "text-sm/normal", color: "text-muted", children: l }),
                ],
            }),
            s,
        ],
    });
}
function fy(e) {
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
                            return { text: R.intl.string(R.t.cDHCNY), icon: hL.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: f_.u };
                        case "horizon os":
                            return { text: e, icon: fN.G };
                        default:
                            return { text: e, icon: hL.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: l, Icon: s, lastActive: t ? null : ff(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(it.Vq);
    return (0, A.jsx)(fb, {
        icon: r,
        label: s,
        subLabel: l,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, A.jsx)(nn.D, {
                className: fC.X,
                onClick: () => (0, fE.U0)(t.id_hash),
                "aria-label": R.intl.string(R.t.E4MJNt),
                children: (0, A.jsx)(Eb.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function fv(e) {
    let { title: t, children: n } = e,
        i = E.useId();
    return (0, A.jsxs)(X.B, {
        role: "group",
        "aria-labelledby": i,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, A.jsx)(p.D, { id: i, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, A.jsx)(X.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
let fj = (0, d.E2)(c.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = fx();
            return null == e
                ? (0, A.jsx)(a8.y, {})
                : (0, A.jsx)(fv, {
                      title: R.intl.string(R.t.LLS19o),
                      children: (0, A.jsx)(fy, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    fO = (0, d.E2)(c.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fx();
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t.Vij32M),
                description: R.intl.string(R.t.OTXyaf),
                children: (0, A.jsx)(_.$, {
                    onClick: () => (0, fE.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: R.intl.string(R.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fx();
            return e.length > 0;
        },
    });
var fL = n(766928);
function fR() {
    return (0, A.jsx)(fb, {
        icon: fL.W,
        label: R.intl.string(R.t.iUa0sn),
        description: R.intl.format(R.t["044+8i"], {
            onClick: () =>
                (0, nl.openUserSettings)(c.X.ACCOUNT_PANEL, { analyticsLocations: [tL.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let fD = (0, d.E2)(c.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fx(),
                t = (0, h.bG)([sn.default], () => sn.default.getCurrentUser());
            return (0, A.jsxs)(fv, {
                title: R.intl.string(R.t.xx1MWc),
                children: [
                    e.map((e) => (0, A.jsx)(fy, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, A.jsx)(fR, {}),
                ],
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fx(),
                t = (0, h.bG)([sn.default], () => sn.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    fP = (0, d.zZ)(c.X.SESSIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.mEndXM),
        useSubtitle: () => R.intl.string(R.t.b7ZpTM),
        initialize: () => {
            (0, fE.GY)();
        },
        buildLayout: () => [fj, fD, fO],
        useSearchTerms: () => [
            R.intl.string(R.t["+1h0k/"]),
            R.intl.string(R.t.LLS19o),
            R.intl.string(R.t.xx1MWc),
            R.intl.string(R.t.lSWsrd),
        ],
    }),
    fG = (0, d.t_)(c.X.SESSIONS_PANEL, {
        useTitle: () => R.intl.string(R.t.mEndXM),
        useObscuredNotice: a5.L,
        buildLayout: () => [fP],
    }),
    fU = (0, d.t0)(c.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [fG],
        initialize: () => {
            (0, fE.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = fx(),
                n = t.length + +(null != e);
            return {
                type: m.xn.TEXT,
                text: n > 0 ? R.intl.formatToPlainString(R.t.G7zwOk, { count: n }) : R.intl.string(R.t.MKDeyL),
            };
        },
    });
var fM = n(464477);
function fV(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? R.intl.string(R.t.YJGvuD)
              : R.intl.string(R.t["3iKih7"])
          : e.hasFlag(S.nhx.PARTNER)
            ? t
                ? R.intl.string(R.t["9UucjT"])
                : R.intl.string(R.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? R.intl.string(R.t["9VWpT9"])
                  : R.intl.string(R.t.LfCBZG)
              : null;
}
function fk() {
    return (0, aH.bG)([sn.default], () => {
        let e = sn.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var fw =
    (((u = {}).AVAILABLE = "available"),
    (u.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (u.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    u);
function fF() {
    let e = (0, aH.bG)([sn.default], () => sn.default.getCurrentUser()?.verified);
    return fM.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function fB() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, aH.bG)([lE.A, T7.A, sn.default], () =>
        sn.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? R.intl.string(R.t.hxf9fX)
                : R.intl.string(R.t["3iKih7"])
            : lE.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(S.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        T7.A.can(S.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? R.intl.string(R.t.OYTCUh)
                  : R.intl.string(R.t.HC8uSZ)
              : null,
    );
}
var fz = n(466034);
let fX = (0, d.Tf)(c.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => R.intl.string(R.t.lQsY7B),
        useSubtitle: () => fB(!0),
        useDisabled: () => null !== fB(!0),
        useLabel: () => R.intl.string(R.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, h.bG)([uI.default], () => uI.default.hasTOTPEnabled()),
                t = fF() === fw.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, nJ.A)({
                title: R.intl.string(R.t["D+aE7g"]),
                subtitle: R.intl.string(R.t.EA4ZEk),
                variant: "critical",
                confirmText: R.intl.string(R.t.N86XcP),
                onConfirm: () => xb.A.disable(),
            }),
    }),
    fY = (0, d.zZ)(c.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => R.intl.string(R.t.RumMFo),
        useSubtitle: () => R.intl.string(R.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, h.bG)([uI.default], () => uI.default.hasTOTPEnabled()),
                t = fF() === fw.AVAILABLE;
            if (!e && t)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: R.intl.string(R.t.cTNUeD),
                            onClick: fz.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (fF()) {
                case fw.UNAVAILABLE_NO_CRYPTO:
                    return { type: m.lT.INLINE_NOTICE, noticeType: "info", text: R.intl.string(R.t.PhHhsj) };
                case fw.UNAVAILABLE_UNVERIFIED:
                    return { type: m.lT.INLINE_NOTICE, noticeType: "warning", text: R.intl.string(R.t.uggF7o) };
                case fw.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [fX],
    });
var fH = n(670492),
    fK = n(32880),
    fW = n(663417),
    fZ = n(658675),
    fq = n(900686);
function fQ() {
    (0, lr.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, A.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    xb.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, lr.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e("514567"), n.e("96179")]).then(
                                        n.bind(n, 518142),
                                    );
                                    return (n) => (0, A.jsx)(e, { ...n, password: t });
                                },
                                { stackingBehavior: "stack" },
                            )
                        );
                    }),
                title: R.intl.string(R.t.PsQmzU),
                actionText: R.intl.string(R.t.ajkYcF),
            });
    });
}
var fJ = n(858487);
function f$(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function f0() {
    let e = fH.A.getVerificationKey();
    try {
        await xb.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, l4.P0)({
            message: e.body?.message ?? R.intl.string(R.t.F8FvUy),
            type: l8.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function f1(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = f$(t),
        l = E.useRef(null),
        s = (0, A.jsxs)(A.Fragment, {
            children: [(0, A.jsx)(fZ.P, { checked: n }), (0, A.jsx)(H.E, { variant: "text-md/normal", children: i })],
        });
    return uy.p5
        ? (0, A.jsx)(nn.D, {
              tag: "li",
              className: is()(fJ.aY, fJ.vk),
              innerRef: l,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uy.C)(i), l?.current?.focus());
              },
              onClick: function () {
                  (0, uy.C)(i),
                      (0, l4.P0)({ message: R.intl.string(R.t.mGZ66D), type: l8.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: s,
          })
        : (0, A.jsx)("li", { className: fJ.aY, children: s });
}
let f2 = (0, d.zZ)(c.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.fC9qV0),
        useSubtitle: () =>
            (0, h.bG)([fH.A], () => fH.A.getBackupCodes().length > 0)
                ? R.intl.format(R.t.tp7zEK, {})
                : R.intl.string(R.t.LoOi4S),
        usePredicate: fk,
        buildLayout: () => [f3],
    }),
    f3 = (0, d.E2)(c.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.fC9qV0)],
        Component: function () {
            let e = (0, h.bG)([fH.A], () => fH.A.getBackupCodes()),
                t = E.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${f$(t)}` + (n ? ` (${R.intl.string(R.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, A.jsx)(_.$, { text: R.intl.string(R.t.Jc2myK), size: "sm", variant: "secondary", onClick: fQ })
                : (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)("ul", {
                              className: fJ.E5,
                              children: e.map((e) => (0, A.jsx)(f1, { code: e }, e.code)),
                          }),
                          (0, A.jsxs)(sw.e, {
                              size: "sm",
                              children: [
                                  (0, A.jsx)(fq.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, A.jsx)(_.$, {
                                          text: R.intl.string(R.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: fK.DownloadIcon,
                                      }),
                                  }),
                                  (0, A.jsx)(_.$, {
                                      text: R.intl.string(R.t["3x962E"]),
                                      variant: "secondary",
                                      icon: fW.RefreshIcon,
                                      onClick: f0,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    f6 = (0, d.Tf)(c.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => R.intl.string(R.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = E.useState(!1),
                n = (0, h.bG)([sn.default], () => sn.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : R.intl.format(e ? R.t["xDBk/I"] : R.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, A.jsx)(Af.Q, {
                              text: e ? R.intl.string(R.t.fgq1gs) : R.intl.string(R.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => R.intl.string(R.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, h.bG)([sn.default], () => sn.default.getCurrentUser()?.hasFlag(S.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, lr.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, A.jsx)(e, {
                        ...t,
                        handleSubmit: xb.A.disableSMS,
                        title: R.intl.string(R.t.KLWnit),
                        children: R.intl.string(R.t["W0/Duf"]),
                    });
            }),
    }),
    f5 = (0, d.zZ)(c.X.SMS_AUTH_CATEGORY, {
        useTitle: () => R.intl.string(R.t.wuHuI5),
        useSubtitle: () => (0, h.bG)([sn.default], () => fV(sn.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, h.bG)([sn.default], () => sn.default.getCurrentUser()?.hasFlag(S.nhx.MFA_SMS) ?? !1),
                t = (0, h.bG)([sn.default], () => null != fV(sn.default.getCurrentUser()));
            if (!e)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "sms-setup-button",
                            text: R.intl.string(R.t.Age7yU),
                            onClick: f4,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = fF(),
                t = fk(),
                n = (0, h.bG)([uI.default], () => uI.default.hasTOTPEnabled());
            return e === fw.AVAILABLE && t && n;
        },
        buildLayout: () => [f6],
    });
function f4() {
    let e = sn.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: fs.d.USER_SETTINGS_UPDATE, onAddedPhone: xb.A.enableSMS }),
                (0, lr.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("590275"),
                            n.e("334179"),
                            n.e("989545"),
                            n.e("311493"),
                            n.e("84704"),
                            n.e("286197"),
                        ]).then(n.bind(n, 615715));
                        return (n) => (0, A.jsx)(e, { ...n, ...t });
                    },
                    { modalKey: fr.V },
                );
        } else xb.A.enableSMS();
}
var f8 = n(665671),
    f7 = n(442433),
    f9 = n(917136),
    Ie = n(976910),
    It = n(267255);
function In(e) {
    let { credential: t } = e;
    return (0, A.jsxs)("li", {
        className: It.e,
        children: [
            (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(H.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, A.jsx)(H.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: R.intl.format(R.t["7JgxF5"], { lastUsed: ff(t.last_used) }),
                        }),
                ],
            }),
            (0, A.jsx)(i7.K, {
                icon: dp.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": R.intl.string(R.t["+nrTbK"]),
                onClick: (e) => {
                    (0, f7.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, A.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let Ii = (0, d.zZ)(c.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.IBq4Y3),
        useSubtitle: () => R.intl.string(R.t.yK9edS),
        useHeaderDecoration: function () {
            if (fF() === fw.AVAILABLE)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "add-security-key-button",
                            text: R.intl.string(R.t["Tzs/fw"]),
                            icon: iw.j,
                            onClick: f8.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (fF()) {
                    case fw.UNAVAILABLE_NO_CRYPTO:
                        return { type: m.lT.INLINE_NOTICE, noticeType: "info", text: R.intl.string(R.t.bWCGI9) };
                    case fw.UNAVAILABLE_UNVERIFIED:
                        return { type: m.lT.INLINE_NOTICE, noticeType: "warning", text: R.intl.string(R.t.uggF7o) };
                    case fw.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [Il],
    }),
    Il = (0, d.E2)(c.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [R.intl.string(R.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, h.cf)([Ie.A], () => ({
                hasFetchedCredentials: Ie.A.hasFetchedCredentials(),
                credentials: Ie.A.getCredentials(),
            }));
            return (E.useEffect(() => {
                t || f9.JQ();
            }, [t]),
            t)
                ? (0, A.jsx)(X.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, A.jsx)(In, { credential: e }, e.id)),
                  })
                : (0, A.jsx)(a8.y, {});
        },
    }),
    Is = (0, d.t_)(c.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => R.intl.string(R.t.m0FidJ),
        buildLayout: () => [Ii, fY, f5, f2],
    }),
    Ir = (0, d.t0)(c.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = fk();
            return { type: m.xn.TEXT, text: e ? R.intl.string(R.t.lQsY7B) : R.intl.string(R.t.WsUuTt) };
        },
        buildLayout: () => [Is],
    }),
    Ia = (0, d.zZ)(c.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t["0iH2vc"]),
        buildLayout: () => [fA, Ir, fU],
    }),
    Io = { [xD.ADULT]: xw.PMznGO, [xD.TEEN]: xw.qSkhZH, [xD.UNVERIFIED]: xw.vGxRDB },
    Iu = [eu.M.TINY_BRONCO_NOTICE],
    Id = [];
function Ic() {
    xO.A.openUrl("https://discord.com/blog/safer-for-teens-same-discord-for-adults");
}
var Ig = n(308645),
    Im = n(555725),
    IA = n(855267);
let IE = (0, d.E2)(c.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["16r9jm"])],
        Component: IA.A,
    }),
    Ih = (0, d.zZ)(c.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [IE] }),
    IS = (0, d.t_)(c.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => R.intl.string(R.t["16r9jm"]),
        buildLayout: () => [Ih],
    }),
    IT = (0, d.t0)(c.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => R.intl.string(R.t["16r9jm"]),
        useSubtitle: Im.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, Im._k)();
            return { type: m.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: m.xn.TEXT, text: (0, Im.aO)() };
        },
        initialize: () => {
            Ig.Yn();
        },
        buildLayout: () => [IS],
    }),
    Ip = (0, d.zZ)(c.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return R.intl.string(R.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e,
                t =
                    ((0, xR.H)(),
                    !(0, xR.b8)(),
                    (0, xX.fk)(),
                    (e = (0, h.bG)([xz.A], () => xz.A.getUserCountryCode())),
                    E.useEffect(() => {}, [!1, e]),
                    !1),
                n = xP(),
                [i, l] = (0, cS.kn)(t ? Iu : Id);
            return t && null != i
                ? {
                      type: m.lT.INLINE_NOTICE,
                      noticeType: "info",
                      text: R.intl.format(Io[n], { handleOnBlogHook: Ic }),
                      onDismiss: () => l(cb.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [...x7, IT],
    });
var Ix = n(738188),
    If = n(834981),
    II = n(987197),
    I_ = n(822585),
    IN = n(840387),
    IC = n(465558),
    Ib = n(513687);
let Iy = (0, d.E2)(c.X.FAMILY_CENTER_SETTING, {
        Component: IC.p,
        useSearchTerms: () => [
            R.intl.string(Ib.default.RZqaJn),
            R.intl.string(Ib.default.bdBmqy),
            R.intl.string(Ib.default["gVWG+6"]),
            R.intl.string(Ib.default.ahKIJO),
            R.intl.string(Ib.default["8SLtqb"]),
        ],
    }),
    Iv = (0, d.zZ)(c.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [Iy] }),
    Ij = (0, d.t_)(c.X.FAMILY_CENTER_PANEL, {
        useTitle: () => R.intl.string(Ib.default.RZqaJn),
        buildLayout: () => [Iv],
    }),
    IO = (0, d.zZ)(c.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => R.intl.string(Ib.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, II.f)(),
                t = (0, I_.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, If.VT)();
            return E.useMemo(() => (n ? { badgeType: m.Xi.WARNING } : { badgeType: m.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [IL],
    }),
    IL = (0, d.t0)(c.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, If.Li)() ? R.intl.string(Ib.default.IcMQUP) : R.intl.string(Ib.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, IN.Z)(),
                t = (0, If.Li)();
            return e
                ? t
                    ? R.intl.string(Ib.default.G8lHFU)
                    : R.intl.string(Ib.default.uOLNEZ)
                : R.intl.string(Ib.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, II.f)(),
                t = (0, I_.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: m.Xy.ICON,
                      icon: Ix.WarningIcon,
                      color: nQ.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: nQ.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [Ij],
    });
var IR = n(425587),
    ID = n(662758);
function IP(e) {
    if (e.body.code === S.t02.INVALID_PASSWORD) throw e;
    (0, sM.A)({ title: R.intl.string(R.t.LX0nT8), subtitle: e.body.message });
}
async function IG() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = sn.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await IR.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, sM.A)({
              title: R.intl.string(R.t["Y++oNe"]),
              subtitle: R.intl.format(R.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : lE.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, sM.A)({ title: R.intl.string(R.t.vJiTOL), subtitle: R.intl.string(R.t.UyVVan) })
          : t.isClaimed()
            ? (0, lr.openModal)((t) =>
                  (0, A.jsx)(ID.default, {
                      ...t,
                      handleSubmit: (t) => (0, S2.U_)(t, e).then(S.tEg, IP),
                      title: e ? R.intl.string(R.t.xca2ts) : R.intl.string(R.t.goXv9g),
                      actionText: e ? R.intl.string(R.t["8lQ2rR"]) : R.intl.string(R.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? R.intl.string(R.t.FB4H1D) : R.intl.string(R.t.gk7h32),
                  }),
              )
            : (0, nJ.A)({
                  title: R.intl.string(R.t.xca2ts),
                  subtitle: R.intl.string(R.t.FB4H1D),
                  confirmText: R.intl.string(R.t["8lQ2rR"]),
                  onConfirm: () => (0, S2.U_)("", !0),
              });
}
let IU = (0, d.Tf)(c.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => R.intl.string(R.t["gIpzR+"]),
        useSubtitle: () => R.intl.string(R.t.Bd6dOf),
        useLabel: () => R.intl.string(R.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => IG(!0),
    }),
    IM = (0, d.Tf)(c.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => R.intl.string(R.t["p/Tjtp"]),
        useSubtitle: () => R.intl.string(R.t.YvDmKb),
        useLabel: () => R.intl.string(R.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => IG(!1),
        usePredicate: () => {
            let e = (0, h.bG)([sn.default], () => sn.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    IV = (0, d.zZ)(c.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [IM, IU] }),
    Ik = (0, d.t_)(c.X.ACCOUNT_PANEL, {
        useTitle: () => R.intl.string(R.t["ldCE/p"]),
        initialize: function () {
            return () => {
                xb.A.clearBackupCodes(), (0, S2.Uo)();
            };
        },
        useObscuredNotice: a5.L,
        buildLayout: () => [fg, Ia, Ip, IO, IV],
    }),
    Iw = (0, d.i4)(c.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["ldCE/p"]),
        icon: gh.UserIcon,
        buildLayout: () => [Ik],
    });
var IF = n(176781),
    IB = n(341923),
    Iz = n(572164),
    IX = n(655180),
    IY = n(915725),
    IH = n(268378);
let IK = (0, d.zD)(c.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => R.intl.string(IH.default.j29uJx),
        useSubtitle: () => R.intl.format(IH.default.UCzGcQ, { learnMoreLink: ex.A.getArticleURL(S.MVz.CLIPS) }),
        useValue: () => (0, h.bG)([IY.Ay], () => IY.Ay.getEnableAutoclipping()),
        setValue: IX.uL,
        useDisabled: () => !(0, Iz.E)(),
    }),
    IW = (0, d.zY)(c.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [IK], headerSettingKey: IK.key }),
    IZ = (0, d.zZ)(c.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => R.intl.string(IH.default.XWkJoi),
        useSubtitle: () => R.intl.string(IH.default["MJ/VsO"]),
        usePredicate: IB.H,
        usePersistentBadge: () => ({ badgeType: m.Xi.BETA }),
        useInlineNotice: () =>
            (0, Iz.E)()
                ? null
                : {
                      type: m.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      text: R.intl.string(IH.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          text: R.intl.string(IH.default.qGgW4M),
                          onClick: () => IX.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [IW],
    });
var Iq = n(974293),
    IQ = n(696016);
let IJ = [IQ.zq, 25, 50, IQ.Y2, IQ.rv],
    I$ = (0, d.sN)(c.X.CLIPS_BITRATE, {
        usePredicate: () => (0, Iq.V0)("ClipsBitrateSetting"),
        useTitle: () => R.intl.string(R.t["8bZyov"]),
        useSubtitle: () => R.intl.string(R.t["h8DSx/"]),
        minValue: IQ.zq,
        maxValue: IQ.rv,
        useDefaultValue: () => IQ.Y2,
        getInitialValue: () => IY.Ay.getSettings().clipsQuality.bitratePercent ?? IQ.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = IY.Ay.getSettings();
            IX.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: IJ,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, Iz.E)(),
    });
var I0 = n(226640);
let I1 = (0, d.Hn)(c.X.CLIPS_FRAME_RATE, {
        useTitle: () => R.intl.string(R.t["2wScL1"]),
        useSubtitle: () => R.intl.string(R.t["Rf9+fy"]),
        useValue: () => (0, h.bG)([IY.Ay], () => IY.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = IY.Ay.getSettings();
            IX.GS({ ...t, frameRate: e });
        },
        useOptions: I0.Fz,
        useDisabled: () => !(0, Iz.E)(),
    }),
    I2 = (0, d.E2)(c.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [R.intl.string(R.t.SIxrIF)],
        usePredicate: () => (0, h.bG)([IY.Ay], () => IY.Ay.getHardwareClassification()) === IQ.k9.BELOW_MINIMUM,
        Component: () => (0, A.jsx)(lK.A, { look: lK.k.WARNING, children: R.intl.string(R.t.SIxrIF) }),
    }),
    I3 = (0, d.Hn)(c.X.CLIPS_LENGTH, {
        useTitle: () => R.intl.string(R.t.OgfUio),
        useSubtitle: () => R.intl.string(R.t.H7j4tY),
        useValue: () => (0, h.bG)([IY.Ay], () => IY.Ay.getSettings().clipsLength),
        setValue: (e) => IX.h$(e),
        useOptions: I0.Qu,
        useDisabled: () => !(0, Iz.E)(),
    }),
    I6 = (0, d.E2)(c.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [R.intl.string(R.t["Z+MfqT"])],
        Component: () => (0, A.jsx)(lK.A, { look: lK.k.INFO, children: R.intl.string(R.t["Z+MfqT"]) }),
    }),
    I5 = (0, d.Hn)(c.X.CLIPS_RESOLUTION, {
        useTitle: () => R.intl.string(R.t.aFudZJ),
        useSubtitle: () => R.intl.string(R.t.nIrkW5),
        useValue: () => (0, h.bG)([IY.Ay], () => IY.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = IY.Ay.getSettings();
            IX.GS({ ...t, resolution: e });
        },
        useOptions: I0.gF,
        useDisabled: () => !(0, Iz.E)(),
    }),
    I4 = (0, d.zD)(c.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => R.intl.string(R.t["3zwNf6"]),
        useSubtitle: () => R.intl.string(R.t.m4Cjj9),
        useValue: () => (0, h.bG)([IY.Ay], () => IY.Ay.getSettings().remindersEnabled),
        setValue: (e) => IX.Mt(e),
        useDisabled: () => !(0, Iz.E)(),
    }),
    I8 = (0, d.zZ)(c.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => R.intl.string(IH.default.TGwzMe),
        buildLayout: () => [I2, I3, I1, I5, I$, I6, I4],
    }),
    I7 = (0, d.zD)(c.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, h.bG)([IY.Ay], () => IY.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => IX.YP(e),
    }),
    I9 = (0, d.zD)(c.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, h.bG)([IY.Ay], () => IY.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => IX.Uh(e),
    }),
    _e = (0, d.zZ)(c.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, h.bG)([sn.default], () => {
                let e = sn.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [I7, I9],
    });
var _t = n(417270),
    _n = n(847825);
let _i = (0, d.E2)(c.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [R.intl.string(R.t.pf54EU), R.intl.string(R.t["QyB/jK"])],
        Component: () => {
            let e = (0, h.bG)([lG.Ay], () => lG.Ay.getKeybindForAction(S.hCu.SAVE_CLIP, !0));
            ta()(null != e, "Save clip keybind unset");
            let t = !(0, Iz.E)(),
                n = E.useRef(null),
                i = E.useCallback(
                    (t) => {
                        iz.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                l = E.useCallback(() => {
                    iz.A.setKeybind({ ...e, shortcut: (0, ll.OH)(IQ.Ot) });
                }, [e]);
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t.pf54EU),
                description: R.intl.string(R.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, A.jsx)("div", {
                    className: _n.g,
                    children: (0, A.jsx)(li.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, A.jsxs)(A.Fragment, {
                            children: [
                                (0, A.jsx)(le.m, {
                                    text: R.intl.string(IH.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, A.jsx)(i7.K, {
                                        icon: iF.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": R.intl.string(IH.default.bUtubv),
                                        onClick: (e) => {
                                            e.stopPropagation(), n.current?.toggleRecordMode();
                                        },
                                    }),
                                }),
                                (0, A.jsx)(le.m, {
                                    text: R.intl.string(IH.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, A.jsx)(i7.K, {
                                        icon: _t.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": R.intl.string(IH.default.Kyk1Tp),
                                        onClick: (e) => {
                                            e.stopPropagation(), l();
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
    _l = (0, d.E2)(c.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [R.intl.string(R.t["0U/hj7"]), R.intl.string(R.t["5zxkdo"])],
        usePredicate: lR.BW,
        Component: () => {
            let e = (0, h.bG)([lG.Ay], () => lG.Ay.getKeybindForAction(S.hCu.SAVE_CLIP, !0)),
                t = (0, h.bG)([lG.Ay], () => lG.Ay.getKeybindForAction(S.hCu.SAVE_SCREENSHOT, !0));
            ta()(null != e, "Save clip keybind unset"), ta()(null != t, "Save screenshot keybind unset");
            let n = E.useCallback(
                (e) => {
                    iz.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t["0U/hj7"]),
                description: R.intl.string(R.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, A.jsx)("div", {
                    className: _n.g,
                    children: (0, A.jsx)(li.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    _s = (0, d.zD)(c.X.CLIPS_ENABLE, {
        useTitle: () => R.intl.string(R.t.h8rgrK),
        useSubtitle: () => R.intl.string(R.t["4Qw3NO"]),
        useValue: () => (0, Iz.E)(),
        setValue: (e) => IX.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    _r = (0, d.zY)(c.X.CLIPS_GENERAL_CARD, { buildLayout: () => [_s, _i, _l], headerSettingKey: _s.key }),
    _a = (0, d.zZ)(c.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => R.intl.string(R.t["rWKv+e"]),
        useSubtitle: () => R.intl.format(IH.default["dh7g+S"], { learnMoreLink: ex.A.getArticleURL(S.MVz.CLIPS) }),
        buildLayout: () => [_r],
    }),
    _o = (0, d.E2)(c.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [R.intl.string(R.t.s4773E), R.intl.string(R.t.svjwGh)],
        Component: () => {
            let e = (0, h.bG)([IY.Ay], () => IY.Ay.getSettings().storageLocation),
                t = !(0, Iz.E)(),
                n = E.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await nh.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && IX.HU(e[0]);
                    } finally {
                        n.current = !1;
                    }
                }
            }
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t.s4773E),
                description: R.intl.string(R.t.svjwGh),
                layout: "vertical",
                children: (0, A.jsxs)(X.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, A.jsx)(la.k, {
                            fullWidth: !0,
                            value: e,
                            editable: !1,
                            disabled: t,
                            "aria-label": R.intl.formatToPlainString(R.t.iMONTj, { storageLocation: e }),
                        }),
                        (0, A.jsx)(_.$, {
                            variant: "secondary",
                            disabled: t,
                            onClick: i,
                            text: R.intl.string(IH.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    _u = (0, d.zZ)(c.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => R.intl.string(IH.default["0Q+pdZ"]),
        buildLayout: () => [_o],
    }),
    _d = (0, d.t_)(c.X.CLIPS_PANEL, {
        useTitle: () => R.intl.string(R.t.z2jK6X),
        usePredicate: lR.sw,
        buildLayout: () => [_a, IZ, I8, _u, _e],
    }),
    _c = (0, d.i4)(c.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.z2jK6X),
        icon: IF.x,
        buildLayout: () => [_d],
    });
var _g = n(254138),
    _m = n(290595),
    _A = n(153488),
    _E = n(308528),
    _h = n(171316),
    _S = n(558001);
n(866945);
var _T = n(835002);
function _p() {
    let e = (0, _h.uM)(),
        t = (0, If.vx)(),
        n = E.useCallback(() => {
            (0, tM.default)(),
                _E.A.openPrivateChannel({ recipientIds: t }),
                (0, _S.N)(_T.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _T.YX.LEARN_MORE);
        }, [t]),
        i = E.useCallback(() => {
            (0, _S.N)(_T.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _T.YX.VIEWED);
        }, []);
    return E.useMemo(() => {
        if (e)
            return {
                type: m.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: i,
                text: R.intl.format(Ib.default.i284fU, {
                    hook: (e, t) => (0, A.jsx)(aK.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let _x = (0, d.zD)(c.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => R.intl.string(R.t.AGDDkH),
    useSubtitle: () => R.intl.string(R.t.kyo3dJ),
    useValue: () => L.Q$.useSetting(),
    setValue: (e) => IX.eQ({ allowVoiceRecording: e }),
});
var _f = n(157559),
    _I = n(331887);
function __() {
    let e = (0, h.bG)([sn.default], () => sn.default.getCurrentUser()),
        t = (0, h.bG)([_I.A], () => _I.A.harvestType),
        [n, i] = E.useState(() => Date.now()),
        l = null == t ? n : new Date(t.created_at).getTime() + 2592e6,
        s = E.useRef(null);
    return (E.useEffect(() => {
        let e = l - Date.now();
        if (e > 0) {
            let t = setTimeout(() => i(Date.now()), e);
            clearTimeout(s.current), (s.current = t);
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
let _N = (0, d.Tf)(c.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => R.intl.string(R.t.qfFFos),
        useSubtitle: function () {
            let e = __();
            if (e.allowed) return R.intl.format(R.t.NRI6vt, { article: ex.A.getArticleURL(S.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return R.intl.string(R.t.hIbRso);
                case "not_verified":
                    return R.intl.format(R.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, A.jsx)(
                                nn.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, nl.openUserSettings)(c.X.ACCOUNT_INFO_EMAIL_SETTING),
                                    children: e,
                                },
                                t,
                            ),
                    });
                case "rate_limited": {
                    let t = ia()(e.nextAllowed).format("MMMM Do YYYY");
                    return R.intl.format(R.t["VLMG1+"], { date: t });
                }
                default:
                    return;
            }
        },
        initialize: () => {
            e5.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                e6.Bo.get({ url: S.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        e5.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        e5.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    });
        },
        useDisabled: () => !__().allowed,
        useLoading: () => (0, h.bG)([_I.A], () => _I.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => R.intl.string(R.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...i } = e;
                    (0, lr.openModalLazy)(async () => {
                        let { default: e } = await n.e("292063").then(n.bind(n, 970018));
                        return (n) => (0, A.jsx)(e, { modalProps: n, onConfirm: t });
                    }, i);
                })({
                    onConfirm: (n) => {
                        (t = !1),
                            (0, S2.$I)(n)
                                .then(
                                    (e) => (
                                        null != e &&
                                            null != e.body &&
                                            e5.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }),
                                        e
                                    ),
                                )
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? _f.A.show({
                                                  title: R.intl.string(R.t.i2iul5),
                                                  body: R.intl.string(R.t["6Nmv4i"]),
                                              })
                                            : _f.A.show({
                                                  title: R.intl.string(R.t.OjbtDm),
                                                  body: R.intl.string(R.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || R.intl.string(R.t["0F5Jyt"]);
                                        _f.A.show({ title: R.intl.string(R.t.OjbtDm), body: t });
                                    },
                                )
                                .finally(e);
                    },
                    onCloseCallback: () => {
                        t && e();
                    },
                });
            });
        },
    }),
    _C = (0, d.v_)(c.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => R.intl.string(R.t.D60Gfj),
        useSubtitle: () =>
            R.intl.format(R.t.dszICC, {
                onClickDisable: () => (0, nl.openUserSettings)(c.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, nl.openUserSettings)(c.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var _b = n(972737);
let _y = (0, d.zD)(c.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => R.intl.string(R.t.MNKzyg),
        useSubtitle: () =>
            R.intl.format(R.t["2SiYln"], { helpdeskArticle: ex.A.getArticleURL(S.MVz.DATA_USED_FOR_RECOMMENDED) }),
        useValue: function () {
            return (0, h.bG)([_A.A], () => _A.A.hasConsented(S.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, _m.U)([S.YAq.PERSONALIZATION], []).catch(_b.i)
                : (0, _b.O)({
                      header: R.intl.string(R.t["9SNpzv"]),
                      confirmText: R.intl.string(R.t["9g5UGw"]),
                      cancelText: R.intl.string(R.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, _m.U)([], [S.YAq.PERSONALIZATION]).catch(_b.i);
                      },
                      body: R.intl.string(R.t.gJvDDh),
                  });
        },
        useDisabled: _h.uM,
    }),
    _v = (0, A8.mj)({
        kind: "user",
        name: "2026-08-ad-topic-opt-out-client",
        defaultConfig: { enabled: !1 },
        variations: {
            1: { enabled: !1 },
            2: { enabled: !0 },
            3: { enabled: !0 },
            4: { enabled: !0 },
            5: { enabled: !0 },
        },
    });
function _j() {
    let { enabled: e } = _v.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var _O = n(884705);
function _L() {
    return (0, h.bG)([_O.A], () => _O.A.isTogglesDisabled());
}
function _R() {
    return !L.vf.useSetting();
}
function _D(e) {
    L.vf.updateSetting(!e);
}
function _P() {
    let e = _L(),
        t = L.H1.useSetting(),
        n = (0, _h.uM)();
    return e || t || n;
}
let _G = (0, d.zD)(c.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => R.intl.string(R.t.CyLYKZ),
        useSubtitle: () =>
            R.intl.format(R.t["md5l4/"], { helpdeskArticle: ex.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !_j(),
        useValue: _R,
        setValue: _D,
        useDisabled: _P,
        useSearchTerms: () => [R.intl.string(R.t.CyLYKZ)],
    }),
    _U = (0, d.zD)(c.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => R.intl.string(R.t.CyLYKZ),
        useSubtitle: () =>
            R.intl.format(R.t["2QFDU/"], { helpdeskArticle: ex.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: _j,
        useValue: _R,
        setValue: _D,
        useDisabled: _P,
        useSearchTerms: () => [R.intl.string(R.t.CyLYKZ)],
    });
function _M() {
    return !L.H1.useSetting();
}
function _V(e) {
    L.H1.updateSetting(!e);
}
function _k() {
    let e = _L(),
        t = (0, _h.uM)();
    return e || t;
}
let _w = (0, d.zD)(c.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => R.intl.string(R.t.sJYh5t),
        useSubtitle: () => R.intl.string(R.t.w4fvxe),
        usePredicate: () => !_j(),
        useValue: _M,
        setValue: _V,
        useSearchTerms: () => [R.intl.string(R.t.VkS7Yd)],
        useDisabled: _k,
    }),
    _F = (0, d.zD)(c.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => R.intl.string(R.t.sJYh5t),
        useSubtitle: () =>
            R.intl.format(R.t.cf9mvV, { helpdeskArticle: ex.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: _j,
        useValue: _M,
        setValue: _V,
        useSearchTerms: () => [R.intl.string(R.t.VkS7Yd)],
        useDisabled: _k,
    }),
    _B = (0, d.AK)(c.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: c.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = AZ(2);
            return R.intl.format(R.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = Aq();
            return { type: m.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, h.bG)([iq.Ay], () => iq.Ay.getGamesSeen(!1).some((e) => !(0, Az.n1)(e))) && (0, nm.xl)(),
    }),
    _z = (0, d.gN)(c.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [_B] }),
    _X = (0, d.zD)(c.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => R.intl.string(R.t.XuADY2),
        useSubtitle: () =>
            R.intl.format(R.t.FNqmmX, { helpdeskArticle: ex.A.getArticleURL(S.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, h.bG)([_A.A], () => _A.A.hasConsented(S.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, _m.U)([S.YAq.USAGE_STATISTICS], []).catch(_b.i)
                : (0, _b.O)({
                      header: R.intl.string(R.t.OdPCbN),
                      body: R.intl.string(R.t.MGWabA),
                      confirmText: R.intl.string(R.t["D3+rU4"]),
                      cancelText: R.intl.string(R.t.kYpG0u),
                      onConfirm: () => (0, _m.U)([], [S.YAq.USAGE_STATISTICS]).catch(_b.i),
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t.XuADY2)],
        useDisabled: _h.uM,
    }),
    _Y = (0, d.zZ)(c.X.DATA_USAGE_CATEGORY, {
        useTitle: () => R.intl.string(R.t.QDAriI),
        useInlineNotice: _p,
        initialize: () => {
            _A.A.fetchedConsents || (0, _m.Q)();
        },
        buildLayout: () => [_C, _X, _y, _w, _G, _x, _N, _z],
    });
var _H = n(15762);
let _K = (0, d.zD)(c.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => R.intl.string(_H.default.F3llsQ),
    useSubtitle: () => R.intl.string(_H.default["6goWcz"]),
    useValue: L.Sy.useSetting,
    setValue: function (e) {
        L.Sy.updateSetting(e),
            tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: A1.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            });
    },
});
function _W() {
    let e = L.JG.useSetting();
    return (0, h.yK)([dA.Ay, lE.A], () => {
        let t = new Set(e);
        return dA.Ay.getFlattenedGuildIds().filter((e) => null != lE.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let _Z = (0, d.AK)(c.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = _W();
            if (0 === e.length) return R.intl.format(R.t.QJIJ5p, {});
            let t = lE.A.getGuild(e[0]),
                n = t?.name ?? "",
                i = e.length - 1;
            return 0 === i
                ? R.intl.format(R.t["T+8J4A"], { guildName: n })
                : R.intl.format(R.t["3JyODQ"], { guildName: n, count: i });
        },
        useTrailingDecoration: function () {
            let e,
                t,
                n =
                    ((e = _W()),
                    0 ===
                    (t = (0, h.yK)(
                        [lE.A],
                        () =>
                            e
                                .slice(0, 2)
                                .map((e) => lE.A.getGuild(e))
                                .filter((e) => null != e),
                        [e],
                    )).length
                        ? null
                        : t.length >= 2
                          ? {
                                frontIcon: {
                                    icon: (0, A.jsx)(Es, { guild: t[0], size: AX.CD }),
                                    shape: AX.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, A.jsx)(Es, { guild: t[1], size: AX.CD }), shape: AX.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, A.jsx)(Es, { guild: t[0], size: AX.CD }),
                                    shape: AX.e0.SQUIRCLE,
                                },
                            });
            return { type: m.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: c.X.ACTIVITY_PRIVACY_PANEL,
    }),
    _q = (0, d.gN)(c.X.PROFILE_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, A6.lX)("ProfilePrivacyRelatedSettings"),
        buildLayout: () => [_Z],
    }),
    _Q = (0, d.Qx)(c.X.PROFILE_PRIVACY_SETTING, {
        usePredicate: () => (0, A6.lX)("ProfilePrivacySetting"),
        useTitle: () => R.intl.string(R.t.Qnf32C),
        useOptions: function () {
            return [
                {
                    name: R.intl.string(R.t.Boxc8R),
                    desc: R.intl.string(R.t["nLj+nc"]),
                    value: eB.KP.FRIENDS_AND_ALL_GUILDS,
                },
                {
                    name: R.intl.string(R.t.YOIKBt),
                    desc: R.intl.string(R.t.y0JZ4s),
                    value: eB.KP.FRIENDS_AND_SMALL_GUILDS,
                },
                { name: R.intl.string(R.t.u0nlJv), desc: R.intl.string(R.t["4jnKHu"]), value: eB.KP.FRIENDS_ONLY },
            ];
        },
        useValue: L.KP.useSetting,
        setValue: function (e) {
            let t = L.KP.getSetting();
            if ((L.KP.updateSetting(e), !(0, A6.W1)("ProfilePrivacySetting"))) return;
            let i = (0, A9.gS)(t, e);
            null != i &&
                (0, lr.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("763786")]).then(
                        n.bind(n, 413201),
                    );
                    return (t) =>
                        (0, A.jsx)(e, {
                            ...t,
                            direction: i.direction,
                            affectedGuildIds: i.affectedGuildIds,
                            settingName: i.settingName,
                            mappedActivityValue: i.mappedActivityValue,
                        });
                });
        },
        useSearchTerms: () => [R.intl.string(R.t.Qnf32C)],
    }),
    _J = (0, d.zZ)(c.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.ul884f),
        useSubtitle: () =>
            R.intl.format(R.t.N4jSgR, {
                learnMoreUrl: ex.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [_Q, _K, _q],
    });
var _$ = n(678538);
let _0 = { [eB.tR.REAL_MONEY_GAMING]: _$.default.pmIitA },
    _1 = Object.keys(_0).map(Number),
    _2 = (0, d.E2)(c.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [R.intl.string(_$.default.foQaI1)],
        usePredicate: _j,
        Component: function () {
            let e = E.useMemo(
                    () =>
                        _1.map((e) => ({
                            id: String(e),
                            value: e,
                            label: R.intl.string(_0[e]),
                            leading: SR.EyeSlashIcon,
                        })),
                    [],
                ),
                t = L.XZ.useSetting();
            return (0, A.jsx)(SX.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(L.XZ.getSetting());
                    for (let e of _1) t.has(e) ? n.add(e) : n.delete(e);
                    L.XZ.updateSetting([...n]);
                },
                label: R.intl.string(_$.default.foQaI1),
                description: R.intl.format(_$.default["z/MfaY"], {
                    helpdeskArticle: ex.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS),
                }),
                layout: "vertical",
                placeholder: R.intl.string(_$.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    _3 = (0, d.zZ)(c.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => R.intl.string(_$.default.XUj46U),
        usePredicate: _j,
        buildLayout: () => [_F, _U, _2],
    });
var _6 = n(936388),
    _5 = n(714763),
    _4 = n(814278);
let _8 = (0, d.zD)(c.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => R.intl.string(R.t["opi/XK"]),
    useSubtitle: () => R.intl.format(R.t["/T+ZlP"], { helpArticle: (0, _4.Lu)() }),
    useValue: function () {
        return (0, h.bG)([_5.A], () => _5.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        _6.A.updatePersistentCodesEnabled(e);
    },
});
var _7 = n(787392);
function _9() {
    return (0, h.yK)([_7.A], () => _7.A.getUserIds());
}
var Ne = n(803306),
    Nt = n(966327),
    Nn = n(774156);
function Ni(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, eP.Ay)(),
        l = (0, h.bG)([sn.default], () => sn.default.getUser(t)),
        s = T4.Ay.getFormattedName(l),
        r = E.useCallback(() => {
            (0, _4.kj)(t);
        }, [t]),
        a = E.useCallback(() => (0, S8.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        E.useEffect(() => {
            (0, Ne.getUser)(t);
        }, [t]),
        (0, A.jsxs)("div", {
            className: Nn.uW,
            children: [
                null != l && (0, A.jsx)(Nt.A, { className: Nn.my, user: l, size: I._3.SIZE_40 }),
                (0, A.jsxs)("div", {
                    className: Nn.Qq,
                    children: [
                        (0, A.jsx)(nn.D, {
                            className: Nn.Xh,
                            onClick: a,
                            children: (0, A.jsx)(H.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: s,
                            }),
                        }),
                        (0, A.jsx)(H.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: R.intl.format(R.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, A.jsx)(nn.D, { onClick: r, className: Nn.Qz, children: (0, A.jsx)(i9.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function Nl(e) {
    let { className: t, userId: n, verification: i, index: l } = e,
        s = (0, _4.tC)(i.timestamp),
        r = E.useCallback(() => {
            (0, _4.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, A.jsxs)("div", {
        className: t,
        children: [
            (0, A.jsxs)("div", {
                className: Nn.Qq,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: R.intl.format(R.t.N4qBBO, { index: l + 1 }),
                    }),
                    (0, A.jsx)(H.E, { variant: "text-sm/medium", color: "text-default", children: s }),
                ],
            }),
            (0, A.jsx)(nn.D, {
                className: Nn.Kk,
                onClick: r,
                children: (0, A.jsx)(Eb.P, { size: "md", color: nQ.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function Ns(e) {
    let { userId: t } = e,
        n = (0, h.yK)([_7.A], () =>
            B()(_7.A.getUserVerifiedKeys(t))
                .entries()
                .map((e) => {
                    let [t, n] = e;
                    return { verifiedKey: t, timestamp: n };
                })
                .sortBy((e) => -1 * e.timestamp)
                .value(),
        );
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsx)(Ni, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, A.jsxs)(
                    E.Fragment,
                    {
                        children: [
                            (0, A.jsx)(Nl, { className: Nn.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, A.jsx)("div", { className: Nn.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var Nr = n(464946),
    Na = n(492422);
let No = (0, d.E2)(c.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["5b3FNI"])],
        usePredicate: function () {
            let e = _9();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = _9();
            return (0, A.jsxs)(Nr.h, {
                children: [
                    (0, A.jsx)(Nr._, {
                        header: R.intl.string(R.t["5b3FNI"]),
                        description: R.intl.format(R.t.jrTSWU, { helpArticle: (0, _4.dc)() }),
                    }),
                    e.map((e) => (0, A.jsx)("div", { className: Na.A, children: (0, A.jsx)(Ns, { userId: e }) }, e)),
                ],
            });
        },
    }),
    Nu = (0, d.zZ)(c.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.bTwjaz),
        usePredicate: () => (0, eQ.isDesktop)(),
        buildLayout: () => [_8, No],
    }),
    Nd = (0, d.t_)(c.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => R.intl.string(R.t.OAuOHD),
        buildLayout: () => [_Y, _3, _J, Nu],
    }),
    Nc = (0, d.i4)(c.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.OAuOHD),
        icon: _g.m,
        buildLayout: () => [Nd],
    });
var Ng = n(476713);
let Nm = (0, d.AK)(c.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.O65dzZ),
        useTitle: () => R.intl.string(R.t["f6kk+r"]),
        destinationKey: c.X.AUTHORIZED_APPS_CATEGORY,
    }),
    NA = (0, d.gN)(c.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [Nm] });
var NE = n(875444);
function Nh(e, t) {
    let n = (0, h.bG)([EM.default], () => EM.default.getFetchState()),
        i = (0, h.bG)([EM.default], () =>
            e ? EM.default.getNewestTokensForNonChildrenApplications() : EM.default.getNewestTokens(),
        ),
        l = E.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, NE.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        E.useEffect(() => {
            t || Ef.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== EM.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: l }
    );
}
var NS = n(514479);
function NT() {
    return (0, A.jsxs)("div", {
        className: NS.d,
        children: [
            (0, A.jsx)(H.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: NS.x,
                children: R.intl.string(R.t["+0U77d"]),
            }),
            (0, A.jsx)(H.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: R.intl.format(R.t.V8wClM, {
                    helpdeskArticle: ex.A.getArticleURL(S.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
let Np = (0, d.E2)(c.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = Nh(!0, !0);
        return e ? (0, A.jsx)(a8.y, {}) : (0, A.jsx)(NT, {});
    },
    useSearchTerms: () => [R.intl.string(R.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = Nh(!0, !0);
        return e || 0 === t.length;
    },
});
function Nx() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = Nh(!0, !0);
    return !e && t.length > 0;
}
let Nf = (0, d.zD)(c.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => R.intl.string(R.t.W8JtfT),
        useSubtitle: () => R.intl.string(R.t.a99KKy),
        useSearchTerms: () => [R.intl.string(R.t["Uv/eTx"])],
        useValue: () => L.Zk.useSetting(),
        setValue: (e) => L.Zk.updateSetting(e),
        usePredicate: Nx,
    }),
    NI = (0, d.Qx)(c.X.IN_GAME_DMS_SETTING, {
        useTitle: () => R.intl.string(R.t["ms+Tme"]),
        useSubtitle: () => R.intl.string(R.t["0ryspy"]),
        useOptions: function () {
            return [
                { name: R.intl.string(R.t.JIFnN9), value: eB.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
                { name: R.intl.string(R.t.rRdsk1), value: eB.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
                { name: R.intl.string(R.t.IVRPMX), value: eB.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
            ];
        },
        useValue: function () {
            let e = L.TA.useSetting();
            return e === eB.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? eB.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => L.TA.updateSetting(e),
        usePredicate: Nx,
    });
function N_() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = Nh(!0, !0);
    return {
        sortedGames: E.useMemo(() => e.toSorted((e, t) => ou.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var NN = n(687123),
    NC = n(444802);
function Nb() {
    let e = (0, NC.WX)();
    E.useEffect(() => {
        (0, _S.N)(_T.YA.AGE_CONFIRMATION_NOTICE, _T.YX.VIEWED);
    }, []);
    let t = E.useCallback(() => {
            window.open(ex.A.getArticleURL(e), "_blank"), (0, _S.N)(_T.YA.AGE_CONFIRMATION_NOTICE, _T.YX.LEARN_MORE);
        }, [e]),
        n = E.useCallback(() => {
            xO.A.showAgeVerificationGetStartedModal({ entryPoint: xL.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _S.N)(_T.YA.AGE_CONFIRMATION_NOTICE, _T.YX.CONFIRM_AGE);
        }, []);
    return (0, A.jsx)(rJ.p, {
        messageType: rJ.Y.INFO,
        action: (0, A.jsx)(Af.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: R.intl.string(R.t.FDSSia),
            onClick: n,
        }),
        children: R.intl.format(R.t.mFgsfg, { hook: (e, n) => (0, A.jsx)(aK.Anchor, { onClick: t, children: e }, n) }),
    });
}
function Ny() {
    let e = (0, xX.aX)(NN.t.REACTIVE_CHECK),
        t = (0, xR.b8)();
    return E.useMemo(() => {
        if (e && !t) return { type: m.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: Nb };
    }, [e, t]);
}
var Nv = n(323073),
    Nj = n(386171),
    NO = n(96607);
let NL = (0, d.zD)(c.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => R.intl.string(R.t.gvC6q7),
        useSubtitle: () => R.intl.string(R.t.zirUC1),
        useValue: Nj.hT,
        useDisabled: function () {
            let e = (0, NO.A)() ?? !0,
                t = (0, Nv.sP)(),
                n = (0, xR.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, Nv.p5)() && e
                ? xO.A.showAgeVerificationGetStartedModal({ entryPoint: xL.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : L.Qe.updateSetting(e);
        },
    }),
    NR = (0, d.zD)(c.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => R.intl.string(R.t["L+yTsa"]),
        useSubtitle: () => R.intl.string(R.t["t6i/jW"]),
        useValue: Nj.tI,
        useDisabled: function () {
            let e = (0, NO.A)() ?? !0,
                t = (0, Nv.sP)(),
                n = (0, xR.yM)();
            return E.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, Nv.p5)() && e
                ? xO.A.showAgeVerificationGetStartedModal({ entryPoint: xL.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : L.Kg.updateSetting(e);
        },
    }),
    ND = (0, d.AK)(c.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.hOXd45),
        destinationKey: c.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    NP = (0, d.gN)(c.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [ND] });
n(667532);
var NG = n(390248),
    NU = n(632119),
    NM = n(945276),
    NV = n(389737),
    Nk = n(566769);
function Nw() {
    let e,
        t = (0, NM.A)() ?? !0,
        n = (0, _h.uM)(),
        i = (0, _h.uM)(),
        {
            explicitContentGuilds: l,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: r,
        } = ((e = (0, aH.cf)([ao.A], () => ao.A.settings.textAndImages?.explicitContentSettings ?? (0, NU.C$)())),
        {
            explicitContentGuilds: (0, NU.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, NU.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, NU.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, NG.hK)() && t.includes(eB.TO.SHOW)
            ? xO.A.showAgeVerificationGetStartedModal({ entryPoint: xL.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, NU.Jz)(e);
    }
    let o = [
            { value: eB.TO.BLUR, label: R.intl.string(R.t.S49Uad) },
            { value: eB.TO.BLOCK, label: R.intl.string(R.t["D/157Y"]) },
        ],
        u = [{ value: eB.TO.BLUR, label: R.intl.string(R.t.S49Uad) }],
        d = { value: eB.TO.SHOW, label: R.intl.string(R.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? R.intl.string(Ib.default["6Af/cw"]) : void 0 };
    return (0, A.jsxs)(NV.E, {
        description: R.intl.string(R.t.Wnojv1),
        children: [
            (0, A.jsx)(Nk.A, {
                title: R.intl.string(R.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(Nk.A, {
                title: R.intl.string(R.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(Nk.A, {
                title: R.intl.string(R.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? R.intl.string(Ib.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function NF() {
    let e,
        t = (0, NM.A)() ?? !0,
        n = (0, _h.uM)(),
        i = (0, _h.uM)(),
        {
            goreContentGuilds: l,
            goreContentFriendDm: s,
            goreContentNonFriendDm: r,
        } = ((e = (0, aH.cf)([ao.A], () => ao.A.settings.textAndImages?.goreContentSettings ?? (0, NC.T4)())),
        {
            goreContentGuilds: (0, NC.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, NC.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, NC.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, NG.hK)() && t.includes(eB.TO.SHOW)
            ? xO.A.showAgeVerificationGetStartedModal({ entryPoint: xL.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, NC.qY)(e);
    }
    let o = [
            { value: eB.TO.BLUR, label: R.intl.string(R.t.S49Uad) },
            { value: eB.TO.BLOCK, label: R.intl.string(R.t["D/157Y"]) },
        ],
        u = [{ value: eB.TO.BLUR, label: R.intl.string(R.t.S49Uad) }],
        d = { value: eB.TO.SHOW, label: R.intl.string(R.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? R.intl.string(Ib.default["6Af/cw"]) : void 0 };
    return (0, A.jsxs)(NV.E, {
        description: R.intl.string(R.t.XgH9eh),
        children: [
            (0, A.jsx)(Nk.A, {
                title: R.intl.string(R.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(Nk.A, {
                title: R.intl.string(R.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(Nk.A, {
                title: R.intl.string(R.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? R.intl.string(Ib.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var NB = n(875162),
    Nz = n(636745);
let NX = (0, d.E2)(c.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, NC.WX)(),
            t = E.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: R.intl.string(R.t.GYpoAq),
                        component: Nw,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: R.intl.string(R.t["16/3Bi"]),
                        component: NF,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, A.jsxs)(Nr.h, {
            children: [
                (0, A.jsx)(Nr._, {
                    header: R.intl.string(R.t["Hj/But"]),
                    description: R.intl.format(R.t.dliU4j, { learnMoreLink: ex.A.getArticleURL(e) }),
                }),
                (0, A.jsx)(NB.A, { tabs: t, orientation: "vertical", tabsClassName: Nz.v }),
            ],
        });
    },
    useSearchTerms: () => [
        R.intl.string(R.t["Hj/But"]),
        R.intl.string(R.t["N/oRI+"]),
        R.intl.string(R.t.QVdYsK),
        R.intl.string(R.t["aWD+tu"]),
        R.intl.string(R.t["5mnTa7"]),
        R.intl.string(R.t["K0OWP+"]),
    ],
});
var NY = n(639555),
    NH = n(617641),
    NK = n(546140),
    NW = n(406935),
    NZ = n(594061);
let Nq = (0, d.zD)(c.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => R.intl.string(R.t.qFsx5q),
        useSubtitle: () => R.intl.format(R.t.lunaRv, { learnMoreLink: ex.A.getArticleURL(S.MVz.SAFETY_ALERTS) }),
        useValue: NK.L,
        setValue: function (e) {
            return NZ.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = NW._t.create({ value: e });
                },
                NZ.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, NH.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, NY.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, NM.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    NQ = (0, d.zZ)(c.X.CONTENT_CATEGORY, {
        useTitle: () => R.intl.string(R.t["3upKU8"]),
        useInlineNotice: function () {
            let e,
                t,
                n,
                i,
                l,
                s,
                r,
                a,
                o,
                u = _p(),
                d =
                    ((e = (0, IN.Z)()),
                    (t = (0, NC.WX)()),
                    (n = E.useCallback(() => {
                        window.open(ex.A.getArticleURL(t), "_blank"),
                            (0, _S.N)(_T.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _T.YX.LEARN_MORE);
                    }, [t])),
                    (i = E.useCallback(() => {
                        (0, _S.N)(_T.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _T.YX.VIEWED);
                    }, [])),
                    E.useMemo(() => {
                        if (e)
                            return {
                                type: m.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: i,
                                text: R.intl.format(R.t.EUo0yj, {
                                    hook: (e, t) => (0, A.jsx)(aK.Anchor, { onClick: n, children: e }, t),
                                }),
                            };
                    }, [n, e, i])),
                c =
                    ((l = (0, xX.SJ)()),
                    (s = (0, xR.b8)()),
                    (r = l && !s),
                    (a = E.useCallback(() => {
                        xO.A.showAgeVerificationGetStartedModal({ entryPoint: xL.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _S.N)(_T.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _T.YX.LEARN_MORE);
                    }, [])),
                    (o = E.useCallback(() => {
                        (0, _S.N)(_T.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _T.YX.VIEWED);
                    }, [])),
                    E.useMemo(() => {
                        if (r)
                            return {
                                type: m.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                text: R.intl.format(R.t.OX4ybh, {
                                    hook: (e, t) => (0, A.jsx)(aK.Anchor, { onClick: a, children: e }, t),
                                }),
                            };
                    }, [a, r, o])),
                g = Ny();
            return u ?? g ?? c ?? d;
        },
        buildLayout: () => [NX, Nq, NL, NR, NP],
    });
var NJ = n(923457),
    N$ = n(750714);
let N0 = (0, d.Qx)(c.X.DM_SPAM_SETTING, {
    useTitle: () => R.intl.string(R.t.puwSkY),
    useSubtitle: () => R.intl.string(R.t["+sXN3T"]),
    useValue: function () {
        let e = L.he.useSetting(),
            t = L.cj.useSetting(),
            n = (0, h.bG)([sn.default], () => sn.default.getCurrentUser()),
            i = (0, xX.yv)(NJ.p.SPAM_FILTERS);
        return e !== eB.he.DEFAULT_UNSET
            ? e
            : n?.nsfwAllowed === !1 && i
              ? eB.he.FRIENDS_AND_NON_FRIENDS
              : (N$.xY.get(t) ?? eB.he.NON_FRIENDS);
    },
    setValue: (e) => L.he.updateSetting(e),
    useOptions: function () {
        return [
            { name: R.intl.string(R.t["+w5yKk"]), value: eB.he.FRIENDS_AND_NON_FRIENDS },
            { name: R.intl.string(R.t.yAPg6r), value: eB.he.NON_FRIENDS },
            { name: R.intl.string(R.t.FEXKsv), value: eB.he.DISABLED },
        ];
    },
    useSearchTerms: () => [R.intl.string(R.t.JzaP4h), R.intl.string(R.t.H9XOl3), R.intl.string(R.t.k4W40P)],
});
var N1 = n(189883);
let N2 = (0, d.zD)(c.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => R.intl.string(R.t["7x9dyE"]),
    useValue: function () {
        let e = L.FA.useSetting();
        return E.useMemo(() => (0, n4.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        L.FA.updateSetting(e ? S.yKI : S.yKI & ~S.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, _h.uM)();
    },
});
var N3 = n(665260);
let N6 = (0, d.zD)(c.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => R.intl.string(R.t.NfeuZ3),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = E.useMemo(() => (0, n4.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? N3.UI(t, S.dzt.MUTUAL_FRIENDS) : N3.iE(t, S.dzt.MUTUAL_FRIENDS, S.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _h.uM)();
        },
    }),
    N5 = (0, d.zD)(c.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => R.intl.string(R.t.qsMfsH),
        useSubtitle: () => R.intl.string(R.t["6DqAp0"]),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = E.useMemo(() => (0, n4.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? N3.UI(t, S.dzt.MUTUAL_GUILDS) : N3.iE(t, S.dzt.MUTUAL_GUILDS, S.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _h.uM)();
        },
    }),
    N4 = (0, d.FW)(c.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => R.intl.string(R.t.wTdS6S),
        buildLayout: () => [N2, N6, N5],
    });
var N8 = n(420825);
let N7 = (0, d.zD)(c.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => R.intl.string(R.t["jK+wdr"]),
        useSubtitle: () => R.intl.string(R.t["RYh/pW"]),
        useValue: () => !(0, N8.q)(),
        setValue: function (e) {
            L.Zd.updateSetting(!e);
        },
        usePersistentBadge: () => ({ badgeType: m.Xi.BETA }),
    }),
    N9 = (0, d.zZ)(c.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["5gxWrt"]),
        useSubtitle: function () {
            let { enabled: e } = N1.A.useConfig({ location: "Friend Request Setting" });
            return e ? R.intl.string(R.t.QVbF3l) : void 0;
        },
        useSubnavLabel: () => R.intl.string(R.t.fyA115),
        useInlineNotice: _p,
        buildLayout: () => [N4, N7],
    });
var Ce = n(994500),
    Ct = n(428678),
    Cn = n(717398),
    Ci = n(730134),
    Cl = n(276573);
function Cs(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, A.jsxs)("div", {
        className: Cl.wx,
        children: [
            (0, A.jsx)("div", {
                className: Cl.zc,
                children: i ? (0, A.jsx)(Ct.K, {}) : (0, A.jsx)(SR.EyeSlashIcon, {}),
            }),
            (0, A.jsxs)("div", {
                className: Cl.Qq,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: R.intl.string(i ? R.t.PFOUKW : R.t["93ZDWE"]),
                    }),
                    (0, A.jsx)(H.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: i
                            ? R.intl.format(R.t["r91W/h"], { numberOfBlockedUsers: n })
                            : R.intl.format(R.t.rXUeOl, { numberOfIgnoredUsers: n }),
                    }),
                ],
            }),
        ],
    });
}
function Cr(e) {
    let { userId: t, last: n } = e,
        i = (0, h.bG)([Ce.A], () => Ce.A.isBlocked(t)),
        l = (0, h.bG)([sn.default], () => sn.default.getUser(t)),
        [s, r] = E.useState(!1),
        a = E.useCallback(() => {
            r(!0),
                i
                    ? Cn.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : Cn.A.unignoreUser(t, tL.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [i, t]);
    return null == l
        ? null
        : (0, A.jsxs)("div", {
              className: is()(Cl.nM, { [Cl.fW]: n }),
              children: [
                  (0, A.jsxs)("div", {
                      className: Cl.eF,
                      children: [
                          (0, A.jsx)(Ci.A, { user: l, size: I._3.SIZE_40 }),
                          (0, A.jsxs)("div", {
                              className: Cl.Qq,
                              children: [
                                  (0, A.jsx)(H.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: l.globalName ?? l.username,
                                  }),
                                  (0, A.jsx)(H.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != l.globalName ? l.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, A.jsx)(_.$, {
                      variant: "secondary",
                      text: R.intl.string(i ? R.t.XyHpKH : R.t["8wXU9B"]),
                      onClick: a,
                      loading: s,
                  }),
              ],
          });
}
function Ca(e) {
    let { userIds: t, listType: n } = e,
        [i, l] = E.useState(5);
    return (0, A.jsx)(Nr.h, {
        children: (0, A.jsxs)("div", {
            className: Cl.Nr,
            children: [
                (0, A.jsx)(Cs, { listType: n, numberOfUsers: t.length }),
                (0, A.jsx)("div", {
                    className: Cl.jS,
                    children: t.slice(0, i).map((e, n) => (0, A.jsx)(Cr, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, A.jsx)("div", {
                          className: Cl.vM,
                          children: (0, A.jsx)(nn.D, {
                              onClick: function () {
                                  l((e) => e + 5);
                              },
                              className: Cl.Qf,
                              children: (0, A.jsx)(H.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: R.intl.format(R.t.jULEDr, {
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
let Co = (0, d.E2)(c.X.BLOCKED_USERS, {
        useSearchTerms: () => [R.intl.string(R.t.PFOUKW)],
        usePredicate: () => (0, h.bG)([Ce.A], () => Ce.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, h.yK)([Ce.A], () => Ce.A.getBlockedIDs());
            return (0, A.jsx)(Ca, { userIds: e, listType: "blocked" });
        },
    }),
    Cu = (0, d.E2)(c.X.IGNORED_USERS, {
        useSearchTerms: () => [R.intl.string(R.t["93ZDWE"])],
        usePredicate: () => (0, h.bG)([Ce.A], () => Ce.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, h.yK)([Ce.A], () => Ce.A.getIgnoredIDs());
            return (0, A.jsx)(Ca, { userIds: e, listType: "ignored" });
        },
    }),
    Cd = (0, d.zZ)(c.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["+Iryf3"]),
        useSubtitle: () =>
            R.intl.format(R.t["0aNQo9"], { helpArticle: ex.A.getArticleURL(S.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [Co, Cu],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, h.cf)([Ce.A], () => ({
                hasBlockedUsers: Ce.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: Ce.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var Cc = n(22385),
    Cg = n(556534),
    Cm = n(111159),
    CA = n(152056),
    CE = n(978433);
let Ch = { label: () => R.intl.string(R.t["32u1Dx"]), value: Cc.YG };
var CS = n(307863),
    CT = n(428031),
    Cp = n(954225);
function Cx() {
    let e = (0, Cg.Tx)(),
        t = (0, Cg.q9)(),
        n = (0, CS.e)();
    return e === Cc.YG
        ? n
            ? R.intl.string(R.t.XXGmuB)
            : R.intl.string(R.t.wbYDfT)
        : t
          ? R.intl.string(R.t.V0ka0Q)
          : n
            ? R.intl.string(R.t.F9WY3f)
            : R.intl.string(R.t.G7c3Xo);
}
function Cf(e, t) {
    tt.default.track(S.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let CI = (0, d.zD)(c.X.PERMISSIONS_DMS_SETTING, {
    useTitle: Cx,
    useValue: function () {
        let e = (0, Cg.Tx)(),
            t = L.$s.useSetting().includes(e),
            n = (0, CT.K)();
        return e === Cc.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, _h.uM)();
        return (0, Cg.Tx)() === Cc.YG && e;
    },
    setValue: function (e) {
        let t = Cc.xk.getState().selectedGuildId;
        if (t === Cc.YG) {
            var n;
            (n = !e),
                (0, _b.O)({
                    header: R.intl.string(R.t["uUr+GR"]),
                    body: R.intl.string(R.t.hjGJBp),
                    confirmText: R.intl.string(R.t.gm1Vej),
                    cancelText: R.intl.string(R.t.p89ACt),
                    confirmButtonColor: sV.$n.Colors.BRAND,
                    onConfirm: function () {
                        L.n6.updateSetting(n), Cf(n, !1);
                    },
                    onCancel: function () {
                        L.n6.updateSetting(n), L.$s.updateSetting(n ? lE.A.getGuildIds() : []), Cf(n, !0);
                    },
                });
        } else {
            let n = (0, n4.Tb)();
            e ? n.delete(t) : n.add(t),
                L.$s.updateSetting(Array.from(n)),
                tt.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: Cp.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eC.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        }
    },
});
var C_ = n(953298);
function CN(e, t) {
    tt.default.track(S.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function CC() {
    return (0, Cg.q9)() ? R.intl.string(R.t["982I7+"]) : R.intl.string(R.t["3yHM5i"]);
}
let Cb = (0, d.zD)(c.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: CC,
        useSubtitle: () => R.intl.format(R.t.BoCjTy, { learnMoreUrl: ex.A.getArticleURL(S.MVz.MESSAGE_REQUESTS) }),
        useValue: function () {
            let e = (0, Cg.Tx)(),
                t = (0, CT.K)(),
                n = L.$s.useSetting().includes(e),
                i = L.YX.useSetting(),
                l = L.Zr.useSetting().includes(e);
            return e === Cc.YG ? !t && !i : !n && !l;
        },
        useDisabled: function () {
            let e = (0, Cg.Tx)(),
                t = (0, _h.uM)(),
                n = (0, CT.K)(),
                i = L.$s.useSetting().includes(e);
            return e === Cc.YG ? n || t : i;
        },
        setValue: function (e) {
            let t = Cc.xk.getState().selectedGuildId;
            if (!e && (0, C_.w)())
                return void xO.A.showAgeVerificationGetStartedModal({ entryPoint: xL.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === Cc.YG) {
                var n;
                (n = !e),
                    (0, _b.O)({
                        header: R.intl.string(R.t.yAfu1p),
                        body: R.intl.string(R.t.Ry2z74),
                        confirmText: R.intl.string(R.t.gm1Vej),
                        cancelText: R.intl.string(R.t.p89ACt),
                        confirmButtonColor: sV.$n.Colors.BRAND,
                        onConfirm: function () {
                            L.YX.updateSetting(n), CN(n, !1);
                        },
                        onCancel: function () {
                            L.YX.updateSetting(n), L.Zr.updateSetting(n ? lE.A.getGuildIds() : []), CN(n, !0);
                        },
                    });
            } else {
                let n = (0, n4.xo)();
                e ? n.delete(t) : n.add(t),
                    L.Zr.updateSetting(Array.from(n)),
                    tt.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: Cp.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eC.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    Cy = (0, d.E2)(c.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [Cx(), CC()];
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, Cc.xk)(),
                n = (0, h.bG)([dA.Ay], () => dA.Ay.getFlattenedGuildIds()),
                i = (0, h.bG)([lE.A], () => lE.A.getGuilds()),
                l = n[0];
            E.useEffect(
                () =>
                    CA.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, n) => {
                            let i = Cc.xk.getState().selectedGuildId;
                            "" === n && "" !== e && i === Cc.YG && null != l
                                ? t(l)
                                : "" === e && i !== Cc.YG && t(Cc.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [l, t],
            );
            let s = E.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...Ch,
                        id: Ch.value,
                        label: Ch.label(),
                        leading: (0, A.jsx)("div", {
                            className: CE.KP,
                            children: (0, A.jsx)(Cm.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: CE.cl,
                            }),
                        }),
                    }),
                    n.forEach((t) => {
                        let n = i[t];
                        null != n &&
                            e.push({
                                id: n.id,
                                label: n.name,
                                value: n.id,
                                leading: (0, A.jsx)(db.Ay, {
                                    className: CE.cl,
                                    guild: n,
                                    size: db.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            });
                    }),
                    e
                );
            }, [n, i]);
            return (0, A.jsx)(SX.Z, {
                selectionMode: "single",
                onSelectionChange: function (e) {
                    t(e);
                },
                value: e,
                options: s,
            });
        },
    }),
    Cv = (0, d.zZ)(c.X.PERMISSIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Y5GYcX),
        useSubnavLabel: () => R.intl.string(R.t.YUU0RF),
        useInlineNotice: function () {
            let e = _p(),
                t = Ny();
            if ((0, Cg.Tx)() === Cc.YG) return e ?? t;
        },
        buildLayout: () => [Cy, CI, Cb],
    }),
    Cj = (0, d.zZ)(c.X.SPAM_FILTERS_CATEGORY, { useTitle: () => R.intl.string(R.t.Qwuoic), buildLayout: () => [N0] }),
    CO = (0, d.zZ)(c.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = N_();
            function t(e, t) {
                return (0, A.jsx)(
                    H.E,
                    { tag: "span", variant: "text-sm/normal", color: "text-default", children: e },
                    t,
                );
            }
            return 0 === e.length
                ? R.intl.string(R.t.Amr1IZ)
                : 1 === e.length
                  ? R.intl.format(R.t["60IaC2"], { gameName: e[0].name, gameListHook: t })
                  : 2 === e.length
                    ? R.intl.format(R.t.lthjd7, { game1: e[0].name, game2: e[1].name, gameListHook: t })
                    : R.intl.format(R.t.RAUmQM, {
                          game1: e[0].name,
                          game2: e[1].name,
                          remaining: e.length - 2,
                          gameListHook: t,
                      });
        },
        useSubnavLabel: () => R.intl.string(R.t.YpCiMt),
        useHeaderDecoration: () => {
            let e = (function () {
                let { sortedGames: e } = N_();
                return E.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, A.jsx)("img", {
                                src: O.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: AX.CD,
                                height: AX.CD,
                            }),
                            shape: AX.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, A.jsx)("img", {
                                    src: O.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: AX.YP,
                                    height: AX.YP,
                                }),
                                shape: AX.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: m.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [R.intl.string(R.t.YpCiMt)],
        initialize: () => {
            Ef.A.fetch();
        },
        buildLayout: () => [Nf, NI, Np, NA],
    }),
    CL = (0, d.t_)(c.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => R.intl.string(R.t.Cz07t8),
        buildLayout: () => [NQ, Cj, Cv, N9, CO, Cd],
    }),
    CR = (0, d.i4)(c.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.Cz07t8),
        icon: Ng.l,
        buildLayout: () => [CL],
    });
var CD = n(782603),
    CP = n(899847),
    CG = n(695515),
    CU = n(936926);
let CM = (0, d.Hn)(c.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => R.intl.string(R.t["8rHeOr"]),
        useSubtitle: () => R.intl.string(R.t["eJE6+J"]),
        useValue: L.cU.useSetting,
        setValue: L.cU.updateSetting,
        useOptions: () =>
            F.range(1, 11).map((e) => ({
                id: e.toString(),
                value: 60 * e,
                label: R.intl.formatToPlainString(R.t.iXLF9W, { minutes: e }),
            })),
    }),
    CV = (0, d.zD)(c.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => R.intl.string(R.t["btbS+Z"]),
        useSubtitle: () =>
            R.intl.format(R.t.Q5crhR, { onClick: () => (0, nl.openUserSettings)(c.X.TTS_PLAYBACK_RATE) }),
        useValue: L.on.useSetting,
        setValue: L.on.updateSetting,
    }),
    Ck = (0, d.Qx)(c.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.JZxxGx),
        useSubtitle: () => R.intl.string(R.t.HDLtJl),
        useValue: () => (0, h.bG)([aT.A], () => aT.A.getTTSType()),
        setValue: (e) => a_.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: R.intl.string(R.t.B1AGeJ), value: S.aVn.ALL_CHANNELS },
                { name: R.intl.string(R.t.uzZg9e), value: S.aVn.SELECTED_CHANNEL },
                { name: R.intl.string(R.t.DYO5Oi), value: S.aVn.NEVER },
            ];
        },
        usePredicate: () => w.$j,
    }),
    Cw = c.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    CF = (0, d.bd)(Cw, {
        useTitle: (e) => (e ? R.intl.string(R.t.RyimDk) : R.intl.string(R.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return tA(Cw, {
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
        buildLayout: () => [CM, CV, Ck],
    }),
    CB = (0, d.zZ)(c.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => R.intl.string(R.t["31DySj"]),
        buildLayout: () => [CF],
    }),
    Cz = (0, d.zD)(c.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => R.intl.string(R.t.VH8AIJ),
        useSubtitle: () => R.intl.string(R.t["9K4qwX"]),
        useValue: function () {
            return (0, h.bG)([aT.A], () => !aT.A.getDisableUnreadBadge());
        },
        setValue: (e) => a_.default.setDisableUnreadBadge(!e),
    }),
    CX = (0, d.zZ)(c.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.l6w3Vj),
        buildLayout: () => [Cz],
    });
var CY = n(840559),
    CH = n(997187),
    CK = n(723923);
let CW = CK.px.map((e) =>
        (0, d.zD)(`${c.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, h.cf)([CH.A], () => CH.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, CY.CA)(e.category, t),
        }),
    ),
    CZ = (0, d.Tf)(c.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => R.intl.string(R.t.Ra9Pwk),
        useSubtitle: () => R.intl.string(R.t.iYjQ8X),
        useLabel: () => R.intl.string(R.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, h.cf)([CH.A], () => CH.A.getEmailSettings());
            return CK.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, CY.NI)(),
        useVariant: () => "critical-secondary",
    }),
    Cq = (0, d.zZ)(c.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => R.intl.string(R.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = CH.A.getEmailSettings();
            e || (0, CY.cR)();
        },
        buildLayout: () => [...CW, CZ],
    }),
    CQ = (0, d.zD)(c.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t["/0WCll"]),
        useSubtitle: () => R.intl.string(R.t.wF9ih3),
        useValue: function () {
            return (0, h.bG)([aT.A], () => aT.A.getDesktopType()) !== S.nRU.NEVER;
        },
        setValue: (e) => a_.default.setDesktopType(e ? S.nRU.ALL : S.nRU.NEVER),
    });
var CJ = n(832712),
    C$ = n(543465),
    C0 = n(790782);
let C1 = (0, d.zD)(c.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => R.intl.string(R.t["k6m/si"]),
    useSubtitle: () => R.intl.string(R.t.LGynPs),
    useValue: () => (0, h.bG)([C$.Ay], () => C$.Ay.useNewNotifications),
    setValue: function (e) {
        CJ.A.setAccountFlag(A1.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (m6.w.set("turnedOffNewNotifications", !0),
                tt.default.track(S.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: lE.A.getGuildsArray().filter(
                        (e) => C$.Ay.resolveGuildUnreadSetting(e) === C0.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, h.bG)(
            [sn.default, C$.Ay],
            () =>
                sn.default.getCurrentUser()?.isStaff() ||
                sn.default.getCurrentUser()?.isStaffPersonal() ||
                C$.Ay.useNewNotifications,
        ),
});
var C2 = n(534654);
let C3 = (0, d.zD)(c.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => R.intl.string(R.t.z9h8Ym),
        useSubtitle: () => R.intl.string(R.t.TummoQ),
        useValue: () => (0, h.bG)([aT.A], () => aT.A.screenDowntimeReminder),
        setValue: (e) => a_.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, CU.Vh)({ location: "ScreenDowntimeReminderSetting" }),
                t = (0, C2.A)(),
                n = (0, If.Du)();
            return e && t && n;
        },
    }),
    C6 = (0, d.zD)(c.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => R.intl.string(R.t.onrAy7),
        useSubtitle: () => R.intl.string(R.t["/071J7"]),
        useValue: L.gY.useSetting,
        setValue: (e) => L.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, CU.Vh)({ location: "ScreenDowntimeScheduleSetting" }),
                t = (0, C2.A)(),
                n = (0, If.Du)();
            return e && t && n;
        },
    }),
    C5 = (0, d.zD)(c.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.NjOMvh),
        useValue: L.oz.useSetting,
        setValue: function (e) {
            L.oz.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A1.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                });
        },
        useSearchTerms: () => [R.intl.string(R.t.hi4dSk)],
    }),
    C4 = (0, d.zD)(c.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.sQQgFj),
        useValue: L.NR.useSetting,
        setValue: function (e) {
            L.NR.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A1.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
    }),
    C8 = (0, d.zD)(c.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.FSNIvs),
        useValue: L.Yh.useSetting,
        setValue: function (e) {
            L.Yh.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A1.Y.ACCOUNT,
                    go_live_notifications: e,
                });
        },
    }),
    C7 = (0, d.zD)(c.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.xBLMhQ),
        useValue: L.T3.useSetting,
        setValue: function (e) {
            L.T3.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A1.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
    });
var C9 = n(815807);
let be = (0, d.Hn)(c.X.REACTION_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: R.intl.string(R.t["9x/RtT"]), value: eB.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: R.intl.string(R.t.fJAbQd), value: eB.Tz.ONLY_DMS },
            { id: "disabled", label: R.intl.string(R.t["xu+UDU"]), value: eB.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: L.Zp.useSetting,
        setValue: (e) => (0, C9.n4)(e, L.Zp.getSetting()),
    }),
    bt = (0, d.zD)(c.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t["k51K1+"]),
        useValue: L.Qr.useSetting,
        setValue: function (e) {
            L.Qr.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A1.Y.ACCOUNT,
                    server_trending_notifications: e,
                });
        },
        usePredicate: () => !1,
    }),
    bn = (0, A8.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    bi = (0, d.zD)(c.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.G8NPz6),
        useValue: L.zS.useSetting,
        setValue: function (e) {
            L.zS.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A1.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => bn.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    bl = (0, d.FW)(c.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.FEVRDV),
        buildLayout: () => [C8, C5, C4, bt, bi, C7, be],
    }),
    bs = (0, d.zD)(c.X.TASK_BAR_FLASHING, {
        useTitle: () => R.intl.string(R.t.xSmFQG),
        useSubtitle: () => R.intl.string(R.t.bd4j4x),
        useValue: () => (0, h.bG)([aT.A], () => aT.A.taskbarFlash),
        setValue: (e) => a_.default.setTaskbarFlash(e),
        usePredicate: () => (0, nm.uF)(),
    }),
    br = (0, d.zZ)(c.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => R.intl.string(R.t["/dp6yY"]),
        buildLayout: () => [CQ, bs, bl, C1, C6, C3],
    });
var ba = n(965957),
    bo = n(312671),
    bu = n(235079);
let bd = (0, d.zD)(c.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = ap.A.useHolidaySoundpack();
        return null == e ? "" : R.intl.format(R.t["E/OyBr"], { soundpack: R.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, h.bG)([bo.A], () => bo.A.getSoundpack()),
            t = ap.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = ap.A.getHolidaySoundpack();
        ta()(null != t, "predicate should fail if no soundpack is available"), (0, ba.p)(e ? t : bu.i.CLASSIC);
    },
    usePredicate: ap.A.useIsEligible,
});
var bc = n(970931);
let bg = {
        useTitle: () => R.intl.string(R.t.jD1qzM),
        sound: "message1",
        useDisabled: bc.kB,
        useDisabledMessage: () => ((0, bc.kB)() ? R.intl.string(R.t.cIRG0s) : void 0),
    },
    bm = { useTitle: () => R.intl.string(R.t.XBrJT6), sound: "call_ringing" },
    bA = (0, d.zD)(c.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.TzjwV9),
        useSubtitle: () => R.intl.format(R.t.OOiGCM, { onClick: () => ab("message3") }),
        useValue: () =>
            (0, h.bG)([aT.A], () => aT.A.getNotifyMessagesInSelectedChannel() && !aT.A.getDisableAllSounds()),
        setValue: (e) => a_.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, h.bG)([aT.A], () => aT.A.getDisableAllSounds()),
    }),
    bE = (0, d.zD)(c.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => R.intl.string(R.t["2ZhCOd"]),
        useSubtitle: () => R.intl.string(R.t.EAKdPr),
        useValue: () => (0, h.bG)([aT.A], () => aT.A.getDisableAllSounds()),
        setValue: (e) => a_.default.toggleDisableAllSounds(e),
    }),
    bh = (0, d.D1)(c.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                aC();
            };
        },
        buildLayout: () => [ay(bg), bA, ay(bm), bE],
    }),
    bS = (0, d.AK)(c.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t["MMy+lm"]),
        useSearchTerms: () => [R.intl.string(R.t["MMy+lm"])],
        destinationKey: c.X.SOUNDS_CATEGORY,
    }),
    bT = (0, d.gN)(c.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [bS] }),
    bp = (0, d.zZ)(c.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.LweOYy),
        buildLayout: () => [bd, bh, bT],
    }),
    bx = (0, d.t_)(c.X.NOTIFICATIONS_PANEL, {
        useTitle: () => R.intl.string(R.t.HcoRu0),
        initialize: () => {
            !(0, CU.Eq)({ location: "NotificationsPanel" }) ||
                null != CG.A.getAgeGroup() ||
                CG.A.isLoading() ||
                (CG.A.canRefetch() && CP.Ay.initialPageLoad());
        },
        buildLayout: () => [br, bp, CX, Cq, CB],
    }),
    bf = (0, d.i4)(c.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.HcoRu0),
        icon: CD.BellIcon,
        buildLayout: () => [bx],
    }),
    bI = (0, d.WI)(c.X.USER_SECTION, {
        useTitle: () => R.intl.string(R.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [Iw, Nc, CR, bf, _c],
    });
var b_ = n(387758),
    bN = n(271866),
    bC = n(147964),
    bb = n(868511);
let by = (0, d.zD)(c.X.APPLICATION_TEST_MODE, {
        useTitle: () => R.intl.string(R.t.erOqlh),
        useSubtitle: () => R.intl.string(R.t["52hMnD"]),
        usePredicate: L.Q_.useSetting,
        useValue: () => (0, h.bG)([bC.A], () => null != bC.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, lr.openModal)((e) => (0, A.jsx)(bb.A, { ...e })) : bN.cL();
        },
    }),
    bv = (0, d.zD)(c.X.DEVELOPER_MODE, {
        useTitle: () => R.intl.string(R.t.ObIb1Q),
        useSubtitle: () => R.intl.format(R.t["CY6q/Q"], { apiDocsUrl: S.X7G.API_DOCS }),
        useValue: L.Q_.useSetting,
        setValue: L.Q_.updateSetting,
        usePredicate: () => uy.p5,
    }),
    bj = (0, d.zZ)(c.X.DEVELOPER_CATEGORY, { buildLayout: () => [bv, by] }),
    bO = (0, d.t_)(c.X.DEVELOPER_PANEL, { useTitle: () => R.intl.string(R.t["0BRxRp"]), buildLayout: () => [bj] }),
    bL = (0, d.i4)(c.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: b_.G,
        useTitle: () => R.intl.string(R.t["0BRxRp"]),
        buildLayout: () => [bO],
    });
var bR = n(70688),
    bD = n(830215);
let bP = (0, d.i4)(c.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => R.intl.string(R.t["2jxGer"]),
        icon: bR.DoorExitIcon,
        onClick: () => {
            (0, nJ.A)({
                title: R.intl.string(R.t["2jxGer"]),
                subtitle: R.intl.string(R.t.SUnWBB),
                confirmText: R.intl.string(R.t["2jxGer"]),
                onConfirm: () => {
                    bD.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    bG = (0, d.WI)(c.X.UTILITY_SECTION, {
        useTitle: () => R.intl.string(R.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [bL, bP],
    }),
    bU = (0, d.Hr)({ buildLayout: () => [xC, bI, mS, a3, S1, AF, bG], analyticsKey: "user_settings" });
