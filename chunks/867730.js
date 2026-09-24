n.d(t, { D: () => yh });
var i,
    s,
    l,
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
    x = n(346055),
    p = n(297264),
    T = n(364522),
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
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, C.rh)({ ...(0, b.Ay)({ channelId: P.id, content: e }), state: S.cmJ.SENT, reactions: t });
}
var U = n(856488);
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
    Y = n(331322),
    X = n(299163),
    H = n(834730),
    K = n(113494),
    W = n(782134),
    Z = n(54570),
    q = n(8880),
    Q = n(75804);
let $ = B().debounce((e) => {
    (0, Z.zU)(e);
}, 250);
function J() {
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
            return (0, A.jsxs)(Y.B, {
                gap: 16,
                children: [
                    (0, A.jsx)(X.A, {
                        label: R.intl.string(R.t.lsW5Ev),
                        description: R.intl.string(R.t.Ci4wMS),
                        markers: Q.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: $,
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
                    (0, A.jsx)(J, {}),
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
var es = n(955572);
let el = (0, d.zD)(c.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => R.intl.string(R.t.OCJg5f),
    useSubtitle: () => R.intl.string(R.t.HEO0s3),
    useValue: () => (0, h.bG)([N.Ay], () => N.Ay.desaturateUserColors),
    setValue: () => (0, es.YV)(),
});
var er = n(652525);
let ea = (0, d.zD)(c.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => R.intl.string(R.t["+Isihb"]),
        useSubtitle: () => R.intl.string(R.t.nNZ1Tz),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.enableCustomCursor),
        setValue: (e) => (0, es.ts)(e),
        usePredicate: () => (0, er.t)("EnableCustomCursorSetting"),
    }),
    eo = (0, d.zD)(c.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => R.intl.string(R.t["S3z+pV"]),
        useSubtitle: () => R.intl.string(R.t["3QuI9+"]),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isSwitchIconsEnabled),
        setValue: (e) => (0, es.Gm)(e),
        hasIcon: !0,
    });
var eu = n(554146);
let ed = (0, d.zD)(c.X.HIGH_CONTRAST_MODE, {
    useTitle: () => R.intl.string(R.t.aZlePv),
    useSubtitle: () => R.intl.string(R.t["v2qF8+"]),
    useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isHighContrastModeEnabled),
    setValue: (e) => (0, es.uh)(e ? N._1.HIGH : N._1.DEFAULT),
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
            (0, es.FU)(e);
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
        setValue: (e) => (0, es.w_)(e),
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
        setValue: (e) => (0, es.IX)(e),
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
    setValue: (e) => (0, es.IX)(e),
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
    asValueChanges: (e) => (0, es.HU)(e),
});
var eS = n(964486),
    ex = n(839214),
    ep = n(502229),
    eT = n(975571);
let ef = (0, ex.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    eI = (0, d.zD)(c.X.SYNC_FORCED_COLORS, {
        useTitle: () => R.intl.string(R.t.cguiec),
        useSubtitle: () => R.intl.format(R.t.GwEVE2, { learnMoreLink: eT.A.getArticleURL(S.MVz.FORCED_COLORS) }),
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
                ((0, es.D3)(e), ef.setState({ updateTimeout: null }));
            }, 150);
            ef.setState({ syncEnabled: e, updateTimeout: n });
        },
        usePredicate: () => (0, ep.D)(),
    }),
    e_ = (0, d.zZ)(c.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => R.intl.string(R.t.JqvyiY),
        buildLayout: () => [eh, el, ed, ea, eI, em, eE, eA, eo, ei],
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
        useSubtitle: () => R.intl.format(R.t.XqvxJc, { helpdeskArticle: eT.A.getArticleURL(S.MVz.REDUCED_MOTION) }),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
        setValue: (e) => (0, es.qz)(e ? "reduce" : "no-preference"),
    }),
    eR = (0, d.zD)(c.X.SYNC_REDUCED_MOTION, {
        useTitle: () => R.intl.string(R.t.oL55A6),
        useValue: () => (0, h.bG)([N.Ay], () => "auto" === N.Ay.rawPrefersReducedMotion),
        setValue: (e) => (0, es.qz)(e ? "auto" : N.Ay.systemPrefersReducedMotion),
    }),
    eD = (0, d.zZ)(c.X.MOTION_CATEGORY, {
        useTitle: () => R.intl.string(R.t.e3TR1b),
        buildLayout: () => [eL, eR, ev, ey, eO],
    });
var eP = n(688810),
    eG = n(259065),
    eM = n(701974);
let eU = (0, d.zD)(c.X.DISPLAY_NAME_STYLES, {
    useTitle: () => R.intl.string(eM.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, eP.Ay)();
        return R.intl.format(eM.default.aEax6P, {
            onClickOpenModal() {
                (0, eG.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, h.bG)([N.Ay], () => N.Ay.displayNameStylesEnabled),
    setValue: (e) => (0, es.Dm)(e),
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
        asValueChanges: (e) => (0, es.XS)(e),
    }),
    ew = (0, d.zD)(c.X.UNDERLINE_LINKS, {
        useTitle: () => R.intl.string(R.t.OLZFB8),
        useSubtitle: () => R.intl.string(R.t.DIX3ke),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.alwaysShowLinkDecorations),
        setValue: (e) => (0, es.kI)(e),
    }),
    eF = (0, d.zZ)(c.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t["bxh/R7"]),
        buildLayout: () => [ek, ew, eU],
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
    eY = "cozy",
    eX = "compact",
    eH = (0, d.Qx)(c.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => R.intl.string(R.t.nKRoPv),
        useSubtitle: () => R.intl.string(R.t.QntEEG),
        useSearchTerms: () => [R.intl.string(R.t.ZEoGMd)],
        useOptions: () => [
            { name: R.intl.string(R.t.Jqj4cZ), value: eY },
            { name: R.intl.string(R.t["1JNcPS"]), value: eX },
        ],
        useValue: () => (L.hH.useSetting() ? eX : eY),
        setValue: (e) => {
            (L.hH.updateSetting(e === eX), (0, es.AC)());
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
                (0, es.AC)(e);
        }
    },
});
var eq = n(775121),
    eQ = n(723702);
let e$ = (0, d.sN)(c.X.APPEARANCE_ZOOM, {
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
        setValue: (e) => (0, es.Qp)(e),
        useSearchTerms: () => [R.intl.string(R.t.ip0uSf)],
    }),
    eJ = (0, d.zZ)(c.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.VKYWk8),
        buildLayout: () => [ez, eH, eZ, e$],
    }),
    e0 = (0, d.t_)(c.X.ACCESSIBILITY_PANEL, {
        useTitle: () => R.intl.string(R.t.G0neg7),
        buildLayout: () => [eF, eJ, e_, eD, et],
        decoration: {
            type: m.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = L.hH.useSetting(),
                    t = L.jW.useSetting(),
                    n = E.useMemo(
                        () => [
                            M(
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
                            M(R.intl.formatToPlainString(R.t["4rDfgM"], { link: "https://discord.com/accessibility" })),
                        ],
                        [t],
                    ),
                    i = (0, h.bG)([N.Ay], () => N.Ay.messageGroupSpacing);
                return (0, A.jsx)(x.M, {
                    children: (0, A.jsxs)("section", {
                        "aria-label": R.intl.string(R.t.RC22qg),
                        children: [
                            (0, A.jsx)(p.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: D.Vf,
                                children: R.intl.string(R.t.RC22qg),
                            }),
                            (0, A.jsxs)(T.Ip, {
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
        useMenu: U.A,
        buildLayout: () => [e0],
    });
n(321073);
var e2 = n(650809),
    e3 = n(477782),
    e5 = n(636537),
    e6 = n(228366),
    e4 = n(74396),
    e8 = n(93055),
    e7 = n(269880),
    e9 = n(55619),
    te = n(351906),
    tt = n(174459),
    tn = n(812993),
    ti = n(189081);
let ts = (0, d.zD)(c.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, h.bG)([ti.A], () => ti.A.hasLibraryApplication()),
        useTitle: () => R.intl.string(R.t.fi3UQN),
        useSubtitle: () => R.intl.string(R.t["8mYp37"]),
        useValue: () => !L.l_.useSetting(),
        setValue: (e) => L.l_.updateSetting(!e),
    }),
    tl = (0, d.zZ)(c.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => R.intl.string(R.t["8/udY0"]),
        buildLayout: () => [ts],
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
    let { useTitle: t, settingKey: n, formatter: i, index: s } = e,
        l = t();
    return "string" == typeof l ? i({ title: l, index: s, key: n }) : l;
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
    let { visibleDirectory: s, accessibleDirectory: l } = (0, to._)(),
        r = s.get(e) ?? l.get(e);
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
        let s = Math.min(n, 3);
        if (t.length <= s)
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
        return 1 === s
            ? R.intl.format(R.t.O8vNbS, { settingOneHook: tg({ setting: t[0], formatter: i, index: 0 }) })
            : 2 === s
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
        setValue: (e) => (0, es.n8)({ appsButtonEnabled: e }),
    }),
    tS = {
        useTitle: () => R.intl.string(R.t["I/5LyL"]),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isSubmitButtonEnabled),
        setValue: () => (0, es.Xt)(),
    },
    tx = (0, d.zD)(c.X.ENABLE_SEND_BUTTON, tS),
    tp = (0, d.zD)(c.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...tS,
        usePredicate: () => !(0, tE.n)("EnableSendButtonOutsideExperiment"),
    }),
    tT = (0, d.zD)(c.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => R.intl.string(R.t.WggFoO),
        useSubtitle: () => R.intl.string(R.t.XpErGj),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, es.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, h.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    tf = (0, d.zD)(c.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => R.intl.string(R.t.YErWkD),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, es.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, h.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    tI = (0, d.zD)(c.X.ENABLE_GIF_BUTTON, {
        useTitle: () => R.intl.string(R.t.k7oNEz),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isGifButtonEnabled),
        setValue: (e) => (0, es.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, h.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    t_ = (0, d.zD)(c.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => R.intl.string(R.t.Ar0krj),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, es.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, h.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    tN = (0, d.Qx)(c.X.EXPRESSION_PICKER_FORMAT, {
        useTitle: () => R.intl.string(R.t.AxRAWt),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.expressionPickerFormat),
        setValue: (e) => (0, es.n8)({ expressionPickerFormat: e }),
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
        buildLayout: () => [tN, tT, tf, tI, t_],
    }),
    tb = (0, d.bd)(c.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? R.intl.string(R.t.IwVGQs) : R.intl.string(R.t.cFNDh5);
        },
        useCollapsedSubtitle: () => tA(c.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, tE.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [tx, th, tC],
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
    tM = n(792656),
    tU = n(830543),
    tV = n(785007),
    tk = n(806932),
    tw = n(915089),
    tF = n(10392),
    tB = n(82498),
    tz = n(174197),
    tY = n(202541);
let tX = (0, d.E2)(c.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [R.intl.string(R.t.gnwxvT)],
    Component: function () {
        let e = (0, tw.GV)(),
            { ref: t, ...n } = (0, tV._u)({ orientation: "horizontal", labelledBy: e }),
            i = (0, h.bG)([tP.A], () => tP.A.isUpsellPreview);
        return (
            (0, z.Ay)(() => {
                i &&
                    (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: tY.e.APP_ICON_UPSELL,
                        location_stack: [tL.A.USER_SETTINGS],
                    }),
                    (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, [tL.A.USER_SETTINGS], () =>
                        (0, tB.uq)(tY.e.APP_ICON_UPSELL),
                    ));
            }),
            (0, A.jsx)("div", {
                ...n,
                ref: t,
                children: (0, A.jsx)(Y.B, {
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
    ((0, tG.nf)(tG.HP.APP_ICON), (0, tU.default)());
}
function tK() {
    return (0, A.jsx)(tM.A, {
        subscriptionTier: tY.pe.TIER_2,
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
        buildLayout: () => [tX],
    }),
    tZ = (0, d.AK)(c.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.UDr3Iy),
        useSearchTerms: () => [R.intl.string(R.t.UDr3Iy)],
        destinationKey: c.X.ACCESSIBILITY_PANEL,
    }),
    tq = (0, d.gN)(c.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [tZ] });
var tQ = n(452027),
    t$ = n(193249),
    tJ = n(976860),
    t0 = n(16236),
    t1 = n(635233),
    t2 = n(749884),
    t3 = n(22277);
let t5 = eT.A.getArticleURL(S.MVz.FAVORITES_GUILD);
function t6() {
    let { analyticsLocations: e } = (0, eP.Ay)(tL.A.USER_SETTINGS_FAVORITES),
        t = E.useCallback(() => {
            ((0, t1.mv)("settings_page"), (0, tJ.uh)(S.YYv), (0, tU.default)());
        }, []);
    return (0, A.jsx)(eP.f5, {
        value: e,
        children: (0, A.jsx)(tQ.D, {
            label: R.intl.string(t3.default.OT1NK5),
            description: R.intl.format(t3.default.GR2KOG, { helpCenterLink: t5 }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, A.jsxs)(Y.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, A.jsx)(_.$, { variant: "secondary", text: R.intl.string(t3.default["7WwLnr"]), onClick: t }),
                    (0, A.jsx)(tM.A, {
                        subscriptionTier: tY.pe.TIER_2,
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
                ? (0, A.jsx)(t$.d, {
                      checked: t,
                      description: R.intl.format(t3.default.GR2KOG, { helpCenterLink: t5 }),
                      onChange: t0.kG,
                      label: R.intl.string(t3.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, A.jsx)(t6, {});
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
    ns = n(766075);
let nl = (0, d.zD)(c.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => R.intl.string(R.t.JgjNG3),
        useSubtitle: () => {
            if (!L.hH.useSetting())
                return R.intl.format(R.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, A.jsx)(
                            nn.Anchor,
                            {
                                onClick: () => (0, ns.openUserSettings)(c.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
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
        buildLayout: () => [t9, ne, nt, nr, na, nl, t4, tq],
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
    nx = n(588857),
    np = n(999834);
let nT = [],
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
                for (let [t, n] of Object.entries(nx.A))
                    null != n.streamerModeLabel &&
                        (null == n.predicate || n.predicate()) &&
                        e.push({ id: t, value: t, label: n.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, h.bG)([te.A], () => te.A.getSettings().disabledOverlayWidgets ?? nT);
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
        setValue: () => (0, es.M1)(),
    });
var nM = n(284016),
    nU = n(363195);
let nV = (0, d.zD)(c.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => R.intl.string(R.t["/B+kEV"]),
    useSearchTerms: () => [R.intl.string(R.t.Ksh3ik)],
    useValue: function () {
        return (0, h.bG)([nM.A], () => !1 !== nM.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        return (0, h.bG)([nU.A], () => nU.A.isSameAsDeviceThemeEnabled());
    },
    setValue: function (e) {
        var t;
        let n = nU.A.theme,
            i = nj.A.gradientPreset?.id ?? null,
            s = L.eh.getSetting()?.customUserThemeSettings != null;
        ((t = S.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            e6.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: s },
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
                                    (0, ns.openUserSettings)(c.X.SYNC_FORCED_COLORS);
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
                (e6.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                e5.Bo.get({ url: S.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        e6.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        e6.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => R.intl.string(R.t["iHH+ky"]),
        buildLayout: () => [nB, tW, no, tD, ng, nv, tl],
    }),
    nY = [
        { badgeType: m.Xi.NEW, dismissibleContent: eu.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: m.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eu.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, A.jsx)(tn.JI, { text: R.intl.string(R.t.y2b7CA) });
            },
        },
    ],
    nX = (0, d.i4)(c.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["iHH+ky"]),
        icon: e2.PaintPaletteIcon,
        useMenu: function () {
            let e,
                t,
                n,
                i = (0, e7.A)(),
                s =
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
                l =
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
                    null != s &&
                        e.push((0, A.jsx)(e3.rX, { label: R.intl.string(R.t.Ob7VMB), children: s }, "text-and-images")),
                    null != l && e.push((0, A.jsx)(e3.rX, { children: l }, "streamer-mode")),
                    e
                );
            }, [i, s, l]);
        },
        getDismissibleBadges: () =>
            (0, e8.ad)().isFreemium
                ? nY.filter((e) => {
                      let { dismissibleContent: t } = e;
                      return t !== eu.M.FAVORITES_GUILD_NEW_BADGE;
                  })
                : nY,
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
    n$ = n(314116),
    nJ = n(270003),
    n0 = n(939249),
    n1 = n(369606),
    n2 = n(320448),
    n3 = n(604121),
    n5 = n(725951),
    n6 = n(400492),
    n4 = n(669067),
    n8 = n(115063),
    n7 = n(754692),
    n9 = n(927018),
    ie = n(512599),
    it = n(532197),
    ii = n(403362),
    is = n(874486),
    il = n(503698),
    ir = n.n(il),
    ia = n(536637),
    io = n.n(ia),
    iu = n(58703),
    id = n(906688),
    ic = n(98705);
function ig(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, n9.vM)(t);
    if (null == i) return null;
    let s = null != n,
        { name: l, description: r, hideDescriptionUntilUnlock: a, onAction: o } = i,
        u = a && !s,
        d = s ? "text-strong" : "text-muted",
        c = s ? "text-default" : "text-muted",
        g = io()(n),
        m = null != o && s,
        E = m ? n0.D : "div";
    return (0, A.jsxs)(E, {
        className: ir()(ic.kL, m && ic.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, A.jsx)("div", {
                className: ic.zc,
                children: (0, A.jsx)(id.A, { achievementId: t, size: id.A.Sizes.SIZE_40, unlocked: s }),
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
                    (0, A.jsx)(H.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, A.jsx)(H.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var im = n(545744);
function iA(e) {
    let { onBackClick: t } = e,
        n = (0, h.bG)([is.A], () => is.A.getAllUnlockedAchievements()),
        i = E.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        s = E.useMemo(
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
            s.length > 0 &&
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
                            children: s.map((e) => (0, A.jsx)(ig, { achievementId: e.id }, e.id)),
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
let ix = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    ip = (0, F.range)(0, 11),
    iT = (0, F.range)(0, 2.25, 0.25),
    iI = (0, F.range)(1, 11),
    i_ = (0, F.range)(1, 26),
    iN = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function iC(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: s } = e,
        l = n.map((e) =>
            (0, A.jsx)(
                t$.d,
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
    return (0, A.jsx)(nJ.n, { label: R.intl.string(R.t.bWVN1D), children: l });
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
        s = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion);
    return (0, A.jsx)(t$.d, {
        label: R.intl.string(R.t.vuiXm9),
        description: R.intl.string(R.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            (e || (0, n7._)(n9.sn.DISABLE_POGGERMODE),
                e && (!n || s)
                    ? (0, n$.A)({
                          title: s ? R.intl.string(R.t["FxT+p0"]) : R.intl.string(R.t.TAZ4F9),
                          subtitle: s ? R.intl.string(R.t.gmixrx) : R.intl.string(R.t.jN3t3K),
                          confirmText: R.intl.string(R.t.JFfins),
                          onConfirm: () => i(s ? ix : { enabled: !0, warningSeen: !0 }),
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
                confettiSize: s,
                confettiEnabledLocations: l,
            },
            updateSettings: r,
        } = e,
        a = !t || !n;
    return (0, A.jsxs)(nJ.n, {
        label: R.intl.string(R.t.mqxwJO),
        children: [
            (0, A.jsx)(t$.d, {
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
                    (0, A.jsx)(X.A, {
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
                    (0, A.jsx)(X.A, {
                        disabled: a,
                        markers: i_,
                        stickToMarkers: !0,
                        minValue: i_[0],
                        maxValue: i_[i_.length - 1],
                        initialValue: s,
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
                settingsLocations: l,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function ij(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: s },
            updateSettings: l,
        } = e,
        r = !t || !n;
    return (0, A.jsxs)(nJ.n, {
        label: R.intl.string(R.t.Xz0ole),
        children: [
            (0, A.jsx)(t$.d, {
                label: R.intl.string(R.t.o3iV7B),
                description: R.intl.string(R.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => l({ combosEnabled: e }),
            }),
            (0, A.jsx)(t$.d, {
                label: R.intl.string(R.t["Ax+IoW"]),
                description: R.intl.string(R.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => l({ comboSoundsEnabled: e }),
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
                    (0, A.jsx)(X.A, {
                        disabled: r,
                        markers: ip,
                        stickToMarkers: !0,
                        minValue: ip[0],
                        maxValue: ip[ip.length - 1],
                        initialValue: s,
                        onValueChange: (e) => l({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function iO(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: s },
            updateSettings: l,
        } = e,
        r = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
        a = !t || !n || r;
    return (0, A.jsxs)(nJ.n, {
        label: R.intl.string(R.t.wVS5Sd),
        children: [
            (0, A.jsx)(t$.d, {
                label: R.intl.string(R.t.N004zO),
                description: r ? R.intl.string(R.t.GckHGw) : R.intl.string(R.t.Qq5W3v),
                checked: n && !r,
                disabled: !t || r,
                onChange: (e) => l({ screenshakeEnabled: e }, 1),
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
                    (0, A.jsx)(X.A, {
                        disabled: a,
                        markers: iT,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: iT[0],
                        maxValue: iT[iT.length - 1],
                        initialValue: i,
                        onValueChange: (e) => {
                            var t;
                            (null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, n7._)(n9.sn.MORE),
                                l(t, 1));
                        },
                        onMarkerRender: (e) => (e === iT[iT.length - 1] ? R.intl.string(R.t["4rbMWc"]) : `${100 * e}%`),
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
                settingsLocations: s,
                onChange: (e) => l({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function iL(e) {
    let { updateSettings: t } = e;
    return (0, A.jsx)(nJ.n, {
        label: R.intl.string(R.t.EuXv2q),
        children: (0, A.jsxs)(Y.B, {
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
                            (t({ enabled: !1, settingsVisible: !1 }), (0, tU.default)());
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
        [s, l] = E.useState({ x: 0, y: 0 }),
        r = (0, iE.A)();
    function a(e, t) {
        var l, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === i.enabled &&
                (n(!0),
                (0, n6.Ak)("poggermode_enabled"),
                (0, n8.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? i.shakeIntensity })),
            (0, ie.O9)(e),
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
        1 === t && E && (0, n8.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
    }
    function o(e) {
        l({ x: e.clientX, y: e.clientY });
    }
    return (
        E.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, A.jsxs)(Y.B, {
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
    return 0 === e ? n5.f.LEFT : n5.f.RIGHT;
}
let iM = (0, d.E2)(c.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = E.useState(0),
                [n, i] = E.useState(iG(e)),
                [s, l] = E.useState(!1),
                r = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
                a = s && !r;
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
                        (0, A.jsx)(n5.A, {
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
                            })(e, t, l),
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
                                onComplete: () => l(!1),
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
    iU = (0, d.zZ)(c.X.POGGERMODE_CATEGORY, { buildLayout: () => [iM] });
var iV = n(212043);
let ik = (0, d.t_)(c.X.POGGERMODE_PANEL, { useTitle: () => R.intl.string(R.t.AtCukI), buildLayout: () => [iU] }),
    iw = (0, d.i4)(c.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.AtCukI),
        icon: () => (0, A.jsx)("img", { alt: "", src: n(724405), className: iV.$ }),
        usePredicate: () => (0, h.bG)([nq.A], () => nq.A.settingsVisible),
        buildLayout: () => [ik],
    });
var iF = n(307301),
    iB = n(410767),
    iz = n(683071),
    iY = n(97260),
    iX = n(695366),
    iH = n(812729),
    iK = n.n(iH),
    iW = n(587895),
    iZ = n(429913),
    iq = n(616356),
    iQ = n(952818);
function i$(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function iJ() {
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
        [n] = (0, iZ.A)([i$(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var i0 = n(769015),
    i1 = n(25578),
    i2 = n(935671),
    i3 = n(435075);
function i5(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, A.jsx)("div", {
              className: i3.zc,
              children: (0, A.jsx)(iX.E, { size: "sm", color: nQ.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, A.jsxs)("div", {
              className: i3.nt,
              children: [
                  (0, A.jsx)(i0.A, { game: n, pid: t.pid, size: i0.M.MEDIUM }),
                  (0, A.jsx)("div", {
                      className: i3.Am,
                      children: (0, A.jsx)(iX.E, { size: "sm", color: nQ.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function i6(e) {
    let t = (0, h.bG)([i1.Ay], () => i1.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = iJ();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let s = (0, i2.NP)(),
        l = s && null != n && t === S.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: n, runningGameApplication: i };
}
function i4(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: s, runningGameApplication: l } = i6(n);
    return i
        ? (0, A.jsxs)("div", {
              className: ir()(i3.kL, t),
              children: [
                  (0, A.jsx)(i5, { game: s, application: l }),
                  (0, A.jsxs)("div", {
                      className: i3.FS,
                      children: [
                          (0, A.jsx)(H.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? R.intl.string(R.t.vxfv7v)
                                      : null != s
                                        ? R.intl.string(R.t.fAYU2G)
                                        : R.intl.string(R.t["9V4X/c"]),
                          }),
                          (0, A.jsx)(H.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: R.intl.format(R.t["/y6htt"], {
                                  helpCenterLink: eT.A.getArticleURL(S.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, A.jsx)(_.$, {
                      variant: "secondary",
                      size: "sm",
                      text: R.intl.string(R.t["1iI46O"]),
                      onClick: function () {
                          (0, i2.sL)(n + (null != s ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var i8 = n(404778),
    i7 = n(691885),
    i9 = n(408278),
    se = n(241326),
    st = n(866665),
    sn = n(140735),
    si = n(489718),
    ss = n(635242),
    sl = n(350535),
    sr = n(189213),
    sa = n(192308),
    so = n(95477),
    su = n(320989),
    sd = n(978263);
let sc = [];
var sg = n(235986),
    sm = n(484734),
    sA = n(734057),
    sE = n(808728),
    sh = n(71393),
    sS = n(967198),
    sx = n(926140),
    sp = n(847893);
function sT() {}
let sf = [sx.rD.VOICE_CHANNEL];
function sI(e) {
    (e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0));
}
function s_() {
    return (0, A.jsx)("div", {
        className: sp.i1,
        children: (0, A.jsx)(H.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: sp.GN,
            children: R.intl.string(R.t.zHjCd1),
        }),
    });
}
function sN(e) {
    let { keybind: t, className: n } = e,
        i = E.useRef(t);
    E.useEffect(() => {
        i.current = t;
    });
    let [s, l] = E.useState(t.params?.channelId ?? void 0),
        r = E.useCallback(() => {
            (0, sa.openModalLazy)(
                async () => (e) =>
                    (0, A.jsx)(sC, {
                        ...e,
                        onSelect: (e) => {
                            (l(e), iY.A.setKeybind({ ...i.current, params: { channelId: e } }));
                        },
                    }),
            );
        }, []);
    return (0, A.jsx)("div", {
        className: ir()(sp.a8, n),
        children: (0, A.jsx)(tQ.D, {
            label: R.intl.string(R.t.q4JpM8),
            children: (0, A.jsxs)(sg.A, {
                align: sg.A.Align.STRETCH,
                children: [
                    (0, A.jsx)("div", { className: sp.$X, children: (0, A.jsx)(sb, { channelId: s }) }),
                    (0, A.jsx)(sg.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, A.jsx)(_.$, { variant: "primary", text: R.intl.string(R.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function sC(e) {
    let t,
        n,
        { transitionState: i, onClose: s, onSelect: l } = e,
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
                    autocompleterBeforeCreateSearchContext: s,
                } = e,
                [l, r] = E.useState(""),
                [a, o] = E.useState(sc),
                u = E.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(sc) : o(e);
                }, []);
            E.useEffect(
                () =>
                    su.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = E.useState(() => new sd.A(u, n, void 0, i));
            return (
                E.useEffect(() => {
                    t ? (s?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, s]),
                {
                    queryResults: a,
                    query: l,
                    updateQuery: E.useCallback(
                        (e) => {
                            (r(e), d.search(e));
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: sf, autocompleterBeforeCreateSearchContext: sI }),
        c =
            ((t = "" !== o),
            (n = (0, h.yK)(
                [sE.Ay, sA.A, sS.A],
                () => {
                    let e = sS.A.getGuildId();
                    if (t || null == e) return [];
                    let n = [];
                    for (let t of sE.Ay.getVocalChannelIds(e)) {
                        let e = sA.A.getChannel(t);
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
        x = (() => {
            if (null != c) return c[g]?.id;
            let e = d[g];
            if (e?.type === sx.rD.VOICE_CHANNEL) return e.record.id;
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
                                  if (e?.type === sx.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? sA.A.getChannel(n.parent_id) : void 0,
                              r = sh.A.getGuild(n.guild_id);
                          return (0, A.jsx)(
                              sm.c3,
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
                                      null != r ? (0, A.jsx)("div", { className: sp.J5, children: r.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, A.jsx)(s_, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, A.jsx)(sr.Modal, {
        transitionState: i,
        onClose: s,
        title: R.intl.string(R.t.Dm8O4e),
        subtitle: R.intl.string(R.t.q4JpM8),
        actions: void 0,
        input: (0, A.jsx)(so.k, {
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
                                if (e?.type === sx.rD.VOICE_CHANNEL) return e.record;
                            })();
                            (null == e ? l(void 0) : l(e.id), s());
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
            "aria-activedescendant": S > 0 && null != x ? x : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: p,
    });
}
function sb(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: s,
        } = (0, h.cf)([sA.A, sh.A], () => {
            let e = null != t ? sA.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? sA.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? sh.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, A.jsx)(H.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: sp.GN,
              children: R.intl.string(R.t["/fYIK7"]),
          })
        : (0, A.jsx)(sm.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: sT,
              onFocus: sT,
              onMouseEnter: sT,
              focused: !1,
              children: null != s ? (0, A.jsx)("div", { className: sp.J5, children: s.name }) : null,
          });
}
var sy = n(650583),
    sv = n(94451);
function sj(e) {
    let { keybind: t } = e,
        n = sl.dI(t.shortcut);
    return eq.A.hasBind(n)
        ? (0, A.jsx)("div", {
              className: sv.$e,
              children: (0, A.jsx)(iz.w, { type: "warning", children: R.intl.string(R.t["7lQlw3"]) }),
          })
        : sy.Yy.has(n)
          ? (0, A.jsx)("div", {
                className: sv.$e,
                children: (0, A.jsx)(iz.w, {
                    type: "warning",
                    children: R.intl.format(R.t.MOIaNd, {
                        keyboardNavArticle: eT.A.getArticleURL(S.MVz.KEYBOARD_NAVIGATION),
                    }),
                }),
            })
          : void 0;
}
function sO(e) {
    let { keybind: t } = e;
    return t.action === S.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, A.jsx)(sN, { keybind: t, className: sv._M }) : null;
}
let sL = E.memo(function (e) {
    let { keybind: t, keybindDescriptions: n, keybindActionTypes: i } = e,
        s = E.useCallback((e) => iY.A.setKeybind({ ...t, action: e }), [t]),
        l = E.useCallback((e) => iY.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = E.useCallback(() => iY.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = E.useCallback(() => iY.A.deleteKeybind(t.id), [t.id]),
        o = E.useId(),
        u = E.useMemo(() => i.find((e) => e.value === t.action)?.label ?? t.action, [t.action, i]);
    return (0, A.jsxs)("div", {
        className: sv.f_,
        children: [
            (0, A.jsx)(sj, { keybind: t }),
            (0, A.jsx)("div", {
                className: sv.XI,
                children: (0, A.jsx)(i7.l, {
                    selectionMode: "single",
                    label: R.intl.string(R.t.XH5b12),
                    value: t.action,
                    options: i,
                    onSelectionChange: s,
                    disabled: t.managed,
                }),
            }),
            (0, A.jsx)("div", {
                className: sv.LE,
                children: (0, A.jsx)(tQ.D, {
                    label: R.intl.string(R.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, A.jsx)(ss.A, { defaultValue: t.shortcut, onChange: l }),
                }),
            }),
            (0, A.jsxs)("div", {
                className: sv.ne,
                children: [
                    !t.managed &&
                        (0, A.jsx)(i9.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: se.TrashIcon,
                            "aria-label": R.intl.string(R.t.qEHmmB),
                        }),
                    (0, A.jsx)(st.m, {
                        text: R.intl.string(t.enabled ? R.t.pNYGbx : R.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, A.jsxs)("div", {
                            children: [
                                (0, A.jsx)(sn.A, {
                                    id: o,
                                    children: R.intl.format(t.enabled ? R.t["myr/Y0"] : R.t.lYhtPO, { actionName: u }),
                                }),
                                (0, A.jsx)(si.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, A.jsx)(H.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: sv.h_,
                children: n[t.action],
            }),
            (0, A.jsx)(sO, { keybind: t }),
        ],
    });
});
var sR = n(696760),
    sD = n(734066),
    sP = n(880144),
    sG = n(614455),
    sM = n(532624),
    sU = n(731854),
    sV = n(603933);
let sk = function () {
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
            } = ((e = (0, h.bG)([sM.Ay], () => sM.Ay.getState())),
            (t = (0, h.bG)([i1.Ay], () => (0, sP.A)(i1.Ay))),
            (n = (0, h.bG)([i1.Ay], () => i1.Ay.supports(sU.O5.VIDEO))),
            (i = (0, h.bG)([sG.A], () => sG.A.isSupported)),
            (s = (0, sD.sw)()),
            (l = (0, sD.BW)()),
            {
                customizableKeybinds: (function (e) {
                    let { keybinds: t, enableClips: n, enableScreenshotKeybind: i, allowSoundboard: s } = e;
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
                        .reject((e) => !s && (e.action === S.hCu.SOUNDBOARD || e.action === S.hCu.SOUNDBOARD_HOLD))
                        .sortBy((e) => e.id)
                        .sortBy((e) => (!0 === e.managed ? -1 : 0))
                        .value();
                })({
                    keybinds: e,
                    enableClips: s,
                    enableScreenshotKeybind: l,
                    allowSoundboard: (r = (0, eQ.isWindows)()),
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
                            s &&
                                a.push(
                                    { id: "soundboard", value: S.hCu.SOUNDBOARD, label: R.intl.string(R.t.yPH4xm) },
                                    {
                                        id: "soundboard-hold",
                                        value: S.hCu.SOUNDBOARD_HOLD,
                                        label: R.intl.string(R.t["1xFbP/"]),
                                    },
                                ),
                            l &&
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
                            s &&
                                ((r[S.hCu.SAVE_CLIP] = R.intl.string(R.t.z3Wbam)),
                                l && (r[S.hCu.SAVE_SCREENSHOT] = R.intl.string(R.t.m0zd57)))),
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
            ? (0, A.jsx)(H.E, { variant: "text-sm/normal", color: "text-subtle", children: R.intl.string(R.t.vyYgWp) })
            : (0, A.jsx)("div", {
                  className: sV.A,
                  children: a.map((e, t) =>
                      (0, A.jsxs)(
                          E.Fragment,
                          {
                              children: [
                                  (0, A.jsx)(sL, { keybind: e, keybindDescriptions: o, keybindActionTypes: u }),
                                  t < a.length - 1 ? (0, A.jsx)(i8.c, { className: sV.y, gap: 24 }) : null,
                              ],
                          },
                          e.id,
                      ),
                  ),
              });
    },
    sw = (0, d.E2)(c.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["069nVT"])],
        Component: function () {
            return nm.Av
                ? (0, A.jsx)(sk, {})
                : (0, A.jsx)(iz.w, {
                      type: "info",
                      children: R.intl.format(R.t.mPi3F3, { downloadLink: S.X7G.DOWNLOAD }),
                  });
        },
    });
var sF = n(475358),
    sB = n(28647),
    sz = n(793650);
function sY(e) {
    let { children: t } = e;
    return t([sR.Q_.MESSAGE, sR.Q_.NAVIGATION, sR.Q_.DND, sR.Q_.CHAT, sR.Q_.VOICE_AND_VIDEO, sR.Q_.MISCELLANEOUS]);
}
function sX(e) {
    let { showHeader: t = !0 } = e,
        n = B()((0, sR.Bx)())
            .filter((e) => e.description !== R.intl.string(R.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, A.jsxs)(Y.B, {
        gap: 48,
        children: [
            (0, A.jsx)(nJ.n, {
                label: t ? R.intl.string(R.t.Lz5KHI) : void 0,
                children: (0, A.jsx)("div", {
                    className: sz.jh,
                    children: (0, A.jsxs)("div", {
                        className: sz.yZ,
                        children: [
                            (0, A.jsx)(H.E, { variant: "text-md/normal", children: R.intl.string(R.t.sMWLBj) }),
                            (0, A.jsx)("div", {
                                className: sz.DM,
                                children: (0, A.jsx)(sF.e, { shortcut: sB.z.binds["0"], className: sz.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, A.jsx)(sY, {
                children: (e) =>
                    (0, A.jsx)(A.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, sR.Gm)(e),
                                s = (0, sR.zF)(e),
                                l = n[e];
                            return (0, A.jsx)(
                                nJ.n,
                                {
                                    label: i,
                                    description: s,
                                    children: (0, A.jsx)("div", {
                                        className: sz.jh,
                                        children: l.map((e, t) =>
                                            (0, A.jsxs)(
                                                E.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, A.jsx)(i8.c, {}),
                                                        (0, A.jsxs)("div", {
                                                            className: sz.yZ,
                                                            children: [
                                                                (0, A.jsx)(H.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, A.jsx)("div", {
                                                                    className: sz.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, A.jsx)(
                                                                            sF.e,
                                                                            { shortcut: e, className: sz.LE },
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
let sH = (0, d.E2)(c.X.DEFAULT_KEYBINDS_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.Lz5KHI)],
    Component: () => (0, A.jsx)(sX, { showHeader: !1 }),
});
var sK = n(19575),
    sW = n(546385);
let sZ = (0, d.E2)(c.X.HARDWARE_ACCELERATION, {
    usePredicate: () => nm.Av && !(0, nm.cX)(),
    useSearchTerms: () => [R.intl.string(R.t["/HIxyY"]), R.intl.string(R.t.B0hqpb)],
    Component: function () {
        let [e] = E.useState(() => sK.Ay.getEnableHardwareAcceleration()),
            t = R.intl.string(R.t["/HIxyY"]),
            n = R.intl.string(R.t.B0hqpb);
        return (0, A.jsxs)(Y.B, {
            children: [
                (0, A.jsx)(t$.d, { label: t, description: n, checked: e, onChange: sq }),
                !e && (0, A.jsx)(sW.A, { look: sW.k.WARNING, children: R.intl.string(R.t.j7S6IX) }),
            ],
        });
    },
});
function sq(e) {
    let t = e ? R.intl.format(R.t.LYXRxL, {}) : R.intl.format(R.t.uDP3Kz, {});
    (0, n$.A)({
        title: R.intl.string(R.t.aqpAvn),
        subtitle: t,
        confirmText: R.intl.string(R.t.vT7ckk),
        onConfirm: () => {
            sK.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let sQ = (0, ex.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function s$() {
    let e = await sK.Ay.getOpenOnStart(),
        t = await sK.Ay.getSetting("START_MINIMIZED", !1),
        n = await sK.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    sQ.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
}
let sJ = (0, d.zD)(c.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => R.intl.string(R.t["3BeZti"]),
        usePredicate: () => nm.Av && !(0, nm.cX)(),
        useValue: () => sQ.useState((e) => e.openOnStartup),
        setValue: function (e) {
            (sQ.setState({ openOnStartup: e }), sK.Ay.send("TOGGLE_OPEN_ON_STARTUP", e));
        },
        initialize: () => {
            sK.Ay.getOpenOnStart().then((e) => sQ.setState({ openOnStartup: e }));
        },
    }),
    s0 = (0, d.zD)(c.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => R.intl.string(R.t.dJ5MUh),
        useSubtitle: () => R.intl.string(R.t.nQavHr),
        usePredicate: () => nm.Av && !(0, nm.cX)(),
        useValue: () => sQ.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            (sQ.setState({ minimizeToTray: e }), sK.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e));
        },
        initialize: () => {
            sK.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => sQ.setState({ minimizeToTray: e }));
        },
    }),
    s1 = (0, d.zD)(c.X.OS_START_MINIMIZED, {
        useTitle: () => R.intl.string(R.t.GfBL83),
        useSubtitle: () => R.intl.string(R.t.XGyhhc),
        usePredicate: () => (0, nm.uF)(),
        useValue: () => sQ.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            (sQ.setState({ startMinimized: e }), sK.Ay.send("TOGGLE_START_MINIMIZED", e));
        },
        useDisabled: () => !sQ.useState((e) => e.openOnStartup),
        initialize: () => {
            sK.Ay.getSetting("START_MINIMIZED", !1).then((e) => sQ.setState({ startMinimized: e }));
        },
    });
var s2 = n(61628);
let s3 = new Set(["failure", "unknown"]),
    s5 = (0, d.E2)(c.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [R.intl.string(R.t.roHq80)],
        Component: function () {
            let [e, t] = E.useState(!1),
                [n, i] = E.useState(() => (0, i2.TC)()),
                s = (0, h.bG)([iQ.Ay], () => iQ.Ay.getSystemServiceStatus("input-service")),
                l = E.useCallback(async () => {
                    (t(!0),
                        n ? await (0, i2.z8)("windows-settings") : await (0, i2.sL)("windows-settings"),
                        t(!1),
                        i((0, i2.TC)()));
                }, [n]);
            return (0, A.jsxs)("div", {
                className: s2.q,
                children: [
                    (0, A.jsxs)("div", {
                        className: s2.L,
                        children: [
                            (0, A.jsxs)(Y.B, {
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
                                                        "running" === s.state
                                                            ? "text-feedback-positive"
                                                            : s3.has(s.state)
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
                                                    })(s),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: R.intl.format(R.t["8CAL+D"], {
                                    helpCenterLink: eT.A.getArticleURL(S.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                        ],
                    }),
                    (0, A.jsx)(_.$, {
                        variant: n ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: l,
                        text: n ? R.intl.string(R.t.pAwbdL) : R.intl.string(R.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: i2.XQ,
    });
var s6 = n(687813),
    s4 = n(562708),
    s8 = n(691540),
    s7 = n(97483);
async function s9() {
    try {
        await le();
    } catch {
        (0, s8.P0)({ id: "performance-trace-failed", type: s7.Ck.FAILURE, message: R.intl.string(R.t["8ihs9i"]) });
    }
}
async function le() {
    var e;
    let t = nh.A.tracing;
    if (null == t) return;
    (0, s8.P0)({ id: "performance-trace-capturing", type: s7.Ck.MESSAGE, message: R.intl.string(R.t.qGRW8d) });
    let [n, i, s] = await Promise.all([
            t.capturePerformanceTrace({ durationMs: 3e4 }),
            nh.A.processUtils.getSystemInfo(),
            nh.A.processUtils.getSystemMetrics(),
        ]),
        l = {
            captured_at: n.startedAtISO,
            duration_ms: n.durationMs,
            categories: n.categories,
            ...(0, s4.getSuperProperties)(),
            native_build_number: nh.A.app.getBuildNumber(),
        },
        r = {
            systemInfo: i,
            systemMetrics: s,
            cumulativeCpuUsage: nh.A.processUtils.getCumulativeCPUUsage() ?? null,
            processTypeCpuUsage: nh.A.processUtils.getCpuUsageElectronProcessTypeDetails() ?? null,
        },
        a = await ((e = {
            "trace.json": n.traceBytes,
            "system_info.json": (0, s6._u)(JSON.stringify(r, null, 2)),
            "metadata.json": (0, s6._u)(JSON.stringify(l, null, 2)),
        }),
        new Promise((t, n) => {
            (0, s6.yU)(e, { level: 6 }, (e, i) => (null != e ? n(e) : t(i)));
        })),
        o = `Discord-Trace-${n.startedAtISO.replace(/:/g, "-").replace(/\..*$/, "")}.zip`,
        { filePath: u } = await t.saveTraceToDownloads(a, o);
    (nh.A.fileManager.showItemInFolder(u),
        (0, s8.P0)({ id: "performance-trace-saved", type: s7.Ck.SUCCESS, message: R.intl.string(R.t.gpCRFS) }));
}
let lt = (0, d.Tf)(c.X.CAPTURE_PERFORMANCE_TRACE, {
    useTitle: () => R.intl.string(R.t.o6Qr6n),
    useSubtitle: () => R.intl.string(R.t.OuGtH8),
    useLabel: () => R.intl.string(R.t.bm1WjO),
    usePredicate: () => nm.Av && nh.A?.tracing?.capturePerformanceTrace != null,
    onClick: () => {
        (0, n$.A)({
            title: R.intl.string(R.t.o6Qr6n),
            subtitle: R.intl.string(R.t.JEHHJ1),
            confirmText: R.intl.string(R.t.bm1WjO),
            onConfirm: () => {
                ((0, tU.default)(), s9());
            },
        });
    },
});
function ln() {
    e6.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
var li = n(287809);
let ls = (0, d.Tf)(c.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, h.bG)([li.default], () => li.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        ln();
    },
});
var ll = n(114129),
    lr = n(442325),
    la = n(858760);
let lo = (0, d.zD)(c.X.ENABLE_TABS_EXPERIENCE, {
        useTitle: () => "Enable tabs experience",
        useSubtitle: () =>
            "Open channels as browser-style tabs in the title bar, each with its own back/forward history.",
        usePersistentBadge: () => ({ badgeType: m.Xi.BETA }),
        usePredicate: () => la.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, nm.xl)(),
        useValue: () => (0, h.bG)([lr.A], () => lr.A.isUserOptedIn()),
        setValue: ll.lj,
    }),
    lu = (0, d.zZ)(c.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => R.intl.string(R.t["8/udY0"]),
        buildLayout: () => [ls, lt, lo],
    }),
    ld = (0, d.zZ)(c.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => R.intl.string(R.t.cg6ltt),
        buildLayout: () => [sJ, s1, s0, sZ],
        usePredicate: () => nm.Av && ((0, nm.uF)() || (0, nm.j9)()),
        initialize: () => {
            s$();
        },
    }),
    lc = (0, d.zZ)(c.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["069nVT"]),
        useSubtitle: () => R.intl.string(R.t.T4LZVL),
        buildLayout: () => [sw],
        initialize: () => (iY.A.enableAll(!1), () => iY.A.enableAll(!0)),
        useInlineNotice: function () {
            return nm.Av
                ? {
                      type: m.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, A.jsxs)(Y.B, {
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
                              onClick: () => iY.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    lg = (0, d.zZ)(c.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Lz5KHI),
        buildLayout: () => [sH],
    }),
    lm = (0, d.zZ)(c.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => R.intl.string(R.t["+XZgmA"]),
        usePredicate: () => nm.Av && ((0, nm.uF)() || (0, nm.j9)()),
        buildLayout: () => [s5],
    }),
    lA = (0, d.t_)(c.X.SYSTEM_PANEL, {
        useTitle: () => R.intl.string(R.t["VJ/qKo"]),
        buildLayout: () => [ld, lc, lg, lm, lu],
    }),
    lE = (0, d.i4)(c.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["VJ/qKo"]),
        icon: iB.F,
        buildLayout: () => [lA],
    });
var lh = n(831544),
    lS = n(922795),
    lx = n(212245),
    lp = n(329551),
    lT = n(285918),
    lf = n(712711),
    lI = n(952572),
    l_ = n(382003);
let lN = (0, d.E2)(c.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.lZTUPs)],
        usePredicate: lI.A,
        Component: function () {
            let e = (0, lx.p)(),
                t = E.useRef(!1),
                n = (0, h.bG)([i1.Ay], () => i1.Ay.getVideoDeviceId()),
                [i, s] = E.useState((0, lp.i)(li.default.getCurrentUser())),
                l = E.useRef(i);
            return (
                E.useEffect(
                    () => () => {
                        t.current && (0, lT._C)(l.current);
                    },
                    [],
                ),
                (0, A.jsx)(l_.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: function (n) {
                        ((t.current = !0), (l.current = n), s(n), (0, lf.gB)(n, { location: e.location }).catch(S.tEg));
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    lC = (0, d.zD)(c.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => R.intl.string(R.t["3Ppr1h"]),
        useSubtitle: () => R.intl.string(R.t.WNbX4O),
        useValue: L.bm.useSetting,
        setValue: (e) => {
            (L.bm.updateSetting(e), tt.default.track(S.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
        },
    });
var lb = n(625841),
    ly = n(74848),
    lv = n(204050);
let lj = (0, ex.D)(() => ({ previewEnabled: !1 })),
    lO = (0, d.E2)(c.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.FsQ3OR)],
        Component: function () {
            let e = (0, h.bG)([i1.Ay], () => i1.Ay.isVideoAvailable()),
                { id: t } = (0, ly.x5)(sU.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, eP.Ay)();
            return (0, A.jsx)(lb.U, {
                label: R.intl.string(R.t.FsQ3OR),
                deviceType: sU.oh.VIDEO_INPUT,
                location: "UserSettingsCameraSelect",
                isDisabled: !e,
                helperText: (0, lv.p)()
                    ? R.intl.format(R.t.aJYgRt, {
                          onCameraSettingsClick: () => {
                              (lj.setState({ previewEnabled: !1 }),
                                  window.open((0, lv.i)(t)),
                                  tt.default.track(S.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n }));
                          },
                      })
                    : void 0,
            });
        },
    });
var lL = n(745317),
    lR = n(9219);
let lD = (0, d.E2)(c.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [R.intl.string(R.t.JIf4v7)],
        Component: function () {
            let e = i1.Ay.getCameraComponent(),
                t = (0, h.bG)([i1.Ay], () => i1.Ay.getVideoDeviceId()),
                n = lj.useField("previewEnabled"),
                i = (0, h.bG)([i1.Ay], () => i1.Ay.isVideoAvailable());
            return ((0, eS.l0)(() => {
                lj.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, A.jsx)("div", {
                      className: lR.T9,
                      children: (0, A.jsxs)("div", {
                          className: lR.Xi,
                          children: [
                              (0, A.jsxs)("div", {
                                  className: lR.UI,
                                  children: [
                                      (0, A.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, A.jsx)(lL.kE, {}),
                                  ],
                              }),
                              (0, A.jsx)(lL.eK, {}),
                          ],
                      }),
                  })
                : (0, A.jsx)("div", {
                      className: lR.T9,
                      children: (0, A.jsx)(st.m, {
                          text: i ? null : R.intl.string(R.t["8jSzSe"]),
                          children: (0, A.jsx)(_.$, {
                              variant: "primary",
                              text: R.intl.string(R.t.JIf4v7),
                              onClick: () => lj.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    lP = (0, d.zZ)(c.X.CAMERA_CATEGORY, {
        useTitle: () => R.intl.string(R.t.uje3P9),
        usePredicate: () => (0, h.bG)([i1.Ay], () => i1.Ay.supports(sU.O5.VIDEO)),
        buildLayout: () => [lD, lC, lO, lN],
    });
var lG = n(827343);
let lM = (0, d.zD)(c.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => R.intl.string(R.t.qFphsa),
        useSubtitle: () => R.intl.string(R.t.cQfwyY),
        usePredicate: function () {
            return (0, nm.j9)();
        },
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            (lG.A.setOpenH264Enabled(e),
                (0, n$.A)({
                    title: R.intl.string(R.t["9jf31O"]),
                    subtitle: R.intl.string(R.t["J2wg+X"]),
                    confirmText: R.intl.string(R.t.BddRzS),
                    onConfirm: () => nh.A.app.relaunch(),
                }));
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    lU = (0, d.zD)(c.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => R.intl.string(R.t["r6K+TL"]),
        useSubtitle: () => R.intl.string(R.t["xl9+I6"]),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getAecDump());
        },
        setValue: lG.A.setAecDump,
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.isAecDumpSupported());
        },
    });
var lV = n(139033),
    lk = n(862482),
    lw = n(640238),
    lF = n(825484),
    lB = n(144009),
    lz = n(487329),
    lY = n(353835);
let lX = (0, ex.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function lH() {
    let e = await nh.A.fileManager.getLogPath();
    nh.A.fileManager.showItemInFolder(e);
}
function lK(e) {
    (0, n$.A)({
        title: R.intl.string(R.t["7UXEF2"]),
        subtitle: R.intl.string(R.t.IYPrRl),
        confirmText: R.intl.string(R.t.BddRzS),
        onConfirm: () => lG.A.setDebugLogging(e),
    });
}
async function lW(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        (await i1.Ay.getMediaEngine().writeAudioDebugState(),
            await lY.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, lB.a)(S.Umv.RTC),
            (e = R.intl.string(R.t["fKBB8+"])),
            (t = R.intl.string(R.t.BvyxE7)),
            (0, lV.A)({ title: e, subtitle: t }));
    } catch (l) {
        var i;
        let e, t, n, s;
        ((i = l.displayMessage),
            (e = R.intl.string(R.t.QZg0J7)),
            (t = i ?? R.intl.string(R.t.VzHcSm)),
            (n = (0, lz.B1)(lz.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = R.intl.formatToPlainString(R.t.ejOT95, { errorCode: n })),
            (0, sa.openModal)((n) =>
                (0, A.jsx)(lw.a, {
                    header: e,
                    confirmButtonColor: lk.$n.Colors.BRAND,
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
async function lZ() {
    await lW({
        onUploadStart: () => lX.setState({ isUploading: !0 }),
        onUploadFinish: () => lX.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let lq = (0, d.E2)(c.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [R.intl.string(R.t["726JHL"]), R.intl.string(R.t.EbwFfR), R.intl.string(R.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, h.bG)([i1.Ay], () => i1.Ay.supports(sU.O5.DEBUG_LOGGING));
        return nm.Av && e && null != nh.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, h.bG)([i1.Ay], () => i1.Ay.getDebugLogging()),
            t = lX.useField("isUploading"),
            n = lX.useField("isDisabled"),
            i = E.useId();
        return (0, A.jsxs)("fieldset", {
            children: [
                (0, A.jsx)(sn.A, { tag: "legend", id: i, children: R.intl.string(R.t["FjN+et"]) }),
                (0, A.jsxs)(Y.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, A.jsx)(t$.d, {
                            label: R.intl.string(R.t["726JHL"]),
                            description: R.intl.string(R.t["/7ak9Q"]),
                            checked: e,
                            onChange: lK,
                        }),
                        (0, A.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, A.jsxs)(lF.e, {
                                children: [
                                    (0, A.jsx)(_.$, {
                                        variant: "secondary",
                                        text: R.intl.string(R.t.EbwFfR),
                                        onClick: lZ,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": R.intl.string(R.t.aY1OH2),
                                    }),
                                    (0, A.jsx)(_.$, {
                                        variant: "secondary",
                                        text: R.intl.string(R.t.nuPtYi),
                                        onClick: lH,
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
var lQ = n(233545),
    l$ = n(412780);
function lJ() {
    return (0, h.bG)([li.default, i1.Ay], () => {
        let e = li.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === sK.Ay.releaseChannel || "development" === sK.Ay.releaseChannel,
            i = i1.Ay.supports(sU.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let l0 = (0, d.zD)(c.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => R.intl.string(R.t.U4FgFK),
        useSubtitle: () => R.intl.string(R.t.Lm72RU),
        useValue: function () {
            return (0, h.bG)([l$.Ay], () => l$.Ay.shouldRecordNextConnection());
        },
        setValue: lQ.Et,
        usePredicate: lJ,
    }),
    l1 = (0, d.Tf)(c.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => R.intl.string(R.t.nJnOHO),
        useLabel: () => R.intl.string(R.t["3xjX0U"]),
        onClick: lQ.YW,
        usePredicate: lJ,
    });
var l2 = n(926919),
    l3 = n(111162),
    l5 = n(855302);
let l6 = (0, d.zD)(c.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => R.intl.string(R.t["0CEP6e"]),
        useSubtitle: () => R.intl.string(R.t["kBXuW+"]),
        useValue: function () {
            return (0, h.bG)([l3.default], () => l3.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = l3.default.isStreamInfoOverlayEnabled;
            ((0, l5.A)("stream_info_overlay_enabled", e, t), (0, l2.x)({ isStreamInfoOverlayEnabled: e }));
        },
        usePredicate: function () {
            return L.Q_.useSetting();
        },
    }),
    l4 = (0, d.bd)(c.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? R.intl.string(R.t["/B4I8H"]) : R.intl.string(R.t.BTlsWH)),
        useCollapsedSubtitle: () => R.intl.string(R.t.la1Ys4),
        buildLayout: () => [l6, lU, l0, l1, lq],
    });
function l8(e, t, n) {
    (0, n$.A)({ title: e, subtitle: t, confirmText: R.intl.string(R.t.BddRzS), onConfirm: n });
}
let l7 = (0, d.Tf)(c.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => R.intl.string(R.t.SXfv1v),
        useSubtitle: () => R.intl.string(R.t["buA5/q"]),
        useLabel: () => R.intl.string(R.t.yBZMsQ),
        onClick: function () {
            l8(R.intl.string(R.t["4iKQ/3"]), R.intl.string(R.t.sQ42iT), lG.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    l9 = (0, d.zZ)(c.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.UDAU9K),
        buildLayout: () => [lM, l4, l7],
    });
var re = n(736056),
    rt = n(360729),
    rn = n(446243),
    ri = n(558076),
    rs = n(270103);
let rl = (0, d.zD)(c.X.GUILD_ROOMS_REMEMBER_LAST_VIEW_SETTING, {
        useTitle: () => R.intl.string(rs.default.qYzpsI),
        useSubtitle: () => R.intl.string(rs.default["+vMoL1"]),
        useValue: () => (0, h.bG)([ri.A], () => ri.A.getRememberVideoOverlayVisibility()),
        setValue: (e) => (0, rn.Ft)(e),
    }),
    rr = (0, d.zZ)(c.X.GUILD_ROOMS_CATEGORY, {
        useTitle: () => R.intl.string(rs.default.wRLmM0),
        usePredicate: function () {
            let e = (0, h.yK)([sh.A], () => sh.A.getGuildIds()),
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
        buildLayout: () => [rl],
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
            lG.A.setAutomaticGainControl(e, { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO });
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
            lG.A.setAttenuation(e, i1.Ay.getAttenuateWhileSpeakingSelf(), i1.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => i1.Ay.getAttenuation(),
    }),
    rA = (0, d.zD)(c.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => R.intl.string(R.t["9dHxRY"]),
        useValue: () => (0, h.bG)([i1.Ay], () => i1.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => lG.A.setAttenuation(i1.Ay.getAttenuation(), e, i1.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rE = (0, d.zD)(c.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => R.intl.string(R.t.SMt0Gr),
        useValue: () => (0, h.bG)([i1.Ay], () => i1.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => lG.A.setAttenuation(i1.Ay.getAttenuation(), i1.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    rh = (0, d.FW)(c.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.oSdBvW),
        useSubtitle: () => R.intl.string(R.t["0A/8Rt"]),
        usePredicate: () => (0, h.bG)([i1.Ay], () => i1.Ay.supports(sU.O5.ATTENUATION)),
        buildLayout: () => [rm, rA, rE],
    }),
    rS = (0, d.zD)(c.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => R.intl.string(R.t.DFPXIG),
        useSubtitle: () => R.intl.string(R.t["UyRX+C"]),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            lG.A.setBypassSystemInputProcessing(e);
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
            ((0, l5.A)("switch_channel_warning_enabled", e, !eg.Ay.disableVoiceChannelChangeAlert),
                ni.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e }));
        },
    }),
    rp = (0, d.zD)(c.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
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
            lG.A.setMode(t, { vadUseKrisp: e });
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
    rT = (0, d.Hn)(c.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => R.intl.string(R.t.wVBHr0),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            l8(R.intl.string(R.t.uY7AcQ), R.intl.string(R.t.gBqik6), () => lG.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, h.cf)([i1.Ay], () => ({
                legacyAudioSubsystemSupported: i1.Ay.supports(sU.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: i1.Ay.supports(sU.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: i1.Ay.supports(sU.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return E.useMemo(() => {
                let i;
                return (
                    (i = [{ id: sU.rB.STANDARD, value: sU.rB.STANDARD, label: R.intl.string(R.t.dqb2JZ) }]),
                    e && i.push({ id: sU.rB.LEGACY, value: sU.rB.LEGACY, label: R.intl.string(R.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: sU.rB.EXPERIMENTAL, value: sU.rB.EXPERIMENTAL, label: R.intl.string(R.t.liQmtr) }),
                    n && i.push({ id: sU.rB.AUTOMATIC, value: sU.rB.AUTOMATIC, label: R.intl.string(R.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    rf = (0, d.zD)(c.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => R.intl.string(R.t.uancuJ),
        useSubtitle: () => R.intl.string(R.t.I1Eoqq),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getQoS());
        },
        setValue: function (e) {
            lG.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.supports(sU.O5.QOS));
        },
    }),
    rI = (0, d.zD)(c.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => R.intl.string(R.t["4rsOPQ"]),
        useSubtitle: () => R.intl.string(R.t.jtiiCw),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            lG.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return eQ.isPlatformEmbedded;
        },
    }),
    r_ = (0, d.bd)(c.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? R.intl.string(R.t.KHsSWK) : R.intl.string(R.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            tA(c.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, h.bG)([i1.Ay], () => i1.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [rg, rp, rS, rc, rI, rx, rh, rT, rf],
    }),
    rN = (0, d.zD)(c.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => R.intl.string(R.t.iWTwu6),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            lG.A.setEchoCancellation(e, { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO });
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
var rC = n(459838),
    rb = n(451988),
    ry = n(475883),
    rv = n(9761);
let rj = (0, tw.Ld)();
function rO(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, A.jsx)("div", {
        role: "meter",
        className: ir()(ry.$I, n),
        id: i,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? R.intl.string(R.t.haLKZ0) : R.intl.string(R.t.X2hJL7),
        children: (0, A.jsx)("div", { className: ir()(ry.Jx, ry.NU, { [ry.zY]: t && !r, [ry.r9]: r }) }),
    });
}
function rL(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, h.cf)([i1.Ay], () => ({
            threshold: i1.Ay.getModeOptions().threshold,
            autoThreshold: i1.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, h.bG)([i1.Ay], () => i1.Ay.getMode());
    return (0, A.jsx)("section", {
        className: ir()(ry.Mo, ry.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": s,
        children: (0, A.jsx)(X.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return ((t = -((100 - e) * 1)), void lG.A.setMode(o, { threshold: t, autoThreshold: a }));
            },
            barStyles: { background: nQ.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: nQ.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rj,
            disabled: l,
            children: (0, A.jsxs)("div", {
                className: ir()(ry.NU, ry.TL, ry.Jx, rv.bar),
                children: [
                    (0, A.jsx)("div", { className: ir()(ry.GS, ry.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, A.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let rR = (0, d.E2)(c.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [R.intl.string(R.t["sqUm+k"]), R.intl.string(R.t.I1Zuq0), R.intl.string(R.t.nuFtHH)],
    usePredicate: () => (0, h.bG)([i1.Ay], () => i1.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, h.cf)([i1.Ay], () => ({
                autoThreshold: i1.Ay.getModeOptions().autoThreshold,
                disabled: i1.Ay.getMode() !== sU.TB.VOICE_ACTIVITY,
            })),
            n = E.useCallback((e) => {
                let t = i1.Ay.getMode(),
                    { threshold: n } = i1.Ay.getModeOptions();
                lG.A.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, h.bG)([i1.Ay], () => i1.Ay.supports(sU.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = E.useState(-100),
                    [n, i] = E.useState(!1);
                function s(e, n) {
                    (t(e), i((n & sU.ME.VOICE) === sU.ME.VOICE));
                }
                return (
                    E.useEffect(() => {
                        let e = new rb.Ep();
                        return (
                            e.start(1e3, () => {
                                (i1.Ay.getMediaEngine().on(rC.bg.VoiceActivity, s), e.stop());
                            }),
                            () => {
                                (i1.Ay.getMediaEngine().removeListener(rC.bg.VoiceActivity, s), e.stop());
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
                        className: ry.B4,
                        children: (0, A.jsx)(iz.w, {
                            type: "warning",
                            children: R.intl.format(R.t["O13I+O"], { onEnableClick: () => lG.A.enable(!0) }),
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
                      (0, A.jsx)(sn.A, { tag: "legend", id: u, children: R.intl.string(R.t.GByLar) }),
                      (0, A.jsx)(sn.A, { id: d, children: o }),
                      (0, A.jsxs)(Y.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, A.jsx)(t$.d, {
                                  disabled: t,
                                  label: R.intl.string(R.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, A.jsx)(rO, {
                                        isSpeaking: l,
                                        className: ry.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, A.jsx)(rL, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, A.jsxs)(Y.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, A.jsx)(tQ.D, {
                          label: R.intl.string(R.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, A.jsx)(rO, {
                                        isSpeaking: l,
                                        className: ry.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, A.jsx)(rL, {
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
var rD = n(366010);
let rP = n(993830),
    rG = n(413142),
    rM = { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO };
function rU() {
    let e = (0, h.bG)([nU.A], () => (0, rD.q)(nU.A.theme));
    return (0, A.jsx)("img", { src: e ? rP : rG, width: 48, height: 32, alt: "" });
}
let rV = (0, d.E2)(c.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.t8Qhib), R.intl.string(R.t.hmfkCi)],
    usePredicate: function () {
        return (0, h.bG)([i1.Ay], () => i1.Ay.isInputProfileCustom() && i1.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = E.useCallback((e) => {
                (lG.A.setNoiseCancellation("KRISP" === e, rM), lG.A.setNoiseSuppression("STANDARD" === e, rM));
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: s,
            } = (0, h.cf)([i1.Ay], () => ({
                noiseCancellation: i1.Ay.getNoiseCancellation(),
                noiseSuppression: i1.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: i1.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: i1.Ay.isNoiseCancellationSupported(),
            })),
            l = E.useMemo(() => {
                let e = [];
                return (
                    s && e.push({ id: "krisp", label: R.intl.string(R.t.rdoNzt), value: "KRISP" }),
                    i && e.push({ id: "standard", label: R.intl.string(R.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: R.intl.string(R.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [s, i]),
            r = s
                ? R.intl.format(R.t["1q5aTp"], { helpArticle: eT.A.getArticleURL(S.MVz.NOISE_SUPPRESSION) })
                : R.intl.string(R.t.OWKjw5);
        return (0, A.jsxs)(Y.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, A.jsx)(i7.l, {
                    label: R.intl.string(R.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, A.jsx)(rU, {}),
            ],
        });
    },
});
var rk = n(934729),
    rw = n(621380);
let rF = !nm.Av;
function rB() {
    return (0, h.bG)([i1.Ay], () => i1.Ay.getMode() === sU.TB.PUSH_TO_TALK);
}
let rz = (0, d.zD)(c.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nm.Av ? R.intl.string(R.t.tG4Np5) : R.intl.string(R.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, h.bG)([i1.Ay], () => i1.Ay.getMode());
        return E.useMemo(() => {
            if (!nm.Av && e === sU.TB.PUSH_TO_TALK)
                return R.intl.format(R.t["VHI4+Y"], { onDownloadClick: () => (0, rk._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, h.bG)([i1.Ay], () => i1.Ay.getActiveInputProfile() !== rw.m.STUDIO);
    },
    useValue: function () {
        return (0, h.bG)([i1.Ay], () => i1.Ay.getMode() === sU.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        ((t = e ? sU.TB.PUSH_TO_TALK : sU.TB.VOICE_ACTIVITY),
            (i = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === sU.TB.PUSH_TO_TALK &&
                rF &&
                (0, sa.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("844331"), n.e("410919")]).then(n.bind(n, 556506));
                    return (t) =>
                        (0, A.jsx)(e, {
                            title: R.intl.string(R.t.Kdt0Gb),
                            confirmText: R.intl.string(R.t["1WjMbC"]),
                            cancelText: R.intl.string(R.t.BddRzS),
                            onConfirm: () => (0, rk._)("PTT Limited Modal"),
                            body: R.intl.string(R.t.NIozvt),
                            ...t,
                        });
                }),
            lG.A.setMode(t, void 0, void 0, { analyticsLocations: i }));
    },
    useSearchTerms: () => [R.intl.string(R.t["pS+K2L"]), R.intl.string(R.t.nuFtHH)],
});
var rY = n(484599);
let rX = (0, d.E2)(c.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["pS+K2L"]), R.intl.string(R.t.nuFtHH)],
        usePredicate: rB,
        Component: function () {
            let e = (0, h.bG)([i1.Ay], () => {
                    let { shortcut: e } = i1.Ay.getModeOptions();
                    return e;
                }),
                t = R.intl.format(R.t.HVvn5T, {
                    onClick: () => (0, ns.openUserSettings)(c.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, A.jsx)("div", {
                    className: rY.e,
                    children: (0, A.jsx)(ss.A, {
                        defaultValue: e,
                        onChange: (e) => lG.A.setMode(S.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    rH = (0, d.sN)(c.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => R.intl.string(R.t.GCNMM8),
        useSearchTerms: () => [R.intl.string(R.t["pS+K2L"]), R.intl.string(R.t.nuFtHH)],
        setValue: function (e) {
            lG.A.setMode(S.TBI.PUSH_TO_TALK, { delay: e });
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
        usePredicate: rB,
    });
var rK = n(844981),
    rW = n(943679);
function rZ() {
    return (0, rK.Ay)("VoiceSettings");
}
let rq = (0, d.zD)(c.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => R.intl.string(rW.default.LGDPhA),
        useSubtitle: function () {
            let e = rZ();
            if ((0, rK.Xt)(e))
                return e === rK.L3.BLOCKED_MONO_OUTPUT
                    ? R.intl.string(rW.default.rOXfEw)
                    : R.intl.string(rW.default.O7Aa3Y);
        },
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            lG.A.setSpatialAudio(e, [tL.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return rZ() !== rK.L3.HIDDEN;
        },
        useDisabled: function () {
            return (0, rK.Xt)(rZ());
        },
    }),
    rQ = (0, d.Qx)(c.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => R.intl.string(R.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, ro._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [R.intl.string(R.t.nuFtHH), R.intl.string(R.t.VZPR0R), R.intl.string(R.t.cjPbpT)],
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getActiveInputProfile() ?? rw.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lG.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, ro.d)({ location: "InputProfileCategory" });
            return [
                { value: rw.m.VOICE_ISOLATION, name: R.intl.string(R.t.cjPbpT), desc: R.intl.string(R.t.CzhvnE) },
                { value: rw.m.STUDIO, name: R.intl.string(R.t.VZPR0R), desc: R.intl.string(R.t.ZaJksS) },
                { value: rw.m.CUSTOM, name: R.intl.string(R.t["N/PQjv"]), desc: R.intl.string(R.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    r$ = (0, d.zZ)(c.X.VOICE_INPUT_PROFILE_CATEGORY, {
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
        buildLayout: () => [rQ, rR, rV, rN, rq, rz, rX, rH, r_],
    });
var rJ = n(403581),
    r0 = n(512950),
    r1 = n(983851),
    r2 = n(687021),
    r3 = n(128450),
    r5 = n(796774),
    r6 = n(209932),
    r4 = n(813564),
    r8 = n(984813),
    r7 = n(922016),
    r9 = n(305866),
    ae = n(22231),
    at = n(158045),
    an = n(792348),
    ai = n(674168),
    as = n(511558),
    al = n(817232),
    ar = n(647451);
function aa(e) {
    let { onSelect: t } = e,
        [n, i] = E.useState(!1),
        s = (0, h.bG)([li.default], () => li.default.getCurrentUser()),
        l = at.Ay.canUseCustomCallSounds(s),
        r = E.useRef(null);
    function a(e) {
        l && (i(!1), t?.(e));
    }
    return (0, A.jsx)(r7.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, A.jsx)(r9.l, {
                children: (0, A.jsx)(as.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, A.jsx)(ai.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, A.jsx)(al.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: R.intl.string(R.t.uOe0Az),
                children: (0, A.jsx)(ae.PencilIcon, { size: "md", color: "currentColor", className: ar.Wo }),
            }),
    });
}
function ao(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, an.A)(t, null),
        i =
            0 === (0, r4.wH)()
                ? R.intl.string(R.t.OASXjt)
                : R.intl.formatToPlainString(R.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, A.jsx)(al.dT, {
        onClick: n,
        text: i,
        children: (0, A.jsx)(r1.H, { size: "md", color: "currentColor", className: ar.wg }),
    });
}
function au(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, A.jsxs)("div", {
        className: ar.D6,
        children: [
            (0, A.jsxs)("div", {
                className: ar.kL,
                children: [
                    a && (0, A.jsx)(ty.A, { emojiId: l, emojiName: r, className: ar.Zg }),
                    (0, A.jsx)(H.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: ar.dj,
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
                    s
                        ? (0, A.jsx)(ao, { sound: t })
                        : (0, A.jsx)(r1.H, { size: "md", color: "currentColor", className: ar.Gk }),
                ],
            }),
            (0, A.jsxs)("div", {
                className: ar.kL,
                children: [
                    (0, A.jsx)(aa, { onSelect: i }),
                    s &&
                        !n &&
                        (0, A.jsx)(al.dT, {
                            onClick: () => i(null),
                            text: R.intl.string(R.t.jmtcGA),
                            children: (0, A.jsx)(se.TrashIcon, {
                                size: "md",
                                color: nQ.A.unsafe_rawColors.RED_400.css,
                                className: ar.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var ad = n(617617);
n(980504);
var ac = n(806050);
function ag(e) {
    return (0, h.bG)([r6.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return r6.A.getSound("0" === t ? "0" : t, n);
    });
}
function am(e) {
    let { guildId: t } = e,
        n = (0, h.bG)([ad.A], () => ad.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = ag(n);
    if (null == n || null == i) return null;
    let { emojiId: s, emojiName: l } = i,
        r = null != s || null != l;
    return (0, A.jsxs)("div", {
        className: ac.Io,
        children: [
            r
                ? (0, A.jsx)(ty.A, { emojiId: s, emojiName: l, className: ac.nW })
                : (0, A.jsx)(r1.H, { size: "md", color: "currentColor", className: ac.nW }),
            (0, A.jsx)(H.E, { className: ac.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let aA = (0, d.E2)(c.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, eP.Ay)(),
            [t, n] = E.useState("0"),
            i = (0, r8.mz)(t),
            s = ag(i),
            l = i?.type === r8.PP.GLOBAL,
            r = (0, h.bG)([r6.A], () => r6.A.hasFetchedAllSounds()) && null != i && null == s;
        (E.useEffect(() => {
            r && (0, r4.ND)({ location: e });
        }, [r, e]),
            E.useEffect(() => {
                (0, r5.E7)();
            }, []));
        let a = E.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, A.jsx)(am, { guildId: e.value }) : null;
        }, []);
        return (0, A.jsxs)(nJ.n, {
            label: R.intl.string(R.t.nzUc3B),
            description: R.intl.format(R.t.u9RWmv, { helpdeskArticle: eT.A.getArticleURL(S.MVz.SOUNDBOARD) }),
            children: [
                (0, A.jsx)(r2.A, {
                    guildId: t,
                    className: ac.Dt,
                    globalOption: { label: R.intl.string(R.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, A.jsxs)(r3.A, {
                    title: R.intl.format(R.t.I2TsYN, {
                        nitroWheelHook: () => (0, A.jsx)(rJ.t, { size: "md", color: "currentColor", className: ac.ax }),
                    }),
                    children: [
                        (0, A.jsx)(au, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (n) => {
                                null == n ? (0, r4.Dv)(t, e) : (0, r4.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, A.jsx)(r0.p, {
                                className: ac.lm,
                                messageType: r0.Y.WARNING,
                                children: R.intl.string(R.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var aE = n(824744);
let ah = (0, d.sN)(c.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => R.intl.string(R.t.kbFsAD),
    useSubtitle: () => R.intl.format(R.t.BPbGq7, { helpCenterArticle: eT.A.getArticleURL(S.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, aE.w)(e);
        (0, r5.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, r4.wH)();
        return (0, aE.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var aS = n(864145);
let ax = (0, d.sN)(c.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t["2JbvKw"]),
        useSubtitle: () => R.intl.string(R.t.INenzY),
        setValue: function (e) {
            let t = (0, aE.w)(e);
            L.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = L.HO.getSetting();
            return (0, aE.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, aS.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    ap = (0, d.zZ)(c.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => R.intl.string(R.t.ABjMWI),
        buildLayout: () => [ah, ax, aA],
    });
var aT = n(803224),
    af = n(552122);
let aI = (0, d.E2)(c.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [R.intl.string(R.t.fgSHf8)],
        usePredicate: () => null != af.A.useHolidaySoundpack(),
        Component: () =>
            (0, A.jsx)(H.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: R.intl.format(R.t.Eup6Wv, {
                    onClick: () => (0, ns.openUserSettings)(c.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    a_ = (0, d.AK)(c.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.eyGEE4),
        useSearchTerms: () => [R.intl.string(R.t.eyGEE4)],
        destinationKey: c.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    aN = (0, d.gN)(c.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [a_] });
var aC = n(264686);
let ab = (0, ex.D)(() => ({ currentPlayingSound: null }));
function ay() {
    let e = ab.getField("currentPlayingSound");
    (e?.stop(), ab.setState({ currentPlayingSound: null }));
}
function av(e) {
    let t = ab.getField("currentPlayingSound");
    t?.stop();
    let n = (0, n6.Ak)(e);
    ab.setState({ currentPlayingSound: n });
}
function aj(e) {
    return (0, d.zD)(`${c.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => R.intl.format(R.t.OOiGCM, { onClick: () => av(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, h.bG)([aT.A], () => aT.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = aT.A.getDisabledSounds().filter((t) => t !== e.sound);
            (t || n.push(e.sound), aC.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, h.bG)([aT.A], () => aT.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let aO = [
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
    aL = (0, d.D1)(c.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? R.intl.formatToPlainString(R.t["0JYT98"], { count: t })
                : R.intl.formatToPlainString(R.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => tA(c.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                ay();
            };
        },
        buildLayout: () => aO.map((e) => aj(e)),
    }),
    aR = (0, d.zZ)(c.X.SOUNDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, h.bG)([aT.A], () => aT.A.getDisableAllSounds());
            return E.useMemo(() => {
                if (e)
                    return {
                        type: m.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        text: R.intl.format(R.t.fRvixS, {
                            onClick: () => (0, ns.openUserSettings)(c.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                    };
            }, [e]);
        },
        buildLayout: () => [aL, aI, aN],
    }),
    aD = (0, d.zD)(c.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => R.intl.string(R.t.e3Zz3F),
        useSubtitle: () => R.intl.string(R.t.RztTjP),
        useValue: function () {
            return !L.uh.useSetting();
        },
        setValue: function (e) {
            ((0, l5.A)("stream_previews_disabled", !e, L.uh.getSetting(), [tL.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                L.uh.updateSetting(!e));
        },
    }),
    aP = (0, d.zD)(c.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => R.intl.string(R.t.GmWk2E),
        useSearchTerms: () => [R.intl.string(R.t["Fj/xn1"])],
        useSubtitle: () => R.intl.string(R.t["Fj/xn1"]),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getVideoHook());
        },
        setValue: lG.A.setVideoHook,
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.supportsVideoHook());
        },
    }),
    aG = (0, d.zD)(c.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => R.intl.string(R.t["4I0qzZ"]),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getExperimentalSoundshare());
        },
        setValue: lG.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => {
                let e = i1.Ay.supportsExperimentalSoundshare(),
                    t = i1.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    aM = (0, d.zD)(c.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => R.intl.string(R.t["/jwMtn"]),
        useSubtitle: () => R.intl.string(R.t.zlA23F),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lG.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return i1.Ay.supports(sU.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    aU = (0, d.sN)(c.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => R.intl.string(R.t.fhEzfj),
        setValue: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lG.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: i1.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, h.bG)([i1.Ay], () => i1.Ay.getSidechainCompression());
            return i1.Ay.supports(sU.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    aV = (0, d.zD)(c.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => R.intl.string(R.t.lt8rRx),
        useSubtitle: () => R.intl.string(R.t.ie1mgY),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, nm.cX)() && e
                ? (0, n$.A)({
                      title: R.intl.string(R.t["9jf31O"]),
                      subtitle: R.intl.string(R.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          (lG.A.setUseSystemScreensharePicker(e), nh.A.app.relaunch());
                      },
                      confirmText: R.intl.string(R.t.BddRzS),
                  })
                : lG.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.supportsSystemScreensharePicker() && (0, nm.cX)());
        },
    }),
    ak = (0, d.bd)(c.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? R.intl.string(R.t.qrMyvm) : R.intl.string(R.t.LEtTNl)),
        useCollapsedSubtitle: () => tA(c.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [aM, aU, aV, aG, aP],
    }),
    aw = (0, d.zZ)(c.X.STREAMING_CATEGORY, { useTitle: () => R.intl.string(R.t.KDdjou), buildLayout: () => [aD, ak] });
var aF = n(106713);
let aB = (0, d.E2)(c.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = aF.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, A.jsx)(lb.U, {
                label: R.intl.string(R.t.UTM8VP),
                deviceType: sU.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    az = (0, d.E2)(c.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = aF.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, A.jsx)(lb.U, {
                label: R.intl.string(R.t.xuYQ0n),
                deviceType: sU.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    aY = (0, d.zC)(c.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [aB, az] }),
    aX = (0, d.sN)(c.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = i1.Ay.getInputVolume();
            return (0, aE.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aE.w)(e);
            lG.A.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    aH = (0, d.sN)(c.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = i1.Ay.getOutputVolume();
            return (0, aE.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aE.w)(e);
            lG.A.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    aK = (0, d.zC)(c.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [aX, aH] });
var aW = n(702841),
    aZ = n(152567),
    aq = n(804037);
let aQ = `${eT.A.getArticleURL(S.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    a$ = (0, d.E2)(c.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.nuFtHH)],
        usePredicate: function () {
            return (0, aW.bG)([i1.Ay], () => i1.Ay.supports(sU.O5.LOOPBACK));
        },
        Component: function () {
            return (0, aW.bG)([i1.Ay], () => i1.Ay.supports(sU.O5.LOOPBACK))
                ? (0, A.jsx)(aZ.A, {
                      size: "md",
                      notchBackground: aZ.V.GRAY,
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
                                  className: aq.X,
                                  href: eT.A.getArticleURL(S.MVz.NO_INPUT_DETECTED),
                                  children: R.intl.string(R.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: R.intl.format(R.t["V+B3FH"], { guideURL: aQ }),
                      buttonTest: R.intl.string(R.t.gyljWE),
                      buttonStop: R.intl.string(R.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    aJ = eQ.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function a0(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, A.jsxs)(Y.B, {
        children: [
            n && (0, A.jsx)(i4, { sourcePage: "voice" }),
            t && (0, A.jsx)(sW.A, { look: sW.k.WARNING, children: R.intl.string(R.t.Ioz3gx) }),
        ],
    });
}
let a1 = (0, d.zZ)(c.X.VOICE_CATEGORY, {
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
                t = (0, ly.x5)(sU.oh.AUDIO_INPUT),
                n = (0, ly.x5)(sU.oh.AUDIO_OUTPUT),
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
                                  (0, A.jsx)(a0, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [aY, aK, a$],
    }),
    a2 = (0, d.t_)(c.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => R.intl.string(R.t.B1fFpf),
        buildLayout: () => [a1, r$, lP, aw, aR, ap, rr, l9],
    }),
    a3 = (0, d.i4)(c.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.B1fFpf),
        usePredicate: () => i1.Ay.isSupported(),
        icon: lh.MicrophoneIcon,
        useMenu: lS.A,
        buildLayout: () => [a2],
    }),
    a5 = (0, d.WI)(c.X.APP_SECTION, {
        useTitle: () => R.intl.string(R.t.gcyH1J),
        buildLayout: () => [a3, nX, e1, iw, lE, nZ],
    });
var a6 = n(360669),
    a4 = n(974544),
    a8 = n(423764),
    a7 = n(289873),
    a9 = n(132500),
    oe = n(465323),
    ot = n(37766),
    on = n(194261),
    oi = n(391048),
    os = n(277984),
    ol = n(99696),
    or = n(202613),
    oa = n(615405),
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
            s,
            l,
            { value: r, onChange: a } = this.props,
            o = this._inputRef;
        if (e === r || null == o || null == r) return;
        let u =
                ((i = (n = e.replace(oh, "").split("/"))[0]),
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
            ? (u = u.replace(oS, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t));
    };
    render() {
        return (0, A.jsx)(so.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var op = n(832208),
    oT = n(782328);
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
                        getClassNameForLayout: () => oT.ep,
                        renderInput: (e) => (0, A.jsx)(ox, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    oI = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: s } = e,
            [l, r] = E.useState(!1),
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
                formError: s,
                onFieldChange: function (e) {
                    (l || "" === e || r(!0),
                        (l && "" === e) || !(0, oE.So)(e) ? o(R.intl.string(R.t["9/zZdl"])) : o(null),
                        d(e));
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
            expiresMonth: t instanceof or.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof or.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        e6.h.wait(() => {
            ((0, os.ey)(), (0, os.tc)());
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
                ? (0, A.jsx)("div", {
                      className: oN.zc,
                      children: (0, A.jsx)(iz.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, A.jsx)("div", {
                  className: oN.zc,
                  children: (0, A.jsx)(iz.w, { type: "critical", children: e.message }),
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
            { billingAddressValid: i, expirationValid: s } = this.state;
        return (0, A.jsx)("div", {
            className: oN.AU,
            children: (0, A.jsxs)(Y.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, A.jsx)(lF.e, {
                        children: (0, A.jsxs)("div", {
                            className: oN.lH,
                            children: [
                                n
                                    ? (0, A.jsx)(st.m, {
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
                    (0, A.jsxs)(lF.e, {
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
                                disabled: !i || t || !s,
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
        let { paymentSource: e, isDefault: t, locale: n, className: i, isForSubscription: s } = this.props,
            { isDefault: l } = this.state,
            r = e instanceof or.SJ;
        return (0, A.jsx)(oc.Z, {
            editable: !0,
            className: ir()(oN.Nr, i),
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
                                isForSubscription: s,
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
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, oC),
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
let oy = h.Ay.connectStores([oa.A], () => ({ updateError: oa.A.editSourceError, removeError: oa.A.removeSourceError }))(
    ob,
);
var ov = n(986485),
    oj = n(849405),
    oO = n(329693);
function oL() {
    (0, ol.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, a9.A)() });
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
            isForSubscription: s,
            locale: l,
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
                  locale: l,
                  isForSubscription: s,
                  onSubmit: o,
                  onCancel: u,
                  onDelete: d,
              })
            : (0, A.jsxs)(A.Fragment, {
                  children: [
                      i ? null : (0, A.jsx)(i8.c, { className: oO.__invalid_sourceDivider }),
                      (0, A.jsxs)("div", {
                          className: oO.Yb,
                          children: [
                              (0, A.jsx)(o_.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: s,
                                  locale: l,
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
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: s, onRedeemClick: l } = e,
        [r, a] = E.useState(null),
        o = (0, h.bG)([li.default], () => li.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, h.bG)([oa.A], () => oa.A.ipCountryCode),
        d = E.useMemo(() => (0, oe.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        E.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : os.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, A.jsxs)(A.Fragment, {
            children: [
                n ? null : (0, A.jsx)(i8.c, { className: oO.__invalid_sourceDivider }),
                (0, A.jsxs)("div", {
                    className: oO.Yb,
                    children: [
                        void 0 !== t
                            ? (0, A.jsx)(o_.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, A.jsxs)(sg.A, {
                                  align: sg.A.Align.CENTER,
                                  children: [
                                      (0, A.jsx)(ot._, { size: "lg" }),
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
                                            ? (0, A.jsx)(a7.y, { type: a7.y.Type.SPINNING_CIRCLE })
                                            : (0, A.jsx)(H.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = (0, oe.$g)(e ?? 0, n, s, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${String(n).toUpperCase()} ${i}`;
                                                  })(),
                                              }),
                                }),
                                (0, A.jsx)(_.$, {
                                    variant: "secondary",
                                    onClick: l,
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
            (await os.Gr(e), this.setState({ editingPayment: e }));
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            (await os.JQ(e), this.setState({ editingPayment: null }));
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                (await os.Ps(e, t), this.setState({ editingPayment: null }));
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, oo.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, sa.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, A.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, oi.ET)();
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
                locale: s,
                removing: l,
                submitting: r,
                premiumSubscriptionPaymentSourceId: a,
                showGiftCards: o,
            } = this.props,
            u = B()
                .values(i)
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : ou.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof or.LQ)),
            c = u.filter((e) => e instanceof or.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            E = d.map((e, t) =>
                (0, A.jsx)(
                    oR,
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
                          (0, A.jsx)(
                              oD,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: oL,
                              },
                              e.id,
                          ),
                      )
                    : (0, A.jsx)(oD, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
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
                                          (0, A.jsx)(on.LockIcon, { size: "sm", className: oO.hz }),
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
var oG = n(459357),
    oM = n(295405),
    oU = n(166403),
    oV = n(773669),
    ok = n(943009);
function ow() {
    let e = (0, h.bG)([li.default], () => li.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, a8.Gw)(e.country) };
}
let oF = (0, d.E2)(c.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, h.bG)([oa.A], () => oa.A.isSyncing),
                i = (0, h.bG)([oM.A], () => oM.A.paymentSources),
                s = (0, h.bG)([oM.A], () => oM.A.defaultPaymentSourceId),
                l = (0, h.bG)([oV.default], () => oV.default.locale),
                r = (0, h.bG)([oU.A], () => oU.A.getPremiumTypeSubscription()),
                a = (0, h.bG)([oa.A], () => oa.A.isRemovingPaymentSource),
                o = (0, h.bG)([oa.A], () => oa.A.isUpdatingPaymentSource),
                { enabled: u } = (0, oG.c)({ location: "UserSettingsBilling" });
            return (E.useEffect(() => {
                (os.$o(), os.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, A.jsx)("div", { className: ok.o, children: (0, A.jsx)(a7.y, {}) })
                : (0, A.jsx)(oP, {
                      showHeader: t,
                      paymentSources: i,
                      defaultPaymentSourceId: s,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== S.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: l,
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
                                      (window.open("https://support.discord.com/hc/articles/39799791912087", "_blank"),
                                          e());
                                  },
                              },
                          ],
                      },
                  };
        },
        buildLayout: () => [oF],
    });
var oz = n(549363),
    oY = n(545075);
let oX = (0, d.E2)(c.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, h.bG)([oV.default], () => oV.default.locale);
            return (0, A.jsxs)(A.Fragment, { children: [(0, A.jsx)(oY.kb, {}), (0, A.jsx)(oz.A, { locale: e })] });
        },
        useSearchTerms: () => [R.intl.string(R.t.obLrcK)],
    }),
    oH = (0, d.zZ)(c.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.obLrcK),
        buildLayout: () => [oX],
    }),
    oK = (0, d.t_)(c.X.BILLING_PANEL, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        buildLayout: () => [oB, oH],
        useObscuredNotice: a4.L,
    }),
    oW = (0, d.i4)(c.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        icon: a6.B,
        buildLayout: () => [oK],
    });
var oZ = n(70283),
    oq = n(597770),
    oQ = n(682618),
    o$ = n(859492),
    oJ = n(962644),
    o0 = n(35587),
    o1 = n(86379);
let o2 = (0, d.E2)(c.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: oY.uK,
        usePredicate: () => (0, o1.Hp)(),
        useSearchTerms: () => [R.intl.string(R.t.vwMEHS)],
    }),
    o3 = (0, d.zZ)(c.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [o2] });
var o5 = n(982240),
    o6 = n(788833),
    o4 = n(914410),
    o8 = n(556427),
    o7 = n(573343);
let o9 = "UserSettingsGiftingBadgeProgress";
function ue(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, A.jsxs)("div", {
        className: ir()(o7.fO, { [o7.bF]: i }),
        children: [
            null != n && (0, A.jsx)("img", { src: n, alt: "", className: o7.si }),
            (0, A.jsxs)("div", {
                className: o7.tc,
                children: [
                    (0, A.jsx)(H.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, A.jsx)(H.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: R.intl.format(o8.default.qvx9E4, { count: (0, o5.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function ut(e) {
    let { tiers: t, currentTier: n } = e,
        i = (0, o$.b9)(o9);
    return (0, A.jsx)("div", {
        className: o7.dw,
        children: t.map((e) => (0, A.jsx)(ue, { tier: e, iconUrl: (0, o$.Se)(e, i), active: e.key === n?.key }, e.key)),
    });
}
function un(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, eP.Ay)(tL.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: s } = (0, o6.$)({
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
            onClick: s,
        }),
    });
}
function ui(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: s, giftsRemaining: l } = e,
        r = (0, o5.rL)(i),
        a = (0, o5.rL)(s),
        o = (0, o$.GZ)(n, i, s),
        u = (0, o$.b9)(o9),
        d = (0, o$.Se)(i, u),
        c = (0, o$.Se)(s, u);
    return (
        (t =
            null != s
                ? R.intl.formatToPlainString(o8.default.XTX3OO, { count: l, nextTier: s?.name ?? "" })
                : R.intl.formatToPlainString(o8.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, A.jsxs)("div", {
            className: o7.mY,
            children: [
                null != d &&
                    (0, A.jsx)("div", {
                        className: o7.fC,
                        children: (0, A.jsx)("img", { src: d, alt: "", className: o7.qS }),
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
                                threshold: null != s ? a : r,
                                count: null != s ? n : r,
                            }),
                        }),
                    ],
                }),
                null != c &&
                    (0, A.jsx)("div", {
                        className: o7.fC,
                        children: (0, A.jsx)("img", { src: c, alt: "", className: o7.qS }),
                    }),
            ],
        })
    );
}
function us(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: s,
            giftsRemaining: l,
            tiers: r,
        } = (0, h.cf)([o5.Ay], () => ({
            badgeProgress: o5.Ay.getSingleRequirementProgress(oZ.$.GIFTING)?.current ?? 0,
            currentTier: o5.Ay.getCurrentTier(oZ.$.GIFTING),
            nextTier: o5.Ay.getNextTier(oZ.$.GIFTING),
            giftsRemaining: o5.Ay.getRemainingToNextTier(oZ.$.GIFTING),
            tiers: o5.Ay.getBadgeById(oZ.$.GIFTING)?.tiers ?? [],
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
                                      (0, A.jsx)(ui, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: s,
                                          giftsRemaining: l,
                                      }),
                                      (0, A.jsx)("div", { className: o7.yF }),
                                  ],
                              }),
                          (0, A.jsx)(ut, { tiers: r, currentTier: i }),
                          (0, A.jsx)(H.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: o7.PJ,
                              children: R.intl.string(o8.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, A.jsx)(un, { analyticsLocation: t, location: o9 }),
              ],
          });
}
let ul = (0, d.zZ)(c.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => R.intl.string(o8.default.sFokBp),
        buildLayout: () => [ur],
        usePredicate: () => {
            let e = (0, o$.F5)("gift_inventory"),
                t = (0, h.bG)([o5.Ay], () => o5.Ay.getBadgeById(oZ.$.GIFTING));
            return e && null != t;
        },
    }),
    ur = (0, d.E2)(c.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [R.intl.string(o8.default.sFokBp)],
        Component: () => (0, A.jsx)(us, {}),
    });
var ua = n(264779),
    uo = n(412260),
    uu = n(555393),
    ud = n(725807),
    uc = n(212168),
    ug = n(469778),
    um = n(45938),
    uA = n(109802),
    uE = n(869038),
    uh = n(380856);
function uS(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, A.jsxs)(sg.A, {
        className: ir()(uh.wx, n),
        align: sg.A.Align.CENTER,
        children: [
            (0, A.jsx)("div", { className: uh.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function ux(e) {
    let { children: t, className: n } = e;
    return (0, A.jsx)("div", { className: ir()(uh.rf, n), children: t });
}
class up extends E.PureComponent {
    static Header = uS;
    static Body = ux;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, A.jsx)("div", { className: ir()(uh.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var uT = n(165191),
    uf = n(871123),
    uI = n(366523),
    u_ = n(280450),
    uN = n(30793),
    uC = n(97352),
    ub = n(67480),
    uy = n(147925),
    uv = n(957565),
    uj = n(615396),
    uO = n(274904);
class uL extends E.PureComponent {
    _copyModeTimeout = new rb.Ep();
    state = { copyMode: uA.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case uA.q.SUCCESS:
                return R.intl.string(R.t.XVvPjU);
            case uA.q.ERROR:
                return R.intl.string(R.t.i4GM3L);
            default:
                return R.intl.string(R.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        uE.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, um.AK)(t, n),
            (0, uv.C)(
                e,
                () => this.setState({ copyMode: uA.q.SUCCESS }),
                () => this.setState({ copyMode: uA.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: uA.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, A.jsxs)(sg.A, {
            direction: sg.A.Direction.VERTICAL,
            className: uO.Gj,
            children: [
                (0, A.jsx)(uA.e, {
                    className: uO.ph,
                    value: (0, um.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uv.p5,
                    hideMessage: e ? R.intl.string(R.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: lk.XD.BRAND,
                    buttonLook: lk.pR.FILLED,
                }),
                (0, A.jsxs)("div", {
                    className: uO.KB,
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
class uR extends E.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await uE.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && uE.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, uf.bF)(e)
            ? (0, A.jsx)(uI.e, { shape: "square", sku: e, containerClassName: uO.ez })
            : null != t
              ? (0, A.jsx)(uT.A, { giftStyle: t, className: uO.ez, shouldAnimate: this.state.isHovered })
              : (0, A.jsx)(i0.A, { game: n, size: i0.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, uf.bF)(e)
            ? (0, A.jsxs)("div", {
                  className: ir()(uO.Oc, uO.ic),
                  children: [
                      (0, A.jsx)(i0.A, { game: n, size: i0.M.XSMALL, skuId: e.id, className: uO._u }),
                      R.intl.format(R.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, A.jsx)("div", { className: uO.Oc, children: R.intl.format(R.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === tY.FB
                    ? R.intl.string(R.t.odsU6W)
                    : i === tY.Bu && null != n
                      ? R.intl.formatToPlainString(n.interval === tY.WT.MONTH ? R.t.uZjpiJ : R.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : R.intl.formatToPlainString(n.interval === tY.WT.MONTH ? R.t.rCJvqo : R.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, A.jsx)("div", { className: uO.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, A.jsxs)(sg.A, {
            justify: sg.A.Justify.BETWEEN,
            align: sg.A.Align.CENTER,
            className: uO.pe,
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
                sku: s,
                isFetching: l,
                hideCodes: r,
            } = this.props,
            { isOpen: a } = this.state;
        return (0, A.jsxs)(up, {
            className: i,
            children: [
                (0, A.jsx)(n0.D, {
                    onClick: this.handleToggleOpen,
                    className: uO.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, A.jsx)(up.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, A.jsxs)("div", {
                            className: uO.MY,
                            children: [
                                (0, A.jsxs)(sg.A, {
                                    align: sg.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, A.jsxs)("div", {
                                            className: uO.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, A.jsx)(uy.A, {
                                    direction: a ? uy.A.Directions.UP : uy.A.Directions.DOWN,
                                    className: uO.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, A.jsx)(up.Body, {
                          children: l
                              ? (0, A.jsx)(a7.y, { className: uO.u1 })
                              : (0, A.jsxs)(E.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, A.jsx)(uL, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let uD = h.Ay.connectStores([ub.A, te.A, uN.A, iW.A, uC.A, u_.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        s = ub.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = uN.A.getForGifterSKUAndPlan(u_.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: te.A.enabled,
        isFetching: uN.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: uN.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: iW.A.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, uj.c9)(n) : null,
        giftCodes: l,
    };
})(uR);
var uP = n(725570),
    uG = n(736653),
    uM = n(46054);
let uU = io().duration(30, "days");
var uV = n(416052),
    uk = n(878309);
function uw(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, A.jsx)(sr.Modal, {
        title: "",
        size: "md",
        input: (0, A.jsx)("div", { className: uk.aR }),
        onClose: async () => await t(),
        actions: [{ text: R.intl.string(R.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, A.jsxs)("div", {
            className: uk.t4,
            children: [
                (0, A.jsx)(p.D, { variant: "heading-xl/semibold", children: R.intl.string(R.t.iufib1) }),
                (0, A.jsx)(H.E, { variant: "text-md/normal", className: uk.G3, children: R.intl.string(R.t.eAn6z2) }),
            ],
        }),
    });
}
let uF = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: s, transitionState: l } = e,
        [r, a] = E.useState(null),
        o = (0, tw.GV)(),
        { analyticsLocations: u } = (0, eP.Ay)(tL.A.USER_SETTINGS_GIFT_INVENTORY);
    return (E.useEffect(() => {
        null == i &&
            (0, ua.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, s.id, s.outboundTitle, s.partnerId, n, u]),
    null != r)
        ? (0, A.jsx)(uw, { onClose: t, transitionState: l })
        : null == i
          ? (0, A.jsx)(a7.y, { className: uk.Lq })
          : (0, A.jsx)(sr.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, A.jsxs)("div", {
                    className: uk.N1,
                    children: [
                        (0, A.jsx)("div", { className: uk.Qw }),
                        (0, A.jsx)(p.D, { variant: "heading-xl/semibold", children: R.intl.string(R.t["23BfZh"]) }),
                        (0, A.jsx)(H.E, {
                            variant: "text-md/normal",
                            className: uk.G3,
                            children: s.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: R.intl.string(R.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: R.intl.string(R.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, ua.kc)(i, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, A.jsxs)("div", {
                    children: [
                        (0, A.jsx)(i8.c, { className: uk.M5 }),
                        (0, A.jsx)(tQ.D, {
                            label: R.intl.string(R.t.s9LFQh),
                            helperText: R.intl.string(R.t["F+nFTZ"]),
                            children: (0, A.jsx)(uV.A, {
                                value: i,
                                buttonColor: lk.$n.Colors.BRAND,
                                buttonLook: lk.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var uB = n(707554),
    uz = n(339048),
    uY = n(136380);
function uX() {
    let e = (0, h.yK)([ug.A], () => ug.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = B().groupBy(e, (e) => (0, um.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [n, i] = E.useState(!1);
    if (
        (E.useEffect(() => {
            e6.h.wait(() => {
                (0, uz.XJ)().then(() => i(!0));
            });
        }, []),
        !n)
    )
        return (0, A.jsx)(a7.y, { className: uY.Lq });
    if (0 === Object.keys(t).length)
        return (0, A.jsxs)("div", {
            className: uY.p$,
            children: [
                (0, A.jsx)("div", { className: uY.QT }),
                (0, A.jsx)(uB.H, { className: uY.ks, children: R.intl.string(R.t.B1qgZn) }),
                (0, A.jsx)("p", {
                    className: uY.WO,
                    children: R.intl.format(R.t.HezvJ8, {
                        onClick: function () {
                            (0, ns.openUserSettings)(c.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let s = B()
        .keys(t)
        .map((e) => {
            let { skuId: n, subscriptionPlanId: i, giftStyle: s } = (0, um.X6)(e);
            return (0, A.jsx)(uD, { skuId: n, subscriptionPlanId: i, entitlements: t[e], giftStyle: s }, e);
        });
    return (0, A.jsx)(Y.B, { gap: "lg", children: s });
}
function uH(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [s, l] = E.useState(!1),
        [r, a] = E.useState(!1);
    function o() {
        return l((e) => !e);
    }
    let u = (0, uG.Ay)(),
        d = (0, ua.WD)(n.id, u),
        c = null != i,
        g = E.useMemo(
            () =>
                (0, iu.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? io()(n.outboundRedemptionEndDate)
                            : io()(n.endDate).add(uU)
                        : io()(n.endDate),
                    "LL",
                ),
            [n, c],
        );
    c && s
        ? (t = R.intl.format(R.t.pkxVx6, { endDate: g, onClickDetails: o }))
        : c && !s
          ? (t = R.intl.format(R.t["4sFeob"], { endDate: g, onClickDetails: o }))
          : !c && s
            ? (t = R.intl.format(R.t["RBnE+l"], { endDate: g, onClickDetails: o }))
            : c || s || (t = R.intl.format(R.t["57+7Qn"], { endDate: g, onClickDetails: o }));
    let m = c ? R.intl.string(R.t["2cHUti"]) : R.intl.string(R.t.O13yhz),
        h = (0, uu.N)()?.isEligible === !0,
        S = E.useCallback(() => a(!1), []),
        { outboundTitle: x, outboundTermsAndConditions: T } = n;
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsxs)("div", {
                className: uY.AX,
                children: [
                    (0, A.jsxs)("div", {
                        className: uY.Pg,
                        children: [
                            (0, A.jsxs)("div", {
                                className: uY.At,
                                children: [
                                    (0, A.jsx)("div", {
                                        className: uY.$G,
                                        children: (0, A.jsx)("img", { alt: "", src: d, className: uY.IJ }),
                                    }),
                                    (0, A.jsxs)("div", {
                                        children: [
                                            (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: x }),
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
                    s &&
                        (0, A.jsx)(H.E, {
                            className: uY.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: uM.A.parse(T, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, A.jsx)(uP.aF, {
                    renderModal: (e) =>
                        (0, A.jsx)(uF, {
                            ...e,
                            onClose: S,
                            onClaim: oJ.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: S,
                }),
        ],
    });
}
function uK(e) {
    let { redesign: t = !1 } = e,
        n = (0, h.yK)([ug.A], () => ug.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, uu.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: s,
            claimedEndedOutboundPromotions: l,
            claimedOutboundPromotionCodeMap: r,
        } = (0, o0.y7)(),
        a = n.find((e) => e.giftCodeBatchId === tY.FB && !e.consumed),
        o = n.filter((e) => e.giftCodeBatchId === tY.Bu && !e.consumed) ?? [],
        [u, d] = B().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === tY.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = s.length + l.length > 0,
        g =
            t || !c
                ? null
                : (0, A.jsxs)("div", {
                      className: uY.N1,
                      children: [
                          (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.wFsj3B) }),
                          (0, A.jsx)(i8.c, { className: uY.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, A.jsxs)("div", {
                      className: uY.uo,
                      children: [
                          (0, A.jsx)(rJ.t, {
                              size: "md",
                              color: nQ.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: uY.PC,
                          }),
                          (0, A.jsx)(H.E, {
                              variant: "text-md/normal",
                              className: uY.Qw,
                              children: R.intl.format(R.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tU.default)(), (0, tJ.pX)(S.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, A.jsx)(ud.A, {
                              showGradient: !0,
                              className: uY.aA,
                              subscriptionTier: tY.pe.TIER_2,
                              textOptions: { textOverride: R.intl.string(R.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, A.jsxs)("div", {
        children: [
            g,
            (0, A.jsx)(uc.A, {
                className: uY.Yj,
                isShown: !1 === i && c,
                type: uc.i.PREMIUM,
                hasBackground: !0,
                children: (0, A.jsxs)("div", {
                    className: uY.DE,
                    children: [
                        m,
                        l.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, A.jsx)(uH, { outboundPromotion: n, code: t }, n.id);
                        }),
                        s.map((e) => (0, A.jsx)(uH, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, A.jsx)(
                                  uD,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: tY.FB,
                                  },
                                  (0, um.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, A.jsx)(
                                  uD,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: tY.Bu,
                                  },
                                  (0, um.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, A.jsx)(
                                  uD,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: tY.Bu,
                                  },
                                  (0, um.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let uW = (0, d.zZ)(c.X.MY_GIFTS_CATEGORY, {
        useTitle: uq,
        buildLayout: () => [uZ],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, h.cf)(
                    [uo.A],
                    () => ({
                        claimedOutboundPromotionCodes: uo.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: uo.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, o0.T1)({ includeClaimedPromotions: !0 }),
                i = (0, ua.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    uZ = (0, d.E2)(c.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [uq()],
        Component: () => (0, A.jsx)(uK, { redesign: !0 }),
    });
function uq() {
    return R.intl.string(R.t.YzjdWJ);
}
let uQ = (0, d.zZ)(c.X.PURCHASED_GIFTS_CATEGORY, { useTitle: uJ, buildLayout: () => [u$] }),
    u$ = (0, d.E2)(c.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [uJ()], Component: () => (0, A.jsx)(uX, {}) });
function uJ() {
    return R.intl.string(R.t.FWe6CP);
}
var u0 = n(532446),
    u1 = n(499454);
class u2 extends E.Component {
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
                    (await (0, ol.Qp)(n),
                        (0, ol.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, a9.A)(),
                        }),
                        this.setState({ codeInput: "" }));
                    return;
                } catch {}
            let e = (0, um.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await uE.Ay.resolveGiftCode(e);
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
                (0, u1.h)({ processedCode: e }),
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
            r = e ? R.intl.string(R.t["hVEn/j"]) : R.intl.string(R.t.SeKIoS),
            a = e ? R.intl.string(R.t.epHMtp) : void 0;
        return (0, A.jsx)(nJ.n, {
            label: e ? void 0 : R.intl.string(R.t["il+VCo"]),
            children: (0, A.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, A.jsxs)(u0.M, {
                    children: [
                        (0, A.jsx)(so.k, {
                            label: r,
                            description: a,
                            type: t ? "password" : "text",
                            value: n,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !l && s ? R.intl.string(R.t.Y11a2u) : null,
                            helperText: l
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
function u3(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, oG.c)({ location: "UserSettingsBilling" }),
        i = E.useContext(tt.AnalyticsContext),
        s = (0, h.bG)([te.A], () => te.A.enabled);
    return (0, A.jsx)(u2, { analyticsContext: i, obscureInput: s, acceptGiftCardRedemption: n, redesign: t });
}
let u5 = (0, d.zZ)(c.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => R.intl.string(R.t["il+VCo"]),
        buildLayout: () => [u6],
        usePredicate: () => !(0, o1.Hp)(),
    }),
    u6 = (0, d.E2)(c.X.REDEEM_CODE_INPUT, {
        Component: () => (0, A.jsx)(u3, { redesign: !0 }),
        useSearchTerms: () => [R.intl.string(R.t["jcSP+g"]), R.intl.string(R.t["il+VCo"])],
    }),
    u4 = (0, d.t_)(c.X.GIFT_PANEL, {
        useTitle: () => R.intl.string(R.t["jcSP+g"]),
        buildLayout: () => [u5, uW, ul, uQ, o3],
        initialize: () => {
            (oJ.Ay.fetchClaimedOutboundPromotionCodes(), (0, o$.Ig)("gift_inventory") && (0, oQ.o0)(oZ.$.GIFTING));
        },
    }),
    u8 = (0, d.i4)(c.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["jcSP+g"]),
        icon: oq.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, o0.IO)().length;
            return E.useMemo(() => ({ badgeType: m.Xi.COUNT, count: e }), [e]);
        },
        buildLayout: () => [u4],
    });
var u7 = n(659758),
    u9 = n(962766),
    de = n(877624),
    dt = n(269115),
    dn = n(462887),
    di = n(73825),
    ds = n(531260),
    dl = n(160946),
    dr = n(721668),
    da = n(224016),
    du = n(580630),
    dd = n(526292),
    dc = n(881489),
    dg = n(106512),
    dm = n(22118),
    dA = n(103411),
    dE = n(190187),
    dh = n(930861),
    dS = n(854627),
    dx = n(889227),
    dp = n(326084),
    dT = n(851746),
    df = n(664654),
    dI = n(912140),
    d_ = n(953727);
let dN = (e) => {
        let { className: t, backgroundColor: n, backgroundCircleSize: i, ...s } = e;
        return (0, A.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, d_.A)({ ...s }),
            children: [
                (0, A.jsx)("circle", { r: i ?? "40%", cx: "50%", cy: "50%", className: n }),
                (0, A.jsxs)("g", {
                    transform: "translate(50, 50) scale(0.6) translate(-51, -52)",
                    children: [
                        (0, A.jsx)("path", {
                            d: "M52.0002 11.7556L28.3402 35.4156V68.6956L52.0002 92.3556L75.6602 68.6956V35.4156L52.0002 11.7556ZM63.8302 63.7556L52.0002 75.6289L40.1702 63.7989V40.3122L52.0002 28.4822L63.8302 40.3122V63.7556Z",
                            fill: "#FF6BFA",
                            className: t,
                        }),
                        (0, A.jsx)("path", {
                            d: "M40.1702 40.3122V63.7989L52.0002 75.6289L63.8302 63.7989V40.3122L52.0002 28.4822L40.1702 40.3122Z",
                            fill: "#FFDEF9",
                        }),
                        (0, A.jsx)("path", {
                            d: "M52.0002 11.7556V28.4822L63.8302 40.3122L75.6602 35.4156L52.0002 11.7556Z",
                            fill: "#FFB0FF",
                        }),
                    ],
                }),
            ],
        });
    },
    dC = (e) => {
        let { ellipseOpacity: t, circleColor: n, ...i } = e,
            s = (0, uG.Ay)(),
            l = (0, dn.q)(s),
            r = null != n ? n : l ? "url(#paint0_linear_1055_83268)" : "url(#paint0_linear_1282_11557)";
        return (0, A.jsxs)("svg", {
            style: { overflow: "visible" },
            width: "80%",
            height: "80%",
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, d_.A)({ ...i }),
            children: [
                (0, A.jsxs)("svg", {
                    width: "100",
                    height: "100",
                    viewBox: "0 0 114 114",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, A.jsxs)("defs", {
                            children: [
                                (0, A.jsxs)("linearGradient", {
                                    id: "purple-gradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0%",
                                    children: [
                                        (0, A.jsx)("stop", {
                                            offset: "0%",
                                            style: { stopColor: "#E2C7FA", stopOpacity: 1 },
                                        }),
                                        (0, A.jsx)("stop", {
                                            offset: "100%",
                                            style: { stopColor: "#F3D3DE", stopOpacity: 1 },
                                        }),
                                    ],
                                }),
                                (0, A.jsxs)("linearGradient", {
                                    id: "dark-purple-gradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "0%",
                                    y2: "100%",
                                    children: [
                                        (0, A.jsx)("stop", {
                                            offset: "0%",
                                            style: { stopColor: "rgb(36,23,49)", stopOpacity: 1 },
                                        }),
                                        (0, A.jsx)("stop", {
                                            offset: "100%",
                                            style: { stopColor: "rgb(36,23,49)", stopOpacity: 1 },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, A.jsx)("ellipse", {
                            cx: "57.2768",
                            cy: "57.0796",
                            rx: "56.3726",
                            ry: "56.3726",
                            fill: null != n ? n : r,
                            fillOpacity: null != t ? t : l ? 0.5 : 0.2,
                        }),
                        (0, A.jsxs)("g", {
                            width: "65",
                            transform: "translate(50, 50) scale(.7) translate(-10, -39)",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                (0, A.jsx)("path", {
                                    d: "M42.0084 14.8866L33.7687 17.7832C33.3446 17.9281 32.9766 18.2015 32.7161 18.565C32.4555 18.9285 32.3154 19.3641 32.3154 19.8109C32.3154 20.2576 32.4555 20.6932 32.7161 21.0567C32.9766 21.4203 33.3446 21.6936 33.7687 21.8385L42.0084 24.7351C42.3147 24.8404 42.593 25.0138 42.8221 25.2422C43.0512 25.4705 43.2252 25.7478 43.3309 26.053L46.2373 34.2649C46.3827 34.6875 46.657 35.0543 47.0217 35.3139C47.3865 35.5736 47.8236 35.7132 48.2718 35.7132C48.7201 35.7132 49.1572 35.5736 49.522 35.3139C49.8867 35.0543 50.161 34.6875 50.3064 34.2649L53.2128 26.053C53.3204 25.7488 53.495 25.4725 53.7239 25.2444C53.9528 25.0164 54.23 24.8423 54.5353 24.7351L62.7896 21.8385C63.2136 21.6936 63.5817 21.4203 63.8422 21.0567C64.1028 20.6932 64.2428 20.2576 64.2428 19.8109C64.2428 19.3641 64.1028 18.9285 63.8422 18.565C63.5817 18.2015 63.2136 17.9281 62.7896 17.7832L54.5353 14.8866C54.2315 14.7767 53.9557 14.6018 53.7272 14.374C53.4987 14.1463 53.3231 13.8714 53.2128 13.5687L50.3064 5.34234C50.161 4.91974 49.8867 4.55297 49.522 4.2933C49.1572 4.03363 48.7201 3.89404 48.2718 3.89404C47.8236 3.89404 47.3865 4.03363 47.0217 4.2933C46.657 4.55297 46.3827 4.91974 46.2373 5.34234L43.3309 13.5687C43.2233 13.8729 43.0487 14.1492 42.8198 14.3773C42.591 14.6054 42.3137 14.7794 42.0084 14.8866Z",
                                    fill: "white",
                                    fillOpacity: l ? "0.6" : "0.4",
                                }),
                                (0, A.jsx)("path", {
                                    d: "M34.0878 3.57968L33.0393 0.634802C32.9888 0.483384 32.8917 0.351665 32.7618 0.258321C32.6319 0.164978 32.4759 0.114746 32.3158 0.114746C32.1556 0.114746 31.9996 0.164978 31.8697 0.258321C31.7398 0.351665 31.6427 0.483384 31.5922 0.634802L30.6217 3.57968C30.5838 3.68745 30.5221 3.78534 30.4411 3.86607C30.3601 3.94681 30.2619 4.00831 30.1538 4.04602L27.1555 5.02189C27.0067 5.07415 26.8777 5.17117 26.7865 5.29956C26.6953 5.42795 26.6464 5.58137 26.6464 5.73868C26.6464 5.89598 26.6953 6.04941 26.7865 6.17779C26.8777 6.30618 27.0067 6.4032 27.1555 6.45547L30.0758 7.47451C30.1839 7.51222 30.2821 7.57373 30.3631 7.65446C30.4441 7.7352 30.5059 7.83308 30.5437 7.94085L31.5575 10.8426C31.6081 10.994 31.7052 11.1257 31.835 11.219C31.9649 11.3124 32.121 11.3626 32.2811 11.3626C32.4412 11.3626 32.5973 11.3124 32.7271 11.219C32.857 11.1257 32.9541 10.994 33.0047 10.8426L34.0878 7.94085C34.1257 7.83308 34.1874 7.7352 34.2684 7.65446C34.3494 7.57373 34.4476 7.51222 34.5558 7.47451L37.476 6.45547C37.6249 6.4032 37.7538 6.30618 37.845 6.17779C37.9362 6.04941 37.9852 5.89598 37.9852 5.73868C37.9852 5.58137 37.9362 5.42795 37.845 5.29956C37.7538 5.17117 37.6249 5.07415 37.476 5.02189L34.5211 4.00284C34.4237 3.9656 34.3349 3.90883 34.2604 3.83604C34.1859 3.76326 34.1271 3.676 34.0878 3.57968Z",
                                    fill: "white",
                                    fillOpacity: "0.8",
                                }),
                            ],
                        }),
                    ],
                }),
                (0, A.jsxs)("defs", {
                    children: [
                        (0, A.jsxs)("filter", {
                            id: "filter0_d_1282_11577",
                            x: "-6.55945",
                            y: "0.382812",
                            width: "89.2926",
                            height: "70.3945",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                (0, A.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                (0, A.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha",
                                }),
                                (0, A.jsx)("feOffset", { dy: "4" }),
                                (0, A.jsx)("feGaussianBlur", { stdDeviation: "5" }),
                                (0, A.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
                                (0, A.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
                                }),
                                (0, A.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1282_11577",
                                }),
                                (0, A.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_1282_11577",
                                    result: "shape",
                                }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "paint0_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "paint2_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "paint1_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "paint1_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "paint2_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "paint0_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "paint0_linear_1282_11557",
                            x1: "0.904297",
                            y1: "56.5004",
                            x2: "113.649",
                            y2: "56.5004",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "paint0_linear_684_72736",
                            x1: "0.904236",
                            y1: "57.0796",
                            x2: "113.649",
                            y2: "57.0796",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "paint0_linear_1055_83179",
                            x1: "0.904236",
                            y1: "56.5005",
                            x2: "113.649",
                            y2: "56.5005",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "paint0_linear_1055_83268",
                            x1: "0.904236",
                            y1: "57.2461",
                            x2: "113.649",
                            y2: "57.2461",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                    ],
                }),
                (0, A.jsxs)("g", {
                    filter: l ? void 0 : "url(#filter0_d_1282_11577)",
                    transform: "translate(50, 50) scale(.8) translate(-44, -30)",
                    children: [
                        (0, A.jsx)("path", {
                            d: "M47.5359 37.8795C51.0149 37.8795 53.8352 35.0592 53.8352 31.5801C53.8352 28.1011 51.0149 25.2808 47.5359 25.2808C44.0568 25.2808 41.2365 28.1011 41.2365 31.5801C41.2365 35.0592 44.0568 37.8795 47.5359 37.8795Z",
                            fill: l ? "url(#paint2_linear_1986_8686)" : "url(#paint0_linear_1282_11577)",
                        }),
                        (0, A.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.3385 6.38281C20.599 6.38281 19.1889 7.79297 19.1889 9.53248C19.1889 11.272 20.599 12.6821 22.3385 12.6821H31.7875C33.527 12.6821 34.9372 14.0923 34.9372 15.8318C34.9372 17.5713 33.527 18.9815 31.7875 18.9815L17.614 18.9815C15.8745 18.9815 14.4644 20.3916 14.4644 22.1311C14.4644 23.8706 15.8745 25.2808 17.614 25.2808L25.4882 25.2808C27.2277 25.2808 28.6379 26.691 28.6379 28.4305C28.6379 30.17 27.2277 31.5801 25.4882 31.5801H19.1889C17.4494 31.5801 16.0392 32.9903 16.0392 34.7298C16.0392 36.4693 17.4494 37.8795 19.1889 37.8795H23.1324C25.9295 48.7472 35.7949 56.7774 47.5359 56.7774C61.4519 56.7774 72.7332 45.4962 72.7332 31.5801C72.7332 17.664 61.4519 6.38281 47.5359 6.38281H22.3385ZM47.5359 44.1788C54.4939 44.1788 60.1345 38.5382 60.1345 31.5801C60.1345 24.6221 54.4939 18.9815 47.5359 18.9815C40.5778 18.9815 34.9372 24.6221 34.9372 31.5801C34.9372 38.5382 40.5778 44.1788 47.5359 44.1788Z",
                            fill: l ? "url(#paint1_linear_1986_8686)" : "url(#paint1_linear_1282_11577)",
                        }),
                        (0, A.jsx)("path", {
                            d: "M8.16505 25.2808C9.90456 25.2808 11.3147 23.8706 11.3147 22.1311C11.3147 20.3916 9.90456 18.9815 8.16505 18.9815H6.59022C4.8507 18.9815 3.44055 20.3916 3.44055 22.1311C3.44055 23.8706 4.8507 25.2808 6.59022 25.2808H8.16505Z",
                            fill: l ? "url(#paint0_linear_1986_8686)" : "url(#paint2_linear_1282_11577)",
                        }),
                    ],
                }),
                (0, A.jsx)("g", {
                    width: "65",
                    transform: "translate(50, 50) scale(0.81) translate(-26, -42)",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, A.jsx)("path", {
                        d: "M12.6686 60.7298L10.9101 55.7911C10.8254 55.5372 10.6626 55.3163 10.4448 55.1597C10.227 55.0032 9.96524 54.9189 9.69671 54.9189C9.42818 54.9189 9.16646 55.0032 8.94866 55.1597C8.73086 55.3163 8.56804 55.5372 8.48326 55.7911L6.85565 60.7298C6.7922 60.9105 6.6887 61.0747 6.55284 61.2101C6.41699 61.3455 6.25226 61.4487 6.07091 61.5119L1.04275 63.1485C0.793091 63.2361 0.576874 63.3988 0.423928 63.6141C0.270981 63.8294 0.188843 64.0868 0.188843 64.3506C0.188843 64.6144 0.270981 64.8717 0.423928 65.087C0.576874 65.3023 0.793091 65.465 1.04275 65.5527L5.94012 67.2616C6.12147 67.3249 6.2862 67.428 6.42205 67.5634C6.55791 67.6988 6.66141 67.863 6.72486 68.0437L8.42513 72.91C8.50991 73.1639 8.67273 73.3848 8.89053 73.5414C9.10833 73.6979 9.37005 73.7822 9.63858 73.7822C9.90711 73.7822 10.1688 73.6979 10.3866 73.5414C10.6044 73.3848 10.7672 73.1639 10.852 72.91L12.6686 68.0437C12.732 67.863 12.8355 67.6988 12.9714 67.5634C13.1072 67.428 13.2719 67.3249 13.4533 67.2616L18.3507 65.5527C18.6003 65.465 18.8165 65.3023 18.9695 65.087C19.1224 64.8717 19.2046 64.6144 19.2046 64.3506C19.2046 64.0868 19.1224 63.8294 18.9695 63.6141C18.8165 63.3988 18.6003 63.2361 18.3507 63.1485L13.3952 61.4395C13.2318 61.377 13.083 61.2818 12.958 61.1598C12.833 61.0377 12.7345 60.8914 12.6686 60.7298Z",
                        fill: "white",
                        fillOpacity: "0.8",
                    }),
                }),
            ],
        });
    };
var db = n(387316);
let dy = "url(#gradient)",
    dv = (e) => {
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
            [d, c] = E.useState(s);
        E.useEffect(() => {
            let e = setTimeout(() => {
                c(t);
            }, 200);
            return () => clearTimeout(e);
        }, [t]);
        let g = (0, uG.Ay)(),
            m = (0, dn.q)(g),
            h = (function (e) {
                switch (e) {
                    case dO.NITRO_GEM:
                    case dO.AVATAR_DECO:
                        return "var(--background-base-low)";
                    case dO.NITRO_LOGO:
                        return "var(--premium-tier-2-purple)";
                    default:
                        return;
                }
            })(r),
            S = (function (e, t) {
                switch (e) {
                    case dO.NITRO_LOGO:
                        return t ? "0.3" : "0.2";
                    case dO.NITRO_GEM:
                    case dO.AVATAR_DECO:
                    default:
                        return;
                }
            })(r, m),
            x =
                a ??
                (function (e, t) {
                    switch (t) {
                        case dO.NITRO_GEM:
                        case dO.AVATAR_DECO:
                            return dy;
                        case dO.NITRO_LOGO:
                            return e ? "url(#gradient_nitro_logo)" : dy;
                        default:
                            return;
                    }
                })(m, r);
        return (0, A.jsxs)("div", {
            className: db.Ap,
            children: [
                (0, A.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: db.fB,
                    children: [
                        (0, A.jsx)("circle", {
                            className: r === dO.NITRO_GEM || r === dO.AVATAR_DECO ? db.F3 : void 0,
                            fill: "transparent",
                            strokeWidth: l,
                            r: `${o}`,
                            cx: "50%",
                            cy: "50%",
                            stroke: h,
                            strokeOpacity: S,
                        }),
                        (0, A.jsx)("circle", {
                            stroke: x,
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
                (0, A.jsxs)("svg", {
                    width: "0",
                    height: "0",
                    children: [
                        (0, A.jsxs)("linearGradient", {
                            id: "gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [
                                (0, A.jsx)("stop", { offset: "0%", style: { stopColor: "#FFBDF2" } }),
                                (0, A.jsx)("stop", { offset: "100%", style: { stopColor: "#E742E1" } }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "gradient_nitro_logo",
                            x1: "2.99995",
                            y1: "67.6298",
                            x2: "132.55",
                            y2: "67.6298",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#F9A0E8" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E742E1" }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "dark-purple-gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                (0, A.jsx)("stop", { offset: "0%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                                (0, A.jsx)("stop", { offset: "100%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                            ],
                        }),
                    ],
                }),
                (0, A.jsx)("div", { className: db.Vw, children: n }),
            ],
        });
    };
var dj = n(104773),
    dO =
        (((i = {})[(i.NITRO_GEM = 0)] = "NITRO_GEM"),
        (i[(i.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (i[(i.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        i);
function dL(e) {
    let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
        s = E.useMemo(() => (0, dI.A)({ legacyAssetId: t, skuId: n, size: I._3.SIZE_120, canAnimate: !1 }), [t, n]);
    return (0, A.jsx)("div", {
        className: dj.Q7,
        children: (0, A.jsx)("div", {
            className: dj.Nk,
            children: null != s && (0, A.jsx)("img", { className: dj.CH, alt: i, src: s }),
        }),
    });
}
let dR = function (e) {
    let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: s,
            progressCircleStrokeSize: l,
            backgroundCircleSize: r,
            percentage: a,
            initialPercentage: o,
            progressCircleVariation: u = 0,
            avatarDecorationLegacyAssetId: d,
            avatarDecorationSkuId: c,
            avatarDecoAssetDescription: g,
            ellipseOpacity: m,
            customAnimationClassName: E,
            circleColor: S,
            circleStroke: x,
        } = e,
        p = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
        T = t && !p;
    return (0, A.jsx)("div", {
        className: ir()(dj.G3, n),
        children: (0, A.jsx)(dv, {
            animationClassName: ir()(dj._0, { [dj.uJ]: T, [E ?? ""]: T }),
            progressCircleStroke: x,
            progressCircleStrokeSize: l,
            percentage: i ?? a,
            initialPercentage: i ?? o,
            progressCircleVariation: u,
            children: (function () {
                switch (u) {
                    case 0:
                        return (0, A.jsx)(dN, {
                            className: T ? dj.Ow : void 0,
                            backgroundColor: ir()(dj.vH, s),
                            backgroundCircleSize: r,
                        });
                    case 1:
                        return (0, A.jsx)(dC, { circleColor: S, ellipseOpacity: m });
                    case 2:
                        if (null != c)
                            return (0, A.jsx)(dL, {
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
var dD = n(14313);
function dP(e) {
    let { userRecord: t, placement: n } = e,
        { avatarSrc: i, eventHandlers: s } = (0, dS.A)({ userId: t?.id, size: I._3.SIZE_32, animateOnHover: !0 }),
        l = null != t,
        r = l
            ? (0, A.jsx)(f.eu, { src: i, "aria-label": t.username, size: I._3.SIZE_32, ...s })
            : (0, A.jsx)(p.D, { variant: "heading-md/semibold", className: dD.n5, children: n });
    return (0, A.jsx)(st.m, {
        text: R.intl.string(R.t.UnKHdo),
        shouldShow: !l,
        children: (0, A.jsx)("div", { className: dD.Lg, children: r }),
    });
}
function dG(e) {
    let { numSentReferrals: t, placement: n } = e;
    return (0, A.jsxs)("div", {
        className: dD.Ip,
        children: [
            (0, A.jsx)("div", { className: dD.Ej }),
            (0, A.jsx)("div", { className: ir()({ [dD.ch]: t > n, [dD.q_]: t === n }) }),
        ],
    });
}
function dM(e) {
    let { userRecords: t } = e,
        n = t.length,
        i = n < 1 ? null : t[0],
        s = n < 2 ? null : t[1],
        l = n < 3 ? null : t[2];
    return (0, A.jsxs)("div", {
        className: dD.ZM,
        children: [
            (0, A.jsx)(dP, { userRecord: i, placement: 1 }),
            (0, A.jsx)(dG, { numSentReferrals: n, placement: 1 }),
            (0, A.jsx)(dP, { userRecord: s, placement: 2 }),
            (0, A.jsx)(dG, { numSentReferrals: n, placement: 2 }),
            (0, A.jsx)(dP, { userRecord: l, placement: 3 }),
        ],
    });
}
let dU = function () {
    let e = (0, h.bG)([dT.A], () => dT.A.getRecipientStatus()),
        { referralSentUsers: t } = (0, df.J)(),
        i = E.useMemo(() => t.map((e) => new dx.A(e)), [t]),
        s = { redeemed: 0, converted: 0, sent: e.size };
    e.forEach((e) => {
        (e === dp.aK.REDEEMED && s.redeemed++, e === dp.aK.CONVERTED && (s.redeemed++, s.converted++));
    });
    let l = s.sent === df.Z,
        r = eT.A.getArticleURL(S.MVz.REFERRAL_PROGRAM),
        { analyticsLocations: a } = (0, eP.Ay)(tL.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        o = E.useRef(null),
        u = (s.sent / df.Z) * 100,
        d = (0, A.jsxs)("div", {
            className: dD.hE,
            children: [
                (0, A.jsx)(dR, { percentage: u, progressCircleVariation: dO.NITRO_LOGO, iconClassName: dD.ER }),
                (0, A.jsxs)("div", {
                    className: dD.Ns,
                    children: [
                        (0, A.jsx)(p.D, {
                            variant: "heading-xl/extrabold",
                            className: dD.R0,
                            children: (function (e) {
                                let { hasSentAll: t } = e;
                                return R.intl.string(R.t.USo4s7);
                            })({ hasSentAll: l }),
                        }),
                        (0, A.jsx)(dM, { userRecords: i }),
                        (0, A.jsx)(H.E, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                let { helpdeskArticle: t, referralsStatuses: n } = e;
                                return (function (e) {
                                    let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
                                    return t
                                        ? R.intl.format(R.t["TYu+MH"], { helpdeskArticle: i })
                                        : R.intl.format(R.t["omMr+V"], { helpdeskArticle: i });
                                })({ hasSentAll: n.sent >= df.Z, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
                            })({ helpdeskArticle: r, referralsStatuses: s }),
                        }),
                        (0, A.jsx)("div", {
                            className: dD.Fb,
                            children: (0, A.jsx)(dh.wL, {
                                "data-migration-pending": !0,
                                className: dD.r$,
                                color: lk.XD.CUSTOM,
                                onClick: () =>
                                    (function (e) {
                                        let { analyticsLocations: t } = e;
                                        (tt.default.track(S.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                            location_stack: t,
                                        }),
                                            (0, sa.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("647658"),
                                                    n.e("618589"),
                                                ]).then(n.bind(n, 168457));
                                                return (n) => (0, A.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                            }));
                                    })({ analyticsLocations: a }),
                                onlyShineOnHover: !0,
                                children: (0, A.jsxs)("div", {
                                    className: dD.Zn,
                                    children: [
                                        (0, A.jsx)("img", {
                                            src: "/assets/3b9b1649f78941df.svg",
                                            alt: "",
                                            className: dD.QH,
                                        }),
                                        l ? R.intl.string(R.t.SY9tyI) : R.intl.string(R.t.Lm2nFc),
                                    ],
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        }),
        c = s.redeemed === df.Z;
    return (0, A.jsx)(eP.f5, {
        value: a,
        children: (0, A.jsx)("div", {
            className: ir()(dD.kL, { [dD.AP]: c }),
            children: (0, A.jsx)("div", { ref: o, className: ir()(dD.d_, { [dD.kS]: c }), children: d }),
        }),
    });
};
var dV = n(194509),
    dk = n(465794),
    dw = n(774774),
    dF = n(156601),
    dB = n(297346),
    dz = n(88001),
    dY = n(148155),
    dX = n(487518);
let dH = "to_premium_home_button",
    dK = "premium home page";
function dW(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: s } = e,
        l = t.hasActiveTrial,
        r = t.planIdFromItems === tY.gD.PREMIUM_YEAR_TIER_2,
        a = t.hasAnyPremiumGroup,
        o = (0, ds.A)(),
        u = null != t.trialEndsAt ? io()(t.trialEndsAt).diff(io()(), "d") : 0,
        d = tY.hd[t.planIdFromItems],
        c = at.Ay.getDefaultPrice(d.id),
        g = at.Ay.formatPriceString(c, d.interval);
    if (n || l) {
        let e = (0, dn.M)(s) ? dw.at.PREMIUM_TIER_2_WHITE_FILL : dw.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
        return (0, A.jsxs)(A.Fragment, {
            children: [
                !l && (r || a)
                    ? (0, A.jsx)(dw.e4, { text: R.intl.string(R.t.EyjDRE), className: dX.LW, colorOptions: e })
                    : (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(dw.HU, {
                                  text: l ? R.intl.string(R.t.qYKftX) : R.intl.string(R.t.EyjDRE),
                                  className: dX.uS,
                                  colorOptions: e,
                              }),
                              (0, A.jsx)("div", { className: dX.on }),
                          ],
                      }),
                (0, A.jsx)(p.D, {
                    variant: "heading-md/normal",
                    color: "text-overlay-light",
                    className: dX.KB,
                    children: (function () {
                        if (l) return R.intl.format(R.t["2CGBri"], { remainingTime: u, price: g });
                        if (a && null != i && t.metadata?.active_discount_expires_at != null) {
                            let e = (0, du.$g)(c.amount, c.currency);
                            return R.intl.format(dY.default.FwjZzr, {
                                percent: i?.percentage ?? 0,
                                discountEndDate: new Date(t.metadata.active_discount_expires_at),
                                regularPrice: e,
                            });
                        }
                        return r
                            ? R.intl.format(R.t.z2oQtA, {
                                  percent: i?.percentage ?? tY.Cq,
                                  regularPrice: g,
                                  renewalDate: at.Ay.getExpectedRenewalDate(t, o),
                              })
                            : R.intl.formatToPlainString(R.t["3ZiutU"], {
                                  percent: i?.percentage ?? tY._$,
                                  regularPrice: g,
                                  numMonths: i?.duration ?? tY.OJ,
                              });
                    })(),
                }),
            ],
        });
    }
    return (0, A.jsx)(dF.A, { variant: void 0, subscriptionTier: tY.pe.TIER_2, interval: d.interval });
}
function dZ() {
    let e = (0, dd.k5)(),
        t = (0, dd.nf)(),
        n = (0, uG.Ay)(),
        i = (0, h.bG)([oU.A], () => oU.A.getPremiumTypeSubscription()),
        s = (0, h.bG)([li.default], () => li.default.getCurrentUser()),
        l = s?.isPremiumWithPremiumGroup(),
        r = (0, ds.A)(),
        a = (0, dc.ds)(),
        o = null !== i && null !== i.planIdFromItems;
    if (!o && !r.isFractionalPremiumActive && !l) return null;
    let u = r.isFractionalPremiumActive,
        d = null !== i && i.hasActiveTrial;
    return (0, A.jsxs)("div", {
        className: ir()(dX.$Y, { [dX.J5]: e || d }),
        children: [
            (0, A.jsxs)("div", {
                className: dX.jp,
                children: [
                    l
                        ? (0, A.jsx)(p.D, {
                              variant: "nitro-md",
                              color: "text-overlay-light",
                              className: dX._K,
                              children: (0, dz.DP)(),
                          })
                        : (0, A.jsx)(da.A, { className: dX.TJ }),
                    l && !e
                        ? (0, A.jsx)("div", { style: { marginBottom: "6px" } })
                        : u && !a
                          ? (0, A.jsxs)(A.Fragment, {
                                children: [
                                    (0, A.jsx)(dw.e4, {
                                        text: R.intl.string(R.t.uXF4c4),
                                        className: dX.LW,
                                        colorOptions: dw.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, A.jsx)(p.D, {
                                        variant: "heading-md/normal",
                                        color: "text-overlay-light",
                                        className: dX.sQ,
                                        children: R.intl.format(R.t.sK7fGl, {
                                            helpCenterLink: eT.A.getArticleURL(S.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : o
                            ? (0, A.jsx)(dW, {
                                  premiumSubscription: i,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : a
                              ? (0, A.jsxs)(A.Fragment, {
                                    children: [
                                        (0, A.jsx)(dw.HU, {
                                            text: R.intl.string(R.t.qYKftX),
                                            className: dX.uS,
                                            colorOptions: (0, dn.M)(n)
                                                ? dw.at.PREMIUM_TIER_2_WHITE_FILL
                                                : dw.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, A.jsx)(p.D, {
                                            variant: "heading-md/normal",
                                            color: "text-overlay-light",
                                            className: dX.KB,
                                            children: R.intl.format(R.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, A.jsx)(dB.ZP, {
                        featureSet: s?.isPremiumGroupPrimary()
                            ? dB.Nz.PREMIUM_GROUP_PRIMARY
                            : s?.isPremiumGroupMember()
                              ? dB.Nz.PREMIUM_GROUP_MEMBER
                              : u
                                ? dB.Nz.FRACTIONAL_PREMIUM
                                : dB.Nz.DEFAULT,
                    }),
                    u && !o
                        ? (0, A.jsxs)(lF.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, A.jsx)(dk.A, {
                                      defaultTextOverride: a ? R.intl.string(R.t.YScQSF) : R.intl.string(R.t["0b3YRn"]),
                                  }),
                                  (0, A.jsx)(_.$, {
                                      onClick: () => {
                                          (tt.default.track(S.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: dH,
                                              target: dK,
                                          }),
                                              (0, tU.default)(),
                                              (0, tJ.pX)(S.BVt.APPLICATION_STORE));
                                      },
                                      variant: "overlay-secondary",
                                      fullWidth: !0,
                                      size: "md",
                                      text: a ? R.intl.string(R.t.VR2iVB) : R.intl.string(R.t.T1aUAX),
                                  }),
                              ],
                          })
                        : (0, A.jsxs)(lF.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, A.jsx)(_.$, {
                                      variant: "overlay-primary",
                                      fullWidth: !0,
                                      onClick: () => {
                                          (tt.default.track(S.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: dH,
                                              target: dK,
                                          }),
                                              (0, tU.default)(),
                                              (0, tJ.pX)(S.BVt.APPLICATION_STORE));
                                      },
                                      text: R.intl.string(R.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, A.jsx)(_.$, {
                                      variant: "overlay-secondary",
                                      onClick: () => {
                                          (tt.default.track(S.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              (0, ns.openUserSettings)(c.X.SUBSCRIPTIONS_PANEL));
                                      },
                                      text: R.intl.string(R.t["9uDy6C"]),
                                      fullWidth: !0,
                                      size: "md",
                                  }),
                              ],
                          }),
                ],
            }),
            (0, A.jsx)("div", {
                className: dX.ah,
                children: (0, A.jsx)("img", { className: dX.ah, alt: "", src: "/assets/3aaa2c2d1874c196.svg" }),
            }),
        ],
    });
}
function dq() {
    return (0, A.jsxs)("div", {
        className: dX.T1,
        children: [
            (0, A.jsx)("img", { className: dX.GY, alt: "", src: "/assets/9f5bdd034cc313ae.svg" }),
            (0, A.jsxs)("div", {
                className: dX.b4,
                children: [
                    (0, A.jsx)(p.D, {
                        className: dX.Vz,
                        variant: "heading-xl/extrabold",
                        children: R.intl.string(R.t["3KomGa"]),
                    }),
                    (0, A.jsx)(H.E, {
                        className: dX.Oi,
                        variant: "text-sm/normal",
                        children: R.intl.string(R.t.yQ06u1),
                    }),
                    (0, A.jsx)(dV.A, {
                        className: ir()(dX.Tp, dX._c),
                        textOptions: { textOverride: R.intl.string(R.t.Ve9Ge6), textClassName: dX.VV },
                        color: lk.$n.Colors.CUSTOM,
                        onClick: () => {
                            tt.default.track(S.HAw.PREMIUM_SETTINGS_INTERACTED, {
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
let dQ = function () {
        let e = (0, o1.Hp)(),
            { analyticsLocations: t } = (0, eP.Ay)(tL.A.PREMIUM_SETTINGS),
            n = (0, h.bG)([li.default], () => li.default.getCurrentUser()),
            i = (0, h.bG)([oU.A], () => oU.A.getPremiumTypeSubscription()),
            s = (0, h.bG)([oU.A], () => oU.A.hasFetchedSubscriptions()),
            l = (0, dl.Y)(tY.T7),
            [r, a] = E.useState(!0),
            o = (0, ds.A)({ forceFetch: !0 }),
            u = (0, h.bG)([uo.A], () => {
                let e = uo.A.getMarketingComponentByType(de.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            d = !(od.Fr || od.v1) && null != u,
            c = E.useRef(null);
        (0, dE.i)();
        let g = (0, dA.m)();
        E.useEffect(() => {
            e6.h.wait(async () => {
                (e || (await Promise.all([os.hP(), os.$o(), (0, di.zS)(null, null, S.tF5.DISCOVERY)])), a(!1));
            });
        }, [e]);
        let [m, x] = E.useState(!1);
        if (e) return (0, A.jsx)(oY.uK, {});
        let p = s && null !== i && l,
            T = o.fetched && o.isFractionalPremiumActive,
            f = n?.isPremiumWithPremiumGroup();
        if (!p && !T && !r && !f) return (0, A.jsx)(dr.A, { title: R.intl.string(R.t.dyq9TR), note: null });
        if ((!p && !T && !f) || r) return (0, A.jsx)(a7.y, {});
        let I = !!i?.hasActiveTrial;
        return (0, A.jsx)(eP.f5, {
            value: t,
            children: (0, A.jsxs)(A.Fragment, {
                children: [
                    (0, A.jsxs)(Y.B, {
                        direction: "vertical",
                        gap: 40,
                        children: [
                            d && (0, A.jsx)(dg.m, { config: u }),
                            (0, A.jsx)(dZ, {}),
                            g && (0, A.jsx)(dU, {}),
                            !d && (0, A.jsx)(dq, {}),
                            (0, A.jsx)(dm.A, {
                                hideCTAs: !0,
                                headingOverride: R.intl.string(R.t.dnVvQS),
                                hidePill: !I,
                                selectedPlanColumnClassName: dX.JG,
                                selectedPlanTier: tY.PremiumTypes.TIER_2,
                            }),
                        ],
                    }),
                    (0, A.jsx)(dt.L, {
                        innerRef: c,
                        onChange: (e) => {
                            e &&
                                !m &&
                                (tt.default.track(S.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                    location_stack: t,
                                }),
                                x(!0));
                        },
                        children: (0, A.jsx)("div", { ref: c, className: dX._Z }),
                    }),
                ],
            }),
        });
    },
    d$ = (0, d.E2)(c.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, h.bG)([li.default], () => li.default.getCurrentUser());
            return (0, at.YE)(e, tY.PremiumTypes.TIER_2) ? (0, A.jsx)(dQ, {}) : (0, A.jsx)(u9.A, {});
        },
        useSearchTerms: () => [R.intl.string(R.t.Ipxkog)],
    }),
    dJ = (0, d.zZ)(c.X.NITRO_CATEGORY, { buildLayout: () => [d$] }),
    d0 = (0, d.t_)(c.X.NITRO_PANEL, {
        useTitle: () => R.intl.string(R.t.Ipxkog),
        useObscuredNotice: a4.L,
        buildLayout: () => [dJ],
    }),
    d1 = (0, d.i4)(c.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.Ipxkog),
        icon: rJ.t,
        usePersistentBadge: function (e) {
            let t = (0, u7.e)(e);
            return E.useMemo(() => ({ badgeType: m.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [d0],
    });
var d2 = n(104510),
    d3 = n(820739),
    d5 = n(859241),
    d6 = n(527113),
    d4 = n(338548),
    d8 = n(776096),
    d7 = n(711014),
    d9 = n(178368),
    ce = n(809545),
    ct = n(168482);
function cn() {
    return (0, A.jsxs)("div", {
        className: ce.iE,
        children: [
            (0, A.jsx)("img", { className: ce.Kk, alt: "", src: ct }),
            (0, A.jsxs)("div", {
                className: ce.pq,
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
                    ((0, tJ.pX)(S.BVt.GUILD_DISCOVERY), (0, tU.default)());
                },
            }),
        ],
    });
}
var ci = n(365199),
    cs = n(878678),
    cl = n(443865),
    cr = n(980707),
    ca = n(473145);
function co(e) {
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
                label: null != t.premiumGuildSubscription ? R.intl.string(R.t["PR0n//"]) : R.intl.string(R.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? R.intl.string(R.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: R.intl.string(R.t.twFU3R), subtext: s ? null : R.intl.string(R.t.oQ9lOh), disabled: !s },
            uncancel: { label: R.intl.string(R.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (l.status) {
        case S.Dmq.PAST_DUE:
            ((o.cancel.disabled = !0), (o.cancel.subtext = R.intl.string(R.t.WnL6DV)), (o.uncancel.disabled = !0));
            break;
        case S.Dmq.PAUSE_PENDING:
        case S.Dmq.PAUSED:
            a === tY.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = R.intl.string(R.t.LiLRRT)),
                (o.cancel.subtext = R.intl.string(R.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let u = E.useMemo(
        () =>
            l.isPausedOrPausePending && a === tY.xc.NONE
                ? (0, A.jsx)(e3.Dr, {
                      id: "manage-subscription",
                      label: R.intl.string(R.t.obRG6Y),
                      action: () => (0, ns.openUserSettings)(c.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: cl.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: cl.LightbulbIcon },
                  })
                : null,
        [a, l],
    );
    return (0, A.jsxs)(cr.W, {
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
                    (0, sa.openModalLazy)(async () => {
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
            (0, ca.I5)(t)
                ? (0, A.jsx)(e3.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, sa.openModalLazy)(async () => {
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
                          (0, sa.openModalLazy)(async () => {
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
var cu = n(545934),
    cd = n(548118),
    cc = n(987144),
    cg = n(864310),
    cm = n(290413);
function cA(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, cg.A)(t.id);
    return (0, A.jsxs)("div", {
        className: n ?? cm.OA,
        children: [
            (0, A.jsx)(cd.Ay, { className: cm.$f, guild: t, size: cd.Ay.Sizes.MEDIUM }),
            (0, A.jsxs)("div", {
                className: cm.gI,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, A.jsxs)("div", {
                        className: cm.ew,
                        children: [
                            (0, A.jsxs)("div", {
                                className: cm.QW,
                                children: [
                                    (0, A.jsx)(d2._, {
                                        className: cm.Wz,
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
                                        (0, A.jsx)("div", { className: cm.zk }),
                                        (0, A.jsx)(H.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, ca.gb)(t.premiumTier, { useLevels: !1 }),
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
function cE(e) {
    let { guildId: t } = e,
        n = (0, h.bG)([sh.A], () => sh.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, A.jsxs)("div", {
              className: cm.Nr,
              children: [
                  (0, A.jsx)(cA, { guild: n }),
                  (0, A.jsx)(_.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: d2._,
                      text: R.intl.string(R.t.aBHecF),
                      onClick: () => {
                          (0, cc.g)({
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
var ch = n(747381);
let cS =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function cx(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: s, isLast: l } = e,
        r = E.useRef(null),
        a = (0, ca.I5)(t),
        o = E.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, ds.A)(),
        c = E.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === S.TVA.NONE) return "";
                    let n = [
                        R.intl.formatToPlainString(R.t["dLlKX/"], { numEmojiSlots: tY.TG[e].limits.emoji }),
                        R.intl.formatToPlainString(R.t["+ANIfv"], { numStickerSlots: tY.TG[e].limits.stickers }),
                        R.intl.formatToPlainString(R.t["4gt60b"], {
                            numSoundboardSlots: tY.TG[e].limits.soundboardSounds,
                        }),
                        R.intl.formatToPlainString(R.t.XahSjZ, {
                            resolution: tY.TG[e].limits.screenShareQualityResolution,
                            framerate: tY.TG[e].limits.screenShareQualityFramerate,
                        }),
                        R.intl.formatToPlainString(R.t.NbNs7S, { bitrate: tY.TG[e].limits.bitrate / 1e3 }),
                        R.intl.formatToPlainString(R.t.VVKcpn, { filesize: tY.TG[e].limits.fileSize / 1024 / 1024 }),
                        R.intl.formatToPlainString(R.t.TbpCvv, { numVideoStageSeats: tY.TG[e].limits.stageVideoUsers }),
                        R.intl.string(R.t.LDyX3i),
                        R.intl.string(R.t.YtGlPW),
                    ];
                    (e >= S.TVA.TIER_2 && (n.push(R.intl.string(R.t.SztbtN)), n.push(R.intl.string(R.t["3GK91n"]))),
                        e >= S.TVA.TIER_3 && n.push(R.intl.string(R.t["XUUJd+"])));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let s = n[Math.abs(i) % n.length];
                    return R.intl.formatToPlainString(R.t["/dOAmQ"], { perk: s });
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
        className: ir()(ch.iq, { [ch.Mt]: l }),
        children: [
            (0, A.jsxs)("div", {
                className: ch.kd,
                children: [
                    (0, A.jsx)("img", { alt: "", className: ch.bB, src: cS }),
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
                                              (0, A.jsx)("div", { className: ch.zk }),
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
                                              (0, A.jsx)("div", { className: ch.zk }),
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
            (0, A.jsx)(r7.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, A.jsx)(co, {
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
                    (0, A.jsx)(n0.D, {
                        innerRef: r,
                        "aria-label": R.intl.string(R.t.PdRCRg),
                        className: ch.Mj,
                        ...e,
                        children: (0, A.jsx)(ci.MoreHorizontalIcon, {
                            size: "xs",
                            color: nQ.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function cp(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: s } = e,
        l = (0, h.bG)([sh.A], () => sh.A.getGuild(t), [t]);
    return (0, A.jsxs)("div", {
        className: ch.Nr,
        children: [
            (0, A.jsx)("div", {
                className: ch.MY,
                children:
                    null != l
                        ? (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(cA, { guild: l, className: ch.OA }),
                                  (0, A.jsx)(_.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: R.intl.string(R.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tU.default)(),
                                              (0, cs.K4)({
                                                  guildId: l.id,
                                                  location: {
                                                      section: S.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              }));
                                      },
                                  }),
                              ],
                          })
                        : (0, A.jsx)("div", {
                              className: ch.OA,
                              children: (0, A.jsx)(p.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: R.intl.string(R.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, A.jsx)(
                    cx,
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
function cT(e) {
    let { guildBoostSlots: t, premiumSubscription: n, pausedAppliedGuildBoosts: i, isPaused: s } = e,
        { boostsByGuildId: l, numActiveSlots: r } = E.useMemo(() => {
            if (s && null != n)
                return {
                    boostsByGuildId: (function (e, t) {
                        let n = {};
                        for (let t of e) (t.guildId in n || (n[t.guildId] = []), n[t.guildId].push(t));
                        let i = {};
                        for (let e of Object.keys(n)) {
                            let s = n[e];
                            i[e] = s.map((n) =>
                                cu.A.createFromServer(
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
                if ((!(0, ca.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in l || (l[e] = []), l[e].push(i));
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, i, n]);
    if (null == n || 0 === Object.keys(l).length) return null;
    let a = r > at.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, A.jsx)("div", {
        className: ch.kR,
        children: ou.default
            .keys(l)
            .map((e) => (0, A.jsx)(cp, { guildId: e, slots: l[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var cf = n(502572),
    cI = n(983511),
    c_ = n(342744),
    cN = n(496431);
let cC = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, cN.A)(n);
    return (0, A.jsx)(H.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, iu.uN)(i, { days: R.t.WUTPDc, hours: R.t.c1qodV, minutes: R.t["2+A3dv"] }),
    });
};
var cb = n(731536);
function cy(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        s = (0, h.bG)([oU.A], () => oU.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = E.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, ca.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != s ? at.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && i === tY.xc.NONE;
    return 0 === l.length
        ? null
        : (0, A.jsxs)("div", {
              className: cb.Nr,
              children: [
                  (0, A.jsxs)("div", {
                      className: cb.MY,
                      children: [
                          (0, A.jsxs)("div", {
                              className: cb._L,
                              children: [
                                  (0, A.jsxs)("div", {
                                      className: cb.MD,
                                      children: [
                                          (0, A.jsx)("img", { alt: "", className: cb.F8, src: cS }),
                                          (0, A.jsx)("div", {
                                              className: ir()(cb.qS, "theme-dark"),
                                              children: (0, A.jsx)("span", { className: cb.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, A.jsxs)("div", {
                                      className: cb.Qp,
                                      children: [
                                          (0, A.jsx)(H.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: R.intl.format(R.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                          (0, A.jsx)(H.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: R.intl.format(R.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, A.jsx)(cf.A, {
                              shouldShow: o,
                              text: R.intl.string(R.t.mOWsF1),
                              "aria-label": R.intl.string(R.t.mOWsF1),
                              children: (e) =>
                                  (0, A.jsx)(_.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: d2._,
                                      text: R.intl.string(R.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, sa.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("677508"),
                                                  n.e("418710"),
                                              ]).then(n.bind(n, 770101));
                                              return (t) =>
                                                  (0, A.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          (t.onClose(),
                                                              (0, cc.g)({
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
                  l.map((e, t) =>
                      (0, A.jsx)(
                          cv,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, ca.I5)(e),
                              isCanceled: (0, ca.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function cv(e) {
    let t,
        { slot: n, isLast: i, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = E.useRef(null),
        u = E.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]);
    t =
        l && null != r
            ? (0, A.jsx)(H.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: R.intl.format(R.t.Z4ULRD, { date: r.currentPeriodEnd }),
              })
            : n.isOnCooldown() && null != u
              ? (0, A.jsx)(cC, { cooldown: u.getTime() })
              : (0, A.jsx)(H.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: R.intl.string(R.t["2mcafz"]),
                });
    let d = s || l;
    return (0, A.jsxs)("div", {
        className: ir()(cb.iq, { [cb.Mt]: i }),
        children: [
            (0, A.jsxs)("div", {
                className: cb.kd,
                children: [(0, A.jsx)("img", { alt: "", className: cb.bB, src: cS }), t],
            }),
            d &&
                (0, A.jsx)(r7.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, A.jsxs)(cr.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": R.intl.string(R.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                s &&
                                    (0, A.jsx)(e3.Dr, {
                                        id: "cancel-boost",
                                        label: R.intl.string(R.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? R.intl.string(R.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, sa.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, A.jsx)(cI.default, { ...e, guildBoostSlot: n }),
                                                ));
                                        },
                                    }),
                                l &&
                                    (0, A.jsx)(e3.Dr, {
                                        id: "uncancel-boost",
                                        label: R.intl.string(R.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? R.intl.string(R.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, sa.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, A.jsx)(c_.default, { ...e, guildBoostSlotId: n.id }),
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
                            className: cb.Mj,
                            ...e,
                            children: (0, A.jsx)(ci.MoreHorizontalIcon, {
                                size: "xs",
                                color: nQ.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var cj = n(834612);
function cO(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = eT.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ),
        a = i?.isPaused === !0 && l !== tY.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, A.jsxs)("div", {
              className: cj.i,
              children: [
                  (0, A.jsxs)("div", {
                      className: cj.b,
                      children: [
                          (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.W5rDjW) }),
                          (0, A.jsx)(H.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: R.intl.format(R.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, A.jsx)(cT, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, A.jsx)(cy, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var cL = n(333722),
    cR = n(9146);
function cD() {
    return (0, A.jsxs)("div", {
        className: cR.iE,
        children: [
            (0, A.jsx)(p.D, { variant: "heading-xl/normal", children: R.intl.string(R.t.IzKs3o) }),
            (0, A.jsx)("div", {
                className: cR.kR,
                children: cL.s.map((e, t) => {
                    let n = e.icon;
                    return (0, A.jsxs)(
                        "div",
                        {
                            className: cR.Nr,
                            children: [
                                (0, A.jsx)(n, { className: cR.Kk }),
                                (0, A.jsx)(H.E, {
                                    className: cR.h_,
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
var cP = n(847374),
    cG = n(232122),
    cM = n(665984);
function cU() {
    let [e, t] = E.useState(null),
        [n, i] = E.useState(null);
    return (0, A.jsxs)("div", {
        className: cM.iE,
        children: [
            (0, A.jsx)(p.D, { variant: "heading-xl/normal", children: R.intl.string(R.t.HPJ6Nj) }),
            (0, A.jsx)("ul", {
                className: cM.p_,
                children: cG.m.map((s, l) => {
                    let r = e === l,
                        a = n === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, A.jsxs)(
                        n0.D,
                        {
                            tag: "li",
                            className: ir()(cM.Aw, { [cM.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => i(l),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, A.jsxs)("div", {
                                    className: cM.k7,
                                    children: [
                                        (0, A.jsx)(H.E, {
                                            className: cM.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, A.jsx)(cP.a, {
                                            size: "sm",
                                            color: nQ.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: cM.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, A.jsx)(H.E, {
                                        className: cM.ZF,
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
var cV = n(182859),
    ck = n(25525),
    cw = n(416763);
function cF() {
    let e = eT.A.getArticleURL(S.MVz.GUILD_SUBSCRIPTIONS);
    return (0, A.jsxs)("div", {
        className: cw.wx,
        children: [
            (0, A.jsxs)("div", {
                className: cw.Qs,
                children: [
                    (0, A.jsxs)("div", {
                        className: cw.B5,
                        children: [
                            (0, A.jsx)("img", { alt: "", className: cw.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, A.jsx)(p.D, {
                                variant: "heading-xl/normal",
                                children: R.intl.string(ck.default.hjvcLO),
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
            (0, A.jsx)(cV.A, {
                variant: "member",
                className: cw.iO,
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
var cB = n(315629),
    cz = n(87719),
    cY = n(961085);
function cX() {
    let e = (0, h.bG)([li.default], () => li.default.getCurrentUser());
    if (null == e || at.Ay.hasFreeBoosts(e)) return null;
    let t = eT.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ);
    return (0, A.jsxs)(cB.h, {
        color: "nitro-pink",
        className: cY.vK,
        children: [
            (0, A.jsxs)("div", {
                className: cY.nw,
                children: [
                    (0, A.jsx)("img", { alt: "", className: cY.q3, src: cS }),
                    (0, A.jsxs)("div", {
                        className: cY.Tm,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.format(R.t.Idh1Vs, { count: tY.M4, boostCount: tY.M4 }),
                            }),
                            (0, A.jsxs)("div", {
                                className: cY.xv,
                                children: [
                                    (0, A.jsx)(rJ.t, { className: cY.nE }),
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: R.intl.format(R.t["6UAu+f"], {
                                            count: tY.M4,
                                            boostCount: tY.M4,
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
                icon: rJ.t,
                text: R.intl.string(R.t["8x0jKT"]),
                onClick: cz.e,
            }),
        ],
    });
}
var cH = n(532991);
function cK() {
    let e = (0, h.bG)([d8.A], () => d8.A.affinities),
        t = (0, h.bG)([d7.Ay], () => d7.Ay.getFlattenedGuildIds()),
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
              className: cH.i,
              children: [
                  (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.r90Wgo) }),
                  (0, A.jsx)("div", { className: cH.k, children: n.map((e) => (0, A.jsx)(cE, { guildId: e }, e)) }),
              ],
          });
}
var cW = n(967246);
function cZ(e) {
    let { count: t, disabledReason: i } = e,
        s = eT.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ);
    return (0, A.jsxs)(cB.h, {
        color: "nitro-pink",
        className: cW.vK,
        children: [
            (0, A.jsxs)("div", {
                className: cW.nw,
                children: [
                    (0, A.jsxs)("div", {
                        className: cW.MD,
                        children: [
                            (0, A.jsx)("img", { alt: "", className: cW.F8, src: cS }),
                            (0, A.jsx)("div", {
                                className: ir()(cW.qS, "theme-dark"),
                                children: (0, A.jsx)("span", { className: cW.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, A.jsxs)("div", {
                        className: cW.Tm,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.format(R.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, A.jsxs)("div", {
                                className: cW.xv,
                                children: [
                                    (0, A.jsx)(rJ.t, { className: cW.nE }),
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: R.intl.format(R.t["6UAu+f"], {
                                            count: tY.M4,
                                            boostCount: tY.M4,
                                            helpdeskArticle: s,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)(cf.A, {
                shouldShow: null != i,
                text: i ?? "",
                "aria-label": i,
                children: (e) =>
                    (0, A.jsx)(_.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: d2._,
                        text: R.intl.string(R.t.BMx1iy),
                        disabled: null != i,
                        onClick: () => {
                            (0, sa.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("677508"), n.e("418710")]).then(
                                    n.bind(n, 770101),
                                );
                                return (t) =>
                                    (0, A.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            (t.onClose(),
                                                (0, cc.g)({
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
var cq = n(89150);
function cQ(e) {
    let { premiumSubscription: t } = e,
        n = (0, h.bG)([d9.A], () => d9.A.boostSlots),
        i = E.useMemo(() => Object.values(n), [n]),
        s = (0, h.bG)([li.default], () => li.default.getCurrentUser()),
        l = (0, h.bG)([d8.A], () => d8.A.affinities),
        r = (0, h.bG)([d7.Ay], () => d7.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = E.useMemo(() => i.filter((e) => null != e.premiumGuildSubscription), [i]).length,
        u = (0, h.bG)([d5.A], () => d5.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, ds.A)({ forceFetch: !0 }),
        c = s?.isPremiumGroupMember(),
        g = t?.isPausedOrPausePending === !0 && d === tY.xc.NONE,
        m = E.useMemo(() => i.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [i]),
        S = g ? R.intl.string(R.t.mOWsF1) : m ? void 0 : R.intl.string(R.t.xr4m5B),
        x = E.useMemo(() => {
            if (null == t) return 0;
            let e = at.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : Math.max(0, e - o);
        }, [t, i.length, o]);
    return (0, A.jsxs)("div", {
        className: cq.GO,
        children: [
            (0, A.jsx)(oY.kb, { className: cq.ek }),
            (0, A.jsx)(cF, {}),
            (0, A.jsx)(cX, {}),
            x > 0 && (0, A.jsx)(cZ, { count: x, disabledReason: S }),
            c && (0, A.jsx)(d4.A, {}),
            !a && (0, A.jsx)(cn, {}),
            (0, A.jsxs)("div", {
                className: cq.C_,
                children: [
                    (0, A.jsx)(cO, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, A.jsx)(cK, {}),
                    (0, A.jsx)(d6.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, A.jsx)(cD, {}),
                    (0, A.jsx)(cU, {}),
                ],
            }),
        ],
    });
}
var c$ = n(819677);
let cJ = (0, d.E2)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            E.useEffect(() => {
                e6.h.wait(() => {
                    (os.hP(), os.$o(), (0, d3.CD)(), (0, di.zS)(null, null, S.tF5.DISCOVERY), (0, d3.tO)(!0));
                });
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, h.cf)([oU.A], () => ({
                    hasFetchedSubscriptions: oU.A.hasFetchedSubscriptions(),
                    premiumSubscription: oU.A.getPremiumTypeSubscription(),
                })),
                n = (0, dl.Y)(),
                i = (0, h.bG)([oM.A], () => oM.A.hasFetchedPaymentSources),
                s = (0, h.bG)([d5.A], () => d5.A.isFetchingCurrentUserAppliedBoosts),
                l = !e || !n || !i || s,
                [r, a] = E.useState(!1);
            return (l || r || a(!0), l && !r)
                ? (0, A.jsx)("div", { className: ir()(c$.kL, c$.Lq), children: (0, A.jsx)(a7.y, {}) })
                : (0, A.jsxs)("div", {
                      className: c$.kL,
                      children: [
                          (0, A.jsx)("div", { className: c$.Tp }),
                          (0, A.jsx)("div", { className: c$.Qs, children: (0, A.jsx)(cQ, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t["+CbP2v"]), R.intl.string(R.t.Nn1lJy)],
    }),
    c0 = (0, d.zZ)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [cJ] }),
    c1 = (0, d.t_)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => R.intl.string(R.t["+CbP2v"]),
        buildLayout: () => [c0],
    }),
    c2 = (0, d.i4)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["+CbP2v"]),
        icon: d2._,
        buildLayout: () => [c1],
    });
var c3 = n(153659),
    c5 = n(155984),
    c6 = n(357758),
    c4 = n(262077),
    c8 = n(281445),
    c7 = n(933832),
    c9 = n(624479),
    ge = n(626584),
    gt = n(131607),
    gn = n(95035),
    gi = n(196736),
    gs = n(685743),
    gl = n(349085),
    gr = n(342942),
    ga = n(376205),
    go = n(252589),
    gu = n(758836),
    gd = n(49999),
    gc = n(394107),
    gg = n(439050);
let gm = new ge.A("GameServerSubscriptionsSection");
function gA(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function gE(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let gh = E.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: s } = (0, eP.Ay)(),
        l = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, gl.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, gt.kn)([eu.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eu.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = u_.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: m } = (0, gs.A)(c, t.id, tL.A.GAME_SERVER_PAGE, t.serverIp),
        x = E.useCallback(() => {
            (0, gr.A)({
                provider: c8.X.SHOCKBYTE,
                onAccept: () => {
                    (u(gd.i.TAKE_ACTION), g());
                },
            });
        }, [u, g]),
        {
            hasSubscription: p,
            priceLabel: T,
            dateLabel: f,
            isCanceled: I,
            isDanger: N,
        } = (0, h.bG)(
            [oU.A, uC.A],
            () => {
                let e = null != l ? oU.A.getSubscriptionById(l) : null;
                if (null == e)
                    return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    s = !t && null != e.renewalMutations,
                    r = s ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? uC.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? R.intl.formatToPlainString(R.t.AbOLNu, { price: (0, du.$g)(u, o.priceCurrency) })
                            : null,
                    c = gA(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? R.intl.formatToPlainString(gc.default["3aEgK6"], { date: c })
                        : s
                          ? R.intl.formatToPlainString(gc.default.KFSA3M, { date: c })
                          : R.intl.formatToPlainString(gc.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || s,
                };
            },
            [l, n, i],
            gE,
        ),
        C = E.useCallback(() => {
            if (null == l) return;
            let e = oU.A.getSubscriptionById(l),
                t = null != e ? gA(e.currentPeriodEnd) : "";
            (0, n$.A)({
                title: R.intl.string(gc.default.TEYPNR),
                subtitle: R.intl.formatToPlainString(gc.default.XR1WrB, { date: t }),
                confirmText: R.intl.string(R.t["cY+Oob"]),
                cancelText: R.intl.string(gc.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        (await os.M2(l, s), await os.hP());
                    } catch (e) {
                        gm.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [l, s]),
        b = E.useCallback(() => {
            if (null == l) return;
            let e = oU.A.getSubscriptionById(l);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? uC.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, du.$g)(u, o.priceCurrency) : "",
                c = gA(e.currentPeriodEnd);
            (0, n$.A)({
                title: R.intl.string(gc.default.o96qbc),
                subtitle: R.intl.formatToPlainString(gc.default["7n6Qq+"], { price: d, date: c }),
                confirmText: R.intl.string(R.t.iIvF2z),
                cancelText: R.intl.string(R.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, di.ur)(r);
                        let t = e.items;
                        (await os.nV(
                            e,
                            { status: S.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, at.UC)(t, e.currency),
                            s,
                        ),
                            await os.hP());
                    } catch (e) {
                        gm.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [l, r, s, n, i]),
        y = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, A.jsxs)("div", {
        className: gg.nM,
        children: [
            (0, A.jsxs)("div", {
                className: gg.M4,
                children: [
                    (0, A.jsxs)("div", {
                        className: gg.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, A.jsx)("img", { className: gg.uP, src: a, alt: "" }),
                            (0, A.jsx)("div", { className: gg.tw }),
                        ],
                    }),
                    (0, A.jsxs)("div", {
                        className: gg.CR,
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
                                          className: gg.CQ,
                                          children: [
                                              (0, A.jsx)(H.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, A.jsx)(n0.D, {
                                                  className: gg.cL,
                                                  onClick: g,
                                                  "aria-label": R.intl.string(R.t.OpuAlK),
                                                  children: m
                                                      ? (0, A.jsx)(c7.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, A.jsx)(c9.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, A.jsx)(gn.A, { onClick: x, children: R.intl.string(gc.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, A.jsxs)("div", {
                className: gg.Rd,
                children: [
                    (0, A.jsxs)("div", {
                        className: gg.Ff,
                        children: [
                            null != T &&
                                (0, A.jsx)(H.E, {
                                    variant: "text-md/semibold",
                                    color: "text-default",
                                    tag: "span",
                                    children: T,
                                }),
                            null != f &&
                                (N
                                    ? (0, A.jsxs)("div", {
                                          className: gg.ez,
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
function gS(e) {
    let { servers: t } = e,
        n = (0, gi.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, go.Y)(),
        s = (0, h.bG)([li.default], () => at.Ay.canUseShopDiscounts(li.default.getCurrentUser())),
        l = E.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, h.yK)([oU.A], () => (0, ga.HY)(t, i, (e) => oU.A.getSubscriptionById(e)), [t, i]);
    E.useEffect(() => {
        let e = r.filter((e) => !uC.A.isLoadedForSKU(e) && !uC.A.isFetchingForSKU(e));
        e.length > 0 && (0, di.jv)(e).catch(() => {});
    }, [r]);
    let a = E.useCallback(() => {
        ((0, tU.default)(), (0, tJ.pX)(S.BVt.COLLECTIBLES_SHOP_WITH_TAB(gu.G2.GAME_SERVERS)));
    }, []);
    return (0, A.jsxs)("div", {
        className: gg.uW,
        children: [
            (0, A.jsxs)("div", {
                className: gg.wx,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: R.intl.string(gc.default.vCzwM7),
                    }),
                    (0, A.jsxs)("div", {
                        className: gg.h_,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.string(gc.default.y85Eg9),
                            }),
                            n &&
                                (0, A.jsx)(gn.A, {
                                    onClick: a,
                                    children: (0, A.jsx)(H.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: R.intl.string(gc.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)("div", {
                className: gg.p_,
                children: t.map((e) =>
                    (0, A.jsx)(gh, { server: e, planOptionBySkuId: l, canUseShopDiscount: s }, e.id),
                ),
            }),
        ],
    });
}
var gx = n(55766),
    gp = n(696986),
    gT = n(364036);
function gf(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)(p.D, { variant: "heading-md/bold", children: R.intl.string(R.t["KzCF/6"]) }),
            (0, A.jsx)(gp.h, { size: 4 }),
            (0, A.jsx)(H.E, { variant: "text-md/normal", className: gT.yV, children: R.intl.string(R.t["3D7qCu"]) }),
            (0, A.jsx)(gp.h, { size: 24 }),
            (0, A.jsxs)("div", {
                className: gT.Nr,
                children: [
                    (0, A.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: gT.RI }),
                    (0, A.jsxs)("div", {
                        className: gT.FS,
                        children: [
                            (0, A.jsx)(p.D, {
                                variant: "heading-xl/semibold",
                                className: gT.wx,
                                children: R.intl.string(R.t["KzCF/6"]),
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-md/normal",
                                className: gT.h_,
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
var gI = n(872351),
    g_ = n(9113),
    gN = n(599941),
    gC = n(384684),
    gb = n(2242);
let gy = [];
var gv = n(885574),
    gj = n(912851),
    gO = n(182744);
let gL = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, A.jsx)(n0.D, {
        onClick: i ? void 0 : n,
        className: gO.x6,
        children: (0, A.jsxs)("div", {
            className: gO.hQ,
            children: [
                i
                    ? (0, A.jsx)(a7.y, { type: a7.y.Type.PULSING_ELLIPSIS, className: gO.__invalid_spinner })
                    : (0, A.jsx)(H.E, { variant: "text-md/medium", className: gO.Pf, children: t }),
                (0, A.jsx)(cP.a, { size: "md", color: "currentColor", className: gO.UE }),
            ],
        }),
    });
};
var gR = n(465932),
    gD = n(543767),
    gP = n(951555),
    gG = n(790284),
    gM = n(636194),
    gU = n(624456),
    gV = n(710144),
    gk = n(815332),
    gw = n(162093),
    gF = n(557506);
function gB(e) {
    let { transitionState: t, groupListing: n, listing: i, subscription: s, onClose: l } = e,
        r = (0, tw.GV)(),
        { analyticsLocations: a } = (0, eP.Ay)(tL.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = (function (e) {
            let [t, n] = E.useState(!1),
                [i, s] = E.useState(null);
            return {
                cancelSubscription: async function (t) {
                    try {
                        return (n(!0), await os.M2(t, e), !0);
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
    let g = i.role_benefits.benefits.filter((e) => e.ref_type === gb.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === gb.bN.INTANGIBLE),
        h = io()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        S = R.intl.formatToPlainString(R.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: h,
        });
    return (0, A.jsx)(sr.Modal, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: R.intl.string(R.t.EP6EPb), variant: "secondary", onClick: l },
            { variant: "critical-primary", text: R.intl.string(R.t.F6lUDF), onClick: c, loading: d },
        ],
        title: R.intl.string(R.t.O6l5tM),
        subtitle: S,
        onClose: l,
        children: (0, A.jsxs)(Y.B, {
            gap: 8,
            children: [
                null != u ? (0, A.jsx)(iz.w, { type: "critical", children: u.message }) : null,
                (0, A.jsx)(gw.x, { listingId: i.id, guildId: n.guild_id, className: gF.P }),
            ],
        }),
    });
}
var gz = n(319225),
    gY = n(746080),
    gX = n(883616);
function gH(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: s } = e;
    return (0, A.jsxs)("div", {
        className: gX.L0,
        children: [
            (0, A.jsxs)("div", {
                className: gX.a5,
                children: [
                    (0, A.jsx)(p.D, { variant: "heading-deprecated-12/semibold", className: gX.HU, children: t }),
                    i &&
                        (0, A.jsx)(st.m, {
                            text: s,
                            children: (0, A.jsx)(gv.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: gX.Mo,
                            }),
                        }),
                ],
            }),
            (0, A.jsx)(p.D, { variant: "heading-xl/semibold", className: gX.sx, children: n }),
        ],
    });
}
function gK(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, eP.Ay)(),
        [i] = (0, gD.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tL.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [s, l] = (0, h.yK)([oM.A], () => [oM.A.hasFetchedPaymentSources, oM.A.paymentSourceFetchError]);
    return null != i && (s || l)
        ? (0, A.jsx)(gP.A, { subscription: t, currentInvoicePreview: i })
        : (0, A.jsx)(a7.y, {});
}
function gW(e) {
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
        : (0, A.jsx)(tQ.D, {
              label: R.intl.string(R.t["4neDM+"]),
              children: (0, A.jsx)("div", {
                  className: gX.__invalid_rowButtons,
                  children: n
                      ? (0, A.jsx)(_.$, { variant: "primary", text: R.intl.string(R.t.y3mAE4), onClick: r, loading: i })
                      : (0, A.jsxs)(A.Fragment, {
                            children: [
                                !t && !s && (0, A.jsx)(gL, { label: R.intl.string(R.t.FRbWR8), onClick: a }),
                                (0, A.jsx)(gL, { label: R.intl.string(R.t.Dx0lF7), onClick: l }),
                            ],
                        }),
              }),
          });
}
let gZ = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: s,
            expanded: l,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, gU.M)(e),
                n = (0, h.bG)([gM.A], () => gM.A.getSubscriptionListingForPlan(t)),
                i = (0, h.bG)([gM.A], () =>
                    null != n ? gM.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                s = (0, h.bG)([sh.A], () => sh.A.getGuild(i?.guild_id)),
                [l, r] = E.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, gN.XE)();
            E.useEffect(() => {
                l && null != s && null == gM.A.getSubscriptionSettings(s.id) && a(s.id);
            }, [l, s, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = io()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, du.$g)(t.price, t.currency) : "",
                              s = io()(t.createdAt).format("M/D/YY"),
                              l = t.status === S.Dmq.CANCELED,
                              r = t.status === S.Dmq.PAST_DUE,
                              a = t.hasActiveTrial;
                          return {
                              memberSince: s,
                              nextRenewalDate: n,
                              nextRenewalLabel: l ? R.intl.string(R.t.UAfot2) : R.intl.string(R.t.CVjLcM),
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
        [o, u] = E.useState(!1),
        d = (0, tw.GV)(),
        { analyticsLocations: g } = (0, eP.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: m } = (0, gR.MH)(s?.id),
        x = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function p() {
        try {
            (u(!0),
                await os.QP(t, g),
                (0, gz.E)({ title: R.intl.string(R.t.oPV2cy), body: R.intl.string(R.t.DdRizV) }));
        } finally {
            u(!1);
        }
    }
    let {
            isCancelled: T,
            isPastDue: f,
            subscriptionPrice: I,
            memberSince: _,
            nextRenewalDate: N,
            nextRenewalLabel: C,
            isTrial: b,
        } = a,
        y = n.soft_deleted || null == s || x;
    return (0, A.jsxs)("div", {
        className: gX.kL,
        children: [
            (0, A.jsx)(gV.A, {
                onClick: r,
                className: gX.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, A.jsxs)(A.Fragment, {
                        children: [
                            null != s && (0, A.jsx)(cd.Ay, { guild: s, active: !0, size: cd.Ay.Sizes.MEDIUM }),
                            (0, A.jsxs)("div", {
                                className: gX.if,
                                children: [
                                    (0, A.jsx)(H.E, {
                                        variant: "text-md/medium",
                                        className: gX.J5,
                                        children: null != s ? s.name : R.intl.string(R.t["He+cmd"]),
                                    }),
                                    (0, A.jsxs)("div", {
                                        className: gX.xp,
                                        children: [
                                            (0, A.jsx)(H.E, {
                                                variant: "text-sm/normal",
                                                className: gX.KR,
                                                children: n.name,
                                            }),
                                            T
                                                ? (0, A.jsx)(tn.Lp, { text: R.intl.string(R.t["7uFZGt"]) })
                                                : b
                                                  ? (0, A.jsx)(tn.Lp, {
                                                        text: R.intl.string(R.t["6anton"]),
                                                        color: nQ.A.unsafe_rawColors.BRAND_500.css,
                                                    })
                                                  : f
                                                    ? (0, A.jsx)(st.m, {
                                                          text: R.intl.string(R.t.eSuJE2),
                                                          children: (0, A.jsx)("div", {
                                                              children: (0, A.jsx)(tn.Lp, {
                                                                  className: gX.qc,
                                                                  text: R.intl.string(R.t.NrRwIl),
                                                                  color: nQ.A.unsafe_rawColors.YELLOW_300.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            x
                                                ? (0, A.jsx)(st.m, {
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
                                "aria-expanded": l,
                                focusProps: { ringTarget: t },
                                children: (0, A.jsx)(cP.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ir()(gX.D6, { [gX.S7]: l }),
                                }),
                            }),
                        ],
                    });
                },
            }),
            null != i && l
                ? (0, A.jsxs)("div", {
                      id: d,
                      children: [
                          (0, A.jsx)("div", { className: gX.yF }),
                          (0, A.jsx)(gk.A, { groupListingId: i.id, subscription: t, className: gX.kE }),
                          (0, A.jsxs)("div", {
                              className: gX.Zx,
                              children: [
                                  (0, A.jsx)(gH, { label: C, value: N }),
                                  (0, A.jsx)(gH, {
                                      label: R.intl.string(R.t.dltUMH),
                                      value: I,
                                      showInfoIcon: b,
                                      infoIconTooltipText: b ? R.intl.string(R.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, A.jsx)(gH, { label: R.intl.string(R.t.AOcwWB), value: _ }),
                              ],
                          }),
                          (0, A.jsx)(gp.h, { size: 16 }),
                          !T &&
                              !x &&
                              (0, A.jsx)(tQ.D, {
                                  label: R.intl.string(R.t.wmMFvA),
                                  children: (0, A.jsx)(gK, { subscription: t }),
                              }),
                          !y &&
                              (0, A.jsx)(gW, {
                                  isTrial: b,
                                  isCancelled: T,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: m,
                                  onCancelSubscriptionClick: function () {
                                      if (null != s && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, sa.openModal)((t) => (0, A.jsx)(gB, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != s &&
                                          ((0, tJ.pX)(S.BVt.CHANNEL(s.id, gY.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tU.default)(),
                                          gj.A.show(
                                              S.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              R.intl.string(R.t.DvbaM4),
                                              () => {
                                                  (gG.A.setState({ subsection: eC.nR }),
                                                      (0, ns.openUserSettings)(c.X.SUBSCRIPTIONS_PANEL));
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
var gq = n(661097);
let gQ = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, h.bG)([gC.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [gC.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? gb.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? gb.M_.NONE
                                  : gb.M_.IN_SUBSCRIPTION_SERVER;
                        })([gC.A]),
                    ) === gb.M_.SUBSCRIBED,
                n = (0, h.bG)([oU.A], () => oU.A.getActiveGuildSubscriptions()),
                i = E.useRef(!1);
            return (
                E.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            s = oU.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !oU.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), os.hP());
                }, [e, t]),
                n ?? gy
            );
        })(),
        { loading: i } = (0, gN.eb)(n);
    return ((0, g_.A)(od.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, A.jsx)(a7.y, {})
        : 0 === n.length
          ? null
          : (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(_.$, { text: R.intl.string(R.t.hqyhKQ), icon: gI.z, variant: "secondary", onClick: t }),
                    (0, A.jsx)(gp.h, { size: 10 }),
                    (0, A.jsx)(nJ.n, {
                        label: R.intl.string(R.t["KzCF/6"]),
                        description: R.intl.string(R.t["Y+ucR7"]),
                        children: (0, A.jsx)("div", {
                            className: gq.A,
                            children: n.map((e) => (0, A.jsx)(gZ, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var g$ = n(327479),
    gJ = n(932012);
function g0(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)(p.D, { variant: "heading-md/bold", children: R.intl.string(R.t["48ywCu"]) }),
            (0, A.jsx)(gp.h, { size: 4 }),
            (0, A.jsx)(H.E, { variant: "text-md/normal", className: gJ.yV, children: R.intl.string(R.t.VWxmSo) }),
            (0, A.jsx)(gp.h, { size: 24 }),
            (0, A.jsxs)("div", {
                className: gJ.Nr,
                children: [
                    (0, A.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: gJ._e }),
                    (0, A.jsxs)("div", {
                        className: gJ.FS,
                        children: [
                            (0, A.jsx)(p.D, {
                                variant: "heading-xl/semibold",
                                className: gJ.wx,
                                children: R.intl.string(R.t["48ywCu"]),
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-md/normal",
                                className: gJ.h_,
                                children: R.intl.format(R.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, A.jsx)(g$.A, { onClick: t, text: R.intl.string(R.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var g1 = n(548411),
    g2 = n(417098),
    g3 = n(143582),
    g5 = n(915043),
    g6 = n(631466);
function g4(e) {
    let { className: t, header: n, headerClassName: i, children: s } = e,
        l = E.useMemo(() => {
            let e = !1;
            return (
                E.Children.forEach(s, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [s]);
    return (0, A.jsxs)("div", {
        className: ir()(g6.iE, t),
        children: [
            (0, A.jsx)("div", { className: ir()(g6.wx, i), children: n }),
            l && (0, A.jsx)("div", { className: g6.Qs, children: s }),
        ],
    });
}
var g8 = n(885996),
    g7 = n(144165),
    g9 = n(664121),
    me = n(950305),
    mt = n(943775),
    mn = n(123791),
    mi = n(900797),
    ms = n(611643);
let ml = E.createContext({ isOpen: !1, toggleOpen: () => {} });
function mr(e) {
    let { children: t } = e,
        [n, i] = E.useReducer((e) => !e, !1),
        s = E.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, A.jsx)(ml.Provider, { value: s, children: t(n) });
}
mr.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: s } = E.useContext(ml),
        l = i ? mi.t : cP.a,
        r = null != n ? n : i ? R.intl.string(R.t.fgq1gs) : R.intl.string(R.t.XJuakA);
    return (0, A.jsxs)(n0.D, {
        className: ir()(ms.L, t),
        onClick: s,
        children: [
            (0, A.jsx)(H.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, A.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var ma = n(627363),
    mo = n(243217),
    mu = n(328968),
    md = n(163437),
    mc = n(3432);
function mg(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var mm = n(562312),
    mA = (((s = {})[(s.LOADING = 0)] = "LOADING"), (s[(s.DONE = 1)] = "DONE"), (s[(s.ERROR = 2)] = "ERROR"), s);
function mE(e) {
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
            isOrphanedGuildSubscription: x,
            renewalPlan: T,
        } = (0, h.cf)(
            [uC.A, ub.A, mu.A, sh.A],
            () => {
                let e,
                    n = uC.A.get(r),
                    i = null != n ? ub.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? mu.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, md.PJ)(o.skuFlags),
                    d = u && null != s ? sh.A.getGuild(s) : void 0,
                    c = (0, md.Uo)(t, i),
                    g = u && null != s && null == d;
                if (!1 === c && null != l && l.items.length > 0) {
                    let t = l.items[0];
                    e = uC.A.get(t.planId) ?? void 0;
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
        { data: f } = (0, ma.YY)(a),
        I = E.useMemo(() => (null != f ? (0, mt.A)(f, 100) : null), [f]),
        _ = g?.deleted ?? !1,
        N = null != g && (0, md.Se)(g),
        C = t.status === S.Dmq.PAST_DUE,
        { analyticsLocations: b } = (0, eP.Ay)(),
        [y] = (0, gD.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: tL.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = mg(t.currentPeriodEnd),
        j = 0 === i;
    return (0, A.jsxs)(g4, {
        headerClassName: mm.dL,
        header:
            !1 === j
                ? (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsxs)("div", {
                              className: mm.VW,
                              children: [
                                  null != I &&
                                      (0, A.jsx)(g7._, { src: I.href, imageClassName: mm.Z2, width: 40, height: 40 }),
                                  (0, A.jsxs)("div", {
                                      className: mm.aF,
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
                              className: mm.Pz,
                              children:
                                  null != f &&
                                  null != u &&
                                  null != g &&
                                  (0, A.jsx)(mT, {
                                      subscription: t,
                                      app: f,
                                      guild: c,
                                      sku: g,
                                      storeListing: u,
                                      isCancelled: m,
                                      isOrphanedGuildSubscription: x,
                                      navigateToSwitchPlan: n,
                                      renewalSkuId: T?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, A.jsx)(a7.y, { type: a7.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, A.jsx)(mp, {
                    type: "warning",
                    title: N
                        ? R.intl.formatToPlainString(R.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : R.intl.formatToPlainString(R.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && x && (0, A.jsx)(mp, { type: "warning", title: R.intl.string(R.t.SmSP8Q) }),
            C && (0, A.jsx)(mp, { type: "danger", title: R.intl.string(R.t.fvOqBo) }),
            (0, A.jsxs)("div", {
                className: mm.zH,
                children: [
                    (0, A.jsx)(mx, {
                        title: R.intl.string(R.t["5D/KEH"]),
                        content: d
                            ? (0, A.jsxs)(A.Fragment, {
                                  children: [
                                      (0, A.jsxs)("span", {
                                          className: mm.yW,
                                          children: [(0, A.jsx)(g9.R, { size: "xs" }), R.intl.string(R.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, A.jsxs)("span", {
                                              className: mm._t,
                                              children: [
                                                  (0, A.jsx)(H.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: R.intl.format(R.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, A.jsx)(cd.Ay, { guild: c, size: cd.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, A.jsxs)("span", {
                                  className: mm.yW,
                                  children: [(0, A.jsx)(me.UserIcon, { size: "xs" }), R.intl.string(R.t["6anEVv"])],
                              }),
                    }),
                    (0, A.jsx)(mh, { invoicePreview: y, subscriptionPlan: o }),
                    (0, A.jsx)(mx, {
                        title: R.intl.string(R.t.dnUzb6),
                        content: mg(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, A.jsx)(mS, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: T }),
                ],
            }),
            (0, A.jsx)(mI, {
                subscription: t,
                currentInvoicePreview: y,
                loadingState: i,
                isDeleted: _,
                isCancelled: m,
            }),
            null != f &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, A.jsx)(mf, { appId: f.id, listingBenefits: u.benefits }),
        ],
    });
}
function mh(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, A.jsx)(mx, { title: R.intl.string(R.t.KI7ERx), content: "" });
    let i = (0, du.CE)((0, du.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = n?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, A.jsx)(mx, { title: R.intl.string(R.t.KI7ERx), content: i });
    let l = (0, du.CE)((0, du.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, A.jsx)(mx, {
        title: R.intl.string(R.t.KI7ERx),
        content: (0, A.jsxs)(A.Fragment, {
            children: [
                (0, A.jsx)(H.E, { variant: "text-sm/semibold", children: l }),
                l !== i &&
                    (0, A.jsx)(st.m, {
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
function mS(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, du.CE)((0, du.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, A.jsx)(mx, {
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
    return (0, A.jsx)(mx, { title: t ? R.intl.string(R.t.enxcAl) : R.intl.string(R.t["Ms+6Zq"]), content: n });
}
function mx(e) {
    let { title: t, content: n } = e;
    return (0, A.jsxs)("div", {
        className: mm.nM,
        children: [
            (0, A.jsx)(H.E, { variant: "text-sm/medium", children: t }),
            (0, A.jsx)(H.E, { variant: "text-sm/medium", className: mm.u4, children: n }),
        ],
    });
}
function mp(e) {
    let { type: t, title: n } = e;
    return (0, A.jsx)(r0.p, {
        messageType: "warning" === t ? r0.Y.WARNING : r0.Y.ERROR,
        className: mm.Xm,
        children: (0, A.jsx)(H.E, { variant: "text-sm/normal", children: n }),
    });
}
function mT(e) {
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
        c = (0, md.Se)(s),
        { analyticsLocations: g } = (0, eP.Ay)(),
        [m, S] = E.useState(!1),
        x = (0, mn.C)(t.id),
        p = (0, h.bG)([ub.A], () => ub.A.getParentSKU(i.skuId), [i.skuId]),
        T = E.useMemo(() => {
            var e, t;
            let n;
            return null == p
                ? []
                : ((e = i.id),
                  (t = x.subscriptions),
                  (n = new Set(p.bundledSkuIds)),
                  t.filter((t) => t.id !== e && n.has(t.skuId)));
        }, [i.id, x, p]),
        f = 0 !== T.length;
    async function I() {
        try {
            S(!0);
            let { subscription: e } = await (0, os.QP)(l, g);
            if (null == e) return;
            (0, sa.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, A.jsx)(t, { ...n, storeListing: i, subscription: mo.A.createFromServer(e) });
            });
        } finally {
            S(!1);
        }
    }
    return (0, A.jsxs)("div", {
        className: mm.fw,
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
                            (0, sa.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("509032"), n.e("622800")]).then(
                                    n.bind(n, 301139),
                                );
                                return (n) =>
                                    (0, A.jsx)(e, { ...n, application: t, storeListing: i, subscription: l, guild: o });
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
                            currentSubscription: l,
                            alternativeListings: T,
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
function mf(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, A.jsx)(mr, {
        children: (e) =>
            (0, A.jsxs)("div", {
                className: mm.PX,
                children: [
                    (0, A.jsxs)("div", {
                        className: mm.wV,
                        children: [
                            e && (0, A.jsx)(H.E, { variant: "text-sm/semibold", children: R.intl.string(R.t.mORL67) }),
                            (0, A.jsx)(mr.Toggle, {
                                className: mm.Bh,
                                text: e ? R.intl.string(R.t.gsbFAw) : R.intl.string(R.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: s, icon: l } = e;
                              return (0, A.jsx)(g8.FY, { header: i, icon: (0, mc.N)(t, l), description: s }, n);
                          })
                        : null,
                ],
            }),
    });
}
function mI(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: s, isCancelled: l } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, A.jsx)("div", {
                className: mm.Ji,
                children: (0, A.jsx)(tQ.D, {
                    label: R.intl.string(R.t.azZaZa),
                    children: (0, A.jsx)(a7.y, { type: a7.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, A.jsx)("div", {
                  className: mm.Ji,
                  children: (0, A.jsxs)(g2.$T, {
                      color: g2.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          R.intl.format(R.t.IIHUUF, { subscriptionId: t.id }),
                          (0, A.jsx)("br", {}),
                          R.intl.format(R.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, A.jsx)("div", {
                  className: mm.Ji,
                  children: (0, A.jsx)(tQ.D, {
                      label: R.intl.string(R.t.azZaZa),
                      children: (0, A.jsx)(gP.A, { subscription: t, currentInvoicePreview: n, disabled: s || l }),
                  }),
              });
}
var m_ = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
n(938796);
var mN = n(38405);
let mC = (0, h.UT)(uC.A, {
    getQueryId: S.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = uC.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && mN.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, di.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var mb = n(240248),
    my = n(237218),
    mv = n(763064);
function mj(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [s, l] = E.useState(!1),
        [r, a] = E.useState(null),
        o =
            null != r &&
            (0, A.jsx)("button", {
                className: mv.x6,
                onClick: () => l((e) => !e),
                children: (0, A.jsxs)(H.E, {
                    className: mv.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? R.intl.string(R.t["JQX/Pb"]) : R.intl.string(R.t.Fbrd8J),
                        s
                            ? (0, A.jsx)(mi.t, { color: nQ.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, A.jsx)(cP.a, { color: nQ.A.colors.TEXT_BRAND, size: "xs" }),
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
        null != r && (g = s ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, A.jsxs)("div", {
            children: [
                (0, A.jsx)(H.E, {
                    ...i,
                    className: mv.Qs,
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
var mO = n(920352);
function mL(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: s, benefits: l, description: r } = n,
        a = E.useMemo(() => (null == n.thumbnail ? null : (0, my.t)(s, n.thumbnail, 256)), [s, n.thumbnail]),
        { data: o } = mC(n.skuId),
        u = E.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, du._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, A.jsxs)(g4, {
              className: ir()(mO.iE, i),
              header: (0, A.jsxs)(A.Fragment, {
                  children: [
                      (0, A.jsxs)("div", {
                          className: mO.qd,
                          children: [
                              null != a &&
                                  (0, A.jsx)(g7._, { src: a.href, imageClassName: mO.rW, width: 48, height: 48 }),
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
                  !(0, mb.uJ)(r) &&
                      (0, A.jsx)("div", {
                          className: mO.h_,
                          children: (0, A.jsx)(mj, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, A.jsx)("div", {
                          className: mO.PX,
                          children: l.map((e) => {
                              let { id: t, name: n, description: i, icon: l } = e;
                              return (0, A.jsx)(g8.FY, { header: n, icon: (0, mc.N)(s, l), description: i }, t);
                          }),
                      }),
              ],
          });
}
var mR = n(185438),
    mD = n(683380);
function mP(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, mt.A)(t, 100),
        u = (0, md.PJ)(r.flags),
        d = u ? g9.R : me.UserIcon,
        c = u ? R.intl.string(R.t["46YF2D"]) : R.intl.string(R.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, h.bG)([sh.A], () => (u && null != g ? sh.A.getGuild(g) : void 0), [g, u]),
        E = (0, h.bG)(
            [ub.A],
            () => {
                if (null != a) return ub.A.get(a);
            },
            [a],
        ),
        S = mg(n.currentPeriodEnd);
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsxs)("div", {
                className: mD.wx,
                children: [
                    null != o && (0, A.jsx)(g7._, { src: o.href, imageClassName: mD.Z2, width: 48, height: 48 }),
                    (0, A.jsxs)("div", {
                        children: [
                            (0, A.jsx)(p.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, A.jsxs)("div", {
                                className: mD.p4,
                                children: [
                                    (0, A.jsxs)(p.D, {
                                        variant: "heading-md/normal",
                                        className: mD.N4,
                                        children: [(0, A.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, A.jsxs)(A.Fragment, {
                                            children: [
                                                (0, A.jsx)(H.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, A.jsxs)("span", {
                                                    className: mD.vP,
                                                    children: [
                                                        (0, A.jsx)(cd.Ay, { guild: m, size: cd.Ay.Sizes.SMOL }),
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
            (0, A.jsx)(mr, {
                children: (e) =>
                    (0, A.jsxs)("div", {
                        className: mD._B,
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
                            (0, A.jsx)(mr.Toggle, {
                                text: e ? R.intl.string(R.t["1Rkq/E"]) : R.intl.string(R.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, A.jsxs)("div", {
                className: mD.x0,
                children: [
                    (0, A.jsx)(mL, {
                        storeListing: i,
                        className: mD.o3,
                        cta: (0, A.jsxs)("div", {
                            className: mD.cJ,
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
                    s.map((e) =>
                        e.skuId === a
                            ? (0, A.jsx)(
                                  mL,
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
                            : (0, A.jsx)(mG, { storeListing: e, guildId: g, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function mG(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: s } = (0, mR.A)({
            analyticsLocation: S.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, A.jsx)(mL, {
        storeListing: t,
        cta: (0, A.jsx)(_.$, { variant: "primary", size: "sm", text: R.intl.string(R.t["+KwmBt"]), onClick: s }),
    });
}
class mM extends E.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, A.jsxs)(g2.$T, {
                  color: g2.Hv.DANGER,
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
function mU(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, s] = E.useState({ route: m_.HOME }),
        { route: l } = i;
    function r() {
        s({ route: m_.HOME });
    }
    let a = (e) => {
            (s({ route: m_.SWITCH_APP_PLANS, ...e }), n(R.intl.string(R.t.VFqtkP), r));
        },
        [o, u] = E.useState({});
    E.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: mA.LOADING })),
                (0, g3._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: mA.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: mA.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, g5.E)(),
        c = d !== g5.mJ.LOADED;
    switch (l) {
        case m_.HOME:
            return (0, A.jsx)(A.Fragment, {
                children: t.map((e) =>
                    (0, A.jsx)(
                        mM,
                        {
                            subscription: e,
                            children: (0, A.jsx)(mE, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? mA.LOADING : (o[e.id] ?? mA.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case m_.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, A.jsx)(mP, { ...m, navigateToHome: r });
        default:
            (0, ii.xb)(l);
    }
}
var mV = n(707989);
function mk(e) {
    let { onGoBack: t } = e,
        n = (0, h.yK)(
            [oU.A],
            () =>
                oU.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, s] = E.useState();
    return (
        null == i && (i = (0, A.jsx)(mw, { onBack: t, title: R.intl.string(R.t["DB/m9a"]) })),
        (0, A.jsxs)("div", {
            children: [
                i,
                (0, A.jsx)("div", {
                    className: mV.A,
                    children: (0, A.jsx)(mU, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            s(
                                (0, A.jsx)(mw, {
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
function mw(e) {
    let { onBack: t, title: n } = e;
    return (0, A.jsxs)("div", {
        className: mV.D,
        children: [
            (0, A.jsx)(i9.K, {
                "aria-label": R.intl.string(R.t["13/7kX"]),
                icon: () => (0, A.jsx)(g1.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, A.jsx)(p.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var mF = n(366999),
    mB = n(391659);
function mz(e) {
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
        ? ((t = R.intl.string(dY.default["/S02sx"])), (n = R.intl.string(dY.default.OPJNST)))
        : i
          ? ((t = R.intl.string(R.t["hT6i/0"])),
            (n = null != a ? R.intl.format(R.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = R.intl.string(R.t["3G0CTC"])),
            (n = r === tY.xc.FP_SUB_PAUSED ? R.intl.format(R.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = ir()({ [mB.Hs]: i, [mB.mT]: !i }),
        d = ir()({ [mB.CQ]: i, [mB.ZM]: !i }),
        c = ir()({ [mB.EM]: !i });
    return (0, A.jsxs)("div", {
        className: mB.r6,
        children: [
            (0, A.jsxs)("div", {
                className: mB.Nv,
                children: [
                    (0, A.jsx)(p.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, A.jsx)(H.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, A.jsx)("div", {
                    className: mB.ZS,
                    children: (0, A.jsx)("div", {
                        className: u,
                        children: (0, A.jsx)(H.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let mY = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: s } = e,
        l = (0, at.kX)(t),
        r = l.length > 0,
        a = (0, mF.Ay)(t.endsAt, mF.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, A.jsx)("div", {
        children: (0, A.jsxs)("div", {
            className: ir()(n, mB.f8),
            children: [
                (0, A.jsx)("div", {
                    className: mB.J_,
                    children: (0, A.jsxs)("div", {
                        className: mB.Bh,
                        children: [
                            (0, A.jsx)("div", {
                                className: mB.xt,
                                children: (0, A.jsx)(rJ.t, { size: "md", color: "white", className: mB.T8 }),
                            }),
                            (0, A.jsx)("div", {
                                className: mB.pt,
                                children: (0, A.jsx)(p.D, {
                                    variant: "heading-md/semibold",
                                    children: R.intl.string(R.t.DFMPWS),
                                }),
                            }),
                            (0, A.jsx)(H.E, {
                                className: mB.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : R.intl.string(R.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, A.jsx)(mz, {
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
var mX = n(983048);
function mH(e) {
    let t,
        {
            user: n,
            planId: i,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, h.yK)([uC.A], () => [uC.A.get(i), null != l ? uC.A.get(l.planId) : null]);
    if (null == o || at.Ay.getInterval(i).intervalType !== tY.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, at.z4)(i),
        m = at.Ay.getDisplayName(i);
    if (a) t = R.intl.string(dY.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === S.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let n = (0, at._e)(e, r);
        t = R.intl.formatToPlainString(R.t["5CNRRA"], { date: n ?? 0 });
    } else t = R.intl.formatToPlainString(R.t.eNXZ5O, { planName: m });
    let E = g || n.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, A.jsxs)("div", {
        className: mB.Bh,
        children: [
            (0, A.jsx)("div", {
                className: ir()({
                    [mB.bY]: g,
                    [mB.sr]: o.skuId === tY.pe.TIER_0,
                    [mB.lP]: o.skuId === tY.pe.TIER_1,
                    [mB.eb]: o.skuId === tY.pe.TIER_2,
                }),
                children: g
                    ? (0, A.jsx)(d2._, { size: "md", color: "currentColor", className: mB.Kk })
                    : (0, A.jsx)(rJ.t, { size: "md", color: "currentColor", className: mB.Kk }),
            }),
            (0, A.jsxs)("div", {
                className: mB.pt,
                children: [
                    (0, A.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        children: R.intl.format(R.t.LzobT9, { planName: m }),
                    }),
                    !E &&
                        (0, A.jsx)(p.D, {
                            className: mB.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, A.jsx)(H.E, {
                className: mB.PJ,
                variant: "text-md/semibold",
                children: R.intl.format(R.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let mK = function (e) {
    let { className: t, entitlements: n } = e,
        i = B()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, h.yK)([ug.A], () => ug.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, h.bG)([oU.A], () => oU.A.getPremiumSubscription()),
        r = (0, h.bG)([oU.A], () => null == oU.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === tY.gD.PREMIUM_MONTH_TIER_1),
        o = (0, h.bG)([li.default], () => li.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)("div", {
                className: ir()(t, mB.xF, mB.J_),
                children: Object.keys(i).map((e) =>
                    (0, A.jsx)(
                        mH,
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
                (0, A.jsxs)("div", {
                    children: [
                        (0, A.jsx)(H.E, {
                            className: mB.eT,
                            variant: "text-md/normal",
                            children: R.intl.string(R.t["VNr4+O"]),
                        }),
                        (0, A.jsx)(mX.i, {}),
                    ],
                }),
        ],
    });
};
var mW = n(902782);
function mZ(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: s } = (0, eP.Ay)(),
        [l] = (0, gD.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: tL.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = i ? mW.r : mW.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, at.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = uC.A.get(o);
    ta()(null != u, "Missing plan");
    let d = (0, du.$g)(l.total, l.currency);
    return (
        u.interval === tY.WT.YEAR
            ? (t = R.intl.format(R.t["jPz/39"], {
                  price: d,
                  termsUrl: S.X7G.TERMS,
                  paidURL: S.X7G.PAID_TERMS,
                  privacyUrl: S.X7G.PRIVACY,
              }))
            : u.interval === tY.WT.MONTH &&
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
function mq(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === S.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, A.jsx)(mZ, { subscription: t, withOverheadSeparator: n });
}
var mQ = n(963897),
    m$ = n(689255);
let mJ = { [eC.nR]: "role_subscriptions_panel", [eC.PZ]: "application_subscriptions_panel" };
function m0() {
    return (0, A.jsx)(oc.Z, {
        className: m$.wb,
        type: oc.Z.Types.CUSTOM,
        children: (0, A.jsxs)(sg.A, {
            align: sg.A.Align.CENTER,
            children: [
                (0, A.jsx)(i0.A, { game: null, size: i0.M.SMALL, className: m$.pV }),
                (0, A.jsx)("span", { className: m$.O, children: R.intl.string(R.t["jy/hyj"]) }),
            ],
        }),
    });
}
function m1(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, c6._)(e, t));
}
function m2() {
    let e = (0, h.bG)([ug.A], () => ug.A.getForApplication(tY.tv), [], m1);
    return (
        E.useEffect(() => {
            (0, uz.LM)(tY.tv);
        }, []),
        (0, A.jsx)(nJ.n, {
            label: R.intl.string(R.t["2GKrvn"]),
            description: R.intl.string(R.t.Z5b2Gf),
            children:
                null != e && at.Ay.hasAccountCredit(e)
                    ? (0, A.jsx)(mK, { className: m$.fX, entitlements: e })
                    : (0, A.jsx)(m0, {}),
        })
    );
}
function m3() {
    return (0, A.jsx)("hr", { className: m$.hr });
}
let m5 = function () {
        var e;
        let t = (0, h.bG)([oU.A], () => oU.A.getPremiumTypeSubscription()),
            n = (0, c4.A)({ subscriptionFilter: (e) => mQ.Hy.has(e.status) }),
            i = (0, h.bG)([li.default], () => li.default.getCurrentUser()),
            s = n.length > 1,
            l = (0, h.bG)(
                [oM.A],
                () => (null != t && null != t.paymentSourceId ? oM.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, h.bG)([oU.A], () => oU.A.hasFetchedSubscriptions()),
            a = (0, h.bG)([oa.A], () => oa.A.isBusy),
            o = (0, dl.Y)(),
            u = gG.A.useField("subsection"),
            d = gG.A.useField("scrollToGameServers"),
            g = E.useRef(null);
        E.useEffect(() => {
            (0, n4._)(null != u ? mJ[u] : c.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let m = (0, h.bG)([oU.A], () => oU.A.getActiveApplicationSubscriptions()?.length ?? 0),
            x = (0, h.bG)(
                [oU.A],
                () =>
                    Object.values(oU.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === S.rzx.GUILD)
                        .filter((e) => e.status !== S.Dmq.ENDED).length,
            ),
            T = (0, h.bG)([oU.A], () =>
                Object.values(oU.A.getSubscriptions() ?? {}).some((e) => e.type === S.rzx.GAME_SERVER),
            ),
            { servers: f } = (0, gx.f)({ enabled: T }),
            I = (0, h.yK)([oU.A], () => (0, ga.eP)(f, (e) => oU.A.getSubscriptionById(e)), [f]),
            _ = (0, ds.A)({ forceFetch: !0 }),
            N = (0, dc.ds)(),
            C = null !== t ? t.currentPeriodEnd : void 0,
            b =
                !(N && !(_.unactivatedUnits.length > 0)) &&
                (_.fractionalState !== tY.xc.NONE || _.unactivatedUnits.length > 0);
        return (E.useEffect(() => {
            d &&
                r &&
                o &&
                I.length > 0 &&
                (g.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                gG.A.setState({ scrollToGameServers: !1 }));
        }, [d, r, o, I.length]),
        E.useEffect(
            () => (
                e6.h.wait(() => {
                    ((0, di.zS)(), os.hP(), (0, d3.CD)(), os.$o());
                }),
                function () {
                    gG.A.resetState();
                }
            ),
            [],
        ),
        te.A.enabled)
            ? (0, A.jsx)(a4.A, {})
            : r && o
              ? u === eC.nR
                  ? (0, A.jsx)(gQ, { onGoBack: () => gG.A.setState({ subsection: null }) })
                  : u === eC.PZ
                    ? (0, A.jsx)(mk, { onGoBack: () => gG.A.setState({ subsection: null }) })
                    : (0, A.jsx)("div", {
                          className: m$.kL,
                          children: (0, A.jsxs)("div", {
                              className: m$.Qs,
                              children: [
                                  s ? (0, A.jsx)(mQ.Sb, {}) : null,
                                  null != t
                                      ? (0, A.jsx)(mQ.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, A.jsx)(mQ.TC, {}),
                                  b &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, A.jsxs)("section", {
                                          children: [
                                              (0, A.jsx)(p.D, {
                                                  variant: "heading-md/bold",
                                                  className: m$.HL,
                                                  children: R.intl.string(R.t.Obre8v),
                                              }),
                                              (0, A.jsx)(H.E, {
                                                  variant: "text-md/normal",
                                                  className: m$.JU,
                                                  children: R.intl.format(R.t["7Zi06b"], {
                                                      helpCenterLink: eT.A.getArticleURL(
                                                          S.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, A.jsx)(mY, {
                                                  className: m$.fX,
                                                  fractionalPremiumInfo: _,
                                                  activationDate: C,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, A.jsx)(m2, {}),
                                  x > 0 &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)(m3, {}),
                                              (0, A.jsx)(gf, {
                                                  count: x,
                                                  onClickManageSubscription: () => gG.A.setState({ subsection: eC.nR }),
                                              }),
                                          ],
                                      }),
                                  m > 0 &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)(m3, {}),
                                              (0, A.jsx)(g0, {
                                                  count: m,
                                                  onClickManageSubscription: () => {
                                                      (gG.A.setState({ subsection: eC.PZ }),
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
                                          children: [(0, A.jsx)(m3, {}), (0, A.jsx)(gS, { servers: I })],
                                      }),
                                  (0, A.jsx)(m3, {}),
                                  null != t ? (0, A.jsx)(mq, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, A.jsx)("div", { className: ir()(m$.kL, m$.Lq), children: (0, A.jsx)(a7.y, {}) });
    },
    m6 = (0, d.E2)(c.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [R.intl.string(R.t.trSpHX), R.intl.string(R.t["2GKrvn"])],
        Component: () => (0, A.jsx)(m5, {}),
    }),
    m4 = (0, d.zZ)(c.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [R.intl.string(R.t.trSpHX), R.intl.string(R.t["2GKrvn"])],
        buildLayout: () => [m6],
    }),
    m8 = (0, d.t_)(c.X.SUBSCRIPTIONS_PANEL, { useTitle: () => R.intl.string(R.t.trSpHX), buildLayout: () => [m4] }),
    m7 = (0, d.i4)(c.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.trSpHX),
        icon: c3.L,
        usePersistentBadge: function () {
            let e = (0, c5.l)();
            return E.useMemo(
                () => ({
                    badgeType: m.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, A.jsx)(iX.E, { size: "xs", color: nQ.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [m8],
    }),
    m9 = (0, d.WI)(c.X.BILLING_SECTION, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        buildLayout: () => [d1, c2, m7, u8, oW],
    });
var Ae = n(540999),
    At = n(306471),
    An = n(964355),
    Ai = n(172272);
let As = (0, d.zD)(c.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, h.bG)([l3.default], () => l3.default.isAxeEnabled),
        setValue: (e) => (0, l2.x)({ axeEnabled: e }),
    }),
    Al = (0, d.zD)(c.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, h.bG)([l3.default], () => l3.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, l2.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var Ar = n(276086),
    Aa = n(354328);
let Ao = (0, d.zD)(c.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, Aa.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, Ar.L)("highlight_mana_components", e);
        },
    }),
    Au = (0, d.zD)(c.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, Aa.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, Ar.L)("highlight_mana_text_overrides", e);
        },
    }),
    Ad = (0, d.zD)(c.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, Aa.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, Ar.L)("highlight_mana_text", e);
        },
    }),
    Ac = (0, d.zD)(c.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, Aa.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, Ar.L)("highlight_void_toggleables", e);
        },
    }),
    Ag = (0, d.sN)(c.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, h.bG)([l3.default], () => l3.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: Ai.YR,
        markers: Array.from({ length: Ai.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => Ai.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            Ai.Or.getState().setHorizontalSpacing(e);
        },
    }),
    Am = (0, d.zD)(c.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, h.bG)([l3.default], () => l3.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, l2.x)({ layoutDebuggingEnabled: e });
        },
    }),
    AA = (0, d.sN)(c.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, h.bG)([l3.default], () => l3.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: Ai.YR,
        markers: Array.from({ length: Ai.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => Ai.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            Ai.Or.getState().setVerticalSpacing(e);
        },
    }),
    AE = (0, d.zZ)(c.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [Al, Am, Ag, AA, Ao, Ad, Au, Ac, As],
    });
var Ah = n(246605),
    AS = n(274184);
let Ax = (0, d.E2)(c.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, h.bG)([AS.Ay], () => AS.Ay.getActionTriggeredSurveyOverride());
            return (0, A.jsx)(A$, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => Ah.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    Ap = (0, d.zD)(c.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => L.HZ.useSetting(),
        setValue: (e) => {
            L.HZ.updateSetting(e);
        },
    });
var AT = n(396478),
    Af = n(173936),
    AI = n(103557),
    A_ = n(414079),
    AN = n(148810),
    AC = n(380610),
    Ab = n(986238),
    Ay = n(428524),
    Av = n(252149),
    Aj = n(221851);
let AO = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    AL = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function AR(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class AD extends E.Component {
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
        return (0, A.jsxs)(sg.A, {
            direction: sg.A.Direction.VERTICAL,
            className: ir()(Ay.oS, Aj.SX, Av.N, Ay.nM),
            children: [
                (0, A.jsx)(A_.A, {
                    className: ir()(Ay.lL, { [Ay.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, A.jsxs)(sg.A, {
                    className: Aj.QB,
                    children: [
                        (0, A.jsx)(sg.A.Child, {
                            basis: "50%",
                            children: (0, A.jsx)(i7.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: AL,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: i,
                            }),
                        }),
                        (0, A.jsx)(sg.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, A.jsx)(so.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, A.jsxs)(sg.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, A.jsx)(H.E, {
                                className: Ay.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, A.jsxs)(H.E, {
                            variant: "text-sm/normal",
                            className: Ay.AS,
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
class AP extends E.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, AC.bD)();
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
        return B().without(AO, ...t);
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
        this.setState({ buildOverrides: B().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, AN.Zk)(e);
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
        (0, sa.openModal)((t) => (0, A.jsx)(AG, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, A.jsx)(AT.pp, {
            theme: nU.A.theme,
            className: ir()(Aj.eT, Aj.SX),
            children: (0, A.jsx)(AT.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : B().map(e, (e, i) =>
                  (0, A.jsx)(
                      AD,
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
            : (0, A.jsx)(st.m, {
                  text: "Generate Public Link",
                  children: (0, A.jsx)(i9.K, {
                      variant: "secondary",
                      icon: Af.LinkIcon,
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
                    disabled: AR(t ?? {}),
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
            ? (0, A.jsx)(a7.y, { className: Aj.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !n && !t && this.getAvailableProjects().length > 0,
            l =
                AR(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, A.jsx)(H.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, A.jsx)(nJ.n, {
            children: (0, A.jsxs)(Y.B, {
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
                        disabled: !s,
                    }),
                    l,
                    e,
                    (0, A.jsxs)(lF.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class AG extends E.Component {
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
        e.key === sy.dh.ENTER && this.handleAddAllowedVersion();
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
            t = await (0, AN.SB)(e);
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
        return AR(this.props.buildOverrides ?? {});
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
            d = Ab.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, A.jsxs)(Y.B, {
            gap: 20,
            children: [
                (0, A.jsx)(i7.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: Ab.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, A.jsx)(i7.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: Ab.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, A.jsxs)(Y.B, {
                          gap: 20,
                          children: [
                              (0, A.jsx)(so.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
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
                                  disabled: 0 === s.length,
                              }),
                          ],
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, A.jsx)(AI.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, A.jsx)(AI.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, A.jsx)(t$.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, A.jsx)("div", {});
        let n = r0.Y.INFO;
        switch (t) {
            case 0:
                n = r0.Y.ERROR;
                break;
            case 1:
                n = r0.Y.WARNING;
        }
        return (0, A.jsx)(r0.p, { messageType: n, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, A.jsx)(sr.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, A.jsx)(uV.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let AM = (0, d.E2)(c.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: AP });
var AU = n(256311),
    AV = n(883600);
let Ak = (0, d.E2)(c.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, h.bG)([AV.A], () => AV.A.overrideId());
        async function t(e) {
            let t = AV.A.getChangelog(e, "en-US");
            return null != t ? t : ((await AU.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, A.jsx)(A$, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => AU.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var Aw = n(506774);
let AF = new Date("2018-01-01"),
    AB = (0, d.Tf)(c.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => L.pK.useSetting() === ou.default.fromTimestamp(AF.getTime()),
        onClick: () => (Aw.w.set("lastChangeLogDate", AF), L.pK.updateSetting(ou.default.fromTimestamp(AF.getTime()))),
    }),
    Az = (0, d.zD)(c.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, h.bG)([l3.default], () => l3.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, h.bG)(
                [l3.default],
                () => l3.default.disableAppCollectionsCache || l3.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, l2.x)({ disableAppCollectionsCache: e }),
    }),
    AY = (0, d.zD)(c.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, h.bG)([l3.default], () => l3.default.isForcedCanary),
        setValue: (e) => {
            (0, l2.x)({ canary: e });
        },
    }),
    AX = (0, d.zD)(c.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, h.bG)([l3.default], () => l3.default.sourceMapsEnabled),
        setValue: (e) => (0, l2.x)({ sourceMapsEnabled: e }),
    }),
    AH = (0, d.zD)(c.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, h.bG)([l3.default], () => l3.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, l2.x)({ onlyShowPreviewAppCollections: e }),
    });
var AK = n(10094),
    AW = n(683760);
let AZ = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: tY.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: tY.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: tY.PremiumTypes.TIER_2 },
    ],
    Aq = (0, d.Hn)(c.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => AZ,
        clearable: !0,
        useValue: () =>
            (0, h.bG)([AW.A], () => {
                let e = AW.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, AK.O)(null, void 0)
                : null === e
                  ? (0, AK.O)(void 0, void 0)
                  : (0, AK.O)(0 === e ? null : e, void 0);
        },
    }),
    AQ = (0, d.E2)(c.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, h.bG)([AS.Ay], () => AS.Ay.getSurveyOverride());
            return (0, A.jsx)(A$, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => Ah.xr(e),
                fetchOverride: (e) => Ah.BC(e, !0) ?? null,
            });
        },
    });
function A$(e) {
    let { label: t, description: n, placeholder: i, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = E.useState(s ?? ""),
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
            children: (0, A.jsx)(so.k, {
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
let AJ = (0, d.zZ)(c.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [Aq, AQ, Ax, Ak, AB, AY, Ap, AH, Az, AX, AM],
        useInlineNotice: () => ({
            type: m.lT.INLINE_NOTICE,
            noticeType: "info",
            text: R.intl.format(R.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    A0 = (0, d.zD)(c.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, h.bG)([l3.default], () => l3.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, l2.x)({ logAnalyticsEvents: e }),
    }),
    A1 = (0, d.zD)(c.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, h.bG)([l3.default], () => l3.default.isLoggingGatewayEvents),
        setValue: (e) => (0, l2.x)({ logGatewayEvents: e }),
    }),
    A2 = (0, d.zD)(c.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, h.bG)([l3.default], () => l3.default.preventPopoutClose),
        setValue: (e) => (0, l2.x)({ preventPopoutClose: e }),
    }),
    A3 = (0, d.zD)(c.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, h.bG)([l3.default], () => l3.default.logKeyboardMismatches),
        setValue: (e) => (0, l2.x)({ logKeyboardMismatches: e }),
    }),
    A5 = (0, d.zD)(c.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, h.bG)([l3.default], () => l3.default.isLoggingOverlayEvents),
        setValue: (e) => (0, l2.x)({ logOverlayEvents: e }),
    }),
    A6 = (0, d.zD)(c.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, h.bG)([l3.default], () => l3.default.isLoggingQuestEvents),
        setValue: (e) => (0, l2.x)({ logQuestEvents: e }),
    }),
    A4 = (0, d.zD)(c.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, h.bG)([l3.default], () => l3.default.isTracingRequests),
        setValue: (e) => (0, l2.x)({ trace: e }),
    }),
    A8 = (0, d.zZ)(c.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [A1, A5, A4, A0, A3, A2, A6] }),
    A7 = (0, d.t_)(c.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [AJ, A8, AE],
    }),
    A9 = (0, d.i4)(c.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: At.V,
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
                    isStaff: g,
                } = (0, h.cf)([l3.default, Ae.A, li.default], () => ({
                    layoutDebuggingEnabled: l3.default.layoutDebuggingEnabled,
                    isDeveloper: Ae.A.isDeveloper,
                    isLoggingGatewayEvents: l3.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: l3.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: l3.default.isLoggingAnalyticsEvents,
                    isTracingRequests: l3.default.isTracingRequests,
                    isForcedCanary: l3.default.isForcedCanary,
                    isSourceMapsEnabled: l3.default.sourceMapsEnabled,
                    isAxeEnabled: l3.default.isAxeEnabled,
                    preventPopoutClose: l3.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: l3.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: l3.default.disableAppCollectionsCache,
                    isStaff: li.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: m, verticalSpacing: E } = (0, Ai.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: x } = Ai.Or.getState(),
                p = L.HZ.useSetting();
            return t
                ? [
                      (0, A.jsxs)(
                          e3.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, ns.openUserSettings)(c.X.DEV_OVERRIDES);
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
                                              (0, l2.x)({ canary: !r });
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
                                              (0, l2.x)({ onlyShowPreviewAppCollections: !u });
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
                                              (0, l2.x)({ disableAppCollectionsCache: !d });
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
                                  (0, ns.openUserSettings)(c.X.LOGGING);
                              },
                              children: [
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: n,
                                          action: () => {
                                              (0, l2.x)({ logGatewayEvents: !n });
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
                                              (0, l2.x)({ logOverlayEvents: !i });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: s,
                                          action: () => {
                                              (0, l2.x)({ logAnalyticsEvents: !s });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: l,
                                          action: () => {
                                              (0, l2.x)({ trace: !l });
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
                                              (0, l2.x)({ preventPopoutClose: !o });
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
                                  (0, ns.openUserSettings)(c.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, l2.x)({ axeEnabled: !a });
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
                                              (0, l2.x)({ layoutDebuggingEnabled: !e });
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
                                                          (0, A.jsx)(An.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: Ai.YR,
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
                                                          (0, A.jsx)(An.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: E,
                                                              minValue: 0,
                                                              maxValue: Ai.YR,
                                                              onChange: (e) => x(e),
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
                                { id: "discord-stats", label: "Discord Stats", action: () => ln() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [A7],
    });
var Ee = n(127062),
    Et = n(25044),
    En = n(80703),
    Ei = n(123292),
    Es = n(857250),
    El = n(683438),
    Er = n(890856),
    Ea = n(100392),
    Eo = n(102609),
    Eu = n(271478),
    Ed = n(710195),
    Ec = n(386976),
    Eg = n(257433),
    Em = n(32523),
    EA = n(96919),
    EE = n(688151),
    Eh = n(863763);
function ES(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: s } = e,
        [l, r] = E.useState(s),
        [a, o] = E.useState(!1),
        u = E.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, h.bG)([u_.default], () => u_.default.getId()),
        c = (0, h.bG)([u_.default], () => {
            let e = u_.default.getInstallationForTracking();
            return null == e ? null : (0, En.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, Eg.iN)(t, g),
        S = (0, Eg.Fm)(t, g),
        x = (0, h.yK)([re.A], () =>
            B()
                .sortBy(re.A.getRecentExposures(EE.Vh.USER, n), (e) => {
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
                (0, uv.C)((0, Ea.yA)(n), () => {
                    ((0, s8.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: s7.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        T = (0, A.jsx)(Er.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, A.jsxs)(H.E, {
                variant: "text-md/medium",
                className: Eh.DD,
                children: [
                    (0, A.jsxs)("div", {
                        children: [
                            (0, A.jsxs)(Y.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    uv.p5 &&
                                        (0, A.jsx)(n0.D, {
                                            onClick: p,
                                            children: (0, A.jsx)(Af.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, A.jsx)(H.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, A.jsx)("span", {
                        className: Eh.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, A.jsx)("div", { className: Eh.Os, children: T });
    let f = "";
    return (
        (f =
            t.system === Eo.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? EE.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, A.jsxs)("div", {
            className: Eh.Os,
            children: [
                T,
                (0, A.jsx)("div", {
                    children: (0, A.jsx)(Eu.g, {
                        label: t.system === Eo.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, A.jsx)("div", {
                    className: Eh.h_,
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
                                  className: Eh.id,
                                  children: "Server Descriptor",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: Eh.AS,
                                  children: null == S ? "None" : JSON.stringify(S, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: Eh.id,
                                  children: "Override Descriptor",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: Eh.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: Eh.id,
                                  children: "Recent Exposures",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: Eh.AS,
                                  children: 0 === x.length ? "None" : x.join("\n"),
                              }),
                          ],
                      })
                    : (0, A.jsx)("div", {
                          className: Eh.id,
                          children: (0, A.jsx)(Ei.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, A.jsx)(i8.c, { className: Eh.yF }),
            ],
        })
    );
}
function Ex(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [s, l] = E.useState(null != i),
        [r, a] = E.useState(!1),
        o = E.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, h.bG)([re.A], () => re.A.getLoadedGuildExperiment(n)),
        d = (0, h.bG)([re.A, sh.A, Ed.A], () => {
            if (t.system === Eo.l5.LEGACY) return null == re.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !sh.A.getGuildsArray().some((t) => null != Ed.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, h.yK)([re.A], () =>
            B()
                .sortBy(re.A.getRecentExposures(EE.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, h.yK)([u_.default, sh.A, re.A, Ed.A], () => {
            let e = t.system === Eo.l5.LEGACY,
                i = t.name,
                s = u_.default.getId(),
                l = B().sortBy(sh.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of l) {
                let l = e
                    ? (re.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? EE.RE.NOT_ELIGIBLE)
                    : (Ed.A.getEvaluationAndAssignment("guild", t.id, i, s)[1]?.variantId ?? EE.RE.NOT_ELIGIBLE);
                (l in r || (r[l] = 0), r[l]++, a.push(`${t.name}: ${l}`));
            }
            let o = B()(r)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${r[e]} guilds in bucket ${e}`)
                .join(", ");
            return [a.join("\n"), o];
        }),
        S = t.system !== Eo.l5.LEGACY,
        x = (0, h.yK)([sh.A], () => B().sortBy(sh.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [p, T] = E.useState(() => sS.A.getGuildId() ?? sS.A.getLastSelectedGuildId()),
        f = x.find((e) => e.id === p)?.name,
        I = (0, h.bG)(
            [Ed.A],
            () => {
                if (S && null != p) return Ed.A.getServerAssignment("guild", p, t.name);
            },
            [S, p, t.name],
        ),
        _ = (0, h.bG)([Ed.A, u_.default], () => {
            if (!S) return;
            let e = u_.default.getId();
            return Ed.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != _ && (_.isOverride || _.useAsEligibility),
        C = (0, A.jsx)(n0.D, {
            onClick: o,
            children: (0, A.jsxs)(H.E, {
                variant: "text-md/medium",
                className: Eh.DD,
                children: [
                    (0, A.jsxs)("div", {
                        children: [
                            (0, A.jsx)("span", { children: t.title }),
                            (0, A.jsx)(H.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, A.jsx)("span", { className: Eh.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, A.jsxs)("div", {
              className: Eh.Os,
              children: [
                  C,
                  (0, A.jsx)(Eu.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  S &&
                      x.length > 0 &&
                      (0, A.jsx)("div", {
                          className: Eh.h_,
                          children: (0, A.jsx)(i7.l, {
                              label: "Inspect guild",
                              description:
                                  "Server assignment and eligibility shown below are for this guild. The override above still applies to all guilds.",
                              value: p ?? void 0,
                              options: x.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                              onSelectionChange: (e) => T(e),
                              selectionMode: "single",
                              fullWidth: !0,
                          }),
                      }),
                  (0, A.jsx)("div", {
                      className: Eh.h_,
                      children: d
                          ? (0, A.jsx)(H.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === Eo.l5.LEGACY
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
                                  className: Eh.id,
                                  children: ["Server Descriptor", null != f ? ` (${f})` : ""],
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: Eh.AS,
                                  children: null == I ? "None" : JSON.stringify(I, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: Eh.id,
                                  children: "Client Eligibility",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: Eh.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, A.jsxs)("div", {
                            children: [
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: Eh.id,
                                    children: "Guild Assignments",
                                }),
                                (0, A.jsx)(H.E, { variant: "code", className: Eh.AS, children: g }),
                                t.system === Eo.l5.LEGACY &&
                                    (0, A.jsxs)(A.Fragment, {
                                        children: [
                                            (0, A.jsx)(H.E, {
                                                variant: "text-lg/medium",
                                                className: Eh.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, A.jsx)(H.E, {
                                                variant: "code",
                                                className: Eh.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: Eh.id,
                                    children: "Override Descriptor",
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "code",
                                    className: Eh.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: Eh.id,
                                    children: "Recent Exposures",
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "code",
                                    className: Eh.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, A.jsx)("div", {
                            className: Eh.id,
                            children: (0, A.jsx)(Ei.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, A.jsx)(i8.c, { className: Eh.yF }),
              ],
          })
        : (0, A.jsx)("div", { className: Eh.Os, children: C });
}
let Ep = (0, d.E2)(c.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, Ec.op)(),
                { experiments: n, overridesInfo: i } = (0, Em.hI)(),
                s = E.useMemo(() => ({ ...n, ...e }), [n, e]),
                l = E.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, h.bG)([u_.default], () => {
                    let e = u_.default.getInstallationForTracking();
                    return null == e ? null : (0, En.v)(e);
                }),
                [a, o] = E.useState(""),
                u = (0, EA.oC)((0, EA.R3)((0, EA.Fm)(s), l), a);
            return (0, A.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, A.jsxs)(Y.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, A.jsxs)(H.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                uv.p5 &&
                                    (0, A.jsx)(Ei.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uv.C)(r, () => {
                                                (0, s8.P0)((0, Es.o)("Installation ID copied!", s7.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, A.jsx)(El.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? Ex : ES;
                              return (0, A.jsx)(
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
                        : (0, A.jsx)("div", {
                              className: Eh.p$,
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
    ET = (0, d.zZ)(c.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [Ep] }),
    Ef = (0, d.t_)(c.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [ET] }),
    EI = (0, d.i4)(c.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: Ee.c,
        useMenu: Et.A,
        buildLayout: () => [Ef],
    }),
    E_ = (0, d.WI)(c.X.DEVELOPER_SECTION, {
        useTitle: () => R.intl.string(R.t["+gHUHA"]),
        usePredicate: () => Ae.A.isDeveloper,
        buildLayout: () => [EI, A9],
    });
var EN = n(682348),
    EC = n(871633),
    Eb = n(751075),
    Ey = n(843402);
let Ev = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function Ej() {
    let e = (0, h.yK)([iQ.Ay], () => iQ.Ay.getGamesSeen(!1)),
        t = (0, h.bG)([iQ.Ay], () => Ev(...iQ.Ay.getOverrides()));
    E.useEffect(() => {
        if (eQ.isPlatformEmbedded) return ((0, Ey.a2)(), Ey.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = E.useMemo(
        () =>
            e.reduce((e, t) => ((0, EC.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function EO(e) {
    let { gameHistory: t } = Ej();
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
function EL(e) {
    let { namedGames: t, totalCount: n } = EO(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function ER() {
    let { namedGames: e } = EO(2),
        [t, n] = E.useMemo(() => e.map((e) => e.id), [e]);
    E.useEffect(() => {
        ma.Ay.fetchApplications([t, n].filter(ii.Vq));
    }, [t, n]);
    let [i, s] = (0, h.yK)([iW.A], () => [t, n].map(iW.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, A.jsx)(i0.A, { game: i, size: i0.M.MEDIUM_LARGE }), shape: Eb.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, A.jsx)(i0.A, { game: s, size: i0.M.MEDIUM }), shape: Eb.e0.ROUNDED } : null,
          };
}
let ED = (0, d.AK)(c.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = EL(2);
            return R.intl.format(R.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = ER();
            return { type: m.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: c.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, h.bG)([iQ.Ay], () => iQ.Ay.getGamesSeen(!1).some((e) => !(0, EC.n1)(e))) && (0, nm.xl)(),
    }),
    EP = (0, d.gN)(c.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [ED] });
var EG = n(57129);
let EM = (0, d.zD)(c.X.ACTIVITY_PRIVACY_SETTING, {
    useTitle: () => R.intl.string(EG.default.WhdCGP),
    useSubtitle: () => R.intl.string(EG.default.UQ9RHJ),
    useValue: L.tz.useSetting,
    setValue: L.tz.updateSetting,
});
var EU = n(406535);
let EV = (0, d.zD)(c.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => R.intl.string(EG.default.A0FVCV),
        useSubtitle: () => R.intl.string(EG.default.vHX6RG),
        useValue: L.hV.useSetting,
        setValue: function (e) {
            (L.hV.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: EU.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    Ek = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => R.intl.string(R.t.WmsPis),
        useSearchTerms: () => [R.intl.string(R.t["8ka8li"])],
        buildLayout: () => [EM, EV, EP],
    });
var Ew = n(106531);
let EF = (0, d.AK)(c.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.J0SFL2),
        destinationKey: c.X.DATA_AND_PRIVACY_PANEL,
    }),
    EB = (0, d.gN)(c.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, Ew.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [EF],
    });
var Ez = n(945810);
let EY = (0, Ez.mj)({
    name: "2026-02-activity-privacy-matching",
    kind: "user",
    defaultConfig: { copyChanges: !1, upsell: !1 },
    variations: {
        0: { copyChanges: !1, upsell: !1 },
        1: { copyChanges: !0, upsell: !1 },
        2: { copyChanges: !0, upsell: !0 },
    },
});
var EX = n(365258);
let EH = (0, d.Qx)(c.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => R.intl.string(EG.default["/LHVbt"]),
    useSubtitle: () => R.intl.string(R.t.L5IdzV),
    useOptions: function () {
        return [
            { value: eB.Qd.ACTIVITY_STATUS_OFF, name: R.intl.string(EG.default.m3oL7Q) },
            { value: eB.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: R.intl.string(EG.default["5+lnTA"]) },
            { value: eB.Qd.ACTIVITY_STATUS_ON, name: R.intl.string(EG.default["egr+VZ"]) },
        ];
    },
    useValue: L._Z.useSetting,
    setValue: function (e) {
        var t;
        let i = L._Z.getSetting();
        if (
            (L._Z.updateSetting(e),
            (t = "GuildActivitySharingDefaultSetting"),
            !(0, Ew.W1)(t) && !EY.getConfig({ location: t }).upsell)
        )
            return;
        let s = (0, EX.g8)(i, e);
        if (null == s) return;
        let l = (0, EX.Xc)(e);
        (0, sa.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("341996")]).then(
                n.bind(n, 32167),
            );
            return (t) =>
                (0, A.jsx)(e, { ...t, direction: s.direction, affectedGuildIds: s.affectedGuildIds, settingName: l });
        });
    },
});
var EK = n(498642),
    EW = n(573435),
    EZ = n(260509),
    Eq = n(771810);
function EQ(e) {
    let { guild: t, size: n } = e,
        i = (0, EZ.Iv)(t, n, !1, !0),
        s = (0, EZ.Rb)(t);
    return null != i
        ? (0, A.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, A.jsx)("div", {
              className: Eq.F,
              children: (0, A.jsx)(H.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: s,
              }),
          });
}
function E$(e) {
    let { guild: t, size: n } = e;
    return (0, A.jsx)(EW.Ay, {
        className: Eq.z,
        mask: EW.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, A.jsx)(EQ, { guild: t, size: n }),
    });
}
var EJ =
    (((r = {}).SERVER_ORDER = "server-order"),
    (r.RECENTLY_JOINED = "recently-joined"),
    (r.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (r.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    r);
let E0 = {
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
var E1 = n(618118);
function E2(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        s = (0, h.bG)([EK.A], () => EK.A.getMemberCount(t.id));
    return (0, A.jsxs)(Y.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, A.jsx)("div", { className: E1.FO, children: (0, A.jsx)(E$, { guild: t, size: 48 }) }),
            (0, A.jsx)("div", {
                className: E1.QH,
                children: (0, A.jsx)(t$.d, {
                    label: t.name,
                    description: R.intl.format(R.t.zRl6XR, { count: s ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let E3 = function (e) {
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
            let [e, t] = (0, E.useState)(""),
                [n, i] = (0, E.useState)("server-order"),
                s = (0, h.bG)([d7.Ay], () => d7.Ay.getFlattenedGuildIds()),
                l = (0, h.bG)([sh.A], () => sh.A.getGuilds()),
                r = s.map((e) => l[e]).filter(Boolean),
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
                [g, m] = (0, E.useState)(() => E0[n](r, a)),
                A = g.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(E0[e](r, a)), i(e));
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
        m = (0, E.useId)(),
        x = (0, E.useRef)(null),
        p = (0, E.useMemo)(
            () => [
                { id: EJ.SERVER_ORDER, label: R.intl.string(R.t.STMPJ2), value: EJ.SERVER_ORDER },
                { id: EJ.RECENTLY_JOINED, label: R.intl.string(R.t.CbaapP), value: EJ.RECENTLY_JOINED },
                { id: EJ.ACTIVITY_SHARING_ON, label: R.intl.string(EG.default.ZI51JZ), value: EJ.ACTIVITY_SHARING_ON },
                {
                    id: EJ.ACTIVITY_SHARING_OFF,
                    label: R.intl.string(EG.default["+kxafn"]),
                    value: EJ.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        T = p.find((e) => e.value === l)?.label ?? "";
    return (0, A.jsxs)("div", {
        className: E1.iE,
        children: [
            t,
            (0, A.jsxs)("div", {
                className: E1.N1,
                children: [
                    (0, A.jsx)(El.I, {
                        query: i,
                        onChange: s,
                        onClear: function () {
                            (tt.default.track(S.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                                s(""));
                        },
                        onFocus: () =>
                            tt.default.track(S.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        onBlur: () =>
                            tt.default.track(S.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        placeholder: R.intl.string(R.t["H+nRYw"]),
                        "aria-label": R.intl.string(R.t["5h0QOP"]),
                        inputProps: { "aria-controls": m, "aria-expanded": !0 },
                    }),
                    n.length > 0 &&
                        (0, A.jsxs)("div", {
                            className: E1.gO,
                            children: [
                                (0, A.jsx)(r7.Y, {
                                    targetElementRef: x,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, A.jsx)(cr.W, {
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
                                                            checked: l === i,
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
                                            innerRef: x,
                                            className: E1.Ku,
                                            children: [
                                                (0, A.jsx)(H.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: T,
                                                }),
                                                (0, A.jsx)(cP.a, { size: "xs", color: nQ.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, A.jsx)(Ei.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? R.intl.string(R.t["7lxcLO"]) : R.intl.string(R.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, A.jsx)(sn.A, {
                "aria-live": "polite",
                role: "region",
                children: R.intl.format(EG.default.EvzDff, { count: n.length }),
            }),
            (0, A.jsxs)("ul", {
                className: E1.X1,
                id: m,
                "aria-label": R.intl.string(R.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, A.jsx)("div", {
                            className: E1.pb,
                            children: (0, A.jsx)(H.E, {
                                className: E1.R$,
                                variant: "text-lg/medium",
                                children: R.intl.string(R.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, A.jsx)(
                            E2,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var E5 = n(68322);
let E6 = (0, d.E2)(c.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [R.intl.string(EG.default["/LHVbt"])],
        Component: function () {
            let e = L.tz.useSetting()
                ? null
                : (0, A.jsx)("div", {
                      className: E5.l,
                      children: (0, A.jsx)(iz.w, { type: "warning", children: R.intl.string(EG.default["xxI0/W"]) }),
                  });
            return (0, A.jsx)(E3, { notice: e });
        },
    }),
    E4 = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => R.intl.string(R.t.bwqjL9),
        buildLayout: () => [EH, E6, EB],
    }),
    E8 = (0, d.zD)(c.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => R.intl.string(EG.default.khuuzv),
        useSubtitle: () => R.intl.string(EG.default["8EWsJ8"]),
        useValue: () => L.e.useSetting(),
        setValue: (e) => L.e.updateSetting(e),
    }),
    E7 = (0, d.E2)(c.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
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
    E9 = (0, d.zD)(c.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => R.intl.string(EG.default.Uz5Ipi),
        useSubtitle: () => R.intl.string(EG.default.CZI2Gb),
        useValue: () => L.UM.useSetting(),
        setValue: (e) => L.UM.updateSetting(e),
    }),
    he = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => R.intl.string(EG.default["89YBr5"]),
        useSubtitle: () => R.intl.string(R.t.uGDpgH),
        buildLayout: () => [E8, E9, E7],
        useSearchTerms: () => [R.intl.string(R.t.VOszPA)],
    }),
    ht = (0, d.t_)(c.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => R.intl.string(R.t.Cq98yL),
        buildLayout: () => [Ek, E4, he],
    }),
    hn = (0, d.i4)(c.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.Cq98yL),
        icon: EN._,
        buildLayout: () => [ht],
    });
var hi = n(712440),
    hs = n(370997);
let hl = (0, d.E2)(c.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: hs.Ay,
    useSearchTerms: () => [R.intl.string(R.t["f6kk+r"])],
});
var hr = n(478016),
    ha = n(789645),
    ho = n(559106),
    hu = n(77468),
    hd = n(289498),
    hc = n(573648),
    hg = n(874490),
    hm = n(370480),
    hA = n(968309);
let hE = new Set([S.fg2.XBOX, S.fg2.PLAYSTATION, S.fg2.PLAYSTATION_STAGING, S.fg2.CRUNCHYROLL]);
var hh = n(169869),
    hS = n(814925),
    hx = n(733110),
    hp = n(479785),
    hT = n(757036),
    hf = n(555837),
    hI = n(43990),
    h_ = n(241524),
    hN = n(51965),
    hC = n(377368),
    hb = n(631368),
    hy = n(212739),
    hv = n(30370),
    hj = n(181666),
    hO = n(553875),
    hL = n(660594);
function hR() {
    let e,
        t,
        i,
        s,
        { variant: l, showFooter: r } =
            ((e = (0, hb.$)()),
            (t = (0, hy.O)()),
            (s = null != (i = (0, h.bG)([hv.A], () => hv.A.getAccount(null, S.fg2.XBOX))) && !i.revoked),
            e === hb.C.NONE || t
                ? { variant: hb.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === hb.C.NO_ACCESS && !s }),
        { analyticsLocations: a } = (0, eP.Ay)(tL.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, hC.yW)(a),
        u = (0, h_.A)("(max-width: 485px)");
    if (l === hb.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (l) {
        case hb.C.HAS_ACCESS:
        case hb.C.BLOCK_CLAIM:
            ((c = R.intl.string(hO.default["7PdsMK"])),
                (g = (0, A.jsx)(hN.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: R.intl.string(hO.default.CubeLC),
                    onClick: () => {
                        (0, sa.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("878140"), n.e("813088")]).then(
                                n.bind(n, 347171),
                            );
                            return (t) => (0, A.jsx)(e, { ...t, sourceAnalyticsLocations: a });
                        });
                    },
                })));
            break;
        case hb.C.NO_ACCESS:
            ((c = R.intl.string(hO.default.NwkRTZ)),
                (g = (0, A.jsx)(tM.A, {
                    defaultTextOverride: R.intl.string(hO.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    subscriptionTier: tY.pe.TIER_2,
                })));
            break;
        default:
            (0, ii.xb)(l);
    }
    return (0, A.jsxs)(eP.f5, {
        value: a,
        children: [
            (0, A.jsxs)("div", {
                className: hL.bV,
                children: [
                    (0, A.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: R.intl.string(R.t.NG1e6l),
                    }),
                    (0, A.jsx)(rJ.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, A.jsx)(hI.N, {
                theme: S.NJ8.DARK,
                children: (e) =>
                    (0, A.jsx)("div", {
                        className: e,
                        children: (0, A.jsxs)("div", {
                            className: hL.Nr,
                            children: [
                                (0, A.jsxs)("div", {
                                    className: hL.Tp,
                                    children: [
                                        (0, A.jsx)("div", {
                                            className: hL.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, A.jsx)("div", { className: hL.$h }),
                                        (0, A.jsx)("div", { className: hL.Rv }),
                                        (0, A.jsx)("div", { className: hL.Lw }),
                                    ],
                                }),
                                (0, A.jsxs)("div", {
                                    className: hL.Mn,
                                    children: [
                                        (0, A.jsxs)("div", {
                                            className: hL.mY,
                                            children: [
                                                (0, A.jsx)("img", {
                                                    className: hL.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, A.jsx)(H.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: hL.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, A.jsx)("div", { className: hL.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, A.jsxs)(A.Fragment, {
                                        children: [
                                            (0, A.jsx)("div", { className: hL.yF }),
                                            (0, A.jsxs)("div", {
                                                className: hL.sQ,
                                                children: [
                                                    (0, A.jsx)(oq.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: nQ.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, A.jsx)(H.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: R.intl.format(hj.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(hC.Hx.CONNECT),
                                                                    (0, hA.A)({
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
var hD = n(201718),
    hP = n(321078),
    hG = n(672130),
    hM = n(379848),
    hU = n(688901);
function hV(e) {
    let { markAsDismissed: t } = e;
    return (
        E.useEffect(() => t(gd.i.UNKNOWN), [t]),
        (0, A.jsx)(tn.Lp, { className: hU.Ad, text: R.intl.string(R.t.y2b7CA) })
    );
}
function hk(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: s, onClick: l } = e;
    return (0, A.jsxs)("div", {
        className: hU.kL,
        children: [
            i,
            (0, A.jsxs)("div", {
                className: hU.FS,
                children: [
                    (0, A.jsxs)("div", {
                        className: hU.TK,
                        children: [
                            (0, A.jsx)(hM.Ay, {
                                contentTypes: [s],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === s ? (0, A.jsx)(hV, { markAsDismissed: n }) : null;
                                },
                            }),
                            (0, A.jsx)(H.E, { variant: "text-md/semibold", children: t }),
                        ],
                    }),
                    (0, A.jsx)(H.E, { variant: "text-xs/normal", children: n }),
                ],
            }),
            (0, A.jsx)(_.$, { text: R.intl.string(R.t.vD60Pv), onClick: l }),
        ],
    });
}
function hw() {
    let e = eT.A.getArticleURL(S.MVz.PS_CONNECTION);
    return (0, A.jsx)(hk, {
        title: R.intl.string(R.t.v20wwm),
        body: R.intl.format(R.t.lTZBit, { help_article: e }),
        img: (0, A.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eu.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, hA.A)({ platformType: S.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let hF = "/assets/9df988a227916145.png";
function hB() {
    return (0, A.jsx)(hk, {
        title: R.intl.string(hj.default["9cLtDI"]),
        body: R.intl.format(hj.default["D+kUbg"], { learnMoreLink: eT.A.getArticleURL(S.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, A.jsx)("img", { src: hF, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eu.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, hA.A)({ platformType: S.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function hz() {
    let e = eT.A.getArticleURL(S.MVz.XBOX_CONNECTION);
    return (0, A.jsx)(hk, {
        title: R.intl.string(R.t["2okkZV"]),
        body: R.intl.format(R.t.OnERSS, { help_article: e }),
        img: (0, A.jsx)("img", { src: hF, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eu.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, hA.A)({ platformType: S.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var hY = n(783419),
    hX = n(534952),
    hH = n(211180),
    hK = n(247259);
function hW(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, h.cf)(
            [hv.A],
            () => ({
                isJoining: hv.A.isJoining(n.id),
                joinErrorMessage:
                    "" === hv.A.joinErrorMessage(n.id) ? R.intl.string(R.t.j2d6Km) : hv.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== hv.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, h.bG)([sh.A], () => sh.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, A.jsx)(_.$, {
                size: "sm",
                onClick: function () {
                    hu.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? R.intl.string(R.t.RXvQQu) : R.intl.string(R.t.XpeFYr),
            })),
        (0, A.jsxs)("div", {
            className: hK.iA,
            children: [
                (0, A.jsxs)("div", {
                    className: hK.XX,
                    children: [
                        (0, A.jsx)(cd.Ay, { size: cd.Ay.Sizes.SMALL, guild: n.guild, className: hK.$f }),
                        (0, A.jsxs)("div", {
                            className: hK.Vn,
                            children: [
                                (0, A.jsx)(H.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, A.jsx)(nn.Anchor, {
                                    href: hc.A.get(n.type)?.getPlatformUserUrl?.(n.account),
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
                l &&
                    (0, A.jsx)(H.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: hK.R,
                        children: s,
                    }),
            ],
        })
    );
}
function hZ(e) {
    var t;
    let n,
        i,
        { account: s } = e,
        l =
            ((t = s.id),
            (n = (0, hf.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (i = (0, hT.L)(tY.PremiumTypes.TIER_2)),
            !n && !i && !/^\d+$/.test(t));
    return s.type === S.fg2.XBOX && l
        ? (0, A.jsx)(hB, {})
        : s.twoWayLink
          ? null
          : s.type === S.fg2.XBOX
            ? (0, A.jsx)(hz, {})
            : s.type === S.fg2.PLAYSTATION
              ? (0, A.jsx)(hw, {})
              : null;
}
function hq(e) {
    let t,
        n,
        i,
        s,
        l,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [g, m] = E.useState(u.friendSync),
        [h, x] = E.useState(u.visibility),
        [p, T] = E.useState(u.metadataVisibility),
        [f, I] = E.useState(u.showActivity),
        [N, C] = E.useState(null),
        [b, y] = E.useState(null),
        [v, j] = E.useState(!1),
        [O, L] = E.useState([]),
        D = (0, hg.ML)(u.type),
        P = hc.A.get(D);
    E.useEffect(() => {
        (m(u.friendSync), x(u.visibility), T(u.metadataVisibility), I(u.showActivity));
    }, [u]);
    let G = { inProgressVisibility: N, inProgressMetadataVisibility: b },
        M = E.useRef(G);
    return (
        E.useEffect(() => {
            M.current = G;
        }),
        E.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = M.current;
            (null != e && (x(e), hu.A.setVisibility(u.type, u.id, e), C(null)),
                null != t && (T(t), hu.A.setMetadataVisibility(u.type, u.id, t), y(null)));
        }, [u]),
        (0, A.jsxs)("div", {
            className: hK.FI,
            children: [
                ((t = hc.A.get(u.type)),
                (n = hc.A.get(D)),
                (i = "1" === (u.metadata ?? {})[hY.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === S.fg2.TWITTER &&
                    i &&
                    (s = (0, A.jsx)(st.m, {
                        text: R.intl.string(R.t.Jebrww),
                        children: (0, A.jsx)(hS.A, {
                            color: nQ.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, A.jsx)(hr.U, { size: "xs", color: nQ.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, A.jsxs)("div", {
                    className: hK.Il,
                    children: [
                        (0, A.jsx)("img", {
                            alt: n.name,
                            className: hK.gj,
                            src: (0, dn.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, A.jsxs)("div", {
                            children: [
                                (0, A.jsxs)("div", {
                                    className: hK.$p,
                                    children: [
                                        (0, A.jsx)(H.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: hK.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, A.jsx)("div", { className: hK.cG, children: s }),
                                    ],
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: hK.Au,
                                    children: n.migrationData?.getMigrationExperimentEnabled(
                                        "User Settings Connections Web",
                                    )
                                        ? R.intl.format(hH.default.Glhokn, { platformName: n.name })
                                        : n.name,
                                }),
                            ],
                        }),
                        (0, A.jsx)(n0.D, {
                            className: hK.uH,
                            onClick: function () {
                                let e = hc.A.get(u.type);
                                (0, sa.openModal)((t) =>
                                    (0, A.jsx)(sr.Modal, {
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
                                            hE.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, A.jsx)(sW.A, {
                                                children: R.intl.format(R.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": R.intl.string(R.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, A.jsx)(ha.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, A.jsx)(hZ, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, hm.An)(t[hY.pK.CREATED_AT], c);
                    switch (e.type) {
                        case S.fg2.REDDIT:
                            n = (0, hh.xE)(t, hK.Nz);
                            break;
                        case S.fg2.STEAM:
                            n = (0, hh.dy)(t, hK.Nz);
                            break;
                        case S.fg2.BLUESKY:
                        case S.fg2.TWITTER:
                        case S.fg2.MASTODON:
                            n = (0, hh.ED)(t, hK.Nz);
                            break;
                        case S.fg2.EBAY:
                            n = (0, hh.ub)(t, hK.Nz);
                            break;
                        case S.fg2.PAYPAL:
                            n = (0, hh.gZ)(t, hK.Nz);
                            break;
                        case S.fg2.TIKTOK:
                            n = (0, hh.HU)(t, hK.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, A.jsx)(
                                H.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: hK.M4,
                                    children: R.intl.format(R.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = O.includes(e.id),
                        l = R.intl.string(R.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== hc.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, A.jsx)(tn.Lp, { className: hK.Z3, text: R.intl.string(R.t.y2b7CA) }, "badge"),
                                (0, A.jsx)(
                                    H.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: hK.vt,
                                        children: R.intl.format(R.t.Up2ni7, {
                                            helpdeskUrl: eT.A.getArticleURL(S.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (l = R.intl.string(R.t["LVh3/5"])));
                    return (
                        s && (l = R.intl.string(R.t.i4jeWR)),
                        n.push(
                            (0, A.jsx)(
                                "div",
                                {
                                    className: hK.jy,
                                    children: (0, A.jsx)(_.$, {
                                        text: l,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: v,
                                        disabled: s,
                                        "aria-label": R.intl.string(R.t.sCkLYH),
                                        onClick: s
                                            ? void 0
                                            : () => {
                                                  (j(!0),
                                                      hu.A.refresh(e.type, e.id).finally(() => {
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
                        (0, A.jsx)("div", { className: hK.tJ, children: n })
                    );
                })(u),
                (S.txh.has(u.type) &&
                    (l = (0, A.jsx)(t$.d, {
                        label: R.intl.string(R.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), hu.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                S.ewM.has(u.type) &&
                    (r = (0, A.jsx)(t$.d, {
                        label: R.intl.format(R.t["6u6J0q"], { platform: P.name }),
                        checked: f,
                        onChange: function (e) {
                            (I(e), hu.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                hc.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, A.jsx)(t$.d, {
                        label: R.intl.string(R.t.FYKGsL),
                        checked: 1 === p,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (y(n), (0, hA.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (T(n), hu.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== h || null == u.metadata,
                    })),
                (0, A.jsxs)("div", {
                    className: hK.HZ,
                    children: [
                        (0, A.jsx)(t$.d, {
                            label: R.intl.string(R.t.f7yOAX),
                            checked: 1 === h,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (C(n), (0, hA.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (x(n), hu.A.setVisibility(u.type, u.id, n));
                            },
                        }),
                        a,
                        r,
                        l,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, A.jsx)(i8.c, {});
                })(),
                u.revoked
                    ? (0, A.jsx)(r0.p, {
                          messageType: r0.Y.INFO,
                          children: R.intl.format(R.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, hA.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, A.jsx)(tQ.D, {
                            label: R.intl.string(R.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, A.jsx)(hW, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, A.jsx)(hp.A, { partner: u.type }),
            ],
        })
    );
}
function hQ(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, A.jsxs)("div", {
              className: hK.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = O.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, A.jsxs)("div", {
                          className: hK.Il,
                          children: [
                              (0, A.jsx)("img", { alt: n.name, className: ir()(hK.gj, hK.sN), src: i }),
                              (0, A.jsxs)("div", {
                                  children: [
                                      (0, A.jsx)("div", {
                                          className: hK.$p,
                                          children: (0, A.jsx)(H.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: hK.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, A.jsx)(H.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: hK.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, A.jsx)(n0.D, {
                                  className: hK.uH,
                                  onClick: () =>
                                      (0, hs.d1)(n, t.scopes, () => {
                                          hi.A.delete(t.id);
                                      }),
                                  "aria-label": R.intl.string(R.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, A.jsx)(ha.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, A.jsx)("div", {
                      className: hK.HZ,
                      children: (0, A.jsx)(t$.d, {
                          label: R.intl.string(R.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              hD.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function h$(e) {
    let t = hc.A.get(e);
    ((0, hA.A)({ platformType: t.type }),
        tt.default.track(S.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        }));
}
function hJ() {
    let e = (0, hg.gn)(),
        t = (0, iZ.A)((0, hX.getMigratedApplicationIdentityConnectionsScreenApplications)("NewConnectionsList"));
    return (0, A.jsxs)("div", {
        className: hK.lA,
        children: [
            t.map(
                (e) =>
                    null != e &&
                    (0, A.jsx)(
                        hG.A,
                        { application: e, className: hK.__invalid_accountButton, innerClassName: hK.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - t.length)
                .map((e) =>
                    (0, A.jsx)(
                        hd.A,
                        { type: e.type, className: hK.__invalid_accountButton, innerClassName: hK.U$ },
                        e.type,
                    ),
                ),
            (0, A.jsx)(st.m, {
                text: R.intl.string(R.t.QqTz8b),
                children: (0, A.jsx)("div", {
                    className: ir()(hK.ej, hK.__invalid_accountButton),
                    children: (0, A.jsx)(ho.vN, {
                        children: (0, A.jsx)("button", {
                            className: ir()(hK.R8, hK.U$),
                            type: "button",
                            onClick: function () {
                                e6.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: h$ });
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
function h0(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        o = E.useMemo(() => i.filter((e) => hc.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, A.jsx)(a7.y, { type: a7.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === s.length
              ? (0, A.jsx)(AT.pp, {
                    theme: r,
                    className: hK.p$,
                    children: (0, A.jsx)(AT.SG, {
                        note: R.intl.string(R.t.WenGZ2),
                        children: R.intl.string(R.t.aoLS84),
                    }),
                })
              : (0, A.jsxs)(A.Fragment, {
                    children: [
                        (0, A.jsx)(p.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: R.intl.format(R.t.AioIGb, { count: s.length + o.length }),
                        }),
                        s.map((e, t) =>
                            (0, A.jsx)(
                                hQ,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, A.jsx)(
                                hq,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            hu.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, A.jsx)("div", { className: hK.V, children: t })
    );
}
let h1 = (0, d.E2)(c.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, A.jsx)(tQ.D, { label: R.intl.string(R.t["t+aGse"]), children: (0, A.jsx)(hJ, {}) });
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
    h2 = (0, d.E2)(c.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, h.bG)([te.A], () => te.A.hidePersonalInformation),
                t = (0, h.bG)([hv.A], () => hv.A.isFetching()),
                n = (0, h.bG)([hv.A], () => hv.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: s } = (0, h.cf)([hx.default], () => ({
                    authorizedAppsFetchState: hx.default.getFetchState(),
                    authorizedApps: hx.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, hP.A)(li.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, uG.Ay)(),
                o = (0, h.bG)([oV.default], () => oV.default.locale);
            return (E.useEffect(() => {
                i === hx.FetchState.NOT_FETCHED && hi.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)(hR, {}),
                          (0, A.jsx)(h0, {
                              fetching: t || l || (r.length > 0 && i !== hx.FetchState.FETCHED),
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
            hu.A.fetch();
        },
        useSearchTerms: () => [
            R.intl.string(R.t["+/hZM/"]),
            R.intl.string(R.t.bsbMVz),
            R.intl.string(R.t.f7yOAX),
            R.intl.string(R.t.FYKGsL),
            R.intl.string(R.t["+KCMSi"]),
        ],
    });
var h3 = n(206828);
let h5 = (0, d.zZ)(c.X.CONNECTIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["3fe7U5"]),
        useSubtitle: () => R.intl.string(R.t.U22vw6),
        useInlineNotice: function () {
            let e = (0, h.bG)([hv.A], () => hv.A.getAccounts()),
                t = E.useMemo(
                    () =>
                        hc.A.filter(
                            (e) =>
                                e.migrationData?.getMigrationExperimentEnabled("ConnectionDeprecationInlineNotice") ===
                                !0,
                        ).filter((t) => e.some((e) => e.type === t.type)),
                    [e],
                ),
                [n, i] = E.useState(0),
                [s, l] = E.useState(t),
                r = t !== s;
            r && (l(t), i(0));
            let a = E.useMemo(() => t[n], [t, n]),
                o = (0, iZ.h)(a?.migrationData?.replacedBy),
                { canStartAuthorization: u, hasAlreadyLinked: d, fetched: c } = (0, h3.RD)(o),
                g =
                    a?.type === S.fg2.RIOT_GAMES || a?.type === S.fg2.LEAGUE_OF_LEGENDS
                        ? R.intl.string(hH.default["1S6oAo"])
                        : o?.name,
                A = null != a && c,
                x = A && !d && u && o?.connectionEntrypointUrl != null;
            return (
                r || !A || x || i((e) => e + 1),
                E.useMemo(
                    () =>
                        x
                            ? {
                                  type: m.lT.INLINE_NOTICE,
                                  noticeType: "info",
                                  text: R.intl.format(hH.default.wUXupS, {
                                      connectionName: a.name,
                                      applicationName: g,
                                      connectionEntrypointUrl: o?.connectionEntrypointUrl,
                                      helpCenterLink:
                                          a.migrationData?.helpCenterLink != null ? a.migrationData.helpCenterLink : "",
                                  }),
                              }
                            : null,
                    [a, g, o, x],
                )
            );
        },
        buildLayout: () => [h1, h2],
    }),
    h6 = (0, d.zZ)(c.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["f6kk+r"]),
        useSubtitle: () => R.intl.string(R.t.G9JfLg),
        buildLayout: () => [hl],
        initialize: () => (
            hi.A.fetch(),
            () => {
                hs.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    h4 = (0, d.t_)(c.X.CONNECTED_APPS_PANEL, {
        useTitle: () => R.intl.string(R.t.lrVuZO),
        useObscuredNotice: a4.L,
        buildLayout: () => [h5, h6],
    }),
    h8 = (0, d.i4)(c.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.lrVuZO),
        icon: Af.LinkIcon,
        buildLayout: () => [h4],
    });
var h7 = n(625657),
    h9 = n(592598),
    Se = n(773371),
    St = n(184809),
    Sn = n(672396);
let Si = Sl(null);
function Ss() {
    var e;
    let t = Sl(Si);
    ((e = Si),
        B().isEqual(B().omit(t, "old_enabled"), B().omit(e, "old_enabled")) ||
            (tt.default.track(S.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (Si = t)));
}
function Sl(e) {
    let t = St.default.getNotificationPositionMode(),
        n = t !== S.G6Q.DISABLED,
        i = sM.Ay.getOverlayKeybind(),
        s = sM.Ay.getOverlayChatKeybind();
    return {
        enabled: Se.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: h9.A.isNotificationDisabled(Sn.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, sl.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, sl.dI)(s.shortcut) : null,
        text_opacity_slider: St.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? Se.default.enabled,
    };
}
var Sr = n(237984),
    Sa = n(63035);
function So(e) {
    (e.preventDefault(), e.stopPropagation());
}
function Su(e) {
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
    return (0, A.jsxs)("div", {
        className: ir()(Sa.HS, d),
        children: [
            (0, A.jsxs)(Er.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, A.jsx)("div", { className: Sa.x_, children: t }),
                    (0, A.jsxs)("div", {
                        className: Sa.rN,
                        children: [
                            null != n && (0, A.jsx)("div", { className: Sa.$t, children: n }),
                            (0, A.jsxs)("div", {
                                className: Sa.c8,
                                children: [
                                    (0, A.jsx)(H.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: Sa.SZ,
                                        children: i,
                                    }),
                                    null != s &&
                                        (0, A.jsx)(H.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: s,
                                        }),
                                    null != r &&
                                        (0, A.jsx)(H.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, A.jsx)("div", { className: Sa.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)("div", { className: Sa.Om, children: a }),
        ],
    });
}
let Sd = (0, d.E2)(c.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, A.jsx)(Su, {
            title: R.intl.string(R.t["z4/l+V"]),
            description: R.intl.string(R.t["3aZq/0"]),
            action: (0, A.jsx)(_.$, {
                variant: "primary",
                text: R.intl.string(R.t.s2nVhG),
                onClick: () => {
                    (0, Sr.b)(tL.A.USER_SETTINGS, S.BRT.APP);
                },
            }),
            "aria-label": R.intl.string(R.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [R.intl.string(R.t["z4/l+V"])],
});
var Sc = n(31300),
    Sg = n(780907),
    Sm = n(684013),
    SA = n(56562),
    SE = n(311043),
    Sh = n(569926),
    SS = n(810412),
    Sx = n(41984),
    Sp = n(296027),
    ST = n(562519);
let Sf = 5 * n(927813).A.Millis.DAY,
    SI = new ST.A("overlay_survey_timestamps");
function S_(e, t) {
    let i, s;
    ((i = Date.now()),
        (null != (s = Array.from(SI.values()).reduce((e, t) => Math.max(e, t), 0)) && i - s < Sf) ||
            Array.from(SI.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, sa.openModalLazy)(async () => {
                let i,
                    { default: s } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return ((i = Date.now()), SI.add(i), (n) => (0, A.jsx)(s, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function SN() {
    (0, i2.sL)("overlay-settings");
}
function SC(e) {
    let { className: t, game: n } = e;
    return (0, i2.NP)() && null != n && n.elevated
        ? (0, A.jsx)("div", {
              className: t,
              children: (0, A.jsx)(r0.p, {
                  messageType: r0.Y.WARNING,
                  action: (0, A.jsx)(_.$, {
                      variant: "secondary",
                      size: "sm",
                      text: R.intl.string(R.t["1iI46O"]),
                      onClick: SN,
                  }),
                  children: R.intl.format(R.t["LJzl+0"], { helpCenterLink: eT.A.getArticleURL(S.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var Sb = n(760751),
    Sy = n(9302),
    Sv = n(656513);
let Sj = new Set([
    Sx.AR.INITIALIZING,
    Sx.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    Sx.AR.WAITING_FOR_MODULE_TRACKING,
    Sx.AR.WAITING_FOR_OVERLAY_OPEN,
    Sx.AR.WAITING_FOR_POPOUT_OPEN,
    Sx.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    Sx.AR.WAITING_FOR_REACT_INITIALIZATION,
    Sx.AR.WAITING_FOR_PID_FOCUS,
    Sx.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function SO(e) {
    let { children: t, className: n, onExpand: i, ...s } = e,
        [l, r] = E.useState(!1);
    return (0, A.jsx)(Sv.N, {
        className: Sa.uR,
        collapsibleContent: (0, A.jsx)("div", { className: Sa.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, A.jsx)(Su, {
                ...s,
                onClick: (e) => {
                    var n;
                    (r((n = !l)), i?.(n), t?.(e));
                },
                className: ir()(Sa.AC, n),
                action: (0, A.jsxs)("div", {
                    className: Sa.rc,
                    children: [
                        s.action,
                        l
                            ? (0, A.jsx)(cP.a, {
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
let SL = (0, d.E2)(c.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = iJ();
        (0, Sh.I)(e?.id);
        let n = e?.pid,
            i = (0, h.bG)(
                [Sp.default],
                () => (null == e || null == n ? null : Sp.default.getTrackedGameByPid(n)),
                [e, n],
                iK(),
            ),
            { data: s } = (0, Sh.I)(i?.gameId),
            { enabledLegacy: l, enabledOOP: r } = (0, h.cf)(
                [Sb.A, ti.A, SE.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, iQ.hw)(e, !1, [Sb.A, ti.A, SE.A]),
                [e, i],
            ),
            a = (0, h.bG)(
                [iQ.Ay, Sb.A, ti.A, SE.A],
                () => (null == e ? null : (0, iQ.xU)(e, iQ.Ay, Sb.A, ti.A, SE.A)),
                [e],
                iK(),
            ),
            [o, u] = E.useState(r),
            [d, c] = E.useState(l),
            [g, m] = E.useState(!1);
        E.useEffect(() => {
            (u(r), c(l));
        }, [r, l]);
        let S = !(0, Sy.supportsLegacy)(),
            x = !(0, Sy.supportsOutOfProcess)(),
            { legacyEnabled: p, oopEnabled: T } = (0, h.cf)([Sp.default], () => Sp.default.getGlobalEnabledStatus());
        function f(t, n) {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case SS.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), Sg.Ay.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case SS.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), Sg.Ay.toggleOverlay(e, d, t), (s = !t && o));
                    break;
                case SS.OverlayToggledClientSettingType.LEGACY:
                    (Sm.A.setEnabled(t, T), (0, SS.Q3)(t, SS.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case SS.OverlayToggledClientSettingType.OOP:
                    (Sm.A.setEnabled(p, t), (0, SS.Q3)(t, SS.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || s) &&
                S_(
                    i ? SS.OverlayToggledClientSettingType.LEGACY_GAME : SS.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let I = S && x,
            _ = !p && !T,
            N = !o && !p && d && !S,
            C = !d && !T && o && !x,
            b = i?.overlayMethod === Sx.Ue.Disabled,
            y = i?.state === Sx.AR.OVERLAY_RENDERING && !b,
            v = i?.state != null && Sj.has(i.state) && !b,
            j = i?.overlayMethod === Sx.Ue.OutOfProcess,
            O = i?.overlayMethod === Sx.Ue.OutOfProcessLimitedInteraction,
            L = i?.overlayMethod === Sx.Ue.Hook,
            D = i?.state === Sx.AR.OVERLAY_CRASHED || i?.state === Sx.AR.OVERLAY_CRASHED_DISABLED,
            P = !o && !d,
            [G, M] = (function () {
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
                                    case i?.fullscreenType !== SA.aI.BORDERLESS_FULLSCREEN:
                                        return R.intl.string(R.t.mJmbeC);
                                    case x:
                                        return R.intl.string(R.t.C7bLTQ);
                                    case !i?.oopEnabled:
                                        return R.intl.string(R.t.WiY24u);
                                    case !T:
                                        return R.intl.string(R.t.cAFVsL);
                                    case !(s?.supportsOutOfProcessOverlay ?? !0):
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
                        let e = i?.fullscreenType === SA.aI.FULLSCREEN ? R.intl.string(R.t.mJmbeC) : null;
                        return [R.intl.string(R.t.VPW4XY), e];
                    }
                    default:
                        return [R.intl.string(R.t.ONovP5), null];
                }
            })();
        (0, eS.Ay)(() => {
            Sg.Ay.getDetectableGames();
        });
        let [U, V] = E.useMemo(
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
            : (0, A.jsxs)(SO, {
                  onExpand: m,
                  className: g ? Sa.tx : void 0,
                  title: (0, A.jsxs)(A.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, A.jsx)(st.m, {
                                    text: R.intl.string(R.t["4PJP5p"]),
                                    children: (0, A.jsx)(hS.A, {
                                        size: 16,
                                        color: nQ.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, A.jsx)(hr.U, {
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
                  hint: null != M ? M : void 0,
                  header: (0, A.jsxs)(A.Fragment, {
                      children: [
                          y || v
                              ? (0, A.jsx)(Sc.k, { size: "xxs", color: V })
                              : (0, A.jsx)("div", { className: Sa.W4 }),
                          (0, A.jsx)(H.E, {
                              variant: "text-xs/semibold",
                              color: U,
                              children: R.intl.string(R.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, A.jsx)(i0.A, { game: t, pid: e?.pid, size: i0.M.MEDIUM }),
                  "aria-label": R.intl.string(R.t["87O5GC"]),
                  action: (0, A.jsx)(n0.D, {
                      onClick: (e) => So(e),
                      children: (0, A.jsx)(t$.d, {
                          checked: (o && T) || (d && p),
                          disabled: I,
                          onChange: (t) => {
                              !(function (t, n) {
                                  if (null == e) return;
                                  let i = !1,
                                      s = !1;
                                  switch (n) {
                                      case "game":
                                          (Sg.Ay.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (s = !t && o));
                                          break;
                                      case "global":
                                          (Sm.A.setEnabled(t, t), (i = !t && p), (s = !t && T));
                                          break;
                                      case "both":
                                          (Sm.A.setEnabled(t, t),
                                              Sg.Ay.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && p) || (!t && d)),
                                              (s = (!t && T) || (!t && o)));
                                  }
                                  let l = null;
                                  (i
                                      ? (l =
                                            "game" === n
                                                ? SS.OverlayToggledClientSettingType.LEGACY_GAME
                                                : SS.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === n
                                                ? SS.OverlayToggledClientSettingType.OOP_GAME
                                                : SS.OverlayToggledClientSettingType.OOP),
                                      null != l && S_(l, e.id ?? null));
                              })(
                                  t,
                                  (function (e, t) {
                                      let n = !t && e,
                                          i = !T && o,
                                          s = !p && d,
                                          l = !o && T,
                                          r = !d && p;
                                      switch (!0) {
                                          case n && (i || s) && (l || r):
                                              return "both";
                                          case n && (i || s):
                                              return "global";
                                          default:
                                              return "game";
                                      }
                                  })(t, (o && T) || (d && p)),
                              );
                          },
                      }),
                  }),
                  warning: (0, A.jsx)(SC, { className: Sa.Hh, game: e }),
                  children: [
                      (0, A.jsx)(Su, {
                          title: R.intl.string(R.t["7BlVIs"]),
                          description: R.intl.string(R.t.ndgADE),
                          hint: T ? void 0 : R.intl.string(R.t.cAFVsL),
                          "aria-label": R.intl.string(R.t["7BlVIs"]),
                          action: (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(t$.d, {
                                      checked: o && T,
                                      disabled: x,
                                      onChange: (e) => {
                                          e && !T
                                              ? f(e, SS.OverlayToggledClientSettingType.OOP)
                                              : f(e, SS.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, A.jsx)("div", { className: Sa.Kz }),
                              ],
                          }),
                      }),
                      (0, A.jsx)(Su, {
                          title: R.intl.string(R.t.BfFpW1),
                          description: R.intl.string(R.t.OzInYk),
                          hint: p ? void 0 : R.intl.string(R.t["3sYHXm"]),
                          "aria-label": R.intl.string(R.t.BfFpW1),
                          action: (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(t$.d, {
                                      checked: d && p,
                                      disabled: S,
                                      onChange: (e) => {
                                          e && !p
                                              ? f(e, SS.OverlayToggledClientSettingType.LEGACY)
                                              : f(e, SS.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, A.jsx)("div", { className: Sa.Kz }),
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
var SR = n(206885);
function SD(e) {
    let { game: t, gameApplication: n } = e,
        i = E.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, h.bG)([iW.A], () => (null != n ? n : iW.A.getApplication(t?.id)), [n, t]);
    return (0, A.jsx)(i0.A, { game: s, pid: i, size: i0.M.SMALL });
}
function SP(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: s,
        onChange: l,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, Sh.I)(t?.id);
    let o = (0, h.cf)([iQ.Ay, Sb.A, ti.A, SE.A], () => (0, iQ.xU)(t, iQ.Ay, Sb.A, ti.A, SE.A)),
        u = (0, h.cf)([Sb.A, ti.A, SE.A], () => (0, iQ.hw)(t, !1, [Sb.A, ti.A, SE.A]), [t]),
        d = s(u),
        [c, g] = E.useState(d);
    return (
        E.useEffect(() => {
            g(d);
        }, [d]),
        (0, A.jsx)(Su, {
            title: t.name,
            icon: (0, A.jsx)(SD, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, A.jsxs)(A.Fragment, {
                children: [
                    (0, A.jsx)(t$.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), l(e, o, u), n && S_(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, A.jsx)("div", { className: Sa.Kz }),
                ],
            }),
        })
    );
}
let SG = (0, d.E2)(c.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = E.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, h.cf)([Sp.default], () =>
                    Sp.default.getGlobalEnabledStatus(),
                ),
                s = (0, h.yK)([iQ.Ay], () => iQ.Ay.getGamesSeen(!0)).filter((e) => !(0, EC.n1)(e)),
                l = (0, iZ.A)(s.map((e) => e.id)),
                r = !(0, Sy.supportsLegacy)();
            function a(e) {
                Sm.A.setEnabled(e, i);
                let t = iQ.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, SS.Q3)(e, SS.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && S_(SS.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                Sg.Ay.toggleOverlay(t, e, i);
            }
            let u = E.useMemo(
                () =>
                    (0, Sy.supportsLegacy)()
                        ? r
                            ? R.intl.string(R.t.r9jEVw)
                            : R.intl.string(R.t.OzInYk)
                        : R.intl.string(R.t["8Ox6/E"]),
                [r],
            );
            return 0 === s.length
                ? (0, A.jsx)(Su, {
                      title: R.intl.string(R.t.BfFpW1),
                      description: u,
                      "aria-label": R.intl.string(R.t.BfFpW1),
                      className: Sa.dA,
                      action: (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(t$.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              SR.O && (0, A.jsx)("div", { className: Sa.Kz }),
                          ],
                      }),
                  })
                : (0, A.jsxs)(SO, {
                      onExpand: t,
                      className: e ? Sa.tx : void 0,
                      title: R.intl.string(R.t.BfFpW1),
                      description: u,
                      "aria-label": R.intl.string(R.t.BfFpW1),
                      action: (0, A.jsx)(n0.D, {
                          onClick: (e) => So(e),
                          children: (0, A.jsx)(t$.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, A.jsx)("div", {
                              className: Sa.SC,
                              children: (0, A.jsx)(H.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: R.intl.string(R.t.FzoWRo),
                              }),
                          }),
                          (0, A.jsx)(T.Ip, {
                              className: Sa.XG,
                              children: s.map((e, t) =>
                                  (0, A.jsx)(
                                      SP,
                                      {
                                          rawGame: e,
                                          clientSettingType: SS.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: l[t],
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
    SM = (0, d.E2)(c.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = E.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, h.cf)([Sp.default], () =>
                    Sp.default.getGlobalEnabledStatus(),
                ),
                s = !(0, Sy.supportsOutOfProcess)(),
                l = (0, h.yK)([iQ.Ay], () => iQ.Ay.getGamesSeen(!0)).filter((e) => !(0, EC.n1)(e)),
                r = (0, iZ.A)(l.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                Sm.A.setEnabled(i, e);
                let s = iQ.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, SS.Q3)(e, SS.OverlayToggledClientSettingType.OOP, s),
                    t && S_(SS.OverlayToggledClientSettingType.OOP, s));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                Sg.Ay.toggleOverlay(t, e, i);
            }
            let u = E.useMemo(
                () => (SR.O ? (s ? R.intl.string(R.t.C7bLTQ) : R.intl.string(R.t.ndgADE)) : R.intl.string(R.t.m7X4az)),
                [s],
            );
            return 0 === l.length
                ? (0, A.jsx)(Su, {
                      title: R.intl.string(R.t["7BlVIs"]),
                      description: u,
                      "aria-label": R.intl.string(R.t["7BlVIs"]),
                      className: Sa.dA,
                      action: (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(t$.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                              SR.O && (0, A.jsx)("div", { className: Sa.Kz }),
                          ],
                      }),
                  })
                : (0, A.jsxs)(SO, {
                      onExpand: t,
                      className: e ? Sa.tx : void 0,
                      title: R.intl.string(R.t["7BlVIs"]),
                      description: u,
                      "aria-label": R.intl.string(R.t["7BlVIs"]),
                      action: (0, A.jsx)(n0.D, {
                          onClick: (e) => So(e),
                          children: (0, A.jsx)(t$.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, A.jsx)("div", {
                              className: Sa.SC,
                              children: (0, A.jsx)(H.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: R.intl.string(R.t.FzoWRo),
                              }),
                          }),
                          (0, A.jsx)(T.Ip, {
                              className: Sa.XG,
                              children: l.map((e, t) =>
                                  (0, A.jsx)(
                                      SP,
                                      {
                                          rawGame: e,
                                          clientSettingType: SS.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: s,
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
    SU = (0, d.zZ)(c.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => R.intl.string(R.t["/dp6yY"]),
        buildLayout: () => [SL, SM, SG, Sd],
    }),
    SV = (0, d.zD)(c.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, h.bG)([St.default], () => !St.default.disableClickableRegions),
        setValue: (e) => {
            Sm.A.setDisableClickableRegions(!e);
        },
        useTitle: () => R.intl.string(R.t["+eFXxq"]),
        useSubtitle: () => R.intl.string(R.t.kivMAp),
    }),
    Sk = (0, d.E2)(c.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, h.bG)([sM.Ay], () => sM.Ay.getOverlayKeybind()),
                t = !(0, Sy.supportsLegacy)(),
                n = !(0, Sy.supportsOutOfProcess)(),
                [i, s] = (0, h.yK)([iQ.Ay], () => [iQ.Ay.canShowAdminWarning, iQ.Ay.getVisibleGame()], []),
                l = (0, i2.NP)(),
                r = null != s && s.elevated && i && !l,
                a = !(0, sM.DV)(e?.shortcut ?? []);
            return (0, A.jsx)("div", {
                className: Sa.hc,
                children: (0, A.jsxs)("div", {
                    className: Sa.eH,
                    children: [
                        (0, A.jsxs)("div", {
                            className: Sa.Bu,
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
                                        className: Sa.y7,
                                        children: R.intl.string(R.t.NsowVa),
                                    }),
                                a &&
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: Sa.y7,
                                        children: R.intl.string(R.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, A.jsx)("div", {
                            className: Sa.IH,
                            children: (0, A.jsx)(ss.A, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    (ta()(null != e, "Keybind should never be undefined"),
                                        iY.A.setKeybind({ ...e, shortcut: t }));
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.VsAZcC)],
    });
var Sw = n(515183),
    SF = n(682763);
let SB = (0, d.zD)(c.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = iJ();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = iJ();
            return null != e && (0, Sw.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = iJ(),
                n = t?.id,
                i = (0, h.bG)([h9.A], () => h9.A.isLimitedInteractionOverrideEnabled(n)),
                s = null != e && (0, Sw.qJ)(e.pid);
            return i || s;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                s,
                { runningGameApplication: l } =
                    ((t = iq.A.getStreamerActiveStreamMetadata()),
                    (s = i$(
                        t,
                        (i =
                            null != (n = iQ.Ay.getVisibleGame())
                                ? iQ.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: iW.A.getApplication(s) ?? void 0 });
            null != l && (0, SF.x8)(l.id, e);
        },
        useTitle: () => R.intl.string(R.t.wgVQND),
        useSubtitle: () => R.intl.string(R.t["5SsyF5"]),
    }),
    Sz = (0, d.zZ)(c.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [Sk, SB, SV] });
var SY = n(93465);
let SX = [
    {
        title: R.t.eVE4LX,
        description: R.t["72WNqk"],
        disabledSetting: SY.M.TEXT_CHAT,
        key: c.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: R.t.oifnSh,
        description: R.t.bgU5r0,
        disabledSetting: SY.M.WELCOME_GENERAL,
        key: c.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: R.t.hqsZJW,
        description: R.t.kHjdqc,
        disabledSetting: SY.M.GO_LIVE_NUDGE,
        key: c.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: R.t.sop3rn,
        description: R.t.pjgffc,
        disabledSetting: SY.M.GAME_ACTIVITY,
        key: c.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: R.t["2QVhbb"],
        description: R.t.wQ4ilB,
        disabledSetting: SY.M.NOW_PLAYING,
        key: c.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: R.t.giM9fA,
        description: R.t.EhAfWj,
        disabledSetting: SY.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: c.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, nS.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, h.bG)([h9.A], () => h9.A.isNotificationDisabledBySetting(SY.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function SH(e) {
    return (0, d.zD)(e.key, {
        useTitle: () => R.intl.string(e.title),
        useSubtitle: () => R.intl.string(e.description),
        useValue: () => !(0, h.bG)([h9.A], () => h9.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            Sm.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let SK = (0, d.FW)(c.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => SX.map(SH),
    }),
    SW = (0, d.zZ)(c.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.xOE5bA),
        buildLayout: () => [SK],
    }),
    SZ = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => R.intl.string(R.t.dnvZSg),
        useValue: () => (0, h.bG)([St.default], () => St.default.getAvatarSizeMode()),
        setValue: (e) => {
            Sm.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: R.intl.string(R.t.YcOxtr), value: S.OSZ.LARGE },
            { id: "small", label: R.intl.string(R.t.BKIKqx), value: S.OSZ.SMALL },
        ],
    }),
    Sq = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => R.intl.string(R.t.J0dpcB),
        useValue: () => (0, h.bG)([St.default], () => St.default.getDisplayNameMode()),
        setValue: (e) => {
            Sm.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: R.intl.string(R.t.nBmDrT), value: S.pwA.ALWAYS },
            { id: "speaking", label: R.intl.string(R.t["2OvIZY"]), value: S.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: R.intl.string(R.t.ekjlPL), value: S.pwA.NEVER },
        ],
    }),
    SQ = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => R.intl.string(R.t.swsWWC),
        useValue: () => (0, h.bG)([St.default], () => St.default.getDisplayUserMode()),
        setValue: (e) => {
            Sm.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: R.intl.string(R.t.nBmDrT), value: S.f5z.ALWAYS },
            { id: "speaking", label: R.intl.string(R.t["2OvIZY"]), value: S.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var S$ = n(391973),
    SJ = n(489277),
    S0 = n(897720),
    S1 = n(38502);
function S2() {
    let e = SJ.A.getWidgetByType(S.uss.VOICE_V3);
    if (null == e) return null;
    let t = S1.A.getWidget(e.id);
    return null != t && (0, S0.ZO)(t) ? t : null;
}
n(392164);
let S3 = (0, d.sN)(c.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => R.intl.string(R.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? R.intl.string(R.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = S2();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? R.intl.string(R.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = S2();
        null != t &&
            (e < 1
                ? (0, S$.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, S$.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var S5 = n(450740),
    S6 = n(968898),
    S4 = n(288737);
function S8(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new S4.A({
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
        user: new dx.A({ id: s, username: e }),
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
let S7 = (0, d.E2)(c.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, h.bG)([li.default], () => li.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: s,
                } = (0, h.cf)([St.default], () => ({
                    avatarSizeMode: St.default.getAvatarSizeMode(),
                    displayNameMode: St.default.getDisplayNameMode(),
                    displayUserMode: St.default.getDisplayUserMode(),
                })),
                [l] = E.useState(() => [
                    S8(R.intl.string(R.t.C0ZDvo), !0, !1),
                    S8(R.intl.string(R.t.iOtj8E), !1, !1, !0),
                    S8(R.intl.string(R.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, h.bG)([SJ.A, S1.A], () => {
                    let e = SJ.A.getWidgetByType(S.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = S1.A.getWidget(e.id);
                    return null != t && (0, S0.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = S8(t.username)).user = t), e) : null, ...l].filter(ii.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, A.jsx)(hI.N, {
                    theme: S.NJ8.ONYX,
                    children: (e) =>
                        (0, A.jsxs)("div", {
                            className: ir()(Sa.Y5, e),
                            children: [
                                (0, A.jsx)("div", {
                                    className: Sa.kJ,
                                    children: (0, A.jsx)(S5.DH, {
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
                                        displayUserMode: s,
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
                                    className: Sa.R$,
                                    children: [
                                        (0, A.jsx)(S6.Pl, { children: R.intl.string(R.t.KNJ6Vq) }),
                                        (0, A.jsx)(S6.CS, {}),
                                        (0, A.jsx)(S6.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, A.jsx)("div", { className: Sa.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    S9 = (0, d.zZ)(c.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => R.intl.string(R.t.r1TZfh),
        buildLayout: () => [S7, SZ, Sq, SQ, S3],
    });
var xe = n(54761);
function xt() {
    let [e, t] = (0, gt.kn)([eu.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, z.Ay)(() => () => {
        t(gd.i.AUTO_DISMISS);
    }),
    e !== eu.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, A.jsxs)(A.Fragment, {
              children: [
                  (0, A.jsxs)("div", {
                      className: xe.xC,
                      children: [
                          (0, A.jsx)("div", {
                              children: (0, A.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: R.intl.string(R.t.mdXZh1),
                                  className: xe.tl,
                              }),
                          }),
                          (0, A.jsx)("div", {
                              children: (0, A.jsxs)("div", {
                                  className: xe.vJ,
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
                                  className: xe.lh,
                              }),
                          }),
                          (0, A.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: xe.VV,
                              children: (0, A.jsx)(_.$, {
                                  variant: "primary",
                                  text: R.intl.string(R.t.Q26diF),
                                  onClick: () => void t(gd.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, A.jsx)(i8.c, { className: xe.yF }),
              ],
          });
}
function xn() {
    let e = (0, h.bG)([te.A], () => te.A.enabled),
        t = (0, nS.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, A.jsxs)(A.Fragment, {
              children: [
                  (0, A.jsx)(iz.w, {
                      type: "warning",
                      children: R.intl.format(R.t.fuEX5B, {
                          onClick: function () {
                              return (0, ns.openUserSettings)(c.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                  }),
                  (0, A.jsx)(i8.c, { className: xe.yF }),
              ],
          })
        : null;
}
let xi = (0, d.t_)(c.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                Ss(),
                sM.Ay.addChangeListener(Ss),
                h9.A.addChangeListener(Ss),
                St.default.addChangeListener(Ss),
                Se.default.addChangeListener(Ss),
                eQ.isPlatformEmbedded && (0, Ey.a2)(),
                () => {
                    (sM.Ay.removeChangeListener(Ss),
                        h9.A.removeChangeListener(Ss),
                        St.default.removeChangeListener(Ss),
                        Se.default.removeChangeListener(Ss),
                        eQ.isPlatformEmbedded && (0, Ey.e0)());
                }
            );
        },
        useTitle: () => R.intl.string(R.t["9cb1Uz"]),
        decoration: {
            type: m.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, A.jsxs)(A.Fragment, { children: [(0, A.jsx)(xt, {}), (0, A.jsx)(xn, {})] });
            },
        },
        buildLayout: () => [SU, Sz, S9, SW],
    }),
    xs = (0, d.i4)(c.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["9cb1Uz"]),
        icon: h7.l,
        usePredicate: np.b_,
        buildLayout: () => [xi],
    });
var xl = n(687966);
let xr = (0, d.AK)(c.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.OYYY6q),
        destinationKey: c.X.ACTIVITY_PRIVACY_PANEL,
    }),
    xa = (0, d.gN)(c.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [xr] });
var xo = n(227309),
    xu = n(29160),
    xd = n(552366),
    xc = n(938442);
function xg(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e;
    (0, Sh.I)(t.id);
    let o = (0, h.cf)([iQ.Ay, Sb.A, ti.A, SE.A], () => (0, iQ.xU)(t, iQ.Ay, Sb.A, ti.A, SE.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, h.cf)([iQ.Ay], () => ({
            canToggleDetection: null == a || iQ.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: iQ.Ay.isDetectionEnabled(o),
        })),
        c = (0, h.bG)([iQ.Ay], () => iQ.Ay.getVisibleGame()),
        [g, m] = E.useState(!1),
        x = E.useRef(null),
        p = null != c && (0, iQ.Es)(o) === (0, iQ.Es)(c),
        T = !s && !g,
        f = !i && !p,
        I = T || f,
        _ = E.useMemo(
            () =>
                (0, EC.n1)(o)
                    ? r
                        ? o.gameName
                        : R.intl.formatToPlainString(R.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [N, C] = E.useState(_ ?? "???"),
        b = ir()(xc.tR, {
            [xd.LO]: !i,
            [xd.Rw]: i,
            [xd.FB]: null != o && i,
            [xd.xL]: r,
            [xd.fG]: null != l && l.length > 0,
        });
    function y() {
        (Sg.Ay.deleteEntry(o),
            l?.forEach((e) => {
                Sg.Ay.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? Sb.A.getDetectableGame(o.id) : null;
        (tt.default.track(S.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, EC.n1)(o) ? o.gameName : o.name,
        }),
            (0, sa.openModalLazy)(async () => {
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
                        className: ir()(xd.$K, xc.Vd),
                        children: [
                            o.verified && !s
                                ? (0, A.jsxs)("div", {
                                      className: xd.HS,
                                      children: [
                                          (0, A.jsx)("div", { className: xd.mO, children: _ }),
                                          (0, A.jsx)(st.m, {
                                              text: R.intl.string(R.t["4PJP5p"]),
                                              children: (0, A.jsx)(hS.A, {
                                                  className: xd.qf,
                                                  size: 18,
                                                  color: nQ.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, A.jsx)(hr.U, {
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
                                      className: ir()(xd.mO, xd.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: N,
                                      onBlur: function () {
                                          o.name !== N && Sg.Ay.editName(o, N);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === sy.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => C(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: n, exePath: s } = o;
                                return (
                                    i || p
                                        ? (e = R.intl.string(R.t.VbV5dv))
                                        : null != n && "" !== n && (e = R.intl.format(R.t["gGeOE+"], { when: n })),
                                    (0, A.jsx)(H.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: xd.GN,
                                        children: (0, A.jsx)(xu.A, {
                                            hoverText:
                                                null != s && "" !== s
                                                    ? ((t = s.replace(/^file:\/\//i, "")),
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
                        (0, A.jsx)(r7.Y, {
                            targetElementRef: x,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, A.jsx)(cr.W, {
                                    navId: "registered-game-overflow-menu",
                                    onSelect: void 0,
                                    onClose: t,
                                    "aria-label": R.intl.string(R.t["UKOtz+"]),
                                    children: (0, A.jsxs)(e3.rX, {
                                        children: [
                                            T &&
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
                                    className: ir()(xd._Q, { [xd.g9]: t.isShown }),
                                    children: (0, A.jsx)(st.m, {
                                        text: R.intl.string(R.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, A.jsx)(i9.K, {
                                            ...e,
                                            buttonRef: x,
                                            icon: ci.MoreHorizontalIcon,
                                            variant: "icon-only",
                                            size: "sm",
                                            "aria-label": R.intl.string(R.t["UKOtz+"]),
                                        }),
                                    }),
                                }),
                        }),
                    (0, A.jsx)(st.m, {
                        text: R.intl.string(R.t.QmitzM),
                        asContainer: !0,
                        ariaHidden: !0,
                        children: (0, A.jsx)(si.I, {
                            checked: o.detectable && u,
                            disabled: !u,
                            onChange: function () {
                                null != l && l.length > 0 && d
                                    ? (0, sa.openModalLazy)(async () => {
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
                                                              (Sg.Ay.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : Sg.Ay.toggleDetection(o);
                            },
                            "aria-label": R.intl.string(R.t.QmitzM),
                        }),
                    }),
                ],
            }),
            null != l &&
                l.length > 0 &&
                !i &&
                (0, A.jsx)("div", {
                    className: xd.AQ,
                    children: l.map((e, t) =>
                        (0, A.jsxs)(
                            E.Fragment,
                            {
                                children: [
                                    (0, A.jsx)(xg, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, A.jsx)("div", { className: xd.PQ }),
                                ],
                            },
                            (0, iQ.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function xm() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = Ej();
    return 0 === e.length
        ? null
        : (0, A.jsx)(Y.B, {
              padding: { bottom: 32 },
              children: (0, A.jsx)(nJ.n, {
                  children: (0, A.jsx)("div", {
                      children: e.map((e) =>
                          (0, A.jsx)(
                              xg,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === xo.a7 ? t : void 0 },
                              (0, iQ.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let xA = (0, d.E2)(c.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, A.jsx)(xm, {}),
});
var xE = n(424994);
let xh = (0, d.zZ)(c.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [xA, xa],
    useTitle: () => R.intl.string(R.t.jCOdvx),
    useSubtitle: () =>
        (0, h.bG)([iQ.Ay], () => iQ.Ay.getGamesSeen(!1).some((e) => !(0, EC.n1)(e)))
            ? R.intl.format(R.t.KPA3m9, { igdbLink: xE.s8 })
            : R.intl.string(R.t["1yiJwn"]),
});
var xS = n(890497),
    xx = n(853270),
    xp = n(969426);
function xT(e) {
    let { onClose: t } = e,
        n = (0, h.bG)([iQ.Ay], () => iQ.Ay.getCandidateGames()),
        [i, s] = E.useState(null),
        l = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, A.jsxs)(r9.l, {
        className: ir()(xx.H, xp.Y_),
        "aria-label": R.intl.string(R.t.GTCx0p),
        children: [
            (0, A.jsx)(xS.Z, {
                selectionMode: "single",
                placeholder: R.intl.string(R.t.XqMe3N),
                value: i,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, A.jsxs)("div", {
                className: ir()(xx.o, xc.xM),
                children: [
                    (0, A.jsx)(Ei.Q, { variant: "secondary", text: R.intl.string(R.t["ETE/oC"]), onClick: t }),
                    (0, A.jsx)(_.$, {
                        variant: "primary",
                        text: R.intl.string(R.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (Sg.Ay.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var xf = n(475007);
function xI() {
    let e = E.useRef(null);
    return (0, A.jsxs)("div", {
        className: ir()(xf.a, Aj.Gf),
        children: [
            (0, A.jsx)("span", { children: R.intl.string(R.t.xwhoqM) }),
            (0, A.jsx)(r7.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, A.jsx)(xT, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, A.jsx)(Ei.Q, {
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
function x_() {
    return (0, A.jsx)("div", {
        className: ir()(xc.tR, xd.eS, xd.Rw),
        children: (0, A.jsxs)("div", {
            className: ir()(xd.$K, xc.Vd),
            children: [
                (0, A.jsx)("div", { className: xd.mO, children: R.intl.string(R.t.H68X9x) }),
                (0, A.jsx)(xI, {}),
            ],
        }),
    });
}
let xN = (0, d.E2)(c.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = Ej(),
                n = (0, h.bG)([iQ.Ay], () => iQ.Ay.getVisibleGame());
            return null == n
                ? (0, A.jsx)(x_, {})
                : (0, A.jsxs)("div", {
                      className: ir()(xc.Vd, xd.C2),
                      children: [
                          (0, A.jsx)(
                              xg,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === xo.a7 ? e : void 0,
                              },
                              (0, iQ.Es)(n),
                          ),
                          (0, A.jsx)(xI, {}),
                      ],
                  });
        },
    }),
    xC = (0, d.zZ)(c.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => R.intl.string(R.t["MY9/Oe"]),
        buildLayout: () => [xN],
    }),
    xb = (0, d.t_)(c.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => R.intl.string(R.t.AVDyEj),
        buildLayout: () => [xC, xh],
    }),
    xy = (0, d.i4)(c.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.AVDyEj),
        icon: xl.GameControllerIcon,
        usePredicate: np.Pi,
        buildLayout: () => [xb],
    }),
    xv = (0, d.WI)(c.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => R.intl.string(R.t.BA9200),
        buildLayout: () => [xy, hn, xs, h8],
    });
var xj = n(631670),
    xO = n(619499),
    xL = n(836602),
    xR = n(591179),
    xD = n(402860),
    xP = n(761508),
    xG = n(159001),
    xM = n(344346),
    xU = n(919395),
    xV = n(68750);
function xk(e) {
    let { title: t, children: n } = e;
    return (0, A.jsxs)("div", {
        children: [(0, A.jsx)(p.D, { variant: "text-md/medium", className: xV.Vf, children: t }), n],
    });
}
function xw(e) {
    let {
        children: t,
        className: n,
        layoutClassName: i,
        profilePreview: s,
        profilePreviewTitle: l,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, A.jsx)("div", {
        className: ir()(xV.UA, n),
        children: (0, A.jsxs)("div", {
            className: ir()(xV.yt, i),
            children: [
                (0, A.jsx)("div", {
                    className: ir()(xV.Fp, a && xV.Oz),
                    children: (0, A.jsxs)(A.Fragment, {
                        children: [
                            (0, A.jsx)(xk, { title: l ?? R.intl.string(R.t.Zb06yP), children: s }),
                            null != r ? (0, A.jsx)(xk, { title: R.intl.string(R.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, A.jsx)("div", { className: xV.oB, children: t }),
            ],
        }),
    });
}
var xF = n(986687),
    xB = n(101058),
    xz = n(321191),
    xY = n(696451),
    xX = n(590941);
function xH() {
    return (0, A.jsxs)("div", {
        className: xX.p$,
        children: [
            (0, A.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: xX.Sl }),
            (0, A.jsx)(p.D, { className: xX.h8, variant: "heading-lg/extrabold", children: R.intl.string(R.t.Z1OZCV) }),
            (0, A.jsx)(H.E, { className: xX.h8, variant: "text-md/normal", children: R.intl.string(R.t.ZSt4Tt) }),
            (0, A.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: xX.h8,
                children: (0, A.jsx)(_.$, {
                    variant: "primary",
                    text: R.intl.string(R.t.jQ3pqt),
                    onClick: function () {
                        ((0, tJ.pX)(S.BVt.GUILD_DISCOVERY), (0, tU.default)());
                    },
                }),
            }),
        ],
    });
}
var xK = n(81400),
    xW = n(450232),
    xZ = n(252732),
    xq = n(355622),
    xQ = n(408018),
    x$ = n(959070),
    xJ = n(290386),
    x0 = n(486264);
let x1 = (0, tw.Ld)(),
    x2 = (0, j.createChannelRecord)({ id: "1", type: S.rbe.DM }),
    x3 = (0, tw.Ld)();
function x5(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: s,
            placeholder: l,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, xJ.U)({ location: "profile_customization_about_me" }),
        [u, d] = E.useState(s ?? r),
        [c, g] = E.useState((0, xQ.x7)(u)),
        m = E.useRef(r),
        h = E.useRef(!1);
    return (
        E.useEffect(() => {
            if (m.current !== r) {
                let e = (0, xQ.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        E.useEffect(() => {
            void 0 !== s || u === r || h.current || (d(r), g((0, xQ.x7)(r)));
        }, [s, r, u]),
        (0, A.jsxs)(r3.A, {
            title: t,
            titleId: x1,
            description: R.intl.string(R.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, A.jsx)(x$.Ay, {
                    "aria-describedby": x3,
                    "aria-labelledby": x1,
                    className: x0.i,
                    innerClassName: x0.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: l,
                    channel: x2,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: ns.USER_SETTINGS_MODAL_KEY,
                    type: xq.oU.PROFILE_BIO_INPUT,
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
                (0, A.jsx)(sn.A, { id: x3, children: R.intl.format(R.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var x6 = n(821956),
    x4 = n(562819),
    x8 = n(84540),
    x7 = n(467690);
function x9(e) {
    let { user: t, guild: n, className: i, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, eP.Ay)(),
        o = (0, xU.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, xU.CP)(n?.id),
        c = r ? dh.wL : lk.$n;
    return (0, A.jsx)(r3.A, {
        className: i,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, A.jsxs)("div", {
            className: x7.NC,
            children: [
                (0, A.jsx)(c, {
                    size: lk.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, x4.L)({ analyticsLocations: a, guild: n });
                    },
                    className: ir()({ [x7.yj]: r }),
                    children: R.intl.string(R.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: x7.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, x6.uZ)(t, n) ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.OrokWm),
                            onClick: function () {
                                (0, x8.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var pe = n(339984),
    pt = n(942132);
let pn = [{ name: "gif", extensions: ["gif"] }];
function pi(e) {
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
        { newestAnalyticsLocation: g } = (0, eP.Ay)(),
        m = c ? dh.wL : lk.$n,
        h = E.useCallback(() => {
            (0, xZ.XD)({
                uploadType: pe.HL.AVATAR,
                analyticsSource: g,
                filters: u ? pn : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, A.jsx)(r3.A, {
        className: a,
        title: s,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, A.jsxs)("div", {
            className: pt.NC,
            children: [
                (0, A.jsx)(m, {
                    className: ir()({ [pt.yj]: c }),
                    size: lk.$n.Sizes.SMALL,
                    onClick: h,
                    children: l ?? R.intl.string(R.t["4OynCD"]),
                }),
                t &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: pt.DT,
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
var ps = n(248778),
    pl = n(810188);
function pr(e) {
    let { user: t, guildId: n, className: i } = e,
        s = at.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, eP.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, xU.B0)(t, n),
        d = (0, ps.ux)("DisplayNameStylesSection"),
        [c, g] = (0, gt.kn)(d ? [eu.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eu.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        h = (0, E.useCallback)(() => {
            (g(gd.i.TAKE_ACTION),
                tt.default.track(S.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eG.L)({ analyticsLocations: l, guildId: n }));
        }, [l, n, g]),
        x = (0, E.useCallback)(() => {
            ((0, x8.p)({ displayNameStyles: null }), tt.default.track(S.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        p = (0, E.useCallback)(() => {
            (0, x8.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        T = void 0 !== o ? o : null != n ? a : r;
    return (0, A.jsx)(r3.A, {
        title: R.intl.string(eM.default["86GtGH"]),
        titleBadge: m ? (0, A.jsx)(tn.Lp, { text: R.intl.string(R.t.y2b7CA), className: pl.A }) : void 0,
        className: i,
        showPremiumIcon: s,
        errors: u,
        children: (0, A.jsxs)("div", {
            className: pl.N,
            children: [
                (0, A.jsx)(_.$, { variant: "primary", size: "sm", text: R.intl.string(eM.default.vJqrIg), onClick: h }),
                null == n &&
                    null != T &&
                    (0, A.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: R.intl.string(eM.default.ymq8WQ),
                        onClick: x,
                    }),
                null != n &&
                    null != T &&
                    (0, A.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: R.intl.string(eM.default["j/KRxc"]),
                        onClick: p,
                    }),
            ],
        }),
    });
}
var pa = n(637193),
    po = n(622410);
function pu(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: s } = (0, eP.Ay)(),
        l = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, xU.rv)(t, n?.id),
        d = E.useCallback(() => {
            (0, pa.p)({ analyticsLocations: s, guildId: n?.id });
        }, [s, n?.id]),
        c = E.useCallback(() => {
            (0, x8.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, A.jsx)(r3.A, {
        title: R.intl.string(R.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, A.jsxs)("div", {
            className: po.u,
            children: [
                (0, A.jsx)(_.$, { variant: "primary", size: "sm", text: R.intl.string(R.t.BwdeM1), onClick: d }),
                (void 0 === o ? (l ? a : r) != null : null != o) &&
                    (0, A.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: l ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var pd = n(88524);
function pc(e) {
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
        { newestAnalyticsLocation: c } = (0, eP.Ay)(),
        g = d ? dh.wL : lk.$n;
    return (0, A.jsx)(r3.A, {
        className: l,
        title: R.intl.string(R.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, A.jsxs)("div", {
            className: pd.NC,
            children: [
                (0, A.jsx)(g, {
                    className: ir()({ [pd.yj]: d }),
                    size: lk.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, xZ.XD)({ uploadType: pe.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: R.intl.string(R.t.N0bC3P),
                }),
                t &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: pd.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != s ? R.intl.string(R.t.jHlJNS) : R.intl.string(R.t.tT9n7D),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var pg = n(617061),
    pm = n(625613);
function pA(e) {
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
        { analyticsLocations: u } = (0, eP.Ay)(),
        d = at.Ay.canUsePremiumProfileCustomization(t),
        c = (0, xU.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, xU.nZ)(n?.id);
    E.useEffect(() => {
        d &&
            (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tY.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tB.uq)(tY.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let h = a ? dh.wL : lk.$n;
    return (0, A.jsx)(r3.A, {
        forcedDivider: r,
        borderType: uc.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: m,
        className: s,
        children: (0, A.jsxs)("div", {
            className: pm.NC,
            children: [
                (0, A.jsx)(h, {
                    size: lk.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, pg.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: ir()({ [pm.yj]: a }),
                    children: R.intl.string(R.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: pm.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.uMuafO),
                            onClick: function () {
                                (0, x8.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var pE = n(515727),
    ph = n(594401);
function pS(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: s } = (0, eP.Ay)(),
        l = (0, xU.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, xU.Tu)(n?.id),
        [o, u] = (0, gt.kn)([eu.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eu.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, A.jsx)(r3.A, {
        showBorder: d,
        borderType: d ? uc.i.NEW_UPSELL : uc.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d ? (0, A.jsx)(tn.Lp, { text: R.intl.string(R.t.y2b7CA), className: ph.Ad }) : void 0,
        description: d ? R.intl.string(R.t.yMoMAt) : void 0,
        errors: a,
        children: (0, A.jsxs)("div", {
            className: ph.NC,
            children: [
                (0, A.jsx)(_.$, {
                    variant: "primary",
                    size: "sm",
                    text: R.intl.string(R.t["9/hmle"]),
                    onClick: function () {
                        ((0, pE.w)({ analyticsLocations: s, guild: n }), u(gd.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != l : null != r) &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: ph.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.nQBruk),
                            onClick: function () {
                                (0, x8.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var px = n(602853),
    pp = n(654107),
    pT = n(999291),
    pf = n(101928),
    pI = n(819169),
    p_ = n(317097),
    pN = n(508274),
    pC = n(379012);
function pb(e) {
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
        d = E.useRef(null),
        c = (0, px.r)(nQ.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = nQ.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, xZ.sN)(i),
        h = (0, p_.Hl)(i),
        x = h === c ? g : h,
        p = m ? nQ.A.unsafe_rawColors.WHITE.css : nQ.A.unsafe_rawColors.PRIMARY_530.css,
        T = (0, pI.A)(a),
        f = (0, pI.A)(o),
        [I, _] = E.useState((0, a9.A)());
    return (
        E.useEffect(() => {
            (T !== a || f !== o) && _((0, a9.A)());
        }, [o, a, f, T]),
        (0, A.jsx)(r7.Y, {
            targetElementRef: d,
            positionKey: I,
            renderPopout: (e) =>
                (0, A.jsx)(pN.VN, {
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
                return (0, A.jsxs)("div", {
                    ref: d,
                    className: ir()(pC.oP, { [pC.r9]: l }),
                    children: [
                        (0, A.jsx)(n0.D, {
                            ...n,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? S.tEg : t,
                            style: { backgroundColor: h, borderColor: x },
                            className: pC.nf,
                            "aria-label": R.intl.string(R.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, A.jsx)(ae.PencilIcon, {
                                size: "custom",
                                className: pC.BW,
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
var py = n(190377);
function pv(e) {
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
        c = (0, pT.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, pf.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        E = at.Ay.canUsePremiumProfileCustomization(t),
        h = null != n ? n : t.getAvatarURL(r, 80),
        S = (0, px.r)(nQ.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = (0, pp.rh)(h, S, !1);
    return null == g || null == m
        ? null
        : (0, A.jsx)(r3.A, {
              title: R.intl.string(R.t.DMeO2X),
              disabled: !E && !l,
              className: ir()(py.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, A.jsxs)("div", {
                  className: py.hd,
                  children: [
                      (0, A.jsx)("div", {
                          className: py.YX,
                          children: (0, A.jsx)(pb, {
                              onChange: (e) => s([e, m]),
                              color: g,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, A.jsx)(H.E, {
                                  className: py.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: R.intl.string(R.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, A.jsx)("div", {
                          className: py.YX,
                          children: (0, A.jsx)(pb, {
                              onChange: (e) => s([g, e]),
                              color: m,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, A.jsx)(H.E, {
                                  className: py.yz,
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
                              className: py.WA,
                              children: (0, A.jsx)(_.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: R.intl.string(R.t["L+GmoR"]),
                                  onClick: () => s([null, null]),
                              }),
                          }),
                  ],
              }),
          });
}
function pj(e) {
    let {
            sectionTitle: t,
            errors: n,
            onPronounsChange: i,
            pendingPronouns: s,
            placeholder: l,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, tw.GV)();
    return (0, A.jsx)(r3.A, {
        title: t,
        titleId: o,
        errors: n,
        disabled: a,
        children: (0, A.jsx)(so.k, {
            "aria-labelledby": o,
            placeholder: l ?? R.intl.string(R.t.NPEUUu),
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
var pO = n(427262),
    pL = n(684732),
    pR = n(576705),
    pD = n(931175);
function pP(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: s, user: l, guild: r } = e,
        a = (0, h.bG)([pR.A], () => pR.A.can(S.xBc.CHANGE_NICKNAME, r) || pR.A.can(S.xBc.MANAGE_NICKNAMES, r)),
        o = (0, hT.L)(tY.PremiumTypes.TIER_2);
    return (0, A.jsxs)(r3.A, {
        title: R.intl.string(R.t.me1lRk),
        errors: t,
        children: [
            (0, A.jsx)(so.k, {
                value: n ?? i ?? "",
                placeholder: s,
                maxLength: S.d0r,
                onChange: function (e) {
                    (0, x8.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : R.intl.string(R.t.gzjxQi),
            }),
            o && (0, A.jsx)(pr, { user: l, guildId: r.id, className: pD.F }),
        ],
    });
}
var pG = n(233454);
let pM = "/assets/b25da78aa7949feb.png";
function pU(e) {
    let { user: t, showOverlay: n, children: i } = e,
        s = (0, uG.Ay)(),
        { analyticsLocations: l } = (0, eP.Ay)(tL.A.PREMIUM_UPSELL_OVERLAY);
    return (E.useEffect(() => {
        n &&
            (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: tY.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            }),
            (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, l, () =>
                (0, tB.uq)(tY.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE),
            ));
    }, [n, l]),
    n)
        ? (0, A.jsxs)("div", {
              className: pG.ry,
              children: [
                  (0, A.jsx)("div", { children: i }),
                  (0, A.jsxs)("div", {
                      className: pG.Wc,
                      children: [
                          (0, A.jsx)("img", {
                              className: pG.Tn,
                              alt: R.intl.string(R.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case S.NJ8.ASH:
                                      case S.NJ8.DARK:
                                      case S.NJ8.ONYX:
                                          return pM;
                                      case S.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return pM;
                                  }
                              })(s),
                          }),
                          (0, A.jsxs)("div", {
                              className: pG._9,
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
                          (0, A.jsx)(ud.A, {
                              size: lk.$n.Sizes.LARGE,
                              color: lk.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: at.Ay.isPremium(t)
                                      ? R.intl.string(R.t.AfRWI8)
                                      : R.intl.string(R.t.nkdUym),
                              },
                              subscriptionTier: tY.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : i;
}
var pV = n(203164);
function pk() {
    let e = (0, h.bG)([li.default], () => {
            let e = li.default.getCurrentUser();
            return (ta()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, hT.L)(tY.PremiumTypes.TIER_2),
        n = (0, h.bG)([xL.A, sh.A], () => sh.A.getGuild(xL.A.selectedGuildId));
    ta()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, h.cf)([xL.A], () => ({ ...xL.A.getPendingChanges(n.id), errors: xL.A.getErrors(n.id) })),
        d = (0, xB.V7)({ userId: e.id, image: i }),
        c = (0, xK.EC)(n.id),
        g = (0, h.bG)([xY.Ay], () => (null == n.id ? null : xY.Ay.getMember(n.id, e.id))),
        m = (0, h.bG)([xz.A], () => xz.A.getGuildMemberProfile(e.id, n.id)),
        E = at.Ay.canUsePremiumProfileCustomization(e),
        S = (0, xU.z5)(i, g?.avatar),
        x = (0, xU.Ac)(l, m?.banner),
        p = (0, pL.l)(o, m?.themeColors),
        T = m?.bio ?? "",
        f = m?.pronouns ?? "";
    return (0, A.jsxs)("div", {
        className: pV.Q,
        children: [
            (0, A.jsx)(
                pP,
                {
                    errors: u?.nick ?? c?.nick,
                    username: pO.Ay.getName(e),
                    pendingNick: s,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, A.jsx)(
                pj,
                {
                    sectionTitle: R.intl.string(R.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, x8.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, A.jsxs)(pU, {
                user: e,
                showOverlay: !E,
                children: [
                    (0, A.jsx)(
                        pi,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.lqaIxI), (0, A.jsx)(xW.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, xZ.rM)(e, g?.avatar, (e) => (0, x8.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !E,
                        },
                        "avatar",
                    ),
                    (0, A.jsx)(
                        x9,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t["7v0T9P"]), (0, A.jsx)(xW.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, A.jsx)(pr, { user: e, guildId: n.id }),
                    (0, A.jsx)(
                        pu,
                        { user: e, guild: n, titleIcon: (0, A.jsx)(xW.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, A.jsx)(
                        pA,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.wR5wOo), (0, A.jsx)(xW.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, A.jsx)(
                        pS,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.GWrZOd), (0, A.jsx)(xW.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, A.jsx)(
                        pc,
                        {
                            showRemoveBannerButton: x,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, xZ.rM)(e, m?.banner, (e) => (0, x8.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !E,
                        },
                        "banner",
                    ),
                    (0, A.jsx)(pv, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, x8.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: p,
                    }),
                    (0, A.jsx)(
                        x5,
                        {
                            placeholder: R.intl.string(R.t["/7NKgv"]),
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.ZzAR2Y), (0, A.jsx)(xW.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, x8.p)({ guildId: n.id, bio: e }),
                            errors: u?.bio ?? c?.bio,
                            pendingBio: r,
                            currentBio: T,
                            disabled: !E,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var pw = n(832131);
function pF(e) {
    (0, sa.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, A.jsx)(t, { source: { ...e, page: S.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function pB(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, eP.Ay)(tL.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, h.bG)([li.default], () => {
            let e = li.default.getCurrentUser();
            return (ta()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        l = (0, h.bG)([xY.Ay], () => (null != t ? xY.Ay.getMember(t.id, s.id) : null)),
        r = (0, h.bG)([xz.A], () => !xz.A.isFetchingProfile(s.id, t?.id)),
        a = (0, h.bG)([te.A], () => te.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, h.cf)([xL.A], () => xL.A.getPendingChanges(t?.id)),
        c = (0, xB.V7)({ userId: s.id, image: o }),
        g = (0, xU.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, xU.B0)(s, t?.id);
    return (E.useEffect(() => () => e6.h.wait(xG.IM), []), a)
        ? (0, A.jsx)(a4.A, {})
        : r
          ? (0, A.jsxs)(eP.f5, {
                value: i,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-sm/normal",
                        children: R.intl.format(R.t["/PTB2E"], {
                            helpCenterLink: eT.A.getArticleURL(S.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(r2.A, { guildId: t.id, onChange: n }),
                                  (0, A.jsx)(xw, {
                                      profilePreviewTitle: (0, A.jsx)(p.D, {
                                          variant: "heading-md/medium",
                                          className: pw.YV,
                                          children: R.intl.formatToPlainString(R.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, A.jsx)(xF.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: at.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: pF,
                                          containerClassName: pw.ti,
                                      }),
                                      nameplatePreview: (0, A.jsx)(xM.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? pw.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, A.jsx)(pk, {}),
                                  }),
                              ],
                          })
                        : (0, A.jsx)(xH, {}),
                ],
            })
          : (0, A.jsx)(a7.y, {});
}
var pz = n(903209),
    pY = n(641130);
function pX(e) {
    let { children: t, notice: n } = e;
    return (0, A.jsxs)("div", { className: pY.r, children: [n, (0, A.jsx)("div", { children: t })] });
}
var pH = n(823092),
    pK = n(839534),
    pW = n(379197),
    pZ = n(488430),
    pq = n(457421),
    pQ = n(940622),
    p$ = n(25176),
    pJ = n(757993);
let p0 = function () {
    let e,
        t,
        n,
        i,
        { analyticsLocations: s } = (0, eP.Ay)(tL.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        l = E.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, pQ.mb)(p$.RN.UPSELL_BANNER)),
        (t = (0, pQ.mb)(p$.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, h.bG)([pq.A], () => pq.A.getMarketingBySurface(pW.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...i, type: pZ.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, pH.L_)();
    return (
        E.useEffect(() => {
            (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tY.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            }),
                (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, s, () =>
                    (0, tB.uq)(tY.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
                ));
        }, [s, d]),
        (0, A.jsxs)("div", {
            ref: l,
            className: pJ.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, A.jsx)("div", {
                    className: pJ.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, A.jsx)("img", { src: a, className: pJ.Qw, alt: "" }),
                }),
                (0, A.jsxs)("div", {
                    className: pJ.Em,
                    children: [
                        (0, A.jsx)(p.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: pJ.DD,
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
                            (0, pK.Cz)({
                                analyticsLocations: s,
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
var p1 = n(451909),
    p2 = n(202639),
    p3 = n(285373),
    p5 = n(835071),
    p6 = n(724651),
    p4 = n(732280),
    p8 = n(590180),
    p7 = n(898461),
    p9 = n(469054),
    Te = n(601298),
    Tt = n(207803),
    Tn = n(461797);
let Ti = Object.keys(Tn.jB);
function Ts(e) {
    let t = null == e ? Ti : Ti.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var Tl = n(201805),
    Tr = n(221650);
function Ta(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
        s = (0, Tl.Xf)({ useReducedMotion: i }),
        { name: l, header: r } = E.useMemo(() => {
            let e = (0, Tn.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, A.jsxs)("div", {
        className: Tr.kL,
        children: [
            (0, A.jsx)(n0.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                className: Tr.x6,
                "aria-label": R.intl.string(R.t["44yJxh"]),
                children: s.render(),
            }),
            (0, A.jsxs)(n0.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                "aria-label": `${l}: ${R.intl.string(R.t["44yJxh"])}`,
                className: Tr.Lt,
                children: [
                    (0, A.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: Tr.L_ }),
                    (0, A.jsx)(H.E, {
                        className: Tr._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: l,
                    }),
                ],
            }),
        ],
    });
}
var To = n(511484),
    Tu = n(811611),
    Td = n(206697),
    Tc = n(507553);
function Tg(e, t) {
    let n = Tc.A.useField("scrollPosition"),
        i = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion);
    (0, E.useEffect)(() => {
        let s = e.current;
        if (null == s || n !== t) return;
        let l = requestAnimationFrame(() => {
            (s.scrollIntoView({ behavior: i ? "auto" : "smooth" }), Tc.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, n, i]);
}
var Tm = n(844222),
    TA = n(842092);
let TE = "/assets/d4955aabdcb5bdee.png",
    Th = { assetOrigin: p9.E.NEW_ASSET, imageUri: TE, staticImageUri: TE, description: "", originalAsset: void 0 };
function TS(e) {
    let { user: t } = e,
        { reducedMotion: n } = E.useContext(Tm.C),
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
            tryItOutAvatarDecoration: S,
            tryItOutDisplayNameStyles: x,
        } = (0, h.cf)([xL.A], () => {
            let e = xL.A.getPendingChanges(),
                t = xL.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        p = (0, xB.V7)({ userId: t.id, image: g ?? i });
    return (0, A.jsx)(xF.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? s ?? Th,
        pendingDisplayNameStyles: x ?? a,
        pendingAvatar: p,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== S ? S : l,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : TA.WX,
        containerClassName: TA.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var Tx = n(829497);
function Tp(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        s = at.Ay.isPremium(t),
        l = at.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, h.cf)([xL.A], () => {
            let e = xL.A.getPendingChanges(),
                t = xL.A.getErrors(),
                n = xL.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, E.useState)(Ts()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: s,
                    displayNameStyles: l,
                } = (0, E.useMemo)(() => {
                    let t = (0, Tn.Wt)(e);
                    return {
                        banner: (0, Te.X)({
                            assetOrigin: p9.E.NEW_ASSET,
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
                r = (0, h.bG)([p8.A], () => {
                    let e = p8.A.getProduct(s);
                    return (0, p7.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, E.useEffect)(() => {
                (0, Tt.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: l });
            }, [n, i, r, l]);
            let a = (0, E.useCallback)(() => {
                let n = Ts(e);
                (t(n), tt.default.track(S.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = E.useRef(null);
    Tg(m, eC._F.TRY_IT_OUT);
    let { analyticsLocations: x, sourceAnalyticsLocations: T } = (0, eP.Ay)(tL.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function f(e) {
        e && ((0, Td.T)(), tt.default.track(S.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    E.useEffect(() => {
        n &&
            (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tY.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: S.liQ.USER_SETTINGS },
                location_stack: T,
            }),
            (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, T, () => (0, tB.uq)(tY.e.PREMIUM_PROFILE_TRY_IT_OUT)));
    }, [T, t, n]);
    let I = (0, p4.V)()?.subscriptionTrial?.skuId === tY.pe.TIER_2,
        _ = (0, p6.O)(),
        N = (0, To.U9)(_, tY.pe.TIER_2);
    return i
        ? (0, A.jsx)(eP.f5, {
              value: x,
              children: (0, A.jsxs)(uc.A, {
                  ref: m,
                  className: Tx.MT,
                  type: uc.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, A.jsx)(xw, {
                          stickyPreview: !1,
                          layoutClassName: Tx.th,
                          profilePreviewTitle: (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(rJ.t, { size: "md", color: "currentColor", className: Tx.PC }),
                                  R.intl.string(R.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, A.jsxs)(A.Fragment, {
                              children: [(0, A.jsx)(Ta, { preset: c, onShuffle: g }), (0, A.jsx)(TS, { user: t })],
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
                                              className: Tx.h_,
                                              variant: "text-sm/normal",
                                              children: R.intl.string(R.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, A.jsx)(pv, {
                                      className: Tx.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, xB.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: Tt.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, A.jsx)(pc, {
                                      className: Tx.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: Tt.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, A.jsx)(pi, {
                                          className: Tx.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: Tt.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: R.intl.string(R.t["7z0D1c"]),
                                          sectionTitle: R.intl.string(R.t.vtFfPX),
                                      }),
                                  (0, A.jsx)(pr, { user: t, className: Tx.fz }),
                                  !I &&
                                      (0, A.jsx)(H.E, {
                                          variant: "text-sm/normal",
                                          children: R.intl.string(R.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !I &&
                          (0, A.jsx)(p2.d, {
                              onSubscribeModalClose: f,
                              className: Tx.Kv,
                              showUpsell: !0,
                              text: R.intl.format(R.t.TmfgI2, {
                                  onClick: () => {
                                      (0, p5.K)({ onSubscribeFinish: f });
                                  },
                              }),
                              button: s
                                  ? R.intl.string(R.t.AfRWI8)
                                  : N
                                    ? R.intl.formatToPlainString(R.t.bkQ4bH, { percent: _?.discount.amount })
                                    : R.intl.string(R.t.pj0XBN),
                              position: "inline",
                          }),
                      I &&
                          (0, A.jsxs)("div", {
                              children: [
                                  (0, A.jsx)("div", { className: Tx.BU }),
                                  (0, A.jsx)(Tu.Ay, {
                                      type: tY.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: tY.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var TT = n(814390),
    Tf = n(643056),
    TI = n(843282),
    T_ = n(145497),
    TN = n(685073),
    TC = n(534400),
    Tb = n(581781),
    Ty = n(743981),
    Tv = n(195801);
let Tj = (0, tw.Ld)(),
    TO = E.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            s = (0, h.cf)([li.default], () => (0, TN.Zo)(li.default.getCurrentUser()?.primaryGuild)),
            l = void 0 !== n ? n : (s.guildId ?? null),
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
                let { guildId: n, tag: i, badge: r } = s;
                return (
                    null == n ||
                        null == i ||
                        n !== l ||
                        e.has(n) ||
                        e.set(n, { id: n, name: R.intl.string(R.t.dtwqPR), icon: null, tag: i, badge: r }),
                    e
                );
            }, [t, s, l]),
            a = E.useMemo(() => Array.from(r.values(), (e) => ({ label: e.name, value: e.id })), [r]),
            o = E.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, A.jsx)(Tb.A, {
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
                        : (0, A.jsx)(T_.j, {
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
                        : (0, A.jsx)(TC.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: Ty.Sl.SIZE_16,
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
            m = E.useCallback((e) => e === l, [l]),
            S = E.useCallback((e) => e, []),
            x = E.useCallback(() => {
                i?.(null);
            }, [i]),
            p = E.useRef(null);
        return (
            Tg(p, eC._F.GUILD_TAG),
            (0, A.jsxs)(r3.A, {
                title: R.intl.string(R.t.Pdd1nd),
                titleId: Tj,
                ref: p,
                children: [
                    (0, A.jsx)(H.E, {
                        className: Tv.VA,
                        variant: "text-sm/normal",
                        children: R.intl.string(R.t.mlZ6Jx),
                    }),
                    (0, A.jsx)(TI.Pw, {
                        className: Tv.Lt,
                        optionClassName: Tv.S0,
                        isSelected: m,
                        options: a,
                        select: g,
                        renderLeading: u,
                        renderTrailing: d,
                        renderOptionValue: c,
                        serialize: S,
                        clear: x,
                        clearable: null != l,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
var TL = n(318785),
    TR = n(992526),
    TD = n(470739);
let TP = function () {
    return (0, TR.J)({ location: "UserSettingsProfileCustomization" })
        ? (0, A.jsx)(r3.A, {
              title: R.intl.string(R.t.l6w3Vj),
              description: R.intl.string(R.t.joHqdj),
              children: (0, A.jsx)(_.$, {
                  text: R.intl.string(R.t.wRraFx),
                  onClick: () => {
                      (0, TD._)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var TG = n(953726);
let TM = (0, tw.Ld)();
function TU(e) {
    let t = (0, hT.L)(tY.PremiumTypes.TIER_2);
    return (0, A.jsxs)(r3.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: R.intl.string(R.t["9AjdkD"]),
        titleId: TM,
        children: [
            (0, A.jsx)("div", {
                children: (0, A.jsx)(so.k, {
                    "aria-labelledby": TM,
                    placeholder: e.placeholder,
                    maxLength: S.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, A.jsx)(pr, { user: e.user, className: TG.F }),
        ],
    });
}
var TV = n(376626);
function Tk(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = L.m$.useSetting(),
        s = void 0 !== n ? n : i;
    return (0, A.jsx)("div", {
        className: TV.u,
        children: (0, A.jsx)(t$.d, {
            label: R.intl.string(R.t["3cWDuO"]),
            description: s ? null : R.intl.formatToPlainString(R.t.aYhclf, { username: t }),
            checked: !s,
            onChange: (e) => {
                !e === i ? (0, xj._e)() : (0, x8.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function Tw(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, px.r)(nQ.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, pp.rh)(l, r, !1),
        o = (0, p_.LX)(a[0]);
    return (0, A.jsx)(r3.A, {
        title: R.intl.string(R.t["/X3fkf"]),
        children: (0, A.jsx)(pb, { onChange: (e) => s(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var TF = n(518477);
let TB = function () {
    let e = (0, h.bG)([u_.default], () => u_.default.getId());
    return (0, A.jsx)(r3.A, {
        title: R.intl.string(R.t.Jzj9q4),
        children: (0, A.jsx)(_.$, {
            text: R.intl.string(R.t.Geikwq),
            onClick: () => {
                (0, xD.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tL.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: TF.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var Tz = n(654910);
function TY() {
    let e = (0, h.bG)([li.default], () => {
            let e = li.default.getCurrentUser();
            return (ta()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, h.bG)([xz.A], () => xz.A.getUserProfile(e.id)),
        n = (0, Tf.d)({ location: "DefaultCustomizationSections" }),
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
        } = (0, h.cf)([xL.A], () => {
            let e = xL.A.getPendingChanges(),
                t = xL.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, xB.V7)({ userId: e.id, image: i }),
        E = (0, xK.EC)(),
        S = at.Ay.canUsePremiumProfileCustomization(e),
        x = (0, xU.z5)(i, e.avatar),
        p = (0, xU.Ac)(l, t?.banner),
        T = (0, pT.Ay)(e.id),
        f = T?.getLegacyUsername(),
        I = (g.global_name?.length ?? 0) > 0 ? g.global_name : (E?.nick ?? []),
        _ = (g.bio?.length ?? 0) > 0 ? g.bio : (E?.bio ?? []),
        N = (0, TL.b)(),
        C = null != (0, TN.Zo)(e.primaryGuild).guildId;
    return (0, A.jsxs)("div", {
        className: Tz.Q,
        children: [
            (0, A.jsx)(TU, {
                placeholder: e.username,
                errors: I,
                currentGlobalName: e.globalName,
                pendingGlobalName: s,
                onGlobalNameChange: (e) => (0, x8.p)({ globalName: e }),
                user: e,
            }),
            (0, A.jsx)(
                pj,
                {
                    sectionTitle: R.intl.string(R.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, x8.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, A.jsx)(TB, {}),
            (0, A.jsx)(
                pi,
                {
                    onAvatarChange: (e) => {
                        ((0, x8.p)({ avatar: e }), (0, xU.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: x,
                    errors: g.avatar,
                    sectionTitle: R.intl.string(R.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, A.jsx)(x9, { user: e, sectionTitle: R.intl.string(R.t["7v0T9P"]) }, "decoration"),
            (0, A.jsx)(pu, { user: e }),
            (0, A.jsx)(pA, { user: e, sectionTitle: R.intl.string(R.t.wR5wOo) }, "effect"),
            (0, A.jsx)(pS, { user: e, sectionTitle: R.intl.string(R.t.GWrZOd) }, "frame"),
            S
                ? (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)(
                              pc,
                              {
                                  showRemoveBannerButton: p,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, x8.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, A.jsx)(pv, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, x8.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, A.jsx)(
                      Tw,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, x8.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, A.jsx)(
                x5,
                {
                    sectionTitle: R.intl.string(R.t.ZzAR2Y),
                    errors: _,
                    onBioChange: (e) => (0, x8.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (N.length > 0 || C) &&
                (0, A.jsx)(TO, {
                    availablePrimaryGuilds: N,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, x8.p)({ primaryGuildId: e }),
                }),
            null != f &&
                !n &&
                (0, A.jsx)(Tk, { legacyUsername: f, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, A.jsx)(TP, {}, "badges"),
        ],
    });
}
function TX() {
    (0, sa.openModalLazy)(async () => {
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
var TH = n(447080);
function TK() {
    let e = (0, h.bG)([li.default], () => {
            let e = li.default.getCurrentUser();
            return (ta()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e);
        }),
        t = (0, h.bG)([te.A], () => te.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, h.cf)([xL.A], () => ({ ...xL.A.getPendingChanges(), showNotice: xL.A.showNotice() })),
        a = (0, xB.V7)({ userId: e.id, image: i }),
        o = (0, xU.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, TT.A)() && null != n ? p1.Ay.parse(void 0, n).content : n,
        d = at.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, eP.Ay)(tL.A.USER_SETTINGS_USER_PROFILE);
    E.useEffect(() => () => e6.h.wait(xj.IM), []);
    let [g, m] = E.useState(!1),
        x = !d,
        p = E.useRef(null);
    return t
        ? (0, A.jsx)(a4.A, {})
        : (0, A.jsxs)(eP.f5, {
              value: c,
              children: [
                  (0, A.jsx)(p0, {}),
                  (0, A.jsx)(xw, {
                      profilePreview: (0, A.jsx)(xF.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: TX,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: TH.ti,
                      }),
                      nameplatePreview: (0, A.jsx)(xM.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? TH.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, A.jsx)(TY, {}),
                  }),
                  (0, A.jsx)(dt.L, {
                      innerRef: p,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: x,
                      children: (0, A.jsx)("div", {
                          ref: p,
                          children: (0, A.jsx)(Tp, { user: e, shouldShow: x, isVisible: g }),
                      }),
                  }),
                  x &&
                      !l &&
                      (0, A.jsx)(p2.d, {
                          className: TH.EL,
                          showUpsell: !g,
                          text: R.intl.format(R.t.TmfgI2, { onClick: () => (0, p5.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, A.jsx)(p3.l, {
                              size: "md",
                              location: tL.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, A.jsx)("div", {
                              className: TH.Xl,
                              children: (0, A.jsx)(_.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      (tt.default.track(S.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          p?.current?.scrollIntoView({ behavior: "smooth" }));
                                  },
                                  text: R.intl.string(R.t.uw9zI7),
                                  icon: rJ.t,
                              }),
                          }),
                      }),
              ],
          });
}
var TW = n(625494);
n(46121);
var TZ = n(944983);
let Tq = { [eC.Eq.USER_PROFILE]: "main_profile_tab", [eC.Eq.GUILD]: "guild_profile_tab" },
    TQ = (0, d.E2)(c.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, h.bG)([sS.A, d7.Ay, xL.A], () => {
                    let e = xL.A.selectedGuildId ?? sS.A.getGuildId();
                    return null == e || xL._.has(e) ? d7.Ay.getFlattenedGuildIds().find((e) => !xL._.has(e)) : e;
                }),
                t = (0, h.bG)([sh.A], () => sh.A.getGuild(e)),
                n = (0, h.bG)([xL.A], () => xL.A.showNotice()),
                i = (0, h.bG)([li.default], () => li.default.getCurrentUser()),
                s = Tc.A.useField("subsection");
            return (
                E.useEffect(() => {
                    (0, n4._)(Tq[s]);
                }, [s]),
                E.useEffect(() => {
                    null != i && t?.id != null && (0, pz.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, A.jsx)(pX, {
                    children: (0, A.jsxs)(uB.F, {
                        component: (0, A.jsx)(sn.A, {
                            children: (0, A.jsx)(p.D, {
                                variant: "heading-xl/normal",
                                children: R.intl.string(R.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, A.jsxs)(xP.V, {
                                className: TZ.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (n) {
                                            ((0, n8.fO)({ duration: 300, intensity: 1.4 }),
                                                TW._.dispatch(S.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eC.Eq.GUILD && null != t && (0, xG.V2)(t.id),
                                            Tc.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, A.jsx)(
                                        xP.V.Item,
                                        {
                                            className: TZ.YU,
                                            id: eC.Eq.USER_PROFILE,
                                            children: R.intl.string(R.t["2p07FR"]),
                                        },
                                        eC.Eq.USER_PROFILE,
                                    ),
                                    (0, A.jsx)(
                                        xP.V.Item,
                                        {
                                            className: ir()(TZ.YU, TZ.HY),
                                            "aria-label": R.intl.string(R.t.kPHroX),
                                            id: eC.Eq.GUILD,
                                            children: R.intl.string(R.t.kPHroX),
                                        },
                                        eC.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === eC.Eq.GUILD
                                ? (0, A.jsx)(pB, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, n8.fO)({ duration: 300, intensity: 1.4 }),
                                                  TW._.dispatch(S.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, xG.JJ)(e.id);
                                      },
                                  })
                                : (0, A.jsx)(TK, {}),
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
    T$ = (0, d.zZ)(c.X.PROFILE_CATEGORY, { buildLayout: () => [TQ] });
var TJ = n(379633);
function T0() {
    let e = (0, h.bG)([li.default], () => li.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, dS.A)({ userId: e?.id, size: I._3.SIZE_48 });
    return null == e
        ? null
        : (0, A.jsxs)("div", {
              className: TJ.a5,
              children: [
                  (0, A.jsx)(f.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: I._3.SIZE_48,
                      "aria-label": R.intl.string(R.t.lqaIxI),
                  }),
                  (0, A.jsxs)("div", {
                      className: TJ.FS,
                      children: [
                          (0, A.jsx)(H.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, A.jsxs)("div", {
                              className: TJ.Fk,
                              children: [
                                  (0, A.jsx)(H.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: R.intl.string(R.t.Ip9nBS),
                                  }),
                                  (0, A.jsx)(ae.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let T1 = (0, d.t_)(c.X.PROFILE_PANEL, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        notice: { stores: [xL.A], element: xO.A },
        initialize: () => () =>
            e6.h.wait(() => {
                (0, xj.F7)();
            }),
        buildLayout: () => [T$],
    }),
    T2 = (0, d.i4)(c.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        icon: T5,
        StronglyDiscouragedCustomComponent: T0,
        usePredicate: () => !(0, xR.X)("user_settings_sidebar"),
        buildLayout: () => [T1],
    }),
    T3 = (0, d.i4)(c.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        icon: T5,
        StronglyDiscouragedCustomComponent: T0,
        usePredicate: () => (0, xR.X)("user_settings_sidebar"),
        onClick: () => {
            let e = u_.default.getId();
            (0, xD.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function T5() {
    let e = (0, h.bG)([li.default], () => li.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, dS.A)({ userId: e?.id, size: I._3.SIZE_48 });
    return (0, A.jsx)(f.eu, { src: t, avatarDecoration: n, size: I._3.SIZE_20, "aria-hidden": !0 });
}
let T6 = (0, d.WI)(c.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [T2, T3] });
var T4 = n(98207),
    T8 = (n(204925), n(818348));
let T7 = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, sa.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 888363),
            );
            return (n) => (0, A.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? T8.tE : null, onCloseCallback: t },
    );
};
var T9 = n(940856),
    fe = n(506775),
    ft = n(379257),
    fn = n(121780),
    fi = n(666113);
function fs() {
    let e = fn.A.getCountryCode(),
        t = null != e ? fi.IN[e.alpha2] : void 0;
    ft.A.openUrl(eT.A.getArticleURL(t ?? fi.k9));
}
var fl = n(521169);
function fr() {
    return (0, fl.w)(fi.Vc);
}
var fa = n(680091);
function fo() {
    let e = fr(),
        t = (0, fe.ZP)();
    if (!e) return null;
    switch (t) {
        case fe.M$.ADULT:
            return R.intl.format(fa.default.gi4ulu, { handleOnAgeGatedContentHook: fe.M0 });
        case fe.M$.TEEN:
            return R.intl.format(fa.default["221iML"], {
                handleOnAgeGatedContentHook: fe.M0,
                handleOnConfirmAgeHook: fe.aP,
            });
        case fe.M$.UNVERIFIED:
            return R.intl.format(fa.default["W0/7DD"], {
                handleOnAgeGatedContentHook: fs,
                handleOnConfirmAgeHook: fe.aP,
            });
    }
}
var fu = n(26137),
    fd = n(957485);
function fc() {
    let e = fr(),
        t = (0, fe.ZP)();
    return e ? { icon: t === fe.M$.ADULT ? fu.r : fd.i, backgroundColor: nQ.A.colors.BACKGROUND_MOD_SUBTLE } : null;
}
function fg() {
    let e = fc();
    return null != e ? { type: m.hp.ICON, ...e } : null;
}
function fm() {
    return fr() ? R.intl.string(R.t.piqs0o) : null;
}
var fA = n(438140);
let fE = [{ badgeType: m.Xi.NEW, dismissibleContent: eu.M.TINY_BRONCO_SETTINGS }],
    fh = [];
function fS() {
    return (0, fA.Wt)() ? fE : fh;
}
var fx = n(36149),
    fp = n(207560),
    fT = (((a = {}).LEGACY = "legacy"), (a.TINY_BRONCO = "tinyBronco"), a),
    ff = (((o = {}).VERIFY = "verify"), (o.EDIT = "edit"), (o.INFO = "info"), o);
function fI(e, t) {
    let n = (0, h.bG)([li.default], () => null != li.default.getCurrentUser()),
        i = (0, fp.fk)(),
        s = (0, fe.ZP)(),
        l = (0, fx.Y2)(),
        r = fr();
    if (!n || (!i && !r) || t !== (r ? "tinyBronco" : "legacy")) return !1;
    switch (s) {
        case fe.M$.UNVERIFIED:
            return "verify" === e;
        case fe.M$.TEEN:
            return e === (r ? "info" : "verify");
        case fe.M$.ADULT:
            return e === (l ? "edit" : "info");
    }
}
var f_ = n(841365);
function fN() {
    let e = (0, fe.hD)();
    return (0, A.jsxs)(H.E, {
        variant: "text-md/medium",
        children: [`${e} \u{2022} `, R.intl.format(f_.default.WM5adV, { handleOnHelpUrlHook: fe.M0 })],
    });
}
let fC = {
        useTitle: () => fm() ?? R.intl.string(R.t["/52UYy"]),
        useSubtitle: fo,
        useVariant: () => "secondary",
        useLeadingDecoration: fg,
        getDismissibleBadges: fS,
        useTrailingDecoration: () => ({
            type: m.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: fN,
        }),
        useLabel: () => R.intl.string(R.t.bt75uw),
        onClick: function () {
            (0, sa.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, A.jsx)(e, { ...t });
            });
        },
    },
    fb = (0, d.Tf)(c.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...fC, usePredicate: () => fI(ff.EDIT, fT.LEGACY) }),
    fy = (0, d.Tf)(c.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...fC,
        usePredicate: () => fI(ff.EDIT, fT.TINY_BRONCO),
        useAriaLabel: () => R.intl.string(R.t.pBMSie),
    }),
    fv = {
        useTitle: () => fm() ?? R.intl.string(R.t["/52UYy"]),
        useSubtitle: fo,
        useLeadingDecoration: function () {
            let e = fc();
            return null != e ? { type: m.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: fS,
        useTrailingDecoration: () => ({ type: m.Ln.TEXT, text: (0, fe.hD)() }),
    },
    fj = (0, d.v_)(c.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...fv, usePredicate: () => fI(ff.INFO, fT.LEGACY) }),
    fO = (0, d.v_)(c.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...fv,
        usePredicate: () => fI(ff.INFO, fT.TINY_BRONCO),
    }),
    fL = {
        useTitle: () => fm() ?? R.intl.string(R.t["/52UYy"]),
        useSubtitle: fo,
        useVariant: () => "secondary",
        useLeadingDecoration: fg,
        getDismissibleBadges: fS,
        useTrailingDecoration: () => ({ type: m.fq.TEXT, text: (0, fe.hD)() }),
        useLabel: function () {
            return (0, fx.yM)() ? R.intl.string(R.t["9KiIz6"]) : R.intl.string(R.t.DVywUB);
        },
        onClick: fe.aP,
    },
    fR = (0, d.Tf)(c.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...fL, usePredicate: () => fI(ff.VERIFY, fT.LEGACY) }),
    fD = (0, d.Tf)(c.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...fL,
        usePredicate: () => fI(ff.VERIFY, fT.TINY_BRONCO),
    }),
    fP = [fR, fb, fj],
    fG = [fD, fy, fO],
    fM = (0, d.Tf)(c.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, h.bG)([li.default], () => li.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => R.intl.string(R.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: m.fq.TEXT, text: R.intl.string(R.t.qxk9zo) }),
        useLabel: () => R.intl.string(R.t.BleMPB),
        onClick: () => T7(),
    });
function fU(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function fV(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function fk(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: s } = e,
        [l, r] = E.useState(!1),
        a = l ? t : n(t);
    return (0, A.jsxs)(Y.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, A.jsx)(H.E, { variant: "text-md/medium", children: a }),
            (0, A.jsx)(Ei.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": l ? s : i,
                onClick: () => r(!l),
                text: l ? R.intl.string(R.t.fgq1gs) : R.intl.string(R.t.dcztdU),
            }),
        ],
    });
}
function fw() {
    let e = (0, h.bG)([li.default], () => li.default.getCurrentUser()?.email);
    return null == e
        ? (0, A.jsx)(H.E, { variant: "text-md/medium", children: R.intl.string(R.t["8SfTN/"]) })
        : (0, A.jsx)(fk, {
              text: e,
              censor: fV,
              revealLabel: R.intl.string(R.t["Zvx+yV"]),
              hideLabel: R.intl.string(R.t.nqTD4d),
          });
}
let fF = (0, d.Tf)(c.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, h.bG)([li.default], () => li.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => R.intl.string(R.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: m.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fw }),
    useLabel: function () {
        return null == (0, h.bG)([li.default], () => li.default.getCurrentUser()?.email)
            ? R.intl.string(R.t.OYkgVk)
            : R.intl.string(R.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, h.bG)([li.default], () => li.default.getCurrentUser()?.email)
            ? R.intl.string(R.t["pvBD+W"])
            : R.intl.string(R.t["8peUT0"]);
    },
    onClick: function () {
        (0, sa.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("279385"), n.e("420577"), n.e("465861")]).then(
                n.bind(n, 97060),
            );
            return (t) => (0, A.jsx)(e, { ...t });
        });
    },
});
var fB = n(557722),
    fz = n(53516);
function fY() {
    let e = (0, h.bG)([li.default], () => li.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, A.jsx)(H.E, { variant: "text-md/medium", children: R.intl.string(R.t.I5kDqj) })
        : (0, A.jsx)(Y.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, A.jsx)(fk, {
                  text: t,
                  censor: fU,
                  revealLabel: R.intl.string(R.t.eY3xlT),
                  hideLabel: R.intl.string(R.t["jllbv+"]),
              }),
          });
}
let fX = (0, d.Tf)(c.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, h.bG)([li.default], () => li.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => R.intl.string(R.t.kerONq),
    useAriaLabel: function () {
        return null == (0, h.bG)([li.default], () => li.default.getCurrentUser()?.phone)
            ? R.intl.string(R.t["SfUuE+"])
            : R.intl.string(R.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: m.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fY }),
    useLabel: function () {
        return null == (0, h.bG)([li.default], () => li.default.getCurrentUser()?.phone)
            ? R.intl.string(R.t.OYkgVk)
            : R.intl.string(R.t.bt75uw);
    },
    onClick: function () {
        null == li.default.getCurrentUser()?.phone
            ? (0, sa.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("590275"),
                          n.e("766806"),
                          n.e("989545"),
                          n.e("311493"),
                          n.e("84704"),
                          n.e("286197"),
                      ]).then(n.bind(n, 615715));
                      return (t) => (0, A.jsx)(e, { reason: fB.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: fz.V },
              )
            : (0, sa.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, A.jsx)(e, { ...t });
              });
    },
});
function fH() {
    let e = (0, h.bG)([li.default], () => li.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function fK() {
    let e = (0, xK.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, h.bG)([li.default], () => li.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsx)(H.E, { variant: "text-md/medium", children: i }),
            null != t &&
                (0, A.jsx)(st.m, {
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
let fW = (0, d.Tf)(c.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => R.intl.string(R.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: m.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: fK,
        }),
        useLabel: () => R.intl.string(R.t.bt75uw),
        useAriaLabel: () => R.intl.string(R.t.JECa91),
        useSubtitle: () => (fH() ? R.intl.string(R.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: fH,
        onClick: function () {
            (0, sa.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, A.jsx)(e, { ...t });
            });
        },
    }),
    fZ = (0, d.zZ)(c.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, h.bG)([li.default], () => null != li.default.getCurrentUser()),
        useTitle: () => R.intl.string(R.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, h.bG)([li.default], () => li.default.getCurrentUser());
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
                            button: { text: R.intl.string(R.t.lm1UKt), onClick: () => (0, T9.S)(e) },
                        }
                  : {
                        type: m.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        title: R.intl.string(R.t["/3qnL/"]),
                        text: R.intl.string(R.t.qKs3vg),
                        button: { text: R.intl.string(R.t["7psymi"]), onClick: () => T7() },
                    };
        },
        buildLayout: () => [fW, fM, fF, fX, ...fP],
    });
var fq = n(398177);
let fQ = (0, d.Tf)(c.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => R.intl.string(R.t["CIGa+7"]),
    useLabel: () => R.intl.string(R.t.bt75uw),
    useAriaLabel: () => R.intl.string(R.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, sa.openModal)((e) => (0, A.jsx)(fq.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var f$ = n(200921);
let fJ = [];
function f0() {
    fJ = [];
}
class f1 extends h.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return fJ;
    }
}
let f2 = new f1(e6.h, {
    LOGOUT: f0,
    LOGIN_SUCCESS: f0,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        fJ = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [...fJ],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        fJ = n;
    },
});
function f3() {
    let e = (0, h.cf)([f2], () => f2.getSessions());
    return E.useMemo(() => {
        let t = [...e],
            n = null,
            i = u_.default.getAuthSessionIdHash();
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
function f5(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? R.intl.string(R.t.TXCmfL) : io()(e).fromNow();
}
var f6 = n(176524),
    f4 = n(646270),
    f8 = n(738678),
    f7 = n(489828);
function f9(e) {
    let { icon: t, label: n, subLabel: i, description: s, children: l, muted: r } = e;
    return (0, A.jsxs)(Y.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, A.jsx)(f6.A, { icon: t, color: r ? nQ.A.colors.ICON_MUTED : "currentColor" }),
            (0, A.jsxs)(Y.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, A.jsxs)(Y.B, {
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
                    (0, A.jsx)(H.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
                ],
            }),
            l,
        ],
    });
}
function Ie(e) {
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
                            return { text: R.intl.string(R.t.cDHCNY), icon: Sc.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: f4.u };
                        case "horizon os":
                            return { text: e, icon: f8.G };
                        default:
                            return { text: e, icon: Sc.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: s, Icon: l, lastActive: t ? null : f5(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(ii.Vq);
    return (0, A.jsx)(f9, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, A.jsx)(n0.D, {
                className: f7.X,
                onClick: () => (0, f$.U0)(t.id_hash),
                "aria-label": R.intl.string(R.t.E4MJNt),
                children: (0, A.jsx)(ha.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function It(e) {
    let { title: t, children: n } = e,
        i = E.useId();
    return (0, A.jsxs)(Y.B, {
        role: "group",
        "aria-labelledby": i,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, A.jsx)(p.D, { id: i, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, A.jsx)(Y.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
let In = (0, d.E2)(c.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = f3();
            return null == e
                ? (0, A.jsx)(a7.y, {})
                : (0, A.jsx)(It, {
                      title: R.intl.string(R.t.LLS19o),
                      children: (0, A.jsx)(Ie, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    Ii = (0, d.E2)(c.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = f3();
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t.Vij32M),
                description: R.intl.string(R.t.OTXyaf),
                children: (0, A.jsx)(_.$, {
                    onClick: () => (0, f$.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: R.intl.string(R.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = f3();
            return e.length > 0;
        },
    });
var Is = n(766928);
function Il() {
    return (0, A.jsx)(f9, {
        icon: Is.W,
        label: R.intl.string(R.t.iUa0sn),
        description: R.intl.format(R.t["044+8i"], {
            onClick: () =>
                (0, ns.openUserSettings)(c.X.ACCOUNT_PANEL, { analyticsLocations: [tL.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let Ir = (0, d.E2)(c.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = f3(),
                t = (0, h.bG)([li.default], () => li.default.getCurrentUser());
            return (0, A.jsxs)(It, {
                title: R.intl.string(R.t.xx1MWc),
                children: [
                    e.map((e) => (0, A.jsx)(Ie, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, A.jsx)(Il, {}),
                ],
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = f3(),
                t = (0, h.bG)([li.default], () => li.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    Ia = (0, d.zZ)(c.X.SESSIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.mEndXM),
        useSubtitle: () => R.intl.string(R.t.b7ZpTM),
        initialize: () => {
            (0, f$.GY)();
        },
        buildLayout: () => [In, Ir, Ii],
        useSearchTerms: () => [
            R.intl.string(R.t["+1h0k/"]),
            R.intl.string(R.t.LLS19o),
            R.intl.string(R.t.xx1MWc),
            R.intl.string(R.t.lSWsrd),
        ],
    }),
    Io = (0, d.t_)(c.X.SESSIONS_PANEL, {
        useTitle: () => R.intl.string(R.t.mEndXM),
        useObscuredNotice: a4.L,
        buildLayout: () => [Ia],
    }),
    Iu = (0, d.t0)(c.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [Io],
        initialize: () => {
            (0, f$.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = f3(),
                n = t.length + +(null != e);
            return {
                type: m.xn.TEXT,
                text: n > 0 ? R.intl.formatToPlainString(R.t.G7zwOk, { count: n }) : R.intl.string(R.t.MKDeyL),
            };
        },
    });
var Id = n(464477);
function Ic(e) {
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
function Ig() {
    return (0, aW.bG)([li.default], () => {
        let e = li.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var Im =
    (((u = {}).AVAILABLE = "available"),
    (u.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (u.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    u);
function IA() {
    let e = (0, aW.bG)([li.default], () => li.default.getCurrentUser()?.verified);
    return Id.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function IE() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, aW.bG)([sh.A, pR.A, li.default], () =>
        li.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? R.intl.string(R.t.hxf9fX)
                : R.intl.string(R.t["3iKih7"])
            : sh.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(S.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        pR.A.can(S.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? R.intl.string(R.t.OYTCUh)
                  : R.intl.string(R.t.HC8uSZ)
              : null,
    );
}
var Ih = n(466034);
let IS = (0, d.Tf)(c.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => R.intl.string(R.t.lQsY7B),
        useSubtitle: () => IE(!0),
        useDisabled: () => null !== IE(!0),
        useLabel: () => R.intl.string(R.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, h.bG)([u_.default], () => u_.default.hasTOTPEnabled()),
                t = IA() === Im.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, n$.A)({
                title: R.intl.string(R.t["D+aE7g"]),
                subtitle: R.intl.string(R.t.EA4ZEk),
                variant: "critical",
                confirmText: R.intl.string(R.t.N86XcP),
                onConfirm: () => T4.A.disable(),
            }),
    }),
    Ix = (0, d.zZ)(c.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => R.intl.string(R.t.RumMFo),
        useSubtitle: () => R.intl.string(R.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, h.bG)([u_.default], () => u_.default.hasTOTPEnabled()),
                t = IA() === Im.AVAILABLE;
            if (!e && t)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: R.intl.string(R.t.cTNUeD),
                            onClick: Ih.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (IA()) {
                case Im.UNAVAILABLE_NO_CRYPTO:
                    return { type: m.lT.INLINE_NOTICE, noticeType: "info", text: R.intl.string(R.t.PhHhsj) };
                case Im.UNAVAILABLE_UNVERIFIED:
                    return { type: m.lT.INLINE_NOTICE, noticeType: "warning", text: R.intl.string(R.t.uggF7o) };
                case Im.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [IS],
    });
var Ip = n(670492),
    IT = n(32880),
    If = n(663417),
    II = n(658675),
    I_ = n(900686);
function IN() {
    (0, sa.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, A.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    T4.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, sa.openModalLazy)(
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
var IC = n(858487);
function Ib(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function Iy() {
    let e = Ip.A.getVerificationKey();
    try {
        await T4.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, s8.P0)({
            message: e.body?.message ?? R.intl.string(R.t.F8FvUy),
            type: s7.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function Iv(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = Ib(t),
        s = E.useRef(null),
        l = (0, A.jsxs)(A.Fragment, {
            children: [(0, A.jsx)(II.P, { checked: n }), (0, A.jsx)(H.E, { variant: "text-md/normal", children: i })],
        });
    return uv.p5
        ? (0, A.jsx)(n0.D, {
              tag: "li",
              className: ir()(IC.aY, IC.vk),
              innerRef: s,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uv.C)(i), s?.current?.focus());
              },
              onClick: function () {
                  ((0, uv.C)(i),
                      (0, s8.P0)({
                          message: R.intl.string(R.t.mGZ66D),
                          type: s7.Ck.SUCCESS,
                          id: "backup-code-copied",
                      }));
              },
              children: l,
          })
        : (0, A.jsx)("li", { className: IC.aY, children: l });
}
let Ij = (0, d.zZ)(c.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.fC9qV0),
        useSubtitle: () =>
            (0, h.bG)([Ip.A], () => Ip.A.getBackupCodes().length > 0)
                ? R.intl.format(R.t.tp7zEK, {})
                : R.intl.string(R.t.LoOi4S),
        usePredicate: Ig,
        buildLayout: () => [IO],
    }),
    IO = (0, d.E2)(c.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.fC9qV0)],
        Component: function () {
            let e = (0, h.bG)([Ip.A], () => Ip.A.getBackupCodes()),
                t = E.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${Ib(t)}` + (n ? ` (${R.intl.string(R.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, A.jsx)(_.$, { text: R.intl.string(R.t.Jc2myK), size: "sm", variant: "secondary", onClick: IN })
                : (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)("ul", {
                              className: IC.E5,
                              children: e.map((e) => (0, A.jsx)(Iv, { code: e }, e.code)),
                          }),
                          (0, A.jsxs)(lF.e, {
                              size: "sm",
                              children: [
                                  (0, A.jsx)(I_.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, A.jsx)(_.$, {
                                          text: R.intl.string(R.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: IT.DownloadIcon,
                                      }),
                                  }),
                                  (0, A.jsx)(_.$, {
                                      text: R.intl.string(R.t["3x962E"]),
                                      variant: "secondary",
                                      icon: If.RefreshIcon,
                                      onClick: Iy,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    IL = (0, d.Tf)(c.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => R.intl.string(R.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = E.useState(!1),
                n = (0, h.bG)([li.default], () => li.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : R.intl.format(e ? R.t["xDBk/I"] : R.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, A.jsx)(Ei.Q, {
                              text: e ? R.intl.string(R.t.fgq1gs) : R.intl.string(R.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => R.intl.string(R.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, h.bG)([li.default], () => li.default.getCurrentUser()?.hasFlag(S.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, sa.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, A.jsx)(e, {
                        ...t,
                        handleSubmit: T4.A.disableSMS,
                        title: R.intl.string(R.t.KLWnit),
                        children: R.intl.string(R.t["W0/Duf"]),
                    });
            }),
    }),
    IR = (0, d.zZ)(c.X.SMS_AUTH_CATEGORY, {
        useTitle: () => R.intl.string(R.t.wuHuI5),
        useSubtitle: () => (0, h.bG)([li.default], () => Ic(li.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, h.bG)([li.default], () => li.default.getCurrentUser()?.hasFlag(S.nhx.MFA_SMS) ?? !1),
                t = (0, h.bG)([li.default], () => null != Ic(li.default.getCurrentUser()));
            if (!e)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "sms-setup-button",
                            text: R.intl.string(R.t.Age7yU),
                            onClick: ID,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = IA(),
                t = Ig(),
                n = (0, h.bG)([u_.default], () => u_.default.hasTOTPEnabled());
            return e === Im.AVAILABLE && t && n;
        },
        buildLayout: () => [IL],
    });
function ID() {
    let e = li.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: fB.d.USER_SETTINGS_UPDATE, onAddedPhone: T4.A.enableSMS }),
                (0, sa.openModalLazy)(
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
                    { modalKey: fz.V },
                ));
        } else T4.A.enableSMS();
}
var IP = n(665671),
    IG = n(442433),
    IM = n(917136),
    IU = n(976910),
    IV = n(267255);
function Ik(e) {
    let { credential: t } = e;
    return (0, A.jsxs)("li", {
        className: IV.e,
        children: [
            (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(H.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, A.jsx)(H.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: R.intl.format(R.t["7JgxF5"], { lastUsed: f5(t.last_used) }),
                        }),
                ],
            }),
            (0, A.jsx)(i9.K, {
                icon: ci.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": R.intl.string(R.t["+nrTbK"]),
                onClick: (e) => {
                    (0, IG.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, A.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let Iw = (0, d.zZ)(c.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.IBq4Y3),
        useSubtitle: () => R.intl.string(R.t.yK9edS),
        useHeaderDecoration: function () {
            if (IA() === Im.AVAILABLE)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "add-security-key-button",
                            text: R.intl.string(R.t["Tzs/fw"]),
                            icon: iF.j,
                            onClick: IP.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (IA()) {
                    case Im.UNAVAILABLE_NO_CRYPTO:
                        return { type: m.lT.INLINE_NOTICE, noticeType: "info", text: R.intl.string(R.t.bWCGI9) };
                    case Im.UNAVAILABLE_UNVERIFIED:
                        return { type: m.lT.INLINE_NOTICE, noticeType: "warning", text: R.intl.string(R.t.uggF7o) };
                    case Im.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [IF],
    }),
    IF = (0, d.E2)(c.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [R.intl.string(R.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, h.cf)([IU.A], () => ({
                hasFetchedCredentials: IU.A.hasFetchedCredentials(),
                credentials: IU.A.getCredentials(),
            }));
            return (E.useEffect(() => {
                t || IM.JQ();
            }, [t]),
            t)
                ? (0, A.jsx)(Y.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, A.jsx)(Ik, { credential: e }, e.id)),
                  })
                : (0, A.jsx)(a7.y, {});
        },
    }),
    IB = (0, d.t_)(c.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => R.intl.string(R.t.m0FidJ),
        buildLayout: () => [Iw, Ix, IR, Ij],
    }),
    Iz = (0, d.t0)(c.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = Ig();
            return { type: m.xn.TEXT, text: e ? R.intl.string(R.t.lQsY7B) : R.intl.string(R.t.WsUuTt) };
        },
        buildLayout: () => [IB],
    }),
    IY = (0, d.zZ)(c.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t["0iH2vc"]),
        buildLayout: () => [fQ, Iz, Iu],
    }),
    IX = { [fe.M$.ADULT]: fa.default.PMznGO, [fe.M$.TEEN]: fa.default.qSkhZH, [fe.M$.UNVERIFIED]: fa.default.vGxRDB },
    IH = [eu.M.TINY_BRONCO_NOTICE],
    IK = [];
function IW() {
    ft.A.openUrl(fi.m5);
}
var IZ = n(308645),
    Iq = n(555725),
    IQ = n(855267);
let I$ = (0, d.E2)(c.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["16r9jm"])],
        Component: IQ.A,
    }),
    IJ = (0, d.zZ)(c.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [I$] }),
    I0 = (0, d.t_)(c.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => R.intl.string(R.t["16r9jm"]),
        buildLayout: () => [IJ],
    }),
    I1 = (0, d.t0)(c.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => R.intl.string(R.t["16r9jm"]),
        useSubtitle: Iq.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, Iq._k)();
            return { type: m.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: m.xn.TEXT, text: (0, Iq.aO)() };
        },
        initialize: () => {
            IZ.Yn();
        },
        buildLayout: () => [I0],
    }),
    I2 = (0, d.zZ)(c.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (fr() ? R.intl.string(R.t.GI2mea) : null) ?? R.intl.string(R.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, fA.LH)(),
                t = (0, fe.ZP)(),
                [n, i] = (0, gt.kn)(e ? IH : IK);
            return e && null != n
                ? {
                      type: m.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "start",
                      text: R.intl.format(IX[t], { handleOnBlogHook: IW }),
                      onDismiss: () => i(gd.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [...fG, I1],
    });
var I3 = n(738188),
    I5 = n(834981),
    I6 = n(987197),
    I4 = n(822585),
    I8 = n(840387),
    I7 = n(465558),
    I9 = n(513687);
let _e = (0, d.E2)(c.X.FAMILY_CENTER_SETTING, {
        Component: I7.p,
        useSearchTerms: () => [
            R.intl.string(I9.default.RZqaJn),
            R.intl.string(I9.default.bdBmqy),
            R.intl.string(I9.default["gVWG+6"]),
            R.intl.string(I9.default.ahKIJO),
            R.intl.string(I9.default["8SLtqb"]),
        ],
    }),
    _t = (0, d.zZ)(c.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [_e] }),
    _n = (0, d.t_)(c.X.FAMILY_CENTER_PANEL, {
        useTitle: () => R.intl.string(I9.default.RZqaJn),
        buildLayout: () => [_t],
    }),
    _i = (0, d.zZ)(c.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => R.intl.string(I9.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, I6.f)(),
                t = (0, I4.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, I5.VT)();
            return E.useMemo(() => (n ? { badgeType: m.Xi.WARNING } : { badgeType: m.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [_s],
    }),
    _s = (0, d.t0)(c.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, I5.Li)() ? R.intl.string(I9.default.IcMQUP) : R.intl.string(I9.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, I8.Z)(),
                t = (0, I5.Li)();
            return e
                ? t
                    ? R.intl.string(I9.default.G8lHFU)
                    : R.intl.string(I9.default.uOLNEZ)
                : R.intl.string(I9.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, I6.f)(),
                t = (0, I4.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: m.Xy.ICON,
                      icon: I3.WarningIcon,
                      color: nQ.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: nQ.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [_n],
    });
var _l = n(425587),
    _r = n(662758);
function _a(e) {
    if (e.body.code === S.t02.INVALID_PASSWORD) throw e;
    (0, lV.A)({ title: R.intl.string(R.t.LX0nT8), subtitle: e.body.message });
}
async function _o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = li.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await _l.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, lV.A)({
              title: R.intl.string(R.t["Y++oNe"]),
              subtitle: R.intl.format(R.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : sh.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, lV.A)({ title: R.intl.string(R.t.vJiTOL), subtitle: R.intl.string(R.t.UyVVan) })
          : t.isClaimed()
            ? (0, sa.openModal)((t) =>
                  (0, A.jsx)(_r.default, {
                      ...t,
                      handleSubmit: (t) => (0, xj.U_)(t, e).then(S.tEg, _a),
                      title: e ? R.intl.string(R.t.xca2ts) : R.intl.string(R.t.goXv9g),
                      actionText: e ? R.intl.string(R.t["8lQ2rR"]) : R.intl.string(R.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? R.intl.string(R.t.FB4H1D) : R.intl.string(R.t.gk7h32),
                  }),
              )
            : (0, n$.A)({
                  title: R.intl.string(R.t.xca2ts),
                  subtitle: R.intl.string(R.t.FB4H1D),
                  confirmText: R.intl.string(R.t["8lQ2rR"]),
                  onConfirm: () => (0, xj.U_)("", !0),
              });
}
let _u = (0, d.Tf)(c.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => R.intl.string(R.t["gIpzR+"]),
        useSubtitle: () => R.intl.string(R.t.Bd6dOf),
        useLabel: () => R.intl.string(R.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => _o(!0),
    }),
    _d = (0, d.Tf)(c.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => R.intl.string(R.t["p/Tjtp"]),
        useSubtitle: () => R.intl.string(R.t.YvDmKb),
        useLabel: () => R.intl.string(R.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => _o(!1),
        usePredicate: () => {
            let e = (0, h.bG)([li.default], () => li.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    _c = (0, d.zZ)(c.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [_d, _u] }),
    _g = (0, d.t_)(c.X.ACCOUNT_PANEL, {
        useTitle: () => R.intl.string(R.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (T4.A.clearBackupCodes(), (0, xj.Uo)());
            };
        },
        useObscuredNotice: a4.L,
        buildLayout: () => [fZ, IY, I2, _i, _c],
    }),
    _m = (0, d.i4)(c.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["ldCE/p"]),
        icon: me.UserIcon,
        buildLayout: () => [_g],
    });
var _A = n(176781),
    _E = n(341923),
    _h = n(572164),
    _S = n(614584),
    _x = n(915725),
    _p = n(268378);
let _T = (0, d.zD)(c.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => R.intl.string(_p.default.j29uJx),
        useSubtitle: () => R.intl.format(_p.default.UCzGcQ, { learnMoreLink: eT.A.getArticleURL(S.MVz.CLIPS) }),
        useValue: () => (0, h.bG)([_x.Ay], () => _x.Ay.getEnableAutoclipping()),
        setValue: _S.uL,
        useDisabled: () => !(0, _h.E)(),
    }),
    _f = (0, d.zY)(c.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [_T], headerSettingKey: _T.key }),
    _I = (0, d.zZ)(c.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => R.intl.string(_p.default.XWkJoi),
        useSubtitle: () => R.intl.string(_p.default["MJ/VsO"]),
        usePredicate: _E.HN,
        usePersistentBadge: () => ({ badgeType: m.Xi.BETA }),
        useInlineNotice: () =>
            (0, _h.E)()
                ? null
                : {
                      type: m.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      text: R.intl.string(_p.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          text: R.intl.string(_p.default.qGgW4M),
                          onClick: () => _S.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [_f],
    });
var __ = n(696016);
let _N = [__.zq, 25, 50, __.Y2, __.rv],
    _C = (0, d.sN)(c.X.CLIPS_BITRATE, {
        useTitle: () => R.intl.string(R.t["8bZyov"]),
        useSubtitle: () => R.intl.string(R.t["h8DSx/"]),
        minValue: __.zq,
        maxValue: __.rv,
        useDefaultValue: () => __.Y2,
        getInitialValue: () => _x.Ay.getSettings().clipsQuality.bitratePercent ?? __.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = _x.Ay.getSettings();
            _S.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: _N,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, _h.E)(),
    });
var _b = n(226640);
let _y = (0, d.Hn)(c.X.CLIPS_FRAME_RATE, {
        useTitle: () => R.intl.string(R.t["2wScL1"]),
        useSubtitle: () => R.intl.string(R.t["Rf9+fy"]),
        useValue: () => (0, h.bG)([_x.Ay], () => _x.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = _x.Ay.getSettings();
            _S.GS({ ...t, frameRate: e });
        },
        useOptions: _b.Fz,
        useDisabled: () => !(0, _h.E)(),
    }),
    _v = (0, d.E2)(c.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [R.intl.string(R.t.SIxrIF)],
        usePredicate: () => (0, h.bG)([_x.Ay], () => _x.Ay.getHardwareClassification()) === __.k9.BELOW_MINIMUM,
        Component: () => (0, A.jsx)(sW.A, { look: sW.k.WARNING, children: R.intl.string(R.t.SIxrIF) }),
    }),
    _j = (0, d.Hn)(c.X.CLIPS_LENGTH, {
        useTitle: () => R.intl.string(R.t.OgfUio),
        useSubtitle: () => R.intl.string(R.t.H7j4tY),
        useValue: () => (0, h.bG)([_x.Ay], () => _x.Ay.getSettings().clipsLength),
        setValue: (e) => _S.h$(e),
        useOptions: _b.Qu,
        useDisabled: () => !(0, _h.E)(),
    }),
    _O = (0, d.E2)(c.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [R.intl.string(R.t["Z+MfqT"])],
        Component: () => (0, A.jsx)(sW.A, { look: sW.k.INFO, children: R.intl.string(R.t["Z+MfqT"]) }),
    }),
    _L = (0, d.Hn)(c.X.CLIPS_RESOLUTION, {
        useTitle: () => R.intl.string(R.t.aFudZJ),
        useSubtitle: () => R.intl.string(R.t.nIrkW5),
        useValue: () => (0, h.bG)([_x.Ay], () => _x.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = _x.Ay.getSettings();
            _S.GS({ ...t, resolution: e });
        },
        useOptions: _b.gF,
        useDisabled: () => !(0, _h.E)(),
    }),
    _R = (0, d.zD)(c.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => R.intl.string(R.t["3zwNf6"]),
        useSubtitle: () => R.intl.string(R.t.m4Cjj9),
        useValue: () => (0, h.bG)([_x.Ay], () => _x.Ay.getSettings().remindersEnabled),
        setValue: (e) => _S.Mt(e),
        useDisabled: () => !(0, _h.E)(),
    }),
    _D = (0, d.zZ)(c.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => R.intl.string(_p.default.TGwzMe),
        buildLayout: () => [_v, _j, _y, _L, _C, _O, _R],
    }),
    _P = (0, d.zD)(c.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, h.bG)([_x.Ay], () => _x.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => _S.YP(e),
    }),
    _G = (0, d.zD)(c.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, h.bG)([_x.Ay], () => _x.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => _S.Uh(e),
    }),
    _M = (0, d.zZ)(c.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, h.bG)([li.default], () => {
                let e = li.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [_P, _G],
    });
var _U = n(417270),
    _V = n(847825);
let _k = (0, d.E2)(c.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [R.intl.string(R.t.pf54EU), R.intl.string(R.t["QyB/jK"])],
        Component: () => {
            let e = (0, h.bG)([sM.Ay], () => sM.Ay.getKeybindForAction(S.hCu.SAVE_CLIP, !0));
            ta()(null != e, "Save clip keybind unset");
            let t = !(0, _h.E)(),
                n = E.useRef(null),
                i = E.useCallback(
                    (t) => {
                        iY.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                s = E.useCallback(() => {
                    iY.A.setKeybind({ ...e, shortcut: (0, sl.OH)(__.Ot) });
                }, [e]);
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t.pf54EU),
                description: R.intl.string(R.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, A.jsx)("div", {
                    className: _V.g,
                    children: (0, A.jsx)(ss.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, A.jsxs)(A.Fragment, {
                            children: [
                                (0, A.jsx)(st.m, {
                                    text: R.intl.string(_p.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, A.jsx)(i9.K, {
                                        icon: iB.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": R.intl.string(_p.default.bUtubv),
                                        onClick: (e) => {
                                            (e.stopPropagation(), n.current?.toggleRecordMode());
                                        },
                                    }),
                                }),
                                (0, A.jsx)(st.m, {
                                    text: R.intl.string(_p.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, A.jsx)(i9.K, {
                                        icon: _U.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": R.intl.string(_p.default.Kyk1Tp),
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
    _w = (0, d.E2)(c.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [R.intl.string(R.t["0U/hj7"]), R.intl.string(R.t["5zxkdo"])],
        usePredicate: sD.BW,
        Component: () => {
            let e = (0, h.bG)([sM.Ay], () => sM.Ay.getKeybindForAction(S.hCu.SAVE_CLIP, !0)),
                t = (0, h.bG)([sM.Ay], () => sM.Ay.getKeybindForAction(S.hCu.SAVE_SCREENSHOT, !0));
            (ta()(null != e, "Save clip keybind unset"), ta()(null != t, "Save screenshot keybind unset"));
            let n = E.useCallback(
                (e) => {
                    iY.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t["0U/hj7"]),
                description: R.intl.string(R.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, A.jsx)("div", {
                    className: _V.g,
                    children: (0, A.jsx)(ss.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    _F = (0, d.zD)(c.X.CLIPS_ENABLE, {
        useTitle: () => R.intl.string(R.t.h8rgrK),
        useSubtitle: () => R.intl.string(R.t["4Qw3NO"]),
        useValue: () => (0, _h.E)(),
        setValue: (e) => _S.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    _B = (0, d.zY)(c.X.CLIPS_GENERAL_CARD, { buildLayout: () => [_F, _k, _w], headerSettingKey: _F.key }),
    _z = (0, d.zZ)(c.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => R.intl.string(R.t["rWKv+e"]),
        useSubtitle: () => R.intl.format(_p.default["dh7g+S"], { learnMoreLink: eT.A.getArticleURL(S.MVz.CLIPS) }),
        buildLayout: () => [_B],
    }),
    _Y = (0, d.E2)(c.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [R.intl.string(R.t.s4773E), R.intl.string(R.t.svjwGh)],
        Component: () => {
            let e = (0, h.bG)([_x.Ay], () => _x.Ay.getSettings().storageLocation),
                t = !(0, _h.E)(),
                n = E.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await nh.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && _S.HU(e[0]);
                    } finally {
                        n.current = !1;
                    }
                }
            }
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t.s4773E),
                description: R.intl.string(R.t.svjwGh),
                layout: "vertical",
                children: (0, A.jsxs)(Y.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, A.jsx)(so.k, {
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
                            text: R.intl.string(_p.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    _X = (0, d.zZ)(c.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => R.intl.string(_p.default["0Q+pdZ"]),
        buildLayout: () => [_Y],
    }),
    _H = (0, d.t_)(c.X.CLIPS_PANEL, {
        useTitle: () => R.intl.string(R.t.z2jK6X),
        usePredicate: sD.sw,
        buildLayout: () => [_z, _I, _D, _X, _M],
    }),
    _K = (0, d.i4)(c.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.z2jK6X),
        icon: _A.x,
        buildLayout: () => [_H],
    });
var _W = n(254138),
    _Z = n(290595),
    _q = n(153488),
    _Q = n(308528),
    _$ = n(171316),
    _J = n(558001);
n(866945);
var _0 = n(835002);
function _1() {
    let e = (0, _$.uM)(),
        t = (0, I5.vx)(),
        n = E.useCallback(() => {
            ((0, tU.default)(),
                _Q.A.openPrivateChannel({ recipientIds: t }),
                (0, _J.N)(_0.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _0.YX.LEARN_MORE));
        }, [t]),
        i = E.useCallback(() => {
            (0, _J.N)(_0.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _0.YX.VIEWED);
        }, []);
    return E.useMemo(() => {
        if (e)
            return {
                type: m.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: i,
                text: R.intl.format(I9.default.i284fU, {
                    hook: (e, t) => (0, A.jsx)(nn.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let _2 = (0, d.zD)(c.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => R.intl.string(R.t.AGDDkH),
    useSubtitle: () => R.intl.string(R.t.kyo3dJ),
    useValue: () => L.Q$.useSetting(),
    setValue: (e) => _S.eQ({ allowVoiceRecording: e }),
});
var _3 = n(157559),
    _5 = n(331887);
function _6() {
    let e = (0, h.bG)([li.default], () => li.default.getCurrentUser()),
        t = (0, h.bG)([_5.A], () => _5.A.harvestType),
        [n, i] = E.useState(() => Date.now()),
        s = null == t ? n : new Date(t.created_at).getTime() + 2592e6,
        l = E.useRef(null);
    return (E.useEffect(() => {
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
let _4 = (0, d.Tf)(c.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => R.intl.string(R.t.qfFFos),
        useSubtitle: function () {
            let e = _6();
            if (e.allowed) return R.intl.format(R.t.NRI6vt, { article: eT.A.getArticleURL(S.MVz.GDPR_REQUEST_DATA) });
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
                                    onClick: () => (0, ns.openUserSettings)(c.X.ACCOUNT_INFO_EMAIL_SETTING),
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
            (e6.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                e5.Bo.get({ url: S.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        e6.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        e6.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    }));
        },
        useDisabled: () => !_6().allowed,
        useLoading: () => (0, h.bG)([_5.A], () => _5.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => R.intl.string(R.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...i } = e;
                    (0, sa.openModalLazy)(async () => {
                        let { default: e } = await n.e("292063").then(n.bind(n, 970018));
                        return (n) => (0, A.jsx)(e, { modalProps: n, onConfirm: t });
                    }, i);
                })({
                    onConfirm: (n) => {
                        ((t = !1),
                            (0, xj.$I)(n)
                                .then(
                                    (e) => (
                                        null != e &&
                                            null != e.body &&
                                            e6.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }),
                                        e
                                    ),
                                )
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? _3.A.show({
                                                  title: R.intl.string(R.t.i2iul5),
                                                  body: R.intl.string(R.t["6Nmv4i"]),
                                              })
                                            : _3.A.show({
                                                  title: R.intl.string(R.t.OjbtDm),
                                                  body: R.intl.string(R.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || R.intl.string(R.t["0F5Jyt"]);
                                        _3.A.show({ title: R.intl.string(R.t.OjbtDm), body: t });
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
    _8 = (0, d.v_)(c.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => R.intl.string(R.t.D60Gfj),
        useSubtitle: () =>
            R.intl.format(R.t.dszICC, {
                onClickDisable: () => (0, ns.openUserSettings)(c.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, ns.openUserSettings)(c.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var _7 = n(972737);
let _9 = (0, d.zD)(c.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => R.intl.string(R.t.MNKzyg),
        useSubtitle: () =>
            R.intl.format(R.t["2SiYln"], { helpdeskArticle: eT.A.getArticleURL(S.MVz.DATA_USED_FOR_RECOMMENDED) }),
        useValue: function () {
            return (0, h.bG)([_q.A], () => _q.A.hasConsented(S.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, _Z.U)([S.YAq.PERSONALIZATION], []).catch(_7.i)
                : (0, _7.O)({
                      header: R.intl.string(R.t["9SNpzv"]),
                      confirmText: R.intl.string(R.t["9g5UGw"]),
                      cancelText: R.intl.string(R.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, _Z.U)([], [S.YAq.PERSONALIZATION]).catch(_7.i);
                      },
                      body: R.intl.string(R.t.gJvDDh),
                  });
        },
        useDisabled: _$.uM,
    }),
    Ne = (0, Ez.mj)({
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
function Nt() {
    let { enabled: e } = Ne.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var Nn = n(884705);
function Ni() {
    return (0, h.bG)([Nn.A], () => Nn.A.isTogglesDisabled());
}
function Ns() {
    return !L.vf.useSetting();
}
function Nl(e) {
    L.vf.updateSetting(!e);
}
function Nr() {
    let e = Ni(),
        t = L.H1.useSetting(),
        n = (0, _$.uM)();
    return e || t || n;
}
let Na = (0, d.zD)(c.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => R.intl.string(R.t.CyLYKZ),
        useSubtitle: () =>
            R.intl.format(R.t["md5l4/"], { helpdeskArticle: eT.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !Nt(),
        useValue: Ns,
        setValue: Nl,
        useDisabled: Nr,
        useSearchTerms: () => [R.intl.string(R.t.CyLYKZ)],
    }),
    No = (0, d.zD)(c.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => R.intl.string(R.t.CyLYKZ),
        useSubtitle: () =>
            R.intl.format(R.t["2QFDU/"], { helpdeskArticle: eT.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: Nt,
        useValue: Ns,
        setValue: Nl,
        useDisabled: Nr,
        useSearchTerms: () => [R.intl.string(R.t.CyLYKZ)],
    });
function Nu() {
    return !L.H1.useSetting();
}
function Nd(e) {
    L.H1.updateSetting(!e);
}
function Nc() {
    let e = Ni(),
        t = (0, _$.uM)();
    return e || t;
}
let Ng = (0, d.zD)(c.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => R.intl.string(R.t.sJYh5t),
        useSubtitle: () => R.intl.string(R.t.w4fvxe),
        usePredicate: () => !Nt(),
        useValue: Nu,
        setValue: Nd,
        useSearchTerms: () => [R.intl.string(R.t.VkS7Yd)],
        useDisabled: Nc,
    }),
    Nm = (0, d.zD)(c.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => R.intl.string(R.t.sJYh5t),
        useSubtitle: () =>
            R.intl.format(R.t.cf9mvV, { helpdeskArticle: eT.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: Nt,
        useValue: Nu,
        setValue: Nd,
        useSearchTerms: () => [R.intl.string(R.t.VkS7Yd)],
        useDisabled: Nc,
    }),
    NA = (0, d.AK)(c.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: c.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = EL(2);
            return R.intl.format(R.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = ER();
            return { type: m.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, h.bG)([iQ.Ay], () => iQ.Ay.getGamesSeen(!1).some((e) => !(0, EC.n1)(e))) && (0, nm.xl)(),
    }),
    NE = (0, d.gN)(c.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [NA] }),
    Nh = (0, d.zD)(c.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => R.intl.string(R.t.XuADY2),
        useSubtitle: () =>
            R.intl.format(R.t.FNqmmX, { helpdeskArticle: eT.A.getArticleURL(S.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, h.bG)([_q.A], () => _q.A.hasConsented(S.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, _Z.U)([S.YAq.USAGE_STATISTICS], []).catch(_7.i)
                : (0, _7.O)({
                      header: R.intl.string(R.t.OdPCbN),
                      body: R.intl.string(R.t.MGWabA),
                      confirmText: R.intl.string(R.t["D3+rU4"]),
                      cancelText: R.intl.string(R.t.kYpG0u),
                      onConfirm: () => (0, _Z.U)([], [S.YAq.USAGE_STATISTICS]).catch(_7.i),
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t.XuADY2)],
        useDisabled: _$.uM,
    }),
    NS = (0, d.zZ)(c.X.DATA_USAGE_CATEGORY, {
        useTitle: () => R.intl.string(R.t.QDAriI),
        useInlineNotice: _1,
        initialize: () => {
            _q.A.fetchedConsents || (0, _Z.Q)();
        },
        buildLayout: () => [_8, Nh, _9, Ng, Na, _2, _4, NE],
    });
var Nx = n(15762);
let Np = (0, d.zD)(c.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => R.intl.string(Nx.default.F3llsQ),
    useSubtitle: () => R.intl.string(Nx.default["6goWcz"]),
    useValue: L.Sy.useSetting,
    setValue: function (e) {
        (L.Sy.updateSetting(e),
            tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: EU.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function NT() {
    let e = L.JG.useSetting();
    return (0, h.yK)(
        [d7.Ay, sh.A],
        () => {
            let t = new Set(e);
            return d7.Ay.getFlattenedGuildIds().filter((e) => null != sh.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let Nf = (0, d.AK)(c.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = NT();
            if (0 === e.length) return R.intl.format(R.t.QJIJ5p, {});
            let t = sh.A.getGuild(e[0]),
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
                    ((e = NT()),
                    0 ===
                    (t = (0, h.yK)(
                        [sh.A],
                        () =>
                            e
                                .slice(0, 2)
                                .map((e) => sh.A.getGuild(e))
                                .filter((e) => null != e),
                        [e],
                    )).length
                        ? null
                        : t.length >= 2
                          ? {
                                frontIcon: {
                                    icon: (0, A.jsx)(EQ, { guild: t[0], size: Eb.CD }),
                                    shape: Eb.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, A.jsx)(EQ, { guild: t[1], size: Eb.CD }), shape: Eb.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, A.jsx)(EQ, { guild: t[0], size: Eb.CD }),
                                    shape: Eb.e0.SQUIRCLE,
                                },
                            });
            return { type: m.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: c.X.ACTIVITY_PRIVACY_PANEL,
    }),
    NI = (0, d.gN)(c.X.PROFILE_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, Ew.lX)("ProfilePrivacyRelatedSettings"),
        buildLayout: () => [Nf],
    }),
    N_ = (0, d.Qx)(c.X.PROFILE_PRIVACY_SETTING, {
        usePredicate: () => (0, Ew.lX)("ProfilePrivacySetting"),
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
            if ((L.KP.updateSetting(e), !(0, Ew.W1)("ProfilePrivacySetting"))) return;
            let i = (0, EX.gS)(t, e);
            null != i &&
                (0, sa.openModalLazy)(async () => {
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
    NN = (0, d.zZ)(c.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.ul884f),
        useSubtitle: () =>
            R.intl.format(R.t.N4jSgR, {
                learnMoreUrl: eT.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [N_, Np, NI],
    });
var NC = n(952270),
    Nb = n(678538);
let Ny = { [eB.tR.REAL_MONEY_GAMING]: Nb.default.pmIitA },
    Nv = Object.keys(Ny).map(Number),
    Nj = (0, d.E2)(c.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [R.intl.string(Nb.default.foQaI1)],
        usePredicate: Nt,
        Component: function () {
            let e = E.useMemo(
                    () =>
                        Nv.map((e) => ({
                            id: String(e),
                            value: e,
                            label: R.intl.string(Ny[e]),
                            leading: NC.EyeSlashIcon,
                        })),
                    [],
                ),
                t = L.XZ.useSetting();
            return (0, A.jsx)(xS.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(L.XZ.getSetting());
                    for (let e of Nv) t.has(e) ? n.add(e) : n.delete(e);
                    L.XZ.updateSetting([...n]);
                },
                label: R.intl.string(Nb.default.foQaI1),
                description: R.intl.format(Nb.default["z/MfaY"], {
                    helpdeskArticle: eT.A.getArticleURL(S.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: R.intl.string(Nb.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    NO = (0, d.zZ)(c.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => R.intl.string(Nb.default.XUj46U),
        usePredicate: Nt,
        buildLayout: () => [Nm, No, Nj],
    });
var NL = n(936388),
    NR = n(714763),
    ND = n(814278);
let NP = (0, d.zD)(c.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => R.intl.string(R.t["opi/XK"]),
    useSubtitle: () => R.intl.format(R.t["/T+ZlP"], { helpArticle: (0, ND.Lu)() }),
    useValue: function () {
        return (0, h.bG)([NR.A], () => NR.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        NL.A.updatePersistentCodesEnabled(e);
    },
});
var NG = n(787392);
function NM() {
    return (0, h.yK)([NG.A], () => NG.A.getUserIds());
}
var NU = n(803306),
    NV = n(966327),
    Nk = n(774156);
function Nw(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, eP.Ay)(),
        s = (0, h.bG)([li.default], () => li.default.getUser(t)),
        l = pO.Ay.getFormattedName(s),
        r = E.useCallback(() => {
            (0, ND.kj)(t);
        }, [t]),
        a = E.useCallback(() => (0, xD.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        E.useEffect(() => {
            (0, NU.wz)(t);
        }, [t]),
        (0, A.jsxs)("div", {
            className: Nk.uW,
            children: [
                null != s && (0, A.jsx)(NV.A, { className: Nk.my, user: s, size: I._3.SIZE_40 }),
                (0, A.jsxs)("div", {
                    className: Nk.Qq,
                    children: [
                        (0, A.jsx)(n0.D, {
                            className: Nk.Xh,
                            onClick: a,
                            children: (0, A.jsx)(H.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: l,
                            }),
                        }),
                        (0, A.jsx)(H.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: R.intl.format(R.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, A.jsx)(n0.D, { onClick: r, className: Nk.Qz, children: (0, A.jsx)(se.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function NF(e) {
    let { className: t, userId: n, verification: i, index: s } = e,
        l = (0, ND.tC)(i.timestamp),
        r = E.useCallback(() => {
            (0, ND.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, A.jsxs)("div", {
        className: t,
        children: [
            (0, A.jsxs)("div", {
                className: Nk.Qq,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: R.intl.format(R.t.N4qBBO, { index: s + 1 }),
                    }),
                    (0, A.jsx)(H.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                ],
            }),
            (0, A.jsx)(n0.D, {
                className: Nk.Kk,
                onClick: r,
                children: (0, A.jsx)(ha.P, { size: "md", color: nQ.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function NB(e) {
    let { userId: t } = e,
        n = (0, h.yK)([NG.A], () =>
            B()(NG.A.getUserVerifiedKeys(t))
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
            (0, A.jsx)(Nw, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, A.jsxs)(
                    E.Fragment,
                    {
                        children: [
                            (0, A.jsx)(NF, { className: Nk.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, A.jsx)("div", { className: Nk.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var Nz = n(464946),
    NY = n(492422);
let NX = (0, d.E2)(c.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["5b3FNI"])],
        usePredicate: function () {
            let e = NM();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = NM();
            return (0, A.jsxs)(Nz.h, {
                children: [
                    (0, A.jsx)(Nz._, {
                        header: R.intl.string(R.t["5b3FNI"]),
                        description: R.intl.format(R.t.jrTSWU, { helpArticle: (0, ND.dc)() }),
                    }),
                    e.map((e) => (0, A.jsx)("div", { className: NY.A, children: (0, A.jsx)(NB, { userId: e }) }, e)),
                ],
            });
        },
    }),
    NH = (0, d.zZ)(c.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.bTwjaz),
        usePredicate: () => (0, eQ.isDesktop)(),
        buildLayout: () => [NP, NX],
    }),
    NK = (0, d.t_)(c.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => R.intl.string(R.t.OAuOHD),
        buildLayout: () => [NS, NO, NN, NH],
    }),
    NW = (0, d.i4)(c.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.OAuOHD),
        icon: _W.m,
        buildLayout: () => [NK],
    });
var NZ = n(476713);
let Nq = (0, d.AK)(c.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.O65dzZ),
        useTitle: () => R.intl.string(R.t["f6kk+r"]),
        destinationKey: c.X.AUTHORIZED_APPS_CATEGORY,
    }),
    NQ = (0, d.gN)(c.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [Nq] });
var N$ = n(875444);
function NJ(e, t) {
    let n = (0, h.bG)([hx.default], () => hx.default.getFetchState()),
        i = (0, h.bG)([hx.default], () =>
            e ? hx.default.getNewestTokensForNonChildrenApplications() : hx.default.getNewestTokens(),
        ),
        s = E.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, N$.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        E.useEffect(() => {
            t || hi.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== hx.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: s }
    );
}
var N0 = n(514479);
function N1() {
    return (0, A.jsxs)("div", {
        className: N0.d,
        children: [
            (0, A.jsx)(H.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: N0.x,
                children: R.intl.string(R.t["+0U77d"]),
            }),
            (0, A.jsx)(H.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: R.intl.format(R.t.V8wClM, {
                    helpdeskArticle: eT.A.getArticleURL(S.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
let N2 = (0, d.E2)(c.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = NJ(!0, !0);
        return e ? (0, A.jsx)(a7.y, {}) : (0, A.jsx)(N1, {});
    },
    useSearchTerms: () => [R.intl.string(R.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = NJ(!0, !0);
        return e || 0 === t.length;
    },
});
function N3() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = NJ(!0, !0);
    return !e && t.length > 0;
}
let N5 = (0, d.zD)(c.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => R.intl.string(R.t.W8JtfT),
        useSubtitle: () => R.intl.string(R.t.a99KKy),
        useSearchTerms: () => [R.intl.string(R.t["Uv/eTx"])],
        useValue: () => L.Zk.useSetting(),
        setValue: (e) => L.Zk.updateSetting(e),
        usePredicate: N3,
    }),
    N6 = (0, d.Qx)(c.X.IN_GAME_DMS_SETTING, {
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
        usePredicate: N3,
    });
function N4() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = NJ(!0, !0);
    return {
        sortedGames: E.useMemo(() => e.toSorted((e, t) => ou.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var N8 = n(306537),
    N7 = n(40957);
function N9(e) {
    let { body: t, buttonText: n, onButtonClick: i, noticeType: s, iconAlign: l } = e;
    return (
        (0, eS.Ay)(() => {
            (0, _J.N)(s, _0.YX.VIEWED);
        }),
        (0, A.jsx)(iz.w, {
            type: "info",
            iconAlign: l,
            children: (0, A.jsxs)(Y.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: "xs",
                children: [
                    (0, A.jsx)("span", { className: N7.r, children: t }),
                    (0, A.jsx)(Y.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: "xs",
                        fullWidth: !1,
                        children: (0, A.jsx)(_.$, { variant: "secondary", size: "sm", text: n, onClick: i }),
                    }),
                ],
            }),
        })
    );
}
function Ce(e, t) {
    return {
        handleLearnMore: E.useCallback(() => {
            (t(), (0, _J.N)(e, _0.YX.LEARN_MORE));
        }, [e, t]),
        handleConfirmAge: E.useCallback(() => {
            (ft.A.showAgeVerificationGetStartedModal({ entryPoint: N8.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _J.N)(e, _0.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function Ct() {
    let e,
        t = (0, _$.uM)(),
        n = (0, fp.fk)(),
        i = (0, fx.b8)(),
        s = (0, I8.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : s && (e = "teen"), null != e) && (0, fl.n)(fi.Vc)) return e;
    }
}
var Cn = n(687123),
    Ci = n(444802);
function Cs() {
    let e = (0, Ci.WX)();
    E.useEffect(() => {
        (0, _J.N)(_0.YA.AGE_CONFIRMATION_NOTICE, _0.YX.VIEWED);
    }, []);
    let t = E.useCallback(() => {
            (window.open(eT.A.getArticleURL(e), "_blank"), (0, _J.N)(_0.YA.AGE_CONFIRMATION_NOTICE, _0.YX.LEARN_MORE));
        }, [e]),
        n = E.useCallback(() => {
            (ft.A.showAgeVerificationGetStartedModal({ entryPoint: N8.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _J.N)(_0.YA.AGE_CONFIRMATION_NOTICE, _0.YX.CONFIRM_AGE));
        }, []);
    return (0, A.jsx)(r0.p, {
        messageType: r0.Y.INFO,
        action: (0, A.jsx)(Ei.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: R.intl.string(R.t.FDSSia),
            onClick: n,
        }),
        children: R.intl.format(R.t.mFgsfg, { hook: (e, n) => (0, A.jsx)(nn.Anchor, { onClick: t, children: e }, n) }),
    });
}
function Cl() {
    let e = (0, fp.aX)(Cn.t.REACTIVE_CHECK),
        t = (0, fx.b8)();
    return E.useMemo(() => {
        if (e && !t) return { type: m.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: Cs };
    }, [e, t]);
}
var Cr = n(323073),
    Ca = n(386171),
    Co = n(96607);
let Cu = (0, d.zD)(c.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => R.intl.string(R.t.gvC6q7),
        useSubtitle: () => R.intl.string(R.t.zirUC1),
        useValue: Ca.hT,
        useDisabled: function () {
            let e = (0, Co.A)() ?? !0,
                t = (0, Cr.sP)(),
                n = (0, fx.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, Cr.p5)() && e
                ? ft.A.showAgeVerificationGetStartedModal({ entryPoint: N8.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : L.Qe.updateSetting(e);
        },
    }),
    Cd = (0, d.zD)(c.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => R.intl.string(R.t["L+yTsa"]),
        useSubtitle: () => R.intl.string(R.t["t6i/jW"]),
        useValue: Ca.tI,
        useDisabled: function () {
            let e = (0, Co.A)() ?? !0,
                t = (0, Cr.sP)(),
                n = (0, fx.yM)();
            return E.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, Cr.p5)() && e
                ? ft.A.showAgeVerificationGetStartedModal({ entryPoint: N8.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : L.Kg.updateSetting(e);
        },
    }),
    Cc = (0, d.AK)(c.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.hOXd45),
        destinationKey: c.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    Cg = (0, d.gN)(c.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [Cc] });
n(667532);
var Cm = n(390248),
    CA = n(632119),
    CE = n(945276),
    Ch = n(389737),
    CS = n(566769);
function Cx() {
    let e,
        t = (0, CE.A)() ?? !0,
        n = (0, _$.uM)(),
        i = (0, _$.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, aW.cf)([ad.A], () => ad.A.settings.textAndImages?.explicitContentSettings ?? (0, CA.C$)())),
        {
            explicitContentGuilds: (0, CA.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, CA.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, CA.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, Cm.hK)() && t.includes(eB.TO.SHOW)
            ? ft.A.showAgeVerificationGetStartedModal({ entryPoint: N8.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, CA.Jz)(e);
    }
    let o = [
            { value: eB.TO.BLUR, label: R.intl.string(R.t.S49Uad) },
            { value: eB.TO.BLOCK, label: R.intl.string(R.t["D/157Y"]) },
        ],
        u = [{ value: eB.TO.BLUR, label: R.intl.string(R.t.S49Uad) }],
        d = { value: eB.TO.SHOW, label: R.intl.string(R.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? R.intl.string(I9.default["6Af/cw"]) : void 0 };
    return (0, A.jsxs)(Ch.E, {
        description: R.intl.string(R.t.Wnojv1),
        children: [
            (0, A.jsx)(CS.A, {
                title: R.intl.string(R.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(CS.A, {
                title: R.intl.string(R.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(CS.A, {
                title: R.intl.string(R.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? R.intl.string(I9.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function Cp() {
    let e,
        t = (0, CE.A)() ?? !0,
        n = (0, _$.uM)(),
        i = (0, _$.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, aW.cf)([ad.A], () => ad.A.settings.textAndImages?.goreContentSettings ?? (0, Ci.T4)())),
        {
            goreContentGuilds: (0, Ci.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, Ci.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, Ci.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, Cm.hK)() && t.includes(eB.TO.SHOW)
            ? ft.A.showAgeVerificationGetStartedModal({ entryPoint: N8.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, Ci.qY)(e);
    }
    let o = [
            { value: eB.TO.BLUR, label: R.intl.string(R.t.S49Uad) },
            { value: eB.TO.BLOCK, label: R.intl.string(R.t["D/157Y"]) },
        ],
        u = [{ value: eB.TO.BLUR, label: R.intl.string(R.t.S49Uad) }],
        d = { value: eB.TO.SHOW, label: R.intl.string(R.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? R.intl.string(I9.default["6Af/cw"]) : void 0 };
    return (0, A.jsxs)(Ch.E, {
        description: R.intl.string(R.t.XgH9eh),
        children: [
            (0, A.jsx)(CS.A, {
                title: R.intl.string(R.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(CS.A, {
                title: R.intl.string(R.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(CS.A, {
                title: R.intl.string(R.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? R.intl.string(I9.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var CT = n(875162),
    Cf = n(636745);
let CI = (0, d.E2)(c.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, Ci.WX)(),
            t = E.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: R.intl.string(R.t.GYpoAq),
                        component: Cx,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: R.intl.string(R.t["16/3Bi"]),
                        component: Cp,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, A.jsxs)(Nz.h, {
            children: [
                (0, A.jsx)(Nz._, {
                    header: R.intl.string(R.t["Hj/But"]),
                    description: R.intl.format(R.t.dliU4j, { learnMoreLink: eT.A.getArticleURL(e) }),
                }),
                (0, A.jsx)(CT.A, { tabs: t, orientation: "vertical", tabsClassName: Cf.v }),
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
var C_ = n(639555),
    CN = n(617641),
    CC = n(546140),
    Cb = n(406935),
    Cy = n(594061);
let Cv = (0, d.zD)(c.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => R.intl.string(R.t.qFsx5q),
        useSubtitle: () => R.intl.format(R.t.lunaRv, { learnMoreLink: eT.A.getArticleURL(S.MVz.SAFETY_ALERTS) }),
        useValue: CC.L,
        setValue: function (e) {
            return Cy.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = Cb._t.create({ value: e });
                },
                Cy.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, CN.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, C_.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, CE.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    Cj = (0, d.zZ)(c.X.CONTENT_CATEGORY, {
        useTitle: () => R.intl.string(R.t["3upKU8"]),
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
                h,
                S,
                x,
                p,
                T = _1(),
                f =
                    ((s = (0, _$.uM)()),
                    (l = (0, fp.fk)()),
                    (r = (0, fx.b8)()),
                    (a = (0, I8.Z)()),
                    (o = Ce(_0.YA.AGE_CONFIRMATION_NOTICE, fs)),
                    (u = Ce(_0.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, fe.M0)),
                    (d = E.useCallback(() => {
                        (0, _J.N)(_0.YA.AGE_CONFIRMATION_NOTICE, _0.YX.VIEWED);
                    }, [])),
                    (c = E.useCallback(() => {
                        (0, _J.N)(_0.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _0.YX.VIEWED);
                    }, [])),
                    E.useMemo(() => {
                        if (!s && (0, fl.n)(fi.Vc)) {
                            if (l && !r)
                                return {
                                    type: m.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    iconAlign: "center",
                                    trackView: d,
                                    text: R.intl.format(fa.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: {
                                        size: "sm",
                                        text: R.intl.string(fa.default["cI+bc/"]),
                                        onClick: o.handleConfirmAge,
                                    },
                                };
                            if (a)
                                return {
                                    type: m.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    iconAlign: "start",
                                    trackView: c,
                                    text: R.intl.format(fa.default.qbBkFI, {
                                        handleOnConfirmAgeHook: u.handleConfirmAge,
                                    }),
                                    button: { size: "sm", text: R.intl.string(R.t.hvVgAZ), onClick: u.handleLearnMore },
                                };
                        }
                    }, [l, s, a, r, u, c, d, o])),
                I =
                    ((e = (0, I8.Z)()),
                    (t = (0, Ci.WX)()),
                    (n = E.useCallback(() => {
                        (window.open(eT.A.getArticleURL(t), "_blank"),
                            (0, _J.N)(_0.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _0.YX.LEARN_MORE));
                    }, [t])),
                    (i = E.useCallback(() => {
                        (0, _J.N)(_0.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _0.YX.VIEWED);
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
                _ =
                    ((g = (0, fp.SJ)()),
                    (h = (0, fx.b8)()),
                    (S = g && !h),
                    (x = E.useCallback(() => {
                        (ft.A.showAgeVerificationGetStartedModal({ entryPoint: N8.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _J.N)(_0.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _0.YX.LEARN_MORE));
                    }, [])),
                    (p = E.useCallback(() => {
                        (0, _J.N)(_0.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _0.YX.VIEWED);
                    }, [])),
                    E.useMemo(() => {
                        if (S)
                            return {
                                type: m.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: p,
                                text: R.intl.format(R.t.OX4ybh, {
                                    hook: (e, t) => (0, A.jsx)(nn.Anchor, { onClick: x, children: e }, t),
                                }),
                            };
                    }, [x, S, p])),
                N = Cl();
            return T ?? f ?? N ?? _ ?? I;
        },
        buildLayout: () => [CI, Cv, Cu, Cd, Cg],
    });
var CO = n(923457),
    CL = n(750714);
let CR = (0, d.Qx)(c.X.DM_SPAM_SETTING, {
    useTitle: () => R.intl.string(R.t.puwSkY),
    useSubtitle: () => R.intl.string(R.t["+sXN3T"]),
    useValue: function () {
        let e = L.he.useSetting(),
            t = L.cj.useSetting(),
            n = (0, h.bG)([li.default], () => li.default.getCurrentUser()),
            i = (0, fp.yv)(CO.p.SPAM_FILTERS);
        return e !== eB.he.DEFAULT_UNSET
            ? e
            : n?.nsfwAllowed === !1 && i
              ? eB.he.FRIENDS_AND_NON_FRIENDS
              : (CL.xY.get(t) ?? eB.he.NON_FRIENDS);
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
var CD = n(189883);
let CP = (0, d.zD)(c.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => R.intl.string(R.t["7x9dyE"]),
    useValue: function () {
        let e = L.FA.useSetting();
        return E.useMemo(() => (0, n8.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        L.FA.updateSetting(e ? S.yKI : S.yKI & ~S.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, _$.uM)();
    },
});
var CG = n(665260);
let CM = (0, d.zD)(c.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => R.intl.string(R.t.NfeuZ3),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = E.useMemo(() => (0, n8.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? CG.UI(t, S.dzt.MUTUAL_FRIENDS) : CG.iE(t, S.dzt.MUTUAL_FRIENDS, S.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _$.uM)();
        },
    }),
    CU = (0, d.zD)(c.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => R.intl.string(R.t.qsMfsH),
        useSubtitle: () => R.intl.string(R.t["6DqAp0"]),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = E.useMemo(() => (0, n8.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? CG.UI(t, S.dzt.MUTUAL_GUILDS) : CG.iE(t, S.dzt.MUTUAL_GUILDS, S.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _$.uM)();
        },
    }),
    CV = (0, d.FW)(c.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => R.intl.string(R.t.wTdS6S),
        buildLayout: () => [CP, CM, CU],
    });
var Ck = n(420825);
let Cw = (0, d.zD)(c.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => R.intl.string(R.t["jK+wdr"]),
        useSubtitle: () => R.intl.string(R.t["RYh/pW"]),
        useValue: () => !(0, Ck.q)(),
        setValue: function (e) {
            L.Zd.updateSetting(!e);
        },
    }),
    CF = (0, d.zZ)(c.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["5gxWrt"]),
        useSubtitle: function () {
            let { enabled: e } = CD.A.useConfig({ location: "Friend Request Setting" });
            return e ? R.intl.string(R.t.QVbF3l) : void 0;
        },
        useSubnavLabel: () => R.intl.string(R.t.fyA115),
        useInlineNotice: _1,
        buildLayout: () => [CV, Cw],
    });
var CB = n(994500),
    Cz = n(428678),
    CY = n(717398),
    CX = n(730134),
    CH = n(276573);
function CK(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, A.jsxs)("div", {
        className: CH.wx,
        children: [
            (0, A.jsx)("div", {
                className: CH.zc,
                children: i ? (0, A.jsx)(Cz.K, {}) : (0, A.jsx)(NC.EyeSlashIcon, {}),
            }),
            (0, A.jsxs)("div", {
                className: CH.Qq,
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
function CW(e) {
    let { userId: t, last: n } = e,
        i = (0, h.bG)([CB.A], () => CB.A.isBlocked(t)),
        s = (0, h.bG)([li.default], () => li.default.getUser(t)),
        [l, r] = E.useState(!1),
        a = E.useCallback(() => {
            (r(!0),
                i
                    ? CY.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : CY.A.unignoreUser(t, tL.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == s
        ? null
        : (0, A.jsxs)("div", {
              className: ir()(CH.nM, { [CH.fW]: n }),
              children: [
                  (0, A.jsxs)("div", {
                      className: CH.eF,
                      children: [
                          (0, A.jsx)(CX.A, { user: s, size: I._3.SIZE_40 }),
                          (0, A.jsxs)("div", {
                              className: CH.Qq,
                              children: [
                                  (0, A.jsx)(H.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: s.globalName ?? s.username,
                                  }),
                                  (0, A.jsx)(H.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != s.globalName ? s.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, A.jsx)(_.$, {
                      variant: "secondary",
                      text: R.intl.string(i ? R.t.XyHpKH : R.t["8wXU9B"]),
                      onClick: a,
                      loading: l,
                  }),
              ],
          });
}
function CZ(e) {
    let { userIds: t, listType: n } = e,
        [i, s] = E.useState(5);
    return (0, A.jsx)(Nz.h, {
        children: (0, A.jsxs)("div", {
            className: CH.Nr,
            children: [
                (0, A.jsx)(CK, { listType: n, numberOfUsers: t.length }),
                (0, A.jsx)("div", {
                    className: CH.jS,
                    children: t.slice(0, i).map((e, n) => (0, A.jsx)(CW, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, A.jsx)("div", {
                          className: CH.vM,
                          children: (0, A.jsx)(n0.D, {
                              onClick: function () {
                                  s((e) => e + 5);
                              },
                              className: CH.Qf,
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
let Cq = (0, d.E2)(c.X.BLOCKED_USERS, {
        useSearchTerms: () => [R.intl.string(R.t.PFOUKW)],
        usePredicate: () => (0, h.bG)([CB.A], () => CB.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, h.yK)([CB.A], () => CB.A.getBlockedIDs());
            return (0, A.jsx)(CZ, { userIds: e, listType: "blocked" });
        },
    }),
    CQ = (0, d.E2)(c.X.IGNORED_USERS, {
        useSearchTerms: () => [R.intl.string(R.t["93ZDWE"])],
        usePredicate: () => (0, h.bG)([CB.A], () => CB.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, h.yK)([CB.A], () => CB.A.getIgnoredIDs());
            return (0, A.jsx)(CZ, { userIds: e, listType: "ignored" });
        },
    }),
    C$ = (0, d.zZ)(c.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["+Iryf3"]),
        useSubtitle: () =>
            R.intl.format(R.t["0aNQo9"], { helpArticle: eT.A.getArticleURL(S.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [Cq, CQ],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, h.cf)([CB.A], () => ({
                hasBlockedUsers: CB.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: CB.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var CJ = n(22385),
    C0 = n(556534),
    C1 = n(111159),
    C2 = n(152056),
    C3 = n(428031),
    C5 = n(978433);
let C6 = { label: () => R.intl.string(R.t["32u1Dx"]), value: CJ.YG };
var C4 = n(307863),
    C8 = n(954225);
function C7() {
    return (0, C4.e)() ? R.intl.string(R.t.PMsfcH) : R.intl.string(R.t.RAQUSN);
}
function C9(e, t) {
    tt.default.track(S.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let be = (0, d.zD)(c.X.PERMISSIONS_DMS_SETTING, {
    useTitle: C7,
    useSubtitle: function () {
        let e = (0, C0.Tx)(),
            t = (0, C0.q9)(),
            n = (0, C4.e)();
        return e === CJ.YG
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
        let e = (0, C0.Tx)(),
            t = L.$s.useSetting().includes(e),
            n = (0, C3.K)();
        return e === CJ.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, _$.uM)();
        return (0, C0.Tx)() === CJ.YG && e;
    },
    setValue: function (e) {
        let t = CJ.xk.getState().selectedGuildId;
        if (t === CJ.YG) {
            var n;
            ((n = !e),
                (0, _7.O)({
                    header: R.intl.string(R.t["uUr+GR"]),
                    body: R.intl.string(R.t.hjGJBp),
                    confirmText: R.intl.string(R.t.gm1Vej),
                    cancelText: R.intl.string(R.t.p89ACt),
                    confirmButtonColor: lk.$n.Colors.BRAND,
                    onConfirm: function () {
                        (L.n6.updateSetting(n), C9(n, !1));
                    },
                    onCancel: function () {
                        (L.n6.updateSetting(n), L.$s.updateSetting(n ? sh.A.getGuildIds() : []), C9(n, !0));
                    },
                }));
        } else {
            let n = (0, n8.Tb)();
            (e ? n.delete(t) : n.add(t),
                L.$s.updateSetting(Array.from(n)),
                tt.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: C8.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eC.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var bt = n(116774),
    bn = n(953298);
function bi(e, t) {
    tt.default.track(S.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function bs() {
    return R.intl.string(R.t["3o2ojh"]);
}
let bl = (0, d.zD)(c.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: bs,
        useSubtitle: function () {
            let e = (0, C0.q9)(),
                t = eT.A.getArticleURL(S.MVz.MESSAGE_REQUESTS);
            return e
                ? R.intl.format(R.t.WpnWLc, { helpdeskArticle: t })
                : R.intl.format(R.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, C0.Tx)(),
                t = (0, C3.K)(),
                n = L.$s.useSetting().includes(e),
                i = (0, bt.s)(),
                s = (0, _$.uM)(),
                l = L.YX.useSetting(),
                r = L.Zr.useSetting().includes(e);
            return !!i || (e === CJ.YG && s ? !l : e === CJ.YG ? !t && !l : !n && !r);
        },
        useDisabled: function () {
            let e = (0, C0.Tx)(),
                t = (0, _$.uM)(),
                n = (0, C3.K)(),
                i = L.$s.useSetting().includes(e),
                s = (0, bt.s)();
            return e === CJ.YG ? n || t || s : i || s;
        },
        setValue: function (e) {
            let t = CJ.xk.getState().selectedGuildId;
            if (!e && (0, bn.w)())
                return void ft.A.showAgeVerificationGetStartedModal({ entryPoint: N8.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === CJ.YG) {
                var n;
                ((n = !e),
                    (0, _7.O)({
                        header: R.intl.string(R.t.yAfu1p),
                        body: R.intl.string(R.t.Ry2z74),
                        confirmText: R.intl.string(R.t.gm1Vej),
                        cancelText: R.intl.string(R.t.p89ACt),
                        confirmButtonColor: lk.$n.Colors.BRAND,
                        onConfirm: function () {
                            (L.YX.updateSetting(n), bi(n, !1));
                        },
                        onCancel: function () {
                            (L.YX.updateSetting(n), L.Zr.updateSetting(n ? sh.A.getGuildIds() : []), bi(n, !0));
                        },
                    }));
            } else {
                let n = (0, n8.xo)();
                (e ? n.delete(t) : n.add(t),
                    L.Zr.updateSetting(Array.from(n)),
                    tt.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: C8.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eC.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    br = (0, d.E2)(c.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [C7(), bs()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, CJ.xk)(),
                s = (0, h.bG)([d7.Ay], () => d7.Ay.getFlattenedGuildIds()),
                l = (0, h.bG)([sh.A], () => sh.A.getGuilds()),
                r =
                    ((e = L.$s.useSetting()),
                    (t = (0, C3.K)()),
                    (0, h.bG)(
                        [sh.A],
                        () => {
                            let n = new Set(e);
                            return sh.A.getGuildIds().filter((e) => n.has(e) !== t).length;
                        },
                        [e, t],
                    )),
                a = s[0];
            E.useEffect(
                () =>
                    C2.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = CJ.xk.getState().selectedGuildId;
                            "" === t && "" !== e && n === CJ.YG && null != a
                                ? i(a)
                                : "" === e && n !== CJ.YG && i(CJ.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = E.useMemo(() => {
                    let e = [];
                    return (
                        e.push({
                            ...C6,
                            id: C6.value,
                            label: C6.label(),
                            leading: (0, A.jsx)("div", {
                                className: C5.KP,
                                children: (0, A.jsx)(C1.p, {
                                    size: "sm",
                                    color: "white",
                                    "aria-hidden": !0,
                                    className: C5.cl,
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
                                    leading: (0, A.jsx)(cd.Ay, {
                                        className: C5.cl,
                                        guild: n,
                                        size: cd.Ay.Sizes.SMALLER,
                                        active: !0,
                                    }),
                                });
                        }),
                        e
                    );
                }, [s, l]),
                u = n === CJ.YG && r > 0;
            return (0, A.jsxs)(A.Fragment, {
                children: [
                    (0, A.jsx)(xS.Z, {
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
                            className: C5.h_,
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
    ba = (0, d.E2)(c.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            let e = (0, C0.Tx)(),
                t = Ct();
            return e === CJ.YG && null != t;
        },
        Component: function () {
            let e = Ct(),
                t = Ce(_0.YA.AGE_CONFIRMATION_NOTICE, fs),
                n = Ce(_0.YA.CONTENT_AND_SOCIAL_NOTICE, fe.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, A.jsx)(N9, {
                        noticeType: _0.YA.AGE_CONFIRMATION_NOTICE,
                        iconAlign: "center",
                        body: R.intl.format(fa.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        buttonText: R.intl.string(fa.default["cI+bc/"]),
                        onButtonClick: t.handleConfirmAge,
                    });
                case "teen":
                    return (0, A.jsx)(N9, {
                        noticeType: _0.YA.CONTENT_AND_SOCIAL_NOTICE,
                        iconAlign: "start",
                        body: R.intl.format(fa.default["l+jt8J"], { handleOnConfirmAgeHook: n.handleConfirmAge }),
                        buttonText: R.intl.string(R.t.hvVgAZ),
                        onButtonClick: n.handleLearnMore,
                    });
                case void 0:
                    return null;
            }
        },
    }),
    bo = (0, d.zZ)(c.X.PERMISSIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Y5GYcX),
        useSubnavLabel: () => R.intl.string(R.t.YUU0RF),
        useInlineNotice: function () {
            let e = _1(),
                t = Cl();
            if ((0, C0.Tx)() === CJ.YG) return e ?? t;
        },
        buildLayout: () => [br, be, bl, ba],
    }),
    bu = (0, d.zZ)(c.X.SPAM_FILTERS_CATEGORY, { useTitle: () => R.intl.string(R.t.Qwuoic), buildLayout: () => [CR] }),
    bd = (0, d.zZ)(c.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = N4();
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
                let { sortedGames: e } = N4();
                return E.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, A.jsx)("img", {
                                src: O.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: Eb.CD,
                                height: Eb.CD,
                            }),
                            shape: Eb.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, A.jsx)("img", {
                                    src: O.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: Eb.YP,
                                    height: Eb.YP,
                                }),
                                shape: Eb.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: m.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [R.intl.string(R.t.YpCiMt)],
        initialize: () => {
            hi.A.fetch();
        },
        buildLayout: () => [N5, N6, N2, NQ],
    }),
    bc = (0, d.t_)(c.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => R.intl.string(R.t.Cz07t8),
        buildLayout: () => [Cj, bu, bo, CF, bd, C$],
    }),
    bg = (0, d.i4)(c.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.Cz07t8),
        icon: NZ.l,
        buildLayout: () => [bc],
    });
var bm = n(782603),
    bA = n(899847),
    bE = n(695515);
let bh = (0, d.Hn)(c.X.MOBILE_NOTIFICATION_DELAY, {
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
    bS = (0, d.zD)(c.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => R.intl.string(R.t["btbS+Z"]),
        useSubtitle: () =>
            R.intl.format(R.t.Q5crhR, { onClick: () => (0, ns.openUserSettings)(c.X.TTS_PLAYBACK_RATE) }),
        useValue: L.on.useSetting,
        setValue: L.on.updateSetting,
    }),
    bx = (0, d.Qx)(c.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.JZxxGx),
        useSubtitle: () => R.intl.string(R.t.HDLtJl),
        useValue: () => (0, h.bG)([aT.A], () => aT.A.getTTSType()),
        setValue: (e) => aC.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: R.intl.string(R.t.B1AGeJ), value: S.aVn.ALL_CHANNELS },
                { name: R.intl.string(R.t.uzZg9e), value: S.aVn.SELECTED_CHANNEL },
                { name: R.intl.string(R.t.DYO5Oi), value: S.aVn.NEVER },
            ];
        },
        usePredicate: () => w.$j,
    }),
    bp = c.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    bT = (0, d.bd)(bp, {
        useTitle: (e) => (e ? R.intl.string(R.t.RyimDk) : R.intl.string(R.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return tA(bp, {
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
        buildLayout: () => [bh, bS, bx],
    }),
    bf = (0, d.zZ)(c.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => R.intl.string(R.t["31DySj"]),
        buildLayout: () => [bT],
    }),
    bI = (0, d.zD)(c.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => R.intl.string(R.t.VH8AIJ),
        useSubtitle: () => R.intl.string(R.t["9K4qwX"]),
        useValue: function () {
            return (0, h.bG)([aT.A], () => !aT.A.getDisableUnreadBadge());
        },
        setValue: (e) => aC.default.setDisableUnreadBadge(!e),
    }),
    b_ = (0, d.zZ)(c.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.l6w3Vj),
        buildLayout: () => [bI],
    });
var bN = n(840559),
    bC = n(997187);
let bb = (0, Ez.mj)({
    kind: "user",
    name: "2026-09-update-email-settings-copy-subtext",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var by = n(723923);
let bv = by.px.map((e) =>
        (0, d.zD)(`${c.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, h.cf)([bC.A], () => bC.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, bN.CA)(e.category, t),
        }),
    ),
    bj = (0, d.Tf)(c.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => R.intl.string(R.t.Ra9Pwk),
        useSubtitle: () => R.intl.string(R.t.iYjQ8X),
        useLabel: () => R.intl.string(R.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, h.cf)([bC.A], () => bC.A.getEmailSettings());
            return by.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, bN.NI)(),
        useVariant: () => "critical-secondary",
    }),
    bO = (0, d.zZ)(c.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => R.intl.string(R.t["w/qqKK"]),
        useSubtitle: function () {
            let { enabled: e } = bb.useConfig({ location: "Email Settings Category" });
            return e ? R.intl.string(R.t.WViBDk) : void 0;
        },
        initialize: function () {
            let { initialized: e } = bC.A.getEmailSettings();
            e || (0, bN.cR)();
        },
        buildLayout: () => [...bv, bj],
    }),
    bL = (0, d.zD)(c.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t["/0WCll"]),
        useSubtitle: () => R.intl.string(R.t.wF9ih3),
        useValue: function () {
            return (0, h.bG)([aT.A], () => aT.A.getDesktopType()) !== S.nRU.NEVER;
        },
        setValue: (e) => aC.default.setDesktopType(e ? S.nRU.ALL : S.nRU.NEVER),
    });
var bR = n(832712),
    bD = n(543465),
    bP = n(790782);
let bG = (0, d.zD)(c.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => R.intl.string(R.t["k6m/si"]),
    useSubtitle: () => R.intl.string(R.t.LGynPs),
    useValue: () => (0, h.bG)([bD.Ay], () => bD.Ay.useNewNotifications),
    setValue: function (e) {
        (bR.A.setAccountFlag(EU.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (Aw.w.set("turnedOffNewNotifications", !0),
                tt.default.track(S.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: sh.A.getGuildsArray().filter(
                        (e) => bD.Ay.resolveGuildUnreadSetting(e) === bP.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, h.bG)(
            [li.default, bD.Ay],
            () =>
                li.default.getCurrentUser()?.isStaff() ||
                li.default.getCurrentUser()?.isStaffPersonal() ||
                bD.Ay.useNewNotifications,
        ),
});
var bM = n(534654);
let bU = (0, d.zD)(c.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => R.intl.string(R.t.z9h8Ym),
        useSubtitle: () => R.intl.string(R.t.TummoQ),
        useValue: () => (0, h.bG)([aT.A], () => aT.A.screenDowntimeReminder),
        setValue: (e) => aC.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, bM.A)(),
                t = (0, I5.Du)();
            return e && t;
        },
    }),
    bV = (0, d.zD)(c.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => R.intl.string(R.t.onrAy7),
        useSubtitle: () => R.intl.string(R.t["/071J7"]),
        useValue: L.gY.useSetting,
        setValue: (e) => L.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, bM.A)(),
                t = (0, I5.Du)();
            return e && t;
        },
    }),
    bk = (0, d.zD)(c.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.NjOMvh),
        useValue: L.oz.useSetting,
        setValue: function (e) {
            (L.oz.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: EU.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [R.intl.string(R.t.hi4dSk)],
    }),
    bw = (0, d.zD)(c.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.sQQgFj),
        useValue: L.NR.useSetting,
        setValue: function (e) {
            (L.NR.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: EU.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    bF = (0, d.zD)(c.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.FSNIvs),
        useValue: L.Yh.useSetting,
        setValue: function (e) {
            (L.Yh.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: EU.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    bB = (0, d.zD)(c.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.xBLMhQ),
        useValue: L.T3.useSetting,
        setValue: function (e) {
            (L.T3.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: EU.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var bz = n(815807);
let bY = (0, d.Hn)(c.X.REACTION_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: R.intl.string(R.t["9x/RtT"]), value: eB.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: R.intl.string(R.t.fJAbQd), value: eB.Tz.ONLY_DMS },
            { id: "disabled", label: R.intl.string(R.t["xu+UDU"]), value: eB.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: L.Zp.useSetting,
        setValue: (e) => (0, bz.n4)(e, L.Zp.getSetting()),
    }),
    bX = (0, d.zD)(c.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t["k51K1+"]),
        useValue: L.Qr.useSetting,
        setValue: function (e) {
            (L.Qr.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: EU.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    bH = (0, Ez.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    bK = (0, d.zD)(c.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.G8NPz6),
        useValue: L.zS.useSetting,
        setValue: function (e) {
            (L.zS.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: EU.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => bH.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    bW = (0, d.FW)(c.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.FEVRDV),
        buildLayout: () => [bF, bk, bw, bX, bK, bB, bY],
    }),
    bZ = (0, d.zD)(c.X.TASK_BAR_FLASHING, {
        useTitle: () => R.intl.string(R.t.xSmFQG),
        useSubtitle: () => R.intl.string(R.t.bd4j4x),
        useValue: () => (0, h.bG)([aT.A], () => aT.A.taskbarFlash),
        setValue: (e) => aC.default.setTaskbarFlash(e),
        usePredicate: () => (0, nm.uF)(),
    }),
    bq = (0, d.zZ)(c.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => R.intl.string(R.t["/dp6yY"]),
        buildLayout: () => [bL, bZ, bW, bG, bV, bU],
    });
var bQ = n(965957),
    b$ = n(312671),
    bJ = n(235079);
let b0 = (0, d.zD)(c.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = af.A.useHolidaySoundpack();
        return null == e ? "" : R.intl.format(R.t["E/OyBr"], { soundpack: R.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, h.bG)([b$.A], () => b$.A.getSoundpack()),
            t = af.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = af.A.getHolidaySoundpack();
        (ta()(null != t, "predicate should fail if no soundpack is available"), (0, bQ.p)(e ? t : bJ.i.CLASSIC));
    },
    usePredicate: af.A.useIsEligible,
});
var b1 = n(970931);
let b2 = {
        useTitle: () => R.intl.string(R.t.jD1qzM),
        sound: "message1",
        useDisabled: b1.kB,
        useDisabledMessage: () => ((0, b1.kB)() ? R.intl.string(R.t.cIRG0s) : void 0),
    },
    b3 = { useTitle: () => R.intl.string(R.t.XBrJT6), sound: "call_ringing" },
    b5 = (0, d.zD)(c.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.TzjwV9),
        useSubtitle: () => R.intl.format(R.t.OOiGCM, { onClick: () => av("message3") }),
        useValue: () =>
            (0, h.bG)([aT.A], () => aT.A.getNotifyMessagesInSelectedChannel() && !aT.A.getDisableAllSounds()),
        setValue: (e) => aC.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, h.bG)([aT.A], () => aT.A.getDisableAllSounds()),
    }),
    b6 = (0, d.zD)(c.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => R.intl.string(R.t["2ZhCOd"]),
        useSubtitle: () => R.intl.string(R.t.EAKdPr),
        useValue: () => (0, h.bG)([aT.A], () => aT.A.getDisableAllSounds()),
        setValue: (e) => aC.default.toggleDisableAllSounds(e),
    }),
    b4 = (0, d.D1)(c.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                ay();
            };
        },
        buildLayout: () => [aj(b2), b5, aj(b3), b6],
    }),
    b8 = (0, d.AK)(c.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t["MMy+lm"]),
        useSearchTerms: () => [R.intl.string(R.t["MMy+lm"])],
        destinationKey: c.X.SOUNDS_CATEGORY,
    }),
    b7 = (0, d.gN)(c.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [b8] }),
    b9 = (0, d.zZ)(c.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.LweOYy),
        buildLayout: () => [b0, b4, b7],
    }),
    ye = (0, d.t_)(c.X.NOTIFICATIONS_PANEL, {
        useTitle: () => R.intl.string(R.t.HcoRu0),
        initialize: () => {
            null != bE.A.getAgeGroup() || bE.A.isLoading() || (bE.A.canRefetch() && bA.Ay.initialPageLoad());
        },
        buildLayout: () => [bq, b9, b_, bO, bf],
    }),
    yt = (0, d.i4)(c.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.HcoRu0),
        icon: bm.BellIcon,
        buildLayout: () => [ye],
    }),
    yn = (0, d.WI)(c.X.USER_SECTION, {
        useTitle: () => R.intl.string(R.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [_m, NW, bg, yt, _K],
    });
var yi = n(387758),
    ys = n(271866),
    yl = n(147964),
    yr = n(868511);
let ya = (0, d.zD)(c.X.APPLICATION_TEST_MODE, {
        useTitle: () => R.intl.string(R.t.erOqlh),
        useSubtitle: () => R.intl.string(R.t["52hMnD"]),
        usePredicate: L.Q_.useSetting,
        useValue: () => (0, h.bG)([yl.A], () => null != yl.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, sa.openModal)((e) => (0, A.jsx)(yr.A, { ...e })) : ys.cL();
        },
    }),
    yo = (0, d.zD)(c.X.DEVELOPER_MODE, {
        useTitle: () => R.intl.string(R.t.ObIb1Q),
        useSubtitle: () => R.intl.format(R.t["CY6q/Q"], { apiDocsUrl: S.X7G.API_DOCS }),
        useValue: L.Q_.useSetting,
        setValue: L.Q_.updateSetting,
        usePredicate: () => uv.p5,
    }),
    yu = (0, d.zZ)(c.X.DEVELOPER_CATEGORY, { buildLayout: () => [yo, ya] }),
    yd = (0, d.t_)(c.X.DEVELOPER_PANEL, { useTitle: () => R.intl.string(R.t["0BRxRp"]), buildLayout: () => [yu] }),
    yc = (0, d.i4)(c.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: yi.G,
        useTitle: () => R.intl.string(R.t["0BRxRp"]),
        buildLayout: () => [yd],
    });
var yg = n(70688),
    ym = n(830215);
let yA = (0, d.i4)(c.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => R.intl.string(R.t["2jxGer"]),
        icon: yg.DoorExitIcon,
        onClick: () => {
            (0, n$.A)({
                title: R.intl.string(R.t["2jxGer"]),
                subtitle: R.intl.string(R.t.SUnWBB),
                confirmText: R.intl.string(R.t["2jxGer"]),
                onConfirm: () => {
                    ym.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    yE = (0, d.WI)(c.X.UTILITY_SECTION, {
        useTitle: () => R.intl.string(R.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [yc, yA],
    }),
    yh = (0, d.Hr)({ buildLayout: () => [T6, yn, m9, a5, xv, E_, yE], analyticsKey: "user_settings" });
