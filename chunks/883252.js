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
    Y = n(299163),
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
                    ((0, Z.pr)(), t(!1));
                    return;
                }
                ((0, Z.AU)(
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
                    t(!0));
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
                (clearTimeout(t), ef.setState({ syncEnabled: e, updateTimeout: null }));
                return;
            }
            if (e === N.Ay.syncForcedColors) return void ef.setState({ syncEnabled: e });
            let n = setTimeout(() => {
                ((0, el.D3)(e), ef.setState({ updateTimeout: null }));
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
            (L.hH.updateSetting(e === eY), (0, el.AC)());
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
            (tt.default.track(S.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: S.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                L.SI.updateSetting(e));
        },
    });
var tL = n(793574);
let tR = (0, d.zD)(c.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => R.intl.string(R.t["d+It2U"]),
        useValue: L.ML.useSetting,
        setValue: (e) => {
            (tt.default.track(S.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: S.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [tL.A.TEXT_AND_IMAGES],
            }),
                L.ML.updateSetting(e));
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
    ((0, tG.nf)(tG.HP.APP_ICON), (0, tM.default)());
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
    tJ = n(193249),
    t$ = n(976860),
    t0 = n(16236),
    t1 = n(635233),
    t2 = n(749884),
    t3 = n(22277);
let t6 = ex.A.getArticleURL(S.MVz.FAVORITES_GUILD);
function t5() {
    let { analyticsLocations: e } = (0, eP.Ay)(tL.A.USER_SETTINGS_FAVORITES),
        t = E.useCallback(() => {
            ((0, t1.mv)("settings_page"), (0, t$.uh)(S.YYv), (0, tM.default)());
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
var nn = n(28863),
    ni = n(817281),
    nl = n(766075);
let ns = (0, d.zD)(c.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => R.intl.string(R.t.JgjNG3),
        useSubtitle: () => {
            if (!L.hH.useSetting())
                return R.intl.format(R.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, A.jsx)(
                            nn.Anchor,
                            {
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
            (t ? nu.A.cleanUpPrivateChannelSearchState() : nu.A.cleanUpSearchState({ type: S.I4_.DMS }),
                (0, nd._k)({
                    prevIsCrossDMSettingEnabled: L.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: nd.vy.USER_SETTINGS,
                }),
                L.Hu.updateSetting(t));
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
        ((t = S.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            e5.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: l },
            }),
            ni.Ay.setShouldSyncAppearanceSettings(e));
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
                                  (tt.default.track(S.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: S.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      L.SI.updateSetting(e));
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
    n0 = n(939249),
    n1 = n(369606),
    n2 = n(320448),
    n3 = n(604121),
    n6 = n(725951),
    n5 = n(400492),
    n4 = n(669067),
    n8 = n(115063),
    n7 = n(754692),
    n9 = n(927018),
    ie = n(512599),
    it = n(532197),
    ii = n(403362),
    il = n(874486),
    is = n(503698),
    ir = n.n(is),
    ia = n(536637),
    io = n.n(ia),
    iu = n(58703),
    id = n(906688),
    ic = n(98705);
function ig(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, n9.vM)(t);
    if (null == i) return null;
    let l = null != n,
        { name: s, description: r, hideDescriptionUntilUnlock: a, onAction: o } = i,
        u = a && !l,
        d = l ? "text-strong" : "text-muted",
        c = l ? "text-default" : "text-muted",
        g = io()(n),
        m = null != o && l,
        E = m ? n0.D : "div";
    return (0, A.jsxs)(E, {
        className: ir()(ic.kL, m && ic.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, A.jsx)("div", {
                className: ic.zc,
                children: (0, A.jsx)(id.A, { achievementId: t, size: id.A.Sizes.SIZE_40, unlocked: l }),
            }),
            (0, A.jsxs)("div", {
                className: ic.VW,
                children: [
                    null != n &&
                        (0, A.jsx)(H.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: ic.YR,
                            children: (0, iu.mk)(g),
                        }),
                    (0, A.jsx)(H.E, { variant: "text-md/medium", color: d, children: s() }),
                    (0, A.jsx)(H.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var im = n(545744);
function iA(e) {
    let { onBackClick: t } = e,
        n = (0, h.bG)([il.A], () => il.A.getAllUnlockedAchievements()),
        i = E.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        l = E.useMemo(
            () =>
                Object.values(n9.l0)
                    .filter(ii.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsxs)(n0.D, {
                onClick: t,
                className: im.vv,
                children: [
                    (0, A.jsx)(it.A, { direction: it.A.Directions.LEFT, className: im.Kk }),
                    (0, A.jsx)(H.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: R.intl.string(R.t["13/7kX"]),
                    }),
                ],
            }),
            (0, A.jsxs)("div", {
                className: im.N1,
                children: [
                    (0, A.jsxs)("div", {
                        className: im.if,
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
                        className: im.nr,
                        children: (0, A.jsx)(n1.TrophyIcon, {
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
                    className: im.yF,
                    children: (0, A.jsx)("div", {
                        className: im.Eh,
                        children: i.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, A.jsx)(ig, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            l.length > 0 &&
                (0, A.jsxs)("div", {
                    className: im.yF,
                    children: [
                        (0, A.jsx)("div", {
                            className: im.if,
                            children: (0, A.jsx)(H.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: R.intl.string(R.t.GFyMg1),
                            }),
                        }),
                        (0, A.jsx)("div", {
                            className: im.Eh,
                            children: l.map((e) => (0, A.jsx)(ig, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, A.jsx)("div", { className: im.yF, children: (0, A.jsx)("div", { className: im.F3 }) }),
        ],
    });
}
var iE = n(224964),
    ih = n(31408),
    iS = n(368588);
let iT = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    ip = (0, F.range)(0, 11),
    ix = (0, F.range)(0, 2.25, 0.25),
    iI = (0, F.range)(1, 11),
    i_ = (0, F.range)(1, 26),
    iN = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function iC(e) {
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
function ib(e) {
    let { children: t } = e;
    return (0, A.jsx)(H.E, { className: iS.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function iy(e) {
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
            (e || (0, n7._)(n9.sn.DISABLE_POGGERMODE),
                e && (!n || l)
                    ? (0, nJ.A)({
                          title: l ? R.intl.string(R.t["FxT+p0"]) : R.intl.string(R.t.TAZ4F9),
                          subtitle: l ? R.intl.string(R.t.gmixrx) : R.intl.string(R.t.jN3t3K),
                          confirmText: R.intl.string(R.t.JFfins),
                          onConfirm: () => i(l ? iT : { enabled: !0, warningSeen: !0 }),
                      })
                    : i({ enabled: e }));
        },
    });
}
function iv(e) {
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
                        className: iS.KF,
                        children: R.intl.string(R.t.vd0D81),
                    }),
                    (0, A.jsx)(ib, { children: R.intl.string(R.t.a18Sug) }),
                    (0, A.jsx)(Y.A, {
                        disabled: a,
                        markers: iI,
                        stickToMarkers: !0,
                        minValue: iI[0],
                        maxValue: iI[iI.length - 1],
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
                        className: iS.KF,
                        children: R.intl.string(R.t.sPO3ij),
                    }),
                    (0, A.jsx)(ib, { children: R.intl.string(R.t.xoldVn) }),
                    (0, A.jsx)(Y.A, {
                        disabled: a,
                        markers: i_,
                        stickToMarkers: !0,
                        minValue: i_[0],
                        maxValue: i_[i_.length - 1],
                        initialValue: l,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, A.jsx)(iC, {
                disabled: a,
                locations: [
                    {
                        location: ih.k.CHAT_INPUT,
                        title: R.intl.string(R.t.elTtyz),
                        description: R.intl.string(R.t.HtKfMi),
                    },
                    {
                        location: ih.k.REACTION,
                        title: R.intl.string(R.t.Ik4VIa),
                        description: R.intl.string(R.t.y4rqK0),
                    },
                    {
                        location: ih.k.MEMBER_USER,
                        title: R.intl.string(R.t.ZXBlAn),
                        description: R.intl.string(R.t["m9RD+c"]),
                    },
                    {
                        location: ih.k.CALL_TILE,
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
function ij(e) {
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
                        className: iS.KF,
                        children: R.intl.string(R.t.L0oQuh),
                    }),
                    (0, A.jsx)(ib, { children: R.intl.string(R.t["/OOFpL"]) }),
                    (0, A.jsx)(Y.A, {
                        disabled: r,
                        markers: ip,
                        stickToMarkers: !0,
                        minValue: ip[0],
                        maxValue: ip[ip.length - 1],
                        initialValue: l,
                        onValueChange: (e) => s({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function iO(e) {
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
                        className: iS.KF,
                        children: R.intl.string(R.t.UxnnC4),
                    }),
                    (0, A.jsx)(ib, { children: R.intl.string(R.t.CEOEOb) }),
                    (0, A.jsx)(Y.A, {
                        disabled: a,
                        markers: ix,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: ix[0],
                        maxValue: ix[ix.length - 1],
                        initialValue: i,
                        onValueChange: (e) => {
                            var t;
                            (null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, n7._)(n9.sn.MORE),
                                s(t, 1));
                        },
                        onMarkerRender: (e) => (e === ix[ix.length - 1] ? R.intl.string(R.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, A.jsx)(iC, {
                disabled: a,
                locations: [
                    {
                        location: ih.uD.CHAT_INPUT,
                        title: R.intl.string(R.t.vUcvPP),
                        description: R.intl.string(R.t.y00OrF),
                    },
                    {
                        location: ih.uD.VOICE_USER,
                        title: R.intl.string(R.t.TcRO54),
                        description: R.intl.string(R.t.YJCxVY),
                    },
                    {
                        location: ih.uD.MENTION,
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
function iL(e) {
    let { updateSettings: t } = e;
    return (0, A.jsx)(n$.n, {
        label: R.intl.string(R.t.EuXv2q),
        children: (0, A.jsxs)(X.B, {
            gap: 16,
            children: [
                (0, A.jsx)("div", { children: R.intl.string(R.t["1SLnki"]) }),
                (0, A.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: iS.hw,
                    children: (0, A.jsx)(_.$, {
                        variant: "primary",
                        size: "sm",
                        text: R.intl.string(R.t.qz65yY),
                        onClick: function () {
                            (t({ enabled: !1, settingsVisible: !1 }), (0, tM.default)());
                        },
                    }),
                }),
            ],
        }),
    });
}
function iR(e) {
    let { onChangePage: t } = e;
    return (0, A.jsxs)(n0.D, {
        onClick: function () {
            return t(1);
        },
        className: iS.Tq,
        children: [
            (0, A.jsx)("div", {
                className: iS.w1,
                children: (0, A.jsx)(n1.TrophyIcon, { size: "md", color: nQ.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, A.jsxs)("div", {
                className: iS.qL,
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
            (0, A.jsx)(n2._, { size: "custom", color: "currentColor", width: 16, className: iS.nT }),
        ],
    });
}
function iD() {
    return n
        .e("504660")
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function iP(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        i = (0, h.cf)([nq.A], () => nq.A.getState()),
        [l, s] = E.useState({ x: 0, y: 0 }),
        r = (0, iE.A)();
    function a(e, t) {
        var s, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === i.enabled &&
                (n(!0),
                (0, n5.Ak)("poggermode_enabled"),
                (0, n8.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? i.shakeIntensity })),
            (0, ie.O9)(e),
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
        1 === t && E && (0, n8.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
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
                (0, A.jsx)(iy, { settings: i, updateSettings: a }),
                (0, A.jsx)(iR, { onChangePage: t }),
                (0, A.jsx)(ij, { settings: i, updateSettings: a }),
                (0, A.jsx)(iO, { settings: i, updateSettings: a }),
                (0, A.jsx)(iv, { settings: i, updateSettings: a }),
                (0, A.jsx)(iL, { updateSettings: a }),
            ],
        })
    );
}
function iG(e) {
    return 0 === e ? n6.f.LEFT : n6.f.RIGHT;
}
let iU = (0, d.E2)(c.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = E.useState(0),
                [n, i] = E.useState(iG(e)),
                [l, s] = E.useState(!1),
                r = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
                a = l && !r;
            return (
                E.useEffect(() => {
                    let t = setTimeout(() => {
                        i(iG(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                E.useEffect(() => {
                    (0, n4._)(iN[e]);
                }, [e]),
                E.useEffect(() => {
                    Math.random() > 0.99 && (0, n7._)(n9.sn.VISITOR_100);
                }, []),
                (0, A.jsxs)(A.Fragment, {
                    children: [
                        (0, A.jsx)(n6.A, {
                            className: iS.l3,
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
                                        return (0, A.jsx)(iP, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, A.jsx)(iA, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, s),
                        }),
                        (0, A.jsx)("div", {
                            className: a ? iS.Sr : iS.IP,
                            children: (0, A.jsx)(n3.a, {
                                className: iS.gT,
                                importData: iD,
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
    iM = (0, d.zZ)(c.X.POGGERMODE_CATEGORY, { buildLayout: () => [iU] });
var iV = n(212043);
let ik = (0, d.t_)(c.X.POGGERMODE_PANEL, { useTitle: () => R.intl.string(R.t.AtCukI), buildLayout: () => [iM] }),
    iw = (0, d.i4)(c.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.AtCukI),
        icon: () => (0, A.jsx)("img", { alt: "", src: n(724405), className: iV.$ }),
        usePredicate: () => (0, h.bG)([nq.A], () => nq.A.settingsVisible),
        buildLayout: () => [ik],
    });
var iF = n(307301),
    iB = n(410767),
    iz = n(683071),
    iX = n(97260),
    iY = n(695366),
    iH = n(812729),
    iK = n.n(iH),
    iW = n(587895),
    iZ = n(429913),
    iq = n(616356),
    iQ = n(952818);
function iJ(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function i$() {
    let e = (0, h.bG)([iq.A], () => iq.A.getStreamerActiveStreamMetadata()),
        t = (0, h.bG)(
            [iQ.Ay],
            () => {
                let e = iQ.Ay.getVisibleGame();
                return null != e ? iQ.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            iK(),
        ),
        [n] = (0, iZ.A)([iJ(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var i0 = n(769015),
    i1 = n(544576),
    i2 = n(935671),
    i3 = n(435075);
function i6(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, A.jsx)("div", {
              className: i3.zc,
              children: (0, A.jsx)(iY.E, { size: "sm", color: nQ.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, A.jsxs)("div", {
              className: i3.nt,
              children: [
                  (0, A.jsx)(i0.A, { game: n, pid: t.pid, size: i0.M.MEDIUM }),
                  (0, A.jsx)("div", {
                      className: i3.Am,
                      children: (0, A.jsx)(iY.E, { size: "sm", color: nQ.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function i5(e) {
    let t = (0, h.bG)([i1.Ay], () => i1.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = i$();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let l = (0, i2.NP)(),
        s = l && null != n && t === S.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? s : l, runningGame: n, runningGameApplication: i };
}
function i4(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: l, runningGameApplication: s } = i5(n);
    return i
        ? (0, A.jsxs)("div", {
              className: ir()(i3.kL, t),
              children: [
                  (0, A.jsx)(i6, { game: l, application: s }),
                  (0, A.jsxs)("div", {
                      className: i3.FS,
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
                          (0, i2.sL)(n + (null != l ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var i8 = n(404778),
    i7 = n(691885),
    i9 = n(408278),
    le = n(241326),
    lt = n(866665),
    ln = n(140735),
    li = n(489718),
    ll = n(635242),
    ls = n(350535),
    lr = n(189213),
    la = n(192308),
    lo = n(95477),
    lu = n(320989),
    ld = n(978263);
let lc = [];
var lg = n(235986),
    lm = n(484734),
    lA = n(734057),
    lE = n(808728),
    lh = n(71393),
    lS = n(967198),
    lT = n(926140),
    lp = n(847893);
function lx() {}
let lf = [lT.rD.VOICE_CHANNEL];
function lI(e) {
    (e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0));
}
function l_() {
    return (0, A.jsx)("div", {
        className: lp.i1,
        children: (0, A.jsx)(H.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: lp.GN,
            children: R.intl.string(R.t.zHjCd1),
        }),
    });
}
function lN(e) {
    let { keybind: t, className: n } = e,
        i = E.useRef(t);
    E.useEffect(() => {
        i.current = t;
    });
    let [l, s] = E.useState(t.params?.channelId ?? void 0),
        r = E.useCallback(() => {
            (0, la.openModalLazy)(
                async () => (e) =>
                    (0, A.jsx)(lC, {
                        ...e,
                        onSelect: (e) => {
                            (s(e), iX.A.setKeybind({ ...i.current, params: { channelId: e } }));
                        },
                    }),
            );
        }, []);
    return (0, A.jsx)("div", {
        className: ir()(lp.a8, n),
        children: (0, A.jsx)(tQ.D, {
            label: R.intl.string(R.t.q4JpM8),
            children: (0, A.jsxs)(lg.A, {
                align: lg.A.Align.STRETCH,
                children: [
                    (0, A.jsx)("div", { className: lp.$X, children: (0, A.jsx)(lb, { channelId: l }) }),
                    (0, A.jsx)(lg.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, A.jsx)(_.$, { variant: "primary", text: R.intl.string(R.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function lC(e) {
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
                [a, o] = E.useState(lc),
                u = E.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(lc) : o(e);
                }, []);
            E.useEffect(
                () =>
                    lu.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = E.useState(() => new ld.A(u, n, void 0, i));
            return (
                E.useEffect(() => {
                    t ? (l?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, l]),
                {
                    queryResults: a,
                    query: s,
                    updateQuery: E.useCallback(
                        (e) => {
                            (r(e), d.search(e));
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: lf, autocompleterBeforeCreateSearchContext: lI }),
        c =
            ((t = "" !== o),
            (n = (0, h.yK)(
                [lE.Ay, lA.A, lS.A],
                () => {
                    let e = lS.A.getGuildId();
                    if (t || null == e) return [];
                    let n = [];
                    for (let t of lE.Ay.getVocalChannelIds(e)) {
                        let e = lA.A.getChannel(t);
                        null != e && n.push(e);
                    }
                    return n;
                },
                [t],
            )),
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
            if (e?.type === lT.rD.VOICE_CHANNEL) return e.record.id;
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
                                  if (e?.type === lT.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? lA.A.getChannel(n.parent_id) : void 0,
                              r = lh.A.getGuild(n.guild_id);
                          return (0, A.jsx)(
                              lm.c3,
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
                                      null != r ? (0, A.jsx)("div", { className: lp.J5, children: r.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, A.jsx)(l_, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, A.jsx)(lr.Modal, {
        transitionState: i,
        onClose: l,
        title: R.intl.string(R.t.Dm8O4e),
        subtitle: R.intl.string(R.t.q4JpM8),
        actions: void 0,
        input: (0, A.jsx)(lo.k, {
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
                                if (e?.type === lT.rD.VOICE_CHANNEL) return e.record;
                            })();
                            (null == e ? s(void 0) : s(e.id), l());
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
function lb(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: l,
        } = (0, h.cf)([lA.A, lh.A], () => {
            let e = null != t ? lA.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? lA.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? lh.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, A.jsx)(H.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: lp.GN,
              children: R.intl.string(R.t["/fYIK7"]),
          })
        : (0, A.jsx)(lm.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: lx,
              onFocus: lx,
              onMouseEnter: lx,
              focused: !1,
              children: null != l ? (0, A.jsx)("div", { className: lp.J5, children: l.name }) : null,
          });
}
var ly = n(650583),
    lv = n(94451);
function lj(e) {
    let { keybind: t } = e,
        n = ls.dI(t.shortcut);
    return eq.A.hasBind(n)
        ? (0, A.jsx)("div", {
              className: lv.$e,
              children: (0, A.jsx)(iz.w, { type: "warning", children: R.intl.string(R.t["7lQlw3"]) }),
          })
        : ly.Yy.has(n)
          ? (0, A.jsx)("div", {
                className: lv.$e,
                children: (0, A.jsx)(iz.w, {
                    type: "warning",
                    children: R.intl.format(R.t.MOIaNd, {
                        keyboardNavArticle: ex.A.getArticleURL(S.MVz.KEYBOARD_NAVIGATION),
                    }),
                }),
            })
          : void 0;
}
function lO(e) {
    let { keybind: t } = e;
    return t.action === S.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, A.jsx)(lN, { keybind: t, className: lv._M }) : null;
}
let lL = E.memo(function (e) {
    let { keybind: t, keybindDescriptions: n, keybindActionTypes: i } = e,
        l = E.useCallback((e) => iX.A.setKeybind({ ...t, action: e }), [t]),
        s = E.useCallback((e) => iX.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = E.useCallback(() => iX.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = E.useCallback(() => iX.A.deleteKeybind(t.id), [t.id]),
        o = E.useId(),
        u = E.useMemo(() => i.find((e) => e.value === t.action)?.label ?? t.action, [t.action, i]);
    return (0, A.jsxs)("div", {
        className: lv.f_,
        children: [
            (0, A.jsx)(lj, { keybind: t }),
            (0, A.jsx)("div", {
                className: lv.XI,
                children: (0, A.jsx)(i7.l, {
                    selectionMode: "single",
                    label: R.intl.string(R.t.XH5b12),
                    value: t.action,
                    options: i,
                    onSelectionChange: l,
                    disabled: t.managed,
                }),
            }),
            (0, A.jsx)("div", {
                className: lv.LE,
                children: (0, A.jsx)(tQ.D, {
                    label: R.intl.string(R.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, A.jsx)(ll.A, { defaultValue: t.shortcut, onChange: s }),
                }),
            }),
            (0, A.jsxs)("div", {
                className: lv.ne,
                children: [
                    !t.managed &&
                        (0, A.jsx)(i9.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: le.TrashIcon,
                            "aria-label": R.intl.string(R.t.qEHmmB),
                        }),
                    (0, A.jsx)(lt.m, {
                        text: R.intl.string(t.enabled ? R.t.pNYGbx : R.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, A.jsxs)("div", {
                            children: [
                                (0, A.jsx)(ln.A, {
                                    id: o,
                                    children: R.intl.format(t.enabled ? R.t["myr/Y0"] : R.t.lYhtPO, { actionName: u }),
                                }),
                                (0, A.jsx)(li.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, A.jsx)(H.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: lv.h_,
                children: n[t.action],
            }),
            (0, A.jsx)(lO, { keybind: t }),
        ],
    });
});
var lR = n(696760),
    lD = n(734066),
    lP = n(880144),
    lG = n(614455),
    lU = n(532624),
    lM = n(731854),
    lV = n(603933);
let lk = function () {
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
            } = ((e = (0, h.bG)([lU.Ay], () => lU.Ay.getState())),
            (t = (0, h.bG)([i1.Ay], () => (0, lP.A)(i1.Ay))),
            (n = (0, h.bG)([i1.Ay], () => i1.Ay.supports(lM.O5.VIDEO))),
            (i = (0, h.bG)([lG.A], () => lG.A.isSupported)),
            (l = (0, lD.sw)()),
            (s = (0, lD.BW)()),
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
                            ((0, eQ.isWindows)() || i1.Ay.getUseSystemScreensharePicker()) &&
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
                  className: lV.A,
                  children: a.map((e, t) =>
                      (0, A.jsxs)(
                          E.Fragment,
                          {
                              children: [
                                  (0, A.jsx)(lL, { keybind: e, keybindDescriptions: o, keybindActionTypes: u }),
                                  t < a.length - 1 ? (0, A.jsx)(i8.c, { className: lV.y, gap: 24 }) : null,
                              ],
                          },
                          e.id,
                      ),
                  ),
              });
    },
    lw = (0, d.E2)(c.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["069nVT"])],
        Component: function () {
            return nm.Av
                ? (0, A.jsx)(lk, {})
                : (0, A.jsx)(iz.w, {
                      type: "info",
                      children: R.intl.format(R.t.mPi3F3, { downloadLink: S.X7G.DOWNLOAD }),
                  });
        },
    });
var lF = n(475358),
    lB = n(28647),
    lz = n(793650);
function lX(e) {
    let { children: t } = e;
    return t([lR.Q_.MESSAGE, lR.Q_.NAVIGATION, lR.Q_.DND, lR.Q_.CHAT, lR.Q_.VOICE_AND_VIDEO, lR.Q_.MISCELLANEOUS]);
}
function lY(e) {
    let { showHeader: t = !0 } = e,
        n = B()((0, lR.Bx)())
            .filter((e) => e.description !== R.intl.string(R.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, A.jsxs)(X.B, {
        gap: 48,
        children: [
            (0, A.jsx)(n$.n, {
                label: t ? R.intl.string(R.t.Lz5KHI) : void 0,
                children: (0, A.jsx)("div", {
                    className: lz.jh,
                    children: (0, A.jsxs)("div", {
                        className: lz.yZ,
                        children: [
                            (0, A.jsx)(H.E, { variant: "text-md/normal", children: R.intl.string(R.t.sMWLBj) }),
                            (0, A.jsx)("div", {
                                className: lz.DM,
                                children: (0, A.jsx)(lF.e, { shortcut: lB.z.binds["0"], className: lz.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, A.jsx)(lX, {
                children: (e) =>
                    (0, A.jsx)(A.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, lR.Gm)(e),
                                l = (0, lR.zF)(e),
                                s = n[e];
                            return (0, A.jsx)(
                                n$.n,
                                {
                                    label: i,
                                    description: l,
                                    children: (0, A.jsx)("div", {
                                        className: lz.jh,
                                        children: s.map((e, t) =>
                                            (0, A.jsxs)(
                                                E.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, A.jsx)(i8.c, {}),
                                                        (0, A.jsxs)("div", {
                                                            className: lz.yZ,
                                                            children: [
                                                                (0, A.jsx)(H.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, A.jsx)("div", {
                                                                    className: lz.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, A.jsx)(
                                                                            lF.e,
                                                                            { shortcut: e, className: lz.LE },
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
let lH = (0, d.E2)(c.X.DEFAULT_KEYBINDS_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.Lz5KHI)],
    Component: () => (0, A.jsx)(lY, { showHeader: !1 }),
});
var lK = n(19575),
    lW = n(546385);
let lZ = (0, d.E2)(c.X.HARDWARE_ACCELERATION, {
    usePredicate: () => nm.Av && !(0, nm.cX)(),
    useSearchTerms: () => [R.intl.string(R.t["/HIxyY"]), R.intl.string(R.t.B0hqpb)],
    Component: function () {
        let [e] = E.useState(() => lK.Ay.getEnableHardwareAcceleration()),
            t = R.intl.string(R.t["/HIxyY"]),
            n = R.intl.string(R.t.B0hqpb);
        return (0, A.jsxs)(X.B, {
            children: [
                (0, A.jsx)(tJ.d, { label: t, description: n, checked: e, onChange: lq }),
                !e && (0, A.jsx)(lW.A, { look: lW.k.WARNING, children: R.intl.string(R.t.j7S6IX) }),
            ],
        });
    },
});
function lq(e) {
    let t = e ? R.intl.format(R.t.LYXRxL, {}) : R.intl.format(R.t.uDP3Kz, {});
    (0, nJ.A)({
        title: R.intl.string(R.t.aqpAvn),
        subtitle: t,
        confirmText: R.intl.string(R.t.vT7ckk),
        onConfirm: () => {
            lK.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let lQ = (0, eT.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function lJ() {
    let e = await lK.Ay.getOpenOnStart(),
        t = await lK.Ay.getSetting("START_MINIMIZED", !1),
        n = await lK.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    lQ.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
}
let l$ = (0, d.zD)(c.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => R.intl.string(R.t["3BeZti"]),
        usePredicate: () => nm.Av && !(0, nm.cX)(),
        useValue: () => lQ.useState((e) => e.openOnStartup),
        setValue: function (e) {
            (lQ.setState({ openOnStartup: e }), lK.Ay.send("TOGGLE_OPEN_ON_STARTUP", e));
        },
        initialize: () => {
            lK.Ay.getOpenOnStart().then((e) => lQ.setState({ openOnStartup: e }));
        },
    }),
    l0 = (0, d.zD)(c.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => R.intl.string(R.t.dJ5MUh),
        useSubtitle: () => R.intl.string(R.t.nQavHr),
        usePredicate: () => nm.Av && !(0, nm.cX)(),
        useValue: () => lQ.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            (lQ.setState({ minimizeToTray: e }), lK.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e));
        },
        initialize: () => {
            lK.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => lQ.setState({ minimizeToTray: e }));
        },
    }),
    l1 = (0, d.zD)(c.X.OS_START_MINIMIZED, {
        useTitle: () => R.intl.string(R.t.GfBL83),
        useSubtitle: () => R.intl.string(R.t.XGyhhc),
        usePredicate: () => (0, nm.uF)(),
        useValue: () => lQ.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            (lQ.setState({ startMinimized: e }), lK.Ay.send("TOGGLE_START_MINIMIZED", e));
        },
        useDisabled: () => !lQ.useState((e) => e.openOnStartup),
        initialize: () => {
            lK.Ay.getSetting("START_MINIMIZED", !1).then((e) => lQ.setState({ startMinimized: e }));
        },
    });
var l2 = n(61628);
let l3 = new Set(["failure", "unknown"]),
    l6 = (0, d.E2)(c.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [R.intl.string(R.t.roHq80)],
        Component: function () {
            let [e, t] = E.useState(!1),
                [n, i] = E.useState(() => (0, i2.TC)()),
                l = (0, h.bG)([iQ.Ay], () => iQ.Ay.getSystemServiceStatus("input-service")),
                s = E.useCallback(async () => {
                    (t(!0),
                        n ? await (0, i2.z8)("windows-settings") : await (0, i2.sL)("windows-settings"),
                        t(!1),
                        i((0, i2.TC)()));
                }, [n]);
            return (0, A.jsxs)("div", {
                className: l2.q,
                children: [
                    (0, A.jsxs)("div", {
                        className: l2.L,
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
                                                            : l3.has(l.state)
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
                                                                (0, ii.xb)(e.state);
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
        usePredicate: i2.XQ,
    });
var l5 = n(687813),
    l4 = n(562708),
    l8 = n(691540),
    l7 = n(97483);
async function l9() {
    try {
        await se();
    } catch {
        (0, l8.P0)({ id: "performance-trace-failed", type: l7.Ck.FAILURE, message: R.intl.string(R.t["8ihs9i"]) });
    }
}
async function se() {
    var e;
    let t = nh.A.tracing;
    if (null == t) return;
    (0, l8.P0)({ id: "performance-trace-capturing", type: l7.Ck.MESSAGE, message: R.intl.string(R.t.qGRW8d) });
    let [n, i, l] = await Promise.all([
            t.capturePerformanceTrace({ durationMs: 3e4 }),
            nh.A.processUtils.getSystemInfo(),
            nh.A.processUtils.getSystemMetrics(),
        ]),
        s = {
            captured_at: n.startedAtISO,
            duration_ms: n.durationMs,
            categories: n.categories,
            ...(0, l4.getSuperProperties)(),
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
            "system_info.json": (0, l5._u)(JSON.stringify(r, null, 2)),
            "metadata.json": (0, l5._u)(JSON.stringify(s, null, 2)),
        }),
        new Promise((t, n) => {
            (0, l5.yU)(e, { level: 6 }, (e, i) => (null != e ? n(e) : t(i)));
        })),
        o = `Discord-Trace-${n.startedAtISO.replace(/:/g, "-").replace(/\..*$/, "")}.zip`,
        { filePath: u } = await t.saveTraceToDownloads(a, o);
    (nh.A.fileManager.showItemInFolder(u),
        (0, l8.P0)({ id: "performance-trace-saved", type: l7.Ck.SUCCESS, message: R.intl.string(R.t.gpCRFS) }));
}
let st = (0, d.Tf)(c.X.CAPTURE_PERFORMANCE_TRACE, {
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
                ((0, tM.default)(), l9());
            },
        });
    },
});
function sn() {
    e5.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
var si = n(287809);
let sl = (0, d.Tf)(c.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, h.bG)([si.default], () => si.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        sn();
    },
});
var ss = n(114129),
    sr = n(442325),
    sa = n(858760);
let so = (0, d.zD)(c.X.ENABLE_TABS_EXPERIENCE, {
        useTitle: () => "Enable tabs experience",
        useSubtitle: () =>
            "Open channels as browser-style tabs in the title bar, each with its own back/forward history.",
        usePersistentBadge: () => ({ badgeType: m.Xi.BETA }),
        usePredicate: () => sa.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, nm.xl)(),
        useValue: () => (0, h.bG)([sr.A], () => sr.A.isUserOptedIn()),
        setValue: ss.lj,
    }),
    su = (0, d.zZ)(c.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => R.intl.string(R.t["8/udY0"]),
        buildLayout: () => [sl, st, so],
    }),
    sd = (0, d.zZ)(c.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => R.intl.string(R.t.cg6ltt),
        buildLayout: () => [l$, l1, l0, lZ],
        usePredicate: () => nm.Av && ((0, nm.uF)() || (0, nm.j9)()),
        initialize: () => {
            lJ();
        },
    }),
    sc = (0, d.zZ)(c.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["069nVT"]),
        useSubtitle: () => R.intl.string(R.t.T4LZVL),
        buildLayout: () => [lw],
        initialize: () => (iX.A.enableAll(!1), () => iX.A.enableAll(!0)),
        useInlineNotice: function () {
            return nm.Av
                ? {
                      type: m.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, A.jsxs)(X.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, A.jsx)(iz.w, { type: "info", children: R.intl.string(R.t["5pkmHa"]) }),
                                  (0, A.jsx)(i4, { sourcePage: "keybinds" }),
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
                              icon: iF.j,
                              onClick: () => iX.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    sg = (0, d.zZ)(c.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Lz5KHI),
        buildLayout: () => [lH],
    }),
    sm = (0, d.zZ)(c.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => R.intl.string(R.t["+XZgmA"]),
        usePredicate: () => nm.Av && ((0, nm.uF)() || (0, nm.j9)()),
        buildLayout: () => [l6],
    }),
    sA = (0, d.t_)(c.X.SYSTEM_PANEL, {
        useTitle: () => R.intl.string(R.t["VJ/qKo"]),
        buildLayout: () => [sd, sc, sg, sm, su],
    }),
    sE = (0, d.i4)(c.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["VJ/qKo"]),
        icon: iB.F,
        buildLayout: () => [sA],
    });
var sh = n(831544),
    sS = n(922795),
    sT = n(212245),
    sp = n(329551),
    sx = n(285918),
    sf = n(712711),
    sI = n(952572),
    s_ = n(382003);
let sN = (0, d.E2)(c.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.lZTUPs)],
        usePredicate: sI.A,
        Component: function () {
            let e = (0, sT.p)(),
                t = E.useRef(!1),
                n = (0, h.bG)([i1.Ay], () => i1.Ay.getVideoDeviceId()),
                [i, l] = E.useState((0, sp.i)(si.default.getCurrentUser())),
                s = E.useRef(i);
            return (
                E.useEffect(
                    () => () => {
                        t.current && (0, sx._C)(s.current);
                    },
                    [],
                ),
                (0, A.jsx)(s_.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: function (n) {
                        ((t.current = !0), (s.current = n), l(n), (0, sf.gB)(n, { location: e.location }).catch(S.tEg));
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    sC = (0, d.zD)(c.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => R.intl.string(R.t["3Ppr1h"]),
        useSubtitle: () => R.intl.string(R.t.WNbX4O),
        useValue: L.bm.useSetting,
        setValue: (e) => {
            (L.bm.updateSetting(e), tt.default.track(S.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
        },
    });
var sb = n(625841),
    sy = n(74848),
    sv = n(204050);
let sj = (0, eT.D)(() => ({ previewEnabled: !1 })),
    sO = (0, d.E2)(c.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.FsQ3OR)],
        Component: function () {
            let e = (0, h.bG)([i1.Ay], () => i1.Ay.isVideoAvailable()),
                { id: t } = (0, sy.x5)(lM.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, eP.Ay)();
            return (0, A.jsx)(sb.U, {
                label: R.intl.string(R.t.FsQ3OR),
                deviceType: lM.oh.VIDEO_INPUT,
                location: "UserSettingsCameraSelect",
                isDisabled: !e,
                helperText: (0, sv.p)()
                    ? R.intl.format(R.t.aJYgRt, {
                          onCameraSettingsClick: () => {
                              (sj.setState({ previewEnabled: !1 }),
                                  window.open((0, sv.i)(t)),
                                  tt.default.track(S.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n }));
                          },
                      })
                    : void 0,
            });
        },
    });
var sL = n(745317),
    sR = n(9219);
let sD = (0, d.E2)(c.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [R.intl.string(R.t.JIf4v7)],
        Component: function () {
            let e = i1.Ay.getCameraComponent(),
                t = (0, h.bG)([i1.Ay], () => i1.Ay.getVideoDeviceId()),
                n = sj.useField("previewEnabled"),
                i = (0, h.bG)([i1.Ay], () => i1.Ay.isVideoAvailable());
            return ((0, eS.l0)(() => {
                sj.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, A.jsx)("div", {
                      className: sR.T9,
                      children: (0, A.jsxs)("div", {
                          className: sR.Xi,
                          children: [
                              (0, A.jsxs)("div", {
                                  className: sR.UI,
                                  children: [
                                      (0, A.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, A.jsx)(sL.kE, {}),
                                  ],
                              }),
                              (0, A.jsx)(sL.eK, {}),
                          ],
                      }),
                  })
                : (0, A.jsx)("div", {
                      className: sR.T9,
                      children: (0, A.jsx)(lt.m, {
                          text: i ? null : R.intl.string(R.t["8jSzSe"]),
                          children: (0, A.jsx)(_.$, {
                              variant: "primary",
                              text: R.intl.string(R.t.JIf4v7),
                              onClick: () => sj.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    sP = (0, d.zZ)(c.X.CAMERA_CATEGORY, {
        useTitle: () => R.intl.string(R.t.uje3P9),
        usePredicate: () => (0, h.bG)([i1.Ay], () => i1.Ay.supports(lM.O5.VIDEO)),
        buildLayout: () => [sD, sC, sO, sN],
    });
var sG = n(827343);
let sU = (0, d.zD)(c.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => R.intl.string(R.t.qFphsa),
        useSubtitle: () => R.intl.string(R.t.cQfwyY),
        usePredicate: function () {
            return (0, nm.j9)();
        },
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            (sG.A.setOpenH264Enabled(e),
                (0, nJ.A)({
                    title: R.intl.string(R.t["9jf31O"]),
                    subtitle: R.intl.string(R.t["J2wg+X"]),
                    confirmText: R.intl.string(R.t.BddRzS),
                    onConfirm: () => nh.A.app.relaunch(),
                }));
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    sM = (0, d.zD)(c.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => R.intl.string(R.t["r6K+TL"]),
        useSubtitle: () => R.intl.string(R.t["xl9+I6"]),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getAecDump());
        },
        setValue: sG.A.setAecDump,
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.isAecDumpSupported());
        },
    });
var sV = n(139033),
    sk = n(862482),
    sw = n(640238),
    sF = n(825484),
    sB = n(144009),
    sz = n(487329),
    sX = n(353835);
let sY = (0, eT.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function sH() {
    let e = await nh.A.fileManager.getLogPath();
    nh.A.fileManager.showItemInFolder(e);
}
function sK(e) {
    (0, nJ.A)({
        title: R.intl.string(R.t["7UXEF2"]),
        subtitle: R.intl.string(R.t.IYPrRl),
        confirmText: R.intl.string(R.t.BddRzS),
        onConfirm: () => sG.A.setDebugLogging(e),
    });
}
async function sW(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        (await i1.Ay.getMediaEngine().writeAudioDebugState(),
            await sX.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, sB.a)(S.Umv.RTC),
            (e = R.intl.string(R.t["fKBB8+"])),
            (t = R.intl.string(R.t.BvyxE7)),
            (0, sV.A)({ title: e, subtitle: t }));
    } catch (s) {
        var i;
        let e, t, n, l;
        ((i = s.displayMessage),
            (e = R.intl.string(R.t.QZg0J7)),
            (t = i ?? R.intl.string(R.t.VzHcSm)),
            (n = (0, sz.B1)(sz.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (l = R.intl.formatToPlainString(R.t.ejOT95, { errorCode: n })),
            (0, la.openModal)((n) =>
                (0, A.jsx)(sw.a, {
                    header: e,
                    confirmButtonColor: sk.$n.Colors.BRAND,
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
            ));
    } finally {
        n?.();
    }
}
async function sZ() {
    await sW({
        onUploadStart: () => sY.setState({ isUploading: !0 }),
        onUploadFinish: () => sY.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let sq = (0, d.E2)(c.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [R.intl.string(R.t["726JHL"]), R.intl.string(R.t.EbwFfR), R.intl.string(R.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, h.bG)([i1.Ay], () => i1.Ay.supports(lM.O5.DEBUG_LOGGING));
        return nm.Av && e && null != nh.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, h.bG)([i1.Ay], () => i1.Ay.getDebugLogging()),
            t = sY.useField("isUploading"),
            n = sY.useField("isDisabled"),
            i = E.useId();
        return (0, A.jsxs)("fieldset", {
            children: [
                (0, A.jsx)(ln.A, { tag: "legend", id: i, children: R.intl.string(R.t["FjN+et"]) }),
                (0, A.jsxs)(X.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, A.jsx)(tJ.d, {
                            label: R.intl.string(R.t["726JHL"]),
                            description: R.intl.string(R.t["/7ak9Q"]),
                            checked: e,
                            onChange: sK,
                        }),
                        (0, A.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, A.jsxs)(sF.e, {
                                children: [
                                    (0, A.jsx)(_.$, {
                                        variant: "secondary",
                                        text: R.intl.string(R.t.EbwFfR),
                                        onClick: sZ,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": R.intl.string(R.t.aY1OH2),
                                    }),
                                    (0, A.jsx)(_.$, {
                                        variant: "secondary",
                                        text: R.intl.string(R.t.nuPtYi),
                                        onClick: sH,
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
var sQ = n(233545),
    sJ = n(412780);
function s$() {
    return (0, h.bG)([si.default, i1.Ay], () => {
        let e = si.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === lK.Ay.releaseChannel || "development" === lK.Ay.releaseChannel,
            i = i1.Ay.supports(lM.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let s0 = (0, d.zD)(c.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => R.intl.string(R.t.U4FgFK),
        useSubtitle: () => R.intl.string(R.t.Lm72RU),
        useValue: function () {
            return (0, h.bG)([sJ.Ay], () => sJ.Ay.shouldRecordNextConnection());
        },
        setValue: sQ.Et,
        usePredicate: s$,
    }),
    s1 = (0, d.Tf)(c.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => R.intl.string(R.t.nJnOHO),
        useLabel: () => R.intl.string(R.t["3xjX0U"]),
        onClick: sQ.YW,
        usePredicate: s$,
    });
var s2 = n(926919),
    s3 = n(111162),
    s6 = n(855302);
let s5 = (0, d.zD)(c.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => R.intl.string(R.t["0CEP6e"]),
        useSubtitle: () => R.intl.string(R.t["kBXuW+"]),
        useValue: function () {
            return (0, h.bG)([s3.default], () => s3.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = s3.default.isStreamInfoOverlayEnabled;
            ((0, s6.A)("stream_info_overlay_enabled", e, t), (0, s2.x)({ isStreamInfoOverlayEnabled: e }));
        },
        usePredicate: function () {
            return L.Q_.useSetting();
        },
    }),
    s4 = (0, d.bd)(c.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? R.intl.string(R.t["/B4I8H"]) : R.intl.string(R.t.BTlsWH)),
        useCollapsedSubtitle: () => R.intl.string(R.t.la1Ys4),
        buildLayout: () => [s5, sM, s0, s1, sq],
    });
function s8(e, t, n) {
    (0, nJ.A)({ title: e, subtitle: t, confirmText: R.intl.string(R.t.BddRzS), onConfirm: n });
}
let s7 = (0, d.Tf)(c.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => R.intl.string(R.t.SXfv1v),
        useSubtitle: () => R.intl.string(R.t["buA5/q"]),
        useLabel: () => R.intl.string(R.t.yBZMsQ),
        onClick: function () {
            s8(R.intl.string(R.t["4iKQ/3"]), R.intl.string(R.t.sQ42iT), sG.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    s9 = (0, d.zZ)(c.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.UDAU9K),
        buildLayout: () => [sU, s4, s7],
    });
var re = n(736056),
    rt = n(360729),
    rn = n(446243),
    ri = n(558076),
    rl = n(270103);
let rs = (0, d.zD)(c.X.GUILD_ROOMS_REMEMBER_LAST_VIEW_SETTING, {
        useTitle: () => R.intl.string(rl.default.qYzpsI),
        useSubtitle: () => R.intl.string(rl.default["+vMoL1"]),
        useValue: () => (0, h.bG)([ri.A], () => ri.A.getRememberVideoOverlayVisibility()),
        setValue: (e) => (0, rn.Ft)(e),
    }),
    rr = (0, d.zZ)(c.X.GUILD_ROOMS_CATEGORY, {
        useTitle: () => R.intl.string(rl.default.wRLmM0),
        usePredicate: function () {
            let e = (0, h.yK)([lh.A], () => lh.A.getGuildIds()),
                { loaded: t, override: n } = (0, h.cf)([re.A], () => ({
                    loaded: re.A.getLoadedGuildExperiment(rt.vJ),
                    override: re.A.getExperimentOverrideDescriptor(rt.vJ),
                }));
            return (0, E.useMemo)(
                () =>
                    (null != t || null != n) &&
                    e.some(
                        (e) =>
                            (0, rt.W8)(
                                { guildId: e, location: "useHasGuildRoomsEligibleGuild" },
                                { autoTrackExposure: !1 },
                            ).enabled,
                    ),
                [e, t, n],
            );
        },
        buildLayout: () => [rs],
    });
var ra = n(347481),
    ro = n(852712),
    ru = n(179172),
    rd = n(868162);
let rc = (0, d.zD)(c.X.VOICE_AUDIO_DEVICE_SUGGESTIONS_SETTING, {
        useTitle: () => R.intl.string(R.t.gF8HJo),
        useSubtitle: () => R.intl.string(R.t.cfrfyZ),
        useValue: function () {
            return (0, h.bG)([rd.A], () => !0 !== rd.A.getState().neverShowModal);
        },
        setValue: function (e) {
            ru.Bv(!e);
        },
        usePredicate: function () {
            return eQ.isPlatformEmbedded;
        },
    }),
    rg = (0, d.zD)(c.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => R.intl.string(R.t.cUMdH0),
        useSubtitle: () => R.intl.string(R.t["6EjbvA"]),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            sG.A.setAutomaticGainControl(e, { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, h.bG)([i1.Ay, ra.A], () => {
                let e = i1.Ay.getInputDeviceId();
                return ra.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.isAutomaticGainControlSupported() && i1.Ay.isInputProfileCustom());
        },
    }),
    rm = (0, d.sN)(c.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => R.intl.string(R.t.AlybXj),
        setValue: (e) =>
            sG.A.setAttenuation(e, i1.Ay.getAttenuateWhileSpeakingSelf(), i1.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => i1.Ay.getAttenuation(),
    }),
    rA = (0, d.zD)(c.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => R.intl.string(R.t["9dHxRY"]),
        useValue: () => (0, h.bG)([i1.Ay], () => i1.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => sG.A.setAttenuation(i1.Ay.getAttenuation(), e, i1.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rE = (0, d.zD)(c.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => R.intl.string(R.t.SMt0Gr),
        useValue: () => (0, h.bG)([i1.Ay], () => i1.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => sG.A.setAttenuation(i1.Ay.getAttenuation(), i1.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    rh = (0, d.FW)(c.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.oSdBvW),
        useSubtitle: () => R.intl.string(R.t["0A/8Rt"]),
        usePredicate: () => (0, h.bG)([i1.Ay], () => i1.Ay.supports(lM.O5.ATTENUATION)),
        buildLayout: () => [rm, rA, rE],
    });
var rS = n(801644);
let rT = (0, d.zD)(c.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => R.intl.string(R.t.pZ0vr4),
        useSubtitle: () => R.intl.string(R.t.tVbzoZ),
        useValue: function () {
            return (0, h.bG)([eg.Ay], () => !eg.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            ((0, s6.A)("hardware_mute_silence_alert_enabled", e, !eg.Ay.disableHardwareMuteSilenceAlert),
                ni.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e }));
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = rS.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    rp = (0, d.zD)(c.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => R.intl.string(R.t.DFPXIG),
        useSubtitle: () => R.intl.string(R.t["UyRX+C"]),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            sG.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.showBypassSystemInputProcessing() && i1.Ay.isInputProfileCustom());
        },
    }),
    rx = (0, d.zD)(c.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => R.intl.string(R.t.jrWHD3),
        useSubtitle: () => R.intl.string(R.t.YCCMkJ),
        useValue: function () {
            return (0, h.bG)([eg.Ay], () => !eg.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            ((0, s6.A)("switch_channel_warning_enabled", e, !eg.Ay.disableVoiceChannelChangeAlert),
                ni.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e }));
        },
    }),
    rf = (0, d.zD)(c.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => R.intl.string(R.t.BbESsg),
        useSubtitle: () => R.intl.string(R.t.LoOB1F),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => {
                let { vadUseKrisp: e } = i1.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = i1.Ay.getMode();
            sG.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, h.bG)(
                [i1.Ay],
                () => i1.Ay.getMode() !== S.TBI.VOICE_ACTIVITY || !i1.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.isAdvancedVoiceActivitySupported() && i1.Ay.isInputProfileCustom());
        },
    }),
    rI = (0, d.Hn)(c.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => R.intl.string(R.t.wVBHr0),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            s8(R.intl.string(R.t.uY7AcQ), R.intl.string(R.t.gBqik6), () => sG.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, h.cf)([i1.Ay], () => ({
                legacyAudioSubsystemSupported: i1.Ay.supports(lM.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: i1.Ay.supports(lM.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: i1.Ay.supports(lM.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return E.useMemo(() => {
                let i;
                return (
                    (i = [{ id: lM.rB.STANDARD, value: lM.rB.STANDARD, label: R.intl.string(R.t.dqb2JZ) }]),
                    e && i.push({ id: lM.rB.LEGACY, value: lM.rB.LEGACY, label: R.intl.string(R.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: lM.rB.EXPERIMENTAL, value: lM.rB.EXPERIMENTAL, label: R.intl.string(R.t.liQmtr) }),
                    n && i.push({ id: lM.rB.AUTOMATIC, value: lM.rB.AUTOMATIC, label: R.intl.string(R.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    r_ = (0, d.zD)(c.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => R.intl.string(R.t.uancuJ),
        useSubtitle: () => R.intl.string(R.t.I1Eoqq),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getQoS());
        },
        setValue: function (e) {
            sG.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.supports(lM.O5.QOS));
        },
    }),
    rN = (0, d.zD)(c.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => R.intl.string(R.t["4rsOPQ"]),
        useSubtitle: () => R.intl.string(R.t.jtiiCw),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            sG.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return eQ.isPlatformEmbedded;
        },
    }),
    rC = (0, d.bd)(c.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? R.intl.string(R.t.KHsSWK) : R.intl.string(R.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            tA(c.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, h.bG)([i1.Ay], () => i1.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [rg, rf, rp, rc, rN, rT, rx, rh, rI, r_],
    }),
    rb = (0, d.zD)(c.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => R.intl.string(R.t.iWTwu6),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            sG.A.setEchoCancellation(e, { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, h.bG)([i1.Ay, ra.A], () => {
                let e = i1.Ay.getInputDeviceId();
                return ra.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.isInputProfileCustom());
        },
    });
var ry = n(459838),
    rv = n(451988),
    rj = n(475883),
    rO = n(9761);
let rL = (0, tw.Ld)();
function rR(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: l, ariaLabelledBy: s, disabled: r } = e;
    return (0, A.jsx)("div", {
        role: "meter",
        className: ir()(rj.$I, n),
        id: i,
        "aria-describedby": l,
        "aria-labelledby": s,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? R.intl.string(R.t.haLKZ0) : R.intl.string(R.t.X2hJL7),
        children: (0, A.jsx)("div", { className: ir()(rj.Jx, rj.NU, { [rj.zY]: t && !r, [rj.r9]: r }) }),
    });
}
function rD(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: l, disabled: s } = e,
        { threshold: r, autoThreshold: a } = (0, h.cf)([i1.Ay], () => ({
            threshold: i1.Ay.getModeOptions().threshold,
            autoThreshold: i1.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, h.bG)([i1.Ay], () => i1.Ay.getMode());
    return (0, A.jsx)("section", {
        className: ir()(rj.Mo, rj.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": l,
        children: (0, A.jsx)(Y.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return ((t = -((100 - e) * 1)), void sG.A.setMode(o, { threshold: t, autoThreshold: a }));
            },
            barStyles: { background: nQ.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: nQ.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rL,
            disabled: s,
            children: (0, A.jsxs)("div", {
                className: ir()(rj.NU, rj.TL, rj.Jx, rO.bar),
                children: [
                    (0, A.jsx)("div", { className: ir()(rj.GS, rj.SH), style: { width: s ? 0 : t + 100 + "%" } }),
                    (0, A.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let rP = (0, d.E2)(c.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [R.intl.string(R.t["sqUm+k"]), R.intl.string(R.t.I1Zuq0), R.intl.string(R.t.nuFtHH)],
    usePredicate: () => (0, h.bG)([i1.Ay], () => i1.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, h.cf)([i1.Ay], () => ({
                autoThreshold: i1.Ay.getModeOptions().autoThreshold,
                disabled: i1.Ay.getMode() !== lM.TB.VOICE_ACTIVITY,
            })),
            n = E.useCallback((e) => {
                let t = i1.Ay.getMode(),
                    { threshold: n } = i1.Ay.getModeOptions();
                sG.A.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, h.bG)([i1.Ay], () => i1.Ay.supports(lM.O5.AUTOMATIC_VAD)),
            { volume: l, isSpeaking: s } = (function () {
                let [e, t] = E.useState(-100),
                    [n, i] = E.useState(!1);
                function l(e, n) {
                    (t(e), i((n & lM.ME.VOICE) === lM.ME.VOICE));
                }
                return (
                    E.useEffect(() => {
                        let e = new rv.Ep();
                        return (
                            e.start(1e3, () => {
                                (i1.Ay.getMediaEngine().on(ry.bg.VoiceActivity, l), e.stop());
                            }),
                            () => {
                                (i1.Ay.getMediaEngine().removeListener(ry.bg.VoiceActivity, l), e.stop());
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            r = (0, h.bG)([i1.Ay], () => i1.Ay.isEnabled()),
            a = E.useMemo(
                () =>
                    !r &&
                    (0, A.jsx)("div", {
                        className: rj.B4,
                        children: (0, A.jsx)(iz.w, {
                            type: "warning",
                            children: R.intl.format(R.t["O13I+O"], { onEnableClick: () => sG.A.enable(!0) }),
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
                      (0, A.jsx)(ln.A, { tag: "legend", id: u, children: R.intl.string(R.t.GByLar) }),
                      (0, A.jsx)(ln.A, { id: d, children: o }),
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
                                  ? (0, A.jsx)(rR, {
                                        isSpeaking: s,
                                        className: rj.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, A.jsx)(rD, { volume: l, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
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
                                  ? (0, A.jsx)(rR, {
                                        isSpeaking: s,
                                        className: rj.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, A.jsx)(rD, {
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
var rG = n(366010);
let rU = n(993830),
    rM = n(413142),
    rV = { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO };
function rk() {
    let e = (0, h.bG)([nM.A], () => (0, rG.q)(nM.A.theme));
    return (0, A.jsx)("img", { src: e ? rU : rM, width: 48, height: 32, alt: "" });
}
let rw = (0, d.E2)(c.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.t8Qhib), R.intl.string(R.t.hmfkCi)],
    usePredicate: function () {
        return (0, h.bG)([i1.Ay], () => i1.Ay.isInputProfileCustom() && i1.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = E.useCallback((e) => {
                (sG.A.setNoiseCancellation("KRISP" === e, rV), sG.A.setNoiseSuppression("STANDARD" === e, rV));
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: l,
            } = (0, h.cf)([i1.Ay], () => ({
                noiseCancellation: i1.Ay.getNoiseCancellation(),
                noiseSuppression: i1.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: i1.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: i1.Ay.isNoiseCancellationSupported(),
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
                (0, A.jsx)(i7.l, {
                    label: R.intl.string(R.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: s,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                l && (0, A.jsx)(rk, {}),
            ],
        });
    },
});
var rF = n(934729),
    rB = n(621380);
let rz = !nm.Av;
function rX() {
    return (0, h.bG)([i1.Ay], () => i1.Ay.getMode() === lM.TB.PUSH_TO_TALK);
}
let rY = (0, d.zD)(c.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nm.Av ? R.intl.string(R.t.tG4Np5) : R.intl.string(R.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, h.bG)([i1.Ay], () => i1.Ay.getMode());
        return E.useMemo(() => {
            if (!nm.Av && e === lM.TB.PUSH_TO_TALK)
                return R.intl.format(R.t["VHI4+Y"], { onDownloadClick: () => (0, rF._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, h.bG)([i1.Ay], () => i1.Ay.getActiveInputProfile() !== rB.m.STUDIO);
    },
    useValue: function () {
        return (0, h.bG)([i1.Ay], () => i1.Ay.getMode() === lM.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        ((t = e ? lM.TB.PUSH_TO_TALK : lM.TB.VOICE_ACTIVITY),
            (i = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === lM.TB.PUSH_TO_TALK &&
                rz &&
                (0, la.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("844331"), n.e("410919")]).then(n.bind(n, 556506));
                    return (t) =>
                        (0, A.jsx)(e, {
                            title: R.intl.string(R.t.Kdt0Gb),
                            confirmText: R.intl.string(R.t["1WjMbC"]),
                            cancelText: R.intl.string(R.t.BddRzS),
                            onConfirm: () => (0, rF._)("PTT Limited Modal"),
                            body: R.intl.string(R.t.NIozvt),
                            ...t,
                        });
                }),
            sG.A.setMode(t, void 0, void 0, { analyticsLocations: i }));
    },
    useSearchTerms: () => [R.intl.string(R.t["pS+K2L"]), R.intl.string(R.t.nuFtHH)],
});
var rH = n(484599);
let rK = (0, d.E2)(c.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["pS+K2L"]), R.intl.string(R.t.nuFtHH)],
        usePredicate: rX,
        Component: function () {
            let e = (0, h.bG)([i1.Ay], () => {
                    let { shortcut: e } = i1.Ay.getModeOptions();
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
                    className: rH.e,
                    children: (0, A.jsx)(ll.A, {
                        defaultValue: e,
                        onChange: (e) => sG.A.setMode(S.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    rW = (0, d.sN)(c.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => R.intl.string(R.t.GCNMM8),
        useSearchTerms: () => [R.intl.string(R.t["pS+K2L"]), R.intl.string(R.t.nuFtHH)],
        setValue: function (e) {
            sG.A.setMode(S.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: S.IjB,
        getInitialValue: function () {
            let { delay: e } = i1.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: rX,
    });
var rZ = n(844981),
    rq = n(943679);
function rQ() {
    return (0, rZ.Ay)("VoiceSettings");
}
let rJ = (0, d.zD)(c.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => R.intl.string(rq.default.LGDPhA),
        useSubtitle: function () {
            let e = rQ();
            if ((0, rZ.Xt)(e))
                return e === rZ.L3.BLOCKED_MONO_OUTPUT
                    ? R.intl.string(rq.default.rOXfEw)
                    : R.intl.string(rq.default.O7Aa3Y);
        },
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            sG.A.setSpatialAudio(e, [tL.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return rQ() !== rZ.L3.HIDDEN;
        },
        useDisabled: function () {
            return (0, rZ.Xt)(rQ());
        },
    }),
    r$ = (0, d.Qx)(c.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => R.intl.string(R.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, ro._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [R.intl.string(R.t.nuFtHH), R.intl.string(R.t.VZPR0R), R.intl.string(R.t.cjPbpT)],
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getActiveInputProfile() ?? rB.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sG.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, ro.d)({ location: "InputProfileCategory" });
            return [
                { value: rB.m.VOICE_ISOLATION, name: R.intl.string(R.t.cjPbpT), desc: R.intl.string(R.t.CzhvnE) },
                { value: rB.m.STUDIO, name: R.intl.string(R.t.VZPR0R), desc: R.intl.string(R.t.ZaJksS) },
                { value: rB.m.CUSTOM, name: R.intl.string(R.t["N/PQjv"]), desc: R.intl.string(R.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    r0 = (0, d.zZ)(c.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, h.bG)([ra.A, i1.Ay], () => {
                let e = i1.Ay.getInputDeviceId();
                return (
                    (ra.A.hasEchoCancellation(e) || ra.A.hasNoiseSuppression(e) || ra.A.hasAutomaticGainControl(e)) &&
                    i1.Ay.isInputProfileCustom()
                );
            });
            return E.useMemo(() => {
                if (e) return { type: m.lT.INLINE_NOTICE, noticeType: "info", text: R.intl.string(R.t["/Whuzi"]) };
            }, [e]);
        },
        buildLayout: () => [r$, rP, rw, rb, rJ, rY, rK, rW, rC],
    });
var r1 = n(403581),
    r2 = n(512950),
    r3 = n(983851),
    r6 = n(687021),
    r5 = n(128450),
    r4 = n(796774),
    r8 = n(209932),
    r7 = n(813564),
    r9 = n(984813),
    ae = n(922016),
    at = n(305866),
    an = n(22231),
    ai = n(158045),
    al = n(792348),
    as = n(674168),
    ar = n(511558),
    aa = n(817232),
    ao = n(647451);
function au(e) {
    let { onSelect: t } = e,
        [n, i] = E.useState(!1),
        l = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
        s = ai.Ay.canUseCustomCallSounds(l),
        r = E.useRef(null);
    function a(e) {
        s && (i(!1), t?.(e));
    }
    return (0, A.jsx)(ae.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, A.jsx)(at.l, {
                children: (0, A.jsx)(ar.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: s ? null : (0, A.jsx)(as.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, A.jsx)(aa.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: R.intl.string(R.t.uOe0Az),
                children: (0, A.jsx)(an.PencilIcon, { size: "md", color: "currentColor", className: ao.Wo }),
            }),
    });
}
function ad(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, al.A)(t, null),
        i =
            0 === (0, r7.wH)()
                ? R.intl.string(R.t.OASXjt)
                : R.intl.formatToPlainString(R.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, A.jsx)(aa.dT, {
        onClick: n,
        text: i,
        children: (0, A.jsx)(r3.H, { size: "md", color: "currentColor", className: ao.wg }),
    });
}
function ac(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        l = null != t,
        s = t?.emojiId,
        r = t?.emojiName,
        a = l && (null != r || null != s);
    return (0, A.jsxs)("div", {
        className: ao.D6,
        children: [
            (0, A.jsxs)("div", {
                className: ao.kL,
                children: [
                    a && (0, A.jsx)(ty.A, { emojiId: s, emojiName: r, className: ao.Zg }),
                    (0, A.jsx)(H.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: ao.dj,
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
                        ? (0, A.jsx)(ad, { sound: t })
                        : (0, A.jsx)(r3.H, { size: "md", color: "currentColor", className: ao.Gk }),
                ],
            }),
            (0, A.jsxs)("div", {
                className: ao.kL,
                children: [
                    (0, A.jsx)(au, { onSelect: i }),
                    l &&
                        !n &&
                        (0, A.jsx)(aa.dT, {
                            onClick: () => i(null),
                            text: R.intl.string(R.t.jmtcGA),
                            children: (0, A.jsx)(le.TrashIcon, {
                                size: "md",
                                color: nQ.A.unsafe_rawColors.RED_400.css,
                                className: ao.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var ag = n(617617);
n(980504);
var am = n(806050);
function aA(e) {
    return (0, h.bG)([r8.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return r8.A.getSound("0" === t ? "0" : t, n);
    });
}
function aE(e) {
    let { guildId: t } = e,
        n = (0, h.bG)([ag.A], () => ag.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = aA(n);
    if (null == n || null == i) return null;
    let { emojiId: l, emojiName: s } = i,
        r = null != l || null != s;
    return (0, A.jsxs)("div", {
        className: am.Io,
        children: [
            r
                ? (0, A.jsx)(ty.A, { emojiId: l, emojiName: s, className: am.nW })
                : (0, A.jsx)(r3.H, { size: "md", color: "currentColor", className: am.nW }),
            (0, A.jsx)(H.E, { className: am.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let ah = (0, d.E2)(c.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, eP.Ay)(),
            [t, n] = E.useState("0"),
            i = (0, r9.mz)(t),
            l = aA(i),
            s = i?.type === r9.PP.GLOBAL,
            r = (0, h.bG)([r8.A], () => r8.A.hasFetchedAllSounds()) && null != i && null == l;
        (E.useEffect(() => {
            r && (0, r7.ND)({ location: e });
        }, [r, e]),
            E.useEffect(() => {
                (0, r4.E7)();
            }, []));
        let a = E.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, A.jsx)(aE, { guildId: e.value }) : null;
        }, []);
        return (0, A.jsxs)(n$.n, {
            label: R.intl.string(R.t.nzUc3B),
            description: R.intl.format(R.t.u9RWmv, { helpdeskArticle: ex.A.getArticleURL(S.MVz.SOUNDBOARD) }),
            children: [
                (0, A.jsx)(r6.A, {
                    guildId: t,
                    className: am.Dt,
                    globalOption: { label: R.intl.string(R.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, A.jsxs)(r5.A, {
                    title: R.intl.format(R.t.I2TsYN, {
                        nitroWheelHook: () => (0, A.jsx)(r1.t, { size: "md", color: "currentColor", className: am.ax }),
                    }),
                    children: [
                        (0, A.jsx)(ac, {
                            sound: l,
                            isGlobal: s,
                            onSelect: (n) => {
                                null == n ? (0, r7.Dv)(t, e) : (0, r7.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, A.jsx)(r2.p, {
                                className: am.lm,
                                messageType: r2.Y.WARNING,
                                children: R.intl.string(R.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var aS = n(824744);
let aT = (0, d.sN)(c.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => R.intl.string(R.t.kbFsAD),
    useSubtitle: () => R.intl.format(R.t.BPbGq7, { helpCenterArticle: ex.A.getArticleURL(S.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, aS.w)(e);
        (0, r4.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, r7.wH)();
        return (0, aS.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var ap = n(864145);
let ax = (0, d.sN)(c.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t["2JbvKw"]),
        useSubtitle: () => R.intl.string(R.t.INenzY),
        setValue: function (e) {
            let t = (0, aS.w)(e);
            L.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = L.HO.getSetting();
            return (0, aS.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, ap.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    af = (0, d.zZ)(c.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => R.intl.string(R.t.ABjMWI),
        buildLayout: () => [aT, ax, ah],
    });
var aI = n(803224),
    a_ = n(552122);
let aN = (0, d.E2)(c.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [R.intl.string(R.t.fgSHf8)],
        usePredicate: () => null != a_.A.useHolidaySoundpack(),
        Component: () =>
            (0, A.jsx)(H.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: R.intl.format(R.t.Eup6Wv, {
                    onClick: () => (0, nl.openUserSettings)(c.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    aC = (0, d.AK)(c.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.eyGEE4),
        useSearchTerms: () => [R.intl.string(R.t.eyGEE4)],
        destinationKey: c.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    ab = (0, d.gN)(c.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [aC] });
var ay = n(264686);
let av = (0, eT.D)(() => ({ currentPlayingSound: null }));
function aj() {
    let e = av.getField("currentPlayingSound");
    (e?.stop(), av.setState({ currentPlayingSound: null }));
}
function aO(e) {
    let t = av.getField("currentPlayingSound");
    t?.stop();
    let n = (0, n5.Ak)(e);
    av.setState({ currentPlayingSound: n });
}
function aL(e) {
    return (0, d.zD)(`${c.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => R.intl.format(R.t.OOiGCM, { onClick: () => aO(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, h.bG)([aI.A], () => aI.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = aI.A.getDisabledSounds().filter((t) => t !== e.sound);
            (t || n.push(e.sound), ay.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, h.bG)([aI.A], () => aI.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let aR = [
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
    aD = (0, d.D1)(c.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? R.intl.formatToPlainString(R.t["0JYT98"], { count: t })
                : R.intl.formatToPlainString(R.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => tA(c.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                aj();
            };
        },
        buildLayout: () => aR.map((e) => aL(e)),
    }),
    aP = (0, d.zZ)(c.X.SOUNDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, h.bG)([aI.A], () => aI.A.getDisableAllSounds());
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
        buildLayout: () => [aD, aN, ab],
    }),
    aG = (0, d.zD)(c.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => R.intl.string(R.t.e3Zz3F),
        useSubtitle: () => R.intl.string(R.t.RztTjP),
        useValue: function () {
            return !L.uh.useSetting();
        },
        setValue: function (e) {
            ((0, s6.A)("stream_previews_disabled", !e, L.uh.getSetting(), [tL.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                L.uh.updateSetting(!e));
        },
    }),
    aU = (0, d.zD)(c.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => R.intl.string(R.t.GmWk2E),
        useSearchTerms: () => [R.intl.string(R.t["Fj/xn1"])],
        useSubtitle: () => R.intl.string(R.t["Fj/xn1"]),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getVideoHook());
        },
        setValue: sG.A.setVideoHook,
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.supportsVideoHook());
        },
    }),
    aM = (0, d.zD)(c.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => R.intl.string(R.t["4I0qzZ"]),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getExperimentalSoundshare());
        },
        setValue: sG.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => {
                let e = i1.Ay.supportsExperimentalSoundshare(),
                    t = i1.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    aV = (0, d.zD)(c.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => R.intl.string(R.t["/jwMtn"]),
        useSubtitle: () => R.intl.string(R.t.zlA23F),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sG.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return i1.Ay.supports(lM.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    ak = (0, d.sN)(c.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => R.intl.string(R.t.fhEzfj),
        setValue: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sG.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: i1.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, h.bG)([i1.Ay], () => i1.Ay.getSidechainCompression());
            return i1.Ay.supports(lM.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    aw = (0, d.zD)(c.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => R.intl.string(R.t.lt8rRx),
        useSubtitle: () => R.intl.string(R.t.ie1mgY),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, nm.cX)() && e
                ? (0, nJ.A)({
                      title: R.intl.string(R.t["9jf31O"]),
                      subtitle: R.intl.string(R.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          (sG.A.setUseSystemScreensharePicker(e), nh.A.app.relaunch());
                      },
                      confirmText: R.intl.string(R.t.BddRzS),
                  })
                : sG.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.supportsSystemScreensharePicker() && (0, nm.cX)());
        },
    }),
    aF = (0, d.bd)(c.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? R.intl.string(R.t.qrMyvm) : R.intl.string(R.t.LEtTNl)),
        useCollapsedSubtitle: () => tA(c.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [aV, ak, aw, aM, aU],
    }),
    aB = (0, d.zZ)(c.X.STREAMING_CATEGORY, { useTitle: () => R.intl.string(R.t.KDdjou), buildLayout: () => [aG, aF] });
var az = n(106713);
let aX = (0, d.E2)(c.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = az.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, A.jsx)(sb.U, {
                label: R.intl.string(R.t.UTM8VP),
                deviceType: lM.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    aY = (0, d.E2)(c.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = az.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, A.jsx)(sb.U, {
                label: R.intl.string(R.t.xuYQ0n),
                deviceType: lM.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    aH = (0, d.zC)(c.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [aX, aY] }),
    aK = (0, d.sN)(c.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = i1.Ay.getInputVolume();
            return (0, aS.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aS.w)(e);
            sG.A.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    aW = (0, d.sN)(c.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = i1.Ay.getOutputVolume();
            return (0, aS.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aS.w)(e);
            sG.A.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    aZ = (0, d.zC)(c.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [aK, aW] });
var aq = n(702841),
    aQ = n(152567),
    aJ = n(804037);
let a$ = `${ex.A.getArticleURL(S.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    a0 = (0, d.E2)(c.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.nuFtHH)],
        usePredicate: function () {
            return (0, aq.bG)([i1.Ay], () => i1.Ay.supports(lM.O5.LOOPBACK));
        },
        Component: function () {
            return (0, aq.bG)([i1.Ay], () => i1.Ay.supports(lM.O5.LOOPBACK))
                ? (0, A.jsx)(aQ.A, {
                      size: "md",
                      notchBackground: aQ.V.GRAY,
                      captionVoice: R.intl.string(R.t.bp3JOV),
                      captionNoVoice: (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(H.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: R.intl.string(R.t.bgn75v),
                              }),
                              R.intl.string(R.t["MA+OZh"]),
                              (0, A.jsx)(nn.Anchor, {
                                  className: aJ.X,
                                  href: ex.A.getArticleURL(S.MVz.NO_INPUT_DETECTED),
                                  children: R.intl.string(R.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: R.intl.format(R.t["V+B3FH"], { guideURL: a$ }),
                      buttonTest: R.intl.string(R.t.gyljWE),
                      buttonStop: R.intl.string(R.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    a1 = eQ.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function a2(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, A.jsxs)(X.B, {
        children: [
            n && (0, A.jsx)(i4, { sourcePage: "voice" }),
            t && (0, A.jsx)(lW.A, { look: lW.k.WARNING, children: R.intl.string(R.t.Ioz3gx) }),
        ],
    });
}
let a3 = (0, d.zZ)(c.X.VOICE_CATEGORY, {
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
            let e = i5("voice"),
                t = (0, sy.x5)(lM.oh.AUDIO_INPUT),
                n = (0, sy.x5)(lM.oh.AUDIO_OUTPUT),
                i = E.useMemo(() => {
                    let e = a1.some((e) => t?.hardwareId?.startsWith(e)),
                        i = a1.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return E.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: m.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, A.jsx)(a2, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [aH, aZ, a0],
    }),
    a6 = (0, d.t_)(c.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => R.intl.string(R.t.B1fFpf),
        buildLayout: () => [a3, r0, sP, aB, aP, af, rr, s9],
    }),
    a5 = (0, d.i4)(c.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.B1fFpf),
        usePredicate: () => i1.Ay.isSupported(),
        icon: sh.MicrophoneIcon,
        useMenu: sS.A,
        buildLayout: () => [a6],
    }),
    a4 = (0, d.WI)(c.X.APP_SECTION, {
        useTitle: () => R.intl.string(R.t.gcyH1J),
        buildLayout: () => [a5, nY, e1, iw, sE, nZ],
    });
var a8 = n(360669),
    a7 = n(974544),
    a9 = n(423764),
    oe = n(289873),
    ot = n(132500),
    on = n(465323),
    oi = n(37766),
    ol = n(194261),
    os = n(391048),
    or = n(277984),
    oa = n(99696),
    oo = n(202613),
    ou = n(615405),
    od = n(83617),
    oc = n(935208),
    og = n(607399),
    om = n(993077),
    oA = n(150934),
    oE = n(256006),
    oh = n(198970),
    oS = n(71532);
let oT = /[^0-9/]/g,
    op = /[^0-9]/g;
class ox extends E.PureComponent {
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
                ((i = (n = e.replace(oT, "").split("/"))[0]),
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
            ? (u = u.replace(op, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t));
    };
    render() {
        return (0, A.jsx)(lo.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var of = n(832208),
    oI = n(782328);
let o_ = [
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
                        getClassNameForLayout: () => oI.ep,
                        renderInput: (e) => (0, A.jsx)(ox, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    oN = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: l } = e,
            [s, r] = E.useState(!1),
            [a, o] = E.useState(null),
            [u, d] = E.useState(i);
        return (
            E.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, A.jsx)(of.A, {
                className: n,
                form: o_,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: l,
                onFieldChange: function (e) {
                    (s || "" === e || r(!0),
                        (s && "" === e) || !(0, oS.So)(e) ? o(R.intl.string(R.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var oC = n(219887),
    ob = n(292856);
let oy = "isDefault";
class ov extends E.PureComponent {
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
            expiresMonth: t instanceof oo.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof oo.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        e5.h.wait(() => {
            ((0, or.ey)(), (0, or.tc)());
        });
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(ii.Vq).length))
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
                ? (0, A.jsx)("div", {
                      className: ob.zc,
                      children: (0, A.jsx)(iz.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, A.jsx)("div", {
                  className: ob.zc,
                  children: (0, A.jsx)(iz.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, oE.g)(n);
        return (0, A.jsxs)("div", {
            className: ob.yV,
            children: [
                (0, A.jsx)(H.E, {
                    className: ob.bV,
                    variant: "text-sm/normal",
                    children: R.intl.string(R.t["50Auo2"]),
                }),
                (0, A.jsx)(oh.Ay, {
                    ...e,
                    mode: oh.Ay.Modes.EDIT,
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
            className: ob.yV,
            children: [
                (0, A.jsx)(H.E, { className: ob.bV, variant: "text-sm/normal", children: R.intl.string(R.t.Fo2YP7) }),
                (0, A.jsx)(oN, {
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
            className: ob.AU,
            children: (0, A.jsxs)(X.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, A.jsx)(sF.e, {
                        children: (0, A.jsxs)("div", {
                            className: ob.lH,
                            children: [
                                n
                                    ? (0, A.jsx)(lt.m, {
                                          text: R.intl.string(R.t["v6/z28"]),
                                          children: (0, A.jsx)("div", { "aria-hidden": !0, className: ob.dm }),
                                      })
                                    : null,
                                (0, A.jsx)(_.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: og.Fr ? "sm" : "md",
                                    text: og.Fr ? R.intl.string(R.t.oyYWHE) : R.intl.string(R.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, A.jsxs)(sF.e, {
                        children: [
                            (0, A.jsx)(_.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: og.Fr ? "sm" : "md",
                                text: R.intl.string(R.t["ETE/oC"]),
                            }),
                            (0, A.jsx)(_.$, {
                                loading: e,
                                disabled: !i || t || !l,
                                type: "submit",
                                variant: "active",
                                size: og.Fr ? "sm" : "md",
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
            r = e instanceof oo.SJ;
        return (0, A.jsx)(om.Z, {
            editable: !0,
            className: ir()(ob.Nr, i),
            children: (0, A.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, A.jsxs)("div", {
                        className: ob.__invalid_paymentSection,
                        children: [
                            (0, A.jsx)(oC.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: l,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, A.jsx)("div", { className: ob.Um, children: R.intl.string(R.t["3R0U0b"]) })
                                : null,
                            (0, A.jsx)("div", {
                                className: ob.Sv,
                                children: r
                                    ? R.intl.format(R.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : R.intl.string(R.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, A.jsx)("div", {
                        className: ob.D5,
                        children: (0, A.jsx)(oA.S, {
                            value: oy,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, oy),
                            label: R.intl.string(R.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, A.jsx)(i8.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let oj = h.Ay.connectStores([ou.A], () => ({ updateError: ou.A.editSourceError, removeError: ou.A.removeSourceError }))(
    ov,
);
var oO = n(986485),
    oL = n(849405),
    oR = n(329693);
function oD() {
    (0, oa.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, ot.A)() });
}
class oP extends E.PureComponent {
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
            ? (0, A.jsx)(oj, {
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
                      i ? null : (0, A.jsx)(i8.c, { className: oR.__invalid_sourceDivider }),
                      (0, A.jsxs)("div", {
                          className: oR.Yb,
                          children: [
                              (0, A.jsx)(oC.A, {
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
let oG = E.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: l, onRedeemClick: s } = e,
        [r, a] = E.useState(null),
        o = (0, h.bG)([si.default], () => si.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, h.bG)([ou.A], () => ou.A.ipCountryCode),
        d = E.useMemo(() => (0, on.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        E.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : or.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, A.jsxs)(A.Fragment, {
            children: [
                n ? null : (0, A.jsx)(i8.c, { className: oR.__invalid_sourceDivider }),
                (0, A.jsxs)("div", {
                    className: oR.Yb,
                    children: [
                        void 0 !== t
                            ? (0, A.jsx)(oC.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: l,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, A.jsxs)(lg.A, {
                                  align: lg.A.Align.CENTER,
                                  children: [
                                      (0, A.jsx)(oi._, { size: "lg" }),
                                      (0, A.jsx)(H.E, {
                                          variant: "text-sm/medium",
                                          className: oL.Wi,
                                          children: R.intl.string(oO.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, A.jsxs)("div", {
                            className: oR.zy,
                            children: [
                                (0, A.jsx)("div", {
                                    className: oR.Tq,
                                    children:
                                        null == r
                                            ? (0, A.jsx)(oe.y, { type: oe.y.Type.SPINNING_CIRCLE })
                                            : (0, A.jsx)(H.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = (0, on.$g)(e ?? 0, n, l, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${String(n).toUpperCase()} ${i}`;
                                                  })(),
                                              }),
                                }),
                                (0, A.jsx)(_.$, {
                                    variant: "secondary",
                                    onClick: s,
                                    size: "sm",
                                    text: R.intl.string(oO.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class oU extends E.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            (await or.Gr(e), this.setState({ editingPayment: e }));
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            (await or.JQ(e), this.setState({ editingPayment: null }));
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                (await or.Ps(e, t), this.setState({ editingPayment: null }));
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, od.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, la.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, A.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, os.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, A.jsxs)("div", {
            className: oR.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, A.jsxs)("div", {
                          className: oR.z8,
                          children: [
                              (0, A.jsx)(H.E, { variant: "text-sm/normal", children: R.intl.string(R.t.aRHpAB) }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: oR.Sv,
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
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : oc.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof oo.LQ)),
            c = u.filter((e) => e instanceof oo.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            E = d.map((e, t) =>
                (0, A.jsx)(
                    oP,
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
                              oG,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: l,
                                  onRedeemClick: oD,
                              },
                              e.id,
                          ),
                      )
                    : (0, A.jsx)(oG, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: oD,
                      })),
            (0, A.jsxs)(A.Fragment, {
                children: [
                    t
                        ? (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsxs)(p.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, A.jsx)(ol.LockIcon, { size: "sm", className: oR.hz }),
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
                    m !== d.length - 1 || (o && c.length > 0) ? (0, A.jsx)(i8.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var oM = n(459357),
    oV = n(295405),
    ok = n(166403),
    ow = n(773669),
    oF = n(943009);
function oB() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, a9.Gw)(e.country) };
}
let oz = (0, d.E2)(c.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, h.bG)([ou.A], () => ou.A.isSyncing),
                i = (0, h.bG)([oV.A], () => oV.A.paymentSources),
                l = (0, h.bG)([oV.A], () => oV.A.defaultPaymentSourceId),
                s = (0, h.bG)([ow.default], () => ow.default.locale),
                r = (0, h.bG)([ok.A], () => ok.A.getPremiumTypeSubscription()),
                a = (0, h.bG)([ou.A], () => ou.A.isRemovingPaymentSource),
                o = (0, h.bG)([ou.A], () => ou.A.isUpdatingPaymentSource),
                { enabled: u } = (0, oM.c)({ location: "UserSettingsBilling" });
            return (E.useEffect(() => {
                (or.$o(), or.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, A.jsx)("div", { className: oF.o, children: (0, A.jsx)(oe.y, {}) })
                : (0, A.jsx)(oU, {
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
    oX = (0, d.zZ)(c.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.W26xGQ),
        useSubtitle: () => {
            let e = oB();
            return null != e ? R.intl.format(R.t.e2t1G5, { country: e.countryName }) : R.intl.string(R.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == oB()
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
                                      (window.open("https://support.discord.com/hc/articles/39799791912087", "_blank"),
                                          e());
                                  },
                              },
                          ],
                      },
                  };
        },
        buildLayout: () => [oz],
    });
var oY = n(549363),
    oH = n(545075);
let oK = (0, d.E2)(c.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, h.bG)([ow.default], () => ow.default.locale);
            return (0, A.jsxs)(A.Fragment, { children: [(0, A.jsx)(oH.kb, {}), (0, A.jsx)(oY.A, { locale: e })] });
        },
        useSearchTerms: () => [R.intl.string(R.t.obLrcK)],
    }),
    oW = (0, d.zZ)(c.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.obLrcK),
        buildLayout: () => [oK],
    }),
    oZ = (0, d.t_)(c.X.BILLING_PANEL, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        buildLayout: () => [oX, oW],
        useObscuredNotice: a7.L,
    }),
    oq = (0, d.i4)(c.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        icon: a8.B,
        buildLayout: () => [oZ],
    });
var oQ = n(70283),
    oJ = n(597770),
    o$ = n(682618),
    o0 = n(38423),
    o1 = n(962644),
    o2 = n(35587),
    o3 = n(86379);
let o6 = (0, d.E2)(c.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: oH.uK,
        usePredicate: () => (0, o3.Hp)(),
        useSearchTerms: () => [R.intl.string(R.t.vwMEHS)],
    }),
    o5 = (0, d.zZ)(c.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [o6] });
var o4 = n(982240),
    o8 = n(788833),
    o7 = n(914410),
    o9 = n(556427),
    ue = n(573343);
let ut = "UserSettingsGiftingBadgeProgress";
function un(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, A.jsxs)("div", {
        className: ir()(ue.fO, { [ue.bF]: i }),
        children: [
            null != n && (0, A.jsx)("img", { src: n, alt: "", className: ue.si }),
            (0, A.jsxs)("div", {
                className: ue.tc,
                children: [
                    (0, A.jsx)(H.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, A.jsx)(H.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: R.intl.format(o9.default.qvx9E4, { count: (0, o4.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function ui(e) {
    let { tiers: t, currentTier: n } = e,
        i = (0, o0.b9)(ut);
    return (0, A.jsx)("div", {
        className: ue.dw,
        children: t.map((e) => (0, A.jsx)(un, { tier: e, iconUrl: (0, o0.Se)(e, i), active: e.key === n?.key }, e.key)),
    });
}
function ul(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, eP.Ay)(tL.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: l } = (0, o8.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: S.ZSU.BUTTON_CTA, objectType: S.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, A.jsx)("div", {
        className: ue.NG,
        children: (0, A.jsx)(_.$, {
            variant: "primary",
            icon: oJ.GiftIcon,
            text: R.intl.string(o9.default.DZnomS),
            onClick: l,
        }),
    });
}
function us(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: l, giftsRemaining: s } = e,
        r = (0, o4.rL)(i),
        a = (0, o4.rL)(l),
        o = (0, o0.GZ)(n, i, l),
        u = (0, o0.b9)(ut),
        d = (0, o0.Se)(i, u),
        c = (0, o0.Se)(l, u);
    return (
        (t =
            null != l
                ? R.intl.formatToPlainString(o9.default.XTX3OO, { count: s, nextTier: l?.name ?? "" })
                : R.intl.formatToPlainString(o9.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, A.jsxs)("div", {
            className: ue.mY,
            children: [
                null != d &&
                    (0, A.jsx)("div", {
                        className: ue.fC,
                        children: (0, A.jsx)("img", { src: d, alt: "", className: ue.qS }),
                    }),
                (0, A.jsxs)("div", {
                    className: ue.Qs,
                    children: [
                        (0, A.jsx)(H.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, A.jsx)(o7.Ay, { variant: o7.qP.BLUE, weight: o7.fh.MEDIUM, progress: o }),
                        (0, A.jsx)(H.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: ue.qg,
                            children: R.intl.format(o9.default.iIpfQe, {
                                threshold: null != l ? a : r,
                                count: null != l ? n : r,
                            }),
                        }),
                    ],
                }),
                null != c &&
                    (0, A.jsx)("div", {
                        className: ue.fC,
                        children: (0, A.jsx)("img", { src: c, alt: "", className: ue.qS }),
                    }),
            ],
        })
    );
}
function ur(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: l,
            giftsRemaining: s,
            tiers: r,
        } = (0, h.cf)([o4.Ay], () => ({
            badgeProgress: o4.Ay.getSingleRequirementProgress(oQ.$.GIFTING)?.current ?? 0,
            currentTier: o4.Ay.getCurrentTier(oQ.$.GIFTING),
            nextTier: o4.Ay.getNextTier(oQ.$.GIFTING),
            giftsRemaining: o4.Ay.getRemainingToNextTier(oQ.$.GIFTING),
            tiers: o4.Ay.getBadgeById(oQ.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, A.jsxs)("div", {
              className: ue.kL,
              children: [
                  (0, A.jsxs)("div", {
                      className: ue.Jo,
                      children: [
                          n > 0 &&
                              (0, A.jsxs)(A.Fragment, {
                                  children: [
                                      (0, A.jsx)(us, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: l,
                                          giftsRemaining: s,
                                      }),
                                      (0, A.jsx)("div", { className: ue.yF }),
                                  ],
                              }),
                          (0, A.jsx)(ui, { tiers: r, currentTier: i }),
                          (0, A.jsx)(H.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: ue.PJ,
                              children: R.intl.string(o9.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, A.jsx)(ul, { analyticsLocation: t, location: ut }),
              ],
          });
}
let ua = (0, d.zZ)(c.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => R.intl.string(o9.default.sFokBp),
        buildLayout: () => [uo],
        usePredicate: () => {
            let e = (0, o0.F5)("gift_inventory"),
                t = (0, h.bG)([o4.Ay], () => o4.Ay.getBadgeById(oQ.$.GIFTING));
            return e && null != t;
        },
    }),
    uo = (0, d.E2)(c.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [R.intl.string(o9.default.sFokBp)],
        Component: () => (0, A.jsx)(ur, {}),
    });
var uu = n(264779),
    ud = n(412260),
    uc = n(555393),
    ug = n(725807),
    um = n(212168),
    uA = n(469778),
    uE = n(45938),
    uh = n(109802),
    uS = n(869038),
    uT = n(380856);
function up(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, A.jsxs)(lg.A, {
        className: ir()(uT.wx, n),
        align: lg.A.Align.CENTER,
        children: [
            (0, A.jsx)("div", { className: uT.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function ux(e) {
    let { children: t, className: n } = e;
    return (0, A.jsx)("div", { className: ir()(uT.rf, n), children: t });
}
class uf extends E.PureComponent {
    static Header = up;
    static Body = ux;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, A.jsx)("div", { className: ir()(uT.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var uI = n(165191),
    u_ = n(871123),
    uN = n(366523),
    uC = n(280450),
    ub = n(30793),
    uy = n(97352),
    uv = n(67480),
    uj = n(147925),
    uO = n(957565),
    uL = n(615396),
    uR = n(274904);
class uD extends E.PureComponent {
    _copyModeTimeout = new rv.Ep();
    state = { copyMode: uh.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case uh.q.SUCCESS:
                return R.intl.string(R.t.XVvPjU);
            case uh.q.ERROR:
                return R.intl.string(R.t.i4GM3L);
            default:
                return R.intl.string(R.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        uS.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, uE.AK)(t, n),
            (0, uO.C)(
                e,
                () => this.setState({ copyMode: uh.q.SUCCESS }),
                () => this.setState({ copyMode: uh.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: uh.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, A.jsxs)(lg.A, {
            direction: lg.A.Direction.VERTICAL,
            className: uR.Gj,
            children: [
                (0, A.jsx)(uh.e, {
                    className: uR.ph,
                    value: (0, uE.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uO.p5,
                    hideMessage: e ? R.intl.string(R.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: sk.XD.BRAND,
                    buttonLook: sk.pR.FILLED,
                }),
                (0, A.jsxs)("div", {
                    className: uR.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, A.jsxs)(E.Fragment, {
                                  children: [
                                      R.intl.format(R.t.ltVZcJ, { hours: t.expiresAt.diff(io()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, A.jsx)(n0.D, {
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
class uP extends E.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await uS.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && uS.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, u_.bF)(e)
            ? (0, A.jsx)(uN.e, { shape: "square", sku: e, containerClassName: uR.ez })
            : null != t
              ? (0, A.jsx)(uI.A, { giftStyle: t, className: uR.ez, shouldAnimate: this.state.isHovered })
              : (0, A.jsx)(i0.A, { game: n, size: i0.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, u_.bF)(e)
            ? (0, A.jsxs)("div", {
                  className: ir()(uR.Oc, uR.ic),
                  children: [
                      (0, A.jsx)(i0.A, { game: n, size: i0.M.XSMALL, skuId: e.id, className: uR._u }),
                      R.intl.format(R.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, A.jsx)("div", { className: uR.Oc, children: R.intl.format(R.t.zMcvcA, { copies: t.length }) });
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
            (0, A.jsx)("div", { className: uR.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, A.jsxs)(lg.A, {
            justify: lg.A.Justify.BETWEEN,
            align: lg.A.Align.CENTER,
            className: uR.pe,
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
        return (0, A.jsxs)(uf, {
            className: i,
            children: [
                (0, A.jsx)(n0.D, {
                    onClick: this.handleToggleOpen,
                    className: uR.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, A.jsx)(uf.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, A.jsxs)("div", {
                            className: uR.MY,
                            children: [
                                (0, A.jsxs)(lg.A, {
                                    align: lg.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, A.jsxs)("div", {
                                            className: uR.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, A.jsx)(uj.A, {
                                    direction: a ? uj.A.Directions.UP : uj.A.Directions.DOWN,
                                    className: uR.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, A.jsx)(uf.Body, {
                          children: s
                              ? (0, A.jsx)(oe.y, { className: uR.u1 })
                              : (0, A.jsxs)(E.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, A.jsx)(uD, { giftCode: e, sku: l, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let uG = h.Ay.connectStores([uv.A, te.A, ub.A, iW.A, uy.A, uC.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        l = uv.A.get(t);
    if (null == l) throw Error("SKU was unavailable while rendering gift.");
    let s = ub.A.getForGifterSKUAndPlan(uC.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: l,
        hideCodes: te.A.enabled,
        isFetching: ub.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: ub.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: iW.A.getApplication(l.applicationId),
        subscriptionPlan: null != n ? (0, uL.c9)(n) : null,
        giftCodes: s,
    };
})(uP);
var uU = n(725570),
    uM = n(736653),
    uV = n(46054);
let uk = io().duration(30, "days");
var uw = n(416052),
    uF = n(878309);
function uB(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, A.jsx)(lr.Modal, {
        title: "",
        size: "md",
        input: (0, A.jsx)("div", { className: uF.aR }),
        onClose: async () => await t(),
        actions: [{ text: R.intl.string(R.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, A.jsxs)("div", {
            className: uF.t4,
            children: [
                (0, A.jsx)(p.D, { variant: "heading-xl/semibold", children: R.intl.string(R.t.iufib1) }),
                (0, A.jsx)(H.E, { variant: "text-md/normal", className: uF.G3, children: R.intl.string(R.t.eAn6z2) }),
            ],
        }),
    });
}
let uz = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: l, transitionState: s } = e,
        [r, a] = E.useState(null),
        o = (0, tw.GV)(),
        { analyticsLocations: u } = (0, eP.Ay)(tL.A.USER_SETTINGS_GIFT_INVENTORY);
    return (E.useEffect(() => {
        null == i &&
            (0, uu.kd)({
                promotionId: l.id,
                promotionTitle: l.outboundTitle,
                partnerId: l.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, l.id, l.outboundTitle, l.partnerId, n, u]),
    null != r)
        ? (0, A.jsx)(uB, { onClose: t, transitionState: s })
        : null == i
          ? (0, A.jsx)(oe.y, { className: uF.Lq })
          : (0, A.jsx)(lr.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, A.jsxs)("div", {
                    className: uF.N1,
                    children: [
                        (0, A.jsx)("div", { className: uF.Qw }),
                        (0, A.jsx)(p.D, { variant: "heading-xl/semibold", children: R.intl.string(R.t["23BfZh"]) }),
                        (0, A.jsx)(H.E, {
                            variant: "text-md/normal",
                            className: uF.G3,
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
                            let e = (0, uu.kc)(i, l);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: s,
                "aria-label": o,
                children: (0, A.jsxs)("div", {
                    children: [
                        (0, A.jsx)(i8.c, { className: uF.M5 }),
                        (0, A.jsx)(tQ.D, {
                            label: R.intl.string(R.t.s9LFQh),
                            helperText: R.intl.string(R.t["F+nFTZ"]),
                            children: (0, A.jsx)(uw.A, {
                                value: i,
                                buttonColor: sk.$n.Colors.BRAND,
                                buttonLook: sk.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var uX = n(707554),
    uY = n(339048),
    uH = n(136380);
function uK() {
    let e = (0, h.yK)([uA.A], () => uA.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = B().groupBy(e, (e) => (0, uE.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [n, i] = E.useState(!1);
    if (
        (E.useEffect(() => {
            e5.h.wait(() => {
                (0, uY.XJ)().then(() => i(!0));
            });
        }, []),
        !n)
    )
        return (0, A.jsx)(oe.y, { className: uH.Lq });
    if (0 === Object.keys(t).length)
        return (0, A.jsxs)("div", {
            className: uH.p$,
            children: [
                (0, A.jsx)("div", { className: uH.QT }),
                (0, A.jsx)(uX.H, { className: uH.ks, children: R.intl.string(R.t.B1qgZn) }),
                (0, A.jsx)("p", {
                    className: uH.WO,
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
            let { skuId: n, subscriptionPlanId: i, giftStyle: l } = (0, uE.X6)(e);
            return (0, A.jsx)(uG, { skuId: n, subscriptionPlanId: i, entitlements: t[e], giftStyle: l }, e);
        });
    return (0, A.jsx)(X.B, { gap: "lg", children: l });
}
function uW(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [l, s] = E.useState(!1),
        [r, a] = E.useState(!1);
    function o() {
        return s((e) => !e);
    }
    let u = (0, uM.Ay)(),
        d = (0, uu.WD)(n.id, u),
        c = null != i,
        g = E.useMemo(
            () =>
                (0, iu.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? io()(n.outboundRedemptionEndDate)
                            : io()(n.endDate).add(uk)
                        : io()(n.endDate),
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
        h = (0, uc.N)()?.isEligible === !0,
        S = E.useCallback(() => a(!1), []),
        { outboundTitle: T, outboundTermsAndConditions: x } = n;
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsxs)("div", {
                className: uH.AX,
                children: [
                    (0, A.jsxs)("div", {
                        className: uH.Pg,
                        children: [
                            (0, A.jsxs)("div", {
                                className: uH.At,
                                children: [
                                    (0, A.jsx)("div", {
                                        className: uH.$G,
                                        children: (0, A.jsx)("img", { alt: "", src: d, className: uH.IJ }),
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
                            className: uH.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: uV.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, A.jsx)(uU.aF, {
                    renderModal: (e) =>
                        (0, A.jsx)(uz, {
                            ...e,
                            onClose: S,
                            onClaim: o1.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: S,
                }),
        ],
    });
}
function uZ(e) {
    let { redesign: t = !1 } = e,
        n = (0, h.yK)([uA.A], () => uA.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, uc.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: s,
            claimedOutboundPromotionCodeMap: r,
        } = (0, o2.y7)(),
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
                      className: uH.N1,
                      children: [
                          (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.wFsj3B) }),
                          (0, A.jsx)(i8.c, { className: uH.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, A.jsxs)("div", {
                      className: uH.uo,
                      children: [
                          (0, A.jsx)(r1.t, {
                              size: "md",
                              color: nQ.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: uH.PC,
                          }),
                          (0, A.jsx)(H.E, {
                              variant: "text-md/normal",
                              className: uH.Qw,
                              children: R.intl.format(R.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tM.default)(), (0, t$.pX)(S.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, A.jsx)(ug.A, {
                              showGradient: !0,
                              className: uH.aA,
                              subscriptionTier: tX.pe.TIER_2,
                              textOptions: { textOverride: R.intl.string(R.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, A.jsxs)("div", {
        children: [
            g,
            (0, A.jsx)(um.A, {
                className: uH.Yj,
                isShown: !1 === i && c,
                type: um.i.PREMIUM,
                hasBackground: !0,
                children: (0, A.jsxs)("div", {
                    className: uH.DE,
                    children: [
                        m,
                        s.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, A.jsx)(uW, { outboundPromotion: n, code: t }, n.id);
                        }),
                        l.map((e) => (0, A.jsx)(uW, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, A.jsx)(
                                  uG,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: tX.FB,
                                  },
                                  (0, uE.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, A.jsx)(
                                  uG,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: tX.Bu,
                                  },
                                  (0, uE.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, A.jsx)(
                                  uG,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: tX.Bu,
                                  },
                                  (0, uE.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let uq = (0, d.zZ)(c.X.MY_GIFTS_CATEGORY, {
        useTitle: uJ,
        buildLayout: () => [uQ],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, h.cf)(
                    [ud.A],
                    () => ({
                        claimedOutboundPromotionCodes: ud.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: ud.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, o2.T1)({ includeClaimedPromotions: !0 }),
                i = (0, uu.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    uQ = (0, d.E2)(c.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [uJ()],
        Component: () => (0, A.jsx)(uZ, { redesign: !0 }),
    });
function uJ() {
    return R.intl.string(R.t.YzjdWJ);
}
let u$ = (0, d.zZ)(c.X.PURCHASED_GIFTS_CATEGORY, { useTitle: u1, buildLayout: () => [u0] }),
    u0 = (0, d.E2)(c.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [u1()], Component: () => (0, A.jsx)(uK, {}) });
function u1() {
    return R.intl.string(R.t.FWe6CP);
}
var u2 = n(532446),
    u3 = n(499454);
class u6 extends E.Component {
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
                    (await (0, oa.Qp)(n),
                        (0, oa.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, ot.A)(),
                        }),
                        this.setState({ codeInput: "" }));
                    return;
                } catch {}
            let e = (0, uE.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await uS.Ay.resolveGiftCode(e);
            if (null != i && null != i.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            (tt.default.track(S.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: S.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: S.ZSU.BUTTON_CTA,
                },
            }),
                (0, u3.h)({ processedCode: e }),
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
            r = e ? R.intl.string(R.t["hVEn/j"]) : R.intl.string(R.t.SeKIoS),
            a = e ? R.intl.string(R.t.epHMtp) : void 0;
        return (0, A.jsx)(n$.n, {
            label: e ? void 0 : R.intl.string(R.t["il+VCo"]),
            children: (0, A.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, A.jsxs)(u2.M, {
                    children: [
                        (0, A.jsx)(lo.k, {
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
function u5(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, oM.c)({ location: "UserSettingsBilling" }),
        i = E.useContext(tt.AnalyticsContext),
        l = (0, h.bG)([te.A], () => te.A.enabled);
    return (0, A.jsx)(u6, { analyticsContext: i, obscureInput: l, acceptGiftCardRedemption: n, redesign: t });
}
let u4 = (0, d.zZ)(c.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => R.intl.string(R.t["il+VCo"]),
        buildLayout: () => [u8],
        usePredicate: () => !(0, o3.Hp)(),
    }),
    u8 = (0, d.E2)(c.X.REDEEM_CODE_INPUT, {
        Component: () => (0, A.jsx)(u5, { redesign: !0 }),
        useSearchTerms: () => [R.intl.string(R.t["jcSP+g"]), R.intl.string(R.t["il+VCo"])],
    }),
    u7 = (0, d.t_)(c.X.GIFT_PANEL, {
        useTitle: () => R.intl.string(R.t["jcSP+g"]),
        buildLayout: () => [u4, uq, ua, u$, o5],
        initialize: () => {
            (o1.Ay.fetchClaimedOutboundPromotionCodes(), (0, o0.Ig)("gift_inventory") && (0, o$.o0)(oQ.$.GIFTING));
        },
    }),
    u9 = (0, d.i4)(c.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["jcSP+g"]),
        icon: oJ.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, o2.IO)().length;
            return E.useMemo(() => ({ badgeType: m.Xi.COUNT, count: e }), [e]);
        },
        buildLayout: () => [u7],
    });
var de = n(659758),
    dt = n(408510),
    dn = n(815846);
let di = (0, d.E2)(c.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, h.bG)([si.default], () => si.default.getCurrentUser());
            return (0, ai.YE)(e, tX.PremiumTypes.TIER_2) ? (0, A.jsx)(dn.A, {}) : (0, A.jsx)(dt.A, {});
        },
        useSearchTerms: () => [R.intl.string(R.t.Ipxkog)],
    }),
    dl = (0, d.zZ)(c.X.NITRO_CATEGORY, { buildLayout: () => [di] }),
    ds = (0, d.t_)(c.X.NITRO_PANEL, {
        useTitle: () => R.intl.string(R.t.Ipxkog),
        useObscuredNotice: a7.L,
        buildLayout: () => [dl],
    }),
    dr = (0, d.i4)(c.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.Ipxkog),
        icon: r1.t,
        usePersistentBadge: function (e) {
            let t = (0, de.e)(e);
            return E.useMemo(() => ({ badgeType: m.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [ds],
    });
var da = n(104510),
    du = n(820739),
    dd = n(73825),
    dc = n(160946),
    dg = n(859241),
    dm = n(531260),
    dA = n(527113),
    dE = n(338548),
    dh = n(776096),
    dS = n(711014),
    dT = n(178368),
    dp = n(809545),
    dx = n(168482);
function df() {
    return (0, A.jsxs)("div", {
        className: dp.iE,
        children: [
            (0, A.jsx)("img", { className: dp.Kk, alt: "", src: dx }),
            (0, A.jsxs)("div", {
                className: dp.pq,
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
                    ((0, t$.pX)(S.BVt.GUILD_DISCOVERY), (0, tM.default)());
                },
            }),
        ],
    });
}
var dI = n(365199),
    d_ = n(878678),
    dN = n(443865),
    dC = n(980707),
    db = n(473145);
function dy(e) {
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
            ((o.cancel.disabled = !0), (o.cancel.subtext = R.intl.string(R.t.WnL6DV)), (o.uncancel.disabled = !0));
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
                      iconLeft: dN.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: dN.LightbulbIcon },
                  })
                : null,
        [a, s],
    );
    return (0, A.jsxs)(dC.W, {
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
                    (0, la.openModalLazy)(async () => {
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
            (0, db.I5)(t)
                ? (0, A.jsx)(e3.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, la.openModalLazy)(async () => {
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
                          (0, la.openModalLazy)(async () => {
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
var dv = n(545934),
    dj = n(548118),
    dO = n(987144),
    dL = n(864310),
    dR = n(290413);
function dD(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, dL.A)(t.id);
    return (0, A.jsxs)("div", {
        className: n ?? dR.OA,
        children: [
            (0, A.jsx)(dj.Ay, { className: dR.$f, guild: t, size: dj.Ay.Sizes.MEDIUM }),
            (0, A.jsxs)("div", {
                className: dR.gI,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, A.jsxs)("div", {
                        className: dR.ew,
                        children: [
                            (0, A.jsxs)("div", {
                                className: dR.QW,
                                children: [
                                    (0, A.jsx)(da._, {
                                        className: dR.Wz,
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
                                        (0, A.jsx)("div", { className: dR.zk }),
                                        (0, A.jsx)(H.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, db.gb)(t.premiumTier, { useLevels: !1 }),
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
function dP(e) {
    let { guildId: t } = e,
        n = (0, h.bG)([lh.A], () => lh.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, A.jsxs)("div", {
              className: dR.Nr,
              children: [
                  (0, A.jsx)(dD, { guild: n }),
                  (0, A.jsx)(_.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: da._,
                      text: R.intl.string(R.t.aBHecF),
                      onClick: () => {
                          (0, dO.g)({
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
var dG = n(747381);
let dU =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function dM(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: l, isLast: s } = e,
        r = E.useRef(null),
        a = (0, db.I5)(t),
        o = E.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, dm.A)(),
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
                    (e >= S.TVA.TIER_2 && (n.push(R.intl.string(R.t.SztbtN)), n.push(R.intl.string(R.t["3GK91n"]))),
                        e >= S.TVA.TIER_3 && n.push(R.intl.string(R.t["XUUJd+"])));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let l = n[Math.abs(i) % n.length];
                    return R.intl.formatToPlainString(R.t["/dOAmQ"], { perk: l });
                })(n, t.id),
            [n, t.id],
        ),
        g = E.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? oc.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return R.intl.formatToPlainString(R.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = E.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        );
    return (0, A.jsxs)("div", {
        className: ir()(dG.iq, { [dG.Mt]: s }),
        children: [
            (0, A.jsxs)("div", {
                className: dG.kd,
                children: [
                    (0, A.jsx)("img", { alt: "", className: dG.bB, src: dU }),
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
                                              (0, A.jsx)("div", { className: dG.zk }),
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
                                              (0, A.jsx)("div", { className: dG.zk }),
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
            (0, A.jsx)(ae.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, A.jsx)(dy, {
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
                    (0, A.jsx)(n0.D, {
                        innerRef: r,
                        "aria-label": R.intl.string(R.t.PdRCRg),
                        className: dG.Mj,
                        ...e,
                        children: (0, A.jsx)(dI.MoreHorizontalIcon, {
                            size: "xs",
                            color: nQ.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function dV(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: l } = e,
        s = (0, h.bG)([lh.A], () => lh.A.getGuild(t), [t]);
    return (0, A.jsxs)("div", {
        className: dG.Nr,
        children: [
            (0, A.jsx)("div", {
                className: dG.MY,
                children:
                    null != s
                        ? (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(dD, { guild: s, className: dG.OA }),
                                  (0, A.jsx)(_.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: R.intl.string(R.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tM.default)(),
                                              (0, d_.K4)({
                                                  guildId: s.id,
                                                  location: {
                                                      section: S.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              }));
                                      },
                                  }),
                              ],
                          })
                        : (0, A.jsx)("div", {
                              className: dG.OA,
                              children: (0, A.jsx)(p.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: R.intl.string(R.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, A.jsx)(
                    dM,
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
function dk(e) {
    let { guildBoostSlots: t, premiumSubscription: n, pausedAppliedGuildBoosts: i, isPaused: l } = e,
        { boostsByGuildId: s, numActiveSlots: r } = E.useMemo(() => {
            if (l && null != n)
                return {
                    boostsByGuildId: (function (e, t) {
                        let n = {};
                        for (let t of e) (t.guildId in n || (n[t.guildId] = []), n[t.guildId].push(t));
                        let i = {};
                        for (let e of Object.keys(n)) {
                            let l = n[e];
                            i[e] = l.map((n) =>
                                dv.A.createFromServer(
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
                if ((!(0, db.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in s || (s[e] = []), s[e].push(i));
                }
            }
            return { boostsByGuildId: s, numActiveSlots: e };
        }, [t, l, i, n]);
    if (null == n || 0 === Object.keys(s).length) return null;
    let a = r > ai.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, A.jsx)("div", {
        className: dG.kR,
        children: oc.default
            .keys(s)
            .map((e) => (0, A.jsx)(dV, { guildId: e, slots: s[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var dw = n(502572),
    dF = n(983511),
    dB = n(342744),
    dz = n(496431);
let dX = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, dz.A)(n);
    return (0, A.jsx)(H.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, iu.uN)(i, { days: R.t.WUTPDc, hours: R.t.c1qodV, minutes: R.t["2+A3dv"] }),
    });
};
var dY = n(731536);
function dH(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        l = (0, h.bG)([ok.A], () => ok.A.getPremiumTypeSubscription()),
        { unappliedSlots: s, numActiveSlots: r } = E.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, db.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != l ? ai.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0),
        o = l?.isPausedOrPausePending === !0 && i === tX.xc.NONE;
    return 0 === s.length
        ? null
        : (0, A.jsxs)("div", {
              className: dY.Nr,
              children: [
                  (0, A.jsxs)("div", {
                      className: dY.MY,
                      children: [
                          (0, A.jsxs)("div", {
                              className: dY._L,
                              children: [
                                  (0, A.jsxs)("div", {
                                      className: dY.MD,
                                      children: [
                                          (0, A.jsx)("img", { alt: "", className: dY.F8, src: dU }),
                                          (0, A.jsx)("div", {
                                              className: ir()(dY.qS, "theme-dark"),
                                              children: (0, A.jsx)("span", { className: dY.Vv, children: s.length }),
                                          }),
                                      ],
                                  }),
                                  (0, A.jsxs)("div", {
                                      className: dY.Qp,
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
                          (0, A.jsx)(dw.A, {
                              shouldShow: o,
                              text: R.intl.string(R.t.mOWsF1),
                              "aria-label": R.intl.string(R.t.mOWsF1),
                              children: (e) =>
                                  (0, A.jsx)(_.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: da._,
                                      text: R.intl.string(R.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, la.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("677508"),
                                                  n.e("418710"),
                                              ]).then(n.bind(n, 770101));
                                              return (t) =>
                                                  (0, A.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          (t.onClose(),
                                                              (0, dO.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: S.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: S.JJy.SETTINGS_PREMIUM,
                                                                      object: S.ZSU.BUTTON_CTA,
                                                                      objectType: S.AnalyticsObjectTypes.BUY,
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
                      (0, A.jsx)(
                          dK,
                          {
                              slot: e,
                              isLast: t === s.length - 1,
                              isCancelable: a && !(0, db.I5)(e),
                              isCanceled: (0, db.I5)(e),
                              premiumSubscription: l,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function dK(e) {
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
              ? (0, A.jsx)(dX, { cooldown: u.getTime() })
              : (0, A.jsx)(H.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: R.intl.string(R.t["2mcafz"]),
                });
    let d = l || s;
    return (0, A.jsxs)("div", {
        className: ir()(dY.iq, { [dY.Mt]: i }),
        children: [
            (0, A.jsxs)("div", {
                className: dY.kd,
                children: [(0, A.jsx)("img", { alt: "", className: dY.bB, src: dU }), t],
            }),
            d &&
                (0, A.jsx)(ae.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, A.jsxs)(dC.W, {
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
                                            (t(),
                                                (0, la.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, A.jsx)(dF.default, { ...e, guildBoostSlot: n }),
                                                ));
                                        },
                                    }),
                                s &&
                                    (0, A.jsx)(e3.Dr, {
                                        id: "uncancel-boost",
                                        label: R.intl.string(R.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? R.intl.string(R.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, la.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, A.jsx)(dB.default, { ...e, guildBoostSlotId: n.id }),
                                                ));
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, A.jsx)(n0.D, {
                            innerRef: o,
                            "aria-label": R.intl.string(R.t["UKOtz+"]),
                            className: dY.Mj,
                            ...e,
                            children: (0, A.jsx)(dI.MoreHorizontalIcon, {
                                size: "xs",
                                color: nQ.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var dW = n(834612);
function dZ(e) {
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
              className: dW.i,
              children: [
                  (0, A.jsxs)("div", {
                      className: dW.b,
                      children: [
                          (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.W5rDjW) }),
                          (0, A.jsx)(H.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: R.intl.format(R.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, A.jsx)(dk, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: l,
                      isPaused: a,
                  }),
                  (0, A.jsx)(dH, { guildBoostSlots: t, fractionalPremiumState: s }),
              ],
          })
        : null;
}
var dq = n(333722),
    dQ = n(9146);
function dJ() {
    return (0, A.jsxs)("div", {
        className: dQ.iE,
        children: [
            (0, A.jsx)(p.D, { variant: "heading-xl/normal", children: R.intl.string(R.t.IzKs3o) }),
            (0, A.jsx)("div", {
                className: dQ.kR,
                children: dq.s.map((e, t) => {
                    let n = e.icon;
                    return (0, A.jsxs)(
                        "div",
                        {
                            className: dQ.Nr,
                            children: [
                                (0, A.jsx)(n, { className: dQ.Kk }),
                                (0, A.jsx)(H.E, {
                                    className: dQ.h_,
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
var d$ = n(847374),
    d0 = n(232122),
    d1 = n(665984);
function d2() {
    let [e, t] = E.useState(null),
        [n, i] = E.useState(null);
    return (0, A.jsxs)("div", {
        className: d1.iE,
        children: [
            (0, A.jsx)(p.D, { variant: "heading-xl/normal", children: R.intl.string(R.t.HPJ6Nj) }),
            (0, A.jsx)("ul", {
                className: d1.p_,
                children: d0.m.map((l, s) => {
                    let r = e === s,
                        a = n === s,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, A.jsxs)(
                        n0.D,
                        {
                            tag: "li",
                            className: ir()(d1.Aw, { [d1.$K]: r }),
                            onClick: () => t((e) => (e === s ? null : s)),
                            onMouseEnter: () => i(s),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, A.jsxs)("div", {
                                    className: d1.k7,
                                    children: [
                                        (0, A.jsx)(H.E, {
                                            className: d1.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: l.getQuestion(),
                                        }),
                                        (0, A.jsx)(d$.a, {
                                            size: "sm",
                                            color: nQ.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: d1.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, A.jsx)(H.E, {
                                        className: d1.ZF,
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
var d3 = n(182859),
    d6 = n(25525),
    d5 = n(416763);
function d4() {
    let e = ex.A.getArticleURL(S.MVz.GUILD_SUBSCRIPTIONS);
    return (0, A.jsxs)("div", {
        className: d5.wx,
        children: [
            (0, A.jsxs)("div", {
                className: d5.Qs,
                children: [
                    (0, A.jsxs)("div", {
                        className: d5.B5,
                        children: [
                            (0, A.jsx)("img", { alt: "", className: d5.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, A.jsx)(p.D, {
                                variant: "heading-xl/normal",
                                children: R.intl.string(d6.default.hjvcLO),
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
            (0, A.jsx)(d3.A, {
                variant: "member",
                className: d5.iO,
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
var d8 = n(315629),
    d7 = n(87719),
    d9 = n(961085);
function ce() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser());
    if (null == e || ai.Ay.hasFreeBoosts(e)) return null;
    let t = ex.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ);
    return (0, A.jsxs)(d8.h, {
        color: "nitro-pink",
        className: d9.vK,
        children: [
            (0, A.jsxs)("div", {
                className: d9.nw,
                children: [
                    (0, A.jsx)("img", { alt: "", className: d9.q3, src: dU }),
                    (0, A.jsxs)("div", {
                        className: d9.Tm,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.format(R.t.Idh1Vs, { count: tX.M4, boostCount: tX.M4 }),
                            }),
                            (0, A.jsxs)("div", {
                                className: d9.xv,
                                children: [
                                    (0, A.jsx)(r1.t, { className: d9.nE }),
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
                icon: r1.t,
                text: R.intl.string(R.t["8x0jKT"]),
                onClick: d7.e,
            }),
        ],
    });
}
var ct = n(532991);
function cn() {
    let e = (0, h.bG)([dh.A], () => dh.A.affinities),
        t = (0, h.bG)([dS.Ay], () => dS.Ay.getFlattenedGuildIds()),
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
              className: ct.i,
              children: [
                  (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.r90Wgo) }),
                  (0, A.jsx)("div", { className: ct.k, children: n.map((e) => (0, A.jsx)(dP, { guildId: e }, e)) }),
              ],
          });
}
var ci = n(967246);
function cl(e) {
    let { count: t, disabledReason: i } = e,
        l = ex.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ);
    return (0, A.jsxs)(d8.h, {
        color: "nitro-pink",
        className: ci.vK,
        children: [
            (0, A.jsxs)("div", {
                className: ci.nw,
                children: [
                    (0, A.jsxs)("div", {
                        className: ci.MD,
                        children: [
                            (0, A.jsx)("img", { alt: "", className: ci.F8, src: dU }),
                            (0, A.jsx)("div", {
                                className: ir()(ci.qS, "theme-dark"),
                                children: (0, A.jsx)("span", { className: ci.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, A.jsxs)("div", {
                        className: ci.Tm,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.format(R.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, A.jsxs)("div", {
                                className: ci.xv,
                                children: [
                                    (0, A.jsx)(r1.t, { className: ci.nE }),
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
            (0, A.jsx)(dw.A, {
                shouldShow: null != i,
                text: i ?? "",
                "aria-label": i,
                children: (e) =>
                    (0, A.jsx)(_.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: da._,
                        text: R.intl.string(R.t.BMx1iy),
                        disabled: null != i,
                        onClick: () => {
                            (0, la.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("677508"), n.e("418710")]).then(
                                    n.bind(n, 770101),
                                );
                                return (t) =>
                                    (0, A.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            (t.onClose(),
                                                (0, dO.g)({
                                                    analyticsLocations: [],
                                                    analyticsLocation: {
                                                        page: S.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                        section: S.JJy.SETTINGS_PREMIUM,
                                                        object: S.ZSU.BUTTON_CTA,
                                                        objectType: S.AnalyticsObjectTypes.BUY,
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
    });
}
var cs = n(89150);
function cr(e) {
    let { premiumSubscription: t } = e,
        n = (0, h.bG)([dT.A], () => dT.A.boostSlots),
        i = E.useMemo(() => Object.values(n), [n]),
        l = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
        s = (0, h.bG)([dh.A], () => dh.A.affinities),
        r = (0, h.bG)([dS.Ay], () => dS.Ay.getFlattenedGuildIds()),
        a = s.length > 0 || r.length > 0,
        o = E.useMemo(() => i.filter((e) => null != e.premiumGuildSubscription), [i]).length,
        u = (0, h.bG)([dg.A], () => dg.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, dm.A)({ forceFetch: !0 }),
        c = l?.isPremiumGroupMember(),
        g = t?.isPausedOrPausePending === !0 && d === tX.xc.NONE,
        m = E.useMemo(() => i.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [i]),
        S = g ? R.intl.string(R.t.mOWsF1) : m ? void 0 : R.intl.string(R.t.xr4m5B),
        T = E.useMemo(() => {
            if (null == t) return 0;
            let e = ai.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : Math.max(0, e - o);
        }, [t, i.length, o]);
    return (0, A.jsxs)("div", {
        className: cs.GO,
        children: [
            (0, A.jsx)(oH.kb, { className: cs.ek }),
            (0, A.jsx)(d4, {}),
            (0, A.jsx)(ce, {}),
            T > 0 && (0, A.jsx)(cl, { count: T, disabledReason: S }),
            c && (0, A.jsx)(dE.A, {}),
            !a && (0, A.jsx)(df, {}),
            (0, A.jsxs)("div", {
                className: cs.C_,
                children: [
                    (0, A.jsx)(dZ, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, A.jsx)(cn, {}),
                    (0, A.jsx)(dA.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, A.jsx)(dJ, {}),
                    (0, A.jsx)(d2, {}),
                ],
            }),
        ],
    });
}
var ca = n(819677);
let co = (0, d.E2)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            E.useEffect(() => {
                e5.h.wait(() => {
                    (or.hP(), or.$o(), (0, du.CD)(), (0, dd.zS)(null, null, S.tF5.DISCOVERY), (0, du.tO)(!0));
                });
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, h.cf)([ok.A], () => ({
                    hasFetchedSubscriptions: ok.A.hasFetchedSubscriptions(),
                    premiumSubscription: ok.A.getPremiumTypeSubscription(),
                })),
                n = (0, dc.Y)(),
                i = (0, h.bG)([oV.A], () => oV.A.hasFetchedPaymentSources),
                l = (0, h.bG)([dg.A], () => dg.A.isFetchingCurrentUserAppliedBoosts),
                s = !e || !n || !i || l,
                [r, a] = E.useState(!1);
            return (s || r || a(!0), s && !r)
                ? (0, A.jsx)("div", { className: ir()(ca.kL, ca.Lq), children: (0, A.jsx)(oe.y, {}) })
                : (0, A.jsxs)("div", {
                      className: ca.kL,
                      children: [
                          (0, A.jsx)("div", { className: ca.Tp }),
                          (0, A.jsx)("div", { className: ca.Qs, children: (0, A.jsx)(cr, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t["+CbP2v"]), R.intl.string(R.t.Nn1lJy)],
    }),
    cu = (0, d.zZ)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [co] }),
    cd = (0, d.t_)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => R.intl.string(R.t["+CbP2v"]),
        buildLayout: () => [cu],
    }),
    cc = (0, d.i4)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["+CbP2v"]),
        icon: da._,
        buildLayout: () => [cd],
    });
var cg = n(153659),
    cm = n(155984),
    cA = n(357758),
    cE = n(262077),
    ch = n(281445),
    cS = n(933832),
    cT = n(624479),
    cp = n(626584),
    cx = n(131607),
    cf = n(95035),
    cI = n(580630),
    c_ = n(196736),
    cN = n(685743),
    cC = n(349085),
    cb = n(342942),
    cy = n(376205),
    cv = n(252589),
    cj = n(758836),
    cO = n(49999),
    cL = n(394107),
    cR = n(439050);
let cD = new cp.A("GameServerSubscriptionsSection");
function cP(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function cG(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let cU = E.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: l } = (0, eP.Ay)(),
        s = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, cC.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, cx.kn)([eu.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eu.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = uC.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: m } = (0, cN.A)(c, t.id, tL.A.GAME_SERVER_PAGE, t.serverIp),
        T = E.useCallback(() => {
            (0, cb.A)({
                provider: ch.X.SHOCKBYTE,
                onAccept: () => {
                    (u(cO.i.TAKE_ACTION), g());
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
            [ok.A, uy.A],
            () => {
                let e = null != s ? ok.A.getSubscriptionById(s) : null;
                if (null == e)
                    return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    l = !t && null != e.renewalMutations,
                    r = l ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? uy.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? R.intl.formatToPlainString(R.t.AbOLNu, { price: (0, cI.$g)(u, o.priceCurrency) })
                            : null,
                    c = cP(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? R.intl.formatToPlainString(cL.default["3aEgK6"], { date: c })
                        : l
                          ? R.intl.formatToPlainString(cL.default.KFSA3M, { date: c })
                          : R.intl.formatToPlainString(cL.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || l,
                };
            },
            [s, n, i],
            cG,
        ),
        C = E.useCallback(() => {
            if (null == s) return;
            let e = ok.A.getSubscriptionById(s),
                t = null != e ? cP(e.currentPeriodEnd) : "";
            (0, nJ.A)({
                title: R.intl.string(cL.default.TEYPNR),
                subtitle: R.intl.formatToPlainString(cL.default.XR1WrB, { date: t }),
                confirmText: R.intl.string(R.t["cY+Oob"]),
                cancelText: R.intl.string(cL.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        (await or.M2(s, l), await or.hP());
                    } catch (e) {
                        cD.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [s, l]),
        b = E.useCallback(() => {
            if (null == s) return;
            let e = ok.A.getSubscriptionById(s);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? uy.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, cI.$g)(u, o.priceCurrency) : "",
                c = cP(e.currentPeriodEnd);
            (0, nJ.A)({
                title: R.intl.string(cL.default.o96qbc),
                subtitle: R.intl.formatToPlainString(cL.default["7n6Qq+"], { price: d, date: c }),
                confirmText: R.intl.string(R.t.iIvF2z),
                cancelText: R.intl.string(R.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, dd.ur)(r);
                        let t = e.items;
                        (await or.nV(
                            e,
                            { status: S.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, ai.UC)(t, e.currency),
                            l,
                        ),
                            await or.hP());
                    } catch (e) {
                        cD.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [s, r, l, n, i]),
        y = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, A.jsxs)("div", {
        className: cR.nM,
        children: [
            (0, A.jsxs)("div", {
                className: cR.M4,
                children: [
                    (0, A.jsxs)("div", {
                        className: cR.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, A.jsx)("img", { className: cR.uP, src: a, alt: "" }),
                            (0, A.jsx)("div", { className: cR.tw }),
                        ],
                    }),
                    (0, A.jsxs)("div", {
                        className: cR.CR,
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
                                          className: cR.CQ,
                                          children: [
                                              (0, A.jsx)(H.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, A.jsx)(n0.D, {
                                                  className: cR.cL,
                                                  onClick: g,
                                                  "aria-label": R.intl.string(R.t.OpuAlK),
                                                  children: m
                                                      ? (0, A.jsx)(cS.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, A.jsx)(cT.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, A.jsx)(cf.A, { onClick: T, children: R.intl.string(cL.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, A.jsxs)("div", {
                className: cR.Rd,
                children: [
                    (0, A.jsxs)("div", {
                        className: cR.Ff,
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
                                          className: cR.ez,
                                          children: [
                                              (0, A.jsx)(iY.E, { size: "xs", color: "text-feedback-critical" }),
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
function cM(e) {
    let { servers: t } = e,
        n = (0, c_.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, cv.Y)(),
        l = (0, h.bG)([si.default], () => ai.Ay.canUseShopDiscounts(si.default.getCurrentUser())),
        s = E.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, h.yK)([ok.A], () => (0, cy.HY)(t, i, (e) => ok.A.getSubscriptionById(e)), [t, i]);
    E.useEffect(() => {
        let e = r.filter((e) => !uy.A.isLoadedForSKU(e) && !uy.A.isFetchingForSKU(e));
        e.length > 0 && (0, dd.jv)(e).catch(() => {});
    }, [r]);
    let a = E.useCallback(() => {
        ((0, tM.default)(), (0, t$.pX)(S.BVt.COLLECTIBLES_SHOP_WITH_TAB(cj.G2.GAME_SERVERS)));
    }, []);
    return (0, A.jsxs)("div", {
        className: cR.uW,
        children: [
            (0, A.jsxs)("div", {
                className: cR.wx,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: R.intl.string(cL.default.vCzwM7),
                    }),
                    (0, A.jsxs)("div", {
                        className: cR.h_,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.string(cL.default.y85Eg9),
                            }),
                            n &&
                                (0, A.jsx)(cf.A, {
                                    onClick: a,
                                    children: (0, A.jsx)(H.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: R.intl.string(cL.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)("div", {
                className: cR.p_,
                children: t.map((e) =>
                    (0, A.jsx)(cU, { server: e, planOptionBySkuId: s, canUseShopDiscount: l }, e.id),
                ),
            }),
        ],
    });
}
var cV = n(55766),
    ck = n(696986),
    cw = n(364036);
function cF(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)(p.D, { variant: "heading-md/bold", children: R.intl.string(R.t["KzCF/6"]) }),
            (0, A.jsx)(ck.h, { size: 4 }),
            (0, A.jsx)(H.E, { variant: "text-md/normal", className: cw.yV, children: R.intl.string(R.t["3D7qCu"]) }),
            (0, A.jsx)(ck.h, { size: 24 }),
            (0, A.jsxs)("div", {
                className: cw.Nr,
                children: [
                    (0, A.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: cw.RI }),
                    (0, A.jsxs)("div", {
                        className: cw.FS,
                        children: [
                            (0, A.jsx)(p.D, {
                                variant: "heading-xl/semibold",
                                className: cw.wx,
                                children: R.intl.string(R.t["KzCF/6"]),
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-md/normal",
                                className: cw.h_,
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
var cB = n(872351),
    cz = n(9113),
    cX = n(599941),
    cY = n(384684),
    cH = n(2242);
let cK = [];
var cW = n(885574),
    cZ = n(912851),
    cq = n(182744);
let cQ = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, A.jsx)(n0.D, {
        onClick: i ? void 0 : n,
        className: cq.x6,
        children: (0, A.jsxs)("div", {
            className: cq.hQ,
            children: [
                i
                    ? (0, A.jsx)(oe.y, { type: oe.y.Type.PULSING_ELLIPSIS, className: cq.__invalid_spinner })
                    : (0, A.jsx)(H.E, { variant: "text-md/medium", className: cq.Pf, children: t }),
                (0, A.jsx)(d$.a, { size: "md", color: "currentColor", className: cq.UE }),
            ],
        }),
    });
};
var cJ = n(465932),
    c$ = n(543767),
    c0 = n(951555),
    c1 = n(790284),
    c2 = n(636194),
    c3 = n(624456),
    c6 = n(710144),
    c5 = n(815332),
    c4 = n(162093),
    c8 = n(557506);
function c7(e) {
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
                        return (n(!0), await or.M2(t, e), !0);
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
    let g = i.role_benefits.benefits.filter((e) => e.ref_type === cH.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === cH.bN.INTANGIBLE),
        h = io()(l.currentPeriodEnd).format("MMMM Do, YYYY"),
        S = R.intl.formatToPlainString(R.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: h,
        });
    return (0, A.jsx)(lr.Modal, {
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
                null != u ? (0, A.jsx)(iz.w, { type: "critical", children: u.message }) : null,
                (0, A.jsx)(c4.x, { listingId: i.id, guildId: n.guild_id, className: c8.P }),
            ],
        }),
    });
}
var c9 = n(319225),
    ge = n(746080),
    gt = n(883616);
function gn(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: l } = e;
    return (0, A.jsxs)("div", {
        className: gt.L0,
        children: [
            (0, A.jsxs)("div", {
                className: gt.a5,
                children: [
                    (0, A.jsx)(p.D, { variant: "heading-deprecated-12/semibold", className: gt.HU, children: t }),
                    i &&
                        (0, A.jsx)(lt.m, {
                            text: l,
                            children: (0, A.jsx)(cW.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: gt.Mo,
                            }),
                        }),
                ],
            }),
            (0, A.jsx)(p.D, { variant: "heading-xl/semibold", className: gt.sx, children: n }),
        ],
    });
}
function gi(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, eP.Ay)(),
        [i] = (0, c$.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tL.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [l, s] = (0, h.yK)([oV.A], () => [oV.A.hasFetchedPaymentSources, oV.A.paymentSourceFetchError]);
    return null != i && (l || s)
        ? (0, A.jsx)(c0.A, { subscription: t, currentInvoicePreview: i })
        : (0, A.jsx)(oe.y, {});
}
function gl(e) {
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
                  className: gt.__invalid_rowButtons,
                  children: n
                      ? (0, A.jsx)(_.$, { variant: "primary", text: R.intl.string(R.t.y3mAE4), onClick: r, loading: i })
                      : (0, A.jsxs)(A.Fragment, {
                            children: [
                                !t && !l && (0, A.jsx)(cQ, { label: R.intl.string(R.t.FRbWR8), onClick: a }),
                                (0, A.jsx)(cQ, { label: R.intl.string(R.t.Dx0lF7), onClick: s }),
                            ],
                        }),
              }),
          });
}
let gs = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: l,
            expanded: s,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, c3.M)(e),
                n = (0, h.bG)([c2.A], () => c2.A.getSubscriptionListingForPlan(t)),
                i = (0, h.bG)([c2.A], () =>
                    null != n ? c2.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                l = (0, h.bG)([lh.A], () => lh.A.getGuild(i?.guild_id)),
                [s, r] = E.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, cX.XE)();
            E.useEffect(() => {
                s && null != l && null == c2.A.getSubscriptionSettings(l.id) && a(l.id);
            }, [s, l, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = io()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, cI.$g)(t.price, t.currency) : "",
                              l = io()(t.createdAt).format("M/D/YY"),
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
        { shouldHideGuildPurchaseEntryPoints: m } = (0, cJ.MH)(l?.id),
        T = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function p() {
        try {
            (u(!0),
                await or.QP(t, g),
                (0, c9.E)({ title: R.intl.string(R.t.oPV2cy), body: R.intl.string(R.t.DdRizV) }));
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
        className: gt.kL,
        children: [
            (0, A.jsx)(c6.A, {
                onClick: r,
                className: gt.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, A.jsxs)(A.Fragment, {
                        children: [
                            null != l && (0, A.jsx)(dj.Ay, { guild: l, active: !0, size: dj.Ay.Sizes.MEDIUM }),
                            (0, A.jsxs)("div", {
                                className: gt.if,
                                children: [
                                    (0, A.jsx)(H.E, {
                                        variant: "text-md/medium",
                                        className: gt.J5,
                                        children: null != l ? l.name : R.intl.string(R.t["He+cmd"]),
                                    }),
                                    (0, A.jsxs)("div", {
                                        className: gt.xp,
                                        children: [
                                            (0, A.jsx)(H.E, {
                                                variant: "text-sm/normal",
                                                className: gt.KR,
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
                                                    ? (0, A.jsx)(lt.m, {
                                                          text: R.intl.string(R.t.eSuJE2),
                                                          children: (0, A.jsx)("div", {
                                                              children: (0, A.jsx)(tn.Lp, {
                                                                  className: gt.qc,
                                                                  text: R.intl.string(R.t.NrRwIl),
                                                                  color: nQ.A.unsafe_rawColors.YELLOW_300.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            T
                                                ? (0, A.jsx)(lt.m, {
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
                            (0, A.jsx)(n0.D, {
                                onClick: i(r),
                                "aria-label": R.intl.string(R.t.e5eQOy),
                                "aria-controls": d,
                                "aria-expanded": s,
                                focusProps: { ringTarget: t },
                                children: (0, A.jsx)(d$.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ir()(gt.D6, { [gt.S7]: s }),
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
                          (0, A.jsx)("div", { className: gt.yF }),
                          (0, A.jsx)(c5.A, { groupListingId: i.id, subscription: t, className: gt.kE }),
                          (0, A.jsxs)("div", {
                              className: gt.Zx,
                              children: [
                                  (0, A.jsx)(gn, { label: C, value: N }),
                                  (0, A.jsx)(gn, {
                                      label: R.intl.string(R.t.dltUMH),
                                      value: I,
                                      showInfoIcon: b,
                                      infoIconTooltipText: b ? R.intl.string(R.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, A.jsx)(gn, { label: R.intl.string(R.t.AOcwWB), value: _ }),
                              ],
                          }),
                          (0, A.jsx)(ck.h, { size: 16 }),
                          !x &&
                              !T &&
                              (0, A.jsx)(tQ.D, {
                                  label: R.intl.string(R.t.wmMFvA),
                                  children: (0, A.jsx)(gi, { subscription: t }),
                              }),
                          !y &&
                              (0, A.jsx)(gl, {
                                  isTrial: b,
                                  isCancelled: x,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: m,
                                  onCancelSubscriptionClick: function () {
                                      if (null != l && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, la.openModal)((t) => (0, A.jsx)(c7, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != l &&
                                          ((0, t$.pX)(S.BVt.CHANNEL(l.id, ge.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tM.default)(),
                                          cZ.A.show(
                                              S.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              R.intl.string(R.t.DvbaM4),
                                              () => {
                                                  (c1.A.setState({ subsection: eC.nR }),
                                                      (0, nl.openUserSettings)(c.X.SUBSCRIPTIONS_PANEL));
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
var gr = n(661097);
let ga = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, h.bG)([cY.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [cY.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? cH.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? cH.M_.NONE
                                  : cH.M_.IN_SUBSCRIPTION_SERVER;
                        })([cY.A]),
                    ) === cH.M_.SUBSCRIBED,
                n = (0, h.bG)([ok.A], () => ok.A.getActiveGuildSubscriptions()),
                i = E.useRef(!1);
            return (
                E.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            l = ok.A.getActiveGuildSubscriptions();
                        return (
                            ((l?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !ok.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), or.hP());
                }, [e, t]),
                n ?? cK
            );
        })(),
        { loading: i } = (0, cX.eb)(n);
    return ((0, cz.A)(og.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, A.jsx)(oe.y, {})
        : 0 === n.length
          ? null
          : (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(_.$, { text: R.intl.string(R.t.hqyhKQ), icon: cB.z, variant: "secondary", onClick: t }),
                    (0, A.jsx)(ck.h, { size: 10 }),
                    (0, A.jsx)(n$.n, {
                        label: R.intl.string(R.t["KzCF/6"]),
                        description: R.intl.string(R.t["Y+ucR7"]),
                        children: (0, A.jsx)("div", {
                            className: gr.A,
                            children: n.map((e) => (0, A.jsx)(gs, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var go = n(327479),
    gu = n(932012);
function gd(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)(p.D, { variant: "heading-md/bold", children: R.intl.string(R.t["48ywCu"]) }),
            (0, A.jsx)(ck.h, { size: 4 }),
            (0, A.jsx)(H.E, { variant: "text-md/normal", className: gu.yV, children: R.intl.string(R.t.VWxmSo) }),
            (0, A.jsx)(ck.h, { size: 24 }),
            (0, A.jsxs)("div", {
                className: gu.Nr,
                children: [
                    (0, A.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: gu._e }),
                    (0, A.jsxs)("div", {
                        className: gu.FS,
                        children: [
                            (0, A.jsx)(p.D, {
                                variant: "heading-xl/semibold",
                                className: gu.wx,
                                children: R.intl.string(R.t["48ywCu"]),
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-md/normal",
                                className: gu.h_,
                                children: R.intl.format(R.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, A.jsx)(go.A, { onClick: t, text: R.intl.string(R.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var gc = n(548411),
    gg = n(417098),
    gm = n(143582),
    gA = n(915043),
    gE = n(631466);
function gh(e) {
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
        className: ir()(gE.iE, t),
        children: [
            (0, A.jsx)("div", { className: ir()(gE.wx, i), children: n }),
            s && (0, A.jsx)("div", { className: gE.Qs, children: l }),
        ],
    });
}
var gS = n(885996),
    gT = n(144165),
    gp = n(664121),
    gx = n(950305),
    gf = n(943775),
    gI = n(123791),
    g_ = n(900797),
    gN = n(611643);
let gC = E.createContext({ isOpen: !1, toggleOpen: () => {} });
function gb(e) {
    let { children: t } = e,
        [n, i] = E.useReducer((e) => !e, !1),
        l = E.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, A.jsx)(gC.Provider, { value: l, children: t(n) });
}
gb.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: l } = E.useContext(gC),
        s = i ? g_.t : d$.a,
        r = null != n ? n : i ? R.intl.string(R.t.fgq1gs) : R.intl.string(R.t.XJuakA);
    return (0, A.jsxs)(n0.D, {
        className: ir()(gN.L, t),
        onClick: l,
        children: [
            (0, A.jsx)(H.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, A.jsx)(s, { size: "sm", color: "currentColor" }),
        ],
    });
};
var gy = n(627363),
    gv = n(243217),
    gj = n(328968),
    gO = n(163437),
    gL = n(3432);
function gR(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var gD = n(562312),
    gP = (((i = {})[(i.LOADING = 0)] = "LOADING"), (i[(i.DONE = 1)] = "DONE"), (i[(i.ERROR = 2)] = "ERROR"), i);
function gG(e) {
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
        } = (0, h.cf)(
            [uy.A, uv.A, gj.A, lh.A],
            () => {
                let e,
                    n = uy.A.get(r),
                    i = null != n ? uv.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? gj.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, gO.PJ)(o.skuFlags),
                    d = u && null != l ? lh.A.getGuild(l) : void 0,
                    c = (0, gO.Uo)(t, i),
                    g = u && null != l && null == d;
                if (!1 === c && null != s && s.items.length > 0) {
                    let t = s.items[0];
                    e = uy.A.get(t.planId) ?? void 0;
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
        { data: f } = (0, gy.YY)(a),
        I = E.useMemo(() => (null != f ? (0, gf.A)(f, 100) : null), [f]),
        _ = g?.deleted ?? !1,
        N = null != g && (0, gO.Se)(g),
        C = t.status === S.Dmq.PAST_DUE,
        { analyticsLocations: b } = (0, eP.Ay)(),
        [y] = (0, c$.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: tL.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = gR(t.currentPeriodEnd),
        j = 0 === i;
    return (0, A.jsxs)(gh, {
        headerClassName: gD.dL,
        header:
            !1 === j
                ? (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsxs)("div", {
                              className: gD.VW,
                              children: [
                                  null != I &&
                                      (0, A.jsx)(gT._, { src: I.href, imageClassName: gD.Z2, width: 40, height: 40 }),
                                  (0, A.jsxs)("div", {
                                      className: gD.aF,
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
                              className: gD.Pz,
                              children:
                                  null != f &&
                                  null != u &&
                                  null != g &&
                                  (0, A.jsx)(gw, {
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
                : (0, A.jsx)(oe.y, { type: oe.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, A.jsx)(gk, {
                    type: "warning",
                    title: N
                        ? R.intl.formatToPlainString(R.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : R.intl.formatToPlainString(R.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && T && (0, A.jsx)(gk, { type: "warning", title: R.intl.string(R.t.SmSP8Q) }),
            C && (0, A.jsx)(gk, { type: "danger", title: R.intl.string(R.t.fvOqBo) }),
            (0, A.jsxs)("div", {
                className: gD.zH,
                children: [
                    (0, A.jsx)(gV, {
                        title: R.intl.string(R.t["5D/KEH"]),
                        content: d
                            ? (0, A.jsxs)(A.Fragment, {
                                  children: [
                                      (0, A.jsxs)("span", {
                                          className: gD.yW,
                                          children: [(0, A.jsx)(gp.R, { size: "xs" }), R.intl.string(R.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, A.jsxs)("span", {
                                              className: gD._t,
                                              children: [
                                                  (0, A.jsx)(H.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: R.intl.format(R.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, A.jsx)(dj.Ay, { guild: c, size: dj.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, A.jsxs)("span", {
                                  className: gD.yW,
                                  children: [(0, A.jsx)(gx.UserIcon, { size: "xs" }), R.intl.string(R.t["6anEVv"])],
                              }),
                    }),
                    (0, A.jsx)(gU, { invoicePreview: y, subscriptionPlan: o }),
                    (0, A.jsx)(gV, {
                        title: R.intl.string(R.t.dnUzb6),
                        content: gR(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, A.jsx)(gM, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: x }),
                ],
            }),
            (0, A.jsx)(gB, {
                subscription: t,
                currentInvoicePreview: y,
                loadingState: i,
                isDeleted: _,
                isCancelled: m,
            }),
            null != f &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, A.jsx)(gF, { appId: f.id, listingBenefits: u.benefits }),
        ],
    });
}
function gU(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, A.jsx)(gV, { title: R.intl.string(R.t.KI7ERx), content: "" });
    let i = (0, cI.CE)((0, cI.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, A.jsx)(gV, { title: R.intl.string(R.t.KI7ERx), content: i });
    let s = (0, cI.CE)((0, cI.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, A.jsx)(gV, {
        title: R.intl.string(R.t.KI7ERx),
        content: (0, A.jsxs)(A.Fragment, {
            children: [
                (0, A.jsx)(H.E, { variant: "text-sm/semibold", children: s }),
                s !== i &&
                    (0, A.jsx)(lt.m, {
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
function gM(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, cI.CE)((0, cI.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, A.jsx)(gV, {
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
    return (0, A.jsx)(gV, { title: t ? R.intl.string(R.t.enxcAl) : R.intl.string(R.t["Ms+6Zq"]), content: n });
}
function gV(e) {
    let { title: t, content: n } = e;
    return (0, A.jsxs)("div", {
        className: gD.nM,
        children: [
            (0, A.jsx)(H.E, { variant: "text-sm/medium", children: t }),
            (0, A.jsx)(H.E, { variant: "text-sm/medium", className: gD.u4, children: n }),
        ],
    });
}
function gk(e) {
    let { type: t, title: n } = e;
    return (0, A.jsx)(r2.p, {
        messageType: "warning" === t ? r2.Y.WARNING : r2.Y.ERROR,
        className: gD.Xm,
        children: (0, A.jsx)(H.E, { variant: "text-sm/normal", children: n }),
    });
}
function gw(e) {
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
        c = (0, gO.Se)(l),
        { analyticsLocations: g } = (0, eP.Ay)(),
        [m, S] = E.useState(!1),
        T = (0, gI.C)(t.id),
        p = (0, h.bG)([uv.A], () => uv.A.getParentSKU(i.skuId), [i.skuId]),
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
            let { subscription: e } = await (0, or.QP)(s, g);
            if (null == e) return;
            (0, la.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, A.jsx)(t, { ...n, storeListing: i, subscription: gv.A.createFromServer(e) });
            });
        } finally {
            S(!1);
        }
    }
    return (0, A.jsxs)("div", {
        className: gD.fw,
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
                            (0, la.openModalLazy)(async () => {
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
function gF(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, A.jsx)(gb, {
        children: (e) =>
            (0, A.jsxs)("div", {
                className: gD.PX,
                children: [
                    (0, A.jsxs)("div", {
                        className: gD.wV,
                        children: [
                            e && (0, A.jsx)(H.E, { variant: "text-sm/semibold", children: R.intl.string(R.t.mORL67) }),
                            (0, A.jsx)(gb.Toggle, {
                                className: gD.Bh,
                                text: e ? R.intl.string(R.t.gsbFAw) : R.intl.string(R.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: l, icon: s } = e;
                              return (0, A.jsx)(gS.FY, { header: i, icon: (0, gL.N)(t, s), description: l }, n);
                          })
                        : null,
                ],
            }),
    });
}
function gB(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: l, isCancelled: s } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, A.jsx)("div", {
                className: gD.Ji,
                children: (0, A.jsx)(tQ.D, {
                    label: R.intl.string(R.t.azZaZa),
                    children: (0, A.jsx)(oe.y, { type: oe.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, A.jsx)("div", {
                  className: gD.Ji,
                  children: (0, A.jsxs)(gg.$T, {
                      color: gg.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          R.intl.format(R.t.IIHUUF, { subscriptionId: t.id }),
                          (0, A.jsx)("br", {}),
                          R.intl.format(R.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, A.jsx)("div", {
                  className: gD.Ji,
                  children: (0, A.jsx)(tQ.D, {
                      label: R.intl.string(R.t.azZaZa),
                      children: (0, A.jsx)(c0.A, { subscription: t, currentInvoicePreview: n, disabled: l || s }),
                  }),
              });
}
var gz = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
n(938796);
var gX = n(38405);
let gY = (0, h.UT)(uy.A, {
    getQueryId: S.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = uy.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && gX.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, dd.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var gH = n(240248),
    gK = n(237218),
    gW = n(763064);
function gZ(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [l, s] = E.useState(!1),
        [r, a] = E.useState(null),
        o =
            null != r &&
            (0, A.jsx)("button", {
                className: gW.x6,
                onClick: () => s((e) => !e),
                children: (0, A.jsxs)(H.E, {
                    className: gW.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        l ? R.intl.string(R.t["JQX/Pb"]) : R.intl.string(R.t.Fbrd8J),
                        l
                            ? (0, A.jsx)(g_.t, { color: nQ.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, A.jsx)(d$.a, { color: nQ.A.colors.TEXT_BRAND, size: "xs" }),
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
                    className: gW.Qs,
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
var gq = n(920352);
function gQ(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: l, benefits: s, description: r } = n,
        a = E.useMemo(() => (null == n.thumbnail ? null : (0, gK.t)(l, n.thumbnail, 256)), [l, n.thumbnail]),
        { data: o } = gY(n.skuId),
        u = E.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, cI._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, A.jsxs)(gh, {
              className: ir()(gq.iE, i),
              header: (0, A.jsxs)(A.Fragment, {
                  children: [
                      (0, A.jsxs)("div", {
                          className: gq.qd,
                          children: [
                              null != a &&
                                  (0, A.jsx)(gT._, { src: a.href, imageClassName: gq.rW, width: 48, height: 48 }),
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
                  !(0, gH.uJ)(r) &&
                      (0, A.jsx)("div", {
                          className: gq.h_,
                          children: (0, A.jsx)(gZ, { variant: "text-sm/medium", children: r }),
                      }),
                  null != s &&
                      s.length > 0 &&
                      (0, A.jsx)("div", {
                          className: gq.PX,
                          children: s.map((e) => {
                              let { id: t, name: n, description: i, icon: s } = e;
                              return (0, A.jsx)(gS.FY, { header: n, icon: (0, gL.N)(l, s), description: i }, t);
                          }),
                      }),
              ],
          });
}
var gJ = n(185438),
    g$ = n(683380);
function g0(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: l,
            navigateToHome: s,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, gf.A)(t, 100),
        u = (0, gO.PJ)(r.flags),
        d = u ? gp.R : gx.UserIcon,
        c = u ? R.intl.string(R.t["46YF2D"]) : R.intl.string(R.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, h.bG)([lh.A], () => (u && null != g ? lh.A.getGuild(g) : void 0), [g, u]),
        E = (0, h.bG)(
            [uv.A],
            () => {
                if (null != a) return uv.A.get(a);
            },
            [a],
        ),
        S = gR(n.currentPeriodEnd);
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsxs)("div", {
                className: g$.wx,
                children: [
                    null != o && (0, A.jsx)(gT._, { src: o.href, imageClassName: g$.Z2, width: 48, height: 48 }),
                    (0, A.jsxs)("div", {
                        children: [
                            (0, A.jsx)(p.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, A.jsxs)("div", {
                                className: g$.p4,
                                children: [
                                    (0, A.jsxs)(p.D, {
                                        variant: "heading-md/normal",
                                        className: g$.N4,
                                        children: [(0, A.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, A.jsxs)(A.Fragment, {
                                            children: [
                                                (0, A.jsx)(H.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, A.jsxs)("span", {
                                                    className: g$.vP,
                                                    children: [
                                                        (0, A.jsx)(dj.Ay, { guild: m, size: dj.Ay.Sizes.SMOL }),
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
            (0, A.jsx)(gb, {
                children: (e) =>
                    (0, A.jsxs)("div", {
                        className: g$._B,
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
                            (0, A.jsx)(gb.Toggle, {
                                text: e ? R.intl.string(R.t["1Rkq/E"]) : R.intl.string(R.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, A.jsxs)("div", {
                className: g$.x0,
                children: [
                    (0, A.jsx)(gQ, {
                        storeListing: i,
                        className: g$.o3,
                        cta: (0, A.jsxs)("div", {
                            className: g$.cJ,
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
                                  gQ,
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
                            : (0, A.jsx)(g1, { storeListing: e, guildId: g, navigateToHome: s }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function g1(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: l } = (0, gJ.A)({
            analyticsLocation: S.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, A.jsx)(gQ, {
        storeListing: t,
        cta: (0, A.jsx)(_.$, { variant: "primary", size: "sm", text: R.intl.string(R.t["+KwmBt"]), onClick: l }),
    });
}
class g2 extends E.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, A.jsxs)(gg.$T, {
                  color: gg.Hv.DANGER,
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
function g3(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, l] = E.useState({ route: gz.HOME }),
        { route: s } = i;
    function r() {
        l({ route: gz.HOME });
    }
    let a = (e) => {
            (l({ route: gz.SWITCH_APP_PLANS, ...e }), n(R.intl.string(R.t.VFqtkP), r));
        },
        [o, u] = E.useState({});
    E.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: gP.LOADING })),
                (0, gm._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: gP.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: gP.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, gA.E)(),
        c = d !== gA.mJ.LOADED;
    switch (s) {
        case gz.HOME:
            return (0, A.jsx)(A.Fragment, {
                children: t.map((e) =>
                    (0, A.jsx)(
                        g2,
                        {
                            subscription: e,
                            children: (0, A.jsx)(gG, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? gP.LOADING : (o[e.id] ?? gP.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case gz.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, A.jsx)(g0, { ...m, navigateToHome: r });
        default:
            (0, ii.xb)(s);
    }
}
var g6 = n(707989);
function g5(e) {
    let { onGoBack: t } = e,
        n = (0, h.yK)(
            [ok.A],
            () =>
                ok.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, l] = E.useState();
    return (
        null == i && (i = (0, A.jsx)(g4, { onBack: t, title: R.intl.string(R.t["DB/m9a"]) })),
        (0, A.jsxs)("div", {
            children: [
                i,
                (0, A.jsx)("div", {
                    className: g6.A,
                    children: (0, A.jsx)(g3, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            l(
                                (0, A.jsx)(g4, {
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
function g4(e) {
    let { onBack: t, title: n } = e;
    return (0, A.jsxs)("div", {
        className: g6.D,
        children: [
            (0, A.jsx)(i9.K, {
                "aria-label": R.intl.string(R.t["13/7kX"]),
                icon: () => (0, A.jsx)(gc.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, A.jsx)(p.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var g8 = n(881489),
    g7 = n(366999),
    g9 = n(148155),
    me = n(391659);
function mt(e) {
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
        ? ((t = R.intl.string(g9.default["/S02sx"])), (n = R.intl.string(g9.default.OPJNST)))
        : i
          ? ((t = R.intl.string(R.t["hT6i/0"])),
            (n = null != a ? R.intl.format(R.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = R.intl.string(R.t["3G0CTC"])),
            (n = r === tX.xc.FP_SUB_PAUSED ? R.intl.format(R.t.MMvaIG, { resumeDate: s.toDate() }) : null));
    let u = ir()({ [me.Hs]: i, [me.mT]: !i }),
        d = ir()({ [me.CQ]: i, [me.ZM]: !i }),
        c = ir()({ [me.EM]: !i });
    return (0, A.jsxs)("div", {
        className: me.r6,
        children: [
            (0, A.jsxs)("div", {
                className: me.Nv,
                children: [
                    (0, A.jsx)(p.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, A.jsx)(H.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, A.jsx)("div", {
                    className: me.ZS,
                    children: (0, A.jsx)("div", {
                        className: u,
                        children: (0, A.jsx)(H.E, { variant: "text-sm/semibold", className: d, children: l }),
                    }),
                }),
        ],
    });
}
let mn = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: l } = e,
        s = (0, ai.kX)(t),
        r = s.length > 0,
        a = (0, g7.Ay)(t.endsAt, g7.yE.SHORT_TIME),
        o = r ? s : a;
    return (0, A.jsx)("div", {
        children: (0, A.jsxs)("div", {
            className: ir()(n, me.f8),
            children: [
                (0, A.jsx)("div", {
                    className: me.J_,
                    children: (0, A.jsxs)("div", {
                        className: me.Bh,
                        children: [
                            (0, A.jsx)("div", {
                                className: me.xt,
                                children: (0, A.jsx)(r1.t, { size: "md", color: "white", className: me.T8 }),
                            }),
                            (0, A.jsx)("div", {
                                className: me.pt,
                                children: (0, A.jsx)(p.D, {
                                    variant: "heading-md/semibold",
                                    children: R.intl.string(R.t.DFMPWS),
                                }),
                            }),
                            (0, A.jsx)(H.E, {
                                className: me.PJ,
                                variant: "text-md/semibold",
                                children: s.length > 0 ? s : R.intl.string(R.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, A.jsx)(mt, {
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
var mi = n(983048);
function ml(e) {
    let t,
        {
            user: n,
            planId: i,
            count: l,
            userPremiumSubscription: s,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, h.yK)([uy.A], () => [uy.A.get(i), null != s ? uy.A.get(s.planId) : null]);
    if (null == o || ai.Ay.getInterval(i).intervalType !== tX.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, ai.z4)(i),
        m = ai.Ay.getDisplayName(i);
    if (a) t = R.intl.string(g9.default["5asczk"]);
    else if (c && null != s) {
        let e;
        e = new Date(s.status === S.Dmq.PAUSED && null != s.pauseEndsAt ? s.pauseEndsAt : s.currentPeriodEnd);
        let n = (0, ai._e)(e, r);
        t = R.intl.formatToPlainString(R.t["5CNRRA"], { date: n ?? 0 });
    } else t = R.intl.formatToPlainString(R.t.eNXZ5O, { planName: m });
    let E = g || n.hasFreePremium() || (null != s && s.isPurchasedExternally);
    return (0, A.jsxs)("div", {
        className: me.Bh,
        children: [
            (0, A.jsx)("div", {
                className: ir()({
                    [me.bY]: g,
                    [me.sr]: o.skuId === tX.pe.TIER_0,
                    [me.lP]: o.skuId === tX.pe.TIER_1,
                    [me.eb]: o.skuId === tX.pe.TIER_2,
                }),
                children: g
                    ? (0, A.jsx)(da._, { size: "md", color: "currentColor", className: me.Kk })
                    : (0, A.jsx)(r1.t, { size: "md", color: "currentColor", className: me.Kk }),
            }),
            (0, A.jsxs)("div", {
                className: me.pt,
                children: [
                    (0, A.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        children: R.intl.format(R.t.LzobT9, { planName: m }),
                    }),
                    !E &&
                        (0, A.jsx)(p.D, {
                            className: me.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, A.jsx)(H.E, {
                className: me.PJ,
                variant: "text-md/semibold",
                children: R.intl.format(R.t["ess/xl"], { count: l }),
            }),
        ],
    });
}
let ms = function (e) {
    let { className: t, entitlements: n } = e,
        i = B()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, h.yK)([uA.A], () => uA.A.getUnactivatedFractionalPremiumUnits()),
        s = (0, h.bG)([ok.A], () => ok.A.getPremiumSubscription()),
        r = (0, h.bG)([ok.A], () => null == ok.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === tX.gD.PREMIUM_MONTH_TIER_1),
        o = (0, h.bG)([si.default], () => si.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)("div", {
                className: ir()(t, me.xF, me.J_),
                children: Object.keys(i).map((e) =>
                    (0, A.jsx)(
                        ml,
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
                            className: me.eT,
                            variant: "text-md/normal",
                            children: R.intl.string(R.t["VNr4+O"]),
                        }),
                        (0, A.jsx)(mi.i, {}),
                    ],
                }),
        ],
    });
};
var mr = n(902782);
function ma(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: l } = (0, eP.Ay)(),
        [s] = (0, c$.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: l,
            analyticsLocation: tL.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == s) return null;
    let r = i ? mr.r : mr.a,
        a = s.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, ai.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = uy.A.get(o);
    ta()(null != u, "Missing plan");
    let d = (0, cI.$g)(s.total, s.currency);
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
function mo(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === S.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, A.jsx)(ma, { subscription: t, withOverheadSeparator: n });
}
var mu = n(963897),
    md = n(689255);
let mc = { [eC.nR]: "role_subscriptions_panel", [eC.PZ]: "application_subscriptions_panel" };
function mg() {
    return (0, A.jsx)(om.Z, {
        className: md.wb,
        type: om.Z.Types.CUSTOM,
        children: (0, A.jsxs)(lg.A, {
            align: lg.A.Align.CENTER,
            children: [
                (0, A.jsx)(i0.A, { game: null, size: i0.M.SMALL, className: md.pV }),
                (0, A.jsx)("span", { className: md.O, children: R.intl.string(R.t["jy/hyj"]) }),
            ],
        }),
    });
}
function mm(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, cA._)(e, t));
}
function mA() {
    let e = (0, h.bG)([uA.A], () => uA.A.getForApplication(tX.tv), [], mm);
    return (
        E.useEffect(() => {
            (0, uY.LM)(tX.tv);
        }, []),
        (0, A.jsx)(n$.n, {
            label: R.intl.string(R.t["2GKrvn"]),
            description: R.intl.string(R.t.Z5b2Gf),
            children:
                null != e && ai.Ay.hasAccountCredit(e)
                    ? (0, A.jsx)(ms, { className: md.fX, entitlements: e })
                    : (0, A.jsx)(mg, {}),
        })
    );
}
function mE() {
    return (0, A.jsx)("hr", { className: md.hr });
}
let mh = function () {
        var e;
        let t = (0, h.bG)([ok.A], () => ok.A.getPremiumTypeSubscription()),
            n = (0, cE.A)({ subscriptionFilter: (e) => mu.Hy.has(e.status) }),
            i = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
            l = n.length > 1,
            s = (0, h.bG)(
                [oV.A],
                () => (null != t && null != t.paymentSourceId ? oV.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, h.bG)([ok.A], () => ok.A.hasFetchedSubscriptions()),
            a = (0, h.bG)([ou.A], () => ou.A.isBusy),
            o = (0, dc.Y)(),
            u = c1.A.useField("subsection"),
            d = c1.A.useField("scrollToGameServers"),
            g = E.useRef(null);
        E.useEffect(() => {
            (0, n4._)(null != u ? mc[u] : c.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let m = (0, h.bG)([ok.A], () => ok.A.getActiveApplicationSubscriptions()?.length ?? 0),
            T = (0, h.bG)(
                [ok.A],
                () =>
                    Object.values(ok.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === S.rzx.GUILD)
                        .filter((e) => e.status !== S.Dmq.ENDED).length,
            ),
            x = (0, h.bG)([ok.A], () =>
                Object.values(ok.A.getSubscriptions() ?? {}).some((e) => e.type === S.rzx.GAME_SERVER),
            ),
            { servers: f } = (0, cV.f)({ enabled: x }),
            I = (0, h.yK)([ok.A], () => (0, cy.eP)(f, (e) => ok.A.getSubscriptionById(e)), [f]),
            _ = (0, dm.A)({ forceFetch: !0 }),
            N = (0, g8.ds)(),
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
                c1.A.setState({ scrollToGameServers: !1 }));
        }, [d, r, o, I.length]),
        E.useEffect(
            () => (
                e5.h.wait(() => {
                    ((0, dd.zS)(), or.hP(), (0, du.CD)(), or.$o());
                }),
                function () {
                    c1.A.resetState();
                }
            ),
            [],
        ),
        te.A.enabled)
            ? (0, A.jsx)(a7.A, {})
            : r && o
              ? u === eC.nR
                  ? (0, A.jsx)(ga, { onGoBack: () => c1.A.setState({ subsection: null }) })
                  : u === eC.PZ
                    ? (0, A.jsx)(g5, { onGoBack: () => c1.A.setState({ subsection: null }) })
                    : (0, A.jsx)("div", {
                          className: md.kL,
                          children: (0, A.jsxs)("div", {
                              className: md.Qs,
                              children: [
                                  l ? (0, A.jsx)(mu.Sb, {}) : null,
                                  null != t
                                      ? (0, A.jsx)(mu.Ay, {
                                            subscription: t,
                                            paymentSource: s,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, A.jsx)(mu.TC, {}),
                                  b &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, A.jsxs)("section", {
                                          children: [
                                              (0, A.jsx)(p.D, {
                                                  variant: "heading-md/bold",
                                                  className: md.HL,
                                                  children: R.intl.string(R.t.Obre8v),
                                              }),
                                              (0, A.jsx)(H.E, {
                                                  variant: "text-md/normal",
                                                  className: md.JU,
                                                  children: R.intl.format(R.t["7Zi06b"], {
                                                      helpCenterLink: ex.A.getArticleURL(
                                                          S.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, A.jsx)(mn, {
                                                  className: md.fX,
                                                  fractionalPremiumInfo: _,
                                                  activationDate: C,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, A.jsx)(mA, {}),
                                  T > 0 &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)(mE, {}),
                                              (0, A.jsx)(cF, {
                                                  count: T,
                                                  onClickManageSubscription: () => c1.A.setState({ subsection: eC.nR }),
                                              }),
                                          ],
                                      }),
                                  m > 0 &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)(mE, {}),
                                              (0, A.jsx)(gd, {
                                                  count: m,
                                                  onClickManageSubscription: () => {
                                                      (c1.A.setState({ subsection: eC.PZ }),
                                                          tt.default.track(
                                                              S.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          ));
                                                  },
                                              }),
                                          ],
                                      }),
                                  I.length > 0 &&
                                      (0, A.jsxs)("div", {
                                          ref: g,
                                          children: [(0, A.jsx)(mE, {}), (0, A.jsx)(cM, { servers: I })],
                                      }),
                                  (0, A.jsx)(mE, {}),
                                  null != t ? (0, A.jsx)(mo, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, A.jsx)("div", { className: ir()(md.kL, md.Lq), children: (0, A.jsx)(oe.y, {}) });
    },
    mS = (0, d.E2)(c.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [R.intl.string(R.t.trSpHX), R.intl.string(R.t["2GKrvn"])],
        Component: () => (0, A.jsx)(mh, {}),
    }),
    mT = (0, d.zZ)(c.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [R.intl.string(R.t.trSpHX), R.intl.string(R.t["2GKrvn"])],
        buildLayout: () => [mS],
    }),
    mp = (0, d.t_)(c.X.SUBSCRIPTIONS_PANEL, { useTitle: () => R.intl.string(R.t.trSpHX), buildLayout: () => [mT] }),
    mx = (0, d.i4)(c.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.trSpHX),
        icon: cg.L,
        usePersistentBadge: function () {
            let e = (0, cm.l)();
            return E.useMemo(
                () => ({
                    badgeType: m.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, A.jsx)(iY.E, { size: "xs", color: nQ.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [mp],
    }),
    mf = (0, d.WI)(c.X.BILLING_SECTION, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        buildLayout: () => [dr, cc, mx, u9, oq],
    });
var mI = n(540999),
    m_ = n(306471),
    mN = n(964355),
    mC = n(172272);
let mb = (0, d.zD)(c.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isAxeEnabled),
        setValue: (e) => (0, s2.x)({ axeEnabled: e }),
    }),
    my = (0, d.zD)(c.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, s2.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var mv = n(276086),
    mj = n(354328);
let mO = (0, d.zD)(c.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, mj.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, mv.L)("highlight_mana_components", e);
        },
    }),
    mL = (0, d.zD)(c.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, mj.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, mv.L)("highlight_mana_text_overrides", e);
        },
    }),
    mR = (0, d.zD)(c.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, mj.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, mv.L)("highlight_mana_text", e);
        },
    }),
    mD = (0, d.zD)(c.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, mj.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, mv.L)("highlight_void_toggleables", e);
        },
    }),
    mP = (0, d.sN)(c.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, h.bG)([s3.default], () => s3.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: mC.YR,
        markers: Array.from({ length: mC.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => mC.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            mC.Or.getState().setHorizontalSpacing(e);
        },
    }),
    mG = (0, d.zD)(c.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, s2.x)({ layoutDebuggingEnabled: e });
        },
    }),
    mU = (0, d.sN)(c.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, h.bG)([s3.default], () => s3.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: mC.YR,
        markers: Array.from({ length: mC.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => mC.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            mC.Or.getState().setVerticalSpacing(e);
        },
    }),
    mM = (0, d.zZ)(c.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [my, mG, mP, mU, mO, mR, mL, mD, mb],
    });
var mV = n(246605),
    mk = n(274184);
let mw = (0, d.E2)(c.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, h.bG)([mk.Ay], () => mk.Ay.getActionTriggeredSurveyOverride());
            return (0, A.jsx)(Ad, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => mV.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    mF = (0, d.zD)(c.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => L.HZ.useSetting(),
        setValue: (e) => {
            L.HZ.updateSetting(e);
        },
    });
var mB = n(396478),
    mz = n(173936),
    mX = n(103557),
    mY = n(414079),
    mH = n(148810),
    mK = n(380610),
    mW = n(986238),
    mZ = n(428524),
    mq = n(252149),
    mQ = n(221851);
let mJ = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    m$ = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function m0(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class m1 extends E.Component {
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
        return (0, A.jsxs)(lg.A, {
            direction: lg.A.Direction.VERTICAL,
            className: ir()(mZ.oS, mQ.SX, mq.N, mZ.nM),
            children: [
                (0, A.jsx)(mY.A, {
                    className: ir()(mZ.lL, { [mZ.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, A.jsxs)(lg.A, {
                    className: mQ.QB,
                    children: [
                        (0, A.jsx)(lg.A.Child, {
                            basis: "50%",
                            children: (0, A.jsx)(i7.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: m$,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: i,
                            }),
                        }),
                        (0, A.jsx)(lg.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, A.jsx)(lo.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, A.jsxs)(lg.A.Child, {
                    children: [
                        null != l &&
                            "" !== l &&
                            (0, A.jsx)(H.E, {
                                className: mZ.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: l,
                            }),
                        (0, A.jsxs)(H.E, {
                            variant: "text-sm/normal",
                            className: mZ.AS,
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
class m2 extends E.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, mK.bD)();
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
        return B().without(mJ, ...t);
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
        (delete t[e], this.setState({ buildOverrides: t }));
    };
    handleDiscardChanges = () => {
        this.setState({ buildOverrides: B().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, mH.Zk)(e);
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
        (0, la.openModal)((t) => (0, A.jsx)(m3, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, A.jsx)(mB.pp, {
            theme: nM.A.theme,
            className: ir()(mQ.eT, mQ.SX),
            children: (0, A.jsx)(mB.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : B().map(e, (e, i) =>
                  (0, A.jsx)(
                      m1,
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
            : (0, A.jsx)(lt.m, {
                  text: "Generate Public Link",
                  children: (0, A.jsx)(i9.K, {
                      variant: "secondary",
                      icon: mz.LinkIcon,
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
                    disabled: m0(t ?? {}),
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
            ? (0, A.jsx)(oe.y, { className: mQ.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let l = !n && !t && this.getAvailableProjects().length > 0,
            s =
                m0(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
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
                    (0, A.jsx)(i7.l, {
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
                    (0, A.jsxs)(sF.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class m3 extends E.Component {
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
        e.key === ly.dh.ENTER && this.handleAddAllowedVersion();
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
            experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments),
        },
    });
    handleGenerateLink = async () => {
        if (this.isMobile() && 0 === this.state.allowedVersions.length)
            return void this.setAllowedVersionError("You must add at least one allowed version for iOS");
        this.setStatusMessage(null);
        let e = this.generatePayload(),
            t = await (0, mH.SB)(e);
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
        return m0(this.props.buildOverrides ?? {});
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
            d = mW.fL.find((t) => t.value === e),
            c = l.map((e) => ({ id: e, label: e, value: e }));
        return (0, A.jsxs)(X.B, {
            gap: 20,
            children: [
                (0, A.jsx)(i7.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: mW.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, A.jsx)(i7.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: mW.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, A.jsxs)(X.B, {
                          gap: 20,
                          children: [
                              (0, A.jsx)(lo.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: s,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: iF.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, A.jsx)(i7.l, {
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
                    : (0, A.jsx)(mX.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, A.jsx)(mX.f, {
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
        let n = r2.Y.INFO;
        switch (t) {
            case 0:
                n = r2.Y.ERROR;
                break;
            case 1:
                n = r2.Y.WARNING;
        }
        return (0, A.jsx)(r2.p, { messageType: n, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, A.jsx)(lr.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, A.jsx)(uw.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let m6 = (0, d.E2)(c.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: m2 });
var m5 = n(256311),
    m4 = n(883600);
let m8 = (0, d.E2)(c.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, h.bG)([m4.A], () => m4.A.overrideId());
        async function t(e) {
            let t = m4.A.getChangelog(e, "en-US");
            return null != t ? t : ((await m5.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, A.jsx)(Ad, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => m5.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var m7 = n(506774);
let m9 = new Date("2018-01-01"),
    Ae = (0, d.Tf)(c.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => L.pK.useSetting() === oc.default.fromTimestamp(m9.getTime()),
        onClick: () => (m7.w.set("lastChangeLogDate", m9), L.pK.updateSetting(oc.default.fromTimestamp(m9.getTime()))),
    }),
    At = (0, d.zD)(c.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, h.bG)([s3.default], () => s3.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, h.bG)(
                [s3.default],
                () => s3.default.disableAppCollectionsCache || s3.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, s2.x)({ disableAppCollectionsCache: e }),
    }),
    An = (0, d.zD)(c.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isForcedCanary),
        setValue: (e) => {
            (0, s2.x)({ canary: e });
        },
    }),
    Ai = (0, d.zD)(c.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.sourceMapsEnabled),
        setValue: (e) => (0, s2.x)({ sourceMapsEnabled: e }),
    }),
    Al = (0, d.zD)(c.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, s2.x)({ onlyShowPreviewAppCollections: e }),
    });
var As = n(10094),
    Ar = n(683760);
let Aa = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: tX.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: tX.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: tX.PremiumTypes.TIER_2 },
    ],
    Ao = (0, d.Hn)(c.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => Aa,
        clearable: !0,
        useValue: () =>
            (0, h.bG)([Ar.A], () => {
                let e = Ar.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, As.O)(null, void 0)
                : null === e
                  ? (0, As.O)(void 0, void 0)
                  : (0, As.O)(0 === e ? null : e, void 0);
        },
    }),
    Au = (0, d.E2)(c.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, h.bG)([mk.Ay], () => mk.Ay.getSurveyOverride());
            return (0, A.jsx)(Ad, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => mV.xr(e),
                fetchOverride: (e) => mV.BC(e, !0) ?? null,
            });
        },
    });
function Ad(e) {
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
            children: (0, A.jsx)(lo.k, {
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
let Ac = (0, d.zZ)(c.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [Ao, Au, mw, m8, Ae, An, mF, Al, At, Ai, m6],
        useInlineNotice: () => ({
            type: m.lT.INLINE_NOTICE,
            noticeType: "info",
            text: R.intl.format(R.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    Ag = (0, d.zD)(c.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, s2.x)({ logAnalyticsEvents: e }),
    }),
    Am = (0, d.zD)(c.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isLoggingGatewayEvents),
        setValue: (e) => (0, s2.x)({ logGatewayEvents: e }),
    }),
    AA = (0, d.zD)(c.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.preventPopoutClose),
        setValue: (e) => (0, s2.x)({ preventPopoutClose: e }),
    }),
    AE = (0, d.zD)(c.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.logKeyboardMismatches),
        setValue: (e) => (0, s2.x)({ logKeyboardMismatches: e }),
    }),
    Ah = (0, d.zD)(c.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isLoggingOverlayEvents),
        setValue: (e) => (0, s2.x)({ logOverlayEvents: e }),
    }),
    AS = (0, d.zD)(c.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isLoggingQuestEvents),
        setValue: (e) => (0, s2.x)({ logQuestEvents: e }),
    }),
    AT = (0, d.zD)(c.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isTracingRequests),
        setValue: (e) => (0, s2.x)({ trace: e }),
    }),
    Ap = (0, d.zZ)(c.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [Am, Ah, AT, Ag, AE, AA, AS] }),
    Ax = (0, d.t_)(c.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [Ac, Ap, mM],
    }),
    Af = (0, d.i4)(c.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: m_.V,
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
                } = (0, h.cf)([s3.default, mI.A, si.default], () => ({
                    layoutDebuggingEnabled: s3.default.layoutDebuggingEnabled,
                    isDeveloper: mI.A.isDeveloper,
                    isLoggingGatewayEvents: s3.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: s3.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: s3.default.isLoggingAnalyticsEvents,
                    isTracingRequests: s3.default.isTracingRequests,
                    isForcedCanary: s3.default.isForcedCanary,
                    isSourceMapsEnabled: s3.default.sourceMapsEnabled,
                    isAxeEnabled: s3.default.isAxeEnabled,
                    preventPopoutClose: s3.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: s3.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: s3.default.disableAppCollectionsCache,
                    isStaff: si.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: m, verticalSpacing: E } = (0, mC.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: T } = mC.Or.getState(),
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
                                              (0, s2.x)({ canary: !r });
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
                                              (0, s2.x)({ onlyShowPreviewAppCollections: !u });
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
                                              (0, s2.x)({ disableAppCollectionsCache: !d });
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
                                              (0, s2.x)({ logGatewayEvents: !n });
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
                                              (0, s2.x)({ logOverlayEvents: !i });
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
                                              (0, s2.x)({ logAnalyticsEvents: !l });
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
                                              (0, s2.x)({ trace: !s });
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
                                              (0, s2.x)({ preventPopoutClose: !o });
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
                                              (0, s2.x)({ axeEnabled: !a });
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
                                              (0, s2.x)({ layoutDebuggingEnabled: !e });
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
                                                          (0, A.jsx)(mN.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: mC.YR,
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
                                                          (0, A.jsx)(mN.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: E,
                                                              minValue: 0,
                                                              maxValue: mC.YR,
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
                                { id: "discord-stats", label: "Discord Stats", action: () => sn() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [Ax],
    });
var AI = n(127062),
    A_ = n(25044),
    AN = n(80703),
    AC = n(123292),
    Ab = n(857250),
    Ay = n(683438),
    Av = n(890856),
    Aj = n(100392),
    AO = n(102609),
    AL = n(271478),
    AR = n(710195),
    AD = n(386976),
    AP = n(257433),
    AG = n(32523),
    AU = n(96919),
    AM = n(688151),
    AV = n(863763);
function Ak(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: l } = e,
        [s, r] = E.useState(l),
        [a, o] = E.useState(!1),
        u = E.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, h.bG)([uC.default], () => uC.default.getId()),
        c = (0, h.bG)([uC.default], () => {
            let e = uC.default.getInstallationForTracking();
            return null == e ? null : (0, AN.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, AP.iN)(t, g),
        S = (0, AP.Fm)(t, g),
        T = (0, h.yK)([re.A], () =>
            B()
                .sortBy(re.A.getRecentExposures(AM.Vh.USER, n), (e) => {
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
                (0, uO.C)((0, Aj.yA)(n), () => {
                    ((0, l8.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: l7.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        x = (0, A.jsx)(Av.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, A.jsxs)(H.E, {
                variant: "text-md/medium",
                className: AV.DD,
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
                                    uO.p5 &&
                                        (0, A.jsx)(n0.D, {
                                            onClick: p,
                                            children: (0, A.jsx)(mz.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, A.jsx)(H.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, A.jsx)("span", {
                        className: AV.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!s) return (0, A.jsx)("div", { className: AV.Os, children: x });
    let f = "";
    return (
        (f =
            t.system === AO.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? AM.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, A.jsxs)("div", {
            className: AV.Os,
            children: [
                x,
                (0, A.jsx)("div", {
                    children: (0, A.jsx)(AL.g, {
                        label: t.system === AO.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, A.jsx)("div", {
                    className: AV.h_,
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
                                  className: AV.id,
                                  children: "Server Descriptor",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: AV.AS,
                                  children: null == S ? "None" : JSON.stringify(S, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: AV.id,
                                  children: "Override Descriptor",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: AV.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: AV.id,
                                  children: "Recent Exposures",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: AV.AS,
                                  children: 0 === T.length ? "None" : T.join("\n"),
                              }),
                          ],
                      })
                    : (0, A.jsx)("div", {
                          className: AV.id,
                          children: (0, A.jsx)(AC.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, A.jsx)(i8.c, { className: AV.yF }),
            ],
        })
    );
}
function Aw(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [l, s] = E.useState(null != i),
        [r, a] = E.useState(!1),
        o = E.useCallback(() => {
            s((e) => !e);
        }, []),
        u = (0, h.bG)([re.A], () => re.A.getLoadedGuildExperiment(n)),
        d = (0, h.bG)([re.A, lh.A, AR.A], () => {
            if (t.system === AO.l5.LEGACY) return null == re.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !lh.A.getGuildsArray().some((t) => null != AR.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, h.yK)([re.A], () =>
            B()
                .sortBy(re.A.getRecentExposures(AM.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, h.yK)([uC.default, lh.A, re.A, AR.A], () => {
            let e = t.system === AO.l5.LEGACY,
                i = t.name,
                l = uC.default.getId(),
                s = B().sortBy(lh.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of s) {
                let s = e
                    ? (re.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? AM.RE.NOT_ELIGIBLE)
                    : (AR.A.getEvaluationAndAssignment("guild", t.id, i, l)[1]?.variantId ?? AM.RE.NOT_ELIGIBLE);
                (s in r || (r[s] = 0), r[s]++, a.push(`${t.name}: ${s}`));
            }
            let o = B()(r)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${r[e]} guilds in bucket ${e}`)
                .join(", ");
            return [a.join("\n"), o];
        }),
        S = t.system !== AO.l5.LEGACY,
        T = (0, h.yK)([lh.A], () => B().sortBy(lh.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [p, x] = E.useState(() => lS.A.getGuildId() ?? lS.A.getLastSelectedGuildId()),
        f = T.find((e) => e.id === p)?.name,
        I = (0, h.bG)(
            [AR.A],
            () => {
                if (S && null != p) return AR.A.getServerAssignment("guild", p, t.name);
            },
            [S, p, t.name],
        ),
        _ = (0, h.bG)([AR.A, uC.default], () => {
            if (!S) return;
            let e = uC.default.getId();
            return AR.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != _ && (_.isOverride || _.useAsEligibility),
        C = (0, A.jsx)(n0.D, {
            onClick: o,
            children: (0, A.jsxs)(H.E, {
                variant: "text-md/medium",
                className: AV.DD,
                children: [
                    (0, A.jsxs)("div", {
                        children: [
                            (0, A.jsx)("span", { children: t.title }),
                            (0, A.jsx)(H.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, A.jsx)("span", { className: AV.km, children: "Guild" }),
                ],
            }),
        });
    return l
        ? (0, A.jsxs)("div", {
              className: AV.Os,
              children: [
                  C,
                  (0, A.jsx)(AL.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  S &&
                      T.length > 0 &&
                      (0, A.jsx)("div", {
                          className: AV.h_,
                          children: (0, A.jsx)(i7.l, {
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
                      className: AV.h_,
                      children: d
                          ? (0, A.jsx)(H.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === AO.l5.LEGACY
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
                                  className: AV.id,
                                  children: ["Server Descriptor", null != f ? ` (${f})` : ""],
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: AV.AS,
                                  children: null == I ? "None" : JSON.stringify(I, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: AV.id,
                                  children: "Client Eligibility",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: AV.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, A.jsxs)("div", {
                            children: [
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: AV.id,
                                    children: "Guild Assignments",
                                }),
                                (0, A.jsx)(H.E, { variant: "code", className: AV.AS, children: g }),
                                t.system === AO.l5.LEGACY &&
                                    (0, A.jsxs)(A.Fragment, {
                                        children: [
                                            (0, A.jsx)(H.E, {
                                                variant: "text-lg/medium",
                                                className: AV.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, A.jsx)(H.E, {
                                                variant: "code",
                                                className: AV.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: AV.id,
                                    children: "Override Descriptor",
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "code",
                                    className: AV.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: AV.id,
                                    children: "Recent Exposures",
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "code",
                                    className: AV.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, A.jsx)("div", {
                            className: AV.id,
                            children: (0, A.jsx)(AC.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, A.jsx)(i8.c, { className: AV.yF }),
              ],
          })
        : (0, A.jsx)("div", { className: AV.Os, children: C });
}
let AF = (0, d.E2)(c.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, AD.op)(),
                { experiments: n, overridesInfo: i } = (0, AG.hI)(),
                l = E.useMemo(() => ({ ...n, ...e }), [n, e]),
                s = E.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, h.bG)([uC.default], () => {
                    let e = uC.default.getInstallationForTracking();
                    return null == e ? null : (0, AN.v)(e);
                }),
                [a, o] = E.useState(""),
                u = (0, AU.oC)((0, AU.R3)((0, AU.Fm)(l), s), a);
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
                                uO.p5 &&
                                    (0, A.jsx)(AC.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uO.C)(r, () => {
                                                (0, l8.P0)((0, Ab.o)("Installation ID copied!", l7.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, A.jsx)(Ay.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? Aw : Ak;
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
                              className: AV.p$,
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
    AB = (0, d.zZ)(c.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [AF] }),
    Az = (0, d.t_)(c.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [AB] }),
    AX = (0, d.i4)(c.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: AI.c,
        useMenu: A_.A,
        buildLayout: () => [Az],
    }),
    AY = (0, d.WI)(c.X.DEVELOPER_SECTION, {
        useTitle: () => R.intl.string(R.t["+gHUHA"]),
        usePredicate: () => mI.A.isDeveloper,
        buildLayout: () => [AX, Af],
    });
var AH = n(682348),
    AK = n(871633),
    AW = n(751075),
    AZ = n(843402);
let Aq = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function AQ() {
    let e = (0, h.yK)([iQ.Ay], () => iQ.Ay.getGamesSeen(!1)),
        t = (0, h.bG)([iQ.Ay], () => Aq(...iQ.Ay.getOverrides()));
    E.useEffect(() => {
        if (eQ.isPlatformEmbedded) return ((0, AZ.a2)(), AZ.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = E.useMemo(
        () =>
            e.reduce((e, t) => ((0, AK.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function AJ(e) {
    let { gameHistory: t } = AQ();
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
function A$(e) {
    let { namedGames: t, totalCount: n } = AJ(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function A0() {
    let { namedGames: e } = AJ(2),
        [t, n] = E.useMemo(() => e.map((e) => e.id), [e]);
    E.useEffect(() => {
        gy.Ay.fetchApplications([t, n].filter(ii.Vq));
    }, [t, n]);
    let [i, l] = (0, h.yK)([iW.A], () => [t, n].map(iW.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, A.jsx)(i0.A, { game: i, size: i0.M.MEDIUM_LARGE }), shape: AW.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, A.jsx)(i0.A, { game: l, size: i0.M.MEDIUM }), shape: AW.e0.ROUNDED } : null,
          };
}
let A1 = (0, d.AK)(c.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = A$(2);
            return R.intl.format(R.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = A0();
            return { type: m.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: c.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, h.bG)([iQ.Ay], () => iQ.Ay.getGamesSeen(!1).some((e) => !(0, AK.n1)(e))) && (0, nm.xl)(),
    }),
    A2 = (0, d.gN)(c.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [A1] });
var A3 = n(57129);
let A6 = (0, d.zD)(c.X.ACTIVITY_PRIVACY_SETTING, {
    useTitle: () => R.intl.string(A3.default.WhdCGP),
    useSubtitle: () => R.intl.string(A3.default.UQ9RHJ),
    useValue: L.tz.useSetting,
    setValue: L.tz.updateSetting,
});
var A5 = n(406535);
let A4 = (0, d.zD)(c.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => R.intl.string(A3.default.A0FVCV),
        useSubtitle: () => R.intl.string(A3.default.vHX6RG),
        useValue: L.hV.useSetting,
        setValue: function (e) {
            (L.hV.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A5.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    A8 = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => R.intl.string(R.t.WmsPis),
        useSearchTerms: () => [R.intl.string(R.t["8ka8li"])],
        buildLayout: () => [A6, A4, A2],
    });
var A7 = n(106531);
let A9 = (0, d.AK)(c.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.J0SFL2),
        destinationKey: c.X.DATA_AND_PRIVACY_PANEL,
    }),
    Ee = (0, d.gN)(c.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, A7.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [A9],
    });
var Et = n(945810);
let En = (0, Et.mj)({
    name: "2026-02-activity-privacy-matching",
    kind: "user",
    defaultConfig: { copyChanges: !1, upsell: !1 },
    variations: {
        0: { copyChanges: !1, upsell: !1 },
        1: { copyChanges: !0, upsell: !1 },
        2: { copyChanges: !0, upsell: !0 },
    },
});
var Ei = n(365258);
let El = (0, d.Qx)(c.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => R.intl.string(A3.default["/LHVbt"]),
    useSubtitle: () => R.intl.string(R.t.L5IdzV),
    useOptions: function () {
        return [
            { value: eB.Qd.ACTIVITY_STATUS_OFF, name: R.intl.string(A3.default.m3oL7Q) },
            { value: eB.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: R.intl.string(A3.default["5+lnTA"]) },
            { value: eB.Qd.ACTIVITY_STATUS_ON, name: R.intl.string(A3.default["egr+VZ"]) },
        ];
    },
    useValue: L._Z.useSetting,
    setValue: function (e) {
        var t;
        let i = L._Z.getSetting();
        if (
            (L._Z.updateSetting(e),
            (t = "GuildActivitySharingDefaultSetting"),
            !(0, A7.W1)(t) && !En.getConfig({ location: t }).upsell)
        )
            return;
        let l = (0, Ei.g8)(i, e);
        if (null == l) return;
        let s = (0, Ei.Xc)(e);
        (0, la.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("341996")]).then(
                n.bind(n, 32167),
            );
            return (t) =>
                (0, A.jsx)(e, { ...t, direction: l.direction, affectedGuildIds: l.affectedGuildIds, settingName: s });
        });
    },
});
var Es = n(498642),
    Er = n(573435),
    Ea = n(260509),
    Eo = n(771810);
function Eu(e) {
    let { guild: t, size: n } = e,
        i = (0, Ea.Iv)(t, n, !1, !0),
        l = (0, Ea.Rb)(t);
    return null != i
        ? (0, A.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, A.jsx)("div", {
              className: Eo.F,
              children: (0, A.jsx)(H.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: l,
              }),
          });
}
function Ed(e) {
    let { guild: t, size: n } = e;
    return (0, A.jsx)(Er.Ay, {
        className: Eo.z,
        mask: Er.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, A.jsx)(Eu, { guild: t, size: n }),
    });
}
var Ec =
    (((s = {}).SERVER_ORDER = "server-order"),
    (s.RECENTLY_JOINED = "recently-joined"),
    (s.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (s.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    s);
let Eg = {
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
var Em = n(618118);
function EA(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        l = (0, h.bG)([Es.A], () => Es.A.getMemberCount(t.id));
    return (0, A.jsxs)(X.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, A.jsx)("div", { className: Em.FO, children: (0, A.jsx)(Ed, { guild: t, size: 48 }) }),
            (0, A.jsx)("div", {
                className: Em.QH,
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
let EE = function (e) {
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
                l = (0, h.bG)([dS.Ay], () => dS.Ay.getFlattenedGuildIds()),
                s = (0, h.bG)([lh.A], () => lh.A.getGuilds()),
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
                [g, m] = (0, E.useState)(() => Eg[n](r, a)),
                A = g.map((e) => s[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(Eg[e](r, a)), i(e));
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
        m = (0, E.useId)(),
        T = (0, E.useRef)(null),
        p = (0, E.useMemo)(
            () => [
                { id: Ec.SERVER_ORDER, label: R.intl.string(R.t.STMPJ2), value: Ec.SERVER_ORDER },
                { id: Ec.RECENTLY_JOINED, label: R.intl.string(R.t.CbaapP), value: Ec.RECENTLY_JOINED },
                { id: Ec.ACTIVITY_SHARING_ON, label: R.intl.string(A3.default.ZI51JZ), value: Ec.ACTIVITY_SHARING_ON },
                {
                    id: Ec.ACTIVITY_SHARING_OFF,
                    label: R.intl.string(A3.default["+kxafn"]),
                    value: Ec.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        x = p.find((e) => e.value === s)?.label ?? "";
    return (0, A.jsxs)("div", {
        className: Em.iE,
        children: [
            t,
            (0, A.jsxs)("div", {
                className: Em.N1,
                children: [
                    (0, A.jsx)(Ay.I, {
                        query: i,
                        onChange: l,
                        onClear: function () {
                            (tt.default.track(S.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                                l(""));
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
                            className: Em.gO,
                            children: [
                                (0, A.jsx)(ae.Y, {
                                    targetElementRef: T,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, A.jsx)(dC.W, {
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
                                                                (tt.default.track(
                                                                    S.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
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
                                        (0, A.jsxs)(n0.D, {
                                            ...e,
                                            innerRef: T,
                                            className: Em.Ku,
                                            children: [
                                                (0, A.jsx)(H.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: x,
                                                }),
                                                (0, A.jsx)(d$.a, { size: "xs", color: nQ.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, A.jsx)(AC.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? R.intl.string(R.t["7lxcLO"]) : R.intl.string(R.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, A.jsx)(ln.A, {
                "aria-live": "polite",
                role: "region",
                children: R.intl.format(A3.default.EvzDff, { count: n.length }),
            }),
            (0, A.jsxs)("ul", {
                className: Em.X1,
                id: m,
                "aria-label": R.intl.string(R.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, A.jsx)("div", {
                            className: Em.pb,
                            children: (0, A.jsx)(H.E, {
                                className: Em.R$,
                                variant: "text-lg/medium",
                                children: R.intl.string(R.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, A.jsx)(
                            EA,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var Eh = n(68322);
let ES = (0, d.E2)(c.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [R.intl.string(A3.default["/LHVbt"])],
        Component: function () {
            let e = L.tz.useSetting()
                ? null
                : (0, A.jsx)("div", {
                      className: Eh.l,
                      children: (0, A.jsx)(iz.w, { type: "warning", children: R.intl.string(A3.default["xxI0/W"]) }),
                  });
            return (0, A.jsx)(EE, { notice: e });
        },
    }),
    ET = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => R.intl.string(R.t.bwqjL9),
        buildLayout: () => [El, ES, Ee],
    }),
    Ep = (0, d.zD)(c.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => R.intl.string(A3.default.khuuzv),
        useSubtitle: () => R.intl.string(A3.default["8EWsJ8"]),
        useValue: () => L.e.useSetting(),
        setValue: (e) => L.e.updateSetting(e),
    }),
    Ex = (0, d.E2)(c.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
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
    Ef = (0, d.zD)(c.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => R.intl.string(A3.default.Uz5Ipi),
        useSubtitle: () => R.intl.string(A3.default.CZI2Gb),
        useValue: () => L.UM.useSetting(),
        setValue: (e) => L.UM.updateSetting(e),
    }),
    EI = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => R.intl.string(A3.default["89YBr5"]),
        useSubtitle: () => R.intl.string(R.t.uGDpgH),
        buildLayout: () => [Ep, Ef, Ex],
        useSearchTerms: () => [R.intl.string(R.t.VOszPA)],
    }),
    E_ = (0, d.t_)(c.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => R.intl.string(R.t.Cq98yL),
        buildLayout: () => [A8, ET, EI],
    }),
    EN = (0, d.i4)(c.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.Cq98yL),
        icon: AH._,
        buildLayout: () => [E_],
    });
var EC = n(712440),
    Eb = n(370997);
let Ey = (0, d.E2)(c.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: Eb.Ay,
    useSearchTerms: () => [R.intl.string(R.t["f6kk+r"])],
});
var Ev = n(462887),
    Ej = n(478016),
    EO = n(789645),
    EL = n(559106),
    ER = n(77468),
    ED = n(289498),
    EP = n(573648),
    EG = n(874490),
    EU = n(370480),
    EM = n(968309);
let EV = new Set([S.fg2.XBOX, S.fg2.PLAYSTATION, S.fg2.PLAYSTATION_STAGING, S.fg2.CRUNCHYROLL]);
var Ek = n(169869),
    Ew = n(814925),
    EF = n(733110),
    EB = n(479785),
    Ez = n(757036),
    EX = n(555837),
    EY = n(43990),
    EH = n(241524),
    EK = n(51965),
    EW = n(377368),
    EZ = n(631368),
    Eq = n(212739),
    EQ = n(30370),
    EJ = n(181666),
    E$ = n(553875),
    E0 = n(660594);
function E1() {
    let e,
        t,
        i,
        l,
        { variant: s, showFooter: r } =
            ((e = (0, EZ.$)()),
            (t = (0, Eq.O)()),
            (l = null != (i = (0, h.bG)([EQ.A], () => EQ.A.getAccount(null, S.fg2.XBOX))) && !i.revoked),
            e === EZ.C.NONE || t
                ? { variant: EZ.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === EZ.C.NO_ACCESS && !l }),
        { analyticsLocations: a } = (0, eP.Ay)(tL.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, EW.yW)(a),
        u = (0, EH.A)("(max-width: 485px)");
    if (s === EZ.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (s) {
        case EZ.C.HAS_ACCESS:
        case EZ.C.BLOCK_CLAIM:
            ((c = R.intl.string(E$.default["7PdsMK"])),
                (g = (0, A.jsx)(EK.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: R.intl.string(E$.default.CubeLC),
                    onClick: () => {
                        (0, la.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("878140"), n.e("813088")]).then(
                                n.bind(n, 347171),
                            );
                            return (t) => (0, A.jsx)(e, { ...t, sourceAnalyticsLocations: a });
                        });
                    },
                })));
            break;
        case EZ.C.NO_ACCESS:
            ((c = R.intl.string(E$.default.NwkRTZ)),
                (g = (0, A.jsx)(tU.A, {
                    defaultTextOverride: R.intl.string(E$.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    subscriptionTier: tX.pe.TIER_2,
                })));
            break;
        default:
            (0, ii.xb)(s);
    }
    return (0, A.jsxs)(eP.f5, {
        value: a,
        children: [
            (0, A.jsxs)("div", {
                className: E0.bV,
                children: [
                    (0, A.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: R.intl.string(R.t.NG1e6l),
                    }),
                    (0, A.jsx)(r1.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, A.jsx)(EY.N, {
                theme: S.NJ8.DARK,
                children: (e) =>
                    (0, A.jsx)("div", {
                        className: e,
                        children: (0, A.jsxs)("div", {
                            className: E0.Nr,
                            children: [
                                (0, A.jsxs)("div", {
                                    className: E0.Tp,
                                    children: [
                                        (0, A.jsx)("div", {
                                            className: E0.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, A.jsx)("div", { className: E0.$h }),
                                        (0, A.jsx)("div", { className: E0.Rv }),
                                        (0, A.jsx)("div", { className: E0.Lw }),
                                    ],
                                }),
                                (0, A.jsxs)("div", {
                                    className: E0.Mn,
                                    children: [
                                        (0, A.jsxs)("div", {
                                            className: E0.mY,
                                            children: [
                                                (0, A.jsx)("img", {
                                                    className: E0.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, A.jsx)(H.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: E0.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, A.jsx)("div", { className: E0.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, A.jsxs)(A.Fragment, {
                                        children: [
                                            (0, A.jsx)("div", { className: E0.yF }),
                                            (0, A.jsxs)("div", {
                                                className: E0.sQ,
                                                children: [
                                                    (0, A.jsx)(oJ.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: nQ.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, A.jsx)(H.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: R.intl.format(EJ.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(EW.Hx.CONNECT),
                                                                    (0, EM.A)({
                                                                        platformType: S.fg2.XBOX,
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
var E2 = n(201718),
    E3 = n(321078),
    E6 = n(672130),
    E5 = n(379848),
    E4 = n(688901);
function E8(e) {
    let { markAsDismissed: t } = e;
    return (
        E.useEffect(() => t(cO.i.UNKNOWN), [t]),
        (0, A.jsx)(tn.Lp, { className: E4.Ad, text: R.intl.string(R.t.y2b7CA) })
    );
}
function E7(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: l, onClick: s } = e;
    return (0, A.jsxs)("div", {
        className: E4.kL,
        children: [
            i,
            (0, A.jsxs)("div", {
                className: E4.FS,
                children: [
                    (0, A.jsxs)("div", {
                        className: E4.TK,
                        children: [
                            (0, A.jsx)(E5.Ay, {
                                contentTypes: [l],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === l ? (0, A.jsx)(E8, { markAsDismissed: n }) : null;
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
function E9() {
    let e = ex.A.getArticleURL(S.MVz.PS_CONNECTION);
    return (0, A.jsx)(E7, {
        title: R.intl.string(R.t.v20wwm),
        body: R.intl.format(R.t.lTZBit, { help_article: e }),
        img: (0, A.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eu.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, EM.A)({ platformType: S.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let he = "/assets/9df988a227916145.png";
function ht() {
    return (0, A.jsx)(E7, {
        title: R.intl.string(EJ.default["9cLtDI"]),
        body: R.intl.format(EJ.default["D+kUbg"], { learnMoreLink: ex.A.getArticleURL(S.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, A.jsx)("img", { src: he, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eu.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, EM.A)({ platformType: S.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function hn() {
    let e = ex.A.getArticleURL(S.MVz.XBOX_CONNECTION);
    return (0, A.jsx)(E7, {
        title: R.intl.string(R.t["2okkZV"]),
        body: R.intl.format(R.t.OnERSS, { help_article: e }),
        img: (0, A.jsx)("img", { src: he, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eu.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, EM.A)({ platformType: S.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var hi = n(783419),
    hl = n(534952),
    hs = n(211180),
    hr = n(247259);
function ha(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: l,
            showJoinErrorMessage: s,
        } = (0, h.cf)(
            [EQ.A],
            () => ({
                isJoining: EQ.A.isJoining(n.id),
                joinErrorMessage:
                    "" === EQ.A.joinErrorMessage(n.id) ? R.intl.string(R.t.j2d6Km) : EQ.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== EQ.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, h.bG)([lh.A], () => lh.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, A.jsx)(_.$, {
                size: "sm",
                onClick: function () {
                    ER.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? R.intl.string(R.t.RXvQQu) : R.intl.string(R.t.XpeFYr),
            })),
        (0, A.jsxs)("div", {
            className: hr.iA,
            children: [
                (0, A.jsxs)("div", {
                    className: hr.XX,
                    children: [
                        (0, A.jsx)(dj.Ay, { size: dj.Ay.Sizes.SMALL, guild: n.guild, className: hr.$f }),
                        (0, A.jsxs)("div", {
                            className: hr.Vn,
                            children: [
                                (0, A.jsx)(H.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, A.jsx)(nn.Anchor, {
                                    href: EP.A.get(n.type)?.getPlatformUserUrl?.(n.account),
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
                        className: hr.R,
                        children: l,
                    }),
            ],
        })
    );
}
function ho(e) {
    var t;
    let n,
        i,
        { account: l } = e,
        s =
            ((t = l.id),
            (n = (0, EX.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (i = (0, Ez.L)(tX.PremiumTypes.TIER_2)),
            !n && !i && !/^\d+$/.test(t));
    return l.type === S.fg2.XBOX && s
        ? (0, A.jsx)(ht, {})
        : l.twoWayLink
          ? null
          : l.type === S.fg2.XBOX
            ? (0, A.jsx)(hn, {})
            : l.type === S.fg2.PLAYSTATION
              ? (0, A.jsx)(E9, {})
              : null;
}
function hu(e) {
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
        D = (0, EG.ML)(u.type),
        P = EP.A.get(D);
    E.useEffect(() => {
        (m(u.friendSync), T(u.visibility), x(u.metadataVisibility), I(u.showActivity));
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
            (null != e && (T(e), ER.A.setVisibility(u.type, u.id, e), C(null)),
                null != t && (x(t), ER.A.setMetadataVisibility(u.type, u.id, t), y(null)));
        }, [u]),
        (0, A.jsxs)("div", {
            className: hr.FI,
            children: [
                ((t = EP.A.get(u.type)),
                (n = EP.A.get(D)),
                (i = "1" === (u.metadata ?? {})[hi.pK.TWITTER_VERIFIED]),
                (l = null),
                t.type === S.fg2.TWITTER &&
                    i &&
                    (l = (0, A.jsx)(lt.m, {
                        text: R.intl.string(R.t.Jebrww),
                        children: (0, A.jsx)(Ew.A, {
                            color: nQ.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, A.jsx)(Ej.U, { size: "xs", color: nQ.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, A.jsxs)("div", {
                    className: hr.Il,
                    children: [
                        (0, A.jsx)("img", {
                            alt: n.name,
                            className: hr.gj,
                            src: (0, Ev.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, A.jsxs)("div", {
                            children: [
                                (0, A.jsxs)("div", {
                                    className: hr.$p,
                                    children: [
                                        (0, A.jsx)(H.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: hr.RW,
                                            children: u.name,
                                        }),
                                        null != l && (0, A.jsx)("div", { className: hr.cG, children: l }),
                                    ],
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: hr.Au,
                                    children: n.migrationData?.getMigrationExperimentEnabled(
                                        "User Settings Connections Web",
                                    )
                                        ? R.intl.format(hs.default.Glhokn, { platformName: n.name })
                                        : n.name,
                                }),
                            ],
                        }),
                        (0, A.jsx)(n0.D, {
                            className: hr.uH,
                            onClick: function () {
                                let e = EP.A.get(u.type);
                                (0, la.openModal)((t) =>
                                    (0, A.jsx)(lr.Modal, {
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
                                                    (o(), t.onClose());
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            EV.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, A.jsx)(lW.A, {
                                                children: R.intl.format(R.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": R.intl.string(R.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, A.jsx)(EO.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, A.jsx)(ho, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, EU.An)(t[hi.pK.CREATED_AT], c);
                    switch (e.type) {
                        case S.fg2.REDDIT:
                            n = (0, Ek.xE)(t, hr.Nz);
                            break;
                        case S.fg2.STEAM:
                            n = (0, Ek.dy)(t, hr.Nz);
                            break;
                        case S.fg2.BLUESKY:
                        case S.fg2.TWITTER:
                        case S.fg2.MASTODON:
                            n = (0, Ek.ED)(t, hr.Nz);
                            break;
                        case S.fg2.EBAY:
                            n = (0, Ek.ub)(t, hr.Nz);
                            break;
                        case S.fg2.PAYPAL:
                            n = (0, Ek.gZ)(t, hr.Nz);
                            break;
                        case S.fg2.TIKTOK:
                            n = (0, Ek.HU)(t, hr.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, A.jsx)(
                                H.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: hr.M4,
                                    children: R.intl.format(R.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = O.includes(e.id),
                        s = R.intl.string(R.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== EP.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, A.jsx)(tn.Lp, { className: hr.Z3, text: R.intl.string(R.t.y2b7CA) }, "badge"),
                                (0, A.jsx)(
                                    H.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: hr.vt,
                                        children: R.intl.format(R.t.Up2ni7, {
                                            helpdeskUrl: ex.A.getArticleURL(S.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (s = R.intl.string(R.t["LVh3/5"])));
                    return (
                        l && (s = R.intl.string(R.t.i4jeWR)),
                        n.push(
                            (0, A.jsx)(
                                "div",
                                {
                                    className: hr.jy,
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
                                                  (j(!0),
                                                      ER.A.refresh(e.type, e.id).finally(() => {
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
                        (0, A.jsx)("div", { className: hr.tJ, children: n })
                    );
                })(u),
                (S.txh.has(u.type) &&
                    (s = (0, A.jsx)(tJ.d, {
                        label: R.intl.string(R.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), ER.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                S.ewM.has(u.type) &&
                    (r = (0, A.jsx)(tJ.d, {
                        label: R.intl.format(R.t["6u6J0q"], { platform: P.name }),
                        checked: f,
                        onChange: function (e) {
                            (I(e), ER.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                EP.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, A.jsx)(tJ.d, {
                        label: R.intl.string(R.t.FYKGsL),
                        checked: 1 === p,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (y(n), (0, EM.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (x(n), ER.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== h || null == u.metadata,
                    })),
                (0, A.jsxs)("div", {
                    className: hr.HZ,
                    children: [
                        (0, A.jsx)(tJ.d, {
                            label: R.intl.string(R.t.f7yOAX),
                            checked: 1 === h,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (C(n), (0, EM.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (T(n), ER.A.setVisibility(u.type, u.id, n));
                            },
                        }),
                        a,
                        r,
                        s,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, A.jsx)(i8.c, {});
                })(),
                u.revoked
                    ? (0, A.jsx)(r2.p, {
                          messageType: r2.Y.INFO,
                          children: R.intl.format(R.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, EM.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, A.jsx)(tQ.D, {
                            label: R.intl.string(R.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, A.jsx)(ha, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, A.jsx)(EB.A, { partner: u.type }),
            ],
        })
    );
}
function hd(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, A.jsxs)("div", {
              className: hr.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = O.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, A.jsxs)("div", {
                          className: hr.Il,
                          children: [
                              (0, A.jsx)("img", { alt: n.name, className: ir()(hr.gj, hr.sN), src: i }),
                              (0, A.jsxs)("div", {
                                  children: [
                                      (0, A.jsx)("div", {
                                          className: hr.$p,
                                          children: (0, A.jsx)(H.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: hr.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, A.jsx)(H.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: hr.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, A.jsx)(n0.D, {
                                  className: hr.uH,
                                  onClick: () =>
                                      (0, Eb.d1)(n, t.scopes, () => {
                                          EC.A.delete(t.id);
                                      }),
                                  "aria-label": R.intl.string(R.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, A.jsx)(EO.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, A.jsx)("div", {
                      className: hr.HZ,
                      children: (0, A.jsx)(tJ.d, {
                          label: R.intl.string(R.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              E2.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function hc(e) {
    let t = EP.A.get(e);
    ((0, EM.A)({ platformType: t.type }),
        tt.default.track(S.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        }));
}
function hg() {
    let e = (0, EG.gn)(),
        t = (0, iZ.A)((0, hl.getMigratedApplicationIdentityConnectionsScreenApplications)("NewConnectionsList"));
    return (0, A.jsxs)("div", {
        className: hr.lA,
        children: [
            t.map(
                (e) =>
                    null != e &&
                    (0, A.jsx)(
                        E6.A,
                        { application: e, className: hr.__invalid_accountButton, innerClassName: hr.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - t.length)
                .map((e) =>
                    (0, A.jsx)(
                        ED.A,
                        { type: e.type, className: hr.__invalid_accountButton, innerClassName: hr.U$ },
                        e.type,
                    ),
                ),
            (0, A.jsx)(lt.m, {
                text: R.intl.string(R.t.QqTz8b),
                children: (0, A.jsx)("div", {
                    className: ir()(hr.ej, hr.__invalid_accountButton),
                    children: (0, A.jsx)(EL.vN, {
                        children: (0, A.jsx)("button", {
                            className: ir()(hr.R8, hr.U$),
                            type: "button",
                            onClick: function () {
                                e5.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: hc });
                            },
                            "aria-label": R.intl.string(R.t.Zhcj9X),
                            children: (0, A.jsx)(n2._, {
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
function hm(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: l, authorizedApps: s, theme: r, locale: a } = e,
        o = E.useMemo(() => i.filter((e) => EP.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, A.jsx)(oe.y, { type: oe.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === l.length
              ? (0, A.jsx)(mB.pp, {
                    theme: r,
                    className: hr.p$,
                    children: (0, A.jsx)(mB.SG, {
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
                                hd,
                                { appIdentity: e, oauth2Token: s.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, A.jsx)(
                                hu,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            ER.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, A.jsx)("div", { className: hr.V, children: t })
    );
}
let hA = (0, d.E2)(c.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, A.jsx)(tQ.D, { label: R.intl.string(R.t["t+aGse"]), children: (0, A.jsx)(hg, {}) });
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
    hE = (0, d.E2)(c.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, h.bG)([te.A], () => te.A.hidePersonalInformation),
                t = (0, h.bG)([EQ.A], () => EQ.A.isFetching()),
                n = (0, h.bG)([EQ.A], () => EQ.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: l } = (0, h.cf)([EF.default], () => ({
                    authorizedAppsFetchState: EF.default.getFetchState(),
                    authorizedApps: EF.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: s, filteredAppIdentities: r } = (0, E3.A)(si.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, uM.Ay)(),
                o = (0, h.bG)([ow.default], () => ow.default.locale);
            return (E.useEffect(() => {
                i === EF.FetchState.NOT_FETCHED && EC.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)(E1, {}),
                          (0, A.jsx)(hm, {
                              fetching: t || s || (r.length > 0 && i !== EF.FetchState.FETCHED),
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
            ER.A.fetch();
        },
        useSearchTerms: () => [
            R.intl.string(R.t["+/hZM/"]),
            R.intl.string(R.t.bsbMVz),
            R.intl.string(R.t.f7yOAX),
            R.intl.string(R.t.FYKGsL),
            R.intl.string(R.t["+KCMSi"]),
        ],
    });
var hh = n(206828);
let hS = (0, d.zZ)(c.X.CONNECTIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["3fe7U5"]),
        useSubtitle: () => R.intl.string(R.t.U22vw6),
        useInlineNotice: function () {
            let e = (0, h.bG)([EQ.A], () => EQ.A.getAccounts()),
                t = E.useMemo(
                    () =>
                        EP.A.filter(
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
                o = (0, iZ.h)(a?.migrationData?.replacedBy),
                { canStartAuthorization: u, hasAlreadyLinked: d, fetched: c } = (0, hh.RD)(o),
                g =
                    a?.type === S.fg2.RIOT_GAMES || a?.type === S.fg2.LEAGUE_OF_LEGENDS
                        ? R.intl.string(hs.default["1S6oAo"])
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
                                  text: R.intl.format(hs.default.wUXupS, {
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
        buildLayout: () => [hA, hE],
    }),
    hT = (0, d.zZ)(c.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["f6kk+r"]),
        useSubtitle: () => R.intl.string(R.t.G9JfLg),
        buildLayout: () => [Ey],
        initialize: () => (
            EC.A.fetch(),
            () => {
                Eb.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    hp = (0, d.t_)(c.X.CONNECTED_APPS_PANEL, {
        useTitle: () => R.intl.string(R.t.lrVuZO),
        useObscuredNotice: a7.L,
        buildLayout: () => [hS, hT],
    }),
    hx = (0, d.i4)(c.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.lrVuZO),
        icon: mz.LinkIcon,
        buildLayout: () => [hp],
    });
var hf = n(625657),
    hI = n(592598),
    h_ = n(773371),
    hN = n(184809),
    hC = n(672396);
let hb = hv(null);
function hy() {
    var e;
    let t = hv(hb);
    ((e = hb),
        B().isEqual(B().omit(t, "old_enabled"), B().omit(e, "old_enabled")) ||
            (tt.default.track(S.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (hb = t)));
}
function hv(e) {
    let t = hN.default.getNotificationPositionMode(),
        n = t !== S.G6Q.DISABLED,
        i = lU.Ay.getOverlayKeybind(),
        l = lU.Ay.getOverlayChatKeybind();
    return {
        enabled: h_.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: hI.A.isNotificationDisabled(hC.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, ls.dI)(i.shortcut) : null,
        text_activation_hotkey: null != l ? (0, ls.dI)(l.shortcut) : null,
        text_opacity_slider: hN.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? h_.default.enabled,
    };
}
var hj = n(237984),
    hO = n(63035);
function hL(e) {
    (e.preventDefault(), e.stopPropagation());
}
function hR(e) {
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
        className: ir()(hO.HS, d),
        children: [
            (0, A.jsxs)(Av.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, A.jsx)("div", { className: hO.x_, children: t }),
                    (0, A.jsxs)("div", {
                        className: hO.rN,
                        children: [
                            null != n && (0, A.jsx)("div", { className: hO.$t, children: n }),
                            (0, A.jsxs)("div", {
                                className: hO.c8,
                                children: [
                                    (0, A.jsx)(H.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: hO.SZ,
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
                            (0, A.jsx)("div", { className: hO.a$, children: s }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)("div", { className: hO.Om, children: a }),
        ],
    });
}
let hD = (0, d.E2)(c.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, A.jsx)(hR, {
            title: R.intl.string(R.t["z4/l+V"]),
            description: R.intl.string(R.t["3aZq/0"]),
            action: (0, A.jsx)(_.$, {
                variant: "primary",
                text: R.intl.string(R.t.s2nVhG),
                onClick: () => {
                    (0, hj.b)(tL.A.USER_SETTINGS, S.BRT.APP);
                },
            }),
            "aria-label": R.intl.string(R.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [R.intl.string(R.t["z4/l+V"])],
});
var hP = n(31300),
    hG = n(780907),
    hU = n(684013),
    hM = n(56562),
    hV = n(311043),
    hk = n(569926),
    hw = n(810412),
    hF = n(41984),
    hB = n(296027),
    hz = n(562519);
let hX = 5 * n(927813).A.Millis.DAY,
    hY = new hz.A("overlay_survey_timestamps");
function hH(e, t) {
    let i, l;
    ((i = Date.now()),
        (null != (l = Array.from(hY.values()).reduce((e, t) => Math.max(e, t), 0)) && i - l < hX) ||
            Array.from(hY.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, la.openModalLazy)(async () => {
                let i,
                    { default: l } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return ((i = Date.now()), hY.add(i), (n) => (0, A.jsx)(l, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function hK() {
    (0, i2.sL)("overlay-settings");
}
function hW(e) {
    let { className: t, game: n } = e;
    return (0, i2.NP)() && null != n && n.elevated
        ? (0, A.jsx)("div", {
              className: t,
              children: (0, A.jsx)(r2.p, {
                  messageType: r2.Y.WARNING,
                  action: (0, A.jsx)(_.$, {
                      variant: "secondary",
                      size: "sm",
                      text: R.intl.string(R.t["1iI46O"]),
                      onClick: hK,
                  }),
                  children: R.intl.format(R.t["LJzl+0"], { helpCenterLink: ex.A.getArticleURL(S.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var hZ = n(760751),
    hq = n(9302),
    hQ = n(656513);
let hJ = new Set([
    hF.AR.INITIALIZING,
    hF.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    hF.AR.WAITING_FOR_MODULE_TRACKING,
    hF.AR.WAITING_FOR_OVERLAY_OPEN,
    hF.AR.WAITING_FOR_POPOUT_OPEN,
    hF.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    hF.AR.WAITING_FOR_REACT_INITIALIZATION,
    hF.AR.WAITING_FOR_PID_FOCUS,
    hF.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function h$(e) {
    let { children: t, className: n, onExpand: i, ...l } = e,
        [s, r] = E.useState(!1);
    return (0, A.jsx)(hQ.N, {
        className: hO.uR,
        collapsibleContent: (0, A.jsx)("div", { className: hO.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, A.jsx)(hR, {
                ...l,
                onClick: (e) => {
                    var n;
                    (r((n = !s)), i?.(n), t?.(e));
                },
                className: ir()(hO.AC, n),
                action: (0, A.jsxs)("div", {
                    className: hO.rc,
                    children: [
                        l.action,
                        s
                            ? (0, A.jsx)(d$.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, A.jsx)(n2._, {
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
let h0 = (0, d.E2)(c.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = i$();
        (0, hk.I)(e?.id);
        let n = e?.pid,
            i = (0, h.bG)(
                [hB.default],
                () => (null == e || null == n ? null : hB.default.getTrackedGameByPid(n)),
                [e, n],
                iK(),
            ),
            { data: l } = (0, hk.I)(i?.gameId),
            { enabledLegacy: s, enabledOOP: r } = (0, h.cf)(
                [hZ.A, ti.A, hV.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, iQ.hw)(e, !1, [hZ.A, ti.A, hV.A]),
                [e, i],
            ),
            a = (0, h.bG)(
                [iQ.Ay, hZ.A, ti.A, hV.A],
                () => (null == e ? null : (0, iQ.xU)(e, iQ.Ay, hZ.A, ti.A, hV.A)),
                [e],
                iK(),
            ),
            [o, u] = E.useState(r),
            [d, c] = E.useState(s),
            [g, m] = E.useState(!1);
        E.useEffect(() => {
            (u(r), c(s));
        }, [r, s]);
        let S = !(0, hq.supportsLegacy)(),
            T = !(0, hq.supportsOutOfProcess)(),
            { legacyEnabled: p, oopEnabled: x } = (0, h.cf)([hB.default], () => hB.default.getGlobalEnabledStatus());
        function f(t, n) {
            if (null == e) return;
            let i = !1,
                l = !1;
            switch (n) {
                case hw.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), hG.Ay.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case hw.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), hG.Ay.toggleOverlay(e, d, t), (l = !t && o));
                    break;
                case hw.OverlayToggledClientSettingType.LEGACY:
                    (hU.A.setEnabled(t, x), (0, hw.Q3)(t, hw.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case hw.OverlayToggledClientSettingType.OOP:
                    (hU.A.setEnabled(p, t), (0, hw.Q3)(t, hw.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || l) &&
                hH(
                    i ? hw.OverlayToggledClientSettingType.LEGACY_GAME : hw.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let I = S && T,
            _ = !p && !x,
            N = !o && !p && d && !S,
            C = !d && !x && o && !T,
            b = i?.overlayMethod === hF.Ue.Disabled,
            y = i?.state === hF.AR.OVERLAY_RENDERING && !b,
            v = i?.state != null && hJ.has(i.state) && !b,
            j = i?.overlayMethod === hF.Ue.OutOfProcess,
            O = i?.overlayMethod === hF.Ue.OutOfProcessLimitedInteraction,
            L = i?.overlayMethod === hF.Ue.Hook,
            D = i?.state === hF.AR.OVERLAY_CRASHED || i?.state === hF.AR.OVERLAY_CRASHED_DISABLED,
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
                                    case i?.fullscreenType !== hM.aI.BORDERLESS_FULLSCREEN:
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
                        let e = i?.fullscreenType === hM.aI.FULLSCREEN ? R.intl.string(R.t.mJmbeC) : null;
                        return [R.intl.string(R.t.VPW4XY), e];
                    }
                    default:
                        return [R.intl.string(R.t.ONovP5), null];
                }
            })();
        (0, eS.Ay)(() => {
            hG.Ay.getDetectableGames();
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
            : (0, A.jsxs)(h$, {
                  onExpand: m,
                  className: g ? hO.tx : void 0,
                  title: (0, A.jsxs)(A.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, A.jsx)(lt.m, {
                                    text: R.intl.string(R.t["4PJP5p"]),
                                    children: (0, A.jsx)(Ew.A, {
                                        size: 16,
                                        color: nQ.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, A.jsx)(Ej.U, {
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
                              ? (0, A.jsx)(hP.k, { size: "xxs", color: V })
                              : (0, A.jsx)("div", { className: hO.W4 }),
                          (0, A.jsx)(H.E, {
                              variant: "text-xs/semibold",
                              color: M,
                              children: R.intl.string(R.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, A.jsx)(i0.A, { game: t, pid: e?.pid, size: i0.M.MEDIUM }),
                  "aria-label": R.intl.string(R.t["87O5GC"]),
                  action: (0, A.jsx)(n0.D, {
                      onClick: (e) => hL(e),
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
                                          (hG.Ay.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (l = !t && o));
                                          break;
                                      case "global":
                                          (hU.A.setEnabled(t, t), (i = !t && p), (l = !t && x));
                                          break;
                                      case "both":
                                          (hU.A.setEnabled(t, t),
                                              hG.Ay.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && p) || (!t && d)),
                                              (l = (!t && x) || (!t && o)));
                                  }
                                  let s = null;
                                  (i
                                      ? (s =
                                            "game" === n
                                                ? hw.OverlayToggledClientSettingType.LEGACY_GAME
                                                : hw.OverlayToggledClientSettingType.LEGACY)
                                      : l &&
                                        (s =
                                            "game" === n
                                                ? hw.OverlayToggledClientSettingType.OOP_GAME
                                                : hw.OverlayToggledClientSettingType.OOP),
                                      null != s && hH(s, e.id ?? null));
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
                  warning: (0, A.jsx)(hW, { className: hO.Hh, game: e }),
                  children: [
                      (0, A.jsx)(hR, {
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
                                              ? f(e, hw.OverlayToggledClientSettingType.OOP)
                                              : f(e, hw.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, A.jsx)("div", { className: hO.Kz }),
                              ],
                          }),
                      }),
                      (0, A.jsx)(hR, {
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
                                              ? f(e, hw.OverlayToggledClientSettingType.LEGACY)
                                              : f(e, hw.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, A.jsx)("div", { className: hO.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = i$();
        return null != e;
    },
    useSearchTerms: () => [R.intl.string(R.t["9cb1Uz"])],
});
var h1 = n(206885);
function h2(e) {
    let { game: t, gameApplication: n } = e,
        i = E.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        l = (0, h.bG)([iW.A], () => (null != n ? n : iW.A.getApplication(t?.id)), [n, t]);
    return (0, A.jsx)(i0.A, { game: l, pid: i, size: i0.M.SMALL });
}
function h3(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: l,
        onChange: s,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, hk.I)(t?.id);
    let o = (0, h.cf)([iQ.Ay, hZ.A, ti.A, hV.A], () => (0, iQ.xU)(t, iQ.Ay, hZ.A, ti.A, hV.A)),
        u = (0, h.cf)([hZ.A, ti.A, hV.A], () => (0, iQ.hw)(t, !1, [hZ.A, ti.A, hV.A]), [t]),
        d = l(u),
        [c, g] = E.useState(d);
    return (
        E.useEffect(() => {
            g(d);
        }, [d]),
        (0, A.jsx)(hR, {
            title: t.name,
            icon: (0, A.jsx)(h2, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, A.jsxs)(A.Fragment, {
                children: [
                    (0, A.jsx)(tJ.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), s(e, o, u), n && hH(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, A.jsx)("div", { className: hO.Kz }),
                ],
            }),
        })
    );
}
let h6 = (0, d.E2)(c.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = E.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, h.cf)([hB.default], () =>
                    hB.default.getGlobalEnabledStatus(),
                ),
                l = (0, h.yK)([iQ.Ay], () => iQ.Ay.getGamesSeen(!0)).filter((e) => !(0, AK.n1)(e)),
                s = (0, iZ.A)(l.map((e) => e.id)),
                r = !(0, hq.supportsLegacy)();
            function a(e) {
                hU.A.setEnabled(e, i);
                let t = iQ.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, hw.Q3)(e, hw.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && hH(hw.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                hG.Ay.toggleOverlay(t, e, i);
            }
            let u = E.useMemo(
                () =>
                    (0, hq.supportsLegacy)()
                        ? r
                            ? R.intl.string(R.t.r9jEVw)
                            : R.intl.string(R.t.OzInYk)
                        : R.intl.string(R.t["8Ox6/E"]),
                [r],
            );
            return 0 === l.length
                ? (0, A.jsx)(hR, {
                      title: R.intl.string(R.t.BfFpW1),
                      description: u,
                      "aria-label": R.intl.string(R.t.BfFpW1),
                      className: hO.dA,
                      action: (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(tJ.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              h1.O && (0, A.jsx)("div", { className: hO.Kz }),
                          ],
                      }),
                  })
                : (0, A.jsxs)(h$, {
                      onExpand: t,
                      className: e ? hO.tx : void 0,
                      title: R.intl.string(R.t.BfFpW1),
                      description: u,
                      "aria-label": R.intl.string(R.t.BfFpW1),
                      action: (0, A.jsx)(n0.D, {
                          onClick: (e) => hL(e),
                          children: (0, A.jsx)(tJ.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, A.jsx)("div", {
                              className: hO.SC,
                              children: (0, A.jsx)(H.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: R.intl.string(R.t.FzoWRo),
                              }),
                          }),
                          (0, A.jsx)(x.Ip, {
                              className: hO.XG,
                              children: l.map((e, t) =>
                                  (0, A.jsx)(
                                      h3,
                                      {
                                          rawGame: e,
                                          clientSettingType: hw.OverlayToggledClientSettingType.LEGACY_GAME,
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
    h5 = (0, d.E2)(c.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = E.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, h.cf)([hB.default], () =>
                    hB.default.getGlobalEnabledStatus(),
                ),
                l = !(0, hq.supportsOutOfProcess)(),
                s = (0, h.yK)([iQ.Ay], () => iQ.Ay.getGamesSeen(!0)).filter((e) => !(0, AK.n1)(e)),
                r = (0, iZ.A)(s.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                hU.A.setEnabled(i, e);
                let l = iQ.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, hw.Q3)(e, hw.OverlayToggledClientSettingType.OOP, l),
                    t && hH(hw.OverlayToggledClientSettingType.OOP, l));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                hG.Ay.toggleOverlay(t, e, i);
            }
            let u = E.useMemo(
                () => (h1.O ? (l ? R.intl.string(R.t.C7bLTQ) : R.intl.string(R.t.ndgADE)) : R.intl.string(R.t.m7X4az)),
                [l],
            );
            return 0 === s.length
                ? (0, A.jsx)(hR, {
                      title: R.intl.string(R.t["7BlVIs"]),
                      description: u,
                      "aria-label": R.intl.string(R.t["7BlVIs"]),
                      className: hO.dA,
                      action: (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(tJ.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                              h1.O && (0, A.jsx)("div", { className: hO.Kz }),
                          ],
                      }),
                  })
                : (0, A.jsxs)(h$, {
                      onExpand: t,
                      className: e ? hO.tx : void 0,
                      title: R.intl.string(R.t["7BlVIs"]),
                      description: u,
                      "aria-label": R.intl.string(R.t["7BlVIs"]),
                      action: (0, A.jsx)(n0.D, {
                          onClick: (e) => hL(e),
                          children: (0, A.jsx)(tJ.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, A.jsx)("div", {
                              className: hO.SC,
                              children: (0, A.jsx)(H.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: R.intl.string(R.t.FzoWRo),
                              }),
                          }),
                          (0, A.jsx)(x.Ip, {
                              className: hO.XG,
                              children: s.map((e, t) =>
                                  (0, A.jsx)(
                                      h3,
                                      {
                                          rawGame: e,
                                          clientSettingType: hw.OverlayToggledClientSettingType.OOP_GAME,
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
    h4 = (0, d.zZ)(c.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => R.intl.string(R.t["/dp6yY"]),
        buildLayout: () => [h0, h5, h6, hD],
    }),
    h8 = (0, d.zD)(c.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, h.bG)([hN.default], () => !hN.default.disableClickableRegions),
        setValue: (e) => {
            hU.A.setDisableClickableRegions(!e);
        },
        useTitle: () => R.intl.string(R.t["+eFXxq"]),
        useSubtitle: () => R.intl.string(R.t.kivMAp),
    }),
    h7 = (0, d.E2)(c.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, h.bG)([lU.Ay], () => lU.Ay.getOverlayKeybind()),
                t = !(0, hq.supportsLegacy)(),
                n = !(0, hq.supportsOutOfProcess)(),
                [i, l] = (0, h.yK)([iQ.Ay], () => [iQ.Ay.canShowAdminWarning, iQ.Ay.getVisibleGame()], []),
                s = (0, i2.NP)(),
                r = null != l && l.elevated && i && !s,
                a = !(0, lU.DV)(e?.shortcut ?? []);
            return (0, A.jsx)("div", {
                className: hO.hc,
                children: (0, A.jsxs)("div", {
                    className: hO.eH,
                    children: [
                        (0, A.jsxs)("div", {
                            className: hO.Bu,
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
                                        className: hO.y7,
                                        children: R.intl.string(R.t.NsowVa),
                                    }),
                                a &&
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: hO.y7,
                                        children: R.intl.string(R.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, A.jsx)("div", {
                            className: hO.IH,
                            children: (0, A.jsx)(ll.A, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    (ta()(null != e, "Keybind should never be undefined"),
                                        iX.A.setKeybind({ ...e, shortcut: t }));
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.VsAZcC)],
    });
var h9 = n(515183),
    Se = n(682763);
let St = (0, d.zD)(c.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = i$();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = i$();
            return null != e && (0, h9.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = i$(),
                n = t?.id,
                i = (0, h.bG)([hI.A], () => hI.A.isLimitedInteractionOverrideEnabled(n)),
                l = null != e && (0, h9.qJ)(e.pid);
            return i || l;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                l,
                { runningGameApplication: s } =
                    ((t = iq.A.getStreamerActiveStreamMetadata()),
                    (l = iJ(
                        t,
                        (i =
                            null != (n = iQ.Ay.getVisibleGame())
                                ? iQ.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: iW.A.getApplication(l) ?? void 0 });
            null != s && (0, Se.x8)(s.id, e);
        },
        useTitle: () => R.intl.string(R.t.wgVQND),
        useSubtitle: () => R.intl.string(R.t["5SsyF5"]),
    }),
    Sn = (0, d.zZ)(c.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [h7, St, h8] });
var Si = n(93465);
let Sl = [
    {
        title: R.t.eVE4LX,
        description: R.t["72WNqk"],
        disabledSetting: Si.M.TEXT_CHAT,
        key: c.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: R.t.oifnSh,
        description: R.t.bgU5r0,
        disabledSetting: Si.M.WELCOME_GENERAL,
        key: c.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: R.t.hqsZJW,
        description: R.t.kHjdqc,
        disabledSetting: Si.M.GO_LIVE_NUDGE,
        key: c.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: R.t.sop3rn,
        description: R.t.pjgffc,
        disabledSetting: Si.M.GAME_ACTIVITY,
        key: c.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: R.t["2QVhbb"],
        description: R.t.wQ4ilB,
        disabledSetting: Si.M.NOW_PLAYING,
        key: c.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: R.t.giM9fA,
        description: R.t.EhAfWj,
        disabledSetting: Si.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: c.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, nS.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, h.bG)([hI.A], () => hI.A.isNotificationDisabledBySetting(Si.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function Ss(e) {
    return (0, d.zD)(e.key, {
        useTitle: () => R.intl.string(e.title),
        useSubtitle: () => R.intl.string(e.description),
        useValue: () => !(0, h.bG)([hI.A], () => hI.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            hU.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let Sr = (0, d.FW)(c.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => Sl.map(Ss),
    }),
    Sa = (0, d.zZ)(c.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.xOE5bA),
        buildLayout: () => [Sr],
    }),
    So = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => R.intl.string(R.t.dnvZSg),
        useValue: () => (0, h.bG)([hN.default], () => hN.default.getAvatarSizeMode()),
        setValue: (e) => {
            hU.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: R.intl.string(R.t.YcOxtr), value: S.OSZ.LARGE },
            { id: "small", label: R.intl.string(R.t.BKIKqx), value: S.OSZ.SMALL },
        ],
    }),
    Su = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => R.intl.string(R.t.J0dpcB),
        useValue: () => (0, h.bG)([hN.default], () => hN.default.getDisplayNameMode()),
        setValue: (e) => {
            hU.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: R.intl.string(R.t.nBmDrT), value: S.pwA.ALWAYS },
            { id: "speaking", label: R.intl.string(R.t["2OvIZY"]), value: S.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: R.intl.string(R.t.ekjlPL), value: S.pwA.NEVER },
        ],
    }),
    Sd = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => R.intl.string(R.t.swsWWC),
        useValue: () => (0, h.bG)([hN.default], () => hN.default.getDisplayUserMode()),
        setValue: (e) => {
            hU.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: R.intl.string(R.t.nBmDrT), value: S.f5z.ALWAYS },
            { id: "speaking", label: R.intl.string(R.t["2OvIZY"]), value: S.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var Sc = n(391973),
    Sg = n(489277),
    Sm = n(897720),
    SA = n(38502);
function SE() {
    let e = Sg.A.getWidgetByType(S.uss.VOICE_V3);
    if (null == e) return null;
    let t = SA.A.getWidget(e.id);
    return null != t && (0, Sm.ZO)(t) ? t : null;
}
n(392164);
let Sh = (0, d.sN)(c.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => R.intl.string(R.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? R.intl.string(R.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = SE();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? R.intl.string(R.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = SE();
        null != t &&
            (e < 1
                ? (0, Sc.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, Sc.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var SS = n(450740),
    ST = n(968898),
    Sp = n(889227),
    Sx = n(288737);
function Sf(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new Sx.A({
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
        user: new Sp.A({ id: l, username: e }),
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
let SI = (0, d.E2)(c.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: l,
                } = (0, h.cf)([hN.default], () => ({
                    avatarSizeMode: hN.default.getAvatarSizeMode(),
                    displayNameMode: hN.default.getDisplayNameMode(),
                    displayUserMode: hN.default.getDisplayUserMode(),
                })),
                [s] = E.useState(() => [
                    Sf(R.intl.string(R.t.C0ZDvo), !0, !1),
                    Sf(R.intl.string(R.t.iOtj8E), !1, !1, !0),
                    Sf(R.intl.string(R.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, h.bG)([Sg.A, SA.A], () => {
                    let e = Sg.A.getWidgetByType(S.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = SA.A.getWidget(e.id);
                    return null != t && (0, Sm.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = Sf(t.username)).user = t), e) : null, ...s].filter(ii.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, A.jsx)(EY.N, {
                    theme: S.NJ8.ONYX,
                    children: (e) =>
                        (0, A.jsxs)("div", {
                            className: ir()(hO.Y5, e),
                            children: [
                                (0, A.jsx)("div", {
                                    className: hO.kJ,
                                    children: (0, A.jsx)(SS.DH, {
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
                                    className: hO.R$,
                                    children: [
                                        (0, A.jsx)(ST.Pl, { children: R.intl.string(R.t.KNJ6Vq) }),
                                        (0, A.jsx)(ST.CS, {}),
                                        (0, A.jsx)(ST.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, A.jsx)("div", { className: hO.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    S_ = (0, d.zZ)(c.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => R.intl.string(R.t.r1TZfh),
        buildLayout: () => [SI, So, Su, Sd, Sh],
    });
var SN = n(54761);
function SC() {
    let [e, t] = (0, cx.kn)([eu.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, z.Ay)(() => () => {
        t(cO.i.AUTO_DISMISS);
    }),
    e !== eu.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, A.jsxs)(A.Fragment, {
              children: [
                  (0, A.jsxs)("div", {
                      className: SN.xC,
                      children: [
                          (0, A.jsx)("div", {
                              children: (0, A.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: R.intl.string(R.t.mdXZh1),
                                  className: SN.tl,
                              }),
                          }),
                          (0, A.jsx)("div", {
                              children: (0, A.jsxs)("div", {
                                  className: SN.vJ,
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
                                  className: SN.lh,
                              }),
                          }),
                          (0, A.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: SN.VV,
                              children: (0, A.jsx)(_.$, {
                                  variant: "primary",
                                  text: R.intl.string(R.t.Q26diF),
                                  onClick: () => void t(cO.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, A.jsx)(i8.c, { className: SN.yF }),
              ],
          });
}
function Sb() {
    let e = (0, h.bG)([te.A], () => te.A.enabled),
        t = (0, nS.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, A.jsxs)(A.Fragment, {
              children: [
                  (0, A.jsx)(iz.w, {
                      type: "warning",
                      children: R.intl.format(R.t.fuEX5B, {
                          onClick: function () {
                              return (0, nl.openUserSettings)(c.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                  }),
                  (0, A.jsx)(i8.c, { className: SN.yF }),
              ],
          })
        : null;
}
let Sy = (0, d.t_)(c.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                hy(),
                lU.Ay.addChangeListener(hy),
                hI.A.addChangeListener(hy),
                hN.default.addChangeListener(hy),
                h_.default.addChangeListener(hy),
                eQ.isPlatformEmbedded && (0, AZ.a2)(),
                () => {
                    (lU.Ay.removeChangeListener(hy),
                        hI.A.removeChangeListener(hy),
                        hN.default.removeChangeListener(hy),
                        h_.default.removeChangeListener(hy),
                        eQ.isPlatformEmbedded && (0, AZ.e0)());
                }
            );
        },
        useTitle: () => R.intl.string(R.t["9cb1Uz"]),
        decoration: {
            type: m.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, A.jsxs)(A.Fragment, { children: [(0, A.jsx)(SC, {}), (0, A.jsx)(Sb, {})] });
            },
        },
        buildLayout: () => [h4, Sn, S_, Sa],
    }),
    Sv = (0, d.i4)(c.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["9cb1Uz"]),
        icon: hf.l,
        usePredicate: np.b_,
        buildLayout: () => [Sy],
    });
var Sj = n(687966);
let SO = (0, d.AK)(c.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.OYYY6q),
        destinationKey: c.X.ACTIVITY_PRIVACY_PANEL,
    }),
    SL = (0, d.gN)(c.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [SO] });
var SR = n(227309),
    SD = n(29160),
    SP = n(552366),
    SG = n(938442);
function SU(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: l, subgames: s, isSubgame: r = !1, parentGame: a } = e;
    (0, hk.I)(t.id);
    let o = (0, h.cf)([iQ.Ay, hZ.A, ti.A, hV.A], () => (0, iQ.xU)(t, iQ.Ay, hZ.A, ti.A, hV.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, h.cf)([iQ.Ay], () => ({
            canToggleDetection: null == a || iQ.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: iQ.Ay.isDetectionEnabled(o),
        })),
        c = (0, h.bG)([iQ.Ay], () => iQ.Ay.getVisibleGame()),
        [g, m] = E.useState(!1),
        T = E.useRef(null),
        p = null != c && (0, iQ.Es)(o) === (0, iQ.Es)(c),
        x = !l && !g,
        f = !i && !p,
        I = x || f,
        _ = E.useMemo(
            () =>
                (0, AK.n1)(o)
                    ? r
                        ? o.gameName
                        : R.intl.formatToPlainString(R.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [N, C] = E.useState(_ ?? "???"),
        b = ir()(SG.tR, {
            [SP.LO]: !i,
            [SP.Rw]: i,
            [SP.FB]: null != o && i,
            [SP.xL]: r,
            [SP.fG]: null != s && s.length > 0,
        });
    function y() {
        (hG.Ay.deleteEntry(o),
            s?.forEach((e) => {
                hG.Ay.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? hZ.A.getDetectableGame(o.id) : null;
        (tt.default.track(S.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, AK.n1)(o) ? o.gameName : o.name,
        }),
            (0, la.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("568035"), n.e("627495")]).then(n.bind(n, 651930));
                return (n) =>
                    (0, A.jsx)(t, {
                        ...n,
                        detected: { name: o.name ?? "", gameId: e?.id ?? o.id },
                        onSubmitted: () => m(!0),
                    });
            }));
    }
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsxs)("div", {
                className: b,
                children: [
                    (0, A.jsxs)("div", {
                        className: ir()(SP.$K, SG.Vd),
                        children: [
                            o.verified && !l
                                ? (0, A.jsxs)("div", {
                                      className: SP.HS,
                                      children: [
                                          (0, A.jsx)("div", { className: SP.mO, children: _ }),
                                          (0, A.jsx)(lt.m, {
                                              text: R.intl.string(R.t["4PJP5p"]),
                                              children: (0, A.jsx)(Ew.A, {
                                                  className: SP.qf,
                                                  size: 18,
                                                  color: nQ.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, A.jsx)(Ej.U, {
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
                                      className: ir()(SP.mO, SP.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: N,
                                      onBlur: function () {
                                          o.name !== N && hG.Ay.editName(o, N);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === ly.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => C(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: n, exePath: l } = o;
                                return (
                                    i || p
                                        ? (e = R.intl.string(R.t.VbV5dv))
                                        : null != n && "" !== n && (e = R.intl.format(R.t["gGeOE+"], { when: n })),
                                    (0, A.jsx)(H.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: SP.GN,
                                        children: (0, A.jsx)(SD.A, {
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
                    I &&
                        (0, A.jsx)(ae.Y, {
                            targetElementRef: T,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, A.jsx)(dC.W, {
                                    navId: "registered-game-overflow-menu",
                                    onSelect: void 0,
                                    onClose: t,
                                    "aria-label": R.intl.string(R.t["UKOtz+"]),
                                    children: (0, A.jsxs)(e3.rX, {
                                        children: [
                                            x &&
                                                (0, A.jsx)(e3.Dr, {
                                                    id: "report",
                                                    label: R.intl.string(R.t["+78Pfm"]),
                                                    action: v,
                                                }),
                                            f &&
                                                (0, A.jsx)(e3.Dr, {
                                                    id: "remove",
                                                    label: R.intl.string(R.t.N86XcP),
                                                    color: "danger",
                                                    action: y,
                                                }),
                                        ],
                                    }),
                                });
                            },
                            children: (e, t) =>
                                (0, A.jsx)("div", {
                                    className: ir()(SP._Q, { [SP.g9]: t.isShown }),
                                    children: (0, A.jsx)(lt.m, {
                                        text: R.intl.string(R.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, A.jsx)(i9.K, {
                                            ...e,
                                            buttonRef: T,
                                            icon: dI.MoreHorizontalIcon,
                                            variant: "icon-only",
                                            size: "sm",
                                            "aria-label": R.intl.string(R.t["UKOtz+"]),
                                        }),
                                    }),
                                }),
                        }),
                    (0, A.jsx)(lt.m, {
                        text: R.intl.string(R.t.QmitzM),
                        asContainer: !0,
                        ariaHidden: !0,
                        children: (0, A.jsx)(li.I, {
                            checked: o.detectable && u,
                            disabled: !u,
                            onChange: function () {
                                null != s && s.length > 0 && d
                                    ? (0, la.openModalLazy)(async () => {
                                          let { Modal: e } = await n.e("304823").then(n.bind(n, 158954));
                                          return (t) =>
                                              (0, A.jsx)(e, {
                                                  ...t,
                                                  title: R.intl.formatToPlainString(R.t.PZ4fKc, { platform: _ }),
                                                  subtitle: R.intl.formatToPlainString(R.t.ZIQbfb, { platform: _ }),
                                                  actions: [
                                                      {
                                                          text: R.intl.string(R.t["ETE/oC"]),
                                                          onClick: () => t.onClose(),
                                                          variant: "secondary",
                                                      },
                                                      {
                                                          text: R.intl.string(R.t.Fmjztz),
                                                          onClick: () => {
                                                              (hG.Ay.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : hG.Ay.toggleDetection(o);
                            },
                            "aria-label": R.intl.string(R.t.QmitzM),
                        }),
                    }),
                ],
            }),
            null != s &&
                s.length > 0 &&
                !i &&
                (0, A.jsx)("div", {
                    className: SP.AQ,
                    children: s.map((e, t) =>
                        (0, A.jsxs)(
                            E.Fragment,
                            {
                                children: [
                                    (0, A.jsx)(SU, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== s.length - 1 && (0, A.jsx)("div", { className: SP.PQ }),
                                ],
                            },
                            (0, iQ.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function SM() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = AQ();
    return 0 === e.length
        ? null
        : (0, A.jsx)(X.B, {
              padding: { bottom: 32 },
              children: (0, A.jsx)(n$.n, {
                  children: (0, A.jsx)("div", {
                      children: e.map((e) =>
                          (0, A.jsx)(
                              SU,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === SR.a7 ? t : void 0 },
                              (0, iQ.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let SV = (0, d.E2)(c.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, A.jsx)(SM, {}),
});
var Sk = n(424994);
let Sw = (0, d.zZ)(c.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [SV, SL],
    useTitle: () => R.intl.string(R.t.jCOdvx),
    useSubtitle: () =>
        (0, h.bG)([iQ.Ay], () => iQ.Ay.getGamesSeen(!1).some((e) => !(0, AK.n1)(e)))
            ? R.intl.format(R.t.KPA3m9, { igdbLink: Sk.s8 })
            : R.intl.string(R.t["1yiJwn"]),
});
var SF = n(890497),
    SB = n(853270),
    Sz = n(969426);
function SX(e) {
    let { onClose: t } = e,
        n = (0, h.bG)([iQ.Ay], () => iQ.Ay.getCandidateGames()),
        [i, l] = E.useState(null),
        s = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, A.jsxs)(at.l, {
        className: ir()(SB.H, Sz.Y_),
        "aria-label": R.intl.string(R.t.GTCx0p),
        children: [
            (0, A.jsx)(SF.Z, {
                selectionMode: "single",
                placeholder: R.intl.string(R.t.XqMe3N),
                value: i,
                options: s,
                onSelectionChange: function (e) {
                    l(e);
                },
            }),
            (0, A.jsxs)("div", {
                className: ir()(SB.o, SG.xM),
                children: [
                    (0, A.jsx)(AC.Q, { variant: "secondary", text: R.intl.string(R.t["ETE/oC"]), onClick: t }),
                    (0, A.jsx)(_.$, {
                        variant: "primary",
                        text: R.intl.string(R.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (hG.Ay.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var SY = n(475007);
function SH() {
    let e = E.useRef(null);
    return (0, A.jsxs)("div", {
        className: ir()(SY.a, mQ.Gf),
        children: [
            (0, A.jsx)("span", { children: R.intl.string(R.t.xwhoqM) }),
            (0, A.jsx)(ae.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, A.jsx)(SX, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, A.jsx)(AC.Q, {
                        ...t,
                        buttonRef: e,
                        variant: "primary",
                        textVariant: "text-sm/medium",
                        text: R.intl.string(R.t.GjgdXe),
                    }),
            }),
        ],
    });
}
function SK() {
    return (0, A.jsx)("div", {
        className: ir()(SG.tR, SP.eS, SP.Rw),
        children: (0, A.jsxs)("div", {
            className: ir()(SP.$K, SG.Vd),
            children: [
                (0, A.jsx)("div", { className: SP.mO, children: R.intl.string(R.t.H68X9x) }),
                (0, A.jsx)(SH, {}),
            ],
        }),
    });
}
let SW = (0, d.E2)(c.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = AQ(),
                n = (0, h.bG)([iQ.Ay], () => iQ.Ay.getVisibleGame());
            return null == n
                ? (0, A.jsx)(SK, {})
                : (0, A.jsxs)("div", {
                      className: ir()(SG.Vd, SP.C2),
                      children: [
                          (0, A.jsx)(
                              SU,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === SR.a7 ? e : void 0,
                              },
                              (0, iQ.Es)(n),
                          ),
                          (0, A.jsx)(SH, {}),
                      ],
                  });
        },
    }),
    SZ = (0, d.zZ)(c.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => R.intl.string(R.t["MY9/Oe"]),
        buildLayout: () => [SW],
    }),
    Sq = (0, d.t_)(c.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => R.intl.string(R.t.AVDyEj),
        buildLayout: () => [SZ, Sw],
    }),
    SQ = (0, d.i4)(c.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.AVDyEj),
        icon: Sj.GameControllerIcon,
        usePredicate: np.Pi,
        buildLayout: () => [Sq],
    }),
    SJ = (0, d.WI)(c.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => R.intl.string(R.t.BA9200),
        buildLayout: () => [SQ, EN, Sv, hx],
    });
var S$ = n(631670),
    S0 = n(619499),
    S1 = n(836602),
    S2 = n(591179),
    S3 = n(854627),
    S6 = n(402860),
    S5 = n(761508),
    S4 = n(159001),
    S8 = n(344346),
    S7 = n(919395),
    S9 = n(68750);
function Te(e) {
    let { title: t, children: n } = e;
    return (0, A.jsxs)("div", {
        children: [(0, A.jsx)(p.D, { variant: "text-md/medium", className: S9.Vf, children: t }), n],
    });
}
function Tt(e) {
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
        className: ir()(S9.UA, n),
        children: (0, A.jsxs)("div", {
            className: ir()(S9.yt, i),
            children: [
                (0, A.jsx)("div", {
                    className: ir()(S9.Fp, a && S9.Oz),
                    children: (0, A.jsxs)(A.Fragment, {
                        children: [
                            (0, A.jsx)(Te, { title: s ?? R.intl.string(R.t.Zb06yP), children: l }),
                            null != r ? (0, A.jsx)(Te, { title: R.intl.string(R.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, A.jsx)("div", { className: S9.oB, children: t }),
            ],
        }),
    });
}
var Tn = n(986687),
    Ti = n(101058),
    Tl = n(321191),
    Ts = n(696451),
    Tr = n(590941);
function Ta() {
    return (0, A.jsxs)("div", {
        className: Tr.p$,
        children: [
            (0, A.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: Tr.Sl }),
            (0, A.jsx)(p.D, { className: Tr.h8, variant: "heading-lg/extrabold", children: R.intl.string(R.t.Z1OZCV) }),
            (0, A.jsx)(H.E, { className: Tr.h8, variant: "text-md/normal", children: R.intl.string(R.t.ZSt4Tt) }),
            (0, A.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: Tr.h8,
                children: (0, A.jsx)(_.$, {
                    variant: "primary",
                    text: R.intl.string(R.t.jQ3pqt),
                    onClick: function () {
                        ((0, t$.pX)(S.BVt.GUILD_DISCOVERY), (0, tM.default)());
                    },
                }),
            }),
        ],
    });
}
var To = n(81400),
    Tu = n(450232),
    Td = n(252732),
    Tc = n(355622),
    Tg = n(408018),
    Tm = n(959070),
    TA = n(290386),
    TE = n(486264);
let Th = (0, tw.Ld)(),
    TS = (0, j.createChannelRecord)({ id: "1", type: S.rbe.DM }),
    TT = (0, tw.Ld)();
function Tp(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: l,
            placeholder: s,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, TA.U)({ location: "profile_customization_about_me" }),
        [u, d] = E.useState(l ?? r),
        [c, g] = E.useState((0, Tg.x7)(u)),
        m = E.useRef(r),
        h = E.useRef(!1);
    return (
        E.useEffect(() => {
            if (m.current !== r) {
                let e = (0, Tg.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        E.useEffect(() => {
            void 0 !== l || u === r || h.current || (d(r), g((0, Tg.x7)(r)));
        }, [l, r, u]),
        (0, A.jsxs)(r5.A, {
            title: t,
            titleId: Th,
            description: R.intl.string(R.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, A.jsx)(Tm.Ay, {
                    "aria-describedby": TT,
                    "aria-labelledby": Th,
                    className: TE.i,
                    innerClassName: TE.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: s,
                    channel: TS,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: nl.USER_SETTINGS_MODAL_KEY,
                    type: Tc.oU.PROFILE_BIO_INPUT,
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
                (0, A.jsx)(ln.A, { id: TT, children: R.intl.format(R.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var Tx = n(930861),
    Tf = n(821956),
    TI = n(562819),
    T_ = n(84540),
    TN = n(467690);
function TC(e) {
    let { user: t, guild: n, className: i, sectionTitle: l, forcedDivider: s = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, eP.Ay)(),
        o = (0, S7.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, S7.CP)(n?.id),
        c = r ? Tx.wL : sk.$n;
    return (0, A.jsx)(r5.A, {
        className: i,
        forcedDivider: s,
        hasBackground: !0,
        title: l,
        errors: d,
        children: (0, A.jsxs)("div", {
            className: TN.NC,
            children: [
                (0, A.jsx)(c, {
                    size: sk.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TI.L)({ analyticsLocations: a, guild: n });
                    },
                    className: ir()({ [TN.yj]: r }),
                    children: R.intl.string(R.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TN.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, Tf.uZ)(t, n) ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.OrokWm),
                            onClick: function () {
                                (0, T_.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Tb = n(339984),
    Ty = n(942132);
let Tv = [{ name: "gif", extensions: ["gif"] }];
function Tj(e) {
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
        m = c ? Tx.wL : sk.$n,
        h = E.useCallback(() => {
            (0, Td.XD)({
                uploadType: Tb.HL.AVATAR,
                analyticsSource: g,
                filters: u ? Tv : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, A.jsx)(r5.A, {
        className: a,
        title: l,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, A.jsxs)("div", {
            className: Ty.NC,
            children: [
                (0, A.jsx)(m, {
                    className: ir()({ [Ty.yj]: c }),
                    size: sk.$n.Sizes.SMALL,
                    onClick: h,
                    children: s ?? R.intl.string(R.t["4OynCD"]),
                }),
                t &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Ty.DT,
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
var TO = n(248778),
    TL = n(810188);
function TR(e) {
    let { user: t, guildId: n, className: i } = e,
        l = ai.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: s } = (0, eP.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, S7.B0)(t, n),
        d = (0, TO.ux)("DisplayNameStylesSection"),
        [c, g] = (0, cx.kn)(d ? [eu.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eu.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        h = (0, E.useCallback)(() => {
            (g(cO.i.TAKE_ACTION),
                tt.default.track(S.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eG.L)({ analyticsLocations: s, guildId: n }));
        }, [s, n, g]),
        T = (0, E.useCallback)(() => {
            ((0, T_.p)({ displayNameStyles: null }), tt.default.track(S.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        p = (0, E.useCallback)(() => {
            (0, T_.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        x = void 0 !== o ? o : null != n ? a : r;
    return (0, A.jsx)(r5.A, {
        title: R.intl.string(eU.default["86GtGH"]),
        titleBadge: m ? (0, A.jsx)(tn.Lp, { text: R.intl.string(R.t.y2b7CA), className: TL.A }) : void 0,
        className: i,
        showPremiumIcon: l,
        errors: u,
        children: (0, A.jsxs)("div", {
            className: TL.N,
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
var TD = n(637193),
    TP = n(622410);
function TG(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: l } = (0, eP.Ay)(),
        s = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, S7.rv)(t, n?.id),
        d = E.useCallback(() => {
            (0, TD.p)({ analyticsLocations: l, guildId: n?.id });
        }, [l, n?.id]),
        c = E.useCallback(() => {
            (0, T_.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, A.jsx)(r5.A, {
        title: R.intl.string(R.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, A.jsxs)("div", {
            className: TP.u,
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
var TU = n(88524);
function TM(e) {
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
        g = d ? Tx.wL : sk.$n;
    return (0, A.jsx)(r5.A, {
        className: s,
        title: R.intl.string(R.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, A.jsxs)("div", {
            className: TU.NC,
            children: [
                (0, A.jsx)(g, {
                    className: ir()({ [TU.yj]: d }),
                    size: sk.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, Td.XD)({ uploadType: Tb.HL.BANNER, analyticsSource: c, guildId: l, isTryItOut: o }),
                    children: R.intl.string(R.t.N0bC3P),
                }),
                t &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TU.DT,
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
var TV = n(617061),
    Tk = n(625613);
function Tw(e) {
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
        d = ai.Ay.canUsePremiumProfileCustomization(t),
        c = (0, S7.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, S7.nZ)(n?.id);
    E.useEffect(() => {
        d &&
            (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tX.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tB.uq)(tX.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let h = a ? Tx.wL : sk.$n;
    return (0, A.jsx)(r5.A, {
        forcedDivider: r,
        borderType: um.i.PREMIUM,
        hasBackground: !0,
        title: s,
        showBorder: o,
        errors: m,
        className: l,
        children: (0, A.jsxs)("div", {
            className: Tk.NC,
            children: [
                (0, A.jsx)(h, {
                    size: sk.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TV.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: ir()({ [Tk.yj]: a }),
                    children: R.intl.string(R.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tk.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.uMuafO),
                            onClick: function () {
                                (0, T_.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TF = n(515727),
    TB = n(594401);
function Tz(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: l } = (0, eP.Ay)(),
        s = (0, S7.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, S7.Tu)(n?.id),
        [o, u] = (0, cx.kn)([eu.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eu.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, A.jsx)(r5.A, {
        showBorder: d,
        borderType: d ? um.i.NEW_UPSELL : um.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d ? (0, A.jsx)(tn.Lp, { text: R.intl.string(R.t.y2b7CA), className: TB.Ad }) : void 0,
        description: d ? R.intl.string(R.t.yMoMAt) : void 0,
        errors: a,
        children: (0, A.jsxs)("div", {
            className: TB.NC,
            children: [
                (0, A.jsx)(_.$, {
                    variant: "primary",
                    size: "sm",
                    text: R.intl.string(R.t["9/hmle"]),
                    onClick: function () {
                        ((0, TF.w)({ analyticsLocations: l, guild: n }), u(cO.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != s : null != r) &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TB.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.nQBruk),
                            onClick: function () {
                                (0, T_.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TX = n(602853),
    TY = n(654107),
    TH = n(999291),
    TK = n(101928),
    TW = n(819169),
    TZ = n(317097),
    Tq = n(508274),
    TQ = n(379012);
function TJ(e) {
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
        c = (0, TX.r)(nQ.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = nQ.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, Td.sN)(i),
        h = (0, TZ.Hl)(i),
        T = h === c ? g : h,
        p = m ? nQ.A.unsafe_rawColors.WHITE.css : nQ.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, TW.A)(a),
        f = (0, TW.A)(o),
        [I, _] = E.useState((0, ot.A)());
    return (
        E.useEffect(() => {
            (x !== a || f !== o) && _((0, ot.A)());
        }, [o, a, f, x]),
        (0, A.jsx)(ae.Y, {
            targetElementRef: d,
            positionKey: I,
            renderPopout: (e) =>
                (0, A.jsx)(Tq.VN, {
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
                    className: ir()(TQ.oP, { [TQ.r9]: s }),
                    children: [
                        (0, A.jsx)(n0.D, {
                            ...n,
                            tabIndex: s ? -1 : 0,
                            onClick: s ? S.tEg : t,
                            style: { backgroundColor: h, borderColor: T },
                            className: TQ.nf,
                            "aria-label": R.intl.string(R.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, A.jsx)(an.PencilIcon, {
                                size: "custom",
                                className: TQ.BW,
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
var T$ = n(190377);
function T0(e) {
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
        c = (0, TH.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, TK.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        E = ai.Ay.canUsePremiumProfileCustomization(t),
        h = null != n ? n : t.getAvatarURL(r, 80),
        S = (0, TX.r)(nQ.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, TY.rh)(h, S, !1);
    return null == g || null == m
        ? null
        : (0, A.jsx)(r5.A, {
              title: R.intl.string(R.t.DMeO2X),
              disabled: !E && !s,
              className: ir()(T$.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, A.jsxs)("div", {
                  className: T$.hd,
                  children: [
                      (0, A.jsx)("div", {
                          className: T$.YX,
                          children: (0, A.jsx)(TJ, {
                              onChange: (e) => l([e, m]),
                              color: g,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, A.jsx)(H.E, {
                                  className: T$.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: R.intl.string(R.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, A.jsx)("div", {
                          className: T$.YX,
                          children: (0, A.jsx)(TJ, {
                              onChange: (e) => l([g, e]),
                              color: m,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, A.jsx)(H.E, {
                                  className: T$.yz,
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
                              className: T$.WA,
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
function T1(e) {
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
    return (0, A.jsx)(r5.A, {
        title: t,
        titleId: o,
        errors: n,
        disabled: a,
        children: (0, A.jsx)(lo.k, {
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
var T2 = n(427262),
    T3 = n(684732),
    T6 = n(576705),
    T5 = n(931175);
function T4(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: l, user: s, guild: r } = e,
        a = (0, h.bG)([T6.A], () => T6.A.can(S.xBc.CHANGE_NICKNAME, r) || T6.A.can(S.xBc.MANAGE_NICKNAMES, r)),
        o = (0, Ez.L)(tX.PremiumTypes.TIER_2);
    return (0, A.jsxs)(r5.A, {
        title: R.intl.string(R.t.me1lRk),
        errors: t,
        children: [
            (0, A.jsx)(lo.k, {
                value: n ?? i ?? "",
                placeholder: l,
                maxLength: S.d0r,
                onChange: function (e) {
                    (0, T_.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : R.intl.string(R.t.gzjxQi),
            }),
            o && (0, A.jsx)(TR, { user: s, guildId: r.id, className: T5.F }),
        ],
    });
}
var T8 = n(233454);
let T7 = "/assets/b25da78aa7949feb.png";
function T9(e) {
    let { user: t, showOverlay: n, children: i } = e,
        l = (0, uM.Ay)(),
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
              className: T8.ry,
              children: [
                  (0, A.jsx)("div", { children: i }),
                  (0, A.jsxs)("div", {
                      className: T8.Wc,
                      children: [
                          (0, A.jsx)("img", {
                              className: T8.Tn,
                              alt: R.intl.string(R.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case S.NJ8.ASH:
                                      case S.NJ8.DARK:
                                      case S.NJ8.ONYX:
                                          return T7;
                                      case S.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return T7;
                                  }
                              })(l),
                          }),
                          (0, A.jsxs)("div", {
                              className: T8._9,
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
                          (0, A.jsx)(ug.A, {
                              size: sk.$n.Sizes.LARGE,
                              color: sk.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: ai.Ay.isPremium(t)
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
var pe = n(203164);
function pt() {
    let e = (0, h.bG)([si.default], () => {
            let e = si.default.getCurrentUser();
            return (ta()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, Ez.L)(tX.PremiumTypes.TIER_2),
        n = (0, h.bG)([S1.A, lh.A], () => lh.A.getGuild(S1.A.selectedGuildId));
    ta()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: l,
            pendingBanner: s,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, h.cf)([S1.A], () => ({ ...S1.A.getPendingChanges(n.id), errors: S1.A.getErrors(n.id) })),
        d = (0, Ti.V7)({ userId: e.id, image: i }),
        c = (0, To.EC)(n.id),
        g = (0, h.bG)([Ts.Ay], () => (null == n.id ? null : Ts.Ay.getMember(n.id, e.id))),
        m = (0, h.bG)([Tl.A], () => Tl.A.getGuildMemberProfile(e.id, n.id)),
        E = ai.Ay.canUsePremiumProfileCustomization(e),
        S = (0, S7.z5)(i, g?.avatar),
        T = (0, S7.Ac)(s, m?.banner),
        p = (0, T3.l)(o, m?.themeColors),
        x = m?.bio ?? "",
        f = m?.pronouns ?? "";
    return (0, A.jsxs)("div", {
        className: pe.Q,
        children: [
            (0, A.jsx)(
                T4,
                {
                    errors: u?.nick ?? c?.nick,
                    username: T2.Ay.getName(e),
                    pendingNick: l,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, A.jsx)(
                T1,
                {
                    sectionTitle: R.intl.string(R.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, T_.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, A.jsxs)(T9, {
                user: e,
                showOverlay: !E,
                children: [
                    (0, A.jsx)(
                        Tj,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.lqaIxI), (0, A.jsx)(Tu.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, Td.rM)(e, g?.avatar, (e) => (0, T_.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !E,
                        },
                        "avatar",
                    ),
                    (0, A.jsx)(
                        TC,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t["7v0T9P"]), (0, A.jsx)(Tu.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, A.jsx)(TR, { user: e, guildId: n.id }),
                    (0, A.jsx)(
                        TG,
                        { user: e, guild: n, titleIcon: (0, A.jsx)(Tu.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, A.jsx)(
                        Tw,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.wR5wOo), (0, A.jsx)(Tu.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, A.jsx)(
                        Tz,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.GWrZOd), (0, A.jsx)(Tu.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, A.jsx)(
                        TM,
                        {
                            showRemoveBannerButton: T,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, Td.rM)(e, m?.banner, (e) => (0, T_.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !E,
                        },
                        "banner",
                    ),
                    (0, A.jsx)(T0, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, T_.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: p,
                    }),
                    (0, A.jsx)(
                        Tp,
                        {
                            placeholder: R.intl.string(R.t["/7NKgv"]),
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.ZzAR2Y), (0, A.jsx)(Tu.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, T_.p)({ guildId: n.id, bio: e }),
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
var pn = n(832131);
function pi(e) {
    (0, la.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, A.jsx)(t, { source: { ...e, page: S.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function pl(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, eP.Ay)(tL.A.USER_SETTINGS_GUILD_PROFILE),
        l = (0, h.bG)([si.default], () => {
            let e = si.default.getCurrentUser();
            return (ta()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        s = (0, h.bG)([Ts.Ay], () => (null != t ? Ts.Ay.getMember(t.id, l.id) : null)),
        r = (0, h.bG)([Tl.A], () => !Tl.A.isFetchingProfile(l.id, t?.id)),
        a = (0, h.bG)([te.A], () => te.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, h.cf)([S1.A], () => S1.A.getPendingChanges(t?.id)),
        c = (0, Ti.V7)({ userId: l.id, image: o }),
        g = (0, S7.lw)({
            pendingValue: u,
            userValue: l?.collectibles?.nameplate,
            guildValue: s?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, S7.B0)(l, t?.id);
    return (E.useEffect(() => () => e5.h.wait(S4.IM), []), a)
        ? (0, A.jsx)(a7.A, {})
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
                                  (0, A.jsx)(r6.A, { guildId: t.id, onChange: n }),
                                  (0, A.jsx)(Tt, {
                                      profilePreviewTitle: (0, A.jsx)(p.D, {
                                          variant: "heading-md/medium",
                                          className: pn.YV,
                                          children: R.intl.formatToPlainString(R.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, A.jsx)(Tn.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guild: t,
                                          canUsePremiumCustomization: ai.Ay.canUsePremiumProfileCustomization(l),
                                          onUpsellClick: pi,
                                          containerClassName: pn.ti,
                                      }),
                                      nameplatePreview: (0, A.jsx)(S8.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? pn.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, A.jsx)(pt, {}),
                                  }),
                              ],
                          })
                        : (0, A.jsx)(Ta, {}),
                ],
            })
          : (0, A.jsx)(oe.y, {});
}
var ps = n(903209),
    pr = n(641130);
function pa(e) {
    let { children: t, notice: n } = e;
    return (0, A.jsxs)("div", { className: pr.r, children: [n, (0, A.jsx)("div", { children: t })] });
}
var po = n(269115),
    pu = n(823092),
    pd = n(839534),
    pc = n(379197),
    pg = n(488430),
    pm = n(457421),
    pA = n(940622),
    pE = n(25176),
    ph = n(757993);
let pS = function () {
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
        } = ((e = (0, pA.mb)(pE.RN.UPSELL_BANNER)),
        (t = (0, pA.mb)(pE.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, h.bG)([pm.A], () => pm.A.getMarketingBySurface(pc.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...i, type: pg.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, pu.L_)();
    return (
        E.useEffect(() => {
            (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tX.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: l,
                version: d,
            }),
                (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, l, () =>
                    (0, tB.uq)(tX.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
                ));
        }, [l, d]),
        (0, A.jsxs)("div", {
            ref: s,
            className: ph.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, A.jsx)("div", {
                    className: ph.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, A.jsx)("img", { src: a, className: ph.Qw, alt: "" }),
                }),
                (0, A.jsxs)("div", {
                    className: ph.Em,
                    children: [
                        (0, A.jsx)(p.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: ph.DD,
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
                            (0, pd.Cz)({
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
var pT = n(451909),
    pp = n(202639),
    px = n(285373),
    pf = n(835071),
    pI = n(724651),
    p_ = n(732280),
    pN = n(590180),
    pC = n(898461),
    pb = n(469054),
    py = n(601298),
    pv = n(207803),
    pj = n(461797);
let pO = Object.keys(pj.jB);
function pL(e) {
    let t = null == e ? pO : pO.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var pR = n(201805),
    pD = n(221650);
function pP(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
        l = (0, pR.Xf)({ useReducedMotion: i }),
        { name: s, header: r } = E.useMemo(() => {
            let e = (0, pj.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, A.jsxs)("div", {
        className: pD.kL,
        children: [
            (0, A.jsx)(n0.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                className: pD.x6,
                "aria-label": R.intl.string(R.t["44yJxh"]),
                children: l.render(),
            }),
            (0, A.jsxs)(n0.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                "aria-label": `${s}: ${R.intl.string(R.t["44yJxh"])}`,
                className: pD.Lt,
                children: [
                    (0, A.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: pD.L_ }),
                    (0, A.jsx)(H.E, {
                        className: pD._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: s,
                    }),
                ],
            }),
        ],
    });
}
var pG = n(511484),
    pU = n(811611),
    pM = n(206697),
    pV = n(507553);
function pk(e, t) {
    let n = pV.A.useField("scrollPosition"),
        i = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion);
    (0, E.useEffect)(() => {
        let l = e.current;
        if (null == l || n !== t) return;
        let s = requestAnimationFrame(() => {
            (l.scrollIntoView({ behavior: i ? "auto" : "smooth" }), pV.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(s);
    }, [e, t, n, i]);
}
var pw = n(844222),
    pF = n(842092);
let pB = "/assets/d4955aabdcb5bdee.png",
    pz = { assetOrigin: pb.E.NEW_ASSET, imageUri: pB, staticImageUri: pB, description: "", originalAsset: void 0 };
function pX(e) {
    let { user: t } = e,
        { reducedMotion: n } = E.useContext(pw.C),
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
        } = (0, h.cf)([S1.A], () => {
            let e = S1.A.getPendingChanges(),
                t = S1.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        p = (0, Ti.V7)({ userId: t.id, image: g ?? i });
    return (0, A.jsx)(Tn.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? l ?? pz,
        pendingDisplayNameStyles: T ?? a,
        pendingAvatar: p,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== S ? S : s,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : pF.WX,
        containerClassName: pF.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var pY = n(829497);
function pH(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        l = ai.Ay.isPremium(t),
        s = ai.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, h.cf)([S1.A], () => {
            let e = S1.A.getPendingChanges(),
                t = S1.A.getErrors(),
                n = S1.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, E.useState)(pL()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: l,
                    displayNameStyles: s,
                } = (0, E.useMemo)(() => {
                    let t = (0, pj.Wt)(e);
                    return {
                        banner: (0, py.X)({
                            assetOrigin: pb.E.NEW_ASSET,
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
                r = (0, h.bG)([pN.A], () => {
                    let e = pN.A.getProduct(l);
                    return (0, pC.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, E.useEffect)(() => {
                (0, pv.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: s });
            }, [n, i, r, s]);
            let a = (0, E.useCallback)(() => {
                let n = pL(e);
                (t(n), tt.default.track(S.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = E.useRef(null);
    pk(m, eC._F.TRY_IT_OUT);
    let { analyticsLocations: T, sourceAnalyticsLocations: x } = (0, eP.Ay)(tL.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function f(e) {
        e && ((0, pM.T)(), tt.default.track(S.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
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
    let I = (0, p_.V)()?.subscriptionTrial?.skuId === tX.pe.TIER_2,
        _ = (0, pI.O)(),
        N = (0, pG.U9)(_, tX.pe.TIER_2);
    return i
        ? (0, A.jsx)(eP.f5, {
              value: T,
              children: (0, A.jsxs)(um.A, {
                  ref: m,
                  className: pY.MT,
                  type: um.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, A.jsx)(Tt, {
                          stickyPreview: !1,
                          layoutClassName: pY.th,
                          profilePreviewTitle: (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(r1.t, { size: "md", color: "currentColor", className: pY.PC }),
                                  R.intl.string(R.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, A.jsxs)(A.Fragment, {
                              children: [(0, A.jsx)(pP, { preset: c, onShuffle: g }), (0, A.jsx)(pX, { user: t })],
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
                                              className: pY.h_,
                                              variant: "text-sm/normal",
                                              children: R.intl.string(R.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, A.jsx)(T0, {
                                      className: pY.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Ti.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: pv.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, A.jsx)(TM, {
                                      className: pY.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: pv.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !s &&
                                      (0, A.jsx)(Tj, {
                                          className: pY.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: pv.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: R.intl.string(R.t["7z0D1c"]),
                                          sectionTitle: R.intl.string(R.t.vtFfPX),
                                      }),
                                  (0, A.jsx)(TR, { user: t, className: pY.fz }),
                                  !I &&
                                      (0, A.jsx)(H.E, {
                                          variant: "text-sm/normal",
                                          children: R.intl.string(R.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !I &&
                          (0, A.jsx)(pp.d, {
                              onSubscribeModalClose: f,
                              className: pY.Kv,
                              showUpsell: !0,
                              text: R.intl.format(R.t.TmfgI2, {
                                  onClick: () => {
                                      (0, pf.K)({ onSubscribeFinish: f });
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
                                  (0, A.jsx)("div", { className: pY.BU }),
                                  (0, A.jsx)(pU.Ay, {
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
var pK = n(814390),
    pW = n(643056),
    pZ = n(843282),
    pq = n(145497),
    pQ = n(685073),
    pJ = n(534400),
    p$ = n(581781),
    p0 = n(743981),
    p1 = n(195801);
let p2 = (0, tw.Ld)(),
    p3 = E.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            l = (0, h.cf)([si.default], () => (0, pQ.Zo)(si.default.getCurrentUser()?.primaryGuild)),
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
                        : (0, A.jsx)(p$.A, {
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
                        : (0, A.jsx)(pq.j, {
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
                        : (0, A.jsx)(pJ.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: p0.Sl.SIZE_16,
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
            pk(p, eC._F.GUILD_TAG),
            (0, A.jsxs)(r5.A, {
                title: R.intl.string(R.t.Pdd1nd),
                titleId: p2,
                ref: p,
                children: [
                    (0, A.jsx)(H.E, {
                        className: p1.VA,
                        variant: "text-sm/normal",
                        children: R.intl.string(R.t.mlZ6Jx),
                    }),
                    (0, A.jsx)(pZ.Pw, {
                        className: p1.Lt,
                        optionClassName: p1.S0,
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
var p6 = n(318785),
    p5 = n(992526),
    p4 = n(470739);
let p8 = function () {
    return (0, p5.J)({ location: "UserSettingsProfileCustomization" })
        ? (0, A.jsx)(r5.A, {
              title: R.intl.string(R.t.l6w3Vj),
              description: R.intl.string(R.t.joHqdj),
              children: (0, A.jsx)(_.$, {
                  text: R.intl.string(R.t.wRraFx),
                  onClick: () => {
                      (0, p4._)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var p7 = n(953726);
let p9 = (0, tw.Ld)();
function xe(e) {
    let t = (0, Ez.L)(tX.PremiumTypes.TIER_2);
    return (0, A.jsxs)(r5.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: R.intl.string(R.t["9AjdkD"]),
        titleId: p9,
        children: [
            (0, A.jsx)("div", {
                children: (0, A.jsx)(lo.k, {
                    "aria-labelledby": p9,
                    placeholder: e.placeholder,
                    maxLength: S.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, A.jsx)(TR, { user: e.user, className: p7.F }),
        ],
    });
}
var xt = n(376626);
function xn(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = L.m$.useSetting(),
        l = void 0 !== n ? n : i;
    return (0, A.jsx)("div", {
        className: xt.u,
        children: (0, A.jsx)(tJ.d, {
            label: R.intl.string(R.t["3cWDuO"]),
            description: l ? null : R.intl.formatToPlainString(R.t.aYhclf, { username: t }),
            checked: !l,
            onChange: (e) => {
                !e === i ? (0, S$._e)() : (0, T_.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function xi(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: l } = e,
        s = t.getAvatarURL(null, 80),
        r = (0, TX.r)(nQ.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, TY.rh)(s, r, !1),
        o = (0, TZ.LX)(a[0]);
    return (0, A.jsx)(r5.A, {
        title: R.intl.string(R.t["/X3fkf"]),
        children: (0, A.jsx)(TJ, { onChange: (e) => l(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var xl = n(518477);
let xs = function () {
    let e = (0, h.bG)([uC.default], () => uC.default.getId());
    return (0, A.jsx)(r5.A, {
        title: R.intl.string(R.t.Jzj9q4),
        children: (0, A.jsx)(_.$, {
            text: R.intl.string(R.t.Geikwq),
            onClick: () => {
                (0, S6.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tL.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: xl.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var xr = n(654910);
function xa() {
    let e = (0, h.bG)([si.default], () => {
            let e = si.default.getCurrentUser();
            return (ta()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, h.bG)([Tl.A], () => Tl.A.getUserProfile(e.id)),
        n = (0, pW.d)({ location: "DefaultCustomizationSections" }),
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
        } = (0, h.cf)([S1.A], () => {
            let e = S1.A.getPendingChanges(),
                t = S1.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, Ti.V7)({ userId: e.id, image: i }),
        E = (0, To.EC)(),
        S = ai.Ay.canUsePremiumProfileCustomization(e),
        T = (0, S7.z5)(i, e.avatar),
        p = (0, S7.Ac)(s, t?.banner),
        x = (0, TH.Ay)(e.id),
        f = x?.getLegacyUsername(),
        I = (g.global_name?.length ?? 0) > 0 ? g.global_name : (E?.nick ?? []),
        _ = (g.bio?.length ?? 0) > 0 ? g.bio : (E?.bio ?? []),
        N = (0, p6.b)(),
        C = null != (0, pQ.Zo)(e.primaryGuild).guildId;
    return (0, A.jsxs)("div", {
        className: xr.Q,
        children: [
            (0, A.jsx)(xe, {
                placeholder: e.username,
                errors: I,
                currentGlobalName: e.globalName,
                pendingGlobalName: l,
                onGlobalNameChange: (e) => (0, T_.p)({ globalName: e }),
                user: e,
            }),
            (0, A.jsx)(
                T1,
                {
                    sectionTitle: R.intl.string(R.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, T_.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, A.jsx)(xs, {}),
            (0, A.jsx)(
                Tj,
                {
                    onAvatarChange: (e) => {
                        ((0, T_.p)({ avatar: e }), (0, S7.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: T,
                    errors: g.avatar,
                    sectionTitle: R.intl.string(R.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, A.jsx)(TC, { user: e, sectionTitle: R.intl.string(R.t["7v0T9P"]) }, "decoration"),
            (0, A.jsx)(TG, { user: e }),
            (0, A.jsx)(Tw, { user: e, sectionTitle: R.intl.string(R.t.wR5wOo) }, "effect"),
            (0, A.jsx)(Tz, { user: e, sectionTitle: R.intl.string(R.t.GWrZOd) }, "frame"),
            S
                ? (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)(
                              TM,
                              {
                                  showRemoveBannerButton: p,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, T_.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, A.jsx)(T0, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, T_.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, A.jsx)(
                      xi,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, T_.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, A.jsx)(
                Tp,
                {
                    sectionTitle: R.intl.string(R.t.ZzAR2Y),
                    errors: _,
                    onBioChange: (e) => (0, T_.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (N.length > 0 || C) &&
                (0, A.jsx)(p3, {
                    availablePrimaryGuilds: N,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, T_.p)({ primaryGuildId: e }),
                }),
            null != f &&
                !n &&
                (0, A.jsx)(xn, { legacyUsername: f, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, A.jsx)(p8, {}, "badges"),
        ],
    });
}
function xo() {
    (0, la.openModalLazy)(async () => {
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
var xu = n(447080);
function xd() {
    let e = (0, h.bG)([si.default], () => {
            let e = si.default.getCurrentUser();
            return (ta()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e);
        }),
        t = (0, h.bG)([te.A], () => te.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: l,
            showNotice: s,
            ...r
        } = (0, h.cf)([S1.A], () => ({ ...S1.A.getPendingChanges(), showNotice: S1.A.showNotice() })),
        a = (0, Ti.V7)({ userId: e.id, image: i }),
        o = (0, S7.lw)({ pendingValue: l, userValue: e?.collectibles?.nameplate }),
        u = (0, pK.A)() && null != n ? pT.Ay.parse(void 0, n).content : n,
        d = ai.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, eP.Ay)(tL.A.USER_SETTINGS_USER_PROFILE);
    E.useEffect(() => () => e5.h.wait(S$.IM), []);
    let [g, m] = E.useState(!1),
        T = !d,
        p = E.useRef(null);
    return t
        ? (0, A.jsx)(a7.A, {})
        : (0, A.jsxs)(eP.f5, {
              value: c,
              children: [
                  (0, A.jsx)(pS, {}),
                  (0, A.jsx)(Tt, {
                      profilePreview: (0, A.jsx)(Tn.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: xo,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: xu.ti,
                      }),
                      nameplatePreview: (0, A.jsx)(S8.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? xu.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, A.jsx)(xa, {}),
                  }),
                  (0, A.jsx)(po.L, {
                      innerRef: p,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: T,
                      children: (0, A.jsx)("div", {
                          ref: p,
                          children: (0, A.jsx)(pH, { user: e, shouldShow: T, isVisible: g }),
                      }),
                  }),
                  T &&
                      !s &&
                      (0, A.jsx)(pp.d, {
                          className: xu.EL,
                          showUpsell: !g,
                          text: R.intl.format(R.t.TmfgI2, { onClick: () => (0, pf.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, A.jsx)(px.l, {
                              size: "md",
                              location: tL.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, A.jsx)("div", {
                              className: xu.Xl,
                              children: (0, A.jsx)(_.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      (tt.default.track(S.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          p?.current?.scrollIntoView({ behavior: "smooth" }));
                                  },
                                  text: R.intl.string(R.t.uw9zI7),
                                  icon: r1.t,
                              }),
                          }),
                      }),
              ],
          });
}
var xc = n(625494);
n(46121);
var xg = n(944983);
let xm = { [eC.Eq.USER_PROFILE]: "main_profile_tab", [eC.Eq.GUILD]: "guild_profile_tab" },
    xA = (0, d.E2)(c.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, h.bG)([lS.A, dS.Ay, S1.A], () => {
                    let e = S1.A.selectedGuildId ?? lS.A.getGuildId();
                    return null == e || S1._.has(e) ? dS.Ay.getFlattenedGuildIds().find((e) => !S1._.has(e)) : e;
                }),
                t = (0, h.bG)([lh.A], () => lh.A.getGuild(e)),
                n = (0, h.bG)([S1.A], () => S1.A.showNotice()),
                i = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
                l = pV.A.useField("subsection");
            return (
                E.useEffect(() => {
                    (0, n4._)(xm[l]);
                }, [l]),
                E.useEffect(() => {
                    null != i && t?.id != null && (0, ps.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, A.jsx)(pa, {
                    children: (0, A.jsxs)(uX.F, {
                        component: (0, A.jsx)(ln.A, {
                            children: (0, A.jsx)(p.D, {
                                variant: "heading-xl/normal",
                                children: R.intl.string(R.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, A.jsxs)(S5.V, {
                                className: xg.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: l,
                                onItemSelect: function (e) {
                                    if (l !== e) {
                                        if (n) {
                                            ((0, n8.fO)({ duration: 300, intensity: 1.4 }),
                                                xc._.dispatch(S.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eC.Eq.GUILD && null != t && (0, S4.V2)(t.id),
                                            pV.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, A.jsx)(
                                        S5.V.Item,
                                        {
                                            className: xg.YU,
                                            id: eC.Eq.USER_PROFILE,
                                            children: R.intl.string(R.t["2p07FR"]),
                                        },
                                        eC.Eq.USER_PROFILE,
                                    ),
                                    (0, A.jsx)(
                                        S5.V.Item,
                                        {
                                            className: ir()(xg.YU, xg.HY),
                                            "aria-label": R.intl.string(R.t.kPHroX),
                                            id: eC.Eq.GUILD,
                                            children: R.intl.string(R.t.kPHroX),
                                        },
                                        eC.Eq.GUILD,
                                    ),
                                ],
                            }),
                            l === eC.Eq.GUILD
                                ? (0, A.jsx)(pl, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, n8.fO)({ duration: 300, intensity: 1.4 }),
                                                  xc._.dispatch(S.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, S4.JJ)(e.id);
                                      },
                                  })
                                : (0, A.jsx)(xd, {}),
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
    xE = (0, d.zZ)(c.X.PROFILE_CATEGORY, { buildLayout: () => [xA] });
var xh = n(379633);
function xS() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, S3.A)({ userId: e?.id, size: I._3.SIZE_48 });
    return null == e
        ? null
        : (0, A.jsxs)("div", {
              className: xh.a5,
              children: [
                  (0, A.jsx)(f.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: I._3.SIZE_48,
                      "aria-label": R.intl.string(R.t.lqaIxI),
                  }),
                  (0, A.jsxs)("div", {
                      className: xh.FS,
                      children: [
                          (0, A.jsx)(H.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, A.jsxs)("div", {
                              className: xh.Fk,
                              children: [
                                  (0, A.jsx)(H.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: R.intl.string(R.t.Ip9nBS),
                                  }),
                                  (0, A.jsx)(an.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let xT = (0, d.t_)(c.X.PROFILE_PANEL, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        notice: { stores: [S1.A], element: S0.A },
        initialize: () => () =>
            e5.h.wait(() => {
                (0, S$.F7)();
            }),
        buildLayout: () => [xE],
    }),
    xp = (0, d.i4)(c.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        icon: xf,
        StronglyDiscouragedCustomComponent: xS,
        usePredicate: () => !(0, S2.X)("user_settings_sidebar"),
        buildLayout: () => [xT],
    }),
    xx = (0, d.i4)(c.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        icon: xf,
        StronglyDiscouragedCustomComponent: xS,
        usePredicate: () => (0, S2.X)("user_settings_sidebar"),
        onClick: () => {
            let e = uC.default.getId();
            (0, S6.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function xf() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, S3.A)({ userId: e?.id, size: I._3.SIZE_48 });
    return (0, A.jsx)(f.eu, { src: t, avatarDecoration: n, size: I._3.SIZE_20, "aria-hidden": !0 });
}
let xI = (0, d.WI)(c.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [xp, xx] });
var x_ = n(98207),
    xN = (n(204925), n(818348));
let xC = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, la.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 888363),
            );
            return (n) => (0, A.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? xN.tE : null, onCloseCallback: t },
    );
};
var xb = n(940856),
    xy = n(379257),
    xv = n(306537),
    xj = n(36149),
    xO = (((r = {}).ADULT = "adult"), (r.TEEN = "teen"), (r.UNVERIFIED = "unverified"), r);
function xL() {
    let e = (0, xj.b8)();
    return (0, xj.yM)() ? "teen" : e ? "adult" : "unverified";
}
function xR() {
    xy.A.openUrl(ex.A.getArticleURL(S.MVz.TIGGER_PAWTECT_LEARN_MORE));
}
function xD() {
    switch (xL()) {
        case "adult":
            return R.intl.string(R.t.XxRj7f);
        case "teen":
            return R.intl.string(R.t.sK0dmH);
        case "unverified":
            return R.intl.string(R.t.lKDPGA);
    }
}
(0, Et.mj)({
    name: "2026-08-tiny-bronco",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
let { createLoader: xP } = n(632296),
    xG = xP(
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
    { makeMessagesProxy: xU } = n(632296),
    xM = xU(xG);
function xV() {
    return (xL(), null);
}
function xk() {
    let e = (xL(), null);
    return null != e ? { type: m.hp.ICON, ...e } : null;
}
(n(26137), n(957485));
var xw = n(513987);
let xF = [{ badgeType: m.Xi.NEW, dismissibleContent: eu.M.TINY_BRONCO_SETTINGS }],
    xB = [];
function xz() {
    return (0, xw.Wt)() ? xF : xB;
}
var xX = n(207560),
    xY = (((a = {}).LEGACY = "legacy"), (a.TINY_BRONCO = "tinyBronco"), a),
    xH = (((o = {}).VERIFY = "verify"), (o.EDIT = "edit"), (o.INFO = "info"), o);
function xK(e, t) {
    let n = (0, h.bG)([si.default], () => null != si.default.getCurrentUser()),
        i = (0, xX.fk)(),
        l = xL(),
        s = (0, xj.Y2)();
    if (!n || !i || "legacy" !== t) return !1;
    switch (l) {
        case xO.UNVERIFIED:
        case xO.TEEN:
            return "verify" === e;
        case xO.ADULT:
            return e === (s ? "edit" : "info");
    }
}
var xW = n(841365);
function xZ() {
    let e = xD();
    return (0, A.jsxs)(H.E, {
        variant: "text-md/medium",
        children: [`${e} \u{2022} `, R.intl.format(xW.default.WM5adV, { handleOnHelpUrlHook: xR })],
    });
}
let xq = {
        useTitle: () => R.intl.string(R.t["/52UYy"]),
        useSubtitle: xV,
        useVariant: () => "secondary",
        useLeadingDecoration: xk,
        getDismissibleBadges: xz,
        useTrailingDecoration: () => ({
            type: m.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: xZ,
        }),
        useLabel: () => R.intl.string(R.t.bt75uw),
        onClick: function () {
            (0, la.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, A.jsx)(e, { ...t });
            });
        },
    },
    xQ = (0, d.Tf)(c.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...xq, usePredicate: () => xK(xH.EDIT, xY.LEGACY) }),
    xJ = (0, d.Tf)(c.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...xq,
        usePredicate: () => xK(xH.EDIT, xY.TINY_BRONCO),
        useAriaLabel: () => R.intl.string(R.t.pBMSie),
    }),
    x$ = {
        useTitle: () => R.intl.string(R.t["/52UYy"]),
        useSubtitle: xV,
        useLeadingDecoration: function () {
            let e = (xL(), null);
            return null != e ? { type: m.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: xz,
        useTrailingDecoration: () => ({ type: m.Ln.TEXT, text: xD() }),
    },
    x0 = (0, d.v_)(c.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...x$, usePredicate: () => xK(xH.INFO, xY.LEGACY) }),
    x1 = (0, d.v_)(c.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...x$,
        usePredicate: () => xK(xH.INFO, xY.TINY_BRONCO),
    }),
    x2 = {
        useTitle: () => R.intl.string(R.t["/52UYy"]),
        useSubtitle: xV,
        useVariant: () => "secondary",
        useLeadingDecoration: xk,
        getDismissibleBadges: xz,
        useTrailingDecoration: () => ({ type: m.fq.TEXT, text: xD() }),
        useLabel: function () {
            return (0, xj.yM)() ? R.intl.string(R.t["9KiIz6"]) : R.intl.string(R.t.DVywUB);
        },
        onClick: function () {
            xy.A.showAgeVerificationGetStartedModal({ entryPoint: xv.q1.ACCOUNT_AGE_GROUP });
        },
    },
    x3 = (0, d.Tf)(c.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...x2, usePredicate: () => xK(xH.VERIFY, xY.LEGACY) }),
    x6 = (0, d.Tf)(c.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...x2,
        usePredicate: () => xK(xH.VERIFY, xY.TINY_BRONCO),
    }),
    x5 = [x3, xQ, x0],
    x4 = [x6, xJ, x1],
    x8 = (0, d.Tf)(c.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, h.bG)([si.default], () => si.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => R.intl.string(R.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: m.fq.TEXT, text: R.intl.string(R.t.qxk9zo) }),
        useLabel: () => R.intl.string(R.t.BleMPB),
        onClick: () => xC(),
    });
function x7(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function x9(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function fe(e) {
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
            (0, A.jsx)(AC.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": s ? l : i,
                onClick: () => r(!s),
                text: s ? R.intl.string(R.t.fgq1gs) : R.intl.string(R.t.dcztdU),
            }),
        ],
    });
}
function ft() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()?.email);
    return null == e
        ? (0, A.jsx)(H.E, { variant: "text-md/medium", children: R.intl.string(R.t["8SfTN/"]) })
        : (0, A.jsx)(fe, {
              text: e,
              censor: x9,
              revealLabel: R.intl.string(R.t["Zvx+yV"]),
              hideLabel: R.intl.string(R.t.nqTD4d),
          });
}
let fn = (0, d.Tf)(c.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, h.bG)([si.default], () => si.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => R.intl.string(R.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: m.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: ft }),
    useLabel: function () {
        return null == (0, h.bG)([si.default], () => si.default.getCurrentUser()?.email)
            ? R.intl.string(R.t.OYkgVk)
            : R.intl.string(R.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, h.bG)([si.default], () => si.default.getCurrentUser()?.email)
            ? R.intl.string(R.t["pvBD+W"])
            : R.intl.string(R.t["8peUT0"]);
    },
    onClick: function () {
        (0, la.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("279385"), n.e("420577"), n.e("465861")]).then(
                n.bind(n, 97060),
            );
            return (t) => (0, A.jsx)(e, { ...t });
        });
    },
});
var fi = n(557722),
    fl = n(53516);
function fs() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, A.jsx)(H.E, { variant: "text-md/medium", children: R.intl.string(R.t.I5kDqj) })
        : (0, A.jsx)(X.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, A.jsx)(fe, {
                  text: t,
                  censor: x7,
                  revealLabel: R.intl.string(R.t.eY3xlT),
                  hideLabel: R.intl.string(R.t["jllbv+"]),
              }),
          });
}
let fr = (0, d.Tf)(c.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, h.bG)([si.default], () => si.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => R.intl.string(R.t.kerONq),
    useAriaLabel: function () {
        return null == (0, h.bG)([si.default], () => si.default.getCurrentUser()?.phone)
            ? R.intl.string(R.t["SfUuE+"])
            : R.intl.string(R.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: m.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fs }),
    useLabel: function () {
        return null == (0, h.bG)([si.default], () => si.default.getCurrentUser()?.phone)
            ? R.intl.string(R.t.OYkgVk)
            : R.intl.string(R.t.bt75uw);
    },
    onClick: function () {
        null == si.default.getCurrentUser()?.phone
            ? (0, la.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("590275"),
                          n.e("766806"),
                          n.e("989545"),
                          n.e("311493"),
                          n.e("84704"),
                          n.e("286197"),
                      ]).then(n.bind(n, 615715));
                      return (t) => (0, A.jsx)(e, { reason: fi.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: fl.V },
              )
            : (0, la.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, A.jsx)(e, { ...t });
              });
    },
});
function fa() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function fo() {
    let e = (0, To.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, h.bG)([si.default], () => si.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsx)(H.E, { variant: "text-md/medium", children: i }),
            null != t &&
                (0, A.jsx)(lt.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, A.jsx)(iY.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: nQ.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let fu = (0, d.Tf)(c.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => R.intl.string(R.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: m.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: fo,
        }),
        useLabel: () => R.intl.string(R.t.bt75uw),
        useAriaLabel: () => R.intl.string(R.t.JECa91),
        useSubtitle: () => (fa() ? R.intl.string(R.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: fa,
        onClick: function () {
            (0, la.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, A.jsx)(e, { ...t });
            });
        },
    }),
    fd = (0, d.zZ)(c.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, h.bG)([si.default], () => null != si.default.getCurrentUser()),
        useTitle: () => R.intl.string(R.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, h.bG)([si.default], () => si.default.getCurrentUser());
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
                            button: { text: R.intl.string(R.t.lm1UKt), onClick: () => (0, xb.S)(e) },
                        }
                  : {
                        type: m.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        title: R.intl.string(R.t["/3qnL/"]),
                        text: R.intl.string(R.t.qKs3vg),
                        button: { text: R.intl.string(R.t["7psymi"]), onClick: () => xC() },
                    };
        },
        buildLayout: () => [fu, x8, fn, fr, ...x5],
    });
var fc = n(398177);
let fg = (0, d.Tf)(c.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => R.intl.string(R.t["CIGa+7"]),
    useLabel: () => R.intl.string(R.t.bt75uw),
    useAriaLabel: () => R.intl.string(R.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, la.openModal)((e) => (0, A.jsx)(fc.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var fm = n(200921);
let fA = [];
function fE() {
    fA = [];
}
class fh extends h.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return fA;
    }
}
let fS = new fh(e5.h, {
    LOGOUT: fE,
    LOGIN_SUCCESS: fE,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        fA = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [...fA],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        fA = n;
    },
});
function fT() {
    let e = (0, h.cf)([fS], () => fS.getSessions());
    return E.useMemo(() => {
        let t = [...e],
            n = null,
            i = uC.default.getAuthSessionIdHash();
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
function fp(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? R.intl.string(R.t.TXCmfL) : io()(e).fromNow();
}
var fx = n(176524),
    ff = n(646270),
    fI = n(738678),
    f_ = n(489828);
function fN(e) {
    let { icon: t, label: n, subLabel: i, description: l, children: s, muted: r } = e;
    return (0, A.jsxs)(X.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, A.jsx)(fx.A, { icon: t, color: r ? nQ.A.colors.ICON_MUTED : "currentColor" }),
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
function fC(e) {
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
                            return { text: R.intl.string(R.t.cDHCNY), icon: hP.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: ff.u };
                        case "horizon os":
                            return { text: e, icon: fI.G };
                        default:
                            return { text: e, icon: hP.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: l, Icon: s, lastActive: t ? null : fp(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(ii.Vq);
    return (0, A.jsx)(fN, {
        icon: r,
        label: s,
        subLabel: l,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, A.jsx)(n0.D, {
                className: f_.X,
                onClick: () => (0, fm.U0)(t.id_hash),
                "aria-label": R.intl.string(R.t.E4MJNt),
                children: (0, A.jsx)(EO.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function fb(e) {
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
let fy = (0, d.E2)(c.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = fT();
            return null == e
                ? (0, A.jsx)(oe.y, {})
                : (0, A.jsx)(fb, {
                      title: R.intl.string(R.t.LLS19o),
                      children: (0, A.jsx)(fC, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    fv = (0, d.E2)(c.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fT();
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t.Vij32M),
                description: R.intl.string(R.t.OTXyaf),
                children: (0, A.jsx)(_.$, {
                    onClick: () => (0, fm.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: R.intl.string(R.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fT();
            return e.length > 0;
        },
    });
var fj = n(766928);
function fO() {
    return (0, A.jsx)(fN, {
        icon: fj.W,
        label: R.intl.string(R.t.iUa0sn),
        description: R.intl.format(R.t["044+8i"], {
            onClick: () =>
                (0, nl.openUserSettings)(c.X.ACCOUNT_PANEL, { analyticsLocations: [tL.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let fL = (0, d.E2)(c.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fT(),
                t = (0, h.bG)([si.default], () => si.default.getCurrentUser());
            return (0, A.jsxs)(fb, {
                title: R.intl.string(R.t.xx1MWc),
                children: [
                    e.map((e) => (0, A.jsx)(fC, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, A.jsx)(fO, {}),
                ],
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fT(),
                t = (0, h.bG)([si.default], () => si.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    fR = (0, d.zZ)(c.X.SESSIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.mEndXM),
        useSubtitle: () => R.intl.string(R.t.b7ZpTM),
        initialize: () => {
            (0, fm.GY)();
        },
        buildLayout: () => [fy, fL, fv],
        useSearchTerms: () => [
            R.intl.string(R.t["+1h0k/"]),
            R.intl.string(R.t.LLS19o),
            R.intl.string(R.t.xx1MWc),
            R.intl.string(R.t.lSWsrd),
        ],
    }),
    fD = (0, d.t_)(c.X.SESSIONS_PANEL, {
        useTitle: () => R.intl.string(R.t.mEndXM),
        useObscuredNotice: a7.L,
        buildLayout: () => [fR],
    }),
    fP = (0, d.t0)(c.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [fD],
        initialize: () => {
            (0, fm.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = fT(),
                n = t.length + +(null != e);
            return {
                type: m.xn.TEXT,
                text: n > 0 ? R.intl.formatToPlainString(R.t.G7zwOk, { count: n }) : R.intl.string(R.t.MKDeyL),
            };
        },
    });
var fG = n(464477);
function fU(e) {
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
function fM() {
    return (0, aq.bG)([si.default], () => {
        let e = si.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var fV =
    (((u = {}).AVAILABLE = "available"),
    (u.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (u.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    u);
function fk() {
    let e = (0, aq.bG)([si.default], () => si.default.getCurrentUser()?.verified);
    return fG.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function fw() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, aq.bG)([lh.A, T6.A, si.default], () =>
        si.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? R.intl.string(R.t.hxf9fX)
                : R.intl.string(R.t["3iKih7"])
            : lh.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(S.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        T6.A.can(S.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? R.intl.string(R.t.OYTCUh)
                  : R.intl.string(R.t.HC8uSZ)
              : null,
    );
}
var fF = n(466034);
let fB = (0, d.Tf)(c.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => R.intl.string(R.t.lQsY7B),
        useSubtitle: () => fw(!0),
        useDisabled: () => null !== fw(!0),
        useLabel: () => R.intl.string(R.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, h.bG)([uC.default], () => uC.default.hasTOTPEnabled()),
                t = fk() === fV.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, nJ.A)({
                title: R.intl.string(R.t["D+aE7g"]),
                subtitle: R.intl.string(R.t.EA4ZEk),
                variant: "critical",
                confirmText: R.intl.string(R.t.N86XcP),
                onConfirm: () => x_.A.disable(),
            }),
    }),
    fz = (0, d.zZ)(c.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => R.intl.string(R.t.RumMFo),
        useSubtitle: () => R.intl.string(R.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, h.bG)([uC.default], () => uC.default.hasTOTPEnabled()),
                t = fk() === fV.AVAILABLE;
            if (!e && t)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: R.intl.string(R.t.cTNUeD),
                            onClick: fF.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (fk()) {
                case fV.UNAVAILABLE_NO_CRYPTO:
                    return { type: m.lT.INLINE_NOTICE, noticeType: "info", text: R.intl.string(R.t.PhHhsj) };
                case fV.UNAVAILABLE_UNVERIFIED:
                    return { type: m.lT.INLINE_NOTICE, noticeType: "warning", text: R.intl.string(R.t.uggF7o) };
                case fV.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [fB],
    });
var fX = n(670492),
    fY = n(32880),
    fH = n(663417),
    fK = n(658675),
    fW = n(900686);
function fZ() {
    (0, la.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, A.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    x_.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, la.openModalLazy)(
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
var fq = n(858487);
function fQ(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function fJ() {
    let e = fX.A.getVerificationKey();
    try {
        await x_.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, l8.P0)({
            message: e.body?.message ?? R.intl.string(R.t.F8FvUy),
            type: l7.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function f$(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = fQ(t),
        l = E.useRef(null),
        s = (0, A.jsxs)(A.Fragment, {
            children: [(0, A.jsx)(fK.P, { checked: n }), (0, A.jsx)(H.E, { variant: "text-md/normal", children: i })],
        });
    return uO.p5
        ? (0, A.jsx)(n0.D, {
              tag: "li",
              className: ir()(fq.aY, fq.vk),
              innerRef: l,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uO.C)(i), l?.current?.focus());
              },
              onClick: function () {
                  ((0, uO.C)(i),
                      (0, l8.P0)({
                          message: R.intl.string(R.t.mGZ66D),
                          type: l7.Ck.SUCCESS,
                          id: "backup-code-copied",
                      }));
              },
              children: s,
          })
        : (0, A.jsx)("li", { className: fq.aY, children: s });
}
let f0 = (0, d.zZ)(c.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.fC9qV0),
        useSubtitle: () =>
            (0, h.bG)([fX.A], () => fX.A.getBackupCodes().length > 0)
                ? R.intl.format(R.t.tp7zEK, {})
                : R.intl.string(R.t.LoOi4S),
        usePredicate: fM,
        buildLayout: () => [f1],
    }),
    f1 = (0, d.E2)(c.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.fC9qV0)],
        Component: function () {
            let e = (0, h.bG)([fX.A], () => fX.A.getBackupCodes()),
                t = E.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${fQ(t)}` + (n ? ` (${R.intl.string(R.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, A.jsx)(_.$, { text: R.intl.string(R.t.Jc2myK), size: "sm", variant: "secondary", onClick: fZ })
                : (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)("ul", {
                              className: fq.E5,
                              children: e.map((e) => (0, A.jsx)(f$, { code: e }, e.code)),
                          }),
                          (0, A.jsxs)(sF.e, {
                              size: "sm",
                              children: [
                                  (0, A.jsx)(fW.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, A.jsx)(_.$, {
                                          text: R.intl.string(R.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: fY.DownloadIcon,
                                      }),
                                  }),
                                  (0, A.jsx)(_.$, {
                                      text: R.intl.string(R.t["3x962E"]),
                                      variant: "secondary",
                                      icon: fH.RefreshIcon,
                                      onClick: fJ,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    f2 = (0, d.Tf)(c.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => R.intl.string(R.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = E.useState(!1),
                n = (0, h.bG)([si.default], () => si.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : R.intl.format(e ? R.t["xDBk/I"] : R.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, A.jsx)(AC.Q, {
                              text: e ? R.intl.string(R.t.fgq1gs) : R.intl.string(R.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => R.intl.string(R.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, h.bG)([si.default], () => si.default.getCurrentUser()?.hasFlag(S.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, la.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, A.jsx)(e, {
                        ...t,
                        handleSubmit: x_.A.disableSMS,
                        title: R.intl.string(R.t.KLWnit),
                        children: R.intl.string(R.t["W0/Duf"]),
                    });
            }),
    }),
    f3 = (0, d.zZ)(c.X.SMS_AUTH_CATEGORY, {
        useTitle: () => R.intl.string(R.t.wuHuI5),
        useSubtitle: () => (0, h.bG)([si.default], () => fU(si.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()?.hasFlag(S.nhx.MFA_SMS) ?? !1),
                t = (0, h.bG)([si.default], () => null != fU(si.default.getCurrentUser()));
            if (!e)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "sms-setup-button",
                            text: R.intl.string(R.t.Age7yU),
                            onClick: f6,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = fk(),
                t = fM(),
                n = (0, h.bG)([uC.default], () => uC.default.hasTOTPEnabled());
            return e === fV.AVAILABLE && t && n;
        },
        buildLayout: () => [f2],
    });
function f6() {
    let e = si.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: fi.d.USER_SETTINGS_UPDATE, onAddedPhone: x_.A.enableSMS }),
                (0, la.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("590275"),
                            n.e("766806"),
                            n.e("989545"),
                            n.e("311493"),
                            n.e("84704"),
                            n.e("286197"),
                        ]).then(n.bind(n, 615715));
                        return (n) => (0, A.jsx)(e, { ...n, ...t });
                    },
                    { modalKey: fl.V },
                ));
        } else x_.A.enableSMS();
}
var f5 = n(665671),
    f4 = n(442433),
    f8 = n(917136),
    f7 = n(976910),
    f9 = n(267255);
function Ie(e) {
    let { credential: t } = e;
    return (0, A.jsxs)("li", {
        className: f9.e,
        children: [
            (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(H.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, A.jsx)(H.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: R.intl.format(R.t["7JgxF5"], { lastUsed: fp(t.last_used) }),
                        }),
                ],
            }),
            (0, A.jsx)(i9.K, {
                icon: dI.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": R.intl.string(R.t["+nrTbK"]),
                onClick: (e) => {
                    (0, f4.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, A.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let It = (0, d.zZ)(c.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.IBq4Y3),
        useSubtitle: () => R.intl.string(R.t.yK9edS),
        useHeaderDecoration: function () {
            if (fk() === fV.AVAILABLE)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "add-security-key-button",
                            text: R.intl.string(R.t["Tzs/fw"]),
                            icon: iF.j,
                            onClick: f5.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (fk()) {
                    case fV.UNAVAILABLE_NO_CRYPTO:
                        return { type: m.lT.INLINE_NOTICE, noticeType: "info", text: R.intl.string(R.t.bWCGI9) };
                    case fV.UNAVAILABLE_UNVERIFIED:
                        return { type: m.lT.INLINE_NOTICE, noticeType: "warning", text: R.intl.string(R.t.uggF7o) };
                    case fV.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [In],
    }),
    In = (0, d.E2)(c.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [R.intl.string(R.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, h.cf)([f7.A], () => ({
                hasFetchedCredentials: f7.A.hasFetchedCredentials(),
                credentials: f7.A.getCredentials(),
            }));
            return (E.useEffect(() => {
                t || f8.JQ();
            }, [t]),
            t)
                ? (0, A.jsx)(X.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, A.jsx)(Ie, { credential: e }, e.id)),
                  })
                : (0, A.jsx)(oe.y, {});
        },
    }),
    Ii = (0, d.t_)(c.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => R.intl.string(R.t.m0FidJ),
        buildLayout: () => [It, fz, f3, f0],
    }),
    Il = (0, d.t0)(c.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = fM();
            return { type: m.xn.TEXT, text: e ? R.intl.string(R.t.lQsY7B) : R.intl.string(R.t.WsUuTt) };
        },
        buildLayout: () => [Ii],
    }),
    Is = (0, d.zZ)(c.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t["0iH2vc"]),
        buildLayout: () => [fg, Il, fP],
    }),
    Ir = { [xO.ADULT]: xM.PMznGO, [xO.TEEN]: xM.qSkhZH, [xO.UNVERIFIED]: xM.vGxRDB },
    Ia = [eu.M.TINY_BRONCO_NOTICE],
    Io = [];
function Iu() {
    xy.A.openUrl("https://discord.com/blog/safer-for-teens-same-discord-for-adults");
}
var Id = n(308645),
    Ic = n(555725),
    Ig = n(855267);
let Im = (0, d.E2)(c.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["16r9jm"])],
        Component: Ig.A,
    }),
    IA = (0, d.zZ)(c.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [Im] }),
    IE = (0, d.t_)(c.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => R.intl.string(R.t["16r9jm"]),
        buildLayout: () => [IA],
    }),
    Ih = (0, d.t0)(c.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => R.intl.string(R.t["16r9jm"]),
        useSubtitle: Ic.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, Ic._k)();
            return { type: m.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: m.xn.TEXT, text: (0, Ic.aO)() };
        },
        initialize: () => {
            Id.Yn();
        },
        buildLayout: () => [IE],
    }),
    IS = (0, d.zZ)(c.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return R.intl.string(R.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, xw.LH)(),
                t = xL(),
                [n, i] = (0, cx.kn)(e ? Ia : Io);
            return e && null != n
                ? {
                      type: m.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "start",
                      text: R.intl.format(Ir[t], { handleOnBlogHook: Iu }),
                      onDismiss: () => i(cO.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [...x4, Ih],
    });
var IT = n(738188),
    Ip = n(834981),
    Ix = n(987197),
    If = n(822585),
    II = n(840387),
    I_ = n(465558),
    IN = n(513687);
let IC = (0, d.E2)(c.X.FAMILY_CENTER_SETTING, {
        Component: I_.p,
        useSearchTerms: () => [
            R.intl.string(IN.default.RZqaJn),
            R.intl.string(IN.default.bdBmqy),
            R.intl.string(IN.default["gVWG+6"]),
            R.intl.string(IN.default.ahKIJO),
            R.intl.string(IN.default["8SLtqb"]),
        ],
    }),
    Ib = (0, d.zZ)(c.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [IC] }),
    Iy = (0, d.t_)(c.X.FAMILY_CENTER_PANEL, {
        useTitle: () => R.intl.string(IN.default.RZqaJn),
        buildLayout: () => [Ib],
    }),
    Iv = (0, d.zZ)(c.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => R.intl.string(IN.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, Ix.f)(),
                t = (0, If.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, Ip.VT)();
            return E.useMemo(() => (n ? { badgeType: m.Xi.WARNING } : { badgeType: m.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [Ij],
    }),
    Ij = (0, d.t0)(c.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Ip.Li)() ? R.intl.string(IN.default.IcMQUP) : R.intl.string(IN.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, II.Z)(),
                t = (0, Ip.Li)();
            return e
                ? t
                    ? R.intl.string(IN.default.G8lHFU)
                    : R.intl.string(IN.default.uOLNEZ)
                : R.intl.string(IN.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, Ix.f)(),
                t = (0, If.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: m.Xy.ICON,
                      icon: IT.WarningIcon,
                      color: nQ.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: nQ.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [Iy],
    });
var IO = n(425587),
    IL = n(662758);
function IR(e) {
    if (e.body.code === S.t02.INVALID_PASSWORD) throw e;
    (0, sV.A)({ title: R.intl.string(R.t.LX0nT8), subtitle: e.body.message });
}
async function ID() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = si.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await IO.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, sV.A)({
              title: R.intl.string(R.t["Y++oNe"]),
              subtitle: R.intl.format(R.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : lh.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, sV.A)({ title: R.intl.string(R.t.vJiTOL), subtitle: R.intl.string(R.t.UyVVan) })
          : t.isClaimed()
            ? (0, la.openModal)((t) =>
                  (0, A.jsx)(IL.default, {
                      ...t,
                      handleSubmit: (t) => (0, S$.U_)(t, e).then(S.tEg, IR),
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
                  onConfirm: () => (0, S$.U_)("", !0),
              });
}
let IP = (0, d.Tf)(c.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => R.intl.string(R.t["gIpzR+"]),
        useSubtitle: () => R.intl.string(R.t.Bd6dOf),
        useLabel: () => R.intl.string(R.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => ID(!0),
    }),
    IG = (0, d.Tf)(c.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => R.intl.string(R.t["p/Tjtp"]),
        useSubtitle: () => R.intl.string(R.t.YvDmKb),
        useLabel: () => R.intl.string(R.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => ID(!1),
        usePredicate: () => {
            let e = (0, h.bG)([si.default], () => si.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    IU = (0, d.zZ)(c.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [IG, IP] }),
    IM = (0, d.t_)(c.X.ACCOUNT_PANEL, {
        useTitle: () => R.intl.string(R.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (x_.A.clearBackupCodes(), (0, S$.Uo)());
            };
        },
        useObscuredNotice: a7.L,
        buildLayout: () => [fd, Is, IS, Iv, IU],
    }),
    IV = (0, d.i4)(c.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["ldCE/p"]),
        icon: gx.UserIcon,
        buildLayout: () => [IM],
    });
var Ik = n(176781),
    Iw = n(341923),
    IF = n(572164),
    IB = n(614584),
    Iz = n(915725),
    IX = n(268378);
let IY = (0, d.zD)(c.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => R.intl.string(IX.default.j29uJx),
        useSubtitle: () => R.intl.format(IX.default.UCzGcQ, { learnMoreLink: ex.A.getArticleURL(S.MVz.CLIPS) }),
        useValue: () => (0, h.bG)([Iz.Ay], () => Iz.Ay.getEnableAutoclipping()),
        setValue: IB.uL,
        useDisabled: () => !(0, IF.E)(),
    }),
    IH = (0, d.zY)(c.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [IY], headerSettingKey: IY.key }),
    IK = (0, d.zZ)(c.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => R.intl.string(IX.default.XWkJoi),
        useSubtitle: () => R.intl.string(IX.default["MJ/VsO"]),
        usePredicate: Iw.HN,
        usePersistentBadge: () => ({ badgeType: m.Xi.BETA }),
        useInlineNotice: () =>
            (0, IF.E)()
                ? null
                : {
                      type: m.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      text: R.intl.string(IX.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          text: R.intl.string(IX.default.qGgW4M),
                          onClick: () => IB.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [IH],
    });
var IW = n(696016);
let IZ = [IW.zq, 25, 50, IW.Y2, IW.rv],
    Iq = (0, d.sN)(c.X.CLIPS_BITRATE, {
        useTitle: () => R.intl.string(R.t["8bZyov"]),
        useSubtitle: () => R.intl.string(R.t["h8DSx/"]),
        minValue: IW.zq,
        maxValue: IW.rv,
        useDefaultValue: () => IW.Y2,
        getInitialValue: () => Iz.Ay.getSettings().clipsQuality.bitratePercent ?? IW.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = Iz.Ay.getSettings();
            IB.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: IZ,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, IF.E)(),
    });
var IQ = n(226640);
let IJ = (0, d.Hn)(c.X.CLIPS_FRAME_RATE, {
        useTitle: () => R.intl.string(R.t["2wScL1"]),
        useSubtitle: () => R.intl.string(R.t["Rf9+fy"]),
        useValue: () => (0, h.bG)([Iz.Ay], () => Iz.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = Iz.Ay.getSettings();
            IB.GS({ ...t, frameRate: e });
        },
        useOptions: IQ.Fz,
        useDisabled: () => !(0, IF.E)(),
    }),
    I$ = (0, d.E2)(c.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [R.intl.string(R.t.SIxrIF)],
        usePredicate: () => (0, h.bG)([Iz.Ay], () => Iz.Ay.getHardwareClassification()) === IW.k9.BELOW_MINIMUM,
        Component: () => (0, A.jsx)(lW.A, { look: lW.k.WARNING, children: R.intl.string(R.t.SIxrIF) }),
    }),
    I0 = (0, d.Hn)(c.X.CLIPS_LENGTH, {
        useTitle: () => R.intl.string(R.t.OgfUio),
        useSubtitle: () => R.intl.string(R.t.H7j4tY),
        useValue: () => (0, h.bG)([Iz.Ay], () => Iz.Ay.getSettings().clipsLength),
        setValue: (e) => IB.h$(e),
        useOptions: IQ.Qu,
        useDisabled: () => !(0, IF.E)(),
    }),
    I1 = (0, d.E2)(c.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [R.intl.string(R.t["Z+MfqT"])],
        Component: () => (0, A.jsx)(lW.A, { look: lW.k.INFO, children: R.intl.string(R.t["Z+MfqT"]) }),
    }),
    I2 = (0, d.Hn)(c.X.CLIPS_RESOLUTION, {
        useTitle: () => R.intl.string(R.t.aFudZJ),
        useSubtitle: () => R.intl.string(R.t.nIrkW5),
        useValue: () => (0, h.bG)([Iz.Ay], () => Iz.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = Iz.Ay.getSettings();
            IB.GS({ ...t, resolution: e });
        },
        useOptions: IQ.gF,
        useDisabled: () => !(0, IF.E)(),
    }),
    I3 = (0, d.zD)(c.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => R.intl.string(R.t["3zwNf6"]),
        useSubtitle: () => R.intl.string(R.t.m4Cjj9),
        useValue: () => (0, h.bG)([Iz.Ay], () => Iz.Ay.getSettings().remindersEnabled),
        setValue: (e) => IB.Mt(e),
        useDisabled: () => !(0, IF.E)(),
    }),
    I6 = (0, d.zZ)(c.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => R.intl.string(IX.default.TGwzMe),
        buildLayout: () => [I$, I0, IJ, I2, Iq, I1, I3],
    }),
    I5 = (0, d.zD)(c.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, h.bG)([Iz.Ay], () => Iz.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => IB.YP(e),
    }),
    I4 = (0, d.zD)(c.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, h.bG)([Iz.Ay], () => Iz.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => IB.Uh(e),
    }),
    I8 = (0, d.zZ)(c.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, h.bG)([si.default], () => {
                let e = si.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [I5, I4],
    });
var I7 = n(417270),
    I9 = n(847825);
let _e = (0, d.E2)(c.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [R.intl.string(R.t.pf54EU), R.intl.string(R.t["QyB/jK"])],
        Component: () => {
            let e = (0, h.bG)([lU.Ay], () => lU.Ay.getKeybindForAction(S.hCu.SAVE_CLIP, !0));
            ta()(null != e, "Save clip keybind unset");
            let t = !(0, IF.E)(),
                n = E.useRef(null),
                i = E.useCallback(
                    (t) => {
                        iX.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                l = E.useCallback(() => {
                    iX.A.setKeybind({ ...e, shortcut: (0, ls.OH)(IW.Ot) });
                }, [e]);
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t.pf54EU),
                description: R.intl.string(R.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, A.jsx)("div", {
                    className: I9.g,
                    children: (0, A.jsx)(ll.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, A.jsxs)(A.Fragment, {
                            children: [
                                (0, A.jsx)(lt.m, {
                                    text: R.intl.string(IX.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, A.jsx)(i9.K, {
                                        icon: iB.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": R.intl.string(IX.default.bUtubv),
                                        onClick: (e) => {
                                            (e.stopPropagation(), n.current?.toggleRecordMode());
                                        },
                                    }),
                                }),
                                (0, A.jsx)(lt.m, {
                                    text: R.intl.string(IX.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, A.jsx)(i9.K, {
                                        icon: I7.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": R.intl.string(IX.default.Kyk1Tp),
                                        onClick: (e) => {
                                            (e.stopPropagation(), l());
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
    _t = (0, d.E2)(c.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [R.intl.string(R.t["0U/hj7"]), R.intl.string(R.t["5zxkdo"])],
        usePredicate: lD.BW,
        Component: () => {
            let e = (0, h.bG)([lU.Ay], () => lU.Ay.getKeybindForAction(S.hCu.SAVE_CLIP, !0)),
                t = (0, h.bG)([lU.Ay], () => lU.Ay.getKeybindForAction(S.hCu.SAVE_SCREENSHOT, !0));
            (ta()(null != e, "Save clip keybind unset"), ta()(null != t, "Save screenshot keybind unset"));
            let n = E.useCallback(
                (e) => {
                    iX.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t["0U/hj7"]),
                description: R.intl.string(R.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, A.jsx)("div", {
                    className: I9.g,
                    children: (0, A.jsx)(ll.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    _n = (0, d.zD)(c.X.CLIPS_ENABLE, {
        useTitle: () => R.intl.string(R.t.h8rgrK),
        useSubtitle: () => R.intl.string(R.t["4Qw3NO"]),
        useValue: () => (0, IF.E)(),
        setValue: (e) => IB.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    _i = (0, d.zY)(c.X.CLIPS_GENERAL_CARD, { buildLayout: () => [_n, _e, _t], headerSettingKey: _n.key }),
    _l = (0, d.zZ)(c.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => R.intl.string(R.t["rWKv+e"]),
        useSubtitle: () => R.intl.format(IX.default["dh7g+S"], { learnMoreLink: ex.A.getArticleURL(S.MVz.CLIPS) }),
        buildLayout: () => [_i],
    }),
    _s = (0, d.E2)(c.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [R.intl.string(R.t.s4773E), R.intl.string(R.t.svjwGh)],
        Component: () => {
            let e = (0, h.bG)([Iz.Ay], () => Iz.Ay.getSettings().storageLocation),
                t = !(0, IF.E)(),
                n = E.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await nh.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && IB.HU(e[0]);
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
                        (0, A.jsx)(lo.k, {
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
                            text: R.intl.string(IX.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    _r = (0, d.zZ)(c.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => R.intl.string(IX.default["0Q+pdZ"]),
        buildLayout: () => [_s],
    }),
    _a = (0, d.t_)(c.X.CLIPS_PANEL, {
        useTitle: () => R.intl.string(R.t.z2jK6X),
        usePredicate: lD.sw,
        buildLayout: () => [_l, IK, I6, _r, I8],
    }),
    _o = (0, d.i4)(c.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.z2jK6X),
        icon: Ik.x,
        buildLayout: () => [_a],
    });
var _u = n(254138),
    _d = n(290595),
    _c = n(153488),
    _g = n(308528),
    _m = n(171316),
    _A = n(558001);
n(866945);
var _E = n(835002);
function _h() {
    let e = (0, _m.uM)(),
        t = (0, Ip.vx)(),
        n = E.useCallback(() => {
            ((0, tM.default)(),
                _g.A.openPrivateChannel({ recipientIds: t }),
                (0, _A.N)(_E.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _E.YX.LEARN_MORE));
        }, [t]),
        i = E.useCallback(() => {
            (0, _A.N)(_E.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _E.YX.VIEWED);
        }, []);
    return E.useMemo(() => {
        if (e)
            return {
                type: m.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: i,
                text: R.intl.format(IN.default.i284fU, {
                    hook: (e, t) => (0, A.jsx)(nn.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let _S = (0, d.zD)(c.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => R.intl.string(R.t.AGDDkH),
    useSubtitle: () => R.intl.string(R.t.kyo3dJ),
    useValue: () => L.Q$.useSetting(),
    setValue: (e) => IB.eQ({ allowVoiceRecording: e }),
});
var _T = n(157559),
    _p = n(331887);
function _x() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
        t = (0, h.bG)([_p.A], () => _p.A.harvestType),
        [n, i] = E.useState(() => Date.now()),
        l = null == t ? n : new Date(t.created_at).getTime() + 2592e6,
        s = E.useRef(null);
    return (E.useEffect(() => {
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
let _f = (0, d.Tf)(c.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => R.intl.string(R.t.qfFFos),
        useSubtitle: function () {
            let e = _x();
            if (e.allowed) return R.intl.format(R.t.NRI6vt, { article: ex.A.getArticleURL(S.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return R.intl.string(R.t.hIbRso);
                case "not_verified":
                    return R.intl.format(R.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, A.jsx)(
                                n0.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, nl.openUserSettings)(c.X.ACCOUNT_INFO_EMAIL_SETTING),
                                    children: e,
                                },
                                t,
                            ),
                    });
                case "rate_limited": {
                    let t = io()(e.nextAllowed).format("MMMM Do YYYY");
                    return R.intl.format(R.t["VLMG1+"], { date: t });
                }
                default:
                    return;
            }
        },
        initialize: () => {
            (e5.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                e6.Bo.get({ url: S.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        e5.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        e5.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    }));
        },
        useDisabled: () => !_x().allowed,
        useLoading: () => (0, h.bG)([_p.A], () => _p.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => R.intl.string(R.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...i } = e;
                    (0, la.openModalLazy)(async () => {
                        let { default: e } = await n.e("292063").then(n.bind(n, 970018));
                        return (n) => (0, A.jsx)(e, { modalProps: n, onConfirm: t });
                    }, i);
                })({
                    onConfirm: (n) => {
                        ((t = !1),
                            (0, S$.$I)(n)
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
                                            ? _T.A.show({
                                                  title: R.intl.string(R.t.i2iul5),
                                                  body: R.intl.string(R.t["6Nmv4i"]),
                                              })
                                            : _T.A.show({
                                                  title: R.intl.string(R.t.OjbtDm),
                                                  body: R.intl.string(R.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || R.intl.string(R.t["0F5Jyt"]);
                                        _T.A.show({ title: R.intl.string(R.t.OjbtDm), body: t });
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
    _I = (0, d.v_)(c.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => R.intl.string(R.t.D60Gfj),
        useSubtitle: () =>
            R.intl.format(R.t.dszICC, {
                onClickDisable: () => (0, nl.openUserSettings)(c.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, nl.openUserSettings)(c.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var __ = n(972737);
let _N = (0, d.zD)(c.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => R.intl.string(R.t.MNKzyg),
        useSubtitle: () =>
            R.intl.format(R.t["2SiYln"], { helpdeskArticle: ex.A.getArticleURL(S.MVz.DATA_USED_FOR_RECOMMENDED) }),
        useValue: function () {
            return (0, h.bG)([_c.A], () => _c.A.hasConsented(S.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, _d.U)([S.YAq.PERSONALIZATION], []).catch(__.i)
                : (0, __.O)({
                      header: R.intl.string(R.t["9SNpzv"]),
                      confirmText: R.intl.string(R.t["9g5UGw"]),
                      cancelText: R.intl.string(R.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, _d.U)([], [S.YAq.PERSONALIZATION]).catch(__.i);
                      },
                      body: R.intl.string(R.t.gJvDDh),
                  });
        },
        useDisabled: _m.uM,
    }),
    _C = (0, Et.mj)({
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
function _b() {
    let { enabled: e } = _C.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var _y = n(884705);
function _v() {
    return (0, h.bG)([_y.A], () => _y.A.isTogglesDisabled());
}
function _j() {
    return !L.vf.useSetting();
}
function _O(e) {
    L.vf.updateSetting(!e);
}
function _L() {
    let e = _v(),
        t = L.H1.useSetting(),
        n = (0, _m.uM)();
    return e || t || n;
}
let _R = (0, d.zD)(c.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => R.intl.string(R.t.CyLYKZ),
        useSubtitle: () =>
            R.intl.format(R.t["md5l4/"], { helpdeskArticle: ex.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !_b(),
        useValue: _j,
        setValue: _O,
        useDisabled: _L,
        useSearchTerms: () => [R.intl.string(R.t.CyLYKZ)],
    }),
    _D = (0, d.zD)(c.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => R.intl.string(R.t.CyLYKZ),
        useSubtitle: () =>
            R.intl.format(R.t["2QFDU/"], { helpdeskArticle: ex.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: _b,
        useValue: _j,
        setValue: _O,
        useDisabled: _L,
        useSearchTerms: () => [R.intl.string(R.t.CyLYKZ)],
    });
function _P() {
    return !L.H1.useSetting();
}
function _G(e) {
    L.H1.updateSetting(!e);
}
function _U() {
    let e = _v(),
        t = (0, _m.uM)();
    return e || t;
}
let _M = (0, d.zD)(c.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => R.intl.string(R.t.sJYh5t),
        useSubtitle: () => R.intl.string(R.t.w4fvxe),
        usePredicate: () => !_b(),
        useValue: _P,
        setValue: _G,
        useSearchTerms: () => [R.intl.string(R.t.VkS7Yd)],
        useDisabled: _U,
    }),
    _V = (0, d.zD)(c.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => R.intl.string(R.t.sJYh5t),
        useSubtitle: () =>
            R.intl.format(R.t.cf9mvV, { helpdeskArticle: ex.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: _b,
        useValue: _P,
        setValue: _G,
        useSearchTerms: () => [R.intl.string(R.t.VkS7Yd)],
        useDisabled: _U,
    }),
    _k = (0, d.AK)(c.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: c.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = A$(2);
            return R.intl.format(R.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = A0();
            return { type: m.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, h.bG)([iQ.Ay], () => iQ.Ay.getGamesSeen(!1).some((e) => !(0, AK.n1)(e))) && (0, nm.xl)(),
    }),
    _w = (0, d.gN)(c.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [_k] }),
    _F = (0, d.zD)(c.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => R.intl.string(R.t.XuADY2),
        useSubtitle: () =>
            R.intl.format(R.t.FNqmmX, { helpdeskArticle: ex.A.getArticleURL(S.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, h.bG)([_c.A], () => _c.A.hasConsented(S.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, _d.U)([S.YAq.USAGE_STATISTICS], []).catch(__.i)
                : (0, __.O)({
                      header: R.intl.string(R.t.OdPCbN),
                      body: R.intl.string(R.t.MGWabA),
                      confirmText: R.intl.string(R.t["D3+rU4"]),
                      cancelText: R.intl.string(R.t.kYpG0u),
                      onConfirm: () => (0, _d.U)([], [S.YAq.USAGE_STATISTICS]).catch(__.i),
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t.XuADY2)],
        useDisabled: _m.uM,
    }),
    _B = (0, d.zZ)(c.X.DATA_USAGE_CATEGORY, {
        useTitle: () => R.intl.string(R.t.QDAriI),
        useInlineNotice: _h,
        initialize: () => {
            _c.A.fetchedConsents || (0, _d.Q)();
        },
        buildLayout: () => [_I, _F, _N, _M, _R, _S, _f, _w],
    });
var _z = n(15762);
let _X = (0, d.zD)(c.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => R.intl.string(_z.default.F3llsQ),
    useSubtitle: () => R.intl.string(_z.default["6goWcz"]),
    useValue: L.Sy.useSetting,
    setValue: function (e) {
        (L.Sy.updateSetting(e),
            tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: A5.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function _Y() {
    let e = L.JG.useSetting();
    return (0, h.yK)(
        [dS.Ay, lh.A],
        () => {
            let t = new Set(e);
            return dS.Ay.getFlattenedGuildIds().filter((e) => null != lh.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let _H = (0, d.AK)(c.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = _Y();
            if (0 === e.length) return R.intl.format(R.t.QJIJ5p, {});
            let t = lh.A.getGuild(e[0]),
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
                    ((e = _Y()),
                    0 ===
                    (t = (0, h.yK)(
                        [lh.A],
                        () =>
                            e
                                .slice(0, 2)
                                .map((e) => lh.A.getGuild(e))
                                .filter((e) => null != e),
                        [e],
                    )).length
                        ? null
                        : t.length >= 2
                          ? {
                                frontIcon: {
                                    icon: (0, A.jsx)(Eu, { guild: t[0], size: AW.CD }),
                                    shape: AW.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, A.jsx)(Eu, { guild: t[1], size: AW.CD }), shape: AW.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, A.jsx)(Eu, { guild: t[0], size: AW.CD }),
                                    shape: AW.e0.SQUIRCLE,
                                },
                            });
            return { type: m.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: c.X.ACTIVITY_PRIVACY_PANEL,
    }),
    _K = (0, d.gN)(c.X.PROFILE_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, A7.lX)("ProfilePrivacyRelatedSettings"),
        buildLayout: () => [_H],
    }),
    _W = (0, d.Qx)(c.X.PROFILE_PRIVACY_SETTING, {
        usePredicate: () => (0, A7.lX)("ProfilePrivacySetting"),
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
            if ((L.KP.updateSetting(e), !(0, A7.W1)("ProfilePrivacySetting"))) return;
            let i = (0, Ei.gS)(t, e);
            null != i &&
                (0, la.openModalLazy)(async () => {
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
    _Z = (0, d.zZ)(c.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.ul884f),
        useSubtitle: () =>
            R.intl.format(R.t.N4jSgR, {
                learnMoreUrl: ex.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [_W, _X, _K],
    });
var _q = n(952270),
    _Q = n(678538);
let _J = { [eB.tR.REAL_MONEY_GAMING]: _Q.default.pmIitA },
    _$ = Object.keys(_J).map(Number),
    _0 = (0, d.E2)(c.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [R.intl.string(_Q.default.foQaI1)],
        usePredicate: _b,
        Component: function () {
            let e = E.useMemo(
                    () =>
                        _$.map((e) => ({
                            id: String(e),
                            value: e,
                            label: R.intl.string(_J[e]),
                            leading: _q.EyeSlashIcon,
                        })),
                    [],
                ),
                t = L.XZ.useSetting();
            return (0, A.jsx)(SF.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(L.XZ.getSetting());
                    for (let e of _$) t.has(e) ? n.add(e) : n.delete(e);
                    L.XZ.updateSetting([...n]);
                },
                label: R.intl.string(_Q.default.foQaI1),
                description: R.intl.format(_Q.default["z/MfaY"], {
                    helpdeskArticle: ex.A.getArticleURL(S.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: R.intl.string(_Q.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    _1 = (0, d.zZ)(c.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => R.intl.string(_Q.default.XUj46U),
        usePredicate: _b,
        buildLayout: () => [_V, _D, _0],
    });
var _2 = n(936388),
    _3 = n(714763),
    _6 = n(814278);
let _5 = (0, d.zD)(c.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => R.intl.string(R.t["opi/XK"]),
    useSubtitle: () => R.intl.format(R.t["/T+ZlP"], { helpArticle: (0, _6.Lu)() }),
    useValue: function () {
        return (0, h.bG)([_3.A], () => _3.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        _2.A.updatePersistentCodesEnabled(e);
    },
});
var _4 = n(787392);
function _8() {
    return (0, h.yK)([_4.A], () => _4.A.getUserIds());
}
var _7 = n(803306),
    _9 = n(966327),
    Ne = n(774156);
function Nt(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, eP.Ay)(),
        l = (0, h.bG)([si.default], () => si.default.getUser(t)),
        s = T2.Ay.getFormattedName(l),
        r = E.useCallback(() => {
            (0, _6.kj)(t);
        }, [t]),
        a = E.useCallback(() => (0, S6.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        E.useEffect(() => {
            (0, _7.wz)(t);
        }, [t]),
        (0, A.jsxs)("div", {
            className: Ne.uW,
            children: [
                null != l && (0, A.jsx)(_9.A, { className: Ne.my, user: l, size: I._3.SIZE_40 }),
                (0, A.jsxs)("div", {
                    className: Ne.Qq,
                    children: [
                        (0, A.jsx)(n0.D, {
                            className: Ne.Xh,
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
                (0, A.jsx)(n0.D, { onClick: r, className: Ne.Qz, children: (0, A.jsx)(le.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function Nn(e) {
    let { className: t, userId: n, verification: i, index: l } = e,
        s = (0, _6.tC)(i.timestamp),
        r = E.useCallback(() => {
            (0, _6.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, A.jsxs)("div", {
        className: t,
        children: [
            (0, A.jsxs)("div", {
                className: Ne.Qq,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: R.intl.format(R.t.N4qBBO, { index: l + 1 }),
                    }),
                    (0, A.jsx)(H.E, { variant: "text-sm/medium", color: "text-default", children: s }),
                ],
            }),
            (0, A.jsx)(n0.D, {
                className: Ne.Kk,
                onClick: r,
                children: (0, A.jsx)(EO.P, { size: "md", color: nQ.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function Ni(e) {
    let { userId: t } = e,
        n = (0, h.yK)([_4.A], () =>
            B()(_4.A.getUserVerifiedKeys(t))
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
            (0, A.jsx)(Nt, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, A.jsxs)(
                    E.Fragment,
                    {
                        children: [
                            (0, A.jsx)(Nn, { className: Ne.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, A.jsx)("div", { className: Ne.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var Nl = n(464946),
    Ns = n(492422);
let Nr = (0, d.E2)(c.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["5b3FNI"])],
        usePredicate: function () {
            let e = _8();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = _8();
            return (0, A.jsxs)(Nl.h, {
                children: [
                    (0, A.jsx)(Nl._, {
                        header: R.intl.string(R.t["5b3FNI"]),
                        description: R.intl.format(R.t.jrTSWU, { helpArticle: (0, _6.dc)() }),
                    }),
                    e.map((e) => (0, A.jsx)("div", { className: Ns.A, children: (0, A.jsx)(Ni, { userId: e }) }, e)),
                ],
            });
        },
    }),
    Na = (0, d.zZ)(c.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.bTwjaz),
        usePredicate: () => (0, eQ.isDesktop)(),
        buildLayout: () => [_5, Nr],
    }),
    No = (0, d.t_)(c.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => R.intl.string(R.t.OAuOHD),
        buildLayout: () => [_B, _1, _Z, Na],
    }),
    Nu = (0, d.i4)(c.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.OAuOHD),
        icon: _u.m,
        buildLayout: () => [No],
    });
var Nd = n(476713);
let Nc = (0, d.AK)(c.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.O65dzZ),
        useTitle: () => R.intl.string(R.t["f6kk+r"]),
        destinationKey: c.X.AUTHORIZED_APPS_CATEGORY,
    }),
    Ng = (0, d.gN)(c.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [Nc] });
var Nm = n(875444);
function NA(e, t) {
    let n = (0, h.bG)([EF.default], () => EF.default.getFetchState()),
        i = (0, h.bG)([EF.default], () =>
            e ? EF.default.getNewestTokensForNonChildrenApplications() : EF.default.getNewestTokens(),
        ),
        l = E.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, Nm.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        E.useEffect(() => {
            t || EC.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== EF.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: l }
    );
}
var NE = n(514479);
function Nh() {
    return (0, A.jsxs)("div", {
        className: NE.d,
        children: [
            (0, A.jsx)(H.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: NE.x,
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
let NS = (0, d.E2)(c.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = NA(!0, !0);
        return e ? (0, A.jsx)(oe.y, {}) : (0, A.jsx)(Nh, {});
    },
    useSearchTerms: () => [R.intl.string(R.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = NA(!0, !0);
        return e || 0 === t.length;
    },
});
function NT() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = NA(!0, !0);
    return !e && t.length > 0;
}
let Np = (0, d.zD)(c.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => R.intl.string(R.t.W8JtfT),
        useSubtitle: () => R.intl.string(R.t.a99KKy),
        useSearchTerms: () => [R.intl.string(R.t["Uv/eTx"])],
        useValue: () => L.Zk.useSetting(),
        setValue: (e) => L.Zk.updateSetting(e),
        usePredicate: NT,
    }),
    Nx = (0, d.Qx)(c.X.IN_GAME_DMS_SETTING, {
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
        usePredicate: NT,
    });
function Nf() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = NA(!0, !0);
    return {
        sortedGames: E.useMemo(() => e.toSorted((e, t) => oc.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var NI = n(687123),
    N_ = n(444802);
function NN() {
    let e = (0, N_.WX)();
    E.useEffect(() => {
        (0, _A.N)(_E.YA.AGE_CONFIRMATION_NOTICE, _E.YX.VIEWED);
    }, []);
    let t = E.useCallback(() => {
            (window.open(ex.A.getArticleURL(e), "_blank"), (0, _A.N)(_E.YA.AGE_CONFIRMATION_NOTICE, _E.YX.LEARN_MORE));
        }, [e]),
        n = E.useCallback(() => {
            (xy.A.showAgeVerificationGetStartedModal({ entryPoint: xv.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _A.N)(_E.YA.AGE_CONFIRMATION_NOTICE, _E.YX.CONFIRM_AGE));
        }, []);
    return (0, A.jsx)(r2.p, {
        messageType: r2.Y.INFO,
        action: (0, A.jsx)(AC.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: R.intl.string(R.t.FDSSia),
            onClick: n,
        }),
        children: R.intl.format(R.t.mFgsfg, { hook: (e, n) => (0, A.jsx)(nn.Anchor, { onClick: t, children: e }, n) }),
    });
}
function NC() {
    let e = (0, xX.aX)(NI.t.REACTIVE_CHECK),
        t = (0, xj.b8)();
    return E.useMemo(() => {
        if (e && !t) return { type: m.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: NN };
    }, [e, t]);
}
var Nb = n(323073),
    Ny = n(386171),
    Nv = n(96607);
let Nj = (0, d.zD)(c.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => R.intl.string(R.t.gvC6q7),
        useSubtitle: () => R.intl.string(R.t.zirUC1),
        useValue: Ny.hT,
        useDisabled: function () {
            let e = (0, Nv.A)() ?? !0,
                t = (0, Nb.sP)(),
                n = (0, xj.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, Nb.p5)() && e
                ? xy.A.showAgeVerificationGetStartedModal({ entryPoint: xv.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : L.Qe.updateSetting(e);
        },
    }),
    NO = (0, d.zD)(c.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => R.intl.string(R.t["L+yTsa"]),
        useSubtitle: () => R.intl.string(R.t["t6i/jW"]),
        useValue: Ny.tI,
        useDisabled: function () {
            let e = (0, Nv.A)() ?? !0,
                t = (0, Nb.sP)(),
                n = (0, xj.yM)();
            return E.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, Nb.p5)() && e
                ? xy.A.showAgeVerificationGetStartedModal({ entryPoint: xv.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : L.Kg.updateSetting(e);
        },
    }),
    NL = (0, d.AK)(c.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.hOXd45),
        destinationKey: c.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    NR = (0, d.gN)(c.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [NL] });
n(667532);
var ND = n(390248),
    NP = n(632119),
    NG = n(945276),
    NU = n(389737),
    NM = n(566769);
function NV() {
    let e,
        t = (0, NG.A)() ?? !0,
        n = (0, _m.uM)(),
        i = (0, _m.uM)(),
        {
            explicitContentGuilds: l,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: r,
        } = ((e = (0, aq.cf)([ag.A], () => ag.A.settings.textAndImages?.explicitContentSettings ?? (0, NP.C$)())),
        {
            explicitContentGuilds: (0, NP.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, NP.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, NP.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, ND.hK)() && t.includes(eB.TO.SHOW)
            ? xy.A.showAgeVerificationGetStartedModal({ entryPoint: xv.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, NP.Jz)(e);
    }
    let o = [
            { value: eB.TO.BLUR, label: R.intl.string(R.t.S49Uad) },
            { value: eB.TO.BLOCK, label: R.intl.string(R.t["D/157Y"]) },
        ],
        u = [{ value: eB.TO.BLUR, label: R.intl.string(R.t.S49Uad) }],
        d = { value: eB.TO.SHOW, label: R.intl.string(R.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? R.intl.string(IN.default["6Af/cw"]) : void 0 };
    return (0, A.jsxs)(NU.E, {
        description: R.intl.string(R.t.Wnojv1),
        children: [
            (0, A.jsx)(NM.A, {
                title: R.intl.string(R.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(NM.A, {
                title: R.intl.string(R.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(NM.A, {
                title: R.intl.string(R.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? R.intl.string(IN.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function Nk() {
    let e,
        t = (0, NG.A)() ?? !0,
        n = (0, _m.uM)(),
        i = (0, _m.uM)(),
        {
            goreContentGuilds: l,
            goreContentFriendDm: s,
            goreContentNonFriendDm: r,
        } = ((e = (0, aq.cf)([ag.A], () => ag.A.settings.textAndImages?.goreContentSettings ?? (0, N_.T4)())),
        {
            goreContentGuilds: (0, N_.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, N_.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, N_.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, ND.hK)() && t.includes(eB.TO.SHOW)
            ? xy.A.showAgeVerificationGetStartedModal({ entryPoint: xv.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, N_.qY)(e);
    }
    let o = [
            { value: eB.TO.BLUR, label: R.intl.string(R.t.S49Uad) },
            { value: eB.TO.BLOCK, label: R.intl.string(R.t["D/157Y"]) },
        ],
        u = [{ value: eB.TO.BLUR, label: R.intl.string(R.t.S49Uad) }],
        d = { value: eB.TO.SHOW, label: R.intl.string(R.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? R.intl.string(IN.default["6Af/cw"]) : void 0 };
    return (0, A.jsxs)(NU.E, {
        description: R.intl.string(R.t.XgH9eh),
        children: [
            (0, A.jsx)(NM.A, {
                title: R.intl.string(R.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(NM.A, {
                title: R.intl.string(R.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(NM.A, {
                title: R.intl.string(R.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? R.intl.string(IN.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var Nw = n(875162),
    NF = n(636745);
let NB = (0, d.E2)(c.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, N_.WX)(),
            t = E.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: R.intl.string(R.t.GYpoAq),
                        component: NV,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: R.intl.string(R.t["16/3Bi"]),
                        component: Nk,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, A.jsxs)(Nl.h, {
            children: [
                (0, A.jsx)(Nl._, {
                    header: R.intl.string(R.t["Hj/But"]),
                    description: R.intl.format(R.t.dliU4j, { learnMoreLink: ex.A.getArticleURL(e) }),
                }),
                (0, A.jsx)(Nw.A, { tabs: t, orientation: "vertical", tabsClassName: NF.v }),
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
var Nz = n(639555),
    NX = n(617641),
    NY = n(546140),
    NH = n(406935),
    NK = n(594061);
let NW = (0, d.zD)(c.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => R.intl.string(R.t.qFsx5q),
        useSubtitle: () => R.intl.format(R.t.lunaRv, { learnMoreLink: ex.A.getArticleURL(S.MVz.SAFETY_ALERTS) }),
        useValue: NY.L,
        setValue: function (e) {
            return NK.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = NH._t.create({ value: e });
                },
                NK.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, NX.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, Nz.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, NG.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    NZ = (0, d.zZ)(c.X.CONTENT_CATEGORY, {
        useTitle: () => R.intl.string(R.t["3upKU8"]),
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
                u = _h(),
                d =
                    ((e = (0, II.Z)()),
                    (t = (0, N_.WX)()),
                    (n = E.useCallback(() => {
                        (window.open(ex.A.getArticleURL(t), "_blank"),
                            (0, _A.N)(_E.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _E.YX.LEARN_MORE));
                    }, [t])),
                    (i = E.useCallback(() => {
                        (0, _A.N)(_E.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _E.YX.VIEWED);
                    }, [])),
                    E.useMemo(() => {
                        if (e)
                            return {
                                type: m.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: i,
                                text: R.intl.format(R.t.EUo0yj, {
                                    hook: (e, t) => (0, A.jsx)(nn.Anchor, { onClick: n, children: e }, t),
                                }),
                            };
                    }, [n, e, i])),
                c =
                    ((l = (0, xX.SJ)()),
                    (s = (0, xj.b8)()),
                    (r = l && !s),
                    (a = E.useCallback(() => {
                        (xy.A.showAgeVerificationGetStartedModal({ entryPoint: xv.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _A.N)(_E.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _E.YX.LEARN_MORE));
                    }, [])),
                    (o = E.useCallback(() => {
                        (0, _A.N)(_E.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _E.YX.VIEWED);
                    }, [])),
                    E.useMemo(() => {
                        if (r)
                            return {
                                type: m.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                text: R.intl.format(R.t.OX4ybh, {
                                    hook: (e, t) => (0, A.jsx)(nn.Anchor, { onClick: a, children: e }, t),
                                }),
                            };
                    }, [a, r, o])),
                g = NC();
            return u ?? void 0 ?? g ?? c ?? d;
        },
        buildLayout: () => [NB, NW, Nj, NO, NR],
    });
var Nq = n(923457),
    NQ = n(750714);
let NJ = (0, d.Qx)(c.X.DM_SPAM_SETTING, {
    useTitle: () => R.intl.string(R.t.puwSkY),
    useSubtitle: () => R.intl.string(R.t["+sXN3T"]),
    useValue: function () {
        let e = L.he.useSetting(),
            t = L.cj.useSetting(),
            n = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
            i = (0, xX.yv)(Nq.p.SPAM_FILTERS);
        return e !== eB.he.DEFAULT_UNSET
            ? e
            : n?.nsfwAllowed === !1 && i
              ? eB.he.FRIENDS_AND_NON_FRIENDS
              : (NQ.xY.get(t) ?? eB.he.NON_FRIENDS);
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
var N$ = n(189883);
let N0 = (0, d.zD)(c.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => R.intl.string(R.t["7x9dyE"]),
    useValue: function () {
        let e = L.FA.useSetting();
        return E.useMemo(() => (0, n8.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        L.FA.updateSetting(e ? S.yKI : S.yKI & ~S.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, _m.uM)();
    },
});
var N1 = n(665260);
let N2 = (0, d.zD)(c.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => R.intl.string(R.t.NfeuZ3),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = E.useMemo(() => (0, n8.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? N1.UI(t, S.dzt.MUTUAL_FRIENDS) : N1.iE(t, S.dzt.MUTUAL_FRIENDS, S.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _m.uM)();
        },
    }),
    N3 = (0, d.zD)(c.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => R.intl.string(R.t.qsMfsH),
        useSubtitle: () => R.intl.string(R.t["6DqAp0"]),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = E.useMemo(() => (0, n8.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? N1.UI(t, S.dzt.MUTUAL_GUILDS) : N1.iE(t, S.dzt.MUTUAL_GUILDS, S.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _m.uM)();
        },
    }),
    N6 = (0, d.FW)(c.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => R.intl.string(R.t.wTdS6S),
        buildLayout: () => [N0, N2, N3],
    });
var N5 = n(420825);
let N4 = (0, d.zD)(c.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => R.intl.string(R.t["jK+wdr"]),
        useSubtitle: () => R.intl.string(R.t["RYh/pW"]),
        useValue: () => !(0, N5.q)(),
        setValue: function (e) {
            L.Zd.updateSetting(!e);
        },
    }),
    N8 = (0, d.zZ)(c.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["5gxWrt"]),
        useSubtitle: function () {
            let { enabled: e } = N$.A.useConfig({ location: "Friend Request Setting" });
            return e ? R.intl.string(R.t.QVbF3l) : void 0;
        },
        useSubnavLabel: () => R.intl.string(R.t.fyA115),
        useInlineNotice: _h,
        buildLayout: () => [N6, N4],
    });
var N7 = n(994500),
    N9 = n(428678),
    Ce = n(717398),
    Ct = n(730134),
    Cn = n(276573);
function Ci(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, A.jsxs)("div", {
        className: Cn.wx,
        children: [
            (0, A.jsx)("div", {
                className: Cn.zc,
                children: i ? (0, A.jsx)(N9.K, {}) : (0, A.jsx)(_q.EyeSlashIcon, {}),
            }),
            (0, A.jsxs)("div", {
                className: Cn.Qq,
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
function Cl(e) {
    let { userId: t, last: n } = e,
        i = (0, h.bG)([N7.A], () => N7.A.isBlocked(t)),
        l = (0, h.bG)([si.default], () => si.default.getUser(t)),
        [s, r] = E.useState(!1),
        a = E.useCallback(() => {
            (r(!0),
                i
                    ? Ce.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : Ce.A.unignoreUser(t, tL.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == l
        ? null
        : (0, A.jsxs)("div", {
              className: ir()(Cn.nM, { [Cn.fW]: n }),
              children: [
                  (0, A.jsxs)("div", {
                      className: Cn.eF,
                      children: [
                          (0, A.jsx)(Ct.A, { user: l, size: I._3.SIZE_40 }),
                          (0, A.jsxs)("div", {
                              className: Cn.Qq,
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
function Cs(e) {
    let { userIds: t, listType: n } = e,
        [i, l] = E.useState(5);
    return (0, A.jsx)(Nl.h, {
        children: (0, A.jsxs)("div", {
            className: Cn.Nr,
            children: [
                (0, A.jsx)(Ci, { listType: n, numberOfUsers: t.length }),
                (0, A.jsx)("div", {
                    className: Cn.jS,
                    children: t.slice(0, i).map((e, n) => (0, A.jsx)(Cl, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, A.jsx)("div", {
                          className: Cn.vM,
                          children: (0, A.jsx)(n0.D, {
                              onClick: function () {
                                  l((e) => e + 5);
                              },
                              className: Cn.Qf,
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
let Cr = (0, d.E2)(c.X.BLOCKED_USERS, {
        useSearchTerms: () => [R.intl.string(R.t.PFOUKW)],
        usePredicate: () => (0, h.bG)([N7.A], () => N7.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, h.yK)([N7.A], () => N7.A.getBlockedIDs());
            return (0, A.jsx)(Cs, { userIds: e, listType: "blocked" });
        },
    }),
    Ca = (0, d.E2)(c.X.IGNORED_USERS, {
        useSearchTerms: () => [R.intl.string(R.t["93ZDWE"])],
        usePredicate: () => (0, h.bG)([N7.A], () => N7.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, h.yK)([N7.A], () => N7.A.getIgnoredIDs());
            return (0, A.jsx)(Cs, { userIds: e, listType: "ignored" });
        },
    }),
    Co = (0, d.zZ)(c.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["+Iryf3"]),
        useSubtitle: () =>
            R.intl.format(R.t["0aNQo9"], { helpArticle: ex.A.getArticleURL(S.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [Cr, Ca],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, h.cf)([N7.A], () => ({
                hasBlockedUsers: N7.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: N7.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var Cu = n(22385),
    Cd = n(556534),
    Cc = n(111159),
    Cg = n(152056),
    Cm = n(428031),
    CA = n(978433);
let CE = { label: () => R.intl.string(R.t["32u1Dx"]), value: Cu.YG };
var Ch = n(307863),
    CS = n(954225);
function CT() {
    return (0, Ch.e)() ? R.intl.string(R.t.PMsfcH) : R.intl.string(R.t.RAQUSN);
}
function Cp(e, t) {
    tt.default.track(S.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let Cx = (0, d.zD)(c.X.PERMISSIONS_DMS_SETTING, {
    useTitle: CT,
    useSubtitle: function () {
        let e = (0, Cd.Tx)(),
            t = (0, Cd.q9)(),
            n = (0, Ch.e)();
        return e === Cu.YG
            ? n
                ? R.intl.string(R.t.XXGmuB)
                : R.intl.string(R.t.wbYDfT)
            : t
              ? R.intl.string(R.t.V0ka0Q)
              : n
                ? R.intl.string(R.t.F9WY3f)
                : R.intl.string(R.t.G7c3Xo);
    },
    useValue: function () {
        let e = (0, Cd.Tx)(),
            t = L.$s.useSetting().includes(e),
            n = (0, Cm.K)();
        return e === Cu.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, _m.uM)();
        return (0, Cd.Tx)() === Cu.YG && e;
    },
    setValue: function (e) {
        let t = Cu.xk.getState().selectedGuildId;
        if (t === Cu.YG) {
            var n;
            ((n = !e),
                (0, __.O)({
                    header: R.intl.string(R.t["uUr+GR"]),
                    body: R.intl.string(R.t.hjGJBp),
                    confirmText: R.intl.string(R.t.gm1Vej),
                    cancelText: R.intl.string(R.t.p89ACt),
                    confirmButtonColor: sk.$n.Colors.BRAND,
                    onConfirm: function () {
                        (L.n6.updateSetting(n), Cp(n, !1));
                    },
                    onCancel: function () {
                        (L.n6.updateSetting(n), L.$s.updateSetting(n ? lh.A.getGuildIds() : []), Cp(n, !0));
                    },
                }));
        } else {
            let n = (0, n8.Tb)();
            (e ? n.delete(t) : n.add(t),
                L.$s.updateSetting(Array.from(n)),
                tt.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: CS.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eC.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var Cf = n(116774),
    CI = n(953298);
function C_(e, t) {
    tt.default.track(S.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function CN() {
    return R.intl.string(R.t["3o2ojh"]);
}
let CC = (0, d.zD)(c.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: CN,
        useSubtitle: function () {
            let e = (0, Cd.q9)(),
                t = ex.A.getArticleURL(S.MVz.MESSAGE_REQUESTS);
            return e
                ? R.intl.format(R.t.WpnWLc, { helpdeskArticle: t })
                : R.intl.format(R.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, Cd.Tx)(),
                t = (0, Cm.K)(),
                n = L.$s.useSetting().includes(e),
                i = (0, Cf.s)(),
                l = (0, _m.uM)(),
                s = L.YX.useSetting(),
                r = L.Zr.useSetting().includes(e);
            return !!i || (e === Cu.YG && l ? !s : e === Cu.YG ? !t && !s : !n && !r);
        },
        useDisabled: function () {
            let e = (0, Cd.Tx)(),
                t = (0, _m.uM)(),
                n = (0, Cm.K)(),
                i = L.$s.useSetting().includes(e),
                l = (0, Cf.s)();
            return e === Cu.YG ? n || t || l : i || l;
        },
        setValue: function (e) {
            let t = Cu.xk.getState().selectedGuildId;
            if (!e && (0, CI.w)())
                return void xy.A.showAgeVerificationGetStartedModal({ entryPoint: xv.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === Cu.YG) {
                var n;
                ((n = !e),
                    (0, __.O)({
                        header: R.intl.string(R.t.yAfu1p),
                        body: R.intl.string(R.t.Ry2z74),
                        confirmText: R.intl.string(R.t.gm1Vej),
                        cancelText: R.intl.string(R.t.p89ACt),
                        confirmButtonColor: sk.$n.Colors.BRAND,
                        onConfirm: function () {
                            (L.YX.updateSetting(n), C_(n, !1));
                        },
                        onCancel: function () {
                            (L.YX.updateSetting(n), L.Zr.updateSetting(n ? lh.A.getGuildIds() : []), C_(n, !0));
                        },
                    }));
            } else {
                let n = (0, n8.xo)();
                (e ? n.delete(t) : n.add(t),
                    L.Zr.updateSetting(Array.from(n)),
                    tt.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: CS.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eC.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    Cb = (0, d.E2)(c.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [CT(), CN()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, Cu.xk)(),
                l = (0, h.bG)([dS.Ay], () => dS.Ay.getFlattenedGuildIds()),
                s = (0, h.bG)([lh.A], () => lh.A.getGuilds()),
                r =
                    ((e = L.$s.useSetting()),
                    (t = (0, Cm.K)()),
                    (0, h.bG)(
                        [lh.A],
                        () => {
                            let n = new Set(e);
                            return lh.A.getGuildIds().filter((e) => n.has(e) !== t).length;
                        },
                        [e, t],
                    )),
                a = l[0];
            E.useEffect(
                () =>
                    Cg.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = Cu.xk.getState().selectedGuildId;
                            "" === t && "" !== e && n === Cu.YG && null != a
                                ? i(a)
                                : "" === e && n !== Cu.YG && i(Cu.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = E.useMemo(() => {
                    let e = [];
                    return (
                        e.push({
                            ...CE,
                            id: CE.value,
                            label: CE.label(),
                            leading: (0, A.jsx)("div", {
                                className: CA.KP,
                                children: (0, A.jsx)(Cc.p, {
                                    size: "sm",
                                    color: "white",
                                    "aria-hidden": !0,
                                    className: CA.cl,
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
                                    leading: (0, A.jsx)(dj.Ay, {
                                        className: CA.cl,
                                        guild: n,
                                        size: dj.Ay.Sizes.SMALLER,
                                        active: !0,
                                    }),
                                });
                        }),
                        e
                    );
                }, [l, s]),
                u = n === Cu.YG && r > 0;
            return (0, A.jsxs)(A.Fragment, {
                children: [
                    (0, A.jsx)(SF.Z, {
                        selectionMode: "single",
                        onSelectionChange: function (e) {
                            i(e);
                        },
                        value: n,
                        options: o,
                    }),
                    u &&
                        (0, A.jsx)(H.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: CA.h_,
                            children: R.intl.format(R.t.uyBKps, {
                                count: r,
                                countHook: (e, t) =>
                                    (0, A.jsx)(
                                        H.E,
                                        { tag: "span", variant: "text-sm/normal", color: "text-default", children: e },
                                        t,
                                    ),
                            }),
                        }),
                ],
            });
        },
    }),
    Cy = (0, d.E2)(c.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            return (0, Cd.Tx)() === Cu.YG && false;
        },
        Component: function () {
            return null;
        },
    }),
    Cv = (0, d.zZ)(c.X.PERMISSIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Y5GYcX),
        useSubnavLabel: () => R.intl.string(R.t.YUU0RF),
        useInlineNotice: function () {
            let e = _h(),
                t = NC();
            if ((0, Cd.Tx)() === Cu.YG) return e ?? t;
        },
        buildLayout: () => [Cb, Cx, CC, Cy],
    }),
    Cj = (0, d.zZ)(c.X.SPAM_FILTERS_CATEGORY, { useTitle: () => R.intl.string(R.t.Qwuoic), buildLayout: () => [NJ] }),
    CO = (0, d.zZ)(c.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = Nf();
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
                let { sortedGames: e } = Nf();
                return E.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, A.jsx)("img", {
                                src: O.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: AW.CD,
                                height: AW.CD,
                            }),
                            shape: AW.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, A.jsx)("img", {
                                    src: O.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: AW.YP,
                                    height: AW.YP,
                                }),
                                shape: AW.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: m.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [R.intl.string(R.t.YpCiMt)],
        initialize: () => {
            EC.A.fetch();
        },
        buildLayout: () => [Np, Nx, NS, Ng],
    }),
    CL = (0, d.t_)(c.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => R.intl.string(R.t.Cz07t8),
        buildLayout: () => [NZ, Cj, Cv, N8, CO, Co],
    }),
    CR = (0, d.i4)(c.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.Cz07t8),
        icon: Nd.l,
        buildLayout: () => [CL],
    });
var CD = n(782603),
    CP = n(899847),
    CG = n(695515);
let CU = (0, d.Hn)(c.X.MOBILE_NOTIFICATION_DELAY, {
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
    CM = (0, d.zD)(c.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => R.intl.string(R.t["btbS+Z"]),
        useSubtitle: () =>
            R.intl.format(R.t.Q5crhR, { onClick: () => (0, nl.openUserSettings)(c.X.TTS_PLAYBACK_RATE) }),
        useValue: L.on.useSetting,
        setValue: L.on.updateSetting,
    }),
    CV = (0, d.Qx)(c.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.JZxxGx),
        useSubtitle: () => R.intl.string(R.t.HDLtJl),
        useValue: () => (0, h.bG)([aI.A], () => aI.A.getTTSType()),
        setValue: (e) => ay.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: R.intl.string(R.t.B1AGeJ), value: S.aVn.ALL_CHANNELS },
                { name: R.intl.string(R.t.uzZg9e), value: S.aVn.SELECTED_CHANNEL },
                { name: R.intl.string(R.t.DYO5Oi), value: S.aVn.NEVER },
            ];
        },
        usePredicate: () => w.$j,
    }),
    Ck = c.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    Cw = (0, d.bd)(Ck, {
        useTitle: (e) => (e ? R.intl.string(R.t.RyimDk) : R.intl.string(R.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return tA(Ck, {
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
        buildLayout: () => [CU, CM, CV],
    }),
    CF = (0, d.zZ)(c.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => R.intl.string(R.t["31DySj"]),
        buildLayout: () => [Cw],
    }),
    CB = (0, d.zD)(c.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => R.intl.string(R.t.VH8AIJ),
        useSubtitle: () => R.intl.string(R.t["9K4qwX"]),
        useValue: function () {
            return (0, h.bG)([aI.A], () => !aI.A.getDisableUnreadBadge());
        },
        setValue: (e) => ay.default.setDisableUnreadBadge(!e),
    }),
    Cz = (0, d.zZ)(c.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.l6w3Vj),
        buildLayout: () => [CB],
    });
var CX = n(840559),
    CY = n(997187);
let CH = (0, Et.mj)({
    kind: "user",
    name: "2026-09-update-email-settings-copy-subtext",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var CK = n(723923);
let CW = CK.px.map((e) =>
        (0, d.zD)(`${c.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, h.cf)([CY.A], () => CY.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, CX.CA)(e.category, t),
        }),
    ),
    CZ = (0, d.Tf)(c.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => R.intl.string(R.t.Ra9Pwk),
        useSubtitle: () => R.intl.string(R.t.iYjQ8X),
        useLabel: () => R.intl.string(R.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, h.cf)([CY.A], () => CY.A.getEmailSettings());
            return CK.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, CX.NI)(),
        useVariant: () => "critical-secondary",
    }),
    Cq = (0, d.zZ)(c.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => R.intl.string(R.t["w/qqKK"]),
        useSubtitle: function () {
            let { enabled: e } = CH.useConfig({ location: "Email Settings Category" });
            return e ? R.intl.string(R.t.WViBDk) : void 0;
        },
        initialize: function () {
            let { initialized: e } = CY.A.getEmailSettings();
            e || (0, CX.cR)();
        },
        buildLayout: () => [...CW, CZ],
    }),
    CQ = (0, d.zD)(c.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t["/0WCll"]),
        useSubtitle: () => R.intl.string(R.t.wF9ih3),
        useValue: function () {
            return (0, h.bG)([aI.A], () => aI.A.getDesktopType()) !== S.nRU.NEVER;
        },
        setValue: (e) => ay.default.setDesktopType(e ? S.nRU.ALL : S.nRU.NEVER),
    });
var CJ = n(832712),
    C$ = n(543465),
    C0 = n(790782);
let C1 = (0, d.zD)(c.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => R.intl.string(R.t["k6m/si"]),
    useSubtitle: () => R.intl.string(R.t.LGynPs),
    useValue: () => (0, h.bG)([C$.Ay], () => C$.Ay.useNewNotifications),
    setValue: function (e) {
        (CJ.A.setAccountFlag(A5.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (m7.w.set("turnedOffNewNotifications", !0),
                tt.default.track(S.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: lh.A.getGuildsArray().filter(
                        (e) => C$.Ay.resolveGuildUnreadSetting(e) === C0.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, h.bG)(
            [si.default, C$.Ay],
            () =>
                si.default.getCurrentUser()?.isStaff() ||
                si.default.getCurrentUser()?.isStaffPersonal() ||
                C$.Ay.useNewNotifications,
        ),
});
var C2 = n(534654);
let C3 = (0, d.zD)(c.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => R.intl.string(R.t.z9h8Ym),
        useSubtitle: () => R.intl.string(R.t.TummoQ),
        useValue: () => (0, h.bG)([aI.A], () => aI.A.screenDowntimeReminder),
        setValue: (e) => ay.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, C2.A)(),
                t = (0, Ip.Du)();
            return e && t;
        },
    }),
    C6 = (0, d.zD)(c.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => R.intl.string(R.t.onrAy7),
        useSubtitle: () => R.intl.string(R.t["/071J7"]),
        useValue: L.gY.useSetting,
        setValue: (e) => L.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, C2.A)(),
                t = (0, Ip.Du)();
            return e && t;
        },
    }),
    C5 = (0, d.zD)(c.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.NjOMvh),
        useValue: L.oz.useSetting,
        setValue: function (e) {
            (L.oz.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A5.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [R.intl.string(R.t.hi4dSk)],
    }),
    C4 = (0, d.zD)(c.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.sQQgFj),
        useValue: L.NR.useSetting,
        setValue: function (e) {
            (L.NR.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A5.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    C8 = (0, d.zD)(c.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.FSNIvs),
        useValue: L.Yh.useSetting,
        setValue: function (e) {
            (L.Yh.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A5.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    C7 = (0, d.zD)(c.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.xBLMhQ),
        useValue: L.T3.useSetting,
        setValue: function (e) {
            (L.T3.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A5.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
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
            (L.Qr.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A5.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    bn = (0, Et.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    bi = (0, d.zD)(c.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.G8NPz6),
        useValue: L.zS.useSetting,
        setValue: function (e) {
            (L.zS.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A5.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
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
        useValue: () => (0, h.bG)([aI.A], () => aI.A.taskbarFlash),
        setValue: (e) => ay.default.setTaskbarFlash(e),
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
        let e = a_.A.useHolidaySoundpack();
        return null == e ? "" : R.intl.format(R.t["E/OyBr"], { soundpack: R.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, h.bG)([bo.A], () => bo.A.getSoundpack()),
            t = a_.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = a_.A.getHolidaySoundpack();
        (ta()(null != t, "predicate should fail if no soundpack is available"), (0, ba.p)(e ? t : bu.i.CLASSIC));
    },
    usePredicate: a_.A.useIsEligible,
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
        useSubtitle: () => R.intl.format(R.t.OOiGCM, { onClick: () => aO("message3") }),
        useValue: () =>
            (0, h.bG)([aI.A], () => aI.A.getNotifyMessagesInSelectedChannel() && !aI.A.getDisableAllSounds()),
        setValue: (e) => ay.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, h.bG)([aI.A], () => aI.A.getDisableAllSounds()),
    }),
    bE = (0, d.zD)(c.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => R.intl.string(R.t["2ZhCOd"]),
        useSubtitle: () => R.intl.string(R.t.EAKdPr),
        useValue: () => (0, h.bG)([aI.A], () => aI.A.getDisableAllSounds()),
        setValue: (e) => ay.default.toggleDisableAllSounds(e),
    }),
    bh = (0, d.D1)(c.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                aj();
            };
        },
        buildLayout: () => [aL(bg), bA, aL(bm), bE],
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
            null != CG.A.getAgeGroup() || CG.A.isLoading() || (CG.A.canRefetch() && CP.Ay.initialPageLoad());
        },
        buildLayout: () => [br, bp, Cz, Cq, CF],
    }),
    bf = (0, d.i4)(c.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.HcoRu0),
        icon: CD.BellIcon,
        buildLayout: () => [bx],
    }),
    bI = (0, d.WI)(c.X.USER_SECTION, {
        useTitle: () => R.intl.string(R.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [IV, Nu, CR, bf, _o],
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
            e ? (0, la.openModal)((e) => (0, A.jsx)(bb.A, { ...e })) : bN.cL();
        },
    }),
    bv = (0, d.zD)(c.X.DEVELOPER_MODE, {
        useTitle: () => R.intl.string(R.t.ObIb1Q),
        useSubtitle: () => R.intl.format(R.t["CY6q/Q"], { apiDocsUrl: S.X7G.API_DOCS }),
        useValue: L.Q_.useSetting,
        setValue: L.Q_.updateSetting,
        usePredicate: () => uO.p5,
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
    bU = (0, d.Hr)({ buildLayout: () => [xI, bI, mf, a4, SJ, AY, bG], analyticsKey: "user_settings" });
